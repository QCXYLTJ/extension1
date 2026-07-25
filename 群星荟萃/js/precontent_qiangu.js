import { lib, game, ui, get, ai, _status } from '../../../noname.js';
const packs = function () {
    var qg_characterPack = {
        name: 'qg_characterPack',
        connect: true,
        characterSort: {
            qg_characterPack: {
                qg_千古兴蜀: ['qg_xuan_zhugeliang', 'qg_xuan_huangyueying', 'qg_xuan_liubei', 'qg_xuan_sunshangxiang'],
                qg_千古凛魏: ['qg_xuan_simayi', 'qg_xuan_zhangchunhua', 'qg_xuan_caorui', 'qg_xuan_guohuanghou'],
                qg_千古砥吴: ['qg_xuan_luxun', 'qg_xuan_sunru', 'qg_xuan_sunquan', 'qg_xuan_bulianshi'],
                qg_千古缚群: ['qg_xuan_liubiao', 'qg_xuan_caifuren', 'qg_xuan_liuyan', 'qg_xuan_lushi'],
                qg_千古夺晋: ['qg_xuan_simazhao', 'qg_xuan_simashi', 'qg_xuan_simayan', 'qg_xuan_simafu'],
            },
        },
        character: {
            qg_xuan_zhugeliang: ['male', 'shu', 3, ['qg_jietian', 'qg_qiming']],
            qg_xuan_huangyueying: ['male', 'shu', 3, ['qg_lingji', 'qg_zhixin']],
            qg_xuan_liubei: ['male', 'shu', 4, ['qg_jimin', 'qg_fenliang']],
            qg_xuan_sunshangxiang: ['male', 'shu', 3, ['qg_saying', 'qg_jieyi'], ['border:wu']],
            qg_xuan_simayi: ['male', 'wei', 3, ['qg_yinjie', 'qg_langmou'], ['border:jin']],
            qg_xuan_zhangchunhua: ['female', 'wei', '3/4', ['qg_qingshi', 'qg_fangfei']],
            qg_xuan_caorui: ['male', 'wei', 3, ['qg_xingrong', 'qg_zhenye']],
            qg_xuan_guohuanghou: ['female', 'wei', 3, ['qg_guizi', 'qg_zeli']],
            qg_xuan_luxun: ['male', 'wu', 3, ['qg_qianmou', 'qg_yanfu']],
            qg_xuan_sunru: ['female', 'wu', 3, ['qg_fuxu', 'qg_xinwang']],
            qg_xuan_sunquan: ['male', 'wu', 4, ['qg_jiye', 'qg_dingwu']],
            qg_xuan_bulianshi: ['female', 'wu', 3, ['qg_wenxu', 'qg_wumian']],
            qg_xuan_liubiao: ['male', 'qun', 3, ['qg_zuotan', 'qg_fujing']],
            qg_xuan_caifuren: ['female', 'qun', 3, ['qg_quanjian', 'qg_fushi']],
            qg_xuan_liuyan: ['male', 'qun', 4, ['qg_zhoumu', 'qg_tucun']],
            qg_xuan_lushi: ['female', 'qun', 3, ['qg_fudao', 'qg_zhuyan']],
            qg_xuan_simazhao: ['male', 'jin', 3, ['qg_woquan', 'qg_xiezheng']],
            qg_xuan_simashi: ['male', 'jin', 3, ['qg_quanfu', 'qg_chenzhao']],
            qg_xuan_simayan: ['male', 'jin', 3, ['qg_dengzun', 'qg_santong']],
            qg_xuan_simafu: ['male', 'jin', 3, ['qg_shenyin', 'qg_caida']],
        },
        skill: {
            qg_xuantong: {
                trigger: { global: 'roundStart' },
                filter(event, player) {
                    if (!Array.isArray(player.skipList)) return false;
                    return lib.phaseName?.some((phase) => !player.skipList.includes(phase));
                },
                forced: true,
                async content(event, trigger, player) {
                    const phaseList = lib.phaseName.filter((phase) => !player.skipList.includes(phase));
                    const result =
                        phaseList.length > 1
                            ? await player
                                .chooseControl(phaseList)
                                .set('ai', () => {
                                    const { player, controls } = get.event();
                                    if (
                                        controls.includes('phaseJudge') &&
                                        player.hasVCard((card) => {
                                            return get.effect(player, { name: card.name }, player, player) < 0;
                                        }, 'e')
                                    )
                                        return 'phaseJudge';
                                    if (controls.includes('phaseDiscard') && player.needsToDiscard()) return 'phaseDiscard';
                                    return (() => {
                                        let list = [
                                            ...(() => {
                                                let list = [],
                                                    list2 = ['phaseZhunbei', 'phaseJieshu'].filter((phase) => controls.includes(phase));
                                                while (list2.length) list.add(list2.randomRemove());
                                                return list;
                                            })(),
                                            'phaseDiscard',
                                            'phaseJudge',
                                            'phaseUse',
                                            'phaseDraw',
                                        ];

                                        list.addArray(lib.phaseName);
                                        return list;
                                    })().find((phase) => controls.includes(phase));
                                })
                                .set('prompt', '玄通:请选择你要跳过的阶段')
                                .forResult()
                            : { control: phaseList[0] };
                    const control = result.control;
                    player.popup(control);
                    game.log(player, '选择跳过了', '#y' + get.translation(control));
                    player.skipList.add(control);
                    let list = [],
                        skills = [];
                    if (get.mode() === 'guozhan') {
                        list.addArray(
                            Object.keys(lib.characterPack.mode_guozhan).filter((i) => {
                                if (i.indexOf('gz_jun') === 0 || lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) return false;
                                return lib.character[i];
                            }),
                        );
                    } else if (_status.connectMode) list = get.charactersOL();
                    else {
                        list.addArray(
                            Object.keys(lib.character).filter((i) => {
                                if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) return false;
                                return lib.character[i];
                            }),
                        );
                    }
                    for (const name of list) {
                        for (const skill of get.character(name)?.skills ?? []) {
                            if (player.getSkills(null, false, false).includes(skill) || skills.includes(skill)) continue;
                            const info = get.info(skill);
                            if (!info || info.charlotte || info.init || (info.ai && (info.ai.combo || info.ai.notemp || info.ai.neg))) continue;
                            if (get.plainText(get.skillInfoTranslation(skill)).includes(get.translation(control))) skills.add(skill);
                        }
                    }
                    if (skills.length) await player.addAdditionalSkills(event.name, skills.randomGet(), true);
                    skills = player.additionalSkills?.[event.name] ?? [];
                    if (skills.length > 2) {
                        const links = (
                            await player
                                .chooseButton(
                                    [
                                        '玄通:请选择失去' + get.cnNumber(skills.length - 2) + '个溢出的技能',
                                        [
                                            skills.map((skill) => {
                                                return [skill, '<div class="popup text" style="width:calc(100% - 10px);display:inline-block"><div class="skill">【' + get.translation(skill) + '】</div><div>' + lib.translate[skill + '_info'] + '</div></div>'];
                                            }),
                                            'textbutton',
                                        ],
                                    ],

                                    true,
                                    skills.length - 2,
                                )
                                .set('ai', (button) => -get.skillRank(button.link))
                                .forResult()
                        ).links;
                        if (links?.length) {
                            await player.changeSkills([], links).set('$handle', (player, addSkills, removeSkills) => {
                                for (const skill of removeSkills) player.popup(skill);
                                game.log(player, '失去了技能', ...removeSkills.map((i) => '#g【' + get.translation(i) + '】'));
                                player.removeSkill(removeSkills);
                                if (Array.isArray(player.additionalSkills?.qg_xuantong)) {
                                    player.additionalSkills.qg_xuantong.removeArray(removeSkills);
                                    if (!player.additionalSkills.qg_xuantong.length) delete player.additionalSkills.qg_xuantong;
                                }
                            });
                        }
                    }
                },
            },
            qg_jietian: {
                audio: 'ext:群星荟萃/audio/skill:2',
                enable: 'phaseUse',
                filterCard: true,
                viewAs: { name: 'huogong' },
                viewAsFilter(player) {
                    return player.countCards('hs');
                },
                position: 'hs',
                check: (card) => 8 - get.value(card),
                precontent() {
                    player.addTempSkill('qg_jietian_effect');
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        trigger: {
                            player: 'useCardAfter',
                            source: 'damageSource',
                        },
                        getIndex: (event) => (event.name === 'damage' ? event.num || 1 : 1),
                        filter(event, player) {
                            if (event.name === 'damage') return event.qg_jietian;
                            return event.skill === 'qg_jietian';
                        },
                        forced: true,
                        popup: false,
                        async content(event, trigger, player) {
                            if (trigger.name === 'useCard') {
                                const goon = game.hasPlayer2((t) => t.hasHistory('damage', (evt) => evt.card === trigger.card));
                                if (!goon) {
                                    await player.damage('fire', 1);
                                    return;
                                }
                                const result = await player
                                    .chooseTarget(
                                        '借天:是否任意名与你势力相同的角色各造成1点火属性伤害？',
                                        (card, player, target) => {
                                            return target.group === player.group;
                                        },
                                        [1, Infinity],
                                    )
                                    .set('ai', (target) => {
                                        const player = get.player();
                                        return get.damageEffect(target, player, player, 'fire');
                                    })
                                    .forResult();
                                if (result?.bool && result.targets?.length) {
                                    const targets = result.targets.sortBySeat();
                                    player.line(targets);
                                    for (const target of targets) await target.damage('fire', 1).set('qg_jietian', true);
                                }
                            } else {
                                let cards = get.cards(3, true).slice();
                                const gains = (
                                    await player
                                        .chooseButton(['借天:选择获得其中一张牌', cards], true)
                                        .set('ai', (button) => get.value(button.link))
                                        .forResult()
                                ).links;
                                if (gains?.length) {
                                    cards.removeArray(gains);
                                    await player.gain(gains, 'gain2');
                                    const number = Math.max(...cards.map((card) => card.number));
                                    cards = cards.filter((card) => card.number === number);
                                    while (
                                        cards.some((card) => {
                                            return lib.inpile.some((name) => {
                                                if (get.type(name) !== 'delay') return false;
                                                return game.hasPlayer((target) => target.canAddJudge({ name: name }));
                                            });
                                        })
                                    ) {
                                        const result = await player
                                            .chooseButton(['借天:是否将剩余牌中的其中一张作为任意判定牌置于一名角色的判定区？', cards, [lib.inpile.filter((name) => get.type(name) === 'delay').map((name) => [name, get.translation(name)]), 'tdnodes']], 2)
                                            .set('filterButton', (button) => {
                                                const link = button.link,
                                                    goon = typeof link === 'string';
                                                if (goon !== Boolean(ui.selected.buttons.length)) return false;
                                                if (!goon)
                                                    return lib.inpile.some((name) => {
                                                        if (get.type(name) !== 'delay') return false;
                                                        return game.hasPlayer((target) => target.canAddJudge({ name: name }));
                                                    });
                                                return game.hasPlayer((target) => target.canAddJudge({ name: link }));
                                            })
                                            .set('ai', (button) => {
                                                const player = get.player(),
                                                    link = button.link,
                                                    goon = typeof link === 'string';
                                                if (!goon)
                                                    return Math.max(
                                                        ...game
                                                            .filterPlayer()
                                                            .map((target) => {
                                                                return [0].concat(
                                                                    lib.inpile
                                                                        .filter((name) => {
                                                                            if (get.type(name) !== 'delay') return false;
                                                                            return target.canAddJudge({ name: name });
                                                                        })
                                                                        .map((name) => get.effect(target, { name: name }, player, player)),
                                                                );
                                                            })
                                                            .flat(),
                                                    );
                                                return Math.max(
                                                    ...game
                                                        .filterPlayer((target) => target.canAddJudge({ name: link }))
                                                        .map((target) => {
                                                            return get.effect(target, { name: link }, player, player);
                                                        }),
                                                );
                                            })
                                            .forResult();
                                        if (result?.bool && result.links?.length) {
                                            const card = { name: result.links[1] };
                                            const result2 = await player
                                                .chooseTarget(
                                                    '借天:请选择一名角色,将' + get.translation(card) + '置入其判定区',
                                                    (cardx, player, target) => {
                                                        return target.canAddJudge(get.event().cardx);
                                                    },
                                                    true,
                                                )
                                                .set('ai', (target) => {
                                                    const player = get.player(),
                                                        card = get.event().cardx;
                                                    return get.effect(target, card, player, player);
                                                })
                                                .set('cardx', card)
                                                .forResult();
                                            if (result2?.bool && result2.targets?.length) {
                                                const target = result2.targets[0];
                                                player.line(target);
                                                cards.remove(result.links[0]);
                                                if (target.canAddJudge(card)) {
                                                    target.$gain2(card, false);
                                                    await target.addJudge({ name: result.links[1] }, [result.links[0]]);
                                                }
                                            } else break;
                                        } else break;
                                    }
                                }
                            }
                        },
                    },
                },
            },
            qg_qiming: {
                audio: 'ext:群星荟萃/audio/skill:2',
                derivation: 'tuixinzhifu',
                global: 'qg_qiming_global',
                subSkill: {
                    global: {
                        mod: {
                            cardname(card, player) {
                                if (
                                    !game.hasPlayer((target2) => {
                                        if (target2 === player || !target2.hasSkill('qg_qiming')) return false;
                                        return _status.currentPhase !== target2;
                                    })
                                )
                                    return;
                                const event = get.event();
                                if (event.qg_qiming_global && !event.qg_qiming_global[0]) return 'tuixinzhifu';
                            },
                            playerEnabled(card, player, target) {
                                const targets = game.filterPlayer((target2) => {
                                    if (target2 === player || !target2.hasSkill('qg_qiming')) return false;
                                    return _status.currentPhase !== target2;
                                });
                                if (!targets.length) return;
                                const event = get.event();
                                if (event.qg_qiming_global && !event.qg_qiming_global[1] && targets.includes(target) && get.tag(card, 'damage') >= 0.5) return false;
                            },
                        },
                        onChooseToUse(event) {
                            if (!game.online && !event.qg_qiming_global) {
                                const player = event.player;
                                event.set('qg_qiming_global', [player.hasHistory('useCard'), player.hasHistory('useCard', (evt) => get.tag(evt.card, 'damage') >= 0.5)]);
                            }
                        },
                    },
                },
            },
            qg_lingji: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: {
                    player: 'loseAfter',
                    global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                },
                getIndex(event, player, triggername) {
                    return (event.name === 'equip' ? 1 : 0) + ((event.getl?.(player)?.es?.length ?? 0) > 0 ? 1 : 0);
                },
                filter(event, player) {
                    return Array.from({ length: 5 })
                        .map((_, i) => i + 1)
                        .some((num) => player.hasEmptySlot(num));
                },
                forced: true,
                async content(event, trigger, player) {
                    await player.draw(
                        Array.from({ length: 5 })
                            .map((_, i) => i + 1)
                            .reduce((sum, num) => {
                                return sum + player.hasEmptySlot(num);
                            }, 0),
                    );
                    let list = [],
                        skills = [];
                    if (get.mode() === 'guozhan') {
                        list.addArray(
                            Object.keys(lib.characterPack.mode_guozhan).filter((i) => {
                                if (i.indexOf('gz_jun') === 0 || lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) return false;
                                return lib.character[i];
                            }),
                        );
                    } else if (_status.connectMode) list = get.charactersOL();
                    else {
                        list.addArray(
                            Object.keys(lib.character).filter((i) => {
                                if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) return false;
                                return lib.character[i];
                            }),
                        );
                    }
                    for (const name of list) {
                        for (const skill of get.character(name)?.skills ?? []) {
                            if (player.getSkills(null, false, false).includes(skill) || skills.includes(skill)) continue;
                            const info = get.info(skill);
                            if (!info || info.charlotte || info.init || (info.ai && (info.ai.combo || info.ai.notemp || info.ai.neg))) continue;
                            if (get.plainText(get.skillInfoTranslation(skill)).includes('锦囊')) skills.add(skill);
                        }
                    }
                    if (skills.length) await player.addSkills(skills.randomGet());
                },
                group: 'qg_lingji_init',
                subSkill: {
                    init: {
                        audio: 'qg_lingji',
                        trigger: {
                            global: 'phaseBefore',
                            player: 'enterGame',
                        },
                        filter(event, player) {
                            return event.name !== 'phase' || game.phaseNumber === 0;
                        },
                        forced: true,
                        async content(event, trigger, player) {
                            let list = [];
                            while (true) {
                                const card = get.cardPile2((card) => {
                                    if (get.type(card) !== 'equip' || !player.hasUseTarget(card)) return false;
                                    const types = get.subtypes(card);
                                    return Array.isArray(types) && !types.some((type) => list.includes(type));
                                });
                                if (card) {
                                    list.addArray(get.subtypes(card));
                                    await player.chooseUseTarget(card, true, false);
                                } else break;
                            }
                        },
                    },
                },
            },
            qg_zhixin: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { global: 'judge' },
                check(event, player) {
                    return event.judge(event.player.judging[0]) * get.attitude(player, event.player) < 0;
                },
                prompt2(event, player) {
                    return '使用牌堆底的牌代替' + get.translation(event.player) + '的判定结果' + get.translation(event.player.judging);
                },
                logTarget: 'player',
                async content(event, trigger, player) {
                    const card = get.bottomCards()[0];
                    const next = game.cardsGotoOrdering(card);
                    next.relatedEvent = trigger;
                    await next;
                    player.$throw(card);
                    if (trigger.player.judging[0].clone) {
                        trigger.player.judging[0].clone.classList.remove('thrownhighlight');
                        game.broadcast((card) => {
                            if (card.clone) card.clone.classList.remove('thrownhighlight');
                        }, trigger.player.judging[0]);
                        game.addVideo('deletenode', player, get.cardsInfo([trigger.player.judging[0].clone]));
                    }
                    await game.cardsDiscard(trigger.player.judging[0]);
                    trigger.player.judging[0] = card;
                    game.log(trigger.player, '的判定牌被改为', card);
                },
                group: ['qg_zhixin_change', 'qg_zhixin_gain'],
                subSkill: {
                    change: {
                        audio: 'qg_zhixin',
                        trigger: { player: 'phaseChange' },
                        filter(event, player) {
                            return event.phaseList[event.num].indexOf('phaseJudge') !== -1;
                        },
                        forced: true,
                        content() {
                            trigger.phaseList[trigger.num] = 'phaseDraw|qg_zhixin';
                        },
                        ai: {
                            effect: {
                                target(card) {
                                    if (get.type(card) === 'delay') return 'zeroplayertarget';
                                },
                            },
                        },
                    },
                    gain: {
                        audio: 'qg_zhixin',
                        trigger: {
                            get global() {
                                return lib.inpile
                                    .filter((name) => {
                                        return get.type(name) === 'delay';
                                    })
                                    .map((name) => {
                                        return ['Cancel', ''].map((str) => name + str + 'After');
                                    })
                                    .flat();
                            },
                        },
                        filter(event, player) {
                            if (event.parent.name === 'useCard') return false;
                            return event.cards?.someInD('odj');
                        },
                        prompt2(event, player) {
                            return '获得' + get.translation(event.cards.filterInD('odj'));
                        },
                        check(event, player) {
                            return event.cards && event.cards.filterInD('odj').reduce((sum, card) => sum + get.value(card), 0) > 0;
                        },
                        content() {
                            player.gain(trigger.cards.filterInD('odj'));
                        },
                    },
                },
            },
            qg_jimin: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { global: ['loseAfter', 'equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'] },
                getIndex(event, player, triggername) {
                    return game.filterPlayer((target) => {
                        if (player.getStorage('qg_jimin_used').includes(target)) return false;
                        return event.getl(target).hs.length;
                    });
                },
                filter(event, player, name, target) {
                    if (!target?.isIn()) return false;
                    const suits = event.getl(target).hs.map((card) => card.suit);
                    return !target.hasCard((card) => suits.includes(card.suit), 'h');
                },
                logTarget: (event, player, name, target) => target,
                check(event, player, name, target) {
                    const cards = event.getl(target).hs.filterInD('od');
                    return (
                        get.effect(player, { name: 'losehp' }, player, player) +
                        Math.max(
                            ...(() => {
                                let list = [get.effect(target, { name: 'draw' }, target, player) * 2];
                                if (cards.length) list.push(cards.reduce((sum, card) => sum + get.value(card, target), 0) * Math.sign(get.attitude(player, target)));
                                return list;
                            })(),
                        ) >
                        0
                    );
                },
                async content(event, trigger, player) {
                    const [target] = event.targets,
                        cards = trigger.getl(target).hs.filterInD('od');
                    player.addTempSkill('qg_jimin_used');
                    player.markAuto('qg_jimin_used', [target]);
                    await player.loseHp();
                    const result = cards.length
                        ? await target
                            .chooseControl()
                            .set('choiceList', ['摸两张牌', '获得' + get.translation(cards)])
                            .set('cards', cards)
                            .set('ai', () => {
                                const { player, cards } = get.event();
                                return get.effect(player, { name: 'draw' }, player, player) * 2 > cards.reduce((sum, card) => sum + get.value(card, player), 0) ? 0 : 1;
                            })
                            .set('prompt', '济民:' + get.translation(player) + '对你发起了救济,请选择一项')
                            .forResult()
                        : { index: 0 };
                    if (result.index === 0) await target.draw(2);
                    else await target.gain(cards, 'gain2');
                },
                subSkill: {
                    used: { charlotte: true },
                },
            },
            qg_fenliang: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { player: 'phaseJieshuBegin' },
                filter(event, player) {
                    return player.countCards('h') !== game.countPlayer();
                },
                check(event, player) {
                    return player.countCards('h') < game.countPlayer();
                },
                async content(event, trigger, player) {
                    if (player.countCards('h') < game.countPlayer()) await player.drawTo(game.countPlayer());
                    else await player.chooseToDiscard('h', true, player.countCards('h') - game.countPlayer());
                    const wugu = new lib.element.VCard({ name: 'wugu' });
                    if (player.countCards('h') && game.hasPlayer((target) => player.inRange(target) && player.canUse(wugu, target, false))) {
                        const result = await player
                            .chooseTarget(
                                '分粮:是否视为对攻击范围内的任意名角色使用【五谷丰登】？',
                                (cardx, player, target) => {
                                    return player.inRange(target) && player.canUse({ name: 'wugu' }, target, false);
                                },
                                [
                                    1,
                                    (() => {
                                        const suits = player
                                            .getCards('h')
                                            .map((card) => card.suit)
                                            .unique();
                                        return Math.max(...suits.map((suit) => player.countCards('h', { suit: suit })));
                                    })(),
                                ],
                            )
                            .set('ai', (target) => {
                                const player = get.player(),
                                    card = new lib.element.VCard({ name: 'wugu' });
                                return get.effect(target, card, player, player);
                            })
                            .set('animate', false)
                            .forResult();
                        if (result?.bool && result.targets?.length) {
                            const targets = result.targets.sortBySeat();
                            const suits = player
                                .getCards('h', (card) => {
                                    return player.countCards('h', { suit: card.suit }) >= targets.length;
                                })
                                .map((card) => card.suit)
                                .unique()
                                .sort((a, b) => lib.suit.indexOf(b) - lib.suit.indexOf(a));
                            const suit =
                                suits.length > 1
                                    ? (
                                        await player
                                            .chooseControl(suits)
                                            .set('ai', () => {
                                                const { player, controls } = get.event();
                                                return controls.slice().sort((a, b) => {
                                                    return player.getCards('h', { suit: a }).reduce((sum, card) => sum + get.value(card), 0) - player.getCards('h', { suit: b }).reduce((sum, card) => sum + get.value(card), 0);
                                                })[0];
                                            })
                                            .set('prompt', '请选择一个花色')
                                            .forResult()
                                    ).control
                                    : suits[0];
                            player
                                .when({ global: 'wuguRemained' })
                                .filter((evt) => evt.getParent(3) === event)
                                .then(() => {
                                    const remained = trigger.remained.filterInD('d');
                                    if (remained.length) player.gain(remained, 'gain2');
                                });
                            await player.useCard(
                                new lib.element.VCard({
                                    name: 'wugu',
                                    storage: { fixedShownCards: player.getCards('h', { suit: suit }) },
                                }),
                                targets,
                                false,
                            );
                        }
                    }
                },
            },
            qg_saying: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { global: 'useCard' },
                filter(event, player) {
                    if (!event.targets?.length || event.getParent(2).name === 'qg_saying_effect') return false;
                    return event.card && event.card.isCard && event.cards.length === 1 && event.cards.someInD('od');
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseTarget(get.prompt2('qg_saying'))
                        .set('ai', (target) => {
                            const player = get.player(),
                                trigger = get.event().getTrigger();
                            return (
                                get.effect(target, trigger.cards[0], trigger.player, player) -
                                trigger.targets.reduce((sum, target) => {
                                    return sum + get.effect(target, trigger.card, player, player);
                                }, 0)
                            );
                        })
                        .forResult();
                },
                async content(event, trigger, player) {
                    const next = event.targets[0].addToExpansion(trigger.cards.filterInD('od'), 'gain2');
                    next.gaintag.add('qg_saying');
                    await next;
                    trigger.targets.length = 0;
                    trigger.all_excluded = true;
                    game.log(trigger.card, '被无效了');
                },
                marktext: '影',
                intro: {
                    content: 'expansion',
                    markcount: 'expansion',
                },
                onremove(player, skill) {
                    const cards = player.getExpansions(skill);
                    if (cards.length) player.loseToDiscardpile(cards);
                },
                group: 'qg_saying_effect',
                subSkill: {
                    effect: {
                        audio: 'qg_saying', //QQQ
                        trigger: { global: 'phaseBegin' },
                        filter(event, player) {
                            return event.player.getExpansions('qg_saying').some((card) => player.canUse(card, event.player, false));
                        },
                        prompt2(event, player) {
                            return '依次对' + get.translation(event.player) + '使用' + get.translation(event.player.getExpansions('qg_saying')) + '中可以对其使用的牌';
                        },
                        check(event, player) {
                            return (
                                event.player
                                    .getExpansions('qg_saying')
                                    .filter((card) => {
                                        return player.canUse(card, event.player, false);
                                    })
                                    .reduce((sum, card) => sum + get.effect(event.player, card, player, player), 0) > 0
                            );
                        },
                        logTarget: 'player',
                        async content(event, trigger, player) {
                            const target = trigger.player;
                            while (true) {
                                const card = target.getExpansions('qg_saying').find((card) => player.canUse(card, target, false));
                                if (card) await player.useCard(card, target, false);
                                else break;
                            }
                        },
                    },
                },
            },
            qg_jieyi: {
                enable: 'phaseUse',
                trigger: { player: 'damageEnd' },
                filter(event, player) {
                    if (event.name === 'phaseUse' && player.getStorage('qg_jieyi').includes(event)) return false;
                    return game.hasPlayer((target) => {
                        if (target === player) return false;
                        return player.hasCard((card) => {
                            if (get.position(card) === 'h' && lib.filter.cardDiscardable(card, player)) return true;
                            return get.type(card) === 'equip' && target.canEquip(card);
                        }, 'he');
                    });
                },
                filterCard(card, player) {
                    return game.hasPlayer((target) => {
                        if (target === player) return false;
                        if (get.position(card) === 'h' && lib.filter.cardDiscardable(card, player)) return true;
                        return get.type(card) === 'equip' && target.canEquip(card);
                    });
                },
                check(card) {
                    const player = get.player();
                    return Math.max(
                        ...game
                            .filterPlayer((target) => target !== player)
                            .map((target) => {
                                let list = [],
                                    filter = (cardx) => cardx !== card;
                                const extraEffectNum = Math.max(
                                    ...(() => {
                                        let list = [];
                                        const bool = get.position(card) === 'h' && lib.filter.cardDiscardable(card, player),
                                            goon = get.type(card) === 'equip' && target.canEquip(card);
                                        if (bool) list.push(8 - get.value(card));
                                        if (goon) list.push(get.effect(target, card, target, player));
                                        return list;
                                    })(),
                                );
                                const eff = [target.countCards('h', filter) <= player.countCards('h', filter) || target.getHp() <= player.getHp(), target.countCards('h', filter) >= player.countCards('h', filter) || target.getHp() >= player.getHp()];
                                if (eff[0]) list.push(get.effect(player, { name: 'draw' }, player, player) + get.recoverEffect(target, player, player));
                                if (eff[1]) list.push(get.effect(target, { name: 'draw' }, player, player) + get.recoverEffect(player, player, player));
                                return list.map((num) => num + extraEffectNum);
                            })
                            .flat(),
                    );
                },
                filterTarget(cardx, player, target) {
                    const [card] = ui.selected.cards;
                    if (!card) return false;
                    if (target === player) return false;
                    if (get.position(card) === 'h' && lib.filter.cardDiscardable(card, player)) return true;
                    return get.type(card) === 'equip' && target.canEquip(card);
                },
                lose: false,
                discard: false,
                delay: false,
                async cost(event, trigger, player) {
                    const info = get.info('qg_jieyi');
                    event.result = await player
                        .chooseCardTarget({
                            prompt: get.prompt2('qg_jieyi'),
                            filterCard: info.filterCard,
                            filterTarget: info.filterTarget,
                            ai1: info.check,
                            ai2(target) {
                                const player = get.player();
                                return get.effect(target, 'qg_jieyi', player, player);
                            },
                        })
                        .forResult();
                },
                async content(event, trigger, player) {
                    const card = event.cards?.[0],
                        target = event.target ?? event.targets?.[0];
                    if (!card || !target) return;
                    if (!trigger) {
                        player.addTempSkill('qg_jieyi_used');
                        player.markAuto('qg_jieyi_used', [event.getParent(2)]);
                    }
                    const bool = get.position(card) === 'h' && lib.filter.cardDiscardable(card, player),
                        goon = get.type(card) === 'equip' && target.canEquip(card);
                    if (bool || goon) {
                        let result;
                        if (!bool) result = { index: 1 };
                        else if (!goon) result = { index: 0 };
                        else {
                            const str = get.translation(card);
                            result = await player
                                .chooseControl()
                                .set('choiceList', ['弃置' + str, '将' + str + '置入' + get.translation(target) + '的装备区'])
                                .set('card', card)
                                .set('target', target)
                                .set('ai', () => {
                                    const { player, target, card } = get.event();
                                    return get.effect(target, card, player, player) > 0 ? 1 : 0;
                                })
                                .forResult();
                        }
                        if (result.index === 0) await player.discard([card]);
                        else {
                            player.$give(card, target, false);
                            await target.equip(card);
                        }
                    }
                    const eff = [target.countCards('h') <= player.countCards('h') || target.getHp() <= player.getHp(), target.countCards('h') >= player.countCards('h') || target.getHp() >= player.getHp()];
                    if (eff[0]) {
                        await player.draw();
                        await target.recover();
                    }
                    if (eff[1]) {
                        await target.draw();
                        await player.recover();
                    }
                },
                ai: {
                    order: 1,
                    result: {
                        player(player, target) {
                            const [card] = ui.selected.cards;
                            if (!card) return 0;
                            let list = [],
                                filter = (cardx) => cardx !== card;
                            const extraEffectNum = Math.max(
                                ...(() => {
                                    let list = [];
                                    const bool = get.position(card) === 'h' && lib.filter.cardDiscardable(card, player),
                                        goon = get.type(card) === 'equip' && target.canEquip(card);
                                    if (bool) list.push(8 - get.value(card));
                                    if (goon) list.push(get.effect(target, card, target, player));
                                    return list;
                                })(),
                            );
                            const eff = [target.countCards('h', filter) <= player.countCards('h', filter) || target.getHp() <= player.getHp(), target.countCards('h', filter) >= player.countCards('h', filter) || target.getHp() >= player.getHp()];
                            if (eff[0]) list.push(get.effect(player, { name: 'draw' }, player, player) + get.recoverEffect(target, player, player));
                            if (eff[1]) list.push(get.effect(target, { name: 'draw' }, player, player) + get.recoverEffect(player, player, player));
                            return Math.max(...list.map((num) => num + extraEffectNum));
                        },
                    },
                },
                subSkill: { used: { charlotte: true } },
            },
            qg_yinjie: {
                trigger: { player: 'damageEnd' },
                getIndex: (event) => event.num || 1,
                filter(event, player) {
                    return player.isDamaged();
                },
                forced: true,
                async content(event, trigger, player) {
                    let cards = get.bottomCards(player.getDamagedHp() * 2);
                    await player.chooseControl('ok').set('dialog', ['牌堆底的牌', cards]);
                    const gains = cards.filter((card) => get.color(card) === 'red');
                    if (gains.length) {
                        cards.removeArray(gains);
                        await player.gain(gains, 'gain2');
                    }
                    while (
                        cards.some((card) => {
                            if (get.color(card) !== 'black') return false;
                            return game.hasPlayer((target) => target.canAddJudge({ name: 'bingliang' }));
                        })
                    ) {
                        const result = await player
                            .chooseButton(['隐戒:是否将其中的黑色牌当作【兵粮寸断】置入一名角色的判定区？', cards])
                            .set('filterButton', (button) => {
                                const card = button.link;
                                if (get.color(card) !== 'black') return false;
                                return game.hasPlayer((target) => target.canAddJudge({ name: 'bingliang' }));
                            })
                            .set('ai', (button) => {
                                const card = button.link;
                                return game
                                    .filterPlayer((target) => target.canAddJudge({ name: 'bingliang' }))
                                    .map((target) => {
                                        return get.effect(target, { name: 'bingliang' }, player, player);
                                    });
                            })
                            .forResult();
                        if (result?.bool && result.links?.length) {
                            const card = { name: 'bingliang' };
                            const result2 = await player
                                .chooseTarget(
                                    '隐戒:请选择一名角色,将' + get.translation(card) + '置入其判定区',
                                    (cardx, player, target) => {
                                        return target.canAddJudge(get.event().cardx);
                                    },
                                    true,
                                )
                                .set('ai', (target) => {
                                    const player = get.player(),
                                        card = get.event().cardx;
                                    return get.effect(target, card, player, player);
                                })
                                .set('cardx', card)
                                .forResult();
                            if (result2?.bool && result2.targets?.length) {
                                const target = result2.targets[0];
                                player.line(target);
                                cards.remove(result.links[0]);
                                if (target.canAddJudge(card)) {
                                    target.$gain2(card, false);
                                    await target.addJudge({ name: 'bingliang' }, result.links);
                                }
                            } else break;
                        } else break;
                    }
                },
            },
            qg_langmou: {
                mark: true,
                marktext: '☯',
                intro: {
                    content(storage) {
                        if (storage) return '当你使用锦囊牌时,你可以令至多Y名角色各受到1点伤害(Y为此牌牌名字数)';
                        return '当你使用锦囊牌时,你令此牌视为【推心置腹】';
                    },
                },
                zhuanhuanji: true,
                mod: {
                    cardname(card, player) {
                        const event = get.event();
                        if (!event || event.name !== 'chooseToUse' || event.player !== player) return;
                        if (get.type2(card, false) === 'trick' && !player.storage.qg_langmou) return 'tuixinzhifu';
                    },
                },
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { player: 'useCard' },
                filter(event, player) {
                    if (get.type2(event.card) !== 'trick') return false;
                    return !player.storage.qg_langmou || get.cardNameLength(event.card) > 0;
                },
                async cost(event, trigger, player) {
                    event.result = player.storage.qg_langmou
                        ? await (() => {
                            const num = get.cardNameLength(trigger.card);
                            const next = player.chooseTarget(get.prompt2('qg_langmou'), '对至多' + get.cnNumber(num) + '名角色各造成1点伤害');
                            next.set('selectTarget', [1, num]);
                            next.set('ai', (target) => {
                                const player = get.player();
                                return get.damageEffect(target, player, player);
                            });
                            return next;
                        })().forResult()
                        : { bool: true };
                },
                async content(event, trigger, player) {
                    player.changeZhuanhuanji(event.name);
                    if (event.targets?.length) {
                        const targets = event.targets.sortBySeat();
                        for (const target of targets) await target.damage();
                    }
                },
                derivation: 'tuixinzhifu',
            },
            qg_qingshi: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: {
                    player: 'loseAfter',
                    global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                },
                getIndex(event, player, triggername) {
                    return event.getl?.(player)?.hs?.length ?? 0;
                },
                filter(event, player) {
                    return game.hasPlayer((target) => !target.hasSkill('fengyin'));
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseTarget(
                            '请选择【' + get.translation(event.skill) + '】的目标',
                            (card, player, target) => {
                                return !target.hasSkill('fengyin');
                            },
                            true,
                            lib.translate[event.skill + '_info'],
                        )
                        .set('ai', (target) => {
                            const player = get.player();
                            return (
                                target
                                    .getSkills(null, false, false) //QQQ
                                    .filter((skill) => {
                                        if (get.is.locked(skill, target)) return false;
                                        const info = lib.skill[skill];
                                        return info && !info.charlotte;
                                    })
                                    .reduce((sum, skill) => {
                                        _status.event.skillRankPlayer = target;
                                        const num = get.skillRank(skill);
                                        delete _status.event.skillRankPlayer;
                                        return sum + num;
                                    }, 0) * get.attitude(player, target)
                            );
                        })
                        .forResult();
                },
                async content(event, trigger, player) {
                    player.addTempSkill('qg_qingshi_count');
                    player.addMark('qg_qingshi_count', 1, false);
                    player.addTempSkill('qg_qingshi_clear', { player: 'phaseEnd' });
                    const target = event.targets[0];
                    await target.addAdditionalSkills('qg_qingshi_clear_' + player.playerid, 'fengyin');
                    if (_status.currentPhase === player) await player.recover();
                },
                subSkill: {
                    clear: {
                        charlotte: true,
                        onremove(player) {
                            game.countPlayer((current) => current.removeAdditionalSkills('qg_qingshi_clear_' + player.playerid));
                        },
                    },
                    count: {
                        charlotte: true,
                        intro: { content: '回合结束时失去#点体力,每以此法失去1点体力,则从游戏外获得两张进入弃牌堆后销毁的基本牌' },
                        trigger: {
                            global: 'phaseEnd',
                            player: 'loseHpEnd',
                        },
                        getIndex: (event) => (event.name === 'loseHp' ? event.num || 1 : 1),
                        filter(event, player) {
                            if (event.name === 'loseHp') return event.parent.name === 'qg_qingshi_count';
                            return player.hasMark('qg_qingshi_count') && player.getHp() > 1;
                        },
                        forced: true,
                        popup: false,
                        async content(event, trigger, player) {
                            if (trigger.name === 'phase') await player.loseHp(Math.min(player.getHp() - 1, player.countMark('qg_qingshi_count')));
                            else {
                                const list = lib.card?.list?.filter((list) => get.type(list[2]) === 'basic');
                                if (list.length) {
                                    const gains = list.randomGets(2);
                                    await player.gain(
                                        gains.map((gain) => {
                                            const card = game.createCard2(gain[2], ...gain.slice(0, 2), ...gains.slice(3));
                                            card.destroyed = 'discardPile';
                                            card.classList.add('glow');
                                            return card;
                                        }),
                                        'gain2',
                                    );
                                }
                            }
                        },
                    },
                },
            },
            qg_fangfei: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { global: ['loseAfter', 'equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter', 'cardsDiscardAfter'] },
                getIndex(event, player, triggername) {
                    return event.getd?.() ?? [];
                },
                filter(event, player, name, card) {
                    if (
                        !Array.from({ length: 4 })
                            .map((_, i) => i + 1)
                            .includes(player.getHp())
                    )
                        return false;
                    if (
                        player !== _status.currentPhase ||
                        (() => {
                            const evt = event.parent;
                            if (evt.name === 'useCard') return true;
                            return (evt.relatedEvent || evt.parent).name === 'useCard';
                        })()
                    )
                        return false;
                    const suit = ['heart', 'diamond', 'spade', 'club'][4 - player.getHp()];
                    if (suit !== card.suit) return false;
                    return player.hasUseTarget(
                        new lib.element.VCard({
                            name: ['guohe', 'shunshou', 'wuzhong', 'sha'][4 - player.getHp()],
                            nature: player.getHp() === 1 ? 'ice' : undefined,
                        }),
                    );
                },
                forced: true,
                content() {
                    const hp = player.getHp();
                    player
                        .chooseUseTarget(
                            new lib.element.VCard({
                                name: ['guohe', 'shunshou', 'wuzhong', 'sha'][4 - hp],
                                nature: hp === 1 ? 'ice' : undefined,
                            }),
                            true,
                            false,
                        )
                        .set('oncard', () => {
                            const event = get.event();
                            event.directHit.addArray(game.players);
                            game.log(event.card, '不可被响应');
                        });
                },
                ai: {
                    directHit_ai: true,
                    skillTagFilter(player, tag, arg) {
                        return arg?.card?.storage?.qg_fangfei;
                    },
                },
            },
            qg_xingrong: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { player: ['phaseUseBegin', 'damageEnd'] },
                forced: true,
                async content(event, trigger, player) {
                    const { cards: cards1 } = await player.draw().forResult();
                    const cards2 = (
                        await player
                            .chooseToDiscard(
                                'he',
                                (card, player) => {
                                    return get.type(card) !== 'basic';
                                },
                                true,
                            )
                            .forResult()
                    ).cards;
                    if (Array.isArray(cards1) && Array.isArray(cards2)) {
                        const gain = get.cardPile((card) => {
                            return get.cardNameLength(card) === [...cards1, ...cards2].reduce((sum, cardx) => sum + get.cardNameLength(cardx), 0);
                        });
                        if (gain) {
                            await player.gain(gain, 'gain2');
                            if (get.color(gain) === 'red' && game.hasPlayer((target) => target.isDamaged())) {
                                const result = await player
                                    .chooseTarget('兴荣:是否令一名角色回复1点体力？', (card, player, target) => {
                                        return target.isDamaged();
                                    })
                                    .set('ai', (target) => {
                                        const player = get.player();
                                        return get.recoverEffect(target, player, player);
                                    })
                                    .forResult();
                                if (result?.bool && result.targets?.length) {
                                    const target = result.targets[0];
                                    player.line(target);
                                    await target.recover();
                                }
                            }
                        }
                    }
                },
            },
            qg_zhenye: {
                init(player, skill) {
                    player.storage[skill] = player.storage[skill] || [0, 0, 0];
                    get.info(skill).updateTip(player, skill);
                },
                onremove(player, skill) {
                    player.removeTip(skill);
                    delete player.storage[skill];
                },
                updateTip(player, skill) {
                    const info = player.storage[skill] || [0, 0, 0];
                    player.addTip(skill, [get.translation(skill), ...info].join(' '));
                },
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { global: 'roundStart' },
                filter(event, player) {
                    return (player.storage.qg_zhenye || [0, 0, 0]).some((num) => num < 3);
                },
                async cost(event, trigger, player) {
                    const skill = 'qg_zhenye';
                    player.storage[skill] = player.storage[skill] || [0, 0, 0];
                    get.info(skill).updateTip(player, skill);
                    const nums = Array.from({ length: player.storage[skill].length })
                        .map((_, i) => i)
                        .filter((num) => player.storage[skill][num] < 3);
                    const list = ['使用次数', '用牌数值', '距离数值'];
                    const result = await player
                        .chooseControl(
                            nums.map((num) => list[num]),
                            'cancel2',
                        )
                        .set('ai', () => {
                            return get
                                .event()
                                .controls.filter((control) => control !== 'cancel2')
                                .randomGet();
                        })
                        .set('prompt', get.prompt2('qg_zhenye'))
                        .forResult();
                    event.result = { bool: result.control !== 'cancel2', cost_data: list.indexOf(result.control) };
                },
                async content(event, trigger, player) {
                    const skill = 'qg_zhenye',
                        list = ['使用次数', '用牌数值', '距离数值'],
                        choice = list[event.cost_data];
                    player.popup(choice);
                    game.log(player, '增加了', '#g【' + get.translation(skill) + '】', '#y' + choice, '的数值');
                    player.storage[skill][event.cost_data]++;
                    get.info(skill).updateTip(player, skill);
                },
                mod: {
                    cardUsable(card, player, num) {
                        if (get.type(card) === 'basic' && typeof num === 'number' && num !== Infinity) return num + (player.storage.qg_zhenye?.[0] ?? 0);
                    },
                    globalTo(from, to, distance) {
                        if (from !== to) return distance + (to.storage.qg_zhenye?.[2] ?? 0);
                    },
                },
                group: 'qg_zhenye_add',
                subSkill: {
                    add: {
                        audio: 'qg_zhenye',
                        trigger: { player: 'useCard' },
                        filter(event, player) {
                            if (['equip', 'delay'].includes(get.type(event.card))) return false;
                            if (!get.tag(event.card, 'damage') && !get.tag(event.card, 'recover')) return false;
                            return (player.storage.qg_zhenye || [0, 0, 0])[1] > 0;
                        },
                        forced: true,
                        content() {
                            trigger.baseDamage += player.storage.qg_zhenye[1];
                        },
                    },
                },
            },
            qg_guizi: {
                trigger: { player: 'useCard' },
                filter(event, player) {
                    if (!lib.skill.dcshixian.filterx(event)) return false;
                    return (event.cards?.length ?? 0) > 1;
                },
                forced: true,
                content() {
                    const num = Math.floor(trigger.cards.length / 2);
                    trigger.effectCount += num;
                    game.log(trigger.card, '额外结算' + num + '次');
                },
                ai: {
                    combo: 'qg_zeli',
                    effect: {
                        player(card) {
                            if (get.tag(card, 'norepeat') && (card.cards?.length ?? 0) > 1 && Math.floor(card.cards.length / 2) % 2 === 1) return 'zeroplayertarget';
                        },
                    },
                },
            },
            // 出牌阶段限一次,你可以将任意张手牌当作一张牌名字数与这些牌牌名字数和相同的单目标锦囊牌使用
            qg_zeli: {
                audio: 'ext:群星荟萃/audio/skill:2',
                enable: 'phaseUse',
                usable(skill, player) {
                    return 1 + (player.hasSkill('qg_guizi') && Boolean(game.dead.length));
                },
                filter(event, player) {
                    const hs = player.getCards('hes', (card) => game.checkMod(card, player, 'unchanged', 'cardEnabled2', player));
                    const numx = hs.reduce((sum, i) => sum + get.cardNameLength(i), 0);
                    if (!hs.length) return false;
                    return get.inpileVCardList((info) => {
                        const name = info[2],
                            num = get.cardNameLength(name);
                        const info2 = lib.card[name];
                        if (!info2 || info2.type !== 'trick' || info2.notarget || (info2.selectTarget && info2.selectTarget !== 1)) return false;
                        return event.filterCard({ name: name, nature: info[3] }, player, event) && numx > num;
                    }).length;
                },
                filterCard(card, player) {
                    if (!game.checkMod(card, player, 'unchanged', 'cardEnabled2', player)) return false;
                    const hs = [card].concat(ui.selected.cards);
                    return get.inpileVCardList((info) => {
                        const name = info[2],
                            num = get.cardNameLength(name);
                        const info2 = lib.card[name];
                        if (!info2 || info2.type !== 'trick' || info2.notarget || (info2.selectTarget && info2.selectTarget !== 1)) return false;
                        if (hs.reduce((sum, i) => sum + get.cardNameLength(i), 0) > num) return false;
                        return player.hasUseTarget({ name: name, nature: info[3] });
                    }).length;
                },
                position: 'hes',
                selectCard: [1, Infinity],
                complexCard: true,
                filterOk() {
                    const player = get.player(),
                        hs = ui.selected.cards;
                    return get.inpileVCardList((info) => {
                        const name = info[2],
                            num = get.cardNameLength(name);
                        const info2 = lib.card[name];
                        if (!info2 || info2.type !== 'trick' || info2.notarget || (info2.selectTarget && info2.selectTarget !== 1)) return false;
                        if (hs.reduce((sum, i) => sum + get.cardNameLength(i), 0) !== num) return false;
                        return player.hasUseTarget({ name: name, nature: info[3] });
                    }).length;
                },
                lose: false,
                discard: false,
                delay: false,
                async content(event, trigger, player) {
                    const cards = event.cards,
                        result = await player
                            .chooseButton(
                                [
                                    '择立:请选择' + get.translation(cards) + '转化的单目标锦囊牌',
                                    [
                                        get.inpileVCardList((info) => {
                                            const name = info[2],
                                                num = get.cardNameLength(name);
                                            const info2 = lib.card[name];
                                            if (!info2 || info2.type !== 'trick' || info2.notarget || (info2.selectTarget && info2.selectTarget !== 1)) return false;
                                            if (cards.reduce((sum, i) => sum + get.cardNameLength(i), 0) !== num) return false;
                                            return { name: name, nature: info[3] };
                                        }),
                                        'vcard',
                                    ],
                                ],

                                true,
                            )
                            .set('ai', (button) => {
                                const player = get.player(),
                                    item = button.link;
                                return player.getUseValue({ name: item[2], nature: item[3] });
                            })
                            .forResult();
                    if (result?.bool && result.links?.length) {
                        const [item] = result.links,
                            card = { name: item[2], nature: item[3] };
                        await player
                            .chooseUseTarget(card, true, false)
                            .set('oncard', () => {
                                for (const i of game.players) i.addTempSkill('qg_zeli_effect');
                            })
                            .set('cards', cards)
                            .forResult();
                    }
                },
                ai: {
                    order(item, player) {
                        if (player) {
                            const event = get.event();
                            const hs = player.getCards('hes', (card) => game.checkMod(card, player, 'unchanged', 'cardEnabled2', player));
                            const numx = hs.reduce((sum, i) => sum + get.cardNameLength(i), 0);
                            const cards = get
                                .inpileVCardList((info) => {
                                    const name = info[2],
                                        num = get.cardNameLength(name);
                                    const info2 = lib.card[name];
                                    if (!info2 || info2.type !== 'trick' || info2.notarget || (info2.selectTarget && info2.selectTarget !== 1)) return false;
                                    return event.filterCard({ name: name, nature: info[3] }, player, event) && numx > num;
                                })
                                .sort((a, b) => {
                                    return player.getUseValue({ name: b[2], nature: b[3] }) - player.getUseValue({ name: a[2], nature: a[3] });
                                });
                            if (cards.length) {
                                const card = { name: cards[0][2], nature: cards[0][3] };
                                if (player.getUseValue(card) > 0) return 0.1 + get.order(card, player);
                            }
                            return 0;
                        }
                        return 0;
                    },
                    result: { player: 1 },
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
                        mod: {
                            cardEnabled2(card, player) {
                                const event = get.event()?.getParent((evt) => {
                                    return evt.name === 'useCard' && evt.getParent(2).name === 'qg_zeli';
                                }, true);
                                if (event?.targets?.includes(player) && get.position(card) === 'h') return false;
                            },
                        },
                        skillBlocker(skill, player) {
                            const event = get.event()?.getParent((evt) => {
                                return evt.name === 'useCard' && evt.getParent(2).name === 'qg_zeli';
                            }, true);
                            if (!event?.targets?.includes(player)) return false;
                            return !lib.skill[skill].persevereSkill && !lib.skill[skill].charlotte && !get.is.locked(skill, player);
                        },
                    },
                },
            },
            qg_qianmou: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { target: 'useCardToTargeted' },
                filter(event, player) {
                    if (get.type(event.card) !== 'trick' || get.tag(event.card, 'damage') < 0.5) return false;
                    return (
                        !player.getStorage('qg_qianmou_used').includes(event.player) &&
                        player.hasCard((card) => {
                            return _status.connectMode || player.canRecast(card);
                        }, 'h')
                    );
                },
                logTarget: 'player',
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseCard(
                            get.prompt2('qg_qianmou'),
                            (card, player) => {
                                return player.canRecast(card);
                            },
                            'h',
                        )
                        .set('ai', (card) => {
                            const player = get.player(),
                                trigger = get.event().getTrigger();
                            return get.info('zhiheng').check(card) - get.effect(player, trigger.card, trigger.player, player);
                        })
                        .forResult();
                },
                async content(event, trigger, player) {
                    await player.recast(event.cards);
                    player.addTempSkill('qg_qianmou_used');
                    player.markAuto('qg_qianmou_used', [trigger.player]);
                    trigger.parent.excluded.add(player);
                    game.log(trigger.card, '对', player, '无效');
                },
                subSkill: {
                    used: {
                        charlotte: true,
                    },
                },
            },
            qg_yanfu: {
                audio: 'ext:群星荟萃/audio/skill:2',
                enable: 'phaseUse',
                filter(event, player) {
                    return player.hasCard((card) => lib.filter.cardDiscardable(card, player), 'h') && game.hasPlayer((target) => target !== player);
                },
                usable: 1,
                filterCard: lib.filter.cardDiscardable,
                selectCard: [1, Infinity],
                check(card) {
                    return 9 - get.value(card);
                },
                position: 'h',
                filterTarget: lib.filter.notMe,
                selectTarget: () => ui.selected.cards.length,
                complexSelect: true,
                multiline: true,
                multitarget: true,
                async content(event, trigger, player) {
                    let { targets, cards } = event,
                        num = cards.length;
                    targets.sortBySeat();
                    const result = await player
                        .chooseControl()
                        .set('choiceList', ['对' + get.translation(targets) + '各造成1点火属性伤害', '令' + get.translation(targets) + '依次重铸' + get.cnNumber(num) + '张牌,然后你获得其中点数不大于8的所有牌'])
                        .set('ai', () => {
                            const { player, targets } = get.event().parent;
                            return 1 - (targets.reduce((sum, target) => get.damageEffect(target, player, player, 'fire'), 0) > 0);
                        })
                        .set('prompt', '焰覆:请选择一项')
                        .forResult();
                    if (result.index === 0) {
                        for (const target of targets) await target.damage(1, 'fire');
                    } else {
                        let gains = [];
                        for (const target of targets) {
                            const result2 = await target
                                .chooseCard(
                                    'he',
                                    num,
                                    (card, player) => {
                                        return player.canRecast(card);
                                    },
                                    '焰覆:请重铸' + get.cnNumber(num) + '张牌',
                                    true,
                                )
                                .set('ai', get.info('zhiheng').check)
                                .forResult();
                            if (result2?.bool && result2.cards?.length) {
                                gains.addArray(result2.cards);
                                await target.recast(result2.cards);
                            }
                        }
                        gains = gains.filter((card) => get.position(card, true) === 'd' && card.number <= 8);
                        if (gains.length) await player.gain(gains, 'gain2');
                    }
                },
                ai: {
                    order: 10,
                    result: { target: -1 },
                },
            },
            qg_fuxu: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { global: 'phaseEnd' },
                filter(event, player) {
                    const num = event.player.countCards('h');
                    return num > 0 && num <= event.player.getHandcardLimit();
                },
                logTarget: 'player',
                check(event, player) {
                    const target = event.player;
                    if (get.effect(target, { name: 'guohe_copy', position: 'h' }, player, player) >= 0) return true;
                    return get.attitude(player, target) > 0 && [target.next, target.previous].some((current) => get.attitude(player, current) > 0);
                },
                async content(event, trigger, player) {
                    const target = trigger.player,
                        card = target.getCards('h').randomGet();
                    await player.showCards([card], get.translation(player) + '发动了【' + get.translation(event.name) + '】');
                    const [gainner] =
                        (
                            await player
                                .chooseTarget('将' + get.translation(card) + '交给' + get.translation(player) + '的上下家', (card, player, target) => {
                                    const current = get.event().current;
                                    return [current.next, current.previous].includes(target);
                                })
                                .set('current', target)
                                .forResult()
                        ).targets ?? [];
                    if (gainner?.isIn()) {
                        player.line(gainner);
                        const next = gainner.gain(card, target, 'give');
                        next.giver = player;
                        await next;
                        const color = get.color(card, false);
                        if (color === 'red') {
                            await player.draw(2, 'nodelay');
                            await gainner.draw(2);
                        }
                        if (color === 'black') await target.draw(2);
                    }
                },
            },
            qg_xinwang: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { player: 'phaseJieshuBegin' },
                filter(event, player) {
                    return player.countCards('h') !== 1;
                },
                async cost(event, trigger, player) {
                    const num = player.countCards('h');
                    if (num < 1) event.result = await player.chooseBool(get.prompt2(event.skill)).set('frequentSkill', event.skill).forResult();
                    else
                        event.result = await player
                            .chooseToDiscard(get.prompt2(event.skill), 'h', num - 1)
                            .set('ai', (card) => {
                                const player = get.player();
                                if (!player.hasCard(card, { suit: 'heart' }, 'h')) return 0;
                                return card.suit === 'heart' ? 1 - get.value(card) / 9991919810 : 2;
                            })
                            .set('chooseonly', true)
                            .forResult();
                },
                async content(event, trigger, player) {
                    if (event.cards?.length) await player.discard(event.cards);
                    else await player.drawTo(1);
                    if (player.countCards('h') === 1) {
                        const card = player.getCards('h')[0];
                        if (card.suit === 'heart') {
                            const result = await player
                                .chooseBool('是否展示' + get.translation(card) + '并进行后续的亮牌操作？')
                                .set('frequentSkill', event.name)
                                .forResult();
                            if (result?.bool) {
                                await player.showCards([card], get.translation(player) + '发动了【' + get.translation(event.name) + '】');
                                while (true) {
                                    const next = game.cardsGotoOrdering(get.cards());
                                    await next;
                                    const gain = next.cards?.[0];
                                    if (gain) {
                                        await player.showCards([gain], get.translation(player) + '【' + get.translation(event.name) + '】亮出');
                                        await player.gain(gain, 'gain2');
                                        if (gain.suit !== 'heart') continue;
                                    }
                                    break;
                                }
                            }
                        }
                    }
                },
            },
            qg_jiye: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { global: 'damageSource' },
                filter(event, player) {
                    if (!event.source?.isIn() || !event.card || !event.source.hasMark('qg_jiye')) return false;
                    return get[event.source === player ? 'cardPile2' : 'discardPile']((card) => {
                        return get.type(card) === 'equip' && event.source.canEquip(card);
                    });
                },
                forced: true,
                logTarget: 'source',
                async content(event, trigger, player) {
                    const source = trigger.source,
                        card = get[source === player ? 'cardPile2' : 'discardPile']((card) => {
                            return get.type(card) === 'equip' && source.canEquip(card);
                        });
                    if (card) {
                        await source.equip(card);
                        const num = Array.from({ length: 5 })
                            .map((_, i) => i + 1)
                            .reduce((sum, num) => sum + source.hasEmptySlot(num), 0);
                        if (num > 0) await source.draw(num);
                    }
                },
                group: 'qg_jiye_init',
                intro: {
                    name: '继业 - 平定',
                    name2: '平定',
                    content: 'mark',
                },
                subSkill: {
                    init: {
                        audio: 'qg_jiye',
                        trigger: {
                            global: 'phaseBefore',
                            player: 'enterGame',
                        },
                        filter(event, player) {
                            if (!game.hasPlayer((target) => target !== player)) return false;
                            return event.name !== 'phase' || game.phaseNumber === 0;
                        },
                        async cost(event, trigger, player) {
                            event.result = await player
                                .chooseTarget(get.prompt2('qg_jiye'), lib.filter.notMe)
                                .set('ai', (target) => {
                                    const player = get.player();
                                    return get.attitude(player, target) + 9991919810;
                                })
                                .forResult();
                        },
                        content() {
                            player.addMark('qg_jiye', 1);
                            event.targets[0].addMark('qg_jiye', 1);
                        },
                    },
                },
            },
            qg_dingwu: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { global: 'damageBegin4' },
                filter(event, player) {
                    if (!event.player.hasMark('qg_jiye') || _status.currentPhase === event.player) return false;
                    return (
                        game
                            .getGlobalHistory(
                                'everything',
                                (evt) => {
                                    return evt.name === 'damage' && evt.player === event.player;
                                },
                                event,
                            )
                            .indexOf(event) === 0
                    );
                },
                popup: false,
                async cost(event, trigger, player) {
                    event.result = await trigger.player
                        .chooseToDiscard(get.prompt2('qg_dingwu'), 'he')
                        .set('ai', (card) => {
                            const player = get.player(),
                                trigger = get.event().getTrigger();
                            return get.damageEffect(player, trigger.source, player, trigger.nature) < 0 ? 8 - get.value(card) : 0;
                        })
                        .forResult();
                },
                async content(event, trigger, player) {
                    trigger.cancel();
                    trigger.player.addTempSkill('qg_dingwu_effect');
                },
                ai: { combo: 'qx_jiye' },
                subSkill: {
                    effect: {
                        charlotte: true,
                        trigger: { global: 'phaseEnd' },
                        filter(event, player) {
                            return !player.hasHistory('damage');
                        },
                        forced: true,
                        popup: false,
                        content() {
                            player.addSkill('qg_dingwu_draw');
                            player.addMark('qg_dingwu_draw', 1, false);
                        },
                    },
                    draw: {
                        charlotte: true,
                        intro: { content: '下个摸牌阶段额外摸#张牌' },
                        audio: 'qg_dingwu',
                        trigger: { player: 'phaseDrawBegin2' },
                        filter(event, player) {
                            return player.hasMark('qg_dingwu_draw') && !event.numFixed;
                        },
                        forced: true,
                        content() {
                            trigger.num += player.countMark(event.name);
                            player.removeSkill(event.name);
                        },
                    },
                },
            },
            qg_wenxu: {
                audio: 'ext:群星荟萃/audio/skill:2',
                enable: 'phaseUse',
                filter(event, player) {
                    return game.hasPlayer((target) => get.info('qg_wenxu').filterTarget(null, player, target));
                },
                filterTarget(card, player, target) {
                    if (!ui.selected.targets.length) {
                        return game.hasPlayer((current) => {
                            if (target === current) return false;
                            return target.hasCard((card) => get.position(card) === 'h' || current.canEquip(card), 'he');
                        });
                    }
                    const current = ui.selected.targets[0];
                    return current.hasCard((card) => get.position(card) === 'h' || target.canEquip(card), 'he');
                },
                selectTarget: 2,
                complexTarget: true,
                targetprompt: ['被移走', '移动目标'],
                usable(skill, player) {
                    return player.countMark('qg_wenxu_effect') + 1;
                },
                multitarget: true,
                async content(event, trigger, player) {
                    const [from, to] = event.targets;
                    const result = await player
                        .choosePlayerCard(from, '###温煦###<div class="text center">将' + get.translation(from) + '的一张手牌或装备区的牌移动至' + get.translation(to) + '的对应区域</div>', 'he', true)
                        .set('filterButton', (button) => {
                            const {
                                targets: [from, to],
                            } = get.event().parent,
                                card = button.link;
                            return get.position(card) === 'h' || to.canEquip(card);
                        })
                        .set('ai', (button) => {
                            const {
                                player,
                                targets: [from, to],
                            } = get.event().parent,
                                card = button.link;
                            if (get.position(card) === 'h') return get.value(card) * (get.attitude(player, to) - get.attitude(player, from));
                            return get.effect(to, card, player, player) - get.effect(from, card, player, player);
                        })
                        .forResult();
                    if (result?.bool && result.cards?.length) {
                        const [card] = result.cards,
                            position = get.position(card);
                        if (position === 'h') {
                            const next = to.gain(card, from, 'giveAuto');
                            next.giver = player;
                            await next;
                        } else {
                            from.$give([card], to, false);
                            await to.equip(card);
                        }
                        if (from.countCards(position) === to.countCards(position)) {
                            player.addTempSkill('qg_wenxu_effect');
                            player.addMark('qg_wenxu_effect', 1, false);
                        } else {
                            await player.draw('nodelay');
                            await from.draw();
                        }
                    }
                },
                ai: {
                    order: 10,
                    result: {
                        player(player, target) {
                            if (!ui.selected.targets.length) {
                                return Math.max(
                                    ...game
                                        .filterPlayer((current) => {
                                            if (target === current) return false;
                                            return target.hasCard((card) => get.position(card) === 'h' || current.canEquip(card), 'he');
                                        })
                                        .map((current) => {
                                            let list = [0];
                                            if (target.countCards('h') > 0) {
                                                const goon = target.countCards('h') - current.countCards('h') === 2 ? 100 : 1;
                                                list.push(Math.max(...target.getCards('h').map((card) => get.value(card))) * (get.attitude(player, current) - get.attitude(player, target)) * goon);
                                            }
                                            if (target.hasCard((card) => current.canEquip(card), 'e') > 0) {
                                                const goon = target.countCards('e') - current.countCards('e') === 2 ? 100 : 1;
                                                list.push(Math.max(...target.getCards('e').map((card) => get.effect(current, card, player, player) - get.effect(target, card, player, player))) * goon);
                                            }
                                            return list;
                                        })
                                        .flat(),
                                );
                            }
                            const current = ui.selected.targets[0];
                            return Math.max(
                                ...(() => {
                                    let list = [0];
                                    if (current.countCards('h') > 0) {
                                        const goon = current.countCards('h') - target.countCards('h') === 2 ? 100 : 1;
                                        list.push(Math.max(...current.getCards('h').map((card) => get.value(card))) * (get.attitude(player, target) - get.attitude(player, current)) * goon);
                                    }
                                    if (current.hasCard((card) => target.canEquip(card), 'e') > 0) {
                                        const goon = current.countCards('e') - target.countCards('e') === 2 ? 100 : 1;
                                        list.push(Math.max(...current.getCards('e').map((card) => get.effect(target, card, player, player) - get.effect(current, card, player, player))) * goon);
                                    }
                                    return list;
                                })(),
                            );
                        },
                    },
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        intro: { content: '本回合可发动【温熙】的次数+#' },
                    },
                },
            },
            qg_wumian: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { global: 'dieAfter' },
                filter(event, player) {
                    const target = event.player;
                    if (!game.dead.includes(target) || target.isOut() || player.getStorage('qg_wumian_used').includes(target)) return false;
                    return target.getSkills(null, false, false).some((skill) => {
                        if (player.hasSkill(skill, null, false, false)) return false;
                        const info = get.info(skill);
                        return info && !info.charlotte;
                    });
                },
                logTarget: 'player',
                async cost(event, trigger, player) {
                    const target = trigger.player,
                        skills = target.getSkills(null, false, false).filter((skill) => {
                            if (player.hasSkill(skill, null, false, false)) return false;
                            const info = get.info(skill);
                            return info && !info.charlotte;
                        });
                    const control =
                        skills.length > 1
                            ? (
                                await player
                                    .chooseControl(skills)
                                    .set(
                                        'choiceList',
                                        skills.map((i) => {
                                            return '<div class="skill">【' + get.translation(lib.translate[i + '_ab'] || get.translation(i).slice(0, 2)) + '】</div><div>' + get.skillInfoTranslation(i, player) + '</div>';
                                        }),
                                    )
                                    .set('displayIndex', false)
                                    .set('prompt', '无冕:请选择你要获得的技能')
                                    .set('ai', () => {
                                        return get
                                            .event()
                                            .controls.slice()
                                            .sort((a, b) => get.skillRank(b) - get.skillRank(a))[0];
                                    })
                                    .set('prompt2', get.translation(target) + '将于你的回合结束时复活,且仅能保留一个武将牌上的技能')
                                    .forResult()
                            ).control
                            : skills[0];
                    event.result = { bool: true, cost_data: control };
                },
                async content(event, trigger, player) {
                    player.addSkill('qg_wumian_effect');
                    player.markAuto('qg_wumian_effect', [trigger.player]);
                    player.addSkill('qg_wumian_used');
                    player.markAuto('qg_wumian_used', [trigger.player]);
                    await player.addSkills(event.cost_data);
                },
                subSkill: {
                    used: {
                        charlotte: true,
                    },
                    effect: {
                        charlotte: true,
                        intro: { content: '$将于你的回合结束时复活,且仅能保留一个武将牌上的技能' },
                        trigger: { player: 'phaseEnd' },
                        getIndex(event, player, triggername) {
                            return player.getStorage('qg_wumian_effect').sortBySeat();
                        },
                        filter(event, player, name, target) {
                            return game.dead.includes(target) && !target.isOut();
                        },
                        forced: true,
                        popup: false,
                        async content(event, trigger, player) {
                            const target = event.indexedData;
                            player.unmarkAuto(event.name, [target]);
                            target.revive(1);
                            if (!target.isIn()) return;
                            const skills = target.getSkills(null, false, false).filter((skill) => target.getStockSkills(true, true).includes(skill));
                            if (skills.length > 1) {
                                const links = (
                                    await target
                                        .chooseButton(
                                            [
                                                '无冕:请选择失去' + get.cnNumber(skills.length - 1) + '个溢出的技能',
                                                [
                                                    skills.map((skill) => {
                                                        return [skill, '<div class="popup text" style="width:calc(100% - 10px);display:inline-block"><div class="skill">【' + get.translation(skill) + '】</div><div>' + lib.translate[skill + '_info'] + '</div></div>'];
                                                    }),
                                                    'textbutton',
                                                ],
                                            ],

                                            true,
                                            skills.length - 1,
                                        )
                                        .set('ai', (button) => -get.skillRank(button.link))
                                        .forResult()
                                ).links;
                                if (links?.length) await target.removeSkills(links);
                            }
                        },
                    },
                },
            },
            qg_zuotan: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { player: 'phaseZhunbeiBegin' },
                filter(event, player) {
                    return game.hasPlayer((target) => player.inRange(target) && target.countCards('h'));
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseTarget(
                            get.prompt2('qg_zuotan'),
                            (card, player, target) => {
                                return player.inRange(target) && target.countCards('h');
                            },
                            [1, Infinity],
                        )
                        .set('ai', (target) => {
                            const player = get.player();
                            return get.effect(target, { name: 'guohe_copy', position: 'h' }, player, player);
                        })
                        .forResult();
                },
                async content(event, trigger, player) {
                    player.skip('phaseUse');
                    const next = player.addToExpansion(
                        event.targets.map((target) => target.getCards('h').randomGet()),
                        'give',
                    );
                    next.gaintag.add(event.name);
                    await next;
                    player.addTempSkill('qg_zuotan_effect');
                },
                intro: {
                    content: 'expansion',
                    markcount: 'expansion',
                },
                onremove(player, skill) {
                    const cards = player.getExpansions(skill);
                    if (cards.length) player.loseToDiscardpile(cards);
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        audio: 'qg_zuotan', //QQQ
                        trigger: { player: 'phaseEnd' },
                        filter(event, player) {
                            return player.getExpansions('qg_zuotan').some((card) => player.hasUseTarget(card));
                        },
                        prompt2(event, player) {
                            return '依次使用所有可以使用的<坐谈>牌';
                        },
                        check(event, player) {
                            return player.getExpansions('qg_zuotan').some((card) => player.hasValueTarget(card));
                        },
                        async content(event, trigger, player) {
                            while (true) {
                                const card = player.getExpansions('qg_zuotan').find((card) => player.hasUseTarget(card));
                                if (card) await player.chooseUseTarget(card, true, false).set('cards', [card]);
                                else break;
                            }
                        },
                    },
                },
            },
            qg_fujing: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: {
                    get player() {
                        return (lib.phaseName || []).map((i) => [i + 'Skipped', i + 'Cancelled']).flat();
                    },
                },
                filter(event, player) {
                    return player.hasUseTarget({ name: 'jingxiangshengshi' });
                },
                forced: true,
                content() {
                    const prompt = '###' + get.translation(event.name) + '(跳过' + get.translation(trigger.name) + ')###<div class="text center">请选择【荆襄盛世】的目标</div>';
                    player.chooseUseTarget({ name: 'jingxiangshengshi' }, true, false, prompt).set('selectTarget', [1, 1]);
                },
                derivation: 'jingxiangshengshi',
            },
            qg_quanjian: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { global: 'damageBegin4' },
                filter(event, player) {
                    if (!event.source?.isIn() || event.source === player) return false;
                    return event.source && event.source.countDiscardableCards(player, 'he') >= 2;
                },
                logTarget: 'source',
                check(event, player) {
                    const num = Math.min(2, event.source.countDiscardableCards(player, 'he'));
                    return get.effect(event.source, { name: 'guohe_copy2' }, player, player) * num - get.damageEffect(event.player, event.source, player, event.nature) > 0;
                },
                async content(event, trigger, player) {
                    const cards = trigger.source.getDiscardableCards(player, 'he');
                    await trigger.source.discard(cards.randomGets(2)).set('discarder', player);
                    trigger.cancel();
                },
            },
            qg_fushi: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { global: 'phaseEnd' },
                filter(event, player) {
                    if (event.player.hasHistory('useCard', (evt) => evt.targets?.includes(player))) return false;
                    return (() => {
                        return game
                            .getGlobalHistory('everything', (evt) => {
                                return evt.name === 'cardsDiscard' || (evt.name === 'lose' && evt.position === ui.discardPile);
                            })
                            .reduce((list, evt) => list.addArray(evt.cards.filterInD('d')), []);
                    })().some((card) => player.hasUseTarget(card));
                },
                check(event, player) {
                    return (() => {
                        return game
                            .getGlobalHistory('everything', (evt) => {
                                return evt.name === 'cardsDiscard' || (evt.name === 'lose' && evt.position === ui.discardPile);
                            })
                            .reduce((list, evt) => list.addArray(evt.cards.filterInD('d')), []);
                    })().some((card) => player.hasValueTarget(card));
                },
                async content(event, trigger, player) {
                    let list = [];
                    while (list.length < 3) {
                        const cards = game
                            .getGlobalHistory('everything', (evt) => {
                                return evt.name === 'cardsDiscard' || (evt.name === 'lose' && evt.position === ui.discardPile);
                            })
                            .reduce((list, evt) => list.addArray(evt.cards.filterInD('d')), []);
                        if (cards.some((card) => !list.includes(get.type2(card)) && player.hasUseTarget(card))) {
                            const links = (
                                await player
                                    .chooseButton(['附势:请选择你要使用的牌', cards])
                                    .set('filterButton', (button) => {
                                        const { player, list } = get.event(),
                                            card = button.link;
                                        return !list.includes(get.type2(card)) && player.hasUseTarget(card);
                                    })
                                    .set('ai', (button) => {
                                        const player = get.player(),
                                            card = button.link;
                                        return player.getUseValue(card);
                                    })
                                    .set('list', list)
                                    .forResult()
                            ).links;
                            if (links?.length) {
                                const bool = (await player.chooseUseTarget(links[0], true, false).forResult()).bool;
                                if (bool) {
                                    list.add(get.type2(links[0]));
                                    continue;
                                }
                            }
                        }
                        break;
                    }
                },
            },
            qg_zhoumu: {
                mode: ['identity', 'guozhan', 'versus', 'doudizhu'],
                available(mode) {
                    if (mode === 'versus' && !['two', 'guandu', 'siguo'].includes(_status.mode)) return false;
                },
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { global: 'roundStart' },
                filter(event, player) {
                    return game.hasPlayer2((target) => target !== player, null, true);
                },
                async cost(event, trigger, player) {
                    const seatNumbers = game
                        .filterPlayer2((target) => target !== player, null, true)
                        .map((target) => target.seatNum)
                        .sort((a, b) => a - b);
                    const result = await player.chooseControl(seatNumbers).set('prompt', '州牧:请选择你要变更的座位号').forResult();
                    event.result = { bool: true, cost_data: result.control };
                },
                async content(event, trigger, player) {
                    let currentPlayers = game.filterPlayer2(null, null, true).sort((a, b) => a.seatNum - b.seatNum);
                    const sortPlayers = game.filterPlayer2(null, null, true).sort((a, b) => {
                        const getNum = (target) => {
                            const num = target.seatNum;
                            if (target === player) return event.cost_data + 0.5 * Math.sign(event.cost_data - num);
                            return num;
                        };
                        return getNum(a) - getNum(b);
                    });
                    for (const [i, targetElement] of sortPlayers.entries()) {
                        const currentIndex = currentPlayers.indexOf(targetElement);
                        if (currentIndex === i) continue;
                        const currentElement = currentPlayers[i];
                        game.swapSeat(currentElement, targetElement, false);
                        currentPlayers = currentPlayers.map((player, index) => {
                            if (index === currentIndex) return currentElement;
                            if (index === i) return targetElement;
                            return player;
                        });
                    } //QQQ
                    const firstPlayer = game.filterPlayer(null, null, true).sort((a, b) => a.seatNum - b.seatNum)[0];
                    if (trigger.player !== firstPlayer && !trigger._finished) {
                        trigger.finish();
                        trigger._triggered = 5;
                        firstPlayer.phase('nodelay');
                        const evt2 = trigger.parent;
                        if (evt2.name === 'phaseLoop' && evt2._isStandardLoop) evt2.player = firstPlayer;
                    }
                    if (player.countCards('h') !== event.cost_data) {
                        if (player.countCards('h') < event.cost_data) await player.drawTo(event.cost_data);
                        else await player.chooseToDiscard(player.countCards('h') - event.cost_data, 'h', true);
                    }
                },
            },
            qg_tucun: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { global: ['loseAfter', 'equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter', 'cardsDiscardAfter'] },
                getIndex(event, player, triggername) {
                    return event.getd?.() ?? [];
                },
                filter(event, player, name, card) {
                    const evt = event.parent.relatedEvent;
                    if (evt?.name === 'judge' && evt.parent.name === 'qg_tucun_judge') return false;
                    if (event.name === 'lose' && event.getParent(3).name === 'qg_tucun') return false;
                    const color = player.storage.qg_tucun;
                    if (!player.storage.qg_tucun) return false;
                    return color === get.color(card, false) || player.hasCard((card) => lib.filter.cardDiscardable(card, player), 'he');
                },
                forced: true,
                content() {
                    if (player.storage.qg_tucun === get.color(event.indexedData, false)) player.draw();
                    else player.chooseToDiscard('he', true);
                },
                group: 'qg_tucun_judge',
                intro: { content: '判定颜色:$' },
                subSkill: {
                    judge: {
                        audio: 'qg_tucun',
                        trigger: { player: 'phaseZhunbeiBegin' },
                        forced: true,
                        async content(event, trigger, player) {
                            const control = (await player.judge().forResult()).color;
                            player.storage.qg_tucun = control;
                            player[typeof player.storage.qg_tucun === 'string' ? 'markSkill' : 'unmarkSkill']('qg_tucun');
                            game.broadcastAll(
                                (color, player) => {
                                    const list = lib.skill.dchuiling_hint.markColor;
                                    const map = { red: 0, black: 2 };
                                    if (player.marks.qg_tucun) {
                                        player.marks.qg_tucun.firstChild.style.backgroundColor = list[Object.keys(map).includes(color) ? map[color] : 1][0];
                                        player.marks.qg_tucun.firstChild.innerHTML = '<span style="color: ' + list[map[color] || 1][1] + '">' + get.translation(color)[0] + '</span>';
                                    }
                                },
                                control,
                                player,
                            );
                        },
                    },
                },
            },
            qg_fudao: {
                audio: 'ext:群星荟萃/audio/skill:2',
                enable: 'phaseUse',
                filterCard: lib.filter.cardDiscardable,
                selectCard: [1, Infinity],
                usable: 1,
                check(card) {
                    const player = get.player();
                    return player.hasValueTarget(card, null, true) ? 1 : 0;
                },
                async content(event, trigger, player) {
                    await player.gain(
                        event.cards.map((cardx) => {
                            const card = get.copy(cardx);
                            card.destroyed = 'discardPile';
                            card.classList.add('glow');
                            return card;
                        }),
                        'gain2',
                    );
                    player.addTempSkill('qg_fudao_effect');
                },
                ai: {
                    order: 10,
                    result: { player: 1 },
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        mark: true,
                        intro: { content: '使用实体牌含有进入弃牌堆销毁的牌结算完毕后,你可以令一名角色执行【闪电】判定' },
                        audio: 'qg_fudao',
                        trigger: { player: 'useCardAfter' },
                        filter(event, player) {
                            return event.cards?.some((card) => card.destroyed === 'discardPile');
                        },
                        async cost(event, trigger, player) {
                            event.result = await player
                                .chooseTarget(get.prompt(event.skill), '令一名角色执行【闪电】判定')
                                .set('ai', (target) => {
                                    const player = get.player();
                                    return get.damageEffect(target, player, player, 'thunder');
                                })
                                .forResult();
                        },
                        content() {
                            event.targets[0].executeDelayCardEffect('shandian');
                        },
                    },
                },
            },
            qg_zhuyan: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { global: 'phaseEnd' },
                filter(event, player) {
                    return [true, false].some((bool) => lib.skill.qg_zhuyan.getNum(event.player, bool));
                },
                prompt(event, player) {
                    const target = event.player,
                        map = get.info('qg_zhuyan').getMap();
                    const targetprompt = (map, target) => {
                        const list = map[target.playerid];
                        let str = '';
                        for (let i = 0; i < 2; i++) {
                            if (list[i] === undefined) str += '--';
                            else {
                                str += (list[i] >= 0 ? '+' : '') + list[i];
                            }
                            str += '/';
                        }
                        return str.slice(0, -1).split('/');
                    };
                    const str = targetprompt(map, target);
                    return get.prompt('qg_zhuyan', target) + '(体力值' + str[0] + ';手牌数' + str[1] + ')';
                },
                check(event, player) {
                    const target = event.player,
                        map = get.info('qg_zhuyan').getMap();
                    const list = map[target.playerid],
                        att = get.attitude(get.player(), target);
                    const v1 = list[0],
                        v2 = get.sgn(list[1]) * Math.sqrt(Math.abs(list[1]));
                    return Math[att > 0 ? 'max' : 'min'](v1, v2) * att > 0;
                },
                logTarget: 'player',
                async content(event, trigger, player) {
                    const target = trigger.player,
                        map = get.info(event.name).getMap(),
                        list = map[target.playerid],
                        choices = ['体力值', '手牌数'];
                    let result;
                    if (list[0] && list[1]) {
                        result = await player
                            .chooseControl(choices)
                            .set('choiceList', ['令' + get.translation(target) + (list[0] > 0 ? '回复' : '失去') + Math.abs(list[0]) + '点体力' + (list[0] < 0 ? '(至多失去至1)' : ''), '令' + get.translation(target) + (list[1] > 0 ? '摸' : '弃置') + get.cnNumber(Math.abs(list[1])) + '张' + (list[1] > 0 ? '' : '手') + '牌' + (list[1] > 0 ? '(至多摸至5)' : '')])
                            .set('prompt', '驻颜:请选择一项')
                            .set('ai', () => _status.event.choice)
                            .set(
                                'choice',
                                (() => {
                                    const v1 = list[0],
                                        v2 = get.sgn(list[1]) * Math.sqrt(Math.abs(list[1]));
                                    if (get.attitude(player, target) > 0) return v1 > v2 ? 0 : 1;
                                    return v1 > v2 ? 1 : 0;
                                })(),
                            )
                            .forResult();
                    } else result = { index: list[0] ? 0 : 1 };
                    let ind = result.index,
                        num = map[target.playerid][ind];
                    if (num < 0) await player.loseHp();
                    else {
                        const gain = get.cardPile2((card) => !player.hasCard((cardx) => cardx.suit === card.suit, 'h'));
                        if (gain) await player.gain(gain, 'gain2');
                    }
                    if (ind == 0) {
                        if (num > 0) await target.recover(num);
                        else await target.loseHp(Math.min(target.hp - 1, -num));
                    } else {
                        if (num > 0) {
                            num = Math.min(5 - target.countCards('h'), num);
                            if (num > 0) await target.draw(num);
                        } else {
                            num = -num;
                            if (target.countCards('h')) await target.chooseToDiscard(num, true).set('prompt', '驻颜:请弃置' + get.cnNumber(Math.abs(num)) + '张手牌');
                        }
                    }
                },
                init(player) {
                    player.addSkill('qg_zhuyan_record');
                },
                getNum(player, status) {
                    if (!_status.qg_zhuyan || !_status.qg_zhuyan[player.playerid]) return 0;
                    let num = _status.qg_zhuyan[player.playerid][status ? 1 : 0];
                    if (status) {
                        let no = num > 5;
                        num -= player.countCards('h');
                        if (no) num = Math.min(0, num);
                    } else {
                        num -= player.hp;
                        if (num + player.hp < 1) num = 1 - player.hp;
                    }
                    return num;
                },
                getMap() {
                    const map = {};
                    for (const bool of [true, false]) {
                        game.countPlayer((current) => {
                            if (!map[current.playerid]) map[current.playerid] = [];
                            map[current.playerid][bool ? 1 : 0] = lib.skill.qg_zhuyan.getNum(current, bool);
                        });
                    }
                    return map;
                },
                subSkill: {
                    record: {
                        charlotte: true,
                        trigger: { global: ['phaseZhunbeiAfter', 'phaseBefore', 'enterGame'] },
                        filter(event, player) {
                            return event.name !== 'phase' || game.phaseNumber == 0;
                        },
                        forced: true,
                        popup: false,
                        forceDie: true,
                        lastDo: true,
                        content() {
                            if (!_status.qg_zhuyan) _status.qg_zhuyan = {};
                            if (event.triggername == 'phaseBefore') {
                                game.countPlayer((current) => {
                                    _status.qg_zhuyan[current.playerid] = [current.hp, current.countCards('h')];
                                });
                            } else {
                                _status.qg_zhuyan[trigger.player.playerid] = [trigger.player.hp, trigger.player.countCards('h')];
                            }
                        },
                    },
                },
            },
            qg_woquan: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { global: 'useCard' },
                filter(event, player) {
                    if (!(event.player !== player && !event.cards?.length)) return false;
                    const name = event.card.name;
                    return get.type(name) !== 'basic' || !player.getStorage('qg_woquan').includes(name);
                },
                forced: true,
                async content(event, trigger, player) {
                    const name = trigger.card.name;
                    if (get.type(name) == 'basic') player.markAuto('qg_woquan', [name]);
                    else {
                        await player.draw();
                        if (player.getStorage('qg_woquan').some((name) => player.hasUseTarget({ name: name }))) {
                            const result = await player
                                .chooseButton(['握权:是否移除一个记录的牌名并视为使用之？', [lib.inpile.filter((name) => player.getStorage('qg_woquan').includes(name)), 'vcard']])
                                .set('filterButton', (button) => {
                                    return get.player().hasUseTarget({ name: button.link[2] }); //QQQ
                                })
                                .set('ai', (button) => {
                                    return get.player().getUseValue({ name: button.link[2] });
                                })
                                .forResult();
                            if (result?.bool && result.links?.length) {
                                const card = new lib.element.VCard({ name: result.links[0][2] });
                                await player
                                    .chooseUseTarget(card, true, false)
                                    .set('oncard', () => {
                                        const event = get.event();
                                        event.player.unmarkAuto('qg_woquan', [event.card.name]);
                                    })
                                    .forResult();
                            }
                        }
                    }
                },
                intro: { content: '已记录牌名:$' },
                group: 'qg_woquan_effect',
                subSkill: {
                    effect: {
                        audio: 'qg_woquan',
                        trigger: { player: 'damageBegin4' },
                        filter(event, player) {
                            return event.source?.isIn() && event.source.countCards('h') > player.countCards('h');
                        },
                        forced: true,
                        logTarget: 'source',
                        content() {
                            trigger.cancel();
                        },
                        ai: {
                            nodamage: true,
                            nofire: true,
                            nothunder: true,
                            effect: {
                                target(card, player, target) {
                                    const filter = (cardx) => card !== cardx && !ui.selected.cards?.includes(cardx) && !card.cards?.includes(cardx);
                                    if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                    if (get.tag(card, 'damage') && player.countCards('h', filter) > target.countCards('h', filter)) return 'zeroplayertarget';
                                },
                            },
                        },
                    },
                },
            },
            qg_xiezheng: {
                audio: 'ext:群星荟萃/audio/skill:2',
                enable: 'phaseUse',
                filter(event, player) {
                    return player.countCards('h') && game.hasPlayer((target) => target !== player);
                },
                usable: 1,
                filterCard: true,
                selectCard: [1, 2],
                check(card) {
                    return 9 - get.value(card);
                },
                position: 'h',
                filterTarget: lib.filter.notMe,
                selectTarget: () => ui.selected.cards.length,
                complexSelect: true,
                multiline: true,
                multitarget: true,
                lose: false,
                discard: false,
                delay: false,
                async content(event, trigger, player) {
                    const { targets, cards } = event;
                    await game
                        .loseAsync({
                            gain_list: Array.from({ length: targets.length }).map((_, i) => [targets[i], cards[i]]),
                            player: player,
                            cards: cards,
                            giver: player,
                            animate: 'giveAuto',
                        })
                        .setContent('gaincardMultiple');
                    await player.chooseToDebate([player, ...event.targets].sortBySeat()).set('callback', async (event) => {
                        const result = event.debateResult;
                        if (result.bool && result.opinion) {
                            if (result[result.opinion]?.flat().includes(player)) {
                                const card = new lib.element.VCard({ name: 'sha', nature: 'stab' });
                                const bool = (await player.chooseUseTarget(card, false).forResult()).bool;
                                if (!bool) await player.draw();
                            }
                        }
                        const targets = game.filterPlayer((target) => {
                            return !game.getGlobalHistory('everything', (evt) => {
                                return evt.name === 'chooseToDebate' && (evt.player === target || evt.targets.includes(target));
                            }).length;
                        });
                        if (targets.length) {
                            player.line(targets);
                            for (const i of targets) await i.damage();
                        }
                    });
                },
                ai: {
                    order: 7,
                    result: {
                        player(player, target) {
                            const goon = game.hasPlayer((t) => t !== player && get.attitude(player, t) > 0);
                            if (goon && get.attitude(player, target) <= 0) return 0;
                            return 2 + get.attitude(player, target) / 9991919810;
                        },
                    },
                },
            },
            qg_quanfu: {
                audio: 'ext:群星荟萃/audio/skill:2',
                enable: ['chooseToUse', 'chooseToRespond'],
                filter(event, player) {
                    return get
                        .inpileVCardList((info) => {
                            return get.type(info[2]) == 'basic';
                        })
                        .some((item) => player.getExpansions('qg_quanfu').some((card) => event.filterCard({ name: item[2], nature: item[3] }, player, event)));
                },
                chooseButton: {
                    dialog(event, player) {
                        const dialog = ui.create.dialog('权覆:请选择被转化的<死士>和转化的基本牌', 'hidden');
                        dialog.add('<div class="text center">死士</div>');
                        dialog.add(player.getExpansions('qg_quanfu'));
                        dialog.add('<div class="text center">基本牌</div>');
                        dialog.add([get.inpileVCardList((info) => get.type(info[2]) == 'basic'), 'vcard']);
                        return dialog;
                    },
                    filter(button, player) {
                        if (Boolean(ui.selected.buttons.length) === player.getExpansions('qg_quanfu').includes(button.link)) return false;
                        const event = get.event().parent;
                        if (!ui.selected.buttons.length) {
                            return get
                                .inpileVCardList((info) => {
                                    return get.type(info[2]) == 'basic';
                                })
                                .some((item) => event.filterCard({ name: item[2], nature: item[3] }, player, event));
                        }
                        return event.filterCard({ name: button.link[2], nature: button.link[3] }, player, event);
                    },
                    check(button) {
                        const event = get.event().parent,
                            player = get.player();
                        if (!ui.selected.buttons.length || event.name !== 'chooseToUse') return 1 + Math.random();
                        return player.getUseValue({ name: button.link[2], nature: button.link[3] });
                    },
                    select: 2,
                    backup(links, player) {
                        return {
                            audio: 'qg_quanfu',
                            filterCard(card) {
                                return card === lib.skill.qg_quanfu_backup.card;
                            },
                            selectCard: -1,
                            position: 'x',
                            viewAs: {
                                name: links[1][2],
                                nature: links[1][3],
                            },
                            card: links[0],
                        };
                    },
                    prompt(links) {
                        const viewAs = (get.translation(links[1][3]) || '') + '【' + get.translation(links[1][2]) + '】';
                        return '###权覆###<div class="text center">将' + get.translation(links[0]) + '当作' + viewAs + (get.event().name == 'chooseToRespond' ? '打出' : '使用') + '</div>';
                    },
                },
                ai: {
                    save: true,
                    respondSha: true,
                    respondShan: true,
                    skillTagFilter(player, tag, arg) {
                        return player.getExpansions('qg_quanfu').length;
                    },
                    order: 1,
                    result: {
                        player(player) {
                            if (_status.event.dying) return get.attitude(player, _status.event.dying);
                            return 1;
                        },
                    },
                },
                group: ['qg_quanfu_init', 'qg_quanfu_choose'],
                intro: {
                    name: '死士',
                    content: 'expansion',
                    markcount: 'expansion',
                },
                onremove(player, skill) {
                    const cards = player.getExpansions(skill);
                    if (cards.length) player.loseToDiscardpile(cards);
                },
                subSkill: {
                    backup: {},
                    init: {
                        audio: 'qg_quanfu',
                        trigger: { global: 'roundStart' },
                        forced: true,
                        content() {
                            let cards = [];
                            while (cards.length < 3) {
                                const card = get.cardPile2((card) => !cards.map((cardx) => cardx.number).includes(card.number));
                                if (card) cards.push(card);
                                else break;
                            }
                            if (cards.length) player.addToExpansion(cards, 'gain2').gaintag.add('qg_quanfu');
                        },
                    },
                    choose: {
                        audio: 'qg_quanfu',
                        trigger: {
                            player: 'addToExpansionAfter',
                            global: 'loseAsyncAfter',
                        },
                        filter(event, player) {
                            if (event.name === 'loseAsync' && event.type !== 'addToExpansion') return false;
                            return (
                                event.gaintag?.includes('qg_quanfu') &&
                                game.hasPlayer((target) => {
                                    const card = new lib.element.VCard({ name: 'juedou' });
                                    return [target.next, target.previous].some((current) => target.canUse(card, current, false)) || (target.countCards('h') && player.countCards('h'));
                                })
                            );
                        },
                        async cost(event, trigger, player) {
                            event.result = await player
                                .chooseTarget(
                                    get.prompt('qg_quanfu'),
                                    (cardx, player, target) => {
                                        const card = new lib.element.VCard({ name: 'juedou' });
                                        return [target.next, target.previous].some((current) => target.canUse(card, current, false)) || (target.countCards('h') && player.countCards('h'));
                                    },
                                    [1, Infinity],
                                    '<div class="text center">令任意名角色选择对上下家使用【决斗】或与你议事</div>',
                                )
                                .set('ai', (target) => {
                                    const card = new lib.element.VCard({ name: 'juedou' }), //QQQ
                                        att = get.attitude(player, target);
                                    let list = [];
                                    if ([target.next, target.previous].some((current) => target.canUse(card, current, false))) {
                                        const targets = [target.next, target.previous].filter((current) => target.canUse(card, current, false));
                                        list.push(targets.reduce((sum, current) => sum + get.effect(current, card, target, player), 0));
                                    }
                                    if (target.countCards('h') && player.countCards('h')) list.push(get.effect(target, { name: 'draw' }, target, player) + (target === player ? 0 : get.effect(target, { name: 'guohe_copy', position: 'h' }, target, player)));
                                    return Math[att > 0 ? 'max' : 'min'](...list);
                                })
                                .forResult();
                        },
                        async content(event, trigger, player) {
                            const targets = event.targets.sortBySeat();
                            for (const target of targets) {
                                const card = new lib.element.VCard({ name: 'juedou' });
                                const goon = [target.next, target.previous].some((current) => target.canUse(card, current, false));
                                const bool = target.countCards('h') && player.countCards('h');
                                if (!goon && !bool) continue;
                                let result;
                                if (!goon) result = { index: 1 };
                                else if (!bool) result = { index: 0 };
                                else
                                    result = await target
                                        .chooseControl()
                                        .set('choiceList', ['视为对' + get.translation([target.next, target.previous].filter((current) => target.canUse(card, current, false)).sortBySeat()) + '使用【决斗】', '与' + get.translation(player) + '议事,若议事结果相同,则你摸一张牌;否则你弃置一张牌且本回合不能使用基本牌'])
                                        .set('ai', () => {
                                            const target = get.player(),
                                                card = new lib.element.VCard({ name: 'juedou' });
                                            const targets = [target.next, target.previous].filter((current) => target.canUse(card, current, false));
                                            const eff1 = targets.reduce((sum, current) => sum + get.effect(current, card, target, target), 0);
                                            const eff2 = get.effect(target, { name: 'draw' }, target, target) + (target === get.event().parent.player ? 0 : get.effect(target, { name: 'guohe_copy', position: 'h' }, target, target));
                                            return eff1 > eff2 ? 0 : 1;
                                        })
                                        .set('prompt', '权覆:请选择一项执行')
                                        .forResult();
                                if (result.index === 0) {
                                    const aims = [target.next, target.previous].filter((current) => target.canUse(card, current, false)).sortBySeat();
                                    await target.useCard(card, aims, false);
                                } else {
                                    await target.chooseToDebate([target, player].unique()).set('callback', async (event, trigger, player) => {
                                        const result = event.debateResult,
                                            targets = result.targets;
                                        if (
                                            result.opinions.some((op) => {
                                                return targets.every((target) => result[op].flat().includes(target));
                                            })
                                        )
                                            await player.draw();
                                        else {
                                            await player.chooseToDiscard('he', true);
                                            player.addTempSkill('qg_quanfu_ban');
                                            player.markAuto('qg_quanfu_ban', ['basic']);
                                        }
                                    });
                                }
                            }
                        },
                    },
                    ban: {
                        charlotte: true,
                        mark: true,
                        marktext: '禁',
                        intro: {
                            markcount: () => 0,
                            content(storage) {
                                if (storage.length > 1) return '不能使用牌';
                                return '不能使用非' + get.translation(storage[0]) + '牌';
                            },
                        },
                        mod: {
                            cardEnabled2(card, player) {
                                const event = get.event();
                                if (!event || event.name !== 'chooseToUse' || event.player !== player) return;
                                const storage = player.getStorage('qg_quanfu_ban');
                                if (storage.length && (storage.length > 1 || get.type2(card) === storage[0])) return false;
                            },
                        },
                    },
                },
            },
            qg_chenzhao: {
                imited: true,
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { global: ['roundStart', 'dieAfter'] },
                filter(event, player) {
                    return player.getExpansions('qg_quanfu').length && game.roundNumber >= game.countPlayer();
                },
                skillAnimate: true,
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseTarget(get.prompt2('qg_chenzhao'), [1, player.getExpansions('qg_quanfu').length])
                        .set('ai', (target) => {
                            const att = get.attitude(player, target);
                            return Math.max(
                                target
                                    .getSkills(null, false, false)
                                    .filter((skill) => {
                                        if (get.is.locked(skill, target) || !target.getStockSkills(true, true).includes(skill)) return false;
                                        const info = lib.skill[skill];
                                        return info && !info.charlotte;
                                    })
                                    .reduce((sum, skill) => {
                                        _status.event.skillRankPlayer = target;
                                        const num = get.skillRank(skill);
                                        delete _status.event.skillRankPlayer;
                                        return sum + num;
                                    }, 0) * Math.sign(-att),
                                Math.max(0, 5 - target.maxHp) * Math.sign(-att),
                            );
                        })
                        .forResult();
                },
                async content(event, trigger, player) {
                    player.awakenSkill(event.name);
                    await player.loseToDiscardpile(player.getExpansions('qg_quanfu'));
                    const targets = event.targets.sortBySeat();
                    for (const target of targets) {
                        const skills = target.getSkills(null, false, false).filter((skill) => {
                            if (get.is.locked(skill, target) || !target.getStockSkills(true, true).includes(skill)) return false;
                            const info = lib.skill[skill];
                            return info && !info.charlotte;
                        });
                        let result;
                        if (!skills.length) result = { index: 0 };
                        else
                            result = await target
                                .chooseControl()
                                .set('choiceList', ['减1点体力上限', '失去' + skills.map((skill) => '【' + get.translation(skill) + '】').join('、')])
                                .set('ai', () => {
                                    const target = get.player(),
                                        skills = target.getSkills(null, false, false).filter((skill) => {
                                            if (get.is.locked(skill, target) || !target.getStockSkills(true, true).includes(skill)) return false;
                                            const info = lib.skill[skill];
                                            return info && !info.charlotte;
                                        });
                                    if (target.maxHp === 1) return 1;
                                    const eff1 = -Math.max(0, 5 - target.maxHp);
                                    const eff2 = -skills.reduce((sum, skill) => sum + get.skillRank(skill), 0);
                                    return eff1 > eff2 ? 0 : 1;
                                })
                                .set('prompt', '沉昭:请选择一项执行')
                                .forResult();
                        if (result.index === 0) await target.loseMaxHp();
                        else await target.removeSkills(skills);
                    }
                },
                ai: { combo: 'qg_quanfu' },
            },
            qg_dengzun: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { global: 'phaseAfter' },
                filter(event, player) {
                    let gone = false;
                    for (let i = _status.globalHistory.length - 1; i >= 0; i--) {
                        const history = _status.globalHistory[i].everything.filter((evt) => evt.name === 'phase');
                        for (const j = history.length - 1; j >= 0; j--) {
                            if (history[j] === event) gone = true;
                            else if (!gone) continue;
                            return false;
                        }
                        if (_status.globalHistory[i].isRound) break;
                    }
                    return true;
                },
                forced: true,
                async content(event, trigger, player) {
                    const result = await player
                        .chooseControl()
                        .set('choiceList', ['执行一个额外回合', '增加1点体力上限并回复1点体力'])
                        .set('prompt', '登尊:请选择一项执行')
                        .set('ai', () => get.rand(0, 1))
                        .forResult();
                    if (result.index === 0) {
                        player.phase('nodelay');
                    } else {
                        await player.gainMaxHp();
                        await player.recover();
                    }
                },
            },
            qg_santong: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { player: 'phaseZhunbeiBegin' },
                filter(event, player) {
                    return game.hasPlayer((target) => {
                        return game.hasPlayer((current) => {
                            if (target === current) return false;
                            return ['h', 'e', 'j'].some((pos) => target.countCards(pos) + current.countCards(pos) > 0);
                        });
                    });
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseTarget(
                            '请选择【三统】的目标',
                            (card, player, target) => {
                                return game.hasPlayer((current) => {
                                    if (target === current) return false;
                                    return ['h', 'e', 'j'].some((pos) => target.countCards(pos) + current.countCards(pos) > 0);
                                });
                            },
                            2,
                            lib.translate.qg_santong_info,
                            true,
                        )
                        .set('complexTarget', true)
                        .set('ai', (target) => {
                            const player = get.player();
                            return Math.max(
                                ...['h', 'e', 'j'].map((pos) => {
                                    _status._qg_santong_pos = pos;
                                    const eff = get.effect(target, 'qg_santong', player, player);
                                    delete _status._qg_santong_pos;
                                    return eff;
                                }),
                            );
                        })
                        .forResult();
                },
                async content(event, trigger, player) {
                    const targets = event.targets.sortBySeat();
                    const pos = ['h', 'e', 'j'].filter((pos) => targets[0].countCards(pos) + targets[1].countCards(pos) > 0);
                    const position =
                        pos.length > 1
                            ? (
                                await player
                                    .chooseControl(
                                        pos.map((i) => {
                                            return { h: '手牌区', e: '装备区', j: '判定区' }[i];
                                        }),
                                    )
                                    .set('prompt', '请选择' + get.translation(targets) + '交换的区域')
                                    .set('ai', () => {
                                        const { player, targets } = get.event().parent;
                                        const getNum = (item) => {
                                            const map = { 手牌区: 'h', 装备区: 'e', 判定区: 'j' };
                                            const pos = map[item],
                                                goon = !ui.selected.targets.includes(targets[0]);
                                            if (goon) ui.selected.targets.add(targets[0]);
                                            _status._qg_santong_pos = pos;
                                            const effect = get.effect(targets[1], 'qg_santong', player, player);
                                            delete _status._qg_santong_pos;
                                            if (goon) ui.selected.targets.remove(targets[0]);
                                            return effect;
                                        };
                                        return get
                                            .event()
                                            .controls.slice()
                                            .sort((a, b) => getNum(b) - getNum(a))[0];
                                    })
                                    .forResult()
                            ).control
                            : { h: '手牌区', e: '装备区', j: '判定区' }[pos[0]];
                    const map = { 手牌区: 'h', 装备区: 'e', 判定区: 'j' };
                    player.popup(position);
                    game.log(player, '选择了', '#y' + position);
                    switch (map[position]) {
                        case 'h':
                            await targets[0].swapHandcards(targets[1]);
                            break;
                        case 'e':
                            await targets[0].swapEquip(targets[1]);
                            break;
                        case 'j':
                            game.log(targets[0], '和', targets[1], '交换了判定区的牌');
                            const cards = [targets[0].getCards('j'), targets[1].getCards('j')];
                            const vcards = [targets[0].getVCards('j'), targets[1].getVCards('j')];
                            await game
                                .loseAsync({
                                    player: targets[0],
                                    target: targets[1],
                                    cards1: cards[0],
                                    cards2: cards[1],
                                    vcards1: vcards[0],
                                    vcards2: vcards[1],
                                })
                                .setContent('swapHandcardsx');
                            await targets[0].addJudge(vcards[1]);
                            await targets[1].addJudge(vcards[0]);
                            break;
                    }
                    if (Math.abs(targets[0].countCards(map[position]) - targets[1].countCards(map[position])) <= player.getHp()) {
                        await player.loseMaxHp();
                    }
                },
                ai: {
                    result: {
                        target(player, target) {
                            switch (_status._qg_santong_pos || 'h') {
                                case 'h':
                                    var list = [],
                                        players = game.filterPlayer();
                                    if (ui.selected.targets.length == 0) {
                                        for (const i of players) {
                                            if (i != player && get.attitude(player, i) > 3) list.push(i);
                                        }
                                        list.sort(function (a, b) {
                                            return a.countCards('h') - b.countCards('h');
                                        });
                                        if (target == list[0]) return get.attitude(player, target);
                                        return -get.attitude(player, target);
                                    } else {
                                        var from = ui.selected.targets[0];
                                        for (const i of players) {
                                            if (i != player && get.attitude(player, i) < 1) list.push(i);
                                        }
                                        list.sort(function (a, b) {
                                            return b.countCards('h') - a.countCards('h');
                                        });
                                        if (from.countCards('h') >= list[0].countCards('h')) return -get.attitude(player, target);
                                        for (let i = 0; i < list.length && from.countCards('h') < list[i].countCards('h'); i++) {
                                            var count = list[i].countCards('h') - from.countCards('h');
                                            if (count < 2 && from.countCards('h') >= 2) return -get.attitude(player, target);
                                            if (target == list[i]) return get.attitude(player, target);
                                            return -get.attitude(player, target);
                                        }
                                    }
                                case 'e':
                                    var list1 = [],
                                        list2 = [],
                                        players = game.filterPlayer();
                                    for (const i of players) {
                                        if (get.attitude(player, i) > 0) list1.push(i);
                                        else if (get.attitude(player, i) < 0) list2.push(i);
                                    }
                                    list1.sort(function (a, b) {
                                        return a.countCards('e') - b.countCards('e');
                                    });
                                    list2.sort(function (a, b) {
                                        return b.countCards('e') - a.countCards('e');
                                    });
                                    var delta;
                                    for (let i = 0; i < list1.length; i++) {
                                        for (var j = 0; j < list2.length; j++) {
                                            delta = list2[j].countCards('e') - list1[i].countCards('e');
                                            if (delta <= 0) continue;
                                            if (target == list1[i] || target == list2[j]) {
                                                return get.attitude(player, target);
                                            }
                                            return 0;
                                        }
                                    }
                                    return 0;
                                case 'j':
                                    var list1 = [],
                                        list2 = [],
                                        players = game.filterPlayer();
                                    for (const i of players) {
                                        if (get.attitude(player, i) < 0) list1.push(i);
                                        else if (get.attitude(player, i) > 0) list2.push(i);
                                    }
                                    list1.sort(function (a, b) {
                                        return a.countCards('j') - b.countCards('j');
                                    });
                                    list2.sort(function (a, b) {
                                        return b.countCards('j') - a.countCards('j');
                                    });
                                    var delta;
                                    for (let i = 0; i < list1.length; i++) {
                                        for (var j = 0; j < list2.length; j++) {
                                            delta = list2[j].countCards('j') - list1[i].countCards('j');
                                            if (delta <= 0) continue;
                                            if (target == list1[i] || target == list2[j]) {
                                                return -get.attitude(player, target);
                                            }
                                            return 0;
                                        }
                                    }
                                    return 0;
                            }
                        },
                    },
                },
            },
            qg_shenyin: {
                audio: 'ext:群星荟萃/audio/skill:2',
                trigger: { player: 'damageEnd' },
                filter(event, player) {
                    if (
                        game.getGlobalHistory('everything', (evt) => {
                            if (!evt || evt.player !== player || evt.name !== '_showHiddenCharacter') return false;
                            return evt._trigger?.name === 'changeHp' && evt._trigger?.parent === event;
                        }).length
                    )
                        return false;
                    return !player.isUnseen(2);
                },
                forced: true,
                async content(event, trigger, player) {
                    await player.recover();
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
                    let list = [],
                        skills = [];
                    if (get.mode() === 'guozhan') {
                        list.addArray(
                            Object.keys(lib.characterPack.mode_guozhan).filter((i) => {
                                if (i.indexOf('gz_jun') === 0 || lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) return false;
                                return lib.character[i];
                            }),
                        );
                    } else if (_status.connectMode) list = get.charactersOL();
                    else {
                        list.addArray(
                            Object.keys(lib.character).filter((i) => {
                                if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) return false;
                                return lib.character[i];
                            }),
                        );
                    }
                    for (const name of list) {
                        for (const skill of get.character(name)?.skills ?? []) {
                            if (player.hiddenSkills.includes(skill) || skills.includes(skill)) continue;
                            const info = get.info(skill);
                            if (!info || info.charlotte || info.init || (info.ai && (info.ai.combo || info.ai.notemp || info.ai.neg))) continue;
                            if (info.hiddenSkill) skills.add(skill);
                        }
                    }
                    if (skills.length)
                        await player.changeSkills([skills.randomGet()], []).set('$handle', (player, addSkills, removeSkills) => {
                            for (const skill of addSkills) player.popup(skill);
                            game.log(player, '获得了技能', ...addSkills.map((i) => '#g【' + get.translation(i) + '】'));
                            player.hiddenSkills.add(addSkills);
                        });
                },
            },
            qg_caida: {
                audio: 'ext:群星荟萃/audio/skill:2',
                enable: 'chooseToUse',
                hiddenCard(player, name) {
                    if (lib.inpile.includes(name) && ['basic', 'trick'].includes(get.type(name)) && !player.getStorage('qg_caida_count').includes(name)) return true;
                },
                filter(event, player) {
                    return get
                        .inpileVCardList((info) => {
                            const name = info[2];
                            if (player.getStorage('qg_caida_count').includes(name)) return false;
                            return ['basic', 'trick'].includes(get.type(name));
                        })
                        .some((card) => event.filterCard({ name: card[2], nature: card[3] }, player, event));
                },
                chooseButton: {
                    dialog(event, player) {
                        const list = get
                            .inpileVCardList((info) => {
                                const name = info[2];
                                if (player.getStorage('qg_caida_count').includes(name)) return false;
                                return ['basic', 'trick'].includes(get.type(name));
                            })
                            .filter((card) => event.filterCard({ name: card[2], nature: card[3] }, player, event));
                        return ui.create.dialog('###才达###<div class="text center">请选择你要使用的牌和执行的选项</div>', [list, 'vcard'], [['翻面', '横置', '复原武将牌'], 'tdnodes'], 'hidden');
                    },
                    filter(button, player) {
                        if (ui.selected.buttons.length) {
                            if (typeof button.link != 'string') {
                                return false;
                            }
                            if (button.link === '横置') return !player.isLinked();
                            if (button.link === '复原武将牌') return player.isTurnedOver() || player.isLinked();
                            return true;
                        }
                        return typeof button.link != 'string';
                    }, //QQQ
                    select: 2,
                    complexSelect: true,
                    complexCard: true,
                    check(button) {
                        if (typeof button.link == 'string') {
                            return ['翻面', '横置', '复原武将牌'].indexOf(button.link) + 1;
                        } //QQQ
                        const player = get.player();
                        return number0(player.getUseValue({ name: button.link[2], nature: button.link[3] }));
                    },
                    backup(links, player) {
                        return {
                            selectCard: -1,
                            filterCard: () => false,
                            effect: links[1],
                            viewAs: {
                                name: links[0][2],
                                nature: links[0][3],
                            },
                            precontent() {
                                player.addTempSkill('qg_caida_count');
                                player.markAuto('qg_caida_count', [event.result.card.name]);
                                switch (get.info('qg_caida_backup').effect) {
                                    case '翻面':
                                        player.turnOver();
                                        break;
                                    case '横置':
                                        player.link(true);
                                        break;
                                    case '复原武将牌':
                                        player.turnOver(false);
                                        player.link(false);
                                        break;
                                }
                            },
                        };
                    },
                    prompt(links, player) {
                        const name = links[0][2],
                            nature = links[0][3];
                        return '###才达###<div class="text center">' + links[1] + '并视为使用' + (get.translation(nature) || '') + get.translation(name) + '</div>';
                    },
                },
                ai: {
                    order: 10,
                    respondShan: true,
                    respondSha: true,
                    skillTagFilter(player, tag, arg) {
                        if (arg == 'respond') return false;
                        const storage = player.getStorage('qg_caida_count');
                        if (storage.includes('s' + tag.slice(8))) return false;
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
                    count: {
                        charlotte: true,
                    },
                },
            },
        },
        dynamicTranslate: {
            qg_langmou(player, skill) {
                const storage = player.storage[skill];
                let str = '转换技,当你使用锦囊牌时:';
                if (!storage) str += '<span class="bluetext">';
                str += '阳:你令此牌视为【推心置腹】;';
                if (!storage) str += '</span>';
                if (storage) str += '<span class="bluetext">';
                str += '阴:你可以令至多Y名角色各受到1点伤害(Y为此牌牌名字数)';
                if (storage) str += '</span>';
                return str;
            },
        },
        translate: {
            qg_千古兴蜀: '千古风流·兴蜀',
            qg_千古凛魏: '千古风流·凛魏',
            qg_千古砥吴: '千古风流·砥吴',
            qg_千古缚群: '千古风流·缚群',
            qg_千古夺晋: '千古风流·夺晋',
            qg_xuantong: '玄通',
            qg_xuantong_info: '锁定技,每轮开始时,你选择跳过一个阶段,然后你获得一个含有此阶段描述的一个技能(至多为2)',
            qg_xuan_zhugeliang: '玄诸葛亮',
            qg_xuan_zhugeliang_prefix: '玄',
            qg_jietian: '借天',
            qg_jietian_info: '出牌阶段,你可以将一张手牌当作【火攻】使用.此牌结算完毕后,若此牌:造成伤害,你可以对任意名与你势力相同的角色各造成1点伤害,你每以此法造成1点伤害则观看牌堆顶三张牌并获得其中一张,然后你可以将其中点数最大的牌当作任意延时锦囊牌置入任意角色的判定区;未造成伤害,你受到1点火属性伤害',
            qg_qiming: '启明',
            qg_qiming_info: '锁定技,你的回合外:①其他角色每回合使用的第一张牌视为【推心置腹】;②其他角色每回合使用的第一张伤害类卡牌不能指定你为目标',
            qg_xuan_huangyueying: '玄黄月英',
            qg_xuan_huangyueying_prefix: '玄',
            qg_lingji: '灵机',
            qg_lingji_info: '锁定技.①游戏开始时,你从牌堆中随机使用不同副类别的装备各一张.②有牌进入或离开你的装备区后,你摸X张牌,然后随机获得一个描述中包含<锦囊>的技能(X为你的空置装备栏数)',
            qg_zhixin: '智心',
            qg_zhixin_info: '①你的判定阶段改为摸牌阶段.②一名角色的判定牌生效前,你可以用牌堆底的牌代替之.③一名角色的延时锦囊牌生效后,你可以获得此牌对应的实体牌',
            qg_xuan_liubei: '玄刘备',
            qg_xuan_liubei_prefix: '玄',
            qg_jimin: '济民',
            qg_jimin_info: '每回合每名角色限一次,一名角色失去一种花色的最后一张手牌后,你可以失去1点体力,令其选择一项:①摸两张牌;②获得本次失去的牌',
            qg_fenliang: '分粮',
            qg_fenliang_info: '结束阶段,你可以将手牌数调整至X张,然后你可以选择攻击范围内的任意名角色和一种花色,你视为对这些角色使用【五谷丰登】(此牌改为从你选择的花色的手牌中获得获得)',
            qg_xuan_sunshangxiang: '玄孙尚香',
            qg_xuan_sunshangxiang_prefix: '玄',
            qg_saying: '飒影',
            qg_saying_info: '一名角色不因此技能使用指定目标的非虚拟非转化牌时,你可以将此牌置于一名角色的武将牌上(称为<影>),然后令此牌无效.一名角色的回合开始时,你可以依次对其使用其武将牌上所有可以对其使用的<影>',
            qg_jieyi: '结谊',
            qg_jieyi_info: '出牌阶段限一次/当你受到伤害后,你可以弃置一张手牌并选择一名其他角色或将一张装备牌置入一名其他角色的装备区,然后若其体力值或手牌数:不大于你,其摸一张牌,你回复1点体力;不小于你,你摸一张牌,其回复1点体力',
            qg_xuan_simayi: '玄司马懿',
            qg_xuan_simayi_prefix: '玄',
            qg_yinjie: '隐戒',
            qg_yinjie_info: '锁定技,当你受到1点伤害后,你观看牌堆底X张牌(X为你已损失体力值×2),获得其中的红色牌,然后可以将其中任意张黑色牌当作【兵粮寸断】置入等量角色的判定区',
            qg_langmou: '狼谋',
            qg_langmou_info: '转换技,当你使用锦囊牌时,阳:你令此牌视为【推心置腹】;阴:你可以令至多Y名角色各受到1点伤害(Y为此牌牌名字数)',
            qg_xuan_zhangchunhua: '玄张春华',
            qg_xuan_zhangchunhua_prefix: '玄',
            qg_qingshi: '情逝',
            qg_qingshi_info: '锁定技,当你失去一张手牌后,你令一名角色的非锁定技失效直到你的回合结束,若此时处于你的回合,则你回复1点体力.本回合结束时,你失去X点体力(X为你本回合发动此技能的次数,至多流失体力至1点),你每以此法失去1点体力,则获得两张牌堆组成中的基本牌的复制(进入弃牌堆销毁此牌)',
            qg_fangfei: '芳菲',
            qg_fangfei_info: '锁定技,你的回合内,当一张牌不因使用进入弃牌堆后,若此牌花色为♥️️️️/♦️️️️/♣️️️️/♠️️️️且你的体力值为4/3/2/1,则你视为使用一张不可被响应的【过河拆桥】/【顺手牵羊】/【无中生有】/冰【杀】',
            qg_xuan_caorui: '玄曹叡',
            qg_xuan_caorui_prefix: '玄',
            qg_xingrong: '兴荣',
            qg_xingrong_info: '出牌阶段开始时或当你受到伤害后,你可以摸一张牌,弃置一张非基本牌,从牌堆和弃牌堆随机获得一张牌名字数等于你本次摸牌和弃牌牌名字数之和的牌.若你以此法获得红色牌,你可以令一名角色回复1点体力',
            qg_zhenye: '镇业',
            qg_zhenye_info: '每轮开始时,你可以令以下一项数值+1(每项至多+3):①使用基本牌的次数;②使用牌的数值;③其他角色计算与你的距离',
            qg_xuan_guohuanghou: '玄郭皇后',
            qg_xuan_guohuanghou_prefix: '玄',
            qg_guizi: '闺姿',
            qg_guizi_info: '锁定技.①你使用的实体牌额外结算X次(X为实体牌数/2,向下取整).②若场上存在阵亡角色,则你发动【择立】的次数+1',
            qg_zeli: '择立',
            qg_zeli_info: '出牌阶段限一次,你可以将任意张手牌当作一张牌名字数与这些牌牌名字数和相同的单目标锦囊牌使用,此牌结算过程中目标角色的非锁定技失效且不能使用或打出手牌',
            qg_xuan_luxun: '玄陆逊',
            qg_xuan_luxun_prefix: '玄',
            qg_qianmou: '谦谋',
            qg_qianmou_info: '每回合每名角色限一次,当你成为一名角色使用伤害类普通锦囊牌的目标后,你可以重铸一张手牌,令此牌对你无效',
            qg_yanfu: '焰覆',
            qg_yanfu_info: '出牌阶段限一次,你可以弃置任意张牌并选择等量其他角色,然后选择一项:①对这些角色各造成1点火属性伤害;②令这些角色依次重铸你本次弃牌数张牌,然后你获得其中点数不大于8的所有牌',
            qg_xuan_sunru: '玄孙茹',
            qg_xuan_sunru_prefix: '玄',
            qg_fuxu: '抚恤',
            qg_fuxu_info: '一名角色A的回合结束时,若其手牌数不大于其手牌上限,则你可以随机展示其一张手牌并将此牌交给其上家或下家B,若此牌为:红色,你与B各摸两张牌;黑色,你令A摸两张牌',
            qg_xinwang: '心往',
            qg_xinwang_info: '结束阶段,你可以将手牌数调整至1.然后若你唯一的手牌为♥️️️️,则你可以展示此牌,然后重复执行亮出牌堆顶的一张牌并获得的操作直至你本次获得了♥️️️️牌',
            qg_xuan_sunquan: '玄孙权',
            qg_xuan_sunquan_prefix: '玄',
            qg_jiye: '继业',
            qg_jiye_info: '①游戏开始时,你可以选择一名其他角色,你与其获得<平定>标记.②拥有<平定>标记的角色使用牌造成伤害后,其从牌堆(若该角色不为你则改为从弃牌堆)随机将一张装备牌置入装备区,然后摸X张牌(X为其空置装备栏数)',
            qg_dingwu: '定武',
            qg_dingwu_info: '拥有<平定>标记的角色于回合外首次受到伤害时,其可以弃置一张牌并防止此伤害.若如此做,则本回合结束时,若其本回合未受到过伤害,则其下个摸牌阶段额外摸一张牌',
            qg_xuan_bulianshi: '玄步练师',
            qg_xuan_bulianshi_prefix: '玄',
            qg_wenxu: '温煦',
            qg_wenxu_info: '出牌阶段限一次,你可以将一名角色的一张手牌或装备牌移动至另一名角色的对应区域,然后若这两名角色此区域的牌数,相同:你本回合发动本技能的次数+1;不同,你与失去牌的角色各摸一张牌',
            qg_wumian: '无冕',
            qg_wumian_info: '锁定技,每名角色限一次,一名角色死亡后,你获得其拥有一个技能,其于你的回合结束时以1血复活且其仅能保留一个武将牌上的技能',
            qg_xuan_liubiao: '玄刘表',
            qg_xuan_liubiao_prefix: '玄',
            qg_zuotan: '坐谈',
            qg_zuotan_info: '准备阶段,你可以选择攻击范围内任意名有手牌的角色,将这些角色的随机一张手牌置于武将牌上.若如此做,你跳过下个出牌阶段,且本回合结束时,你可以依次使用武将牌上所有可以使用的<坐谈>牌',
            qg_fujing: '富荆',
            qg_fujing_info: '锁定技,当你跳过一个阶段后,你视为使用一张仅指定唯一目标的【荆襄盛世】',
            qg_xuan_caifuren: '玄蔡夫人',
            qg_xuan_caifuren_prefix: '玄',
            qg_quanjian: '劝谏',
            qg_quanjian_info: '一名角色受到伤害时,若此伤害存在伤害来源且伤害来源不为你,则你可以随机弃置伤害来源两张牌并防止此伤害',
            qg_fushi: '附势',
            qg_fushi_info: '一名角色的回合结束时,若其本回合未使用过牌指定你为目标,则你可以使用至多三张本回合进入弃牌堆且类别各不相同的牌',
            qg_xuan_liuyan: '玄刘焉',
            qg_xuan_liuyan_prefix: '玄',
            qg_zhoumu: '州牧',
            qg_zhoumu_info: '锁定技,每轮开始时,你移动至任意座次,然后将你的手牌数调整为你的当前座次',
            qg_tucun: '图存',
            qg_tucun_info: '锁定技.①准备阶段,你进行一次判定并记录本次判定颜色(覆盖以前的颜色记录).②一张牌不因【图存】进入弃牌堆后,若此牌颜色与【图存】颜色:相同,你摸一张牌;不同,你弃置一张牌',
            qg_xuan_lushi: '玄卢氏',
            qg_xuan_lushi_prefix: '玄',
            qg_fudao: '辅道',
            qg_fudao_info: '出牌阶段限一次,你可弃置任意张牌,并获得等量张相同牌名的牌(这些牌进入弃牌堆后销毁).若如此做,当你于本回合使用实体牌含有进入弃牌堆销毁的牌结算完毕后,你可以令一名角色进行【闪电】判定',
            qg_zhuyan: '驻颜',
            qg_zhuyan_info: '一名角色的回合结束时,你可以将其手牌数或体力值调整为与其上个准备阶段相同(手牌至多摸至五张),若其手牌数或体力值调整方向为减少,你须先失去1点体力,否则你从牌堆中获得一张你手牌中没有的花色的牌',
            qg_xuan_simazhao: '玄司马昭',
            qg_xuan_simazhao_prefix: '玄',
            qg_woquan: '握权',
            qg_woquan_info: '锁定技.①防止手牌数大于你的角色对你造成的伤害.②其他角色使用虚拟牌时,若此牌为:基本牌,你记录此牌牌名;非基本牌,你摸一张牌,然后你可以移去一个【握权】记录牌名并视为使用一张此牌名的牌',
            qg_xiezheng: '挟征',
            qg_xiezheng_info: '出牌阶段限一次,你可以将至多两张手牌交给等量其他角色,然后你和这些角色议事.若议事结果与你的意见相同,你摸一张牌或视为使用刺【杀】.然后你对本回合未发起或参与过议事的角色各造成1点伤害',
            qg_xuan_simashi: '玄司马师',
            qg_xuan_simashi_prefix: '玄',
            qg_quanfu: '权覆',
            qg_quanfu_info: '①每轮开始时,你将牌堆中三张点数各不相同的牌置于武将牌上(称为<死士>).②当你的武将牌上置入<死士>后,你可以令任意名角色各选择一项:1.视为对自己的上下家使用【决斗】;2.与你议事,若议事结果相同,则其摸一张牌;否则其弃置一张牌且本回合不能使用基本牌.③你可以将<死士>牌当作任意基本牌使用或打出',
            qg_chenzhao: '沉昭',
            qg_chenzhao_info: '限定技,每轮开始时或一名角色死亡后,若游戏轮数不小于场上存活角色数,则你可以将所有<死士>置入弃牌堆并选择至多等量角色,这些角色依次选择一项:①减1点体力上限;②失去武将牌上的非锁定技',
            qg_xuan_simayan: '玄司马炎',
            qg_xuan_simayan_prefix: '玄',
            qg_dengzun: '登尊',
            qg_dengzun_info: '锁定技,每轮的第一个回合结束后,你选择一项:①执行一个额外回合;②增加1点体力上限并回复1点体力',
            qg_santong: '三统',
            qg_santong_info: '锁定技,准备阶段,你令两名角色交换一个区域的所有牌,若这两名角色所交换区域的牌数之差不大于X,则你减1点体力上限(X为你的体力值)',
            qg_xuan_simafu: '玄司马孚',
            qg_xuan_simafu_prefix: '玄',
            qg_shenyin: '慎隐',
            qg_shenyin_info: '锁定技,当你受到非破隐伤害后,若你不处于隐匿状态,则你回复1点体力并进入隐匿状态,然后随机获得一个隐匿技',
            qg_caida: '才达',
            qg_caida_info: '每种牌名每回合限一次,你可以翻面/横置/复原武将牌,视为使用一张基本牌或普通锦囊牌',
        },
    };
    for (const i in qg_characterPack.character) {
        if (!qg_characterPack.character[i][4]) qg_characterPack.character[i][4] = [];
        qg_characterPack.character[i][4].push('ext:群星荟萃/image/character/' + i + '.jpg');
        qg_characterPack.character[i][4].push('die:ext:群星荟萃/audio/die:true');
        qg_characterPack.character[i][3].unshift('qg_xuantong');
    }
    lib.config.all.characters.add('qg_characterPack');
    lib.config.characters.add('qg_characterPack');
    lib.translate.qg_characterPack_character_config = '千古风流';
    return qg_characterPack;
};
export default packs;

import { lib, game, ui, get, ai, _status } from '../../../noname.js';
const skills = {
    //技能代码
    dz_rb_wudun: {
        trigger: { global: 'damageBegin4' },
        sunbenSkill: true,
        filter(event, player) {
            if (player.hasSkill('dz_rb_wudun_sunben')) return false;
            return true;
        },
        async cost(event, trigger, player) {
            const result = await player
                .chooseBool(get.prompt2('dz_rb_wudun'))
                .set('ai', () => trigger.num > 1)
                .forResult(); //QQQ
            if (!result.bool) {
                event.result = result;
                return;
            }
            event.result = result;
            let targets2;
            const targets = game.filterPlayer((current) => current != trigger.player && current != player);
            if (targets.length && trigger.num > 1) {
                targets2 = (
                    await player
                        .chooseTarget(get.prompt('dz_rb_wudun'), '选择至多' + get.cnNumber(trigger.num - 1) + '名角色令这些角色受到' + (trigger.source ? get.translation(trigger.source) + '造成的' : '') + '一点' + (trigger.nature ? get.translation(trigger.nature) : '') + '伤害', [1, trigger.num - 1], function (c, player, target) {
                            return get.event('targetsx').includes(target);
                        })
                        .set('ai', (target) => -get.attitude(player, target))
                        .set('targetsx', targets)
                        .forResult()
                ).targets; //QQQ
                event.result.targets = targets2 || [];
                event.result.targets.add(player);
            } else {
                event.result.targets = [player];
            }
        },
        async content(event, trigger, player) {
            player.addTempSkill('dz_rb_wudun_sunben', { player: 'dyingAfter' });
            trigger.num -= event.targets.length;
            for (let target of event.targets.sortBySeat()) {
                await target.damage(trigger.source ? trigger.source : 'nosource', trigger.nature);
            }
        },
        subSkill: {
            sunben: {
                charlotte: true,
                mark: true,
                intro: { content: '你脱离濒死状态后回复技能【乌趸】' },
            },
        },
    },
    dz_rb_aicang: {
        trigger: { player: 'useCardAfter' },
        filter(event, player) {
            return player.hasMark('dz_rb_aicang') && _status.currentPhase == player && !_status.dying.length;
        },
        async cost(event, trigger, player) {
            const bool = (
                await player
                    .chooseBool(get.prompt('dz_rb_aicang'), '你可以受到至多' + get.cnNumber(player.countMark('dz_rb_aicang')) + '点闪电伤害..')
                    .set('ai', () => !player.storage.dz_rb_gongtian_count)
                    .forResult()
            ).bool; //QQQ
            if (!bool) {
                event.result = { bool: false };
                return;
            }
            let list = [];
            for (var i = 1; i <= player.countMark('dz_rb_aicang'); i++) {
                list.push(i);
            }
            for (var i = 0; i < list.length; i++) {
                list[i] = [list[i], get.cnNumber(list[i], true)];
            }
            const result = list.length == 1 ? { result: { bool: true, links: [1] } } : await player.chooseButton([get.prompt('dz_rb_aicang'), '选择你要受到的伤害值', [list, 'tdnodes']]).forResult();
            event.result = {
                bool: result.bool,
                cost_data: {
                    links: result.links,
                },
            };
        },
        async content(event, trigger, player) {
            const num = event.cost_data.links[0],
                cnNum = get.cnNumber(num);
            await player.damage(num, 'nosource', 'thunder');
            let targets = (
                await player
                    .chooseTarget('哀苍:选择一名角色,令其摸/弃置' + cnNum + '张手牌', true)
                    .set('ai', (target) => target.isFriendsOf(player))
                    .forResult()
            ).targets; //QQQ
            if (!targets || targets.length <= 0) targets = [player];
            const target = targets[0];
            const index = target.countCards('h')
                ? (
                    await player
                        .chooseControl('摸牌', '弃牌')
                        .set('prompt', '哀苍:令' + get.translation(target) + '摸或弃置' + cnNum + '张手牌')
                        .forResult()
                ).index
                : 0;
            if (index == 0) await target.draw(num);
            else await target.chooseToDiscard(num, true);
            await player.chooseToGuanxing(player.countMark('dz_rb_aicang'));
            player.removeMark('dz_rb_aicang', player.countMark('dz_rb_aicang'), false);
        },
        intro: { content: '你可以选择受到至多#点闪电伤害' },
        group: 'dz_rb_aicang_mark',
        subSkill: {
            mark: {
                trigger: {
                    player: 'useCard',
                    global: 'phaseBefore',
                },
                silent: true,
                filter(event, player) {
                    return (event.name == 'phase' && player.hasMark('dz_rb_aicang')) || _status.currentPhase == player;
                },
                async content(event, trigger, player) {
                    if (trigger.name == 'phase') {
                        player.removeMark('dz_rb_aicang', player.countMark('dz_rb_aicang'), false);
                    } else player.addMark('dz_rb_aicang', 1, false);
                },
            },
        },
    },
    dz_rb_gongtian: {
        trigger: { global: 'damageEnd' },
        logTarget: 'player',
        filter(event, player) {
            return event.player.isIn() && event.player.countCards('he') != 0;
        },
        async content(event, trigger, player) {
            const onShowCards = await game.cardsGotoOrdering(get.cards(1 + (player.storage.dz_rb_gongtian_count || 0))).cards,
                hs = trigger.player.getCards('h'),
                suits = [];
            for (let card of onShowCards) suits.add(card.suit);
            event.videoId = lib.status.videoId++;
            let str = get.translation(player) + '【恭天】亮出';
            let dialog = ui.create.dialog(str, onShowCards);
            dialog.videoId = event.videoId;
            game.broadcast(
                function (player, id, cards) {
                    let str = get.translation(player) + '【恭天】亮出';
                    var dialog = ui.create.dialog(str, cards);
                    dialog.videoId = id;
                },
                player,
                event.videoId,
                onShowCards,
            );
            game.addVideo('showCards', player, [get.translation(player) + '【恭天】亮出牌', get.cardsInfo(onShowCards)]);
            game.log(player, '亮出了卡牌', onShowCards);
            await game.asyncDelay(3.5);
            game.broadcastAll('closeDialog', event.videoId);
            game.addVideo('cardDialog', null, event.videoId);
            let control,
                list = [],
                choiceList = ['令' + get.translation(trigger.player) + '重铸所有花色与展示牌不同的牌', '令' + get.translation(trigger.player) + '弃置所有花色与展示牌相同的牌'];
            if ((trigger.player != player && trigger.player.countCards('he')) || trigger.player.hasCard((card) => !suits.includes(card.suit) && player.canRecast(card, trigger.player), 'he')) list.push('选项一');
            else choiceList[0] = '<span style="opacity:0.5">' + choiceList[0] + '</span>';
            if ((trigger.player != player && trigger.player.countCards('he')) || trigger.player.hasCard((card) => (card) => suits.includes(card.suit) && lib.filter.cardDiscardable(card, trigger.player, 'dz_rb_gongtian'), 'he')) list.push('选项二');
            else choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + '</span>';
            if (list.length >= 1) {
                let onCards;
                control = (
                    await player
                        .chooseControl(list)
                        .set('choiceList', choiceList)
                        .set('ai', () => (trigger.player.isFriendsOf(player) ? '选项一' : '选项二')) //QQQ
                        .set('prompt', '恭天:请令' + get.translation(trigger.player) + (trigger.player == player ? '(你)' : '') + '执行一项')
                        .forResult()
                ).control;
                if (control == '选项一') {
                    onCards = trigger.player.getCards('he', (card) => !suits.includes(card.suit) && player.canRecast(card, trigger.player));
                    await trigger.player.recast(onCards);
                } else {
                    onCards = trigger.player.getCards('he', (card) => suits.includes(card.suit) && lib.filter.cardDiscardable(card, trigger.player, 'dz_rb_gongtian'));
                    if (onCards.length >= 1) await trigger.player.discard(onCards);
                }
                if (hs.length >= 1 && hs.every((card) => onCards.includes(card))) await trigger.player.recover();
            }
            player.addMark('dz_rb_gongtian_count', 1, false);
            player.addTempSkill('dz_rb_gongtian_count');
        },
        subSkill: {
            count: {
                charlotte: true,
                intro: {
                    content(storage) {
                        return '本回合【恭天】亮出牌数为〖' + ((storage || 0) + 1) + '〗';
                    },
                    markcount(storage) {
                        return (storage || 0) + 1;
                    },
                },
            },
        },
    },
    dz_rb_changyu: {
        trigger: { player: ['loseAfter', 'loseAsyncAfter', 'gainAfter'] },
        filter(event, player) {
            if (event.name != 'gain' && event.type != 'discard') return false;
            var evt = event.getl(player);
            return (evt && evt.cards2.length >= player.hp && player.hasCard((card) => !card.hasGaintag('dz_rb_changyu_discard'))) || (event.name == 'gain' && event.cards.length >= player.hp && player.hasCard((card) => !card.hasGaintag('dz_rb_changyu_gain')));
        },
        async cost(event, trigger, player) {
            let str = '令一张手牌',
                discard = false;
            if (trigger.name == 'gain' && trigger.cards.length >= player.hp) {
                str += '不计入次数限制且可任意调整目标数';
            } else {
                discard = true;
                str += '本回合无法使用或弃置';
            }
            const result = await player
                .chooseCard('偿欲', str, true, function (card) {
                    let discardx = get.event('discardx');
                    return !card.hasGaintag(discardx ? 'dz_rb_changyu_discard' : 'dz_rb_changyu_gain');
                })
                .set('discardx', discard)
                .forResult();
            event.result = result;
            event.result.cost_data = { Gaintag: discard ? 'dz_rb_changyu_discard' : 'dz_rb_changyu_gain' };
        },
        async content(event, trigger, player) {
            player.addGaintag(event.cards, event.cost_data.Gaintag);
            if (event.cost_data.Gaintag == 'dz_rb_changyu_discard') {
                player.addTempSkill(event.cost_data.Gaintag);
            } else {
                player.addSkill(event.cost_data.Gaintag);
            }
        },
        //group:"dz_rb_changyu_phaseDiscard",
        subSkill: {
            phaseDiscard: {
                trigger: { player: 'phaseDiscardEnd' },
                filter(event, player) {
                    return player.countCards('h') > player.getHandcardLimit();
                },
                async cost(event, trigger, player) {
                    let count = player.countCards('h') - player.getHandcardLimit();
                    event.result = await player.chooseCard('偿欲:将' + get.cnNumber(count) + '张手牌置入弃牌堆', count, true).forResult();
                },
                async content(event, trigger, player) {
                    player.loseToDiscardpile(event.cards);
                },
            },
            discard: {
                name: '禁用',
                charlotte: true,
                onremove(player) {
                    player.removeGaintag('dz_rb_changyu_discard');
                },
                mod: {
                    cardDiscardable(card, player) {
                        if (card.hasGaintag('dz_rb_changyu_discard')) return false;
                    },
                    cardEnabled2(card, player) {
                        if (get.itemtype(card) == 'card' && card.hasGaintag('dz_rb_changyu_discard')) return false;
                    },
                },
            },
            gain: {
                mod: {
                    targetInRange(card, player, target) {
                        if (!card.cards) return;
                        for (var i of card.cards) {
                            if (i.hasGaintag('dz_rb_changyu_gain')) return true;
                        }
                    },
                    cardUsable(card, player, target) {
                        if (!card.cards) return;
                        for (var i of card.cards) {
                            if (i.hasGaintag('dz_rb_changyu_gain')) return Infinity;
                        }
                    },
                },
                trigger: { player: 'useCard2' },
                filter(event, player) {
                    return (
                        event.targets.length &&
                        player.hasHistory('lose', function (evt) {
                            if (evt.parent != event) return false;
                            for (let card of evt.cards) {
                                let id = card.cardid;
                                if (evt.gaintag_map && evt.gaintag_map[id] && evt.gaintag_map[id].includes('dz_rb_changyu_gain')) return true;
                            }
                        })
                    );
                },
                async cost(event, trigger, player) {
                    if (trigger.addCount !== false) {
                        trigger.addCount = false;
                        let stat = player.getStat().card,
                            name = trigger.card.name;
                        if (typeof stat[name] == 'number') stat[name]--;
                    }
                    let count = Math.max(
                        game.countPlayer((current) => player.canUse(trigger.card, current, false)),
                        trigger.targets.length,
                    );
                    event.result = await player
                        .chooseTarget(get.prompt('dz_rb_changyu'), '为' + get.translation(trigger.card) + '额外指定或减少任意名目标角色', [1, count], function (card, player, target) {
                            return get.event('targetsx').includes(target) || player.canUse(get.event('cardx'), target);
                        })
                        .set('targetsx', trigger.targets)
                        .set('cardx', trigger.card)
                        .set('targetprompt', function (target) {
                            if (get.event('targetsx').includes(target)) return '减少目标';
                            else return '增加目标';
                        })
                        .forResult();
                },
                async content(event, trigger, player) {
                    for (let target of event.targets) {
                        if (trigger.targets.includes(target)) trigger.targets.remove(target);
                        else trigger.targets.push(target);
                    }
                },
            },
        },
    },
    dz_rb_aolin: {
        enable: 'phaseUse',
        intro: {
            content(storage, player) {
                var str = '';
                if (player.getStorage('dz_rb_aolin_nouse').length >= 1) {
                    str += '不可使用的类型:' + get.translation(player.getStorage('dz_rb_aolin_nouse'));
                    if (player.hasMark('dz_rb_aolin_maxHp')) str += '<br/>';
                }
                if (player.hasMark('dz_rb_aolin_maxHp')) str += '已增加〖' + player.countMark('dz_rb_aolin_maxHp') + '〗点体力上限';
                return str;
            },
        },
        filter(event, player) {
            return !event.dz_rb_aolin && player.hasCard((card) => !player.getStorage('dz_rb_aolin_nouse').includes(get.type2(card)));
        },
        async content(event, trigger, player) {
            const result = await player
                .chooseToUse()
                .set('addCount', true)
                .set('filterCard', function (card, player, event) {
                    if ((get.event('dz_rb_aolin_banned') || []).includes(get.type2(card))) return false;
                    let sourcex = get.event('sourcex');
                    if (sourcex && sourcex.player == player && get.event('triggered').name != 'dz_rb_aolin_damage') {
                        if (!lib.filter.cardUsable(card, player, sourcex)) return false;
                    }
                    return lib.filter.filterCard.apply(this, arguments);
                })
                .set('dz_rb_aolin_banned', player.getStorage('dz_rb_aolin_nouse'))
                .set('sourcex', event.getParent('chooseToUse'))
                .set('triggered', event.parent)
                .set('prompt', '傲嶙:你可以使用一张牌')
                .forResult();
            if (result.bool) {
                let card = result.card;
                event.card = card;
                let choiceList = ['本回合发动【傲嶙】不能使用' + get.translation(get.type2(event.card)) + '牌且增加一点体力上限', '失去一点体力'];
                const control = (await player.chooseControl().set('choiceList', choiceList).forResult()).control;
                if (control == '选项一') {
                    player.markAuto('dz_rb_aolin_nouse', [get.type2(event.card)]);
                    player.addTempSkill('dz_rb_aolin_nouse');
                    await player.gainMaxHp();
                    player.addMark('dz_rb_aolin_maxHp', 1, false);
                    player.addTempSkill('dz_rb_aolin_maxHp');
                    player.markSkill('dz_rb_aolin');
                } else {
                    await player.loseHp();
                }
                let onDiscards = player.getCards('h', (cardx) => get.type2(card) == get.type2(cardx) && lib.filter.cardDiscardable(cardx, player, 'dz_rb_aolin'));
                if (onDiscards.length) {
                    await player.discard(onDiscards);
                    if (player.countCards('h') != player.maxHp) {
                        if (player.countCards('h') < player.maxHp) await player.drawTo(player.maxHp);
                        else {
                            await player.chooseToDiscard('h', player.countCards('h') - player.maxHp, true);
                        }
                    }
                }
            } else {
                if (event.parent.name == 'dz_rb_aolin_damage') return;
                event.getParent('chooseToUse').dz_rb_aolin = true;
                event.getParent('chooseToUse').goto(0);
            }
        },
        group: 'dz_rb_aolin_damage',
        subSkill: {
            damage: {
                trigger: { player: 'damageEnd' },
                filter(event, player) {
                    return player.hasCard((card) => !player.getStorage('dz_rb_aolin_nouse').includes(get.type2(card)));
                },
                prompt2: '使用一张牌',
                content() {
                    var next = game.createEvent('dz_rb_aolin', false);
                    next.player = player;
                    next.setContent(lib.skill.dz_rb_aolin.content);
                },
            },
            nouse: {
                charlotte: true,
                onremove(player) {
                    delete player.storage.dz_rb_aolin_nouse;
                    player.unmarkSkill('dz_rb_aolin');
                },
                //marktext:"禁",
                //intro:{content:"本回合发动【傲嶙】不能使用$类型的牌"},
            },
            maxHp: {
                trigger: { global: 'phaseEnd' },
                charlotte: true,
                forced: true,
                //marktext:"嶙",
                //intro:{content:"回合结束时,你扣减#点体力上限"},
                filter(event, player) {
                    return player.hasMark('dz_rb_aolin_maxHp');
                },
                async content(event, trigger, player) {
                    const count = player.countMark('dz_rb_aolin_maxHp');
                    player.removeSkill(event.name);
                    player.unmarkSkill('dz_rb_aolin');
                    player.removeMark('dz_rb_aolin_maxHp', count, false);
                    await player.loseMaxHp(count);
                },
            },
        },
    },
    //限定技,你扣减体力上限时,可防止之;</br>若体力上限等于一,则【天浚】中x改为9且每次发动后减1,移除【天浚】减少体力上限的效果,本轮结束后或x为0,你死亡;</br>反之你将体力上限调整至与一名其他角色相同,若其本回合死亡,你重置【陨绝】
    dz_rb_yunjue: {
        trigger: {
            player: 'loseMaxHpBefore',
        },
        limited: true,
        check(player) {
            return player.maxHp == 1;
        }, //QQQ
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            trigger.cancel();
            if (player.maxHp == 1) {
                player.addSkill('dz_rb_yunjue_buff');
            } else {
                const result = await player.chooseTarget('陨绝:选择一名角色而后将体力上限增加/减少至与其相同', true).forResult();
                if (result.targets?.length) {
                    let target = result.targets[0];
                    player.line(target);
                    if (!player.storage.dz_rb_yunjue_die) player.storage.dz_rb_yunjue_die = [];
                    player.storage.dz_rb_yunjue_die.add(target);
                    player.markSkill('dz_rb_yunjue_die');
                    player.addTempSkill('dz_rb_yunjue_die');
                    if (target.maxHp != player.maxHp) {
                        let num = target.maxHp - player.maxHp;
                        await player[num > 0 ? 'gainMaxHp' : 'loseMaxHp'](num > 0 ? num : Math.abs(num));
                    }
                }
            }
        },
        subSkill: {
            die: {
                trigger: {
                    global: 'die',
                },
                charlotte: true,
                forced: true,
                marktext: '绝',
                intro: {
                    content: '本回合内,当$死亡时,你重置【陨绝】',
                },
                filter(event, player) {
                    return player.getStorage('dz_rb_yunjue_die').includes(event.player);
                },
                async content(event, tigger, player) {
                    player.restoreSkill('dz_rb_yunjue');
                    player.removeSkill(event.name);
                },
            },
            buff: {
                trigger: {
                    global: 'roundStart',
                },
                charlotte: true,
                forced: true,
                mark: true,
                marktext: '陨',
                intro: {
                    content(storage, player) {
                        var num = 9 - player.storage.dz_rb_yunjue_buff;
                        return '死亡倒计时:卜算' + num + ';</br>本轮结束后或以此法卜算' + num + '次后,你死亡';
                    },
                    markcount(storage, player) {
                        return 9 - player.storage.dz_rb_yunjue_buff;
                    },
                },
                init(player) {
                    player.storage.dz_rb_yunjue_buff = 0;
                },
                async content(event, trigger, player) {
                    player.die();
                },
            },
        },
        mark: true,
        intro: {
            content: 'limited',
        },
        init: (player, skill) => (player.storage[skill] = false),
    },
    //当你需要使用或打出牌时,你可声明并亮出牌堆顶x张牌,若其中有同名牌则你使用之,否则减少一点体力上限并选择一项:</br>1.【卜算x】并使用牌堆底第一张牌;</br>2.本回合【天浚】失效并获得亮出牌(x为你体力上限)
    dz_rb_tianjun: {
        mod: {
            cardUsable(card, player, num) {
                if (card.cards?.some((q) => !player.getCards('h').includes(q))) {
                    return Infinity;
                }
            },
            targetInRange(card, player) {
                if (card.cards?.some((q) => !player.getCards('h').includes(q))) {
                    return true;
                }
            },
        },
        hiddenCard(player, name) {
            return true;
        },
        enable: ['chooseToUse', 'chooseToRespond'],
        forced: true,
        filter(event, player) {
            return player.qcard(false, true, false).length;
        },
        async content(event, trigger, player) {
            let numx = player.maxHp;
            if (player.hasSkill('dz_rb_yunjue_buff')) {
                numx = 9 - player.storage.dz_rb_yunjue_buff;
            }
            let list = [];
            const evt = event.getParent(2);
            if (evt.name == '_wuxie') {
                list = [['trick', '', 'wuxie']];
            } else {
                list = player.qcard(false, true, false);
            }
            if (list.length) {
                const { links } = await player
                    .chooseButton(['声明要使用或打出的牌', [list, 'vcard']])
                    .set('ai', (button) => {
                        if (
                            Array.from(ui.cardPile.childNodes)
                                .slice(0, numx)
                                .some((q) => q.name == button.link[2])
                        ) {
                            return 999;
                        }
                        const num = player.getUseValue(
                            {
                                name: button.link[2],
                                nature: button.link[3],
                            },
                            null,
                            true,
                        );
                        return number0(num) / 2 + 10;
                    })
                    .forResult();
                if (links?.length) {
                    const cards = get.cards(numx);
                    const card = cards.find((q) => q.name == links[0][2]);
                    if (card) {
                        if (links[0][2] == 'caochuan') {
                            player.useCard(card, false);
                            event.parent._trigger = evt.parent._trigger;
                        }
                        if (links[0][2] == 'youdishenru') {
                            player.useCard(card, false);
                            event.parent.youdiinfo = evt.parent.youdiinfo;
                        }
                        if (links[0][2] == 'wuxie') {
                            player.useCard(card, false);
                            event._trigger = evt._trigger;
                        }
                        if (links[0][2] == 'chenhuodajie') {
                            player.useCard(card, evt.parent._trigger.player, false);
                        } //AAA
                        if (evt.parent.name == '_save') {
                            await player.useCard(card, _status.dying, false);
                        }
                        if (evt.name == 'chooseToUse' && links[0][2] != 'shan') {
                            await player.chooseUseTarget(card, true, false, 'nodistance'); //无距离次数限制
                        } else {
                            evt.untrigger();
                            evt.set('responded', true);
                            evt.result = { bool: true, card: card, cards: [card] };
                            evt.redo();
                        }
                    } else {
                        if (!player.hasSkill('dz_rb_yunjue_buff')) {
                            await player.loseMaxHp();
                            if (player.hasSkill('dz_rb_yunjue_buff')) {
                                numx = 9 - player.storage.dz_rb_yunjue_buff;
                            }
                        }
                        const controllist = [`【卜算${numx}】并使用牌堆底第一张牌`, '本回合【天浚】失效并获得亮出牌'];
                        const {
                            result: { control },
                        } = await player.chooseControl(controllist).set('ai', (e, p) => controllist.randomGet());
                        if (control == `【卜算${numx}】并使用牌堆底第一张牌`) {
                            await player.chooseToGuanxing(numx);
                            player.chooseUseTarget(get.bottomCards(1, true)[0], true);
                        } else {
                            player.tempBanSkill('dz_rb_tianjun');
                            player.gain(cards, 'gain2');
                        }
                    }
                    if (player.hasSkill('dz_rb_yunjue_buff')) {
                        player.storage.dz_rb_yunjue_buff++;
                        if (player.storage.dz_rb_yunjue_buff >= 9) {
                            await player.die();
                        }
                    }
                }
            }
        },
        ai: {
            respondSha: true,
            respondShan: true,
            order: 10,
            result: {
                player(player) {
                    if (_status.event.type == 'dying') {
                        return get.attitude(player, _status.event.dying);
                    }
                    return 1;
                },
            },
        },
    },
    dz_rb_renwang: {
        trigger: {
            global: 'roundStart',
        },
        forced: true,
        filter(event, player) {
            if (game.roundNumber <= 1) return false;
            return lib.skill.dz_rb_renwang.logTarget(event, player).length >= 1;
        },
        logTarget(trigger, player) {
            var targets = [],
                bool = true;
            game.filterPlayer2(function (current) {
                var all = current.actionHistory;
                for (var i = all.length - 2; i >= 0; i--) {
                    if (all[i].sourceDamage.length && current == player) bool = false;
                    var history = all[i].gain;
                    for (var evt of history) {
                        if (current == player) break;
                        var evtl = evt;
                        if (evt.parent.name == 'loseAsync') {
                            evtl = evt.parent;
                        }
                        if (player.hasAllHistory('lose', (evtx) => evtx.parent == evtl && evtx.cards2.length >= 1) && current.isIn()) targets.add(current);
                    }
                    if (all[i].isRound) break;
                }
            });
            if (bool) return game.filterPlayer((current) => current != player && current.isIn());
            return targets;
        },
        async content(event, trigger, player) {
            let targets = lib.skill.dz_rb_renwang.logTarget(trigger, player).sortBySeat(_status.currentPhase ? _status.currentPhase : null);
            let targets2 = [],
                bool = true;
            game.filterPlayer2(function (current) {
                var all = current.actionHistory;
                for (var i = all.length - 2; i >= 0; i--) {
                    if (all[i].sourceDamage.length && current == player) bool = false;
                    var history = all[i].gain;
                    for (var evt of history) {
                        if (current == player) break;
                        var evtl = evt;
                        if (evt.parent.name == 'loseAsync') {
                            evtl = evt.parent;
                        }
                        if (player.hasAllHistory('lose', (evtx) => evtx.parent == evtl && evtx.cards2.length >= 1) && current.isIn()) targets2.add(current);
                    }
                    if (all[i].isRound) break;
                }
            });
            for (let target of targets) {
                if (!target.isIn()) continue;
                let list = [],
                    choiceList = ['令' + get.translation(player) + '摸一张牌', '令' + get.translation(player) + '回复一点体力'];
                if (!targets2.includes(target)) choiceList[0] = '<span style="opacity:0.5">' + choiceList[0] + '</span>';
                else list.push('选项一');
                if (!player.isDamaged() || !bool) choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + '</span>';
                else list.push('选项二');
                if (list.length <= 0) continue;
                else if (list.length == 2) list.push('背水!');
                list.push('cancel2');
                const result = await target
                    .chooseControl(list)
                    .set('choiceList', choiceList)
                    .set('prompt', '仁望:你可以选择一项')
                    .set('ai', function () {
                        const att = get.attitude(get.event('player'), get.event('sourcex'));
                        if (att <= 0) return 'cancel2';
                        return get.event('controls')[get.event('controls').length - 2];
                    })
                    .set('sourcex', player)
                    .forResult();
                if (result.control != 'cancel2') {
                    if (result.control == '选项一' || result.control == '背水!') await player.draw();
                    if (result.control == '选项二' || result.control == '背水!') await player.recover();
                }
            }
        },
        group: 'dz_rb_renwang_mark',
        subSkill: {
            mark: {
                trigger: {
                    global: ['roundStart', 'gainAfter'],
                },
                silent: true,
                forced: true,
                intro: {
                    content: '本轮已获得过$的牌',
                },
                filter(event, player, name) {
                    if (name == 'roundStart') return true;
                    var evt = event.getl(player);
                    if (event.parent.name == 'loseAsync') evt = event.parent.getl(player);
                    return evt && evt.hs && evt.cards2.length >= 1;
                },
                content() {
                    if (event.triggername == 'roundStart') {
                        game.filterPlayer(function (current) {
                            current.unmarkSkill('dz_rb_renwang_mark');
                            delete current.storage.dz_rb_renwang_mark;
                        });
                    } else trigger.player.markAuto('dz_rb_renwang_mark', [player]);
                },
                popup: false,
                _priority: 1,
            },
        },
    },
    dz_rb_yihe: {
        enable: 'phaseUse',
        usable: 1,
        filterTarget(card, player, target) {
            return player != target;
        },
        selectTarget: [1, 2],
        contentBefore() {
            event.parent.targets.unshift(player);
        },
        async content(event, trigger, player) {
            let choiceList = ['对一名角色造成一点伤害', '分配任意张牌给任意名角色(至少分配一张)', '将手牌调整至体力上限'],
                list = [];
            if (!event.parent.chooseed) event.parent.chooseed = [];
            if (event.parent.chooseed.includes('damage')) choiceList[0] = '<span style="opacity:0.5">' + choiceList[0] + '</span>';
            else list.push('选项一');
            if (event.parent.chooseed.includes('giveCard') || !event.target.countCards('he')) choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + '</span>';
            else list.push('选项二');
            if (event.parent.chooseed.includes('drawTo') || event.target.maxHp == event.target.countCards('h')) choiceList[2] = '<span style="opacity:0.5">' + choiceList[2] + '</span>';
            else list.push('选项三');
            if (list.length >= 1) {
                const result = await player
                    .chooseControl(list)
                    .set('prompt', '义合:令' + get.translation(event.target) + '执行一项')
                    .set('choiceList', choiceList)
                    .forResult();
                if (result.control == '选项一') {
                    event.parent.chooseed.add('damage');
                    await lib.skill.dz_rb_yihe.EffectList.damage(event, trigger, event.target);
                } else if (result.control == '选项二') {
                    event.parent.chooseed.add('giveCard');
                    await lib.skill.dz_rb_yihe.EffectList.giveCard(event, trigger, event.target);
                } else if (result.control == '选项三') {
                    event.parent.chooseed.add('drawTo');
                    await lib.skill.dz_rb_yihe.EffectList.drawTo(event, trigger, event.target);
                }
            }
        },
        contentAfter() {
            var list = [];
            if (!player.storage.dz_rb_yihe_buff) player.storage.dz_rb_yihe_buff = {};
            for (var i in lib.skill.dz_rb_yihe.EffectList) {
                if (!event.parent.chooseed.includes(i)) list.push(i);
            }
            if (list.length >= 1) {
                for (var target of targets) {
                    let id = target.playerid;
                    if (!player.storage.dz_rb_yihe_buff[id]) player.storage.dz_rb_yihe_buff[id] = [];
                    for (var i of list) player.storage.dz_rb_yihe_buff[id].push(i);
                }
                player.addTempSkill('dz_rb_yihe_buff');
                player.markSkill('dz_rb_yihe_buff');
            }
        },
        subSkill: {
            buff: {
                trigger: {
                    global: 'phaseEnd',
                },
                filter(event, player) {
                    if (!player.storage.dz_rb_yihe_buff) return false;
                    return lib.skill.dz_rb_yihe_buff.logTarget(event, player).length >= 1;
                },
                logTarget(trigger, player) {
                    let targets = [];
                    for (var i in player.storage.dz_rb_yihe_buff) {
                        let source = (_status.connectMode ? lib.playerOL : game.playerMap)[i];
                        if (source.isIn() && player.storage.dz_rb_yihe_buff[i].length >= 1) targets.add(source);
                    }
                    return targets;
                },
                forced: true,
                charlotte: true,
                intro: {
                    content(storage, player) {
                        let str = '';
                        for (var id in storage) {
                            const source = (_status.connectMode ? lib.playerOL : game.playerMap)[id];
                            if (storage[id].length >= 1 && source.isIn()) {
                                str += '<li>' + get.translation(source) + ':';
                                for (var effect of storage[id]) {
                                    if (effect == 'damage') str += '对一名角色造成一点伤害';
                                    else if (effect == 'giveCard') str += '分配任意手牌';
                                    else if (effect == 'drawTo') str += '调整手牌';
                                    str += '、';
                                }
                                str = str.slice(0, str.length - 1);
                                str += '<br/>';
                            }
                        }
                        return str.slice(0, str.length - 5);
                    },
                },
                async content(event, trigger, player) {
                    let targets = lib.skill.dz_rb_yihe_buff.logTarget(trigger, player).sortBySeat(trigger.player);
                    for (let target of targets) {
                        let id = target.playerid,
                            list = player.storage.dz_rb_yihe_buff[id];
                        if (!target.isIn()) break;
                        for (let effect of list) {
                            await lib.skill.dz_rb_yihe.EffectList[effect](event, trigger, target);
                        }
                    }
                    player.removeSkill(event.name);
                },
            },
        },
        EffectList: {
            damage: async function (event, trigger, player) {
                const { targets } = await player
                    .chooseTarget('义合:对一名角色造成一点伤害', true)
                    .set('ai', function (target) {
                        let player = get.event('player');
                        return get.damageEffect(target, player, player);
                    })
                    .forResult();
                if (targets) {
                    player.line(targets[0]);
                    await targets[0].damage(player);
                }
                return;
            },
            giveCard: async function (event, trigger, source) {
                if (!source.countCards('he')) return;
                event.toGive = [];
                event.given_map = {};
                if (_status.connectMode)
                    game.broadcastAll(function () {
                        _status.noclearcountdown = true;
                    });
                do {
                    const result = await source
                        .chooseCardTarget({
                            prompt: '义合',
                            prompt2: '请选择要分配的牌',
                            position: 'he',
                            complexCard: true,
                            filterTarget: lib.filter.notMe,
                            selectCard: [1, source.countCards('h')],
                            forced: event.toGive.length <= 0 ? true : false,
                            filterCard(card) {
                                let toGive = get.event('toGive');
                                return !toGive.includes(card);
                            },
                            ai1(card) {
                                if (ui.selected.cards.length >= 1) return 0;
                                if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') return 0;
                                if (!ui.selected.cards.length && card.name == 'du') return 20;
                                const player = get.owner(card);
                                return 6 - get.value(card);
                            },
                            ai2(target) {
                                const player = get.event('player'),
                                    att = get.attitude(player, target);
                                if (target.hasSkillTag('nogain')) return 0;
                                if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
                                    return target.hasSkillTag('nodu') ? 0 : -att;
                                }
                                if (target.hasJudge('lebu')) return -1;
                                const nh = target.countCards('h');
                                const np = player.countCards('h');
                                return Math.max(1, 5 - nh) * att;
                            },
                            toGive: event.toGive,
                        })
                        .forResult();
                    if (!result.bool) break;
                    event.toGive.addArray(result.cards);
                    if (result.targets?.length) {
                        const id = result.targets[0].playerid,
                            map = event.given_map;
                        if (!map[id]) map[id] = [];
                        map[id].addArray(result.cards);
                    }
                } while (event.toGive.length < source.countCards('h'));
                if (_status.connectMode) {
                    game.broadcastAll(function () {
                        delete _status.noclearcountdown;
                        game.stopCountChoose();
                    });
                }
                const list = [],
                    cards = [];
                for (var i in event.given_map) {
                    const sourcex = (_status.connectMode ? lib.playerOL : game.playerMap)[i];
                    source.line(sourcex, 'green');
                    if (source !== source && (get.mode() !== 'identity' || source.identity !== 'nei')) source.addExpose(0.2);
                    list.push([sourcex, event.given_map[i]]);
                    cards.addArray(event.given_map[i]);
                }
                await game
                    .loseAsync({
                        gain_list: list,
                        giver: source,
                        player: source,
                        cards: cards,
                        animate: 'giveAuto',
                    })
                    .setContent('gaincardMultiple');
                return;
            },
            drawTo: async function (event, trigger, player) {
                if (player.countCards('h') != player.maxHp) {
                    if (player.countCards('h') < player.maxHp) {
                        await player.drawTo(player.maxHp);
                    } else await player.chooseToDiscard('h', true, player.countCards('h') - player.maxHp);
                }
                return;
            },
        },
    },
    dz_rbk_hengzheng: {
        enable: 'phaseUse',
        usable: 3,
        zhuanhuanji: true,
        mark: true,
        marktext: '☯',
        intro: {
            markcount(storage, player) {
                if (player.storage.dz_rbk_hengzheng_lv) return 2;
                return '';
            },
            content(storage, player) {
                let count = player.storage.dz_rbk_zhengdang;
                if (!count) return '暂不可使用';
                if (!storage) {
                    return '阳:出牌阶段限' + (count.wen.length > count.wu.length ? '三' : '一') + '次,你可' + (player.storage.dz_rbk_hengzheng_lv ? '' : '弃置两张牌') + '从【阵党】中选择一张武将牌作为『副将』';
                } else {
                    return '阴:出牌阶段限' + (count.wen.length > count.wu.length ? '三' : '一') + '次,你可将『' + get.translation(player.storage.dz_rbk_hengzheng_character) + '』置入【阵党】或受到伤害后移除『' + get.translation(player.storage.dz_rbk_hengzheng_character) + '』,而后摸' + (player.storage.dz_rbk_hengzheng_lv ? '三' : '两') + '张牌';
                }
            },
        },
        onremove(player) {
            if (player.storage.dz_rbk_hengzheng_character) {
                _status.characterlist.add(player.storage.dz_rbk_hengzheng_character);
                delete player.storage.dz_rbk_hengzheng_character;
                delete player.storage.dz_rbk_hengzheng_character_source;
            }
        },
        filter(event, player) {
            let storage = player.storage.dz_rbk_zhengdang || {};
            if (!storage.wen) storage.wen = [];
            if (!storage.wu) storage.wu = [];
            if (!player.hasSkill('dz_rbk_zhengdang') && player.getStat('skill').dz_rbk_hengzheng_backup) return false;
            if (player.getStat('skill').dz_rbk_hengzheng_backup && storage.wu.length >= storage.wen.length) return false;
            if (player.storage.dz_rbk_hengzheng) {
                return player.storage.dz_rbk_hengzheng_character;
            }
            if (!storage || storage.wen.length + storage.wu.length <= 0) return false;
            return true;
        },
        chooseButton: {
            dialog(event, player) {
                var list = [],
                    dialog = ui.create.dialog('衡政');
                if (!player.storage.dz_rbk_hengzheng) {
                    if (player.storage.dz_rbk_zhengdang.wen.length) {
                        dialog.addText('文臣');
                        dialog.add([player.storage.dz_rbk_zhengdang.wen, 'character']);
                    }
                    if (player.storage.dz_rbk_zhengdang.wu.length) {
                        dialog.addText('武将');
                        dialog.add([player.storage.dz_rbk_zhengdang.wu, 'character']);
                    }
                } else dialog.add([[player.storage.dz_rbk_hengzheng_character], 'character']);
                return dialog;
            },
            check(button) {
                return 1;
            },
            backup(links, player) {
                return {
                    linkx: links[0],
                    audio: 'dz_rbk_hengzheng',
                    position: 'he',
                    filterCard(card, player) {
                        if (!player.storage.dz_rbk_hengzheng && !player.storage.dz_rbk_hengzheng_lv) {
                            return lib.filter.cardDiscardable(card, player);
                        }
                        return false;
                    },
                    selectCard() {
                        if (!_status.event.player.storage.dz_rbk_hengzheng && !player.storage.dz_rbk_hengzheng_lv) return 2;
                        return -1;
                    },
                    content() {
                        if (!player.storage.dz_rbk_hengzheng) {
                            var name = lib.skill.dz_rbk_hengzheng_backup.linkx,
                                info = lib.character[name];
                            if (player.storage.dz_rbk_hengzheng_character) {
                                _status.characterlist.add(player.storage.dz_rbk_hengzheng_character);
                                if (!player.storage.dz_rbk_hengzheng_characterMark) {
                                    game.broadcastAll(function (player) {
                                        player.classList.remove('fullskin2');
                                    }, player);
                                }
                                delete player.storage.dz_rbk_hengzheng_character;
                                delete player.storage.dz_rbk_hengzheng_character_source;
                            }
                            player.storage.dz_rbk_hengzheng_character = name;
                            player.storage.dz_rbk_hengzheng_character_source = 'wu';
                            if (player.storage.dz_rbk_zhengdang.wen.includes(name)) {
                                player.storage.dz_rbk_zhengdang.wen.remove(name);
                                player.storage.dz_rbk_hengzheng_character_source = 'wen';
                            } else {
                                player.storage.dz_rbk_zhengdang.wu.remove(name);
                            }
                            player.markSkill('dz_rbk_zhengdang');
                            if (player.classList.contains('fullskin2')) {
                                player.markSkillCharacter('dz_rbk_hengzheng_character', name, '衡政', '朕舒服乎~');
                                player.storage.dz_rbk_hengzheng_characterMark = true;
                            } else {
                                game.broadcastAll(
                                    function (player, first, chosen) {
                                        player.name1 = first;
                                        player.node.avatar.setBackground(first, 'character');
                                        player.node.name.innerHTML = get.slimName(first);
                                        player.name2 = chosen;
                                        player.classList.add('fullskin2');
                                        player.node.avatar2.classList.remove('hidden');
                                        player.node.avatar2.setBackground(chosen, 'character');
                                        player.node.name2.innerHTML = get.slimName(chosen);
                                        if (player == game.me && ui.fakeme) {
                                            ui.fakeme.style.backgroundImage = player.node.avatar.style.backgroundImage;
                                        }
                                    },
                                    player,
                                    player.name,
                                    name,
                                );
                            }
                            if (info && info[3].length >= 1) {
                                player.addAdditionalSkills('dz_rbk_hengzheng', info[3]);
                            }
                        } else {
                            player.draw(!player.storage.dz_rbk_hengzheng_lv ? 2 : 3);
                            player.storage.dz_rbk_zhengdang[player.storage.dz_rbk_hengzheng_character_source].add(player.storage.dz_rbk_hengzheng_character);
                            if (player.storage.dz_rbk_hengzheng_characterMark) {
                                player.unmarkSkill('dz_rbk_hengzheng_character');
                                delete player.storage.dz_rbk_hengzheng_characterMark;
                            } else {
                                game.broadcastAll(function (player) {
                                    player.name1 = player.name;
                                    player.smoothAvatar(false);
                                    player.node.avatar.setBackground(player.name, 'character');
                                    player.node.name.innerHTML = get.slimName(player.name);
                                    delete player.name2;
                                    player.classList.remove('fullskin2');
                                    player.node.avatar2.classList.add('hidden');
                                    player.node.name2.innerHTML = '';
                                    if (player == game.me && ui.fakeme) {
                                        ui.fakeme.style.backgroundImage = player.node.avatar.style.backgroundImage;
                                    }
                                }, player);
                            }
                            delete player.storage.dz_rbk_hengzheng_character;
                            delete player.storage.dz_rbk_hengzheng_character_source;
                            player.removeAdditionalSkills('dz_rbk_hengzheng');
                            if (player.storage.dz_rbk_hengzheng_lv) delete player.storage.dz_rbk_hengzheng_lv;
                            else {
                                player.storage.dz_rbk_hengzheng_lv = true;
                                player.markSkill('dz_rbk_hengzheng');
                            }
                        }
                        player.changeZhuanhuanji('dz_rbk_hengzheng');
                    },
                };
            },
            prompt(links, player) {
                if (player.storage.dz_rbk_hengzheng) return '将' + get.translation(links[0]) + '置入<阵党>中';
                return '弃置两张牌,获得' + get.translation(links[0]) + '武将牌上的技能';
            },
        },
        group: 'dz_rbk_hengzheng_damage',
        subSkill: {
            damage: {
                trigger: {
                    player: 'damageEnd',
                },
                forced: true,
                filter(event, player) {
                    return player.storage.dz_rbk_hengzheng && player.storage.dz_rbk_hengzheng_character;
                },
                content() {
                    player.changeZhuanhuanji('dz_rbk_hengzheng');
                    player.removeAdditionalSkills('dz_rbk_hengzheng');
                    _status.characterlist.add(player.storage.dz_rbk_hengzheng_character);
                    if (player.storage.dz_rbk_hengzheng_characterMark) {
                        player.unmarkSkill('dz_rbk_hengzheng_character');
                        delete player.storage.dz_rbk_hengzheng_characterMark;
                    } else {
                        game.broadcastAll(function (player) {
                            player.name1 = player.name;
                            player.smoothAvatar(false);
                            player.node.avatar.setBackground(player.name, 'character');
                            player.node.name.innerHTML = get.slimName(player.name);
                            delete player.name2;
                            player.classList.remove('fullskin2');
                            player.node.avatar2.classList.add('hidden');
                            player.node.name2.innerHTML = '';
                            if (player == game.me && ui.fakeme) {
                                ui.fakeme.style.backgroundImage = player.node.avatar.style.backgroundImage;
                            }
                        }, player);
                    }
                    delete player.storage.dz_rbk_hengzheng_character;
                    delete player.storage.dz_rbk_hengzheng_character_source;
                    player.draw(!player.storage.dz_rbk_hengzheng_lv ? 2 : 3);
                    if (player.storage.dz_rbk_hengzheng_lv) delete player.storage.dz_rbk_hengzheng_lv;
                    else {
                        player.storage.dz_rbk_hengzheng_lv = true;
                        player.markSkill('dz_rbk_hengzheng');
                    }
                },
            },
            character: {},
            backup: {},
        },
    },
    dz_rbk_zhengdang: {
        trigger: {
            global: 'phaseBefore',
            player: 'enterGame',
        },
        forced: true,
        filter(event, player) {
            return event.name != 'phase' || game.phaseNumber == 0;
        },
        onremove(player) {
            if (player.storage.dz_rbk_zhengdang) _status.characterlist.addArray(player.storage.dz_rbk_zhengdang.wen.concat(player.storage.dz_rbk_zhengdang.wu));
        },
        async content(event, trigger, player) {
            if (!_status.characterlist) {
                lib.skill.pingjian.initList();
            }
            _status.characterlist.randomSort();
            let characters = _status.characterlist
                .filter(function (i) {
                    var info = lib.character[i];
                    return info && info[1] == 'wu' && get.infoMaxHp(info[2]) <= 3;
                })
                .randomGets(4);
            let characters2 = _status.characterlist
                .filter(function (i) {
                    var info = lib.character[i];
                    return info && info[1] == 'wu' && get.infoMaxHp(info[2]) > 3;
                })
                .randomGets(4);
            game.broadcastAll(
                function (player, list) {
                    var cards = [];
                    for (var i = 0; i < list.length; i++) {
                        var cardname = 'huashen_card_' + list[i];
                        lib.card[cardname] = {
                            fullimage: true,
                            image: 'character/' + list[i],
                        };
                        lib.translate[cardname] = get.rawName2(list[i]);
                        cards.push(game.createCard(cardname, '', ''));
                    }
                    player.$draw(cards, 'nobroadcast');
                },
                player,
                characters.concat(characters2),
            );
            _status.characterlist.removeArray(characters.concat(characters2));
            if (!player.storage.dz_rbk_zhengdang) player.storage.dz_rbk_zhengdang = {};
            if (!player.storage.dz_rbk_zhengdang.wen) player.storage.dz_rbk_zhengdang.wen = [];
            if (!player.storage.dz_rbk_zhengdang.wu) player.storage.dz_rbk_zhengdang.wu = [];
            player.storage.dz_rbk_zhengdang.wen = characters.randomRemove(5);
            player.storage.dz_rbk_zhengdang.wu = characters2.randomRemove(5);
            player.markSkill(event.name);
        },
        marktext: '党',
        intro: {
            markcount(storage) {
                if (!storage) return 0;
                return storage.wen.length + storage.wu.length;
            },
            content(storage, player) {
                let str = '';
                if (!storage) return '看什么看,都给你杀咯!';
                if (storage.wen && storage.wen.length) {
                    str += '剩余文官:' + get.translation(storage.wen);
                    if (storage.wu && storage.wu.length) str += '<br/>';
                }
                if (storage.wu && storage.wu.length) str += '剩余<武将>:' + get.translation(storage.wu);
            },
            mark(dialog, storage, player) {
                if (!storage) dialog.addText('看什么看,都给你杀咯!');
                else {
                    if (storage.wen && storage.wen.length) {
                        dialog.addText('剩余文臣');
                        dialog.addSmall([storage.wen, 'character']);
                    }
                    if (storage.wu && storage.wu.length) {
                        dialog.addText('剩余武将');
                        dialog.addSmall([storage.wu, 'character']);
                    }
                }
            },
        },
        derivation: 'zhiheng',
        group: ['dz_rbk_zhengdang_damage', 'dz_rbk_zhengdang_zhiheng'],
        subSkill: {
            damage: {
                trigger: {
                    source: 'damageSource',
                },
                forced: true,
                filter(event, player) {
                    return player.storage.dz_rbk_zhengdang && player.storage.dz_rbk_zhengdang.wu.length > player.storage.dz_rbk_zhengdang.wen.length;
                },
                async content(event, trigger, player) {
                    const result = await player.chooseButton(['阵党:请重置任意张武将牌', [player.storage.dz_rbk_zhengdang.wen.concat(player.storage.dz_rbk_zhengdang.wu), 'character']], true, [1, player.storage.dz_rbk_zhengdang.wen.concat(player.storage.dz_rbk_zhengdang.wu).length]).forResult();
                    if (result.links?.length) {
                        let character = result.links,
                            characters = [];
                        for (var i of character) {
                            let sourcex = 'wen';
                            if (player.storage.dz_rbk_zhengdang.wen.includes(i)) player.storage.dz_rbk_zhengdang.wen.remove(i);
                            else if (player.storage.dz_rbk_zhengdang.wu.includes(i)) {
                                player.storage.dz_rbk_zhengdang.wu.remove(i);
                                sourcex = 'wu';
                            }
                            _status.characterlist.add(i);
                            let ch = _status.characterlist
                                .filter(function (i) {
                                    var info = lib.character[i];
                                    return info && info[1] == 'wu' && (sourcex == 'wen' ? get.infoMaxHp(info[2]) <= 3 : get.infoMaxHp(info[2]) > 3);
                                })
                                .randomGets(1);
                            _status.characterlist.removeArray(ch);
                            characters.addArray(ch);
                            player.storage.dz_rbk_zhengdang[sourcex].addArray(ch);
                        }
                        game.broadcastAll(
                            function (player, list) {
                                var cards = [];
                                for (var i = 0; i < list.length; i++) {
                                    var cardname = 'huashen_card_' + list[i];
                                    lib.card[cardname] = {
                                        fullimage: true,
                                        image: 'character/' + list[i],
                                    };
                                    lib.translate[cardname] = get.rawName2(list[i]);
                                    cards.push(game.createCard(cardname, '', ''));
                                }
                                player.$draw(cards, 'nobroadcast');
                            },
                            player,
                            characters,
                        );
                        player.markSkill('dz_rbk_zhengdang');
                    }
                },
            },
            zhiheng: {
                name: '制衡',
                inherit: 'zhiheng',
                filter(event, player) {
                    return !player.storage.dz_rbk_zhengdang || player.storage.dz_rbk_zhengdang.wen.length == player.storage.dz_rbk_zhengdang.wu.length;
                },
                audio: 2,
                audioname: ['gz_jun_sunquan'],
                mod: {
                    aiOrder(player, card, num) {
                        if (num <= 0 || get.itemtype(card) !== 'card' || get.type(card) !== 'equip') return num;
                        let eq = player.getEquip(get.subtype(card));
                        if (eq && get.equipValue(card) - get.equipValue(eq) < Math.max(1.2, 6 - player.hp)) return 0;
                    },
                },
                enable: 'phaseUse',
                usable: 1,
                position: 'he',
                filterCard: true,
                selectCard: [1, Infinity],
                prompt: '弃置任意张牌并摸等量的牌',
                check(card) {
                    return 6 - get.value(card);
                },
                async content(event, trigger, player) {
                    player.draw(event.cards.length);
                },
                ai: {
                    order: 1,
                    result: {
                        player: 1,
                    },
                    threaten: 1.5,
                },
            },
        },
    },
    //出牌阶段,你可对自己造成一点伤害,而后选择一项:</br>1.横置等同已损体力值名角色;</br>2.摸因此受到伤害角色数张牌.</br>处于横置状态的其他角色无法响应你使用的牌
    dz_rb_bilian: {
        enable: 'phaseUse',
        noForceDie: true,
        intro: {
            content: '你使用的牌不能被$响应',
        },
        filter(event, player) {
            return !player.hasSkill('dz_rb_bilian_banned');
        },
        async content(event, trigger, player) {
            await player.damage();
            if (!player.hasHistory('damage', (evt) => evt.parent == event)) {
                player.getHistory('custom').push({ name: 'dz_rb_bilian' });
                if (player.getHistory('custom', (evt) => evt.name == 'dz_rb_bilian').length >= 5) {
                    player.addTempSkill('dz_rb_bilian_banned');
                }
            }
            var num = game.countPlayer2((current) => current.hasHistory('damage', (evt) => evt.parent == event || (evt.parent.name == '_lianhuan' && evt.parent.getTrigger().parent == event)));
            var list = [],
                choiceList = ['横置' + get.cnNumber(player.getDamagedHp()) + '名角色', '摸' + num + '张牌'];
            if (player.getDamagedHp() >= 1 && game.hasPlayer((current) => !current.isLinked())) {
                list.push('选项一');
            } else {
                choiceList[0] = '<span style="opacity:0.5">' + choiceList[0] + '</span>';
            }
            if (num > 0) {
                list.push('选项二');
            } else {
                choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + '</span>';
            }
            event.count = num;
            let control;
            if (list.length > 1) {
                const result = await player
                    .chooseControl(list)
                    .set('prompt', '舭链:请执行一项')
                    .set('choiceList', choiceList)
                    .set('ai', function () {
                        return '选项二';
                    })
                    .forResult();
                control = result.control;
            } else if (list.length == 1) {
                control = list.slice(0)[0];
            }
            if (control == '选项一') {
                let targets;
                var max = player.getDamagedHp();
                if (max >= game.countPlayer((current) => !current.isLinked())) {
                    targets = game.filterPlayer((current) => !current.isLinked());
                } else {
                    const result = await player
                        .chooseTarget('舭链:横置' + get.cnNumber(max) + '名角色', max, true, function (card, player, target) {
                            return !target.isLinked();
                        })
                        .forResult();
                    targets = result.targets;
                }
                if (targets && targets.length >= 1) {
                    player.line(targets);
                    for (var i of targets.sortBySeat()) {
                        i.link(true);
                    }
                }
            } else if (control == '选项二') {
                player.draw(event.count);
            }
        },
        ai: {
            order() {
                return get.order({ name: 'tao' }) + 0.1;
            },
            result: {
                player(player, target) {
                    if (player.hp <= 1) return 0;
                    return 1;
                },
            },
        },
        group: 'dz_rb_bilian_link',
        subSkill: {
            banned: {
                charlotte: true,
            },
            link: {
                trigger: {
                    player: 'useCard',
                },
                charlotte: true,
                silent: true,
                filter(event, player) {
                    return game.hasPlayer((current) => current != player && current.isIn() && current.isLinked());
                },
                content() {
                    trigger.directHit.addArray(game.filterPlayer((current) => current != player && current.isIn() && current.isLinked()));
                },
                forced: true,
                popup: false,
                _priority: 1,
            },
        },
    },
    dz_rb_fuyan: {
        trigger: {
            player: 'damageBefore',
        },
        filter(event, player) {
            if (player.hasSkill('dz_rb_fuyan_banned') && event.source && event.source.isLinked()) return false;
            return !event.hasNature() && event.source && event.source.isIn();
        },
        forced: true,
        content() {
            'step 0';
            if (!trigger.source.isLinked()) {
                player.addSkill('dz_rb_bilian_link');
                trigger.source.link(true);
                event.finish();
            } else {
                player.chooseBool(get.prompt('dz_rb_fuyan'), '将你即将受到的' + trigger.num + '点伤害改为回复等量体力');
            }
            ('step 1');
            if (result.bool) {
                trigger.source.addSkill('dz_rb_fuyan_fire');
                player.addTempSkill('dz_rb_fuyan_banned');
                trigger.cancel();
                player.recover(trigger.num);
            }
        },
        subSkill: {
            banned: {
                charlotte: true,
            },
            fire: {
                trigger: {
                    source: 'damageBefore',
                },
                silent: true,
                charlotte: true,
                mark: true,
                marktext: '🔥',
                intro: {
                    content: '下一击!绝命🔥!',
                },
                content() {
                    if (!trigger.hasNature('fire')) game.setNature(trigger, 'fire');
                    player.removeSkill(event.name);
                },
                forced: true,
                popup: false,
            },
        },
    },
};
Object.assign(lib.skill, skills);
const trans = {
    //技能翻译
    dz_rb_bilian: '舭链',
    dz_rb_bilian_info: '出牌阶段,你可对自己造成一点伤害,而后选择一项:</br>1.横置等同已损体力值名角色;</br>2.摸因此受到伤害角色数张牌.</br>处于横置状态的其他角色无法响应你使用的牌',
    dz_rb_fuyan: '赴焰',
    dz_rb_fuyan_info: '当你受到无属性伤害时,横置伤害来源;每回合限一次,若其已横置则你可将此伤害改为回复等量体力,并令其下次造成的伤害为火焰伤害',
    dz_rbk_zhengdang: '阵党',
    dz_rbk_zhengdang_info: '游戏开始时,【文/武】各随机置入四张吴势力武将牌; </br>若一方武将牌居多, 【文】则:【衡政】调整为出牌阶段限三次;【武】则:造成伤害后可重铸任意武将牌; </br>否则你拥有【制衡】',
    dz_rbk_hengzheng: '衡政',
    dz_rbk_hengzheng_info: '转换技,出牌阶段限一次, 阳:你可弃置两张牌从【阵党】中选择一张武将牌为『副将』; 阴:你可将该『副将』置入【阵党】/受到伤害后移除该『副将』,摸两张牌;</br>如此转换后,下次转换你无须弃牌/多摸一张',
    dz_rb_yihe: '义合',
    dz_rb_yihe_info: '出牌阶段限一次,你可令你与至多两名其他角色依次执行未被选择的一项:1.对一名角色造成一点伤害;2.分配任意牌给任意角色;3.将手牌补至体力上限.</br>若如此做,本回合结束时,你与其依次执行剩余选项',
    dz_rb_renwang: '仁望',
    dz_rb_renwang_info: '每轮游戏结束时,其他角色须依次执行:若其本轮获得过你的牌,其可令你摸一张牌;若你本轮未造成过伤害,其可令你回复一点体力',
    dz_rb_tianjun: '天浚',
    dz_rb_tianjun_info: '当你需要使用或打出牌时,你可声明并亮出牌堆顶x张牌,若其中有同名牌则你使用之,否则减少一点体力上限并选择一项:</br>1.【卜算x】并使用牌堆底第一张牌;</br>2.本回合【天浚】失效并获得亮出牌(x为你体力上限)',
    dz_rb_yunjue: '陨绝',
    dz_rb_yunjue_info: '限定技,你扣减体力上限时,可防止之;</br>若体力上限等于一,则【天浚】中x改为9且每次发动后减1,移除【天浚】减少体力上限的效果,本轮结束后或x为0,你死亡;</br>反之你将体力上限调整至与一名其他角色相同,若其本回合死亡,你重置【陨绝】',
    dz_rb_aolin: '傲嶙',
    dz_rb_aolin_info: '出牌阶段或受到伤害后,你可使用一张牌并选择一项:</br>1.本回合【傲嶙】无法使用该类型且体力上限+1;2.失去一点体力.</br>而后你弃置与之类型相同的手牌,若如此做你将手牌调整至体力上限',
    dz_rb_changyu: '偿欲',
    dz_rb_changyu_info: '​锁定技,每当你一次获得/弃置不少于体力值的牌后,你令一张手牌不计入次数限制且可任意调整目标数/本回合无法使用或弃置',
    dz_rb_gongtian: '恭天',
    dz_rb_gongtian_info: '​一名角色受到伤害后,你可亮出牌堆顶〖1〗张牌,并令其重铸/弃置与亮出牌花色不同/相同的牌,若其因此失去所有手牌,回复一点体力;而后本回合〖+1〗',
    dz_rb_aicang: '哀苍',
    dz_rb_aicang_info: '​当你于回合内使用牌后,可受到至多X点闪电伤害并令一名角色执行等量调整值的手牌变化,而后你【卜算X】并重置X.(X为你本回合使用牌数)',
    dz_rb_wudun: '乌趸',
    dz_rb_wudun_info: '昂扬技,一名角色受到伤害时,你可选择包含你在内的至多伤害值名角色各分配其中一点伤害.</br>激昂:你脱离濒死状态后',
};
Object.assign(lib.translate, trans);
if (!_status.postReconnect.extErdai_skill) {
    _status.postReconnect.extErdai_skill = [
        function (skills, info) {
            for (let skill in skills) {
                lib.skill[skill] = skills[skill];
                if (info[skill]) lib.translate[skill] = info[skill];
                if (info[skill + '_info']) lib.translate[skill + '_info'] = info[skill + '_info'];
                game.finishSkill(skill);
            }
        },
        {},
        {},
    ];
}
for (let skill in skills) {
    _status.postReconnect.extErdai_skill[1][skill] = skills[skill];
    if (trans[skill]) {
        _status.postReconnect.extErdai_skill[2][skill] = trans[skill];
    }
    if (trans[skill + '_info']) {
        _status.postReconnect.extErdai_skill[2][skill + '_info'] = trans[skill + '_info'];
    }
}

import { lib, game, ui, get, ai, _status } from "../../../../noname.js"
/** @type { importCharacterConfig["skill"] } */
const GlobalSkills = {
    /** 蓄势技
    */
    _xushiSkill: {
        trigger: {
            player: ["useSkill", "logSkillBegin"],
        },
        silent: true,
        ruleSkill: true,
        charlotte: true,
        filter(event, player) {
            if (["global", "equip"].includes(event.type)) return false;
            let skill = get.sourceSkillFor(event);
            if (!skill) return false;
            let info = get.info(skill);
            if (info.charlotte || info.equipSkill || info.charlotte) return false;
            return info.xushiSkill;
        },
        async content(event, trigger, player) {
            let skill = get.sourceSkillFor(trigger);
            game.broadcastAll(player => {
                player.addSkill("xushiSkill");
            }, player);
        },
    },
    /** 土杀
    */
    _dustsha_skill: {
        trigger: {
            source: 'damageBegin3',
        },
        locked: true,
        ruleSkill: true,
        filter(event, player) {
            return event.hasNature('dust') && event.player.countCards('e', card => !card.storage.dustdestroy);
        },
        check(event, player) {
            var target = event.player;
            var eff = get.damageEffect(target, player, player, event.nature);
            if (get.attitude(player, target) > 0) {
                if (eff >= 0) return false;
                return true;
            }
            if (eff <= 0) return true;
            if (target.hp == 1) return false;
            if (
                event.num > 1 ||
                player.hasSkill("tianxianjiu") ||
                player.hasSkill("luoyi2") ||
                player.hasSkill("reluoyi2")
            )
                return false;
            if (target.countCards("he") < 2) return false;
            var num = 0;
            var cards = target.getCards("he");
            for (var i = 0; i < cards.length; i++) {
                if (get.value(cards[i]) > 6) num++;
            }
            if (num >= 2) return true;
            return false;
        },
        logTarget: "player",
        async content(event, trigger, player) {
            trigger.cancel();
            const target = trigger.player;
            if (!target.countCards('e', card => !card.storage?.dustdestroy)) return;
            const { bool, cards } = await player
                .choosePlayerCard(target, true, 'e', button => {
                    return !button.link.storage?.dustdestroy;
                })
                .set('ai', button => {
                    return -get.value(button.link, target) * get.attitude(player, target);
                }).forResult();
            if (bool) {
                cards[0].storage.dustdestroy = true;
                target.removeEquipTrigger(cards[0]);
                game.log(target, '装备区内的', cards[0], '被', player, '#g摧毁');
            }
        },
    },
    /** 摧毁
    */
    _dustDestroy: {
        trigger: {
            player: ['loseBefore', 'loseBegin'],
        },
        forced: true,
        charlotte: true,
        ruleSkill: true,
        filter(event, player, name) {
            if (name == 'loseBefore' && !['moveCard', 'swapEquip'].includes(event.getParent(2).name)) return false;
            return event.cards.some((card) => card.storage.dustdestroy);
        },
        async content(event, trigger, player) {
            if (event.triggername == 'loseBefore') {
                const cards = trigger.cards.filter(card => card.storage.dustdestroy);
                trigger.cards.removeArray(cards);
                game.log(cards, '已被', '#g摧毁', '，不能被移动');
            } else {
                for (let card of trigger.cards) {
                    if (card.storage.dustdestroy) {
                        card.storage.dustdestroy = false;
                        game.log(card, '解除', '#g摧毁', '状态');
                    }
                }
            }
        },
        mod: {
            cardEnabled(card) {
                if (card.storage?.dustdestroy) return false;
            },
            canBeReplaced(card, player) {
                if (card.storage?.dustdestroy) return false;
            },
            cardDiscardable(card, player) {
                if (card.storage?.dustdestroy) return false;
            },
            attackRange(player, num) {
                const cards = player.getCards('e', card => card.storage?.dustdestroy);
                if (!cards.length) return;
                return num + 1 - player.getEquipRange(cards);
            },
            globalFrom(from, to, distance) {
                const cards = from.getCards('e', (card) => card.storage?.dustdestroy);
                if (!cards.length) return;
                const range = cards.reduce((range, card) => {
                    let newRange = false;
                    const info = get.info(card, false);
                    if (info.distance) {
                        //如果存在globalFrom 则通过globalFrom动态获取攻击范围
                        if (typeof info.distance.globalFrom == "function") {
                            newRange = info.distance.globalFrom(card, from);
                        }
                        //否则采用祖宗之法
                        else if (typeof info.distance.globalFrom == "number") {
                            newRange = info.distance.globalFrom;
                        }
                    }
                    let isN1 = typeof range == "number";
                    let isN2 = typeof newRange == "number";
                    if (isN1 && isN2) return Math.max(range, newRange);
                    else return isN1 ? range : newRange;
                }, false);
                return distance + (typeof range == "number" ? range : 0);
            },
            globalTo(from, to, distance) {
                const cards = to.getCards('e', (card) => card.storage?.dustdestroy);
                if (!cards.length) return;
                const range = cards.reduce((range, card) => {
                    let newRange = false;
                    const info = get.info(card, false);
                    if (info.distance) {
                        //如果存在globalTo 则通过globalTo动态获取攻击范围
                        if (typeof info.distance.globalTo == "function") {
                            newRange = info.distance.globalTo(card, to);
                        }
                        //否则采用祖宗之法
                        else if (typeof info.distance.globalTo == "number") {
                            newRange = info.distance.globalTo;
                        }
                    }
                    let isN1 = typeof range == "number";
                    let isN2 = typeof newRange == "number";
                    if (isN1 && isN2) return Math.max(range, newRange);
                    else return isN1 ? range : newRange;
                }, false);
                return distance - (typeof range == "number" ? range : 0);
            },
        },
    },
    /** 点燃
    */
    _igniteCards: {
        trigger: {
            global: 'phaseEnd',
        },
        forced: true,
        popup: false,
        charlotte: true,
        ruleSkill: true,
        filter(event, player) {
            return player.countCards('he', function (card) {
                return lib.filter.cardDiscardable(card, player, '_igniteCards') && card.hasGaintag('igniteCards');
            });
        },
        async content(event, trigger, player) {
            const cards = player.getCards('he', card => {
                return lib.filter.cardDiscardable(card, player, '_igniteCards') && card.hasGaintag('igniteCards');
            });
            if (cards.length) {
                await player.discard(cards);
                game.log(player, '因', '#r点燃', '弃置了', get.cnNumber(cards.length), '张牌');
            }
        },
        mod: {
            aiValue(player, card, num) {
                if (get.event()?.parent?.name == 'phaseDiscard' && card.cards && card.hasGaintag('igniteCards')) return num - 10;
            },
            aiUseful(player, card, num) {
                if (get.event()?.parent?.name == 'phaseDiscard' && card.cards && card.hasGaintag('igniteCards')) return num / 10;
            },
            cardUsable(card, player) {
                if (!card.cards) return;
                for (let i of card.cards) {
                    if (i.hasGaintag && i.hasGaintag('igniteCards')) return Infinity;
                }
            },
            targetInRange(card, player) {
                if (!card.cards) return;
                for (let i of card.cards) {
                    if (i.hasGaintag && i.hasGaintag('igniteCards')) return true;
                }//QQQ
            },
        },
    },
};
export default GlobalSkills;

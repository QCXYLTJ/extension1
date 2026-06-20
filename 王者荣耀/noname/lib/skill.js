import { lib, game, ui, get, ai, _status } from "../../../../noname.js"
/** @type { importCharacterConfig["skill"] } */
const Skills = {
    /** 蓄势技
    */
    xushiSkill: {
        enable: 'phaseUse',
        locked: true,
        ruleSkill: true,
        charlotte: true,
        filter(event, player) {
            return event.xushiSkill?.length;
        },
        onChooseToUse(event) {
            if (game.online || event.xushiSkill) return;
            const player = get.player();
            const getXushi = () => {
                if (
                    player.getRoundHistory('useSkill', evt => {
                        var info = get.info(evt.skill);
                        return info?.xushiSkill;
                    }).length
                )
                    return [];
                if (
                    player.countCards('hes', function (card) {
                        return lib.filter.cardDiscardable(card, player, 'xushiSkill_enable');
                    }) < 3
                )
                    return [];
                return player.awakenedSkills
                    .filter(function (skill) {
                        const info = get.info(skill);
                        return info?.xushiSkill;
                    });
            };
            event.set('xushiSkill', getXushi());
        },
        chooseButton: {
            dialog(event, player) {
                const skills = get.event("xushiSkill");
                const list = skills.map(skill => [skill, "【" + get.translation(skill) + "】：" + lib.translate[skill + "_info"]]);
                const mbdialog = new ui.create.mobileDialog(event, "xushiSkill");
                mbdialog.dialog.classList.add("skill-tdnodes");
                mbdialog.dialog.add([list, "tdnodes"]);
                mbdialog.addSkills(skills);
                mbdialog.addTip("你可发动<span style='color: #a4dfd5'>蓄势</span>，弃置三张牌，将一个蓄势技回复可用次数至1");
                event.dialog.direct = true;
                return event.dialog;
            },
            check(button) {
                const player = get.player();
                if (get.character(player).skills?.includes(button.link)) {
                    return 2 + Math.random();
                }
                return 1 + Math.random();
            },
            backup(links) {
                return {
                    skills: links,
                    filterCard: true,
                    selectCard: 3,
                    position: 'hes',
                    ai1(card) {
                        const player = get.player();
                        if (player.needsToDiscard()) return 7 - get.value(card);
                        return 5 - get.value(card);
                    },
                    async content(event, trigger, player) {
                        const skills = lib.skill.xushiSkill_backup.skills;
                        for (const skill of skills) {
                            player.restoreSkill(skill);
                            game.log(player, '重置了', '#y蓄势技', `#g【${get.translation(skill)}】`);
                        }
                    },
                    ai: {
                        result: {
                            player(player) {
                                return 1;
                            },
                        },
                    },
                }
            },
            prompt(links) {
                return "出牌阶段，若你的蓄势技已发动且本轮未发动过，你可以弃置三张牌，回复可用次数至1。";
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
        group: 'xushiSkill_trigger',
        subSkill: {
            backup: {},
            trigger: {
                trigger: {
                    player: 'pileWashed',
                },
                forced: true,
                ruleSkill: true,
                charlotte: true,
                filter(event, player) {
                    return player.awakenedSkills
                        .filter(function (skill) {
                            const info = get.info(skill);
                            return info && info.xushiSkill;
                        }).length;
                },
                async content(event, trigger, player) {
                    const skills = player.awakenedSkills.filter(function (skill) {
                        const info = get.info(skill);
                        return info?.xushiSkill;
                    });
                    for (const skill of skills) {
                        player.restoreSkill(skill);
                        game.log(player, '重置了', '#y蓄势技', `#g【${get.translation(skill)}】`);
                    }
                },
            },
        },
    },
    /** 护甲牌
    */
    hujiaCards: {
        trigger: {
            player: ["loseAfter", "changeHujiaEnd"],
            global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
        },
        silent: true,
        charlotte: true,
        filter(event, player) {
            if (event.name == "changeHujia") return event.num < 0 && event.type != "cards";
            if (!event.getl?.(player)?.hs?.length) return false;
            if (event.parent.name == "hujiaCards") return false;
            if (event.name === "lose") {
                return Object.values(event.gaintag_map).flat().includes("hujiaCards");
            }
            return player.hasHistory("lose", evt => {
                if (event !== evt.parent) return false;
                return Object.values(evt.gaintag_map).flat().includes("hujiaCards");
            });
        },
        getIndex(event, player, triggername) {
            if (event.name == "changeHujia") return Math.abs(event.num);
            const evt = event.getl(player);
            if (evt && evt.player === player && evt?.hs?.length) return evt.hs.length;
            return false;
        },
        async content(event, trigger, player) {
            if (trigger.name != "changeHujia") {
                await player.changeHujia(-1).set("type", "cards");
            } else {
                const cards = player.getCards("h", card => card.hasGaintag("hujiaCards"));
                if (cards.length) await player.discard(cards.randomGets(1));
            }
        },
    },
};
export default Skills;

import { lib, game, ui, get, ai, _status } from '../../../../noname.js';
/** @type { importCharacterConfig["skill"] } */
const SwitchSkills = {
    /** 快捷指令
     */
    hokscs1: {
        enable: 'phaseUse',
        filterCard: () => false,
        selectCard: -1,
        async content(event, trigger, player) {
            var callbackSkill,
                skills = [];
            var { promise, resolve } = Promise.withResolvers();
            game.prompt('请输入技能名或者完整技能id', (callback) => {
                callbackSkill = callback;
                resolve();
                game.resume();
            });
            game.pause();
            await promise;
            if (!callbackSkill) return;
            if (lib.skill[callbackSkill]) {
                skills.push(callbackSkill);
            } else {
                for (let skillName in lib.skill) {
                    if (['global', 'globalmap', 'storage'].includes(skillName) || typeof lib.skill[skillName] != 'object') continue;
                    if ((lib.translate[skillName] && lib.translate[skillName + '_info'] && lib.translate[skillName].includes(callbackSkill)) || skillName === callbackSkill) {
                        skills.push(skillName);
                    }
                }
            }
            if (!skills.length) return;
            if (skills.length == 1) {
                callbackSkill = skills[0];
            } else {
                const list = skills.map((skill) => [skill, `${lib.translate[skill]}：${lib.translate[skill + '_info']}`]);
                const result = await player.chooseButton(['获得技能', [list, 'textbutton']]).set('ai', function (button) {
                    return get.skillRank(button.link, 'out');
                }).forResult();
                if (!result.bool) return;
                callbackSkill = result.links[0];
            }
            const {
                result: { bool, targets },
            } = await player
                .chooseTarget()
                .set('prompt', `令任意名角色获得${get.skillTipsInfo(get.translation(callbackSkill), get.plainText(get.translation(callbackSkill + '_info')))}`)
                .set('selectTarget', [1, game.countPlayer()])
                .set('ai', (target) => {
                    return 1 + Math.random();
                });
            if (bool) {
                for (const target of targets) {
                    await target.addSkills(callbackSkill);
                }
            }
        },
    },
    hokscs2: {
        enable: 'phaseUse',
        filterCard: () => false,
        selectCard: -1,
        filterTarget(card, player, target) {
            const skills = target.getSkills(null, false, false).filter((skill) => {
                const info = get.info(skill);
                return info && !info.charlotte && lib.translate[skill + '_info'];
            });
            return skills.length;
        },
        prompt: '你可以令一名角色失去武将牌上的技能',
        async content(event, trigger, player) {
            const target = event.targets[0];
            var skills = target.getSkills(null, false, false).filter((skill) => {
                const info = get.info(skill);
                return info && !info.charlotte && lib.translate[skill + '_info'];
            });
            skills = skills.map((skill) => [skill, '【' + get.translation(skill) + '】：' + lib.translate[skill + '_info']]);
            const result = await player
                .chooseButton([`失去技能`, [skills, 'textbutton']])
                .set('selectButton', [1, skills.length])
                .set('ai', function (button) {
                    const skill = button.link;
                    return get.skillRank(skill, 'in');
                })
                .set('closeDialog', true).forResult();
            if (result.bool) {
                await target.removeSkills(result.links);
            }
        },
    },
    hokscs3: {
        enable: 'phaseUse',
        filterCard: () => false,
        selectCard: -1,
        filterTarget(card, player, target) {
            const skills = target.getSkills(null, false, false).filter((skill) => {
                const info = get.info(skill);
                return info && !info.charlotte && lib.translate[skill + '_info'];
            });
            return skills.length;
        },
        prompt: '你可以令一名角色重置武将牌上的技能',
        async content(event, trigger, player) {
            const target = event.targets[0];
            var next = game.createEvent('emptyEvent', false);
            next.player = target;
            next.setContent(lib.skill.clanzhongliu.content);
        },
    },
    hokscs4: {
        enable: 'phaseUse',
        filterCard: () => false,
        selectCard: -1,
        async content(event, trigger, player) {
            while (true) {
                const {
                    result: { bool, targets },
                } = await player.chooseTarget('请选择一名角色替换其武将牌');
                if (bool) {
                    const dialog = ui.create.characterDialog('heightset');
                    const {
                        result: { bool, links },
                    } = await player.chooseButton(dialog);
                    if (bool) {
                        player.uninit(targets[0]);
                        player.init(targets[0], [links[0]]);
                    } //QQQ
                } else {
                    break;
                }
            }
        },
    },
    hokscs5: {
        enable: 'phaseUse',
        filterCard: () => false,
        selectCard: -1,
        async content(event, trigger, player) {
            while (true) {
                const {
                    result: { bool, targets },
                } = await player.chooseTarget('请选择两名角色交换座次', [2, 2]);
                if (bool) {
                    game.swapSeat(targets[0], targets[1], false);
                } else {
                    break;
                }
            }
        },
    },
    hokscs6: {
        enable: 'phaseUse',
        filterCard: () => false,
        selectCard: -1,
        async content(event, trigger, player) {
            const {
                result: { bool, targets },
            } = await player.chooseTarget('请选择要交换座位的角色');
            if (bool) {
                if (get.event().isMine()) {
                    if (!ui.auto.classList.contains('hidden')) {
                        setTimeout(function () {
                            ui.click.auto();
                            setTimeout(function () {
                                ui.click.auto();
                                game.swapPlayer(targets[0]);
                            }, 500);
                        });
                    }
                } else {
                    game.swapPlayer(targets[0]);
                }
            }
        },
    },
    hokscs7: {
        enable: 'phaseUse',
        filterCard: () => false,
        selectCard: -1,
        async content(event, trigger, player) {
            const list = get.inpileVCardList();
            const {
                result: { bool, links },
            } = await player.chooseButton(['创造卡牌', [list, 'vcard']]).set('ai', (button) => {
                const player = get.player();
                return player.getUseValue(button.link);
            });
            if (bool) {
                const card = game.createCard({
                    name: links[0][2],
                    nature: links[0][3],
                    suit: lib.suit.randomGet(),
                    number: Array.from({ length: 13 })
                        .map((_, info) => info + 1)
                        .randomGet(),
                });
                const {
                    result: { bool, targets },
                } = await player
                    .chooseTarget()
                    .set('prompt', `你可以令一名角色获得${get.translation(card)}`)
                    .set('ai', (target) => {
                        const player = get.player();
                        return get.attitude(player, target);
                    });
                if (bool) {
                    await targets[0].gain(card, 'gain2');
                    const {
                        result: { bool },
                    } = await player.chooseBool(`你可以令${get.translation(targets[0])}使用${get.translation(card)}`);
                    if (bool) {
                        if (targets[0].hasUseTarget(card)) targets[0].chooseUseTarget(card, true);
                    }
                }
            }
        },
    },
    hokscs8: {
        enable: 'phaseUse',
        filterCard: () => false,
        selectCard: -1,
        async content(event, trigger, player) {
            const list = get.inpileVCardList();
            const {
                result: { bool, links },
            } = await player.chooseButton(['检索卡牌', [list, 'vcard']]).set('ai', (button) => {
                const player = get.player();
                return player.getUseValue(button.link);
            });
            if (bool) {
                const card = get.cardPile(function (cardx) {
                    return cardx.name == links[0][2] && get.nature(cardx) == links[0][3];
                });
                if (!card) {
                    game.popupMessageTips('牌堆和弃牌堆中没有此牌');
                    return;
                }
                const {
                    result: { bool, targets },
                } = await player
                    .chooseTarget()
                    .set('prompt', `你可以令一名角色获得${get.translation(card)}`)
                    .set('ai', (target) => {
                        const player = get.player();
                        return get.attitude(player, target);
                    });
                if (bool) {
                    await targets[0].gain(card, 'gain2');
                    const {
                        result: { bool },
                    } = await player.chooseBool(`你可以令${get.translation(targets[0])}使用${get.translation(card)}`);
                    if (bool) {
                        if (targets[0].hasUseTarget(card)) targets[0].chooseUseTarget(card, true);
                    }
                }
            }
        },
    },
    hokscs9: {
        enable: 'phaseUse',
        filterCard: () => false,
        selectCard: -1,
        filterTarget: true,
        prompt: '请选择执行判定的角色',
        async content(event, trigger, player) {
            event.targets[0].judge();
        },
    },
    hokscs10: {
        enable: 'phaseUse',
        filterCard: () => false,
        selectCard: -1,
        filterTarget: true,
        prompt: '请选择执行拼点的角色',
        async content(event, trigger, player) {
            const {
                result: { bool, targets },
            } = await player
                .chooseTarget('请选择执行拼点的两名角色', 2)
                .set('complexTarget', true)
                .set('filterTarget', (card, player, target) => {
                    if (ui.selected.targets.length) return ui.selected.targets[0].canCompare(target);
                    return game.hasPlayer((current) => target.canCompare(current));
                });
            if (bool) {
                targets[0].chooseToCompare(targets[1]);
            }
        },
    },
};
export default SwitchSkills;

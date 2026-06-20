'use strict';
import { game, get, lib, ui, _status, ai } from '../../../../noname.js';
export async function remake() {
    Object.assign(lib.skill, {
        //蓄力技
        charge: {
            marktext: '蓄力',
            intro: {
                content(storage, player) {
                    const max = player.getMaxCharge();
                    return `当前蓄力点数：${storage}/${max}`;
                },
            },
        },
    })
    Object.assign(lib.skill, {
        //雌雄双股剑
        /*
        cixiong_skill: {
            audio: true,
            equipSkill: true,
            trigger: {
                player: "useCardToPlayered",
            },
            logTarget: "target",
            check(event, player) {
                const target = event.target;
                if (get.attitude(player, target) > 0) return true;
                return target.countCards('h') == 0 || !target.hasSkillTag('noh');
            },
            filter(event, player) {
                if (event.card.name != 'sha') return false;
                return player.differentSexFrom(event.target);
            },
            async content(event, trigger, player) {
                if (!trigger.target.countCards('h')) event.result = { index: 1 };
                else {
                    event.result = await trigger.target.chooseControl(`弃1张手牌`, `让${get.translation(trigger.player)}摸1张牌`)
                        .set('prompt', `<span style="color: #99c794">${get.translation(trigger.player)}</span>的<span style="color: #a4dfd5">${get.translation(event.name)}</span>被触发，确定弃置1张手牌，或取消对手摸1张牌`)
                        .set('ai', () => {
                            const player = get.player(),
                                trigger = get.event().getTrigger();
                            if (player.hasCard(function (card) {
                                return -get.attitude(player, trigger.player) - get.value(card) - Math.max(0, 4 - player.hp) * 2;
                            })) return 0;
                            return 1;
                        })
                        .forResult()
                }
                if (event.result.index == 1) player.draw();
                else trigger.target.chooseToDiscard('h', true);
            },
        },
        */
    })
    //牌库
    if (lib.config.extension_王者荣耀_HOKDISPLAYSSPAIKU) {
        game.getStorageIntro = get.storageintro;
        Object.assign(get, {
            storageintro(type, content, player, dialog, skill) {
                switch (type) {
                    case "mark": {
                        if (content > 0) {
                            return "共有" + content + "个标记";
                        }
                        return false;
                    }
                    case "turn": {
                        if (content > 0) {
                            return "剩余" + content + "个回合";
                        }
                        return false;
                    }
                    case "time": {
                        if (content > 0) {
                            return "剩余" + content + "次";
                        }
                        return false;
                    }
                    case "limited": {
                        if (content) {
                            return "已发动";
                        }
                        return "未发动";
                    }
                    case "info": {
                        return lib.translate[skill + "_info"];
                    }
                    case "cardCount": {
                        if (Array.isArray(content)) {
                            return "共有" + get.cnNumber(content.length) + "张牌";
                        }
                        return false;
                    }
                    case "expansion": {
                        content = player.getCards("x", function (card) {
                            return card.hasGaintag(skill);
                        });
                        const cards = content.reverse();
                        if (dialog && content.length) {
                            const name = get.plainText(lib.skill[skill].marktext || lib.translate[skill]);
                            const expansionDialog = new ui.create.expansionDialog(name, cards);
                            expansionDialog.quanji();
                        } else {
                            return "没有卡牌";
                        }
                        return false;
                    }
                    case "card":
                    case "cards": {
                        if (get.itemtype(content) == "card") {
                            content = [content];
                        }
                        if (dialog && get.itemtype(content) == "cards") {
                            dialog.addAuto(content);
                        } else {
                            if (content && content.length) {
                                if (Array.isArray(content)) {
                                    if (content.every(info => typeof info == 'string')) {
                                        content = content.map(info => ['', '', info]);
                                    }
                                    const name = get.plainText(lib.skill[skill].marktext || lib.translate[skill]);
                                    const expansionDialog = new ui.create.expansionDialog(name, content);
                                    expansionDialog.quanji();
                                }
                                return false;
                            }
                        }
                        if (Array.isArray(content) && !content.length) {
                            return "没有卡牌";
                        }
                        return false;
                    }
                    case "player":
                    case "players": {
                        if (get.itemtype(content) == "player") {
                            content = [content];
                        }
                        if (dialog && get.itemtype(content) == "players") {
                            dialog.addAuto(content);
                            return false;
                        } else {
                            if (content && content.length) {
                                return get.translation(content);
                            }
                            return false;
                        }
                    }
                    case "character":
                    case "characters": {
                        if (typeof content == "string") {
                            content = [content];
                        }
                        if (dialog && Array.isArray(content)) {
                            dialog.addAuto([content, "character"]);
                            return false;
                        } else {
                            if (content && content.length) {
                                return get.translation(content);
                            }
                            return false;
                        }
                    }
                    default: {
                        if (!skill) {
                            if (typeof type == "string") {
                                type = type.replace(/#/g, content);
                                type = type.replace(/&/g, get.cnNumber(content));
                                type = type.replace(/\$/g, get.translation(content));
                                return type;
                            } else if (typeof type == "function") {
                                return type(content, player, skill);
                            }
                            return false;
                        }
                        const name = get.plainText(lib.skill[skill].marktext || lib.translate[skill]);
                        const expansionDialog = new ui.create.expansionDialog(name);
                        expansionDialog.guanchao();
                        if (typeof type == "string") {
                            type = type.replace(/#/g, content);
                            type = type.replace(/&/g, get.cnNumber(content));
                            type = type.replace(/\$/g, get.translation(content));
                            expansionDialog.tip.innerHTML = type;
                            return false;
                        } else if (typeof type == "function") {
                            expansionDialog.tip.innerHTML = type(content, player, skill);
                            return false;
                        }
                        return false;
                    }
                }
            }
        });
    }
}

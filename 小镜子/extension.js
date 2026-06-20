import { lib, game, ui, get, ai, _status } from '../../noname.js';
export const type = 'extension';
export default function () {
    return {
        name: '小镜子',
        connect: true,
        arenaReady() { },
        content() { },
        prepare() { },
        precontent() {
            get.vcardInfo = function (card) { }; //卡牌storage里面存了DOM元素会循环引用导致不能JSON.stringify
            get.attitude = function (from, to) {
                if (!from) {
                    from = _status.event.player;
                }
                if (!to) {
                    to = _status.event.player;
                }
                let att = 0;
                if (get.rawAttitude) {
                    att = get.rawAttitude(from, to);
                }
                if (from.skills.includes('mad') || from.tempSkills.mad) {
                    att = -att;
                }
                if ((to.skills.includes('mad') || to.tempSkills.mad) && att > 0) {
                    if (to.identity == 'zhu') {
                        att = 1;
                    } else {
                        att = 0;
                    }
                }
                if (from.ai.modAttitudeFrom) {
                    att = from.ai.modAttitudeFrom(from, to, att);
                }
                if (to.ai.modAttitudeTo) {
                    att = to.ai.modAttitudeTo(from, to, att);
                }
                return att;
            }; //适配门客秘境添加随从
            game.addGroup('仙', `<img src="extension/小镜子/image/xian.png"width="30"height="30">`, '仙', {
                color: '#28e3ce',
                image: 'ext:小镜子/image/xian.png',
            });
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '小镜子',
                    connect: true,
                    character: {
                        xjz_yan: {
                            sex: 'female',
                            hp: 6,
                            maxHp: 6,
                            skills: ['xjz_huace', 'xjz_lishi', 'xjz_huaou', 'xjz_tianzao', 'xjz_shenji'],
                        },
                        xjz_jing: {
                            sex: 'female',
                            hp: 7,
                            maxHp: 7,
                            skills: ['xjz_qiangrao'],
                        },
                        xjz_mojing: {
                            sex: 'female',
                            hp: 1,
                            maxHp: 1,
                            skills: ['xjz_tiangai'],
                        },
                    },
                    skill: {
                        //——————————————————————————————————————————————————————————————————————————————————————————————————妍 6/6
                        // 画册
                        // 一名角色的回合开始时/出牌阶段开始时,你可以选择场上的一张牌,更改其牌名
                        // 若如此做,该名角色的回合结束阶段,你将此牌置于你的武将牌上,称为<画册>
                        // 你可以将<画册>如手牌般使用打出
                        // 你使用与<画册>同名牌时摸一张牌
                        // 当你<画册>达到12张时,你可以销毁一种牌名的牌,将所有<画册>销毁
                        xjz_huace: {
                            trigger: {
                                global: ['phaseBegin', 'phaseUseBegin'],
                            },
                            forced: true,
                            _priority: 106,
                            init(player) {
                                player.storage.xjz_huace = [];
                            },
                            //一名角色的回合开始时/出牌阶段开始时,你可以选择场上的一张牌,更改其牌名
                            async content(event, trigger, player) {
                                const list = [];
                                const dis = Array.from(ui.discardPile.childNodes);
                                const car = Array.from(ui.cardPile.childNodes);
                                if (dis[0]) {
                                    list.add('弃牌堆');
                                    list.add(dis);
                                }
                                for (const i of game.players) {
                                    if (i.countCards('hej')) {
                                        list.add(`${get.translation(i)}的牌`);
                                        list.add(i.getCards('hej'));
                                    }
                                }
                                if (car[0]) {
                                    list.add('牌堆');
                                    list.add(car);
                                }
                                const { links } = await player
                                    .chooseButton(list, true)
                                    .set('ai', (button) => get.value(button.link))
                                    .forResult();
                                if (links?.length) {
                                    const card = links[0];
                                    const { links: links1 } = await player
                                        .chooseButton(['更改其牌名', [lib.inpile, 'vcard']], true)
                                        .set('ai', (button) => get.value({ name: button.link[2] }))
                                        .forResult();
                                    if (links1?.length) {
                                        game.log(player, '将', card, '改为', links1[0][2]);
                                        card.init([card.suit, card.number, links1[0][2], card.nature]);
                                        player.storage.xjz_huace.push(card);
                                    }
                                }
                            },
                            group: ['xjz_huace_1', 'xjz_huace_2'],
                            subSkill: {
                                //你使用与<画册>同名牌时摸一张牌
                                1: {
                                    trigger: {
                                        player: ['useCardBegin'],
                                    },
                                    forced: true,
                                    _priority: 105,
                                    filter(event, player) {
                                        return player.hasCard((c) => c.name == event.card.name && c.gaintag?.includes('xjz_huace'), 's');
                                    },
                                    async content(event, trigger, player) {
                                        player.draw();
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: ['phaseEnd'],
                                    },
                                    forced: true,
                                    _priority: 103,
                                    filter(event, player) {
                                        return player.storage.xjz_huace?.length;
                                    },
                                    async content(event, trigger, player) {
                                        //该名角色的回合结束阶段,你将此牌置于你的武将牌上,称为<画册>//你可以将<画册>如手牌般使用打出
                                        player.directgains(player.storage.xjz_huace, null, 'xjz_huace');
                                        player.storage.xjz_huace = [];
                                        const cards = player.getCards('s', (c) => c.gaintag?.includes('xjz_huace'));
                                        //当你<画册>达到12张时,你可以销毁一种牌名的牌,将所有<画册>销毁
                                        if (cards.length > 11) {
                                            const { links } = await player
                                                .chooseButton(['销毁一种牌名的牌,将所有<画册>销毁', [lib.inpile, 'vcard']])
                                                .set('ai', (button) => get.value({ name: button.link[2] }))
                                                .forResult();
                                            if (links?.length) {
                                                const name = links[0][2];
                                                const cardList = Array.from(ui.cardPile.childNodes).concat(Array.from(ui.discardPile.childNodes));
                                                for (const npc of game.players) {
                                                    cardList.addArray(npc.getCards('hej'));
                                                }
                                                for (const i of cardList) {
                                                    if (i.name == name) {
                                                        await i.selfDestroy();
                                                    }
                                                }
                                                for (const i of cards) {
                                                    await i.selfDestroy();
                                                }
                                                await game.delay(2);
                                            }
                                            //当你销毁一种牌名的牌时,你从任意区域获得x张牌
                                            const num = lib.inpile.length;
                                            const list = [`从任意区域获得${num}张牌`];
                                            const dis = Array.from(ui.discardPile.childNodes);
                                            const car = Array.from(ui.cardPile.childNodes);
                                            if (dis[0]) {
                                                list.add('弃牌堆');
                                                list.add(dis);
                                            }
                                            for (const i of game.players) {
                                                if (i.countCards('hej')) {
                                                    list.add(`${get.translation(i)}的牌`);
                                                    list.add(i.getCards('hej'));
                                                }
                                            }
                                            if (car[0]) {
                                                list.add('牌堆');
                                                list.add(car);
                                            }
                                            const { links: links1 } = await player
                                                .chooseButton(list, [1, num], true)
                                                .set('ai', (button) => get.value(button.link))
                                                .forResult();
                                            if (links1?.length) {
                                                player.gain(links1, 'gain2');
                                            }
                                        }
                                        //当<画册>移动你武将牌上时,你可以将手牌区/装备区/判定区/牌堆/弃牌堆各一张牌移动到合理的位置
                                        const list = ['选择手牌区/装备区/判定区/牌堆/弃牌堆各一张牌'];
                                        const dis = Array.from(ui.discardPile.childNodes);
                                        const car = Array.from(ui.cardPile.childNodes);
                                        const hs = [],
                                            es = [],
                                            js = [];
                                        const all = [dis, car, hs, es, js];
                                        if (dis[0]) {
                                            list.add('弃牌堆');
                                            list.add(dis);
                                        }
                                        for (const i of game.players) {
                                            hs.addArray(i.getCards('h'));
                                            es.addArray(i.getCards('e'));
                                            js.addArray(i.getCards('j'));
                                        }
                                        if (hs.length) {
                                            list.add('手牌区');
                                            list.add(hs);
                                        }
                                        if (es.length) {
                                            list.add('装备区');
                                            list.add(es);
                                        }
                                        if (js.length) {
                                            list.add('判定区');
                                            list.add(js);
                                        }
                                        if (car[0]) {
                                            list.add('牌堆');
                                            list.add(car);
                                        }
                                        const { links } = await player
                                            .chooseButton(list, [1, 5])
                                            .set('filterButton', function (button) {
                                                for (const arr of all) {
                                                    if (arr.includes(button.link) && ui.selected.buttons.some((q) => arr.includes(q.link))) {
                                                        return false;
                                                    }
                                                }
                                                return true;
                                            })
                                            .set('ai', (button) => get.value(button.link))
                                            .forResult();
                                        if (links?.length) {
                                            for (const card of links) {
                                                const controllist = ['牌堆', '弃牌堆'];
                                                const type = get.type(card);
                                                if (type == 'delay') {
                                                    controllist.push('判定区');
                                                } else if (type == 'equip') {
                                                    controllist.push('装备区');
                                                } else {
                                                    controllist.push('手牌区');
                                                }
                                                const { control } = await player
                                                    .chooseControl(controllist)
                                                    .set('prompt', `将${get.translation(card)}移动到合理的位置`)
                                                    .set('ai', (e, p) => {
                                                        for (const i of ['装备区', '手牌区', '判定区']) {
                                                            if (controllist.includes(i)) {
                                                                return i;
                                                            }
                                                        }
                                                    })
                                                    .forResult();
                                                if (control == '牌堆') {
                                                    ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
                                                } else if (control == '弃牌堆') {
                                                    ui.discardPile.appendChild(card);
                                                } else {
                                                    const { targets } = await player
                                                        .chooseTarget(`将${get.translation(card)}置入哪位角色的${control}`)
                                                        .set('ai', (t) => {
                                                            if (control == '判定区') {
                                                                return -get.attitude(player, t);
                                                            }
                                                            return get.attitude(player, t);
                                                        })
                                                        .forResult();
                                                    if (targets && targets[0]) {
                                                        if (control == '装备区') {
                                                            targets[0].equip(card);
                                                        } else if (control == '判定区') {
                                                            targets[0].addJudge(card);
                                                        } else {
                                                            targets[0].gain(card, 'gain2');
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    },
                                },
                            },
                        }, //50
                        // 理世
                        // 锁定技.所有牌对你均可见
                        // 当<画册>移动你武将牌上时,你可以将手牌区/装备区/判定区/牌堆/弃牌堆各一张牌移动到合理的位置
                        // 当你销毁一种牌名的牌时,你从任意区域获得x张牌(x为当前剩余牌名数)
                        // 当牌堆第二次洗牌结束时,若你存活你获得胜利
                        xjz_lishi: {
                            trigger: { global: 'phaseEnd' },
                            forced: true,
                            filter(event, player) {
                                return game.shuffleNumber == 2;
                            },
                            async content(event, trigger, player) {
                                game.over(game.me.isFriendsOf(player));
                            },
                            ai: {
                                viewHandcard: true,
                            },
                        }, //60
                        // 画偶:出牌阶段限一次,你可以摸三张武将牌选择一张置于任意座次之间,令其摸五张牌并获得任意同名技能.(视为你队友)
                        xjz_huaou: {},
                        // 天造
                        // 一名角色的回合开始时,你创造y张临时牌置入你手牌区或装备区
                        // 当你的临时牌进入弃牌堆时,你令一名角色执行增益/减益中的一种(三选一)
                        // 每回合限y次,当一名角色使用牌指定目标时,你令此牌额外执行至多y种额外牌的效果或令此牌无效
                        // 当你受到伤害或失去体力时,你随机获得一种防御效果
                        // 当你造成伤害时,你随机获得一种进攻效果
                        xjz_tianzao: {},
                        // 神计
                        // 持恒技.每回合限y次,(y为你当前体力值)一名角色发动技能时,你选择一项1增加一点体力上限,2回复一点体力值
                        // 一轮游戏开始时,你可以预测场上第一个进入濒死状态的角色
                        // 若预测成功,你将体力值/手牌数/技能数向上调整至本轮开始时,并摸技能发动次数的牌,重新开始此轮游戏
                        xjz_shenji: {},
                        //——————————————————————————————————————————————————————————————————————————————————————————————————镜
                        // 强扰
                        // 每回合限存活人数次,其他角色选择选项或目标时,你可以更改之.其他角色发动技能时,你可以获得同名角色一个技能
                        xjz_qiangrao: {
                            trigger: {
                                global: ['chooseControlEnd'],
                            },
                            init(player) {
                                player.storage.xjz_qiangrao = 0;
                            },
                            filter(event, player) {
                                return event.player != player && player.storage.xjz_qiangrao < game.players.length;
                            },
                            check(event, player) {
                                return true;
                            },
                            prompt(event, player) {
                                return `更改${get.translation(event.player)}的${get.translation(event.parent.name)}选项`;
                            },
                            async content(event, trigger, player) {
                                player.storage.xjz_qiangrao++;
                                const result = await player.chooseControl().set('controls', trigger.controls).set('choice', trigger.choice).set('dialog', trigger.dialog).set('choiceList', trigger.choiceList).set('prompt', trigger.prompt).forResult();
                                trigger.result = result;
                            },
                            group: ['xjz_qiangrao_1', 'xjz_qiangrao_2', 'xjz_qiangrao_3', 'xjz_qiangrao_4', 'xjz_qiangrao_5', 'xjz_qiangrao_6'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: ['chooseButtonEnd'],
                                    },
                                    filter(event, player) {
                                        return event.player != player && player.storage.xjz_qiangrao < game.players.length;
                                    },
                                    check(event, player) {
                                        return true;
                                    },
                                    prompt(event, player) {
                                        return `更改${get.translation(event.player)}的${get.translation(event.parent.name)}选项`;
                                    },
                                    async content(event, trigger, player) {
                                        player.storage.xjz_qiangrao++;
                                        const result = await player.chooseButton().set('forced', trigger.forced).set('closeDialog', trigger.closeDialog).set('dialog', trigger.dialog).set('createDialog', trigger.createDialog).set('complexSelect', trigger.complexSelect).set('selectButton', trigger.selectButton).set('filterButton', trigger.filterButton).forResult();
                                        trigger.result = result;
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: ['chooseTargetEnd'],
                                    },
                                    filter(event, player) {
                                        if (event.parent?.name == 'chooseUseTarget') {
                                            return false;
                                        }
                                        return event.player != player && player.storage.xjz_qiangrao < game.players.length;
                                    },
                                    check(event, player) {
                                        return true;
                                    },
                                    prompt(event, player) {
                                        return `更改${get.translation(event.player)}的${get.translation(event.parent.name)}选项`;
                                    },
                                    async content(event, trigger, player) {
                                        player.storage.xjz_qiangrao++;
                                        const result = await player.chooseTarget().set('forced', trigger.forced).set('selectTarget', trigger.selectTarget).set('dialog', trigger.dialog).set('filterTarget', trigger.filterTarget).set('prompt', trigger.prompt).forResult();
                                        trigger.result = result;
                                    },
                                },
                                3: {
                                    trigger: {
                                        global: ['useCardBegin'],
                                    },
                                    check(event, player) {
                                        return true;
                                    },
                                    prompt(event, player) {
                                        return `更改${get.translation(event.player)}的${get.translation(event.card)}目标`;
                                    },
                                    filter(event, player) {
                                        return event.player != player && event.targets && player.storage.xjz_qiangrao < game.players.length;
                                    },
                                    async content(event, trigger, player) {
                                        player.storage.xjz_qiangrao++;
                                        const { targets } = await player.chooseTarget(true).forResult();
                                        if (targets.length) {
                                            trigger.targets = targets;
                                        }
                                    },
                                },
                                4: {
                                    trigger: {
                                        global: ['useSkillBegin'],
                                    },
                                    check(event, player) {
                                        return true;
                                    },
                                    prompt(event, player) {
                                        return `更改${get.translation(event.player)}的${get.translation(event.skill)}目标`;
                                    },
                                    filter(event, player) {
                                        return event.player != player && event.targets && player.storage.xjz_qiangrao < game.players.length;
                                    },
                                    async content(event, trigger, player) {
                                        player.storage.xjz_qiangrao++;
                                        const { targets } = await player.chooseTarget(true).forResult();
                                        if (targets.length) {
                                            trigger.targets = targets;
                                        }
                                    },
                                },
                                5: {
                                    trigger: {
                                        global: ['useSkill', 'logSkillBegin'],
                                    },
                                    popup: false,
                                    check(event, player) {
                                        return true;
                                    },
                                    prompt(event, player) {
                                        return `获得${get.translation(event.player)}同名武将的一个技能`;
                                    },
                                    filter(event, player) {
                                        return event.player != player && player.storage.xjz_qiangrao < game.players.length;
                                    },
                                    async content(event, trigger, player) {
                                        player.storage.xjz_qiangrao++;
                                        const name = get.translation(trigger.player).slice(-2);
                                        const list = Object.keys(lib.character).filter((W) => get.translation(W).includes(name));
                                        if (list.length) {
                                            const { links } = await player
                                                .chooseButton(['请选择一个同名武将', [list, 'character']])
                                                .set('ai', (button) => Math.random())
                                                .forResult();
                                            if (links && links[0]) {
                                                const skills = lib.character[links[0]].skills;
                                                if (skills?.length) {
                                                    const { control } = await player.chooseControl(skills).set('prompt', `获得一个技能`).forResult();
                                                    player.addSkill(control);
                                                }
                                            }
                                        }
                                    },
                                },
                                6: {
                                    trigger: {
                                        global: ['phaseEnd'],
                                    },
                                    forced: true,
                                    async content(event, trigger, player) {
                                        player.storage.xjz_qiangrao = 0;
                                    },
                                },
                            },
                        }, //60
                        // 怜心
                        // 限定技.一轮游戏开始时,你可以选择一名角色,令其获得怜心标记.其可以观看你的手牌.使用你的手牌和强扰.当你受到伤害/失去体力时由目标承担
                        // 竭力
                        // 当你的阶段被跳过/武将牌被移动/发动强扰超过x次时,你失去一点体力
                        //——————————————————————————————————————————————————————————————————————————————————————————————————魔镜心  1/1
                        // 天改
                        // 每回合限存活人数次,当一名角色获得增益/承受减益时,你可以修改为任意目标执行
                        xjz_tiangai: {
                            usable(skill, player) {
                                return game.players.length;
                            },
                            trigger: {
                                global: ['recoverBefore', 'damageBefore', 'loseHpBefore', 'gainMaxHpBefore', 'loseMaxHpBbefore', 'discardBefore', 'drawBefore', 'linkBefore', 'turnOverBefore', 'phaseBefore', 'changeSkillsBefore'],
                            },
                            filter(event, player) {
                                if (event.name == 'changeSkills') {
                                    return event.addSkill.length || event.removeSkill.length;
                                }
                                return true;
                            },
                            check(event, player) {
                                if (event.name == 'changeSkills') {
                                    return event.player.isEnemiesOf(player) == event.addSkill.length > 0;
                                }
                                return ['recover', 'gainMaxHp', 'draw', 'phase'].includes(event.name) == event.player.isEnemiesOf(player);
                            },
                            prompt(event, player) {
                                let str = '';
                                if (event.name == 'changeSkills') {
                                    if (event.addSkill.length) {
                                        str += `增加技能${get.translation(event.addSkill)}`;
                                    } else {
                                        str += `移除技能${get.translation(event.removeSkill)}`;
                                    }
                                }
                                return `更改<span style='color: #B3EE3A'>${get.translation(event.name)}</span>的作用目标<br>原始目标${get.translation(event.player)}<br>${str}`;
                            },
                            async content(event, trigger, player) {
                                const { targets } = await player
                                    .chooseTarget(true)
                                    .set('ai', (t) => {
                                        if (['recover', 'gainMaxHp', 'draw', 'phase'].includes(trigger.name)) {
                                            return get.attitude(player, t);
                                        }
                                        if (trigger.name == 'changeSkills' && trigger.addSkill.length) {
                                            return get.attitude(player, t);
                                        }
                                        return -get.attitude(player, t);
                                    })
                                    .forResult();
                                if (targets.length) {
                                    trigger.player = targets[0];
                                    if (trigger.name == 'discard') {
                                        const num = trigger.cards.length;
                                        trigger.cards = targets[0].getCards('he').randomGets(num);
                                    } else if (trigger.name == 'changeSkills') {
                                        targets[0].addSkill(trigger.addSkill);
                                        targets[0].removeSkill(trigger.removeSkill);
                                        trigger.addSkill = [];
                                        trigger.removeSkill = [];
                                    }
                                }
                            },
                        },
                        // 逐峰
                        // 每轮游戏开始/你的回合开始时,你选择并获得一张武将牌拥有神字的所有技能,并令你的<摸牌数/攻击距离/手牌上限/出牌阶段<技能/牌>使用次数/锦囊牌结算次数>永久加1
                    },
                    translate: {
                        //——————————————————————————————————————————————————————————————————————————————————————————————————
                        xjz_: '',
                        xjz_: '',
                        xjz__info: '',
                        xjz_: '',
                        xjz__info: '',
                        xjz_: '',
                        xjz__info: '',
                        //——————————————————————————————————————————————————————————————————————————————————————————————————妍
                        xjz_yan: '妍',
                        xjz_huace: '画册',
                        xjz_huace_info: '一名角色的回合开始时/出牌阶段开始时,你可以选择场上的一张牌,更改其牌名.若如此做,该名角色的回合结束阶段,你将此牌置于你的武将牌上,称为<画册><br>你可以将<画册>如手牌般使用打出,你使用与<画册>同名牌时摸一张牌.当你<画册>达到12张时,你可以销毁一种牌名的牌,将所有<画册>销毁',
                        xjz_lishi: '理世',
                        xjz_lishi_info: '锁定技,所有牌对你均可见<br>当<画册>移动你武将牌上时,你可以将手牌区/装备区/判定区/牌堆/弃牌堆各一张牌移动到合理的位置<br>当你销毁一种牌名的牌时,你从任意区域获得x张牌(x为当前剩余牌名数)<br>当牌堆第二次洗牌结束时,若你存活,你获得胜利',
                        xjz_: '',
                        xjz__info: '',
                        //——————————————————————————————————————————————————————————————————————————————————————————————————镜
                        xjz_jing: '镜',
                        xjz_qiangrao: '强扰',
                        xjz_qiangrao_info: '每回合限存活人数次,其他角色选择选项或目标时,你可以更改之.其他角色发动技能时,你可以获得同名角色一个技能',
                        xjz_: '',
                        xjz__info: '',
                        xjz_: '',
                        xjz__info: '',
                        //——————————————————————————————————————————————————————————————————————————————————————————————————魔镜心
                        xjz_mojing: '魔镜心',
                        xjz_tiangai: '天改',
                        xjz_tiangai_info: '每回合限存活人数次,当一名角色获得增益/承受减益时,你可以修改为任意目标执行',
                        draw: '摸牌',
                        discard: '弃牌',
                        damage: '伤害',
                        recover: '回复',
                        loseHp: '体流',
                        gainMaxHp: '加血限',
                        loseMaxHp: '减血限',
                        link: '横置',
                        turnOver: '翻面',
                        phase: '回合',
                        changeSkills: '技能变动',
                        xjz_: '',
                        xjz__info: '',
                    },
                };
                for (const i in QQQ.character) {
                    const info = QQQ.character[i];
                    if (!info.hp) {
                        info.hp = 4;
                    }
                    if (!info.maxHp) {
                        info.maxHp = 4;
                    }
                    info.group = '仙';
                    info.isZhugong = true;
                    info.trashBin = [`ext:小镜子/image/${i}.jpg`];
                    info.dieAudios = [`ext:小镜子/audio/${i}.mp3`];
                }
                for (const i in QQQ.skill) {
                    const info = QQQ.skill[i];
                    info.nobracket = true;
                    if (!info.audio) {
                        info.audio = 'ext:小镜子/audio:2';
                    }
                    if (info.subSkill) {
                        for (const x in info.subSkill) {
                            const infox = info.subSkill[x];
                            if (!infox.audio) {
                                infox.audio = 'ext:小镜子/audio:2';
                            } //如果是choosebutton,语音应该是xxx_backup
                        }
                    }
                } //QQQ
                lib.config.all.characters.add('小镜子');
                lib.config.characters.add('小镜子');
                lib.translate['小镜子_character_config'] = `小镜子`;
                return QQQ;
            });
        },
        package: {
            intro: '代码:潜在水里的火(1476811518)',
            author: '小镜子',
            version: '1.0',
        },
    };
}

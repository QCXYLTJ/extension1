game.import('card', function (lib, game, ui, get, ai, _status) {
    var haituCard = {
        name: 'haituCard', //卡包命名
        connect: true, //卡包是否可以联机
        translate: {
            hhzz_retoulianghuanzhu: '偷梁换柱',
            hhzz_retoulianghuanzhu_info: '出牌阶段,对一名角色使用,随机更换其一个技能.可重铸.',
            haituCard: '海国图志',
            haitu_post: '魔法邮票',
            haitu_post_info: '出牌阶段,你令目标随机执行一项:<br>1.依次执行【升天】所有奇数项;<br>2.依次执行【升天】所有偶数项;<br>3.视为使用一张普通锦囊牌;</br>4.非锁定技失效直至其回合结束;</br>5.摸X张牌并将手牌弃至X张(X为其体力上限且至多为5);</br>6.进入混乱状态直至其回合结束',
            haitu_mummycloth1: '纱布',
            haitu_mummycloth1_info: '此牌置入装备区后无法被弃置、给出或替换且你的武器牌视为【毒】;当你区域内拥有不少于三种类型的纱布时,你将武将牌替换为木乃伊并永久进入混乱状态',
            haitu_mummycloth2: '纱布',
            haitu_mummycloth2_info: '此牌置入装备区后无法被弃置、给出或替换且你的防具牌视为【毒】;当你区域内拥有不少于三种类型的纱布时,你将武将牌替换为木乃伊并永久进入混乱状态',
            haitu_mummycloth3: '纱布',
            haitu_mummycloth3_info: '此牌置入装备区后无法被弃置、给出或替换且你的防御马视为【毒】;当你区域内拥有不少于三种类型的纱布时,你将武将牌替换为木乃伊并永久进入混乱状态',
            haitu_mummycloth4: '纱布',
            haitu_mummycloth4_info: '此牌置入装备区后无法被弃置、给出或替换且你的进攻马视为【毒】;当你区域内拥有不少于三种类型的纱布时,你将武将牌替换为木乃伊并永久进入混乱状态',
            haitu_mummycloth5: '纱布',
            haitu_mummycloth5_info: '此牌置入装备区后无法被弃置、给出或替换且你的宝物牌视为【毒】;当你区域内拥有不少于三种类型的纱布时,你将武将牌替换为木乃伊并永久进入混乱状态',
            //效果翻译
        },
        card: {
            hhzz_retoulianghuanzhu: {
                enable: true,
                cardimage: 'toulianghuanzhu',
                recastable: true,
                type: 'trick',
                filterTarget(card, player, target) {
                    var skills = target.getSkills(null, false, false).filter((skill) => {
                        var info = get.info(skill);
                        if (!info || get.is.empty(info) || info.charlotte) return false;
                        return true;
                    });
                    return skills.length > 0;
                },
                content() {
                    var skills0 = target.getSkills(null, false, false).filter((skill) => {
                        var info = get.info(skill);
                        if (!info || get.is.empty(info) || info.charlotte) return false;
                        return true;
                    });
                    target.removeSkill(skills0.randomGet());
                    var skills = get.gainableSkills();
                    target.addSkill(skills.randomGet(1));
                },
                ai: {
                    order: 10,
                    result: {
                        target() {
                            return 0.5 - Math.random();
                        },
                    },
                },
            },
            haitu_mummycloth1: {
                fullimage: true,
                image: 'ext:海国图志/image/card/haitu_mummycloth.png',
                type: 'equip',
                subtype: 'equip1',
                fullskin: true,
                ai: {
                    order: 9,
                    equipValue(card, player) {
                        if (get.position(card) == 'e') return -4;
                        return -2;
                    },
                    value(card, player) {
                        if (player.getEquips(1).includes(card)) return -3;
                        return -2;
                    },
                    basic: {
                        equipValue: 5,
                        order(card, player) {
                            const equipValue = get.equipValue(card, player) / 20;
                            return player && player.hasSkillTag('reverseEquip') ? 8.5 - equipValue : 8 + equipValue;
                        },
                        useful: 2,
                        value(card, player, index, method) {
                            if (!player.getCards('e').includes(card) && !player.canEquip(card, true)) return 0.01;
                            const info = get.info(card),
                                current = player.getEquip(info.subtype),
                                value = current && card != current && get.value(current, player);
                            let equipValue = info.ai.equipValue || info.ai.basic.equipValue;
                            if (typeof equipValue == 'function') {
                                if (method == 'raw') return equipValue(card, player);
                                if (method == 'raw2') return equipValue(card, player) - value;
                                return Math.max(0.1, equipValue(card, player) - value);
                            }
                            if (typeof equipValue != 'number') equipValue = 0;
                            if (method == 'raw') return equipValue;
                            if (method == 'raw2') return equipValue - value;
                            return Math.max(0.1, equipValue - value);
                        },
                    },
                    result: {
                        keepAI: true,
                        target(player, target) {
                            var val = 2.5;
                            var val2 = 0;
                            var card = target.getEquip(1);
                            if (card) {
                                val2 = get.value(card, target);
                                if (val2 < 0) return 0;
                            }
                            return -val - val2;
                        },
                    },
                },
                enable: true,
                onEquip() {
                    var num = 0;
                    var players = game.filterPlayer();
                    for (var i = 0; i < players.length; i++) {
                        if (players[i] == player && players[i].getEquips('haitu_mummycloth1').length > 0) {
                            num += 1;
                        }
                        if (players[i] == player && players[i].getEquips('haitu_mummycloth2').length > 0) {
                            num += 1;
                        }
                        if (players[i] == player && players[i].getEquips('haitu_mummycloth3').length > 0) {
                            num += 1;
                        }
                        if (players[i] == player && players[i].getEquips('haitu_mummycloth4').length > 0) {
                            num += 1;
                        }
                        if (players[i] == player && players[i].getEquips('haitu_mummycloth5').length > 0) {
                            num += 1;
                        }
                    }
                    player.storage.sex0 = player.sex;
                    if (num >= 3 && player.storage.haitu_mummychange != true && !player.hasSkill('haitu_naji', null, null, false)) {
                        if (player.hasSex('female')) {
                            player.init('haitu_fmummy');
                        } else {
                            player.init('haitu_mummy');
                        }
                        player.storage.haitu_mummychange = true;
                        player.update();
                        player.addSkill('mad');
                    }
                },
                selectTarget: -1,
                filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
                modTarget: true,
                allowMultiple: false,
                skills: ['mummy1_skill'],
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            haitu_mummycloth2: {
                fullimage: true,
                image: 'ext:海国图志/image/card/haitu_mummycloth.png',
                type: 'equip',
                subtype: 'equip2',
                fullskin: true,
                ai: {
                    order: 9,
                    equipValue(card, player) {
                        if (get.position(card) == 'e') return -4;
                        return -2;
                    },
                    value(card, player) {
                        if (player.getEquips(2).includes(card)) return -3;
                        return -2;
                    },
                    basic: {
                        equipValue: 5,
                        order(card, player) {
                            const equipValue = get.equipValue(card, player) / 20;
                            return player && player.hasSkillTag('reverseEquip') ? 8.5 - equipValue : 8 + equipValue;
                        },
                        useful: 2,
                        value(card, player, index, method) {
                            if (!player.getCards('e').includes(card) && !player.canEquip(card, true)) return 0.01;
                            const info = get.info(card),
                                current = player.getEquip(info.subtype),
                                value = current && card != current && get.value(current, player);
                            let equipValue = info.ai.equipValue || info.ai.basic.equipValue;
                            if (typeof equipValue == 'function') {
                                if (method == 'raw') return equipValue(card, player);
                                if (method == 'raw2') return equipValue(card, player) - value;
                                return Math.max(0.1, equipValue(card, player) - value);
                            }
                            if (typeof equipValue != 'number') equipValue = 0;
                            if (method == 'raw') return equipValue;
                            if (method == 'raw2') return equipValue - value;
                            return Math.max(0.1, equipValue - value);
                        },
                    },
                    result: {
                        keepAI: true,
                        target(player, target) {
                            var val = 2.5;
                            var val2 = 0;
                            var card = target.getEquip(1);
                            if (card) {
                                val2 = get.value(card, target);
                                if (val2 < 0) return 0;
                            }
                            return -val - val2;
                        },
                    },
                },
                enable: true,
                onEquip() {
                    var num = 0;
                    var players = game.filterPlayer();
                    for (var i = 0; i < players.length; i++) {
                        if (players[i] == player && players[i].getEquips('haitu_mummycloth1').length > 0) {
                            num += 1;
                        }
                        if (players[i] == player && players[i].getEquips('haitu_mummycloth2').length > 0) {
                            num += 1;
                        }
                        if (players[i] == player && players[i].getEquips('haitu_mummycloth3').length > 0) {
                            num += 1;
                        }
                        if (players[i] == player && players[i].getEquips('haitu_mummycloth4').length > 0) {
                            num += 1;
                        }
                        if (players[i] == player && players[i].getEquips('haitu_mummycloth5').length > 0) {
                            num += 1;
                        }
                    }
                    player.storage.sex0 = player.sex;
                    if (num >= 3 && player.storage.haitu_mummychange != true && !player.hasSkill('haitu_naji', null, null, false)) {
                        if (player.hasSex('female')) {
                            player.init('haitu_fmummy');
                        } else {
                            player.init('haitu_mummy');
                        }
                        player.storage.haitu_mummychange = true;
                        player.update();
                        player.addSkill('mad');
                    }
                },
                selectTarget: -1,
                filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
                modTarget: true,
                allowMultiple: false,
                skills: ['mummy2_skill'],
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            haitu_mummycloth3: {
                fullimage: true,
                image: 'ext:海国图志/image/card/haitu_mummycloth.png',
                type: 'equip',
                subtype: 'equip3',
                fullskin: true,
                ai: {
                    order: 9,
                    equipValue(card, player) {
                        if (get.position(card) == 'e') return -4;
                        return -2;
                    },
                    value(card, player) {
                        if (player.getEquips(3).includes(card)) return -3;
                        return -2;
                    },
                    basic: {
                        equipValue: 5,
                        order(card, player) {
                            const equipValue = get.equipValue(card, player) / 20;
                            return player && player.hasSkillTag('reverseEquip') ? 8.5 - equipValue : 8 + equipValue;
                        },
                        useful: 2,
                        value(card, player, index, method) {
                            if (!player.getCards('e').includes(card) && !player.canEquip(card, true)) return 0.01;
                            const info = get.info(card),
                                current = player.getEquip(info.subtype),
                                value = current && card != current && get.value(current, player);
                            let equipValue = info.ai.equipValue || info.ai.basic.equipValue;
                            if (typeof equipValue == 'function') {
                                if (method == 'raw') return equipValue(card, player);
                                if (method == 'raw2') return equipValue(card, player) - value;
                                return Math.max(0.1, equipValue(card, player) - value);
                            }
                            if (typeof equipValue != 'number') equipValue = 0;
                            if (method == 'raw') return equipValue;
                            if (method == 'raw2') return equipValue - value;
                            return Math.max(0.1, equipValue - value);
                        },
                    },
                    result: {
                        keepAI: true,
                        target(player, target) {
                            var val = 2.5;
                            var val2 = 0;
                            var card = target.getEquip(3);
                            if (card) {
                                val2 = get.value(card, target);
                                if (val2 < 0) return 0;
                            }
                            return -val - val2;
                        },
                    },
                },
                enable: true,
                onEquip() {
                    var num = 0;
                    var players = game.filterPlayer();
                    for (var i = 0; i < players.length; i++) {
                        if (players[i] == player && players[i].getEquips('haitu_mummycloth1').length > 0) {
                            num += 1;
                        }
                        if (players[i] == player && players[i].getEquips('haitu_mummycloth2').length > 0) {
                            num += 1;
                        }
                        if (players[i] == player && players[i].getEquips('haitu_mummycloth3').length > 0) {
                            num += 1;
                        }
                        if (players[i] == player && players[i].getEquips('haitu_mummycloth4').length > 0) {
                            num += 1;
                        }
                        if (players[i] == player && players[i].getEquips('haitu_mummycloth5').length > 0) {
                            num += 1;
                        }
                    }
                    if (num >= 3 && player.storage.haitu_mummychange != true && !player.hasSkill('haitu_naji', null, null, false)) {
                        if (player.hasSex('female')) {
                            player.init('haitu_fmummy');
                        } else {
                            player.init('haitu_mummy');
                        }
                        player.storage.haitu_mummychange = true;
                        player.update();
                        player.addSkill('mad');
                    }
                },
                selectTarget: -1,
                filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
                modTarget: true,
                allowMultiple: false,
                skills: ['mummy3_skill'],
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            haitu_mummycloth4: {
                fullimage: true,
                image: 'ext:海国图志/image/card/haitu_mummycloth.png',
                type: 'equip',
                subtype: 'equip4',
                fullskin: true,
                ai: {
                    order: 9,
                    equipValue(card, player) {
                        if (get.position(card) == 'e') return -4;
                        return -2;
                    },
                    value(card, player) {
                        if (player.getEquips(4).includes(card)) return -3;
                        return -2;
                    },
                    basic: {
                        equipValue: 5,
                        order(card, player) {
                            const equipValue = get.equipValue(card, player) / 20;
                            return player && player.hasSkillTag('reverseEquip') ? 8.5 - equipValue : 8 + equipValue;
                        },
                        useful: 2,
                        value(card, player, index, method) {
                            if (!player.getCards('e').includes(card) && !player.canEquip(card, true)) return 0.01;
                            const info = get.info(card),
                                current = player.getEquip(info.subtype),
                                value = current && card != current && get.value(current, player);
                            let equipValue = info.ai.equipValue || info.ai.basic.equipValue;
                            if (typeof equipValue == 'function') {
                                if (method == 'raw') return equipValue(card, player);
                                if (method == 'raw2') return equipValue(card, player) - value;
                                return Math.max(0.1, equipValue(card, player) - value);
                            }
                            if (typeof equipValue != 'number') equipValue = 0;
                            if (method == 'raw') return equipValue;
                            if (method == 'raw2') return equipValue - value;
                            return Math.max(0.1, equipValue - value);
                        },
                    },
                    result: {
                        keepAI: true,
                        target(player, target) {
                            var val = 2.5;
                            var val2 = 0;
                            var card = target.getEquip(3);
                            if (card) {
                                val2 = get.value(card, target);
                                if (val2 < 0) return 0;
                            }
                            return -val - val2;
                        },
                    },
                },
                enable: true,
                onEquip() {
                    var num = 0;
                    var players = game.filterPlayer();
                    for (var i = 0; i < players.length; i++) {
                        if (players[i] == player && players[i].getEquips('haitu_mummycloth1').length > 0) {
                            num += 1;
                        }
                        if (players[i] == player && players[i].getEquips('haitu_mummycloth2').length > 0) {
                            num += 1;
                        }
                        if (players[i] == player && players[i].getEquips('haitu_mummycloth3').length > 0) {
                            num += 1;
                        }
                        if (players[i] == player && players[i].getEquips('haitu_mummycloth4').length > 0) {
                            num += 1;
                        }
                        if (players[i] == player && players[i].getEquips('haitu_mummycloth5').length > 0) {
                            num += 1;
                        }
                    }
                    if (num >= 3 && player.storage.haitu_mummychange != true && !player.hasSkill('haitu_naji', null, null, false)) {
                        if (player.hasSex('female')) {
                            player.init('haitu_fmummy');
                        } else {
                            player.init('haitu_mummy');
                        }
                        player.storage.haitu_mummychange = true;
                        player.update();
                        player.addSkill('mad');
                    }
                },
                selectTarget: -1,
                filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
                modTarget: true,
                allowMultiple: false,
                skills: ['mummy4_skill'],
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            haitu_mummycloth5: {
                fullimage: true,
                image: 'ext:海国图志/image/card/haitu_mummycloth.png',
                type: 'equip',
                subtype: 'equip5',
                fullskin: true,
                ai: {
                    order: 9,
                    equipValue(card, player) {
                        if (get.position(card) == 'e') return -4;
                        return -2;
                    },
                    value(card, player) {
                        if (player.getEquips(5).includes(card)) return -3;
                        return -2;
                    },
                    basic: {
                        equipValue: 5,
                        order(card, player) {
                            const equipValue = get.equipValue(card, player) / 20;
                            return player && player.hasSkillTag('reverseEquip') ? 8.5 - equipValue : 8 + equipValue;
                        },
                        useful: 2,
                        value(card, player, index, method) {
                            if (!player.getCards('e').includes(card) && !player.canEquip(card, true)) return 0.01;
                            const info = get.info(card),
                                current = player.getEquip(info.subtype),
                                value = current && card != current && get.value(current, player);
                            let equipValue = info.ai.equipValue || info.ai.basic.equipValue;
                            if (typeof equipValue == 'function') {
                                if (method == 'raw') return equipValue(card, player);
                                if (method == 'raw2') return equipValue(card, player) - value;
                                return Math.max(0.1, equipValue(card, player) - value);
                            }
                            if (typeof equipValue != 'number') equipValue = 0;
                            if (method == 'raw') return equipValue;
                            if (method == 'raw2') return equipValue - value;
                            return Math.max(0.1, equipValue - value);
                        },
                    },
                    result: {
                        keepAI: true,
                        target(player, target) {
                            var val = 2.5;
                            var val2 = 0;
                            var card = target.getEquip(3);
                            if (card) {
                                val2 = get.value(card, target);
                                if (val2 < 0) return 0;
                            }
                            return -val - val2;
                        },
                    },
                },
                enable: true,
                onEquip() {
                    var num = 0;
                    var players = game.filterPlayer();
                    for (var i = 0; i < players.length; i++) {
                        if (players[i] == player && players[i].getEquips('haitu_mummycloth1').length > 0) {
                            num += 1;
                        }
                        if (players[i] == player && players[i].getEquips('haitu_mummycloth2').length > 0) {
                            num += 1;
                        }
                        if (players[i] == player && players[i].getEquips('haitu_mummycloth3').length > 0) {
                            num += 1;
                        }
                        if (players[i] == player && players[i].getEquips('haitu_mummycloth4').length > 0) {
                            num += 1;
                        }
                        if (players[i] == player && players[i].getEquips('haitu_mummycloth5').length > 0) {
                            num += 1;
                        }
                    }
                    if (num >= 3 && player.storage.haitu_mummychange != true && !player.hasSkill('haitu_naji', null, null, false)) {
                        if (player.hasSex('female')) {
                            player.init('haitu_fmummy');
                        } else {
                            player.init('haitu_mummy');
                        }
                        player.storage.haitu_mummychange = true;
                        player.update();
                        player.addSkill('mad');
                    }
                },
                selectTarget: -1,
                filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
                modTarget: true,
                allowMultiple: false,
                skills: ['mummy5_skill'],
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            haitu_post: {
                image: 'ext:海国图志/image/card/haitu_post.png',
                type: 'special',
                fullimage: true,
                enable: true,
                filterTarget(card, player, target) {
                    return true;
                },
                content() {
                    'step 0';
                    var list = [];
                    if (target.storage.haitu_post_buff1 != true) {
                        list.add('升天');
                    }
                    if (target.storage.haitu_post_buff2 != true) {
                        list.add('逆天');
                    }
                    if (target.storage.haitu_post_buff3 != true) {
                        list.add('泡泡');
                    }
                    if (target.storage.haitu_post_buff4 != true) {
                        list.add('碎觉');
                    }
                    if (target.storage.haitu_post_buff5 != true) {
                        list.add('节命');
                    }
                    if (target.storage.haitu_post_buff6 != true) {
                        list.add('发电');
                    }
                    if (list.length) {
                        event.result = list.randomGet();
                        target.storage.haitu_post_buff1 = false;
                        target.storage.haitu_post_buff2 = false;
                        target.storage.haitu_post_buff3 = false;
                        target.storage.haitu_post_buff4 = false;
                        target.storage.haitu_post_buff5 = false;
                        target.storage.haitu_post_buff6 = false;
                    } else {
                        player.say('铁头娃,抗药性太强了.');
                        target.storage.haitu_post_buff1 = false;
                        target.storage.haitu_post_buff2 = false;
                        target.storage.haitu_post_buff3 = false;
                        target.storage.haitu_post_buff4 = false;
                        target.storage.haitu_post_buff5 = false;
                        target.storage.haitu_post_buff6 = false;
                        event.finish();
                    }
                    ('step 1');
                    if (event.result == '升天') {
                        if (!target.hasSkill('haitu_olyuji_debuff', null, null, false)) {
                            target.recover(1);
                            target.draw(1);
                            target.link(false);
                        }
                        event.finish();
                    }
                    if (event.result == '逆天') {
                        if (!target.hasSkill('haitu_olyuji_buff', null, null, false)) {
                            target.loseHp(1);
                            player.discardPlayerCard('hej', true, target);
                            target.link(true);
                        }
                        event.finish();
                    }
                    if (event.result == '泡泡') {
                        event.goto(3);
                    }
                    if (event.result == '碎觉') {
                        target.addTempSkill('fengyin', { player: 'phaseEnd' });
                    }
                    if (event.result == '节命') {
                        event.goto(7);
                    }
                    if (event.result == '发电') {
                        target.addTempSkill('mad', { player: 'phaseEnd' });
                    }
                    ('step 2');
                    event.finish();
                    ('step 3');
                    var list = [];
                    for (var name of lib.inpile) {
                        var info = lib.card[name];
                        if (!info || info.type != 'trick' || info.notarget) continue;
                        list.push(name);
                    }
                    if (!list.length) event.finish();
                    else {
                        event.list = list;
                    }
                    ('step 4');
                    var list = event.list.filter(function (name) {
                        return lib.filter.cardEnabled({ name: name }, target);
                    });
                    if (list.length) {
                        var next = target.chooseButton(['视为使用一张牌', true, [list, 'vcard']]).set('ai', function (button) {
                            var evt = _status.event.parent;
                            return get.effect(evt.target, { name: button.link[2] });
                        });
                    } else {
                        event.finish();
                    }
                    ('step 5');
                    if (result.links?.length) {
                        var name = result.links[0][2];
                        target.chooseUseTarget(result.links[0][2], true, false);
                        event.goto(9);
                    }
                    ('step 6');
                    event.finish();
                    ('step 7');
                    target.draw(Math.min(5, target.maxHp));
                    ('step 8');
                    target.update();
                    var num = target.countCards('h') - Math.min(5, target.maxHp);
                    if (num > 0) {
                        target.chooseToDiscard('h', true, num);
                    }
                    ('step 9');
                    event.finish();
                },
                ai: {
                    order(item, player) {
                        if (_status.event.type == 'phase') return 11;
                    },
                    result: {
                        target(player, target) {
                            var num = 1;
                            if (get.attitude(player, target) > 0) {
                                if (target.storage.haitu_post_buff1) {
                                    num += 1;
                                }
                                if (target.storage.haitu_post_buff3) {
                                    num += 1;
                                }
                                if (target.storage.haitu_post_buff5) {
                                    num += 1;
                                }
                                if (target.storage.haitu_post_buff2) {
                                    num -= 1;
                                }
                                if (target.storage.haitu_post_buff4) {
                                    num -= 1;
                                }
                                if (target.storage.haitu_post_buff6) {
                                    num -= 1;
                                }
                            }
                            if (get.attitude(player, target) < 0) {
                                if (target.storage.haitu_post_buff1) {
                                    num -= 1;
                                }
                                if (target.storage.haitu_post_buff3) {
                                    num -= 1;
                                }
                                if (target.storage.haitu_post_buff5) {
                                    num -= 1;
                                }
                                if (target.storage.haitu_post_buff2) {
                                    num += 1;
                                }
                                if (target.storage.haitu_post_buff4) {
                                    num += 1;
                                }
                                if (target.storage.haitu_post_buff6) {
                                    num += 1;
                                }
                            }
                            return num;
                        },
                    },
                },
            },
        },
        skill: {
            mummy1_skill: {
                mod: {
                    canBeGained(card, source, player, event) {
                        var cards = player.getCards('e', (cardx) => get.subtype(cardx) == 'equip1');
                        if (cards.includes(card) && !player.hasSkill('haitu_naji', null, null, false)) return false;
                    },
                    canBeDiscarded(card, source, player, event) {
                        var cards = player.getCards('e', (cardx) => get.subtype(cardx) == 'equip1');
                        if (cards.includes(card) && !player.hasSkill('haitu_naji', null, null, false)) return false;
                    },
                    cardname(card, player, name) {
                        if (get.type(card, null, false) == 'equip' && get.subtype(card, false) == 'equip1' && !player.hasSkill('haitu_naji', null, null, false)) return 'du';
                    },
                    cardnature(card, player) {
                        if (get.type(card, null, false) == 'equip' && get.subtype(card, false) == 'equip1' && !player.hasSkill('haitu_naji', null, null, false)) return false;
                    },
                    canBeDiscarded(card, source, player, event) {
                        var cards = player.getCards('e', (cardx) => get.subtype(cardx) == 'equip1');
                        if (cards.includes(card) && !player.hasSkill('haitu_naji', null, null, false)) return false;
                    },
                    cardDiscardable(card, player, name) {
                        var cards = player.getCards('e', (cardx) => get.subtype(cardx) == 'equip1');
                        if (cards.includes(card) && !player.hasSkill('haitu_naji', null, null, false)) return false;
                    },
                    targetEnabled(card, player, target, now) {
                        var cards = target.getCards('e', (cardx) => get.subtype(cardx) == 'equip1');
                        if (cards.length > 0 && get.type(card) == 'equip' && get.subtype(card) == 'equip1' && !player.hasSkill('haitu_naji', null, null, false)) return false;
                    },
                    cardEnabled2(card, player) {
                        var cards = player.getCards('e', (cardx) => get.subtype(cardx) == 'equip1');
                        if (cards.includes(card) && !player.hasSkill('haitu_naji', null, null, false)) return false;
                    },
                },
                equipSkill: true,
                trigger: {
                    player: 'equipBefore',
                },
                silent: true,
                forced: true,
                popup: false,
                firstDo: true,
                filter(event, player) {
                    if (get.subtype(event.card) != 'equip1') return false;
                    var cards = player.getCards('e', (cardx) => get.subtype(cardx) == 'equip1');
                    if (cards.length) return !player.hasSkill('haitu_naji', null, null, false);
                    return false;
                },
                content() {
                    trigger.cancel();
                    var owner = get.owner(trigger.card);
                    if (owner && owner.getCards('hejsx').includes(trigger.card)) {
                        owner.lose(trigger.card, ui.discardPile);
                    } else {
                        game.cardsDiscard(trigger.card);
                    }
                    game.log(trigger.card, '进入了弃牌堆');
                },
                ai: {
                    effect: {
                        target(card, player, target, current) {
                            if (get.subtype(card) != 'equip1') return;
                            var cards = target.getCards('e', (cardx) => get.subtype(cardx) == 'equip1');
                            if (cards.length) return 'zeroplayertarget';
                        },
                    },
                },
            },
            mummy2_skill: {
                equipSkill: true,
                trigger: {
                    player: 'equipBefore',
                },
                silent: true,
                forced: true,
                popup: false,
                firstDo: true,
                filter(event, player) {
                    if (get.subtype(event.card) != 'equip2') return false;
                    var cards = player.getCards('e', (cardx) => get.subtype(cardx) == 'equip2');
                    if (cards.length) return !player.hasSkill('haitu_naji', null, null, false);
                },
                content() {
                    trigger.cancel();
                    var owner = get.owner(trigger.card);
                    if (owner && owner.getCards('hejsx').includes(trigger.card)) {
                        owner.lose(trigger.card, ui.discardPile);
                    } else {
                        game.cardsDiscard(trigger.card);
                    }
                    game.log(trigger.card, '进入了弃牌堆');
                },
                ai: {
                    effect: {
                        target(card, player, target, current) {
                            if (get.subtype(card) != 'equip2') return;
                            var cards = target.getCards('e', (cardx) => get.subtype(cardx) == 'equip2');
                            if (cards.length) return 'zeroplayertarget';
                        },
                    },
                },
                mod: {
                    canBeGained(card, source, player, event) {
                        var cards = player.getCards('e', (cardx) => get.subtype(cardx) == 'equip2');
                        if (cards.includes(card) && !player.hasSkill('haitu_naji', null, null, false)) return false;
                    },
                    cardname(card, player, name) {
                        if (get.type(card, null, false) == 'equip' && get.subtype(card, false) == 'equip2' && !player.hasSkill('haitu_naji', null, null, false)) return 'du';
                    },
                    cardnature(card, player) {
                        if (get.type(card, null, false) == 'equip' && get.subtype(card, false) == 'equip2' && !player.hasSkill('haitu_naji', null, null, false)) return false;
                    },
                    canBeDiscarded(card, source, player, event) {
                        var cards = player.getCards('e', (cardx) => get.subtype(cardx) == 'equip2');
                        if (cards.includes(card) && !player.hasSkill('haitu_naji', null, null, false)) return false;
                    },
                    cardDiscardable(card, player, name) {
                        var cards = player.getCards('e', (cardx) => get.subtype(cardx) == 'equip2');
                        if (cards.includes(card) && !player.hasSkill('haitu_naji', null, null, false)) return false;
                    },
                    targetEnabled(card, player, target, now) {
                        var cards = target.getCards('e', (cardx) => get.subtype(cardx) == 'equip2');
                        if (cards.length > 0 && get.type(card) == 'equip' && get.subtype(card) == 'equip2' && !player.hasSkill('haitu_naji', null, null, false)) return false;
                    },
                    cardEnabled2(card, player) {
                        var cards = player.getCards('e', (cardx) => get.subtype(cardx) == 'equip2');
                        if (cards.includes(card) && !player.hasSkill('haitu_naji', null, null, false)) return false;
                    },
                },
            },
            mummy3_skill: {
                equipSkill: true,
                trigger: {
                    player: 'equipBefore',
                },
                silent: true,
                forced: true,
                popup: false,
                firstDo: true,
                filter(event, player) {
                    if (get.subtype(event.card) != 'equip3') return false;
                    var cards = player.getCards('e', (cardx) => get.subtype(cardx) == 'equip3');
                    if (cards.length) return !player.hasSkill('haitu_naji', null, null, false);
                },
                content() {
                    trigger.cancel();
                    var owner = get.owner(trigger.card);
                    if (owner && owner.getCards('hejsx').includes(trigger.card)) {
                        owner.lose(trigger.card, ui.discardPile);
                    } else {
                        game.cardsDiscard(trigger.card);
                    }
                    game.log(trigger.card, '进入了弃牌堆');
                },
                ai: {
                    effect: {
                        target(card, player, target, current) {
                            if (get.subtype(card) != 'equip3') return;
                            var cards = target.getCards('e', (cardx) => get.subtype(cardx) == 'equip3');
                            if (cards.length) return 'zeroplayertarget';
                        },
                    },
                },
                mod: {
                    cardname(card, player, name) {
                        if (get.type(card, null, false) == 'equip' && get.subtype(card, false) == 'equip3' && !player.hasSkill('haitu_naji', null, null, false)) return 'du';
                    },
                    cardnature(card, player) {
                        if (get.type(card, null, false) == 'equip' && get.subtype(card, false) == 'equip3' && !player.hasSkill('haitu_naji', null, null, false)) return false;
                    },
                    canBeDiscarded(card, source, player, event) {
                        var cards = player.getCards('e', (cardx) => get.subtype(cardx) == 'equip3');
                        if (cards.includes(card) && !player.hasSkill('haitu_naji', null, null, false)) return false;
                    },
                    canBeGained(card, source, player, event) {
                        var cards = player.getCards('e', (cardx) => get.subtype(cardx) == 'equip3');
                        if (cards.includes(card) && !player.hasSkill('haitu_naji', null, null, false)) return false;
                    },
                    cardDiscardable(card, player, name) {
                        var cards = player.getCards('e', (cardx) => get.subtype(cardx) == 'equip3');
                        if (cards.includes(card) && !player.hasSkill('haitu_naji', null, null, false)) return false;
                    },
                    targetEnabled(card, player, target, now) {
                        var cards = target.getCards('e', (cardx) => get.subtype(cardx) == 'equip3');
                        if (cards.length > 0 && get.type(card) == 'equip' && get.subtype(card) == 'equip3' && !player.hasSkill('haitu_naji', null, null, false)) return false;
                    },
                    cardEnabled2(card, player) {
                        var cards = player.getCards('e', (cardx) => get.subtype(cardx) == 'equip3');
                        if (cards.includes(card) && !player.hasSkill('haitu_naji', null, null, false)) return false;
                    },
                },
            },
            mummy4_skill: {
                equipSkill: true,
                trigger: {
                    player: 'equipBefore',
                },
                silent: true,
                forced: true,
                popup: false,
                firstDo: true,
                filter(event, player) {
                    if (get.subtype(event.card) != 'equip4') return false;
                    var cards = player.getCards('e', (cardx) => get.subtype(cardx) == 'equip4');
                    if (cards.length) return !player.hasSkill('haitu_naji', null, null, false);
                },
                content() {
                    trigger.cancel();
                    var owner = get.owner(trigger.card);
                    if (owner && owner.getCards('hejsx').includes(trigger.card)) {
                        owner.lose(trigger.card, ui.discardPile);
                    } else {
                        game.cardsDiscard(trigger.card);
                    }
                    game.log(trigger.card, '进入了弃牌堆');
                },
                ai: {
                    effect: {
                        target(card, player, target, current) {
                            if (get.subtype(card) != 'equip4') return;
                            var cards = target.getCards('e', (cardx) => get.subtype(cardx) == 'equip4');
                            if (cards.length) return 'zeroplayertarget';
                        },
                    },
                },
                mod: {
                    cardname(card, player, name) {
                        if (get.type(card, null, false) == 'equip' && get.subtype(card, false) == 'equip4' && !player.hasSkill('haitu_naji', null, null, false)) return 'du';
                    },
                    cardnature(card, player) {
                        if (get.type(card, null, false) == 'equip' && get.subtype(card, false) == 'equip4' && !player.hasSkill('haitu_naji', null, null, false)) return false;
                    },
                    canBeDiscarded(card, source, player, event) {
                        var cards = player.getCards('e', (cardx) => get.subtype(cardx) == 'equip4');
                        if (cards.includes(card) && !player.hasSkill('haitu_naji', null, null, false)) return false;
                    },
                    cardDiscardable(card, player, name) {
                        var cards = player.getCards('e', (cardx) => get.subtype(cardx) == 'equip4');
                        if (cards.includes(card) && !player.hasSkill('haitu_naji', null, null, false)) return false;
                    },
                    canBeGained(card, source, player, event) {
                        var cards = player.getCards('e', (cardx) => get.subtype(cardx) == 'equip4');
                        if (cards.includes(card) && !player.hasSkill('haitu_naji', null, null, false)) return false;
                    },
                    targetEnabled(card, player, target, now) {
                        var cards = target.getCards('e', (cardx) => get.subtype(cardx) == 'equip4');
                        if (cards.length > 0 && get.type(card) == 'equip' && get.subtype(card) == 'equip4' && !player.hasSkill('haitu_naji', null, null, false)) return false;
                    },
                    cardEnabled2(card, player) {
                        var cards = player.getCards('e', (cardx) => get.subtype(cardx) == 'equip4');
                        if (cards.includes(card) && !player.hasSkill('haitu_naji', null, null, false)) return false;
                    },
                },
            },
            mummy5_skill: {
                equipSkill: true,
                trigger: {
                    player: 'equipBefore',
                },
                silent: true,
                forced: true,
                popup: false,
                firstDo: true,
                filter(event, player) {
                    if (get.subtype(event.card) != 'equip5') return false;
                    var cards = player.getCards('e', (cardx) => get.subtype(cardx) == 'equip5');
                    if (cards.length) return !player.hasSkill('haitu_naji', null, null, false);
                },
                content() {
                    trigger.cancel();
                    game.log(trigger.card, '进入了弃牌堆');
                },
                ai: {
                    effect: {
                        target(card, player, target, current) {
                            if (get.subtype(card) != 'equip5') return;
                            var cards = target.getCards('e', (cardx) => get.subtype(cardx) == 'equip5');
                            if (cards.length) return 'zeroplayertarget';
                        },
                    },
                },
                mod: {
                    canBeDiscarded(card, source, player, event) {
                        var cards = player.getCards('e', (cardx) => get.subtype(cardx) == 'equip5');
                        if (cards.includes(card) && !player.hasSkill('haitu_naji', null, null, false)) return false;
                    },
                    canBeGained(card, source, player, event) {
                        var cards = player.getCards('e', (cardx) => get.subtype(cardx) == 'equip5');
                        if (cards.includes(card) && !player.hasSkill('haitu_naji', null, null, false)) return false;
                    },
                    cardDiscardable(card, player, name) {
                        var cards = player.getCards('e', (cardx) => get.subtype(cardx) == 'equip5');
                        if (cards.includes(card) && !player.hasSkill('haitu_naji', null, null, false)) return false;
                    },
                    cardname(card, player, name) {
                        if (get.type(card, null, false) == 'equip' && get.subtype(card, false) == 'equip5' && !player.hasSkill('haitu_naji', null, null, false)) return 'du';
                    },
                    cardnature(card, player) {
                        if (get.type(card, null, false) == 'equip' && get.subtype(card, false) == 'equip5' && !player.hasSkill('haitu_naji', null, null, false)) return false;
                    },
                    targetEnabled(card, player, target, now) {
                        var cards = target.getCards('e', (cardx) => get.subtype(cardx) == 'equip5');
                        if (cards.length > 0 && get.type(card) == 'equip' && get.subtype(card) == 'equip5' && !player.hasSkill('haitu_naji', null, null, false)) return false;
                    },
                    cardEnabled2(card, player) {
                        var cards = player.getCards('e', (cardx) => get.subtype(cardx) == 'equip5');
                        if (cards.includes(card) && !player.hasSkill('haitu_naji', null, null, false)) return false;
                    },
                },
            },
        },
    };
    lib.translate.xsCard_card_config = '海国图志';
    lib.config.all.cards.add('haituCard');
    lib.config.cards.add('haituCard');
    return haituCard;
});

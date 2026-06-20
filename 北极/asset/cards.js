game.import('card', function (lib, game, ui, get, ai, _status) {
    var BEIJICard = {
        name: 'BEIJICard', //卡包命名
        connect: true, //卡包是否可以联机
        translate: {
            //效果翻译
            bjbingqiang: '冰枪',
            bjbingqiang_info: '锁定技，你的出【杀】次数+1且【杀】不可被闪避；当【冰枪】离开你的装备区时，你弃置五张牌。',
            bjduanji: '断戟',
            bjduanji_info: '锁定技，①你造成的伤害-1。②你不能成为【过河拆桥】的目标。③此牌离开装备区时，废除你的武器栏。',
            bjlanlv: '褴褛',
            bjlanlv_info: '锁定技，①你受到的伤害+1。②你不能成为【顺手牵羊】的目标。③此牌离开装备区时，废除你的防具栏。',
            bjshoulv: '瘦驴',
            bjshoulv_info: '锁定技，①你计算与其他角色的距离+1。②你不能成为【兵粮寸断】的目标。③此牌离开装备区时，废除你的进攻坐骑栏。',
            bjbingma: '病马',
            bjbingma_info: '锁定技，①其他角色计算与你的距离-1。②你不能成为【兵粮寸断】的目标。③此牌离开装备区时，废除你的防御坐骑栏。',
            bjmiaowu: '妙舞',
            bjmiaowu_info: '出牌阶段对自己使用，你可以摸七张牌并弃置三张牌。',
        },
        list: [
            //卡牌的花色
            ['heart', '2', 'bjmiaowu'],
            ['spade', '1', 'bjbingqiang'],
        ],
        card: {
            bjbingqiang: {
                image: 'ext:北极/image/card/bjbingqiang.png',
                type: 'equip',
                subtype: 'equip1',
                distance: {
                    attackFrom: -4,
                },
                ai: {
                    basic: {
                        equipValue: 5,
                        order: -1,
                        useful: 2,
                        value: -1,
                    },
                    result: {
                        target: function (player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                filterLose: function (card, player) {
                    if (player.hasSkillTag('unequip2')) return false;
                    return true;
                },
                loseDelay: false,
                onLose: function () {
                    player.chooseToDiscard(5, true);
                },
                skills: ['bjbingqiangs'],
                enable: true,
                selectTarget: -1,
                filterTarget: function (card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content: function () {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
                fullimage: true,
            },
            bjduanji: {
                image: 'ext:北极/image/card/bjduanji.png',
                type: 'equip',
                subtype: 'equip1',
                ai: {
                    basic: {
                        equipValue: -5,
                        order: -1,
                        useful: 2,
                        value: -1,
                    },
                    result: {
                        target: function (player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                filterLose: function (card, player) {
                    if (player.hasSkillTag('unequip2')) return false;
                    return true;
                },
                loseDelay: false,
                onLose: function () {
                    player.disableEquip(1);
                },
                skills: ['bjduanjis'],
                enable: true,
                selectTarget: -1,
                filterTarget: function (card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content: function () {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
                fullskin: true,
            },
            bjlanlv: {
                image: 'ext:北极/image/card/bjlanlv.png',
                fullskin: true,
                type: 'equip',
                subtype: 'equip2',
                nomod: true,
                nopower: true,
                unique: true,
                skills: ['bjlanlvs'],
                ai: {
                    basic: {
                        equipValue: -5,
                        order: -1,
                        useful: 2,
                        value: -1,
                    },
                    result: {
                        target: function (player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                filterLose: function (card, player) {
                    if (player.hasSkillTag('unequip2')) return false;
                    return true;
                },
                loseDelay: false,
                onLose: function () {
                    player.disableEquip(2);
                },
                enable: true,
                selectTarget: -1,
                filterTarget: function (card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content: function () {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            bjshoulv: {
                image: 'ext:北极/image/card/bjshoulv.png',
                fullskin: true,
                type: 'equip',
                subtype: 'equip4',
                skills: ['bjshoulvs'],
                distance: {
                    globalFrom: 1,
                },
                enable: true,
                selectTarget: -1,
                filterTarget: function (card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content: function () {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
                ai: {
                    basic: {
                        order: -1,
                        useful: 2,
                        equipValue: -5,
                        value: -1,
                    },
                    result: {
                        target: function (player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                filterLose: function (card, player) {
                    if (player.hasSkillTag('unequip2')) return false;
                    return true;
                },
                loseDelay: false,
                onLose: function () {
                    player.disableEquip(4);
                },
            },
            bjbingma: {
                image: 'ext:北极/image/card/bjbingma.png',
                fullskin: true,
                type: 'equip',
                subtype: 'equip3',
                skills: ['bjbingmas'],
                distance: {
                    globalTo: -1,
                },
                enable: true,
                selectTarget: -1,
                filterTarget: function (card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content: function () {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
                ai: {
                    basic: {
                        order: -1,
                        useful: 2,
                        equipValue: -5,
                        value: -1,
                    },
                    result: {
                        target: function (player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                filterLose: function (card, player) {
                    if (player.hasSkillTag('unequip2')) return false;
                    return true;
                },
                loseDelay: false,
                onLose: function () {
                    player.disableEquip(3);
                },
            },
            bjmiaowu: {
                image: 'ext:北极/image/card/bjmiaowu.png',
                name: 'bjmiaowu',
                audio: true,
                type: 'trick',
                enable: true,
                selectTarget: -1,
                cardcolor: 'black',
                toself: true,
                filterTarget: function (card, player, target) {
                    return target == player;
                },
                modTarget: true,
                content: function () {
                    if (get.is.versus()) {
                        if (game.friend.contains(target)) {
                            if (game.friend.length < game.enemy.length) {
                                target.draw(7);
                                return;
                            }
                        } else {
                            if (game.friend.length > game.enemy.length) {
                                target.draw(7);
                                return;
                            }
                        }
                    }
                    target.draw(7);
                    target.chooseToDiscard(3, 'he', true).ai = get.disvalue;
                },
                ai: {
                    basic: {
                        order: 7.2,
                        useful: 4.5,
                        value: 9.2,
                    },
                    result: {
                        target: 2,
                    },
                    tag: {
                        draw: 4,
                    },
                },
                fullimage: true,
            },
        },
        skill: {
            bjbingqiangs: {
                equipSkill: true,
                mod: {
                    cardUsable: function (card, player, num) {
                        if (card.name == 'sha') return num + 1;
                    },
                },
                trigger: {
                    player: 'useCard',
                },
                filter: function (event) {
                    return event.card.name == 'sha';
                },
                forced: true,
                logTarget: 'target',
                content: function () {
                    trigger.directHit.addArray(game.players);
                },
                ai: {
                    mapValue: 2,
                    unequip: true,
                    skillTagFilter: function (player, tag, arg) {
                        if (arg && arg.name == 'sha') return true;
                        return false;
                    },
                },
            },
            bjduanjis: {
                mod: {
                    targetEnabled: function (card, player, target, now) {
                        if (card.name == 'guohe') return false;
                    },
                },
                equipSkill: true,
                trigger: {
                    source: 'damageBefore',
                },
                forced: true,
                logTarget: 'target',
                content: function () {
                    trigger.num -= 1;
                },
            },
            bjlanlvs: {
                name: 'bjlanlvs',
                equipSkill: true,
                forced: true,
                priority: 6,
                mod: {
                    targetEnabled: function (card, player, target, now) {
                        if (card.name == 'shunshou') return false;
                    },
                },
                trigger: {
                    player: 'damageBegin',
                },
                filter: function (event, player) {
                    return event.source != undefined;
                },
                logTarget: 'source',
                content: function () {
                    trigger.num++;
                },
                ai: {
                    threaten: 4,
                },
            },
            bjbingmas: {
                mod: {
                    targetEnabled: function (card, player, target, now) {
                        if (card.name == 'lebu') return false;
                    },
                },
                equipSkill: true,
            },
            bjshoulvs: {
                mod: {
                    targetEnabled: function (card, player, target, now) {
                        if (card.name == 'bingliang') return false;
                    },
                },
                equipSkill: true,
            },
        }, //技能
    };
    lib.translate['BEIJICard_card_config'] = '<img style=height:25px src=extension/北极/image/others/cardtitle.png>';
    lib.config.all.cards.add('BEIJICard');
    lib.config.cards.add('BEIJICard');
    return BEIJICard;
});

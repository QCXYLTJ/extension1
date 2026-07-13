game.import('card', function (lib, game, ui, get, ai, _status) {
    var xsCard = {
        name: 'xsCard', //卡包命名
        connect: true, //卡包是否可以联机
        card: {
            //机制卡牌
            xb_winddamage: {
                ai: {
                    result: {
                        target: -1.5,
                    },
                    tag: {
                        damage: 1,
                        xb_windDamage: 1,
                        natureDamage: 1,
                    },
                },
            },
            xb_anmiedamage: {
                ai: {
                    result: {
                        target: -1.5,
                    },
                    tag: {
                        damage: 1,
                        xb_anmieDamage: 1,
                        natureDamage: 1,
                    },
                },
            },
            xb_dadidamage: {
                ai: {
                    result: {
                        target: -1.5,
                    },
                    tag: {
                        damage: 1,
                        xb_dadiDamage: 1,
                        natureDamage: 1,
                    },
                },
            },
            //圣歌//
            jisishengge: {
                image: 'ext:死星/image/card/gezhe.jpg',
                fullskin: true,
                type: 'equip',
                subtype: 'equip5',
                nomod: true,
                forceDie: true,
                onLose() {
                    player.addMark('baoshi', 1);
                },
                clearLose: true,
                equipDelay: false,
                loseDelay: false,
            },
            //祛腐药膏//
            sj_qufuyaogao: {
                image: 'ext:死星/image/card/sj_qufuyaogao.jpg',
                type: '药物',
                enable: true,
                cardcolor: 'green',
                filterTarget(card, player, target) {
                    return !target.hasSkill('sj_qufuyaogao');
                },
                content() {
                    target.$gain2(cards);
                    target.storage.sj_qufuyaogao = card;
                    target.storage.sj_qufuyaogao_markcount = 1;
                    target.addSkill('siji_qufuyaogao');//QQQ
                },
                ai: {
                    order: 2,
                    value: 5,
                    result: {
                        target: 1,
                    },
                },
                selectTarget: 1,
                fullimage: true,
            },
            //血魇天镰//
            siji_xueyantianlian: {
                image: 'ext:死星/image/card/siji_xueyantianlian.jpg',
                fullimage: true,
                type: 'equip',
                subtype: 'equip1',
                distance: {
                    attackFrom: -4,
                },
            },
            //告死的寒霜//
            gaosihanshuang: {
                image: 'ext:死星/image/card/gaosihanshuang.jpg',
                fullimage: true,
                type: 'equip',
                subtype: 'equip1',
                distance: {
                    attackFrom: -4,
                },
                skills: ['gaosihanshuang'],
                onLose() {
                    player.enableEquip('equip1');
                    if (card.cards?.length) {
                        player.equip(card.cards[0]);
                    }
                    else {
                        player.equip(game.createCard('gaosihanshuang'));
                    }
                },
                forceDie: true,
            },
            //血死的痛忆//
            xuesitongyi: {
                image: 'ext:死星/image/card/xuesitongyi.jpg',
                fullskin: true,
                type: 'equip',
                subtype: 'equip5',
                nomod: true,
                skills: ['xuesitongyi'],
                onLose() {
                    player.enableEquip('equip5');
                    if (card.cards?.length) {
                        player.equip(card.cards[0]);
                    }
                    else {
                        player.equip(game.createCard('xuesitongyi'));
                    }
                },
                forceDie: true,
            },
        },
        translate: {
            sj_qufuyaogao: '祛腐药膏',
            sj_qufuyaogao_info: '出牌阶段结束时,你回复3点体力,持续1回合',
            siji_xueyantianlian: '血魇天镰',
            siji_xueyantianlian_info: '锁定技,若装备此武器的角色为【阿基特】,则弃置一个<撕裂>标记造成的伤害额外+2,并且技能<血影狂刀>必定触发',
            gaosihanshuang: '告死的寒霜',
            gaosihanshuang_info: '锁定技,每次对其他角色造成伤害时,对自己造成1点(体力>1时)/3点(体力=1时)伤害并令本次伤害额外+2且伤害属性改为冰属性',
            xuesitongyi: '血死的痛忆',
            xuesitongyi_info: '锁定技,准备阶段和结束阶段额外失去1~3点体力(体力为1时不再失去)',
            jisishengge: '圣歌',
            jisishengge_info: '(若武将名为法芙娜则锁定发动)①有<希望之歌>的角色移除>希望之歌<所提升的伤害额外+2,因<希望之歌>回复体力或获得护甲的量翻倍;②失去此牌时,立刻+2<宝石>',
            _xb_windsha: '<font color=#0aba0a>风</font>杀',
            _xb_windsha_info: '出牌阶段,对你攻击范围内的一名角色使用.其须使用一张【闪】,否则你对其造成1点<font color=#0aba0a>风属性</font>伤害',
            xb_anmie: '<font color=#000000>暗灭</font>',
            xb_anmie_info: '出牌阶段,对你攻击范围内的一名角色使用.你对其造成1点<font color=#000000>暗</font>伤害',
            _xb_anmie: '<font color=#000000>暗灭</font>',
            _xb_anmie_info: '出牌阶段,对你攻击范围内的一名角色使用.你对其造成1点<font color=#000000>暗</font>伤害',
            _xb_dadisha: '<font color=#9F9F5F>大地</font>杀',
            _xb_dadisha_info: '出牌阶段,对你攻击范围内的一名角色使用.其须使用一张【闪】,否则你对其造成1点<font color=#9F9F5F>大地属性</font>伤害',
        },
        cardType: {
            yy_partner: 2,
            yy_partner_child: 2.2,
            yy_partner_robot: 2.4,
        },
        list: [
            ['heart', 3, 'sha', 'xb_wind'], //风杀*5
            ['diamond', 5, 'sha', 'xb_wind'], //风杀
            ['spade', 6, 'sha', 'xb_wind'], //风杀
            ['club', 9, 'sha', 'xb_wind'], //风杀
            ['club', 10, 'sha', 'xb_wind'], //风杀
            ['heart', 4, 'sha', 'xb_dadi'], //地杀*5
            ['diamond', 10, 'sha', 'xb_dadi'], //地杀
            ['spade', 7, 'sha', 'xb_dadi'], //地杀
            ['club', 2, 'sha', 'xb_dadi'], //地杀
            ['club', 8, 'sha', 'xb_dadi'], //地杀
            ['heart', 11, 'sha', 'xb_anmie'], //暗灭*5
            ['diamond', 12, 'sha', 'xb_anmie'], //暗灭
            ['spade', 13, 'sha', 'xb_anmie'], //暗灭
            ['club', 1, 'sha', 'xb_anmie'], //暗灭
            ['club', 1, 'sha', 'xb_anmie'], //暗灭
        ],
        skill: {
            yy_partner_skill: {
                mod: {
                    ignoredHandcard(card, player) {
                        if (get.type(card) == 'yy_partner') {
                            return true;
                        }
                    },
                    cardDiscardable(card, player, name) {
                        if (name == 'phaseDiscard' && get.type(card) == 'yy_partner') return false;
                    },
                },
                fixed: true,
                charlotte: true,
                trigger: {
                    player: 'damageEnd',
                },
                forced: true,
                supercharlotte: true,
                filter(event, player) {
                    return Math.random() <= 0.5 && player.countCards('h', { type: 'yy_partner' });
                },
                content() {
                    'step 0';
                    player.chooseToDiscard('h', true, '弃置并销毁一张伙伴牌', { type: 'yy_partner' });
                    ('step 1');
                    if (result.cards?.length) {
                        var card = result.cards[0];
                        var cardsx = [];
                        if (card.cards) cardsx.addArray(card.cards);
                        if (get.itemtype(card) == 'card') cardsx.push(card);
                        for (var cardsxr of cardsx) {
                            cardsxr.fix();
                            cardsxr.remove();
                            cardsxr.destroyed = true;
                        }
                        game.log(card, '被销毁了');
                    }
                },
            },
        }, //技能
    };
    lib.translate.xsCard_card_config = '死星卡牌';
    lib.config.all.cards.add('xsCard');
    lib.config.cards.add('xsCard');
    return xsCard;
});

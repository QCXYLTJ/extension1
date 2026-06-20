import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '诛仙杀',
        content(config, pack) { },
        precontent() {
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '诛仙杀',
                    connect: true,
                    character: {
                        gm_character: ['male', 'shen', 4, ['gm_shengdian', 'gm_longhun', 'nzry_jieying'], []],
                        gm_shentaigui: ['female', 'shen', 10, ['gm_juefang', 'gm_renjie', 'gm_fansha'], []],
                        gm_shenguoshi: ['female', 'shen', 4, ['gm_huayin', 'gm_huaji', 'gm_shihua'], []],
                        gm_shenwangfan: ['female', 'shen', 5, ['gm_zhicai'], []],
                        神土狼: ['none', 'shen', 5, ['gm_yuanshang', 'gm_chongfeng', 'gm_fengsheng'], []],
                        神疯止戈: ['female', 'shen', 4, ['gm_shenwu', 'gm_qiupo', 'gm_wuluan'], []],
                        神文稠: ['female', 'shen', 4, ['gm_boshi', 'gm_bocai', 'gm_boxue'], []],
                        神臣小六: ['male', 'shen', '5/6', ['gm_wulai', 'gm_zhiluan', 'gm_huikui'], []],
                        SP独龍: ['female', 'shu', 3, ['gm_huanzhu', 'gm_zhuhun'], []],
                        SP郭世: ['female', 'shu', 3, ['gm_quanzhao', 'gm_cuican'], []],
                        SP疯止戈: ['female', 'qun', 4, ['gm_douwu', 'gm_lianji', 'gm_zhuihun'], []],
                        SP文稠: ['female', 'wu', 3, ['gm_tongshun', 'gm_anyao'], []],
                        SP土狼: ['male', 'wu', 4, ['gm_zijue', 'gm_huanhun'], []],
                        SP王番: ['male', 'qun', 4, ['gm_huanhua', 'gm_yingbian', 'gm_tihua'], []],
                        SP台龟: ['female', 'qun', 3, ['gm_duyin', 'gm_dumou'], []],
                        SP臣小六: ['male', 'qun', 3, ['gm_laibian', 'gm_moutu'], []],
                    },
                    translate: {
                        gm_character: '神独龍',
                        gm_shentaigui: '神台龟',
                        gm_shenguoshi: '神郭世',
                        gm_shenwangfan: '神王番',
                        神土狼: '神土狼',
                        神疯止戈: '神疯止戈',
                        神文稠: '神文稠',
                        神臣小六: '神臣小六',
                        SP独龍: 'SP独龍',
                        SP郭世: 'SP郭世',
                        SP疯止戈: 'SP疯止戈',
                        SP文稠: 'SP文稠',
                        SP土狼: 'SP土狼',
                        SP王番: 'SP王番',
                        SP台龟: 'SP台龟',
                        SP臣小六: 'SP臣小六',
                        gm_shengdian: '圣典',
                        gm_shengdian_info: '出牌阶段限一次,你可以进行判定,若判定结果为:红色,本回合获得〖武圣〗;黑色,本回合获得〖武典〗',
                        gm_wudian: '武典',
                        gm_wudian_info: '每回合相同牌名限一次,你可以弃置一张黑色牌视为使用一张任意普通锦囊牌',
                        gm_longhun: '龙魄',
                        gm_longhun_info: '觉醒技,当你进入濒死状态时,你减少一点体力上限并将体力值回复至一点,你可以重铸至多三张手牌,获得〖英姿〗、〖连营〗和以下效果:{当你受到伤害时,你防止此伤害并减少等量体力上限;你的【桃】视为无属性的【杀】,【桃园结义】视为【决斗】}',
                        gm_juefang: '绝防',
                        gm_juefang_info: '锁定技,若你的防具栏为空且未废除,则你视为装备着【藤甲】;你受到的火焰伤害+1',
                        gm_renjie: '忍戒',
                        gm_renjie_info: '出牌阶段限一次,你可以弃置任意张牌并选择等量名角色,令这些角色选择一项:1.对你使用一张【杀】;2.令你获得其装备区内于弃置牌数量相等的牌',
                        gm_fansha: '反杀',
                        gm_fansha_info: '觉醒技,当你进入濒死状态时,你将体力上限调整至6,将体力回复至体力上限,失去〖绝防〗,获得〖羽杀〗和以下效果:{你防止受到的火焰伤害}',
                        gm_yusha: '羽杀',
                        gm_yusha_info: '锁定技,当你使用装备牌时,你从牌堆获得一张锦囊牌;你使用的带有「伤害」标签的锦囊牌伤害值+1',
                        gm_huayin: '化印',
                        gm_huayin_info: '锁定技,游戏开始时,你获得两个<化>标记,你造成或受到伤害时获得一个标记',
                        gm_huaji: '化技',
                        gm_huaji_info: '出牌阶段限一次,你可以移去一枚<化>并获得一名武将武将牌上的所有技能直到回合结束',
                        gm_shihua: '失化',
                        gm_shihua_info: '觉醒技,若你体力值为一或<化>标记数为10,则你减少一点体力上限,失去〖化印〗和〖化技〗并获得〖万化〗和〖连营〗',
                        gm_wanhua: '万化',
                        gm_wanhua_info: '每回合相同牌名限一次,你可以将一张手牌当做任意非装备牌使用',
                        gm_zhicai: '制裁',
                        gm_zhicai_info: '锁定技,出牌阶段开始前和弃牌阶段结束后各判定两次,若是和则获得【铁骑】和【咆哮】;若是和则获得【傲才】和【连营】;若是和则获得【八阵】和【反馈】;若是和则获得【奇袭】和【乱武】;若是和则获得【刚烈】和【急救】;若是和,则获得【雷击】和【鬼道】.直到下个阶段该技能判定时失去已获得的技能',
                        gm_yuanshang: '怨伤',
                        gm_yuanshang_info: '(锁定技)游戏开始时,你获得一个<怨>标记,当你造成或受到伤害时获得一个标记,且当你使用非延时锦囊牌时选择失去一点体力或弃一个标记',
                        gm_chongfeng: '冲锋',
                        gm_chongfeng_info: '【冲锋】出牌阶段,你可以弃三个<怨>标记并选择一名武将,视为对其使用一张无视防具的杀,你以此法造成的伤害不会获得标记.若此杀造成伤害则本回合获得【武圣】和【咆哮】',
                        gm_fengsheng: '逢生',
                        gm_fengsheng_info: '觉醒技,当你进入濒死状态时,若你的<怨>标记数不小于3,你减少一点体力上限并回复两点体力,获得〖天意〗和以下效果:{你使用【桃】的回复值+1}',
                        gm_tianyi: '天意',
                        gm_tianyi_info: '一名角色的回合开始时,若其判定区内有牌,你需选择一项:1.弃置一张手牌,其弃置判定区内的所有判定牌并立即执行相应的判定;2.摸一张牌并获得其所有判定牌',
                        gm_shenwu: '圣武',
                        gm_shenwu_info: '锁定技,你的防具栏视为武器栏',
                        gm_qiupo: '求魄',
                        gm_qiupo_info: '每回合限一次,当你造成或受到伤害后,你可以从牌堆底摸X张牌(X为对方手牌数),以此法获得的牌本回合内不计入手牌上限',
                        gm_wuluan: '武乱',
                        gm_wuluan_info: '限定技,出牌阶段,你可以令所有其他角色失去一点体力并选择一项:1.弃置所有牌;2.受到一点伤害',
                        gm_boshi: '博识',
                        gm_boshi_info: '锁定技,游戏开始时,令所有角色各获得4枚<博>标记.你使用基本牌时获得1枚<博>标记,使用锦囊牌时获得3枚<博>标记,使用装备牌时移去2枚<博>标记',
                        gm_bocai: '博才',
                        gm_bocai_info: '每回合限一次,当有角色受到伤害时,你可以移除其2枚<博>(不足则你须选择失去一点体力或移去4枚<博>)并令一名角色回复一点体力.回合开始时,若你至少拥有2X枚<博>,你可以令所有其他角色各获得你的2枚<博>(X为场上存活人数)',
                        gm_boxue: '博学',
                        gm_boxue_info: '觉醒技,当你进入濒死状态时,你可以加一点体力上限并将体力回复至体力上限,获得如下效果:{当有角色阵亡时,若其有<博>,你可以获得该武将的所有<博>,否则你失去一点体力}',
                        gm_wulai: '无赖',
                        gm_wulai_info: '锁定技,当你受到伤害时,你与伤害来源各展示一张手牌,①若点数之差小于6,你摸两张牌;②若点数之差大于6,你回复1点体力',
                        gm_zhiluan: '制乱',
                        gm_zhiluan_info: '每回合限一次,当你回复体力时,你可以选择一名其他角色,你与其各弃置一张牌,①若弃置牌点数之差值小于6,你与其各摸两张牌;②若弃置牌点数之差值大于6,其失去1点体力',
                        gm_huikui: '回馈',
                        gm_huikui_info: '当你于回合外不以此法获得牌时,你可以展示两张牌并将这些牌交给至多两名其他角色,你从牌堆获得一张点数为X的牌(X为你以此法展示牌的点数之差)',
                        gm_huanzhu: '环铸',
                        gm_huanzhu_info: '锁定技,当一名角色使用【铁索连环】结算结束后,你摸两张牌,若其中包括♣️️牌,你弃置这些牌并横置等量名角色.一轮游戏开始时,你失去所有上一轮以此法获得的护甲并获得X点护甲值(X为上一轮结束时未处于横置状态的角色数)',
                        gm_zhuhun: '铸魂',
                        gm_zhuhun_info: '①其他角色出牌阶段限一次,其可以视为使用一张【铁索连环】;②一名角色的回合结束时,若其本回合未发动过〖铸魂①〗,其须交给你一张牌',
                        gm_quanzhao: '劝照',
                        gm_quanzhao_info: '出牌阶段限一次,你可以弃一张手牌并选择一名武将与其交换手牌:1.若交换后手牌数超过你的手牌上限,则你交给其X张牌;2.若交换后手牌数超过你已损失的体力值,则你回复一点体力并摸X张牌.此时你增加一点体力上限.(X为超过的手牌数)',
                        gm_cuican: '摧残',
                        gm_cuican_info: '限定技,出牌阶段,全场武将须弃一张红色基本牌或黑色锦囊牌,否则流失一点体力并交给你一张手牌.此时你升级【劝照】',
                        gm_douwu: '斗武',
                        gm_douwu_info: '锁定技,若你装备区有武器牌,则你使用杀时伤害加一;若你装备区有防具牌,则你使用闪时回一点体力',
                        gm_lianji: '连击',
                        gm_lianji_info: '出牌阶段,你可以与一名本轮没有被【连击】的武将进行拼点:若你赢,你对其使用一张无防具限制的杀;若你没赢,你获得对方的拼点牌',
                        gm_zhuihun: '追魂',
                        gm_zhuihun_info: '锁定技,当其他武将阵亡后,你选择一项:1.你获得该武将的所有手牌;2.从牌堆底获得阵亡武将数的牌.且此牌本回合不计入手牌',
                        gm_tongshun: '同顺',
                        gm_tongshun_info: '锁定技,所有武将的出牌阶段,等级一:若其未连续使用相同花色或点数时,其摸一张牌.等级二:若其连续使用相同花色或点数时,其摸一张牌',
                        gm_anyao: '暗幺',
                        gm_anyao_info: '转换技,牌堆重置时,令一名手牌数最多的武将进入濒死状态.阳:你升级【同顺】.阴:你降级【同顺】',
                        gm_zijue: '自决',
                        gm_zijue_info: '出牌阶段,你可以选择任意张手牌当决斗使用,若你因此造成伤害,则直到你下个回合开始,你使用杀指定目标后弃置其X张牌,若你因此受到伤害,令伤害来源手牌上限减X直到你下个回合开始.(X为你本次选择牌的数量)',
                        gm_huanhun: '还魂',
                        gm_huanhun_info: '锁定技,其他武将出牌阶段结束时,若其本轮因【自决】弃置过牌,则你回一点体力;若其本轮因【自决】减少手牌上限,则你摸其手牌数的牌',
                        gm_huanhua: '幻化',
                        gm_huanhua_info: '锁定技,游戏开始时,你获得场内任意一名角色的所有技能.体力为一时,减一点体力上限并升级【应变】',
                        gm_yingbian: '应变',
                        gm_yingbian_info: '等级一:你可以将一张武器牌视为杀使用或打出、防具牌视为闪使用或打出;等级二:你可以将一张牌视为杀或闪使用或打出',
                        gm_tihua: '替化',
                        gm_tihua_info: '限定技,濒死时回复一点体力并失去你获得的所有技能.另选择一名角色,获得其所有技能,且不能选择【幻化】过的角色',
                        gm_duyin: '毒印',
                        gm_duyin_info: '出牌阶段限X次,可以将一张手牌视为<毒印>牌交给一名武将.若如此做,其因其他武将失去该牌时,其失去一点体力.(X为势力数)',
                        gm_dumou: '毒谋',
                        gm_dumou_info: '锁定技,每名武将限一次,你交给相同武将<毒印>牌时,你摸三张牌.有武将因‘毒印’牌失去体力时,你进行判定:若为♥️️,则你回复一点体力',
                        gm_laibian: '赖变',
                        gm_laibian_info: '锁定技,若有武将是非延时锦囊牌的单一目标时,你也成为此牌的目标',
                        gm_moutu: '谋图',
                        gm_moutu_info: '出牌阶段,你使用锦囊牌时,若有其他武将是此牌的目标时,你可以观看牌顶X张牌并获得其中的基本牌(X为此牌的目标人数)',
                    },
                    skill: {
                        gm_shengdian: {
                            enable: 'phaseUse',
                            usable: 1,
                            delay: 0.5,
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    return 1;
                                }).judge2 = function (result) {
                                    return true;
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.addTempSkill(result.color == 'red' ? 'new_rewusheng' : 'gm_wudian');
                                }
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        gm_wudian: {
                            enable: 'chooseToUse',
                            filter(event, player) {
                                return player.hasCard((card) => get.color(card) == 'black' && lib.filter.cardDiscardable(card, player), 'he') && lib.inpile.some((name) => get.type(name) == 'trick' && !player.hasHistory('useCard', (evt) => evt.skill == 'gm_wudian_backup' && evt.card.name == name) && event.filterCard({ name: name }, player, event));
                            },
                            hiddenCard(player, name) {
                                return player.hasCard((card) => get.color(card) == 'black' && lib.filter.cardDiscardable(card, player), 'he') && get.type(name) == 'trick' && !player.hasHistory('useCard', (evt) => evt.skill == 'gm_wudian_backup' && evt.card.name == name);
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    return ui.create.dialog(get.prompt('gm_wudian'), [lib.inpile.filter((name) => get.type(name) == 'trick' && !player.hasHistory('useCard', (evt) => evt.skill == 'gm_wudian_backup' && evt.card.name == name) && event.filterCard({ name: name }, player, event)), 'vcard'], 'hidden');
                                },
                                check(button) {
                                    return _status.event.player.getUseValue({ name: button.link[2] });
                                },
                                backup(links, player) {
                                    return {
                                        popname: true,
                                        filterCard(card) {
                                            return get.color(card) == 'black' && lib.filter.cardDiscardable(card, player);
                                        },
                                        position: 'he',
                                        check: (card) => 6 - get.value(card),
                                        viewAs: { name: links[0][2] },
                                        precontent() {
                                            player.discard(event.result.cards);
                                            event.result.cards = [];
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '弃置一张黑色牌视为使用【' + get.translation(links[0][2]) + '】';
                                },
                            },
                            ai: {
                                order: 5,
                                result: {
                                    player: 1,
                                },
                            },
                            intro: {
                                content() {
                                    return get.translation(skill + '_info');
                                },
                            },
                        },
                        gm_longhun: {
                            forced: true,
                            juexingji: true,
                            trigger: {
                                player: 'dying',
                            },
                            filter(event, player) {
                                return player.hp <= 0;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill(event.name);
                                player.loseMaxHp();
                                ('step 1');
                                player.recover(1 - player.hp);
                                ('step 2');
                                if (player.countCards('h')) {
                                    player.chooseCard([1, Math.min(3, player.countCards('h'))], 'h', '选择要重铸的牌').set('ai', function (card) {
                                        return 5 - get.value(card);
                                    });
                                } else event.goto(4);
                                ('step 3');
                                if (result.bool) {
                                    player.loseToDiscardpile(result.cards).delay = false;
                                    player.draw(result.cards.length);
                                }
                                ('step 4');
                                player.addSkillLog('reyingzi');
                                player.addSkillLog('lianying');
                                player.addSkill('gm_longhun_effect');
                            },
                            subSkill: {
                                effect: {
                                    mod: {
                                        cardname(card, player, name) {
                                            if (card.name == 'tao') return 'sha';
                                            if (card.name == 'taoyuan') return 'juedou';
                                        },
                                    },
                                    silent: true,
                                    charlotte: true,
                                    trigger: {
                                        player: 'damageBegin2',
                                    },
                                    filter(event, player) {
                                        return event.num >= 1;
                                    },
                                    content() {
                                        trigger.cancel();
                                        player.loseMaxHp(trigger.num);
                                    },
                                    forced: true,
                                    popup: false,
                                },
                            },
                        },
                        gm_juefang: {
                            forced: true,
                            firstDo: true,
                            trigger: {
                                player: 'damageBegin3',
                            },
                            filter(event, player) {
                                return event.nature == 'fire';
                            },
                            content() {
                                trigger.num++;
                            },
                            ai: {
                                fireAttack: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'fireDamage') && current < 0) return 2;
                                    },
                                },
                            },
                            group: ['gm_juefang_1', 'gm_juefang_2', 'gm_juefang_3'],
                            subSkill: {
                                1: {
                                    name: '藤甲',
                                    inherit: 'tengjia1',
                                    filter(event, player) {
                                        return player.isEmpty(2) && lib.skill['tengjia1'].filter(event, player);
                                    },
                                    equipSkill: true,
                                    trigger: {
                                        target: ['useCardToBefore'],
                                    },
                                    forced: true,
                                    priority: 6,
                                    audio: true,
                                    content() {
                                        trigger.cancel();
                                    },
                                    ai: {
                                        effect: {
                                            target(card, player, target, current) {
                                                if (target.hasSkillTag('unequip2')) return;
                                                if (
                                                    player.hasSkillTag('unequip', false, {
                                                        name: card ? card.name : null,
                                                        target: target,
                                                        card: card,
                                                    }) ||
                                                    player.hasSkillTag('unequip', false, {
                                                        name: card ? card.name : null,
                                                        target: target,
                                                        card: card,
                                                    })
                                                )
                                                    return;
                                                //if(card.name=='nanman'||card.name=='wanjian'||card.name=='chuqibuyi') return 'zerotarget';
                                                if (card.name == 'nanman' || card.name == 'wanjian') return 'zerotarget';
                                                if (card.name == 'sha') {
                                                    var equip1 = player.getEquip(1);
                                                    if (equip1 && equip1.name == 'zhuque') return 1.9;
                                                    if (!card.nature) return 'zerotarget';
                                                }
                                            },
                                        },
                                    },
                                },
                                2: {
                                    name: '藤甲',
                                    inherit: 'tengjia2',
                                    filter(event, player) {
                                        return player.isEmpty(2) && lib.skill['tengjia2'].filter(event, player);
                                    },
                                    equipSkill: true,
                                    trigger: {
                                        player: 'damageBegin3',
                                    },
                                    audio: true,
                                    forced: true,
                                    content() {
                                        trigger.num++;
                                    },
                                    ai: {
                                        fireAttack: true,
                                        effect: {
                                            target(card, player, target, current) {
                                                if (card.name == 'sha') {
                                                    if (card.nature == 'fire') return 2;
                                                    if (player.hasSkill('zhuque_skill')) return 1.9;
                                                }
                                                if (get.tag(card, 'fireDamage') && current < 0) return 2;
                                            },
                                        },
                                    },
                                },
                                3: {
                                    name: '藤甲',
                                    inherit: 'tengjia3',
                                    filter(event, player) {
                                        return player.isEmpty(2) && lib.skill['tengjia3'].filter(event, player);
                                    },
                                    equipSkill: true,
                                    audio: 'tengjia1',
                                    trigger: {
                                        target: 'shaBefore',
                                    },
                                    forced: true,
                                    content() {
                                        trigger.cancel();
                                    },
                                },
                            },
                            intro: {
                                content() {
                                    return get.translation(skill + '_info');
                                },
                            },
                        },
                        gm_renjie: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                var filterCard = lib.skill['gm_renjie'].filterCard;
                                return player.hasCard((card) => filterCard(card, player), 'he');
                            },
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            selectTarget: () => ui.selected.cards.length,
                            multitarget: true,
                            multiline: true,
                            filterCard(card, player) {
                                return lib.filter.cardDiscardable(card, player);
                            },
                            selectCard: [1, Infinity],
                            position: 'he',
                            delay: 0.5,
                            check: (card) => 5 - get.value(card),
                            content() {
                                'step 0';
                                targets.sortBySeat();
                                ('step 1');
                                if (targets.length) {
                                    var target = targets.shift();
                                    target
                                        .chooseToUse(
                                            function (card, player, event) {
                                                if (card.name != 'sha') return false;
                                                return lib.filter.filterCard.apply(this, arguments);
                                            },
                                            '对' + get.translation(player) + '使用一张杀,或令其获得你' + get.cnNumber(cards.length) + '张装备区里的牌'
                                        )
                                        .set('filterTarget', function (card, player, target) {
                                            if (target != _status.event.source && !ui.selected.targets.includes(_status.event.source)) return false;
                                            return lib.filter.filterTarget.apply(this, arguments);
                                        })
                                        .set('source', player)
                                        .set('targetRequired', true)
                                        .set('complexSelect', true);
                                    event.target = target;
                                } else event.finish();
                                ('step 2');
                                if (!result.bool && target.countGainableCards(player, 'e')) {
                                    player.gainPlayerCard(target, cards.length, true, 'e').boolline = true;
                                }
                                event.goto(1);
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target: -1,
                                },
                            },
                            intro: {
                                content() {
                                    return get.translation(skill + '_info');
                                },
                            },
                        },
                        gm_fansha: {
                            forced: true,
                            juexingji: true,
                            trigger: {
                                player: 'dying',
                            },
                            filter(event, player) {
                                return player.hp <= 0;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill(event.name);
                                player.maxHp = 6;
                                player.update();
                                ('step 1');
                                player.hp = player.maxHp;
                                player.removeSkill('gm_juefang');
                                player.addSkill('gm_fansha_effect');
                                player.addSkill('gm_yusha');
                            },
                            subSkill: {
                                effect: {
                                    silent: true,
                                    charlotte: true,
                                    trigger: {
                                        player: 'damageBegin4',
                                    },
                                    filter(event, player) {
                                        return event.nature == 'fire';
                                    },
                                    content() {
                                        trigger.cancel();
                                    },
                                    ai: {
                                        nofire: true,
                                        effect: {
                                            target(card, player, target, current) {
                                                if (get.tag(card, 'fireDamage')) return 'zerotarget';
                                            },
                                        },
                                    },
                                    forced: true,
                                    popup: false,
                                },
                            },
                            intro: {
                                content() {
                                    return get.translation(skill + '_info');
                                },
                            },
                        },
                        gm_yusha: {
                            forced: true,
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                return get.type(event.card) == 'equip' || (get.type(event.card) == 'trick' && get.tag(event.card, 'damage'));
                            },
                            content() {
                                if (get.type(trigger.card) == 'equip') {
                                    var card = get.cardPile2((card) => get.type2(card) == 'trick');
                                    if (card) player.gain(card, 'gain2');
                                } else {
                                    trigger.baseDamage++;
                                }
                            },
                        },
                        gm_huayin: {
                            onremove(player, skill) {
                                player.removeMark(skill, player.countMark(skill));
                            },
                            forced: true,
                            trigger: {
                                source: 'damageBegin1',
                                player: ['enterGame', 'damageBegin3'],
                                global: 'phaseBefore',
                            },
                            filter(event, player) {
                                if (event.name == 'damage') return true;
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            content() {
                                player.addMark(event.name, trigger.name == 'damage' ? 1 : 2);
                            },
                            marktext: '化',
                            intro: {
                                name: '化',
                                content: 'mark',
                            },
                        },
                        gm_huaji: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                var filterTarget = lib.skill['gm_huaji'].filterTarget;
                                return player.hasMark('gm_huayin') && game.hasPlayer((target) => filterTarget(null, player, target));
                            },
                            filterTarget(card, player, target) {
                                return target != player && target.getSkills(null, false, true).filter((skill) => !lib.skill[skill].unique && lib.character[target.name][3].includes(skill)).length;
                            },
                            content() {
                                player.removeMark('gm_huayin');
                                var skills = target.getSkills(null, false, true).filter((skill) => !lib.skill[skill].unique && lib.character[target.name][3].includes(skill));
                                for (var skill of skills) {
                                    player.addTempSkill(skill);
                                    player.popup(skill, 'thunder');
                                    game.log(player, '获得了技能', '#g【' + get.translation(skill) + '】');
                                }
                            },
                            ai: {
                                order: 5,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        gm_shihua: {
                            forced: true,
                            juexingji: true,
                            trigger: {
                                player: ['changeHp', 'loseMaxHpAfter', 'gm_huayinAfter'],
                            },
                            filter(event, player) {
                                if (event.name == 'gm_huayin') return player.countMark('gm_huayin') >= 10;
                                if (event.name == 'loseMaxHp' && !event.loseHp) return false;
                                if (event.name == 'changeHp' && event.name >= 0) return false;
                                return player.hp == 1;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill(event.name);
                                ('step 1');
                                player.loseMaxHp();
                                player.removeSkill('gm_huayin');
                                player.removeSkill('gm_huaji');
                                player.addSkillLog('gm_wanhua');
                                player.addSkillLog('lianying');
                            },
                            derivation: ['gm_wanhua', 'lianying'],
                        },
                        gm_wanhua: {
                            enable: 'chooseToUse',
                            filter(event, player) {
                                return player.hasCard((card) => lib.inpile.some((name) => get.type(name) != 'equip' && !player.hasHistory('useCard', (evt) => evt.skill == 'gm_wanhua_backup' && evt.card.name == name) && event.filterCard({ name: name }, player, event)), 'hs');
                            },
                            hiddenCard(player, name) {
                                return get.type(name) != 'equip' && player.countCards('hs');
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    for (var name of lib.inpile) {
                                        if (get.type(name) == 'equip' || player.hasHistory('useCard', (evt) => evt.skill == 'gm_wanhua_backup' && evt.card.name == name)) continue;
                                        if (event.filterCard && event.filterCard({ name: name }, player, event)) {
                                            list.push([get.translation(get.type2(name)), '', name]);
                                            if (name == 'sha') {
                                                for (var nature of lib.inpile_nature) {
                                                    if (event.filterCard && event.filterCard({ name: name, nature: nature }, player, event)) {
                                                        list.push(['基本', '', 'sha', nature]);
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    return ui.create.dialog(get.prompt('gm_wanhua'), [list, 'vcard'], 'hidden');
                                },
                                check(button) {
                                    return _status.event.player.getUseValue({ name: button.link[2], nature: button.link[3] });
                                },
                                backup(links, player) {
                                    return {
                                        name: '万化',
                                        popname: true,
                                        filterCard: true,
                                        position: 'hs',
                                        check: (card) => 8 - get.value(card),
                                        viewAs: {
                                            name: links[0][2],
                                            nature: links[0][3],
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '将一张手牌当做' + (get.translation(links[0][3]) || '') + '【' + get.translation(links[0][2]) + '】使用';
                                },
                            },
                            ai: {
                                respondSha: true,
                                respondShan: true,
                                skillTagFilter(player, tag, arg) {
                                    var name = tag == 'respondSha' ? 'sha' : 'shan';
                                    if (arg != 'use' || !player.countCards('hs') || player.hasHistory('useCard', (evt) => evt.skill == 'gm_wanhua_backup' && evt.card.name == name)) return false;
                                },
                                order: 1,
                                result: {
                                    player(player) {
                                        if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                        return 1;
                                    },
                                },
                            },
                        },
                        gm_zhicai: {
                            forced: true,
                            trigger: {
                                player: ['phaseUseBegin', 'phaseDiscardEnd'],
                            },
                            skillList: {
                                heart: {
                                    diamond: ['retieji', 'olpaoxiao'],
                                    spade: ['reganglie', 'jijiu'],
                                    club: ['qixi', 'reluanwu'],
                                },
                                diamond: {
                                    spade: ['bazhen', 'refankui'],
                                    club: ['aocai', 'lianying'],
                                },
                                spade: {
                                    club: ['xinleiji', 'xinguidao'],
                                },
                            },
                            content() {
                                'step 0';
                                event.suits = [];
                                ('step 1');
                                if (event.suits.length < 2) {
                                    player.judge(function (card) {
                                        if (event.suits.length && card.suit == event.suits[0]) return -1;
                                        return 1;
                                    }).judge2 = function (result) {
                                        return result.bool;
                                    };
                                } else event.goto(3);
                                ('step 2');
                                if (result.bool) {
                                    event.suits.push(result.suit);
                                    event.goto(1);
                                } else event.finish();
                                ('step 3');
                                var suits = event.suits.sort((a, b) => lib.suit.indexOf(b) - lib.suit.indexOf(a));
                                for (var skill of lib.skill[event.name].skillList[suits[0]][suits[1]]) {
                                    player.addTempSkill(skill, { player: event.name + 'Begin' });
                                }
                            },
                            intro: {
                                content() {
                                    return get.translation(skill + '_info');
                                },
                            },
                        },
                        gm_yuanshang: {
                            forced: true,
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                return get.type(event.card) == 'trick';
                            },
                            content() {
                                'step 0';
                                if (player.hasMark(event.name)) {
                                    player.chooseControlList(['失去1点体力', '移去一枚<怨>'], true).set('ai', function (event, player) {
                                        if (get.effect(player, { name: 'losehp' }, player, player) >= 0) return 0;
                                        if (player.countMark('gm_yuanshang') > 3) return 1;
                                        if (player.hp + player.num('h', 'tao') > 3) return 0;
                                        return 1;
                                    });
                                } else {
                                    event._result = { control: 'auto', index: 0 };
                                }
                                ('step 1');
                                if (result.index) {
                                    player.removeMark(event.name);
                                } else {
                                    player.loseHp();
                                }
                            },
                            marktext: '怨',
                            intro: {
                                name: '怨',
                                content: 'mark',
                            },
                            ai: {
                                effect: {
                                    player_use(card, player) {
                                        if (get.type(card) == 'trick' && get.value(card) < 6) {
                                            return [0, -2];
                                        }
                                    },
                                },
                            },
                            group: ['gm_yuanshang_init', 'gm_yuanshang_damage'],
                            subSkill: {
                                init: {
                                    forced: true,
                                    trigger: {
                                        player: 'enterGame',
                                        global: 'phaseBefore',
                                    },
                                    filter(event, player) {
                                        return event.name != 'phase' || game.phaseNumber == 0;
                                    },
                                    content() {
                                        player.addMark('gm_yuanshang');
                                    },
                                },
                                damage: {
                                    forced: true,
                                    trigger: {
                                        source: 'damageBegin1',
                                        player: 'damageBegin3',
                                    },
                                    filter(event, player, name) {
                                        if (name == 'damageBegin1' && event.parent.skill == 'gm_chongfeng') return false;
                                        return true;
                                    },
                                    content() {
                                        player.addMark('gm_yuanshang');
                                    },
                                },
                            },
                        },
                        gm_chongfeng: {
                            enable: 'phaseUse',
                            log: false,
                            filter(event, player) {
                                return player.countMark('gm_yuanshang') > 2;
                            },
                            filterCard: () => false,
                            selectCard: -1,
                            prompt: '移去三枚<怨>并视为使用一张无视防具的【杀】',
                            viewAs: {
                                name: 'sha',
                                storage: {
                                    gm_chongfeng: true,
                                },
                            },
                            precontent() {
                                player.removeMark('gm_yuanshang', 3);
                            },
                            ai: {
                                unequip: true,
                                unequip: true,
                                skillTagFilter(player, tag, arg) {
                                    if (tag == 'unequip') {
                                        if (_status.event.name != 'gm_chongfeng') return false;
                                    } else {
                                        if (!arg || !arg.card || !arg.card.storage || !arg.card.storage['gm_chongfeng']) return false;
                                    }
                                },
                                order(item, player) {
                                    if (player.hasSkill('new_rewusheng') && player.hasSkill('olpaoxiao')) return 1;
                                    if (player.countMark('gm_yuanshang') < 3 && !player.hasSkill('gm_tianyi')) return 1;
                                    return 4;
                                },
                                result: {
                                    player: 1,
                                    target(player, target, card, isLink) {
                                        var eff = (function () {
                                            if (!isLink && player.hasSkill('jiu')) {
                                                if (
                                                    !target.hasSkillTag('filterDamage', null, {
                                                        player: player,
                                                        card: card,
                                                        jiu: true,
                                                    })
                                                ) {
                                                    if (get.attitude(player, target) > 0) {
                                                        return -7;
                                                    } else {
                                                        return -4;
                                                    }
                                                }
                                                return -0.5;
                                            }
                                            return -1.5;
                                        })();
                                        if (
                                            !isLink &&
                                            target.mayHaveShan() &&
                                            !player.hasSkillTag(
                                                'directHit_ai',
                                                true,
                                                {
                                                    target: target,
                                                    card: card,
                                                },
                                                true
                                            )
                                        )
                                            return eff / 1.2;
                                        return eff;
                                    },
                                },
                                yingbian(card, player, targets, viewer) {
                                    if (get.attitude(viewer, player) <= 0) return 0;
                                    var base = 0,
                                        hit = false;
                                    if (get.cardtag(card, 'yingbian_hit')) {
                                        hit = true;
                                        if (
                                            targets.filter(function (target) {
                                                return target.hasShan() && get.attitude(viewer, target) < 0 && get.damageEffect(target, player, viewer, get.nature(card)) > 0;
                                            })
                                        )
                                            base += 5;
                                    }
                                    if (get.cardtag(card, 'yingbian_all')) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return !targets.includes(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
                                            })
                                        )
                                            base += 5;
                                    }
                                    if (get.cardtag(card, 'yingbian_damage')) {
                                        if (
                                            targets.filter(function (target) {
                                                return (
                                                    get.attitude(player, target) < 0 &&
                                                    (hit ||
                                                        !target.mayHaveShan() ||
                                                        player.hasSkillTag(
                                                            'directHit_ai',
                                                            true,
                                                            {
                                                                target: target,
                                                                card: card,
                                                            },
                                                            true
                                                        )) &&
                                                    !target.hasSkillTag('filterDamage', null, {
                                                        player: player,
                                                        card: card,
                                                        jiu: true,
                                                    })
                                                );
                                            })
                                        )
                                            base += 5;
                                    }
                                    return base;
                                },
                                canLink(player, target, card) {
                                    if (!target.isLinked() && !player.hasSkill('wutiesuolian_skill')) return false;
                                    if (
                                        target.mayHaveShan() &&
                                        !player.hasSkillTag(
                                            'directHit_ai',
                                            true,
                                            {
                                                target: target,
                                                card: card,
                                            },
                                            true
                                        )
                                    )
                                        return false;
                                    if (player.hasSkill('jueqing') || player.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
                                    return true;
                                },
                                basic: {
                                    useful: [5, 3, 1],
                                    value: [5, 3, 1],
                                },
                                tag: {
                                    respond: 1,
                                    respondShan: 1,
                                    damage(card) {
                                        if (card.nature == 'poison') return;
                                        return 1;
                                    },
                                    natureDamage(card) {
                                        if (card.nature) return 1;
                                    },
                                    fireDamage(card, nature) {
                                        if (card.nature == 'fire') return 1;
                                    },
                                    thunderDamage(card, nature) {
                                        if (card.nature == 'thunder') return 1;
                                    },
                                    poisonDamage(card, nature) {
                                        if (card.nature == 'poison') return 1;
                                    },
                                },
                            },
                            group: 'gm_chongfeng_effect',
                            subSkill: {
                                effect: {
                                    forced: true,
                                    trigger: {
                                        source: 'damageSource',
                                    },
                                    filter(event, player) {
                                        return event.parent.skill == 'gm_chongfeng' && ['new_rewusheng', 'olpaoxiao'].some((skill) => !player.hasSkill(skill));
                                    },
                                    content() {
                                        if (!player.hasSkill('new_rewusheng')) player.addTempSkill('new_rewusheng');
                                        if (!player.hasSkill('olpaoxiao')) player.addTempSkill('olpaoxiao');
                                    },
                                },
                            },
                        },
                        gm_fengsheng: {
                            forced: true,
                            juexingji: true,
                            trigger: {
                                player: 'dying',
                            },
                            filter(event, player) {
                                return player.countMark('gm_yuanshang') >= 3;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill(event.name);
                                player.loseMaxHp();
                                ('step 1');
                                player.recover(2);
                                player.addSkillLog('gm_tianyi');
                                player.addSkill('gm_fengsheng_effect');
                            },
                            derivation: 'gm_tianyi',
                            subSkill: {
                                effect: {
                                    silent: true,
                                    charlotte: true,
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    filter(event, player) {
                                        return event.card.name == 'tao';
                                    },
                                    content() {
                                        trigger.baseDamage++;
                                    },
                                    forced: true,
                                    popup: false,
                                },
                            },
                        },
                        gm_tianyi: {
                            forced: true,
                            trigger: {
                                global: 'phaseBegin',
                            },
                            filter(event, player) {
                                return event.player.countCards('j');
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                if (player.hasCard((card) => lib.filter.cardDiscardable(card, player), 'h')) {
                                    player.chooseControlList(['弃置一张手牌并执行判定牌的效果', '摸一张牌并获得判定牌'], true).set('ai', function () {
                                        return get.attitude(player, trigger.player) > 0 ? 1 : 0;
                                    });
                                } else {
                                    event._result = { control: 'auto', index: 1 };
                                }
                                ('step 1');
                                var cards = trigger.player.getCards('j');
                                if (result.index) {
                                    player.draw('nodelay');
                                    player.gain(cards, trigger.player, 'give');
                                    event.finish();
                                }
                                event.cards = cards;
                                ('step 2');
                                player.chooseToDiscard('天意:弃置一张手牌', 'h', true).set('ai', function (card) {
                                    return 5 - get.value(card);
                                });
                                ('step 3');
                                trigger.player.discard(cards);
                                ('step 4');
                                var card = cards.shift();
                                event.card = { name: card.viewAs || card.name };
                                ('step 5');
                                trigger.player.judge(card.name, lib.card[card.name].judge).judge2 = lib.card[card.name].judge2;
                                ('step 6');
                                if (event.cancelled && !event.direct) {
                                    if (lib.card[card.name].cancel) {
                                        var next = game.createEvent(card.name + 'Cancelled');
                                        next.setContent(lib.card[card.name].cancel);
                                        next.card = card;
                                        next.cards = [];
                                        next.player = trigger.player;
                                    }
                                } else {
                                    var next = game.createEvent(card.name);
                                    next.setContent(lib.card[card.name].effect);
                                    next._result = result;
                                    next.card = card;
                                    next.card.expired = true;
                                    next.cards = [];
                                    next.player = trigger.player;
                                }
                                ('step 7');
                                if (cards.length) event.goto(4);
                            },
                        },
                        gm_shenwu: {
                            mod: {
                                cardEnabled(card, player) {
                                    if (get.subtype(card) == 'equip2') return false;
                                },
                            },
                            forced: true,
                            trigger: {
                                player: 'equipBefore',
                            },
                            filter(trigger, player) {
                                return get.subtype(trigger.card) == 'equip2' || (get.subtype(trigger.card) == 'equip1' && player.countCards('e', { subtype: 'equip1' }));
                            },
                            async content(event, trigger, player) {
                                trigger.cancel();
                                const card = trigger.cards[0];
                                if (card) {
                                    const vcard = new lib.element.VCard(card);
                                    const cardSymbol = Symbol('card');
                                    card.cardSymbol = cardSymbol;
                                    card[cardSymbol] = vcard;
                                    player.vcardsMap?.equips.push(vcard);
                                    player.node.equips.appendChild(card);
                                    card.style.transform = '';
                                    card.node.name2.innerHTML = `${get.translation(card.suit)}${card.number} ${get.translation(card.name)}`;
                                }
                                const info = get.info(card, false);
                                if (info.skills) {
                                    for (const i of info.skills) {
                                        player.addSkillTrigger(i);
                                    }
                                }
                                const cards = player.getCards('e', { subtype: get.subtype(card) });//没有trigger.card
                                const num = cards.length - 2;
                                if (num > 0) {
                                    const { links } = await player.chooseButton(['选择弃置', cards], num, true).forResult();
                                    if (links.length) {
                                        player.discard(links);
                                    }
                                }
                            },
                            intro: {
                                content() {
                                    return get.translation(skill + '_info');
                                },
                            },
                        },
                        gm_qiupo: {
                            usable: 1,
                            trigger: {
                                source: 'damageSource',
                                player: 'damageEnd',
                            },
                            filter(trigger, player, triggername) {
                                if (triggername == 'damageSource') return trigger.player.countCards('h');
                                return trigger.source && trigger.source.countCards('h');
                            },
                            logTarget(trigger, player) {
                                return _status.event.triggername == 'damageSource' ? trigger.player : trigger.source;
                            },
                            prompt2(trigger, player) {
                                var target = lib.skill['gm_qiupo'].logTarget.apply(this, arguments);
                                return '你可以从牌堆底摸' + target.countCards('h') + '张牌';
                            },
                            content() {
                                var target = event.triggername == 'damageSource' ? trigger.player : trigger.source;
                                player.draw(target.countCards('h'), 'bottom').gaintag = [event.name];
                                player.addTempSkill('gm_qiupo_ignore');
                            },
                            subSkill: {
                                ignore: {
                                    mod: {
                                        ignoredHandcard(card, player) {
                                            if (card.hasGaintag('gm_qiupo')) return true;
                                        },
                                        cardDiscardable(card, player, event) {
                                            if (card.hasGaintag('gm_qiupo') && event == 'phaseDiscard') return false;
                                        },
                                    },
                                    onremove(player) {
                                        player.removeGaintag('gm_qiupo');
                                    },
                                },
                            },
                            intro: {
                                content() {
                                    return get.translation(skill + '_info');
                                },
                            },
                        },
                        gm_wuluan: {
                            enable: 'phaseUse',
                            limited: true,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            selectTarget: -1,
                            multitarget: true,
                            multiline: true,
                            content() {
                                'step 0';
                                player.awakenSkill(event.name);
                                event.num = 0;
                                ('step 1');
                                if (event.num < targets.length) {
                                    targets[event.num++].loseHp();
                                    event.redo();
                                } else event.num = 0;
                                ('step 2');
                                if (event.num < targets.length) {
                                    var target = targets[event.num++];
                                    target.chooseControlList('武乱:选择一项', ['弃置所有牌', '受到1点伤害'], true).set('ai', function () {
                                        if (get.damageEffect(target, player, target) >= 0) return 1;
                                        if (target.hp >= 3 && target.countCards('he') >= 2) return 1;
                                        return 0;
                                    });
                                    event.target = target;
                                } else event.finish();
                                ('step 3');
                                if (result.index) target.damage('nocard');
                                else target.discard(target.getCards('he'));
                                event.goto(2);
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player(player) {
                                        if (lib.config.mode == 'identity' && game.zhu.isZhu && player.identity == 'fan') {
                                            if (game.zhu.hp == 1 && game.zhu.countCards('h') <= 2) return 1;
                                        }
                                        var num = 0;
                                        var players = game.filterPlayer();
                                        for (var i = 0; i < players.length; i++) {
                                            var att = get.attitude(player, players[i]);
                                            if (att > 0) att = 1;
                                            if (att < 0) att = -1;
                                            if (players[i] != player && players[i].hp <= 3) {
                                                if (players[i].countCards('h') == 0) num += att / players[i].hp;
                                                else if (players[i].countCards('h') == 1) num += att / 2 / players[i].hp;
                                                else if (players[i].countCards('h') == 2) num += att / 4 / players[i].hp;
                                            }
                                            if (players[i].hp == 1) num += att * 1.5;
                                        }
                                        if (player.hp == 1) return -num;
                                        if (player.hp == 2) return -game.players.length / 4 - num;
                                        return -game.players.length / 3 - num;
                                    },
                                },
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        gm_boshi: {
                            forced: true,
                            trigger: {
                                player: ['enterGame', 'useCard'],
                                global: 'phaseBefore',
                            },
                            filter(event, player) {
                                if (event.name == 'useCard') return true;
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            logTarget(event, player) {
                                if (event.name != 'useCard') return game.filterPlayer();
                            },
                            content() {
                                if (trigger.name == 'useCard') {
                                    var type = get.type2(trigger.card);
                                    player[type == 'equip' ? 'removeMark' : 'addMark'](event.name, type == 'equip' ? 2 : type == 'basic' ? 1 : 3);
                                } else {
                                    game.filterPlayer()
                                        .sortBySeat()
                                        .forEach((target) => target.addMark(event.name, 4));
                                }
                            },
                            marktext: '博',
                            intro: {
                                name: '博',
                                content: 'mark',
                            },
                        },
                        gm_bocai: {
                            usable: 1,
                            trigger: {
                                global: 'damageBegin3',
                            },
                            check(event, player) {
                                return game.hasPlayer((target) => get.recoverEffect(target, player, player));
                            },
                            content() {
                                'step 0';
                                if (trigger.player.countMark('gm_boshi') >= 2) {
                                    player.line(trigger.player);
                                    trigger.player.removeMark('gm_boshi', 2);
                                    event.goto(2);
                                } else {
                                    if (player.countMark('gm_boshi') >= 4) {
                                        player.chooseControlList('博才:选择一项', ['失去1点体力', '移去4枚<博>'], true).set('ai', function () {
                                            return 1;
                                        });
                                    } else event._result = { control: 'auto', index: 0 };
                                }
                                ('step 1');
                                if (result.index) {
                                    player.removeMark('gm_boshi', 4);
                                } else {
                                    player.loseHp();
                                }
                                ('step 2');
                                if (game.hasPlayer((target) => target.isDamaged())) {
                                    player
                                        .chooseTarget(
                                            '博才:令一名角色回复1点体力',
                                            function (card, player, target) {
                                                return target.isDamaged();
                                            },
                                            true
                                        )
                                        .set('ai', function (target) {
                                            return get.recoverEffect(target, player, player);
                                        });
                                } else event.finish();
                                ('step 3');
                                var target = result.targets[0];
                                player.line(target, 'green');
                                target.recover();
                            },
                            group: 'gm_bocai_extra',
                            subSkill: {
                                extra: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    filter(event, player) {
                                        return player.countMark('gm_boshi') >= Math.floor(game.countPlayer() * 2);
                                    },
                                    check: () => false,
                                    content() {
                                        var targets = game.filterPlayer().sortBySeat();
                                        player.removeMark('gm_boshi', targets.length * 2);
                                        targets.forEach(function (target) {
                                            player.line(target);
                                            target.addMark('gm_boshi', 2);
                                        });
                                    },
                                },
                            },
                        },
                        gm_boxue: {
                            juexingji: true,
                            trigger: {
                                player: 'dying',
                            },
                            filter(event, player) {
                                return !player.hp;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill(event.name);
                                player.gainMaxHp();
                                ('step 1');
                                player.hp = player.maxHp;
                                player.addSkill('gm_boxue_effect');
                            },
                            subSkill: {
                                effect: {
                                    forced: true,
                                    charlotte: true,
                                    trigger: {
                                        global: 'die',
                                    },
                                    filter(event, player) {
                                        return event.player != player;
                                    },
                                    content() {
                                        'step 0';
                                        if (trigger.player.hasMark('gm_boshi')) {
                                            player.chooseBool(get.prompt(event.name, trigger.player), '获得其所有<博>').set('ai', () => true);
                                        } else {
                                            player.loseHp();
                                            event.finish();
                                        }
                                        ('step 1');
                                        if (result.bool) {
                                            var num = trigger.player.countMark('gm_boshi');
                                            trigger.player.removeMark('gm_boshi', num);
                                            player.addMark('gm_boshi', num);
                                        }
                                    },
                                },
                            },
                        },
                        gm_wulai: {
                            forced: true,
                            trigger: {
                                player: 'damageBegin3',
                            },
                            filter(event, player) {
                                return event.source && event.source != player && event.source.countCards('h') && player.countCards('h');
                            },
                            content() {
                                'step 0';
                                var next = player.chooseCardOL([player, trigger.source], '无赖:请选择要展示的牌', true).set('ai', function (card) {
                                    return 1 + Math.random();
                                });
                                next.aiCard = function (target) {
                                    return { cards: [target.getCards('h').randomGet()], bool: true };
                                };
                                next._args.remove('glow_result');
                                ('step 1');
                                var cards = result.reduce((cards, result) => cards.add(result.cards[0]), []);
                                game.broadcastAll(function () {
                                    ui.arena.classList.add('thrownhighlight');
                                });
                                game.addVideo('thrownhighlight1');
                                player.$compare(cards[0], trigger.source, cards[1]);
                                event.cards = cards;
                                ('step 2');
                                game.log(player, '展示了', cards[0]);
                                game.log(trigger.source, '展示了', cards[1]);
                                game.broadcastAll(function () {
                                    ui.arena.classList.remove('thrownhighlight');
                                });
                                game.addVideo('thrownhighlight2');
                                ('step 3');
                                var num = Math.abs(cards[0].number - cards[1].number);
                                if (num < 6) {
                                    player.draw(2);
                                } else {
                                    if (num > 6 && player.isDamaged()) {
                                        player.recover();
                                    }
                                }
                            },
                        },
                        gm_zhiluan: {
                            usable: 1,
                            forced: true,
                            trigger: {
                                player: 'recoverEnd',
                            },
                            filter(event, player) {
                                var cardDiscardable = lib.filter.cardDiscardable;
                                return player.hasCard((card) => cardDiscardable(card, player), 'he') && game.hasPlayer((target) => target != player && target.hasCard((card) => cardDiscardable(card, target), 'he'));
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2(event.name), function (card, player, target) {
                                        return target != player && target.hasCard((card) => lib.filter.cardDiscardable(card, target), 'he');
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    event.target = target;
                                } else {
                                    player.getStat('triggerSkill')[event.name]--;
                                    event.finish();
                                }
                                ('step 2');
                                var next = player
                                    .chooseCardOL(
                                        [player, target],
                                        '制乱:选择弃置一张牌',
                                        function (card, player) {
                                            return lib.filter.cardDiscardable(card, player);
                                        },
                                        true
                                    )
                                    .set('ai', get.unuseful);
                                next.aiCard = function (target) {
                                    return {
                                        cards: [target.getCards('he').sort((a, b) => get.value(a, target) - get.value(b, target))[0]],
                                        bool: true,
                                    };
                                };
                                ('step 3');
                                var lose_list = [];
                                for (var rslt of result) lose_list.push([get.owner(rslt.cards[0]), rslt.cards]);
                                game.loseAsync({ lose_list: lose_list }).setContent('discardMultiple');
                                event.cards = lose_list.reduce((cards, list) => cards.add(list[1][0]), []);
                                ('step 4');
                                var num = Math.abs(cards[0].number - cards[1].number);
                                if (num < 6) {
                                    game.asyncDraw([player, target], 2);
                                } else {
                                    if (num > 6) {
                                        target.loseHp();
                                    }
                                }
                            },
                        },
                        gm_huikui: {
                            forced: true,
                            trigger: {
                                player: 'gainEnd',
                            },
                            filter(event, player) {
                                return _status.currentPhase != player && player.countCards('he') >= 2 && event.parent.name != 'gm_huikui';
                            },
                            content() {
                                'step 0';
                                player.chooseCard(2, 'he', get.prompt2(event.name)).set('ai', function (card) {
                                    return game.hasPlayer(function (target) {
                                        var val = target.getUseValue(card);
                                        if (val > 0) return val * get.attitude(player, target) * 2;
                                        return get.value(card, target) * get.attitude(player, target);
                                    });
                                });
                                ('step 1');
                                if (result.bool) {
                                    var cards = result.cards;
                                    player.showCards(cards, get.translation(player) + '发动【' + get.translation(event.name) + '】展示了');
                                    event.cards = cards;
                                } else event.finish();
                                ('step 2');
                                player
                                    .chooseTarget([1, 2], lib.filter.notMe, true)
                                    .set('createDialog', ['选择要分配的目标', cards])
                                    .set('targetprompt', ['第一张', '第二张'])
                                    .set('complexTarget', true)
                                    .set('ai', function (target) {
                                        var card = cards[ui.selected.targets.length];
                                        if (card) {
                                            var val = target.getUseValue(card);
                                            if (val > 0) return val * get.attitude(player, target) * 2;
                                            return get.value(card, target) * get.attitude(player, target);
                                        }
                                        return 0;
                                    });
                                ('step 3');
                                var targets = result.targets;
                                player.line(targets);
                                if (targets.length == 1) {
                                    player.give(cards, targets[0]);
                                } else {
                                    game.loseAsync({
                                        gain_list: [
                                            [targets[0], [cards[0]]],
                                            [targets[1], [cards[1]]],
                                        ],
                                        player: player,
                                        cards: cards,
                                        giver: player,
                                        animate: 'giveAuto',
                                    }).setContent('gaincardMultiple');
                                }
                                ('step 4');
                                var num = Math.abs(cards[0].number - cards[1].number);
                                var card = get.cardPile2((card) => card.number == num);
                                if (card) player.gain(card, 'gain2');
                            },
                        },
                        gm_huanzhu: {
                            forced: true,
                            trigger: {
                                global: ['useCardAfter', 'roundStart'],
                            },
                            filter(event, player) {
                                if (event.name == 'useCard') return event.card.name == 'tiesuo';
                                if (game.roundNumber < 2) return false;
                                var getHistory = lib.skill['gm_huanzhu'].getLastRoundHistory;
                                if (game.hasPlayer((target) => !target.isLinked())) return true;
                                var customHistory = player.getAllHistory('custom', (evt) => evt.name == 'gm_huanzhu');
                                if (customHistory.length) {
                                    var num = customHistory[customHistory.length - 1].num;
                                    for (var history of getHistory(player)) {
                                        for (var evt of history['damage']) if (evt.hujia) num -= evt.hujia;
                                    }
                                    if (num > 0) return true;
                                }
                                return false;
                            },
                            getLastRoundHistory(player) {
                                var list = [],
                                    stop = false;
                                var actionHistory = player.actionHistory;
                                for (var index = actionHistory.length - 1; index >= 0; index--) {
                                    var history = actionHistory[index];
                                    if (!stop) {
                                        if (history.isRound) stop = true;
                                        continue;
                                    } else {
                                        list.unshift(history);
                                        if (history.isRound) break;
                                    }
                                }
                                return list;
                            },
                            content() {
                                'step 0';
                                if (trigger.name == 'useCard') {
                                    player.draw(2);
                                } else {
                                    var getHistory = lib.skill[event.name].getLastRoundHistory;
                                    var customHistory = player.getAllHistory('custom', (evt) => evt.name == event.name);
                                    if (customHistory.length) {
                                        var num = customHistory[customHistory.length - 1].num;
                                        for (var history of getHistory(player)) {
                                            for (var evt of history['damage']) {
                                                if (evt.hujia) num -= evt.hujia;
                                            }
                                        }
                                        if (num > 0) player.changeHujia(-num);
                                    }
                                }
                                ('step 1');
                                if (trigger.name == 'useCard') {
                                    var cards = result.filter((card) => card.suit == 'club');
                                    if (cards.length) {
                                        player.discard(cards);
                                        player.chooseTarget(cards.length, '环铸:令' + get.cnNumber(cards.length) + '名角色横置', true).set('ai', function (target) {
                                            var att = get.attitude(player, target);
                                            if (att < 0) att = -Math.sqrt(-att);
                                            else att = Math.sqrt(att);
                                            return att * lib.card['tiesuo'].ai.result.target(player, target);
                                        });
                                    } else event.finish();
                                } else {
                                    var num = game.countPlayer((target) => !target.isLinked());
                                    if (num > 0) {
                                        player.changeHujia(num);
                                        player.getHistory('custom').push({ name: event.name, num: num });
                                    }
                                    event.finish();
                                }
                                ('step 2');
                                var targets = result.targets.sortBySeat();
                                player.line(targets);
                                event.targets = targets;
                                ('step 3');
                                if (targets.length) {
                                    targets.shift().link();
                                    event.redo();
                                }
                            },
                        },
                        gm_zhuhun: {
                            forced: true,
                            trigger: {
                                global: 'phaseEnd',
                            },
                            filter(event, player) {
                                return event.player != player && !event.player.hasHistory('useSkill', (evt) => evt.skill == 'gm_zhuhun_effect') && event.player.countCards('he');
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                trigger.player.chooseCard('he', '铸魂:交给' + get.translation(player) + '一张牌', true).set('ai', function (card) {
                                    return 5 - get.value(card);
                                });
                                ('step 1');
                                trigger.player.give(result.cards, player);
                            },
                            global: 'gm_zhuhun_effect',
                            subSkill: {
                                effect: {
                                    enable: 'phaseUse',
                                    usable: 1,
                                    filter(event, player) {
                                        return !player.hasSkill('gm_zhuhun') && game.hasPlayer((target) => target.hasSkill('gm_zhuhun'));
                                    },
                                    filterCard: () => false,
                                    selectCard: -1,
                                    prompt: '出牌阶段限一次,你可以视为使用一张【铁索连环】',
                                    viewAs: {
                                        name: 'tiesuo',
                                    },
                                    ai: {
                                        order(item, player) {
                                            return get.order({ name: 'tiesuo' }) + 0.3;
                                        },
                                        result: {
                                            player: 1,
                                            target(player, target) {
                                                if (target.isLinked()) {
                                                    if (target.hasSkillTag('link')) return 0;
                                                    var f = target.hasSkillTag('nofire');
                                                    var t = target.hasSkillTag('nothunder');
                                                    if (f && t) return 0;
                                                    if (f || t) return 0.5;
                                                    return 2;
                                                }
                                                if (get.attitude(player, target) >= 0) return -0.9;
                                                if (ui.selected.targets.length) return -0.9;
                                                if (
                                                    game.hasPlayer(function (current) {
                                                        return get.attitude(player, current) <= -1 && current != target && !current.isLinked();
                                                    })
                                                ) {
                                                    return -0.9;
                                                }
                                                return 0;
                                            },
                                        },
                                        wuxie(target, card, player, viewer) {
                                            if (_status.event.getRand() < 0.5) return 0;
                                            if (player == game.me && get.attitude(viewer, player) > 0) {
                                                return 0;
                                            }
                                        },
                                        basic: {
                                            useful: 4,
                                            value: 4,
                                            order: 7,
                                        },
                                        tag: {
                                            multitarget: 1,
                                            multineg: 1,
                                            norepeat: 1,
                                        },
                                    },
                                },
                            },
                        },
                        gm_quanzhao: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.hasCard((card) => lib.filter.cardDiscardable(card, player), 'h') && game.hasPlayer((target) => target != player && target.countCards('h'));
                            },
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('h');
                            },
                            filterCard(card, player, event) {
                                event = event || _status.event;
                                if (typeof event != 'string') event = event.parent.name;
                                var mod = game.checkMod(card, player, event, 'unchanged', 'cardDiscardable', player);
                                if (mod != 'unchanged') return mod;
                                return true;
                            },
                            delay: 0.5,
                            check(card) {
                                var player = _status.event.player,
                                    storage = player.storage['gm_quanzhao'];
                                if (storage || game.hasPlayer((target) => lib.skill['gm_quanzhao'].ai.result.target(player, target) < 0)) return get.value(card) - 7;
                                return 5 - get.value(card);
                            },
                            content() {
                                'step 0';
                                player.swapHandcards(target);
                                ('step 1');
                                if (player.storage[event.name]) {
                                    var num = player.countCards('h') - player.getDamagedHp();
                                    if (num > 0) {
                                        player.recover();
                                        player.draw(num);
                                    }
                                    event.goto(3);
                                } else {
                                    var num = player.needsToDiscard();
                                    if (num > 0) {
                                        player.chooseCard('he', '劝照:选择要交还的牌', num, true).set('ai', function (card) {
                                            return 5 - get.value(card);
                                        });
                                    } else event.goto(3);
                                }
                                ('step 2');
                                player.give(result.cards, target);
                                ('step 3');
                                player.gainMaxHp();
                            },
                            intro: {
                                markcount: () => 2,
                                name: 'Lv.2',
                            },
                            ai: {
                                order: 2,
                                threaten: 2,
                                expose: 0.9,
                                result: {
                                    target(player, target) {
                                        var att = get.attitude(player, target),
                                            storage = player.storage['gm_quanzhao'];
                                        var num1 = player.countCards('h'),
                                            num2 = target.countCards('h');
                                        if (storage) {
                                            if (att <= 0) {
                                                if (num1 > num2) return 0;
                                                if (target.isMaxHandcard()) return Math.max(0, num1 - num2);
                                                if (num2 > player.getDamagedHp()) return -5;
                                                return player.countCards('h', (card) => get.value(card) - 5) - num2;
                                            }
                                            if (num1 < num2) return 0.1;
                                            return 1;
                                        }
                                        if (att <= 0) {
                                            if (num1 > num2 || num2 > player.getHandcardLimit()) return 0;
                                            return player.countCards('h', (card) => get.value(card) - 5) - num2;
                                        }
                                        if (target.hasJudge('lebu') || target.hasSkillTag('nogain')) return 0;
                                        if (player.isMaxHandcard()) return Math.max(1, 5 - num2);
                                        return 0;
                                    },
                                },
                            },
                        },
                        gm_cuican: {
                            enable: 'phaseUse',
                            limited: true,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            selectTarget: -1,
                            multiline: true,
                            contentBefore() {
                                player.awakenSkill('gm_cuican');
                            },
                            content() {
                                'step 0';
                                target
                                    .chooseToDiscard('h', '摧残:弃置一张红色基本牌或黑色锦囊牌', function (card, player) {
                                        if (get.type2(card) == 'basic') return get.color(card) == 'red';
                                        if (get.type2(card) == 'trick') return get.color(card) == 'black';
                                        return false;
                                    })
                                    .set('ai', function (card) {
                                        if (target.hp == 1) return 11 - get.value(card);
                                        return 5 - get.value(card);
                                    });
                                ('step 1');
                                if (result.bool) event.finish();
                                else target.loseHp();
                                ('step 2');
                                if (target.countCards('h')) {
                                    target.chooseCard('h', '摧残:交给' + get.translation(player) + '一张手牌', true);
                                } else event.finish();
                                ('step 3');
                                target.give(result.cards, player);
                            },
                            contentAfter() {
                                player.storage['gm_quanzhao'] = true;
                                player.markSkill('gm_quanzhao');
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            ai: {
                                order() {
                                    var player = _status.event.player;
                                    if (!game.hasPlayer((target) => target != player && get.attitude(player, target) > 0)) return 10;
                                    return 1;
                                },
                                result: {
                                    player(player) {
                                        var num = 0,
                                            players = game.filterPlayer();
                                        if (!players.some((target) => target != player && get.attitude(player, target) > 0)) return 10;
                                        if (lib.config.mode == 'identity' && game.zhu.isZhu && player.identity == 'fan') {
                                            if (game.zhu.hp == 1 && game.zhu.countCards('h') <= 2) return 1;
                                        }
                                        for (var i = 0; i < players.length; i++) {
                                            var att = get.attitude(player, players[i]);
                                            if (att > 0) att = 1;
                                            if (att < 0) att = -1;
                                            if (players[i] != player && players[i].hp <= 3) {
                                                if (players[i].countCards('h') == 0) num += att / players[i].hp;
                                                else if (players[i].countCards('h') == 1) num += att / 2 / players[i].hp;
                                                else if (players[i].countCards('h') == 2) num += att / 4 / players[i].hp;
                                            }
                                            if (players[i].hp == 1) num += att * 1.5;
                                        }
                                        if (player.hp == 1) return -num;
                                        if (player.hp == 2) return -game.players.length / 4 - num;
                                        return -game.players.length / 3 - num;
                                    },
                                },
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        gm_douwu: {
                            forced: true,
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                return (event.card.name == 'sha' && player.getEquip(1)) || (event.card.name == 'shan' && player.getEquip(2) && player.isDamaged());
                            },
                            content() {
                                if (trigger.card.name == 'sha') trigger.baseDamage++;
                                else player.recover();
                            },
                            ai: {
                                effect: {
                                    player(card, player, target) {
                                        if (['equip1', 'equip2'].includes(get.subtype(card))) return [1.5, 2.5];
                                    },
                                },
                            },
                        },
                        gm_lianji: {
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('h') && game.hasPlayer((target) => lib.skill['gm_lianji'].filterTarget(null, player, target));
                            },
                            filterTarget(card, player, target) {
                                return player.canCompare(target) && !lib.skill['gm_lianji'].getUsedTargets(player).includes(target);
                            },
                            getUsedTargets(player) {
                                var actionHistory = player.actionHistory,
                                    targets = [];
                                for (var index = actionHistory.length - 1; index >= 0; index--) {
                                    var history = actionHistory[index];
                                    if (history['useSkill']) {
                                        for (var evt of history['useSkill']) {
                                            if (evt.skill == 'gm_lianji') targets.addArray(evt.targets);
                                        }
                                    }
                                    if (history.isRound) break;
                                }
                                return targets;
                            },
                            delay: 0.5,
                            content() {
                                'step 0';
                                player.chooseToCompare(target);
                                ('step 1');
                                if (result.bool) {
                                    player.useCard({ name: 'sha' }, target, false).oncard = function (card, player) {
                                        if (!card.storage) card.storage = {};
                                        card.storage['gm_lianji'] = true;
                                        var animate = ui.create.card();
                                        animate.init(['虚拟', '', 'sha']);
                                        player.$throw(animate, 1000);
                                        animate.delete();
                                    };
                                } else {
                                    if (get.position(result.target, true) == 'd') {
                                        player.gain(result.target, 'gain2');
                                    }
                                }
                            },
                            ai: {
                                unequip: true,
                                unequip: true,
                                skillTagFilter(player, tag, arg) {
                                    if (tag == 'unequip') {
                                        if (_status.event.name != 'gm_lianji') return false;
                                    } else {
                                        if (!arg || !arg.card || !arg.card.storage || !arg.card.storage['gm_lianji']) return false;
                                    }
                                },
                                order: 4,
                                result: {
                                    target(player, target) {
                                        var sort = (a, b) => b.number - a.number;
                                        var ps = player.getCards('h').sort(sort);
                                        var ts = target.getCards('h').sort(sort);
                                        if (ps[0].number > ts[0].number) {
                                            var effect = get.effect(
                                                target,
                                                {
                                                    name: 'sha',
                                                    storage: { gm_lianji: true },
                                                },
                                                player,
                                                player
                                            );
                                            return effect;
                                        }
                                        return ps.length >= ts.length ? -0.5 : 0;
                                    },
                                },
                            },
                        },
                        gm_zhuihun: {
                            forced: true,
                            trigger: {
                                global: 'die',
                            },
                            filter(event, player) {
                                return event.player != player;
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                var option = ['选项二'];
                                if (trigger.player.countCards('h')) option.unshift('选项一');
                                var choiceList = ['<span' + (trigger.player.countCards('h') ? '' : ' style="opacity:0.5;"') + '>获得' + get.translation(trigger.player) + '所有手牌</span>', '从牌堆底摸' + get.cnNumber(game.dead.length) + '张牌'];
                                player
                                    .chooseControl(option)
                                    .set('prompt', '追魂:选择一项')
                                    .set('choiceList', choiceList)
                                    .set('ai', function () {
                                        return trigger.player.countCards('h') > game.dead.length ? '选项一' : '选项二';
                                    });
                                ('step 1');
                                var skill = 'gm_zhuihun_ignore';
                                player.addTempSkill(skill);
                                switch (result.control) {
                                    case '选项一': {
                                        player.gain(trigger.player, trigger.player.getCards('h'), 'giveAuto').gaintag.add(skill);
                                        break;
                                    }
                                    case '选项二': {
                                        player.draw(game.dead.length, 'bottom').gaintag = [skill];
                                        break;
                                    }
                                }
                            },
                            subSkill: {
                                ignore: {
                                    mod: {
                                        ignoredHandcard(card, player) {
                                            if (card.hasGaintag('gm_zhuihun_ignore')) return true;
                                        },
                                        cardDiscardable(card, player, name) {
                                            if (card.hasGaintag('gm_zhuihun_ignore') && name == 'phaseDiscard') return false;
                                        },
                                    },
                                    charlotte: true,
                                    onremove(player, skill) {
                                        player.removeGaintag(skill);
                                    },
                                },
                            },
                        },
                        gm_tongshun: {
                            forced: true,
                            trigger: {
                                global: 'dying',
                            },
                            filter(event, player) {
                                return event.getParent('phaseUse', true) && !event.audioed;
                            },
                            content() {
                                trigger.audioed = true;
                            },
                            mark: true,
                            intro: {
                                markcount: (storage) => (storage ? 2 : 1),
                                content: (storage) => '当前等级:Lv.' + (storage ? '2' : '1'),
                            },
                            global: ['gm_tongshun_effect'],
                            subSkill: {
                                effect: {
                                    mod: {
                                        aiOrder(player, card, num) {
                                            var source = game.findPlayer((target) => target.hasSkill('gm_tongshun'));
                                            if (source && typeof card == 'object' && player.isPhaseUsing()) {
                                                var evt = player.getLastUsed();
                                                if (evt && evt.card) {
                                                    if (source.storage['gm_tongshun']) {
                                                        if (evt.card.suit == card.suit || evt.card.number == card.number) return num + 10;
                                                    } else {
                                                        if (evt.card.suit != card.suit && evt.card.number != card.number) return num + 10;
                                                    }
                                                }
                                            }
                                        },
                                    },
                                    audio: 'gm_tongshun',
                                    forced: true,
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    filter(event, player) {
                                        if (!player.isPhaseUsing()) return false;
                                        var source = game.findPlayer((target) => target.hasSkill('gm_tongshun'));
                                        if (!source) return false;
                                        var evt = player.getLastUsed(1);
                                        if (!evt || !evt.card) return false;
                                        if (source.storage['gm_tongshun']) {
                                            return evt.card.suit == event.card.suit || evt.card.number == event.card.number;
                                        }
                                        return evt.card.suit != event.card.suit && evt.card.number != event.card.number;
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                            },
                        },
                        gm_anyao: {
                            forced: true,
                            zhuanhuanji: true,
                            trigger: {
                                global: 'washCard',
                            },
                            content() {
                                'step 0';
                                player.changeZhuanhuanji(event.name);
                                if (player.storage[event.name]) {
                                    player.storage['gm_tongshun'] = true;
                                } else {
                                    player.storage['gm_tongshun'] = false;
                                }
                                ('step 1');
                                if (game.hasPlayer((target) => target.isMaxHandcard())) {
                                    player
                                        .chooseTarget(
                                            '暗幺:令其中一名角色直接进入濒死状态',
                                            function (card, player, target) {
                                                return target.isMaxHandcard();
                                            },
                                            true
                                        )
                                        .set('ai', function (target) {
                                            var eff = get.damageEffect(target, player, player);
                                            if (target.isHealthy()) eff += 10;
                                            if (get.attitude(player, target)) {
                                                eff *= 0;
                                                if (target.nodying) eff += 5;
                                            }
                                            return Math.max(0.1, eff);
                                        });
                                } else event.finish();
                                ('step 2');
                                var target = result.targets[0];
                                player.line(target);
                                var next = game.createEvent('dying');
                                next.player = target;
                                next.ori = target.hp;
                                next.reason = event;
                                next.setContent(lib.skill[event.name].dying);
                            },
                            dying() {
                                'step 0';
                                event.forceDie = true;
                                if (player.isDying()) {
                                    event.finish();
                                    return;
                                }
                                _status.dying.unshift(player);
                                game.broadcast(function (list) {
                                    _status.dying = list;
                                }, _status.dying);
                                event.trigger('dying');
                                game.log(player, '濒死');
                                ('step 1');
                                delete event.filterStop;
                                if (player.hp > event.ori || event.nodying) {
                                    _status.dying.remove(player);
                                    game.broadcast(function (list) {
                                        _status.dying = list;
                                    }, _status.dying);
                                    event.finish();
                                } else {
                                    if (!event.skipTao) {
                                        var next = game.createEvent('_save');
                                        var start = false;
                                        var starts = [_status.currentPhase, event.source, event.player, game.me, game.players[0]];
                                        for (var i = 0; i < starts.length; i++) {
                                            if (get.itemtype(starts[i]) == 'player') {
                                                start = starts[i];
                                                break;
                                            }
                                        }
                                        next.player = start;
                                        next._trigger = event;
                                        next.triggername = '_save';
                                        next.ori = event.ori;
                                        next.forceDie = true;
                                        next.setContent(lib.skill['gm_anyao'].save);
                                    }
                                }
                                ('step 2');
                                _status.dying.remove(player);
                                game.broadcast(function (list) {
                                    _status.dying = list;
                                }, _status.dying);
                                if (player.hp <= event.ori && !event.nodying && !player.nodying) player.die(event.reason);
                            },
                            save() {
                                'step 0';
                                event.dying = trigger.player;
                                if (!event.acted) event.acted = [];
                                ('step 1');
                                if (trigger.player.isDead()) {
                                    event.finish();
                                    return;
                                }
                                event.acted.push(player);
                                var str = get.translation(trigger.player) + '濒死,是否帮助？';
                                var str2 = '当前体力:' + trigger.player.hp;
                                if (lib.config.tao_enemy && event.dying.side != player.side && lib.config.mode != 'identity' && lib.config.mode != 'guozhan' && !event.dying.hasSkillTag('revertsave')) {
                                    event._result = { bool: false };
                                } else {
                                    if (player.canSave(event.dying)) {
                                        player.chooseToUse({
                                            filterCard(card, player, event) {
                                                event = event || _status.event;
                                                return lib.filter.cardSavable(card, player, event.dying);
                                            },
                                            filterTarget(card, player, target) {
                                                if (target != _status.event.dying) return false;
                                                if (!card) return false;
                                                var info = get.info(card);
                                                if (!info.singleCard || ui.selected.targets.length == 0) {
                                                    var mod = game.checkMod(card, player, target, 'unchanged', 'playerEnabled', player);
                                                    if (mod == false) return false;
                                                    var mod = game.checkMod(card, player, target, 'unchanged', 'targetEnabled', target);
                                                    if (mod != 'unchanged') return mod;
                                                }
                                                return true;
                                            },
                                            prompt: str,
                                            prompt2: str2,
                                            type: 'dying',
                                            targetRequired: true,
                                            dying: event.dying,
                                        });
                                    } else {
                                        event._result = { bool: false };
                                    }
                                }
                                ('step 2');
                                if (result.bool) {
                                    var player = trigger.player;
                                    if (player.hp <= event.ori && !trigger.nodying && !player.nodying && player.isAlive() && !player.isOut() && !player.removed) event.goto(0);
                                    else trigger.untrigger();
                                } else {
                                    for (var i = 0; i < 20; i++) {
                                        if (event.acted.includes(event.player.next)) {
                                            break;
                                        } else {
                                            event.player = event.player.next;
                                            if (!event.player.isOut()) {
                                                event.goto(1);
                                                break;
                                            }
                                        }
                                    }
                                }
                            },
                        },
                        gm_zijue: {
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('hs');
                            },
                            filterCard: true,
                            selectCard: [1, Infinity],
                            position: 'hs',
                            check: (card) => 6 - get.value(card),
                            viewAs: {
                                name: 'juedou',
                            },
                            onuse(result, player) {
                                player.addTempSkill('gm_zijue_effect', { player: 'phaseBegin' });
                                player.storage['gm_zijue_effect'] = [result.cards.length, false];
                            },
                            ai: {
                                order() {
                                    return get.order({ name: 'juedou' }) - 0.5;
                                },
                                wuxie(target, card, player, viewer) {
                                    if (player == game.me && get.attitude(viewer, player) > 0) {
                                        return 0;
                                    }
                                },
                                basic: {
                                    order: 5,
                                    useful: 1,
                                    value: 5.5,
                                },
                                result: {
                                    target: -1.5,
                                    player(player, target, card) {
                                        if (
                                            player.hasSkillTag(
                                                'directHit_ai',
                                                true,
                                                {
                                                    target: target,
                                                    card: card,
                                                },
                                                true
                                            )
                                        ) {
                                            return 0;
                                        }
                                        if (get.damageEffect(target, player, target) > 0 && get.attitude(player, target) > 0 && get.attitude(target, player) > 0) {
                                            return 0;
                                        }
                                        var hs1 = target.getCards('h', 'sha');
                                        var hs2 = player.getCards('h', 'sha');
                                        if (hs1.length > hs2.length + 1) {
                                            return -2;
                                        }
                                        var hsx = target.getCards('h');
                                        if (hsx.length > 2 && hs2.length == 0 && hsx[0].number < 6) {
                                            return -2;
                                        }
                                        if (hsx.length > 3 && hs2.length == 0) {
                                            return -2;
                                        }
                                        if (hs1.length > hs2.length && (!hs2.length || hs1[0].number > hs2[0].number)) {
                                            return -2;
                                        }
                                        return -0.5;
                                    },
                                },
                                tag: {
                                    respond: 2,
                                    respondSha: 2,
                                    damage: 1,
                                },
                            },
                            subSkill: {
                                effect: {
                                    onremove(player, skill) {
                                        game.filterPlayer().forEach((target) => target.removeSkill('gm_zijue_debuff'));
                                        delete player.storage[skill];
                                    },
                                    audio: 'gm_zijue',
                                    forced: true,
                                    charlotte: true,
                                    trigger: {
                                        source: 'damageSource',
                                        player: ['damageEnd', 'useCardToPlayered'],
                                    },
                                    filter(event, player) {
                                        if (event.name == 'damage') return event.parent.skill == 'gm_zijue';
                                        return player.storage['gm_zijue_effect'][1] && event.card.name == 'sha' && event.target.countDiscardableCards(player, 'he');
                                    },
                                    logTarget(event, player) {
                                        switch (_status.event.triggername) {
                                            case 'damageEnd':
                                                return event.source;
                                            case 'useCardToPlayered':
                                                return event.target;
                                        }
                                    },
                                    content() {
                                        var storage = player.storage[event.name];
                                        if (trigger.name == 'damage') {
                                            if (event.triggername == 'damageSource') {
                                                storage[1] = true;
                                            } else {
                                                trigger.source.addTempSkill('gm_zijue_debuff', { player: 'dieAfter' });
                                                trigger.source.addMark('gm_zijue_debuff', storage[0], false);
                                            }
                                        } else {
                                            player.discardPlayerCard(trigger.target, storage[0], true, 'he');
                                        }
                                    },
                                },
                                debuff: {
                                    mod: {
                                        maxHandcard(player, num) {
                                            return num - player.countMark('gm_zijue_debuff');
                                        },
                                    },
                                    charlotte: true,
                                    mark: true,
                                    intro: {
                                        markcount: (storage) => -storage,
                                        content: '手牌上限-#',
                                    },
                                },
                            },
                        },
                        gm_huanhun: {
                            forced: true,
                            trigger: {
                                global: 'phaseUseEnd',
                            },
                            filter(event, player) {
                                var getRoundHistory = lib.skill['gm_huanhun'].getRoundHistory;
                                return event.player != player && (getRoundHistory(event.player, 'lose') || (getRoundHistory(player, 'useSkill', event.player) && event.player.countCards('h')));
                            },
                            getRoundHistory(player, key, arg) {
                                var action = player.actionHistory,
                                    skill = 'gm_zijue_effect',
                                    bool = false;
                                for (var index = action.length - 1; index >= 0; index--) {
                                    var history = action[index];
                                    for (var evt of history[key]) {
                                        if (key == 'lose') {
                                            if (evt.getParent(3).name == skill) {
                                                bool = true;
                                                break;
                                            }
                                        } else {
                                            if (evt.skill == skill && evt.event.triggername == 'damageEnd' && evt.targets.includes(arg)) {
                                                bool = true;
                                                break;
                                            }
                                        }
                                    }
                                    if (history.isRound) break;
                                }
                                return bool;
                            },
                            logTarget: 'player',
                            content() {
                                var getRoundHistory = lib.skill[event.name].getRoundHistory;
                                if (getRoundHistory(trigger.player, 'lose')) {
                                    player.recover();
                                }
                                if (getRoundHistory(player, 'useSkill', trigger.player)) {
                                    player.draw(trigger.player.countCards('h'));
                                }
                            },
                        },
                        gm_huanhua: {
                            forced: true,
                            trigger: {
                                player: 'enterGame',
                                global: 'phaseBefore',
                            },
                            filter(event, player) {
                                return game.hasPlayer((target) => target != player) && (event.name != 'phase' || game.phaseNumber == 0);
                            },
                            content() {
                                'step 0';
                                player.chooseTarget('选择【' + get.translation(event.name) + '】的目标', get.translation(event.name, 'info'), lib.filter.notMe, true).set('ai', function (target) {
                                    var skills = [];
                                    if (lib.character[target.name]) skills.addArray(lib.character[target.name][3]);
                                    if (lib.character[target.name1]) skills.addArray(lib.character[target.name1][3]);
                                    if (lib.character[target.name2]) skills.addArray(lib.character[target.name2][3]);
                                    skills = skills.filter((skill) => !player.hasSkill(skill));
                                    if (!skills.length) return 0.1;
                                    return 1 + Math.random();
                                });
                                ('step 1');
                                var target = result.targets[0];
                                var skills = [];
                                if (lib.character[target.name]) skills.addArray(lib.character[target.name][3]);
                                if (lib.character[target.name1]) skills.addArray(lib.character[target.name1][3]);
                                if (lib.character[target.name2]) skills.addArray(lib.character[target.name2][3]);
                                player.addAdditionalSkill(event.name, skills, true);
                            },
                            group: 'gm_huanhua_update',
                            subSkill: {
                                update: {
                                    audio: 'gm_huanhua',
                                    forced: true,
                                    trigger: {
                                        player: ['changeHp', 'loseMaxHpEnd'],
                                    },
                                    filter(event, player) {
                                        return player.hp == 1 && !player.storage['gm_yingbian'];
                                    },
                                    content() {
                                        player.loseMaxHp();
                                        player.storage['gm_yingbian'] = true;
                                    },
                                },
                            },
                        },
                        gm_yingbian: {
                            enable: ['chooseToUse', 'chooseToRespond'],
                            filter(event, player) {
                                var storage = player.storage['gm_yingbian'];
                                if (storage) return player.hasCard((card) => ['sha', 'shan'].some((name) => event.filterCard({ name: name }, player, event)), 'hes');
                                var map = { equip1: 'sha', equip2: 'shan' };
                                return player.hasCard((card) => Object.keys(map).some((key) => get.subtype(card) == key && event.filterCard({ name: map[key] }, player, event)), 'hes');
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    return ui.create.dialog(get.prompt('gm_yingbian'), [['sha', 'shan'], 'vcard'], 'hidden');
                                },
                                filter(button) {
                                    var evt = _status.event.parent,
                                        player = _status.event.player;
                                    var storage = player.storage['gm_yingbian'],
                                        name = button.link[2];
                                    if (storage) return player.hasCard((card) => evt.filterCard({ name: name }, player, evt), 'hes');
                                    var map = { sha: 'equip1', shan: 'equip2' };
                                    return player.hasCard((card) => get.subtype(card) == map[name] && evt.filterCard({ name: name }, player, evt), 'hes');
                                },
                                check(button) {
                                    return _status.event.player.getUseValue({ name: button.link[2] });
                                },
                                backup(links, player) {
                                    var storage = player.storage['gm_yingbian'];
                                    return {
                                        popname: true,
                                        filterCard(card) {
                                            if (storage) return true;
                                            return (get.subtype(card) == links[0][2]) == 'sha' ? 'equip1' : 'equip2';
                                        },
                                        position: 'hes',
                                        check: () => 1,
                                        viewAs: { name: links[0][2] },
                                    };
                                },
                                prompt(links, player) {
                                    var storage = player.storage['gm_yingbian'];
                                    if (storage) return '将一张牌当做【' + get.translation(links[0][2]) + '】' + (_status.event.name == 'chooseToUse' ? '使用' : '打出');
                                    return '将一张' + (links[0][2] == 'sha' ? '武器' : '防具') + '牌当做【' + get.translation(links[0][2]) + '】' + (_status.event.name == 'chooseToUse' ? '使用' : '打出');
                                },
                            },
                            ai: {
                                respondSha: true,
                                respondShan: true,
                                skillTagFilter(player, tag, arg) {
                                    var storage = player.storage['gm_yingbian'];
                                    var name = tag == 'respondSha' ? 'sha' : tag == 'respondShan' ? 'shan' : null;
                                    if (!name) return false;
                                    if (storage) {
                                        if (!player.countCards('hes')) return false;
                                    } else {
                                        if (!player.hasCard((card) => ((get.subtype(card) == name) == 'sha' ? 'equip1' : 'equip2'), 'hes')) return false;
                                    }
                                },
                                order: 1,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        gm_tihua: {
                            forced: true,
                            limited: true,
                            trigger: {
                                player: 'dying',
                            },
                            content() {
                                'step 0';
                                player.awakenSkill(event.name);
                                ('step 1');
                                player.recover();
                                player.removeAdditionalSkill('gm_huanhua');
                                ('step 2');
                                if (game.hasPlayer((target) => target != player && !player.hasAllHistory('useSkill', (evt) => evt.skill == 'gm_huanhua' && evt.targets.includes(target)))) {
                                    player
                                        .chooseTarget(
                                            '选择【' + get.translation(event.name) + '】的目标',
                                            '获得其武将牌上所有技能(不能选择〖幻化〗已选择过的)',
                                            function (card, player, target) {
                                                return target != player && !player.hasAllHistory('useSkill', (evt) => evt.skill == 'gm_huanhua' && evt.targets.includes(target));
                                            },
                                            true
                                        )
                                        .set('ai', function (target) {
                                            var skills = [];
                                            if (lib.character[target.name]) skills.addArray(lib.character[target.name][3]);
                                            if (lib.character[target.name1]) skills.addArray(lib.character[target.name1][3]);
                                            if (lib.character[target.name2]) skills.addArray(lib.character[target.name2][3]);
                                            skills = skills.filter((skill) => !player.hasSkill(skill));
                                            if (!skills.length) return 0.1;
                                            return 1 + Math.random();
                                        });
                                } else event.finish();
                                ('step 3');
                                var target = result.targets[0];
                                player.line(target, 'green');
                                var skills = [];
                                if (lib.character[target.name]) skills.addArray(lib.character[target.name][3]);
                                if (lib.character[target.name1]) skills.addArray(lib.character[target.name1][3]);
                                if (lib.character[target.name2]) skills.addArray(lib.character[target.name2][3]);
                                player.addAdditionalSkill('gm_huanhua', skills, true);
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        gm_duyin: {
                            enable: 'phaseUse',
                            filter(event, player) {
                                return (player.getStat('skill')['gm_duyin'] || 0) < game.countGroup() && player.countCards('h');
                            },
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            filterCard: true,
                            discard: false,
                            lose: false,
                            delay: false,
                            check: (card) => 5 - get.value(card),
                            content() {
                                var next = target.gain(cards, player, 'giveAuto');
                                next.gaintag.add(event.name);
                                next.giver = player;
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target: -1,
                                },
                            },
                            global: 'gm_duyin_effect',
                            subSkill: {
                                effect: {
                                    forced: true,
                                    trigger: {
                                        player: 'loseAfter',
                                        global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                                    },
                                    filter(event, player) {
                                        var evt = event.getl(player);
                                        return evt && evt.player == player && evt.hs && evt.hs.some((card) => player.hasHistory('lose', (evt) => evt.cards.includes(card) && evt.gaintag_map[card.cardid] && evt.gaintag_map[card.cardid].includes('gm_duyin')));
                                    },
                                    content() {
                                        player.loseHp(trigger.getl(player).hs.filter((card) => player.hasHistory('lose', (evt) => evt.cards.includes(card) && evt.gaintag_map[card.cardid] && evt.gaintag_map[card.cardid].includes('gm_duyin'))).length);
                                    },
                                },
                            },
                        },
                        gm_dumou: {
                            forced: true,
                            trigger: {
                                global: ['gainAfter', 'loseAsyncAfter'],
                            },
                            filter(event, player) {
                                if (event.giver != player || event.parent.name != 'gm_duyin') return false;
                                if (event.name == 'gain') return event.player != player && event.getg(event.player).length && player.getAllHistory('useSkill', (evt) => evt.skill == 'gm_duyin' && evt.targets.includes(event.player)).length >= 2 && !player.hasAllHistory('useSkill', (evt) => evt.skill == 'gm_dumou' && evt.targets.includes(event.player));
                                return game.hasPlayer((target) => target != player && event.getg(target).length && player.getAllHistory('useSkill', (evt) => evt.skill == 'gm_duyin' && evt.targets.includes(target)).length >= 2 && !player.hasAllHistory('useSkill', (evt) => evt.skill == 'gm_dumou' && evt.targets.includes(target)));
                            },
                            content() {
                                'step 0';
                                if (trigger.name == 'gain') event.targets = [trigger.player];
                                else event.targets = game.filterPlayer((target) => target != player && trigger.getg(target).length && player.getAllHistory('useSkill', (evt) => evt.skill == 'gm_duyin' && evt.targets.includes(target)).length >= 2 && !player.hasAllHistory('useSkill', (evt) => evt.skill == 'gm_dumou' && evt.targets.includes(target)));
                                ('step 1');
                                if (targets.length) {
                                    var target = targets.shift();
                                    player.draw(3);
                                    event.redo();
                                }
                            },
                        },
                        gm_laibian: {
                            forced: true,
                            trigger: {
                                global: 'useCardToTarget',
                            },
                            filter(event, player) {
                                return get.type(event.card) == 'trick' && !get.info(event.card).multitarget && event.targets && event.targets.length == 1 && event.target != player && lib.filter.targetEnabled2(event.card, event.player, player);
                            },
                            logTarget: 'player',
                            check(event, player) {
                                return get.effect(player, event.card, event.player, player) > 0;
                            },
                            content() {
                                trigger.parent.targets.add(player);
                            },
                        },
                        gm_moutu: {
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                return event.isPhaseUsing() && get.type2(event.card) == 'trick' && event.targets && event.targets.length && event.targets.some((target) => target != player);
                            },
                            content() {
                                'step 0';
                                if (ui.cardPile.childElementCount < trigger.targets.length) {
                                    var cards = get.cards(trigger.targets.length);
                                    for (var card of cards.reverse()) ui.cardPile.insertBefore(card.fix(), ui.cardPile.firstChild);
                                    game.updateRoundNumber();
                                    event.cards = cards;
                                } else {
                                    event.cards = Array.from(ui.cardPile.childNodes).slice(0, trigger.targets.length);
                                }
                                ('step 1');
                                player.viewCards('谋图', cards);
                                ('step 2');
                                var togain = cards.filter((card) => get.type(card) == 'basic');
                                if (togain.length) {
                                    player.gain(togain, 'draw');
                                    game.log(player, '获得了' + get.cnNumber(togain.length) + '张牌');
                                }
                            },
                        },
                    },
                };
                lib.config.all.characters.add('诛仙杀');
                lib.config.characters.add('诛仙杀');
                for (var i in QQQ.character) {
                    QQQ.character[i][4].add(`ext:诛仙杀/image/${i}.jpg`);
                }
                lib.translate['诛仙杀_character_config'] = `诛仙杀`;
                return QQQ;
            });
        },
        package: {
            intro: "<br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>",
            author: 'DTTZ',
            version: '1.0.4',
        },
    };
});

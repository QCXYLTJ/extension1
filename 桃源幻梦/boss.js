'use strict';
game.import('character', function (lib, game, ui, get, ai, _status) {
    var tmzz = {
        name: 'tmzz',
        connect: true,
        character: {//武将信息
            'boss_langyao': ['none', 'qun', 4, ['tmzz_yaoshou', 'tmzz_mengzhua'], ['hiddenboss']],
            'boss_bingdonglong': ['none', 'qun', 4, ['tmzz_moshou', 'tmzz_hanxi'], ['hiddenboss']],
            'boss_yuanchuzhilei': ['none', 'qun', 4, ['tmzz_qishou', 'tmzz_anlei'], ['hiddenboss']],
            'boss_leitingjvshou': ['none', 'qun', 4, ['tmzz_moshou', 'tmzz_leichui'], ['hiddenboss']],
            'boss_bingniao': ['none', 'qun', 4, ['tmzz_lingshou', 'tmzz_minjie'], ['hiddenboss']],
            'boss_bingxvehu': ['none', 'qun', 4, ['tmzz_xianshou', 'tmzz_lingbu'], ['hiddenboss']],
            'boss_zhangyu': ['none', 'qun', 4, ['tmzz_eshou', 'tmzz_shufu'], ['hiddenboss']],
            'boss_shayu': ['none', 'qun', 4, ['tmzz_eshou', 'tmzz_siyao'], ['hiddenboss']],
            'boss_leibaobao': ['none', 'qun', 4, ['tmzz_lingshou', 'tmzz_jilei'], ['hiddenboss']],
            'boss_yishe': ['none', 'qun', 4, ['tmzz_eshou', 'tmzz_fuyou'], ['hiddenboss']],
            'boss_zhangbaoxinmo': ['male', 'mo', 25, ['tmzz_xinmozanian', 'tmzz_xinmoseyu', 'tmzz_cannianchengxin', 'tmzz_cannianchengxin_switch', 'hyym_hundunshuangfu', 'hyym_zhanbafang'], ['boss']],
            'boss_lusuxinmo': ['male', 'mo', 25, ['tmzz_xinmozanian', 'tmzz_xinmoseyu', 'tmzz_cannianchengxin', 'tmzz_cannianchengxin_switch', 'hyym_qiannengjifa', 'hyym_cichang', 'hyym_maichong', 'hyym_xisheng'], ['boss']],
            'boss_huangyueyingxinmo': ['female', 'mo', 25, ['tmzz_xinmozanian', 'tmzz_xinmoseyu', 'tmzz_cannianzhenjie', 'tmzz_cannianzhenjie_switch', 'hyym_bingfenglujing', 'hyym_jihanlingyu', 'hyym_jinzhixveyu'], ['boss']],
            'boss_daqiaoxinmo': ['female', 'mo', 25, ['tmzz_xinmozanian', 'tmzz_xinmoseyu', 'tmzz_cannianzhenjie', 'tmzz_cannianzhenjie_switch', 'hyym_shuilaojingu', 'hyym_fengjuanyu', 'hyym_shuimudan', 'hyym_huxianfuti'], ['boss']],
            'boss_linglong': ['none', 'shen', 30, ['tmzz_shenshoutianming', 'tmzz_linglongtiebi', 'tmzz_linglongpowei', 'tmzz_linglongpowei_switch'], ['boss']],
        },
        characterIntro: {//武将简介
        },
        characterTitle: {//武将称号
        },
        characterSort: {//角色分类
            tmzz: {
                cloud_tianmingshou: ['boss_linglong'],
                cloud_xinmoseyu: ['boss_zhangbaoxinmo', 'boss_lusuxinmo', 'boss_huangyueyingxinmo', 'boss_daqiaoxinmo'],
                cloud_xinmolanduo: [],
                cloud_xinmotanlan: [],
                cloud_xinmobaonu: [],
                cloud_xinmoaoman: [],
                cloud_xinmoduji: [],
                cloud_xinmobaoshi: [],
                cloud_xianshou: ['boss_bingxvehu'],
                cloud_lingshou: ['boss_bingniao', 'boss_leibaobao'],
                cloud_huanshou: [],
                cloud_qishou: ['boss_yuanchuzhilei'],
                cloud_eshou: ['boss_zhangyu', 'boss_shayu', 'boss_yishe'],
                cloud_yaoshou: ['boss_langyao'],
                cloud_moshou: ['boss_bingdonglong', 'boss_leitingjvshou'],
            }
        },
        characterReplace: {//可切换武将
        },
        skill: {//技能代码
            'tmzz_xinghunzhili': {
                trigger: {
                    global: 'phaseBefore',
                    player: 'enterGame',
                },
                filter(event, player) {
                    return (event.name != 'phase' || game.phaseNumber == 0) && player.isEnemiesOf(game.boss)
                },
                forced: true,
                content() {
                    'step 0'
                    player.gain(game.createCard2('hyym_fuhuobi', lib.suit.randomGet(), Math.floor(Math.random() * 13) + 1), 'gain2');
                    //if(player.name=='caishenhyym') player.chooseUseTarget(game.createCard2('yuruyi','heart'),true,'nopopup');
                    //if(player.name=='shenhuatuohyym') player.chooseUseTarget(true,{name:'hyym_jinhulu'});
                    let list = ['十万伏特', '冰霜爆碎', '夜叉天惩', '激流冲击', '暗潮天钉', '凌霄水澜', '天冰地冻', '真炎爆发', '烁日火雷', '流星火雨', '兑淼祇雷', '凌波微步', '绝对防御', '织暝入风', '风砂磐御', '天罡护体', '坚冰流火', '两仪霜风', '圣光祈愈', '紫微星垣', '回光溯流'];
                    if (game.hasPlayer(play => play.hasSkill('hyym_shiwanfute'))) list.remove('十万伏特');
                    if (game.hasPlayer(play => play.hasSkill('hyym_bingshuangbaosui'))) list.remove('冰霜爆碎');
                    if (game.hasPlayer(play => play.hasSkill('hyym_yechatiancheng'))) list.remove('夜叉天惩');
                    if (game.hasPlayer(play => play.hasSkill('hyym_jiliuchongji'))) list.remove('激流冲击');
                    if (game.hasPlayer(play => play.hasSkill('hyym_anchaotianding'))) list.remove('暗潮天钉');
                    if (game.hasPlayer(play => play.hasSkill('hyym_lingxiaoshuilan'))) list.remove('凌霄水澜');
                    if (game.hasPlayer(play => play.hasSkill('hyym_tianbingdidong'))) list.remove('天冰地冻');
                    if (game.hasPlayer(play => play.hasSkill('hyym_zhenyanbaofa'))) list.remove('真炎爆发');
                    if (game.hasPlayer(play => play.hasSkill('hyym_shuorihuolei'))) list.remove('烁日火雷');
                    if (game.hasPlayer(play => play.hasSkill('hyym_liuxinghuoyu'))) list.remove('流星火雨');
                    if (game.hasPlayer(play => play.hasSkill('hyym_duimiaoqilei'))) list.remove('兑淼祇雷');
                    if (game.hasPlayer(play => play.hasSkill('hyym_lingboweibu'))) list.remove('凌波微步');
                    if (game.hasPlayer(play => play.hasSkill('hyym_jueduifangyu'))) list.remove('绝对防御');
                    if (game.hasPlayer(play => play.hasSkill('hyym_ziweixingyuan'))) list.remove('紫微星垣');
                    if (game.hasPlayer(play => play.hasSkill('hyym_shengguangqiyu'))) list.remove('圣光祈愈');
                    if (game.hasPlayer(play => play.hasSkill('hyym_fengshapanyu'))) list.remove('风砂磐御');
                    if (game.hasPlayer(play => play.hasSkill('hyym_tianganghuti'))) list.remove('天罡护体');
                    if (game.hasPlayer(play => play.hasSkill('hyym_zhimingrufeng'))) list.remove('织暝入风');
                    if (game.hasPlayer(play => play.hasSkill('hyym_liangyishuangfeng'))) list.remove('两仪霜风');
                    if (game.hasPlayer(play => play.hasSkill('hyym_jianbingliuhuo'))) list.remove('坚冰流火');
                    if (game.hasPlayer(play => play.hasSkill('hyym_huiguangsuliu'))) list.remove('回光溯流');
                    player.chooseControl(list).set('choiceList', [
                        '【十万伏特】限定技,出牌阶段,你可以对任意名其他角色各造成1点雷电伤害,并令其每回合使用的首张牌无效直到其各自下回合结束.',
                        '【冰霜爆碎】限定技,出牌阶段,你可以对一名其他角色造成2点冰冻伤害,对其相邻的所有其他角色各造成1点冰冻伤害.',
                        '【夜叉天惩】限定技,出牌阶段,你可以选择三名连续的其他角色,令其依次随机执行一个未被执行过的选项:1、弃四张牌;2、受到2点无来源雷电伤害;3、弃两张牌,受到1点无来源雷电伤害.',
                        '【激流冲击】限定技,出牌阶段,你可以对一名其他角色造成1点伤害,并令其计算与其他角色距离+3,直到其下回合结束.',
                        '【暗潮天钉】限定技,出牌阶段,你可以令一名其他角色失去1点体力并跳过下个出牌阶段.',
                        '【凌霄水澜】限定技,出牌阶段,你可以令一名其他角色清除所有桃源Buff,你对其造成1点伤害,并令其三轮内不能响应你使用的牌.',
                        '【天冰地冻】限定技,出牌阶段,你可以令任意名连续角色防具、护甲和所有非锁定技失效,且不能使用或打出牌/造成伤害,直到本回合结束.',
                        '【真炎爆发】限定技,出牌阶段,你可以对一名相邻的其他角色造成1点火焰伤害,令你本轮下4次造成的伤害变为1.5倍(向下取整).',
                        '【烁日火雷】限定技,出牌阶段,你可以获得以下效果:本回合限五次,当你造成1点伤害后,你摸一张牌.你对一名其他角色造成1点火焰伤害.',
                        '【流星火雨】限定技,出牌阶段,你可以选择至多x名其他角色(x为场上拥有限定技的角色的数量),这些角色接下来的每个准备阶段,你进行一次判定,若为♦️️,你对其造成1点火焰伤害,直到你以此法累计造成至少x点伤害.',
                        '【兑淼祇雷】限定技,出牌阶段,你可以对一名其他角色造成1点雷电伤害,于下轮游戏开始时视为对其使用x张【雷杀】(x为在此期间你使用的伤害牌数且至多为6).',
                        '【凌波微步】限定技,一轮开始时,你可以令你每回合前x次(x为你的体力上限)成为其他角色的牌的目标时取消之,持续8回合.',
                        '【绝对防御】限定技,一轮开始时,你可以令你防止每回合前x次(x为你的体力上限)受到的伤害,持续8回合.',
                        '【织暝入风】限定技,一轮开始时,你可以获得3点护甲,并令6回合内,当你每回合前x(x为你的体力上限)次受到伤害后,你回复1点体力.',
                        '【风砂磐御】限定技,一轮开始时,你可令4回合内,每回合开始时,你获得1点护甲并摸一张牌;4回合结束后,你失去所有护甲,对一名其他角色造成x点伤害并回复x点体力(x为你失去护甲数的一半且向下取整).',
                        '【天罡护体】限定技,一轮开始时,你可令三轮内,你摸牌阶段的摸牌基数+2且免疫每轮前x(x为你的体力上限)次体力流失.',
                        '【坚冰流火】限定技,当你受到伤害后,你可令伤害来源本回合内不能再造成伤害;出牌阶段,你可以令一名其他角色获得以下效果,持续8回合:每回合首次失去牌后,随机弃置一张牌,且每回合首次造成的伤害-1.',
                        '【两仪霜风】限定技,当你成为一名其他角色牌的目标时,你可以取消之并令其本回合不能再对你使用牌,令你对其使用牌无次数限制直到你下回合结束.',
                        '【圣光祈愈】限定技,出牌阶段,你可令至多三名角色回复所有体力.',
                        '【紫微星垣】限定技,出牌阶段,你可以令至多三名角色下次造成的伤害翻倍(不可叠加).',
                        '【回光溯流】限定技,出牌阶段,你可重置所有其他技能,摸x张牌(x为你武将牌上的技能数).',
                        '占位行(下同)',
                        '占位行',
                        '占位行',
                        '占位行',
                    ]).set('prompt', '选择并令' + get.translation(player) + '获得一个星魂技能').set('ai', function () {
                        return Math.random();
                    });
                    'step 1'
                    event.control = result.control;
                    if (event.control == '十万伏特') {
                        player.addSkill('hyym_shiwanfute');
                        game.playAudio('../extension/桃源幻梦/audio/技能配音/星魂技能', ['hyym_shiwanfute1', 'hyym_shiwanfute2'].randomGet());
                    };
                    if (event.control == '冰霜爆碎') {
                        player.addSkill('hyym_bingshuangbaosui');
                        game.playAudio('../extension/桃源幻梦/audio/技能配音/星魂技能', ['hyym_bingshuangbaosui1', 'hyym_bingshuangbaosui2'].randomGet());
                    };
                    if (event.control == '夜叉天惩') {
                        player.addSkill('hyym_yechatiancheng');
                        game.playAudio('../extension/桃源幻梦/audio/技能配音/星魂技能', ['hyym_yechatiancheng1', 'hyym_yechatiancheng2'].randomGet());
                    };
                    if (event.control == '激流冲击') {
                        player.addSkill('hyym_jiliuchongji');
                        game.playAudio('../extension/桃源幻梦/audio/技能配音/星魂技能', ['hyym_jiliuchongji1', 'hyym_jiliuchongji2'].randomGet());
                    };
                    if (event.control == '天冰地冻') {
                        player.addSkill('hyym_tianbingdidong');
                        game.playAudio('../extension/桃源幻梦/audio/技能配音/星魂技能', ['hyym_tianbingdidong1', 'hyym_tianbingdidong2'].randomGet());
                    };
                    if (event.control == '绝对防御') {
                        player.addSkill('hyym_jueduifangyu');
                        game.playAudio('../extension/桃源幻梦/audio/技能配音/星魂技能', ['hyym_jueduifangyu1', 'hyym_jueduifangyu2'].randomGet());
                    };
                    if (event.control == '凌波微步') {
                        player.addSkill('hyym_lingboweibu');
                        game.playAudio('../extension/桃源幻梦/audio/技能配音/星魂技能', ['hyym_lingboweibu1', 'hyym_lingboweibu2'].randomGet());
                    };
                    if (event.control == '真炎爆发') {
                        player.addSkill('hyym_zhenyanbaofa');
                        game.playAudio('../extension/桃源幻梦/audio/技能配音/星魂技能', ['hyym_zhenyanbaofa1', 'hyym_zhenyanbaofa2'].randomGet());
                    };
                    if (event.control == '流星火雨') {
                        player.addSkill('hyym_liuxinghuoyu');
                        game.playAudio('../extension/桃源幻梦/audio/技能配音/星魂技能', ['hyym_liuxinghuoyu1', 'hyym_liuxinghuoyu2'].randomGet());
                    };
                    if (event.control == '天罡护体') {
                        player.addSkill('hyym_tianganghuti');
                        game.playAudio('../extension/桃源幻梦/audio/技能配音/星魂技能', ['hyym_tianganghuti1', 'hyym_tianganghuti2'].randomGet());
                    };
                    if (event.control == '烁日火雷') {
                        player.addSkill('hyym_shuorihuolei');
                        game.playAudio('../extension/桃源幻梦/audio/技能配音/星魂技能', ['hyym_shuorihuolei1', 'hyym_shuorihuolei2'].randomGet());
                    };
                    if (event.control == '暗潮天钉') {
                        player.addSkill('hyym_anchaotianding');
                        game.playAudio('../extension/桃源幻梦/audio/技能配音/星魂技能', ['hyym_anchaotianding1', 'hyym_anchaotianding2'].randomGet());
                    };
                    if (event.control == '圣光祈愈') {
                        player.addSkill('hyym_shengguangqiyu');
                        game.playAudio('../extension/桃源幻梦/audio/技能配音/星魂技能', ['hyym_shengguangqiyu1', 'hyym_shengguangqiyu2'].randomGet());
                    };
                    if (event.control == '织暝入风') {
                        player.addSkill('hyym_zhimingrufeng');
                        game.playAudio('../extension/桃源幻梦/audio/技能配音/星魂技能', ['hyym_zhimingrufeng1', 'hyym_zhimingrufeng2'].randomGet());
                    };
                    if (event.control == '风砂磐御') {
                        player.addSkill('hyym_fengshapanyu');
                        game.playAudio('../extension/桃源幻梦/audio/技能配音/星魂技能', ['hyym_fengshapanyu1', 'hyym_fengshapanyu2'].randomGet());
                    };
                    if (event.control == '两仪霜风') {
                        player.addSkill('hyym_liangyishuangfeng');
                        game.playAudio('../extension/桃源幻梦/audio/技能配音/星魂技能', ['hyym_liangyishuangfeng1', 'hyym_liangyishuangfeng2'].randomGet());
                    };
                    if (event.control == '兑淼祇雷') {
                        player.addSkill('hyym_duimiaoqilei');
                        game.playAudio('../extension/桃源幻梦/audio/技能配音/星魂技能', ['hyym_duimiaoqilei1', 'hyym_duimiaoqilei2'].randomGet());
                    };
                    if (event.control == '坚冰流火') {
                        player.addSkill('hyym_jianbingliuhuo');
                        game.playAudio('../extension/桃源幻梦/audio/技能配音/星魂技能', ['hyym_jianbingliuhuo1', 'hyym_jianbingliuhuo2'].randomGet());
                    };
                    if (event.control == '紫微星垣') {
                        player.addSkill('hyym_ziweixingyuan');
                        game.playAudio('../extension/桃源幻梦/audio/技能配音/星魂技能', ['hyym_ziweixingyuan1', 'hyym_ziweixingyuan2'].randomGet());
                    };
                    if (event.control == '凌霄水澜') {
                        player.addSkill('hyym_lingxiaoshuilan');
                        game.playAudio('../extension/桃源幻梦/audio/技能配音/星魂技能', ['hyym_lingxiaoshuilan1', 'hyym_lingxiaoshuilan2'].randomGet());
                    }
                    if (event.control == '回光溯流') {
                        player.addSkill('hyym_huiguangsuliu');
                        game.playAudio('../extension/桃源幻梦/audio/技能配音/星魂技能', ['hyym_huiguangsuliu1', 'hyym_huiguangsuliu2'].randomGet());
                    }
                }
            },
            'tmzz_tianmingzhizhan': {
                trigger: { global: 'dieAfter' },
                silent: true,
                filter(event, player) {
                    return player.side != game.boss.side;
                },
                content() {
                    if (player == trigger.source) {
                        player.draw(3);
                        player.recover();
                    }
                    else if (trigger.player.side == player.side) {
                        player.draw(3);
                        player.recover();
                    }
                }
            },
            'tmzz_yaoshou': {
                group: ['tmzz_yaoshou_turn', 'tmzz_yaoshou_damage'],
                subSkill: {
                    damage: {
                        trigger: { player: 'damageEnd' },
                        filter(event, player) {
                            return event.source && event.source != undefined && event.source.isIn() && event.num > 0 && event.source.isEnemiesOf(player)
                        },
                        forced: true,
                        logTarget: 'source',
                        preHidden: true,
                        content() {
                            'step 0'
                            event.num = Math.min(trigger.num, 9);
                            'step 1'
                            trigger.source.damage();
                            event.num--;
                            'step 2'
                            if (event.num > 0 && player.hasSkill('tmzz_yaoshou')) {
                                event.goto(1);
                            }
                        },
                        ai: {
                            maixie_defend: true,
                        }
                    },
                    turn: {
                        trigger: { player: 'turnOverBefore' },
                        priority: 20,
                        forced: true,
                        filter(event, player) {
                            return !player.isTurnedOver();
                        },
                        content() {
                            trigger.cancel();
                            game.log(player, '取消了翻面');
                        },
                    }
                },
                mod: {
                    globalFrom(from, to, distance) {
                        return distance - 1;
                    }
                },
                ai: {
                    noturn: true,
                }
            },
            'tmzz_moshou': {
                group: ['tmzz_moshou_turn', 'tmzz_moshou_1'],
                subSkill: {
                    1: {
                        forced: true,
                        trigger: {
                            player: 'useCard',
                        },
                        filter(event, player) {
                            return event.card && game.hasPlayer(play => play.isEnemiesOf(player))
                        },
                        content() {
                            trigger.directHit.addArray(game.filterPlayer(play => play.isEnemiesOf(player)));
                        },
                        logTarget: 'target',
                        ai: {
                            directHit_ai: true,
                            skillTagFilter(player, tag, arg) {
                                return arg && arg.target && arg.target.isEnemiesOf(player)
                            },
                        },
                    },
                    turn: {
                        trigger: { player: 'turnOverBefore' },
                        priority: 20,
                        forced: true,
                        filter(event, player) {
                            return !player.isTurnedOver();
                        },
                        content() {
                            trigger.cancel();
                            game.log(player, '取消了翻面');
                        },
                    }
                },
                mod: {
                    globalFrom(from, to, distance) {
                        return distance - 1;
                    }
                },
                ai: {
                    noturn: true,
                }
            },
            'tmzz_lingshou': {
                group: ['tmzz_lingshou_turn', 'tmzz_lingshou_1'],
                subSkill: {
                    1: {
                        forced: true,
                        trigger: {
                            player: 'phaseZhunbeiBegin',
                        },
                        filter(event, player) {
                            return true
                        },
                        content() {
                            player.recover();
                            player.draw(2)
                        },
                    },
                    turn: {
                        trigger: { player: 'turnOverBefore' },
                        priority: 20,
                        forced: true,
                        filter(event, player) {
                            return !player.isTurnedOver();
                        },
                        content() {
                            trigger.cancel();
                            game.log(player, '取消了翻面');
                        },
                    }
                },
                mod: {
                    globalFrom(from, to, distance) {
                        return distance - 1;
                    }
                },
                ai: {
                    noturn: true,
                }
            },
            'tmzz_huanshou': {
            },
            'tmzz_qishou': {
                group: ['tmzz_qishou_turn', 'tmzz_qishou_1'],
                subSkill: {
                    1: {
                        forced: true,
                        trigger: {
                            player: 'phaseJieshuBegin',
                        },
                        filter(event, player) {
                            return game.hasPlayer(play => play.isEnemiesOf(player) && !play.isTurnedOver())
                        },
                        content() {
                            'step 0'
                            player.chooseTarget(true, 1, '令一名正面朝上的敌方角色翻面', function (card, player, target) {
                                return target.isEnemiesOf(player) && !target.isTurnedOver()
                            }).set('ai', function (target) {
                                return target.countCards('h');
                            });
                            'step 1'
                            if (result.targets) {
                                event.target = result.targets.sortBySeat()
                            }
                            else event.finish()
                            'step 2'
                            for (let i = 0; i < event.target.length; i++) {
                                event.target[i].turnOver()
                            }
                        },
                    },
                    turn: {
                        trigger: { player: 'turnOverBefore' },
                        priority: 20,
                        forced: true,
                        filter(event, player) {
                            return !player.isTurnedOver();
                        },
                        content() {
                            trigger.cancel();
                            game.log(player, '取消了翻面');
                        },
                    }
                },
                mod: {
                    globalFrom(from, to, distance) {
                        return distance - 1;
                    }
                },
                ai: {
                    noturn: true,
                }
            },
            'tmzz_eshou': {
                group: ['tmzz_eshou_turn', 'tmzz_eshou_1'],
                subSkill: {
                    1: {
                        trigger: { player: 'phaseZhunbeiBegin' },
                        forced: true,
                        filter(event, player) {
                            return true
                        },
                        content() {
                            game.filterPlayer(play => play.isEnemiesOf(player)).randomGet().damage()
                        },
                    },
                    turn: {
                        trigger: { player: 'turnOverBefore' },
                        priority: 20,
                        forced: true,
                        filter(event, player) {
                            return !player.isTurnedOver();
                        },
                        content() {
                            trigger.cancel();
                            game.log(player, '取消了翻面');
                        },
                    }
                },
                mod: {
                    globalFrom(from, to, distance) {
                        return distance - 1;
                    }
                },
                ai: {
                    noturn: true,
                }
            },
            'tmzz_qunhun': {
            },
            'tmzz_longbing': {
            },
            'tmzz_xiaozhen': {
            },
            'tmzz_mengzhua': {
                forced: true,
                trigger: {
                    player: 'useCard',
                },
                filter(event, player) {
                    return event.card && event.card.name == 'sha' && (get.color(event.card) == 'black' || get.color(event.card) == 'red')
                },
                content() {
                    if (get.color(trigger.card) == 'black') trigger.directHit.addArray(game.filterPlayer());
                    if (get.color(trigger.card) == 'red') {
                        game.log(player, '触发了【猛爪】');
                        trigger.baseDamage++
                    }
                },
                ai: {
                    directHit_ai: true,
                    skillTagFilter(player, tag, arg) {
                        return arg && arg.card && get.color(arg.card) && get.color(arg.card) == 'black' && arg.card.name == 'sha'
                    },
                },
            },
            'tmzz_hanxi': {
                forced: true,
                trigger: { player: 'phaseJieshuBegin' },
                filter(event, player) {
                    return game.hasPlayer(play => play.isEnemiesOf(player) && !play.isTurnedOver())
                },
                content() {
                    'step 0'
                    if (game.filterPlayer(play => play.isEnemiesOf(player) && !play.isTurnedOver()).length == 1) {
                        game.filterPlayer(play => play.isEnemiesOf(player) && !play.isTurnedOver())[0].draw(2);
                        game.filterPlayer(play => play.isEnemiesOf(player) && !play.isTurnedOver())[0].turnOver();
                        event.finish()
                    }
                    else event.tar = game.filterPlayer(play => play.isEnemiesOf(player) && !play.isTurnedOver()).randomGets(2);
                    'step 1'
                    for (i = 0; i < event.tar.length; i++) {
                        event.tar[i].draw(2);
                        event.tar[i].turnOver()
                    }
                }
            },
            'tmzz_xinmoxienian': {},
            'tmzz_xinmozanian': {
                group: ['tmzz_xinmozanian_turn', 'tmzz_xinmozanian_1', 'tmzz_xinmozanian_2'],
                subSkill: {
                    1: {
                        forced: true,
                        trigger: {
                            global: 'phaseBegin'
                        },
                        filter(event, player) {
                            return true
                        },
                        content() {
                            player.enableEquip(['equip1', 'equip2', 'equip3', 'equip4', 'equip5']);
                            player.draw()
                        },
                    },
                    2: {
                        trigger: {
                            global: 'phaseBefore',
                            player: 'enterGame',
                        },
                        forced: true,
                        filter(event, player) {
                            return event.name != 'phase' || game.phaseNumber == 0;
                        },
                        content() {
                            player.disableJudge()
                        }
                    },
                    turn: {
                        trigger: { player: 'turnOverBefore' },
                        priority: 20,
                        forced: true,
                        filter(event, player) {
                            return !player.isTurnedOver();
                        },
                        content() {
                            trigger.cancel();
                            game.log(player, '取消了翻面');
                        },
                    }
                },
                mod: {
                    globalFrom(from, to, distance) {
                        return distance - 1;
                    }
                },
                ai: {
                    noturn: true,
                }
            },
            'tmzz_xinmoseyu': {
                forced: true,
                trigger: { global: 'phaseZhunbeiBegin' },
                filter(event, player) {
                    return event.player.isEnemiesOf(player)
                },
                content() {
                    'step 0'
                    var list = ['跳过本回合出牌阶段', '跳过本回合摸牌阶段'];
                    if (trigger.player.getExpansions('hyym_suishending_1').length || trigger.player.hasSkill('hyym_modujiaomengyanx') || trigger.player.hasSkill('hyym_hunyinx') || trigger.player.hasSkill('hyym_sheshenx') || trigger.player.hasSkill('hyym_zhongmaox') || (trigger.player.hasSkill('hyym_jihanlingyux') && trigger.player.storage.hyym_jihanlingyux < 0) || trigger.player.hasSkill('hyym_zhimangzhuangtai') || trigger.player.hasSkill('hyym_anxiangx') || trigger.player.hasSkill('hyym_geliezhuangtai') || trigger.player.hasSkill('hyym_huimouyixiaoz') || trigger.player.hasSkill('hyym_bingjiex') || trigger.player.hasSkill('hyym_huangtiansuo') || trigger.player.hasSkill('hyym_tianfabiaoji') || trigger.player.hasSkill('hyym_huanxingqv') || trigger.player.hasSkill('hyym_huanxingqvlinshi') || trigger.player.hasSkill('hyym_chenzuix') || trigger.player.hasSkill('hyym_chenzuiy')) {
                        list.remove('跳过本回合摸牌阶段')
                    };
                    if (trigger.player.differentSexFrom(player) && trigger.player.countCards('he') > 1) list.push('交给' + get.translation(player) + '两张牌');
                    trigger.player.chooseControl(list).set('prompt', '选择一项执行').set('ai', function () {
                        if (list.includes('交给' + get.translation(player) + '一张牌')) return '交给' + get.translation(player) + '两张牌'
                        else return '跳过本回合摸牌阶段'
                    });
                    'step 1'
                    event.control = result.control;
                    if (event.control == '跳过本回合摸牌阶段') {
                        trigger.player.addTempSkill('tmzz_xinmoseyumopai');
                        trigger.player.markSkill('tmzz_xinmoseyumopai');
                        event.finish()
                    }
                    if (event.control == '跳过本回合出牌阶段') {
                        trigger.player.addTempSkill('tmzz_xinmoseyuchupai');
                        trigger.player.markSkill('tmzz_xinmoseyuchupai');
                        event.finish()
                    }
                    if (event.control == '交给' + get.translation(player) + '两张牌') {
                        trigger.player.chooseCard(true, 2, 'he', '将两张牌交给' + get.translation(player)).set('ai', function (card) {
                            return 10 - get.value(card);
                        })
                    }
                    'step 2'
                    if (result.cards.length) {
                        trigger.player.give(result.cards, player, true)
                    }
                }
            },
            'tmzz_xinmoseyumopai': {
                forced: true,
                mark: true,
                marktext: '色',
                intro: {
                    name: '色欲',
                    content(storage) {
                        return '跳过本回合摸牌阶段'
                    },
                },
                trigger: {
                    player: 'phaseDrawBefore',
                },
                content() {
                    trigger.cancel(null, null, 'notrigger');
                }
            },
            'tmzz_xinmoseyuchupai': {
                forced: true,
                mark: true,
                marktext: '色',
                intro: {
                    name: '色欲',
                    content(storage) {
                        return '跳过本回合出牌阶段'
                    },
                },
                trigger: {
                    player: 'phaseUseBefore',
                },
                content() {
                    trigger.cancel(null, null, 'notrigger');
                }
            },
            'tmzz_cannianchengxin_switch': {
                charlotte: true,
                group: ['tmzz_cannianchengxin_switch_on', 'tmzz_cannianchengxin_switch_off'],
                subSkill: {
                    off: {
                        trigger: { global: 'gameStart' },
                        content() {
                            player.disableSkill('tmzz_cannianchengxin_awake', 'tmzz_cannianchengxin');
                        },
                        silent: true
                    },
                    on: {
                        trigger: { player: 'changeHp' },
                        filter(event, player) {
                            return player.hp <= player.maxHp / 2;
                        },
                        forced: true,
                        content() {
                            if (get.config('tianmingzhuanshubgm')) {
                                ui.backgroundMusic.src = 'audio/background/aozhan_rewrite.mp3';
                                //game.tmzzbanxieplayBackgroundMusic();
                                ui.backgroundMusic.addEventListener('ended', game.tmzzbanxieplayBackgroundMusic);
                            };
                            player.enableSkill('tmzz_cannianchengxin_awake');
                            player.removeSkill('tmzz_cannianchengxin_switch');
                        }
                    }
                }
            },
            'tmzz_cannianchengxin': {
                trigger: { player: 'damageBegin4' },
                forced: true,
                filter(event, player) {
                    return !player.hasCard(card => card.name == 'shan', 'h')
                },
                content() {
                    trigger.cancel();
                },
                ai: {
                    effect: {
                        target(card, player, target) {
                            if (target.hasCard(card => card.name == 'shan', 'h')) return;
                            if (get.tag(card, 'damage')) {
                                if (player.hasSkillTag('jueqing', false, target)) return [1, -2]
                                else return [0, 0]
                            }
                        },
                    }
                },
                mod: {
                    aiValue(player, card, num) {
                        if (card.name == 'shan') return 0.01;
                    },
                },
                group: ['tmzz_cannianchengxin_1', 'tmzz_cannianchengxin_2'],
                subSkill: {
                    1: {
                        trigger: { player: 'phaseDiscardBefore' },
                        filter(event, player) {
                            return player.hasCard(card => card.name == 'shan', 'h')
                        },
                        forced: true,
                        content() {
                            trigger.cancel();
                            var next = player['phaseUse']();
                            event.next.remove(next);
                            trigger.parent.next.push(next);
                        },
                        ai: {
                            effect: {
                                target(card, player, target) {
                                    if (get.type(card) == 'delay') return 'zerotarget';
                                },
                            },
                        },
                    },
                    2: {
                        trigger: { player: 'phaseJieshuBefore' },
                        filter(event, player) {
                            return player.hasCard(card => card.name == 'shan', 'h')
                        },
                        forced: true,
                        content() {
                            trigger.cancel();
                            var next = player['phaseZhunbei']();
                            event.next.remove(next);
                            trigger.parent.next.push(next);
                        }
                    }
                },
                global: 'tmzz_cannianchengxin2'
            },
            'tmzz_cannianchengxin2': {
                ai: {
                    viewHandcard: true,
                    skillTagFilter(player, tag, arg) {
                        return arg.hasSkill('tmzz_cannianchengxin') && arg.isEnemiesOf(player)
                    },
                }
            },
            'tmzz_cannianzhenjie_switch': {
                charlotte: true,
                group: ['tmzz_cannianzhenjie_switch_on', 'tmzz_cannianzhenjie_switch_off'],
                subSkill: {
                    off: {
                        trigger: { global: 'gameStart' },
                        content() {
                            player.disableSkill('tmzz_cannianzhenjie_awake', 'tmzz_cannianzhenjie');
                        },
                        silent: true
                    },
                    on: {
                        trigger: { player: 'changeHp' },
                        filter(event, player) {
                            return player.hp <= player.maxHp / 2;
                        },
                        forced: true,
                        content() {
                            if (get.config('tianmingzhuanshubgm')) {
                                ui.backgroundMusic.src = 'audio/background/aozhan_rewrite.mp3';
                                //game.tmzzbanxieplayBackgroundMusic();
                                ui.backgroundMusic.addEventListener('ended', game.tmzzbanxieplayBackgroundMusic);
                            };
                            player.enableSkill('tmzz_cannianzhenjie_awake');
                            player.removeSkill('tmzz_cannianzhenjie_switch');
                        }
                    }
                }
            },
            'tmzz_cannianzhenjie': {
                juexingji: true,
                trigger: { player: 'phaseZhunbeiBegin' },
                forced: true,
                filter(event, player) {
                    return true
                },
                content() {
                    'step 0'
                    player.awakenSkill('tmzz_cannianzhenjie');
                    var list = [];
                    for (var i = 0; i < game.dead.length; i++) {
                        if (game.dead[i].isFriendsOf(player)) list.push(game.dead[i]);
                    }
                    if (list.length > 0) for (let i = 0; i < list.length; i++) {
                        var dead = list[i];
                        dead.revive(dead.maxHp);
                        game.addVideo('revive', dead);
                    }
                    'step 1'
                    var list1 = game.filterPlayer(play => play.isFriendsOf(player) && play != player);
                    for (var i = 0; i < list1.length; i++) {
                        if (list1[i].hp < list1[i].maxHp) list1[i].hp = list1[i].maxHp;
                        list1[i].drawTo(list1[i].maxHp);
                        list1[i].addSkill('tmzz_cannianzhenjiex');
                        list1[i].markSkill('tmzz_cannianzhenjiex')
                    }
                }
            },
            'tmzz_cannianzhenjiex': {
                mark: true,
                marktext: '贞',
                intro: {
                    name: '残念-贞洁',
                    content(storage, player) {
                        return '防止所有受到的伤害'
                    }
                },
                trigger: { player: 'damageBegin4' },
                forced: true,
                filter(event, player) {
                    return true
                },
                content() {
                    trigger.cancel();
                },
                ai: {
                    effect: {
                        target(card, player, target) {
                            if (get.tag(card, 'damage')) {
                                if (player.hasSkillTag('jueqing', false, target)) return [1, -2]
                                else return [0, 0]
                            }
                        },
                    }
                },
            },
            'tmzz_anlei': {
                trigger: { global: 'roundStart' },
                forced: true,
                content() {
                    'step 0'
                    var next = player.chooseButton(['###声明一种花色###<div class="text center">当敌方角色使用你声明的花色的牌后,你对其造成1点雷电伤害</div>', [lib.suit.map(i => ['', '', 'lukai_' + i]), 'vcard']], 1);
                    next.set('ai', button => {
                        if (game.hasPlayer(play => play.name == 'xvshenghyym')) {
                            return button.name == 'lukai_diamond'
                        }
                        else return Math.random()
                    });
                    'step 1'
                    if (result.bool) {
                        var suits = result.links.map(i => i[2].slice(6));
                        player.addTempSkill('tmzz_anlei_effect', 'roundStart');
                        player.setStorage('tmzz_anlei_effect', suits);
                        player.markSkill('tmzz_anlei_effect');
                        game.log(player, '为【黯雷】声明了' + get.translation(player.getStorage('tmzz_anlei_effect')))
                    }
                },
                ai: {
                    tag: {
                        damage: 1,
                        thunderDamage: 1,
                        natureDamage: 1,
                    },
                },
                subSkill: {
                    effect: {
                        audio: 'tmzz_anlei',
                        trigger: { global: 'useCardAfter' },
                        charlotte: true,
                        forced: true,
                        filter(event, player) {
                            if (!lib.suit.includes(event.card.suit)) return false;
                            return player.getStorage('tmzz_anlei_effect').length && event.player.isEnemiesOf(player) && player.getStorage('tmzz_anlei_effect').includes(event.card.suit)
                        },
                        content() {
                            player.line(trigger.player, 'thunder');
                            trigger.player.damage('thunder', 1, 'nocard');
                        },
                        mark: true,
                        intro: {
                            content: (storage) => `当敌方角色使用${get.translation(storage)}花色的牌后,你对其造成1点雷电伤害`,
                        },
                    }
                }
            },
            'tmzz_leichui': {
                mod: {
                    cardnature(card, player) {
                        if (card.name == 'sha') return 'thunder';
                    },
                },
                trigger: {
                    source: 'damageBegin1',
                },
                forced: true,
                filter(event, player) {
                    return event.hasNature('thunder')
                },
                content() {
                    trigger.num++
                },
            },
            'tmzz_minjie': {
                forced: true,
                trigger: {
                    player: ['phaseJudgeBefore', 'phaseDiscardBefore'],
                },
                content() {
                    trigger.cancel(null, null, 'notrigger');
                },
            },
            'tmzz_xianshou': {
                group: ['tmzz_xianshou_turn', 'tmzz_xianshou_1'],
                subSkill: {
                    1: {
                        trigger: { target: 'useCardToTargeted' },
                        forced: true,
                        filter(event, player) {
                            return event.player != player
                        },
                        content() {
                            'step 0'
                            var eff = get.effect(player, trigger.card, trigger.player, trigger.player);
                            trigger.player.chooseToDiscard('he', '仙兽:弃一张牌,否则' + get.translation(trigger.card) + '对' + get.translation(player) + '无效', function (card) {
                                return true
                            }).set('ai', function (card) {
                                if (_status.event.eff > 0) {
                                    return 10 - get.value(card);
                                }
                                return 0;
                            }).set('eff', eff);
                            'step 1'
                            if (result.bool == false) {
                                trigger.parent.excluded.add(player);
                            }
                        },
                    },
                    turn: {
                        trigger: { player: 'turnOverBefore' },
                        priority: 20,
                        forced: true,
                        filter(event, player) {
                            return !player.isTurnedOver();
                        },
                        content() {
                            trigger.cancel();
                            game.log(player, '取消了翻面');
                        },
                    }
                },
                mod: {
                    globalFrom(from, to, distance) {
                        return distance - 1;
                    }
                },
                ai: {
                    noturn: true,
                }
            },
            'tmzz_lingbu': {
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                forced: true,
                content() {
                    var list = game.filterPlayer(play => play.isFriendsOf(player)).sortBySeat();
                    for (let i = 0; i < list.length; i++) {
                        list[i].draw(2)
                    }
                },
            },
            'tmzz_siyao': {
                enable: 'phaseUse',
                filterTarget(card, player, target) {
                    return player.canCompare(target) && target.isEnemiesOf(player)
                },
                selectTarget: [1, Infinity],
                filter(event, player) {
                    return player.countCards('h') > 0;
                },
                multitarget: true,
                multiline: true,
                content() {
                    player.chooseToCompare(targets).callback = lib.skill.tmzz_siyao.callback;
                },
                callback() {
                    if (event.num1 >= event.num2) {
                        target.damage()
                    }
                },
                ai: {
                    order: 20,
                    result: {
                        target(player, target) {
                            return -1.5
                        },
                        player: 1
                    }
                }
            },
            'tmzz_shufu': {
                trigger: { global: 'damageBegin3' },
                filter(event, player) {
                    return event.player.isIn() && event.player.isEnemiesOf(player) && event.player.getCards('he', function (card) {
                        return lib.filter.cardDiscardable(card, player, 'tmzz_shufu');
                    }).length > 0
                },
                forced: true,
                content() {
                    trigger.player.chooseToDiscard('he', 1, '束缚:请弃置一张牌', true).set('ai', function (card) {
                        return 10 - get.value(card);
                    })
                },
            },
            'tmzz_jilei': {
                trigger: { player: ['useCard', 'respond'] },
                filter(event, player) {
                    return get.color(event.card) == 'black'
                },
                forced: true,
                content() {
                    'step 0'
                    player.chooseTarget(true, 1, '对一名敌方角色造成1点雷电伤害', function (card, player, target) {
                        return target.isEnemiesOf(player)
                    }).set('ai', function (target) {
                        return -target.hp
                    });
                    'step 1'
                    if (result.targets) {
                        event.target = result.targets.sortBySeat()
                    }
                    else event.finish()
                    'step 2'
                    for (let i = 0; i < event.target.length; i++) {
                        event.target[i].damage('thunder', 1, 'nocard')
                    }
                }
            },
            'tmzz_fuyou': {
                trigger: { player: 'damageBegin4' },
                forced: true,
                filter(event, player) {
                    return !event.hasNature() || event.hasNature('thunder')
                },
                content() {
                    if (!trigger.hasNature()) trigger.cancel()
                    else trigger.num++
                },
                ai: {
                    effect: {
                        target(card, player, target) {
                            if (get.tag(card, 'damage')) {
                                if (get.tag(card, 'thunderDamage')) return [1, -4]
                                else if (player.hasSkillTag('jueqing', false, target) || get.tag(card, 'natureDamage')) return [1, -2]
                                else return [0, 0]
                            }
                        },
                    }
                },
            },
            'tmzz_shenshoutianming': {
                group: ['tmzz_shenshoutianming_turn', 'tmzz_shenshoutianming_1', 'tmzz_shenshoutianming_2'],
                subSkill: {
                    1: {
                        forced: true,
                        trigger: {
                            global: 'phaseBegin'
                        },
                        filter(event, player) {
                            return true
                        },
                        content() {
                            var list = game.filterPlayer(play => play.isFriendsOf(player)).sortBySeat();
                            for (let i = 0; i < list.length; i++) {
                                list[i].draw()
                            }
                        },
                    },
                    2: {
                        trigger: {
                            global: 'phaseBefore',
                            player: 'enterGame',
                        },
                        forced: true,
                        filter(event, player) {
                            return event.name != 'phase' || game.phaseNumber == 0;
                        },
                        content() {
                            player.disableJudge()
                        }
                    },
                    turn: {
                        trigger: { player: 'turnOverBefore' },
                        priority: 20,
                        forced: true,
                        filter(event, player) {
                            return !player.isTurnedOver();
                        },
                        content() {
                            trigger.cancel();
                            game.log(player, '取消了翻面');
                        },
                    }
                },
                mod: {
                    targetInRange() {
                        return true;
                    },
                },
                ai: {
                    noturn: true,
                }
            },
            'tmzz_linglongtiebi': {
                trigger: { player: 'damageEnd' },
                filter(event, player) {
                    return event.source != undefined && event.num > 0 && event.source.isIn() && event.source.isEnemiesOf(player)
                },
                forced: true,
                logTarget: 'source',
                content() {
                    'step 0'
                    player.line(trigger.source, 'fire');
                    trigger.source.damage(2);
                    'step 1'
                    let list = game.filterPlayer(play => play != trigger.source && play.isEnemiesOf(player));
                    if (list.length > 0) for (let i = 0; i < list.length; i++) {
                        player.line(list[i], 'fire');
                        list[i].damage()
                    }
                },
                ai: {
                    maixie: true,
                    maixie_defend: true,
                    effect: {
                        target(card, player, target) {
                            if (get.tag(card, 'damage') && player.isEnemiesOf(target)) {
                                if (player.hasSkillTag('jueqing', false, target)) return [1, -2]
                                else return [1, 0, 1, -8]
                            }
                        }
                    }
                },
                group: 'tmzz_linglongtiebi_1',
                subSkill: {
                    1: {
                        usable: 1,
                        forced: true,
                        trigger: { global: 'damageBegin4' },
                        filter(event, player) {
                            return event.player != player && event.player.isFriendsOf(player)
                        },
                        content() {
                            trigger.player = player
                        }
                    }
                }
            },
            'tmzz_linglongpowei': {
                forced: true,
                trigger: { global: 'phaseJieshuBegin' },
                filter(event, player) {
                    return event.player.isEnemiesOf(player)
                },
                content() {
                    if (!trigger.player.isDamaged()) trigger.player.useCard({ name: 'juedou' }, player)
                    else player.useCard({ name: 'juedou' }, trigger.player)
                }
            },
            'tmzz_linglongpowei_switch': {
                charlotte: true,
                group: ['tmzz_linglongpowei_switch_on', 'tmzz_linglongpowei_switch_off'],
                subSkill: {
                    off: {
                        trigger: { global: 'gameStart' },
                        content() {
                            player.disableSkill('tmzz_linglongpowei_awake', 'tmzz_linglongpowei');
                        },
                        silent: true
                    },
                    on: {
                        trigger: { player: 'changeHp' },
                        filter(event, player) {
                            return player.hp <= player.maxHp / 2;
                        },
                        forced: true,
                        content() {
                            if (get.config('tianmingzhuanshubgm')) {
                                ui.backgroundMusic.src = 'audio/background/aozhan_rewrite.mp3';
                                //game.tmzzbanxieplayBackgroundMusic();
                                ui.backgroundMusic.addEventListener('ended', game.tmzzbanxieplayBackgroundMusic);
                            };
                            player.enableSkill('tmzz_linglongpowei_awake');
                            player.removeSkill('tmzz_linglongpowei_switch');
                        }
                    }
                }
            },
        },
        translate: {//翻译
            cloud_tianmingshou: '天命兽',
            'boss_linglong': '鲮龙',
            cloud_xinmoseyu: '心魔-色欲',
            'boss_zhangbaoxinmo': '张宝心魔',
            'boss_lusuxinmo': '鲁肃心魔',
            'boss_huangyueyingxinmo': '黄月英心魔',
            'boss_daqiaoxinmo': '大乔心魔',
            cloud_xinmolanduo: '心魔-懒惰',
            cloud_xinmotanlan: '心魔-贪婪',
            cloud_xinmobaonu: '心魔-暴怒',
            cloud_xinmoaoman: '心魔-傲慢',
            cloud_xinmoduji: '心魔-妒忌',
            cloud_xinmobaoshi: '心魔-暴食',
            cloud_xianshou: '仙兽',
            'boss_bingxvehu': '冰雪狐',
            cloud_lingshou: '灵兽',
            'boss_bingniao': '冰鸟',
            'boss_leibaobao': '雷宝宝',
            cloud_huanshou: '幻兽',
            cloud_qishou: '奇兽',
            'boss_yuanchuzhilei': '原初之雷',
            cloud_eshou: '恶兽',
            'boss_zhangyu': '章鱼',
            'boss_shayu': '鲨鱼',
            'boss_yishe': '翼蛇',
            cloud_yaoshou: '妖兽',
            'boss_langyao': '狼妖',
            cloud_moshou: '魔兽',
            'boss_bingdonglong': '冰冻龙',
            'boss_leitingjvshou': '雷霆巨兽',
            'tmzz_yaoshou': '妖兽',
            'tmzz_yaoshou_info': '锁定技,你与其他角色距离-1;你不能被翻面;当敌方角色对你造成1点伤害后,你对其造成1点伤害.',
            'tmzz_mengzhua': '猛爪',
            'tmzz_mengzhua_info': '锁定技,你的黑色【杀】不可被响应,红色【杀】伤害基数+1.',
            'tmzz_moshou': '魔兽',
            'tmzz_moshou_info': '锁定技,你与其他角色距离-1;你不能被翻面;你使用牌不可被敌方角色响应.',
            'tmzz_hanxi': '寒息',
            'tmzz_hanxi_info': '锁定技,结束阶段,你令随机两名(不足则全选)正面朝上的敌方角色摸两张牌并翻面.',
            'tmzz_qishou': '奇兽',
            'tmzz_qishou_info': '锁定技,你与其他角色距离-1;你不能被其他角色翻面;结束阶段,你令一名正面朝上的敌方角色翻面.',
            'tmzz_anlei': '黯雷',
            'tmzz_anlei_info': '锁定技,每轮开始时,你声明一种花色,当一名敌方角色于本轮使用牌时,若花色与你声明相同,则你对其造成1点雷电伤害.',
            'tmzz_leichui': '雷锤',
            'tmzz_leichui_info': '锁定技,你的【杀】均视为【雷杀】,你造成的雷电伤害+1.',
            'tmzz_eshou': '恶兽',
            'tmzz_eshou_info': '锁定技,你与其他角色距离-1;你不能被其他角色翻面;准备阶段,你对随机一名敌方角色造成1点伤害.',
            'tmzz_siyao': '撕咬',
            'tmzz_siyao_info': '出牌阶段,你可用一张牌同时与任意名敌方角色拼点,你对拼输的其他角色造成1点伤害.',
            'tmzz_shufu': '束缚',
            'tmzz_shufu_info': '锁定技,一名敌方角色受到伤害时,你令其弃一张牌.',
            'tmzz_jilei': '疾雷',
            'tmzz_jilei_info': '锁定技,你使用或打出黑色牌时,对一名敌方角色造成1点雷电伤害.',
            'tmzz_fuyou': '浮游',
            'tmzz_fuyou_info': '锁定技,防止你受到的一切非属性伤害;你受到的雷电伤害+1.',
            'tmzz_lingshou': '灵兽',
            'tmzz_lingshou_info': '锁定技,你与其他角色距离-1;你不能被其他角色翻面;准备阶段,你回复1点体力并摸两张牌.',
            'tmzz_xianshou': '仙兽',
            'tmzz_xianshou_info': '锁定技,你与其他角色距离-1;你不能被其他角色翻面;敌方角色使用牌指定你为目标时,须弃一张牌,否则取消之.',
            'tmzz_lingbu': '灵步',
            'tmzz_lingbu_info': '锁定技,结束阶段,你令所有己方角色摸两张牌.',
            'tmzz_minjie': '敏捷',
            'tmzz_minjie_info': '锁定技,你跳过判定阶段和弃牌阶段.',
            'tmzz_xinmozanian': '心魔-杂念',
            'tmzz_xinmozanian_info': '锁定技,你与其他角色距离-1;你不能被翻面;游戏开始时,你废除判定区;每回合开始时,你回复所有装备栏并摸一张牌.',
            'tmzz_xinmoxienian': '心魔-邪念',
            'tmzz_xinmoxienian_info': '锁定技,你与其他角色距离-2;你不能被翻面;游戏开始时,你废除判定区;每回合开始时,你回复所有装备栏并摸一张牌.',
            'tmzz_xinmoseyu': '心魔-色欲',
            'tmzz_xinmoseyu_info': '锁定技,一名敌方角色的准备阶段开始时,其须选择一项:1、跳过本回合出牌阶段;2、(仅无异常状态时可选)跳过本回合摸牌阶段;3、(仅异性可选)交给你两张牌.',
            'tmzz_cannianchengxin': '残念-诚信',
            'tmzz_cannianchengxin_switch': '残念-诚信',
            'tmzz_cannianchengxin_info': '体力值首次减少至一半或更少时激活此技能.锁定技,你的手牌对敌方角色可见;若你手牌中没有/有【闪】,则防止你受到的所有伤害/你的弃牌及结束阶段改为出牌及准备阶段.',
            'tmzz_cannianzhenjie': '残念-贞洁',
            'tmzz_cannianzhenjie_switch': '残念-贞洁',
            'tmzz_cannianzhenjie_info': '体力值首次减少至一半或更少时激活此技能.觉醒技,准备阶段,复活所有己方已阵亡角色,令所有己方其他角色回复所有体力值并将手牌摸至体力上限,且令其于本局游戏中防止所有受到的伤害.',
            'tmzz_shenshoutianming': '神兽-天命',
            'tmzz_shenshoutianming_info': '锁定技,你不能被翻面;你使用牌无距离限制;游戏开始时,你废除判定区;每回合开始时,你令所有己方角色摸一张牌.',
            'tmzz_linglongtiebi': '鲮龙铁壁',
            'tmzz_linglongtiebi_info': '锁定技,当一名敌方角色对你造成伤害后,你对其造成2点伤害,对其他敌方角色各造成1点伤害;每回合首次有己方其他角色受到伤害时,你将伤害转移给自己.',
            'tmzz_linglongpowei': '鲮龙-破围',
            'tmzz_linglongpowei_switch': '鲮龙-破围',
            'tmzz_linglongpowei_info': '体力值首次减少至一半或更少时激活此技能.锁定技,一名未受伤/已受伤的敌方角色的结束阶段开始时,其/你视为对你/其使用一张【决斗】.',
        },
        dynamicTranslate: {//动态翻译
        },
        perfectPair: {//珠联璧合
        },
    };
    for (var name in tmzz.character) {
        if (!tmzz.character[name][4]) tmzz.character[name][4] = [];
        tmzz.character[name][4].push('ext:桃源幻梦/image/boss/' + name + '.jpg');
        tmzz.character[name][4].push('die:ext:桃源幻梦/audio/阵亡配音/boss/' + name + '.mp3');
    }
    lib.config.characters.add('tmzz');
    lib.config.all.characters.add('tmzz');
    lib.translate.tmzz_character_config = '<span style="font-family: xingkai">天命之战</span>';
    return tmzz;
});

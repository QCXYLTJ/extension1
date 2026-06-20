import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '生化狂潮',
        content() {
            game.playYingx = function (fn, dir, sex) {
                if (lib.config.background_speak) {
                    if (dir && sex) game.playAudio(dir, sex, fn);
                    else if (dir) game.playAudio(dir, fn);
                    else game.playAudio('../extension/生化狂潮/audio', fn);
                }
            };
            if (lib.brawl) {
                lib.brawl.shenghuakuangchao3 = {
                    name: '生化狂潮-英雄',
                    mode: 'identity',
                    intro: ['移植神杀的僵尸模式,规则有改动.背景和素材均取自CSOL.', '模式主题为<英雄>,英雄拥有独一无二的强力武器,选出能和主公武器配合的武将可以大大提高人类胜率.<br><span style=\"color: #EE7621;font-size:18px\"><p align="center">规则介绍</p></span>', '1.在此模式中主公、忠臣为人类,反贼为僵尸.武将若背面朝上则会获得<潜行>技能.', '2.游戏开始时,所有角色都为人类,主公拥有专属角色安德烈,并从第二轮开始每轮获得1个退治印记.', '3.若主公死亡,则下一名人类玩家成为主公,生命与上限+1,并获取相当于原主公退治标记数-1的退治标记,但不会继承专属角色.', '4.第二轮开始时,病毒扩散,此轮中会有X个人变为僵尸(X为存活人数/6(向上整取)).', '5.第一个出现的僵尸拥有<潜行>状态直至下个回合开始', '6.僵尸击杀人类后,被击杀的人类与次级僵尸组成双将,非僵尸击杀的人类死亡后与次级僵尸组成双将,主公击杀忠臣没有惩罚.', '7.除英雄僵尸外所有僵尸都有进化标记,积攒一定的标记可以进化为更强大的僵尸或者更换同级僵尸,体力值上限根据选择的僵尸决定,僵尸武将卡上多少体力值上限则你就有多少上限.', '8.作者没有为AI写<重组>和<弑神双剑>的技能使用逻辑,因为把握不住.但是真人使用没有问题.', '9.第二轮自然出现的母体僵尸拥有一次【无伤重组】技能,在出牌阶段前使用可以更换僵尸,体力值上限根据选择的僵尸决定,僵尸武将卡上多少体力值上限则你就有多少上限.', '10.人类每对僵尸造成1次伤害或从第二轮开始每轮获得一个补给标记,出牌阶段可以消耗3个补给标记选择一项:①获得【致命打击】②摸三张牌③获得【弑神双剑】④获得【逆界星轮】⑤获得【虎王M95】', '11.人类每击杀一只僵尸则全体人类可获得一个<士气>标记,回合开始根据<士气>标记的数量获得相关技能直至回合结束.1个<士气>标记,拥有【旧短兵】,2个<士气>标记,拥有【标英姿】,3个及以上<士气>标记,拥有【无双】.', '12.请留意每个僵尸的固有技能,部分僵尸固有技能数值不同', '<br><span style=\"color: #EE7621;font-size:18px\"><p align="center">游戏结束条件</p></span>', '1.退治成功,所有人类胜利,僵尸以及成为僵尸的人类失败:<br>①任何玩家的回合开始时,主公退治印记到达8.<br>②击杀所有僵尸.', '2.退治失败,所有僵尸胜利,人类失败:主公阵亡并且场上没有可以代替主公的人类.'],
                    content: {
                        gameStart() {
                            for (var i of game.players) {
                                if (i != game.zhu) {
                                    i.identity = 'zhong';
                                }
                            }
                            game.zhu.storage.fzjsNumber = 0;
                            game.showIdentity();
                        },
                    },
                    init() {
                        game.saveConfig('identity_mode', 'normal', 'identity');
                        lib.skill._jisuangailv = {
                            trigger: { global: 'phaseAfter' },
                            forced: true,
                            filter(event, player) {
                                return player == game.zhu && game.zhu.storage._tuizhi == 1;
                            },
                            content() {
                                if (game.zhu.storage.jisuangailv == undefined) game.zhu.storage.jisuangailv = 0;
                                game.zhu.storage.jisuangailv++;
                            },
                            intro: {
                                content: 'mark',
                            },
                        };
                        lib.skill._tuizhi = {
                            trigger: { global: 'roundStart' },
                            forced: true,
                            _priority: 10,
                            filter(event, player) {
                                return player == game.zhu && game.roundNumber >= 2;
                            },
                            content() {
                                if (player.storage._tuizhi == undefined) player.storage._tuizhi = 0;
                                player.storage._tuizhi++;
                                player.markSkill('_tuizhi');
                            },
                            intro: {
                                content: 'mark',
                            },
                        };
                        lib.skill._tuizhi2 = {
                            trigger: { player: 'phaseZhunbeiBegin' },
                            forced: true,
                            _priority: 5,
                            filter(event, player) {
                                return game.zhu.storage._tuizhi >= 8;
                            },
                            content() {
                                ui.backgroundMusic.src = 'extension/生化狂潮/audio/hunman_win1.mp3';
                                if (game.me.identity == 'zhu' || game.me.identity == 'zhong') {
                                    game.over(true);
                                } else {
                                    game.over(false);
                                }
                            },
                        };
                        lib.skill._jiangshi = {
                            trigger: { player: 'dieBegin' },
                            forced: true,
                            filter(event, player) {
                                return player.identity == 'zhong';
                            },
                            content() {
                                if (player.storage.fzjs == 0) {
                                    player.draw(4);
                                    player.discard(player.get('hej'));
                                    player.uninit;
                                    player.init(player.name, 'high_zombie');
                                    player.maxHp = 5;
                                    player.hp = player.maxHp;
                                    player.addTempSkill('zom_regroup_first', 'phaseUseBegin');
                                    player.removeSkill('fengyin');
                                    player.identity = 'fan';
                                    player.storage._supplyMark = 0;
                                    player.storage._moraleMark = 0;
                                    if (get.population('fan') == 1 && game.roundNumber == 2 && player.name2 != 'anyingbabi') {
                                        player.addTempSkill('qianxing', { player: 'phaseZhunbeiBegin' });
                                    }
                                } else {
                                    player.draw(4);
                                    player.discard(player.get('hej'));
                                    player.uninit;
                                    player.init(player.name, 'low_zombie');
                                    player.maxHp = 3;
                                    player.hp = player.maxHp;
                                    player.removeSkill('fengyin');
                                    player.identity = 'fan';
                                    player.storage._supplyMark = 0;
                                    player.storage._moraleMark = 0;
                                    if (get.population('fan') == 1 && game.roundNumber == 1) {
                                        player.addTempSkill('qianxing', { player: 'phaseZhunbeiBegin' });
                                    }
                                }
                                game.showIdentity();
                                trigger.untrigger();
                                trigger.finish();
                            },
                        };
                        lib.skill._jiangshi2 = {
                            trigger: { player: 'phaseZhunbeiBegin' },
                            forced: true,
                            popup: false,
                            silent: true,
                            _priority: 15,
                            filter(event, player) {
                                if (!player.storage._tuizhi && game.zhu.storage._tuizhi == 1) {
                                    let totalPlayers = game.players.length;
                                    let selectedPlayers = 0;
                                    let maxProbability = 0;
                                    if (totalPlayers <= 6) {
                                        maxProbability = game.zhu.storage.jisuangailv / (totalPlayers - 1);
                                    } else if (totalPlayers <= 12) {
                                        maxProbability = (game.zhu.storage.jisuangailv * 2) / (totalPlayers - 1);
                                    } else if (totalPlayers <= 18) {
                                        maxProbability = (game.zhu.storage.jisuangailv * 3) / (totalPlayers - 1);
                                    }
                                    let individualProbability = maxProbability - game.zhu.storage.fzjsNumber;
                                    for (var i = 0; i < totalPlayers; i++) {
                                        if (Math.random() <= individualProbability) {
                                            selectedPlayers++;
                                            if (selectedPlayers == 2) {
                                                break;
                                            }
                                        }
                                    }
                                    return selectedPlayers == 2;
                                }
                                return false;
                            },
                            content() {
                                player.die();
                                player.identity = 'zhong';
                                player.storage.fzjs = 0;
                                game.zhu.storage.fzjsNumber++;
                            },
                        };
                        lib.skill._fanmian = {
                            trigger: {
                                player: 'turnOverAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.isTurnedOver();
                            },
                            content() {
                                player.addTempSkill('qianxing', { player: 'phaseZhunbeiBegin' });
                            },
                        };
                        lib.skill._fanmian2 = {
                            trigger: {
                                player: 'turnOverAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return !player.isTurnedOver();
                            },
                            content() {
                                player.removeSkill('qianxing');
                            },
                        };
                        lib.skill._jiangshi4 = {
                            trigger: { player: 'dieBegin' },
                            forced: true,
                            filter(event, player) {
                                return player.storage._tuizhi > 0;
                            },
                            content() {
                                game.playYingx(['zhugong_die', 'zhugong_die1'].randomGet());
                                for (var i of game.players) {
                                    if (i.identity == 'zhong') {
                                        event.target = i;
                                        break;
                                    }
                                    if (get.population('zhong') == 0) {
                                        return game.playYingx(['win_zombi', 'win_zombi_2'].randomGet());
                                    }
                                }
                                if (event.target) {
                                    game.zhu.line(event.target, 'thunder');
                                    game.log(game.zhu, '死亡', event.target, '成为了新的主公!');
                                    game.zhu = event.target;
                                    event.target.identity = 'zhu';
                                    event.target.gainMaxHp();
                                    event.target.recover();
                                    event.target.storage.fzjsNumber = player.storage.fzjsNumber;
                                    event.target.storage._tuizhi = player.storage._tuizhi - 1;
                                    event.target.markSkill('_tuizhi');
                                    game.showIdentity();
                                }
                            },
                        };
                        lib.skill._humanwin = {
                            trigger: { player: 'dieBegin' },
                            forced: true,
                            filter(event, player) {
                                return event.player.identity == 'fan' && get.population('fan') == 1 && game.roundNumber > 2;
                            },
                            content() {
                                game.playYingx(['win_human', 'win_human_2'].randomGet());
                            },
                        };
                        lib.skill._jiangshiTx = {
                            _priority: 2,
                            forced: true,
                            trigger: { player: 'dieBefore' },
                            filter(event, player) {
                                return player.identity == 'zhong';
                            },
                            content() {
                                if (player.sex == 'female') return game.playYingx(['human_death_female_01', 'human_death_female_02'].randomGet());
                                if (player.sex == 'male') return game.playYingx(['human_death_02', 'human_death_01'].randomGet());
                                game.log(player.name + '被感染');
                            },
                        };
                        lib.skill._jiangshiTx2 = {
                            forced: true,
                            trigger: { player: 'dieBefore' },
                            filter(event, player) {
                                return player.identity == 'fan';
                            },
                            content() {
                                if (player.sex == 'male') {
                                    game.playYingx(['zombi_death_1', 'zombi_death_2'].randomGet());
                                } else if (player.sex == 'female') {
                                    game.playYingx(['zombi_death_female_1', 'zombi_death_female_2', 'zombi_death_female_3'].randomGet());
                                }
                                game.log('僵尸死亡');
                            },
                        };
                        lib.skill._jiangshiTx3 = {
                            trigger: { player: 'phaseZhunbeiBegin' },
                            forced: true,
                            filter(event, player) {
                                return player.storage._tuizhi == 1 && player.storage.ayjljs != 0;
                            },
                            content() {
                                game.playYingx(['night_falls1', 'night_falls2'].randomGet());
                                for (var i of game.players) {
                                    i.storage.ayjljs = 0;
                                }
                                game.log('暗夜来袭');
                            },
                        };
                        lib.skill._yingxiongchuxian = {
                            trigger: { player: 'phaseZhunbeiBefore' },
                            forced: true,
                            filter(event, player) {
                                return player.identity == 'zhu' && game.roundNumber == 1;
                            },
                            content() {
                                player.init(player.name, 'andelie');
                                player.uninit;
                                player.gainMaxHp(1);
                                player.recover(player.maxHp);
                                game.log('英雄出现');
                                if (player.sex == 'male') return game.playYingx(['yingxiongchuxian1_male', 'yingxiongchuxian2_male'].randomGet());
                                if (player.sex == 'female') return game.playYingx(['yingxiongchuxian1_female', 'yingxiongchuxian2_female'].randomGet());
                            },
                        };
                        lib.skill._the_last_human = {
                            trigger: {
                                global: 'dieAfter',
                            },
                            forced: true,
                            limited: true,
                            filter(event, player) {
                                return (event.player.identity == 'zhu' || event.player.identity == 'zhong') && ((get.population('zhong') == 1 && get.population('zhu') == 0) || (get.population('zhong') == 0 && get.population('zhu') == 1));
                            },
                            content() {
                                ui.backgroundMusic.src = 'extension/生化狂潮/audio/the_last_human.mp3';
                            },
                        };
                        lib.skill._supplyMark = {
                            intro: {
                                content: 'mark',
                            },
                            trigger: {
                                player: 'damageAfter',
                                source: 'damageSource',
                            },
                            filter(event, player) {
                                return event.player.identity == 'fan' && ['zhu', 'zhong'].includes(player.identity);
                            },
                            forced: true,
                            content() {
                                if (player.storage._supplyMark == undefined) player.storage._supplyMark = 0;
                                player.storage._supplyMark++;
                                player.markSkill('_supplyMark');
                            },
                        };
                        lib.skill._supplyMark2 = {
                            intro: {
                                content: 'mark',
                            },
                            trigger: {
                                global: 'roundStart',
                            },
                            filter(event, player) {
                                return ['zhu', 'zhong'].includes(player.identity) && game.roundNumber > 1;
                            },
                            forced: true,
                            content() {
                                if (player.storage._supplyMark == undefined) player.storage._supplyMark = 0;
                                player.storage._supplyMark++;
                                player.markSkill('_supplyMark');
                            },
                        };
                        lib.skill._supply = {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.storage._supplyMark > 2;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseControl('致命打击', '摸三张牌', '弑神双剑', '逆界星轮', '虎王M95', function (event, player) {
                                        return '选择一种补给';
                                    })
                                    .set('prompt', '请选择一种补给:')
                                    .set('ai', function () {
                                        if (player.countCards('h') <= 1) return '摸三张牌';
                                        return '致命打击';
                                    });
                                ('step 1');
                                if (result.control == '致命打击') {
                                    game.playYingx(['supply'].randomGet());
                                    if (!lib.inpile.includes('head_kill')) lib.inpile.add('head_kill');
                                    player.gain(game.createCard2('head_kill', 'heart', 13), 'gain2');
                                    player.storage._supplyMark -= 3;
                                } else if (result.control == '摸三张牌') {
                                    game.playYingx(['supply'].randomGet());
                                    player.draw(3);
                                    player.storage._supplyMark -= 3;
                                } else if (result.control == '弑神双剑') {
                                    game.playYingx(['supply'].randomGet());
                                    if (!lib.inpile.includes('card_dualswords')) lib.inpile.add('card_dualswords');
                                    player.gain(game.createCard2('card_dualswords', 'club', 13), 'gain2');
                                    player.storage._supplyMark -= 3;
                                } else if (result.control == '逆界星轮') {
                                    game.playYingx(['supply'].randomGet());
                                    if (!lib.inpile.includes('card_star')) lib.inpile.add('card_star');
                                    player.gain(game.createCard2('card_star', 'club', 13), 'gain2');
                                    player.storage._supplyMark -= 3;
                                } else if (result.control == '虎王M95') {
                                    game.playYingx(['supply'].randomGet());
                                    if (!lib.inpile.includes('card_tiger')) lib.inpile.add('card_tiger');
                                    player.gain(game.createCard2('card_tiger', 'club', 13), 'gain2');
                                    player.storage._supplyMark -= 3;
                                }
                            },
                            ai: {
                                order: 11,
                                result: {
                                    player(player) {
                                        let history = player.getHistory('useCard', function (card) {
                                            return card.name == 'sha';
                                        });
                                        let hasDamageCards =
                                            player.countCards('h', function (card) {
                                                return get.tag(card, 'damage') > 0;
                                            }) > 0;
                                        if (!history || history.length == 0) {
                                            if (hasDamageCards) {
                                                return 11;
                                            } else {
                                                return 0;
                                            }
                                        } else {
                                            return 0;
                                        }
                                    },
                                },
                            },
                        };
                        lib.skill._gainGun = {
                            prompt: '是否获得【HK416  ♣️️4】？(仅限第一轮)',
                            trigger: {
                                player: 'phaseZhunbeiBefore',
                            },
                            filter(event, player) {
                                return player.identity == 'zhong' && game.roundNumber == 1;
                            },
                            content() {
                                player.gain(game.createCard2('HK416', 'club', 4), 'gain2');
                            },
                        };
                        lib.skill._moraleMark = {
                            intro: {
                                content: 'mark',
                            },
                            trigger: { source: 'dieAfter' },
                            filter(event, player) {
                                return event.player.identity == 'fan' && ['zhu', 'zhong'].includes(event.source.identity);
                            },
                            forced: true,
                            content() {
                                let human = game.filterPlayer(function (target) {
                                    return ['zhu', 'zhong'].includes(target.identity);
                                });
                                for (var i = 0; i < human.length; i++) {
                                    human[i].storage._moraleMark = (human[i].storage._moraleMark || 0) + 1;
                                    human[i].markSkill('_moraleMark');
                                }
                            },
                        };
                        lib.skill._moraleSkill = {
                            trigger: { player: 'phaseBefore' },
                            filter(event, player) {
                                return player.storage._moraleMark > 0 && player.identity != 'fan';
                            },
                            forced: true,
                            content() {
                                if (player.storage._moraleMark == 1) {
                                    player.addTempSkill('duanbing');
                                } else if (player.storage._moraleMark == 2) {
                                    player.addTempSkill('duanbing');
                                    player.addTempSkill('yingzi');
                                } else if (player.storage._moraleMark > 2) {
                                    player.addTempSkill('duanbing');
                                    player.addTempSkill('yingzi');
                                    player.addTempSkill('wushuang');
                                }
                            },
                        };
                        lib.translate._tuizhi = '退治';
                        lib.translate._tuizhi2 = '退治';
                        lib.translate._jiangshi = '僵尸';
                        lib.translate._jiangshi2 = '母体出现';
                        lib.translate._fanmian = '潜行';
                        lib.translate._fanmian2 = '失去潜行';
                        lib.translate._jiangshi4 = '主公阵亡';
                        lib.translate._jiangshiTx = '感染';
                        lib.translate._jiangshiTx2 = '僵尸死亡';
                        lib.translate._jiangshiTx3 = '暗夜来袭';
                        lib.translate._yingxiongchuxian = '英雄出现';
                        lib.translate._supplyMark = '补给';
                        lib.translate._supplyMark2 = '补给';
                        lib.translate._supplyMark_info = '对僵尸造成伤害可获得1点补给标记';
                        lib.translate._supply = '补给';
                        lib.translate._supply_info = '出牌阶段可消耗3个补给标记来选择①获得一张【致命打击】②摸三张牌③获得【弑神双剑】④获得【逆界星轮】⑤获得【虎王M95】';
                        lib.translate._the_last_human = '最后人类';
                        lib.translate._gainGun = '发枪';
                        lib.translate._moraleMark = '士气';
                        lib.translate._moraleSkill = '士气';
                        lib.translate._humanwin = '人类胜利';
                    },
                };
                if (!_status.extensionmade) _status.extensionmade = [];
                _status.extensionmade.push('生化狂潮3:英雄');
            }
        },
        precontent() {
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '生化狂潮',
                    connect: true,
                    character: {
                        andelie: ['male', 'wei', 4, ['yingxiong', 'hero_mieshi'], ['des:指挥官英雄安德烈·弗朗西斯跟随着两位经验丰富的警员杰拉德与大卫·布莱克走在工厂中,地上的尸体让人不寒而栗,此时,他们同时听到了机器运转的声音,等待走过去一看,那个房间里布满了一堆不知名的机器,弗朗西斯让他们上好枪膛,随即他扔出一颗榴弹,谁知到里面冲出了无数红眼愤怒的僵尸,他们奋力抵抗,可僵尸的无限复活和数量优势让他们陷入绝境.最后,杰拉德逃了出去,大卫躲在了办公室里,而弗朗西斯摔倒在缝隙里不省人事.<br>待弗朗西斯醒来,僵尸和同伴都不见了,他只能回到基地.当他知道杰拉德叛变事情有蹊跷时,他决定找到杰拉德和大卫,问清事实真相.可刚到沙漠基地便遇到了那些2次变异的僵尸,让他不得不先排除这些障碍.可弗朗西斯并不知道自己已经是癌症晚期,他的英雄之怒正在陪伴他度过人生的最后一些时光. <br>在此之后,他被任命为特种部队的副队长执行搜寻研究所人员的任务,在地狱围栏中遭遇埋伏圈被大量丧尸包围,虽然小队队员们奋力抵抗,但有限的弹药和敌众我寡的形势使小队很快就被丧尸群包围,而安德烈副队长受到队友们的帮助,拼命地冲破了丧尸的包围圈,但由于癌症病情的再度恶化让他感觉到自己命不久矣,他把自己在途中所获得的情报标示在地图上让后续部队能够按此继续进行调查,之后再次返回到阵亡队友的身边静静地等待死神的降临......']],
                        low_zombie: ['male', 'qun', 3, ['zom_baozou', 'zom_shidu', 'zom_jinhua', 'mashu'], ['des:由于REX研究所爆炸而被感染的工作人员.是最低级的僵尸,拥有普通的进化能力.']],
                        high_zombie: ['male', 'qun', 5, ['zom_baozou', 'zom_lizhao', 'zom_shidu', 'zom_jinhua_hero', 'zom_bianyi', 'zom_regroup', 'mashu'], ['des:REX研究所爆炸后,有逃出的工作人员不幸被爆炸震荡的塔吊砸死,然而化尸黄水的力量却让本该死去的尸体站了起来...']],
                        hero_zombie: ['male', 'qun', 7, ['zom_baozou', 'zom_lizhao', 'zom_shidu', 'zom_guozai', 'zom_bianyi_hero', 'zom_hero_state', 'zom_hero_mashu'], ['des:拥有义体化身躯的强大僵尸,强大的伤害给予对手最致命的打击,并以拥有强大的防御能力而著称,堪称生化战场终极兵器.']],
                        anyingbabi: ['female', 'qun', 3, ['zom_baozou', 'zom_shidu', 'zom_jinhua_hero', 'zom_bianyi', 'zom_regroup', 'mashu', 'zom_guimei'], ['des:大企业老板的女儿--莎拉,是位极受宠爱的天之骄女,由于父亲事业有成,长年工作在外,使莎拉心中一直有遗憾无法好好与父亲相处,长期待在大宅中的莎拉,总是独自玩耍,为了排遣寂寞莎拉总是到处捉弄人,一下偷打女佣的头或是拿橡皮筋射管家的屁股;莎拉的顽皮让周遭的人头痛不已,但其实大家都知道,莎拉只是想找人陪她玩而已;为使爱女能保有童真的笑颜,大老板决定放下手边工作于农历新年期间带全家到意大利的某偏僻小镇度假.在空气清新的纯朴小镇上,孩童快乐的嬉戏,镇民快乐的歌唱,仿佛时间都变慢了起来,身心获得放松的大老板,终于有充足的时间抱着莎拉,仔细听着她说着所有的生活趣事,当然也包含她是如何捉弄周遭的大人们,莎拉喜悦的心情全写在脸上.一天夜里,走廊出现杂乱的脚步声,莎拉正纳闷的想着,就被父亲拦腰抱起,往地下室冲去,莎拉只记得父亲叮咛她,不管发生什么事都不准出来,莎拉傻傻的点头,父亲便起身离开…过没多久,莎拉听见嘶嘶苏苏的声音,便朝门缝瞧去,只见一群怪异的叔叔、阿姨口中念着:<我们是它们的奴隶>朝着地下室走来,莎拉无法思考仅能缩在角落,希望爸爸快来救她……无法逃离被僵尸感染恶运的莎拉,仿佛还留有生前的记忆,仍调皮的找寻可以陪她玩耍的人类.']],
                        tufu_zombie: ['male', 'qun', '7/7/2', ['zom_lizhao', 'zom_shidu', 'zom_jinhua_hero', 'zom_bianyi', 'zom_regroup', 'zom_guishou'], ['des:达叔是莎拉家的厨师,幽默风趣、待人亲切是全家人对达叔的印象,达叔不像一般大厨会穿着白色的大厨服,反而总是衬衫西装裤的打扮,记得达叔曾说过:「这套战斗服是我当年获颁最佳金牌厨师奖所穿的衣服,对我有特殊意义」,但我们始终不知道达叔口中的特殊意义是什么…. 拥有30年厨师经验的达叔,最爱做的事就是提供各式精美料理给家里的"小小姐""莎拉"品尝,因为"莎拉"小姐总是独立一人玩耍,有时耍起脾气就是1~2天不吃不喝,让全家人非常焦急,幸好达叔总是能搬出各种绝活让莎拉心甘情愿的开口用餐;后来我们终于知道,原来当年达叔参加颁奖典礼时,他的妻子与年幼的爱女在赶来的路上,不幸出车祸过世了,当时的达叔开始一厥不振,在最落魄的时候被X大企业老板所收留,当达叔第一眼见到年幼的莎拉时,便喜爱上这个小女孩,也可能是移情作用吧,达叔总是很细心的呵护着莎拉.  晨曦新年期间,达叔陪同莎拉一行人来到意大利的某偏僻小镇度假,达叔施展浑身解数烹调了满桌精致的料理,看着全家人开心的用餐、闲聊,是达叔最有成就感的时候;一天夜里,达叔照惯例在厨房研究着料理时,只见外头出现像行尸走肉般的村民,向庄园移动着,达叔见对方来者不善,担心小姐会有危险,马上拔起菜刀准备来个英雄式的演出,不料这批人可不是一般平民老百姓啊.  达叔挥舞着手中的菜刀,企图想让这些僵尸打消进攻庄园的念头,但是,这一点用也没有,僵尸根本不为所动的直直朝达叔身上扑来,达叔在还来不及警告大家的情况下就瞬间被感染成僵尸了;达叔成为僵尸后,因保有强烈要保护莎拉的意念,使得达叔在变身为僵尸时,外型并没有太大的改变,虽已丧失人类意识的达叔,口中喃喃自语的念道:「我来陪你玩」.']],
                        emo_zombie: ['male', 'qun', 4, ['zom_baozou', 'zom_shidu', 'zom_jinhua_hero2', 'zom_bianyi_hero', 'zom_regroup', 'mashu', 'zom_zhendang'], ['des:在释放异形斗兽的过程中,其特殊基因发生了扩散传染,促使大量的生化物种变异.恶魔之子与异形斗兽有着相似的遗传基因,集合了迄今发现的所有已知僵尸的优势,具有强大的攻击性.次级形态恶魔之子进化为母体形态恶魔之子时,其投掷攻击可使对方武器掉落,或能使对方处于无法攻击的状态.']],
                        wugu_zombie: ['male', 'qun', 4, ['zom_baozou', 'zom_shidu', 'zom_jinhua_hero2', 'zom_bianyi_hero', 'zom_regroup', 'mashu', 'zom_zhouliao', 'zom_xieshu', 'zom_zuzhou'], ['des:生化世界的灵魔生物,被腐坏双手封印的巫蛊木偶把对敌人的诅咒化为祝福的圣光,已遁为行尸游魂的术士却行使着生命的圣职,它的诅咒延续生命的喘息,也将生命如烛火般捻灭.']],
                        human_feiernanduo: ['male', 'wei', 4, ['gain_shengshui'], ['des:待构思,有点弱']],
                        ceshi_cha: ['male', 'wei', 5, ['gain_weapon'], ['des:测试武将,无意义']],
                        story_zombie: ['male', 'qun', 5, ['zom_shidu', 'zom_baozou', 'zom_bianyi', 'mashu'], ['des:大灾变剧情僵尸']],
                        songzang_zombie: ['male', 'qun', '5/5/2', ['zom_lizhao', 'zom_shidu', 'zom_bianyi', 'zom_jinhua_hero', 'zom_regroup', 'zom_chongji', 'zom_poshi', 'zom_yinghua'], ['des:无人知晓送葬者是如何出现在这个世界上的,它酷似中世纪专职对魔女行刑的拷问人员.再次复活于世的它们进行着更为残酷的杀戮,而这次所使用的武器则是令人闻风丧胆的铁处女…']],
                        hero_female_zombie: ['female', 'qun', 3, ['zom_baozou', 'zom_shidu', 'zom_hero_mashu', 'zom_hero_state', 'zom_bianyi_hero', 'zom_benxi', 'zom_bizhang'], ['des:婀娜的身姿下蕴藏着不容小觑的实力,能够瞬移至标记地点给予敌人突然袭击,高速的移动能力也让对手时刻不敢怠慢.']],
                    },
                    translate: {
                        andelie: '安德烈',
                        low_zombie: '次级僵尸',
                        high_zombie: '母体僵尸',
                        hero_zombie: '暴虐钢骨',
                        anyingbabi: '暗影芭比',
                        tufu_zombie: '憎恶屠夫',
                        emo_zombie: '恶魔之子',
                        wugu_zombie: '巫蛊术尸',
                        human_feiernanduo: '费尔南多',
                        ceshi_cha: '测试武将',
                        story_zombie: '僵尸',
                        songzang_zombie: '送葬者',
                        hero_female_zombie: '幻痛夜魔',
                        yingxiong: '英雄',
                        yingxiong_info: '锁定技,你每回合第一次成为【杀】或【决斗】的目标后,若你的手牌数小于等于该角色,此牌对你无效;当你受到大于1点的伤害时,你将伤害值改为1点;',
                        yingxiong_fuyin: '英雄_父荫',
                        yingxiong_fuyin_info: 'undefined',
                        yingxiong_baiyin: '英雄_白银',
                        yingxiong_baiyin_info: '',
                        hero_mieshi: '灭尸',
                        hero_mieshi_info: '锁定技.①准备阶段开始时,若你的装备区里没有【英雄武器】,你选择一张【英雄武器】牌并置于装备区;②当你即将失去【英雄武器】或即将废除武器栏时,取消之.③你手牌区内的武器牌均视为【杀】④你不能将装备区内的武器牌当做其他牌使用或打出.',
                        svdex_damage: 'boom',
                        QuadBarrel_damage: '破碎炙炎',
                        QuadBarrel_wansha: '杀绝',
                        Dualkriss_skill: '倾泻',
                        m134ex_qinggang: 'M13-无视防具',
                        m134ex_qinggang_info: '',
                        m134ex_choose: 'M134-选择',
                        m134ex_choose_info: '',
                        m134ex_skill: '英雄M134',
                        m134ex_skill_info: '',
                        zom_baozou: '暴走',
                        zom_baozou_info: '锁定技,你使用【杀】没有次数限制.',
                        zom_lizhao: '利爪',
                        zom_lizhao_info: '锁定技,你的杀造成的伤害+1.',
                        zom_shidu: '尸毒',
                        zom_shidu_info: '锁定技,你的装备牌都视为【铁锁连环】.',
                        zom_shidu2: '尸毒-重铸',
                        zom_jinhua_mark: '进化',
                        zom_jinhua: '进化',
                        zom_jinhua_info: '锁定技,当你受到或造成伤害后,你获得X个<进化>标记(X为伤害点数).当你标记达到5点,且场上体力值发生变化或你即将受到伤害,你弃置5个标记进化,并回复体力至体力值上限.',
                        zom_jinhua_hero: '进化',
                        zom_jinhua_hero_info: '锁定技,当你受到或造成伤害后,你获得X个<进化>标记(X为伤害点数).若你的标记达到10个,在你进入准备阶段或即将受到伤害时,你可弃置所有标记将僵尸武将牌更换为英雄僵尸,弃置判定区内的牌并回复体力至上限.若你选择【幻痛夜魔】则获得<潜行>技能直至回合开始.',
                        zom_jinhua_hero2: '进化',
                        zom_jinhua_hero2_info: '锁定技,当你受到或造成伤害后,你获得X个<进化>标记(X为伤害点数).若你的标记达到8个,在你进入准备阶段或即将受到伤害时,你可弃置所有标记将僵尸武将牌更换为英雄僵尸,弃置判定区内的牌并回复体力至上限.若你选择【幻痛夜魔】则获得<潜行>技能直至回合开始.',
                        zom_guozai: '过载',
                        zom_guozai_info: '锁定技,每四轮限一次.当你体力值降为1以下,你将体力值回复至1点,并弃置判定区内的牌,摸等同于人类数量的牌,免疫一切伤害直至自己回合结束.【免疫】状态下:你拥有技能【无双】.',
                        zom_bianyi: '变异',
                        zom_bianyi_info: '锁定技,你的出牌阶段开始时,摸X-2张牌.(X为人类数量减去僵尸数量)',
                        zom_bianyi_hero: '变异',
                        zom_bianyi_hero_info: '锁定技,你的出牌阶段开始时,摸X张牌.(X为人类数量减去僵尸数量)',
                        zom_guimei: '鬼魅',
                        zom_guimei_info: '每两轮限一次.出牌阶段使用,你进入【潜行】直至下回合开始;若你处于【潜行】状态下,你造成的伤害+1.',
                        guimei_attack: '隐袭',
                        guimei_attack_info: 'undefined',
                        head_kill_skill: '爆头',
                        head_kill_skill_info: '对僵尸造成的伤害+1,若僵尸因此进入濒死则直接死亡.',
                        head_kill_skill_dying: '致命一击',
                        head_kill_skill_dying_info: 'undefined',
                        lose_head_kill: '销毁_致命打击',
                        lose_head_kill_info: 'undefined',
                        zom_zhendang: '震荡',
                        zom_zhendang_info: '你的出牌阶段开始时,获得一张【震荡波】.',
                        lose_card_zhendang: '销毁_震荡波',
                        lose_card_zhendang_info: 'undefined',
                        zhendang_sha: '缴械',
                        zhendang_sha_info: 'undefined',
                        lose_zhendang_sha: '失去【缴械】',
                        lose_zhendang_sha_info: 'undefined',
                        zom_guishou: '鬼手',
                        zom_guishou_info: '你可以将红色牌当作【鬼手】使用.',
                        guishou_shan: '束缚',
                        guishou_shan_info: 'undefined',
                        zom_zhouliao: '咒疗',
                        zom_zhouliao_info: '每两轮限一次,你可以弃置一张红色牌并流失一点体力,选择除你以外的任意名僵尸回复一点体力,若有僵尸未受伤则该僵尸摸一张牌.结算完成后你获得一点护甲.',
                        zom_xieshu: '邪术',
                        zom_xieshu_info: '每两轮限一次,当僵尸因失去体力而进入濒死状态时,你可令其回复1点体力并摸一张牌.',
                        zom_zuzhou: '诅咒',
                        zom_zuzhou_info: '锁定技,出牌阶段你的第一张【杀】对人类造成伤害时,目标非锁定技无效直至其下回合结束.',
                        zom_regroup: '重组',
                        zom_regroup_info: '每三轮限一次.出牌阶段你可以弃置3个<进化>标记来更换僵尸,更换完成后你流失一点体力.',
                        zom_regroup_first: '无伤重组',
                        zom_regroup_first_info: '你可以更换你的僵尸武将',
                        gain_shengshui: '水雷',
                        gain_shengshui_info: '锁定技,每两轮限一次,你于出牌阶段获得1张【圣水手雷】.',
                        lose_card_shengshui: '销毁水雷',
                        lose_card_shengshui_info: 'undefined',
                        lose_shengshui_damage: '净化完成',
                        lose_shengshui_damage_info: 'undefined',
                        shengshui_damage: '圣水净化',
                        shengshui_damage_info: 'undefined',
                        star_skill_mark: '星',
                        star_skill_mark_info: 'undefined',
                        star_skill: '星能',
                        star_skill_info: '出牌阶段限一次.是否弃置一颗<星>来令本回合的下一张【杀】无法被响应且额外选择至多两个目标？',
                        star_mark_use: '跃迁就绪',
                        star_mark_use_info: 'undefined',
                        star_yueqian: '跃迁',
                        star_yueqian_info: '当你受到致命伤害后,抵消此次伤害,随机更换你的座次,并立即进入你的额外回合.',
                        gain_weapon: '测试技能',
                        gain_weapon_info: 'undefined',
                        shishen_skill: '弑神双剑',
                        shishen_skill_info: 'undefined',
                        shishen_skill1: '快攻',
                        shishen_skill1_info: 'undefined',
                        shishen_skill_red: '弑神',
                        shishen_skill_red_info: '',
                        shishen_skill_black: '屠魔',
                        shishen_skill_black_info: 'undefined',
                        shishen_skill_effect_black: '屠魔',
                        shishen_skill_effect_black_info: 'undefined',
                        shishen_skill_effect_red: '弑神',
                        shishen_skill_effect_red_info: 'undefined',
                        shishen_jianzhen: '弑神剑阵',
                        shishen_jianzhen_info: 'undefined',
                        shishen_jianzhen_damage: '斩',
                        shishen_jianzhen_damage_info: 'undefined',
                        shishen_jianzhen_mark: '御',
                        shishen_jianzhen_mark_info: 'undefined',
                        shishen_jianzhen_mark_black: '御',
                        shishen_jianzhen_mark_black_info: 'undefined',
                        shishen_jianzhen_mark_red: '御',
                        shishen_jianzhen_mark_red_info: 'undefined',
                        shishen_jianzhen_mark_use: '剑阵-开',
                        shishen_jianzhen_mark_use_info: 'undefined',
                        shishen_jianzhen_unrecover: '伤',
                        shishen_jianzhen_unrecover_info: '无法回复体力',
                        tiger_ready: '瞄准',
                        tiger_ready_info: '出牌阶段限一次,猜测僵尸手牌.猜对:获得技能【撕裂】;猜错:你需给予僵尸一张牌.',
                        tiger_attack: '撕裂',
                        tiger_attack_info: '本回合的下一张【杀】附加目标最大体力值一半(向上取整)的伤害',
                        tiger_mark: '虎威',
                        tiger_mark_info: '锁定技,当你造成伤害后,你获得X个<虎>标记(X为伤害点数).',
                        svdex_range: '榴弹',
                        svdex_range_info: '你的【杀】可额外选择一个目标',
                        svdex_damage_info: '你的【杀】造成的伤害+1',
                        tiger_ultimate: '虎啸',
                        tiger_ultimate_info: '出牌阶段限一次,你可弃置四个<虎威>标记对所有僵尸造成一点伤害并获得<伤>标记.',
                        tiger_sha: '天网',
                        tiger_sha_info: '当你使用【杀】指定目标后你可弃置一张牌令此【杀】不可闪避.',
                        zom_hero_mashu: '迅捷',
                        zom_hero_mashu_info: '锁定技,你的攻击范围无限.',
                        zom_hero_state: '钢势',
                        zom_hero_state_info: '锁定技,你无法成为【过河拆桥】、【顺手牵羊】、【乐不思蜀】、【兵粮寸断】的目标.',
                        zom_chongji: '冲击',
                        zom_chongji_info: '锁定技,当你拥有护甲时,攻击范围内包含你的人类除你以外不能对其他角色使用【杀】.',
                        zom_yinghua: '硬化',
                        zom_yinghua_info: '出牌阶段你可以:①弃置一张牌获得一点护甲.②失去一点体力获得两点护甲.',
                        zom_poshi: '破势',
                        zom_poshi_info: '出牌阶段限一次,若你的护甲超过2点,你可以失去全部护甲并摸等量的牌,指定人类,共弃置他们两张牌,并对其中一名人类造成一点伤害.',
                        zom_benxi: '奔袭',
                        zom_benxi_info: '锁定技,你每使用一张牌便往前移动一个位次;当前回合结束时,你沿原路径返回,每经过一个一名角色,你选择中央区的一张牌对其使用之或摸一张牌(每张牌每回合限一次)',
                        zom_bizhang: '壁障',
                        zom_bizhang_info: '限定技,出牌阶段使用,所有僵尸获得两点护甲.',
                    },
                    skill: {
                        yingxiong: {
                            group: ['yingxiong_fuyin', 'yingxiong_baiyin'],
                            preHidden: ['yingxiong_fuyin', 'yingxiong_baiyin'],
                        },
                        yingxiong_fuyin: {
                            audio: 'ext:生化狂潮/audio:2',
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.player.countCards('h') < player.countCards('h')) return false;
                                if (event.card.name != 'sha' && event.card.name != 'juedou') return false;
                                return !game.hasPlayer2(function (current) {
                                    return (
                                        current.getHistory('useCard', function (evt) {
                                            return evt != event.parent && evt.card && ['sha', 'juedou'].includes(evt.card.name) && evt.targets.includes(player);
                                        }).length
                                    );
                                });
                            },
                            content() {
                                trigger.parent.excluded.add(player);
                            },
                        },
                        yingxiong_baiyin: {
                            audio: 'ext:生化狂潮/audio:2',
                            trigger: {
                                player: 'damageBegin4',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.num <= 1) return false;
                                if (player.hasSkillTag('unequip2')) return false;
                                if (
                                    event.source &&
                                    event.source.hasSkillTag('unequip', false, {
                                        name: event.card ? event.card.name : null,
                                        target: player,
                                        card: event.card,
                                    })
                                )
                                    return false;
                                return true;
                            },
                            content() {
                                trigger.num = 1;
                            },
                            ai: {
                                filterDamage: true,
                                skillTagFilter(player, tag, arg) {
                                    if (player.hasSkillTag('unequip2')) return false;
                                    if (arg && arg.player) {
                                        if (
                                            arg.player.hasSkillTag('unequip', false, {
                                                name: arg.card ? arg.card.name : null,
                                                target: player,
                                                card: arg.card,
                                            })
                                        )
                                            return false;
                                        if (
                                            arg.player.hasSkillTag('unequip', false, {
                                                name: arg.card ? arg.card.name : null,
                                                target: player,
                                                card: arg.card,
                                            })
                                        )
                                            return false;
                                        if (arg && arg.player.hasSkillTag('jueqing', false, player)) return false;
                                    }
                                },
                            },
                        },
                        hero_mieshi: {
                            audio: 'ext:生化狂潮/audio:2',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return (event.name != 'phase' || game.phaseNumber == 0) && !player.storage.hero_mieshi;
                            },
                            content() {
                                'step 0';
                                if (player.isDisabled(1) || player.getEquip('SVDEX') || player.getEquip('QuadBarrel') || player.getEquip('Dualkriss') || player.getEquip('M134EX') || player.getEquip('card_dualswords') || player.getEquip('card_star') || player.getEquip('card_tiger')) {
                                    return false;
                                }
                                player.chooseButton(['请选择你的英雄武器', [['SVDEX', 'QuadBarrel', 'Dualkriss', 'M134EX', 'card_dualswords', 'card_star', 'card_tiger'], 'vcard']], true).set('ai', (button) => Math.random());
                                ('step 1');
                                if (result.bool) {
                                    let card = game.createCard2(result.links[0][2]);
                                    player.chooseUseTarget(card, 'nopopup', true);
                                }
                            },
                            mod: {
                                canBeGained(card, source, player) {
                                    if (card == player.getEquip(1)) return false;
                                },
                                canBeDiscarded(card, source, player) {
                                    if (card == player.getEquip(1)) return false;
                                },
                                cardname(card) {
                                    if (get.subtype(card, false) == 'equip1') return 'sha';
                                },
                                cardnature(card) {
                                    if (get.subtype(card, false) == 'equip1') return false;
                                },
                                cardDiscardable(card, player) {
                                    if (card == player.getEquip(1)) return false;
                                },
                                cardEnabled2(card, player) {
                                    if (card == player.getEquip(1)) return false;
                                },
                            },
                            group: 'hero_mieshi_blocker',
                            subSkill: {
                                blocker: {
                                    trigger: {
                                        player: ['loseBefore', 'equipBefore', 'disableEquipBefore'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.name == 'disableEquip') return event.pos == 'equip1';
                                        let card = player.getEquip(1);
                                        if (!card || (card.name != 'SVDEX' && card.name != 'QuadBarrel' && card.name != 'Dualkriss' && card.name != 'M134' && card.name != 'card_dualswords' && card.name != 'card_star' && card.name != 'card_tiger')) return false;
                                        if (event.name == 'equip') {
                                            return get.subtype(event.card) == 'equip1';
                                        }
                                        return event.cards && event.cards.includes(card);
                                    },
                                    content() {
                                        if (trigger.name == 'lose') trigger.cards.remove(player.getEquip(1));
                                        else trigger.cancel();
                                    },
                                },
                            },
                        },
                        svdex_damage: {
                            audio: 'ext:生化狂潮/weapons:1',
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.notLink();
                            },
                            preHidden: true,
                            forced: true,
                            content() {
                                trigger.num++;
                            },
                            ai: {
                                damageBonus: true,
                            },
                        },
                        svdex_range: {
                            audio: 'ext:生化狂潮/weapons:1',
                            mod: {
                                selectTarget(card, player, range) {
                                    if (Array.isArray(range) && range[1] == -1) return;
                                    if (card.name == 'sha') range[1] += 1;
                                },
                            },
                        },
                        QuadBarrel_damage: {
                            audio: 'ext:生化狂潮/weapons:1',
                            trigger: {
                                player: 'shaBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (get.itemtype(event.cards) != 'cards') return false;
                                return player.countCards('he', { suit: event.cards.suit }) > 0;
                            },
                            content() {
                                'step 0';
                                player.storage.liaoyuan = 0;
                                event.num = 0;
                                event.cards = [];
                                ('step 1');
                                let suit = trigger.cards.suit;
                                event.suit = suit;
                                player.chooseCard('he', get.prompt('是否弃置与【杀】花色相同的牌来加深伤害？'), function (card, player) {
                                    return card.suit == suit && lib.filter.cardDiscardable(card, player);
                                }).ai = function (card) {
                                    if (get.attitude(player, trigger.target) >= 0) return 0;
                                    if (get.effect(trigger.target, { name: 'sha' }, player, player) > 0) {
                                        return 7 - get.value(card);
                                    }
                                    return 0;
                                };
                                ('step 2');
                                if (result.bool) {
                                    if (event.num == 0) {
                                    }
                                    player.discard(result.cards);
                                    event.num++;
                                    if (player.countCards('he', { suit: event.suit }) > 1 && !get.is.altered('QuadBarrel_damage')) {
                                        event.goto(1);
                                    }
                                }
                                ('step 3');
                                if (event.num) {
                                    let next = trigger.target.chooseToRespond({ name: 'shan' }, '请打出一张闪响应破碎炙炎');
                                    next.ai = get.unuseful2;
                                    if (event.num > 1) next.set('prompt2', '共需额外打出' + event.num + '张闪');
                                } else {
                                    event.finish();
                                }
                                ('step 4');
                                if (result.bool) {
                                    event.num--;
                                    event.goto(3);
                                } else {
                                    trigger.untrigger();
                                    trigger.directHit = true;
                                    player.storage.liaoyuan = event.num;
                                }
                            },
                            group: ['liaoyuan2', 'liaoyuan3'],
                        },
                        QuadBarrel_wansha: {
                            audio: 'ext:生化狂潮/audio:1',
                            global: 'QuadBarrel_wansha_global',
                            trigger: {
                                global: 'dyingBegin',
                            },
                            forced: true,
                            logTarget: 'player',
                            filter(event, player) {
                                return player == _status.currentPhase;
                            },
                            content() {
                                game.countPlayer(function (current) {
                                    if (current != player && current != trigger.player) current.addSkillBlocker('QuadBarrel_wansha_fengyin');
                                });
                                player.addTempSkill('QuadBarrel_wansha_clear');
                            },
                            subSkill: {
                                global: {
                                    mod: {
                                        cardEnabled(card, player) {
                                            let source = _status.currentPhase;
                                            if (card.name == 'tao' && source && source != player && source.hasSkill('QuadBarrel_wansha') && !player.isDying()) return false;
                                        },
                                        cardSavable(card, player) {
                                            let source = _status.currentPhase;
                                            if (card.name == 'tao' && source && source != player && source.hasSkill('QuadBarrel_wansha') && !player.isDying()) return false;
                                        },
                                    },
                                },
                                fengyin: {
                                    inherit: 'fengyin',
                                    init(player, skill) {
                                        player.addSkillBlocker(skill);
                                    },
                                    onremove(player, skill) {
                                        player.removeSkillBlocker(skill);
                                    },
                                    charlotte: true,
                                    skillBlocker(skill, player) {
                                        return !lib.skill[skill].charlotte && !get.is.locked(skill, player);
                                    },
                                    mark: true,
                                    intro: {
                                        content(storage, player, skill) {
                                            let list = player.getSkills(null, false, false).filter(function (i) {
                                                return lib.skill.fengyin.skillBlocker(i, player);
                                            });
                                            if (list.length) return '失效技能:' + get.translation(list);
                                            return '无失效技能';
                                        },
                                    },
                                },
                                clear: {
                                    trigger: {
                                        global: 'dyingAfter',
                                    },
                                    forced: true,
                                    charlotte: true,
                                    popup: false,
                                    filter(event, player) {
                                        return !_status.dying.length;
                                    },
                                    content() {
                                        player.removeSkill('QuadBarrel_wansha_clear');
                                    },
                                    onremove() {
                                        game.countPlayer2(function (current) {
                                            current.removeSkillBlocker('QuadBarrel_wansha_fengyin');
                                        });
                                    },
                                },
                            },
                        },
                        Dualkriss_skill: {
                            audio: 'ext:生化狂潮/weapons:1',
                            trigger: {
                                player: 'useCardToTargeted',
                            },
                            forced: true,
                            shaRelated: true,
                            filter(event, player) {
                                return event.isFirstTarget && event.card.name == 'sha';
                            },
                            content() {
                                trigger.parent.targets = trigger.parent.targets.concat(trigger.targets);
                                trigger.parent.triggeredTargets4 = trigger.parent.triggeredTargets4.concat(trigger.targets);
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (player._jsrgzhenqiao_aiChecking) return;
                                        if (target == player && get.subtype(card) == 'equip1' && !player.getEquip(1)) {
                                            player._jsrgzhenqiao_aiChecking = true;
                                            let eff = get.effect(target, card, player, player);
                                            delete player._jsrgzhenqiao_aiChecking;
                                            if (eff < 3) return 'zerotarget';
                                        }
                                    },
                                },
                            },
                        },
                        m134ex_skill: {
                            firstDo: true,
                            trigger: {
                                player: 'useCard1',
                            },
                            forced: true,
                            filter(event, player) {
                                return !event.audioed && event.card.name == 'sha' && player.countUsed('sha', true) > 1 && event.parent.type == 'phase';
                            },
                            content() {
                                trigger.audioed = true;
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + 2;
                                },
                            },
                            group: ['m134ex_choose', 'm134ex_qinggang'],
                            preHidden: ['m134ex_choose', 'm134ex_qinggang'],
                        },
                        m134ex_choose: {
                            audio: 'ext:生化狂潮/weapons:1',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                let list = [];
                                if (player.storage._ichiban_no_takaramono) list.push('cancel2');
                                player.chooseControl
                                    .apply(player, list)
                                    .set('choiceList', ['令此阶段内的所有红色牌视为【杀】', '令此阶段内的所有【杀】视为【决斗】'])
                                    .set('prompt', player.storage._ichiban_no_takaramono ? get.prompt('yui_lieyin') : '英雄M134:请选择一项')
                                    .set('ai', function () {
                                        let player = _status.event.player;
                                        let shas = player.countCards('h', 'sha');
                                        if (shas > 0) {
                                            if (
                                                game.hasPlayer(function (current) {
                                                    return get.attitude(player, current) < 0 && player.canUse('juedou', current) && !current.hasSha() && get.effect(current, { name: 'juedou' }, player, player) > 0;
                                                })
                                            )
                                                return 1;
                                            if (player.storage._ichiban_no_takaramono) return 'cancel2';
                                        }
                                        if (
                                            player.countCards('h', function (card) {
                                                return get.color(card) == 'red' && card.name != 'sha' && player.hasValueTarget(card);
                                            }) == 0
                                        )
                                            return 0;
                                        if (player.storage._ichiban_no_takaramono) return 'cancel2';
                                        return 1;
                                    });
                                ('step 1');
                                if (result.control != 'cancel2') {
                                    player.addTempSkill('yui_lieyin' + result.index, 'phaseUseEnd');
                                }
                            },
                        },
                        m134ex_qinggang: {
                            audio: 'ext:生化狂潮/weapons:1',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            forced: true,
                            logTarget: 'target',
                            content() {
                                trigger.target.addTempSkill('qinggang2');
                                trigger.target.storage.qinggang2.add(trigger.card);
                                trigger.target.markSkill('qinggang2');
                            },
                            ai: {
                                unequip: true,
                                skillTagFilter(player, tag, arg) {
                                    if (arg && arg.name == 'sha') return true;
                                    return false;
                                },
                            },
                        },
                        zom_baozou: {
                            firstDo: true,
                            trigger: {
                                player: 'useCard1',
                            },
                            forced: true,
                            filter(event, player) {
                                return !event.audioed && event.card.name == 'sha' && player.countUsed('sha', true) > 1 && event.parent.type == 'phase';
                            },
                            content() {
                                trigger.audioed = true;
                                if (player.sex == 'male') return game.playYingx(['zom_baozou_male'].randomGet());
                                if (player.sex == 'female') return game.playYingx(['zom_baozou_female'].randomGet());
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return Infinity;
                                },
                            },
                        },
                        zom_lizhao: {
                            audio: 'ext:生化狂潮/zombie:3',
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.parent.name != '_lianhuan' && event.parent.name != '_lianhuan2';
                            },
                            forced: true,
                            content() {
                                trigger.num++;
                            },
                            ai: {
                                damageBonus: true,
                            },
                        },
                        zom_shidu: {
                            audio: 'ext:生化狂潮/zombie:1',
                            mod: {
                                cardEnabled(card, player) {
                                    if (get.type(card) == 'equip') return false;
                                },
                                cardRespondable(card, player) {
                                    if (get.type(card) == 'equip') return false;
                                },
                                cardSavable(card, player) {
                                    if (get.type(card) == 'equip') return false;
                                },
                            },
                            enable: ['chooseToUse'],
                            filterCard: {
                                type: 'equip',
                            },
                            viewAsFilter(player) {
                                return player.num('h', { type: 'equip' }) > 0;
                            },
                            viewAs: {
                                name: 'tiesuo',
                            },
                            check() {
                                return 1;
                            },
                            group: 'zom_shidu2',
                            ai: {
                                order: 4,
                                useful: -1,
                                value: -1,
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
                                result: {
                                    target(player, target) {
                                        if (target.isLinked()) {
                                            if (target.hasSkillTag('link')) return 0;
                                            let f = target.hasSkillTag('nofire');
                                            let t = target.hasSkillTag('nothunder');
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
                                tag: {
                                    multitarget: 1,
                                    multineg: 1,
                                    norepeat: 1,
                                },
                            },
                        },
                        zom_shidu2: {
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.num('h', { type: 'equip' }) > 0;
                            },
                            filterCard: {
                                type: 'equip',
                            },
                            prepare(cards, player) {
                                player.$throw(cards, 1000);
                            },
                            discard: false,
                            delay: 0.5,
                            content() {
                                'step 0';
                                player.draw();
                                ('step 1');
                                if (Array.isArray(cards)) for (var i of cards) {
                                    ui.discardPile.appendChild(i);
                                }
                            },
                            ai: {
                                order: 3.5,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        zom_jinhua_mark: {
                            intro: {
                                content: '进化点数:#,撕碎那些人类!',
                            },
                            trigger: {
                                player: 'damageAfter',
                                source: 'damageSource',
                            },
                            forced: true,
                            content() {
                                player.addMark('zom_jinhua_mark', trigger.num);
                            },
                        },
                        zom_jinhua: {
                            audio: 'ext:生化狂潮/audio:1',
                            trigger: {
                                global: 'changeHp',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countMark('zom_jinhua_mark') >= 5;
                            },
                            content() {
                                'step 0';
                                let characters = ['high_zombie', 'anyingbabi', 'tufu_zombie', 'emo_zombie', 'wugu_zombie', 'songzang_zombie'];
                                player
                                    .chooseControl(characters)
                                    .set('dialog', ['选择要变成的僵尸', [characters, 'character']])
                                    .set('ai', () => characters.randomGet());
                                ('step 1');
                                let character = result.control;
                                if (!_status.characterlist) {
                                    lib.skill.pingjian.initList();
                                }
                                _status.characterlist.remove(character);
                                player.reinit('low_zombie', character, false);
                                player.removeMark('zom_jinhua_mark', 5);
                                ('step 2');
                                if (player.name2 == 'high_zombie') {
                                    player.maxHp = 5;
                                    player.uninit;
                                    player.recover(player.maxHp);
                                    if (player.sex == 'male') return game.playYingx(['zom_jinhua_male'].randomGet());
                                    if (player.sex == 'female') return game.playYingx(['zom_jinhua_female'].randomGet());
                                }
                                if (player.name2 == 'anyingbabi') {
                                    player.maxHp = 3;
                                    player.uninit;
                                    player.recover(player.maxHp);
                                    if (player.sex == 'male') return game.playYingx(['zom_jinhua_male'].randomGet());
                                    if (player.sex == 'female') return game.playYingx(['zom_jinhua_female'].randomGet());
                                }
                                if (player.name2 == 'tufu_zombie') {
                                    player.maxHp = 7;
                                    player.changeHujia(2);
                                    player.uninit;
                                    player.recover(player.maxHp);
                                    if (player.sex == 'male') return game.playYingx(['zom_jinhua_male'].randomGet());
                                    if (player.sex == 'female') return game.playYingx(['zom_jinhua_female'].randomGet());
                                }
                                if (player.name2 == 'emo_zombie') {
                                    player.maxHp = 4;
                                    player.uninit;
                                    player.recover(player.maxHp);
                                    if (player.sex == 'male') return game.playYingx(['zom_jinhua_male'].randomGet());
                                    if (player.sex == 'female') return game.playYingx(['zom_jinhua_female'].randomGet());
                                }
                                if (player.name2 == 'wugu_zombie') {
                                    player.maxHp = 4;
                                    player.uninit;
                                    player.recover(player.maxHp);
                                    if (player.sex == 'male') return game.playYingx(['zom_jinhua_male'].randomGet());
                                    if (player.sex == 'female') return game.playYingx(['zom_jinhua_female'].randomGet());
                                }
                                if (player.name2 == 'songzang_zombie') {
                                    player.maxHp = 5;
                                    player.changeHujia(2);
                                    player.uninit;
                                    player.recover(player.maxHp);
                                    if (player.sex == 'male') return game.playYingx(['zom_jinhua_male'].randomGet());
                                    if (player.sex == 'female') return game.playYingx(['zom_jinhua_female'].randomGet());
                                }
                                player.recover(player.maxHp);
                            },
                            group: ['zom_jinhua_mark'],
                        },
                        zom_jinhua_hero: {
                            trigger: {
                                player: ['changeHp', 'phaseZhunbeiBegin'],
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countMark('zom_jinhua_mark') >= 10;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseBool()
                                    .set('ai', function () {
                                        return true;
                                    })
                                    .set('prompt', '是否弃置所有<进化>标记将僵尸武将替换为英雄僵尸？');
                                ('step 1');
                                if (result.bool) {
                                    let characters_all = ['hero_zombie', 'hero_female_zombie'];
                                    player
                                        .chooseControl(characters_all)
                                        .set('dialog', ['选择要变成的英雄僵尸', [characters_all, 'character']])
                                        .set('ai', () => characters_all.randomGet());
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                let character = result.control;
                                game.log(character);
                                player.reinit(player.name2, character);
                                player.removeMark('zom_jinhua_mark', Infinity);
                                player.discard(player.getCards('j'));
                                game.showIdentity();
                                ('step 3');
                                if (player.name2 == 'hero_zombie') {
                                    player.maxHp = 7;
                                    player.uninit;
                                    player.recover(player.maxHp);
                                    if (player.sex == 'male') return game.playYingx(['zom_jinhua_hero_male1', 'zom_jinhua_hero_male2'].randomGet());
                                    if (player.sex == 'female') return game.playYingx(['zom_jinhua_hero_female1', 'zom_jinhua_hero_female2'].randomGet());
                                }
                                if (player.name2 == 'hero_female_zombie') {
                                    player.maxHp = 3;
                                    player.uninit;
                                    player.addTempSkill('qianxing', { player: 'phaseZhunbeiBegin' });
                                    player.recover(player.maxHp);
                                    if (player.sex == 'male') return game.playYingx(['zom_jinhua_hero_male1', 'zom_jinhua_hero_male2'].randomGet());
                                    if (player.sex == 'female') return game.playYingx(['zom_jinhua_hero_female1', 'zom_jinhua_hero_female2'].randomGet());
                                }
                            },
                            ai: {
                                order: 0,
                                result: {
                                    player(player, trigger) {
                                        if (trigger.num >= player.hp) {
                                            return 1;
                                        }
                                        if (player.hp <= 2) {
                                            return 1;
                                        }
                                        return 0;
                                    },
                                },
                            },
                            group: ['zom_jinhua_mark'],
                        },
                        zom_jinhua_hero2: {
                            trigger: {
                                player: ['changeHp', 'phaseZhunbeiBegin'],
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countMark('zom_jinhua_mark') >= 8;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseBool()
                                    .set('ai', function () {
                                        return true;
                                    })
                                    .set('prompt', '是否弃置所有<进化>标记将僵尸武将替换为英雄僵尸？');
                                ('step 1');
                                if (result.bool) {
                                    let characters_all = ['hero_zombie', 'hero_female_zombie'];
                                    player
                                        .chooseControl(characters_all)
                                        .set('dialog', ['选择要变成的英雄僵尸', [characters_all, 'character']])
                                        .set('ai', () => characters_all.randomGet());
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                let character = result.control;
                                game.log(character);
                                player.reinit(player.name2, character);
                                player.removeMark('zom_jinhua_mark', Infinity);
                                player.discard(player.getCards('j'));
                                game.showIdentity();
                                ('step 3');
                                if (player.name2 == 'hero_zombie') {
                                    player.maxHp = 7;
                                    player.uninit;
                                    player.recover(player.maxHp);
                                    if (player.sex == 'male') return game.playYingx(['zom_jinhua_hero_male1', 'zom_jinhua_hero_male2'].randomGet());
                                    if (player.sex == 'female') return game.playYingx(['zom_jinhua_hero_female1', 'zom_jinhua_hero_female2'].randomGet());
                                }
                                if (player.name2 == 'hero_female_zombie') {
                                    player.maxHp = 3;
                                    player.uninit;
                                    player.recover(player.maxHp);
                                    player.addTempSkill('qianxing', { player: 'phaseZhunbeiBegin' });
                                    if (player.sex == 'male') return game.playYingx(['zom_jinhua_hero_male1', 'zom_jinhua_hero_male2'].randomGet());
                                    if (player.sex == 'female') return game.playYingx(['zom_jinhua_hero_female1', 'zom_jinhua_hero_female2'].randomGet());
                                }
                            },
                            ai: {
                                order: 0,
                                result: {
                                    player(player, trigger) {
                                        if (trigger.num >= player.hp) {
                                            return 1;
                                        }
                                        if (player.hp <= 2) {
                                            return 1;
                                        }
                                        return 0;
                                    },
                                },
                            },
                            group: ['zom_jinhua_mark'],
                        },
                        zom_guozai: {
                            audio: 'ext:生化狂潮/zombie:1',
                            trigger: {
                                player: 'changeHp',
                            },
                            forced: true,
                            round: 4,
                            filter(event, player) {
                                return player.hp < 1;
                            },
                            content() {
                                let human_nums = get.population('zhu') + get.population('zhong');
                                ('step 0');
                                player.draw(human_nums);
                                ('step 1');
                                player.discard(player.getCards('j'));
                                ('step 2');
                                if (player.hp < 1) player.recover(1 - player.hp);
                                player.addTempSkill('mianyi', { player: 'phaseAfter' });
                                player.addTempSkill('wushuang', { player: 'phaseAfter' });
                            },
                            group: ['zom_guozai_roundcount'],
                        },
                        zom_hero_state: {
                            mod: {
                                targetEnabled(card, player, target, now) {
                                    if (card.name == 'shunshou' || card.name == 'guohe' || card.name == 'lebu' || card.name == 'bingliang') return false;
                                },
                            },
                        },
                        zom_hero_mashu: {
                            mod: {
                                attackRangeBase(player) {
                                    return Infinity;
                                },
                            },
                        },
                        zom_bianyi: {
                            audio: 'ext:生化狂潮/zombie:1',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return get.population('zhu') + get.population('zhong') - get.population('fan') + 2 > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                let num = get.population('zhu') + get.population('zhong') - get.population('fan') - 2;
                                player.draw(num);
                            },
                        },
                        zom_bianyi_hero: {
                            audio: 'ext:生化狂潮/zombie:1',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return get.population('zhu') + get.population('zhong') - get.population('fan') + 2 > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                let num = get.population('zhu') + get.population('zhong') - get.population('fan');
                                player.draw(num);
                            },
                        },
                        zom_guimei: {
                            audio: 'ext:生化狂潮/zombie:1',
                            enable: 'phaseUse',
                            round: 2,
                            content() {
                                player.tempHide();
                            },
                            ai: {
                                damageBonus: true,
                                order: 11,
                                result: {
                                    player: 1,
                                },
                                threaten: 8,
                            },
                            group: ['guimei_attack', 'zom_guimei_roundcount'],
                            preHidden: ['guimei_attack'],
                        },
                        guimei_attack: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                if (player.hasSkill('qianxing')) return true;
                                return false;
                            },
                            audio: 'ext:生化狂潮/zombie:3',
                            forced: true,
                            content() {
                                trigger.num++;
                            },
                        },
                        head_kill_skill: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                return event.player.identity == 'fan';
                            },
                            preHidden: ['head_kill_skill_dying'],
                            forced: true,
                            content() {
                                trigger.num += 1;
                            },
                            group: ['head_kill_skill_dying'],
                        },
                        head_kill_skill_dying: {
                            audio: 'ext:生化狂潮/audio:true',
                            trigger: {
                                global: 'dying',
                            },
                            _priority: 9,
                            filter(event, player) {
                                return event.player != player && event.player.hp <= 0 && event.player.identity == 'fan';
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) < 0;
                            },
                            forced: true,
                            logTarget: 'player',
                            content() {
                                'step 0';
                                trigger.player.die().source = player;
                                ('step 1');
                                if (!trigger.player.isAlive()) {
                                    trigger.cancel(true);
                                }
                                if (player.sex == 'male') return game.playYingx(['head_kill_skill_dying1_male', 'head_kill_skill_dying2_male'].randomGet());
                                if (player.sex == 'female') return game.playYingx(['head_kill_skill_dying1_female', 'head_kill_skill_dying2_female'].randomGet());
                            },
                        },
                        lose_head_kill: {
                            trigger: {
                                player: 'loseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                if (Array.isArray(event.cards)) for (var i of event.cards) {
                                    if (i.name == 'head_kill') return true;
                                }
                                return false;
                            },
                            content() {
                                if (Array.isArray(trigger.cards)) for (var i of trigger.cards) {
                                    game.cardsGotoSpecial(i);
                                }
                            },
                        },
                        zom_zhendang: {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            content() {
                                if (!lib.inpile.includes('card_zhendang')) lib.inpile.add('card_zhendang');
                                if (!_status.card_zhendang_suits) _status.card_zhendang_suits = lib.suit.slice(0);
                                player.gain(game.createCard2('card_zhendang', 'club', 1), 'gain2');
                            },
                        },
                        lose_card_zhendang: {
                            trigger: {
                                player: 'loseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                if (Array.isArray(event.cards)) for (var i of event.cards) {
                                    if (i.name == 'card_zhendang') return true;
                                }
                                return false;
                            },
                            content() {
                                if (Array.isArray(trigger.cards)) for (var i of trigger.cards) {
                                    game.cardsGotoSpecial(i);
                                }
                            },
                        },
                        zhendang_sha: {
                            mark: true,
                            marktext: '缴械',
                            intro: {
                                content: '你被震荡波缴械,直至你的回合结束都不能使用和打出【杀】',
                            },
                            forced: true,
                            mod: {
                                cardEnabled(card, player) {
                                    if (card.name == 'sha') {
                                        return false;
                                    }
                                },
                                cardUsable(card, player) {
                                    if (card.name == 'sha') {
                                        return false;
                                    }
                                },
                            },
                            group: ['lose_zhendang_sha'],
                        },
                        lose_zhendang_sha: {
                            trigger: {
                                player: ['phaseJieshuBegin', 'dieBefore'],
                            },
                            forced: true,
                            filter(event, player) {
                                return player.hasSkill('zhendang_sha');
                            },
                            content() {
                                player.removeSkill('zhendang_sha');
                            },
                        },
                        zom_guishou: {
                            enable: 'chooseToUse',
                            audio: 'ext:生化狂潮/zombie:2',
                            filterCard(card, player) {
                                return get.color(card) == 'red';
                            },
                            position: 'hes',
                            viewAs: {
                                name: 'card_guishou',
                            },
                            prompt: '将一红色牌或当鬼手使用',
                            check(card) {
                                return 6 - get.value(card);
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target(player, target) {
                                        if (target.hasJudge('caomu')) return 0;
                                        return -1.5 / Math.sqrt(target.countCards('h') + 1);
                                    },
                                },
                                tag: {
                                    respondShan: false,
                                },
                            },
                        },
                        guishou_shan: {
                            mark: true,
                            marktext: '束缚',
                            intro: {
                                content: '你被鬼手束缚,直至你的回合准备阶段你都不能使用【闪】',
                            },
                            forced: true,
                            mod: {
                                cardEnabled(card, player) {
                                    if (card.name == 'shan') {
                                        return false;
                                    }
                                },
                                cardUsable(card, player) {
                                    if (card.name == 'shan') {
                                        return false;
                                    }
                                },
                            },
                            group: ['lose_zhendang_sha'],
                        },
                        zom_zhouliao: {
                            audio: 'ext:生化狂潮/zombie:2',
                            enable: 'phaseUse',
                            round: 2,
                            filter(event, player) {
                                return player.countCards('he', { color: 'red' }) > 0;
                            },
                            filterTarget(card, player, target) {
                                return target != player && target.identity == 'fan';
                            },
                            selectTarget() {
                                var jiangshi_nums = get.population('fan');
                                return [1, Math.max(1, jiangshi_nums)];
                            },
                            position: 'he',
                            filterCard: {
                                color: 'red',
                            },
                            check(card) {
                                return 8 - get.value(card);
                            },
                            multitarget: true,
                            multiline: true,
                            content() {
                                'step 0';
                                player.loseHp(1);
                                ('step 1');
                                if (!player.isAlive()) {
                                    return event.finish();
                                }
                                var targets = targets.slice(0);
                                for (var i = 0; i < targets.length; i++) {
                                    var target = targets[i];
                                    if (target.isDamaged()) {
                                        target.recover();
                                    } else {
                                        target.draw(1);
                                    }
                                }
                                player.changeHujia(1);
                            },
                            ai: {
                                order: 1,
                                threaten: 7.5,
                                result: {
                                    target(player) {
                                        if (player.hp > 1) {
                                            return 8;
                                        } else if (player.hp == 1) {
                                            return player.countCards('h', { name: 'tao' }) > 0 || player.countCards('h', { name: 'jiu' }) > 0 || player.isSkillEnabled('zom_xieshu') ? 10 : -1;
                                        }
                                        return -1;
                                    },
                                },
                            },
                            group: ['zom_zhouliao_roundcount'],
                        },
                        zom_xieshu: {
                            audio: 'ext:生化狂潮/zombie:4',
                            round: 2,
                            trigger: {
                                player: 'dying',
                            },
                            logTarget: 'player',
                            filter(event, player) {
                                return event.player.hp < 1 && event.reason && event.reason.name == 'loseHp' && event.player.identity == 'fan';
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) > 2;
                            },
                            content() {
                                trigger.player.recover();
                                trigger.player.draw();
                            },
                            group: ['zom_xieshu_roundcount'],
                        },
                        zom_zuzhou: {
                            audio: 'ext:生化狂潮/zombie:3',
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                return _status.currentPhase == player && player.countUsed('sha') == 1 && (event.player.identity == 'zhu' || event.player.identity == 'zhong');
                            },
                            forced: true,
                            content() {
                                trigger.player.addTempSkill('fengyin', { player: 'phaseJieshuBegin' });
                            },
                        },
                        zom_regroup: {
                            enable: 'phaseUse',
                            round: 3,
                            filter(event, player) {
                                return player.countMark('zom_jinhua_mark') >= 3;
                            },
                            content() {
                                'step 0';
                                var characters_all = ['high_zombie', 'anyingbabi', 'tufu_zombie', 'emo_zombie', 'wugu_zombie', 'songzang_zombie'];
                                var js_self = player.name2;
                                var characters = characters_all.filter((el) => !js_self.includes(el));
                                player
                                    .chooseControl(characters)
                                    .set('dialog', ['选择要变成的僵尸', [characters, 'character']])
                                    .set('ai', () => characters.randomGet());
                                ('step 1');
                                var character = result.control;
                                if (character == player.name2) return false;
                                player.reinit(player.name2, character, false);
                                player.removeMark('zom_jinhua_mark', 3);
                                player.loseHp(1);
                                ('step 2');
                                if (player.name2 == 'high_zombie') {
                                    player.maxHp = 5;
                                    if (player.sex == 'male') return game.playYingx(['zom_jinhua_male'].randomGet());
                                    if (player.sex == 'female') return game.playYingx(['zom_jinhua_female'].randomGet());
                                }
                                if (player.name2 == 'anyingbabi') {
                                    player.maxHp = 3;
                                    if (player.sex == 'male') return game.playYingx(['zom_jinhua_male'].randomGet());
                                    if (player.sex == 'female') return game.playYingx(['zom_jinhua_female'].randomGet());
                                }
                                if (player.name2 == 'tufu_zombie') {
                                    player.maxHp = 7;
                                    player.changeHujia(2);
                                    if (player.sex == 'male') return game.playYingx(['zom_jinhua_male'].randomGet());
                                    if (player.sex == 'female') return game.playYingx(['zom_jinhua_female'].randomGet());
                                }
                                if (player.name2 == 'emo_zombie') {
                                    player.maxHp = 4;
                                    if (player.sex == 'male') return game.playYingx(['zom_jinhua_male'].randomGet());
                                    if (player.sex == 'female') return game.playYingx(['zom_jinhua_female'].randomGet());
                                }
                                if (player.name2 == 'wugu_zombie') {
                                    player.maxHp = 4;
                                    if (player.sex == 'male') return game.playYingx(['zom_jinhua_male'].randomGet());
                                    if (player.sex == 'female') return game.playYingx(['zom_jinhua_female'].randomGet());
                                }
                                if (player.name2 == 'songzang_zombie') {
                                    player.maxHp = 5;
                                    player.changeHujia(2);
                                    if (player.sex == 'male') return game.playYingx(['zom_jinhua_male'].randomGet());
                                    if (player.sex == 'female') return game.playYingx(['zom_jinhua_female'].randomGet());
                                }
                            },
                            group: ['zom_jinhua_mark', 'zom_regroup_roundcount'],
                        },
                        zom_regroup_first: {
                            trigger: {
                                global: 'phaseUseBefore',
                            },
                            content() {
                                'step 0';
                                let characters_all = ['high_zombie', 'anyingbabi', 'tufu_zombie', 'songzang_zombie', 'wugu_zombie', 'emo_zombie'];
                                let characters_subset = characters_all.slice(0, 4);
                                player
                                    .chooseControl(characters_all)
                                    .set('dialog', ['选择要变成的僵尸', [characters_all, 'character']])
                                    .set('ai', function () {
                                        return characters_subset.randomGet();
                                    });
                                ('step 1');
                                let character = result.control;
                                if (character == player.name2) return false;
                                player.reinit(player.name2, character, false);
                                ('step 2');
                                if (player.name2 == 'high_zombie') {
                                    player.maxHp = 5;
                                    player.recover(player.maxHp);
                                    if (player.sex == 'male') return game.playYingx(['zom_jinhua_male'].randomGet());
                                    if (player.sex == 'female') return game.playYingx(['zom_jinhua_female'].randomGet());
                                }
                                if (player.name2 == 'anyingbabi') {
                                    player.maxHp = 3;
                                    player.recover(player.maxHp);
                                    player.removeSkill('qianxing');
                                    if (player.sex == 'male') return game.playYingx(['zom_jinhua_male'].randomGet());
                                    if (player.sex == 'female') return game.playYingx(['zom_jinhua_female'].randomGet());
                                }
                                if (player.name2 == 'tufu_zombie') {
                                    player.maxHp = 7;
                                    player.changeHujia(2);
                                    player.recover(player.maxHp);
                                    if (player.sex == 'male') return game.playYingx(['zom_jinhua_male'].randomGet());
                                    if (player.sex == 'female') return game.playYingx(['zom_jinhua_female'].randomGet());
                                }
                                if (player.name2 == 'emo_zombie') {
                                    player.maxHp = 4;
                                    player.recover(player.maxHp);
                                    if (player.sex == 'male') return game.playYingx(['zom_jinhua_male'].randomGet());
                                    if (player.sex == 'female') return game.playYingx(['zom_jinhua_female'].randomGet());
                                }
                                if (player.name2 == 'wugu_zombie') {
                                    player.maxHp = 4;
                                    player.recover(player.maxHp);
                                    if (player.sex == 'male') return game.playYingx(['zom_jinhua_male'].randomGet());
                                    if (player.sex == 'female') return game.playYingx(['zom_jinhua_female'].randomGet());
                                }
                                if (player.name2 == 'songzang_zombie') {
                                    player.maxHp = 5;
                                    player.changeHujia(2);
                                    player.recover(player.maxHp);
                                    if (player.sex == 'male') return game.playYingx(['zom_jinhua_male'].randomGet());
                                    if (player.sex == 'female') return game.playYingx(['zom_jinhua_female'].randomGet());
                                }
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        gain_shengshui: {
                            round: 2,
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                if (!lib.inpile.includes('card_shengshui')) lib.inpile.add('card_shengshui');
                                if (!_status.card_shengshui_suits) _status.card_shengshui_suits = lib.suit.slice(0);
                                player.gain(game.createCard2('card_shengshui', 'spade', 6), 'gain2');
                            },
                            group: ['gain_shengshui_roundcount'],
                        },
                        lose_card_shengshui: {
                            trigger: {
                                player: 'loseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                if (Array.isArray(event.cards)) for (var i of event.cards) {
                                    if (i.name == 'card_shengshui') return true;
                                }
                                return false;
                            },
                            content() {
                                if (Array.isArray(trigger.cards)) for (var i of trigger.cards) {
                                    game.cardsGotoSpecial(i);
                                }
                            },
                        },
                        shengshui_damage: {
                            mark: true,
                            marktext: '烧',
                            trigger: {
                                global: 'phaseAfter',
                            },
                            intro: {
                                content: '圣水的灼烧让僵尸每个回合结束时失去1点体力与2点进化标记直到脱离濒死.',
                            },
                            forced: true,
                            content() {
                                player.loseHp();
                                player.removeMark('zom_jinhua_mark', 2);
                                if (player.sex == 'female') return game.playYingx(['zombie_hurt_female1', 'zombie_hurt_female2'].randomGet());
                                if (player.sex == 'male') return game.playYingx(['zombie_hurt_male1', 'zombie_hurt_male2'].randomGet());
                            },
                            group: ['lose_shengshui_damage'],
                        },
                        lose_shengshui_damage: {
                            trigger: {
                                player: 'dyingAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.hasSkill('shengshui_damage');
                            },
                            content() {
                                player.removeSkill('shengshui_damage');
                            },
                        },
                        gain_weapon: {
                            round: 2,
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                if (!lib.inpile.includes('card_tiger')) lib.inpile.add('card_tiger');
                                if (!_status.card_tiger_suits) _status.card_tiger_suits = lib.suit.slice(0);
                                player.gain(game.createCard2('card_tiger', 'spade', 6), 'card_tiger');
                            },
                            group: ['gain_weapon_roundcount'],
                        },
                        star_skill_mark: {
                            equipSkill: true,
                            mark: true,
                            marktext: '星',
                            intro: {
                                content: '星数:#,攒到四颗星就准备好跃迁吧!',
                            },
                            trigger: {
                                player: 'shaHit',
                                global: 'roundStart',
                            },
                            forced: true,
                            content() {
                                player.addMark('star_skill_mark', 1);
                            },
                        },
                        star_skill: {
                            equipSkill: true,
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countMark('star_skill_mark') >= 1;
                            },
                            content() {
                                'step 0';
                                player.chooseBool('出牌阶段限一次.是否弃置一颗<星>来令本回合的下一张【杀】无法被响应且额外选择至多两个目标？').set('ai', function () {
                                    return true;
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.removeMark('star_skill_mark');
                                    player.addTempSkill('star_skill_effect');
                                }
                            },
                            ai: {
                                order: 11,
                                result: {
                                    player(player) {
                                        let history = player.getHistory('useCard', function (card) {
                                            return card.name == 'sha';
                                        });
                                        if (!history || history.length == 0) {
                                            if (get.population('fan') >= 2) {
                                                return 1;
                                            } else {
                                                return 0;
                                            }
                                        } else {
                                            return 0;
                                        }
                                    },
                                },
                            },
                            group: ['star_skill_mark'],
                            subSkill: {
                                effect: {
                                    equipSkill: true,
                                    trigger: {
                                        player: 'useCard2',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha';
                                    },
                                    content() {
                                        if (trigger.name == 'useCard') trigger.directHit.addArray(game.players);
                                        player.removeSkill('star_skill_effect');
                                    },
                                    mod: {
                                        selectTarget(card, player, range) {
                                            if (Array.isArray(range) && range[1] == -1) return;
                                            if (card.name == 'sha') range[1] += 2;
                                        },
                                    },
                                },
                            },
                        },
                        star_mark_use: {
                            audio: 'ext:生化狂潮/weapons:1',
                            equipSkill: true,
                            limited: true,
                            forced: true,
                            trigger: {
                                global: 'phaseZhunbeiBegin',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                            filter(event, player) {
                                return player.countMark('star_skill_mark') >= 4;
                            },
                            content() {
                                player.removeMark('star_skill_mark', 4);
                                player.addSkill('star_yueqian');
                                player.removeSkill('star_mark_use');
                                player.awakenSkill('star_mark_use');
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        star_yueqian: {
                            audio: 'ext:生化狂潮/weapons:1',
                            forced: true,
                            limited: true,
                            trigger: {
                                player: 'damageBegin4',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                            filter(event, player) {
                                return event.num >= player.hp;
                            },
                            content() {
                                'step 0';
                                trigger.cancel();
                                ('step 1');
                                if (game.countPlayer() > 2) {
                                    let otherPlayers = game.filterPlayer(function (current) {
                                        return current != player && current != player.next;
                                    });
                                    let randomPlayer = otherPlayers.randomGet();
                                    game.swapSeat(player, randomPlayer, null, true);
                                } else {
                                    event.goto(3);
                                    event.finish();
                                }
                                ('step 3');
                                player.phase('nodelay');
                                player.removeSkill('star_yueqian');
                                player.awakenSkill('star_yueqian');
                            },
                        },
                        shishen_skill: {
                            shaRelated: true,
                            forced: true,
                            group: ['shishen_skill1', 'shishen_skill_red', 'shishen_skill_black', 'shishen_skill_effect_black', 'shishen_skill_effect_red', 'shishen_jianzhen_mark_black', 'shishen_jianzhen_mark_red', 'shishen_jianzhen_mark_use'],
                            preHidden: ['shishen_skill1', 'shishen_skill_red', 'shishen_skill_black', 'shishen_skill_effect_black', 'shishen_skill_effect_red', 'shishen_jianzhen_mark_black', 'shishen_jianzhen_mark_red', 'shishen_jianzhen_mark_use'],
                        },
                        shishen_skill1: {
                            firstDo: true,
                            trigger: {
                                player: 'useCard1',
                            },
                            forced: true,
                            filter(event, player) {
                                return !event.audioed && event.card.name == 'sha' && player.countUsed('sha', true) > 1 && event.parent.type == 'phase';
                            },
                            content() {
                                trigger.audioed = true;
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + 4;
                                },
                            },
                        },
                        shishen_skill_red: {
                            audio: 'ext:生化狂潮/weapons:2',
                            enable: ['chooseToRespond', 'chooseToUse'],
                            filterCard(card, player) {
                                if (get.zhu(player, 'shouyue')) return true;
                                return get.color(card) == 'red';
                            },
                            position: 'hes',
                            viewAs: {
                                name: 'sha',
                            },
                            viewAsFilter(player) {
                                if (get.zhu(player, 'shouyue')) {
                                    if (!player.countCards('hes')) return false;
                                } else {
                                    if (!player.countCards('hes', { color: 'red' })) return false;
                                }
                            },
                            prompt: '将一张红色牌当杀使用或打出',
                            check(card) {
                                let val = get.value(card);
                                if (_status.event.name == 'chooseToRespond') return 1 / Math.max(0.1, val);
                                return 5 - val;
                            },
                            ai: {
                                yingbian(card, player, targets, viewer) {
                                    if (get.attitude(viewer, player) <= 0) return 0;
                                    let base = 0,
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
                                order(item, player) {
                                    if (player.hasSkillTag('presha', true, null, true)) return 10;
                                    if (lib.linked.includes(get.nature(item))) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return current != player && current.isLinked() && player.canUse(item, current, null, true) && get.effect(current, item, player, player) > 0 && lib.card.sha.ai.canLink(player, current, item);
                                            }) &&
                                            game.countPlayer(function (current) {
                                                return current.isLinked() && get.damageEffect(current, player, player, get.nature(item)) > 0;
                                            }) > 1
                                        )
                                            return 3.1;
                                        return 3;
                                    }
                                    return 3.05;
                                },
                                result: {
                                    target(player, target, card, isLink) {
                                        let eff = (function () {
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
                        },
                        shishen_skill_black: {
                            audio: 'ext:生化狂潮/weapons:3',
                            enable: ['chooseToRespond', 'chooseToUse'],
                            filterCard(card, player) {
                                if (get.zhu(player, 'shouyue')) return true;
                                return get.color(card) == 'black';
                            },
                            position: 'hes',
                            viewAs: {
                                name: 'sha',
                            },
                            viewAsFilter(player) {
                                if (get.zhu(player, 'shouyue')) {
                                    if (!player.countCards('hes')) return false;
                                } else {
                                    if (!player.countCards('hes', { color: 'black' })) return false;
                                }
                            },
                            prompt: '将一张黑色牌当杀使用或打出',
                            check(card) {
                                let val = get.value(card);
                                if (_status.event.name == 'chooseToRespond') return 1 / Math.max(0.1, val);
                                return 5 - val;
                            },
                            ai: {
                                yingbian(card, player, targets, viewer) {
                                    if (get.attitude(viewer, player) <= 0) return 0;
                                    let base = 0,
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
                                order(item, player) {
                                    if (player.hasSkillTag('presha', true, null, true)) return 10;
                                    if (lib.linked.includes(get.nature(item))) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return current != player && current.isLinked() && player.canUse(item, current, null, true) && get.effect(current, item, player, player) > 0 && lib.card.sha.ai.canLink(player, current, item);
                                            }) &&
                                            game.countPlayer(function (current) {
                                                return current.isLinked() && get.damageEffect(current, player, player, get.nature(item)) > 0;
                                            }) > 1
                                        )
                                            return 3.1;
                                        return 3;
                                    }
                                    return 3.05;
                                },
                                result: {
                                    target(player, target, card, isLink) {
                                        let eff = (function () {
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
                        },
                        shishen_skill_effect_black: {
                            audio: 'ext:生化狂潮/weapons:3',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            logTarget: 'target',
                            filter: (event) => event.target != undefined && event.card != undefined && event.card.name == 'sha' && get.color(event.card) == 'black',
                            content() {
                                trigger.target.addTempSkill('qinggang2');
                                trigger.target.storage.qinggang2.add(trigger.card);
                                trigger.target.markSkill('qinggang2');
                                game.log(player, '屠魔!');
                            },//QQQ
                        },
                        shishen_skill_effect_red: {
                            audio: 'ext:生化狂潮/audio:true',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            logTarget: 'target',
                            filter: (event) => event.target != undefined && event.card != undefined && event.card.name == 'sha' && get.color(event.card) == 'red',
                            content() {
                                game.log(player, '弑神!');
                                let id = trigger.target.playerid;
                                let map = trigger.parent.customArgs;
                                if (!map[id]) map[id] = {};
                                if (typeof map[id].shanRequired == 'number') {
                                    map[id].shanRequired++;
                                } else {
                                    map[id].shanRequired = 2;
                                }
                            },
                        },
                        shishen_jianzhen: {
                            mark: true,
                            marktext: '剑阵',
                            intro: {
                                content: '此状态下,你无法使用或打出【杀】.概神灵恶魔皆可弑之,例无有生还者也.红剑曰弑神,斩击迅疾.蓝剑曰屠魔,突刺破军.双剑合璧可展弑神剑阵,剑气纵横所向披靡!',
                            },
                            mod: {
                                cardEnabled(card, player) {
                                    if (card.name == 'sha') {
                                        return false;
                                    }
                                },
                                cardUsable(card, player) {
                                    if (card.name == 'sha') {
                                        return false;
                                    }
                                },
                            },
                        },
                        shishen_jianzhen_damage: {
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            mark: true,
                            intro: {
                                content: '准备阶段受到1点伤害,直至你的回合结束不能使用【闪】',
                            },
                            forced: true,
                            content() {
                                player.damage(1, 'nocard');
                            },
                            mod: {
                                cardEnabled(card, player) {
                                    if (card.name == 'shan') {
                                        return false;
                                    }
                                },
                                cardUsable(card, player) {
                                    if (card.name == 'shan') {
                                        return false;
                                    }
                                },
                            },
                        },
                        shishen_jianzhen_mark: {
                            mark: true,
                            marktext: '御',
                            intro: {
                                content: '按照‘黑红黑黑红’使用或打出相应颜色的【杀】可获开启‘剑阵’,若打乱顺序则重新排列.(剑阵:立即对所有僵尸造成一点伤害并赐予僵尸<剑气>标记(无法回复体力),且在僵尸准备阶段再次造成一点伤害)',
                            },
                        },
                        shishen_jianzhen_mark_black: {
                            trigger: {
                                player: ['respondAfter', 'useCardAfter'],
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && get.color(event.card) == 'black';
                            },
                            forced: true,
                            content() {
                                if (player.countMark('shishen_jianzhen_mark') == 0) {
                                    player.addMark('shishen_jianzhen_mark');
                                } else if (player.countMark('shishen_jianzhen_mark') == 2) {
                                    player.addMark('shishen_jianzhen_mark');
                                } else if (player.countMark('shishen_jianzhen_mark') == 3) {
                                    player.addMark('shishen_jianzhen_mark');
                                } else if (player.countMark('shishen_jianzhen_mark') == 1) {
                                    player.removeMark('shishen_jianzhen_mark', Infinity);
                                } else if (player.countMark('shishen_jianzhen_mark') == 4) {
                                    player.removeMark('shishen_jianzhen_mark', Infinity);
                                }
                            },
                            group: ['shishen_jianzhen_mark'],
                        },
                        shishen_jianzhen_mark_red: {
                            trigger: {
                                player: ['respondAfter', 'useCardAfter'],
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && get.color(event.card) == 'red';
                            },
                            forced: true,
                            content() {
                                if (player.countMark('shishen_jianzhen_mark') == 1) {
                                    player.addMark('shishen_jianzhen_mark');
                                } else if (player.countMark('shishen_jianzhen_mark') == 4) {
                                    player.addMark('shishen_jianzhen_mark');
                                } else if (player.countMark('shishen_jianzhen_mark') == 2) {
                                    player.removeMark('shishen_jianzhen_mark', Infinity);
                                } else if (player.countMark('shishen_jianzhen_mark') == 3) {
                                    player.removeMark('shishen_jianzhen_mark', Infinity);
                                }
                            },
                            group: ['shishen_jianzhen_mark'],
                        },
                        shishen_jianzhen_mark_use: {
                            trigger: {
                                player: ['respondAfter', 'useCardAfter'],
                            },
                            audio: 'ext:生化狂潮/weapons:1',
                            forced: true,
                            filter(event, player) {
                                return player.countMark('shishen_jianzhen_mark') == 5;
                            },
                            content() {
                                let zombies = game.filterPlayer(function (target) {
                                    return target.identity == 'fan';
                                });
                                player.addTempSkill('shishen_jianzhen', { player: 'phaseZhunbeiBegin' });
                                player.removeMark('shishen_jianzhen_mark', Infinity);
                                for (var i = 0; i < zombies.length; i++) {
                                    zombies[i].addTempSkill('shishen_jianzhen_unrecover', { player: 'phaseJieshuBegin' });
                                    zombies[i].addTempSkill('shishen_jianzhen_damage', { player: 'phaseJieshuBegin' });
                                    zombies[i].damage(1, 'nocard');
                                }
                            },
                        },
                        shishen_jianzhen_unrecover: {
                            trigger: {
                                player: 'recoverBegin',
                            },
                            mark: true,
                            intro: {
                                content: '无法回复体力',
                            },
                            forced: true,
                            content() {
                                trigger.num = 0;
                            },
                        },
                        tiger_ready: {
                            audio: 'ext:生化狂潮/weapons:1',
                            usable: 1,
                            enable: 'phaseUse',
                            filterTarget(c, p, t) {
                                return t != p && t.countGainableCards(p, 'h') > 0 && t.identity == 'fan';
                            },
                            content() {
                                'step 0';
                                player.chooseControl(lib.suit).set('prompt', '请选择一个花色').ai = function () {
                                    return lib.suit.randomGet();
                                };
                                ('step 1');
                                event.suit = result.control;
                                player.popup(event.suit + 2);
                                game.log(player, '选择了', event.suit + 2);
                                player.gainPlayerCard(target, true, 'h', 'visibleMove');
                                ('step 2');
                                if (result.bool) {
                                    let suit2 = result.cards[0].suit;
                                    if (suit2 == event.suit) {
                                        player.addTempSkill('tiger_attack');
                                        event.finish();
                                    } else {
                                        if (
                                            player.countCards('h', function (card) {
                                                return card.suit != suit2;
                                            }) == 0
                                        ) {
                                            event.finish();
                                        } else
                                            player.chooseCard(
                                                'h',
                                                true,
                                                function (card) {
                                                    return card.suit != _status.event.suit2;
                                                },
                                                '交给' + get.translation(target) + '一张牌'
                                            );
                                    }
                                } else event.finish();
                                ('step 3');
                                player.give(result.cards, target, true);
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target: -1,
                                },
                            },
                        },
                        tiger_attack: {
                            audio: 'ext:生化狂潮/weapons:1',
                            forced: true,
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.notLink();
                            },
                            content() {
                                let target = trigger.player;
                                trigger.num += Math.ceil(target.maxHp / 2);
                                player.removeSkill('tiger_attack');
                            },
                        },
                        tiger_mark: {
                            mark: true,
                            intro: {
                                content: '虎威标记:#,集齐四个标记召唤虎王冲散它们!',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            trigger: {
                                source: 'damageSource',
                            },
                            forced: true,
                            content() {
                                player.addMark('tiger_mark', trigger.num);
                            },
                        },
                        tiger_ultimate: {
                            audio: 'ext:生化狂潮/weapons:1',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countMark('tiger_mark') >= 4;
                            },
                            content() {
                                let zombies = game.filterPlayer(function (target) {
                                    return target.identity == 'fan';
                                });
                                player.removeMark('tiger_mark', 4);
                                for (var i = 0; i < zombies.length; i++) {
                                    zombies[i].addTempSkill('shishen_jianzhen_unrecover', { player: 'phaseJieshuBegin' });
                                    zombies[i].damage(1, 'nocard');
                                }
                            },
                            group: ['tiger_mark'],
                            ai: {
                                order: 8,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        tiger_sha: {
                            audio: 'ext:生化狂潮/weapons:1',
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                if (event.card.name != 'sha' || !event.player.isIn()) return false;
                                if (player == event.player)
                                    return player.hasCard(function (card) {
                                        return lib.filter.cardDiscardable(card, player, 'tiger_sha');
                                    }, 'he');
                                return event.player.hasCard(function (card) {
                                    return lib.filter.canBeDiscarded(card, player, event.player);
                                }, 'he');
                            },
                            check(event, player) {
                                if (player == event.player) {
                                    if (
                                        !player.hasCard(function (card) {
                                            return get.value(card) <= 5;
                                        }, 'he')
                                    )
                                        return false;
                                    for (var i of event.targets) {
                                        let eff1 = get.damageEffect(i, player, player);
                                        if (eff1 < 0) return false;
                                        if (i.hasShan() && eff1 > 0) return true;
                                    }
                                    let sha = false;
                                    return (
                                        player.getCardUsable({ name: 'sha' }) <= 0 &&
                                        player.hasCard(function (card) {
                                            if (!sha && card.name == 'sha' && player.getUseValue(card) > 0) {
                                                sha = true;
                                                return false;
                                            }
                                            return sha && get.value(card) <= 5;
                                        }, 'hs')
                                    );
                                } else {
                                    let eff1 = get.effect(event.player, { name: 'guohe_copy2' }, player, player);
                                    let eff2 = get.damageEffect(player, event.player, player);
                                    if (!player.hasShan()) return eff1 > 0;
                                    if (eff2 > 0) return eff1 > 0;
                                    return player.hp > 2 && eff2 < eff1;
                                }
                                return false;
                            },
                            logTarget: 'player',
                            shaRelated: true,
                            content() {
                                'step 0';
                                if (player == trigger.player)
                                    player.chooseToDiscard('he', true).set('ai', function (card) {
                                        let player = _status.event.player;
                                        let val = player.getUseValue(card);
                                        if (card.name == 'sha' && player.getUseValue(card) > 0) val += 5;
                                        return 20 - val;
                                    });
                                else player.discardPlayerCard(trigger.player, true, 'he');
                                ('step 1');
                                trigger.directHit.addArray(game.players);
                            },
                        },
                        zom_chongji: {
                            global: 'zom_chongji_disable',
                            trigger: {
                                global: 'useCard1',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.hujia > 0 && event.card.name == 'sha' && (event.player.identity == 'zhu' || event.player.identity == 'zhong');
                            },
                            content() { },
                            gainable: true,
                            subSkill: {
                                disable: {
                                    mod: {
                                        targetEnabled(card, player, target) {
                                            if (card.name == 'sha') {
                                                if (player.hasSkill('zom_chongji')) return;
                                                if (target.hasSkill('zom_chongji')) return;
                                                if (
                                                    game.hasPlayer(function (current) {
                                                        return current.hasSkill('zom_chongji') && player.inRange(current) && (player.identity == 'zhu' || player.identity == 'zhong');
                                                    })
                                                ) {
                                                    return false;
                                                }
                                            }
                                        },
                                    },
                                },
                            },
                        },
                        zom_yinghua: {
                            audio: 'ext:生化狂潮/zombie:1',
                            enable: 'phaseUse',
                            filterCard: true,
                            selectCard() {
                                return [0, 1];
                            },
                            prompt(event) {
                                return '弃置一张手牌并获得1点护甲或点击<确定>失去1点体力并获得2点护甲';
                            },
                            check(card) {
                                let player = _status.event.player;
                                if (_status.event.player.hp == 1 && player.canSave(player) && player.hujia <= 3) return 0;
                                return 6 - get.value(card);
                            },
                            content() {
                                'step 0';
                                if (cards.length) {
                                    player.changeHujia(1, null, true);
                                    event.finish();
                                }
                                else {
                                    player.loseHp();
                                }
                                ('step 1');
                                player.changeHujia(2, null, true);
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player(player, target) {
                                        if (player.hujia >= 5) return 0;
                                        if (player.hp == 1 && !player.canSave(player) && !player.hasCard((card) => get.value(card) < 6, 'h')) {
                                            return 0;
                                        }
                                        return 1;
                                    },
                                },
                            },
                            subSkill: {
                                discard: {
                                    charlotte: true,
                                },
                                losehp: {
                                    charlotte: true,
                                },
                            },
                        },
                        zom_poshi: {
                            audio: 'ext:生化狂潮/zombie:1',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.hujia > 2;
                            },
                            content() {
                                'step 0';
                                let hujiaValue = player.hujia;
                                player.changeHujia(-hujiaValue);
                                player.draw(hujiaValue);
                                event.count = 2;
                                event.targets = [];
                                ('step 1');
                                event.count--;
                                player
                                    .chooseTarget(get.prompt('zom_poshi'), '弃置一名人类的一张牌(已弃置过的不可再次弃置)', function (card, player, target) {
                                        if (player == target) return false;
                                        if (event.targets.includes(target)) return false;
                                        return (target.identity == 'zhu' || target.identity == 'zhong') && target.countDiscardableCards(player, 'he');
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    });
                                ('step 2');
                                if (result.bool) {
                                    player.line(result.targets[0], 'green');
                                    targets.add(result.targets[0]);
                                    player.discardPlayerCard(result.targets[0], 'he', true);
                                } else if (!targets.length) event.finish();
                                ('step 3');
                                if (event.count) event.goto(1);
                                else if (player == _status.currentPhase) {
                                    player
                                        .chooseTarget('是否对一名目标角色造成1点伤害', function (card, player, target) {
                                            return _status.event.targets.includes(target);
                                        })
                                        .set('targets', targets)
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            return get.damageEffect(target, player, player);
                                        });
                                } else event.finish();
                                ('step 4');
                                if (result.bool) {
                                    player.line(result.targets[0], 'thunder');
                                    result.targets[0].damage();
                                }
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player(player, target) {
                                        if (player.countCards('h') > 1) return 0;
                                        if (player.hp <= 2) return 0;
                                        if (player.hujia > 3) return 0;
                                        return 1;
                                    },
                                },
                            },
                        },
                        zom_benxi: {
                            audio: 'ext:生化狂潮/zombie:1',
                            trigger: {
                                player: 'useCard2',
                            },
                            init(player) {
                                if (!player.storage.zom_benxi) player.storage.zom_benxi = [];
                            },
                            mark: true,
                            marktext: '奔袭',
                            intro: {
                                markcount: () => undefined,
                                content(storage) {
                                    if (storage.length) {
                                        str = '本回合路径:<br>';
                                        for (var i = 0; i < storage.length; i++) {
                                            str += '<span class=bluetext>' + get.translation(storage[i]) + '</span>';
                                            str += '(<span class=yellowtext>' + get.translation(i + 1) + '</span>)';
                                            str += '<span class=firetext>→</span>';
                                        }
                                        return str.slice(0, -29);
                                    }
                                    return '吴懿不在此地(此技能为铝佬扩展【天牢令】的奔袭,尊重原作者代码成果)';
                                },
                            },
                            forced: true,
                            filter(event, player) {
                                return !event.card || (event.card && !event.card.zom_benxi);
                            },
                            content() {
                                'step 0';
                                if (player.next.isAlive()) {
                                    player.storage.zom_benxi.push(player.next);
                                    game.broadcastAll(
                                        function (target1, target2) {
                                            game.swapSeat(target1, target2, true, false, true);
                                        },
                                        player,
                                        player.next
                                    );
                                }
                            },
                            group: ['zom_benxi_return', 'zom_benxi_clear'],
                            subSkill: {
                                return: {
                                    audio: 'zom_benxi',
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zom_benxi.length;
                                    },
                                    content() {
                                        'step 0';
                                        event.target = player.storage.zom_benxi[player.storage.zom_benxi.length - 1];
                                        game.broadcastAll(
                                            function (target1, target2) {
                                                game.swapSeat(target1, target2, true, false, true);
                                            },
                                            player,
                                            event.target
                                        );
                                        player.storage.zom_benxi.pop();
                                        ('step 1');
                                        var list = [];
                                        if (!event.list) event.list = [];
                                        game.getGlobalHistory('cardMove', function (evt) {
                                            if (evt.name == 'lose') {
                                                if (evt.position == ui.discardPile) {
                                                    for (var i of evt.cards) {
                                                        if (get.position(i, true) == 'd') list.add(i);
                                                    }
                                                }
                                            } else {
                                                if (evt.name == 'cardsDiscard') {
                                                    for (var i of evt.cards) {
                                                        if (get.position(i, true) == 'd') list.add(i);
                                                    }
                                                }
                                            }
                                        });
                                        if (list.length) {
                                            player
                                                .chooseCardButton(list, '奔袭:是否对' + get.translation(event.target) + '使用其中一张牌,或点<取消>摸一张牌')
                                                .set('filterButton', function (button) {
                                                    return !event.list.includes(button.link) && (_status.event.player.canUse({ name: button.link.name }, event.target) || event.target.canUse({ name: button.link.name }, event.target));
                                                })
                                                .set('ai', function (button) {
                                                    return get.effect(event.target, { name: button.link.name }, _status.event.player, _status.event.player);
                                                });
                                        } else event.goto(3);
                                        ('step 2');
                                        if (result.bool && result.links.length) {
                                            event.list.add(result.links[0]);
                                            player.useCard(result.links[0], event.target).card.zom_benxi = true;
                                        } else {
                                            player.draw();
                                        }
                                        ('step 3');
                                        if (player.storage.zom_benxi.length) event.goto(0);
                                    },
                                },
                                clear: {
                                    trigger: {
                                        global: 'die',
                                    },
                                    forced: true,
                                    charlotte: true,
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zom_benxi.length && player.storage.zom_benxi.includes(event.player);
                                    },
                                    content() {
                                        for (var i = 0; i < player.storage.zom_benxi.length; i++) {
                                            if (player.storage.zom_benxi[i] === trigger.player) {
                                                player.storage.zom_benxi.splice(i, 1);
                                                i--;
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        zom_bizhang: {
                            audio: 'ext:生化狂潮/zombie:1',
                            enable: 'phaseUse',
                            limited: true,
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                            content() {
                                'step 0';
                                var zombies = game.filterPlayer(function (current) {
                                    return current.identity == 'fan';
                                });
                                for (var i = 0; i < zombies.length; i++) {
                                    zombies[i].changeHujia(2);
                                }
                                game.broadcastAll(function (zombies) {
                                    for (var i = 0; i < zombies.length; i++) {
                                        game.log(zombies[i], '获得了两点护甲');
                                    }
                                }, zombies);
                                ('step 1');
                                player.awakenSkill('zom_bizhang');
                            },
                            mark: true,
                            intro: {
                                name: '蚀心之甲',
                                content: 'limited',
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                    },
                };
                lib.config.all.characters.add('生化狂潮');
                lib.config.characters.add('生化狂潮');
                for (var i in QQQ.character) {
                    QQQ.character[i][4].add(`ext:生化狂潮/image/${i}.jpg`)
                }
                lib.translate.生化狂潮_character_config = `生化狂潮`;
                return QQQ;
            });
            //—————————————————————————————————————————————————————————————————————————————数据操作相关自定义函数
            const numfunc = function () {
                if (!lib.number) {
                    lib.number = [];
                    for (var i = 1; i < 14; i++) {
                        lib.number.add(i);
                    }
                } //添加lib.number
                window.sgn = function (bool) {
                    if (bool) return 1;
                    return -1;
                };//true转为1,false转为-1
                window.numberq0 = function (num) {
                    if (isNaN(Number(num))) return 0;
                    return Math.abs(Number(num));
                };//始终返回正数(取绝对值)
                window.numberq1 = function (num) {
                    if (isNaN(Number(num))) return 1;
                    return Math.max(Math.abs(Number(num)), 1);
                };//始终返回正数且至少为1(取绝对值)
                window.number0 = function (num) {
                    if (isNaN(Number(num))) return 0;
                    return Math.max(Number(num), 0);
                };//始终返回正数
                window.number1 = function (num) {
                    if (isNaN(Number(num))) return 1;
                    return Math.max(Number(num), 1);
                };//始终返回正数且至少为1
                window.deepClone = function (obj, visited = new WeakMap()) {
                    if (obj === null || typeof obj !== 'object' || obj instanceof window.Element) {
                        return obj;
                    }
                    if (visited.has(obj)) {
                        return visited.get(obj);
                    }
                    if (Array.isArray(obj)) {
                        return obj.map((item) => deepClone(item, visited));
                    }
                    const clonedObj = {};
                    visited.set(obj, clonedObj);
                    for (let key in obj) {
                        if (obj.hasOwnProperty(key)) {
                            clonedObj[key] = deepClone(obj[key], visited);
                        }
                    }
                    return clonedObj;
                }; //深拷贝对象
                window.factorial = function (num) {
                    num = Math.round(num);
                    if (num < 0) {
                        return 0;
                    }
                    if (num < 2) {
                        return 1;
                    }
                    let result = 1;
                    for (let i = 2; i <= num; i++) {
                        result *= i;
                    }
                    return result;
                }; //阶乘
                window.isPrime = function (num) {
                    if (num === 2 || num === 3) return true;
                    if (num < 2 || num % 2 === 0 || num % 3 === 0) return false;
                    for (let i = 5; i * i <= num; i += 6) {
                        if (num % i === 0 || num % (i + 2) === 0) return false;
                    }
                    return true;
                }; // 质数
            };
            numfunc();
            game.import('card', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '生化狂潮',
                    connect: true,
                    card: {
                        SVDEX: {
                            fullimage: true,
                            type: 'equip',
                            derivation: 'andelie',
                            subtype: 'equip1',
                            skills: ['svdex_range', 'svdex_damage'],
                            distance: {
                                attackFrom: -4,
                            },
                        },
                        QuadBarrel: {
                            fullimage: true,
                            type: 'equip',
                            subtype: 'equip1',
                            derivation: 'andelie',
                            skills: ['QuadBarrel_damage', 'QuadBarrel_wansha'],
                            distance: {
                                attackFrom: -1,
                            },
                        },
                        Dualkriss: {
                            fullimage: true,
                            type: 'equip',
                            subtype: 'equip1',
                            derivation: 'andelie',
                            skills: ['Dualkriss_skill'],
                            distance: {
                                attackFrom: -2,
                            },
                        },
                        M134EX: {
                            fullimage: true,
                            type: 'equip',
                            subtype: 'equip1',
                            derivation: 'andelie',
                            skills: ['m134ex_skill'],
                            distance: {
                                attackFrom: -2,
                            },
                        },
                        head_kill: {
                            audio: 'ext:生化狂潮/card:1',
                            fullimage: true,
                            derivation: 'andelie',
                            type: 'trick',
                            enable: true,
                            selectTarget: -1,
                            toself: true,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            content() {
                                player.addTempSkill('head_kill_skill');
                            },
                            global: ['lose_head_kill'],
                            ai: {
                                damageBonus: true,
                                basic: {
                                    order: 11,
                                    useful: 8,
                                    value: 3,
                                },
                                result: {
                                    target(player) {
                                        let history = player.getHistory('useCard', function (card) {
                                            return card.name == 'sha';
                                        });
                                        let hasDamageCards =
                                            player.countCards('h', function (card) {
                                                return get.tag(card, 'damage') > 0;
                                            }) > 0;
                                        if (!history || history.length == 0) {
                                            if (hasDamageCards) {
                                                return 11;
                                            } else {
                                                return 0;
                                            }
                                        } else {
                                            return 0;
                                        }
                                    },
                                },
                            },
                        },
                        HK416: {
                            fullimage: true,
                            type: 'equip',
                            subtype: 'equip1',
                            distance: {
                                attackFrom: -3,
                            },
                        },
                        card_zhendang: {
                            fullskin: true,
                            derivation: 'jiangshi_monster',
                            type: 'trick',
                            enable: true,
                            selectTarget: 1,
                            range: {
                                global: 3,
                            },
                            filterTarget(card, player, target) {
                                return target.identity != 'fan';
                            },
                            global: ['lose_card_zhendang'],
                            content() {
                                'step 0';
                                game.playYingx(['card_zhendang1', 'card_zhendang2'].randomGet());
                                target
                                    .chooseToDiscard('he', '弃置一张【杀】或武器牌,否则被缴械,直至你的回合结束', function (card) {
                                        return card.name == 'sha' || get.subtype(card) == 'equip1';
                                    })
                                    .set('ai', function (card) {
                                        if (card.name == 'sha' || get.subtype(card) == 'equip1') return 1;
                                        return 0;
                                    });
                                ('step 1');
                                if (!result.bool) {
                                    target.addSkill('zhendang_sha');
                                }
                            },
                            ai: {
                                wuxie(target, card, player, viewer) {
                                    if (get.attitude(viewer, target) > 0 && target.countCards('h', 'sha')) {
                                        if (!target.countCards('h') || target.hp == 1 || Math.random() < 0.7) return 0;
                                    }
                                },
                                basic: {
                                    order: 9,
                                    useful: 5,
                                    value: 5,
                                },
                                result: {
                                    target_use(player, target) {
                                        let nh = target.countCards('h');
                                        if (nh == 0) return -2;
                                        if (nh == 1) return -1.7;
                                        return -1.5;
                                    },
                                    target(player, target) {
                                        let nh = target.countCards('h');
                                        if (nh == 0) return -2;
                                        if (nh == 1) return -1.7;
                                        return -1.5;
                                    },
                                },
                                tag: {
                                    respond: 1,
                                    respondSha: 1,
                                    damage: 1,
                                },
                            },
                        },
                        card_guishou: {
                            fullskin: true,
                            derivation: 'zombie_tufu',
                            type: 'delay',
                            range: {
                                global: 1,
                            },
                            filterTarget(card, player, target) {
                                return lib.filter.judge(card, player, target) && player != target && target.identity != 'fan';
                            },
                            judge(card) {
                                if (card.suit == 'diamond') return 1;
                                return -2;
                            },
                            judge2(result) {
                                if (result.bool == false) return true;
                                return false;
                            },
                            effect() {
                                if (result.bool == false) {
                                    if (get.is.changban()) {
                                        player.addTempSkill('bingliang_changban');
                                    } else {
                                        player.addTempSkill('guishou_shan', { player: ['phaseZhunbeiBegin', 'dieBefore'] });
                                        if (player.sex == 'male') return game.playYingx(['human_male_trapped'].randomGet());
                                        if (player.sex == 'female') return game.playYingx(['human_female_trapped'].randomGet());
                                    }
                                }
                            },
                            ai: {
                                basic: {
                                    order: 1,
                                    useful: 1,
                                    value: 4,
                                },
                                result: {
                                    target(player, target) {
                                        if (target.hasJudge('caomu')) return 0;
                                        return -1.5 / Math.sqrt(target.countCards('h') + 1);
                                    },
                                },
                                tag: {
                                    respondShan: false,
                                },
                            },
                            selectTarget: 1,
                            enable: true,
                            content() {
                                if (lib.filter.judge(card, player, target) && cards.length && get.position(cards[0], true) == 'o') target.addJudge(card, cards);
                            },
                            allowMultiple: false,
                        },
                        card_shengshui: {
                            fullimage: true,
                            audio: true,
                            derivation: 'human_feiernanduo',
                            type: 'trick',
                            enable: true,
                            selectTarget: 1,
                            range: {
                                global: 3,
                            },
                            filterTarget(card, player, target) {
                                return target.identity == 'fan';
                            },
                            global: ['lose_card_shengshui'],
                            content() {
                                'step 0';
                                if (typeof event.baseDamage != 'number') event.baseDamage = 1;
                                if (event.directHit) event._result = { bool: false };
                                else {
                                    let next = target.chooseToRespond({ name: 'shan' });
                                    next.set('ai', function (card) {
                                        let evt = _status.event.parent;
                                        if (get.damageEffect(evt.target, evt.player, evt.target) >= 0) return 0;
                                        if (evt.player.hasSkillTag('notricksource')) return 0;
                                        if (evt.target.hasSkillTag('notrick')) return 0;
                                        if (evt.target.hasSkillTag('noShan')) {
                                            return -1;
                                        }
                                        return get.order(card);
                                    });
                                    next.autochoose = lib.filter.autoRespondShan;
                                }
                                ('step 1');
                                if (result.bool == false) {
                                    target.damage(event.baseDamage);
                                    target.addSkill('shengshui_damage');
                                }
                            },
                            ai: {
                                damage: true,
                                wuxie(target, card, player, viewer) {
                                    if (get.attitude(viewer, target) > 0 && target.countCards('h', 'shan')) {
                                        if (!target.countCards('h') || target.hp == 1 || Math.random() < 0.7) return 0;
                                    }
                                },
                                basic: {
                                    order: 9,
                                    useful: 5,
                                    value: 5,
                                },
                                result: {
                                    target_use(player, target) {
                                        let nh = target.countCards('h');
                                        if (nh == 0) return -2;
                                        if (nh == 1) return -1.7;
                                        return -1.5;
                                    },
                                    target(player, target) {
                                        let nh = target.countCards('h');
                                        if (nh == 0) return -2;
                                        if (nh == 1) return -1.7;
                                        return -1.5;
                                    },
                                },
                                tag: {
                                    respond: 1,
                                    respondShan: 1,
                                    damage: 1,
                                },
                            },
                        },
                        card_dualswords: {
                            fullimage: true,
                            type: 'equip',
                            subtype: 'equip1',
                            skills: ['shishen_skill'],
                            distance: {
                                attackFrom: 0,
                            },
                            ai: {
                                basic: {
                                    equipValue: 3,
                                    useful: 3,
                                },
                            },
                        },
                        card_star: {
                            fullimage: true,
                            type: 'equip',
                            subtype: 'equip1',
                            skills: ['star_skill', 'star_mark_use', 'star_skill_mark'],
                            distance: {
                                attackFrom: -4,
                            },
                            ai: {
                                basic: {
                                    equipValue: 3,
                                    useful: 3,
                                },
                            },
                        },
                        card_tiger: {
                            fullimage: true,
                            type: 'equip',
                            subtype: 'equip1',
                            skills: ['tiger_ready', 'tiger_ultimate', 'tiger_sha'],
                            distance: {
                                attackFrom: -8,
                            },
                            ai: {
                                basic: {
                                    equipValue: 3,
                                    useful: 3,
                                },
                            },
                        },
                    },
                    translate: {
                        SVDEX: '英雄之怒',
                        SVDEX_info: '锁定技,你的【杀】造成的伤害+1;你使用【杀】时可额外选择至多一个目标.当此牌离开你的装备区时,销毁之.',
                        QuadBarrel: '破碎炙炎',
                        QuadBarrel_info: '每当你使用一张杀指定目标后,你可以弃置任意张与此杀花色相同的牌,若如此做,目标需额外打出等量的闪,每少打出一张闪,此杀的伤害+1;你的回合内,只有你和处于濒死状态的角色才能使用【桃】;一名角色的濒死结算中,除你和濒死角色外的其他角色非锁定技无效.',
                        Dualkriss: '英雄双刺',
                        Dualkriss_info: '锁定技,你的【杀】额外结算一次.',
                        M134EX: '英雄M134',
                        M134EX_info: '锁定技;出牌阶段你可以额外使用两张【杀】;回合开始你需选择一项:①红色手牌均视为【杀】.②【杀】均视为【决斗】直至回合结束;当你使用【杀】指定一个目标后,你令其防具无效.',
                        head_kill: '致命打击',
                        head_kill_info: '出牌阶段使用,于本回合内你对僵尸造成的所有伤害+1,若有角色因此进入濒死,则该角色直接死亡.当你失去此牌时,销毁之.',
                        HK416: 'HK416',
                        HK416_info: '提供4点攻击距离.此牌离开你的装备区时,销毁之.',
                        card_zhendang: '震荡波',
                        card_zhendang_info: '出牌阶段,对一名距离3以内的一名人类使用,目标需弃置一张【杀】或武器牌,否则不能使用和打出【杀】直至目标回合结束.',
                        card_guishou: '鬼手',
                        card_guishou_info: '出牌阶段,对与你距离为1的一名人类使用.将【鬼手】横置于该角色的判定区里,若判定结果不为♦️️,则该角色不能使用和打出【闪】直至回合结束.',
                        card_shengshui: '圣水手雷',
                        card_shengshui_info: '出牌阶段,对一名距离3以内的僵尸使用,目标需打出一张【闪】,否则其受到一点伤害并获得【灼烧】,直至脱离濒死状态.当你失去此牌时,销毁之.',
                        card_dualswords: '弑神双剑',
                        card_dualswords_info: "装备此武器后,出牌阶段你可额外使用四张杀.你可以将红色牌当红杀,黑色牌当黑杀使用.你的黑色【杀】无视目标角色防具,红色【杀】指定目标后该角色需依次使用两张【闪】才能抵消此【杀】.若你按<黑红黑黑红>顺序使用或打出相应颜色的【杀】,则你获得技能<剑阵>.当你使用或打出的【杀】脱离顺序或失去'剑阵'技能后重新开始排列.此牌离开你的装备区时,销毁之.",
                        card_star: '逆界星轮',
                        card_star_info: '装备此武器后,每过一轮会积攒一颗<星>;出牌阶段你可消耗一颗<星>来让你下一张【杀】额外指定两个目标且无法被响应;你的【杀】每命中一次目标会增加1颗<星>;若你的<星>超过4颗且在任何角色的准备阶段,你可以消耗4颗<星>获得<跃迁>技能(本局游戏限一次).此牌离开你的装备区时,销毁之.',
                        card_tiger: '虎王M95',
                        card_tiger_info: '当你使用【杀】指定目标后你可弃置一张牌令此【杀】不可闪避;出牌阶段限一次,你可猜测僵尸一张手牌的花色,若猜中,本回合下一张【杀】伤害附加目标最大体力值的一半伤害(向上取整);若猜错,则你需给予目标一张牌.你每使用【杀】造成一点伤害则增加一点<虎威>标记;出牌阶段你可消耗四点<虎威>标记给所有僵尸造成一点伤害并获得<伤>',
                    },
                };
                for (const i in QQQ.card) {
                    const info = QQQ.card[i];
                    if (!info.image) {
                        if (info.fullskin) {
                            info.image = `ext:生化狂潮/image/${i}.png`;
                        }
                        else {
                            info.image = `ext:生化狂潮/image/${i}.jpg`;
                        }
                    }
                    lib.inpile.add(i);
                    if (info.mode && !info.mode.includes(lib.config.mode)) continue;
                    lib.card.list.push([lib.suits.randomGet(), lib.number.randomGet(), i]);
                }
                lib.config.all.cards.add('生化狂潮');
                lib.config.cards.add('生化狂潮');
                lib.translate.生化狂潮_card_config = '生化狂潮';
                return QQQ;
            });
        },
        package: {
            intro: `<br><br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br><br></span>感谢群里大佬提供的代码思路和纠正代码.<br><img style=width:238px src=extension/生化狂潮/image/kuangchao_2.jpg><br>关注微信公众号<无名杀扩展交流>,获取最新版本.<br>此版本也许为最终版本,无限停更.若更新,则更新内容为大灾变模式`,
            author: '眼蔚蓝已成海',
            version: '1.0',
        },
    };
});

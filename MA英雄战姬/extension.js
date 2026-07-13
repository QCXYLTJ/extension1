import { lib, game, ui, get, ai, _status } from '../../noname.js'
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: 'MA英雄战姬',
        content(config, pack) {
            game.N_playDieAudio = function (playerID) {
                if (lib.config.background_speak) {
                    game.playAudio('../extension/MA英雄战姬/die', playerID + '.mp3');
                }
            };
            lib.skill._ndieaudio = {
                trigger: { player: 'dieBegin' },
                _priority: 2,
                forced: true,
                content() {
                    game.N_playDieAudio(trigger.player.name);
                },
            };
            lib.skill._ja_lie = {
                group: 'ja_silie',
            };
            lib.skill._ja_buff = {
                group: ['ja_dili', 'ja_jili', 'ja_baoji', 'ja_Critical', 'ja_tuitui'],
            };
            lib.skill._luckyed = {
                group: 'ja_lucky',
            };
            lib.element.player.baoShang = function () {
                num = 1;
            };
        },
        precontent() {
            get.Luckly = function () {
                var num = 1;
                num = game.checkMod(this, num, 'maxLuckly', this);
                return num;
            };
            get.baoShang = function () {
                var next = game.createEvent('baoshang');
                var num = 2;
                num = game.checkMod(this, num, 'baoShang', this);
                return num + 2;
            };
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: 'MA英雄战姬',
                    connect: true,
                    characterSort: {
                    },
                    dynamicTranslate: {
                    },
                    character: {
                        ja_lvbu: ['female', 'qun', 4, ['ja_qianjun', 'ja_futian'], ['des:天狐旗下<英雄＊战姬>及其衍生作品的登场角色吕布.是历史人物吕布的萌娘化.']],
                        ja_helakelesi: ['female', 'shu', 5, ['ja_wuqian'], []],
                        ja_napolun: ['female', 'wei', 4, ['ja_zhenluan', 'ja_fangzhu'], []],
                        ja_paoding: ['female', 'qun', 3, ['ja_jieniu', 'ja_baozi', 'ja_sheyan'], ['hiddenSkill']],
                        ja_gaowen: ['female', 'wei', 4, ['ja_shengshu', 'ja_yemu'], []],
                        ja_zhende: ['female', 'wei', 3, ['ja_xiansheng', 'ja_qibing'], ['hiddenSkill']],
                        ja_jierjiameishen: ['female', 'wu', 4, ['ja_baiwu'], []],
                        ja_zhitianxinchang: ['female', 'shu', 4, ['ja_sanduanji', 'ja_buwu'], ['hiddenSkill']],
                        ja_shichuanwuyouweimen: ['female', 'wu', 3, ['ja_zhantiejian', 'ja_juhe'], []],
                        ja_jieluonimo: ['female', 'shu', 5, ['ja_kuangbao', 'ja_mengxi'], []],
                        ja_shihuangdi: ['female', 'qun', 3, ['ja_yitong', 'ja_shihuang'], []],
                        ja_akaliusi: ['female', 'qun', 4, ['ja_shensu', 'ja_kaixuan'], []],
                        ja_enqidu: ['female', 'wu', 4, ['ja_babilunchengqiang'], []],
                        ja_yasewang: ['female', 'wei', 2, ['ja_aidezhufu'], []],
                        ja_yidazhengzong: ['female', 'shu', 4, ['ja_moujiashanggouquan', 'ja_dumou'], []],
                        ja_beideweier: ['female', 'wei', 5, ['ja_yingyong'], []],
                        ja_chalimandadi: ['female', 'wu', 4, ['ja_yongqi', 'ja_duren'], []],
                        ja_sunliujianyuan: ['female', 'shu', 3, ['ja_mingdao', 're_chaojiqi'], []],
                        ja_sunzi: ['female', 'qun', 3, ['ja_sishuwulu', 'ja_guidao'], []],
                        ja_daerwen: ['female', 'wu', 3, ['ja_liezhua', 'ja_jinhualun'], []],
                        ja_hanmolabi: ['female', 'wu', 4, ['ja_yiyanhuanyan', 'ja_jiquan'], ['hiddenSkill']],
                        ja_balin: ['female', 'wei', 3, ['ja_weihe', 'ja_beifenyiji'], []],
                        ja_wuzangfangmuqin: ['female', 'shu', 4, ['ja_qianbing', 'ja_bingzhan'], []],
                        ja_liubang: ['female', 'qun', 4, ['ja_ershanshanjiang', 'ja_houmou'], []],
                        ja_makeboluo: ['female', 'qun', 3, ['ja_cisha', 'ja_bwhj'], []],
                        ja_baosi: ['female', 'wei', 3, ['ja_zhiyuguanghuan', 'ja_kanchuan'], []],
                        ja_dahewuzun: ['female', 'shu', 5, ['ja_huolei', 'ja_daniaozhizi'], []],
                        ja_deleike: ['female', 'wu', 3, ['ja_shuini', 'ja_longyanjian'], []],
                        ja_lansiluote: ['female', 'wei', 3, ['ja_jinglingdejiahu', 'ja_alongdaite'], []],
                        ja_yuanyijing: ['female', 'shu', 4, ['ja_feikongzhan', 'ja_yijingqianbenying'], []],
                        ja_aerweida: ['female', 'wu', 4, ['ja_juanxi', 'ja_yuanxiong'], []],
                        ja_hubilie: ['female', 'qun', 4, ['ja_youqi', 'ja_cangping'], []],
                        ja_modeleide: ['female', 'wei', 4, ['ja_kuangwu', 'ja_luanci'], []],
                        ja_beimihu: ['female', 'shu', 4, ['ja_bianjinjing', 'ja_ciai'], []],
                        ja_diqi: ['female', 'wu', '3/4', ['ja_chuanxindan', 'ja_heihuzidabaofa'], []],
                        ja_taigongwang: ['female', 'qun', 3, ['ja_jinjiaojian', 'ja_fengshentai'], []],
                        ja_yiwen: ['female', 'wei', 4, ['ja_baishi'], []],
                        ja_yinengzhongjing: ['female', 'shu', 4, ['ja_tiandiceliang'], []],
                        ja_weilianjide: ['female', 'wu', 4, ['ja_zajitou', 'ja_jinyindao'], []],
                        ja_baiqi: ['female', 'qun', '4/5', ['ja_santilun', 'ja_zhanshoulun'], []],
                        ja_jiahalade: ['female', 'wei', 4, ['ja_bingshangxianshi'], []],
                        ja_anbeiqingming: ['female', 'shu', 3, ['ja_baiguiyexing', 'ja_shanyuzhanbuderen'], []],
                        ja_shantianchangzheng: ['female', 'wu', '3/5', ['ja_jialouluotianxiang'], []],
                        ja_wangzhi: ['female', 'qun', 3, ['ja_jiaokou', 'ja_shouyuan'], []],
                        ja_paxiwaer: ['female', 'wei', 3, ['ja_yuanyue'], []],
                        ja_jiatengqingzheng: ['female', 'shu', 4, ['ja_qjpx'], []],
                        ja_geleisiaomali: ['female', 'wu', 3, ['ja_dubian', 'ja_huiyue'], []],
                        ja_majiyaweili: ['female', 'qun', 3, ['ja_yinjun', 'ja_yintui'], []],
                        ja_kai: ['female', 'wei', 4, ['ja_lingren'], []],
                        ja_zhentianxincun: ['female', 'shu', 4, ['ja_qulunwu', 'ja_sddyh'], []],
                        ja_yekajielinna: ['female', 'wu', 4, ['ja_kangzi'], []],
                        ja_yadianna: ['female', 'qun', 4, ['ja_huanghun'], []],
                        ja_telisitan: ['female', 'wei', 4, ['ja_chougan', 'mashu'], []],
                        ja_heji: ['female', 'shu', 3, ['ja_xuanfengzhan', 'ja_qianyuzhiwu'], []],
                        ja_qihefei: ['female', 'wu', '3/4', ['ja_beibuderuodian', 'ja_longxiedejiahu'], []],
                        ja_tiancaosilang: ['female', 'wei', 4, ['ja_qijian', 'ja_kuiji'], []],
                        ja_daozhi: ['female', 'qun', 3, ['ja_daoyiyoudao', 'ja_tiandidao', 'ja_huiyumosha'], []],
                        ja_damodashi: ['female', 'shu', 4, ['ja_piquan', 'ja_fuquanbanghe'], []],
                        ja_laifuailikesong: ['female', 'wu', 4, ['ja_kainazidezhenfeng', 'ja_hajialasifengbao'], []],
                        ja_danding: ['female', 'qun', 3, ['ja_Paradiaso', 'ja_huanhuozhishi'], []],
                    },
                    characterTitle: {
                    },
                    characterIntro: {
                    },
                    skill: {
                        ja_wushuang: {
                            shaRelated: true,
                            audio: 'ext:MA英雄战姬/audio:2',
                            forced: true,
                            group: ['ja_wushuang1', 'ja_wushuang2'],
                        },
                        ja_wushuang1: {
                            audio: 'ext:MA英雄战姬·将/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.name == 'sha' && !event.parent.directHit.includes(event.target);
                            },
                            logTarget: 'target',
                            content() {
                                var id = trigger.target.playerid;
                                var map = trigger.parent.customArgs;
                                if (!map[id]) map[id] = {};
                                if (typeof map[id].shanRequired == 'number') {
                                    map[id].shanRequired++;
                                } else {
                                    map[id].shanRequired = 2;
                                }
                            },
                        },
                        ja_wushuang2: {
                            audio: 'ext:MA英雄战姬·将/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                                target: 'useCardToTargeted',
                            },
                            forced: true,
                            logTarget(trigger, player) {
                                return player == trigger.player ? trigger.target : trigger.player;
                            },
                            filter(event, player) {
                                return event.card.name == 'juedou';
                            },
                            content() {
                                var id = (player == trigger.player ? trigger.target : trigger.player).playerid;
                                var idt = trigger.target.playerid;
                                var map = trigger.parent.customArgs;
                                if (!map[idt]) map[idt] = {};
                                if (!map[idt].shaReq) map[idt].shaReq = {};
                                if (!map[idt].shaReq[id]) map[idt].shaReq[id] = 1;
                                map[idt].shaReq[id]++;
                            },
                            ai: {
                                result: {
                                    target(card, player, target) {
                                        if (card.name == 'juedou' && target.countCards('h') > 0) return [1, 0, 0, -1];
                                    },
                                },
                            },
                        },
                        ja_qianjun: {
                            init(player) {
                                player.addMark('ja_lucky', 4);
                                player.markSkill('ja_lucky');
                            },
                            onremove(player, skill) {
                                player.storage.ja_lucky -= 4;
                                player.markSkill('ja_lucky');
                            },
                            mod: {
                                selectTarget(card, player, range) {
                                    if ((card.name == 'sha' && Array.isArray(range) && range[1] != -1) || (card.name == 'juedou' && range[1] != -1)) range[1] += 2;
                                },
                                attackFrom(from, to, distance) {
                                    return distance - 2;
                                },
                            },
                        },
                        ja_futian: {
                            audio: 'ext:MA英雄战姬/audio:4',
                            forced: true,
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                return (
                                    event.card &&
                                    (get.type(event.card) == 'trick' || (get.type(event.card) == 'basic' && !['shan', 'tao', 'jiu', 'du'].includes(event.card.name))) &&
                                    game.hasPlayer(function (current) {
                                        return current != player && get.distance(player, current) <= 1;
                                    })
                                );
                            },
                            content() {
                                trigger.directHit.addArray(
                                    game.filterPlayer(function (current) {
                                        return current != player && current.hp >= player.hp;
                                    })
                                );
                            },
                        },
                        ja_yiyanhuanyan: {
                            init(player) {
                                player.addMark('ja_lucky', 1);
                                player.markSkill('ja_lucky');
                            },
                            onremove(player, skill) {
                                player.storage.ja_lucky -= 1;
                                player.markSkill('ja_lucky');
                            },
                            nobracket: true,
                            audio: 'ext:MA英雄战姬/audio:2',
                            filter(event, player) {
                                return event.player != player && event.card && get.type(event.card) != 'delay';
                            },
                            logTarget: 'player',
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            forced: true,
                            content() {
                                var card = trigger.card;
                                if (player.canUse(card, trigger.player, false)) player.useCard(card, trigger.player, false);
                            },
                            ai: {
                                expose: 0.3,
                            },
                        },
                        ja_jiquan: {
                            trigger: {
                                player: 'showCharacterAfter',
                            },
                            audio: 'ext:MA英雄战姬/audio:2',
                            forced: true,
                            content() {
                                player.draw(3);
                            },
                        },
                        ja_wuqian: {
                            trigger: {
                                player: 'useCard',
                            },
                            audio: 'ext:MA英雄战姬/audio:2',
                            forced: true,
                            filter(event, player) {
                                return event.card.name == 'sha' || event.card.name == 'juedou';
                            },
                            content() {
                                if (trigger.name == 'useCard') trigger.directHit.addArray(game.players);
                                else trigger.directHit.add(player);
                            },
                        },
                        ja_zhenluan: {
                            init(player) {
                                player.addMark('ja_lucky', 1);
                                player.markSkill('ja_lucky');
                            },
                            onremove(player, skill) {
                                player.storage.ja_lucky -= 1;
                                player.markSkill('ja_lucky');
                            },
                            audio: 'ext:MA英雄战姬/audio:2',
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                return event.card.name == 'nanman' || event.card.name == 'wanjian';
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('ja_zhenluan'), '令一名角色摸一张牌', function (card, player, target) {
                                        return target != trigger.player;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    result.targets[0].draw();
                                    player.draw();
                                }
                            },
                        },
                        ja_fangzhu: {
                            audio: 'ext:MA英雄战姬/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('ja_fangzhu'), '令一名其他角色将武将牌翻面并摸' + get.cnNumber(player.hp) + '张牌', function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    if (target.hasSkillTag('noturn')) return 0;
                                    var player = _status.event.player;
                                    if (get.attitude(_status.event.player, target) == 0) return 0;
                                    if (get.attitude(_status.event.player, target) > 0) {
                                        if (target.classList.contains('turnedover')) return 1000 - target.countCards('h');
                                        if (player.hp > 2) return -1;
                                        return 100 - target.countCards('h');
                                    } else {
                                        if (target.classList.contains('turnedover')) return -1;
                                        if (player.hp < 3) return -1;
                                        return 1 + target.countCards('h');
                                    }
                                }; //QQQ
                                ('step 1');
                                if (result.targets?.length) {
                                    result.targets[0].draw(player.hp);
                                    result.targets[0].turnOver();
                                }
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                            if (target.hp <= 1) return;
                                            if (!target.hasFriend()) return;
                                            var hastarget = false;
                                            var turnfriend = false;
                                            var players = game.filterPlayer();
                                            for (var i = 0; i < players.length; i++) {
                                                if (get.attitude(target, players[i]) < 0 && !players[i].isTurnedOver()) {
                                                    hastarget = true;
                                                }
                                                if (get.attitude(target, players[i]) > 0 && players[i].isTurnedOver()) {
                                                    hastarget = true;
                                                    turnfriend = true;
                                                }
                                            }
                                            if (get.attitude(player, target) > 0 && !hastarget) return;
                                            if (turnfriend || target.hp == target.maxHp) return [0.5, 1];
                                            if (target.hp > 1) return [1, 0.5];
                                        }
                                    },
                                },
                            },
                        },
                        ja_jieniu: {
                            enable: 'phaseUse',
                            audio: 'ext:MA英雄战姬/audio:2',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return target.countCards('e') > 0;
                            },
                            content() {
                                'step 0';
                                player.discardPlayerCard(target, 'e', true);
                                ('step 1');
                                game.asyncDraw([player, target]);
                            },
                            ai: {
                                order: 8,
                                threaten: 1.5,
                                result: {
                                    target: -1,
                                    player: 0.5,
                                },
                            },
                        },
                        ja_baozi: {
                            audio: 'ext:MA英雄战姬/audio:2',
                            enable: 'phaseUse',
                            filterCard: true,
                            position: 'he',
                            selectCard: 2,
                            usable: 1,
                            check(card) {
                                return 9 - get.value(card);
                            },
                            filterTarget(card, player, target) {
                                if (target.hp >= target.maxHp) return false;
                                return true;
                            },
                            content() {
                                target.recover();
                                target.draw();
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target(player, target) {
                                        if (target.hp == 1) return 5;
                                        if (player == target && player.countCards('h') > player.hp) return 5;
                                        return 2;
                                    },
                                },
                                threaten: 2,
                            },
                        },
                        ja_sheyan: {
                            audio: 'ext:MA英雄战姬/audio:2',
                            trigger: {
                                player: 'showCharacterAfter',
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('ja_sheyan'), '与一名其他角色各摸两张牌', function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    result.targets[0].draw(2);
                                    player.draw(2);
                                }
                            },
                        },
                        ja_shengshu: {
                            trigger: {
                                player: ['useCard'],
                            },
                            audio: 'ext:MA英雄战姬/audio:4',
                            forced: true,
                            filter(event, player) {
                                return _status.currentPhase == player && (player.countUsed() % 3 == 0 || event.card.number % 3 == 0);
                            },
                            content() {
                                player.draw();
                            },
                        },
                        ja_yemu: {
                            audio: 'ext:MA英雄战姬/audio:2',
                            _priority: -10,
                            derivation: 'ja_buluo',
                            trigger: {
                                global: 'phaseBeginStart',
                            },
                            forced: true,
                            filter(event, player) {
                                return game.roundNumber >= 3 && !player.storage.ja_yemu;
                            },
                            content() {
                                player.loseMaxHp();
                                player.storage.ja_yemu = true;
                                if (player.hp > player.maxHp) player.hp = player.maxHp;
                                player.node.avatar.setBackgroundImage('extension/MA英雄战姬/ja_yougaowen.png');
                                player.addSkill('ja_buluo');
                                player.update();
                                player.draw(2);
                            },
                        },
                        ja_buluo: {
                            audio: 'ext:MA英雄战姬/audio:2',
                            group: 'ja_buluo_1',
                            marktext: '日',
                            intro: {
                                content: '你还能执行#个额外回合',
                            },
                            init(player) {
                                player.storage.ja_buluo = 1;
                                player.markSkill('ja_buluo');
                                player.say('感到力量正在涌出'); //QQQ
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseAfter',
                                    },
                                    audio: 'ja_buluo',
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.ja_buluo > 0;
                                    },
                                    content() {
                                        player.storage.ja_buluo--;
                                        player.phase('nodelay');
                                    },
                                },
                            },
                        },
                        ja_qibing: {
                            audio: 'ext:MA英雄战姬/audio:2',
                            trigger: {
                                player: 'showCharacterAfter',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('ja_qibing'), [1, 4], '令至多四名角色摸一张牌', function (card, player, target) {
                                        return true;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    game.asyncDraw(result.targets);
                                }
                            },
                        },
                        ja_xiansheng: {
                            init(player) {
                                player.addMark('ja_lucky', 7);
                                player.markSkill('ja_lucky');
                            },
                            onremove(player, skill) {
                                player.storage.ja_lucky -= 7;
                                player.markSkill('ja_lucky');
                            },
                            audio: 'ext:MA英雄战姬/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                'step 0';
                                event.count = Math.min(trigger.num, 9);
                                ('step 1');
                                event.count--;
                                ('step 2');
                                player
                                    .chooseTarget(get.prompt('ja_xiansheng'), '令一名角色摸一张牌', function (card, player, target) {
                                        return true;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(player, target);
                                    });
                                ('step 3');
                                if (result.targets?.length) {
                                    result.targets[0].draw();
                                    player.draw();
                                    if (result.targets[0] != player) {
                                        result.targets[0].recover();
                                    }
                                }
                                ('step 4');
                                if (event.count > 0) {
                                    event.goto(1);
                                }
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                result: {
                                    effect(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                            if (!target.hasFriend()) return;
                                            var num = 1;
                                            if (get.attitude(player, target) > 0) {
                                                if (player.needsToDiscard()) {
                                                    num = 0.7;
                                                } else {
                                                    num = 0.5;
                                                }
                                            }
                                            if (player.hp >= 4) return [1, num * 2];
                                            if (target.hp == 3) return [1, num * 1.5];
                                            if (target.hp == 2) return [1, num * 0.5];
                                        }
                                    },
                                },
                                threaten: 0.6,
                            },
                        },
                        ja_baiwu_2: {
                            trigger: {
                                target: 'shaBefore',
                            },
                            forced: true,
                            audio: 'ja_baiwu',
                            filter(event, player) {
                                if (!player.getEquip(2)) return false;
                                return event.card.name == 'sha';
                            },
                            content() {
                                trigger.cancel();
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (player == target && get.subtype(card) == 'equip2') {
                                            if (get.equipValue(card) >= 8) return 0;
                                        }
                                        if (!target.getEquip(2)) return;
                                        if (card.name == 'sha') return 'zerotarget';
                                    },
                                },
                            },
                        },
                        ja_baiwu: {
                            init(player) {
                                player.addMark('ja_lucky', 2);
                                player.markSkill('ja_lucky');
                            },
                            onremove(player, skill) {
                                player.storage.ja_lucky -= 2;
                                player.markSkill('ja_lucky');
                            },
                            group: ['ja_baiwu_2', 'ja_baiwu_5'],
                            audio: 'ext:MA英雄战姬/audio:4',
                            trigger: {
                                player: ['damageEnd'],
                            },
                            forced: true,
                            filter(event, player) {
                                return player.getEquip(4) || player.getEquip(6);
                            },
                            content() {
                                player.draw(trigger.num);
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha' && player.getEquip(1)) return num + 1;
                                },
                                maxHandcard(player, num) {
                                    if (player.getEquip(3) || player.getEquip(6)) return num + 2;
                                },
                            },
                        },
                        ja_baiwu_5: {
                            audio: 'ja_baiwu',
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            forced: true,
                            filter(event, player) {
                                return !event.numFixed && player.getEquip(5);
                            },
                            content() {
                                trigger.num++;
                            },
                            ai: {
                                threaten: 1.3,
                            },
                        },
                        ja_buwu: {
                            trigger: {
                                player: 'showCharacterAfter',
                            },
                            forced: true,
                            audio: 'ext:MA英雄战姬/audio:2',
                            content() {
                                player.chooseUseTarget('###是否发动【布武】？###视为使用一张【万箭齐发】', { name: 'wanjian' }, false, 'nodistance');
                            },
                            ai: {
                                threaten(player, target) {
                                    return 1.6;
                                },
                            },
                        },
                        ja_sanduanji: {
                            init(player) {
                                player.addMark('ja_lucky', 4);
                                player.markSkill('ja_lucky');
                            },
                            onremove(player, skill) {
                                player.storage.ja_lucky -= 4;
                                player.markSkill('ja_lucky');
                            },
                            nobracket: true,
                            audio: 'ext:MA英雄战姬/audio:3',
                            shaRelated: true,
                            trigger: {
                                global: 'useCard',
                            },
                            usable: 2,
                            forced: true,
                            filter(event, player) {
                                return event.card.name == 'sha' && player.countCards('he') > 0 && event.player.isPhaseUsing();
                            },
                            content() {
                                'step 0';
                                var go = false;
                                if (get.attitude(player, trigger.player) > 0) {
                                    if (trigger.addCount === false || !trigger.player.isPhaseUsing()) go = false;
                                    else if (!trigger.player.hasSkill('paoxiao') && !trigger.player.hasSkill('tanlin3') && !trigger.player.hasSkill('zhaxiang2') && !trigger.player.hasSkill('fengnu') && !trigger.player.getEquip('zhuge')) {
                                        var nh = trigger.player.countCards('h');
                                        if (player == trigger.player) {
                                            go = player.countCards('h', 'sha') > 0;
                                        } else if (nh >= 4) {
                                            go = true;
                                        } else if (player.countCards('h', 'sha')) {
                                            if (nh == 3) {
                                                go = Math.random() < 0.8;
                                            } else if (nh == 2) {
                                                go = Math.random() < 0.5;
                                            }
                                        } else if (nh >= 3) {
                                            if (nh == 3) {
                                                go = Math.random() < 0.5;
                                            } else if (nh == 2) {
                                                go = Math.random() < 0.2;
                                            }
                                        }
                                    }
                                }
                                var next = player.chooseToDiscard(get.prompt('longyin'), '弃置一张牌,令' + get.translation(trigger.player) + '本次使用的【杀】不计入使用次数', 'he');
                                next.set('ai', function (card) {
                                    if (_status.event.go) {
                                        return 6 - get.value(card);
                                    }
                                    return 0;
                                });
                                next.set('go', go);
                                ('step 1');
                                if (result.bool) {
                                    if (trigger.addCount !== false) {
                                        trigger.addCount = false;
                                        trigger.player.getStat().card.sha--;
                                        trigger.player.draw();
                                    }
                                }
                            },
                            ai: {
                                expose: 0.2,
                            },
                        },
                        ja_zhantiejian: {
                            init(player) {
                                player.addMark('ja_lucky', 4);
                                player.markSkill('ja_lucky');
                            },
                            onremove(player, skill) {
                                player.storage.ja_lucky -= 4;
                                player.markSkill('ja_lucky');
                            },
                            nobracket: true,
                            audio: 'ext:MA英雄战姬/audio:2',
                            trigger: {
                                source: 'damageBegin1',
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            filter(event, player) {
                                return event.parent.name == 'sha';
                            },
                            content() {
                                'step 0';
                                player.judge();
                                ('step 1');
                                if (result.card.suit != 'heart') {
                                    trigger.num++;
                                } else {
                                    player.draw();
                                }
                            },
                        },
                        ja_juhe: {
                            mod: {
                                attackFrom(from, to, distance) {
                                    if (from.storage.ja_juhe == false) return distance - 1;
                                },
                            },
                            mark: true,
                            audio: 'ext:MA英雄战姬/audio:2',
                            zhuanhuanji: true,
                            marktext: '居',
                            intro: {
                                content(storage, player, skill) {
                                    if (player.storage.ma_juhe == false) return '出鞘:你的【杀】攻击范围+1';
                                    return '收刀:你使用的【杀】无视防具且无法被闪避';
                                },
                            },
                            group: ['ja_juhe_1', 'ja_juhe_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card.name == 'sha';
                                    },
                                    content() {
                                        player.storage.ja_juhe = false;
                                        player.removeSkill('ja_juhe1');
                                    },
                                },
                                2: {
                                    audio: 2,
                                    trigger: {
                                        global: 'gameStart',
                                        player: 'phaseDiscardBefore',
                                    },
                                    forced: true,
                                    frequent(event, player) {
                                        return player.needsToDiscard();
                                    },
                                    filter(event, player) {
                                        if (player.getHistory('skipped').includes('phaseUse')) return true;
                                        var history = player.getHistory('useCard').concat(player.getHistory('respond'));
                                        for (var i = 0; i < history.length; i++) {
                                            if (history[i].card.name == 'sha' && history[i].isPhaseUsing()) return false;
                                        }
                                        return true;
                                    },
                                    content() {
                                        player.storage.ja_juhe = true;
                                        player.addSkill('ja_juhe1');
                                    },
                                },
                            },
                        },
                        ja_juhe1: {
                            trigger: {
                                player: 'shaBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card;
                            },
                            content() {
                                trigger.directHit = true;
                            },
                            ai: {
                                unequip: true,
                                skillTagFilter(player, tag, arg) {
                                    if (arg && arg.name == 'sha') return true;
                                    return false;
                                },
                            },
                        },
                        ja_kuangbao: {
                            audio: 'ext:MA英雄战姬/audio:2',
                            trigger: {
                                source: 'damageBegin1',
                                player: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.parent.name == 'sha';
                            },
                            content() {
                                trigger.num++;
                            },
                        },
                        ja_mengxi: {
                            init(player) {
                                player.addMark('ja_lucky', 2);
                                player.markSkill('ja_lucky');
                            },
                            onremove(player, skill) {
                                player.storage.ja_lucky -= 2;
                                player.markSkill('ja_lucky');
                            },
                            audio: 'ext:MA英雄战姬/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                if (player == target) return false;
                                return player.inRange(target);
                            },
                            selectTarget: 1,
                            content() {
                                'step 0';
                                player.loseHp();
                                ('step 1');
                                player.useCard({ name: 'sha' }, target, false);
                            },
                            ai: {
                                damage: true,
                                order: 8,
                                result: {
                                    player(player, target) {
                                        if (player.hp > target.hp && target.countCards('h') <= 1) return 8;
                                        if (player.hp <= target.hp) return -0.9;
                                        if (player.hp <= 2) return -10;
                                        return 0.5;
                                    },
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                            },
                            threaten: 1.3,
                        },
                        ja_yitong: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            audio: 'ext:MA英雄战姬/audio:2',
                            forced: true,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('ja_yitong'), [1, 4], function (card, player, target) {
                                        if (player == target) return false;
                                        if (target.group == 'unknown') return false;
                                        for (var i = 0; i < ui.selected.targets.length; i++) {
                                            if (ui.selected.targets[i].group == target.group) return false;
                                        }
                                        return target.countCards('he') > 0;
                                    })
                                    .set('ai', function (target) {
                                        return 0.5 - get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    event.targets = result.targets;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (event.targets && event.targets.length) {
                                    event.target = event.targets.shift();
                                    event.target.chooseCard('交给' + get.translation(player) + '一张手牌', 'he', true).ai = function (card) {
                                        return -get.value(card);
                                    };
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (result.cards?.length) {
                                    event.target.$give(1, player);
                                    player.gain(result.cards, event.target);
                                }
                                event.goto(2);
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                expose: 0.2,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                            if (!target.hasFriend()) return;
                                            var players = game.filterPlayer();
                                            for (var i = 0; i < players.length; i++) {
                                                if (players[i].group != 'qun' && get.attitude(player, players[i]) <= 0 && players[i] != player) {
                                                    if (target.hp >= 4) return [1, get.tag(card, 'damage') * 2];
                                                    if (target.hp == 3) return [1, get.tag(card, 'damage') * 1.5];
                                                    if (target.hp == 2) return [1, get.tag(card, 'damage') * 0.5];
                                                }
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        ja_shihuang: {
                            init(player) {
                                player.addMark('ja_lucky', 2);
                                player.markSkill('ja_lucky');
                            },
                            onremove(player, skill) {
                                player.storage.ja_lucky -= 2;
                                player.markSkill('ja_lucky');
                            },
                            audio: 'ext:MA英雄战姬/audio:2',
                            trigger: {
                                player: 'gainAfter',
                            },
                            filter(event, player) {
                                var namelist = [];
                                var namedlist = [];
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        //QQQ
                                        namelist.add(i.name);
                                    }
                                var hs = player.getCards('h');
                                for (var j = 0; j < hs.length; j++) {
                                    if (namelist.includes(hs[j].name) && event.getParent(2).name != 'ja_shihuang' && !event.cards.includes(hs[j])) return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                var namelist = [];
                                var namedlist = [];
                                var nameddlist = [];
                                var namedddlist = [];
                                for (var i = 0; i < trigger.cards.length; i++) {
                                    namelist.add(trigger.cards[i].name);
                                }
                                var hs = player.getCards('h');
                                for (var j = 0; j < hs.length; j++) {
                                    if (namelist.includes(hs[j].name) && !trigger.cards.includes(hs[j])) {
                                        namedlist.push(hs[j]);
                                        namedddlist.add(hs[j].name);
                                    }
                                }
                                for (var k = 0; k < trigger.cards.length; k++) {
                                    if (namedddlist.includes(trigger.cards[k].name)) nameddlist.push(trigger.cards[k]);
                                }
                                var showlist = namedlist.concat(nameddlist);
                                player.showCards(showlist);
                                player.discard(nameddlist);
                                player.draw(nameddlist.length);
                            },
                        },
                        ja_shensu: {
                            trigger: {
                                player: ['phaseBegin'],
                            },
                            group: 'ja_shensu_1',
                            forced: true,
                            audio: 'ext:MA英雄战姬/audio:4',
                            content() {
                                player.draw(2);
                                player.phaseUse();
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: ['phaseDiscardBefore'],
                                    },
                                    forced: true,
                                    audio: 'ja_shensu',
                                    content() {
                                        player.chooseToDiscard('he', true);
                                        player.phaseUse();
                                    },
                                },
                            },
                        },
                        ja_kaixuan: {
                            init(player) {
                                player.addMark('ja_lucky', 1);
                                player.markSkill('ja_lucky');
                            },
                            onremove(player, skill) {
                                player.storage.ja_lucky -= 1;
                                player.markSkill('ja_lucky');
                            },
                            audio: 'ext:MA英雄战姬/audio:3',
                            trigger: {
                                player: 'useCard2',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.isPhaseUsing();
                            },
                            content() { },
                            mod: {
                                globalFrom(from, to, distance) {
                                    if (_status.currentPhase == from) {
                                        return distance - from.countUsed();
                                    }
                                },
                            },
                        },
                        ja_babilunchengqiang: {
                            init(player) {
                                player.addMark('ja_lucky', 6);
                                player.markSkill('ja_lucky');
                            },
                            onremove(player, skill) {
                                player.storage.ja_lucky -= 6;
                                player.markSkill('ja_lucky');
                            },
                            nobracket: true,
                            usable: 1,
                            audio: 'ext:MA英雄战姬/audio:2',
                            trigger: {
                                global: 'shaBefore',
                            },
                            _priority: 5,
                            filter(event, player) {
                                if (player == event.player) return false;
                                return get.distance(player, event.target) <= 1;
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) >= 0;
                            },
                            content() {
                                'step 0';
                                var card = get.cardPile2(function (card) {
                                    return get.type(card) == 'equip';
                                });
                                event.card = card;
                                ('step 1');
                                if (event.card) {
                                    player.equip(event.card);
                                }
                                ('step 2');
                                trigger.target = player;
                            },
                        },
                        ja_aidezhufu: {
                            audio: 'ext:MA英雄战姬/audio:2',
                            nobracket: true,
                            trigger: {
                                player: 'drawBegin',
                            },
                            forced: true,
                            content() {
                                trigger.num++;
                            },
                            ai: {
                                threaten: 1.5,
                            },
                            mod: {
                                maxHandcardBase(player, num) {
                                    return num + 1;
                                },
                                selectTarget(card, player, range) {
                                    if (card.name == 'sha' && Array.isArray(range) && range[1] != -1) range[1] += 1;
                                },
                                attackFrom(from, to, distance) {
                                    return distance - 1;
                                },
                                globalFrom(from, to, distance) {
                                    return distance - 1;
                                },
                                globalTo(from, to, distance) {
                                    return distance + 1;
                                },
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + 1;
                                },
                            },
                        },
                        ja_moujiashanggouquan: {
                            nobracket: true,
                            audio: 'ext:MA英雄战姬/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                if (player == target) return false;
                                return player.inRange(target);
                            },
                            selectTarget: 1,
                            content() {
                                'step 0';
                                player.chooseToPSS(target);
                                ('step 1');
                                if (result.tie) event.goto(0);
                                else if (result.bool) {
                                    target.addMark('ja_tuitui', 1);
                                    var num = target.storage.ja_tuitui;
                                    target.damage(num);
                                    target.storage.ja_tuitui = 0;
                                    target.unmarkSkill('ja_tuitui');
                                } else player.chooseToDiscard('he', true);
                            },
                            ai: {
                                damage: true,
                                order: 8,
                                result: {
                                    player(player, target) {
                                        if ((target.hp = 1)) return 10;
                                        return 1;
                                    },
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                            },
                            threaten: 1.3,
                        },
                        ja_dumou: {
                            init(player) {
                                player.addMark('ja_lucky', 7);
                                player.markSkill('ja_lucky');
                            },
                            onremove(player, skill) {
                                player.storage.ja_lucky -= 7;
                                player.markSkill('ja_lucky');
                            },
                            mod: {
                                targetEnabled(card, player, target, now) {
                                    if (card.name == 'sha' && get.color(card) == 'black') return false;
                                },
                                cardEnabled(card) {
                                    if (card.name == 'sha' && get.color(card) == 'red') return false;
                                },
                            },
                        },
                        //当你使用卡牌对其他角色造成或受到其他角色使用卡牌造成的伤害后,你可以依次对伤害来源和被伤害者造成一点伤害.<br>被动:你的幸运值+3
                        ja_yingyong: {
                            init(player) {
                                player.addMark('ja_lucky', 3);
                                player.markSkill('ja_lucky');
                            },
                            onremove(player, skill) {
                                player.storage.ja_lucky -= 3;
                                player.markSkill('ja_lucky');
                            },
                            audio: 'ext:MA英雄战姬/audio:2',
                            trigger: {
                                player: 'damageEnd',
                                source: 'damageSource',
                            },
                            filter(event, player) {
                                return event.source && event.player && event.source != event.player && event.card;
                            },
                            check(event, player) {
                                var target = event.player == player ? event.source : event.player;
                                if (player.hp == 1) return false;
                                return get.attitude(player, target) <= 0;
                            },
                            logTarget(event, player) {
                                if (event.player == player) return event.source;
                                return event.player;
                            },
                            content() {
                                trigger.source.damage(player);
                                trigger.player.damage(player);
                            },
                        },
                        ja_yongqi: {
                            init(player) {
                                player.addMark('ja_lucky', 3);
                                player.markSkill('ja_lucky');
                            },
                            onremove(player, skill) {
                                player.storage.ja_lucky -= 3;
                                player.markSkill('ja_lucky');
                            },
                            mod: {
                                selectTarget(card, player, range) {
                                    if (!player.storage.ja_yongqi) return;
                                    if (Array.isArray(range) && range[1] == -1) return;
                                    if (card.name == 'sha') range[1] += player.storage.ja_yongqi;
                                },
                                globalFrom(from, to, distance) {
                                    if (from.storage.ja_yongqi) {
                                        var num = distance - from.storage.ja_yongqi.length;
                                        return num;
                                    }
                                },
                            },
                            audio: 'ext:MA英雄战姬/audio:2',
                            marktext: '勇',
                            intro: {
                                content: 'mark',
                                name: '勇气',
                            },
                            trigger: {
                                source: 'damageSource',
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                player.addMark('ja_yongqi', 1);
                            },
                        },
                        ja_duren: {
                            trigger: {
                                source: 'damageEnd',
                            },
                            audio: 'ext:MA英雄战姬/audio:2',
                            check(event, player) {
                                if (player.hp == 1) return false;
                            },
                            filter(event, player) {
                                return event.player.isAlive() && event.card && event.card.name == 'sha' && get.color(card) == 'black';
                            },
                            content() {
                                trigger.player.addSkill('ja_zhongdu');
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        ja_zhongdu: {
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            mark: true,
                            markimage: 'extension/MA英雄战姬/ja_zhongdu.png',
                            charlotte: true,
                            nopop: true,
                            temp: true,
                            intro: {
                                content: '锁定技,回合开始时,你进行判定,若结果不为♥️️,你受到1点毒属性伤害,若结果不为♠️️,你失去此技能',
                            },
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    var suit = card.suit;
                                    if (suit == 'spade') return -1;
                                    if (suit == 'heart') return 1;
                                    return 0;
                                });
                                ('step 1');
                                if (result.suit != 'heart') {
                                    player.damage('poison');
                                }
                                if (result.suit != 'spade') {
                                    player.removeSkill('ja_zhongdu');
                                }
                            },
                        },
                        ja_mingdao: {
                            audio: 'ext:MA英雄战姬/audio:2',
                            trigger: {
                                player: ['phaseZhunbeiBegin'],
                            },
                            forced: true,
                            filter(event, player) {
                                return !player.getEquip(1);
                            },
                            content() {
                                'step 0';
                                var card = get.cardPile(get.inpile('equip1').randomGet());
                                event.card = card;
                                ('step 1');
                                if (event.card) {
                                    player.equip(event.card);
                                }
                            },
                            mod: {
                                maxHandcardBase(player, num) {
                                    return (num += player.getAttackRange());
                                },
                            },
                        },
                        ja_chaojiqi: {
                            nobracket: true,
                            audio: 'ext:MA英雄战姬/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.getHistory('skipped').includes('phaseUse')) return false;
                                return (
                                    player.getHistory('useCard', function (evt) {
                                        if (evt.targets && evt.targets.length && evt.isPhaseUsing()) {
                                            var targets = evt.targets.slice(0);
                                            while (targets.includes(player)) targets.remove(player);
                                            return targets.length;
                                        }
                                        return false;
                                    }).length == 0
                                );
                            },
                            content() {
                                player.draw(Math.max(1, player.getDamagedHp()));
                            },
                        },
                        ja_guidao: {
                            audio: 'ext:MA英雄战姬/audio:2',
                            trigger: {
                                global: 'gainBegin',
                            },
                            usable: 1,
                            prompt(event, player) {
                                return '诡道:是否令' + get.translation(event.player) + '摸一张牌？';
                            },
                            filter(event, player) {
                                if (event.parent.parent.name === 'phaseDraw') return false;
                                return event.cards && event.cards.length;
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) > 0; //QQQ
                            },
                            content() {
                                trigger.player.draw();
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        ja_sishuwulu: {
                            init(player) {
                                player.addMark('ja_lucky', 1);
                                player.markSkill('ja_lucky');
                            },
                            onremove(player, skill) {
                                player.storage.ja_lucky -= 1;
                                player.markSkill('ja_lucky');
                            },
                            nobracket: true,
                            trigger: {
                                player: 'useCard',
                            },
                            audio: 'ext:MA英雄战姬/audio:2',
                            forced: true,
                            filter(event, player) {
                                return event.card.suit == 'spade';
                            },
                            content() {
                                player.draw();
                            },
                        },
                        ja_silie: {
                            markimage: 'extension/MA英雄战姬/ja_silie.png',
                            intro: {
                                name: '撕裂',
                                content: '当前撕裂点数:#. 你的回合开始时,你会减少相当于撕裂点数的体力值并移除所有的撕裂点数.',
                            },
                            audio: 'ext:MA英雄战姬/audio:2',
                            trigger: {
                                player: 'phaseBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countMark('ja_silie') > 0;
                            },
                            content() {
                                'step 0';
                                var num = player.countMark('ja_silie');
                                player.hp -= num;
                                player.update();
                                game.log(player, '减少了' + num + '点体力值.');
                                ('step 1');
                                player.storage.ja_silie = 0;
                                player.unmarkSkill('ja_silie');
                            },
                        },
                        ja_liezhua: {
                            audio: 'ext:MA英雄战姬/audio:2',
                            trigger: {
                                source: 'damageBegin2',
                            },
                            filter(event, player) {
                                return player != event.player;
                            },
                            check(event, player) {
                                if (get.damageEffect(event.player, player, player) < 0) return true;
                                var att = get.attitude(player, event.player);
                                if (att < 0 && event.player.hp > event.num) return true;
                                if (att > 0 && event.player.hp <= event.num) return true;
                                return false;
                            },
                            logTarget: 'player',
                            content() {
                                player.draw();
                                trigger.cancel();
                                trigger.player.addMark('ja_silie', trigger.num);
                            },
                        },
                        ja_jinhualun: {
                            nobracket: true,
                            trigger: {
                                source: 'dieAfter',
                                player: 'dying',
                            },
                            audio: 'ext:MA英雄战姬/audio:2',
                            forced: true,
                            filter(event, player, name) {
                                if (name == 'dieAfter') return true;
                                if (player.storage.ja_jinhualun != false) return true;
                                return false;
                            },
                            content() {
                                'step 0';
                                if (trigger.name == 'dying') {
                                    player.storage.ja_jinhualun = false;
                                }
                                ('step 1');
                                var list = get.gainableSkills();
                                list.remove(player.getSkills());
                                list = list.randomGets(4);
                                event.skillai = function () {
                                    return get.max(list, get.skillRank, 'item');
                                };
                                if (event.isMine()) {
                                    var dialog = ui.create.dialog('forcebutton');
                                    dialog.add('选择获得一项技能');
                                    var clickItem = function () {
                                        _status.event._result = this.link;
                                        dialog.close();
                                        game.resume();
                                    };
                                    for (var i = 0; i < list.length; i++) {
                                        if (lib.translate[list[i] + '_info']) {
                                            var translation = get.translation(list[i]);
                                            if (translation[0] == '新' && translation.length == 4) {
                                                translation = translation.slice(1, 4);
                                            } else {
                                                translation = translation.slice(0, 2);
                                            }
                                            var item = dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【' + translation + '】</div><div>' + lib.translate[list[i] + '_info'] + '</div></div>');
                                            item.firstChild.addEventListener('click', clickItem);
                                            item.firstChild.link = list[i];
                                        }
                                    }
                                    dialog.add(ui.create.div('.placeholder'));
                                    event.switchToAuto = function () {
                                        event._result = event.skillai();
                                        dialog.close();
                                        game.resume();
                                    };
                                    _status.imchoosing = true;
                                    game.pause();
                                } else {
                                    event._result = event.skillai();
                                }
                                ('step 2');
                                _status.imchoosing = false;
                                var link = result;
                                player.addSkill(link, true);
                                player.popup(link);
                                game.log(player, '获得了技能', '【' + get.translation(link) + '】');
                            },
                        },
                        ja_daweihe: {
                            trigger: {
                                player: 'damageBegin3',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                trigger.num += player.countMark('ja_daweihe');
                                game.log(player, '受到的伤害+' + player.countMark('ja_daweihe'));
                                ('step 1');
                                player.storage.ja_daweihe = 0;
                                player.unmarkSkill('ja_daweihe');
                                player.removeSkill('ja_daweihe');
                            },
                            markimage: 'extension/MA英雄战姬/ja_daweihe.png',
                            intro: {
                                content: '下次受到的伤害+#',
                            },
                        },
                        ja_weihe: {
                            audio: 'ext:MA英雄战姬/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player.canCompare(target);
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseToCompare(target);
                                ('step 1');
                                if (result.bool) {
                                    target.addTempSkill('ja_daweihe', 'gameOver');
                                    target.addMark('ja_daweihe', 1);
                                }
                            },
                            ai: {
                                order: 5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player, target);
                                    },
                                },
                            },
                        },
                        ja_beifenyiji: {
                            init(player) {
                                player.addMark('ja_lucky', 1);
                                player.markSkill('ja_lucky');
                            },
                            onremove(player, skill) {
                                player.storage.ja_lucky -= 1;
                                player.markSkill('ja_lucky');
                            },
                            audio: 'ext:MA英雄战姬/audio:2',
                            usable: 1,
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.num > 0 && event.source && event.source != player;
                            },
                            check(event, player) {
                                return get.attitude(player, event.source) < 0;
                            },
                            prompt(event, player) {
                                return '是否视为对' + get.translation(event.source) + '使用一张【杀】？';
                            },
                            content() {
                                player.useCard({ name: 'sha' }, trigger.source, false);
                            },
                            ai: {
                                expose: 0.2,
                            },
                            group: ['ja_beifenyiji_recover'],
                            subSkill: {
                                recover: {
                                    trigger: {
                                        source: 'damageAfter',
                                    },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return event.parent.parent.parent.name == 'ja_beifenyiji';
                                    },
                                    content() {
                                        player.recover();
                                    },
                                },
                            },
                        },
                        ja_qianbing: {
                            audio: 'ext:MA英雄战姬/audio:2',
                            group: 'ja_qianbing_1',
                            forced: true,
                            trigger: {
                                player: 'equipBegin',
                            },
                            filter(event, player) {
                                return (
                                    player.countCards('e', {
                                        subtype: 'equip1',
                                    }) && get.subtype(event.card) == 'equip1'
                                );
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
                            },
                            ai: {
                                effect: {
                                    player(card, player, target) {
                                        if (get.subtype(card) == 'equip1') return [1, 10];
                                    },
                                },
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'gameDrawAfter',
                                    },
                                    forced: true,
                                    content() {
                                        player.disableEquip(2);
                                        player.disableEquip(3);
                                        player.disableEquip(4);
                                        player.disableEquip(5);
                                        player.disableEquip(6);
                                    },
                                },
                            },
                        },
                        ja_bingzhan: {
                            audio: 'ext:MA英雄战姬/audio:2',
                            enable: ['chooseToUse', 'chooseToRespond'],
                            filterCard(card) {
                                return get.type(card) == 'equip';
                            },
                            position: 'he',
                            selectCard: 1,
                            viewAs: {
                                name: 'sha',
                                number: 1,
                            },
                            ai: {
                                respondSha: true,
                                basic: {
                                    useful: [5, 1],
                                    value: [5, 1],
                                },
                                order() {
                                    if (_status.event.player.hasSkillTag('presha', true, null, true)) return 10;
                                    return 3;
                                },
                                result: {
                                    target(player, target) {
                                        if (player.hasSkill('jiu') && !target.getEquip('baiyin')) {
                                            if (get.attitude(player, target) > 0) {
                                                return -6;
                                            } else {
                                                return -3;
                                            }
                                        }
                                        return -1.5;
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
                                    if (player.hasSkill('jueqing') || target.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
                                    return true;
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
                            },
                        },
                        ja_jili: {
                            markimage: 'extension/MA英雄战姬/ja_jili.png',
                            intro: {
                                name: '激励',
                                content: '当前激励点数:#. 你下一次造成伤害时会额外增加相当于激励点数的伤害值.',
                            },
                            audio: 'ext:MA英雄战姬/audio:2',
                            trigger: {
                                source: 'damageBegin1',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countMark('ja_jili') > 0;
                            },
                            content() {
                                'step 0';
                                trigger.num += player.countMark('ja_jili');
                                game.log(player, '造成的伤害' + player.countMark('ja_jili') + '.');
                                ('step 1');
                                player.storage.ja_jili = 0;
                                player.unmarkSkill('ja_jili');
                            },
                        },
                        ja_dili_2: {
                            trigger: {
                                player: ['damageBegin4', 'loseHpBegin', 'loseMaxHpBegin'],
                            },
                            forced: true,
                            popup: false,
                            content() {
                                trigger.cancel();
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) return 'zerotarget';
                                    },
                                },
                            },
                        },
                        ja_dili: {
                            marktext: '力',
                            intro: {
                                name: '底力',
                                content: '回避一次死亡.',
                            },
                            audio: 'ext:MA英雄战姬/audio:2',
                            trigger: {
                                player: 'dieBefore',
                            },
                            mark: true,
                            forced: true,
                            filter(event, player) {
                                return player.countMark('ja_dili') > 0;
                            },
                            content() {
                                'step 0';
                                trigger.cancel();
                                player.addTempSkill('ja_dili_2');
                                game.log(player, '回避了死亡.');
                                player.storage.ja_dili = 0;
                                player.unmarkSkill('ja_dili');
                                ('step 1');
                                if (player.maxHp <= 0) {
                                    player.maxHp = 1;
                                }
                                if (player.hp <= 0) {
                                    player.hp = 1;
                                }
                            },
                        },
                        ja_Critical: {
                            log: false,
                            marktext: '暴',
                            intro: {
                                name: '暴击率',
                                content: '当前基础暴击率:#%.',
                            },
                            popup: false,
                            forced: true,
                            _priority: 999,
                            trigger: {
                                global: 'gameDrawAfter',
                            },
                            content() {
                                player.addMark('ja_Critical', 1, false);
                                player.markSkill('ja_Critical');
                            },
                        },
                        ja_baoji: {
                            log: false,
                            trigger: {
                                source: 'damageBegin2',
                            },
                            forced: true,
                            filter(event, player) {
                                var num = player.storage.ja_lucky * 0.05 + player.storage.ja_Critical * 0.01 - event.player.storage.ja_lucky * 0.03;
                                if (num > 1) num = 1;
                                if (num < 0) num = 0;
                                return event.player != player && Math.random() <= num;
                            },
                            content() {
                                trigger.num *= 2;
                            },
                        },
                        ja_lucky: {
                            forced: true,
                            marktext: '运',
                            intro: {
                                name: '幸运值',
                                content: '当前幸运值:#.',
                            },
                            _priority: 999,
                            trigger: {
                                global: 'gameDrawAfter',
                            },
                            forced: true,
                            content() {
                                player.addMark('ja_lucky', 1, false);
                                player.markSkill('ja_lucky');
                            },
                        },
                        ja_ershanshanjiang: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseUseBefore',
                            },
                            audio: 'ext:MA英雄战姬/audio:2',
                            forced: true,
                            check(event, player) {
                                return player.hp >= 2 && player.countCards('h') <= player.hp + 2;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('ja_ershanshanjiang'), '是否跳过出牌阶段并激励一名角色？', function (card, player, target) {
                                        return true;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    trigger.cancel();
                                    result.targets[0].addMark('ja_jili', 1);
                                    result.targets[0].markSkill('ja_jili');
                                    result.targets[0].draw(2);
                                }
                            },
                        },
                        ja_houmou: {
                            trigger: {
                                player: 'phaseDiscardBegin',
                            },
                            audio: 'ext:MA英雄战姬/audio:2',
                            forced: true,
                            filter(event, player) {
                                return !player.getStat('damage');
                            },
                            content() {
                                player.addTempSkill('ja_houmou_1');
                            },
                        },
                        ja_houmou_1: {
                            mod: {
                                maxHandcard(player, num) {
                                    var num1 = game.countGroup();
                                    return num + num1;
                                },
                            },
                        },
                        ja_cisha: {
                            mark: true,
                            marktext: '金',
                            intro: {
                                content(storage, player, skill) {
                                    if (player.storage.nzry_longnu == true) return '当你使用的【杀】对一名角色造成伤害后,你可以令其【中毒】';
                                    return '锁定技,你增加50%的基础暴击率';
                                },
                            },
                            audio: 'ext:MA英雄战姬/audio:3',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            content() {
                                if (player.storage.ja_cisha == true) {
                                    player.storage.ja_cisha = false;
                                    player.removeSkill('ja_cisha_1');
                                    player.addSkill('ja_cisha_2');
                                } else {
                                    player.storage.ja_cisha = true;
                                    player.removeSkill('ja_cisha_2');
                                    player.addSkill('ja_cisha_1');
                                }
                            },
                            subSkill: {
                                1: {
                                    init(player, skill) {
                                        player.storage.ja_Critical += 50;
                                        player.markSkill('ja_Critical');
                                    },
                                    onremove(player, skill) {
                                        player.storage.ja_Critical -= 50;
                                        player.markSkill('ja_Critical');
                                    },
                                },
                                2: {
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    audio: 'ja_cisha',
                                    check(event, player) {
                                        if (player.hp == 1) return false;
                                    },
                                    filter(event, player) {
                                        return event.player.isAlive() && event.card && event.card.name == 'sha';
                                    },
                                    content() {
                                        trigger.player.addSkill('ja_zhongdu');
                                    },
                                    ai: {
                                        threaten: 1.5,
                                    },
                                },
                            },
                            ai: {
                                fireAttack: true,
                                halfneg: true,
                                threaten: 1.05,
                            },
                        },
                        ja_bwhj: {
                            init(player) {
                                player.addMark('ja_lucky', 8);
                                player.markSkill('ja_lucky');
                            },
                            onremove(player, skill) {
                                player.storage.ja_lucky -= 8;
                                player.markSkill('ja_lucky');
                            },
                            audio: 'ext:MA英雄战姬/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard(card) {
                                var num = 0;
                                for (var i = 0; i < ui.selected.cards.length; i++) {
                                    num += ui.selected.cards[i].number;
                                }
                                return card.number + num <= 13;
                            },
                            complexCard: true,
                            selectCard() {
                                var num = 0;
                                for (var i = 0; i < ui.selected.cards.length; i++) {
                                    num += ui.selected.cards[i].number;
                                }
                                if (num >= 9 && num <= 13) return ui.selected.cards.length;
                                return ui.selected.cards.length + 2;
                            },
                            discard: false,
                            lose: false,
                            delay: false,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            check(card) {
                                var num = 0;
                                for (var i = 0; i < ui.selected.cards.length; i++) {
                                    num += ui.selected.cards[i].number;
                                }
                                if (num + card.number == 13) return 9 - get.value(card);
                                if (ui.selected.cards.length == 0) {
                                    var cards = _status.event.player.getCards('h');
                                    for (var i = 0; i < cards.length; i++) {
                                        for (var j = i + 1; j < cards.length; j++) {
                                            if (cards[i].number + cards[j].number == 13) {
                                                if (cards[i] == card || cards[j] == card) return 8.5 - get.value(card);
                                            }
                                        }
                                    }
                                }
                                return 0;
                            },
                            content() {
                                target.gain(cards, player, 'giveAuto');
                                target.addTempSkill('ja_bwhj_bj', { player: 'phaseAfter' });
                            },
                            ai: {
                                order(skill, player) {
                                    if (
                                        game.hasPlayer(function (current) {
                                            return current.hp < current.maxHp && current != player && get.recoverEffect(current, player, player) > 0;
                                        })
                                    ) {
                                        return 10;
                                    }
                                    return 1;
                                },
                                result: {
                                    player(player, target) {
                                        if (get.attitude(player, target) < 0) return -1;
                                        var eff = get.recoverEffect(target, player, player);
                                        if (eff < 0) return 0;
                                        if (eff > 0) {
                                            if (target.hp == 1) return 3;
                                            return 2;
                                        }
                                        if (player.needsToDiscard()) return 1;
                                        return 0;
                                    },
                                },
                                threaten: 1.3,
                            },
                        },
                        ja_bwhj_bj: {
                            init(player) {
                                player.addMark('ja_Critical', 30);
                                player.markSkill('ja_Critical');
                            },
                            onremove(player, skill) {
                                player.storage.ja_Critical -= 30;
                                player.markSkill('ja_Critical');
                            },
                        },
                        ja_zhiyuguanghuan: {
                            nobracket: true,
                            audio: 'ext:MA英雄战姬/audio:2',
                            enable: 'phaseUse',
                            filterCard: true,
                            usable: 1,
                            check(card) {
                                return 9 - get.value(card);
                            },
                            filterTarget(card, player, target) {
                                if (target.hp >= target.maxHp) return false;
                                return true;
                            },
                            content() {
                                var num = player.storage.ja_lucky * 0.05 + player.storage.ja_Critical * 0.01;
                                if (num > 1) num = 1;
                                if (num < 0) num = 0;
                                if (Math.random() <= num) {
                                    target.recover(2);
                                } else {
                                    target.recover();
                                }
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target(player, target) {
                                        if (target.hp == 1) return 5;
                                        if (player == target && player.countCards('h') > player.hp) return 5;
                                        return 2;
                                    },
                                },
                                threaten: 2,
                            },
                        },
                        ja_kanchuan: {
                            init(player) {
                                player.addMark('ja_lucky', 1);
                                player.markSkill('ja_lucky');
                            },
                            onremove(player, skill) {
                                player.storage.ja_lucky -= 1;
                                player.markSkill('ja_lucky');
                            },
                            audio: 'ext:MA英雄战姬/audio:2',
                            usable: 1,
                            trigger: {
                                target: 'useCardToTarget',
                            },
                            filter(event, player) {
                                return event.player != player && event.targets.length == 1 && (event.card.name == 'juedou' || event.card.name == 'sha');
                            },
                            check(event, player) {
                                if (event.player == game.me || event.player.isOnline()) return get.attitude(player, event.player) < 0;
                                return get.effect(player, event.card, event.player, player) < 0;
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                player.line(trigger.player, 'green');
                                player.chooseToDuiben(trigger.player);
                                ('step 1');
                                if (result.bool) {
                                    trigger.targets.remove(player);
                                    trigger.parent.triggeredTargets2.remove(player);
                                    trigger.player.addTempSkill('ja_kanchuan_2', 'gameOver');
                                    trigger.player.addMark('ja_kanchuan_2', 1);
                                } else {
                                    trigger.directHit.addArray(
                                        game.filterPlayer(function (current) {
                                            return true;
                                        })
                                    );
                                }
                            },
                        },
                        ja_kanchuan_2: {
                            trigger: {
                                player: 'damageBegin3',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                trigger.num += player.countMark('ja_kanchuan_2');
                                game.log(player, '受到的伤害+' + player.countMark('ja_kanchuan_2'));
                                ('step 1');
                                player.storage.ja_kanchuan_2 = 0;
                                player.unmarkSkill('ja_kanchuan_2');
                                player.removeSkill('ja_kanchuan_2');
                            },
                            markimage: 'extension/MA英雄战姬/ja_daweihe.png',
                            intro: {
                                content: '下次受到的伤害+#',
                            },
                        },
                        ja_huolei: {
                            audio: 'ext:MA英雄战姬/audio:2',
                            trigger: {
                                player: 'useCard1',
                            },
                            filter(event, player) {
                                return event.card.name == 'sha';
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var list = lib.linked.slice(0);
                                list.remove('kami');
                                list.remove('ice');
                                list.remove(trigger.card.nature);
                                list.push('cancel2');
                                player
                                    .chooseControl(list)
                                    .set('prompt', get.prompt('ja_huolei'))
                                    .set('prompt2', '将' + get.translation(trigger.card) + '转换为以下属性之一');
                                ('step 1');
                                if (result.control != 'cancel2') {
                                    trigger.card.nature = result.control;
                                    player.popup(get.translation(result.control) + '杀', result.control);
                                    game.log(trigger.card, '被转为了', '#y' + get.translation(result.control), '属性');
                                }
                            },
                        },
                        ja_daniaozhizi: {
                            audio: 'ext:MA英雄战姬/audio:2',
                            group: 'ja_daniaozhizi_1',
                            marktext: '姿',
                            intro: {
                                content: '你还能执行#个额外回合',
                            },
                            nobracket: true,
                            trigger: {
                                player: 'phaseUseBefore',
                            },
                            filter(event, player) {
                                //QQQ
                                return player.storage.ja_daniaozhizi <= 0;
                            },
                            check(event, player) {
                                return player.hp >= 4 && player.countCards('h') >= 3;
                            },
                            content() {
                                trigger.cancel();
                                player.addMark('ja_daniaozhizi', 2);
                                player.markSkill('ja_daniaozhizi');
                                player.turnOver();
                                player.draw(2);
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseUseBefore',
                                    },
                                    audio: 'ja_daniaozhizi',
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.ja_daniaozhizi > 0;
                                    },
                                    content() {
                                        player.storage.ja_daniaozhizi--;
                                        player.phase('nodelay');
                                    },
                                },
                            },
                        },
                        ja_shuini_red: {
                            marktext: '溺',
                            mark: true,
                            intro: {
                                name: '水溺',
                                content: '状态:无法使用红色牌',
                            },
                            mod: {
                                cardEnabled(card) {
                                    if (get.color(card) == 'red') return false;
                                },
                            },
                        },
                        ja_shuini_black: {
                            marktext: '溺',
                            mark: true,
                            intro: {
                                name: '水溺',
                                content: '状态:无法使用黑色牌',
                            },
                            mod: {
                                cardEnabled(card) {
                                    if (get.color(card) == 'black') return false;
                                },
                            },
                        },
                        ja_shuini: {
                            enable: 'phaseUse',
                            usable: 1,
                            audio: 'ext:MA英雄战姬/audio:2',
                            filterTarget: true,
                            content() {
                                'step 0';
                                player.judge();
                                ('step 1');
                                if (result.color == 'black') {
                                    target.addTempSkill('ja_shuini_black', { player: 'phaseAfter' });
                                    player.addTempSkill('ja_shuini_black', { player: 'phaseAfter' });
                                } else if (result.color == 'red') {
                                    target.addTempSkill('ja_shuini_red', { player: 'phaseAfter' });
                                    player.addTempSkill('ja_shuini_red', { player: 'phaseAfter' });
                                }
                            },
                            ai: {
                                order: 0.8,
                                threaten: 1.5,
                                result: {
                                    target: -1,
                                    player: 0.5,
                                },
                            },
                        },
                        ja_longyanjian: {
                            nobracket: true,
                            audio: 'ext:MA英雄战姬/audio:2',
                            trigger: {
                                player: 'useCard1',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.name == 'sha';
                            },
                            content() { },
                            mod: {
                                selectTarget(card, player, range) {
                                    if (card.name == 'sha' && Array.isArray(range) && range[1] != -1) range[1] += 1;
                                },
                                attackFrom(from, to, distance) {
                                    return distance - 1;
                                },
                            },
                        },
                        ja_jinglingdejiahu_2: {
                            audio: 'ja_jinglingdejiahu',
                            marktext: '护',
                            mark: true,
                            intro: {
                                name: '精灵的加护',
                                content: '状态:你下一次即将受到的伤害-1',
                            },
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            content() {
                                if (trigger.num > 0) {
                                    trigger.num--;
                                }
                                player.removeSkill('ja_jinglingdejiahu_2');
                            },
                        },
                        ja_jinglingdejiahu: {
                            init(player) {
                                player.addMark('ja_lucky', 1);
                                player.markSkill('ja_lucky');
                            },
                            onremove(player, skill) {
                                player.storage.ja_lucky -= 1;
                                player.markSkill('ja_lucky');
                            },
                            audio: 'ext:MA英雄战姬/audio:2',
                            nobracket: true,
                            trigger: {
                                player: ['phaseZhunbeiBegin'],
                            },
                            filter(event, player) {
                                return player.countCards('he');
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('ja_jinglingdejiahu'), '对一名角色进行保护', function (card, player, target) {
                                        return !target.hasSkill('ja_jinglingdejiahu_2');
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.chooseToDiscard('he');
                                    result.targets[0].addTempSkill('ja_jinglingdejiahu_2', { player: 'phaseBegin' });
                                }
                            },
                            ai: {
                                result: {
                                    target(player, target) {
                                        if (target.hp == 1) return 5;
                                        if (player == target && player.countCards('h') > player.hp) return 5;
                                        return 0;
                                    },
                                },
                                threaten: 1.5,
                            },
                        },
                        ja_alongdaite: {
                            nobracket: true,
                            markimage: 'extension/MA英雄战姬/ja_jili.png',
                            intro: {
                                content: '下一次使用【杀】造成伤害时令伤害值+#',
                            },
                            group: 'ja_alongdaite_1',
                            audio: 'ext:MA英雄战姬/audio:2',
                            trigger: {
                                player: ['damageEnd'],
                            },
                            forced: true,
                            content() {
                                player.addMark('ja_alongdaite', trigger.num);
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    forced: true,
                                    audioname: ['ja_alongdaite'],
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha' && player.countMark('ja_alongdaite') > 0;
                                    },
                                    content() {
                                        trigger.num += player.countMark('ja_alongdaite');
                                        player.storage.ja_alongdaite = 0;
                                        player.unmarkSkill('ja_alongdaite');
                                    },
                                },
                            },
                        },
                        ja_yijingqianbenying: {
                            nobracket: true,
                            trigger: {
                                player: 'useCardAfter',
                            },
                            audio: 'ext:MA英雄战姬/audio:3',
                            forced: true,
                            filter(event, player) {
                                if (event.parent.name == 'ja_yijingqianbenying') return false;
                                if (!event.targets || !event.card || event.card.name != 'sha') return false;
                                var card = game.createCard(event.card.name, event.card.suit, event.card.number);
                                for (var i = 0; i < event.targets.length; i++) {
                                    if (!event.targets[i].isAlive()) return false;
                                    if (!player.canUse({ name: event.card.name }, event.targets[i], false, false)) {
                                        return false;
                                    }
                                }
                                return event.card.isCard;
                            },
                            content() {
                                var card = game.createCard(trigger.card.name, trigger.card.suit, trigger.card.number);
                                player.useCard(card, trigger.targets);
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        ja_feikongzhan: {
                            nobracket: true,
                            init(player) {
                                player.addMark('ja_lucky', 2);
                                player.markSkill('ja_lucky');
                            },
                            onremove(player, skill) {
                                player.storage.ja_lucky -= 2;
                                player.markSkill('ja_lucky');
                            },
                            mod: {
                                attackFrom(from, to, distance) {
                                    return distance - 1;
                                },
                            },
                        },
                        ja_juanxi: {
                            audio: 'ext:MA英雄战姬/audio:2',
                            trigger: {
                                player: 'useCardAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                if (!event.targets || !event.card) return false;
                                var type = get.type(event.card);
                                if (type != 'equip') return false;
                                var card = game.createCard(event.card.name, event.card.suit, event.card.number);
                                for (var i = 0; i < event.targets.length; i++) {
                                    if (!event.targets[i].isAlive()) return false;
                                    if (!player.canUse({ name: event.card.name }, event.targets[i], false, false)) {
                                        return false;
                                    }
                                }
                                return event.getParent(2).name != 'ja_juanxi';
                            },
                            content() {
                                var equip = get.cardPile(function (card) {
                                    return get.type(card) == 'equip' && player.hasUseTarget(card);
                                });
                                player.chooseUseTarget(equip, 'nothrow', 'nopopup', true);
                            },
                        },
                        ja_yuanxiong: {
                            audio: 'ext:MA英雄战姬/audio:2',
                            trigger: {
                                global: 'roundStart',
                            },
                            forced: true,
                            content() {
                                for (var i of game.players) {
                                    i.addMark('ja_Critical', 10);
                                    i.markSkill('ja_Critical');
                                } //QQQ
                            },
                        },
                        ja_youqi: {
                            init(player) {
                                player.addMark('ja_lucky', 2);
                                player.markSkill('ja_lucky');
                            },
                            onremove(player, skill) {
                                player.storage.ja_lucky -= 2;
                                player.markSkill('ja_lucky');
                            },
                            audio: 'ext:MA英雄战姬/audio:5',
                            trigger: {
                                player: ['phaseBeginStart', 'phaseAfter'],
                            },
                            forced: true,
                            content() { },
                            mod: {
                                globalFrom(from, to, distance) {
                                    if (_status.currentPhase == from) {
                                        return distance - 1;
                                    }
                                },
                                globalTo(from, to, distance) {
                                    if (_status.currentPhase != to) {
                                        return distance + 1;
                                    }
                                },
                            },
                        },
                        ja_cangping: {
                            audio: 'ext:MA英雄战姬/audio:2',
                            group: 'ja_cangping_1',
                            forced: true,
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                return (
                                    event.card &&
                                    event.card.name == 'sha' &&
                                    game.hasPlayer(function (current) {
                                        return current != player && get.distance(current, player) <= 1;
                                    })
                                );
                            },
                            content() {
                                trigger.directHit.addArray(
                                    game.filterPlayer(function (current) {
                                        return current != player && get.distance(current, player) <= 1;
                                    })
                                );
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        target: 'shaBefore',
                                    },
                                    forced: true,
                                    audio: 'ja_cangping',
                                    filter(event, player) {
                                        return event.card.name == 'sha' && get.distance(event.player, player) > 1;
                                    },
                                    content() {
                                        trigger.cancel();
                                    },
                                },
                            },
                        },
                        ja_kuangwu: {
                            init(player) {
                                player.addMark('ja_lucky', 1);
                                player.markSkill('ja_lucky');
                            },
                            onremove(player, skill) {
                                player.storage.ja_lucky -= 1;
                                player.markSkill('ja_lucky');
                            },
                            audio: 'ext:MA英雄战姬/audio:2',
                            mod: {
                                attackFrom(from, to, distance) {
                                    return distance - 1;
                                },
                            },
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.name == 'sha' && !event.parent.directHit.includes(event.target);
                            },
                            logTarget: 'target',
                            content() {
                                var id = trigger.target.playerid;
                                var map = trigger.parent.customArgs;
                                if (!map[id]) map[id] = {};
                                if (typeof map[id].shanRequired == 'number') {
                                    map[id].shanRequired++;
                                } else {
                                    map[id].shanRequired = 2;
                                }
                            },
                            ai: {
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    if ((arg && arg.card.name != 'sha') || arg.target.countCards('h', 'shan') < 1) return false;
                                },
                            },
                        },
                        ja_luanci: {
                            audio: 'ext:MA英雄战姬/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('he') > 0 && event.num > 0 && event.source && event.source != player;
                            },
                            content() {
                                'step 0';
                                var next = player.chooseCardTarget({
                                    position: 'he',
                                    filterTarget(card, player, target) {
                                        return lib.filter.targetEnabled({ name: 'sha' }, player, target);
                                    },
                                    filterCard: true,
                                    ai1(card) {
                                        return get.unuseful(card) + 9;
                                    },
                                    ai2(target) {
                                        return get.effect(target, { name: 'sha' }, player);
                                    },
                                    prompt: get.prompt('ja_luanci'),
                                });
                                ('step 1');
                                if (result.targets?.length) {
                                    player.useCard({ name: 'sha' }, result.cards, result.targets, false);
                                }
                            },
                            ai: {
                                expose: 0.2,
                            },
                        },
                        ja_bianjinjing: {
                            nobracket: true,
                            audio: 'ext:MA英雄战姬/audio:2',
                            enable: 'phaseUse',
                            filterCard: true,
                            position: 'he',
                            selectCard: 2,
                            usable: 1,
                            check(card) {
                                return 9 - get.value(card);
                            },
                            filterTarget(card, player, target) {
                                if (target.hp >= target.maxHp) return false;
                                return true;
                            },
                            content() {
                                target.recover();
                                target.link(false);
                                target.turnOver(false);
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target(player, target) {
                                        if (target.hp == 1) return 5;
                                        if (player == target && player.countCards('h') > player.hp) return 5;
                                        return 2;
                                    },
                                },
                                threaten: 2,
                            },
                        },
                        ja_ciai: {
                            init(player) {
                                player.addMark('ja_lucky', 1);
                                player.markSkill('ja_lucky');
                            },
                            onremove(player, skill) {
                                player.storage.ja_lucky -= 1;
                                player.markSkill('ja_lucky');
                            },
                            audio: 'ext:MA英雄战姬/audio:2',
                            trigger: {
                                global: 'recoverAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.player.isPhaseUsing()) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                var target = player;
                                trigger.player
                                    .chooseControl('摸牌', '失去体力', function (event, player) {
                                        if (get.attitude(player, target) > 0) return '摸牌';
                                        if (get.attitude(player, target) < 0) return '失去体力';
                                        return '摸牌';
                                    })
                                    .set('prompt', '慈爱:令' + get.translation(player) + '摸一张牌或失去一点体力');
                                ('step 1');
                                if (result.control == '摸牌') {
                                    player.draw();
                                } else {
                                    player.loseHp();
                                }
                            },
                            ai: {
                                expose: 0.1,
                            },
                        },
                        ja_chuanxindan: {
                            nobracket: true,
                            mod: {
                                cardEnabled(card) {
                                    if (card.name == 'sha') return false;
                                },
                            },
                            init(player) {
                                player.addMark('ja_Critical', 40);
                                player.markSkill('ja_Critical');
                                player.addMark('ja_lucky', 3);
                                player.markSkill('ja_lucky');
                            },
                            onremove(player, skill) {
                                player.storage.ja_Critical -= 40;
                                player.markSkill('ja_Critical');
                                player.storage.ja_lucky -= 3;
                                player.markSkill('ja_lucky');
                            },
                        },
                        ja_heihuzidabaofa: {
                            nobracket: true,
                            audio: 'ext:MA英雄战姬/audio:2',
                            enable: ['chooseToRespond', 'chooseToUse'],
                            filterCard: {
                                name: 'sha',
                            },
                            viewAs: {
                                name: 'juedou',
                            },
                            usable: 1,
                            prompt: '将一张杀当决斗使用或打出',
                            check() {
                                return 1;
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('h', 'sha')) return false;
                            },
                            ai: {
                                order: 3,
                                skillTagFilter(player) {
                                    if (!player.countCards('h', 'sha')) return false;
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
                        },
                        ja_jinjiaojian: {
                            init(player) {
                                player.addMark('ja_lucky', 5);
                                player.markSkill('ja_lucky');
                            },
                            onremove(player, skill) {
                                player.storage.ja_lucky -= 5;
                                player.markSkill('ja_lucky');
                            },
                            nobracket: true,
                            audio: 'ext:MA英雄战姬/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target && target.countCards('hej') > 0;
                            },
                            content() {
                                player.discardPlayerCard(target, 'hej', true);
                            },
                            ai: {
                                order: 8,
                                threaten: 1.5,
                                result: {
                                    target: -1,
                                    player: 0.5,
                                },
                            },
                        },
                        ja_fengshentai: {
                            audio: 'ext:MA英雄战姬/audio:2',
                            nobracket: true,
                            trigger: {
                                global: 'damageEnd',
                            },
                            prompt(event, player) {
                                return '封神台:是否令' + get.translation(event.player) + '摸一张牌？';
                            },
                            filter(event, player) {
                                if (event.player.hasSkill('ja_fengshentai_2')) return false;
                                return event.num > 0 && event.player.isAlive();
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) >= 0;
                            },
                            content() {
                                'step 0';
                                trigger.player.draw();
                                trigger.player.addTempSkill('ja_fengshentai_2');
                                ('step 1');
                                var card = result.cards[0];
                                var target = trigger.player;
                                if (
                                    card &&
                                    game.hasPlayer(function (current) {
                                        return target.canUse(card, current);
                                    }) &&
                                    get.owner(card) == target
                                ) {
                                    target.chooseToUse({
                                        prompt: '是否使用' + get.translation(card) + '或弃置一张牌？',
                                        filterCard(cardx, player, target) {
                                            return cardx == _status.event.cardx;
                                        },
                                        cardx: card,
                                    });
                                }
                                ('step 2');
                                if (!result.bool) trigger.player.chooseToDiscard(true, 'he');
                            },
                        },
                        ja_fengshentai_2: {},
                        re_chaojiqi: {
                            nobracket: true,
                            audio: 'ja_chaojiqi',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.getEquip(1);
                            },
                            content() {
                                'step 0';
                                player.chooseCardTarget({
                                    filterCard(card) {
                                        return get.subtype(card) == 'equip1';
                                    },
                                    position: 'e',
                                    filterTarget(card, player, target) {
                                        return target.isEmpty(get.subtype(card)) && target != player;
                                    },
                                    ai1(card) {
                                        return 6 - get.value(card);
                                    },
                                    ai2(target) {
                                        return get.attitude(_status.event.player, target) - 3;
                                    },
                                    prompt: get.prompt2('re_chaojiqi'),
                                });
                                ('step 1');
                                if (result.targets?.length) {
                                    var thisTarget = result.targets[0];
                                    var thisCard = result.cards[0];
                                    var num = player.getAttackRange();
                                    thisTarget.equip(thisCard);
                                    event.target = thisTarget;
                                    if (thisTarget != player) {
                                        player.draw(num);
                                    }
                                }
                            },
                        },
                        ja_baishi: {
                            init(player) {
                                player.addMark('ja_lucky', 1);
                                player.markSkill('ja_lucky');
                            },
                            onremove(player, skill) {
                                player.storage.ja_lucky -= 1;
                                player.markSkill('ja_lucky');
                            },
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - 1;
                                },
                            },
                            audio: 'ext:MA英雄战姬/audio:2',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            check(event, player) {
                                return (
                                    game.countPlayer(function (current) {
                                        return get.distance(player, current) <= 1 && player != current;
                                    }) >= Math.min(3, player.hp)
                                );
                            },
                            prompt(event, player) {
                                return (
                                    '白狮:是否摸' +
                                    game.countPlayer(function (current) {
                                        return get.distance(player, current) <= 1 && player != current;
                                    }) +
                                    '张牌并弃置' +
                                    Math.min(3, player.hp) +
                                    '张牌？'
                                );
                            },
                            content() {
                                var num = game.countPlayer(function (current) {
                                    return get.distance(player, current) <= 1 && player != current;
                                });
                                player.draw(num);
                                player.chooseToDiscard(Math.min(3, player.hp), true, 'he');
                            },
                        },
                        ja_tiandiceliang: {
                            init(player) {
                                player.addMark('ja_lucky', 2);
                                player.markSkill('ja_lucky');
                            },
                            onremove(player, skill) {
                                player.storage.ja_lucky -= 2;
                                player.markSkill('ja_lucky');
                            },
                            audio: 'ext:MA英雄战姬/audio:2',
                            nobracket: true,
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.draw(Math.max(game.countGroup(), player.hp));
                                player.chooseToDiscard(Math.min(game.countGroup(), player.hp), true, 'he');
                                ('step 1');
                                player
                                    .chooseTarget(get.prompt('ja_tiandiceliang'), '令一名手牌数少于你的其他角色摸一张牌', function (card, player, target) {
                                        return target != player && target.countCards('h') < player.countCards('h');
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(player, target);
                                    });
                                ('step 2');
                                if (result.targets?.length) {
                                    result.targets[0].draw();
                                }
                            },
                        },
                        ja_jinyindao: {
                            init(player) {
                                player.addMark('ja_lucky', 3);
                                player.markSkill('ja_lucky');
                            },
                            onremove(player, skill) {
                                player.storage.ja_lucky -= 3;
                                player.markSkill('ja_lucky');
                            },
                            nobracket: true,
                            audio: 'ext:MA英雄战姬/audio:2',
                            trigger: {
                                player: 'die',
                            },
                            derivation: ['ja_weiliandebaozang'],
                            forced: true,
                            forceDie: true,
                            content() {
                                var card1 = game.createCard('ja_weiliandebaozang', 'heart', 1, null);
                                var card2 = game.createCard('ja_weiliandebaozang', 'spade', 13, null);
                                var a = [];
                                if (ui.cardPile.childElementCount < 3) {
                                    player.getCards(4);
                                }
                                for (var i = 0; i < ui.cardPile.childElementCount; i++) {
                                    a.push(i);
                                }
                                ui.cardPile.insertBefore(card1, ui.cardPile.childNodes[a.randomGet()]);
                                a.push(a.length);
                                ui.cardPile.insertBefore(card2, ui.cardPile.childNodes[a.randomGet()]);
                                game.log('牌堆中添加了', card1, card2);
                                game.updateRoundNumber();
                            },
                            ai: {
                                expose: 2,
                            },
                        },
                        ja_zajitou: {
                            audio: 'ext:MA英雄战姬/audio:2',
                            enable: 'phaseUse',
                            filterCard: true,
                            position: 'he',
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('h') <= player.countCards('h');
                            },
                            check(card) {
                                var num = get.value(card);
                                if (get.color(card) == 'black' || get.color(card) == 'red') {
                                    if (num >= 6) return 0;
                                    return 20 - num;
                                } else {
                                    if (_status.event.player.needsToDiscard()) {
                                        return 7 - num;
                                    }
                                }
                                return 0;
                            },
                            discard: false,
                            lose: false,
                            delay: false,
                            content() {
                                target.gain(cards, player, 'giveAuto');
                                var card = { name: 'sha' };
                                if (player.canUse(card, target, false)) player.useCard(card, target, false).card.ja_zajitou = true;
                            },
                            ai: {
                                order: 8,
                                threaten: 2,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player, target);
                                    },
                                },
                                unequip: true,
                                skillTagFilter(player, tag, arg) {
                                    if (!arg || !arg.card || arg.card.ja_zajitou != true) return false;
                                },
                            },
                        },
                        ja_zhanshoulun_2: {
                            mod: {
                                cardEnabled2(card) {
                                    if (card.name == 'tao' || card.name == 'jiu') return false;
                                },
                            },
                        },
                        ja_zhanshoulun: {
                            nobracket: true,
                            audio: 'ext:MA英雄战姬/audio:2',
                            trigger: {
                                source: 'dying',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.parent.name == 'damage';
                            },
                            content() {
                                player.draw();
                                trigger.player.addTempSkill('ja_zhanshoulun_2');
                            },
                        },
                        ja_santilun: {
                            nobracket: true,
                            audio: 'ext:MA英雄战姬/audio:2',
                            group: 'ja_santilun_1',
                            trigger: {
                                source: 'damageBegin1',
                            },
                            filter(event, player) {
                                return event.card && (event.card.name == 'sha' || event.card.name == 'juedou') && event.notLink();
                            },
                            forced: true,
                            content() {
                                trigger.num++;
                                player.loseHp();
                            },
                            ai: {
                                damageBonus: true,
                            },
                            subSkill: {
                                1: {
                                    audio: 'ja_santilun',
                                    trigger: {
                                        source: 'dieAfter',
                                    },
                                    forced: true,
                                    content() {
                                        player.recover();
                                    },
                                },
                            },
                        },
                        ja_bingshangxianshi: {
                            audio: 'ext:MA英雄战姬/audio:2',
                            mod: {
                                cardname(card, player) {
                                    if (card.name == 'sha' && get.color(card) == 'black') return 'sha';
                                },
                                cardnature(card, player) {
                                    if (card.name == 'sha' && get.color(card) == 'black') return 'ice';
                                },
                                cardUsable(card, player) {
                                    if (card.name == 'sha' && card.nature == 'ice') return Infinity;
                                },
                            },
                            nobracket: true,
                            trigger: {
                                global: 'shaBefore',
                            },
                            forced: true,
                            _priority: 5,
                            filter(event, player) {
                                if (player == event.player) return false;
                                if (!player.countCards('h', 'sha', 'black')) return false;
                                return get.distance(event.player, player, 'attack') <= 1;
                            },
                            content() {
                                'step 0';
                                var effect = 0;
                                for (var i = 0; i < trigger.targets.length; i++) {
                                    effect += get.effect(trigger.targets[i], trigger.card, trigger.player, player);
                                }
                                var str = '弃置一张冰杀令' + get.translation(trigger.player);
                                if (trigger.targets && trigger.targets.length) {
                                    str += '对' + get.translation(trigger.targets);
                                }
                                str += '的' + get.translation(trigger.card) + '失效';
                                var next = player.chooseToDiscard('h', { name: 'sha', color: 'black' }, get.prompt('ja_bingshangxianshi'));
                                next.prompt2 = str;
                                next.ai = function (card) {
                                    if (effect < 0) {
                                        return 9 - get.value(card);
                                    }
                                    return -1;
                                };
                                next.autodelay = true;
                                ('step 1');
                                if (result.bool) {
                                    trigger.cancel();
                                }
                            },
                            ai: {
                                threaten: 1.2,
                                expose: 0.2,
                            },
                        },
                        ja_baiguiyexing: {
                            init(player) {
                                player.addMark('ja_lucky', 1);
                                player.markSkill('ja_lucky');
                            },
                            onremove(player, skill) {
                                player.storage.ja_lucky -= 1;
                                player.markSkill('ja_lucky');
                            },
                            nobracket: true,
                            group: ['ja_baiguiyexing_1'],
                            audio: 'ext:MA英雄战姬/audio:4',
                            trigger: {
                                player: 'useCard',
                                target: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                if (event.name != 'useCard' && event.player == event.target) return false;
                                return event.card.suit == 'spade';
                            },
                            forced: true,
                            content() {
                                player.draw();
                            },
                            subSkill: {
                                1: {
                                    audio: 'ja_baiguiyexing',
                                    trigger: {
                                        player: 'useCard',
                                        target: 'useCardToTargeted',
                                    },
                                    filter(event, player) {
                                        if (event.name != 'useCard' && event.player == event.target) return false;
                                        return event.card.suit == 'club';
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget(get.prompt('ja_baiguiyexing'), '弃置一名角色区域内的一张牌', function (card, player, target) {
                                                return true;
                                            })
                                            .set('ai', function (target) {
                                                return get.attitude(target, player);
                                            });
                                        ('step 1');
                                        if (result.targets?.length) {
                                            player.discardPlayerCard('hej', result.targets[0], true);
                                        }
                                    },
                                },
                            },
                        },
                        ja_shanyuzhanbuderen: {
                            nobracket: true,
                            init(player) {
                                player.addMark('ja_lucky', 4);
                                player.markSkill('ja_lucky');
                            },
                            onremove(player, skill) {
                                player.storage.ja_lucky -= 4;
                                player.markSkill('ja_lucky');
                            },
                        },
                        ja_jialouluotianxiang: {
                            nobracket: true,
                            trigger: {
                                player: ['useCardEnd'],
                            },
                            forced: true,
                            filter(event, player) {
                                return player.getHistory('useCard').length == player.hp;
                            },
                            audio: 'ext:MA英雄战姬/audio:2',
                            content() {
                                'step 0';
                                player.draw(Math.min(player.hp, 20));
                                ('step 1');
                                if (get.type(trigger.card) == 'trick' || get.type(trigger.card) == 'delay') {
                                    event.goto(2);
                                } else if (get.type(trigger.card) == 'basic') {
                                    event.goto(4);
                                } else if (get.type(trigger.card) == 'equip') {
                                    event.goto(6);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                player
                                    .chooseTarget(get.prompt('ja_jialouluotianxiang'), '对一名手牌数不小于你的其他角色造成一点雷属性伤害', function (card, player, target) {
                                        return target != player && target.countCards('h') >= player.countCards('h');
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(target, player);
                                    });
                                ('step 3');
                                if (result.targets?.length) {
                                    result.targets[0].damage('thunder');
                                    event.finish();
                                } else {
                                    event.finish();
                                }
                                ('step 4');
                                player
                                    .chooseTarget(get.prompt('ja_jialouluotianxiang'), '令一名手牌数小于你的其他角色将手牌数摸至与你相同(至多摸至5)', function (card, player, target) {
                                        return target != player && target.countCards('h') < player.countCards('h');
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(player, target);
                                    });
                                ('step 5');
                                if (result.targets?.length) {
                                    result.targets[0].drawTo(Math.min(5, player.countCards('h')));
                                    event.finish();
                                } else {
                                    event.finish();
                                }
                                ('step 6');
                                if (player.hp > player.countCards('e')) {
                                    var num1 = player.hp - player.countCards('e');
                                    player.draw(num1);
                                    player.loseHp(num1);
                                    event.finish();
                                }
                                if (player.hp < player.countCards('e')) {
                                    var num2 = player.countCards('e') - player.hp;
                                    player.chooseToDiscard(num2, true, 'h');
                                    player.recover(num2);
                                    event.finish();
                                } else {
                                    event.finish();
                                }
                            },
                        },
                        ja_jiaokou_1: {},
                        ja_jiaokou: {
                            audio: 'ext:MA英雄战姬/audio:3',
                            enable: 'phaseUse',
                            filter(event, player) {
                                var num;
                                var mode = get.mode();
                                if (mode == 'identity') {
                                    if (_status.mode == 'purple') num = player.getEnemies().length;
                                    else num = get.population('fan');
                                } else if (mode == 'versus') {
                                    num = player.getEnemies().length;
                                } else {
                                    num = 1;
                                }
                                if ((player.getStat().skill.ja_jiaokou || 0) >= num) return false;
                                return true;
                            },
                            filterTarget(card, player, target) {
                                return target.countCards('he') > 0 && target != player && !target.hasSkill('ja_jiaokou_1');
                            },
                            content() {
                                'step 0';
                                target.addTempSkill('ja_jiaokou_1');
                                target.chooseCard('he', true, '剿寇:将一张牌交给' + get.translation(player));
                                ('step 1');
                                if (result.cards?.length) {
                                    player.gain(result.cards, target);
                                    target.$giveAuto(result.cards, player, true);
                                    if (result.cards[0].name != 'sha') {
                                        event.goto(2);
                                    } else {
                                        event.finish();
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                player.chooseToUse(
                                    function (card) {
                                        if (card.name != 'sha') return false;
                                        return !get.info(card).multitarget;
                                    },
                                    get.prompt('ja_jiaokou', target),
                                    target
                                );
                                ('step 3');
                                if (result.bool) {
                                    player.getStat().card.sha--;
                                }
                            },
                            ai: {
                                order: 8.5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                            },
                            threaten: 1.5,
                        },
                        ja_shouyuantrue: {
                            audio: 'ja_shouyuan',
                            trigger: {
                                global: 'phaseJieshuBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.player == player) return false;
                                if (!event.player.isAlive()) return false;
                                if (!event.player.hasSkill('ja_shouyuan')) return false;
                                return game.hasPlayer(function (current) {
                                    return current == player && current.getHistory('lose').length;
                                });
                            },
                            content() {
                                player
                                    .chooseToUse(
                                        function (card, player, event) {
                                            if (card.name != 'sha') return false;
                                            return lib.filter.filterCard.apply(this, arguments);
                                        },
                                        '受冤:是否对' + get.translation(trigger.player) + '使用一张杀？'
                                    )
                                    .set('complexSelect', true)
                                    .set('filterTarget', function (card, player, target) {
                                        if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                                        return lib.filter.targetEnabled.apply(this, arguments);
                                    })
                                    .set('sourcex', trigger.player);
                            },
                        },
                        ja_shouyuan: {
                            global: 'ja_shouyuantrue',
                            audio: 'ext:MA英雄战姬/audio:2',
                        },
                        ja_yuanyue: {
                            audio: 'ext:MA英雄战姬/audio:2',
                            trigger: {
                                player: 'damageEnd',
                                source: 'damageSource',
                            },
                            filter(event, player) {
                                if (player.hasSkill('ja_yuanyueyue')) return false;
                                return event.num && event.source && event.player && event.player.isAlive() && event.source.isAlive() && event.source != event.player;
                            },
                            content() {
                                'step 0';
                                var target = player;
                                trigger.player
                                    .chooseControl('令其摸牌', '失去体力', function (event, player) {
                                        if (get.attitude(player, target) > 0 || player.hp <= 2) return '令其摸牌';
                                        if (get.attitude(player, target) < 0 && player.hp > 2) return '失去体力';
                                        return '摸牌';
                                    })
                                    .set('prompt', '圆月:令' + get.translation(player) + '摸两张牌或令自身失去一点体力');
                                ('step 1');
                                if (result.control == '令其摸牌') {
                                    player.draw(2);
                                } else {
                                    trigger.player.loseHp();
                                }
                                ('step 2');
                                if (trigger.player != player) {
                                    player.addTempSkill('ja_yuanyueyue');
                                }
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                            },
                        },
                        ja_yuanyueyue: {},
                        ja_qjpx: {
                            nobracket: true,
                            audio: 'ext:MA英雄战姬/audio:2',
                            mark: true,
                            zhuanhuanji: true,
                            marktext: '撃',
                            intro: {
                                content(storage, player, skill) {
                                    if (player.storage.ja_qjpx == true) return '你每回合内使用的第一张【杀】无距离限制且无视防具';
                                    return '你每回合内使用的第一张【杀】可以额外指定一个目标且不可被闪避';
                                },
                            },
                            mod: {
                                targetInRange(card, player) {
                                    if (card.name == 'sha' && player.storage.ja_qjpx == true && !player.hasSkill('qjpx')) return true;
                                },
                                selectTarget(card, player, range) {
                                    if (card.name == 'sha' && !player.hasSkill('qjpx') && Array.isArray(range) && range[1] != -1 && player.storage.ja_qjpx != true) range[1] += 1;
                                },
                            },
                            group: ['ja_qjpx_1', 'ja_qjpx_2'],
                            subSkill: {
                                1: {
                                    audio: 'ja_qjpx',
                                    trigger: {
                                        player: 'useCardToPlayered',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.card.name != 'sha') return false;
                                        return player.storage.ja_qjpx != true && !player.hasSkill('qjpx');
                                    },
                                    content() {
                                        trigger.directHit.addArray(
                                            game.filterPlayer(function (current) {
                                                return current != player;
                                            })
                                        );
                                        player.storage.ja_qjpx = true;
                                        player.addTempSkill('qjpx');
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'shaBegin',
                                    },
                                    audio: 'ja_qjpx',
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.ja_qjpx == true && !player.hasSkill('qjpx');
                                    },
                                    content() {
                                        player.storage.ja_qjpx = false;
                                        player.addTempSkill('qjpx');
                                    },
                                    ai: {
                                        unequip: true,
                                        skillTagFilter(player, tag, arg) {
                                            if (player.storage.ja_qjpx == true && arg && arg.name == 'sha') return true;
                                            return false;
                                        },
                                    },
                                },
                            },
                        },
                        qjpx: {},
                        ja_dubian: {
                            audio: 'ext:MA英雄战姬/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target && target.countCards('h');
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseToCompare(target);
                                ('step 1');
                                if (result.bool) {
                                    player.storage.ja_dubian_2 = target;
                                    player.addTempSkill('ja_dubian_2', { player: 'phaseBegin' });
                                    player.marks.ja_dubian_2 = player.markCharacter(target, {
                                        name: '独辩',
                                        content: '你与其相互之间不能成为使用牌的目标',
                                    });
                                    event.goto(2);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                target.chooseCard('he', true, '独辩:将一张牌交给' + get.translation(player));
                                ('step 3');
                                if (result.cards?.length) {
                                    player.gain(result.cards, target);
                                    target.$giveAuto(result.cards, player, true);
                                }
                            },
                            ai: {
                                order: 0.5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player, target);
                                    },
                                },
                            },
                        },
                        ja_dubian_2: {
                            mod: {
                                targetEnabled(card, player, target, now) {
                                    if (target.storage.ja_dubian_2 == player) return false;
                                },
                                playerEnabled(card, player, target) {
                                    if (player.storage.ja_dubian_2 == target) {
                                        return false;
                                    }
                                },
                            },
                        },
                        ja_huiyue: {
                            audio: 'ext:MA英雄战姬/audio:2',
                            trigger: {
                                player: 'gainEnd',
                            },
                            filter(event, player) {
                                if (!event.source || event.source == player || !event.source.isIn()) return false;
                                var evt = event.getl(event.source);
                                return evt && evt.cards2 && evt.cards2.length >= 1;
                            },
                            check(event, player) {
                                return get.attitude(player, event.source) < 0;
                            },
                            content() {
                                'step 0';
                                if (trigger.source.countCards('he') > 0) {
                                    event.goto(1);
                                } else {
                                    trigger.source.loseHp();
                                    event.finish();
                                }
                                ('step 1');
                                trigger.source
                                    .chooseControl('弃牌', '失去体力', function (event, player) {
                                        if (player.countCards('he') > 4 || player.hp <= 2) return '弃牌';
                                        if (player.countCards('h') < 2 || player.hp >= 4) return '失去体力';
                                        return '弃牌';
                                    })
                                    .set('prompt', '毁约:弃置一张牌或失去一点体力');
                                ('step 2');
                                if (result.control == '弃牌') {
                                    trigger.source.chooseToDiscard(true, 'he');
                                } else {
                                    trigger.source.loseHp();
                                }
                            },
                        },
                        ja_junzhulun: {
                            mod: {
                                maxHandcardBase(player, num) {
                                    return num + 2;
                                },
                            },
                            equipSkill: true,
                            forced: true,
                            audio: 'ext:MA英雄战姬/audio:2',
                            trigger: {
                                player: 'damageEnd',
                                source: 'damageSource',
                            },
                            filter: (event, player) => get.population('zhu'), //QQQ
                            content() {
                                'step 0';
                                if (trigger.source == player && trigger.player != player) {
                                    event.goto(1);
                                } else if (trigger.source != player && trigger.player == player) {
                                    event.goto(3);
                                } else {
                                    event.finish();
                                }
                                ('step 1');
                                player
                                    .chooseTarget(get.prompt('君主论'), '是否令主公摸一张牌？', function (card, player, target) {
                                        return target.identity == 'zhu';
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(player, target);
                                    });
                                ('step 2');
                                if (result.bool) {
                                    game.zhu.draw();
                                    event.finish();
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                player
                                    .chooseTarget(get.prompt('君主论'), '是否令主公弃置一张手牌？', function (card, player, target) {
                                        return target.identity == 'zhu' && target.countCards('h') > 0;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(target, player);
                                    });
                                ('step 4');
                                if (result.bool) {
                                    game.zhu.chooseToDiscard(true, 'h');
                                    event.finish();
                                } else {
                                    event.finish();
                                }
                            },
                        },
                        ja_yinjun: {
                            group: ['ja_yinjun_1'],
                            audio: 'ext:MA英雄战姬/audio:2',
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                var type = get.type(event.card, 'trick');
                                return type == 'equip';
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('ja_yinjun'), '是否令一名体力上限大于你当前体力值的其他角色获得此装备？', function (card, player, target) {
                                        return target != player && target.maxHp > player.hp;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    result.targets[0].gain(trigger.cards, player, 'give');
                                    trigger.cancel();
                                    player.draw(2);
                                }
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'gameDrawAfter',
                                        player: 'enterGame',
                                    },
                                    forced: true,
                                    content() {
                                        player.equip(game.createCard2('ja_junzhulun', 'spade', 13));
                                    },
                                },
                            },
                        },
                        ja_yintui: {
                            mod: {
                                targetEnabled(card, player, target, now) {
                                    if (target.countCards('j') > 0 && player != target) {
                                        if (get.tag(card, 'damage')) return false;
                                    }
                                },
                            },
                            audio: 'ext:MA英雄战姬/audio:2',
                            trigger: {
                                target: 'useCardToEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.type(event.card) == 'delay' && player.countCards('j') > 0;
                            },
                            content() { },
                        },
                        ja_lingren: {
                            init(player) {
                                player.addMark('ja_lucky', 3);
                                player.markSkill('ja_lucky');
                            },
                            onremove(player, skill) {
                                player.storage.ja_lucky -= 3;
                                player.markSkill('ja_lucky');
                            },
                            audio: 'ext:MA英雄战姬/audio:2',
                            shaRelated: true,
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            filter(event, player) {
                                if (event.card.name == 'sha' && player.hasSkill('ja_lingren_sha')) return false;
                                if (event.card.name == 'juedou' && player.hasSkill('ja_lingren_juedou')) return false;
                                return (event.card.name == 'sha' || event.card.name == 'juedou') && event.target.countCards('he') > 0;
                            },
                            logTarget: 'target',
                            content() {
                                'step 0';
                                if (trigger.target.countCards('h') > 0 && trigger.target.countCards('e') > 0) {
                                    event.goto(1);
                                } else if (trigger.target.countCards('h') > 0 && trigger.target.countCards('e') <= 0) {
                                    event.goto(3);
                                } else if (trigger.target.countCards('e') > 0 && trigger.target.countCards('h') <= 0) {
                                    event.goto(4);
                                } else {
                                    event.finish();
                                }
                                ('step 1');
                                player
                                    .chooseControl('获得手牌', '弃置装备', function (event, player) {
                                        if (trigger.target.countCards('e') < trigger.target.countCards('h')) return '弃置装备';
                                        if (trigger.target.countCards('e') >= trigger.target.countCards('h')) return '获得手牌';
                                        return '获得手牌';
                                    })
                                    .set('prompt', '凌人:获得' + get.translation(trigger.target) + '一张手牌或弃置其一张装备牌');
                                ('step 2');
                                if (result.control == '获得手牌') {
                                    event.goto(3);
                                } else {
                                    event.goto(4);
                                }
                                ('step 3');
                                player.gainPlayerCard(trigger.target, true, 'h');
                                if ((player.countCards('h') > trigger.target.countCards('h') && player.countCards('e') > trigger.target.countCards('e')) || trigger.target.countCards('h') <= 0) {
                                    event.goto(5);
                                } else {
                                    if (trigger.card.name == 'sha') {
                                        player.addTempSkill('ja_lingren_sha');
                                    } else {
                                        player.addTempSkill('ja_lingren_juedou');
                                    }
                                    event.finish();
                                }
                                ('step 4');
                                player.discardPlayerCard(trigger.target, true, 'e');
                                if ((player.countCards('h') > trigger.target.countCards('h') && player.countCards('e') > trigger.target.countCards('e')) || trigger.target.countCards('e') <= 0) {
                                    event.goto(5);
                                } else {
                                    if (trigger.card.name == 'sha') {
                                        player.addTempSkill('ja_lingren_sha');
                                    } else {
                                        player.addTempSkill('ja_lingren_juedou');
                                    }
                                    event.finish();
                                }
                                ('step 5');
                                trigger.target.storage.ja_lingren = {
                                    card: trigger.card,
                                    //player:event.targett,
                                };
                                trigger.target.addTempSkill('ja_lingren_damage');
                                if (trigger.card.name == 'sha') {
                                    player.addTempSkill('ja_lingren_sha');
                                } else {
                                    player.addTempSkill('ja_lingren_juedou');
                                }
                            },
                        },
                        ja_lingren_damage: {
                            onremove(player) {
                                delete player.storage.ja_lingren;
                            },
                            trigger: {
                                player: 'damageBegin3',
                            },
                            filter(event, player) {
                                var info = player.storage.ja_lingren;
                                return event.card && event.card == info.card;
                            },
                            silent: true,
                            popup: false,
                            forced: true,
                            content() {
                                trigger.num++;
                            },
                        },
                        ja_lingren_sha: {},
                        ja_lingren_juedou: {},
                        ja_qulunwu: {
                            nobracket: true,
                            audio: 'ext:MA英雄战姬/audio:2',
                            enable: 'phaseUse',
                            filterCard: true,
                            usable: 1,
                            check(card) {
                                return 9 - get.value(card);
                            },
                            filterTarget(card, player, target) {
                                if (player == target) return false;
                                return true;
                            },
                            content() {
                                player.storage.ja_qulunwu_bi = target;
                                player.addTempSkill('ja_qulunwu_bi', { player: 'phaseBegin' });
                                player.marks.ja_qulunwu_bi = player.markCharacter(target, {
                                    name: '曲轮舞',
                                    content: '你将代替其承受伤害',
                                });
                                player.recover();
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target(player, target) {
                                        if (target.hp == 1) return 5;
                                        return 0.5;
                                    },
                                },
                                threaten: 2,
                            },
                        },
                        ja_qulunwu_bi: {
                            trigger: {
                                global: 'damageBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.ja_qulunwu_bi == event.player;
                            },
                            _priority: 100,
                            content() {
                                trigger.player = player;
                            },
                        },
                        ja_sddyh: {
                            audio: 'ext:MA英雄战姬/audio:2',
                            nobracket: true,
                            trigger: {
                                player: 'damageBegin4',
                            },
                            filter(event, player) {
                                return player.maxHp * 0.8 <= player.hp && get.itemtype(event.source) == 'player';
                            },
                            forced: true,
                            content() {
                                trigger.source.addMark('ja_sddyh_2', 1);
                                trigger.source.addTempSkill('ja_sddyh_2');
                            },
                        },
                        ja_sddyh_2: {
                            audio: 'ext:MA英雄战姬/audio:2',
                            mark: true,
                            intro: {
                                content: '已减少#次手牌上限',
                            },
                            onremove(player, skill) {
                                player.storage.ja_sddyh_2 = 0;
                                player.markSkill('ja_sddyh_2');
                            },
                            trigger: {
                                player: 'phaseDiscardBefore',
                            },
                            forced: true,
                            content() { },
                            mod: {
                                maxHandcard(player, num) {
                                    return num - 2 * player.storage.ja_sddyh_2;
                                },
                            },
                        },
                        ja_kangzi: {
                            audio: 'ext:MA英雄战姬/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            check(event, player) {
                                return (
                                    game.countPlayer(function (current) {
                                        if (current.countCards('h') <= current.hp) {
                                            return get.sgn(get.attitude(player, current));
                                        }
                                    }) >= 0
                                );
                            },
                            content() {
                                'step 0';
                                event.current = player.next;
                                ('step 1');
                                event.current.draw();
                                var num1 = event.current.countCards('h');
                                var num2 = event.current.hp;
                                if (num1 >= num2) {
                                    event.current.chooseCard('交给' + get.translation(player) + '一张手牌', 'he', true).ai = function (card) {
                                        return -get.value(card);
                                    };
                                } else {
                                    event.goto(3);
                                }
                                ('step 2');
                                if (result.cards?.length) {
                                    event.current.$give(1, player);
                                    player.gain(result.cards, event.current, 'giveAuto');
                                }
                                ('step 3');
                                event.current = event.current.next;
                                if (event.current != player) event.goto(1);
                            },
                        },
                        ja_huanghun: {
                            group: ['ja_huanghun_1'],
                            audio: 'ext:MA英雄战姬/audio:5',
                            forced: true,
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            content() {
                                var num = game.players.length;
                                player.draw(num);
                            },
                            subSkill: {
                                1: {
                                    audio: 'ja_huanghun',
                                    forced: true,
                                    trigger: {
                                        global: 'phaseJieshuBegin',
                                    },
                                    filter(event, player) {
                                        if (event.player == player) return false;
                                        return player.countCards('h') > player.hp;
                                    },
                                    content() {
                                        player.chooseToDiscard(true, 'h');
                                    },
                                },
                            },
                        },
                        ja_chougan: {
                            shaRelated: true,
                            audio: 'ext:MA英雄战姬/audio:2',
                            trigger: {
                                player: 'shaMiss',
                            },
                            round: 1,
                            check(event, player) {
                                return get.attitude(player, event.target) < 0;
                            },
                            logTarget: 'target',
                            content() {
                                var card = get.cardPile(function (card) {
                                    return get.type(card) == 'equip';
                                });
                                if (card) {
                                    trigger.target.chooseUseTarget(card, 'nothrow', 'nopopup', true);
                                }
                                trigger.target.loseHp();
                            },
                            group: ['ja_chougan_roundcount'],
                        },
                        ja_xuanfengzhan: {
                            nobracket: true,
                            shaRelated: true,
                            audio: 'ext:MA英雄战姬/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                return event.card.name == 'sha' && event.target.countDiscardableCards(player, 'he') > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .discardPlayerCard(trigger.target, get.prompt('ja_xuanfengzhan', trigger.target))
                                    .set('ai', function (button) {
                                        if (!_status.event.att) return 0;
                                        if (get.position(button.link) == 'e') {
                                            if (get.subtype(button.link) == 'equip2') return 2 * get.value(button.link);
                                            return get.value(button.link);
                                        }
                                        return 1;
                                    })
                                    .set('att', get.attitude(player, trigger.target) <= 0);
                                ('step 1');
                                if (result.links?.length) {
                                    if (get.type(result.links[0], null, result.links[0].original == 'h' ? player : false) == 'equip') {
                                        trigger.parent.directHit.add(trigger.target);
                                    } else if (trigger.cards) {
                                        var list = [];
                                        for (var i = 0; i < trigger.cards.length; i++) {
                                            if (get.position(trigger.cards[i], true) == 'o') list.push(trigger.cards[i]);
                                        }
                                        if (list.length) {
                                            trigger.target.draw();
                                            player.draw();
                                        }
                                    }
                                }
                            },
                            ai: {
                                unequip: true,
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    if (tag == 'directHit_ai')
                                        return (
                                            arg.card.name == 'sha' &&
                                            arg.target.countCards('e', function (card) {
                                                return get.value(card) > 1;
                                            }) > 0
                                        );
                                    if (arg && arg.name == 'sha' && arg.target.getEquip(2)) return true;
                                    return false;
                                },
                            },
                        },
                        ja_qianyuzhiwu: {
                            nobracket: true,
                            audio: 'ext:MA英雄战姬/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                'step 0';
                                event.current = player;
                                ('step 1');
                                event.current.draw();
                                var num1 = event.current.countCards('h');
                                var num2 = event.current.hp;
                                if (num1 >= num2) {
                                    event.current.chooseToDiscard(2, true, 'he');
                                } else {
                                    event.goto(2);
                                }
                                ('step 2');
                                event.current = event.current.next;
                                if (event.current != player) event.goto(1);
                            },
                            ai: {
                                order: 2,
                                result: {
                                    player(player) {
                                        if (player.countCards('h') < player.hp) return 9;
                                        return 1;
                                    },
                                },
                            },
                        },
                        ja_beibuderuodian: {
                            nobracket: true,
                            audio: 'ext:MA英雄战姬/audio:2',
                            trigger: {
                                global: 'die',
                                player: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.player != player) return true;
                                if (event.player == player && player.maxHp > player.hp) return true;
                                return false;
                            },
                            content() {
                                if (trigger.player != player) {
                                    player.gainMaxHp();
                                    player.recover();
                                } else {
                                    player.loseMaxHp();
                                    trigger.cancel();
                                }
                            },
                        },
                        ja_longxiedejiahu: {
                            audio: 'ext:MA英雄战姬/audio:2',
                            nobracket: true,
                            trigger: {
                                player: ['changeHp', 'gainMaxHpEnd', 'loseMaxHpEnd'],
                            },
                            forced: true,
                            content() {
                                player.draw();
                            },
                        },
                        ja_qijian: {
                            audio: 'ext:MA英雄战姬/audio:3',
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                if (player.isLinked() || player.isTurnedOver()) {
                                    if (player.isLinked()) {
                                        player.link(false);
                                    }
                                    if (player.isTurnedOver()) {
                                        player.turnOver(false);
                                    }
                                } else {
                                    player.draw();
                                }
                            },
                        },
                        ja_kuiji: {
                            audio: 'ext:MA英雄战姬/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.draw(trigger.num);
                                ('step 1');
                                var next = player.phaseUse();
                                event.next.remove(next);
                                trigger.next.push(next);
                            },
                        },
                        ja_huiyumosha: {
                            nobracket: true,
                            audio: 'ext:MA英雄战姬/audio:2',
                            trigger: {
                                player: 'phaseBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.isLinked() || player.isTurnedOver();
                            },
                            content() {
                                if (player.isLinked()) {
                                    player.link(false);
                                }
                                if (player.isTurnedOver()) {
                                    player.turnOver(false);
                                }
                            },
                        },
                        ja_daoyiyoudao: {
                            init(player) {
                                player.addMark('ja_lucky', 5);
                                player.markSkill('ja_lucky');
                            },
                            onremove(player, skill) {
                                player.storage.ja_lucky -= 5;
                                player.markSkill('ja_lucky');
                            },
                            nobracket: true,
                            audio: 'ext:MA英雄战姬/audio:2',
                            trigger: {
                                global: 'phaseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.getHistory('damage').length;
                            },
                            content() {
                                player.phase('nodelay');
                                player.addSkill('ja_daoyiyoudao_use');
                            },
                            subSkill: {
                                use: {
                                    mark: '盗',
                                    intro: {
                                        content: '使用牌只能指定自己目标',
                                    },
                                    trigger: {
                                        player: 'phaseAfter',
                                    },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return event.skill == 'ja_daoyiyoudao';
                                    },
                                    content() {
                                        player.removeSkill('ja_daoyiyoudao_use');
                                    },
                                    mod: {
                                        playerEnabled(card, player, target) {
                                            if (player != target) return false;
                                        },
                                    },
                                },
                            },
                        },
                        ja_tiandidao: {
                            nobracket: true,
                            audio: 'ext:MA英雄战姬/audio:3',
                            enable: 'phaseUse',
                            round: 1,
                            filterTarget(c, p, t) {
                                return t != p && t.countGainableCards(p, 'he') > 0;
                            },
                            content() {
                                'step 0';
                                player.gainPlayerCard(target, 'he', 2, true);
                                ('step 1');
                                player.damage(target);
                            },
                            group: ['ja_tiandidao_roundcount'],
                            ai: {
                                order: 8,
                                result: {
                                    target(player, target) {
                                        if (target.countCards('he') > 1 && get.attitude(player, target) < 0) return 5;
                                        if (player.hp < 2) return 0;
                                        return get.damageEffect(target, player, target);
                                    },
                                },
                            },
                        },
                        ja_tuitui: {
                            marktext: '移',
                            intro: {
                                name: '强制移动',
                                content: '当前强制移动点数:#.',
                            },
                        },
                        ja_piquan: {
                            audio: 'ext:MA英雄战姬/audio:2',
                            trigger: {
                                source: 'damageSource',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.player != player && event.player.isAlive();
                            },
                            forced: true,
                            content() {
                                if (trigger.player.countMark('ja_tuitui') < 1) {
                                    trigger.player.addMark('ja_tuitui', 1);
                                } else {
                                    var num = trigger.player.storage.ja_tuitui;
                                    trigger.player.damage(num);
                                    trigger.player.storage.ja_tuitui = 0;
                                    trigger.player.unmarkSkill('ja_tuitui');
                                }
                            },
                        },
                        ja_fuquanbanghe: {
                            nobracket: true,
                            audio: 'ext:MA英雄战姬/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player.canCompare(target);
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseToCompare(target);
                                ('step 1');
                                if (result.bool) {
                                    target.addMark('ja_tuitui', 1);
                                }
                            },
                            ai: {
                                order: 5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player, target);
                                    },
                                },
                            },
                        },
                        ja_hajialasifengbao: {
                            nobracket: true,
                            markimage: 'extension/MA英雄战姬/ja_jiasu.png',
                            audio: 'ext:MA英雄战姬/audio:2',
                            intro: {
                                content: '你计算与其他角色的距离时-#',
                            },
                            trigger: {
                                source: 'damageSource',
                            },
                            forced: true,
                            content() {
                                player.addMark('ja_hajialasifengbao', 1);
                            },
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - from.storage.ja_hajialasifengbao;
                                },
                            },
                        },
                        ja_kainazidezhenfeng: {
                            nobracket: true,
                            init(player) {
                                player.addMark('ja_lucky', 8);
                                player.markSkill('ja_lucky');
                            },
                            onremove(player, skill) {
                                player.storage.ja_lucky -= 8;
                                player.markSkill('ja_lucky');
                            },
                            audio: 'ext:MA英雄战姬/audio:2',
                            trigger: {
                                player: 'useCard1',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.name == 'sha';
                            },
                            content() { },
                            mod: {
                                selectTarget(card, player, range) {
                                    if (card.name == 'sha' && Array.isArray(range) && range[1] != -1) range[1] += 2;
                                },
                            },
                        },
                        ja_Paradiaso: {
                            init(player) {
                                player.addMark('ja_lucky', 2);
                                player.markSkill('ja_lucky');
                            },
                            onremove(player, skill) {
                                player.storage.ja_lucky -= 2;
                                player.markSkill('ja_lucky');
                            },
                            audio: 'ext:MA英雄战姬/audio:2',
                            trigger: {
                                global: 'damageBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && get.type(event.card) == 'trick' && event.player && event.player.storage.ja_Paradiaso != true;
                            },
                            content() {
                                'step 0';
                                var target = trigger.player;
                                player
                                    .chooseControl('加伤', '减伤', '取消', function (event, player) {
                                        if (get.attitude(player, target) < 0) return '加伤';
                                        if (get.attitude(player, target) > 0) return '减伤';
                                        return '取消';
                                    })
                                    .set('prompt', '天堂:令此伤害增加或减少1点.');
                                ('step 1');
                                if (result.control == '加伤') {
                                    game.log(trigger.card, '伤害增加了1点');
                                    trigger.num++;
                                    trigger.player.storage.ja_Paradiaso = true;
                                } else if (result.control == '减伤') {
                                    game.log(trigger.card, '伤害减少了1点');
                                    trigger.num--;
                                    trigger.player.storage.ja_Paradiaso = true;
                                } else {
                                }
                            },
                        },
                        ja_huanhuozhishi: {
                            nobracket: true,
                            audio: 'ext:MA英雄战姬/audio:2',
                            trigger: {
                                global: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.name != 'wuxie' && event.player != player && player.inRange(event.player) && player.countCards('he') > 0 && get.type(event.card, 'trick') == 'trick';
                            },
                            content() {
                                'step 0';
                                if (player != game.me && !player.isOnline()) game.delayx();
                                player
                                    .chooseToDiscard(get.prompt('ja_huanhuozhishi', trigger.player), '弃置一张牌,取消' + get.translation(trigger.card) + '的所有目标', 'he')
                                    .set('ai', function (card) {
                                        return _status.event.goon / 1.4 - get.value(card);
                                    })
                                    .set(
                                        'goon',
                                        (function () {
                                            if (!trigger.targets.length) return -get.attitude(player, trigger.player);
                                            var num = 0;
                                            for (var i of trigger.targets) {
                                                num -= get.effect(i, trigger.card, trigger.player, player);
                                            }
                                            return num;
                                        })()
                                    )
                                    .setHiddenSkill(event.name);
                                ('step 1');
                                if (result.bool) {
                                    trigger.targets.length = 0;
                                    trigger.all_excluded = true;
                                }
                            },
                        },
                    },
                    translate: {
                        ja_lvbu: '界吕布',
                        ja_helakelesi: '赫拉克勒斯',
                        ja_napolun: '拿破仑',
                        ja_paoding: '庖丁',
                        ja_gaowen: '高文',
                        ja_zhende: '贞德',
                        ja_jierjiameishen: '吉尔伽美什',
                        ja_zhitianxinchang: '织田信长',
                        ja_shichuanwuyouweimen: '石川五右卫门',
                        ja_jieluonimo: '杰罗尼莫',
                        ja_shihuangdi: '始皇帝',
                        ja_akaliusi: '阿喀琉斯',
                        ja_enqidu: '恩奇都',
                        ja_yasewang: '亚瑟王',
                        ja_yidazhengzong: '伊达政宗',
                        ja_beideweier: '贝德维尔',
                        ja_chalimandadi: '查理曼大帝',
                        ja_sunliujianyuan: '孙六兼元',
                        ja_sunzi: '孙子',
                        ja_daerwen: '达尔文',
                        ja_hanmolabi: 'SP汉谟拉比',
                        ja_balin: '巴林',
                        ja_wuzangfangmuqin: '武藏坊牟庆',
                        ja_liubang: '刘邦',
                        ja_makeboluo: '马可波罗',
                        ja_baosi: '鲍斯',
                        ja_dahewuzun: '大和武尊',
                        ja_deleike: '德雷克',
                        ja_lansiluote: '兰斯洛特',
                        ja_yuanyijing: '源义经',
                        ja_aerweida: '阿尔威达',
                        ja_hubilie: '忽必烈',
                        ja_modeleide: '莫德雷德',
                        ja_beimihu: '卑弥呼',
                        ja_diqi: '蒂奇',
                        ja_taigongwang: '太公望',
                        ja_yiwen: '伊文',
                        ja_yinengzhongjing: '伊能忠敬',
                        ja_weilianjide: '威廉·基德',
                        ja_baiqi: '白起',
                        ja_jiahalade: '加哈拉德',
                        ja_anbeiqingming: '安倍晴明',
                        ja_shantianchangzheng: '山田长政',
                        ja_wangzhi: '王直',
                        ja_paxiwaer: '帕西瓦尔',
                        ja_jiatengqingzheng: '加藤清正',
                        ja_geleisiaomali: '格蕾丝奥玛丽',
                        ja_majiyaweili: '马基亚维利',
                        ja_kai: '凯',
                        ja_zhentianxincun: '真田信村',
                        ja_yekajielinna: '叶卡捷琳娜',
                        ja_yadianna: '雅典娜',
                        ja_telisitan: '特里斯坦',
                        ja_heji: '鹤姬',
                        ja_qihefei: '齐格飞',
                        ja_tiancaosilang: '天草四郎',
                        ja_daozhi: '盗跖',
                        ja_damodashi: '达摩大师',
                        ja_laifuailikesong: '莱夫埃里克松',
                        ja_danding: '但丁',
                        ja_wushuang: '无双',
                        ja_wushuang_info: '锁定技,当你使用【杀】或【决斗】指定目标后,你令此牌需要依次使用或打出两张【闪】或【杀】响应.',
                        ja_wushuang1: '无双',
                        ja_wushuang1_info: '',
                        ja_wushuang2: '无双',
                        ja_wushuang2_info: '',
                        ja_qianjun: '千军',
                        ja_qianjun_info: '锁定技,你的【杀】或【决斗】可以额外选择两个目标,你的攻击范围+2.<br>被动:你的幸运值+4.',
                        ja_futian: '覆天',
                        ja_futian_info: '锁定技,当你使用牌时,你令所有体力值不小于你的其他角色不能使用或打出牌响应此牌.',
                        ja_yiyanhuanyan: '以眼还眼',
                        ja_yiyanhuanyan_info: '锁定技,当其他角色使用延时类锦囊以外的牌指定你为目标后,若其可以成为此牌的目标,视为你对其使用了相同的牌.<br>被动:你的幸运值+1.',
                        ja_jiquan: '集权',
                        ja_jiquan_info: '隐匿技,锁定技,你登场后,摸3张牌.',
                        ja_wuqian: '无前',
                        ja_wuqian_info: '锁定技,当你使用【杀】或【决斗】指定一名角色为目标后,你令此牌不可被响应.',
                        ja_zhenluan: '镇乱',
                        ja_zhenluan_info: '当有其他角色使用了【南蛮入侵】或【万箭齐发】时,你可以令一名非此牌使用者的角色摸一张牌,你摸一张牌.<br>被动:你的幸运值+1.',
                        ja_fangzhu: '放逐',
                        ja_fangzhu_info: '当你受到伤害后,你可令一名其他角色摸X张牌(X为你当前的体力值),该角色将武将牌翻面.',
                        ja_jieniu: '解牛',
                        ja_jieniu_info: '出牌阶段限一次,你可以弃置一名角色装备区内的一张牌,该角色与你依次摸一张牌.',
                        ja_baozi: '包子',
                        ja_baozi_info: '出牌阶段限一次,你可以弃置两张牌并令一名角色回复一点体力并摸一张牌.',
                        ja_sheyan: '设宴',
                        ja_sheyan_info: '隐匿技,当你登场后,你可以与一名其他角色各摸两张牌.',
                        ja_shengshu: '圣数',
                        ja_shengshu_info: '当你使用一张牌时,若此牌的点数为3的倍数/此牌是本回合内使用的第X张牌(X为3的倍数),你可以摸一张牌.',
                        ja_yemu: '夜幕',
                        ja_yemu_info: '觉醒技,当一名角色的回合开始时,若当前游戏轮数不小于3,你变身并摸两张牌.',
                        ja_buluo: '不落',
                        ja_buluo_info: '锁定技,你获得一枚<日>标记;回合结束时,若你拥有<日>标记,则你移去一枚<日>标记并执行一个额外的回合.',
                        ja_qibing: '起兵',
                        ja_qibing_info: '隐匿技,当你登场后,你可以令至多四名角色摸一张牌.',
                        ja_xiansheng: '献身',
                        ja_xiansheng_info: '当你受到1点伤害后,你可以令一名角色与你依次摸一张牌,若该角色不为你,其回复一点体力.<br>被动,你的幸运值+7.',
                        ja_baiwu_2: '百武',
                        ja_baiwu_2_info: '',
                        ja_baiwu: '百武',
                        ja_baiwu_info: '锁定技,若你的装备区内拥有:<br>武器:出牌阶段你可以额外使用一张【杀】.防具:其他角色使用的【杀】对你无效.防御马:你的手牌上限+2.进攻马:你每受到一点伤害便摸一张牌.宝物:摸牌阶段你可以额外摸一张牌.<br>被动:你的幸运值+2.',
                        ja_baiwu_5: '百武',
                        ja_baiwu_5_info: '摸牌阶段,你可以多摸一张牌.',
                        ja_buwu: '部武',
                        ja_buwu_info: '隐匿,在你登场后,可以视为使用一张【万箭齐发】.',
                        ja_sanduanji: '三段击',
                        ja_sanduanji_info: '每回合限两次,当一名角色于其出牌阶段使用【杀】时,你可弃置一张牌令此【杀】不计入出牌阶段使用次数并令其摸一张牌.<br>被动:你的幸运值+4.',
                        ja_zhantiejian: '斩铁剑',
                        ja_zhantiejian_info: '当你使用【杀】对一名角色造成伤害时,你可以进行一次判定,若结果不为♥️️️,此【杀】伤害+1,否则你摸一张牌.<br>被动:你的幸运值+4.',
                        ja_juhe: '居合',
                        ja_juhe_info: '被动:游戏开始时/回合结束时,若你于本回合内未使用/打出过【杀】,你进入<收刀>状态;当你使用【杀】后,你进入<出鞘>状态.在<收刀>状态下,你使用的【杀】无视防具且不可被闪避;在<出鞘>状态下,你的攻击范围+1.',
                        ja_juhe1: '居合',
                        ja_juhe1_info: '',
                        ja_kuangbao: '狂暴',
                        ja_kuangbao_info: '锁定技,你因【杀】造成/受到伤害时,此伤害+1.',
                        ja_mengxi: '猛袭',
                        ja_mengxi_info: '出牌阶段限一次,你可以失去一点体力,视为对一名你攻击范围内的其他角色使用一张不计入出【杀】次数的【杀】.<br>被动:你的幸运值+2.',
                        ja_yitong: '一统',
                        ja_yitong_info: '当你受到一次伤害后,你可以令至多四名势力不同的角色各交给你一张牌.',
                        ja_shihuang: '始皇',
                        ja_shihuang_info: '当你不因此技能获得牌后,若你手牌中有与这些牌同名的牌,你可以弃置这些牌并从牌堆中摸取等量的牌.<br>被动:你的幸运值+2.',
                        ja_shensu: '神速',
                        ja_shensu_info: '锁定技,你的准备阶段开始时,你摸两张牌并进行一个额外的出牌阶段.你的弃牌阶段开始时,你弃置一张牌并进行一个额外的出牌阶段.',
                        ja_kaixuan: '凯旋',
                        ja_kaixuan_info: '锁定技,你的幸运值+1.你的回合内,你每使用一次牌后,你的进攻距离便+1.',
                        ja_babilunchengqiang: '巴比伦城墙',
                        ja_babilunchengqiang_info: '每回合限一次,每当一名其他角色使用【杀】指定一名与你距离为1的角色为目标时,你可以随机使用一件牌堆中的装备并将目标改为你.<br>被动,你的幸运值+6.',
                        ja_aidezhufu: '爱的祝福',
                        ja_aidezhufu_info: '被动,全指数+1.(摸牌数量、【杀】的目标、【杀】的使用次数、手牌上限、进攻距离与防御距离均+1)',
                        ja_moujiashanggouquan: '某家上勾拳',
                        ja_moujiashanggouquan_info: '出牌阶段限一次,你可以与一名其他角色进行猜拳,若你赢,你令其获得一枚<强制移动标记>,对其造成相当于标记数量的伤害并移除所有标记.若你没赢,你弃置一张牌.',
                        ja_dumou: '独眸',
                        ja_dumou_info: '锁定技,你无法成为黑色【杀】的目标,也无法使用红色【杀】.<br>被动:你的幸运值+7.',
                        ja_yingyong: '英勇',
                        ja_yingyong_info: '当你使用卡牌对其他角色造成或受到其他角色使用卡牌造成的伤害后,你可以依次对伤害来源和被伤害者造成一点伤害.<br>被动:你的幸运值+3.',
                        ja_yongqi: '勇气',
                        ja_yongqi_info: '锁定技,每当你使用【杀】造成伤害或受到【杀】造成的伤害后,你增加一枚<勇气>标记.你的进攻距离+X,你使用的【杀】可以额外指定X名角色(X为你拥有的<勇气>标记数量).<br>被动:你的幸运值+3.',
                        ja_duren: '毒刃',
                        ja_duren_info: '当你使用【杀】对一名角色造成伤害后,你可以令其『中毒』.',
                        ja_zhongdu: '中毒',
                        ja_zhongdu_info: '',
                        ja_mingdao: '名刀',
                        ja_mingdao_info: '锁定技,你的准备阶段开始时,若你的装备区内没有武器牌,你随机从牌堆/弃牌堆中装备一件武器.你的手牌上限+X(X为你装备区内武器的攻击范围)',
                        ja_chaojiqi: '超集气',
                        ja_chaojiqi_info: '结束阶段,若你未跳过本回合的出牌阶段,且你于本回合出牌阶段内未使用牌指定过其他角色为目标,则你可以摸X张牌.(X为你已损失的体力值且至少为1)',
                        ja_guidao: '诡道',
                        ja_guidao_info: '每回合限一次,当一名角色于摸牌阶段外获得牌时,你可以令其再摸一张牌.',
                        ja_sishuwulu: '四书五路',
                        ja_sishuwulu_info: '每当你使用一张♠️️牌时,你可以摸一张牌.<br>被动:你的幸运值+1.',
                        ja_silie: '撕裂',
                        ja_silie_info: '',
                        ja_liezhua: '裂爪',
                        ja_liezhua_info: '每当你即将对一名其他角色造成伤害时,你可以摸一张牌并防止此伤害,改为令其获得等量的<撕裂>点数.',
                        ja_jinhualun: '进化论',
                        ja_jinhualun_info: '锁定技,每当你击杀一名角色/首次进入濒死状态时,你发现四个技能并从中选择一个获得.',
                        ja_daweihe: '威喝',
                        ja_daweihe_info: '',
                        ja_weihe: '威喝',
                        ja_weihe_info: '出牌阶段限一次,你可以与一名其他角色进行一次拼点,若你赢,其下一次受到的伤害+1.',
                        ja_beifenyiji: '悲愤一击',
                        ja_beifenyiji_info: '每回合限一次,当你受到其他角色造成的伤害后,你可以视为对伤害来源使用一张【杀】,若此【杀】造成了伤害,你回复一点体力.<br>被动:你的幸运值+1.',
                        ja_qianbing: '千兵',
                        ja_qianbing_info: '锁定技,你可以装备复数的武器,且游戏开始时你废除你所有的其他装备栏.',
                        ja_bingzhan: '兵斩',
                        ja_bingzhan_info: '锁定技,你可以将装备牌当【杀】使用或打出.',
                        ja_jili: '激励',
                        ja_jili_info: '',
                        ja_dili_2: '底力',
                        ja_dili_2_info: '',
                        ja_dili: '底力',
                        ja_dili_info: '',
                        ja_Critical: '暴击率',
                        ja_Critical_info: '',
                        ja_baoji: '暴击',
                        ja_baoji_info: '',
                        ja_xinyinzhi: '幸运值',
                        ja_xinyinzhi_info: '',
                        ja_lucky: '幸运值',
                        ja_lucky_info: 'undefined',
                        ja_ershanshanjiang: '而善善将',
                        ja_ershanshanjiang_info: '出牌阶段开始时,你可以跳过此阶段并对一名角色进行激励并令其摸两张牌.',
                        ja_houmou: '厚谋',
                        ja_houmou_info: '回合结束时,若你本回合内未造成过伤害,你可以令手牌上限+X.(X为场上势力数)',
                        ja_houmou_1: '厚谋',
                        ja_houmou_1_info: '',
                        ja_cisha: '刺杀',
                        ja_cisha_info: '转换技,锁定技,回合开始时,你对此技能的状态进行转换:<br>阴:锁定技,你的基础暴击率增加50%<br>阳:当你使用【杀】对一名角色造成伤害后,你可以令其中毒.',
                        ja_bwhj: '百万黄金',
                        ja_bwhj_info: '出牌阶段限一次,你可以将总点数不小于9点且不大于13点的手牌交给一名其他角色并令其增加30%的基础暴击率直至其回合结束.<br>被动:你的幸运值+8.',
                        ja_bwhj_bj: '百万黄金',
                        ja_bwhj_bj_info: '被动:你的基础暴击率增加30%.',
                        ja_zhiyuguanghuan: '治愈光环',
                        ja_zhiyuguanghuan_info: '出牌阶段限一次,你可以弃置一张手牌并令一名角色回复一点体力.(该回复值可以暴击且该暴击率不会因目标幸运值而降低)',
                        ja_kanchuan: '看穿',
                        ja_kanchuan_info: '每回合限一次,当你成为其他角色使用【杀】或【决斗】的唯一目标时,你可以与其进行一次对策,若你赢,你令此牌失效并令其下次受到的伤害+1,否则你令此牌不可被响应.<br>被动:你的幸运值+1.',
                        ja_kanchuan_2: '看穿',
                        ja_kanchuan_2_info: '',
                        ja_huolei: '火雷',
                        ja_huolei_info: '你使用任意【杀】时,你可以将其属性转化为火属性或者雷属性的【杀】',
                        ja_daniaozhizi: '大鸟之姿',
                        ja_daniaozhizi_info: '你的出牌阶段开始时,你可以立即结束当前回合并翻面,你摸两张牌,若如此做,你于你的下个回合开始后可以连续执行两个额外的回合.',
                        ja_shuini_red: '水溺',
                        ja_shuini_red_info: '',
                        ja_shuini_black: '水溺',
                        ja_shuini_black_info: '',
                        ja_shuini: '水溺',
                        ja_shuini_info: '出牌阶段限一次,你可以选择一名角色并进行一次判定,你与其无法使用与判定牌颜色相同的牌直至你们自己的回合结束.',
                        ja_longyanjian: '龙焰剑',
                        ja_longyanjian_info: '锁定技,你使用的【杀】攻击范围+1且可以额外指定一个目标.',
                        ja_jinglingdejiahu_2: '精灵的加护',
                        ja_jinglingdejiahu_2_info: '',
                        ja_jinglingdejiahu: '精灵的加护',
                        ja_jinglingdejiahu_info: '当你的回合开始时,你可以选择一名未成为加护对象的角色并弃置你的一张牌,若如此做,其下一次即将收到的伤害减一直至其回合开始.<br>被动:你的幸运值+1.',
                        ja_alongdaite: '阿隆戴特',
                        ja_alongdaite_info: '锁定技,每当你受到一次伤害后,你均会令你下一次使用【杀】造成的伤害增加此次伤害点数的数值.',
                        ja_yijingqianbenying: '义经千本樱',
                        ja_yijingqianbenying_info: '锁定技,你使用的非转化的实体【杀】在结算后会再次结算.',
                        ja_feikongzhan: '飞空斩',
                        ja_feikongzhan_info: '锁定技,你使用的【杀】的攻击范围+1.<br>被动:你的幸运值+2.',
                        ja_juanxi: '卷袭',
                        ja_juanxi_info: '锁定技,每当你不因此技能使用一张装备牌后,你随机使用一张牌堆中的装备牌.',
                        ja_yuanxiong: '元凶',
                        ja_yuanxiong_info: '锁定技,每轮游戏开始时,你令所有角色的基础暴击率提高10%.',
                        ja_youqi: '游骑',
                        ja_youqi_info: '锁定技,你于你的回合内进攻距离+1,你于你的回合外防御距离+1.<br>被动:你的幸运值+2.',
                        ja_cangping: '苍萍',
                        ja_cangping_info: '锁定技,当你使用【杀】时,若目标与你距离为1,你令此【杀】不可被响应;当你成为【杀】的目标时,若此【杀】的使用者与你距离不为1,你令此【杀】无效.',
                        ja_kuangwu: '狂舞',
                        ja_kuangwu_info: '锁定技,你使用的【杀】需要两张【闪】才能被闪避,且你的攻击距离+1.<br>被动:你的幸运值+1.',
                        ja_luanci: '乱刺',
                        ja_luanci_info: '每当你受到一次由其他角色造成的伤害后,你可以将任意一张牌当做【杀】使用.',
                        ja_bianjinjing: '边津镜',
                        ja_bianjinjing_info: '出牌阶段限一次,你可以选择一名角色,你弃置两张手牌并令其回复一点体力,其解除其身上的连环和翻面状态.',
                        ja_ciai: '慈爱',
                        ja_ciai_info: '锁定技,当一名角色于其回合外回复一次体力后,其选择令你摸一张牌或失去一点体力.<br>被动:你的幸运值+1.',
                        ja_chuanxindan: '穿心弹',
                        ja_chuanxindan_info: '锁定技,你不能使用【杀】,但是你的基础暴击率提高40%.<br>被动:你的幸运值+3.',
                        ja_heihuzidabaofa: '黑胡子大爆发',
                        ja_heihuzidabaofa_info: '每回合限一次,你可以将【杀】当做【决斗】使用或打出.',
                        ja_jinjiaojian: '金蛟剪',
                        ja_jinjiaojian_info: '出牌阶段限一次,你可以选择一名角色,弃置其三个区域内的一张牌.<br>被动:你的幸运值+5.',
                        ja_fengshentai: '封神台',
                        ja_fengshentai_info: '当一名角色受到一次伤害后,若其本回合内未成为过此技能的目标,你可以令其摸一张牌,其可以选择使用此牌或弃置一张牌.',
                        ja_fengshentai_2: '封神台',
                        ja_fengshentai_2_info: '',
                        re_chaojiqi: '超集气',
                        re_chaojiqi_info: '你的回合结束时,你可以将你装备区内的武器牌置入一名其他角色的装备栏内,你摸X张牌(X为你发动技能时的攻击范围)',
                        ja_baishi: '白狮',
                        ja_baishi_info: '你的准备阶段开始时,你可以摸X张牌并弃置Y张牌(X为你计算与其距离为1的其他目标角色数量,Y为你当前的体力值且至多为3).<br>被动:你的进攻距离和幸运值+1.',
                        ja_tiandiceliang: '天地测量',
                        ja_tiandiceliang_info: '你的回合结束时,你可以统计当前场上势力数与你当前的体力值,你摸取X张牌并弃置Y张牌.(X为两者之间较大的数,Y为两者之间较小的数)若如此做,你可以令一名手牌数少于你的其他角色摸一张牌.<br>被动:你的幸运值+2.',
                        ja_jinyindao: '金银岛',
                        ja_jinyindao_info: '锁定技,当你死亡时,你将两张【威廉的宝藏】加入牌堆.<br>被动:你的幸运值+3.',
                        ja_zajitou: '杂技投',
                        ja_zajitou_info: '出牌阶段,你可以将一张牌交给一名手牌数量不大于你的其他角色,视为对其使用了一张无视防具的【杀】',
                        ja_zhanshoulun_2: '斩首轮',
                        ja_zhanshoulun_2_info: '',
                        ja_zhanshoulun: '斩首轮',
                        ja_zhanshoulun_info: '锁定技,每当你令一名角色进入濒死时,你摸一张牌并令其无法使用【桃】或【酒】直至回合结束.',
                        ja_santilun: '三体轮',
                        ja_santilun_info: '锁定技,当你使用的【杀】或【决斗】即将造成伤害时,你令此此伤害+1,你失去一点体力.每当你击杀一名角色后,你回复一点体力.',
                        ja_bingshangxianshi: '冰上现实',
                        ja_bingshangxianshi_info: '当有其他角色使用【杀】指定一名角色为目标时,若你在使用者的攻击范围内,你可以弃置一张黑色【杀】并令此牌无效.<br>锁定技,你的黑色【杀】均视为冰属性,你使用冰属性【杀】不需要出杀次数.',
                        ja_baiguiyexing: '百鬼夜行',
                        ja_baiguiyexing_info: '当你使用一张♠️️牌后/你成为其他角色使用♠️️牌的目标后,你可以摸一张牌;当你使用一张♣️️牌后/你成为其他角色使用♣️️牌的目标后,你可以弃置一名角色区域内的一张牌.<br>被动:你的幸运值+1.',
                        ja_shanyuzhanbuderen: '善于占卜的人',
                        ja_shanyuzhanbuderen_info: '锁定技,你的幸运值+4.',
                        ja_jialouluotianxiang: '迦楼罗天翔',
                        ja_jialouluotianxiang_info: '当你于一个回合内使用第X张牌后,你可以摸X张牌(X为你当前的体力值),若此牌的类型为:<br>基本牌:你可以令一名手牌数小于你的其他角色将手牌摸至与你相等(至多摸至5).<br>锦囊牌:你可以对一名手牌数不小于你的其他角色造成一点雷电伤害.<br>装备牌:若你的体力值大于你装备区里的牌数,你摸Y张牌并失去Y点体力,否则你弃置Y张手牌并回复Y点体力.(Y为你的体力值与你装备区内牌数之差)',
                        ja_jiaokou_1: '剿寇',
                        ja_jiaokou_1_info: '',
                        ja_jiaokou: '剿寇',
                        ja_jiaokou_info: '出牌阶段限X次,你可以令一名本回合内未成为过此技能目标的其他角色交给你一张牌,若此牌不为【杀】,你可以对该角色使用一张不计入出杀次数的【杀】.(X为当前场上的反贼数)',
                        ja_shouyuantrue: '受冤',
                        ja_shouyuantrue_info: '',
                        ja_shouyuan: '受冤',
                        ja_shouyuan_info: '锁定技,你的回合结束时,在你的回合内失去过牌的其他角色可以对你使用一张无距离限制的【杀】.',
                        ja_yuanyue: '圆月',
                        ja_yuanyue_info: '当你受到其他角色造成的一次伤害或对其他角色造成一次伤害后,你可以令受到伤害的一方进行一项选择:令你摸两张牌或令自身失去一点体力.若此技能的目标不为你,此技能于本回合内无法再次使用.',
                        ja_yuanyueyue: '圆月',
                        ja_yuanyueyue_info: '',
                        ja_qjpx: '枪击炮袭',
                        ja_qjpx_info: '转换技,锁定技:<br>阴:你每回合使用的第一张【杀】可以额外指定一个角色为目标且不可被闪避.<br>阳:你每回合使用的第一张【杀】无视距离和防具.',
                        qjpx: '枪击炮袭',
                        qjpx_info: '',
                        ja_dubian: '独辩',
                        ja_dubian_info: '出牌阶段限一次,你可以与一名其他角色进行拼点,若你赢,你令其交给你一张牌且你与其相互之间不能使用牌指定对方为目标直至你的回合开始.',
                        ja_dubian_2: '独辩',
                        ja_dubian_2_info: '',
                        ja_huiyue: '毁约',
                        ja_huiyue_info: '每当你获得一名其他角色的牌后,你可以令其进行一项选择:弃置一张牌或失去一点体力.',
                        ja_junzhulun: '君主论',
                        ja_junzhulun_info: '你的手牌上限+2.当你造成一次伤害后,你可以令主公摸一张牌,当你受到一次伤害后,你可以令主公弃置一张手牌.',
                        ja_yinjun: '迎君',
                        ja_yinjun_info: '锁定技,游戏开始时,你将一张【君主论】置入你的装备区;每当你使用一张装备牌时,你可以改为将此牌交给一名体力上限大于你当前体力值的其他角色并摸两张牌.',
                        ja_yintui: '隐退',
                        ja_yintui_info: '锁定技,当你的判定区内有牌时,你不能成为其他角色使用的带有伤害这一标签的牌的目标.',
                        ja_lingren: '凌人',
                        ja_lingren_info: '每回合每种牌限一次,当你使用【杀】或【决斗】指定一名其他角色为目标时,你可以获得其一张手牌,或弃置其装备区内的一张牌,若其对应区域内没有牌,或你手牌和装备区域内的牌均多于该角色,则此牌对其造成的伤害+1.<br>被动,你的幸运值+3.',
                        ja_lingren_damage: '凌人',
                        ja_lingren_damage_info: '',
                        ja_lingren_sha: '凌人·杀已用',
                        ja_lingren_sha_info: '',
                        ja_lingren_juedou: '凌人·决斗已用',
                        ja_lingren_juedou_info: '',
                        ja_qulunwu: '曲轮舞',
                        ja_qulunwu_info: '出牌阶段限一次,你可以弃置一张手牌并守护一名其他角色直至你的回合开始,若如此做,你回复一点体力.(守护:当目标角色即将受到伤害时,你替代其承受此伤害)',
                        ja_qulunwu_bi: '曲轮舞',
                        ja_qulunwu_bi_info: '',
                        ja_sddyh: '死地的诱惑',
                        ja_sddyh_info: '锁定技,当你即将受到伤害时,若你的体力值不少于80%,你令当前回合的角色本回合内的手牌上限-2.',
                        ja_sddyh_2: '死地的诱惑',
                        ja_sddyh_2_info: '',
                        ja_kangzi: '慷资',
                        ja_kangzi_info: '回合结束时,你可以令所有其他角色依次摸一张牌,若其手牌数大于其当前体力值,其需要交给你一张牌.',
                        ja_huanghun: '黄昏',
                        ja_huanghun_info: '锁定技,你的回合结束时,你摸取同等于当前场上人数的牌.当一名其他角色的回合结束时,若你的手牌数大于你当前的体力值,你需要弃置一张手牌.',
                        ja_chougan: '愁感',
                        ja_chougan_info: '每轮限一次,当你使用的【杀】被一名角色使用的【闪】闪避后,你可以令其使用一张牌堆中的装备牌并失去一点体力.',
                        ja_xuanfengzhan: '旋风斩',
                        ja_xuanfengzhan_info: '当你使用【杀】指定一名角色为目标后,你可以弃置其一张牌,若以此法弃置的牌为装备牌,此【杀】不可被【闪】响应,若不为装备牌,该角色与你依次摸一张牌.',
                        ja_qianyuzhiwu: '千羽之舞',
                        ja_qianyuzhiwu_info: '出牌阶段限一次,你可以令所有角色依次摸一张牌,当一名角色以此法摸牌后,若其手牌数大于其体力值,其需要弃置两张牌.',
                        ja_beibuderuodian: '背部的弱点',
                        ja_beibuderuodian_info: '锁定技,当其他角色死亡后,你增加一点体力上限并回复一点体力;当你即将受到伤害时,若你的体力上限大于你当前的体力值,你减少一点体力上限并防止此伤害.',
                        ja_longxiedejiahu: '龙血的加护',
                        ja_longxiedejiahu_info: '每当你的体力值或体力上限产生变动后,你可以摸一张牌.',
                        ja_qijian: '祈剑',
                        ja_qijian_info: '当你使用【杀】造成伤害后,若你处于翻面或横置状态,你可以复原你的武将牌,否则你可以摸一张牌.',
                        ja_kuiji: '困击',
                        ja_kuiji_info: '每当你受到一次伤害后,你可以摸X张牌并立即进行一个额外的出牌阶段.(X为伤害点数)',
                        ja_huiyumosha: '毁誉默杀',
                        ja_huiyumosha_info: '你的回合开始前,若你处于翻面或横置状态,你可以重置你的武将牌.',
                        ja_daoyiyoudao: '盗亦有道',
                        ja_daoyiyoudao_info: '锁定技,当一名角色的回合结束后,若你于此回合内受到过伤害,你执行一个额外的回合,且你于此额外回合内使用牌只能指定自己为目标.<br>被动:你的幸运值+5.',
                        ja_tiandidao: '天地盗',
                        ja_tiandidao_info: '每轮出牌阶段限一次,你可以选择一名具有手牌或装备的角色,获得其两张牌,若如此做,你受到其对你造成的一点伤害.',
                        ja_tuitui: '推推',
                        ja_tuitui_info: '',
                        ja_piquan: '劈拳',
                        ja_piquan_info: '锁定技,当你使用【杀】对一名其他角色造成伤害后,若其没有<强制移动>标记,其获得一枚强制移动标记,若其具有<强制移动>标记,你对其造成相当于标记数量的伤害并移除标记.',
                        ja_fuquanbanghe: '払拳棒喝',
                        ja_fuquanbanghe_info: '出牌阶段限一次,你可以与一名其他角色进行一次拼点,若你赢,你令其获得一枚<强制移动>标记.',
                        ja_hajialasifengbao: '哈加拉斯风暴',
                        ja_hajialasifengbao_info: '锁定技,每当你造成一次伤害后,你计算与其他角色的距离时便-1.',
                        ja_kainazidezhenfeng: '凯纳兹的阵风',
                        ja_kainazidezhenfeng_info: '锁定技,你使用【杀】时可以额外选择两个目标.<br>被动:你的幸运值+8.',
                        ja_Paradiaso: '天堂',
                        ja_Paradiaso_info: '当一名角色即将受到锦囊伤害,且其未因为此技能使伤害增加或减少时,你可以选择令此伤害增加或减少1点.<br>被动:你的幸运值+2.',
                        ja_huanhuozhishi: '幻惑知识',
                        ja_huanhuozhishi_info: '当你攻击范围内的一名其他角色使用【无懈可击】以外的锦囊时,你可以弃置一张牌并取消此锦囊牌的所有目标.',
                    },
                };
                lib.config.all.characters.add('MA英雄战姬');
                lib.config.characters.add('MA英雄战姬');
                for (var i in QQQ.character) {
                    QQQ.character[i][4].add(`ext:MA英雄战姬/image/${i}.jpg`)
                }
                lib.translate['MA英雄战姬_character_config'] = `MA英雄战姬`;
                return QQQ;
            });
        },
        package: {
            card: {
                card: {
                    ja_weiliandebaozang: {
                        audio: true,
                        fullskin: true,
                        type: 'ja_baozang',
                        enable: true,
                        selectTarget: -1,
                        toself: true,
                        filterTarget(card, player, target) {
                            return target == player;
                        },
                        modTarget: true,
                        content() {
                            target.draw(5);
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
                                draw: 5,
                            },
                        },
                    },
                    ja_junzhulun: {
                        type: 'equip',
                        subtype: 'equip5',
                        skills: ['ja_junzhulun'],
                        ai: {
                            basic: {
                                equipValue: 7.5,
                                order: 7.5,
                                useful: 2,
                                value: 7.5,
                            },
                            result: {
                                target(player, target, card) {
                                    return get.equipResult(player, target, card.name);
                                },
                            },
                        },
                        fullskin: true,
                        enable: true,
                        selectTarget: -1,
                        filterTarget(card, player, target) {
                            return target == player;
                        },
                        modTarget: true,
                        allowMultiple: false,
                        content() {
                            if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                        },
                        toself: true,
                    },
                },
                translate: {
                    ja_weiliandebaozang: '威廉的宝藏',
                    ja_weiliandebaozang_info: '出牌阶段,对你使用.你摸五张牌.',
                    ja_junzhulun: '君主论',
                    ja_junzhulun_info: '你的手牌上限+2.当你造成一次伤害后,你可以令主公摸一张牌,当你受到一次伤害后,你可以令主公弃置一张手牌.',
                },
            },
            intro: "<span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>",
            author: '七七七七七七七',
            version: '1.0',
        },
    };
});

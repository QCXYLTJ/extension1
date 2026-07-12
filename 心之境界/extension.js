import { lib, game, ui, get, ai, _status } from '../../noname.js';
const extensionInfo = await lib.init.promises.json(`extension/心之境界/info.json`);
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '心之境界',
        content(config, pack) { },
        precontent() {
            game.kongfunc = function () {
                return game.kong;
            };
            game.kong = {
                set() {
                    return this;
                },
                get player() {
                    return game.me;
                }, //先声明后赋值的,后面调用会是underfined,所以用getter实时获取
                cards: [],
                result: {
                    cards: [],
                },
                gaintag: [],
                forResult() { },
            };
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '心之境界',
                    connect: true,
                    characterIntro: {
                        xzjj_lxy: '作者已经时日无多了,因为有幻想症,但还是感谢你们的游玩,也希望无名杀越来越好,也许我还想说什么,但是我在此!以言语不能达到的 心 传递给你!',
                        'xzjj_lingmengjiang2.0': '削弱后的灵梦酱,但是请一定不要动她的塞钱箱!',
                        xzjj_caoang: '饼将军,比比看谁杀敌更多!',
                    },
                    character: {
                        xzjj_zhangjiao: {
                            sex: 'male',
                            group: 'qun',
                            skills: ['xzjj_guidao', 'xinleiji', 'xzjj_yingbing', 'xzjj_huangtian'],
                            isZhugong: true,
                        },
                        xzjj_liuyan: {
                            sex: 'male',
                            group: 'qun',
                            skills: ['xzjj_tushe', 'xzjj_limu'],
                        },
                        xzjj_lxy: {
                            sex: 'female',
                            group: 'qun',
                            skills: ['xzjj_mengxin', 'xzjj_shangxin', 'xzjj_huanxiang', 'xzjj_jianxin', 'xzjj_guixin', 'xzjj_xinyi', 'xzjj_huanfeng', 'xzjj_huanxin', 'xzjj_xinzhilingwu', 'xzjj_huanxiangzhihu', 'xzjj_pormie', 'xzjj_xzjj', 'xzjj_xinzhishouyu', 'xzjj_第二条命', 'xzjj_攻击选择', 'xzjj_幻想道'],
                        },
                        xzjj_xushu: {
                            sex: 'male',
                            group: 'shu',
                            skills: ['xzjj_xingxia', 'xzjj_zhuhai', 'xzjj_jingyue', 'xzjj_jujian', 'xzjj_hanxin', 'xzjj_jueze'],
                        },
                        xzjj_liubei: {
                            sex: 'male',
                            hp: 5,
                            maxHp: 5,
                            group: 'shu',
                            skills: ['xzjj_shichou', 'xzjj_renhe', 'xzjj_zhangwu', 'xzjj_rende', 'xzjj_lxqm', 'xzjj_longnu_buff', 'xzjj_longnu_buff2', 'xzjj_wjlxz'],
                            isZhugong: true,
                        },
                        xzjj_lin: {
                            sex: 'female',
                            group: 'qun',
                            skills: ['xzjj_linren', 'xzjj_j_jianxin', 'xzjj_huanxiangqiji', 'xzjj_xinzhilingwu', 'xzjj_xzjj', 'xzjj_huanxiangshikong'],
                        },
                        xzjj_lingmengjiang: {
                            sex: 'female',
                            group: 'qun',
                            skills: ['xzjj_mianyi', 'xzjj_yinyangyu', 'xzjj_fengmozhen', 'xzjj_mengxiang', 'xzjj_huiluo', 'xzjj_yinyangyu_sha', 'xzjj_yinyangyu_shan'],
                        },
                        xzjj_maliang: {
                            sex: 'male',
                            group: 'shu',
                            skills: ['xzjj_namam', 'xzjj_mambing_2', 'xzjj_mambing2', 'yingyuan', 'xzjj_manbing', 'xzjj_zishu'],
                        },
                        xzjj_zhonghui: {
                            sex: 'male',
                            group: 'wei',
                            skills: ['xzjj_quanji', 'xzjj_zili', 'xzjj_zhenggong', 'xzjj_fashu'],
                        },
                        xzjj_caozhi: {
                            sex: 'male',
                            hp: 3,
                            maxHp: 3,
                            group: 'wei',
                            skills: ['xzjj_七步', 'xzjj_qibu', 'xzjj_jiushi1', 'xzjj_jiushi3', 'xzjj_jiushi2', 'xzjj_jiushi', 'xzjj_luoying', 'xzjj_luomei', 'xzjj_zjiushi', 'xzjj_luohua', 'chengzhang'],
                        },
                        xzjj_tb_zhangjiao: {
                            sex: 'male',
                            hp: 5,
                            maxHp: 5,
                            group: 'qun',
                            skills: ['xzjj_tianbing', 'xzjj_jz_huantian', 'xzjj_leihun', 'xinleiji', 'xinguidao', 'xzjj_tb_yingbing'],
                        },
                        'xzjj_lingmengjiang2.0': {
                            sex: 'female',
                            hp: 5,
                            maxHp: 5,
                            group: 'qun',
                            skills: ['xzjj_yinyangyu_sha', 'xzjj_yinyangyu_shan', 'xzjj_fengmozhen', 'xzjj_yinyangyu', 'xzjj_mianyi', 'xzjj_z_yinyang', 'xzjj_lingmengjiang_yinyang', 'xzjj_lingmeng', 'xzjj_qianxiang'],
                        },
                        觉: {
                            sex: 'female',
                            group: 'qun',
                            skills: ['xzjj_tianbian', 'zhuangdui_gong', 'xzjj_zhuandui1', 'xzjj_duxin', 'jyzongshi', 'hxxdzf1', 'hxxdzf2', 'hxxdzf3', 'hxxdzf5'],
                        },
                        xzjj_sunce: {
                            sex: 'male',
                            group: 'wu',
                            skills: ['zhiba', 'xzjj_hunzi', 'xzjj_jiang'],
                        },
                        xzjj_xuan: {
                            sex: 'female',
                            group: 'qun',
                            skills: ['xzjj_shu_xc', 'xzjj_wu_xiongcai', 'xiongcai'],
                        },
                        xzjj_xizhicai: {
                            sex: 'male',
                            group: 'wei',
                            skills: ['xzjj_tiandu', 'xzjj_xianfu', 'xzjj_chouce', 'xzjj_chiuce2', 'xzjj_tiandu2', 'xzjj_chouce3'],
                        },
                        xin_huangyueying: {
                            sex: 'female',
                            group: 'qun',
                            skills: ['xzjj_linglong', 'xzjj_linglong_f', 'xzjj_qicai', 'xzjj_qiaojiang', 'rejizhi'],
                        },
                        xzjj_zhugeliang: {
                            sex: 'male',
                            group: 'shu',
                            skills: ['xzjj_xingdeng', 'xzjj_qixing', 'xzjj_guanxing', 'xzjj_kuangfeng', 'xzjj_dawu', 'xzjj_bazhen', 'xzjj_kongchen'],
                        },
                        xzjj_zhoutai: {
                            sex: 'male',
                            hp: 5,
                            maxHp: 5,
                            group: 'wu',
                            skills: ['xzjj_fuchou', 'xzjj_buqu3', 'xzjj_buqu2', 'gzbuqu'],
                        },
                        xzjj_caoang: {
                            sex: 'male',
                            hp: 5,
                            maxHp: 5,
                            group: 'wei',
                            skills: ['xzjj_kangkai'],
                        },
                        xzjj_zhaoyun: {
                            sex: 'male',
                            hp: 3,
                            maxHp: 3,
                            group: 'shu',
                            skills: ['ollongdan', 'xzjj_longnu_zy', 'xzjj_longhun', 'xzjj_longxiang', 'xzjj_longzhi', 'xzjj_yyq', 'xzjj_ylj', 'xzjj_chongzhen1', 'xzjj_longxin'],
                        },
                        xzjj_fazheng: {
                            sex: 'male',
                            group: 'shu',
                            skills: ['xzjj_enyuan', 'xzjj_xiance'],
                        },
                        快乐一刻: {
                            sex: 'female',
                            group: 'qun',
                            skills: ['xzjj_幻想道', 'xzjj_gongming', 'xzjj_leiji', 'xzjj_tiandu'],
                        },
                        xzjj_xiao_cs: {
                            sex: 'female',
                            group: 'qun',
                            skills: ['xzjj_幻想改造', 'xzjj_双心', 'xzjj_wushuang0', 'xzjj_liyu', 'xzjj_cc_xiongzhi'],
                        },
                    },
                    skill: {
                        xzjj_guidao: {
                            audio: 'ext:心之境界/audio:true',
                            trigger: {
                                global: 'judge',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('he') > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('tiandao'), 'he').ai = function (card) {
                                    var trigger = _status.event.parent._trigger;
                                    var player = _status.event.player;
                                    var result = trigger.judge(card) - trigger.judge(trigger.player.judging[0]);
                                    var attitude = get.attitude(player, trigger.player);
                                    if (attitude == 0 || result == 0) return 0;
                                    if (attitude > 0) {
                                        return result;
                                    } else {
                                        return -result;
                                    }
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.respond(result.cards, 'highlight');
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.draw();
                                    player.$gain2(trigger.player.judging[0]);
                                    player.gain(trigger.player.judging[0]);
                                    trigger.player.judging[0] = result.cards[0];
                                    trigger.position.appendChild(result.cards[0]);
                                    game.log(trigger.player, '的判定牌改为', result.cards[0]);
                                }
                                ('step 3');
                            },
                            ai: {
                                tag: {
                                    rejudge: 1,
                                },
                                threaten: 1.5,
                            },
                        },
                        xzjj_yingbing: {
                            trigger: {
                                player: 'judgeEnd',
                            },
                            forced: true,
                            audio: 'ext:心之境界/audio:2',
                            content() {
                                player.chooseUseTarget('###是否发动【影兵】？###视为使用一张没有距离限制的【杀】', { name: 'sha' }, false, 'nodistance');
                            },
                            ai: {
                                threaten(player, target) {
                                    return 1.6;
                                },
                            },
                        },
                        xzjj_huangtian: {
                            audio: 'huangtian2',
                            audioname: ['zhangjiao', 're_zhangjiao'],
                            global: 'huangtian2',
                        },
                        xzjj_tushe: {
                            audio: 'ext:心之境界/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            filter(event, player) {
                                if (get.type(event.card) == 'equip') return false;
                                if (event.parent.triggeredTargets3.length > 1) return false;
                                return event.targets.length && !player.countCards('h', { type: 'delay' });
                            },
                            content() {
                                player.draw(trigger.targets.length);
                            },
                            ai: {
                                presha: true,
                                pretao: true,
                                threaten: 1.8,
                            },
                        },
                        xzjj_limu: {
                            mod: {
                                targetInRange(card, player, target) {
                                    if (player.countCards('j') && player.inRange(target)) {
                                        return true;
                                    }
                                },
                                cardUsable(card, player, num) {
                                    if (typeof num == 'number' && player.countCards('j') && card.name != 'jiu') {
                                        return Infinity;
                                    }
                                },
                                aiValue(player, card, num) {
                                    if (card.name == 'zhangba') return 15;
                                    if (player.getEquip('zhangba') && player.countCards('h') > 1 && ['shan', 'tao'].includes(card.name)) return 0;
                                    if (card.name == 'shan' || card.name == 'tao') return num / 2;
                                },
                            },
                            audio: 'ext:心之境界/audio:2',
                            enable: 'phaseUse',
                            discard: false,
                            filter(event, player) {
                                if (player.hasJudge('shandian')) return false;
                                return player.countCards('he', { color: 'red' }) > 0;
                            },
                            viewAs: {
                                name: 'shandian',
                            },
                            position: 'he',
                            filterCard(card, player, event) {
                                return get.color(card) == 'red' && player.canAddJudge({ name: 'shandian', cards: [card] });
                            },
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return player == target;
                            },
                            check(card) {
                                var player = _status.event.player;
                                if (!player.getEquip('zhangba') && player.countCards('h', 'sha') < 2) {
                                    if (
                                        player.countCards('h', function (cardx) {
                                            return cardx != card && cardx.name == 'shan';
                                        }) > 0
                                    )
                                        return 0;
                                    var damaged = player.maxHp - player.hp - 1;
                                    var ts = player.countCards('h', function (cardx) {
                                        return cardx != card && cardx.name == 'tao';
                                    });
                                    if (ts > 0 && ts > damaged) return 0;
                                }
                                if (card.name == 'shan') return 15;
                                if (card.name == 'tao') return 10;
                                return 9 - get.value(card);
                            },
                            onuse(links, player) {
                                var next = game.createEvent('limu_recover', false, _status.event.parent);
                                next.player = player;
                                next.setContent(function () {
                                    player.recover();
                                });
                            },
                            ai: {
                                result: {
                                    target: 1,
                                },
                                order: 12,
                                basic: {
                                    order: 1,
                                    useful: 1,
                                    value: 8,
                                },
                                tag: {
                                    skip: 'phaseUse',
                                },
                            },
                        },
                        xzjj_mengxin: {
                            marktext: '心',
                            intro: {
                                name: '梦心',
                                name2: '心',
                                content: '当前有#个<心>',
                            },
                            audio: 'ext:心之境界/audio:2',
                            trigger: {
                                global: 'gameDrawAfter',
                            },
                            forced: true,
                            content() {
                                player.chat('幻想就是我的力量');
                                player.addMark('xzjj_mengxin', 7);
                                player.addSkill('xzjj_mengxin_ai');
                            },
                            group: ['xzjj_mengxin_draw', 'xzjj_mengxin_damage'],
                        },
                        xzjj_jianxin: {
                            audio: 'ext:心之境界/audio:2',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('xzjj_jianxin'), '移去一个【心】或失去1点体力,令一名其他角色获得 界英姿 ', function (card, player, target) {
                                    return target;
                                }).ai = function (target) {
                                    var player = _status.event.player;
                                    if (player.storage.xzjj_mengxin > 2 || player.hp > 2) return get.attitude(player, target);
                                    return -1;
                                };
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    if (player.hasMark('xzjj_mengxin')) {
                                        player
                                            .chooseControl()
                                            .set('choiceList', ['流失一点体力', '移去一个<心>'])
                                            .set('ai', function () {
                                                if (player.hp > 2) return 0;
                                                return 1;
                                            });
                                    } else event._result = { index: 0 };
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.index == 1) {
                                    player.removeMark('xzjj_mengxin', 1);
                                    player.draw(2);
                                } else {
                                    player.loseHp();
                                    player.gainMaxHp();
                                }
                                player.chat('人心都隐藏的如此之深');
                                target.addSkill('reyingzi');
                                player.draw();
                                target.recover();
                            },
                        },
                        xzjj_guixin: {
                            audio: 'ext:心之境界/audio:2',
                            trigger: {
                                player: 'phaseJudgeBefore',
                            },
                            forced: true,
                            content() {
                                player.chat('我和你,都是同一颗心呢');
                                player.addMark('xzjj_mengxin', 2);
                                trigger.cancel();
                                game.log(player, '跳过了判定阶段');
                            },
                        },
                        xzjj_mengxin_ai: {
                            charlotte: true,
                            ai: {
                                filterDamage: true,
                                skillTagFilter(player, tag, arg) {
                                    if (!player.hasMark('xzjj_mengxin')) return false;
                                    if (
                                        !game.hasPlayer(function (current) {
                                            return current.hasSkill('xzjj_mengxin_draw');
                                        })
                                    )
                                        return false;
                                    if (arg && arg.player) {
                                        if (arg && arg.player.hasSkillTag('jueqing', false, player)) return false;
                                    }
                                },
                            },
                        },
                        xzjj_mengxin_draw: {
                            audio: 'ext:心之境界/audio:2',
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            forced: true,
                            filter(event, player) {
                                return !event.numFixed;
                            },
                            content() {
                                trigger.num++;
                                player.recover();
                            },
                            ai: {
                                threaten: 1.5,
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    if (player.hp < player.maxHp) return num + player.getDamagedHp();
                                },
                            },
                        },
                        xzjj_mengxin_damage: {
                            audio: 'ext:心之境界/audio:2',
                            trigger: {
                                player: ['damageBegin', 'loseHpBefore', 'loseMaxHpBefore'],
                            },
                            forced: true,
                            _priority: 100000000,
                            filter(event, player) {
                                return event.player.hasMark('xzjj_mengxin');
                            },
                            content() {
                                player.line(trigger.player, 'green');
                                if (trigger.name == 'damage') {
                                    trigger.cancel();
                                    trigger.player.removeMark('xzjj_mengxin', 1);
                                    player.draw(2);
                                    player.recover();
                                }
                            },
                        },
                        xzjj_pormie: {
                            audio: 'ext:心之境界/audio:2',
                            enable: 'phaseUse',
                            derivation: 'xzjj_shangxin_shoupai',
                            filter(event, player) {
                                return player.countMark('xzjj_shangxin') >= 2;
                            },
                            filterTarget(c, p, t) {
                                return !t.hasSkill('xzjj_shangxin_shoupai') && t != p;
                            },
                            selectTarget: 1,
                            async content(event, trigger, player) {
                                player.removeMark('xzjj_shangxin', 2);
                                event.target.addTempSkill('xzjj_shangxin_shoupai', 'phaseBefore');
                                event.target.loseMaxHp();
                                event.target.loseHp();
                            },
                            ai: {
                                order: 10,
                                result: {
                                    target: -1,
                                },
                            },
                            subSkill: {
                                equip: {
                                    ai: {
                                        unequip: true,
                                        skillTagFilter(player, tag, arg) {
                                            if (arg && arg.target && arg.target.hasSkill('ol_wuqian_targeted')) return true;
                                            return false;
                                        },
                                    },
                                },
                                targeted: {
                                    ai: {
                                        unequip2: true,
                                    },
                                },
                                target: {
                                    intro: {
                                        content: '无法打出或使用手牌',
                                    },
                                },
                            },
                        },
                        xzjj_shangxin: {
                            audio: 'ext:心之境界/audio:2',
                            marktext: '殇',
                            trigger: {
                                source: 'damageSource',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.name != 'damage' || event.num > 0;
                            },
                            content() {
                                player.chat('若不见你,殇之我心');
                                player.addMark('xzjj_shangxin', trigger.name == 'damage' ? trigger.num : 2);
                            },
                            intro: {
                                name: '殇心',
                                content: 'mark',
                            },
                        },
                        xzjj_xinzhilingwu: {
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - 2;
                                },
                                globalTo(from, to, distance) {
                                    return distance + 1;
                                },
                                selectTarget(card, player, range) {
                                    if (Array.isArray(range) && range[1] == -1) return;
                                    if (card.name == 'sha') range[1]++;
                                },
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + 2;
                                },
                                targetInRange(card, player, target, now) {
                                    var type = get.type(card);
                                    if (type == 'trick' || type == 'delay') return true;
                                },
                                canBeDiscarded(card) {
                                    if (get.type(card) == 'equip' && get.position(card) == 'e') return false;
                                },
                                canBeGained(card) {
                                    if (get.type(card) == 'equip' && get.position(card) == 'e') return false;
                                },
                                group: ['xzjj_xzjj'],
                            },
                        },
                        xzjj_shangxin_shoupai: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            _priority: 10,
                            mod: {
                                cardEnabled() {
                                    return false;
                                },
                                cardUsable() {
                                    return false;
                                },
                                cardRespondable() {
                                    return false;
                                },
                                cardSavable() {
                                    return false;
                                },
                            },
                            content() {
                                player.removeSkill('xzjj_shangxin_shoupai');
                            },
                        },
                        xzjj_duorui: {
                            audio: 'ext:心之境界/audio:2',
                            init(player, skill) {
                                if (!player.storage.xzjj_duorui) player.storage.xzjj_duorui = [];
                            },
                            trigger: {
                                source: 'damageSource',
                            },
                            filter(event, player) {
                                if (player.storage.xzjj_duorui.length) return false;
                                return player != event.player && event.player.isAlive() && _status.currentPhase == player;
                            },
                            check(event, player) {
                                if (player.countDisabled() < 5 && player.isDisabled(5)) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                event.skills = [];
                                var skills = trigger.player.skills.slice(0);
                                for (let i = 0; i < skills.length; i++) {
                                    var info = get.info(skills[i]);
                                    if (info != undefined && !info.charlotte && (!info.unique || info.gainable));
                                    event.skills.push(skills[i]);
                                }
                                if (player.countDisabled() < 5) {
                                    trigger.player.chooseToDisable().ai = function (event, player, list) {
                                        if (list.includes('equip5')) return 'equip5';
                                        return list.randomGet();
                                    };
                                }
                                ('step 1');
                                if (event.skills.length) {
                                    player
                                        .chooseControl(event.skills)
                                        .set('prompt', '请选择要获得的技能')
                                        .set('ai', function () {
                                            return event.skills.randomGet();
                                        });
                                } else event.finish();
                                ('step 2');
                                player.addTempSkill(result.control, { player: 'phaseBefore' });
                                player.popup(result.control, 'thunder');
                                player.storage.xzjj_duorui = [result.control];
                                player.storage.xzjj_duorui_player = trigger.player;
                                trigger.player.storage.xzjj_duorui = [result.control];
                                trigger.player.addTempSkill('xzjj_duorui1', { player: 'phaseAfter' });
                                game.log(player, '获得了技能', '#g【' + get.translation(result.control) + '】');
                            },
                            group: ['duorui_clear'],
                        },
                        xzjj_duorui1: {
                            init(player, skill) {
                                player.disableSkill(skill, player.storage.xzjj_duorui);
                            },
                            onremove(player, skill) {
                                player.enableSkill(skill);
                            },
                            mark: true,
                            charlotte: true,
                            intro: {
                                content(storage, player, skill) {
                                    var list = [];
                                    for (var i in player.disabledSkills) {
                                        if (player.disabledSkills[i].includes(skill)) list.push(i);
                                    }
                                    if (list.length) {
                                        var str = '失效技能:';
                                        for (let i = 0; i < list.length; i++) {
                                            if (lib.translate[list[i] + '_info']) str += get.translation(list[i]) + '、';
                                        }
                                        return str.slice(0, str.length - 1);
                                    }
                                },
                            },
                        },
                        xzjj_xinyi: {
                            trigger: {
                                player: ['damageBegin4', 'loseHpBegin4'],
                            },
                            forced: true,
                            audio: 'ext:心之境界/audio:1',
                            filter(event, player) {
                                return event.num > 1;
                            },
                            content() {
                                trigger.num = 1;
                                player.draw();
                                player.recover();
                            },
                        },
                        xzjj_huanxiang: {
                            audio: 'ext:心之境界/audio:true',
                            marktext: '幻',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.name != 'damage' || event.num > 0;
                            },
                            content() {
                                player.chat('时间之少,不能阻止我的幻想');
                                player.addMark('xzjj_huanxiang', trigger.name == 'damage' ? trigger.num : 2);
                            },
                            intro: {
                                name: '幻想',
                                content: 'mark',
                            },
                            ai: {
                                combo: 'ol_shenfen',
                                maixie: true,
                                maixie_hp: true,
                            },
                        },
                        xzjj_huanfeng: {
                            audio: 'ext:心之境界/audio:true',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countMark('xzjj_huanxiang') >= 2;
                            },
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            content() {
                                player.removeMark('xzjj_huanxiang', 2);
                                target.addSkill('xzjj_jsfengyin');
                                player.gain(3, target, true);
                                player.addTempSkill('wansha', 'phaseAfter');
                                target.damage();
                            },
                            subSkill: {
                                equip: {
                                    ai: {
                                        unequip: true,
                                        skillTagFilter(player, tag, arg) {
                                            if (arg && arg.target && arg.target.hasSkill('ol_wuqian_targeted')) return true;
                                            return false;
                                        },
                                    },
                                },
                                targeted: {
                                    ai: {
                                        unequip2: true,
                                    },
                                },
                                target: {
                                    intro: {
                                        content: '获得无双且$防具失效直到回合结束',
                                    },
                                },
                            },
                        },
                        xzjj_huanxin: {
                            audio: 'ext:心之境界/audio:true',
                            enable: 'phaseUse',
                            derivation: 'xzjj_duorui',
                            filter(event, player) {
                                return player.countMark('xzjj_mengxin') >= 2 && player.countMark('xzjj_shangxin') >= 2 && player.countMark('xzjj_huanxiang') >= 2;
                            },
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            content() {
                                player.removeMark('xzjj_mengxin', 2);
                                player.removeMark('xzjj_shangxin', 2);
                                player.removeMark('xzjj_huanxiang', 2);
                                player.addSkill('xzjj_duorui');
                                player.addSkill('xzjj_xinqi');
                                target.discard(target.getCards('hej'));
                                player.draw(3);
                            },
                            subSkill: {
                                equip: {
                                    ai: {
                                        unequip: true,
                                        skillTagFilter(player, tag, arg) {
                                            if (arg && arg.target && arg.target.hasSkill('ol_wuqian_targeted')) return true;
                                            return false;
                                        },
                                    },
                                },
                                targeted: {
                                    ai: {
                                        unequip2: true,
                                    },
                                },
                                target: {
                                    intro: {
                                        content: '获得无双且$防具失效直到回合结束',
                                    },
                                },
                            },
                        },
                        xzjj_xinqi: {
                            audio: 'ext:心之境界/audio:2',
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.type(event.card) == 'trick';
                            },
                            content() {
                                'step 0';
                                if (player.hasMark('xzjj_mengxin')) {
                                    player.chooseControlList(['回复一点体力', '摸一张牌'], true).set('ai', function (event, player) {
                                        if (player.hp < 4) return 0;
                                        if (player.hp + player.countCards('h', 'tao') > 3) return 1;
                                        return 0;
                                    });
                                } else {
                                    player.loseHp();
                                    event.finish();
                                }
                                ('step 1');
                                if (result.index == 0) {
                                    player.recover();
                                } else {
                                    player.draw();
                                }
                            },
                            ai: {
                                effect: {
                                    player(card, player) {
                                        if (get.type(card) == 'trick' && get.value(card) < 6) {
                                            return [0, -2];
                                        }
                                    },
                                },
                            },
                        },
                        xzjj_huanxiangzhihu: {
                            init(player) {
                                player.skills.add('fengyin');
                                player.skills.add('baiban');
                                player.storage.clearSkillsfuc = player.clearSkills;
                                player.clearSkills = game.kongfunc;
                            },
                            onremove(player) {
                                player.skills.remove('fengyin');
                                player.skills.remove('baiban');
                                player.clearSkills = player.storage.clearSkillsfuc;
                                delete player.storage.clearSkillsfuc;
                            },
                            nobracket: true,
                            charlotte: true,
                            forced: true,
                        },
                        xzjj_xzjj: {
                            trigger: {
                                player: 'equipBegin',
                            },
                            forced: true,
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
                        },
                        xzjj_hanxin: {
                            audio: 'ext:心之境界/audio:2',
                            trigger: {
                                player: 'damageBegin4',
                            },
                            forced: true,
                            check(event, player) {
                                if (player == event.player) return true;
                                return false;
                            },
                            filter(event, player) {
                                return get.type(event.card, 'trick') == 'trick';
                            },
                            content() {
                                trigger.cancel();
                            },
                            ai: {
                                notrick: true,
                                notricksource: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.type(card) == 'trick' && get.tag(card, 'damage')) {
                                            return 'zeroplayertarget';
                                        }
                                    },
                                    player(card, player, target, current) {
                                        if (get.type(card) == 'trick' && get.tag(card, 'damage')) {
                                            return 'zeroplayertarget';
                                        }
                                    },
                                },
                            },
                        },
                        xzjj_jujian: {
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            audio: 'ext:心之境界/audio:2',
                            filter(event, player) {
                                return player.countCards('he') > player.countCards('he', { type: 'basic' });
                            },
                            content() {
                                'step 0';
                                player.chooseCardTarget({
                                    filterTarget(card, player, target) {
                                        return (target = target);
                                    },
                                    filterCard(card, player) {
                                        return get.type(card) != 'basic' && lib.filter.cardDiscardable(card, player);
                                    },
                                    ai1(card) {
                                        if (get.tag(card, 'damage') && get.type(card) == 'trick') {
                                            return 20;
                                        }
                                        return 9 - get.value(card);
                                    },
                                    ai2(target) {
                                        var att = get.attitude(_status.event.player, target);
                                        if (att > 0) {
                                            if (target.isTurnedOver()) att += 3;
                                            if (target.hp == 1) att += 3;
                                        }
                                        return att;
                                    },
                                    position: 'he',
                                    prompt: get.prompt2('xzjj_jujian'),
                                });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    player.discard(result.cards);
                                    if (target.hp == target.maxHp && !target.isTurnedOver() && !target.isLinked()) {
                                        target.draw(4);
                                        event.finish();
                                    } else {
                                        var controls = ['draw_card'];
                                        if (target.hp < target.maxHp) {
                                            controls.push('recover_hp');
                                        }
                                        if (target.isLinked() | target.isTurnedOver()) {
                                            controls.push('reset_character');
                                        }
                                        target.chooseControl(controls).ai = function () {
                                            if (target.isTurnedOver()) {
                                                return 'reset_character';
                                            } else if (target.hp == 1 && target.maxHp > 2) {
                                                return 'recover_hp';
                                            } else if (target.hp == 2 && target.maxHp > 2 && target.countCards('h') > 1) {
                                                return 'recover_hp';
                                            } else {
                                                return 'draw_card';
                                            }
                                        };
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                event.control = result.control;
                                switch (event.control) {
                                    case 'recover_hp':
                                        event.target.recover(2);
                                        event.finish();
                                        break;
                                    case 'draw_card':
                                        event.target.draw(4);
                                        event.finish();
                                        break;
                                    case 'reset_character':
                                        if (event.target.isTurnedOver()) event.target.turnOver();
                                        break;
                                }
                                ('step 3');
                                if (event.control == 'reset_character' && event.target.isLinked()) {
                                    event.target.link();
                                    player.draw(2);
                                }
                            },
                            ai: {
                                expose: 0.2,
                                threaten: 1.4,
                            },
                        },
                        xzjj_jingyue: {
                            enable: 'phaseUse',
                            usable: 1,
                            audio: 'ext:心之境界/audio:2',
                            filterCard: true,
                            position: 'he',
                            selectCard: [1, Infinity],
                            check(card) {
                                var player = get.owner(card);
                                if (get.type(card) == 'trick') return 10;
                                if (player.countCards('h') - player.hp - ui.selected.cards.length) {
                                    return 8 - get.value(card);
                                }
                                return 4 - get.value(card);
                            },
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            content() {
                                target.draw(cards.length);
                                if (cards.length >= 3) {
                                    if (get.type(cards[0], 'trick') == get.type(cards[1], 'trick') && get.type(cards[0], 'trick') == get.type(cards[2], 'trick')) {
                                        player.recover();
                                        player.draw(2);
                                    }
                                }
                            },
                            ai: {
                                expose: 0.2,
                                order: 1,
                                result: {
                                    target: 1,
                                },
                            },
                        },
                        xzjj_zhuhai: {
                            trigger: {
                                global: 'phaseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player.isAlive() && event.player.getStat('damage') && lib.filter.targetEnabled({ name: 'sha' }, player, event.player) && player.hasSha();
                            },
                            content() {
                                player.draw(2);
                                player
                                    .chooseToUse({ name: 'sha' }, '诛害:是否对' + get.translation(trigger.player) + '使用一张杀？')
                                    .set('complexSelect', true)
                                    .set('filterTarget', function (card, player, target) {
                                        if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                                        return lib.filter.targetEnabled.apply(this, arguments);
                                    })
                                    .set('sourcex', trigger.player);
                            },
                        },
                        xzjj_xingxia: {
                            audio: 'ext:心之境界/audio:true',
                            trigger: {
                                player: 'shaBegin',
                            },
                            logTarget: 'target',
                            _priority: 100000000,
                            forced: true,
                            filter(event, player) {
                                return event.target.countCards('he');
                            },
                            content() {
                                trigger.target.chooseToDiscard(2, 'he', true);
                            },
                            group: ['xzjj_xingxia1'],
                        },
                        xzjj_xingxia1: {
                            audio: 'ext:心之境界/audio:2',
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                trigger.num++;
                            },
                        },
                        xzjj_jueze: {
                            audio: 'ext:心之境界/audio:2',
                            juexingji: true,
                            trigger: {
                                player: 'phaseAfter',
                            },
                            filter(event, player) {
                                return player.getStat('kill') > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('xzjj_jueze'), '是成为侠客,行侠仗义,还是成为谋士,智定天下？此刻由你选择!', function (card, player, target) {
                                    return target;
                                }).ai = function (target) {
                                    var player = _status.event.player;
                                    if (player.hp <= 2) return get.attitude(player, target);
                                    return -1;
                                };
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    if (player.hasSkill('xzjj_xingxia')) {
                                        player
                                            .chooseControl()
                                            .set('choiceList', ['选择成为谋士', '选择成为侠客'])
                                            .set('ai', function () {
                                                if (player.hp > 2) return 0;
                                                return 1;
                                            });
                                    } else event._result = { index: 0 };
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.index == 1) {
                                    player.removeSkill('xzjj_jujian');
                                    player.addSkill('xzjj_xushu_jianxin');
                                    player.addSkill('xzjj_xiayixiaohao');
                                    player.addSkill('xzjj_yinxia');
                                    player.addSkill('xzjj_xushu_jianxin2');
                                    player.gainMaxHp();
                                    player.recover(3);
                                } else {
                                    player.removeSkill('xzjj_xingxia');
                                    player.addSkill('xzjj_qice');
                                    player.addSkill('xzjj_jianyan');
                                    player.gainMaxHp();
                                    player.recover(4);
                                }
                                player.draw(5);
                                player.removeSkill('xzjj_jueze');
                            },
                        },
                        xzjj_jianyan: {
                            audio: 'ext:心之境界/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            delay: false,
                            filter(event, player) {
                                return game.hasPlayer(function (current) { });
                            },
                            content() {
                                'step 0';
                                player.chooseControl(['red', 'black', 'basic', 'trick', 'equip']).set('ai', function () {
                                    var player = _status.event.player;
                                    if (!player.hasShan()) return 'basic';
                                    if (player.countCards('e') <= 1) return 'equip';
                                    if (player.countCards('h') > 2) return 'trick';
                                    return 'red';
                                });
                                ('step 1');
                                event.card = get.cardPile(function (card) {
                                    if (get.color(card) == result.control) return true;
                                    if (get.type(card, 'trick') == result.control) return true;
                                    return false;
                                }, 'cardPile');
                                if (!event.card) {
                                    event.finish();
                                    return;
                                }
                                player.showCards([event.card]);
                                ('step 2');
                                player
                                    .chooseTarget(true, '选择一名男性角色送出' + get.translation(event.card), function (card, player, target) { })
                                    .set('ai', function (target) {
                                        var att = get.attitude(_status.event.player, target);
                                        if (_status.event.neg) return -att;
                                        return att;
                                    })
                                    .set('neg', get.value(event.card, player, 'raw') < 0);
                                ('step 3');
                                player.line(result.targets, 'green');
                                result.targets[0].gain(event.card, 'gain2');
                                player.draw();
                            },
                            ai: {
                                order: 9,
                                result: {
                                    player(player) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return current.sex == 'male' && get.attitude(player, current) > 0;
                                            })
                                        )
                                            return 2;
                                        return 0;
                                    },
                                },
                                threaten: 1.2,
                            },
                        },
                        xzjj_xiayi: {
                            audio: 'ext:心之境界/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            multitarget: true,
                            targetprompt: ['受到伤害', '回复体力'],
                            filterTarget: true,
                            selectTarget: 2,
                            content() {
                                targets[0].damage();
                                targets[1].recover();
                            },
                        },
                        xzjj_qice: {
                            trigger: {
                                player: ['phaseEnd', 'phaseBefore', 'changeHp'],
                            },
                            nobracket: true,
                            forced: true,
                            content() {
                                var c = get.typeCard('trick');
                                var t = lib.translate;
                                var l = [];
                                var w = [
                                    ['伤', '害'],
                                    ['弃', '牌'],
                                ][game.roundNumber % 2 == 0 ? 1 : 0];
                                for (let i = 0; i < c.length; i++) {
                                    var str = t[c[i] + '_info'];
                                    for (var j = 0; j < str.length; j++) {
                                        if (str[j] == w[0] && str[j + 1] == w[1]) {
                                            l.push(c[i]);
                                            break;
                                        }
                                    }
                                }
                                var card = game.createCard(l.randomGet());
                                player.gain(card, 'gain2');
                            },
                            mod: {
                                ignoredHandcard(card, player) {
                                    if (get.type(card, 'trick') == 'trick') return true;
                                },
                            },
                        },
                        xzjj_xushu_jianxin: {
                            audio: 'ext:心之境界/audio:2',
                            marktext: '心',
                            trigger: {
                                source: 'damageSource',
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.name != 'damage' || event.num > 0;
                            },
                            content() {
                                player.addMark('xzjj_xushu_jianxin', trigger.name == 'damage' ? trigger.num : 2);
                            },
                            intro: {
                                name: '剑心',
                                content: 'mark',
                            },
                        },
                        xzjj_xiayixiaohao: {
                            audio: 'ext:心之境界/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.hasMark('xzjj_xushu_jianxin');
                            },
                            content() {
                                player.removeMark('xzjj_xushu_jianxin', 2);
                                player.addTempSkill('xzjj_xiayi');
                            },
                        },
                        xzjj_yinxia: {
                            trigger: {
                                player: 'phaseJudgeBegin',
                            },
                            content() {
                                player.removeMark('xzjj_xushu_jianxin', 1);
                                player.discard(player.getCards('j').randomGet());
                            },
                            filter(event, player) {
                                return player.countCards('j') > 0 && player.hasMark('xzjj_xushu_jianxin') >= 1;
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.type(card) == 'delay' && target.countCards('j') == 0) return 0.1;
                                    },
                                },
                            },
                        },
                        xzjj_xushu_jianxin2: {
                            audio: 'ext:心之境界/audio:true',
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            content() {
                                player.gain(game.createCard('sha'));
                                player.draw();
                            },
                        },
                        xzjj_rende: {
                            audio: 'ext:心之境界/audio:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('h') && game.hasPlayer((current) => get.info('rerende').filterTarget(null, player, current));
                            },
                            filterTarget(card, player, target) {
                                if (player == target) return false;
                                return !player.getStorage('rerende_targeted').includes(target);
                            },
                            filterCard: true,
                            selectCard: [1, Infinity],
                            discard: false,
                            lose: false,
                            delay: false,
                            check(card) {
                                if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') return 0;
                                if (!ui.selected.cards.length && card.name == 'du') return 20;
                                var player = get.owner(card);
                                if (ui.selected.cards.length >= Math.max(2, player.countCards('h') - player.hp)) return 0;
                                if (player.hp == player.maxHp || player.storage.rerende < 0 || player.countCards('h') <= 1) {
                                    var players = game.filterPlayer();
                                    for (var i = 0; i < players.length; i++) {
                                        if (players[i].hasSkill('haoshi') && !players[i].isTurnedOver() && !players[i].hasJudge('lebu') && get.attitude(player, players[i]) >= 3 && get.attitude(players[i], player) >= 3) {
                                            return 11 - get.value(card);
                                        }
                                    }
                                    if (player.countCards('h') > player.hp) return 10 - get.value(card);
                                    if (player.countCards('h') > 2) return 6 - get.value(card);
                                    return -1;
                                }
                                return 10 - get.value(card);
                            },
                            async content(event, trigger, player) {
                                const { target, cards, name } = event;
                                player.addTempSkill(name + '_targeted', 'phaseUseAfter');
                                player.markAuto(name + '_targeted', [target]);
                                let num = 0;
                                player.getHistory('lose', (evt) => {
                                    if (evt.getParent(2).name == name) num += evt.cards.length;
                                });
                                await player.give(cards, target);
                                const list = get.inpileVCardList((info) => {
                                    return get.type(info[2]) == 'basic' && player.hasUseTarget({ name: info[2], nature: info[3] }, null, true);
                                });
                                if (num < 2 && num + cards.length > 1 && list.length) {
                                    const { links } = await player
                                        .chooseButton(['是否视为使用一张基本牌？', [list, 'vcard']])
                                        .set('ai', (button) => {
                                            return get.player().getUseValue({ name: button.link[2], nature: button.link[3] });
                                        })
                                        .forResult();
                                    if (!links?.length) return;
                                    await player.chooseUseTarget({ name: links[0][2], nature: links[0][3] }, true);
                                }
                            },
                            ai: {
                                fireAttack: true,
                                order(skill, player) {
                                    if (player.hp < player.maxHp && player.storage.rerende < 2 && player.countCards('h') > 1) {
                                        return 10;
                                    }
                                    return 4;
                                },
                                result: {
                                    target(player, target) {
                                        if (target.hasSkillTag('nogain')) return 0;
                                        if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
                                            if (target.hasSkillTag('nodu')) return 0;
                                            return -10;
                                        }
                                        if (target.hasJudge('lebu')) return 0;
                                        var nh = target.countCards('h');
                                        var np = player.countCards('h');
                                        if (player.hp == player.maxHp || player.storage.rerende < 0 || player.countCards('h') <= 1) {
                                            if (nh >= np - 1 && np <= player.hp && !target.hasSkill('haoshi')) return 0;
                                        }
                                        return Math.max(1, 5 - nh);
                                    },
                                },
                                effect: {
                                    target_use(card, player, target) {
                                        if (player == target && get.type(card) == 'equip') {
                                            if (player.countCards('e', { subtype: get.subtype(card) })) {
                                                if (
                                                    game.hasPlayer(function (current) {
                                                        return current != player && get.attitude(player, current) > 0;
                                                    })
                                                ) {
                                                    return 0;
                                                }
                                            }
                                        }
                                    },
                                },
                                threaten: 0.8,
                            },
                            subSkill: {
                                targeted: {
                                    onremove: true,
                                    charlotte: true,
                                },
                            },
                        },
                        xzjj_longnu: {
                            mark: true,
                            marktext: '龙',
                            intro: {
                                content(storage, player, skill) {
                                    if (player.storage.xzjj_longnu == true) return '出牌阶段开始时,你可以加1点体力上限并摸2张牌,本回合你可以将手牌当做杀使用或打出,且无使用次数限制';
                                    return '出牌阶段开始时,你可以回复一点体力并摸2张牌,本回合你可以将手牌当做杀使用或打出,且无距离限制';
                                },
                            },
                            audio: 'ext:心之境界/audio:2',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            content() {
                                if (player.storage.xzjj_longnu == true) {
                                    player.storage.xzjj_longnu = false;
                                    player.gainMaxHp();
                                    player.draw(2);
                                    player.addTempSkill('xzjj_wcsxz', { player: 'phaseAfter' });
                                    player.addTempSkill('xzjj_longnu_buff1', { player: 'phaseAfter' });
                                    player.addTempSkill('xzjj_longnu_buff2', { player: 'phaseAfter' });
                                } else {
                                    player.storage.xzjj_longnu = true;
                                    player.recover();
                                    player.draw(2);
                                    player.addTempSkill('xzjj_wjlxz', { player: 'phaseAfter' });
                                    player.addTempSkill('xzjj_longnu_buff1', { player: 'phaseAfter' });
                                    player.addTempSkill('xzjj_longnu_buff2', { player: 'phaseAfter' });
                                }
                            },
                        },
                        xzjj_zhangwu: {
                            global: 'boss_zhangwu_ai',
                            trigger: {
                                player: 'damageEnd',
                            },
                            check(event, player) {
                                return event.source && event.source.isIn() && get.damageEffect(event.source, player, player) > 0;
                            },
                            filter(event, player) {
                                return event.source && event.source.isAlive();
                            },
                            forced: true,
                            logTarget: 'source',
                            content() {
                                'step 0';
                                player
                                    .chooseToDiscard(get.prompt('xzjj_zhangwu', trigger.source), 'he', [1, Infinity])
                                    .set('ai', function (card) {
                                        if (get.attitude(player, trigger.source) < 0) return 8 - get.value(card);
                                        return 0;
                                    }) //QQQ
                                    ('step 1');
                                if (result.bool) {
                                    var num = result.cards.length;
                                    var cnum = get.cnNumber(num);
                                    event.num = num;
                                    trigger.source.chooseToDiscard('he', '章武:弃置' + cnum + '张牌,或取消并受到' + cnum + '点伤害', num).set('ai', function (card) {
                                        if (!trigger.source.hasSkillTag('nodamage')) return 10 - get.value(card);
                                        return 0;
                                    });
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (!result.bool) {
                                    trigger.source.damage(event.num);
                                }
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage') && get.attitude(target, player) < 0 && player.countCards('he') < target.countCards('he')) {
                                            return [0, 2];
                                        }
                                    },
                                },
                            },
                        },
                        xzjj_renhe: {
                            audio: 'ext:心之境界/audio:2',
                            trigger: {
                                global: ['phaseUseBegin', 'phaseAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player && event.player.countCards('h') >= 0;
                            },
                            content() {
                                'step 0';
                                trigger.player.chooseCard('交给' + get.translation(player) + '1张手牌', true).ai = function (card) {
                                    if (get.attitude(trigger.player, player) > 0) {
                                        return get.value(card);
                                    } else {
                                        return -get.value(card);
                                    }
                                };
                                ('step 1');
                                if (result.bool) {
                                    trigger.player.$give(1, player);
                                    player.gain(result.cards[0]);
                                }
                            },
                        },
                        //出牌阶段限1次,你可以弃置1张手牌并展示牌堆顶的X+1张牌,令1名其他角色选择1项:弃置1张与之均不同类别的牌,令你获得这些牌;或受到你造成的X点伤害并获得其中1张牌,你获得其余的牌.(X为你的已损失体力)
                        xzjj_shichou: {
                            audio: 'ext:心之境界/audio:2',
                            usable: 1,
                            srlose: true,
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            check(card) {
                                return 7 - get.value(card);
                            },
                            filterCard: true,
                            content() {
                                'step 0';
                                var num = player.maxHp - player.hp;
                                event.cards1 = get.cards(4);
                                player.showCards(event.cards1);
                                event.types = [];
                                for (let i = 0; i < event.cards1.length; i++) {
                                    event.types.add(get.type(event.cards1[i], 'trick'));
                                }
                                event.dialog = ui.create.dialog('弃置1张与' + get.translation(player) + '弃置的牌类别均不同的牌,让' + get.translation(player) + '获得' + get.translation(event.cards1) + '或受到来自' + get.translation(player) + '的1点伤害并获得其中1种类别的牌.', 'hidden');
                                event.dialog.classList.add('noselect');
                                event.dialog.add(event.cards1);
                                ('step 1');
                                player.chooseTarget(function (card, player, target) {
                                    return player != target;
                                }, true).ai = function (target) {
                                    return get.attitude(player, target) < 0;
                                };
                                ('step 2');
                                event.target = result.targets[0];
                                player.line(event.target);
                                event.target.chooseToDiscard(event.dialog, function (card) {
                                    //QQQ
                                    return !event.types.includes(get.type(card, 'trick'));
                                }).ai = function (card) {
                                    if (event.target.isTurnedOver()) return -1;
                                    return 8 - get.value(card);
                                };
                                ('step 3');
                                if (result.bool) {
                                    player.gain(event.cards1);
                                    event.finish();
                                } else {
                                    event.target.damage(num);
                                    var dialog = ui.create.dialog('誓仇:选择1张的卡牌获得之', event.cards1);
                                    event.target.chooseButton([1], dialog, true).filterButton = function (button) {
                                        for (let i = 0; i < ui.selected.buttons.length; i++) {
                                            if (get.type(button.link) != get.type(ui.selected.buttons[i].link)) return false;
                                        }
                                        return true;
                                    };
                                }
                                ('step 4');
                                var cards2 = [];
                                for (let i = 0; i < result.buttons.length; i++) {
                                    cards2.push(result.buttons[i].link);
                                    event.cards1.remove(result.buttons[i].link);
                                }
                                event.target.gain(cards2);
                                event.target.$gain(cards2);
                                if (event.cards1.length) {
                                    player.gain(event.cards1);
                                    player.$gain(event.cards1);
                                }
                            },
                            ai: {
                                order: 4,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        xzjj_lxqm: {
                            trigger: {
                                player: 'shaBegin',
                            },
                            _priority: 7,
                            audio: 'ext:心之境界/audio:true',
                            logTarget: 'target',
                            content() {
                                'step 0';
                                player.storage.achieve_cxsgj = true;
                                trigger.target.chooseToDiscard('弃置一张手牌,或令' + get.translation(player) + '摸一张牌').set('ai', function (card) {
                                    var trigger = _status.event.getTrigger();
                                    return -get.attitude(trigger.target, trigger.player) - get.value(card);
                                });
                                ('step 1');
                                if (result.bool == false) player.draw();
                            },
                        },
                        xzjj_xiaoxiong: {
                            trigger: {
                                global: 'useCardAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                var type = get.type(event.card, 'trick');
                                return event.player != player && (type == 'basic' || type == 'trick');
                            },
                            content() {
                                player.gain(game.createCard(trigger.card), 'gain2');
                            },
                            group: 'xiaoxiong_damage',
                            subSkill: {
                                damage: {
                                    trigger: {
                                        global: 'phaseJieshuBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player != player && event.player.countUsed() == 0;
                                    },
                                    logTarget: 'player',
                                    content() {
                                        trigger.player.damage();
                                    },
                                },
                            },
                        },
                        xzjj_longnu_buff: {
                            trigger: {
                                player: 'useCardBefore',
                            },
                            filter(event, player) {
                                return event.card != undefined && event.card.name == 'sha' && _status.currentPhase == player;
                            },
                            content() {
                                'step 0';
                                player.chooseControl('雷', '火', '普通').set('prompt', '请选择目标属性').ai = function (event, player) {
                                    return '火';
                                };
                                ('step 1');
                                if (result.control != undefined) player.popup(result.control);
                                if (result.control == '火') {
                                    trigger.card.nature = 'fire';
                                }
                                if (result.control == '雷') {
                                    trigger.card.nature = 'thunder';
                                }
                                if (result.control == '普通') {
                                    delete trigger.card.nature;
                                }
                                ('step 2');
                                player.chooseControl('♥️︎', '♦️︎', '♠️︎', '♣️︎').set('prompt', '请选择目标花色').ai = function (event, player) {
                                    return '♥️︎';
                                };
                                ('step 3');
                                if (result.control != undefined) {
                                    player.popup(result.control);
                                    var suit = 'heart';
                                    if (result.control == '♥️︎') suit = 'heart';
                                    if (result.control == '♦️︎') suit = 'diamond';
                                    if (result.control == '♠️︎') suit = 'spade';
                                    if (result.control == '♣️︎') suit = 'club';
                                    trigger.card.suit = suit;
                                }
                            },
                        },
                        xzjj_longnu_buff2: {
                            audio: 'ext:心之境界/audio:true',
                            enable: ['chooseToRespond', 'chooseToUse'],
                            filterCard: true,
                            viewAs: {
                                name: 'sha',
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('h')) return false;
                            },
                            prompt: '将一张手牌当作【杀】使用或打出',
                            ai: {
                                basic: {
                                    useful: [5, 1],
                                    value: [5, 1],
                                },
                                order(item) {
                                    if (_status.event.player.hasSkillTag('presha', true, null, true)) return 10;
                                    if (lib.linked.includes(get.nature(item))) return 3.1;
                                    return 3;
                                },
                                result: {
                                    target(player, target, card, isLink) {
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
                            },
                        },
                        xzjj_wjlxz: {
                            mod: {
                                targetInRange(card, player, target, now) {
                                    return true;
                                },
                            },
                        },
                        xzjj_wcsxz: {
                            mod: {
                                cardUsable(card, player, num) {
                                    return Infinity;
                                },
                            },
                        },
                        xzjj_linren: {
                            audio: 'ext:心之境界/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.parent.triggeredTargets3.length > 1) return false;
                                if (!player.isPhaseUsing()) return false;
                                if (!['basic', 'trick'].includes(get.type(event.card))) return false;
                                if (get.tag(event.card, 'damage')) return true;
                                return false;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('xzjj_linren'), function (card, player, target) {
                                        return _status.event.targets.includes(target);
                                    })
                                    .set('ai', function (target) {
                                        return 2 - get.attitude(_status.event.player, target);
                                    })
                                    .set('targets', trigger.targets);
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    event.choice = {
                                        basic: false,
                                        trick: false,
                                        equip: false,
                                    };
                                    player.chooseBool('是否押基本牌？').ai = function (event, player) {
                                        var rand = 0.95;
                                        if (!target.countCards('h', { type: ['basic'] })) rand = 0.05;
                                        if (!target.countCards('h')) rand = 0;
                                        return Math.random() < rand ? true : false;
                                    };
                                } else {
                                    player.getStat('triggerSkill').xzjj_linren--;
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    event.choice.basic = true;
                                }
                                player.chooseBool('是否押锦囊牌？').ai = function (event, player) {
                                    var rand = 0.9;
                                    if (!target.countCards('h', { type: ['trick', 'delay'] })) rand = 0.1;
                                    if (!target.countCards('h')) rand = 0;
                                    return Math.random() < rand ? true : false;
                                };
                                ('step 3');
                                if (result.bool) {
                                    event.choice.trick = true;
                                }
                                player.chooseBool('是否押装备牌？').ai = function (event, player) {
                                    var rand = 0.75;
                                    if (!target.countCards('h', { type: ['equip'] })) rand = 0.25;
                                    if (!target.countCards('h')) rand = 0;
                                    return Math.random() < rand ? true : false;
                                };
                                ('step 4');
                                if (result.bool) {
                                    event.choice.equip = true;
                                }
                                var reality = {
                                    basic: false,
                                    trick: false,
                                    equip: false,
                                };
                                var he = target.getCards('h');
                                for (let i = 0; i < he.length; i++) {
                                    reality[get.type(he[i], 'trick')] = true;
                                }
                                event.num = 0;
                                var tl = ['basic', 'trick', 'equip'];
                                for (let i = 0; i < tl.length; i++) {
                                    if (event.choice[tl[i]] == reality[tl[i]]) event.num++;
                                }
                                ('step 5');
                                player.popup('猜对' + get.cnNumber(event.num) + '项');
                                game.log(player, '猜对了' + get.cnNumber(event.num) + '项');
                                if (event.num > 0) {
                                    player.addTempSkill('xzjj_linhan', { player: 'phaseBegin' });
                                    target.damage();
                                    target.storage.linren = {
                                        card: trigger.card,
                                    };
                                }
                                if (event.num > 1) player.draw(2);
                                if (event.num > 2) {
                                    player.addTempSkill('xzjj_jiexi', { player: 'phaseBegin' });
                                    player.addTempSkill('xzjj_kanpo', { player: 'phaseBegin' });
                                }
                            },
                            ai: {
                                threaten: 2.4,
                            },
                        },
                        xzjj_j_jianxin: {
                            audio: 'ext:心之境界/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                if (player == target) return false;
                                return target.countCards('h') || target.isUnseen(2);
                            },
                            content() {
                                'step 0';
                                if (!player.storage.zhibi) {
                                    player.storage.zhibi = [];
                                }
                                player.storage.zhibi.add(target);
                                var controls = [];
                                if (target.countCards('h')) controls.push('手牌');
                                if (controls.length > 1) {
                                    player.chooseControl(controls);
                                }
                                if (controls.length == 0) event.finish();
                                ('step 1');
                                var content;
                                var str = get.translation(target) + '的';
                                if (result.control) {
                                    if (result.control == '手牌') {
                                        content = [str + '手牌', target.getCards('h')];
                                        game.log(player, '观看了', target, '的手牌');
                                    }
                                } else if (target.countCards('h')) {
                                    content = [str + '手牌', target.getCards('h')];
                                    game.log(player, '观看了', target, '的手牌');
                                }
                                player.chooseControl('ok').set('dialog', content);
                            },
                            selectTarget: 1,
                        },
                        xzjj_kanpo: {
                            audio: 'ext:心之境界/audio:2',
                            trigger: {
                                target: 'useCardToBefore',
                            },
                            usable: 1,
                            _priority: 7,
                            filter(event, player) {
                                return event.player != player;
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            content() {
                                'step 0';
                                trigger.player.damage();
                                ('step 1');
                                trigger.target = trigger.player;
                                trigger.player = player;
                                trigger.untrigger();
                                trigger.trigger('useCardToBefore');
                            },
                            ai: {
                                result: {
                                    target: -2,
                                    player: 1,
                                },
                            },
                        },
                        xzjj_jiexi: {
                            global: 'boss_zhangwu_ai',
                            trigger: {
                                player: 'damageEnd',
                            },
                            check(event, player) {
                                return event.source && event.source.isIn() && get.damageEffect(event.source, player, player) > 0;
                            },
                            filter(event, player) {
                                return event.source && event.source.isAlive();
                            },
                            forced: true,
                            logTarget: 'source',
                            content() {
                                'step 0';
                                player.chooseToDiscard('he', 1);
                                trigger.source.addMark('xzjj_jiexi_bj', 1);
                                ('step 2');
                                var num = trigger.source.storage.xzjj_jiexi_bj;
                                var cnum = player.maxHp - player.hp;
                                if (trigger.source.hp > player.hp) {
                                    trigger.source.damage(cnum);
                                    player.recover(num);
                                }
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage') && get.attitude(target, player) < 0 && player.countCards('he') < target.countCards('he')) {
                                            return [0, 2];
                                        }
                                    },
                                },
                            },
                        },
                        xzjj_linhan: {
                            nobracket: true,
                            intro: {
                                content: '你造成伤害时不会触发技能',
                            },
                            mark: true,
                            trigger: {
                                source: 'damageBefore',
                            },
                            forced: true,
                            _priority: null,
                            content() {
                                trigger._triggered = null;
                            },
                        },
                        xzjj_huanxiangqiji: {
                            trigger: {
                                global: 'discardBegin',
                                player: 'discardBegin',
                            },
                            filter(event, player) {
                                if (Array.isArray(event.cards))
                                    for (const i of event.cards) {
                                        if ((i.name == 'jiu' || get.type(i) == 'equip' || i.name == 'tao') && get.position(i) == 'd') return true;
                                    }
                                return false;
                            },
                            content() {
                                'step 0';
                                player.chat('幻想即是现实');
                                ('step 1');
                                var cards = [];
                                var cards1 = [];
                                if (Array.isArray(trigger.cards))
                                    for (const i of trigger.cards) {
                                        if (i.name == 'jiu' && get.position(i) == 'd') cards.push(i);
                                        if (get.type(i) == 'equip' && get.position(i) == 'd') cards1.push(i);
                                    }
                                if (cards.length) {
                                    player.gain(cards, 'log');
                                    player.$gain2(cards);
                                }
                                for (const i of cards1) {
                                    player.equip(i);
                                }
                            },
                        },
                        xzjj_zhuizhan: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseToDiscard('是否弃置一张牌使伤害+1？', 'he').ai = function (card) {
                                    if (get.attitude(player, trigger.player) < 0) {
                                        return 7 - get.value(card);
                                    }
                                };
                                ('step 1');
                                if (result.bool) {
                                    trigger.num++;
                                }
                            },
                            ai: {
                                threaten: 1.8,
                            },
                        },
                        xzjj_xinyueqiang: {
                            equipSkill: true,
                            trigger: {
                                player: ['useCard', 'respondAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (_status.currentPhase == player) return false;
                                if (!event.cards) return false;
                                if (event.cards.length != 1) return false;
                                if (lib.filter.autoRespondSha.call({ player: player })) return false;
                                return get.color(event.cards[0]) == 'black';
                            },
                            content() {
                                'step 0';
                                var next = player.chooseToUse(get.prompt('yinyueqiang'), { name: 'sha' });
                                next.aidelay = true;
                                next.noButton = true;
                                ('step 1');
                                if (result.bool) {
                                }
                            },
                        },
                        xzjj_mianyi: {
                            init(player) {
                                player.skills.add('fengyin');
                                player.skills.add('baiban');
                                player.storage.clearSkillsfuc = player.clearSkills;
                                player.clearSkills = game.kongfunc;
                            },
                            onremove(player) {
                                player.skills.remove('fengyin');
                                player.skills.remove('baiban');
                                player.clearSkills = player.storage.clearSkillsfuc;
                                delete player.storage.clearSkillsfuc;
                            },
                            nobracket: true,
                            charlotte: true,
                            forced: true,
                        },
                        xzjj_yinyangyu: {
                            enable: 'phaseUse',
                            equipSkill: true,
                            hiddenCard(player, name) {
                                return name == 'shan';
                            },
                            filter(event, player) {
                                return player.hasCard(function (card) {
                                    return get.type(card) != 'basic';
                                }, 'he');
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    for (let i = 0; i < lib.inpile.length; i++) {
                                        var name = lib.inpile[i];
                                        if (
                                            !game.hasPlayer(function (current) {
                                                return player.canUse(name, current);
                                            }) &&
                                            !player.canUse(name, player)
                                        )
                                            continue;
                                        if (lib.card[name].mode && lib.card[name].mode.includes(lib.config.mode) == false) continue;
                                        if (lib.card[name].forbid && lib.card[name].forbid.includes(lib.config.mode)) continue;
                                        if (lib.card[name].type == 'basic' && event.filterCard({ name: name }, player, event)) {
                                            list.add(name);
                                        }
                                    }
                                    for (let i = 0; i < list.length; i++) {
                                        list[i] = [get.type(list[i]), '', list[i]];
                                    }
                                    return ui.create.dialog([list, 'vcard']);
                                },
                                check(button) {
                                    return button.link[2] == 'tao' ? 1 : -1;
                                },
                                backup(links, player) {
                                    return {
                                        filterCard(card, player) {
                                            return get.type(card) != 'basic';
                                        },
                                        position: 'he',
                                        selectCard: 1,
                                        popname: true,
                                        viewAs: { name: links[0][2] },
                                        onuse(result, player) {
                                            player.addTempSkill('xzjj_lingmengjiang_yinyang2');
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '将一张非基本牌当作' + get.translation(links[0][2]) + '使用/打出';
                                },
                            },
                            ai: {
                                save: true,
                                skillTagFilter(player) {
                                    return player.countCards('he') > 0;
                                },
                            },
                        },
                        xzjj_fengmozhen: {
                            mod: {
                                maxHandcard(player, num) {
                                    return num + 2;
                                },
                            },
                            trigger: {
                                player: 'shaBegin',
                            },
                            forced: true,
                            content() {
                                if (!trigger.target.hasSkill('fengyin')) {
                                    trigger.target.addTempSkill('fengyin');
                                }
                            },
                        },
                        xzjj_mengxiang: {
                            trigger: {
                                player: 'useCardToBegin',
                            },
                            filter(event, player) {
                                return event.target && event.target != player;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var list = [];
                                if (player.storage._tanpai) {
                                    list.push('对其造成2点雷电伤害,并令其自弃2张牌');
                                } else {
                                    if (trigger.target.countCards('he')) {
                                        list.push('并令其自弃2张牌');
                                    }
                                    list.push('对其造成1点雷电伤害和火焰伤害');
                                }
                                event.list = list;
                                player
                                    .chooseControlList(list)
                                    .set('prompt', get.translation(player) + '对' + get.translation(trigger.target) + '发动了【梦想封印】!')
                                    .set('ai', function (event, player) {
                                        var eff = get.damageEffect(trigger.target, player, player, 'thunder');
                                        var att = get.attitude(player, trigger.target);
                                        if (eff <= 0 && att >= 0) return list.indexOf('cancel2');
                                        else if (list.includes('对其造成2点雷电伤害,并令其自弃2张牌') && eff >= 0) return list.indexOf('对其造成2点雷电伤害,并令其自弃2张牌');
                                        else if (list.includes('对其造成1点雷电伤害和火焰伤害') && eff > 0) return list.indexOf('对其造成1点雷电伤害火焰伤害');
                                        else if (list.includes('并令其自弃3张牌') && att < 0) return list.indexOf('并令其自弃2张牌');
                                        return list.indexOf('cancel2');
                                    });
                                ('step 1');
                                if (event.list[result.index] == '并令其自弃2张牌') {
                                    if (trigger.target.countCards('he')) {
                                        trigger.target.chooseToDiscard(2, 'he', true);
                                    }
                                }
                                if (event.list[result.index] == '对其造成1点雷电伤害和火焰伤害') {
                                    trigger.target.damage(1, 'thunder');
                                    trigger.target.damage(1, 'fire');
                                }
                                if (event.list[result.index] == '对其造成2点雷电伤害,并令其自弃3张牌') {
                                    trigger.target.damage(2, 'thunder');
                                    if (trigger.target.countCards(2, true, 'he')) {
                                        trigger.target.chooseToDiscard(2, 'he');
                                    }
                                }
                            },
                        },
                        xzjj_huanxiangshikong: {
                            trigger: {
                                global: 'dieEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.player == player) return false;
                                return true;
                            },
                            async content(event, trigger, player) {
                                game.removePlayer(trigger.player);
                                if (game.players.length < 8) {
                                    var player2 = game.addPlayer();
                                    player2.getId(); //QQQ
                                    player2.init('xzjj_lxy');
                                    player2.identity = player.identity;
                                    if (player2.identity == 'zhu') player2.identity = 'zhong';
                                    player2.node.identity.dataset.color = player2.identity;
                                    player2.identityShown = true;
                                    player2.removeSkill('xzjj_huanxiangshikong');
                                    player2.maxHp = 4;
                                    player2.hp = 4;
                                    player2.draw(7);
                                    player2.update();
                                    player2.addSkill('xzjj_huanxiangshikong_1');
                                    player2.storage.xzjj_huanxiangshikong = true;
                                    player.addSkill('xzjj_huanxiangshikong_2');
                                    player.removeSkill('xzjj_huanxiangshikong');
                                }
                            },
                            subSkill: {
                                1: {
                                    mod: {
                                        maxHandcard(player, num) {
                                            return (num = 999);
                                        },
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'dieBegin',
                                    },
                                    forced: true,
                                    content() {
                                        for (const i of game.players) {
                                            if (i.storage.xzjj_huanxiangshikong) {
                                                const next = game.createEvent('diex', false);
                                                next.source = player;
                                                next.player = i;
                                                next._triggered = null;
                                                next.restMap = { type: null, count: null, audio: null };
                                                next.excludeMark = [];
                                                next.setContent('die');
                                            }
                                        }
                                    },
                                },
                            },
                            nobracket: true,
                        },
                        xzjj_yinyangyu_sha: {
                            audio: 'ext:心之境界/audio:2',
                            enable: ['chooseToRespond', 'chooseToUse'],
                            equipSkill: true,
                            filter(event, player) {
                                if (event.responded) return false;
                                if (event.bagua_skill) return false;
                                if (!event.filterCard || !event.filterCard({ name: 'shan' }, player, event)) return false;
                                if (event.name == 'chooseToRespond' && !lib.filter.cardRespondable({ name: 'shan' }, player, event)) return false;
                                if (player.hasSkillTag('unequip2')) return false;
                                var evt = event.parent;
                                if (
                                    evt.player &&
                                    evt.player.hasSkillTag('unequip', false, {
                                        name: evt.card ? evt.card.name : null,
                                        target: player,
                                        card: evt.card,
                                    })
                                )
                                    return false;
                                return player.countCards('he', { color: 'red' });
                            },
                            filterCard(card, player) {
                                return get.color(card) == 'red';
                            },
                            viewAs: {
                                name: 'shan',
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('he', { color: 'red' })) return false;
                            },
                            position: 'he',
                            prompt: '将一张红色牌当【闪】使用或打出',
                            check(card) {
                                return 6 - get.value(card);
                            },
                            ai: {
                                respondShan: true,
                                skillTagFilter(player) {
                                    if (!player.countCards('he', { color: 'red' })) return false;
                                },
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'respondShan') && current < 0) return 0.6;
                                    },
                                },
                                order: 4,
                                useful: -1,
                                value: -1,
                                basic: {
                                    useful: [7, 2],
                                    value: [7, 2],
                                },
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        xzjj_yinyangyu_shan: {
                            audio: 'ext:心之境界/audio:2',
                            equipSkill: true,
                            enable: ['chooseToRespond', 'chooseToUse'],
                            filter(event, player) {
                                if (event.responded) return false;
                                if (!event.filterCard || !event.filterCard({ name: 'sha' }, player, event)) return false;
                                if (event.name == 'chooseToRespond' && !lib.filter.cardRespondable({ name: 'sha' }, player, event)) return false;
                                if (player.hasSkillTag('unequip2')) return false;
                                var evt = event.parent;
                                if (
                                    evt.player &&
                                    evt.player.hasSkillTag('unequip', false, {
                                        name: evt.card ? evt.card.name : null,
                                        target: player,
                                        card: evt.card,
                                    })
                                )
                                    return false;
                                return player.countCards('he', { color: 'black' });
                            },
                            filterCard(card, player) {
                                return get.color(card) == 'black';
                            },
                            position: 'he',
                            viewAs: {
                                name: 'sha',
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('he', { color: 'black' })) return false;
                            },
                            prompt: '将一张黑色牌当【杀】使用或打出',
                            check(card) {
                                return 5 - get.value(card);
                            },
                            ai: {
                                skillTagFilter(player) {
                                    if (!player.countCards('he', { color: 'black' })) return false;
                                },
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'respondSha') && current < 0) return 0.6;
                                    },
                                },
                                respondSha: true,
                                order() {
                                    return get.order({ name: 'sha' }) - 0.1;
                                },
                                useful: -1,
                                value: -1,
                                basic: {
                                    useful: [5, 1],
                                    value: [5, 1],
                                },
                                result: {
                                    target(player, target) {
                                        if (
                                            player.hasSkill('jiu') &&
                                            !target.hasSkillTag('filterDamage', null, {
                                                player: player,
                                                card: { name: 'sha' },
                                            })
                                        ) {
                                            if (get.attitude(player, target) > 0) {
                                                return -7;
                                            } else {
                                                return -4;
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
                            },
                        },
                        xzjj_huiluo: {
                            trigger: {
                                source: 'damageBegin1',
                            },
                            filter(event, player) {
                                return player.countCards('h') != event.player.countCards('h');
                            },
                            content() {
                                'step 0';
                                var num = Math.abs(player.countCards('h') - trigger.player.countCards('h'));
                                if (trigger.player.countCards('he') < num) {
                                    event._result = { index: 1 };
                                } else {
                                    trigger.player
                                        .chooseControl()
                                        .set('choiceList', ['令' + get.translation(player) + '获得你X张牌,防止此伤害', '令此伤害+X'])
                                        .set('ai', function () {
                                            if (num >= 2) return 0;
                                            if (num < 2) return 1;
                                            var list = [0, 1];
                                            return list.randomGet();
                                        });
                                }
                                ('step 1');
                                var num = Math.abs(player.countCards('h') - trigger.player.countCards('h'));
                                var chat = ['给十万就随便你玩哦!', '下次记得再带香火钱哦!', '感谢您的捐赠!'].randomGet();
                                if (result.index == 0) {
                                    player.gainPlayerCard(trigger.player, 'he', num, true);
                                    trigger.cancel();
                                } else {
                                    var chat = ['梦想封印!', '要是你肯捐点香火钱的话,绝对不会这么惨的', '快点给我赚钱去!回来捐点香火钱'].randomGet();
                                    player.say(chat);
                                    trigger.num += num;
                                }
                            },
                        },
                        xzjj_zishu: {
                            audio: 'zishu',
                            trigger: {
                                player: 'gainAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.getParent(2).name != 'xzjj_zishu';
                            },
                            content() {
                                player.draw('nodelay');
                            },
                        },
                        xzjj_namam: {
                            audio: 'shouyin',
                            trigger: {
                                global: 'respondEnd',
                            },
                            filter(event, player) {
                                if (event.card.name != 'sha') return false;
                                if (event.player == player) return false;
                                if (event.cards) {
                                    if (Array.isArray(event.cards))
                                        for (const i of event.cards) {
                                            if (get.position(i, true) == 'o') return true;
                                        }
                                }
                                return false;
                            },
                            forced: true,
                            content() {
                                player.gain(trigger.cards, 'gain2');
                            },
                        },
                        xzjj_mambing_2: {
                            mod: {
                                targetEnabled(card, player, target) {
                                    if (get.type(card) == 'lebu' || card.name == 'nanman') {
                                        return false;
                                    }
                                },
                            },
                        },
                        xzjj_mambing2: {
                            audio: 'shouyin',
                            enable: 'phaseUse',
                            usable: 2,
                            viewAs: {
                                name: 'nanman',
                            },
                            filterCard(card, player) {
                                if (ui.selected.cards.length) {
                                    return card.suit == ui.selected.cards[0].suit;
                                }
                                var cards = player.getCards('h');
                                if (Array.isArray(cards))
                                    for (const i of cards) {
                                        if (card != i) {
                                            if (card.suit == i.suit) return true;
                                        }
                                    }
                                return false;
                            },
                            selectCard: 2,
                            complexCard: true,
                            check(card) {
                                var player = _status.event.player;
                                var targets = game.filterPlayer(function (current) {
                                    return player.canUse('nanman', current);
                                });
                                var num = 0;
                                for (let i = 0; i < targets.length; i++) {
                                    var eff = get.sgn(get.effect(targets[i], { name: 'nanman' }, player, player));
                                    if (targets[i].hp == 1) {
                                        eff *= 1.5;
                                    }
                                    num += eff;
                                }
                                if (!player.needsToDiscard(-1)) {
                                    if (targets.length >= 7) {
                                        if (num < 2) return 0;
                                    } else if (targets.length >= 5) {
                                        if (num < 1.5) return 0;
                                    }
                                }
                                return 6 - get.value(card);
                            },
                            ai: {
                                basic: {
                                    order: 8.5,
                                    useful: 1,
                                    value: 5,
                                },
                                wuxie(target, card, player, viewer) {
                                    if (get.attitude(viewer, target) > 0 && target.countCards('h', 'has')) {
                                        if (!target.countCards('h') || target.hp == 1 || Math.random() < 0.7) return 0;
                                    }
                                },
                                result: {
                                    target(player, target) {
                                        if (player.hasUnknown(2) && get.mode() != 'guozhan') return 0;
                                        var nh = target.countCards('h');
                                        if (get.mode() == 'identity') {
                                            if (target.isZhu && nh <= 2 && target.hp <= 1) return -100;
                                        }
                                        if (nh == 0) return -2;
                                        if (nh == 1) return -1.7;
                                        return -1.5;
                                    },
                                    target_use(player, target) {
                                        if (player.hasUnknown(2) && get.mode() != 'guozhan') return 0;
                                        var nh = target.countCards('h');
                                        if (get.mode() == 'identity') {
                                            if (target.isZhu && nh <= 2 && target.hp <= 1) return -100;
                                        }
                                        if (nh == 0) return -2;
                                        if (nh == 1) return -1.7;
                                        return -1.5;
                                    },
                                },
                                tag: {
                                    respond: 1,
                                    respondShan: 1,
                                    damage: 1,
                                    multitarget: 1,
                                    multineg: 1,
                                    respondSha: 1,
                                },
                            },
                        },
                        xzjj_manbing: {
                            audio: 'ext:心之境界/audio:true',
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            filter(event, player) {
                                return player.countCards('h', 'nanman') <= 0;
                            },
                            forced: true,
                            content() {
                                player.gain(game.createCard('nanman'));
                                player.draw();
                            },
                        },
                        xzjj_yingshi: {
                            audio: 'ext:心之境界/audio:2',
                            group: ['yingshi_die'],
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('he', { suit: 'heart' }) > 0;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('xzjj_yingshi'), function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function () {
                                        return -1;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var cards = player.getCards('he');
                                    var togain = [];
                                    if (Array.isArray(cards))
                                        for (const i of cards) {
                                            if (i.suit == 'heart') togain.push(i);
                                        }
                                    player.lose(togain, ui.special, 'toStorage');
                                    player.$give(togain, result.targets[0], false);
                                    result.targets[0].storage.yingshi_heart = togain;
                                    result.targets[0].addSkill('xzjj_yingshi_heart');
                                } else {
                                    event.finish();
                                }
                            },
                        },
                        xzjj_yingshi_heart: {
                            marktext: '酬',
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.source != undefined;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseCardButton('选择要获得的牌', player.storage.xzjj_yingshi_heart, true);
                                ('step 1');
                                if (result.bool) {
                                    player.$give(result.links, player);
                                    player.gain(result.links, 'fromStorage');
                                    player.storage.xzjj_yingshi_heart.remove(result.links[0]);
                                }
                                if (player.storage.xzjj_yingshi_heart.length == 0) {
                                    delete player.storage.xzjj_yingshi_heart;
                                    player.removeSkill('xzjj_yingshi_heart');
                                }
                            },
                            mark: true,
                            intro: {
                                content: 'cards',
                                onunmark(storage, player) {
                                    if (storage && storage.length) {
                                        player.$throw(storage, 1000);
                                        game.cardsDiscard(storage);
                                        game.log(storage, '被置入了弃牌堆');
                                        storage.length = 0;
                                    }
                                },
                            },
                        },
                        xzjj_quanji: {
                            audio: 'ext:心之境界/audio:2',
                            trigger: {
                                player: ['damageEnd', 'phaseUseEnd', 'loseHpEnd', 'recoverEnd'],
                            },
                            forced: true,
                            notemp: true,
                            init(player) {
                                player.storage.xzjj_quanji = [];
                            },
                            filter(event, player) {
                                if (event.name == 'phaseUse') return player.countCards('h') > 0;
                                return event.num > 0;
                            },
                            content() {
                                'step 0';
                                event.count = trigger.num || 1;
                                ('step 1');
                                event.count--;
                                player.draw(2);
                                ('step 2');
                                if (player.countCards('he')) {
                                    player.chooseCard('将一张手牌置于武将牌上作为<权>', true);
                                } else {
                                    event.goto(4);
                                }
                                ('step 3');
                                if (result.cards?.length) {
                                    player.lose(result.cards, ui.special, 'toStorage');
                                    player.storage.xzjj_quanji = player.storage.xzjj_quanji.concat(result.cards);
                                    player.markSkill('xzjj_quanji');
                                    game.log(player, '将', result.cards, '置于武将牌上作为<权>');
                                }
                                ('step 4');
                                if (event.count > 0) {
                                    player.chooseBool(get.prompt2('xzjj_quanji')).set('frequentSkill', 'xzjj_quanji');
                                } else event.finish();
                                ('step 5');
                                if (result.bool) {
                                    event.goto(1);
                                }
                            },
                            intro: {
                                content: 'cards',
                            },
                            marktext: '权',
                            mod: {
                                maxHandcard(player, num) {
                                    return num + player.storage.xzjj_quanji.length;
                                },
                                cardUsable(card, player, num) {
                                    var x = Math.floor(player.storage.xzjj_quanji.length / 2);
                                    if (card.name == 'sha') return num + x;
                                },
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                threaten: 0.8,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                            if (!target.hasFriend()) return;
                                            if (target.hp >= 4) return [0.5, get.tag(card, 'damage') * 2];
                                            if (!target.hasSkill('paiyi') && target.hp > 1) return [0.5, get.tag(card, 'damage') * 1.5];
                                            if (target.hp == 3) return [0.5, get.tag(card, 'damage') * 1.5];
                                            if (target.hp == 2) return [1, get.tag(card, 'damage') * 0.5];
                                        }
                                    },
                                },
                            },
                        },
                        xzjj_zili: {
                            audio: 'ext:心之境界/audio:2',
                            audioname: ['re_zhonghui'],
                            juexingji: true,
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return !player.hasSkill('paiyi') && player.storage.xzjj_quanji && player.storage.xzjj_quanji.length >= 3;
                            },
                            content() {
                                'step 0';
                                player.chooseDrawRecover(2, true, function (event, player) {
                                    if (player.hp == 1 && player.isDamaged()) return 'recover_hp';
                                    return 'draw_card';
                                });
                                ('step 1');
                                player.loseMaxHp();
                                player.addSkill('xzjj_paiyi');
                                player.addSkill('xzjj_zhenggong2');
                                player.awakenSkill('xzjj_zili');
                            },
                        },
                        xzjj_zhenggong: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.source && event.source.countCards('e') > 0;
                            },
                            content() {
                                'step 0';
                                var att = get.attitude(player, trigger.source);
                                player.choosePlayerCard('e', get.prompt('争功'), trigger.source).ai = function (button) {
                                    if (att <= 0) {
                                        return get.equipValue(button.link);
                                    }
                                    return 0;
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.equip(result.links[0]);
                                    trigger.source.$give(result.links[0], player, false);
                                    player.equip(event.equip || game.createCard(get.inpilefull('equip').randomGet()), true);
                                }
                            },
                            ai: {
                                maixie_defend: true,
                            },
                        },
                        xzjj_zhenggong2: {
                            audio: 'ext:心之境界/audio:2',
                            audioname: ['sp_lvmeng'],
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            forced: true,
                            filter(event, player) {
                                return !event.numFixed;
                            },
                            content() {
                                var x = Math.floor(player.storage.xzjj_quanji.length / 3);
                                trigger.num += x;
                            },
                            ai: {
                                threaten: 1.3,
                            },
                        },
                        xzjj_paiyi: {
                            audio: 'ext:心之境界/audio:2',
                            forced: true,
                            trigger: {
                                player: 'damageAfter',
                            },
                            content() {
                                player.phase('nodelay');
                            },
                        },
                        xzjj_fashu: {
                            audio: 'ext:心之境界/audio:2',
                            trigger: {
                                player: 'phaseBefore',
                            },
                            filter(event, player) {
                                return player.storage.xzjj_quanji.length >= game.players.length;
                            },
                            content() {
                                var cum = Math.floor(player.storage.xzjj_quanji.length / 2);
                                player.draw(cum);
                                player.gainMaxHp();
                                player.recover(2);
                                player.removeSkill('xzjj_fashu');
                            },
                        },
                        xzjj_luomei: {
                            audio: 'ext:心之境界/audio:2',
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (!event.cards) return false;
                                if (event.cards.length != 1) return false;
                                if (Array.isArray(event.cards))
                                    for (const i of event.cards) {
                                        if (i.suit == 'club') return true;
                                    }
                                return false;
                            },
                            content() {
                                var num = 0;
                                if (Array.isArray(trigger.cards))
                                    for (const i of trigger.cards) {
                                        if (i.suit == 'club') num++;
                                    }
                                player.draw(num);
                            },
                        },
                        xzjj_luoying: {
                            audio: 'ext:心之境界/audio:2',
                            group: ['xzjj_luoying_discard', 'xzjj_luoying_judge'],
                            subfrequent: ['judge'],
                            subSkill: {
                                discard: {
                                    audio: 'reluoying',
                                    trigger: {
                                        global: 'loseAfter',
                                    },
                                    filter(event, player) {
                                        if (event.type != 'discard') return false;
                                        if (event.player == player) return false;
                                        for (let i = 0; i < event.cards2.length; i++) {
                                            if (event.cards2[i].suit == 'club' && get.position(event.cards2[i], true) == 'd') {
                                                return true;
                                            }
                                        }
                                        return false;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        ('step 1');
                                        var cards = [];
                                        for (let i = 0; i < trigger.cards2.length; i++) {
                                            if (trigger.cards2[i].suit == 'club' && get.position(trigger.cards2[i], true) == 'd') {
                                                cards.push(trigger.cards2[i]);
                                            }
                                        }
                                        if (cards.length) {
                                            player.chooseButton(['落英:选择要获得的牌', cards], [1, cards.length]).set('ai', function (button) {
                                                return get.value(button.link, player, 'raw');
                                            });
                                        }
                                        ('step 2');
                                        if (result.bool) {
                                            player.gain(result.links, 'gain2', 'log');
                                        }
                                    },
                                },
                                judge: {
                                    audio: 'reluoying',
                                    trigger: {
                                        global: 'cardsDiscardAfter',
                                    },
                                    forced: true,
                                    check(event, player) {
                                        return event.cards[0].name != 'du';
                                    },
                                    filter(event, player) {
                                        var evt = event.parent.relatedEvent;
                                        if (!evt || evt.name != 'judge') return;
                                        if (evt.player == player) return false;
                                        if (get.position(event.cards[0], true) != 'd') return false;
                                        return event.cards[0].suit == 'club';
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseButton(['落英:选择要获得的牌', trigger.cards], [1, trigger.cards.length]).set('ai', function (button) {
                                            return get.value(button.link, player, 'raw');
                                        });
                                        ('step 1');
                                        if (result.bool) {
                                            player.gain(result.links, 'gain2', 'log');
                                        }
                                    },
                                },
                            },
                        },
                        xzjj_jiushi: {
                            audio: 'ext:心之境界/audio:2',
                            enable: ['chooseToUse', 'chooseToRespond'],
                            filterCard(card, player) {
                                return card.suit == 'club';
                            },
                            position: 'he',
                            viewAs: {
                                name: 'jiu',
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('he', { suit: 'club' })) return false;
                            },
                            prompt: '将一张♠️️牌当酒使用',
                            check(card) {
                                return 4 - get.value(card);
                            },
                            ai: {
                                basic: {
                                    order: 9,
                                    useful: 1,
                                    value: 5,
                                },
                                result: {
                                    target(player, target) {
                                        var att = get.attitude(player, target);
                                        var nh = target.countCards('h');
                                        if (att > 0) {
                                            var js = target.getCards('j');
                                            if (js.length) {
                                                var jj = js[0].viewAs ? { name: js[0].viewAs } : js[0];
                                                if (jj.name == 'jiu' || js.length > 1 || get.effect(target, jj, target, player) < 0) {
                                                    return 3;
                                                }
                                            }
                                            if (target.getEquip('baiyin') && target.isDamaged() && get.recoverEffect(target, player, player) > 0) {
                                                if (target.hp == 1 && !target.hujia) return 1.6;
                                                if (target.hp == 2) return 0.01;
                                                return 0;
                                            }
                                        }
                                        var es = target.getCards('e');
                                        var noe = es.length == 0 || target.hasSkillTag('noe');
                                        var noe2 = es.length == 1 && es[0].name == 'baiyin' && target.isDamaged();
                                        var noh = nh == 0 || target.hasSkillTag('noh');
                                        if (noh && (noe || noe2)) return 0;
                                        if (att <= 0 && !target.countCards('he')) return 1.5;
                                        return -1.5;
                                    },
                                },
                                tag: {
                                    loseCard: 1,
                                    discard: 1,
                                    save: 1,
                                },
                                order() {
                                    return get.order({ name: 'sha' }) + 0.2;
                                },
                            },
                        },
                        xzjj_jiushi2: {
                            audio: 'rejiushi',
                            forced: true,
                            trigger: {
                                player: 'damageBegin3',
                            },
                            filter(event, player) {
                                return event.getParent(2).jiu == true;
                            },
                            content() {
                                trigger.num -= trigger.getParent(2).jiu_add;
                            },
                            ai: {
                                filterDamage: true,
                                skillTagFilter(player, tag, arg) {
                                    return arg && arg.jiu == true;
                                },
                            },
                        },
                        xzjj_jiushi3: {
                            audio: 'ext:心之境界/audio:2',
                            enable: ['chooseToRespond', 'chooseToUse'],
                            filterCard(card, player) {
                                if (get.zhu(player, 'shouyue')) return true;
                                return card.suit == 'club';
                            },
                            position: 'he',
                            viewAs: {
                                name: 'sha',
                            },
                            viewAsFilter(player) {
                                if (get.zhu(player, 'shouyue')) {
                                    if (!player.countCards('he')) return false;
                                } else {
                                    if (!player.countCards('he', { suit: 'club' })) return false;
                                }
                            },
                            prompt: '将一张♣️️牌当【杀】使用或打出',
                            check(card) {
                                return 4 - get.value(card);
                            },
                            ai: {
                                basic: {
                                    useful: [5, 1],
                                    value: [5, 1],
                                },
                                order(item) {
                                    if (_status.event.player.hasSkillTag('presha', true, null, true)) return 10;
                                    if (lib.linked.includes(get.nature(item))) return 3.1;
                                    return 3;
                                },
                                result: {
                                    target(player, target, card, isLink) {
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
                            },
                        },
                        xzjj_jiushi1: {
                            audio: 'ext:心之境界/audio:1',
                            enable: ['chooseToRespond', 'chooseToUse'],
                            filterCard(card, player) {
                                if (get.zhu(player, 'shouyue')) return true;
                                return card.suit == 'club';
                            },
                            position: 'he',
                            viewAs: {
                                name: 'shan',
                            },
                            viewAsFilter(player) {
                                if (get.zhu(player, 'shouyue')) {
                                    if (!player.countCards('he')) return false;
                                } else {
                                    if (!player.countCards('he', { suit: 'club' })) return false;
                                }
                            },
                            prompt: '将一张♣️️牌当【闪】使用或打出',
                            check(card) {
                                return 4 - get.value(card);
                            },
                            ai: {
                                order: 3,
                                basic: {
                                    useful: [7, 2],
                                    value: [7, 2],
                                },
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        xzjj_qibu: {
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.maxHp <= 6;
                            },
                            content() {
                                player.gainMaxHp();
                            },
                        },
                        xzjj_七步: {
                            audio: 'ext:心之境界/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            usable: 1,
                            forced: true,
                            filter(event, player) {
                                return player.countUsed(null, true) >= 7;
                            },
                            content() {
                                player.draw(3);
                                player.recover();
                                player.phase('nodelay');
                            },
                        },
                        xzjj_xinzhishouyu: {
                            init(player) {
                                player.skills.add('fengyin');
                                player.skills.add('baiban');
                                player.storage.clearSkillsfuc = player.clearSkills;
                                player.clearSkills = game.kongfunc;
                            },
                            onremove(player) {
                                player.skills.remove('fengyin');
                                player.skills.remove('baiban');
                                player.clearSkills = player.storage.clearSkillsfuc;
                                delete player.storage.clearSkillsfuc;
                            },
                            nobracket: true,
                            charlotte: true,
                            forced: true,
                        },
                        xzjj_zjiushi: {
                            audio: 'ext:心之境界/audio:2',
                            group: ['rejiushi1', 'rejiushi2', 'rejiushi3', 'rejiushi_gain'],
                            subfrequent: ['gain'],
                            subSkill: {
                                gain: {
                                    audio: 'rejiushi',
                                    trigger: {
                                        player: 'turnOverAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.chengzhang == true;
                                    },
                                    prompt: '是否发动【酒诗】,获得牌堆中的一张锦囊牌？',
                                    content() {
                                        var card = get.cardPile2(function (card) {
                                            return get.type2(card) == 'trick';
                                        });
                                        if (card) player.gain(card, 'gain2', 'log');
                                    },
                                },
                            },
                        },
                        xzjj_luohua: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return !get.is.altered('xzjj_luohua') && event.card && event.card.name == 'sha' && event.card.suit == 'club' && event.notLink();
                            },
                            content() {
                                trigger.num++;
                            },
                            mod: {
                                targetInRange(card) {
                                    if (card.name == 'sha' && card.suit == 'club') return true;
                                },
                                cardUsable(card, player, num) {
                                    if (card.name == 'jiu') return Infinity;
                                },
                                selectTarget(card, player, range) {
                                    if (card.name == 'sha' && Array.isArray(range) && range[1] != -1 && card.suit == 'club') {
                                        range[1]++;
                                    }
                                },
                            },
                            ai: {
                                threaten: 1.4,
                            },
                        },
                        xzjj_tianbing: {
                            audio: 'ext:心之境界/audio:2',
                            init(player) {
                                player.storage.xzjj_tianbing = [];
                            },
                            marktext: '兵',
                            trigger: {
                                global: 'damageEnd',
                            },
                            filter(event, player) {
                                return player.storage.xzjj_tianbing.length < 7;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.players = trigger.source;
                                event.players.chooseBool('是否令' + get.translation(game.me) + '发动<span style=\"color: red\">"天兵"</span>').ai = function (event, player) {
                                    return true;
                                };
                                ('step 1');
                                if (result.bool) {
                                    trigger.source.line(player, 'white');
                                    event.goto(2);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                player.draw();
                                if (player.countCards('he')) {
                                    player.chooseCard('将1张牌置于武将牌上作为<天兵>', true, 'he');
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (result.cards?.length) {
                                    player.lose(result.cards, ui.special);
                                    if (player.storage.xzjj_tianbing == undefined) player.storage.xzjj_tianbing = [];
                                    player.storage.xzjj_tianbing.push(result.cards[0]);
                                    player.showCards(player.storage.xzjj_tianbing, '黄巾天兵符');
                                    player.markSkill('xzjj_tianbing');
                                }
                            },
                            intro: {
                                content: 'cards',
                                onunmark(storage, player) {
                                    if (storage && storage.length) {
                                        player.$throw(storage);
                                        for (let i = 0; i < storage.length; i++) {
                                            storage[i].discard();
                                        }
                                        delete player.storage.xzjj_tianbing;
                                    }
                                },
                            },
                            group: ['xzjj_tianbing_respond', 'xzjj_tianbing_use', 'xzjj_tianbing_card'],
                            subSkill: {
                                card: {
                                    popup: false,
                                    silent: true,
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    filter(event, player) {
                                        return player.storage.xzjj_tianbing.length;
                                    },
                                    content() {
                                        'step 0';
                                        var num = player.storage.xzjj_tianbing.length;
                                        player.chooseCardButton(num, true, get.cards(num), '按顺序将卡牌置于牌堆顶(先选择的在上)').set('ai', function (button) {
                                            return get.value(button.link);
                                        });
                                        ('step 1');
                                        if (result.bool) {
                                            var list = result.links.slice(0);
                                            while (list.length) {
                                                ui.cardPile.insertBefore(list.pop(), ui.cardPile.firstChild);
                                            }
                                        }
                                    },
                                    forced: true,
                                },
                            },
                            ai: {
                                moreDraw: true,
                                threaten: 2,
                            },
                        },
                        xzjj_tianbing_card: {
                            popup: false,
                            silent: true,
                            enable: 'chooseToUse',
                            filter(event, player) {
                                return player.storage.xzjj_tianbing.length;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    return ui.create.dialog('黄巾天兵符', player.storage.xzjj_tianbing, 'hidden');
                                },
                                filter(button, player) {
                                    var evt = _status.event.parent;
                                    if (evt && evt.filterCard) {
                                        return evt.filterCard(button.link, player, evt);
                                    }
                                    return true;
                                },
                                check(button) {
                                    if (button.link.name == 'du') return -2;
                                    var player = _status.event.player;
                                    if (button.link.name == 'xingjiegoutong' && player.countCards('h') > 1) return -2;
                                    if (get.select(get.info(button.link).selectTarget)[1] == -1) {
                                        if (get.type(button.link) == 'delay') return -1;
                                        if (get.type(button.link) == 'equip') {
                                            var current = player.getCards('e', { subtype: get.subtype(button.link) })[0];
                                            if (current && get.equipValue(current) >= get.equipValue(button.link)) return -1;
                                            return 1;
                                        }
                                        if (get.tag(button.link, 'multitarget')) return -1;
                                        if (button.link.name == 'huoshaolianying') return -1;
                                    }
                                    if (button.link.name == 'jiu') {
                                        if (get.effect(player, { name: 'jiu' }, player) > 0) {
                                            return 1;
                                        }
                                        return -1;
                                    }
                                    return 1;
                                },
                                backup(links, player) {
                                    return {
                                        filterCard() {
                                            return false;
                                        },
                                        selectCard: -1,
                                        viewAs: links[0],
                                        onuse(result, player) {
                                            player.storage.ly_junshenbao_zhangjiao_tianbing.remove(result.card);
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '选择' + get.translation(links) + '的目标';
                                },
                            },
                            ai: {
                                order: 6,
                                result: {
                                    player(player) {
                                        if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                        return 1;
                                    },
                                },
                                useful: -1,
                                value: -1,
                            },
                            forced: true,
                        },
                        xzjj_tianbing_use: {
                            popup: false,
                            silent: true,
                            enable: 'chooseToUse',
                            filter(event, player) {
                                return player.storage.xzjj_tianbing.length;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    return ui.create.dialog('黄巾天兵符', player.storage.xzjj_tianbing, 'hidden');
                                },
                                filter(button, player) {
                                    var evt = _status.event.parent;
                                    if (evt && evt.filterCard) {
                                        return evt.filterCard(button.link, player, evt);
                                    }
                                    return true;
                                },
                                check(button) {
                                    if (button.link.name == 'du') return -2;
                                    var player = _status.event.player;
                                    if (button.link.name == 'xingjiegoutong' && player.countCards('h') > 1) return -2;
                                    if (get.select(get.info(button.link).selectTarget)[1] == -1) {
                                        if (get.type(button.link) == 'delay') return -1;
                                        if (get.type(button.link) == 'equip') {
                                            var current = player.getCards('e', { subtype: get.subtype(button.link) })[0];
                                            if (current && get.equipValue(current) >= get.equipValue(button.link)) return -1;
                                            return 1;
                                        }
                                        if (get.tag(button.link, 'multitarget')) return -1;
                                        if (button.link.name == 'huoshaolianying') return -1;
                                    }
                                    if (button.link.name == 'jiu') {
                                        if (get.effect(player, { name: 'jiu' }, player) > 0) {
                                            return 1;
                                        }
                                        return -1;
                                    }
                                    return 1;
                                },
                                backup(links, player) {
                                    return {
                                        filterCard() {
                                            return false;
                                        },
                                        selectCard: -1,
                                        viewAs: links[0],
                                        onuse(result, player) {
                                            player.storage.xzjj_tianbing.remove(result.card);
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '选择' + get.translation(links) + '的目标';
                                },
                            },
                            ai: {
                                order: 6,
                                result: {
                                    player(player) {
                                        if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                        return 1;
                                    },
                                },
                                useful: -1,
                                value: -1,
                            },
                            forced: true,
                        },
                        xzjj_jz_huantian: {
                            audio: 'huangtian',
                            trigger: {
                                global: 'judgeBefore',
                            },
                            _priority: 1000000000000,
                            check(event, player) {
                                if (get.attitude(player, event.player) > 0) {
                                    return -player.countCards('h', 'shan');
                                }
                                if (get.attitude(player, event.player) <= 0) {
                                    return 1 - player.countCards('h');
                                }
                            },
                            content() {
                                'step 0';
                                if (trigger.player != player) player.say('黄天之势,岂能是凡人能改变的？');
                                game.log(trigger.player, '进行不可更改的判定');
                                var card = get.cards()[0];
                                event.cards = card;
                                var judgestr = get.translation(trigger.player) + '的' + trigger.judgestr + '判定';
                                event.videoId = lib.status.videoId++;
                                event.dialog = ui.create.dialog(judgestr);
                                event.dialog.classList.add('center');
                                event.dialog.videoId = event.videoId;
                                if (Array.isArray(event.cards)) for (const i of event.cards) i.discard();
                                var node;
                                if (game.chess) {
                                    node = card.copy('thrown', 'center', ui.arena).addTempClass('start');
                                } else {
                                    node = player.$throwordered(card.copy(), true);
                                }
                                node.classList.add('thrownhighlight');
                                ui.arena.classList.add('thrownhighlight');
                                if (card) {
                                    trigger.cancel();
                                    trigger.result = {
                                        card: card,
                                        judge: trigger.judge(card),
                                        node: node,
                                        number: card.number,
                                        suit: card.suit,
                                        color: get.color(card),
                                    };
                                    if (trigger.result.judge > 0) {
                                        trigger.result.bool = true;
                                        trigger.player.popup('判定成功');
                                    }
                                    if (trigger.result.judge < 0) {
                                        trigger.result.bool = false;
                                        trigger.player.popup('判定失败');
                                    }
                                    game.log(trigger.player, '的判定结果为', card, ',结果不可更改,判定牌不能被【天妒】类技能获得');
                                    trigger.direct = true;
                                    trigger.position.appendChild(card);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                ui.arena.classList.remove('thrownhighlight');
                                event.dialog.close();
                                game.addVideo('judge2', null, event.videoId);
                                ui.clear();
                                var card = trigger.result.card;
                                trigger.position.appendChild(card);
                                trigger.result.node.delete();
                            },
                        },
                        xzjj_leihun: {
                            audio: 'ext:心之境界/audio:1',
                            trigger: {
                                player: 'damageBegin1',
                            },
                            forced: true,
                            _priority: 9999999997,
                            filter(event, player) {
                                return event.nature == 'thunder';
                            },
                            content() {
                                trigger.cancel();
                                player.recover(trigger.num);
                            },
                            ai: {
                                nothunder: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'thunderDamage')) {
                                            if (target.hp < target.Maxhp) return 'zerotarget';
                                            if (target.hp == 1) return [0, 2];
                                            return [0, 1];
                                        }
                                    },
                                },
                            },
                        },
                        xzjj_tianbing_respond: {
                            popup: false,
                            silent: true,
                            trigger: {
                                player: 'chooseToRespondBegin',
                            },
                            filter(event, player) {
                                if (event.responded) return false;
                                if (!player.storage.xzjj_tianbing.length) return false;
                                for (let i = 0; i < player.storage.xzjj_tianbing.length; i++) {
                                    if (event.filterCard && event.filterCard(player.storage.xzjj_tianbing[i], player, event)) return true;
                                }
                                return false;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseButton(['天兵', player.storage.xzjj_tianbing])
                                    .set('filterButton', function (button) {
                                        var evt = _status.event.getTrigger();
                                        if (evt && evt.filterCard) {
                                            return evt.filterCard(button.link, _status.event.player, evt);
                                        }
                                        return true;
                                    })
                                    .set('ai', function (button) {
                                        var evt = _status.event.getTrigger();
                                        if (evt && evt.ai) {
                                            var tmp = _status.event;
                                            _status.event = evt;
                                            var result = evt.ai(button.link, _status.event.player, evt);
                                            _status.event = tmp;
                                            return result;
                                        }
                                        return 1;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    result.links[0].discard();
                                    trigger.untrigger();
                                    trigger.responded = true;
                                    trigger.result = { bool: true, card: result.links[0] };
                                    player.storage.xzjj_tianbing.remove(result.links[0]);
                                    if (player.storage.xzjj_tianbing.length == 0) {
                                        player.unmarkSkill('xzjj_tianbing');
                                    } else {
                                        player.markSkill('xzjj_tianbing');
                                    }
                                }
                            },
                            ai: {
                                order: 4,
                                useful: -1,
                                value: -1,
                            },
                            forced: true,
                        },
                        xzjj_tb_yingbing: {
                            trigger: {
                                global: 'damageBegin',
                            },
                            usable: 1,
                            check(event, player) {
                                return get.attitude(player, event.player) < 0;
                            },
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    if (get.color(card) == 'red') return -1;
                                    return 1;
                                });
                                ('step 1');
                                player.gain(result.card, 'gain2');
                                if (result.bool) {
                                    player.useCard({ name: 'sha', nature: 'thunder' }, trigger.player, false);
                                }
                            },
                            ai: {
                                expose: 0.2,
                            },
                        },
                        xzjj_lingji: {
                            group: ['gezi_yinyang2', 'gezi_bianshenlingmeng'],
                            audio: 'ext:心之境界/audio:2',
                            trigger: {
                                player: 'changeHp',
                            },
                            filter(event, player) {
                                return player.storage.gezi_yinyang;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.storageyinyang_yinyang = false;
                                var list = ['摸一张牌'];
                                if (trigger.player.countCards('he')) {
                                    list.push('展示当前回合角色一张牌并置于牌堆顶');
                                }
                                if ((player.countCards('e', { name: 'gezi_yinyangyu' }) || player.lili == player.maxlili) && trigger.player.countCards('he')) {
                                    list.push('选择两项');
                                }
                                event.list = list;
                                player
                                    .chooseControlList(list)
                                    .set('ai', function (event, player) {
                                        var att = get.attitude(player, trigger.player);
                                        if (att >= 0) return event.list.indexOf('摸一张牌');
                                        else if (list.includes('选择两项') && att < 0) return event.list.indexOf('选择两项');
                                        else if (list.includes('展示当前回合角色一张牌并置于牌堆顶') && att < 0) return event.list.indexOf('展示当前回合角色一张牌并置于牌堆顶');
                                        return event.list.indexOf('摸一张牌');
                                    })
                                    .set('prompt', get.prompt('gezi_yinyang'));
                                ('step 1');
                                if (event.list[result.index] == '摸一张牌') {
                                    player.gainlili();
                                    player.draw();
                                }
                                if (event.list[result.index] == '展示当前回合角色一张牌并置于牌堆顶') {
                                    player.gainlili();
                                    player.choosePlayerCard(trigger.player, 'he', 1);
                                }
                                if (event.list[result.index] == '选择两项') {
                                    player.gainlili();
                                    player.draw();
                                    player.choosePlayerCard(trigger.player, 'he', 1);
                                }
                                ('step 2');
                                if (result.bool && result.links) {
                                    game.log(player, '将', trigger.player, '的', result.links[0], '置入牌堆顶');
                                    trigger.player.showCards(result.links[0]);
                                    trigger.player.lose(result.links[0]);
                                    trigger.player.update();
                                    ui.cardPile.appendChild(result.links[0]);
                                }
                            },
                            ai: {
                                threaten: 0.7,
                                maixie_defend: true,
                            },
                        },
                        xzjj_lingmengjiang_yinyang: {
                            enable: ['chooseToUse', 'chooseToRespond'],
                            filter(event, player) {
                                if (!event.parent || !event.parent.name || event.parent.name !== 'sha') return false;
                                return player.hasCard(function (card) {
                                    return get.type(card) != 'basic';
                                }, 'he');
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    for (let i = 0; i < lib.inpile.length; i++) {
                                        var name = lib.inpile[i];
                                        if (lib.card[name].mode && lib.card[name].mode.includes(lib.config.mode) == false) continue;
                                        if (lib.card[name].forbid && lib.card[name].forbid.includes(lib.config.mode)) continue;
                                        if (lib.card[name].type == 'basic' && event.filterCard({ name: name }, player, event)) {
                                            list.add(name);
                                        }
                                    }
                                    for (let i = 0; i < list.length; i++) {
                                        list[i] = [get.type(list[i]), '', list[i]];
                                    }
                                    return ui.create.dialog([list, 'vcard']);
                                },
                                check(button) {
                                    return button.link[2] == 'tao' ? 1 : -1;
                                },
                                backup(links, player) {
                                    return {
                                        filterCard(card, player) {
                                            return get.type(card) != 'basic';
                                        },
                                        position: 'he',
                                        selectCard: 1,
                                        popname: true,
                                        viewAs: { name: links[0][2] },
                                        onuse(result, player) {
                                            player.addTempSkill('xzjj_lingmengjiang_yinyang2');
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '将一张非基本牌当作' + get.translation(links[0][2]) + '使用/打出';
                                },
                            },
                            ai: {
                                save: true,
                                skillTagFilter(player) {
                                    return player.countCards('he') > 0;
                                },
                            },
                        },
                        xzjj_lingmengjiang_yinyang2: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                trigger.num++;
                            },
                        },
                        xzjj_z_yinyang: {
                            audio: 'ext:心之境界/audio:2',
                            trigger: {
                                player: 'changeHp',
                                source: 'damageAfter',
                            },
                            group: ['lingmeng_saiqian'],
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    return get.color(card) == 'red' ? 1 : -1;
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.gain(result.card, 'draw2');
                                    player.addTempSkill('xzjj_xinzhilingwu', { player: 'phaseBegin' });
                                } else {
                                    player.draw(2);
                                }
                            },
                        },
                        lingmeng_saiqian: {
                            forced: true,
                            trigger: {
                                global: 'useCard',
                            },
                            filter(event, player) {
                                return event.player != player && event.card.name == 'xzjj_saiqianxiang';
                            },
                            content() {
                                player.say('我的赛钱箱!你要是敢对它做什么奇怪的事情……');
                            },
                        },
                        lingmeng_saiqiang2: {
                            forced: true,
                            trigger: {
                                global: 'loseEnd',
                            },
                            filter(event, player) {
                                if (event.player == player) return false;
                                if (Array.isArray(event.cards))
                                    for (const i of event.cards) {
                                        if (i.name == 'xzjj_saiqianxiang' && get.position(i) == 'd') return true;
                                    }
                                return false;
                            },
                            content() {
                                game.pause();
                                player.say('啊啊啊啊啊啊啊啊,你对我的赛钱箱做了什么!!!!!!');
                                setTimeout(function () {
                                    player.say('你,我要把你变成十八层地狱底层的锅底废油!');
                                    setTimeout(function () {
                                        player.gainMaxlili();
                                        player.gainlili(player.maxlili - player.lili);
                                        player.updatelili();
                                        game.resume();
                                    }, 2500);
                                }, 2500);
                            },
                        },
                        xzjj_baonulingmeng: {
                            audio: 'ext:心之境界/audio:2',
                            trigger: {
                                player: 'damageBegin1',
                            },
                            forced: true,
                            _priority: 9999999997,
                            filter(event, player) {
                                return event.nature == 'thunder' || event.nature == 'fire';
                            },
                            content() {
                                trigger.cancel();
                                player.recover(trigger.num);
                            },
                            ai: {
                                nothunder: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'thunderDamage')) {
                                            if (target.hp < target.Maxhp) return 'zerotarget';
                                            if (target.hp == 1) return [0, 2];
                                            return [0, 1];
                                        }
                                    },
                                },
                            },
                        },
                        xzjj_baonulingmeng2: {
                            audio: 'ext:心之境界/audio:2',
                            trigger: {
                                player: 'loseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h') < 9;
                            },
                            content() {
                                player.draw(9 - player.countCards('h'));
                                player.recover();
                            },
                        },
                        saiqian1: {
                            enable: 'chooseToUse',
                            equipSkill: true,
                            filterCard(card, player) {
                                return true;
                            },
                            position: 'he',
                            viewAs: {
                                name: 'xzjj_lidaji',
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('he')) return false;
                            },
                            usable: 1,
                            prompt: '将一张牌当【例大祭】使用',
                            check(card) {
                                return 5 - get.value(card);
                            },
                            ai: {
                                wuxie(target, card, player, viewer) {
                                    if (
                                        game.countPlayer(function (current) {
                                            return get.attitude(viewer, current) <= 0;
                                        }) == 1
                                    ) {
                                        return 0;
                                    }
                                    if (
                                        get.attitude(viewer, target) <= 0 &&
                                        target.countCards('e', function (card) {
                                            return get.value(card) > 0;
                                        })
                                    ) {
                                        if (Math.random() < 0.5) return 0;
                                        return 1;
                                    }
                                    return 0;
                                },
                                basic: {
                                    order: 5,
                                    useful: 1,
                                    value: 1,
                                },
                                result: {
                                    target(player, target) {
                                        return 1;
                                    },
                                },
                                tag: {
                                    multitarget: 1,
                                },
                            },
                        },
                        saiqian3: {
                            global: 'saiqian2',
                        },
                        saiqian2: {
                            audio: 'ext:心之境界/audio:true',
                            enable: 'phaseUse',
                            equipSkill: true,
                            usable: 1,
                            discard: false,
                            line: true,
                            position: 'he',
                            prepare(cards, player, targets) {
                                player.$give(cards.length, targets[0]);
                            },
                            filter(event, player) {
                                if (player.countCards('he') == 0) return 0;
                                return game.hasPlayer(function (target) {
                                    return target != player && target.hasSkill('saiqian3', player);
                                });
                            },
                            filterCard(card, player) {
                                return true;
                            },
                            filterTarget(card, player, target) {
                                return target != player && target.hasSkill('saiqian3', player);
                            },
                            check(card) {
                                return 7 - get.value(card);
                            },
                            forceaudio: true,
                            prompt: '请选择要供奉的牌',
                            content() {
                                if (target.name == 'xzjj_linmeng2.0') target.say('谢谢谢谢!太谢谢了太谢谢了!请你下次一定要再来!听见了没有,一定要再来啊!');
                                else target.say('谢谢!');
                                target.gain(cards);
                            },
                            ai: {
                                expose: 0.3,
                                order: 1,
                                result: {
                                    target(player, target) {
                                        if (!target.needsToDiscard() && target.countCards('h') <= 3) return 0;
                                        if (target.needsToDiscard()) return 1;
                                        return 0.5;
                                    },
                                    player(player, target) {
                                        if (player.countCards('h') > player.getHandcardLimit()) return 0;
                                        return -0.5;
                                    },
                                },
                            },
                        },
                        xzjj_lingmeng: {
                            forced: true,
                            trigger: {
                                global: 'loseEnd',
                            },
                            filter(event, player) {
                                if (event.player == player) return false;
                                if (Array.isArray(event.cards))
                                    for (const i of event.cards) {
                                        if (i.name == 'xzjj_saiqianxiang' && get.position(i) == 'd') return true;
                                    }
                                return false;
                            },
                            async content(event, trigger, player) {
                                player.say('啊啊啊啊啊啊啊啊,你对我的赛钱箱做了什么!!!!!!你,  我  要  把  你  变  成  十八层地狱底层的锅底废油!');
                                await player.gainMaxHp(3);
                                player.hp = player.maxHp;
                                player.addSkill('xzjj_mengxiang');
                                player.addSkill('xzjj_baonulingmeng');
                                player.addSkill('xzjj_baonulingmeng2');
                                player.removeSkill('xzjj_lingmeng');
                            },
                        },
                        xzjj_kanpo2: {
                            audio: 'sanying_fanji',
                            trigger: {
                                global: 'wuxieBegin',
                            },
                            filter(event, player) {
                                if (event.player == player) return false;
                                return player.countCards('h', { type: 'trick' });
                            },
                            check(event, player) {
                                var att = 0;
                                for (let i = 0; i < event.targets.length; i++) {
                                    att += get.attitude(event.player, event.targets[i]);
                                }
                                if (event.targets.includes(player) && att < -1) return 1;
                            },
                            content() {
                                'step 0';
                                player.chooseCard('请选择一张手牌', 'he', true, function (card) { }).ai = function (card) {
                                    return 8 - get.value(card);
                                };
                                ('step 1');
                                if (result.bool) {
                                    trigger.untrigger();
                                    trigger.finish();
                                    player.discard(result.cards);
                                }
                            },
                        },
                        xzjj_zhuandui1: {
                            audio: 'zhuandui',
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.source && player.canCompare(event.source);
                            }, //QQQ
                            content() {
                                'step 0';
                                player.chooseToCompare(trigger.source);
                                ('step 1');
                                if (result.bool) {
                                    trigger.cancel();
                                    player.draw();
                                }
                            },
                        },
                        zhuangdui_gong: {
                            audio: 'zhuandui',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) < 0;
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && player.canCompare(event.target);
                            },
                            logTarget: 'target',
                            content() {
                                'step 0';
                                player.chooseToCompare(trigger.target);
                                ('step 1');
                                if (result.bool) {
                                    trigger.parent.directHit.add(trigger.target);
                                } //QQQ
                            },
                        },
                        xzjj_tianbian: {
                            audio: 'ext:心之境界/audio:2',
                            enable: 'chooseCard',
                            check(event, player) {
                                var player = _status.event.player;
                                return !player.hasCard(function (card) {
                                    var val = get.value(card);
                                    return val < 0 || (val <= 4 && card.number >= 11);
                                }, 'h')
                                    ? 20
                                    : 0;
                            },
                            filter(event, player) {
                                return event.type == 'compare' && !event.directresult;
                            },
                            onCompare(player) {
                                return game.cardsGotoOrdering(get.cards()).cards;
                            },
                            group: 'xzjj_tianbian_number',
                            subSkill: {
                                number: {
                                    trigger: {
                                        player: 'compare',
                                        target: 'compare',
                                    },
                                    filter(event, player) {
                                        if (event.iwhile) return false;
                                        if (event.player == player) {
                                            return get.color(event.card1) == 'red';
                                        } else {
                                            return get.color(event.card2) == 'red';
                                        }
                                    },
                                    silent: true,
                                    content() {
                                        game.log(player, '拼点牌点数视为', '#yK');
                                        if (player == trigger.player) {
                                            trigger.num1 = 13;
                                        } else {
                                            trigger.num2 = 13;
                                        }
                                    },
                                    forced: true,
                                    popup: false,
                                },
                            },
                        },
                        xzjj_duxin: {
                            audio: 'ext:心之境界/audio:2',
                            enable: 'phaseUse',
                            usable: 99,
                            filterTarget(card, player, target) {
                                if (player == target) return false;
                                return target.countCards('h') || target.isUnseen(2);
                            },
                            content() {
                                'step 0';
                                if (!player.storage.zhibi) {
                                    player.storage.zhibi = [];
                                }
                                player.storage.zhibi.add(target);
                                var controls = [];
                                if (target.countCards('h')) controls.push('手牌');
                                if (controls.length > 1) {
                                    player.chooseControl(controls);
                                }
                                if (controls.length == 0) event.finish();
                                ('step 1');
                                var content;
                                var str = get.translation(target) + '的';
                                if (result.control) {
                                    if (result.control == '手牌') {
                                        content = [str + '手牌', target.getCards('h')];
                                        game.log(player, '观看了', target, '的手牌');
                                    }
                                } else if (target.countCards('h')) {
                                    content = [str + '手牌', target.getCards('h')];
                                    game.log(player, '观看了', target, '的手牌');
                                }
                                player.chooseControl('ok').set('dialog', content);
                            },
                            selectTarget: 1,
                        },
                        hxxdzf1: {
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            forced: true,
                            filter(event, player) {
                                return !event.numFixed;
                            },
                            content() {
                                trigger.num++;
                            },
                            ai: {
                                threaten: 1.5,
                            },
                            mod: {
                                maxHandcardBase(player, num) {
                                    return player.maxHp;
                                },
                                group: ['hxxdzf2', 'hxxdzf3'],
                            },
                        },
                        hxxdzf2: {
                            audio: 'ext:心之境界/audio:2',
                            trigger: {
                                player: ['loseAfter', 'changeHp'],
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h') < player.getDamagedHp();
                            },
                            content() {
                                player.draw(player.getDamagedHp() - player.countCards('h'));
                            },
                            ai: {
                                noh: true,
                                skillTagFilter(player, tag) {
                                    if (tag == 'noh' && player.maxHp - player.hp < player.countCards('h')) {
                                        return false;
                                    }
                                },
                            },
                        },
                        hxxdzf3: {
                            trigger: {
                                player: 'loseEnd',
                            },
                            usable: 1,
                            filter(event, player) {
                                return _status.currentPhase != player;
                            },
                            forced: true,
                            content() {
                                player.draw();
                                player.changeHujia();
                            },
                        },
                        hxxdzf5: {
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            content() {
                                player.recover();
                                player.draw(2);
                            },
                        },
                        xzjj_lianjie: {
                            audio: 'ext:心之境界/audio:2',
                            trigger: {
                                global: 'useCardToTarget',
                            },
                            forced: true,
                            check(event, player) {
                                return get.effect(player, event.card, event.player, player) > 0;
                            },
                            filter(event, player) {
                                if (get.color(event.card) != 'red') return false;
                                if (!event.targets) return false;
                                if (event.player == player) return false;
                                if (event.targets.includes(player)) return false;
                                if (get.info(event.card).multitarget) return false;
                                var type = get.type(event.card);
                                if (type != 'basic' && type != 'trick') return false;
                                if (lib.filter.targetEnabled2(event.card, event.player, player)) {
                                }
                                return false;
                            },
                            autodelay: true,
                            content() {
                                trigger.parent.targets.add(player);
                                trigger.player.line(player, 'green');
                            },
                        },
                        xzjj_yinghun: {
                            audio: 'ext:心之境界/audio:2',
                            audioname: ['re_sunjian', 'sunce', 're_sunben', 're_sunce', 'ol_sunjian'],
                            trigger: {
                                player: ['loseHpBegin', 'damageBegin', 'phaseBefore'],
                            },
                            filter(event, player) {
                                return player.getDamagedHp() > 0;
                            },
                            forced: true,
                            _priority: 100000000,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('gzyinghun'), function (card, player, target) {
                                        return target;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        if (player.getDamagedHp() == 1 && target.countCards('he') == 0) {
                                            return 0;
                                        }
                                        if (get.attitude(_status.event.player, target) > 0) {
                                            return 10 + get.attitude(_status.event.player, target);
                                        }
                                        if (player.getDamagedHp() == 1) {
                                            return -1;
                                        }
                                        return 1;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var num1 = player.maxHp - player.hp;
                                    var num4 = player.maxHp;
                                    var num2 = Math.min(8, Math.abs(player.countCards('h') - num4));
                                    var num3 = num1 + num2;
                                    event.num = num3;
                                    event.target = result.targets[0];
                                    if (event.num == 1) {
                                        event.directcontrol = true;
                                    } else {
                                        var str1 = '摸' + get.cnNumber(event.num, true) + '弃一';
                                        var str2 = '摸一弃' + get.cnNumber(event.num, true);
                                        player
                                            .chooseControl(str1, str2, function (event, player) {
                                                return _status.event.choice;
                                            })
                                            .set('choice', get.attitude(player, event.target) > 0 ? str1 : str2);
                                        event.str = str1;
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (event.directcontrol || result.control == event.str) {
                                    event.target.draw(event.num);
                                    event.target.chooseToDiscard(true, 'he');
                                } else {
                                    event.target.draw();
                                    event.target.chooseToDiscard(event.num, true, 'he');
                                }
                            },
                            ai: {
                                threaten(player, target) {
                                    if (target.hp == target.maxHp) return 0.5;
                                    if (target.hp == 1) return 2;
                                    if (target.hp == 2) return 1.5;
                                    return 0.5;
                                },
                                maixie: true,
                            },
                        },
                        xzjj_jiang: {
                            shaRelated: true,
                            audio: 'ext:心之境界/audio:2',
                            audioname: ['sp_lvmeng', 're_sunben', 're_sunce'],
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                return get.color(event.card) == 'red';
                            },
                            forced: true,
                            content() {
                                player.draw();
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (card.name == 'sha' && get.color(card) == 'red') return [1, 0.6];
                                    },
                                    player(card, player, target) {
                                        if (card.name == 'sha' && get.color(card) == 'red') return [1, 1];
                                    },
                                },
                            },
                        },
                        xzjj_yingzi: {
                            audio: 'ext:心之境界/audio:2',
                            trigger: {
                                player: 'loseEnd',
                            },
                            usable: 1,
                            forced: true,
                            content() {
                                player.draw();
                                player.changeHujia();
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    if (player.hp < player.maxHp) return num + player.maxHp - player.hp;
                                },
                            },
                        },
                        xzjj_hunzi: {
                            audio: 'ext:心之境界/audio:2',
                            juexingji: true,
                            derivation: ['xzjj_yingzi', 'xzjj_yinghun'],
                            trigger: {
                                player: 'changeHp',
                            },
                            filter(event, player) {
                                return player.hp <= 1;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.gainMaxHp();
                                player.gain(game.createCard('tao'));
                                player.gain(game.createCard('sha'));
                                player.addSkill('xzjj_yingzi');
                                player.addSkill('xzjj_yinghun');
                                player.addTempSkill('xzjj_jiang_x', { player: 'phaseBegin' });
                                player.awakenSkill('xzjj_hunzi');
                                ('step 1');
                                if (player.hp < 1) {
                                    player.recover(1 - player.hp);
                                }
                                ('step 2');
                                const evt = _status.event.getParent('phase', true);
                                if (evt) {
                                    evt.finish();
                                }
                                player.phase('nodelay');
                            },
                            ai: {
                                threaten(player, target) {
                                    if (target.hp == 1) return 2;
                                    return 0.5;
                                },
                                maixie: true,
                                effect: {
                                    target(card, player, target) {
                                        if (!target.hasFriend()) return;
                                        if (get.tag(card, 'damage') == 1 && target.hp == 2 && !target.isTurnedOver() && _status.currentPhase != target && get.distance(_status.currentPhase, target, 'absolute') <= 3) return [0.5, 1];
                                    },
                                },
                            },
                        },
                        xzjj_jiang_x: {
                            nobracket: true,
                            trigger: {
                                player: 'useCardToPlayered',
                                target: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                if (!(event.card.name == 'juedou' || (event.card.name == 'sha' && get.color(event.card) == 'red'))) return false;
                                return player == event.target || event.parent.triggeredTargets3.length == 1;
                            },
                            forced: true,
                            content() {
                                player.gain(game.createCard('sha'))._triggered = null;
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (card.name == 'sha' && get.color(card) == 'red') return [1, 0.6];
                                    },
                                    player(card, player, target) {
                                        if (card.name == 'sha' && get.color(card) == 'red') return [1, 1];
                                    },
                                },
                            },
                        },
                        xzjj_wu_xiongcai: {
                            trigger: {
                                player: 'phaseBefore',
                            },
                            forced: true,
                            init(player) {
                                player.storage.xzjj_wu_xiongcai = [];
                            },
                            intro: {
                                content: 'characters',
                            },
                            content() {
                                'step 0';
                                'step 1';
                                var list = [];
                                var list2 = [];
                                var players = game.players.concat(game.dead);
                                for (const i of players) {
                                    list2.add(i.name);
                                    list2.add(i.name1);
                                    list2.add(i.name2);
                                }
                                for (var i in lib.character) {
                                    if (lib.character[i][1] != 'wu') continue;
                                    if (lib.character[i][4].includes('boss')) continue;
                                    if (lib.character[i][4].includes('minskin')) continue;
                                    if (player.storage.xzjj_wu_xiongcai.includes(i)) continue;
                                    if (list2.includes(i)) continue;
                                    list.push(i);
                                }
                                var name = list.randomGet();
                                player.storage.xzjj_wu_xiongcai.push(name);
                                player.markSkill('xzjj_wu_xiongcai');
                                var skills = lib.character[name][3];
                                for (let i = 0; i < skills.length; i++) {
                                    player.addSkill(skills[i]);
                                }
                                event.dialog = ui.create.dialog('<div class="text center">' + get.translation(player) + '江东子弟何惧于天下!', [[name], 'character']);
                                ('step 2');
                                event.dialog.close();
                            },
                        },
                        xzjj_shu_xc: {
                            trigger: {
                                player: 'phaseBefore',
                            },
                            forced: true,
                            init(player) {
                                player.storage.xzjj_shu_xc = [];
                            },
                            intro: {
                                content: 'characters',
                            },
                            content() {
                                'step 0';
                                'step 1';
                                var list = [];
                                var list2 = [];
                                var players = game.players.concat(game.dead);
                                for (const i of players) {
                                    list2.add(i.name);
                                    list2.add(i.name1);
                                    list2.add(i.name2);
                                }
                                for (var i in lib.character) {
                                    if (lib.character[i][1] != 'shu') continue;
                                    if (lib.character[i][4].includes('boss')) continue;
                                    if (lib.character[i][4].includes('minskin')) continue;
                                    if (player.storage.xzjj_shu_xc.includes(i)) continue;
                                    if (list2.includes(i)) continue;
                                    list.push(i);
                                }
                                var name = list.randomGet();
                                player.storage.xzjj_shu_xc.push(name);
                                player.markSkill('xzjj_shu_xc');
                                var skills = lib.character[name][3];
                                for (let i = 0; i < skills.length; i++) {
                                    player.addSkill(skills[i]);
                                }
                                event.dialog = ui.create.dialog('<div class="text center">' + get.translation(player) + '北伐!北伐!北伐!', [[name], 'character']);
                                ('step 2');
                                event.dialog.close();
                            },
                        },
                        xzjj_xianfu: {
                            audio: 'ext:心之境界/audio:2',
                            trigger: {
                                player: 'phaseBefore',
                            },
                            filter(event, player) {
                                return game.players.length > 1;
                            },
                            async content(event, trigger, player) {
                                const { targets } = await player
                                    .chooseTarget('选择【先辅】的目标', lib.translate.xzjj_xianfu_info, true, function (card, player, target) {
                                        return target != player && !target.hasSkill('xianfu2') && !target.hasSkill('xzjj_xianfu2');
                                    })
                                    .set('ai', function (target) {
                                        var att = get.attitude(_status.event.player, target);
                                        if (att > 0) return att + 1;
                                        if (att == 0) return Math.random();
                                        return att;
                                    }).forResult();
                                if (targets?.length) {
                                    player.line(targets[0], 'green');
                                    targets[0].storage.xzjj_xianfu2 = player;
                                    targets[0].addSkill('xzjj_xianfu2');
                                    game.log(player, '发动了', '【先辅】');
                                }
                            },
                        },
                        xzjj_xianfu2: {
                            trigger: {
                                player: ['damageAfter', 'recoverAfter'],
                            },
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                return player.storage.xzjj_xianfu2?.isIn() && event.num > 0;
                            }, //QQQ
                            content() {
                                'step 0';
                                player.addSkill('xzjj_xianfu4');
                                ('step 1');
                                var target = player.storage.xzjj_xianfu2;
                                player.line(target, 'green');
                                target[trigger.name](trigger.num, trigger.source || 'nosource');
                            },
                            group: 'xzjj_xianfu3',
                        },
                        xzjj_xianfu3: {
                            trigger: {
                                global: 'dieAfter',
                            },
                            silent: true,
                            filter(event, player) {
                                return event.player == player.storage.xzjj_xianfu2;
                            },
                            content() {
                                player.removeSkill('xzjj_xianfu4');
                                player.removeSkill('xzjj_xianfu2');
                                player.addSkill('xzjj_tiandu');
                                player.addSkill('xzjj_yiji');
                            },
                            forced: true,
                            popup: false,
                        },
                        xzjj_xianfu4: {
                            mark: true,
                            marktext: '辅',
                            intro: {
                                content: '当你受到伤害后,对你使用【先辅】的角色受到等量的伤害,当你回复体力后,对你使用【先辅】的角色回复等量的体力,当对你使用【先辅】的角色死亡时,你获得技能【天妒】和【遗计】',
                            },
                            nopop: true,
                        },
                        xzjj_tiandu: {
                            audio: 'ext:心之境界/audio:2',
                            trigger: {
                                global: 'judgeEnd',
                                player: 'judgeEnd',
                            },
                            frequent(event) {
                                if (event.result.card.name == 'du') return false;
                                return true;
                            },
                            _priority: 1000000000000,
                            check(event) {
                                if (event.result.card.name == 'du') return false;
                                return true;
                            },
                            filter(event, player) {
                                return get.position(event.result.card, true) == 'o';
                            },
                            content() {
                                player.gain(trigger.result.card, 'gain2');
                            },
                        },
                        xzjj_yiji: {
                            audio: 'ext:心之境界/audio:1',
                            srlose: true,
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                'step 0';
                                event.num = Math.min(trigger.num, 9);
                                event.targets = [];
                                ('step 1');
                                if (event.num > 0) {
                                    event.num--;
                                    event.cards = get.cards(2);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (event.cards.length > 1) {
                                    player.chooseCardButton('将［遗计］牌分配给任意角色', true, event.cards, [1, event.cards.length]);
                                } else if (event.cards.length == 1) {
                                    event._result = { links: event.cards.slice(0), bool: true };
                                } else {
                                    event.goto(5);
                                    return;
                                }
                                ('step 3');
                                if (result.bool) {
                                    for (const i of result.links) {
                                        event.cards.remove(i);
                                    }
                                    event.togive = result.links.slice(0);
                                    player.chooseTarget('将' + get.translation(result.links) + '交给1名角色', true);
                                }
                                ('step 4');
                                if (result.targets.length) {
                                    if (!event.targets.includes(result.targets[0])) {
                                        event.targets.add(result.targets[0]);
                                    }
                                    result.targets[0].gain(event.togive, 'draw');
                                    player.line(result.targets[0], 'green');
                                    game.log(result.targets[0], '获得了' + get.cnNumber(event.togive.length) + '张牌');
                                    event.goto(2);
                                }
                                ('step 5');
                                if (event.targets.length == 1) {
                                    event.goto(6);
                                    return;
                                } else {
                                    if (event.num > 0) {
                                        event.goto(1);
                                    } else {
                                        event.finish();
                                    }
                                }
                                ('step 6');
                                player.judge(function (card) {
                                    if (card.suit == 'heart') return 2;
                                    return -2;
                                });
                                ('step 7');
                                if (result.judge > 0) {
                                    event.target.recover();
                                }
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
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
                                            if (target.hp >= 4) return [1, num * 2];
                                            if (target.hp == 3) return [1, num * 1.5];
                                            if (target.hp == 2) return [1, num * 0.5];
                                        }
                                    },
                                },
                            },
                        },
                        xzjj_chouce: {
                            audio: 'ext:心之境界/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            content() {
                                'step 0';
                                event.num = Math.min(trigger.num, 9);
                                ('step 1');
                                player.judge();
                                ('step 2');
                                event.color = result.color;
                                if (event.color == 'black') {
                                    player
                                        .chooseTarget('弃置一名角色区域内的一张牌', true, function (card, player, target) {
                                            return target.countCards('hej');
                                        })
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            var att = get.attitude(player, target);
                                            if (att < 0) {
                                                att = -Math.sqrt(-att);
                                            } else {
                                                att = Math.sqrt(att);
                                            }
                                            return att * lib.card.guohe.ai.result.target(player, target);
                                        });
                                } else {
                                    var next = player.chooseTarget('令一名角色摸一张牌', true);
                                    var xianfu = game.findPlayer(function (current) {
                                        return current.hasSkill('xzjj_xianfu2') && current.storage.xzjj_xianfu2 == player;
                                    });
                                    if (xianfu) {
                                        next.set('prompt2', '(若目标为' + get.translation(xianfu) + '则改为摸两张牌)');
                                    }
                                    next.set('ai', function (target) {
                                        var player = _status.event.player;
                                        var att = get.attitude(player, target) / Math.sqrt(1 + target.countCards('h'));
                                        if (target.storage.xzjj_xianfu2 == player) return att * 2;
                                        return att;
                                    });
                                }
                                ('step 3');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.line(target, 'green');
                                    if (event.color == 'black') {
                                        player.discardPlayerCard(target, 'hej', true);
                                    } else {
                                        if (target.hasSkill('xzjj_xianfu2') && target.storage.xzjj_xianfu2 == player) {
                                            target.draw(2);
                                        } else {
                                            target.draw();
                                        }
                                    }
                                }
                                ('step 4');
                                if (--event.num > 0) {
                                    player.chooseBool('是否再次发动【筹策】？');
                                } else {
                                    event.finish();
                                }
                                ('step 5');
                                if (result.bool) {
                                    event.goto(1);
                                }
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                            if (!target.hasFriend()) return;
                                            if (target.hp >= 4) return [1, get.tag(card, 'damage') * 1.5];
                                            if (target.hp == 3) return [1, get.tag(card, 'damage') * 1];
                                            if (target.hp == 2) return [1, get.tag(card, 'damage') * 0.5];
                                        }
                                    },
                                },
                            },
                        },
                        xzjj_chiuce2: {
                            trigger: {
                                player: 'damageBefore',
                                source: 'damageBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return (
                                    game.countPlayer(function (current) {
                                        return player != current && current != event.source;
                                    }) > 0
                                );
                            },
                            content() {
                                'step 0';
                                player.chooseTarget('是否改变伤害来源？', function (card, player, target) {
                                    return player != target && target != trigger.source;
                                }).ai = function (target) {
                                    return -get.attitude(player, target);
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.line(result.targets[0]);
                                    trigger.source = result.targets[0];
                                } else {
                                    event.finish();
                                }
                            },
                        },
                        xzjj_tiandu2: {
                            trigger: {
                                player: 'phaseBefore',
                            },
                            content() {
                                'step 0';
                                player.judge();
                                var chat = ['乐天知命,故不忧', '命中注定,有此一劫', '宠辱莫惊,去留无意!', '如果是注定的,那就欣然接受吧!'].randomGet();
                                player.say(chat);
                                ('step 1');
                                switch (result.card.suit) {
                                    case 'heart':
                                        player.recover();
                                        break;
                                    case 'diamond':
                                        player.draw(2);
                                        break;
                                    case 'club':
                                        player.chooseToDiscard('he', 1, true);
                                        break;
                                    case 'spade':
                                        player.damage();
                                        break;
                                }
                            },
                            ai: {
                                expose: 0.3,
                            },
                        },
                        xzjj_chouce3: {
                            audio: 'ext:心之境界/audio:2',
                            trigger: {
                                player: ['recoverEnd', 'damageEnd', 'loseHpEnd'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                'step 0';
                                event.cards = get.cards(2 * trigger.num);
                                ('step 1');
                                if (event.cards.length > 1) {
                                    player.chooseCardButton('将<筹策>牌分配给任意角色', true, event.cards, [1, event.cards.length]).set('ai', function (button) {
                                        if (ui.selected.buttons.length == 0) return 1;
                                        return 0;
                                    });
                                } else if (event.cards.length == 1) {
                                    event._result = { links: event.cards.slice(0), bool: true };
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    for (const i of result.links) {
                                        event.cards.remove(i);
                                    }
                                    event.togive = result.links.slice(0);
                                    player
                                        .chooseTarget('将' + get.translation(result.links) + '交给一名角色', true)
                                        .set('ai', function (target) {
                                            var att = get.attitude(_status.event.player, target);
                                            if (_status.event.enemy) {
                                                return -att;
                                            } else if (att > 0) {
                                                return att / (1 + target.countCards('h'));
                                            } else {
                                                return att / 100;
                                            }
                                        })
                                        .set('enemy', get.value(event.togive[0]) < 0);
                                }
                                ('step 3');
                                if (result.targets.length) {
                                    result.targets[0].gain(event.togive, 'draw');
                                    player.line(result.targets[0], 'green');
                                    game.log(result.targets[0], '获得了' + get.cnNumber(event.togive.length) + '张牌');
                                    event.goto(1);
                                }
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'recover')) {
                                            return [1, 2];
                                        }
                                        if (get.tag(card, 'damage')) {
                                            if (!target.hasFriend()) return;
                                            var num = 1;
                                            if (get.attitude(player, target) > 0) {
                                                if (player.needsToDiscard()) {
                                                    num = 0.7;
                                                } else {
                                                    num = 0.5;
                                                }
                                            }
                                            if (target.hp >= 4) return [1, num * 2];
                                            if (target.hp == 3) return [1, num * 1.5];
                                            if (target.hp == 2) return [1, num * 0.5];
                                        }
                                    },
                                },
                            },
                        },
                        xzjj_x1: {
                            audio: 'ext:心之境界/audio:2',
                            trigger: {
                                player: 'useCardBegin',
                            },
                            filter(event, player) {
                                return event.card.number == 1;
                            },
                            content() {
                                player.addMark('xzjj_bx1');
                            },
                        },
                        xzjj_xzyyy1: {
                            trigger: {
                                source: 'damageEnd',
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) < 0;
                            },
                            content() {
                                player.gain(target.trigger, 1, true);
                            },
                            ai: {
                                expose: 0.1,
                                result: {
                                    threaten: 0.8,
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage') && get.attitude(target, player) < 0) {
                                            return [1, 0, 0, -player.countCards('he', { color: 'red' })];
                                        }
                                    },
                                },
                            },
                        },
                        xzjj_xzyyy2: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) < 0;
                            },
                            filter(event, player) {
                                return event.source && event.source != player && event.source.countCards('he', { color: 'red' }) > 0;
                            },
                            content() {
                                trigger.source.discard(trigger.source.getCards('he', { color: 'black' }));
                                trigger.source.addTempSkill('xzjj_jsfengyin');
                            },
                            ai: {
                                expose: 0.1,
                                result: {
                                    threaten: 0.8,
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage') && get.attitude(target, player) < 0) {
                                            return [1, 0, 0, -player.countCards('he', { color: 'red' })];
                                        }
                                    },
                                },
                            },
                        },
                        xzjj_jsfengyin: {
                            init(player, skill) {
                                var skills = player.getSkills(true, false);
                                for (let i = 0; i < skills.length; i++) {
                                    if (get.skills[i]) {
                                        skills.splice(i--, 1);
                                    }
                                }
                                player.disableSkill(skill, skills);
                            },
                            onremove(player, skill) {
                                player.enableSkill(skill);
                            },
                            mark: true,
                            superCharlotte: true,
                            intro: {
                                content(storage, player, skill) {
                                    var list = [];
                                    for (var i in player.disabledSkills) {
                                        if (player.disabledSkills[i].includes(skill)) {
                                            list.push(i);
                                        }
                                    }
                                    if (list.length) {
                                        var str = '失效技能:';
                                        for (let i = 0; i < list.length; i++) {
                                            if (lib.translate[list[i] + '_info']) {
                                                str += get.translation(list[i]) + '、';
                                            }
                                        }
                                        return str.slice(0, str.length - 1);
                                    }
                                },
                            },
                        },
                        xzjj_linglong_f: {
                            audio: 'bagua_skill',
                            filter(event, player) {
                                if (player.getEquip(2)) return false;
                                if (event.responded) return false;
                                if (event.bagua_skill) return false;
                                if (!event.filterCard || !event.filterCard({ name: 'shan' }, player, event)) return false;
                                if (event.name == 'chooseToRespond' && !lib.filter.cardRespondable({ name: 'shan' }, player, event)) return false;
                                if (player.hasSkillTag('unequip2')) return false;
                                var evt = event.parent;
                                if (
                                    evt.player &&
                                    evt.player.hasSkillTag('unequip', false, {
                                        name: evt.card ? evt.card.name : null,
                                        target: player,
                                        card: evt.card,
                                    })
                                )
                                    return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                player.judge('rewrite_bagua', function (card) {
                                    return card.suit != 'spade' ? 1.5 : -0.5;
                                });
                                ('step 1');
                                if (result.judge > 0) {
                                    trigger.untrigger();
                                    trigger.set('responded', true);
                                    trigger.result = { bool: true, card: { name: 'shan' } };
                                }
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha' && !player.getEquip(1)) return num + 1;
                                },
                                globalTo(from, to, distance) {
                                    var e1 = to.getEquips(3);
                                    var e2 = to.getEquips(4);
                                    if (!e1 && !e2) return distance + 1;
                                },
                                globalFrom(from, to, distance) {
                                    var e1 = from.getEquips(3);
                                    var e2 = from.getEquips(4);
                                    if (!e1 && !e2) return distance - 1;
                                },
                            },
                            group: ['xzjj_linglong_b'],
                            trigger: {
                                player: ['chooseToRespondBegin', 'chooseToUseBegin'],
                            },
                            check(event, player) {
                                if (event && (event.ai || event.ai1)) {
                                    var ai = event.ai || event.ai1;
                                    var tmp = _status.event;
                                    _status.event = event;
                                    var result = ai({ name: 'shan' }, _status.event.player, event);
                                    _status.event = tmp;
                                    return result > 0;
                                }
                                return true;
                            },
                            ai: {
                                respondShan: true,
                                effect: {
                                    target(card, player, target, effect) {
                                        if (target.hasSkillTag('unequip2')) return;
                                        if (
                                            player.hasSkillTag('unequip', false, {
                                                name: card ? card.name : null,
                                                target: player,
                                                card: card,
                                            }) ||
                                            player.hasSkillTag('unequip', false, {
                                                name: card ? card.name : null,
                                                target: player,
                                                card: card,
                                            })
                                        )
                                            return;
                                        if (get.tag(card, 'respondShan')) return 0.5;
                                    },
                                },
                            },
                        },
                        xzjj_linglong_b: {
                            trigger: {
                                player: 'phaseBefore',
                            },
                            forced: true,
                            content() {
                                player.draw(2);
                            },
                        },
                        xzjj_linglong: {
                            forced: true,
                            charlotte: true,
                            group: ['xzjj_linglong_wuqi', 'xzjj_linglong_fangju', 'xzjj_linglong_zuoji', 'xzjj_linglong_baowu'],
                            subSkill: {
                                wuqi: {
                                    trigger: {
                                        player: 'shaBegin',
                                    },
                                    logTarget: 'target',
                                    _priority: 100000000,
                                    forced: true,
                                    filter(event, player) {
                                        return player.getEquip(1) && event.target.countCards('he');
                                    },
                                    content() {
                                        trigger.target.chooseToDiscard(1, 'he', true);
                                    },
                                },
                                fangju: {
                                    trigger: {
                                        player: 'damageBegin4',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.getEquip(2) && event.num > 1;
                                    },
                                    content() {
                                        trigger.num = 1;
                                    },
                                },
                                zuoji: {
                                    trigger: {
                                        target: 'shaBegin',
                                    },
                                    forced: true,
                                    _priority: 99,
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha' && get.color(event.card) == 'red' && (player.getEquip(3) || player.getEquip(4));
                                    },
                                    content() {
                                        trigger.cancel();
                                    },
                                },
                                baowu: {
                                    enable: 'phaseUse',
                                    usable: 1,
                                    position: 'he',
                                    filterCard: true,
                                    selectCard: [1, 7],
                                    prompt: '弃置最多7张牌并摸等量的牌',
                                    check(card) {
                                        return 6 - get.value(card);
                                    },
                                    content() {
                                        player.draw(cards.length);
                                    },
                                },
                            },
                        },
                        xzjj_qiaojiang: {
                            group: ['xzjj_qiaojiang_w', 'xzjj_qiaojiang_f', 'xzjj_qiaojiang_b'],
                            trigger: {
                                player: 'equipBegin',
                            },
                            forced: true,
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
                        },
                        xzjj_qicai: {
                            group: ['xzjj_qicai_mod'],
                            audio: 'ext:心之境界/audio:2',
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            _priority: 100000000,
                            filter(event, player) {
                                return get.type(event.card) == 'trick';
                            },
                            content() {
                                trigger.nowuxie = true;
                            },
                            mod: {
                                targetEnabled(card, player, target) {
                                    if (get.type(card) == 'delay') {
                                        return false;
                                    }
                                },
                            },
                        },
                        xzjj_qicai_mod: {
                            mod: {
                                targetInRange(card, player, target, now) {
                                    var type = get.type(card);
                                    if (type == 'trick' || type == 'delay') return true;
                                },
                                canBeDiscarded(card) {
                                    if (get.type(card) == 'equip' && get.position(card) == 'e') return false;
                                },
                                canBeGained(card) {
                                    if (get.type(card) == 'equip' && get.position(card) == 'e') return false;
                                },
                            },
                        },
                        xzjj_qiaojiang_b: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            _priority: 100000000,
                            check() {
                                return 1;
                            },
                            content() {
                                var card = get.cardPile(function (card) {
                                    return get.subtype(card) == 'equip5';
                                });
                                if (card) {
                                    player.gain(card, 'gain2');
                                    game.log(player, '从牌堆获得了', card);
                                }
                            },
                        },
                        xzjj_qiaojiang_f: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            _priority: 10000000,
                            check() {
                                return 1;
                            },
                            content() {
                                var card = get.cardPile(function (card) {
                                    return get.subtype(card) == 'equip2';
                                });
                                if (card) {
                                    player.gain(card, 'gain2');
                                    game.log(player, '从牌堆获得了', card);
                                }
                            },
                        },
                        xzjj_qiaojiang_w: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            _priority: 1000000,
                            check() {
                                return 1;
                            },
                            content() {
                                var card = get.cardPile(function (card) {
                                    return get.subtype(card) == 'equip1';
                                });
                                if (card) {
                                    player.gain(card, 'gain2');
                                    game.log(player, '从牌堆获得了', card);
                                }
                            },
                        },
                        cedx: {
                            audio: 'ext:心之境界/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            selectTarget: [0, Infinity],
                            filterTarget(card, player, target) {
                                if (target.sex != 'male') return true;
                                if (target.hp >= target.maxHp) return true;
                                if (target == player) return true;
                                return true;
                            },
                            content() {
                                var num = [1, 1, 1, 1, 1, 1, 1, 1, 1, 3].randomGet();
                                target.damage(num, 'fire');
                            },
                        },
                        xzjj_buqu: {
                            audio: 'ext:心之境界/audio:2',
                            trigger: {
                                player: 'changeHp',
                            },
                            _priority: 100000000,
                            filter(event, player) {
                                return player.hp <= 0 && event.num < 0;
                            },
                            init(player) {
                                if (!player.storage.xzjj_buqu) player.storage.xzjj_buqu = [];
                            },
                            intro: {
                                content: 'cards',
                            },
                            group: 'xzjj_buqu_recover',
                            forced: true,
                            ondisable: true,
                            onremove(player) {
                                if (player.storage.xzjj_buqu.length) {
                                    delete player.nodying;
                                    player.hp = 1 - player.storage.xzjj_buqu.length;
                                    game.log(player, '移去了不屈牌', player.storage.xzjj_buqu);
                                    game.cardsDiscard(player.storage.xzjj_buqu);
                                    player.storage.xzjj_buqu = [];
                                    player.unmarkSkill('xzjj_buqu');
                                    player.dying({});
                                }
                            },
                            process(player) {
                                delete player.nodying;
                                player.markSkill('xzjj_buqu');
                                var nums = [];
                                var cards = player.storage.gzbuqu;
                                if (Array.isArray(cards))
                                    for (const i of cards) {
                                        if (nums.includes(i.number)) {
                                            return;
                                        } else {
                                            nums.push(i.number);
                                        }
                                    }
                                player.nodying = true;
                            },
                            subSkill: {
                                recover: {
                                    trigger: {
                                        player: 'changeHp',
                                    },
                                    filter(event, player) {
                                        return player.storage.xzjj_buqu.length && event.num > 0;
                                    },
                                    forced: true,
                                    popup: false,
                                    content() {
                                        'step 0';
                                        event.count = Math.min(trigger.num, 9);
                                        ('step 1');
                                        event.count--;
                                        if (player.hp + player.storage.xzjj_buqu.length > 1) {
                                            player.chooseCardButton('移去一张不屈牌', true, player.storage.xzjj_buqu).set('ai', function (button) {
                                                var buttons = get.selectableButtons();
                                                for (let i = 0; i < buttons.length; i++) {
                                                    if (buttons[i] != button && buttons[i].link.number == button.link.number && !ui.selected.buttons.includes(buttons[i])) {
                                                        return 1;
                                                    }
                                                }
                                                return 0;
                                            });
                                        }
                                        ('step 2');
                                        for (const i of result.links) {
                                            i.discard();
                                            player.storage.xzjj_buqu.remove(i);
                                        }
                                        player.$throw(result.links);
                                        game.log(player, '移去了不屈牌', result.links);
                                        if (event.count) event.goto(1);
                                        ('step 3');
                                        lib.skill.xzjj_buqu.process(player);
                                    },
                                },
                            },
                            content() {
                                'step 0';
                                var num = -trigger.num - Math.max(player.hp - trigger.num, 1) + 1;
                                var cards = get.cards(num);
                                game.cardsGotoSpecia(cards);
                                player.storage.xzjj_buqu.addArray(cards);
                                player.showCards(get.translation(player) + '的不屈牌', player.storage.xzjj_buqu);
                                ('step 1');
                                lib.skill.xzjj_buqu.process(player);
                            },
                            ai: {
                                mingzhi: true,
                            },
                        },
                        xzjj_buqu2: {
                            audio: 'ext:心之境界/audio:2',
                            trigger: {
                                player: ['loseAfter', 'changeHp'],
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h') < player.getDamagedHp();
                            },
                            content() {
                                player.draw(player.getDamagedHp() - player.countCards('h'));
                            },
                            ai: {
                                noh: true,
                                skillTagFilter(player, tag) {
                                    if (tag == 'noh' && player.maxHp - player.hp < player.countCards('h')) {
                                        return false;
                                    }
                                },
                            },
                        },
                        xzjj_fuchou: {
                            audio: 'ext:心之境界/audio:2',
                            trigger: {
                                global: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.notLink() && event.source && event.source.isAlive();
                            },
                            prompt(event, player) {
                                var str = '';
                                str += '是否对' + get.translation(event.source) + '发动【复仇】';
                                return str;
                            },
                            content() {
                                player.damage();
                                player.line(trigger.source);
                                trigger.source.loseHp();
                                trigger.player.draw(2);
                                player.draw();
                            },
                        },
                        xzjj_buqu3: {
                            audio: 'ext:心之境界/audio:2',
                            srlose: true,
                            trigger: {
                                player: 'dying',
                            },
                            _priority: -6,
                            filter(event, player) {
                                return event.player.hp <= 0 && event.player.countCards('h') > 0;
                            },
                            logTarget: 'player',
                            check(event, player) {
                                var att = get.attitude(player, event.player);
                                var save = false;
                                var players = game.filterPlayer();
                                for (const i of players) {
                                    if (i == event.player) continue;
                                    if ((i, event.player <= 0)) continue;
                                    if (i.countCards('h', { name: 'tao' })) save = true;
                                    break;
                                }
                                if (event.player.countCards('h', { name: 'tao' }) || event.player.countCards('h', { name: 'jiu' })) save = true;
                                if (att > 0 && save == true) return false;
                                if (att < 0 && save == false) return false;
                                if (att < 0 && save == true && event.player.countCards('h') <= 4) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                var cards = trigger.player.getCards('h');
                                event.bool = cards.length >= 2;
                                trigger.player.discard(cards);
                                trigger.player.recover(2);
                                ('step 1');
                                if (event.bool) {
                                    trigger.player.draw(1);
                                }
                            },
                            ai: {
                                expose: 0.2,
                                threaten: 1.5,
                            },
                        },
                        xzjj_huangxiangzhijian: {
                            intro: {
                                content: 'cards',
                            },
                            enable: 'phaseUse',
                            filter(event, player, storage) {
                                return player.countCards('h') > 0;
                            },
                            filterCard: true,
                            selectCard: [1, Infinity],
                            discard: false,
                            lose: true,
                            init(player) {
                                player.storage.幻想之心 = [];
                            },
                            content() {
                                player.lose(event.cards, ui.special);
                                player.storage.方舟 = player.storage.幻想.concat(event.cards);
                                player.markSkill('幻想之心');
                                game.log(player, '将', event.cards, '放入幻想');
                            },
                        },
                        xzjj_qixing: {
                            group: ['xzjj_qixing2', 'xzjj_qixing3'],
                            intro: {
                                content: 'cards',
                            },
                            enable: 'phaseUse',
                            filter(event, player, storage) {
                                return player.countCards('h') > 0;
                            },
                            filterCard: true,
                            selectCard: [1, 171],
                            discard: false,
                            lose: true,
                            init(player) {
                                player.storage.xzjj_qixing = [];
                            },
                            content() {
                                player.lose(event.cards, ui.special);
                                player.storage.xzjj_qixing = player.storage.xzjj_qixing.concat(event.cards);
                                player.markSkill('xzjj_qixing');
                                game.log(player, '将', event.cards, '置入星辰');
                            },
                        },
                        xzjj_qixing2: {
                            init(player) {
                                player.storage.xzjj_qixing = [];
                            },//QQQ
                            enable: 'chooseToUse',
                            filter(event, player) {
                                return player.storage.xzjj_qixing.length;
                            },
                            alter: true,
                            chooseButton: {
                                dialog(event, player) {
                                    return ui.create.dialog('星辰:选择一张牌使用', player.storage.xzjj_qixing);
                                },
                                filter(button, player) {
                                    var evt = _status.event.parent;
                                    if (evt && evt.filterCard) {
                                        return evt.filterCard(button.link, player, evt);
                                    }
                                    return false;
                                },
                                backup(links, player) {
                                    return {
                                        filterCard() {
                                            return false;
                                        },
                                        selectCard: -1,
                                        viewAs: links[0],
                                        onuse(result, player) {
                                            var card = links[0];
                                            player.storage.xzjj_qixing.remove(card);
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '请选择' + get.translation(links[0]) + '的目标';
                                },
                            },
                            ai: {
                                save: true,
                                sha: true,
                                order: 12,
                                result: {
                                    player: 1,
                                },
                                threaten: 1.7,
                            },
                        },
                        xzjj_qixing3: {
                            trigger: {
                                player: 'chooseToRespondBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.xzjj_qixing.length;
                            },
                            content() {
                                'step 0';
                                player.chooseCardButton('星辰:选择一张卡牌打出', player.storage.xzjj_qixing).set('filterButton', function (button) {
                                    return _status.event.getTrigger().filterCard(button.link);
                                });
                                ('step 1');
                                if (result.bool) {
                                    game.log(player, '沟通星辰成功');
                                    trigger.untrigger();
                                    trigger.responded = true;
                                    player.storage.xzjj_qixing.remove(result.links[0]);
                                    trigger.result = { bool: true, card: result.links[0] };
                                }
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, effect) {
                                        if (get.tag(card, 'respondShan')) return 0.7;
                                        if (get.tag(card, 'respondSha')) return 0.7;
                                    },
                                },
                            },
                        },
                        xzjj_xingdeng: {
                            audio: 'ext:心之境界/audio:true',
                            enable: 'chooseToUse',
                            mark: true,
                            limited: true,
                            init(player) {
                                player.storage.xzjj_xingdeng = false;
                            },
                            filter(event, player) {
                                if (player.storage.xzjj_xingdeng) return false;
                                if (event.type == 'dying') {
                                    if (player != event.dying) return false;
                                    return true;
                                } else if (event.parent.name == 'phaseUse') {
                                    return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                player.addSkill('xzjj_rangxing');
                                player.removeSkill('xzjj_xingdeng');
                                player.storage.xzjj_xingdeng = true;
                                player.discard(player.getCards('hej'));
                                ('step 1');
                                player.turnOver(false);
                                ('step 2');
                                player.draw(7);
                                ('step 3');
                                if (player.hp < 1) {
                                    player.recover(1 - player.hp);
                                }
                            },
                            ai: {
                                order: 0.5,
                                skillTagFilter(player) {
                                    if (player.storage.xzjj_xingdeng) return false;
                                    if (player.hp > 0) return false;
                                },
                                save: true,
                                result: {
                                    player(player) {
                                        if (player.hp <= 0) return 10;
                                        if (player.hp <= 1 && player.countCards('he') <= 1) return 10;
                                        if (player.skills.includes('xzjj_xingdeng') == false && (player.hp <= 2 || player.countCards('h') <= 2)) return 5;
                                        return 0;
                                    },
                                },
                                threaten(player, target) {
                                    if (!target.storage.xzjj_xingdeng) return 0.6;
                                },
                            },
                            intro: {
                                content: 'limited',
                            },
                        },
                        xzjj_rangxing: {
                            group: ['xzjj_rangxing2', 'xzjj_rangxing3'],
                            audio: 'ext:心之境界/audio:true',
                            trigger: {
                                player: 'phaseBefore',
                            },
                            forced: true,
                            content() {
                                player.addMark('xzjj_rangxing', 1);
                            },
                            marktext: '星灯',
                            intro: {
                                name: '禳星',
                                name2: '星',
                                content: '当前#盏<星灯>',
                            },
                        },
                        xzjj_rangxing2: {
                            audio: 'ext:心之境界/audio:2',
                            trigger: {
                                player: 'dying',
                            },
                            _priority: 10,
                            filter(event, player) {
                                return player.hp <= 0 && player.maxHp > 1;
                            },
                            content() {
                                'step 0';
                                if (player.maxHp > 1) {
                                    player.draw(3);
                                    player.maxHp -= 1;
                                    player.hp = 1;
                                    player.update();
                                } else {
                                    event.finish();
                                }
                            },
                        },
                        xzjj_guanxing: {
                            audio: 'ext:心之境界/audio:6',
                            audioname: ['jiangwei', 're_jiangwei', 're_zhugeliang'],
                            trigger: {
                                global: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (player.isUnderControl()) {
                                    game.modeSwapPlayer(player);
                                }
                                var num = Math.min(5, game.countPlayer());
                                if (player.hasSkill('yizhi') && player.hasSkill('guanxing')) {
                                    num = 5;
                                }
                                var cards = get.cards(num);
                                event.cards = cards;
                                var switchToAuto = function () {
                                    _status.imchoosing = false;
                                    if (event.dialog) event.dialog.close();
                                    if (event.control) event.control.close();
                                    const target = trigger.player;
                                    const att = get.attitude(player, target);
                                    const top = [], bottom = cards;
                                    for (const i of target.getCards('j')) {
                                        const judge = get.judge(i);
                                        bottom.sort((a, b) => (judge(b) - judge(a)) * att); //态度大于0价值高的牌放前面
                                        if (bottom.length) {
                                            top.push(bottom.shift());
                                        }
                                    }
                                    bottom.sort((a, b) => (get.value(b) - get.value(a)) * att); //态度大于0价值高的牌放前面
                                    while (bottom.length) {
                                        top.push(bottom.shift());
                                    }
                                    top.reverse();
                                    for (let i = 0; i < top.length; i++) {
                                        ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
                                    }
                                    for (let i = 0; i < bottom.length; i++) {
                                        ui.cardPile.appendChild(bottom[i]);
                                    }
                                    player.popup(get.cnNumber(top.length) + '上' + get.cnNumber(bottom.length) + '下');
                                    game.log(player, '将' + get.cnNumber(top.length) + '张牌置于牌堆顶');
                                };
                                var chooseButton = function (online, player, cards) {
                                    var event = _status.event;
                                    player = player || event.player;
                                    cards = cards || event.cards;
                                    event.top = [];
                                    event.bottom = [];
                                    event.status = true;
                                    event.dialog = ui.create.dialog('按顺序选择置于牌堆顶的牌(先选择的在上)', cards);
                                    for (let i = 0; i < event.dialog.buttons.length; i++) {
                                        event.dialog.buttons[i].classList.add('pointerdiv');
                                    }
                                    event.switchToAuto = function () {
                                        event._result = 'ai';
                                        event.dialog.close();
                                        event.control.close();
                                        _status.imchoosing = false;
                                    };
                                    event.control = ui.create.control('ok', 'pileTop', 'pileBottom', function (link) {
                                        var event = _status.event;
                                        if (link == 'ok') {
                                            if (online) {
                                                event._result = {
                                                    top: [],
                                                    bottom: [],
                                                };
                                                for (let i = 0; i < event.top.length; i++) {
                                                    event._result.top.push(event.top[i].link);
                                                }
                                                for (let i = 0; i < event.bottom.length; i++) {
                                                    event._result.bottom.push(event.bottom[i].link);
                                                }
                                            } else {
                                                var i;
                                                for (let i = 0; i < event.top.length; i++) {
                                                    ui.cardPile.insertBefore(event.top[i].link, ui.cardPile.firstChild);
                                                }
                                                for (let i = 0; i < event.bottom.length; i++) {
                                                    ui.cardPile.appendChild(event.bottom[i].link);
                                                }
                                                for (let i = 0; i < event.dialog.buttons.length; i++) {
                                                    if (event.dialog.buttons[i].classList.contains('glow') == false && event.dialog.buttons[i].classList.contains('target') == false) ui.cardPile.appendChild(event.dialog.buttons[i].link);
                                                }
                                                player.popup(get.cnNumber(event.top.length) + '上' + get.cnNumber(event.cards.length - event.top.length) + '下');
                                                game.log(player, '将' + get.cnNumber(event.top.length) + '张牌置于牌堆顶');
                                            }
                                            event.dialog.close();
                                            event.control.close();
                                            game.resume();
                                            _status.imchoosing = false;
                                        } else if (link == 'pileTop') {
                                            event.status = true;
                                            event.dialog.content.childNodes[0].innerHTML = '按顺序选择置于牌堆顶的牌';
                                        } else {
                                            event.status = false;
                                            event.dialog.content.childNodes[0].innerHTML = '按顺序选择置于牌堆底的牌';
                                        }
                                    });
                                    for (let i = 0; i < event.dialog.buttons.length; i++) {
                                        event.dialog.buttons[i].classList.add('selectable');
                                    }
                                    event.custom.replace.button = function (link) {
                                        var event = _status.event;
                                        if (link.classList.contains('target')) {
                                            link.classList.remove('target');
                                            event.top.remove(link);
                                        } else if (link.classList.contains('glow')) {
                                            link.classList.remove('glow');
                                            event.bottom.remove(link);
                                        } else if (event.status) {
                                            link.classList.add('target');
                                            event.top.unshift(link);
                                        } else {
                                            link.classList.add('glow');
                                            event.bottom.push(link);
                                        }
                                    };
                                    event.custom.replace.window = function () {
                                        for (let i = 0; i < _status.event.dialog.buttons.length; i++) {
                                            _status.event.dialog.buttons[i].classList.remove('target');
                                            _status.event.dialog.buttons[i].classList.remove('glow');
                                            _status.event.top.length = 0;
                                            _status.event.bottom.length = 0;
                                        }
                                    };
                                    game.pause();
                                    game.countChoose();
                                };
                                event.switchToAuto = switchToAuto;
                                if (event.isMine()) {
                                    chooseButton();
                                    event.finish();
                                } else if (event.isOnline()) {
                                    event.player.send(chooseButton, true, event.player, event.cards);
                                    event.player.wait();
                                    game.pause();
                                } else {
                                    event.switchToAuto();
                                    event.finish();
                                }
                                ('step 1');
                                if (event.result == 'ai' || !event.result) {
                                    event.switchToAuto();
                                } else {
                                    var top = event.result.top || [];
                                    var bottom = event.result.bottom || [];
                                    for (let i = 0; i < top.length; i++) {
                                        ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
                                    }
                                    for (let i = 0; i < bottom.length; i++) {
                                        ui.cardPile.appendChild(bottom[i]);
                                    }
                                    if (Array.isArray(event.cards))
                                        for (const i of event.cards) {
                                            if (!top.includes(i) && !bottom.includes(i)) {
                                                ui.cardPile.appendChild(i);
                                            }
                                        }
                                    player.popup(get.cnNumber(top.length) + '上' + get.cnNumber(event.cards.length - top.length) + '下');
                                    game.log(player, '将' + get.cnNumber(top.length) + '张牌置于牌堆顶');
                                    game.updateRoundNumber();
                                }
                            },
                            ai: {
                                threaten: 1.2,
                            },
                        },
                        xzjj_kuangfeng: {
                            audio: 'ext:心之境界/audio:2',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.xzjj_qixing && player.storage.xzjj_qixing.length;
                            },
                            content() {
                                'step 0';
                                var clearKuangfeng = game.players.find((q) => q.name == 'xzjj_kuangfeng2');
                                if (clearKuangfeng) {
                                    clearKuangfeng.removeSkill('xzjj_kuangfeng2');
                                    clearKuangfeng.popup('xzjj_kuangfeng2');
                                }
                                player.chooseTarget('选择1名角色获得狂风标记').ai = function (target) {
                                    if (player.storage.xzjj_qixing.length > 3) return target.isEnemiesOf(player); //QQQ
                                    return -1;
                                };
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].addSkill('xzjj_kuangfeng2');
                                    result.targets[0].popup('xzjj_kuangfeng');
                                    player.chooseCardButton('弃置1枚［星］', player.storage.xzjj_qixing, true);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                player.storage.xzjj_qixing.remove(result.links[0]);
                                if (player.storage.xzjj_qixing.length == 0) {
                                    player.unmarkSkill('xzjj_qixing');
                                }
                                player.discard(result.links);
                            },
                        },
                        xzjj_dawu: {
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            _priority: 1,
                            forced: true,
                            filter(event, player) {
                                return player.storage.xzjj_qixing && player.storage.xzjj_qixing.length;
                            },
                            audio: 'ext:心之境界/audio:2',
                            content() {
                                'step 0';
                                player.chooseTarget('选择角色获得大雾标记', [1, Math.min(game.players.length, player.storage.xzjj_qixing.length)]).ai = function (target) {
                                    if (target.isMin()) return 0;
                                    var att = get.attitude(player, target);
                                    if (att >= 4) {
                                        if (target.hp == 1 && target.maxHp > 2) return att;
                                        if (target.hp == 2 && target.maxHp > 3 && target.countCards('he') == 0) return att * 0.7;
                                        return 0;
                                    }
                                    return -1;
                                };
                                ('step 1');
                                if (result.bool) {
                                    var length = result.targets.length;
                                    for (let i = 0; i < length; i++) {
                                        result.targets[i].addSkill('xzjj_dawu2');
                                        result.targets[i].popup('xzjj_dawu');
                                    }
                                    player.chooseCardButton('弃置' + get.cnNumber(length) + '枚［星］', length, player.storage.xzjj_qixing, true);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                for (const i of result.links) {
                                    player.storage.xzjj_qixing.remove(i);
                                }
                                if (player.storage.xzjj_qixing.length == 0) {
                                    player.unmarkSkill('xzjj_qixing');
                                }
                                player.discard(result.links);
                            },
                            group: ['xzjj_dawu_remove'],
                            subSkill: {
                                remove: {
                                    trigger: {
                                        player: ['phaseBegin', 'dieBegin'],
                                    },
                                    forced: true,
                                    popup: false,
                                    silent: true,
                                    content() {
                                        for (const i of game.players) {
                                            if (i.hasSkill('xzjj_dawu2')) {
                                                i.removeSkill('xzjj_dawu2');
                                                i.popup('xzjj_dawu');
                                            }
                                            if (i.hasSkill('xzjj_kuangfeng2')) {
                                                i.removeSkill('xzjj_kuangfeng2');
                                                i.popup('xzjj_kuangfeng2');
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        xzjj_dawu2: {
                            trigger: {
                                player: 'damageBefore',
                            },
                            filter(event, player) {
                                if (event.nature != 'thunder') return true;
                                return false;
                            },
                            marktext: '雾',
                            mark: true,
                            forced: true,
                            content() {
                                trigger.cancel();
                            },
                            ai: {
                                nofire: true,
                                nodamage: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'damage') && !get.tag(card, 'thunderDamage')) return [0, 0];
                                    },
                                },
                            },
                            intro: {
                                content: '已获得大雾标记',
                            },
                        },
                        xzjj_kuangfeng2: {
                            trigger: {
                                player: 'damageBegin3',
                            },
                            mark: true,
                            marktext: '风',
                            intro: {
                                content: '已获得［风］标记',
                            },
                            forced: true,
                            content() {
                                var xzjj_zhugeliang = game.players.find((q) => q.name == 'xzjj_kuangfeng');
                                if (xzjj_zhugeliang) {
                                    if (trigger.nature) {
                                        if (trigger.nature == 'fire') {
                                            xzjj_zhugeliang.line(player, 'fire');
                                            trigger.num++;
                                        }
                                        if (trigger.nature == 'thunder') {
                                            xzjj_zhugeliang.line(player, 'thunder');
                                            player.chooseToDiscard(2, true);
                                        }
                                    } else {
                                        if (xzjj_zhugeliang && xzjj_zhugeliang.storage.xzjj_qixing) {
                                            xzjj_zhugeliang.line(player, 'water');
                                            var card = get.cards();
                                            xzjj_zhugeliang.$draw(1);
                                            xzjj_zhugeliang.lose(card, ui.special)._triggered = null;
                                            xzjj_zhugeliang.storage.xzjj_qixing = xzjj_zhugeliang.storage.xzjj_qixing.concat(card);
                                            xzjj_zhugeliang.markSkill('xzjj_qixing');
                                            game.log(xzjj_zhugeliang, '将牌堆顶的1张牌置入［星］');
                                        }
                                    }
                                }
                            },
                            ai: {
                                threaten: 3,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'fireDamage')) return 1.5;
                                        if (get.tag(card, 'thunderDamage')) return 1;
                                    },
                                },
                            },
                        },
                        xzjj_bazhen: {
                            audio: 'ext:心之境界/audio:4',
                            filter(event, player) {
                                if (player.getEquip(2)) return false;
                                if (event.responded) return false;
                                if (event.bagua_skill) return false;
                                if (!event.filterCard || !event.filterCard({ name: 'shan' }, player, event)) return false;
                                if (event.name == 'chooseToRespond' && !lib.filter.cardRespondable({ name: 'shan' }, player, event)) return false;
                                if (player.hasSkillTag('unequip2')) return false;
                                var evt = event.parent;
                                if (
                                    evt.player &&
                                    evt.player.hasSkillTag('unequip', false, {
                                        name: evt.card ? evt.card.name : null,
                                        target: player,
                                        card: evt.card,
                                    })
                                )
                                    return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                player.judge('rewrite_bagua', function (card) {
                                    return card.suit != 'spade' ? 1.5 : -0.5;
                                });
                                ('step 1');
                                if (result.judge > 0) {
                                    trigger.untrigger();
                                    trigger.set('responded', true);
                                    trigger.result = { bool: true, card: { name: 'shan' } };
                                }
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha' && !player.getEquip(1)) return num + 1;
                                },
                                globalTo(from, to, distance) {
                                    var e1 = to.getEquips(3);
                                    var e2 = to.getEquips(4);
                                    if (!e1 && !e2) return distance + 1;
                                },
                                globalFrom(from, to, distance) {
                                    var e1 = from.getEquips(3);
                                    var e2 = from.getEquips(4);
                                    if (!e1 && !e2) return distance - 1;
                                },
                            },
                            trigger: {
                                player: ['chooseToRespondBegin', 'chooseToUseBegin'],
                            },
                            check(event, player) {
                                if (event && (event.ai || event.ai1)) {
                                    var ai = event.ai || event.ai1;
                                    var tmp = _status.event;
                                    _status.event = event;
                                    var result = ai({ name: 'shan' }, _status.event.player, event);
                                    _status.event = tmp;
                                    return result > 0;
                                }
                                return true;
                            },
                            ai: {
                                respondShan: true,
                                effect: {
                                    target(card, player, target, effect) {
                                        if (target.hasSkillTag('unequip2')) return;
                                        if (
                                            player.hasSkillTag('unequip', false, {
                                                name: card ? card.name : null,
                                                target: player,
                                                card: card,
                                            }) ||
                                            player.hasSkillTag('unequip', false, {
                                                name: card ? card.name : null,
                                                target: player,
                                                card: card,
                                            })
                                        )
                                            return;
                                        if (get.tag(card, 'respondShan')) return 0.5;
                                    },
                                },
                            },
                        },
                        xzjj_kongchen: {
                            audio: 'ext:心之境界/audio:5',
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            check(event, player) {
                                if (player == event.player) return true;
                                return false;
                            },
                            filter(event, player) {
                                return player.countCards('h') == 0;
                            },
                            content() {
                                trigger.cancel();
                            },
                        },
                        xzjj_rangxing3: {
                            audio: 'ext:心之境界/audio:2',
                            trigger: {
                                player: 'phaseBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countMark('xzjj_rangxing') >= 7;
                            },
                            content() {
                                player.removeMark('xzjj_rangxing', 7);
                                player.gainMaxHp(7);
                                player.recover(7);
                                player.draw(7);
                                player.removeSkill('xzjj_rangxing');
                                player.removeSkill('xzjj_rangxing2');
                                player.addSkill();
                            },
                        },
                        xzjj_guhuo: {
                            group: ['old_guhuo_guess', 'old_guhuo_respond', 'old_guhuo_wuxie'],
                            enable: 'chooseToUse',
                            filter(event, player) {
                                if (!player.countCards('h')) return false;
                                var list = ['sha', 'tao', 'shan', 'jiu', 'taoyuan', 'wugu', 'juedou', 'huogong', 'jiedao', 'tiesuo', 'guohe', 'shunshou', 'wuzhong', 'wanjian', 'nanman'];
                                if (get.mode() == 'guozhan') {
                                    list = list.concat(['xietianzi', 'shuiyanqijunx', 'lulitongxin', 'lianjunshengyan', 'chiling', 'diaohulishan', 'yuanjiao', 'huoshaolianying']);
                                }
                                for (let i = 0; i < list.length; i++) {
                                    if (event.filterCard && event.filterCard({ name: list[i] }, player)) return true;
                                }
                                return false;
                            },
                            chooseButton: {
                                dialog() {
                                    var list = [];
                                    for (let i = 0; i < lib.inpile.length; i++) {
                                        var name = lib.inpile[i];
                                        if (name == 'wuxie') continue;
                                        if (name == 'sha') {
                                            list.push(['基本', '', 'sha']);
                                            list.push(['基本', '', 'sha', 'fire']);
                                            list.push(['基本', '', 'sha', 'thunder']);
                                        } else if (get.type(name) == 'trick') list.push(['锦囊', '', name]);
                                        else if (get.type(name) == 'basic') list.push(['基本', '', name]);
                                    }
                                    return ui.create.dialog('蛊惑', [list, 'vcard']);
                                },
                                filter(button, player) {
                                    var evt = _status.event.parent;
                                    if (evt && evt.filterCard) {
                                        return evt.filterCard({ name: button.link[2] }, player, evt);
                                    }
                                    return true;
                                },
                                backup(links, player) {
                                    return {
                                        filterCard: true,
                                        selectCard: 1,
                                        viewAs: { name: links[0][2], nature: links[0][3] },
                                    };
                                },
                                prompt(links, player) {
                                    return '将一张手牌当' + get.translation(links[0][2]) + '使用';
                                },
                            },
                            ai: {
                                save: true,
                                respondShan: true,
                                respondSha: true,
                            },
                        },
                        xzjj_guhuo_guess: {
                            audio: 'guhuo_guess',
                            trigger: {
                                player: 'useCardBefore',
                            },
                            filter(event, player) {
                                return event.skill == 'xzjj_guhuo_backup' || event.skill == 'xzjj_guhuo_wuxie';
                            },
                            forced: true,
                            _priority: 15,
                            content() {
                                'step 0';
                                player.popup(trigger.card.name, 'metal');
                                player.lose(trigger.cards, ui.special);
                                player.line(trigger.targets, trigger.card.nature);
                                trigger.line = false;
                                event.prompt = get.translation(player) + '声明了' + get.translation(trigger.card.name) + ',是否质疑？';
                                event.guessers = game.filterPlayer(function (current) {
                                    return current != player && current.hp > 0;
                                });
                                event.guessers.sort(lib.sort.seat);
                                event.ally = [];
                                event.betray = [];
                                ('step 1');
                                if (event.guessers.length == 0) event.goto(3);
                                else {
                                    event.guessers[0]
                                        .chooseControl('质疑', '不质疑')
                                        .set('prompt', event.prompt)
                                        .set('ai', function () {
                                            if (get.attitude(event.guessers[0], player) > 0) return '不质疑';
                                            return Math.random() < 0.5 ? '不质疑' : '质疑';
                                        });
                                }
                                ('step 2');
                                if (!result.control) result.control = '不质疑';
                                event.guessers[0].chat(result.control);
                                if (result.control == '不质疑') {
                                    game.log(event.guessers[0], '#g不质疑');
                                    event.ally.push(event.guessers[0]);
                                } else {
                                    game.log(event.guessers[0], '#y质疑');
                                    event.betray.push(event.guessers[0]);
                                }
                                event.guessers.remove(event.guessers[0]);
                                if (event.guessers.length) event.goto(1);
                                ('step 3');
                                player.showCards(trigger.cards);
                                if (event.betray.length) {
                                    if (trigger.card.name == trigger.cards[0].name) {
                                        if (get.color(trigger.cards[0]) != 'red') {
                                            game.log(player, '使用的', '#y' + get.translation(trigger.card.name), '作废了');
                                            game.cardsDiscard(trigger.cards);
                                            trigger.cancel();
                                        }
                                        for (let i = 0; i < event.betray.length; i++) {
                                            event.betray[i].loseHp();
                                            event.betray[i].loseMaxHp();
                                        }
                                    } else {
                                        game.log(player, '使用的', '#y' + get.translation(trigger.card.name), '作废了');
                                        game.cardsDiscard(trigger.cards);
                                        trigger.cancel();
                                        game.asyncDraw(event.betray);
                                        if (trigger.name == 'useCard' && trigger.parent) trigger.parent.goto(0);
                                    }
                                }
                                ('step 4');
                            },
                        },
                        xzjj_kangkai: {
                            nobracket: true,
                            audio: 'ext:心之境界/audio:2',
                            trigger: {
                                global: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) >= 0;
                            },
                            content() {
                                'step 0';
                                var num = trigger.target.hp;
                                player.draw(num);
                                if (trigger.target != player) {
                                    player.chooseCard(true, 'he', '交给' + get.translation(trigger.target) + '一张牌').set('ai', function (card) {
                                        if (get.position(card) == 'e') return -1;
                                        if (card.name == 'shan') return 1;
                                        if (get.type(card) == 'equip') return 0.5;
                                        return 0;
                                    });
                                } else {
                                    event.finish();
                                }
                                ('step 1');
                                trigger.target.gain(result.cards, player, 'give');
                                ('step 2');
                                player.chooseToUse();
                                trigger.target.chooseToUse();
                            },
                        },
                        xzjj_sizhan_nodie: {
                            trigger: {
                                player: 'dieBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.maxHp > 1;
                            },
                            content() {
                                player.loseMaxHp();
                                trigger.untrigger();
                                trigger.finish();
                                player.hp = 0;
                            },
                        },
                        xzjj_sizhan_huifu: {
                            trigger: {
                                player: ['damageBegin'],
                            },
                            filter(event, player) {
                                return player.countCards('he') > 0;
                            },
                            content() {
                                player.chooseToDiscard(true, 'he');
                                player.recover();
                            },
                        },
                        xzjj_sizhan_huifuwuxiao: {
                            forced: true,
                            trigger: {
                                player: 'recoverBefore',
                            },
                            filter(event, player) {
                                return event.card;
                            },
                            content() {
                                trigger.cancel();
                            },
                        },
                        xzjj_sizhan_kwx: {
                            trigger: {
                                global: 'useCardToBegin',
                            }, //QQQ
                            filter(event, player) {
                                return event.player != player;
                                return (event.card && event.card.name !== 'sha') || event.card.name !== 'wanjian' || event.card.name !== 'juedou';
                            },
                            content() {
                                tiggger.cancel();
                            },
                        },
                        xzjj_longxin_r: {
                            audio: 'ext:心之境界/audio:2',
                            trigger: {
                                player: 'recoverBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.hp <= 0;
                            },
                            content() {
                                trigger.num++;
                            },
                        },
                        xzjj_chongzhen: {
                            audio: 'ext:心之境界/audio:2',
                            trigger: {
                                player: 'respond',
                            },
                            filter(event, player) {
                                if (event.skill != 'longdan_shan' && event.skill != 'longdan_sha' && event.skill != 'fanghun_shan' && event.skill != 'fanghun_sha' && event.skill != 'ollongdan') return false;
                                return event.source && event.source.countGainableCards(player, 'h') > 0;
                            },
                            logTarget: 'source',
                            prompt2: '每当你发动<龙胆>使用或打出一张手牌时,你可以立即获得对方区域的一张牌',
                            content() {
                                player.gainPlayerCard(trigger.source, 'hej', true);
                            },
                        },
                        xzjj_chongzhen1: {
                            group: ['xzjj_chongzhen'],
                            audio: 'ext:心之境界/audio:2',
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                if ((event.card.name != 'sha' && event.card.name != 'shan') || (event.skill != 'longdan_shan' && event.skill != 'longdan_sha' && event.skill != 'fanghun_shan' && event.skill != 'fanghun_sha' && event.skill != 'ollongdan')) return false;
                                var target = lib.skill.xzjj_chongzhen1.logTarget(event, player);
                                return target && target.countGainableCards(player, 'h') > 0;
                            },
                            logTarget(event, player) {
                                if (event.card.name == 'sha') return event.targets[0];
                                return event.respondTo[0];
                            },
                            prompt2: '每当你发动<龙胆>使用或打出一张手牌时,你可以立即获得对方区域的一张牌',
                            content() {
                                var target = lib.skill.xzjj_chongzhen1.logTarget(trigger, player);
                                player.gainPlayerCard(target, 'hej', true);
                            },
                        },
                        xzjj_longxin: {
                            group: ['xzjj_longxin_r', 'xzjj_longxin_maxHp'],
                            audio: 'ext:心之境界/audio:2',
                            trigger: {
                                player: 'dying',
                            },
                            forced: true,
                            content() {
                                var num = player.maxHp - player.hp;
                                player.draw(num);
                            },
                        },
                        xzjj_qimou: {
                            audio: 'ext:心之境界/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('h', { type: ['trick', 'delay', 'basic'] }) > 0;
                            },
                            filterCard: {
                                type: ['trick', 'delay', 'basic'],
                            },
                            check(card) {
                                return 10 - get.value(card);
                            },
                            content() {
                                var list = get.inpile('trick', 'basic');
                                var list2 = [];
                                for (let i = 0; i < 3; i++) {
                                    list2.push(game.createCard(list.randomGet()));
                                }
                                player.gain(list2, 'draw');
                            },
                            ai: {
                                order: 9.8,
                                threaten: 1.8,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        xzjj_enyuan: {
                            audio: 'ext:心之境界/audio:true',
                            trigger: {
                                player: 'damageEnd',
                            },
                            check(event, player) {
                                var att = get.attitude(player, event.source);
                                var num = event.source.countCards('h');
                                if (att <= 0) return true;
                                if (num > 2) return true;
                                if (num > 0) return att < 4;
                                return false;
                            },
                            filter(event, player) {
                                return event.source && event.source != player && event.num > 0 && event.source.isAlive();
                            },
                            content() {
                                'step 0';
                                event.num = Math.min(trigger.num, 9);
                                ('step 1');
                                trigger.source.chooseCard('交给' + get.translation(player) + '一张手牌或流失一点体力').set('ai', function (card) {
                                    if (get.attitude(_status.event.player, _status.event.parent.player) > 0) {
                                        return 11 - get.value(card);
                                    } else {
                                        return 7 - get.value(card);
                                    }
                                });
                                ('step 2');
                                if (result.bool) {
                                    player.gain(result.cards, trigger.source, 'giveAuto');
                                    if (get.color(result.cards) == 'red') {
                                        player.draw(2);
                                        player.recover();
                                    }
                                    if (get.color(result.cards) == 'black') {
                                        trigger.source.discard(trigger.source.getCards('he', { color: 'red' }));
                                        trigger.source.damage();
                                    }
                                } else {
                                    trigger.source.addTempSkill('xzjj_jinliao', { player: 'phasebefore' });
                                    trigger.source.addTempSkill('fengyin', { player: 'phasebefore' });
                                    trigger.source.loseHp();
                                }
                                if (event.num > 1) {
                                    event.num--;
                                    event.goto(1);
                                }
                            },
                            ai: {
                                maixie_defend: true,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -1.5];
                                            return [1, 1];
                                        }
                                    },
                                },
                            },
                            group: ['xzjj_enyuan2', 'xzjj_enyuan3'],
                        },
                        xzjj_enyuan2: {
                            marktext: '恩',
                            intro: {
                                name: '抱恩',
                                name2: '恩',
                                content: '已成为报恩对象',
                            },
                            audio: 'ext:心之境界/audio:true',
                            trigger: {
                                player: 'gainEnd',
                            },
                            filter(event, player) {
                                return event.source && event.source.isAlive() && event.source != player && event.cards?.length >= 2;
                            }, //QQQ
                            logTarget: 'source',
                            check(event, player) {
                                return get.attitude(player, event.source) > 0;
                            },
                            content() {
                                trigger.source.draw();
                                trigger.source.addMark('xzjj_enyuan2', 1);
                                player.draw();
                                player.addMark('xzjj_enyuan2', 1);
                            },
                        },
                        xzjj_ylj: {
                            audio: 'ext:心之境界/audio:2',
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
                                player.draw();
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
                        xzjj_yyq: {
                            trigger: {
                                player: ['useCard', 'respondAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (_status.currentPhase == player) return false;
                                if (!event.cards) return false;
                                if (event.cards.length != 1) return false;
                                if (lib.filter.autoRespondSha.call({ player: player })) return false;
                            },
                            content() {
                                'step 0';
                                var next = player.chooseToUse(get.prompt('xzjj_yyq'), { name: 'sha' });
                                next.aidelay = true;
                                next.noButton = true;
                                ('step 1');
                                if (result.bool) {
                                }
                            },
                        },
                        xzjj_longzhi: {
                            group: ['xzjj_longzhi2'],
                            audio: 'ext:心之境界/audio:true',
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            content() {
                                player.gain(game.createCard('sha'));
                                player.draw();
                            },
                        },
                        xzjj_longzhi2: {
                            audio: 'ext:心之境界/audio:true',
                            trigger: {
                                player: 'recoverBegin',
                            },
                            forced: true,
                            content() {
                                player.gain(game.createCard('shan'));
                                player.draw();
                            },
                        },
                        xzjj_longxiang: {
                            mod: {
                                targetInRange(card, player) {
                                    if (card.name == 'sha' && get.color(card) == 'black') return true;
                                },
                                cardUsable(card) {
                                    if (card.name == 'sha' && get.color(card) == 'red') return Infinity;
                                },
                            },
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && get.color(event.card) == 'red';
                            },
                            forced: true,
                            content() {
                                if (player.stat[player.stat.length - 1].card.sha > 0) {
                                    player.stat[player.stat.length - 1].card.sha--;
                                }
                            },
                        },
                        xzjj_longhun: {
                            group: ['xzjj_longhun2'],
                            trigger: {
                                player: 'phaseAfter',
                                global: 'phaseAfter',
                            },
                            forced: true,
                            _priority: 20,
                            content() {
                                var num = player.maxHp - player.hp;
                                var anum = Math.ceil(num / 3);
                                player.recover(anum);
                            },
                        },
                        xzjj_longhun2: {
                            audio: 'ext:心之境界/audio:2',
                            trigger: {
                                player: 'phaseBefore',
                            },
                            forced: true,
                            content() {
                                var num = player.maxHp - player.hp;
                                var anum = Math.ceil(num / 3);
                                player.draw(anum * 2);
                            },
                            ai: {
                                threaten: 1.5,
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return num + 999;
                                },
                            },
                        },
                        xzjj_qianxiang: {
                            trigger: {
                                player: 'gameDrawAfter',
                            },
                            forced: true,
                            content() {
                                player.equip(game.createCard('xzjj_saiqianxiang', 'heart', 13));
                            },
                        },
                        xzjj_longnu_zy: {
                            audio: 'ext:心之境界/audio:2',
                            marktext: '怒',
                            intro: {
                                content(storage) {
                                    return '下次造成的伤害+' + storage;
                                },
                            },
                            mark: true,
                            init(player) {
                                player.storage.xzjj_longnu_zy = 0;
                            },
                            trigger: {
                                player: 'shaMiss',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.canUse('sha', event.target) && player.hasSha();
                            },
                            content() {
                                'step 0';
                                if (player.hasSkill('jiu')) {
                                    game.broadcastAll(function (player) {
                                        player.removeSkill('jiu');
                                        if (player.node.jiu) {
                                            player.node.jiu.delete();
                                            player.node.jiu2.delete();
                                            delete player.node.jiu;
                                            delete player.node.jiu2;
                                        }
                                    }, player);
                                    event.jiu = true;
                                }
                                player.addSkill('xzjj_longnu_zy');
                                player.storage.xzjj_longnu_zy += 1;
                                player.chooseToUse(get.prompt('xzjj_longnu_zy'), { name: 'sha' }, trigger.target, -1);
                                ('step 1');
                                if (result.bool);
                                else if (event.jiu) {
                                    player.addSkill('jiu');
                                }
                            },
                        },
                        xzjj_longxin_maxHp: {
                            audio: 'ext:心之境界/audio:2',
                            trigger: {
                                player: 'dyingAfter',
                            },
                            forced: true,
                            content() {
                                player.gainMaxHp();
                            },
                        },
                        xzjj_chongzhen2: {
                            group: ['xzjj_chongzhen1', 'xzjj_chongzhen'],
                            audio: 'chongzhen',
                            ai: {
                                combo: 'ollongdan',
                                mingzhi: false,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'respondShan') || get.tag(card, 'respondSha')) {
                                            if (get.attitude(target, player) <= 0) {
                                                if (current > 0) return;
                                                if (target.countCards('h') == 0) return 1.6;
                                                if (target.countCards('h') == 1) return 1.2;
                                                if (target.countCards('h') == 2) return [0.8, 0.2, 0, -0.2];
                                                return [0.4, 0.7, 0, -0.7];
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        xzjj_huanxiangjianglin: {
                            trigger: {
                                player: ['damageAfter', 'loseHpAfter'],
                            },
                            filter(event, player) {
                                return true;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var list;
                                list = get.gainableCharacters(function (info) {
                                    return info[0] != 'zuoci';
                                });
                                var dialog = ui.create.dialog('选择一名角色', 'hidden');
                                dialog.add([list.randomGets(7), 'character']);
                                player.chooseButton(dialog, true).ai = function (button) {
                                    return get.rank(button.link, true) - lib.character[button.link][2];
                                };
                                ('step 1');
                                var info = lib.character[result.links[0]];
                                for (let i = 0; i < info[3].length; i++) {
                                    player.popup(info[3][i]);
                                    player.addSkill(info[3][i]);
                                }
                            },
                        },
                        xzjj_觉醒: {
                            trigger: {
                                global: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.gainMaxHp();
                                player.recover();
                                ('step 1');
                                event.target = game.filterPlayer().randomGet(player);
                                if (!event.target) {
                                    event.finish();
                                    return;
                                }
                                player.line(event.target);
                                ('step 2');
                                event.target.loseMaxHp();
                            },
                            group: ['xzjj_觉醒_die', 'xzjj_觉醒_damage'],
                            subSkill: {
                                die: {
                                    trigger: {
                                        player: 'dieBegin',
                                    },
                                    forced: true,
                                    _priority: 10,
                                    filter(event, player) {
                                        return !player.storage.xzjj_觉醒_die;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.xzjj_觉醒_die = true;
                                        trigger.untrigger();
                                        trigger.finish();
                                        player.hp = 0;
                                        ('step 1');
                                        event.target = game.filterPlayer().randomGet(player);
                                        if (!event.target) {
                                            event.finish();
                                            return;
                                        }
                                        player.line(event.target);
                                        ('step 2');
                                        player.addSkill('xzjj_huanxiangjianglin'); //QQQ
                                        player.addSkill('xzjj_chuangsheng');
                                        player.addSkill(event.target.skills);
                                        player.gain(event.target.getCards('h'), event.target);
                                        player.gainMaxHp(event.target.maxHp);
                                        player.recover(event.target.hp);
                                        event.target.$give(event.target.countCards('h'), player);
                                        event.target.clearSkills();
                                        event.target.loseMaxHp(event.target.maxHp);
                                    },
                                },
                                damage: {
                                    trigger: {
                                        player: 'dieBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.hp >= 1;
                                    },
                                    content() {
                                        trigger.untrigger(), trigger.finish(), player.hp == player.hp;
                                    },
                                },
                            },
                        },
                        xzjj_chuangsheng: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return game.dead.length;
                            },
                            forced: true,
                            notarget: true,
                            content() {
                                'step 0';
                                var list = [];
                                for (let i = 0; i < game.dead.length; i++) {
                                    list.push(game.dead[i].name);
                                }
                                player.chooseButton(ui.create.dialog('选择1名角色复活', [list, 'character']), function (button) {
                                    for (let i = 0; i < game.dead.length && game.dead[i].name != button.link; i++);
                                    return get.attitude(_status.event.player, game.dead[i]);
                                });
                                ('step 1');
                                if (result.bool) {
                                    for (let i = 0; i < game.dead.length && game.dead[i].name != result.buttons[0].link; i++);
                                    var dead = game.dead[i];
                                    dead.revive(dead.maxHp);
                                    dead.draw(dead.maxHp);
                                    dead.identity = player.identity;
                                    if (dead.identity == 'zhu') dead.identity = 'zhong';
                                    dead.node.identity.dataset.color = dead.identity;
                                    dead.identityShown = true;
                                }
                            },
                        },
                        xzjj_第二条命: {
                            audio: 'ext:心之境界/audio:2',
                            enable: 'chooseToUse',
                            mark: true,
                            limited: true,
                            init(player) {
                                player.storage.xzjj_第二条命 = false;
                            },
                            filter(event, player) {
                                if (player.storage.xzjj_第二条命) return false;
                                if (event.type == 'dying') {
                                    if (player != event.dying) return false;
                                    return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('xzjj_第二条命');
                                player.storage.olniepan = true;
                                player.discard(player.getCards('j'));
                                ('step 1');
                                player.link(false);
                                ('step 2');
                                player.turnOver(false);
                                ('step 3');
                                player.draw(7);
                                ('step 4');
                                player.recover(player.maxHp);
                                ('step 5');
                                player.addSkill('xzjj_觉醒');
                            },
                            ai: {
                                order: 1,
                                skillTagFilter(player, tag, target) {
                                    if (player != target || player.storage.olniepan) return false;
                                },
                                save: true,
                                result: {
                                    player(player) {
                                        if (player.hp <= 0) return 10;
                                        if (player.hp <= 2 && player.countCards('he') <= 1) return 10;
                                        return 0;
                                    },
                                },
                                threaten(player, target) {
                                    if (!target.storage.olniepan) return 0.6;
                                },
                            },
                            intro: {
                                content: 'limited',
                            },
                        },
                        xzjj_攻击选择: {
                            trigger: {
                                player: 'useCardBefore',
                            },
                            filter(event, player) {
                                return event.card != undefined && event.card.name == 'sha' && _status.currentPhase == player;
                            },
                            content() {
                                'step 0';
                                player.chooseControl('雷', '火', '普通').set('prompt', '请选择目标属性').ai = function (event, player) {
                                    return '火';
                                };
                                ('step 1');
                                if (result.control != undefined) player.popup(result.control);
                                if (result.control == '火') {
                                    trigger.card.nature = 'fire';
                                }
                                if (result.control == '雷') {
                                    trigger.card.nature = 'thunder';
                                }
                                if (result.control == '普通') {
                                    delete trigger.card.nature;
                                }
                                ('step 2');
                                player.chooseControl('♥️︎', '♦️︎', '♠️︎', '♣️︎').set('prompt', '请选择目标花色').ai = function (event, player) {
                                    return '♥️︎';
                                };
                                ('step 3');
                                if (result.control != undefined) {
                                    player.popup(result.control);
                                    var suit = 'heart';
                                    if (result.control == '♥️︎') suit = 'heart';
                                    if (result.control == '♦️︎') suit = 'diamond';
                                    if (result.control == '♠️︎') suit = 'spade';
                                    if (result.control == '♣️︎') suit = 'club';
                                    trigger.card.suit = suit;
                                }
                            },
                        },
                        xzjj_enyuan3: {
                            forced: true,
                            trigger: {
                                global: 'drawBegin',
                                player: 'drawBegin',
                            },
                            filter(event, player) {
                                return event.player.hasMark('xzjj_enyuan2');
                            },
                            content() {
                                trigger.num++;
                                trigger.removeMark('xzjj_enyuan2', 1);
                            },
                        },
                        xzjj_jinliao: {
                            nobracket: true,
                            trigger: {
                                global: 'recoverBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card;
                            },
                            content() {
                                trigger.cancel();
                            },
                        },
                        xzjj_qimou2: {
                            trigger: {
                                player: 'phaseEnd',
                                global: 'phaseAfter',
                            }, //QQQ
                            nobracket: true,
                            forced: true,
                            content() {
                                var c = get.typeCard('trick');
                                var t = lib.translate;
                                var l = [];
                                var w = [['伤', '害'], ['摸', '牌'][('弃', '牌')]][game.roundNumber % 2 == 0 ? 1 : 0];
                                for (let i = 0; i < c.length; i++) {
                                    var str = t[c[i] + '_info'];
                                    for (var j = 0; j < str.length; j++) {
                                        if (str[j] == w[0] && str[j + 1] == w[1]) {
                                            l.push(c[i]);
                                            break;
                                        }
                                    }
                                }
                                var card = game.createCard(l.randomGet());
                                player.gain(card, 'gain2');
                            },
                            mod: {
                                ignoredHandcard(card, player) {
                                    if (get.type(card, 'trick') == 'trick') return true;
                                },
                            },
                        },
                        xzjj_幻想道: {
                            audio: 'ext:心之境界/audio:true',
                            trigger: {
                                global: 'judge',
                            },
                            _priority: 1000000000000,
                            forced: true,
                            filter(event, player) {
                                return player.countCards('he') > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('xzjj_幻想道'), 'he').ai = function (card) {
                                    var trigger = _status.event.parent._trigger;
                                    var player = _status.event.player;
                                    var result = trigger.judge(card) - trigger.judge(trigger.player.judging[0]);
                                    var attitude = get.attitude(player, trigger.player);
                                    if (attitude == 0 || result == 0) return 0;
                                    if (attitude > 0) {
                                        return result;
                                    } else {
                                        return -result;
                                    }
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.respond(result.cards, 'highlight');
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.$gain2(trigger.player.judging[0]);
                                    player.gain(trigger.player.judging[0]);
                                    trigger.player.judging[0] = result.cards[0];
                                    trigger.position.appendChild(result.cards[0]);
                                    game.log(trigger.player, '的判定牌改为', result.cards[0]);
                                }
                                ('step 3');
                                if (trigger.player != player) player.say('现在是幻想主宰');
                                game.log(trigger.player, '进行不可更改的判定');
                                var card = get.cards()[0];
                                event.cards = card;
                                var judgestr = get.translation(trigger.player) + '的' + trigger.judgestr + '判定';
                                event.videoId = lib.status.videoId++;
                                event.dialog = ui.create.dialog(judgestr);
                                event.dialog.classList.add('center');
                                event.dialog.videoId = event.videoId;
                                if (Array.isArray(event.cards)) for (const i of event.cards) i.discard();
                                var node;
                                if (game.chess) {
                                    node = card.copy('thrown', 'center', ui.arena).addTempClass('start');
                                } else {
                                    node = player.$throwordered(card.copy(), true);
                                }
                                node.classList.add('thrownhighlight');
                            },
                            ai: {
                                tag: {
                                    rejudge: 1,
                                },
                                threaten: 1.5,
                            },
                        },
                        xzjj_xiance: {
                            enable: 'phaseUse',
                            usable: 1,
                            audio: 'ext:心之境界/audio:2',
                            position: 'he',
                            selectTarget: 2,
                            multitarget: true,
                            discard: false,
                            lose: false,
                            targetprompt: ['得到牌', '出杀目标'],
                            filterTarget(card, player, target) {
                                if (ui.selected.targets.length == 0) {
                                    return player != target;
                                } else {
                                    return ui.selected.targets[0].inRange(target);
                                }
                            },
                            delay: false,
                            content() {
                                'step 0';
                                var num = targets[0].maxHp;
                                targets[0].gain(cards, player, 'give');
                                targets[0].draw(num);
                                targets[0].chooseToDiscard(num, true, 'he');
                                ('step 1');
                                if (!lib.filter.filterTarget({ name: 'sha' }, targets[0], targets[1])) event._result = { control: 'dis_card' };
                                else
                                    targets[0]
                                        .chooseControl('dis_card', '出杀', function () {
                                            var player = _status.event.player;
                                            var target = _status.event.target;
                                            if (get.effect(_status.event.target, { name: 'sha' }, player, player) > 0) {
                                                return 1;
                                            }
                                            return 0;
                                        })
                                        .set('target', targets[1])
                                        .set('prompt', '对' + get.translation(targets[1]) + '使用一张杀摸一张牌,或弃置目标一张牌摸一张牌');
                                ('step 2');
                                if (result.control == 'dis_card') {
                                    targets[0].discardPlayerCard(targets[1], 'he', true);
                                    targets[0].draw(2);
                                } else {
                                    targets[0].useCard({ name: 'sha' }, targets[1]);
                                    player.useCard({ name: 'sha' }, targets[1]);
                                }
                            },
                            ai: {
                                result: {
                                    player(player) {
                                        var players = game.filterPlayer();
                                        for (const i of players) {
                                            if (i != player && get.attitude(player, i) > 1 && get.attitude(i, player) > 1) {
                                                return 1;
                                            }
                                        }
                                        return 0;
                                    },
                                    target(player, target) {
                                        if (ui.selected.targets.length) {
                                            return -0.1;
                                        }
                                        return 1;
                                    },
                                },
                                order: 8.5,
                                expose: 0.2,
                            },
                        },
                        xzjj_gongming: {
                            audio: 'ext:心之境界/audio:true',
                            trigger: {
                                global: 'gameDrawAfter',
                            },
                            forced: true,
                            content() {
                                player.$skill('来吧<br>见证奇迹');
                                var list = [];
                                var skills2 = [];
                                for (var i in lib.character) {
                                    for (var j = 0; j < lib.character[i][3].length; j++) {
                                        skills2.add(lib.character[i][3][j]);
                                    }
                                }
                                for (const i of game.players) {
                                    if (i == player) continue;
                                    var skills = i.getCards('s');
                                    skills = skills.slice(0);
                                    for (var j = 0; j < skills.length; j++) {
                                        if (lib.skill[skills[j]] && lib.translate[skills[j] + '_info']) {
                                            var str = lib.translate[skills[j] + '_info'];
                                            if (str.includes('判定') && skills2.includes(skills[j])) {
                                                list.push(skills[j]);
                                            }
                                        }
                                    }
                                }
                                player.addAdditionalSkill('xzjj_gongming', list);
                                player.awakenSkill('xzjj_gongming');
                            },
                            ai: {
                                order: 8,
                                threaten: 2,
                                result: {
                                    player(player) {
                                        var num = game.countPlayer(function (current) {
                                            return player.getFriends().includes(current);
                                        });
                                        if (num < 1 && player.countCards('h', { name: 'sha' }) > 0) return 1;
                                        if (player.countCards('h', { name: 'sha' }) < 3) return -1;
                                        return 1;
                                    },
                                },
                            },
                        },
                        xzjj_leiji: {
                            group: 'xzjj_leiji_misa',
                            audio: 'ext:心之境界/audio:2',
                            derivation: 'xinleiji_faq',
                            audioname: ['boss_qinglong'],
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            filter(event, player) {
                                return (event.card && event.card.name == 'wuxie') || event.card.name == 'shan' || (event.name == 'useCard' && event.card.name == 'shandian');
                            },
                            judgeCheck(card, bool) {
                                var suit = card.suit;
                                if (suit == 'diamond') {
                                    if (bool && card.number > 1 && card.number < 10) return 5;
                                    return 4;
                                }
                                if (suit == 'club') return 2;
                                return 0;
                            },
                            content() {
                                player.judge(lib.skill.xzjj_leiji.judgeCheck);
                                player.recover();
                            },
                        },
                        xzjj_leiji_misa: {
                            audio: 'xinleiji',
                            trigger: {
                                player: 'judgeAfter',
                            },
                            forced: true,
                            disableReason: ['暴虐', '助祭', '弘仪', '孤影'],
                            filter(event, player) {
                                return !lib.skill.xzjj_leiji_misa.disableReason.includes(event.judgestr) && ['diamond', 'club'].includes(event.result.suit);
                            },
                            content() {
                                'step 0';
                                event.num = 1 + ['club', 'diamond'].indexOf(trigger.result.suit);
                                if (event.num == 1 && player.isDamaged()) {
                                    player.draw();
                                }
                                player.chooseTarget('雷击:是否对一名角色造成' + event.num + '点伤害？', lib.filter.notMe).ai = function (target) {
                                    var player = _status.event.player;
                                    return get.damageEffect(target, player, player);
                                };
                                ('step 1');
                                if (result.bool && result.targets && result.targets.length) {
                                    player.line(result.targets);
                                    result.targets[0].damage(event.num);
                                }
                            },
                        },
                        xzjj_双心: {
                            trigger: {
                                player: 'useCardAfter',
                            },
                            filter(event, player) {
                                if (event.parent.name == 'xzjj_双心') return false;
                                if (!event.card) return false;
                                if (event.card && (event.card.name == 'wuxie' || event.card.name == 'shan' || event.card.name == 'caochuan')) return false;
                                var card = game.createCard(event.card.name, event.card.suit, event.card.number, event.card.nature);
                                var targets = event._targets || event.targets;
                                for (let i = 0; i < targets.length; i++) {
                                    if (targets.length <= 1 && !targets[i].isIn()) return false;
                                    if (!player.canUse({ name: event.card.name }, targets[i], false, false)) {
                                        return false;
                                    }
                                }
                                return true;
                            },
                            check(event, player) {
                                if (event.card.name == 'tiesuo') return false;
                                return true;
                            },
                            content() {
                                var card = game.createCard(trigger.card.name, trigger.card.suit, trigger.card.number, trigger.card.nature);
                                player.useCard(card, (trigger._targets || trigger.targets).slice(0));
                            },
                            ai: {
                                threaten: 1.3,
                            },
                        },
                        xzjj_幻想改造: {
                            enable: 'phaseUse',
                            position: 'he',
                            usable: 3,
                            filterCard(card, player) {
                                if (player.storage.xzjj_幻想改造 && player.storage.xzjj_幻想改造.includes(card)) return false;
                                return true;
                            },
                            init(player) {
                                player.storage.xzjj_幻想改造 = [];
                            },
                            check(card) {
                                return 10 - get.value(card);
                            },
                            prompt: '将一张牌转化为任意一张牌',
                            content() {
                                'step 0';
                                var list = [];
                                var suit = cards[0].suit;
                                var number = cards[0].number;
                                for (var i in lib.card) {
                                    if (lib.card[i].mode && lib.card[i].mode.includes(lib.config.mode) == false) continue;
                                    if (cards[0].name != i) {
                                        list.push([suit, number, i]);
                                    }
                                }
                                var dialog = ui.create.dialog([list, 'vcard']);
                                player.chooseButton(dialog, true, function (button) {
                                    return get.value({ name: button.link[2] }, player);
                                });
                                ('step 1');
                                cards[0].init(result.buttons[0].link);
                                player.gain(cards[0]);
                                player.$gain(cards[0]);
                                player.storage.xzjj_幻想改造.add(cards[0]);
                            },
                            ai: {
                                order: 9,
                                result: {
                                    player: 1,
                                },
                                threaten: 2,
                            },
                        },
                        xzjj_cc_xiongzhi: {
                            trigger: {
                                player: 'phaseBefore',
                            },
                            content() {
                                'step 0';
                                player.judge();
                                var chat = ['宁负英雄骂名,胜我英雄短命!', '鸿鹄大志,几人能懂!', '1', '如果是注定的,那就欣然接受吧!'].randomGet();
                                player.say(chat);
                                ('step 1');
                                switch (result.card.suit) {
                                    case 'heart':
                                        player.recover();
                                        break;
                                    case 'diamond':
                                        player.draw(2);
                                        break;
                                    case 'club':
                                        player.changeHujia();
                                        break;
                                    case 'spade':
                                        player.damage();
                                        break;
                                }
                            }, //QQQ
                            ai: {
                                expose: 0.3,
                            },
                        },
                        xzjj_wushuang0: {
                            shaRelated: true,
                            audio: 'ext:心之境界/audio:2',
                            audioname: ['re_lvbu', 'shen_lvbu'],
                            forced: true,
                            group: ['xzjj_wushuang1', 'xzjj_wushuang2'],
                        },
                        xzjj_wushuang1: {
                            audio: 'ext:心之境界/audio:2',
                            audioname: ['re_lvbu', 'shen_lvbu'],
                            trigger: {
                                player: 'useCardToPlayered',
                                target: 'useCardToTargeted',
                            },
                            forced: true,
                            logTarget(trigger, player) {
                                return player == trigger.player ? trigger.target : trigger.player;
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'juedou';
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
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    if ((arg && arg.card.name != 'juedou') || Math.floor(arg.target.countCards('h', 'sha') / 2) > player.countCards('h', 'sha')) return false;
                                },
                            },
                        },
                        xzjj_wushuang2: {
                            audio: 'ext:心之境界/audio:2',
                            audioname: ['re_lvbu', 'shen_lvbu'],
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && !event.parent.directHit.includes(event.target);
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
                                    if ((arg && arg.card.name != 'sha') || arg.target.countCards('h', 'shan') > 1) return false;
                                },
                            },
                        },
                        xzjj_liyu: {
                            audio: 'ext:心之境界/audio:2',
                            trigger: {
                                source: 'damageSource',
                            },
                            filter(event, player) {
                                if (event._notrigger.includes(event.player)) return false;
                                return (event.card && event.card.name == 'sha') || (event.card.name == 'sha' && event.player != player && event.player.isAlive() && event.player.countGainableCards(player, 'hej') > 0);
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .gainPlayerCard(get.prompt('new_liyu', trigger.player), trigger.player, 'hej', 'visibleMove')
                                    .set('ai', function (b) {
                                        //QQQ
                                        var player = _status.event.player;
                                        var evt = _status.event.target;
                                        if (get.attitude(player, evt) > 0 && get.position(b.link) == 'j') return 4 + get.value(b.link);
                                        if (get.type(b.link) == 'equip') {
                                            if (
                                                get.attitude(player, evt) > 0 &&
                                                game.hasPlayer(function (current) {
                                                    return player.canUse({ name: 'juedou' }, current) && current != evt.target && get.effect(current, { name: 'juedou' }, player, player) > 2;
                                                })
                                            ) {
                                                return 5;
                                            } else if (
                                                game.hasPlayer(function (current) {
                                                    return player.canUse({ name: 'juedou' }, current) && current != evt && current != player && get.effect(current, { name: 'juedou' }, player, player) < 0;
                                                })
                                            ) {
                                                return 1;
                                            }
                                            return 4;
                                        }
                                        return 3;
                                    })
                                    ('step 1');
                                if (result.bool) {
                                    if (get.type(result.cards[0]) != 'equip') {
                                        trigger.player.draw();
                                        event.finish();
                                    } else {
                                        if (
                                            !game.hasPlayer(function (current) {
                                                return current != player && current != trigger.player && player.canUse('juedou', current);
                                            })
                                        ) {
                                            event.finish();
                                            return;
                                        }
                                        trigger.player
                                            .chooseTarget(
                                                true,
                                                function (card, player, target) {
                                                    var evt = _status.event.parent;
                                                    return evt.player.canUse({ name: 'juedou' }, target) && target != _status.event.player;
                                                },
                                                '请选择一名角色,视为' + get.translation(player) + '对其使用【决斗】'
                                            )
                                            .set('ai', function (target) {
                                                var evt = _status.event.parent;
                                                return get.effect(target, { name: 'juedou' }, evt.player, _status.event.player) - 2;
                                            });
                                    }
                                } else event.finish();
                                ('step 2');
                                if (result.targets?.length) {
                                    player.useCard({ name: 'juedou' }, result.targets[0], 'noai');
                                }
                            },
                            ai: {
                                halfneg: true,
                            },
                        },
                    },
                    translate: {
                        xzjj_zhangjiao: '心·张角',
                        xzjj_liuyan: '心·刘焉',
                        xzjj_lxy: '心月',
                        xzjj_xushu: '心·徐庶',
                        xzjj_liubei: '心·刘备',
                        xzjj_lin: '凛',
                        xzjj_lingmengjiang: '灵梦酱',
                        xzjj_maliang: '心·马良',
                        xzjj_zhonghui: '心·钟会',
                        xzjj_caozhi: '心·曹植',
                        xzjj_tb_zhangjiao: '天兵·张角',
                        'xzjj_lingmengjiang2.0': '封魔·灵梦',
                        觉: '觉',
                        xzjj_sunce: '心·孙策',
                        xzjj_xuan: '心玄',
                        xzjj_xizhicai: '心·戏志才',
                        xin_huangyueying: '心·黄月英',
                        xzjj_zhugeliang: '心·诸葛亮',
                        xzjj_zhoutai: '心·周泰',
                        xzjj_caoang: '心·曹昂',
                        xzjj_zhaoyun: '心·赵云',
                        xzjj_fazheng: '心·法正',
                        快乐一刻: '快乐一刻',
                        xzjj_xiao_cs: '心之测试员',
                        xzjj_guidao: '鬼道',
                        xzjj_guidao_info: '任意一名角色的判定生效前,你可以打出一张牌替换之,你摸一张牌',
                        xzjj_yingbing: '影兵',
                        xzjj_yingbing_info: '当你进行判定后,你可以视为使用一张无距离限制的【杀】',
                        xzjj_huangtian: '黄天',
                        xzjj_huangtian_info: '其他群势力角色的出牌阶段限一次,其可以交给你一张【闪】或【闪电】',
                        xzjj_tushe: '图射',
                        xzjj_tushe_info: '当你使用非装备牌指定目标后,若你没有延时锦囊牌,则你可以摸X张牌.(X为此牌指定的目标数)',
                        xzjj_limu: '立牧',
                        xzjj_limu_info: '出牌阶段限一次,你可以将一张红色牌当做【闪电】对自己使用,回复1点体力.只要你的判定区内有牌,你对攻击范围内的其他角色使用牌便没有次数和距离限制',
                        xzjj_mengxin: '梦心',
                        xzjj_mengxin_info: '锁定技,游戏开始时,你获得7个<心>标记.(有<心>的角色受到伤害时,防止此伤害,移去一个<心>并摸两张牌;有<心>的角色摸牌阶段额外摸一张牌并回复一点体力)',
                        xzjj_jianxin: '见心',
                        xzjj_jianxin_info: '出牌阶段开始时,你可以失去一点体力或移去一个<心>,令一名角色摸一张牌并获得<界英姿>和一点护甲',
                        xzjj_guixin: '归心',
                        xzjj_guixin_info: '锁定技,你跳过判定阶段获得一个<心>',
                        xzjj_mengxin_ai: '梦心ai',
                        xzjj_mengxin_ai_info: '',
                        xzjj_mengxin_draw: '梦心',
                        xzjj_mengxin_draw_info: '',
                        xzjj_mengxin_damage: '梦心',
                        xzjj_mengxin_damage_info: '',
                        xzjj_pormie: '破灭',
                        xzjj_pormie_info: '出牌阶段,你可以弃置2枚<殇心>标记并选择一名本回合内未选择过的其他角色,其获得技能〖殇〗直到回合结束(不能或使用打出手牌)并失去一点体力上限再流失一点体力',
                        xzjj_shangxin: '殇心',
                        xzjj_shangxin_info: '当你造成伤害后,你获得X个"殇心"标记(X为此次伤害点数)',
                        xzjj_xinzhilingwu: '心之境界',
                        xzjj_xinzhilingwu_info: '锁定技,你的出杀的次数+2你的杀可以指定的目标＋1.你计算与其他角色的距离-2,其他角色计算与你的距离加+1.使用锦囊牌无距离限制,你装备区内的牌不能被其他角色弃置,且你可以装任意张装备牌',
                        xzjj_shangxin_shoupai: '殇',
                        xzjj_shangxin_shoupai_info: '不能使用或打出手牌',
                        xzjj_duorui: '夺锐',
                        xzjj_duorui_info: '当你于出牌阶段造成伤害后,你可以令其选择废除该角色一个装备栏,失效其技能直到其回合结束,你获得目标的失效技能直到你的下个回合开始',
                        xzjj_duorui1: '失效',
                        xzjj_duorui1_info: '',
                        xzjj_xinyi: '心意',
                        xzjj_xinyi_info: '锁定技,当你受到伤害/失去体力时,若伤害大于1则你将伤害改为1并摸一张牌回复一点体力',
                        xzjj_huanxiang: '幻想',
                        xzjj_huanxiang_info: '锁定技,当你受到1点伤害后,你获得1枚<幻想>标记',
                        xzjj_huanfeng: '幻封',
                        xzjj_huanfeng_info: '出牌阶段,你可以弃置2枚<幻想>标记并选择一名本回合内未选择过的其他角色,你封印其技能再获得其3张手牌,你获得【完杀】直到回合结束最后对其造成一点伤害',
                        xzjj_huanxin: '幻心',
                        xzjj_huanxin_info: '出牌阶段,你可以弃置<梦心>"殇心""幻想"标记各两枚并选择一名其他角色,你获得技能〖夺锐〗和【心启】并使目标失去区域内的所有牌,你摸三张牌',
                        xzjj_xinqi: '心启',
                        xzjj_xinqi_info: '锁定技,当你使用普通锦囊牌时,你选择一项:1.回复一点体力;2.摸一张牌',
                        xzjj_huanxiangzhihu: '幻想之护',
                        xzjj_huanxiangzhihu_info: '',
                        xzjj_xzjj: '心之境界',
                        xzjj_xzjj_info: '',
                        xzjj_hanxin: '汉心',
                        xzjj_hanxin_info: '锁定技,当你受到锦囊牌对你造成的伤害时,你防止此伤害',
                        xzjj_jujian: '举荐',
                        xzjj_jujian_info: '结束阶段开始时,你可以弃置一张非基本牌并选择一名其他角色,令其选择一项:1.摸4张牌;2.回复2点体力;3.将其武将牌翻转至正面朝上并重置之你摸两张牌',
                        xzjj_jingyue: '镜月',
                        xzjj_jingyue_info: '出牌阶段限一次,你可以弃置任意张牌,令一名其他角色摸等量的牌.若你以此法弃牌不少于三张且均为同一类别,你回复一点体力并摸两张牌',
                        xzjj_zhuhai: '诛害',
                        xzjj_zhuhai_info: '一名其他角色的结束阶段开始时,若该角色本回合造成过伤害,你摸两张牌并可以对其使用一张【杀】.(必须你的手牌上杀才可发动)',
                        xzjj_xingxia: '行侠',
                        xzjj_xingxia_info: '当你的杀指定目标后,目标需弃置两张牌,当你造成伤害时,此伤害+1',
                        xzjj_xingxia1: '行侠',
                        xzjj_xingxia1_info: '',
                        xzjj_jueze: '抉择',
                        xzjj_jueze_info: '觉醒技,当你的回合结束时,若你已击杀过一名角色,则你开始进行抉择,你是想行侠仗义,还是想谋定天下？',
                        xzjj_jianyan: '荐言',
                        xzjj_jianyan_info: '出牌阶段限一次,你可以声明一种牌的类别或颜色,并亮出牌库中第一张符合你声明的牌,你令一名角色获得此牌,你摸一张牌',
                        xzjj_xiayi: '侠义',
                        xzjj_xiayi_info: '',
                        xzjj_qice: '奇策',
                        xzjj_qice_info: '锁定技,回合开始和结束以及自己的体力值变动时,你获得一张卡面信息带有【】字的锦囊牌,【】内容根据游戏轮数,在【弃牌】,【摸牌】,【伤害】之间切换<li>锁定技,你的锦囊牌不计入手牌上限',
                        xzjj_xushu_jianxin: '剑心',
                        xzjj_xushu_jianxin_info: '锁定技,当你造成/受到伤害后,你获得X个"侠义"标记(X为此次伤害点数)',
                        xzjj_xiayixiaohao: '侠义',
                        xzjj_xiayixiaohao_info: "出牌阶段限一次,你可以消耗两个'剑心'标记,本回合内你可以指定两个角色对一名角色造成一点伤害并使另一名角色回复一点体力",
                        xzjj_yinxia: '隐侠',
                        xzjj_yinxia_info: "准备阶段结束时,若你的判定区内有牌,你可以消耗1枚'剑心'随机弃置其中一张牌",
                        xzjj_xushu_jianxin2: '剑心',
                        xzjj_xushu_jianxin2_info: '',
                        xzjj_rende: '仁德',
                        xzjj_rende_info: '出牌阶段,你可以将至少一张手牌交给其他角色,若你于此阶段内给出的牌首次达到两张,你可以视为使用一张基本牌',
                        xzjj_longnu: '龙怒',
                        xzjj_longnu_info: '转换技,①出牌阶段开始时,你失去回复一点体力并摸2张牌,本回合内你可以将手牌当做杀使用或打出且无距离限制.②出牌阶段开始时,你可以加1点体力上限并摸2张牌,本回合你可以将手牌当做杀使用或打出且无使用次数限制.(此技能发动后,你本回合内使用杀时,你可以改变此杀的属性和花色)',
                        xzjj_zhangwu: '章武',
                        xzjj_zhangwu_info: '每当你受到一次伤害,你可以弃置任意张牌并令伤害来源选择一项:弃置等量的牌,或受到等量的伤害',
                        xzjj_renhe: '人和',
                        xzjj_renhe_info: '锁定技,其他角色的出牌阶段开始时或回合结束后,若其有手牌,其须交给你1张手牌',
                        xzjj_shichou: '誓仇',
                        xzjj_shichou_info: '出牌阶段限1次,你可以弃置1张手牌并展示牌堆顶的X+1张牌,令1名其他角色选择1项:弃置1张与之均不同类别的牌,令你获得这些牌;或受到你造成的X点伤害并获得其中1张牌,你获得其余的牌.(X为你的已损失体力)',
                        xzjj_lxqm: '龙啸凤鸣',
                        xzjj_lxqm_info: '当你使用【杀】指定角色后,你可以令其选择一项:1.弃置一张手牌;2.令你摸一张牌',
                        xzjj_xiaoxiong: '枭雄',
                        xzjj_xiaoxiong_info: '锁定技,每当一名其他角色使用一张基本牌或锦囊牌,你获得一张与之同名的牌;在一名其他角色的结束阶段,若其本回合没有使用牌,你对其造成一点伤害',
                        xzjj_longnu_buff: '龙怒',
                        xzjj_longnu_buff_info: '你可以将手牌当做杀使用或打出且你使用牌无距离限制.(此技能发动后,你本回合内使用杀时,你可以改变此杀的属性和花色)',
                        xzjj_longnu_buff2: '龙怒',
                        xzjj_longnu_buff2_info: '',
                        xzjj_wjlxz: ' ',
                        xzjj_wjlxz_info: '',
                        xzjj_wcsxz: ' ',
                        xzjj_wcsxz_info: '',
                        xzjj_linren: '凛人',
                        xzjj_linren_info: '当你于出牌阶段使用带有「伤害」这一标签的基本牌或普通锦囊牌指定目标后,你可以猜测其中的一个目标的手牌中是否有基本牌,锦囊牌或装备牌.若你猜中的项目数:≥1,直到你的下回合开始,你造成伤害时,伤害为神圣伤害你额外对其造成一点伤害.≥2,你摸两张牌;≥3,你获得技能〖看破〗和〖解析〗直到下回合开始',
                        xzjj_j_jianxin: '见心',
                        xzjj_j_jianxin_info: '出牌阶段限一次可观看任意一名角色手牌',
                        xzjj_kanpo: '看破',
                        xzjj_kanpo_info: '每回合限一次,当你成为其他角色使用的牌的目标后,你对其造成一点伤害,如若此做,此牌对你无效,改为你对其使用了此牌',
                        xzjj_jiexi: '解析',
                        xzjj_jiexi_info: '每当你受到一次伤害,令伤害来源选择一项:你摸X张牌且伤害来源弃置Y张牌,伤害来源受到X点伤害且你回复X点体力(X为本次伤害数,Y为你的已损失体力值)',
                        xzjj_linhan: '凛寒',
                        xzjj_linhan_info: '',
                        xzjj_huanxiangqiji: '幻想',
                        xzjj_huanxiangqiji_info: '你的回合外,每当一名角色的【酒】因弃置或判定而置入弃牌堆时,你可以获得之;每当一名角色的装备牌置入弃牌堆时,你将之置于你的装备区里',
                        xzjj_zhuizhan: '追斩',
                        xzjj_zhuizhan_info: '每当你即将造成伤害,你可以弃置一张牌令伤害+1',
                        xzjj_xinyueqiang: '心月枪',
                        xzjj_xinyueqiang_info: '你的回合外,每当你使用或打出了一张黑色手牌(若为使用则在它结算之前),你可以立即对你攻击范围内的任意一名角色使用一张【杀】',
                        xzjj_mianyi: '免疫',
                        xzjj_mianyi_info: '',
                        xzjj_yinyangyu: '鬼神阴阳玉',
                        xzjj_yinyangyu_info: '',
                        xzjj_fengmozhen: '封魔针',
                        xzjj_fengmozhen_info: '',
                        xzjj_mengxiang: '梦想封印',
                        xzjj_mengxiang_info: '当你使用牌指定目标后,你可以为目标选择一项,1-令其自弃2张牌,2-令其受到一点火焰和雷电伤害,如果你有东方扩展,则有额外效果',
                        xzjj_huanxiangshikong: '幻想时空',
                        xzjj_huanxiangshikong_info: '每当其他角色死亡后,你将其移出游戏,召唤心月,该角色与你相同身份、体力和体力上限为4、初始手牌7,无手牌上限,你死亡时该角色死亡,只能使用一次',
                        xzjj_yinyangyu_sha: '阴阳',
                        xzjj_yinyangyu_sha_info: '',
                        xzjj_yinyangyu_shan: '阴阳',
                        xzjj_yinyangyu_shan_info: '',
                        xzjj_huiluo: '塞钱贿赂',
                        xzjj_huiluo_info: '每当你造成伤害时,你今目标选择一项1:获得目标X张牌,取消此伤害2:额外受到X点伤害(X为目标手牌与你的差值)',
                        xzjj_zishu: '自书',
                        xzjj_zishu_info: '锁定技,当你不因〖自书〗而获得牌时,你摸一张牌',
                        xzjj_namam: '纳蛮',
                        xzjj_namam_info: '当其他角色打出的【杀】进入弃牌堆时,你可以获得之.出牌阶段限两次,你可以将任意两张相同花色的手牌当做【南蛮入侵】使用',
                        xzjj_mambing_2: '蛮兵',
                        xzjj_mambing_2_info: '',
                        xzjj_mambing2: '纳蛮',
                        xzjj_mambing2_info: '',
                        xzjj_manbing: '蛮兵',
                        xzjj_manbing_info: '摸牌阶段开始时,若你手牌中没有南蛮入侵,你获得一张南蛮入侵,你不能成为其他角色使用南蛮入侵和乐不思蜀的目标',
                        xzjj_yingshi: '应势',
                        xzjj_yingshi_info: '出牌阶段开始时,若场上的所有角色均没有「酬」,则你可以将所有的♥️️牌置于一名其他角色的武将牌旁,称之为「酬」.有「酬」的角色受到「杀」的伤害/死亡时,伤害来源/你获得其中的一张/所有的「酬」',
                        xzjj_yingshi_heart: '应势',
                        xzjj_yingshi_heart_info: '',
                        xzjj_quanji: '权计',
                        xzjj_quanji_info: '出牌阶段结束时,若你的手牌数大于体力值,或当体力变动后,你可以摸一张牌,将一张手牌置于武将牌上,称为<权>;你的手牌上限+X,出牌阶段你可以多出Y张 杀(X为<权>的数量Y为权计数的一半,向下取整)',
                        xzjj_zili: '自立',
                        xzjj_zili_info: "觉醒技,准备阶段开始时,若<权>的数量不小于3,你减1点体力上限,选择一项:1、回复1点体力;2、摸两张牌.你获得技能<排异>,之后你的摸牌阶段你多摸X张牌(X为你'权'标记的1/3,向下取整)",
                        xzjj_zhenggong: '争功',
                        xzjj_zhenggong_info: '你每受到一次伤害,可以获得伤害来源装备区中的一张牌并立即放入你的装备区.你再装备一件装备',
                        xzjj_zhenggong2: '争功',
                        xzjj_zhenggong2_info: '',
                        xzjj_paiyi: '排异',
                        xzjj_paiyi_info: '每次自己受伤,在伤害来源回合结束后自己开始一个新的回合',
                        xzjj_fashu: '伐蜀',
                        xzjj_fashu_info: "限定技,回合开始前,如果你的'权'标记>=游戏人数,则你可以摸X张牌增加一点体力上限并回复两点体力.(X为权标记数量的一半,向下取整)",
                        xzjj_luomei: '落梅',
                        xzjj_luomei_info: '每当你打出或使用♣️️牌时,你摸一张牌',
                        xzjj_luoying: '落英',
                        xzjj_luoying_info: '当其他角色的♣️️牌因弃置或判定而进入弃牌堆时,你可以获得之',
                        xzjj_jiushi: '酒诗',
                        xzjj_jiushi_info: '',
                        xzjj_jiushi2: '酒诗',
                        xzjj_jiushi2_info: '',
                        xzjj_jiushi3: '酒诗',
                        xzjj_jiushi3_info: '你可以将一张♣️️牌当【杀】【闪】【酒】使用或打出,你使用酒没有次数限制,你不会受到来自酒的额外伤害',
                        xzjj_jiushi1: '酒诗',
                        xzjj_jiushi1_info: '',
                        xzjj_qibu: '七步',
                        xzjj_qibu_info: '',
                        xzjj_七步: '七步',
                        xzjj_七步_info: '你的回合结束前,若你使用了七张或七张以上的手牌,你获得一个额外的回合,你摸三张牌并回复一点体力.若你的体力上限不等于7,你的回合结束时,你加一点体力上限',
                        xzjj_xinzhishouyu: '心之守御',
                        xzjj_xinzhishouyu_info: '',
                        xzjj_zjiushi: '酒赋',
                        xzjj_zjiushi_info: '当你需要使用【酒】时,若你的武将牌正面向上,你可以翻面,视为使用一张【酒】.当你受到伤害后,若你的武将牌背面向上,你可以翻面并获得牌堆中的一张随机锦囊',
                        xzjj_luohua: '落花',
                        xzjj_luohua_info: '你的♣️️杀无视距离,可以额外指定一个目标并且造成的伤害+1,',
                        xzjj_tianbing: '天兵',
                        xzjj_tianbing_info: '<span style="color: yellow"></span><li><span style="color: gold">当有角色</span>造成伤害后,可令你摸1张牌,<span style="color: gold">若如此做</span>,你须将1张牌置于武将牌上,称为"天兵".你最多有7张天兵.<li><span style="color: gold">回合开始</span>时,你可以观看并按任意顺序调整牌堆顶X张牌(X为你的"天兵"数).<li>你可以使用或打出"天兵"',
                        xzjj_tianbing_card: '天兵',
                        xzjj_tianbing_card_info: '',
                        xzjj_tianbing_use: '天兵',
                        xzjj_tianbing_use_info: '',
                        xzjj_jz_huantian: '黄天',
                        xzjj_jz_huantian_info: '任意角色判定时,你可以使所有角色无法在此次判定发动技能',
                        xzjj_leihun: '雷魂',
                        xzjj_leihun_info: '锁定技,你受到的雷电伤害均视为体力回复',
                        xzjj_tianbing_respond: '天兵',
                        xzjj_tianbing_respond_info: '',
                        xzjj_tb_yingbing: '雷斩',
                        xzjj_tb_yingbing_info: '每名角色回合限一次,当有角色受到伤害时,你可进行一次判定并获得判定牌,若判定结果为黑色则视为你对其使用一张【雷杀】',
                        xzjj_lingji: '灵击',
                        xzjj_lingji_info: '一名角色的结束阶段,若你本回合使用过牌,或受到过伤害,你可以选择一项:<br><li>1,摸一张牌;<br><li>2,展示当前回合角色的一张牌,并将之置于牌堆底.<br><li>若你装备阴阳玉或灵力为满,可以选择两项.<br><li>进行选择后你获得一点灵力',
                        xzjj_lingmengjiang_yinyang: '鬼神阴阳',
                        xzjj_lingmengjiang_yinyang_info: '',
                        xzjj_lingmengjiang_yinyang2: '阴阳',
                        xzjj_lingmengjiang_yinyang2_info: '',
                        xzjj_z_yinyang: '阴阳',
                        xzjj_z_yinyang_info: '锁定技,你体力变动后,须判定:若为红色,你获得判定牌,并添加临时技能【心之境界】直到回合结束;否则,你摸两张牌.  ',
                        lingmeng_saiqian: '警告你',
                        lingmeng_saiqian_info: '',
                        lingmeng_saiqiang2: '呜呜,我的塞钱箱',
                        lingmeng_saiqiang2_info: '',
                        xzjj_baonulingmeng: '暴怒的灵梦',
                        xzjj_baonulingmeng_info: '锁定技,你受到的雷电和火焰伤害均视为体力回复',
                        xzjj_baonulingmeng2: '暴怒',
                        xzjj_baonulingmeng2_info: '',
                        saiqian1: '例大祭',
                        saiqian1_info: '',
                        saiqian3: '赛钱箱',
                        saiqian3_info: '',
                        saiqian2: '供奉',
                        saiqian2_info: '',
                        xzjj_lingmeng: '灵梦',
                        xzjj_lingmeng_info: '',
                        xzjj_kanpo2: '看破子',
                        xzjj_kanpo2_info: '',
                        xzjj_zhuandui1: '专对防',
                        xzjj_zhuandui1_info: '',
                        zhuangdui_gong: '专对攻',
                        zhuangdui_gong_info: '',
                        xzjj_tianbian: '天辩',
                        xzjj_tianbian_info: '你拼点时,可以改为用牌堆顶的一张牌进行拼点;当你拼点的牌亮出后,若此牌颜色为红色,则此牌的点数视为K',
                        xzjj_duxin: '读心',
                        xzjj_duxin_info: '出牌阶段,你可观看任意一名角色手牌',
                        hxxdzf1: '幻想乡的祝福',
                        hxxdzf1_info: '锁定技,摸牌阶段摸牌时,你额外摸一张牌;你的手牌上限为你的体力上限.当你的手牌数小于X时,你可以将手牌摸至X张(X为你已损失的体力值).当你失去手牌后,你摸一张牌并获得一点护甲(每回合限一次)',
                        hxxdzf2: '幻想乡的祝福',
                        hxxdzf2_info: '',
                        hxxdzf3: '幻想乡的祝福',
                        hxxdzf3_info: '',
                        hxxdzf5: '幻想乡的祝福',
                        hxxdzf5_info: '',
                        xzjj_lianjie: '连接',
                        xzjj_lianjie_info: '锁定技,当一名其他角色成为黑色基本牌或黑色普通锦囊牌的目标时,你既不是此牌的使用者也不是目标,你也成为此牌的目标',
                        xzjj_yinghun: '英魂',
                        xzjj_yinghun_info: '当你的体力下降后或你的回合开始时,若你已受伤,你可令一名角色执行一项:摸X张牌,弃置一张牌;或摸一张牌,弃置X张牌(X为你已损失的体力+你的手牌数与体力上限的差值,至多为8)',
                        xzjj_jiang: '激昂',
                        xzjj_jiang_info: '每当你使用红色牌指定目标后,你可以摸一张牌',
                        xzjj_yingzi: '英姿',
                        xzjj_yingzi_info: '(每名角色的回合限一次)当你失去手牌后你摸一张牌并增加一点护甲',
                        xzjj_hunzi: '魂姿',
                        xzjj_hunzi_info: '觉醒技,当你的体力值下降到1时,你结终止所有结算并从你开始进行回合,你增加一点体力上限失去【魂姿】获得【英姿】和【英魂】再获得一张桃和杀;直到你的下个回合开始前你每使用一张红杀,你摸一张杀',
                        xzjj_jiang_x: '  ',
                        xzjj_jiang_x_info: '',
                        xzjj_wu_xiongcai: '江东',
                        xzjj_wu_xiongcai_info: '江东子弟,何惧于天下!',
                        xzjj_shu_xc: '北伐',
                        xzjj_shu_xc_info: '<span class="yellowtext"><span class="yellowtext"><span class="yellowtext">锁定技</span></span></span>,你在回合结束后随机获得一个魏势力角色的所有技能',
                        xzjj_xianfu: '先辅',
                        xzjj_xianfu_info: '你的回合开始前,你可以选择一名其他角色,当其受到伤害后,你受到等量的伤害,当其回复体力后,你回复等量的体力',
                        xzjj_xianfu2: '先辅',
                        xzjj_xianfu2_info: '',
                        xzjj_xianfu3: '先辅',
                        xzjj_xianfu3_info: '',
                        xzjj_xianfu4: '先辅',
                        xzjj_xianfu4_info: '',
                        xzjj_tiandu: '天妒',
                        xzjj_tiandu_info: '当有角色的判定牌生效后,你可以获得之',
                        xzjj_yiji: '遗计',
                        xzjj_yiji_info: '当你受到1次伤害,可以观看牌堆顶的2张牌,并将其交给任意名角色,若你将所有的牌交给了同1名角色,你进行1次判定:判定牌为♥️️,目标角色回复一点体力',
                        xzjj_chouce: '筹策',
                        xzjj_chouce_info: '',
                        xzjj_chiuce2: '筹策',
                        xzjj_chiuce2_info: '',
                        xzjj_tiandu2: '天妒',
                        xzjj_tiandu2_info: '',
                        xzjj_chouce3: '筹策',
                        xzjj_chouce3_info: '每当你回复1点体力你可以观看牌堆顶的两张牌,将其中一张牌交给一名角色,再将另一张牌交给一名角色;当你受到伤害前,你可以改变伤害来源;当你受到1点伤害后,你可以判定,若结果为:黑色,你弃置一名角色区域里的一张牌;红色,你选择一名角色,其摸一张牌,若其是〖先辅〗选择的角色,改为其摸两张牌',
                        xzjj_x1: '1',
                        xzjj_x1_info: '',
                        xzjj_xzyyy1: '心·阴阳玉',
                        xzjj_xzyyy1_info: '每当你造成伤害后,可以弃置目标的所有红色牌,你获得其一张牌',
                        xzjj_xzyyy2: '心·阴阳玉',
                        xzjj_xzyyy2_info: '每当你受到来自其他角色的伤害,可以弃置伤害来源的所有黑色牌,你封印伤害来源',
                        xzjj_jsfengyin: '封印',
                        xzjj_jsfengyin_info: '',
                        xzjj_linglong_f: '玲珑',
                        xzjj_linglong_f_info: '①当你没有装备武器时,你的出杀次数加1②当你没有装备防具时,当你需要使用或打出一张【闪】时,你可以进行判定,若判定结果不为♠️️,视为你使用或打出了一张【闪】.③当你没有装备坐骑时,你计算与其他角色的距离-1,其他角色计算与你的距离+1④当你没有装备宝物牌时,你回合开始前摸两张牌❶有武器,使用杀指定目标时,你令其弃置一张牌❷有防具,受到大于1的伤害时,你将伤害改为1❸有两张坐骑,红色的杀对你无效❹有宝物,出牌阶段你可以使用一次制衡(最多制衡七张)',
                        xzjj_linglong_b: '玲珑',
                        xzjj_linglong_b_info: '',
                        xzjj_linglong: '玲珑',
                        xzjj_linglong_info: '',
                        xzjj_qiaojiang: '巧匠',
                        xzjj_qiaojiang_info: '回合开始前,你分别随机获得一张武器牌,防具牌和宝物牌,你装备装备牌限制',
                        xzjj_qicai: '奇才',
                        xzjj_qicai_info: '锁定技,你使用的普通锦囊牌不能被【无懈可击】响应;你不能成为延时锦囊牌的目标.你使用锦囊牌无距离限制',
                        xzjj_qicai_mod: '奇才',
                        xzjj_qicai_mod_info: '',
                        xzjj_qiaojiang_b: '巧匠',
                        xzjj_qiaojiang_b_info: '',
                        xzjj_qiaojiang_f: '巧匠',
                        xzjj_qiaojiang_f_info: '',
                        xzjj_qiaojiang_w: '巧匠',
                        xzjj_qiaojiang_w_info: '',
                        cedx: 'cedx',
                        cedx_info: '出牌阶段限一次,你可以弃置两张牌,令任意角色依次各受到一点伤害.(该伤害有十分之一的概率暴击,暴击后伤害为3)',
                        xzjj_buqu: '不屈',
                        xzjj_buqu_info: '①当你扣减1点体力时,若你的体力值为0,你可以将牌堆顶的一张牌置于你的武将牌上:若此牌的点数与你武将牌上的其他牌均不同,你不会死亡;若你的武将牌上有点数相同的牌,你进入濒死状态②当你的手牌数小于X时,你可以将手牌摸至X张(X为你已损失的体力值)③当你进去濒死状态时,你可以弃置所有手牌,若至少弃置了两张则你回复两点体力并摸一张牌',
                        xzjj_buqu2: '血战',
                        xzjj_buqu2_info: '',
                        xzjj_fuchou: '复仇',
                        xzjj_fuchou_info: '当1名角色受到伤害后,你可以受到一点伤害,今伤害来源流失1点体力,并弃置一张牌,你摸一张牌',
                        xzjj_buqu3: '血战',
                        xzjj_buqu3_info: '①当你的手牌数小于X时,你可以将手牌摸至X张(X为你已损失的体力值)②当你进去濒死状态时,你可以弃置所有手牌,若至少弃置了两张则你回复两点体力并摸一张牌',
                        xzjj_huangxiangzhijian: '幻想之间',
                        xzjj_huangxiangzhijian_info: '',
                        xzjj_qixing: '七星',
                        xzjj_qixing_info: '你可以将手牌与星辰链接,你可以使用/打出与七星链接的手牌',
                        xzjj_qixing2: '七星',
                        xzjj_qixing2_info: '',
                        xzjj_qixing3: '七星',
                        xzjj_qixing3_info: '',
                        xzjj_xingdeng: '星灯',
                        xzjj_xingdeng_info: '限定技,出牌阶段或当你处于濒死状态时,你可以弃置你区域内的所有牌并复原你的武将牌,摸7张牌并将体力回复至1点,并你开始使用 七星灯 ',
                        xzjj_rangxing: '禳星',
                        xzjj_rangxing_info: '你的回合开始前,你获得一个"禳星"标记,当你的回合开始时你有七个"禳星"标记时,你增加7点体力上限回复七点体力,并摸7张牌.①禳星期间你进入濒死状态时,你失去一点体力上限回复体力至1,并摸3张牌',
                        xzjj_rangxing2: '禳星',
                        xzjj_rangxing2_info: '',
                        xzjj_guanxing: '观星',
                        xzjj_guanxing_info: '每名角色的准备阶段,你可以观看牌堆顶的X张牌,并将其以任意顺序置于牌堆项或牌堆底.(X为存活角色数且至多为5)',
                        xzjj_kuangfeng: '狂风',
                        xzjj_kuangfeng_info: '回合开始阶段开始时,你可以将1张链接的"星"置入弃牌堆,选择1名角色获得1枚［风］标记,若如此做,当其于你的下回合开始前受到火焰伤害时,该伤害+1;雷电伤害时,你令其弃置2张牌;普通伤害时,你将牌堆顶1张牌置入［星］',
                        xzjj_dawu: '大雾',
                        xzjj_dawu_info: '回合结束阶段开始时,你可以弃掉至少1张"星",选择等量的角色获得［雾］标记,若如此做,当其于你的下回合开始前受到非雷电伤害时,你防止之',
                        xzjj_dawu2: '大雾',
                        xzjj_dawu2_info: '',
                        xzjj_kuangfeng2: '狂风',
                        xzjj_kuangfeng2_info: '',
                        xzjj_bazhen: '八阵',
                        xzjj_bazhen_info: '先天八卦阵(懒得写描述)',
                        xzjj_kongchen: '空城',
                        xzjj_kongchen_info: '当你没有手牌时,你受到伤害时取消之',
                        xzjj_rangxing3: '禳星成功',
                        xzjj_rangxing3_info: '',
                        xzjj_guhuo: '蛊惑',
                        xzjj_guhuo_info: '你可以说出任何一种基本牌或普通锦囊牌,并正面朝下使用或打出一张手牌.体力值不为0的其他角色依次选择是否质疑.若无角色质疑,则该牌按你所述之牌结算.若有角色质疑则亮出验明:若为真,质疑者各失去1点体力;若为假,质疑者各摸一张牌.无论真假,弃置被质疑的牌.仅当被质疑的牌为♥️️且为真时,该牌仍然可以进行结算',
                        xzjj_guhuo_guess: 'xzjj_guhuo_guess',
                        xzjj_guhuo_guess_info: '',
                        xzjj_kangkai: '慷慨',
                        xzjj_kangkai_info: '当一名角色成为【杀】的目标后,你可以摸X张牌.若如此做,你交给其一张牌并展示之.该你和该角色可以依次使用一张牌.(X为目标当前体力)',
                        xzjj_sizhan_nodie: '死战',
                        xzjj_sizhan_nodie_info: '',
                        xzjj_sizhan_huifu: '死战',
                        xzjj_sizhan_huifu_info: '',
                        xzjj_sizhan_huifuwuxiao: '死战',
                        xzjj_sizhan_huifuwuxiao_info: '',
                        xzjj_sizhan_kwx: '死战',
                        xzjj_sizhan_kwx_info: '',
                        xzjj_longxin_r: '龙心',
                        xzjj_longxin_r_info: '',
                        xzjj_chongzhen: '冲阵',
                        xzjj_chongzhen_info: '',
                        xzjj_chongzhen1: '冲阵',
                        xzjj_chongzhen1_info: '每当你发动<龙胆>使用或打出一张手牌时,你可以立即获得对方区域的一张牌',
                        xzjj_longxin: '龙心',
                        xzjj_longxin_info: '锁定技,①当你进入濒死状态时,你摸X张牌且你受到回复效果+1②当你脱离濒死状态后你增加一点体力上限(X为你已损失体力)',
                        xzjj_qimou: '奇谋',
                        xzjj_qimou_info: '',
                        xzjj_enyuan: '恩怨',
                        xzjj_enyuan_info: '当你受到伤害后,你可以令伤害来源选择一项①交给你张牌,若此牌是红色,则你摸两张牌并回复一点体力若是黑色,伤害来源弃置所有手牌和装备区的红色牌并受到一点伤害②失去一点体力,封印其非锁定技并无法回复体力直到你的回合开始',
                        xzjj_enyuan2: '恩怨',
                        xzjj_enyuan2_info: '',
                        xzjj_ylj: '银龙甲',
                        xzjj_ylj_info: '',
                        xzjj_yyq: '银月枪',
                        xzjj_yyq_info: '',
                        xzjj_longzhi: '龙志',
                        xzjj_longzhi_info: '你受到伤害后你获得一张杀摸一张牌,你回复体力后你获得一张闪摸一张牌',
                        xzjj_longzhi2: '龙志2',
                        xzjj_longzhi2_info: '',
                        xzjj_longxiang: '龙翔',
                        xzjj_longxiang_info: '',
                        xzjj_longhun: '龙魂',
                        xzjj_longhun_info: '①每名角色的回合结束后你回复X点体力②你的回合开始前你摸2X张牌(X为你已损失体力的三分之一)③你的手牌无上限',
                        xzjj_longhun2: '龙魂·摸牌',
                        xzjj_longhun2_info: '',
                        xzjj_qianxiang: '钱箱',
                        xzjj_qianxiang_info: '',
                        xzjj_longnu_zy: '龙怒',
                        xzjj_longnu_zy_info: '锁定技,每当你使用的[杀]被目标角色使用的[闪]抵消时,你下次造成的伤害+1且你可以对其使用一张[杀]',
                        xzjj_longxin_maxHp: '龙心',
                        xzjj_longxin_maxHp_info: '',
                        xzjj_chongzhen2: '冲阵ai',
                        xzjj_chongzhen2_info: '每当你发动<龙胆>使用或打出一张手牌时,你可以立即获得对方区域的一张牌',
                        xzjj_huanxiangjianglin: '幻想降临',
                        xzjj_huanxiangjianglin_info: '幻想聚灵,锁定技,每当你受到伤害/流失体力时,你随机观看武将库中的7个武将,获得其中一个武将的所有技能',
                        xzjj_觉醒: '真正形态',
                        xzjj_觉醒_info: '',
                        xzjj_chuangsheng: '幻想创生',
                        xzjj_chuangsheng_info: '',
                        xzjj_第二条命: '第二条命',
                        xzjj_第二条命_info: '限定技,当你处于濒死状态时,你可以弃置你判定区内的所有牌并复原你的武将牌,摸7张牌并将体力回复至上限点.你选择获得[觉醒]',
                        xzjj_攻击选择: '攻击破绽',
                        xzjj_攻击选择_info: '',
                        xzjj_enyuan3: '恩怨',
                        xzjj_enyuan3_info: '',
                        xzjj_jinliao: '禁疗',
                        xzjj_jinliao_info: '',
                        xzjj_qimou2: '奇谋',
                        xzjj_qimou2_info: '',
                        xzjj_幻想道: '幻想道',
                        xzjj_幻想道_info: '任意一名角色判定时,你可以打出一张牌替换之,令此判定结果不可更改',
                        xzjj_xiance: '献策',
                        xzjj_xiance_info: '出牌阶段,你可以令一名其他角色令其摸X张牌并弃置X张牌,该角色需选择一项:1.你和你选择的角色,视为对其攻击范围内的另一名由你指定的角色使用一张【杀】.2.弃置另一名由你指定的角色一张牌,摸将张牌.每回合限一次',
                        xzjj_gongming: '共鸣',
                        xzjj_gongming_info: '游戏开始后,你获得场上所有技能描述中带有"判定"的技能',
                        xzjj_leiji: '弹反',
                        xzjj_leiji_info: '①当你使用或打出【闪】【无懈可击】【闪电】时,你可以进行判定并回复一点体力.②当你的判定的判定牌生效后,若结果为:♥️️,你可对一名其他角色造成2点伤害;♣️️:你摸一张牌并可对一名其他其他角色造成1点伤害',
                        xzjj_leiji_misa: '弹反',
                        xzjj_leiji_misa_info: '',
                        xzjj_双心: '双心',
                        xzjj_双心_info: '你使用的牌可以额外结算一次',
                        xzjj_幻想改造: '真实幻想',
                        xzjj_幻想改造_info: '出牌阶段,你可以将一张牌转化为另一张牌',
                        xzjj_cc_xiongzhi: '雄志',
                        xzjj_cc_xiongzhi_info: '你的回合开始前,你进行一次感慨,你获得一个技能直到回合结束',
                        xzjj_wushuang0: '无双',
                        xzjj_wushuang0_info: '锁定技,当你使用【杀】或【决斗】指定目标后,你令此牌需要依次使用或打出两张【闪】或【杀】响应',
                        xzjj_wushuang1: '无双',
                        xzjj_wushuang1_info: '',
                        xzjj_wushuang2: '无双',
                        xzjj_wushuang2_info: '',
                        xzjj_liyu: '利驭',
                        xzjj_liyu_info: '当你使用【杀】或决斗对一名其他角色造成伤害后,你可以获得其一张牌.若此牌不为装备牌,则其摸一张牌.若此牌为装备牌,则视为你对其选择的另一名角色使用一张【决斗】',
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
                    info.trashBin = [`ext:心之境界/image/${i}.jpg`];
                    info.dieAudios = [`ext:心之境界/audio/${i}.mp3`];
                }
                lib.config.all.characters.add('心之境界');
                lib.config.characters.add('心之境界');
                lib.translate['心之境界_character_config'] = `心之境界`;
                return QQQ;
            });
            game.import('card', (lib, game, ui, get, ai, _status) => {
                const QQQ = {
                    name: '心之境界',
                    connect: true,
                    card: {
                        xzjj_saiqianxiang: {
                            audio: 'ext:心之境界',
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip5',
                            ai: {
                                basic: {
                                    equipValue: 4,
                                },
                            },
                            skills: ['saiqian1', 'saiqian3'],
                        },
                        xzjj_lidaji: {
                            audio: 'gezi_reidaisai',
                            fullskin: true,
                            type: 'trick',
                            enable: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return true;
                            },
                            contentBefore() {
                                player.say('博丽神社例大祭开始啦!欢迎光临欢迎光临!赛钱箱在这边!');
                            },
                            content() {
                                'step 0';
                                target.draw();
                                target.chooseCardTarget({
                                    selectCard: 1,
                                    position: 'he',
                                    filterTarget(card, player, target) {
                                        return player != target;
                                    },
                                    ai1(card) {
                                        return get.unuseful(card) + 9;
                                    },
                                    ai2(target) {
                                        return get.attitude(_status.event.player, target);
                                    },
                                    prompt: '你送给别人一张牌!',
                                });
                                ('step 1');
                                if (result.targets?.length) {
                                    result.targets[0].gain(result.cards);
                                    target.$give(result.cards.length, result.targets[0]);
                                    target.addExpose();
                                }
                            },
                            ai: {
                                wuxie(target, card, player, viewer) {
                                    if (
                                        game.countPlayer(function (current) {
                                            return get.attitude(viewer, current) <= 0;
                                        }) == 1
                                    ) {
                                        return 0;
                                    }
                                    if (
                                        get.attitude(viewer, target) <= 0 &&
                                        target.countCards('e', function (card) {
                                            return get.value(card) > 0;
                                        })
                                    ) {
                                        if (Math.random() < 0.5) return 0;
                                        return 1;
                                    }
                                    return 0;
                                },
                                basic: {
                                    order: 5,
                                    useful: 1,
                                    value: 1,
                                },
                                result: {
                                    target(player, target) {
                                        return 1;
                                    },
                                },
                                tag: {
                                    multitarget: 1,
                                },
                            },
                        },
                    },
                    translate: {
                        xzjj_saiqianxiang: '塞钱箱',
                        xzjj_saiqianxiang_info: '一回合一次,其他角色的出牌阶段,其可以交给你一张牌;一回合一次,你可以将一张手牌当作【例大祭】使用',
                        xzjj_lidaji: '博丽例大祭',
                        xzjj_lidaji_info: '出牌阶段,对所有角色使用:目标各摸一张牌,可以交给一名其它角色一张牌',
                    },
                };
                for (const i in QQQ.card) {
                    const info = QQQ.card[i];
                    if (info.fullskin) {
                        info.image = `ext:心之境界/image/${i}.png`;
                    } else {
                        info.image = `ext:心之境界/image/${i}.jpg`;
                    }
                }
                lib.config.all.cards.add('心之境界');
                lib.config.cards.add('心之境界');
                lib.translate.心之境界_card_config = '心之境界';
                return QQQ;
            });
        },
        package: extensionInfo,
    };
});

import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '将包',
        content(config, pack) {
            // ---------------------------------------阵亡配音------------------------------------------//
            lib.skill._zhengwang = {
                trigger: {
                    player: 'dieBegin',
                },
                //direct:true,
                _priority: 1,
                forced: true,
                /*filter:function (event,player){
        return !event.player.isAlive();   
        },*/
                content() {
                    game.playAudio('../extension/将包/audio', trigger.player.name);
                },
            };
            // ---------------------------------------武将评级------------------------------------------//
            if (lib.rank) {
                lib.rank.rarity.legend.addArray(['D_shen_zhaoyun', 'D_liuyan', 'D_shen_caocao', 'D_shen_zhangliao', 'D_shen_liubei', 'D_machao', 'D_simashi', 'D_lvbu', 'D_daqiao', 'D_zhanghe', 'D_sunhao', 'D_huangzhong', 'D_caojie', 'D_xurong', 'D_xusheng', 'D_qinmi', 'D_shen_ganning', 'D_shenzhugeliang', 'D_新赵云', 'D_shen_zuoci']);
            }
        },
        precontent() {
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const 将包 = {
                    name: '将包',
                    connect: true,
                    character: {
                        D_yuanshao: ['male', 'qun', '5/8', ['zhaozhu', '箭阵', '分立'], ['zhu']],
                        D_新赵云: ['male', 'qun', 4, ['yicong', 'longdan', 'chongzhen'], ['des:开疆扩土最辉煌, 国富民强壮志昂. 十里洛阳繁盛地, 五洲四海强名扬']],
                        D_SP: ['male', 'shu', 4, ['tianjiang'], []],
                        D_cenhun: ['male', 'wu', 3, ['jishe1', 'lianhuo1'], []],
                        D_sunru: ['female', 'wu', 3, ['释衅', '影箭'], []],
                        D_wuguotai: ['female', 'wu', 3, ['补益', 'ganlu', '偃甲', '择婿'], []],
                        D_diaochan: ['female', 'qun', 3, ['离间', '闭月'], []],
                        D_zhangjiao: ['male', 'qun', 3, ['雷击', 'guidao1', 'huangtian1'], ['zhu']],
                        D_pangtong: ['male', 'shu', 3, ['D_lianhuan1', 'D_niepan'], []],
                        D_guojia: ['male', 'wei', 3, ['遗计', 'tiandu1', 'qizuo'], []],
                        D_huatuo: ['male', 'qun', 3, ['D_qingnang', '急救', 'miaoshou'], []],
                        D_zhangfei: ['male', 'shu', '3/5', ['暴怒', '神煞', '百战'], []],
                        D_huanggai: ['male', 'wu', 4, ['kurou1', '诈降'], []],
                        D_simayi: ['male', 'wei', 3, ['guicai', '忍戒', '除患'], []],
                        D_lvmeng: ['male', 'wu', 4, ['克己', '博图'], []],
                        D_zhenji: ['female', 'wei', 3, ['洛神', '倾国'], []],
                        D_liuyan: ['male', 'qun', 3, ['tushe', 'limu'], []],
                        D_孙尚香: ['female', 'shu', 4, ['枭姬', '良缘'], []],
                        D_xuyou: ['male', 'qun', 4, ['成略', '恃才', '寸目'], []],
                        D_黄月英: ['female', 'shu', 3, ['集智', '奇姬', '才女'], []],
                        D_蔡文姬: ['female', 'qun', 3, ['悲歌', '断肠'], []],
                        D_孙策: ['male', 'wu', '3/5', ['制霸', '英魂', '激昂'], []],
                        D_shenshanshi: ['female', 'shen', 5, ['御结'], []],
                        D_shen_liubei: ['male', 'shen', '6', ['liubei_longnu', 'liubei_jieying'], ['zhu']],
                        D_诸葛恪: ['male', 'wu', 3, ['傲才', '黩武'], []],
                        D_神周瑜: ['male', 'shen', 3, ['琴音', 'xinyeyan'], []],
                        D_步练师: ['female', 'wu', 3, ['安恤', '追忆'], []],
                        D_刘禅: ['male', 'shu', 3, ['放权', '享乐', '若愚'], ['zhu']],
                        D_caopi: ['male', 'wei', 3, ['放逐', 'D_songwei', 'rexingshang'], ['zhu']],
                        D_孙皓: ['male', 'wu', 5, ['canshi+', 'chouhai+', 'guiming+'], ['zhu']],
                        D_SP马云騄: ['female', 'shu', 3, ['fenpo+', 'mashu+'], []],
                        D_王基: ['male', 'wei', 3, ['奇制', '进趋'], []],
                        D_liubei: ['male', 'shu', 4, ['激将', 'xrende'], ['zhu']],
                        D_miheng: ['male', 'qun', 3, ['D_kuangcai', 'D_shejian'], []],
                        D_liuxie: ['male', 'qun', 2, ['xlongmai', 'xtianming'], ['zhu']],
                        D_无敌战神: ['male', 'shen', 5, ['武魂', 'xshenfen'], []],
                        D_zhaozhong: ['male', 'qun', 6, ['殃众', '惶恐'], []],
                        D_无敌: ['male', 'shen', 2, ['神佑'], []],
                        D_quyix: ['male', 'qun', 3, ['伏骑', '骄恣'], []],
                        D_花鬘: ['female', 'shu', 3, ['manyix', 'mansix', 'suoyingx', 'zhanyuanx'], []],
                        D_许诸: ['male', 'wei', 4, ['裸衣', '勇决'], []],
                        D_周泰: ['male', 'wu', 4, ['不屈', '奋激'], []],
                        D_zhangxiu: ['male', 'qun', 3, ['雄乱', '从谏'], []],
                        D_华雄: ['male', 'qun', 5, ['yaowux', '恃勇'], []],
                        D_zhangrang: ['male', 'qun', 3, ['taoluanx'], []],
                        D_huanghao: ['male', 'shu', 3, ['qinqing', '贿生'], []],
                        D_xusheng: ['male', 'wu', 4, ['D_pojun'], []],
                        D_ganning: ['male', 'wu', 4, ['奇袭', '奋威', '射却'], []],
                        D_夏侯杰: ['male', 'wei', '3/4', ['烈胆', '壮胆'], []],
                        D_duyu: ['male', 'qun', 3, ['武库', '三陈'], []],
                        D_zhugeliang: ['male', 'qun', 3, ['空城', '八阵', '谋略', '衣钵'], []],
                        D_xiaoqiao: ['female', 'shen', 1, ['天香', 'D_hongyan'], []],
                        D_zhangliao: ['male', 'wei', 4, ['突袭', 'D_jifeng', 'zhaohu'], []],
                        D_shen_zhaoyun: ['male', 'shen', 2, ['D_longhun', 'D_juejing'], []],
                        D_jiangbao_yuanshao: ['male', 'qun', 4, ['乱击', '血裔'], ['zhu']],
                        D_caorui: ['male', 'wei', 3, ['xhuituo', 'xmingjian', 'xxingshuai'], ['zhu']],
                        D_shen_caocao: ['male', 'shen', 3, ['D_guixin', 'D_xiongcai', '护驾'], ['zhu']],
                        D_weiyan: ['male', 'qun', 4, ['奇谋', '狂骨'], []],
                        D_shen_zhangliao: ['male', 'shen', 4, ['xduorui', 'D_zhiti'], []],
                        D_zhouyu: ['male', 'wu', 3, ['D_yingzi', 'D_fanjian'], []],
                        D_banyu: ['female', 'wu', 3, ['D_chanhui', 'D_jiaojin', 'D_meibu', 'D_mumu'], []],
                        D_machao: ['male', 'shu', 4, ['D_tieji', 'D_mashu'], []],
                        D_simashi: ['male', 'jin', '3/4', ['D_taoyin', 'yimie1', 'ruilue', 'D_tairan'], ['zhu', 'hiddenSkill']],
                        D_shen_zuoci: ['male', 'qun', 4, ['D_huashen', 'D_xinsheng'], []],
                        D_caozhi: ['male', 'wei', 3, ['luoying1', 'jiushi11'], []],
                        D_xinzhaoxiang: ['female', 'shu', 4, ['D_fanghun', 'xinfuhan'], []],
                        D_lvbu: ['male', 'qun', 4, ['D_wushuang', 'D_shenwei'], []],
                        D_daqiao: ['female', 'wu', 4, ['D_guose', 'D_liuli'], []],
                        D_zhanghe: ['male', 'wei', 4, ['D_qiaobian'], []],
                        D_shenzhugeliang: ['male', 'shu', 3, ['D_guanxing', 'D_kongcheng'], []],
                        D_liuchen: ['male', 'shu', 4, ['D_zhanjue', 'D_qinwang'], []],
                        D_huangzhong: ['male', 'shu', 4, ['D_liegong'], []],
                        D_caojie: ['female', 'qun', 3, ['D_shouxi', 'huimin'], []],
                        D_xurong: ['male', 'qun', 4, ['D_xionghuo', 'D_shajue'], []],
                        D_qinmi: ['male', 'shu', 4, ['D_jianzheng', 'D_zhuandui', 'D_tianbian'], []],
                        D_madai: ['male', 'shu', 4, ['madai_mashu', 'D_qianxi'], []],
                        D_shen_ganning: ['male', 'shen', '3/6', ['D_poxi', 'D_jieying'], []],
                        D_严白虎: ['male', 'qun', 4, ['D_zhidao', 'D_jili'], []],
                    },
                    characterTitle: {
                        D_shen_caocao: '炼狱枭魂',
                        D_shen_zhaoyun: '战龙在野',
                        D_shen_zhangliao: '破虏荡寇',
                        D_zhouyu: '英姿白袍',
                        D_machao: '西凉雄狮',
                        D_zhangrang: '权冠诸宦',
                        D_xuyou: '献计投曹',
                        D_zhangjiao: '岁在甲子',
                        D_liuyan: '雄据益州',
                    },
                    skill: {
                        离间: {
                            audio: 'ext:将包/audio:2',
                            audioname: ['D_diaochan'],
                            enable: 'phaseUse',
                            usable: 5,
                            filter(event, player) {
                                return (
                                    game.countPlayer(function (current) {
                                        return current != player && current.sex;
                                    }) > 1
                                );
                            },
                            check(card) {
                                return 10 - get.value(card);
                            },
                            filterCard: true,
                            position: 'he',
                            filterTarget(card, player, target) {
                                if (player == target) return false;
                                if (ui.selected.targets.length == 1) {
                                    return target.canUse({ name: 'juedou' }, ui.selected.targets[0]);
                                }
                                return true;
                            },
                            targetprompt: ['先出杀', '后出杀'],
                            selectTarget: 2,
                            multitarget: true,
                            content() {
                                targets[1].useCard({ name: 'juedou' }, 'nowuxie', targets[0], 'noai').animate = false;
                            },
                            ai: {
                                order: 8,
                                result: {
                                    target(player, target) {
                                        if (ui.selected.targets.length == 0) {
                                            return -3;
                                        } else {
                                            return get.effect(target, { name: 'juedou' }, ui.selected.targets[0], target);
                                        }
                                    },
                                },
                                expose: 0.4,
                                threaten: 3,
                            },
                        },
                        暴怒: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            content() {
                                player.addSkill('zhangbax');
                                player.addSkill('paoxiao');
                            },
                        },
                        克己: {
                            audio: 'ext:将包/audio:2',
                            forced: true,
                            frequent(event, player) {
                                return player.needsToDiscard();
                            },
                            trigger: {
                                player: 'phaseDiscardBefore',
                            },
                            filter(event, player) {
                                if (player.getHistory('skipped').includes('phaseUse')) return true;
                                var history = player.getHistory('useCard').concat(player.getHistory('respond'));
                                for (var i = 0; i < history.length; i++) {
                                    if (history[i].card.name == 'fhfhg' && history[i].isPhaseUsing()) return false;
                                }
                                return true;
                            },
                            content() {
                                trigger.cancel();
                            },
                        },
                        遗计: {
                            audio: 'ext:将包/audio:2',
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
                                player.recover();
                                event.cards = get.cards(player.hp);
                                ('step 2');
                                if (event.cards.length > 1) {
                                    player.chooseCardButton('将<遗计>牌分配给任意角色', true, event.cards, [1, event.cards.length]).set('ai', function (button) {
                                        if (ui.selected.buttons.length == 0) return 1;
                                        return 0;
                                    });
                                } else if (event.cards.length == 1) {
                                    event._result = { links: event.cards.slice(0), bool: true };
                                } else {
                                    event.goto(5);
                                }
                                ('step 3');
                                if (result.bool) {
                                    for (var i = 0; i < result.links.length; i++) {
                                        event.cards.remove(result.links[i]);
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
                                        .set('enemy', get.value(event.togive[0], player, 'raw') < 0);
                                }
                                ('step 4');
                                if (result.targets.length) {
                                    result.targets[0].gain(event.togive, 'draw');
                                    player.line(result.targets[0], 'green');
                                    game.log(result.targets[0], '获得了' + get.cnNumber(event.togive.length) + '张牌');
                                    event.goto(2);
                                }
                                ('step 5');
                                if (event.count > 0) player.chooseBool(get.prompt2(event.name)).set('frequentSkill', event.name);
                                else event.finish();
                                ('step 6');
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
                        狂骨: {
                            trigger: {
                                source: 'damageSource',
                                player: 'useCard',
                            },
                            filter(event, player, name) {
                                if (name == 'damageSource' && event.num > 0 && get.distance(player, event.player) != 0) return true;
                                else if (name == 'useCard' && event.card && get.tag(event.card, 'damage')) return true;
                                return false;
                            },
                            audio: 'ext:将包/audio:2',
                            forced: true,
                            content() {
                                'step 0';
                                if (trigger.num) {
                                    player.recover(trigger.num) && player.draw(trigger.num);
                                } else {
                                    player.draw();
                                }
                                ('step 1');
                                if (result.bool) {
                                }
                            },
                        },
                        雷击: {
                            audio: 'ext:将包/audio:2',
                            audioname: ['boss_qinglong'],
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            filter(event, player) {
                                return event.card.name == 'shan' || event.card.name == 'sha';
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt2('雷击'), function (card, player, target) {
                                    return target != player;
                                }).ai = function (target) {
                                    if (target.hasSkill('hongyan')) return 0;
                                    return get.damageEffect(target, _status.event.player, _status.event.player, 'thunder');
                                };
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    event.target.judge(function (card) {
                                        var suit = card.suit;
                                        if (suit == 'spade') return -4;
                                        if (suit == 'club') return -2;
                                        return 0;
                                    });
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.suit == 'club') {
                                    event.target.damage(3, 'thunder');
                                } else if (result.suit == 'spade') {
                                    event.target.damage(4, 'thunder');
                                } else if (result.suit == 'heart') {
                                    event.target.damage('thunder');
                                    player.recover(2);
                                } else if (result.suit == 'diamond') {
                                    event.target.damage(2, 'thunder');
                                    player.recover();
                                }
                            },
                            ai: {
                                useShan: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'respondShan')) {
                                            var hastarget = game.hasPlayer(function (current) {
                                                return get.attitude(target, current) < 0;
                                            });
                                            var be = target.countCards('e', { color: 'black' });
                                            if (target.countCards('h', 'shan') && be) {
                                                if (!target.hasSkill('guidao')) return 0;
                                                return [0, hastarget ? target.countCards('he') / 2 : 0];
                                            }
                                            if (target.countCards('h', 'shan') && target.countCards('h') > 2) {
                                                if (!target.hasSkill('guidao')) return 0;
                                                return [0, hastarget ? target.countCards('h') / 4 : 0];
                                            }
                                            if (target.countCards('h') > 3 || (be && target.countCards('h') >= 2)) {
                                                return [0, 0];
                                            }
                                            if (target.countCards('h') == 0) {
                                                return [1.5, 0];
                                            }
                                            if (target.countCards('h') == 1 && !be) {
                                                return [1.2, 0];
                                            }
                                            if (!target.hasSkill('guidao')) return [1, 0.05];
                                            return [1, Math.min(0.5, (target.countCards('h') + be) / 4)];
                                        }
                                    },
                                },
                            },
                        },
                        闭月: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            content() {
                                var num = player.maxHp;
                                player.draw(num);
                                player.recover(num);
                            },
                        },
                        武魂: {
                            group: ['new_wuhun_mark', 'new_wuhun_die', 'wuhun22', 'wuhun23'],
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.source != undefined;
                            },
                            content() {
                                trigger.source.addMark('new_wuhun_mark', trigger.num);
                            },
                            subSkill: {
                                die: {
                                    trigger: {
                                        player: 'die',
                                    },
                                    forced: true,
                                    forceDie: true,
                                    forced: true,
                                    filter(event, player) {
                                        return game.hasPlayer(function (current) {
                                            return current != player && current.hasMark('new_wuhun_mark');
                                        });
                                    },
                                    content() {
                                        'step 0';
                                        var num = 0;
                                        for (var i = 0; i < game.players.length; i++) {
                                            var current = game.players[i];
                                            if (current != player && current.countMark('new_wuhun_mark') > num) {
                                                num = current.countMark('new_wuhun_mark');
                                            }
                                        }
                                        player
                                            .chooseTarget(true, '请选择【武魂】的目标', function (card, player, target) {
                                                return target != player && target.countMark('new_wuhun_mark') == _status.event.num;
                                            })
                                            .set('ai', function (target) {
                                                return -get.attitude(_status.event.player, target);
                                            })
                                            .set('forceDie', true)
                                            .set('num', num);
                                        ('step 1');
                                        if (result.bool && result.targets && result.targets.length) {
                                            var target = result.targets[0];
                                            event.target = target;
                                            player.line(target, { color: [255, 255, 0] });
                                        }
                                        ('step 2');
                                        target.judge(function (card) {
                                            if (['gjfhgg'].includes(card.name)) return 10;
                                            return -10;
                                        });
                                        ('step 3');
                                        if (!result.bool) {
                                            const next = game.createEvent('diex', false);
                                            next.source = player;
                                            next.player = target;
                                            next._triggered = null;
                                            next.restMap = { type: null, count: null, audio: null };
                                            next.excludeMark = [];
                                            next.setContent('die');
                                        }
                                    },
                                },
                                mark: {
                                    marktext: '魇',
                                    intro: {
                                        name: '梦魇',
                                        content: 'mark',
                                    },
                                },
                            },
                            ai: {
                                threaten: 0.01,
                                notemp: true,
                            },
                        },
                        补益: {
                            trigger: {
                                global: 'dying',
                            },
                            audio: 'ext:将包/audio:2',
                            audioname: ['D_wuguotai'],
                            filter(event, player) {
                                return event.player.hp <= 0 && event.player.countCards('h', 'e', 'j') >= 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var check;
                                if (trigger.player.isUnderControl(true, player)) {
                                    check = player.hasCard(function (card) {
                                        return get.type(card) != 'emmm';
                                    });
                                } else {
                                    check = get.attitude(player, trigger.player) > 0;
                                }
                                player
                                    .choosePlayerCard(trigger.player, get.prompt('buyi', trigger.player), 'h')
                                    .set('ai', function (button) {
                                        if (!_status.event.check) return 0;
                                        if (_status.event.target.isUnderControl(true, _status.event.player)) {
                                            if (get.type(button.link) != 'emmm') {
                                                return 10 - get.value(button.link);
                                            }
                                            return 0;
                                        } else {
                                            return Math.random();
                                        }
                                    })
                                    .set('check', check)
                                    .set('filterButton', function (button) {
                                        if (_status.event.player == _status.event.target) {
                                            return lib.filter.cardDiscardable(button.link, _status.event.player);
                                        }
                                        return true;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    event.card = result.links[0];
                                    player.showCards([event.card], get.translation(player) + '展示的手牌');
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (get.type(event.card) != 'emmm') {
                                    var num = player.maxHp;
                                    trigger.player.recover(num);
                                    trigger.player.draw(num);
                                }
                            },
                            ai: {
                                threaten: 1.4,
                            },
                        },
                        释衅: {
                            audio: 'ext:将包/audio:2',
                            forced: true,
                            trigger: {
                                player: 'damageBegin4',
                            },
                            filter(event, player) {
                                return event.nature != 'emm';
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
                            audioname2: {
                                caoshuang: 'tuogu',
                            },
                        },
                        急溃: {
                            audio: 'ext:将包/audio:2',
                            forced: true,
                            trigger: {
                                player: 'damageBefore',
                            },
                            content() {
                                'step 0';
                                trigger.cancel();
                                ('step 1');
                                player.draw(2);
                            },
                            group: ['急溃_roundcount'],
                        },
                        影箭: {
                            audio: 'qingyi',
                            forced: true,
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                player.chooseUseTarget('###是否发动【影箭】？###视为使用一张没有距离限制的【杀】', { name: 'sha' }, false, 'nodistance');
                            },
                            ai: {
                                threaten(player, target) {
                                    return 1.6;
                                },
                            },
                        },
                        称象: {
                            audio: 'ext:将包/audio:2',
                            forced: true,
                            usable: 5,
                            trigger: {
                                global: 'damageEnd',
                            },
                            async content(event, trigger, player) {
                                //QQQ
                                var card = get.cards(4);
                                const result = await player
                                    .chooseButton(['获得其中任意数量点数之和不大于13的牌', card], [0, card.length])
                                    .set('filterButton', (button) => {
                                        if (ui.selected.buttons[0]) {
                                            var num = 0;
                                            for (var i of ui.selected.buttons) {
                                                num += i.link.number;
                                            }
                                            return num + button.link.number < 13;
                                        }
                                        return true;
                                    })
                                    .set('ai', (button) => 2 * get.value(button.link) - button.link.number)
                                    .forResult();
                                if (result.links && result.links[0]) {
                                    player.gain(result.links, 'gain2');
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
                                            if (target.hp >= 4) return [1, 2];
                                            if (target.hp == 3) return [1, 1.5];
                                            if (target.hp == 2) return [1, 0.5];
                                        }
                                    },
                                },
                            },
                        },
                        乱击: {
                            audio: 'ext:将包/audio:2',
                            enable: 'phaseUse',
                            usable: 5,
                            group: ['D_luanji', 'D_luanji1'],
                            filterCard: true,
                            position: 'he',
                            viewAs: {
                                name: 'wanjian',
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            ai: {
                                basic: {
                                    order: 10,
                                    useful: 1,
                                    value: 5,
                                },
                                wuxie(target, card, player, viewer) {
                                    if (get.attitude(viewer, target) > 0 && target.countCards('h', 'shan')) {
                                        if (!target.countCards('h') || target.hp == 1 || Math.random() < 0.7) return 0;
                                    }
                                },
                                result: {
                                    target(player, target) {
                                        if (player.hasUnknown(2)) return 0;
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
                                },
                            },
                        },
                        奇谋: {
                            audio: 'ext:将包/audio:2',
                            enable: 'phaseUse',
                            usable: 5,
                            mark: true,
                            content() {
                                'step 0';
                                player.damage(2);
                                player.draw(3);
                                ('step 1');
                                player.addSkill('zhanlong2', { player: 'phaseJieshuBegin' });
                                var cards = [];
                                for (var i = 0; i < 3; i++) {
                                    cards.push(game.createCard('sha'));
                                }
                                player.gain(cards, 'gain2');
                            },
                            ai: {
                                order: 2.7,
                                result: {
                                    player(player) {
                                        if ((player.storage.nzry_chenglve == undefined || player.storage.nzry_chenglve == false) && player.countCards('h') < 3) return 0;
                                        return 1;
                                    },
                                },
                            },
                        },
                        忍戒: {
                            audio: 'ext:将包/audio:2',
                            forced: true,
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.source && event.source.countGainableCards(player, 'he') && event.num > 0 && event.source != player;
                            },
                            content() {
                                player.draw(2) & player.recover();
                            },
                            ai: {
                                maixie_defend: true,
                                effect: {
                                    target(card, player, target) {
                                        if (player.countCards('he') > 1 && get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -1.5];
                                            if (get.attitude(target, player) < 0) return [1, 1];
                                        }
                                    },
                                },
                            },
                        },
                        仁心: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                global: 'dying',
                            },
                            filter(event, player) {
                                return event.player == global && event.player.hp <= 0;
                            },
                            content() {
                                'step 0';
                                player.draw();
                                player.chooseToDiscard(1, 'hes', true);
                                ('step 1');
                                trigger.player.recover(2);
                            },
                        },
                        除患: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                global: 'dyingAfter',
                            },
                            _priority: 10,
                            filter(event, player) {
                                return event.player.isAlive();
                            },
                            logTarget: 'player',
                            filterCard(card, player) {
                                return get.basic(card) == 'sha';
                            },
                            content() {
                                player.useCard({ name: 'sha' }, trigger.player, false, false);
                            },
                            ai: {
                                expose: 0.3,
                                threaten: 1.3,
                            },
                        },
                        急救: {
                            audio: 'ext:将包/audio:2',
                            audioname: ['re_huatuo'],
                            enable: 'chooseToUse',
                            usable: 5,
                            viewAsFilter(player) {
                                return player != _status.currentPhase && player.countCards('hej') >= 0;
                            },
                            position: 'hej',
                            filterCard: true,
                            viewAs: {
                                name: 'tao',
                            },
                            prompt: '将一张牌当桃使用',
                            check(card) {
                                return 15 - get.value(card);
                            },
                            ai: {
                                threaten: 1.5,
                                basic: {
                                    order(card, player) {
                                        if (player.hasSkillTag('pretao')) return 5;
                                        return 2;
                                    },
                                    useful: [8, 6.5, 5, 4],
                                    value: [8, 6.5, 5, 4],
                                },
                                result: {
                                    target: 2,
                                    target_use(player, target) {
                                        // if(player==target&&player.hp<=0) return 2;
                                        if (player.hasSkillTag('nokeep', true, null, true)) return 2;
                                        var nd = player.needsToDiscard();
                                        var keep = false;
                                        if (nd <= 0) {
                                            keep = true;
                                        } else if (nd == 1 && target.hp >= 2 && target.countCards('h', 'tao') <= 1) {
                                            keep = true;
                                        }
                                        var mode = get.mode();
                                        if (target.hp >= 2 && keep && target.hasFriend()) {
                                            if (target.hp > 2 || nd == 0) return 0;
                                            if (target.hp == 2) {
                                                if (
                                                    game.hasPlayer(function (current) {
                                                        if (target != current && get.attitude(target, current) >= 3) {
                                                            if (current.hp <= 1) return true;
                                                            if ((mode == 'identity' || mode == 'versus' || mode == 'chess') && current.identity == 'zhu' && current.hp <= 2) return true;
                                                        }
                                                    })
                                                ) {
                                                    return 0;
                                                }
                                            }
                                        }
                                        if (target.hp < 0 && target != player && target.identity != 'zhu') return 0;
                                        var att = get.attitude(player, target);
                                        if (att < 3 && att >= 0 && player != target) return 0;
                                        var tri = _status.event.getTrigger();
                                        if (mode == 'identity' && player.identity == 'fan' && target.identity == 'fan') {
                                            if (tri && tri.name == 'dying' && tri.source && tri.source.identity == 'fan' && tri.source != target) {
                                                var num = game.countPlayer(function (current) {
                                                    if (current.identity == 'fan') {
                                                        return current.countCards('h', 'tao');
                                                    }
                                                });
                                                if (num > 1 && player == target) return 2;
                                                return 0;
                                            }
                                        }
                                        if (mode == 'identity' && player.identity == 'zhu' && target.identity == 'nei') {
                                            if (tri && tri.name == 'dying' && tri.source && tri.source.identity == 'zhong') {
                                                return 0;
                                            }
                                        }
                                        if (mode == 'stone' && target.isMin() && player != target && tri && tri.name == 'dying' && player.side == target.side && tri.source != target.getEnemy()) {
                                            return 0;
                                        }
                                        return 2;
                                    },
                                },
                                tag: {
                                    recover: 1,
                                    save: 1,
                                },
                            },
                            audioname2: {
                                key_shiki: 'shiki_omusubi',
                            },
                        },
                        百战: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                source: 'damageBegin1',
                            },
                            forced: true,
                            check(event, player) {
                                var att = get.attitude(player, event.player);
                                var num = event.num + 1;
                                var hc = player.countCards('h') - event.player.countCards('h');
                                if (att < 0 && num >= event.player.hp) return true;
                                if (att < 0 && hc < 0) return true;
                                return false;
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                trigger.num++;
                            },
                            ai: {
                                unequip: true,
                                skillTagFilter(player, tag, arg) {
                                    if (arg && arg.name == 'sha') return true;
                                    return false;
                                },
                            },
                        },
                        神煞: {
                            audio: 'ext:将包/audio:2',
                            forced: true,
                            mark: true,
                            limited: true,
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                if (player.storage.oltishen) return false;
                                return player.isDamaged();
                            },
                            check(event, player) {
                                if (player.hp <= 2 || player.getDamagedHp() > 2) return true;
                                if (player.getDamagedHp() <= 1) return false;
                                return player.getDamagedHp() < game.roundNumber;
                            },
                            content() {
                                player.awakenSkill('oltishen');
                                player.hp = player.maxHp;
                                player.draw(player.maxHp - player.hp);
                            },
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        博图: {
                            audio: 'ext:将包/audio:2',
                            usable: 5,
                            trigger: {
                                player: 'phaseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                var history = player.getHistory('useCard', function (evt) {
                                    return evt.isPhaseUsing();
                                });
                                var suits = [];
                                for (var i = 0; i < history.length; i++) {
                                    var suit = history[i].card.suit;
                                    if (suit) suits.add(suit);
                                }
                                return suits.length != 0;
                            },
                            content() {
                                player.phase('nodelay');
                            },
                        },
                        洛神: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.addTempSkill('reluoshen_add');
                                event.cards = [];
                                ('step 1');
                                var next = player.judge(function (card) {
                                    if (card.suit != 'heart') return 1.5;
                                    return -1.5;
                                });
                                if (get.mode() != 'guozhan' && !player.hasSkillTag('rejudge'))
                                    next.set('callback', function () {
                                        if (event.judgeResult.suit != 'heart' && get.position(card, true) == 'o') {
                                            player.gain(card, 'gain2').gaintag.add('reluoshen');
                                        }
                                    });
                                else
                                    next.set('callback', function () {
                                        if (event.judgeResult.suit != 'heart') event.parent.orderingCards.remove(card);
                                    });
                                ('step 2');
                                if (result.bool) {
                                    event.cards.push(result.card);
                                    player.chooseBool('是否再次发动【洛神】？').set('frequentSkill', 'reluoshen');
                                } else {
                                    for (var i = 0; i < event.cards.length; i++) {
                                        if (get.position(event.cards[i], true) != 'o') {
                                            event.cards.splice(i, 1);
                                            i--;
                                        }
                                    }
                                    if (event.cards.length) {
                                        player.gain(event.cards, 'gain2').gaintag.add('reluoshen');
                                    }
                                    event.finish();
                                }
                                ('step 3');
                                if (result.bool) {
                                    event.goto(1);
                                } else {
                                    event.cards = event.cards.filter((q) => get.position(q, true) == 'o');
                                    if (event.cards.length) {
                                        player.gain(event.cards, 'gain2').gaintag.add('reluoshen');
                                    }
                                }
                            },
                            subSkill: {
                                add: {
                                    mod: {
                                        ignoredHandcard(card, player) {
                                            if (card.hasGaintag('reluoshen')) {
                                                return true;
                                            }
                                        },
                                        cardDiscardable(card, player, name) {
                                            if (name == 'phaseDiscard' && card.hasGaintag('reluoshen')) {
                                                return false;
                                            }
                                        },
                                    },
                                    onremove(player) {
                                        player.removeGaintag('reluoshen');
                                    },
                                },
                            },
                        },
                        倾国: {
                            audio: 'ext:将包/audio:2',
                            enable: ['chooseToRespond', 'chooseToUse'],
                            usable: 5,
                            filterCard: true,
                            position: 'hejs',
                            viewAs: {
                                name: 'shan',
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('hejs')) return false;
                            },
                            prompt: '将一张牌当闪打出',
                            check() {
                                return 1;
                            },
                            ai: {
                                respondShan: true,
                                skillTagFilter(player) {
                                    if (!player.countCards('hejs')) return false;
                                },
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'respondShan') && current < 0) return 0.6;
                                    },
                                },
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
                        突袭: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                player: 'phaseDrawBegin1',
                            },
                            forced: true,
                            filter(event, player) {
                                return !event.numFixed;
                            },
                            content() {
                                'step 0';
                                var check;
                                var i,
                                    num = game.countPlayer(function (current) {
                                        return current != player && current.countCards('hej') && get.attitude(player, current) <= 0;
                                    });
                                check = num >= 2;
                                player
                                    .chooseTarget(
                                        get.prompt('突袭'),
                                        '获得其他任意数量角色的各一张牌',
                                        [1, Infinity],
                                        function (card, player, target) {
                                            return target.countCards('hej') > 0 && player != target;
                                        },
                                        function (target) {
                                            if (!_status.event.aicheck) return 0;
                                            var att = get.attitude(_status.event.player, target);
                                            if (target.hasSkill('tuntian')) return att / 10;
                                            return 1 - att;
                                        }
                                    )
                                    .set('aicheck', check);
                                ('step 1');
                                if (result.bool) {
                                    player.gainMultiple(result.targets);
                                    trigger.changeToZero();
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                            },
                            ai: {
                                threaten: 2,
                                expose: 0.3,
                            },
                        },
                        奇袭: {
                            audio: 'ext:将包/audio:2',
                            enable: 'chooseToUse',
                            usable: 5,
                            filterCard: true,
                            position: 'hes',
                            viewAs: {
                                name: 'guohe',
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('hes')) return false;
                            },
                            prompt: '将一张牌当过河拆桥使用',
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
                                        var nh = target.countCards('hes');
                                        if (att > 0) {
                                            var js = target.getCards('j');
                                            if (js.length) {
                                                var jj = js[0].viewAs ? { name: js[0].viewAs } : js[0];
                                                if (jj.name == 'guohe' || js.length > 1 || get.effect(target, jj, target, player) < 0) {
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
                                        var noe2 =
                                            es.filter(function (esx) {
                                                return get.value(esx, target) > 0;
                                            }).length == 0;
                                        var noh = nh == 0 || target.hasSkillTag('noh');
                                        if (noh && (noe || noe2)) return 0;
                                        if (att <= 0 && !target.countCards('hes')) return 1.5;
                                        return -1.5;
                                    },
                                },
                                tag: {
                                    loseCard: 1,
                                    discard: 1,
                                },
                                yingbian(card, player, targets, viewer) {
                                    if (get.attitude(viewer, player) <= 0) return 0;
                                    if (
                                        game.hasPlayer(function (current) {
                                            return !targets.includes(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
                                        })
                                    )
                                        return 6;
                                    return 0;
                                },
                            },
                            audioname2: {
                                key_shiki: 'shiki_omusubi',
                            },
                        },
                        射却: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                global: ['phaseEnd', 'phaseZhunbeiBegin'],
                            },
                            forced: true,
                            filter(event, player) {
                                var target = event.player;
                                return target != player && !target.storage.nohp && player.countCards('he') > 0 && player.canUse({ name: 'sha', nature: 'ice' }, target, false);
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseCard('he', get.prompt('射却', trigger.player), '将一张牌当做冰【杀】对其使用', function (card, player) {
                                        return player.canUse({ name: 'sha', nature: 'ice' }, _status.event.target, false);
                                    })
                                    .set('target', trigger.player)
                                    .set('ai', function (card) {
                                        if (get.effect(_status.event.target, { name: 'sha', nature: 'ice' }, player) <= 0) return false;
                                        return 6 - get.value(card);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.useCard({ name: 'sha', nature: 'ice' }, result.cards, false, trigger.player, '射却');
                                }
                            },
                            ai: {
                                unequip: true,
                                skillTagFilter(player, tag, arg) {
                                    if (arg && arg.name == 'sha' && arg.card.nature == 'ice') return true;
                                    return false;
                                },
                            },
                        },
                        良缘: {
                            audio: 'ext:将包/audio:2',
                            enable: 'phaseUse',
                            usable: 5,
                            filterCard: true,
                            position: 'he',
                            filter(event, player) {
                                return player.countCards('he') > 0;
                            },
                            check(card) {
                                var player = _status.event.player;
                                if (get.position(card) == 'e') {
                                    var subtype = get.subtype(card);
                                    if (
                                        !game.hasPlayer(function (current) {
                                            return current != player && current.hp != player.hp && get.attitude(player, current) > 0 && !current.countCards('e', { subtype: subtype });
                                        })
                                    ) {
                                        return 0;
                                    }
                                    if (player.countCards('h', { subtype: subtype })) return 20 - get.value(card);
                                    return 10 - get.value(card);
                                } else {
                                    if (player.countCards('e')) return 0;
                                    if (player.countCards('h', { type: 'equip' })) return 0;
                                    return 8 - get.value(card);
                                }
                            },
                            filterTarget(card, player, target) {
                                if (target.sex == 'emm') return false;
                                var card = ui.selected.cards[0];
                                if (!card) return false;
                                if (get.position(card) == 'e' && !target.isEmpty(get.subtype(card))) return false;
                                return true;
                            },
                            discard: false,
                            delay: false,
                            lose: false,
                            content() {
                                'step 0';
                                if (get.position(cards[0]) == 'e') event._result = { index: 0 };
                                else if (get.type(cards[0]) != 'equip' || !target.isEmpty(get.subtype(cards[0]))) event._result = { index: 1 };
                                else
                                    player.chooseControl().set('choiceList', ['将' + get.translation(cards[0]) + '置入' + get.translation(target) + '的装备区', '弃置' + get.translation(cards[0])]).ai = function () {
                                        return 1;
                                    };
                                ('step 1');
                                if (result.index == 0) {
                                    player.$give(cards, target, false);
                                    target.equip(cards[0]);
                                } else {
                                    player.draw();
                                }
                                ('step 2');
                                if (player.hp > target.hp) {
                                    player.draw(4);
                                    if (target.isDamaged()) target.hp = target.maxHp;
                                } else if (player.hp == target.hp) {
                                    target.draw(3);
                                    if (player.isDamaged()) player.recover(2);
                                } else if (player.hp < target.hp) {
                                    target.draw(3);
                                    if (player.isDamaged()) player.recover(2);
                                }
                            },
                            ai: {
                                order() {
                                    var player = _status.event.player;
                                    var es = player.getCards('e');
                                    for (var i = 0; i < es.length; i++) {
                                        if (player.countCards('h', { subtype: get.subtype(es[i]) })) return 10;
                                    }
                                    return 2;
                                },
                                result: {
                                    target(player, target) {
                                        var goon = function () {
                                            var es = player.getCards('e');
                                            for (var i = 0; i < es.length; i++) {
                                                if (player.countCards('h', { subtype: get.subtype(es[i]) })) return true;
                                            }
                                            return false;
                                        };
                                        if (player.hp < target.hp) {
                                            if (player.isHealthy()) {
                                                if (!player.needsToDiscard(1) || goon()) return 0.1;
                                                return 0;
                                            }
                                            return 1.5;
                                        }
                                        if (player.hp > target.hp) {
                                            if (target.isHealthy()) {
                                                if (!player.needsToDiscard(1) || goon()) return 0.1;
                                                return 0;
                                            }
                                            return 1;
                                        }
                                        return 0;
                                    },
                                },
                            },
                            audioname2: {
                                yanghuiyu: 'quanfeng',
                            },
                        },
                        枭姬: {
                            audio: 'ext:将包/audio:2',
                            audioname: ['sp_sunshangxiang', 're_sunshangxiang'],
                            trigger: {
                                player: 'loseAfter',
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                var evt = event.getl(player);
                                return evt && evt.player == player && evt.es && evt.es.length;
                            },
                            content() {
                                'step 0';
                                event.count = trigger.getl(player).es.length;
                                ('step 1');
                                event.count--;
                                player.draw(2) && player.recover();
                                ('step 2');
                                if (event.count > 0) {
                                    player.chooseBool(get.prompt2('xiaoji')).set('frequentSkill', 'xiaoji').ai = lib.filter.all;
                                }
                                ('step 3');
                                if (result.bool) {
                                    event.goto(1);
                                }
                            },
                            ai: {
                                noe: true,
                                reverseEquip: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.type(card) == 'equip' && !get.cardtag(card, 'gifts')) return [1, 3];
                                    },
                                },
                            },
                        },
                        恃才: {
                            audio: 'ext:将包/audio:2',
                            ai: {
                                reverseOrder: true,
                                skillTagFilter(player) {
                                    if (
                                        player.getHistory('useCard', function (evt) {
                                            return get.type(evt.card) != 'equip';
                                        }).length
                                    )
                                        return false;
                                },
                                effect: {
                                    target(card, player, target) {
                                        if (
                                            player == target &&
                                            get.type(card) != 'equip' &&
                                            !player.getHistory('useCard', function (evt) {
                                                return get.type(evt.card) != 'equip';
                                            }).length == 0
                                        )
                                            return [1, 3];
                                    },
                                },
                                threaten: 2.4,
                            },
                            trigger: {
                                player: ['useCardAfter'],
                                target: 'useCardToTargeted',
                            },
                            filter(event, player, name) {
                                if (name == 'useCardToTargeted' && ('equip' != get.type(event.card) || event.player != player)) return false;
                                if (name == 'useCardAfter' && ['equip', 'delay'].includes(get.type(event.card))) return false;
                                if (event.cards.filterInD().length <= 0) return false;
                                var history = player.getHistory('useCard');
                                var evt = name == 'useCardAfter' ? event : event.parent;
                                for (var i = 0; i < history.length; i++) {
                                    if (history[i] != evt && get.type(history[i].card) == get.type(event.card)) return false;
                                    else if (history[i] == evt) return true;
                                }
                                return false;
                            },
                            check(event, player) {
                                if (get.type(event.card) != 'equip') {
                                    if (get.subtype(event.card) != 'equip6') return true;
                                    if (get.equipResult(player, event.target, event.card.name) <= 0) return true;
                                    var eff1 = player.getUseValue(event.card);
                                    var subtype = get.subtype(event.card);
                                    return (
                                        player.countCards('h', function (card) {
                                            return get.subtype(card) == subtype && player.getUseValue(card) >= eff1;
                                        }) > 0
                                    );
                                }
                                return true;
                            },
                            content() {
                                'step 0';
                                event.cards = trigger.cards.filterInD();
                                if (event.cards.length > 1) {
                                    player
                                        .chooseButton(true, event.cards.length, ['按顺序将卡牌置于牌堆顶(先选择的在上)', event.cards])
                                        .set('ai', function (button) {
                                            var value = get.value(button.link);
                                            if (_status.event.reverse) return value;
                                            return -value;
                                        })
                                        .set('reverse', _status.currentPhase && _status.currentPhase.next ? get.attitude(player, _status.currentPhase.next) > 0 : false);
                                }
                                ('step 1');
                                if (result.bool && result.links && result.links.length) cards = result.links.slice(0);
                                while (cards.length) {
                                    var card = cards.pop();
                                    if (get.position(card, true) == 'o') {
                                        card.fix();
                                        ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
                                        game.log(player, '将', card, '置于牌堆顶');
                                    }
                                }
                                game.updateRoundNumber();
                                player.draw(2) && player.recover();
                            },
                        },
                        成略: {
                            mark: true,
                            usable: 5,
                            zhuanhuanji: true,
                            marktext: '成',
                            intro: {
                                content(storage, player, skill) {
                                    var str = player.storage.nzry_chenglve ? '出牌阶段限,你可以摸四张牌,弃置一张手牌.若如此做,直到本回合结束,你使用牌无距离和次数限制' : '出牌阶段限,你可以摸四张牌,弃置一张手牌.若如此做,直到本回合结束,你使用牌无距离和次数限制';
                                    return str;
                                },
                            },
                            enable: 'phaseUse',
                            usable: 5,
                            audio: 'ext:将包/audio:2',
                            content() {
                                'step 0';
                                player.draw(4);
                                player.chooseToDiscard('h', true);
                                ('step 1');
                                player.markSkill('成略');
                                player.addTempSkill('chenglve');
                            },
                            ai: {
                                order: 2.7,
                                result: {
                                    player(player) {
                                        if ((player.storage.nzry_chenglve == undefined || player.storage.nzry_chenglve == false) && player.countCards('h') < 3) return 0;
                                        return 1;
                                    },
                                },
                            },
                        },
                        寸目: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                player: 'drawBegin',
                            },
                            content() {
                                trigger.bottom = true;
                            },
                        },
                        才女: {
                            audio: 'ext:D_将星:2',
                            forced: true,
                            enable: 'phaseUse',
                            usable: 5,
                            filter(event, player) {
                                return player.countCards('h') >= 1;
                            },
                            content() {
                                'step 0';
                                player.chooseToDiscard(1, true);
                                var list = { basic: [], equip: [], trick: [], delay: [] };
                                for (var i = 0; i < lib.inpile.length; i++) {
                                    var name = lib.inpile[i];
                                    var info = lib.card[name];
                                    if (info.autoViewAs || name == 'yuansuhuimie') continue;
                                    if (lib.filter.cardEnabled({ name: name }, player)) {
                                        if (!list[info.type]) {
                                            list[info.type] = [];
                                        }
                                        list[info.type].push([get.translation(lib.card[name].type), '', name]);
                                    }
                                }
                                list.trick.sort(lib.sort.name);
                                var dialog = ui.create.dialog('才女', [list.trick, 'vcard']);
                                // for(var i in list){
                                //     dialog.addText(get.translation(i)+'牌');
                                //     dialog.add([list[i],'vcard']);
                                // }
                                var rand1 = Math.random() < 1 / 3;
                                var rand2 = Math.random() < 0.5;
                                var rand3 = Math.random() < 1 / 3;
                                var rand4 = Math.random() < 1 / 3;
                                player.chooseButton(dialog).ai = function (button) {
                                    var name = button.link[2];
                                    if (player.hp <= 1) {
                                        switch (name) {
                                            case 'zhiliaobo':
                                                return 1;
                                            case 'dunpaigedang':
                                                return 0.8;
                                            case 'nanman':
                                                return 0.5;
                                            default:
                                                return 0;
                                        }
                                    }
                                    if (rand4 && player.countCards('h') <= 1) {
                                        switch (name) {
                                            case 'zengbin':
                                                return 1;
                                            case 'wuzhong':
                                                return 0.8;
                                            default:
                                                return 0;
                                        }
                                    }
                                    if (player.hasSkill('qinglonglingzhu')) {
                                        if (rand2) return name == 'chiyuxi' ? 0.8 : 0;
                                        return name == 'jingleishan' ? 0.8 : 0;
                                    }
                                    if (rand2) return name == 'wanjian' ? 0.8 : 0;
                                    return name == 'nanman' ? 0.8 : 0;
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.chooseUseTarget(result.links[0][2]);
                                }
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        奇姬: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                player: 'phaseDiscardBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.parent.name == 'phaseDiscard' && player.countCards('h', { type: 'emm' }) < player.countCards('h');
                            },
                            content() { },
                            mod: {
                                ignoredHandcard(card, player) {
                                    if (get.type(card) != 'emm') {
                                        return true;
                                    }
                                },
                                cardDiscardable(card, player, name) {
                                    if (name == 'phaseDiscard' && get.type(card) != 'emm') return false;
                                },
                            },
                            targetInRange(card, player, target, now) {
                                var type = get.type(card);
                                if (type == 'trick' || type == 'delay') return true;
                            },
                            wuxieRespondable() {
                                return false;
                            },
                        },
                        集智: {
                            audio: 'ext:将包/audio:2',
                            audioname: ['lukang'],
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.type(event.card, 'trick') == 'trick';
                            },
                            init(player) {
                                player.storage.rejizhi = 0;
                            },
                            content() {
                                'step 0';
                                player.draw();
                            },
                            ai: {
                                threaten: 1.4,
                                noautowuxie: true,
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return num + player.storage.rejizhi;
                                },
                            },
                            intro: {
                                content: '本回合手牌上限+#',
                            },
                            group: 'rejizhi_clear',
                            subSkill: {
                                clear: {
                                    trigger: {
                                        global: 'phaseAfter',
                                    },
                                    silent: true,
                                    content() {
                                        player.storage.rejizhi = 0;
                                        player.unmarkSkill('rejizhi');
                                    },
                                    forced: true,
                                    popup: false,
                                },
                            },
                        },
                        悲歌: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                global: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.card && event.card.name != 'emm' && event.source && event.player.classList.contains('dead') == false && player.countCards('he');
                            },
                            forced: true,
                            checkx(event, player) {
                                var att1 = get.attitude(player, event.player);
                                var att2 = get.attitude(player, event.source);
                                return att1 > 0 && att2 <= 0;
                            },
                            content() {
                                'step 0';
                                var next = player.chooseToDiscard('he', get.prompt2('beige', trigger.player));
                                var check = lib.skill.beige.checkx(trigger, player);
                                next.set('ai', function (card) {
                                    if (_status.event.goon) return 8 - get.value(card);
                                    return 0;
                                });
                                next.set('goon', check);
                                ('step 1');
                                if (result.bool) {
                                    trigger.player.judge();
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                switch (result.suit) {
                                    case 'heart':
                                        trigger.player.recover(trigger.num);
                                        break;
                                    case 'diamond':
                                        trigger.player.draw(3) && trigger.player.recover();
                                        break;
                                    case 'club':
                                        trigger.source.chooseToDiscard('he', 2, true) && trigger.source.damage();
                                        break;
                                    case 'spade':
                                        trigger.source.turnOver();
                                        break;
                                }
                            },
                            ai: {
                                expose: 0.3,
                            },
                        },
                        断肠: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                global: 'damageEnd',
                            },
                            usable: 5,
                            check(event, player) {
                                return get.attitude(player, event[event.name == 'gain' ? 'source' : 'player']) > 0;
                            },
                            logTarget(event) {
                                return event[event.name == 'gain' ? 'source' : 'player'];
                            },
                            content() {
                                'step 0';
                                player.draw(2);
                                player.hp = player.maxHp;
                                trigger.player.draw(2);
                                trigger.player.recover();
                                ('step 1');
                                trigger.source.clearSkills();
                                ('step 2');
                                player.removeSkill('exlishang');
                            },
                            ai: {
                                maixie_defend: true,
                                threaten: 0.9,
                            },
                        },
                        天香: {
                            audio: 'ext:将包/audio:2',
                            audioname: ['daxiaoqiao', 're_xiaoqiao', 'ol_xiaoqiao'],
                            trigger: {
                                player: ['damageBegin3', 'loseHpBefore', 'loseMaxHpBefore'],
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('hes') >= 0 && event.num >= 0;
                            },
                            content() {
                                'step 0';
                                player.draw();
                                player.chooseCardTarget({
                                    filterCard(card, player) {
                                        return lib.filter.cardDiscardable(card, player);
                                    },
                                    filterTarget(card, player, target) {
                                        return player != target;
                                    },
                                    ai1(card) {
                                        return 10 - get.value(card);
                                    },
                                    ai2(target) {
                                        var att = get.attitude(_status.event.player, target);
                                        var trigger = _status.event.getTrigger();
                                        var da = 0;
                                        if (_status.event.player.hp == 1) {
                                            da = 10;
                                        }
                                        if (trigger.num > 1) {
                                            if (target.maxHp > 5 && target.hp > 1) return -att / 10 + da;
                                            return -att + da;
                                        }
                                        var eff = get.damageEffect(target, trigger.source, target, trigger.nature);
                                        if (att == 0) return 0.1 + da;
                                        if (eff >= 0 && trigger.num == 1) {
                                            return att + da;
                                        }
                                        if (target.hp == target.maxHp) return -att + da;
                                        if (target.hp == 1) {
                                            if (target.maxHp <= 4 && !target.hasSkillTag('maixie')) {
                                                if (target.maxHp <= 3) {
                                                    return -att + da;
                                                }
                                                return -att / 2 + da;
                                            }
                                            return da;
                                        }
                                        if (target.hp == target.maxHp - 1) {
                                            if (target.hp > 2 || target.hasSkillTag('maixie')) return att / 5 + da;
                                            if (att > 0) return 0.02 + da;
                                            return 0.05 + da;
                                        }
                                        return att / 2 + da;
                                    },
                                    prompt: get.prompt2('天香'),
                                });
                                ('step 1');
                                if (result.bool) {
                                    trigger.player = result.targets[0];
                                    player.discard(result.cards[0]);
                                }
                            },
                            ai: {
                                maixie_defend: true,
                                effect: {
                                    target(card, player, target) {
                                        if (player.hasSkillTag('jueqing', false, target)) return;
                                        if (get.tag(card, 'damage') && target.countCards('hejs') >= 0) return 0.7;
                                    },
                                },
                                threaten(player, target) {
                                    if (target.countCards('h') == 0) return 2;
                                },
                            },
                        },
                        激昂: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                global: ['useCard'],
                            },
                            filter(event, player) {
                                if (!(event.card.name != 'emm' || (event.card.name != 'emm' && get.color(event.card) != 'emm') || (event.card.name != 'emm' && get.color(event.card) != 'emm'))) return false;
                                return player == event.player || event.targets.includes(player);
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
                            audioname2: {
                                key_shiki: '御结',
                            },
                        },
                        制霸: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                global: 'phaseDrawBegin',
                            },
                            filter(event, player) {
                                return event.player.isAlive() && event.player != player && player.countCards('h', { type: 'basic' });
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var nono = Math.abs(get.attitude(player, trigger.player)) < 3;
                                if (get.damageEffect(trigger.player, player, player) <= 0) {
                                    nono = true;
                                }
                                var next = player.chooseToDiscard(1, '弃置一张牌并令' + get.translation(player) + '丢弃一张牌', get.prompt('zhiba', trigger.player));
                                next.set('ai', function (card) {
                                    if (_status.event.nono) return 0;
                                    return 8 - get.useful(card);
                                });
                                next.set('nono', nono);
                                ('step 1');
                                if (result.bool) {
                                    var nono = get.damageEffect(trigger.player, player, trigger.player) >= 0;
                                    trigger.player
                                        .chooseToDiscard(1, 'he', true)
                                        .set('ai', function (card) {
                                            if (_status.event.nono) {
                                                return 0;
                                            }
                                            if (_status.event.player.hp == 1) return 10 - get.value(card);
                                            return 9 - get.value(card);
                                        })
                                        .set('nono', nono);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.draw() && player.recover();
                                    var list = ['sha', 'shan', 'tao', 'jiu'];
                                    player.gain(game.createCard(list.randomGet()));
                                    player.$draw();
                                } else {
                                    trigger.player.chooseToDiscard(1, 'he', true);
                                    player.draw(2) && player.recover();
                                    var list = ['sha', 'shan', 'tao', 'jiu'];
                                    player.gain(game.createCard(list.randomGet()));
                                    player.$draw();
                                }
                            },
                            ai: {
                                expose: 0.3,
                                threaten: 1.3,
                            },
                            audioname2: {
                                key_shiki: '御结',
                            },
                        },
                        英魂: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                player: 'die',
                            },
                            forceDie: true,
                            forced: true,
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            selectTarget: -1,
                            multitarget: true,
                            multiline: true,
                            content() {
                                'step 0';
                                ui.backgroundMusic.src = 'extension/神王包/swyqnyh.mp3';
                                event.current = player.next;
                                event.currented = [];
                                ('step 1');
                                event.currented.push(event.current);
                                event.current.addTempClass('target');
                                event.current.chooseToUse('你想不想成为江东小白版？如果想请选择【取消】如果不想请解析哥德巴赫猜想', { name: 'shagechuizinisha' }, function (card, player, target) {
                                    if (player == target) return false;
                                    if (!player.canUse('shagechuizinisha', target)) return false;
                                    if (get.distance(player, target) <= 1) return true;
                                    if (
                                        game.hasPlayer(function (current) {
                                            return current != player && get.distance(player, current) < get.distance(player, target);
                                        })
                                    ) {
                                        return false;
                                    }
                                    return true;
                                });
                                ('step 2');
                                if (result.bool == false) event.current.init('sunce');
                                event.current = event.current.next;
                                if (event.current != player && !event.currented.includes(event.current)) {
                                    event.goto(1);
                                }
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
                                        if (player.hp == 1) {
                                            return -num;
                                        }
                                        if (player.hp == 2) {
                                            return -game.players.length / 4 - num;
                                        }
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
                            audioname2: {
                                key_shiki: '御结',
                            },
                        },
                        D_shenfen: {
                            audio: 'ext:将包/audio:1',
                            enable: 'phaseUse',
                            usable: 5,
                            content() {
                                'step 0';
                                player.storage.baonu -= 0;
                                event.targets = game.filterPlayer();
                                event.targets.remove(player);
                                event.targets.sort(lib.sort.seat);
                                player.line(event.targets, 'green');
                                event.targets2 = event.targets.slice(0);
                                ('step 1');
                                if (event.targets2.length) {
                                    event.targets2.shift().damage(5, 'nocard');
                                    event.redo();
                                }
                                ('step 2');
                                if (event.targets.length) {
                                    event.current = event.targets.shift();
                                    event.current.discard(event.current.getCards('e')).delay = false;
                                }
                                ('step 3');
                                event.current.chooseToDiscard('h', true, 999).delay = false;
                                ('step 4');
                                if (event.targets.length) event.goto(2);
                            },
                            ai: {
                                combo: 'baonu',
                                order: 10,
                                result: {
                                    player(player) {
                                        return game.countPlayer(function (current) {
                                            if (current != player) {
                                                return get.sgn(get.damageEffect(current, player, player));
                                            }
                                        });
                                    },
                                },
                            },
                        },
                        御结: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                source: 'damageSource',
                                player: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt2('御结'), lib.filter.notMe).set('ai', function (target) {
                                    var player = _status.event.player;
                                    if (player.isHealthy()) return 0;
                                    if (player.hp < 3 && player.getDraw(2) >= 2) return 0;
                                    var list = [];
                                    if (lib.character[target.name]) list.addArray(lib.character[target.name][3]);
                                    if (lib.character[target.name1]) list.addArray(lib.character[target.name1][3]);
                                    if (lib.character[target.name2]) list.addArray(lib.character[target.name2][3]);
                                    list = list.filter(function (i) {
                                        return !player.hasSkill(i);
                                    });
                                    if (!list.length) return 0;
                                    return 1 + Math.random();
                                });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.draw();
                                    player.recover();
                                    var list = [];
                                    if (lib.character[target.name]) list.addArray(lib.character[target.name][3]);
                                    if (lib.character[target.name1]) list.addArray(lib.character[target.name1][3]);
                                    if (lib.character[target.name2]) list.addArray(lib.character[target.name2][3]);
                                    player.addSkill(list);
                                    target.removeSkill(list);
                                }
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
                                                if (jj.name == 'guohe' || js.length > 1 || get.effect(target, jj, target, player) < 0) {
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
                                        var noe2 =
                                            es.filter(function (esx) {
                                                return get.value(esx, target) > 0;
                                            }).length == 0;
                                        var noh = nh == 0 || target.hasSkillTag('noh');
                                        if (noh && (noe || noe2)) return 0;
                                        if (att <= 0 && !target.countCards('he')) return 1.5;
                                        return -1.5;
                                    },
                                },
                                tag: {
                                    loseCard: 1,
                                    discard: 1,
                                },
                                yingbian(card, player, targets, viewer) {
                                    if (get.attitude(viewer, player) <= 0) return 0;
                                    if (
                                        game.hasPlayer(function (current) {
                                            return !targets.includes(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
                                        })
                                    )
                                        return 6;
                                    return 0;
                                },
                            },
                        },
                        制衡: {
                            audio: 'ext:将包/audio:2',
                            audioname: ['shen_caopi'],
                            enable: 'phaseUse',
                            usable: 5,
                            position: 'he',
                            filterCard(card, player, event) {
                                event = event || _status.event;
                                if (typeof event != 'string') event = event.parent.name;
                                var mod = game.checkMod(card, player, event, 'unchanged', 'cardDiscardable', player);
                                if (mod != 'unchanged') return mod;
                                return true;
                            },
                            discard: false,
                            lose: false,
                            delay: false,
                            selectCard: [1, Infinity],
                            check(card) {
                                var player = _status.event.player;
                                if (
                                    get.position(card) == 'h' &&
                                    !player.countCards('h', 'du') &&
                                    (player.hp > 2 ||
                                        !player.countCards('h', function (card) {
                                            return get.value(card) >= 8;
                                        }))
                                ) {
                                    return 1;
                                }
                                return 6 - get.value(card);
                            },
                            content() {
                                'step 0';
                                player.discard(cards);
                                event.num = 1;
                                var hs = player.getCards('h');
                                if (!hs.length) event.num = 0;
                                for (var i = 0; i < hs.length; i++) {
                                    if (!cards.includes(hs[i])) {
                                        event.num = 0;
                                        break;
                                    }
                                }
                                ('step 1');
                                player.draw(event.num + cards.length);
                            },
                            subSkill: {
                                draw: {
                                    trigger: {
                                        player: 'loseEnd',
                                    },
                                    silent: true,
                                    filter(event, player) {
                                        if (event.getParent(2).skill != 'rezhiheng' && event.getParent(2).skill != 'jilue_zhiheng') return false;
                                        if (player.countCards('h')) return false;
                                        for (var i of event.cards) {
                                            if (i.original == 'h') return true;
                                        }
                                        return false;
                                    },
                                    content() {
                                        player.addTempSkill('rezhiheng_delay', trigger.getParent(2).skill + 'After');
                                    },
                                    forced: true,
                                    popup: false,
                                },
                                delay: {},
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player: 1,
                                },
                                threaten: 1.55,
                            },
                        },
                        射虎: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                global: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(function (card, player, target) {
                                        return target;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.bool && result.targets && result.targets.length) {
                                    var num = [1, 1, 1, 1, 1, 1, 1, 1, 1, 3].randomGet();
                                    player.line(result.targets[0], 'green');
                                    result.targets[0].chooseToDiscard(999, 'e', true);
                                }
                            },
                        },
                        雄据: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                player: 'loseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                for (var i of event.cards) {
                                    if (i.original == 'e') return true;
                                }
                                return false;
                            },
                            forced: true,
                            content() {
                                game.countPlayer(function (current) {
                                    if (current != player && current.group == 'wu') {
                                        current.draw(1);
                                        player.draw(num == current.draw);
                                    }
                                });
                            },
                        },
                        求贤: {
                            audio: 'ext:将包:2',
                            trigger: {
                                player: 'recoverEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('exqiuxian'), function (card, player, target) {
                                        return target;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        return get.recoverEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.bool && result.targets && result.targets.length) {
                                    var num = [2, 3, 2, 6, 5, 4, 2, 7, 2, 9].randomGet();
                                    player.line(result.targets[0], 'green');
                                    result.targets[0].draw(2);
                                }
                            },
                        },
                        昭烈: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                player: 'phaseDrawBefore',
                            },
                            forced: true,
                            content() {
                                game.countPlayer(function (current) {
                                    if (current != player && current.group == 'shu') {
                                        current.draw(1);
                                        player.draw(num == current.draw);
                                    }
                                });
                            },
                        },
                        连战: {
                            audio: 'ext:将包/audio:1',
                            trigger: {
                                player: ['useCardBegin', 'respondBegin'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                player.draw();
                            },
                        },
                        汉帝: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                player: 'enterGame',
                                global: 'gameStart',
                            },
                            forced: true,
                            content() {
                                player.equip(game.createCard('dilu', 'club', 5));
                                player.equip(game.createCard('renwang', 'club', 2));
                                player.equip(game.createCard('cixiong', 'spade', 2));
                                player.equip(game.createCard('tongque'));
                                player.equip(game.createCard('dawan'));
                            },
                        },
                        号将: {
                            audio: 'ext:将包/audio:1',
                            enable: 'phaseUse',
                            usable: 5,
                            filterTarget(card, player, target) {
                                if (player == target) return false;
                                return target.countGainableCards(player, get.is.single() ? 'he' : 'hej') > 0;
                            },
                            content() {
                                var hs = target.getCards('hes');
                                player.gain(hs, target);
                                target.$giveAuto(hs, player);
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
                                                if (jj.name == 'guohe' || js.length > 1 || get.effect(target, jj, target, player) < 0) {
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
                                        var noe2 =
                                            es.filter(function (esx) {
                                                return get.value(esx, target) > 0;
                                            }).length == 0;
                                        var noh = nh == 0 || target.hasSkillTag('noh');
                                        if (noh && (noe || noe2)) return 0;
                                        if (att <= 0 && !target.countCards('he')) return 1.5;
                                        return -1.5;
                                    },
                                },
                                tag: {
                                    loseCard: 1,
                                    discard: 1,
                                },
                                yingbian(card, player, targets, viewer) {
                                    if (get.attitude(viewer, player) <= 0) return 0;
                                    if (
                                        game.hasPlayer(function (current) {
                                            return !targets.includes(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
                                        })
                                    )
                                        return 6;
                                    return 0;
                                },
                            },
                        },
                        择婿: {
                            audio: 'ext:将包:2',
                            enable: 'phaseUse',
                            usable: 5,
                            filter(event, player) {
                                return player.countCards('h', { type: 'equip' }) > 0;
                            },
                            filterCard(card) {
                                return get.type(card) == 'equip';
                            },
                            check(card) {
                                var player = _status.currentPhase;
                                if (player.countCards('he', { subtype: get.subtype(card) }) > 1) {
                                    return 11 - get.equipValue(card);
                                }
                                return 6 - get.value(card);
                            },
                            filterTarget(card, player, target) {
                                if (target.isMin()) return true;
                                var type = get.subtype(card);
                                return player != target;
                            },
                            content() {
                                target.equip(cards[0]);
                                target.recover(1);
                                player.draw(1);
                            },
                            discard: false,
                            prepare(cards, player, targets) {
                                player.$give(cards, targets[0], false);
                            },
                        },
                        偃甲: {
                            audio: 'ext:将包:2',
                            enable: 'phaseUse',
                            usable: 5,
                            filter(event, player) {
                                var he = player.getCards('he');
                                var num = 0;
                                for (var i = 0; i < he.length; i++) {
                                    var info = lib.card[he[i].name];
                                    if (info.type == 'equip' && !info.nomod && !info.unique && lib.inpile.includes(he[i].name)) {
                                        num++;
                                        if (num >= 2) return true;
                                    }
                                }
                            },
                            filterCard(card) {
                                if (ui.selected.cards.length && card.name == ui.selected.cards[0].name) return false;
                                var info = get.info(card);
                                return info.type == 'equip' && !info.nomod && !info.unique && lib.inpile.includes(card.name);
                            },
                            selectCard: 2,
                            position: 'he',
                            check(card) {
                                return get.value(card);
                            },
                            content() {
                                var name = cards[0].name + '_' + cards[1].name;
                                var info1 = get.info(cards[0]),
                                    info2 = get.info(cards[1]);
                                if (!lib.card[name]) {
                                    var info = {
                                        enable: true,
                                        type: 'equip',
                                        subtype: get.subtype(cards[0]),
                                        cardimage: info1.cardimage || cards[0].name,
                                        filterTarget(card, player, target) {
                                            return target == player;
                                        },
                                        selectTarget: -1,
                                        modTarget: true,
                                        content: lib.element.content.equipCard,
                                        legend: true,
                                        source: [cards[0].name, cards[1].name],
                                        onEquip: [],
                                        onLose: [],
                                        skills: [],
                                        distance: {},
                                        ai: {
                                            order: 8.9,
                                            equipValue: 10,
                                            useful: 2.5,
                                            value: 1,
                                            result: {
                                                target(player, target) {
                                                    return get.equipResult(player, target, name);
                                                },
                                            },
                                        },
                                    };
                                    for (var i in info1.distance) {
                                        info.distance[i] = info1.distance[i];
                                    }
                                    for (var i in info2.distance) {
                                        if (typeof info.distance[i] == 'number') {
                                            info.distance[i] += info2.distance[i];
                                        } else {
                                            info.distance[i] = info2.distance[i];
                                        }
                                    }
                                    if (info1.skills) {
                                        info.skills = info.skills.concat(info1.skills);
                                    }
                                    if (info2.skills) {
                                        info.skills = info.skills.concat(info2.skills);
                                    }
                                    if (info1.onEquip) {
                                        if (Array.isArray(info1.onEquip)) {
                                            info.onEquip = info.onEquip.concat(info1.onEquip);
                                        } else {
                                            info.onEquip.push(info1.onEquip);
                                        }
                                    }
                                    if (info2.onEquip) {
                                        if (Array.isArray(info2.onEquip)) {
                                            info.onEquip = info.onEquip.concat(info2.onEquip);
                                        } else {
                                            info.onEquip.push(info2.onEquip);
                                        }
                                    }
                                    if (info1.onLose) {
                                        if (Array.isArray(info1.onLose)) {
                                            info.onLose = info.onLose.concat(info1.onLose);
                                        } else {
                                            info.onLose.push(info1.onLose);
                                        }
                                    }
                                    if (info2.onLose) {
                                        if (Array.isArray(info2.onLose)) {
                                            info.onLose = info.onLose.concat(info2.onLose);
                                        } else {
                                            info.onLose.push(info2.onLose);
                                        }
                                    }
                                    if (info.onEquip.length == 0) delete info.onEquip;
                                    if (info.onLose.length == 0) delete info.onLose;
                                    lib.card[name] = info;
                                    lib.translate[name] = get.translation(cards[0].name, 'skill') + get.translation(cards[1].name, 'skill');
                                    var str = lib.translate[cards[0].name + '_info'];
                                    if (str[str.length - 1] == '.' || str[str.length - 1] == '.') {
                                        str = str.slice(0, str.length - 1);
                                    }
                                    lib.translate[name + '_info'] = str + ';' + lib.translate[cards[1].name + '_info'];
                                    try {
                                        game.addVideo('newcard', null, {
                                            name: name,
                                            translate: lib.translate[name],
                                            info: lib.translate[name + '_info'],
                                            card: cards[0].name,
                                            legend: true,
                                        });
                                    } catch (e) { }
                                }
                                player.gain(game.createCard({ name: name, suit: cards[0].suit, number: cards[0].number }), 'gain2');
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        休养: {
                            audio: 'ext:将包:1',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filter(event, player) {
                                return player.hp != player.maxHp;
                            },
                            content() {
                                'step 0';
                                player.gainMaxHp();
                                var num = player.maxHp;
                                player.recover(num);
                            },
                        },
                        傲才: {
                            audio: 'ext:将包/audio:2',
                            enable: ['chooseToUse', 'chooseToRespond'],
                            hiddenCard(player, name) {
                                if (get.type(name) == 'basic' && lib.inpile.includes(name)) return true;
                            },
                            filter(event, player) {
                                if (event.responded || player == _status.currentPhase || event.aocai) return false;
                                for (var i of lib.inpile) {
                                    if (get.type(i) == 'basic' && event.filterCard({ name: i }, player, event)) return true;
                                }
                                return false;
                            },
                            delay: false,
                            content() {
                                'step 0';
                                var evt = event.getParent(2);
                                evt.set('aocai', true);
                                var cards = get.cards(player.countCards('h') == 0 ? 150 : 150);
                                for (var i = cards.length - 1; i >= 0; i--) {
                                    ui.cardPile.insertBefore(cards[i].fix(), ui.cardPile.firstChild);
                                }
                                player
                                    .chooseButton(['傲才:选择要' + (evt.name == 'chooseToUse' ? '使用' : '打出') + '的牌', cards])
                                    .set('filterButton', function (button) {
                                        return _status.event.cards.includes(button.link);
                                    })
                                    .set(
                                        'cards',
                                        cards.filter(function (card) {
                                            return evt.filterCard(card, evt.player, evt);
                                        })
                                    )
                                    .set('ai', function (button) {
                                        var evt = _status.event.getParent(3);
                                        if (evt && evt.ai) {
                                            var tmp = _status.event;
                                            _status.event = evt;
                                            var result = (evt.ai || event.ai1)(button.link, _status.event.player, evt);
                                            _status.event = tmp;
                                            return result;
                                        }
                                        return 1;
                                    });
                                ('step 1');
                                var evt = event.getParent(2);
                                if (result.bool && result.links && result.links.length) {
                                    if (evt.name == 'chooseToUse') {
                                        game.broadcastAll(function (result) {
                                            lib.skill.aocai_backup.viewAs = { name: result.name, cards: [result] };
                                            lib.skill.aocai_backup.prompt = '选择' + get.translation(result) + '的目标';
                                        }, result.links[0]);
                                        evt.set('_backupevent', 'aocai_backup');
                                        evt.backup('aocai_backup');
                                    } else {
                                        evt.result.card = result.links[0];
                                        evt.result.cards = [result.links[0]];
                                        evt.redo();
                                        return;
                                    }
                                }
                                evt.goto(0);
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, effect) {
                                        if (get.tag(card, 'respondShan')) return 0.7;
                                        if (get.tag(card, 'respondSha')) return 0.7;
                                    },
                                },
                                order: 11,
                                respondShan: true,
                                respondSha: true,
                                result: {
                                    player(player) {
                                        if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                        return 1;
                                    },
                                },
                            },
                        },
                        黩武: {
                            audio: 'ext:将包/audio:2',
                            enable: 'phaseUse',
                            usable: 5,
                            usable: 10,
                            filter(event, player) {
                                return (
                                    player.hasSkill('duwu2') == false &&
                                    game.hasPlayer(function (current) {
                                        return current.hp > 0 && current.hp <= player.countCards('he') && player.inRange(current);
                                    })
                                );
                            },
                            filterCard() {
                                if (ui.selected.targets.length) return false;
                                return true;
                            },
                            position: 'he',
                            selectCard: 0,
                            complexSelect: true,
                            complexCard: true,
                            filterTarget(card, player, target) {
                                return target != player && target.hp > 0 && player.inRange(target) && ui.selected.cards.length != target.hp;
                            },
                            check(card) {
                                var player = _status.event.player;
                                if (
                                    game.hasPlayer(function (current) {
                                        return current != player && current.hp > 0 && player.inRange(current) && ui.selected.cards.length == current.hp && get.damageEffect(2) == 0;
                                    })
                                )
                                    return 0;
                                switch (ui.selected.cards.length) {
                                    case 0:
                                        return 8 - get.value(card);
                                    case 1:
                                        return 6 - get.value(card);
                                    case 2:
                                        return 3 - get.value(card);
                                    default:
                                        return 0;
                                }
                            },
                            content() {
                                player.addTempSkill('duwu3');
                                target.damage(3, 'fire');
                            },
                            ai: {
                                damage: true,
                                order: 2,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                                threaten: 1.5,
                                expose: 0.3,
                            },
                        },
                        花好: {
                            group: 'qita_hhyy_1',
                            trigger: {
                                target: 'useCardToBegin',
                            },
                            _priority: -1,
                            forced: true,
                            filter(event, player) {
                                return get.color(event.card) != 'emm' && player.isDamaged();
                            },
                            forced: true,
                            content() {
                                player.recover();
                                player.draw();
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.color(card) != 'emm' && target.isDamaged()) return [1, 1];
                                    },
                                },
                            },
                        },
                        伺盗: {
                            trigger: {
                                global: 'phaseEnd',
                            },
                            audio: 'ext:将包/audio:2',
                            filter(event, player) {
                                return event.player != player && event.player.isAlive();
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                var hs = trigger.player.getCards('he');
                                if (hs.length) {
                                    player.gain(hs.randomGet(), trigger.player);
                                    trigger.player.$give(1, player);
                                }
                                if (!result.bool) {
                                    trigger.player.damage(2, 'thunder');
                                }
                            },
                        },
                        贪婪: {
                            mod: {
                                targetInRange(card, player, target) {
                                    if (target.hasSkill('tanbei_effect1')) {
                                        return true;
                                    }
                                },
                                cardUsable(card, player, num) {
                                    if (
                                        typeof num == 'number' &&
                                        game.hasPlayer(function (current) {
                                            return current.hasSkill('tanbei_effect1');
                                        })
                                    )
                                        return num + 100;
                                },
                                playerEnabled(card, player, target) {
                                    if (target.hasSkill('tanbei_effect2')) return false;
                                    if (
                                        game.hasPlayer(function (current) {
                                            return current.hasSkill('tanbei_effect1');
                                        }) &&
                                        !target.hasSkill('tanbei_effect1')
                                    ) {
                                        var num = player.getCardUsable(card) - 100;
                                        if (num <= 0) return false;
                                    }
                                },
                            },
                            audio: 'ext:将包/audio:2',
                            enable: 'phaseUse',
                            usable: 5,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            content() {
                                'step 0';
                                if (result.index == 0) {
                                    var card = target.getCards('hej').randomGet();
                                    player.gain(card, target, 'giveAuto', 'bySelf');
                                    target.addTempSkill('tanbei_effect2', 'phaseAfter');
                                } else {
                                    target.addTempSkill('tanbei_effect1', 'phaseAfter');
                                }
                            },
                            ai: {
                                order() {
                                    return [2, 4, 6, 8, 10].randomGet();
                                },
                                result: {
                                    target(player, target) {
                                        return -2 - target.countCards('h');
                                    },
                                },
                                threaten: 1.1,
                            },
                        },
                        利熏: {
                            audio: 'ext:将包/audio:2',
                            forced: true,
                            trigger: {
                                player: 'damageBegin4',
                            },
                            marktext: '珠',
                            intro: {
                                name2: '珠',
                                content: '共有#个<珠>',
                            },
                            content() {
                                trigger.cancel();
                            },
                            group: 'lslixun_fate',
                        },
                        崩坏: {
                            audio: 'ext:将包/audio:2',
                            audioname: ['zhugedan', 're_dongzhuo', 'ol_dongzhuo'],
                            trigger: {
                                global: 'phaseJieshuBegin',
                            },
                            forced: true,
                            check() {
                                return false;
                            },
                            filter(event, player) {
                                return !player.isMinHp() && !player.hasSkill('rejiuchi_air') && !player.hasSkill('oljiuchi_air');
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseControl('baonue_hp', 'baonue_maxHp', function (event, player) {
                                        if (player.hp == player.maxHp) return 'baonue_hp';
                                        if (player.hp < player.maxHp + 1 || player.hp <= 2) return 'baonue_maxHp';
                                        return 'baonue_hp';
                                    })
                                    .set('prompt', '崩坏:回复1点体力或加1点体力上限');
                                ('step 1');
                                if (result.control == 'baonue_hp') {
                                    player.recover();
                                } else {
                                    player.gainMaxHp();
                                }
                            },
                            ai: {
                                threaten: 0.5,
                                neg: true,
                            },
                        },
                        幻崩: {
                            audio: 'ext:将包:1',
                            trigger: {
                                player: 'damageEnd',
                                source: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                player.chooseToDiscard('hej', 1, true);
                                player.draw(2);
                            },
                        },
                        琴音: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                player: 'phaseDiscardEnd',
                            },
                            forced: true, //QQQ
                            content() {
                                'step 0';
                                event.forceDie = true;
                                if (typeof event.count != 'number') {
                                    // event.count=trigger.cards.length-1;
                                    event.count = 1;
                                }
                                var recover = 0,
                                    lose = 0,
                                    players = game.filterPlayer();
                                for (var i = 0; i < players.length; i++) {
                                    if (players[i].hp < players[i].maxHp) {
                                        if (get.attitude(player, players[i]) > 0) {
                                            if (players[i].hp < 2) {
                                                lose--;
                                                recover += 0.5;
                                            }
                                            lose--;
                                            recover++;
                                        } else if (get.attitude(player, players[i]) < 0) {
                                            if (players[i].hp < 2) {
                                                lose++;
                                                recover -= 0.5;
                                            }
                                            lose++;
                                            recover--;
                                        }
                                    } else {
                                        if (get.attitude(player, players[i]) > 0) {
                                            lose--;
                                        } else if (get.attitude(player, players[i]) < 0) {
                                            lose++;
                                        }
                                    }
                                }
                                var prompt = get.prompt('qinyin') + '(剩余' + get.cnNumber(event.count) + '次)';
                                player.chooseControl('失去体力', '回复体力', 'cancel2', ui.create.dialog(get.prompt('qinyin'), 'hidden')).ai = function () {
                                    if (lose > recover && lose > 0) return 0;
                                    if (lose < recover && recover > 0) return 1;
                                    return 2;
                                };
                                ('step 1');
                                if (result.control == 'cancel2') {
                                    event.finish();
                                } else {
                                    event.bool = result.control == '回复体力';
                                    event.num = 0;
                                    event.players = game.filterPlayer();
                                }
                                ('step 2');
                                if (event.num < event.players.length) {
                                    var target = event.players[event.num];
                                    if (event.bool) {
                                        target.hp = target.maxHp; //QQQ
                                    } else {
                                        target.loseHp(Infinity);
                                    }
                                    event.num++;
                                    event.redo();
                                }
                                ('step 3');
                                if (event.count > 1) {
                                    event.count--;
                                    event.goto(0);
                                }
                            },
                            ai: {
                                expose: 0.1,
                                threaten: 2,
                            },
                        },
                        定权: {
                            audio: 'ext:将包:1',
                            enable: 'phaseUse',
                            usable: 5,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            filter(event, player) {
                                return player.countCards('h') >= 0;
                            },
                            filterCard: true,
                            selectCard: 0,
                            discard: false,
                            lose: true,
                            content() {
                                'step 0';
                                player.$give(cards.length, target);
                                target.gain(cards, player);
                                ('step 1');
                                player.chooseControl('目标摸牌并获得【谋溃】至其回合结束', '目标弃牌并获得【崩坏】至其回合结束');
                                ('step 2');
                                if (result.control == '目标摸牌并获得【谋溃】至其回合结束') {
                                    var num = target.maxHp - target.hp;
                                    target.draw(num);
                                    target.addTempSkill('moukui', { player: 'phaseAfter' });
                                } else {
                                    var num = target.hp;
                                    target.chooseToDiscard('he', true, num);
                                    target.addTempSkill('benghuai', { player: 'phaseAfter' });
                                }
                                ('step 3');
                                if (game.roundNumber == 10) {
                                    player.addSkill('mizhao');
                                }
                            },
                        },
                        衰危: {
                            audio: 'ext:将包:1',
                            forced: true,
                            trigger: {
                                player: 'phaseBefore',
                            },
                            filter(event, player) {
                                return game.roundNumber < 999;
                            },
                            content() {
                                if (game.roundNumber == 5) {
                                    var list = ['shandian'];
                                    player.gain(game.createCard(list.randomGet()));
                                    player.$draw();
                                }
                                if (game.roundNumber == 10) {
                                    var list = ['shandian'];
                                    player.gain(game.createCard(list.randomGet()));
                                    player.$draw();
                                }
                                if (game.roundNumber == 15) {
                                    player.die();
                                }
                            },
                        },
                        安恤: {
                            enable: 'phaseUse',
                            usable: 5,
                            multitarget: true,
                            audio: 'ext:将包/audio:2',
                            filterTarget(card, player, target) {
                                if (player == target) return false;
                                var num = target.countCards('h');
                                if (ui.selected.targets.length) {
                                    return num < ui.selected.targets[0].countCards('h');
                                }
                                var players = game.filterPlayer();
                                for (var i = 0; i < players.length; i++) {
                                    if (num > players[i].countCards('h')) return true;
                                }
                                return false;
                            },
                            selectTarget: 2,
                            content() {
                                'step 0';
                                var gainner, giver;
                                if (targets[0].countCards('h') < targets[1].countCards('h')) {
                                    gainner = targets[0];
                                    giver = targets[1];
                                } else {
                                    gainner = targets[1];
                                    giver = targets[0];
                                }
                                giver.chooseCard('选择一张手牌交给' + get.translation(gainner), true);
                                event.gainner = gainner;
                                event.giver = giver;
                                ('step 1');
                                var card = result.cards[0];
                                event.gainner.gain(card, event.giver, 'giveAuto');
                                ('step 2');
                                if (event.gainner.countCards('h') != event.giver.countCards('h')) {
                                    player.chooseDrawRecover(true);
                                }
                            },
                            ai: {
                                order: 10.5,
                                threaten: 1.6,
                                result: {
                                    target(player, target) {
                                        var num = target.countCards('h');
                                        var att = get.attitude(player, target);
                                        if (ui.selected.targets.length == 0) {
                                            if (att > 0) return -1;
                                            var players = game.filterPlayer();
                                            for (var i = 0; i < players.length; i++) {
                                                var num2 = players[i].countCards('h');
                                                var att2 = get.attitude(player, players[i]);
                                                if (att2 >= 0 && num2 < num) return -1;
                                            }
                                            return 0;
                                        } else {
                                            return 1;
                                        }
                                    },
                                    player: 0.1,
                                },
                            },
                        },
                        追忆: {
                            audio: 'ext:将包/audio:2',
                            usable: 5,
                            audioname: ['re_bulianshi'],
                            trigger: {
                                global: 'damageEnd',
                            },
                            forced: true,
                            forceDie: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('zhuiyi'), function (card, player, target) {
                                        return (player == _status.event.sourcex) != target;
                                    })
                                    .set('forceDie', true)
                                    .set('ai', function (target) {
                                        var num = get.attitude(_status.event.player, target);
                                        if (num > 0) {
                                            if (target.hp == 1) {
                                                num += 2;
                                            }
                                            if (target.hp < target.maxHp) {
                                                num += 2;
                                            }
                                        }
                                        return num;
                                    })
                                    .set('sourcex', trigger.source);
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.line(target, 'green');
                                    target.hp = target.maxHp;
                                    target.draw(3);
                                }
                            },
                            ai: {
                                expose: 0.5,
                            },
                        },
                        放权: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                player: 'phaseDiscardBefore',
                            },
                            filter(event, player) {
                                return player.countCards('h') >= 0 && !player.hasSkill('fangquan3');
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var fang = player.countMark('fangquan2') == 0 && player.hp >= 2 && player.countCards('h') <= player.hp + 1;
                                player
                                    .chooseBool(get.prompt2('放权'))
                                    .set('ai', function () {
                                        if (!_status.event.fang) return false;
                                        return game.hasPlayer(function (target) {
                                            if (target.hasJudge('lebu') || target == player) return false;
                                            if (get.attitude(player, target) > 4) {
                                                return get.threaten(target) / Math.sqrt(target.hp + 1) / Math.sqrt(target.countCards('h') + 1) > 0;
                                            }
                                            return false;
                                        });
                                    })
                                    .set('fang', fang);
                                ('step 1');
                                if (result.bool) {
                                    trigger.cancel();
                                    player.addTempSkill('fangquan2');
                                    player.addMark('fangquan2', 2, false);
                                    player.draw(4);
                                    player.hp = player.maxHp;
                                    //player.storage.fangquan=result.targets[0];
                                }
                            },
                        },
                        享乐: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            forced: true,
                            filter(event, player) {
                                return (get.type(event.card) == 'basic' || get.type(event.card) == 'trick') && get.tag(event.card, 'damage');
                            },
                            content() {
                                'step 0';
                                var eff = get.effect(player, trigger.card, trigger.player, trigger.player);
                                trigger.player
                                    .chooseToDiscard('享乐:弃置一张基本牌,否则对' + get.translation(player) + '无效', function (card) {
                                        return get.type(card) == 'basic';
                                    })
                                    .set('ai', function (card) {
                                        if (_status.event.eff > 0) {
                                            return 10 - get.value(card);
                                        }
                                        return 0;
                                    })
                                    .set('eff', eff);
                                ('step 1');
                                if (result.bool == false) {
                                    trigger.parent.excluded.add(player);
                                }
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (card.name != 'emm' && get.attitude(player, target) < 0) {
                                            if (_status.event.name == 'xiangle') return;
                                            var bs = player.getCards('h', { type: 'basic' });
                                            if (bs.length < 2) return 0;
                                            if (player.hasSkill('jiu') || player.hasSkill('tianxianjiu')) return;
                                            if (bs.length <= 3 && player.countCards('h', 'sha') <= 1) {
                                                for (var i = 0; i < bs.length; i++) {
                                                    if (bs[i].name != 'sha' && get.value(bs[i]) < 7) {
                                                        return [1, 0, 1, -0.5];
                                                    }
                                                }
                                                return 0;
                                            }
                                            return [1, 0, 1, -0.5];
                                        }
                                    },
                                },
                            },
                        },
                        魏文: {
                            audio: 'ext:将包:1',
                            trigger: {
                                global: ['turnOverAfter'],
                            },
                            filter(event, player) {
                                if (event.name == 'link') return event.player.isLinked();
                                return !event.player.isTurnedOver();
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) > 0;
                            },
                            forced: true,
                            logTarget: 'player',
                            content() {
                                player.draw(2) && player.recover();
                            },
                            ai: {
                                expose: 0.2,
                            },
                        },
                        流放: {
                            audio: 'ext:将包:1',
                            trigger: {
                                global: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('exliufang'), '令一名其他角色将武将牌翻面并摸' + get.cnNumber(player.getDamagedHp()) + '张牌', function (card, player, target) {
                                    return target;
                                }).ai = function (target) {
                                    if (target.hasSkillTag('noturn')) return 0;
                                    var player = _status.event.player;
                                    if (get.attitude(_status.event.player, target) == 0) return 0;
                                    if (get.attitude(_status.event.player, target) > 0) {
                                        if (target.classList.contains('turnedover')) return 1000 - target.countCards('h');
                                        if (player.getDamagedHp() < 3) return -1;
                                        return 100 - target.countCards('h');
                                    } else {
                                        if (target.classList.contains('turnedover')) return -1;
                                        if (player.getDamagedHp() >= 3) return -1;
                                        return 1 + target.countCards('h');
                                    }
                                };
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].turnOver();
                                    player.draw();
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
                        放逐: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                global: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt2('refangzhu'), function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    if (target.hasSkillTag('noturn')) return 0;
                                    var player = _status.event.player;
                                    if (get.attitude(_status.event.player, target) == 0) return 0;
                                    if (get.attitude(_status.event.player, target) > 0) {
                                        if (target.classList.contains('turnedover')) return 1000 - target.countCards('h');
                                        if (player.getDamagedHp() < 3) return -1;
                                        return 100 - target.countCards('h');
                                    } else {
                                        if (target.classList.contains('turnedover')) return -1;
                                        if (player.getDamagedHp() >= 3) return -1;
                                        return 1 + target.countCards('h');
                                    }
                                };
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    player.isDamaged() && event.target.draw(player.getDamagedHp());
                                    event.target.turnOver();
                                    player.hp = player.maxHp; //QQQ
                                    player.draw();
                                }
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -1.5];
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
                        散谣: {
                            audio: 'ext:将包/audio:2',
                            enable: 'phaseUse',
                            usable: 5,
                            selectCard() {
                                var player = _status.event.player;
                                return [
                                    Math.max(1, ui.selected.targets.length),
                                    game.countPlayer(function (target) {
                                        return (
                                            target != player &&
                                            !game.hasPlayer(function (current) {
                                                return current != player && current.hp > target.hp;
                                            })
                                        );
                                    }),
                                ];
                            },
                            selectTarget() {
                                return ui.selected.cards.length;
                            },
                            filterTarget(card, player, target) {
                                return (
                                    target != player &&
                                    !game.hasPlayer(function (current) {
                                        return current != player && current.hp > target.hp;
                                    })
                                );
                            },
                            check(card) {
                                var player = _status.event.player;
                                if (
                                    game.countPlayer(function (target) {
                                        return (
                                            target != player &&
                                            !game.hasPlayer(function (current) {
                                                return current != player && current.hp > target.hp;
                                            }) &&
                                            get.effect(target, 'sanyao', player, player) > 0
                                        );
                                    }) <= ui.selected.cards.length
                                )
                                    return 0;
                                return 7 - get.value(card);
                            },
                            position: 'he',
                            filterCard: true,
                            content() {
                                target.damage(3) && player.draw(2);
                            },
                            ai: {
                                result: {
                                    target(player, target) {
                                        var disbool = false;
                                        if (player.hasSkill('rezhiman')) {
                                            if (target.countCards('j') && get.attitude(player, target) > 0) {
                                                return 1;
                                            }
                                            if (
                                                target.countCards('he', function (card) {
                                                    return card.name == 'tengjia' || get.value(card) > 0;
                                                })
                                            ) {
                                                disbool = true;
                                            }
                                        }
                                        var damage = get.damageEffect(target, player);
                                        if (disbool && get.attitude(player, target) < 0) return Math.min(-1, damage);
                                        return damage;
                                    },
                                },
                                order: 7,
                            },
                        },
                        心战: {
                            audio: 'ext:将包/audio:2',
                            enable: 'phaseUse',
                            usable: 5,
                            filter(event, player) {
                                return true; //player.countCards('h')>player.maxHp;
                            },
                            usable: 5,
                            content() {
                                'step 0';
                                var cards = get.cards(3);
                                event.cards = cards;
                                var next = player.chooseCardButton(cards, '选择获得的♥️️牌', [1, Infinity]).set('filterButton', function (button) {
                                    return button.link.suit != 'emm';
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.gain(result.links);
                                    player.$draw(result.links);
                                }
                                for (var i = event.cards.length - 1; i >= 0; i--) {
                                    if (!result.bool || !result.links.includes(event.cards[i])) {
                                        ui.cardPile.insertBefore(event.cards[i], ui.cardPile.firstChild);
                                    }
                                }
                            },
                            ai: {
                                order: 11,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        挥泪: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.source != undefined;
                            },
                            logTarget: 'source',
                            content() {
                                trigger.source.discard(trigger.source.getCards('he'));
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (player.countCards('he') > 1 && get.tag(card, 'damage')) {
                                            if (player.hasSkill('jueqing')) return [1, -1.5];
                                            if (get.attitude(target, player) < 0) return [1, 1];
                                        }
                                    },
                                },
                            },
                        },
                        护驾: {
                            audio: 'hujia',
                            enable: ['chooseToUse', 'chooseToRespond'],
                            viewAs: {
                                name: 'shan',
                            },
                            mark: false,
                            filterCard() {
                                return false;
                            },
                            selectCard: -1,
                            prompt: '视为使用一张闪',
                            ai: {
                                respondShan: true,
                                basic: {
                                    useful: [7, 2],
                                    value: [7, 2],
                                },
                                result: {
                                    player: 1,
                                },
                                order: 3,
                            },
                        },
                        激将: {
                            audio: 'jijiang1',
                            enable: ['chooseToRespond', 'chooseToUse'],
                            usable: 5,
                            filterCard: true,
                            selectCard: 0,
                            viewAs: {
                                name: 'sha',
                            },
                            prompt: '视为使用或打出一张杀',
                            check(card) {
                                return 4 - get.value(card);
                            },
                            ai: {
                                respondSha: true,
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
                        血裔: {
                            trigger: {
                                player: 'phaseDiscardBefore',
                            },
                            audio: 'ext:将包/audio:2',
                            audioname: ['re_yuanshao'],
                            forced: true,
                            firstDo: true,
                            filter(event, player) {
                                return (
                                    game.hasPlayer(function (current) {
                                        return current.group != 'emm';
                                    }) && player.countCards('h') > player.hp
                                );
                            },
                            content() { },
                            mod: {
                                maxHandcard(player, num) {
                                    return (
                                        num +
                                        game.countPlayer(function (current) {
                                            if ((player == current.group) != 'emm') return 2;
                                        })
                                    );

                                    return num;
                                },
                            },
                        },
                        救援: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                target: 'taoBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.player == player) return false;
                                if (!player('jiuyuan')) return false;
                                if (event.player.group == 'emm') return false;
                                return true;
                            },
                            content() {
                                trigger.baseDamage++;
                            },
                        },
                        七衰: {
                            forced: true,
                            init(player) {
                                player.storage.xinfu_qiai = false;
                            },
                            filter(event, player) {
                                return player.storage.xinfu_qiai == false;
                            },
                            trigger: {
                                player: 'dying',
                            },
                            limited: true,
                            marktext: '哀',
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            audio: 'ext:将包/audio:2',
                            content() {
                                'step 0';
                                event.current = player.next;
                                ('step 1');
                                if (!event.current.countCards('he')) event.goto(3);
                                else
                                    event.current.chooseCard('交给' + get.translation(player) + '一张牌', 'he', true).set('ai', function (card) {
                                        var evt = _status.event.parent;
                                        if (get.attitude(_status.event.player, evt.player) > 2) {
                                            if (card.name == 'jiu') return 120;
                                            if (card.name == 'tao') return 110;
                                        }
                                        return 100 - get.value(card);
                                    });
                                ('step 2');
                                if (result.bool && result.cards && result.cards.length) {
                                    player.gain(result.cards, event.current, 'giveAuto');
                                }
                                ('step 3');
                                event.current = event.current.next;
                                if (event.current != player) event.goto(1);
                            },
                        },
                        登楼: {
                            forced: true,
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            limited: true,
                            marktext: '登',
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            content() {
                                'step 0';
                                event.cards = get.cards(10);
                                event.gains = [];
                                event.discards = [];
                                var content = ['牌堆顶的十张牌', event.cards];
                                game.log(player, '观看了', '#y牌堆顶的四张牌');
                                player.chooseControl('ok').set('dialog', content);
                                ('step 1');
                                if (get.type(event.cards[0]) != 'basic') {
                                    event.gains.push(event.cards[0]);
                                    event.cards.remove(event.cards[0]);
                                } else {
                                    var bool = game.hasPlayer(function (current) {
                                        return player.canUse(event.cards[0], current);
                                    });
                                    if (bool) {
                                        player.chooseUseTarget(event.cards[0], true, false);
                                    } else event.discards.push(event.cards[0]);
                                    event.cards.remove(event.cards[0]);
                                }
                                ('step 2');
                                if (event.cards.length) event.goto(1);
                                else {
                                    if (event.gains.length) player.gain(event.gains, 'gain2');
                                    if (event.discards.length) {
                                        player.$throw(event.discards);
                                        game.cardsDiscard(event.discards);
                                    }
                                }
                            },
                        },
                        散文: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                player: 'gainAfter',
                            },
                            filter(event, player) {
                                var namelist = [];
                                var namedlist = [];
                                for (var i of event.cards) {
                                    namelist.add(i.name);
                                }
                                var hs = player.getCards('h');
                                for (var j = 0; j < hs.length; j++) {
                                    if (namelist.includes(hs[j].name) && !event.cards.includes(hs[j])) return true;
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
                                player.draw(2 * nameddlist.length);
                            },
                        },
                        誓仇: {
                            limited: true,
                            mark: false,
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.countCards('he') < 2) return false;
                                return game.hasPlayer(function (current) {
                                    return current != player && current.group != 'sh';
                                });
                            },
                            init(player) {
                                player.markSkill('shichou');
                            },
                            content() {
                                'step 0';
                                player.chooseCardTarget({
                                    prompt: get.prompt2('shichou'),
                                    selectCard: 0,
                                    filterTarget(card, player, target) {
                                        return target.group != 'sh' && target != player;
                                    },
                                    filterCard: true,
                                    position: 'he',
                                    ai1(card) {
                                        return 7 - get.value(card);
                                    },
                                    ai2(target) {
                                        var player = _status.event.player;
                                        if (player.hasUnknown()) return 0;
                                        var att = get.attitude(player, target);
                                        if (att <= 0) {
                                            if (target.hp == 1) return (10 - att) / 2;
                                            return 10 - att;
                                        } else {
                                            if (target.hp == 1) return 0;
                                            return (10 - att) / 4;
                                        }
                                    },
                                });
                                ('step 1');
                                if (!result.bool) return;
                                var target = result.targets[0];
                                var cards = result.cards;
                                player.storage.shichou = true;
                                player.awakenSkill('shichou');
                                target.gain(cards, player, 'giveAuto');
                                player.storage.shichou_target = target;
                                player.addSkill('shichou2');
                                target.markSkillCharacter('shichou', player, '誓仇', '代替' + get.translation(player) + '承受伤害直到首次进入濒死状态');
                            },
                            intro: {
                                content: 'limited',
                            },
                        },
                        'mashu+': {
                            audio: 'ext:将包/audio:2',
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'jiu') return Infinity;
                                },
                            },
                            audioname2: {
                                old_guanzhang: 'old_fuhun',
                            },
                            audioname: ['re_zhangfei', 'guanzhang', 'xiahouba'],
                            trigger: {
                                player: 'useCard1',
                            },
                            forced: true,
                            filter(event, player) {
                                return !event.audioed && event.card.name == 'jiu' && player.countUsed('jiu', true) > 1 && event.parent.type == 'phase';
                            },
                            content() {
                                trigger.audioed = true;
                            },
                            globalFrom(from, to, distance) {
                                return distance - 1;
                            },
                            ai: {
                                unequip: true,
                                skillTagFilter(player, tag, arg) {
                                    if (!get.zhu(player, 'shouyue')) return false;
                                    if (arg && arg.name == 'jiu') return true;
                                    return false;
                                },
                            },
                        },
                        'fenpo+': {
                            shaRelated: true,
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                return event.targets.length == 1 && event.target.countCards('h', { suit: 'diamond' }); //QQQ
                            },
                            forced: true,
                            async content(event, trigger, player) {
                                //QQQ
                                const result = await player
                                    .chooseControl('摸牌', '加伤')
                                    .set('prompt', get.prompt2('fenpo+'))
                                    .set('ai', () => {
                                        if (trigger.target.isFriendsOf(player)) return '摸牌';
                                        if (get.tag(trigger.card, 'respondShan') && trigger.target.hasShan()) return '摸牌';
                                        if (get.tag(trigger.card, 'respondSha') && trigger.target.hasSha()) return '摸牌';
                                        return '加伤';
                                    })
                                    .forResult();
                                var nd = trigger.target.countCards('hej');
                                if (result.control == '摸牌') player.draw(nd);
                                else trigger.parent.baseDamage += nd;
                            },
                        },
                        'canshi+': {
                            audio: 'canshi',
                            trigger: {
                                player: 'phaseDrawBegin1',
                            },
                            check(event, player) {
                                var num = game.countPlayer(function (current) {
                                    if (player.hasZhuSkill('guiming+') && current.group == 'wu') return true;
                                    return current.isDamaged();
                                });
                                return num > 3;
                            },
                            prompt(event, player) {
                                var num = game.countPlayer(function (current) {
                                    if (player.hasZhuSkill('guiming+') && current.group == 'wu' && current != player) return true;
                                    return current.isDamaged();
                                });
                                return '残蚀:是否改为摸' + player.hp + '加' + get.cnNumber(num) + '张牌？';
                            },
                            filter(event, player) {
                                return !event.numFixed;
                            },
                            content() {
                                trigger.changeToZero();
                                var num = game.countPlayer(function (current) {
                                    if (player.hasZhuSkill('guiming+') && current.group == 'wu' && current != player) return true;
                                    return current.isDamaged();
                                });
                                if (num > -1) {
                                    player.draw(player.hp + num);
                                }
                                player.addTempSkill('D_canshi2');
                                player.addTempSkill('D_canshi3');
                            },
                        },
                        'chouhai+': {
                            audio: 'chouhai',
                            trigger: {
                                player: 'damageBegin3',
                            },
                            forced: true,
                            check() {
                                return false;
                            },
                            filter(event, player) {
                                return player.countCards('h') < player.hp;
                            },
                            content() {
                                trigger.num--;
                                player.changeHujia();
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (card.name != 'rsha' && target.countCards('h') != -1) return [1, -2];
                                    },
                                },
                            },
                        },
                        'guiming+': {
                            zhuSkill: true,
                        },
                        'wushen+': {
                            mod: {
                                cardname(card, player, name) {
                                    if (card.suit == 'heart') return 'sha';
                                },
                                cardnature(card, player) {
                                    if (card.suit == 'heart') return false;
                                },
                                targetInRange(card) {
                                    if (card.suit == 'heart') return true;
                                },
                                cardUsable(card) {
                                    if (card.name == 'sha' && card.suit == 'heart') return Infinity;
                                },
                            },
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.name == 'sha' && event.card.suit == 'heart';
                            },
                            content() {
                                trigger.directHit.addArray(game.players);
                                if (trigger.addCount !== false) {
                                    trigger.addCount = false;
                                    if (player.stat[player.stat.length - 1].card.sha > 0) {
                                        player.stat[player.stat.length - 1].card.sha--;
                                    }
                                }
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'respondSha') && current < 0) return 0.6;
                                    },
                                },
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    return arg.card.name == 'sha' && arg.card.suit == 'heart';
                                },
                            },
                        },
                        忠义: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            content() {
                                'step 0';
                                player.chooseToDiscard(999, 'j', true);
                                ('step 1');
                                var list = ['qinglong'];
                                player.equip(game.createCard(list.randomGet()));
                                ('step 2');
                                player.draw(1);
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        奇制: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                global: 'useCardToPlayered',
                            },
                            forced: true,
                            filter(event, player) {
                                if (!event.targets) return false;
                                if (!event.isFirstTarget) return false;
                                if (_status.currentPhase != player) return false;
                                var type = get.type(event.card, 'trick');
                                if (type != 'basic' && type != 'trick') return false;
                                if (event.noai) return false;
                                return game.hasPlayer(function (target) {
                                    return !event.targets.includes(target) && target.countCards('hej') != -1;
                                });
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('qizhi'), '弃置一名角色的一张牌,其失去一点体力,你摸一张牌', function (card, player, target) {
                                        return !_status.event.targets.includes(target) && target.countCards('he') > 0;
                                    })
                                    .set('targets', trigger.targets);
                                ('step 1');
                                if (result.bool) {
                                    player.getHistory('custom').push({ qizhi: true });
                                    player.discardPlayerCard(result.targets[0], true, 'he');
                                    event.target = result.targets[0];
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                event.target.loseHp();
                                player.draw();
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
                                                if (jj.name == 'guohe' || js.length > 1 || get.effect(target, jj, target, player) < 0) {
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
                                        var noe2 =
                                            es.filter(function (esx) {
                                                return get.value(esx, target) > 0;
                                            }).length == 0;
                                        var noh = nh == 0 || target.hasSkillTag('noh');
                                        if (noh && (noe || noe2)) return 0;
                                        if (att <= 0 && !target.countCards('he')) return 1.5;
                                        return -1.5;
                                    },
                                },
                                tag: {
                                    loseCard: 1,
                                    discard: 1,
                                },
                                yingbian(card, player, targets, viewer) {
                                    if (get.attitude(viewer, player) <= 0) return 0;
                                    if (
                                        game.hasPlayer(function (current) {
                                            return !targets.includes(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
                                        })
                                    )
                                        return 6;
                                    return 0;
                                },
                            },
                        },
                        进趋: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                global: 'phaseJieshuBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(function (card, player, target) {
                                        return target;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.bool && result.targets && result.targets.length) {
                                    var num = [1].randomGet();
                                    player.line(result.targets[0], 'green');
                                    player.discardPlayerCard(result.targets[0], true, 'hej');
                                    player.draw() && player.recover();
                                }
                            },
                        },
                        xmingjian: {
                            audio: 'ext:将包/audio:2',
                            enable: 'phaseUse',
                            usable: 5,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            filter(event, player) {
                                return player.countCards('h') >= 0;
                            },
                            filterCard: true,
                            selectCard: 1,
                            discard: false,
                            lose: false,
                            delay: false,
                            content() {
                                target.gain(cards, player, 'giveAuto');
                                target.addTempSkill('mingjian2', { player: 'phaseAfter' });
                                player.addTempSkill('mingjian2', { player: 'phaseAfter' });
                                target.storage.mingjian2 += Infinity;
                                player.storage.mingjian2 += Infinity;
                                player.draw(target.hp);
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target(player, target) {
                                        if (target.hasSkillTag('nogain')) return 0;
                                        if (player.countCards('h') == player.countCards('h', 'du')) return -1;
                                        if (target.hasJudge('lebu')) return 0;
                                        if (get.attitude(player, target) > 3) {
                                            var basis = get.threaten(target);
                                            if (
                                                player == get.zhu(player) &&
                                                player.hp <= 2 &&
                                                player.countCards('h', 'shan') &&
                                                !game.hasPlayer(function (current) {
                                                    return get.attitude(current, player) > 3 && current.countCards('h', 'tao') > 0;
                                                })
                                            )
                                                return 0;
                                            if (target.countCards('h') + player.countCards('h') > target.hp + 2) return basis * 0.8;
                                            return basis;
                                        }
                                        return 0;
                                    },
                                },
                            },
                            audioname2: {
                                key_shiki: 'shiki_omusubi',
                            },
                        },
                        xrende: {
                            audio: 'rerende',
                            enable: 'phaseUse',
                            usable: 5,
                            filterCard: true,
                            selectCard: [1, Infinity],
                            discard: false,
                            lose: false,
                            delay: false,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            check(card) {
                                if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') return 0;
                                if (!ui.selected.cards.length && card.name == 'du') return 20;
                                var player = get.owner(card);
                                if (ui.selected.cards.length >= Math.max(2, player.countCards('h') - player.hp)) return 0;
                                if (player.hp == player.maxHp || player.storage.xrende < 0 || player.countCards('h') <= 1) {
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
                            content() {
                                'step 0';
                                var evt = _status.event.getParent('phaseUse');
                                if (evt && evt.name == 'phaseUse' && !evt.xrende) {
                                    var next = game.createEvent('xrende_clear');
                                    _status.event.next.remove(next);
                                    evt.after.push(next);
                                    evt.xrende = true;
                                    next.player = player;
                                    next.setContent(function () {
                                        delete player.storage.xrende;
                                    });
                                }
                                target.gain(cards, player, 'giveAuto');
                                player.recover();
                                if (typeof player.storage.xrende != 'number') {
                                    player.storage.xrende = 0;
                                }
                                if (player.storage.xrende >= 0) {
                                    player.storage.xrende += cards.length;
                                    if (player.storage.xrende != 0) {
                                        var list = [];
                                        if (
                                            lib.filter.cardUsable({ name: 'sha' }, player, event.getParent('chooseToUse')) &&
                                            game.hasPlayer(function (current) {
                                                return player.canUse('sha', current);
                                            })
                                        ) {
                                            list.push(['', '', 'sha']);
                                        }
                                        for (var i of lib.inpile_nature) {
                                            if (
                                                lib.filter.cardUsable({ name: 'sha', nature: i }, player, event.getParent('chooseToUse')) &&
                                                game.hasPlayer(function (current) {
                                                    return player.canUse({ name: 'sha', nature: i }, current);
                                                })
                                            ) {
                                                list.push(['', '', 'sha', i]);
                                            }
                                        }
                                        if (
                                            lib.filter.cardUsable({ name: 'tao' }, player, event.getParent('chooseToUse')) &&
                                            game.hasPlayer(function (current) {
                                                return player.canUse('tao', current);
                                            })
                                        ) {
                                            list.push(['', '', 'tao']);
                                        }
                                        if (
                                            lib.filter.cardUsable({ name: 'jiu' }, player, event.getParent('chooseToUse')) &&
                                            game.hasPlayer(function (current) {
                                                return player.canUse('jiu', current);
                                            })
                                        ) {
                                            list.push(['', '', 'jiu']);
                                        }
                                        if (list.length) {
                                            player.chooseButton(['是否视为使用一张基本牌？', [list, 'vcard']]).set('ai', function (button) {
                                                var player = _status.event.player;
                                                var card = { name: button.link[2], nature: button.link[3] };
                                                if (card.name == 'tao') {
                                                    if (player.hp == 1 || (player.hp == 2 && !player.hasShan()) || player.needsToDiscard()) {
                                                        return 5;
                                                    }
                                                    return 1;
                                                }
                                                if (card.name == 'sha') {
                                                    if (
                                                        game.hasPlayer(function (current) {
                                                            return player.canUse(card, current) && get.effect(current, card, player, player) > 0;
                                                        })
                                                    ) {
                                                        if (card.nature == 'fire') return 2.95;
                                                        if (card.nature == 'thunder' || card.nature == 'ice') return 2.92;
                                                        return 2.9;
                                                    }
                                                    return 0;
                                                }
                                                if (card.name == 'jiu') {
                                                    return 0.5;
                                                }
                                                return 0;
                                            });
                                        } else {
                                            event.finish();
                                        }
                                        player.storage.jsprende = -1;
                                    } else {
                                        event.finish();
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 1');
                                if (result && result.bool && result.links[0]) {
                                    var card = { name: result.links[0][2], nature: result.links[0][3] };
                                    player.chooseUseTarget(card, true);
                                }
                            },
                            ai: {
                                fireAttack: true,
                                order(skill, player) {
                                    if (player.hp < player.maxHp && player.storage.jsprende < 2 && player.countCards('h') > 1) {
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
                                        if (player.hp == player.maxHp || player.storage.jsprende < 0 || player.countCards('h') <= 1) {
                                            if (nh >= np - 1 && np <= player.hp && !target.hasSkill('haoshi')) return 0;
                                        }
                                        return Math.max(1, 5 - nh);
                                    },
                                },
                                effect: {
                                    target(card, player, target) {
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
                        },
                        xhuituo: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                global: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt2('xhuituo')).set('ai', function (target) {
                                    var player = _status.event.player;
                                    if (get.attitude(player, target) > 0) {
                                        return get.recoverEffect(target, player, player) + 1;
                                    }
                                    return 0;
                                });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    target.judge(function (card) {
                                        if (target.hp == target.maxHp) {
                                            if (get.color(card) == 'red') return -1;
                                        }
                                        if (get.color(card) == 'red') return 1;
                                        return 0;
                                    });
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.color) {
                                    if (result.color == 'red') {
                                        if (event.target.hp < event.target.maxHp) event.target.hp = event.target.maxHp;
                                    } else {
                                        event.target.draw(1) && event.player.draw(1);
                                    }
                                }
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                            },
                            audioname2: {
                                key_shiki: 'shiki_omusubi',
                            },
                        },
                        xxingshuai: {
                            audio: 'ext:将包/audio:2',
                            forced: true,
                            trigger: {
                                global: 'dying',
                            },
                            filter(event, player) {
                                if (player.storage.xingshuai) return false;
                                if (player.hp > 0) return false;
                                return game.hasPlayer(function (current) {
                                    return current.group != 'emm';
                                });
                            },
                            intro: {
                                content: 'limited',
                            },
                            limited: true,
                            mark: false,
                            content() {
                                'step 0';
                                var targets = game.filterPlayer();
                                targets.remove(player);
                                event.targets = targets;
                                event.draw = [];
                                ('step 1');
                                if (event.targets.length) {
                                    var current = event.targets.shift();
                                    if (current.group != 'emm') {
                                        current
                                            .chooseBool('是否令' + get.translation(player) + '回复两点体力？')
                                            .set('ai', function () {
                                                return get.attitude(_status.event.player, _status.event.target) > 2;
                                            })
                                            .set('target', player);
                                        event.current = current;
                                    } else {
                                        event.redo();
                                    }
                                } else {
                                    event.goto(3);
                                }
                                ('step 2');
                                if (result.bool) {
                                    event.draw.push(event.current);
                                    event.current.line(player, 'green');
                                    game.log(event.current, '令', player, '回复两点体力');
                                    player.recover(2);
                                }
                                if (event.targets.length) {
                                    event.goto(1);
                                }
                                ('step 3');
                                if (event.draw.length) {
                                    var next = game.createEvent('xxingshuaI_next');
                                    event.next.remove(next);
                                    trigger.after.push(next);
                                    next.targets = event.draw;
                                    next.setContent(function () {
                                        targets.shift().draw();
                                        if (targets.length) event.redo();
                                    });
                                }
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                            audioname2: {
                                key_shiki: 'shiki_omusubi',
                            },
                        },
                        D_shejian: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                global: 'damageBefore',
                            },
                            check(event, player) {
                                return get.attitude(player, event[event.name == 'gain' ? 'source' : 'player']) < 0;
                            },
                            logTarget(event) {
                                return event[event.name == 'gain' ? 'source' : 'player'];
                            },
                            content() {
                                'step 0';
                                trigger.player.loseHp(trigger.num * 2);
                                player.draw(2) & player.recover(2);
                            },
                        },
                        xlongmai: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            content() {
                                trigger.cancel();
                                trigger.source.damage(2, 'kami') && trigger.source.damage(1, 'fire');
                            },
                            mod: {
                                targetEnabled(card, player, target, now) {
                                    if (card.name == 'tiesuo') return false;
                                },
                            },
                            ai: {
                                maixie_defend: true,
                                threaten: 0.9,
                            },
                        },
                        xtianming: {
                            audio: 'ext:将包/audio:2',
                            forced: true,
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            check(event, player) {
                                var cards = player.getCards('h');
                                if (cards.length <= 2) {
                                    for (var i = 0; i < cards.length; i++) {
                                        if (cards[i].name == 'basic' || cards[i].name == 'trick,') return false;
                                    }
                                }
                                return true;
                            },
                            filter(event, player) {
                                return (get.type(event.card) == 'trick,', 'basic', 'equip');
                            },
                            content() {
                                'step 0';
                                player.draw(2);
                                var players = game.filterPlayer();
                                players.sort(function (a, b) {
                                    return b.hp - a.hp;
                                });
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (card.name == 'sha') return [1, 0.5];
                                    },
                                },
                            },
                        },
                        xshenfen: {
                            audio: 'ext:将包/audio:2',
                            enable: 'phaseUse',
                            usable: 5,
                            usable: 2,
                            limited: true,
                            content() {
                                'step 0';
                                player.awakenSkill('xshenfen'); //QQQ
                                player.recover();
                                event.delay = false;
                                event.targets = game.filterPlayer();
                                event.targets.remove(player);
                                event.targets.sort(lib.sort.seat);
                                player.line(event.targets, 'green');
                                event.targets2 = event.targets.slice(0);
                                event.targets3 = event.targets.slice(0);
                                ('step 1');
                                if (event.targets2.length) {
                                    event.targets2.shift().damage(2, 'fire');
                                    event.redo(2);
                                }
                                ('step 2');
                                if (event.targets.length) {
                                    event.current = event.targets.shift();
                                    if (event.current.countCards('e')) event.delay = true;
                                    event.current.discard(event.current.getCards('e')).delay = false;
                                }
                                ('step 3');
                                if (event.delay) game.delay(0.5);
                                event.delay = false;
                                if (event.targets.length) event.goto(2);
                                ('step 4');
                                if (event.targets3.length) {
                                    var target = event.targets3.shift();
                                    target.chooseToDiscard(2, 'h', true).delay = false;
                                    if (target.countCards('h')) event.delay = true;
                                }
                                ('step 5');
                                if (event.delay) game.delay(0.5);
                                event.delay = false;
                                if (event.targets3.length) event.goto(2);
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player(player) {
                                        if (player.hp < 9 || player.hasUnknown(4)) return 0;
                                        return game.countPlayer(function (current) {
                                            if (current != player) {
                                                return get.sgn(get.damageEffect(current, player, player));
                                            }
                                        });
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
                        诈降: {
                            enable: 'phaseUse',
                            usable: 5,
                            forced: true,
                            audio: 'ext:将包/audio:2',
                            content() {
                                player.draw(Math.min(player.hp, 20));
                                if (_status.currentPhase == player) {
                                    if (!player.storage.zhaxiang2) player.storage.zhaxiang2 = 0;
                                    player.addTempSkill('zhaxiang2', { player: 'phaseAfter' });
                                    player.addTempSkill('zhanlong2', { player: 'phaseAfter' }); //QQQ
                                } else {
                                    game.trySkillAudio('zhaxiang', player);
                                }
                            },
                            ai: {
                                maihp: true,
                            },
                            audioname2: {
                                key_shiki: 'shiki_omusubi',
                            },
                        },
                        苦肉: {
                            audio: 'ext:将包/audio:2',
                            enable: 'phaseUse',
                            usable: 5,
                            prompt: '回复一点体力并摸两张牌',
                            content() {
                                'step 0';
                                player.recover(1);
                                ('step 1');
                                player.draw(2);
                            },
                            ai: {
                                basic: {
                                    order: 1,
                                },
                                result: {
                                    player(player) {
                                        if (player.countCards('h') >= player.hp + 1) return +1;
                                        if (player.hp < 3) return +1;
                                        return 1;
                                    },
                                },
                            },
                            audioname2: {
                                key_shiki: 'shiki_omusubi',
                                caoshuang: 'tuogu',
                            },
                        },
                        殃众: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                var target = event.player,
                                    source = event.source;
                                if (player != source && !player.hasSkill('yangzhong')) return false;
                                if (!target || !source || !target.isAlive() || !source.isAlive()) return false;
                                return source.countCards('he') > 1;
                            },
                            content() {
                                'step 0';
                                trigger.source.chooseToDiscard('是否对' + get.translation(trigger.player) + '发动【殃众】？', '弃置一张牌,并令其失去两点体力,之后你摸两张牌', 'hej', 1).set('ai', function (card) {
                                    var evt = _status.event;
                                    if (get.attitude(evt.player, evt.getTrigger().player) >= 0) return 0;
                                    return 7 - get.value(card);
                                });
                                ('step 1');
                                if (result.bool) trigger.player.loseHp(2);
                                player.draw(2);
                            },
                        },
                        惶恐: {
                            audio: 'ext:将包/audio:2',
                            forced: true,
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            check(event, player) {
                                var cards = player.getCards('h');
                                if (cards.length <= 2) {
                                    for (var i = 0; i < cards.length; i++) {
                                        if (cards[i].name != 'equip') return false;
                                    }
                                }
                                return true;
                            },
                            filter(event, player) {
                                return get.type(event.card) != 'equip';
                            },
                            content() {
                                'step 0';
                                player.draw() && player.recover();
                                var players = game.filterPlayer();
                                players.sort(function (a, b) {
                                    return b.hp - a.hp;
                                });
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (card.name != 'equip') return [1, 0.5];
                                    },
                                },
                            },
                        },
                        神佑: {
                            audio: 'ext:将包/audio:2',
                            charlotte: true,
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            content() {
                                var bool = false;
                                if (player == game.me) bool = true;
                                else
                                    switch (get.mode()) {
                                        case 'identity': {
                                            game.showIdentity();
                                            var id1 = player.identity;
                                            var id2 = game.me.identity;
                                            if (['zhu', 'zhong', 'mingzhong'].includes(id1)) {
                                                if (['zhu', 'zhong', 'mingzhong'].includes(id2)) bool = true;
                                                break;
                                            } else if (id1 == 'fan') {
                                                if (id2 == 'fan') bool = true;
                                                break;
                                            }
                                            break;
                                        }
                                        case 'guozhan': {
                                            if (game.me.isFriendsOf(player)) bool = true;
                                            break;
                                        }
                                        case 'versus': {
                                            if (player.side == game.me.side) bool = true;
                                            break;
                                        }
                                        case 'boss': {
                                            if (player.side == game.me.side) bool = true;
                                            break;
                                        }
                                        default: {
                                        }
                                    }
                                game.over(bool);
                            },
                        },
                        伏骑: {
                            audio: 'ext:将包/audio:2',
                            forced: true,
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                return (
                                    event.card &&
                                    (get.type(event.card) == 'trick' || (get.type(event.card) == 'basic' && !['shan', 'tao', 'jiu', 'du'].includes(event.card.name))) &&
                                    game.hasPlayer(function (current) {
                                        return current != player && get.distance(player, current) != 0;
                                    })
                                );
                            },
                            content() {
                                trigger.directHit.addArray(
                                    game.filterPlayer(function (current) {
                                        return current != player && get.distance(player, current) != 0;
                                    })
                                );
                            },
                            ai: {
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    return get.distance(player, arg.target) != 0;
                                },
                            },
                        },
                        骄恣: {
                            group: 'jiaozi1',
                            trigger: {
                                source: 'damageBegin1',
                            },
                            forced: true,
                            content() {
                                trigger.num += 2;
                            },
                            ai: {
                                presha: true,
                            },
                        },
                        suoyingx: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            forced: true,
                            filter(event, player, name) {
                                if (!player.countCards('he') || player.hasSkill('souying2')) return false;
                                if (!event.targets || event.player == event.target) return false;
                                if (event.card.name != 'sha' && get.type(event.card) != 'trick') return false;
                                if (name == 'useCardToPlayered') {
                                    if (!event.cards.filterInD().length) return false;
                                    var target = event.target;
                                    return (
                                        player
                                            .getHistory('useCard', function (evt) {
                                                return evt.targets && evt.targets.includes(target);
                                            })
                                            .indexOf(event.parent) > 0
                                    );
                                } else {
                                    var source = event.player;
                                    return (
                                        source
                                            .getHistory('useCard', function (evt) {
                                                return evt.targets && evt.targets.includes(player);
                                            })
                                            .indexOf(event.parent) > 0
                                    );
                                }
                            },
                            content() {
                                'step 0';
                                var next = player.chooseToDiscard('he');
                                var prompt;
                                if (event.triggername == 'useCardToTargeted') {
                                    event.target = trigger.player;
                                    prompt = '令' + get.translation(trigger.card) + '对你无效';
                                    next.set('goon', -get.effect(player, trigger.card, trigger.player, player));
                                } else {
                                    event.target = trigger.targets[0];
                                    prompt = '弃置一张牌,并获得' + get.translation(trigger.cards.filterInD());
                                    next.set('goon', get.value(trigger.cards.filterInD()));
                                }
                                next.set('prompt', get.prompt('souying', event.target));
                                next.set('prompt2', prompt);
                                next.set('ai', function (card) {
                                    return _status.event.goon - get.value(card);
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.addTempSkill('souying2');
                                    if (event.triggername == 'useCardToPlayered') player.gain(trigger.cards.filterInD());
                                    else trigger.excluded.add(player);
                                }
                            },
                            ai: {
                                expose: 0.25,
                            },
                            audioname2: {
                                yanghuiyu: 'quanfeng',
                            },
                        },
                        mansix: {
                            audio: 'ext:将包/audio:2',
                            enable: 'phaseUse',
                            usable: 5,
                            filterCard: true,
                            position: 'he',
                            viewAs: {
                                name: 'nanman',
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            group: 'mansix_discard',
                            subSkill: {
                                discard: {
                                    trigger: {
                                        global: 'damageEnd',
                                    },
                                    filter(event, player) {
                                        return event.card && event.card.name == 'nanman';
                                    },
                                    forced: true,
                                    content() {
                                        trigger.player.discard(trigger.player.getCards('he').randomGet());
                                        player.draw();
                                        player.addMark('mansix', 1, false);
                                    },
                                    intro: {
                                        content: '已因此技能获得了#张牌',
                                    },
                                },
                            },
                            ai: {
                                basic: {
                                    order: 10,
                                    useful: 1,
                                    value: 5,
                                },
                                wuxie(target, card, player, viewer) {
                                    if (get.attitude(viewer, target) > 0 && target.countCards('h', 'shan')) {
                                        if (!target.countCards('h') || target.hp == 1 || Math.random() < 0.7) return 0;
                                    }
                                },
                                result: {
                                    target(player, target) {
                                        if (player.hasUnknown(2)) return 0;
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
                        zhanyuanx: {
                            audio: 'ext:将包/audio:2',
                            derivation: 'hmxilix',
                            juexingji: true,
                            forced: true,
                            filter(event, player) {
                                return player.countMark('mansix') >= 10;
                            },
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('zhanyuanx');
                                player.gainMaxHp();
                                player.recover();
                                ('step 1');
                                player.chooseTarget('是否失去〖蛮嗣〗,令一名其他角色和自己一同获得技能〖系力〗？', function (card, player, target) {
                                    return target != player;
                                }).ai = function (target) {
                                    return get.attitude(_status.event.player, target);
                                };
                                ('step 2');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.line(target, 'fire');
                                    player.addSkill('hmxilix');
                                    target.addSkill('hmxilix');
                                    player.removeSkill('mansix');
                                }
                            },
                            audioname2: {
                                yanghuiyu: 'quanfeng',
                            },
                        },
                        manyix: {
                            trigger: {
                                target: 'useCardToBefore',
                            },
                            forced: true,
                            audio: 'ext:将包/audio:2',
                            filter(event, player) {
                                return event.card.name == 'nanman';
                            },
                            content() {
                                trigger.cancel();
                            },
                            audioname2: {
                                yanghuiyu: 'quanfeng',
                            },
                        },
                        hmxilix: {
                            trigger: {
                                global: 'damageBegin1',
                            },
                            forced: true,
                            audio: 'ext:将包/audio:2',
                            filter(event, player) {
                                return event.source && event.source != player && event.source == _status.currentPhase && event.source.hasSkill('hmxilix') && !event.player.hasSkill('hmxilix') && player.countCards('he') > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseToDiscard('是否弃置一张牌,令' + get.translation(trigger.source) + '对' + get.translation(trigger.player) + '的伤害+2,且你与其各摸两张牌？', 'he').ai = function (card) {
                                    return 9 - get.value(card);
                                };
                                ('step 1');
                                if (result.bool) {
                                    game.asyncDraw([trigger.source, player], 2);
                                    trigger.num += 2;
                                } else event.finish();
                                ('step 2');
                            },
                        },
                        裸衣: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            check(event, player) {
                                if (player.countCards('h') < 3) return false;
                                if (!player.hasSha()) return false;
                                return game.hasPlayer(function (current) {
                                    return get.attitude(player, current) < 0 && player.canUse('sha' || 'juedou', current);
                                });
                            },
                            filter(event, player) {
                                return !event.numFixed && event.num > 0;
                            },
                            content() {
                                player.addTempSkill('luoyi2', 'phaseJieshuBegin');
                                trigger.num++;
                            },
                        },
                        勇决: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                global: 'useCardAfter',
                            },
                            filter(event, player) {
                                if (event.card.name != 'sha') return false;
                                for (var i of event.cards) {
                                    if (get.position(i, true) == 'o') return true;
                                }
                                return false;
                            },
                            forced: true,
                            content() {
                                var cards = trigger.cards.slice(0);
                                for (var i = 0; i < cards.length; i++) {
                                    if (get.position(cards[i], true) != 'o') {
                                        cards.splice(i--, 1);
                                    }
                                }
                                player.gain(cards, 'gain2');
                            },
                        },
                        不屈: {
                            audio: 'ext:将包/audio:2',
                            audioname: ['key_yuri'],
                            trigger: {
                                player: 'chooseToUseBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.type == 'dying' && player.isDying() && event.dying == player;
                            },
                            content() {
                                'step 0';
                                event.card = get.cards()[0];
                                if (player.storage.buqu == undefined) player.storage.buqu = [];
                                player.storage.buqu.push(event.card);
                                //event.trigger("addCardToStorage");
                                game.cardsGotoSpecial(event.card);
                                player.showCards(player.storage.buqu, '不屈');
                                player.markSkill('buqu');
                                ('step 1');
                                trigger.cancel();
                                trigger.result = { bool: true };
                                if (player.hp <= 0) {
                                    player.recover(1 - player.hp);
                                }
                            },
                            mod: {
                                maxHandcardBase(player, num) {
                                    if (get.mode() != 'guozhan' && player.storage.buqu && player.storage.buqu.length) return player.storage.buqu.length;
                                },
                            },
                            ai: {
                                save: true,
                                mingzhi: true,
                                skillTagFilter(player, tag, target) {
                                    if (player != target) return false;
                                },
                            },
                            intro: {
                                content: 'cards',
                                onunmark(storage, player) {
                                    if (storage && storage.length) {
                                        player.$throw(storage, 1000);
                                        game.cardsDiscard(storage);
                                        delete player.storage.buqu;
                                    }
                                },
                            },
                        },
                        奋激: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                global: ['gainAfter', 'loseAfter'],
                            },
                            filter(event, player) {
                                var evt = event;
                                if (event.name == 'recover') {
                                    if (event.type != 'discard') return false;
                                    evt = event.parent;
                                }
                                var player = evt[event.name == 'gain' ? 'source' : 'player'];
                                if (!player || player.isDead()) return false;
                                if (evt[event.name == 'gain' ? 'bySelf' : 'notBySelf'] != true) return false;
                                if (event.name == 'lose') return event.hs.length;
                                return event.relatedLose && event.relatedLose.hs && event.relatedLose.hs.length;
                            },
                            check(event, player) {
                                return get.attitude(player, event[event.name == 'gain' ? 'source' : 'player']) > 2;
                            },
                            logTarget(event) {
                                return event[event.name == 'gain' ? 'source' : 'player'];
                            },
                            content() {
                                'step 0';
                                player.recover();
                                ('step 1');
                                trigger[trigger.name == 'gain' ? 'source' : 'player'].draw();
                                trigger[trigger.name == 'gain' ? 'source' : 'player'].recover();
                            },
                        },
                        雄乱: {
                            audio: 'ext:将包/audio:2',
                            enable: 'phaseUse',
                            usable: 5,
                            mark: true,
                            limited: true,
                            init(player) {
                                player.storage.drlt_xiongluan = false;
                            },
                            filter(event, player) {
                                if (player.storage.drlt_xiongluan) return false;
                                return true;
                            },
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            content() {
                                target.disableEquip('equip1');
                                target.disableEquip('equip2');
                                target.disableEquip('equip3');
                                target.disableEquip('equip4');
                                target.disableEquip('equip5');
                                player.disableJudge();
                                for (var i = 0; i < 3; i++) {
                                    cards.push(game.createCard('sha'));
                                }
                                player.gain(cards, 'gain2');
                                player.addTempSkill('drlt_xiongluan_effect');
                                player.storage.drlt_xiongluan_effect = [target];
                                target.addSkill('drlt_xiongluan_ban');
                                target.markSkillCharacter('drlt_xiongluan_effect', player, '雄乱', '无法使用或打出任何手牌');
                            },
                            ai: {
                                order: 2.7,
                                result: {
                                    player(player) {
                                        if ((player.storage.nzry_chenglve == undefined || player.storage.nzry_chenglve == false) && player.countCards('h') < 3) return 0;
                                        return 1;
                                    },
                                },
                            },
                            intro: {
                                content: 'limited',
                            },
                        },
                        从谏: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.type(event.card) == 'trick' && event.targets.length > 1 && player.countCards('he') > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseCardTarget({
                                    filterCard: true,
                                    selectCard: 1,
                                    position: 'he',
                                    filterTarget(card, player, target) {
                                        return player != target && _status.event.targets.includes(target);
                                    },
                                    ai1(card) {
                                        if (card.name == 'du') return 20;
                                        if (_status.event.player.storage.drlt_xiongluan && get.type(card) == 'equip') return 15;
                                        return 6 - get.value(card);
                                    },
                                    ai2(target) {
                                        var att = get.attitude(_status.event.player, target);
                                        if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
                                            if (target.hasSkillTag('nodu')) return 0.1;
                                            return 1 - att;
                                        }
                                        return att - 3;
                                    },
                                    prompt: get.prompt2('从谏'),
                                    targets: trigger.targets,
                                });
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    player.line(event.target);
                                    event.target.gain(result.cards[0], player, 'give');
                                    var num = 1;
                                    if (get.type(result.cards[0]) == 'equip') num = 2;
                                    player.draw(num) && player.recover(num);
                                }
                            },
                        },
                        空城: {
                            forced: true,
                            trigger: {
                                global: 'gameStart',
                            },
                            content() {
                                player.countCards = function (a, b) {
                                    if (a && !b) {
                                        if (a != 'emm') return 0;
                                        //第一个参数为h的话返回0
                                        return lib.element.player.countCards.apply(player, [a.replace('h', 'e', 'j')]);
                                        //否则将第一个参数中的h去掉
                                    } else {
                                        return lib.element.player.countCards.apply(player, [a, b]);
                                    }
                                };
                                player.getDiscardableCards = function (playerx, arg1, arg2) {
                                    if (arg1 != 'emm' && !arg2) {
                                        return [];
                                    }
                                    var cards = this.getCards(arg1.replace('h', 'e', 'j'), arg2);
                                    for (var i = 0; i < cards.length; i++) {
                                        if (!lib.filter.canBeDiscarded(cards[i], playerx, this)) {
                                            cards.splice(i--, 1);
                                        }
                                    }
                                    return cards;
                                };
                                player.getGainableCards = function (playerx, arg1, arg2) {
                                    if (arg1 != 'emm' && !arg2) {
                                        return [];
                                    }
                                    var cards = this.getCards(arg1.replace('h', 'e', 'j'), arg2);
                                    for (var i = 0; i < cards.length; i++) {
                                        if (!lib.filter.canBeGained(cards[i], playerx, this)) {
                                            cards.splice(i--, 1);
                                        }
                                    }
                                    return cards;
                                };
                                player.update();
                            },
                            onremove(player) {
                                player.countCards = lib.element.player.countCards;
                                player.getDiscardableCards = lib.element.player.getDiscardableCards;
                                player.getGainableCards = lib.element.player.getGainableCards;
                                player.update();
                            },
                            mod: {
                                maxHandcard(player) {
                                    return Infinity;
                                },
                            },
                        },
                        八阵: {
                            inherit: '八阵',
                            audio: 'ext:将包/audio:2',
                            content() {
                                'step 0';
                                player.judge('八阵', function (card) {
                                    return card.suit != 'spade' ? 1.5 : -0.5;
                                });
                                ('step 1');
                                if (result.judge > 0) {
                                    trigger.untrigger();
                                    trigger.set('responded', true);
                                    trigger.result = { bool: true, card: { name: 'shan' } };
                                }
                            },
                            trigger: {
                                player: ['chooseToRespondBegin', 'chooseToUseBegin'],
                            },
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
                                return true;
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
                                        if (get.tag(card, 'respondShan')) return 0.5;
                                    },
                                },
                            },
                        },
                        谋略: {
                            audio: 'ext:将包/audio:2',
                            usable: 2,
                            enable: 'phaseUse',
                            usable: 5,
                            filter(event, player) {
                                return player.countCards('h') >= 1;
                            },
                            content() {
                                'step 0';
                                player.chooseToDiscard(1, true);
                                var list = { basic: [], equip: [], trick: [], delay: [] };
                                for (var i = 0; i < lib.inpile.length; i++) {
                                    var name = lib.inpile[i];
                                    var info = lib.card[name];
                                    if (info.autoViewAs || name == 'yuansuhuimie') continue;
                                    if (lib.filter.cardEnabled({ name: name }, player)) {
                                        if (!list[info.type]) {
                                            list[info.type] = [];
                                        }
                                        list[info.type].push([get.translation(lib.card[name].type), '', name]);
                                    }
                                }
                                list.trick.sort(lib.sort.name);
                                var dialog = ui.create.dialog('谋略', [list.trick, 'vcard']);
                                // for(var i in list){
                                //     dialog.addText(get.translation(i)+'牌');
                                //     dialog.add([list[i],'vcard']);
                                // }
                                var rand1 = Math.random() < 1 / 3;
                                var rand2 = Math.random() < 0.5;
                                var rand3 = Math.random() < 1 / 3;
                                var rand4 = Math.random() < 1 / 3;
                                player.chooseButton(dialog).ai = function (button) {
                                    var name = button.link[2];
                                    if (player.hp <= 1) {
                                        switch (name) {
                                            case 'zhiliaobo':
                                                return 1;
                                            case 'dunpaigedang':
                                                return 0.8;
                                            case 'nanman':
                                                return 0.5;
                                            default:
                                                return 0;
                                        }
                                    }
                                    if (rand4 && player.countCards('h') <= 1) {
                                        switch (name) {
                                            case 'zengbin':
                                                return 1;
                                            case 'wuzhong':
                                                return 0.8;
                                            default:
                                                return 0;
                                        }
                                    }
                                    if (player.hasSkill('qinglonglingzhu')) {
                                        if (rand2) return name == 'chiyuxi' ? 0.8 : 0;
                                        return name == 'jingleishan' ? 0.8 : 0;
                                    }
                                    if (rand2) return name == 'wanjian' ? 0.8 : 0;
                                    return name == 'nanman' ? 0.8 : 0;
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.chooseUseTarget(result.links[0][2]);
                                }
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        yaowux: {
                            trigger: {
                                player: 'damageBegin3',
                                source: 'damageBegin1',
                            },
                            audio: 'new_reyaowu',
                            forced: true,
                            filter(event, player) {
                                return event.card && (get.color(event.card) != 'emm' || (event.source && event.source.isAlive()));
                            },
                            content() {
                                player.draw();
                            },
                        },
                        恃勇: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            check() {
                                return false;
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                trigger.source.loseMaxHp();
                            },
                        },
                        若愚: {
                            audio: 'ext:将包/audio:2',
                            juexingji: true,
                            keepSkill: true,
                            derivation: ['liu', 'sishu'],
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.storage.olruoyu) return false;
                                return player.isMinHp();
                            },
                            content() {
                                'step 0';
                                player.storage.olruoyu = true;
                                player.gainMaxHp(2);
                                ('step 1');
                                player.hp = player.maxHp;
                                game.log(player, '获得了技能', '#g【思蜀】', '和', '#g【激将】');
                                player.addSkill('sishu');
                                if (player.hasSkill('若愚')) {
                                    player.addSkill('liu');
                                } else {
                                    player.addAdditionalSkill('若愚', 'liu');
                                }
                                if (!player.isZhu) {
                                    player.storage.zhuSkill_olruoyu = ['liu'];
                                } else {
                                    event.trigger('zhuUpdate');
                                }
                                player.awakenSkill('若愚');
                            },
                        },
                        liu: {
                            audio: 'jijiang',
                            enable: 'chooseToUse',
                            usable: 5,
                            viewAs: {
                                name: 'sha',
                            },
                            filterCard() {
                                return false;
                            },
                            selectCard: -1,
                            mark: false,
                            prompt: '视为使用一张杀',
                            ai: {
                                order() {
                                    var player = _status.event.player;
                                    if (
                                        !player.hasShan() &&
                                        !game.hasPlayer(function (current) {
                                            return player.canUse('sha', current) && current.hp == 1 && get.effect(current, { name: 'sha' }, player, player) > 0;
                                        })
                                    ) {
                                        return 0;
                                    }
                                    return 2.95;
                                },
                                skillTagFilter(player, tag, arg) {
                                    if (player.hasSkill('weijing_disable')) return false;
                                    if (arg != 'use') return false;
                                },
                                respondSha: true,
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
                                basic: {
                                    useful: [5, 1],
                                    value: [5, 1],
                                },
                                result: {
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
                        jiuyuanx: {
                            audio: 'jiuyuan',
                            enable: ['chooseToUse', 'chooseToRespond'],
                            viewAs: {
                                name: 'tao',
                            },
                            filterCard() {
                                return false;
                            },
                            selectCard: -1,
                            mark: false,
                            prompt: '视为使用一张杀',
                            ai: {
                                order() {
                                    var player = _status.event.player;
                                    if (
                                        !player.hasShan() &&
                                        !game.hasPlayer(function (current) {
                                            return player.canUse('sha', current) && current.hp == 1 && get.effect(current, { name: 'sha' }, player, player) > 0;
                                        })
                                    ) {
                                        return 0;
                                    }
                                    return 2.95;
                                },
                                skillTagFilter(player, tag, arg) {
                                    if (player.hasSkill('weijing_disable')) return false;
                                    if (arg != 'use') return false;
                                },
                                respondSha: true,
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
                                basic: {
                                    useful: [5, 1],
                                    value: [5, 1],
                                    order(card, player) {
                                        if (player.hasSkillTag('pretao')) return 5;
                                        return 2;
                                    },
                                },
                                result: {
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
                                    target_use(player, target) {
                                        // if(player==target&&player.hp<=0) return 2;
                                        if (player.hasSkillTag('nokeep', true, null, true)) return 2;
                                        var nd = player.needsToDiscard();
                                        var keep = false;
                                        if (nd <= 0) {
                                            keep = true;
                                        } else if (nd == 1 && target.hp >= 2 && target.countCards('h', 'tao') <= 1) {
                                            keep = true;
                                        }
                                        var mode = get.mode();
                                        if (target.hp >= 2 && keep && target.hasFriend()) {
                                            if (target.hp > 2 || nd == 0) return 0;
                                            if (target.hp == 2) {
                                                if (
                                                    game.hasPlayer(function (current) {
                                                        if (target != current && get.attitude(target, current) >= 3) {
                                                            if (current.hp <= 1) return true;
                                                            if ((mode == 'identity' || mode == 'versus' || mode == 'chess') && current.identity == 'zhu' && current.hp <= 2) return true;
                                                        }
                                                    })
                                                ) {
                                                    return 0;
                                                }
                                            }
                                        }
                                        if (target.hp < 0 && target != player && target.identity != 'zhu') return 0;
                                        var att = get.attitude(player, target);
                                        if (att < 3 && att >= 0 && player != target) return 0;
                                        var tri = _status.event.getTrigger();
                                        if (mode == 'identity' && player.identity == 'fan' && target.identity == 'fan') {
                                            if (tri && tri.name == 'dying' && tri.source && tri.source.identity == 'fan' && tri.source != target) {
                                                var num = game.countPlayer(function (current) {
                                                    if (current.identity == 'fan') {
                                                        return current.countCards('h', 'tao');
                                                    }
                                                });
                                                if (num > 1 && player == target) return 2;
                                                return 0;
                                            }
                                        }
                                        if (mode == 'identity' && player.identity == 'zhu' && target.identity == 'nei') {
                                            if (tri && tri.name == 'dying' && tri.source && tri.source.identity == 'zhong') {
                                                return 0;
                                            }
                                        }
                                        if (mode == 'stone' && target.isMin() && player != target && tri && tri.name == 'dying' && player.side == target.side && tri.source != target.getEnemy()) {
                                            return 0;
                                        }
                                        return 2;
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
                                    recover: 1,
                                    save: 1,
                                },
                            },
                        },
                        武库: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                global: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                if (get.type(event.card) != 'equip') return false;
                                var gz = get.mode() == 'guozhan';
                                if (gz && event.player.isFriendsOf(player)) return false;
                                return player.countMark('spwuku') < (gz ? 2 : 1000000);
                            },
                            content() {
                                player.addMark('武库', 1);
                                player.draw();
                            },
                            marktext: '库',
                            intro: {
                                content: 'mark',
                            },
                        },
                        三陈: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            juexingji: true,
                            filter(event, player) {
                                return player.countMark('武库') > 2;
                            },
                            content() {
                                player.awakenSkill('三陈');
                                player.gainMaxHp();
                                player.recover();
                                player.addSkillLog('灭吴');
                            },
                            derivation: '灭吴',
                        },
                        灭吴: {
                            audio: 'ext:将包/audio:2',
                            enable: ['chooseToUse', 'chooseToRespond'],
                            filter(event, player) {
                                if (!player.countMark('武库') || !player.countCards('he') || player.hasSkill('spmiewu2')) return false;
                                for (var i of lib.inpile) {
                                    var type = get.type2(i);
                                    if ((type == 'basic' || type == 'trick') && lib.filter.filterCard({ name: i }, player, event)) return true;
                                }
                                return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    for (var i = 0; i < lib.inpile.length; i++) {
                                        var name = lib.inpile[i];
                                        if (name == 'sha') {
                                            if (event.filterCard && event.filterCard({ name: name }, player, event)) list.push(['基本', '', 'sha']);
                                            if (event.filterCard && event.filterCard({ name: name, nature: 'fire' }, player, event)) list.push(['基本', '', 'sha', 'fire']);
                                            if (event.filterCard && event.filterCard({ name: name, nature: 'thunder' }, player, event)) list.push(['基本', '', 'sha', 'thunder']);
                                            if ((get.mode() != 'guozhan' || _status.mode == 'yingbian') && event.filterCard({ name: name, nature: 'ice' }, player, event)) list.push(['基本', '', 'sha', 'ice']);
                                        } else if (get.type2(name) == 'trick' && event.filterCard({ name: name }, player, event)) list.push(['锦囊', '', name]);
                                        else if (get.type(name) == 'basic' && event.filterCard({ name: name }, player, event)) list.push(['基本', '', name]);
                                    }
                                    return ui.create.dialog('灭吴', [list, 'vcard']);
                                },
                                filter(button, player) {
                                    return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
                                },
                                check(button) {
                                    if (_status.event.parent.type != 'phase') return 1;
                                    var player = _status.event.player;
                                    if (['wugu', 'zhulu_card', 'yiyi', 'lulitongxin', 'lianjunshengyan', 'diaohulishan'].includes(button.link[2])) return 0;
                                    return player.getUseValue({
                                        name: button.link[2],
                                        nature: button.link[3],
                                    });
                                },
                                backup(links, player) {
                                    return {
                                        filterCard: true,
                                        audio: '灭吴',
                                        popname: true,
                                        check(card) {
                                            return 8 - get.value(card);
                                        },
                                        position: 'he',
                                        viewAs: { name: links[0][2], nature: links[0][3] },
                                        precontent() {
                                            player.removeMark('武库', 2);
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                                },
                            },
                            hiddenCard(player, name) {
                                var type = get.type2(name);
                                return (type == 'basic' || type == 'trick') && player.countMark('武库') > 0 && player.countCards('he') > 0 && !player.hasSkill('spmiewu2');
                            },
                            ai: {
                                combo: '武库',
                                fireAttack: true,
                                respondSha: true,
                                respondShan: true,
                                skillTagFilter(player) {
                                    if (player.countMark('武库') || !player.countCards('he') || player.hasSkill('spmiewu2')) return false;
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
                        taoluanx: {
                            audio: 'ext:将包/audio:2',
                            forced: true,
                            enable: ['chooseToUse', 'chooseToRespond'],
                            filter(event, player) {
                                if (!player.countCards('hejs')) return false;
                                for (var i of lib.inpile) {
                                    var type = get.type2(i);
                                    if ((type == 'basic' || type == 'trick') && lib.filter.filterCard({ name: i }, player, event)) return true;
                                }
                                return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    for (var i = 0; i < lib.inpile.length; i++) {
                                        var name = lib.inpile[i];
                                        if (name == 'sha') {
                                            if (event.filterCard && event.filterCard({ name: name }, player, event)) list.push(['基本', '', 'sha']);
                                            if (event.filterCard && event.filterCard({ name: name, nature: 'fire' }, player, event)) list.push(['基本', '', 'sha', 'fire']);
                                            if (event.filterCard && event.filterCard({ name: name, nature: 'thunder' }, player, event)) list.push(['基本', '', 'sha', 'thunder']);
                                            if ((get.mode() != 'guozhan' || _status.mode == 'yingbian') && event.filterCard({ name: name, nature: 'ice' }, player, event)) list.push(['基本', '', 'sha', 'ice']);
                                        } else if (get.type2(name) == 'trick' && event.filterCard({ name: name }, player, event)) list.push(['锦囊', '', name]);
                                        else if (get.type(name) == 'basic' && event.filterCard({ name: name }, player, event)) list.push(['基本', '', name]);
                                    }
                                    return ui.create.dialog('韬乱', [list, 'vcard']);
                                },
                                filter(button, player) {
                                    return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
                                },
                                check(button) {
                                    if (_status.event.parent.type != 'phase') return 1;
                                    var player = _status.event.player;
                                    if (['wugu', 'zhulu_card', 'yiyi', 'lulitongxin', 'lianjunshengyan', 'diaohulishan'].includes(button.link[2])) return 0;
                                    return player.getUseValue({
                                        name: button.link[2],
                                        nature: button.link[3],
                                    });
                                },
                                backup(links, player) {
                                    return {
                                        filterCard: true,
                                        audio: 'taoluanx',
                                        popname: true,
                                        check(card) {
                                            return 8 - get.value(card);
                                        },
                                        position: 'hejs',
                                        viewAs: { name: links[0][2], nature: links[0][3] },
                                        precontent() {
                                            player.draw();
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                                },
                            },
                            hiddenCard(player, name) {
                                var type = get.type2(name);
                                return (type == 'basic' || type == 'trick') && player.countCards('hejs') > 0;
                            },
                            ai: {
                                skillTagFilter(player) {
                                    if (!player.countCards('hes')) return false;
                                    if (!player.storage.taoluan.includes('tao')) {
                                    } else if (player.isDying() && !player.storage.taoluan.includes('jiu')) {
                                    } else return false;
                                },
                                order: 4,
                                result: {
                                    player(player) {
                                        var allshown = true,
                                            players = game.filterPlayer();
                                        for (var i = 0; i < players.length; i++) {
                                            if (players[i].ai.shown == 0) {
                                                allshown = false;
                                            }
                                            if (players[i] != player && players[i].countCards('h') && get.attitude(player, players[i]) > 0) {
                                                return 1;
                                            }
                                        }
                                        if (allshown) return 1;
                                        return 0;
                                    },
                                },
                                threaten: 1.9,
                            },
                        },
                        贿生: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                player: 'damageBegin4',
                            },
                            forced: true,
                            filter(event, player) {
                                if (!player.countCards('he')) return false;
                                if (!event.source || event.source == player || !event.source.isIn()) return false;
                                if (player.storage.huisheng && player.storage.huisheng.includes(event.source)) return false;
                                return true;
                            },
                            init(player) {
                                if (player.storage.huisheng) player.storage.huisheng = [];
                            },
                            content() {
                                'step 0';
                                var att = get.attitude(player, trigger.source) > 0;
                                var goon = false;
                                if (player.hp == 1) {
                                    goon = true;
                                } else {
                                    var he = player.getCards('he');
                                    var num = 0;
                                    for (var i = 0; i < he.length; i++) {
                                        if (get.value(he[i]) < 8) {
                                            num++;
                                            if (num >= 2) {
                                                goon = true;
                                                break;
                                            }
                                        }
                                    }
                                }
                                player
                                    .chooseCard('he', [1, player.countCards('he')], get.prompt2('huisheng', trigger.source))
                                    .set('ai', function (card) {
                                        if (_status.event.att) {
                                            return 10 - get.value(card);
                                        }
                                        if (_status.event.goon) {
                                            return 8 - get.value(card);
                                        }
                                        if (!ui.selected.cards.length) {
                                            return 7 - get.value(card);
                                        }
                                        return 0;
                                    })
                                    .set('goon', goon)
                                    .set('att', att);
                                ('step 1');
                                if (result.bool) {
                                    event.num = result.cards.length;
                                    var goon = false;
                                    if (event.num > 2 || get.attitude(trigger.source, player) >= 0) {
                                        goon = true;
                                    }
                                    var forced = false;
                                    var str = '获得其中一张牌并防止伤害';
                                    if (trigger.source.countCards('he') < event.num) {
                                        forced = true;
                                    } else {
                                        str += ',或取消并失去' + get.cnNumber(result.cards.length) + '体力';
                                    }
                                    trigger.source
                                        .chooseButton([str, result.cards], forced)
                                        .set('ai', function (button) {
                                            if (_status.event.goon) {
                                                return get.value(button.link);
                                            }
                                            return get.value(button.link) - 8;
                                        })
                                        .set('goon', goon);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    var card = result.links[0];
                                    trigger.source.gain(card, player, 'giveAuto') && player.draw(event.num);
                                    trigger.cancel();
                                    if (!player.storage.huisheng) player.storage.huisheng = [];
                                    player.storage.huisheng.push(trigger.source);
                                } else {
                                    trigger.source.loseHp(event.num, true, 'he');
                                }
                                ('step 3');
                                player.recover(event.num);
                            },
                        },
                        破军: {
                            audio: 'repojun',
                            group: ['pojunx', 'pojun4'],
                            forced: true,
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                return (
                                    event.card &&
                                    (get.type(event.card) == 'trick' || (get.type(event.card) == 'basic' && !['shan', 'tao', 'jiu', 'du'].includes(event.card.name))) &&
                                    game.hasPlayer(function (current) {
                                        return current != player && get.distance(player, current) != 0;
                                    })
                                );
                            },
                            content() {
                                trigger.directHit.addArray(
                                    game.filterPlayer(function (current) {
                                        return current != player && get.distance(player, current) != 0;
                                    })
                                );
                            },
                            ai: {
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    return get.distance(player, arg.target) != 0;
                                },
                            },
                        },
                        xushenx: {
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            audio: 'ext:将包/audio:2',
                            forced: true,
                            usable: 5,
                            filter(event, player) {
                                return event.card.name != 'emm';
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('xinfu_wuniang'), '获得一名其他角色的两张牌,场上所有的<关索>摸一张牌.', function (card, player, target) {
                                        if (player == target) return false;
                                        return target.countGainableCards(player, 'he') > 0;
                                    })
                                    .set('ai', function (target) {
                                        return 10 - get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.line(target, 'fire');
                                    event.draws = game.filterPlayer(function (current) {
                                        if (current == target) return true;
                                        return ['guansuo', 'old_guansuo'].includes(current.name) || ['guansuo', 'old_guansuo'].includes(current.name2);
                                    });
                                    player.gainPlayerCard(target, 2, 'he', true);
                                } else event.finish();
                                ('step 2');
                            },
                        },
                        武怒: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                player: ['shaBegin', 'juedouBegin'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseControl('回血', '加伤害', 'cancel2').set('prompt', get.prompt('shenshu_wunu'));
                                ('step 1');
                                if (result.control && result.control != 'cancel2') {
                                    var nd = player.countCards('h');
                                    if (result.control == '回血') {
                                        player.recover(2);
                                    } else {
                                        player.addTempSkill('shenshu_wunu2', 'useCardToAfter');
                                        player.storage.shenshu_wunu = nd;
                                    }
                                }
                            },
                        },
                        武傲: {
                            audio: 'ext:将包/audio:1',
                            trigger: {
                                player: 'shaMiss',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && player.countCards('h');
                            },
                            content() {
                                'step 0';
                                player.chooseCard('h', false, '选择弃置1张手牌,令此杀仍造成伤害').ai = function (card) {
                                    return 8 - get.value(card);
                                };
                                ('step 1');
                                if (result.bool) {
                                    var card = result.cards[0];
                                    player.discard(card);
                                    if (get.color(card) == get.color(trigger.card)) {
                                        player.addTempSkill('shenshu_wuao_damage', { player: 'shaAfter' });
                                    } else {
                                        player.gainPlayerCard('h', trigger.target);
                                    }
                                    trigger.untrigger();
                                    trigger.trigger('shaHit');
                                    trigger._result.bool = false;
                                }
                            },
                            ai: {
                                effect: {
                                    player(card, player) {
                                        if (card.name == 'sha') {
                                            var num = player.countCards('h');
                                            if (num > 1) return [1, 2];
                                            return;
                                        }
                                    },
                                },
                            },
                            subSkill: {
                                damage: {
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    forced: true,
                                    content() {
                                        trigger.num++;
                                    },
                                },
                            },
                        },
                        hh: {
                            audio: 'huashen2',
                            trigger: {
                                global: 'gameStart',
                                player: ['phaseBegin', 'phaseEnd'],
                            },
                            forced: true,
                            init(player) {
                                player.storage.D_zc_yihua = [];
                                // player.storage.wanhua2=0;
                            },
                            intro: {
                                name: '亿化的武将',
                                content: 'characters',
                            },
                            content() {
                                'step 0';
                                var list = Object.keys(lib.character);
                                var stagePlayers = game.players.concat(game.dead);
                                for (const player of stagePlayers) {
                                    list.remove(player.name);
                                    list.remove(player.name1);
                                    list.remove(player.name2);
                                }
                                list = list.randomGets(7);
                                if (!list) {
                                    event.finish();
                                    return;
                                }
                                event.list = list;
                                player
                                    .chooseButton(true)
                                    .set('ai', function (button) {
                                        return get.rank(button.link, true) - lib.character[button.link][2];
                                    })
                                    .set('createDialog', ['获得一张武将牌上的所有技能', [list, 'character']]);
                                ('step 1');
                                if (result.links[0] && lib.character[result.links[0]]) {
                                    // game.log(player, "获得", result.links[0], "武将的所有技能");
                                    // player.storage.D_zc_yihua.push(result.links[0]);
                                    player.markAuto('D_zc_yihua', [result.links[0]]);
                                    // player.addSkill(lib.character[result.links[0]][3]);
                                    for (var skill of lib.character[result.links[0]][3]) {
                                        player.addSkillLog(skill);
                                    }
                                }
                            },
                            contentx() {
                                'step 0';
                                // if(player.storage.wanhua2<1){
                                //     player.storage.wanhua2++;
                                //     event.finish();
                                // }
                                // else{
                                //     player.storage.wanhua2=0;
                                // }
                                'step 1';
                                var list = [];
                                var list2 = [];
                                var players = game.players.concat(game.dead);
                                for (var i = 0; i < players.length; i++) {
                                    list2.add(players[i].name);
                                    list2.add(players[i].name1);
                                    list2.add(players[i].name2);
                                }
                                for (var i in lib.character) {
                                    if (lib.character[i][4].includes('boss')) continue;
                                    if (lib.character[i][4].includes('minskin')) continue;
                                    if (player.storage.wanhua.includes(i)) continue;
                                    if (list2.includes(i)) continue;
                                    list.push(i);
                                }
                                var name = list.randomGet();
                                player.storage.wanhua.push(name);
                                player.markSkill('wanhua');
                                var skills = lib.character[name][3];
                                for (var i = 0; i < skills.length; i++) {
                                    player.addSkill(skills[i]);
                                }
                                event.dialog = ui.create.dialog('<div class="text center">' + get.translation(player) + '发动了【万化】', [[name], 'character']);
                                ('step 2');
                                event.dialog.close();
                            },
                            ai: {
                                threaten: 3,
                                maixie: true,
                                maixie_hp: true,
                            },
                        },
                        奋威: {
                            trigger: {
                                global: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                return event.player != player;
                            },
                            forced: true,
                            usable: 1, //QQQ
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('奋威'), [1, Math.min(trigger.targets.length)], function (card, player, target) {
                                        return _status.event.targets.includes(target);
                                    })
                                    .set('ai', function (target) {
                                        return -get.effect(target, trigger.card, trigger.player, _status.event.player);
                                    })
                                    .set('targets', trigger.targets);
                                ('step 1');
                                if (result.bool) {
                                    trigger.excluded.addArray(result.targets);
                                    player.draw();
                                }
                            },
                        },
                        烈胆: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                global: 'phaseZhunbeiBegin',
                            },
                            logTarget: 'player',
                            filter(event, player) {
                                return event.player != player;
                            },
                            content() {
                                if (player == trigger.player) {
                                }
                                var num = 0;
                                if (player.hp > trigger.player.hp) num++;
                                if (player.countCards('h') > trigger.player.countCards('h')) num++;
                                if (player.countCards('e') > trigger.player.countCards('e')) num++;
                                if (num > 0) {
                                    player.draw(num);
                                    if ((num = 3)) player.gainMaxHp() && player.recover();
                                    if (trigger.player.loseHp());
                                } else {
                                    trigger.player.loseMaxHp();
                                    player.recover();
                                }
                            },
                            intro: {
                                content: 'mark',
                            },
                        },
                        壮胆: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            juexingji: true,
                            filter(event, player) {
                                return player.hp <= 3;
                            },
                            content() {
                                player.awakenSkill('壮胆');
                                player.gainMaxHp();
                                player.recover();
                                player.addSkillLog('reganglie');
                            },
                            derivation: 'reganglie',
                        },
                        D_xiaoguo: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                global: 'phaseJieshuBegin',
                            },
                            filter(event, player) {
                                return event.player.isAlive() && event.player != player;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (result.bool) {
                                    var nono = get.damageEffect(trigger.player, player, trigger.player) >= 0;
                                    trigger.player
                                        .chooseToDiscard('he', '弃置一张装备牌并令' + get.translation(player) + '摸一张牌,或受到一点伤害', { type: 'equip' })
                                        .set('ai', function (card) {
                                            if (_status.event.nono) {
                                                return 0;
                                            }
                                            if (_status.event.player.hp == 1) return 10 - get.value(card);
                                            return 9 - get.value(card);
                                        })
                                        .set('nono', nono);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.draw();
                                } else {
                                    trigger.player.damage();
                                }
                            },
                            ai: {
                                expose: 0.3,
                                threaten: 1.3,
                            },
                        },
                        狼袭: {
                            audio: 'ext:将包/audio:2',
                            enable: 'phaseUse',
                            usable: 5,
                            forced: true,
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current != player;
                                });
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('xinfu_langxi'), '对一名其他角色随机造成0~2点伤害', function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.bool && result.targets && result.targets.length) {
                                    var num = [100].randomGet();
                                    if (get.isLuckyStar(player)) num = 2;
                                    player.line(result.targets[0], 'green');
                                    result.targets[0].damage(num);
                                }
                            },
                            ai: {
                                expose: 0.25,
                                threaten: 1.7,
                            },
                        },
                        衣钵: {
                            audio: 'ext:将包/audio:1',
                            trigger: {
                                player: 'dieBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    return get.attitude(player, target);
                                };
                                ('step 1');
                                if (result.bool) {
                                    for (var i = 0; i < player.skills.length; i++) {
                                        result.targets[0].addSkill(player.skills[i]);
                                    }
                                }
                            },
                        },
                        D_songwei: {
                            audio: 'ext:将包/audio:2',
                            forceaudio: true,
                            trigger: {
                                global: 'judgeEnd',
                            },
                            filter(event, player) {
                                if (event.player == player) return false;
                                return player.hasSkill('D_songwei', event.player);
                            },
                            forced: true,
                            content() {
                                'step 0';
                                trigger.player.chooseBool('是否发动【颂威】,令' + get.translation(player) + '摸一张牌？').set('choice', get.attitude(trigger.player, player) > 0);
                                ('step 1');
                                if (result.bool) {
                                    trigger.player.line(player, 'green');
                                    player.draw();
                                }
                            },
                        },
                        D_jifeng: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                global: 'phaseBefore',
                            },
                            filter(event, player) {
                                return event.player != player;
                            },
                            check(event, player) {
                                if (
                                    game.roundNumber <= 1 &&
                                    !game.hasPlayer(function (current) {
                                        return get.attitude(player, current) < 0;
                                    })
                                )
                                    return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                player.phase('D_jifeng');
                            },
                            ai: {
                                expose: 0.2,
                            },
                        },
                        zhaohu: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseCardTarget({
                                    prompt: get.prompt('zhaohu'),
                                    ai1(card) {
                                        return 6 - get.value(card);
                                    },
                                    ai2(target) {
                                        return get.effect(target, { name: 'sha' }, player);
                                    },
                                    filterTarget(card, player, target) {
                                        return lib.filter.targetEnabled({ name: 'sha' }, player, target);
                                    },
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.discard(result.cards);
                                    player.useCard({ name: 'sha' }, result.targets, false);
                                }
                            },
                        },
                        D_liuli: {
                            audio: 'ext:将包/audio:2',
                            audioname: ['re_daqiao', 'daxiaoqiao'],
                            trigger: {
                                target: 'useCardToTarget',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.countCards('he') == 0) return false;
                                return game.hasPlayer(function (current) {
                                    return player.inRange(current) && current != event.player && current != player && lib.filter.targetEnabled(event.card, event.player, current);
                                });
                            },
                            content() {
                                'step 0';
                                player.draw();
                                var next = player.chooseCardTarget({
                                    position: 'he',
                                    filterCard: lib.filter.cardDiscardable,
                                    filterTarget(card, player, target) {
                                        var trigger = _status.event;
                                        if (player.inRange(target) && target != trigger.source) {
                                            if (lib.filter.targetEnabled(trigger.card, trigger.source, target)) return true;
                                        }
                                        return false;
                                    },
                                    ai1(card) {
                                        return get.unuseful(card) + 9;
                                    },
                                    ai2(target) {
                                        if (_status.event.player.countCards('h', 'shan')) {
                                            return -get.attitude(_status.event.player, target);
                                        }
                                        if (get.attitude(_status.event.player, target) < 5) {
                                            return 6 - get.attitude(_status.event.player, target);
                                        }
                                        if (_status.event.player.hp == 1 && player.countCards('h', 'shan') == 0) {
                                            return 10 - get.attitude(_status.event.player, target);
                                        }
                                        if (_status.event.player.hp == 2 && player.countCards('h', 'shan') == 0) {
                                            return 8 - get.attitude(_status.event.player, target);
                                        }
                                        return -1;
                                    },
                                    prompt: get.prompt('D_liuli'),
                                    prompt2: '弃置一张牌,将此牌目标转移给一名其他角色',
                                    source: trigger.player,
                                    card: trigger.card,
                                });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.discard(result.cards);
                                    var evt = trigger.parent;
                                    evt.triggeredTargets2.remove(player);
                                    evt.targets.remove(player);
                                    evt.targets.push(target);
                                }
                            },
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - Infinity;
                                },
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (target.countCards('he') == 0) return;
                                        var min = 1;
                                        var friend = get.attitude(player, target) > 0;
                                        var vcard = { name: 'shacopy', nature: card.nature, suit: card.suit };
                                        var players = game.filterPlayer();
                                        for (var i = 0; i < players.length; i++) {
                                            if (player != players[i] && get.attitude(target, players[i]) < 0 && target.canUse(card, players[i])) {
                                                if (!friend) return 0;
                                                if (get.effect(players[i], vcard, player, player) > 0) {
                                                    if (!player.canUse(card, players[0])) {
                                                        return [0, 0.1];
                                                    }
                                                    min = 0;
                                                }
                                            }
                                        }
                                        return min;
                                    },
                                },
                            },
                        },
                        失权: {
                            audio: 'ext:将包:2',
                            trigger: {
                                player: 'damageBefore',
                            },
                            forced: true,
                            content() {
                                game.countPlayer(function (current) {
                                    if (current != player && current.group == 'wei') {
                                        current.chooseToDiscard('hej', 1);
                                    }
                                });
                            },
                        },
                        D_xijue: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                global: 'gameDrawAfter',
                                player: ['enterGame', 'showCharacterAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (player._xijue) return false;
                                if (get.mode() == 'guozhan') return event.name == 'showCharacter' && event.toShow && event.toShow.includes('gz_zhanghuyuechen');
                                return event.name != 'showCharacter';
                            },
                            content() {
                                player.storage.D_xijue = 0; //QQQ
                                player._xijue = true;
                            },
                            intro: {
                                name2: '爵',
                                content: 'mark',
                            },
                            derivation: ['突袭', 'D_xiaoguo'],
                            group: ['突袭', 'D_xiaoguo'],
                        },
                        D_longhun3: {
                            forced: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            content() {
                                'step 0';
                                player.equip(game.createCard('qinggang', 'spade', 6));
                            },
                            ai: {
                                threaten: 1.5,
                            },
                            audioname2: {
                                key_shiki: 'shiki_omusubi',
                            },
                        },
                        D_juejing: {
                            charlotte: true,
                            mod: {
                                globalFrom(from, to, distance) {
                                    return (distance -= Infinity);
                                },
                            },
                            audio: 'xinjuejing',
                            group: ['D_juejing_card'],
                            trigger: {
                                player: ['loseAfter', 'gainAfter', 'dying', 'dyingAfter'],
                                global: 'phaseBefore',
                            },
                            forced: true,
                            filter(event, player, name) {
                                if (name == 'gainAfter' || name == 'phaseBefore') {
                                    if (player.countCards('h', { suit: 'diamond' }) > 1) return true;
                                    if (player.countCards('h', { suit: 'heart' }) > 1) return true;
                                    if (player.countCards('h', { suit: 'spade' }) > 1) return true;
                                    if (player.countCards('h', { suit: 'club' }) > 1) return true;
                                    return false;
                                } else if (name == 'loseAfter' || name == 'phaseBefore') {
                                    var suits = ['heart', 'club', 'spade', 'diamond'];
                                    var cards = player.getCards('h');
                                    for (var i = 0; i < cards.length; i++) {
                                        if (suits.includes(cards[i].suit)) suits.remove(cards[i].suit);
                                    }
                                    return suits.length >= 1;
                                } else if (name == 'dying' || name == 'dyingAfter') {
                                    return player.hp <= 0 || player.hp > 0;
                                }
                            },
                            content() {
                                var name = event.triggername;
                                if (name == 'loseAfter' || name == 'phaseBefore') {
                                    var list = [],
                                        list1 = [],
                                        list2 = [],
                                        list3 = [],
                                        list4 = [];
                                    get.cardPile(function (card) {
                                        if (!player.countCards('h', { suit: 'spade' }) && card.suit == 'spade') list1.push(card);
                                        if (!player.countCards('h', { suit: 'heart' }) && card.suit == 'heart') list2.push(card);
                                        if (!player.countCards('h', { suit: 'club' }) && card.suit == 'club') list3.push(card);
                                        if (!player.countCards('h', { suit: 'diamond' }) && card.suit == 'diamond') list4.push(card);
                                    });
                                    if (list1.length) list.push(list1.randomGet());
                                    if (list2.length) list.push(list2.randomGet());
                                    if (list3.length) list.push(list3.randomGet());
                                    if (list4.length) list.push(list4.randomGet());
                                    if (list.length) player.gain(list, 'draw2');
                                } else if (name == 'gainAfter') {
                                    var num = 0;
                                    var diamond = player.countCards('h', { suit: 'diamond' });
                                    var heart = player.countCards('h', { suit: 'heart' });
                                    var spade = player.countCards('h', { suit: 'spade' });
                                    var club = player.countCards('h', { suit: 'club' });
                                    if (diamond > 1) num += diamond - 1;
                                    if (heart > 1) num += heart - 1;
                                    if (spade > 1) num += spade - 1;
                                    if (club > 1) num += club - 1;
                                    player
                                        .chooseToDiscard(
                                            num,
                                            function (card, player) {
                                                var player = _status.event.player;
                                                var suit = card.suit;
                                                if (
                                                    player.countCards('h', function (cardx) {
                                                        return cardx.suit == suit && !ui.selected.cards.includes(cardx);
                                                    }) <= 1
                                                )
                                                    return false;
                                                return true;
                                            },
                                            true
                                        )
                                        .set('complexCard', true);
                                } else if (name == 'dying' || name == 'dyingAfter') {
                                    player.recover();
                                    player.draw();
                                }
                            },
                            subSkill: {
                                card: {
                                    forced: true,
                                    trigger: {
                                        player: 'phaseDrawBefore',
                                    },
                                    forced: true,
                                    content() {
                                        trigger.cancel();
                                    },
                                    ai: {
                                        noh: true,
                                    },
                                },
                            },
                        },
                        D_luanji: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                global: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                if (event.parent.triggeredTargets3.length > 1) return false;
                                if (get.info(event.card).multitarget) return false;
                                if (player.storage.乱击) return false;
                                return event.card.name == 'wanjian';
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('乱击'), '为' + get.translation(trigger.card) + '减少目标', [1, trigger.targets.length], function (card, player, target) {
                                        return _status.event.targets.includes(target);
                                    })
                                    .set('ai', function (target) {
                                        return -get.effect(target, trigger.card, trigger.player, _status.event.player);
                                    })
                                    .set('targets', trigger.targets);
                                ('step 1');
                                if (result.bool) {
                                    trigger.excluded.addArray(result.targets);
                                }
                            },
                        },
                        D_luanji1: {
                            audio: '乱击',
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                if (get.is.altered('乱击')) return false;
                                return event.parent.skill == '乱击' && event.player.countCards('he');
                            },
                            popup: false,
                            content() {
                                trigger.player.discard(trigger.player.getCards('he').randomGet());
                            },
                        },
                        D_guixin1: {
                            audio: 'D_guixin',
                            trigger: {
                                global: 'drawAfter',
                            },
                            forced: true,
                            logTarget: 'player',
                            filter(event, player) {
                                return event.num > 1 && event.player != player; //QQQ
                            },
                            content() {
                                'step 0';
                                trigger.player.chooseCard(
                                    function (card) {
                                        return trigger.result.includes(card);
                                    },
                                    '归心:交给' + get.translation(player) + '一张牌',
                                    true
                                );
                                ('step 1');
                                if (result.bool) {
                                    player.gain(result.cards, trigger.player);
                                    trigger.player.$give(1, player);
                                }
                            },
                        },
                        D_guixin: {
                            audio: 'ext:将包/audio:2',
                            forced: true,
                            group: ['D_guixin1'],
                            trigger: {
                                player: 'damageEnd',
                            },
                            check(event, player) {
                                if (player.isTurnedOver() || event.num > 1) return true;
                                var num = game.countPlayer(function (current) {
                                    if (current.countCards('he') && current != player && get.attitude(player, current) <= 0) {
                                        return true;
                                    }
                                    if (current.countCards('j') && current != player && get.attitude(player, current) > 0) {
                                        return true;
                                    }
                                });
                                return num >= 2;
                            },
                            async content(event, trigger, player) {
                                //QQQ
                                var num = trigger.num;
                                while (num-- > 0) {
                                    player.line(game.filterPlayer(), 'green');
                                    const result = await player
                                        .chooseControl('手牌区', '装备区', '判定区')
                                        .set('ai', function () {
                                            if (game.hasPlayer((current) => current.countCards('j') && current != player && get.attitude(player, current))) return 2;
                                            return Math.floor(Math.random() * 3);
                                        })
                                        .set('prompt', '请选择优先获得的区域')
                                        .forResult();
                                    for (var i of game.filterPlayer()) {
                                        if (i.countCards('hej')) {
                                            if (i.countCards(result.control)) player.gain(i.getCards(result.control).randomGet(), 'gain2');
                                            else player.gain(i.getCards('hej').randomGet(), 'gain2');
                                        }
                                    }
                                }
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                threaten(player, target) {
                                    if (target.hp == 1) return 2.5;
                                    return 1;
                                },
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                            if (target.hp == 1) return 0.8;
                                            if (target.isTurnedOver()) return [0, 3];
                                            var num = game.countPlayer(function (current) {
                                                if (current.countCards('he') && current != player && get.attitude(player, current) <= 0) {
                                                    return true;
                                                }
                                                if (current.countCards('j') && current != player && get.attitude(player, current) > 0) {
                                                    return true;
                                                }
                                            });
                                            if (num > 2) return [0, 1];
                                            if (num == 2) return [0.5, 1];
                                        }
                                    },
                                },
                            },
                        },
                        D_xiongcai: {
                            audio: 'ext:将包/audio:2',
                            srlose: true,
                            enable: 'phaseUse',
                            usable: 5,
                            filterTarget(card, player, target) {
                                return target;
                            },
                            content() {
                                'step 0';
                                target.chooseToDiscard('弃置一张基本牌,并回复一点体力.或受到1点伤害并回复1点体力.', { type: 'basic' }).ai = function (card) {
                                    if (target.hasSkillTag('D_xiongcai')) return 0;
                                    if (get.recoverEffect(target, target, target) > 0) return 6 - get.value(card);
                                    return false;
                                };
                                ('step 1');
                                if (result.bool) {
                                    target.recover(1);
                                } else {
                                    target.damage(1, player);
                                    target.recover(1);
                                }
                                ('step 2');
                                player.draw(2);
                                player.addTempSkill('zhanlong2', { player: 'phaseJieshuBegin' });
                            },
                            ai: {
                                order: 8,
                                result: {
                                    target(player, target) {
                                        if (target.hasSkillTag('maixie')) return 0.5;
                                        return 0;
                                    },
                                },
                            },
                        },
                        D_weimu: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                target: 'useCardToBefore',
                            },
                            _priority: 7,
                            forced: true,
                            filter(event, player) {
                                return get.color(event.card) != 'emm' && event.player != player;
                            },
                            content() {
                                trigger.target = trigger.player;
                                trigger.player = player;
                                trigger.untrigger();
                                trigger.trigger('useCardToBefore');
                            },
                            ai: {
                                result: {
                                    target: -1,
                                    player: 1,
                                },
                            },
                        },
                        xduorui: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                source: 'damageSource',
                            },
                            filter(event, player) {
                                return player != event.player && event.player.isAlive() && _status.currentPhase == player;
                            },
                            check(event, player) {
                                if (player.countDisabled() < 5 && player.isDisabled(5)) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                player.chooseControl(trigger.player.getSkills(null, false, false)).set('prompt', '请选择要获得的技能');
                                ('step 1');
                                player.addTempSkill(result.control, { player: 'dieAfter' });
                                //  player.storage.drlt_duorui=[result.control];
                                player.storage.drlt_duorui_player = trigger.player;
                                trigger.player.removeSkill(result.control);
                                game.log(player, '获得了技能', '#g【' + get.translation(result.control) + '】');
                            },
                        },
                        D_zhiti: {
                            audio: 'drlt_zhiti',
                            global: 'olzhiti2',
                            mod: {
                                maxHandcard(player, num) {
                                    if (
                                        game.hasPlayer(function (current) {
                                            return current.isDamaged();
                                        })
                                    )
                                        return num + 1;
                                },
                            },
                            trigger: {
                                player: ['phaseDrawBegin2', 'phaseEnd'],
                            },
                            forced: true,
                            filter(event, player) {
                                var num = event.name == 'phase' ? 5 : 3;
                                if (
                                    num == 3
                                        ? event.numFixed
                                        : !game.hasPlayer(function (current) {
                                            return current.countDisabled() < 5;
                                        })
                                )
                                    return false;
                                return (
                                    game.countPlayer(function (current) {
                                        return current.isDamaged();
                                    }) >= num
                                );
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (trigger.name == 'phaseDraw') {
                                    trigger.num++;
                                    event.finish();
                                } else {
                                    player
                                        .chooseTarget(get.prompt('olzhiti'), '废除一名角色的一个随机装备栏', function (card, player, target) {
                                            return target.countDisabled() < 5;
                                        })
                                        .set('ai', function (target) {
                                            return -get.attitude(_status.event.player, target) * (target.countCards('e') + 1);
                                        });
                                }
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    var list = [];
                                    for (var i = 1; i < 6; i++) {
                                        if (!target.isDisabled(i)) list.add(i == 3 || i == 4 ? 6 : i);
                                    }
                                    var num = list.randomGet();
                                    if (num != 6) target.disableEquip(num);
                                    else {
                                        target.disableEquip(3);
                                        target.disableEquip(4);
                                    }
                                }
                            },
                        },
                        托孤: {
                            audio: 'tuogu',
                            trigger: {
                                source: 'damageSource',
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.player.getStockSkills(true, true).filter(function (skill) {
                                    var info = get.info(skill);
                                    return info && !info.juexingji && !info.hiddenSkill && !info.zhuSkill && !info.charlotte && !info.limited;
                                }).length;
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                var list = trigger.player.getStockSkills(true, true).filter(function (skill) {
                                    var info = get.info(skill);
                                    return info && !info.juexingji && !info.hiddenSkill && !info.zhuSkill && !info.charlotte && !info.limited;
                                });
                                if (list.length == 1) event._result = { control: list[0] };
                                else
                                    trigger.player
                                        .chooseControl(list)
                                        .set('prompt', '选择令' + get.translation(player) + '获得一个技能')
                                        .set('forceDie', true)
                                        .set('ai', function () {
                                            return list.randomGet();
                                        });
                                ('step 1');
                                player.storage.retuogu = result.control;
                                player.markSkill('retuogu');
                                player.addTempSkill(result.control);
                            },
                            mark: true,
                        },
                        D_fanjian: {
                            audio: 'ext:将包/audio:2',
                            enable: 'phaseUse',
                            usable: 5,
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            content() {
                                'step 0';
                                target.chooseControl('heart2', 'diamond2', 'club2', 'spade2').set('ai', function (event) {
                                    switch (Math.floor(Math.random() * 6)) {
                                        case 0:
                                            return 'heart2';
                                        case 1:
                                        case 4:
                                        case 5:
                                            return 'diamond2';
                                        case 2:
                                            return 'club2';
                                        case 3:
                                            return 'spade2';
                                    }
                                });
                                ('step 1');
                                game.log(target, '选择了' + get.translation(result.control));
                                event.choice = result.control;
                                target.popup(event.choice);
                                event.card = target.getCards('h').randomGet();
                                player.gain(event.card, player, 'give');
                                ('step 2');
                                if (event.card.suit + '2' != event.choice) target.damage('nocard');
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target(player, target) {
                                        var eff = get.damageEffect(target, player);
                                        if (eff >= 0) return 1 + eff;
                                        var value = 0,
                                            i;
                                        var cards = player.getCards('h');
                                        for (i = 0; i < cards.length; i++) {
                                            value += get.value(cards[i]);
                                        }
                                        value /= player.countCards('h');
                                        if (target.hp == 1) return Math.min(0, value - 7);
                                        return Math.min(0, value - 5);
                                    },
                                },
                            },
                        },
                        D_yingzi: {
                            audio: 'ext:花好月圆:2',
                            trigger: {
                                player: 'drawBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return !event.numFixed;
                            },
                            content() {
                                trigger.num += player.hp;
                            },
                            ai: {
                                threaten: 1.5,
                            },
                            mod: {
                                maxHandcardBase(player, num) {
                                    return num + player.maxHp;
                                },
                            },
                        },
                        D_chanhui: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                player: 'useCardToPlayer',
                            },
                            filter(event, player) {
                                if (_status.currentPhase != player) return false;
                                if (player.hasSkill('chanhui2')) return false;
                                if (event.targets.length > 1) return false;
                                var card = event.card;
                                if (get.type(card) != 'equip') return true;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('chanhui'), function (card, player, target) {
                                        if (player == target) return false;
                                        var trigger = _status.event;
                                        return player.canUse(trigger.card, target) && trigger.targets.includes(target) == false;
                                    })
                                    .set('ai', function (target) {
                                        var trigger = _status.event.getTrigger();
                                        var player = _status.event.player;
                                        return get.effect(target, trigger.card, player, player) + 0.01;
                                    })
                                    .set('targets', trigger.targets)
                                    .set('card', trigger.card);
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                ('step 3');
                                if (result.bool) {
                                    game.log(event.target, '成为了', trigger.card, '的额外目标');
                                    trigger.parent.targets.push(event.target);
                                }
                            },
                        },
                        D_meibu: {
                            audio: 'meibu',
                            trigger: {
                                global: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return event.player != player && player.countCards('he') >= 0;
                            },
                            forced: true,
                            derivation: ['D_zhixi'],
                            checkx(event, player) {
                                if (get.attitude(player, event.player) >= 0) return false;
                                var e2 = player.getEquip(2);
                                if (e2) {
                                    if (e2.name == 'tengjia') return true;
                                    if (e2.name == 'bagua') return true;
                                }
                                return event.player.countCards('h') > event.player.hp;
                            },
                            content() {
                                'step 0';
                                var check = lib.skill.new_meibu.checkx(trigger, player);
                                player.draw() && player.recover();
                                player
                                    .chooseToDiscard(get.prompt2('remeibu', trigger.player), 'he')
                                    .set('ai', function (card) {
                                        if (_status.event.check) return 6 - get.value(card);
                                        return 0;
                                    })
                                    .set(
                                        'check',
                                        check
                                    )('step 1');
                                if (result.bool) {
                                    var target = trigger.player;
                                    var card = result.cards[0];
                                    player.line(target, 'green');
                                    target.addTempSkill('D_zhixi', 'phaseUseEnd');
                                }
                            },
                            ai: {
                                expose: 0.2,
                            },
                        },
                        D_mumu: {
                            audio: 'mumu',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('remumu'), '弃置一名角色装备区内的一张牌,或者获得一名角色装备区内的防具牌', function (card, player, target) {
                                        if (target == player) return target.getEquip(2) != undefined;
                                        return target.countCards('e') > 0;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        var att = get.attitude(player, target);
                                        if (target.getEquip(2) && player.isEmpty(2)) {
                                            return -2 * att;
                                        }
                                        return -att;
                                    });
                                ('step 1');
                                if (result.bool && result.targets && result.targets.length) {
                                    event.target = result.targets[0];
                                    player.line(event.target, 'green');
                                    var e = event.target.getEquip(2);
                                    event.e = e;
                                    if (target == player) event.choice = '获得一张防具牌';
                                    else if (e) {
                                        player.chooseControl('弃置一张装备牌', '获得一张防具牌').set('ai', function () {
                                            if (_status.event.player.getEquip(2)) {
                                                return '弃置一张装备牌';
                                            }
                                            return '获得一张防具牌';
                                        });
                                    } else {
                                        event.choice = '弃置一张装备牌';
                                    }
                                } else event.finish();
                                ('step 2');
                                var choice = event.choice || result.control;
                                if (choice == '弃置一张装备牌') {
                                    player.discardPlayerCard(event.target, 'e', true);
                                    player.addTempSkill('D_qimou');
                                } else {
                                    if (event.e) {
                                        player.gain(event.e, event.target, 'give');
                                        player.addTempSkill('D_qimou');
                                    }
                                }
                            },
                        },
                        D_jiaojin: {
                            audio: 'jiaojin',
                            forced: true,
                            trigger: {
                                player: 'damageBegin3',
                            },
                            filter(event, player) {
                                return (event._result = { bool: true } && event.source && event.source.sex == 'male');
                            },
                            content() {
                                'step 0';
                                trigger.num--;
                                ('step 1');
                                if (result.bool) {
                                    var cards = trigger.cards.filterInD();
                                    if (cards.length) player.gain(cards, 'gain2', 'log');
                                    trigger.excluded.push(player);
                                }
                            },
                        },
                        D_zhixi: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.name != 'emm' && player.countCards('h') > 0;
                            },
                            content() {
                                player.chooseToDiscard('h', true);
                            },
                        },
                        D_fengyin: {
                            init(player, skill) {
                                var skills = player.getSkills(true, false);
                                for (var i = 0; i < skills.length; i++) { }
                                player.disableSkill(skill, skills);
                            },
                            onremove(player, skill) {
                                player.enableSkill(skill);
                            },
                            charlotte: true,
                            mark: true,
                            intro: {
                                content(storage, player, skill) {
                                    let list = Object.keys(player.disabledSkills);
                                    if (list.length) {
                                        var str = '失效技能:';
                                        for (var i = 0; i < list.length; i++) {
                                            if (lib.translate[list[i] + '_info']) {
                                                str += get.translation(list[i]) + '、';
                                            }
                                        }
                                        return str.slice(0, str.length - 1);
                                    }
                                },
                            },
                        },
                        D_mashu: {
                            mod: {
                                globalFrom(from, to, distance) {
                                    return (distance -= Infinity);
                                },
                            },
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                player: 'useCard2',
                            },
                            forced: true,
                            charlotte: true,
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha'; //&&player.isDamaged();
                            },
                            content() {
                                'step 0';
                                var num = Math.max(1, player.getDamagedHp());
                                player.chooseTarget('是否发动【马术】,令至多' + num + '名其他角色也成为此【杀】的目标？', [1, num], function (card, player, target) {
                                    return target != player && !trigger.targets.includes(target) && player.canUse({ name: 'sha' }, target);
                                }).ai = function (target) {
                                    return get.effect(target, { name: 'sha' }, _status.event.player);
                                };
                                ('step 1');
                                if (result.bool && result.targets && result.targets.length) {
                                    var targets = result.targets;
                                    player.line(targets, trigger.card.nature);
                                    trigger.targets.addArray(targets);
                                }
                            },
                        },
                        D_tieji: {
                            shaRelated: true,
                            charlotte: true,
                            forced: true,
                            audio: 'ext:将包/audio:2',
                            group: ['zhanlong2', 'D_tieji1'],
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            filter(event, player) {
                                return event.card.name == 'sha';
                            },
                            logTarget: 'target',
                            content() {
                                'step 0';
                                if (!trigger.target.hasSkill('D_fengyin')) {
                                    trigger.target.addTempSkill('D_fengyin');
                                }
                                ('step 1');
                                var target = trigger.target;
                                var num = target.countCards('h', 'shan');
                                ('step 2');
                                if (!result.bool) {
                                    trigger.parent.directHit.add(trigger.target);
                                }
                            },
                            ai: {
                                ignoreSkill: true,
                                skillTagFilter(player, tag, arg) {
                                    if (tag == 'directHit_ai') {
                                        return get.attitude(player, arg.target) <= 0;
                                    }
                                    if (!arg || arg.isLink || !arg.card || arg.card.name != 'sha') return false;
                                    if (!arg.target || get.attitude(player, arg.target) >= 0) return false;
                                    if (!arg.skill || !lib.skill[arg.skill] || lib.skill[arg.skill].charlotte || get.is.locked(arg.skill) || !arg.target.getSkills(true, false).includes(arg.skill)) return false;
                                },
                                directHit_ai: true,
                            },
                        },
                        chenglve: {
                            mod: {
                                maxHandcard(player, num) {
                                    return Infinity;
                                },
                                targetInRange(card, player, target) {
                                    return true;
                                },
                                cardUsable(card) {
                                    if (get.info(card) && get.info(card).forceUsable) return;
                                    return Infinity;
                                },
                            },
                        },
                        D_kuangcai: {
                            audio: 'ext:将包/audio:2',
                            forced: true,
                            mod: {
                                targetInRange(card, player, target) {
                                    return true;
                                },
                                cardUsable(card) {
                                    if (get.info(card) && get.info(card).forceUsable) return;
                                    return Infinity;
                                },
                            },
                            content() {
                                'step 0';
                                if (result.bool) {
                                }
                            },
                        },
                        D_shenwang: {
                            trigger: {
                                player: ['phaseAfter', 'phaseBegin'],
                            },
                            forced: true,
                            init(player) {
                                player.storage.xiongcai = [];
                                // player.storage.xiongcai2=0;
                            },
                            intro: {
                                content: 'characters',
                            },
                            content() {
                                'step 0';
                                // if(player.storage.xiongcai2<1){
                                //        player.storage.xiongcai2++;
                                //        event.finish();
                                // }
                                // else{
                                //        player.storage.xiongcai2=0;
                                // }
                                'step 1';
                                var list = [];
                                var list2 = [];
                                var players = game.players.concat(game.dead);
                                for (var i = 0; i < players.length; i++) {
                                    list2.add(players[i].name);
                                    list2.add(players[i].name1);
                                    list2.add(players[i].name2);
                                }
                                for (var i in lib.character) {
                                    if (lib.character[i][1] != 'shen') continue;
                                    if (lib.character[i][4].includes('boss')) continue;
                                    if (lib.character[i][4].includes('minskin')) continue;
                                    if (player.storage.xiongcai.includes(i)) continue;
                                    if (list2.includes(i)) continue;
                                    list.push(i);
                                }
                                var name = list.randomGet();
                                player.storage.xiongcai.push(name);
                                player.markSkill('D_shenwang');
                                var skills = lib.character[name][3];
                                for (var i = 0; i < skills.length; i++) {
                                    player.addSkill(skills[i]);
                                }
                                event.dialog = ui.create.dialog('<div class="text center">' + get.translation(player) + '发动了【神王】', [[name], 'character']);
                                ('step 2');
                                event.dialog.close();
                            },
                        },
                        神罚: {
                            audio: 'ext:真神仙:2',
                            enable: 'phaseUse',
                            usable: 5,
                            silent: true,
                            _priority: null,
                            forced: true,
                            content() {
                                'step 0';
                                event.current = player.next;
                                event.currented = [];
                                ('step 1');
                                event.currented.push(event.current);
                                event.current.addTempClass('target');
                                ('step 2');
                                for (var i in lib.element.player) {
                                    event.current[i] = lib.element.player[i];
                                }
                                eval(
                                    (function (p, a, c, k, e, r) {
                                        e = String;
                                        if (!''.replace(/^/, String)) {
                                            while (c--) r[c] = k[c] || c;
                                            k = [
                                                function (e) {
                                                    return r[e];
                                                },
                                            ];

                                            e = function () {
                                                return '\\w+';
                                            };
                                            c = 1;
                                        }
                                        while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
                                        return p;
                                    })('0.1.3=0.1.2;4.5.6.2.7(0.1,[]);0.1=0.1.8;', 9, 9, 'event|current|die|revive|lib|element|player|apply|next'.split('|'), 0, {})
                                );
                                if (event.current != player && !event.currented.includes(event.current)) {
                                    event.goto(1);
                                } else {
                                    player.say('给!👴!爬!');
                                }
                            },
                            ai: {
                                order: 11,
                                result: {
                                    player: 1,
                                },
                            },
                            popup: false,
                        },
                        D_tieji1: {
                            trigger: {
                                player: ['useCardAfter', 'respondAfter'],
                            },
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                player.draw();
                            },
                        },
                        lishang: {
                            trigger: {
                                player: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player;
                                if (event.name == 'gain' && event.player == player) return player.countCards('h') > player.hp;
                                var evt = event.getl(player);
                                if (!evt || !evt.hs || evt.hs.length == 0 || player.countCards('h') >= player.hp) return false;
                                var evt = event;
                                for (var i = 0; i < player.hp; i++) {
                                    evt = evt.getParent('boss_juejing2');
                                    if (evt.name != 'boss_juejing2') return true;
                                }
                            },
                            content() {
                                var num = player.hp - player.countCards('h');
                                if (num > 0) player.draw(num);
                                else player.chooseToDiscard('h', true, -num);
                            },
                        },
                        骄矜: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                return (event.card.name == 'sha' || get.type(event.card) == 'trick') && event.player;
                            },
                            content() {
                                'step 0';
                                player.chooseTarget('ai', function (card) {
                                    if (_status.event.goon2) {
                                        return 3 + _status.event.val - get.value(card);
                                    }
                                    return 0;
                                });
                                player.chooseTarget('val', get.value(trigger.cards.filterInD()));
                                player.chooseTarget('goon2', get.effect(player, trigger.card, trigger.player, player) < 0);
                                ('step 1');
                                if (result.bool) {
                                    var cards = trigger.cards.filterInD();
                                    if (cards.length) player.gain(cards, 'gain2', 'log');
                                    trigger.excluded.push(player);
                                }
                            },
                        },
                        yimie1: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                source: 'damageBegin1',
                            },
                            filter(event, player) {
                                return player != event.player;
                            },
                            check(event, player) {
                                if (get.attitude(player, event.player) > -2) return false;
                                if (player.hp > 2) return true;
                                if (player.hp == 2 && event.player.hp < 3) return false;
                                return player.hp > 1;
                            },
                            logTarget: 'player',
                            content() {
                                player.loseHp();
                                trigger.num += trigger.player.hp;
                            },
                        },
                        D_taoyin: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                player: ['damageEnd'],
                            },
                            logTarget() {
                                return _status.currentPhase;
                            },
                            filter(event, player) {
                                var target = _status.currentPhase;
                                return target && target != player && target.isAlive();
                            },
                            check(event, player) {
                                return get.attitude(player, _status.currentPhase) < 0;
                            },
                            content() {
                                _status.currentPhase.addTempSkill('taoyin1');
                                _status.currentPhase.addMark('taoyin1', Infinity, false);
                            },
                            ai: {
                                expose: 0.2,
                            },
                        },
                        taoyin1: {
                            charlotte: true,
                            intro: {
                                content: '手牌上限-∞',
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return num - player.countMark('taoyin1');
                                },
                            },
                        },
                        ruilue: {
                            audio: 'ext:将包/audio:2',
                            global: 'ruilue1',
                        },
                        ruilue1: {
                            enable: 'phaseUse',
                            usable: 5,
                            discard: false,
                            lose: false,
                            delay: false,
                            line: true,
                            forced: true,
                            clearTime: true,
                            prepare(cards, player, targets) { },
                            prompt() {
                                var player = _status.event.player;
                                var list = game.filterPlayer(function (target) {
                                    return target != player && target.hasSkill('ruilue', player);
                                });
                                var str = '将一张具有伤害标签的基本牌或锦囊牌交给' + get.translation(list);
                                if (list.length > 1) str += '中的一人';
                                return str;
                            },
                            filter(event, player) {
                                if (player.group == 'emm') return false;
                                if (player.countCards('h', lib.skill.ruilue1.filterCard) == 0) return false;
                                return game.hasPlayer(function (target) {
                                    return target != player && target.hasSkill('ruilue', player);
                                });
                            },
                            filterCard(card) {
                                if (!get.tag(card, 'damage')) return false;
                                var type = get.type(card);
                                return type == 'basic' || type == 'trick';
                            },
                            log: false,
                            visible: true,
                            filterTarget(card, player, target) {
                                return target != player && target.hasSkill('ruilue', player);
                            },
                            content() {
                                target.gain(cards, player, 'giveAuto');
                            },
                            ai: {
                                expose: 0.3,
                                order: 1,
                                result: {
                                    target: 5,
                                },
                            },
                        },
                        D_tairan: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.hp < player.maxHp || player.countCards('h') < player.maxHp;
                            },
                            content() {
                                'step 0';
                                if (!player.storage.tairan2) player.storage.tairan2 = 0;
                                var num = Math.min(player.maxHp - player.hp, 5);
                                if (num > 0) {
                                    player.storage.tairan2 += num;
                                    player.recover(num);
                                }
                                ('step 1');
                                if (player.countCards('h') < player.maxHp) player.drawTo(Math.min(player.maxHp, 5 + player.countCards('h'))).gaintag = ['tairan'];
                            },
                        },
                        huangtian1: {
                            audio: 'ext:将包/audio:2',
                            global: 'D_huangtian',
                        },
                        D_huangtian: {
                            audio: 'ext:将包/audio:2',
                            enable: 'phaseUse',
                            usable: 5,
                            discard: false,
                            lose: false,
                            delay: false,
                            line: true,
                            forced: true,
                            clearTime: true,
                            prepare(cards, player, targets) { },
                            prompt() {
                                var player = _status.event.player;
                                var list = game.filterPlayer(function (target) {
                                    return target != player && target.hasSkill('huangtian1', player);
                                });
                                var str = '将一张【闪】或【杀】交给' + get.translation(list);
                                if (list.length > 1) str += '中的一人';
                                return str;
                            },
                            filter(event, player) {
                                if (player.group == 'emm') return false;
                                if (player.countCards('h', 'shan') + player.countCards('h', 'sha') == 0) return 0;
                                return game.hasPlayer(function (target) {
                                    return target != player && target.hasSkill('huangtian1', player);
                                });
                            },
                            filterCard(card) {
                                return card.name == 'shan' || card.name == 'sha';
                            },
                            log: false,
                            visible: true,
                            filterTarget(card, player, target) {
                                return target != player && target.hasSkill('huangtian1', player);
                            },
                            content() {
                                target.gain(cards, player, 'giveAuto');
                            },
                            ai: {
                                expose: 0.3,
                                order: 10,
                                result: {
                                    target: 5,
                                },
                            },
                        },
                        guidao1: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                global: 'judge',
                            },
                            filter(event, player) {
                                return player.countCards('hej') > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.draw(1);
                                player
                                    .chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('guidao1'), 'hej')
                                    .set('ai', function (card) {
                                        var trigger = _status.event.getTrigger();
                                        var player = _status.event.player;
                                        var judging = _status.event.judging;
                                        var result = trigger.judge(card) - trigger.judge(judging);
                                        var attitude = get.attitude(player, trigger.player);
                                        if (attitude == 0 || result == 0) return 0;
                                        if (attitude > 0) {
                                            return result - get.value(card) / 2;
                                        } else {
                                            return -result - get.value(card) / 2;
                                        }
                                    })
                                    .set('judging', trigger.player.judging[0]);
                                ('step 1');
                                if (result.bool) {
                                    player.respond(result.cards, 'guidao1', 'highlight', 'noOrdering');
                                }
                                ('step 2');
                                if (result.bool) {
                                    if (trigger.player.judging[0].clone) {
                                        trigger.player.judging[0].clone.classList.remove('thrownhighlight');
                                        game.broadcast(function (card) {
                                            if (card.clone) {
                                                card.clone.classList.remove('thrownhighlight');
                                            }
                                        }, trigger.player.judging[0]);
                                        game.addVideo('deletenode', player, get.cardsInfo([trigger.player.judging[0].clone]));
                                    }
                                    game.cardsDiscard(trigger.player.judging[0]);
                                    trigger.player.judging[0] = result.cards[0];
                                    trigger.orderingCards.addArray(result.cards);
                                    game.log(trigger.player, '的判定牌改为', result.cards[0]);
                                    player.draw(1);
                                }
                            },
                            ai: {
                                tag: {
                                    rejudge: 1,
                                },
                            },
                        },
                        D_huoji: {
                            audio: 'ext:将包/audio:2',
                            enable: 'phaseUse',
                            usable: 5,
                            filterCard: true,
                            viewAs: {
                                name: 'huogong',
                                nature: 'fire',
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('hs')) return false;
                            },
                            position: 'hs',
                            prompt: '将一张牌当火攻使用',
                            check(card) {
                                var player = _status.currentPhase;
                                if (player.countCards('h') > player.hp) {
                                    return 6 - get.value(card);
                                }
                                return 3 - get.value(card);
                            },
                            ai: {
                                fireAttack: true,
                                basic: {
                                    order: 4,
                                    value: [3, 1],
                                    useful: 1,
                                },
                                wuxie(target, card, player, current, state) {
                                    if (get.attitude(current, player) >= 0 && state > 0) return false;
                                },
                                result: {
                                    player(player) {
                                        var nh = player.countCards('h');
                                        if (nh <= player.hp && nh <= 4 && _status.event.name == 'chooseToUse') {
                                            if (typeof _status.event.filterCard == 'function' && _status.event.filterCard({ name: 'huogong' }, player, _status.event)) {
                                                return -10;
                                            }
                                            if (_status.event.skill) {
                                                var viewAs = get.info(_status.event.skill).viewAs;
                                                if (viewAs == 'huogong') return -10;
                                                if (viewAs && viewAs.name == 'huogong') return -10;
                                            }
                                        }
                                        return 0;
                                    },
                                    target(player, target) {
                                        if (target.hasSkill('huogong2') || target.countCards('h') == 0) return 0;
                                        if (player.countCards('h') <= 1) return 0;
                                        if (target == player) {
                                            if (typeof _status.event.filterCard == 'function' && _status.event.filterCard({ name: 'huogong' }, player, _status.event)) {
                                                return -1.5;
                                            }
                                            if (_status.event.skill) {
                                                var viewAs = get.info(_status.event.skill).viewAs;
                                                if (viewAs == 'huogong') return -1.5;
                                                if (viewAs && viewAs.name == 'huogong') return -1.5;
                                            }
                                            return 0;
                                        }
                                        return -1.5;
                                    },
                                },
                                tag: {
                                    damage: 1,
                                    fireDamage: 1,
                                    natureDamage: 1,
                                    norepeat: 1,
                                },
                            },
                            filter(event, player) {
                                var mode = get.mode();
                                if ((mode == 'identity' || mode == 'guozhan') && game.roundNumber <= 1 && _status.currentPhase != game.me) {
                                    return false;
                                }
                                if (!player.countCards('h', { color: 'red' })) return false;
                                return true;
                            },
                        },
                        D_lianhuan1: {
                            audio: 'ext:将包/audio:2',
                            audioname: ['D_pangtong'],
                            group: ['D_lianhuan3', 'D_lianhuan2', 'D_lianhuan4'],
                        },
                        D_lianhuan2: {
                            audioname: ['D_pangtong'],
                            audio: ['D_lianhuan1', 2],
                            popup: 'lianhuan',
                            enable: 'phaseUse',
                            usable: 5,
                            filter(event, player) {
                                return player.countCards('hs') > 0;
                            },
                            filterCard: true,
                            check(card) {
                                return 5 - get.useful(card);
                            },
                            content() {
                                player.draw();
                            },
                            discard: false,
                            visible: true,
                            loseTo: 'discardPile',
                            prompt: '将一张牌置入弃牌堆并摸一张牌',
                            delay: 0.5,
                            prepare(cards, player) {
                                player.$throw(cards, 1000);
                                game.log(player, '将', cards, '置入了弃牌堆');
                            },
                            ai: {
                                basic: {
                                    order: 1,
                                },
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        D_lianhuan3: {
                            audio: 'D_lianhuan1',
                            enable: 'phaseUse',
                            usable: 5,
                            filterCard: true,
                            selectTarget: [1, Infinity],
                            selectCard: 1,
                            prompt: '弃置一张牌让任意名玩家进入连环状态',
                            check(card) {
                                var player = get.owner(card);
                                if (player.countCards('h') > player.hp) return 8 - get.value(card);
                                if (player.hp < player.maxHp) return 6 - get.value(card);
                                return 4 - get.value(card);
                            },
                            filterTarget(card, player, target) {
                                if (target.sex != 'male') return true;
                                if (target.hp >= target.maxHp) return true;
                                if (target == player) return true;
                                return true;
                            },
                            content() {
                                target.link();
                            },
                            ai: {
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
                                tag: {
                                    multitarget: 1,
                                    multineg: 1,
                                    norepeat: 1,
                                },
                            },
                        },
                        D_lianhuan4: {
                            mod: {
                                selectTarget(card, player, range) {
                                    if (card.name == 'tiesuo' && range != -1) range[1] += Infinity;
                                },
                            },
                        },
                        D_免疫: {
                            forced: true,
                            trigger: {
                                player: 'damageBegin4',
                            },
                            filter(event, player) {
                                return event.num >= player.hp;
                            },
                            content() {
                                trigger.cancel();
                            },
                        },
                        巨象: {
                            audio: 'juxiang1',
                            audioname: ['re_zhurong'],
                            trigger: {
                                global: 'useCardAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.player != player && get.itemtype(event.cards) == 'cards' && get.position(event.cards[0], true) == 'o';
                            },
                            content() {
                                var card = get.cardPile2(function (card) {
                                    return get.color(card, false) == 'red';
                                });
                                if (card) player.gain(card, 'gain2');
                            },
                        },
                        D_niepan: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                global: 'dying',
                            },
                            logTarget: 'player',
                            check(event, player) {
                                if (get.attitude(player, event.player) < 4) return false;
                                if (
                                    player.countCards('h', function (card) {
                                        var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                                        if (mod2 != 'unchanged') return mod2;
                                        var mod = game.checkMod(card, player, event.player, 'unchanged', 'cardSavable', player);
                                        if (mod != 'unchanged') return mod;
                                        var savable = get.info(card).savable;
                                        if (typeof savable == 'function') savable = savable(card, player, event.player);
                                        return savable;
                                    }) >=
                                    1 - event.player.hp
                                )
                                    return false;
                                if (event.player == player || event.player == get.zhu(player)) return true;
                                return !player.hasUnknown();
                            },
                            content() {
                                'step 0';
                                trigger.player.discard(trigger.player.getCards('hej'));
                                ('step 1');
                                trigger.player.link(false);
                                ('step 2');
                                trigger.player.turnOver(false);
                                ('step 3');
                                trigger.player.draw(3);
                                ('step 4');
                                if (trigger.player.hp < 3) {
                                    trigger.player.recover(3 - trigger.player.hp);
                                }
                                ('step 5');
                                player.addSkill('谋略');
                                player.addSkill('D_huoji');
                                player.addSkill('八阵');
                                player.awakenSkill('D_niepan'); //QQQ
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        改命: {
                            audio: 'ext:蜀汉中兴:true',
                            enable: 'phaseUse',
                            usable: 5,
                            init(player, skill) {
                                player.storage[skill] = player.storage[skill] || [];
                                player.addSkill('rangxing');
                            },
                            filter(event, player) {
                                return true;
                            },
                            filterTarget(card, player, target) {
                                for (var i = 0; i < player.storage.改命.length; i++) {
                                    if (player.storage.改命[i][0] == target) return false;
                                }
                                return !target.storage.改命effect;
                            },
                            content() {
                                target.storage.改命effect = player;
                                var number = target.phaseNumber;
                                const List = [];
                                Reflect.defineProperty(List, '0', {
                                    get() {
                                        return target;
                                    },
                                });
                                Reflect.defineProperty(List, '1', {
                                    get() {
                                        return target.phaseNumber - number;
                                    },
                                });
                                player.storage.改命.add(List);
                            },
                            ai: {
                                order: 10,
                                result: {
                                    target(player, target) {
                                        var basis = get.threaten(target);
                                        var att = get.attitude(player, target);
                                        return basis * att;
                                    },
                                    player: 1,
                                },
                            },
                            subSkill: {
                                effect: {
                                    charlotte: true,
                                    fixed: true,
                                    mark: true,
                                    marktext: '禳',
                                    intro: {
                                        content(storage, player) {
                                            var str = '【禳星】:';
                                            if (player.storage.改命.length) {
                                                for (var i = 0; i < player.storage.改命.length; i++) {
                                                    var target = player.storage.改命[i];
                                                    str += '<br>' + lib.translate[target[0].name] + ':已经进行了' + target[1] + '回合';
                                                }
                                            } else {
                                                str += '无目标';
                                            }
                                            return str;
                                        },
                                    },
                                    trigger: {
                                        global: 'dieBefore',
                                        player: 'die',
                                    },
                                    forceDie: true,
                                    forced: true,
                                    filter(event, player, name) {
                                        if (player.isDead() && name != 'die') return false;
                                        if (name == 'die') return true;
                                        for (var i = 0; i < player.storage.改命.length; i++) {
                                            if (player.storage.改命[i][0] == event.player && player.storage.改命[i][1] < 8 && event.player.maxHp > 0) return true;
                                        }
                                        return false;
                                    },
                                    content() {
                                        var name = event.triggername;
                                        if (name == 'die') {
                                            for (var i = 0; i < player.storage.改命.length; i++) {
                                                var target = player.storage.改命[i];
                                                if (target[1] < Infinity) {
                                                    target[0].addSkill('rangxing');
                                                }
                                            }
                                        } else {
                                            var source = trigger.source;
                                            trigger.cancel();
                                            var next = player.draw();
                                            player.chat('逆天改命,哈哈哈');
                                            next.source = source;
                                        }
                                    },
                                },
                            },
                        },
                        rangxing: {
                            charlotte: true,
                            fixed: true,
                            mark: true,
                            marktext: '禳',
                            intro: {
                                content(storage, player) {
                                    var str = '【禳星】:';
                                    if (player.storage.改命.length) {
                                        for (var i = 0; i < player.storage.改命.length; i++) {
                                            var target = player.storage.改命[i];
                                            str += '<br>' + lib.translate[target[0].name] + ':已经进行了' + target[1] + '回合';
                                        }
                                    } else {
                                        str += '无目标';
                                    }
                                    return str;
                                },
                            },
                            trigger: {
                                global: 'dieBefore',
                                player: 'die',
                            },
                            forceDie: true,
                            forced: true,
                            filter(event, player, name) {
                                if (player.isDead() && name != 'die') return false;
                                if (name == 'die') return true;
                                for (var i = 0; i < player.storage.改命.length; i++) {
                                    if (player.storage.改命[i][0] == event.player && player.storage.改命[i][1] < 8 && event.player.maxHp > 0) return true;
                                }
                                return false;
                            },
                            content() {
                                var name = event.triggername;
                                if (name == 'die') {
                                    for (var i = 0; i < player.storage.改命.length; i++) {
                                        var target = player.storage.改命[i];
                                        if (target[1] < Infinity) {
                                            target[0].addSkill('rangxing');
                                        }
                                    }
                                } else {
                                    var source = trigger.source;
                                    trigger.cancel();
                                    var next = player.draw();
                                    player.chat('逆天改命,哈哈哈');
                                    next.source = source;
                                }
                            },
                        },
                        tushe1: {
                            audio: 'tushe',
                            forced: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            content() {
                                'step 0';
                                player.chooseToDiscard(Infinity, 'j', true);
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        tushe: {
                            audio: 'ext:将包/audio:2',
                            group: ['tushe1'],
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.parent.triggeredTargets3.length > 1) return false;
                                return event.targets.length;
                            },
                            content() {
                                player.draw(trigger.targets.length) && player.recover(trigger.targets.length);
                            },
                            ai: {
                                presha: true,
                                pretao: true,
                                threaten: 1.8,
                            },
                        },
                        limu: {
                            forced: true,
                            mod: {
                                targetInRange(card, player, target) {
                                    if (player.inRange(target)) {
                                        return true;
                                    }
                                },
                                cardUsableTarget(card, player, target) {
                                    if (player.inRange(target)) return true;
                                },
                                aiValue(player, card, num) {
                                    if (card.name == 'zhangba') return 15;
                                    if (player.getEquip('zhangba') && player.countCards('h') > 1 && ['shan', 'tao'].includes(card.name)) return 0;
                                    if (card.name == 'shan' || card.name == 'tao') return num / 2;
                                },
                            },
                            enable: ['chooseToUse', 'chooseToRespond'],
                            filterCard: true,
                            selectCard: 1,
                            position: 'hejs',
                            viewAs: {
                                name: 'sha',
                            },
                            complexCard: true,
                            filter(event, player) {
                                return player.countCards('hejs') >= 1;
                            },
                            audio: 'ext:将包/audio:2',
                            prompt: '将一张牌当杀使用或打出',
                            check(card) {
                                if (card.name == 'sha') return 0;
                                return 5 - get.value(card);
                            },
                            ai: {
                                respondSha: true,
                                skillTagFilter(player) {
                                    return player.countCards('hejs') >= 1;
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
                                basic: {
                                    useful: [5, 1],
                                    value: [5, 1],
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
                        lianhuo1: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                player: 'damageBegin3',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.nature == 'fire' || event.nature == 'thunder' || event.nature == 'ice';
                            },
                            content() {
                                'step 0';
                                trigger.num += player.hp / 2;
                            },
                        },
                        jishe1: {
                            audio: 'ext:将包/audio:2',
                            enable: 'phaseUse',
                            usable: 5,
                            init(player) {
                                player.storage.jishe = 0;
                            },
                            usable: 20,
                            content() {
                                player.draw();
                                player.storage.jishe++;
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player(player) {
                                        if ((player.hasSkill('kongcheng') || player.hasSkill('new_kongcheng')) && !player.countCards('h', 'g_jinchan')) return 1;
                                        if (player.hasSkill('hengzheng')) return 1;
                                        if (player.hasSkill('shangshi') && player.getDamagedHp() > 0) return 1;
                                        if (player.hasSkill('chouhai') && player.storage.jishe <= player.maxHp - 1) return 0;
                                        if (player.hasSkill('lirang')) return 1;
                                        if (!player.needsToDiscard(1)) {
                                            return 1;
                                        }
                                        return 0;
                                    },
                                },
                            },
                            group: ['jishe2', 'jishe4'],
                        },
                        jishe4: {
                            audio: 'jishe',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return !current.isLinked();
                                });
                            },
                            content() {
                                'step 0';
                                var num = game.countPlayer(function (current) {
                                    return !current.isLinked();
                                });
                                player
                                    .chooseTarget(get.prompt('jishe1'), '横置至多' + get.cnNumber(Math.min(num, Infinity)) + '名未横置的角色', [1, Math.min(num, Infinity)], function (card, player, target) {
                                        return !target.isLinked();
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    event.targets = result.targets;
                                    event.num = 0;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (event.num < event.targets.length) {
                                    event.targets[event.num].link();
                                    event.num++;
                                    event.redo();
                                }
                            },
                            ai: {
                                expose: 0.3,
                            },
                        },
                        guhuo1: {
                            group: 'old_guhuo_wuxie',
                            enable: 'chooseToUse',
                            usable: 5,
                            filter(event, player) {
                                if (!player.countCards('hs')) return false;
                                var list = ['sha', 'tao', 'shan', 'jiu', 'taoyuan', 'wugu', 'juedou', 'huogong', 'jiedao', 'tiesuo', 'guohe', 'shunshou', 'wuzhong', 'wanjian', 'nanman'];
                                if (get.mode() == 'guozhan') {
                                    list = list.concat(['xietianzi', 'shuiyanqijunx', 'lulitongxin', 'lianjunshengyan', 'chiling', 'diaohulishan', 'yuanjiao', 'huoshaolianying']);
                                }
                                for (var i = 0; i < list.length; i++) {
                                    if (event.filterCard && event.filterCard({ name: list[i] }, player)) return true;
                                }
                                return false;
                            },
                            chooseButton: {
                                dialog() {
                                    var list = [];
                                    for (var i = 0; i < lib.inpile.length; i++) {
                                        var name = lib.inpile[i];
                                        if (name == 'wuxie') continue;
                                        if (name == 'sha') {
                                            list.push(['基本', '', 'sha']);
                                            list.push(['基本', '', 'sha', 'fire']);
                                            list.push(['基本', '', 'sha', 'thunder']);
                                            list.push(['基本', '', 'sha', 'ice']);
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
                                        position: 'hs',
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
                        万剑: {
                            enable: 'chooseToUse',
                            usable: 5,
                            filterCard(card) {
                                return get.type(card, 'trick') == 'trick';
                            },
                            selectCard: 1,
                            viewAs: {
                                name: 'wanjian',
                            },
                            viewAsFilter(player) {
                                if (player.countCards('h', { type: ['trick'] }) < 1) return false;
                            },
                            check() {
                                return 1;
                            },
                            ai: {
                                skillTagFilter(player, tag, arg) {
                                    if (arg != 'use') return false;
                                    if (player.countCards('h', { type: ['trick'] }) < 1) return false;
                                },
                                respondSha: true,
                                order() {
                                    return get.order({ name: 'wanjian' }) + 0.1;
                                },
                                useful: -1,
                                value: -1,
                                wuxie(target, card, player, viewer) {
                                    if (get.attitude(viewer, target) > 0 && target.countCards('h', 'shan')) {
                                        if (!target.countCards('h') || target.hp == 1 || Math.random() < 0.7) return 0;
                                    }
                                },
                                basic: {
                                    order: 9,
                                    useful: 1,
                                    value: 5,
                                },
                                result: {
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
                                    target(player, target) {
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
                                },
                            },
                        },
                        获得: {
                            enable: ['chooseToRespond', 'chooseToUse'],
                            usable: 5,
                            filter(event, player) {
                                if (player == _status.currentPhase || event.获得) return false;
                                if (!event.filterCard || !event.filterCard({ name: 'sha' }, player, event)) return false;
                                if (!lib.filter.cardRespondable({ name: 'sha' }, player, event)) return false;
                                return true;
                            },
                            delay: false,
                            content() {
                                'step 0';
                                var card = get.cardPile(function (card) {
                                    return card.suit == 'heart';
                                });
                                if (card) player.gain(card, 'gain2');
                                ('step 1');
                                var evt = event.getParent(2);
                                evt.goto(0);
                                evt.set('获得', true);
                            },
                        },
                        kurou1: {
                            audio: 'ext:将包/audio:2',
                            enable: 'phaseUse',
                            usable: 5,
                            usable: 10,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('kurou1'), '选择一名角色失去一点体力你摸两张牌', function (card, player, target) {
                                        return target;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.bool && result.targets && result.targets.length) {
                                    var num = [1, 1, 1, 1, 1, 1, 1, 1, 1, 3].randomGet();
                                    player.line(result.targets[0], 'green');
                                    result.targets[0].loseHp();
                                    player.draw(2);
                                }
                            },
                            ai: {
                                basic: {
                                    order: 1,
                                },
                                result: {
                                    player(player) {
                                        if (player.countCards('h') >= player.hp - 1) return -1;
                                        if (player.hp < 3) return -1;
                                        return 1;
                                    },
                                },
                            },
                        },
                        ol_cuorui: {
                            audio: 'cuorui',
                            trigger: {
                                player: 'drawBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return !event.numFixed;
                            },
                            content() {
                                trigger.num += player.hp;
                            },
                            group: 'ol_cuorui1',
                            subSkill: {
                                nojudge: {
                                    trigger: {
                                        player: 'phaseJudgeBefore',
                                    },
                                    forced: true,
                                    audio: 'cuorui',
                                    filter(event, player) {
                                        return player.countCards('j');
                                    },
                                    content() {
                                        game.log(player, '跳过了', '#g判定阶段');
                                    },
                                },
                            },
                            derivation: [],
                        },
                        ol_cuorui1: {
                            trigger: {
                                player: 'phaseJudgeBefore',
                            },
                            forced: true,
                            audio: 'cuorui',
                            filter(event, player) {
                                return !player.storage.cuorui && (get.is.single() || player.countCards('j'));
                            },
                            content() {
                                trigger.cancel();
                                game.log(player, '跳过了', '#g判定阶段');
                            },
                        },
                        qizuo: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                player: 'useCardAfter',
                            },
                            group: 'qizuo1',
                            filter(event, player) {
                                if (event.parent.name == 'qizuo') return false;
                                if (!event.targets || !event.card) return false;
                                if (event.card && event.card.name == 'wuxie') return false;
                                var type = get.type(event.card);
                                if (type != 'trick') return false;
                                var card = game.createCard(event.card.name, event.card.suit, event.card.number, event.card.nature);
                                var targets = event._targets || event.targets;
                                for (var i = 0; i < targets.length; i++) {
                                    if (!targets[i].isIn()) return false;
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
                        qizuo1: {
                            trigger: {
                                player: 'useCardAfter',
                            },
                            filter(event, player) {
                                if (event.parent.name == 'qizuo1') return false;
                                if (!event.targets || !event.card) return false;
                                if (event.card && event.card.name == 'du') return false;
                                var type = get.type(event.card);
                                if (type != 'basic') return false;
                                var card = game.createCard(event.card.name, event.card.suit, event.card.number, event.card.nature);
                                var targets = event._targets || event.targets;
                                for (var i = 0; i < targets.length; i++) {
                                    if (!targets[i].isIn()) return false;
                                    if (!player.canUse({ name: event.card.name }, targets[i], false, false)) {
                                        return false;
                                    }
                                }
                                return true;
                            },
                            check(event, player) {
                                if (event.card.name == 'du') return false;
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
                        tiandu1: {
                            audio: 'tiandu',
                            audioname: ['re_guojia', 'xizhicai', 'gz_nagisa'],
                            trigger: {
                                player: 'judgeEnd',
                            },
                            frequent(event) {
                                if (event.result.card.name == 'du') return false;
                                //if(get.mode()=='guozhan') return false;
                                return true;
                            },
                            check(event) {
                                if (event.result.card.name == 'du') return false;
                                return true;
                            },
                            filter(event, player) {
                                return get.position(event.result.card, true) == 'o';
                            },
                            content() {
                                player.draw();
                                player.gain(trigger.result.card, 'gain2');
                            },
                        },
                        xinyeyan: {
                            forceDie: true,
                            enable: 'phaseUse',
                            usable: 5,
                            audio: 'ext:将包/audio:2',
                            filterTarget(card, player, target) {
                                var length = ui.selected.cards.length;
                                return length == 0 || length == 4;
                            },
                            filterCard(card) {
                                var suit = card.suit;
                                for (var i = 0; i < ui.selected.cards.length; i++) {
                                    if (ui.selected.cards[i].suit == suit) return false;
                                }
                                return true;
                            },
                            complexCard: true,
                            limited: true,
                            selectCard: [0, 4],
                            line: 'fire',
                            check() {
                                return -1;
                            },
                            selectTarget() {
                                if (ui.selected.cards.length == 4) return [1, 2];
                                if (ui.selected.cards.length == 0) return [1, 999];
                                game.uncheck('target');
                                return [1, Infinity];
                            },
                            multitarget: true,
                            multiline: true,
                            content() {
                                'step 0';
                                event.num = 0;
                                targets.sortBySeat();
                                ('step 1');
                                if (cards.length == 4) event.goto(2);
                                else {
                                    if (event.num < targets.length) {
                                        targets[event.num].damage('fire', 5, 'nocard');
                                        event.num++;
                                    }
                                    if (event.num == targets.length) event.finish();
                                    else event.redo();
                                }
                                ('step 2');
                                player.gainMaxHp(3);
                                if (targets.length == 1) event.goto(1);
                                else {
                                    player
                                        .chooseTarget('请选择受到2点伤害的角色', true, function (card, player, target) {
                                            return _status.event.targets.includes(target);
                                        })
                                        .set('ai', function (target) {
                                            return 1;
                                        })
                                        .set('forceDie', true)
                                        .set('targets', targets);
                                }
                                ('step 3');
                                if (event.num < targets.length) {
                                    var dnum = 1;
                                    if (result.bool && result.targets && targets[event.num] == result.targets[0]) dnum = 2;
                                    targets[event.num].damage('fire', dnum, 'nocard');
                                    event.num++;
                                }
                                if (event.num == targets.length) event.finish();
                                else event.redo();
                                ('step 4');
                                player
                                    .chooseControl('2点', '3点')
                                    .set('prompt', '请选择伤害点数')
                                    .set('ai', function () {
                                        return '3点';
                                    })
                                    .set('forceDie', true);
                                ('step 5');
                                targets[0].damage('fire', result.control == '2点' ? 2 : 3, 'nocard');
                            },
                            ai: {
                                order: 1,
                                fireAttack: true,
                                result: {
                                    target(player, target) {
                                        if (target.hasSkillTag('nofire')) return 0;
                                        if (lib.config.mode == 'versus') return -1;
                                        if (player.hasUnknown()) return 0;
                                        return get.damageEffect(target, player);
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
                        摸牌: {
                            audio: 'ext:将包/audio:1',
                            usable: 3,
                            trigger: {
                                player: 'loseAfter',
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.countCards('hej')) false;
                                var evt = event.getl(player);
                                return evt && evt.player == player && evt.hs && evt.hs.length;
                            },
                            content() {
                                player.draw();
                            },
                            ai: {
                                threaten: 0.8,
                                effect: {
                                    target(card) {
                                        if (card.name == 'guohe' || card.name == 'liuxinghuoyu') return 0.5;
                                    },
                                },
                                noh: true,
                                skillTagFilter(player, tag) {
                                    if (tag == 'noh') {
                                        if (player.countCards('h') != 1) return false;
                                    }
                                },
                            },
                            audioname2: {
                                key_shiki: 'shiki_omusubi',
                            },
                        },
                        装备: {
                            enable: 'phaseUse',
                            usable: 5,
                            audio: 'xiaoji',
                            filter(event, player) {
                                var he = player.getCards('h');
                                var num = 0;
                                for (var i = 0; i < he.length; i++) {
                                    var info = lib.card[he[i].name];
                                    if (lib.inpile.includes(he[i].name)) {
                                        num++;
                                        if (num >= 1) return true;
                                    }
                                }
                            },
                            filterCard(card) {
                                return get.type(card) != 'emm';
                            },
                            discard: false,
                            lose: false,
                            delay: false,
                            check(card) {
                                return get.value(card);
                            },
                            content() {
                                'step 0';
                                var list = [];
                                for (var i of lib.inpile) {
                                    if (lib.card[i].compound) continue;
                                    if (get.type(i) === 'equip') list.push(['装备', '', i]);
                                }
                                var dialog = ui.create.dialog('装备', [list, 'vcard']);
                                player.chooseButton(dialog).ai = function (button) {
                                    var name = button.link[2];
                                    var player = _status.event.player;
                                    var num = 0;
                                    for (var i = 1; i <= 5; i++) {
                                        if (player.getEquip(i)) {
                                            num++;
                                        }
                                    }
                                    if (num >= 5) return false;
                                    switch (name) {
                                        case 'bagua':
                                            if (!player.getEquip(2)) return 1;
                                            return 0.2;
                                        case 'renwang':
                                            if (!player.getEquip(2)) return 0.8;
                                            return 0.2;
                                        case 'liannu':
                                            if (!player.getEquip(1)) return 0.6;
                                            return 0.2;
                                        case 'guanshi':
                                            if (!player.getEquip(1)) return 0.7;
                                            return 0.2;
                                        case 'qinggang':
                                            if (!player.getEquip(1)) return 0.7;
                                            return 0.2;
                                        case 'zhuahuang':
                                            if (!player.getEquip(3)) return 0.8;
                                            return 0;
                                        case 'chitu':
                                            if (!player.getEquip(4)) return 0.8;
                                            return 0;
                                        case 'muniu':
                                            if (!player.getEquip(5)) return 0.8;
                                            return 0;
                                        default:
                                            return 0;
                                    }
                                };
                                ('step 1');
                                if (result.links) {
                                    var name = result.links[0][2];
                                    var info1 = lib.card[name];
                                    if (info1) {
                                        var info = {
                                            enable: true,
                                            type: 'equip',
                                            subtype: get.subtype(result.links[0][2]),
                                            cardimage: cards[0].name,
                                            filterTarget(card, player, target) {
                                                return target == player;
                                            },
                                            compound: true,
                                            selectTarget: -1,
                                            modTarget: true,
                                            content: lib.element.content.equipCard,
                                            legend: true,
                                            source: [cards[0].name, name],
                                            onEquip: [],
                                            onLose: [
                                                function () {
                                                    var info = Object.assign(lib.card[card.name]);
                                                    delete lib.card[card.name];
                                                    delete lib.translate[card.name];
                                                    delete lib.translate[card.name + '_info'];
                                                    card.init(Object.assign(info, { name: info.source[0] }));
                                                },
                                            ],

                                            skills: [],
                                            distance: {},
                                            ai: {
                                                order: 8.9,
                                                equipValue: 10,
                                                useful: 2.5,
                                                value: 1,
                                                result: {
                                                    target(player, target) {
                                                        return get.equipResult(player, target, name);
                                                    },
                                                },
                                            },
                                        };
                                        if (typeof info1.distance === 'object' && info1.distance !== null) Object.assign(info.distance, info1.distance);
                                        if (info1.skills) {
                                            info.skills = info.skills.concat(info1.skills);
                                        }
                                        if (info1.onEquip) {
                                            if (Array.isArray(info1.onEquip)) {
                                                info.onEquip = info.onEquip.concat(info1.onEquip);
                                            } else {
                                                info.onEquip.push(info1.onEquip);
                                            }
                                        }
                                        if (info1.onLose) {
                                            if (Array.isArray(info1.onLose)) {
                                                info.onLose = info.onLose.concat(info1.onLose);
                                            } else {
                                                info.onLose.push(info1.onLose);
                                            }
                                        }
                                        if (info.onEquip.length == 0) delete info.onEquip;
                                        if (info.onLose.length == 0) delete info.onLose;
                                        var newName = 'qyCreateCard_' + get.id() + '_' + name;
                                        var changename = get.translation(cards[0].name).slice(0, 2) + '·' + get.translation(name).slice(0, 4);
                                        lib.card[newName] = info;
                                        lib.translate[newName] = changename;
                                        lib.translate[newName + '_info'] = get.translation(name, 'info');
                                        try {
                                            game.addVideo('newcard', null, {
                                                name: name,
                                                translate: lib.translate[newName],
                                                info: lib.translate[newName + '_info'],
                                                // card:name.name,
                                                legend: true,
                                            });
                                        } catch (e) { }
                                    }
                                    var card = cards[0].init({
                                        name: newName,
                                        suit: cards[0].suit,
                                        number: cards[0].number,
                                    });
                                    if (lib.config.background_audio) {
                                        game.playAudio('../audio/card', player.sex, name);
                                    }
                                    game.addVideo('equip', player, get.cardInfo(card));
                                    player.equip(card);
                                    player.$throw(card);
                                    player.$draw(card);
                                    game.log(player, '将', cards[0], '视为', card, '使用');
                                }
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    player(player) {
                                        var num = 0;
                                        for (var i = 1; i <= 5; i++) {
                                            if (player.getEquip(i)) {
                                                num++;
                                            }
                                        }
                                        return 5 - num;
                                    },
                                },
                            },
                            group: 'ymxiaoji_equip',
                            subSkill: {
                                equip: {
                                    trigger: {
                                        player: 'equipBegin',
                                    },
                                    filter(event, player) {
                                        var types = get.subtype(event.card);
                                        return player.countCards('e', { subtype: types });
                                    },
                                    popup: false,
                                    forced: true,
                                    lastDo: true,
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
                            },
                        },
                        xin_fuzhu: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                global: 'phaseJieshuBegin',
                            },
                            filter(event, player) {
                                return event.player != player && ui.cardPile.childElementCount != 0;
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) < 0 && get.effect(event.player, { name: 'sha' }, player, player) > 0;
                            },
                            logTarget: 'player',
                            onWash() {
                                _status.event.getParent('xin_fuzhu').washed = false;
                                return 'remove';
                            },
                            content() {
                                'step 0';
                                event.washed = false;
                                event.total = game.players.length + game.dead.length;
                                ('step 1');
                                event.total--;
                                var card = get.cardPile2(function (card) {
                                    return card.name == 'sha' && player.canUse(card, trigger.player, false);
                                });
                                if (card) {
                                    card.remove();
                                    game.updateRoundNumber();
                                    player.useCard(card, trigger.player, false);
                                }
                                ('step 2');
                                if (event.total > 0 && !event.washed && ui.cardPile.childElementCount != 0 && trigger.player.isAlive()) event.goto(1);
                                ('step 3');
                                lib.onwash.remove(lib.skill.fuzhu.onWash);
                                var cards = get.cards(ui.cardPile.childElementCount + 1);
                                for (var i = 0; i < cards.length; i++) {
                                    ui.cardPile.insertBefore(cards[i], ui.cardPile.childNodes[get.rand(ui.cardPile.childElementCount)]);
                                }
                                game.updateRoundNumber();
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        luoying1: {
                            audio: 'luoying',
                            trigger: {
                                global: 'loseAfter',
                            },
                            filter(event, player) {
                                if (event.player == player) return false;
                                for (var i of event.cards) {
                                    if (get.position(i, true) == 'd') return true;
                                }
                                return false;
                            },
                            async content(event, trigger, player) {
                                //QQQ
                                for (var i of trigger.cards) {
                                    if (get.position(i, true) == 'd') await player.gain(i, 'gain2');
                                }
                            },
                        },
                        jiushi11: {
                            hiddenCard(player, name) {
                                if (name == 'jiu') return !player.isTurnedOver();
                                return false;
                            },
                            audio: 'rejiushi',
                            group: 'jiushi12',
                            enable: ['chooseToUse', 'chooseToRespond'],
                            filter(event, player) {
                                return event.filterCard({ name: 'jiu' }, player, event);
                            },
                            content() {
                                if (_status.event.getParent(2).type == 'dying') {
                                    event.dying = player;
                                    event.type = 'dying';
                                }
                                player.useCard({ name: 'jiu' }, player);
                            },
                            ai: {
                                order: 5,
                                result: {
                                    player(player) {
                                        if (_status.event.parent.name == 'phaseUse') {
                                            if (player.countCards('h', 'jiu') > 0) return 0;
                                            if (player.getEquip('zhuge') && player.countCards('h', 'sha') > 1) return 0;
                                            if (!player.countCards('h', 'sha')) return 0;
                                            var targets = [];
                                            var target;
                                            var players = game.filterPlayer();
                                            for (var i = 0; i < players.length; i++) {
                                                if (get.attitude(player, players[i]) < 0) {
                                                    if (player.canUse('sha', players[i], true, true)) {
                                                        targets.push(players[i]);
                                                    }
                                                }
                                            }
                                            if (targets.length) {
                                                target = targets[0];
                                            } else {
                                                return 0;
                                            }
                                            var num = get.effect(target, { name: 'sha' }, player, player);
                                            for (var i = 1; i < targets.length; i++) {
                                                var num2 = get.effect(targets[i], { name: 'sha' }, player, player);
                                                if (num2 > num) {
                                                    target = targets[i];
                                                    num = num2;
                                                }
                                            }
                                            if (num <= 0) return 0;
                                            var e2 = target.getEquip(2);
                                            if (e2) {
                                                if (e2.name == 'tengjia') {
                                                    if (!player.countCards('h', { name: 'sha', nature: 'fire' }) && !player.getEquip('zhuque')) return 0;
                                                }
                                                if (e2.name == 'renwang') {
                                                    if (!player.countCards('h', { name: 'sha', color: 'red' })) return 0;
                                                }
                                                if (e2.name == 'baiyin') return 0;
                                            }
                                            if (player.getEquip('guanshi') && player.countCards('he') > 2) return 1;
                                            return target.countCards('h') > 3 ? 0 : 1;
                                        }
                                        if (player == _status.event.dying || player.isTurnedOver()) return 3;
                                    },
                                },
                                effect: {
                                    target(card, player, target) {
                                        if (card.name == 'guiyoujie') return [0, 0.5];
                                        if (target.isTurnedOver()) {
                                            if (get.tag(card, 'damage')) {
                                                if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                                if (target.hp == 1) return;
                                                return [1, target.countCards('h') / 2];
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        jiushi12: {
                            audio: 'rejiushi',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            prompt(event, player) {
                                var str = '是否发动【酒诗】获得牌堆中的一张锦囊牌';
                            },
                            content() {
                                var list = get.typeCard('trick');
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw();
                            },
                        },
                        zhangbax: {
                            enable: ['chooseToUse', 'chooseToRespond'],
                            filterCard: true,
                            selectCard: 1,
                            equipSkill: true,
                            position: 'hejs',
                            viewAs: {
                                name: 'sha',
                                nature: 'fire',
                            },
                            complexCard: true,
                            filter(event, player) {
                                return player.countCards('hejs') >= 1;
                            },
                            audio: 'ext:将包/audio:true',
                            prompt: '将一张牌当杀使用或打出',
                            check(card) {
                                if (card.name == 'sha') return 0;
                                return 5 - get.value(card);
                            },
                            ai: {
                                respondSha: true,
                                skillTagFilter(player) {
                                    return player.countCards('hejs') >= 1;
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
                                basic: {
                                    useful: [5, 1],
                                    value: [5, 1],
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
                        hongduan: {
                            audio: 'ext:将包/audio:true',
                            trigger: {
                                source: 'damageSource',
                            },
                            equipSkill: true,
                            filter(event, player) {
                                return event.parent.name != 'emm';
                            },
                            check(event, player) {
                                return player.isDamaged();
                            },
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    var player = _status.event.getParent('hongduan').player;
                                    if (player.isHealthy() && get.color(card) == 'red') return 0;
                                    return 2;
                                });
                                ('step 1');
                                if (result.color == 'red') player.recover();
                                else player.draw(2);
                            },
                        },
                        liechudao: {
                            audio: 'ext:将包/audio:true',
                            trigger: {
                                source: 'damageBegin1',
                            },
                            forced: true,
                            equipSkill: true,
                            mod: {
                                cardUsable(card, player, num) {
                                    var cardx = player.getEquip('liechudao');
                                    if (card.name == 'sha' && (!cardx || player.hasSkill('liechudao', null, false) || (!_status.pyzhuren_diamond_temp && !ui.selected.cards.includes(cardx)))) {
                                        return num + Infinity;
                                    }
                                },
                                cardEnabled2(card, player) {
                                    if (!_status.event.addCount_extra || player.hasSkill('liechudao', null, false)) return;
                                    if (card && card == player.getEquip('liechudao')) {
                                        _status.pyzhuren_diamond_temp = true;
                                        var bool = lib.filter.cardUsable({ name: 'sha' }, player);
                                        delete _status.pyzhuren_diamond_temp;
                                        if (!bool) return false;
                                    }
                                },
                            },
                            filter(event, player) {
                                if (event.parent.name != 'sha') return false;
                                return (
                                    player.countCards('he', function (card) {
                                        return card != player.getEquip('liechudao');
                                    }) > 0
                                );
                            },
                            content() {
                                'step 0';
                                var next = player.chooseToDiscard(
                                    'he',
                                    function (card, player) {
                                        return card != player.getEquip('liechudao');
                                    },
                                    get.prompt(event.name, trigger.player),
                                    '弃置一张牌,令即将对其造成的伤害+2'
                                );
                                next.ai = function (card) {
                                    if (_status.event.goon) return 6 - get.value(card);
                                    return -1;
                                };
                                next.set(
                                    'goon',
                                    get.attitude(player, trigger.player) < 0 &&
                                    !trigger.player.hasSkillTag('filterDamage', null, {
                                        player: player,
                                        card: trigger.card,
                                    })
                                );
                                ('step 1');
                                if (result.bool) trigger.num += 2;
                            },
                            ai: {
                                expose: 0.25,
                            },
                        },
                        tianlei: {
                            audio: 'ext:将包/audio:2',
                            audioname: ['boss_qinglong'],
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            equipSkill: true,
                            filter(event, player) {
                                return event.card.name == 'sha';
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt2('tianlei'), function (card, player, target) {
                                    return target != player;
                                }).ai = function (target) {
                                    if (target.hasSkill('hongyan')) return 0;
                                    return get.damageEffect(target, _status.event.player, _status.event.player, 'thunder');
                                };
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    event.target.judge(function (card) {
                                        var suit = card.suit;
                                        if (suit == 'spade') return -4;
                                        if (suit == 'club') return -2;
                                        return 0;
                                    });
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.suit == 'club') {
                                    event.target.damage(3, 'thunder');
                                } else if (result.suit == 'spade') {
                                    event.target.damage(4, 'thunder');
                                } else if (result.suit == 'heart') {
                                    event.target.damage('thunder');
                                    player.recover(2);
                                } else if (result.suit == 'diamond') {
                                    event.target.damage(2, 'thunder');
                                    player.recover();
                                }
                            },
                            ai: {
                                useShan: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'respondShan')) {
                                            var hastarget = game.hasPlayer(function (current) {
                                                return get.attitude(target, current) < 0;
                                            });
                                            var be = target.countCards('e', { color: 'black' });
                                            if (target.countCards('h', 'shan') && be) {
                                                if (!target.hasSkill('guidao')) return 0;
                                                return [0, hastarget ? target.countCards('he') / 2 : 0];
                                            }
                                            if (target.countCards('h', 'shan') && target.countCards('h') > 2) {
                                                if (!target.hasSkill('guidao')) return 0;
                                                return [0, hastarget ? target.countCards('h') / 4 : 0];
                                            }
                                            if (target.countCards('h') > 3 || (be && target.countCards('h') >= 2)) {
                                                return [0, 0];
                                            }
                                            if (target.countCards('h') == 0) {
                                                return [1.5, 0];
                                            }
                                            if (target.countCards('h') == 1 && !be) {
                                                return [1.2, 0];
                                            }
                                            if (!target.hasSkill('guidao')) return [1, 0.05];
                                            return [1, Math.min(0.5, (target.countCards('h') + be) / 4)];
                                        }
                                    },
                                },
                            },
                        },
                        shuibo: {
                            audio: 'ext:将包/audio:true',
                            trigger: {
                                player: 'useCard2',
                            },
                            forced: true,
                            equipSkill: true,
                            filter(event, player) {
                                if (event.card.name != 'sha' && get.type(event.card) != 'trick') return false;
                                var info = get.info(event.card);
                                if (info.allowMultiple == false) return false;
                                if (event.targets && !info.multitarget) {
                                    return game.hasPlayer((current) => !event.targets.includes(current));
                                }
                                return false;
                            },
                            async content(event, trigger, player) {
                                //QQQ
                                const result = await player
                                    .chooseTarget('为' + get.translation(trigger.card) + '额外指定一个目标', (card, player, target) => !trigger.targets.includes(target))
                                    .set('ai', (target) => get.effect(target, trigger.card, player, player))
                                    .forResult();
                                if (result.targets && result.targets[0]) {
                                    trigger.targets.push(result.targets[0]);
                                }
                            },
                        },
                        hundu: {
                            audio: 'ext:将包/audio:true',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            equipSkill: true,
                            filter(event, player) {
                                return event.card.name != 'emm'; //&&event.targets.length==1&&get.color(event.card)!='emm';
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            logTarget: 'target',
                            content() {
                                player.addTempSkill('hundu');
                                player.addMark('hundu', 1, false);
                                //trigger.target.gain(trigger.cards.filterInD(),'gain2','log');
                                trigger.target.loseHp(Math.min(player.countMark('hundu'), 999)); //.set('source',player);
                            },
                            ai: {
                                jueqing: true,
                                unequip: true,
                                skillTagFilter(player, tag, arg) {
                                    if (tag == 'unequip') {
                                        if (arg && arg.name != 'emm' && get.color(arg.card) != 'emm') return true;
                                        return false;
                                    }
                                },
                            },
                        },
                        tianjiang: {
                            audio: 'ext:将包/audio:2',
                            derivation: ['hongduan', 'shuibo', 'tianlei', 'liechudao', 'hundu'],
                            forced: true,
                            trigger: {
                                global: 'phaseZhunbeiBegin',
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('tianjiang');
                                ('step 1');
                                player.addSkill(['hongduan', 'shuibo', 'tianlei', 'liechudao', 'hundu']);
                                player.removeSkill('tianjiang');
                            },
                        },
                        gudingdao: {
                            audio: 'ext:将包/audio:true',
                            trigger: {
                                source: 'damageBegin1',
                            },
                            equipSkill: true,
                            filter(event, player) {
                                if (event.parent.name == '_lianhuan' || event.parent.name == '_lianhuan2') return false;
                                if (event.card && event.card.name != 'emm') {
                                    if (event.player.countCards('h') == 0 || event.player.countCards('e') == 0) return true;
                                }
                                return false;
                            },
                            forced: true,
                            content() {
                                trigger.num *= 2;
                            },
                            ai: {
                                effect: {
                                    player(card, player, target, current, isLink) {
                                        if (
                                            card.name == 'sha' &&
                                            !isLink &&
                                            target.countCards('h') == 0 &&
                                            !target.hasSkillTag('filterDamage', null, {
                                                player: player,
                                                card: card,
                                            })
                                        )
                                            return [1, 0, 1, -3];
                                    },
                                },
                            },
                        },
                        yuanhong1: {
                            audio: 'ext:将包/audio:true',
                            trigger: {
                                source: 'damageBegin1',
                            },
                            forced: true,
                            usable: 2,
                            equipSkill: true,
                            mod: {
                                cardUsable(card, player, num) {
                                    var cardx = player.getEquip('pyzhuren_diamond');
                                    if (card.name == 'sha' && (!cardx || player.hasSkill('pyzhuren_diamond', null, false) || (!_status.pyzhuren_diamond_temp && !ui.selected.cards.includes(cardx)))) {
                                        return num + 1;
                                    }
                                },
                                cardEnabled2(card, player) {
                                    if (!_status.event.addCount_extra || player.hasSkill('pyzhuren_diamond', null, false)) return;
                                    if (card && card == player.getEquip('pyzhuren_diamond')) {
                                        _status.pyzhuren_diamond_temp = true;
                                        var bool = lib.filter.cardUsable({ name: 'sha' }, player);
                                        delete _status.pyzhuren_diamond_temp;
                                        if (!bool) return false;
                                    }
                                },
                            },
                            filter(event, player) {
                                if (event.parent.name != 'sha') return false;
                                return (
                                    player.countCards('he', function (card) {
                                        return card != player.getEquip('pyzhuren_diamond');
                                    }) > 0
                                );
                            },
                            content() { },
                            ai: {
                                expose: 0.25,
                            },
                        },
                        yuanhong2: {
                            audio: 'ext:将包/audio:true',
                            trigger: {
                                player: 'useCard2',
                            },
                            forced: true,
                            equipSkill: true,
                            filter(event, player) {
                                if (event.card.name != 'sha' && get.type(event.card) != 'trick') return false;
                                var info = get.info(event.card);
                                if (info.allowMultiple == false) return false;
                                if (event.targets && !info.multitarget) {
                                    return game.hasPlayer((current) => !event.targets.includes(current));
                                }
                                return false;
                            },
                            async content(event, trigger, player) {
                                //QQQ
                                const result = await player
                                    .chooseTarget('为' + get.translation(trigger.card) + '额外指定一个目标', (card, player, target) => !trigger.targets.includes(target))
                                    .set('ai', (target) => get.effect(target, trigger.card, player, player))
                                    .forResult();
                                if (result.targets && result.targets[0]) {
                                    trigger.targets.push(result.targets[0]);
                                }
                            },
                        },
                        yuanhong3: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                source: 'damageBegin1',
                            },
                            forced: true,
                            check(event, player) {
                                var att = get.attitude(player, event.player);
                                var num = event.num + 1;
                                var hc = player.countCards('h') - event.player.countCards('h');
                                if (att < 0 && num >= event.player.hp) return true;
                                if (att < 0 && hc < 0) return true;
                                return false;
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                trigger.num++;
                            },
                            ai: {
                                unequip: true,
                                skillTagFilter(player, tag, arg) {
                                    if (arg && arg.name == 'sha') return true;
                                    return false;
                                },
                            },
                        },
                        meimei2: {
                            audio: 'ext:将包/audio:2',
                            mod: {
                                globalTo(from, to, distance) {
                                    return distance + 1;
                                },
                            },
                            forced: true,
                            equipSkill: true,
                            trigger: {
                                player: 'damageBegin3',
                            },
                            filter(event, player) {
                                return (event._result = { bool: true } && event.source && event.source.sex == 'female');
                            },
                            content() {
                                'step 0';
                                trigger.num++;
                            },
                        },
                        meimei1: {
                            audio: 'ext:将包/audio:2',
                            forced: true,
                            trigger: {
                                player: 'damageBegin3',
                            },
                            equipSkill: true,
                            filter(event, player) {
                                return (event._result = { bool: true } && event.source && event.source.sex == 'male');
                            },
                            content() {
                                'step 0';
                                trigger.num--;
                            },
                        },
                        zhaozhu1: {
                            trigger: {
                                global: 'dieAfter',
                            },
                            forced: true,
                            audio: 'zhaozhu',
                            filter(event, player) {
                                if (!lib.group.includes(event.player.group)) return false;
                                if (
                                    game.hasPlayer(function (current) {
                                        return current.group == event.player.group;
                                    })
                                ) {
                                    return false;
                                }
                                return true;
                            },
                            content() {
                                'step 0';
                                player.loseHp();
                            },
                        },
                        zhaozhu: {
                            forced: true,
                            group: 'zhaozhu1',
                            trigger: {
                                global: 'gameDrawAfter',
                            },
                            filter(event, player) {
                                return !event.numFixed;
                            },
                            content() {
                                trigger.num = game.countGroup();
                                player.recover(trigger.num);
                            },
                        },
                        箭阵: {
                            enable: 'chooseToUse',
                            usable: 5,
                            viewAs: {
                                name: 'wanjian',
                            },
                            usable: 10,
                            precontent() {
                                player.loseHp();
                            },
                            content() {
                                trigger.num = game.countGroup();
                            },
                            filterCard() {
                                return false;
                            },
                            selectCard: -1,
                            mod: {
                                cardUsable(card) {
                                    if (get.info(card) && get.info(card).forceUsable) return;
                                    return game.countGroup();
                                },
                            },
                            prompt: '失去一点体力,视为使用一张【万箭齐发】',
                            ai: {
                                order() {
                                    var player = _status.event.player;
                                    if (player.hp <= 2) return 0;
                                    return 2;
                                },
                                skillTagFilter(player, tag, arg) {
                                    if (arg != 'use') return false;
                                },
                                respondSha: true,
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
                                    if (player.hasSkill('jueqing') || target.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
                                    return true;
                                },
                                basic: {
                                    useful: [5, 1],
                                    value: [5, 1],
                                    order: 9,
                                },
                                result: {
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
                                    multitarget: 1,
                                    multineg: 1,
                                },
                                wuxie(target, card, player, viewer) {
                                    if (get.attitude(viewer, target) > 0 && target.countCards('h', 'shan')) {
                                        if (!target.countCards('h') || target.hp == 1 || Math.random() < 0.7) return 0;
                                    }
                                },
                            },
                        },
                        分立: {
                            audio: 'ext:将包/audio:2',
                            mod: {
                                maxHandcard(player, num) {
                                    return num + game.countGroup();
                                },
                            },
                        },
                        zhaoyue: {
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            equipSkill: true,
                            audio: 'ext:将包/audio:true',
                            filter(event, player) {
                                if (event.num <= 1) return false;
                                if (event.source && event.source.hasSkillTag('unequip', false, event.card)) return false;
                                return true; //QQQ
                            },
                            _priority: -10,
                            content() {
                                trigger.num = 0;
                            },
                        },
                        D_longhun1: {
                            trigger: {
                                source: ['recoverBegin', 'damageBegin1'],
                            },
                            forced: true,
                            content() {
                                trigger.num++;
                            },
                            ai: {
                                presha: true,
                            },
                        },
                        qimen: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                target: 'useCardToBefore',
                            },
                            forced: true,
                            equipSkill: true,
                            _priority: 15,
                            filter(event, player) {
                                return event.card.name == 'sha';
                            },
                            content() {
                                trigger.cancel();
                            },
                        },
                        D_fanghun: {
                            mod: {
                                aiValue(player, card, num) {
                                    if (card.name != 'sha' && card.name != 'shan') return;
                                    var geti = function () {
                                        var cards = player.getCards('hs', function (card) {
                                            return card.name == 'sha' || card.name == 'shan';
                                        });
                                        if (cards.includes(card)) {
                                            return cards.indexOf(card);
                                        }
                                        return cards.length;
                                    };
                                    return Math.max(num, [7, 5, 5, 3][Math.min(geti(), 3)]);
                                },
                            },
                            audio: 'fanghun',
                            trigger: {
                                player: 'useCard',
                                target: 'useCardToTargeted',
                            },
                            hiddenCard(player, name) {
                                if (!player.storage.D_fanghun || player.storage.D_fanghun <= 0) return false;
                                if (name == 'tao') return player.countCards('hs', 'jiu') > 0;
                                if (name == 'jiu') return player.countCards('hs', 'tao') > 0;
                                return false;
                            },
                            marktext: '影',
                            intro: {
                                content: 'mark',
                                name: '梅影',
                            },
                            forced: true,
                            filter(event, player) {
                                return (get.type(event.card) == 'basic' || get.type(event.card) == 'trick') && get.tag(event.card, 'damage');
                            },
                            content() {
                                player.addMark('D_fanghun', trigger.num || 1);
                                player.addMark('D_fanghun2', trigger.num || 1, false);
                            },
                            group: ['D_fanghun_sha', 'D_fanghun_Draw'],
                        },
                        xinfuhan: {
                            //回合开始时,你可以移去所有\"梅影\"标记并摸等量的牌,从所有蜀势力武将牌中选择并获得任意个技能(主公技除外).若此时你是体力值最低的角色,你回复1点体力
                            audio: 'fuhan',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            limited: true,
                            async content(event, trigger, player) {
                                //QQQ
                                if (player.storage.D_fanghun) {
                                    player.storage.D_fanghun = 0;
                                    player.draw(player.storage.D_fanghun);
                                }
                                player.awakenSkill('xinfuhan');
                                event.skill = [];
                                var list = [];
                                for (var i in lib.character) {
                                    if (lib.character[i][1] == 'shu') {
                                        list.push(i);
                                        event.skill.addArray(lib.character[i][3]);
                                    }
                                }
                                const result = await player
                                    .chooseButton(['从所有蜀势力武将牌中选择并获得任意个技能', [list, 'character'], [event.skill.map((i) => [i, get.translation(i)]), 'tdnodes']], [0, Infinity])
                                    .set('filterButton', (button) => event.skill.includes(button.link))
                                    .set('ai', (button) => Math.random())
                                    .forResult();
                                if (result.links && result.links[0]) {
                                    if (player.isMinHp()) player.recover();
                                    player.addSkillLog(result.links);
                                }
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        D_fanghun_Draw: {
                            trigger: {
                                player: ['useCardAfter', 'respondAfter'],
                            },
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                return event.skill == 'D_fanghun_sha' || event.skill == 'D_fanghun_shan';
                            },
                            content() {
                                player.draw();
                            },
                        },
                        D_fanghun_sha: {
                            audio: 'fanghun',
                            enable: ['chooseToUse', 'chooseToRespond'],
                            prompt: '是否移去1个<梅影>,发动一次〖龙魂〗:将♦️️牌当做杀,♥️️牌当做桃,♣️️牌当做闪,♠️️牌当做无懈可击使用或打出',
                            viewAs(cards, player) {
                                var name;
                                switch (cards[0]?.name) {
                                    case 'sha':
                                        name = 'shan';
                                        break;
                                    case 'shan':
                                        name = 'sha';
                                        break;
                                }
                                if (name) return { name: name };
                                return null;
                            }, //QQQ
                            check(card) {
                                if (ui.selected.cards.length) return 0;
                                var player = _status.event.player;
                                if (_status.event.type == 'phase') {
                                    var max = 0;
                                    var name2;
                                    var list = ['sha', 'tao'];
                                    var map = { sha: 'diamond', tao: 'heart' };
                                    for (var i = 0; i < list.length; i++) {
                                        var name = list[i];
                                        if (
                                            player.countCards('hes', function (card) {
                                                return (name != 'sha' || get.value(card) < 5) && card.suit == map[name];
                                            }) > 0 &&
                                            player.getUseValue({ name: name, nature: name == 'sha' ? 'fire' : null }) > 0
                                        ) {
                                            var temp = get.order({ name: name, nature: name == 'sha' ? 'fire' : null });
                                            if (temp > max) {
                                                max = temp;
                                                name2 = map[name];
                                            }
                                        }
                                    }
                                    if (name2 == card.suit) return name2 == 'diamond' ? 5 - get.value(card) : 20 - get.value(card);
                                    return 0;
                                }
                                return 1;
                            },
                            selectCard: [1],
                            complexCard: true,
                            position: 'hes',
                            filterCard(card, player, event) {
                                event = event || _status.event;
                                //获取当前时机的卡牌选择限制
                                var filter = event._backup.filterCard;
                                //获取卡牌花色
                                var name = card.suit;
                                //如果这张牌是♣️️并且当前时机能够使用/打出闪 那么这张牌可以选择
                                if (name == 'club' && filter({ name: 'shan', cards: [card] }, player, event)) return true;
                                //如果这张牌是♦️️并且当前时机能够使用/打出火杀 那么这张牌可以选择
                                if (name == 'diamond' && filter({ name: 'sha', cards: [card], nature: 'fire' }, player, event)) return true;
                                //如果这张牌是♠️️并且当前时机能够使用/打出无懈 那么这张牌可以选择
                                if (name == 'spade' && filter({ name: 'wuxie', cards: [card] }, player, event)) return true;
                                //如果这张牌是♥️️并且当前时机能够使用/打出桃 那么这张牌可以选择
                                if (name == 'heart' && filter({ name: 'tao', cards: [card] }, player, event)) return true;
                                //上述条件都不满足 那么就不能选择这张牌
                                return false;
                            },
                            filter(event, player) {
                                return player.countMark('D_fanghun') > 0;
                            },
                            onrespond() {
                                return this.onuse.apply(this, arguments);
                            },
                            onuse(result, player) {
                                player.removeMark('D_fanghun', 1);
                            },
                            ai: {
                                respondSha: true,
                                respondShan: true,
                                skillTagFilter(player, tag) {
                                    var name;
                                    switch (tag) {
                                        case 'respondSha':
                                            name = 'diamond';
                                            break;
                                        case 'respondShan':
                                            name = 'club';
                                            break;
                                        case 'save':
                                            name = 'heart';
                                            break;
                                    }
                                    if (!player.countCards('hes', { suit: name })) return false;
                                },
                                order(item, player) {
                                    if (player && _status.event.type == 'phase') {
                                        var max = 0;
                                        var list = ['sha', 'tao'];
                                        var map = { sha: 'diamond', tao: 'heart' };
                                        for (var i = 0; i < list.length; i++) {
                                            var name = list[i];
                                            if (
                                                player.countCards('hes', function (card) {
                                                    return (name != 'sha' || get.value(card) < 5) && card.suit == map[name];
                                                }) > 0 &&
                                                player.getUseValue({ name: name, nature: name == 'sha' ? 'fire' : null }) > 0
                                            ) {
                                                var temp = get.order({ name: name, nature: name == 'sha' ? 'fire' : null });
                                                if (temp > max) max = temp;
                                            }
                                        }
                                        max /= 1.1;
                                        return max;
                                    }
                                    return 2;
                                },
                            },
                            hiddenCard(player, name) {
                                if (name == 'wuxie' && _status.connectMode && player.countCards('hs') > 0) return true;
                                if (name == 'wuxie') return player.countCards('hes', { suit: 'spade' }) > 0;
                                if (name == 'tao') return player.countCards('hes', { suit: 'heart' }) > 0;
                            },
                        },
                        longhun_wuxie: {
                            forced: true,
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.name == 'wuxie';
                            },
                            content() {
                                trigger.directHit.addArray(
                                    game.filterPlayer(function (current) {
                                        return current != player;
                                    })
                                );
                            },
                        },
                        xinbanlonghun: {
                            audio: 'ext:将包/audio:2',
                            group: ['D_longhun3', 'D_longhun1', 'longhun_wuxie'],
                            charlotte: true,
                            enable: ['chooseToRespond', 'chooseToUse'],
                            usable: 5,
                            filter(event, player) {
                                return player.countCards('hes') > 0;
                            },
                            hiddenCard(player, name) {
                                if (name == 'wuxie' && _status.connectMode && player.countCards('hs') > 0) return true;
                                if (name == 'wuxie') return player.countCards('hes') > 0;
                                if (name == 'tao') return player.countCards('hes') > 0;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = ['huosha', 'shan', 'tao', 'jiu', 'wuxie'];
                                    for (var i = 0; i < list.length; i++) {
                                        list[i] = ['', '', list[i]];
                                    }
                                    return ui.create.dialog('龙魂', [list, 'vcard']);
                                },
                                filter(button, player) {
                                    return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
                                },
                                backup(links, player) {
                                    return {
                                        audio: 'relonghun',
                                        filterCard(card, player) {
                                            var name = links[0][2];
                                            if (name == 'shan' || name == 'jiu' || name == 'sha' || name == 'tao' || name == 'wuxie') {
                                                return get.color(card);
                                            }
                                            return false;
                                        },
                                        position: 'hes',
                                        selectCard: 1,
                                        popname: true,
                                        ai(card) {
                                            return 8 - get.value(card);
                                        },
                                        viewAs: {
                                            name: links[0][2],
                                            nature: links[0][3],
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                                },
                            },
                            ai: {
                                fireAttack: true,
                                respondSha: true,
                                respondShan: true,
                                skillTagFilter(player) {
                                    if (!player.countCards('hes')) return false;
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
                        D_hongyan: {
                            mod: {
                                suit(card, suit) {
                                    if (suit != 'emm') return '';
                                },
                            },
                            charlotte: true,
                            lastDo: true,
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                global: 'judgeBefore',
                            },
                            logTarget: 'player',
                            _priority: 2,
                            content() {
                                'step 0';
                                if (!player.storage.D_hongyan) player.storage.D_hongyan = 0;
                                player.storage.D_hongyan++;
                                var card = ui.cardPile.hasChildNodes() ? ui.cardPile.firstChild : get.cards(1);
                                event.card = card;
                                var judge0 = trigger.judge(card);
                                var judge1 = 0;
                                var choice = event.card.number;
                                event.suitchoice = event.card.suit;
                                event.namex = [];
                                event.namechoice = 'cancel2';
                                for (var i = 0; i < lib.inpile.length; i++) {
                                    var name = lib.inpile[i];
                                    if (name == 'sha') {
                                        event.namex.push(['basic', '', 'sha']);
                                        event.namex.push(['basic', '', 'sha', 'fire']);
                                        event.namex.push(['basic', '', 'sha', 'thunder']);
                                        event.namex.push(['basic', '', 'sha', 'ice']);
                                        event.namex.push(['basic', '', 'sha', 'kami']);
                                    } else if (get.type(name) == 'trick') event.namex.push(['trick', '', name]);
                                    else if (get.type(name) == 'delay') event.namex.push(['delay', '', name]);
                                    else if (get.type(name) == 'basic') event.namex.push(['basic', '', name]);
                                    else if (get.type(name) == 'equip') event.namex.push(['equip', '', name]);
                                    else if (get.type(name) != 'equip' && get.type(name) != 'trick' && get.type(name) != 'delay' && get.type(name) != 'basic') event.namex.push(name);
                                }
                                var attitude = get.attitude(player, trigger.player);
                                var str = '请选择' + get.translation(trigger.player) + '的判定结果';
                                if (player.isUnderControl()) {
                                    game.swapPlayerAuto(player);
                                }
                                event.switchToAuto = function () {
                                    _status.imchoosing = false;
                                    event.suitx = ['diamond', 'heart', 'club', 'spade'];
                                    for (var j = 0; j < event.namex.length; j++) {
                                        for (var x = 0; x < 4; x++) {
                                            for (var i = 1; i < 14; i++) {
                                                var judge2 =
                                                    (trigger.judge({
                                                        name: event.namex[j][2],
                                                        type: event.namex[j][0],
                                                        nature: event.namex[j][3],
                                                        suit: event.suitx[x],
                                                        number: i,
                                                    }) -
                                                        judge0) *
                                                    attitude;
                                                if (judge2 > judge1) {
                                                    choice = i;
                                                    event.suitchoice = event.suitx[x];
                                                    event.namechoice = event.namex[j];
                                                    judge1 = judge2;
                                                    if (judge2 > 0) break;
                                                }
                                            }
                                        }
                                    }
                                    event._result = {
                                        suit: event.suitchoice,
                                        number: choice,
                                        bool: true,
                                    };
                                    if (event.dialog) event.dialog.close();
                                    if (event.control) event.control.close();
                                    game.resume();
                                    _status.imchoosing = false;
                                };
                                var chooseButton = function (player, str) {
                                    var event = _status.event;
                                    player = player || event.player;
                                    if (!event._result) event._result = {};
                                    var dialog = ui.create.dialog(str, 'forcebutton', 'hidden');
                                    event.dialog = dialog;
                                    dialog.addText('花色');
                                    var table = ui.create.div(
                                        '.add-setting',
                                        {
                                            margin: 0,
                                            width: '100%',
                                            position: 'relative',
                                        },
                                        dialog.content
                                    );
                                    var listi = ['spade', 'heart', 'club', 'diamond'];
                                    for (var i = 0; i < listi.length; i++) {
                                        var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                                        td.link = listi[i];
                                        table.appendChild(td);
                                        td.innerHTML = '<span>' + get.translation(listi[i]) + '</span>';
                                        td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                            if (_status.dragged) return;
                                            if (_status.justdragged) return;
                                            _status.tempNoButton = true;
                                            setTimeout(function () {
                                                _status.tempNoButton = false;
                                            }, 500);
                                            var link = this.link;
                                            var current = this.parentNode.querySelector('.bluebg');
                                            if (current) {
                                                current.classList.remove('bluebg');
                                            }
                                            this.classList.add('bluebg');
                                            event._result.suit = link;
                                        });
                                    }
                                    dialog.addText('点数');
                                    table = ui.create.div(
                                        '.add-setting',
                                        {
                                            margin: 0,
                                            width: '100%',
                                            position: 'relative',
                                        },
                                        dialog.content
                                    );
                                    for (var i = 1; i < 14; i++) {
                                        var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode', table);
                                        td.link = i;
                                        var num = i;
                                        td.innerHTML = '<span>' + get.strNumber(num) + '</span>';
                                        td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                            if (_status.dragged) return;
                                            if (_status.justdragged) return;
                                            _status.tempNoButton = true;
                                            setTimeout(function () {
                                                _status.tempNoButton = false;
                                            }, 500);
                                            var link = this.link;
                                            var current = this.parentNode.querySelector('.bluebg');
                                            if (current) {
                                                current.classList.remove('bluebg');
                                            }
                                            this.classList.add('bluebg');
                                            event._result.number = link;
                                        });
                                    }
                                    dialog.add('　　');
                                    event.dialog.open();
                                    event.control = ui.create.control('ok', 'cancel2', function (link) {
                                        var result = event._result;
                                        if (link == 'cancel2') result.bool = false;
                                        else {
                                            if (!result.number || !result.suit) return;
                                            result.bool = true;
                                        }
                                        event.dialog.close();
                                        event.control.close();
                                        game.resume();
                                        _status.imchoosing = false;
                                    });
                                    for (var i = 0; i < event.dialog.buttons.length; i++) {
                                        event.dialog.buttons[i].classList.add('selectable');
                                    }
                                    game.pause();
                                    game.countChoose();
                                };
                                if (event.isMine()) {
                                    chooseButton(player, str);
                                } else {
                                    event.switchToAuto();
                                }
                                ('step 1');
                                if (event.dialog) event.dialog.close();
                                if (event.control) event.control.close();
                                event.resultx = result;
                                var dialog = ui.create.dialog('红颜', [event.namex, 'vcard']);
                                player
                                    .chooseButton(dialog, true)
                                    .set('ai', function (button) {
                                        var choice = _status.event.botton;
                                        switch (button.link) {
                                            case choice:
                                                return 999;
                                            default:
                                                return Math.floor(Math.random() * 10);
                                        }
                                    })
                                    .set('botton', event.namechoice).prompt = get.prompt2(event.name);
                                ('step 2');
                                Object.assign(result, event.resultx);
                                trigger.fixedResult = {
                                    name: result.links[0][2],
                                    suit: result.suit,
                                    color: get.color({ suit: result.suit }),
                                    number: result.number,
                                    nature: result.links[0][3],
                                };
                                var card = game.createCard(trigger.fixedResult),
                                    node;
                                if (game.chess) {
                                    node = card.copy('thrown', 'center', ui.arena).addTempClass('start');
                                } else {
                                    node = player.$throwordered(card.copy(), true);
                                }
                                node.classList.add('thrownhighlight');
                                ui.arena.classList.add('thrownhighlight');
                                game.log(player, '将判定结果修改为了', '#g', card);
                                Object.assign(trigger.fixedResult, {
                                    card: card,
                                    node: node,
                                    judge: trigger.judge(card),
                                });
                                if (trigger.player.judging.length) Object.assign(trigger.player.judging[0], trigger.fixedResult);
                                player.popup(get.translation(result.suit + 2) + get.strNumber(result.number), 'thunder');
                                if (!trigger.result) trigger.result = {};
                                Object.assign(trigger.result, trigger.fixedResult);
                                trigger.noJudgeTrigger = true;
                                trigger.direct = true;
                                trigger.cancel();
                                if (trigger.result.judge > 0) {
                                    trigger.result.bool = true;
                                    trigger.player.popup('洗具');
                                }
                                if (trigger.result.judge < 0) {
                                    trigger.result.bool = false;
                                    trigger.player.popup('杯具');
                                }
                                game.log(trigger.player, '的判定结果为', card);
                                trigger.position.appendChild(card);
                                ('step 3');
                                ui.arena.classList.remove('thrownhighlight');
                                game.addVideo('judge2', null, event.videoId);
                                ui.clear();
                                var card = trigger.result.card;
                                trigger.position.appendChild(card);
                                trigger.result.node.delete();
                            },
                        },
                        jiaozi1: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                global: 'dying',
                            },
                            filter(event, player) {
                                return event.player.hp <= 0 && event.player != player;
                            },
                            forced: true,
                            content() {
                                if (trigger.parent.name == 'damage' && get.itemtype(trigger.parent.cards) == 'cards' && get.position(trigger.parent.cards[0], true) == 'o') {
                                    player.gain(trigger.parent.cards, 'gain2');
                                }
                            },
                        },
                        D_wushuang: {
                            audio: 'wushuang',
                            group: 'D_wushuang1',
                            mod: {
                                selectTarget(card, player, range) {
                                    if (range[1] == -1) return;
                                    if (card.name == 'juedou' || card.name == 'sha') range[1] += 2;
                                },
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + 1;
                                },
                                targetInRange(card) {
                                    if (card.name == 'sha') return true;
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
                                var num = [0, 1].randomGet();
                                if (num == 0) {
                                    var id = trigger.target.playerid;
                                    var map = trigger.parent.customArgs;
                                    if (!map[id]) map[id] = {};
                                    if (typeof map[id].shanRequired == 'number') {
                                        map[id].shanRequired++;
                                    } else {
                                        map[id].shanRequired = 2;
                                    }
                                } else {
                                    trigger.directHit.addArray(
                                        game.filterPlayer(function (current) {
                                            return current != player;
                                        })
                                    );
                                    var id = trigger.target.playerid;
                                    var map = trigger.customArgs;
                                    if (!map[id]) map[id] = {};
                                    if (!map[id].extraDamage) map[id].extraDamage = 0;
                                    map[id].extraDamage++;
                                    trigger.parent.D_wushuang = true;
                                }
                            },
                            ai: {
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    if ((arg && arg.card.name != 'sha') || arg.target.countCards('h', 'shan') > 1) return false;
                                },
                            },
                        },
                        D_wushuang1: {
                            audio: 'wushuang',
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
                                var num = [0, 1].randomGet();
                                if (num == 0) {
                                    var id = (player == trigger.player ? trigger.target : trigger.player)['playerid'];
                                    var idt = trigger.target.playerid;
                                    var map = trigger.parent.customArgs;
                                    if (!map[idt]) map[idt] = {};
                                    if (!map[idt].shaReq) map[idt].shaReq = {};
                                    if (!map[idt].shaReq[id]) map[idt].shaReq[id] = 1;
                                    map[idt].shaReq[id]++;
                                } else {
                                    trigger.directHit.addArray(
                                        game.filterPlayer(function (current) {
                                            return current != player;
                                        })
                                    );
                                    var id = trigger.target.playerid;
                                    var map = trigger.customArgs;
                                    if (!map[id]) map[id] = {};
                                    if (!map[id].extraDamage) map[id].extraDamage = 0;
                                    map[id].extraDamage++;
                                    trigger.parent.D_wushuang = true;
                                }
                            },
                            ai: {
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    if ((arg && arg.card.name != 'juedou') || Math.floor(arg.target.countCards('h', 'sha') / 2) > player.countCards('h', 'sha')) return false;
                                },
                            },
                        },
                        D_shenwei: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                global: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                if (event.parent.triggeredTargets3.length > 1) return false;
                                if (get.info(event.card).multitarget) return false;
                                if (player.storage.D_shenwei) return false;
                                return (player != event.player && event.card.name == 'sha') || event.card.name == 'juedou';
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('神威'), '为' + get.translation(trigger.card) + '减少一个目标', [Infinity, trigger.targets.length], function (card, player, target) {
                                        return _status.event.targets.includes(target);
                                    })
                                    .set('ai', function (target) {
                                        return -get.effect(target, trigger.card, trigger.player, _status.event.player);
                                    })
                                    .set('targets', trigger.targets);
                                ('step 1');
                                if (result.bool) {
                                    trigger.excluded.addArray(result.targets);
                                }
                            },
                        },
                        D_guose: {
                            mod: {
                                targetEnabled(card, player, target, now) {
                                    if (card.name == 'bingliang' || card.name == 'lebu') return false;
                                },
                                targetInRange(card) {
                                    if (card.name == 'bingliang') return true;
                                },
                            },
                            audio: 'guose',
                            charlotte: true,
                            enable: 'phaseUse',
                            usable: 5,
                            filter(event, player) {
                                return player.countCards('hes') > 0;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = ['lebu', 'bingliang'];
                                    for (var i = 0; i < list.length; i++) {
                                        list[i] = ['', '', list[i]];
                                    }
                                    return ui.create.dialog('国色', [list, 'vcard']);
                                },
                                filter(button, player) {
                                    return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
                                },
                                backup(links, player) {
                                    return {
                                        audio: 'guose',
                                        filterCard(card, player) {
                                            var name = links[0][2];
                                            if (name == 'lebu' || name == 'bingliang') {
                                                return get.color(card);
                                            }
                                            return false;
                                        },
                                        position: 'hes',
                                        selectCard: 1,
                                        popname: true,
                                        ai(card) {
                                            return 8 - get.value(card);
                                        },
                                        viewAs: {
                                            name: links[0][2],
                                            nature: links[0][3],
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                                },
                            },
                            ai: {
                                threaten: 1.5,
                                basic: {
                                    order: 1,
                                    useful: 1,
                                    value: 8,
                                },
                                result: {
                                    player: 1, //QQQ
                                },
                                tag: {
                                    skip: 'phaseUse',
                                },
                            },
                            audioname2: {
                                key_shiki: 'shiki_omusubi',
                            },
                        },
                        D_liuli: {
                            audio: 'liuli',
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            forced: true,
                            filter(event, player) {
                                return (get.type(event.card) == 'basic' || get.type(event.card) == 'trick') && get.tag(event.card, 'damage');
                            },
                            content() {
                                'step 0';
                                player.draw();
                                player.chooseCardTarget({
                                    filterCard(card, player) {
                                        return lib.filter.cardDiscardable(card, player);
                                    },
                                    filterTarget(card, player, target) {
                                        return player != target;
                                    },
                                    ai1(card) {
                                        return 10 - get.value(card);
                                    },
                                    ai2(target) {
                                        var att = get.attitude(_status.event.player, target);
                                        var trigger = _status.event.getTrigger();
                                        var da = 0;
                                        if (_status.event.player.hp == 1) {
                                            da = 10;
                                        }
                                        if (trigger.num > 1) {
                                            if (target.maxHp > 5 && target.hp > 1) return -att / 10 + da;
                                            return -att + da;
                                        }
                                        var eff = get.damageEffect(target, trigger.source, target, trigger.nature);
                                        if (att == 0) return 0.1 + da;
                                        if (eff >= 0 && trigger.num == 1) {
                                            return att + da;
                                        }
                                        if (target.hp == target.maxHp) return -att + da;
                                        if (target.hp == 1) {
                                            if (target.maxHp <= 4 && !target.hasSkillTag('maixie')) {
                                                if (target.maxHp <= 3) {
                                                    return -att + da;
                                                }
                                                return -att / 2 + da;
                                            }
                                            return da;
                                        }
                                        if (target.hp == target.maxHp - 1) {
                                            if (target.hp > 2 || target.hasSkillTag('maixie')) return att / 5 + da;
                                            if (att > 0) return 0.02 + da;
                                            return 0.05 + da;
                                        }
                                        return att / 2 + da;
                                    },
                                    prompt: get.prompt2('D_liuli'),
                                });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.discard(result.cards);
                                    var evt = trigger.parent;
                                    evt.triggeredTargets2.remove(player);
                                    evt.targets.remove(player);
                                    evt.targets.push(target);
                                }
                            },
                            ai: {
                                maixie_defend: true,
                                effect: {
                                    target(card, player, target) {
                                        if (player.hasSkillTag('jueqing', false, target)) return;
                                        if (get.tag(card, 'damage') && target.countCards('hejs') >= 0) return 0.7;
                                    },
                                },
                                threaten(player, target) {
                                    if (target.countCards('h') == 0) return 2;
                                },
                            },
                            audioname2: {
                                key_shiki: 'shiki_omusubi',
                            },
                        },
                        D_qiaobian: {
                            audio: 'qiaobian',
                            group: ['D_qiaobian1', 'D_qiaobian2', 'D_qiaobian3'],
                            trigger: {
                                player: 'phaseDrawBefore',
                            },
                            forced: true,
                            async content(event, trigger, player) {
                                //QQQ
                                const result = await player
                                    .chooseTarget([1, Infinity], '获得任意名角色各一张牌', function (card, player, target) {
                                        return target != player && target.countCards('h');
                                    })
                                    .set('ai', (target) => -get.attitude(player, target))
                                    .forResult();
                                if (result.targets && result.targets[0]) {
                                    for (var i of result.targets) {
                                        await player.gainPlayerCard(i);
                                    }
                                }
                            },
                            ai: {
                                expose: 0.2,
                            },
                        },
                        D_qiaobian1: {
                            audio: 'qiaobian',
                            trigger: {
                                player: 'phaseJudgeBefore',
                            },
                            forced: true,
                            content() {
                                trigger.cancel();
                            },
                        },
                        D_qiaobian2: {
                            audio: 'qiaobian',
                            trigger: {
                                player: 'phaseUseBefore',
                            },
                            forced: true,
                            content() {
                                player.moveCard();
                            },
                            ai: {
                                expose: 0.2,
                            },
                        },
                        D_qiaobian3: {
                            audio: 'qiaobian',
                            trigger: {
                                player: 'phaseDiscardBefore',
                            },
                            forced: true,
                            content() {
                                trigger.cancel();
                            },
                        },
                        D_qingnang: {
                            audio: 'qingnang',
                            enable: 'phaseUse',
                            usable: 5,
                            filterCard: true,
                            check(card) {
                                return 9 - get.value(card);
                            },
                            filterTarget(card, player, target) {
                                if (target.hp >= target.maxHp) return false;
                                return true;
                            },
                            content() {
                                target.hp = target.maxHp;
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
                            audioname2: {
                                key_shiki: 'shiki_omusubi',
                            },
                        },
                        miaoshou: {
                            enable() {
                                return game.dead.length && (!_status.miaoshou || !_status.miaoshou.includes(_status.event.player));
                            },
                            notarget: true,
                            fullskin: true,
                            content() {
                                'step 0';
                                player.removeMark('miaoshou', player.storage.miaoshou);
                                player.awakenSkill('miaoshou');
                                var next = player.chooseTarget(true, '选择一名角色令其复活');
                                next.set('filterTarget', function (card, player, target) {
                                    if (target.isAlive()) return false;
                                    return true;
                                });
                                next.set('deadTarget', true);
                                next.set('ai', function () {
                                    for (var i = 0; i < game.dead.length; i++) return get.attitude(_status.event.player, game.dead[i]) > 0;
                                });
                                ('step 1');
                                if (result.bool) {
                                    var dead = result.targets[0];
                                    dead.revive(1);
                                    game.addVideo('revive', dead);
                                    event.dead = dead;
                                    if (!_status.miaoshou) _status.miaoshou = [];
                                    _status.miaoshou.add(player);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (event.dead) event.dead.draw(4);
                                if (event.dead) event.dead.hp = event.dead.maxHp;
                            },
                            ai: {
                                basic: {
                                    useful() {
                                        var player = _status.event.player;
                                        for (var i = 0; i < game.dead.length; i++) {
                                            if (get.attitude(player, game.dead[i]) > 1 && (!_status.miaoshou || !_status.miaoshou.includes(player))) return 7;
                                        }
                                        return 0;
                                    },
                                    value(card, player) {
                                        for (var i = 0; i < game.dead.length; i++) {
                                            if (get.attitude(player, game.dead[i]) > 1 && (!_status.miaoshou || !_status.miaoshou.includes(player))) return 11;
                                        }
                                        return 0;
                                    },
                                },
                                order(card, player) {
                                    for (var i = 0; i < game.dead.length; i++) {
                                        if (get.attitude(player, game.dead[i]) > 3 && (!_status.miaoshou || !_status.miaoshou.includes(player))) return 7;
                                    }
                                    return -10;
                                },
                                result: {
                                    player(player) {
                                        for (var i = 0; i < game.dead.length; i++) {
                                            if (get.attitude(player, game.dead[i]) > 3 && (!_status.miaoshou || !_status.miaoshou.includes(player))) return 2;
                                        }
                                        return -10;
                                    },
                                },
                            },
                        },
                        D_guanxing: {
                            audio: 'guanxing',
                            trigger: {
                                player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'],
                            },
                            forced: true,
                            async content(event, trigger, player) {
                                //QQQ
                                var num = game.players.length;
                                var cards = get.cards(num);
                                game.cardsGotoOrdering(cards);
                                const result = await player
                                    .chooseToMove()
                                    .set('list', [['牌堆顶', cards], ['牌堆底']])
                                    .set('prompt', '将牌移动到牌堆顶或牌堆底')
                                    .set('processAI', function (list) {
                                        var cards = list[0][1];
                                        const target = trigger.name == 'phaseZhunbei' ? player : player.next;
                                        const att = get.attitude(player, target);
                                        const top = [],
                                            bottom = cards;
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
                                        return [top, bottom];
                                    })
                                    .forResult(); //给别人观星
                                result.moved[0].reverse();
                                for (var i of result.moved[0]) {
                                    ui.cardPile.insertBefore(i, ui.cardPile.firstChild);
                                }
                                for (var i of result.moved[1]) {
                                    ui.cardPile.appendChild(i);
                                }
                                player.popup(get.cnNumber(result.moved[0].length) + '上' + get.cnNumber(result.moved[1].length) + '下');
                                game.log(player, '将' + get.cnNumber(result.moved[0].length) + '张牌置于牌堆顶');
                                game.updateRoundNumber();
                            },
                            ai: {
                                threaten: 1.2,
                            },
                        },
                        D_kongcheng: {
                            mod: {
                                targetEnabled(card, player, target, now) {
                                    if ((get.type(card) == 'trick' || get.type(card) == 'basic') && get.tag(card, 'damage')) return false;
                                },
                            },
                            group: 'D_kongcheng1',
                            audio: 'kongcheng1',
                            audioname: ['re_zhugeliang'],
                            ai: {
                                noh: true,
                                skillTagFilter(player, tag) {
                                    if (tag == 'noh') {
                                        if (player.countCards('h') != 1) return false;
                                    }
                                },
                            },
                        },
                        D_kongcheng1: {
                            audio: 'kongcheng1',
                            trigger: {
                                player: 'loseEnd',
                            },
                            forced: true,
                            firstDo: true,
                            filter(event, player) {
                                if (player.countCards('h')) return false;
                                for (var i of event.cards) {
                                    if (i.original == 'h') return true;
                                }
                                return false;
                            },
                            content() { },
                        },
                        D_canshi2: {
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.countCards('he') == 0) return false;
                                var type = get.type(event.card, 'trick');
                                return type == 'basic' || type == 'trick';
                            },
                            autodelay: true,
                            content() {
                                player.draw();
                            },
                        },
                        D_canshi3: {
                            audio: 'canshi',
                            trigger: {
                                source: ['recoverBegin', 'damageBegin1'],
                            },
                            forced: true,
                            content() {
                                trigger.num++;
                            },
                            ai: {
                                presha: true,
                            },
                        },
                        D_zhanjue: {
                            audio: 'zhanjue',
                            enable: 'phaseUse',
                            usable: 5,
                            filterCard: true,
                            selectCard: 1,
                            position: 'h',
                            filter(event, player) {
                                if (player.getStat().skill.D_zhanjue_draw) return false;
                                var hs = player.getCards('h');
                                if (!hs.length) return false;
                                for (var i = 0; i < hs.length; i++) {
                                    var mod2 = game.checkMod(hs[i], player, 'unchanged', 'cardEnabled2', player);
                                    if (mod2 === false) return false;
                                }
                                return true;
                            },
                            viewAs: {
                                name: 'juedou',
                            },
                            group: ['D_zhanjue1'],
                            ai: {
                                damage: true,
                                order: 1,
                                effect: {
                                    player(card, player, target) {
                                        if (_status.event.skill == 'D_zhanjue') {
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
                                            )
                                                return;
                                            if (player.countCards('h') >= 3 || target.countCards('h') >= 3) return 'zeroplayertarget';
                                            if (player.countCards('h', 'tao')) return 'zeroplayertarget';
                                            if (target.countCards('h', 'sha') > 1) return 'zeroplayertarget';
                                        }
                                    },
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
                        D_zhanjue1: {
                            trigger: {
                                player: 'useCardAfter',
                            },
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                return event.skill == 'D_zhanjue';
                            },
                            content() {
                                'step 0';
                                var stat = player.getStat().skill;
                                if (!stat.D_zhanjue_draw) stat.D_zhanjue_draw = 0;
                                stat.zhanjue_draw++;
                                var list = game.filterPlayer(function (current) {
                                    if (
                                        current.getHistory('damage', function (evt) {
                                            return evt.card == trigger.card;
                                        }).length
                                    ) {
                                        if (current == player) {
                                            stat.zhanjue_draw++;
                                        }
                                        return true;
                                    }
                                    return false;
                                });
                                if (list.length) {
                                    list.sortBySeat();
                                    player.draw(list);
                                }
                                ('step 1');
                            },
                        },
                        D_qinwang: {
                            audio: 'qinwang1',
                            enable: ['chooseToRespond', 'chooseToUse'],
                            usable: 5,
                            filterCard: true,
                            selectCard: 0,
                            viewAs: {
                                name: 'sha',
                            },
                            prompt: '视为使用或打出一张杀',
                            check(card) {
                                return 4 - get.value(card);
                            },
                            ai: {
                                respondSha: true,
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
                        D_liegong: {
                            shaRelated: true,
                            mod: {
                                targetInRange(card, player, target) {
                                    if (card.name == 'sha' && typeof card.number == 'number') {
                                        if (get.distance(player, target) <= card.number) return true;
                                    }
                                },
                                cardUsable(card) {
                                    if (card) return Infinity;
                                },
                                selectTarget(card, player, range) {
                                    if (range[1] == -1) return;
                                    if (typeof card.number == 'number') {
                                        if (card.name == 'juedou' || card.name == 'sha') range[1] += card.number;
                                    }
                                },
                            },
                            audio: 'liegong',
                            audioname: ['re_huangzhong'],
                            trigger: {
                                player: 'useCardToTargeted',
                            },
                            logTarget: 'target',
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            filter(event, player) {
                                return event.card.name == 'sha' || event.card.name == 'juedou';
                            },
                            content() {
                                trigger.directHit.addArray(
                                    game.filterPlayer(function (current) {
                                        return current != player;
                                    })
                                );
                                var id = trigger.target.playerid;
                                var map = trigger.customArgs;
                                if (!map[id]) map[id] = {};
                                if (!map[id].extraDamage) map[id].extraDamage = 0;
                                map[id].extraDamage++;
                                trigger.parent.D_liegong = true;
                            },
                            ai: {
                                threaten: 0.5,
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    if (
                                        get.attitude(player, arg.target) <= 0 &&
                                        arg.card.name == 'sha' &&
                                        player.countCards('h', function (card) {
                                            return card != arg.card && (!arg.card.cards || !arg.card.cards.includes(card));
                                        }) >= arg.target.countCards('h')
                                    )
                                        return true;
                                    return false;
                                },
                            },
                        },
                        D_shouxi: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            forced: true,
                            init(player) {
                                if (!player.storage.D_shouxi) player.storage.D_shouxi = [];
                            },
                            filter(event, player) {
                                return (get.type(event.card) == 'basic' || get.type(event.card) == 'trick') && get.tag(event.card, 'damage');
                            },
                            content() {
                                'step 0';
                                var list = lib.inpile.filter(function (i) {
                                    if (player.storage.D_shouxi.includes(i)) return false;
                                    var type = get.type(i);
                                    if (type == 'basic' || type == 'trick') return true;
                                    return false;
                                });
                                for (var i = 0; i < list.length; i++) {
                                    list[i] = [get.type(list[i]), '', list[i]];
                                }
                                player.chooseButton([get.prompt('D_shouxi', trigger.player), [list, 'vcard']]).set('ai', function (button) {
                                    return Math.random();
                                });
                                ('step 1');
                                if (result.bool) {
                                    var name = result.links[0][2];
                                    event.vcard = result.links;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                var name = event.cardname;
                                trigger.player
                                    .chooseToDiscard(function (card) {
                                        return card.name == _status.event.cardname;
                                    })
                                    .set('ai', function (card) {
                                        if (_status.event.att < 0) {
                                            return 10 - get.value(card);
                                        }
                                        return 0;
                                    })
                                    .set('att', get.attitude(trigger.player, player))
                                    .set('cardname', name)
                                    .set('dialog', ['守玺:请弃置一张【' + get.translation(name) + '】,否则此【杀】对' + get.translation(player) + '无效', [event.vcard, 'vcard']]);
                                ('step 3');
                                if (result.bool == false) {
                                    trigger.excluded.push(player);
                                }
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (card.name == 'sha' && get.attitude(player, target) < 0) {
                                            return 0.3;
                                        }
                                    },
                                },
                            },
                        },
                        xionghuo1: {
                            marktext: '戾',
                            mark: true,
                            intro: {
                                name: '暴戾',
                                content: 'mark',
                            },
                        },
                        D_xionghuo1: {
                            audio: 'xinfu_xionghuo',
                            logTarget: 'player',
                            line: false,
                            forced: true,
                            trigger: {
                                global: 'phaseBegin',
                            },
                            filter(event, player) {
                                return event.player.countMark('xionghuo1') > 0 && event.player != player;
                            },
                            content() {
                                'step 0';
                                trigger.player.removeMark('xionghuo1', trigger.player.countMark('xionghuo1'));
                                ('step 1');
                                player.line(trigger.player, 'fire');
                                trigger.player.damage('fire');
                                if (!trigger.player.storage.xionghuo_disable1) trigger.player.storage.xionghuo_disable1 = [];
                                trigger.player.storage.xionghuo_disable1.push(player);
                                trigger.player.addTempSkill('xionghuo_disable1', 'phaseAfter');
                                ('step 2');
                                player.line(trigger.player, 'water');
                                trigger.player.loseHp();
                                trigger.player.addMark('xionghuo_low1', 2, false);
                                trigger.player.addTempSkill('xionghuo_low1', 'phaseAfter');
                                ('step 3');
                                player.line(trigger.player, 'green');
                                var card1 = trigger.player.getCards('h').randomGet();
                                var card2 = trigger.player.getCards('e').randomGet();
                                var list = [];
                                if (card1) list.push(card1);
                                if (card2) list.push(card2);
                                if (list.length) {
                                    player.gain(list, trigger.player, 'giveAuto', 'bySelf');
                                }
                            },
                        },
                        D_xionghuo2: {
                            audio: 'xinfu_xionghuo',
                            forced: true,
                            trigger: {
                                source: 'damageBegin1',
                            },
                            filter(event, player) {
                                return event.player.countMark('xionghuo1') > 0;
                            },
                            content() {
                                trigger.num++;
                            },
                        },
                        xionghuo_disable1: {
                            mod: {
                                playerEnabled(card, player, target) {
                                    if (player.storage.xionghuo_disable1 && player.storage.xionghuo_disable1.includes(target)) return false;
                                },
                            },
                            charlotte: true,
                            mark: true,
                            marktext: '禁',
                            intro: {
                                content: '本回合内不能对$使用卡牌',
                            },
                        },
                        xionghuo_low1: {
                            mod: {
                                maxHandcard(player, num) {
                                    return num - player.countMark('xionghuo_low1');
                                },
                            },
                            marktext: '减',
                            mark: true,
                            charlotte: true,
                            intro: {
                                content: '本回合内手牌上限-#',
                            },
                        },
                        D_xionghuo: {
                            audio: 'xinfu_xionghuo',
                            group: ['D_xionghuo1', 'D_xionghuo2'],
                            init: (player) => player.addMark('xionghuo1', game.countPlayer()), //QQQ
                            enable: 'phaseUse',
                            usable: 5,
                            filter(event, player) {
                                return player.countMark('xionghuo1') > 0;
                            },
                            filterTarget(card, player, target) {
                                if (target.hasMark('xionghuo1')) return false;
                                return player != target > 0;
                            },
                            content() {
                                player.removeMark('xionghuo1', 1);
                                target.addMark('xionghuo1', 1);
                                player.addTempSkill('zhanlong2', { player: 'phaseJieshuBegin' });
                            },
                            ai: {
                                order: 11,
                                result: {
                                    target(player, target) {
                                        if (
                                            (player.countMark('xionghuo1') >= 2 ||
                                                !game.hasPlayer(function (current) {
                                                    return current != player && get.attitude(player, current) < 0 && current.hasMark('xionghuo1');
                                                })) &&
                                            player.countCards('h', function (card) {
                                                return (
                                                    get.tag(card, 'damage') &&
                                                    player.canUse(card, target, null, true) &&
                                                    player.getUseValue(card) > 0 &&
                                                    get.effect_use(target, card, player) > 0 &&
                                                    target.hasSkillTag('filterDamage', null, {
                                                        player: player,
                                                        card: card,
                                                    })
                                                );
                                            })
                                        )
                                            return 3 / Math.max(1, target.hp);
                                        if (
                                            (!player.hasUnknown() &&
                                                game.countPlayer(function (current) {
                                                    return get.attitude(player, current) < 0;
                                                }) <= 1) ||
                                            player.countMark('xionghuo1') >= 2
                                        ) {
                                            return -1;
                                        }
                                        return 0;
                                    },
                                },
                                effect: {
                                    player(card, player, target) {
                                        if (
                                            player != target &&
                                            get.tag(card, 'damage') &&
                                            target &&
                                            target.hasMark('xionghuo1') &&
                                            !target.hasSkillTag('filterDamage', null, {
                                                player: player,
                                                card: card,
                                            })
                                        )
                                            return [1, 0, 1, -2];
                                    },
                                },
                                threaten: 1.6,
                            },
                        },
                        D_shajue: {
                            audio: 'xinfu_shajue',
                            group: 'D_shajue1',
                            trigger: {
                                global: 'dying',
                            },
                            filter(event, player) {
                                return event.player.hp <= 0 && event.player != player;
                            },
                            forced: true,
                            content() {
                                if (trigger.parent.name == 'damage' && get.itemtype(trigger.parent.cards) == 'cards' && get.position(trigger.parent.cards[0], true) == 'o') {
                                    player.gain(trigger.parent.cards, 'gain2');
                                }
                                player.addMark('xionghuo1', 1);
                            },
                        },
                        pojun5: {
                            audio: 'ext:将包/audio:2',
                            forced: true,
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            content() {
                                player.awakenSkill('gudingdao');
                                player.removeMark('gudingdao', player.storage.gudingdao);
                                player.addSkill('gudingdao');
                                player.draw(2);
                            },
                        },
                        D_huashen: {
                            audio: 'rehuashen',
                            forced: true,
                            content() {
                                'step 0';
                                _status.noclearcountdown = true;
                                event.videoId = lib.status.videoId++;
                                var cards = player.storage.D_huashen.character.slice(0);
                                var skills = [];
                                var sto = player.storage.D_huashen;
                                for (var i in player.storage.D_huashen.map) {
                                    skills.addArray(player.storage.D_huashen.map[i]);
                                }
                                var cond = 'out';
                                if (event.triggername == 'phaseBegin') {
                                    cond = 'in';
                                }
                                skills.randomSort();
                                skills.sort(function (a, b) {
                                    return get.skillRank(b, cond) - get.skillRank(a, cond);
                                });
                                event.aiChoice = skills[0];
                                var choice = '更换化身牌';
                                if (event.aiChoice == player.storage.D_huashen.current2 || get.skillRank(event.aiChoice, cond) < 1) choice = '弃置化身';
                                if (player.isOnline2()) {
                                    player.send(
                                        function (cards, id) {
                                            var dialog = ui.create.dialog('是否发动【化身】？', [cards, 'character']);
                                            dialog.videoId = id;
                                        },
                                        cards,
                                        event.videoId
                                    );
                                }
                                event.dialog = ui.create.dialog(get.prompt('D_huashen'), [cards, 'character']);
                                event.dialog.videoId = event.videoId;
                                if (!event.isMine()) {
                                    event.dialog.style.display = 'none';
                                }
                                if (event.triggername == 'D_huashen')
                                    event._result = {
                                        control: '更换化身牌',
                                    };
                                else
                                    player
                                        .chooseControl('弃置化身', '更换化身牌', 'cancel2')
                                        .set('ai', function () {
                                            return _status.event.choice;
                                        })
                                        .set('choice', choice);
                                ('step 1');
                                event.control = result.control;
                                if (event.control == 'cancel2') {
                                    if (player.isOnline2()) {
                                        player.send('closeDialog', event.videoId);
                                    }
                                    delete _status.noclearcountdown;
                                    if (!_status.noclearcountdown) {
                                        game.stopCountChoose();
                                    }
                                    event.dialog.close();
                                    event.finish();
                                    return;
                                }
                                if (!event.logged) {
                                    event.logged = true;
                                }
                                var next = player.chooseButton(true).set('dialog', event.videoId);
                                if (event.control == '弃置化身') {
                                    next.set('selectButton', [1, Infinity]);
                                    next.set('filterButton', function (button) {
                                        return button.link != _status.event.current;
                                    });
                                    next.set('current', player.storage.D_huashen.current);
                                } else {
                                    next.set('ai', function (button) {
                                        return player.storage.D_huashen.map[button.link].includes(_status.event.choice) ? 2.5 : 1 + Math.random();
                                    });
                                    next.set('choice', event.aiChoice);
                                }
                                var prompt = event.control == '弃置化身' ? '选择弃置化身' : '选择要切换的化身';
                                var func = function (id, prompt) {
                                    var dialog = get.idDialog(id);
                                    if (dialog) {
                                        dialog.content.childNodes[0].innerHTML = prompt;
                                    }
                                };
                                if (player.isOnline2()) {
                                    player.send(func, event.videoId, prompt);
                                } else if (event.isMine()) {
                                    func(event.videoId, prompt);
                                }
                                ('step 2');
                                if (result.bool && event.control != '弃置化身') {
                                    event.card = result.links[0];
                                    var func = function (card, id) {
                                        var dialog = get.idDialog(id);
                                        if (dialog) {
                                            for (var i = 0; i < dialog.buttons.length; i++) {
                                                if (dialog.buttons[i].link == card) {
                                                    dialog.buttons[i].classList.add('selectedx');
                                                } else {
                                                    dialog.buttons[i].classList.add('unselectable');
                                                }
                                            }
                                        }
                                    };
                                    if (player.isOnline2()) {
                                        player.send(func, event.card, event.videoId);
                                    } else if (event.isMine()) {
                                        func(event.card, event.videoId);
                                    }
                                    var list = player.storage.D_huashen.map[event.card].slice(0);
                                    event.control = list;
                                    // player.chooseControl(list).set('choice', event.aiChoice).set('ai', function() {
                                    return _status.event.choice;
                                    // });
                                } else {
                                    lib.skill.D_huashen.removeHuashen(player, result.links.slice(0));
                                    lib.skill.D_huashen.addHuashens(player, result.links.length);
                                }
                                ('step 3');
                                if (result.control == '返回') {
                                    var func = function (id) {
                                        var dialog = get.idDialog(id);
                                        if (dialog) {
                                            for (var i = 0; i < dialog.buttons.length; i++) {
                                                dialog.buttons[i].classList.remove('selectedx');
                                                dialog.buttons[i].classList.remove('unselectable');
                                            }
                                        }
                                    };
                                    if (player.isOnline2()) {
                                        player.send(func, event.videoId);
                                    } else if (event.isMine()) {
                                        func(event.videoId);
                                    }
                                    event._result = {
                                        control: '更换化身',
                                    };
                                    event.goto(1);
                                    return;
                                }
                                if (player.isOnline2()) {
                                    player.send('closeDialog', event.videoId);
                                }
                                event.dialog.close();
                                delete _status.noclearcountdown;
                                if (!_status.noclearcountdown) {
                                    game.stopCountChoose();
                                }
                                if (event.control == '弃置化身') return;
                                if (player.storage.D_huashen.current != event.card) {
                                    player.storage.D_huashen.current = event.card;
                                    game.broadcastAll(
                                        function (character, player) {
                                            player.sex = lib.character[character][0];
                                            player.group = lib.character[character][1];
                                            player.hp = lib.character[character][2];
                                            player.node.name.dataset.nature = get.groupnature(player.group);
                                        },
                                        event.card,
                                        player
                                    );
                                }
                                // var link = result.control;
                                var link = event.control;
                                player.storage.D_huashen.current2 = link[0];
                                if (!player.additionalSkills.D_huashen || !player.additionalSkills.D_huashen.includes(link)) {
                                    player.addAdditionalSkill('D_huashen', link);
                                    player.flashAvatar('D_huashen', event.card);
                                    for (var i = 0; i < link.length; i++) {
                                        game.log(player, '获得技能', '#g【' + get.translation(link[i]) + '】');
                                        player.popup(link[i]);
                                    }
                                }
                            },
                            init(player, skill) {
                                if (!player.storage[skill])
                                    player.storage[skill] = {
                                        character: [],
                                        map: {},
                                    };
                            },
                            group: 'D_huashen1',
                            trigger: {
                                player: ['phaseBegin', 'phaseEnd', 'D_huashen', 'damageAfter'],
                            },
                            filter(_event, player, _name) {
                                //if(name=='phaseBegin'&&game.phaseNumber==1) return false;
                                return player.storage.D_huashen && player.storage.D_huashen.character.length;
                            },
                            banned: ['lisu', 'sp_xiahoudun', 'xushao'],
                            addHuashen(player) {
                                if (!player.storage.D_huashen) return;
                                if (!_status.characterlist) {
                                    if (_status.connectMode) var list = get.charactersOL();
                                    else {
                                        var list = [];
                                        for (var i in lib.character) {
                                            if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) continue;
                                            list.push(i);
                                        }
                                    }
                                    game.countPlayer2(function (current) {
                                        list.remove(current.name);
                                        list.remove(current.name1);
                                        list.remove(current.name2);
                                        if (current.storage.D_huashen && current.storage.D_huashen.character) list.removeArray(current.storage.D_huashen.character);
                                    });
                                    _status.characterlist = list;
                                }
                                _status.characterlist.randomSort();
                                var bool = false;
                                for (var i = 0; i < _status.characterlist.length; i++) {
                                    var name = _status.characterlist[i];
                                    if (name.includes('zuoci') || name.indexOf('key') == 0 || lib.skill.D_huashen.banned.includes(name) || player.storage.D_huashen.character.includes(name)) continue;
                                    var skills = lib.character[name][3];
                                    for (var j = 0; j < skills.length; j++) {
                                        var info = lib.skill[skills[j]];
                                        if (info.charlotte || (info.unique && !info.gainable)) skills.splice(j--, 1);
                                    }
                                    if (skills.length) {
                                        player.storage.D_huashen.character.push(name);
                                        player.storage.D_huashen.map[name] = skills;
                                        _status.characterlist.remove(name);
                                        return name;
                                    }
                                }
                            },
                            addHuashens(player, num) {
                                var list = [];
                                for (var i = 0; i < num; i++) {
                                    var name = lib.skill.D_huashen.addHuashen(player);
                                    if (name) list.push(name);
                                }
                                if (list.length) {
                                    game.log(player, '获得了', get.cnNumber(list.length) + '张', '#g化身');
                                    lib.skill.D_huashen.drawCharacter(player, list);
                                }
                            },
                            removeHuashen(player, links) {
                                player.storage.D_huashen.character.removeArray(links);
                                _status.characterlist.addArray(links);
                                game.log(player, '移去了', get.cnNumber(links.length) + '张', '#g化身');
                            },
                            drawCharacter(player, list) {
                                game.broadcastAll(
                                    function (player, list) {
                                        if (player.isUnderControl(true)) {
                                            var cards = [];
                                            for (var i = 0; i < list.length; i++) {
                                                var cardname = 'huashen_card_' + list[i];
                                                lib.card[cardname] = {
                                                    fullimage: true,
                                                    image: 'character:' + list[i],
                                                };
                                                lib.translate[cardname] = get.rawName2(list[i]);
                                                cards.push(game.createCard(cardname, '', ''));
                                            }
                                            player.$draw(cards, 'nobroadcast');
                                        }
                                    },
                                    player,
                                    list
                                );
                            },
                            intro: {
                                onunmark(storage, _player) {
                                    _status.characterlist.addArray(storage.character);
                                    storage.character = [];
                                },
                                mark(dialog, storage, player) {
                                    if (storage && storage.current) dialog.addSmall([[storage.current], 'character']);
                                    if (storage && storage.current2) dialog.add('<div><div class="skill">【' + get.translation(lib.translate[storage.current2 + '_ab'] || get.translation(storage.current2).slice(0, 2)) + '】</div><div>' + get.skillInfoTranslation(storage.current2, player) + '</div></div>');
                                    if (storage && storage.character.length) {
                                        if (player.isUnderControl(true)) {
                                            dialog.addSmall([storage.character, 'character']);
                                        } else {
                                            dialog.addText('共有' + get.cnNumber(storage.character.length) + '张<化身>');
                                        }
                                    } else {
                                        return '没有化身';
                                    }
                                },
                                content(storage, _player) {
                                    return '共有' + get.cnNumber(storage.character.length) + '张<化身>';
                                },
                                markcount(storage, _player) {
                                    if (storage && storage.character) return storage.character.length;
                                    return 0;
                                },
                            },
                        },
                        D_huashen1: {
                            trigger: {
                                global: 'gameDrawAfter',
                                player: 'enterGame',
                            },
                            forced: true,
                            popup: false,
                            content() {
                                //化身数量
                                lib.skill.D_huashen.addHuashens(player, 7);
                                player.markSkill('D_huashen');
                                var next = game.createEvent('D_huashen');
                                next.player = player;
                                next._trigger = trigger;
                                next.triggername = 'D_huashen';
                                next.setContent(lib.skill.D_huashen.content);
                            },
                        },
                        D_xinsheng: {
                            forced: true,
                            audio: 'rexingshe',
                            trigger: {
                                player: 'damageEnd',
                                source: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                lib.skill.D_huashen.addHuashens(player, trigger.num);
                            },
                        },
                        D_shajue1: {
                            audio: 'xinfu_shajue',
                            trigger: {
                                player: 'changeHp',
                            },
                            filter(event, player) {
                                return player.countMark('xionghuo1') > 0 && player.hp <= 0;
                            },
                            filterTarget(card, player, target) {
                                if (target.hasMark('xionghuo1')) return false;
                            },
                            content() {
                                player.removeMark('xionghuo1', 1);
                                player.recover();
                            },
                        },
                        D_tianbian: {
                            audio: 'tianbian',
                            enable: 'chooseCard',
                            popup: false,
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
                            group: ['D_tianbian_number', 'D_tianbian_After'],
                        },
                        D_tianbian_After: {
                            trigger: {
                                player: 'chooseToCompareAfter',
                                target: 'chooseToCompareAfter',
                            },
                            forced: true,
                            audio: 'tianbian',
                            filter(event, player) {
                                if (player == event.player) {
                                    return event.num1 > event.num2;
                                } else {
                                    return event.num2 > event.num1;
                                }
                            },
                            content() {
                                player.draw();
                            },
                        },
                        D_tianbian_number: {
                            trigger: {
                                player: 'compare',
                                target: 'compare',
                            },
                            filter(event, player) {
                                if (event.iwhile) return false;
                                if (event.player == player) {
                                    return event.card1.name != 'sha';
                                } else {
                                    return event.card2.name != 'sha';
                                }
                            },
                            silent: true,
                            content() {
                                if (player == trigger.player) {
                                    trigger.num1 = 13;
                                    if (trigger.num2 == 13) {
                                        trigger.num1++;
                                        game.log(player, '拼点牌点数视为', '#Infinity');
                                    } else {
                                        game.log(player, '拼点牌点数视为', '#yK');
                                    }
                                } else {
                                    trigger.num2 = 13;
                                    if (trigger.num1 == 13) {
                                        trigger.num2++;
                                        game.log(player, '拼点牌点数视为', '#Infinity');
                                    } else {
                                        game.log(player, '拼点牌点数视为', '#yK');
                                    }
                                }
                            },
                            forced: true,
                            popup: false,
                        },
                        D_zhuandui: {
                            shaRelated: true,
                            audio: 'zhuandui',
                            group: ['D_zhuandui_respond', 'D_zhuandui_use'],
                            ai: {
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    if (player._zhuandui_temp) return false;
                                    player._zhuandui_temp = true;
                                    var bool = (function () {
                                        if ((arg && arg.card.name != 'sha') || get.attitude(player, arg.target) >= 0 || !arg.target.countCards('h')) return false;
                                        if (
                                            arg &&
                                            arg.target.countCards('h') == 1 &&
                                            (!arg.target.getEquip('bagua') ||
                                                player.hasSkillTag('unequip', false, {
                                                    name: arg.card ? arg.card.name : null,
                                                    target: arg.target,
                                                    card: arg.card,
                                                }) ||
                                                player.hasSkillTag('unequip', false, {
                                                    name: arg.card ? arg.card.name : null,
                                                    target: arg.target,
                                                    card: arg.card,
                                                }))
                                        )
                                            return true;
                                        return (
                                            player.countCards('h', function (card) {
                                                return card != arg.card && (!arg.card.cards || !arg.card.cards.includes(card)) && get.value(card) <= 4 && (card.number >= 11 + arg.target.countCards('h') / 2 || card.suit == 'heart');
                                            }) > 0
                                        );
                                    })();
                                    delete player._zhuandui_temp;
                                    return bool;
                                },
                                effect: {
                                    target(card, player, target, current) {
                                        if (card.name == 'sha' && current < 0) return 0.7;
                                    },
                                },
                            },
                        },
                        D_zhuandui_respond: {
                            audio: 'zhuandui',
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            check(event, player) {
                                return get.effect(player, event.card, event.player, player) < 0;
                            },
                            filter(event, player) {
                                return player.canCompare(event.player);
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                player.chooseToCompare(trigger.player);
                                ('step 1');
                                if (result.bool) {
                                    trigger.parent.excluded.add(player);
                                }
                            },
                        },
                        D_zhuandui_use: {
                            audio: 'zhuandui',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) < 0;
                            },
                            filter(event, player) {
                                return event.target != player;
                            },
                            logTarget: 'target',
                            content() {
                                'step 0';
                                player.chooseToCompare(trigger.target);
                                ('step 1');
                                if (result.bool) {
                                    trigger.parent.directHit.add(trigger.target);
                                }
                            },
                        },
                        D_jianzheng: {
                            audio: 'jianzheng',
                            trigger: {
                                global: 'useCardToPlayer',
                            },
                            filter(event, player) {
                                if (!player.countCards('h')) return false;
                                return event.player != player && (get.type(event.card) == 'basic' || get.type(event.card) == 'trick') && get.tag(event.card, 'damage');
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var effect = 0;
                                for (var i = 0; i < trigger.targets.length; i++) {
                                    effect -= get.effect(trigger.targets[i], trigger.card, trigger.player, player);
                                }
                                if (effect > 0) {
                                    if (get.color(trigger.card) == 'emm') {
                                        effect = 0;
                                    } else {
                                        effect = 1;
                                    }
                                    if (trigger.targets.length == 1) {
                                        if (trigger.targets[0].hp == 1) {
                                            effect++;
                                        }
                                        if (effect > 0 && trigger.targets[0].countCards('h') < player.countCards('h')) {
                                            effect++;
                                        }
                                    }
                                    if (effect > 0) {
                                        effect += 6;
                                    }
                                }
                                player
                                    .chooseCard('h', get.prompt2('jianzheng', trigger.player))
                                    .set('ai', function (card) {
                                        if (_status.event.effect >= 0) {
                                            var val = get.value(card);
                                            if (val < 0) return 10 - val;
                                            return _status.event.effect - val;
                                        }
                                        return 0;
                                    })
                                    .set(
                                        'effect',
                                        effect
                                    )('step 1');
                                if (result.bool && result.cards) {
                                    event.card = result.cards[0];
                                    trigger.targets.length = 0;
                                    trigger.parent.triggeredTargets1.length = 0;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (!event.isMine()) game.delayx();
                                ('step 3');
                                if (event.card) {
                                    player.lose(event.card, ui.cardPile, 'visible', 'insert');
                                    player.$throw(event.card, 1000);
                                    game.log(player, '将', card, '置于牌堆顶');
                                }
                                ('step 4');
                                if (get.color(trigger.card) == 'emm') {
                                    trigger.parent.targets.push(player);
                                    trigger.player.line(player);
                                }
                            },
                            ai: {
                                threaten: 1.1,
                                expose: 0.25,
                            },
                        },
                        D_qianxi: {
                            audio: 'qianxi',
                            trigger: {
                                source: 'damageBegin2',
                            },
                            forced: true,
                            check(event, player) {
                                var att = get.attitude(player, event.player);
                                if (event.player.hp == event.player.maxHp) return att < 0;
                                if (event.player.hp == event.player.maxHp - 1 && (event.player.maxHp <= 3 || event.player.hasSkillTag('maixie'))) return att < 0;
                                return att > 0;
                            },
                            filter(event, player) {
                                return event.player != player; //QQQ
                            },
                            logTarget: 'player',
                            content() {
                                trigger.player.loseMaxHp(true);
                            },
                        },
                        madai_mashu: {
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - Infinity;
                                },
                            },
                        },
                        D_jieying: {
                            audio: 'ext:将包/audio:2',
                            global: 'D_jieying_mark',
                            group: ['D_jieying_1', 'D_jieying_2', 'D_jieying_3'],
                            subSkill: {
                                1: {
                                    audio: 'drlt_jieying',
                                    trigger: {
                                        player: 'phaseZhunbeiBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return !game.hasPlayer(function (current) {
                                            return current.hasMark('D_jieying_mark');
                                        });
                                    },
                                    content() {
                                        player.addMark('D_jieying_mark', 2);
                                    },
                                },
                                2: {
                                    audio: 'drlt_jieying',
                                    trigger: {
                                        player: ['phaseJieshuBegin', 'phaseUseBegin'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.hasMark('D_jieying_mark');
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseTarget(get.prompt('D_jieying'), '将<营>交给一名角色;其摸牌阶段多摸一张牌,出牌阶段使用【杀】的次数上限+1且手牌上限+1.该角色跳过出牌阶段和弃牌阶段且回合结束后,其移去<营>标记,你获得其所有手牌和装备牌', function (card, player, target) {
                                            return target != player;
                                        }).ai = function (target) {
                                            if (get.attitude(player, target) > 0) return 0.1;
                                            if (get.attitude(player, target) < 1 && (target.isTurnedOver() || target.countCards('h') < 1)) return 0.2;
                                            if (get.attitude(player, target) < 1 && target.countCards('h') > 0 && target.countCards('j', { name: 'lebu' }) > 0) return target.countCards('h') * 0.8 + target.getHandcardLimit() * 0.7 + 2;
                                            if (get.attitude(player, target) < 1 && target.countCards('h') > 0) return target.countCards('h') * 0.8 + target.getHandcardLimit() * 0.7;
                                            return 1;
                                        };
                                        ('step 1');
                                        if (result.bool) {
                                            var target = result.targets[0];
                                            player.line(target);
                                            var mark = player.countMark('D_jieying_mark');
                                            player.removeMark('D_jieying_mark', 1);
                                            target.addMark('D_jieying_mark', 1);
                                            target.skip('phaseUse');
                                        }
                                    },
                                },
                                3: {
                                    audio: 'drlt_jieying',
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player != event.player && event.player.hasMark('D_jieying_mark') && event.player.isAlive();
                                    },
                                    logTarget: 'player',
                                    content() {
                                        if (trigger.player.countCards('he') > 0) {
                                            trigger.player.give(trigger.player.getCards('he'), player);
                                        }
                                        trigger.player.removeMark('D_jieying_mark', trigger.player.countMark('D_jieying_mark'));
                                    },
                                },
                            },
                        },
                        D_jieying_mark: {
                            marktext: '营',
                            intro: {
                                name: '营',
                                content: 'mark',
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (player.hasMark('D_jieying_mark') && card.name == 'sha') return (num += Infinity);
                                },
                                maxHandcard(player, num) {
                                    if (player.hasMark('D_jieying_mark')) return (num += 3);
                                },
                            },
                            audio: 'drlt_jieying',
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            forced: true,
                            filter(event, player) {
                                return (
                                    !event.numFixed &&
                                    player.hasMark('D_jieying_mark') &&
                                    game.hasPlayer(function (current) {
                                        return current.hasSkill('D_jieying');
                                    })
                                );
                            },
                            content() {
                                trigger.num += game.countPlayer(function (current) {
                                    return current.hasSkill('D_jieying');
                                });
                            },
                            ai: {
                                nokeep: true,
                                skillTagFilter(player) {
                                    if (!player.hasMark('D_jieying_mark')) return false;
                                },
                            },
                        },
                        D_poxi: {
                            audio: 'drlt_poxi',
                            enable: 'phaseUse',
                            usable: 5,
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('h') > 0;
                                //return target!=player;
                            },
                            content() {
                                'step 0';
                                event.list1 = [];
                                event.list2 = [];
                                if (player.countCards('h') > 0) {
                                    var chooseButton = player.chooseButton(4, ['你的手牌', player.getCards('h'), get.translation(target.name) + '的手牌', target.getCards('h')]);
                                } else {
                                    var chooseButton = player.chooseButton(4, [get.translation(target.name) + '的手牌', target.getCards('h')]);
                                }
                                chooseButton.set('target', target);
                                chooseButton.set('ai', function (button) {
                                    var player = _status.event.player;
                                    var target = _status.event.target;
                                    var ps = [];
                                    var ts = [];
                                    for (var i = 0; i < ui.selected.buttons.length; i++) {
                                        var card = ui.selected.buttons[i].link;
                                        if (target.getCards('h').includes(card)) ts.push(card);
                                        else ps.push(card);
                                    }
                                    var card = button.link;
                                    var owner = get.owner(card);
                                    var val = get.value(card) || 1;
                                    if (owner == target) {
                                        if (ts.length > 1) return 0;
                                        if (ts.length == 0 || player.hp > 3) return val;
                                        return 2 * val;
                                    }
                                    return 7 - val;
                                });
                                ('step 1');
                                if (result.bool) {
                                    var list = result.links;
                                    for (var i = 0; i < list.length; i++) {
                                        if (get.owner(list[i]) == player) {
                                            event.list1.push(list[i]);
                                        } else {
                                            event.list2.push(list[i]);
                                        }
                                    }
                                    if (event.list1.length && event.list2.length) {
                                        target.discard(event.list2).delay = false;
                                        player.discard(event.list1);
                                    } else if (event.list2.length) {
                                        target.discard(event.list2);
                                    } else player.discard(event.list1);
                                }
                                ('step 2');
                                target.loseMaxHp();
                                target.addTempSkill('drlt_poxi1', { player: 'phaseAfter' });
                                player.recover();
                                player.draw(4);
                            },
                            ai: {
                                order: 13,
                                result: {
                                    target(player, target, card) {
                                        return -1;
                                    },
                                },
                            },
                        },
                        D_pojun: {
                            shaRelated: true,
                            group: 'D_pojun1',
                            audio: 'repojun',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.target != player;
                            },
                            content() {
                                'step 0';
                                var next = player.choosePlayerCard(trigger.target, [1, Math.min(trigger.target.countCards('he'))], get.prompt('D_pojun', trigger.target));
                                next.set('ai', function (button) {
                                    if (!_status.event.goon) return 0;
                                    var val = get.value(button.link);
                                    if (button.link == _status.event.target.getEquip(2)) return 2 * (val + 3);
                                    return val;
                                });
                                next.set('goon', get.attitude(player, trigger.target) <= 0);
                                next.set('forceAuto', true);
                                ('step 1');
                                if (result.bool) {
                                    var target = trigger.target;
                                    target.lose(result.cards, ui.special, 'toStorage');
                                    game.log(target, '失去了' + get.cnNumber(result.cards.length) + '张牌');
                                    target.addTempSkill('D_fengyin', { player: 'phaseAfter' });
                                }
                                ('step 2');
                                trigger.directHit.addArray(
                                    game.filterPlayer(function (current) {
                                        return current != player && get.distance(player, current) != 0;
                                    })
                                );
                            },
                            ai: {
                                unequip: true,
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    if (get.attitude(player, arg.target) > 0) return false;
                                    if (tag == 'directHit_ai') return arg.target.hp >= Math.max(1, arg.target.countCards('h') - 1);
                                    if (arg && arg.name != 'emm' && arg.target.getEquip(2)) return true;
                                    return false;
                                },
                            },
                        },
                        D_pojun1: {
                            trigger: {
                                source: 'damageBegin1',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var num = trigger.player.hp;
                                var num1 = num - 1;
                                trigger.num += num1;
                                ('step 1');
                                player.addTempSkill('zhanlong2', { player: 'phaseJieshuBegin' });
                            },
                            ai: {
                                presha: true,
                            },
                        },
                        liubei_longnu: {
                            mark: true,
                            marktext: '龙',
                            intro: {
                                content(storage, player, skill) {
                                    if (player.storage.nzry_longnu == true) return '锁定技,出牌阶段开始时,你增加1点体力上限并摸5张牌,本阶段内你的黑色手牌均视为雷杀且无次数和距离限制';
                                    return '锁定技,出牌阶段开始时,你回复一点体力并摸5张牌,本阶段内你的红色手牌均视为火杀且无次数和距离限制';
                                },
                            },
                            audio: 'nzry_longnu',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (player.storage.liubei_longnu == true) {
                                    player.gainMaxHp();
                                } else {
                                    player.recover();
                                }
                                player.draw(5);
                                ('step 1');
                                if (player.storage.liubei_longnu == true) {
                                    player.storage.liubei_longnu = false;
                                    player.addTempSkill('liubei_longnu_2', 'phaseUseAfter');
                                } else {
                                    player.storage.liubei_longnu = true;
                                    player.addTempSkill('liubei_longnu_1', 'phaseUseAfter');
                                }
                            },
                            subSkill: {
                                1: {
                                    mod: {
                                        cardname(card, player) {
                                            if (get.color(card) == 'red') return 'sha';
                                        },
                                        cardnature(card, player) {
                                            if (get.color(card) == 'red') return 'fire';
                                        },
                                        cardUsable(card, player) {
                                            if (card.name == 'sha' && card.nature == 'fire') return Infinity;
                                        },
                                        targetInRange(card) {
                                            if (get.color(card) == 'red') return true;
                                        },
                                    },
                                    ai: {
                                        effect: {
                                            target(card, player, target, current) {
                                                if (get.tag(card, 'respondSha') && current < 0) return 0.6;
                                            },
                                        },
                                        respondSha: true,
                                    },
                                },
                                2: {
                                    mod: {
                                        cardname(card, player) {
                                            if (get.color(card) == 'black') return 'sha';
                                        },
                                        cardnature(card, player) {
                                            if (get.color(card) == 'black') return 'thunder';
                                        },
                                        cardUsable(card, player) {
                                            if (card.name == 'sha' && card.nature == 'thunder') return Infinity;
                                        },
                                        targetInRange(card) {
                                            if (get.color(card) == 'thunder') return true;
                                        },
                                    },
                                    ai: {
                                        effect: {
                                            target(card, player, target, current) {
                                                if (get.tag(card, 'respondSha') && current < 0) return 0.6;
                                            },
                                        },
                                        respondSha: true,
                                    },
                                },
                            },
                            ai: {
                                fireAttack: true,
                                halfneg: true,
                                threaten: 1.05,
                            },
                        },
                        liubei_jieying: {
                            audio: 'nzry_jieying',
                            global: 'g_liubei_jieying',
                            ai: {
                                effect: {
                                    target(card) {
                                        if (card.name == 'tiesuo') return 'zeroplayertarget';
                                    },
                                },
                            },
                            group: ['liubei_jieying_1', 'liubei_jieying_2', 'liubei_jieying_3', 'liubei_jieying_4'],
                            subSkill: {
                                1: {
                                    audio: 2,
                                    trigger: {
                                        player: ['linkBefore', 'enterGame'],
                                        global: 'gameDrawAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.isLinked() == (event.name == 'link');
                                    },
                                    content() {
                                        if (trigger.name != 'link') player.link(true);
                                        else trigger.cancel();
                                    },
                                },
                                2: {
                                    audio: 2,
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return game.hasPlayer(function (current) {
                                            return current != player && !current.isLinked();
                                        });
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseTarget(true, '请选择【结营】的目标', function (card, player, target) {
                                            return target != player && !target.isLinked();
                                        }).ai = function (target) {
                                            return 1 + Math.random();
                                        };
                                        ('step 1');
                                        if (result.bool) {
                                            player.line(result.targets);
                                            result.targets[0].link(true);
                                        } else {
                                            event.finish();
                                        }
                                    },
                                },
                                3: {
                                    audio: 'ext:将包/audio:1',
                                    trigger: {
                                        player: ['useCardAfter', 'respondAfter'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha';
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                                4: {
                                    trigger: {
                                        player: 'enterGame',
                                        global: 'gameStart',
                                    },
                                    forced: true,
                                    content() {
                                        player.equip(game.createCard('dilu', 'club', 5));
                                        player.equip(game.createCard('rewrite_renwang', 'club', 2));
                                        player.equip(game.createCard('guanshi', 'diamond', 5));
                                        player.equip(game.createCard('tongque'));
                                        player.equip(game.createCard('dawan'));
                                    },
                                },
                            },
                        },
                        g_liubei_jieying: {
                            mod: {
                                maxHandcard(player, num) {
                                    if (
                                        game.countPlayer(function (current) {
                                            return current.hasSkill('liubei_jieying');
                                        }) > 0 &&
                                        player.isLinked()
                                    )
                                        return num + 3;
                                },
                            },
                        },
                        D_jili: {
                            audio: 'jili',
                            trigger: {
                                global: 'useCardToTarget',
                            },
                            forced: true,
                            check(event, player) {
                                return get.effect(player, event.card, event.player, player) > 0;
                            },
                            filter(event, player) {
                                if (!event.targets) return false;
                                if (event.player == player) return false;
                                if (event.targets.includes(player)) return false;
                                if (get.info(event.card).multitarget) return false;
                                var type = get.type(event.card);
                                return !get.tag(event.card, 'damage') && !['equip', 'delay'].includes(type);
                            }, //QQQ
                            autodelay: true,
                            content() {
                                trigger.parent.targets.add(player);
                                trigger.player.line(player, 'green');
                            },
                        },
                        D_zhidao: {
                            audio: 'ext:将包/audio:2',
                            trigger: {
                                source: 'damageSource',
                            },
                            filter(event, player) {
                                return event.player.countCards('hej') > 0 && event.player != player;
                            },
                            forced: true,
                            content() {
                                var num = 0;
                                if (trigger.player.countCards('h')) num++; //QQQ
                                if (trigger.player.countCards('e')) num++;
                                if (trigger.player.countCards('j')) num++;
                                if (num > 0) {
                                    player.gainPlayerCard(trigger.player, num, 'hej', true).set('filterButton', function (button) {
                                        for (var i = 0; i < ui.selected.buttons.length; i++) {
                                            if (get.position(button.link) == get.position(ui.selected.buttons[i].link)) return false;
                                        }
                                        return true;
                                    });
                                }
                                player.addTempSkill('zhanlong2');
                            },
                        },
                        D_longhun: {
                            audio: 'relonghun',
                            charlotte: true,
                            enable: ['chooseToUse', 'chooseToRespond'],
                            prompt: '将♦️️牌当做杀,♥️️牌当做桃,♣️️牌当做闪,♠️️牌当做无懈可击使用或打出',
                            viewAs(cards, player) {
                                var name = false;
                                var nature = null;
                                //根据选择的卡牌的花色 判断要转化出的卡牌是闪还是火杀还是无懈还是桃
                                switch (cards[0]?.suit) {
                                    case 'club':
                                        name = 'shan';
                                        break;
                                    case 'diamond':
                                        name = 'sha';
                                        nature = 'fire';
                                        break;
                                    case 'spade':
                                        name = 'wuxie';
                                        break;
                                    case 'heart':
                                        name = 'tao';
                                        break;
                                }
                                //返回判断结果
                                if (name) return { name: name, nature: nature };
                                return null;
                            },
                            check(card) {
                                if (ui.selected.cards.length) return 0;
                                var player = _status.event.player;
                                if (_status.event.type == 'phase') {
                                    var max = 0;
                                    var name2;
                                    var list = ['sha', 'tao'];
                                    var map = { sha: 'diamond', tao: 'heart' };
                                    for (var i = 0; i < list.length; i++) {
                                        var name = list[i];
                                        if (
                                            player.countCards('hes', function (card) {
                                                return (name != 'sha' || get.value(card) < 5) && card.suit == map[name];
                                            }) > 0 &&
                                            player.getUseValue({ name: name, nature: name == 'sha' ? 'fire' : null }) > 0
                                        ) {
                                            var temp = get.order({ name: name, nature: name == 'sha' ? 'fire' : null });
                                            if (temp > max) {
                                                max = temp;
                                                name2 = map[name];
                                            }
                                        }
                                    }
                                    if (name2 == card.suit) return name2 == 'diamond' ? 5 - get.value(card) : 20 - get.value(card);
                                    return 0;
                                }
                                return 1;
                            },
                            selectCard: [1],
                            complexCard: true,
                            position: 'hes',
                            filterCard(card, player, event) {
                                //如果已经选了一张牌 那么第二张牌和第一张花色相同即可
                                if (ui.selected.cards.length) return card.suit == ui.selected.cards[0].suit;
                                event = event || _status.event;
                                //获取当前时机的卡牌选择限制
                                var filter = event._backup.filterCard;
                                //获取卡牌花色
                                var name = card.suit;
                                //如果这张牌是♣️️并且当前时机能够使用/打出闪 那么这张牌可以选择
                                if (name == 'club' && filter({ name: 'shan', cards: [card] }, player, event)) return true;
                                //如果这张牌是♦️️并且当前时机能够使用/打出火杀 那么这张牌可以选择
                                if (name == 'diamond' && filter({ name: 'sha', cards: [card], nature: 'fire' }, player, event)) return true;
                                //如果这张牌是♠️️并且当前时机能够使用/打出无懈 那么这张牌可以选择
                                if (name == 'spade' && filter({ name: 'wuxie', cards: [card] }, player, event)) return true;
                                //如果这张牌是♥️️并且当前时机能够使用/打出桃 那么这张牌可以选择
                                if (name == 'heart' && filter({ name: 'tao', cards: [card] }, player, event)) return true;
                                //上述条件都不满足 那么就不能选择这张牌
                                return false;
                            },
                            filter(event, player) {
                                //获取当前时机的卡牌选择限制
                                var filter = event.filterCard;
                                //如果当前时机能够使用/打出火杀并且角色有♦️️ 那么可以发动技能
                                if (filter({ name: 'sha', nature: 'fire' }, player, event) && player.countCards('hes', { suit: 'diamond' })) return true;
                                //如果当前时机能够使用/打出闪并且角色有♣️️ 那么可以发动技能
                                if (filter({ name: 'shan' }, player, event) && player.countCards('hes', { suit: 'club' })) return true;
                                //如果当前时机能够使用/打出桃并且角色有♥️️ 那么可以发动技能
                                if (filter({ name: 'tao' }, player, event) && player.countCards('hes', { suit: 'heart' })) return true;
                                //如果当前时机能够使用/打出无懈可击并且角色有♠️️ 那么可以发动技能
                                if (filter({ name: 'wuxie' }, player, event) && player.countCards('hes', { suit: 'spade' })) return true;
                                return false;
                            },
                            ai: {
                                respondSha: true,
                                respondShan: true,
                                skillTagFilter(player, tag) {
                                    var name;
                                    switch (tag) {
                                        case 'respondSha':
                                            name = 'diamond';
                                            break;
                                        case 'respondShan':
                                            name = 'club';
                                            break;
                                        case 'save':
                                            name = 'heart';
                                            break;
                                    }
                                    if (!player.countCards('hes', { suit: name })) return false;
                                },
                                order(item, player) {
                                    if (player && _status.event.type == 'phase') {
                                        var max = 0;
                                        var list = ['sha', 'tao'];
                                        var map = { sha: 'diamond', tao: 'heart' };
                                        for (var i = 0; i < list.length; i++) {
                                            var name = list[i];
                                            if (
                                                player.countCards('hes', function (card) {
                                                    return (name != 'sha' || get.value(card) < 5) && card.suit == map[name];
                                                }) > 0 &&
                                                player.getUseValue({ name: name, nature: name == 'sha' ? 'fire' : null }) > 0
                                            ) {
                                                var temp = get.order({ name: name, nature: name == 'sha' ? 'fire' : null });
                                                if (temp > max) max = temp;
                                            }
                                        }
                                        max /= 1.1;
                                        return max;
                                    }
                                    return 2;
                                },
                            },
                            hiddenCard(player, name) {
                                if (name == 'wuxie' && _status.connectMode && player.countCards('hs') > 0) return true;
                                if (name == 'wuxie') return player.countCards('hes', { suit: 'spade' }) > 0;
                                if (name == 'tao') return player.countCards('hes', { suit: 'heart' }) > 0;
                            },
                            group: ['D_longhun_num', 'D_longhun_discard', 'D_longhun_qinggang', 'D_longhun_wuxie'],
                            subSkill: {
                                num: {
                                    forced: true,
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        var evt = event;
                                        return ['sha', 'tao'].includes(evt.card.name) && evt.skill == 'D_longhun' && evt.cards;
                                    },
                                    content() {
                                        trigger.baseDamage++;
                                    },
                                },
                                discard: {
                                    forced: true,
                                    trigger: {
                                        player: ['useCardAfter', 'respondAfter'],
                                    },
                                    forced: true,
                                    popup: false,
                                    logTarget() {
                                        return _status.currentPhase;
                                    },
                                    autodelay(event) {
                                        return event.name == 'respond' ? 0.5 : false;
                                    },
                                    filter(evt, player) {
                                        return ['shan', 'wuxie'].includes(evt.card.name) && evt.skill == 'D_longhun' && evt.cards && _status.currentPhase && _status.currentPhase != player && _status.currentPhase.countDiscardableCards(player, 'he');
                                    },
                                    content() {
                                        player.line(_status.currentPhase, 'green');
                                        player.discardPlayerCard(_status.currentPhase, 'he');
                                    },
                                },
                                qinggang: {
                                    forced: true,
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    content() {
                                        'step 0';
                                        player.equip(game.createCard('qinggang', 'spade', 6));
                                    },
                                    ai: {
                                        threaten: 1.5,
                                    },
                                    audioname2: {
                                        key_shiki: 'shiki_omusubi',
                                    },
                                },
                                wuxie: {
                                    forced: true,
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    filter(evt, player) {
                                        return ['wuxie'].includes(evt.card.name) && evt.skill == 'D_longhun';
                                    },
                                    content() {
                                        trigger.directHit.addArray(
                                            game.filterPlayer(function (current) {
                                                return current != player;
                                            })
                                        );
                                    },
                                },
                            },
                        },
                        D_pojun2: {
                            trigger: {
                                source: 'damageBeforeAfter',
                            },
                            forced: true,
                            content() {
                                game.broadcastAll(function (player) {
                                    img = document.createElement('div');
                                    img.setBackgroundImage('extension/将包/D_xusheng.jpg');
                                    img.style.left = '-25px';
                                    img.style.top = 'auto';
                                    img.style.bottom = '1.9px;';
                                    img.style.width = '100%';
                                    img.style.height = '100%';
                                    img.style.backgroundSize = 'cover';
                                    player.node.avatar.appendChild(img);
                                    ui.refresh(img);
                                    img.style.transform = '';
                                }, player);
                            },
                        },
                    },
                    translate: {
                        D_yuanshao: '袁绍',
                        D_cenhun: '岑昏',
                        D_sunru: '孙茹',
                        D_wuguotai: '吴国太',
                        D_diaochan: '貂蝉',
                        D_zhangjiao: '张角',
                        D_pangtong: '庞统',
                        D_guojia: '郭嘉',
                        D_huatuo: '华佗',
                        D_zhangfei: '张飞',
                        D_huanggai: '黄盖',
                        D_simayi: '司马懿',
                        D_lvmeng: '吕蒙',
                        D_zhenji: '甄姬',
                        D_liuyan: '刘焉',
                        D_孙尚香: '孙尚香',
                        D_xuyou: '许攸',
                        D_黄月英: '黄月英',
                        D_蔡文姬: '蔡文姬',
                        D_孙策: '孙策',
                        D_shenshanshi: '神山识',
                        D_孙权: '孙权',
                        D_liubei: '神刘备',
                        D_诸葛恪: '诸葛恪',
                        D_董卓: '董卓',
                        D_神周瑜: '神周瑜',
                        D_步练师: '步练师',
                        D_刘禅: '刘禅',
                        D_caopi: '曹丕',
                        D_马谡: '马谡',
                        D_王粲: '王粲',
                        D_孙皓: '孙皓',
                        D_SP马云騄: 'SP马云騄',
                        D_王基: '王基',
                        D_liubei: '刘备',
                        D_miheng: '祢衡',
                        D_liuxie: '刘协',
                        D_无敌战神: '无敌战神',
                        D_zhaozhong: '赵忠',
                        D_无敌: '无敌',
                        D_quyix: '麴义',
                        D_花鬘: '花鬘',
                        D_许诸: '许诸',
                        D_周泰: '周泰',
                        D_zhangxiu: '张绣',
                        D_华雄: '华雄',
                        D_zhangrang: '张让',
                        D_huanghao: '黄皓',
                        D_xusheng: '徐盛',
                        D_神关羽: '神关羽',
                        D_ganning: '甘宁',
                        D_夏侯杰: '夏侯杰',
                        D_duyu: '杜预',
                        D_zhugeliang: '诸葛亮',
                        D_xiaoqiao: '小乔',
                        D_zhangliao: '张辽',
                        D_shen_zhaoyun: '神赵云',
                        D_jiangbao_yuanshao: '袁绍',
                        D_caorui: '曹叡',
                        D_shen_caocao: '神曹操',
                        D_weiyan: '魏延',
                        D_shen_zhangliao: '神张辽',
                        D_zhouyu: '周瑜',
                        D_banyu: '孙鲁班&孙鲁育',
                        D_machao: '马超',
                        D_simashi: '司马师',
                        D_shen_zuoci: '左慈',
                        D_caozhi: '曹植',
                        D_新赵云: '新赵云',
                        D_SP: '蒲元',
                        D_xinzhaoxiang: '赵襄',
                        D_lvbu: '吕布',
                        D_daqiao: '大乔',
                        D_zhanghe: '张郃',
                        D_shenzhugeliang: '诸葛亮',
                        D_liuchen: '刘谌',
                        D_huangzhong: '黄忠',
                        D_caojie: '曹节',
                        D_xurong: '徐荣',
                        D_qinmi: '秦宓',
                        D_madai: '马岱',
                        D_shen_ganning: '神甘宁',
                        D_严白虎: '严白虎',
                        离间: '离间',
                        离间_info: '出牌阶段你可以弃置1张牌,视为一名角色对另一名角色使用一张【决斗】(不可被【无懈可击】响应)',
                        急救: '急救',
                        急救_info: '你的回合外,你可以将一张牌当做【桃】使用',
                        暴怒: '暴怒',
                        暴怒_info: '游戏开始时,你获得技能【咆哮】和【真·丈八蛇矛】',
                        克己: '克己',
                        克己_info: '你没有弃牌阶段',
                        遗计: '遗计',
                        遗计_info: '当你受到一点伤害后,你回复一点体力观看牌堆顶的X张牌,将其分配给任意角色(X为你当前的体力值)',
                        狂骨: '狂骨',
                        狂骨_info: '锁定技:当你一名角色造成伤害后,你回复x点体力并摸x张牌(x为伤害点数);当你使用带有「伤害」这一标签的卡牌时,你摸一张牌',
                        雷击: '雷击',
                        雷击_info: '当你使用或打出一张【闪】或者【杀】时,你可令一名其他角色进行一次判定:判定结果若为♥️️,你回复两点体力,该角色受到一点雷电伤害,若结果为♦️️,你回复一点体力,该角色受到两点雷电伤害,若结果为♣️️,该角色受到三点雷电伤害,若结果为♠️️,该角色受到四点雷电伤害',
                        闭月: '闭月',
                        闭月_info: '结束阶段,你回满体力并摸跟体力上限相等的牌',
                        武魂: '武魂',
                        武魂_info: '锁定技,当你受到伤害后,伤害来源获得X个<梦魇>标记(X为伤害点数).锁定技,当你死亡时,你选择一名<梦魇>标记数量最多的其他角色.则该角色死亡',
                        补益: '补益',
                        补益_info: '当有角色进入濒死状态时,你可以展示该角色的一张手牌,该角色回复体力至你的体力上限并摸牌至你体力上限',
                        释衅: '释衅',
                        释衅_info: '当你受到伤害时,你防止此伤害',
                        急溃: '急溃',
                        急溃_info: '锁定技,当你受到伤害前,你可以摸两张牌,取消该伤害',
                        影箭: '影箭',
                        影箭_info: '准备阶段开始时,你可以视为使用一张无距离限制的【杀】',
                        称象: '称象',
                        称象_info: '当有玩家受到伤害后,你可以亮出牌堆顶的三张牌,获得其中的任意张牌',
                        乱击: '乱击',
                        乱击_info: '你可以将一张手牌当作【万箭齐发】使用;受到【万箭齐发】伤害的角色随机弃置一张牌;你可以为【万箭齐发】减少任意数量的目标',
                        奇谋: '奇谋',
                        奇谋_info: '出牌阶段限用一次,你可以受到两点伤害摸三张牌,将三张杀置入你的手牌,若如此做,你本回合使用杀无次数限制',
                        忍戒: '忍戒',
                        忍戒_info: '锁定技,当你受到伤害后,你可以回复一点体力并摸两张牌',
                        仁心: '仁心',
                        仁心_info: '当有角色进入濒死状态时,你摸一张牌,可以弃置一张牌,令该角色回复2点体力',
                        除患: '除患',
                        除患_info: '每当一名角色濒死结算完毕后,若其存活,视为你对其使用一张【杀】',
                        百战: '百战',
                        百战_info: '锁定技,你的【杀】无视防具;当你使用【杀】对目标角色造成伤害时,你可令此伤害+1',
                        神煞: '神煞',
                        神煞_info: '准备阶段,你可以将体力回复至上限,摸X张牌(X为你回复的体力值)',
                        博图: '博图',
                        博图_info: '回合结束时,若你本回合使用过牌,你可以再进行一个额外回合',
                        洛神: '洛神',
                        洛神_info: '准备阶段和结束阶段时,你进行判定,若结果不为♥️️则获得此判定牌,且可重复此流程直到出现♥️️的判定结果.你通过〖洛神〗获得的牌,不计入当前回合的手牌上限',
                        倾国: '倾国',
                        倾国_info: '你可以将一张牌当做【闪】使用或打出',
                        突袭: '突袭',
                        突袭_info: '摸牌阶段,你可以改为获得其他任意数量角色的各一张牌',
                        奇袭: '奇袭',
                        奇袭_info: '你可以将一张牌当做【过河拆桥】使用',
                        射却: '射却',
                        射却_info: '一名其他角色的准备阶段和回合结束时,则你可以当一张牌当【冰杀】对其使用(无距离关系的限制且无视防具)',
                        良缘: '良缘',
                        良缘_info: '出牌阶段,你可以选择一名角色并摸一张手牌或将装备区内的一张装备牌置于其装备区,你与其体力较高的角色摸3张牌回复两点体力,体力值较低的角色摸4张牌回满体力',
                        枭姬: '枭姬',
                        枭姬_info: '当你失去一张装备区内的牌后,你可以摸两张牌并回复一点体力',
                        恃才: '恃才',
                        恃才_info: '当你使用牌时,若此牌与你本回合使用的牌类型均不同(包括装备牌),则你可以将此牌置于牌堆顶,摸两张牌并回复一点体力',
                        成略: '成略',
                        成略_info: '出牌阶段限一次,你可以摸四张牌,弃置一张手牌.若如此做,直到本回合结束,你使用牌无距离和次数限制',
                        寸目: '寸目',
                        寸目_info: '当你摸牌时,改为从牌堆底摸牌',
                        才女: '才女',
                        才女_info: '出牌阶段,你可以将一张手牌当作任意非延时锦囊牌使用',
                        奇姬: '奇姬',
                        奇姬_info: '锁定技,你的非转换锦囊牌无视距离且不能被【无懈可击】响应;弃牌阶段,你的手牌没有上限',
                        集智: '集智',
                        集智_info: '当你使用锦囊牌时,你可以摸一张牌',
                        悲歌: '悲歌',
                        悲歌_info: '当有角色受到伤害后,你可以弃一张牌,并令其进行一次判定,若判定结果为:♥️️该角色回复X点体力(X为伤害点数);♦️️︎该角色摸三张牌并回复一点体力;♣️️伤害来源弃两张牌并受到一点伤害;♠️️伤害来源将其武将牌翻面',
                        断肠: '断肠',
                        断肠_info: '每名玩家回合内限用一次,当有人受伤时发动,你和该受伤角色各摸两张牌,受伤玩家回复一点体力之后伤害来源清空其所有技能直到游戏结束',
                        天香: '天香',
                        天香_info: '当你即将受到伤害,失去体力,减少体力上限时,你摸一张牌,弃置一张牌,将效果转移给一名其他角色',
                        激昂: '激昂',
                        激昂_info: '锁定技.每当你使用(指定目标)或被使用(成为目标)牌时你可以摸一张牌',
                        制霸: '制霸',
                        制霸_info: '当其它角色摸牌阶段开始前,你可以弃置一张牌,令其也弃置一张牌.之后,自己摸两张牌并回复一点体力,获得一张基本牌',
                        英魂: '英魂',
                        英魂_info: '锁定技,你死亡后,场上所有人将武将替换为【孙策】',
                        D_shenfen: '神愤',
                        D_shenfen_info: '出牌阶段,你可以弃5枚<暴怒>标记并选择所有其他角色,对其各造成5点伤害.这些角色先各弃置其装备区里的牌,再各弃置所有手牌',
                        御结: '御结',
                        御结_info: '锁定技:当你造成或者受到伤害时,你可以摸一张牌并回复一点体力,将一名其他角色武将牌上的技能转移到你的武将牌上',
                        制衡: '制衡',
                        制衡_info: '出牌阶段,你可以弃置任意张牌并摸等量的牌,若你在发动〖制衡〗时弃置了所有手牌,则你多摸一张牌',
                        射虎: '射虎',
                        射虎_info: '每名玩家回合开始前,你选择一名角色,令其弃置所有装备牌',
                        雄据: '雄据',
                        雄据_info: '锁定技.当自己失去装备后发动,【吴】势力角色依次摸一张牌.这些角色因此效果每摸一张牌,自己跟着摸一张牌',
                        求贤: '求贤',
                        求贤_info: '当自己回血后,选择场上一名角色摸两张牌.(有十分之一的概率暴击,暴击后摸九张牌)',
                        昭烈: '昭烈',
                        昭烈_info: '锁定技.自己摸牌阶段开始前发动,【蜀】势力角色依次摸一张牌.这些角色因此效果每摸一张牌,自己跟着摸一张牌',
                        连战: '连战',
                        连战_info: '锁定技,每当你使用或打出一张牌时,你回复1点体力',
                        汉帝: '汉帝',
                        汉帝_info: '锁定技,游戏开始时,你将"的卢"、"仁王盾"、"雌雄双股剑"置入装备区',
                        号将: '号将',
                        号将_info: '出牌阶段,你可以获得一名角色的所有手牌',
                        择婿: '择婿',
                        择婿_info: '出牌阶段,你可以将手牌中的一张装备牌置于一名其他角色装备区里,目标回复一点体力,自己摸一张牌',
                        偃甲: '偃甲',
                        偃甲_info: '可以将两张装备合成一件装备(保留原来两张装备的效果)',
                        休养: '休养',
                        休养_info: '回合开始,若你的体力值未满,你可以增加一点体力上限并回满体力',
                        傲才: '傲才',
                        傲才_info: '当你于回合外需要使用或打出一张基本牌时,你可以观看牌堆顶的150张牌.若你观看的牌中有此牌,你可以使用打出之',
                        黩武: '黩武',
                        黩武_info: '出牌阶段,你可以弃置任意张牌对你攻击范围内的一名角色造成三点火焰伤害',
                        花好: '花好',
                        花好_info: '花好月圆:锁定技,在你成为牌的目标后,你可以回复一点体力并摸一张牌;锁定技,若你于出牌阶段使用的牌数不大于你的体力值,则你跳过弃牌阶段并摸x+1张牌.(x为你已损失的体力值.)',
                        伺盗: '伺盗',
                        伺盗_info: '其他角色回合结束阶段须交给你一张牌,受到两点雷电伤害',
                        贪婪: '贪婪',
                        贪婪_info: '出牌阶段,你可以令一名其他角色对其使用牌没有次数与距离限制',
                        利熏: '利熏',
                        利熏_info: '锁定技,你无法收到伤害',
                        崩坏: '崩坏',
                        崩坏_info: '每名玩家结束阶段,若你的体力不是全场最少的(或之一),你可以选择回复一点体力或者加一点体力上限',
                        幻崩: '幻崩',
                        幻崩_info: '锁定技.每当造成或受到伤害后,自己弃置一张牌,之后两张牌',
                        琴音: '琴音',
                        琴音_info: '弃牌阶段结束时,你可以选择一项:1. 令所有角色各回复满点体力;2. 令所有角色各失去999点体力',
                        定权: '定权',
                        定权_info: '出牌阶段,可以选择一名角色,自己选择一项 效果发动:1、该角色摸Y张牌,获得【谋溃】直至其回合结束.2、该角色弃X张牌,获得【崩坏】直至其回合结束.(X为目标体力值,Y为目标已损失体力值)',
                        衰危: '衰危',
                        衰危_info: '锁定技.游戏每隔五轮,自己回合开始前获得一张【闪电】.游戏进行15轮后,自己立即死亡',
                        安恤: '安恤',
                        安恤_info: '出牌阶段,你可以选择两名手牌数不同的其他角色,令其中手牌多的角色将一张手牌交给手牌少的角色,若这两名角色手牌数不相等,你摸一张牌或回复1点体力',
                        追忆: '追忆',
                        追忆_info: '每名玩家出牌阶段限用一次,场上有玩家受伤时,你可以选择一名角色摸三张牌和回复满体力',
                        放权: '放权',
                        放权_info: '你可跳过你的弃牌阶段,若如此做,回合结束时你摸四张牌并回复满体力,你可以弃置两张手牌并令两名其他角色进行一个额外的回合',
                        享乐: '享乐',
                        享乐_info: '当你成为带有「伤害」这一标签的基本牌或普通锦囊牌的目标时,其需弃置一张基本牌,否则此牌对你无效',
                        魏文: '魏文',
                        魏文_info: '当一名角色翻至正面后,你摸一张牌并回复一点体力',
                        流放: '流放',
                        流放_info: '当场上有人受到伤害后,你选择一名角色翻面你摸一张牌',
                        放逐: '放逐',
                        放逐_info: '当有玩家受到伤害后,你可以令一名其他一名角色翻面,你回复满体力并摸一张牌',
                        散谣: '散谣',
                        散谣_info: '你可以弃置任意张牌并指定等量除你外体力值最多(或之一)的其他角色.你对这些角色依次造成3点伤害,你摸两张牌',
                        心战: '心战',
                        心战_info: '出牌阶段限用一次,你可以观看牌堆顶的3张牌,获得所有牌',
                        挥泪: '挥泪',
                        挥泪_info: '当有你受伤时,你可令伤害来源角色弃置所有的牌',
                        护驾: '护驾',
                        护驾_info: '当你需要使用或打出【闪】时,你视为使用或打出了此【闪】',
                        激将: '激将',
                        激将_info: '当你需要使用或打出【杀】时,你视为使用或打出了此【杀】',
                        血裔: '血裔',
                        血裔_info: '锁定技,场上每有一名角色存活,你的手牌上限便+2',
                        救援: '救援',
                        救援_info: '主公技,锁定技,其他吴势力角色对你使用的【桃】的回复值+1',
                        七衰: '七衰',
                        七衰_info: '锁定技,当你进入濒死状态时,你可以令所有其他角色依次交给你一张牌',
                        登楼: '登楼',
                        登楼_info: '锁定技,结束阶段,你可以观看牌堆顶的10张牌,依次使用其中的所有基本牌(不能使用则弃置),获得其余的牌',
                        散文: '散文',
                        散文_info: '当你获得牌后,若你的原手牌中有与这些牌名称相同的牌,则你可以展示这些牌,弃置新得到的同名牌并摸两倍的牌',
                        誓仇: '誓仇',
                        誓仇_info: '准备阶段,你可指定一名角色.本局游戏中,当你受到伤害时,改为该角色受到等量的伤害并摸等量的牌,直至该角色第一次进入濒死状态',
                        'mashu+': '马术',
                        'mashu+_info': '锁定技,你计算与其他角色的距离时-1.且可以使用无限数量的酒',
                        'fenpo+': '凤魄',
                        'fenpo+_info': '当你于出牌阶段内使用牌指定目标后,若目标为一,你可以选择一项:1.摸X张牌;2.令此牌的伤害值基数+X.(X为其手牌中方牌的数量)',
                        'canshi+': '残蚀',
                        'canshi+_info': '摸牌阶段开始时,你可以多摸X+Y张牌(X为已受伤的角色数,Y为你当前体力值),若如此做,当你于此回合内使用【杀】或普通锦囊牌时,你摸一张牌且造成的回复和伤害+1',
                        'chouhai+': '仇海',
                        'chouhai+_info': '锁定技,当你当前手牌数量小于你的体力值受到伤害时,此伤害-1且获得一点护甲',
                        'guiming+': '归命',
                        'guiming+_info': '主公技,锁定技,你将残蚀描述中的<已受伤角色>改为<已受伤角色或其他吴势力角色>',
                        'wushen+': '武神',
                        'wushen+_info': '锁定技,你的♥️️手牌均视为【杀】;锁定技,你使用♥️️【杀】无距离和次数限制且不可被响应',
                        忠义: '忠义',
                        忠义_info: '回合开始前选择发动.发动后清空判定区的延时锦囊牌,视为装备一张【青龙偃月刀】,之后自己摸一张牌',
                        奇制: '奇制',
                        奇制_info: '当你于回合内使用基本牌或锦囊牌指定目标后,你可以弃置不是此牌目标的一名角色的一张牌.若如此做,其失去一点体力,你摸一张牌',
                        进趋: '进趋',
                        进趋_info: '每名玩家回合结束时,你可以弃置一名角色任意区域一张牌,你摸一张牌并回复一点体力',
                        xmingjian: '明鉴',
                        xmingjian_info: '出牌阶段限用一次,你可以将一张手牌交给一名其他角色,若如此做,你与该角色于其回合的手牌没有上限,且使用【杀】的次数没有上限,之后你摸X张牌.(X为该角色当前的体力)',
                        xrende: '仁德',
                        xrende_info: '出牌阶段,你可以将任意手牌交给其他角色;你回复一点体力且可以视为使用一张基本牌',
                        xhuituo: '恢拓',
                        xhuituo_info: '当场上有玩家受到伤害后,你可以令一名角色进行一次判定,若结果为红色,该角色回复满点体力;若结果为黑色,你和该角色各摸1张牌',
                        xxingshuai: '兴衰',
                        xxingshuai_info: '锁定技,当你进入濒死状态时,其他角色可依次令你回复两点体力,这些角色依次摸一张牌',
                        D_shejian: '舌剑',
                        D_shejian_info: '当场上有人受到伤害前,你可以令此伤害变成体力流失并且数值翻倍.你回复两点体力和摸两张牌',
                        xlongmai: '龙脉',
                        xlongmai_info: '当有角色对你造成伤害时,你防止此伤害,并对该角色造成两点神圣伤害伤害和一点火焰伤害.铁索连环对你无效',
                        xtianming: '天命',
                        xtianming_info: '锁定技,当你成为【基本牌】【锦囊牌】【装备牌】的目标时,你可以摸两张牌',
                        xshenfen: '神愤',
                        xshenfen_info: '出牌阶段限用两次,你回复一点体力,对所有其他角色各造成两点火焰伤害.这些角色弃置装备区内的所有牌,弃置两张手牌',
                        诈降: '诈降',
                        诈降_info: '出牌阶段限用一次,你摸X张牌.直到回合结束,你使用【杀】没有次数限制且红色【杀】无距离限制且不能被【闪】响应.(X为你当前的体力值)',
                        苦肉: '苦肉',
                        苦肉_info: '出牌阶段,你可以回复一点体力,摸两张牌',
                        殃众: '殃众',
                        殃众_info: '当你造成伤害后,若受伤角色存活,则你可弃置一张牌,令受伤角色失去两点体力,之后你摸两张牌',
                        惶恐: '惶恐',
                        惶恐_info: '锁定技,当你成为【基本牌】【锦囊牌】的目标时,你回复一点体力并摸一张牌',
                        神佑: '神佑',
                        神佑_info: '游戏开始前,你所在的游戏阵营直接取得游戏胜利',
                        伏骑: '伏骑',
                        伏骑_info: '锁定技,当你使用牌时,你令其他角色不能使用或打出牌响应此牌',
                        骄恣: '骄恣',
                        骄恣_info: '<li>锁定技,当你造成伤害时,此伤害+2<li>你获得令角色进入濒死状态的牌',
                        suoyingx: '薮影',
                        suoyingx_info: '每回合限一次,当你对其他角色(或其他角色对你)使用【杀】或普通锦囊牌指定唯一目标后,若此牌不是本回合你对其(或其对你)使用的第一张【杀】或普通锦囊牌,你可以弃置一张牌,获得此牌对应的所有实体牌(或令此牌对你无效)',
                        mansix: '蛮嗣',
                        mansix_info: '你可以将一张手牌当南蛮入侵使用,受到南蛮入侵伤害的玩家随机弃置一张牌,你摸一张牌',
                        zhanyuanx: '战缘',
                        zhanyuanx_info: '觉醒技,准备阶段,若你已因蛮嗣累计获得大于或者等于10张牌,你加一点体力上限并回复1点体力,并可以选择一名角色,你与其获得技能〖系力〗,你失去技能〖蛮嗣〗',
                        manyix: '蛮裔',
                        manyix_info: '锁定技,【南蛮入侵】对你无效',
                        hmxilix: '系力',
                        hmxilix_info: '你的回合外,当其他拥有【系力】技能的角色在其回合内对没有【系力】技能的角色造成伤害时,你可以弃置张牌,令此伤害+2,你与其各摸两张牌',
                        裸衣: '裸衣',
                        裸衣_info: '摸牌阶段,你可以多摸一张牌,若如此做,你本回合使用【杀】和【决斗】伤害+1',
                        勇决: '勇决',
                        勇决_info: '当有角色于回合内使用【杀】结算完之后,你获得此【杀】',
                        不屈: '不屈',
                        不屈_info: '锁定技,当你处于濒死状态时,你亮出牌堆顶的一张牌并置于你的武将牌上,称之为<创>.你回复至1体力.只要你的武将牌上有<创>,你的手牌上限便与<创>的数量相等',
                        奋激: '奋激',
                        奋激_info: '当一名角色的手牌被其他角色弃置或获得后,你可以回复1点体力,令该角色摸一张牌并回复一点体力',
                        雄乱: '雄乱',
                        雄乱_info: '每回合限用一次,出牌阶段,你选择一个目标并废除该目标的装备区和你的判定区,你获得三张【杀】,直到回合结束,你对其使用牌无距离和次数限制,其不能使用和打出手牌',
                        从谏: '从谏',
                        从谏_info: '当你成为锦囊牌的目标时,若此牌的目标数大于1,则你可以交给其中一名其他目标角色一张牌,摸一张牌,若你给出的是装备牌,改为摸两张牌且回复等量体力',
                        空城: '空城',
                        空城_info: '锁定技,你区域内均视为没有牌',
                        八阵: '八阵',
                        八阵_info: '当你需要使用或打出【闪】时,你可进行一次判定,若结果不为♠️️,则视为你使用或打出了一张【闪】',
                        谋略: '谋略',
                        谋略_info: '每回合限用两次,你可以将一张手牌当作任意非延时锦囊牌使用',
                        yaowux: '耀武',
                        yaowux_info: '锁定技,当你造成或受到牌的伤害时,你摸一张牌',
                        恃勇: '恃勇',
                        恃勇_info: '锁定技,当你受到一次【杀】造成的伤害后,伤害来源需减少1点体力上限',
                        若愚: '若愚',
                        若愚_info: '觉醒技,准备阶段,若你的体力值为全场最少,则你加两点体力上限并回复满体力,获得技能〖思蜀〗和〖激将〗',
                        liu: '激将',
                        liu_info: '当你需要使用或打出【杀】时,你视为使用或打出了此【杀】',
                        jiuyuanx: '救援',
                        jiuyuanx_info: '当你需要使用或打出【桃】时,你视为使用或打出了此【桃】',
                        武库: '武库',
                        武库_info: '锁定技,当有角色使用装备牌时,你获得一个<武库>并摸一张牌',
                        三陈: '三陈',
                        三陈_info: '觉醒技,准备阶段,若你的<武库>数大于5,则你加1点体力上限并回复1点体力,获得〖灭吴〗',
                        灭吴: '灭吴',
                        灭吴_info: '你可弃置两枚<武库>并将一张牌当做任意基本牌或锦囊牌使用',
                        taoluanx: '滔乱',
                        taoluanx_info: '锁定技:你可以将一张牌当作任意一张基本牌或锦囊牌使用,每使用此技能时你摸一张牌',
                        贿生: '贿生',
                        贿生_info: '当你受到其他角色对你造成的伤害时,你可以令其观看你任意数量的牌并令其选择一项:1.获得这些牌中的一张,防止此伤害,你摸x张牌,你不能再对其发动〖贿生〗;2.失去x点体力(x为你展示的牌数)',
                        破军: '破军',
                        破军_info: '<li>锁定技,当你使用牌时,你可以让该角色失去任意张牌;<li>你令其他角色不能使用或打出牌响应此牌;<li>你造成的伤害＋1.<li>游戏开始时,你获得【强化版古锭刀】效果,并摸两张牌',
                        xushenx: '许身',
                        xushenx_info: '每回合限用一次,当你使用或打出一张牌时,你可以获得一名其他角色的两张牌.若如此做,场上所有的<关索>各摸一张牌',
                        武怒: '武怒',
                        武怒_info: '当你于出牌阶段内使用【杀】或【决斗】指定目标后,你可以选择一项:1.回复2点体力;2.此牌造成的伤害+X(X为你的手牌数量)',
                        武傲: '武傲',
                        武傲_info: '当你的杀被闪抵消时,可以弃置1张手牌令此杀依然造成伤害,若弃置的牌与原杀颜色相同,则此伤害+1;若不同,你获得目标手牌区的1张牌',
                        hh: '幻化',
                        hh_info: '锁定技,游戏开始/回合开始/结束阶段开始时,你观看随机七张武将牌,并获得其中一张上的所有技能',
                        奋威: '奋威',
                        奋威_info: '当其他角色使用的牌指定了目标时,你可以令此牌对其中任意名角色无效,你摸一张牌',
                        烈胆: '烈胆',
                        烈胆_info: '锁定技,其他角色的准备阶段开始时,若X大于0,则你摸X张牌.若X等于3,则你加1点体力上限并回复一点体力,该角色失去一点体力.若X为0,则你该角色1点体力上限回复一点体力(X为你的手牌数,体力值,装备区牌数中大于其的数量)',
                        壮胆: '壮胆',
                        壮胆_info: '觉醒技,开始阶段,若你的体力不超过3,你则增加一点体力上限并回复一点体力,获得〖界刚烈〗',
                        D_xiaoguo: '骁果',
                        D_xiaoguo_info: 'D_machao',
                        狼袭: '狼袭',
                        狼袭_info: '出牌阶段,对一名其他角色随机造成0~2点伤害',
                        衣钵: '衣钵',
                        衣钵_info: '当你阵亡时,你可以选择一名角色获得你当前的所有技能',
                        D_songwei: '颂威',
                        D_songwei_info: '其他角色判定结果生效后,可让你摸一张牌',
                        D_jifeng: '疾风',
                        D_jifeng_info: '其他角色的回合开始前,你可以执行一个额外的回合. ',
                        zhaohu: '召虎',
                        zhaohu_info: ' 每当你受到一次伤害后,你可以弃置一张手牌,视为对任意一名角色使用一张【杀】',
                        D_liuli: '琉璃',
                        D_liuli_info: '当你成为一张牌的目标时,你摸一张牌,可以弃置一张牌并将此牌目标转移给一名其他角色(不能是此牌的使用者)你与其他角色计算距离始终为1',
                        失权: '失权',
                        失权_info: '锁定技.自己受到伤害前,【魏】势力角色依次摸一张牌.这些角色因此效果每摸一张牌,自己跟着摸一张牌',
                        D_xijue: '袭爵',
                        D_xijue_info: '锁定技,游戏开始时,你获得4枚<爵>.回合结束时,你获得X枚<爵>(X为你本回合内造成的伤害数).你可弃置一枚<爵>并在合适的时机发动〖突袭〗和〖骁果〗',
                        D_juejing: '绝境',
                        D_juejing_info: '<li>扩展技:此技能不会失效;你计算与其他角色的距离时始终为1;<li>你没有摸牌阶段且手牌的每种花色只能有一张牌,多则弃,少则摸;<li>当你进入或脱离濒死状态时,你回复一点体力并摸一张牌',
                        D_longhun3: '龙魂',
                        D_longhun3_info: '',
                        D_luanji: '乱击',
                        D_luanji_info: '',
                        D_luanji1: '乱击',
                        D_luanji1_info: '',
                        D_guixin1: '归心',
                        D_guixin1_info: '',
                        D_guixin: '归心',
                        D_guixin_info: '锁定技,其他角色摸牌时,若摸牌数不少于2,须将摸到的牌中的一张交给你;当你受到1点伤害后,你按照你选择的区域优先度随机获得每名其他角色区域里的一张牌,回复一点体力',
                        D_xiongcai: '雄才',
                        D_xiongcai_info: '出牌阶段限两次,你可以令一名角色选择一项:1,弃置一张基本牌,回复一点体力;2,受到你造成的1点伤害,回复1点体力,结算完成后,你摸两张牌且本回合出【杀】没有次数限制',
                        D_weimu: '帷幕',
                        D_weimu_info: '',
                        xduorui: '夺锐',
                        xduorui_info: '当你对一名玩家造成伤害时,你可以令受伤角色废除一个装备栏并抢夺该玩家的一个技能',
                        D_zhiti: '止啼',
                        D_zhiti_info: '锁定技,你攻击范围内已受伤角色的手牌上限-1.若场上已受伤的角色数:不小于1,你的手牌上限+1;不小于3,你于摸牌阶段开始时令额定摸牌数+1;不小于5,回合结束时,你废除一名角色的一个随机装备栏',
                        托孤: '托孤',
                        托孤_info: '一名角色死亡时,你可以令其选择其武将牌上的一个技能(主公技,限定技,觉醒技,隐匿技等特殊技能除外),你获得其选择的技能并失去上次因〖托孤〗获得的技能',
                        D_fanjian: '反间',
                        D_fanjian_info: '出牌阶段,你可以令一名角色选择一种花色并展示你的一张手牌,若选择的花色与展示的不同,该角色受到来自你的一点伤害',
                        D_yingzi: '英姿',
                        D_yingzi_info: '锁定技,当你摸牌时,你额外摸x张牌;锁定技,你的手牌上限为你的体力上限和体力值之和(x为你当前的体力)',
                        D_chanhui: '谮毁',
                        D_chanhui_info: '锁定技:出牌阶段,当你使用牌指定唯一目标时,你可以指定一名玩家成为此牌的额外目标(装备牌除外)',
                        D_meibu: '魅步',
                        D_meibu_info: '锁定技:其他角色的出牌阶段开始时,你摸一张牌并回复一点体力,可以弃置一张牌,令该角色于本阶段内拥有〖止息〗',
                        D_mumu: '穆穆',
                        D_mumu_info: '锁定技:出牌阶段开始时,你可以选择一项:1.弃置一名其他角色装备区里的一张牌或者获得一名角色装备区里的一张防具牌,若如此做,你本回合出【杀】没有次数限制',
                        D_jiaojin: '骄矜',
                        D_jiaojin_info: '男性角色对你造成伤害时-1',
                        D_zhixi: '止息',
                        D_zhixi_info: '每当你使用一张牌时,你都需要弃置一张牌',
                        D_fengyin: '封印',
                        D_fengyin_info: '',
                        D_mashu: '马术',
                        D_mashu_info: '<li>扩展技:此技能不会失效<li>你计算与其他角色距离时始终为1..<li>当你使用【杀】时,你可以令至多X名角色也成为此【杀】的目标.(X为你已损失的体力值且至少为1)',
                        D_tieji: '铁骑',
                        D_tieji_info: '<li>扩展技:此技能不会失效<li>当你使用【杀】指定一名角色为目标后,你令该角色的技能失效直到回合结束,不能使用【闪】抵消此【杀】.<li>你使用【杀】没有次数限制.<li>你每使用一张【杀】结算完之后则摸一张牌',
                        chenglve: '成略',
                        chenglve_info: '',
                        D_kuangcai: '狂才',
                        D_kuangcai_info: '锁定技,你出牌阶段内使用牌没距离和次数限制',
                        D_shenwang: '神王',
                        D_shenwang_info: '',
                        神罚: '神罚',
                        神罚_info: '',
                        D_tieji1: '铁骑',
                        D_tieji1_info: '',
                        lishang: '离伤',
                        lishang_info: '你的回合外,你手牌上限等于你的体力值',
                        骄矜: '骄矜',
                        骄矜_info: '',
                        yimie1: '夷灭',
                        yimie1_info: '当你对其他角色造成伤害时,你可失去1点体力,将伤害值加X(X为该角色的体力值)',
                        D_taoyin: '韬隐',
                        D_taoyin_info: '当你受到伤害后,若当前回合角色存在且不是你,则你可令该角色本回合的手牌上限为0',
                        taoyin1: '韬隐',
                        taoyin1_info: '',
                        ruilue: '睿略',
                        ruilue_info: '其他角色的出牌阶段,该角色可以将一张带有伤害标签的基本牌或锦囊牌交给你',
                        ruilue1: '睿略',
                        ruilue1_info: '',
                        D_tairan: '泰然',
                        D_tairan_info: '锁定技,回合结束时,你回复Y点体力,并将手牌摸至X张.(X为你的体力上限;Y=(X-你的体力值)且至多为5);摸牌至多摸五张',
                        huangtian1: '黄天',
                        huangtian1_info: '其他角色的出牌阶段限,其可以交给你一张【闪】或【杀】',
                        D_huangtian: '黄天',
                        D_huangtian_info: '',
                        guidao1: '鬼道',
                        guidao1_info: '每当有角色判定时,你摸一张牌.你可以选择用自己的牌替换判定牌,若如此做,你再摸一张牌',
                        D_huoji: '火计',
                        D_huoji_info: '出牌阶段,你可以将你的任意一张手牌当作【火攻】使用',
                        D_lianhuan1: '连环',
                        D_lianhuan1_info: ' 你弃置一张牌让任意名玩家进入连环状态或者重铸一张牌.你使用【铁索连环】选择目标没有上限',
                        D_lianhuan2: '重铸',
                        D_lianhuan2_info: '',
                        D_lianhuan3: '连环',
                        D_lianhuan3_info: '',
                        D_lianhuan4: '连环',
                        D_lianhuan4_info: '',
                        D_免疫: 'D_免疫',
                        D_免疫_info: '当你受到致命伤害时 你防止此伤害',
                        巨象: '巨象',
                        巨象_info: '',
                        D_niepan: '涅槃',
                        D_niepan_info: '当有玩家处于濒死状态时,你可以让该玩家弃置区域内的所有牌并复原该玩家的武将牌,摸三张牌并将体力回复至3点.你获得以下技能:〖八阵〗/〖火计〗/〖谋略〗',
                        改命: '改命',
                        改命_info: '限定技,出牌阶段,你可以指定一名角色,令其7回合内死亡时不会产生效果(体力上限等于0或你已死亡则失效),在此期间,其每次死亡前你都将失去一点体力上限(失去体力上限的来源为伤害来源)',
                        rangxing: '壤星',
                        rangxing_info: '',
                        tushe1: '图射',
                        tushe1_info: '',
                        tushe: '图射',
                        tushe_info: '<li>当你使用牌指定目标后,你可以摸X张牌并回复X点体力.(X为此牌指定的目标数).<li>回合开始时,你清除判定区的所有延时锦囊',
                        limu: '立牧',
                        limu_info: '<li>出牌阶段,你对攻击范围内的其他角色使用牌没有次数和距离限制.<li>你可以将一张牌当【杀】使用/打出',
                        lianhuo1: '链祸',
                        lianhuo1_info: '锁定技,当你受到属性伤害时,此伤害+X.(X为你当前体力值的一半)',
                        jishe1: '极奢',
                        jishe1_info: '出牌阶段限20次,你可以摸一张牌,结束阶段开始时,你可以横置至任意名角色的武将牌',
                        jishe4: '极奢',
                        jishe4_info: '',
                        guhuo1: '蛊惑',
                        guhuo1_info: '你可以说出任何一种基本牌或普通锦囊牌,并正面朝下使用或打出一张手牌.体力值不为0的其他角色依次选择是否质疑.若无角色质疑,则该牌按你所述之牌结算.若有角色质疑则亮出验明:若为真,质疑者各失去1点体力;若为假,质疑者各摸一张牌.无论真假,弃置被质疑的牌.仅当被质疑的牌为♥️️且为真时,该牌仍然可以进行结算',
                        万剑: '万剑',
                        万剑_info: '',
                        获得: '获得',
                        获得_info: '',
                        kurou1: '苦肉',
                        kurou1_info: '出牌阶段,你可以选择一名角色失去一点体力,你摸两张牌',
                        ol_cuorui: '挫锐',
                        ol_cuorui_info: '锁定技,每当你摸牌时,你多摸X张牌(X为你的体力).锁定技,判定阶段开始前,若你的判定区有牌,你跳过此阶段',
                        ol_cuorui1: '挫锐',
                        ol_cuorui1_info: '',
                        qizuo: '奇佐',
                        qizuo_info: '你可以令你的基本牌,普通锦囊额外结算一次',
                        qizuo1: '奇佐',
                        qizuo1_info: '',
                        tiandu1: '天妒',
                        tiandu1_info: '当你的判定牌生效后,你可以摸一张牌并获得该判定牌',
                        xinyeyan: '业炎',
                        xinyeyan_info: '出牌阶段,你可以对任意名角色造成一人五点火焰伤害',
                        摸牌: '摸牌',
                        摸牌_info: '',
                        装备: '装备',
                        装备_info: '',
                        xin_fuzhu: '伏诛',
                        xin_fuzhu_info: '',
                        luoying1: '落英',
                        luoying1_info: '当其他角色的牌因弃置或判定而进入弃牌堆时,你可以获得之',
                        jiushi11: '酒诗',
                        jiushi11_info: '当你需要使用【酒】时,视为使用一张【酒】.当你受到伤害后,你可以获得牌堆中的一张随机锦囊',
                        jiushi12: '酒诗',
                        jiushi12_info: '',
                        tianjiang: '天匠',
                        tianjiang_info: '游戏开始时,你获得衍生牌中你所对应卡牌的所有技能,你失去技能〖天匠〗',
                        gudingdao: '玄铁重剑',
                        gudingdao_info: '当你使用有伤害的牌指定目标时,若该目标装备区或者手牌区任意一区域没有牌,那么你对其造成的伤害翻倍',
                        yuanhong1: '伏龙屠狮刀',
                        yuanhong1_info: '',
                        yuanhong2: '伏龙屠狮刀',
                        yuanhong2_info: '',
                        yuanhong3: '伏龙屠狮刀',
                        yuanhong3_info: '',
                        meimei2: '银霜逐电驹',
                        meimei2_info: '',
                        meimei1: '银霜逐电驹',
                        meimei1_info: '',
                        qvn_wsysluanji1: '乱击',
                        qvn_wsysluanji1_info: '你可以将一张手牌当作万箭齐发使用,受到伤害的角色随机弃置一张牌',
                        qvn_zizhijijian: '技箭',
                        qvn_zizhijijian_info: '其他角色弃牌阶段开始时,若其于此回合内使用或打出了至少三种花色的牌,其将与之对应花色的手牌全部弃置并失去一点体力',
                        qvn_tianyong: '天勇',
                        qvn_tianyong_info: '锁定技,若你的体力值为5或更少,你视为拥有技能<奇袭>;若你的体力值为3或更少;你视为拥有技能<破军>;若你的体力值为1,你视为拥有技能<不屈>',
                        qvn_qixi: '奇袭',
                        qvn_qixi_info: '你可以将一张黑色牌当做【过河拆桥】使用',
                        qvn_pejvn: '破军',
                        qvn_pejvn_info: '当你使用【杀】造成伤害后,你可以令受到该伤害的角色摸1张牌,该角色将其武将牌翻面',
                        qvn_tsc: '不屈',
                        qvn_tsc_info: '每个角色的回合限一次.当你进入濒死状态后,立即回复一点体力并摸两张牌',
                        qvn_guandingyv: '定约',
                        qvn_guandingyv_info: '锁定技,回合开始时,你须声明一种花色和一个点数.此回合内你的牌均视为此花色和点数',
                        huang_guanlve: '掠夺',
                        huang_guanlve_info: '',
                        qvn_minfs: '名士',
                        qvn_minfs_info: '敌方角色摸牌阶段,若其已受伤,你可以令其少摸一张牌,每当你受到一次伤害时,你可以令伤害来源选择一项:展示所有手牌并弃置其中2张;或令此伤害-1',
                        qvn_lirang: '礼让',
                        qvn_lirang_info: '当你的牌因弃置而置入弃牌堆时,你可以将其中的任意张牌交给其他角色',
                        zhaozhu1: '召诛',
                        zhaozhu1_info: '',
                        zhaozhu: '召诛',
                        zhaozhu_info: '游戏开始时,你回复X点体力(X为当前势力数量)每当一种势力的最后一个角色阵亡时,你失去一点体力',
                        箭阵: '箭阵',
                        箭阵_info: '出牌阶段限用X次,你可以失去一点体力,视为使用一张【万箭齐发】(X为当前势力数量)',
                        分立: '分立',
                        分立_info: '锁定技,你手牌上限加X(X为当前势力数量)',
                        zhaoyue: '照月狮子盔',
                        zhaoyue_info: '锁定技,当你受到大于1的伤害时,你防止此伤害;当你失去装备区里的【照月狮子盔】时,你回复1点体力并摸两张牌',
                        D_longhun1: '龙魂',
                        D_longhun1_info: '',
                        qimen: '奇门八卦',
                        qimen_info: '锁定技:其他角色使用的【杀】对你无效',
                        D_fanghun: '芳魂',
                        D_fanghun_info: '<li>当你使用或者成为带有「伤害」这一标签的基本牌或普通锦囊牌目标后,你获得1个<梅影>标记<li>你可以移去1个<梅影>标记来发动〖龙魂〗并摸一张牌',
                        xinfuhan: '扶汉',
                        xinfuhan_info: '限定技,回合开始时,你可以移去所有"梅影"标记并摸等量的牌,从所有蜀势力武将牌中选择并获得任意个技能(主公技除外).若此时你是体力值最低的角色,你回复1点体力',
                        D_fanghun_Draw: '芳魂',
                        D_fanghun_Draw_info: '',
                        D_fanghun_sha: '芳魂',
                        D_fanghun_sha_info: '',
                        longhun_wuxie: '龙魂',
                        longhun_wuxie_info: '',
                        xinbanlonghun: '龙魂',
                        xinbanlonghun_info: '<li>扩展技:此技能不会失效<li>回合开始前,你装备【青釭剑】; <li>你可以将一张牌当作【火杀】【闪】【桃】【酒】【无懈可击】使用.<li>你造成的伤害或回复值＋1.<li>你使用的【无懈可击】不能被响应',
                        D_hongyan: '红颜',
                        D_hongyan_info: '锁定技,你的所有牌没有花色<li>任意角色进行判定前,你可以声明任意花色、点数、牌名作为本次判定的结果.(此结果无视其他技能效果且不可更改)',
                        jiaozi1: '骄姿',
                        jiaozi1_info: '',
                        D_wushuang: '无双',
                        D_wushuang_info: '<li>锁定技,当你使用【杀】或【决斗】指定目标后,随机令此牌①需要依次使用或打出两张【闪】或【杀】响应.②无法响应且伤害+1.<li>锁定技,你使用【杀】或【决斗】指定的目标数上限+2,使用【杀】的次数上限+1且没有距离限制',
                        D_wushuang1: '无双',
                        D_wushuang1_info: '',
                        D_shenwei: '神威',
                        D_shenwei_info: '锁定技,当其他角色使用【杀】或【决斗】指定目标后,你可以为【杀】或【决斗】减少一个目标',
                        D_guose: '国色',
                        D_guose_info: '<li>你可以将一张牌当做【乐不思蜀】或【兵粮寸断】使用<li>你不会成为【乐不思蜀】和【兵粮寸断】的目标且使用【兵粮寸断】没有距离限制',
                        D_liuli: '琉璃',
                        D_liuli_info: '当你成为带有「伤害」这一标签的基本牌或普通锦囊牌的目标时,你摸一张牌,可以弃置一张牌,将该牌的目标转移至一名其他角色',
                        D_qiaobian: '巧变',
                        D_qiaobian_info: '你可以跳过判定阶段和弃牌阶段;摸牌阶段你可以选择获得任意名角色各一张牌;出牌阶段你可以移动场上的一张牌',
                        D_qiaobian1: '巧变',
                        D_qiaobian1_info: '',
                        D_qiaobian2: '巧变',
                        D_qiaobian2_info: '',
                        D_qiaobian3: '巧变',
                        D_qiaobian3_info: '',
                        D_qingnang: '青囊',
                        D_qingnang_info: '出牌阶段你可以弃置一张牌 让已受伤的角色回满体力',
                        miaoshou: '妙手',
                        miaoshou_info: '限定技,你可以令一名以阵亡的角色复活并摸四张牌',
                        D_guanxing: '观星',
                        D_guanxing_info: '准备阶段和结束阶段,你可以观看牌堆顶的X张牌,并将其以任意顺序置于牌堆项或牌堆底.(X为存活角色数)',
                        D_kongcheng: '空城',
                        D_kongcheng_info: '锁定技,你不能成为带有「伤害」这一标签的基本牌或普通锦囊牌的目标',
                        D_kongcheng1: '空城',
                        D_kongcheng1_info: '',
                        D_canshi2: '残蚀',
                        D_canshi2_info: '',
                        D_canshi3: '残蚀',
                        D_canshi3_info: '',
                        D_zhanjue: '战绝',
                        D_zhanjue_info: '出牌阶段,你可以将一张手牌当作【决斗】使用.此【决斗】结算后,你摸一张牌',
                        D_zhanjue1: '战绝',
                        D_zhanjue1_info: '',
                        D_qinwang: '勤王',
                        D_qinwang_info: '当你需要使用或打出【杀】时,你视为使用或打出了【杀】',
                        D_liegong: '烈弓',
                        D_liegong_info: '<li>你使用【杀】可以选择你距离不大于此【杀】点数的角色为目标;<li>你使用的【杀】或【决斗】目标额外增加X个(X为此【杀】或【决斗】的点数)并令其无法响应且伤害+1.<li>你使用牌没有次数限制',
                        D_shouxi: '守玺',
                        D_shouxi_info: '当你成为带有「伤害」这一标签的基本牌或普通锦囊牌的目标后,你可声明一种基本牌或锦囊牌的牌名.使用者弃置一张你声明的牌,若否,则此牌对你无效',
                        D_xionghuo: '凶镬',
                        D_xionghuo_info: '',
                        xionghuo1: '凶镬',
                        xionghuo1_info: '',
                        D_xionghuo1: '凶镬',
                        D_xionghuo1_info: '',
                        D_xionghuo2: '凶镬',
                        D_xionghuo2_info: '',
                        xionghuo_disable1: '凶镬',
                        xionghuo_disable1_info: '',
                        xionghuo_low1: '凶镬',
                        xionghuo_low1_info: '',
                        D_xionghuo: '凶镬',
                        D_xionghuo_info: '<li>游戏开始时,你获得X个<暴戾>标记.(X为场上存活角色数量)<li>出牌阶段,你可以交给一名其他角色一个<暴戾>标记,并直到回合结束你使用【杀】没有次数限制;<li>你对有<暴戾>标记的角色造成伤害时,此伤害+1.<li>有<暴戾>的其他角色的回合开始时,其移去所有<暴戾>标记并依次执行以下效果:1.受到1点火焰伤害且本回合不能对你使用牌;2.失去1点体力且本回合手牌上限-2;3.你随机获得其一张手牌和一张装备区的牌',
                        D_shajue: '杀绝',
                        D_shajue_info: '<li>锁定技,其他角色进入濒死状态时,你获得一个<暴戾>标记,并获得使其进入濒死状态的牌.<li>当你进入濒死状态时,你可以弃置一枚<暴戾>标记,你回复一点体力',
                        pojun5: '破军',
                        pojun5_info: '',
                        D_huashen: '化身',
                        D_huashen_info: '游戏开始后,你随机获得七张未加入游戏的武将牌,选一张置于你面前并声明该武将牌的技能,你拥有该武将所有技能且同时将性别和势力属性和体力值变成与该武将相同直到该化身被替换.你的每个准备阶段,回合结束后和受到伤害时你可以选择一项:①弃置至多X张未展示的化身牌并重新获得等量化身牌(X为已拥有化身牌-1);②更换所展示的化身牌',
                        D_huashen1: '化身',
                        D_huashen1_info: '',
                        D_xinsheng: '新生',
                        D_xinsheng_info: '当你造成或受到1点伤害后,你可以获得一张新的化身牌',
                        D_shajue1: '杀绝',
                        D_shajue1_info: '',
                        D_tianbian: '天辩',
                        D_tianbian_info: '你拼点时,可以改为用牌堆顶的一张牌进行拼点;当你拼点的牌亮出后,若此牌不为【杀】,则此牌的点数视为K.若对方的拼点牌与你同为K,则你的牌点数视为∞.锁定技,当你拼点赢时,你摸一张牌',
                        D_tianbian_After: '天辩',
                        D_tianbian_After_info: '',
                        D_tianbian_number: '天辩',
                        D_tianbian_number_info: '',
                        D_zhuandui: '专对',
                        D_zhuandui_info: '当你使用一张牌指定目标/成为一张牌的目标后,你可以与目标角色/此牌使用者拼点,若你赢,此牌不能被响应/对你无效',
                        D_zhuandui_respond: '专对',
                        D_zhuandui_respond_info: '当你成为一张牌指定的目标后,你可以与此牌使用角色拼点,若你赢,此牌对你无效',
                        D_zhuandui_use: '专对',
                        D_zhuandui_use_info: '当你使用一张牌指定目标后,你可以与目标角色拼点,若你赢,此牌不能被响应',
                        D_jianzheng: '谏征',
                        D_jianzheng_info: '当一名其他角色使用带有『伤害』标签的牌指定目标时,你可以将一张手牌置于牌堆顶,取消所有目标',
                        D_qianxi: '潜袭',
                        D_qianxi_info: '当你对其他角色造成伤害时,目标减少等同伤害值的体力上限',
                        madai_mashu: '马术',
                        madai_mashu_info: '你与其他角色距离视为1',
                        D_jieying: '劫营',
                        D_jieying_info: '回合开始时,若场上没有拥有<营>标记的角色,你获得2个<营>标记;出牌阶段和结束阶段,你可以将你的一个<营>标记交给一名角色;有<营>标记的角色摸牌阶段多摸一张牌,出牌阶段使用【杀】没有次数限制,手牌上限+3.有<营>的其他角色跳过出牌阶段且回合结束时,其移去<营>标记,你获得其所有手牌和装备牌',
                        D_jieying_mark: '劫营',
                        D_jieying_mark_info: '',
                        D_poxi: '魄袭',
                        D_poxi_info: '出牌阶段限一次,你可以观看一名其他角色的手牌,你可以弃置你与其手牌中的四张牌.若如此做,依次执行以下效果:该角色扣减一点体力上限;该角色回合手牌上限-1;你回复一点体力;你摸四张牌',
                        D_pojun: '破军',
                        D_pojun_info: '当你使用牌指定目标后,你可以将令其无法响应且让其失去任意张牌和所有技能失效直到该角色回合结束,你造成的伤害最少为其当前体力.若你造成了伤害则直到回合结束使用【杀】没有次数限制',
                        D_pojun1: '破军',
                        D_pojun1_info: '',
                        liubei_longnu: '龙怒',
                        liubei_longnu_info: '转换技,锁定技,阴:出牌阶段开始时,你回复1点体力并摸5张牌,本阶段内你的红色手牌均视为火【杀】且无次数和距离限制.阳:出牌阶段开始时,你增加1点体力上限并摸5张牌,本阶段内你的黑色牌手牌均视为雷【杀】且无次数和距离限制',
                        liubei_jieying: '结营',
                        liubei_jieying_info: '锁定技,游戏开始时或当你的武将牌重置时,你横置;所有已横置的角色手牌上限+3;结束阶段,你横置一名其他角色;你每使用一张【杀】则摸一张牌;游戏开始时,你将"的卢"、"仁王盾"、"雌雄双股剑"置入装备区',
                        g_liubei_jieying: '结营',
                        g_liubei_jieying_info: '',
                        D_jili: '寄篱',
                        D_jili_info: "锁定技,当一名其他角色成不为'伤害'标签的目标时,且你不是此牌的使用者也不是目标,你也成为此牌的目标",
                        D_zhidao: '雉盗',
                        D_zhidao_info: '锁定技,当你于你的回合对区域里有牌的其他角色造成伤害后,你获得其手牌、装备区和判定区里的各一张牌,直到回合结束,你使用【杀】没有次数限制',
                        D_longhun: '龙魂',
                        D_longhun_info: '<li>扩展技:此技能不会失效<li>回合开始前,你装备【青釭剑】; <li>你可以将同花色的一张牌按下列规则使用或打出:♥️️当【桃】,♦️️当火【杀】,♣️️当【闪】,♠️️当普【无懈可击】.若你以此法使用了【桃】或火【杀】,则此牌回复值或伤害值+1.若你以此法使用了【闪】或【无懈可击】,则你可以弃置当前回合角色一张牌且以此发使用的【无懈可击】不能被响应',
                    },
                };
                for (var i in 将包.character) {
                    将包.character[i][4].push('ext:将包/image/' + i + '.jpg');
                }
                lib.config.all.characters.add('将包');
                lib.config.characters.add('将包');
                lib.translate['将包_character_config'] = '将包';
                return 将包;
            });
        },
        package: {
            card: {
                closeable: true,
                card: {
                    zhangbaz: {
                        fullskin: true,
                        type: 'equip',
                        subtype: 'equip1',
                        distance: {
                            attackFrom: -2,
                        },
                        ai: {
                            equipValue(card, player) {
                                var num = 2.5 + player.countCards('h') / 3;
                                return Math.min(num, 4);
                            },
                            basic: {
                                equipValue: 3.5,
                                order: 1,
                                useful: 2,
                                value: 1,
                            },
                            result: {
                                target(player, target, card) {
                                    return get.equipResult(player, target, card.name);
                                },
                            },
                        },
                        skills: ['zhangbax'],
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
                    hongduan: {
                        fullskin: true,
                        type: 'equip',
                        subtype: 'equip1',
                        distance: {
                            attackFrom: -2,
                        },
                        ai: {
                            equipValue(card, player) {
                                var num = 2.5 + player.countCards('h') / 3;
                                return Math.min(num, 4);
                            },
                            basic: {
                                equipValue: 3.5,
                                order: 1,
                                useful: 2,
                                value: 1,
                            },
                            result: {
                                target(player, target, card) {
                                    return get.equipResult(player, target, card.name);
                                },
                            },
                        },
                        skills: ['hongduan'],
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
                        image: 'ext:卡牌/hongduan.jpg',
                    },
                    liechudao: {
                        fullskin: true,
                        type: 'equip',
                        subtype: 'equip1',
                        distance: {
                            attackFrom: -1,
                        },
                        skills: ['liechudao'],
                        ai: {
                            basic: {
                                equipValue: 3,
                                order: 1,
                                useful: 2,
                                value: 1,
                            },
                            result: {
                                target(player, target, card) {
                                    return get.equipResult(player, target, card.name);
                                },
                            },
                        },
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
                    tianlei: {
                        fullskin: true,
                        type: 'equip',
                        subtype: 'equip1',
                        distance: {
                            attackFrom: -3,
                        },
                        skills: ['tianlei'],
                        ai: {
                            basic: {
                                equipValue: 3,
                                order: 1,
                                useful: 2,
                                value: 1,
                            },
                            result: {
                                target(player, target, card) {
                                    return get.equipResult(player, target, card.name);
                                },
                            },
                        },
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
                    shuibo: {
                        fullskin: true,
                        type: 'equip',
                        subtype: 'equip1',
                        distance: {
                            attackFrom: -1,
                        },
                        skills: ['shuibo'],
                        ai: {
                            equipValue: 7,
                            basic: {
                                equipValue: 7,
                                useful: 2,
                                value: 7,
                                order: 5,
                            },
                            result: {
                                target: (player, target, card) => get.equipResult(player, target, card.name),
                            },
                        },
                        loseDelay: false,
                        onLose() {
                            var next = game.createEvent('baiyin_recover');
                            event.next.remove(next);
                            var evt = event.parent;
                            if (evt.getlx === false) evt = evt.parent;
                            evt.after.push(next);
                            next.player = player;
                            next.setContent(function () {
                                player.hp = player.maxHp;
                            });
                        },
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
                    hundu: {
                        type: 'equip',
                        subtype: 'equip1',
                        skills: ['hundu'],
                        ai: {
                            basic: {
                                equipValue: 3,
                                order: 1,
                                useful: 2,
                                value: 1,
                            },
                            result: {
                                target(player, target, card) {
                                    return get.equipResult(player, target, card.name);
                                },
                            },
                        },
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
                        fullskin: true,
                    },
                    shesha: {
                        audio: 'ext:卡牌',
                        nature: ['thunder', 'fire'],
                        type: 'basic',
                        enable: true,
                        usable: 5,
                        selectTarget: 1,
                        filterTarget(card, player, target) {
                            return player != target;
                        },
                        content() {
                            'step 0';
                            if (typeof event.shanRequired != 'number' || !event.shanRequired || event.shanRequired < 0) {
                                event.shanRequired = 1;
                            }
                            if (typeof event.baseDamage != 'number') event.baseDamage = 1;
                            if (typeof event.extraDamage != 'number') event.extraDamage = 0;
                            ('step 1');
                            if (event.directHit || (!_status.connectMode && lib.config.skip_shan && !target.hasShan())) {
                                event._result = { bool: false };
                            } else if (event.skipShan) {
                                event._result = { bool: true, result: 'shaned' };
                            } else {
                                var next = target.chooseToUse('请使用一张闪响应杀');
                                next.set('type', 'respondShan');
                                next.set('filterCard', function (card, player) {
                                    if (card.name != 'shan') return false;
                                    return lib.filter.cardEnabled(card, player, 'forceEnable');
                                });
                                if (event.shanRequired > 1) {
                                    next.set('prompt2', '(共需使用' + event.shanRequired + '张闪)');
                                }
                                next.set('ai1', function (card) {
                                    var target = _status.event.player;
                                    var evt = _status.event.parent;
                                    var bool = true;
                                    if (_status.event.shanRequired > 1 && !get.is.object(card) && target.countCards('h', 'shan') < _status.event.shanRequired) {
                                        bool = false;
                                    } else if (target.hasSkillTag('useShan')) {
                                        bool = true;
                                    } else if (target.hasSkillTag('noShan')) {
                                        bool = false;
                                    } else if (get.damageEffect(target, evt.player, target, evt.card.nature) >= 0) bool = false;
                                    if (bool) {
                                        if (typeof card == 'string') {
                                            var info = get.info(card);
                                            if (info.ai && info.ai.order) {
                                                if (typeof info.ai.order == 'number') {
                                                    return info.ai.order;
                                                } else if (typeof info.ai.order == 'function') {
                                                    return info.ai.order();
                                                }
                                            }
                                        }
                                        return 3;
                                    }
                                    return 0;
                                }).set('shanRequired', event.shanRequired);
                                next.set('respondTo', [player, card]);
                                //next.autochoose=lib.filter.autoRespondShan;
                            }
                            ('step 2');
                            if (!result || !result.bool || !result.result || result.result != 'shaned') {
                                event.trigger('shaHit');
                            } else {
                                event.shanRequired--;
                                if (event.shanRequired > 0) {
                                    event.goto(1);
                                } else {
                                    event.trigger('shaMiss');
                                    event.responded = result;
                                }
                            }
                            ('step 3');
                            if ((!result || !result.bool || !result.result || result.result != 'shaned') && !event.unhurt) {
                                target.damage(get.nature(event.card), event.baseDamage + event.extraDamage);
                                event.result = { bool: true };
                                event.trigger('shaDamage');
                                target.loseHp();
                            } else {
                                event.result = { bool: false };
                                event.trigger('shaUnhirt');
                                target.loseMaxHp();
                            }
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
                                    if (
                                        !isLink &&
                                        player.hasSkill('jiu') &&
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
                        },
                        image: 'ext:卡牌/shesha.jpg',
                        fullskin: true,
                    },
                    ansha: {
                        fullborder: 'gold',
                        type: 'gold',
                        subtype: 'spell_gold',
                        enable(card, player) {
                            var enemies = player.getEnemies();
                            return game.hasPlayer(function (current) {
                                return current.hp != 0 && enemies.includes(current);
                            });
                        },
                        notarget: true,
                        contentBefore() {
                            player.$skill('暗杀', 'legend', 'metal');
                        },
                        content() {
                            var enemies = player.getEnemies();
                            var list = game.filterPlayer(function (current) {
                                return current.hp != 0 && enemies.includes(current);
                            });
                            if (list.length) {
                                var target = list.randomGet();
                                player.line(target);
                                target.die();
                            }
                        },
                        contentAfter() {
                            player.draw(2);
                        },
                        ai: {
                            value: 8,
                            useful: [6, 1],
                            result: {
                                player: 1,
                            },
                            order: 0.6,
                        },
                        fullskin: true,
                    },
                    xiantian: {
                        type: 'equip',
                        subtype: 'equip2',
                        ai: {
                            basic: {
                                equipValue: 7.5,
                                order: 1,
                                useful: 2,
                                value: 1,
                            },
                            result: {
                                target(player, target, card) {
                                    return get.equipResult(player, target, card.name);
                                },
                            },
                        },
                        skills: ['rw_bagua_skill'],
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
                        fullskin: true,
                    },
                    jingang: {
                        type: 'equip',
                        subtype: 'equip2',
                        skills: ['rw_renwang_skill'],
                        ai: {
                            basic: {
                                equipValue: 7.5,
                                order: 1,
                                useful: 2,
                                value: 1,
                            },
                            result: {
                                target(player, target, card) {
                                    return get.equipResult(player, target, card.name);
                                },
                            },
                        },
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
                        fullskin: true,
                    },
                    zhaoyue: {
                        type: 'equip',
                        subtype: 'equip2',
                        filterLose(card, player) {
                            if (player.hasSkillTag('unequip2')) return false;
                            return true;
                        },
                        loseDelay: false,
                        onLose() {
                            player.draw(2);
                            player.recover();
                        },
                        skills: ['zhaoyue'],
                        tag: {
                            recover: 1,
                        },
                        ai: {
                            order: 9.5,
                            equipValue(card, player) {
                                if (player.hp == player.maxHp) return 5;
                                if (player.countCards('h', 'rewrite_baiyin')) return 6;
                                return 0;
                            },
                            basic: {
                                equipValue: 5,
                                order: 1,
                                useful: 2,
                                value: 1,
                            },
                            result: {
                                target(player, target, card) {
                                    return get.equipResult(player, target, card.name);
                                },
                            },
                        },
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
                        fullskin: true,
                    },
                    tongyou: {
                        type: 'equip',
                        subtype: 'equip2',
                        ai: {
                            equipValue(card, player) {
                                if (player.hasSkillTag('maixie') && player.hp > 1) return 0;
                                if (player.hasSkillTag('noDirectDamage')) return 10;
                                if (get.damageEffect(player, player, player, 'fire') >= 0) return 10;
                                var num =
                                    3 -
                                    game.countPlayer(function (current) {
                                        return get.attitude(current, player) < 0;
                                    });
                                if (player.hp == 1) num += 4;
                                if (player.hp == 2) num += 1;
                                if (player.hp == 3) num--;
                                if (player.hp > 3) num -= 4;
                                return num;
                            },
                            basic: {
                                equipValue: 3,
                                order: 1,
                                useful: 2,
                                value: 1,
                            },
                            result: {
                                target(player, target, card) {
                                    return get.equipResult(player, target, card.name);
                                },
                            },
                        },
                        skills: ['rw_tengjia1', 'rw_tengjia2', 'rw_tengjia3', 'rw_tengjia4'],
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
                        fullskin: true,
                    },
                    yuanrong: {
                        distance: {
                            attackFrom: -2,
                        },
                        type: 'equip',
                        subtype: 'equip1',
                        ai: {
                            equipValue(card, player) {
                                if (
                                    !game.hasPlayer(function (current) {
                                        return player.canUse('sha', current) && get.effect(current, { name: 'sha' }, player, player) > 0;
                                    })
                                ) {
                                    return 1;
                                }
                                if (player.hasSha() && _status.currentPhase == player) {
                                    if (player.getEquip('zhuge') || player.getCardUsable('sha') == 0) {
                                        return 10;
                                    }
                                }
                                var num = player.countCards('h', 'sha');
                                if (num > 1) return 6 + num;
                                return 3 + num;
                            },
                            basic: {
                                equipValue: 5,
                                order: 1,
                                useful: 2,
                                value: 1,
                            },
                            tag: {
                                valueswap: 1,
                            },
                            result: {
                                target(player, target, card) {
                                    return get.equipResult(player, target, card.name);
                                },
                            },
                        },
                        skills: ['rw_zhuge_skill'],
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
                        fullskin: true,
                    },
                    jingyin: {
                        type: 'equip',
                        subtype: 'equip2',
                        skills: ['rw_lanyinjia', 'lanyinjia2'],
                        ai: {
                            equipValue: 6,
                            basic: {
                                equipValue: 1,
                                order: 1,
                                useful: 2,
                                value: 1,
                            },
                            result: {
                                target(player, target, card) {
                                    return get.equipResult(player, target, card.name);
                                },
                            },
                        },
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
                        fullskin: true,
                    },
                    gudingdao: {
                        type: 'equip',
                        subtype: 'equip1',
                        distance: {
                            attackFrom: -1,
                        },
                        ai: {
                            basic: {
                                equipValue: 2,
                                order: 1,
                                useful: 2,
                                value: 1,
                            },
                            result: {
                                target(player, target, card) {
                                    return get.equipResult(player, target, card.name);
                                },
                            },
                        },
                        skills: ['gudingdao'],
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
                        fullskin: true,
                    },
                    yuanhong: {
                        type: 'equip',
                        subtype: 'equip1',
                        distance: {
                            attackFrom: -1,
                        },
                        ai: {
                            basic: {
                                equipValue: 2,
                                order: 1,
                                useful: 2,
                                value: 1,
                            },
                            result: {
                                target(player, target, card) {
                                    return get.equipResult(player, target, card.name);
                                },
                            },
                        },
                        skills: ['yuanhong1', 'yuanhong2', 'yuanhong3'],
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
                        fullskin: true,
                    },
                    qimen: {
                        fullskin: true,
                        type: 'equip',
                        subtype: 'equip2',
                        skills: ['qimen'],
                        ai: {
                            basic: {
                                equipValue: 7.5,
                                order: 1,
                                useful: 2,
                                value: 1,
                            },
                            result: {
                                target(player, target, card) {
                                    return get.equipResult(player, target, card.name);
                                },
                            },
                        },
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
                    hongduan: '红锻枪',
                    hongduan_info: '当你使用牌造成伤害后,你可以进行判定,若结果为:红色,你回复1点体力;黑色:你摸两张牌',
                    liechudao: '烈淬刀',
                    liechudao_info: '当你使用【杀】对目标角色造成伤害时,你可以弃置一张牌,令此伤害+2.你使用【杀】没有次数上限',
                    tianlei: '天雷刃',
                    tianlei_info: '当你使用或打出一张杀时,你可令一名其他角色进行一次判定:判定结果若为♥️️,你回复两点体力,该角色受到一点雷电伤害,若结果为♦️️,你回复一点体力,该角色受到两点雷电伤害,若结果为♣️️,该角色受到三点雷电伤害,若结果为♠️️,该角色受到四点雷电伤害',
                    shuibo: '水波剑',
                    shuibo_info: '当你使用普通锦囊牌或【杀】时,你可以为此牌增加一个目标.当你失去装备区里的【水波剑】后,你回复满体力',
                    zhangbaz: '金蛇剑',
                    zhangbaz_info: '你可以将两张手牌当【火杀】使用或打出',
                    hundu: '混毒弯匕',
                    hundu_info: '当你使用【杀】指定目标后,你可令其失去X点体力(X为此技能发动过的次数)',
                    shesha: '毒杀',
                    shesha_info: '出牌阶段,对任意一名角色使用,造成伤害时目标流失一点体力,未造成伤害目标失去一点体力上限',
                    ansha: '暗杀',
                    ansha_info: '随机令一名敌方角立即死亡,摸两张牌',
                    xiantian: '先天八卦阵',
                    xiantian_info: '当你需要使用或打出一张【闪】时,你可以进行判定,若判定结果不为♠️️,视为你使用或打出了一张【闪】',
                    jingang: '仁王金刚盾',
                    jingang_info: '黑色【杀】和♥️️【杀】对你无效',
                    zhaoyue: '照月狮子盔',
                    zhaoyue_info: '锁定技,当你受到大于1的伤害时,你防止此伤害;当你失去装备区里的【照月狮子盔】时,你回复1点体力并摸两张牌',
                    tongyou: '桐油百韧甲',
                    tongyou_info: '锁定技,【南蛮入侵】、【万箭齐发】和普【杀】对你无效.当你受到火焰伤害时,此伤害+1.当你即将被横置时,取消之',
                    yuanrong: '精械弩3',
                    yuanrong_info: '锁定技,你于出牌阶段内使用【杀】无次数限制',
                    jingyin: '精银甲',
                    jingyin_info: '你可以将一张手牌当做【闪】使用或打出.锁定技,【精银甲】不会无效',
                    gudingdao: '玄铁重剑',
                    gudingdao_info: '当你使用有伤害的牌指定目标时,若该目标装备区或者手牌区任意一区域没有牌,那么你对其造成的伤害翻倍',
                    yuanhong: '伏龙屠狮刀',
                    yuanhong_info: '锁定技:你使用的【杀】可以额外指定一个目标,且无视防具,造成伤害+1;你每回合可以额外使用一张【杀】',
                    qimen: '奇门八卦',
                    qimen_info: '锁定技,黑色的杀对你无效',
                },
                list: [
                    //牌堆
                    ['spade', 'Q', 'zhangbaz'],
                    ['club', '4', 'shesha'],
                    ['spade', '6', 'shesha'],
                    ['spade', 'Q', 'ansha'],
                    ['spade', '6', 'hundu'],
                    ['diamond', '10', 'shesha'],
                    ['diamond', '8', 'shesha'],
                    ['club', 'A', 'zhaoyue'],
                    ['club', '2', 'tongyou'],
                    ['spade', '2', 'tongyou'],
                    ['spade', '2', 'xiantian'],
                    ['club', '2', 'xiantian'],
                    ['diamond', 'A', 'yuanrong'],
                    ['club', 'A', 'yuanrong'],
                    ['club', '2', 'jingang'],
                    ['club', '2', 'jingyin'],
                    ['spade', '2', 'jingyin'],
                    ['club', '10', 'shuibo'],
                    ['diamond', '10', 'liechudao'],
                    ['heart', '10', 'hongduan'],
                    ['spade', 'A', 'tianlei'],
                    ['spade', '5', 'qimen'],
                    ['spade', '6', 'yuanhong'],
                    ['heart', '9', 'gudingdao'],
                ],
            },
            intro: "<br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>",
            author: "<samp id='零二'><small><strong>零二</strong></small></samp></body><style>#零二{animation:change 10s linear 0s infinite;font-family:xinwei;}@keyframes change{0% {color: #FF0000;}10%{color: #FF7F00;}20%{color: #FFFF00;}30%{color: #00FF00;}40% {color: #00FFFF;}50%{color: #0000FF;}60%{color: #8B00FF;}70%{color: #0000FF;}75%{color: #00FFFF ;}80%{color: #00FF00;}85%{color: #FFFF00 ;}90%{color:  #FF7F00;}100%{color: #FF0000;}}</style>",
            version: '1.3',
        },
    };
});

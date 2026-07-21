import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '日月同辉',
        content(config, pack) {
            //代码技术支持:萌新(转型中)
            //翻译
            lib.translate.rybaiyin_zhibian = '执鞭';
            lib.translate.rybaiyin_rende = '仁德';
            lib.translate.rybaiyin_zhiheng = '制衡';
            lib.translate.rybaiyin_tongye = '制衡';
            lib.translate.rybaiyin_jizhi = '集智';
            lib.translate.rybaiyin_lianpo = '连破';
            lib.translate.rymili_jintao = '进讨';
            lib.translate.rymili_xiaoji = '枭姬';
            //稀有度
            if (lib.rank) {
                var retrieveFromTierMaker = function () {
                    var result = $('.tier.sort').map(function () {
                        var res = $(this).children().map(function () { return $(this).css('background-image').match(/jlsg\w+(?=jpg)/); });
                        return res;
                    });
                    result = result.toArray().map(ss => ss.toArray());
                    var ranks = ['s', 'ap', 'a', 'am', 'bp', 'b', 'bm', 'c', 'd'];
                    var A = {};
                    for (var i = 0; i != result.length; ++i) {
                        A[ranks[i]] = result[i];
                    }
                    return JSON.stringify(A);
                };
                var rank = {
                    rarity: {
                        legend: [
                        ],
                        epic: [
                        ],
                        rare: [
                        ],
                        common: [
                        ],
                        junk: [
                        ],
                    },
                    //出场率
                    s: [
                    ],
                    ap: [
                    ],
                    a: [
                    ],
                    am: [
                    ],
                    bp: [
                    ],
                    b: [
                    ],
                    bm: [
                    ],
                    c: [
                    ],
                    d: [
                    ],
                };
                for (var name of Object.keys(lib.characterPack.riyuecharacter)) {
                    if (!Object.keys(rank.rarity).some(rarity => rank.rarity[rarity].includes(name))) rank.rarity.epic.push(name);
                }
                var addRank = function (rank) {
                    if (!lib.rank) return;
                    for (var i in rank) {
                        if (i == 'rarity') continue;
                        lib.rank[i].addArray(rank[i]);
                    }
                    if (rank.rarity && lib.rank.rarity) {
                        for (var i in rank.rarity) {
                            if (lib.rank.rarity[i] === undefined) {
                                lib.rank.rarity[i] = [];
                            }
                            lib.rank.rarity[i].addArray(rank.rarity[i]);
                        }
                    }
                };
                addRank(rank);
            };
            //同名异构
            lib.characterReplace.caocao.push('ry_caocao');
            lib.characterReplace.caoren.push('ry_caoren');
            lib.characterReplace.guojia.push('ry_guojia');
            lib.characterReplace.simayi.push('ry_simayi');
            lib.characterReplace.xuzhu.push('ry_xuzhu');
            lib.characterReplace.zhangliao.push('ry_zhangliao');
            lib.characterReplace.guanyu.push('ry_guanyu');
            lib.characterReplace.huangzhong.push('ry_huangzhong');
            lib.characterReplace.liubei.push('ry_liubei');
            lib.characterReplace.machao.push('ry_machao');
            lib.characterReplace.zhangfei.push('ry_zhangfei');
            lib.characterReplace.zhaoyun.push('ry_zhaoyun');
            lib.characterReplace.ganning.push('ry_ganning');
            lib.characterReplace.huanggai.push('ry_haunggai');//QQQ
            lib.characterReplace.luxun.push('ry_luxun');
            lib.characterReplace.lvmeng.push('ry_lvmeng');
            lib.characterReplace.sunquan.push('ry_sunquan');
            lib.characterReplace.zhouyu.push('ry_zhouyu');
            lib.characterReplace.dongzhuo.push('ry_dongzhuo');
            lib.characterReplace.gaoshun.push('ry_gaoshun');
            lib.characterReplace.huaxiong.push('ry_huaxiong');
            lib.characterReplace.lvbu.push('ry_lvbu');
            lib.characterReplace.yanwen.push('ry_yanlaing');
            lib.characterReplace.yanwen.push('ry_wenchou');
            //阵亡配音
            lib.skill._playerDieAudio = {
                trigger: { global: 'dieBegin' },
                firstDo: true,
                forced: true,
                content() {
                    game.playAudio('../extension/日月同辉/audio', trigger.player.name);
                },
            };
        },
        precontent() {
            game.import('character', function () {
                const riyuecharacter = {
                    name: 'riyuecharacter',
                    connect: true,
                    character: {
                        ry_liubei: ['male', 'shu', 4, ['ryrende', 'ryqiuxian', 'ryshichou'], ['zhu']],
                        ry_guanyu: ['male', 'shu', 4, ['rywusheng', 'ryyijue'], []],
                        ry_zhangfei: ['male', 'shu', 4, ['rypaoxiao', 'ryxieji'], []],
                        ry_zhaoyun: ['male', 'shu', 4, ['rylongdan', 'ryjizhu'], []],
                        ry_huangzhong: ['male', 'shu', 4, ['ryliegong', 'ryyinyu'], []],
                        ry_machao: ['male', 'shu', 4, ['rytieji', 'ryqiangyong'], []],
                        ry_huaxiong: ['male', 'qun', '5/5/1', ['ryshiyong', 'ryyaowu'], []],
                        ry_lvbu: ['male', 'qun', 4, ['rywushuang', 'ryshenwei'], []],
                        ry_yanliang: ['male', 'qun', 4, ['ryhushe', 'ryshuangxiong'], []],
                        ry_wenchou: ['male', 'qun', 4, ['rylangxing', 'ryshuangxiong'], []],
                        ry_gaoshun: ['male', 'qun', 4, ['ryxianzhen', 'ryjinjiu'], []],
                        ry_dongzhuo: ['male', 'qun', 5, ['ryjiuchi', 'ryroulin', 'rybengtan', 'rylingnve'], ['zhu']],
                        ry_sunquan: ['male', 'wu', 4, ['ryzhiheng', 'ryjiahe'], ['zhu']],
                        ry_zhouyu: ['male', 'wu', 3, ['ryyingzi', 'ryyehuo'], []],
                        ry_ganning: ['male', 'wu', 4, ['ryjieying', 'ryyinling'], []],
                        ry_huanggai: ['male', 'wu', 4, ['rykurou', 'ryzhaxiang'], []],
                        ry_lvmeng: ['male', 'wu', 4, ['rykeji', 'rytanhu'], []],
                        ry_luxun: ['male', 'wu', 3, ['ryqianxun', 'rylianying', 'rycuike'], []],
                        ry_zhangliao: ['male', 'wei', 4, ['rytuxi', 'ryliaolai'], []],
                        ry_xuzhu: ['male', 'wei', 4, ['ryhanzhan', 'ryluoyi'], []],
                        ry_guojia: ['male', 'wei', 3, ['rytiandu', 'ryruliao', 'ryyiji'], []],
                        ry_caoren: ['male', 'wei', 4, ['ryjushou', 'rykuiwei'], []],
                        ry_simayi: ['male', 'wei', '3/4', ['rylanggu', 'ryzhuizun'], []],
                        ry_caocao: ['male', 'wei', 4, ['ryjianxiong', 'ryzhibian', 'ryweiwu'], ['zhu']],
                        ry_caoxing: ['male', 'qun', 4, ['ryjianyong'], []],
                        ry_chenshi: ['male', 'shu', 4, ['ryjiezhong'], []],
                        ry_jiahua: ['male', 'wu', 4, ['rytonghu'], []],
                        ry_zangba: ['male', 'wei', 4, ['ryjudong', 'ryhengjiang'], []],
                        ry_huamulan: ['female', 'shen', 3, ['rymili', 'ryjuntie', 'ryyizhuang'], []],
                        ry_pangtong: ['male', 'shen', 3, ['rymanye', 'ryliance', 'ryfengming'], []],
                    },
                    characterSort: {
                        riyuecharacter: {
                            riyue_wei: ['ry_zhangliao', 'ry_xuzhu', 'ry_guojia', 'ry_caoren', 'ry_simayi', 'ry_caocao'],
                            riyue_shu: ['ry_liubei', 'ry_guanyu', 'ry_zhangfei', 'ry_huangzhong', 'ry_machao', 'ry_zhaoyun'],
                            riyue_wu: ['ry_sunquan', 'ry_zhouyu', 'ry_ganning', 'ry_huanggai', 'ry_lvmeng', 'ry_luxun'],
                            riyue_qun: ['ry_huaxiong', 'ry_lvbu', 'ry_yanliang', 'ry_wenchou', 'ry_gaoshun', 'ry_dongzhuo'],
                            riyue_rimian: ['ry_caoxing', 'ry_chenshi', 'ry_jiahua', 'ry_zangba', 'ry_huamulan', 'ry_pangtong'],
                        },
                    },
                    skill: {
                        ryrende: {
                            group: 'ryrende_qiuxian',
                            audio: 'ext:日月同辉:2',
                            enable: 'phaseUse',
                            filterCard: true,
                            selectCard: [1, Infinity],
                            discard: false,
                            lose: false,
                            delay: false,
                            filterTarget: lib.filter.notMe,
                            check(card) {
                                if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') return 0;
                                if (!ui.selected.cards.length && card.name == 'du') return 20;
                                var player = get.owner(card);
                                if (ui.selected.cards.length >= Math.max(2, player.countCards('h') - player.hp)) return 0;
                                if (player.hp == player.maxHp || player.storage.ryrende < 0 || player.countCards('h') <= 1) {
                                    var players = game.filterPlayer();
                                    for (var i of players) {
                                        if (i.hasSkill('haoshi') &&
                                            !i.isTurnedOver() &&
                                            !i.hasJudge('lebu') &&
                                            get.attitude(player, i) >= 3 &&
                                            get.attitude(i, player) >= 3) {
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
                                'step 0'
                                event.hpnum = player.hp;
                                var evt = _status.event.getParent('phaseUse');
                                if (evt && evt.name == 'phaseUse' && !evt.ryrende) {
                                    var next = game.createEvent('ryrende_clear');
                                    _status.event.next.remove(next);
                                    evt.after.push(next);
                                    evt.ryrende = true;
                                    next.player = player;
                                    next.setContent(function () {
                                        delete player.storage.ryrende;
                                        delete player.storage.ryrendex;
                                    });
                                }
                                target.gain(cards, player, 'giveAuto');
                                if (typeof player.storage.ryrende != 'number') player.storage.ryrende = 0;
                                if (typeof player.storage.ryrendex != 'number') player.storage.ryrendex = 0;
                                if (player.storage.ryrende >= 0) {
                                    player.storage.ryrende += cards.length;
                                    if (player.storage.ryrende >= 2 * (1 + player.storage.ryrendex)) {
                                        player.storage.ryrendex++;
                                        var list = [];
                                        if (lib.filter.cardUsable({ name: 'sha' }, player, event.getParent('chooseToUse')) && game.hasPlayer(function (current) {
                                            return player.canUse('sha', current);
                                        })) list.push(['基本', '', 'sha']);
                                        for (var i of lib.inpile_nature) {
                                            if (lib.filter.cardUsable({ name: 'sha', nature: i }, player, event.getParent('chooseToUse')) && game.hasPlayer(function (current) {
                                                return player.canUse({ name: 'sha', nature: i }, current);
                                            })) list.push(['基本', '', 'sha', i]);
                                        }
                                        if (lib.filter.cardUsable({ name: 'tao' }, player, event.getParent('chooseToUse')) && game.hasPlayer(function (current) {
                                            return player.canUse('tao', current);
                                        })) list.push(['基本', '', 'tao']);
                                        if (lib.filter.cardUsable({ name: 'jiu' }, player, event.getParent('chooseToUse')) && game.hasPlayer(function (current) {
                                            return player.canUse('jiu', current);
                                        })) list.push(['基本', '', 'jiu']);
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
                                                    if (game.hasPlayer(function (current) {
                                                        return player.canUse(card, current) && get.effect(current, card, player, player) > 0
                                                    })) {
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
                                        }
                                        else event.finish();
                                    }
                                    else event.finish();
                                }
                                else event.finish();
                                'step 1'
                                if (result.links?.length) {
                                    var card = { name: result.links[0][2], nature: result.links[0][3] };
                                    player.chooseUseTarget(card, true);
                                }
                                'step 2'
                                if (player.hp > event.hpnum) player.addMark('ryrende_qiuxian', 1);
                            },
                            ai: {
                                fireAttack: true,
                                order(skill, player) {
                                    if (player.hp < player.maxHp && player.storage.ryrende < 2 && player.countCards('h') > 1) return 10;
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
                                        if (player.hp == player.maxHp || player.storage.ryrende < 0 || player.countCards('h') <= 1) {
                                            if (nh >= np - 1 && np <= player.hp && !target.hasSkill('haoshi')) return 0;
                                        }
                                        return Math.max(1, 5 - nh);
                                    },
                                },
                                effect: {
                                    target(card, player, target) {
                                        if (player == target && get.type(card) == 'equip') {
                                            if (player.countCards('e', { subtype: get.subtype(card) })) {
                                                if (game.hasPlayer(function (current) {
                                                    return current != player && get.attitude(player, current) > 0;
                                                })) return 0;
                                            }
                                        }
                                    },
                                },
                                threaten: 0.8,
                            },
                            subSkill: {
                                qiuxian: {
                                    marktext: '贤',
                                    intro: { content: 'mark', name: '贤' },
                                },
                            },
                        },
                        ryqiuxian: {
                            init(player) {
                                if (!player.storage.ryqiuxian) player.storage.ryqiuxian = [1, 0, 0];
                                if (!player.storage.ryqiuxian_zhinang) player.storage.ryqiuxian_zhinang = [];
                            },
                            group: 'ryqiuxian_zhinang',
                            mark: true,
                            zhuanhuanji: true,
                            marktext: '☯',
                            intro: {
                                content(storage, player, skill) {
                                    var str = '出牌阶段限一次,你可以弃置一枚<贤>,', num = undefined;
                                    for (var i = 0; i < 2; i++) {
                                        if (storage[i] == 1) num = i;
                                    }
                                    str += [
                                        '随机从牌堆获得一张非延时类锦囊',
                                        '于此回合结束后进行一个额外的回合',
                                        '随机获得一个描述里带有<锦囊>的技能直至此下次造成伤害或你失去求贤'
                                    ][num];
                                    str += '.';
                                    return str;
                                },
                            },
                            audio: 'ext:日月同辉:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countMark('ryrende_qiuxian') > 0;
                            },
                            content() {
                                'step 0'
                                player.removeMark('ryrende_qiuxian', 1);
                                var num = undefined;
                                for (var i = 0; i < 3; i++) {
                                    if (player.storage.ryqiuxian[i] == 1) num = i;
                                }
                                if (num != undefined) {
                                    event.num = num;
                                    switch (num) {
                                        case 0:
                                            var card = get.cardPile(function (card) {
                                                return get.type(card) == 'trick';
                                            });
                                            if (card) player.gain(card, 'gain2', 'log');
                                            break;
                                        case 1:
                                            player.addSkill('ryqiuxian_phase');
                                            break;
                                        case 2:
                                            var list, skills = [];
                                            if (get.mode() == 'guozhan') {
                                                list = [];
                                                for (var i in lib.characterPack.mode_guozhan) list.push(i);
                                            }
                                            else if (_status.connectMode) list = get.charactersOL();
                                            else {
                                                list = [];
                                                for (var i in lib.character) {
                                                    if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) continue;
                                                    list.push(i);
                                                }
                                            }
                                            for (var i of list) {
                                                if (i.indexOf('gz_jun') == 0) continue;
                                                for (var j of lib.character[i][3]) {
                                                    var skill = lib.skill[j];
                                                    if (!skill || skill.zhuSkill || skill.dutySkill) continue;
                                                    if (skill.init || skill.ai && (skill.ai.combo || skill.ai.notemp || skill.ai.neg)) continue;
                                                    var info = lib.translate[j + '_info'];
                                                    if (info && info.includes('锦囊')) skills.add(j);
                                                }
                                            }
                                            var rySkill = skills.randomGet();
                                            if (!player.storage.ryqiuxian_zhinang) player.storage.ryqiuxian_zhinang = [];
                                            player.storage.ryqiuxian_zhinang.push(rySkill);
                                            player.addSkillLog(rySkill);
                                            break;
                                    }
                                }
                                else event.finish();
                                'step 1'
                                if (num != 2) {
                                    player.storage.ryqiuxian[num] = 0;
                                    player.storage.ryqiuxian[num + 1] = 1;
                                }
                                else {
                                    player.storage.ryqiuxian[2] = 0;
                                    player.storage.ryqiuxian[0] = 1;
                                }
                            },
                            ai: {
                                order: 10,
                                result: { player: 1 },
                            },
                            subSkill: {
                                phase: {
                                    trigger: { player: 'phaseAfter' },
                                    forced: true,
                                    content() {
                                        player.removeSkill('ryqiuxian_phase');
                                        player.phase('nodelay');
                                    },
                                },
                                zhinang: {
                                    trigger: { source: 'damageSource' },
                                    forced: true,
                                    content() {
                                        for (var i of player.storage.ryqiuxian_zhinang) {
                                            player.removeSkill(i);
                                            player.storage.ryqiuxian_zhinang.remove(i);
                                        }
                                    },
                                },
                            },
                        },
                        ryshichou: {
                            derivation: ['nzry_longnu', 'nzry_jieying'],
                            zhuSkill: true,
                            limited: true,
                            audio: 'ext:日月同辉:2',
                            trigger: { player: 'phaseZhunbeiBegin' },
                            filter(event, player) {
                                return player.hasZhuSkill('ryshichou') && ((!game.hasPlayer(function (current) {
                                    return current.group == 'shu' && !current.isDamaged();
                                }) && game.countPlayer(function (currentx) {
                                    return currentx.group == 'shu' && currentx != player;
                                }) > 0) || game.dead.filter(function (currenty) {
                                    return currenty.group == 'shu';
                                }).length);
                            },
                            content() {
                                'step 0'
                                player.awakenSkill('ryshichou');
                                if (!player.storage.ryqiuxian_zhinang) player.storage.ryqiuxian_zhinang = [];
                                if (player.storage.ryqiuxian_zhinang.length) {
                                    for (var i of player.storage.ryqiuxian_zhinang) {
                                        player.removeSkill(i);
                                        player.storage.ryqiuxian_zhinang.remove(i);
                                    }
                                }
                                'step 1'
                                event.cards = [];
                                player.loseMaxHp();
                                player.recover();
                                player.removeSkill('ryrende');
                                player.removeSkill('ryqiuxian');
                                player.addSkillLog('nzry_longnu');
                                player.addSkillLog('nzry_jieying');
                                'step 2'
                                var card = get.cardPile(function (card) {
                                    return !cards.includes(card) && card.name == 'sha' && get.nature(card) == 'fire';
                                });
                                if (card) {
                                    cards.push(card);
                                    if (cards.length < 2) event.redo();
                                }
                                'step 3'
                                if (cards.length) player.gain(cards, 'gain2', 'log');
                                player.addTempSkill('ryshichou_shadist');
                            },
                            subSkill: {
                                shadist: {
                                    mod: {
                                        cardUsable(card, player, num) {
                                            if (card.name == 'sha') return Infinity;
                                        },
                                        targetInRange(card) {
                                            if (card.name == 'sha') return true;
                                        },
                                    },
                                },
                            },
                        },
                        rywusheng: {
                            group: ['rywusheng_wusheng', 'rywusheng_damage'],
                            audio: 'ext:日月同辉:2',
                            trigger: { player: 'phaseZhunbeiBegin' },
                            forced: true,
                            content() {
                                'step 0'
                                if (player.countCards('j') > 0) player.discardPlayerCard(player, 'j', '是否弃置判定区中的一张牌,或者获得牌堆中的一张红色牌');
                                else event.goto(2);
                                'step 1'
                                if (result.bool) event.finish();
                                'step 2'
                                var card = get.cardPile2(function (card) {
                                    return get.color(card, false) == 'red';
                                });
                                if (card) player.gain(card, 'gain2');
                            },
                            subSkill: {
                                wusheng: {
                                    audio: 'rywusheng',
                                    inherit: 'wusheng',
                                },
                                damage: {
                                    audio: 'rywusheng',
                                    trigger: { source: 'damageBegin1' },
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha' && event.card.suit == 'heart' && event.notLink();
                                    },
                                    forced: true,
                                    content() {
                                        trigger.num++;
                                    },
                                },
                            },
                        },
                        ryyijue: {
                            derivation: 'mashu',
                            audio: 'ext:日月同辉:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget: lib.filter.notMe,
                            content() {
                                'step 0'
                                player.chooseControl('过关斩将', '千里单骑').set('prompt', '谋弈:请选择你的进攻策略').set('ai', function () {
                                    return ['过关斩将', '千里单骑'].randomGet();
                                });
                                'step 1'
                                event.res = result.control;
                                target.chooseControl('过关斩将', '千里单骑').set('prompt', '谋弈:请选择你的的防守策略').set('ai', function () {
                                    return ['过关斩将', '千里单骑'].randomGet();
                                });
                                'step 2'
                                var str;
                                player.popup(event.res);
                                target.popup(result.control);
                                event.suit = result.control;
                                game.log(player, '谋弈', event.res == event.sult ? '#y失败' : '#g成功');
                                if (event.res != event.sult) str = get.translation(player) + '谋弈成功';
                                else str = get.translation(target) + '谋弈成功';
                                game.broadcastAll(function (str) {
                                    var dialog = ui.create.dialog(str);
                                    dialog.classList.add('center');
                                    setTimeout(function () {
                                        dialog.close();
                                    }, 1000);
                                }, str);
                                if (event.res == event.sult) event.finish();
                                'step 3'
                                if (event.res == '过关斩将') player.addTempSkill('ryyijue_guoguanzhanjiang');
                                else {
                                    player.addTempSkill('mashu');
                                    for (var i of game.players) {
                                        if (i != player) {
                                            player.line(i, 'fire');
                                            i.addTempSkill('fengyin');
                                        }
                                    }
                                }
                            },
                            ai: {
                                order: 10,
                                result: {
                                    target(player, target) {
                                        return get.attitude(player, target) + 20;
                                    },
                                },
                            },
                            subSkill: {
                                guoguanzhanjiang: {
                                    charlotte: true,
                                    mod: {
                                        cardUsable(card, player, num) {
                                            if (card.name == 'sha') return num += player.countMark('ryyijue_guoguanzhanjiang');
                                        },
                                    },
                                    trigger: { source: 'damageSource' },
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha';
                                    },
                                    forced: true,
                                    content() {
                                        player.draw();
                                        player.addMark('ryyijue_guoguanzhanjiang', 1, false);
                                    },
                                },
                            },
                        },
                        rypaoxiao: {
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return Infinity;
                                },
                                targetInRange(card, player) {
                                    if (card.name == 'sha') return true;
                                },
                            },
                            group: 'rypaoxiao_use',
                            firstDo: true,
                            audio: 'ext:日月同辉:2',
                            trigger: { player: 'useCard1' },
                            forced: true,
                            filter(event, player) {
                                return player.countUsed('sha', true) > 1 && player.isPhaseUsing() && !event.audioed && event.card.name == 'sha';
                            },
                            content() {
                                trigger.audioed = true;
                            },
                            subSkill: {
                                use: {
                                    enable: 'phaseUse',
                                    usable: 1,
                                    filter(event, player) {
                                        return player.countCards('he', function (card) {
                                            return get.type(card) != 'basic';
                                        }) > 0;
                                    },
                                    filterCard(card, player, target) {
                                        return get.type(card) != 'basic';
                                    },
                                    position: 'he',
                                    check(card) {
                                        return 7 - get.value(card);
                                    },
                                    content() {
                                        player.addTempSkill('rypaoxiao_cancel', { player: 'phaseBegin' });
                                    },
                                    ai: {
                                        order: 10,
                                        result: { player: 1 },
                                    }
                                },
                                cancel: {
                                    audio: 'rypaoxiao',
                                    trigger: { global: 'useCard' },
                                    filter(event, player) {
                                        if (event.card.name != 'shan') return false;
                                        if (event.cards.length == 1 && event.card.number >= (event.respondTo[1].number || 0)) return false;
                                        return true;
                                    },
                                    prompt: '令该角色的【闪】无效',
                                    check(event, player) {
                                        return get.attitude(player, event.player) < 0;
                                    },
                                    logTarget: 'player',
                                    content() {
                                        trigger.all_excluded = true;
                                    },
                                },
                            },
                        },
                        ryxieji: {
                            init(player) {
                                if (!player.storage.ryxieji) player.storage.ryxieji = [];
                            },
                            intro: {
                                content(storage) {
                                    if (!storage.length) return '尚未发动';
                                    var str = get.translation(storage);
                                    return `已与${str}组成<日月协力>搭档`;
                                },
                            },
                            mark: true,
                            audio: 'ext:日月同辉:3',
                            group: 'ryxieji_gain',
                            trigger: { player: 'phaseZhunbeiBegin' },
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current != player && !player.storage.ryxieji.includes(current);
                                });
                            },
                            forced: true,
                            content() {
                                'step 0'
                                player.chooseTarget(get.prompt('ryxieji'), '与一名其他角色进行<日月协力>', function (card, player, target) {
                                    return target != player && !player.storage.ryxieji.includes(target);
                                }).set('ai', function (target) {
                                    var target = _status.event.player;
                                    return get.attitude(player, target) + 20;
                                });
                                'step 1'
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    player.storage.ryxieji.push(target);
                                    player.markSkill('ryxieji');
                                    for (var i = 1; i < 3; i++) {
                                        player.addSkill('ryxieji_mark' + i);
                                        target.addSkill('ryxieji_mark' + i);
                                    }
                                }
                            },
                            subSkill: {
                                gain: {
                                    audio: 'ryxieji',
                                    trigger: { global: 'phaseEnd' },
                                    filter(event, player) {
                                        return player.storage.ryxieji.includes(event.player);
                                    },
                                    forced: true,
                                    content() {
                                        var list = [], target = trigger.player, cards = [];
                                        player.storage.ryxieji.remove(target);
                                        player.markSkill('ryxieji');
                                        if ((player.countMark('ryxieji_mark1') + target.countMark('ryxieji_mark1')) >= 4) {
                                            list.push('sha');
                                            list.push('sha');
                                        }
                                        if ((player.countMark('ryxieji_mark2') + target.countMark('ryxieji_mark2')) >= 4) {
                                            list.push('jiu');
                                            list.push('sha');
                                        }
                                        if ((player.countMark('ryxieji_mark3') + target.countMark('ryxieji_mark3')) >= 4) {
                                            list.push('zhangba');
                                            list.push('dawan');
                                        }
                                        if (list.length) {
                                            player.popup('协力成功', 'wood');
                                            game.log(player, '协力成功');
                                            for (var name of list) {
                                                var card = get.cardPile(function (card) {
                                                    return card.name == name;
                                                });
                                                if (card) cards.push(card);
                                            }
                                            if (cards.length) player.gain(cards, 'gain2', 'log');
                                            else player.log(get.cnNumber(list.length) + '张牌都没牌可得了吗？？？');
                                        }
                                        else {
                                            player.popup('协力失败', 'fire');
                                            game.log(player, '协力失败');
                                        }
                                        for (var i = 1; i < 3; i++) {
                                            if (player.storage.ryxieji.length <= 0) player.removeSkill('ryxieji_mark' + i);
                                            target.removeSkill('ryxieji_mark' + i);
                                        }
                                    },
                                },
                                mark1: {
                                    intro: { content: '<li>条件:两人使用【杀】和【闪】之和不小于4张<br><li>你当前已使用#张【杀】和【闪】' },
                                    charlotte: true,
                                    mark: true,
                                    trigger: { player: 'useCard' },
                                    firstDo: true,
                                    _priority: 999,
                                    filter(event, player) {
                                        return ['sha', 'shan'].includes(event.card.name);
                                    },
                                    content() {
                                        player.addMark('ryxieji_mark1', 1, false);
                                    },
                                },
                                mark2: {
                                    intro: { content: '<li>条件:两人造成的伤害之和不小于4点<br><li>你当前已造成#点伤害' },
                                    charlotte: true,
                                    mark: true,
                                    trigger: { source: 'damageSource' },
                                    firstDo: true,
                                    _priority: 999,
                                    content() {
                                        player.addMark('ryxieji_mark2', trigger.num, false);
                                    },
                                },
                                mark3: {
                                    intro: { content: '<li>条件:两人弃置的牌总共不小于4张<br><li>你当前已弃置#张牌' },
                                    charlotte: true,
                                    mark: true,
                                    trigger: { player: 'useCard' },
                                    firstDo: true,
                                    _priority: 999,
                                    filter(event, player) {
                                        return event.type == 'discard';
                                    },
                                    content() {
                                        player.addMark('ryxieji_mark3', trigger.cards2.length, false);
                                    },
                                },
                            },
                        },
                        rylongdan: {
                            intro: { content: '已通过【龙胆】获得了#张牌' },
                            audio: 'ext:日月同辉:2',
                            enable: ['chooseToUse', 'chooseToRespond'],
                            hiddenCard(player, name) {
                                var numx = player.countCards('he'), numy = player.countCards('he', { type: 'basic' });
                                if (!player.storage.ryjizhu && numy <= 0) return false;
                                if (player.storage.ryjizhu && numy >= numx) return false;
                                if (!['sha', 'shan'].includes(name)) return false;
                                if (player.storage.ryjizhu && !['tao', 'wuxie'].includes(name)) return false;
                                return true;
                            },
                            filter(event, player) {
                                if (event.filterCard && event.filterCard({ name: 'sha' }, player, event) ||
                                    event.filterCard({ name: 'shan' }, player, event) ||
                                    (player.storage.ryjizhu && event.filterCard({ name: 'tao' }, player, event)) ||
                                    (player.storage.ryjizhu && event.filterCard({ name: 'wuxie' }, player, event))) return true;
                                return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    if (event.filterCard && event.filterCard({ name: 'sha' }, player, event)) {
                                        list.push(['基本', '', 'sha']);
                                        for (var j of lib.inpile_nature) list.push(['基本', '', 'sha', j]);
                                    }
                                    if (event.filterCard && event.filterCard({ name: 'shan' }, player, event)) {
                                        list.push(['基本', '', 'shan']);
                                    }
                                    if (player.storage.ryjizhu && event.filterCard({ name: 'tao' }, player, event)) {
                                        list.push(['基本', '', 'tao']);
                                    }
                                    if (player.storage.ryjizhu && event.filterCard({ name: 'wuxie' }, player, event)) {
                                        list.push(['锦囊', '', 'wuxie']);
                                    }
                                    return ui.create.dialog('龙胆', [list, 'vcard'], 'hidden');
                                },
                                check(button) {
                                    var player = _status.event.player;
                                    var card = { name: button.link[2], nature: button.link[3] };
                                    if (_status.event.parent.type != 'phase' || game.hasPlayer(function (current) {
                                        return player.canUse(card, current) && get.effect(current, card, player, player) > 0;
                                    })) {
                                        switch (button.link[2]) {
                                            case 'tao': case 'shan': return 5;
                                            case 'jiu': return 3;
                                            case 'sha':
                                                if (button.link[3] == 'fire') return 2.95;
                                                else if (button.link[3] == 'thunder' || button.link[3] == 'ice') return 2.92;
                                                else return 2.9;
                                        }
                                    }
                                    return 0;
                                },
                                backup(links, player) {
                                    return {
                                        filterCard(card, player, target) {
                                            if (player.storage.ryjizhu) return get.type(card) != 'basic';
                                            return get.type(card) == 'basic';
                                        },
                                        check(card) {
                                            return 7 - get.value(card);
                                        },
                                        viewAs: { name: links[0][2], nature: links[0][3] },
                                        popname: true,
                                        position: 'hes',
                                        precontent() {
                                            player.addMark('rylongdan', 1, false);
                                            if (_status.currentPhase == player) player.draw();
                                            else {
                                                if (_status.currentPhase) {//QQQ
                                                    player.line(_status.currentPhase);
                                                    player.gainPlayerCard(_status.currentPhase, 'h', true);
                                                }
                                            }
                                        },
                                    }
                                },
                                prompt(links, player) {
                                    return '将一张' + (player.storage.ryjizhu ? '非' : '') + '基本牌当做' + get.translation(links[0][3] || '') + get.translation(links[0][2]) + '使用或打出';
                                },
                            },
                            ai: {
                                order: 7,
                                result: {
                                    player(player) {
                                        if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                        return 1;
                                    },
                                },
                                save: true,
                                respondSha: true,
                                respondShan: true,
                                fireAttack: true,
                                skillTagFilter(player, tag) {
                                    var numx = player.countCards('he'), numy = player.countCards('he', { type: 'basic' });
                                    if (!player.storage.ryjizhu && numy <= 0) return false;
                                    if (player.storage.ryjizhu && numy >= numx) return false;
                                    if (tag == 'save' && !player.storage.ryjizhu) return false;
                                    return true;
                                },
                            },
                        },
                        ryjizhu: {
                            audio: 'ext:日月同辉:3',
                            trigger: { player: 'gainAfter' },
                            derivation: 'ryjuejing',
                            forced: true,
                            juexingji: true,
                            filter(event, player) {
                                return player.countMark('rylongdan') >= 6;
                            },
                            content() {
                                'step 0'
                                player.awakenSkill('ryjizhu');
                                player.loseMaxHp(2);
                                player.chooseDrawRecover(2, true);
                                'step 1'
                                player.addSkillLog('ryjuejing');
                                player.storage.ryjizhu = true;
                            },
                        },
                        ryjuejing: {
                            group: 'ryjuejing_target',
                            audio: 'ext:日月同辉:2',
                            trigger: { global: 'phaseJieshuBegin' },
                            filter(event, player) {
                                return player.hasSkill('ryjuejing_used') || event.player.inRange(player) || event.player == player;
                            },
                            logTarget: 'player',
                            forced: true,
                            content() {
                                player.draw(2);
                                if (player.hp != 1) player.loseHp();
                            },
                            subSkill: {
                                used: { charlotte: true },
                                target: {
                                    charlotte: true,
                                    trigger: { target: 'useCardToTargeted' },
                                    filter(event, player) {
                                        return event.player == _status.currentPhase;
                                    },
                                    forced: true,
                                    _priority: 5,
                                    content() {
                                        player.addTempSkill('ryjuejing_used');
                                    },
                                },
                            },
                        },
                        ryliegong: {
                            init(player) {
                                player.storage.ryliegong = [0, 0, 0];
                            },
                            mod: {
                                targetInRange(card, player, target) {
                                    if (card.name == 'sha' && target.hasSkill('ryyinyu2')) return true;
                                },
                            },
                            shaRelated: true,
                            audio: 'ext:日月同辉:2',
                            trigger: { player: 'useCardToPlayered' },
                            filter(event, player) {
                                if (event.card.name != 'sha') return false;
                                var bool = false, st = player.storage.ryliegong;
                                if (event.target.hasSkill('ryyinyu2') && (st[0] == 0 || st[1] == 0 || st[2] == 0)) bool = true;
                                if ((event.card.number >= player.hp + event.target.hp) && st[0] == 0) bool = true;
                                if (get.distance(player, event.target) > 1 && st[1] == 0) bool = true;
                                if (!game.hasPlayer(function (current) {
                                    return current != player && !player.inRange(current);
                                }) && st[2] == 0) bool = true;
                                return bool && event.cards.length == 1;
                            },
                            forced: true,
                            logTarget: 'target',
                            content() {
                                'step 0'
                                var bool = false, bool1 = false, bool2 = false, bool3 = false, st = player.storage.ryliegong;
                                if (trigger.target.hasSkill('ryyinyu2') && (st[0] == 0 || st[1] == 0 || st[2] == 0)) bool = true;
                                if ((trigger.card.number >= player.hp + trigger.target.hp) && st[0] == 0) bool1 = true;
                                if (get.distance(player, trigger.target) > 1 && st[1] == 0) bool2 = true;
                                if (!game.hasPlayer(function (current) {
                                    return current != player && !player.inRange(current);
                                }) && st[2] == 0) bool3 = true;
                                if ((bool || bool1) && st[0] == 0) {
                                    game.log(player, '触发了', '#g〖烈弓〗', '的第一项');
                                    trigger.parent.directHit.push(trigger.target);
                                }
                                if ((bool || bool2) && st[1] == 0) {
                                    game.log(player, '触发了', '#g〖烈弓〗', '的第二项');
                                    player.discardPlayerCard(trigger.target, 'he', true);
                                    player.draw();
                                }
                                if ((bool || bool3) && st[2] == 0) {
                                    game.log(player, '触发了', '#g〖烈弓〗', '的第三项');
                                    var id = trigger.target.playerid;
                                    var map = trigger.parent.customArgs;
                                    if (!map[id]) map[id] = {};
                                    if (typeof map[id].extraDamage != 'number') map[id].extraDamage = 0;
                                    map[id].extraDamage++;
                                }
                                'step 1'
                                if (!trigger.target.hasSkill('ryyinyu2')) event.finish();
                                else {
                                    var list = [];
                                    for (var i = 0; i < 3; i++) {
                                        if (player.storage.ryliegong[i] == 0) list.push('选项' + (i + 1 == 2 ? '二' : get.cnNumber(i + 1)));
                                    }
                                    if (list.length) player.chooseControl(list).set('prompt', '烈弓:选择删除其中一项效果').set('ai', function () {
                                        return list.randomGet();
                                    });
                                    else event.finish();
                                }
                                'step 2'
                                var st = player.storage.ryliegong;
                                switch (result.control) {
                                    case '选项一':
                                        st[0] = 1;
                                        game.log(player, '移除了', '#g〖烈弓〗', '的第一项');
                                        break;
                                    case '选项二':
                                        st[1] = 1;
                                        game.log(player, '移除了', '#g〖烈弓〗', '的第二项');
                                        break;
                                    case '选项三':
                                        st[2] = 1;
                                        game.log(player, '移除了', '#g〖烈弓〗', '的第三项');
                                        break;
                                }
                            },
                            ai: {
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    if (arg && arg.card.name != 'sha') return false;
                                    return (arg.card.number >= player.hp + arg.target.hp) || arg.target.hasSkill('ryyinyu2');
                                },
                            },
                        },
                        ryyinyu: {
                            audio: 'ext:日月同辉:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current.hp != 2;
                                }) && player.countCards('he', function (card) {
                                    return get.subtype(card) == 'equip1';
                                }) > 0;
                            },
                            filterCard(card, player, target) {
                                return get.subtype(card) == 'equip1';
                            },
                            position: 'he',
                            filterTarget(card, player, target) {
                                return target.hp != 2;
                            },
                            mark: true,
                            limited: true,
                            content() {
                                player.awakenSkill('ryyinyu');
                                target.hp = 2;
                                target.update();
                                target.addTempSkill('ryyinyu2');
                            },
                            ai: {
                                order: 7,
                                result: {
                                    target(player, target) {
                                        var att = get.attitude(player, target);
                                        if (att > 0 && target.hp <= 0) return 1;
                                        if (att < 0 && target.hp > 3) return -target.hp;
                                        return 0;
                                    },
                                },
                            },
                        },
                        ryyinyu2: {
                            charlotte: true,
                            mark: true,
                            intro: { content: '待宰羔羊,还敢反抗？!' },
                            ai: { threaten: 20 },
                        },
                        rytieji: {
                            shaRelated: true,
                            audio: 'ext:日月同辉:2',
                            trigger: { player: 'useCardToPlayered' },
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            logTarget: 'target',
                            preHidden: true,
                            content() {
                                'step 0'
                                player.judge();
                                'step 1'
                                if (result.color == 'red') {
                                    trigger.parent.directHit.add(trigger.target);
                                    trigger.target.addSkill('rytieji_fengyin');
                                }
                                else player.addTempSkill('rytieji_miss', { player: 'useCardAfter' });
                            },
                            ai: {
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    if (get.attitude(player, arg.target) > 0 || arg.card.name != 'sha' || !ui.cardPile.firstChild || get.color(ui.cardPile.firstChild, player) != 'red') return false;
                                },
                            },
                            subSkill: {
                                miss: {
                                    charlotte: true,
                                    trigger: { player: 'shaMiss' },
                                    forced: true,
                                    content() {
                                        player.changeHujia(1);
                                    },
                                },
                                fengyin: {
                                    charlotte: true,
                                    init(player, skill) {
                                        player.addSkillBlocker(skill);
                                    },
                                    onremove(player, skill) {
                                        player.removeSkillBlocker(skill);
                                    },
                                    skillBlocker(skill, player) {
                                        return !lib.skill[skill].charlotte;
                                    },
                                    trigger: {
                                        player: ['damage', 'damageCancelled', 'damageZero'],
                                        target: ['shaMiss', 'useCardToExcluded'],
                                    },
                                    forced: true,
                                    _priority: 7,
                                    content() {
                                        player.removeSkill('rytieji_fengyin');
                                    },
                                },
                            },
                        },
                        ryqiangyong: {
                            mod: {
                                globalFrom(from, to) {
                                    if (to.isDamaged()) return -Infinity;
                                },
                            },
                            init(player) {
                                if (!player.storage.ryqiangyong) player.storage.ryqiangyong = [];
                            },
                            group: 'ryqiangyong_mark',
                            audio: 'ext:日月同辉:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return game.players.length > 2 && player.hujia > 0 && game.hasPlayer(function (current) {
                                    return player.storage.ryqiangyong.includes(current);
                                });
                            },
                            filterTarget(card, player, target) {
                                return player.storage.ryqiangyong.includes(target);
                            },
                            content() {
                                'step 0'
                                game.ryqiangyong = target;
                                var targetx = target;
                                event.num = 0;
                                player.chooseTarget(`请选择至多${get.cnNumber(Math.min(player.hujia, game.players.length - 2))}名其他角色执行后续效果`, [1, Math.min(player.hujia, game.players.length - 2)], true, function (card, player, target) {
                                    return target != player && target != targetx;
                                }).set('ai', function (target) {
                                    var player = _status.event.player;
                                    return get.attitude(player, target) + 20;
                                });
                                'step 1'
                                player.line(result.targets);
                                player.changeHujia(-result.targets.length);
                                event.targets = result.targets.sortBySeat();
                                'step 2'
                                var next = game.createEvent('ryqiangyong_jiedao', false);
                                next.player = player;
                                next.target = event.targets[num];
                                next.setContent(lib.skill.ryqiangyong.contentx);
                                if (event.num + 1 < event.targets.length) {
                                    event.num++;
                                    event.redo();
                                }
                            },
                            ai: {
                                order: 7,
                                result: { target: -1 },
                            },
                            contentx() {
                                'step 0'
                                target.chooseToUse({ name: 'sha' }, `羌勇:对${get.translation(game.ryqiangyong)}使用一张【杀】,或令${get.translation(player)}摸一张牌`).set('targetRequired', true).set('complexSelect', true).set('filterTarget', function (card, player, target) {
                                    if (target != game.ryqiangyong && !ui.selected.targets.includes(game.ryqiangyong)) return false;
                                    return lib.filter.filterTarget.apply(this, arguments);
                                }).set('addCount', false);
                                'step 1'
                                if (!result.bool) {
                                    target.line(player);
                                    player.draw();
                                }
                            },
                            subSkill: {
                                mark: {
                                    charlotte: true,
                                    trigger: { player: 'damage' },
                                    filter(event, player) {
                                        return get.itemtype(event.source) == 'player';
                                    },
                                    forced: true,
                                    content() {
                                        player.storage.ryqiangyong.push(trigger.source);
                                    },
                                },
                            },
                        },
                        ryshiyong: {
                            audio: 'ext:日月同辉:2',
                            trigger: { player: 'damageBegin3' },
                            filter(event, player) {
                                if (event.card) {
                                    if (get.color(event.card) == 'nocolor') return false;
                                    return true;
                                }
                                return false;
                            },
                            forced: true,
                            logTarget: 'source',
                            content() {
                                if (get.color(trigger.card) == 'red') {
                                    trigger.source.draw();
                                    player.chooseToDiscard('he', true);
                                }
                                else {
                                    if (get.itemtype(trigger.cards) == 'cards' && get.position(trigger.cards[0], true) == 'o') player.gain(trigger.cards, 'gain2', 'log');
                                    player.draw('nodelay');
                                }
                            },
                        },
                        ryyaowu: {
                            shaRelated: true,
                            audio: 'ext:日月同辉:2',
                            trigger: { player: 'useCardToTargeted' },
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            filter(event, player) {
                                return ['sha', 'juedou'].includes(event.card.name) && event.targets.length == 1 && player.countCards('h') > 0 && event.target.countCards('h') > 0;
                            },
                            logTarget: 'target',
                            content() {
                                'step 0'
                                var target = trigger.target;
                                event.target = target;
                                event.list1 = [];
                                event.list2 = [];
                                event.num = 0;
                                'step 1'
                                player.chooseCard('h', '耀武:请暗置一张牌', true, function (card) {
                                    return !event.list1.includes(card);
                                });
                                'step 2'
                                event.list1.push(result.cards[0]);
                                target.chooseCard('h', '耀武:请暗置一张牌', true, function (card) {
                                    return !event.list2.includes(card);
                                });
                                'step 3'
                                event.list2.push(result.cards[0]);
                                game.broadcastAll(function (player) {
                                    var cardx = ui.create.card();
                                    cardx.classList.add('infohidden');
                                    cardx.classList.add('infoflip');
                                    player.$throw(cardx, 1000, 'nobroadcast');
                                }, player);
                                game.broadcastAll(function (player) {
                                    var cardx = ui.create.card();
                                    cardx.classList.add('infohidden');
                                    cardx.classList.add('infoflip');
                                    player.$throw(cardx, 1000, 'nobroadcast');
                                }, target);
                                'step 4'
                                event.num++;
                                var num1 = player.countCards('h') - event.list1.length, num2 = target.countCards('h') - event.list2.length;
                                if (num1 > 0 && num2 > 0) event.goto(1);
                                'step 5'
                                var num1 = 0, num2 = 0;
                                for (var i = 0; i < event.num; i++) {
                                    var cards = [];
                                    cards.push(event.list1[i]);
                                    cards.push(event.list2[i]);
                                    player.showCards(cards, get.translation(player) + `与${get.translation(target)}第` + (i + 1 == 2 ? '二' : get.cnNumber(i + 1)) + '轮展示的牌');
                                    if (event.list1[i].number > event.list2[i].number) num1++;
                                    if (event.list1[i].number < event.list2[i].number) num2++;
                                }
                                if (num1 > 0) {
                                    var id = trigger.target.playerid;
                                    var map = trigger.parent.customArgs;
                                    if (!map[id]) map[id] = {};
                                    if (typeof map[id].extraDamage != 'number') {
                                        map[id].extraDamage = 0;
                                    }
                                    map[id].extraDamage += num2;
                                }
                                if (num2 > 0) {
                                    if (trigger.card.name == 'sha') {
                                        var id = trigger.target.playerid;
                                        var map = trigger.parent.customArgs;
                                        if (!map[id]) map[id] = {};
                                        if (typeof map[id].shanRequired == 'number') map[id].shanRequired += num2;
                                        else map[id].shanRequired = 1 + num2;
                                    }
                                    else {
                                        var id = trigger.target.playerid;
                                        var idt = trigger.target.playerid;
                                        var map = trigger.parent.customArgs;
                                        if (!map[idt]) map[idt] = {};
                                        if (!map[idt].shaReq) map[idt].shaReq = {};
                                        if (!map[idt].shaReq[id]) map[idt].shaReq[id] = 1 + num2;
                                        map[idt].shaReq[id] += num2;
                                    }
                                }
                            },
                        },
                        rywushuang: {
                            audio: 'ext:日月同辉:2',
                            trigger: { player: 'phaseZhunbeiBegin' },
                            forced: true,
                            content() {
                                var list, skills = [];
                                if (get.mode() == 'guozhan') {
                                    list = [];
                                    for (var i in lib.characterPack.mode_guozhan) list.push(i);
                                }
                                else if (_status.connectMode) list = get.charactersOL();
                                else {
                                    list = [];
                                    for (var i in lib.character) {
                                        if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) continue;
                                        list.push(i);
                                    }
                                }
                                for (var i of list) {
                                    if (i.indexOf('gz_jun') == 0) continue;
                                    for (var j of lib.character[i][3]) {
                                        if (j == 'bolan') continue;
                                        var skill = lib.skill[j];
                                        if (!skill || skill.zhuSkill || skill.dutySkill) continue;
                                        if (skill.init || skill.ai && (skill.ai.combo || skill.ai.notemp || skill.ai.neg)) continue;
                                        var info = lib.translate[j + '_info'];
                                        if (info && info.includes('杀')) skills.add(j);
                                    }
                                }
                                skills = skills.randomGets(3);
                                for (var skillx of skills) player.addTempSkill(skillx, { player: 'phaseBegin' });
                            },
                        },
                        ryshenwei: {
                            group: 'ryshenwei_mark',
                            marktext: '威',
                            intro: {
                                name: '神威',
                                name2: '威',
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            audio: 'ext:日月同辉:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                var num = 4;
                                if (_status._aozhan) num = 6;
                                return player.getExpansions('ryshenwei').length >= num;
                            },
                            content() {
                                'step 0'
                                if (_status._aozhan) result.control = '神愤';
                                else if (!_status._aozhan && player.getExpansions('ryshenwei').length < 6) result.control = '鏖战';
                                else player.chooseControl('鏖战', '神愤').set('prompt', '神威:进入鏖战模式或者发动加强版神愤');
                                'step 1'
                                switch (result.control) {
                                    case '鏖战':
                                        player.loseToDiscardpile(player.getExpansions('ryshenwei').randomGets(4));
                                        var color = get.groupnature(player.group, 'raw');
                                        if (player.isUnseen()) color = 'fire';
                                        player.getExpansions('ryshenwei');
                                        player.$fullscreenpop('鏖战模式', color);
                                        game.broadcastAll(function () {
                                            _status._aozhan = true;
                                            ui.aozhan = ui.create.div('.touchinfo.left', ui.window);
                                            ui.aozhan.innerHTML = '鏖战模式';
                                            if (ui.time3) ui.time3.style.display = 'none';
                                            ui.aozhanInfo = ui.create.system('鏖战模式', null, true);
                                            lib.setPopped(ui.aozhanInfo, function () {
                                                var uiintro = ui.create.dialog('hidden');
                                                uiintro.add('鏖战模式');
                                                var intro = `<ul style='text-align:left;margin-top:0;width:450px'>在鏖战模式下,任何角色均不是非转化的【桃】的合法目标.【桃】可以被当做【杀】或【闪】使用或打出.</ul>`;
                                                uiintro.add(`<div class='text center'>${intro}</div>`);
                                                var ul = uiintro.querySelector('ul');
                                                if (ul) {
                                                    ul.style.width = '180px';
                                                }
                                                uiintro.add(ui.create.div('.placeholder'));
                                                return uiintro;
                                            }, 250);
                                            game.playBackgroundMusic();
                                        });
                                        game.countPlayer(function (current) {
                                            current.addSkill('aozhan');
                                            if (current != player && current.countCards('h', { name: 'tao' }) > 0) current.discard(current.getCards('h', { name: 'tao' }));
                                        });
                                        event.finish();
                                        break;
                                    case '神愤':
                                        player.loseToDiscardpile(player.getExpansions('ryshenwei').randomGets(6));
                                        event.targets = game.filterPlayer();
                                        event.targets.remove(player);
                                        event.targets.sort(lib.sort.seat);
                                        player.line(event.targets, 'green');
                                        event.targets2 = event.targets.slice(0);
                                        event.targets3 = event.targets.slice(0);
                                        break;
                                }
                                'step 2'
                                if (event.targets2.length) {
                                    event.targets2.shift().damage('nocard');
                                    event.redo();
                                }
                                'step 3'
                                if (event.targets.length) {
                                    event.current = event.targets.shift();
                                    event.current.discard(event.current.getCards('e')).delay = false;
                                }
                                'step 4'
                                if (event.targets.length) event.goto(3);
                                'step 5'
                                if (event.targets3.length) {
                                    event.current = event.targets3.shift();
                                    event.current.discard(event.current.getCards('h')).delay = false;
                                }
                                'step 6'
                                if (event.targets3.length) event.goto(5);
                            },
                            ai: {
                                order: 10,
                                result: { player: 1 },
                            },
                            subSkill: {
                                mark: {
                                    audio: 'ryshenwei',
                                    trigger: { player: 'damageEnd', source: 'damageSource' },
                                    filter(event, player) {
                                        return event.num > 0;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0'
                                        event.count = Math.min(trigger.num, 9);
                                        'step 1'
                                        event.count--;
                                        player.draw();
                                        'step 2'
                                        if (player.countCards('h')) player.chooseCard('将一张手牌置于武将牌上作为「威」', true);
                                        else event.goto(4);
                                        'step 3'
                                        if (result.cards?.length) player.addToExpansion(result.cards, player, 'giveAuto').gaintag.add('ryshenwei');
                                        'step 4'
                                        if (event.count > 0) event.goto(1);
                                    },
                                },
                            },
                        },
                        ryyanwen: { charlotte: true },
                        ryhushe: {
                            audio: 'ext:日月同辉:true',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('he') && !player.hasSkill('ryyanwen');
                            },
                            filterCard: true,
                            position: 'he',
                            check(card) {
                                return 8 - get.value(card);
                            },
                            content() {
                                'step 0'
                                player.addTempSkill('ryyanwen', 'phaseUseAfter');
                                var list = ['sha', 'equip1'];
                                for (var name of list) {
                                    var card = get.cardPile(function (card) {
                                        for (var cardx of cards) {
                                            if (cardx.name == card.name || get.subtype(cardx) == get.subtype(card)) return false;
                                        }
                                        return card.name == name || get.subtype(card) == name;
                                    });
                                    if (card) cards.push(card);
                                }
                                if (cards.length) player.gain(cards, 'gain2', 'log');
                                'step 1'
                                player.chooseBool('是否将武将牌「颜良」替换为「文丑」？');
                                'step 2'
                                if (result.bool) player.reinit('ry_yanliang', 'ry_wenchou');
                            },
                            ai: {
                                order: 8,
                                result: { player: 1 },
                            },
                        },
                        rylangxing: {
                            audio: 'ext:日月同辉:true',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('he') && !player.hasSkill('ryyanwen');
                            },
                            filterCard: true,
                            position: 'he',
                            check(card) {
                                return 8 - get.value(card);
                            },
                            content() {
                                'step 0'
                                player.addTempSkill('ryyanwen', 'phaseUseAfter');
                                var card = get.cardPile(function (card) {
                                    return card.name == 'juedou';
                                });
                                if (card) player.gain(card, 'gain2', 'log');
                                player.changeHujia(1);
                                'step 1'
                                player.chooseBool('是否将武将牌「文丑」替换为「颜良」？');
                                'step 2'
                                if (result.bool) player.reinit('ry_wenchou', 'ry_yanliang');
                            },
                            ai: {
                                order: 8,
                                result: { player: 1 },
                            },
                        },
                        ryshuangxiong: {
                            audio: 'ext:日月同辉:2',
                            trigger: { player: 'phaseJieshuBegin' },
                            forced: true,
                            content() {
                                'step 0'
                                var num = 0;
                                trigger.player.getHistory('sourceDamage', function (evt) {
                                    num += evt.num;
                                });
                                player.chooseCard(get.prompt('ryshuangxiong'), `重铸${get.cnNumber(num)}张牌` + (num > 0 ? '并摸一张牌' : ''), num, 'h');
                                event.num = num;
                                'step 1'
                                if (result.cards?.length) {
                                    player.loseToDiscardpile(result.cards);
                                    player.draw(result.cards.length);
                                    if (event.num > 0) player.draw();
                                }
                            },
                        },
                        ryxianzhen: {
                            audio: 'ext:日月同辉:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player.canCompare(target);
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0 && game.hasPlayer(function (current) {
                                    return player.canCompare(current);
                                });
                            },
                            content() {
                                'step 0'
                                player.chooseToCompare(target);
                                'step 1'
                                if (result.bool) {
                                    player.storage.ryxianzhen2 = target;
                                    player.addTempSkill('ryxianzhen2');
                                }
                            },
                            ai: {
                                order(name, player) {
                                    var cards = player.getCards('h');
                                    if (player.countCards('h', 'sha') == 0) {
                                        return 1;
                                    }
                                    if (Array.isArray(cards)) for (var i of cards) {
                                        if (i.name != 'sha' && i.number > 11 && get.value(i) < 7) {
                                            return 9;
                                        }
                                    }
                                    return get.order({ name: 'sha' }) - 1;
                                },
                                result: {
                                    player(player) {
                                        if (player.countCards('h', 'sha') > 0) return 0;
                                        var num = player.countCards('h');
                                        if (num > player.hp) return 0;
                                        if (num == 1) return -2;
                                        if (num == 2) return -1;
                                        return -0.7;
                                    },
                                    target(player, target) {
                                        var num = target.countCards('h');
                                        if (num == 1) return -1;
                                        if (num == 2) return -0.7;
                                        return -0.5
                                    },
                                },
                            },
                        },
                        ryxianzhen2: {
                            mod: {
                                targetInRange(card, player, target) {
                                    if (card.name == 'sha' && target == player.storage.ryxianzhen2) return true;
                                },
                            },
                            charlotte: true,
                            trigger: { player: ['useCard2', 'useCardToPlayer'] },
                            filter(event, player) {
                                if (event.card.ryxianzhen) return false;
                                if (!event.targets.includes(player.storage.ryxianzhen2)) return false;
                                if (player.next == player.previous) return false;
                                if (event.card.name != 'sha') return false;
                                return game.hasPlayer(function (current) {
                                    return current != player && !event.targets.includes(current);
                                });
                            },
                            forced: true,
                            content() {
                                'step 0'
                                trigger.card.ryxianzhen = true;
                                var target = player.storage.ryxianzhen2;
                                event.target = target;
                                event.list_next = [];
                                event.list_previous = [];
                                for (var i = player.next; i != target; i = i.next) {
                                    if (![player, target].includes(i)) event.list_next.push(i);
                                }
                                for (var j = player.previous; j != target; j = j.previous) {
                                    if (![player, target].includes(j)) event.list_previous.push(j);
                                }
                                var num = Math.min(Math.max(player.getDamagedHp(), 1), Math.min(Math.max(event.list_next.length, event.list_previous.length), game.countPlayer(function (current) {
                                    return !trigger.targets.includes(current) && lib.filter.targetEnabled(trigger.card, player, current);
                                })));
                                player.chooseTarget(get.prompt('ryxianzhen'), `为${get.translation(trigger.card)}增加至多${get.translation(num)}个目标`, [1, num], function (card, player, target) {
                                    if (!event.list_next.includes(target) && !event.list_previous.includes(target)) return false;
                                    if (ui.selected.targets.length) {
                                        var targetx = ui.selected.targets[0];
                                        if (event.list_next.includes(targetx) && !event.list_next.includes(target)) return false;
                                        if (event.list_previous.includes(targetx) && !event.list_previous.includes(target)) return false;
                                    }
                                    var evt = _status.event.getTrigger();
                                    return !evt.targets.includes(target) && lib.filter.targetEnabled(evt.card, player, target);
                                }).set('ai', function (target) {
                                    var evt = _status.event.getTrigger(), eff = get.effect(target, evt.card, evt.player, evt.player);
                                    return eff;
                                });
                                'step 1'
                                if (result.targets?.length) {
                                    event.targets = result.targets;
                                }
                                else event.finish();
                                'step 2'
                                trigger.targets.addArray(targets);
                            },
                        },
                        ryjinjiu: {
                            audio: 'ext:日月同辉:2',
                            global: 'ryjinjiu_global',
                            mod: {
                                cardname(card) {
                                    if (card.name == 'jiu') return 'sha';
                                },
                                cardnumber(card) {
                                    if (card.name == 'jiu') return 13;
                                },
                            },
                            subSkill: {
                                global: {
                                    mod: {
                                        cardEnabled(card, player) {
                                            if (card.name == 'jiu' && _status.currentPhase && _status.currentPhase != player && _status.currentPhase.hasSkill('ryjinjiu')) return false;
                                        },
                                        cardSavable(card, player) {
                                            if (card.name == 'jiu' && _status.currentPhase && _status.currentPhase != player && _status.currentPhase.hasSkill('ryjinjiu')) return false;
                                        },
                                    },
                                },
                            },
                        },
                        ryjiuchi: {
                            audio: 'ext:日月同辉:2',
                            trigger: { global: ['phaseDrawBegin2', 'loseAfter', 'phaseEnd'] },
                            filter(event, player, name) {
                                var bool = false;
                                if (name == 'phaseDrawBegin2') return true;
                                if (name == 'phaseEnd') return event.player.getHistory('sourceDamage', function (evt) {
                                    return evt.player != event.player;
                                }).length == 0;
                                return event.type == 'discard' && event.getParent(3).name == 'phaseDiscard' && event.cards2.filterInD('d').length;
                            },
                            forced: true,
                            logTarget: 'player',
                            content() {
                                switch (event.triggername) {
                                    case 'phaseDrawBegin2':
                                        trigger.num += 2;
                                        break;
                                    case 'loseAfter':
                                        trigger.player.$gain2(trigger.cards2, false);
                                        trigger.player.next.gain(trigger.cards2, trigger.player, 'give');
                                        break;
                                    case 'phaseEnd':
                                        trigger.player.damage('nosource');
                                        break;
                                }
                            },
                        },
                        ryroulin: {
                            audio: 'ext:日月同辉:2',
                            global: 'ryroulin_wushuang',
                            trigger: { global: 'phaseBefore', player: 'enterGame' },
                            forced: true,
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            content() {
                                player.line(game.players);
                                for (var target of game.players) {
                                    target.gainMaxHp();
                                    target.recover();
                                }
                            },
                            subSkill: {
                                wushuang: {
                                    inherit: 'wushuang1',
                                },
                            },
                        },
                        rybengtan: {
                            audio: 'ext:日月同辉:2',
                            trigger: { player: 'phaseJieshuBegin' },
                            filter(event, player) {
                                return player.isMaxHp(true) || !game.hasPlayer(function (current) {
                                    return current != player && current.maxHp >= player.maxHp;
                                });
                            },
                            forced: true,
                            content() {
                                'step 0'
                                event.num = player.hp;
                                player.chooseControl('baonue_hp', 'baonue_maxHp', function (event, player) {
                                    if (player.isHealthy() && player.maxHp > 3 && player.countCards('h') <= 2) return 'baonue_maxHp';
                                    if (player.hp == player.maxHp) return 'baonue_hp';
                                    if (player.isDamaged() || player.hp <= 2) return 'baonue_maxHp';
                                    return 'baonue_hp';
                                }).set('prompt', '崩瘫:失去1点体力或减1点体力上限');
                                'step 1'
                                if (result.control == 'baonue_hp') player.loseHp();
                                else event.lose = player.loseMaxHp();
                                'step 2'
                                if (event.lose && event.lose.loseHp) player.draw(2);
                            },
                        },
                        rylingnve: {
                            audio: 'ext:日月同辉:2',
                            group: 'rylingnve_judge',
                            zhuSkill: true,
                            trigger: { global: 'loseEnd' },
                            filter(event, player) {
                                if (!player.hasZhuSkill('rylingnve')) return false;
                                if (event.type != 'discard') return false;
                                if (player == event.player) return false;
                                for (var i of event.cards2) {
                                    if (get.position(i, true) == 'd' && (i.name == 'sha' || i.suit == 'spade')) return true;
                                }
                                return false;
                            },
                            forced: true,
                            content() {
                                'step 0'
                                var targetx = trigger.player;
                                player.chooseTarget(get.prompt2('rylingnve'), function (card, player, target) {
                                    return player.canUse({ name: 'sha' }, target, false) && targetx.inRange(target);
                                }).set('ai', function (target) {
                                    var player = _status.event.player;
                                    return get.effect(target, { name: 'sha' }, player, player);
                                });
                                'step 1'
                                if (result.bool) {
                                    player.gain2(trigger.cards2, false);
                                    player.useCard({ name: 'sha' }, trigger.cards2, result.targets, false);
                                    trigger.cards2.remove(trigger.cards2);
                                }
                            },
                            subSkill: {
                                judge: {
                                    trigger: { global: 'judgeEnd' },
                                    filter(event, player) {
                                        if (!player.hasZhuSkill('rylingnve')) return false;
                                        if (player == event.player) return false;
                                        return (event.result.card.name == 'sha' || event.result.card.suit == 'spade') && get.position(event.result.card, true) == 'o';
                                    },
                                    forced: true,
                                    content() {
                                        'step 0'
                                        var targetx = trigger.player;
                                        player.chooseTarget(get.prompt2('rylingnve'), function (card, player, target) {
                                            return player.canUse({ name: 'sha' }, target, false) && targetx.inRange(target);
                                        }).set('ai', function (target) {
                                            var player = _status.event.player;
                                            return get.effect(target, { name: 'sha' }, player, player);
                                        });
                                        'step 1'
                                        if (result.bool) {
                                            player.$gain2(trigger.result.card, false);
                                            player.useCard({ name: 'sha' }, trigger.result.card, result.targets, false);
                                        }
                                    },
                                },
                            },
                        },
                        ryzhiheng: {
                            init(player) {
                                if (!player.storage.ryzhiheng_tongye) player.addMark('ryzhiheng_tongye', 1, false);
                            },
                            group: ['ryzhiheng_tongye', 'ryzhiheng_guess'],
                            marktext: '业',
                            intro: { content: 'mark', name: '业' },
                            audio: 'ext:日月同辉:2',
                            enable: 'phaseUse',
                            usable: 1,
                            position: 'he',
                            filterCard: lib.filter.cardDiscardable,
                            discard: false,
                            lose: false,
                            delay: false,
                            selectCard: [1, Infinity],
                            prompt: '弃置任意张牌并摸等量的牌,若以此法弃置了所有的手牌,则获得一个「业」标记',
                            check(card) {
                                var player = _status.event.player;
                                if (get.position(card) == 'h' && !player.countCards('h', function (card) {
                                    return get.value(card) >= 8;
                                })) {
                                    return 8 - get.value(card);
                                }
                                return 6 - get.value(card)
                            },
                            content() {
                                'step 0'
                                player.discard(cards);
                                event.num = 1;
                                var hs = player.getCards('h');
                                if (!hs.length) event.num = 0;
                                for (var i = 0; i < hs.length; i++) {
                                    if (!cards.includes(hs[i])) {
                                        event.num = 0; break;
                                    }
                                }
                                'step 1'
                                player.draw(event.num + cards.length);
                                if (event.num > 0) player.addMark('ryzhiheng', 1);
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player(player) {
                                        var num = 0;
                                        var cards = player.getCards('he');
                                        if (Array.isArray(cards)) for (var i of cards) {
                                            if (get.value(i) < 6) {
                                                num++;
                                            }
                                        }
                                        if (cards.length > 2) return 1;
                                        if (cards.length == 2);
                                        return 0;
                                    }
                                },
                            },
                            subSkill: {
                                tongye: {
                                    audio: 'ext:日月同辉:2',
                                    enable: 'phaseUse',
                                    usable: 1,
                                    filter(event, player) {
                                        return player.countMark('ryzhiheng') > 0;
                                    },
                                    content() {
                                        'step 0'
                                        player.removeMark('ryzhiheng', 1);
                                        player.chooseControl().set('choiceList', [
                                            '摸' + get.cnNumber(player.countMark('ryzhiheng_tongye')) + '张牌',
                                            '猜测场上装备牌数的变化趋势'
                                        ]).set('ai', function () {
                                            if (player.countMark('ryzhiheng_tongye') < 3) return 1;
                                            return 0;
                                        });
                                        'step 1'
                                        if (result.index == 0) {
                                            player.draw(player.countMark('ryzhiheng_tongye'));
                                            event.finish();
                                        }
                                        else {
                                            player.removeMark('ryzhihengx', player.countMark('ryzhihengx'), false);
                                            player.addMark('ryzhihengx', game.countPlayer(function (current) {
                                                return current.countCards('e');
                                            }), false);
                                            player.chooseControl('变化', '不变').set('prompt', '制衡:请猜测场上的装备数的变化趋势').set('ai', function () {
                                                if (game.countPlayer(function (current) {
                                                    return current.countCards('e');
                                                }) <= game.players.length) return '变化';
                                                return '不变';
                                            });
                                        }
                                        'step 2'
                                        if (result.control) player.addSkill('ryzhiheng_' + (result.control == '变化' ? 0 : 1));
                                    },
                                },
                                '0': {
                                    charlotte: true,
                                    mark: true,
                                    intro: {
                                        content(content, player) {
                                            if (player.isUnderControl(true)) return '变化';
                                            return get.translation(player) + '压的什么呢？';
                                        },
                                    },
                                },
                                '1': {
                                    charlotte: true,
                                    mark: true,
                                    intro: {
                                        content(content, player) {
                                            if (player.isUnderControl(true)) return '不变';
                                            return get.translation(player) + '压的什么呢？';
                                        },
                                    },
                                },
                                guess: {
                                    charlotte: true,
                                    audio: 'ryzhiheng_tongye',
                                    trigger: { player: 'phaseBegin' },
                                    filter(event, player) {
                                        return player.hasSkill('ryzhiheng_0') || player.hasSkill('ryzhiheng_1');
                                    },
                                    forced: true,
                                    content() {
                                        var bool = false, boolx = false;
                                        if (player.countMark('ryzhihengx') == game.countPlayer(function (current) {
                                            return current.countCards('e');
                                        })) boolx = true;
                                        if (!boolx && player.hasSkill('ryzhiheng_0')) bool = true;
                                        if (boolx && player.hasSkill('ryzhiheng_1')) bool = true;
                                        if (bool) {
                                            player.popup('压对!', 'wood');
                                            game.log(player, '预测', '#g成功');
                                            player.addMark('ryzhiheng_tongye', 1, false);
                                        }
                                        else {
                                            player.popup('压错!', 'fire');
                                            game.log(player, '预测', '#y失败');
                                        }
                                        player.removeSkill('ryzhiheng_0');
                                        player.removeSkill('ryzhiheng_1');
                                    },
                                },
                            },
                        },
                        ryjiahe: {
                            audio: 'ext:日月同辉:2',
                            global: 'ryjiahe2',
                            zhuSkill: true,
                        },
                        ryjiahe2: {
                            audio: 'ryjiahe',
                            enable: 'phaseUse',
                            discard: false,
                            lose: false,
                            delay: false,
                            line: true,
                            forced: true,
                            clearTime: true,
                            prepare(cards, player, targets) {
                            },
                            prompt() {
                                var player = _status.event.player;
                                var list = game.filterPlayer(function (target) {
                                    return target != player && target.hasZhuSkill('ryjiahe', player);
                                });
                                var str = '将一张装备牌交给' + get.translation(list);
                                if (list.length > 1) str += '中的一人';
                                str += '并回复1点体力,其可以使用此牌';
                                return str;
                            },
                            filter(event, player) {
                                if (player.group != 'wu') return false;
                                if (!player.countCards('he', { type: 'equip' }) <= 0) return false;
                                return game.hasPlayer(function (target) {
                                    return target != player && target.hasZhuSkill('ryjiahe', player);
                                });
                            },
                            filterCard(card) {
                                return get.type(card) == 'equip';
                            },
                            log: false,
                            filterTarget(card, player, target) {
                                return target != player && target.hasZhuSkill('ryjiahe', player);
                            },
                            content() {
                                target.gain(cards, player, 'giveAuto');
                                player.recover();
                                if (target.getCards('h').includes(cards[0]) && get.type(cards[0], target) == 'equip' && target.hasUseTarget(cards[0])) target.chooseUseTarget(cards[0], 'nopopup');
                            },
                            ai: {
                                expose: 0.3,
                                order: 10,
                                result: {
                                    target(player, target) {
                                        if (player.isDamaged() || player.needsToDiscard()) return 1;
                                        return 0;
                                    },
                                },
                            },
                        },
                        ryyingzi: {
                            mod: {
                                maxHandcardBase(player, num) {
                                    return player.maxHp;
                                },
                            },
                            audio: 'ext:日月同辉:2',
                            trigger: { player: 'phaseZhunbeiBegin' },
                            forced: true,
                            content() {
                                var num = game.countPlayer(function (current) {
                                    return current.isLinked() || current.isTurnedOver() || current.isUnseen();
                                });
                                player.draw(Math.max(1, num));
                            },
                        },
                        ryyehuo: {
                            audio: 'ext:日月同辉:2',
                            enable: 'phaseUse',
                            filterCard: true,
                            position: 'he',
                            filterTarget: lib.filter.notMe,
                            discard: false,
                            delay: false,
                            check(card) {
                                return 8 - get.value(card);
                            },
                            loseTo: 'cardPile',
                            insert: true,
                            visible: true,
                            content() {
                                'step 0'
                                game.broadcastAll(function (player) {
                                    var cardx = ui.create.card();
                                    cardx.classList.add('infohidden');
                                    cardx.classList.add('infoflip');
                                    player.$throw(cardx, 1000, 'nobroadcast');
                                }, player);
                                target.chooseControl(lib.suit).set('prompt', '业火:请选择一个花色').ai = function () { return lib.suit.randomGet() };
                                'step 1'
                                target.popup(result.control);
                                game.log(target, '选择了', '#y' + get.translation(result.control));
                                var card = get.cards()[0];
                                event.color = get.color(card);
                                target.showCards(card, '牌堆顶的牌');
                                target.gain(card, 'gain2', 'log');
                                if (card.suit == result.control) event.finish();
                                else player.chooseControl('造成伤害', '弃置卡牌').set('prompt', `业火:请选择一个效果令${get.translation(target)}执行`).ai = function () { return '造成伤害' };
                                'step 2'
                                if (result.control == '造成伤害') target.damage(1, 'fire');
                                else target.discard(target.getCards('he', function (card) {
                                    return get.color(card, target) == event.color;
                                }));
                            },
                        },
                        ryjieying: {
                            audio: 'ext:日月同辉:2',
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return player.canCompare(target);
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            content() {
                                'step 0'
                                player.chooseToCompare(target);
                                'step 1'
                                var cards = [result.player, result.target].filterInD('d');
                                for (var card of cards) {
                                    if (card.suit != 'club') cards.remove(card);
                                }
                                if (cards.length) {
                                    player.addTempSkill('ryjieying2');
                                    player.addToExpansion(cards, 'giveAuto', player).gaintag.add('ryjieying2');
                                }
                                player.addSkill('ryjieying_gain');
                                if (!result.tie) {
                                    if (result.bool) player.useCard({ name: 'guohe' }, target);
                                    else target.useCard({ name: 'guohe' }, player);
                                }
                            },
                            contentAfter() {
                                player.removeSkill('ryjieying_gain');
                            },
                            subSkill: {
                                gain: {
                                    trigger: { global: 'loseAfter' },
                                    forced: true,
                                    charlotte: true,
                                    popup: false,
                                    filter(event, player) {
                                        return event.cards[0].suit == 'club' && get.position(event.cards[0]) == 'd';
                                    },
                                    content() {
                                        player.addTempSkill('ryjieying2');
                                        player.addToExpansion(trigger.cards[0], 'giveAuto', player).gaintag.add('ryjieying2');
                                    },
                                },
                            },
                        },
                        ryjieying2: {
                            charlotte: true,
                            trigger: { global: 'phaseEnd' },
                            forced: true,
                            content() {
                                var cards = player.getExpansions('ryjieying2');
                                if (cards.length) player.gain(cards, 'draw');
                                player.removeSkill('ryjieying2');
                            },
                            intro: {
                                mark(dialog, storage, player) {
                                    var cards = player.getExpansions('ryjieying2');
                                    dialog.addAuto(cards);
                                },
                                markcount: 'expansion',
                            },
                        },
                        ryyinling: {
                            marktext: '铃',
                            intro: { content: 'mark', name: '银铃', name2: '铃' },
                            group: 'ryyinling_mark',
                            global: ['ryyinling_gain', 'ryyinling_ai'],
                            audio: 'ext:日月同辉:2',
                            trigger: { global: 'useCardToPlayered' },
                            filter(event, player) {
                                if (event.parent.triggeredTargets3.length > 1) return false;
                                if (get.info(event.card).multitarget) return false;
                                if (event.targets.length < 2) return false;
                                if (!player.countMark('ryyinling')) return false;
                                return true;
                            },
                            forced: true,
                            content() {
                                'step 0'
                                player.chooseTarget(get.prompt('ryyinling'), [1, Math.min(player.countMark('ryyinling'), trigger.targets.length)], function (card, player, target) {
                                    return _status.event.targets.includes(target);
                                }).set('ai', function (target) {
                                    var trigger = _status.event.getTrigger();
                                    if (game.phaseNumber > game.players.length * 2 && trigger.targets.length >= game.players.length - 1 && !trigger.excluded.includes(target)) {
                                        return -get.effect(target, trigger.card, trigger.player, _status.event.player);
                                    }
                                    return -1;
                                }).set('targets', trigger.targets);
                                'step 1'
                                if (result.targets?.length) {
                                    player.removeMark('ryyinling', result.targets.length);
                                    trigger.parent.excluded.addArray(result.targets);
                                }
                            },
                            subSkill: {
                                ai: {
                                    charlottte: true,
                                    trigger: { player: 'phaseBegin' },
                                    filter(event, player) {
                                        var num = 0;
                                        game.countPlayer(function (current) {
                                            if (current.hasSkill('ryyinling')) {
                                                if (get.attitude(player, current) > 0) num++;
                                                else num--;
                                            }
                                        });
                                        return num >= 0;
                                    },
                                    _priority: 10,
                                    forced: true,
                                    content() {
                                        player.addTempSkill(['ryyinling_zeng', 'ryyinling_jian'].randomGet());
                                    },
                                },
                                zeng: {
                                    mod: {
                                        aiOrder(player, card, num) {
                                            if (typeof card.number != 'number') return;
                                            var history = player.getHistory('useCard', function (evt) {
                                                return evt.isPhaseUsing();
                                            });
                                            if (history.length == 0) return num + 10 * (14 - card.number);
                                            var num = history[0].card.number;
                                            if (!num) return;
                                            for (var i = 1; i < history.length; i++) {
                                                var num2 = history[i].card.number;
                                                if (!num2 || num2 <= num) return;
                                                num = num2;
                                            }
                                            if (card.number > num) return num + 10 * (14 - card.number);
                                        },
                                    },
                                },
                                jian: {
                                    mod: {
                                        aiOrder(player, card, num) {
                                            if (typeof card.number != 'number') return;
                                            var history = player.getHistory('useCard', function (evt) {
                                                return evt.isPhaseUsing();
                                            });
                                            if (history.length == 0) return num + 10 * card.number;
                                            var num = history[0].card.number;
                                            if (!num) return;
                                            for (var i = 1; i < history.length; i++) {
                                                var num2 = history[i].card.number;
                                                if (!num2 || num2 >= num) return;
                                                num = num2;
                                            }
                                            if (card.number < num) return num + 10 * card.number;
                                        },
                                    },
                                },
                                gain: {
                                    charlotte: true,
                                    trigger: { player: 'useCard1' },
                                    filter(event, player) {
                                        if (event.player != _status.currentPhase) return false;
                                        if (!event.player.storage.ryyinling_gain) event.player.storage.ryyinling_gain = [];
                                        return true;
                                    },
                                    _priority: 20,
                                    forced: true,
                                    content() {
                                        trigger.player.storage.ryyinling_gain.push((trigger.card.number || 0));
                                    },
                                },
                                mark: {
                                    trigger: { global: 'phaseEnd' },
                                    filter(event, player) {
                                        if (!event.player.storage.ryyinling_gain) return false;
                                        return true;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0'
                                        var list = trigger.player.storage.ryyinling_gain, bool = true, bool1 = false, bool2 = false, num = undefined, numx = 0;
                                        for (var i = 0; i < list.length; i++) {
                                            numx++;
                                            if (list[i] == 0) bool = false;
                                            else {
                                                if (numx == 1) num = list[i];
                                                else if (numx == 2) {
                                                    if (list[i] == num) bool = false;
                                                    if (list[i] > num) bool1 = true;
                                                    if (list[i] < num) bool2 = true;
                                                    num = list[i];
                                                }
                                                else {
                                                    if (bool1 && list[i] <= num) bool = false;
                                                    if (bool2 && list[i] >= num) bool = false;
                                                    num = list[i];
                                                }
                                            }
                                        }
                                        if (bool && numx > 1) {
                                            player.addMark('ryyinling', 1);
                                        }
                                        'step 1'
                                        trigger.player.storage.ryyinling_gain = [];
                                        delete trigger.player.storage.ryyinling_gain;
                                    },
                                },
                            },
                        },
                        rykurou: {
                            audio: 'ext:日月同辉:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard: true,
                            filterTarget: true,
                            check(card) {
                                return 8 - get.value(card);
                            },
                            position: 'he',
                            content() {
                                player.damage(1, target, 'fire');
                            },
                            ai: {
                                order: 8,
                                result: {
                                    player(player, target) {
                                        if (player.hp <= 2) return player.countCards('h') == 0 ? 1 : 0;
                                        return player.countCards('h') <= player.hp ? 1 : 0;
                                    },
                                    target(player, target) {
                                        return 20 - get.attitude(player, target);
                                    },
                                },
                            },
                        },
                        ryzhaxiang: {
                            audio: 'ext:日月同辉:2',
                            trigger: { player: 'damageEnd' },
                            filter(event, player) {
                                return event.nature == 'fire';
                            },
                            forced: true,
                            content() {
                                'step 0'
                                player.draw(3 * trigger.num);
                                'step 1'
                                var cards = result;
                                player.chooseCardTarget({
                                    filterCard(card) {
                                        return _status.event.cards.includes(card) && get.color(card, player) == 'black';
                                    },
                                    cards: cards,
                                    selectCard: [1, cards.length],
                                    filterTarget() {
                                        if (ui.selected.cards.length) return true;
                                        return false;
                                    },
                                    selectTarget() {
                                        if (ui.selected.cards.length) return ui.selected.cards.length;
                                        return [0, 0];
                                    },
                                    prompt: '诈降:是否弃置其中任意张黑色牌并横置等量角色？',
                                    ai1(card) {
                                        if (!ui.selected.cards.length) return 1;
                                        return 0;
                                    },
                                    ai2(target) {
                                        var player = _status.event.player;
                                        return get.effect(target, { name: 'tiesuo' }, player, player);
                                    },
                                });
                                'step 2'
                                if (result.targets?.length) {
                                    result.targets.sortBySeat();
                                    player.line(result.targets);
                                    player.discard(result.cards);
                                    for (var target of result.targets) target.link();
                                }
                            },
                        },
                        rykeji: {
                            audio: 'ext:日月同辉:2',
                            trigger: { player: 'phaseUseAfter' },
                            filter(event, player) {
                                return !player.hasHistory('sourceDamage', function (evt) {
                                    return evt.getParent('phaseUse') == event;
                                });
                            },
                            forced: true,
                            content() {
                                'step 0'
                                player.skip('phaseDiscard');
                                player.chooseControl('摸两张牌', '获得护甲').set('prompt', '克己:摸两张牌或获得1点护甲值').set('ai', function () {
                                    return ['摸两张牌', '获得护甲'].randomGet();
                                });
                                'step 1'
                                if (result.control == '摸两张牌') player.draw(2);
                                else player.changeHujia(1);
                            },
                        },
                        rytanhu: {
                            audio: 'ext:日月同辉:2',
                            trigger: { player: 'phaseUseBegin' },
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current != player && current.countCards('h');
                                })
                            },
                            forced: true,
                            content() {
                                'step 0'
                                player.chooseTarget(get.prompt2('rytanhu'), function (card, player, target) {
                                    return target != player && target.countCards('h');
                                }).set('ai', function (target) {
                                    return -get.attitude(player, target) * target.countCards('h');
                                });
                                'step 1'
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    player.chooseControl('有', '没有').set('prompt', `猜猜看吧,${get.translation(target)}是否有红色手牌？`).set('ai', function () {
                                        if (target.countCards('h', { color: 'red' }) > 0) return '有';
                                        return '没有';
                                    });
                                }
                                else event.finish();
                                'step 2'
                                if ((result.control == '有' && target.countCards('h', { color: 'red' })) || (result.control == '没有' && !target.countCards('h', { color: 'red' }))) {
                                    player.popup('压对!', 'wood');
                                    game.log(player, '猜', '#g对', '了!');
                                    player.choosePlayerCard(`请选择${get.cnNumber(Math.max(1, player.hujia))}张手牌令其本回合无法使用或打出`, target, 'h', Math.min(target.countCards('h'), Math.max(1, player.hujia)), true)
                                        .set('ai', function (button) {
                                            if (button.link.name == 'shan') return 100;
                                            if (button.link.name == 'tao' || button.link.name == 'jiu') return 50;
                                            if (button.link.name == 'wuxie') return 25;
                                            if (button.link.name == 'du') return 0.00001;
                                            return get.value(button.link);
                                        }).set('visible', true);
                                }
                                else {
                                    player.popup('压错!', 'fire');
                                    game.log(player, '猜', '#g错', '了!');
                                    var hand = [get.translation(target) + '的手牌', target.getCards('h')];
                                    game.log(player, '观看了', target, '的手牌');
                                    player.chooseControl('ok').set('dialog', hand);
                                    target.addSkill('rytanhu_silent');
                                    event.finish();
                                }
                                'step 3'
                                game.log(player, '观看了', target, '的手牌');
                                target.addTempSkill('rytanhu_block');
                                target.addGaintag(result.cards, 'rytanhu_block');
                                player.addTempSkill('jiang');
                            },
                            subSkill: {
                                silent: {
                                    mod: {
                                        targetEnabled(card, player, target) {
                                            if (player == _status.currentPhase) return false;
                                        },
                                    },
                                },
                                block: {
                                    onremove(player) {
                                        player.removeGaintag('rytanhu_block');
                                    },
                                    mod: {
                                        cardEnabled2(card, player) {
                                            if (get.itemtype(card) == 'card' && card.hasGaintag('rytanhu_block')) return false;
                                        },
                                    },
                                },
                            },
                        },
                        ryqianxun: {
                            audio: 'ext:日月同辉:2',
                            trigger: { target: 'useCardToBefore' },
                            filter(event, player) {
                                if (player.countCards('h') == 0) return false;
                                if (event.targets && event.targets.length > 1) return false;
                                if (event.card && (get.type2(event.card) == 'trick' || (event.card.name == 'sha' && event.card.suit == 'heart'))) return true;
                                return false;
                            },
                            content() {
                                var cards = player.getCards('h');
                                player.addToExpansion(cards, 'giveAuto', player).gaintag.add('ryqianxun2');
                                player.addSkill('ryqianxun2');
                                if (get.type(trigger.card) == 'delay') trigger.cancel();
                            },
                            ai: {
                                effect(card, player, target) {
                                    var type = get.type(card);
                                    var nh = target.countCards();
                                    if (type == 'trick') {
                                        if (!get.tag(card, 'multitarget') || get.info(card).singleCard) {
                                            if (get.tag(card, 'damage')) {
                                                if (nh < 3 || target.hp <= 2) return 0.8;
                                            }
                                            return [1, nh];
                                        }
                                    }
                                    else if (type == 'delay') return [0, 0];
                                },
                            }
                        },
                        ryqianxun2: {
                            charlotte: true,
                            trigger: { global: 'phaseAfter' },
                            forced: true,
                            content() {
                                var cards = player.getExpansions('ryqianxun2');
                                if (cards.length) player.gain(cards, 'draw');
                                player.removeSkill('ryqianxun2');
                            },
                            intro: {
                                mark(dialog, storage, player) {
                                    var cards = player.getExpansions('ryqianxun2');
                                    if (player.isUnderControl(true)) dialog.addAuto(cards);
                                    else return `共有${get.cnNumber(cards.length)}张牌`;
                                },
                                markcount: 'expansion',
                            },
                        },
                        rylianying: {
                            audio: 'ext:日月同辉:2',
                            trigger: {
                                player: 'loseAfter',
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.countCards('h')) return false;
                                var evt = event.getl(player);
                                return evt && evt.player == player && evt.hs && evt.hs.length;
                            },
                            content() {
                                player.draw(trigger.getl(player).hs.length);
                                player.turnOver();
                            },
                            ai: {
                                threaten: 0.8,
                                effect: {
                                    target(card) {
                                        if (card.name == 'guohe') return 0.5;
                                    },
                                },
                                noh: true,
                                skillTagFilter(player, tag) {
                                    if (tag == 'noh') {
                                        if (player.countCards('h') != 1) return false;
                                    }
                                },
                            },
                        },
                        rycuike: {
                            audio: 'ext:日月同辉:2',
                            trigger: { global: 'useCardToTargeted' },
                            filter(event, player) {
                                return player.countCards('he') && get.color(event.card) == 'red' && ['basic', 'trick'].includes(get.type(event.card)) && event.target.isIn();
                            },
                            forced: true,
                            content() {
                                'step 0'
                                player.chooseCard('he', get.prompt2('rycuike', trigger.target)).set('ai', function (card) {
                                    var player = _status.event.player, trigger = _status.event.getTrigger();
                                    if (get.attitude(player, trigger.target) >= 0) return 0;
                                    return 8 - get.value(card);
                                });
                                'step 1'
                                if (result.cards?.length) {
                                    player.discard(result.cards);
                                    trigger.excluded.add(trigger.target);
                                    trigger.target.damage(1, 'fire');
                                }
                            },
                        },
                        rytuxi: {
                            audio: 'ext:日月同辉:2',
                            trigger: { player: 'phaseDrawBegin2' },
                            preHidden: true,
                            filter(event, player) {
                                return event.num > 0 && !event.numFixed && game.hasPlayer(function (target) {
                                    return target.countCards('h') > 0 && player != target;
                                });
                            },
                            forced: true,
                            //摸牌阶段,你可以少摸任意量牌,获得至多两名角色一共等量的手牌,若此阶段你没有从牌堆摸牌且额定摸牌量没有因〖突袭〗+1,则你令下个摸牌阶段额定摸牌量+1
                            async content(event, trigger, player) {//QQQ
                                player.removeSkill('rytuxi_yingzi');
                                while (trigger.num > 0) {
                                    if (game.hasPlayer((target) => target.countCards('h') && player != target)) {
                                        const result = await player.chooseTarget(`少摸任意的牌,获得其他角色等量张手牌(当前剩余摸牌数:${trigger.num})`, (card, player, target) => target.countCards('h') && player != target, (target) => -get.attitude(player, target)).forResult();
                                        if (result.targets?.length) {
                                            await player.gainPlayerCard(result.targets[0], 'h', true);
                                            trigger.num--;
                                            if (trigger.num <= 0) {
                                                if (!player.hasSkill('rytuxi_yingzix')) player.addSkill('rytuxi_yingzi');
                                                else player.removeSkill('rytuxi_yingzix');
                                                break;
                                            }
                                        }
                                        else break;
                                    }
                                    else break;
                                }
                            },
                            ai: { expose: 0.2 },
                            subSkill: {
                                yingzi: {
                                    mark: true,
                                    intro: { content: '下个摸牌阶段额定摸牌数+1' },
                                    charlotte: true,
                                    trigger: { player: 'phaseDrawBegin1' },
                                    filter(event, player) {
                                        return !event.numFixed;
                                    },
                                    forced: true,
                                    content() {
                                        trigger.num++;
                                        player.addSkill('rytuxi_yingzix');
                                    },
                                },
                                yingzix: { charlotte: true },
                            },
                        },
                        ryliaolai: {
                            audio: 'ext:日月同辉:2',
                            group: ['ryliaolai_guess', 'ryliaolai_2', 'ryliaolai_3'],
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return player.canUse({ name: 'sha' }, current, false);
                                }) && player.countDisabled() < 5;
                            },
                            filterTarget(card, player, target) {
                                return player.canUse({ name: 'sha' }, target, false);
                            },
                            content() {
                                player.chooseToDisable(true);
                                player.useCard({ name: 'sha' }, target, 'noai', false).card.ryliaolai = true;
                            },
                            ai: {
                                order: 1,
                                expose: 0.2,
                                result: { target: -1 },
                            },
                            subSkill: {
                                guess: {
                                    charlotte: true,
                                    trigger: { global: 'shaBegin' },
                                    filter(event, player) {
                                        if (!event.card.ryliaolai) return false;
                                        if (event.target.isUnderControl()) return false;
                                        return true;
                                    },
                                    firstDo: true,
                                    forced: true,
                                    content() {
                                        'step 0'
                                        if (event.isMine()) event.dialog = ui.create.dialog(`辽来:是否再废除一个装备栏,预言你对${get.translation(trigger.target)}的【杀】是否会命中？`);
                                        player.chooseControl('能命中', '不能命中', 'cancel2').ai = function (event) {
                                            if (trigger.player.hasSkill('wushuang')) return 0;
                                            if (trigger.player.hasSkill('liegong')) return 0;
                                            if (trigger.player.hasSkill('tieji')) return 0;
                                            if (trigger.player.hasSkill('juji')) return 0;
                                            if (trigger.player.hasSkill('retieji')) return 0;
                                            if (trigger.player.hasSkill('roulin') && trigger.target.sex == 'female') return 0;
                                            if (trigger.player.hasSkill('nvquan') && trigger.target.sex == 'male') return 0;
                                            if (trigger.target.hasSkill('yijue2')) return 0;
                                            if (trigger.target.hasSkill('shejie2')) return 0;
                                            if (trigger.target.hasSkill('shanguang2')) return 0;
                                            var equip = trigger.target.getEquip(2);
                                            if (equip && equip.name == 'bagua') return 1;
                                            return trigger.target.countCards('h') < 2 ? 0 : 1;
                                        };
                                        'step 1'
                                        if (event.dialog) event.dialog.close();
                                        if (result.control != 'cancel') {
                                            player.chooseToDisable(true);
                                            game.log(player, '进行了预言');
                                            player.storage.ryliaolai = result.control;
                                        }
                                    },
                                },
                                '2': {
                                    trigger: { global: 'shaEnd' },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return player.storage.ryliaolai ? true : false;
                                    },
                                    content() {
                                        if (player.storage.ryliaolai == '不能命中') {
                                            player.popup('预言成功');
                                            for (var i = 1; i < 6; i++) {
                                                if (player.isDisabled(i)) player.enableEquip(i);
                                            }
                                        }
                                        else player.popup('预言失败');
                                        delete player.storage.ryliaolai;
                                    },
                                },
                                '3': {
                                    trigger: { global: 'shaDamage' },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return player.storage.ryliaolai ? true : false;
                                    },
                                    content() {
                                        if (player.storage.ryliaolai == '能命中') {
                                            player.popup('预言成功');
                                            for (var i = 1; i < 6; i++) {
                                                if (player.isDisabled(i)) player.enableEquip(i);
                                            }
                                        }
                                        else player.popup('预言失败');
                                        delete player.storage.ryliaolai;
                                    },
                                },
                            },
                        },
                        ryhanzhan: {
                            group: 'ryhanzhan_damage',
                            audio: 'ext:日月同辉:2',
                            trigger: { player: ['phaseZhunbeiBefore', 'phaseJudgeBefore', 'phaseDrawBefore', 'phaseUseBefore', 'phaseJieshuBefore'] },
                            forced: true,
                            content() {
                                'step 0'
                                var list1 = ['phaseZhunbeiBefore', 'phaseJudgeBefore', 'phaseDrawBefore', 'phaseUseBefore', 'phaseJieshuBefore'];
                                var list2 = ['准备', '判定', '摸牌', '出牌', '结束'], str = undefined;
                                for (var i = 0; i < list1.length; i++) {
                                    if (list1[i] == event.triggername) str = list2[i];
                                }
                                player.chooseBool(get.prompt('ryhanzhan') + `(跳过${str}阶段)`, lib.translate.ryhanzhan_info).set('choice', ['phaseJudgeBefore', 'phaseDrawBefore'].includes(event.triggername) ? true : false);
                                'step 1'
                                if (result.bool) {
                                    trigger.cancel();
                                    var list1 = ['phaseZhunbeiBefore', 'phaseJudgeBefore', 'phaseDrawBefore', 'phaseUseBefore', 'phaseJieshuBefore'];
                                    var list2 = ['准备', '判定', '摸牌', '出牌', '结束'];
                                    for (var i = 0; i < list1.length; i++) {
                                        if (list1[i] == event.triggername) game.log(player, `跳过了${list2[i]}阶段`);
                                    }
                                    if (event.triggername == 'phaseDrawBefore') {
                                        var cards = [];
                                        var list = ['jiu', 'sha', 'juedou', 'equip'].randomGets(3);
                                        for (var name of list) {
                                            var card = get.cardPile(function (card) {
                                                return card.name == name || get.type(card) == name;
                                            });
                                            if (card) cards.push(card);
                                        }
                                        if (cards.length) player.gain(cards, 'gain2', 'log');
                                    }
                                }
                            },
                            subSkill: {
                                damage: {
                                    trigger: { source: 'damageBegin1' },
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha' && (player.getEquip(1) || player.getEquip(4));
                                    },
                                    forced: true,
                                    content() {
                                        var num = 0;
                                        if (player.getEquip(1)) num++;
                                        if (player.getEquip(4)) num++;
                                        trigger.num += num;
                                    },
                                },
                            },
                        },
                        ryluoyi: {
                            shaRelated: true,
                            audio: 'ext:日月同辉:2',
                            trigger: { player: 'useCard' },
                            check(event, player) {
                                return get.attitude(player, event.targets[0]) <= 0;
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            logTarget: 'targets',
                            content() {
                                'step 0'
                                var target = trigger.targets[0];
                                event.target = target;
                                player.addTempSkill('ryluoyi_sha');
                                event.list1 = [];
                                event.list2 = [];
                                event.num = 1;
                                'step 1'
                                if (target.countCards('h', { name: 'sha' }) - event.list1.length) {
                                    target.chooseCard('h', '裸衣:请展示一张【杀】', true, function (card) {
                                        return !event.list1.includes(card) && card.name == 'sha';
                                    });
                                }
                                else {
                                    game.log(target, '没有【杀】了');
                                    trigger.directHit.addArray(game.players);
                                    event.finish();
                                }
                                'step 2'
                                if (result.cards?.length) {
                                    event.list1.push(result.cards);
                                    target.showCards(result.cards, get.translation(target) + '第' + (event.num == 2 ? '二' : get.cnNumber(event.num)) + '轮展示的【杀】');
                                    if ((player.countCards('h', { name: 'sha' }) - event.list2.length) || (player.hasSkill('ryluoyi_sha') && (player.countCards('h') - event.list2.length))) {
                                        player.chooseCard('h', '裸衣:请展示一张【杀】', true, function (card) {
                                            return !event.list2.includes(card) && card.name == 'sha';
                                        });
                                    }
                                    else {
                                        game.log(player, '没有【杀】了');
                                        trigger.parent.targets.remove(target);
                                        trigger.parent.triggeredTargets2.remove(target);
                                        _status.event.player = target;
                                        _status.event.trigger('shaMiss');
                                        event.finish();
                                    }
                                }
                                else event.finish();
                                'step 3'
                                if (result.cards?.length) {
                                    event.list2.push(result.cards);
                                    player.showCards(result.cards, get.translation(player) + '第' + (event.num == 2 ? '二' : get.cnNumber(event.num)) + '轮展示的【杀】');
                                    event.num++;
                                    event.goto(1);
                                }
                                else event.finish();
                            },
                            subSkill: {
                                sha: {
                                    mod: {
                                        cardname(card, player) {
                                            if (card.name != 'sha') return 'sha';
                                        },
                                    },
                                },
                            },
                        },
                        rytiandu: {
                            audio: 'ext:日月同辉:2',
                            inherit: 'tiandu',
                        },
                        ryruliao: {
                            audio: 'ext:日月同辉:2',
                            trigger: { player: 'damageEnd' },
                            filter(event, player) {
                                return event.num > 0;
                            },
                            forced: true,
                            content() {
                                'step 0'
                                event.count = Math.min(trigger.num, 9);
                                'step 1'
                                event.count--;
                                player.judge();
                                player.chooseControl().set('choiceList', [
                                    '摸两张牌将其中任意张牌交给任意名角色',
                                    '移动场上一张牌',
                                    '获得一张武将牌'
                                ]).set('ai', function () {
                                    return 0;
                                });
                                'step 2'
                                switch (result.index) {
                                    case 0:
                                        player.draw(2);
                                        break;
                                    case 1:
                                        player.moveCard(true);
                                        event.goto(7);
                                        break;
                                    case 2:
                                        player.addSkill('ryruliao2');
                                        var character = _status.characterlist.randomRemove();
                                        lib.skill.ryruliao2.addCharacter(player, character);
                                        lib.skill.ryruliao2.drawCharacter(player, character);
                                        game.log(player, '获得了一张', '#g武将牌');
                                        event.goto(7);
                                        break;
                                }
                                'step 3'
                                var cards = result;
                                if (get.itemtype(cards) != 'cards') {
                                    event.goto(7);
                                    return;
                                }
                                var hs = player.getCards('h');
                                cards = cards.filter(function (card) {
                                    return hs.includes(card);
                                });
                                if (!cards.length) {
                                    event.goto(7);
                                    return;
                                }
                                event.cards = cards;
                                if (_status.connectMode) game.broadcastAll(function () { _status.noclearcountdown = true });
                                event.given_map = {};
                                'step 4'
                                player.chooseCardTarget({
                                    filterCard(card) {
                                        return _status.event.cards.includes(card) && !card.hasGaintag('olsujian_given');
                                    },
                                    cards: cards,
                                    filterTarget: lib.filter.notMe,
                                    selectCard: [1, cards.length],
                                    prompt: '入料:是否将获得的牌分配给其他角色？',
                                    ai1(card) {
                                        if (!ui.selected.cards.length) return 1;
                                        return 0;
                                    },
                                    ai2(target) {
                                        var player = _status.event.player, card = ui.selected.cards[0];
                                        var val = target.getUseValue(card);
                                        if (target.isPhaseUsing() && get.type2(card) == 'trick') val *= 3;
                                        if (val > 0) return val * get.attitude(player, target) * 2;
                                        return get.value(card, target) * get.attitude(player, target);
                                    },
                                });
                                'step 5'
                                if (result.targets?.length) {
                                    var res = result.cards, target = result.targets[0].playerid;
                                    player.addGaintag(res, 'olsujian_given');
                                    cards.removeArray(res);
                                    if (!event.given_map[target]) event.given_map[target] = [];
                                    event.given_map[target].addArray(res);
                                    if (cards.length) event.goto(4);
                                }
                                'step 6'
                                if (_status.connectMode) {
                                    game.broadcastAll(function () { delete _status.noclearcountdown });
                                    game.stopCountChoose();
                                }
                                for (var i in event.given_map) {
                                    var source = (_status.connectMode ? lib.playerOL : game.playerMap)[i];
                                    player.line(source, 'green');
                                    source.gain(event.given_map[i], player, 'giveAuto');
                                }
                                event.next.sort(function (a, b) {
                                    return lib.sort.seat(a.player, b.player);
                                });
                                'step 7'
                                if (event.count > 0) event.goto(1);
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
                                                }
                                                else {
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
                        ryruliao2: {
                            group: ['ryruliao2_remove', 'ryruliao2_disallow', 'ryruliao2_flash'],
                            init(player) {
                                player.storage.ryruliao2 = [];
                                player.storage.ryruliao2_removing = [];
                                player.storage.ryruliao2_trigger = [];
                                player.storage.ryruliao2_map = {};
                            },
                            onremove(player) {
                                delete player.storage.ryruliao2;
                                delete player.storage.ryruliao2_removing;
                                delete player.storage.ryruliao2_trigger;
                                delete player.storage.ryruliao2_map;
                            },
                            mark: true,
                            intro: {
                                mark(dialog, storage, player) {
                                    if (storage && storage.length) {
                                        dialog.addSmall([storage, 'character']);
                                        var skills = [];
                                        for (var i in player.storage.ryruliao2_map) {
                                            skills.addArray(player.storage.ryruliao2_map[i]);
                                        }
                                        dialog.addText('可用技能:' + (skills.length ? get.translation(skills) : '无'));
                                    }
                                    else {
                                        return '没有武将牌';
                                    }
                                },
                                content(storage, player) {
                                    var skills = [];
                                    for (var i in player.storage.ryruliao2_map) {
                                        skills.addArray(player.storage.ryruliao2_map[i]);
                                    }
                                    return get.translation(storage) + ';可用技能:' + (skills.length ? get.translation(skills) : '无');
                                }
                            },
                            filterSkill(name) {
                                var skills = lib.character[name][3].slice(0);
                                for (var i = 0; i < skills.length; i++) {
                                    var info = lib.skill[skills[i]];
                                    if (skills[i] == 'kunfen' || (info.unique && !info.gainable) || info.dutySkill || info.groupSkill || info.limited || info.mainSkill || info.viceSkill || info.silent || info.juexingji || info.zhuanhuanji || info.hiddenSkill || get.is.locked(skills[i])) {
                                        skills.splice(i--, 1);
                                    }
                                }
                                return skills;
                            },
                            addCharacter(player, name, show) {
                                var skills = lib.skill.ryruliao2.filterSkill(name);
                                /*
                                if(skills.length){
                                player.storage.ryruliao2_map[name]=skills;
                                for(var i=0;i<skills.length;i++){
                                player.addAdditionalSkill('ryruliao2',skills[i],true);
                                }
                                }
                                */
                                player.storage.ryruliao2.add(name);
                                _status.characterlist.remove(name);
                                if (show) lib.skill.ryruliao2.drawCharacter(player, [name]);
                            },
                            drawCharacter(player, list) {
                                game.broadcastAll(function (player, list) {
                                    var cards = [];
                                    for (var i = 0; i < list.length; i++) {
                                        var cardname = 'huashen_card_' + list[i];
                                        lib.card[cardname] = {
                                            fullimage: true,
                                            image: 'character:' + list[i]
                                        }
                                        lib.translate[cardname] = get.rawName2(list[i]);
                                        cards.push(game.createCard(cardname, '', ''));
                                    }
                                    player.$draw(cards, 'nobroadcast');
                                }, player, list);
                            },
                            removeCharacter(player, list) {
                                var skills = lib.skill.ryruliao2.filterSkill(list);
                                /*
                                if(skills.length){
                                delete player.storage.ryruliao2_map[list];
                                for(var i=0;i<skills.length;i++){
                                var remove=true;
                                for(var j in player.storage.ryruliao2_map){
                                if(j!=list&&game.expandSkills(player.storage.ryruliao2_map[j].slice(0)).includes(skills[i])){
                                remove=false;break;
                                }
                                }
                                if(remove){
                                player.removeAdditionalSkill('ryruliao2',skills[i]);
                                player.storage.ryruliao2_removing.remove(skills[i]);
                                }
                                }
                                }
                                */
                                game.log(player, '移除了武将牌牌', '#g' + get.translation(list));
                                player.storage.ryruliao2.remove(list);
                                game.broadcastAll(function (player, list) {
                                    var cards = [];
                                    var cardlist = 'huashen_card_' + list;
                                    lib.card[cardlist] = {
                                        fullimage: true,
                                        image: 'character:' + list
                                    }
                                    lib.translate[cardlist] = get.translation(list);
                                    cards.push(game.createCard(cardlist, '', ''));
                                    player.$throw(cards, 1000, 'nobroadcast');
                                }, player, list);
                                _status.characterlist.addArray(list);
                            },
                            getSkillSources(player, skill) {
                                if (player.getStockSkills().includes(skill)) return [];
                                var sources = [];
                                for (var i in player.storage.ryruliao2_map) {
                                    if (game.expandSkills(player.storage.ryruliao2_map[i].slice(0)).includes(skill)) sources.push(i);
                                }
                                return sources;
                            },
                            subSkill: {
                                triggered: {},
                                flash: {
                                    hookTrigger: {
                                        log(player, skill) {
                                            var sources = lib.skill.ryruliao2.getSkillSources(player, skill);
                                            if (sources.length) {
                                                player.flashAvatar('ryruliao2', sources.randomGet());
                                                player.storage.ryruliao2_removing.add(skill);
                                            }
                                        }
                                    },
                                    trigger: { player: ['useSkillBegin', 'useCard', 'respond'] },
                                    silent: true,
                                    filter(event, player) {
                                        return event.skill && lib.skill.ryruliao2.getSkillSources(player, event.skill).length;
                                    },
                                    content() {
                                        lib.skill.ryruliao2_flash.hookTrigger.log(player, trigger.skill);
                                    }
                                },
                                clear: {
                                    trigger: { player: 'phaseAfter' },
                                    silent: true,
                                    content() {
                                        player.storage.ryruliao2_trigger.length = 0;
                                    }
                                },
                                disallow: {
                                    hookTrigger: {
                                        block(event, player, name, skill) {
                                            for (var i = 0; i < player.storage.ryruliao2_trigger.length; i++) {
                                                var info = player.storage.ryruliao2_trigger[i];
                                                if (info[0] == event && info[1] == name &&
                                                    lib.skill.ryruliao2.getSkillSources(player, skill).length) {
                                                    return true;
                                                }
                                            }
                                            return false;
                                        }
                                    }
                                },
                                remove: {
                                    trigger: { player: ['useSkillAfter', 'useCardAfter', 'respondAfter', 'triggerAfter', 'skillAfter'] },
                                    hookTrigger: {
                                        after(event, player) {
                                            if (event._direct && !player.storage.ryruliao2_removing.includes(event.skill)) return false;
                                            if (lib.skill[event.skill].silent) return false;
                                            return lib.skill.ryruliao2.getSkillSources(player, event.skill).length;
                                        }
                                    },
                                    silent: true,
                                    filter(event, player) {
                                        return event.skill && lib.skill.ryruliao2.getSkillSources(player, event.skill).length;
                                    },
                                    content() {
                                        'step 0'
                                        if (trigger.name == 'trigger') {
                                            player.storage.ryruliao2_trigger.push([trigger._trigger, trigger.triggername]);
                                        }
                                        var sources = lib.skill.ryruliao2.getSkillSources(player, trigger.skill);
                                        if (sources.length == 1) {
                                            event.directresult = sources[0];
                                        }
                                        else {
                                            player.chooseButton(true).set('createDialog', ['移除一张「武将牌」牌', [sources, 'character']]);
                                        }
                                        'step 1'
                                        if (!event.directresult && result && result.links[0]) {
                                            event.directresult = result.links[0];
                                        }
                                        var name = event.directresult;
                                        lib.skill.ryruliao2.removeCharacter(player, name);
                                    }
                                }
                            },
                            ai: {
                                noforced: true,
                                skillTagFilter(player, tag, arg) {
                                    if (arg && player.storage.ryruliao2) {
                                        if (lib.skill.ryruliao2.getSkillSources(player, arg).length) {
                                            return true;
                                        }
                                    }
                                    return false;
                                }
                            }
                        },
                        ryruliao3: {
                            group: ['ryruliao3_remove', 'ryruliao3_disallow', 'ryruliao3_flash'],
                            init(player) {
                                player.storage.ryruliao3 = [];
                                player.storage.ryruliao3_removing = [];
                                player.storage.ryruliao3_trigger = [];
                                player.storage.ryruliao3_map = {};
                            },
                            onremove(player) {
                                delete player.storage.ryruliao3;
                                delete player.storage.ryruliao3_removing;
                                delete player.storage.ryruliao3_trigger;
                                delete player.storage.ryruliao3_map;
                            },
                            mark: true,
                            intro: {
                                mark(dialog, storage, player) {
                                    if (storage && storage.length) {
                                        dialog.addSmall([storage, 'character']);
                                        var skills = [];
                                        for (var i in player.storage.ryruliao3_map) {
                                            skills.addArray(player.storage.ryruliao3_map[i]);
                                        }
                                        dialog.addText('可用技能:' + (skills.length ? get.translation(skills) : '无'));
                                    }
                                    else {
                                        return '没有武将牌';
                                    }
                                },
                                content(storage, player) {
                                    var skills = [];
                                    for (var i in player.storage.ryruliao3_map) {
                                        skills.addArray(player.storage.ryruliao3_map[i]);
                                    }
                                    return get.translation(storage) + ';可用技能:' + (skills.length ? get.translation(skills) : '无');
                                }
                            },
                            filterSkill(name) {
                                var skills = lib.character[name][3].slice(0);
                                for (var i = 0; i < skills.length; i++) {
                                    var info = lib.skill[skills[i]];
                                    if (skills[i] == 'kunfen' || (info.unique && !info.gainable) || info.dutySkill || info.groupSkill || info.limited || info.mainSkill || info.viceSkill || info.silent || info.juexingji || info.zhuanhuanji || info.hiddenSkill || get.is.locked(skills[i])) {
                                        skills.splice(i--, 1);
                                    }
                                }
                                return skills;
                            },
                            addCharacter(player, name, show) {
                                var skills = lib.skill.ryruliao3.filterSkill(name);
                                if (skills.length) {
                                    player.storage.ryruliao3_map[name] = skills;
                                    for (var i = 0; i < skills.length; i++) {
                                        player.addAdditionalSkill('ryruliao3', skills[i], true);
                                    }
                                }
                                player.storage.ryruliao3.add(name);
                                _status.characterlist.remove(name);
                                if (show) lib.skill.ryruliao3.drawCharacter(player, [name]);
                            },
                            drawCharacter(player, list) {
                                game.broadcastAll(function (player, list) {
                                    var cards = [];
                                    for (var i = 0; i < list.length; i++) {
                                        var cardname = 'huashen_card_' + list[i];
                                        lib.card[cardname] = {
                                            fullimage: true,
                                            image: 'character:' + list[i]
                                        }
                                        lib.translate[cardname] = get.rawName2(list[i]);
                                        cards.push(game.createCard(cardname, '', ''));
                                    }
                                    player.$draw(cards, 'nobroadcast');
                                }, player, list);
                            },
                            removeCharacter(player, list) {
                                var skills = lib.skill.ryruliao3.filterSkill(list);
                                if (skills.length) {
                                    delete player.storage.ryruliao3_map[list];
                                    for (var i = 0; i < skills.length; i++) {
                                        var remove = true;
                                        for (var j in player.storage.ryruliao3_map) {
                                            if (j != list && game.expandSkills(player.storage.ryruliao3_map[j].slice(0)).includes(skills[i])) {
                                                remove = false; break;
                                            }
                                        }
                                        if (remove) {
                                            player.removeAdditionalSkill('ryruliao3', skills[i]);
                                            player.storage.ryruliao3_removing.remove(skills[i]);
                                        }
                                    }
                                }
                                game.log(player, '移除了武将牌牌', '#g' + get.translation(list));
                                player.storage.ryruliao3.remove(list);
                                game.broadcastAll(function (player, list) {
                                    var cards = [];
                                    var cardlist = 'huashen_card_' + list;
                                    lib.card[cardlist] = {
                                        fullimage: true,
                                        image: 'character:' + list
                                    }
                                    lib.translate[cardlist] = get.translation(list);
                                    cards.push(game.createCard(cardlist, '', ''));
                                    player.$throw(cards, 1000, 'nobroadcast');
                                }, player, list);
                                _status.characterlist.addArray(list);
                            },
                            getSkillSources(player, skill) {
                                if (player.getStockSkills().includes(skill)) return [];
                                var sources = [];
                                for (var i in player.storage.ryruliao3_map) {
                                    if (game.expandSkills(player.storage.ryruliao3_map[i].slice(0)).includes(skill)) sources.push(i);
                                }
                                return sources;
                            },
                            subSkill: {
                                triggered: {},
                                flash: {
                                    hookTrigger: {
                                        log(player, skill) {
                                            var sources = lib.skill.ryruliao3.getSkillSources(player, skill);
                                            if (sources.length) {
                                                player.flashAvatar('ryruliao3', sources.randomGet());
                                                player.storage.ryruliao3_removing.add(skill);
                                            }
                                        }
                                    },
                                    trigger: { player: ['useSkillBegin', 'useCard', 'respond'] },
                                    silent: true,
                                    filter(event, player) {
                                        return event.skill && lib.skill.ryruliao3.getSkillSources(player, event.skill).length;
                                    },
                                    content() {
                                        lib.skill.ryruliao3_flash.hookTrigger.log(player, trigger.skill);
                                    }
                                },
                                clear: {
                                    trigger: { player: 'phaseAfter' },
                                    silent: true,
                                    content() {
                                        player.storage.ryruliao3_trigger.length = 0;
                                    }
                                },
                                disallow: {
                                    hookTrigger: {
                                        block(event, player, name, skill) {
                                            for (var i = 0; i < player.storage.ryruliao3_trigger.length; i++) {
                                                var info = player.storage.ryruliao3_trigger[i];
                                                if (info[0] == event && info[1] == name &&
                                                    lib.skill.ryruliao3.getSkillSources(player, skill).length) {
                                                    return true;
                                                }
                                            }
                                            return false;
                                        }
                                    }
                                },
                                remove: {
                                    trigger: { player: ['useSkillAfter', 'useCardAfter', 'respondAfter', 'triggerAfter', 'skillAfter'] },
                                    hookTrigger: {
                                        after(event, player) {
                                            if (event._direct && !player.storage.ryruliao3_removing.includes(event.skill)) return false;
                                            if (lib.skill[event.skill].silent) return false;
                                            return lib.skill.ryruliao3.getSkillSources(player, event.skill).length;
                                        }
                                    },
                                    silent: true,
                                    filter(event, player) {
                                        return event.skill && lib.skill.ryruliao3.getSkillSources(player, event.skill).length;
                                    },
                                    content() {
                                        'step 0'
                                        if (trigger.name == 'trigger') {
                                            player.storage.ryruliao3_trigger.push([trigger._trigger, trigger.triggername]);
                                        }
                                        var sources = lib.skill.ryruliao3.getSkillSources(player, trigger.skill);
                                        if (sources.length == 1) {
                                            event.directresult = sources[0];
                                        }
                                        else {
                                            player.chooseButton(true).set('createDialog', ['移除一张「武将牌」牌', [sources, 'character']]);
                                        }
                                        'step 1'
                                        if (!event.directresult && result && result.links[0]) {
                                            event.directresult = result.links[0];
                                        }
                                        var name = event.directresult;
                                        lib.skill.ryruliao3.removeCharacter(player, name);
                                    }
                                }
                            },
                            ai: {
                                noforced: true,
                                skillTagFilter(player, tag, arg) {
                                    if (arg && player.storage.ryruliao3) {
                                        if (lib.skill.ryruliao3.getSkillSources(player, arg).length) {
                                            return true;
                                        }
                                    }
                                    return false;
                                }
                            }
                        },
                        ryyiji: {
                            audio: 'ext:日月同辉:2',
                            trigger: { player: 'die' },
                            forceDie: true,
                            forced: true,
                            content() {
                                'step 0'
                                player.chooseTarget(get.prompt2('ryyiji'), lib.filter.notMe).set('ai', function (target) {
                                    return get.attitude(_status.event.player, target);
                                });
                                'step 1'
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    target.addSkill('ryruliao3');
                                    var storage = player.storage.ryruliao2;
                                    for (var i = 0; i < storage.length; i++) {
                                        lib.skill.ryruliao3.addCharacter(target, storage[i]);
                                    }
                                    lib.skill.ryruliao3.drawCharacter(target, storage.slice(0));
                                    game.log(target, '获得了', player, '的', '#g武将牌');
                                }
                            },
                        },
                        ryjushou: {
                            audio: 'ext:日月同辉:2',
                            group: 'ryjushou_draw',
                            trigger: { player: 'phaseDiscardBefore' },
                            content() {
                                trigger.cancel();
                                player.draw(2);
                                player.turnOver();
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (card.name == 'guiyoujie') return [0, 1];
                                    },
                                },
                            },
                            subSkill: {
                                draw: {
                                    trigger: { player: ['turnOverEnd', 'linkEnd', 'showCharacterEnd', 'hideCharacterEnd', 'removeCharacterEnd'] },
                                    forced: true,
                                    content() {
                                        player.draw();
                                        player.chooseToUse((c) => lib.filter.filterCard(c, player, event.getParent(2)) && (get.type(c) == 'equip' || get.type(c) == 'delay'), '是否使用一张装备牌或延时锦囊牌？');
                                    },
                                },
                            },
                        },
                        rykuiwei: {
                            audio: 'ext:日月同辉:2',
                            group: 'rykuiwei_equip',
                            enable: 'chooseToUse',
                            filterCard(card) {
                                if (!ui.selected.cards.length) return get.position(card) == 'e';
                                return get.position(card) == 'h' && get.type(card) == 'basic';
                            },
                            selectCard: 2,
                            viewAsFilter(player) {
                                return player.countCards('h', { type: 'basic' }) > 0 && player.countCards('e') > 0;
                            },
                            viewAs: {
                                name: 'wuxie',
                                rykuiwei: true,
                            },
                            position: 'he',
                            prompt: '将装备区中的一张牌和手牌中一张基本牌当做【无懈可击】使用',
                            check(card) {
                                var tri = _status.event.getTrigger();
                                if (tri && tri.card && tri.card.name == 'chiling') return -1;
                                return 8 - get.value(card)
                            },
                            subSkill: {
                                equip: {
                                    charlotte: true,
                                    trigger: { player: 'useCardAfter' },
                                    filter(event, player) {
                                        return event.card && event.card.rykuiwei;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0'
                                        var type = get.subtype(trigger.cards[0]);
                                        event.type = type;
                                        switch (type) {
                                            case 'equip1':
                                                var card = trigger.cards[0], info = get.info(card);
                                                if (info && info.distance && info.distance.attackFrom) num = 1 - info.distance.attackFrom;
                                                else num = 1;
                                                if (game.hasPlayer(function (current) {
                                                    return current.countCards('he');
                                                })) {
                                                    player.chooseTarget(`是否弃置至多${get.cnNumber(num)}名角色的各一张牌？`, [1, num], function (card, player, target) {
                                                        return target.countCards('he');
                                                    }).set('ai', function (target) {
                                                        var player = _status.event.player;
                                                        return -get.attitude(player, target);
                                                    });
                                                }
                                                else event.finish();
                                                break;
                                            case 'equip2':
                                                if (game.hasPlayer(function (current) {
                                                    return current != player && current.isDamaged();
                                                })) {
                                                    player.chooseTarget('是否令一名其他角色的回复一点体力？', function (card, player, target) {
                                                        return target != player && target.isDamaged();
                                                    }).set('ai', function (target) {
                                                        var player = _status.event.player;
                                                        return get.recoverEffect(target, target, player);
                                                    });
                                                }
                                                else event.finish();
                                                break;
                                            case 'equip3': case 'equip4': case 'equip6':
                                                player.chooseTarget('是否令一名角色摸一张牌并可以使用一张【杀】？').set('ai', function (target) {
                                                    var player = _status.event.player;
                                                    return get.attitude(player, target);
                                                });
                                                break;
                                            case 'equip5':
                                                if (game.hasPlayer(function (current) {
                                                    return current != player && (current.isLinked() || current.isTurnedOver());
                                                })) {
                                                    player.chooseTarget('是否令一名其他角色重置武将牌状态？', function (card, player, target) {
                                                        return target != player && (target.isLinked() || target.isTurnedOver());
                                                    }).set('ai', function (target) {
                                                        var player = _status.event.player;
                                                        return get.attitude(player, target);
                                                    });
                                                }
                                                else event.finish();
                                                break;
                                        }
                                        'step 1'
                                        if (result.targets?.length) {
                                            result.targets.sortBySeat();
                                            if (event.type != 'equip1') {
                                                var target = result.targets[0];
                                            }
                                            switch (event.type) {
                                                case 'equip1':
                                                    for (var target of result.targets) player.discardPlayerCard(target, 'he', true);
                                                    break;
                                                case 'equip2':
                                                    target.recover();
                                                    break;
                                                case 'equip3': case 'equip4': case 'equip6':
                                                    target.draw();
                                                    target.chooseToUse('是否使用一张【杀】？', { name: 'sha' });
                                                    break;
                                                case 'equip5':
                                                    if (target.isTurnedOver()) target.turnOver();
                                                    if (target.isLinked()) target.link();
                                                    break;
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        rylanggu: {
                            marktext: '忍',
                            intro: { content: 'mark', name: '狼顾', name2: '忍' },
                            audio: 'ext:日月同辉:2',
                            trigger: {
                                player: 'damageEnd',
                                source: 'damageSource'
                            },
                            //当你受到1点伤害/造成1点伤害后,你可以进行一次判定,若判定结果为黑色,你获得伤害来源/目标的一张牌;为红色,你获得一个「忍」标记️
                            async content(event, trigger, player) {//QQQ
                                var count = trigger.num;
                                var target = (player == trigger.player ? trigger.source : trigger.player);
                                while (count-- > 0) {
                                    const result = await player.judge().forResult();
                                    if (result.color == 'black' && target) {
                                        await player.gainPlayerCard(target, 'he', true);
                                    }
                                    else {
                                        player.addMark('rylanggu', 1);
                                    }
                                }
                            },
                        },
                        ryzhuizun: {
                            derivation: ['rybaiyin', 'ryzhibian', 'ryrende', 'ryzhiheng', 'rejizhi', 'rewansha', 'lianpo'],
                            juexingji: true,
                            audio: 'ext:日月同辉:2',
                            trigger: { player: 'phaseZhunbeiBegin' },
                            filter(event, player) {
                                return player.countMark('rylanggu') >= 3;
                            },
                            forced: true,
                            content() {
                                player.awakenSkill('ryzhuizun');
                                player.loseMaxHp();
                                player.chooseDrawRecover(2, true);
                                player.addSkillLog('rybaiyin');
                            },
                        },
                        rybaiyin: {
                            group: ['rybaiyin_zhibian', 'rybaiyin_rende', 'rybaiyin_zhiheng', 'rybaiyin_jizhi', 'rybaiyin_lianpo', 'rybaiyin_tongye', 'rybaiyin_guess'],
                            filter(event, player) {
                                return player.countMark('rylanggu') && !player.hasSkill('rewansha');
                            },
                            content() {
                                player.removeMark('rylanggu');
                                player.addTempSkill('rewansha');
                            },
                            ai: {
                                order: 7,
                                result: {
                                    player(player, target) {
                                        if (game.hasPlayer(function (current) {
                                            return get.attitude(player, target) < 0 && target.hp < 2;
                                        })) return 1;
                                        return 0;
                                    },
                                }
                            },
                            subSkill: {
                                rende: {
                                    group: 'rybaiyin_qiuxian',
                                    enable: 'phaseUse',
                                    filterCard: true,
                                    selectCard: [1, Infinity],
                                    discard: false,
                                    lose: false,
                                    delay: false,
                                    filterTarget: lib.filter.notMe,
                                    filter(event, player) {
                                        return player.countMark('rylanggu') && player.countCards('h');
                                    },
                                    check(card) {
                                        if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') return 0;
                                        if (!ui.selected.cards.length && card.name == 'du') return 20;
                                        var player = get.owner(card);
                                        if (ui.selected.cards.length >= Math.max(2, player.countCards('h') - player.hp)) return 0;
                                        if (player.hp == player.maxHp || player.storage.ryrende < 0 || player.countCards('h') <= 1) {
                                            var players = game.filterPlayer();
                                            for (var i of players) {
                                                if (i.hasSkill('haoshi') &&
                                                    !i.isTurnedOver() &&
                                                    !i.hasJudge('lebu') &&
                                                    get.attitude(player, i) >= 3 &&
                                                    get.attitude(i, player) >= 3) {
                                                    return 11 - get.value(card);
                                                }
                                            }
                                            if (player.countCards('h') > player.hp) return 10 - get.value(card);
                                            if (player.countCards('h') > 2) return 6 - get.value(card);
                                            return -1;
                                        }
                                        return 10 - get.value(card);
                                    },
                                    prompt: '弃置一个「忍」并将任意张手牌交给其他角色',
                                    content() {
                                        'step 0'
                                        event.hpnum = player.hp;
                                        player.removeMark('rylanggu', 1);
                                        var evt = _status.event.getParent('phaseUse');
                                        if (evt && evt.name == 'phaseUse' && !evt.ryrende) {
                                            var next = game.createEvent('ryrende_clear');
                                            _status.event.next.remove(next);
                                            evt.after.push(next);
                                            evt.ryrende = true;
                                            next.player = player;
                                            next.setContent(function () {
                                                delete player.storage.ryrende;
                                                delete player.storage.ryrendex;
                                            });
                                        }
                                        target.gain(cards, player, 'giveAuto');
                                        if (typeof player.storage.ryrende != 'number') player.storage.ryrende = 0;
                                        if (typeof player.storage.ryrendex != 'number') player.storage.ryrendex = 0;
                                        if (player.storage.ryrende >= 0) {
                                            player.storage.ryrende += cards.length;
                                            if (player.storage.ryrende >= 2 * (1 + player.storage.ryrendex)) {
                                                player.storage.ryrendex++;
                                                var list = [];
                                                if (lib.filter.cardUsable({ name: 'sha' }, player, event.getParent('chooseToUse')) && game.hasPlayer(function (current) {
                                                    return player.canUse('sha', current);
                                                })) list.push(['基本', '', 'sha']);
                                                for (var i of lib.inpile_nature) {
                                                    if (lib.filter.cardUsable({ name: 'sha', nature: i }, player, event.getParent('chooseToUse')) && game.hasPlayer(function (current) {
                                                        return player.canUse({ name: 'sha', nature: i }, current);
                                                    })) list.push(['基本', '', 'sha', i]);
                                                }
                                                if (lib.filter.cardUsable({ name: 'tao' }, player, event.getParent('chooseToUse')) && game.hasPlayer(function (current) {
                                                    return player.canUse('tao', current);
                                                })) list.push(['基本', '', 'tao']);
                                                if (lib.filter.cardUsable({ name: 'jiu' }, player, event.getParent('chooseToUse')) && game.hasPlayer(function (current) {
                                                    return player.canUse('jiu', current);
                                                })) list.push(['基本', '', 'jiu']);
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
                                                            if (game.hasPlayer(function (current) {
                                                                return player.canUse(card, current) && get.effect(current, card, player, player) > 0
                                                            })) {
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
                                                }
                                                else event.finish();
                                            }
                                            else event.finish();
                                        }
                                        else event.finish();
                                        'step 1'
                                        if (result.links?.length) {
                                            var card = { name: result.links[0][2], nature: result.links[0][3] };
                                            player.chooseUseTarget(card, true);
                                        }
                                        'step 2'
                                        if (player.hp > event.hpnum) player.addMark('rybaiyin_qiuxian', 1);
                                        'step 3'
                                        var num = player.countMark('rybaiyin_qiuxian');
                                        player.removeMark('rybaiyin_qiuxian', num);
                                        player.addMark('rylanggu', num);
                                    },
                                    ai: {
                                        fireAttack: true,
                                        order(skill, player) {
                                            if (player.hp < player.maxHp && player.storage.ryrende < 2 && player.countCards('h') > 1) return 10;
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
                                                if (player.hp == player.maxHp || player.storage.ryrende < 0 || player.countCards('h') <= 1) {
                                                    if (nh >= np - 1 && np <= player.hp && !target.hasSkill('haoshi')) return 0;
                                                }
                                                return Math.max(1, 5 - nh);
                                            },
                                        },
                                        effect: {
                                            target(card, player, target) {
                                                if (player == target && get.type(card) == 'equip') {
                                                    if (player.countCards('e', { subtype: get.subtype(card) })) {
                                                        if (game.hasPlayer(function (current) {
                                                            return current != player && get.attitude(player, current) > 0;
                                                        })) return 0;
                                                    }
                                                }
                                            },
                                        },
                                        threaten: 0.8,
                                    },
                                },
                                qiuxian: {
                                    marktext: '贤',
                                    intro: { content: 'mark', name: '贤' },
                                },
                                zhiheng: {
                                    init(player) {
                                        if (!player.storage.rybaiyin_tongye) player.addMark('rybaiyin_tongye', 1, false);
                                    },
                                    marktext: '业',
                                    intro: { content: 'mark', name: '业' },
                                    enable: 'phaseUse',
                                    usable: 1,
                                    position: 'he',
                                    filterCard: lib.filter.cardDiscardable,
                                    discard: false,
                                    lose: false,
                                    delay: false,
                                    selectCard: [1, Infinity],
                                    prompt: '弃置一个「忍」并弃置任意张牌并摸等量的牌,若以此法弃置了所有的手牌,则获得一个「业」标记',
                                    check(card) {
                                        var player = _status.event.player;
                                        if (get.position(card) == 'h' && !player.countCards('h', function (card) {
                                            return get.value(card) >= 8;
                                        })) return 8 - get.value(card);
                                        return 6 - get.value(card);
                                    },
                                    filter(event, player) {
                                        return player.countMark('rylanggu') && player.countCards('he');
                                    },
                                    content() {
                                        'step 0'
                                        player.removeMark('rylanggu', 1);
                                        player.discard(cards);
                                        event.num = 1;
                                        var hs = player.getCards('h');
                                        if (!hs.length) event.num = 0;
                                        for (var i = 0; i < hs.length; i++) {
                                            if (!cards.includes(hs[i])) {
                                                event.num = 0; break;
                                            }
                                        }
                                        'step 1'
                                        player.draw(event.num + cards.length);
                                        if (event.num > 0) player.addMark('rybaiyin_zhiheng', 1);
                                    },
                                    ai: {
                                        order: 1,
                                        result: {
                                            player(player) {
                                                var num = 0;
                                                var cards = player.getCards('he');
                                                if (Array.isArray(cards)) for (var i of cards) {
                                                    if (get.value(i) < 6) {
                                                        num++;
                                                    }
                                                }
                                                if (cards.length > 2) return 1;
                                                if (cards.length == 2);
                                                return 0;
                                            }
                                        },
                                    },
                                },
                                tongye: {
                                    enable: 'phaseUse',
                                    usable: 1,
                                    filter(event, player) {
                                        return player.countMark('rylanggu') && player.countMark('rybaiyin_zhiheng');
                                    },
                                    prompt: '弃置一个「忍」并选择摸牌或猜测装备牌数变化趋势',
                                    content() {
                                        'step 0'
                                        player.removeMark('rylanggu', 1);
                                        player.removeMark('rybaiyin_zhiheng', 1);
                                        player.addMark('rylanggu', 1);
                                        player.chooseControl().set('choiceList', [
                                            '摸' + get.cnNumber(player.countMark('rybaiyin_tongye')) + '张牌',
                                            '猜测场上装备牌数的变化趋势'
                                        ]).set('ai', function () {
                                            if (player.countMark('rybaiyin_tongye') < 3) return 1;
                                            return 0;
                                        });
                                        'step 1'
                                        if (result.index == 0) {
                                            player.draw(player.countMark('rybaiyin_tongye'));
                                            event.finish();
                                        }
                                        else {
                                            player.removeMark('rybaiyinx', player.countMark('rybaiyinx'), false);
                                            player.addMark('rybaiyinx', game.countPlayer(function (current) {
                                                return current.countCards('e');
                                            }), false);
                                            player.chooseControl('变化', '不变').set('prompt', '制衡:请猜测场上的装备数的变化趋势').set('ai', function () {
                                                if (game.countPlayer(function (current) {
                                                    return current.countCards('e');
                                                }) <= game.players.length) return '变化';
                                                return '不变';
                                            });
                                        }
                                        'step 2'
                                        if (result.control) player.addSkill('rybaiyin_' + (result.control == '变化' ? 0 : 1));
                                    },
                                },
                                '0': {
                                    charlotte: true,
                                    mark: true,
                                    intro: {
                                        content(content, player) {
                                            if (player.isUnderControl(true)) return '变化';
                                            return get.translation(player) + '压的什么呢？';
                                        },
                                    },
                                },
                                '1': {
                                    charlotte: true,
                                    mark: true,
                                    intro: {
                                        content(content, player) {
                                            if (player.isUnderControl(true)) return '不变';
                                            return get.translation(player) + '压的什么呢？';
                                        },
                                    },
                                },
                                guess: {
                                    charlotte: true,
                                    trigger: { player: 'phaseBegin' },
                                    filter(event, player) {
                                        return player.hasSkill('rybaiyin_0') || player.hasSkill('rybaiyin_1');
                                    },
                                    forced: true,
                                    content() {
                                        var bool = false, boolx = false;
                                        if (player.countMark('rybaiyinx') == game.countPlayer(function (current) {
                                            return current.countCards('e');
                                        })) boolx = true;
                                        if (!boolx && player.hasSkill('rybaiyin_0')) bool = true;
                                        if (boolx && player.hasSkill('rybaiyin_1')) bool = true;
                                        if (bool) {
                                            player.popup('压对!', 'wood');
                                            game.log(player, '预测', '#g成功');
                                            player.addMark('rybaiyin_tongye', 1, false);
                                        }
                                        else {
                                            player.popup('压错!', 'fire');
                                            game.log(player, '预测', '#y失败');
                                        }
                                        player.removeSkill('rybaiyin_0');
                                        player.removeSkill('rybaiyin_1');
                                    },
                                },
                                jizhi: {
                                    mod: {
                                        maxHandcard(player, num) {
                                            return num + player.storage.rybaiyin_jizhi;
                                        },
                                    },
                                    init(player) {
                                        player.storage.rybaiyin_jizhi = 0;
                                    },
                                    intro: { content: '本回合手牌上限+#' },
                                    group: 'rybaiyin_clear',
                                    trigger: { player: 'useCard' },
                                    filter(event, player) {
                                        return player.countMark('rylanggu') && get.type(event.card, 'trick') == 'trick';
                                    },
                                    prompt: '弃置一个「忍」并摸一张牌',
                                    content() {
                                        'step 0'
                                        player.removeMark('rylanggu', 1);
                                        player.draw();
                                        'step 1'
                                        event.card = result.cards[0];
                                        if (get.type(event.card) == 'basic') {
                                            player.chooseBool(`是否弃置${get.translation(event.card)}并令本回合手牌上限+1？`).set('ai', function (evt, player) {
                                                return _status.currentPhase == player && player.needsToDiscard(-3) && _status.event.value < 6;
                                            }).set('value', get.value(event.card, player));
                                        }
                                        'step 2'
                                        if (result.bool) {
                                            player.discard(event.card);
                                            player.storage.rybaiyin_jizhi++;
                                            if (_status.currentPhase == player) {
                                                player.markSkill('rybaiyin_jizhi');
                                            }
                                        }
                                    },
                                    ai: { noautowuxie: true },
                                },
                                clear: {
                                    trigger: { global: 'phaseAfter' },
                                    silent: true,
                                    content() {
                                        var num = player.storage.rybaiyin_jizhi;
                                        player.storage.rybaiyin_jizhi = 0;
                                        player.unmarkSkill('rybaiyin_jizhi');
                                        player.addMark('rylanggu', num);
                                    },
                                },
                                lianpo: {
                                    trigger: { global: 'phaseAfter' },
                                    filter(event, player) {
                                        return player.countMark('rylanggu') && player.getStat('kill') > 0;
                                    },
                                    prompt: '弃置一个「忍」并进行一个额外回合',
                                    content() {
                                        player.removeMark('rylanggu', 1);
                                        player.phase('nodelay');
                                    },
                                },
                                zhibian: {
                                    enable: 'phaseUse',
                                    usable: 1,
                                    filter(event, player) {
                                        return player.countMark('rylanggu') && player.maxHp > 0 && player.countCards('he', function (card) {
                                            return get.type(card) != 'basic';
                                        }) > 0;
                                    },
                                    filterCard(card) {
                                        return get.type(card) != 'basic';
                                    },
                                    position: 'he',
                                    filterTarget: true,
                                    selectTarget() {
                                        return [1, Math.max(1, game.countPlayer(function (current) {
                                            return current.isDamaged();
                                        }))];
                                    },
                                    check(card) {
                                        return 8 - get.value(card);
                                    },
                                    prompt: '弃置一个「忍」并选择任意名已受伤的角色数的角色发动〖执鞭〗',
                                    content() {
                                        'step 0'
                                        target.chooseToDiscard('he', true);
                                        player.line(target);
                                        target.damage();
                                        target.recover();
                                        'step 1'
                                        var num = player.countMark('rybaiyin_zhibian');
                                        player.removeMark('rybaiyin_zhibian', num, false);
                                        player.addMark('rylanggu', num);
                                    },
                                    ai: {
                                        order: 8,
                                        result: {
                                            player: 1,
                                            target(player, target) {
                                                return get.attitude(player, target) + 20;
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        ryjianxiong: {
                            init(player) {
                                if (!player.countMark('ryjianxiong')) player.addMark('ryjianxiong', 1, false);
                            },
                            intro: { content: '【奸雄】等级:Lv#' },
                            mod: {
                                targetInRange(card) {
                                    if (_status.event.skill == 'ryjianxiong_backup' && _status.event.player.countMark('ryjianxiong') > 1) return true;
                                },
                            },
                            group: ['ryjianxiong_mark', 'ryjianxiong_clear', 'ryjianxiong_damage', 'ryjianxiong_phase'],
                            audio: 'ext:日月同辉:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.storage.ryjianxiong_card && (player.countCards('h') || (player.countCards('hes') && player.countMark('ryjianxiong') > 2));
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    var card = player.storage.ryjianxiong_card;
                                    if (get.type(card) == 'basic') list.push(['基本', '', card]);
                                    else if (get.type(card) == 'trick') list.push(['锦囊', '', card]);
                                    return ui.create.dialog('奸雄', [list, 'vcard']);
                                },
                                filter(button, player) {
                                    return lib.filter.filterCard({ name: button.link[2] }, player, _status.event.parent);
                                },
                                check(button) {
                                    return _status.event.player.getUseValue({ name: button.link[2] });
                                },
                                backup(links, player) {
                                    return {
                                        filterCard(card) {
                                            var player = _status.event.player;
                                            if (player.countMark('ryjianxiong') <= 2) return get.position(card) == 'h';
                                            return true;
                                        },
                                        check(card) {
                                            return 8 - get.value(card);
                                        },
                                        popname: true,
                                        position: 'hes',
                                        viewAs: {
                                            name: links[0][2],
                                            ryjianxiong_damage: true,
                                        },
                                        precontent() {
                                        },
                                    }
                                },
                                prompt(links, player) {
                                    return '将一张' + (player.countMark('ryjianxiong') > 2 ? '' : '手') + `牌当做${get.translation(player.storage.ryjianxiong_card)}使用`;
                                },
                            },
                            ai: {
                                order: 1,
                                result: { player: 1 },
                            },
                            subSkill: {
                                phase: {
                                    trigger: { global: 'phaseEnd' },
                                    filter(event, player) {
                                        return player.storage.ryjianxiong_card && event.player != player && (player.countCards('h') || (player.countCards('hes') && player.countMark('ryjianxiong') > 2));
                                    },
                                    forced: true,
                                    content() {
                                        var namex = player.storage.ryjianxiong_card;
                                        var card = { name: namex, ryjianxiong_damage: true };
                                        game.broadcastAll(function (card) {
                                            lib.skill.ryjianxiong_backupx.viewAs = card;
                                        }, card);
                                        var next = player.chooseToUse();
                                        next.set('openskilldialog', '是否发动【奸雄】,将一张' + (player.countMark('ryjianxiong') > 2 ? '' : '手') + `牌当做${get.translation(card)}使用？`);
                                        next.set('norestore', true);
                                        next.set('_backupevent', 'ryjianxiong_backupx');
                                        next.set('custom', {
                                            add: {},
                                            replace: { window() { } }
                                        });
                                        next.backup('ryjianxiong_backupx');
                                    },
                                },
                                backupx: {
                                    filterCard(card) {
                                        var player = _status.event.player;
                                        if (player.countMark('ryjianxiong') <= 2) return get.position(card) == 'h';
                                        return true;
                                    },
                                    filterTarget(card, player, target) {
                                        if (player.countMark('ryjianxiong') > 1) return lib.filter.targetEnabled.apply(this, arguments);
                                        return lib.filter.filterTarget.apply(this, arguments);
                                    },
                                    check(card) {
                                        return 8 - get.value(card);
                                    },
                                    popname: true,
                                    position: 'hes',
                                    log: false,
                                    precontent() {
                                    },
                                },
                                mark: {
                                    charlotte: true,
                                    trigger: { global: 'useCard' },
                                    filter(event, player) {
                                        return ['basic', 'trick'].includes(get.type(event.card)) && event.player == _status.currentPhase;
                                    },
                                    _priority: 50,
                                    forced: true,
                                    content() {
                                        player.storage.ryjianxiong_card = trigger.card.name;
                                    },
                                },
                                clear: {
                                    charlotte: true,
                                    trigger: { global: 'phaseAfter' },
                                    _priority: -50,
                                    forced: true,
                                    content() {
                                        player.storage.ryjianxiong_card = [];
                                        delete player.storage.ryjianxiong_card;
                                    },
                                },
                                damage: {
                                    charlotte: true,
                                    trigger: { player: 'useCardAfter' },
                                    filter(event, player) {
                                        return player.countMark('ryjianxiong') > 3 && event.cards.filterInD().length && player.getHistory('sourceDamage', function (evt) {
                                            return evt.card == event.card;
                                        }).length && event.card.ryjianxiong_damage;
                                    },
                                    forced: true,
                                    content() {
                                        player.draw();
                                        if (player.countMark('ryjianxiong') >= 5) player.recover();
                                    },
                                },
                            },
                        },
                        ryzhibian: {
                            audio: 'ext:日月同辉:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.maxHp > 0 && player.countCards('he', function (card) {
                                    return get.type(card) != 'basic';
                                }) > 0;
                            },
                            filterCard(card) {
                                return get.type(card) != 'basic';
                            },
                            position: 'he',
                            filterTarget: true,
                            selectTarget() {
                                return [1, Math.max(1, game.countPlayer(function (current) {
                                    return current.isDamaged();
                                }))];
                            },
                            check(card) {
                                return 8 - get.value(card);
                            },
                            content() {
                                'step 0'
                                var str = '升级〖奸雄〗';
                                if (player.countMark('ryjianxiong') >= 5) str = '摸一张牌';
                                if (!target.countCards('he')) result.index = 1;
                                else target.chooseControl().set('choiceList', [
                                    '弃置一张牌,受到1点伤害并回复1点体力',
                                    '令' + get.translation(player) + str]).set('ai', function () {
                                        if (get.attitude(target, player) < 0) return 0;
                                        return 1;
                                    });
                                'step 1'
                                if (result.index == 0) {
                                    target.chooseToDiscard('he', true);
                                    player.line(target);
                                    target.damage();
                                    target.recover();
                                }
                                else {
                                    target.line(player);
                                    if (player.countMark('ryjianxiong') >= 5) player.draw();
                                    else {
                                        player.addMark('ryjianxiong', 1, false);
                                        game.log(player, '的', '#g【奸雄】', '已升至', player.countMark('ryjianxiong'), '级');
                                    }
                                }
                            },
                            ai: {
                                order: 8,
                                result: {
                                    player: 1,
                                    target(player, target) {
                                        return get.attitude(player, target) + 20;
                                    },
                                },
                            },
                        },
                        ryweiwu: {
                            group: 'ryweiwu_change',
                            zhuSkill: true,
                            audio: 'ext:日月同辉:2',
                            trigger: { global: 'damageEnd' },
                            filter(event, player) {
                                if (!player.hasZhuSkill('ryweiwu') || event.player.group != 'wei' || event.player == player) return false;
                                return true;
                            },
                            forced: true,
                            content() {
                                'step 0'
                                trigger.player.addExpose(0.1);
                                trigger.player.chooseBool(get.prompt('ryweiwu'), `进行一次判定,若结果为♠️️,你可以令${get.translation(player)}获得之`).set('choice', get.attitude(trigger.player, player) > 0);
                                'step 1'
                                if (result.bool) {
                                    trigger.player.judge(function (card) {
                                        if (get.color(card) == 'black') return 2;
                                        return -2;
                                    }).judge2 = function (result) {
                                        return result.bool ? true : false;
                                    };
                                }
                                else event.finish();
                                'step 2'
                                if (result.color == 'black' && get.position(result.card) == 'd') {
                                    var card = result.card;
                                    event.card = card;
                                    trigger.player.chooseBool(`是否令${get.translation(player)}获得${get.translation(card)}？`);
                                }
                                else event.finish();
                                'step 3'
                                if (result.bool) player.gain(card, 'gain2', 'log');
                            },
                            subSkill: {
                                change: {
                                    audio: 'ryweiwu',
                                    enable: 'phaseUse',
                                    filterTarget: lib.filter.notMe,
                                    limited: true,
                                    filter(event, player) {
                                        return !player.storage.ryweiwu_change;
                                    },
                                    prompt: '令一名其他角色修改势力为「魏」,回复1点体力并摸一张牌',
                                    content() {
                                        player.storage.ryweiwu_change = true;
                                        target.changeGroup('wei');
                                        target.recover();
                                        target.draw();
                                    },
                                    ai: {
                                        order: 8,
                                        result: {
                                            target(player, target) {
                                                var num = 1;
                                                if (target.group != 'wei') num++;
                                                return get.attitude(player, target) * num;
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        ryjianyong: {
                            group: 'ryjianyong_buff',
                            audio: 'ext:日月同辉:2',
                            trigger: { global: 'useCardToPlayer' },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && !event.card.ryjianyong;
                            },
                            forced: true,
                            content() {
                                'step 0'
                                event.boolx = true;
                                trigger.card.ryjianyong = true;
                                player.chooseTarget(get.prompt2('ryjianyong'), function (card, player, target) {
                                    return player.canCompare(target);
                                }).set('ai', function (target) {
                                    if (_status.event.goon) return 0;
                                    return -get.attitude(player, target);
                                }).set('goon', get.attitude(player, trigger.player) > 0);
                                'step 1'
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    player.chooseToCompare(target);
                                }
                                else event.finish();
                                'step 2'
                                if (!result.tie) {
                                    if (result.bool) event.list = [target, trigger.player];
                                    else event.list = [player, trigger.player];
                                }
                                else event.boolx = false;
                                var cards = [result.player, result.target].filterInD('d'), cardx = [];
                                for (var card of cards) {
                                    if (card.suit == 'heart') cardx.push(card);
                                }
                                if (cardx.length) {
                                    player.chooseButton(['是否将一张♥️️牌置于牌堆顶？', cardx]).set('ai', function (button) {
                                        if (get.color(button.link) == 'black') return 1;
                                        return 0;
                                    });
                                }
                                else event.goto(4);
                                'step 3'
                                if (result.links?.length) {
                                    var card = result.links[0];
                                    card.fix();
                                    ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
                                    game.updateRoundNumber();
                                    game.log(player, '将', card, '置于牌堆顶');
                                }
                                'step 4'
                                if (event.boolx) {
                                    trigger.targets.addArray(event.list);
                                    if (event.list[0] == trigger.player) trigger.card.ryjianyong_buff = true;
                                }
                            },
                            subSkill: {
                                buff: {
                                    charlotte: true,
                                    trigger: { global: 'useCardAfter' },
                                    filter(event, player) {
                                        return event.card && event.card.ryjianyong_buff || event.card.ryjianyong_buff;
                                    },
                                    lastDo: true,
                                    forced: true,
                                    content() {
                                        if (trigger.card.ryjianyong) delete trigger.card.ryjianyong;
                                        if (trigger.card.ryjianyong_buff) {
                                            delete trigger.card.ryjianyong_buff;
                                            trigger.player.useCard({ name: trigger.card.name, nature: get.nature(trigger.card, trigger.player), ryjianyong: true }, trigger.player, false);
                                        }
                                    },
                                },
                            },
                        },
                        ryjiezhong: {
                            mod: {
                                targetInRange(card, player, target) {
                                    if (card.ryjiezhong) return true;
                                },
                            },
                            init(player) {
                                player.storage.ryjiezhong = [];
                            },
                            intro: { content: '已指定过$为〖竭忠(锦囊)〗的目标' },
                            group: 'ryjiezhong_after',
                            audio: 'ext:日月同辉:2',
                            enable: ['chooseToUse', 'chooseToRespond'],
                            hiddenCard(player, name) {
                                if (!['sha', 'shan', 'tao', 'jiu'].includes(name)) return false;
                                if (player.countCards('hes') < 2) return false;
                                return player.hasCard(function (card) {
                                    return get.type(card) == 'basic';
                                }, 'hs');
                            },
                            filter(event, player) {
                                if (player.countCards('hes') < 2) return false;
                                if (event.filterCard && event.filterCard({ name: 'sha' }, player, event) ||
                                    event.filterCard({ name: 'shan' }, player, event) ||
                                    event.filterCard({ name: 'jiu' }, player, event) ||
                                    event.filterCard({ name: 'tao' }, player, event)) {
                                    return player.hasCard(function (card) {
                                        return get.type(card) == 'basic';
                                    }, 'hs');
                                }
                                return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    if (event.filterCard && event.filterCard({ name: 'sha' }, player, event)) {
                                        list.push(['基本', '', 'sha']);
                                        for (var j of lib.inpile_nature) list.push(['基本', '', 'sha', j]);
                                    }
                                    if (event.filterCard && event.filterCard({ name: 'shan' }, player, event)) {
                                        list.push(['基本', '', 'shan']);
                                    }
                                    if (event.filterCard && event.filterCard({ name: 'tao' }, player, event)) {
                                        list.push(['基本', '', 'tao']);
                                    }
                                    if (event.filterCard && event.filterCard({ name: 'jiu' }, player, event)) {
                                        list.push(['基本', '', 'jiu']);
                                    }
                                    return ui.create.dialog('竭忠', [list, 'vcard'], 'hidden');
                                },
                                check(button) {
                                    var player = _status.event.player;
                                    var card = { name: button.link[2], nature: button.link[3] };
                                    if (_status.event.parent.type != 'phase' || game.hasPlayer(function (current) {
                                        return player.canUse(card, current) && get.effect(current, card, player, player) > 0;
                                    })) {
                                        switch (button.link[2]) {
                                            case 'tao': case 'shan': return 5;
                                            case 'jiu': {
                                                if (player.countCards('hs', { type: 'basic' }) > 2) return 3;
                                            };
                                            case 'sha':
                                                if (button.link[3] == 'fire') return 2.95;
                                                else if (button.link[3] == 'thunder' || button.link[3] == 'ice') return 2.92;
                                                else return 2.9;
                                        }
                                    }
                                    return 0;
                                },
                                backup(links, player) {
                                    return {
                                        audio: 'ryjiezhong',
                                        filterCard(card, player, target) {
                                            if (ui.selected.cards.length) return true;
                                            return get.type(card) == 'basic';
                                        },
                                        complexCard: true,
                                        selectCard: 2,
                                        position: 'hes',
                                        check(card, player, target) {
                                            if (!ui.selected.cards.length && get.type(card) == 'basic') return 6;
                                            else return 6 - get.value(card);
                                        },
                                        viewAs: {
                                            name: links[0][2],
                                            nature: links[0][3],
                                            ryjiezhong: true,
                                        },
                                        position: 'hes',
                                        popname: true,
                                    }
                                },
                                prompt(links, player) {
                                    return '将两张牌(其中至少应有一张基本牌)当做' + get.translation(links[0][3] || '') + get.translation(links[0][2]) + '使用或打出';
                                },
                            },
                            ai: {
                                order() {
                                    var player = _status.event.player;
                                    var event = _status.event;
                                    if (event.filterCard && event.filterCard({ name: 'jiu' }, player, event) && get.effect(player, { name: 'jiu' }) > 0 && player.countCards('hs', { type: 'basic' }) > 2) {
                                        return 3.3;
                                    }
                                    return 3.1;
                                },
                                skillTagFilter(player, tag, arg) {
                                    if (tag == 'fireAttack') return true;
                                    if (player.countCards('hes') < 2) return false;
                                    if (!player.hasCard(function (card) {
                                        return get.type(card) == 'basic';
                                    }, 'hes')) return false;
                                    return true;
                                },
                                result: {
                                    player: 1,
                                },
                                respondSha: true,
                                respondShan: true,
                                fireAttack: true,
                            },
                            subSkill: {
                                after: {
                                    charlotte: true,
                                    trigger: { global: ['useCardAfter', 'respondAfter'] },
                                    filter(event, player) {
                                        return event.card && event.card.ryjiezhong;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0'
                                        if (game.hasPlayer((current) => current.countDisabled())) {
                                            player.chooseTarget(get.prompt('ryjiezhong'), '是否回复一名角色的一个已废除的装备栏？', (card, player, target) => target.countDisabled()).set('ai', function (target) {
                                                return get.attitude(player, target);
                                            });
                                        }
                                        else event.goto(2);
                                        'step 1'
                                        if (result.targets?.length) {
                                            var target = result.targets[0];
                                            event.target = target;
                                            player.line(target);
                                            game.log(player, '选择了', target);
                                            var list = [];
                                            for (var i = 1; i < 6; i++) {
                                                if (!target.isDisabled(i)) continue;
                                                list.push('equip' + i);
                                            }
                                            if (list.length) {
                                                player.chooseControl(list).set('prompt', `回复${get.translation(target)}的一个已废除的装备栏`).set('ai', function () {
                                                    return list.randomGet();
                                                });
                                            }
                                            else event.goto(3);
                                        }
                                        'step 2'
                                        if (result.control) target.enableEquip(result.control);
                                        'step 3'
                                        if (event.target) delete event.target;
                                        switch (get.type2(trigger.cards[1])) {
                                            case 'basic':
                                                player.draw();
                                                if (player.countDisabled() < 5) {
                                                    player.chooseToDisable().ai = function (event, player, list) {
                                                        if (list.includes('equip5') && player.isEmpty(5)) return 'equip5';
                                                        return list.randomGet();
                                                    };
                                                }
                                                event.finish();
                                                break;
                                            case 'trick':
                                                if (game.hasPlayer(function (current) {
                                                    return current != player && !player.storage.ryjiezhong.includes(current);
                                                })) {
                                                    player.chooseTarget('是否选择一名其他角色？', '你摸两张牌,其回复1点体力', function (card, player, target) {
                                                        return target != player && !player.storage.ryjiezhong.includes(target);
                                                    }).set('ai', function (target) {
                                                        return get.attitude(player, target);
                                                    });
                                                }
                                                break;
                                            //你可以将至少含有一张基本牌的两张牌当一张基本牌使用或打出(你以此法使用的牌无距离限制).此牌结算完毕后,你可以回复一名角色的一个废除的装备栏,根据另一张牌的种类执行对应效果:<br>①基本牌,你摸一张牌并选择废除一个装备栏.<br>②非坐骑类装备牌,你获得此牌的技能效果.<br>③锦囊牌,你可以选择一名未选择过的其他角色,你回复1点体力,其摸两张牌
                                            case 'equip':
                                                if (!['equip3', 'equip4', 'equip6'].includes(get.subtype(trigger.cards[1]))) {
                                                    const skills = lib.card[trigger.cards[1].name].skills;//QQQ
                                                    if (Array.isArray(skills)) {
                                                        for (var i of skills) {
                                                            lib.skill[i].nobracket = true;
                                                            player.addSkillLog(i);
                                                        }
                                                    }
                                                }
                                                event.finish();
                                                break;
                                        }
                                        'step 4'
                                        if (result.targets?.length) {
                                            var target = result.targets[0];
                                            player.storage.ryjiezhong.push(target);
                                            player.line(target);
                                            game.log(player, '选择了', target);
                                            player.markAuto('ryjiezhong', [target]);
                                            player.recover();
                                            target.draw(2);
                                        }
                                    },
                                },
                            },
                        },
                        rytonghu: {
                            group: ['rytonghu_clear', 'rytonghu_effect'],
                            audio: 'ext:日月同辉:2',
                            trigger: { global: 'useCardToTarget' },
                            filter(event, player) {
                                return event.card && !event.card.rytonghu && (event.card.name == 'sha' || get.type(event.card) == 'trick') && event.targets.length == 1;
                            },
                            usable: 1,
                            check(event, player) {
                                var bool = false;
                                if (get.effect(player, event.card, event.player, player) > 0 && get.effect(event.target, event.card, event.player, player) < 0) bool = true;
                                if (get.attitude(player, event.target) > 2) {
                                    if (event.card.name == 'sha') {
                                        if (player.countCards('h', 'shan') || player.getEquip(2) ||
                                            event.target.hp == 1 || player.hp > event.target.hp + 1) {
                                            if (!event.target.countCards('h', 'shan') || event.target.countCards('h') < player.countCards('h')) {
                                                bool = true;
                                            }
                                        }
                                    }
                                    else if (event.card.name == 'juedou' && event.target.hp == 1) {
                                        bool = true;
                                    }
                                    else if (event.card.name == 'shunshou' &&
                                        get.attitude(player, event.player) < 0 &&
                                        get.attitude(event.player, event.target) < 0) {
                                        bool = true;
                                    }
                                }
                                return bool;
                            },
                            logTarget: 'target',
                            content() {
                                'step 0'
                                trigger.card.rytonghu = true;
                                var level = 1;
                                if (trigger.target.group == 'wu') level = 2;
                                for (var i = 0; i < lib.translate[trigger.target.name].length; i++) {
                                    var name = lib.translate[trigger.target.name][i];
                                    if ((name + lib.translate[trigger.target.name][i + 1]) == '手杀') {
                                        i++;
                                        continue;
                                    }
                                    if (name == '孙') {
                                        level = 3;
                                        break;
                                    }
                                    else if (['界', '新', '旧', '☆', '神', '谋', '◎'].includes(name)) continue;
                                    else break;
                                }
                                if (trigger.card.name == 'sha') {
                                    var list = ['equip2'];
                                    if (level >= 2) list.push('equip1');
                                    if (level >= 3) list.push('equip3');
                                    for (var subtype of list) {
                                        var card = get.cardPile2(function (card) {
                                            return get.subtype(card) == subtype;
                                        });
                                        if (card) player.chooseUseTarget(card, 'nopopup', 'noanimate', true);
                                    }
                                }
                                else player.draw(level + 1);
                                'step 1'
                                trigger.parent.targets.remove(trigger.target);
                                trigger.parent.triggeredTargets2.remove(trigger.target);
                                trigger.parent.targets.push(player);
                                trigger.untrigger();
                            },
                            subSkill: {
                                clear: {
                                    charlotte: true,
                                    trigger: { global: 'useCardAfter' },
                                    filter(event, player) {
                                        return event.card && event.card.rytonghu;
                                    },
                                    lastDo: true,
                                    forced: true,
                                    content() {
                                        delete trigger.card.rytonghu;
                                    },
                                },
                                effect: {
                                    trigger: { global: ['useCard', 'respond'] },
                                    filter(event, player) {
                                        if (!Array.isArray(event.respondTo) || event.respondTo[0] == event.player || ![event.respondTo[0], event.player].includes(player)) return false;
                                        if (!event.respondTo[1].rytonghu) return false;
                                        return player.hasSha() || (_status.connectMode && player.countCards('h') > 0);
                                    },
                                    preHidden: true,
                                    forced: true,
                                    content() {
                                        var target = (player == trigger.respondTo[0] ? trigger.player : trigger.respondTo[0]);
                                        player.chooseToUse(function (card, player, event) {
                                            if (card.name != 'sha') return false;
                                            return lib.filter.cardEnabled.apply(this, arguments);
                                        }, `是否对${get.translation(target)}使用一张【杀】？`).set('complexSelect', true).set('filterTarget', function (card, player, target) {
                                            if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                                            return lib.filter.targetEnabled.apply(this, arguments);
                                        }).set('sourcex', target).set('addCount', false);
                                    },
                                },
                            },
                        },
                        ryjudong: {
                            audio: 'ext:日月同辉:2',
                            trigger: { player: 'phaseUseBegin' },
                            check(event, player) {
                                if (player.countCards('h') + game.countPlayer(function (current) {
                                    return current.inRange(player)
                                }) - Math.max(2, player.getDamagedHp() + 1) > player.getHandcardLimit() * 2) return false;
                                return true;
                            },
                            prompt(event, player) {
                                return get.prompt('ryjudong') + `(可摸${get.cnNumber(Math.max(2, player.getDamagedHp() + 1))}张牌,可令` + get.cnNumber(game.countPlayer(function (current) {
                                    return current.inRange(player)
                                })) + '张牌不计入手牌上限)';
                            },
                            content() {
                                'step 0'
                                player.draw(Math.max(2, player.getDamagedHp() + 1));
                                if (player.countCards('h')) player.chooseCard('h', Math.max(2, player.getDamagedHp() + 1), '请选择要展示的牌(本回合可以使用的牌)', function (card) {
                                    return !card.hasGaintag('ryjudong_mark');
                                }).set('ai', function (card) {
                                    return get.useful(card);
                                });
                                else event.goto(2);
                                'step 1'
                                if (result.cards?.length) {
                                    var cards = result.cards;
                                    player.showCards(cards, get.translation(player) + '发动了【据东】');
                                    player.addGaintag(cards, 'ryjudong_mark');
                                    player.addTempSkill('ryjudong_mark');
                                }
                                'step 2'
                                if (player.countCards('h') && game.hasPlayer(function (current) {
                                    return current.inRange(player)
                                })) player.chooseCard('h', game.countPlayer(function (current) {
                                    return current.inRange(player);
                                }), '请选择要展示的牌(本回合不计入手牌上限的牌)', function (card) {
                                    return !card.hasGaintag('ryjudong_effect');
                                }).set('ai', function (card) {
                                    return get.value(card) * (20 - get.useful(card));
                                });
                                else event.finish();
                                'step 3'
                                if (result.cards?.length) {
                                    var cards = result.cards;
                                    player.showCards(cards, get.translation(player) + '发动了【据东】');
                                    player.addGaintag(cards, 'ryjudong_effect');
                                    player.addTempSkill('ryjudong_effect');
                                }
                            },
                        },
                        ryjudong_mark: {
                            charlotte: true,
                            onremove(player) {
                                player.removeGaintag('ryjudong_mark');
                            },
                            mod: {
                                cardEnabled2(card, player) {
                                    if (get.itemtype(card) == 'card' && !card.hasGaintag('ryjudong_mark')) return false;
                                },
                            },
                        },
                        ryjudong_effect: {
                            charlotte: true,
                            onremove(player) {
                                player.removeGaintag('ryjudong_effect');
                            },
                            mod: {
                                ignoredHandcard(card, player) {
                                    if (card.hasGaintag('ryjudong_effect')) return true;
                                },
                                cardDiscardable(card, player, name) {
                                    if (name == 'phaseDiscard' && card.hasGaintag('ryjudong_effect')) return false;
                                },
                            },
                        },
                        ryhengjiang: {
                            audio: 'ext:日月同辉:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('h', function (card) {
                                    return !card.hasGaintag('ryhengjiang');
                                }) >= 5;
                            },
                            filterCard(card) {
                                return !card.hasGaintag('ryhengjiang');
                            },
                            selectCard: 5,
                            filterTarget: true,
                            check(card) {
                                if (ui.selected.cards.length) {
                                    var cardx = ui.selected.cards[ui.selected.cards.length - 1];
                                    if (cardx.suit == 'club' && card.suit == 'club' && card.number - cardx.number == 1) return 4;
                                    else if (cardx.suit == 'spade' && card.suit == 'spade' && card.number - cardx.number == 1) return 4;
                                    else if (cardx.suit == 'heart' && card.suit == 'heart' && card.number - cardx.number == 1) return 2;
                                    else if (cardx.suit == 'diamond' && card.suit == 'diamond' && card.number - cardx.number == 1) return 2;
                                    return 1;
                                }
                                return 14 - card.number;
                            },
                            complexCard: true,
                            discard: false,
                            lose: false,
                            delay: false,
                            content() {
                                'step 0'
                                player.addGaintag(cards, 'ryhengjiang');
                                player.showCards(cards, get.translation(player) + '发动了【横江】');
                                'step 1'
                                var list1 = [], list2 = [], bool1 = true, bool2 = false, bool3 = false;
                                for (var card of cards) {
                                    if (!list1.includes(card.suit)) list1.push(card.suit);
                                    if (!list2.includes(card.number)) list2.push(card.number);
                                }
                                if (list2.length != 5) bool1 = false;
                                else {
                                    list2.sort(function (a, b) {
                                        return a - b;
                                    });
                                    var num = undefined;
                                    for (var i = 0; i < 5; i++) {
                                        if (!num) num = list2[i];
                                        else {
                                            if (list2[i] - num == 1) num = list2[i];
                                            else {
                                                bool1 = false;
                                                break;
                                            }
                                        }
                                    }
                                }
                                if (!bool1) {
                                    target.addMark('ryhengjiang_buff', 1, false);
                                    target.addSkill('ryhengjiang_buff', { player: 'phaseAfter' });
                                }
                                if (bool1 && list1.length == 1 && ['spade', 'club'].includes(list1[0])) target.damage();
                                if (bool1 && list1.length == 1 && ['heart', 'diamond'].includes(list1[0]) && target.countCards('h') - target.hp > 0) player.gainPlayerCard(target, target.countCards('h') - target.hp, 'h', true);
                            },
                            ai: {
                                order: 10,
                                result: { target: -1 },
                            },
                            subSkill: {
                                buff: {
                                    charlotte: true,
                                    mark: true,
                                    intro: { content: '手牌上限-#' },
                                    mod: {
                                        maxHandcard(player, num) {
                                            return num - 1;
                                        },
                                    },
                                },
                            },
                        },
                        rymili: {
                            intro: {
                                content(storage, player) {
                                    if (player.sex == 'unknown' || player.sex == 'double') return '当前性别未确定';
                                    return '当前性别:' + get.translation(player.sex);
                                },
                            },
                            derivation: ['jintao', 'xiaoji'],
                            group: ['rymili_jintao', 'rymili_xiaoji'],
                            audio: 'ext:日月同辉:true',
                            trigger: { player: 'phaseZhunbeiBegin' },
                            forced: true,
                            content() {
                                'step 0'
                                player.chooseControl('摸牌', '弃牌', 'cancel2').set('prompt', get.prompt2('rymili')).set('ai', () => '摸牌');
                                'step 1'
                                if (result.control != 'cancel2') {
                                    if (result.control == '摸牌') player.draw();
                                    else player.chooseToDiscard('he', true);
                                }
                                else event.finish();
                                'step 2'
                                if (player.sex == 'male' || player.sex == 'female') {
                                    var sex = (player.sex == 'male' ? 'female' : 'male');
                                    game.broadcastAll(function (player, sex) {
                                        player.sex = sex;
                                        player.markSkill('rymili');
                                        if (player.marks && player.marks.rymili) player.marks.rymili.firstChild.innerHTML = sex == 'male' ? '♂' : '♀';
                                    }, player, sex);
                                    game.log(player, '将性别变更为', `#g${get.translation(sex)}性`);
                                    event.finish();
                                }
                                else player.chooseControl('male', 'female').set('prompt', '请选择自己的性别');
                                'step 3'
                                var sex = result.control;
                                game.broadcastAll(function (player, sex) {
                                    player.sex = sex;
                                    if (player.marks && player.marks.rymili) player.marks.rymili.firstChild.innerHTML = sex == 'male' ? '♂' : '♀';
                                }, player, sex);
                                game.log(player, '将性别变更为', `#g${get.translation(sex)}性`);
                            },
                            subSkill: {
                                jintao: {
                                    mod: {
                                        cardUsable(card, player, num) {
                                            if (player.sex != 'male') return;
                                            if (card.name == 'sha') return num + 1;
                                        },
                                        targetInRange(card, player) {
                                            if (player.sex != 'male') return;
                                            if (card.name == 'sha') return true;
                                        },
                                    },
                                    audio: 'rymili',
                                    trigger: { player: 'useCard' },
                                    forced: true,
                                    filter(event, player) {
                                        if (player.sex != 'male') return false;
                                        if (event.card.name != 'sha') return false;
                                        var evt = event.getParent('phaseUse');
                                        if (!evt || evt.player != player) return false;
                                        var index = player.getHistory('useCard', function (evtx) {
                                            return evtx.card.name == 'sha' && evtx.getParent('phaseUse') == evt;
                                        }).indexOf(event);
                                        return index == 0 || index == 1;
                                    },
                                    content() {
                                        var evt = trigger.getParent('phaseUse');
                                        var index = player.getHistory('useCard', function (evtx) {
                                            return evtx.card.name == 'sha' && evtx.getParent('phaseUse') == evt;
                                        }).indexOf(trigger);
                                        if (index == 0) {
                                            game.log(trigger.card, '伤害+1');
                                            if (typeof trigger.baseDamage != 'number') trigger.baseDamage = 1;
                                            trigger.baseDamage++;
                                        }
                                        else {
                                            game.log(trigger.card, '不可被响应');
                                            trigger.directHit.addArray(game.players);
                                        }
                                    },
                                },
                                xiaoji: {
                                    audio: 'rymili',
                                    trigger: {
                                        player: 'loseAfter',
                                        global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (player.sex != 'female') return false;
                                        var evt = event.getl(player);
                                        return evt && evt.player == player && evt.es && evt.es.length;
                                    },
                                    content() {
                                        'step 0'
                                        event.count = trigger.getl(player).es.length;
                                        'step 1'
                                        event.count--;
                                        player.draw(2);
                                        'step 2'
                                        if (event.count > 0) player.chooseBool(get.prompt2('rymili')).set('frequentSkill', 'rymili_xiaoji').ai = lib.filter.all;
                                        'step 3'
                                        if (result.bool) {
                                            event.goto(1);
                                        }
                                    },
                                    ai: {
                                        noe: true,
                                        reverseEquip: true,
                                        skillTagFilter(player, tag) {
                                            return player.sex == 'female';
                                        },
                                        effect: {
                                            target(card, player, target, current) {
                                                if (player.sex != 'female') return;
                                                if (get.type(card) == 'equip' && !get.cardtag(card, 'gifts')) return [1, 3];
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        ryjuntie: {
                            intro: {
                                content(storage, player) {
                                    var str = '<li>已记录的牌名:', list = ['受到', '造成', '目标', '摸', '弃'], list2 = [];
                                    for (var i of storage) {
                                        if (!['受到', '造成', '目标', '摸', '弃'].includes(i)) list2.push(i);
                                    }
                                    if (!list2.length) str += '无';
                                    else {
                                        str += '<br>'
                                        for (var j of list2) {
                                            str += j;
                                            str += ' '
                                        }
                                    }
                                    str += '<br><li>已记录的特殊词条:<br>';
                                    for (var k of list) {
                                        if (!storage.includes(k)) str += `<span style='opacity:0.5'>`;
                                        str += k;
                                        if (!storage.includes(k)) str += '</span>';
                                        str += ' '
                                    }
                                    return str;
                                },
                            },
                            init(player) {
                                player.storage.ryjuntie = [];
                            },
                            audio: 'ext:日月同辉:2',
                            trigger: { global: ['useCardToTargeted', 'damageEnd'] },
                            filter(event, player, name) {
                                var bool = false, boolx = (event.player != player && lib.translate[event.player.identity] == '主');
                                if (!boolx) return false;
                                for (var ry of ['受到', '造成', '目标', '摸', '弃']) {
                                    if (!player.getStorage('ryjuntie').includes(ry)) bool = true;
                                }
                                switch (name) {
                                    case 'useCardToTargeted': return get.type(event.card) != 'equip' && !player.getStorage('ryjuntie').includes(lib.translate[event.card.name]); break;
                                    case 'damageEnd': return bool; break;
                                }
                                return false;
                            },
                            forced: true,
                            content() {
                                switch (event.triggername) {
                                    case 'useCardToTargeted':
                                        player.markAuto('ryjuntie', [lib.translate[trigger.card.name]]);
                                        game.log(player, '记录了', trigger.card.name);
                                        break;
                                    case 'damageEnd':
                                        var list = [];
                                        for (var ry of ['受到', '造成', '目标', '摸', '弃']) {
                                            if (!player.getStorage('ryjuntie').includes(ry)) list.push(ry);
                                        }
                                        player.markAuto('ryjuntie', [list.randomGet()]);
                                        game.log(player, '记录了', ry);
                                        break;
                                }
                            },
                        },
                        ryyizhuang: {
                            group: 'ryyizhuang_draw',
                            audio: 'ext:日月同辉:true',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.getStorage('ryjuntie').length >= player.hp;
                            },
                            usable: 1,
                            content() {
                                'step 0'
                                event.videoId = lib.status.videoId++;
                                var func = function (player, id) {
                                    var list = player.getStorage('ryjuntie');
                                    var choiceList = ui.create.dialog(`易装:弃置${get.cnNumber(player.hp)}张词条`);
                                    choiceList.videoId = id;
                                    for (var i = 0; i < list.length; i++) {
                                        var str = `<div class='popup text' style='width:calc(100% - 10px);display:inline-block'>`;
                                        str += list[i];
                                        str += '</div>';
                                        var next = choiceList.add(str);
                                        next.firstChild.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                                        next.firstChild.link = i;
                                        Object.setPrototypeOf(next, lib.element.Button.prototype);//QQQ
                                        choiceList.buttons.add(next.firstChild);
                                    }
                                    return choiceList;
                                };
                                if (player.isOnline2()) {
                                    player.send(func, player, event.videoId);
                                }
                                event.dialog = func(player, event.videoId);
                                if (player != game.me || _status.auto) {
                                    event.dialog.style.display = 'none';
                                }
                                var next = player.chooseButton();
                                next.set('dialog', event.videoId);
                                next.set('forced', true);
                                if (player.hp > 0) next.set('selectButton', player.hp);
                                next.set('ai', function (button) {
                                    return button.link * Math.random();
                                });
                                'step 1'
                                if (event.videoId != undefined) {
                                    if (player.isOnline2()) {
                                        player.send('closeDialog', event.videoId);
                                    }
                                    event.dialog.close();
                                }
                                var listx = [];
                                for (var i of result.links) listx.push(player.getStorage('ryjuntie')[i]);
                                for (var j of listx) player.unmarkAuto('ryjuntie', [j]);
                                var list, skills = [];
                                if (get.mode() == 'guozhan') {
                                    list = [];
                                    for (var i in lib.characterPack.mode_guozhan) list.push(i);
                                }
                                else if (_status.connectMode) list = get.charactersOL();
                                else {
                                    list = [];
                                    for (var i in lib.character) {
                                        if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) continue;
                                        list.push(i);
                                    }
                                }
                                for (var i of list) {
                                    if (i.indexOf('gz_jun') == 0) continue;
                                    for (var j of lib.character[i][3]) {
                                        var bool = true;
                                        if (j == 'ryyizhaung') continue;
                                        var skill = lib.skill[j];
                                        if (!skill || skill.zhuSkill || skill.dutySkill) continue;
                                        if (skill.init || skill.ai && (skill.ai.combo || skill.ai.notemp || skill.ai.neg)) continue;
                                        var info = lib.translate[j + '_info'];
                                        for (var i of listx) {
                                            if (info && info.includes(i)) continue;
                                            else {
                                                bool = false;
                                                break;
                                            }
                                        }
                                        if (bool) skills.add(j);
                                    }
                                }
                                if (skills.length) player.addSkillLog(skills.randomGet());
                                else {
                                    player.popup('无技能');
                                    game.log('可惜并没有符合条件的技能!');
                                    player.addTempSkill('ryyizhuang_tag');
                                }
                            },
                            ai: {
                                order: 10,
                                combo: 'ryjuntie',
                                result: { player: 1 },
                            },
                            subSkill: {
                                tag: { charlotte: true },
                                draw: {
                                    audio: 'ryyizhuang',
                                    trigger: { player: 'phaseJieshuBegin' },
                                    filter(event, player) {
                                        return player.getStorage('ryjuntie').length <= 2 || player.hasSkill('ryyizhuang_tag');
                                    },
                                    forced: true,
                                    content() {
                                        player.draw(2);
                                    },
                                },
                            },
                        },
                        rymanye: {
                            derivation: ['rysha_fire', 'huogong', 'huoshaolianying'],
                            group: ['rymanye_clear', 'rymanye_use'],
                            audio: 'ext:日月同辉:2',
                            trigger: { player: 'useCardToPlayered' },
                            filter(event, player) {
                                return !event.card.rymanye && (get.tag(event.card, 'fireDamage') || event.card.suit == 'club');
                            },
                            forced: true,
                            content() {
                                'step 0'
                                trigger.card.rymanye = true;
                                player.chooseBool(get.prompt('rymanye'), '此牌结算完成后,若此牌造成伤害,你可以废除受到此牌造成的伤害的角色的一个装备栏,且若因此令其失去了装备牌,你获得之;若此牌未造成伤害,你从牌堆中随机获得一张♣️️牌并获得一枚<凤>标记.');
                                'step 1'
                                if (result.bool) {
                                    trigger.card.rymanye_clear = true;
                                }
                            },
                            subSkill: {
                                clear: {
                                    charlotte: true,
                                    trigger: { player: 'useCardAfter' },
                                    filter(event, player) {
                                        return event.card && event.card.rymanye;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0'
                                        delete trigger.card.rymanye;
                                        if (trigger.card.rymanye_clear) delete trigger.card.rymanye_clear;
                                        else event.finish();
                                        'step 1'
                                        if (!player.getHistory('sourceDamage', function (evt) {
                                            return evt.card == trigger.card;
                                        }).length) {
                                            var card = get.cardPile2(function (card) {
                                                return card.suit == 'club';
                                            });
                                            if (card) player.gain(card, 'gain2');
                                            player.addMark('ryfeng', 1);
                                            event.finish();
                                            return;
                                        }
                                        else {
                                            var targets = game.filterPlayer(function (current) {
                                                return current.getHistory('damage', function (evt) {
                                                    return evt.card == trigger.card;
                                                }).length;
                                            }).sortBySeat();
                                            if (!targets) event.finish();
                                            else {
                                                event.targets = targets;
                                                event.num = 0;
                                            }
                                        }
                                        'step 2'
                                        var target = targets[num];
                                        event.target = target;
                                        event.eqlist = target.getCards('e');
                                        var list = [];
                                        for (var i = 1; i < 6; i++) {
                                            if (!target.isDisabled(i)) list.push('equip' + i);
                                        }
                                        if (!list.length) event.goto(4);
                                        else player.chooseControl(list, 'cancel2').set('prompt', `是否废除${get.translation(target)}的一个装备栏？`).set('ai', function () {
                                            var player = _status.event.player;
                                            if (get.attitude(player, target) > 0) return 'cancel2';
                                            for (var i of [2, 3, 1, 4, 5]) {
                                                if (!target.isDisabled(i)) {
                                                    return ('equip' + i);
                                                    break;
                                                }
                                            }
                                            return list[0];
                                        });
                                        'step 3'
                                        if (result.control != 'cancel2') {
                                            player.line(target);
                                            target.disableEquip(result.control);
                                        }
                                        'step 4'
                                        var card = get.discardPile(function (card) {
                                            return event.eqlist.includes(card);
                                        });
                                        if (card) player.gain(card, 'gain2');
                                        if (num < targets.length - 1) {
                                            event.num++;
                                            event.goto(2);
                                        }
                                    },
                                },
                                use: {
                                    enable: 'phaseUse',
                                    usable: 1,
                                    filter(event, player) {
                                        return player.hasMark('ryfeng') && (event.filterCard && event.filterCard({
                                            name: 'sha',
                                            nature: 'fire',
                                        }, player, event) || event.filterCard({
                                            name: 'huogong',
                                        }, player, event) || event.filterCard({
                                            name: 'huoshaolianying',
                                        }, player, event));
                                    },
                                    chooseButton: {
                                        dialog() {
                                            return ui.create.dialog('漫野', [[['基本', '', 'sha', 'fire'], ['锦囊', '', 'huogong'], ['锦囊', '', 'huoshaolianying']], 'vcard']);
                                        },
                                        filter(button, player) {
                                            var evt = _status.event.parent;
                                            return evt.filterCard({
                                                name: button.link[2],
                                            }, player, evt);
                                        },
                                        check(button) {
                                            var player = _status.event.player;
                                            return player.getUseValue({
                                                name: button.link[2],
                                                nature: button.link[3],
                                            });
                                        },
                                        backup(links) {
                                            return {
                                                audio: 'rymanye',
                                                viewAs: { name: links[0][2] },
                                                filterCard: () => false,
                                                selectCard: -1,
                                                onuse(result, player) {
                                                    player.removeMark('ryfeng', 1);
                                                },
                                            }
                                        },
                                        prompt(links) {
                                            return '失去1枚<凤>标记并视为使用' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '';
                                        },
                                    },
                                    ai: {
                                        order: 7,
                                        result: { player: 1 },
                                    },
                                },
                            },
                        },
                        ryfeng: {
                            marktext: '凤',
                            intro: { name2: '凤', content: 'mark' },
                        },
                        ryliance: {
                            trigger: {
                                global: ['linkBefore', 'disableEquipEnd', 'enterGame', 'phaseBefore']
                            },
                            filter(event, player) {
                                if (event.name == 'link') return event.player.isLinked();
                                if (event.name == 'disableEquip') return !event.player.isLinked();
                                return (event.name != 'phase' || game.phaseNumber == 0) && event.player && event.player.countDisabled() > 0 && !event.player.isLinked();//QQQ
                            },
                            forced: true,
                            content() {
                                if (trigger.name != 'link') trigger.player.link(true);
                                else trigger.cancel();
                            },
                        },
                        ryfengming: {
                            derivation: ['xinfu_zhanji', 'olniepan'],
                            audio: 'ext:日月同辉:2',
                            trigger: { player: 'phaseZhunbeiBegin' },
                            filter(event, player) {
                                return game.countPlayer(function (current) {
                                    return current.isLinked();
                                }) + player.countMark('ryfeng') >= game.countPlayer();
                            },
                            forced: true,
                            juexingji: true,
                            content() {
                                player.awakenSkill('ryfengming');
                                for (var skill of lib.skill.ryfengming.derivation) player.addSkillLog(skill);
                                player.chooseDrawRecover(2, true);
                            },
                        },
                    },
                    dynamicTranslate: {
                        ryqiuxian(player) {
                            var num = undefined;
                            for (var i = 0; i < 3; i++) {
                                if (player.storage.ryqiuxian[i] == 1) num = i;
                            }
                            var str = '转换技,出牌阶段限一次,你可以弃置一枚「贤」,若如此做,你:';
                            if (num == 0) str += `<span class='bluetext'>`;
                            str += '①随机从牌堆获得一张非延时类锦囊牌;';
                            if (num == 0) str += '</span>';
                            if (num == 1) str += `<span class='bluetext'>`;
                            str += '②于此回合结束后进行一个额外的回合;';
                            if (num == 1) str += '</span>';
                            if (num == 2) str += `<span class='bluetext'>`;
                            str += '③随机获得一个描述里带有「锦囊」的技能直至此下次造成伤害或你失去〖求贤〗.';
                            if (num == 2) str += '</span>';
                            return str;
                        },
                        rylongdan(player) {
                            var str = '你可以将一张';
                            if (player.storage.ryjizhu) str += '非';
                            str += '基本牌当做';
                            if (player.storage.ryjizhu) str += '【杀】、【闪】、【桃】、【无懈可击】';
                            else str += '【杀】或【闪】';
                            str += '使用或打出,若此时处于你的回合,你摸一张牌;若不是你的回合,你获得当前回合角色的一张手牌.';
                            return str;
                        },
                        ryliegong(player) {
                            var st = player.storage.ryliegong;
                            var str = '当你使用实体牌【杀】指定目标时,若:';
                            if (st[0] != 0) str += `<span style='text-decoration: line-through;'>`;
                            str += '<br>1.此【杀】点数不小于你与目标角色的体力值之和,目标角色不可响应此牌;';
                            if (st[0] != 0) str += '</span>';
                            if (st[1] != 0) str += `<span style='text-decoration: line-through;'>`;
                            str += '<br>2.目标角色与你距离大于1,你弃置其一张牌,你摸一张牌;';
                            if (st[1] != 0) str += '</span>';
                            if (st[2] != 0) str += `<span style='text-decoration: line-through;'>`;
                            str += '<br>3.所有角色均在你的攻击范围,此牌造成的伤害+1';
                            if (st[2] != 0) str += '</span>';
                            str += '.';
                            return str;
                        },
                        ryjianxiong(player) {
                            var str = '其他角色的回合结束时和你的出牌阶段,你可以将一张', num = player.countMark('ryjianxiong');
                            if (num < 3) str += '手';
                            str += '牌视为当前回合角色最近使用的一张基本牌或非延时类锦囊牌使用';
                            if (num > 1) str += '(无距离限制)';
                            str += '.';
                            if (num > 3) {
                                str += '此牌结算完毕后,若你因此牌造成伤害,你摸一张牌';
                                if (num > 4) str += '并回复1点体力';
                                str += '.';
                            }
                            return str;
                        },
                    },
                    translate: {
                        riyue_wei: '日月·魏武霸业',
                        riyue_shu: '日月·蜀汉忠义',
                        riyue_wu: '日月·吴王先耀',
                        riyue_qun: '日月·群雄野心',
                        riyue_rimian: '日月·日冕',
                        ry_liubei: '◎刘备',
                        ryrende: '仁德',
                        ryrende_info: '出牌阶段,你可将任意手牌分配给其他角色,本阶段你每以此法分配了两张及以上的牌,你可以视为使用了一张基本牌,且若以此法回复了体力,你获得一个「贤」标记.',
                        ryqiuxian: '求贤',
                        ryqiuxian_info: '转换技,出牌阶段限一次,你可以弃置一个「贤」标记,若如此做,你:①随机从牌堆获得一张非延时类锦囊牌;②于此回合结束后进行一个额外的回合;③随机获得一个描述里带有「锦囊」的技能直至此下次造成伤害或你失去〖求贤〗.',
                        ryshichou: '誓仇',
                        ryshichou_info: '主公技,限定技,回合开始时,若场上有除你以外的蜀势力角色且场上蜀势力角色均已受伤,或有蜀势力角色阵亡,你可以减1点体力上限,回复1点体力,失去技能〖仁德〗和〖求贤〗并获得技能〖龙怒〗和〖结营〗,从牌堆中获得两张火【杀】,且你此回合使用【杀】无距离和次数限制.',
                        ry_guanyu: '◎关羽',
                        rywusheng: '武圣',
                        rywusheng_info: '准备阶段,你可选择一项:1.弃置判定区一张牌,2.从牌堆获得一张红色牌.你可以将一张红色牌当【杀】使用或打出.<span class="Qmenu">锁定技,</span>你使用♥️️杀造成的伤害+1.',
                        ryyijue: '义绝',
                        ryyijue_info: '出牌阶段限一次,你可以与一名其他角色进行谋弈:<br>过关斩将:当你于本回合使用【杀】造成伤害后,你摸一张牌且你本回合使用【杀】的次数上限+1.<br>千里单骑:你于本回合获得技能〖马术〗,且本回合内其他角色的非锁定技失效.',
                        ry_zhangfei: '◎张飞',
                        rypaoxiao: '咆哮',
                        rypaoxiao_info: '<span class="Qmenu">锁定技,</span>你使用【杀】无次数和距离限制.出牌阶段限一次,你可以弃置一张非基本牌.若如此做,直至你下个回合开始前,其他角色使用转化的【闪】、虚拟【闪】或点数小于其响应的牌的【闪】时,你可以令此【闪】无效.',
                        ryxieji: '协击',
                        ryxieji_info: '准备阶段,你可选择一名其他角色,其下个回合结束时,每满足一项,则你从牌堆中获得对应的牌:<br><li>你与其使用的【杀】和【闪】的总量不小于4张:【杀】、【杀】;<br><li>你与其造成的伤害总量不小于4点:【酒】、【杀】;<br><li>你与其弃置的牌总数不小于4张:【丈八蛇矛】、【大宛】.',
                        ry_zhaoyun: '◎赵云',
                        rylongdan: '龙胆',
                        rylongdan_info: '你可以将一张基本牌当做【杀】或【闪】使用或打出,若此时处于你的回合,你摸一张牌;若不是你的回合,你获得当前回合角色的一张手牌.',
                        ryjizhu: '积著',
                        ryjizhu_info: '觉醒技,当你因〖龙胆〗获得的牌不少于6张时,你失去两点体力上限,回复1点体力或摸两张牌,获得技能〖绝境〗,并将〖龙胆〗中「基本牌」修改为「非基本牌」,「【杀】或【闪】」修改为「【杀】、【闪】、【桃】、【无懈可击】」.',
                        ryjuejing: '绝境',
                        ryjuejing_info: '一名角色的回合结束时,若其本回合对你使用过牌或其攻击范围内含有你,你摸两张牌,若你的体力不为1,你失去一点体力.',
                        ry_huangzhong: '◎黄忠',
                        ryliegong: '烈弓',
                        ryliegong_info: '当你使用实体牌【杀】指定目标时,若:<br>1.此【杀】点数不小于你与目标角色的体力值之和,目标角色不可响应此牌;<br>2.目标角色与你距离大于1,你弃置其一张牌,你摸一张牌;<br>3.所有角色均在你的攻击范围,此牌造成的伤害+1.',
                        ryyinyu: '饮羽',
                        ryyinyu2: '饮羽',
                        ryyinyu_info: '限定技,出牌阶段,你可以弃置一张武器牌并选择一名角色,将其体力值调整为2点(不触发伤害技),且本回合你对其使用【杀】无距离限制,且无视条件直接触发〖烈弓〗全部效果,之后你须删除〖烈弓〗中一项.',
                        ry_machao: '◎马超',
                        rytieji: '铁骑',
                        rytieji_info: '你使用【杀】指定目标后,你可以进行一次判定:若判定结果为红色,则不可响应此牌且其于此牌结算过程中不触发技能效果;若为判定结果黑色且其闪避此【杀】,则你获得1点护甲值.',
                        ryqiangyong: '羌勇',
                        ryqiangyong_info: '<span class="Qmenu">锁定技,</span>你计算你与已受伤的角色始终为1.出牌阶段限一次,你可以指定一名对你造成过伤害的角色a,失去任意量护甲值并选择等量名其他角色,这些角色依次选择对a使用一张【杀】或令你摸一张牌.',
                        ry_huaxiong: '◎华雄',
                        ryshiyong: '恃勇',
                        ryshiyong_info: '<span class="Qmenu">锁定技,</span>当你受到一次伤害后,若有造成伤害的实体牌,为红色伤害来源摸一张牌,你弃置一张牌;为黑色你获得此牌并摸一张牌.',
                        ryyaowu: '耀武',
                        ryyaowu_info: '当你使用【杀】或【决斗】指定唯一目标时,若你与其均有手牌,则你与其依次暗置一张未以此法操作的牌直至一方无牌可亮,你与其同时展示每一次双方展示的牌,其中你每有一张展示的牌的点数大于其展示的牌的点数,则此牌伤害+1;每有一张展示的牌的点数小于其展示的牌的点数,则其响应此牌需使用或打出的牌+1.',
                        ry_lvbu: '◎吕布',
                        rywushuang: '无双',
                        rywushuang_info: '准备阶段开始前,你随机获得三个技能描述带有「杀」的技能直至你的下个准备阶段开始.',
                        ryshenwei: '神威',
                        ryshenwei_info: '<span class="Qmenu">锁定技,</span>当你造成或受到1点伤害后,你摸一张牌并将一张手牌置于你武将牌上称为「威」.出牌阶段限一次,你可以弃置4张「威」,令所有角色弃置手牌中的【桃】,令本局游戏进入鏖战模式;你可以弃置6张「威」,令除你外的所有角色依次受到1点伤害,依次弃置所有装备牌,最后依次弃置所有手牌.',
                        ry_yanliang: '◎颜良',
                        ry_wenchou: '◎文丑',
                        ryhushe: '虎慑',
                        ryhushe_info: '出牌阶段限一次(占用〖狼行〗次数),你可以弃置一张牌,从牌堆中随机获得一张【杀】和一张武器牌,你可以选择将此武将牌替换为「文丑」(替换时保持当前体力上限和体力值).',
                        rylangxing: '狼行',
                        rylangxing_info: '出牌阶段限一次(占用〖虎慑〗次数),你可以弃置一张牌,从牌堆中随机获得一张【决斗】和一点护甲值,你可以选择将此武将牌替换为「颜良」(替换时保持当前体力上限和体力值).',
                        ryshuangxiong: '双雄',
                        ryshuangxiong_info: '结束阶段开始时,你可以重铸x张手牌并摸一张牌(x为此回合造成的伤害数,若为0则不摸牌).',
                        ry_gaoshun: '◎高顺',
                        ryxianzhen: '陷阵',
                        ryxianzhen_info: '出牌阶段限一次,你可以与一名其他角色拼点.若你赢,你对其使用【杀】无距离限制,且你使用【杀】指定其为目标后,若你与其之间的顺时针或逆时针路径中有其他角色,你可以选择一个路径上的至多X名角色成为此牌的额外目标.(X为你已损失的体力值且至少为1)',
                        ryjinjiu: '禁酒',
                        ryjinjiu_info: '<span class="Qmenu">锁定技,</span>你的【酒】均视为点数为K的【杀】;你的回合内,除你之外角色均不能使用【酒】.',
                        ry_dongzhuo: '◎董卓',
                        ryjiuchi: '酒池',
                        ryjiuchi_info: '<span class="Qmenu">锁定技,</span>所有角色摸牌阶段额外摸两张牌,且弃牌阶段弃置的牌须交于下家.一名角色的回合结束时,若其于此回合没有造成过伤害,则其受到1点无来源伤害.',
                        ryroulin: '肉林',
                        ryroulin_info: '<span class="Qmenu">锁定技,</span>游戏开始时,所有角色增加1点体力上限并回复1点体力.所有角色响应【杀】须要额外打出一张【闪】.',
                        rybengtan: '崩瘫',
                        rybengtan_info: '<span class="Qmenu">锁定技,</span>回合结束时,若你体力上限或体力值为全场唯一最高,你须选择减1点体力上限或失去1点体力,若因此扣减了含体力的体力上限,你摸两张牌.',
                        rylingnve: '凌虐',
                        rylingnve_info: '主公技,其他角色弃置牌或判定后,若其中包含【杀】或♠️️牌,你可以将这些牌视为【杀】对其攻击范围内的一名角色使用.',
                        ry_sunquan: '◎孙权',
                        ryzhiheng: '制衡',
                        ryzhiheng_info: '出牌阶段限一次,你可以弃置任意张牌并摸等量的牌.若你以此法弃置了所有手牌,你获得一个「业」标记.出牌阶段限一次,你可以弃置一个「业」选择一项:1.摸X张牌,2.猜测你回合结束后至你下回合开始前场上的装备区中的牌数是否会发生变化,若猜对,则X永久+1.(X初始为1)',
                        ryjiahe: '嘉禾',
                        ryjiahe_info: '主公技,吴势力角色回合内,其可以交给你一张装备牌,其回复1点体力,且你可以选择是否使用此牌.',
                        ry_zhouyu: '◎周瑜',
                        ryyingzi: '英姿',
                        ryyingzi_info: '<span class="Qmenu">锁定技,</span>你的手牌上限始终为你体力上限;准备阶段,你摸X张牌(X为场上处于横置/背面向上/隐匿状态的角色数且至少为1).',
                        ryyehuo: '业火',
                        ryyehuo_info: '出牌阶段,你可以将一张牌置于牌堆顶并令一名角色选择一个花色,其从牌堆顶展示一张牌获得之,若此牌花色与其选择的花色不同,你选择一项:1.令其受到一点火属性伤害,2.令其弃置与此牌颜色相同的所有牌.',
                        ry_ganning: '◎甘宁',
                        ryjieying: '劫营',
                        ryjieying2: '劫营',
                        ryjieying_info: '出牌阶段,你可以与一名其他角色拼点,赢者视为对输者使用一张【过河拆桥】.有♣️️牌因此法进入弃牌堆后,你将其置于武将牌上,并于回合结束时获得之.',
                        ryyinling: '银铃',
                        ryyinling_info: '一名角色回合结束后,若其于回合内使用过牌且点数为依次递增或依次递减,则你获得一枚「铃」.当一张牌指定多个目标时,你可以弃置任意枚「铃」并减少等量的目标.',
                        ry_huanggai: '◎黄盖',
                        rykurou: '苦肉',
                        rykurou_info: '出牌阶段限一次,你可以弃置一张牌并选择一名角色,令其对自己造成一点火焰伤害.',
                        ryzhaxiang: '诈降',
                        ryzhaxiang_info: '当你受到一点火焰伤害后,你可以摸三张牌,并可以弃置其中任意量黑色牌,横置等量的角色.',
                        ry_lvmeng: '◎吕蒙',
                        rykeji: '克己',
                        rykeji_info: '出牌阶段结束时,若你未于本阶段造成过伤害,你可以跳过弃牌阶段并选择摸两张牌或获得1点护甲值.',
                        rytanhu: '探虎',
                        rytanhu_info: '出牌阶段开始时,你可以选择一名其他角色,你猜测其手牌中是否有红色牌并令其仅对你展示所有手牌,若猜对,你选择其X张手牌(X为你的护甲值且至少为1),其于本回合不能使用或打出这些牌,且你于本回合获得技能〖激昂〗;若猜错,本阶段你不能对其使用牌.',
                        ry_luxun: '◎陆逊',
                        ryqianxun: '谦逊',
                        ryqianxun2: '谦逊',
                        ryqianxun_info: '当你成为♥️️【杀】或锦囊牌的唯一目标时,你可以将所有手牌置于武将牌上.若如此做,若此牌为延时类锦囊牌,则此牌对你无效,且回合结束后你获得武将牌上的牌.',
                        rylianying: '连营',
                        rylianying_info: '当你失去所有手牌后,你摸等量的牌,将武将牌翻面.',
                        rycuike: '摧克',
                        rycuike_info: '当一名角色成为红色基本牌或红色非延时类锦囊牌的目标后,你可以弃置一张牌令此牌对其无效,你对其造成一点火焰伤害.',
                        ry_zhangliao: '◎张辽',
                        rytuxi: '突袭',
                        rytuxi_info: '摸牌阶段,你可以少摸任意量牌,获得至多两名角色一共等量的手牌,若此阶段你没有从牌堆摸牌且额定摸牌量没有因〖突袭〗+1,则你令下个摸牌阶段额定摸牌量+1.',
                        ryliaolai: '辽来',
                        ryliaolai_info: '出牌阶段限一次,你可以废除一种装备栏,视为使用一张无视距离的【杀】,你可以再废除一种装备栏猜测此杀是否命中(仅你知晓),若猜对,你回复所有废除的装备区.',
                        ry_xuzhu: '◎许褚',
                        ryhanzhan: '酣战',
                        ryhanzhan_info: '你可以跳过你除弃牌阶段外的任意阶段.若你以此法跳过了摸牌阶段,则你从牌堆中随机获得以下的任意三张牌:【酒】、【杀】、【决斗】、装备牌.<span class="Qmenu">锁定技,</span>你每装备了一张武器牌或-1马,使用的【杀】造成的伤害+1.',
                        ryluoyi: '裸衣',
                        ryluoyi_info: '当你使用【杀】指定目标后,你可以令自己本回合所有的手牌均视为【杀】,并令结算此【杀】的方法改为:从其开始,其与你各展示一张未展示过的【杀】,若为你不能展示,则视为其闪避,否则此【杀】命中.',
                        ry_guojia: '◎郭嘉',
                        rytiandu: '天妒',
                        ryruliao: '入料',
                        ryruliao2: '入料',
                        ryruliao3: '入料',
                        ryruliao_info: '当你受到1点伤害后,你可以进行一次判定,选择一项:1.摸两张牌并可以将其中任意张牌分配给其他角色,2.移动场上一张牌,3.获得一张武将牌.',
                        ryyiji: '遗计',
                        ryyiji_info: '你死亡后,你可以选择一名角色,其可以在合理的时机移除一个你的武将牌并发动其中一个合理的技能.',
                        ry_caoren: '◎曹仁',
                        ryjushou: '拒守',
                        ryjushou_info: '弃牌阶段开始前,你可以跳过该阶段,翻面并摸两张牌.<span class="Qmenu">锁定技,</span>你武将牌状态发生变化时,你摸一张牌并可以使用一张装备牌或一张延时类锦囊牌.',
                        rykuiwei: '溃围',
                        rykuiwei_info: '你可以将装备区中的一张牌和手牌中一张基本牌视为【无懈可击】使用.此牌结算完毕后,你可以根据其中装备牌的不同类别分别发动如下效果:1.武器牌,弃置同等于此牌攻击范围数量的角色各一张牌,2.防具牌,令一名其他角色回复1点体力,3.坐骑牌,令一名角色摸一张牌,其可以使用一张【杀】,4.宝物牌,令一名其他角色重置武将牌.',
                        ry_simayi: '◎司马懿',
                        rylanggu: '狼顾',
                        rylanggu_info: '当你受到1点伤害/造成1点伤害后,你可以进行一次判定,若判定结果为黑色,你获得伤害来源/目标的一张牌;为红色,你获得一个「忍」标记️',
                        ryzhuizun: '追尊',
                        ryzhuizun_info: '觉醒技,准备阶段,若你的「忍」标记数不少于3个,则你减1点体力上限,选择回复1点体力或摸两张牌,获得技能〖拜印〗.',
                        rybaiyin: '拜印',
                        rybaiyin_info: '你可以在合理的时机弃置一个「忍」标记发动以下技能:〖执鞭〗、〖仁德〗、〖制衡〗、〖集智〗、〖完杀〗、〖连破〗.若你清除了这些技能中的非「忍」标记,则你获得等量的「忍」标记.',
                        ry_caocao: '◎曹操',
                        ryjianxiong: '奸雄',
                        ryjianxiong_info: '此技能初始等级为1级.<br>1级:其他角色的回合结束时和你的出牌阶段,你可以将一张手牌视为当前回合角色最近使用的一张基本牌或非延时类锦囊牌使用.<br>2级:其他角色的回合结束时和你的出牌阶段,你可以将一张手牌视为当前回合角色最近使用的一张基本牌或非延时类锦囊牌使用(无距离限制).<br>3级:其他角色的回合结束时和你的出牌阶段,你可以将一张牌视为当前回合角色最近使用的一张基本牌或非延时类锦囊牌使用(无距离限制).<br>4级:其他角色的回合结束时和你的出牌阶段,你可以将一张牌视为当前回合角色最近使用的一张基本牌或非延时类锦囊牌使用(无距离限制).此牌结算完毕后,若你因此牌造成伤害,你摸一张牌.<br>5级:其他角色的回合结束时和你的出牌阶段,你可以将一张牌视为当前回合角色最近使用的一张基本牌或非延时类锦囊牌使用(无距离限制).此牌结算完毕后,若你因此牌造成伤害,你摸一张牌并回复1点体力.',
                        ryzhibian: '执鞭',
                        ryzhibian_info: '出牌阶段限一次,你可以弃置一张非基本牌并令至多X名角色各选择一项(X为所有体力值不满的角色总和且至少为1):1.弃置一张牌,受到你对其造成的1点伤害并回复1点体力,2.令你升级〖奸雄〗(若为满级则改为令你摸一张牌).',
                        ryweiwu: '魏武',
                        ryweiwu_info: '主公技.其他魏势力角色受到伤害后,其可以进行一次判定,若判定结果为黑色,其可以令你获得判定牌;限定技,你可以令一名其他角色将势力改为「魏」,回复1点体力并摸一张牌.',
                        ry_caoxing: '◎曹性',
                        ryjianyong: '健勇',
                        ryjianyong_info: '当一名角色成为【杀】的目标时,你可以选择一名角色并与其拼点,而后你可以将两张拼点牌中的任意一张♥️️牌置于牌堆顶,输者与此杀使用者成为此杀的额外目标(若均为使用者,则此杀对其结算两次).',
                        ry_chenshi: '◎陈式',
                        ryjiezhong: '竭忠',
                        ryjiezhong_info: '你可以将至少含有一张基本牌的两张牌当一张基本牌使用或打出(你以此法使用的牌无距离限制).此牌结算完毕后,你可以回复一名角色的一个废除的装备栏,根据另一张牌的种类执行对应效果:<br>①基本牌,你摸一张牌并选择废除一个装备栏.<br>②非坐骑类装备牌,你获得此牌的技能效果.<br>③锦囊牌,你可以选择一名未选择过的其他角色,你回复1点体力,其摸两张牌.',
                        ry_jiahua: '◎贾华',
                        rytonghu: '统护',
                        rytonghu_info: '每回合限一次,当一名角色/吴势力角色/孙姓武将成为【杀】或非延时类锦囊的唯一目标时,若此牌为:<br>①【杀】,你可以随机使用牌堆中一张防具牌/一张防具牌和一张武器牌/一张防具牌、一张武器牌和一张+1马.<br>②非延时类锦囊牌,你摸两/三/四张牌.<br>将此牌目标改为你,且若你使用【闪】或【无懈可击】抵消了此牌,你可以对来源使用一张【杀】.',
                        ry_zangba: '◎臧霸',
                        ryjudong: '据东',
                        ryjudong_mark: '据东使用',
                        ryjudong_effect: '据东上限',
                        ryjudong_info: '出牌阶段开始前,你可以摸X张牌,你须选择X张手牌且你本回合仅能使用或打出这些牌,并选择Y张牌不计入手牌上限(X为你已损失体力值+1且至少为2,Y为攻击范围内含有你的目标数).',
                        ryhengjiang: '横江',
                        ryhengjiang_info: '出牌阶段,你可以展示手中此阶段内以此法未展示过的五张牌并选择一名角色,若为:①非同花顺,你令其下回合手牌上限-1;②♠️️或♣️️同花顺,你对其造成1点伤害;③♥️️或♦️️同花顺,你获得其超出体力上限的手牌.',
                        ry_huamulan: '◎花木兰',
                        rymili: '迷离',
                        rymili_info: '准备阶段,你可以摸一张牌或弃置一张牌并更改你的性别.若你的性别为:男性,你视为拥有〖进讨〗;女性,你视为拥有〖枭姬〗.',
                        ryjuntie: '军贴',
                        ryjuntie_info: '<span class="Qmenu">锁定技,</span>若你的身份不为主公,则:当主公使用一张非装备牌指定目标时,你须记录此牌名;当主公受到伤害后,你随机记录<受到>、<造成>、<目标>、<摸>、<弃>中一个.〖军贴〗的记录称为词条.',
                        ryyizhuang: '易装',
                        ryyizhuang_info: '出牌阶段限一次,你可以弃置数量同等于你的体力值的词条,获得一个描述中含有这些词条的技能.结束阶段,若你弃置了词条但没有获得技能,或你的词条数不超过2,你摸两张牌.',
                        ry_pangtong: '◎庞统',
                        rymanye: '漫野',
                        rymanye_use_backup: '漫野',
                        rysha_fire: '火【杀】',
                        rysha_fire_info: '出牌阶段,对攻击范围内的一名其他角色使用,目标角色受到1点火属性伤害.',
                        rymanye_info: '当你使用♣️️牌或可以造成火属性伤害的牌指定目标时,你可以令此牌获得此下效果:此牌结算完毕后,若此牌:造成伤害,你可以废除受到此牌造成的伤害的角色的一个装备栏且若因此弃置了装备牌,你获得之;未造成伤害,你获得牌堆中的一张♣️️牌并获得1枚<凤>标记.出牌阶段限一次,你可以失去1枚<凤>标记并视为使用一张火【杀】、【火攻】或【火烧连营】.',
                        ryfeng: '鸾凤',
                        ryliance: '连策',
                        ryliance_info: '<span class="Qmenu">锁定技,</span>当你存活时,有废除装备栏的角色始终处于横置状态.',
                        ryfengming: '凤鸣',
                        ryfengming_info: '觉醒技,准备阶段,若场上横置的角色数+你拥有的<凤>标记数不小于场上的存活人数,你获得技能〖展骥〗和〖涅槃〗,选择回复1点体力或摸两张牌.',
                    },
                };
                for (const i in riyuecharacter.character) {
                    const info = riyuecharacter.character[i];
                    info[4].push(`ext:日月同辉/image/${i}.jpg`);
                    info[4].push(`die:ext:日月同辉/audio/${i}.mp3`); //QQQ
                }
                lib.config.all.characters.add('riyuecharacter');
                lib.config.characters.add('riyuecharacter');
                lib.translate.riyuecharacter_character_config = '日月同辉';
                return riyuecharacter;
            });
        },
        package: {
            intro: `<br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>`,
            author: 'noname',
        },
    }
})
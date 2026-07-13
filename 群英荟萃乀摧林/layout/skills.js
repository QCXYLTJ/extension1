'use strict';
qyhcCL.arenaReady.push((lib, game, ui, get, ai, _status, config) => {
    //翻译lib.translate.
    var obj = {
        tryFanchu: '翻出',
        _bahu: '跋扈',
        _feiyang: '飞扬',
        _qyhc_showCards_log: '展示',
        clwt_qyhc_character_config: '江海陆沉',
        qyhc_boss_character_config: '摧林活动场',
        yingbian_linji_tag: '临机',
        loseFanchuCL: '翻出失败',
        qyhc_nocard: '牌堆顶没有牌',
        _qyqyhc_zongzhi_effect_bg: qyhcCL.beOwned10 ? '<span class=firetext>纵制</span>' : '<span class=firetext>纵</span>',
        xujiu2: '酗酒',
        kuangFeng2: '狂风',
        daWu2: '大雾',
        qyhc_yinfu: '殷富',
        qyhc_qiangyi: '强易',
        qyhc_honggu: '鸿贾',
        qyhc_jiyu: '觊觎',
        qyhc_yinfu_info: '锁定技,结束阶段,若你体力值为1,你回复1点体力.',
        qyhc_qiangyi_info: '摸牌阶段结束时,你可以获得一名其他角色一张牌,交给其一张牌.',
        qyhc_honggu_info: '锁定技,你的手牌上限+3.',
        qyhc_jiyu_info: '出牌阶段开始时,你可以视为使用一张【知己知彼】或【调虎离山】.',
        qyhc_tongji: '同济',
        qyhc_tongji_info: '队友的手牌对你可见;你对队友造成伤害时,可以失去此技能防止之.',
        qyhc_gongku: '共苦',
        qyhc_gongku_info: '农民死亡后,你可以回复1点体力或摸两张牌.',
        ruyijingubang_cl: '如意金箍棒',
        ruyijingubang_cl_info: '锁定技,当你造成伤害时,此伤害值改为2点;当你使用【杀】时,你判定,若结果为黑色,此【杀】不可被响应.',
        ruyijingubang_cl2: '如意金箍棒',
        ousibuyunlv1: '藕丝步云履·阴',
        ousibuyunlv1_info: '锁定技,你计算与其他角色的距离-1.',
        ousibuyunlv2: '藕丝步云履·阳',
        ousibuyunlv2_info: '锁定技,其他角色计算与你的距离+1.',
        suozihuangjinjia: '锁子黄金甲',
        suozihuangjinjia_info: '锁定技,当你受到伤害时,此伤害值改为1点;当你成为【杀】的目标后,你判定,若结果为红色,此【杀】无效.',
        suozihuangjinjia2: '锁子黄金甲',
        fengchizijinguan: '凤翅紫金冠',
        fengchizijinguan_info: '准备阶段,你可以对至多两名其他角色各造成1点伤害.',
        yingbian_thunderdamage: '应变·融雷',
    };
    for (var i in obj) lib.translate[i] = obj[i];
    //卡牌类提示
    lib.card.loseFanchuCL = {
        fullskin: true,
        type: '',
    };
    lib.card.qyhc_nocard = {
        fullskin: true,
        type: '',
    };
    lib.character.peixiu = ['male', 'jin', 3, ['qyhc_xingtu', 'qyhc_juezhi'], ['character:peixiu', 'die:die/peixiu', 'unseen']];
    var xingtu = config.mazhao ? 'qyhc_xingtu' : 'xingtu';
    var juezhi = config.qyhc_peixiu == 'kz' ? 'qyhc_juezhi' : 'juezhi';
    lib.characterPack.mobile.peixiu = ['male', 'jin', 3, [xingtu, juezhi], []];
    if (lib.config.characters.includes('mobile')) lib.character.peixiu = ['male', 'jin', 3, [xingtu, juezhi], []];
    //globalSkills
    lib.skill._qyhc_losegaincheck = {
        trigger: {
            global: ['loseEnd', 'equipEnd', 'addJudgeEnd', 'gainEnd', 'addToExpansionEnd', 'loseAsyncEnd', 'cardsDiscardEnd'],
        },
        forced: true,
        silent: true,
        firstDo: true,
        priority: Infinity,
        forceOut: true,
        forceDie: true,
        content() {
            if (trigger.getl) {
                var evt = trigger.getl(player);
                if (!evt || evt.player != player) {
                } else {
                    if ((evt.hs && evt.hs.length) || (evt.es && evt.es.length)) {
                        if (!trigger.losers) trigger.losers = [];
                        trigger.losers.add(player);
                    }
                    if (evt.js && evt.js.length) {
                        if (!trigger.losers_j) trigger.losers_j = [];
                        trigger.losers_j.add(player);
                    }
                }
            }
            if (trigger.getg) {
                var cards = trigger.getg(player);
                if (cards?.length) {
                    if (!trigger.gainers) trigger.gainers = [];
                    trigger.gainers.add(player);
                }
            }
        },
    };
    lib.skill._qyhc_losecheck0 = {
        trigger: { player: ['discardBefore', 'loseToDiscardpileBefore'] },
        forced: true,
        silent: true,
        firstDo: true,
        forceOut: true,
        priority: 1919180,
        forceDie: true,
        filter(trigger, player, name) {
            if (name == 'loseToDiscardpileBefore') {
                if (lib.config.extension_群英荟萃乀摧林_game_speed && trigger.getParent('recast').name == 'recast') trigger.delay = false;
                return false;
            }
            if (trigger.source && !trigger.discarder) trigger.discarder = trigger.source;
            if (trigger.discarder && !trigger.source) trigger.source = trigger.discarder;
            if (typeof trigger.notBySelf != 'boolean' && trigger.source && trigger.discarder && trigger.source == trigger.discarder && trigger.source != player) trigger.notBySelf = true;
            return false;
        },
        content() { }, //QQQ
    };
    lib.skill._qyhc_losegaincheck1 = {
        trigger: {
            global: ['loseEnd', 'equipEnd', 'addJudgeEnd', 'gainEnd', 'addToExpansionEnd', 'cardsDiscardEnd', 'loseAsyncEnd', 'qyhcLoseGainEnd', 'loseAfter', 'equipAfter', 'addJudgeAfter', 'gainAfter', 'addToExpansionAfter', 'loseAsyncAfter', 'qyhcLoseGainAfter', 'cardsDiscardAfter'],
        },
        forced: true,
        silent: true,
        forceOut: true,
        firstDo: true,
        priority: 1919180,
        forceDie: true,
        filter(trigger, player, name) {
            var number = name.includes('End') ? 3 : 4;
            if (trigger.getl)
                if (!trigger.loser && !trigger.loser_j) {
                    if (!trigger['losers' + number]) trigger['losers' + number] = [];
                    var evt = trigger.getl(player);
                    if (evt && !trigger['losers' + number].includes(player)) {
                        if (trigger.losers && trigger.losers.includes(player)) {
                            trigger.loser = player;
                            if (evt.hs && evt.hs.length && player.countCards('h') == 0) trigger.lasth = true;
                            if (evt.es && evt.es.length && player.countCards('e') == 0) trigger.laste = true;
                            trigger['losers' + number].add(player);
                            trigger.tempnoaddtrigger = undefined;
                        }
                        if (trigger.losers_j && trigger.losers_j.includes(player)) {
                            trigger.loser_j = player;
                            if (player.countCards('j') == 0) trigger.lastj = true;
                            trigger['losers' + number].add(player);
                            trigger.tempnoaddtrigger = undefined;
                        }
                    }
                }
            if (trigger.getg)
                if (!trigger.gainer && trigger.gainers && trigger.gainers.includes(player)) {
                    if (!trigger['gainers' + number]) trigger['gainers' + number] = [];
                    var cards = trigger.getg(player);
                    if (cards && cards.length && !trigger['gainers' + number].includes(player)) {
                        trigger.gainer = player;
                        trigger['gainers' + number].add(player);
                        trigger.tempnoaddtrigger = undefined;
                    }
                }
            return false;
        },
        content() { },
    };
    lib.skill._qyhc_losegaincheckA = {
        trigger: {
            global: ['loseEnd', 'equipEnd', 'addJudgeEnd', 'gainEnd', 'addToExpansionEnd', 'loseAsyncEnd', 'qyhcLoseGainEnd', 'cardsDiscardEnd', 'loseAfter', 'equipAfter', 'addJudgeAfter', 'gainAfter', 'addToExpansionAfter', 'loseAsyncAfter', 'qyhcLoseGainAfter', 'cardsDiscardAfter'],
        },
        forced: true,
        silent: true,
        lastDo: true,
        priority: -Infinity,
        forceOut: true,
        forceDie: true,
        filter(trigger, player, name) {
            var number = name.includes('End') ? 3 : 4;
            var name = number == 3 ? 'qyhcLoseGainEnd' : 'qyhcLoseGainAfter';
            trigger.loser = undefined;
            trigger.loser_j = undefined;
            trigger.gainer = undefined;
            trigger.lasth = undefined;
            trigger.laste = undefined;
            trigger.lastj = undefined;
            if ((trigger.losers && trigger.losers.includes(player) && (!trigger['losers' + number] || !trigger['losers' + number].includes(player))) || (trigger.gainers && trigger.gainers.includes(player) && (!trigger['gainers' + number] || !trigger['gainers' + number].includes(player))) || (trigger.losers_j && trigger.losers_j.includes(player) && (!trigger['losers' + number] || !trigger['losers' + number].includes(player)))) {
                if (trigger.tempnoaddtrigger) return false;
                else trigger.tempnoaddtrigger = true;
                trigger.trigger(name);
            }
            return false;
        },
        content() { },
    };
    lib.skill._qyhc_losegaincheckB = {
        trigger: {
            global: ['cardsDiscardBegin'],
        },
        forced: true,
        silent: true,
        lastDo: true,
        priority: -Infinity,
        forceOut: true,
        forceDie: true,
        filter(event) {
            if (!event.cards) return false;
            var temp = event;
            while (true) {
                if (temp.getl) return false;
                var temp = temp.parent;
                if (!temp || !temp.name) break;
            }//QQQ
            event.getlmap = {};
            for (var i of event.cards) {
                var owner = get.owner(i);
                if (!owner) continue;
                if (!event.getlmap[owner.playerid]) {
                    event.getlmap[owner.playerid] = {
                        player: owner,
                        hs: [],
                        es: [],
                        js: [],
                        ss: [],
                        xs: [],
                        cards: [],
                        cards2: [],
                    };
                }
                (event.getlmap[owner.playerid][get.position(i) + 's'] || []).push(i);
                event.getlmap[owner.playerid].cards.push(i);
                if (['h', 'e'].includes(get.position(i))) event.getlmap[owner.playerid].cards2.push(i);
            }
            event.getl = function (player) {
                return (
                    this.getlmap[player.playerid] || {
                        player: this,
                        hs: [],
                        es: [],
                        js: [],
                        ss: [],
                        xs: [],
                        cards: [],
                        cards2: [],
                    }
                );
            };
            return false;
        },
        content() { },
    };
    lib.skill._qyqyhc_zongzhi_effect = {
        trigger: {
            global: 'roundFinish',
        },
        filter(event, player) {
            if (player.storage.qyhc_zongzhi_list && player.storage.qyhc_zongzhi_list.length) {
                player.trymarkSkill('_qyqyhc_zongzhi_effect');
                var T = player.storage.qyhc_zongzhi_list;
                for (var i = 0; i < T.length; i++) {
                    if (!T[i]) T.splice(i--, 1);
                    if (T[i][2] != game.roundNumber) T.splice(i--, 1);
                    if (!T[i][1].isIn()) T.splice(i--, 1);
                }
            } else {
                return false;
            }
            return T && T.length;
        },
        content() {
            'step 0';
            event.targets = game.players.slice(0).sortBySeat(_status.currentPhase);
            ('step 1');
            if (event.targets.length) event.current = event.targets.shift();
            else event.finish();
            ('step 2');
            var current;
            var T = player.storage.qyhc_zongzhi_list;
            for (var i = 0; i < T.length; i++) {
                if (T[i][1] == event.current) {
                    current = T[i];
                    T.splice(i--, 1);
                    break;
                }
            }
            if (current) event.Cnum = current[0];
            else event.goto(1);
            ('step 3');
            player.chooseBool('###〖纵制〗延时效果:是否令' + get.translation(event.current) + '选择一项？###<center>两项分别为:1.交给你两张点数为' + get.colorful([event.Cnum, 13, NaN], '￥') + '的牌;2.受到你造成的2点伤害</center>').set('choice', get.attitude(player, event.current));
            ('step 4');
            if (result.bool) {
                event.player = player;
                player.$skill('纵制');
                player.logSkill_qyhccl('qyhc_zongzhi', event.current);
                game.log(player, '对', event.current, '发动', '#g〖纵制〗', '的延时效果,令', event.current, '选择交给其两张点数为', get.colorful([event.Cnum, 13, NaN], '￥'), '的牌或受到其造成的2点伤害');
                event.current
                    .chooseCard('因' + get.translation(player) + '〖纵制〗效果,你须:<br>交给' + get.translation(player) + '两张点数为' + get.colorful([event.Cnum, 13, NaN], '￥') + '的牌,或点取消受到其造成的2点伤害', 2, 'he', (card) => card.number == _status.event.parent.Cnum)
                    .set('ai', function (card) {
                        if (get.attitude(event.current, event.player) > 0) return 114514;
                        if (get.damageEffect(event.current, event.player, event.current) > -0.3) return -1;
                        return 9 - get.value(card) && !['tao', 'xujiu', 'jiu'].includes(card.name);
                    });
            } else event.goto(2);
            ('step 5');
            if (result.bool) event.current.give(result.cards, player, true);
            else event.current.damage(player, 2);
            event.goto(2);
        },
        forced: true,
        name: '〖纵制〗效果',
        intro: {
            content(storage, player) {
                var str = '';
                var current = [];
                for (var x of game.players) {
                    if (x.storage.qyhc_zongzhi_list) {
                        var T = x.storage.qyhc_zongzhi_list;
                        if (T.length)
                            for (var i = 0; i < T.length; i++) {
                                if (!T[i]) T.splice(i--, 1);
                                if (T[i][2] != game.roundNumber) T.splice(i--, 1);
                                if (!T[i][1].isIn()) T.splice(i--, 1);
                            }
                        if (T.length) for (var j of T) if (j && j[1] == player) current.push([x, j]);
                    }
                }
                if (!current || !current.length) {
                    return;
                }
                var fromers = [];
                for (var i of current) {
                    if (i && i[0] && i[1]) {
                        str += '<center>被' + get.translation(i[0]) + '〖纵制〗:' + get.colorful([i[1][0], 13, true], '￥') + '</center>';
                        fromers.add(i[0]);
                    }
                }
                for (var i of game.players)
                    if (!fromers.includes(i)) {
                        i.classList.add('unselectable');
                    } else i.classList.add('selected');
                setTimeout(function () {
                    for (var j of game.players.concat(game.dead)) {
                        j.classList.remove('unselectable');
                        j.classList.remove('selected');
                    }
                }, 1500);
                return str;
            },
            markcount(storage, player) {
                var str = '';
                for (var x of game.players) {
                    if (x.storage.qyhc_zongzhi_list) {
                        var T = x.storage.qyhc_zongzhi_list;
                        if (T.length) {
                            T = T.filter((i) => i[2] == game.roundNumber && i[1].isIn());
                        } //QQQ
                        if (T.length) {
                            for (var j of T) {
                                if (j && j[1] == player) {
                                    str += get.colorful([j[0], 13, true], '￥');
                                }
                            }
                        }
                    }
                }
                if (!str.length) {
                    return;
                }
                return str;
            },
            name: '被变亮角色〖纵制〗',
        },
    };
    lib.skill._qyhchc_soulSkills = {
        trigger: {
            player: 'die',
        },
        forced: true,
        forceDie: true,
        ruleSkill: true,
        filter(event, player) {
            return (
                player.getSkills(null, false, false).filter((skill) => {
                    var info = get.info(skill);
                    return !!info.soulSkill;
                }).length > 0
            );
        },
        content() {
            'step 0';
            var skills = player.getSkills(null, false, false).filter((skill) => {
                var info = get.info(skill);
                return !!info.soulSkill;
            });
            event.skills = skills;
            if (skills.length)
                player
                    .chooseTarget('【英灵技】你可以选择一名其他角色,令其获得' + get.colorful(skills), lib.filter.notMe)
                    .set('ai', function (target) {
                        var player = _status.event.player;
                        if (get.attitude(player, target) < 1) return -1;
                        var skills = _status.event.skill;
                        var obj = player.getSkillObj(false, null, false, false);
                        var ans = get.attitude(player, target);
                        if (target == game.me) ans += 3;
                        for (var i in skills) if (obj[skills[i]]) ans -= 5;
                        return Math.max(0.1, ans);
                    })
                    .set('skills', skills);
            else event.finish();
            ('step 1');
            if (result.bool) {
                player.$skill('灵祐');
                player.popup('英灵技');
                player.line(result.targets);
                result.targets[0].addSkillLog(event.skills, true, '被<span class=bluetext>' + get.translation(player) + '</span>灵祐而');
            }
        },
    };
    lib.skill.xujiu2 = {
        ruleSkill: true,
        trigger: { player: 'damageBegin3' },
        forced: true,
        init(player, skill) {
            game.log(player, '<span class=yellowtext>进入</span><span class=redtext>酗酒</span>状态');
            if (!player.node.XuJiu) {
                player.node.XuJiu = ui.create.div('.playerjiu', player.node.avatar);
                player.node.XuJiu2 = ui.create.div('.playerjiu', player.node.avatar2);
            }
            player.markSkill(skill);
        },
        onremove(player, skill) {
            game.log(player, '<span class=greentext>离开</span><span class=redtext>酗酒</span>状态');
            if (player.node.XuJiu) {
                player.node.XuJiu.delete();
                player.node.XuJiu2.delete();
                delete player.node.XuJiu2;
                delete player.node.XuJiu;
            }
        },
        charlotte: true,
        superCharlotte: true,
        content() {
            trigger.num++;
        },
        intro: {
            content(storage, player) {
                if (!storage) storage = '';
                return '<center>受到的伤害+1<br>' + storage + ',脱离酗酒状态</center>';
            },
        },
        ai: {
            threaten: 6,
            fireAttack: true,
            effect: {
                target(card, player, target) {
                    if (get.tag(card, 'damage')) return 2;
                },
            },
        },
    };
    lib.skill.kuangFeng2 = {
        ruleSkill: true,
        trigger: { player: 'damageBegin3' },
        forced: true,
        init(player, skill) {
            game.log(player, '<span class=yellowtext>进入</span><span class=redtext>狂风</span>状态');
            if (!player.node.kuangFeng) {
                player.node.kuangFeng = ui.create.div('.playerkuangfeng', player.node.avatar);
                player.node.kuangFeng2 = ui.create.div('.playerkuangfeng', player.node.avatar2);
            }
            player.markSkill(skill);
        },
        onremove(player) {
            game.log(player, '<span class=greentext>离开</span><span class=redtext>狂风</span>状态');
            if (player.node.kuangFeng) {
                player.node.kuangFeng.delete();
                player.node.kuangFeng2.delete();
                delete player.node.kuangFeng;
                delete player.node.kuangFeng2;
            }
        },
        filter(event, player) {
            return event.hasNature('fire');
        },
        charlotte: true,
        superCharlotte: true,
        content() {
            trigger.num++;
        },
        intro: {
            content: '<center>受到的火焰伤害+1</center>',
        },
        ai: {
            fireAttack: true,
            effect: {
                target(card, player, target) {
                    if (get.tag(card, 'firedamage')) return 2;
                },
            },
        },
    };
    lib.skill.daWu2 = {
        ruleSkill: true,
        trigger: { player: 'damageBefore' },
        forced: true,
        init(player, skill) {
            game.log(player, '<span class=yellowtext>进入</span><span class=bluetext>大雾</span>状态');
            if (!player.node.daWu) {
                player.node.daWu = ui.create.div('.playerdawu', player.node.avatar);
                player.node.daWu2 = ui.create.div('.playerdawu', player.node.avatar2);
            }
            player.markSkill(skill);
        },
        onremove(player) {
            game.log(player, '<span class=greentext>离开</span><span class=bluetext>大雾</span>状态');
            if (player.node.daWu) {
                player.node.daWu.delete();
                player.node.daWu2.delete();
                delete player.node.daWu;
                delete player.node.daWu2;
            }
        },
        filter(event, player) {
            return !event.hasNature('thunder');
        },
        charlotte: true,
        superCharlotte: true,
        content() {
            trigger.cancel();
        },
        intro: {
            content: '<center>受到非雷电伤害前,防止之</center>',
        },
        ai: {
            nofire: true,
            effect: {
                target(card, player, target, current) {
                    if (get.tag(card, 'damage') && !get.tag(card, 'thunderDamage')) return [0, 0];
                },
            },
        },
    };
    lib.skill.qyhc_jiu_logger = {
        init(player, skill) {
            if (player.storage.jiu > 1) player.markSkill(skill);
            else player.removeSkill(skill);
        },
        onremove(player, skill) {
            player.unmarkSkill(skill);
        },
        mark: true,
        charlotte: true,
        intro: {
            content(storage, player) {
                if (player.storage.jiu == 3) return '<center>才' + get.cnNumber(player.storage.jiu) + '瓶儿？再给' + (player.hasSex('male') ? '他' : player.hasSex('female') ? '她' : 'TA') + '开五瓶漱漱口!</center>';
                return '<center>已经喝了' + get.cnNumber(player.storage.jiu) + '瓶酒<br>(使用的下一张【杀】造成的伤害+' + player.storage.jiu + ')</center>';
            },
            name(storage, player) {
                return '酒 [' + player.storage.jiu + ']';
            },
            markcount(storage, player) {
                return '[' + player.storage.jiu + ']';
            },
        },
    };
    lib.translate.qyhc_jiu_logger_bg = '酒';
    lib.skill.stageUsableAt = {
        charlotte: true,
        onremove(player, skill) {
            if (player.storage[skill]) for (var i of player.storage[skill]) player.addCountNum(i, false);
        },
    };
    lib.skill.stageUsableAt2 = {
        charlotte: true,
    };
    lib.skill._qyhc_stagenum3 = {
        forced: true,
        firstDo: true,
        priority: 114514,
        trigger: { player: lib.phaseName.map((i) => i + 'Before') },
        silent: true,
        content() {
            'step 0';
            _status.currentStage = trigger;
            /*game.me.chooseTargetControl(['摸一张牌','回复1点体力'],true,'请选择一名角色并为其选择一项',function(event,player,target){
                return player!=target;
            },function(choice,target,index,player){
                if(target.isDamaged()&&index) return false;
                return true;
            },function(choice,target,index,player){
                return index;
            });
            'step 1'
            player.line(result.targets[0]);
            if(result.index) player.draw();else player.popup(' ');*/
        },
    };
    lib.skill._qyhc_stagenum4 = {
        forced: true,
        lastDo: true,
        priority: -114514,
        silent: true,
        trigger: { player: lib.phaseName.map((i) => i + 'After') },
        content() {
            _status.currentStage = null;
        },
    };
    lib.skill._qyhc_stagenum = {
        forced: true,
        lastDo: true,
        priority: -Infinity,
        silent: true,
        trigger: { player: lib.phaseName.map((i) => i + 'Before').concat(['phaseBegin', 'phaseEnd']) },
        filter(event) {
            return event.name == 'phase' || !event.finished;
        },
        content() {
            player.qyhc_firstGain({}, 'qyhcAI');
            player.noPhaseDelay = true;
            if (trigger.name == 'phase') player.qyhcAI.qyhc_stagenum = 0;
            else {
                if (!player.qyhcAI.qyhc_stagenum) player.qyhcAI.qyhc_stagenum = 1;
                else player.qyhcAI.qyhc_stagenum++;
                player.update();
            }
            if (event.triggername == 'phaseEnd') {
                player.tryunmarkSkill('clanguixiang');
            } else {
                if (player.hasSkill('clanguixiang')) player.trymarkSkill('clanguixiang');
            }
            for (var i of game.players) i.update();
        },
    };
    lib.skill._qyhc_maxhandcard = {
        mod: {
            maxHandcard(player, num) {
                return num + player.qyhc_getMoveMax();
            },
        },
        intro: {
            content(a, player) {
                var str = '';
                if (lib.skill._qyhc_gameStartusetohandmax) str += '<center>手牌上限修正值</center>';
                var hands = player.qyhc_firstGain({}, 'storage', 'qyhc_Handslist');
                var thands = player.qyhc_firstGain({}, 'storage', 'qyhc_tempHandslist');
                for (var i in hands)
                    if (hands[i]) {
                        var x = hands[i];
                        if (x > 0) {
                            var strA = 'green';
                            var strB = '+';
                        } else {
                            var strA = 'fire';
                            var strB = '';
                        }
                        str += '<center><span class=' + strA + 'text>' + get.translation(i) + ' ' + strB + x + '</span></center>';
                    }
                for (var i in thands)
                    if (Array.isArray(thands[i]))
                        for (var j in thands[i])
                            if (Array.isArray(thands[i][j]) && thands[i][j][2]) {
                                var x = thands[i][j][2];
                                if (x > 0) {
                                    var strA = 'blue';
                                    var strB = '+';
                                } else {
                                    var strA = 'yellow';
                                    var strB = '';
                                }
                                str += '<center><span class=' + strA + 'text>' + thands[i][j][1] + ' ' + get.translation(i) + ' ' + strB + x + '</span></center>';
                            }
                return str;
            },
            name(a, player) {
                var num = player.getHandcardLimit();
                var num2 = player.qyhc_getMoveMax();
                if (num2 > 0) {
                    var strA = 'green';
                    var strB = '+' + player.qyhc_getMoveMax();
                } else if (num2 < 0) {
                    var strA = 'fire';
                    var strB = '' + player.qyhc_getMoveMax();
                } else if (lib.skill._qyhc_gameStartusetohandmax) return '手牌上限:<span class=yellowtext>' + num + '</span>';
                else return '手牌上限修正值:<span class=yellowtext>0</span>';
                if (lib.skill._qyhc_gameStartusetohandmax) {
                    var num3 = num - num2;
                    return '手牌上限:' + num3 + '<span class=' + strA + 'text>' + strB + '</span>=<span class=yellowtext>' + num + '</span>';
                }
                return '手牌上限修正值:' + '<span class=' + strA + 'text>' + strB + '</span>';
            },
            markcount(a, player) {
                var num = player.qyhc_getMoveMax();
                if (num > 0) {
                    var strA = 'green';
                    var strB = '+' + num;
                } else if (num < 0) {
                    var strA = 'fire';
                    var strB = num;
                } else {
                    var strA = 'yellow';
                    var strB = null;
                }
                if (lib.skill._qyhc_gameStartusetohandmax) {
                    player.chanMarkinner('_qyhc_maxhandcard', '🖐' + '<span class=yellowtext>' + (player.getHandcardLimit() - num) + '</span>' + (num ? '<span class=' + strA + 'text>' + strB + '</span>' : ''));
                    return;
                }
                var list;
                for (var i in player.storage.qyhc_Handslist)
                    if (player.storage.qyhc_Handslist[i]) {
                        if (list) {
                            list = false;
                            break;
                        }
                        list = i;
                    }
                if (list !== false && player.qyhc_firstGain({}, 'storage', 'qyhc_tempHandslist')) {
                    var temp = player.storage.qyhc_tempHandslist;
                    for (var i in temp)
                        if (Array.isArray(temp[i])) {
                            var tochecknum = 0;
                            for (var j in temp[i]) if (Array.isArray(temp[i][j]) && typeof temp[i][j][2] == 'number') tochecknum += temp[i][j][2];
                            if (tochecknum == 0) continue;
                            if (list) {
                                list = false;
                                break;
                            }
                            list = i;
                        }
                }
                if (list == undefined) {
                    return;
                }
                if (!qyhcCL.beOwned10) {
                    player.chanMarkinner('_qyhc_maxhandcard', '<span class=' + strA + 'text>' + get.colorful(num, '+-') + '</span>');
                    return Math.abs(num);
                }
                if (list) {
                    player.chanMarkinner('_qyhc_maxhandcard', '<span class=' + strA + 'text>' + get.translation(list) + strB + '</span>');
                } else {
                    player.chanMarkinner('_qyhc_maxhandcard', '<span class=' + strA + 'text>' + (strB ? '牌限' + strB : '守恒修正') + '</span>');
                }
            },
        },
    };
    lib.skill._qyhc_update = {
        trigger: { global: ['loseEnd', 'gainEnd', 'changeHp', 'phaseAfter', 'phaseBeginStart', 'clAddSkill'] },
        forced: true,
        delay: false,
        silent: true,
        lastDo: true,
        marktext: '荐实?:?',
        intro: {
            name: () => '〖荐实〗数值',
            content(event, player) {
                var a = player.countCards('h');
                var b = player.getHp();
                if (a == 0 || b == 0)
                    var strA = a,
                        strB = b;
                else
                    var strA = parseInt(a / Math.gcd(a, b)),
                        strB = parseInt(b / Math.gcd(a, b));
                return '手牌数与体力值之比:' + strA + ':' + strB;
            },
            markcount(storage, player) {
                var a = player.countCards('h');
                var b = player.getHp();
                if (a == 0 || b == 0)
                    var strA = a,
                        strB = b;
                else
                    var strA = parseInt(a / Math.gcd(a, b)),
                        strB = parseInt(b / Math.gcd(a, b));
                if (!player.marks._qyhc_update) return;
                if (qyhcCL.beOwned10) {
                    player.chanMarkinner('_qyhc_update', '荐实' + strA + ':' + strB);
                    return 0;
                }
                player.chanMarkinner('_qyhc_update', strA);
                return strB;
            },
        },
        filter(trigger, player, name) {
            if (!trigger) return false;
            player.qyhc_firstGain([], 'qyhcAI', 'tempSkills');
            if (name == 'clAddSkill' || !player.qyhcAI.tempSkills[game.phaseNumber]) player.qyhcAI.tempSkills[game.phaseNumber] = player.getSkillObj(true);
            var obj = player.qyhcAI.tempSkills[game.phaseNumber];
            if (lib.skill._qyhc_gameStartusetohandmax && _status.gameDrawed)
                if (!player.marks._qyhc_maxhandcard) player.trymarkSkill('_qyhc_gameStartusetohandmax');
                else player.tryunmarkSkill('_qyhc_gameStartusetohandmax');
            if (lib.config.extension_群英荟萃乀摧林_characBuding && player.beOn('phaseUse'))
                if (obj.clanyirong_QYHCqyhc_cl) player.trymarkSkill('clanyirong_QYHCqyhc_cl');
                else player.tryunmarkSkill('clanyirong_QYHCqyhc_cl');
            if (lib.config.extension_群英荟萃乀摧林_clwt_xunchenzu && obj.qyhc_jianshi) {
                for (var i of game.players) i.trymarkSkill('_qyhc_update');
                trigger.qyhc_cl_yuxu_nofind = false;
            } else if (trigger.qyhc_cl_yuxu_nofind !== false) trigger.qyhc_cl_yuxu_nofind = true;
            if (qyhcCL.last_upttrigger != trigger) {
                if (qyhcCL.last_upttrigger) if (qyhcCL.last_upttrigger.qyhc_cl_yuxu_nofind === true) for (var i of game.players.concat(game.dead)) i.tryunmarkSkill('_qyhc_update');
                qyhcCL.last_upttrigger = trigger;
            }
            if (player.name == 'clyl_chimeiwangliang' && Math.random() < 0.07) player.node.avatar.setBackground(['clyl_lisha_red', 'clyl_lisha_gre', 'clyl_lisha_blue', 'clyl_lisha_yell'].randomGet(), 'character');
            if (player.name == 'clyl_luochayecha' && Math.random() < 0.02) player.node.avatar.setBackground(['clyl_luochayecha_yecha', 'clyl_luochayecha'].randomGet(), 'character');
            return false;
        },
        content() { },
        mod: {
            selectTarget(card, player, range) {
                if (_status.event.name == 'chooseUseTarget' && _status.event.selectTarget) {
                    var sel = _status.event.selectTarget;
                    if (typeof sel != 'function') sel = get.select(sel);
                    else sel = sel(card, player, range);
                    range[0] = sel[0];
                    range[1] = sel[1];
                }
            },
        },
    };
    lib.skill._qyhc_auto_confirmcheck = {
        trigger: {
            player: ['chooseTargetBegin', 'chooseCardBegin', 'chooseToDiscardBegin', 'chooseCardEnd', 'chooseToDiscardEnd'],
        },
        charlotte: true,
        delay: false,
        silent: true,
        forced: true,
        lastDo: true,
        priority: -114514,
        filter(event, player, name) {
            if (name == 'chooseCardEnd' || name == 'chooseToDiscardEnd') {
                if (typeof event.onresult == 'function') event.onresult(event.result);
                return false;
            }
            if (event.complexCard || event.complexSelect || event.complexTarget || event.targetprompt || event.onresult) return false;
            return get.itemtype(event.selectTarget) == 'select' || get.itemtype(event.selectCard) == 'select' || typeof event.selectCard == 'function' || typeof event.selectTarget == 'function';
        },
        content() {
            _status.event = trigger;
            switch (trigger.name) {
                case 'chooseTarget':
                    if (qyhcCL.ObjEqual(get.select(trigger.selectTarget), [0, 0])) {
                        var toauto = true;
                        break;
                    }
                    if (trigger.deadTarget)
                        var fP = game.filterPlayer2((current) => {
                            return trigger.filterTarget(trigger.parent.card || null, player, current);
                        });
                    else
                        var fP = game.filterPlayer((current) => {
                            return trigger.filterTarget(trigger.parent.card || null, player, current);
                        });
                    if (fP.length == 0) {
                        var toauto = true;
                        trigger.onresult = function (result) {
                            if (!(result.targets || []).length) this.result.bool = false;
                        };
                    } else if (trigger.forced && fP.length <= get.select(trigger.selectTarget)[0]) var toauto = true;
                    break;
                case 'chooseCard':
                    if (qyhcCL.ObjEqual(get.select(trigger.chooseCard), [0, 0])) {
                        var toauto = true;
                        break;
                    }
                    var cC = [];
                    var cards = player.getCards(trigger.position || 'h');
                    for (var i of cards) if (trigger.filterCard(i, player)) cC.push(i);
                    var select = get.select(trigger.selectCard)[0];
                    select = Math.min(1, select);
                    if (cC.length < select || (get.itemtype(trigger.selectCard) == 'select' && cards.length < trigger.selectCard[0])) {
                        if (trigger.forced && cC.length) {
                            var toauto = true;
                        } else {
                            var toauto = true;
                            trigger.onresult = function (result) {
                                if (!(result.targets || []).length) this.result.bool = false;
                            };
                        }
                    } else if (get.itemtype(trigger.selectCard) == 'select') {
                        if (trigger.selectCard[1] == -1) trigger.selectCard = [cC.length, cC.length];
                        if (trigger.forced && cC.length == trigger.selectCard[0]) {
                            var toauto = true;
                        }
                    }
                    break;
                case 'chooseToDiscard':
                    if (qyhcCL.ObjEqual(get.select(trigger.selectCard), [0, 0])) {
                        var toauto = true;
                        break;
                    }
                    if (get.itemtype(trigger.selectCard) == 'select') {
                        var cC = [];
                        var cards = player.getDiscardableCards(player, trigger.position || 'h');
                        for (var i of cards) if (trigger.filterCard(i, player)) cC.push(i);
                        if (trigger.selectCard[1] == -1) trigger.selectCard = [cC.length, cC.length];
                        if (cC.length == 0 || cards.length < trigger.selectCard[0]) {
                            if (trigger.forced && cC.length);
                            else {
                                var toauto = true;
                                trigger.onresult = function (result) {
                                    if (!(result.targets || []).length) this.result.bool = false;
                                };
                            }
                        }
                    }
                    break;
            }
            if (toauto && lib.config.extension_群英荟萃乀摧林_autocancel && trigger.isMine() && qyhcCL.canAutoChoose(trigger) && !_status.auto) {
                _status.auto = true;
                player.addTempSkill('qyhc_autoremove', ['chooseToDiscardEnd', 'chooseCardEnd', 'chooseCardTargetEnd', 'chooseTargetEnd', 'chooseToUseEnd', 'chooseButtonEnd', 'choosePlayerCardEnd', 'discardPlayerCardEnd', 'gainPlayerCardEnd', 'phaseAfter']);
            }
        },
    };
    lib.skill.qyhc_autoremove = {
        charlotte: true,
        onremove() {
            if (qyhcCL.skillid.mustchooseToUse) {
                for (var i in qyhcCL.skillid.mustchooseToUse) lib.skill[i] = qyhcCL.skillid.mustchooseToUse[i];
                delete qyhcCL.skillid.mustchooseToUse;
            }
            if (!ui.auto || !ui.auto.classList.contains('glow')) _status.auto = false;
            if (qyhcCL.tempquanxuan) qyhcCL.tempquanxuan.close();
            if (qyhcCL.skillid.chooseToMove) {
                delete qyhcCL.skillid.chooseToMove;
                ui.arena.classList.remove('choose-to-move');
            }
        },
    };
    lib.skill._qyhc_clstartshow = {
        trigger: {
            global: ['phaseBegin', 'dieAfter', 'olduoruiAfter', 'diaohulishanEnd'],
        },
        silent: true,
        priority: 1832,
        charlotte: true,
        forced: true,
        delay: false,
        content() {
            if (qyhcCL.skillid.mustchooseToUse) {
                for (var i in qyhcCL.skillid.mustchooseToUse) lib.skill[i] = qyhcCL.skillid.mustchooseToUse[i];
                delete qyhcCL.skillid.mustchooseToUse;
            }
            player.qyhc_firstGain({}, 'qyhcAI');
            var Eskills = {};
            for (var i of player.getEnemies()) for (var j of i.getSkills()) Eskills[j] = true;
            player.qyhcAI.qyhc_Eskills = Eskills;
            var Fskills = {};
            for (var i of player.getFriends(true)) for (var j of i.getSkills()) Fskills[j] = true;
            player.qyhcAI.qyhc_Fskills = Fskills;
        },
    };
    lib.skill._qyhc_globalact = {
        trigger: {
            player: ['useCard1', 'respond'],
        },
        firstDo: true,
        priority: Infinity,
        silent: true,
        forced: true,
        delay: false,
        content() {
            var obj = {
                trigger: trigger,
                phaseNumber: game.phaseNumber + 0,
                roundNumber: game.roundNumber + 0,
            };
            for (var i of ['suiji', 'use', 'sha']) {
                player.qyhc_firstGain([], 'qyhcAI', 'qyhc_last' + i);
                while (player.qyhcAI['qyhc_last' + i].length > 2) player.qyhcAI['qyhc_last' + i].shift();
            }
            if (['basic', 'trick'].includes(get.type(trigger.card))) player.qyhcAI.qyhc_lastsuiji.push({ ...obj, name: trigger.card.name, nature: get.nature(trigger.card) });
            if (trigger.name != 'respond') {
                if (player.qyhcAI.qyhc_lastuse.length < 1 || player.qyhcAI.qyhc_lastuse[player.qyhcAI.qyhc_lastuse.length - 1].phaseNumber != game.phaseNumber) trigger.phaseFirst = true;
                player.qyhcAI.qyhc_lastuse.push({ ...obj, number: trigger.card.number, suit: trigger.card.suit, color: get.color(trigger.card) });
                if (trigger.card.name == 'sha') player.qyhcAI.qyhc_lastsha.push({ ...obj, number: trigger.card.number, suit: trigger.card.suit, stage: _status.currentStage });
            }
        },
    };
    lib.skill._qyhc_globalactafter = {
        trigger: {
            player: 'useCardAfter',
        },
        firstDo: true,
        priority: Infinity,
        silent: true,
        forced: true,
        delay: false,
        content() {
            var obj = {
                trigger: trigger,
                phaseNumber: game.phaseNumber + 0,
                roundNumber: game.roundNumber + 0,
            };
            for (var i of ['basic', 'trick', 'trick2', 'delay', 'equip', 'heart', 'diamond', 'spade', 'club', 'none', 'xingtu']) {
                player.qyhc_firstGain([], 'qyhcAI', 'qyhc_last' + i);
                while (player.qyhcAI['qyhc_last' + i].length > 2) player.qyhcAI['qyhc_last' + i].shift();
            }
            switch (get.type(trigger.card)) {
                case 'basic':
                    player.qyhcAI.qyhc_lastbasic.push(obj);
                    break;
                case 'trick':
                    player.qyhcAI.qyhc_lasttrick.push(obj);
                    player.qyhcAI.qyhc_lasttrick2.push(obj);
                    break;
                case 'delay':
                    player.qyhcAI.qyhc_lasttrick.push(obj);
                    player.qyhcAI.qyhc_lastdelay.push(obj);
                    break;
                case 'equip':
                    player.qyhcAI.qyhc_lastequip.push(obj);
                    break;
            }
            player.qyhcAI['qyhc_last' + trigger.card.suit].push(obj);
            var number = trigger.card.number;
            if (number) player.qyhcAI.qyhc_lastxingtu.push({ ...obj, number: trigger.card.number });
            qyhcCL.qyhc_firstGain([], 'qyhc_lastfinish');
            if (trigger.name != 'respond') qyhcCL.qyhc_lastfinish.push(obj);
        },
    };
    lib.skill._qyhc_ddzback_init = {
        trigger: {
            global: 'gameStart',
        },
        priority: Infinity,
        firstDo: true,
        forced: true,
        filter(event, player) {
            lib.card.shuiyanqijunx.filterTarget = true;
            if (ui.wuxie && lib.config.extension_群英荟萃乀摧林_nodepatch && lib.config.extension_群英荟萃乀摧林_clwt_mizhi_card != 'none' && (lib.config.mode != 'guozhan' || get.config('guozhan_mode') == 'free') && ui.wuxie.innerHTML != '不询问<b></b>无懈') {
                ui.wuxie.innerHTML = '不询问<b></b>无懈';
                lib.setPopped(
                    ui.wuxie,
                    function () {
                        if (ui.wuxie.classList.contains('glow')) var str = '点击此按钮取消不询问无懈';
                        else var str = '点击此按钮开启不询问无懈';
                        var uiintro = ui.create.dialog('hidden');
                        uiintro.listen(function (e) {
                            e.stopPropagation();
                        });
                        uiintro.addText(str);
                        var askmaps = {
                            jinchan: '不询问金蝉看破草船',
                        };
                        var obj = game.me.getSkillObj(true, null, null, false);
                        var Eskills = game.me.qyhcAI.qyhc_Eskills;
                        var Fskills = game.me.qyhcAI.qyhc_Fskills;
                        if (obj.cljg_bashi) askmaps.cljg_bashi = '减少拔矢询问';
                        if (obj.hongde) askmaps.hongde = '不询问弘德';
                        if (obj.yingyuan || obj.xinyingyuan) askmaps.yingyuan = '不询问应援';
                        if (obj.yinfengjiacl) askmaps.yinfengjiacl = '不询问引蜂甲';
                        if (Eskills && Eskills.qyhc_huangjie) askmaps.qyhc_huangjie = '不响应黄结';
                        if (Fskills && Fskills.qyhc_huangjie) askmaps.qyhc_huangjie2 = '响应全部黄结';
                        var func3 = function (link, str) {
                            var table = document.createElement('div');
                            table.classList.add('add-setting');
                            table.style.margin = '0';
                            table.style.width = '100%';
                            table.style.position = 'relative';
                            var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode.tdnodes');
                            td.innerHTML = '<center>' + str + '</center>';
                            td.style.margin = '7px';
                            td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                            if (typeof link != 'function') {
                                td.link = link;
                                td.listen(function () {
                                    var link = this.link;
                                    qyhcCL.glows[link] = !qyhcCL.glows[link];
                                    if (qyhcCL.glows[link]) this.classList.add('selected');
                                    else this.classList.remove('selected');
                                });
                            } else td.listen(link);
                            for (var j of Object.keys(lib.element.button)) td[j] = lib.element.button[j];
                            table.appendChild(td);
                            uiintro.buttons.add(td);
                            uiintro.content.appendChild(table);
                            return td;
                        };
                        for (var i in askmaps) {
                            var temp = func3(i, askmaps[i]);
                            if (qyhcCL.glows[i]) temp.classList.add('selected');
                            else temp.classList.remove('selected');
                        }
                        func3(function () {
                            if (window.decadeUI && decadeUI.eventDialog) {
                                qyhcCL.dialogLists.add(decadeUI.eventDialog);
                                decadeUI.eventDialog.hide();
                                decadeUI.eventDialog.qyhcCL_besaw = decadeUI.eventDialog.style['z-index'];
                                decadeUI.eventDialog.style['z-index'] = '-114';
                                decadeUI.eventDialog.hide = function () {
                                    qyhcCL.dialogLists.remove(this);
                                    if (this.qyhcCL_besaw) this.style['z-index'] = this.qyhcCL_besaw;
                                    else this.style['z-index'] = '';
                                    delete this.qyhcCL_besaw;
                                    this.hide = HTMLDivElement.prototype.hide;
                                };
                                return;
                            }
                            if (window.decadeUI && _status.event) {
                                var evt = _status.event.getParent('chooseToCompare');
                                if (evt && evt.localTarget && ui.dialogs && ui.dialogs[evt.compareName]) {
                                    qyhcCL.dialogLists.add(ui.dialogs[evt.compareName]);
                                    ui.dialogs[evt.compareName].close();
                                    ui.dialogs[evt.compareName].close_qyhc2 = ui.dialogs[evt.compareName].close;
                                    ui.dialogs[evt.compareName].close = function () {
                                        qyhcCL.dialogLists.remove(this);
                                        this.close = this.close_qyhc2;
                                        delete this.close_qyhc2;
                                    };
                                    return;
                                }
                            }
                            if (ui.dialog && ui.dialogs.includes(ui.dialog)) {
                                qyhcCL.dialogLists.add(ui.dialog);
                                ui.dialog.close();
                                ui.dialog.close = function () {
                                    qyhcCL.dialogLists.remove(this);
                                    this.close = lib.element.dialog.close;
                                };
                            }
                        }, '隐藏最顶端对话框');
                        func3(function () {
                            if (!qyhcCL.dialogLists.length) return;
                            var temp = qyhcCL.dialogLists.pop();
                            if (temp.qyhcCL_besaw !== undefined) temp.hide(), temp.show();
                            else temp.close(), temp.open();
                        }, '显示最后被隐藏的对话框');
                        return uiintro;
                    },
                    230
                );
            }
            lib.translate.muniu_skill_bg = '辎';
            if (lib.config.extension_群英荟萃乀摧林_showLEI != 'none') {
                if (ui.cardPileButton && !qyhcCL.Plisten) {
                    qyhcCL.Plisten = true;
                    ui.cardPileButton.listen(function () {
                        game.check();
                        for (var i of game.filterPlayer2()) i.update();
                    });
                    lib.setPopped(
                        ui.cardPileButton,
                        function () {
                            var uiintro = ui.create.dialog('hidden');
                            uiintro.listen(function (e) {
                                e.stopPropagation();
                            });
                            var num;
                            if (game.online) num = _status.cardPileNum || 0;
                            else num = ui.cardPile.childNodes.length;
                            uiintro.add('剩余 <span style="font-family:' + 'xinwei' + '">' + num);
                            if (_status.connectMode) return uiintro;
                            uiintro.add('<div class="text center">轮数 <span style="font-family:xinwei">' + game.roundNumber + '</span>&nbsp;&nbsp;&nbsp;&nbsp;洗牌 <span style="font-family:xinwei">' + game.shuffleNumber + '</div>');
                            uiintro.add('<div class="text center">弃牌堆</div>');
                            if (ui.discardPile.childNodes.length) {
                                var list = [];
                                for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
                                    list.unshift(ui.discardPile.childNodes[i]);
                                }
                                uiintro.addSmall([list, 'card']);
                            } else uiintro.add('<div class="text center" style="padding-bottom:3px">无</div>');
                            if (!lib.config.extension_群英荟萃乀摧林_jiekapaidui) {
                                game.saveConfig('extension_群英荟萃乀摧林_jiekapaidui', true);
                                alert('因群英荟萃乀摧林扩展功能,单击<牌堆>按钮可以解除一些确定键消失或能取消却无法取消的BUG');
                            }
                            return uiintro;
                        },
                        230
                    );
                }
            }
            return ['usually', 'four', 'draw', 'DIY', 'jidou', 'xinfu', 'OL'].includes(_status.qyhc_ddz_mode) && lib.config.mode == 'doudizhu' && _status.mode == 'normal' && player.identity == 'zhu';
        },
        content() {
            'step 0';
            for (var i of game.players) i.dieAfter2 = false;
            switch (_status.qyhc_ddz_mode) {
                case 'draw':
                    event.goto(5);
                    break;
                case 'four':
                    event.goto(3);
                    break;
                case 'xinfu':
                    if (lib.config.extension_群英荟萃乀摧林_xinfucheck) event.finish();
                    else event.goto(6);
                    break;
                case 'jidou':
                    if (lib.config.extension_群英荟萃乀摧林_jidoucheck) event.finish();
                    else event.goto(10);
                    break;
                case 'OL':
                    for (var i of game.players) if (i.identity == 'fan') i.addSkill('qyhc_gongku');
                    if (lib.config.extension_群英荟萃乀摧林_OLcheck) event.finish();
                    else event.goto(8);
                    break;
                case 'DIY':
                    event.kus = lib.config.extension_群英荟萃乀摧林_DdzKU;
                    event.kus2 = lib.config.extension_群英荟萃乀摧林_DdzKu;
                    break;
            }
            ('step 1');
            event.videoId = lib.status.videoId++;
            if (event.kus !== null) if (!Array.isArray(event.kus) || event.kus.length == 0) event.kus = ['qyhc_yinfu', 'qyhc_qiangyi', 'qyhc_honggu', 'qyhc_jiyu'];
            if (event.kus2 !== null) if (!Array.isArray(event.kus2) || event.kus2.length == 0) event.kus2 = ['feiyang', 'bahu'];
            if (event.kus2 !== null) {
                for (var i = 0; i < event.kus2.length - 1; i++) player.addSkill(event.kus2[i], 'qyhc');
                player.addSkill(event.kus2[event.kus2.length - 1], 'clgd');
            }
            if (event.kus !== null) {
                if (event.kus.length > 1) {
                    player.chooseSkills('【地主加成】请选择一个技能获得', event.kus, true, 'big').set('ai', function (button) {
                        if (player.hasSkill('zishu') && button.link == 'qyhc_qiangyi') return 1.1;
                        if (button.link == 'qyhc_jiyu') for (var i of player.getSkills()) if (get.translation(i) == '集智') return 1.1;
                        return Math.random();
                    });
                } else event._result = { links: event.kus };
            }
            ('step 2');
            if (event.dialog) event.dialog.close();
            if (event.kus !== null) player.addSkillLog(result.links, null, '因<span class=redtext>地主</span>特殊规则');
            event.goto(5);
            ('step 3');
            player.hp--;
            player.maxHp--;
            delete lib.skill.clyl_dengjie_player_4.charlotte;
            delete lib.skill.clyl_dengjie_player_4.superCharlotte;
            delete lib.skill.clyl_dengjie_player_4_draw.superCharlotte;
            delete lib.skill.clyl_dengjie_player_4_draw.charlotte;
            lib.translate.clyl_dengjie_player_4_info = '锁定技,游戏开始时(最先结算),你摸两张牌、加2点体力上限并回复2点体力,随机使用一张牌堆中的装备牌;回合开始时(最晚结算),你摸一张牌;出牌阶段,你使用【杀】的次数限制+1.';
            ('step 4');
            player.update();
            player.addSkill('clyl_dengjie_player_4');
            ('step 5');
            for (var i of game.players) if (i.identity == 'fan') i.addSkill('qyhc_tongji');
            event.finish();
            ('step 6');
            event.dialog = ui.create.dialog('游戏规则', 'forcebutton');
            event.dialog.addText('<ul><li>所有角色初始六张手牌</li><li>地主拥有场景技〖飞扬〗和〖跋扈〗</li><li>〖飞扬>锁定技,摸牌阶段,你多摸一张牌;你使用【杀】的次数限制+1.</li><li>〖跋扈>判定阶段开始时,你可以弃置两张手牌并弃置判定区所有牌.</li></ul>', false);
            game.me.chooseControl('我知道了', '不再提醒').set('dialog', event.dialog);
            ('step 7');
            if (result.control == '不再提醒') game.saveConfig('extension_群英荟萃乀摧林_xinfucheck', true);
            event.finish();
            ('step 8');
            event.dialog = ui.create.dialog('游戏规则', 'forcebutton');
            event.dialog.addText('<ul><li>所有角色初始四张手牌</li><li>农民手牌互相可见且拥有技能〖共苦>' + lib.translate.qyhc_gongku_info + '</li><li>地主拥有场景技〖飞扬〗和〖跋扈〗</li><li>〖飞扬>锁定技,准备阶段,你摸一张牌;你使用【杀】的次数限制+1.</li><li>〖跋扈>判定阶段开始时,你可以弃置两张牌并弃置判定区内所有牌.</li></ul>', false);
            game.me.chooseControl('我知道了', '不再提醒').set('dialog', event.dialog);
            ('step 9');
            if (result.control == '不再提醒') game.saveConfig('extension_群英荟萃乀摧林_OLcheck', true);
            event.finish();
            ('step 10');
            event.dialog = ui.create.dialog('游戏规则', 'forcebutton');
            event.dialog.addText('<ul><li>所有角色初始十张手牌</li><li>地主获得状态技〖飞扬〗和〖跋扈〗</li><li>〖飞扬>' + lib.translate.feiyang_info + '</li><li>〖跋扈>' + lib.translate.bahu_info + '</li></ul>', false);
            game.me.chooseControl('我知道了', '不再提醒').set('dialog', event.dialog);
            ('step 11');
            if (result.control == '不再提醒') game.saveConfig('extension_群英荟萃乀摧林_jidoucheck', true);
        },
        ai: {
            viewHandcard: true,
            skillTagFilter(player, arg, target) {
                return ['OL', 'jidou', 'xinfu'].includes(_status.qyhc_ddz_mode) && lib.config.mode == 'doudizhu' && _status.mode == 'normal' && player.getFriends().includes(target);
            },
        },
    };
    lib.skill._qyhc_updatelog = {
        trigger: {
            global: 'gameStart',
        },
        firstDo: true,
        silent: true,
        forced: true,
        filter: () => !(lib.config.extension_群英荟萃乀摧林_afterup && lib.config.extension_群英荟萃乀摧林_afterup.includes(qyhcCL.updatenum)),
        content() {
            'step 0';
            event.dialog = ui.create.dialog('<span class=importext>群英荟萃乀摧林</span>' + qyhcCL.updatenum + '维护公告', 'forcebutton');
            var str = '<ol type="circle">' + (lib.version == qyhcCL.shipeinum ? '<li>本次更新适配' + qyhcCL.shipeinum + '版本体,不向下兼容,可能能向上兼容</li>' : '<li><span class=redtext>警告:此版本的本扩展不一定适配于当前版本本体(' + qyhcCL.shipeinum + '),请谨慎使用,或通过渠道获取本扩展或游戏本体新版本</span></li>') + '<li>本扩展有部分素材来源于网络,若有侵权请联系作者<span class=bluetext>感时花溅泪乀摧林</span>删除(扩展赵咨、赵直www.bilibili.com/read/cv15086058、www.bilibili.com/read/cv17273841有参考/引用@紫髯的小乔的设计,赵咨配音源自www.bilibili.com/video/BV18u411e7bt)</li></span></li><li>本次更新后,入群答案将不再直接显示,在点击<扩展名:群英荟萃乀摧林>后会显示</li><li>更新预告:下次扩展版本更新将弃用<群英荟萃乀摧林>的扩展名</li></ol>';
            event.dialog.addText(str, false);
            event.dialog.videoId = lib.status.videoId++;
            game.me.chooseControl('我知道了' /*,"去体验争渡牌堆(重启)"*/).set('dialog', event.dialog);
            ('step 1');
            var t = lib.config.extension_群英荟萃乀摧林_afterup;
            if (!t) t = [qyhcCL.updatenum];
            else t.add(qyhcCL.updatenum);
            game.saveConfig('extension_群英荟萃乀摧林_afterup', t);
            event.dialog.close();
            if (result.index != 1) event.finish();
            ('step 2');
            game.saveConfig('extension_群英荟萃乀摧林_clwt_mizhi_card', 'zhengdu');
            game.reload();
        },
    };
    lib.skill._qyhc_clLY_init = {
        trigger: {
            global: 'gameStart',
        },
        forced: true,
        silent: true,
        delay: false,
        firstDo: true,
        filter(event, player) {
            return _status.brawl && _status.brawl.scene && _status.brawl.scene.reference && _status.brawl.scene.reference == 'qyhc_clyl';
        },
        content() {
            'step 0';
            if (get.translation(player) == '[object HTMLDivElement]') {
                var func = function (player, list, list2, back) {
                    if (_status.brawl && _status.brawl.chooseCharacterAi) {
                        if (_status.brawl.chooseCharacterAi(player, list, list2, back) !== false) {
                            return;
                        }
                    }
                    var listc = list.slice(0, 2);
                    for (var i = 0; i < listc.length; i++) {
                        var listx = lib.characterReplace[listc[i]];
                        if (listx && listx.length) listc[i] = listx.randomGet();
                    }
                    if (get.config('double_character')) {
                        player.init(listc[0], listc[1]);
                    } else {
                        player.init(listc[0]);
                    }
                    if (back) {
                        list.remove(get.sourceCharacter(player.name1));
                        list.remove(get.sourceCharacter(player.name2));
                        for (var i = 0; i < list.length; i++) back.push(list[i]);
                    }
                    if (typeof lib.config.test_game == 'string' && player == game.me.next) player.init(lib.config.test_game);
                    if (get.is.double(player.name1)) {
                        player._groupChosen = true;
                        player.group = get.is.double(player.name1, true).randomGet();
                        player.node.name.dataset.nature = get.groupnature(player.group);
                    } else if (get.config('choose_group') && player.group == 'shen' && !player.isUnseen(0)) {
                        var list = lib.group.slice(0);
                        list.remove('shen');
                        if (list.length)
                            player.group = (function () {
                                if (_status.mode != 'zhong' && game.zhu && game.zhu.group) {
                                    if (['re_zhangjiao', 'liubei', 're_liubei', 'caocao', 're_caocao', 'sunquan', 're_sunquan', 'zhangjiao', 'sp_zhangjiao', 'caopi', 're_caopi', 'liuchen', 'caorui', 'sunliang', 'sunxiu', 'sunce', 're_sunben', 'ol_liushan', 're_liushan', 'key_akane', 'dongzhuo', 're_dongzhuo', 'ol_dongzhuo', 'jin_simashi', 'caomao'].includes(game.zhu.name)) return game.zhu.group;
                                    if (['sunhao', 'xin_yuanshao', 're_yuanshao', 're_sunce', 'ol_yuanshao', 'yuanshu', 'jin_simazhao', 'liubian'].includes(game.zhu.name)) {
                                        if (player.identity != 'zhong') list.remove(game.zhu.group);
                                        else return game.zhu.group;
                                    }
                                }
                                return list.randomGet();
                            })();
                    }
                    player.node.name.dataset.nature = get.groupnature(player.group);
                };
                let num = get.config('choice_' + player.identity);
                if (get.config('unbalanced_mode')) {
                    switch (player.identity) {
                        case 'zhu':
                        case 'zhong':
                        case 'fan':
                            num = 12;
                            break;
                        case 'nei':
                            num = 20;
                            break;
                    }
                }
                func(player, _status.characterlist.randomSort().slice(num), null, _status.characterlist);
            }
            player.dieAfter2 = false;
            game.showIdentity(true);
            if (player.identity == 'zhu') player.removeSkill('tianming');
            if (lib.character[player.name] && lib.character[player.name][1] == 'shen') player.changeGroup('shen');
            var NAME = _status.brawl.scene.name;
            if (['简单模式', '进阶模式', '困难模式', '梦魇之殇', '大闹冥府'].includes(NAME)) {
                switch (player.identity) {
                    case 'fan':
                        if (player.name == 'clyl_meihouwang') {
                            player.addSkill('clyl_dengjie_player_' + lib.config.extension_群英荟萃乀摧林_clyl_dashenglevel);
                            break;
                        }
                        if (player == game.me || NAME != '梦魇之殇') player.addSkill('clyl_dengjie_player_' + lib.config.extension_群英荟萃乀摧林_clyl_playerlevel);
                        break;
                    case 'zhu':
                        if (NAME == '进阶模式' || NAME == '梦魇之殇') player.addSkill('clyl_dengjie_boss_2');
                        if (NAME == '困难模式' || NAME == '大闹冥府') player.addSkill('clyl_dengjie_boss_3');
                        break;
                    case 'zhong':
                        if (NAME == '困难模式') player.addSkill('clyl_dengjie_player_4');
                        if (NAME == '大闹冥府') player.addSkill('clyl_dengjie_player_5');
                        break;
                }
                if (NAME == '简单模式') {
                    if (player.identity == 'zhu') player.removeSkill(['clyl_panguan', 'clyl_wanghun', 'clyl_bingfen', 'clyl_heisheng', 'clyl_dayuan', 'clyl_bazhen', 'clyl_tiemian', 'clyl_zhifen', 'clyl_suozu', 'clyl_mozu', 'clyl_renao', 'clyl_leizhou']);
                    if (player.identity == 'fan' && player.previous.identity == 'zhu') _status.firstAct2 = player;
                } else if (player.identity == 'zhu') {
                    if (NAME != '大闹冥府') _status.firstAct2 = player;
                    else {
                        if (player.name == qyhcCL.shidianBOSSes[0]) _status.firstAct2 = player;
                    }
                }
                player.addTempSkill('clyl_egg_awaken');
            } else if (NAME == '地府保卫战') {
                switch (player.identity) {
                    case 'fan':
                        player.addSkill('clyl_dengjie_luanmei');
                        if (player.previous.identity == 'zhong') _status.firstAct2 = player;
                        break;
                    case 'zhu':
                        player.addSkill('clyl_dengjie_boss_' + lib.config.extension_群英荟萃乀摧林_clyl_yanluolevel);
                        break;
                    case 'zhong':
                        player.addSkill('clyl_dengjie_player_5');
                        break;
                }
                if (player.name == 'clyl_yanluowang') player.addSkill('clyl_zhennu');
            } else {
                if (player == game.me) {
                    qyhcCL.findLR = function (arg) {
                        if (arg <= 1) return 5;
                        if (arg <= 3) return 0;
                        if (arg <= 10) return 1;
                        if (arg <= 30) return 2;
                        if (arg <= 100) return 3;
                    };
                    qyhcCL.toStr = function (arg) {
                        arg = Math.round(arg);
                        switch (qyhcCL.findLR(arg)) {
                            case 5:
                                return '<div style="display:inline-block;white-space:nowrap;background-color: rgba(255,255,210,0);position:relative;width:42px;height:42px;box-shadow:0 5px 15px rgba(20,20,20,1);border: 2px solid;border-color: rgba(255,0,0,0);border-radius:50%;display:block;"><div style="left:50%;top:50%;transform:translate(-50%,-50%)"><font size="6" color=#FF0302>' + arg.toString() + '</font></div></div>';
                            case 0:
                                return '<div style="display:inline-block;white-space:nowrap;background-color: rgba(255,255,210,0);position:relative;width:42px;height:42px;box-shadow:0 5px 15px rgba(20,20,20,1);border: 2px solid;border-color: rgba(255,0,0,0);border-radius:50%;display:block;"><div style="left:50%;top:50%;transform:translate(-50%,-50%)"><font size="6" color=#F67732>' + arg.toString() + '</font></div></div>';
                            case 1:
                                return '<div style="display:inline-block;white-space:nowrap;background-color: rgba(255,255,210,0);position:relative;width:42px;height:42px;box-shadow:0 5px 15px rgba(20,20,20,1);border: 2px solid;border-color: rgba(255,0,0,0);border-radius:50%;display:block;"><div style="left:50%;top:50%;transform:translate(-50%,-50%)"><font size="6" color=#02FF10>' + arg.toString() + '</font></div></div>';
                            case 2:
                                return '<div style="display:inline-block;white-space:nowrap;background-color: rgba(255,255,210,0.1);position:relative;width:42px;height:42px;box-shadow:0 5px 15px rgba(20,20,20,1);border: 2px solid;border-color: rgba(255,0,0,1);border-radius:50%;display:block;"><div style="left:50%;top:50%;transform:translate(-50%,-50%)"><font size="5">' + arg.toString() + '</font></div></div>';
                            default:
                                return '<div style="display:inline-block;white-space:nowrap;background-color: rgba(255,255,210,0.1);position:relative;width:42px;height:42px;box-shadow:0 5px 15px rgba(20,20,20,1);border: 2px solid;border-color: rgba(12,245,16,1);border-radius:50%;display:block;"><div style="left:50%;top:50%;transform:translate(-50%,-50%)"><font size="5">' + arg.toString() + '</font></div></div>';
                        }
                    };
                    game.me.chooseControl('简单', '进阶', '困难', '解压').set('prompt', '请选择游戏难度').set('prompt2', '<center><span class=redtext>此模式处于测试阶段,请谅解部分可能出现的问题<br>本模式有部分恐怖因素(虽然目前还没有),请谨慎游玩<br>为营造气氛,可能会出现音量较大的音频,请注意保护耳朵</span></center>');
                    event.jinglve = true;
                }
            }
            ('step 1');
            if (event.jinglve) {
                switch (result.index) {
                    case 0:
                        game.me.addSkill('qyhc_shidian_QLSM_skill');
                        game.playBackgroundMusic = function () {
                            ui.backgroundMusic.src = qyhcCL.url + 'extension\\群英荟萃乀摧林\\audio\\effect\\IGM.mp3';
                        };
                        ui.backgroundMusic.src = qyhcCL.url + 'extension\\群英荟萃乀摧林\\audio\\effect\\IGM.mp3';
                        qyhcCL.JLnandu = 100;
                        break;
                    case 1:
                        game.me.addSkill('qyhc_shidian_QLSM_skill');
                        game.playBackgroundMusic = function () {
                            ui.backgroundMusic.src = qyhcCL.url + 'extension\\群英荟萃乀摧林\\audio\\effect\\IGM.mp3';
                        };
                        ui.backgroundMusic.src = qyhcCL.url + 'extension\\群英荟萃乀摧林\\audio\\effect\\IGM.mp3';
                        qyhcCL.JLnandu = 80;
                        break;
                    case 2:
                        game.me.addSkill('qyhc_shidian_QLSM_skill');
                        game.playBackgroundMusic = function () {
                            ui.backgroundMusic.src = qyhcCL.url + 'extension\\群英荟萃乀摧林\\audio\\effect\\IGM.mp3';
                        };
                        ui.backgroundMusic.src = qyhcCL.url + 'extension\\群英荟萃乀摧林\\audio\\effect\\IGM.mp3';
                        qyhcCL.JLnandu = 60;
                        break;
                    case 3:
                        game.me.addSkill('qyhc_shidian_QLSM_skill3');
                        game.playBackgroundMusic = function () {
                            ui.backgroundMusic.src = qyhcCL.url + 'extension\\群英荟萃乀摧林\\audio\\effect\\IGM.mp3';
                        };
                        ui.backgroundMusic.src = qyhcCL.url + 'extension\\群英荟萃乀摧林\\audio\\effect\\IGM.mp3';
                        break;
                }
            }
        },
    };
    lib.skill.qyhc_shidian_QLSM_skill = {
        trigger: {
            global: 'gameDrawAfter',
        },
        forced: true,
        charlotte: true,
        superCharlotte: true,
        content() {
            'step 0';
            qyhcCL.over = function (num) {
                qyhcCL.beover = true;
                if (!num) {
                    game.over(true);
                    return;
                }
                game.over(false);
                game.broadcastAll(function () {
                    ui.flaseIntro = ui.create.div('.touchinfo.left', ui.window);
                    ui.flaseIntro.style.top = '48%';
                    ui.flaseIntro.style.left = '50%';
                    ui.flaseIntro.style.transform = 'translate(-50%,-50%)';
                });
                var str = '';
                switch (num) {
                    case 1:
                        str = '作为佛祖,怎可行此苟且之事？';
                        break;
                    case 2:
                        str = '此劫 难渡';
                        break;
                    case 3:
                        str = '年华逝去 如朝露';
                        break;
                }
                ui.flaseIntro.innerHTML = "<span class=redtext><font size='6'>" + str + '</font></span>';
            };
            game.broadcastAll(function () {
                ui.shidianFirstJiang = ui.create.div('.touchinfo.left', ui.window);
                ui.shidianFirstJiang.style.top = '52%';
                ui.shidianFirstJiang.style.left = '50%';
                ui.shidianFirstJiang.style.transform = 'translate(-50%,-50%)';
            });
            ui.shidianFirstJiang.innerHTML = '<div class="popup pointerdiv" style="display:inline-block;white-space:nowrap;background-color: rgba(255,255,255, 0.26);position:relative;height:120px;width:700px;box-shadow:0 5px 15px rgba(20,20,20,0.4);align-items:center;text-align:center;display:block;"></div>';
            game.broadcastAll(function () {
                ui.shidianSecondJiang = ui.create.div('.touchinfo.left', ui.window);
                ui.shidianSecondJiang.style.top = '52%';
                ui.shidianSecondJiang.style.left = '50%';
                ui.shidianSecondJiang.style.transform = 'translate(-50%,-50%)';
                ui.shidianThirdJiang = ui.create.div('.touchinfo.left', ui.window);
                ui.shidianThirdJiang.style.top = '52%';
                ui.shidianThirdJiang.style.left = '50%';
                ui.shidianThirdJiang.style.transform = 'translate(-50%,-50%)';
            });
            event.stepwrite = function (adr, str, begin, end) {
                var Str = [];
                var SRr = '';
                for (var i of str) {
                    if (i == '$') {
                        if (Str[Str.length - 1] == '<br>') Str.pop();
                        Str.push('<br>');
                    } else Str.push(i);
                }
                var TIME = function () {
                    setTimeout(function () {
                        if (!ui[adr]) return;
                        SRr += Str.shift();
                        ui[adr].innerHTML = begin + SRr + end;
                        if (Str.length) TIME();
                    }, 100);
                };
                TIME();
            };
            if (lib.config.extension_群英荟萃乀摧林_jlsm078) event.goto(3);
            ('step 1');
            event.stepwrite('shidianSecondJiang', '<六葬波罗经>记载:$$<鬼魂之怨,有四:为嗔,为痴,为诳,为癫.其嗔化赤,其痴化黄,其诳化绿,其癫化蓝.杂魂化一,其厉煞者,可四态皆备.>', "<font size='4' color=#C97835>", '</font>');
            player.chooseControl('继续');
            ('step 2');
            ui.shidianSecondJiang.innerHTML = '';
            delete ui.shidianSecondJiang;
            event.stepwrite('shidianThirdJiang', '<渡此四怨,有四法:以卵击可化癫怨;以花击可化痴怨;扔拖鞋可化诳怨;奉酒杯可化嗔怨.四法相佐,可击四怨,可败厉煞.>', "<font size='4' color=#C97835>", '</font>');
            player.chooseControl('开始', '开始&不再提示');
            ('step 3');
            if (result.index) game.saveConfig('extension_群英荟萃乀摧林_jlsm078', true);
            if (ui.shidianThirdJiang) {
                ui.shidianThirdJiang.innerHTML = '';
                delete ui.shidianThirdJiang;
            }
            var func = function () {
                setTimeout(function () {
                    if (qyhcCL.JLnandu < 100 && Math.random() < (100 - qyhcCL.JLnandu) * 0.0025) {
                        if (qyhcCL.JLnandu < 80 && Math.random() < 0.7) alert('');
                        else print();
                    }
                    var num = qyhcCL.JLnandu - (get.utc() - qyhcCL.counter) / 1000;
                    ui.shidianInfo.innerHTML = qyhcCL.toStr(num);
                    if (num < 0.1) {
                        qyhcCL.over(3);
                    } else if (game.players.length > 1 && !qyhcCL.beover) func();
                }, 500);
            };
            ui.shidianFirstJiang.innerHTML = '';
            delete ui.shidianFirstJiang;
            game.broadcastAll(function () {
                ui.shidianInfo = ui.create.div('.touchinfo.left', ui.window);
                ui.shidianInfo.style.top = '52%';
                ui.shidianInfo.style.left = '50%';
                ui.shidianInfo.style.transform = 'translate(-50%,-50%)';
                ui.shidianInfo.innerHTML = "<div class=greentext style='font-family: xingkai'><font size='9'>叁</font></div>";
            });
            setTimeout(function () {
                ui.shidianInfo.innerHTML = "<div class=firetext style='font-family: xingkai'><font size='9'>贰</font></div>";
                setTimeout(function () {
                    ui.shidianInfo.innerHTML = "<div style='font-family: xingkai'><font size='9' color='#FF0202'>壹</font></div>";
                    setTimeout(function () {
                        qyhcCL.counter = get.utc();
                        qyhcCL.start = true;
                        game.broadcastAll(function () {
                            ui.shidianInfo.style.top = '54%';
                            ui.shidianInfo.style.left = '50%';
                            ui.shidianInfo.style.transform = 'translate(-50%,-50%)';
                            ui.shidianInfo.innerHTML = qyhcCL.toStr(qyhcCL.JLnandu);
                        });
                        setTimeout(function () {
                            game.broadcastAll(function () {
                                ui.shidianInfo.style.top = '14%';
                                ui.shidianInfo.style.left = '9%';
                            });
                            func();
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
            ('step 4');
            var cards = get.cards(ui.cardPile.childNodes.length);
            game.cardsGotoSpecial(cards);
            var next = game.createEvent('ClsdJLSMstart');
            next.player = player;
            next.current = player.next;
            next.setContent('emptyEvent');
        },
        group: ['qyhc_shidian_QLSM_skill_main', 'qyhc_shidian_QLSM_skill_lose', 'qyhc_shidian_QLSM_skill_lose2', 'qyhc_shidian_QLSM_skill_cancel'],
        filter() {
            return !qyhcCL.gaindo;
        },
        subSkill: {
            main: {
                filter() {
                    return !qyhcCL.gaindo;
                },
                trigger: {
                    player: 'ClsdJLSMstart',
                },
                forced: true,
                charlotte: true,
                superCharlotte: true,
                content() {
                    'step 0';
                    if (trigger.current.hp <= 5) {
                        qyhcCL.gaindo = true;
                        lib.skill.repojun.audio = 'ext:群英荟萃乀摧林/audio/skill:true';
                        lib.skill.chouhai.audio = 'ext:群英荟萃乀摧林/audio/skill:true';
                        player.addSkill('repojun');
                        player.removeSkill('qyhc_shidian_QLSM');
                        trigger.current.addSkill('chouhai');
                        var card1 = game.createCard2('guding', 'spade', 1);
                        var card2 = game.createCard2('jiu', 'spade', 3);
                        var card3 = game.createCard2('sha', 'heart', 4, 'fire');
                        player.gain([card1, card2, card3]);
                        event.finish();
                    }
                    ('step 1');
                    event.lib = false;
                    if (qyhcCL.start) {
                        event.lists = ["<span class=popup text pointerdiv><img src='" + qyhcCL.url + "image/emotion/throw_emotion/flower1.png' width='40' height='40'></span>", "<span class=popup text pointerdiv><img src='" + qyhcCL.url + "image/emotion/throw_emotion/egg1.png' width='40' height='40'></span>", "<span class=popup text pointerdiv><img src='" + qyhcCL.url + "image/emotion/throw_emotion/wine1.png' width='40' height='40'></span>", "<span class=popup text pointerdiv><img src='" + qyhcCL.url + "image/emotion/throw_emotion/shoe1.png' width='40' height='40'></span>"];
                        event.lists.randomSort();
                        if (qyhcCL.start != 7) {
                            if (lib.skill['_decadeUI_gameStartEffect']) {
                                lib.skill._decadeUI_gameStartEffect.direct = true;
                                player.useSkill('_decadeUI_gameStartEffect');
                            }
                            qyhcCL.start = 7;
                        }
                        player.chooseControl(event.lists[0], event.lists[1], event.lists[2], event.lists[3]);
                        event.lib = true;
                    }
                    ('step 2');
                    if (event.lib) {
                        var x = result.index;
                        var i = event.lists[x];
                        if (i.includes('flower')) {
                            player.throwEmotion(trigger.current, 'flower');
                            player.line(trigger.current);
                            if (trigger.current.name == 'clyl_lisha_yell') {
                                trigger.current.init(['clyl_lisha_red', 'clyl_lisha_gre', 'clyl_lisha_blue'].randomGet(), null, null, false);
                                trigger.current.hp = trigger.hp - 1;
                            } else {
                                if (trigger.current.hp >= 50) qyhcCL.over(2);
                                trigger.current.hp = trigger.hp + 1;
                            }
                        } else if (i.includes('egg')) {
                            player.throwEmotion(trigger.current, 'egg');
                            player.line(trigger.current);
                            if (trigger.current.name == 'clyl_lisha_blue') {
                                trigger.current.init(['clyl_lisha_red', 'clyl_lisha_gre', 'clyl_lisha_yell'].randomGet(), null, null, false);
                                trigger.current.hp = trigger.hp - 1;
                            } else {
                                if (trigger.current.hp >= 50) qyhcCL.over(2);
                                trigger.current.hp = trigger.hp + 1;
                            }
                        } else if (i.includes('wine')) {
                            player.throwEmotion(trigger.current, 'wine');
                            player.line(trigger.current);
                            if (trigger.current.name == 'clyl_lisha_red') {
                                trigger.current.init(['clyl_lisha_yell', 'clyl_lisha_gre', 'clyl_lisha_blue'].randomGet(), null, null, false);
                                trigger.current.hp = trigger.hp - 1;
                            } else {
                                if (trigger.current.hp >= 50) qyhcCL.over(2);
                                trigger.current.hp = trigger.hp + 1;
                            }
                        } else if (i.includes('shoe')) {
                            player.throwEmotion(trigger.current, 'shoe');
                            player.line(trigger.current);
                            if (trigger.current.name == 'clyl_lisha_gre') {
                                trigger.current.init(['clyl_lisha_red', 'clyl_lisha_yell', 'clyl_lisha_blue'].randomGet(), null, null, false);
                                trigger.current.hp = trigger.hp - 1;
                            } else {
                                if (trigger.current.hp >= 50) qyhcCL.over(2);
                                trigger.current.hp = trigger.hp + 1;
                            }
                        }
                    }
                    ('step 3');
                    trigger.current.update();
                    var next = game.createEvent('ClsdJLSMstart');
                    next.player = player;
                    next.current = player.next;
                    next.hp = player.next.hp;
                    next.setContent('emptyEvent');
                },
            },
            lose: {
                trigger: {
                    global: ['gainBefore', 'gainMaxHpBefore', 'loseHpBegin', 'trunOverBegin', 'linkBegin'],
                },
                filter() {
                    return !qyhcCL.gaindo;
                },
                forced: true,
                charlotte: true,
                superCharlotte: true,
                content() {
                    qyhcCL.over(1);
                },
                filter() {
                    return !qyhcCL.gaindo;
                },
            },
            lose2: {
                trigger: {
                    global: ['damageBefore', 'recoverBefore'],
                },
                forced: true,
                charlotte: true,
                superCharlotte: true,
                filter(event, player) {
                    return !qyhcCL.gaindo;
                },
                content() {
                    qyhcCL.over(1);
                },
            },
            cancel: {
                trigger: {
                    global: ['phaseDrawBefore', 'phaseDiscardBefore'],
                },
                forced: true,
                charlotte: true,
                superCharlotte: true,
                content() {
                    trigger.cancel();
                    if (trigger.name == 'phaseDiscard') qyhcCL.over(2);
                },
            },
        },
    };
    lib.skill.qyhc_shidian_QLSM_skill3 = {
        trigger: {
            global: 'gameDrawAfter',
        },
        forced: true,
        charlotte: true,
        superCharlotte: true,
        content() {
            var cards = get.cards(ui.cardPile.childNodes.length);
            game.cardsGotoSpecial(cards);
            var next = game.createEvent('ClsdJLSMstart');
            next.player = player;
            next.current = player.next;
            next.setContent('emptyEvent');
        },
        group: ['qyhc_shidian_QLSM_skill3_main'],
        subSkill: {
            main: {
                trigger: {
                    player: 'ClsdJLSMstart',
                },
                forced: true,
                charlotte: true,
                superCharlotte: true,
                content() {
                    'step 0';
                    event.lists = ["<span class=popup text pointerdiv><img src='" + qyhcCL.url + "image/emotion/throw_emotion/flower1.png' width='40' height='40'></span>", "<span class=popup text pointerdiv><img src='" + qyhcCL.url + "image/emotion/throw_emotion/wine1.png' width='40' height='40'></span>", "<span class=popup text pointerdiv><img src='" + qyhcCL.url + "image/emotion/throw_emotion/egg1.png' width='40' height='40'></span>", "<span class=popup text pointerdiv><img src='" + qyhcCL.url + "image/emotion/throw_emotion/shoe1.png' width='40' height='40'></span>"];
                    if (qyhcCL.start != 7) {
                        if (lib.skill['_decadeUI_gameStartEffect']) {
                            lib.skill._decadeUI_gameStartEffect.direct = true;
                            player.useSkill('_decadeUI_gameStartEffect');
                        }
                        qyhcCL.start = 7;
                    }
                    player.chooseControl(event.lists[0], event.lists[1], event.lists[2], event.lists[3]);
                    trigger.current.maxHp = Infinity;
                    trigger.current.hp = trigger.current.maxHp;
                    trigger.current.update();
                    ('step 1');
                    var x = result.index;
                    var i = event.lists[x];
                    if (i.includes('flower')) {
                        player.qyhc_throw(trigger.current, 'flower', false);
                        player.line(trigger.current);
                        trigger.current.$recover(game.me);
                        if (trigger.current.name == 'clyl_lisha_yell') trigger.current.init(['clyl_lisha_red', 'clyl_lisha_gre', 'clyl_lisha_blue'].randomGet(), null, null, false);
                    } else if (i.includes('egg')) {
                        player.qyhc_throw(trigger.current, 'egg', false);
                        player.line(trigger.current);
                        trigger.current.$damage(game.me);
                        if (trigger.current.name == 'clyl_lisha_blue') trigger.current.init(['clyl_lisha_red', 'clyl_lisha_gre', 'clyl_lisha_yell'].randomGet(), null, null, false);
                    } else if (i.includes('wine')) {
                        player.qyhc_throw(trigger.current, 'wine', false);
                        player.line(trigger.current);
                        trigger.current.$recover(game.me);
                        if (trigger.current.name == 'clyl_lisha_red') trigger.current.init(['clyl_lisha_yell', 'clyl_lisha_gre', 'clyl_lisha_blue'].randomGet(), null, null, false);
                    } else if (i.includes('shoe')) {
                        player.qyhc_throw(trigger.current, 'shoe', false);
                        player.line(trigger.current);
                        trigger.current.$damage(game.me);
                        if (trigger.current.name == 'clyl_lisha_gre') trigger.current.init(['clyl_lisha_red', 'clyl_lisha_yell', 'clyl_lisha_blue'].randomGet(), null, null, false);
                    }
                    ('step 2');
                    trigger.current.update();
                    var next = game.createEvent('ClsdJLSMstart');
                    next.player = player;
                    next.current = player.next;
                    next.hp = player.next.hp;
                    next.setContent('emptyEvent');
                },
            },
        },
    };
    lib.skill._zhenwangpeiyin_clwt_qyhc = {
        trigger: {
            player: 'dieBegin',
        },
        priority: 2,
        forced: true,
        silent: true,
        content() {
            if (trigger.player.identity == 'zhu' && _status.brawl && _status.brawl.scene && _status.brawl.scene.reference && _status.brawl.scene.reference == 'qyhc_clyl' && _status.brawl.scene.name == '大闹冥府')
                setTimeout(function () {
                    game.over(true);
                }, 500);
        },
    };
    if (config.nodepatch) {
        qyhcCL.FUNCs.filterTrigger = lib.filter.filterTrigger;
        lib.filter.filterTrigger = function (event, player, name, skill) {
            var temp = qyhcCL.FUNCs.filterTrigger.apply(this, arguments);
            if (!temp) return false;
            if (qyhcCL.willAutoCancel(player, skill)) return false;
            return true;
        };
    }
    //地主技
    lib.skill.qyhc_yinfu = {
        trigger: {
            player: 'phaseJieshuBegin',
        },
        delay: false,
        forced: true,
        filter(event, player) {
            return player.isDamaged() && player.hp == 1;
        },
        content() {
            player.recover();
        },
    };
    lib.skill.qyhc_qiangyi = {
        trigger: {
            player: 'phaseDrawEnd',
        },
        forced: true,
        filter(event, player) {
            return game.countPlayer((current) => current != player && current.countGainableCards(player, 'he'));
        },
        content() {
            'step 0';
            player
                .chooseTarget((card, player, target) => player != target && target.countGainableCards(player, 'he'))
                .set('prompt', '###〖强易〗请选择一名有牌的其他角色###<center>你获得其一张牌,交给其一张牌</center>')
                .set('ai', function (target) {
                    var att = get.sgn(get.attitude(player, target));
                    var cv = 0;
                    if (player.hasSkill('zishu')) cv++;
                    if (target.hasSkillTag('nolose') || target.hasSkillTag('nodiscard')) return att + cv;
                    if (att > 0) return 0.1;
                    return get.effect(target, { name: 'shunshou_copy2' }, player, player) * 0.01;
                });
            ('step 1');
            if (result.targets?.length) {
                event.P = result.targets[0];
                if (result.targets[0].countGainableCards(player, 'he')) player.gainPlayerCard('<center>获得' + get.translation(result.targets[0]) + '一张牌,交给其一张牌</center>', result.targets[0], 'he', true)
                else event.finish();
            } else event.finish();
            ('step 2');
            if (event.P.isIn()) {
                if (player.countCards('he') > 1) player.chooseCard('交给' + get.translation(event.P) + '一张牌', true, 'he');
                else if (player.countCards('he') == 1) event._result = { bool: true, cards: player.getCards('he') };
                else {
                    game.log(player, '<span class=firetext>无法交给</span>', event.P, +'一张牌');
                    event.finish();
                }
            } else event.finish();
            ('step 3');
            player.line(event.P);
            player.give(result.cards, event.P);
        },
    };
    lib.skill.qyhc_honggu = {
        mod: {
            maxHandcard(player, num) {
                return num + 3;
            },
        },
        intro: {
            name: '鸿贾',
            content: '因〖鸿贾〗手牌上限+3',
            markcount: () => '+3',
        },
        mark: true,
        marktext: '鸿贾',
        forced: true,
    };
    lib.skill.qyhc_jiyu = {
        trigger: {
            player: 'phaseUseBegin',
        },
        forced: true,
        filter(event, player) {
            return player.hasUseTarget({ name: 'zhibi' }) || player.hasUseTarget({ name: 'diaohulishan' });
        },
        content() {
            'step 0';
            var bool1 = player.hasUseTarget({ name: 'zhibi' });
            var bool2 = player.hasUseTarget({ name: 'diaohulishan' });
            switch (bool1 + bool2) {
                case 2:
                    player
                        .chooseButton([
                            '〖觊觎〗你可以选择视为使用一张【知己知彼】或【调虎离山】',
                            [
                                [
                                    ['🃏', '虚拟', 'zhibi'],
                                    ['🃏', '虚拟', 'diaohulishan'],
                                ],
                                'vcard',
                            ],
                        ])
                        .set('ai', function (button) {
                            return player.getUseValue({ name: button.link[2] });
                        });
                    break;
                case 1:
                    event._result = { bool: true, links: [['🃏', '虚拟', bool1 ? 'zhibi' : 'diaohulishan']] };
                    break;
                default:
                    event.finish();
                    break;
            }
            ('step 1');
            if (result.bool) player.chooseUseTarget('〖觊觎〗请选择【' + get.translation(result.links[0][2]) + '】的目标(亦可不使用)', { name: result.links[0][2] })
        },
    };
    lib.skill.qyhc_tongji = {
        ai: {
            viewHandcard: true,
            skillTagFilter(player, arg, target) {
                return player.getFriends().includes(target);
            },
        },
        trigger: { source: 'damageBegin2' },
        filter(event, player) {
            return player.getFriends().includes(event.player);
        },
        check(event, player) {
            return get.damageEffect(event.player, player, player) < -13 - Math.random() * 4;
        },
        prompt: '是否发动〖同济〗防止此伤害？',
        prompt2: '<center>队友的手牌对你可见;你对队友造成伤害时,可以失去此技能防止之.</center>',
        content() {
            player.removeSkill('qyhc_tongji');
            trigger.cancel();
        },
    };
    lib.skill.qyhc_gongku = {
        trigger: { global: 'dieAfter' },
        forced: true,
        filter(event) {
            return event.player.identity == 'fan';
        },
        content() {
            var str = '〖共苦〗' + get.translation(trigger.player) + '死亡,你可以摸两张牌';
            if (player.isDamaged()) str += '或回复1点体力';
            player.chooseDrawRecover(2, str)
        },
    };
    if (config.showLEI != 'none') {
        //必需武将补丁
        lib.skill.xinfu_falu.trigger = {
            player: ['loseAfter', 'enterGame'],
            global: ['loseAsyncAfter', 'skillStart'],
        };
        lib.translate.zongzuo_info = '锁定技,游戏开始时,你加X点体力上限并回复X点体力(X为势力数);当一名角色死亡后,若没有与其势力相同的角色,你减1点体力上限.';
        lib.translate.xinzongzuo_info = '锁定技,游戏开始时,你加X点体力上限并回复X点体力(X为势力数);当一名角色死亡后,若没有与其势力相同的角色,你减1点体力上限并摸两张牌.';
        lib.skill.twyingji.chooseButton.dialog = function (event, player) {
            var list = [];
            for (var i of lib.inpile) {
                var type = get.type(i);
                if (type == 'basic' || type == 'trick') {
                    var card = { name: i };
                    if (event.filterCard(card, player, event)) list.push(['🃏', '虚拟', i]);
                    if (i == 'sha') {
                        for (var j of lib.inpile_nature) {
                            card.nature = j;
                            if (event.filterCard(card, player, event)) list.push(['🃏', '虚拟', 'sha', j]);
                        }
                    }
                }
            }
            return ui.create.dialog('应机', [list, 'vcard']);
        };
        lib.skill.twyingji.filter = function (event, player) {
            if (player == _status.currentPhase || player.countCards('h') > 0) return false;
            for (var i of lib.inpile) {
                var type = get.type(i);
                if ((type == 'basic' || type == 'trick') && event.filterCard({ name: i }, player, event)) return true;
                if (i == 'sha') {
                    for (var j of lib.inpile_nature) {
                        if (event.filterCard({ name: i, nature: j }, player, event)) return true;
                    }
                }
            }
            return false;
        };
        lib.skill.twyingji.ai.noh = true;
        lib.skill.twyingji.ai.nogain = true;
        lib.skill.twyingji.ai.skillTagFilter = function (player, tag) {
            if (tag != 'nogain') return true;
            return !player.countCards('h');
        };
        delete lib.skill.twyingji.group;
        lib.skill.taoluan.filter = function (event, player) {
            return !player.hasSkill('taoluan3') && player.countCards('hes') > 0;
        };
        lib.skill.taoluan.group = ['taoluan2'];
        lib.skill.xintaoluan.filter = function (event, player) {
            return !player.hasSkill('xintaoluan3') && player.countCards('hes') > 0;
        };
        lib.skill.xintaoluan.group = ['xintaoluan2'];
        lib.skill.reguhuo.filter = function (event, player) {
            if (!player.countCards('hs') || player.hasSkill('reguhuo_phase')) return false;
            for (var i of lib.inpile) {
                var type = get.type(i);
                if ((type == 'basic' || type == 'trick') && event.filterCard({ name: i }, player, event)) return true;
                if (i == 'sha') {
                    for (var j of lib.inpile_nature) {
                        if (event.filterCard({ name: i, nature: j }, player, event)) return true;
                    }
                }
            }
            return false;
        };
        lib.skill.reguhuo.chooseButton.dialog = function () {
            var list = [];
            for (var i of lib.inpile) {
                var type = get.type(i);
                if (type == 'basic' || type == 'trick') list.push(['none', '转化', i]);
                if (i == 'sha') {
                    for (var j of lib.inpile_nature) list.push(['none', '转化', 'sha', j]);
                }
            }
            return ui.create.dialog('蛊惑', [list, 'vcard']);
        };
        lib.skill.reguhuo.chooseButton.check = function (button) {
            if (button.link[2] == 'shan') {
                var player = _status.event.player;
                var hasEnemy = game.hasPlayer(function (current) {
                    return current != player && !current.hasSkill('rechanyuan') && (get.realAttitude || get.attitude)(current, player) < 0;
                });
                var cardx = 'shan';
                if (hasEnemy) {
                    if (card.name == cardx) return 10;
                    return 0;
                }
                return 6 - get.value(card);
            }
            if (button.link[2] == 'wuxie') {
                var player = _status.event.player;
                var hasEnemy = game.hasPlayer(function (current) {
                    return current != player && !current.hasSkill('rechanyuan') && (get.realAttitude || get.attitude)(current, player) < 0;
                });
                var cardx = 'wuxie';
                if (hasEnemy) {
                    if (card.name == cardx) return 10;
                    return 0;
                }
                return 6 - get.value(card);
            }
            var player = _status.event.player;
            var hasEnemy = game.hasPlayer(function (current) {
                return current != player && !current.hasSkill('rechanyuan') && (get.realAttitude || get.attitude)(current, player) < 0;
            });
            var card = { name: button.link[2], nature: button.link[3] };
            var val = _status.event.parent.type == 'phase' ? player.getUseValue(card) : 1;
            if (val <= 0) return 0;
            if (hasEnemy) {
                if (
                    !player.countCards('h', function (cardx) {
                        if (card.name == cardx.name) {
                            if (card.name != 'sha') return true;
                            return get.nature(card) == get.nature(cardx);
                        }
                        return false;
                    })
                )
                    return 0;
                return 3 * val;
            }
            return val;
        };
        lib.skill.reguhuo.ai.order = function (card, player) {
            if (_status.event.player.beOn('phaseUse')) return 9 + Math.random();
            else return 4 - Math.random();
        };
        lib.skill.reguhuo.group = ['reguhuo_guess'];
        lib.skill.rejunxing.check = function (card) {
            var player = _status.event.player;
            if (ui.selected.cards.length) return -1;
            return 10 + player.countCards('h') * player.countCards('h') * 0.6 - get.value(card);
        };
        lib.skill.rejunxing.ai.result.target = function (player, target) {
            if (target.hasSkillTag('noturn')) return 0;
            if (target.isTurnedOver()) return 2;
            return -1 / (target.countCards('h') + 1) - Math.sqrt(Math.max(4 - target.hp, 0));
        };
    }
    //神鬼无前
    lib.qyhc_firstGain({}, 'skill', 'wushuang', 'audioname2');
    lib.skill.wushuang.audioname2.cljg_shenguiwuqian = 'cljg_wushuang';
    lib.qyhc_firstGain({}, 'skill', 'wushuang1', 'audioname2');
    lib.skill.wushuang1.audioname2.cljg_shenguiwuqian = 'cljg_wushuang';
    lib.qyhc_firstGain({}, 'skill', 'wushuang2', 'audioname2');
    lib.skill.wushuang2.audioname2.cljg_shenguiwuqian = 'cljg_wushuang';
    lib.qyhc_firstGain({}, 'skill', 'decadexuanfeng', 'audioname2');
    lib.skill.decadexuanfeng.audioname2.cljg_shenguiwuqian = 'cljg_xuanfeng';
    lib.qyhc_firstGain({}, 'skill', 'olqiangxi', 'audioname2');
    lib.skill.olqiangxi.audioname2.cljg_shenguiwuqian = 'cljg_qiangxi';
    lib.qyhc_firstGain({}, 'skill', 'retieji', 'audioname2');
    lib.skill.retieji.audioname2.cljg_shenguiwuqian = 'cljg_tieji';
    lib.qyhc_firstGain({}, 'skill', 'rewansha', 'audioname2');
    lib.skill.rewansha.audioname2.cljg_shenguiwuqian = 'cljg_wansha';
    //ai、get、ui、lib库函数
    ai.getattitude = function (target) {
        var player = _status.event.player;
        return get.attitude(player, target);
    };
    ai.losehpEffect = function (target) {
        var player = _status.event.player;
        return get.effect(target, { name: 'losehp' }, player, player) * Math.max(0.1, 1 - 0.07 * target.hp);
    };
    ai.fireEffect = function (target) {
        var player = _status.event.player;
        return get.damageEffect(target, player, player, 'fire');
    };
    ai.thunderEffect = function (target) {
        var player = _status.event.player;
        return get.damageEffect(target, player, player, 'thunder');
    };
    ai.damageEffect = function (target) {
        var player = _status.event.player;
        return get.damageEffect(target, player, player);
    };
    ai.drawEffect = function (target) {
        var player = _status.event.player;
        return get.drawEffect(target, 1, player);
    };
    ai.outdisvalue = function (card) {
        var player = _status.event.player;
        if (player.beOn('phaseUse')) return -get.value(card) - player.getUseValue(card);
        if (player.hp > 2) return -get.value(card);
        return -get.useful(card);
    };
    ai.recoverEffect = function (target) {
        var player = _status.event.player;
        return get.recoverEffect(target, player, player);
    };
    ai.turnoverEffect = function (target) {
        var player = _status.event.player;
        return get.turnoverEffect(target, player);
    };
    ai.choosecardtop = function (card) {
        var player = _status.event.player,
            target;
        if (!_status.event.qyhc_getswapValue_map) _status.event.qyhc_getswapValue_map = {};
        var key = player.playerid + '!@#$%^&*()' + card.cardid;
        if (!_status.event.qyhc_getswapValue_map[key]) _status.event.qyhc_getswapValue_map[key] = get.value(card);
        if (!_status.currentPhase) return -_status.event.qyhc_getswapValue_map[key];
        if (!_status.currentStage) return -_status.event.qyhc_getswapValue_map[key];
        if (_status.currentStage.name == 'phaseZhunbei' || _status.currentStage.name == 'phaseJudge') target = _status.currentPhase;
        else {
            target = _status.currentPhase.next;
            if (target.isTurnedOver()) target = target.next;
            if (target.isTurnedOver()) target = target.next;
            if (target.isTurnedOver()) target = target.next;
            if (target.isTurnedOver()) target = target.next;
            if (target.isTurnedOver()) return -_status.event.qyhc_getswapValue_map[key];
        }
        var key2 = target.playerid + '!@#$%^&*()' + card.cardid;
        if (!_status.event.qyhc_getswapValue_map[key2]) _status.event.qyhc_getswapValue_map[key2] = get.value(card, target);
        var js = target.getCards('j'),
            att = get.attitude(player, target);
        if (js.length) {
            var judge = get.judge(js[0]);
            if (judge && (judge(card) + 0.01) * att > 0) return 20 - _status.event.qyhc_getswapValue_map[key];
        }
        if (att <= 0) return -_status.event.qyhc_getswapValue_map[key] - _status.event.qyhc_getswapValue_map[key2];
        return qyhcCL.getswapValue(target, player, card);
    };
    ai.chooseToGive = function (card) {
        var player = _status.event.player,
            target = _status.event.targetx;
        if (!target || get.attitude(player, target) <= 0) return -get.value(card, target) - get.useful(card, player) / 3;
        if (target.beOn()) return get.value(card, target) * 2 - get.useful(card, player);
        if (player.beOn() && player.needsToDiscard()) return 22 - get.useful(card, player);
        var delat = get.value(card, target) - get.value(card, player) + get.useful(card, target) - get.useful(card, player);
        if (delat > 0) return 19 - get.value(card, player);
        return 9 - get.value(card, player);
    };
    get.losehpEffect = function (target, viewer) {
        if (!viewer) viewer = target;
        var threaten = 0.1;
        for (var i of game.filterPlayer()) threaten = Math.max(get.threaten(target, i, true), threaten);
        return get.effect(target, { name: 'losehp' }, target, viewer) * Math.max(0.1, 1 - 0.07 * target.hp) * Math.sqrt(threaten) * (target.hp == 1 ? 1.5 : 1);
    };
    get.recoverEffect = function (target, player, viewer) {
        if (!viewer) viewer = target;
        if (target.hp == target.maxHp) return 0;
        if (!player) player = target;
        if (!viewer) viewer = target;
        var threaten = 0.1;
        for (var i of game.filterPlayer()) threaten = Math.max(get.threaten(target, i, true), threaten);
        return get.effect(target, { name: 'recover' }, player, viewer) * Math.max(0.1, 1.3 - 0.13 * target.hp) * Math.sqrt(threaten);
    };
    get.nsdamageEffect = function (target, viewer, nature, skills) {
        if (get.itemtype(nature) == 'natures') {
            var natures = get.natureList(nature);
            return natures.map((n) => get.nsdamageEffect(target, viewer, n, skills)).reduce((p, c) => p + c, 0) / (natures.length || 1);
        }
        if (skills) {
            var name = 'damage';
            if (nature == 'fire') name = 'firedamage';
            else if (nature == 'thunder') name = 'thunderdamage';
            else if (nature == 'ice') name = 'icedamage';
            var damage = { name: name };
            if (game.dead[0]) return get.effectByskills(skills, target, damage, game.dead[0], viewer, nature);
            var effect = 0,
                fP = game.filterPlayer();
            for (var i of fP) effect += get.effectByskills(skills, target, damage, i, viewer, nature);
            if (fP.length) return effect / fP.length;
            return get.effectByskills(skills, target, damage, target, viewer, nature);
        }
        if (game.dead[0]) return get.damageEffect(target, game.dead[0], viewer, nature);
        var effect = 0,
            fP = game.filterPlayer();
        for (var i of fP) effect += get.damageEffect(target, i, viewer, nature);
        if (fP.length) return effect / fP.length;
        return get.damageEffect(target, target, viewer, nature);
    };
    get.drawEffect = function (target, num, viewer) {
        num = +num;
        if (num <= 0) return 0;
        if (!num) num = 0.8 + Math.random() / 5;
        if (target.hasSkillTag('nogain')) num *= 0.01;
        if (target.beOn() && target.hasSkill('zishu')) num++;
        if (target.beOn('phaseUse') && target.hasSkill('xinfu_zhanji')) num++;
        if (num > 1 && target.getFriends().length) if (target.hasSkill('hongde') || target.hasSkill('minihongde')) num++;
        if (!viewer || viewer === target) return num;
        var att = get.attitude(viewer, target);
        if (att > 0) att = 1 + Math.min(att / 100, 0.4);
        else att = -1 - Math.min(att / 100, 0.4);
        return num * att;
    };
    get.turnoverEffect = function (target, viewer) {
        if (target.hasSkillTag('noturn')) return 0;
        var threaten = 0.1;
        for (var i of game.filterPlayer()) threaten = Math.max(get.threaten(target, i, true), threaten);
        threaten = Math.sqrt(threaten);
        for (var i of target.getSkills()) threaten += get.skillRank(i, 'in') / 7;
        for (var i of target.getSkills()) threaten -= get.skillRank(i, 'out') / 8;
        var truned = target.isTurnedOver() ? 1 + threaten / 2 : -1 - threaten;
        var eff = Math.max(1, 5 + target.countCards('h') / 3 + 1 / Math.min(10, target.hp + 10) - target.countCards('j') ** 2 * 2);
        if (!viewer || viewer === target) return eff * truned;
        var att = get.attitude(viewer, target);
        if (att > 0) return eff * truned;
        if (att == 0) return 0;
        return -eff * truned;
    };
    get.yanzhuEffect = function (target, viewer, number) {
        if (!viewer) viewer = target;
        if (!number) number = 1;
        var num = -0.6 * number;
        var hes = target.countCards('he');
        if (hes == 0) return 0;
        else if (target.hasSkillTag('noh') || target.hasSkillTag('noe')) {
            num *= 0.1;
            if (target.hasSkillTag('noh') && target.countCards('h') == 1) num *= -0.1;
            if (target.hasSkillTag('noe') && target.countCards('h') == 1) num *= -0.1;
        } else {
            if (number > hes) num *= hes / number;
            if (hes < 3 + number) num *= 1.3;
            if (hes == number) num *= 1.2;
        }
        if (
            target.countCards('e', function (card) {
                return get.value(card) <= 0;
            }) &&
            num
        )
            num = -2 / num;
        num -= Math.max(0.1 - hes * 0.01, -0.05);
        if (target.hasSkillTag('nodiscard')) num = Math.sqrt(num * Math.random());
        var guohe = get.effect_use(target, { name: 'guohe_copy2' }, target, viewer) * Math.min(hes, number);
        if (viewer == target) return Math.max(num * 0.63 + guohe * 0.06, -1.3);
        var att = get.attitude(viewer, target);
        if (att > 0) att = 1 + att / 100;
        else att = -1 - att / 100;
        if (att > 0) return Math.max((num * 0.63 + guohe * 0.06) * att, -1.3);
        if (att < 0) return Math.min((-num * 0.65 + guohe * 0.057) * -att, 1.4);
        return num * 0.1;
    };
    ui.create.qyhcTXT = function (str, list, x, yangshi, list2) {
        if (!x) x = 1;
        if (typeof x != 'function') x = +x;
        if (!x) x = 1;
        if (list[0] && Array.isArray(list[0])) {
            var temp = [];
            list2 = [];
            for (var i of list) temp.push(i[1]), list2.push(i[0]);
            list = temp;
        }
        var id = lib.status.videoId++;
        if (yangshi == 'skill') {
            yangshi = undefined;
            var skill = true;
        }
        if (yangshi === true) var choiceList = ui.create.dialog(str, 'hidden');
        else {
            var choiceList = ui.create.dialog(str);
            if (yangshi === undefined) yangshi = _status.event.player;
            if (yangshi) if (!yangshi.isUnderControl(true) || _status.auto) choiceList.style.display = 'none';
        }
        choiceList.noforcebutton = true;
        choiceList.classList.add('withclbg');
        choiceList.videoId = id;
        for (var i = 0; i < list.length; i++) {
            if (skill) {
                var inner = lib.translate[list[i] + '_info'] ? '<span class=lefttext><span style="font-size:86%;">〖' + get.translation(list[i]) + '></span><span style="font-size:79%;">' + lib.translate[list[i] + '_info'] + '</span></span>' : '<span class=lefttext><span style="font-size:86%;">〖' + get.translation(list[i]) + '〗</span></span>';
                var next = choiceList.add('<div class="popup pointerdiv" style="width:98%;display:inline-block">' + inner + '</div>');
                next.firstChild.classList.add('tdnodes');
                next.firstChild.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                next.firstChild.link = list2 ? list2[i] : i;
                for (var j of Object.keys(lib.element.button)) next[j] = lib.element.button[j];
                choiceList.buttons.add(next.firstChild);
                continue;
            }
            if (typeof x == 'number') var bool = i % x == 0;
            else var bool = x(i, choiceList);
            if (bool) {
                var table = document.createElement('div');
                table.classList.add('add-setting');
                table.style.margin = '0';
                table.style.width = '100%';
                table.style.position = 'relative';
            }
            var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode.tdnodes');
            td.innerHTML = '<center>' + list[i] + '</center>';
            td.style.margin = '7px';
            td.link = list2 ? list2[i] : i;
            td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
            for (var j of Object.keys(lib.element.button)) td[j] = lib.element.button[j];
            table.appendChild(td);
            choiceList.buttons.add(td);
            if (bool) choiceList.content.appendChild(table);
        }
        return choiceList;
    };
    ui.create.moveDialog = function () {
        var args = Array.from(arguments);
        for (var i of args)
            if (typeof i == 'string') {
                if (i.includes('%'))
                    if (!width) var width = i;
                    else var height = i;
                if (lib.translate[i] && !skill) var skill = i;
            }
        if (width) args.remove(width);
        if (height) args.remove(height);
        if (skill) args[args.indexOf(skill)] = lib.translate[skill];
        args.add('hidden');
        var dialog = ui.create.dialog.apply(this, args);
        dialog.classList.add('withclbg');
        if (width) dialog.style.width = width;
        if (height) dialog.style.height = height;
        dialog.style['z-index'] = '14';
        for (var i of dialog.buttons) i.classList.remove('button');
        if (skill) (dialog.link = skill), (dialog.notonwindow = true);
        dialog.open = function () {
            this.style.transform = 'scale(0.8)';
            this.style.transitionProperty = 'opacity,transform';
            this.style.opacity = 0;
            ui[dialog.notonwindow ? 'arena' : 'window'].appendChild(this);
            if (this.link) {
                if (!ui.moveDialogs) ui.moveDialogs = {};
                ui.moveDialogs[this.link] = dialog;
            }
            ui.update();
            ui.refresh(this);
            this.style.transform = 'scale(1)';
            this.style.opacity = 1;
            var that = this;
            setTimeout(function () {
                that.style.transitionProperty = '';
            }, 500);
            return this;
        };
        dialog.close = function () {
            this.delete();
            if (ui.dialogs.length) ui.update();
            if (this.link && ui.moveDialogs && ui.moveDialogs[this.link]) delete ui.moveDialogs[this.link];
            return this;
        };
        dialog.change = function (...args) {
            this.buttons[0].parentNode.remove();
            this.buttons = [];
            for (var i of args) this.add(i);
            for (var i of this.buttons) i.classList.remove('button');
        };
        qyhcCL.addClosebutton(dialog);
        dialog.open();
        return dialog;
    };
    var skills = ['clandaojie_clan_xunchen', 'lanjiang_heqi', 'duanbing_heqi', 'yongdi_xinping', 'jixi_ol_dengai', 'nzry_juzhan_1', 'lieren_ol_zhurong', 'huyuan'];
    var skills2 = ['spmingshi2', 'splirang1', 'spmingshi1', 'spdaming1', 'spdaming2'];
    for (var i of skills) if (!lib.skill[i]) lib.skill[i] = { audio: 2, unique: true };
    for (var i of skills2) if (!lib.skill[i]) lib.skill[i] = { audio: true, unique: true };
    return [lib, game, ui, get, ai, _status];
});

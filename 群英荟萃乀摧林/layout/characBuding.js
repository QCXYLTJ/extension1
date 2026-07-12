'use strict';
qyhcCL.arenaReady.push((lib, game, ui, get, ai, _status, config) => {
    lib.skill._qyhc_mouyiBetter = {
        trigger: {
            player: ['chooseToDuibenBegin'],
        },
        charlotte: true,
        delay: false,
        silent: true,
        forced: true,
        lastDo: true,
        priority: -114514,
        filter(event, player) {
            lib.translate.db_atk = '攻方:' + get.translation(player) + '<span hidden="hidden">';
            lib.translate.db_def = '守方:' + get.translation(event.target) + '<span hidden="hidden">';
            if (event.parent.name == 'sbtieji') {
                lib.translate.db_atk1_info = '防止攻方摸两张牌(但你可能会被其获得一张牌)';
                lib.translate.db_atk2_info = '防止攻方获得你一张牌(但其可能会摸两张牌)';
                lib.translate.db_def1_info = '尝试获得守方一张牌';
                lib.translate.db_def2_info = '尝试摸两张牌';
                return false;
            }
            if (event.parent.name == 'sbduanliang') {
                lib.translate.db_def2_info = '尝试视为对守方使用一张【决斗】';
                if (event.target.hasJudge('bingliang')) {
                    lib.translate.db_atk1_info = '防止攻方视为对你使用一张【决斗】(但你可能会被其获得一张牌)';
                    lib.translate.db_atk2_info = '防止攻方获得你一张牌(但其可能会视为对你使用一张【决斗】)';
                    lib.translate.db_def1_info = '尝试获得守方一张牌';
                    return false;
                }
                if (ui.cardPile.childNodes.length > 0) {
                    lib.translate.db_atk1_info = '防止攻方视为对你使用一张【决斗】(但牌堆顶的牌可能会被其当【兵粮寸断】对你使用)';
                    lib.translate.db_atk2_info = '防止攻方将牌堆顶的牌当【兵粮寸断】对你使用(但其可能会视为对你使用一张【决斗】)';
                    lib.translate.db_def1_info = '尝试将牌堆顶的牌当【兵粮寸断】对守方使用';
                    return false;
                }
                lib.translate.db_atk1_info = '防止攻方视为对你使用一张【决斗】';
                lib.translate.db_atk2_info = '牌堆顶都没牌了选这项干嘛';
                lib.translate.db_def1_info = '牌堆顶都没牌了选这项干嘛';
                return false;
            }
            if (lib.translate.db_atk1_info) delete lib.translate.db_atk1_info;
            if (lib.translate.db_atk2_info) delete lib.translate.db_atk2_info;
            if (lib.translate.db_def1_info) delete lib.translate.db_def1_info;
            if (lib.translate.db_def2_info) delete lib.translate.db_def2_info;
        },
        content() { }, //QQQ
    };
    var obj = {
        clanlieshi_info: '出牌阶段,你可以选择一项:1.废除判定区并受到你造成的1点火焰伤害;2.弃置所有【闪】;3.弃置所有【杀】→你令一名其他角色选择你未选择的一项执行.',
        clandianzhan_info: '锁定技,你每轮首次使用结算结束一种有花色的牌后,若:此牌目标唯一,其横置;你有此花色手牌,你重铸这些牌→若你执行了两项,你摸一张牌.',
        clanhuanyin_info: '锁定技,你进入濒死状态时,将手牌摸至四张.',
        dcqingyan_info: '每回合限两次,当你成为其他角色使用的黑色牌的目标后,若你的手牌数:小于体力,你可以将手牌摸至体力上限;否则你可以弃置一张手牌且令你手牌上限+1.',
        dcxieshou_info: '每回合限一次,当一名角色受到伤害后,若你与其的距离不大于2,你可以令你手牌上限-1,其选择一项:1.回复1点体力;2.复原且摸两张牌.',
        clandaojie_info: '宗族技,锁定技,当你每回合首次使用的非伤害类普通锦囊牌结算结束后,你失去1点体力或一个锁定技并令一名颍川荀氏角色获得此牌.',
        clanguixiang_info: '锁定技,你每回合第X个阶段改为出牌阶段(X为你的手牌上限).',
        clanyirong_info: '出牌阶段限两次,若你的手牌数〈小／大〉于手牌上限,你可以将手牌〈摸／弃〉至手牌上限并令你手牌上限〈-／+〉1.',
        clanmuyin_info: '宗族技,回合开始时,你可以令一名手牌上限不为全场最大的陈留吴氏角色手牌上限+1.',
        olduorui_info: '当你于出牌阶段对一名角色造成伤害后,若其没有因〖夺锐〗而失效的技能,你可以令其武将牌上的一个技能失效直到其回合结束,你结束当前阶段.',
        olhongyuan_info: '每阶段限一次,你获得牌后,若数量不少于两张,你可以交给一名角色一张牌,你可以交给另一名角色一张牌.',
        lanjiang_info: '结束阶段,你可以令所有手牌数不小于你的角色依次选择是否令你摸一张牌→你可以对其中一名手牌数等于你的角色造成1点伤害,若如此做,你令其中一名手牌数小于你的角色摸一张牌.',
        yifa_info: '锁定技,你成为其他角色使用的【杀】或黑色普通锦囊牌的目标后,其手牌上限-1直到其回合结束.',
        dchaochong_info: '当你使用牌后,若你的手牌数〈小／大〉于手牌上限,你可以将手牌调整至手牌上限(至多摸五张),你的手牌上限〈-／+〉1.',
        dcjinjin_info: '每回合限一次,当你造成或受到伤害后,你可以重置因〖昊宠〗调整的手牌上限,令来源可以弃置至多X张牌→你摸X-Y张牌(X为你以此法调整的手牌上限数且至少为1,Y为其以此法弃置的牌数).',
        smyyingshi_info: '锁定技,出牌阶段,牌堆顶的X张牌对你可见(X为你的体力上限且至多为牌堆牌数).',
        xinquanbian_info: '出牌阶段,当你首次使用或打出一种花色的手牌时,你可以从牌堆顶X张牌中选择一张不为此花色的牌并将其余牌以任意顺序置于牌堆顶(X为你的体力上限),你获得选择的牌.出牌阶段,若你本阶段使用过的非装备手牌数大于X,你不能使用非装备手牌.',
        weijing_info: '每轮限一次,你可以视为使用一张【杀】或【闪】.',
        dcshixian_info: '当你使用牌时,若之牌名与你使用的上一张牌的牌名押韵,你可以摸一张牌且令此牌额外结算一次.',
        olliangyin_info: '每回合限一次,当有牌〈移出／加入〉游戏后,你秘密将手牌摸至与你相同,你可以与一名其他角色各〈摸／弃置〉一张牌,你可以令你或其之中的一名手牌数为X的角色回复1点体力(X为你的<箜>数).',
        xietianzi: '挟天子以令诸侯',
        zhaoran_info: '出牌阶段开始时,你可以令此阶段:你的手牌明置;每当你失去一张手牌后,若你没有与之花色相同的手牌且本阶段未因此牌花色的牌触发过此效果,你摸一张牌或弃置一名其他角色一张牌.',
        olchuanwu_info: '锁定技,当你造成或受到伤害后,你失去武将牌上的前X个技能直到有回合开始或结束(X为你的攻击范围且至多为你武将牌上的技能数),摸X张牌.',
        cuijue_info: '每回合每名角色限一次,出牌阶段,你可以弃置一张牌,对攻击范围内距离最远的一名其他角色造成1点伤害.',
        olshilu_info: '锁定技,当你受到伤害后,你摸X张牌(X为你的体力值且至多为5),你展示攻击范围内一名角色的一张手牌,令此牌视为【杀】.',
    };
    for (var i in obj) lib.translate[i] = obj[i];
    if (lib.skill.qingbei) {
        lib.skill.qingbei.content = function () {
            'step 0';
            var next = player.chooseButton(['###〖擎北〗你可以选择任意种花色###<div class="text center">你不能于本轮能使用这些花色,且使用牌后摸等同于选择花色数的牌</div>', [lib.suit.map((i) => ['', '', 'lukai_' + i]).reverse(), 'vcard']], [1, 4]);
            next.set('ai', (button) => {
                var player = _status.event.player;
                var suit = button.link[2].slice(6);
                var val = player
                    .getCards('hs', { suit: suit })
                    .map((card) => {
                        return get.value(card) + player.getUseValue(card) / 3;
                    })
                    .reduce((p, c) => {
                        return p + c;
                    }, 0);
                if (val > 10 && ui.selected.buttons.length > 0) return -1;
                if (val > 6 && ui.selected.buttons.length == 2) return -1;
                if (ui.selected.buttons.length == 3) return -1;
                return 1 + 1 / val;
            });
            ('step 1');
            if (result.bool) {
                var suits = result.links.map((i) => i[2].slice(6));
                player.addTempSkill('qingbei_effect', 'roundStart');
                player.setStorage('qingbei_effect', suits);
                player.markSkill('qingbei_effect');
            }
        };
        lib.skill.qingbei.subSkill.effect.intro = {
            content: (storage) => `<center>本轮内不能使用${get.translation(storage)}花色的牌,且使用牌后摸${get.cnNumber(storage.length)}张牌</center>`,
            markcount(storage, player) {
                return qyhcCL.Csuitchange(storage, player, 'qingbei_effect', '擎');
            },
            updatetrigger: ['qinbeiAfter', 'useCard'],
        };
    }
    //神陆逊
    if (lib.skill.nzry_dinghuo) {
        lib.skill.nzry_dinghuo.content = function () {
            'step 0';
            player.awakenSkill('nzry_dinghuo');
            player.storage.nzry_dinghuo = true;
            targets.sortBySeat(_status.currentPhase);
            ('step 1');
            player.removeMark('nzry_junlve', player.countMark('nzry_junlve'));
            for (var i = 0; i < targets.length; i++) targets[i].discard(targets[i].getCards('e'));
            player
                .chooseTarget(true, '对一名目标角色造成1点火焰伤害', function (card, player, target) {
                    return _status.event.targets.includes(target);
                })
                .set('targets', targets)
                .set('ai', ai.fireEffect);
            ('step 2');
            if (result.bool) {
                player.line(result.targets[0]);
                result.targets[0].damage('fire', 'nocard');
            }
        };
        lib.skill.nzry_junlve.trigger = {
            player: 'damageEnd',
            source: 'damageSource',
        };
    }
    //杨婉
    if (lib.skill.youyan)
        lib.skill.youyan.content = function () {
            var evt = trigger.getParent('phaseUse');
            if (evt && evt.player == player) evt.youyaned = true;
            else {
                var evt = trigger.getParent('phaseDiscard');
                if (evt) evt.youyaned = true;
            }
            var list = [],
                cards = [];
            var cards2 = trigger.getl(player).cards2;
            for (var i of cards2) {
                list.add(i.suit);
            }
            for (var i of lib.suit) {
                if (list.includes(i)) continue;
                var card = get.cardPile2(function (card) {
                    return card.suit == i;
                });
                if (card) cards.push(card);
            }
            if (cards.length) player.gain(cards, 'draw');
        };
    lib.skill.rebotu.subSkill.mark.intro = {
        content: '本回合已有$花色的牌进入过弃牌堆',
        markcount(storage, player) {
            return qyhcCL.Csuitchange(storage, player, 'rebotu_mark', '博');
        },
    };
    //荀采
    if (lib.skill.clandianzhan) {
        lib.skill.clandianzhan.mark = true;
        lib.skill.clandianzhan.intro = {
            content(storage, player) {
                var list = lib.suit.filter((i) => {
                    return !lib.skill.clwt_sankuang.findlast(i, player);
                });
                if (!list.length) return '当前轮未使用结算结束过牌';
                return '<center>当前轮使用结算结束过的牌中包含的花色:' + get.colorful(list, 'S') + '</center>';
            },
            markcount(storage, player) {
                var list = lib.suit.filter((i) => {
                    return !lib.skill.clwt_sankuang.findlast(i, player);
                });
                return qyhcCL.Csuitchange(list, player, 'clandianzhan', '盏');
            },
            updatetrigger: {
                player: 'useCardAfter',
            },
        };
        lib.skill.clandianzhan.filter = function (event, player) {
            var card = event.card,
                suit = card.suit;
            if (!lib.suit.includes(suit) || !lib.skill.clwt_sankuang.findlast(suit, player, event)) return false;
            return (event.targets && event.targets.length == 1 && event.targets[0].isIn() && !event.targets[0].isLinked()) || player.countCards('h', (card) => lib.filter.cardRecastable(card) && card.suit == event.card.suit);
        };
        lib.skill.clandianzhan.content = function () {
            'step 0';
            var bool = false;
            if (trigger.targets && trigger.targets.length == 1 && trigger.targets[0].isIn() && !trigger.targets[0].isLinked()) {
                player.line(trigger.targets);
                trigger.targets[0].link(true);
            } else bool = true;
            var cards = player.getCards('h', (card) => lib.filter.cardRecastable(card) && card.suit == trigger.card.suit);
            if (cards.length > 0) player.recast(cards);
            else bool = true;
            if (bool) event.finish();
            ('step 1');
            player.draw();
        };
        lib.skill.clanlieshi.chooseButton.dialog = () =>
            ui.create.qyhcTXT(
                '〖烈誓〗请选择一项<div class="text center">你令另一名角色选择你未选择的一项执行<br></div>',
                ['废除判定区并受到1点火焰伤害', '弃置所有【闪】', '弃置所有【杀】'],
                (i, dialog) => {
                    if (!i) return true;
                    if (i == 1) {
                        dialog.addText('--若其均无法执行,则不执行--');
                        return true;
                    } else return false;
                },
                true,
                ['damage', 'shan', 'sha']
            );
        lib.skill.relianying.content = function () {
            'step 0';
            var num = trigger.getl(player).hs.length;
            player.chooseTarget('〖连营〗选择至多' + get.cnNumber(num) + '名角色', [1, num]).set('prompt2', '<center>这些角色各摸一张牌</center>').ai = function (target) {
                var player = _status.event.player;
                if (player == target) return get.attitude(player, target) + 10;
                return get.attitude(player, target);
            };
            ('step 1');
            if (result.bool) {
                game.asyncDraw(result.targets.sortBySeat(_status.currentPhase));
            } else event.finish();
        };
        lib.skill.clanlieshi.subSkill.backupx.delay = false;
    }
    //自动发动
    if (lib.skill.new_rejianxiong) lib.skill.new_rejianxiong.frequent = true;
    //周处
    if (lib.skill.shanduan) {
        lib.skill.shanduan.mark = true;
        lib.skill.shanduan.intro = {
            content(storage, player) {
                var evt = _status.event;
                evt = evt.getParent('phase');
                if (evt._shanduan) storage = evt._shanduan;
                if (!storage) storage = [1, 2, 3, 4];
                storage.sort((a, b) => a - b);
                var str = '<center>善断数值:' + get.translation(storage);
                if (!player.storage.shanduan_effect) return str + '</center>';
                var sha = game.me.storage.shanduan_effect.sha;
                var range = game.me.storage.shanduan_effect.range;
                if (!sha && !range) return str + '</center>';
                str += '<br><br>·已分配·';
                if (range) str += '<br>攻击范围基数最小值:' + range;
                if (sha) str += '<br>出杀次数限制基数:' + sha;
                return str + '</center>';
            },
            name: '善断',
            markcount(storage, player) {
                var evt = _status.event;
                evt = evt.getParent('phase');
                if (evt._shanduan) storage = evt._shanduan;
                if (!storage) storage = [1, 2, 3, 4];
                storage.sort((a, b) => a - b);
                var str = 0;
                for (var i = 1; i <= storage.length; i++) str += storage[i - 1] - i;
                str += '';
                if (player.marks.shanduan) {
                    player.chanMarkinner('shanduan', '断');
                }
                return str;
            },
            updatetrigger: {
                player: ['shanduan_drawEnd', 'shanduan_useEnd', 'clAddSkill', 'shanduan_discardEnd', 'shanduan_damageEnd', 'shanduanEnd'],
            },
        };
    }
    //陈矫
    if (lib.skill.dcxieshou) {
        lib.skill.dcxieshou.creatTrigger = true;
        lib.skill.dcxieshou.content = function () {
            'step 0';
            player.qyhc_moveMaxhand('dcxieshou', -1);
            ('step 1');
            if (trigger.player.isHealthy()) event._result = { index: 1 };
            else
                trigger.player
                    .chooseControl(['回复1点体力', '复原且摸两张牌'])
                    .set('ai', () => {
                        var player = _status.event.player;
                        if (player.isTurnedOver()) return 1;
                        if (player.hasSkillTag('nogain')) return 0;
                        return [0, 0, 0, 0, 0, 1, 1].randomGet();
                    })
                    .set('prompt', get.translation(player) + '对你发动了〖协守〗,请选择一项');
            ('step 2');
            if (result.index) {
                trigger.player.link(false);
                if (player.isTurnedOver()) trigger.player.turnOver();
                trigger.player.draw(2);
            } else trigger.player.recover();
        };
        lib.skill.dcqingyan = {
            trigger: { target: 'useCardToTargeted' },
            filter(event, player) {
                return player.getCountNum('dcqingyan') < 2 && event.player != player && get.color(event.card) == 'black';
            },
            creatTrigger: 2,
            forced: true,
            content() {
                'step 0';
                if (player.countCards('h') < player.hp) player.chooseBool(get.prompt('dcqingyan'), '将手牌摸至体力上限(摸' + get.cnNumber(player.maxHp - player.countCards('h')) + '张)').set('ai', () => 1);
                else
                    player
                        .chooseToDiscard(get.prompt('dcqingyan'), '弃置一张手牌令你的手牌上限+1')
                        .set('ai', (card) => 6 - get.value(card))
                        ('step 1');
                if (result.bool) {
                    player.addCountNum('dcqingyan');
                    if (result.cards && result.cards.length) player.qyhc_moveMaxhand('dcqingyan');
                    else {
                        player.drawTo(player.maxHp);
                    }
                }
            },
        };
    }
    lib.skill.icesha_skill.prompt = '是否发动冰冻伤害的特殊效果？';
    lib.skill.icesha_skill.prompt2 = function (event, player) {
        return '<center>防止即将造成的冰冻伤害,改为依次弃置' + get.translation(event.player) + '两张牌</center>';
    };
    if (lib.skill.twfupan) lib.skill.twfupan.frequent = true;
    qyhcCL.funcaddEval(lib.skill.hanbing_skill.check, 'if(event.getParent("qyhc_yunshen").name=="qyhc_yunshen"&&event.player.isHealthy()) return get.attitude(player,target)<0;', -1);
    lib.skill.qinglong_skill.content = function (event, player) {
        'step 0';
        player
            .chooseToUse(
                '你可以发动【青龙偃月刀】对' + get.translation(trigger.target) + '使用一张【杀】',
                function (card, player, event) {
                    if (card.name != 'sha') return false;
                    if (!player.hasSkill('qinglong_skill', null, false)) {
                        var cards = player.getEquips('qinglong');
                        if (!cards.some((card2) => card2 != card && !ui.selected.cards.includes(card2))) return false;
                    }
                    if (_status.event.getParent('qinglong_skill').getTrigger && !player.canUse(card, _status.event.getParent('qinglong_skill').getTrigger().target, false)) return false;
                    return lib.filter.filterCard.apply(this, arguments);
                },
                trigger.target,
                -1
            )
            .set('addCount', false);
    };
    lib.skill.qilin_skill = {
        equipSkill: true,
        trigger: { source: 'damageBegin2' },
        filter(event, player) {
            return (
                event.card &&
                event.card.name == 'sha' &&
                event.notLink() &&
                event.player.countDiscardableCards(player, 'e', (card) => {
                    return [3, 4, 6].includes(get.equiptype(card));
                })
            );
        },
        forced: true,
        audio: true,
        content() {
            'step 0';
            player
                .discardPlayerCard('e', trigger.player, '是否发动【麒麟弓】？<br><span class=text>弃置' + get.translation(trigger.player) + '坐骑栏内一张牌</span>')
                .set('filterButton', (button) => {
                    return [3, 4, 6].includes(get.equiptype(button.link));
                });
        },
    };
    lib.skill.icesha_skill.ruleSkill = true;
    if (lib.skill.xinbenxi)
        lib.skill.xinbenxi.content = function () {
            'step 0';
            var list = ['为XXX多选择一个目标', ' 令XXX不可被抵消 ', '当XXX造成伤害时摸牌', ' 令XXX无视防具牌 '],
                card = get.translation(trigger.card);
            for (var i = 0; i < list.length; i++) list[i] = list[i].replace(/XXX/g, card);
            var next = player.chooseButton(ui.create.qyhcTXT('〖奔袭〗请选择一至两项', list, 2, null, [0, 2, 3, 1]));
            next.set('forced', true);
            next.set('selectButton', [1, 2]);
            next.set('filterButton', function (button) {
                if (button.link == 0) {
                    return _status.event.bool1;
                }
                return true;
            });
            next.set('bool1', lib.skill.xinbenxi.filterx(trigger, player));
            next.set('ai', function (button) {
                var player = _status.event.player;
                var event = _status.event.getTrigger();
                switch (button.link) {
                    case 0: {
                        if (
                            game.hasPlayer(function (current) {
                                return lib.filter.targetEnabled2(event.card, player, current) && !event.targets.includes(current) && get.effect(current, event.card, player, player) > 0;
                            })
                        )
                            return 1.6 + Math.random();
                        return 0;
                    }
                    case 1: {
                        if (
                            event.targets.filter(function (current) {
                                var eff1 = get.effect(current, event.card, player, player);
                                player._xinbenxi_ai = true;
                                var eff2 = get.effect(current, event.card, player, player);
                                delete player._xinbenxi_ai;
                                return eff1 > eff2;
                            }).length
                        )
                            return 1.9 + Math.random();
                        return Math.random();
                    }
                    case 2: {
                        var num = 1.3;
                        if (
                            event.card.name == 'sha' &&
                            event.targets.filter(function (current) {
                                if (current.mayHaveShan() && get.attitude(player, current) <= 0) {
                                    if (current.hasSkillTag('useShan')) num = 1.9;
                                    return true;
                                }
                                return false;
                            }).length
                        )
                            return num + Math.random();
                        return 0.5 + Math.random();
                    }
                    case 3: {
                        return (get.tag(event.card, 'damage') || 0) + Math.random();
                    }
                }
            });
            ('step 1');
            var map = [
                function (trigger, player, event) {
                    player
                        .chooseTarget('请选择' + get.translation(trigger.card) + '的额外目标', true, function (card, player, target) {
                            var player = _status.event.player;
                            if (_status.event.targets.includes(target)) return false;
                            return lib.filter.targetEnabled2(_status.event.card, player, target);
                        })
                        .set('targets', trigger.targets)
                        .set('card', trigger.card)
                        .set('ai', function (target) {
                            var trigger = _status.event.getTrigger();
                            var player = _status.event.player;
                            return get.effect(target, trigger.card, player, player);
                        });
                },
                function (trigger, player, event) {
                    player.storage.xinbenxi_unequip.add(trigger.card);
                },
                function (trigger, player, event) {
                    player.storage.xinbenxi_directHit.add(trigger.card);
                    trigger.nowuxie = true;
                    trigger.customArgs.default.directHit2 = true;
                },
                function (trigger, player, event) {
                    player.storage.xinbenxi_damage.add(trigger.card);
                },
            ];
            for (var i = 0; i < result.links.length; i++) {
                game.log(player, '选择了', '#g【奔袭】', '的', '#y选项' + get.cnNumber(result.links[i] + 1, true));
                map[result.links[i]](trigger, player, event);
            }
            if (!result.links.includes(0)) event.finish();
            ('step 2');
            if (result.targets?.length) {
                player.line(result.targets);
                trigger.targets.addArray(result.targets);
            }
        };
    if (lib.skill.starsujun) {
        lib.skill.starsujun.marktext = '肃军?:?';
        lib.skill.starsujun.intro = {
            name(event, player) {
                if (player.isOnView(game.me)) return '〖肃军〗数值';
                return '正在肃军中...';
            },
            content(event, player) {
                if (player.isOnView(game.me)) {
                    return '<center>手牌中有' + get.cnNumber(player.countCards('h', (card) => get.type(card) == 'basic')) + '张基本牌和' + get.cnNumber(player.countCards('h', (card) => get.type(card) != 'basic')) + '张非基本牌</center>';
                }
                return '';
            },
            updatetrigger: { global: ['loseCardEnd', 'gainCardEnd'] },
            markcount(storage, player) {
                if (player.isOnView(game.me)) {
                    var shanum = player.countCards('h', (card) => get.type(card) == 'basic').toString();
                    var tricknum = player.countCards('h', (card) => get.type(card) != 'basic').toString();
                    if (qyhcCL.beOwned10) player.chanMarkinner('starsujun', '肃军' + shanum + ':' + tricknum);
                    else {
                        player.chanMarkinner('starsujun', shanum);
                        return tricknum;
                    }
                } else {
                    if (qyhcCL.beOwned10) player.chanMarkinner('starsujun', '肃军' + '?:?');
                    else player.chanMarkinner('starsujun', '?');
                }
            },
        };
    }
    if (lib.skill.clandaojie) {
        lib.skill.clandaojie = {
            clanSkill: true,
            audio: 2,
            audioname: lib.skill.clandaojie.audioname,
            audioname2: { qyhc_xunchen: 'clandaojie_clan_xunchen' },
            marktext: '<span class=greentext>蹈节✓</span>',
            intro: {
                name(event, player) {
                    if (
                        player.getHistory('useCard', (evt) => {
                            return get.type(evt.card) == 'trick' && !get.tag(evt.card, 'damage');
                        }).length
                    )
                        return '<span class=redtext>本回合已使用过非伤害类普通锦囊牌</span>';
                    return '<span class=greentext>本回合未使用过非伤害类普通锦囊牌</span>';
                },
                markcount(event, player) {
                    var last = player.getHistory('useCard', (evt) => {
                        return get.type(evt.card) == 'trick' && !get.tag(evt.card, 'damage');
                    });
                    if (qyhcCL.beOwned10) {
                        if (last.length) player.chanMarkinner('clandaojie', '<span class=redtext>蹈节×</span>');
                        else player.chanMarkinner('clandaojie', '<span class=greentext>蹈节✓</span>');
                        return 0;
                    }
                    if (last.length) player.chanMarkinner('clandaojie', '<span class=redtext>×</span>');
                    else player.chanMarkinner('clandaojie', '<span class=greentext>✓</span>');
                    return '蹈节';
                },
            },
            forced: true,
            mark: true,
            trigger: { player: 'useCardAfter' },
            filter(event, player) {
                player.trymarkAutoSkill('clandaojie');
                if (get.type(event.card, null, false) != 'trick') return false;
                if (get.tag(event.card, 'damage')) return false;
                if (!event.card.cards || !event.card.cards.filterInD('od').length) return false;
                if (
                    player
                        .getHistory('useCard', (evt) => {
                            return get.type(evt.card) == 'trick' && !get.tag(evt.card, 'damage');
                        })
                        .indexOf(event) != 0
                )
                    return false;
                return game.hasPlayer((current) => current.hasClan('颍川荀氏'));
            },
            content() {
                'step 0';
                player
                    .chooseSkills(
                        '〖蹈节〗请选择失去一个锁定技,或点取消失去1点体力<br><span class=text>你执行选择的代价前选择一名颍川荀氏角色,其于你执行代价后获得' + get.translation(trigger.card.cards.filterInD('od')) + '</span>',
                        player.getSkills(null, false, false).filter((skill) => {
                            var info = get.info(skill);
                            if (!info || get.is.empty(info) || info.charlotte || !get.is.locked(skill)) return false;
                            return true;
                        })
                    )
                    .set('ai', function (button) {
                        var info = get.info(button.link);
                        if (info && info.ai && info.ai.neg) return 3;
                        if (button.link == 'clanfenchai') return 1.4;
                        if (button.link == 'clandaojie') return _status.event.player.hasSkill('clanbaichu') ? -1 : 1;
                        if (button.link == 'clanbaichu') return -1;
                        var value = get.skillRank(button.link, 'inout');
                        return value / 30;
                    });
                ('step 1');
                if (result.bool) event.removeskill = result.links[0];
                event.dialog = ui.create.dialog('〖蹈节〗请选择一名颍川荀氏角色,令其获得以下牌');
                event.dialog.addText('你失去1点体力或一个锁定技');
                qyhcCL.addClosebutton(event.dialog);
                event.dialog.add(trigger.card.cards.filterInD('od'));
                for (var i of event.dialog.buttons) i.classList.remove('button');
                if (!player.isUnderControl(true) || _status.auto) event.dialog.style.display = 'none';
                player.chooseTarget('', true, (card, player, target) => target.hasClan('颍川荀氏')).set('ai', ai.drawEffect);
                ('step 2');
                if (event.dialog) event.dialog.close();
                if (result.bool) {
                    if (event.removeskill) player.removeSkillLog(event.removeskill);
                    else player.loseHp();
                    result.targets[0].gain(trigger.card.cards.filterInD('od'), 'gain2');
                }
            },
        };
    }
    lib.characterPack.xianding.liuhui = ['male', 'qun', 4, ['clwt_geyuan', 'clwt_jieshu', 'clwt_gusuan'], []];
    if (lib.config.characters.includes('xianding')) {
        lib.character.liuhui = ['male', 'qun', 4, ['clwt_geyuan', 'clwt_jieshu', 'clwt_gusuan'], []];
    }
    if (lib.skill.chenjian) lib.skill.chenjian.frequent = true;
    lib.characterPack.clan.clan_wuxian = ['female', 'shu', 3, ['clanyirong', 'clanguixiang', 'clanmuyin'], ['clan:陈留吴氏']];
    if (lib.config.characters.includes('clan')) {
        lib.character.clan_wuxian = ['female', 'shu', 3, ['clanyirong', 'clanguixiang', 'clanmuyin'], ['clan:陈留吴氏']];
    }
    if (lib.skill.olgangshu && qyhcCL.beOwned10) {
        delete lib.skill.olgangshu.subSkill.mark;
        delete lib.skill.olgangshu.subSkill.intro;
        lib.skill.olgangshu.mark = true;
        lib.skill.olgangshu.intro = {
            markcount(storage, player) {
                var info = lib.skill.olgangshu.getInfo(player);
                var list = [player.getAttackRange(), 2 + info[1], player.getCardUsable('sha', true)],
                    str = '';
                for (var i of list) str += get.colorful([i, 10, 'Inf'], '￥');
                return str;
            },
            updatetrigger: {
                player: ['olgangshuEnd', 'olgangshu_buffEnd', 'equipAfter', 'olgangshu_resetEnd'],
            },
            content(storage, player) {
                var info = lib.skill.olgangshu.getInfo(player);
                var list = [player.getAttackRange(), 2 + info[1], player.getCardUsable('sha', true)];
                var str = '<center>谏旋数值:' + list.join('|') + '</center>';
                if (info[0] > 0) str += '<li>攻击范围+' + info[0];
                if (info[1] > 0) str += '<li>下个摸牌阶段摸牌数+' + info[1];
                if (info[2] > 0) str += '<li>使用【杀】的次数上限+' + info[2];
                return str;
            },
        };
    }
    if (config.pengyang != 'none') {
        if (config.pengyang == 'kaifa') {
            lib.translate.oltuishi_info = '锁定技,你不能使用无目标普通锦囊牌;当你使用点数为字母的牌后,你摸两张牌并令你使用的下一张牌无视距离和次数限制.';
            lib.translate.olqifan_info = '当你需要使用牌时,你可以观看牌堆底的X+1张牌并使用其中你需要的牌;以此法使用的牌结算结束后,你依次弃置以下前X个区域中的所有牌:1.判定区;2.装备区;3.手牌区(X为你因此技能使用过的牌中包含的类型数).';
        } else {
            lib.translate.oltuishi_info = '锁定技,你不能使用【无懈可击】;当你使用点数为字母的牌后,你摸两张牌并令你使用的下一张牌无视距离和次数限制.';
            lib.translate.olqifan_info = '当你需要使用基本牌或有目标普通锦囊牌时,你可以将牌堆底X+1张牌置于仓廪并可以使用其中的牌直到你发动主动技、即将使用牌或结束需要使用牌事件.你的需要使用牌事件结束后,若你于此事件中以此法使用过牌,你依次弃置以下前X个区域中的所有牌:1.判定区;2.装备区;3.手牌区(X为你因此技能使用过的牌中包含的类型数).';
        }
        lib.skill.oltuishi = {
            audio: 2,
            mod: {
                wuxieJudgeEnabled: () => false,
                wuxieEnabled: () => false,
                kanpoEnabled: () => false,
                caochuanEnabled: () => false,
                jinchanEnabled: () => false,
                cardEnabled(card) {
                    if (card && get.type(card) == 'trick' && get.info(card).notarget) return false;
                },
                targetInRange(card) {
                    if (card && card.storage && card.storage.oltuishi) return true;
                },
                aiValue(player, card, val) {
                    if (get.type(card) == 'trick' && get.info(card).notarget) return 0;
                    var num = card.number;
                    if ([1, 11, 12, 13].includes(num)) return val * 1.1;
                },
                aiUseful(player, card, val) {
                    if (get.type(card) == 'trick' && get.info(card).notarget) return 0;
                    var num = card.number;
                    if ([1, 11, 12, 13].includes(num)) return val * 1.1;
                },
                aiOrder(player, card, order) {
                    if (card.name == 'sha' && player.hasSkill('oltuishi_unlimit')) order += 9;
                    var num = card.number;
                    if ([1, 11, 12, 13].includes(num)) order += 3;
                    return order;
                },
            },
            trigger: { player: 'useCardAfter' },
            filter(event) {
                return [1, 11, 12, 13].includes(event.card.number);
            },
            forced: true,
            content() {
                'step 0';
                player.draw(2);
                player.addSkill('oltuishi_unlimit');
            },
            subSkill: {
                unlimit: {
                    charlotte: true,
                    mod: {
                        cardUsableTarget(card, player, target) {
                            return true;
                        },
                        targetInRange(card, player, target) {
                            return true;
                        },
                    },
                    trigger: { player: 'useCard1' },
                    forced: true,
                    popup: false,
                    silent: true,
                    firstDo: true,
                    content() {
                        player.removeSkill('oltuishi_unlimit');
                        trigger.NotAddCount();
                    },
                    mark: true,
                    intro: { content: '<center>使用下一张牌无距离次数限制</center>' },
                },
            },
        };
        lib.skill.olqifan = {
            audio: 2,
            lastDo: config.pengyang == 'kaifa',
            trigger: { player: 'chooseToUseBegin' },
            hiddenCard(player, name) {
                if (lib.card[name] && lib.inpile.includes(name)) return !(lib.card[name].type == 'trick' && lib.card[name].notarget);
            },
            forced: true,
            filter(event, player) {
                if (event.responded) return false;
                for (var i of lib.inpile) {
                    if (lib.card[i] && event.filterCard({ name: i }, player, event)) return !(lib.card[i].type == 'trick' && lib.card[i].notarget);
                }
                return false;
            },
            delay: false,
            content() {
                'step 0';
                var cards = get.bottomCards(1 + player.getStorage('olqifan').length, true);
                for (var i of cards) i.classList.add('glow');
                player.storage.olqifan_cards = cards;
                player.loseToSpecial(cards, 'olqifan').untrigger();
                player.addTempSkill('olqifan_discard', ['phaseBefore', 'phaseAfter']);
                player.tempSkills.olqifan_discard = function (event, player, name) {
                    if (event.player != player) return false;
                    if (event.name == 'useSkill' || event.name == 'logSkill')
                        if ((lib.skill[event.sourceSkill || event.skill] || {}).enable);
                        else return false;
                    else if (name == 'useCardBefore' || name == 'chooseToUseEnd');
                    else return false;
                    if (
                        player.countCards('s', function (card) {
                            if (card.hasGaintag('olqifan')) return true;
                        })
                    ) {
                        if (qyhcCL.skillid.olqifan) {
                            delete qyhcCL.skillid.olqifan;
                            lib.config.compatiblemode = false;
                        }
                        player.tempSkills.olqifan_discard = ['phaseBefore', 'phaseAfter'];
                        event.trigger('olqifanDiscard');
                    }
                    return false;
                };
                if (!lib.config.compatiblemode) {
                    lib.config.compatiblemode = true;
                    qyhcCL.skillid.olqifan = true;
                }
            },
            ai: {
                effect: {
                    target(card, player, target, effect) {
                        if (get.tag(card, 'respondShan')) return 0.7;
                        if (get.tag(card, 'respondSha')) return 0.7;
                    },
                },
                order: 12,
                respondShan: true,
                respondSha: true,
                result: {
                    player(player) {
                        if (_status.event.dying) return get.attitude(player, _status.event.dying);
                        return 1;
                    },
                },
            },
            intro: {
                markcount(storage, player) {
                    if (!storage || !storage.length) return;
                    if (storage.length == 1) return get.translation(storage)[0];
                    if (storage.length == 2) return get.translation(storage[0])[0] + get.translation(storage[1])[0];
                    return 3;
                },
                content: '<center>已以此法使用过$牌</center>',
            },
            mod: {
                cardEnabled(cardx, player) {
                    if (_status.event.name == 'chooseToUse' && !_status.event.skill) return;
                    for (var card of cardx.cards || []) if (get.position(card) == 's' && card.hasGaintag('olqifan')) return false;
                },
                cardRespondable(cardx, player) {
                    for (var card of cardx.cards || []) if (get.position(card) == 's' && card.hasGaintag('olqifan')) return false;
                },
                cardSavable(cardx, player) {
                    if (_status.event.name == 'chooseToUse' && !_status.event.skill) return;
                    for (var card of cardx.cards || []) if (get.position(card) == 's' && card.hasGaintag('olqifan')) return false;
                },
            },
            subSkill: {
                discard: {
                    trigger: { player: ['olqifanDiscard', 'chooseToUseAfter', 'useCardBegin'] },
                    forced: true,
                    charlotte: true,
                    filter(event, player, name) {
                        if (name == 'chooseToUseAfter') return event.olqifan;
                        if (name == 'useCardBegin') return (event.card.cards || []).some((i) => (player.storage.olqifan_cards || []).includes(i));
                        return player.countCards('s', function (card) {
                            if (card.hasGaintag('olqifan')) return true;
                        });
                    },
                    content() {
                        'step 0';
                        if (event.triggername == 'useCardBegin') {
                            player.markAuto('olqifan', [get.type2(trigger.card, false)]);
                            trigger.getParent('chooseToUse').olqifan = true;
                            event.finish();
                        } else if (event.triggername != 'chooseToUseAfter') {
                            var cards = player
                                .getCards('s', function (card) {
                                    if (card.hasGaintag('olqifan')) return true;
                                })
                                .reverse();
                            //player.$gainLog('throwtop',cards);
                            player.lose(cards, ui.cardPile).untrigger();
                            event.finish();
                        } else {
                            event.maxNum = Math.min(3, player.getStorage('olqifan').length);
                            event.num = 0;
                        }
                        ('step 1');
                        var pos = 'jeh'[event.num],
                            hs = player.countCards(pos);
                        if (hs > 0) player.chooseToDiscard(hs, pos, true);
                        event.num++;
                        if (event.num < event.maxNum) event.redo();
                    },
                },
            },
        };
        if (config.pengyang == 'kaifa') {
            lib.config.extension_群英荟萃乀摧林_ddzback = '0';
            game.chooseCharacterDianjiang = function () {
                var next = game.createEvent('chooseCharacter');
                next.showConfig = true;
                next.setContent(function () {
                    'step 0';
                    lib.init.onfree();
                    ui.create.system('成功:' + (lib.config.extension_群英荟萃乀摧林_pengyangwin || 0) + ' 失败:' + (lib.config.extension_群英荟萃乀摧林_pengyanglose || 0), function () { }, true);
                    ('step 1');
                    var map = ['zhu', 'fan'];
                    game.me.identity = map[0];
                    game.me.next.identity = map[1];
                    game.me.showIdentity();
                    game.me.next.showIdentity();
                    ('step 2');
                    game.me.init('ol_pengyang');
                    ('step 3');
                    game.me.next.init('qyhc_test');
                    lib.skill._qyhc_pengyang_test = {
                        trigger: {
                            player: ['dieBefore', 'phaseAfter'],
                        },
                        silent: true,
                        forced: true,
                        filter(event, player) {
                            if (event.name == 'die') {
                                if (player == game.me) game.saveConfig('extension_群英荟萃乀摧林_pengyanglose', (lib.config.extension_群英荟萃乀摧林_pengyanglose || 0) + 1);
                                else game.saveConfig('extension_群英荟萃乀摧林_pengyangwin', (lib.config.extension_群英荟萃乀摧林_pengyangwin || 0) + 1);
                            } else player.die();
                        },
                    };
                    game.addGlobalSkill('_qyhc_pengyang_test');
                });
            };
        } else {
            game.saveConfig('extension_群英荟萃乀摧林_pengyangwin', undefined);
            game.saveConfig('extension_群英荟萃乀摧林_pengyanglose', undefined);
        }
        if (config.pengyang != 'noaudio') {
            lib.skill.oltuishi.audio = 'spxiaoni';
            lib.skill.qyhc_cunmu = { audio: 'ext:群英荟萃乀摧林/audio/skill:2' };
            lib.skill.nzry_cunmu.audioname2 = { ol_pengyang: 'qyhc_cunmu' };
            delete lib.skill.nzry_cunmu.audioname;
            Reflect.defineProperty(lib.skill.olqifan, 'audio', {
                get() {
                    return ['spdaming1', 'spdaming2'].randomGet();
                },
            });
        }
    }
    lib.skill.clanyirong = {
        audio: 2,
        usable: 2,
        enable: 'phaseUse',
        prompt() {
            var player = _status.event.player;
            if (player.countCards('h') < player.getHandcardLimit()) return '你可以摸' + get.cnNumber(player.getHandcardLimit() - player.countCards('h')) + '张牌,手牌上限-1<br>〖移荣>出牌阶段限两次,若你的手牌数<span class=promptext>〈</span>小<span class=promptext>／大〉</span>于手牌上限,你可以将手牌<span class=promptext>〈</span>摸<span class=promptext>／弃〉</span>至手牌上限并令你手牌上限<span class=promptext>〈</span>-<span class=promptext>／+〉</span>1.';
            return '请选择要弃置的' + get.cnNumber(player.countCards('h') - player.getHandcardLimit()) + '张手牌<br>〖移荣>出牌阶段限两次,若你的手牌数<span class=promptext>〈小／</span>大<span class=promptext>〉</span>于手牌上限,你可以将手牌<span class=promptext>〈摸／</span>弃<span class=promptext>〉</span>至手牌上限并令你手牌上限<span class=promptext>〈-／</span>+<span class=promptext>〉</span>1.';
        },
        filterCard: true,
        selectCard() {
            var player = _status.event.player;
            if (player.countCards('h') < player.getHandcardLimit()) return 0;
            return player.countCards('h') - player.getHandcardLimit();
        },
        position: 'h',
        discard: false,
        lose: false,
        delay: false,
        filter(event, player) {
            player.trymarkAutoSkill('clanyirong_QYHCqyhc_cl');
            return player.getHandcardLimit() != player.countCards('h');
        },
        creatTrigger: [
            null,
            function (s, player) {
                if (player.countSkill('clanyirong') < 2) {
                    var str = '<center><span class=greentext>此阶段还可发动' + get.cnNumber(2 - player.countSkill('clanyirong')) + '次〖移荣〗</span>';
                } else var str = '<center><span class=redtext>此阶段无法再发动〖移荣〗</span>';
                str += '</center><center>';
                if (player.countCards('h') < player.getHandcardLimit()) str += '<span class=greentext>发动〖移荣〗摸' + get.cnNumber(player.getHandcardLimit() - player.countCards('h')) + '张牌</span>';
                else if (player.countCards('h') > player.getHandcardLimit()) str += '<span class=firetext>发动〖移荣〗弃' + get.cnNumber(player.countCards('h') - player.getHandcardLimit()) + '张牌</span>';
                else str += '<span class=yellowtext>不满足〖移荣〗条件</span>';
                return str + '</center>';
            },
            function (s, player) {
                var num = 2 - player.countSkill('clanyirong');
                var hs = player.countCards('h');
                var li = player.getHandcardLimit();
                if (qyhcCL.beOwned10) {
                    var str = '<span class=yellowtext>移荣</span>';
                    if (hs < li) str = '<span class=greentext>摸' + parseInt(player.getHandcardLimit() - player.countCards('h')) + '</span>';
                    else if (hs > li) str = '<span class=firetext>弃' + parseInt(player.countCards('h') - player.getHandcardLimit()) + '</span>';
                    if (num > 0) player.chanMarkinner('clanyirong_QYHCqyhc_cl', str + '|<span class=greentext>' + num + '</span>');
                    else player.chanMarkinner('clanyirong_QYHCqyhc_cl', '<span class=redtext>移荣0</span>');
                    return 0;
                }
                var color = hs == li ? 'yellow' : 'green';
                if (num > 0) player.chanMarkinner('clanyirong_QYHCqyhc_cl', '<span class=' + color + 'text>移</span>');
                else player.chanMarkinner('clanyirong_QYHCqyhc_cl', '<span class=redtext>移</span>');
                return num;
            },
        ],
        check: (card) => 10 - get.value(card),
        content() {
            'step 0';
            player.trymarkAutoSkill('clanyirong_QYHCqyhc_cl');
            if (cards && cards.length);
            else {
                player.draw(player.getHandcardLimit() - player.countCards('h'));
                player.qyhc_moveMaxhand('clanyirong', -1);
                event.finish();
            }
            ('step 1');
            player.discard(cards, player);
            player.qyhc_moveMaxhand('clanyirong');
        },
        ai: {
            threaten: 4,
            order(item, player) {
                var num = player.getHandcardLimit(),
                    numx = (_status.event.parent.phaseIndex || 0) + 1;
                if (num == 5 && numx == 4 && player.getStat('skill').clanyirong) return 0;
                if (player.countCards('h') == num + 1 && num != 2 && (num <= 4 || (num > 4 && numx > 4))) return 10;
                return 0.5;
            },
            result: {
                player(player) {
                    var num = player.getHandcardLimit(),
                        numx = (_status.event.parent.phaseIndex || 0) + 1;
                    if (!numx) return num - player.countCards('h');
                    if (player.countCards('h') - num == 1 && num == 4 && numx == 4) return 1;
                    if (player.countCards('h') - num == 1 && num == 5 && numx == 5) return 1;
                    if (numx + 1 != num) return 1;
                    return -1;
                },
            },
            nokeep: true,
            skillTagFilter(player, tag) {
                if (tag != 'nokeep') return true;
                return player.countCards('h') < player.getHandcardLimit();
            },
        },
    };
    lib.skill.clanguixiang = {
        audio: 2,
        trigger: { player: 'phaseChange' },
        forced: true,
        ai: {
            threaten: 1.2,
        },
        intro: {
            name(storage, player) {
                return '当前是第<span class=yellowtext>' + (_status.event.parent.phaseIndex || 0) + '</span>个阶段';
            },
            markcount(storage, player) {
                return (_status.event.parent.phaseIndex || 0) + '';
            },
            updatetrigger: { player: lib.phaseName.map((i) => i + 'Before') },
        },
        filter(event, player) {
            var num1 = player.getHandcardLimit() - 1,
                num2 = event.num;
            return num1 == num2;
        },
        content() {
            trigger.phaseList[trigger.num] = 'phaseUse|clanguixiang';
        },
    };
    if (lib.skill.clanmuyin) {
        lib.skill.clanmuyin.trigger = { player: 'phaseBegin' };
        lib.skill.clanmuyin.content = function () {
            'step 0';
            var currents = [];
            for (var k of game.filterPlayer()) if (k.hasClan('陈留吴氏') && game.hasPlayer((current) => current.getHandcardLimit() > k.getHandcardLimit())) currents.push(k);
            player
                .chooseTarget('〖穆荫〗你可以令其中一名角色手牌上限+1', (card, player, target) => _status.event.currents.includes(target))
                .set('prompt2', '<center>满足条件的角色为手牌上限不为全场最大的陈留吴氏角色</center>')
                .set('ai', ai.getattitude)
                .set('currents', currents);
            ('step 1');
            if (result.bool) {
                result.targets[0].qyhc_moveMaxhand('clanmuyin');
            }
        };
    }
    lib.skill.zhongjie = {
        trigger: { player: 'die' },
        forced: true,
        forceDie: true,
        content() {
            'step 0';
            player
                .chooseTarget('〖忠节〗你可以选择一名其他角色<br><span class=grasstext>你令其加1点体力上限、回复1点体力并摸一张牌</span>', lib.filter.notMe)
                .set('ai', ai.getattitude)
                .set('prompt2', lib.config.extension_群英荟萃乀摧林_prom ? '' : '〖忠节>' + lib.translate.zhongjie_info);
            ('step 1');
            if (result.bool) {
                var target = result.targets[0];
                target.gainMaxHp();
                target.recover();
                target.draw();
            }
        },
    };
    if (lib.skill.olduorui) {
        lib.skill.olduorui.direct = true;
        lib.skill.olduorui.locked = false;
        lib.skill.olduorui.content = function () {
            'step 0';
            var list = [];
            var listm = [];
            var listv = [];
            if (trigger.player.name1 != undefined) listm = lib.character[trigger.player.name1][3];
            else listm = lib.character[trigger.player.name][3];
            if (trigger.player.name2 != undefined) listv = lib.character[trigger.player.name2][3];
            listm = listm.concat(listv);
            var func = function (skill) {
                var info = get.info(skill);
                if (!info || info.charlotte) return false;
                return true;
            };
            for (var i = 0; i < listm.length; i++) {
                if (func(listm[i])) list.add(listm[i]);
            }
            event.skills = list;
            player
                .chooseSkills(list, '〖夺锐〗你可以选择' + get.translation(trigger.player) + '武将牌上的一个技能<br><span class=text>你结束当前的出牌阶段,你选择的技能失效直到' + get.translation(trigger.player) + '回合结束</span>', list.length > 2 ? 'big' : null)
                .set('ai', function (button) {
                    if (_status.event.checkEd <= 0) return -1;
                    var target = _status.event.target;
                    if (target.hasSkill(button.link)) {
                        var rank = get.skillRank(button.link, 'inout');
                        if (button.link == 'cljg_shenqu') rank += 100;
                        if (button.link == 'cljg_jiguan') return 0.1;
                        var info = get.info(button.link);
                        if (!info || info.zhuSkill || info.dutySkill || info.juexingji || info.silent || info.limited || info.hiddenSkill || (info.ai && (info.ai.neg || info.ai.halfneg))) return 0.12;
                        var trans = lib.translate[button.link + '_info'];
                        if (trans) if (trans.includes('隐匿') || trans.includes('游戏开始时')) return 0.11;
                        if (rank >= 0) return rank + 0.2;
                        return rank;
                    }
                    return -1;
                })
                .set('target', trigger.player)
                .set(
                    'checkEd',
                    (function (event, player) {
                        if (get.attitude(player, event.player) >= 0) return false;
                        if (event.getParent('phaseUse').skipped) return true;
                        var nd = player.needsToDiscard(1);
                        return (
                            player.countCards('h', function (card) {
                                if (!nd && !(get.tag(card, 'damage') && !get.tag(card, 'nosource'))) return false;
                                return player.getCardUsable(card) > 0 && game.hasPlayer((current) => player.canUse(card, current) && get.effect(current, card, player, player) > 0);
                            }) == 0
                        );
                    })(trigger, player)
                );
            ('step 1');
            if (result.bool) {
                trigger.player.disableSkill('olduorui2', result.links[0]);
                trigger.player.addTempSkill('olduorui2', { player: 'phaseAfter' });
                game.log(player, '选择令', trigger.player, '的技能', '#g' + get.colorful([result.links[0]]), '失效直到其回合结束');
                event.getParent('phaseUse').skipped = true;
            }
        };
        if (!lib.skill.olduorui.mod) lib.skill.olduorui.mod = {};
        lib.skill.olduorui.mod.aiOrder = function (player, card, num) {
            if (get.tag(card, 'damage') && !get.tag(card, 'nosource')) return num / 10;
        };
    }
    if (lib.skill.olhongyuan) {
        lib.skill.olmingzhe.trigger = { player: 'loseCardAfter' };
        lib.skill.olmingzhe.filter = function (event, player) {
            if (event.loser != player) return false;
            if (player.beOn('phaseUse')) return false;
            var evt = event.getl(player);
            for (var i of evt.hs) if (get.color(i, player) == 'red') return true;
            for (var i of evt.es) if (get.color(i, player) == 'red') return true;
            return false;
        };
        lib.skill.olmingzhe.content = function () {
            if (!trigger.visible) {
                var cards = trigger.getl(player).hs.filter(function (i) {
                    return get.color(i, player) == 'red';
                });
                if (cards.length > 0) player.showCards(cards, NaN);
            }
            player.draw();
        };
        lib.skill.olhongyuan = {
            audio: 'hongyuan',
            trigger: { global: 'gainCardAfter' },
            forced: true,
            updateUsable: 'stages',
            filter(event, player) {
                player.trymarkAutoSkill('olhongyuan_QYHCqyhc_cl');
                if (!_status.currentStage || player.getCountNum('olhongyuan')) return false;
                return event.gainer == player && event.getg(player).length > 1 && player.countCards('he');
            },
            content() {
                'step 0';
                player.chooseCardTarget({
                    prompt: '〖弘援〗你可以选择一张牌和一名其他角色,你交给其此牌',
                    prompt2: '<center>你可以交给另一名角色一张牌</center>',
                    filterCard: true,
                    position: 'he',
                    filterTarget: lib.filter.notMe,
                    ai1(card) {
                        var player = _status.event.player;
                        var num = game.countPlayer(function (current) {
                            return current != player && get.attitude(player, current) > 0 && !current.hasSkillTag('nogain');
                        });
                        if (num < 1) return -get.value(card);
                        if (player.hasSkill('lanjiang')) {
                            if (['muniu', 'xinge'].includes(card.name)) return 0;
                            return get.useful(card) - get.value(card) / 3;
                        }
                        if (!player.hasSkill('olmingzhe')) return 4 - Math.max(player.getUseValue(card), get.value(card, player));
                        if (get.color(card) == 'red' && !player.beOn('phaseUse')) {
                            if (card.name == 'tao' && !player.isDamaged()) return 5;
                            if (player.beOn()) return Math.abs(get.useful(card)) + 0.1;
                            else return Math.abs((ui.selected.targets[0] || player).getUseValue(card)) + 0.1;
                        }
                        if (player.beOn('phaseUse')) return 5 - player.getUseValue(card);
                        return (ui.selected.targets[0] || player).getUseValue(card) / 30;
                    },
                    ai2(target) {
                        var player = _status.event.player,
                            att = get.attitude(player, target);
                        var card = ui.selected.cards[0];
                        if (!card) return att;
                        var val = get.value(card, target);
                        if (val < 0) return -att * Math.sqrt(-val);
                        return att * Math.sqrt(val + 2);
                    },
                });
                ('step 1');
                if (result.bool) {
                    player.stageUsableAt('olhongyuan', true);
                    player.give(result.cards, result.targets[0]);
                    if (game.hasPlayer((current) => current != player && current != result.targets[0]))
                        player.chooseCardTarget({
                            prompt: '〖弘援〗你可以选择除' + get.translation(result.targets) + '外的一名其他角色和一张牌',
                            prompt2: '<center>你将此牌交给其</center>',
                            filterCard: true,
                            position: 'he',
                            filterTarget(card, player, target) {
                                return target != player && target != _status.event.notarget;
                            },
                            notarget: result.targets[0],
                            ai1(card) {
                                var player = _status.event.player;
                                var num = game.countPlayer(function (current) {
                                    return current != player && current != _status.event.notarget && get.attitude(player, current) > 0 && !current.hasSkillTag('nogain');
                                });
                                if (num < 1) return -get.value(card);
                                if (player.hasSkill('lanjiang')) return get.useful(card) - get.value(card) / 3;
                                if (!player.hasSkill('olmingzhe')) return 4 - Math.max(player.getUseValue(card), get.value(card, player));
                                if (get.color(card) == 'red' && _status.currentStage.name != 'phaseUse') return 7 - get.value(card);
                                return 3 + (_status.currentStage.name == 'phaseUse' ? 2 : 0) - Math.max(player.getUseValue(card), get.value(card, player));
                            },
                            ai2(target) {
                                var player = _status.event.player,
                                    att = get.attitude(player, target);
                                var card = ui.selected.cards[0];
                                if (!card) return att;
                                var val = get.value(card, target);
                                if (val < 0) return -att * Math.sqrt(-val);
                                return att * Math.sqrt(val + 2);
                            },
                        });
                } else event.finish();
                ('step 2');
                if (result.bool) {
                    player.line(result.targets);
                    player.give(result.cards, result.targets[0]);
                }
            },
            ai: { threaten: 0.8 },
        };
    }
    if (lib.skill.yifa) {
        lib.skill.yifa.filter = function (event, player) {
            return player != event.player && event.player.isIn() && (event.card.name == 'sha' || (get.color(event.card) == 'black' && get.type(event.card) == 'trick'));
        };
        lib.skill.yifa.content = function () {
            'step 0';
            trigger.player.qyhc_moveMaxhand('yifa', -1, [{ player: 'phaseAfter' }, '直到其回合结束']);
            ('step 1');
        };
    }
    if (lib.skill.dchaochong)
        lib.skill.dchaochong.change = function (player, num) {
            player.qyhc_moveMaxhand('dchaochong', num);
        };
    lib.skill.dcjinjin = {
        audio: 2,
        trigger: {
            source: 'damageSource',
            player: 'damageEnd',
        },
        usable: 1,
        creatTrigger: true,
        logTarget: 'source',
        check(event, player) {
            var num = player.qyhc_firstGain(0, 'storage', 'qyhc_Handslist', 'dchaochong');
            if (num == 0) return true;
            var evt = event.getParent('useCard');
            if (evt && evt.player == player && event.source == player) return false;
            if (player.isPhaseUsing() && num == -1) return true;
            return Math.abs(num) >= 2;
        },
        prompt2(event, player) {
            var num = Math.abs(player.qyhc_firstGain(0, 'storage', 'qyhc_Handslist', 'dchaochong'));
            var str = '<center>';
            if (num) str += '你重置因〖佞宠〗调整的手牌上限(手牌上限' + get.colorful(-player.qyhc_firstGain(0, 'storage', 'qyhc_Handslist', 'dchaochong'), '+-') + '),并令:<br>';
            else num = 1;
            if (event.source && event.source.isIn()) {
                if (event.source == player) {
                    if (num > 1) str += '你可以弃置至多' + get.cnNumber(num) + '张牌,摸' + num + '-X张牌(X为你弃置的牌数)';
                    else str += '你摸或弃一张牌';
                    return str + '</center>';
                }
                var name = get.translation(event.source);
                if (num > 1) str += name + '可以弃置至多' + get.cnNumber(num) + '张牌,你摸' + num + '-X张牌(X为其弃置的牌数)';
                else str += '除非' + name + '弃置一张牌,否则你摸一张牌';
            } else str += '你摸' + get.cnNumber(num) + '张牌';
            return str + '</center>';
        },
        content() {
            'step 0';
            var del = Math.abs(player.qyhc_firstGain(0, 'storage', 'qyhc_Handslist', 'dchaochong')) || 1;
            event.delta = del;
            player.qyhc_moveMaxhand('dchaochong', -player.qyhc_firstGain(0, 'storage', 'qyhc_Handslist', 'dchaochong'));
            if (trigger.source && trigger.source.isIn()) {
                var str = '<center>',
                    str2 = get.translation(player) + '对你发动了〖矜谨〗';
                if (trigger.source == player) {
                    if (del > 1) str += '你可以弃置至多' + get.cnNumber(del) + '张牌,摸' + del + '-X张牌(X为你弃置的牌数)<br>或点取消摸' + get.cnNumber(del) + '张牌';
                    else str += '请弃置一张牌,或点取消摸一张牌';
                    str2 = '你对自己发动了〖矜谨〗';
                } else {
                    if (del > 1) str += get.translation(player) + '将要摸' + get.cnNumber(del) + '张牌,你可以弃置至多' + get.cnNumber(del) + '张牌令其少摸同数量的牌</center>';
                    else str += '请弃置一张牌,或点取消令' + get.translation(player) + '摸一张牌</center>';
                }
                trigger.source
                    .chooseToDiscard(str2, str + '</center>', [1, del], 'he')
                    .set('ai', (card) => {
                        if (_status.event.goon) return 5.5 - get.value(card);
                        return 0;
                    })
                    .set('goon', get.attitude(trigger.source, player) < 0);
            }
            ('step 1');
            var num = event.delta;
            if (result.bool) num -= result.cards.length;
            if (num > 0) player.draw(num);
        },
        ai: {
            combo: 'dchaochong',
            maixie: true,
            maixie_hp: true,
            threaten: 0.85,
            effect: {
                target(card, player, target) {
                    if (get.tag(card, 'damage')) {
                        if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                        if (!target.hasFriend()) return;
                        var num = Math.abs(target.qyhc_firstGain(0, 'storage', 'qyhc_Handslist', 'dchaochong'));
                        if (num <= 0) return;
                        return [1, Math.min(1, num / 3)];
                    }
                },
            },
        },
    };
    if (lib.skill.juezhi)
        lib.skill.juezhi.selectCard = function () {
            var player = _status.event.player;
            player.unprompt();
            if (ui.selected.cards.length < 2) return [2, Infinity];
            var num = 0;
            for (var i of ui.selected.cards) num += i.number;
            num = num % 13;
            if (num == 0) num = 13;
            player.prompt('X=' + num);
            return [2, Infinity];
        };
    lib.card.jiu.content = function () {
        if (typeof event.baseDamage != 'number') event.baseDamage = 1;
        if (target.isDying() || event.getParent(2).type == 'dying') {
            target.recover(event.baseDamage);
            event.NotAddCount(0, 0);
        } else {
            game.addVideo('jiuNode', target, true);
            if (cards && cards.length) card = cards[0];
            if (!target.storage.jiu) target.storage.jiu = 0;
            target.storage.jiu += event.baseDamage;
            if (target.storage.jiu > 1 && lib.skill.qyhc_jiu_logger) target.addSkill('qyhc_jiu_logger');
            game.broadcastAll(
                function (target, card, gain2) {
                    target.addSkill('jiu');
                    if (!target.node.jiu && lib.config.jiu_effect) {
                        target.node.jiu = ui.create.div('.playerjiu', target.node.avatar);
                        target.node.jiu2 = ui.create.div('.playerjiu', target.node.avatar2);
                    }
                },
                target,
                card,
                target == targets[0] && cards.length == 1
            );
            if (target == targets[0] && cards.length == 1) if (card.clone && (card.clone.parentNode == target.parentNode || card.clone.parentNode == ui.arena)) game.addVideo('gain2', target, get.cardsInfo([card]));
        }
    };
    lib.skill.jiu.onremove = function (player) {
        if (player.node.jiu) {
            player.node.jiu.delete();
            player.node.jiu2.delete();
            delete player.node.jiu;
            delete player.node.jiu2;
        }
        delete player.storage.jiu;
        player.removeSkill('qyhc_jiu_logger');
    };
    if (lib.skill.dcpitian) {
        lib.skill.dcpitian.content = function () {
            player.qyhc_moveMaxhand('dcpitian');
        };
        lib.skill.dcpitian.subSkill.draw.prompt2 = function (event, player) {
            var num = player.qyhc_firstGain(0, 'storage', 'qyhc_Handslist', 'dcpitian');
            return '<center>摸' + get.cnNumber(Math.min(5, player.getHandcardLimit() - player.countCards('h'))) + '张牌' + (num ? ',重置因〖辟田〗增加的手牌上限(手牌上限-' + num + ')' : '') + '</center>';
        };
        lib.skill.dcpitian.subSkill.draw.content = function () {
            'step 0';
            var num = Math.min(5, player.getHandcardLimit() - player.countCards('h'));
            if (num > 0) player.draw(num);
            ('step 1');
            player.qyhc_moveMaxhand('dcpitian', -player.qyhc_firstGain(0, 'storage', 'qyhc_Handslist', 'dcpitian'));
        };
    }
    lib.skill.smyyingshi = {
        audio: 2,
        mark: true,
        intro: {
            name(storage, player) {
                if (!player.isUnderControl(true) || !player.beOn('phaseUse') || !player.hasSkill('smyyingshi')) {
                    return '不可使用的技能!';
                }
                if (!ui.moveDialogs || !ui.moveDialogs.smyyingshi) {
                    var uic, baifenbi, baifenbi2;
                    var cards = [];
                    for (var i = 0; i < player.maxHp; i++) {
                        var card = ui.cardPile.childNodes[i];
                        if (card) cards.push(card);
                        else break;
                    }
                    if (cards.length) uic = cards;
                    else uic = [game.createCard('qyhc_nocard', '', '')];
                    switch (uic.length) {
                        case 1:
                            baifenbi = 15;
                            break;
                        case 2:
                            baifenbi = 24;
                            break;
                        case 3:
                            baifenbi = 31;
                            break;
                        case 4:
                            baifenbi = 39;
                            break;
                        case 5:
                            baifenbi = 45;
                            break;
                        case 6:
                            baifenbi = 31;
                            baifenbi2 = 58;
                            break;
                        default:
                            baifenbi = 36;
                            baifenbi2 = 58;
                            break;
                    }
                    if (baifenbi2) ui.create.moveDialog('smyyingshi', uic, baifenbi + '%', baifenbi2 + '%');
                    else ui.create.moveDialog('smyyingshi', uic, baifenbi + '%');
                    return '已打开〖鹰视〗窗口<br><span class=text>(再次点击关闭)</span>';
                } else {
                    ui.moveDialogs.smyyingshi.close();
                    return '已关闭〖鹰视〗窗口<br><span class=text>(再次点击打开)</span>';
                }
            },
            mark(dialog, storage, player) {
                qyhcCL.addNotebutton(
                    dialog,
                    '自动打开窗口',
                    function () {
                        if (player.hasSkill('qyhc_yingshi')) {
                            this.classList.remove('selected');
                            player.removeSkill('qyhc_yingshi');
                            return;
                        }
                        this.classList.add('selected');
                        player.addSkill('qyhc_yingshi');
                    },
                    '.shadowed.reduce_radius.pointerdiv.tdnode.tdnodes.qyhc_style_func3',
                    function () {
                        this.style['background-color'] = 'rgba(255,255,255,0.26)';
                        if (player.hasSkill('qyhc_yingshi')) this.classList.add('selected');
                    }
                );
            },
            markcount(storage, player) {
                if (!player.isUnderControl(true) || !player.beOn('phaseUse') || !player.hasSkill('smyyingshi')) {
                    if (ui.moveDialogs && ui.moveDialogs.smyyingshi) ui.moveDialogs && ui.moveDialogs.smyyingshi.close();
                    return;
                }
                var uic;
                var cards = [],
                    baifenbi,
                    baifenbi2;
                for (var i = 0; i < player.maxHp; i++) {
                    var card = ui.cardPile.childNodes[i];
                    if (card) cards.push(card);
                    else break;
                }
                qyhcCL.skillid.smyyingshi = cards;
                if (ui.moveDialogs && ui.moveDialogs.smyyingshi) {
                    if (cards.length) uic = cards;
                    else uic = [game.createCard('qyhc_nocard', '', '')];
                    switch (uic.length) {
                        case 1:
                            baifenbi = 15;
                            break;
                        case 2:
                            baifenbi = 24;
                            break;
                        case 3:
                            baifenbi = 31;
                            break;
                        case 4:
                            baifenbi = 39;
                            break;
                        case 5:
                            baifenbi = 45;
                            break;
                        case 6:
                            baifenbi = 31;
                            baifenbi2 = 58;
                            break;
                        default:
                            baifenbi = 36;
                            baifenbi2 = 58;
                            break;
                    }
                    ui.moveDialogs.smyyingshi.change(uic);
                    ui.moveDialogs.smyyingshi.style.width = baifenbi + '%';
                    ui.moveDialogs.smyyingshi.style.height = baifenbi2 + '%';
                }
            },
            updatetrigger: {
                player: ['phaseUseBegin', 'phaseUseAfter'],
                global: 'updateRoundNumber',
                firstDo: true,
                qyhc_markfilter(player, name) {
                    if (name == 'phaseUseAfter' || !player.isUnderControl(true) || !player.beOn('phaseUse') || !player.hasSkill('smyyingshi')) {
                        if (ui.moveDialogs && ui.moveDialogs.smyyingshi) ui.moveDialogs && ui.moveDialogs.smyyingshi.close();
                        return false;
                    }
                },
                priority: Infinity,
            },
        },
    };
    if (lib.skill.xinquanbian) {
        lib.skill.xinquanbian.content = function () {
            'step 0';
            event.cards = [];
            if (ui.cardPile.childNodes.length < player.maxHp) game.washCard();
            for (var i = 0; i < player.maxHp; i++) event.cards.push(ui.cardPile.childNodes[i]);
            ('step 1');
            var cards = event.cards;
            var suit = trigger.card.suit;
            var next = player.chooseToMove('〖权变〗获得一张不为' + get.translation(suit) + '花色的牌并将其余牌按任意顺序置于牌堆顶');
            next.set('suit', suit);
            next.set('list', [['牌堆顶', cards], ['获得']]);
            next.set('filterMove', function (from, to, moved) {
                var suit = _status.event.suit;
                if (moved[0].includes(from.link)) {
                    if (typeof to == 'number') {
                        if (to == 1) {
                            if (moved[1].length) return false;
                            return from.link.suit != suit;
                        }
                        return true;
                    }
                    if (moved[1].includes(to.link)) return from.link.suit != suit;
                    return true;
                } else {
                    if (typeof to == 'number') return true;
                    return to.link.suit != suit;
                }
            });
            next.set('filterOk', function () {
                var event = _status.event;
                var links = [];
                for (var i in event.buttonss) if (event.buttonss[i] && event.buttonss[i].childNodes) links.addArray(Array.from(event.buttonss[i].childNodes));
                for (var i of links) if (i.link.suit == suit) i.classList.add('unselectable');
                return true;
            });
            next.set('processAI', function (list) {
                var cards = list[0][1].slice(0).sort(function (a, b) {
                    return get.value(b) - get.value(a);
                }),
                    gains = [];
                for (var i of cards) {
                    if (i.suit != _status.event.suit) {
                        cards.remove(i);
                        gains.push(i);
                        break;
                    }
                }
                return [cards, gains];
            });
            ('step 2');
            if (result.bool) {
                var list = result.moved;
                if (list[1].length) player.gain(list[1], 'draw'), player.$gainLog('从牌堆顶' + get.cnNumber(list[0].length + list[1].length) + '张牌中获得', list[1], game.me.canView(player));
                while (list[0].length) ui.cardPile.insertBefore(list[0].pop(), ui.cardPile.firstChild);
                game.updateRoundNumber();
            }
        };
        lib.skill.xiongzhi.content = function () {
            'step 0';
            player.awakenSkill('xiongzhi');
            ('step 1');
            var card = get.cards()[0];
            event.card = card;
            player.showCards(card, NaN, 300).set('animate', '$showAtime');
            if (!player.hasUseTarget(card)) {
                card.fix();
                ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
                game.updateRoundNumber();
                event.finish();
            }
            ('step 2');
            var next = player.chooseUseTarget(card, true);
            if (get.info(card).updateUsable == 'phaseUse') next.addCount = false;
            if (!event.isMine()) game.delay(0.4);
            ('step 3');
            if (result.bool) event.goto(1);
            else {
                card.fix();
                ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
                game.updateRoundNumber();
            }
        };
    }
    if (lib.skill.juetao)
        lib.skill.juetao.content = function () {
            'step 0';
            player.chooseTarget('###〖决讨〗你可以选择一名其他角色###<center>对你和其重复使用牌堆顶的牌直到无法使用或其离场</center>', lib.filter.notMe).set('ai', function (target) {
                return -get.attitude(_status.event.player, target);
            });
            ('step 1');
            if (result.bool) {
                var target = result.targets[0];
                event.target = target;
                player.awakenSkill('juetao');
            } else event.finish();
            ('step 2');
            var card = get.bottomCards()[0];
            game.cardsGotoOrdering(card);
            player.showCards(card, NaN, 300).set('animate', '$showAtime');
            player
                .chooseUseTarget(card, true, false, 'nodistance')
                .set('filterTarget', function (card, player, target) {
                    var evt = _status.event;
                    if (_status.event.name == 'chooseTarget') evt = evt.parent;
                    if (target != player && target != evt.juetao_target) return false;
                    return lib.filter.targetEnabledx(card, player, target);
                })
                .set('juetao_target', target);
            ('step 3');
            if (result.bool && target.isIn()) event.goto(2);
        };
    if (lib.skill.huamu)
        lib.skill.huamu.filter = function (event, player) {
            var color = get.color(event.card);
            if (
                !player.hasHistory('lose', function (evt) {
                    return evt.hs.length > 0 && evt.parent == event;
                }) ||
                !event.cards.filterInD('oe').length
            )
                return false;
            var history = game.getGlobalHistory('useCard');
            var index = history.indexOf(event);
            if (index < 1) return false;
            var evt = history[index - 1],
                color2 = get.color(evt.card);
            return color != color2;
        };
    if (lib.skill.guili) {
        lib.skill.guili.subSkill.insert.mark = true;
        lib.skill.guili.subSkill.insert.intro = {
            markcount: () => 0,
            content(storage) {
                if (storage && storage.isAlive()) return '<center>目标:' + get.translation(storage) + '</center>';
                return '<center>未有〖归离〗目标或其已死亡</center>';
            },
        };
    }
    lib.qyhc_firstGain({}, 'skill', 'dcluochong', 'ai', 'effect');
    lib.skill.dcluochong.ai.effect.target = function (card, player, target, current) {
        if (get.type(card) == 'delay' && current < 0) {
            var current = _status.currentPhase;
            if (current && current.seatNum > target.seatNum) return 'zerotarget';
        }
    };
    if (0 && lib.skill.dctuoyu) {
        setTimeout(() => {
            game.me.damage();
            game.me.recover();
            game.me.damage();
            game.me.recover();
            game.me.damage();
            game.me.recover();
        }, 8000);
        lib.skill.dctuoyu.content = function () {
            'step 0';
            if (event.isMine()) {
                var hs = player.getCards('h'),
                    tags = ['dctuoyu_fengtian', 'dctuoyu_qingqu', 'dctuoyu_junshan'];
                event.hs = hs;
                var storage = player.getStorage('dctuoyu');
                var list = ['丰田(伤害/回复值+1)', '清渠(无次数和距离限制)', '峻山(不可被响应)'];
                for (var i = 0; i < tags.length; i++) if (!storage.includes(tags[i])) list[i] = '<span class=OPtext>' + list[i] + '</span>';
                event.dialog = ui.create.dialog('〖拓域〗请分配你的手牌<br><span class=text>(除普通手牌外的每个副区域至多五张)<br>点击卡牌可令该牌的副区域按普通手牌→丰田→清渠→峻山改变<br>' + (lib.config.touchscreen ? '长按卡牌' : '右键单击卡牌') + '可令该牌的副区域按普通手牌→峻山→清渠→丰田改变<br>〈' + list.join('　') + '〉</span>', hs, 'forcebutton');
                event.dialog.classList.add('scroll1');
                event.dialog.classList.add('scroll2');
                event.dialog.classList.add('fullwidth');
                event.dialog.classList.add('fullheight');
                ui.arena.classList.add('choose-to-move');
                for (var i of event.dialog.buttons) {
                    var str = '';
                    if (i.link.gaintag)
                        for (var gi = 0; gi < i.link.gaintag.length; gi++) {
                            var trans = get.translation(i.link.gaintag[gi]);
                            if (trans != 'invisible') str += trans + ' ';
                        }
                    str = str.slice(0, -1);
                    if (!i.node) i.node = {};
                    if (!i.node.gaintag) i.node.gaintag = {};
                    i.node.gaintag.innerHTML = str;
                    i.listentodo = function (tags) {
                        ui.selected.buttons = [];
                        this.classList.remove('selected');
                        game.check();
                        var player = get.owner(this.link),
                            i;
                        var tags = [true].concat(tags).filter((i) => i === true || player.getStorage('dctuoyu').includes(i.slice(0, -4)));
                        var maps = {};
                        var hs = player.getCards('h');
                        for (var i of hs)
                            for (var k = 1; k < tags.length; k++)
                                if (i.hasGaintag(tags[k])) {
                                    if (!maps[tags[k]]) maps[tags[k]] = 0;
                                    maps[tags[k]]++;
                                    break;
                                }
                        tags = tags.filter((i) => !maps[i] || maps[i] < 5);
                        for (i = 1; i < tags.length; i++) if (this.link.hasGaintag(tags[i])) break;
                        if (i == tags.length) i = 0;
                        if (tags[i]) {
                            for (var tag of tags) this.link.removeGaintag(tag);
                            var tag = tags[i + 1];
                            if (!tag) tag = tags[0];
                            if (tag !== true) this.link.addGaintag(tag);
                        }
                        var str = '';
                        if (this.link.gaintag)
                            for (var gi = 0; gi < this.link.gaintag.length; gi++) {
                                var trans = get.translation(this.link.gaintag[gi]);
                                if (trans != 'invisible') str += trans + ' ';
                            }
                        str = str.slice(0, -1);
                        if (!this.node) this.node = {};
                        if (!this.node.gaintag) this.node.gaintag = {};
                        this.node.gaintag.innerHTML = str;
                    };
                    i.listen(function () {
                        this.listentodo(['dctuoyu_fengtian_tag', 'dctuoyu_qingqu_tag', 'dctuoyu_junshan_tag']);
                    });
                    i.addEventListener('contextmenu', function () {
                        this.listentodo(['dctuoyu_junshan_tag', 'dctuoyu_qingqu_tag', 'dctuoyu_fengtian_tag']);
                    });
                }
                player.chooseButton(Infinity).set('ai', () => -1);
            }
            ('step 1');
            ui.arena.classList.remove('choose-to-move');
            if (event.dialog) event.dialog.close();
            if (event.isMine()) event.finish();
            ('step 2');
            var hs = player.getCards('h'),
                tags = ['dctuoyu_fengtian', 'dctuoyu_qingqu', 'dctuoyu_junshan'];
            var storage = player.getStorage('dctuoyu');
            var list = [
                ['未分配手牌(对话框较长,请下滑操作)', []],
                ['丰田(伤害/回复值+1)', []],
                ['清渠(无次数和距离限制)', []],
                ['峻山(不可被响应)', []],
            ];
            for (var card of hs) {
                var added = false;
                for (var i = 0; i < tags.length; i++) {
                    if (card.hasGaintag(tags[i] + '_tag')) {
                        added = true;
                        list[i + 1][1].push(card);
                        break;
                    }
                }
                if (!added) list[0][1].push(card);
            }
            for (var row of list) {
                for (var i = 0; i < tags.length; i++) {
                    if (!storage.includes(tags[i])) {
                        list[i + 1][0] = get.translation(tags[i]) + '(尚未激活)';
                    }
                }
            }
            var next = player.chooseToMove('〖拓域〗请分配你的手牌', true);
            next.set('list', list);
            next.set('filterMove', function (from, to, moved) {
                var storage = _status.event.player.getStorage('dctuoyu'),
                    tags = ['dctuoyu_fengtian', 'dctuoyu_qingqu', 'dctuoyu_junshan'];
                if (typeof to == 'number') {
                    if (to == 0) return true;
                    return storage.includes(tags[to - 1]) && moved[to].length < 5;
                }
                return true;
            });
            next.set('processAI', function () {
                var player = _status.event.player;
                var storage = player.getStorage('dctuoyu'),
                    tags = ['dctuoyu_fengtian', 'dctuoyu_qingqu', 'dctuoyu_junshan'];
                var moved = [[], [], [], []];
                var isEmpty = function (to) {
                    return storage.includes(tags[to - 1]) && moved[to].length < 5;
                };
                var hs = player.getCards('h');
                var hs2 = hs.slice(0);
                var usable = player.getCardUsable('sha');
                var addTo = function (card, to) {
                    if (isEmpty(to)) {
                        hs2.remove(card);
                        moved[to].push(card);
                        if (card.name == 'sha' && to != 2) usable--;
                    }
                };
                var hasRuanshizi = game.hasPlayer(function (target) {
                    return target != player && player.canUse('sha', target, null, true) && !target.mayHaveShan() && get.attitude(player, target) < 0 && get.effect(target, { name: 'sha' }, player, player) > 0;
                });
                for (var card of hs) {
                    var name = card.name;
                    if (name == 'tao' || name == 'jiu') {
                        addTo(card, 1);
                    } else if (name == 'sha') {
                        if (hasRuanshizi && isEmpty(1) && usable > 0) addTo(card, 1);
                        else if (isEmpty(3) && usable > 0) addTo(card, 3);
                        else addTo(card, 2);
                    } else if (get.type(name) == 'trick') {
                        if (isEmpty(1) && get.tag(card, 'damage') > 0 && player.hasUseTarget(card)) addTo(card, 1);
                        else addTo(card, 3);
                    }
                }
                moved[0].addArray(hs2);
                return moved;
            });
            ('step 3');
            if (result.bool) {
                game.broadcastAll(
                    function (moved, player) {
                        var tags = ['dctuoyu_fengtian', 'dctuoyu_qingqu', 'dctuoyu_junshan'];
                        var cards = [];
                        for (var i = 0; i < moved.length; i++) {
                            for (var card of moved[i]) {
                                cards.unshift(card);
                                for (var j = 0; j < tags.length; j++) {
                                    if (i == j + 1) {
                                        if (!card.hasGaintag(tags[j] + '_tag')) card.addGaintag(tags[j] + '_tag');
                                    } else {
                                        if (card.hasGaintag(tags[j] + '_tag')) card.removeGaintag(tags[j] + '_tag');
                                    }
                                }
                            }
                        }
                        if (player == game.me) {
                            game.addVideo('lose', game.me, [get.cardsInfo(cards), [], [], []]);
                            for (var i = 0; i < cards.length; i++) {
                                cards[i].goto(ui.special);
                            }
                            game.me.directgain(cards, false);
                        }
                    },
                    result.moved,
                    player
                );
            }
        };
    }
    if (lib.skill.twchaofeng) {
        //lib.skill.twchaofeng.tempchooseButton=lib.skill.twchaofeng.chooseButton;
        lib.skill.twchaofeng.filter = function (event, player) {
            if (event.filterCard)
                for (var i of player.getCards('hs')) {
                    if (i.name == 'shan') {
                        if (event.filterCard({ name: 'sha', cards: [i] }, player, event)) return true;
                        for (var j of lib.inpile_nature) if (event.filterCard({ name: 'sha', cards: [i], nature: j }, player, event)) return true;
                    }
                    if (i.name == 'sha' && event.filterCard({ name: 'shan', cards: [i] }, player, event)) return true;
                }
            return false;
        };
        /*lib.skill.twchaofeng.chooseButton={
            dialog:function(event,player){
                var list=[],str='【杀】当【闪】、【闪】当任意一种【杀】';
                if(event.filterCard({name:'sha'},player,event)) list.push(['🃏','转化','sha']);
                for(var j of lib.inpile_nature) if(event.filterCard({name:'sha',nature:j},player,event)) list.push(['🃏','转化','sha',j]);
                if(!list.length) str='【杀】当【闪】';
                if(event.filterCard({name:'shan'},player,event)) list.push(['🃏','转化','shan']);else str='【闪】当任意一种【杀】';
                str='〖朝凤〗<br><span class=text>你可以将'+str+(event.name=='chooseToUse'?'使用':'打出')+'</span>';
                if(list.length==1&&event.isMine()){
                    _status.auto=true;
                    qyhcCL.skillid.twchaofeng=true;
                    return ui.create.dialog(str,[list,'vcard']);
                };
                return ui.create.dialog(str,[list,'vcard'],'hidden');
            },
            backup:function(){
                if(qyhcCL.skillid.twchaofeng){
                    if(!ui.auto||!ui.auto.classList.contains('glow')) _status.auto=false;
                    delete qyhcCL.skillid.twchaofeng;
                }
                var next=lib.skill.twchaofeng.tempchooseButton.backup.apply(this,arguments);
                next.filterCard=function(card){
                    if(lib.skill.twchaofeng_backup.name=='sha') return card.name=='shan';
                    else return card.name=='sha';
                };
                return next;
            },
            check:function(){
                if(qyhcCL.skillid.twchaofeng) return 1;
                return lib.skill.twchaofeng.tempchooseButton.check.apply(this,arguments);
            },
            prompt:function(links){
                var view,use;
                if(links[0][2]=='sha'){
                    use='【闪】';
                    view=get.translation(links[0][3]||'')+'【'+get.translation(links[0][2])+'】';
                }else{
                    use='【杀】';
                    view='【闪】';
                }
                return '〖朝凤〗将一张'+use+'当'+view+(_status.event.name=='chooseToUse'?'使用':'打出');
            }
        }*/
    }
    if (lib.skill.dbchongjian) {
        lib.skill.dbchongjian.chooseButton.dialog = function (event, player) {
            var list = [],
                str = '一种【杀】(无距离限制且无视防具)或【酒】',
                num = 0;
            list.push(['🃏', '转化', 'sha']);
            if (event.filterCard({ name: 'sha' }, player, event)) num++;
            for (var j of lib.inpile_nature) {
                list.push(['🃏', '转化', 'sha', j]);
                if (event.filterCard({ name: 'sha', nature: j }, player, event)) num++;
            }
            if (!num) str = '【酒】';
            list.push(['🃏', '转化', 'jiu']);
            if (event.filterCard({ name: 'jiu' }, player, event)) num++;
            else str = '一种【杀】(无距离限制且无视防具)';
            str = '〖冲坚〗<br><span class=text>你可以将一张装备牌当' + str + '使用</span>';
            var dialog = ui.create.dialog(str, [list, 'vcard'], 'hidden');
            dialog.direct = true;
            return dialog;
        };
        lib.skill.dbchongjian.ai.save = true;
        lib.skill.dbchongjian.ai.skillTagFilter = function (player, tag, arg) {
            if (tag == 'unequip') {
                if (player.group != 'wu' || !arg || !arg.card || !arg.card.storage || !arg.card.storage.dbchongjian) return false;
                return true;
            }
            if (tag == 'save')
                return (
                    player.group == 'wu' &&
                    player.hasCard(function (card) {
                        return get.type(card) == 'equip';
                    }, 'hes')
                );
            return (
                player.group == 'wu' &&
                arg == 'use' &&
                player.hasCard(function (card) {
                    return get.type(card) == 'equip';
                }, 'hes')
            );
        };
    }
    if (lib.skill.weijing) {
        lib.skill.weijing = {
            audio: 2,
            round: 1,
            hiddenCard(player, name) {
                if (name != 'sha' && name != 'shan') return false;
                return !(game.roundNumber <= player.storage.weijing_roundcount);
            },
            filter(event, player) {
                if (event.filterCard) if (event.filterCard({ name: 'sha' }, player, event) || event.filterCard({ name: 'shan' }, player, event)) return true;
                return false;
            },
            enable: 'chooseToUse',
            chooseButton: {
                dialog(event, player) {
                    var list = [];
                    if (event.filterCard({ name: 'sha' }, player, event)) list.push(['🃏', '虚拟', 'sha']);
                    if (event.filterCard({ name: 'shan' }, player, event)) list.push(['🃏', '虚拟', 'shan']);
                    var dialog = ui.create.dialog('卫境', [list, 'vcard']);
                    dialog.direct = true;
                    return dialog;
                },
                check(button) {
                    var player = _status.event.player;
                    if (button.link[2] == 'sha') {
                        if (
                            !player.hasShan() &&
                            !game.hasPlayer(function (current) {
                                return player.canUse('sha', current) && current.hp == 1 && get.effect(current, { name: 'sha' }, player, player) > 0;
                            })
                        ) {
                            return 0;
                        }
                        return 2.95;
                    }
                    if (player.hasSkill('qingzhongx_give')) return 2.95;
                    return 3.15;
                },
                backup(links, player) {
                    return {
                        filterCard: true,
                        selectCard: 0,
                        viewAs: {
                            name: links[0][2],
                        },
                        audio: 'qingzhong',
                        precontent() {
                            player.storage.weijing_roundcount = game.roundNumber;
                            player.trymarkAutoSkill('weijing_roundcount');
                        },
                        popname: true,
                    };
                },
                prompt() {
                    return '〖卫境〗请选择【杀】的目标';
                },
            },
            ai: {
                respondSha: true,
                respondShan: true,
                skillTagFilter(player) {
                    return !(game.roundNumber <= player.storage.weijing_roundcount);
                },
                order(item, player) {
                    if (player && _status.event.type == 'phase') {
                        if (
                            !player.hasShan() &&
                            !game.hasPlayer(function (current) {
                                return player.canUse('sha', current) && current.hp == 1 && get.effect(current, { name: 'sha' }, player, player) > 0;
                            })
                        ) {
                            return 0;
                        }
                        return 2.95;
                    }
                    if (player.hasSkill('qingzhongx_give')) return 2.95;
                    return 3.15;
                },
                result: {
                    player: 1,
                },
            },
        };
    }
    lib.skill.cixiong_skill.audio = 'ext:群英荟萃乀摧林/audio/effect:true';
    if (lib.skill.tianjitu_skill && lib.skill.tianjitu_skill.subSkill) {
        lib.skill.tianjitu_skill.audio = 'ext:群英荟萃乀摧林/audio/effect:true';
        lib.skill.tianjitu_skill.subSkill.lose.audio = 'tianjitu_skill';
    }
    if (lib.skill.dcdanying) {
        lib.skill.dcdanying.chooseButton.dialog = function (event, player) {
            var list = [];
            if (event.filterCard({ name: 'sha' }, player, event)) list.push(['🃏', '虚拟', 'sha']);
            if (event.filterCard({ name: 'shan' }, player, event)) list.push(['🃏', '虚拟', 'shan']);
            var dialog = ui.create.dialog('胆迎', [list, 'vcard']);
            dialog.direct = true;
            return dialog;
        };
    }
    if (lib.skill.dcshixian) {
        lib.skill.dcshixian.intro = {
            markcount(storage, player) {
                var name = lib.skill.clgd_jianying.findlast(player);
                if (name) name = name.trigger.card.name;
                else {
                    player.addSkill('qyhc_yayun');
                    return;
                }
                var pinyin = get.pinyin(get.translation(name), false);
                if (!pinyin.length) return;
                var yunjiao = get.yunjiao(pinyin[pinyin.length - 1]);
                if (yunjiao) return yunjiao[yunjiao.length - 1];
            },
            name(storage, player) {
                var str = '未使用过牌';
                var name = lib.skill.clgd_jianying.findlast(player);
                if (name) name = name.trigger.card.name;
                else return str;
                var pinyin = get.pinyin(get.translation(name), false);
                if (!pinyin.length) return str;
                var yunjiao = get.yunjiao(pinyin[pinyin.length - 1]);
                if (!yunjiao) return str;
                return '诗仙韵脚:' + yunjiao;
            },
            mark(dialog, storage, player) {
                var name = lib.skill.clgd_jianying.findlast(player);
                var func = function () {
                    if (this.innerHTML.includes('关闭')) {
                        if (player) player.removeSkill('qyhc_yayun');
                        this.innerHTML = '开启押韵提示';
                        this.style['background-color'] = 'rgba(34,255,24,0.26)';
                        return;
                    }
                    if (player) player.addSkill('qyhc_yayun');
                    this.style['background-color'] = 'rgba(243,35,35,0.26)';
                    this.innerHTML = '关闭押韵提示';
                };
                if (player.hasSkill('qyhc_yayun')) qyhcCL.addNotebutton(dialog, '关闭押韵提示', func, '.shadowed.reduce_radius.pointerdiv.tdnode.tdnodes.qyhc_style_func3');
                else if (player == game.me)
                    qyhcCL.addNotebutton(dialog, '开启押韵提示', func, '.shadowed.reduce_radius.pointerdiv.tdnode.tdnodes.qyhc_style_func3', function () {
                        this.style['background-color'] = 'rgba(34,255,24,0.26)';
                    });
                if (name) name = name.trigger.card.name;
                else return '';
                var arr = [];
                for (var i of lib.inpile.slice().addArray(['nanman', 'wanjian', 'wugu', 'taoyuan'])) if (get.is.yayun(get.translation(i), get.translation(name))) arr.push(i);
                dialog.addText('使用' + get.translation(arr) + '可以触发〖诗仙〗');
            },
            updatetrigger: {
                player: 'useCard1',
            },
        };
        lib.skill.dcshixian.mark = true;
        delete lib.skill.dcshixian.init;
        lib.skill.dcshixian.prompt2 = function (event) {
            if (lib.skill.dcshixian.filterx(event)) return '<center>摸一张牌并令' + get.colorful(event) + '额外结算一次？</center>';
            return '摸一张牌.';
        };
        lib.skill.dcshixian.frequent = function (event) {
            return !lib.skill.dcshixian.filterx(event);
        };
    }
    if (lib.skill._dcshixian_mark) delete lib.skill._dcshixian_mark;
    if (lib.skill.kaikang) {
        lib.skill.kaikang.content = function () {
            'step 0';
            player.draw();
            if (trigger.target != player) {
                player.chooseCard(true, 'he', '交给' + get.translation(trigger.target) + '一张牌').set('ai', function (card) {
                    if (get.position(card) == 'e') return -1;
                    if (card.name == 'shan') return 1;
                    if (get.type(card) == 'equip') return 0.5;
                    return 0;
                });
            } else event.finish();
            ('step 1');
            player.showCards(result.cards, NaN);
            player.give(result.cards, trigger.target, 'give');
            event.card = result.cards[0];
            ('step 2');
            if (trigger.target.getCards('h').includes(card) && get.type(card) == 'equip') trigger.target.chooseUseTarget(card);
        };
    }
    if (lib.skill.clanmingjie) {
        lib.skill.clanmingjie.skillAnimation = false;
        lib.skill.clanjiexuan.skillAnimation = false;
        lib.skill.clanjiexuan.intro.content = function (storage, player) {
            var text = '<center>你可以将一张' + ((storage || 0) % 2 ? '黑色牌当【过河拆桥】' : '红色牌当【顺手牵羊】') + '使用</center>';
            if (player.awakenedSkills.includes('clanjiexuan')) return '<span class=Optext>' + text + '(已发动)</span>';
            return text;
        };
        lib.skill.clanjiexuan.viewAsFilter = function (player) {
            return player.getCards('hes').filter((i) => lib.skill.clanjiexuan.filterCard(i, player)).length > 0;
        };
        lib.skill.clanmingjie.filter = function (event, player) {
            return game.hasPlayer((current) => lib.skill.clanmingjie.filterTarget(null, player, current));
        };
    }
    if (lib.skill.olxieju)
        lib.skill.olxieju.content = function () {
            var card = {
                name: 'sha',
            };
            if (target.hasUseTarget(card, true)) target.chooseUseTarget(card, true).set('addCount', false);
        };
    lib.skill.nzry_juzhan = {
        audio: config.mazhao ? 'ext:群英荟萃乀摧林/audio/skill:2' : 'nzry_juzhan',
        mark: true,
        zhuanhuanji: true,
        marktext: '☯',
        intro: {
            content: 'base',
        },
        trigger: {
            target: 'useCardToTargeted',
            player: 'useCardToPlayered',
        },
        forced: true,
        filter(event, player, name) {
            if (name == 'useCardToTargeted') return event.card.name == 'sha' && !player.storage.nzry_juzhan;
            return event.card.name == 'sha' && player.storage.nzry_juzhan && event.target.countGainableCards(player, 'he') > 0;
        },
        content() {
            'step 0';
            if (player.storage.nzry_juzhan) player.gainPlayerCard('###你可以发动〖拒战〗获得' + get.translation(trigger.target) + '一张牌###<center>你本回合不能再对其使用牌</center>', trigger.target, 'he').set('delay', false);
            else player.chooseBool('###是否发动〖拒战〗与' + get.translation(trigger.player) + '各摸一张牌？###<center>其本回合不能再对你使用牌</center>');
            ('step 1');
            if (result.bool) {
                player.changeZhuanhuanji('nzry_juzhan');
                if (player.storage.nzry_juzhan) {
                    game.asyncDraw([player, trigger.player].sortBySeat(_status.currentPhase));
                    trigger.player.addTempSkill('nzry_juzhanx');
                    trigger.player.markAuto('nzry_juzhanx', [player]);
                } else {
                    player.addTempSkill('nzry_juzhanx');
                    player.markAuto('nzry_juzhanx', [trigger.target]);
                }
            }
        },
    };
    lib.skill.nzry_juzhanx = {
        mod: {
            playerEnabled(card, player, target) {
                if (player.storage.nzry_juzhanx && player.storage.nzry_juzhanx.includes(target)) return false;
            },
        },
        marktext: '拒战',
        intro: {
            name: '拒战',
            markcount: () => 0,
            content(storage) {
                if (!storage) {
                    return '';
                }
                return '<center>本回合不能对' + get.translation(storage) + '使用牌</center>';
            },
        },
        charlotte: true,
        onremove: true,
    };
    lib.skill.baiban.intro.name = '白板';
    lib.skill.baiban.intro.content = function (storage, player) {
        var list = player.getSkills(null, false, false).filter(function (i) {
            return lib.skill.baiban.skillBlocker(i, player);
        }),
            str = qyhcCL.ObjEqual(player.tempSkills.baiban, ['phaseAfter', 'phaseBefore']) ? '直到有回合开始或结束' : '';
        if (list.length) return '<center>所有技能(' + get.colorful(list) + ')失效' + str + '</center>';
        return '<center>所有技能(暂无)失效' + str + '</center>';
    };
    lib.skill.baiban.intro.markcount = function (storage, player) {
        return player
            .getSkills(null, false, false)
            .filter(function (i) {
                return lib.skill.baiban.skillBlocker(i, player);
            })
            .length.toString();
    };
    lib.skill.fengyin.intro.name = '封印';
    lib.skill.fengyin.intro.content = function (storage, player) {
        var list = player.getSkills(null, false, false).filter(function (i) {
            return lib.skill.fengyin.skillBlocker(i, player);
        }),
            str = qyhcCL.ObjEqual(player.tempSkills.fengyin, ['phaseAfter', 'phaseBefore']) ? '直到有回合开始或结束' : '';
        if (list.length) return '<center>所有非锁定技(' + get.colorful(list) + ')失效' + str + '</center>';
        return '<center>所有非锁定技(暂无)失效' + str + '</center>';
    };
    lib.skill.fengyin.intro.markcount = function (storage, player) {
        return player
            .getSkills(null, false, false)
            .filter(function (i) {
                return lib.skill.fengyin.skillBlocker(i, player);
            })
            .length.toString();
    };
    if (lib.skill.olliangyin) {
        lib.skill.olliangyin.creatTrigger = true;
        lib.skill.olliangyin.content = function () {
            'step 0';
            player.chooseTarget('〖良姻〗你可以与一名其他角色各摸一张牌', '<center>你可以令你与其之中的一名手牌数为' + player.getExpansions('olkongsheng').length + '的角色回复1点体力</center>', lib.filter.notMe).set('ai', function (target) {
                var player = _status.event.player,
                    num = player.getExpansions('olkongsheng').length - 1;
                var att = get.attitude(player, target);
                if (att <= 0) return 0;
                if (target.countCards('h') == num && target.isDamaged() && get.recoverEffect(target, player, player) > 0) return 3 * att;
                return att;
            });
            ('step 1');
            if (result.bool) {
                var target = result.targets[0];
                event.target = target;
                game.asyncDraw([player, target].sortBySeat());
            } else event.finish();
            ('step 2');
            var num = player.getExpansions('olkongsheng').length;
            var check = function (player) {
                if (!player.isIn() || player.isHealthy()) return false;
                return player.countCards('h') == num;
            };
            if (check(player) || check(target)) {
                if (check(player) && check(target)) {
                    event.dobest = 1;
                    player.chooseTarget('〖良姻〗你可以令你或' + get.translation(target) + '回复1点体力').set('ai', ai.recoverEffect);
                } else if (check(player)) {
                    event.dobest = 2;
                    player.chooseBool('〖良姻〗是否回复1点体力？').set('choice', get.recoverEffect(player, player, player) >= 0);
                } else if (check(target)) {
                    event.dobest = 3;
                    player.chooseBool('〖良姻〗是否令' + get.translation(target) + '回复1点体力？').set('choice', get.recoverEffect(target, player, player) >= 0);
                }
            } else event.finish();
            ('step 3');
            if (result.bool && event.dobest) {
                var logger = [result.targets, [player], [target]][event.dobest - 1][0];
                player.logSkill_qyhccl('olliangyin', logger);
                logger.recover();
            }
        };
        lib.skill.olliangyin.subSkill.gain.content = function () {
            'step 0';
            if (
                !player.countCards('he') ||
                !game.hasPlayer(function (current) {
                    return current != player && current.countCards('he') > 0;
                })
            )
                event.finish();
            else
                player.chooseCardTarget({
                    prompt: '〖良姻〗你可以与一名其他角色各弃置一张牌',
                    prompt2: '<center>你可以令你与其之中的一名手牌数为' + player.getExpansions('olkongsheng').length + '的角色回复1点体力</center>',
                    position: 'he',
                    filterCard: lib.filter.cardDiscardable,
                    filterTarget(card, player, target) {
                        return target != player && target.countCards('he') > 0;
                    },
                    ai1(card) {
                        var player = _status.event.player;
                        var num = player.getExpansions('olkongsheng').length,
                            hs = player.countCards('h');
                        if (get.position(card) != 'e') hs--;
                        if (hs == num && player.isDamaged() && get.recoverEffect(player, player, player) > 0) return 9 - get.value(card);
                        return 5 - get.value(card);
                    },
                    ai2(target) {
                        var player = _status.event.player;
                        var has = target.hasCard(function (card) {
                            return get.value(card, target) < 0;
                        }, 'e'),
                            att = get.attitude(player, target);
                        if (att > 0 && !target.isDamaged() && !player.isDamaged() && !has) return 0;
                        if (!has) att = -att;
                        return att * has ? 2 : 1;
                    },
                });
            ('step 1');
            if (result.bool) {
                var target = result.targets[0];
                event.target = target;
                player.discard(result.cards);
                target.chooseToDiscard(get.translation(player) + '对你发动〖良姻〗,请弃置一张牌', 'he', true);
            } else event.finish();
            ('step 2');
            var num = player.getExpansions('olkongsheng').length;
            var check = function (player) {
                if (!player.isIn() || player.isHealthy()) return false;
                return player.countCards('h') == num;
            };
            if (check(player) || check(target)) {
                if (check(player) && check(target)) {
                    event.dobest = 1;
                    player.chooseTarget('〖良姻〗你可以令你或' + get.translation(target) + '回复1点体力').set('ai', ai.recoverEffect);
                } else if (check(player)) {
                    event.dobest = 2;
                    player.chooseBool('〖良姻〗是否回复1点体力？').set('choice', get.recoverEffect(player, player, player) >= 0);
                } else if (check(target)) {
                    event.dobest = 3;
                    player.chooseBool('〖良姻〗是否令' + get.translation(target) + '回复1点体力？').set('choice', get.recoverEffect(target, player, player) >= 0);
                }
            } else event.finish();
            ('step 3');
            if (result.bool && event.dobest) {
                var logger = [result.targets, [player], [target]][event.dobest - 1][0];
                player.logSkill_qyhccl('olliangyin', logger);
                logger.recover();
            }
        };
    }
    if (lib.skill.dcfumou)
        lib.skill.dcfumou.content = function () {
            'step 0';
            event.num = Math.min(trigger.num, 9);
            ('step 1');
            var nub = player.getDamagedHp();
            player.chooseTarget('〖腹谋〗你可以选择' + (nub == 1 ? '一名' : '一至' + get.cnNumber(nub) + '名') + '角色<br><span class=text>' + (nub == 1 ? '其' : '这些角色从你开始逆时针依次') + '选择一项:1.移动场上一张牌;2.弃置所有手牌并摸两张牌;3.弃置装备区内所有牌并回复1点体力</span>', [1, nub]).set('ai', (target) => {
                var att = get.attitude(_status.event.player, target);
                if (target.countCards('h') >= 3 || (target.countCards('e') && !target.isDamaged())) {
                    if (!target.canMoveCard()) return -att;
                    else if (!target.canMoveCard(true)) return -att / 5;
                }
                return att;
            });
            ('step 2');
            if (result.bool) {
                var targets = result.targets;
                targets.sortBySeat(player);
                event.targets = targets;
                event.num--;
            } else event.finish();
            ('step 3');
            var target = targets.shift();
            event.target = target;
            var choices = [];
            var choiceList = ['移动场上的一张牌', '弃置所有手牌并摸两张牌', '弃置装备区里的所有牌并回复1点体力'];
            if (target.canMoveCard()) choices.push('选项一');
            else choiceList[0] = '<span style="opacity:0.5">' + choiceList[0] + '</span>';
            if (
                target.countCards('h') &&
                !target.hasCard((card) => {
                    return !lib.filter.cardDiscardable(card, target, 'dcfumou');
                }, 'h')
            )
                choices.push('选项二');
            else choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + '</span>';
            if (
                target.countCards('e') &&
                !target.hasCard((card) => {
                    return !lib.filter.cardDiscardable(card, target, 'dcfumou');
                }, 'h')
            )
                choices.push('选项三');
            else choiceList[2] = '<span style="opacity:0.5">' + choiceList[2] + '</span>';
            if (choices.length > 1) {
                target
                    .chooseControl(choices)
                    .set('prompt', '腹谋:请选择一项')
                    .set('choiceList', choiceList)
                    .set('ai', () => {
                        return _status.event.choice;
                    })
                    .set(
                        'choice',
                        (function () {
                            if (choices.length == 1) return choices[0];
                            var func = (choice, target) => {
                                switch (choice) {
                                    case '选项一':
                                        if (target.canMoveCard(true)) return 5;
                                        return 3;
                                    case '选项二':
                                        if (target.countCards('h') < 2 && get.value(target.getCards('h')[0]) < 6) return 4.5;
                                        return 4.5 - target.countCards('h');
                                    case '选项三':
                                        var e2 = target.getEquip(2);
                                        if (target.hp + target.countCards('hs', ['tao', 'jiu']) < 2 && !e2) return 5.5;
                                        if (get.recoverEffect(target, target, target) <= 0) return 3;
                                        if (!e2) return 4.4;
                                        return 5 - 1.5 * target.countCards('e');
                                }
                            };
                            var choicesx = choices.map((i) => [i, func(i, target)]).sort((a, b) => b[1] - a[1]);
                            return choicesx[0][0];
                        })()
                    );
            } else if (choices.length == 1) event._result = { control: choices[0] };
            else event.goto(5);
            ('step 4');
            game.log(target, '选择了', '#y' + result.control);
            if (result.control == '选项一') target.moveCard(true);
            else if (result.control == '选项二') {
                target.chooseToDiscard(true, 'h', target.countCards('h'));
                target.draw(2);
            } else {
                target.chooseToDiscard(true, 'e', target.countCards('e'));
                target.recover();
            }
            ('step 5');
            if (event.targets.length) event.goto(3);
        };
    if (qyhcCL.beOwned10 && lib.skill.xinfu_falu) {
        lib.skill.xinfu_falu.subSkill = {
            spade: {
                marktext: '紫薇',
                intro: {
                    name: '紫薇',
                    markcount: () => '♠️️︎️',
                    content: '<center>你拥有1枚「紫薇」<br>一名角色的判定牌生效前,你可以移去1枚「紫薇」并将结果改为任意花色且点数为5</center>',
                },
            },
            heart: {
                marktext: '玉清',
                intro: {
                    name: '玉清',
                    markcount: () => '♥️️︎️',
                    content: '<center>你拥有1枚「玉清」<br>当你造成伤害时,你可以移去1枚「玉清」并令此伤害+1</center>',
                },
            },
            club: {
                marktext: '后土',
                intro: {
                    name: '后土',
                    markcount: () => '♣️️︎️',
                    content: '<center>你拥有1枚「后土」<br>你的回合外,你可以移去1枚「后土」并将一张手牌当【桃】使用+1</center>',
                },
            },
            diamond: {
                marktext: '勾陈',
                intro: {
                    name: '勾陈',
                    markcount: () => '♦️️︎',
                    content: '<center>你拥有1枚「勾陈」<br>当你受到伤害后,你可以移去1枚「勾陈」并检索最多张类别各不相同的牌获得之+1</center>',
                },
            },
        };
        lib.skill.xinfu_zhenyi.prompt2 = '<center>移去1枚「勾陈」并检索最多张类别各不相同的牌获得之</center>';
        lib.skill.zhenyi_club.prompt2 = '<center>移去1枚「后土」并将一张手牌当【桃】使用</center>';
        lib.skill.zhenyi_heart.prompt2 = function (event) {
            return '<center>移去1枚「玉清」并令你即将对' + get.translation(event.player) + '造成的伤害+1</center>';
        };
        lib.skill.zhenyi_spade.content = function () {
            'step 0';
            var str = get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',是否发动〖真仪〗,弃置「紫薇♠️️」标记并修改判定结果为你指定花色且点数为5？';
            player
                .chooseControl('spade', 'heart', 'diamond', 'club', 'cancel2')
                .set('prompt', '<center>' + str + '</center>')
                .set('ai', function () {
                    var judging = _status.event.judging;
                    var trigger = _status.event.getTrigger();
                    var res1 = trigger.judge(judging);
                    var list = lib.suit.slice(0);
                    var attitude = get.attitude(player, trigger.player);
                    if (attitude == 0) return 0;
                    var getj = function (suit) {
                        return trigger.judge({
                            name: judging.name,
                            nature: get.nature(judging),
                            suit: suit,
                            number: 5,
                        });
                    };
                    list.sort(function (a, b) {
                        return (getj(b) - getj(a)) * get.sgn(attitude);
                    });
                    if ((getj(list[0]) - res1) * attitude > 0) return list[0];
                    return 'cancel2';
                })
                .set('judging', trigger.player.judging[0]);
            ('step 1');
            if (result.control != 'cancel2') {
                player.addExpose(0.25);
                player.removeMark('xinfu_falu_spade');
                game.log(player, '将判定结果改为了', '#y' + get.translation(result.control + 2) + 5);
                trigger.fixedResult = {
                    suit: result.control,
                    color: get.color({ suit: result.control }),
                    number: 5,
                };
                while (qyhcCL.beOwned10) {
                    var i = null,
                        ju = trigger.player.judging[0];
                    for (var v of ui.thrown.slice().reverse())
                        if (qyhcCL.ObjEqual([v.number, v.nature, v.suit], [ju.number, ju.nature, ju.suit], NaN)) {
                            i = v;
                            break;
                        }
                    if (!i) break;
                    if (i._tempName) i.remove();
                    i._tempName = ui.create.div('.temp-name', i);
                    var tempname = '';
                    var cardsuit = result.control;
                    var cardnumber = 5;
                    if (ju.suit != cardsuit) tempname += get.colorful(cardsuit, 'CoC');
                    if (ju.number != cardnumber) {
                        var t = get.colorful([cardnumber, 13, NaN], '￥');
                        if (t != 0) tempname += t;
                    }
                    i._tempName.innerHTML = tempname;
                    i._tempName.tempname = tempname;
                    game.delaye(0.5);
                    return event.finish();
                }
                player.popup(result.control);
            }
        };
    }
    if (qyhcCL.beOwned10 && lib.skill.lkbushi) {
        lib.skill.lkbushi.intro.markcount = function (storage, player) {
            return qyhcCL.Csuitchange(lib.skill.lkbushi.getBushi(player).slice(0, 3), player, 'lkbushi', '筮', false);
        };
        lib.skill.lkbushi.intro.updatetrigger = ['lkbushiEnd', 'creatMark'];
    }
    if (lib.skill.zhaoran) {
        lib.skill.zhaoran2.init = function (player, skill) {
            //司马昭-昭然
            player.storage[skill] = [];
            player.showHandcards(false);
            player.markSkill('zhaoran2');
        };
        lib.skill.zhaoran2.onremove = function (player, skill) {
            //司马昭-昭然
            player.storage[skill] = [];
            player.useSkill('zhaoran_remove');
        };
        lib.skill.zhaoran2.marktext = '昭然';
        lib.skill.zhaoran2.intro = {
            content(storage, player) {
                var list = player.storage.zhaoran2;
                if (!list || !list.length) return '<center>当前阶段未触发过〖昭然〗效果</center>';
                return '<center>当前阶段已因' + get.colorful(list, 'S') + '触发过〖昭然〗效果</center>';
            },
            markcount(storage, player) {
                return qyhcCL.Csuitchange(storage, player, 'zhaoran2', '昭', true);
            },
            updatetrigger: ['zhaoran2End', 'phaseUseEnd', 'creatMark'],
        };
        lib.skill.zhaoran.subSkill = {
            remove: {
                forced: true,
                content() {
                    player.showHandcards(false);
                },
            },
        };
        lib.skill.zhaoran.content = function () {
            player.addTempSkill('zhaoran2', 'phaseUseAfter');
            var cards = player.getCards('h');
            if (cards.length > 0) player.addShownCards(cards, 'visible_zhaoran');
        };
    }
    if (lib.skill.reduanbing) {
        lib.skill.reduanbing.audio = 'duanbing';
        lib.skill.reduanbing.audioname2 = { heqi: 'duanbing_heqi' };
    }
    if (config.jiangshanrugu) {
        lib.skill.jsrgzhengyi.audio = 'xinmingshi';
        lib.skill.jsrgguanhuo.audio = 'sptaoluan';
        lib.skill.jsrgguanhuo.subSkill.viewas.audio = 'sptaoluan';
        lib.skill.sbyingmen.subSkill.reload.audio = 'sbyingmen';
        lib.skill.jsrglinghua.frequent = 'check';
        lib.skill.jsrgyanhuo.audio = 2;
        lib.skill.sbpingjian.locked = false;
        lib.skill.jsrgxundao.content = function () {
            'step 0';
            player
                .chooseTarget('〖寻道〗你可以令至多两名角色各弃置一张牌', '<center>你选择其中一张牌代替' + get.translation(player.judging[0]) + '作为' + get.translation(player) + '(你)的' + (trigger.judgestr || '') + '判定的判定牌</center>', [1, 2], (card, player, target) => {
                    return target.countCards('he');
                })
                .set('ai', (target) => {
                    var player = _status.event.player;
                    if (!_status.event.todiscard) return 0;
                    if (_status.event.todiscard != 'all') {
                        if (target == _status.event.todiscard) return 100;
                    }
                    return get.effect(target, { name: 'guohe_copy2' }, player, player) / 2;
                })
                .set(
                    'todiscard',
                    (function () {
                        if (trigger.judgestr == '闪电' && get.damageEffect(player, null, player, 'thunder') >= 0) return 'all';
                        var friends = game.filterPlayer((i) => get.attitude(i, player) > 0);
                        for (var friend of friends) {
                            var cardsx = friend.getCards('he', (card) => trigger.judge(card) > 0);
                            cardsx.sort((a, b) => {
                                return get.value(a) - get.value(b);
                            });
                            if (cardsx.length) {
                                var card = cardsx[0];
                                if (trigger.judge(player.judging[0]) >= 0) {
                                    if (get.value(card) > 4) return false;
                                }
                                return get.owner(card);
                            }
                        }
                        return 'all';
                    })()
                );
            ('step 1');
            if (result.bool) {
                var targets = result.targets;
                targets.sortBySeat(_status.currentPhase);
                event.targets = targets;
                event.cards = [];
            } else event.finish();
            ('step 2');
            var target = targets.shift();
            target.chooseToDiscard('〖寻道〗请弃置一张牌' + (target == player ? '' : ',可能被作为新判定牌'), 'he', true).set('ai', (card) => {
                var trigger = _status.event.getTrigger();
                var player = _status.event.player;
                var judging = _status.event.judging;
                var result = trigger.judge(card) - trigger.judge(judging);
                var attitude = get.attitude(player, trigger.player);
                if (attitude == 0 || result == 0) return get.value(card);
                if (attitude > 0) return result + 0.01;
                else return 0.01 - result;
            });
            ('step 3');
            if (result.bool) event.cards.addArray(result.cards);
            if (targets.length) event.goto(2);
            ('step 4');
            var cards = event.cards.filterInD('d');
            if (cards.length) {
                player.chooseButton(['〖寻道〗选择一张作为新判定牌', cards], true).set('ai', (button) => {
                    return trigger.judge(button.link);
                }).direct = true;
            } else event.finish();
            ('step 5');
            if (result.bool) {
                var card = result.links[0];
                event.card = card;
                game.cardsGotoOrdering(card).relatedEvent = trigger;
            } else event.finish();
            ('step 6');
            if (player.judging[0].clone) {
                game.broadcastAll(
                    function (card, card2, player) {
                        if (card.clone) card.clone.classList.remove('thrownhighlight');
                        var node = player.$throwordered(card2.copy(), true);
                        node.classList.add('thrownhighlight');
                        ui.arena.classList.add('thrownhighlight');
                    },
                    player.judging[0],
                    card,
                    player
                );
                game.addVideo('deletenode', player, get.cardsInfo([player.judging[0].clone]));
            }
            game.cardsDiscard(player.judging[0]);
            player.judging[0] = card;
            trigger.orderingCards.add(card);
            game.log(player, '的判定牌改为', card);
        };
        lib.skill.jsrgduxing.audio = 'cljg_angyang';
        lib.qyhc_firstGain({}, 'skill', 'jsrgduxing', 'audioname2');
        lib.skill.jsrgduxing.audioname2.jsrg_sunce = 'cljg_angyang';
        lib.skill.jsrgzhiheng.audio = 'cljg_douhun';
        lib.qyhc_firstGain({}, 'skill', 'jsrgzhiheng', 'audioname2');
        lib.skill.jsrgzhiheng.audioname2.jsrg_sunce = 'cljg_douhun';
        lib.skill.jsrgzhasi.audio = 'cljg_lizhansc';
        lib.qyhc_firstGain({}, 'skill', 'jsrgzhasi', 'audioname2');
        lib.skill.jsrgzhasi.audioname2.jsrg_sunce = 'cljg_lizhansc';
        lib.skill.jsrgzhasi.derivation = 'rezhiheng';
        lib.skill.jsrgbashi.audio = 'cljg_douhun';
        lib.qyhc_firstGain({}, 'skill', 'jsrgbashi', 'audioname2');
        lib.skill.jsrgbashi.audioname2.jsrg_sunce = 'cljg_douhun';
        lib.qyhc_firstGain({}, 'skill', 'rezhiheng', 'audioname2');
        lib.skill.rezhiheng.audioname2.jsrg_sunce = 'cljg_lizhansc';
        var strcr = lib.skill.jsrglipan.content.toString();
        strcr = strcr.slice(strcr.indexOf('{') + 1);
        strcr = strcr.slice(0, strcr.lastIndexOf('}'));
        lib.skill.jsrglipan.content = new Function(strcr.replace("if(group=='cancel2')", "if(group=='cancel2') return event.finish();"));
        lib.skill.jsrgqiongtu.audio = 'yuanlve';
        lib.skill.jsrgxianzhu.audio = 'spolzhouxuan';
        lib.skill.jsrgbiaozhao.audio = 'biaozhao';
        lib.skill.jsrgyechou.audio = 'yechou';
        if (config.mazhao) {
            lib.translate.jsrgshichong_info = '转换技,锁定技,当你使用牌指定一名其他角色为唯一目标后:〖阴〗你获得其区域内一张牌;〖阳〗其摸一张牌.';
            lib.skill.jsrgshichong = {
                audio: 2,
                zhuanhuanji: true,
                logTarget: 'target',
                trigger: { player: 'useCardToPlayered' },
                forced: true,
                filter(event, player) {
                    if (event.target != player && event.targets.length == 1 && event.target.isIn()) return player.storage.jsrgshichong || event.target.countGainableCards(player, 'hej');
                    else return false;
                },
                mark: true,
                marktext: '☯',
                intro: {
                    content: 'base',
                },
                content() {
                    'step 0';
                    player.changeZhuanhuanji('jsrgshichong');
                    if (player.storage.jsrgshichong) {
                        player.gainPlayerCard('〖恃宠〗请获得' + get.translation(trigger.target) + '区域内一张牌', trigger.target, 'hej', true);
                    } else trigger.target.draw();
                },
                ai: {
                    effect: {
                        player(card, player, target) {
                            if (!target || player == target || !qyhcCL.isingleTrick(card)) return;
                            if (player.storage.jsrgshichong) return [1, 0, 1, get.drawEffect(target)];
                            if (target.countGainableCards(player, 'hej')) return [1, 1, 1, -1];
                        },
                    },
                },
                mod: {
                    aiOrder(player, card, num) {
                        if (!card || !card.name || num <= 0) return num;
                        var bool = ['yuanjiao', 'tongzhougongji', 'shengdong', 'yuanjun', 'kaihua'].includes(card.name);
                        if (player.storage.jsrgshichong ^ bool) return num;
                        else return num + 7;
                    },
                },
            };
            lib.translate.jsrglianzhu = '黠慧';
            lib.translate.jsrglianzhu_info = '锁定技,游戏开始时,你视为使用一张【无中生有】和【顺手牵羊】;你的手牌上限+2;若你的手牌数大于体力,你使用的牌不可被响应.';
            lib.skill.jsrglianzhu = {
                audio: 2,
                trigger: {
                    global: 'skillStart',
                    player: 'useCard',
                },
                filter(event, player, name) {
                    return (name == 'useCard' && player.countCards('h') > player.hp) || (name == 'skillStart' && player.hasUseTarget({ name: 'wuzhong' }));
                },
                forced: true,
                content() {
                    'step 0';
                    if (trigger.name == 'useCard') {
                        trigger.directHit.addArray(game.filterPlayer());
                        event.finish();
                    }
                    ('step 1');
                    if (player.hasUseTarget({ name: 'wuzhong' })) player.chooseUseTarget({ name: 'wuzhong' }, true, '〖黠慧〗请视为使用一张【无中生有】');
                    else event.finish();
                    ('step 2');
                    if (result.bool) {
                        if (player.hasUseTarget({ name: 'shunshou' })) player.chooseUseTarget({ name: 'shunshou' }, true, '〖黠慧〗请视为使用一张【顺手牵羊】');
                        else event.finish();
                    } else event.finish();
                },
                mod: {
                    maxHandcard(player, num) {
                        return num + 2;
                    },
                },
            };
        }
    }
    lib.skill.oljianhe = {
        audio: 2,
        enable: 'phaseUse',
        filter(event, player) {
            return (
                game.hasPlayer((current) => lib.skill.oljianhe.filterTarget(event, player, current)) &&
                player.hasCard(function (card) {
                    if (!player.canRecast(card)) return false;
                    if (get.type(card) == 'equip')
                        if (
                            player.hasCard(function (cardx) {
                                if (card == cardx || !player.canRecast(cardx)) return false;
                                return get.type(cardx) == 'equip';
                            }, 'he')
                        )
                            return true;
                        else;
                    else if (
                        player.hasCard(function (cardx) {
                            if (card == cardx || !player.canRecast(cardx)) return false;
                            return card.name == cardx.name;
                        }, 'he')
                    )
                        return true;
                    return false;
                }, 'he')
            );
        },
        filterTarget(card, player, target) {
            return player.getEveryOnce('oljianhe', target);
        },
        filterCard(card, player) {
            if (ui.selected.cards.length) {
                var cardx = ui.selected.cards[0];
                if (get.type(cardx) == 'equip') return get.type(card) == 'equip';
                return card.name == cardx.name;
            }
            var cards = player.getCards('he');
            for (var cardx of cards) {
                if (card != cardx) {
                    if (get.type(cardx) == 'equip' && get.type(card) == 'equip') return true;
                    if (card.name == cardx.name) return true;
                }
            }
            return false;
        },
        selectCard: [2, Infinity],
        position: 'he',
        complexCard: true,
        discard: false,
        lose: false,
        delay: false,
        check(card) {
            if (get.type(card) == 'equip') return 15 - get.value(card);
            return 7 - get.value(card);
        },
        everyOnce: '1:phaseUse',
        content() {
            'step 0';
            player.addCountNum('oljianhe', target, 'phaseUseBefore');
            player.recast(cards);
            ('step 1');
            var type = get.type2(cards[0]);
            target
                .chooseCard(get.translation(player) + '对你发动了【剑合】', '请重铸' + get.cnNumber(cards.length) + '张' + get.translation(type) + '牌,或点<取消>受到1点雷电伤害', cards.length, 'he', (card, player) => {
                    return get.type2(card) == _status.event.type && player.canRecast(card);
                })
                .set('ai', (card) => {
                    if (_status.event.goon) return (get.type(card) == 'equip' ? 15 : 7) - get.value(card);
                    return 0;
                })
                .set('type', type)
                .set('goon', get.damageEffect(target, player, target, 'thunder') < 0);
            ('step 2');
            if (result.bool) target.recast(result.cards);
            else target.damage(player, 'thunder');
        },
        ai: {
            order(item, player) {
                if (player.hasSkill('olbihun') && player.countCards('h') > player.getHandcardLimit()) return 11;
                return 4;
            },
            threaten: 2.4,
            expose: 0.1,
            result: {
                target(player, target) {
                    var cards = ui.selected.cards,
                        type = get.type2(cards[0]);
                    if (
                        target.countCards('he', (card) => {
                            return get.type(card) == type && get.value(card) <= 5;
                        }) >= cards.length
                    )
                        return 1;
                    return -1;
                },
            },
        },
    };
    lib.skill.olchuanwu = {
        audio: 2,
        trigger: { player: 'damageEnd', source: 'damageSource' },
        filter(event, player) {
            return player.getAttackRange() > 0 && player.getStockSkills(false, true).length;
        },
        forced: true,
        content() {
            var skills = player.getStockSkills(false, true);
            var num = Math.min(player.getAttackRange(), skills.length);
            skills = skills.slice(0, num);
            player.removeSkillLog(skills);
            player.addTempSkill('olchuanwu_restore');
            player.markAuto('olchuanwu_restore', skills);
            player.draw(num);
        },
        subSkill: {
            restore: {
                charlotte: true,
                intro: {
                    content(storage, player) {
                        if (storage && storage.length) return '<center>有回合结束后,获得' + get.colorful(storage) + '</center>';
                    },
                    markcount(storage, player) {
                        if (storage && storage.length) return storage.length;
                    },
                },
                onremove(player) {
                    player.logSkill_qyhccl('olchuanwu');
                    var skills = player.storage.olchuanwu_restore;
                    if (!skills || !skills.length) return;
                    player.addSkillLog(skills);
                    player.skills.sort(function (a, b) {
                        var bool = skills.includes(a),
                            bool2 = skills.includes(b);
                        if (!bool && !bool2) return 0;
                        if (bool && !bool2) return -1;
                        if (!bool && bool2) return 1;
                        var index = player.getStockSkills(true, true).indexOf(a);
                        var index2 = player.getStockSkills(true, true).indexOf(b);
                        if (index < 0) index = skills.length;
                        if (index2 < 0) index = skills.length;
                        return index - index2;
                    });
                    delete player.storage.olchuanwu_restore;
                },
            },
        },
    };
    if (lib.skill.cuijue) {
        lib.skill.cuijue.everyOnce = '1:phaseUse';
        lib.skill.cuijue.audio = 2;
        lib.skill.cuijue.filter = function (event, player) {
            return player.countDiscardableCards(player, 'he') > 0;
        };
        lib.skill.cuijue.filterCard = lib.filter.cardDiscardable;
        lib.skill.cuijue.filterTarget = function (card, player, target) {
            if (!player.getEveryOnce('cuijue', target) || !player.inRange(target)) return false;
            var distance = get.distance(player, target);
            return !game.hasPlayer((current) => current != target && player.inRange(current) && get.distance(player, current) > distance);
        };
        lib.skill.cuijue.content = function () {
            if (target) {
                player.addCountNum('cuijue', target, 'phaseUseBefore');
                target.damage('nocard');
            }
        };
    }
    if (lib.skill.olshilu) {
        lib.skill.olshilu.subSkill.viewas.mod.cardnature = function (card) {
            if (get.itemtype(card) == 'card' && card.hasGaintag('olshilu')) return false;
        };
    }
    if (lib.skill.qiexie) {
        lib.skill.qiexie.audio = 2;
        lib.skill.juanjia.audio = 2;
        lib.skill.qiexie.content = function () {
            'step 0';
            if (!_status.characterlist) lib.skill.pingjian.initList();
            _status.characterlist.randomSort();
            var list = [];
            for (var name of _status.characterlist) {
                var info = lib.character[name];
                if (
                    info[3].some(function (skill) {
                        var info = get.skillInfoTranslation(skill);
                        if (!info.includes('【杀】')) return false;
                        var list = get.skillCategoriesOf(skill);
                        list.remove('锁定技');
                        return list.length == 0;
                    })
                ) {
                    list.push(name);
                    if (list.length >= 5) break;
                }
            }
            if (!list.length) event.finish();
            else {
                var num = player.countEmptySlot(1);
                player
                    .chooseButton(
                        [
                            '挈挟:选择' + (num > 1 ? '至多' : '') + get.cnNumber(num) + '张武将置入武器栏',
                            [
                                list,
                                function (item, type, position, noclick, node) {
                                    return lib.skill.qiexie.$createButton(item, type, position, noclick, node);
                                },
                            ],
                        ],
                        [1, num],
                        true
                    )
                    .set('ai', function (button) {
                        var name = button.link;
                        var info = lib.character[name];
                        var skills = info[3].filter(function (skill) {
                            var info = get.skillInfoTranslation(skill);
                            if (!info.includes('【杀】')) return false;
                            var list = get.skillCategoriesOf(skill);
                            list.remove('锁定技');
                            return list.length == 0;
                        });
                        var eff = 0.2;
                        for (var i of skills) {
                            eff += get.skillRank(i, 'in');
                        }
                        return eff;
                    })
                    .set('filterButton', function (button) {
                        button.style.zoom = 1.6;
                        return true;
                    });
            }
            ('step 1');
            if (result.bool) {
                var list = result.links;
                game.addVideo('skill', player, ['qiexie', [list]]);
                game.broadcastAll(function (list) {
                    for (var name of list) lib.skill.qiexie.createCard(name);
                }, list);
                var cards = list.map(function (name) {
                    var card = game.createCard('qiexie_' + name, 'none', get.infoMaxHp(lib.character[name][2]));
                    return card;
                });
                player.$showAtime(cards, 800);
                for (var card of cards) player.equip(card);
            }
        };
    }
    lib.skill.tachibana_effect = {
        audio: 'nzry_huaiju',
        trigger: {
            global: ['damageBegin4', 'phaseDrawBegin2'],
        },
        forced: true,
        filter(event, player) {
            return event.player.hasMark('nzry_huaiju') && (event.name == 'damage' || !event.numFixed);
        },
        logTarget: 'player',
        content() {
            if (trigger.name == 'damage') {
                trigger.cancel();
                trigger.player.removeMark('nzry_huaiju', 1);
            } else trigger.num++;
        },
    };
    if (lib.skill.clanxiaoyong) {
        lib.skill.clanxiaoyong.intro = {
            content(storage, player) {
                var list = player.getHistory('useCard').map((evt) => get.cardNameLength(evt.card));
                var arr = [],
                    arr2 = [];
                for (var i of [1, 2, 3, 4])
                    if (list.includes(i)) arr.push(i);
                    else arr2.push(i);
                if (!arr.length) return '<center>本回合未用过牌名字数为1/2/3/4的牌</center>';
                if (!arr2.length) return '<center>本回合使用过牌名字数为1/2/3/4的牌</center>';
                return '<center>本回合使用过牌名字数为' + arr.join('/') + '的牌</center><center>本回合未用过牌名字数为' + arr2.join('/') + '的牌</center>';
            },
            markcount(storage, player) {
                var list = player.getHistory('useCard').map((evt) => get.cardNameLength(evt.card));
                var arr = [1, 2, 3, 4].filter((i) => list.includes(i)),
                    str = '啸咏';
                if (!qyhcCL.beOwned10) {
                    player.chanMarkinner('clanxiaoyong', '啸');
                    return arr.length.toString();
                }
                if (arr.length) str = arr.join('');
                player.chanMarkinner('clanxiaoyong', str);
                return 0;
            },
            updatetrigger: {
                player: 'useCard1',
                global: 'creatMark',
                qyhc_markfilter(player) {
                    if (!player.beOn()) return false;
                },
            },
        };
        if (lib.config.extension_群英荟萃乀摧林_zhuanhuanji == 'B')
            lib.skill.clanguangu.intro = {
                markcount(storage, player) {
                    var left = "<span style='font-family:xinwei'>观</span>";
                    var right = "<span style='font-family:xinwei'>骨</span>";
                    if (player.disabledSkills.clanguangu) {
                        right = '<span class=Optext>' + right + '</span>';
                        left = '<span class=Optext>' + left + '</span>';
                    }
                    var history = player
                        .getAllHistory('useSkill', (evt) => {
                            return evt.skill == 'clanguangu_backup';
                        })
                        .map((evt) => evt.event);
                    var num = 0;
                    for (var i = history.length - 1; i >= 0; i--) {
                        var evt = history[i];
                        if (evt.viewedCount) {
                            num = evt.viewedCount;
                            break;
                        }
                    }
                    if (!num) num = '';
                    if (storage % 2) player.chanMarkinner('clanguangu', left + "<span class=yellowtext><font size='3'>阳" + num + '</font></span>' + right);
                    else player.chanMarkinner('clanguangu', left + "<span class=bluetext><font size='3'>阴" + num + '</font></span>' + right);
                    return 0;
                },
                content(storage, player, skill) {
                    var str = '<span class=lefttext>' + (qyhcCL.dynamicZhuanhuan || (() => ''))(player, skill) + '</span>';
                    var history = player
                        .getAllHistory('useSkill', (evt) => {
                            return evt.skill == 'clanguangu_backup';
                        })
                        .map((evt) => evt.event);
                    if (!history.length) return str;
                    var num = 0;
                    for (var i = history.length - 1; i >= 0; i--) {
                        var evt = history[i];
                        if (evt.viewedCount) {
                            num = evt.viewedCount;
                            break;
                        }
                    }
                    if (!num) return str;
                    return '<center>上一次观看了' + get.cnNumber(num) + '张牌</center>' + str;
                },
                name(storage) {
                    if (storage % 2) return '可发动〖观骨·<span class=yellowtext>阳</span>〗';
                    else return '可发动〖观骨·<span class=bluetext>阴</span>〗';
                },
                updatetrigger: {
                    player: 'chooseButtonBefore',
                },
            };
    }
    if (qyhcCL.beMaking) {
        if (qyhcCL.beOwned10)
            lib.skill._qyhc_equipBetter = {
                trigger: { player: ['equipEnd', 'loseCardEnd', 'gameStart', 'phaseBegin'] },
                silent: true,
                forced: true,
                filter(event, player) {
                    if (!window.decadeUI || !ui.arena.dataset) {
                        game.removeGlobalSkill('_qyhc_equipBetter');
                        return false;
                    }
                    if (!player.expandedSlots) {
                        ui.arena.dataset.equipLayout = 'off';
                        game.saveConfig('extension_十周年UI_equipLayout', false);
                        return false;
                    }
                    for (var current of game.players)
                        for (var i = 1; i < 7; i++)
                            if (current.countDisabledSlot(i) + current.getEquips(i).length > 1) {
                                ui.arena.dataset.equipLayout = 'on';
                                game.saveConfig('extension_十周年UI_equipLayout', true);
                                return false;
                            }
                    ui.arena.dataset.equipLayout = 'off';
                    game.saveConfig('extension_十周年UI_equipLayout', false);
                    return false;
                },
                content() { },
            };
        lib.translate.reshangshi_info = '当你的手牌数小于X时,你可以将手牌摸至X张(X为你已损失的体力值);当你受到伤害时,你可以弃置一张牌.';
        lib.translate.minimiaoshenxian_info = '一名角色的弃牌阶段结束时,你可以摸一张牌.';
        lib.skill.minimiaoshenxian = {
            audio: 'ext:活动武将/audio/skill:2',
            trigger: { global: 'phaseDiscardEnd' },
            forced: true,
            content() {
                player.draw();
            },
        };
        lib.skill.reshangshi.group = 'reshangshi_2nd';
        if (lib.config.characters.includes('MiNikill')) {
            lib.character.Mmiao_zhangxingcai[3] = ['minimiaoshenxian', 'minimiaoqiangwu'];
        }
        lib.characterPack.MiNikill.Mmiao_zhangxingcai[3] = ['minimiaoshenxian', 'minimiaoqiangwu'];
        lib.skill.minimiaoqiangwu = {
            mod: {
                targetInRange(card, player, target) {
                    if (card.name == 'sha' && get.distance(player, target) > player.getAttackRange()) return true;
                },
            },
            audio: 'ext:活动武将/audio/skill:2',
            trigger: { source: 'damageSource', player: 'useCardToPlayered' },
            filter(event, player, name) {
                if (event.card && event.card.name == 'sha');
                else return false;
                if (name == 'damageSource') return get.distance(player, event.player) == player.getAttackRange();
                return get.distance(player, event.target) < player.getAttackRange();
            },
            forced: true,
            content() {
                if (event.triggername == 'damageSource') player.draw();
                else trigger.getParent('useCard').NotAddCount(0);
            },
        };
        lib.translate.minimiaoqiangwu_info = '锁定技:你使用【杀】指定距离小于X的角色为目标后,此【杀】不计入次数限制(X为你的攻击范围);你对距离大于X的角色使用【杀】无距离限制;当你使用【杀】对距离等于X的角色造成伤害后,你摸一张牌.';
        if (lib.config.characters.includes('sp')) {
            lib.character.maliang = ['male', 'shu', 3, ['zishu', 'yingyuan'], []];
            lib.character.zhugejin = ['male', 'wu', 3, ['qyhc_huanshi', 'olhongyuan', 'olmingzhe'], []];
        }
        lib.characterPack.sp.maliang = ['male', 'shu', 3, ['zishu', 'yingyuan'], []];
        lib.characterPack.sp.zhugejin = ['male', 'wu', 3, ['qyhc_huanshi', 'olhongyuan', 'olmingzhe'], []];
        lib.characterPack.extra.shen_zhangjiao = ['male', 'shen', 3, ['yizhao', 'sijun', 'tianjie'], ['qun']];
        if (lib.config.characters.includes('tw')) lib.character.tw_guanqiujian = ['male', 'wei', 4, ['twzhengrong', 'twhongju'], []];
        if (lib.config.characters.includes('extra')) lib.character.shen_zhangjiao = ['male', 'shen', 3, ['yizhao', 'sijun', 'tianjie'], ['qun']];
        lib.characterPack.tw.tw_guanqiujian = ['male', 'wei', 4, ['twzhengrong', 'twhongju'], []];
    }
    return [lib, game, ui, get, ai, _status];
});

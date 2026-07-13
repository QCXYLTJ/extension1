window.tgtt_import(function (lib, game, ui, get, ai, _status) {
    //感谢时空枢纽以及福瑞拓展提供的代码参考
    //---------------------------------------定义Buff-----------------------------------------//
    //现在定义新的Buff时,在lib.TgttBuff中请不要加前缀Tgtt_Buff_
    lib.TgttBuff = {
        //裂伤
        "lieshang": {
            intro: {
                name: "裂伤",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>自然衰减时,你受到X点无来源<font color=grey>物理</font>伤害",
            },
            forced: true,
            charlotte: true,
            TaiguSkill: true,
            silent: true,
            _priority: 3,
            trigger: {
                player: "reduceTgttBuffBegin2",
            },
            filter(event, player) {
                return event.buff == 'lieshang' && player.hasTgttBuff('lieshang') && event.naturalLose
            },
            content() {
                game.log(player, '受<font color=grey>「裂伤」</font>影响');
                player.damage(player.countTgttBuffNum('lieshang'), 'nosource');
            },
            TgttBuffInfo: {
                naturalLose: true,
                limit: 5,
                type: 'debuff',
                buffRank: {
                    basic: [0, -2],
                    add: [0, -2],
                },
            }
        },
        //风化
        "fenghua": {
            intro: {
                name: "风化",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>自然衰减时,你受到X点无来源<font color=green>风蚀</font>伤害",
            },
            forced: true,
            charlotte: true,
            TaiguSkill: true,
            silent: true,
            _priority: 3,
            trigger: {
                player: "reduceTgttBuffBegin2",
            },
            filter(event, player) {
                return event.buff == 'fenghua' && player.hasTgttBuff('fenghua') && event.naturalLose
            },
            content() {
                game.log(player, '受<font color=green>「风化」</font>影响');
                player.damage(player.countTgttBuffNum('fenghua'), 'tgtt_wind', 'nosource');
            },
            TgttBuffInfo: {
                naturalLose: true,
                limit: 5,
                type: 'debuff',
                buffRank: {
                    basic: [0, -2],
                    add: [0, -2],
                },
            }
        },
        //触电
        "chudian": {
            intro: {
                name: "触电",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>自然衰减时,你受到X点无来源<font color=purple>雷电</font>伤害",
            },
            forced: true,
            charlotte: true,
            TaiguSkill: true,
            silent: true,
            _priority: 3,
            trigger: {
                player: "reduceTgttBuffBegin2",
            },
            filter(event, player) {
                return event.buff == 'chudian' && player.hasTgttBuff('chudian') && event.naturalLose
            },
            content() {
                game.log(player, '受<font color=purple>「触电」</font>影响');
                player.damage(player.countTgttBuffNum('chudian'), 'thunder', 'nosource');
            },
            TgttBuffInfo: {
                naturalLose: true,
                limit: 5,
                type: 'debuff',
                buffRank: {
                    basic: [0, -2],
                    add: [0, -2],
                },
            }
        },
        //灼烧
        "zhuoshao": {
            intro: {
                name: "灼烧",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>自然衰减时,你受到X点无来源<font color=red>火焰</font>伤害",
            },
            forced: true,
            charlotte: true,
            TaiguSkill: true,
            silent: true,
            _priority: 3,
            trigger: {
                player: "reduceTgttBuffBegin2",
            },
            filter(event, player) {
                return event.buff == 'zhuoshao' && player.hasTgttBuff('zhuoshao') && event.naturalLose
            },
            content() {
                game.log(player, '受<font color=red>「灼烧」</font>影响');
                player.damage(player.countTgttBuffNum('zhuoshao'), 'fire', 'nosource');
            },
            TgttBuffInfo: {
                naturalLose: true,
                limit: 5,
                type: 'debuff',
                buffRank: {
                    basic: [0, -2],
                    add: [0, -2],
                },
            }
        },
        //冻结
        'dongjie': {
            intro: {
                name: "冻结",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>你的回合开始时,若你有<font color=blue>「离神」</font>,则你移除所有<font color=blue>「冻结」</font>并附加一层<font color=blue>「离神」</font>,否则你跳过本回合所有阶段且非太古技失效直到下回合开始前,移除一层<font color=blue>「冻结」</font>",
            },
            forced: true,
            silent: true,
            charlotte: true,
            TaiguSkill: true,
            trigger: {
                player: ["phaseBegin", "phaseZhunbeiBefore", "phaseJudgeBefore", "phaseDrawBefore", "phaseUseBefore", "phaseDiscardBefore", "phaseJieshuBefore"],
            },
            filter(event, player) {
                return player.hasTgttBuff('dongjie');
            },
            content() {
                if (event.triggername == 'phaseBegin' && player.hasTgttBuff('lishen')) {
                    var num = player.countTgttBuffNum('dongjie');
                    player.addTgttBuff('lishen', 1);
                    player.reduceTgttBuff('dongjie', num);
                } else if (event.triggername == 'phaseJieshuBefore') {
                    trigger.cancel();
                    game.log(player, '受到<font color=blue>「冻结」</font>影响');
                    player.reduceTgttBuff('dongjie', 1);
                } else {
                    trigger.cancel();
                    player.reduceTgttBuff('dongjie', 1);
                    if (!player.hasSkill('tgtt_srtsfengyin')) player.addTempSkill('tgtt_srtsfengyin', { player: "phaseBefore" });
                };
            },
            _priority: 3,
            TgttBuffInfo: {
                naturalLose: true,
                type: 'debuff',
                limit: 5,
                buffRank: {
                    basic: [0, -2.5],
                },
            },
        },
        //纠缠
        'jiuchan': {
            intro: {
                name: "纠缠",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>①当你受到非<font color=#500080>「纠缠」</font>造成的伤害时,累计此伤害值;<br><li>②当解除<font color=#500080>「纠缠」</font>时,你受到等于记录值的无来源<font color=#500080>量子</font>伤害",
            },
            forced: true,
            silent: true,
            charlotte: true,
            TaiguSkill: true,
            init(player) {
                if (!player.jiuchan) player.jiuchan = 0
            },
            trigger: {
                player: ['damageBegin3', 'reduceTgttBuffBegin2']
            },
            filter(event, player, onrewrite) {
                if (onrewrite == 'damageBegin3') {
                    return player.hasTgttBuff('jiuchan') && !event.jiuchan;
                } else {
                    return event.buff == 'jiuchan' && player.countTgttBuffNum('jiuchan') <= event.num && event.num > 0 && event.naturalLose
                }
            },
            content() {
                'step 0'
                if (event.triggername == 'damageBegin3') {
                    player.jiuchan += trigger.num
                    game.log(player, '受<font color=#500080>「纠缠」</font>影响,累计本次伤害,当前累计伤害值为' + player.jiuchan);
                } else {
                    player.damage(player.jiuchan, 'tgtt_quantum', 'nosource').jiuchan = true
                    player.jiuchan = 0
                }
            },
            _priority: 3,
            TgttBuffInfo: {
                naturalLose: true,
                buffRank: {
                    random: [1, 1]
                },
                type: 'debuff',
                limit: 1,
            },
        },
        //禁锢
        'jingu': {
            intro: {
                name: "禁锢",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>你不能使用或打出牌",
            },
            forced: true,
            silent: true,
            charlotte: true,
            TaiguSkill: true,
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
            _priority: 3,
            TgttBuffInfo: {
                naturalLose: true,
                type: 'debuff',
                limit: 1,
                buffRank: {
                    basic: [0, -2.5],
                },
            },
        },
        //熵灭笞罚
        'shangmiechifa': {
            intro: {
                name: "熵灭笞罚",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>①当你受到伤害时,该伤害+X;<br><li>②回合开始时,你受到X点无来源<font color=red>火焰</font>伤害",
            },
            forced: true,
            silent: true,
            charlotte: true,
            TaiguSkill: true,
            filter(event, player, onrewrite) {
                if (onrewrite == 'damageBegin4') {
                    return player.hasTgttBuff('shangmiechifa');
                } else {
                    return player.hasTgttBuff('shangmiechifa');
                }
            },
            trigger: {
                player: ["damageBegin4", "phaseBegin"],
            },
            content() {
                if (event.triggername == 'damageBegin4') {
                    trigger.num += player.countTgttBuffNum('shangmiechifa');
                    game.log(player, '受到<font color=red>「熵灭笞罚」</font>影响');
                } else {
                    player.damage(player.countTgttBuffNum('shangmiechifa'), 'fire', 'nosource');
                    game.log(player, '受到<font color=red>「熵灭笞罚」</font>影响');
                }
            },
            _priority: 3,
            TgttBuffInfo: {
                naturalLose: true,
                type: 'debuff',
                limit: 5,
                buffRank: {
                    basic: [0, -2.5],
                },
            },
        },
        //战意
        'zhanyi': {
            intro: {
                name: "战意",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>①当你造成伤害时,该伤害+X;<br><li>②当你受到伤害时,该伤害-X;<br><li>③<font color=red>「战意①」</font>和<font color=red>「战意②」</font>结算后移除一层<font color=red>「战意」</font>",
            },
            forced: true,
            silent: true,
            charlotte: true,
            TaiguSkill: true,
            filter(event, player, onrewrite) {
                if (onrewrite == 'damageBegin4') {
                    return player.hasTgttBuff('zhanyi');
                } else {
                    return player.hasTgttBuff('zhanyi');
                }
            },
            trigger: {
                player: "damageBegin4",
                source: "damageBegin",
            },
            content() {
                'step 0'
                if (event.triggername == 'damageBegin4') {
                    trigger.num -= player.countTgttBuffNum('zhanyi');
                    game.log(player, '受到<font color=red>「战意」</font>影响');
                } else {
                    trigger.num += player.countTgttBuffNum('zhanyi');
                    game.log(trigger.player, '受到<font color=red>「战意」</font>影响');
                }
                'step 1'
                player.reduceTgttBuff('zhanyi', 1);
            },
            _priority: 3,
            TgttBuffInfo: {
                naturalLose: false,
                type: 'buff',
                limit: 5,
                buffRank: {
                    basic: [0, -2.5],
                },
            },
        },
        //会心
        'huixin': {
            intro: {
                name: "会心",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>①你造成伤害时有X*10%的概率令伤害翻X倍,移除X-1层<font color=green>「会心」</font>;<br><li>②受到伤害时,令该伤害-X,移除所有<font color=green>「会心」</font>",
            },
            forced: true,
            silent: true,
            charlotte: true,
            TaiguSkill: true,
            filter(event, player, onrewrite) {
                if (onrewrite == 'damageBegin4') {
                    return player.hasTgttBuff('huixin');
                } else {
                    var num = player.countTgttBuffNum('huixin');
                    return Math.random() <= Math.max(num, 1) * 10 / 100 && player.hasTgttBuff('huixin')
                }
            },
            trigger: {
                player: "damageBegin4",
                source: "damageBegin",
            },
            content() {
                'step 0'
                if (event.triggername == 'damageBegin4') {
                    trigger.num -= player.countTgttBuffNum('huixin');
                    game.log(player, '受到<font color=green>「会心」</font>影响');
                    player.reduceTgttBuff('huixin', player.countTgttBuffNum('huixin'));
                } else {
                    var abc = player.countTgttBuffNum('huixin') * trigger.num, abcd = player.countTgttBuffNum('huixin') - 1;
                    trigger.num = abc;
                    game.log(trigger.player, '受到<font color=green>「会心」</font>影响');
                    player.reduceTgttBuff('huixin', abcd);
                }
            },
            _priority: 3,
            TgttBuffInfo: {
                naturalLose: true,
                type: 'buff',
                limit: 12,
                buffRank: {
                    basic: [0, -2.5],
                },
            },
        },
        //光巡天矢
        'guangxuntianshi': {
            intro: {
                name: "光巡天矢",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>你造成伤害时令伤害翻倍,移除一层<font color=green>「光巡天矢」</font>且此回合结束后,你进行一个额外回合并令<font color=green>「光巡天矢」</font>于此回合失效",
            },
            forced: true,
            silent: true,
            charlotte: true,
            TaiguSkill: true,
            filter(event, player) {
                return player.hasTgttBuff('guangxuntianshi') && !player.hasSkill('tgtt_mtlxunlie_xian');
            },
            trigger: {
                source: "damageBegin",
            },
            content() {
                var abc = trigger.num;
                trigger.num += abc;
                game.log(player, '受到<font color=green>「光巡天矢」</font>影响,获得额外回合');
                player.reduceTgttBuff('guangxuntianshi', 1);
                player.addSkill('tgtt_mtlxunlie_ewai');
            },
            _priority: 3,
            TgttBuffInfo: {
                naturalLose: false,
                type: 'buff',
                buffRank: {
                    basic: [0, -2.5],
                },
            },
        },
        //突触共鸣
        'tuchugongming': {
            intro: {
                name: "突触共鸣",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>当你受到有来源的伤害时,你额外受到X点无来源<font color=yellow>虚数</font>伤害,移除一层<font color=yellow>「突触共鸣」</font>令我方其他角色受到1~3点无来源<font color=yellow>虚数</font>伤害",
            },
            forced: true,
            silent: true,
            charlotte: true,
            TaiguSkill: true,
            trigger: {
                player: "damageBegin4",
            },
            filter(event, player) {
                return player.hasTgttBuff('tuchugongming') && event.source && event.source.isAlive();
            },
            content() {
                var abc = player.countTgttBuffNum('tuchugongming');
                player.damage(abc, 'nosource', 'tgtt_imaginary');
                game.log(player, '受到<font color=yellow>「突触共鸣」</font>影响');
                game.countPlayer(function (current) {
                    if (current != player && current.isFriendsOf(player)) {
                        current.damage(get.rand(1, 3), 'nosource', 'tgtt_imaginary');
                        game.log(current, '受到<font color=yellow>「突触共鸣」</font>影响');
                    };
                });
                player.reduceTgttBuff('tuchugongming', 1);
            },
            _priority: 3,
            TgttBuffInfo: {
                naturalLose: false,
                type: 'debuff',
                limit: 15,
                buffRank: {
                    basic: [0, -2.5],
                },
            },
        },
        //罐中脑
        'guanzhongnao': {
            intro: {
                name: "罐中脑",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>当你使用普通锦囊牌后,你可以移除一层<font color=yellow>「罐中脑」</font>并摸一张牌,令其额外结算一次",
            },
            charlotte: true,
            TaiguSkill: true,
            trigger: {
                player: "useCardAfter",
            },
            filter(event, player) {
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
                return player.hasTgttBuff('guanzhongnao');
            },
            check(event, player) {
                if (event.card.name == 'tiesuo') return false;
                return true;
            },
            content() {
                'step 0'
                player.reduceTgttBuff('guanzhongnao', 1);
                player.draw();
                'step 1'
                var card = game.createCard(trigger.card.name, trigger.card.suit, trigger.card.number, trigger.card.nature);
                player.useCard(card, (trigger._targets || trigger.targets).slice(0));
            },
            _priority: 3,
            TgttBuffInfo: {
                naturalLose: false,
                type: 'buff',
                limit: 10,
                buffRank: {
                    basic: [0, -2.5],
                },
            },
        },
        //调伏诸厄
        'tiaofuzhue': {
            intro: {
                name: "调伏诸厄",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>回合开始时,移除一层<font color=cyan>「调伏诸厄」</font>及所有<font color=red>" + get.tgttIntroduce('NgBuff') + "</font>,回复等量体力",
            },
            forced: true,
            silent: true,
            charlotte: true,
            TaiguSkill: true,
            trigger: {
                player: "phaseBegin",
            },
            forced: true,
            silent: true,
            _priority: 5,
            filter(event, player) {
                return get.TgttBuffList(player, 'debuff').length && player.hasTgttBuff('tiaofuzhue')
            },
            content() {
                'step 0'
                player.reduceTgttBuff('tiaofuzhue')
                'step 1'
                game.log(player, '受<font color=cyan>「调伏诸厄」</font>影响');
                for (var i in lib.TgttBuff) {
                    if (player.countTgttBuffNum(i) > 0 && get.TgttBuffInfo(i, 'type') == 'debuff') {
                        player.recover(player.countTgttBuffNum(i));
                        player.reduceTgttBuff(i, player.countTgttBuffNum(i))
                    }
                }
            },
            TgttBuffInfo: {
                naturalLose: false,
                type: 'buff',
                limit: 5,
                buffRank: {
                    basic: [0, 0],
                },
            },
        },
        //珠露
        'zhulu': {
            intro: {
                name: "珠露",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>①当你造成伤害时,该伤害+X,移除一层<font color=cyan>「珠露」</font>;<br><li>②当你的体力值及体力上限发生正向变动时,若你有<font color=cyan>「珠露」</font>,则附加一层<font color=cyan>「珠露」</font>",
            },
            forced: true,
            silent: true,
            charlotte: true,
            TaiguSkill: true,
            filter(event, player, onrewrite) {
                if (onrewrite == 'recoverEnd' || onrewrite == 'gainMaxHpEnd') {
                    return player.hasTgttBuff('zhulu') && player.countTgttBuffNum('zhulu') < 5;
                } else {
                    return player.hasTgttBuff('zhulu');
                }
            },
            trigger: {
                player: ["recoverEnd", "gainMaxHpEnd"],
                source: "damageBegin",
            },
            content() {
                if (event.triggername == 'recoverEnd' || event.triggername == 'gainMaxHpEnd') {
                    player.addTgttBuff('zhulu', 1);
                    game.log(player, '受到<font color=cyan>「珠露」</font>影响');
                } else {
                    var num = player.countTgttBuffNum('zhulu');
                    trigger.num += num;
                    player.reduceTgttBuff('zhulu', 1);
                    game.log(trigger.player, '受到<font color=cyan>「珠露」</font>影响');
                }
            },
            _priority: 3,
            TgttBuffInfo: {
                naturalLose: false,
                type: 'buff',
                limit: 5,
                buffRank: {
                    basic: [0, -2.5],
                },
            },
        },
        //蜕变
        'tuibian': {
            intro: {
                name: "蜕变",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>每当你因使用或打出而失去牌/获得牌后,你移除一层<font color=orange>「蜕变」</font>,获得一张基本牌并令下一次造成的普通攻击伤害+1",
            },
            forced: true,
            silent: true,
            charlotte: true,
            TaiguSkill: true,
            trigger: {
                player: ["loseAfter", "gainAfter"],
            },
            filter(event, player, onrewrite) {
                if (onrewrite == 'gainAfter') {
                    return player.hasTgttBuff('tuibian');
                } else {
                    return event.parent.name == 'useCard' || event.parent.name == 'respond'
                }
            },
            content() {
                'step 0'
                player.reduceTgttBuff('tuibian', 1);
                var card = get.cardPile2(function (card) {
                    return get.type2(card, false) == 'basic';
                });
                if (card)
                    player.gain(card, 'gain2');
                'step 1'
                if (!player.hasSkill('tgtt_mttyzylsfanyu_shang')) player.addSkill('tgtt_mttyzylsfanyu_shang');
                'step 2'
                if (player.hasSkill('tgtt_mttyzylsfanyu_shang')) player.addMark('tgtt_mttyzylsfanyu_shang', 1);
            },
            _priority: 3,
            TgttBuffInfo: {
                naturalLose: false,
                type: 'buff',
                limit: 5,
                buffRank: {
                    basic: [0, -2.5],
                },
            },
        },
        //孢子
        'baozi': {
            intro: {
                name: "孢子",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>当你受到有来源的伤害后,若你的<font color=orange>「孢子」</font>层数大于等于3,则你受到X点无来源<font color=green>风蚀</font>伤害并令我方其他角色获得X层<font color=orange>「孢子」</font>,你移除所有<font color=orange>「孢子」</font>",
            },
            forced: true,
            silent: true,
            charlotte: true,
            TaiguSkill: true,
            trigger: {
                player: "damageEnd",
            },
            filter(event, player) {
                return player.hasTgttBuff('baozi') && player.countTgttBuffNum('baozi') >= 3 && event.source && event.source.isAlive();
            },
            content() {
                "step 0"
                var abc = player.countTgttBuffNum('baozi');
                player.damage(abc, 'nosource', 'tgtt_wind');
                game.log(player, '受到<font color=orange>「孢子」</font>影响');
                "step 1"
                var abcd = player.countTgttBuffNum('baozi');
                game.countPlayer(function (current) {
                    if (current != player && current.isFriendsOf(player)) {
                        current.addTgttBuff('baozi', abcd);
                        game.log(current, '受到<font color=orange>「孢子」</font>影响');
                    };
                });
                player.reduceTgttBuff('baozi', player.countTgttBuffNum('baozi'));
            },
            _priority: 3,
            TgttBuffInfo: {
                naturalLose: false,
                type: 'debuff',
                limit: 9,
                buffRank: {
                    basic: [0, -2.5],
                },
            },
        },
        //永恒河流
        'yonghengheliu': {
            intro: {
                name: "永恒河流",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>回合开始前,移除一层<font color=blue>「永恒河流」</font>,令所有<font color=red>" + get.tgttIntroduce('NgBuff') + "</font>层数+1",
            },
            charlotte: true,
            TaiguSkill: true,
            trigger: {
                player: "phaseBefore",
            },
            forced: true,
            silent: true,
            _priority: 3,
            filter(event, player) {
                return get.TgttBuffList(player, 'debuff').length && player.hasTgttBuff('yonghengheliu')
            },
            content() {
                'step 0'
                player.reduceTgttBuff('yonghengheliu')
                'step 1'
                game.log(player, '受<font color=blue>「永恒河流」</font>影响');
                for (var i in lib.TgttBuff) {
                    if (player.countTgttBuffNum(i) > 0 && get.TgttBuffInfo(i, 'type') == 'debuff') {
                        player.addTgttBuff(i)
                    }
                }
            },
            TgttBuffInfo: {
                naturalLose: false,
                type: 'none',
                buffRank: {
                    basic: [0, 0],
                },
            }
        },
        //离神
        'lishen': {
            intro: {
                name: "离神",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>①你的阶段开始时,你跳过本回合所有阶段且非太古技失效直到下回合开始前,移除一层<font color=blue>「离神」</font>;<br><li>②自然衰减或因<font color=blue>「离神①」</font>移除<font color=blue>「离神」</font>时,你受到1点无来源的<font color=blue>寒冰</font>伤害",
            },
            forced: true,
            silent: true,
            charlotte: true,
            TaiguSkill: true,
            trigger: {
                player: ["phaseZhunbeiBefore", "phaseJudgeBefore", "phaseDrawBefore", "phaseUseBefore", "phaseDiscardBefore", "phaseJieshuBefore", 'reduceTgttBuffBegin2'],
            },
            filter(event, player, onrewrite) {
                if (onrewrite == 'reduceTgttBuffBegin2') {
                    return event.buff == 'lishen' && player.hasTgttBuff('lishen') && event.naturalLose;
                } else {
                    return player.hasTgttBuff('lishen');
                }
            },
            content() {
                if (event.triggername == 'reduceTgttBuffBegin2') {
                    player.damage(1, 'ice', 'nosource');
                    game.log(player, '受到<font color=blue>「离神」</font>影响');
                } else if (event.triggername == 'phaseJieshuBefore') {
                    trigger.cancel();
                    game.log(player, '受到<font color=blue>「离神」</font>影响,跳过了本回合所有阶段');
                    player.reduceTgttBuff('lishen');
                    player.damage(1, 'ice', 'nosource');
                } else {
                    trigger.cancel();
                    if (!player.hasSkill('tgtt_srtsfengyin')) player.addTempSkill('tgtt_srtsfengyin', { player: "phaseBefore" });
                }
            },
            _priority: 3,
            TgttBuffInfo: {
                naturalLose: true,
                type: 'debuff',
                limit: 5,
                buffRank: {
                    basic: [0, -2.5],
                },
            },
        },
        //反震
        'fanzhen': {
            intro: {
                name: "反震",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>①当你造成伤害时,若你有护甲,则令受伤角色受到等于你的护甲值的无来源<font color=grey>物理</font>伤害;<br><li>②当你受到伤害时,若你有护甲,则令伤害来源受到等于你的护甲值的无来源<font color=grey>物理</font>伤害;<br><li>③<font color=grey>「反震①」</font>和<font color=grey>「反震②」</font>结算后移除一层<font color=grey>「反震」</font>",
            },
            forced: true,
            silent: true,
            charlotte: true,
            TaiguSkill: true,
            filter(event, player, onrewrite) {
                if (onrewrite == 'damageBegin3') {
                    return player.hasTgttBuff('fanzhen') && player.hujia > 0 && event.source && event.source.isAlive();
                } else {
                    return player.hasTgttBuff('fanzhen') && player.hujia > 0;
                }
            },
            trigger: {
                player: "damageBegin3",
                source: "damageBegin",
            },
            content() {
                'step 0'
                if (event.triggername == 'damageBegin3') {
                    var num = player.hujia;
                    trigger.source.damage(num, 'nosource');
                    game.log(trigger.source, '受到<font color=grey>「反震」</font>影响');
                } else {
                    var abc = player.hujia;
                    trigger.player.damage(abc, 'nosource');
                    game.log(trigger.player, '受到<font color=grey>「反震」</font>影响');
                }
                'step 1'
                player.reduceTgttBuff('fanzhen', 1);
            },
            _priority: 3,
            TgttBuffInfo: {
                naturalLose: false,
                type: 'buff',
                limit: 5,
                buffRank: {
                    basic: [0, -2.5],
                },
            },
        },
        //琥珀
        'hupo': {
            intro: {
                name: "琥珀",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>当你受到伤害时,若你有护甲且此伤害大于你的护甲值,则你免去超出护甲值的伤害,移除一层<font color=grey>「琥珀」</font>",
            },
            forced: true,
            silent: true,
            charlotte: true,
            TaiguSkill: true,
            filter(event, player) {
                return player.hasTgttBuff('hupo') && event.num > player.hujia && player.hujia > 0;
            },
            trigger: {
                player: "damageBegin4",
            },
            content() {
                var num = player.hujia;
                trigger.num = num;
                game.log(player, '受到<font color=grey>「琥珀」</font>影响')
                player.reduceTgttBuff('hupo', 1)
            },
            _priority: 3,
            TgttBuffInfo: {
                naturalLose: false,
                type: 'buff',
                limit: 5,
                buffRank: {
                    basic: [0, -2.5],
                },
            },
        },
        //感官追猎
        'ganguanzhuilie': {
            intro: {
                name: "感官追猎",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>当你受到追加攻击伤害时,该伤害+X,你移除所有<samp id='「感官追猎」'><big><strong>「感官追猎」</strong></big></samp></body><style>#「感官追猎」{animation:change 10s linear 0s infinite;font-family:shousha;}@keyframes change{0% {color: #FF0000;}10%{color: #FF7F00;}20%{color: #FFFF00;}30%{color: #00FF00;}40% {color: #00FFFF;}50%{color: #0000FF;}60%{color: #8B00FF;}70%{color: #0000FF;}75%{color: #00FFFF ;}80%{color: #00FF00;}85%{color: #FFFF00 ;}90%{color:  #FF7F00;}100%{color: #FF0000;}}</style></span>并附加等量层数的<samp id='「回味」'><big><strong>「回味」</strong></big></samp></body><style>#「回味」{animation:change 10s linear 0s infinite;font-family:shousha;}@keyframes change{0% {color: #FF0000;}10%{color: #FF7F00;}20%{color: #FFFF00;}30%{color: #00FF00;}40% {color: #00FFFF;}50%{color: #0000FF;}60%{color: #8B00FF;}70%{color: #0000FF;}75%{color: #00FFFF ;}80%{color: #00FF00;}85%{color: #FFFF00 ;}90%{color:  #FF7F00;}100%{color: #FF0000;}}</style></span>",
            },
            forced: true,
            silent: true,
            charlotte: true,
            TaiguSkill: true,
            filter(event, player) {
                if ((!event.source || !event.source.isAlive()) && event.parent.name != 'tgtt_mtahhuanyu') return false;
                if (_status.currentPhase != player && event.card && !event.source.hasSkill('tgtt_mtahhuanyu')) return false;
                return player.hasTgttBuff('ganguanzhuilie');
            },
            trigger: {
                player: "damageBegin3",
            },
            content() {
                var abc = player.countTgttBuffNum('ganguanzhuilie');
                trigger.num += abc;
                game.log(player, "受到<samp id='「感官追猎」'><big><strong>「感官追猎」</strong></big></samp></body><style>#「感官追猎」{animation:change 10s linear 0s infinite;font-family:shousha;}@keyframes change{0% {color: #FF0000;}10%{color: #FF7F00;}20%{color: #FFFF00;}30%{color: #00FF00;}40% {color: #00FFFF;}50%{color: #0000FF;}60%{color: #8B00FF;}70%{color: #0000FF;}75%{color: #00FFFF ;}80%{color: #00FF00;}85%{color: #FFFF00 ;}90%{color:  #FF7F00;}100%{color: #FF0000;}}</style></span>影响");
                player.addTgttBuff('huiwei', player.countTgttBuffNum('ganguanzhuilie'));
                player.reduceTgttBuff('ganguanzhuilie', player.countTgttBuffNum('ganguanzhuilie'));
            },
            _priority: 3,
            TgttBuffInfo: {
                naturalLose: false,
                type: 'debuff',
                limit: 5,
                buffRank: {
                    basic: [0, -2.5],
                },
            },
        },
        //回味
        'huiwei': {
            intro: {
                name: "回味",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>自然衰减时,你受到X点无来源<samp id='随机属性'><big><strong>随机属性</strong></big></samp></body><style>#随机属性{animation:change 10s linear 0s infinite;font-family:shousha;}@keyframes change{0% {color: #FF0000;}10%{color: #FF7F00;}20%{color: #FFFF00;}30%{color: #00FF00;}40% {color: #00FFFF;}50%{color: #0000FF;}60%{color: #8B00FF;}70%{color: #0000FF;}75%{color: #00FFFF ;}80%{color: #00FF00;}85%{color: #FFFF00 ;}90%{color:  #FF7F00;}100%{color: #FF0000;}}</style></span>伤害",
            },
            forced: true,
            charlotte: true,
            TaiguSkill: true,
            silent: true,
            _priority: 3,
            trigger: {
                player: "reduceTgttBuffBegin2",
            },
            filter(event, player) {
                return event.buff == 'huiwei' && player.hasTgttBuff('huiwei') && event.naturalLose
            },
            content() {
                game.log(player, "受<samp id='「回味」'><big><strong>「回味」</strong></big></samp></body><style>#「回味」{animation:change 10s linear 0s infinite;font-family:shousha;}@keyframes change{0% {color: #FF0000;}10%{color: #FF7F00;}20%{color: #FFFF00;}30%{color: #00FF00;}40% {color: #00FFFF;}50%{color: #0000FF;}60%{color: #8B00FF;}70%{color: #0000FF;}75%{color: #00FFFF ;}80%{color: #00FF00;}85%{color: #FFFF00 ;}90%{color:  #FF7F00;}100%{color: #FF0000;}}</style></span>影响");
                player.damage(player.countTgttBuffNum('huiwei'), 'nosource').nature = lib.linked.randomGet();
            },
            TgttBuffInfo: {
                naturalLose: true,
                limit: 5,
                type: 'debuff',
                buffRank: {
                    basic: [0, -2],
                    add: [0, -2],
                },
            }
        },
        //怀疑
        'huaiyi': {
            intro: {
                name: "怀疑",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>①你受到的无来源伤害+X/造成的伤害-X;<br><li>②回合结束时,你移除两层<font color=white>「怀疑」</font>",
            },
            forced: true,
            silent: true,
            charlotte: true,
            TaiguSkill: true,
            filter(event, player, onrewrite) {
                if (onrewrite == 'damageBegin3') {
                    return player.hasTgttBuff('huaiyi') && (!event.source || !event.source.isAlive());
                } else {
                    return player.hasTgttBuff('huaiyi');
                }
            },
            trigger: {
                player: ["damageBegin3", "phaseEnd"],
                source: "damageBegin4",
            },
            content() {
                'step 0'
                if (event.triggername == 'damageBegin3') {
                    var num = player.countTgttBuffNum('huaiyi');
                    trigger.num += num;
                    game.log(player, '受到<font color=white>「怀疑」</font>影响');
                } else if (event.triggername == 'phaseEnd') {
                    player.reduceTgttBuff('huaiyi', 2);
                } else {
                    var abc = player.countTgttBuffNum('huaiyi');
                    trigger.num -= abc;
                    game.log(player, '受到<font color=white>「怀疑」</font>影响');
                }
            },
            _priority: 3,
            TgttBuffInfo: {
                naturalLose: false,
                type: 'debuff',
                limit: 99,
                buffRank: {
                    basic: [0, -2.5],
                },
            },
        },
        //迷惘
        'miwang': {
            intro: {
                name: "迷惘",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>自然衰减时,你受到等于自身<font color=red>" + get.tgttIntroduce('NgBuff') + "</font>层数的无来源<samp id='随机属性'><big><strong>随机属性</strong></big></samp></body><style>#随机属性{animation:change 10s linear 0s infinite;font-family:shousha;}@keyframes change{0% {color: #FF0000;}10%{color: #FF7F00;}20%{color: #FFFF00;}30%{color: #00FF00;}40% {color: #00FFFF;}50%{color: #0000FF;}60%{color: #8B00FF;}70%{color: #0000FF;}75%{color: #00FFFF ;}80%{color: #00FF00;}85%{color: #FFFF00 ;}90%{color:  #FF7F00;}100%{color: #FF0000;}}</style></span>伤害",
            },
            forced: true,
            silent: true,
            charlotte: true,
            TaiguSkill: true,
            trigger: {
                player: "reduceTgttBuffBegin2",
            },
            filter(event, player) {
                return event.buff == 'miwang' && player.hasTgttBuff('miwang') && event.naturalLose
            },
            content() {
                for (var i in lib.TgttBuff) {
                    if (player.countTgttBuffNum(i) > 0 && get.TgttBuffInfo(i, 'type') == 'debuff') {
                        game.log(player, "受<font color=white>「迷惘」</font>影响");
                        player.damage(player.countTgttBuffNum(i), 'nosource').nature = lib.linked.randomGet();
                    }
                }
            },
            _priority: 3,
            TgttBuffInfo: {
                naturalLose: true,
                type: 'debuff',
                limit: 5,
                buffRank: {
                    basic: [0, -2.5],
                },
            },
        },
        //空乏
        'kongfa': {
            intro: {
                name: "空乏",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>你的体力值及体力上限发生正向变化时,移除一层<font color=white>「空乏」</font>命令该次变化无效",
            },
            forced: true,
            silent: true,
            charlotte: true,
            TaiguSkill: true,
            trigger: {
                player: ["recoverBegin", "gainMaxHpBegin"],
            },
            filter(event, player) {
                return player.hasTgttBuff('kongfa');
            },
            content() {
                player.reduceTgttBuff('kongfa', 1);
                trigger.cancel();
                game.log(trigger.player, '受到<font color=white>「空乏」</font>的影响');
            },
            _priority: 3,
            TgttBuffInfo: {
                naturalLose: false,
                type: 'debuff',
                limit: 5,
                buffRank: {
                    basic: [0, -2.5],
                },
            },
        },
        //穿甲
        'chuanjia': {
            intro: {
                name: "穿甲",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>你的护甲失效",
            },
            forced: true,
            silent: true,
            charlotte: true,
            TaiguSkill: true,
            group: "tgtt_srtschuanjia",
            _priority: 3,
            TgttBuffInfo: {
                naturalLose: true,
                type: 'debuff',
                limit: 3,
                buffRank: {
                    basic: [0, -2.5],
                },
            },
        },
        //破防
        'pofang': {
            intro: {
                name: "破防",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>你的防具失效",
            },
            forced: true,
            silent: true,
            charlotte: true,
            TaiguSkill: true,
            group: "tgtt_srtspofang",
            _priority: 3,
            TgttBuffInfo: {
                naturalLose: true,
                type: 'debuff',
                limit: 3,
                buffRank: {
                    basic: [0, -2.5],
                },
            },
        },
        //凝滞
        'ningzhi': {
            intro: {
                name: "凝滞",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>①当你受到非<font color=yellow>「凝滞」</font>造成的伤害时,累计此伤害值并取消之;<br><li>②当你消解<font color=yellow>「凝滞」</font>时,你受到记录值的伤害",
            },
            forced: true,
            silent: true,
            charlotte: true,
            TaiguSkill: true,
            init(player) {
                if (!player.ningzhi) player.ningzhi = 0
            },
            trigger: {
                player: ['damageBegin3', 'reduceTgttBuffBegin2']
            },
            filter(event, player, onrewrite) {
                if (onrewrite == 'damageBegin3') {
                    return player.hasTgttBuff('ningzhi') && !event.ningzhi;
                } else {
                    return event.buff == 'ningzhi' && player.countTgttBuffNum('ningzhi') <= event.num && event.num > 0
                }
            },
            content() {
                'step 0'
                if (event.triggername == 'damageBegin3') {
                    player.ningzhi += trigger.num
                    game.log(player, '受<font color=yellow>「凝滞」</font>影响,取消本次伤害,当前累计伤害值为' + player.ningzhi);
                    trigger.cancel()
                } else {
                    player.damage(player.ningzhi).ningzhi = true
                    player.ningzhi = 0
                }
            },
            _priority: 3,
            TgttBuffInfo: {
                naturalLose: true,
                buffRank: {
                    random: [1, 1]
                },
                type: 'none',
            },
        },
        //言灵
        'yanling': {
            intro: {
                name: "言灵",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>一名角色的判定牌生效前,你可以打出一张牌代替之,你移除1层<font color=green>「言灵」</font>",
            },
            forced: true,
            silent: true,
            charlotte: true,
            TaiguSkill: true,
            trigger: {
                global: "judge",
            },
            filter(event, player) {
                return player.countCards(get.mode() == 'guozhan' ? 'hes' : 'hs') > 0 && player.hasTgttBuff('yanling');
            },
            _priority: 3,
            content() {
                "step 0"
                player.chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' +
                    get.translation(trigger.player.judging[0]) + ',' + get.prompt('Tgtt_Buff_yanling'), get.mode() == 'guozhan' ? 'hes' : 'hs', function (card) {
                        var player = _status.event.player;
                        var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                        if (mod2 != 'unchanged') return mod2;
                        var mod = game.checkMod(card, player, 'unchanged', 'cardRespondable', player);
                        if (mod != 'unchanged') return mod;
                        return true;
                    }).set('ai', function (card) {
                        var trigger = _status.event.getTrigger();
                        var player = _status.event.player;
                        var judging = _status.event.judging;
                        var result = trigger.judge(card) - trigger.judge(judging);
                        var attitude = get.attitude(player, trigger.player);
                        if (attitude == 0 || result == 0) return 0;
                        if (attitude > 0) {
                            return result - get.value(card) / 2;
                        }
                        else {
                            return -result - get.value(card) / 2;
                        }
                    }).set('judging', trigger.player.judging[0]);
                "step 1"
                if (result.bool) {
                    player.respond(result.cards, 'Tgtt_Buff_yanling', 'highlight', 'noOrdering');
                }
                else {
                    event.finish();
                }
                "step 2"
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
                    player.reduceTgttBuff('yanling')
                }
            },
            ai: {
                rejudge: true,
                tag: {
                    rejudge: 1,
                },
            },
            TgttBuffInfo: {
                naturalLose: true,
                buffRank: {
                    basic: [1, 0],
                    add: [0.5, 0],
                    random: [1, 0]
                },
                type: 'buff',
            },
        },
        //潮湿
        'chaoshi': {
            intro: {
                name: "潮湿",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>①当你受到<font color=purple>雷电</font>伤害时,此伤害+1;<br><li>②当你受到<font color=red>火焰</font>伤害时,此伤害-1;<br><li>③<font color=blue>「潮湿①」</font>/<font color=blue>「潮湿②」</font>结算后你移除1层<font color=blue>「潮湿」</font>",
            },
            forced: true,
            silent: true,
            charlotte: true,
            TaiguSkill: true,
            _priority: 3,
            filter(event, player) {
                return event.hasNature('fire') || event.hasNature('thunder')
            },
            trigger: {
                player: "damageBegin3",
            },
            content() {
                if (trigger.hasNature('fire')) {
                    trigger.num--
                    game.log(player, '受到<font color=blue>「潮湿」</font>影响,此次<font color=red>火焰</font>伤害-1')
                }
                if (trigger.hasNature('thunder')) {
                    trigger.num++
                    game.log(player, '受到<font color=blue>「潮湿」</font>影响,此次<font color=purple>雷电</font>伤害+1')
                }
                player.reduceTgttBuff('chaoshi')
            },
            ai: {
                nofire: true,
                effect: {
                    target(card, player, target, current) {
                        if (get.tag(card, 'fireDamage')) return 'zerotarget';
                    },
                },
            },
            TgttBuffInfo: {
                naturalLose: true,
                buffRank: {
                    basic: [0, 1],
                    add: [0, 1.5]
                },
                type: 'none',
            },
        },
        //荆棘
        'jingji': {
            intro: {
                name: "荆棘",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>当你于一回合内使用第4-X张牌结算完毕后,你失去1点体力并移除1层<font color=green>「荆棘」</font>",
            },
            forced: true,
            silent: true,
            charlotte: true,
            TaiguSkill: true,
            _priority: 3,
            trigger: {
                player: "useCardAfter",
            },
            filter(event, player) {
                return player.hasTgttBuff('jingji') && player.countUsed() == 4 - player.countTgttBuffNum('jingji')
            },
            content() {
                player.loseHp()
                player.reduceTgttBuff('jingji')
            },
            ai: {
                presha: true,
                pretao: true,
                nokeep: true,
            },
            mod: {
                aiOrder(player, card, num) {
                    if (typeof card == 'object' && (4 - player.countTgttBuffNum('jingji') < player.countUsed())) return num - 5 + 2 * player.countCards('h', 'tao') + player.countCards('h', 'jiu');
                },
            },
            TgttBuffInfo: {
                naturalLose: true,
                buffRank: {
                    basic: [0, 1],
                    add: [0, 1.5]
                },
                type: 'debuff',
                limit: 3,
            },
        },
        //劣势
        "lieshi": {
            intro: {
                name: "劣势",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>当你使用牌时,若你有牌,交给一名其他目标角色一张牌,你移除1层<font color=red>「劣势」</font>",
            },
            trigger: {
                player: "useCard1"
            },
            forced: true,
            charlotte: true,
            TaiguSkill: true,
            silent: true,
            _priority: 3,
            filter: (event, player) => player.countCards('he') > 0 && game.hasPlayer(target => target != player && event.targets.includes(target)),
            content() {
                'step 0'
                player.chooseCardTarget({
                    position: 'he',
                    prompt: '交给不为你的一名目标角色一张牌',
                    forced: true,
                    selectTarget: 1,
                    selectCard: 1,
                    filterTarget: (card, player, target) => target != player && trigger.targets.includes(target),
                    ai1(card) {
                        return 10 - get.value(card);
                    },
                    ai2(target) {
                        var att = get.attitude(_status.event.player, target);
                        if (_status.event.du) {
                            if (target.hasSkillTag('nodu')) return 0.5;
                            return -att;
                        }
                        if (att > 0) {
                            if (_status.event.player != target) att += 2;
                            return att + Math.max(0, 5 - target.countCards('h'));
                        }
                        return att;
                    }
                })
                'step 1'
                if (result.targets?.length) {
                    player.give(result.cards, result.targets[0], true)
                    player.reduceTgttBuff('lieshi')
                }
            },
            TgttBuffInfo: {
                naturalLose: true,
                buffRank: {
                    basic: [0, 2],
                    random: [0, 0.25],
                    randomPower: 1.5,
                },
                type: 'debuff',
                limit: 3,
                BuffReject: ["youshi"]
            },
        },
        //优势
        "youshi": {
            intro: {
                name: "优势",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>当你使用牌时,可以令一名其他目标角色交给你一张牌,你移除1层<font color=green>「优势」</font>",
            },
            trigger: {
                player: "useCard1"
            },
            forced: true,
            silent: true,
            charlotte: true,
            TaiguSkill: true,
            _priority: 3,
            filter: (event, player) => game.hasPlayer(target => target != player && event.targets.includes(target) && target.countCards('he') > 0),
            content() {
                'step 0'
                player.chooseTarget('令一名不为你的目标角色交给你一张牌', 1)
                    .set('filterTarget', (card, player, target) => target != player && trigger.targets.includes(target) && target.countCards('he') > 0)
                    .set('ai', target => -get.attitude(player, target))
                'step 1'
                if (result.targets?.length) {
                    event.target = result.targets[0]
                    event.target.chooseCard('he', true, '将一张牌交给' + get.translation(player) + '.');
                } else {
                    event.finish()
                }
                'step 2'
                if (result.bool) {
                    event.target.give(result.cards, player, true);
                    player.reduceTgttBuff('youshi')
                }
            },
            TgttBuffInfo: {
                naturalLose: true,
                buffRank: {
                    basic: [2, 0],
                    random: [0.25, 0],
                    randomPower: 1.5,
                },
                type: 'buff',
                limit: 3,
                BuffReject: ["lieshi"]
            },
        },
        //鼓舞
        "guwu": {
            intro: {
                name: "鼓舞",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>①你摸牌时,20X%的几率摸牌数+1;<br><li>②你造成伤害时,15X%的几率伤害值+1",
            },
            trigger: {
                player: "drawBegin",
                source: "damageBegin",
            },
            forced: true,
            silent: true,
            charlotte: true,
            TaiguSkill: true,
            _priority: 3,
            filter(event, player) {
                return player.hasTgttBuff('guwu')
            },
            content() {
                var onrewrite = event.triggername;
                var num = player.countTgttBuffNum('guwu');
                if (onrewrite == "drawBegin") {
                    if (Math.random() <= num * 0.2) {
                        game.log(player, '受<font color=yellow>「鼓舞」</font>影响,本次摸牌数+1');
                        trigger.num++;
                    }
                }
                if (onrewrite == "damageBegin") {
                    if (Math.random() <= num * 0.15) {
                        game.log(player, '受<font color=yellow>「鼓舞」</font>影响,本次造成的伤害值+1');
                        trigger.num++;
                    }
                }
            },
            TgttBuffInfo: {
                naturalLose: true,
                buffRank: {
                    random: [0.25, 0],
                    randomPower: 1.5,
                },
                type: 'buff',
                limit: 5,
                BuffReject: ["dimi"],
            }
        },
        //低迷
        "dimi": {
            intro: {
                name: "低迷",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>①你摸牌时,若摸牌数大于1,20X%的几率摸牌数-1;<br><li>你造成伤害时,15X%的几率伤害值-1",
            },
            trigger: {
                player: "drawBegin",
                source: "damageBegin",
            },
            forced: true,
            silent: true,
            charlotte: true,
            TaiguSkill: true,
            _priority: 3,
            filter(event, player, onrewrite) {
                if (!player.hasTgttBuff('dimi')) return false;
                if (onrewrite == "drawBegin") return event.num > 1;
                return true;
            },
            content() {
                var onrewrite = event.triggername;
                var num = player.countTgttBuffNum('dimi');
                if (onrewrite == "drawBegin") {
                    if (Math.random() <= num * 0.2) {
                        game.log(player, '受<font color=blue>「低迷」</font>影响,本次摸牌数-1');
                        trigger.num--;
                    }
                }
                if (onrewrite == "damageBegin") {
                    if (Math.random() <= num * 0.15) {
                        game.log(player, '受<font color=blue>「低迷」</font>影响,本次造成的伤害值-1');
                        trigger.num--;
                    }
                }
            },
            TgttBuffInfo: {
                naturalLose: true,
                buffRank: {
                    random: [0, 0.25],
                    randomPower: 1.5,
                },
                type: 'debuff',
                limit: 5,
                BuffReject: ["guwu"]
            },
        },
        //恐慌
        "konghuang": {
            intro: {
                name: "恐慌",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>你的非锁定技在回合内失效,你不能对其他角色使用牌",
            },
            init(player, skill) {
                player.addSkillBlocker(skill);
            },
            onremove(player, skill) {
                player.removeSkillBlocker(skill);
            },
            skillBlocker(skill, player) {
                if (!player.hasTgttBuff('konghuang')) return;
                if (!_status.currentPhase || _status.currentPhase != player) return;
                return !lib.skill[skill].charlotte && !get.is.locked(skill, player);
            },
            charlotte: true,
            TaiguSkill: true,
            forced: true,
            silent: true,
            mod: {
                playerEnabled(card, player, target) {
                    if (!player.hasTgttBuff('konghuang')) return;
                    if (player != target) return false;
                },
            },
            TgttBuffInfo: {
                naturalLose: true,
                type: 'debuff',
                limit: 5,
                buffRank: {
                    basic: [0, -2.5],
                },
            }
        },
        //诅咒
        "zuzhou": {
            intro: {
                name: "诅咒",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>你移除<font color=#600030>「诅咒」</font>时,失去X点体力",
            },
            forced: true,
            charlotte: true,
            TaiguSkill: true,
            silent: true,
            _priority: 3,
            trigger: {
                player: "reduceTgttBuffBegin2",
            },
            filter(event, player) {
                return event.buff == 'zuzhou' && player.hasTgttBuff('zuzhou')
            },
            content() {
                game.log(player, '受<font color=#600030>「诅咒」</font>影响');
                player.loseHp(player.countTgttBuffNum('zuzhou'));
            },
            TgttBuffInfo: {
                naturalLose: false,
                limit: 5,
                type: 'debuff',
                buffRank: {
                    basic: [0, -2],
                    add: [0, -2],
                },
            }
        },
        //嘲讽
        'chaofeng': {
            intro: {
                name: "嘲讽",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>当一名其他角色使用【杀】指定目标时,若你在其攻击范围内且你不是目标,你成为目标,移除1层「嘲讽」",
            },
            trigger: {
                global: "useCardToPlayer",
            },
            charlotte: true,
            TaiguSkill: true,
            forced: true,
            silent: true,
            _priority: 3,
            filter(event, player) {
                return event.player != player && event.card.name == 'sha' && !event.targets.includes(player) && event.player.inRange(player);
            },
            content() {
                trigger.parent.targets.push(player);
                trigger.player.line(player);
                player.reduceTgttBuff('chaofeng')
            },
            TgttBuffInfo: {
                naturalLose: true,
                type: 'debuff',
                BuffRank: {
                    basic: [0, 1],
                }
            },
        },
        //庇护
        'bihu': {
            intro: {
                name: "庇护",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>①当你成为其他角色普通锦囊牌的目标后,令此牌对你无效;<br><li>②你不会成为【乐不思蜀】和【兵粮寸断】的目标",
            },
            trigger: {
                target: "useCardToTargeted",
            },
            charlotte: true,
            TaiguSkill: true,
            forced: true,
            silent: true,
            _priority: 3,
            filter(event, player) {
                return get.type(event.card) == 'trick' && event.player != player;
            },
            content() {
                game.log(player, '受<font color=yellow>「庇护」</font>影响,', trigger.card, '对', trigger.target, '失效')
                trigger.parent.excluded.add(player);
            },
            mod: {
                targetEnabled(card, player, target, now) {
                    if (card.name == 'bingliang' || card.name == 'lebu') return false;
                },
            },
            ai: {
                effect: {
                    target(card, player, target, current) {
                        if (get.type(card) == 'trick') return 'zeroplayertarget';
                    },
                },
            },
            TgttBuffInfo: {
                naturalLose: true,
                limit: 1,
                type: 'buff',
                BuffRank: {
                    basic: [1, 0.1],
                }
            },
        },
        //震撼
        'zhenhan': {
            intro: {
                name: "震撼",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>①你使用牌不能指定对你以外的角色为目标;<br><li>②每回合结束时,清除所有「震撼」层数",
            },
            trigger: {
                global: 'phaseEnd'
            },
            charlotte: true,
            TaiguSkill: true,
            forced: true,
            silent: true,
            _priority: 3,
            content() {
                player.clearTgttBuff('zhenhan')
            },
            mod: {
                playerEnabled(card, player, target) {
                    if (player != target) return false;
                },
            },
            TgttBuffInfo: {
                naturalLose: false,
                limit: 1,
                type: 'debuff',
                BuffRank: {
                    basic: [0, 2],
                }
            },
        },
        //虚弱
        'xuruo': {
            intro: {
                name: "虚弱",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>当你造成伤害时,此伤害-X,并移除1层「虚弱」;<br><li>②你的回合结束后,你移除所有「虚弱」",
            },
            charlotte: true,
            TaiguSkill: true,
            trigger: {
                source: "damageBegin2",
                player: 'phaseAfter'
            },
            forced: true,
            silent: true,
            _priority: 3,
            filter(event, player) {
                return player.hasTgttBuff('xuruo')
            },
            content() {
                if (event.triggername == 'damageBegin2') {
                    trigger.num -= player.countTgttBuffNum('xuruo')
                    player.reduceTgttBuff('xuruo')
                } else {
                    player.clearTgttBuff('xuruo')
                }
            },
            TgttBuffInfo: {
                naturalLose: false,
                type: 'debuff',
                BuffRank: {
                    basic: [0, 2],
                    add: [0, 0.8],
                }
            },
        },
        //疲惫
        "pibei": {
            intro: {
                name: "疲惫",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>你的摸牌阶段额定摸牌数-1",
            },
            forced: true,
            silent: true,
            charlotte: true,
            TaiguSkill: true,
            _priority: 3,
            trigger: {
                player: 'phaseDrawBefore'
            },
            filter(event, player) {
                return player.hasTgttBuff('pibei')
            },
            content() {
                game.log(player, '受<font color=blue>「疲惫」</font>影响');
                trigger.num--;
            },
            TgttBuffInfo: {
                naturalLose: true,
                type: 'debuff',
                limit: 5,
                buffRank: {
                    basic: [0, 1],
                },
            }
        },
        //束缚
        'shufu': {
            intro: {
                name: "束缚",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>你使用牌只能指定与你距离小于4-X的角色为目标",
            },
            charlotte: true,
            TaiguSkill: true,
            mod: {
                playerEnabled(card, player, target) {
                    if (get.distance(player, target) > 4 - player.countTgttBuffNum('shufu')) return false;
                },
            },
            TgttBuffInfo: {
                naturalLose: true,
                type: 'debuff',
                limit: 3,
                BuffRank: {
                    basic: [0, 1],
                    add: [0, 0.8],
                }
            },
        },
        //失声
        'shisheng': {
            intro: {
                name: "失声",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>你的拼点牌点数-X",
            },
            charlotte: true,
            TaiguSkill: true,
            trigger: {
                player: "compare",
                target: "compare",
            },
            forced: true,
            silent: true,
            _priority: 3,
            filter(event, player) {
                if (event.player == player) return !event.iwhile;
                return player.hasTgttBuff('shisheng')
            },
            content() {
                'step 0'
                var num = player.countTgttBuffNum('shisheng');
                if (player == trigger.player) {
                    trigger.num1 -= num;
                    if (trigger.num1 < 1) trigger.num1 = 1;
                }
                else {
                    trigger.num2 -= num;
                    if (trigger.num2 < 1) trigger.num2 = 1;
                }
                game.log(player, '的拼点牌点数-' + num);
            },
            TgttBuffInfo: {
                naturalLose: true,
                type: 'debuff',
                BuffRank: {
                    basic: [0, 0.3],
                    add: [0, 0.4],
                }
            },
        },
        //睡眠
        "sleep": {
            intro: {
                name: "睡眠",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>你的非锁定技失效且不能使用或打出手牌;<br><li>②你受到伤害结算完毕后,「睡眠」层数-1",
            },
            charlotte: true,
            TaiguSkill: true,
            init(player, skill) {
                player.addSkillBlocker(skill);
            },
            onremove(player, skill) {
                player.removeSkillBlocker(skill);
            },
            skillBlocker(skill, player) {
                return !lib.skill[skill].charlotte && !get.is.locked(skill, player);
            },
            mod: {
                cardEnabled(card, player) {
                    if (player.hasTgttBuff('sleep')) return false;
                },
                cardUsable(card, player) {
                    if (player.hasTgttBuff('sleep')) return false;
                },
                cardRespondable(card, player) {
                    if (player.hasTgttBuff('sleep')) return false;
                },
                cardSavable(card, player) {
                    if (player.hasTgttBuff('sleep')) return false;
                },
            },
            trigger: {
                player: "damageAfter",
            },
            forced: true,
            silent: true,
            _priority: 3,
            filter(event, player) {
                return player.hasTgttBuff('sleep')
            },
            content() {
                player.clearTgttBuff("sleep");
            },
            ai: {
                "directHit_ai": true,
            },
            TgttBuffInfo: {
                naturalLose: true,
                limit: 1,
                type: 'debuff',
                BuffRank: {
                    basic: [0, 3.5],
                    add: [0, 0.1],
                }
            },
        },
        //疯狂
        "mad": {
            intro: {
                name: "疯狂",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>自然衰减时,你随机弃置1张牌",
            },
            charlotte: true,
            TaiguSkill: true,
            trigger: {
                player: "reduceTgttBuffBegin2",
            },
            forced: true,
            silent: true,
            _priority: 3,
            filter(event, player) {
                return player.hasTgttBuff('mad') && event.naturalLose && event.buff == 'mad'
            },
            content() {
                'step 0'
                player.randomDiscard(1, 'he', true);
            },
            TgttBuffInfo: {
                naturalLose: true,
                limit: 5,
                type: 'debuff',
                BuffRank: {
                    basic: [0, 1],
                    add: [0, 0.1],
                }
            },
        },
        //龙焰
        'dragonfire': {
            intro: {
                name: "龙焰",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>①当你获得<font color=black>「龙焰」</font>时,你击碎1个勾玉;<br><li>②自然衰减时,你受到1点无来源<font color=red>火焰</font>伤害",
            },
            charlotte: true,
            TaiguSkill: true,
            trigger: {
                player: ["addTgttBuffBegin1", "reduceTgttBuffBegin2"],
            },
            forced: true,
            silent: true,
            _priority: 3,
            filter(event, player, onrewrite) {
                if (onrewrite == "addTgttBuffBegin1") {
                    return event.buff == 'dragonfire'
                } else {
                    return player.hasTgttBuff('dragonfire') && event.naturalLose && event.buff == 'dragonfire'
                }
            },
            content() {
                'step 0'
                var onrewrite = event.triggername
                if (onrewrite == "addTgttBuffBegin1") {
                    player.Tgttbroken()
                    event.finish()
                } else {
                    game.log(player, '受<font color=black>「龙焰」</font>影响');
                    player.damage(1, 'fire', 'nosource')
                }
            },
            TgttBuffInfo: {
                naturalLose: true,
                limit: 3,
                type: 'debuff',
                BuffRank: {
                    basic: [0, 1],
                    add: [0, 0.1],
                }
            },
        },
        //易伤
        "yishang": {
            intro: {
                name: "易伤",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>你受到伤害时,伤害值+1,移除1层<font color=red>「易伤」</font>",
            },
            charlotte: true,
            TaiguSkill: true,
            trigger: {
                player: "damageBegin",
            },
            forced: true,
            silent: true,
            _priority: 3,
            filter(event, player) {
                return player.hasTgttBuff("yishang")
            },
            content() {
                'step 0'
                game.log(player, '受<font color=red>「易伤」</font>影响,本次受到的伤害值+1');
                trigger.num++;
                'step 1'
                player.reduceTgttBuff("yishang");
            },
            TgttBuffInfo: {
                naturalLose: true,
                limit: 3,
                type: 'debuff',
                buffRank: {
                    basic: [0, 3],
                    add: [0, 0.1],
                },
                BuffReject: ['jianren'],
            },
        },
        //坚韧
        "jianren": {
            intro: {
                name: "坚韧",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>你受到伤害时,伤害值-1,移除1层<font color=green>「坚韧」</font>",
            },
            charlotte: true,
            TaiguSkill: true,
            trigger: {
                player: "damageBegin2"
            },
            forced: true,
            silent: true,
            _priority: 3,
            filter(event, player) {
                return player.hasTgttBuff("jianren")
            },
            content() {
                'step 0'
                game.log(player, '受<font color=green>「坚韧」</font>影响,本次受到的伤害值-1');
                trigger.num--;
                player.reduceTgttBuff("jianren");
            },
            TgttBuffInfo: {
                naturalLose: true,
                limit: 3,
                type: 'buff',
                buffRank: {
                    basic: [3, 0],
                    add: [0.1, 0],
                },
                BuffReject: ['yishang'],
            },
        },
        //硬化
        "yinghua": {
            intro: {
                name: "硬化",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>当你受到不小于2点伤害时,令此伤害改为1,移除1层<font color=yellow>「硬化」</font>",
            },
            charlotte: true,
            TaiguSkill: true,
            trigger: {
                player: "damageBegin4",
            },
            forced: true,
            silent: true,
            _priority: 3,
            filter(event, player) {
                return player.hasTgttBuff("yinghua") && event.num >= 2
            },
            content() {
                'step 0'
                game.log(player, '受<font color=green>「硬化」</font>影响,本次受到的伤害值改为1');
                trigger.num = 1;
                'step 1'
                player.reduceTgttBuff("yinghua");
            },
            _priority: -26,
            TgttBuffInfo: {
                naturalLose: true,
                limit: 3,
                type: 'buff',
                buffRank: {
                    basic: [3, 0],
                    add: [0.1, 0],
                },
            },
        },
        //压制
        "yazhi": {
            intro: {
                name: "压制",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>你的攻击范围-X",
            },
            charlotte: true,
            TaiguSkill: true,
            mod: {
                attackRange(player, range) {
                    if (player.hasTgttBuff('yazhi')) return range - player.countTgttBuffNum('yazhi');
                },
            },
            TgttBuffInfo: {
                naturalLose: true,
                type: 'debuff',
                buffRank: {
                    basic: [0, 1],
                    add: [0, 0.5],
                },
            }
        },
        //燃烧
        "ranshao": {
            intro: {
                name: "燃烧",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>①当你受到<font color=blue>寒冰</font>伤害时,你移除X层<font color=red>「燃烧」</font>;<br><li>②自然衰减时,你受到1点无来源<font color=red>火焰</font>伤害",
            },
            charlotte: true,
            TaiguSkill: true,
            trigger: {
                player: ["damage", "reduceTgttBuffBegin2"],
            },
            forced: true,
            silent: true,
            _priority: 3,
            filter(event, player, onrewrite) {
                if (!player.hasTgttBuff("ranshao")) return false;
                if (onrewrite == 'damage') return event.nature && event.nature == 'ice';
                else return event.buff == 'ranshao' && event.naturalLose
            },
            content() {
                var onrewrite = event.triggername;
                if (onrewrite == 'damage') {
                    player.clearTgttBuff('ranshao', num)
                } else {
                    player.damage('fire', 'nosource');
                }
            },
            TgttBuffInfo: {
                naturalLose: true,
                type: 'debuff',
                buffRank: {
                    basic: [0, 2],
                    add: [0, 0.2],
                },
                BuffReject: ['dongshang']
            }
        },
        //预见
        "yujian": {
            intro: {
                name: "预见",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>①你的回合外,当前回合角色手牌对你可见;<br><li>②你的回合内,你可以在前三次摸牌前卜算X+1",
            },
            charlotte: true,
            TaiguSkill: true,
            trigger: {
                player: "drawBefore",
            },
            usable: 3,
            forced: true,
            silent: true,
            _priority: 3,
            filter(event, player) {
                return player.hasTgttBuff("yujian") && _status.currentPhase == player
            },
            content() {
                'step 0'
                var num = player.countTgttBuffNum("yujian")
                player.chooseToGuanxing(num + 1);
            },
            TgttBuffInfo: {
                naturalLose: true,
                type: 'buff',
                buffRank: {
                    basic: [0.6, 0],
                }
            },
            ai: {
                viewHandcard: true,
                skillTagFilter(player, tag, arg) {
                    if (!player.hasTgttBuff('yujian')) return false;
                    if (player == arg || _status.currentPhase != arg) return false;
                },
            }
        },
        //迷茫
        "mimang": {
            intro: {
                name: "迷茫",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>你不能使用或打出实体的【杀】和【无懈可击】",
            },
            charlotte: true,
            TaiguSkill: true,
            mod: {
                cardEnabled2(card, player) {
                    if (player.countTgttBuffNum("mimang") > 0) {
                        if (card.name == 'sha' || card.name == 'wuxie') return false;
                    }
                },
            },
            TgttBuffInfo: {
                naturalLose: true,
                limit: 3,
                type: 'debuff',
                buffRank: {
                    basic: [0, 1.5],
                    add: [0, 0.1],
                }
            },
        },
        //亢奋
        "kangfen": {
            intro: {
                name: "亢奋",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>你使用【杀】无次数限制;<br><li>②当你使用【杀】结算完毕后,你弃置受伤角色的X张牌,你移除一层<font color=red>「亢奋」</font>;<br><li>③你的攻击范围+X,你的手牌上限-X",
            },
            charlotte: true,
            TaiguSkill: true,
            trigger: {
                player: "useCardAfter",
            },
            forced: true,
            silent: true,
            _priority: 3,
            filter(event, player) {
                return player.hasTgttBuff('kangfen') && event.card.name == 'sha'
            },
            content() {
                'step 0'
                var num = player.countTgttBuffNum("kangfen");
                var damaged = player.getHistory('sourceDamage', function (evt) {
                    return evt.card == trigger.card
                }).map(i => i.player)
                for (var i of damaged) {
                    if (i.countDiscardableCards(player, 'he') > 0) player.discardPlayerCard(i, num, 'he', true);
                }
                'step 1'
                player.reduceTgttBuff('kangfen')
            },
            mod: {
                cardUsable(card, player, num) {
                    if (card.name == 'sha' && player.hasTgttBuff('kangfen')) return Infinity;
                },
                attackRange(player, range) {
                    if (player.countTgttBuffNum("kangfen") > 0) {
                        var num = player.countTgttBuffNum("kangfen");
                        return range + num;
                    }
                },
                maxHandcard(player, num) {
                    if (player.countTgttBuffNum("kangfen") > 0) {
                        var numx = player.countTgttBuffNum("kangfen");
                        return num - numx;
                    }
                },
            },
            TgttBuffInfo: {
                naturalLose: true,
                type: 'none',
                buffRank: {
                    basic: [1, 0],
                    add: [1.15, 0.4],
                },
            }
        },
        //嗜血
        "shixue": {
            intro: {
                name: "嗜血",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>你造成伤害后,回复一点体力;你回复体力后,移除一层<font color=red>「嗜血」</font>",
            },
            charlotte: true,
            TaiguSkill: true,
            trigger: {
                source: "damageAfter",
                player: "recoverAfter",
            },
            forced: true,
            silent: true,
            _priority: 3,
            filter(event, player) {
                return player.hasTgttBuff("shixue")
            },
            content() {
                var onrewrite = event.triggername;
                if (onrewrite == 'damageAfter') {
                    if (player.getDamagedHp() > 0) {
                        game.log(player, '受<font color=red>「嗜血」</font>影响');
                        player.recover();
                    }
                } else {
                    player.reduceTgttBuff('shixue')
                }
            },
            TgttBuffInfo: {
                naturalLose: false,
                type: 'buff',
                limit: 4,
                buffRank: {
                    basic: [2, 0],
                },
            }
        },
        //重伤
        "zhongshang": {
            intro: {
                name: "重伤",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>你回复体力时,移除一层<font color=green>「重伤」</font>并令此次回复量-1",
            },
            charlotte: true,
            TaiguSkill: true,
            trigger: {
                player: ["recoverBegin"],
            },
            forced: true,
            silent: true,
            _priority: 3,
            filter(event, player) {
                return player.hasTgttBuff('zhongshang')
            },
            content() {
                if (trigger.name == 'recover') {
                    game.log(player, '受<font color=green>「重伤」</font>影响,本次回复量-1.');
                    player.reduceTgttBuff('zhongshang')
                    trigger.num--
                }
            },
            TgttBuffInfo: {
                naturalLose: true,
                type: 'debuff',
                buffRank: {
                    basic: [0, 2],
                },
            }
        },
        //中毒
        "zhongdu": {
            intro: {
                name: "中毒",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>①你回复体力后,移除一层<font color=green>「中毒」</font>;<br><li>②自然衰减时,失去一点体力",
            },
            charlotte: true,
            TaiguSkill: true,
            trigger: {
                player: ["recoverAfter", "reduceTgttBuffBegin2"],
            },
            forced: true,
            silent: true,
            _priority: 3,
            filter(event, player, onrewrite) {
                if (!player.hasTgttBuff('zhongdu')) return false
                if (onrewrite == 'recoverAfter') return true
                else return event.buff == 'zhongdu' && event.naturalLose == true;
            },
            content() {
                if (trigger.name == 'recover') {
                    player.reduceTgttBuff('zhongdu')
                } else {
                    player.loseHp()
                }
            },
            TgttBuffInfo: {
                naturalLose: true,
                type: 'debuff',
                buffRank: {
                    basic: [0, 2],
                },
            }
        },
        //祈愿 
        "qiyuan": {
            intro: {
                name: "祈愿",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>①你的判定会朝着对你有利的方向倾斜;<br><li>②判定完成后,移除一层<font color=yellow>「祈愿」</font>",
            },
            charlotte: true,
            TaiguSkill: true,
            trigger: {
                player: "judgeBegin",
            },
            forced: true,
            silent: true,
            _priority: 3,
            filter(event, player) {
                return player.hasTgttBuff('qiyuan') && !event.directresult;
            },
            content() {
                'step 0'
                var tempcard = false, temp = -Infinity;
                for (var i = 0; i < ui.cardPile.childElementCount; i++) {
                    var card = ui.cardPile.childNodes[i];
                    var temp2 = trigger.judge(card);
                    if (temp2 > temp) {
                        tempcard = card;
                        temp = temp2;
                    }
                }
                if (tempcard) trigger.directresult = tempcard;
                'step 1'
                player.reduceTgttBuff('qiyuan')
            },
            ai: {
                luckyStar: true,
            },
            TgttBuffInfo: {
                naturalLose: true,
                type: 'buff',
                buffRank: {
                    basic: [0.5, 0],
                    random: [0.3, 0],
                    randomPower: 2
                },
                limit: 3,
                BuffReject: ['zaie']
            }
        },
        //灾厄 
        "zaie": {
            intro: {
                name: "灾厄",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>①你的判定会朝着对你不利的方向倾斜;<br><li>②判定完成后,移除一层<font color=purple>「灾厄」</font>",
            },
            charlotte: true,
            TaiguSkill: true,
            trigger: {
                player: "judgeBegin",
            },
            forced: true,
            silent: true,
            _priority: 3,
            filter(event, player) {
                return player.hasTgttBuff('zaie') && !event.directresult;
            },
            content() {
                'step 0'
                var tempcard = false, temp = -Infinity;
                for (var i = 0; i < ui.cardPile.childElementCount; i++) {
                    var card = ui.cardPile.childNodes[i];
                    var temp2 = trigger.judge(card);
                    if (temp2 < temp) {
                        tempcard = card;
                        temp = temp2;
                    }
                }
                if (tempcard) trigger.directresult = tempcard;
                'step 1'
                player.reduceTgttBuff('zaie')
            },
            ai: {
                luckyStar: false,
                BadLuck: true,
            },
            TgttBuffInfo: {
                naturalLose: true,
                type: 'debuff',
                buffRank: {
                    basic: [0, 0.5],
                    random: [0, 0.3],
                    randomPower: 2
                },
                limit: 3,
                BuffReject: ['qiyuan']
            }
        },
        //净化
        "jinghua": {
            intro: {
                name: "净化",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>回合开始时,移除一层<font color=#FFF8D7>「净化」</font>及所有<font color=red>" + get.tgttIntroduce('NgBuff') + "</font>各1层",
            },
            charlotte: true,
            TaiguSkill: true,
            trigger: {
                player: "phaseBegin",
            },
            forced: true,
            silent: true,
            _priority: 3,
            filter(event, player) {
                return get.TgttBuffList(player, 'debuff').length && player.hasTgttBuff('jinghua')
            },
            content() {
                'step 0'
                player.reduceTgttBuff('jinghua')
                'step 1'
                game.log(player, '受<font color=#FFF8D7>「净化」</font>影响');
                for (var i in lib.TgttBuff) {
                    if (player.countTgttBuffNum(i) > 0 && get.TgttBuffInfo(i, 'type') == 'debuff') {
                        player.reduceTgttBuff(i)
                    }
                }
            },
            TgttBuffInfo: {
                naturalLose: false,
                type: 'buff',
                buffRank: {
                    basic: [0, 0],
                },
            }
        },
        //麻痹
        "mabi": {
            intro: {
                name: "麻痹",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>①你不能响应其他角色对你使用的牌;<br><li>②你使用♣️️牌时,移除一层<font color=red>「麻痹」</font>",
            },
            charlotte: true,
            TaiguSkill: true,
            trigger: {
                player: "useCard",
                global: "useCardToPlayered",
            },
            forced: true,
            silent: true,
            _priority: 3,
            filter(event, player) {
                return player.hasTgttBuff("mabi")
            },
            content() {
                if (trigger.name == 'useCard') {
                    if (trigger.card.suit == 'club') player.reduceTgttBuff('mabi');
                }
                else {
                    if (trigger.player != player && trigger.target == player) {
                        game.log(player, '受<font color=red>「麻痹」</font>影响');
                        game.log(player, '无法响应', trigger.card);
                        trigger.parent.directHit.add(trigger.target);
                    }
                }
            },
            TgttBuffInfo: {
                naturalLose: false,
                type: 'debuff',
                buffRank: {
                    basic: [0, 1.5],
                },
                BuffReject: ['mingjie'],
            }
        },
        //敏捷
        "mingjie": {
            intro: {
                name: "敏捷",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>当你成为其他角色伤害类牌的目标时,移除一层<font color=blue>「敏捷」</font>并进行一次判定,若结果为黑色,此牌对你无效",
            },
            charlotte: true,
            TaiguSkill: true,
            trigger: {
                target: "useCardToPlayered",
            },
            forced: true,
            silent: true,
            _priority: 3,
            filter(event, player) {
                return player.hasTgttBuff("mingjie") && get.tag(event.card, 'damage') && event.player != player
            },
            content() {
                'step 0'
                player.reduceTgttBuff('mingjie')
                'step 1'
                game.log(player, '受<font color=gray>「敏捷」</font>影响');
                player.judge('Tgtt_Buff_mingjie', function (card) { return (get.color(card) == 'black') ? 1.5 : -0.5 }).judge2 = function (result) {
                    return result.bool;
                }
                'step 2'
                if (result.judge > 0) {
                    trigger.excluded.push(player);
                }
            },
            TgttBuffInfo: {
                naturalLose: true,
                type: 'buff',
                limit: 3,
                buffRank: {
                    basic: [1.5, 0],
                    random: [0.5, 0]
                },
                BuffReject: ['mabi', 'chihuan'],
            }
        },
        //迟缓
        'chihuan': {
            intro: {
                name: "迟缓",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>当你成为其他角色伤害类牌的唯一目标时,移除一层<font color=gray>「迟缓」</font>并进行一次判定,若结果为黑色,此牌结算两次",
            },
            charlotte: true,
            TaiguSkill: true,
            trigger: {
                target: "useCardToPlayered",
            },
            forced: true,
            silent: true,
            _priority: 3,
            filter(event, player) {
                return player.hasTgttBuff("chihuan") && get.tag(event.card, 'damage') && event.player != player && event.targets.length == 1
            },
            content() {
                'step 0'
                player.reduceTgttBuff('chihuan')
                'step 1'
                game.log(player, '受<font color=gray>「迟缓」</font>影响');
                player.judge('Tgtt_Buff_chihuan', function (card) { return (get.color(card) == 'black') ? -2 : 0 }).judge2 = function (result) {
                    if (result.bool == false) return true;
                    return false;
                }
                'step 2'
                if (result.judge < 0) {
                    trigger.getParent('useCard').effectCount++;
                }
            },
            TgttBuffInfo: {
                naturalLose: true,
                type: 'debuff',
                limit: 3,
                buffRank: {
                    basic: [0, 1.5],
                    random: [0, 0.5]
                },
                BuffReject: ['mingjie'],
            }
        },
        //出血
        'chuxue': {
            intro: {
                name: "出血",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>当你的<font color=red>「出血」</font>层数大于你的体力值时,你移除所有出血层数,流失X/2点体力(向下取整且至少为1)",
            },
            charlotte: true,
            TaiguSkill: true,
            trigger: {
                player: ["addTgttBuffAfter", 'changeHp', "reduceTgttBuffAfter"],
            },
            forced: true,
            silent: true,
            _priority: 3,
            filter(event, player, onrewrite) {
                if (!player.hasTgttBuff('chuxue')) return false
                return player.countTgttBuffNum('chuxue') > player.hp
            },
            content() {
                var num = player.countTgttBuffNum('chuxue')
                player.clearTgttBuff('chuxue')
                player.loseHp(Math.max(1, Math.floor(num / 2)))
            },
            TgttBuffInfo: {
                naturalLose: true,
                type: 'debuff',
                buffRank: {
                    basic: [0, 0.9],
                    add: [0, 1],
                },
            }
        },
        //冻伤
        'dongshang': {
            intro: {
                name: "冻伤",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>当你受到伤害时,弃置1张手牌,若此伤害为<font color=red>火焰</font>伤害,你减少1层<font color=blue>「冻伤」</font>并令此伤害+1",
            },
            charlotte: true,
            TaiguSkill: true,
            trigger: {
                player: "damageBegin2",
            },
            forced: true,
            silent: true,
            _priority: 3,
            filter(event, player) {
                return player.hasTgttBuff("dongshang")
            },
            content() {
                if (player.countCards('h') > 0) {
                    player.chooseToDiscard('受到<font color=blue>「冻伤」</font>影响,弃置1张手牌', 'h', true)
                    game.log(player, '受到<font color=blue>「冻伤」</font>影响,弃置1张手牌')
                }
                if (trigger.nature == 'fire') {
                    player.reduceTgttBuff('dongshang')
                    trigger.num += 1
                }
            },
            TgttBuffInfo: {
                naturalLose: true,
                type: 'debuff',
                buffRank: {
                    basic: [0, 0.8],
                    add: [0, 0.2],
                },
                BuffReject: ['ranshao']
            }
        },
        //回生
        'huisheng': {
            intro: {
                name: "回生",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>当你进入濒死状态时,移除一层<font color=green>「回生」</font>并将体力回复至1点",
            },
            charlotte: true,
            TaiguSkill: true,
            trigger: {
                player: "dying",
            },
            forceDie: true,
            forced: true,
            silent: true,
            _priority: 3,
            filter(event, player) {
                return player.hasTgttBuff('huisheng')
            },
            content() {
                player.reduceTgttBuff('huisheng')
                player.recover(1 - player.hp);
            },
            ai: {
                save: true,
                threaten: 0.6
            },
            TgttBuffInfo: {
                naturalLose: true,
                limit: 1,
                type: 'buff',
                buffRank: {
                    basic: [4, 0],
                },
            },
        },
        //免疫
        'mianyi': {
            intro: {
                name: "免疫",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>①当你受到伤害时,移除一层<font color=gray>「免疫」</font>并取消之",
            },
            charlotte: true,
            TaiguSkill: true,
            trigger: {
                player: 'damageBegin2'
            },
            forced: true,
            silent: true,
            _priority: 3,
            filter(event, player) {
                return player.hasTgttBuff('mianyi')
            },
            content() {
                player.reduceTgttBuff('mianyi')
                trigger.cancel();
            },
            ai: {
                nofire: true,
                nothunder: true,
                nodamage: true,
                effect: {
                    target(card, player, target, current) {
                        if (get.tag(card, 'damage')) return [0, 0];
                    }
                },
            },
            TgttBuffInfo: {
                naturalLose: true,
                limit: 2,
                type: 'buff',
                buffRank: {
                    basic: [2, 0],
                },
                BuffReject: ['yishang'],
            },
        },
        //潜行
        'qianxing': {
            intro: {
                name: "潜行",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>①你不能成为其他角色的卡牌的目标;<br><li>②当你对其他角色使用牌时,你清除「潜行」层数",
            },
            trigger: {
                player: "useCard",
            },
            charlotte: true,
            TaiguSkill: true,
            filter(event, player) {
                return player.hasTgttBuff('qianxing') && event.target != player
            },
            forced: true,
            silent: true,
            _priority: 3,
            content() {
                player.clearTgttBuff('qianxing')
            },
            mod: {
                targetEnabled(card, player, target) {
                    if (player != target) return false;
                },
            },
            TgttBuffInfo: {
                naturalLose: true,
                limit: 1,
                type: 'buff',
                buffRank: {
                    basic: [2, 0],
                },
            }
        },
        //混乱
        'hunluan': {
            intro: {
                name: "混乱",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>你的行为不受控制",
            },
            charlotte: true,
            TaiguSkill: true,
            TgttBuffInfo: {
                naturalLose: true,
                limit: 2,
                type: 'debuff',
                buffRank: {
                    naturalLose: true,
                    basic: [0, 1],
                    random: [0.1, 0.9],
                    randomPower: 3,
                },
            }
        },
        //灵秘
        'lingmi': {
            intro: {
                name: "灵秘",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>①你的所有牌均可重铸;<br><li>②当你重铸一张原本不可重铸的牌时,「灵秘」层数-1",
            },
            trigger: {
                player: 'recastAfter'
            },
            charlotte: true,
            TaiguSkill: true,
            forced: true,
            silent: true,
            _priority: 3,
            filter(event, player) {
                return event.cards.some(card => {
                    var info = get.info(card), recastable = info.recastable || info.chongzhu
                    return !Boolean(typeof recastable == 'function' ? recastable(_status.event, player) : recastable);
                })
            },
            content() {
                var num = trigger.cards.filter(i => {
                    var info = get.info(i), recastable = info.recastable || info.chongzhu
                    return !Boolean(typeof recastable == 'function' ? recastable(_status.event, player) : recastable);
                }).length
                player.reduceTgttBuff('lingmi', num)
            },
            mod: {
                cardRecastable(card, player) {
                    if (player.hasTgttBuff('lingmi')) return true
                }
            },
            TgttBuffInfo: {
                naturalLose: false,
                buffRank: {
                    basic: [0.5, 0]
                },
                type: 'buff',
            },
        },
        //醉酒
        'zuijiu': {
            intro: {
                name: "醉酒",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>当你使用【杀】时,你移去X层「醉酒」,此【杀】伤害+X",
            },
            trigger: {
                player: "useCard1",
            },
            filter(event, player) {
                return event.card && event.card.name == 'sha';
            },
            charlotte: true,
            TaiguSkill: true,
            forced: true,
            silent: true,
            _priority: 3,
            content() {
                var num = player.countTgttBuffNum('zuijiu')
                if (!trigger.baseDamage) trigger.baseDamage = 1;
                trigger.baseDamage += num
                player.reduceTgttBuff('zuijiu', num)
            },
            TgttBuffInfo: {
                naturalLose: true,
                buffRank: {
                    basic: [1, 0],
                    randomPower: 0.2
                },
                type: 'buff',
            },
        },
        //盈能
        'yingneng': {
            intro: {
                name: "盈能",
                content: "<li><font color=orange>" + get.tgttIntroduce('Suodingji') + ",</font><br><li>当你消耗魔力时,移除Y层盈能,减少等量魔力消耗(Y为你此次消耗的魔力值)",
            },
            trigger: {
                player: "consumefrMpBegin1",
            },
            charlotte: true,
            TaiguSkill: true,
            forced: true,
            silent: true,
            _priority: 3,
            content() {
                var num = Math.min(player.countTgttBuffNum('yingneng'), trigger.num)
                trigger.num -= num
                player.reduceTgttBuff('yingneng', num)
            },
            TgttBuffInfo: {
                naturalLose: true,
                buffRank: {
                    basic: [0.5, 0],
                    randomPower: 0.2
                },
                type: 'buff',
            },
        }
        /*新Buff创建模板
                //「」
                "Buff名称":{
                    intro:{
                        name:"Buff名称翻译",
                        content:"Buff描述",
                        (Buff名称翻译和描述现在与这里挂钩)
                    },
                    trigger:{
                    },
                    forced:true,
                    silent:true,
                    priority:3,//这三项是默认的.//PS:别再写奇奇怪怪的优先度了好吗
                    filter:function (event,player){
                        if(get.TgttBuffNum(player,"_Tgtt_Buff_Buff名称")==0) return false;、
                    },
                    content:function (){
                    },
                    TgttBuffInfo:{
                        naturalLose:(是否为自然衰减类Buff,不是可省略此句或填false),
                        BuffRank:{
                            basic:[0,0],(这里写不受层数影响的收益)
                            random:[0,0],(这里写受层数和随机数影响的收益,结果值填概率)
                            randomPower:0,(这里写倍率,与上面random挂钩)
                            add:[0,0],(这里写受层数影响的收益,结果值不需取整)
                        },(第一个数为正收益,第二个为负收益.PS:基本收益论:一牌1收益,一血2收益)
                        type:'buff'(填写增益:buff或者减益:debuff)
                        BuffReject:[],(与之冲突的Buff,在附加时若有与之冲突的Buff,则会先削减冲突的Buff)
                    }
                }
        */
    };
    get.randomPercent = function (probability) {
        if (probability > 1) {
        } else if (probability < 0) {
        }
        // 生成一个介于 0 到 1 之间的随机数
        var randomValue = Math.random();
        // 如果随机数小于等于概率值,则返回 true,否则返回 false
        return randomValue <= probability;
    }
    get.TgttBuffLimit = function (buff) {
        return get.TgttBuffInfo(buff, 'limit')
    }
    get.isTgttBuffNatualLose = function (buff) {
        return get.TgttBuffInfo(buff, 'naturalLose')
    }
    get.TgttBufftype = function (buff) {
        if (!get.TgttBuffInfo(buff, 'type')) return 'none'
        return get.TgttBuffInfo(buff, 'type')
    }
    lib.element.player.underTgttBuffLimit = function (buff) {
        var player = this
        if (player.countTgttBuffNum(buff) < get.TgttBuffLimit) {
            return true
        } else {
            return false
        }
    }
    get.deepClone = function (obj, newObj) {
        var newObj = newObj || {};
        for (let key in obj) {
            if (typeof obj[key] == 'object') {
                newObj[key] = (obj[key].constructor === Array) ? [] : {}
                get.deepClone(obj[key], newObj[key]);
            } else {
                newObj[key] = obj[key]
            }
        }
        return newObj;
    }
    get.TgttBuffcontent = function (name) {
        var info = lib.TgttBuff[name].TgttBuffInfo
        var str = ''
        if (info.naturalLose) {
            str += '<li>自然衰减:<b>是</b>'
        } else {
            str += '<li>自然衰减:<b>否</b>'
        }
        if (info.type == 'buff') {
            str += '<li>类型:增益'
        } else if (info.type == 'debuff') {
            str += '<li>类型:减益'
        } else if (info.type == 'none') {
            str += '<li>类型:中立'
        }
        if (info.limit) {
            str += '<li>上限:' + info.limit
        } else {
            str += '<li>无上限'
        }
        if (info.BuffReject) {
            var buffname = info.BuffReject.map(function (i) {
                return '「' + lib.TgttBuff[i].intro.name + '」'
            })
            str += '<li>冲突Buff:' + buffname.join('、')
        }
        return str
    }
    for (var i in lib.TgttBuff) {
        var Buff = lib.TgttBuff[i];
        var name = 'Tgtt_Buff_' + i;
        lib.TgttBuff[i].intro.content = get.TgttBuffcontent(i) + lib.TgttBuff[i].intro.content
        lib.skill[name] = get.deepClone(Buff)
        lib.skill[name].marktext = "<img style=width:28px src=extension/太古天庭/image/Buff/" + i + ".png>";
        lib.translate[name] = Buff.intro.name;
        lib.translate[name + '_name'] = Buff.intro.name;
        lib.translate[name + '_name_info'] = Buff.intro.content;
    }
    /*
        这里请注意,Buff现在有三个名称:
            ①在lib.TgttBuff中的是<Buff名>
            ②Buff对应的技能名是<Tgtt_Buff_Buff名>
            ③在技能引用的时候是<Tgtt_Buff_Buff名_name>
        不过不用担心,在使用下述方法时,所有方法都会用到get.TgttBuffName,
        以便对你写的Buff名称进行转化,所以在使用的时候,①和②这两种写法可以混用
        具体支持的写法类型请看下面的注释
    */
    lib.translate["_dieClearTgttBuff"] = "死亡清除";
    lib.skill["_dieClearTgttBuff"] = {
        trigger: {
            player: "die",
        },
        charlotte: true,
        TaiguSkill: true,
        silent: true,
        forced: true,
        forceDie: true,
        popup: false,
        _priority: 999,
        content() {
            'step 0'
            event.buffList = Object.keys(lib.TgttBuff)
            'step 1'
            var buff = event.buffList.shift()
            if (player.hasTgttBuff(buff)) {
                player.clearTgttBuff(buff);
            } else {
                if (event.buffList.length) event.redo()
            }
        }
    }
    lib.translate["_naturalLoseTgttBuff"] = "自然衰减";
    lib.skill["_naturalLoseTgttBuff"] = {
        trigger: {
            player: "phaseAfter",
        },
        charlotte: true,
        TaiguSkill: true,
        silent: true,
        forced: true,
        popup: false,
        lastDo: true,
        filter(event, player) {
            return get.TgttBuffList(player).length
        },
        content() {
            'step 0'
            event.buffList = Object.keys(lib.TgttBuff)
            'step 1'
            var buff = event.buffList.shift()
            if (lib.TgttBuff[buff].TgttBuffInfo.naturalLose && player.hasTgttBuff(buff)) {
                if (!game.checkMod(player, buff, 'naturalLose', false, 'TgttBuffIgnore', player)) {
                    player.reduceTgttBuff(buff, 1, 'naturalLose')
                }
            }
            'step 2'
            if (event.buffList.length) event.goto(1)
        }
    };
    get.tgttBuffs = function (filter) {
        if (typeof filter == 'function') return Object.keys(lib.TgttBuff).filter(i => filter(i))
        else return Object.keys(lib.TgttBuff)
    }
    //获取Buff的代码名(除这里之外一般用不上)
    //现在支持的写法:_Tgtt_Buff_Buff名、Buff名、Tgtt_Buff_Buff名
    get.TgttBuffName = function (name, iscomplete) {
        if (typeof name != 'string') return;
        var Buff = name;
        if (Buff.indexOf('_') == 0) Buff = Buff.slice(1);
        if (iscomplete !== false) {
            if (Buff.indexOf('Tgtt_Buff_') == -1) Buff = 'Tgtt_Buff_' + Buff;
        } else {
            if (Buff.indexOf('Tgtt_Buff_') == 0) Buff = Buff.replace('Tgtt_Buff_', '');
        }
        return Buff;
    };
    get.TgttBufflist = function () {
        var caption;
        caption = 'Buff清单';
        var dialog = ui.create.dialog(caption, 'hidden');
        dialog.style.fontFamily = 'shousha'
        dialog.style.fontSize = '30px'
        var exit = ui.create.div('.exit', dialog);
        dialog.classList.add('static');
        dialog.classList.add('tgttbufflist');
        dialog.classList.remove('hidden');
        ui.window.appendChild(dialog);
        exit.onclick = function () {
            dialog.remove();
        }
        var create = function (buff) {
            // 创建一个包含图片的 <div> 元素
            var container = document.createElement('div')
            container.style.borderBottom = '1px solid transparent'
            container.style.width = '100%'
            container.style.borderImage = 'linear-gradient(to left, rgb(255 255 255 / 0%), rgb(255, 255, 255), rgb(255 255 255 / 0%)) 0.5 / 1 / 0 stretch'
            dialog.content.appendChild(container)
            var name = document.createElement('div')
            name.style.position = 'relative'
            name.style.fontSize = '20px'
            name.innerHTML = get.TgttBuffIntro(buff).name
            container.appendChild(name)
            var imageDiv = document.createElement('div');
            imageDiv.classList.add('image-container'); // 可以定义一个样式类来设置该 div 的样式
            var img = document.createElement('img');
            img.src = 'extension/太古天庭/image/Buff/' + buff + '.png'
            img.classList.add('square-image'); // 可以定义一个样式类来设置图片的样式
            container.appendChild(imageDiv)
            imageDiv.appendChild(img);
            var h3 = document.createElement('h3');
            var str = get.TgttBuffIntro(buff).content;
            h3.innerHTML = str;
            h3.style.textAlign = 'left'
            h3.style.marginLeft = '5%'
            container.appendChild(h3)
        }
        for (var i in lib.TgttBuff) {
            create(i);
        }
    }
    //获取中文解释
    get.TgttBuffIntro = function (name) {
        name = get.TgttBuffName(name, false)
        return lib.TgttBuff[name].intro
    }
    //获取Buff的层数
    get.TgttBuffNum = function () {
        for (var i = 0; i < arguments.length; i++) {
            if (get.itemtype(arguments[i]) == 'player') {
                var player = arguments[i]
            } else {
                var Buff = get.TgttBuffName(arguments[i]);
            }
        }
        if (!player.storage[Buff] || player.storage[Buff] < 0) return 0;
        return player.storage[Buff];
    };
    //获取Buff的rank值(给ai判断用)
    get.TgttBuffRank = function (player, name, income, plies) {
        if (player.isImmTgttBuff(name)) return 0
        name = get.TgttBuffName(name, false);
        var Buff = get.TgttBuffName(name);
        var list = [lib.skill[Buff].TgttBuffInfo.BuffRank];
        player.getSkills(null, false, false).filter(function (i) {
            if (lib.skill[i] && lib.skill[i].ai && lib.skill[i].ai.TgttBuffRank_extra &&
                lib.skill[i].ai.TgttBuffRank_extra[name]) {
                list.push(lib.skill[i].ai.TgttBuffRank_extra[name]);
            }
        });
        if (!plies || typeof plies != 'number') {
            if (income && typeof income == 'number') plies = income;
            else plies = get.TgttBuffNum(player, Buff);
        }
        var num = 0;
        for (var i = 0; i < list.length; i++) {
            var rank = list[i];
            if (list[i].immunity === true) {
                return 0;
            }
            if (income !== false) {
                if (rank.basic) num += rank.basic[0];
                if (rank.add) num += rank.add[0] * plies;
                var random2 = 1;
                if (rank.randomPower) {
                    if (Array.isArray(rank.randomPower)) random2 = rank.randomPower[0];
                    else random2 = rank.randomPower;
                }
                if (rank.random) num += Math.min(1, rank.random[0] * plies) * random2;
            }
            if (income !== true) {
                if (rank.basic) num -= rank.basic[1];
                if (rank.add) num -= rank.add[1] * plies;
                var random2 = 1;
                if (rank.randomPower) {
                    if (Array.isArray(rank.randomPower)) random2 = rank.randomPower[1];
                    else random2 = rank.randomPower;
                }
                if (rank.random) num -= Math.min(1, rank.random[1] * plies) * random2;
            }
        }
        if (income === false) return -num;
        return num;
    };
    /*技能中对Buffrank的影响赋值写法例:
        Tgtt_xxx:{
            ai:{
                TgttBuffRank_extra:{
                    "diaoling":{
                        basic:[0,-0.5],
                        add:[1,0]
                    }
                }
            }
        }
    */
    //获取目标角色已有的Buff种类(可设置过滤filter)
    get.TgttBuffList = function (player, filter) {
        var list = [];
        for (var i in lib.TgttBuff) {
            var Buff = get.TgttBuffName(i);
            if (get.TgttBuffNum(player, Buff) == 0) continue;
            if (filter && typeof filter == 'function') {
                if (filter(player, Buff) == true) list.push(Buff);
                continue;
            } else if (typeof filter == 'string') {
                if (get.TgttBuffInfo(i, 'type') == filter) list.push(Buff);
                continue
            }
            list.push(Buff);
        }
        return list;
    };
    //寻找对应条件的buff
    game.findTgttBuff = function (filter, value) {
        var list = []
        for (var i in lib.TgttBuff) {
            if (get.TgttBuffInfo(i, filter) == value) list.add(i)
        }
        return list
    }
    //获取Buff的信息info,该信息与角色无关,会且只会从lib.TgttBuff中调取信息.
    /*
    目前来说,有以下几项信息是需要特别注意的:
        limit为Buff的层数上限,无则视为无限
        BuffReject为与之冲突的Buff
    */
    get.TgttBuffInfo = function (name, filter) {
        var Buff = get.TgttBuffName(name, false);
        var info;
        if (lib.TgttBuff[Buff]) info = lib.TgttBuff[Buff].TgttBuffInfo;
        else return null;
        if (!filter) return info;
        if (filter == 'BuffReject') {
            if (!info.BuffReject) return [];
        } else if (filter == 'limit') {
            if (!info.limit) return Infinity;
        }
        return info[filter];
    };
    //更改(增加或减少)目标角色Buff的层数
    //层数不填默认为<增加1层>
    game.changeTgttBuff = function () {
        var next = game.createEvent('changeTgttBuff');
        for (var i = 0; i < arguments.length; i++) {
            if (get.itemtype(arguments[i]) == 'player') {
                if (next.player == undefined) {
                    next.player = arguments[i];
                } else {
                    next.source = arguments[i]
                }
            } else if (typeof arguments[i] == 'string') {
                if (['naturalLose', 'isReject'].includes(arguments[i])) {
                    next[arguments[i]] = true;
                } else {
                    next.buff = get.TgttBuffName(arguments[i]);
                }
            } else if (typeof arguments[i] == 'number' && !next.num) {
                next.num = arguments[i];
            }
        }
        if (next.source == undefined) next.source = 'nosource'
        if (!next.num) next.num = 1;
        if (next.num > 0) {
            next.num = game.checkMod(next.player, get.TgttBuffName(next.buff, false), next.num, next.num, 'FixedTgttBuff', next.player)
        }
        next.setContent(function () {
            "step 0"
            if (this.player.isImmTgttBuff(get.TgttBuffName(this.buff, false)) && this.num > 0) {
                game.log(this.player, '因免疫', '#g「' + get.translation(this.buff) + '」', '无法被附加该Buff')
                event.finish()
            } else if (game.checkMod(this.player, get.TgttBuffName(this.buff, false), 'changeTgttBuff', false, 'TgttBuffIgnore', this.player)) {
                event.finish()
            } else if (this.isReject) {
                event.goto(3);
            } else {
                this.trigger('changeTgttBuffBegin1'); //事件开始,取消事件的地方
            }
            "step 1"
            this.trigger('changeTgttBuffBegin2'); //事件开始,修改事件参数的地方
            "step 2"
            if (!lib.TgttBuff[get.TgttBuffName(this.buff, false)]) {
                event.finish();
            } else if (this.num <= 0) {
                event.goto(3);
            } else {
                var reject = get.TgttBuffInfo(this.buff, 'BuffReject');
                if (reject.length && this.num > 0) {
                    for (var i = 0; i < reject.length; i++) {
                        var num2 = get.TgttBuffNum(this.player, reject[i]);
                        if (!num2) continue;
                        game.changeTgttBuff(this.player, reject[i], -this.num, 'isReject');
                        game.log(player, '附加的', num2, '层', '#g「' + get.translation(this.buff) + '」', '被', '#g「' + get.translation(get.TgttBuffName(reject[i])) + '」', '抵消')
                        this.num -= num2;
                        if (this.num <= 0) {
                            event.goto(5);
                            break;
                        }
                    }
                }
            }
            "step 3"
            if (this.num != 0) {
                var Buff = this.buff;
                var num = this.num;
                var tip1, tip2;
                if (this.num > 0) {
                    if (!this.player.storage[Buff]) {
                        this.player.storage[Buff] = 0;
                        tip1 = '附加了';
                    } else {
                        tip1 = '增加了';
                    }
                    num = Math.min(get.TgttBuffInfo(Buff, 'limit') - this.player.storage[Buff], num);
                } else {
                    if (this.naturalLose == true) {
                        tip1 = '自然减少了';
                    } else {
                        tip1 = '移除了';
                    }
                    num = -Math.min(this.player.storage[Buff], -num);
                }
                if (this.source != 'nosource') {
                    if (!this.player.storage[Buff + '_Source']) this.player.storage[Buff + '_Source'] = []
                    this.player.storage[Buff + '_Source'].push(this.source)
                    tip2 = get.translation(this.source)
                } else {
                    tip2 = ''
                }
                if (num != 0) {
                    this.player.storage[Buff] += num;
                    if (this.player.storage[Buff] > 0) {
                        player.addAdditionalSkill('Tgtt_Buff', Buff, true);
                        this.player.markSkill(Buff);
                    } else {
                        player.removeAdditionalSkill('Tgtt_Buff', Buff);
                        this.player.unmarkSkill(Buff);
                        delete this.player.storage[Buff + '_Source']
                    }
                    game.log(this.player, this.source != 'nosource' ? '因' : '', '#b' + tip2, tip1, Math.abs(num), '层', '#g「' + get.translation(Buff) + '」');
                }
            }
            'step 4'
            this.trigger('changeTgttBuff')
        });
        return next;
    };
    //转化目标角色的Buff,请不要将互相冲突的Buff互相转化
    game.changeTgttBuffTo = function () {
        var next = game.createEvent('changeTgttBuffTo');
        for (var i = 0; i < arguments.length; i++) {
            if (get.itemtype(arguments[i]) == 'player') {
                next.player = arguments[i];
            } else if (typeof arguments[i] == 'string') {
                if (!next.from) {
                    next.from = get.TgttBuffName(arguments[i]);
                } else {
                    next.to = get.TgttBuffName(arguments[i]);
                }
            } else if (typeof arguments[i] == 'number') {
                if (!next.num1) next.num1 = arguments[i];
                else next.num2 = arguments[i];
            }
        }
        if (!next.num1) next.num1 = 1;
        if (next.num1 > 0) next.num1 = -next.num1;
        if (!next.num2) next.num2 = -next.num1;
        //num1为被转化掉的Buff的变化层数,会自动转化为负数,转化Buff的变化层数num2则默认为-num1
        //请不要将num2设定为正数
        next.setContent(function () {
            "step 0"
            this.trigger('changeTgttBuffBeginTo1'); //事件开始,取消事件的地方
            "step 1"
            this.trigger('changeTgttBuffBeginTo2'); //事件开始,修改事件参数的地方
            "step 2"
            if (!lib.TgttBuff[get.TgttBuffName(event.to, false)] || !lib.TgttBuff[get.TgttBuffName(event.from, false)] || event.num1 == 0 || event.num2 == 0) {
                event.finish();
            } else if (get.TgttBuffNum(player, event.from) + event.num1 < 0) {
                //game.log(player,'的Buff转化失败');
                this.trigger('changeTgttBuffBeginToFailed');
                event.finish();
            }
            "step 3"
            var from = event.from,
                num1 = event.num1;
            var to = event.to,
                num2 = event.num2;
            player.storage[from] += num1;
            if (player.storage[from] > 0) {
                player.addAdditionalSkill('Tgtt_Buff', from, true);
                player.markSkill(from);
            } else {
                player.removeAdditionalSkill('Tgtt_Buff', from);
                player.unmarkSkill(from);
            }
            var reject = get.TgttBuffInfo(to, 'BuffReject');
            var rejectCost = 0;
            if (reject.length && num2 > 0) {
                for (var i = 0; i < reject.length; i++) {
                    var num3 = get.TgttBuffNum(player, reject[i]);
                    if (!num3) continue;
                    if (num3 > num2) num3 = num2;
                    rejectCost += num3;
                    num2 -= rejectCost;
                    var rejectBuff = get.TgttBuffName(reject[i]);
                    player.storage[rejectBuff] -= num3;
                    if (player.storage[rejectBuff] <= 0) {
                        player.removeAdditionalSkill('Tgtt_Buff', rejectBuff);
                        player.unmarkSkill(rejectBuff);
                    }
                    event.rejectCost = rejectCost;
                    if (num2 <= 0) break;
                }
            }
            if (!player.storage[to]) player.storage[to] = 0;
            num2 = Math.min(get.TgttBuffInfo(to, 'limit') - player.storage[to], num2);
            player.storage[to] += num2;
            if (player.storage[to] > 0) {
                player.addAdditionalSkill('Tgtt_Buff', to, true);
                player.markSkill(to);
            } else {
                player.removeAdditionalSkill('Tgtt_Buff', to);
                player.unmarkSkill(to);
            }
            game.log(player, '的', Math.abs(num1), '层「', from, '」', '转化成了', Math.abs(num2), '层「', to, '」');
        });
        return next;
    };
    //方法game.changeTgttBuff的封装
    lib.element.player.changeTgttBuff = function () {
        return game.changeTgttBuff(this, ...arguments);
    };
    //方法game.changeTgttBuffTo的封装
    lib.element.player.changeTgttBuffTo = function () {
        return game.changeTgttBuffTo(this, ...arguments);
    };
    //获得目标角色已有的Buff种类数目(可设置不算在内的Buff)
    lib.element.player.countTgttBuff = function (filter) {
        var buffs = get.TgttBuffList(this);
        return buffs.reduce((accumulator, currentElement) => {
            if (filter(currentElement)) {
                return accumulator + 1;
            } else {
                return accumulator;
            }
        }, 0);
    };
    //获取目标角色符合条件的buff
    lib.element.player.getTgttBuff = function (filter) {
        var buffs = get.TgttBuffList(this);
        return buffs.filter(i => filter(i))
    };
    //增加buff
    lib.element.player.addTgttBuff = function () {
        var next = game.createEvent('addTgttBuff')
        for (var i = 0; i < arguments.length; i++) {
            if (typeof arguments[i] == 'number') {
                next.num = arguments[i]
            } else if (typeof arguments[i] == 'string') {
                next.buff = arguments[i]
            } else if (get.itemtype(arguments[i]) == 'player') {
                next.source = arguments[i]
            }
        }
        next.player = this
        if (!next.source) next.source = 'nosource'
        if (next.num == undefined) next.num = 1
        next.setContent(function () {
            'step 0'
            if (!event.buff) return event.finish()
            if (game.checkMod(player, event.buff, 'addTgttBuff', false, 'TgttBuffIgnore', player)) {
                return event.finish()
            }
            event.num = Math.min(get.TgttBuffLimit(event.buff) - player.countTgttBuffNum(event.buff), event.num)
            if (event.num <= 0) return event.finish()
            'step 1'
            event.trigger('addTgttBuffBegin1')
            'step 2'
            if (event.source != 'nosource') event.source.line(player)
            game.changeTgttBuff(player, event.source, event.buff, event.num)
            'step 3'
            event.trigger('addTgttBuffSource')
        })
        return next
    }
    //减少buff
    lib.element.player.reduceTgttBuff = function () {
        var next = game.createEvent('reduceTgttBuff')
        for (var i = 0; i < arguments.length; i++) {
            if (typeof arguments[i] == 'number') {
                next.num = arguments[i]
            }
            else if (typeof arguments[i] == 'string') {
                if (['naturalLose', 'isReject'].includes(arguments[i])) {
                    next[arguments[i]] = true;
                } else {
                    next.buff = arguments[i];
                }
            } else if (get.itemtype(arguments[i]) == 'player') {
                next.source = arguments[i]
            }
        }
        next.player = this
        if (next.source == undefined) next.source = 'nosource'
        if (next.num == undefined) next.num = 1
        next.setContent(function () {
            'step 0'
            if (game.checkMod(player, event.buff, 'reduceTgttBuff', false, 'TgttBuffIgnore', player)) return event.finish()
            if (event.buff == undefined) return event.finish()
            event.num = Math.min(player.countTgttBuffNum(event.buff), event.num)
            if (event.num <= 0) return event.finish()
            'step 1'
            event.trigger('reduceTgttBuffBegin1')
            'step 2'
            event.trigger('reduceTgttBuffBegin2')
            'step 3'
            if (event.source !== 'nosource') event.source.line(player)
            var arg1 = event.naturalLose ? 'naturalLose' : undefined
            var arg2 = event.isReject ? 'isReject' : undefined
            game.changeTgttBuff(player, event.source, get.TgttBuffName(event.buff), -event.num, arg1, arg2)
            'step 3'
            event.trigger('reduceTgttBuffSource')
        })
        return next
    }
    lib.element.player.addTempTgttBuff = function () {
        var source, num, expire, losetype, buff
        for (var i in arguments) {
            if (get.itemtype(arguments[i]) == 'player') {
                source = arguments[i]
            } else if (typeof arguments[i] == 'number') {
                num = arguments[i]
            } else if (['array', 'object'].includes(get.objtype(arguments[i]))) {
                expire = arguments[i]
            } else if (['naturalLose', 'isReject'].includes(arguments[i])) {
                losetype = arguments[i]
            } else {
                buff = arguments[i]
            }
        }
        if (!num) num = 1
        num = Math.min(num, get.TgttBuffLimit(buff) - this.countTgttBuffNum(buff))
        if (num > 0) {
            if (!expire) {
                expire = {
                    global: ['phaseAfter', 'phaseBefore']
                }
            } else if (Array.isArray(expire) || typeof expire == 'string') {
                expire = {
                    global: expire
                }
            }
            this.when(expire).then(() => {
                var skillinfo = lib.skill[event.name]
                var buff = skillinfo.buff
                var num = skillinfo.num
                var type = skillinfo.type
                if (num > 0 && player.hasTgttBuff(buff)) {
                    player.reduceTgttBuff(buff, num, type)
                }
            }).assign({
                buff: buff,
                num: num,
                type: losetype
            })
        }
        return this.addTgttBuff(buff, num, source)
    }
    //清除Buff
    lib.element.player.clearTgttBuff = function (buff, type) {
        var player = this
        var num = player.countTgttBuffNum(buff)
        return player.reduceTgttBuff(buff, num, type)
    }
    //封装获取Buff
    lib.element.player.countTgttBuffNum = function (buff) {
        var player = this
        return get.TgttBuffNum(player, buff)
    }
    //判断是否拥有Buff
    lib.element.player.hasTgttBuff = function (filter) {
        var player = this
        var buffs = get.TgttBuffList(player)
        if (typeof filter == 'string') {
            if (player.countTgttBuffNum(filter) > 0) {
                return true
            } else {
                return false
            }
        } else if (typeof filter == 'function') {
            return buffs.some(i => filter(i))
        }
    }
    //判断其是否免疫该种Buff
    lib.element.player.isImmTgttBuff = function (buff) {
        var player = this
        return game.checkMod(player, buff, false, 'ImmerTgttBuff', player)
    };
})
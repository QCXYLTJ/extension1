import { lib, game, ui, get, ai, _status } from '../../noname.js'
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '染柒的世界',
        content(config, pack) {
            window['ui'] = ui;
            lib.group.push('rqsj_han');
            lib.translate.rqsj_han = '汉';
            lib.groupnature.rqsj_han = 'metal';
            lib.group.push('renlei');
            lib.translate.renlei = '王国';
            lib.groupnature.renlei = 'metal';
            lib.group.push('jingling');
            lib.translate.jingling = '森林';
            lib.groupnature.jingling = 'wood';
            lib.group.push('mozu');
            lib.translate.mozu = '魔族';
            lib.groupnature.mozu = 'thunder';
            lib.group.push('mowang');
            lib.translate.mowang = '魔王';
            lib.groupnature.mowang = 'fire';
            lib.group.push('moshen');
            lib.translate.moshen = '魔神';
            lib.groupnature.moshen = 'thunder';
            lib.group.push('yaoshou');
            lib.translate.yaoshou = '蛮荒';
            lib.groupnature.yaoshou = 'soil';
            lib.group.push('guijing');
            lib.translate.guijing = '地狱';
            lib.groupnature.guijing = 'water';
            if (lib.brawl) {
                lib.brawl.rqsj_lingyuzhizhan = {
                    name: '领域之战',
                    mode: 'versus',
                    submode: '2v2',
                    intro: '用染柒的世界中势力相同的武将组合一队,获得专属势力技能.当队伍中一名角色倒下后,另一名角色摸一张牌获得一张是该势力的装备并额外获得势力技能(加上2v2模式摸一张一共是三张哦)<br>禁用:易命之昭<li>地狱爪牙:回合开始时,你可以弃置一张牌并指定一名敌方角色,该角色附着火元素.<li>蛮荒之力:你使用【杀】上限+1;出牌阶段结束时,若你于此阶段使用【杀】次数不少于2,摸一张牌并为自己附着土元素.<li>森林庇佑:回合结束时,你可以清除元素附着.<li>鹰门雄心:锁定技,准备阶段开始时,若你的手牌数比体力值少2或更多,摸一张牌;若你已损失体力值大于1,你令一名角色附着水元素.<li>魔族血脉:摸牌阶段结束时,你可以展示你于此阶段内因摸牌而获得的牌.若这些牌的花色均不同,则你摸一张牌.<br>额外获得:<li>骸骨之地:锁定技,当你受到伤害后,你摸一张牌.<li>噬血之门:锁定技,当你使用【杀】造成伤害后,若手牌小于体力值,摸一张牌,否则,回复一点体力.<li>月光祭坛:锁定技,当你使用装备牌时,你摸一张牌.<li>远征战旗:锁定技,当你使用锦囊牌指定其他角色为目标后,你摸一张牌.<li>月背之树:锁定技,结束阶段,若你手牌数小于3,则你摸一张牌.',
                    showcase(init) {
                        var node = this;
                        var getList = function () {
                            var list = [
                                ['rqsj_jinglingwangzi', 'rqsj_jinglinganshazhe', 'rqsj_nvshenshizhe'],
                                ['rqsj_caiyigongzhu', 'rqsj_chitongmodao', 'rqsj_huangjiahuweiduizhang'],
                                ['rqsj_banshirenwushi', 'rqsj_jinshufashi', 'rqsj_duyanjuren'],
                                ['rqsj_diyucaijueguan', 'rqsj_kuloufashi', 'rqsj_duoluojingling'],
                                ['rqsj_huijin', 'rqsj_ranqi', 'rqsj_xiaoshuang'],
                            ];
                            list.randomSort();
                            var list2 = [];
                            for (var i = 0; i < list.length; i++) {
                                list2 = list2.concat(list[i]);
                            }
                            node.list = list2;
                        };
                        var func = function () {
                            if (!node.list.length) {
                                getList();
                            }
                            var card = ui.create.player(null, true);
                            card.init(node.list.shift());
                            card.node.marks.remove();
                            card.node.count.remove();
                            card.node.hp.remove();
                            node.nodes.push(card);
                            card.style.position = 'absolute';
                            var rand1 = Math.round(Math.random() * 100);
                            var rand2 = Math.round(Math.random() * 100);
                            var rand3 = Math.round(Math.random() * 40) - 20;
                            card.style.left = 'calc(' + rand1 + '% - ' + rand1 * 1.5 + 'px)';
                            card.style.top = 'calc(' + rand2 + '% - ' + rand2 * 1.8 + 'px)';
                            card.style.transform = 'scale(1.2) rotate(' + rand3 + 'deg)';
                            card.style.opacity = 0;
                            ui.refresh(card);
                            node.appendChild(card);
                            ui.refresh(card);
                            card.style.transform = 'scale(0.9) rotate(' + rand3 + 'deg)';
                            card.style.opacity = 1;
                            if (node.nodes.length > 4) {
                                setTimeout(function () {
                                    while (node.nodes.length > 3) {
                                        node.nodes.shift().delete();
                                    }
                                }, 500);
                            }
                        };
                        node.list = [];
                        if (init) {
                            node.nodes = [];
                            for (var i = 0; i < 3; i++) {
                                func();
                            }
                        }
                        node.showcaseinterval = setInterval(func, 1000);
                    },
                    init() { },
                    content: {
                        submode: 'two',
                        chooseCharacterFixed: true,
                        chooseCharacterBefore() {
                            _status.noReplaceCharacter = true;
                            game.versusVideoName = '领域之战';
                            var map = {
                                guijing: [],
                                yaoshou: [],
                                jingling: [],
                                renlei: [],
                                mozu: [],
                            };
                            var map3 = [];
                            var banned = ['rqsj_yimingzhizhao'];
                            for (var i in lib.character) {
                                if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i) || banned.includes(i)) continue;
                                var group = lib.character[i][1];
                                if (group && map[group]) map[group].push(i);
                            }
                            for (var i in map) {
                                if (map[i].length < 2) {
                                    delete map[i];
                                } else {
                                    map3.push(i);
                                }
                            }
                            _status.brawl.map = map;
                            _status.brawl.map3 = map3;
                            var skill = {
                                _jiazu_guijing: {
                                    trigger: { player: 'phaseBegin' },
                                    forced: true,
                                    popup: '地狱爪牙',
                                    prompt2: '回合开始时,你可以弃置一张牌并指定一名敌方角色,该角色附着火元素.',
                                    filter(event, player) {
                                        return player.group == 'guijing' && player.countCards('he') > 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseCardTarget({
                                            prompt: get.prompt2(event.name),
                                            filterCard: lib.filter.cardDiscardable,
                                            filterTarget(card, player, target) {
                                                return player.side != target.side;
                                            },
                                            position: 'he',
                                            ai1(card) {
                                                return 6 - get.value(card);
                                            },
                                            ai2(target) {
                                                return 1 / (1 + target.countCards('he'));
                                            },
                                        });
                                        ('step 1');
                                        if (result.bool) {
                                            player.discard(result.cards);
                                            result.targets[0].useSkill('rqsj_addhuo');
                                        }
                                    },
                                },
                                _jiazu_yaoshou: {
                                    popup: '蛮荒之力',
                                    prompt2: '你使用【杀】上限+1;出牌阶段结束时,若你于此阶段使用【杀】次数不少于2,摸一张牌并为自己附着土元素.',
                                    mod: {
                                        cardUsable(card, player, num) {
                                            if (card.name == 'sha' && player.group == 'yaoshou') return num + 1;
                                        },
                                    },
                                    trigger: { player: 'phaseUseEnd' },
                                    forced: true,
                                    filter(event, player) {
                                        return (
                                            player.group == 'yaoshou' &&
                                            player.getHistory('useCard', function (evt) {
                                                return evt.card && evt.card.name == 'sha' && evt.getParent('phaseUse') == event;
                                            }).length > 1
                                        );
                                    },
                                    content() {
                                        player.draw();
                                        player.useSkill('rqsj_addtu');
                                    },
                                },
                                _jiazu_jingling: {
                                    trigger: { player: 'phaseEnd' },
                                    popup: '森林庇佑',
                                    prompt2: '回合结束时,你可以清除元素附着.',
                                    filter(event, player) {
                                        if (player.group != 'jingling') return false;
                                        return true;
                                    },
                                    content() {
                                        player.removeSkill('rqsj_feng');
                                        player.removeSkill('rqsj_huo');
                                        player.removeSkill('rqsj_shui');
                                        player.removeSkill('rqsj_tu');
                                    },
                                },
                                _jiazu_renlei: {
                                    popup: '鹰门雄心',
                                    prompt2: '锁定技,准备阶段开始时,若你的手牌数比体力值少2或更多,摸一张牌;若你已损失体力值大于1,你令一名角色附着水元素',
                                    trigger: { player: 'phaseZhunbeiBegin' },
                                    forced: true,
                                    filter(event, player) {
                                        return player.group == 'renlei' && (player.isDamaged() || player.countCards('h') - player.hp < -1);
                                    },
                                    content() {
                                        'step 1';
                                        if (player.countCards('h') - player.hp < -1) player.draw();
                                        if (player.maxHp - player.hp > 1) event.goto(2);
                                        event.finish();
                                        ('step 2');
                                        player
                                            .chooseTarget(function (card, player, target) {
                                                return true;
                                            })
                                            .set('ai', function (target) {
                                                return -get.attitude(_status.event.player, target);
                                            });
                                        ('step 3');
                                        if (result.bool) {
                                            var targets = result.targets;
                                            while (targets.length) {
                                                var target = targets.shift();
                                                target.useSkill('rqsj_addshui');
                                            }
                                        }
                                    },
                                },
                                _jiazu_mozu: {
                                    trigger: { player: 'phaseDrawEnd' },
                                    popup: '魔族血脉',
                                    prompt2: '摸牌阶段结束时,你可以展示你于此阶段内因摸牌而获得的牌.若这些牌的花色均不同,则你摸一张牌.',
                                    filter(event, player) {
                                        var hs = player.getCards('h');
                                        return (
                                            player.group == 'mozu' &&
                                            hs.length &&
                                            player.getHistory('gain', function (evt) {
                                                if (evt.parent.name != 'draw' || evt.getParent('phaseDraw') != event) return false;
                                                for (var i of evt.cards) {
                                                    if (hs.includes(i)) return true;
                                                }
                                                return false;
                                            }).length
                                        );
                                    },
                                    check(event, player) {
                                        var hs = player.getCards('h'),
                                            cards = [],
                                            suits = [];
                                        player.getHistory('gain', function (evt) {
                                            if (evt.parent.name != 'draw' || evt.getParent('phaseDraw') != event) return false;
                                            for (var i of evt.cards) {
                                                if (hs.includes(i)) {
                                                    cards.add(i);
                                                    suits.add(i.suit);
                                                }
                                            }
                                        });
                                        return cards.length == suits.length;
                                    },
                                    content() {
                                        var hs = player.getCards('h'),
                                            cards = [],
                                            suits = [];
                                        player.getHistory('gain', function (evt) {
                                            if (evt.parent.name != 'draw' || evt.getParent('phaseDraw') != trigger) return false;
                                            for (var i of evt.cards) {
                                                if (hs.includes(i)) {
                                                    cards.add(i);
                                                    suits.add(i.suit);
                                                }
                                            }
                                        });
                                        player.showCards(cards, get.translation(player) + '发动了【魔族血脉】');
                                        if (cards.length == suits.length) player.draw();
                                    },
                                },
                                _jiazu_awaken_guijing: {
                                    popup: '骸骨之地',
                                    intro: {
                                        content: '锁定技,当你受到伤害后,你摸一张牌.',
                                    },
                                    trigger: { player: 'damageEnd' },
                                    forced: true,
                                    filter(event, player) {
                                        return player._jiazuAwaken && player.group == 'guijing';
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                                _jiazu_awaken_yaoshou: {
                                    popup: '噬血之门',
                                    intro: {
                                        content: '锁定技,当你使用【杀】造成伤害后,若手牌小于体力值,摸一张牌,否则,回复一点体力.',
                                    },
                                    trigger: { source: 'damageEnd' },
                                    forced: true,
                                    filter(event, player) {
                                        return player._jiazuAwaken && player.group == 'yaoshou' && event.card && event.card.name == 'sha';
                                    },
                                    content() {
                                        if (player.countCards('h') < player.hp) {
                                            player.draw();
                                        } else {
                                            player.recover();
                                        }
                                    },
                                },
                                _jiazu_awaken_jingling: {
                                    popup: '月光祭坛',
                                    intro: {
                                        content: '锁定技,当你使用装备牌时,你摸一张牌.',
                                    },
                                    trigger: { player: 'useCard' },
                                    forced: true,
                                    filter(event, player) {
                                        return player._jiazuAwaken && player.group == 'jingling' && get.type(event.card) == 'equip';
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                                _jiazu_awaken_renlei: {
                                    popup: '远征战旗',
                                    intro: {
                                        content: '锁定技,当你使用锦囊牌指定其他角色为目标后,你摸一张牌.',
                                    },
                                    trigger: { player: 'useCardToPlayered' },
                                    forced: true,
                                    filter(event, player) {
                                        if (!player._jiazuAwaken || player.group != 'renlei' || !event.isFirstTarget || get.type(event.card, 'trick') != 'trick') return false;
                                        for (var i = 0; i < event.targets.length; i++) {
                                            if (event.targets[i] != player) return true;
                                        }
                                        return false;
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                                _jiazu_awaken_mozu: {
                                    popup: '月背之树',
                                    intro: {
                                        content: '锁定技,结束阶段,若你手牌数小于3,则你摸一张牌.',
                                    },
                                    trigger: { player: 'phaseJieshuBegin' },
                                    forced: true,
                                    filter(event, player) {
                                        if (!player._jiazuAwaken || player.group != 'mozu') return false;
                                        if (player.countCards('h') >= 3) return false;
                                        return true;
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                                _jiazu_awaken: {
                                    trigger: { global: 'die' },
                                    forced: true,
                                    filter(event, player) {
                                        return !player._jiazuAwaken && event.player.side == player.side;
                                    },
                                    content() {
                                        player._jiazuAwaken = true;
                                        var name = '_jiazu_awaken_' + player.group;
                                        if (lib.skill[name]) player.markSkill(name);
                                        player.draw();
                                        if (player.group == 'renlei') var list = ['rqsj_shijiu', 'rqsj_tiejiaxiongshi'].randomGet();
                                        if (player.group == 'yaoshou') var list = ['rqsj_wenyizhizhu', 'rqsj_shidinianlong'].randomGet();
                                        if (player.group == 'jingling') var list = ['rqsj_qingluan', 'rqsj_leijiao'].randomGet();
                                        if (player.group == 'guijing') var list = ['rqsj_xinghongdiyuzhanma', 'rqsj_mengy'].randomGet();
                                        if (player.group == 'mozu') var list = ['rqsj_zhaoxin', 'rqsj_jisiliguan'].randomGet();
                                        player.gain(game.createCard(list), 'draw');
                                    },
                                },
                            };
                            var translate = {};
                            for (var i in skill) {
                                lib.skill[i] = skill[i];
                                if (skill[i].popup) {
                                    lib.translate[i] = skill[i].popup;
                                    translate[i] = skill[i].popup;
                                }
                                if (skill[i].prompt2) {
                                    lib.translate[i + '_info'] = skill[i].prompt2;
                                    translate[i + '_info'] = skill[i].prompt2;
                                }
                                if (!skill[i].noGlobal) game.addGlobalSkill(i);
                            }
                            game.addVideo('arrangeLib', null, {
                                skill: {
                                    _jiazu_guijing: {
                                        popup: '地狱爪牙',
                                        prompt2: '回合开始时,你可以弃置一张牌并指定一名敌方角色,该角色附着火元素.',
                                    },
                                    _jiazu_yaoshou: {
                                        popup: '蛮荒之力',
                                        prompt2: '你使用【杀】上限+1;出牌阶段结束时,若你于此阶段使用【杀】次数不少于2,摸一张牌并为自己附着土元素.',
                                    },
                                    _jiazu_jingling: {
                                        popup: '森林庇佑',
                                        prompt2: '回合结束时,你可以清除元素附着.',
                                    },
                                    _jiazu_renlei: {
                                        popup: '鹰门雄心',
                                        prompt2: '锁定技,准备阶段开始时,若你的手牌数比体力值少2或更多,摸一张牌;若你已损失体力值大于1,你令一名角色附着水元素',
                                    },
                                    _jiazu_mozu: {
                                        popup: '魔族血脉',
                                        prompt2: '摸牌阶段结束时,你可以展示你于此阶段内因摸牌而获得的牌.若这些牌的花色均不同,则你摸一张牌.',
                                    },
                                    _jiazu_awaken_guijing: {
                                        popup: '骸骨之地',
                                        intro: {
                                            content: '锁定技,当你受到伤害后,你摸一张牌.',
                                        },
                                    },
                                    _jiazu_awaken_yaoshou: {
                                        popup: '噬血之门',
                                        intro: {
                                            content: '锁定技,当你使用【杀】造成伤害后,若手牌小于体力值,摸一张牌,否则,回复一点体力.',
                                        },
                                    },
                                    _jiazu_awaken_jingling: {
                                        popup: '月光祭坛',
                                        intro: {
                                            content: '锁定技,当你使用装备牌时,你摸一张牌.',
                                        },
                                    },
                                    _jiazu_awaken_renlei: {
                                        popup: '远征战旗',
                                        intro: {
                                            content: '锁定技,当你使用锦囊牌指定其他角色为目标后,你摸一张牌.',
                                        },
                                    },
                                    _jiazu_awaken_mozu: {
                                        popup: '月背之树',
                                        intro: {
                                            content: '锁定技,结束阶段,若你手牌数小于3,则你摸一张牌.',
                                        },
                                    },
                                    _jiazu_awaken: {},
                                },
                                translate: translate,
                            });
                        },
                        chooseCharacter(list, player) {
                            if (player.side == game.me.side) {
                                if (_status.brawl.mylist) {
                                    return _status.brawl.mylist.randomGets(player == game.me ? 5 : 3);
                                }
                            } else {
                                if (_status.brawl.enemylist) {
                                    return _status.brawl.enemylist.randomGets(player == game.me ? 5 : 3);
                                }
                            }
                            var surname = _status.brawl.map3.randomRemove();
                            var list = _status.brawl.map[surname];
                            if (player == game.me) {
                                _status.brawl.mylist = list;
                            } else {
                                _status.brawl.enemylist = list;
                            }
                            return list.randomRemove(player == game.me ? 5 : 3);
                        },
                    },
                };
            }
            var tenUi = document.createElement('style');
            tenUi.innerHTML = ".player>.camp-zone[data-camp='yaoshou']>.camp-back {background: linear-gradient(to bottom, rgb(178, 34, 34), rgb(178, 34, 34));}";
            tenUi.innerHTML += ".player>.camp-zone[data-camp='guijing']>.camp-back {background: linear-gradient(to bottom, rgb(79,79,79), rgb(79,79,79));}";
            tenUi.innerHTML += ".player>.camp-zone[data-camp='renlei']>.camp-back {background: linear-gradient(to bottom, rgb(205,149,12), rgb(205,149,12));}";
            tenUi.innerHTML += ".player>.camp-zone[data-camp='jingling']>.camp-back {background: linear-gradient(to bottom, rgb(0,100,0), rgb(0,100,0));}";
            tenUi.innerHTML += ".player>.camp-zone[data-camp='yaoshou']>.camp-name {text-shadow: 0 0 5px rgb(255,48,48), 0 0 10px rgb(255,48,48), 0 0 15px rgb(255,48,48);}";
            tenUi.innerHTML += ".player>.camp-zone[data-camp='guijing']>.camp-name {text-shadow: 0 0 5px rgb(79,79,79), 0 0 10px rgb(79,79,79), 0 0 15px rgb(79,79,79);}";
            tenUi.innerHTML += ".player>.camp-zone[data-camp='renlei']>.camp-name {text-shadow: 0 0 5px rgb(255,215,0), 0 0 10px rgb(255,215,0), 0 0 15px rgb(255,215,0);}";
            tenUi.innerHTML += ".player>.camp-zone[data-camp='jingling']>.camp-name {text-shadow: 0 0 5px rgb(0,205,0), 0 0 10px rgb(0,205,0), 0 0 15px rgb(0,205,0);}";
            document.head.appendChild(tenUi);
            lib.rank.rarity.junk.addArray(['rqsj_huajingling', 'rqsj_shishimo', 'rqsj_ansharenou', 'rqsj_zongxirencike', 'rqsj_mushi', 'rqsj_kulouzhanshi']);
            lib.rank.rarity.rare.addArray(['rqsj_jinglinganshazhe', 'rqsj_xiaoyangrenjisi', 'rqsj_wuyarenzhanglao', 'rqsj_sp_zuoci', 'lrdj_baichi', 'rqsj_moguxianzi', 'rqsj_jinglingwangzi', 'rqsj_youmaodexianyu', 'rqsj_caiyigongzhu', 'rqsj_duoluojinglingfashi', 'rqsj_qiangpaomeigui', 'rqsj_nvshenshizhe', 'rqsj_zhanyitianshi', 'rqsj_mengyan', 'rqsj_wangguochushizhang', 'rqsj_jinshufashi', 'rqsj_banshirenwushi', 'rqsj_duyanjuren', 'rqsj_zhouyuandaocaoren', 'rqsj_haichaogeji', 'rqsj_datushuguanzhang', 'rqsj_diyucaijueguan', 'rqsj_dongfangchanshi', 'rqsj_huangjiahuweiduizhang', 'rqsj_shijian']);
            lib.rank.rarity.epic.addArray(['lrdj_nvwu', 'lrdj_yinlang', 'lrdj_dulang', 'rqsj_ansha', 'rqsj_kuloufashi', 'rqsj_chitongmodao', 'hjws_wangzhaojun', 'rqsj_shikonglvzhe', 'rqsj_manhuangwuyi', 'rqsj_huoxiangrenweishi', 'rqsj_huanyuxingcheng', 'rqsj_dongfanghuanshushi', 'rqsj_banlurenjisi', 'rqsj_huijin', 'rqsj_youyinshiren', 'rqsj_yanyu', 'rqsj_yingxingzhe', 'rqsj_yanyu']);
            lib.rank.rarity.legend.addArray(['lrdj_zongyuenvhai', 'hjws_zhangheng', 'rqsj_yimingzhizhao', 'rqsj_ranqi', 'rqsj_zhuaba', 'rqsj_xiaoshuang']);
        },
        precontent() {
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '染柒的世界',
                    connect: true,
                    characterSort: {
                        染柒的世界: {
                            hanchaowangshi: ['hjws_wangzhaojun', 'hjws_zhangheng'],
                            hanmodaoren: ['rqsj_zuoci', 'rqsj_sp_zuoci', 'rqsj_yuji', 'rqsj_zhangjiao'],
                            qiwenyishi: ['rqsj_ranqi', 'rqsj_youmaodexianyu', 'rqsj_ansha', 'rqsj_huanyuxingcheng', 'rqsj_huijin', 'rqsj_shijian', 'rqsj_zhuaba', 'rqsj_yanyu', 'rqsj_xiaoshuang'],
                            huanxiangdalu: ['rqsj_caiyigongzhu', 'rqsj_chitongmodao', 'rqsj_zhanyitianshi', 'rqsj_jinglingwangzi', 'rqsj_nvshenshizhe', 'rqsj_fuyunqingniao', 'rqsj_moguxianzi', 'rqsj_leidianzhijiao', 'rqsj_jinshufashi', 'rqsj_xiaoyangrenjisi', 'rqsj_manhuangwuyi', 'rqsj_anyegongjue', 'rqsj_duoluojingling', 'rqsj_duoluojinglingfashi', 'rqsj_yimingzhizhao', 'rqsj_mengyan', 'rqsj_tanlanzhixin', 'rqsj_huoxiangrenweishi', 'rqsj_kuloufashi', 'rqsj_banshirenwushi', 'rqsj_dongfangchanshi', 'rqsj_shikonglvzhe', 'rqsj_wangguochushizhang', 'rqsj_qiangpaomeigui', 'rqsj_duyanjuren', 'rqsj_wuyarenzhanglao', 'rqsj_gulong', 'rqsj_huangyuanlieshou', 'rqsj_hetong', 'rqsj_jinglinganshazhe', 'rqsj_dongfanghuanshushi', 'rqsj_banlurenjisi', 'rqsj_zhouyuandaocaoren', 'rqsj_yusheshen', 'rqsj_huangjiahuweiduizhang', 'rqsj_haichaogeji', 'rqsj_xielingnvwu', 'rqsj_youyinshiren', 'rqsj_diyucaijueguan', 'rqsj_datushuguanzhang', 'rqsj_yingxingzhe', 'rqsj_poxiaoshouwei'],
                            rqsj_liandong: ['rqsj_lansi'],
                            langrenduijue: ['lrdj_langren', 'lrdj_dulang', 'lrdj_yinlang', 'lrdj_nvwu', 'lrdj_wuya', 'lrdj_baichi', 'lrdj_zongyuenvhai', 'lrdj_duoluoshenzhi'],
                            qinqishuhua: ['rqsj_qin', 'rqsj_qi', 'rqsj_shu', 'rqsj_hua'],
                            huanxiangdalu_yansheng: ['rqsj_xvying', 'rqsj_huajingling', 'rqsj_shishimo', 'rqsj_senlinlang', 'rqsj_ansharenou', 'rqsj_kulouzhanshi', 'rqsj_zongxirencike', 'rqsj_baihuanvshen', 'rqsj_mushi'],
                        },
                    },
                    character: {
                        hjws_wangzhaojun: ['female', 'rqsj_han', 3, ['wzj_gongxuan', 'wzj_yinyue', 'wzj_bulu', 'rqsj_jiaqiang3'], ['des:昭君从小聪明伶俐,勤奋好学,心地善良,特别喜欢望月吟唱.后来汉元帝挑选天下美女做后妃,昭君被选中.王昭君到京城长安后,和其他被选的秀女一样,先到画师毛延寿那儿画像.有的美女为了得到皇帝的宠爱,重金贿赂毛画师,画师就将她们画得美貌非凡.王昭君不信这个邪,没有给毛画师金银财宝,毛画师就有意在王昭君眼睛下面点了一点,结果王昭君没能入汉元帝法眼,寂寞于后宫. 几年之后,以归降汉朝的南匈奴首领呼韩邪单于入京朝贡,以尽藩臣之礼,并请求做汉朝的女婿,汉元帝遂选宫女赐之.临行前,汉元帝召见昭君,一见面就惊呆了,如此美丽的美人,我怎么没有发现呢!一席谈话,更觉昭君才智过人,整个后宫无人可及.而天子又难于失信. 送走昭君后,元帝立即翻看美人画册,终于在不起眼的地方找到了.细细一看,原来昭君眼下多了一个疵点,掩盖了昭君的美貌.皇帝大怒,下令将那个弄虚作假的画师毛延寿杀了. 昭君随呼韩邪来到塞外,在匈奴又举行了隆重的婚礼,二人感情很深,但不久阴山山麓和大漠南北,出现严重的自然灾害,久旱不雨,水草枯死,牧民饥饿混乱,朔漠飞沙中又夹着一股邪风.当地居民说这些灾难都是王昭君带来的,只有用她的血来祭奠匈奴先灵,草原才能化险为夷.呼韩邪终日愁闷,惶惶不安,昭君也愁眉不展,忽然她想起父母在她进宫前曾送给她一个锦囊.昭君打开锦囊一看,原来里面装有庄稼种子、金剪子和一张黄纸.昭君百思不得其解,伤心地流下了一串串泪珠.这泪珠滴落在冰凉的沙子上,沙地上竟然奇迹般地出现了一股蓝晶晶的小清泉.昭君又惊又喜,有了水,还要有牛羊、水草、庄稼.她拿起了金剪用黄纸剪了一只小羔羊,想不到刚剪成,小纸羊就变成了真羊.昭君又用黄纸剪牛羊、水♣️️瓣,顿时,身边出现大片的绿草香花,成群的牛羊在其中吃草、休息.最后昭君又将锦囊中的种子撒在沙地上,顷刻便长出了庄稼.牧民们欣喜若狂,奔走相告,世代传送着昭君的恩德.']],
                        rqsj_qin: ['female', 'wei', 3, [], []],
                        rqsj_zuoci: ['male', 'qun', 4, ['xianren_qianhuan', 'xianren_chidiao'], []],
                        rqsj_shu: ['female', 'wu', 3, [], []],
                        rqsj_qi: ['female', 'qun', 3, [], []],
                        rqsj_hua: ['female', 'shu', 3, [], []],
                        rqsj_sp_zuoci: ['male', 'qun', 3, ['rqsj_huanshu', 'xianren_zhibei', 'xianren_shenti', 'rqsj_jiaqiang1'], []],
                        rqsj_caiyigongzhu: ['female', 'renlei', 3, ['caiyi_liuguang', 'caiyi_zhuci', 'rqsj_jiaqiang3'], ['des:武将词条:辅助,回复,送牌<br>武将评级:S<br>武将难度:易']],
                        rqsj_xiaoyangrenjisi: ['female', 'yaoshou', 3, ['falixitong4', 'rqsj_jidian', 'jisi_muen', 'rqsj_xichen', 'rqsj_jiaqiang1'], ['des:武将词条:控顶,回复<br>武将评级:S<br>武将难度:难']],
                        rqsj_ranqi: ['male', 'mozu', 3, ['rqsj_ganhuai', 'rqsj_xiebug', 'rqsj_tiaoping', 'rqsj_jiaqiang1'], ['des:武将词条:辅助,爆发,摸牌,送牌<br>武将评级:SSS<br>武将难度:易']],
                        rqsj_jinglingwangzi: ['male', 'jingling', '3/4', ['wangzi_lingdie', 'wangzi_diewu', 'rqsj_jiaqiang1'], ['des:武将词条:发育,摸牌,攻防兼备<br>武将评级:S<br>武将难度:中等']],
                        rqsj_anyegongjue: ['male', 'guijing', 4, ['rqsj_xuelian', 'rqsj_jiaqiang2'], ['des:武将词条:吸血<br>武将评级:A+<br>武将难度:易']],
                        rqsj_fuyunqingniao: ['female', 'jingling', 4, ['qingniao_xiangyun', 'xianren_shenti', 'qimgniao_qingluan', 'rqsj_jiaqiang1'], ['des:武将词条:摸牌,免疫<br>武将评级:S<br>武将难度:易']],
                        rqsj_chitongmodao: ['female', 'renlei', 3, ['chijian_jiebei', 'chijian_xiaoji', 'chijian_shicong', 'rqsj_jiaqiang1'], ['des:武将词条:辅助,过牌,装备<br>武将评级:SS<br>武将难度:易']],
                        rqsj_nvshenshizhe: ['female', 'jingling', 3, ['shizhe_guiyuan', 'shizhe_shouhu', 'rqsj_jiaqiang1'], ['des:武将词条:辅助,回复,摸牌<br>武将评级:S<br>武将难度:易']],
                        rqsj_manhuangwuyi: ['male', 'yaoshou', 3, ['wuyi_duyi', 'wuyi_duli', 'wuyi_jijiu', 'rqsj_jiaqiang1'], ['des:武将词条:辅助,回复,印毒<br>武将评级:S<br>武将难度:易']],
                        rqsj_duoluojingling: ['female', 'guijing', 3, ['cike_beici', 'cike_lingqiao', 'rqsj_jiaqiang1'], ['des:武将词条:概率,攻防兼备<br>武将评级:A+<br>武将难度:难']],
                        rqsj_yuji: ['male', 'qun', 3, ['rqsj_huanyu0', 'rqsj_zhouyuan', 'rqsj_jiaqiang1'], []],
                        rqsj_yimingzhizhao: ['male', 'mozu', 3, ['rqsj_eyunchanshen', 'rqsj_tianmingpanjue', 'rqsj_ruyingsuixing', 'rqsj_jiaqiang1'], ['des:武将词条:厄运,不死<br>武将评级:SSS<br>武将难度:易']],
                        rqsj_xvying: ['male', 'mozu', 1, ['rqsj_shenqian', 'rqsj_eyunchanshen', 'rqsj_xieyingzhishi'], []],
                        rqsj_huajingling: ['female', 'jingling', 2, ['rqsj_huichun'], []],
                        rqsj_zhanyitianshi: ['male', 'renlei', 5, ['rqsj_yanzhengjinjie', 'rqsj_bingqingzuge', 'rqsj_jiaqiang1'], ['des:武将词条:辅助,回复,代死<br>武将评级:SS<br>武将难度:中']],
                        hjws_zhangheng: ['male', 'rqsj_han', 2, ['zhangheng_jiangxin', 'rqsj_jiaqiang2'], []],
                        rqsj_moguxianzi: ['female', 'jingling', 1, ['rqsj_baoling', 'rqsj_baozhang', 'rqsj_tuisan', 'rqsj_jiaqiang3'], ['des:武将词条:生长,过牌<br>武将评级:SS<br>武将难度:中']],
                        rqsj_jinshufashi: ['male', 'yaoshou', 3, ['rqsj_jinshu', 'rqsj_dugu', 'rqsj_jiaqiang1'], ['des:武将词条:转化毒,过牌<br>武将评级:S<br>武将难度:中']],
                        rqsj_leidianzhijiao: ['female', 'jingling', 3, ['rqsj_yinlei', 'rqsj_jianyue', 'rqsj_jiaqiang1'], ['des:武将词条:辅助,免雷伤,雷击<br>武将评级:S<br>武将难度:易']],
                        rqsj_duoluojinglingfashi: ['female', 'guijing', 3, ['rqsj_shifa', 'rqsj_shuangxing', 'rqsj_duoyuan', 'rqsj_jiaqiang1'], ['des:武将词条:打工,全场伤害<br>武将评级:S<br>武将难度:中']],
                        rqsj_shishimo: ['male', 'guijing', 1, ['shishimo_shishi'], []],
                        rqsj_mengyan: ['female', 'guijing', 3, ['rqsj_ranjin', 'rqsj_xinwuduan', 'rqsj_jiaqiang1'], ['des:武将词条:摸牌,反甲<br>武将评级:S<br>武将难度:易']],
                        rqsj_senlinlang: ['male', 'jingling', 3, ['rqsj_shixue', 'mashu'], []],
                        rqsj_huoxiangrenweishi: ['male', 'yaoshou', 3, ['rqsj_gedang', 'rqsj_huwei', 'rqsj_yongqi3', 'rqsj_jiaqiang1'], ['des:武将词条:辅助,防御<br>武将评级:SS<br>武将难度:易']],
                        rqsj_ansharenou: ['female', 'guijing', 2, ['rqsj_cisha', 'rqsj_sizhong'], []],
                        rqsj_tanlanzhixin: ['none', 'guijing', 4, ['rqsj_tanshi', 'rqsj_liancai', 'rqsj_jiaqiang1'], ['des:武将词条:黄盖,辅助<br>武将评级:S<br>武将难度:易']],
                        rqsj_kuloufashi: ['male', 'guijing', 1, ['rqsj_mingbao', 'rqsj_mingbaos', 'rqsj_jiaqiang3'], ['des:武将词条:概率,不死,反伤<br>武将评级:SS<br>武将难度:中']],
                        rqsj_banshirenwushi: ['female', 'yaoshou', 4, ['rqsj_shihou', 'rqsj_jiaqiang1'], ['des:武将词条:菜刀,多杀<br>武将评级:S<br>武将难度:中']],
                        rqsj_dongfangchanshi: ['male', 'renlei', 4, ['rqsj_wuyuan', 'rqsj_xiuchan', 'rqsj_jiaqiang1'], ['des:武将词条:减控,打工<br>武将评级:A+<br>武将难度:中']],
                        rqsj_shikonglvzhe: ['female', 'renlei', 3, ['rqsj_shikongchuansuo', 'rqsj_kongjianxingnang', 'rqsj_jiaqiang1'], ['des:武将词条:额外回合,多摸牌<br>武将评级:SS<br>武将难度:中']],
                        rqsj_baihuanvshen: ['female', 'jingling', 3, ['rqsj_huawu', 'rqsj_huameng', 'rqsj_baihuanvshen1', 'rqsj_huazhibenyuan'], []],
                        rqsj_wangguochushizhang: ['female', 'renlei', 4, ['rqsj_chujvzhaohuan', 'rqsj_dacan', 'rqsj_cujinxiaohua', 'rqsj_jiaqiang1'], ['des:武将词条:送牌,过牌<br>武将评级:S<br>武将难度:中']],
                        rqsj_qiangpaomeigui: ['female', 'renlei', 3, ['rqsj_zuolun', 'rqsj_shuangjiao1', 'rqsj_jiaqiang1'], ['des:武将词条:离间,辅助,回复<br>武将评级:S<br>武将难度:中']],
                        lrdj_langren: ['male', 'wei', '3/4', [], []],
                        lrdj_zongyuenvhai: ['female', 'qun', 3, ['lrdj_shuangyue', 'lrdj_yueguang', 'lrdj_yueyin'], []],
                        lrdj_wuya: ['male', 'wu', 4, ['rqsj_tuokun', 'rqsj_anfang'], []],
                        lrdj_yinlang: ['male', 'wei', 3, ['lrdj_yl', 'lrdj_jieming'], []],
                        lrdj_dulang: ['male', 'shu', 3, ['lrdj_dl', 'lrdj_liangu', 'lrdj_qixi'], []],
                        lrdj_baichi: ['male', 'qun', 3, ['lrdj_shafu', 'lrdj_huiyi', 'lrdj_fangquan'], []],
                        lrdj_nvwu: ['female', 'wu', 4, ['lrdj_yaoshui'], []],
                        lrdj_duoluoshenzhi: ['female', 'shu', 5, ['lrdj_xisheng', 'lrdj_duoluo'], []],
                        rqsj_youmaodexianyu: ['male', 'mowang', 3, ['rqsj_shuifo', 'rqsj_xuxing', 'rqsj_huantian', 'rqsj_jiaqiang1', 'rqsj_jiaqiang2'], []],
                        rqsj_ansha: ['male', 'mozu', 4, ['rqsj_badao', 'rqsj_chaoyue', 'rqsj_jiaqiang1'], ['des:告诉你个秘密,他是无敌的!——染柒']],
                        rqsj_duyanjuren: ['male', 'yaoshou', '5/6', ['rqsj_cuihui', 'rqsj_xuenu', 'rqsj_jiaqiang1'], ['des:武将词条:裂甲,破防<br>武将评级:S<br>武将难度:易']],
                        rqsj_wuyarenzhanglao: ['male', 'yaoshou', 3, ['rqsj_ezhao', 'rqsj_hansheng', 'rqsj_zhenyu', 'rqsj_jiaqiang1'], ['des:武将词条:厄运,控制<br>武将评级:S<br>武将难度:中']],
                        rqsj_huangyuanlieshou: ['male', 'yaoshou', 4, ['rqsj_chuanyang', 'rqsj_anlie', 'rqsj_lieguo', 'rqsj_jiaqiang3'], ['des:武将词条:暗刀<br>武将评级:A+<br>武将难度:难']],
                        rqsj_hetong: ['female', 'jingling', 3, ['rqsj_lingyun', 'rqsj_linghuo', 'rqsj_mojia', 'rqsj_jiaqiang1'], ['des:武将词条:视为闪,过牌,属性甲<br>武将评级:A+<br>武将难度:易']],
                        rqsj_gulong: ['male', 'guijing', 4, ['rqsj_wuran', 'rqsj_faling', 'rqsj_shou', 'rqsj_jiaqiang1'], ['des:武将词条:势力,打工<br>武将评级:A+<br>武将难度:易']],
                        rqsj_kulouzhanshi: ['male', 'guijing', 1, ['rqsj_kulou'], []],
                        rqsj_zongxirencike: ['male', 'yaoshou', 2, ['rqsj_anqi', 'rqsj_sizhong'], []],
                        rqsj_mushi: ['female', 'renlei', 2, ['rqsj_susheng'], []],
                        rqsj_jinglinganshazhe: ['male', 'jingling', 3, ['rqsj_chuanci', 'rqsj_anqi', 'rqsj_jiaqiang1'], ['des:武将词条:菜刀,多刀,拆牌<br>武将评级:S<br>武将难度:易']],
                        rqsj_dongfanghuanshushi: ['female', 'renlei', 3, ['rqsj_mihun', 'rqsj_nichang', 'rqsj_jiaqiang1'], ['des:武将词条:控制,免伤<br>武将评级:SS<br>武将难度:中']],
                        rqsj_huanyuxingcheng: ['male', 'mozu', 4, ['rqsj_qinzhu', 'rqsj_xinzuo', 'rqsj_xingmao', 'rqsj_jiaqiang1'], []],
                        rqsj_banlurenjisi: ['female', 'jingling', 3, ['rqsj_qufeng', 'rqsj_jili', 'rqsj_banluren_lingyu', 'rqsj_jiaqiang1'], ['des:武将词条:辅助,回复<br>武将评级:SSS<br>武将难度:中']],
                        rqsj_zhouyuandaocaoren: ['male', 'guijing', 2, ['rqsj_jiangzhou', 'rqsj_guijia', 'rqsj_guiying', 'rqsj_jiaqiang1'], ['des:武将词条:免伤,小闭月,控制<br>武将评级:SS<br>武将难度:中']],
                        rqsj_yusheshen: ['male', 'yaoshou', 6, ['rqsj_jiyu', 'rqsj_longyin', 'rqsj_shou', 'rqsj_jiaqiang1'], []],
                        rqsj_huangjiahuweiduizhang: ['male', 'renlei', 3, ['rqsj_tongyu', 'rqsj_zhengdui', 'rqsj_jiaqiang1'], []],
                        rqsj_haichaogeji: ['female', 'yaoshou', 3, ['rqsj_yonglang', 'rqsj_remiyin', 'rqsj_jiaqiang1'], []],
                        rqsj_youyinshiren: ['male', 'jingling', 3, ['rqsj_songshi', 'rqsj_youyi', 'rqsj_jiaqiang1'], []],
                        rqsj_diyucaijueguan: ['female', 'guijing', 4, ['rqsj_duanzui', 'rqsj_jiyan', 'rqsj_jiaqiang1'], []],
                        rqsj_huijin: ['male', 'mozu', 4, ['rqsj_yaohui', 'rqsj_xingmang', 'rqsj_xingyou', 'rqsj_jiaqiang1'], []],
                        rqsj_datushuguanzhang: ['female', 'renlei', 3, ['rqsj_dianji', 'rqsj_leizhan', 'rqsj_jilei', 'rqsj_jiaqiang1'], []],
                        rqsj_lansi: ['female', 'guijing', 3, ['rqsj_xurui', 'rqsj_shangci', 'rqsj_yongxing', 'rqsj_sksn', 'rqsj_jiaqiang1'], ['des:<li>【基础信息】<br>技能设计:§<br>联动改动:染柒<br>故事:爪巴<br>角色配音:棠梨<br>称号:<font color=#D9FFFF>幽影利锋</font><br>姓名:兰斯·伽岚<br><br><li>【能力数据】<br>身份定位:内奸,反贼<br>能力定位:爆发,加伤<br><br><li>【人物背景】在班卡姆斯城艰难求生的<鼠人>,因东方弘道一行人的到来逐渐改变了命运的轨迹.<br><br>了解更多,请下载<时空枢纽>扩展']],
                        rqsj_shijian: ['female', 'mozu', 5, ['rqsj_gulaozhe', 'rqsj_fuji', 'rqsj_shenjuan', 'rqsj_jiaqiang3'], []],
                        rqsj_zhuaba: ['male', 'mozu', 3, ['rqsj_gezibenzhi', 'rqsj_zibenlundiao', 'rqsj_jiaqiang1'], []],
                        rqsj_yanyu: ['female', 'mozu', 4, ['rqsj_lianhua', 'rqsj_yeqin', 'rqsj_jiaqiang3'], []],
                        rqsj_yingxingzhe: ['male', 'guijing', 3, ['rqsj_yingdun', 'rqsj_yingji', 'rqsj_yingpo', 'rqsj_jiaqiang1'], []],
                        rqsj_poxiaoshouwei: ['male', 'jingling', 3, ['rqsj_shouwang', 'rqsj_ciqiong', 'rqsj_jiaqiang1'], []],
                        rqsj_xiaoshuang: ['female', 'mozu', 4, ['rqsj_xianshi', 'rqsj_yixi'], []],
                    },
                    translate: {
                        baihuanvshen: '百花女神',
                        huajingling: '花精灵',
                        caiyigongzhu: '彩翼公主',
                        xiaoyangrenjisi: '枭羊人祭司',
                        jinglingwangzi: '精灵王子',
                        fuyunqingniao: '浮云青鸟',
                        chitongmodao: '赤瞳魔剑士',
                        nvshenshizhe: '女神侍者',
                        manhuangwuyi: '荒地巫医',
                        duoluojingling: '堕落精灵',
                        yimingzhizhao: '易命之昭',
                        xvying: '虚影',
                        zhanyitianshi: '战疫天使',
                        moguxianzi: '蘑菇仙子',
                        jinshufashi: '禁术法师',
                        leidianzhijiao: '雷电之角',
                        duoluojinglingfashi: '堕落精灵法师',
                        huoxiangrenweishi: '火象人卫士',
                        tanlanzhixin: '贪婪之心',
                        shishimo: '食尸魔',
                        mengyan: '梦魇',
                        rqsenlinlang: '森林狼',
                        ansharenou: '暗杀人偶',
                        kuloufashi: '骷髅法师',
                        banshirenwushi: '半狮人武士',
                        dongfangchanshi: '东方禅师',
                        shikonglvzhe: '时空旅者',
                        wangguochushizhang: '王国厨师长',
                        qiangpaomeigui: '枪炮玫瑰',
                        duyanjuren: '独眼巨人',
                        wuyarenzhanglao: '乌鸦人长老',
                        huangyuanlieshou: '荒原猎手',
                        hetong: '河童',
                        gulong: '骨龙',
                        kulouzhanshi: '骷髅战士',
                        zongxirencike: '鬃蜥人刺客',
                        jinglinganshazhe: '精灵暗杀者',
                        dongfanghuanshushi: '东方幻术师',
                        hjws_zhangheng: '张衡',
                        hjws_wangzhaojun: '王昭君',
                        rqsj_qin: '凤求凰',
                        rqsj_qi: '流光碎影',
                        rqsj_shu: '快雪时晴',
                        rqsj_hua: '汉宫春晓',
                        hanchaowangshi: '汉朝往事',
                        qinqishuhua: '琴棋书画',
                        hanmodaoren: '汉末道人',
                        qiwenyishi: '柒闻逸事',
                        huanxiangdalu_yansheng: '衍生(默认ai禁选)',
                        rqsj_zuoci: '左慈',
                        rqsj_sp_zuoci: 'sp左慈',
                        langrenduijue: '狼人对决',
                        huanxiangdalu: '幻想大陆',
                        rqsj_caiyigongzhu: '彩翼公主',
                        rqsj_xiaoyangrenjisi: '枭羊人祭司',
                        rqsj_jinglingwangzi: '精灵王子',
                        rqsj_anyegongjue: '蝙蝠恶灵',
                        rqsj_fuyunqingniao: '花木精灵',
                        rqsj_chitongmodao: '赤瞳魔剑士',
                        rqsj_nvshenshizhe: '女神侍者',
                        rqsj_manhuangwuyi: '荒地巫医',
                        rqsj_duoluojingling: '堕落精灵',
                        rqsj_yuji: '于吉',
                        rqsj_yimingzhizhao: '易命之昭',
                        rqsj_xvying: '虚影',
                        rqsj_zhanyitianshi: '战疫天使',
                        rqsj_huajingling: '花精灵',
                        rqsj_moguxianzi: '蘑菇仙子',
                        rqsj_jinshufashi: '禁术法师',
                        rqsj_leidianzhijiao: '兽语驾驭者',
                        rqsj_duoluojinglingfashi: '堕落精灵法师',
                        rqsj_huoxiangrenweishi: '火象人卫士',
                        rqsj_tanlanzhixin: '贪婪之心',
                        rqsj_shishimo: '食尸魔',
                        rqsj_mengyan: '梦仙灵',
                        rqsj_senlinlang: '森林狼',
                        rqsj_ansharenou: '暗杀人偶',
                        rqsj_kuloufashi: '骷髅法师',
                        rqsj_banshirenwushi: '半狮人武士',
                        rqsj_dongfangchanshi: '东方禅师',
                        rqsj_shikonglvzhe: '时空旅者',
                        rqsj_baihuanvshen: '百花女神',
                        rqsj_wangguochushizhang: '王国厨师长',
                        rqsj_qiangpaomeigui: '枪炮玫瑰',
                        lrdj_nvwu: '女巫',
                        lrdj_langren: '狼人',
                        lrdj_zongyuenvhai: '纵月女孩',
                        lrdj_wuya: '乌鸦',
                        lrdj_yinlang: '隐狼',
                        lrdj_dulang: '毒狼',
                        lrdj_baichi: '白痴',
                        lrdj_duoluoshenzhi: '堕落神职',
                        rqsj_ranqi: '染柒',
                        rqsj_youmaodexianyu: '幼猫的咸鱼',
                        rqsj_ansha: '俺杀',
                        rqsj_duyanjuren: '独眼巨人',
                        rqsj_wuyarenzhanglao: '乌鸦人长老',
                        rqsj_huangyuanlieshou: '荒原猎手',
                        rqsj_hetong: '河童',
                        rqsj_gulong: '骨龙',
                        rqsj_kulouzhanshi: '骷髅战士',
                        rqsj_zongxirencike: '鬃蜥人刺客',
                        rqsj_mushi: '牧师',
                        rqsj_jinglinganshazhe: '精灵暗杀者',
                        rqsj_dongfanghuanshushi: '东方幻术师',
                        rqsj_huanyuxingcheng: '寰宇星城',
                        rqsj_banlurenjisi: '半鹿人祭司',
                        rqsj_zhouyuandaocaoren: '咒怨稻草人',
                        rqsj_yusheshen: '羽蛇神',
                        rqsj_huangjiahuweiduizhang: '皇家护卫队长',
                        rqsj_haichaogeji: '海潮歌姬',
                        rqsj_youyinshiren: '游吟诗人',
                        rqsj_diyucaijueguan: '地狱裁决官',
                        rqsj_huijin: '辉烬贺流年',
                        rqsj_datushuguanzhang: '大图书馆长',
                        rqsj_lansi: '兰斯',
                        rqsj_liandong: '联动',
                        rqsj_shijian: '诗笺',
                        rqsj_zhuaba: '爪巴',
                        rqsj_yanyu: '烟雨墨染',
                        rqsj_yingxingzhe: '影行者',
                        rqsj_poxiaoshouwei: '破晓守卫',
                        rqsj_xiaoshuang: '竹林七闲',
                        wzj_gongxuan: '宫选',
                        wzj_gongxuan_info: '每人回合限一次,你可以将一张锦囊牌当做【闪】使用或打出,你摸2张牌.',
                        wzj_yinyue: '吟月',
                        wzj_yinyue_info: '<li>锁定技,你区域内的♠️️牌和♠️️判定牌均视为♣️️,你区域内的♦️️牌和♦️️判定牌均视为♥️️.<li>参与拼点或判定后,若你的手牌小于你的体力上限,则补至体力上限或摸一张牌.',
                        wzj_bulu: '不赂',
                        wzj_bulu_info: '觉醒技,准备阶段当你使用的三次及以上"宫选"后,失去"宫选",获得技能"说帝",并加一体力上限且回复一点体力.',
                        wzj_shuidi: '说帝',
                        wzj_shuidi_info: '出牌阶段限一次,你可以与一名男性角色拼点,若你赢,则失去此技能,获得"出塞"和"和亲"并失去一点体力上限.',
                        wzj_shuidi1: '说帝',
                        wzj_shuidi1_info: '',
                        wzj_chusai: '出塞',
                        wzj_chusai_info: '摸牌阶段,你可以改为从牌堆顶亮出三张牌,选择获得不同花色的牌各一张,若你手牌依旧少于4,摸一张牌.',
                        wzj_heqin: '和亲',
                        wzj_heqin_info: '觉醒技,结束阶段开始时,你可以展示所有手牌,若这些牌颜色均相同,则你失去出塞,获得相知和随俗.',
                        wzj_xiangzhi: '相知',
                        wzj_xiangzhi_info: '其他角色摸牌阶段,你可以摸一张牌,则其本回合第一张"杀"伤害加一;你的摸牌阶段,你可以少摸一张并指定一名其他角色,则该角色于你的回合结束回复一点体力并摸一张牌.',
                        wzj_xiangzhi2: '相知',
                        wzj_xiangzhi2_info: '下一个杀伤害+1',
                        wzj_suisu: '随俗',
                        wzj_suisu_info: '任意角色回合开始时,你获得下列技能中的任意一个:<出塞>、 "落雁"和<宫选>,失去这个技能',
                        wzj_luoyan: '落雁',
                        wzj_luoyan_info: '锁定技,你防止即将受到的伤害,改为流失一点体力',
                        wzj_xiangzhi1: '相知',
                        wzj_xiangzhi1_info: '摸牌阶段,你可以少摸一张牌并指定一名名其他角色.若如此做,这名角色摸一张牌并回复一点体力.',
                        xianren_qianhuan: '千幻',
                        xianren_qianhuan_info: '每个回合结束阶段,你从3个体力上限不小于你体力值的武将中选择一个并替换武将牌,此过程中你的体力值不变.',
                        xianren_chidiao: '池钓',
                        xianren_chidiao_info: '当你失去最后的手牌时,你可以令至多X名角色各摸一张牌(X为你的体力值).',
                        xianren_zhibei: '掷杯',
                        xianren_zhibei_info: '出牌阶段,你可以重铸装备牌,若是本回合第一次使用,摸一张牌.',
                        hhhc: '掷杯',
                        hhhc_info: '',
                        xianren_shenti: '神体',
                        xianren_shenti_info: '锁定技,当你被翻面或横置时,取消之.',
                        xianren_shenti1: '神体',
                        xianren_shenti1_info: '',
                        caiyi_liuguang: '琉光',
                        caiyi_liuguang_info: '一名其他角色的出牌阶段开始时,你可以摸三张牌,交给其两张牌.若如此做,你失去一点体力上限.',
                        caiyi_zhuci: '祝辞',
                        caiyi_zhuci_info: '出牌阶段限一次,若你体力上限小于6,你可以弃置两张牌,增加一点体力上限令一名角色回复一点体力,并解除该角色的负面状态.',
                        qingniao_xiangyun: '祥云',
                        qingniao_xiangyun_info: '锁定技,游戏开始时,废除你的判定区',
                        qimgniao_qingluan: '青鸾',
                        qimgniao_qingluan_info: '每当你于回合外失去牌时,你可以进行一次判定,若结果为红色,你摸一张牌',
                        chijian_jiebei: '戒备',
                        chijian_jiebei_info: '当你失去最后的手牌时,你有50%概率获得一点护甲并有50%概率摸一张牌.',
                        chijian_xiaoji: '骁骑',
                        chijian_xiaoji_info: '每当你失去一张装备牌,可以摸一张牌;锁定技,你的进攻距离+1',
                        chijian_shicong: '守阁',
                        chijian_shicong_info: '出牌阶段限一次,你可以弃置一张手牌并令一名没有护甲的其他角色获得一点护甲,如若此作,其获得技能享乐直到其回合结束.',
                        wuyi_duyi: '毒医',
                        wuyi_duyi_info: '出牌阶段,你可以令一名不在中毒状态的角色回复一点体力并进入中毒状态或令一名中毒状态的角色移除中毒状态,每阶段限不同角色共两次',
                        wuyi_duli: '毒理',
                        wuyi_duli_info: '有角色因使用、打出或弃置而失去毒素时,你可以摸一张牌',
                        wuyi_jijiu: '急救',
                        wuyi_jijiu_info: '你的回合外,你可以将一张红色牌当做【桃】使用.',
                        shizhe_guiyuan: '归愿',
                        shizhe_guiyuan_info: '每当你流失体力或受到伤害时,你可以摸一张牌',
                        shizhe_shouhu: '守护',
                        shizhe_shouhu_info: '出牌阶段,你可以弃置一张杀令一名其他角色回复一点体力',
                        rqsj_biyue: '闭月',
                        rqsj_biyue_info: '结束阶段,你可以摸一张牌.',
                        wangzi_lingdie: '灵蝶',
                        wangzi_lingdie_info: '当你使用杀被闪抵消时,你可以摸一张牌,并获得一层灵蝶标记.',
                        wangzi_jiangfu: '晓星·符',
                        wangzi_jiangfu_info: '准备阶段,获得一点护甲摸一张牌,移除该技能.',
                        falixitong4: '天赐',
                        falixitong4_info: '回合开始阶段及游戏开始阶段,若法力值小于四,将法力补至四点',
                        rqsj_fali: '法力',
                        rqsj_fali_info: '',
                        rqsj_xichen: '西沉',
                        rqsj_xichen_info: '技能设计参与者',
                        cike_lingqiao: '灵巧',
                        cike_lingqiao_info: '受到伤害时,有35%可能性取消伤害.<br>增强时为40%</br>',
                        cike_beici: '背刺',
                        cike_beici_info: '造成伤害时,有35%可能性令伤害+1.<br>增强时为40%</br>',
                        wangzi_diewu: '蝶舞',
                        wangzi_diewu_info: '锁定技,若你的灵蝶标记数不小于1,则你视为拥有技能【飞影】,若你的灵蝶标记数不小于2,则你视为拥有技能【闭月】,若你的灵蝶标记数不小于3,则你视为拥有技能【凌威】,若你的灵蝶标记数不小于4,则你视为拥有技能【晓星】.<br>增强时开局减一体力上限并获得三个灵蝶标记',
                        rqsj_jidian: '祭典',
                        rqsj_jidian_info: '出牌阶段开始时,你可以消耗一点法力,观看牌堆顶的六张牌,将其中的三张牌置于牌堆顶,并将其余的牌以任意顺序置于牌堆底,最后选择回复一点体力或者摸一张牌.',
                        jisi_muen: '沐恩',
                        jisi_muen_info: "一名角色摸牌阶段,你可以消耗一点法力,令其牌堆顶摸牌减一,牌堆底摸牌加一,若其体力值不大于你,为其附着<span style='color: #B886CB;'>土元素</span>.",
                        rqsj_huanyu: '唤雨·桃园',
                        rqsj_huanyu_info: '出牌阶段,你可以将你的任意一张♥️️手牌当作【桃园结义】使用;你可以将你的任意一张♣️️手牌当作【五谷丰登】使用,如若次做,每回合限一次,摸两张牌.',
                        rqsj_huanyu1: '唤雨·五谷',
                        rqsj_huanyu1_info: '出牌阶段,你可以将你的任意一张♣️️手牌当作【五谷丰登】使用.',
                        rqsj_huanyuoff: '唤雨',
                        rqsj_huanyuoff_info: '',
                        rqsj_huanyu0: '唤雨',
                        rqsj_huanyu0_info: '出牌阶段,你可以将你的任意一张♥️️手牌当作【桃园结义】使用;你可以将你的任意一张♣️️手牌当作【五谷丰登】使用.如若此做,每回合限一次,摸两张牌.',
                        rqsj_zhouyuan: '缠怨',
                        rqsj_zhouyuan_info: '你死亡时,若击杀你的角色体力值不为1,则其体力变为1并减少一点体力上限,否则其失去所有技能',
                        rqsj_eyunchanshen: '厄运缠身',
                        rqsj_eyunchanshen_info: '出牌阶段限一次,弃置一张手牌并选择一至五名角色,直到其回合结束,其于回合外使用牌后需要判定,若为♠️️则流失一点体力.',
                        rqsj_tianmingpanjue: '天命判决',
                        rqsj_tianmingpanjue_info: '一名角色的判定牌生效前,你可以打出一张♠️️或♥️️牌替换之.',
                        rqsj_ruyingsuixing: '如影随形',
                        rqsj_ruyingsuixing_info: '当你进入濒死状态时,可以将武将牌替换成虚影并摸一张牌.',
                        rqsj_shenqian: '神谴',
                        rqsj_shenqian_info: '使用杀被闪抵消时,对对方造成两点伤害.',
                        rqsj_xieyingzhishi: '邪影智蚀',
                        rqsj_xieyingzhishi_info: '结束阶段,你将武将牌换为易命之昭并摸一张牌,此过程中你的体力值不变.',
                        rqsj_eyun: '厄运',
                        rqsj_eyun_info: '',
                        rqsj_tianmingpanjue_hong: '判决·♥️️',
                        rqsj_tianmingpanjue_hong_info: '',
                        rqsj_tianmingpanjue_hei: '判决·♠️️',
                        rqsj_tianmingpanjue_hei_info: '',
                        rqsj_diexi2: '蝶戏',
                        rqsj_diexi2_info: '',
                        rqsj_diexi: '蝶戏',
                        rqsj_diexi_info: '主公技,其他吴势力或森林角色的出牌阶段限一次,若其在你的攻击范围内,其可以令你选择:对其使用杀或者其摸一张牌',
                        rqsj_diewu3: '蝶戏',
                        rqsj_diewu3_info: '',
                        zhangheng_muniao: '木鸟',
                        zhangheng_muniao_info: '锁定技,1.你的手牌上限+1.2.你的防御距离+1',
                        zhangheng_shuxing: '数星',
                        zhangheng_shuxing_info: '摸牌阶段,你可以改为亮出牌堆顶的四张牌.获得其中任意数量点数之和不大于13的牌',
                        zhangheng_jiangxin1: '匠心',
                        zhangheng_jiangxin1_info: '',
                        zhangheng_jiangxin: '匠心',
                        zhangheng_jiangxin_info: '游戏开始时,你从中数星,出相,地动,浑天,瑞轮,指南,木鸟中获得三个技能',
                        zhangheng_didong: '地动',
                        zhangheng_didong_info: '结束阶段,将"地"标记补至3,你的回合外,当有其他角色因弃置而失去锦囊牌牌时,你可以移除一个"地"并摸一张牌.',
                        zhangheng_huntian: '浑天',
                        zhangheng_huntian_info: '转换技,①出牌阶段限一次,摸一张牌,弃一张牌.②出牌阶段限一次摸两张牌,弃一张牌.',
                        zhangheng_ruilun: '瑞轮',
                        zhangheng_ruilun_info: '结束阶段开始时,若你体力上限小于4,你可以展示所有手牌,若这些牌颜色均相同,则你增加一点体力上限并回复一点体力.',
                        zhangheng_chuxiang: '出相',
                        zhangheng_chuxiang_info: '每回合限一次,当有角色受到【杀】造成的伤害后,你可以与之各摸一张牌,若该角色是自己,则改为摸两张牌',
                        zhangheng_zhinan: '指南',
                        zhangheng_zhinan_info: '当你需要使用或打出一张【闪】时,你可以进行一次判定,若判定结果为♥️️,视为你使用或打出了一张【闪】.',
                        zhangheng_jiangxin2: '匠心',
                        zhangheng_jiangxin2_info: '',
                        zhangheng_jiangxin3: '匠心',
                        zhangheng_jiangxin3_info: '',
                        zhangheng_di: '地动',
                        zhangheng_di_info: '你的回合外,当有其他角色因弃置而失去锦囊牌牌时,你可以移除一个"地"并摸一张牌.',
                        rqsj_baoling: '孢灵',
                        rqsj_baoling_info: '当你的体力值小于四且手牌数小于X时,你可以将手牌摸至X张(X为4-你的体力值)',
                        rqsj_baozhang: '孢涨',
                        rqsj_baozhang_info: '<li>结束阶段,若你未损失体力,则你增加一点体力上限.<li>结束阶段,若你的体力为一,回复一点体力.',
                        rqsj_tuisan: '褪散',
                        rqsj_tuisan_info: '受到伤害时,若你的损失体力值大于二,可以减少两点体力上限,抵消此伤害.',
                        rqsj_yinlei: '引雷',
                        rqsj_yinlei_info: '准备阶段开始时,你可以令一名角色判定,若为黑其受到一点雷电伤害,若为♣️️,你额外回复一点体力.',
                        shishimo_shishi: '食尸',
                        shishimo_shishi_info: '锁定技,当一名角色死亡时,你可以增加一点体力上限或回复一点体力.',
                        rqsj_cisha: '刺杀',
                        rqsj_cisha_info: '造成伤害时,可以流失一点体力,令伤害+1',
                        rqsj_shixue: '嗜血',
                        rqsj_shixue_info: '摸牌阶段,你可以少摸一张牌.若如此做,当你本回合内使用【杀】或【决斗】造成伤害时,此伤害+1.',
                        rqsj_ranjin: '燃烬',
                        rqsj_ranjin_info: '锁定技,当你受到伤害后,伤害来源于当前回合结束受到x点火焰伤害(x为其对你造成伤害的次数).',
                        rqsj_ranshao: '燃烧',
                        rqsj_ranshao_info: '',
                        rqsj_jianyue: '溅跃',
                        rqsj_jianyue_info: '锁定技,当你受到雷属性伤害时,你防止此伤害,并可以指定一名角色,其摸伤害点数张牌.',
                        rqsj_jinshu: '禁术',
                        rqsj_jinshu_info: '每回合限一次,当你弃置非基本牌后,你可以获得一点法力并摸两张牌',
                        rqsj_dugu: '毒蛊',
                        rqsj_dugu_info: '结束阶段,若你的法力值大于1,你可以选择一名有手牌的角色将其一张随机的非毒手牌转化为毒素,失去两点法力并回复一点体力(溢出则为护甲).',
                        rqsj_wuduan: '无端',
                        rqsj_wuduan_info: '准备阶段,若你没有手牌,你可以摸三张牌并为一名角色附着火元素.',
                        rqsj_sizhong: '收割',
                        rqsj_sizhong_info: '击杀角色时,你可以回复一点体力',
                        rqsj_huichun: '回春',
                        rqsj_huichun_info: '结束阶段,若你的体力值为一,回复一点体力,并摸两张牌.',
                        rqsj_feiying: '飞影',
                        rqsj_feiying_info: '锁定技,其他角色计算与你的距离时+1.',
                        huntianspot: '浑天',
                        huntianspot_info: '',
                        wangzi_xiaoxing: '晓星',
                        wangzi_xiaoxing_info: '出牌阶段限两次,你可以减少一层灵蝶,选择一名角色,其获得晓星·符.',
                        wangzi_lingwei: '凌威',
                        wangzi_lingwei_info: '锁定技,攻击范围+1',
                        rqsj_senlin: '森林',
                        rqsj_senlin_info: '',
                        rqsj_shuangxing: '霜星',
                        rqsj_shuangxing_info: '出牌阶段,你可以消耗两点法力,摸两张牌或回复一点体力',
                        rqsj_shifa: '噬法',
                        rqsj_shifa_info: '锁定技,每回合限三次,造成伤害后,获得两点法力,若你此前法力值不大于一,则改为获得三点法力.',
                        rqsj_duoyuan: '堕源',
                        rqsj_duoyuan_info: '结束阶段,若你的法力值大于6,则你可以减少六点对所有角色造成一点火焰伤害.',
                        rqsj_tanshi: '贪舐',
                        rqsj_tanshi_info: '每名角色出牌阶段限两次,其可以摸x+2张牌,流失x+1点体力.(x为已发动此技能的次数,变化武将牌时可能会清除次数)',
                        rqsj_tanshi2: '贪舐',
                        rqsj_tanshi2_info: '每名角色出牌阶段限两次,其可以摸x+2张牌,流失x+1点体力.(x为已发动此技能的次数,变化武将牌时可能会清除次数)',
                        rqsj_tanlan: '贪婪',
                        rqsj_tanlan_info: '',
                        rqsj_liancai: '敛财',
                        rqsj_liancai_info: '出牌阶段限一次,清除一名角色使用贪舐的次数,你摸起等量的牌',
                        rqsj_gedang: '格挡',
                        rqsj_gedang_info: '锁定技,每轮开始时,若你没有护甲且场上人数大于3,获得一点护甲,并摸x张牌(x为你已损失的体力值与1的较小值)',
                        rqsj_huwei: '护卫',
                        rqsj_huwei_info: '当一名角色成为【杀】的目标后,若你至该角色的距离为1,且你的勇气值大于0,你可以令其摸x张牌并减少一点勇气(x为3-你的勇气值且最少为1).',
                        rqsj_yongqi3: '神勇',
                        rqsj_yongqi3_info: '回合开始阶段及游戏开始阶段,若勇气值小于三,你可以将勇气补至3点',
                        rqsj_yongqi: '勇气',
                        rqsj_yongqi_info: '',
                        rqsj_xuelian: '血炼',
                        rqsj_xuelian_info: '出牌阶段限一次,你可以弃置两张牌对体力值不小于你的一名其他角色造成1点伤害,你回复一点体力(若溢出则为护甲).',
                        rqsj_fali3: '通法',
                        rqsj_fali3_info: '回合开始阶段及游戏开始阶段,若法力值小于三,将法力补至三点',
                        rqsj_fali2: '灵泉',
                        rqsj_fali2_info: '回合开始阶段及游戏开始阶段,若法力值小于二,将法力补至两点',
                        rqsj_fali1: '法原',
                        rqsj_fali1_info: '回合开始阶段及游戏开始阶段,若法力值小于一,将法力补至一点',
                        rqsj_mingbao: '转生',
                        rqsj_mingbao_info: '锁定技,你的手牌上限+2;当你进入濒死状态时,你有50%概率回复一点体力.',
                        rqsj_hengsao: '横扫',
                        rqsj_hengsao_info: '每当你造成一次杀的伤害,可以指定距离受伤害角色1以内的一名其他角色,该角色受到一点伤害',
                        rqsj_shihou: '狮吼',
                        rqsj_shihou_info: '当你使用【杀】造成伤害后,可令此杀不计次数并摸一张牌.',
                        rqsj_wuyuan: '悟缘',
                        rqsj_wuyuan_info: '锁定技,你不能成为【乐不思蜀】的目标,成为【顺手牵羊】目标时摸一张牌.',
                        rqsj_xiuchan: '修禅',
                        rqsj_xiuchan_info: '每回合限一次,当你造成伤害后,可选择:①回复一点体力并摸一张牌,直到结束阶段,手牌上限减一;②弃一张牌,结束阶段摸两张牌.',
                        rqsj_xiuchan2: '修禅',
                        rqsj_xiuchan2_info: '',
                        rqsj_shikongchuansuo: '时空穿梭',
                        rqsj_shikongchuansuo_info: '每轮限一次,任意角色回合结束时,你可以执行一个额外的回合.若场上角色数不大于三,则改为摸一张牌并可以使用一张牌.',
                        rqsj_kongjianxingnang: '空间行囊',
                        rqsj_kongjianxingnang_info: '锁定技,游戏开始时,随机装备一个装备并摸两张牌',
                        rqsj_yanzhengjinjie: '严正警戒',
                        rqsj_yanzhengjinjie_info: '当有角色受到非【杀】造成的伤害后,你可以令其回复一点体力你获得一点勇气摸一张牌,你流失一点体力.',
                        rqsj_bingqingzuge: '病情阻隔',
                        rqsj_bingqingzuge_info: '觉醒技,准备阶段,若你勇气大于体力且体力值不满,须回复1点体力并减一体力上限,并获得技能〖妙手回春〗.<br>增强时取消战疫天使觉醒对勇气的需求.</br>',
                        rqsj_miaoshouhuichun: '妙手回春',
                        rqsj_miaoshouhuichun_info: '当一名角色处于濒死状态时,若你没有"急救",可以减少两点勇气,获得急救直到回合结束并摸一张牌,若你已有"急救"可以减一点勇气,并摸一张牌.',
                        rqsj_jijiu_zhanyitianshi: '急救',
                        rqsj_jijiu_zhanyitianshi_info: '你的回合外,你可以将一张红色牌当做【桃】使用.',
                        rqsj_baihuanvshen1: '花之气息',
                        rqsj_baihuanvshen1_info: '结束阶段,若你的体力值不满,减一体力上限并回复失去的自身技能并召唤随从花精灵',
                        rqsj_huawu: '花舞',
                        rqsj_huawu_info: '每当你于回合内使用第二张牌时,你可以从牌堆中随机获得一张与之类型相同的牌并失去此技能',
                        rqsj_huameng: '花梦',
                        rqsj_huameng_info: '一名角色的判定牌生效前,你可以摸两张牌并打出一张手牌代替之,你失去此技能.',
                        rqsj_liuxiang: '留香',
                        rqsj_liuxiang_info: '',
                        rqsj_huazhibenyuan: '花之本源',
                        rqsj_huazhibenyuan_info: '锁定技,准备阶段,你执行以下一项:①摸一张牌;②摸一张牌,本回合自身携带技能不会消失.若你的体力上限为1,则改为增加两点体力上限,增加一点护甲并摸一张牌,失去花之气息',
                        rqsj_huazhibenyuan1: '花之本源',
                        rqsj_huazhibenyuan1_info: '',
                        rqsj_chujvzhaohuan: '厨具召唤',
                        rqsj_chujvzhaohuan_info: '出牌阶段限一次,重铸一张装备牌,如若此作,你摸一张牌并获得一张随机装备牌',
                        rqsj_dacan: '大餐',
                        rqsj_dacan_info: '锁定技,每三轮限一次,准备阶段,场上所有角色随机获得一张美食牌[概率公示:优质火鸡30%,金牌火鸡30%,圣诞火鸡30%,除夕大餐10%].',
                        rqsj_cujinxiaohua: '促进消化',
                        rqsj_cujinxiaohua_info: '当你造成伤害后,若受伤害角色有"留香",则其减少一点留香,你摸一张牌.',
                        rqsj_shuangjiao: '双娇',
                        rqsj_shuangjiao_info: '',
                        rqsj_shuangjiao1: '双娇',
                        rqsj_shuangjiao1_info: "当你累计造成伤害或发动左轮三次后,可令一名角色回复一点体力,若体力值满则改为摸牌,此后可以使一名角色附着<span style='color: #00BFFF;'>水元素</span>.",
                        rqsj_ruodiangongji: '弱点攻击',
                        rqsj_ruodiangongji_info: '锁定技,当你使用【杀】指定目标后,此【杀】不可被闪避.',
                        rqsj_moshenzhijia: '魔神之甲',
                        rqsj_moshenzhijia_info: '锁定技,当你受到伤害后,你指定0-3名其他角色.他们须弃置两张手牌,否则受到来自你的一点伤害.',
                        rqsj_shenxingqiqiu_shenyuan: '神性祈求',
                        rqsj_shenxingqiqiu_shenyuan_info: '锁定技,准备阶段,清空自身所有技能并将武将牌重新替换成自己.',
                        rqsj_mianyi: '免疫',
                        rqsj_mianyi_info: '<li>锁定技,游戏开始时,废除你的判定区<li>锁定技,当你被翻面或横置时,取消之.',
                        rqsj_duyun_shenyuan: '毒云',
                        rqsj_duyun_shenyuan_info: '锁定技,摸牌阶段,场上除你外所有角色获得一张毒.',
                        rqsj_mingbaos: '冥爆',
                        rqsj_mingbaos_info: '当你脱离濒死阶段,可指定1名其他角色,他有50%概率受到1点火焰伤害,若造成伤害,你有40%再次执行步骤.',
                        lrdj_liangu: '炼蛊',
                        lrdj_liangu_info: '结束阶段开始时,你可以令没有手牌的角色摸起一张毒素,如若此作,回复一点体力.',
                        lrdj_dl: '毒狼',
                        lrdj_dl_info: '有角色因使用、打出或弃置而失去毒素时,你获得一张过河拆桥',
                        lrdj_qixi: '奇袭',
                        lrdj_qixi_info: '你可以将一张黑色牌当做【过河拆桥】使用.',
                        lrdj_yl: '隐狼',
                        lrdj_yl_info: '<li>锁定技,你的手牌上限加一.<li>每当一名角色在其出牌阶段使用【杀】时,你可弃置一张牌令此【杀】不计入出牌阶段使用次数,若此【杀】为黑色,你摸一张牌',
                        lrdj_jieming: '节命',
                        lrdj_jieming_info: '当你受到1点伤害后,你可令一名角色将手牌摸至X张(X为其体力上限且至多为5).',
                        lrdj_shafu: '傻福',
                        lrdj_shafu_info: '受到伤害后,你可以摸一张牌增加一点体力上限',
                        lrdj_huiyi: '回忆',
                        lrdj_huiyi_info: '结束阶段,若你损失的体力值大于等于2,可以弃一张牌并失去一点体力上限回复一点体力,摸一张牌',
                        lrdj_fangquan: '放权',
                        lrdj_fangquan_info: '你可跳过你的出牌阶段,若如此做,回合结束时,你可以弃置一张手牌并令一名其他角色进行一个额外的回合.',
                        lrdj_shuangyue: '双月',
                        lrdj_shuangyue_info: '锁定技,结束阶段,你执行一个额外的出牌阶段.',
                        lrdj_yueguang: '月光',
                        lrdj_yueguang_info: '出牌阶段开始时,你可以摸一张牌',
                        lrdj_yueyin: '月荫',
                        lrdj_yueyin_info: '出牌阶段结束时,若你本回合使用的牌数量大于你当前体力值,若你没有护甲,你获得一点护甲.',
                        lrdj_xisheng: '牺牲',
                        lrdj_xisheng_info: '每名其他角色的回合限一次,你可以将两张牌当做【桃】使用,摸一张牌.',
                        lrdj_duoluo: '堕落',
                        lrdj_duoluo_info: '<li>锁定技,手牌上限为2.<li>结束阶段,若你的体力是全场最少的(或之一),你可以令至多已损失体力数的角色各摸一张牌,你加一点护甲.',
                        lrdj_yaoshui: '药水',
                        lrdj_yaoshui_info: '回合摸牌阶段开始时,你可以进行一次判定,若为红,你获得技能治善直到回合结束,若为黑,你获得技能嫉恶直到回合结束.',
                        lrdj_jie: '嫉恶',
                        lrdj_jie_info: '出牌阶段,你可以令一名角色摸起一张毒药,每阶段限一次',
                        lrdj_zhishan: '治善',
                        lrdj_zhishan_info: '出牌阶段,你可以令一名角色摸起一张灵药,每阶段限一次',
                        lrdj_duyao: '毒药',
                        lrdj_duyao_info: '',
                        zhaojun_yinyuea: '吟月',
                        zhaojun_yinyuea_info: '',
                        zhaojun_yinyueb: '吟月',
                        zhaojun_yinyueb_info: '',
                        rqsj_xinwuduan: '无端',
                        rqsj_xinwuduan_info: '准备阶段,若你的手牌数小于体力值,可以弃置一张牌,并获得装备,基本,锦囊牌各一张',
                        rqsj_ganhuai: '感怀',
                        rqsj_ganhuai_info: '每名角色回合限一次,当有角色于其出牌阶段不因此技能摸牌时,你可以与之各摸一张牌(若为自己只摸一张)(台词是染柒自己写的,水平一般,请多多担待)',
                        rqsj_xiebug: '写bug',
                        rqsj_xiebug_info: '回复体力时,你可以令至多X名角色各摸一张牌(X为你的体力上限).',
                        rqsj_tiaoping: '调平',
                        rqsj_tiaoping_info: '出牌阶段限一次,你可以弃置一张手牌并令一名角色选择弃一张手牌或者流失一点体力',
                        rqsj_qinyin: '琴音',
                        rqsj_qinyin_info: '结束阶段,你可以摸一张牌.',
                        rqsj_shuifo: '睡佛',
                        rqsj_shuifo_info: '弃牌阶段开始时,若你于本回合使用的牌数小于体力值且对其他角色使用过牌的数量小于二,则你可以摸两张牌,如若此作手牌上限为体力上限+2.',
                        rqsj_shuifo2: '睡佛',
                        rqsj_shuifo2_info: '你的手牌上限为你的体力上限+2.',
                        rqsj_xuxing: '续行',
                        rqsj_xuxing_info: '出牌阶段限两次,你可以弃置一张牌,摸一张牌.',
                        rqsj_huantian: '幻天',
                        rqsj_huantian_info: '受到伤害时,可以弃置两张手牌(若手牌数大于体力上限则为三张),抵消之.',
                        rqsj_badao: '拔刀',
                        rqsj_badao_info: '一名角色回合开始时,若你没有装备武器牌,可以弃置一张牌,随机装备一个',
                        rqsj_chaoyue: '超越',
                        rqsj_chaoyue_info: "每回合限两次,造成伤害时,若你的装备区有武器牌,可以弃置之,摸三张牌,若受伤角色存活且不是你,为其附着<span style='color: #ADFF2F;'>风元素</span>.",
                        免疫流血: '免疫流血',
                        免疫流血_info: '',
                        rqsj_cuihui: '摧毁',
                        rqsj_cuihui_info: '当你使用【杀】造成伤害后,可以摧毁对方的防具栏和防御坐骑栏,如若此作,你减少一点体力上限并封印此技能.',
                        rqsj_xuenu: '血怒',
                        rqsj_xuenu_info: '锁定技,当一名角色死亡时,若其装备栏和防御坐骑栏均被废除,你解除【摧毁】封印,并回复一点体力,若体力已满,则改为增加一点体力上限.',
                        rqsj_zuolun: '左轮',
                        rqsj_zuolun_info: '出牌阶段限一次,你可以选择一张手牌并指定两名角色进行拼点,拼点赢的角色没赢的角色造成一点伤害,你获得一层双骄',
                        rqsj_huajinglinghuantou: '花精灵',
                        rqsj_huajinglinghuantou_info: '',
                        rqsj_huanshubug: '幻术',
                        rqsj_huanshubug_info: '你可以将一张♦️️牌当做【杀】【闪】或【无懈可击】使用',
                        rqsj_huanshu: '幻术',
                        rqsj_huanshu_info: '锁定技,你回复体力时,若体力值大于零,发现一个技能并获得之直到你回合结束',
                        rqsj_ezhao: '厄兆',
                        rqsj_ezhao_info: '锁定技,当你摸牌时,改为从牌堆底摸牌,如若此作,你可以选择一名没有厄运的角色,直到其回合结束,其于回合外使用牌后需要判定,若为♠️️则流失一点体力.',
                        rqsj_hansheng: '寒声',
                        rqsj_hansheng_info: '出牌阶段限一次,你可以令一名有厄运的体力值或手牌数大于你的其他角色流失一点体力.该角色可以使用一张牌.',
                        rqsj_chuanyang: '穿杨',
                        rqsj_chuanyang_info: '锁定技,你的攻击范围+3.',
                        rqsj_anlie: '暗猎',
                        rqsj_anlie_info: '一名其他角色的结束阶段开始时,你可以对其使用一张杀或决斗或过河拆桥或火攻.',
                        rqsj_shefu: '设伏',
                        rqsj_shefu_info: '结束阶段,若你体力不满且没有护甲,可以将武将牌翻面并摸一张牌获得一点护甲,如若去做你获得暗猎直到下个出牌阶段开始',
                        rqsj_wuran: '污染',
                        rqsj_wuran_info: '造成伤害后,若你的法力值小于三,你增加一点法力;若其势力为吴或森林,将其势力变为地狱',
                        rqsj_faling: '法灵',
                        rqsj_faling_info: '<li>结束阶段,若你的法力大于零,摸起法力张牌并清除法力;<li>锁定技,摸牌阶段,你多摸x张牌(x为场上除你外的地狱势力角色数,至多为三)',
                        rqsj_falingmo: '法灵',
                        rqsj_falingmo_info: '',
                        rqsj_lingyun: '莲韵',
                        rqsj_lingyun_info: '准备阶段,你可以亮出牌堆顶的X张牌,获得其中的♣️️牌(X为4+你已损失的体力值)',
                        rqsj_linghuo: '玉影',
                        rqsj_linghuo_info: '你可以将一张♣️️牌当做【闪】使用或打出.',
                        rqsj_mojia: '魔甲',
                        rqsj_mojia_info: '锁定技,当你受到的伤害至多为一.',
                        rqsj_kulou: '转生',
                        rqsj_kulou_info: '锁定技,你的手牌上限+1;当你进入濒死状态时,你有50%概率回复一点体力.',
                        rqsj_anqi: '暗器',
                        rqsj_anqi_info: '出牌阶段限一次,你可以将一张武器牌当杀使用,此杀无视距离和防具,且不计入回合内出杀限制',
                        rqsj_susheng: '苏生',
                        rqsj_susheng_info: '在任意一名角色即将死亡时,你可以弃置一张手牌防止其死亡,并将其体力回复至1,每轮发动一次',
                        rqsj_chuanci: '穿刺',
                        rqsj_chuanci_info: '当你使用杀造成伤害,你可以弃置对方一张手牌或装备牌,你摸一张牌',
                        wangzi_biyue: '闭月',
                        wangzi_biyue_info: '结束阶段,你可以摸一张牌.',
                        rqsj_mihun: '迷魂',
                        rqsj_mihun_info: '每回合出牌阶段限一次,你可以将一张手牌交给一名角色,其选择:对你指定的另一名角色使用一张[杀]或者在判定区置入一张乐不思蜀,若其已有乐不思蜀或已废除判定区,改为你观看其手牌并弃置区域内两张牌.[代码执笔者:俺杀]',
                        rqsj_nichang: '霓裳',
                        rqsj_nichang_info: '当你受到[杀]的伤害后,抵消你下一次受到的[杀]的伤害.',
                        stone_huayu: '花语',
                        stone_huayu_info: '你登场时,召唤一个花精灵,否则,你和主将各摸一张牌',
                        stone_mogu: '孢子',
                        stone_mogu_info: '你登场时,召唤一个蘑菇仙子',
                        stone_gulong: '骨龙',
                        stone_gulong_info: '结束阶段,你可以减一体力上限并召唤一个骷髅战士,否则摸一张牌',
                        stone_shiguang: '时光',
                        stone_shiguang_info: '你登场的回合内,主将获得两点行动值',
                        rqsj_huopu: '火瀑',
                        rqsj_huopu_info: '出牌阶段限一次,你可以将一张♥️️牌当作流星火羽使用',
                        rqsj_qinzhu: '勤主',
                        rqsj_qinzhu_info: '有角色受到伤害时,你可以摸一张牌,并交给其一张手牌,如若此作,若该角色不是你,该回合弃牌阶段开始时,该角色弃置x张牌,x为你该回合对其发动此技能次数.',
                        rqsj_qinzhu_qi: '勤主',
                        rqsj_qinzhu_qi_info: '',
                        rqsj_xinzuo: '新作',
                        rqsj_xinzuo_info: '出牌阶段,你可以临时失去两点体力上限,摸三张牌.',
                        rqsj_xinzuo_hui: '新作',
                        rqsj_xinzuo_hui_info: '',
                        rqsj_xingmao: '星猫',
                        rqsj_xingmao_info: '锁定技,结束阶段,你随机获得标英姿,标英魂,激昂中的一个直到下个回合结束.',
                        xingmao_yingzi: '英姿',
                        xingmao_yingzi_info: '摸牌阶段,你可以多摸一张牌.',
                        xingmao_yinghun: '英魂',
                        xingmao_yinghun_info: '准备阶段开始时,若你已受伤,你可令一名其他角色执行一项:摸X张牌,弃置一张牌;或摸一张牌,弃置X张牌(X为你已损失的体力值)',
                        xingmao_jiang: '激昂',
                        xingmao_jiang_info: '每当你使用(指定目标后)或被使用(成为目标后)一张【决斗】或红色的【杀】时,你可以摸一张牌.',
                        rqsj_nichanga: '霓裳',
                        rqsj_nichanga_info: '抵消你受到的[杀]的伤害.',
                        rqsj_zhenyu: '振羽',
                        rqsj_zhenyu_info: '一名角色的回合结束时,若你本回合内击杀过角色,则你可以摸两张牌,随机弃置区域内一张牌.',
                        rqsj_qiximofang: '气息模仿',
                        rqsj_qiximofang_info: '每轮限一次,每当一名敌方角色于回合内使用主动技能,你获得此技能直到下一回合结束',
                        rqsj_beiyong: '备用',
                        rqsj_beiyong_info: '准备阶段,你可以弃置一张手牌视为对所有敌方角色使用一张万箭齐发',
                        rqsj_jiangzhou: '降咒',
                        rqsj_jiangzhou_info: '每两轮限一次,你可以选择一名未废除判定区的角色并弃一张手牌,如若此作,选择一张延时类锦囊牌置入其判定区.',
                        rqsj_guijia: '鬼甲',
                        rqsj_guijia_info: '锁定技,若你的体力值为全场最少,你受到的伤害始终-1',
                        rqsj_qufeng: '祛风',
                        rqsj_qufeng_info: '每两轮限一次,出牌阶段,你可以选择一名区域内有牌的其他角色.你随机获得其区域内的一张牌,其摸一张牌.若你以此法获得了两张颜色相同的牌,则你摸一张牌并获得两点法力.发动后额外获得一点法力.',
                        rqsj_guiying: '鬼影',
                        rqsj_guiying_info: '弃牌阶段,若你的手牌数小于体力值,摸牌至体力张.',
                        rqsj_jili: '祭礼',
                        rqsj_jili_info: '结束阶段,你可以弃一张牌,摸一张牌并使用之,若你使用了,则你增加两点法力',
                        rqsj_banluren_lingyu: '灵愈',
                        rqsj_banluren_lingyu_info: '出牌阶段,你可以消耗三点法力,令一名角色回复一点体力并摸一张牌.',
                        rqsj_雄才: 'rqsj_雄才',
                        rqsj_雄才_info: '锁定技,你在回合结束后随机获得一个魏势力角色的所有技能',
                        rqsj_lieguo: '猎果',
                        rqsj_lieguo_info: '当你于回合外造成伤害后,回复一点体力并摸两张牌.',
                        rqsj_jiyu: '疾羽',
                        rqsj_jiyu_info: '锁定技,摸牌阶段,摸牌数减一;攻击距离+2',
                        rqsj_longyin: '龙胤',
                        rqsj_longyin_info: '锁定技,当你失去最后的手牌时,若你的体力值大于一,流失一点体力.无论是否流失体力,都将手牌补至体力值',
                        rqsj_tongyu: '统御',
                        rqsj_tongyu_info: '每人回合限一次,当你造成伤害后,你可令一名没有护甲的角色获得一点护甲.',
                        rqsj_tongyu1: '统御',
                        rqsj_tongyu1_info: '',
                        rqsj_zhengdui: '整军',
                        rqsj_zhengdui_info: '准备阶段,若你有护甲,移除之摸等量+1张牌.',
                        rqsj_cuilian: '淬炼',
                        rqsj_cuilian_info: '有角色进入濒死阶段时,你摸一张牌,获得一点法力',
                        rqsj_wuneng: 'rqsj_wuneng',
                        rqsj_wuneng_info: '',
                        rqsj_yonglang: '咏浪',
                        rqsj_yonglang_info: '每当你使用或打出♦️️牌时,摸x张牌(x为第x次发动此技能每人回合结束衰减一)',
                        rqsj_yonglang1: '咏浪',
                        rqsj_yonglang1_info: '',
                        rqsj_zhongdu: '中毒',
                        rqsj_zhongdu_info: '弃牌阶段开始时,摸一张毒',
                        rqsj_shoujian: '手减',
                        rqsj_shoujian_info: '',
                        rqsj_songshi: '颂诗',
                        rqsj_songshi_info: '出牌阶段限10次,当你对一名角色连续使用牌时,你可以摸一张牌,回合内发动时,本回合手牌上限-2.',
                        rqsj_shoujian2: '手减',
                        rqsj_shoujian2_info: '',
                        rqsj_youyi: '游艺',
                        rqsj_youyi_info: '任意角色结束阶段,若你没有手牌,随机摸0-2张牌,若摸牌数为0,加一护甲',
                        rqsj_shou: '兽',
                        rqsj_shou_info: '生物类别标识:兽',
                        rqsj_remiyin: '迷音',
                        rqsj_remiyin_info: '当你使用或打出一张【闪】时,你可令一名其他角色弃一张牌并进入眩晕状态.',
                        rqsj_duanzui: '断罪',
                        rqsj_duanzui_info: '锁定技,当你使用【杀】指定目标后,每满足以下一项:①其体力值不少于你;②其手牌不少于你.你令此牌需要依次额外使用或打出一张【闪】响应.',
                        rqsj_lingdiebansheng: '灵蝶伴生',
                        rqsj_lingdiebansheng_info: '游戏开始时,减一体力上限获得3个灵蝶',
                        rqsj_yaohui: '耀辉',
                        rqsj_yaohui_info: '摸牌阶段,你可以获得一张星尘.<br>锁定技,你使用星尘获得勇气概率提升25%</br>',
                        rqsj_xingmang: '星芒',
                        rqsj_xingmang_info: '当你使用三张非转化的基本牌时,你可以获得一张星尘',
                        rqsj_xingyou: '星佑',
                        rqsj_xingyou_info: '锁定技,进入濒死阶段时,你每消耗两点勇气回复一点体力并摸一张牌.',
                        rqsj_dianji: '典籍',
                        rqsj_dianji_info: '当你使用非转化的普通锦囊牌时,获得一点法力并摸一张牌.',
                        rqsj_jilei: '亟雷',
                        rqsj_jilei_info: '每当你造成一次雷电伤害,可以消耗两点法力指定距离受伤害角色1以内的一名其他角色,该角色受到一点雷电伤害.',
                        rqsj_leizhan: '雷盏',
                        rqsj_leizhan_info: '出牌阶段限一次,你可以消耗三点法力对一名其他角色造成一点雷电伤害',
                        rqsj_xuanyun: '眩晕',
                        rqsj_xuanyun_info: '当你受到伤害后,你须随机弃置一张牌,并有55%概率移除该效果.',
                        rqsj_jiyan: '极焰',
                        rqsj_jiyan_info: '锁定技,造成的火属性伤害+1',
                        rqsj_dus: '毒素',
                        rqsj_dus_info: '',
                        rqsj_addfeng: '风附着',
                        rqsj_addfeng_info: '',
                        rqsj_addhuo: '火附着',
                        rqsj_addhuo_info: '',
                        rqsj_addshui: '水附着',
                        rqsj_addshui_info: '',
                        rqsj_addtu: '土附着',
                        rqsj_addtu_info: '',
                        rqsj_feng: '风',
                        rqsj_feng_info: '',
                        rqsj_huo: '火',
                        rqsj_huo_info: '',
                        rqsj_shui: '水',
                        rqsj_shui_info: '',
                        rqsj_tu: '土',
                        rqsj_tu_info: '',
                        rqsj_yuansu: '元素',
                        rqsj_yuansu_info: '',
                        nianlong_skill: '湿地黏龙',
                        nianlong_skill_info: '',
                        rqsj_sksn: '时空枢纽',
                        rqsj_sksn_info: '与扩展<时空枢纽>的联动人物',
                        rqsj_xurui: '蓄锐',
                        rqsj_xurui_info: '「<font color=#D9FFFF>不露锋芒</font>」<br><li>结束阶段/当你受到伤害后,你可以弃置一张手牌并令一名角色/伤害来源获得一枚‘锐’,你摸1张牌并获得一点勇气.( 每名角色至多有一枚‘锐’)',
                        rqsj_xurui_mark: '蓄锐',
                        rqsj_xurui_mark_info: '',
                        rqsj_shangci: '伤刺',
                        rqsj_shangci_info: '「<font color=#D9FFFF>鬼幽瞬杀</font>」<br><li>当你造成<span style="color: #FFC0CB">伤害</span>后,你可以移除受伤角色的"锐"指定距离受伤害角色1以内的一名其他角色,该角色受到一点伤害.',
                        rqsj_duyi1: '毒医',
                        rqsj_duyi1_info: '',
                        rqsj_yuci: '遇刺',
                        rqsj_yuci_info: '',
                        rqsj_yongxing: '勇行',
                        rqsj_yongxing_info: '「<font color=#D9FFFF>无畏而行</font>」<br><li>出牌阶段限一次,你可以消耗两点勇气,令一名角色本回合不能使用,打出牌.',
                        rqsj_yongxing2: '勇行',
                        rqsj_yongxing2_info: '',
                        rqsj_gulaozhe: '古老者的传谕',
                        rqsj_gulaozhe_info: '准备阶段,你可以令一名手牌数小于3的角色将手牌补至3张,你获得(已损失体力值与3的较小值)点法力,如若此作,若你的体力值大于一,你流失一点体力.',
                        rqsj_fujiyi: '符忌',
                        rqsj_fujiyi_info: '',
                        rqsj_fujihuo: '祸',
                        rqsj_fujihuo_info: '',
                        rqsj_fujifu: '福',
                        rqsj_fujifu_info: '',
                        rqsj_fuji: '符忌指示录',
                        rqsj_fuji_info: '出牌阶段,你可以消耗5-x点法力(至少2点)并指定一名体力值为x的本回合未成为此技能目标的角色,你令其回复一点体力或流失一点体力',
                        rqsj_shenjuan: '神眷',
                        rqsj_shenjuan_info: '出牌阶段开始时,若你没有法力,随机获得1-2点法力.',
                        rqsj_gezibenzhi: '鸽子本质',
                        rqsj_gezibenzhi_info: '<li>结束阶段,若你本回合未造成伤害,获得一个鸽子计数.<li> 造成伤害时,若你有鸽子计数,你可以消耗相应鸽子计数依次发动以下效果(若上一项未发动,则不能发动下一项):摸两张牌,回合结束为对方附着随机两个元素,令伤害+1.',
                        rqsj_gezibu: '鸽子本质',
                        rqsj_gezibu_info: '',
                        rqsj_zibenlundiao: '资本论调',
                        rqsj_zibenlundiao_info: '每回合出牌阶段限一次,你选择一名角色,若其手牌数仅大于体力,则弃牌至体力值,若大于体力上限,改为令你获得其区域内一张牌,若小于体力值,你摸其体力值与手牌数差值,并将相应手牌交给其.',
                        rqsj_gezifumian: '元素脆弱',
                        rqsj_gezifumian_info: '',
                        rqsj_lianhua: '连华',
                        rqsj_lianhua_info: '每回合限一次,当你使用一张基本牌或普通锦囊时,若你本回合使用过同类型的牌,你可以摸两张牌.(代码执笔者:烟雨墨染)',
                        rqsj_yeqin: '夜勤',
                        rqsj_yeqin_info: '每轮限一次,你的回合外,当一名角色受到伤害后,你可以弃置一张牌,如若此做,进入潜行状态至下回合开始,本回合结束后,你执行一个额外的出牌阶段并摸两张牌.该出牌阶段内,你使用牌无距离限制,此阶段结束时,若未有角色进入过濒死状态,你将武将牌翻至背面并移除潜行状态.(代码执笔者:烟雨墨染)',
                        rqsj_zhaoxinskill: '昭心',
                        rqsj_zhaoxinskill_info: '',
                        rqsj_zaoxin: '糟心',
                        rqsj_zaoxin_info: '',
                        rqsj_zhaoxin1: '昭心',
                        rqsj_zhaoxin1_info: '',
                        rqsj_jisiliguanskill: '祭司礼冠',
                        rqsj_jisiliguanskill_info: '',
                        rqsj_yingdun: '影遁',
                        rqsj_yingdun_info: '<li>锁定技,游戏开始时,进入潜行状态至出牌阶段结束.<li>结束阶段,若没有造成过伤害,且你不处于潜行状态,你可以弃一张牌,进入潜行状态至出牌阶段结束并回复一点体力或者摸两张牌.',
                        rqsj_yingji: '影袭',
                        rqsj_yingji_info: '造成伤害时,若你处于潜行状态,可以移除之,令伤害+1.',
                        rqsj_yingpo: '影破',
                        rqsj_yingpo_info: '锁定技,受到伤害时,若你处于潜行状态,移除之.',
                        rqsj_ruying: '入影',
                        rqsj_ruying_info: '锁定技,游戏开始时,进入潜行状态',
                        fengzhidiyu_skill: '风语_杀',
                        fengzhidiyu_skill_info: '出牌阶段限一次,你可以将一张武器牌当杀使用,此杀无视距离和防具,且不计入回合内出杀限制',
                        rqsj_fengyuoff: '风语',
                        rqsj_fengyuoff_info: '',
                        fengzhiqingyus_skill: '风语_过河',
                        fengzhiqingyus_skill_info: '你可以将一张黑色牌当做【过河拆桥】使用.',
                        rqsj_jiaqiang1: '加强',
                        rqsj_jiaqiang1_info: '锁定技,游戏开始时,若打开了加强开关,加一体力上限并回复一点体力',
                        rqsj_jiaqiang2: '英姿',
                        rqsj_jiaqiang2_info: '摸牌阶段,若你开启了加强开关,你可以多摸一张牌.',
                        rqsj_jiaqiang3: '闭月',
                        rqsj_jiaqiang3_info: '结束阶段,若你开启了加强开关,摸一张牌',
                        rqsj_shouwang: '守望',
                        rqsj_shouwang_info: '出牌阶段限两次,你可以与一名本回合未成为此技能目标的与你手牌数相同的角色各摸一张牌.',
                        rqsj_ciqiong: '刺穹',
                        rqsj_ciqiong_info: '每回合限两次,当有装备牌进入你的装备区时,你可以指定至多两名角色.若如此做,这些角色各摸一张牌.',
                        rqsj_shouwangoff: '守望',
                        rqsj_shouwangoff_info: '',
                        rqsj_qianxing: '潜行',
                        rqsj_qianxing_info: '',
                        rqsj_tuokun: '脱困',
                        rqsj_tuokun_info: '准备阶段,若你的判定区有牌,你可以弃置之摸一张牌,本回合手牌上限-2但基本牌不计入手牌上限.',
                        rqsj_tuokunfu: '脱困',
                        rqsj_tuokunfu_info: '',
                        rqsj_anfang: '暗访',
                        rqsj_anfang_info: '出牌阶段限一次,你可以弃置一张手牌,观看一名角色的手牌,若其中有杀则你获得一张闪,若其中有闪则你获得一张杀.',
                        rqsj_xianshi: '闲世',
                        rqsj_xianshi_info: '弃牌阶段开始时,若你未废除判定区或判定区无乐不思蜀,你置入一张,如若此作,跳过弃牌.',
                        rqsj_yixi: '逸息',
                        rqsj_yixi_info: '回合外当你成为基本牌的目标时,你可以摸一张牌或弃一张牌,若你选择弃牌,你可以使用任意张牌.',
                    },
                    skill: {
                        wzj_gongxuan: {
                            usable: 1,
                            init(player) {
                                player.storage.wzj_gongxuan = 0;
                            },
                            selectCard: 1,
                            audio: 'ext:染柒的世界/audio:2',
                            enable: ['chooseToRespond', 'chooseToUse'],
                            filterCard(card, player) {
                                return get.type(card, 'trick') == 'trick';
                            },
                            viewAs: {
                                name: 'shan',
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('h', { type: 'trick' })) return false;
                            },
                            onuse(event, player) {
                                player.storage.wzj_gongxuan++;
                                player.draw(2);
                            },
                            prompt: '将一张锦囊牌牌当闪使用或打出,摸两张牌',
                            check() {
                                return 1;
                            },
                            ai: {
                                respondShan: true,
                                skillTagFilter(player) {
                                    if (!player.countCards('h', { type: 'trick' })) return false;
                                },
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'respondShan') && current < 0) return 1.2;
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
                        wzj_yinyue: {
                            mod: {
                                suit(card, suit) {
                                    if (suit == 'diamond') return 'heart';
                                    if (suit == 'spade') return 'club';
                                },
                            },
                            group: ['zhaojun_yinyuea', 'zhaojun_yinyueb'],
                        },
                        wzj_bulu: {
                            audio: 'ext:染柒的世界/audio:2',
                            juexingji: true,
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            derivation: ['wzj_shuidi'],
                            forced: true,
                            filter(event, player) {
                                if (player.storage.wzj_gongxuan < 3) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                player.gainMaxHp();
                                player.recover();
                                player.removeSkill('wzj_gongxuan');
                                player.awakenSkill('wzj_bulu');
                                ('step 1');
                                player.addSkill('wzj_shuidi');
                                player.storage.wzj_bulu = true;
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
                        wzj_shuidi: {
                            audio: 'ext:染柒的世界/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            derivation: ['wzj_chusai', 'wzj_heqin'],
                            filterTarget(card, player, target) {
                                if (target.sex != 'male') return false;
                                if (!target.countCards('h') >= player.countCards('h')) return false;
                                if (target == player) return false;
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
                                    player.loseMaxHp();
                                    player.awakenSkill('wzj_shuidi');
                                    player.addSkill('wzj_chusai');
                                    player.addSkill('wzj_heqin');
                                } else {
                                    event.finish();
                                }
                            },
                            ai: {
                                order: 2.5,
                                result: {
                                    player(player) {
                                        var num = player.countCards('h');
                                        if (num > player.hp) return 4;
                                        if (num == 1) return -2;
                                        if (num == 2) return -1;
                                        return -0.7;
                                    },
                                    target: -1,
                                },
                                threaten: 1.3,
                            },
                        },
                        wzj_shuidi1: {
                            juexingji: true,
                            content() {
                                if (player.hp == player.maxHp) {
                                    player.loseHp();
                                }
                                player.loseMaxHp();
                                player.awakenSkill('wzj_shuidi');
                                player.addSkill('wzj_chusai');
                                player.addSkill('wzj_heqin');
                            },
                        },
                        wzj_chusai: {
                            audio: 'ext:染柒的世界/audio:2',
                            trigger: {
                                player: 'phaseDrawBegin1',
                            },
                            filter(event, player) {
                                return !event.numFixed;
                            },
                            content() {
                                'step 0';
                                trigger.changeToZero();
                                event.cards = get.cards(3);
                                game.cardsGotoOrdering(event.cards);
                                event.videoId = lib.status.videoId++;
                                game.broadcastAll(
                                    function (player, id, cards) {
                                        var str;
                                        if (player == game.me && !_status.auto) {
                                            str = '出塞:获取花色各不相同的牌';
                                        } else {
                                            str = '出塞';
                                        }
                                        var dialog = ui.create.dialog(str, cards);
                                        dialog.videoId = id;
                                    },
                                    player,
                                    event.videoId,
                                    event.cards
                                );
                                event.time = get.utc();
                                game.addVideo('showCards', player, ['出塞', get.cardsInfo(event.cards)]);
                                game.addVideo('delay', null, 2);
                                ('step 1');
                                var next = player.chooseButton([0, 5], true);
                                next.set('dialog', event.videoId);
                                next.set('filterButton', function (button) {
                                    for (var i = 0; i < ui.selected.buttons.length; i++) {
                                        if (ui.selected.buttons[i].link.suit == button.link.suit) return false;
                                    }
                                    return true;
                                });
                                next.set('ai', function (button) {
                                    return get.value(button.link, _status.event.player);
                                });
                                ('step 2');
                                if (result.bool && result.links) {
                                    event.cards2 = result.links;
                                } else {
                                    event.finish();
                                }
                                var time = 1000 - (get.utc() - event.time);
                                if (time > 0) {
                                }
                                ('step 3');
                                game.broadcastAll('closeDialog', event.videoId);
                                var cards2 = event.cards2;
                                player.gain(cards2, 'log', 'gain2');
                                if (player.countCards('h') < 4) {
                                    player.draw();
                                } else {
                                    event.finish();
                                }
                            },
                            ai: {
                                threaten: 1.2,
                            },
                        },
                        wzj_heqin: {
                            juexing: true,
                            audio: 'ext:染柒的世界/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            filterx(event, player) {
                                var cards = player.getCards('h');
                                if (cards.length < 1) return false;
                                var color = get.color(cards[0]);
                                for (var i = 1; i < cards.length; i++) {
                                    if (get.color(i) != color) return false;
                                }
                                return true;
                            },
                            forced: true,
                            content() {
                                player.showHandcards(get.translation(player) + '发动了【和亲】');
                                player.removeSkill('wzj_chusai');
                                player.addSkill('wzj_suisu');
                                player.addSkill('wzj_xiangzhi');
                                player.awakenSkill('wzj_heqin');
                            },
                            ai: {
                                expose: 0.1,
                            },
                        },
                        wzj_xiangzhi: {
                            audio: 'ext:染柒的世界/audio:2',
                            trigger: {
                                global: 'phaseDrawBegin',
                            },
                            filter(event, player) {
                                if (event.player == player || event.player.isDead()) return false;
                                return player.hp > 0;
                            },
                            content() {
                                'step 0';
                                var nono = Math.abs(get.attitude(player, trigger.player)) < 3;
                                if (player == trigger.player || get.damageEffect(trigger.player, player, player) <= 0) {
                                    nono = true;
                                } else if (trigger.player.hp > 2) {
                                    nono = true;
                                } else if (trigger.player.hp > 1 && player.countCards('h') < 3) {
                                    nono = true;
                                } else if (trigger.player.canUse('sha', player) && !player.countCards('h', 'shan') && trigger.player.countCards('h') >= 3) {
                                    nono = true;
                                }
                                var next = player.draw(get.prompt2('wzj_xiangzhi', trigger.player));
                                next.set('nono', nono);
                                trigger.player.addTempSkill('wzj_xiangzhi2');
                            },
                            group: ['wzj_xiangzhi1'],
                            ai: {
                                threaten: 1.5,
                                result: {
                                    target: 2.5,
                                    player: 1,
                                },
                            },
                        },
                        wzj_xiangzhi2: {
                            trigger: {
                                source: 'damageBegin1',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.notLink();
                            },
                            forced: true,
                            content() {
                                trigger.num++;
                            },
                            ai: {
                                damageBonus: true,
                            },
                        },
                        wzj_suisu: {
                            audio: 'ext:染柒的世界/audio:2',
                            trigger: {
                                global: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var list = [];
                                if (!player.hasSkill('wzj_chusai')) {
                                    list.push('wzj_chusai');
                                }
                                if (!player.hasSkill('wzj_luoyan')) {
                                    list.push('wzj_luoyan');
                                }
                                if (!player.hasSkill('wzj_gongxuan')) {
                                    list.push('wzj_gongxuan');
                                }
                                if (list.length) {
                                    player.chooseControl(list).set('prompt', '选择获得一项技能');
                                }
                                ('step 1');
                                player.addSkill(result.control);
                                player.popup(result.control);
                                game.log(player, '获得技能', '【' + get.translation(result.control) + '】');
                                player.removeSkill('wzj_suisu');
                            },
                            ai: {
                                threaten: 2.4,
                            },
                        },
                        wzj_luoyan: {
                            audio: 'ext:染柒的世界/audio:2',
                            trigger: {
                                player: 'damageBefore',
                            },
                            forced: true,
                            content() {
                                trigger.cancel();
                                player.loseHp();
                            },
                            ai: {
                                noDirectDamage: true,
                            },
                        },
                        wzj_xiangzhi1: {
                            audio: 'ext:染柒的世界/audio:2',
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            forced: true,
                            filter(event, player) {
                                return !event.numFixed && event.num > 0;
                            },
                            content() {
                                'step 0';
                                var check;
                                if (player.countCards('h') == 0) {
                                    check = false;
                                } else {
                                    check =
                                        game.countPlayer(function (current) {
                                            return player != current && get.attitude(player, current) > 1;
                                        }) >= 2;
                                }
                                if (get.is.versus()) {
                                    event.versus = true;
                                    player.chooseBool(get.prompt2('wzj_xiangzhi1')).ai = function () {
                                        return (
                                            game.countPlayer(function (current) {
                                                return player.side == current.side;
                                            }) > 2
                                        );
                                    };
                                } else {
                                    player
                                        .chooseTarget(
                                            get.prompt2('wzj_xiangzhi1'),
                                            [1, 1],
                                            function (card, player, target) {
                                                return player != target;
                                            },
                                            function (target) {
                                                if (!_status.event.check) return 0;
                                                return get.attitude(_status.event.player, target);
                                            }
                                        )
                                        .set('check', check);
                                }
                                ('step 1');
                                if (result.bool) {
                                    var targets;
                                    if (event.versus) {
                                        targets = game.filterPlayer(function (current) {
                                            return current != player && current.side == player.side;
                                        });
                                    } else {
                                        targets = result.targets;
                                    }
                                    game.asyncDraw(targets);
                                    for (var i of targets) {
                                        i.recover(1);
                                    }
                                    trigger.num--;
                                }
                            },
                        },
                        xianren_qianhuan: {
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            content() {
                                'step 0';
                                var num = player.hp;
                                var list = get.gainableCharacters(function (info) {
                                    return info[2] >= num;
                                });
                                if (list && list.length && list.length > 2) player.chooseButton(['将武将牌替换为一名角色', 'hidden', [list.randomGets(3), 'character']], true);
                                else event.finish();
                                ('step 1');
                                var num = player.hp;
                                player.init(result.links[0]);
                                player.hp = num;
                                player.addSkill('xianren_qianhuan');
                                player.update();
                            },
                            ai: {
                                threaten: 0.8,
                                effect: {
                                    player: 2,
                                },
                            },
                        },
                        xianren_chidiao: {
                            audio: 'ext:染柒的世界/audio:2',
                            trigger: {
                                player: 'loseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.countCards('h')) return false;
                                return event.hs && event.hs.length;
                            },
                            content() {
                                'step 0';
                                var num = player.hp;
                                player.chooseTarget('选择送鱼的目标', [1, num]).ai = function (target) {
                                    var player = _status.event.player;
                                    if (player == target) return get.attitude(player, target) + 10;
                                    return get.attitude(player, target);
                                };
                                ('step 1');
                                if (result.bool) {
                                    game.asyncDraw(result.targets);
                                } else event.finish();
                                ('step 2');
                            },
                            ai: {
                                threaten: 0.8,
                                effect: {
                                    target(card) {
                                        if (card.name == 'guohe' || card.name == 'liuxinghuoyu') return 0.5;
                                    },
                                },
                                noh: true,
                            },
                        },
                        xianren_zhibei: {
                            enable: 'phaseUse',
                            position: 'he',
                            filter(event, player) {
                                return player.countCards('he', { subtype: ['equip1', 'equip2', 'equip5', 'equip3', 'equip4', 'equip6'] }) > 0;
                            },
                            filterCard(card, player) {
                                return get.subtype(card) == 'equip5' || get.subtype(card) == 'equip2' || get.subtype(card) == 'equip1' || get.subtype(card) == 'equip3' || get.subtype(card) == 'equip4' || get.subtype(card) == 'equip6';
                            },
                            check(card) {
                                if (_status.event.player.isDisabled(get.subtype(card))) return 5;
                                return 6 - get.value(card);
                            },
                            content() {
                                player.draw();
                                if (!player.hasSkill('hhhc')) {
                                    player.draw();
                                    player.addTempSkill('hhhc');
                                }
                            },
                            discard: false,
                            visible: true,
                            loseTo: 'discardPile',
                            prompt: '将一张装备牌置入弃牌堆并摸一张牌',
                            delay: 0.5,
                            prepare(cards, player) {
                                player.$throw(cards, 1000);
                                game.log(player, '将', cards, '置入了弃牌堆');
                            },
                            ai: {
                                order: 1.1,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        hhhc: {},
                        xianren_shenti: {
                            trigger: {
                                player: 'turnOverBefore',
                            },
                            _priority: 20,
                            forced: true,
                            filter(event, player) {
                                return !player.isTurnedOver();
                            },
                            content() {
                                trigger.cancel();
                                game.log(player, '取消了翻面');
                            },
                            group: ['xianren_shenti1'],
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (['tiesuo', 'lulitongxin'].includes(card.name)) {
                                            return 'zerotarget';
                                        }
                                    },
                                },
                            },
                        },
                        xianren_shenti1: {
                            trigger: {
                                player: 'linkBefore',
                            },
                            forced: true,
                            _priority: 20,
                            filter(event, player) {
                                return !player.isLinked();
                            },
                            content() {
                                trigger.cancel();
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (['tiesuo', 'lulitongxin'].includes(card.name)) {
                                            return 'zerotarget';
                                        }
                                    },
                                },
                            },
                        },
                        caiyi_liuguang: {
                            trigger: {
                                global: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return event.player != player;
                            },
                            logTarget: 'player',
                            check(event, player) {
                                if (get.attitude(player, event.player) < 4) return false;
                                if (player.maxHp <= 2) return false;
                                if (player.hp == player.maxHp) return false;
                                if (event.player.countCards('h') >= event.player.hp + 3) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                player.draw(3);
                                ('step 1');
                                player.chooseCard(2, 'he', true, '交给' + get.translation(trigger.player) + '两张牌').set('ai', function (card) {
                                    if (ui.selected.cards.length && card.name == ui.selected.cards[0].name) return -1;
                                    if (get.tag(card, 'damage')) return 1;
                                    if (get.type(card) == 'equip') return 1;
                                    return 0;
                                });
                                ('step 2');
                                trigger.player.gain(result.cards, player, 'giveAuto');
                                player.loseMaxHp();
                                game.log(player, ':', '望勇士不要辜负国家对你的信任!');
                            },
                            ai: {
                                threaten: 1.1,
                                expose: 0.3,
                            },
                        },
                        caiyi_zhuci: {
                            enable: 'phaseUse',
                            position: 'he',
                            filterCard: true,
                            selectCard: 2,
                            usable: 1,
                            filterTarget(card, player, target) {
                                if (target.hp >= target.maxHp) return false;
                                return player.maxHp < 6;
                            },
                            prompt: '弃置两张牌并增加一点体力上限并令一名角色回复一点体力',
                            check(card) {
                                return 6 - get.useful(card);
                            },
                            content() {
                                player.gainMaxHp();
                                target.recover();
                                target.removeSkill('rqsj_zhongdu');
                                target.removeSkill('rqsj_xuanyun');
                                target.removeSkill('rqsj_eyun');
                            },
                            ai: {
                                order: 6,
                                result: {
                                    target(player, target) {
                                        if (target.hp == 1) return 5;
                                        if (player == target && player.countCards('h') > player.hp) return 5;
                                        return 2;
                                    },
                                },
                            },
                        },
                        qingniao_xiangyun: {
                            trigger: {
                                global: 'gameStart',
                                player: 'enterGame',
                            },
                            forced: true,
                            content() {
                                player.disableJudge();
                            },
                        },
                        qimgniao_qingluan: {
                            trigger: {
                                player: 'loseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return _status.currentPhase != player && player.hp <= player.maxHp;
                            },
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    return get.color(card) == 'red' ? 1 : 0;
                                });
                                ('step 1');
                                if (result.color == 'red') {
                                    player.draw();
                                }
                            },
                            ai: {
                                effect: {
                                    target(card) {
                                        if (get.tag(card, 'loseCard')) {
                                            return [0.5, 1];
                                        }
                                    },
                                },
                            },
                        },
                        chijian_jiebei: {
                            trigger: {
                                player: 'loseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.countCards('h')) return false;
                                return event.hs && event.hs.length;
                            },
                            content() {
                                var list1 = [1, 4].randomGet();
                                if (list1 == 1) {
                                    player.changeHujia();
                                }
                                var list = [1, 4].randomGet();
                                if (list == 1) {
                                    player.draw();
                                }
                                game.log(player, ':', '那是谁!');
                            },
                            ai: {
                                threaten: 0.8,
                                effect: {
                                    target(card) {
                                        if (card.name == 'guohe' || card.name == 'liuxinghuoyu') return 0.5;
                                    },
                                },
                            },
                        },
                        chijian_xiaoji: {
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - 1;
                                },
                            },
                            trigger: {
                                player: 'loseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                if (Array.isArray(event.cards)) for (var i of event.cards) {
                                    if (i.original == 'e') return true;
                                }
                                return false;
                            },
                            content() {
                                var num = 0;
                                if (Array.isArray(trigger.cards)) for (var i of trigger.cards) {
                                    if (i.original == 'e') num += 1;
                                }
                                player.draw(num);
                            },
                            ai: {
                                noe: true,
                                reverseEquip: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.type(card) == 'equip') return [1, 3];
                                    },
                                },
                            },
                        },
                        chijian_shicong: {
                            audio: 'ext:染柒的世界/audio:2',
                            enable: 'phaseUse',
                            filterCard: true,
                            usable: 1,
                            check(card) {
                                return 7 - get.value(card);
                            },
                            filterTarget(card, player, target) {
                                if (player == target) return false;
                                return !target.hujia;
                            },
                            content() {
                                target.addTempSkill('xiangle', { player: 'phaseAfter' });
                                target.changeHujia();
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target(player, target) {
                                        if (target.hp == 1) return 5;
                                        if (player.countCards('h') > player.hp) return 5;
                                        return 2;
                                    },
                                },
                                threaten: 2,
                            },
                        },
                        wuyi_duyi: {
                            enable: 'phaseUse',
                            usable: 2,
                            filterTarget(card, player, target) {
                                if (target.hp >= target.maxHp && !target.hasSkill('rqsj_zhongdu')) return false;
                                if (target.hasSkill('rqsj_duyi1')) return false;
                                return true;
                            },
                            content() {
                                if (!target.hasSkill('rqsj_zhongdu')) {
                                    target.addSkill('rqsj_zhongdu');
                                    target.recover();
                                    target.addTempSkill('rqsj_duyi1');
                                    game.log(player, ':', '用我们蛮荒之术,或许能救你一命.');
                                } else {
                                    target.removeSkill('rqsj_zhongdu');
                                    target.addTempSkill('rqsj_duyi1');
                                    game.log(player, ':', '用我们蛮荒之术,或许能救你一命.');
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
                        wuyi_duli: {
                            trigger: {
                                global: ['useCardAfter', 'respondAfter', 'discardAfter'],
                            },
                            popup: false,
                            filter(event, player) {
                                if (player.hasSkillTag('nodu')) return false;
                                if (event.cards) {
                                    if (Array.isArray(event.cards)) for (var i of event.cards) {
                                        if (i.name == 'dus' && i.original != 'j') return true;
                                    }
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                var num = 0;
                                if (Array.isArray(trigger.cards)) for (var i of trigger.cards) {
                                    if (i.name == 'dus' && i.original != 'j') num++;
                                }
                                game.log(player, ':', '嗯,这种草药果然还是有毒的.');
                                player.draw();
                            },
                        },
                        wuyi_jijiu: {
                            audio: 'ext:美女如云/audio:2',
                            audioname: ['re_huatuo'],
                            enable: 'chooseToUse',
                            filter(event, player) {
                                return _status.currentPhase != player;
                            },
                            filterCard(card, player) {
                                return get.color(card) == 'red';
                            },
                            position: 'he',
                            viewAs: {
                                name: 'tao',
                            },
                            prompt: '将一张红色牌当桃使用',
                            check(card) {
                                return 15 - get.value(card);
                            },
                            ai: {
                                skillTagFilter(player) {
                                    return player.countCards('he', { color: 'red' }) > 0 && _status.currentPhase != player;
                                },
                                threaten: 1.5,
                                save: true,
                                basic: {
                                    order(card, player) {
                                        if (player.hasSkillTag('pretao')) return 5;
                                        return 2;
                                    },
                                    useful: [8, 6.5, 5, 4],
                                    value: [8, 6.5, 5, 4],
                                },
                                result: {
                                    target(player, target) {
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
                                    target_use(player, target) {
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
                        },
                        shizhe_guiyuan: {
                            trigger: {
                                player: ['loseHpAfter', 'damageAfter'],
                            },
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                player.draw();
                            },
                        },
                        shizhe_shouhu: {
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('h', 'sha') > 0;
                            },
                            filterTarget(card, player, target) {
                                return target.hp < target.maxHp && target != player;
                            },
                            content() {
                                target.recover();
                                game.log(player, ':', '守望伊始,以解君愁!');
                            },
                            filterCard: {
                                name: 'sha',
                            },
                            ai: {
                                order: 7,
                                threaten: 2,
                                result: {
                                    target(player, target) {
                                        return get.recoverEffect(target, player, target);
                                    },
                                },
                            },
                        },
                        rqsj_biyue: {
                            audio: 'ext:染柒的世界/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            content() {
                                player.draw();
                                if (player.hasSkill('wangzi_diewu')) {
                                    game.log(player, ':', '灵蝶萦舞,伴我前行.');
                                }
                                if (player.hasSkill('rqsj_senlin')) {
                                    game.log(player, ':', '月光,铺洒在寂静的森林上.');
                                }
                                if (player.hasSkill('rqsj_diyu')) {
                                    game.log(player, ':', '月光,也请祝福我们来自地下的精灵.');
                                }
                                if (player.hasSkill('rqsj_wangguo')) {
                                    game.log(player, ':', '倾城之貌,是否使将军流连？');
                                }
                                if (player.hasSkill('rqsj_manhuang')) {
                                    game.log(player, ':', '温柔的月光啊,也请赐予我们力量.');
                                }
                                if (player.hasSkill('rqsj_mozu')) {
                                    game.log(player, ':', '这月光的力量,岂是汝等可窥悸的？');
                                }
                                event.finish();
                            },
                        },
                        wangzi_lingdie: {
                            mark: true,
                            marktext: '蝶',
                            intro: {
                                content: '你已拥有#只灵蝶',
                            },
                            forced: true,
                            trigger: {
                                player: 'shaMiss',
                            },
                            audio: 'ext:染柒的世界/audio:2',
                            filter(event, player) {
                                return true;
                            },
                            check(event, player) {
                                return true;
                            },
                            content() {
                                player.draw();
                                player.addMark('wangzi_lingdie');
                            },
                        },
                        wangzi_jiangfu: {
                            nobracket: true,
                            mark: true,
                            marktext: '符',
                            intro: {
                                content: '准备阶段,获得一点护甲,摸一张牌',
                            },
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                player.changeHujia();
                                player.draw();
                                player.removeSkill('wangzi_jiangfu');
                                player.update();
                            },
                        },
                        falixitong4: {
                            trigger: {
                                global: 'gameDrawAfter',
                                player: ['enterGame', 'phaseZhunbeiBegin'],
                            },
                            forced: true,
                            content() {
                                if (!player.hasSkill('rqsj_fali')) {
                                    player.addSkill('rqsj_fali');
                                }
                                if (player.countMark('rqsj_fali') < 4) {
                                    var num = player.countMark('rqsj_fali');
                                    player.removeMark('rqsj_fali', num);
                                    player.addMark('rqsj_fali', 4);
                                }
                            },
                        },
                        rqsj_fali: {
                            mark: true,
                            marktext: '法',
                            intro: {
                                content: '你还有#点法力',
                            },
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return lib.config.extension_染柒的世界_faliup == true && player.countMark('rqsj_fali') > 2;
                            },
                            content() {
                                player.addMark('rqsj_fali');
                            },
                        },
                        rqsj_xichen: {},
                        cike_lingqiao: {
                            trigger: {
                                player: 'damageBefore',
                            },
                            filter(event, player) {
                                return true;
                            },
                            forced: true,
                            content() {
                                if (lib.config.extension_染柒的世界_duoluojinglingup == true) {
                                    var list = [1, 1, 2, 2, 2].randomGet();
                                } else {
                                    var list = [1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 4, 5, 6, 7, 8, 9, 4].randomGet();
                                }
                                if (list == 1) {
                                    trigger.cancel();
                                    player.chat('你伤不到我的!');
                                }
                            },
                            ai: {
                                expose: 0.2,
                                threaten: 1.5,
                            },
                        },
                        cike_beici: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                return event.notLink();
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            content() {
                                if (lib.config.extension_染柒的世界_duoluojinglingup == true) {
                                    var list = [1, 1, 2, 2, 2].randomGet();
                                } else {
                                    var list = [1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 4, 5, 6, 7, 8, 9, 4].randomGet();
                                }
                                if (list == 1) {
                                    trigger.num++;
                                    game.log(player, ':', '堕落,是因为看破了光明!');
                                }
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        wangzi_diewu: {
                            audio: 'ext:染柒的世界/audio:2',
                            trigger: {
                                player: ['rqsj_lingdiebanshengAfter', 'wangzi_lingdieAfter', 'wangzi_xiaoxingAfter'],
                            },
                            group: ['rqsj_lingdiebansheng'],
                            forced: true,
                            popup: false,
                            init(player) {
                                if (game.online) return;
                                player.removeAdditionalSkill('wangzi_diewu');
                                var list = [];
                                if (player.countMark('wangzi_lingdie') > 3) {
                                    list.push('wangzi_xiaoxing');
                                }
                                if (player.countMark('wangzi_lingdie') >= 3) {
                                    list.push('wangzi_lingwei');
                                }
                                if (player.countMark('wangzi_lingdie') >= 2) {
                                    list.push('wangzi_biyue');
                                }
                                if (player.countMark('wangzi_lingdie') >= 1) {
                                    list.push('rqsj_feiying');
                                }
                                if (list.length) {
                                    player.addAdditionalSkill('wangzi_diewu', list);
                                }
                            },
                            derivation: ['wangzi_xiaoxing', 'wangzi_biyue', 'rqsj_feiying', 'wangzi_lingwei'],
                            content() {
                                player.removeAdditionalSkill('wangzi_diewu');
                                var list = [];
                                if (player.countMark('wangzi_lingdie') > 3) {
                                    list.push('wangzi_xiaoxing');
                                }
                                if (player.countMark('wangzi_lingdie') >= 3) {
                                    list.push('wangzi_lingwei');
                                }
                                if (player.countMark('wangzi_lingdie') >= 2) {
                                    list.push('wangzi_biyue');
                                }
                                if (player.countMark('wangzi_lingdie') >= 1) {
                                    list.push('rqsj_feiying');
                                }
                                if (list.length) {
                                    player.addAdditionalSkill('wangzi_diewu', list);
                                }
                                player.update();
                            },
                        },
                        rqsj_jidian: {
                            audio: 'ext:染柒的世界/audio:2',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return player.countMark('rqsj_fali') > 0;
                            },
                            content() {
                                'step 0';
                                player.removeMark('rqsj_fali');
                                event.cards = get.cards(6);
                                player.chooseCardButton(event.cards, 3, '选择三张牌置于牌堆顶', true).set('ai', ai.get.buttonValue);
                                ('step 1');
                                if (result.bool) {
                                    var choice = [];
                                    for (var i of result.links) {
                                        choice.push(i);
                                        cards.remove(i);
                                    }
                                    if (Array.isArray(cards)) for (var i of cards) {
                                        ui.cardPile.appendChild(i);
                                    }
                                    while (choice.length) {
                                        ui.cardPile.insertBefore(choice.pop(), ui.cardPile.firstChild);
                                    }
                                }
                                player.chooseControl('摸一张牌', '回复体力', function (event, player) {
                                    var num2 = player.hp;
                                    var num3 = player.maxHp;
                                    if (num2 < num3) return '回复体力';
                                    return '摸一张牌';
                                });
                                ('step 2');
                                if (result.control == '摸一张牌') {
                                    player.draw();
                                } else {
                                    player.recover();
                                }
                            },
                        },
                        jisi_muen: {
                            trigger: {
                                global: 'phaseDrawBegin',
                            },
                            filter(event, player) {
                                if (event.player.isDead() || event.player.hasSkill('bingliang_changban')) return false;
                                return player.countMark('rqsj_fali') > 0;
                            },
                            check(event, player) {
                                if (event.player.hasSkill('rqsj_tu') && get.attitude(player, event.player) < 0) {
                                    return false;
                                }
                                if (!event.player.hasSkill('rqsj_tu') && get.attitude(player, event.player) > 0) {
                                    return false;
                                }
                                return true;
                            },
                            content() {
                                var nono = Math.abs(get.attitude(player, trigger.player)) < 3;
                                if (player == trigger.player || get.damageEffect(trigger.player, player, player) <= 0) {
                                    nono = true;
                                } else if (trigger.player.hp > 2) {
                                    nono = true;
                                } else if (trigger.player.hp > 1 && player.countCards('h') < 3) {
                                    nono = true;
                                } else if (trigger.player.canUse('sha', player) && !player.countCards('h', 'shan') && trigger.player.countCards('h') >= 3) {
                                    nono = true;
                                }
                                player.removeMark('rqsj_fali');
                                trigger.num--;
                                var next = trigger.player.draw();
                                next.bottom = true;
                                next.set('nono', nono);
                                if (trigger.player.hp <= player.hp) {
                                    trigger.player.useSkill('rqsj_addtu');
                                }
                            },
                        },
                        rqsj_huanyu: {
                            audio: 'ext:染柒的世界/audio:2',
                            viewAsFilter(player) {
                                return player.countCards('h', { suit: 'heart' }) > 0;
                            },
                            prepare: 'throw',
                            position: 'h',
                            filterCard: {
                                suit: 'heart',
                            },
                            enable: 'phaseUse',
                            viewAs: {
                                name: 'taoyuan',
                            },
                            prompt: '将一张♥️️牌当桃园结义使用.每回合限一次,摸两张牌',
                            check(card) {
                                var player = _status.currentPhase;
                                if (player.countCards('h') > player.hp) {
                                    return 7 - get.value(card);
                                }
                                return 6 - get.value(card);
                            },
                            onuse(event, player) {
                                if (!player.hasSkill('rqsj_huanyuoff')) {
                                    player.addTempSkill('rqsj_huanyuoff');
                                    player.draw(2);
                                }
                            },
                            ai: {
                                basic: {
                                    order() {
                                        return 11;
                                    },
                                    useful: [3, 1],
                                    value: 0,
                                },
                                result: {
                                    target(player, target) {
                                        return target.hp < target.maxHp ? 2 : 1;
                                    },
                                },
                                tag: {
                                    recover: 0.5,
                                    multitarget: 1,
                                },
                            },
                        },
                        rqsj_huanyu1: {
                            audio: 'ext:染柒的世界/audio:2',
                            enable: 'phaseUse',
                            filterCard(card, player) {
                                return card.suit == 'club';
                            },
                            viewAs: {
                                name: 'wugu',
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('h', { suit: 'club' })) return false;
                            },
                            prompt: '将一张♣️️牌当五谷丰登使用',
                            check(card) {
                                var player = _status.currentPhase;
                                if (player.countCards('h') > player.hp) {
                                    return 6 - get.value(card);
                                }
                                return 3 - get.value(card);
                            },
                            onuse(event, player) {
                                if (!player.hasSkill('rqsj_huanyuoff')) {
                                    player.addTempSkill('rqsj_huanyuoff');
                                    player.draw(2);
                                }
                            },
                            ai: {
                                wuxie() {
                                    if (Math.random() < 0.5) return 0;
                                },
                                basic: {
                                    order: 3,
                                    useful: 1,
                                },
                                result: {
                                    target(player, target) {
                                        if (get.is.versus()) {
                                            if (target == player) return 1.5;
                                            return 1;
                                        }
                                        if (player.hasUnknown(2)) {
                                            return 0;
                                        }
                                        return 2 - (2 * get.distance(player, target, 'absolute')) / game.countPlayer();
                                    },
                                },
                                tag: {
                                    draw: 1,
                                    multitarget: 1,
                                },
                            },
                        },
                        rqsj_huanyuoff: {},
                        rqsj_huanyu0: {
                            group: ['rqsj_huanyu', 'rqsj_huanyu1'],
                        },
                        rqsj_zhouyuan: {
                            trigger: {
                                player: 'die',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.source && event.source.isIn();
                            },
                            content() {
                                if (trigger.source.hp == 1) {
                                    trigger.source.clearSkills();
                                } else {
                                    trigger.source.hp = 1;
                                    trigger.source.loseMaxHp();
                                }
                            },
                            logTarget: 'source',
                            ai: {
                                threaten(player, target) {
                                    if (target.hp == 1) return 0.2;
                                    return 1.5;
                                },
                                effect: {
                                    target(card, player, target, current) {
                                        if (!target.hasFriend()) return;
                                        if (target.hp <= 1 && get.tag(card, 'damage')) return [1, 0, 0, -2];
                                    },
                                },
                            },
                        },
                        rqsj_eyunchanshen: {
                            enable: 'phaseUse',
                            usable: 1,
                            nobracket: true,
                            delay: 0,
                            filterCard: true,
                            check(card) {
                                var player = _status.event.player;
                                var useval = player.getUseValue(card);
                                var maxval = 0;
                                if (maxval > 0 && get.tag(card, 'damage')) return 15;
                                if (maxval > useval) return 10;
                                if (player.needsToDiscard()) return 1 / Math.max(0.1, get.value(card));
                                return -1;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('rqsj_eyunchanshen'), [1, 5], true, function (card, player, target) {
                                        return target != player && !target.hasSkill('rqsj_eyun');
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var targets = result.targets;
                                    while (targets.length) {
                                        var target = targets.shift();
                                        target.addTempSkill('rqsj_eyun', { player: 'phaseAfter' });
                                    }
                                }
                            },
                            ai: {
                                order: 9.9,
                                result: {
                                    target: -4,
                                    player: 2,
                                },
                                threaten: 2,
                            },
                        },
                        rqsj_tianmingpanjue: {
                            nobracket: true,
                            group: ['rqsj_tianmingpanjue_hong', 'rqsj_tianmingpanjue_hei'],
                        },
                        rqsj_ruyingsuixing: {
                            nobracket: true,
                            trigger: {
                                player: 'dying',
                            },
                            content() {
                                player.init('rqsj_xvying');
                                player.draw();
                            },
                            ai: {
                                maixie: true,
                                order: 9,
                                skillTagFilter(player) {
                                    if (player.hp > 0) return false;
                                },
                                save: true,
                                result: {
                                    player(player) {
                                        if (player.hp <= 0) return 10;
                                        if (player.hp <= 2 && player.countCards('he') <= 1) return 10;
                                        return 0;
                                    },
                                },
                            },
                            intro: {
                                content: 'limited',
                            },
                        },
                        rqsj_shenqian: {
                            trigger: {
                                player: 'shaMiss',
                            },
                            _priority: -1,
                            filter(event, player) {
                                return true;
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) < 0;
                            },
                            content() {
                                trigger.target.damage(2);
                            },
                        },
                        rqsj_xieyingzhishi: {
                            nobracket: true,
                            audio: 'ext:染柒的世界/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            content() {
                                var num = player.hp;
                                player.init('rqsj_yimingzhizhao');
                                player.hp = num;
                                player.draw();
                                player.update();
                            },
                            ai: {
                                threaten(player, target) {
                                    return 9.9;
                                },
                            },
                        },
                        rqsj_eyun: {
                            mark: true,
                            marktext: '厄',
                            intro: {
                                content: '回合外使用,打出牌时,判定若为♠️️,则流失一点体力',
                            },
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (player == _status.currentPhase) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    var suit = card.suit;
                                    if (suit == 'spade') {
                                        return -4;
                                    } else {
                                        return 0;
                                    }
                                });
                                ('step 1');
                                if (result.suit == 'spade') {
                                    player.loseHp();
                                }
                            },
                        },
                        rqsj_tianmingpanjue_hong: {
                            trigger: {
                                global: 'judge',
                            },
                            filter(event, player) {
                                return player.countCards('he', { suit: 'heart' }) > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('rqsj_tianmingpanjue_hong'), 'he', function (card) {
                                        if (card.suit != 'heart') return false;
                                        var player = _status.event.player;
                                        var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                                        if (mod2 != 'unchanged') return mod2;
                                        var mod = game.checkMod(card, player, 'unchanged', 'cardRespondable', player);
                                        if (mod != 'unchanged') return mod;
                                        return true;
                                    })
                                    .set('ai', function (card) {
                                        var trigger = _status.event.getTrigger();
                                        var player = _status.event.player;
                                        var judging = _status.event.judging;
                                        var result = trigger.judge(card) - trigger.judge(judging);
                                        var attitude = get.attitude(player, trigger.player);
                                        if (attitude == 0 || result == 0) return 0;
                                        if (attitude > 0) {
                                            return result;
                                        } else {
                                            return -result;
                                        }
                                    })
                                    .set('judging', trigger.player.judging[0]);
                                ('step 1');
                                if (result.bool) {
                                    player.respond(result.cards, 'highlight', 'rqsj_tianmingpanjue_hong', 'noOrdering');
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.$gain2(trigger.player.judging[0]);
                                    player.gain(trigger.player.judging[0]);
                                    trigger.player.judging[0] = result.cards[0];
                                    trigger.orderingCards.addArray(result.cards);
                                    game.log(trigger.player, '的判定牌改为', result.cards[0]);
                                }
                                ('step 3');
                            },
                            ai: {
                                rejudge: true,
                                tag: {
                                    rejudge: 1,
                                },
                            },
                        },
                        rqsj_tianmingpanjue_hei: {
                            trigger: {
                                global: 'judge',
                            },
                            filter(event, player) {
                                return player.countCards('he', { suit: 'spade' }) > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('rqsj_tianmingpanjue_hei'), 'he', function (card) {
                                        if (card.suit != 'spade') return false;
                                        var player = _status.event.player;
                                        var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                                        if (mod2 != 'unchanged') return mod2;
                                        var mod = game.checkMod(card, player, 'unchanged', 'cardRespondable', player);
                                        if (mod != 'unchanged') return mod;
                                        return true;
                                    })
                                    .set('ai', function (card) {
                                        var trigger = _status.event.getTrigger();
                                        var player = _status.event.player;
                                        var judging = _status.event.judging;
                                        var result = trigger.judge(card) - trigger.judge(judging);
                                        var attitude = get.attitude(player, trigger.player);
                                        if (attitude == 0 || result == 0) return 0;
                                        if (attitude > 0) {
                                            return result;
                                        } else {
                                            return -result;
                                        }
                                    })
                                    .set('judging', trigger.player.judging[0]);
                                ('step 1');
                                if (result.bool) {
                                    player.respond(result.cards, 'highlight', 'rqsj_tianmingpanjue_hei', 'noOrdering');
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.$gain2(trigger.player.judging[0]);
                                    player.gain(trigger.player.judging[0]);
                                    trigger.player.judging[0] = result.cards[0];
                                    trigger.orderingCards.addArray(result.cards);
                                    game.log(trigger.player, '的判定牌改为', result.cards[0]);
                                }
                                ('step 3');
                            },
                            ai: {
                                rejudge: true,
                                tag: {
                                    rejudge: 1,
                                },
                            },
                        },
                        rqsj_diexi2: {
                            audio: 'ext:染柒的世界/audio:2',
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
                                    return target != player && target.hasZhuSkill('rqsj_diexi', player);
                                });
                                var str = '让' + get.translation(list);
                                if (list.length > 1) str += '中的一人对你出杀';
                                return str;
                            },
                            filter(event, player) {
                                if (player.group != 'jingling' && player.group != 'wu') return false;
                                return game.hasPlayer(function (target) {
                                    return target != player && target.hasZhuSkill('rqsj_diexi', player) && !target.hasSkill('rqsj_diewu3') && target.inRange(player);
                                });
                            },
                            log: false,
                            visible: true,
                            filterTarget(card, player, target) {
                                return target != player && target.hasZhuSkill('rqsj_diexi', player) && !target.hasSkill('rqsj_diexi3');
                            },
                            content() {
                                'step 0';
                                target
                                    .chooseToUse({ name: 'sha' }, '挑衅:对' + get.translation(player) + '使用一张杀,或令其摸一张牌')
                                    .set('targetRequired', true)
                                    .set('complexSelect', true)
                                    .set('filterTarget', function (card, player, target) {
                                        if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                                        return lib.filter.filterTarget.apply(this, arguments);
                                    })
                                    .set('sourcex', player);
                                ('step 1');
                                if (result.bool == false) {
                                    player.draw(true);
                                    target.addTempSkill('rqsj_diexi3', 'phaseUseEnd');
                                } else {
                                    event.finish();
                                }
                            },
                            ai: {
                                order: 4,
                                expose: 0.2,
                                result: {
                                    target: -1,
                                    player(player, target) {
                                        if (target.countCards('h') == 0) return 0;
                                        if (target.countCards('h') == 1) return -0.1;
                                        if (player.hp <= 2) return -2;
                                        if (player.countCards('h', 'shan') == 0) return -1;
                                        return -0.5;
                                    },
                                },
                                threaten: 1.1,
                            },
                        },
                        rqsj_diexi: {
                            global: 'rqsj_diexi2',
                            zhuSkill: true,
                        },
                        rqsj_diewu3: {},
                        zhangheng_muniao: {
                            mod: {
                                globalTo(from, to, distance) {
                                    return distance + 1;
                                },
                                maxHandcard(player, num) {
                                    return num + 1;
                                },
                            },
                        },
                        zhangheng_shuxing: {
                            trigger: {
                                player: 'phaseDrawBegin1',
                            },
                            filter(event, player) {
                                return !event.numFixed;
                            },
                            content() {
                                'step 0';
                                trigger.changeToZero();
                                event.cards = get.cards(4);
                                game.cardsGotoOrdering(event.cards);
                                event.videoId = lib.status.videoId++;
                                game.broadcastAll(
                                    function (player, id, cards, num) {
                                        var str;
                                        if (player == game.me && !_status.auto) {
                                            str = '数星:选择任意张点数不大于' + num + '的牌';
                                        } else {
                                            str = '数星';
                                        }
                                        var dialog = ui.create.dialog(str, cards);
                                        dialog.videoId = id;
                                    },
                                    player,
                                    event.videoId,
                                    event.cards,
                                    event.name == 'zhangheng_shuxing' ? 13 : 13
                                );
                                event.time = get.utc();
                                game.addVideo('showCards', player, ['数星', get.cardsInfo(event.cards)]);
                                game.addVideo('delay', null, 2);
                                ('step 1');
                                var next = player.chooseButton([0, 4]);
                                next.set('dialog', event.videoId);
                                next.set('filterButton', function (button) {
                                    var num = 0;
                                    for (var i = 0; i < ui.selected.buttons.length; i++) {
                                        num += ui.selected.buttons[i].link.number;
                                    }
                                    return num + button.link.number <= _status.event.maxNum;
                                });
                                next.set('maxNum', event.name == 'zhangheng_shuxing' ? 13 : 13);
                                next.set('ai', function (button) {
                                    return get.value(button.link, _status.event.player);
                                });
                                ('step 2');
                                if (result.bool && result.links) {
                                    var cards2 = [];
                                    for (var i of result.links) {
                                        cards2.push(i);
                                        cards.remove(i);
                                    }
                                    event.cards2 = cards2;
                                } else {
                                    event.finish();
                                }
                                var time = 1000 - (get.utc() - event.time);
                                if (time > 0) {
                                }
                                ('step 3');
                                game.broadcastAll('closeDialog', event.videoId);
                                var cards2 = event.cards2;
                                player.gain(cards2, 'log', 'gain2');
                            },
                            ai: {
                                result: {
                                    player: 3,
                                },
                            },
                        },
                        zhangheng_jiangxin1: {
                            trigger: {
                                global: 'gameDrawAfter',
                                player: 'enterGame',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var list = [];
                                if (!player.hasSkill('zhangheng_shuxing')) {
                                    list.push('zhangheng_shuxing');
                                }
                                if (!player.hasSkill('zhangheng_chuxiang')) {
                                    list.push('zhangheng_chuxiang');
                                }
                                if (!player.hasSkill('zhangheng_didong')) {
                                    list.push('zhangheng_didong');
                                }
                                if (!player.hasSkill('zhangheng_huntian')) {
                                    list.push('zhangheng_huntian');
                                }
                                if (!player.hasSkill('zhangheng_ruilun')) {
                                    list.push('zhangheng_ruilun');
                                }
                                if (!player.hasSkill('zhangheng_zhinan')) {
                                    list.push('zhangheng_zhinan');
                                }
                                if (!player.hasSkill('zhangheng_muniao')) {
                                    list.push('zhangheng_muniao');
                                }
                                if (list.length) {
                                    player
                                        .chooseControl(list)
                                        .set('prompt', '选择获得一项技能')
                                        .set('ai', function () {
                                            return list.randomGet();
                                        });
                                }
                                ('step 1');
                                player.addSkill(result.control);
                                player.popup(result.control);
                                game.log(player, '获得技能', '【' + get.translation(result.control) + '】');
                                player.useSkill('zhangheng_jiangxin2');
                            },
                        },
                        zhangheng_jiangxin: {
                            group: ['zhangheng_jiangxin1'],
                            derivation: ['zhangheng_shuxing', 'zhangheng_chuxiang', 'zhangheng_huntian', 'zhangheng_didong', 'zhangheng_ruilun', 'zhangheng_zhinan', 'zhangheng_muniao'],
                        },
                        zhangheng_didong: {
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            content() {
                                var num = player.countMark('zhangheng_di');
                                player.addSkill('zhangheng_di');
                                player.removeMark('zhangheng_di', num);
                                player.addMark('zhangheng_di', 3);
                            },
                        },
                        zhangheng_huntian: {
                            mark: true,
                            marktext: '天',
                            intro: {
                                content(storage, player, skill) {
                                    if (player.storage.zhangheng_huntian == true) return '出牌阶段限一次,摸两张牌,弃一张牌';
                                    return '出牌阶段限一次,摸一张牌,弃一张牌';
                                },
                            },
                            audio: 'ext:染柒的世界/audio:2',
                            filter(event, player) {
                                return !player.hasSkill('huntianspot');
                            },
                            content() {
                                if (player.storage.zhangheng_huntian == true) {
                                    player.storage.zhangheng_huntian = false;
                                    player.draw(2);
                                    player.addTempSkill('huntianspot');
                                    player.chooseToDiscard('he', true);
                                } else {
                                    player.storage.zhangheng_huntian = true;
                                    player.draw();
                                    player.addTempSkill('huntianspot');
                                    player.chooseToDiscard('he', true);
                                }
                            },
                            enable: 'phaseUse',
                            usable: 1,
                            ai: {
                                order: 2.7,
                                result: {
                                    player(player) {
                                        return 1;
                                    },
                                },
                            },
                        },
                        zhangheng_ruilun: {
                            audio: 'ext:染柒的世界/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            filter(event, player) {
                                var cards = player.getCards('h');
                                if (cards.length < 1) return false;
                                var color = get.color(cards[0]);
                                for (var i = 1; i < cards.length; i++) {
                                    if (get.color(i) != color) return false;
                                }
                                return player.maxHp < 4;
                            },
                            forced: true,
                            content() {
                                player.showHandcards(get.translation(player) + '发动了【瑞轮】');
                                player.gainMaxHp();
                                player.recover();
                            },
                            ai: {
                                expose: 0.1,
                            },
                        },
                        zhangheng_chuxiang: {
                            usable: 1,
                            trigger: {
                                global: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.source && event.player.isAlive();
                            },
                            check(event, player) {
                                if (player.isPhaseUsing()) return true;
                                if (event.player == player) return get.attitude(player, event.source) > -3;
                                return get.attitude(player, event.player) > -3;
                            },
                            content() {
                                'step 0';
                                if (trigger.player == player) {
                                    player.draw(2);
                                } else {
                                    game.asyncDraw([trigger.player, player]);
                                }
                            },
                            ai: {
                                expose: 0.3,
                            },
                        },
                        zhangheng_zhinan: {
                            trigger: {
                                player: ['chooseToRespondBegin', 'chooseToUseBegin'],
                            },
                            filter(event, player) {
                                if (event.responded) return false;
                                if (event.bagua_skill) return false;
                                if (!event.filterCard || !event.filterCard({ name: 'shan' }, player, event)) return false;
                                if (event.name == 'chooseToRespond' && !lib.filter.cardRespondable({ name: 'shan' }, player, event)) return false;
                                return true;
                            },
                            audio: 'ext:染柒的世界/audio:true',
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
                            content() {
                                'step 0';
                                trigger.bagua_skill = true;
                                player.judge('zhangheng_zhinan', function (card) {
                                    return card.suit == 'heart' ? 1.5 : -0.5;
                                });
                                ('step 1');
                                if (result.judge > 0) {
                                    trigger.untrigger();
                                    trigger.set('responded', true);
                                    trigger.result = { bool: true, card: { name: 'shan' } };
                                }
                            },
                            ai: {
                                respondShan: true,
                                effect: {
                                    target(card, player, target, effect) {
                                        if (get.tag(card, 'respondShan')) return 0.5;
                                    },
                                },
                            },
                        },
                        zhangheng_jiangxin2: {
                            trigger: {
                                global: 'gameDrawAfter',
                                player: 'enterGame',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var list = [];
                                if (!player.hasSkill('zhangheng_shuxing')) {
                                    list.push('zhangheng_shuxing');
                                }
                                if (!player.hasSkill('zhangheng_chuxiang')) {
                                    list.push('zhangheng_chuxiang');
                                }
                                if (!player.hasSkill('zhangheng_didong')) {
                                    list.push('zhangheng_didong');
                                }
                                if (!player.hasSkill('zhangheng_huntian')) {
                                    list.push('zhangheng_huntian');
                                }
                                if (!player.hasSkill('zhangheng_ruilun')) {
                                    list.push('zhangheng_ruilun');
                                }
                                if (!player.hasSkill('zhangheng_zhinan')) {
                                    list.push('zhangheng_zhinan');
                                }
                                if (!player.hasSkill('zhangheng_muniao')) {
                                    list.push('zhangheng_muniao');
                                }
                                if (list.length) {
                                    player
                                        .chooseControl(list)
                                        .set('prompt', '选择获得一项技能')
                                        .set('ai', function () {
                                            return list.randomGet();
                                        });
                                }
                                ('step 1');
                                player.addSkill(result.control);
                                player.popup(result.control);
                                game.log(player, '获得技能', '【' + get.translation(result.control) + '】');
                                player.useSkill('zhangheng_jiangxin3');
                            },
                        },
                        zhangheng_jiangxin3: {
                            trigger: {
                                global: 'gameDrawAfter',
                                player: 'enterGame',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var list = [];
                                if (!player.hasSkill('zhangheng_shuxing')) {
                                    list.push('zhangheng_shuxing');
                                }
                                if (!player.hasSkill('zhangheng_chuxiang')) {
                                    list.push('zhangheng_chuxiang');
                                }
                                if (!player.hasSkill('zhangheng_didong')) {
                                    list.push('zhangheng_didong');
                                }
                                if (!player.hasSkill('zhangheng_huntian')) {
                                    list.push('zhangheng_huntian');
                                }
                                if (!player.hasSkill('zhangheng_ruilun')) {
                                    list.push('zhangheng_ruilun');
                                }
                                if (!player.hasSkill('zhangheng_zhinan')) {
                                    list.push('zhangheng_zhinan');
                                }
                                if (!player.hasSkill('zhangheng_muniao')) {
                                    list.push('zhangheng_muniao');
                                }
                                if (list.length) {
                                    player
                                        .chooseControl(list)
                                        .set('prompt', '选择获得一项技能')
                                        .set('ai', function () {
                                            return list.randomGet();
                                        });
                                }
                                ('step 1');
                                player.addSkill(result.control);
                                player.popup(result.control);
                                game.log(player, '获得技能', '【' + get.translation(result.control) + '】');
                                player.removeSkill('zhangheng_jiangxin');
                            },
                        },
                        zhangheng_di: {
                            mark: true,
                            marktext: '地',
                            intro: {
                                content: '地动仪上还有#颗龙珠',
                            },
                            trigger: {
                                global: 'loseAfter',
                            },
                            filter(event, player) {
                                if (event.type != 'discard' || event.player == player || _status.currentPhase == player) return false;
                                if (player.countMark('zhangheng_di') < 1) return false;
                                for (var i = 0; i < event.cards2.length; i++) {
                                    if (get.type(event.cards2[i], null, event.hs.includes(event.cards2[i]) ? event.player : false) == 'trick') {
                                        return true;
                                    }
                                }
                                return false;
                            },
                            forced: true,
                            content() {
                                player.draw();
                                player.removeMark('zhangheng_di');
                                if (player.countMark('zhangheng_di') < 1) {
                                    player.removeSkill('zhangheng_di');
                                }
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        rqsj_baoling: {
                            audio: 'ext:染柒的世界/audio:2',
                            trigger: {
                                player: ['loseAfter', 'changeHp'],
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h') < 4 - player.hp && player.hp < 4;
                            },
                            content() {
                                var num = 4 - player.hp;
                                player.draw(num - player.countCards('h'));
                                game.log(player, ':', '蘑菇的力量,生生不息!');
                            },
                            ai: {
                                noh: true,
                                skillTagFilter(player, tag) {
                                    if (tag == 'noh' && 3 - player.hp < player.countCards('h')) {
                                        return false;
                                    }
                                },
                            },
                        },
                        rqsj_baozhang: {
                            audio: 'ext:染柒的世界/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            filter(event, player) {
                                return player.hp == player.maxHp || player.hp == 1;
                            },
                            forced: true,
                            content() {
                                if (player.hp == player.maxHp && player.hp >= 2) {
                                    player.gainMaxHp();
                                    game.log(player, ':', '生在黑暗,心向光明!');
                                }
                                if (player.hp == player.maxHp && player.hp == 1) {
                                    player.gainMaxHp();
                                    player.recover();
                                    game.log(player, ':', '苔花如米小,也学牡丹开!');
                                }
                                if (player.hp < player.maxHp && player.hp == 1) {
                                    player.recover();
                                    game.log(player, ':无限生长,因为热爱生命!');
                                } else {
                                    event.finish();
                                }
                            },
                        },
                        rqsj_tuisan: {
                            trigger: {
                                player: 'damageBefore',
                            },
                            filter(event, player) {
                                return player.getDamagedHp() > 2;
                            },
                            content() {
                                trigger.cancel();
                                player.loseMaxHp(2);
                                game.log(player, ':', '同孢一心,共克时艰!');
                            },
                            ai: {
                                expose: 0.2,
                                threaten: 1.5,
                            },
                        },
                        rqsj_yinlei: {
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt2('rqsj_yinlei'), function (card, player, target) {
                                    return true;
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
                                    event.target.damage('thunder');
                                    player.recover();
                                } else if (result.suit == 'spade') {
                                    event.target.damage('thunder');
                                }
                            },
                            ai: {
                                threaten(player, target) {
                                    return 1.6;
                                },
                            },
                        },
                        shishimo_shishi: {
                            trigger: {
                                global: 'die',
                            },
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player.chooseControl('增加一点体力上限', '回复一点体力', function (event, player) {
                                    var num1 = player.maxHp;
                                    var num2 = player.hp;
                                    if (num1 > num2) return '回复一点体力';
                                    return '增加一点体力上限';
                                });
                                ('step 1');
                                if (result.control == '回复一点体力') {
                                    player.recover();
                                } else {
                                    player.gainMaxHp();
                                }
                                game.log(player, ':', '尸体的味道,我还要更多!');
                            },
                            ai: {
                                threaten: 1.3,
                            },
                        },
                        rqsj_cisha: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                return event.notLink();
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            content() {
                                player.loseHp();
                                trigger.num++;
                                game.log(player, ':', '吾之使命,刺杀汝尔,安顾吾之安危？');
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        rqsj_shixue: {
                            audio: 'ext:染柒的世界/audio:2',
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            check(event, player) {
                                if (player.countCards('h') < 3) return false;
                                if (!player.hasSha()) return false;
                                return game.hasPlayer(function (current) {
                                    return get.attitude(player, current) < 0 && player.canUse('sha', current);
                                });
                            },
                            filter(event, player) {
                                return !event.numFixed && event.num > 0;
                            },
                            content() {
                                player.addTempSkill('luoyi2', 'phaseJieshuBegin');
                                trigger.num--;
                            },
                        },
                        rqsj_ranjin: {
                            audio: 'ext:染柒的世界/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.source != undefined;
                            },
                            forced: true,
                            logTarget: 'source',
                            content() {
                                trigger.source.addSkill('rqsj_ranshao');
                                trigger.source.addMark('rqsj_ranshao');
                                game.log(player, ':', '在梦魇中化为灰烬吧!');
                            },
                            ai: {
                                maixie_defend: true,
                                effect: {
                                    target(card, player, target) {
                                        if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
                                        return 0.8;
                                    },
                                },
                            },
                        },
                        rqsj_ranshao: {
                            mark: true,
                            marktext: '燃',
                            intro: {
                                content: '任意角色结束阶段,受到x点火焰伤害',
                            },
                            audio: 'ext:染柒的世界/audio:2',
                            trigger: {
                                global: 'phaseDiscardAfter',
                            },
                            forced: true,
                            content() {
                                var num = player.countMark('rqsj_ranshao');
                                player.damage(num, 'fire', 'nosource');
                                player.removeMark('rqsj_ranshao', num);
                                player.removeSkill('rqsj_ranshao');
                            },
                        },
                        rqsj_jianyue: {
                            audio: 'ext:染柒的世界/audio:2',
                            trigger: {
                                player: 'damageBegin4',
                            },
                            filter(event, player) {
                                return event.nature == 'thunder';
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt2('rqsj_jianyue'), function (card, player, target) {
                                    return true;
                                }).ai = function (target) {
                                    return get.attitude(player, target) > 2;
                                };
                                ('step 1');
                                if (result.bool) {
                                    var num = trigger.num;
                                    event.target = result.targets[0];
                                    event.target.draw(num);
                                }
                                trigger.cancel();
                            },
                            ai: {
                                nofire: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'thunderDamage')) return 'zerotarget';
                                    },
                                },
                            },
                        },
                        rqsj_jinshu: {
                            audio: 'ext:染柒的世界/audio:2',
                            trigger: {
                                player: 'discardAfter',
                            },
                            forced: true,
                            usable: 1,
                            filter(event, player) {
                                if (!event.cards) return false;
                                if (Array.isArray(event.cards)) for (var i of event.cards) {
                                    if (get.type(i) != 'basic') return true;
                                }
                                return false;
                            },
                            content() {
                                game.log(player, ':请赐予我无穷无尽的力量吧!');
                                player.draw(2);
                                player.addSkill('rqsj_fali');
                                player.addMark('rqsj_fali');
                            },
                        },
                        rqsj_dugu: {
                            audio: 'ext:染柒的世界/audio:2',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current != player && current.countCards('h') && player.hasSkill('rqsj_fali') && player.countMark('rqsj_fali') > 1;
                                });
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('rqsj_dugu'), function (card, player, target) {
                                    return target.countCards('h') > 0;
                                }).ai = function (target) {
                                    if (target.hasSkillTag('nodu')) return get.attitude(player, target) * 1.5;
                                    if (
                                        target.hasCard(function (card) {
                                            return card.name != 'dus';
                                        })
                                    ) {
                                        return -get.attitude(player, target);
                                    }
                                    return -get.attitude(player, target) / 5;
                                };
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    var card = target
                                        .getCards('h', function (card) {
                                            return card.name != 'dus';
                                        })
                                        .randomGet();
                                    if (card) {
                                        card.init([card.suit, card.number, 'dus']);
                                    }
                                    player.removeMark('rqsj_fali', 2);
                                    if (player.hp < player.maxHp) {
                                        player.recover();
                                    } else {
                                        player.changeHujia();
                                    }
                                    game.log(target, '将一张手牌转化为', { name: 'dus' });
                                    game.log(player, ':', '剑走偏锋,谁说不能曲径通幽？');
                                }
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        rqsj_wuduan: {
                            audio: 'ext:染柒的世界/audio:2',
                            trigger: {
                                player: 'PhaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.countCards('h')) return false;
                                return event.hs && event.hs.length;
                            },
                            content() {
                                player.draw(3);
                                player.chooseTarget(get.prompt('rqsj_zhengjun'), function (card, player, target) {
                                    return true;
                                }).ai = function (target) {
                                    return -get.attitude(player, target) / 5;
                                };
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.useSkill('rqsj_addshui');
                                }
                                game.log(player, ':铁马冰河,入梦无端!');
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
                        },
                        rqsj_sizhong: {
                            trigger: {
                                source: 'dieAfter',
                            },
                            forced: true,
                            content() {
                                game.log(player, ':', '你的生命,由我终结!');
                                player.recover();
                            },
                        },
                        rqsj_huichun: {
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            filter(event, player) {
                                return player.hp == 1;
                            },
                            forced: true,
                            content() {
                                game.log(player, ':', '今天的第一滴晨露,献给百花女神!');
                                player.recover();
                                player.draw(2);
                            },
                        },
                        rqsj_feiying: {
                            mod: {
                                globalTo(from, to, distance) {
                                    return distance + 1;
                                },
                            },
                        },
                        huntianspot: {},
                        wangzi_xiaoxing: {
                            audio: 'ext:染柒的世界/audio:2',
                            usable: 2,
                            derivation: ['wangzi_jiangfu'],
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                if (target.hasSkill('wangzi_jiangfu')) return false;
                                return player.countMark('wangzi_lingdie') > 0;
                            },
                            content() {
                                player.removeMark('wangzi_lingdie');
                                game.log(player, ':', '晓星荧荧,佑君平安!');
                                target.addSkill('wangzi_jiangfu');
                            },
                            ai: {
                                order: 4.5,
                                result: {
                                    target: 1,
                                },
                            },
                        },
                        wangzi_lingwei: {
                            mod: {
                                attackFrom(from, to, distance) {
                                    return distance - 1;
                                },
                            },
                        },
                        rqsj_senlin: {},
                        rqsj_shuangxing: {
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countMark('rqsj_fali') > 1;
                            },
                            check(event, player) {
                                return player.hp < player.maxHp || player.countcards('h') < player.hp;
                            },
                            content() {
                                'step 0';
                                player.removeMark('rqsj_fali', 2);
                                if (player.hp == player.maxHp) {
                                    player.draw(2);
                                    event.finish();
                                }
                                ('step 1');
                                player.chooseControl('摸两张牌', '回复体力', function (event, player) {
                                    var num1 = player.countCards('h');
                                    var num2 = player.hp;
                                    var num3 = player.maxHp;
                                    if (num1 >= num2 && num2 < num3) return '回复体力';
                                    return '摸两张牌';
                                });
                                ('step 2');
                                if (result.control == '摸两张牌') {
                                    player.draw(2);
                                } else {
                                    player.recover();
                                }
                            },
                            ai: {
                                basic: {
                                    order: 1,
                                },
                                result: {
                                    player(player) {
                                        if (player.countCards('h') >= player.maxHp) return -1;
                                        if (player.hp < player.maxHp) return 1;
                                        return 1;
                                    },
                                },
                            },
                        },
                        rqsj_shifa: {
                            usable: 3,
                            trigger: {
                                source: 'damageSource',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (!player.hasSkill('rqsj_fali') || player.countMark('rqsj_fali') < 2) {
                                    player.addSkill('rqsj_fali');
                                    player.addMark('rqsj_fali', 3);
                                } else {
                                    player.addSkill('rqsj_fali');
                                    player.addMark('rqsj_fali', 2);
                                }
                            },
                        },
                        rqsj_duoyuan: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            filter(event, player) {
                                return player.countMark('rqsj_fali') > 6;
                            },
                            check(event, player) {
                                if (player.hp == 1 && player.hujia == 0) return false;
                                var num = game.countPlayer(function (current) {
                                    var eff = get.sgn(get.damageEffect(current, player, player, 'fire'));
                                    if (current.hp == 1 && current.hujia == 0) eff *= 1.5;
                                    return eff;
                                });
                                return num > 0;
                            },
                            content() {
                                'step 0';
                                if (player.countMark('rqsj_fali')) {
                                    player.removeMark('rqsj_fali', 6);
                                }
                                event.targets = get.players(lib.sort.seat);
                                ('step 1');
                                if (event.targets.length) {
                                    var current = event.targets.shift();
                                    if (current.isIn()) {
                                        player.line(current, 'fire');
                                        current.damage('fire');
                                        event.redo();
                                    }
                                }
                            },
                        },
                        rqsj_tanshi: {
                            global: 'rqsj_tanshi2',
                        },
                        rqsj_tanshi2: {
                            audio: 'ext:染柒的世界/audio:2',
                            enable: 'phaseUse',
                            usable: 2,
                            filter(event, player) {
                                return (
                                    player.hp > 0 &&
                                    game.hasPlayer(function (current) {
                                        return current.hasSkill('rqsj_tanshi');
                                    })
                                );
                            },
                            content() {
                                if (!player.hasSkill('rqsj_tanlan')) {
                                    player.draw(2);
                                    player.loseHp(1);
                                    player.addSkill('rqsj_tanlan');
                                    player.addMark('rqsj_tanlan');
                                } else {
                                    var num1 = player.countMark('rqsj_tanlan') + 2;
                                    var num2 = player.countMark('rqsj_tanlan') + 1;
                                    player.draw(num1);
                                    player.loseHp(num2);
                                    player.addMark('rqsj_tanlan');
                                }
                            },
                            ai: {
                                basic: {
                                    order: 1,
                                },
                                result: {
                                    player(player) {
                                        if (player.countCards('h') >= player.hp - 1) return -1;
                                        if (player.hp < 3 || player.hp < player.countMark('rqsj_tanlan') + 2) return -1;
                                        return 1;
                                    },
                                },
                            },
                        },
                        rqsj_tanlan: {
                            mark: true,
                            marktext: '贪',
                            intro: {
                                content: '你已经发动#次贪舐',
                            },
                        },
                        rqsj_liancai: {
                            usable: 1,
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                if (!target.hasSkill('rqsj_tanlan')) return false;
                                return target.countMark('rqsj_tanlan') > 0;
                            },
                            content() {
                                var num = target.countMark('rqsj_tanlan');
                                target.removeMark('rqsj_tanlan', num);
                                target.removeSkill('rqsj_tanlan');
                                game.log(player, ':', '我收下这些,不多吧!');
                                player.draw(num);
                            },
                            ai: {
                                order: 4.5,
                                result: {
                                    target: 2,
                                    player: 0.5,
                                },
                            },
                        },
                        rqsj_gedang: {
                            trigger: {
                                global: 'roundStart',
                            },
                            forced: true,
                            filter(event, player) {
                                return !player.hujia && game.players.length > 3;
                            },
                            content() {
                                if (player.hp < player.maxHp) {
                                    player.draw();
                                }
                                player.changeHujia();
                            },
                        },
                        rqsj_huwei: {
                            audio: 'ext:染柒的世界/audio:2',
                            trigger: {
                                global: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && get.distance(player, event.target) <= 1 && player.countMark('rqsj_yongqi') > 0;
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) >= 2;
                            },
                            content() {
                                var num;
                                if (player.countMark('rqsj_yongqi') >= 3) {
                                    num = 1;
                                } else {
                                    num = 3 - player.countMark('rqsj_yongqi');
                                }
                                trigger.target.draw(num);
                                player.removeMark('rqsj_yongqi');
                            },
                        },
                        rqsj_yongqi3: {
                            trigger: {
                                global: 'gameDrawAfter',
                                player: ['enterGame', 'phaseZhunbeiBegin'],
                            },
                            forced: true,
                            content() {
                                if (!player.hasSkill('rqsj_yongqi')) {
                                    player.addSkill('rqsj_yongqi');
                                }
                                if (player.countMark('rqsj_yongqi') < 3) {
                                    var num = player.countMark('rqsj_yongqi');
                                    player.removeMark('rqsj_yongqi', num);
                                    player.addMark('rqsj_yongqi', 3);
                                }
                            },
                        },
                        rqsj_yongqi: {
                            mark: true,
                            marktext: '勇',
                            intro: {
                                content: '你还有#点勇气',
                            },
                        },
                        rqsj_xuelian: {
                            audio: 'ext:染柒的世界/audio:2',
                            usable: 1,
                            enable: 'phaseUse',
                            filter(event, player) {
                                return true;
                            },
                            position: 'he',
                            selectCard: 2,
                            filterCard: true,
                            filterTarget(card, player, target) {
                                return target != player && player.hp <= target.hp;
                            },
                            check(card) {
                                return 6 - get.value(card);
                            },
                            content() {
                                'step 0';
                                if (player.hp < player.maxHp) {
                                    player.recover();
                                } else {
                                    player.changeHujia();
                                }
                                target.damage('nocard');
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
                        rqsj_fali3: {
                            trigger: {
                                global: 'gameDrawAfter',
                                player: ['enterGame', 'phaseZhunbeiBegin'],
                            },
                            forced: true,
                            content() {
                                if (!player.hasSkill('rqsj_fali')) {
                                    player.addSkill('rqsj_fali');
                                }
                                if (player.countMark('rqsj_fali') < 3) {
                                    var num = player.countMark('rqsj_fali');
                                    player.removeMark('rqsj_fali', num);
                                    player.addMark('rqsj_fali', 3);
                                }
                            },
                        },
                        rqsj_fali2: {
                            trigger: {
                                global: 'gameDrawAfter',
                                player: ['enterGame', 'phaseZhunbeiBegin'],
                            },
                            forced: true,
                            content() {
                                if (!player.hasSkill('rqsj_fali')) {
                                    player.addSkill('rqsj_fali');
                                }
                                if (player.countMark('rqsj_fali') < 2) {
                                    var num = player.countMark('rqsj_fali');
                                    player.removeMark('rqsj_fali', num);
                                    player.addMark('rqsj_fali', 2);
                                }
                            },
                        },
                        rqsj_fali1: {
                            trigger: {
                                global: 'gameDrawAfter',
                                player: ['enterGame', 'phaseZhunbeiBegin'],
                            },
                            forced: true,
                            content() {
                                if (!player.hasSkill('rqsj_fali')) {
                                    player.addSkill('rqsj_fali');
                                }
                                if (player.countMark('rqsj_fali') < 1) {
                                    var num = player.countMark('rqsj_fali');
                                    player.removeMark('rqsj_fali', num);
                                    player.addMark('rqsj_fali');
                                }
                            },
                        },
                        rqsj_mingbao: {
                            mod: {
                                maxHandcard(player, num) {
                                    return 2 + num;
                                },
                            },
                            trigger: {
                                player: 'dying',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var list = [1, 2].randomGet();
                                if (list == 1) {
                                    player.recover();
                                }
                            },
                        },
                        rqsj_hengsao: {
                            trigger: {
                                source: 'damageSource',
                            },
                            filter(event, player) {
                                if (event._notrigger.includes(event.player)) return false;
                                return event.card && event.card.name == 'sha' && event.parent.name == 'sha' && event.player.isAlive() && player.canCompare(event.player);
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('jidian'), function (card, player, target) {
                                    return get.distance(trigger.player, target) <= 1 && trigger.player != target;
                                }).ai = function (target) {
                                    return get.damageEffect(target, player, player, 'thunder') + 0.1;
                                };
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    event.target.damage();
                                }
                            },
                        },
                        rqsj_shihou: {
                            shaRelated: true,
                            trigger: {
                                source: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                if (trigger.notLink()) {
                                    player.getStat().card.sha--;
                                }
                                player.draw();
                            },
                        },
                        rqsj_wuyuan: {
                            mod: {
                                targetEnabled(card, player, target, now) {
                                    if (card.name == 'lebu') return false;
                                },
                            },
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'shunshou';
                            },
                            forced: true,
                            content() {
                                player.draw();
                            },
                            audio: 'ext:染柒的世界/audio:2',
                        },
                        rqsj_xiuchan: {
                            usable: 1,
                            trigger: {
                                source: 'damageSource',
                            },
                            filter(event, player) {
                                if (event._notrigger.includes(event.player)) return false;
                                return event.num > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseControl('回复体力摸牌手牌上限减一', '弃一张牌结束阶段摸两张牌', function (event, player) {
                                    var num1 = player.countCards('h');
                                    var num2 = player.hp;
                                    if (num2 <= 2) return '回复体力摸牌手牌上限减一';
                                    return '弃一张牌结束阶段摸两张牌';
                                });
                                ('step 1');
                                if (result.control == '弃一张牌结束阶段摸两张牌') {
                                    player.chooseToDiscard('he', true);
                                    player.addTempSkill('rqsj_xiuchan2');
                                } else {
                                    player.recover();
                                    player.draw();
                                    player.addTempSkill('rqsj_shoujian');
                                }
                            },
                        },
                        rqsj_xiuchan2: {
                            audio: 'ext:染柒的世界/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            content() {
                                player.draw(2);
                            },
                        },
                        rqsj_shikongchuansuo: {
                            round: 1,
                            nobracket: true,
                            trigger: {
                                global: 'phaseAfter',
                            },
                            content() {
                                if (game.players.length > 3) {
                                    player.phase('nodelay');
                                } else {
                                    player.draw();
                                    player.chooseToUse();
                                }
                            },
                            group: ['rqsj_shikongchuansuo_roundcount'],
                        },
                        rqsj_kongjianxingnang: {
                            nobracket: true,
                            trigger: {
                                global: 'gameStart',
                                player: 'enterGame',
                            },
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                var card = game.createCard(get.inpile('equip').randomGet());
                                player.equip(card);
                                player.$gain2(card);
                                player.draw(2);
                            },
                        },
                        rqsj_yanzhengjinjie: {
                            audio: 'ext:染柒的世界/audio:2',
                            nobracket: true,
                            trigger: {
                                global: 'damageEnd',
                            },
                            filter(event, player) {
                                return (!event.card || event.card.name != 'sha') && event.player.classList.contains('dead') == false;
                            },
                            check(event, player) {
                                var att1;
                                att1 = get.attitude(player, event.player);
                                if (player != event.player && player.hp < 2 && !player.hasSkill('rqsj_miaoshouhuichun')) {
                                    att1 = 3;
                                }
                                if (player != event.player && player.hp < 2 && player.hasSkill('rqsj_miaoshouhuichun') && player.countMark('rqsj_yongqi') < 2) {
                                    att1 = 3;
                                }
                                if (player != event.player && player.hp < 2 && player.hasSkill('rqsj_miaoshouhuichun') && player.countCards('h') < 1) {
                                    att1 = 3;
                                }
                                return att1 > 4;
                            },
                            content() {
                                'step 0';
                                if (!player.hasSkill('rqsj_yongqi')) {
                                    player.addSkill('rqsj_yongqi');
                                }
                                player.addMark('rqsj_yongqi');
                                ('step 1');
                                trigger.player.recover();
                                player.loseHp();
                                player.draw();
                                if (trigger.source != undefined && trigger.source.hasSkill('rqsj_xuelian') && !trigger.player.hasSkill('rqsj_yanzhengjinjie')) {
                                    player.chat('使命所在,誓死必争!');
                                    trigger.source.chat('可恶!');
                                }
                            },
                            ai: {
                                expose: 0.3,
                            },
                        },
                        rqsj_bingqingzuge: {
                            nobracket: true,
                            audio: 'ext:染柒的世界/audio:2',
                            juexingji: true,
                            derivation: 'rqsj_miaoshouhuichun',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.storage.rqsj_bingqingzuge) return false;
                                if (player.countMark('rqsj_yongqi') > player.hp && player.hp < player.maxHp) return true;
                                if (lib.config.extension_染柒的世界_zhanyitianshiup == true && player.hp < player.maxHp) return true;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('rqsj_bingqingzuge');
                                player.recover();
                                ('step 1');
                                player.loseMaxHp();
                                player.storage.rqsj_bingqingzuge = true;
                                if (player.hp > player.maxHp) player.hp = player.maxHp;
                                player.update();
                                player.addSkill('rqsj_miaoshouhuichun');
                            },
                        },
                        rqsj_miaoshouhuichun: {
                            nobracket: true,
                            audio: 'ext:染柒的世界/audio:2',
                            trigger: {
                                global: 'dying',
                            },
                            filter(event, player) {
                                if (event.player.hp <= 0 && player.countMark('rqsj_yongqi') > 0 && player.hasSkill('rqsj_jijiu')) return true;
                                if (event.player.hp <= 0 && player.countMark('rqsj_yongqi') > 0 && player.hasSkill('jijiu')) return true;
                                if (event.player.hp <= 0 && player.countMark('rqsj_yongqi') > 0 && player.hasSkill('rqsj_jijiu_zhanyitianshi')) return true;
                                if (event.player.hp <= 0 && player.countMark('rqsj_yongqi') > 1 && !player.hasSkill('rqsj_jijiu_zhanyitianshi')) return true;
                                return false;
                            },
                            check(event, player) {
                                var att1 = get.attitude(player, event.player);
                                return att1 > 3;
                            },
                            content() {
                                if (!player.hasSkill('rqsj_jijiu_zhanyitianshi') && !player.hasSkill('rqsj_jijiu') && !player.hasSkill('jijiu')) {
                                    player.addTempSkill('rqsj_jijiu_zhanyitianshi');
                                    player.draw();
                                    player.removeMark('rqsj_yongqi', 2);
                                } else {
                                    player.draw();
                                    player.removeMark('rqsj_yongqi', 1);
                                }
                            },
                            ai: {
                                expose: 0.2,
                                threaten: 1.5,
                                save: true,
                            },
                        },
                        rqsj_jijiu_zhanyitianshi: {
                            audio: 'ext:染柒的世界/audio:2',
                            enable: 'chooseToUse',
                            filter(event, player) {
                                return _status.currentPhase != player;
                            },
                            filterCard(card, player) {
                                return get.color(card) == 'red';
                            },
                            position: 'he',
                            viewAs: {
                                name: 'tao',
                            },
                            prompt: '将一张红色牌当桃使用',
                            check(card) {
                                return 15 - get.value(card);
                            },
                            ai: {
                                skillTagFilter(player) {
                                    return player.countCards('he', { color: 'red' }) > 0 && _status.currentPhase != player;
                                },
                                threaten: 1.5,
                                save: true,
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
                        },
                        rqsj_baihuanvshen1: {
                            nobracket: true,
                            forced: true,
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            filter(event, player) {
                                return player.hp < player.maxHp;
                            },
                            content() {
                                player.loseMaxHp();
                                if (!player.hasSkill('rqsj_huawu')) {
                                    player.addSkill('rqsj_huawu');
                                }
                                if (!player.hasSkill('rqsj_huameng')) {
                                    player.addSkill('rqsj_huameng');
                                }
                                player.storage.rqsj_baihuanvshen1_end = player.addSubPlayer({
                                    name: 'rqsj_huajingling',
                                    hp: 2,
                                    maxHp: 2,
                                    skills: ['rqsj_huichun', 'rqsj_huajinglinghuantou'],
                                    hs: get.cards(2),
                                });
                                player.callSubPlayer(player.storage.rqsj_baihuanvshen1_end);
                            },
                            subSkill: {
                                end: {
                                    temp: true,
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    silent: true,
                                    filter(event, player) {
                                        return player.storage.rqsj_baihuanvshen1_end;
                                    },
                                    content() {
                                        player.phase('nodelay');
                                        delete player.storage.rqsj_baihuanvshen1_end;
                                    },
                                    forced: true,
                                    popup: false,
                                },
                            },
                        },
                        rqsj_huawu: {
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return _status.currentPhase == player && player.countUsed() == 2;
                            },
                            content() {
                                var type = get.type(trigger.card);
                                var card = get.cardPile2(function (card) {
                                    return get.type(card) == type;
                                });
                                if (card) {
                                    player.gain(card, 'gain2', 'log');
                                }
                                if (!player.hasSkill('rqsj_huazhibenyuan1')) {
                                    player.removeSkill('rqsj_huawu');
                                }
                            },
                            ai: {
                                threaten: 1.1,
                            },
                        },
                        rqsj_huameng: {
                            audio: 'ext:染柒的世界/audio:2',
                            trigger: {
                                global: 'judge',
                            },
                            filter(event, player) {
                                return player.countCards(get.mode() == 'guozhan' ? 'he' : 'h') >= 0;
                            },
                            content() {
                                'step 0';
                                player.draw(2);
                                if (!player.hasSkill('rqsj_huazhibenyuan1')) {
                                    player.removeSkill('rqsj_huameng');
                                }
                                player
                                    .chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('guicai'), get.mode() == 'guozhan' ? 'he' : 'h', function (card) {
                                        var player = _status.event.player;
                                        var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                                        if (mod2 != 'unchanged') return mod2;
                                        var mod = game.checkMod(card, player, 'unchanged', 'cardRespondable', player);
                                        if (mod != 'unchanged') return mod;
                                        return true;
                                    })
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
                                    player.respond(result.cards, 'guicai', 'highlight', 'noOrdering');
                                } else {
                                    event.finish();
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
                                }
                            },
                            ai: {
                                rejudge: true,
                                tag: {
                                    rejudge: 1,
                                },
                            },
                        },
                        rqsj_liuxiang: {
                            mark: true,
                            marktext: '香',
                            intro: {
                                content: '回合结束阶段,摸一张牌,持续#回合',
                            },
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            content() {
                                player.draw();
                                player.removeMark('rqsj_liuxiang');
                                if (player.countMark('rqsj_liuxiang') < 1) {
                                    player.removeSkill('rqsj_liuxiang');
                                }
                            },
                        },
                        rqsj_huazhibenyuan: {
                            audio: 'ext:染柒的世界/audio:2',
                            nobracket: true,
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                if (player.maxHp > 1) {
                                    var list = [1, 2].randomGet();
                                    if (list == 1) {
                                        player.addTempSkill('rqsj_huazhibenyuan1');
                                    }
                                    player.draw();
                                } else {
                                    player.awakenSkill('rqsj_baihuanvshen1');
                                    player.addMaxHp(2);
                                    player.draw();
                                    player.changeHujia();
                                }
                            },
                        },
                        rqsj_huazhibenyuan1: {},
                        rqsj_chujvzhaohuan: {
                            usable: 1,
                            audio: 'ext:染柒的世界/audio:2',
                            enable: 'phaseUse',
                            position: 'he',
                            nobracket: true,
                            filter(event, player) {
                                return player.countCards('he', { type: 'equip' }) > 0;
                            },
                            filterCard(card, player) {
                                return get.type(card) == 'equip';
                            },
                            check(card) {
                                if (_status.event.player.isDisabled(get.subtype(card))) return 5;
                                return 3 - get.value(card);
                            },
                            content() {
                                player.draw();
                                player.gain(game.createCard(get.inpile('equip').randomGet()), 'draw');
                            },
                            discard: false,
                            visible: true,
                            loseTo: 'discardPile',
                            prompt: '将一张装备牌置入弃牌堆并摸一张牌,如若此作,你获得一张随机装备牌.',
                            delay: 0.5,
                            prepare(cards, player) {
                                player.$throw(cards, 1000);
                                game.log(player, '将', cards, '置入了弃牌堆');
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        rqsj_dacan: {
                            round: 3,
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                return true;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.targets = get.players(lib.sort.seat);
                                ('step 1');
                                if (event.targets.length) {
                                    var current = event.targets.shift();
                                    if (current.isIn()) {
                                        var list = ['rqsj_shengdanhuoji', 'rqsj_youzhihuoji', 'rqsj_youzhihuoji', 'rqsj_youzhihuoji', 'rqsj_jinpaihuoji', 'rqsj_jinpaihuoji', 'rqsj_jinpaihuoji', 'rqsj_shengdanhuoji', 'rqsj_shengdanhuoji', 'rqsj_shengdanhuoji', 'rqsj_chuxidacan'];
                                        current.gain(game.createCard(list.randomGet()), 'draw');
                                        event.redo();
                                    }
                                }
                            },
                            group: ['rqsj_dacan_roundcount'],
                        },
                        rqsj_cujinxiaohua: {
                            trigger: {
                                source: 'damageSource',
                            },
                            nobracket: true,
                            filter(event, player) {
                                if (event._notrigger.includes(event.player)) return false;
                                return event.player.isAlive() && event.player.hasSkill('rqsj_liuxiang');
                            },
                            content() {
                                trigger.player.removeMark('rqsj_liuxiang');
                                player.draw();
                                if (trigger.player.countMark('rqsj_liuxiang') < 1) {
                                    trigger.player.removeSkill('rqsj_liuxiang');
                                }
                            },
                        },
                        rqsj_shuangjiao: {
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('rqsj_shuangjiao1'), 1, true, function (card, player, target) {
                                        return true;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var targets = result.targets;
                                    while (targets.length) {
                                        var target = targets.shift();
                                        if (target.hp < target.maxHp) {
                                            target.recover();
                                        } else {
                                            target.draw();
                                        }
                                    }
                                }
                                player.removeMark('rqsj_shuangjiao1', 3);
                                ('step 2');
                                player
                                    .chooseTarget(get.prompt('rqsj_shuangjiao1'), 1, true, function (card, player, target) {
                                        return true;
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    });
                                ('step 3');
                                if (result.bool) {
                                    var targets = result.targets;
                                    while (targets.length) {
                                        var target = targets.shift();
                                        target.useSkill('rqsj_addshui');
                                    }
                                }
                                player.removeMark('rqsj_shuangjiao1', 3);
                            },
                        },
                        rqsj_shuangjiao1: {
                            mark: true,
                            marktext: '娇',
                            forced: true,
                            intro: {
                                content: '已造成#次伤害,每造成三次伤害令一名角色回复一点体力,若体力值满,则改为摸牌',
                            },
                            trigger: {
                                source: 'damageSource',
                            },
                            filter(event, player) {
                                if (event._notrigger.includes(event.player)) return false;
                                return event.player.isAlive();
                            },
                            content() {
                                player.addMark('rqsj_shuangjiao1');
                                if (player.countMark('rqsj_shuangjiao1') >= 3) {
                                    player.useSkill('rqsj_shuangjiao');
                                }
                            },
                        },
                        rqsj_ruodiangongji: {
                            nobracket: true,
                            audio: 'ext:染柒的世界/audio:2',
                            shaRelated: true,
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            logTarget: 'target',
                            content() {
                                trigger.parent.directHit.add(trigger.target);
                            },
                        },
                        rqsj_moshenzhijia: {
                            audio: 'ext:染柒的世界/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return true;
                            },
                            nobracket: true,
                            forced: true,
                            check(event, player) {
                                return get.attitude(player, event.source) <= 0;
                            },
                            logTarget: 'source',
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('rqsj_moshenzhijia'), [0, 3], function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                result.targets[0].chooseControl('弃牌', '受到伤害', function (event, player) {
                                    var num1 = player.countCards('h');
                                    var num2 = player.hp;
                                    if (num1 >= 3 && num2 <= 2) return '弃牌';
                                    return '受到伤害';
                                });
                                ('step 2');
                                if (result.control == '弃牌') {
                                    result.targets[0].chooseToDiscard(2, true).set('ai', function (card) {
                                        if (card.name == 'tao') return -10;
                                        if (card.name == 'jiu' && _status.event.player.hp == 1) return -10;
                                        return get.unuseful(card) + 2.5 * (5 - get.owner(card).hp);
                                    });
                                } else {
                                    result.targets[0].damage();
                                }
                            },
                            ai: {
                                maixie_defend: true,
                                effect: {
                                    target(card, player, target) {
                                        if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
                                        return 0.8;
                                    },
                                },
                            },
                        },
                        rqsj_shenxingqiqiu_shenyuan: {
                            filter(event, player) {
                                return true;
                            },
                            _priority: 20,
                            audio: 'ext:染柒的世界/audio:2',
                            nobracket: true,
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                player.clearSkills();
                                player.update();
                                var num = player.hp;
                                player.init('rqsj_shenyuanyingmo');
                                player.hp = num;
                                player.update();
                            },
                        },
                        rqsj_mianyi: {
                            trigger: {
                                player: 'turnOverBefore',
                            },
                            _priority: 20,
                            forced: true,
                            filter(event, player) {
                                return !player.isTurnedOver();
                            },
                            content() {
                                trigger.cancel();
                                game.log(player, '取消了翻面');
                            },
                            group: ['xianren_shenti1', 'qingniao_xiangyun'],
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (['tiesuo', 'lulitongxin'].includes(card.name)) {
                                            return 'zerotarget';
                                        }
                                    },
                                },
                            },
                        },
                        rqsj_duyun_shenyuan: {
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            filter(event, player) {
                                return true;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.targets = get.players(lib.sort.seat);
                                ('step 1');
                                if (event.targets.length) {
                                    var current = event.targets.shift();
                                    if (current.isIn()) {
                                        if (!current.hasSkill('rqsj_duyun_shenyuan')) {
                                            current.gain(game.createCard('du', 'draw'));
                                        }
                                        event.redo();
                                    }
                                }
                            },
                        },
                        rqsj_mingbaos: {
                            forced: true,
                            trigger: {
                                player: 'dyingAfter',
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt2('rqsj_mingbaos'), function (card, player, target) {
                                    return true;
                                }).ai = function (target) {
                                    if (target.hasSkill('hongyan')) return 0;
                                    return get.damageEffect(target, _status.event.player, _status.event.player, 'thunder');
                                };
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    var num = [1, 0].randomGet();
                                    if (get.isLuckyStar(player)) num = 1;
                                    if (num == 1) {
                                        player.line(result.targets[0], 'green');
                                        result.targets[0].damage(1, 'fire');
                                        var num1 = [1, 1, 2, 3, 5].randomGet();
                                        if (num1 == 1) {
                                            event.goto(2);
                                        } else {
                                            event.finish();
                                        }
                                    } else {
                                        event.finish();
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                player.chooseTarget(get.prompt2('rqsj_mingbaos'), function (card, player, target) {
                                    return true;
                                }).ai = function (target) {
                                    if (target.hasSkill('hongyan')) return 0;
                                    return get.damageEffect(target, _status.event.player, _status.event.player, 'thunder');
                                };
                                ('step 3');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    var num2 = [1, 0].randomGet();
                                    if (get.isLuckyStar(player)) num2 = 1;
                                    if (num2 == 1) {
                                        player.line(result.targets[0], 'green');
                                        result.targets[0].damage(1, 'fire');
                                    }
                                }
                            },
                        },
                        lrdj_liangu: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return game.hasPlayer(function (player) {
                                    return player.countCards('h') == 0;
                                });
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('lrdj_liangu'), function (card, player, target) {
                                        return target.countCards('h') == 0;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.recover();
                                    result.targets[0].gain(game.createCard('dus'), 'gain2');
                                }
                            },
                        },
                        lrdj_dl: {
                            trigger: {
                                global: ['useCardAfter', 'respondAfter', 'discardAfter'],
                            },
                            filter(event, player) {
                                if (event.cards) {
                                    if (Array.isArray(event.cards)) for (var i of event.cards) {
                                        if (get.position(i) == 'd' && i.name == 'dus') return true;
                                    }
                                }
                                return false;
                            },
                            frequent: 'check',
                            check(event) {
                                if (Array.isArray(event.cards)) for (var i of event.cards) {
                                    if (get.position(i) == 'd' && i.name == 'dus') return true;
                                }
                                return false;
                            },
                            content() {
                                var cards = [];
                                if (Array.isArray(trigger.cards)) for (var i of trigger.cards) {
                                    if (get.position(i) == 'd') {
                                        cards.push(i);
                                    }
                                }
                                player.gain(game.createCard('guohe'), 'gain2');
                            },
                        },
                        lrdj_qixi: {
                            enable: 'chooseToUse',
                            filterCard(card, player) {
                                return get.color(card) == 'black';
                            },
                            position: 'he',
                            viewAs: {
                                name: 'guohe',
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('he', { color: 'black' })) return false;
                            },
                            prompt: '将一张黑色牌当过河拆桥使用',
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
                        lrdj_yl: {
                            mod: {
                                maxHandcard(player, num) {
                                    return num + 1;
                                },
                            },
                            trigger: {
                                global: 'shaBegin',
                            },
                            filter(event, player) {
                                return event.target == event.targets[0] && player.countCards('he') > 0 && event.card.name == 'sha' && _status.currentPhase == event.player && event.parent.parent.parent.name == 'phaseUse';
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var go = false;
                                if (get.attitude(player, trigger.player) > 0) {
                                    if (get.color(trigger.card) == 'black') {
                                        go = true;
                                    } else if (!trigger.player.hasSkill('paoxiao') && !trigger.player.hasSkill('tanlin3') && !trigger.player.hasSkill('zhaxiang2') && !trigger.player.hasSkill('fengnu') && !trigger.player.getEquip('zhuge')) {
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
                                var next = player.chooseToDiscard(get.prompt('lrdj_yl'), 'he');
                                next.set('ai', function (card) {
                                    if (_status.event.go) {
                                        return 6 - get.value(card);
                                    }
                                    return 0;
                                });
                                next.set('go', go);
                                ('step 1');
                                if (result.bool) {
                                    trigger.player.getStat().card.sha--;
                                    if (get.color(trigger.card) == 'black') {
                                        player.draw();
                                    }
                                }
                            },
                            ai: {
                                expose: 0.2,
                            },
                        },
                        lrdj_jieming: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.count = Math.min(trigger.num, 9);
                                ('step 1');
                                event.count--;
                                player
                                    .chooseTarget(get.prompt2('jieming'), function (card, player, target) {
                                        return target.countCards('h') < Math.min(target.maxHp, 5);
                                    })
                                    .set('ai', function (target) {
                                        var att = get.attitude(_status.event.player, target);
                                        if (att > 2) {
                                            return Math.min(5, target.maxHp) - target.countCards('h');
                                        }
                                        return att / 3;
                                    });
                                ('step 2');
                                if (result.bool) {
                                    for (var i = 0; i < result.targets.length; i++) {
                                        result.targets[i].drawTo(Math.min(5, result.targets[i].maxHp));
                                    }
                                    if (event.count) event.goto(1);
                                }
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'damage') && target.hp > 1) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                            var max = 0;
                                            var players = game.filterPlayer();
                                            for (var i of players) {
                                                if (get.attitude(target, i) > 0) {
                                                    max = Math.max(Math.min(5, i.hp) - i.countCards('h'), max);
                                                }
                                            }
                                            switch (max) {
                                                case 0:
                                                    return 2;
                                                case 1:
                                                    return 1.5;
                                                case 2:
                                                    return [1, 2];
                                                default:
                                                    return [0, max];
                                            }
                                        }
                                        if ((card.name == 'tao' || card.name == 'caoyao') && target.hp > 1 && target.countCards('h') <= target.hp) return [0, 0];
                                    },
                                },
                            },
                        },
                        lrdj_shafu: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                player.gainMaxHp();
                                player.draw();
                            },
                        },
                        lrdj_huiyi: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            selectCard: 1,
                            filter(event, player) {
                                return player.hp + 1 < player.maxHp;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseToDiscard('h', get.prompt('lrdj_huiyi')).set('prompt2', '弃置一张手牌并获一件随机装备').ai = function (card) {
                                    return 8 - get.value(card);
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.loseMaxHp();
                                    player.recover();
                                    player.draw();
                                }
                            },
                        },
                        lrdj_fangquan: {
                            trigger: {
                                player: 'phaseUseBefore',
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0 && !player.hasSkill('fangquan3');
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var fang = player.countMark('fangquan2') == 0 && player.hp >= 2 && player.countCards('h') <= player.hp + 1;
                                player
                                    .chooseBool(get.prompt2('fangquan'))
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
                                    player.addMark('fangquan2', 1, false);
                                }
                            },
                        },
                        lrdj_shuangyue: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.phaseUse();
                                ('step 1');
                                var stat = player.getStat();
                                stat.card = {};
                                for (var i in stat.skill) {
                                    var bool = false;
                                    var info = lib.skill[i];
                                    if (info.enable != undefined) {
                                        if (typeof info.enable == 'string' && info.enable == 'phaseUse') bool = true;
                                        else if (typeof info.enable == 'object' && info.enable.includes('phaseUse')) bool = true;
                                    }
                                    if (bool) stat.skill[i] = 0;
                                }
                            },
                        },
                        lrdj_yueguang: {
                            trigger: {
                                player: ['phaseUseBegin'],
                            },
                            forced: true,
                            content() {
                                player.draw();
                            },
                        },
                        lrdj_yueyin: {
                            trigger: {
                                player: 'phaseUseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countUsed() > player.hp && !player.hujia;
                            },
                            content() {
                                player.changeHujia();
                            },
                            init(player) {
                                player.storage.lrdj_yueyin = true;
                            },
                            intro: {
                                content(storage, player) {
                                    if (_status.currentPhase == player) return '已使用' + player.countUsed() + '张牌';
                                },
                            },
                        },
                        lrdj_xisheng: {
                            enable: 'chooseToUse',
                            usable: 1,
                            viewAs: {
                                name: 'tao',
                            },
                            viewAsFilter(player) {
                                return player != _status.currentPhase && player.countCards('he') > 1;
                            },
                            onuse(event, player) {
                                player.draw();
                            },
                            selectCard: 2,
                            filterCard: true,
                            position: 'he',
                            ai: {
                                save: true,
                                skillTagfilter(event, player) {
                                    return lib.skill.xisheng.viewAsFilter.apply(this, arguments);
                                },
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
                        },
                        lrdj_duoluo: {
                            mod: {
                                maxHandcard(player, num) {
                                    return 2;
                                },
                            },
                            trigger: {
                                player: 'phaseEnd',
                            },
                            filter(event, player) {
                                return player.isMinHp();
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var num = player.maxHp - player.hp;
                                player
                                    .chooseTarget(get.prompt('lrdj_duoluo'), [1, num], function (card, player, target) {
                                        return target;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(player, target) > 2;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    event.players = result.targets;
                                    for (var i of event.players) {
                                        i.draw();
                                    }
                                }
                                ('step 2');
                                player.changeHujia();
                            },
                            ai: {
                                threaten: 0.5,
                                neg: true,
                            },
                        },
                        lrdj_yaoshui: {
                            derivation: ['lrdj_jie', 'lrdj_zhishan'],
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            check(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    return get.color(card) == 'red' ? 1.5 : -0.5;
                                });
                                ('step 1');
                                if (result.judge > 0) {
                                    trigger.player.addTempSkill('lrdj_zhishan', 'phaseUseEnd');
                                }
                                if (result.judge < 0) {
                                    trigger.player.addTempSkill('lrdj_jie', 'phaseUseEnd');
                                }
                            },
                            ai: {
                                expose: 0.3,
                            },
                        },
                        lrdj_jie: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return target.hp >= 0;
                            },
                            content() {
                                target.gain(game.createCard('lr_duyao'), 'gain2');
                            },
                            ai: {
                                threaten: 1,
                                result: {
                                    target(player, target) {
                                        if (target.countCards('h') <= 1) return -3.5;
                                        if (target.hasSkillTag('usedu')) return 5;
                                        return -3.5;
                                    },
                                },
                                order: 4,
                                expose: 0.4,
                            },
                        },
                        lrdj_zhishan: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return true;
                            },
                            content() {
                                target.gain(game.createCard('lr_lingyao'), 'gain2');
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
                        lrdj_duyao: {
                            trigger: {
                                player: ['useCardAfter', 'respondAfter', 'discardAfter'],
                            },
                            popup: false,
                            forced: true,
                            filter(event, player) {
                                if (player.hasSkillTag('nodu')) return false;
                                if (event.cards) {
                                    if (Array.isArray(event.cards)) for (var i of event.cards) {
                                        if (i.name == 'duyao' && i.original != 'j') return true;
                                    }
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                var num = 0;
                                if (Array.isArray(trigger.cards)) for (var i of trigger.cards) {
                                    if (i.name == 'duyao' && i.original != 'j') num++;
                                }
                                player.popup('毒药', 'wood');
                                player.loseHp(num);
                                ('step 1');
                                player.gain(
                                    get.cardPile(function (card) {
                                        return card.name == 'du';
                                    }),
                                    'gain2'
                                );
                            },
                        },
                        zhaojun_yinyuea: {
                            audio: 'ext:染柒的世界/audio:true',
                            trigger: {
                                player: ['chooseToCompareAfter', 'compareMultipleAfter'],
                                target: ['chooseToCompareAfter', 'compareMultipleAfter'],
                            },
                            content() {
                                var num1 = player.countCards('h');
                                var num2 = player.maxHp;
                                var num3 = num2 - num1;
                                if (num1 >= num2) {
                                    player.draw();
                                } else {
                                    player.draw(num3);
                                }
                            },
                        },
                        zhaojun_yinyueb: {
                            audio: 'ext:染柒的世界/audio:true',
                            trigger: {
                                player: 'judgeEnd',
                            },
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                var num1 = player.countCards('h');
                                var num2 = player.maxHp;
                                var num3 = num2 - num1;
                                if (num1 >= num2) {
                                    player.draw();
                                } else {
                                    player.draw(num3);
                                }
                            },
                        },
                        rqsj_xinwuduan: {
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h') < player.hp;
                            },
                            content() {
                                'step 0';
                                player.chooseToDiscard('he', get.prompt('rqsj_xinwuduan')).set('prompt2', '弃置一张牌并获得装备,锦囊,基本牌各一张').ai = function (card) {
                                    return 8 - get.value(card);
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.gain(game.createCard(get.inpile('equip').randomGet()), 'draw');
                                    player.gain(game.createCard(get.inpile('basic').randomGet()), 'draw');
                                    player.gain(game.createCard(get.inpile('trick').randomGet()), 'draw');
                                    game.log(player, ':铁马冰河,入梦无端!');
                                }
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
                        },
                        rqsj_ganhuai: {
                            usable: 1,
                            audio: 'ext:染柒的世界/audio:2',
                            trigger: {
                                global: 'gainAfter',
                            },
                            filter(event, player) {
                                if (!event.player.isPhaseUsing()) return false;
                                return event.parent.name == 'draw' && event.getParent(2).name != 'rqsj_ganhuai';
                            },
                            content() {
                                trigger.player.draw('nodelay');
                                if (trigger.player != player) {
                                    player.draw();
                                }
                                var list;
                                list = ['只愿往后深秋夜,执灯仗,伴君旁', '心向深山猿,意投林中马', '别君两月杳无音,吃馅饼,红豆心'];
                                if (trigger.player.name1 == 'rqsj_youmaodexianyu' || trigger.player.name2 == 'rqsj_youmaodexianyu') {
                                    list = ['愿借一骑竹马,与你一起,踏碎红尘'];
                                }
                                if (trigger.player.name1 == 'rqsj_ansha' || trigger.player.name2 == 'rqsj_ansha') {
                                    list = ['俺杀喵最近在干什么？'];
                                    var list2 = ['摸鱼', '和柒柒一起摸鱼'];
                                }
                                if (trigger.player.name1 == 'rqsj_huijin' || trigger.player.name2 == 'rqsj_huijin') {
                                    list = ['辉烬贺流年,啊撸啊撸'];
                                }
                                if (trigger.player.name1 == 'rqsj_huanyuxingcheng' || trigger.player.name2 == 'rqsj_huanyuxingcheng') {
                                    list = ['星城哥帮帮我!'];
                                }
                                if (trigger.player.name1 == 'rqsj_zhuaba' || trigger.player.name2 == 'rqsj_zhuaba') {
                                    list = ['爪子哥你又鸽!'];
                                }
                                if (trigger.player.name1 == 'rqsj_shijian' || trigger.player.name2 == 'rqsj_shijian') {
                                    list = ['狂粉诗笺姐姐!'];
                                }
                                if (trigger.player.name1 == 'rqsj_' || trigger.player.name2 == 'rqsj_huanyuxingcheng') {
                                    list = ['星城哥帮帮我!'];
                                }
                                player.chat(list.randomGet());
                                if (trigger.player.name1 == 'rqsj_yanyu' || trigger.player.name2 == 'rqsj_yanyu') {
                                    trigger.player.chat('烟雨你看这样……');
                                }
                                if (trigger.player.name1 == 'rqsj_huijin' || trigger.player.name2 == 'rqsj_huijin') {
                                    trigger.player.chat('诶嘿,浮生晓明月');
                                }
                                if (trigger.player.name1 == 'rqsj_huanyuxingcheng' || trigger.player.name2 == 'rqsj_huanyuxingcheng') {
                                    trigger.player.chat('[猫图]');
                                }
                                if (trigger.player.name1 == 'rqsj_zhuaba' || trigger.player.name2 == 'rqsj_zhuaba') {
                                    trigger.player.chat('咕咕咕');
                                }
                                if (trigger.player.name1 == 'rqsj_shijian' || trigger.player.name2 == 'rqsj_shijian') {
                                    trigger.player.chat('嘘');
                                }
                                if (trigger.player.name1 == 'rqsj_ansha' || trigger.player.name2 == 'ansha') {
                                    trigger.player.chat(list2.randomGet());
                                }
                                if (trigger.player.name1 == 'rqsj_yanyu' || trigger.player.name2 == 'rqsj_yanyu') {
                                    trigger.player.chat('你看着搞');
                                }
                            },
                            ai: {
                                expose: 0.1,
                            },
                        },
                        rqsj_xiebug: {
                            nobracket: true,
                            audio: 'ext:染柒的世界/audio:2',
                            usable: 1,
                            trigger: {
                                player: 'recoverAfter',
                            },
                            filter(event, player) {
                                return player.hp > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('rqsj_xiebug'), '令至多' + get.cnNumber(player.maxHp) + '名角色各摸一张牌', [1, player.maxHp]).set('ai', function (target) {
                                    return get.attitude(_status.event.player, target);
                                });
                                ('step 1');
                                if (result.bool) {
                                    event.targets = result.targets;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (targets && targets.length) {
                                    player.line(targets, 'green');
                                    targets.sortBySeat();
                                    game.asyncDraw(targets);
                                }
                            },
                            ai: {
                                expose: 0.1,
                            },
                        },
                        rqsj_tiaoping: {
                            audio: 'ext:染柒的世界/audio:2',
                            enable: 'phaseUse',
                            filterCard: true,
                            usable: 1,
                            check(card) {
                                return 6 - get.value(card);
                            },
                            filterTarget(card, player, target) {
                                if (player == target) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                target.chooseControl('弃手牌', '失去体力', function (event, player) {
                                    var num1 = target.countCards('h');
                                    if (num1 >= 0) return '弃手牌';
                                    return '失去体力';
                                });
                                ('step 1');
                                if (result.control == '弃手牌') {
                                    target.chooseToDiscard().set('ai', function (card) {
                                        if (card.name == 'tao') return -10;
                                        if (card.name == 'jiu' && _status.event.player.hp == 1) return -10;
                                        return get.unuseful(card) + 2.5 * (5 - get.owner(card).hp);
                                    });
                                } else {
                                    event.goto(3);
                                }
                                ('step 2');
                                if (result.bool == true) {
                                    event.finish();
                                }
                                ('step 3');
                                target.loseHp();
                            },
                            ai: {
                                order: 5,
                                result: {
                                    target(player, target) {
                                        if (target.hp == 1) return -5;
                                        return -2;
                                    },
                                },
                                threaten: 2,
                            },
                        },
                        rqsj_qinyin: {
                            audio: 'ext:染柒的世界/audio:2',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var recover = 0,
                                    lose = 0,
                                    players = game.filterPlayer();
                                for (var i of players) {
                                    if (i.hp < i.maxHp) {
                                        if (get.attitude(player, i) > 0) {
                                            if (i.hp < 2) {
                                                lose--;
                                                recover += 0.5;
                                            }
                                            lose--;
                                            recover++;
                                        } else if (get.attitude(player, i) < 0) {
                                            if (i.hp < 2) {
                                                lose++;
                                                recover -= 0.5;
                                            }
                                            lose++;
                                            recover--;
                                        }
                                    } else {
                                        if (get.attitude(player, i) > 0) {
                                            lose--;
                                        } else if (get.attitude(player, i) < 0) {
                                            lose++;
                                        }
                                    }
                                }
                                var prompt = get.prompt(event.name);
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
                                        target.recover();
                                    } else {
                                        target.loseHp();
                                    }
                                    event.num++;
                                    event.redo();
                                }
                            },
                            ai: {
                                expose: 0.1,
                                threaten: 2,
                            },
                        },
                        rqsj_shuifo: {
                            audio: 'ext:染柒的世界/audio:2',
                            trigger: {
                                player: 'phaseDiscardBefore',
                            },
                            frequent(event, player) {
                                return player.needsToDiscard();
                            },
                            filter(event, player) {
                                return (
                                    player.countUsed(null, true) < player.hp &&
                                    player.getHistory('useCard', function (evt) {
                                        if (evt.targets && evt.targets.length && evt.isPhaseUsing()) {
                                            var targets = evt.targets.slice(0);
                                            while (targets.includes(player)) targets.remove(player);
                                            return targets.length;
                                        }
                                        return false;
                                    }).length <= 1
                                );
                            },
                            content() {
                                player.draw(2);
                                player.addTempSkill('rqsj_shuifo2');
                            },
                        },
                        rqsj_shuifo2: {
                            mod: {
                                maxHandcardBase(player, num) {
                                    return player.maxHp + 2;
                                },
                            },
                        },
                        rqsj_xuxing: {
                            audio: 'ext:染柒的世界/audio:2',
                            usable: 2,
                            enable: 'phaseUse',
                            position: 'he',
                            filterCard: true,
                            selectCard: 1,
                            prompt: '弃置一张牌并摸一张牌',
                            check(card) {
                                return 4 - get.useful(card);
                            },
                            content() {
                                player.draw();
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        rqsj_huantian: {
                            trigger: {
                                player: 'damageBegin4',
                            },
                            filter(event, player) {
                                return player.countCards('h') > 1;
                            },
                            forced: true,
                            cheak(event, player) {
                                if (player.countCards('h', { name: ['tao', 'jiu'] }) > 2) {
                                    return false;
                                } else {
                                    return true;
                                }
                            },
                            content() {
                                'step 0';
                                var num;
                                if (player.countCards('h') > player.hp) {
                                    num = 3;
                                } else {
                                    num = 2;
                                }
                                var next = player.chooseToDiscard('h', num, get.prompt2('rqsj_huantian'));
                                next.set('ai', function (card) {
                                    return 9 - get.value(card);
                                });
                                ('step 1');
                                if (result.bool) {
                                    trigger.cancel();
                                } else {
                                    event.finish();
                                }
                            },
                        },
                        rqsj_badao: {
                            audio: 'ext:染柒的世界/audio:3',
                            forced: true,
                            trigger: {
                                global: 'phaseBegin',
                            },
                            filter(event, player) {
                                return !player.isDisabled(1) && !player.getEquip(1);
                            },
                            content() {
                                'step 0';
                                var goon = player.hp > 0;
                                var next = player.chooseToDiscard(get.prompt('rqsj_badao'), 'he');
                                next.set('ai', function (card) {
                                    if (_status.event.goon) {
                                        return 7 - get.value(card);
                                    }
                                    return 0;
                                });
                                next.set('goon', goon);
                                ('step 1');
                                if (result.bool) {
                                    var card = game.createCard(get.inpile('equip1').randomGet());
                                    player.equip(card);
                                }
                            },
                        },
                        rqsj_chaoyue: {
                            audio: 'ext:染柒的世界/audio:3',
                            usable: 2,
                            trigger: {
                                source: 'damageBegin1',
                            },
                            filter(event, player) {
                                return player.getEquip(1);
                            },
                            content() {
                                var card = player.getEquip(1);
                                if (card) player.discard(card);
                                player.draw(3);
                                if (trigger.player != player && trigger.player.isAlive()) {
                                    trigger.player.useSkill('rqsj_addfeng');
                                }
                            },
                            check(card) {
                                return 10 - get.value(card);
                            },
                            position: 'e',
                            ai: {
                                result: {
                                    target(player, target) {
                                        if (!ui.selected.cards.length) {
                                            if (player.hp < 2) return 0;
                                            if (target.hp >= player.hp) return 0;
                                        }
                                        return get.damageEffect(target, player);
                                    },
                                },
                            },
                            threaten: 1.5,
                        },
                        免疫流血: {
                            forced: true,
                            trigger: {
                                player: 'loseHpBegin',
                            },
                            filter(event, player) {
                                if (event.name == 'loseHp') {
                                    return true;
                                }
                            },
                            content() {
                                trigger.cancel();
                            },
                        },
                        rqsj_cuihui: {
                            shaRelated: true,
                            audio: 'ext:染柒的世界/audio:2',
                            trigger: {
                                source: 'damageSource',
                            },
                            init(player) {
                                player.storage.rqsj_cuihui = false;
                            },
                            filter(event, player) {
                                if (event._notrigger.includes(event.player) || (event.player.isDisabled(2) && event.player.isDisabled(3))) return false;
                                return event.card && event.card.name == 'sha' && event.parent.name == 'sha' && event.player.isAlive() && player.storage.rqsj_cuihui == false;
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) < -5;
                            },
                            content() {
                                trigger.player.disableEquip('equip2');
                                trigger.player.disableEquip('equip3');
                                player.loseMaxHp();
                                player.storage.nrqsj_cuihui = true;
                            },
                        },
                        rqsj_xuenu: {
                            trigger: {
                                global: 'die',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player.isDisabled(2) && event.player.isDisabled(3);
                            },
                            content() {
                                player.storage.nrqsj_cuihui = false;
                                if (player.hp < player.maxHp) {
                                    player.recover();
                                } else {
                                    player.gainMaxHp();
                                }
                            },
                            ai: {
                                threaten: 1.3,
                            },
                        },
                        rqsj_zuolun: {
                            audio: 'ext:染柒的世界/audio:true',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                if (player == target) return false;
                                return target.countCards('h') > 0;
                            },
                            selectTarget: 2,
                            multitarget: true,
                            multiline: true,
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            prepare: 'throw',
                            discard: false,
                            filterCard: true,
                            check(card) {
                                return 6 - get.value(card);
                            },
                            content() {
                                'step 0';
                                if (targets[0].countCards('h') && targets[1].countCards('h')) {
                                    targets[0].chooseToCompare(targets[1]);
                                } else {
                                    event.finish();
                                }
                                ('step 1');
                                if (result.bool) {
                                    targets[1].damage(targets[0]);
                                } else {
                                    targets[0].damage(targets[1]);
                                }
                                player.addMark('rqsj_shuangjiao1');
                                if (player.countMark('rqsj_shuangjiao1') >= 3) {
                                    player.useSkill('rqsj_shuangjiao');
                                }
                            },
                            ai: {
                                expose: 0.3,
                                threaten: 2,
                                order: 9,
                                result: {
                                    target: -1,
                                },
                            },
                        },
                        rqsj_huajinglinghuantou: {
                            audio: 'ext:染柒的世界/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            content() {
                                player.node.avatar.setBackgroundImage('extension/染柒的世界/image/rqsj_huajingling.jpg');
                                player.removeSkill('rqsj_huajinglinghuantou');
                            },
                        },
                        rqsj_huanshubug: {
                            audio: 'rqsj_huanshu',
                            group: ['rqsj_huanshu_sha', 'rqsj_huanshu_shan', 'rqsj_huanshu_wuxie'],
                            subSkill: {
                                wuxie: {
                                    enable: 'chooseToUse',
                                    filterCard: {
                                        suit: 'diamond',
                                    },
                                    viewAs: {
                                        name: 'wuxie',
                                    },
                                    viewAsFilter(player) {
                                        return player.countCards('he', { suit: 'diamond' }) > 0;
                                    },
                                    prompt: '将一张♦️️牌当无懈可击使用',
                                    check(card) {
                                        var tri = _status.event.getTrigger();
                                        if (tri && tri.card && tri.card.name == 'chiling') return -1;
                                        return 8 - get.value(card);
                                    },
                                    threaten: 1.2,
                                    ai: {
                                        order: 3,
                                        basic: {
                                            useful: [6, 4],
                                            value: [6, 4],
                                        },
                                        result: {
                                            player: 1,
                                        },
                                        expose: 0.2,
                                    },
                                },
                                sha: {
                                    audio: 'ext:染柒的世界/audio:2',
                                    enable: ['chooseToUse', 'chooseToRespond'],
                                    filterCard: {
                                        suit: 'diamond',
                                    },
                                    viewAs: {
                                        name: 'sha',
                                    },
                                    viewAsFilter(player) {
                                        return player.countCards('he', { suit: 'diamond' }) > 0;
                                    },
                                    prompt: '将一张♦️️牌当杀使用或打出',
                                    check() {
                                        return 1;
                                    },
                                    ai: {
                                        effect: {
                                            target(card, player, target, current) {
                                                if (get.tag(card, 'respondSha') && current < 0) return 0.6;
                                            },
                                        },
                                        respondSha: true,
                                        skillTagFilter(player) {
                                            if (!player.countCards('he', 'diamond')) return false;
                                        },
                                        order: 3,
                                        useful: -1,
                                        value: -1,
                                        basic: {
                                            useful: [5, 1],
                                            value: [5, 1],
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
                                shan: {
                                    enable: ['chooseToRespond', 'chooseToUse'],
                                    filterCard(card, player) {
                                        return card.suit == 'diamond';
                                    },
                                    viewAs: {
                                        name: 'shan',
                                    },
                                    viewAsFilter(player) {
                                        if (!player.countCards('he', { suit: 'diamond' })) return false;
                                    },
                                    prompt: '将一张♦️️牌当闪使用或打出',
                                    check() {
                                        return 1;
                                    },
                                    ai: {
                                        respondShan: true,
                                        skillTagFilter(player) {
                                            if (!player.countCards('h', { suit: 'diamond' })) return false;
                                        },
                                        effect: {
                                            target(card, player, target, current) {
                                                if (get.tag(card, 'respondShan') && current < 0) return 0.6;
                                            },
                                        },
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
                            },
                        },
                        rqsj_huanshu: {
                            trigger: {
                                player: 'recoverAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.hp > 0;
                            },
                            content() {
                                'step 0';
                                var list = get.gainableSkills();
                                list.remove(player.getSkills());
                                list = list.randomGets(3);
                                event.skillai = function () {
                                    return get.max(list, get.skillRank, 'item');
                                };
                                if (event.isMine()) {
                                    var dialog = ui.create.dialog('forcebutton');
                                    dialog.add('选择获得一项技能直到回合结束');
                                    var clickItem = function () {
                                        _status.event._result = this.link;
                                        dialog.close();
                                        game.resume();
                                    };
                                    for (var i = 0; i < list.length; i++) {
                                        if (lib.translate[list[i] + '_info']) {
                                            var translation = get.translation(list[i]);
                                            if (translation[0] == '新' && translation.length == 3) {
                                                translation = translation.slice(1, 3);
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
                                ('step 1');
                                _status.imchoosing = false;
                                var link = result;
                                player.addTempSkill(link, { player: 'phaseAfter' });
                                player.popup(link);
                                game.log(player, '获得了临时技能', '【' + get.translation(link) + '】');
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (get.type(card, 'trick') == 'trick' && player == target) return [1, 1];
                                    },
                                },
                            },
                        },
                        rqsj_ezhao: {
                            audio: 'ext:染柒的世界/audio:2',
                            trigger: {
                                player: 'drawBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                trigger.bottom = true;
                                ('step 1');
                                player
                                    .chooseTarget(get.prompt('rqsj_ezhao'), function (card, player, target) {
                                        return target != player && !target.hasSkill('rqsj_eyun');
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    });
                                ('step 2');
                                if (result.bool) {
                                    var targets = result.targets;
                                    while (targets.length) {
                                        var target = targets.shift();
                                        target.addTempSkill('rqsj_eyun', { player: 'phaseAfter' });
                                    }
                                }
                            },
                        },
                        rqsj_hansheng: {
                            audio: 'ext:染柒的世界/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard: true,
                            selectCard: 1,
                            prompt: '出牌阶段限一次,你可以令一名有厄运的体力值或手牌数大于你的其他角色流失一点体力.该角色可以使用一张牌.',
                            filterTarget(card, player, target) {
                                if (target.hp <= player.hp && target.countCards('h') <= player.countCards('h')) {
                                    return false;
                                }
                                return target != player && target.hasSkill('rqsj_eyun');
                            },
                            content() {
                                'step 0';
                                target.loseHp();
                                ('step 1');
                                target.chooseToUse();
                            },
                            ai: {
                                order: 7.5,
                                result: {
                                    target: -4,
                                },
                            },
                        },
                        rqsj_chuanyang: {
                            mod: {
                                attackFrom(from, to, distance) {
                                    return distance - 3;
                                },
                            },
                        },
                        rqsj_anlie: {
                            audio: 'ext:染柒的世界/audio:2',
                            trigger: {
                                global: 'phaseJieshuBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player.isAlive() && player.countCards('h') > 0;
                            },
                            content() {
                                player
                                    .chooseToUse(
                                        function (card, player, event) {
                                            if (card.name != 'sha' && card.name != 'juedou' && card.name != 'guohe' && card.name != 'huogong') return false;
                                            return lib.filter.filterCard.apply(this, arguments);
                                        },
                                        '暗猎:是否对' + get.translation(trigger.player) + '使用一张牌？'
                                    )
                                    .set('complexSelect', true)
                                    .set('filterTarget', function (card, player, target) {
                                        if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                                        return lib.filter.targetEnabled.apply(this, arguments);
                                    })
                                    .set('sourcex', trigger.player);
                            },
                        },
                        rqsj_shefu: {
                            audio: 'ext:染柒的世界/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            derivation: ['rqsj_anlie'],
                            filter(event, player) {
                                return !player.hujia && player.hp < player.maxHp;
                            },
                            content() {
                                player.draw();
                                player.turnOver();
                                player.changeHujia();
                                player.addTempSkill('rqsj_anlie', { player: 'phaseUseBegin' });
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (card.name == 'guiyoujie') return [0, 1];
                                    },
                                },
                            },
                        },
                        rqsj_wuran: {
                            trigger: {
                                source: 'damageSource',
                            },
                            content() {
                                'step 0';
                                if (!player.hasSkill('rqsj_fali') || player.countMark('rqsj_fali') < 3) {
                                    player.addSkill('rqsj_fali');
                                    player.addMark('rqsj_fali');
                                }
                                if (trigger.player.group == 'jingling' || trigger.player.group == 'wu') {
                                    trigger.player.changeGroup('guijing');
                                }
                            },
                        },
                        rqsj_faling: {
                            group: ['rqsj_falingmo'],
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.hasSkill('rqsj_fali') && player.countMark('rqsj_fali') > 0;
                            },
                            content() {
                                var num = player.countMark('rqsj_fali');
                                player.draw(num);
                                player.removeMark('rqsj_fali', num);
                            },
                        },
                        rqsj_falingmo: {
                            filter(event, player) {
                                return (
                                    !event.numFixed &&
                                    game.hasPlayer(function (current) {
                                        return current.group == 'guijing';
                                    })
                                );
                            },
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            forced: true,
                            content() {
                                if (
                                    game.countPlayer(function (current) {
                                        return current.group == 'guijing';
                                    }) <= 4
                                ) {
                                    trigger.num =
                                        trigger.num -
                                        1 +
                                        game.countPlayer(function (current) {
                                            return current.group == 'guijing';
                                        });
                                } else {
                                    trigger.num = trigger.num + 3;
                                }
                            },
                            ai: {
                                threaten: 1.3,
                            },
                        },
                        rqsj_lingyun: {
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var num = player.maxHp - player.hp;
                                event.cards = get.cards(4 + num);
                                player.showCards(event.cards);
                                ('step 1');
                                event.cards = event.cards.filter((i) => i.suit == 'club');
                                if (event.cards.length == 0) {
                                    event.finish();
                                } else {
                                    player.$gain2(event.cards);
                                }
                                ('step 2');
                                player.gain(event.cards, 'log');
                            },
                            ai: {
                                result: {
                                    target: 2,
                                },
                            },
                        },
                        rqsj_linghuo: {
                            audio: 'ext:染柒的世界/audio:2',
                            enable: ['chooseToRespond', 'chooseToUse'],
                            filterCard(card, player) {
                                return card.suit == 'club';
                            },
                            viewAs: {
                                name: 'shan',
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('he', { suit: 'club' })) return false;
                            },
                            position: 'he',
                            prompt: '将一张♣️️牌当闪使用或打出',
                            check() {
                                return 1;
                            },
                            ai: {
                                respondShan: true,
                                skillTagFilter(player) {
                                    if (!player.countCards('he', { suit: 'club' })) return false;
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
                        rqsj_mojia: {
                            audio: 'ext:染柒的世界/audio:true',
                            trigger: {
                                player: 'damageBegin4',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.num <= 1) return false;
                                return true;
                            },
                            content() {
                                trigger.num = 1;
                            },
                            ai: {
                                filterDamage: true,
                                skillTagFilter(player, tag, arg) {
                                    if (arg?.player?.hasSkillTag('jueqing', false, player)) return false;
                                },//QQQ
                            },
                        },
                        rqsj_kulou: {
                            mod: {
                                maxHandcard(player, num) {
                                    return 1 + num;
                                },
                            },
                            trigger: {
                                player: 'dying',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var list = [1, 2].randomGet();
                                if (list == 1) {
                                    player.recover();
                                }
                            },
                        },
                        rqsj_anqi: {
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('he', { type: 'equip' }) > 0 && lib.filter.cardEnabled({ name: 'sha' }, player);
                            },
                            usable: 1,
                            filterCard(card, player) {
                                return get.subtype(card) == 'equip1';
                            },
                            position: 'he',
                            check(card) {
                                return 6 - get.equipValue(card);
                            },//QQQ
                            discard: false,
                            prepare: 'throw',
                            delay: false,
                            filterTarget(card, player, target) {
                                return lib.filter.targetEnabled({ name: 'sha' }, player, target);
                            },
                            content() {
                                'step 0';
                                player.addAdditionalSkill('rqsj_anqi', 'unequip');
                                player.useCard({ name: 'sha' }, cards, targets, false).animate = false;
                                player.line(targets, 'fire');
                                ('step 1');
                                player.removeAdditionalSkill('rqsj_anqi');
                            },
                            ai: {
                                order() {
                                    return get.order({ name: 'sha' }) + 0.1;
                                },
                                result: {
                                    target(player, target) {
                                        player.addAdditionalSkill('rqsj_anqi_ai', 'unequip');
                                        var eff = get.effect(target, { name: 'sha' }, player, target);
                                        player.removeAdditionalSkill('rqsj_anqi_ai');
                                        return eff;
                                    },
                                },
                                effect: {
                                    player(card, player) {
                                        if (_status.currentPhase != player) return;
                                        if (get.type(card) == 'equip' && player.countCards('e', { subtype: get.subtype(card) }) && lib.filter.filterCard({ name: 'sha' }, player)) {
                                            return 0;
                                        }
                                    },
                                },
                                threaten: 1.3,
                            },
                        },
                        rqsj_susheng: {
                            trigger: {
                                global: 'dieBefore',
                            },
                            round: 1,
                            forced: true,
                            filter(event, player) {
                                if (get.is.altered('rqsj_susheng')) {
                                    return player.countCards('h', { color: 'red' }) > 0;
                                } else {
                                    return player.countCards('h') > 0;
                                }
                            },
                            content() {
                                'step 0';
                                var att = get.attitude(player, trigger.player);
                                var nh = player.countCards('h');
                                var next;
                                if (get.is.altered('rqsj_susheng')) {
                                    next = player.chooseToDiscard(get.prompt('rqsj_susheng', trigger.player), { color: 'red' });
                                } else {
                                    next = player.chooseToDiscard(get.prompt('rqsj_susheng', trigger.player));
                                }
                                next.ai = function (card) {
                                    if (att > 3 || (att > 1 && nh > 2)) {
                                        return get.unuseful2(card);
                                    }
                                    return 0;
                                };
                                ('step 1');
                                if (result.bool) {
                                    trigger.cancel();
                                    trigger.player.hp = 1;
                                    if (trigger.player.maxHp < 1) trigger.player.maxHp = 1;
                                    trigger.player.update();
                                }
                            },
                            ai: {
                                threaten: 2,
                            },
                            group: ['rqsj_susheng_roundcount'],
                        },
                        rqsj_chuanci: {
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event._notrigger.includes(event.player)) return false;
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                var next = player.discardPlayerCard(trigger.player, 1, get.prompt('rqsj_chuanci', trigger.player));
                                next.filterButton = function (button) {
                                    if (ui.selected.buttons.length) return get.position(button.link) != get.position(ui.selected.buttons[0].link);
                                    return true;
                                };
                                player.draw();
                            },
                            ai: {
                                expose: 0.2,
                            },
                        },
                        wangzi_biyue: {
                            audio: 'ext:染柒的世界/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            content() {
                                player.draw();
                            },
                        },
                        rqsj_mihun: {
                            audio: 'ext:染柒的世界/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return true;
                            },
                            check(card) {
                                return 10 - get.value(card);
                            },
                            filterCard: true,
                            selectCard: 1,
                            position: 'h',
                            discard: false,
                            lose: false,
                            delay: 0,
                            filterTarget(card, player, target) {
                                if (ui.selected.targets.length == 0) {
                                    return player != target;
                                } else {
                                    return lib.filter.filterTarget({ name: 'sha' }, ui.selected.targets[0], target);
                                }
                            },
                            targetprompt: ['交给其一张手牌', '令上一名目标对其使用一张[杀]'],
                            selectTarget: 2,
                            multitarget: true,
                            content() {
                                'step 0';
                                targets[0].gain(cards, player, 'giveAuto');
                                ('step 1');
                                targets[0]
                                    .chooseToUse('迷魂:对' + get.translation(targets[1]) + '使用一张杀或在判定区置入一张乐不思蜀', { name: 'sha' }, function (card, player, target) {
                                        if (target != _status.event.target) return false;
                                        if (!player.canUse('sha', _status.event.target)) return false;
                                        return true;
                                    })
                                    .set('target', targets[1]);
                                ('step 2');
                                if (result.bool) event.finish();
                                else {
                                    if (!targets[0].hasJudge('lebu') && !targets[0].storage._disableJudge) {
                                        targets[0].addJudge(game.createCard('lebu'));
                                    } else {
                                        player.discardPlayerCard(targets[0], 2, 'hej', true, 'visible');
                                    }
                                }
                            },
                            ai: {
                                order: 8,
                                result: {
                                    target(player, target) {
                                        if (ui.selected.targets.length == 0) {
                                            if (ui.selected.cards.length && ui.selected.cards[0].name == 'sha') {
                                                return 0.5;
                                            }
                                            if (target.countCards('h') == 0 && target.countCards('j') > 0) {
                                                return 1;
                                            }
                                            return -1;
                                        } else {
                                            return -1;
                                        }
                                    },
                                },
                                tag: {
                                    gain: 1,
                                    use: 1,
                                    useSha: 1,
                                    loseCard: 1,
                                },
                                expose: 0.4,
                                threaten: 3,
                            },
                        },
                        rqsj_nichang: {
                            forced: true,
                            audio: 'ext:染柒的世界/audio:1',
                            trigger: {
                                player: 'damageEnd',
                            },
                            derivation: ['rqsj_nichanga'],
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.source && event.player.classList.contains('dead') == false && !player.hasSkill('nichanga');
                            },
                            content() {
                                player.addSkill('rqsj_nichanga');
                            },
                        },
                        stone_huayu: {
                            trigger: {
                                source: 'fellow',
                            },
                            forced: true,
                            content() {
                                var target = player.getLeader();
                                if (target.canAddFellow()) {
                                    target.addFellowAuto('huajingling');
                                } else {
                                    player.draw();
                                    target.draw();
                                }
                            },
                        },
                        stone_mogu: {
                            trigger: {
                                source: 'fellow',
                            },
                            forced: true,
                            content() {
                                var target = player.getLeader();
                                if (target.canAddFellow()) {
                                    target.addFellowAuto('moguxianzi');
                                }
                            },
                        },
                        stone_gulong: {
                            audio: 'ext:柒论三国/audio:2',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            filter(event, player) {
                                return player.maxHp > 1;
                            },
                            forced: true,
                            content() {
                                var target = player.getLeader();
                                if (target.canAddFellow()) {
                                    target.addFellowAuto('kulouzhanshi');
                                    player.loseMaxHp();
                                } else {
                                    player.draw();
                                }
                            },
                        },
                        stone_shiguang: {
                            trigger: {
                                source: 'fellow',
                            },
                            forced: true,
                            unique: false,
                            filter(event, player) {
                                return _status.currentPhase == player.getLeader();
                            },
                            content() {
                                var target = player.getLeader();
                                target.actused -= 2;
                                target.updateActCount();
                                player.line(target, 'green');
                            },
                        },
                        rqsj_huopu: {
                            audio: 'ext:染柒的世界/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            position: 'he',
                            filterCard(card, player) {
                                return card.suit == 'heart';
                            },
                            viewAs: {
                                name: 'liuxinghuoyu',
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('he', { suit: 'heart' })) return false;
                            },
                            prompt: '将一张♥️️手牌当作流星火羽使用',
                            check(card) {
                                return 6 - get.value(card);
                            },
                            ai: {
                                threaten: 1.4,
                                order: 9,
                                basic: {
                                    order: 4,
                                    value: 7,
                                    useful: 2,
                                },
                                result: {
                                    target(player, target) {
                                        if (target.hasSkillTag('nofire')) return 0;
                                        if (get.damageEffect(target, player, player) < 0 && get.attitude(player, target) > 0) {
                                            return -2;
                                        }
                                        var nh = target.countCards('he');
                                        if (target == player) nh--;
                                        switch (nh) {
                                            case 0:
                                            case 1:
                                                return -2;
                                            case 2:
                                                return -1.5;
                                            case 3:
                                                return -1;
                                            default:
                                                return -0.7;
                                        }
                                    },
                                },
                                tag: {
                                    damage: 1,
                                    fireDamage: 1,
                                    natureDamage: 1,
                                    discard: 1,
                                    loseCard: 1,
                                    position: 'he',
                                },
                            },
                        },
                        rqsj_qinzhu: {
                            audio: 'ext:染柒的世界/audio:2',
                            trigger: {
                                global: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.source && event.player.classList.contains('dead') == false;
                            },
                            check(event, player) {
                                var att1 = get.attitude(player, event.player);
                                var att2 = get.attitude(player, event.source);
                                return att1 > 0 && att2 <= 0;
                            },
                            content() {
                                'step 0';
                                player.draw();
                                if (trigger.player != player) {
                                    player.chooseCard(1, true, '交给' + get.translation(trigger.player) + '一张牌', 'he', true).set('ai', function (card) {
                                        var evt = _status.event.parent;
                                        if (get.attitude(trigger.player, player) > 2) {
                                            if (card.name == 'jiu') return 12;
                                            if (card.name == 'shan') return 9;
                                        }
                                        return 10 - get.value(card);
                                    });
                                    trigger.player.addTempSkill('rqsj_qinzhu_qi');
                                    trigger.player.addMark('rqsj_qinzhu_qi');
                                } else {
                                    event.finish();
                                }
                                ('step 1');
                                trigger.player.gain(result.cards, player, 'giveAuto');
                            },
                            ai: {
                                expose: 0.3,
                            },
                        },
                        rqsj_qinzhu_qi: {
                            mark: true,
                            marktext: '勤',
                            intro: {
                                content: '任意角色弃牌阶段开始时,弃置#张牌(你已有#个勤主)',
                            },
                            trigger: {
                                global: 'phaseDiscardBegin',
                            },
                            filter(event, player) {
                                if (player.countMark('rqsj_qinzhu_qi') > 0) return true;
                                return false;
                            },
                            forced: true,
                            content() {
                                var num = player.countMark('rqsj_qinzhu_qi');
                                player.chooseToDiscard('he', num, true);
                                player.removeMark('rqsj_qinzhu_qi', num);
                            },
                        },
                        rqsj_xinzuo: {
                            audio: 'ext:染柒的世界/audio:2',
                            enable: 'phaseUse',
                            prompt: '失去两点临时体力上限并摸三张牌',
                            content() {
                                'step 0';
                                player.loseMaxHp(2);
                                player.addTempSkill('rqsj_xinzuo_hui');
                                player.addMark('rqsj_xinzuo_hui', 2);
                                ('step 1');
                                player.draw(3);
                            },
                            ai: {
                                basic: {
                                    order: 1,
                                },
                                result: {
                                    player(player) {
                                        if (player.hp == player.maxHp) return -5;
                                        if (player.maxHp - player.hp > 1) return 3;
                                        if (player.countCards('h') >= player.hp - 1) return -1;
                                        return 1;
                                    },
                                },
                            },
                        },
                        rqsj_xinzuo_hui: {
                            mark: true,
                            marktext: '作',
                            intro: {
                                content: '任意角色结束阶段,回复#点体力上限',
                            },
                            trigger: {
                                global: 'phaseEnd',
                            },
                            forced: true,
                            content() {
                                var num = player.countMark('rqsj_xinzuo_hui');
                                player.gainMaxHp(num);
                                player.removeMark('rqsj_xinzuo_hui', num);
                            },
                        },
                        rqsj_xingmao: {
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.removeSkill('xingmao_yingzi');
                                player.removeSkill('xingmao_yinghun');
                                player.removeSkill('xingmao_jiang');
                                ('step 1');
                                var list = [];
                                if (!player.hasSkill('xingmao_yingzi')) {
                                    list.push('xingmao_yingzi');
                                }
                                if (!player.hasSkill('xingmao_yinghun')) {
                                    list.push('xingmao_yinghun');
                                }
                                if (!player.hasSkill('xingmao_jiang')) {
                                    list.push('xingmao_jiang');
                                }
                                if (list.length) {
                                    player.addSkill(list.randomGet());
                                }
                            },
                        },
                        xingmao_yingzi: {
                            audio: 'ext:染柒的世界/audio:2',
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
                                threaten: 1.3,
                            },
                        },
                        xingmao_yinghun: {
                            audio: 'ext:染柒的世界/audio:2',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                return player.getDamagedHp() > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('gzyinghun'), function (card, player, target) {
                                        return player != target;
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
                                    event.num = player.getDamagedHp();
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
                        xingmao_jiang: {
                            shaRelated: true,
                            audio: 'ext:染柒的世界/audio:2',
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
                        rqsj_nichanga: {
                            audio: 'ext:染柒的世界/audio:1',
                            trigger: {
                                player: 'damageBefore',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.source && event.player.classList.contains('dead') == false;
                            },
                            forced: true,
                            content() {
                                trigger.cancel();
                                player.removeSkill('rqsj_nichanga');
                            },
                            ai: {
                                expose: 0.2,
                                threaten: 1.5,
                            },
                        },
                        rqsj_zhenyu: {
                            audio: 'ext:染柒的世界/audio:2',
                            trigger: {
                                global: 'phaseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.getStat('kill') > 0;
                            },
                            content() {
                                player.draw(2);
                                player.randomDiscard('hej', true);
                            },
                        },
                        rqsj_qiximofang: {
                            nobracket: true,
                            trigger: {
                                global: 'useSkillAfter',
                            },
                            round: 1,
                            filter(event, player) {
                                if (lib.filter.skillDisabled(event.skill)) return false;
                                if (!game.expandSkills(event.player.getStockSkills()).includes(event.skill)) return false;
                                return _status.currentPhase == event.player;
                            },
                            content() {
                                player.addTempSkill(trigger.skill, { player: 'phaseAfter' });
                            },
                            group: ['rqsj_qiximofang_roundcount'],
                        },
                        rqsj_beiyong: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('rqsj_eyunchanshen'), [1, 5], true, function (card, player, target) {
                                        return target != player && !target.hasSkill('rqsj_eyun');
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var targets = result.targets;
                                    var num = 0;
                                    for (var i = 0; i < targets.length; i++) {
                                        num += get.sgn(get.effect(targets[i], { name: 'wanjian' }, player, player));
                                    }
                                    event.targets = targets;
                                    player.chooseToDiscard(get.prompt('shuijian')).set('ai', function (card) {
                                        if (num >= 3) return 10 - get.value(card);
                                        if (num >= 2) return 9 - get.value(card);
                                        if (num >= 1) return 7 - get.value(card);
                                        return 0;
                                    });
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    for (var i = 0; i < event.targets.length; i++) {
                                        event.targets[i].addExpose(0.1);
                                    }
                                    player.useCard({ name: 'wanjian' }, event.targets);
                                }
                            },
                            ai: {
                                threaten: 1.6,
                            },
                        },
                        rqsj_jiangzhou: {
                            enable: 'phaseUse',
                            round: 2,
                            audio: 'ext:染柒的世界/audio:2',
                            filter(event, player) {
                                return true;
                            },
                            check(card) {
                                return 6 - get.value(card);
                            },
                            filterCard: true,
                            selectCard: 1,
                            position: 'h',
                            filterTarget(card, player, target) {
                                if (target.storage._disableJudge) {
                                    return false;
                                } else {
                                    return true;
                                }
                            },
                            content() {
                                'step 0';
                                var list = [];
                                for (var i in lib.card) {
                                    if (lib.card[i].mode && lib.card[i].mode.includes(lib.config.mode) == false) continue;
                                    if (lib.card[i].vanish) continue;
                                    if (lib.card[i].type == 'delay') list.push([cards[0].suit, cards[0].number, i]);
                                }
                                var dialog = ui.create.dialog('诅咒', [list, 'vcard']);
                                var bing = target.countCards('h') <= 1;
                                player.chooseButton(dialog, true, function (button) {
                                    if (get.effect(target, { name: button.link[2] }, player, player) > 0) {
                                        if (button.link[2] == 'bingliang') {
                                            if (bing) return 2;
                                            return 0.7;
                                        }
                                        if (button.link[2] == 'lebu') {
                                            return 1;
                                        }
                                        if (button.link[2] == 'caomu') {
                                            return 0.3;
                                        }
                                        return 0.2;
                                    }
                                    return 0;
                                }).filterButton = function (button) {
                                    return !target.hasJudge(button.link[2]);
                                };
                                ('step 1');
                                var card = game.createCard(result.links[0][2]);
                                event.judgecard = card;
                                target.$draw(card);
                                ('step 2');
                                target.addJudge(event.judgecard);
                            },
                            ai: {
                                result: {
                                    player: 1,
                                    target: -1,
                                },
                                order: 6,
                            },
                            selectTarget: 1,
                            group: ['rqsj_jiangzhou_roundcount'],
                        },
                        rqsj_guijia: {
                            audio: 'ext:染柒的世界/audio:2',
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.isMinHp(true);
                            },
                            check() {
                                return false;
                            },
                            content() {
                                trigger.num--;
                            },
                            ai: {
                                threaten(player, target) {
                                    return -2.6;
                                },
                            },
                        },
                        rqsj_qufeng: {
                            enable: 'phaseUse',
                            round: 2,
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('hej') > 0;
                            },
                            content() {
                                'step 0';
                                var card = target.getCards('hej').randomGet();
                                event.card = card;
                                player.gain(card, target, 'giveAuto', 'bySelf');
                                target.draw();
                                ('step 1');
                                if (Array.isArray(result) && get.color(card) == get.color(result[0])) {
                                    player.draw();
                                    player.addSkill('rqsj_fali');
                                    player.addMark('rqsj_fali', 2);
                                }
                                player.addSkill('rqsj_fali');
                                player.addMark('rqsj_fali', 1);
                            },
                            ai: {
                                order: 7,
                                result: {
                                    target: 0.5,
                                },
                            },
                            group: ['rqsj_qufeng_roundcount'],
                        },
                        rqsj_guiying: {
                            audio: 'ext:染柒的世界/audio:2',
                            trigger: {
                                player: 'phaseDiscardBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.countCards('h') < player.hp) {
                                    return true;
                                } else {
                                    return false;
                                }
                            },
                            content() {
                                var num = player.hp - player.countCards('h');
                                player.draw(num);
                            },
                        },
                        rqsj_jili: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            filter(event, player) {
                                return player.countCards('he') > 0;
                            },
                            forced: true,
                            cheak(event, player) {
                                if (player.countCards('he', { name: ['tao', 'jiu'] }) > 0) {
                                    return false;
                                } else {
                                    return true;
                                }
                            },
                            content() {
                                'step 0';
                                var next = player.chooseToDiscard('he', num, get.prompt2('rqsj_jili'));
                                next.set('ai', function (card) {
                                    return 7 - get.value(card);
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.draw();
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (Array.isArray(result) && result.length) {
                                    var gained = result[0];
                                    if (lib.filter.cardEnabled(gained, target)) {
                                        var next = player.chooseToUse();
                                        next.filterCard = function (card) {
                                            return card == gained;
                                        };
                                        next.prompt = '是否使用' + get.translation(gained) + '？';
                                    } else {
                                        event.finish();
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (result.bool) {
                                    player.addSkill('rqsj_fali');
                                    player.addMark('rqsj_fali', 2);
                                }
                            },
                            ai: {
                                threaten: 1.6,
                            },
                        },
                        rqsj_banluren_lingyu: {
                            audio: 'ext:染柒的世界/audio:2',
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return player.countMark('rqsj_fali') > 2 && target.hp < target.maxHp;
                            },
                            content() {
                                player.removeMark('rqsj_fali', 3);
                                target.recover();
                                target.draw();
                            },
                            ai: {
                                order: 4.5,
                                result: {
                                    target: 1,
                                },
                            },
                        },
                        rqsj_雄才: {
                            trigger: {
                                player: 'phaseAfter',
                            },
                            forced: true,
                            init(player) {
                                player.storage.xiongcai = [];
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
                                for (var i of players) {
                                    list2.add(i.name);
                                    list2.add(i.name1);
                                    list2.add(i.name2);
                                }
                                for (var i in lib.character) {
                                    if (lib.character[i][1] != 'wei') continue;
                                    if (lib.character[i][4].includes('boss')) continue;
                                    if (lib.character[i][4].includes('minskin')) continue;
                                    if (player.storage.xiongcai.includes(i)) continue;
                                    if (list2.includes(i)) continue;
                                    list.push(i);
                                }
                                var name = list.randomGet();
                                player.storage.xiongcai.push(name);
                                player.markSkill('xiongcai');
                                var skills = lib.character[name][3];
                                for (var i = 0; i < skills.length; i++) {
                                    player.addSkill(skills[i]);
                                }
                                event.dialog = ui.create.dialog('<div class="text center">' + get.translation(player) + '发动了【雄才】', [[name], 'character']);
                                ('step 2');
                                event.dialog.close();
                            },
                        },
                        rqsj_lieguo: {
                            trigger: {
                                source: 'damageSource',
                            },
                            filter(event, player) {
                                return _status.currentPhase != player;
                            },
                            content() {
                                'step 0';
                                player.recover();
                                player.draw(2);
                            },
                        },
                        rqsj_jiyu: {
                            audio: 'ext:染柒的世界/audio:2',
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            forced: true,
                            filter(event, player) {
                                return !event.numFixed && event.num > 0;
                            },
                            content() {
                                trigger.num--;
                            },
                            mod: {
                                attackFrom(from, to, distance) {
                                    return distance - 2;
                                },
                            },
                        },
                        rqsj_longyin: {
                            audio: 'ext:染柒的世界/audio:2',
                            trigger: {
                                player: 'loseAfter',
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.countCards('h')) return false;
                                var evt = event.getl(player);
                                return evt && evt.player == player && evt.hs && evt.hs.length;
                            },
                            content() {
                                if (player.hp > 1) {
                                    player.loseHp(1);
                                }
                                var num = player.hp;
                                player.draw(num);
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
                        },
                        rqsj_tongyu: {
                            audio: 'ext:染柒的世界/audio:2',
                            trigger: {
                                source: 'damageSource',
                            },
                            usable: 1,
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('rqsj_tongyu'), function (card, player, target) {
                                        return !target.hujia;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var targets = result.targets;
                                    while (targets.length) {
                                        var target = targets.shift();
                                        target.changeHujia();
                                    }
                                }
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                            },
                        },
                        rqsj_tongyu1: {
                            content() {
                                'step 0';
                                var next = player.chooseToDiscard('he', get.prompt2('rqsj_tongyu'));
                                var check = lib.skill.beige.checkx(trigger, player);
                                next.set('ai', function (card) {
                                    if (_status.event.goon) return 8 - get.value(card);
                                    return 0;
                                });
                                next.set('goon', check);
                                next.setHiddenSkill('rqsj_tongyu1');
                                ('step 1');
                                if (result.bool) {
                                    player.changeHujia();
                                } else {
                                    event.finish();
                                }
                            },
                        },
                        rqsj_zhengdui: {
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                return player.hujia > 0;
                            },
                            check(event, player) {
                                return player.hujia > 1 && player.hp > 1;
                            },
                            content() {
                                var num = player.hujia;
                                player.changeHujia(-num);
                                player.draw(num + 1);
                            },
                        },
                        rqsj_cuilian: {
                            trigger: {
                                global: 'dying',
                            },
                            audio: 'ext:染柒的世界/audio:2',
                            filter(event, player) {
                                return true;
                            },
                            forced: true,
                            content() {
                                player.draw();
                                player.addSkill('rqsj_fali');
                                player.addMark('rqsj_fali', 1);
                            },
                        },
                        rqsj_wuneng: {
                            audio: 'ext:染柒的世界/audio:2',
                            mod: {
                                maxHandcard(player, num) {
                                    return num + player.maxHp;
                                },
                            },
                            trigger: {
                                global: 'gameDrawAfter',
                                player: 'enterGame',
                            },
                            forced: true,
                            content() {
                                player.draw(player.maxHp);
                            },
                        },
                        rqsj_yonglang: {
                            audio: 'ext:染柒的世界/audio:2',
                            trigger: {
                                player: ['useCardAfter', 'respond'],
                            },
                            filter(event, player) {
                                if (event.card.suit == 'diamond') {
                                    return true;
                                }
                                return false;
                            },
                            forced: true,
                            content() {
                                if (!player.hasSkill('rqsj_yonglang1')) {
                                    player.addSkill('rqsj_yonglang1');
                                }
                                player.addMark('rqsj_yonglang1');
                                var num = player.countMark('rqsj_yonglang1');
                                player.draw(num);
                            },
                        },
                        rqsj_yonglang1: {
                            mark: true,
                            marktext: '浪',
                            intro: {
                                content: '本回合已发动#次咏浪',
                            },
                            trigger: {
                                global: 'phaseJieshuBegin',
                            },
                            filter(event, player) {
                                return true;
                            },
                            forced: true,
                            content() {
                                if (player.countMark('rqsj_yonglang1') > 0) {
                                    player.removeMark('rqsj_yonglang1', 1);
                                }
                            },
                        },
                        rqsj_zhongdu: {
                            mark: true,
                            marktext: '毒',
                            intro: {
                                content: '弃牌阶段开始时,摸一张毒素',
                            },
                            trigger: {
                                player: 'phaseDiscardBegin',
                            },
                            forced: true,
                            content() {
                                player.gain(game.createCard('dus'), 'gain2');
                                player.removeSkill('rqsj_zhongdu');
                            },
                        },
                        rqsj_shoujian: {
                            mod: {
                                maxHandcard(player, num) {
                                    return num--;
                                },
                            },
                        },
                        rqsj_songshi: {
                            audio: 'ext:染柒的世界/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            usable: 10,
                            forced: true,
                            filter(event, player) {
                                if (!event.targets || !event.targets.length || event.parent.triggeredTargets3.length > 1 || !event.isPhaseUsing(player)) return false;
                                var evt = player.getLastUsed(1);
                                if (!evt || !evt.targets || !evt.targets.length || !evt.isPhaseUsing(player)) return false;
                                for (var i = 0; i < event.targets.length; i++) {
                                    if (evt.targets.includes(event.targets[i])) return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                player.draw();
                                if (_status.currentPhase == player) {
                                    player.addTempSkill('rqsj_shoujian2');
                                }
                            },
                            mod: {
                                aiOrder(player, card, num) {
                                    if (player.isPhaseUsing() && (!player.getStat('triggerSkill').xinfu_lianpian || !player.getStat('triggerSkill').xinfu_lianpian < 3)) {
                                        var evt = player.getLastUsed();
                                        if (
                                            evt &&
                                            evt.targets &&
                                            evt.targets.length &&
                                            evt.isPhaseUsing(player) &&
                                            game.hasPlayer(function (current) {
                                                return evt.targets.includes(current) && player.canUse(card, current) && get.effect(current, card, player, player) > 0;
                                            })
                                        ) {
                                            return num + 10;
                                        }
                                    }
                                },
                            },
                            ai: {
                                effect: {
                                    player(card, player, target) {
                                        var evt = player.getLastUsed();
                                        if (evt && evt.targets.includes(target) && (!player.getStat('triggerSkill').xinfu_lianpian || !player.getStat('triggerSkill').xinfu_lianpian < 3) && player.isPhaseUsing(player)) return [1.5, 0];
                                    },
                                },
                            },
                        },
                        rqsj_shoujian2: {
                            audio: 'ext:染柒的世界/audio:2',
                            mod: {
                                maxHandcard(player, num) {
                                    return num - 2;
                                },
                            },
                        },
                        rqsj_youyi: {
                            trigger: {
                                global: 'phaseEnd',
                            },
                            filter(event, player) {
                                if (player.countCards('h')) return false;
                                return true;
                            },
                            content() {
                                var list = [0, 1, 2].randomGet();
                                if (list == 0) {
                                    player.changeHujia();
                                } else {
                                    player.draw(list);
                                }
                            },
                        },
                        rqsj_shou: {},
                        rqsj_remiyin: {
                            audio: 'ext:染柒的世界/audio:2',
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'shan';
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt2('rqsj_remiyin'), function (card, player, target) {
                                    return target != player;
                                }).ai = function (target) {
                                    if (target.hasSkill('hongyan')) return 0;
                                    return get.damageEffect(target, _status.event.player, _status.event.player, 'thunder');
                                };
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    event.target.addSkill('rqsj_xuanyun');
                                    var hs = event.target.getCards('he');
                                    if (hs.length) {
                                        event.target.discard(hs.randomGet());
                                    }
                                } else {
                                    event.finish();
                                }
                            },
                            ai: {
                                useShan: true,
                            },
                        },
                        rqsj_duanzui: {
                            audio: 'ext:染柒的世界/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && !event.parent.directHit.includes(event.target);
                            },
                            logTarget: 'target',
                            content() {
                                var num1 = player.countCards('h');
                                var num2 = trigger.target.countCards('h');
                                var num3 = player.hp;
                                var num4 = trigger.target.hp;
                                var id = trigger.target.playerid;
                                var map = trigger.parent.customArgs;
                                if (!map[id]) map[id] = {};
                                var num = 0;
                                if (num1 <= num2) {
                                    num++;
                                }
                                if (num3 <= num4) {
                                    num++;
                                }
                                if (typeof map[id].shanRequired == 'number') {
                                    map[id].shanRequired += num;
                                } else {
                                    map[id].shanRequired = 1 + num;
                                }
                            },
                            ai: {
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    if (arg && arg.card.name != 'sha' || arg.target.countCards('h', 'shan') > 1) return false;
                                },
                            },
                        },
                        rqsj_lingdiebansheng: {
                            audio: 'ext:染柒的世界/audio:2',
                            trigger: {
                                global: 'gameDrawAfter',
                                player: 'enterGame',
                            },
                            filter(event, player) {
                                return lib.config.extension_染柒的世界_jinglingwangziup == true;
                            },
                            forced: true,
                            content() {
                                player.loseMaxHp();
                                player.addMark('wangzi_lingdie', 3);
                            },
                        },
                        rqsj_yaohui: {
                            audio: 'ext:染柒的世界/audio:2',
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            forced: true,
                            filter(event, player) {
                                return !event.numFixed;
                            },
                            content() {
                                player.gain(game.createCard('rqsj_xingchen'), 'gain2');
                            },
                            ai: {
                                threaten: 1.3,
                            },
                        },
                        rqsj_xingmang: {
                            audio: 'ext:染柒的世界/audio:2',
                            mark: true,
                            marktext: '星',
                            intro: {
                                content: '你已使用#张基本牌,使用三张时获得一个星尘',
                            },
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.type(event.card) == 'basic';
                            },
                            content() {
                                player.addMark('rqsj_xingmang');
                                if (player.countMark('rqsj_xingmang') >= 3) {
                                    player.removeMark('rqsj_xingmang', 3);
                                    player.gain(game.createCard('rqsj_xingchen'), 'gain2');
                                }
                            },
                            ai: {
                                threaten: 1.4,
                            },
                        },
                        rqsj_xingyou: {
                            trigger: {
                                player: 'dying',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countMark('rqsj_yongqi') > 1;
                            },
                            content() {
                                'step 0';
                                if (player.countMark('rqsj_yongqi') > 1) {
                                    player.removeMark('rqsj_yongqi', 2);
                                    player.recover();
                                    player.draw();
                                }
                                var num = player.countMark('rqsj_yongqi');
                                if (num > 2) event.redo();
                            },
                        },
                        rqsj_dianji: {
                            audio: 'ext:染柒的世界/audio:2',
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.type(event.card) == 'trick';
                            },
                            content() {
                                player.draw();
                                player.addSkill('rqsj_fali');
                                player.addMark('rqsj_fali');
                            },
                            ai: {
                                threaten: 1.4,
                                noautowuxie: true,
                            },
                        },
                        rqsj_jilei: {
                            audio: 'ext:染柒的世界/audio:2',
                            trigger: {
                                source: 'damageAfter',
                            },
                            filter(event, player) {
                                if (event.nature == 'thunder' && event.source.countMark('rqsj_fali') > 1) return true;
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('rqsj_jilei'), function (card, player, target) {
                                    return get.distance(trigger.player, target) <= 1 && trigger.player != target;
                                }).ai = function (target) {
                                    return get.damageEffect(target, player, player, 'thunder') + 0.1;
                                };
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    event.target.damage('thunder');
                                    player.removeMark('rqsj_fali', 2);
                                    trigger.player.line(event.target, 'thunder');
                                } else {
                                    event.finish();
                                }
                            },
                        },
                        rqsj_leizhan: {
                            audio: 'ext:染柒的世界/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return true;
                            },
                            prompt: '出牌阶段限一次,你可以消耗三点法力对一名其他角色造成一点雷电伤害.',
                            filter(card, player, target) {
                                return target != player && player.countMark('rqsj_fali') > 2;
                            },
                            content() {
                                'step 0';
                                target.damage('thunder');
                                player.removeMark('rqsj_fali', 3);
                            },
                            ai: {
                                order: 1.5,
                                result: {
                                    target: -4,
                                },
                            },
                        },
                        rqsj_xuanyun: {
                            mark: true,
                            marktext: '晕',
                            intro: {
                                content: '当你受到伤害后,你须随机弃置一张牌,并有55%概率移除该效果.',
                            },
                            audio: 'ext:染柒的世界/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return true;
                            },
                            forced: true,
                            logTarget: 'source',
                            content() {
                                var hs = player.getCards('he');
                                if (hs.length) {
                                    player.discard(hs.randomGet());
                                }
                                var list = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 4, 5, 6, 7, 8, 9, 4].randomGet();
                                if (list == 1) {
                                    player.removeSkill('rqsj_xuanyun');
                                }
                            },
                        },
                        rqsj_jiyan: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.nature == 'fire' && event.notLink();
                            },
                            content() {
                                trigger.num++;
                            },
                        },
                        rqsj_dus: {
                            trigger: {
                                player: ['useCardAfter', 'respondAfter', 'discardAfter'],
                            },
                            popup: false,
                            forced: true,
                            filter(event, player) {
                                if (player.hasSkillTag('nodu')) return false;
                                if (event.cards) {
                                    if (Array.isArray(event.cards)) for (var i of event.cards) {
                                        if (i.name == 'dus' && i.original != 'j') return true;
                                    }
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                var num = 0;
                                if (Array.isArray(trigger.cards)) for (var i of trigger.cards) {
                                    if (i.name == 'dus' && i.original != 'j') num++;
                                }
                                player.popup('毒素', 'wood');
                                player.loseHp(num);
                            },
                        },
                        rqsj_addfeng: {
                            content() {
                                'step 0';
                                if (player.hasSkill('rqsj_feng')) {
                                    event.goto(2);
                                }
                                if (player.hasSkill('rqsj_huo')) {
                                    event.goto(3);
                                }
                                if (player.hasSkill('rqsj_tu')) {
                                    event.goto(5);
                                }
                                if (player.hasSkill('rqsj_shui')) {
                                    event.goto(6);
                                }
                                ('step 1');
                                player.addSkill('rqsj_feng');
                                event.finish();
                                ('step 2');
                                player.removeSkill('rqsj_feng');
                                player.randomDiscard('he', 2, false);
                                event.finish();
                                ('step 3');
                                player.removeSkill('rqsj_huo');
                                player.judge(function (card) {
                                    var suit = card.suit;
                                    if (suit == 'spade') return -4;
                                    if (suit == 'club') return -2;
                                    return 0;
                                }).judge2 = function (result) {
                                    return result.bool == false ? true : false;
                                };
                                ('step 4');
                                if (result.suit == 'club') {
                                    player.damage('thunder', 'nosource');
                                } else if (result.suit == 'spade') {
                                    player.damage(2, 'thunder', 'nosource');
                                }
                                event.finish();
                                ('step 5');
                                player.removeSkill('rqsj_tu');
                                if (!player.hasJudge('bingliang') && !player.storage._disableJudge) {
                                    player.addJudge(game.createCard('bingliang'));
                                }
                                if (!player.hasJudge('fulei') && !player.storage._disableJudge) {
                                    player.addJudge(game.createCard('fulei'));
                                }
                                event.finish();
                                ('step 6');
                                player.removeSkill('rqsj_shui');
                                var targets = game.filterPlayer(function (current) {
                                    return get.distance(player, current) <= 1 && player != current;
                                });
                                player.link();
                                targets.forEach(function (current) {
                                    current.link(true);
                                });
                                event.finish();
                            },
                        },
                        rqsj_addhuo: {
                            content() {
                                'step 0';
                                if (player.hasSkill('rqsj_huo')) {
                                    event.goto(2);
                                }
                                if (player.hasSkill('rqsj_feng')) {
                                    event.goto(3);
                                }
                                if (player.hasSkill('rqsj_tu')) {
                                    event.goto(5);
                                }
                                if (player.hasSkill('rqsj_shui')) {
                                    event.goto(6);
                                }
                                ('step 1');
                                player.addSkill('rqsj_huo');
                                event.finish();
                                ('step 2');
                                player.removeSkill('rqsj_huo');
                                player.damage(1, 'fire', 'nosource');
                                var num = [1, 1, 1, 0, 0, 0, 0, 0, 0, 0].randomGet();
                                if (num == 1) {
                                    player.damage(1, 'fire', 'nosource');
                                }
                                event.finish();
                                ('step 3');
                                player.removeSkill('rqsj_feng');
                                player.judge(function (card) {
                                    var suit = card.suit;
                                    if (suit == 'spade') return -4;
                                    if (suit == 'club') return -2;
                                    return 0;
                                }).judge2 = function (result) {
                                    player;
                                    return result.bool == false ? true : false;
                                };
                                ('step 4');
                                if (result.suit == 'club') {
                                    player.damage('thunder', 'nosource');
                                } else if (result.suit == 'spade') {
                                    player.damage(2, 'thunder', 'nosource');
                                }
                                event.finish();
                                ('step 5');
                                player.removeSkill('rqsj_tu');
                                player.addTempSkill('rqsj_ranshao');
                                player.addMark('rqsj_ranshao');
                                event.finish();
                                ('step 6');
                                player.removeSkill('rqsj_shui');
                                if (player.hasSkill('rqsj_fali')) {
                                    var num1 = player.countMark('rqsj_fali');
                                    player.removeMark('rqsj_fali', num1);
                                }
                                if (player.hasSkill('rqsj_yongqi')) {
                                    var num2 = player.countMark('rqsj_yongqi');
                                    player.removeMark('rqsj_yongqi', num2);
                                }
                                if (!player.hasSkill('fengyin')) {
                                    player.addTempSkill('fengyin');
                                }
                                event.finish();
                            },
                        },
                        rqsj_addshui: {
                            content() {
                                'step 0';
                                if (player.hasSkill('rqsj_feng')) {
                                    event.goto(5);
                                }
                                if (player.hasSkill('rqsj_huo')) {
                                    event.goto(3);
                                }
                                if (player.hasSkill('rqsj_tu')) {
                                    event.goto(4);
                                }
                                if (player.hasSkill('rqsj_shui')) {
                                    event.goto(2);
                                }
                                ('step 1');
                                player.addSkill('rqsj_shui');
                                event.finish();
                                ('step 2');
                                player.removeSkill('rqsj_shui');
                                player.turnOver();
                                event.finish();
                                ('step 3');
                                player.removeSkill('rqsj_huo');
                                if (player.hasSkill('rqsj_fali')) {
                                    var num1 = player.countMark('rqsj_fali');
                                    player.removeMark('rqsj_fali', num1);
                                }
                                if (player.hasSkill('rqsj_yongqi')) {
                                    var num2 = player.countMark('rqsj_yongqi');
                                    player.removeMark('rqsj_yongqi', num2);
                                }
                                if (!player.hasSkill('fengyin')) {
                                    player.addTempSkill('fengyin');
                                }
                                event.finish();
                                ('step 4');
                                player.removeSkill('rqsj_tu');
                                player.addSkill('rqsj_zhongdu');
                                player.addSkill('rqsj_shoujian1');
                                event.finish();
                                ('step 5');
                                player.removeSkill('rqsj_feng');
                                var targets = game.filterPlayer(function (current) {
                                    return get.distance(player, current) <= 1 && player != current;
                                });
                                player.link();
                                targets.forEach(function (current) {
                                    current.link(true);
                                });
                                event.finish();
                            },
                        },
                        rqsj_addtu: {
                            content() {
                                'step 0';
                                if (player.hasSkill('rqsj_feng')) {
                                    event.goto(4);
                                }
                                if (player.hasSkill('rqsj_huo')) {
                                    event.goto(3);
                                }
                                if (player.hasSkill('rqsj_tu')) {
                                    event.goto(2);
                                }
                                if (player.hasSkill('rqsj_shui')) {
                                    event.goto(5);
                                }
                                ('step 1');
                                player.addSkill('rqsj_tu');
                                event.finish();
                                ('step 2');
                                player.removeSkill('rqsj_tu');
                                player.changeHujia();
                                event.finish();
                                ('step 3');
                                player.removeSkill('rqsj_huo');
                                player.addTempSkill('rqsj_ranshao');
                                player.addMark('rqsj_ranshao');
                                event.finish();
                                ('step 4');
                                player.removeSkill('rqsj_feng');
                                if (!player.hasJudge('bingliang') && !player.storage._disableJudge) {
                                    player.addJudge(game.createCard('bingliang'));
                                }
                                if (!player.hasJudge('fulei') && !player.storage._disableJudge) {
                                    player.addJudge(game.createCard('fulei'));
                                }
                                event.finish();
                                ('step 5');
                                player.removeSkill('rqsj_shui');
                                player.addSkill('rqsj_zhongdu');
                                player.addSkill('rqsj_shoujian1');
                                event.finish();
                            },
                        },
                        rqsj_feng: {
                            mark: true,
                            marktext: '风',
                            intro: {
                                content: '你已被风元素附着<br>元素反应:<li>风+风  随机弃两张<li>风+火 雷击判定(梅1黑2)<li>风+水 连环附近<li>风+土 判定区置入兵粮和浮雷',
                            },
                        },
                        rqsj_huo: {
                            mark: true,
                            marktext: '火',
                            intro: {
                                content: '你已被火元素附着<br>元素反应:<li>风+火 雷击判定(梅1黑2)<li>火+火 受到火焰伤害并有30%重复<li>火+水 去除法力及勇气并使非锁定技失效直到回合结束<li>火+土 燃烧',
                            },
                        },
                        rqsj_shui: {
                            mark: true,
                            marktext: '水',
                            intro: {
                                content: '你已被水元素附着<br>元素反应:<li>风+水 连环附近<li>火+水 去除法力及勇气并使非锁定技失效直到回合结束<li>水+水 翻面<li>水+土 中毒+手减1',
                            },
                        },
                        rqsj_tu: {
                            mark: true,
                            marktext: '土',
                            intro: {
                                content: '你已被土元素附着<br>元素反应:<li>风+土 判定区置入兵粮和浮雷<li>火+土 燃烧<li>水+土 中毒+手减1<li>土+土 护甲1',
                            },
                        },
                        rqsj_yuansu: {},
                        nianlong_skill: {
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.hasSkill('rqsj_shui');
                            },
                            content() {
                                player.removeSkill('rqsj_shui');
                                player.useSkill('rqsj_addtu');
                            },
                        },
                        rqsj_sksn: {
                            nobracket: true,
                        },
                        rqsj_xurui: {
                            audio: 'ext:染柒的世界/audio:2',
                            group: 'rqsj_xurui_mark',
                            trigger: {
                                player: ['damageEnd', 'phaseJieshuBegin'],
                            },
                            _priority: 16,
                            filter(event, player) {
                                if (player.countCards('h') == 0) return false;
                                if (event.name == 'damage' && event.source && event.source.countMark('rqsj_xurui_mark') == 0) return true;
                                if (event.name == 'phaseJieshu')
                                    return game.countPlayer(function (current) {
                                        return current.countMark('rqsj_xurui_mark') == 0;
                                    });
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (trigger.name == 'phaseJieshu') {
                                    player
                                        .chooseTarget(get.prompt('rqsj_xurui'), '选择一名角色令其获得‘锐’', function (card, player, target) {
                                            return target.countMark('rqsj_xurui_mark') == 0;
                                        })
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            var att0 = get.attitude(player, target);
                                            var att1 = get.attitude(player, target.next);
                                            var att2 = get.attitude(player, target.previous);
                                            if (att0 > 0 && (att1 < 0 || att2 < 0)) {
                                                if (target == player) return Infinity;
                                                return target.hp + 9;
                                            }
                                            if (att0 < 0 || att1 < 0 || att2 < 0) {
                                                if (target == player) return Infinity;
                                                return target.hp + 5;
                                            }
                                            return target.hp;
                                        });
                                } else event.goto(3);
                                ('step 1');
                                if (result.bool) {
                                    player.chooseToDiscard('h', get.prompt('rqsj_xurui'), '弃置1张手牌', true).ai = function (card) {
                                        if (card.name == 'sha') return 10;
                                        return 7 - get.value(card) && card.name != 'du' && card.name != 'dus';
                                    };
                                    player.line(result.targets);
                                    result.targets[0].addMark('rqsj_xurui_mark');
                                }
                                ('step 2');
                                if (result.bool && result.cards.length) {
                                    player.draw();
                                }
                                player.addSkill('rqsj_yongqi');
                                player.addMark('rqsj_yongqi');
                                event.finish();
                                ('step 3');
                                if (trigger.name == 'damage') {
                                    player.chooseToDiscard('h', get.prompt('rqsj_xurui'), '弃置1张手牌').ai = function (card) {
                                        if (card.name == 'sha') return 10;
                                        return 7 - get.value(card) && card.name != 'du' && card.name != 'dus';
                                    };
                                }
                                ('step 4');
                                if (result.bool && result.cards.length) {
                                    player.line(trigger.source);
                                    trigger.source.addMark('rqsj_xurui_mark');
                                    player.draw();
                                }
                                player.addSkill('rqsj_yongqi');
                                player.addMark('rqsj_yongqi');
                            },
                        },
                        rqsj_xurui_mark: {
                            marktext: '锐',
                            intro: {
                                content: '蓄势待发',
                            },
                        },
                        rqsj_shangci: {
                            audio: 'ext:染柒的世界/audio:2',
                            trigger: {
                                source: 'damageAfter',
                            },
                            filter(event, player) {
                                if (event.player.countMark('rqsj_xurui_mark') == 0) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('rqsj_shangci'), function (card, player, target) {
                                    return get.distance(trigger.player, target) <= 1 && trigger.player != target;
                                }).ai = function (target) {
                                    return get.damageEffect(target, player) + 0.1;
                                };
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    event.target.damage();
                                    trigger.player.removeMark('rqsj_xurui_mark');
                                    trigger.player.line(event.target, 'thunder');
                                } else {
                                    event.finish();
                                }
                            },
                        },
                        rqsj_duyi1: {},
                        rqsj_yuci: {
                            content() {
                                'step 0';
                                player.chooseToDiscard(2).set('ai', function (card) {
                                    if (card.name == 'tao') return -10;
                                    if (card.name == 'jiu' && _status.event.player.hp == 1) return -10;
                                    return get.unuseful(card) + 2.5 * (5 - get.owner(card).hp);
                                });
                                ('step 1');
                                if (result.bool == false) {
                                    player.damage(1, 'nosource');
                                }
                            },
                        },
                        rqsj_yongxing: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countMark('rqsj_yongqi') > 1;
                            },
                            filterTarget(card, player, target) {
                                return target != player && get.distance(player, target, 'attack') <= 1;
                            },
                            content() {
                                player.removeMark('rqsj_yongqi', 2);
                                target.addTempSkill('rqsj_yongxing2');
                            },
                            ai: {
                                order: 7.9,
                                result: {
                                    target(player, target) {
                                        var nh = target.countCards('h');
                                        if (get.attitude(player, target) < 0 && nh >= 3 && player.canUse('sha', target) && player.countCards('h', 'sha') && get.effect(target, { name: 'sha' }, player, player) > 0) {
                                            return -nh - 5;
                                        }
                                        return -nh;
                                    },
                                },
                            },
                        },
                        rqsj_yongxing2: {
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
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'respondShan') || get.tag(card, 'respondSha')) {
                                            if (current < 0) return 1.5;
                                        }
                                    },
                                },
                            },
                        },
                        rqsj_gulaozhe: {
                            audio: 'ext:染柒的世界/audio:2',
                            nobracket: true,
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                return true;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                'step 1';
                                player
                                    .chooseTarget(get.prompt2('rqsj_gulaozhe'), function (card, player, target) {
                                        return target.countCards('h') < 3;
                                    })
                                    .set('ai', function (target) {
                                        var att = get.attitude(_status.event.player, target);
                                        if (target.hasSkillTag('nogain')) att /= 6;
                                        if (att > 2) {
                                            return 3 - target.countCards('h');
                                        }
                                        return att / 3;
                                    });
                                ('step 2');
                                if (result.bool) {
                                    for (var i = 0; i < result.targets.length; i++) {
                                        result.targets[i].drawTo(3);
                                        var num1 = Math.min(3, player.maxHp - player.hp);
                                        player.addSkill('rqsj_fali');
                                        player.addMark('rqsj_fali', num1);
                                        if (player.hp > 1) {
                                            player.loseHp();
                                        }
                                    }
                                }
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'damage') && target.hp > 1) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                            var max = 0;
                                            var players = game.filterPlayer();
                                            for (var i of players) {
                                                if (get.attitude(target, i) > 0) {
                                                    max = Math.max(Math.min(5, i.hp) - i.countCards('h'), max);
                                                }
                                            }
                                            switch (max) {
                                                case 0:
                                                    return 2;
                                                case 1:
                                                    return 1.5;
                                                case 2:
                                                    return [1, 2];
                                                default:
                                                    return [0, max];
                                            }
                                        }
                                        if ((card.name == 'tao' || card.name == 'caoyao') && target.hp > 1 && target.countCards('h') <= target.hp) return [0, 0];
                                    },
                                },
                            },
                        },
                        rqsj_fujiyi: {},
                        rqsj_fujihuo: {
                            audio: 'ext:染柒的世界/audio:2',
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                var num = Math.max(2, 5 - target.hp);
                                if (target.hasSkill('rqsj_fujiyi') || player.countMark('rqsj_fali') < num) return false;
                                return true;
                            },
                            content() {
                                var num = Math.max(2, 5 - target.hp);
                                target.loseHp();
                                player.removeMark('rqsj_fali', num);
                                target.addTempSkill('rqsj_fujiyi');
                            },
                            ai: {
                                order: 8,
                                result: {
                                    target(player, target) {
                                        if (target.hp == 1) return -1;
                                        return -2;
                                    },
                                },
                            },
                        },
                        rqsj_fujifu: {
                            audio: 'ext:染柒的世界/audio:2',
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                var num = Math.max(2, 5 - target.hp);
                                if (target.hp >= target.maxHp || target.hasSkill('rqsj_fujiyi') || player.countMark('rqsj_fali') < num) return false;
                                return true;
                            },
                            content() {
                                var num = Math.max(2, 5 - target.hp);
                                target.recover();
                                player.removeMark('rqsj_fali', num);
                                target.addTempSkill('rqsj_fujiyi');
                            },
                            ai: {
                                order: 8,
                                result: {
                                    target(player, target) {
                                        if (target.hp == 1) return 5;
                                        if (player == target) return 5;
                                        return 2;
                                    },
                                },
                            },
                        },
                        rqsj_fuji: {
                            nobracket: true,
                            group: ['rqsj_fujifu', 'rqsj_fujihuo'],
                        },
                        rqsj_shenjuan: {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countMark('rqsj_fali') < 1;
                            },
                            content() {
                                var list = [1, 2].randomGet();
                                if (list == 0) {
                                    event.finish();
                                } else {
                                    player.addSkill('rqsj_fali');
                                    player.addMark('rqsj_fali', list);
                                }
                            },
                        },
                        rqsj_gezibenzhi: {
                            audio: 'ext:染柒的世界/audio:2',
                            nobracket: true,
                            mark: true,
                            marktext: '鸽',
                            intro: {
                                content: '你已鸽了#回合',
                            },
                            forced: true,
                            trigger: {
                                player: 'phaseAfter',
                            },
                            filter(event, player) {
                                return !player.getStat('damage');
                            },
                            content() {
                                player.addMark('rqsj_gezibenzhi');
                            },
                            group: 'rqsj_gezibu',
                        },
                        rqsj_gezibu: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                var num = player.countMark('rqsj_gezibenzhi');
                                return event.notLink() && num > 0;
                            },
                            content() {
                                'step 0';
                                player.draw(2);
                                player.removeMark('rqsj_gezibenzhi');
                                player.update();
                                if (player.countMark('rqsj_gezibenzhi') == 0) {
                                    event.finish();
                                }
                                ('step 1');
                                player.chooseBool('是否令' + (player == trigger.player ? '自己' : get.translation(trigger.player)) + '回合结束随机附着两个元素？').set('ai', () => get.attitude(player, trigger.player) < 0);
                                ('step 2');
                                if (result.bool) {
                                    trigger.player.line(player);
                                    trigger.player.addSkill('rqsj_gezifumian');
                                    trigger.player.addMark('rqsj_gezifumian', 2);
                                    player.removeMark('rqsj_gezibenzhi');
                                    player.update();
                                    if (player.countMark('rqsj_gezibenzhi') == 0) {
                                        event.finish();
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                player.chooseBool('是否令' + (player == trigger.player ? '自己' : get.translation(trigger.player)) + '受到的此伤害+1？').set('ai', () => get.attitude(player, trigger.player) < 0);
                                ('step 4');
                                if (result.bool) {
                                    trigger.num++;
                                    player.removeMark('rqsj_gezibenzhi');
                                    player.update();
                                }
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        rqsj_zibenlundiao: {
                            nobracket: true,
                            audio: 'ext:染柒的世界/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                if (target.hp == target.countCards('h')) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                var num;
                                if (target.countCards('h') > target.hp && target.countCards('h') <= target.maxHp) {
                                    num = target.countCards('h') - target.hp;
                                    target.chooseToDiscard(num, true).set('ai', function (card) {
                                        if (card.name == 'tao') return -5;
                                        if (card.name == 'jiu' && _status.event.player.hp == 1) return -5;
                                        return get.unuseful(card) + 2.5 * (5 - get.owner(card).hp);
                                    });
                                    event.finish();
                                }
                                if (target.countCards('h') > target.maxHp) {
                                    var position = get.is.single() ? 'he' : 'hej';
                                    if (target.countGainableCards(player, position)) {
                                        player.gainPlayerCard(position, target, true);
                                    }
                                    event.finish();
                                }
                                if (target.countCards('h') < target.hp) {
                                    num = -target.countCards('h') + target.hp;
                                    player.draw(num);
                                    player.chooseCard('选择给' + get.translation(target) + '的牌', true, num, 'he');
                                }
                                ('step 1');
                                target.gain(result.cards, player, 'giveAuto');
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target(player, target) {
                                        if (target.countCards('h') > target.hp && target.countCards('h') <= target.maxHp) return -target.countCards('h') + target.hp;
                                        if (target.countCards('h') < target.hp) return -target.countCards('h') + target.hp;
                                        if (target.countCards('h') > target.maxHp) return -2 - target.countCards('h') + target.hp;
                                    },
                                },
                            },
                        },
                        rqsj_gezifumian: {
                            nobracket: true,
                            mark: true,
                            marktext: '脆弱',
                            intro: {
                                content: '结束阶段随机附着#个元素',
                            },
                            trigger: {
                                global: 'phaseJieshuBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var skill1 = [0, 1, 2, 3].randomGet();
                                if (skill1 == 0) {
                                    player.useSkill('rqsj_addfeng');
                                }
                                if (skill1 == 1) {
                                    player.useSkill('rqsj_addhuo');
                                }
                                if (skill1 == 2) {
                                    player.useSkill('rqsj_addshui');
                                }
                                if (skill1 == 3) {
                                    player.useSkill('rqsj_addtu');
                                }
                                player.removeMark('rqsj_gezifumian');
                                ('step 1');
                                if (player.countMark('rqsj_gezifumian') > 0) {
                                    event.goto(0);
                                } else {
                                    player.removeSkill('rqsj_gezifumian');
                                }
                            },
                        },
                        rqsj_lianhua: {
                            audio: 'ext:染柒的世界/audio:2',
                            trigger: {
                                player: 'useCard',
                            },
                            usable: 1,
                            filter(event, player, name) {
                                if (get.type(event.card) != 'basic' && get.type(event.card) != 'trick') return false;
                                var history = player.getHistory('useCard');
                                for (var i = 0; i < history.length; i++) {
                                    if (history[i] != event && get.type(history[i].card) == get.type(event.card)) return true;
                                }
                                return false;
                            },
                            content() {
                                player.draw(2);
                            },
                            ai: {
                                threaten: 1.4,
                            },
                        },
                        rqsj_yeqin: {
                            subSkill: {
                                round: {
                                    charlotte: true,
                                },
                                use: {
                                    mark: true,
                                    marktext: '夜勤',
                                    intro: {
                                        content: '当前回合结束后,摸两张牌并执行一个额外的出牌阶段',
                                    },
                                    charlotte: true,
                                    audio: 'rqsj_yeqin',
                                    trigger: {
                                        global: 'phaseAfter',
                                    },
                                    forced: true,
                                    content() {
                                        var next = player.phaseUse();
                                        event.next.remove(next);
                                        trigger.parent.next.push(next);
                                        player.draw(2);
                                        player.addTempSkill('rqsj_yeqin_after', { player: 'phaseUseEnd' });
                                        player.addTempSkill('rqsj_yeqin_turn');
                                    },
                                },
                                after: {
                                    mark: true,
                                    marktext: '夜勤',
                                    intro: {
                                        content: '使用牌无距离限制,此阶段结束时,若无人进入过濒死,将武将牌翻至背面并移除潜行',
                                    },
                                    charlotte: true,
                                    mod: {
                                        targetInRange: () => true,
                                    },
                                    trigger: {
                                        global: 'dying',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.hasSkill('rqsj_yeqin_turn');
                                    },
                                    content() {
                                        player.removeSkill('rqsj_yeqin_turn');
                                    },
                                },
                                turn: {
                                    trigger: {
                                        player: 'phaseUseEnd',
                                    },
                                    forced: true,
                                    content() {
                                        player.removeSkill('rqsj_qianxing');
                                        player.turnOver(true);
                                        player.removeSkill('rqsj_yeqin_turn');
                                    },
                                },
                            },
                            trigger: {
                                global: 'damageEnd',
                            },
                            filter(event, player) {
                                if (player == _status.currentPhase) return false;
                                return player.countCards('he') > 0 && !player.hasSkill('rqsj_yeqin_round');
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseToDiscard('he', get.prompt('rqsj_yeqin'), '弃置一张牌,进入潜行状态至下回合开始,于当前回合结束后摸两张牌并进行一个额外的出牌阶段.')
                                    .set('ai', function (card) {
                                        return 9 - get.value(card);
                                    })
                                    ('step 1');
                                if (result.bool) {
                                    player.tempHide();
                                    player.addTempSkill('rqsj_yeqin_round', 'roundStart');
                                    player.addTempSkill('rqsj_yeqin_use', { player: 'phaseUseBegin' });
                                }
                            },
                        },
                        rqsj_zhaoxinskill: {
                            enable: 'phaseUse',
                            filterCard: true,
                            usable: 1,
                            check(card) {
                                return 6 - get.value(card);
                            },
                            filter(event, player) {
                                return !player.hasSkill('rqsj_zaoxin');
                            },
                            filterTarget(card, player, target) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player.chooseControl('加减厄运', '转化手牌', function (event, player) {
                                    var num1 = get.attitude(_status.event.player, target);
                                    if (target.hasSkill('rqsj_eyun') && num1 > 0) return '加减厄运';
                                    return '加减厄运';
                                });
                                ('step 1');
                                if (result.control == '加减厄运') {
                                    event.goto(2);
                                } else {
                                    event.goto(3);
                                }
                                ('step 2');
                                if (target.hasSkill('rqsj_eyun')) {
                                    target.removeSkill('rqsj_eyun');
                                } else {
                                    target.addTempSkill('rqsj_eyun', { player: 'phaseAfter' });
                                }
                                player.addTempSkill('rqsj_zaoxin');
                                event.finish();
                                ('step 3');
                                if (target.countCards('h') < 1) {
                                    event.goto(2);
                                }
                                var card = target
                                    .getCards('h', function (card) {
                                        return card.name != 'rqsj_xingchen';
                                    })
                                    .randomGet();
                                if (card) {
                                    card.init([card.suit, card.number, 'rqsj_xingchen']);
                                }
                                game.log(target, '将一张手牌转化为', { name: 'rqsj_xingchen' });
                                player.addTempSkill('rqsj_zaoxin');
                                event.finish();
                            },
                            ai: {
                                order: 7,
                                threaten: 2,
                                result: {
                                    target(player, target) {
                                        if (target.hasSkill('rqsj_eyun')) return 1;
                                        return -1;
                                    },
                                },
                            },
                        },
                        rqsj_zaoxin: {},
                        rqsj_zhaoxin1: {
                            trigger: {
                                global: 'cardsDiscardAfter',
                            },
                            filter(event, player) {
                                var evt = event.parent.relatedEvent;
                                if (!evt || evt.name != 'judge') return;
                                if (evt.player == player) return false;
                                if (get.position(event.cards[0], true) != 'd') return false;
                                return event.cards[0].suit == 'spade';
                            },
                            content() {
                                player.draw();
                            },
                        },
                        rqsj_jisiliguanskill: {
                            trigger: {
                                player: ['rqsj_addshuiAfter', 'rqsj_addfengAfter', 'rqsj_addhuoAfter', 'rqsj_addtuAfter'],
                            },
                            filter(event, player) {
                                if (player.hasSkill('rqsj_feng') || player.hasSkill('rqsj_tu') || player.hasSkill('rqsj_huo') || player.hasSkill('rqsj_shui')) return true;
                                return false;
                            },
                            content() {
                                var list = [1, 2].randomGet();
                                if (list == 1) {
                                    player.recover();
                                } else {
                                    player.draw();
                                }
                                player.addSkill('rqsj_gezifumian');
                                player.addMark('rqsj_gezifumian');
                            },
                        },
                        rqsj_yingdun: {
                            filter(event, player) {
                                return !player.hasSkill('rqsj_qianxing') && !player.getStat('damage');
                            },
                            group: 'rqsj_ruying',
                            forced: true,
                            trigger: {
                                player: 'phaseAfter',
                            },
                            content() {
                                'step 0';
                                player.chooseToDiscard(get.prompt('rqsj_yingdun')).set('ai', function (card) {
                                    return 7 - get.value(card);
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.addTempSkill('rqsj_qianxing', { player: 'phaseEnd' });
                                    player.chooseDrawRecover(2, true);
                                }
                            },
                            ai: {
                                threaten: 1.6,
                            },
                        },
                        rqsj_yingji: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                return event.notLink() && player.hasSkill('rqsj_qianxing');
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            content() {
                                player.removeSkill('rqsj_qianxing');
                                trigger.num++;
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        rqsj_yingpo: {
                            trigger: {
                                player: 'damageBefore',
                            },
                            filter(event, player) {
                                if (player.hasSkill('rqsj_qianxing')) return true;
                                return false;
                            },
                            forced: true,
                            content() {
                                player.removeSkill('rqsj_qianxing');
                            },
                            ai: {
                                expose: 0.2,
                                threaten: 1.5,
                            },
                        },
                        rqsj_ruying: {
                            trigger: {
                                global: 'gameStart',
                                player: 'enterGame',
                            },
                            forced: true,
                            content() {
                                player.addTempSkill('rqsj_qianxing', { player: 'phaseUseEnd' });
                            },
                        },
                        fengzhidiyu_skill: {
                            enable: 'phaseUse',
                            filter(event, player) {
                                if (player.hasSkill('rqsj_fengyuoff')) return false;
                                return player.countCards('he', { type: 'equip' }) > 0 && lib.filter.cardEnabled({ name: 'sha' }, player);
                            },
                            filterCard(card, player) {
                                return get.subtype(card) == 'equip5' || get.subtype(card) == 'equip2' || get.subtype(card) == 'equip3' || get.subtype(card) == 'equip4' || get.subtype(card) == 'equip6';
                            },
                            position: 'he',
                            check(card) {
                                var player = _status.currentPhase;
                                if (player.countCards('he', { subtype: get.subtype(card) }) > 1) {
                                    return 11 - get.equipValue(card);
                                }
                                return 6 - get.equipValue(card);
                            },
                            discard: false,
                            prepare: 'throw',
                            delay: false,
                            filterTarget(card, player, target) {
                                return lib.filter.targetEnabled({ name: 'sha' }, player, target);
                            },
                            content() {
                                'step 0';
                                player.addAdditionalSkill('rqsj_anqi', 'unequip');
                                player.addTempSkill('rqsj_fengyuoff');
                                player.useCard({ name: 'sha' }, cards, targets, false).animate = false;
                                player.line(targets, 'wood');
                                ('step 1');
                                player.removeAdditionalSkill('rqsj_anqi');
                            },
                            ai: {
                                order() {
                                    return get.order({ name: 'sha' }) + 0.1;
                                },
                                result: {
                                    target(player, target) {
                                        player.addAdditionalSkill('rqsj_anqi_ai', 'unequip');
                                        var eff = get.effect(target, { name: 'sha' }, player, target);
                                        player.removeAdditionalSkill('rqsj_anqi_ai');
                                        return eff;
                                    },
                                },
                                effect: {
                                    player(card, player) {
                                        if (_status.currentPhase != player) return;
                                        if (get.type(card) == 'equip' && player.countCards('e', { subtype: get.subtype(card) }) && lib.filter.filterCard({ name: 'sha' }, player)) {
                                            return 0;
                                        }
                                    },
                                },
                                threaten: 1.3,
                            },
                        },
                        rqsj_fengyuoff: {},
                        fengzhiqingyus_skill: {
                            audio: 'ext:染柒的世界/audio:2',
                            enable: 'chooseToUse',
                            filterCard: {
                                name: 'sha',
                            },
                            position: 'hes',
                            viewAs: {
                                name: 'guohe',
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('hes', 'sha')) return false;
                                if (player.hasSkill('rqsj_fengyuoff')) return false;
                                return true;
                            },
                            onuse(event, player) {
                                player.addTempSkill('rqsj_fengyuoff');
                            },
                            prompt: '将一张杀当过河拆桥使用',
                            check(card) {
                                return 6 - get.value(card);
                            },
                            ai: {
                                basic: {
                                    order: 9,
                                    useful: 5,
                                    value: 5,
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
                                result: {
                                    target(player, target) {
                                        var att = get.attitude(player, target);
                                        var nh = target.countCards('h');
                                        if (att > 0) {
                                            if (
                                                target.countCards('j', function (card) {
                                                    var cardj = card.viewAs ? { name: card.viewAs } : card;
                                                    return get.effect(target, cardj, target, player) < 0;
                                                }) > 0
                                            )
                                                return 3;
                                            if (target.getEquip('baiyin') && target.isDamaged() && get.recoverEffect(target, player, player) > 0) {
                                                if (target.hp == 1 && !target.hujia) return 1.6;
                                            }
                                            if (
                                                target.countCards('e', function (card) {
                                                    if (get.position(card) == 'e') return get.value(card, target) < 0;
                                                }) > 0
                                            )
                                                return 1;
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
                            },
                        },
                        rqsj_jiaqiang1: {
                            trigger: {
                                global: 'gameStart',
                                player: 'enterGame',
                            },
                            forced: true,
                            filter(event, player) {
                                if (lib.config.extension_染柒的世界_quntiup == true) return true;
                                return false;
                            },
                            content() {
                                player.gainMaxHp();
                                player.recover();
                            },
                        },
                        rqsj_jiaqiang2: {
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            forced: true,
                            filter(event, player) {
                                return lib.config.extension_染柒的世界_quntiup == true && !event.numFixed;
                            },
                            content() {
                                trigger.num++;
                            },
                            ai: {
                                threaten: 1.3,
                            },
                        },
                        rqsj_jiaqiang3: {
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return lib.config.extension_染柒的世界_quntiup == true;
                            },
                            content() {
                                player.draw();
                            },
                        },
                        rqsj_shouwang: {
                            audio: 'ext:染柒的世界/audio:2',
                            enable: 'phaseUse',
                            usable: 2,
                            filterTarget(card, player, target) {
                                return player != target && target.countCards('h') == player.countCards('h') && !target.hasSkill('rqsj_shouwangoff');
                            },
                            content() {
                                target.addTempSkill('rqsj_shouwangoff');
                                player.line(target, 'green');
                                targets.sortBySeat();
                                game.asyncDraw([target, player]);
                            },
                            ai: {
                                order: 9.9,
                                result: {
                                    target(player, target) {
                                        return 1;
                                    },
                                },
                                threaten: 0.1,
                            },
                        },
                        rqsj_ciqiong: {
                            usable: 2,
                            trigger: {
                                player: 'equipEnd',
                            },
                            audio: 'ext:染柒的世界/audio:2',
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('rqsj_ciqiong'), [1, 2], true, function (card, player, target) {
                                        return true;
                                    })
                                    .set('ai', function (target) {
                                        var num = get.attitude(_status.event.player, target);
                                        return num;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var targets;
                                    if (event.versus) {
                                        targets = game.filterPlayer(function (current) {
                                            return current != player && current.side == player.side;
                                        });
                                    } else {
                                        targets = result.targets;
                                    }
                                    game.asyncDraw(targets);
                                }
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.type(card) == 'equip' && !get.cardtag(card, 'gifts')) return [1, 3];
                                    },
                                },
                                threaten: 1.3,
                            },
                        },
                        rqsj_shouwangoff: {},
                        rqsj_qianxing: {
                            mark: true,
                            nopop: true,
                            init(player) {
                                game.log(player, '获得了', '【潜行】');
                            },
                            intro: {
                                content: '锁定技,你不能成为其他角色的卡牌的目标',
                            },
                            mod: {
                                targetEnabled(card, player, target) {
                                    if (player != target) return false;
                                },
                            },
                        },
                        rqsj_tuokun: {
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filterfilter(event, player) {
                                return player.countCards('j') > 0;
                            },
                            content() {
                                player.discard(player.getCards('j'));
                                player.draw();
                                player.addTempSkill('rqsj_tuokunfu');
                            },
                        },
                        rqsj_tuokunfu: {
                            mod: {
                                ignoredHandcard(card, player) {
                                    if (get.type(card, 'basic') == 'basic') {
                                        return true;
                                    }
                                },
                                cardDiscardable(card, player, name) {
                                    if (name == 'phaseDiscard' && get.type(card, 'basic') == 'basic') return false;
                                },
                                maxHandcard(player, num) {
                                    return num - 2;
                                },
                            },
                        },
                        rqsj_anfang: {
                            audio: 'ext:染柒的世界/audio:2',
                            enable: 'phaseUse',
                            filterCard: true,
                            usable: 1,
                            check(card) {
                                return 7 - get.value(card);
                            },
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('h');
                            },
                            content() {
                                'step 1';
                                player.viewHandcards(target);
                                if (target.countCards('h', 'sha')) {
                                    player.gain(game.createCard('shan'), 'gain2');
                                }
                                if (target.countCards('h', 'shan')) {
                                    player.gain(game.createCard('sha'), 'gain2');
                                }
                            },
                            ai: {
                                order: 9,
                                result: {
                                    player(player, target) {
                                        if (target.countCards('h') == 1) return 0;
                                        return target.countCards('h') - 1;
                                    },
                                },
                                threaten: 2,
                            },
                        },
                        rqsj_xianshi: {
                            audio: 'ext:染柒的世界/audio:2',
                            trigger: {
                                player: 'phaseDiscardBefore',
                            },
                            filter(event, player) {
                                return player.needsToDiscard() && !player.hasJudge('lebu') && !player.storage._disableJudge;
                            },
                            content() {
                                player.addJudge(game.createCard('lebu'));
                                trigger.cancel();
                            },
                        },
                        rqsj_yixi: {
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            forced: true,
                            filter(event, player) {
                                return _status.currentPhase != player;
                            },
                            content() {
                                'step 0';
                                player.chooseControl('弃一张牌', '摸一张牌', function (event, player) {
                                    var num1 = player.countCards('he');
                                    var num2 = player.hp;
                                    if (num1 > num2) return '弃一张牌';
                                    return '摸一张牌';
                                });
                                ('step 1');
                                if (result.control == '弃一张牌') {
                                    player.chooseToDiscard('he', true);
                                } else {
                                    player.draw();
                                    event.finish();
                                }
                                ('step 2');
                                player.chooseToUse();
                                ('step 3');
                                if (result.bool) {
                                    event.goto(2);
                                }
                            },
                        },
                    },
                };
                for (const i in QQQ.character) {
                    const info = QQQ.character[i];
                    info[4].add(`ext:染柒的世界/image/${i}.jpg`);
                    info[4].push(`die:ext:染柒的世界/audio/${i}.mp3`);
                }
                lib.config.all.characters.add('染柒的世界');
                lib.config.characters.add('染柒的世界');
                lib.translate['染柒的世界_character_config'] = `染柒的世界`;
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
                        if (obj.hasOwn(key)) {
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
                    name: '染柒的世界',
                    connect: true,
                    card: {
                        rqsj_chuxidacan: {
                            type: 'meishi',
                            enable: true,
                            selectTarget: -1,
                            toself: true,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                player.draw(3);
                                target.addSkill('rqsj_liuxiang');
                                target.addMark('rqsj_liuxiang', 3);
                            },
                            ai: {
                                basic: {
                                    order: 6.2,
                                    useful: 3.5,
                                    value: 8.2,
                                },
                                result: {
                                    target: 2,
                                },
                                tag: {
                                    draw: 5,
                                },
                            },
                            fullimage: true,
                        },
                        rqsj_youzhihuoji: {
                            type: 'meishi',
                            enable: true,
                            selectTarget: -1,
                            toself: true,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                var num = [1, 2].randomGet();
                                if (num == 1) {
                                    player.draw();
                                }
                                if (num == 2) {
                                    target.addSkill('rqsj_liuxiang');
                                    target.addMark('rqsj_liuxiang', 2);
                                }
                            },
                            ai: {
                                basic: {
                                    order: 6.2,
                                    useful: 3.5,
                                    value: 4.2,
                                },
                                result: {
                                    target: 2,
                                },
                                tag: {
                                    draw: 1,
                                },
                            },
                            fullimage: true,
                            image: 'ext:染柒的世界/image/rqsj_youzhihuoji.jpg',
                        },
                        rqsj_jinpaihuoji: {
                            type: 'meishi',
                            enable: true,
                            selectTarget: -1,
                            toself: true,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                player.draw();
                                target.addSkill('rqsj_liuxiang');
                                target.addMark('rqsj_liuxiang', 2);
                            },
                            ai: {
                                basic: {
                                    order: 6.2,
                                    useful: 3.5,
                                    value: 6.2,
                                },
                                result: {
                                    target: 2,
                                },
                                tag: {
                                    draw: 2,
                                },
                            },
                            fullimage: true,
                            image: 'ext:染柒的世界/image/rqsj_jinpaihuoji.jpg',
                        },
                        rqsj_shengdanhuoji: {
                            type: 'meishi',
                            enable: true,
                            selectTarget: -1,
                            toself: true,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                player.draw(2);
                                target.addSkill('rqsj_liuxiang');
                                target.addMark('rqsj_liuxiang', 3);
                            },
                            ai: {
                                basic: {
                                    order: 6.2,
                                    useful: 3.5,
                                    value: 7.2,
                                },
                                result: {
                                    target: 2,
                                },
                                tag: {
                                    draw: 2,
                                },
                            },
                            fullimage: true,
                            image: 'ext:染柒的世界/image/rqsj_shengdanhuoji.jpg',
                        },
                        lr_lingyao: {
                            type: 'basic',
                            cardcolor: 'red',
                            toself: true,
                            enable(card, player) {
                                return player.hp < player.maxHp;
                            },
                            savable: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player && target.hp < target.maxHp;
                            },
                            modTarget(card, player, target) {
                                return target.hp < target.maxHp;
                            },
                            content() {
                                target.recover(event.baseDamage || 1);
                                player.gain(game.createCard('tao'), 'gain2');
                            },
                            ai: {
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
                            fullimage: true,
                        },
                        lr_duyao: {
                            type: 'basic',
                            toself: true,
                            cardcolor: 'black',
                            ai: {
                                value: -5,
                                useful: 6,
                                result: {
                                    player(player, target) {
                                        if (player.hasSkillTag('usedu')) return 5;
                                        return -1;
                                    },
                                },
                                order: 7.5,
                            },
                            enable: true,
                            modTarget: true,
                            global: 'lrdj_duyao',
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            delay: false,
                            content() { },
                            selectTarget: -1,
                            fullimage: true,
                        },
                        rqsj_xingchen: {
                            type: 'basic',
                            enable: true,
                            filterTarget: true,
                            content() {
                                if (player == target) {
                                    if (lib.config.extension_染柒的世界_faliup == true) {
                                        var num = 2;
                                    } else {
                                        var num = 1;
                                    }
                                    target.draw(num);
                                    target.chooseToDiscard(true, 'h');
                                } else {
                                    target.chooseToDiscard(true, 'h');
                                    target.draw();
                                }
                                var list = [1, 1, 1, 2, 2, 2, 2, 2, 2, 2].randomGet();
                                if (player.hasSkill('rqsj_yaohui')) {
                                    var list = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 4, 5, 6, 7, 8, 9, 4].randomGet();
                                }
                                if (!player.hasSkill('rqsj_yongqi')) {
                                    player.addSkill('rqsj_yongqi');
                                }
                                if (list == 1) {
                                    player.addMark('rqsj_yongqi');
                                }
                            },
                            ai: {
                                order: 1,
                                result: {
                                    useful: 1,
                                    target(player, target) {
                                        var att = get.attitude(player, target);
                                        var nh = target.countCards('h');
                                        var noh = nh == 0 || target.hasSkillTag('noh');
                                        if (att >= 0 && noh) return 2;
                                        if (att <= 0 && noh) return 2;
                                        if (att <= 0 && nh == 0) return 2;
                                        if ((att >= 0 && !target.countCards('h')) || player == target) return 2.5;
                                        return -1;
                                    },
                                },
                            },
                            fullskin: true,
                        },
                        dus: {
                            type: 'basic',
                            toself: true,
                            cardcolor: 'black',
                            ai: {
                                value: -5,
                                useful: 6,
                                result: {
                                    player(player, target) {
                                        if (player.hasSkillTag('usedu')) return 5;
                                        return -1;
                                    },
                                },
                                order: 7.5,
                            },
                            enable: true,
                            modTarget: true,
                            global: 'rqsj_dus',
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            delay: false,
                            content() { },
                            selectTarget: -1,
                            fullskin: true,
                        },
                        rqsj_tiejiaxiongshi: {
                            type: 'equip',
                            subtype: 'equip3',
                            distance: {
                                globalTo: 1,
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
                            ai: {
                                basic: {
                                    order: 1,
                                    useful: 2,
                                    equipValue: 7,
                                    value: 1,
                                },
                                result: {
                                    target(player, target, card) {
                                        return get.equipResult(player, target, card.name);
                                    },
                                },
                            },
                            fullimage: true,
                        },
                        rqsj_shijiu: {
                            type: 'equip',
                            subtype: 'equip4',
                            distance: {
                                globalFrom: -1,
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
                            ai: {
                                basic: {
                                    order: 1,
                                    useful: 2,
                                    equipValue: 5,
                                    value: 1,
                                },
                                result: {
                                    target(player, target, card) {
                                        return get.equipResult(player, target, card.name);
                                    },
                                },
                            },
                            fullimage: true,
                        },
                        rqsj_wenyizhizhu: {
                            type: 'equip',
                            subtype: 'equip4',
                            distance: {
                                globalFrom: -1,
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
                            ai: {
                                basic: {
                                    order: 1,
                                    useful: 2,
                                    equipValue: 4,
                                    value: 1,
                                },
                                result: {
                                    target(player, target, card) {
                                        return get.equipResult(player, target, card.name);
                                    },
                                },
                            },
                            fullimage: true,
                        },
                        rqsj_xinghongdiyuzhanma: {
                            type: 'equip',
                            subtype: 'equip4',
                            distance: {
                                globalFrom: -1,
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
                            ai: {
                                basic: {
                                    order: 1,
                                    useful: 2,
                                    equipValue: 4,
                                    value: 1,
                                },
                                result: {
                                    target(player, target, card) {
                                        return get.equipResult(player, target, card.name);
                                    },
                                },
                            },
                            fullimage: true,
                        },
                        rqsj_leijiao: {
                            type: 'equip',
                            subtype: 'equip4',
                            distance: {
                                globalFrom: -1,
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
                            ai: {
                                basic: {
                                    order: 1,
                                    useful: 2,
                                    equipValue: 4,
                                    value: 1,
                                },
                                result: {
                                    target(player, target, card) {
                                        return get.equipResult(player, target, card.name);
                                    },
                                },
                            },
                            fullimage: true,
                        },
                        rqsj_qingluan: {
                            type: 'equip',
                            subtype: 'equip3',
                            distance: {
                                globalTo: 1,
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
                            ai: {
                                basic: {
                                    order: 1,
                                    useful: 2,
                                    equipValue: 7,
                                    value: 1,
                                },
                                result: {
                                    target(player, target, card) {
                                        return get.equipResult(player, target, card.name);
                                    },
                                },
                            },
                            fullimage: true,
                        },
                        rqsj_mengy: {
                            type: 'equip',
                            subtype: 'equip3',
                            distance: {
                                globalTo: 1,
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
                            ai: {
                                basic: {
                                    order: 1,
                                    useful: 2,
                                    equipValue: 7,
                                    value: 1,
                                },
                                result: {
                                    target(player, target, card) {
                                        return get.equipResult(player, target, card.name);
                                    },
                                },
                            },
                            fullimage: true,
                        },
                        rqsj_shidinianlong: {
                            type: 'equip',
                            subtype: 'equip3',
                            distance: {
                                globalTo: 1,
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
                            ai: {
                                basic: {
                                    order: 1,
                                    useful: 2,
                                    equipValue: 7,
                                    value: 1,
                                },
                                result: {
                                    target(player, target, card) {
                                        return get.equipResult(player, target, card.name);
                                    },
                                },
                            },
                            fullimage: true,
                        },
                        rqsj_card_addshui: {
                            type: 'rqsj_yuansu',
                            enable: true,
                            filterTarget: true,
                            content() {
                                target.useSkill('rqsj_addshui');
                            },
                            ai: {
                                order: 6,
                                result: {
                                    target: -1,
                                },
                            },
                            fullskin: true,
                        },
                        rqsj_card_addfeng: {
                            type: 'rqsj_yuansu',
                            enable: true,
                            filterTarget: true,
                            content() {
                                target.useSkill('rqsj_addfeng');
                            },
                            ai: {
                                order: 6,
                                result: {
                                    target: -1,
                                },
                            },
                            fullskin: true,
                            image: 'ext:染柒的世界/rqsj_card_addfeng.png',
                            selectTarget: 1,
                        },
                        rqsj_card_addhuo: {
                            type: 'rqsj_yuansu',
                            enable: true,
                            filterTarget: true,
                            content() {
                                target.useSkill('rqsj_addhuo');
                            },
                            ai: {
                                order: 7,
                                result: {
                                    target: -1,
                                },
                            },
                            fullskin: true,
                            image: 'ext:染柒的世界/rqsj_card_addhuo.png',
                            selectTarget: 1,
                        },
                        rqsj_card_addtu: {
                            type: 'rqsj_yuansu',
                            enable: true,
                            filterTarget: true,
                            content() {
                                target.useSkill('rqsj_addtu');
                            },
                            ai: {
                                order: 6,
                                result: {
                                    target(player, target) {
                                        var att = get.attitude(player, target);
                                        if (att >= 0 && target.hasSkill('rqsj_tu')) return 2;
                                        if (att < 0 && target.hasSkill('rqsj_tu')) return 2;
                                        return -1;
                                    },
                                },
                            },
                            fullskin: true,
                            selectTarget: 1,
                        },
                        rqsj_fangxuezhiliao: {
                            type: 'trick',
                            enable: true,
                            filterTarget(card, player, target) {
                                if (target.hp >= target.maxHp) return false;
                                return true;
                            },
                            content() {
                                if (target.hp > 1) {
                                    target.loseHp();
                                    target.recover(2);
                                    target.removeSkill('rqsj_eyun');
                                    target.removeSkill('rqsj_zhongdu');
                                    target.removeSkill('rqsj_xuanyun');
                                } else {
                                    target.loseHp();
                                }
                            },
                            ai: {
                                order: 7.5,
                                result: {
                                    target(player, target) {
                                        if (target.hp == 1) return -2;
                                        return 3;
                                    },
                                },
                            },
                            fullimage: true,
                        },
                        rqsj_dadishenghui: {
                            type: 'trick',
                            enable: true,
                            filterTarget: true,
                            content() {
                                if (target.hp == target.maxHp || target.countCards('h') <= target.hp) {
                                    target.draw(2);
                                } else {
                                    target.recover();
                                }
                            },
                            ai: {
                                order: 8,
                                result: {
                                    target: 2,
                                },
                            },
                            fullimage: true,
                        },
                        rqsj_cishaxingdong: {
                            audio: true,
                            type: 'delay',
                            filterTarget(card, player, target) {
                                return lib.filter.judge(card, player, target) && player != target;
                            },
                            judge(card) {
                                if (card.suit == 'heart') return 1;
                                return -4;
                            },
                            judge2(result) {
                                if (result.bool == false) return true;
                                return false;
                            },
                            effect() {
                                if (result.bool == false) {
                                    player.useSkill('rqsj_yuci');
                                }
                            },
                            ai: {
                                basic: {
                                    order: 1,
                                    useful: 1,
                                    value: 8,
                                },
                                result: {
                                    ignoreStatus: true,
                                    target(player, target) {
                                        var num = target.hp - target.countCards('h') - 2;
                                        if (num > -1) return -0.01;
                                        if (target.hp < 3) num--;
                                        if (target.isTurnedOver()) num /= 2;
                                        var dist = get.distance(player, target, 'absolute');
                                        if (dist < 1) dist = 1;
                                        return (num / Math.sqrt(dist)) * get.threaten(target, player);
                                    },
                                },
                                tag: {
                                    skip: 'phaseUse',
                                },
                            },
                            selectTarget: 1,
                            enable: true,
                            content() {
                                if (lib.filter.judge(card, player, target) && cards.length && get.position(cards[0], true) == 'o') target.addJudge(card, cards);
                            },
                            allowMultiple: false,
                            fullimage: true,
                        },
                        rqsj_chanhui: {
                            fullimage: true,
                        },
                        rqsj_jinli: {
                            audio: true,
                            type: 'delay',
                            modTarget(card, player, target) {
                                return lib.filter.judge(card, player, target);
                            },
                            enable(card, player) {
                                return player.canAddJudge(card);
                            },
                            filterTarget(card, player, target) {
                                return lib.filter.judge(card, player, target) && player == target;
                            },
                            selectTarget: [-1, -1],
                            judge(card) {
                                if (card.suit == 'diamond') return 5;
                                return -1;
                            },
                            judge2(result) {
                                if (result.bool == false) return true;
                                return false;
                            },
                            effect() {
                                if (result.bool == true) {
                                    player.draw(3);
                                } else {
                                    player.addJudgeNext(card);
                                }
                            },
                            cancel() {
                                player.addJudgeNext(card);
                            },
                            ai: {
                                basic: {
                                    order: 1,
                                    useful: 0,
                                    value: 0,
                                },
                                result: {
                                    target(player, target) {
                                        var num = game.countPlayer(function (current) {
                                            var skills = current.getSkills();
                                            for (var j = 0; j < current.skills.length; j++) {
                                                var rejudge = get.tag(current.skills[j], 'rejudge', current);
                                                if (rejudge != undefined) {
                                                    if (get.attitude(target, current) > 0 && get.attitude(current, target) > 0) {
                                                        return rejudge;
                                                    } else {
                                                        return -rejudge;
                                                    }
                                                }
                                            }
                                        });
                                        if (num > 0) return num;
                                        if (num == 0) {
                                            var mode = get.mode();
                                            if (mode == 'identity') {
                                                if (target.identity == 'nei') return 1;
                                                var situ = get.situation();
                                                if (target.identity == 'fan') {
                                                    if (situ > 1) return 1;
                                                } else {
                                                    if (situ < -1) return 1;
                                                }
                                            } else if (mode == 'guozhan') {
                                                if (target.identity == 'ye') return 1;
                                                if (
                                                    game.hasPlayer(function (current) {
                                                        return current.identity == 'unknown';
                                                    })
                                                ) {
                                                    return -1;
                                                }
                                                if (get.population(target.identity) == 1) {
                                                    if (target.maxHp > 2 && target.hp < 2) return 1;
                                                    if (game.countPlayer() < 3) return -1;
                                                    if (target.hp <= 2 && target.countCards('he') <= 3) return 1;
                                                }
                                            }
                                        }
                                        return -1;
                                    },
                                },
                                tag: {},
                            },
                            content() {
                                if (lib.filter.judge(card, player, target) && cards.length && get.position(cards[0], true) == 'o') target.addJudge(card, cards);
                            },
                            allowMultiple: false,
                            fullimage: true,
                        },
                        rqsj_zhaoxin: {
                            type: 'equip',
                            subtype: 'equip1',
                            distance: {
                                attackFrom: -3,
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
                            skills: ['rqsj_zhaoxinskill', 'rqsj_zhaoxin1'],
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
                            fullimage: true,
                        },
                        rqsj_jisiliguan: {
                            type: 'equip',
                            subtype: 'equip2',
                            skills: ['rqsj_jisiliguanskill'],
                            onLose() {
                                var next = game.createEvent('baiyin_recover');
                                event.next.remove(next);
                                var evt = event.parent;
                                if (evt.getlx === false) evt = evt.parent;
                                evt.after.push(next);
                                next.player = player;
                                next.setContent(function () {
                                    if (player.isDamaged()) player.recover();
                                    player.removeSkill('rqsj_huo');
                                    player.removeSkill('rqsj_feng');
                                    player.removeSkill('rqsj_tu');
                                    player.removeSkill('rqsj_shui');
                                });
                            },
                            filterLose(card, player) {
                                if (player.hasSkillTag('unequip2')) return false;
                                return true;
                            },
                            tag: {
                                recover: 1,
                            },
                            ai: {
                                order: 9.5,
                                equipValue(card, player) {
                                    if (player.hp == player.maxHp) return 5;
                                    if (player.countCards('h', 'baiyin')) return 6;
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
                            fullimage: true,
                        },
                        rqsj_fengzhidiyu: {
                            type: 'equip',
                            subtype: 'equip1',
                            distance: {
                                attackFrom: -2,
                            },
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
                            skills: ['fengzhidiyu_skill', 'fengzhiqingyus_skill'],
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
                            fullimage: true,
                        },
                    },
                    translate: {
                        anyegongjue: '蝙蝠恶灵',
                        mushi: '牧师',
                        meishi: '美食',
                        rqsj_chuxidacan: '除夕大餐',
                        rqsj_chuxidacan_info: '除夕佳节,染柒用最好的食材做了一桌除夕大餐,回复馈所有支持者.出牌阶段,对你使用.你摸3张牌,接下来的三个回合结束,摸一张牌.',
                        rqsj_youzhihuoji: '优质火鸡',
                        rqsj_youzhihuoji_info: '优质的火鸡,经过厨师之手,味道一定很棒.出牌阶段,对你使用.你摸1张牌或接下来的两个回合结束阶段,摸一张牌.',
                        rqsj_jinpaihuoji: '金牌火鸡',
                        rqsj_jinpaihuoji_info: '听说这只火鸡得过全市跑步第一!可它已经在你的餐桌上了,怎么办呢？出牌阶段,对你使用.你摸一张牌,接下来的两个回合结束阶段,各摸一张牌.',
                        rqsj_shengdanhuoji: '圣诞火鸡',
                        rqsj_shengdanhuoji_info: '这是为了迎接圣诞老人的到来特意准备的特大号火鸡,是不是很特别啊？出牌阶段,对你使用.你摸两张牌,接下来的三个回合结束,摸一张牌.',
                        lr_lingyao: '灵药',
                        lr_lingyao_info: '出牌阶段,对自己使用,回复一点体力.',
                        lr_duyao: '毒药',
                        lr_duyao_info: '当你因使用、打出或弃置而失去此牌时,你失去一点体力摸一张毒',
                        rqsj_xingchen: '星尘',
                        rqsj_xingchen_info: '令一名角色弃一摸一,若目标是自己,改为摸一弃一.使用后30%概率获得一点勇气',
                        dus: '毒素',
                        dus_info: '当你因使用、打出或弃置而失去此牌时,你失去一点体力',
                        rqsj_tiejiaxiongshi: '铁甲雄狮',
                        rqsj_tiejiaxiongshi_info: '锁定技,其他角色计算与你的距离+1.',
                        rqsj_shijiu: '狮鹫',
                        rqsj_shijiu_info: '锁定技,你计算与其他角色的距离-1.',
                        rqsj_wenyizhizhu: '瘟疫蜘蛛',
                        rqsj_wenyizhizhu_info: '锁定技,你计算与其他角色的距离-1.',
                        rqsj_xinghongdiyuzhanma: '猩红地狱战马',
                        rqsj_xinghongdiyuzhanma_info: '锁定技,你计算与其他角色的距离-1.',
                        rqsj_leijiao: '雷电之角',
                        rqsj_leijiao_info: '锁定技,你计算与其他角色的距离-1.',
                        rqsj_qingluan: '青鸟',
                        rqsj_qingluan_info: '锁定技,其他角色计算与你的距离+1.',
                        rqsj_mengy: '梦魇',
                        rqsj_mengy_info: '锁定技,其他角色计算与你的距离+1.',
                        rqsj_shidinianlong: '湿地黏龙',
                        rqsj_shidinianlong_info: '锁定技,其他角色计算与你的距离+1.',
                        rqsj_card_addshui: '水元素',
                        rqsj_card_addshui_info: "出牌阶段,目标角色附着<span style='color: #00BFFF;'>水元素</span>",
                        rqsj_card_addfeng: '风元素',
                        rqsj_card_addfeng_info: "出牌阶段,目标角色附着<span style='color: #ADFF2F;'>风元素</span>",
                        rqsj_card_addhuo: '火元素',
                        rqsj_card_addhuo_info: "出牌阶段,目标角色附着<span style='color:red;'>火元素</span>",
                        rqsj_card_addtu: '土元素',
                        rqsj_card_addtu_info: "出牌阶段,目标角色附着<span style='color: #B886CB;'>土元素</span>",
                        rqsj_fangxuezhiliao: '放血治疗',
                        rqsj_fangxuezhiliao_info: '出牌阶段,选择一名体力不满的角色,若其体力值大于一,则其流失一点体力并回复两点体力并移除其负面状态,否则其流失一点体力.',
                        rqsj_dadishenghui: '大地生辉',
                        rqsj_dadishenghui_info: '出牌阶段,选择一名角色,若其体力不满且小于手牌数,则其回复一点体力,否则其摸两张牌.',
                        rqsj_cishaxingdong: '刺杀行动',
                        rqsj_cishaxingdong_info: '出牌阶段,对一名其他角色使用.若判定结果不为♥️️,其选择弃置两张牌否则受到一点无来源伤害.',
                        rqsj_chanhui: '忏悔',
                        rqsj_chanhui_info: '',
                        rqsj_jinli: '锦鲤',
                        rqsj_jinli_info: '出牌阶段,对自己使用.若判定结果为♦️️,则目标角色摸3张牌.若判定不为♦️️,将之移动到下家的判定区里.',
                        rqsj_zhaoxin: '昭心',
                        rqsj_zhaoxin_info: '<li>出牌阶段限一次,你可以弃一张牌发动以下两项中的一项: ①你可以移除或为一名角色附加厄运状态. ②你可以将一名角色的一张手牌转化为星尘. <li>当有♠️️牌因判定而弃置时,你摸一张牌.',
                        rqsj_jisiliguan: '祭司礼冠',
                        rqsj_jisiliguan_info: '<li>当你附着元素后,若被元素附着,你可以随机摸一张牌或回复一点体力,如若此作,当前回合结束时,你随机附着一个元素.<li>锁定技,当你失去装备区里的【祭司礼冠】时,你回复1点体力并移除所有元素附着.',
                        rqsj_fengzhidiyu: '风之低语',
                        rqsj_fengzhidiyu_info: '<li>出牌阶段限一次,你可以发动以下两项中的一项:<br>①你可以将一张杀视为过河拆桥使用.<br>②你可以将一张非武器牌的装备牌视为杀使用或打出.',
                    },
                };
                for (const i in QQQ.card) {
                    const info = QQQ.card[i];
                    if (!info.image) {
                        if (info.fullskin) {
                            info.image = `ext:染柒的世界/image/${i}.png`;
                        }
                        else {
                            info.image = `ext:染柒的世界/image/${i}.jpg`;
                        }
                    }
                    lib.inpile.add(i);
                    if (info.mode && !info.mode.includes(lib.config.mode)) continue;
                    lib.card.list.push([lib.suits.randomGet(), lib.number.randomGet(), i]);
                }
                lib.config.all.cards.add('染柒的世界');
                lib.config.cards.add('染柒的世界');
                lib.translate.染柒的世界_card_config = '染柒的世界';
                return QQQ;
            });
        },
        config: {
            gengxin: {
                name: '更新日志',
                init: '1',
                item: {
                    1: '查看近五条',
                    3: '2022/08/15<li>更新内容:(1)上架破晓守卫.(2)重做影行者的技能.(3)新增按钮用于一键加强,缓解强度尴尬(依然彼此刮痧).(4)开新包<柒的杂论> 强度较高,欢迎入群体验(需单独下载).(5)支持活动武将扩展新项目:十周年捉鬼驱邪.',
                    4: '2022/08/03<li>更新内容:(1)上架影行者.(2)调整寰宇星城勤主ai.(3)上架武器风之低语.(4)优化游戏体验,在元素标记处添加了相关元素反应公式.(6)修复元素脆弱死机的bug.(6)没有第六个更新.',
                    5: '2022/07/26<li>更新内容:(1)上架柒闻轶事·烟雨墨染(技能是我设计的烟雨提出建议并修改的,我做了第一遍烟雨嫌我做的麻烦就自己操刀了).(2)上架武器昭心(绝不是某昭的专武).(3)上架防具祭司礼冠(4)重做兰斯二技能.(5)修复放血治疗在两滴血时流失两点体力的bug,修复大地生辉效果与描述不符的bug.(6)修复爪巴元素脆弱不是当前回合结束发动效果的bug.',
                    6: '2022/07/20<li>更新内容:(1)新增柒闻轶事·诗笺和柒闻轶事·爪巴.(2)增强辉烬贺流年,减少勇气值消耗!(3)修复风元素附着土元素时报错的bug.(4)削弱易命之昭,增加一点体力上限,将邪影智蚀改为仅在自己的回合结束能发动.(5)修复某些bug.',
                    2: '2022/08/27<li>更新内容:(1)上架柒闻轶事·竹林七闲.(2)增加狼人对决·乌鸦的技能.(3)新增乱斗模式<领域之战>,玩法类似家族之战源代码:同上,技术顾问:俺杀,欢迎体验.'
                }
            },
            zhinan: {
                name: '食用攻略',
                init: '1',
                item: {
                    1: '点击查看',
                    2: '为了手机的流畅性,请关闭千幻左慈,为了保证游戏平衡性,请关闭狼人对决.',
                    3: '某些名词讲解:<li>法力/勇气:游戏里某些角色用以发动技能的计量货币所有角色的法力值是同一个技能,但目前并未上架窃取他人法力的角色.',
                    4: '特殊状态介绍:<li>厄运:回合外使用,打出牌时,判定若为♠️️,则流失一点体力,通常只会持续至其的回合结束.<li>中毒:弃牌阶段开始时,摸一张毒素,并解除中毒状态.<li>眩晕:当你受到伤害后,你须随机弃置一张牌,并有55%概率移除该效果.<li>潜行:锁定技,你不能成为其他角色的卡牌的目标.',
                    5: '角色微调按钮:位于下方的按钮可以微调角色技能,长按显示效果,记得重启!',
                    6: '元素:每种阵营代表一种元素,其中[王国:水,精灵:风,蛮荒:土,地狱:火].在牌堆中每种元素各洗入两张,部分武将也可以通过技能为角色施加元素附着.<br>元素反应:<li>风+风  随机弃两张<li>风+火 雷击判定(梅1黑2)<li>风+水 连环附近<li>风+土 判定区置入兵粮和浮雷<li>火+火 受到火焰伤害并有30%重复<li>火+水 去除法力及勇气并使非锁定技失效直到回合结束<li>火+土 燃烧<li>水+水 翻面<li>水+土 中毒+手减1<li>土+土 护甲1'
                }
            },
            quntiup: {
                name: '全体加强',
                intro: '开启后重启游戏后生效,让大部分染柒的世界的武将加一体力上限.',
                init: false
            },
            faliup: {
                name: '法力吐息',
                intro: '开启后重启游戏后生效,拥有法力大于等于3的角色回合开始阶段获得一点法力.',
                init: false
            },
            xingchenup: {
                name: '彗星袭月',
                intro: '开启后重启游戏后生效,使用星尘指定自己后改为摸二弃一.',
                init: false
            },
            zhanyitianshiup: {
                name: '取消战疫天使觉醒对勇气的需求',
                intro: '开启后重启游戏后生效,取消战疫天使觉醒对勇气的需求.',
                init: false
            },
            duoluojinglingup: {
                name: '堕落精灵加强至40%',
                intro: '开启后重启游戏后生效,堕落精灵技能概率将提升至40%.',
                init: false
            },
            jinglingwangziup: {
                name: '精灵王子开局灵蝶',
                intro: '开启后重启游戏后生效,精灵王子开局将减一体力上限获得3个灵蝶.',
                init: false
            }
        },
        package: {
            intro: '<br><br><span style="color: gold">潜水的火修复版<br>『无名杀扩展大全群』:771901025</span><br><br><li>这是染柒的胡思乱想...感谢三年来大家对我的支持与帮助.技能指导:部分技能询问了群里许多大佬<li>扩展武将强度:与界限突破的一般武将相差无几<li>不喜欢非三国武将的可以在武将界面设置ai禁选<li>所有没有技能的武将均为预告,已默认ai禁选<li>本扩展有个特点:自由选择身份主公的时候会卡一下代码,但并不影响实际使用,再点一次选择主公即可.<li>如有任何建议或者发现任何bug请在群里找"我是染柒"',
            author: '染柒',
            version: '5.0.3',
        },
    };
});

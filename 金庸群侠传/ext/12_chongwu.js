'use strict';
window.jyimport(function(lib, game, ui, get, ai, _status) {
    game.import('character', function() {
        lib.config.all.characters.add('jy_chongwu');
        lib.config.characters.add('jy_chongwu');
        lib.translate.jy_chongwu_character_config = '<img style=width:100px src=extension/金庸群侠传/image/title/jy_title_chongwu.jpg>';
        var jygetRound = function(isnum) {
            var cfg = lib.config.extension_金庸群侠传_jy_chongwu;
            if (cfg) {
                if (cfg == '20') {
                    return isnum ? 0.2 : '20';
                } else if (cfg == '40') {
                    return isnum ? 0.4 : '40';
                } else if (cfg == '60') {
                    return isnum ? 0.6 : '60';
                } else if (cfg == '80') {
                    return isnum ? 0.8 : '80';
                }
            }
            return isnum ? 0.6 : '60';
        };
        lib.jycw_listName = ['jycw_shandiandiao', 'jycw_shuangdiao', 'jycw_caoyuandiao', 'jycw_mangguzhuha', 'jycw_jiuweilinghu', 'jycw_tonglingbaiyuan', 'jycw_jufushe', 'jycw_ahuanggou', 'jycw_liuhouer', 'jycw_yufeng'];
        lib.jycw_listName2 = ['jycw_falaoyaomao', 'jycw_niluoheshuiguai', 'jycw_mowangtianxie', 'jycw_taotie'];
        lib.jycw_banlistName = [];
        var jy_chongwu = {
            name: 'jy_chongwu',
            connect: true,
            characterFilter: {
                jycw_shandiandiao(mode) {
                    return false;
                },
                jycw_shuangdiao(mode) {
                    return false;
                },
                jycw_caoyuandiao(mode) {
                    return false;
                },
                jycw_mangguzhuha(mode) {
                    return false;
                },
                jycw_jiuweilinghu(mode) {
                    return false;
                },
                jycw_tonglingbaiyuan(mode) {
                    return false;
                },
                jycw_jufushe(mode) {
                    return false;
                },
                jycw_ahuanggou(mode) {
                    return false;
                },
                jycw_liuhouer(mode) {
                    return false;
                },
                jycw_yufeng(mode) {
                    return false;
                },
                //--------------------------------------------------//
                jycw_falaoyaomao(mode) {
                    return false;
                },
                jycw_niluoheshuiguai(mode) {
                    return false;
                },
                jycw_mowangtianxie(mode) {
                    return false;
                },
                jycw_taotie(mode) {
                    return false;
                },
                //--------------------------------------------------//
                jycw_baiban(mode) {
                    return false;
                },
            },
            characterSort: {
                jy_chongwu: {
                    jy_chongwu_ling: ['jycw_shandiandiao', 'jycw_shuangdiao', 'jycw_caoyuandiao', 'jycw_mangguzhuha', 'jycw_jiuweilinghu', 'jycw_tonglingbaiyuan', 'jycw_jufushe', 'jycw_ahuanggou', 'jycw_liuhouer', 'jycw_yufeng'],
                    jycw_mingshou: ['jycw_falaoyaomao', 'jycw_niluoheshuiguai', 'jycw_mowangtianxie', 'jycw_taotie'],
                },
            },
            character: {
                jycw_shandiandiao: ['male', 'jy_chong', 0, ['jycw_jidian'], ['forbidai']],
                jycw_shuangdiao: ['male', 'jy_chong', 0, ['jycw_gongsheng'], ['forbidai']],
                jycw_caoyuandiao: ['male', 'jy_chong', 0, ['jycw_yingshi'], ['forbidai']],
                jycw_mangguzhuha: ['male', 'jy_chong', 0, ['jycw_zhidu'], ['forbidai']],
                jycw_jiuweilinghu: ['male', 'jy_chong', 0, ['jycw_jiuwei'], ['forbidai']],
                jycw_tonglingbaiyuan: ['male', 'jy_chong', 0, ['jycw_shoushu', 'jycw_xianguo'], ['forbidai']],
                jycw_jufushe: ['male', 'jy_chong', 0, ['jycw_dushi'], ['forbidai']],
                jycw_ahuanggou: ['male', 'jy_chong', 0, ['jycw_zhongquan'], ['forbidai']],
                jycw_liuhouer: ['male', 'jy_chong', 0, ['jycw_niangjiu'], ['forbidai']],
                jycw_yufeng: ['male', 'jy_chong', 0, ['jycw_yuzhen'], ['forbidai']],
                //------------------------------------------------------------------------------//
                jycw_falaoyaomao: ['male', 'jy_chong2', 0, ['jycw_yexun'], ['forbidai']],
                jycw_niluoheshuiguai: ['male', 'jy_chong2', 0, ['jycw_hailang'], ['forbidai']],
                jycw_mowangtianxie: ['male', 'jy_chong2', 0, ['jycw_dubi'], ['forbidai']],
                jycw_taotie: ['male', 'jy_chong2', 0, ['jycw_langtan'], ['forbidai']],
                //------------------------------------------------------------------------------//
                jycw_baiban: ['male', 'jy_chong', 0, [], ['forbidai', 'unseen']],
            },
            characterIntro: {
                jycw_shandiandiao: '<br><p>闪电貂，出自金庸小说《天龙八部》，钟灵所养，只听钟灵一个人的指令，特别护主。闪电貂爱吃毒蛇，别的什么也不吃，所以身毒性，被它咬到的人，除非服食特制解药，否则很快毒发毙命。',
                jycw_caoyuandiao: '<br><p>蒙古人喜好养雕，用来象征权利和武力，充满了侵略者的狂妄与自大。',
                jycw_shuangdiao: '<br><p>白色双雕乃是郭靖的神宠，极具灵性。草原上诸人发现一对体型巨大的白雕，受到黑雕围攻，寡不敌众而一同殒命，郭靖发现他们留下的一对小雕在悬崖之顶，马钰道长纵身一跃捉到两头小雕，送给郭靖和华筝一人一只，悉心照料后都成了郭靖的了。<p>再后来郭靖连人带雕都成黄蓉的了，白色双雕长大后一直跟随郭靖夫妇左右，多次在关键时刻帮助郭靖与黄蓉脱险，在大战金轮大王时黄蓉指示白雕攻击金轮，结果被金轮活活打死，另一只白雕将小郭襄从断肠崖驼上来之后，也撞崖而死，实在可惜，这也正是体现了血浓于水的兄妹之情。',
                jycw_mangguzhuha: '<br><p>莽牯朱蛤出自金庸武侠小说《天龙八部》，号称“万毒之王”。后段誉误食以致百毒不侵。形似蛤蟆，长不逾两寸，全身殷红胜血，眼睛闪闪发出金光，声若牯牛，全身朱红，故名莽牯朱蛤。',
                jycw_jiuweilinghu: '<br><p>九尾狐，是金庸武侠作品《神雕侠侣》中的一只神兽，是瑛姑所养。奔跑速度很快，能在沼泽上跑。九尾狐的速度有多快？十六年后的杨过，也追不上它！当然，这是在沼泽里面跑，杨过有劣势。如果在平地上跑，杨过不一定追不上他。驯兽的史家五兄弟，金甲狮王受了严重的内伤，需要九尾灵狐的血。',
                jycw_tonglingbaiyuan: '<br><p>张无忌被朱长龄陷害，跌落悬崖，无意间发现了一个世外桃源。在这里，张无忌遇到了一只受伤的白猿。<p>这只白猿原本是华山上被潇湘子和尹克西绑架的猿猴，历经沧桑岁月，终于毛发皆白。因腹中被藏入《九阳真经》，白猿常年遭受皮肉之苦，直到张无忌出手帮助才得以解脱。<p>白猿非常有灵性，而且知恩图报，为张无忌采摘来一个巨大的仙桃，以之来报答他的恩情。鲜果也助力了张无忌练习九阳真经的进程，后来得以逃出生天，号令群雄。',
            },
            characterTitle: {
                jycw_shandiandiao: '忠心护主',
                jycw_caoyuandiao: '鹰视狼顾',
                jycw_shuangdiao: '同生共死',
                jycw_mangguzhuha: '万毒之王',
                jycw_jiuweilinghu: '称号',
            },
            perfectPair: {},
            card: {
                jycw_huanshouwushu: {
                    derivation: 'jycw_baiban',
                    image: 'ext:金庸群侠传/image/equip/jycw_huanshouwushu.png',
                    audio: 'ext:金庸群侠传/peiyin',
                    fullskin: true,
                    type: 'trick',
                    enable(card, target) {
                        if (!card.jy_guiguai && !get.isXingShi(target, false)) return false;
                        return true;
                    },
                    selectTarget: -1,
                    cardcolor: 'red',
                    toself: true,
                    filterTarget(card, player, target) {
                        if (target != player) return false;
                        return lib.card.jycw_huanshouwushu.modTarget(card, player, target);
                    },
                    modTarget(card, player, target) {
                        if (target.name2 && lib.character[target.name2]) {
                            return false;
                        }
                        if (!card.jy_guiguai && !get.isXingShi(target, false)) return false;
                        var list = lib.jycw_listName2.filter(function(i) {
                            return !game.hasPlayer2(function(current) {
                                return current.name2 && current.name2 == i;
                            });
                        });
                        list = list.filter((i) => !lib.jycw_banlistName.includes(i));
                        if (!list.length) return false;
                        return true;
                    },
                    content() {
                        'step 0';
                        if (target.name2 && lib.character[target.name2]) {
                            event.finish();
                            return;
                        }
                        var list = lib.jycw_listName2.filter(function(i) {
                            return !game.hasPlayer2(function(current) {
                                return current.name2 && current.name2 == i;
                            });
                        });
                        list = list.filter((i) => !lib.jycw_banlistName.includes(i));
                        if (!list.length) event.finish();
                        event.gainList = list;
                        ('step 1');
                        if (lib.config.extension_金庸群侠传_jy_chongwu4 && event.gainList.length > 1) {
                            var next = target.chooseButton(['选择要召唤的冥兽', [event.gainList, 'character']], true);
                            next.set('ai', function(button) {
                                var player = _status.event.player;
                                var name = button.link;
                                var rand = Math.random();
                                return rand;
                            });
                        } else {
                            event._result = { bool: true, links: event.gainList.randomGets(1) };
                        }
                        ('step 2');
                        if (result.bool && result.links && result.links.length) {
                            var chongwu = result.links[0];
                            lib.card.jycw_baishoujinglin.gainChongWu(target, chongwu);
                        }
                    },
                    ai: {
                        basic: {
                            order: 12,
                            useful: 3,
                            value: 4,
                        },
                        result: {
                            target: 1,
                        },
                    },
                },
                jycw_baishoujinglin: {
                    derivation: 'jycw_baiban',
                    image: 'ext:金庸群侠传/image/equip/jycw_baishoujinglin.png',
                    audio: 'ext:金庸群侠传/peiyin',
                    fullskin: true,
                    type: 'trick',
                    enable(card, target) {
                        if (get.isXingShi(target, false)) return false;
                        return true;
                    },
                    selectTarget: -1,
                    cardcolor: 'red',
                    toself: true,
                    banList: ['ywhy_zongzi_female', 'ywhy_zongzi_male', 'ywhy_jiangshi_female', 'ywhy_jiangshi_male', 'ywhy_feijiang_female', 'ywhy_feijiang_male', 'ywhy_aijifalao', 'ywhy_yaojiyuanling', 'ywhy_shizumingdi', 'ywhy_moxiedadi', 'ywhy_lianjiafalao'],
                    getRound: jygetRound,
                    loseChongWu(player, chongwu, loseBool) {
                        if (player.name2 != chongwu) return;
                        var next = game.createEvent('loseChongWu', false);
                        next.player = player;
                        next.chongWu = chongwu;
                        next.loseBool = loseBool;
                        next.forceDie = true;
                        if (lib.jycw_listName.includes(chongwu)) next.type = 'lingShou';
                        if (lib.jycw_listName2.includes(chongwu)) next.type = 'mingShou';
                        next.setContent(function() {
                            lib.card.jycw_baishoujinglin.remove_chongwu(player, event.chongWu);
                            event.trigger('loseChongWu');
                            if (_status.jy_chongwu && _status.jy_chongwu[event.chongWu]) {
                                if (event.loseBool) player.$throw(_status.jy_chongwu[event.chongWu], 1000);
                            }
                        });
                        return next;
                    },
                    gainChongWu(player, chongwu, source) {
                        var next = game.createEvent('gainChongWu', false);
                        next.player = player;
                        next.source = source;
                        next.chongWu = chongwu;
                        next.forceDie = true;
                        if (lib.jycw_listName.includes(chongwu)) next.type = 'lingShou';
                        if (lib.jycw_listName2.includes(chongwu)) next.type = 'mingShou';
                        next.setContent(function() {
                            'step 0';
                            var list = event.type == 'mingShou' ? lib.jycw_listName2 : lib.jycw_listName;
                            if (player.name2 && list.includes(player.name2)) lib.card.jycw_baishoujinglin.loseChongWu(player, player.name2, true);
                            ('step 1');
                            lib.card.jycw_baishoujinglin.add_chongwu(player, event.chongWu);
                            event.trigger('gainChongWu');
                            if (_status.jy_chongwu && _status.jy_chongwu[event.chongWu]) {
                                if (source) {
                                    source.$give(_status.jy_chongwu[event.chongWu], player, false);
                                } else {
                                    player.$gain2(_status.jy_chongwu[event.chongWu]);
                                }
                            }
                        });
                        return next;
                    },
                    add_chongwu(player, name) {
                        player.name2 = 'jycw_baiban';
                        player.classList.add('fullskin2');
                        player.reinit(player.name2, name, [player.hp, player.maxHp]);
                        player.node.avatar2.show();
                        player.node.count.classList.add('p2');
                        player.node.name2.show();
                        game.log(player, '获得了', { name: name });
                    },
                    remove_chongwu(player, name) {
                        player.reinit(player.name2, 'jycw_baiban', [player.hp, player.maxHp]);
                        delete player.name2;
                        player.classList.remove('fullskin2');
                        player.node.avatar2.hide();
                        player.node.count.classList.remove('p2');
                        player.node.name2.hide();
                        game.log(player, '失去了', { name: name });
                    },
                    filterTarget(card, player, target) {
                        if (target != player) return false;
                        return lib.card.jycw_baishoujinglin.modTarget(card, player, target);
                    },
                    modTarget(card, player, target) {
                        if (target.name2 && lib.character[target.name2]) {
                            return false;
                        }
                        if (get.isXingShi(target, false)) return false;
                        var list = lib.jycw_listName.filter(function(i) {
                            return !game.hasPlayer2(function(current) {
                                return current.name2 && current.name2 == i;
                            });
                        });
                        list = list.filter((i) => !lib.jycw_banlistName.includes(i));
                        if (!list.length) return false;
                        return true;
                    },
                    content() {
                        'step 0';
                        if (target.name2 && lib.character[target.name2]) {
                            event.finish();
                            return;
                        }
                        var list = lib.jycw_listName.filter(function(i) {
                            return !game.hasPlayer2(function(current) {
                                return current.name2 && current.name2 == i;
                            });
                        });
                        list = list.filter((i) => !lib.jycw_banlistName.includes(i));
                        if (!list.length) event.finish();
                        event.gainList = list;
                        ('step 1');
                        if (lib.config.extension_金庸群侠传_jy_chongwu4 && event.gainList.length > 1) {
                            var next = target.chooseButton(['选择要召唤的宠物', [event.gainList, 'character']], true);
                            next.set('ai', function(button) {
                                var player = _status.event.player;
                                var name = button.link;
                                var rand = Math.random();
                                var info = lib.skill._jycw_remove_chongwu;
                                if (!info) return rand;
                                if (!info.jycw_name || !info.jycw_name[name]) return rand;
                                if (info.jycw_name[name](player) === false) {
                                    //game.log(player,name,2)
                                    return 2;
                                }
                                return rand;
                            });
                        } else {
                            event._result = { bool: true, links: event.gainList.randomGets(1) };
                        }
                        ('step 2');
                        if (result.bool && result.links && result.links.length) {
                            var chongwu = result.links[0];
                            lib.card.jycw_baishoujinglin.gainChongWu(target, chongwu);
                        }
                    },
                    ai: {
                        basic: {
                            order: 12,
                            useful: 3,
                            value: 4,
                        },
                        result: {
                            target: 1,
                        },
                    },
                },
            },
            skill: {
                _jycw_qizchongwu: {
                    enable: 'phaseUse',
                    charlotte: true,
                    usable: 1,
                    filter(event, player) {
                        var name = 'jycw_huanshouwushu';
                        if (get.isXingShi(player, false)) name = 'jycw_baishoujinglin';
                        if (
                            !player.countCards('h', function(card) {
                                if (card.name != name) return false;
                                return lib.filter.cardDiscardable(card, player, event);
                            })
                        )
                            return false;
                        return game.hasPlayer(function(current) {
                            return lib.skill._jycw_qizchongwu.filterTarget({ name: name }, player, current);
                        });
                    },
                    filterCard(card, player, event) {
                        var name = 'jycw_huanshouwushu';
                        if (get.isXingShi(player, false)) name = 'jycw_baishoujinglin';
                        if (card.name != name) return false;
                        return lib.filter.cardDiscardable(card, player, event);
                    },
                    check(card) {
                        return 9 - get.value(card);
                    },
                    filterTarget(card, player, target) {
                        if (target == player) return false;
                        if (get.isXingShi(target, false) == get.isXingShi(player, false)) return false;
                        var name = card.name;
                        var list = name == 'jycw_huanshouwushu' ? lib.jycw_listName2 : lib.jycw_listName;
                        if (!target.name2 || !lib.character[target.name2]) return false;
                        if (!list.includes(target.name2)) return false;
                        return true;
                    },
                    content() {
                        lib.card.jycw_baishoujinglin.loseChongWu(target, target.name2);
                    },
                    ai: {
                        order: 9,
                        result: {
                            target(player, target) {
                                return -1;
                            },
                        },
                    },
                },
                _jycw_give_chongwu2: {
                    trigger: { player: 'die' },
                    direct: true,
                    forceDie: true,
                    forced: true,
                    popup: false,
                    charlotte: true,
                    filterx(event, player) {
                        if (!player.name2 || !lib.character[player.name2]) return false;
                        if (!lib.jycw_listName2.includes(player.name2)) return false;
                        var players = game.filterPlayer(function(current) {
                            if (current == player) return false;
                            if (current.name2 && lib.character[current.name2]) return false;
                            if (!get.isXingShi(current, false)) return false;
                            return true;
                        });
                        if (players.length) {
                            return true;
                        }
                        return false;
                    },
                    content() {
                        'step 0';
                        if (lib.skill['_jycw_give_chongwu2'].filterx(null, player)) {
                            player
                                .chooseTarget('是否将你的' + get.translation(player.name2) + '交给一名没有副将的其他行尸角色?', function(card, player, target) {
                                    if (target.name2 && lib.character[target.name2]) return false;
                                    if (!get.isXingShi(target, false)) return false;
                                    return player != target;
                                })
                                .set('forceDie', true)
                                .set('ai', function(target) {
                                    var num = get.attitude(_status.event.player, target);
                                    return num;
                                })
                                .set('sourcex', trigger.source);
                        } else {
                            event._result = { bool: false };
                        }
                        ('step 1');
                        if (result.bool) {
                            var target = result.targets[0];
                            player.line(target, 'green');
                            var chongwu = player.name2;
                            game.log(player, '将', { name: chongwu }, '交给了', target);
                            lib.card.jycw_baishoujinglin.loseChongWu(player, chongwu);
                            lib.card.jycw_baishoujinglin.gainChongWu(target, chongwu, player);
                        } else {
                            if (!player.name2 || !lib.character[player.name2]) return;
                            if (!lib.jycw_listName2.includes(player.name2)) return;
                            lib.card.jycw_baishoujinglin.loseChongWu(player, player.name2, true);
                        }
                    },
                    ai: {
                        expose: 0.5,
                    },
                },
                _jycw_give_chongwu: {
                    trigger: { player: 'die' },
                    direct: true,
                    forceDie: true,
                    forced: true,
                    popup: false,
                    charlotte: true,
                    filterx(event, player) {
                        if (!player.name2 || !lib.character[player.name2]) return false;
                        if (!lib.jycw_listName.includes(player.name2)) return false;
                        var players = game.filterPlayer(function(current) {
                            if (current == player) return false;
                            if (current.name2 && lib.character[current.name2]) return false;
                            if (get.isXingShi(current, false)) return false;
                            return true;
                        });
                        if (players.length) {
                            return true;
                        }
                        return false;
                    },
                    content() {
                        'step 0';
                        if (lib.skill._jycw_give_chongwu.filterx(null, player)) {
                            player
                                .chooseTarget('是否将你的' + get.translation(player.name2) + '交给一名没有副将的其他人类角色?', function(card, player, target) {
                                    if (target.name2 && lib.character[target.name2]) return false;
                                    if (get.isXingShi(target, false)) return false;
                                    return player != target;
                                })
                                .set('forceDie', true)
                                .set('ai', function(target) {
                                    var num = get.attitude(_status.event.player, target);
                                    return num;
                                })
                                .set('sourcex', trigger.source);
                        } else {
                            event._result = { bool: false };
                        }
                        ('step 1');
                        if (result.bool) {
                            var target = result.targets[0];
                            player.line(target, 'green');
                            var chongwu = player.name2;
                            game.log(player, '将', { name: chongwu }, '交给了', target);
                            lib.card.jycw_baishoujinglin.loseChongWu(player, chongwu);
                            lib.card.jycw_baishoujinglin.gainChongWu(target, chongwu, player);
                        } else {
                            if (!player.name2 || !lib.character[player.name2]) return;
                            if (!lib.jycw_listName.includes(player.name2)) return;
                            lib.card.jycw_baishoujinglin.loseChongWu(player, player.name2, true);
                        }
                    },
                    ai: {
                        expose: 0.5,
                    },
                },
                _jycw_remove_chongwu: {
                    jycw_name: {
                        jycw_shandiandiao(player) {
                            if (get.jy_nameCNBool(player, '钟灵', false)) return false;
                            return true;
                        },
                        jycw_jiuweilinghu(player) {
                            if (get.jy_nameCNBool(player, '瑛姑', false)) return false;
                            return true;
                        },
                        jycw_shuangdiao(player) {
                            if (get.jy_nameCNBool(player, '郭靖', false)) return false;
                            return true;
                        },
                        jycw_caoyuandiao(player) {
                            if (get.jy_nameCNBool(player, ['铁木真', '拖雷'], false)) return false;
                            return true;
                        },
                        jycw_mangguzhuha(player) {
                            if (get.jy_nameCNBool(player, '段誉', false)) return false;
                            return true;
                        },
                        jycw_tonglingbaiyuan(player) {
                            if (get.jy_nameCNBool(player, '张无忌', false)) return false;
                            return true;
                        },
                        jycw_jufushe(player) {
                            if (get.jy_nameCNBool(player, ['郭靖', '梁子翁'], false)) return false;
                            return true;
                        },
                        jycw_ahuanggou(player) {
                            if (get.jy_nameCNBool(player, '石破天', false)) return false;
                            return true;
                        },
                        jycw_liuhouer(player) {
                            if (get.jy_nameCNBool(player, ['陆大有', '令狐冲'], false)) return false;
                            return true;
                        },
                        jycw_yufeng(player) {
                            if (get.jy_nameCNBool(player, ['小龙女', '周伯通'], false)) return false;
                            return true;
                        },
                    },
                    trigger: { player: 'phaseJieshuBegin' },
                    forced: true,
                    popup: false,
                    charlotte: true,
                    content() {
                        if (player.isLinked()) return;
                        if (!player.name2 || !lib.character[player.name2]) return;
                        if (!lib.jycw_listName.includes(player.name2)) return;
                        var info = lib.skill._jycw_remove_chongwu;
                        if (!info) return;
                        if (!info.jycw_name || !info.jycw_name[player.name2]) return;
                        if (player.storage[player.name2]) return;
                        var rand = Math.random();
                        var num = lib.card.jycw_baishoujinglin.getRound(true);
                        if (rand >= num) return;
                        var bool = info.jycw_name[player.name2](player);
                        if (bool) {
                            var players = game.filterPlayer(function(current) {
                                if (current == player) return false;
                                if (current.name2 && lib.character[current.name2]) return false;
                                if (get.isXingShi(current, false)) return false;
                                return true;
                            });
                            if (players.length) {
                                var target = players.randomGet();
                                var chongwu = player.name2;
                                game.log(player, '的', { name: chongwu }, '跑到了', target);
                                lib.card.jycw_baishoujinglin.loseChongWu(player, chongwu);
                                lib.card.jycw_baishoujinglin.gainChongWu(target, chongwu, player);
                                player.line(target);
                            }
                        }
                    },
                },
                _jycw_remove_chongwu2: {
                    trigger: { player: 'phaseJieshuBegin' },
                    forced: true,
                    popup: false,
                    charlotte: true,
                    content() {
                        if (player.isLinked()) return;
                        if (!player.name2 || !lib.character[player.name2]) return;
                        if (!lib.jycw_listName2.includes(player.name2)) return;
                        //var info=lib.skill._jycw_remove_chongwu;
                        //if(!info) return;
                        //if(!info.jycw_name||!info.jycw_name[player.name2]) return;
                        if (player.storage[player.name2]) return;
                        var rand = Math.random();
                        var num = lib.card.jycw_baishoujinglin.getRound(true);
                        if (rand >= num) return;
                        var players = game.filterPlayer(function(current) {
                            if (current == player) return false;
                            if (current.name2 && lib.character[current.name2]) return false;
                            if (!get.isXingShi(current, false)) return false;
                            return true;
                        });
                        if (players.length) {
                            var target = players.randomGet();
                            var chongwu = player.name2;
                            game.log(player, '的', { name: chongwu }, '跑到了', target);
                            lib.card.jycw_baishoujinglin.loseChongWu(player, chongwu);
                            lib.card.jycw_baishoujinglin.gainChongWu(target, chongwu, player);
                            player.line(target);
                        }
                    },
                },
                _jycw_addCard: {
                    trigger: { player: 'phaseBefore' },
                    forced: true,
                    popup: false,
                    filter(event, player) {
                        return game.phaseNumber == 0;
                    },
                    charlotte: true,
                    content() {
                        game.removeGlobalSkill('_jycw_addCard');
                        _status.jy_chongwu = {};
                        for (var i in lib.characterPack.jy_chongwu) {
                            if (!lib.character[i]) lib.character[i] = lib.characterPack.jy_chongwu[i];
                            var cardname = 'chongwu_card_' + i;
                            lib.card[cardname] = {
                                fullimage: true,
                                image: 'character:' + i,
                            };
                            lib.translate[cardname] = lib.translate[i];
                            _status.jy_chongwu[i] = game.createCard2(cardname, '', '');
                        }
                        if (!lib.config.extension_金庸群侠传_jy_chongwu || lib.config.extension_金庸群侠传_jy_chongwu == 'off') {
                            game.log('宠物包关闭！');
                            return;
                        }
                        lib.inpile.add('jycw_baishoujinglin');
                        var cards = [game.createCard2('jycw_baishoujinglin', null, null), game.createCard2('jycw_baishoujinglin', null, null), game.createCard2('jycw_baishoujinglin', null, null), game.createCard2('jycw_baishoujinglin', null, null)];
                        game.log(cards, '洗入了牌堆！');
                        while (cards.length) {
                            var num = get.rand(ui.cardPile.childElementCount);
                            var card = cards.pop();
                            card.fix();
                            ui.cardPile.insertBefore(card, ui.cardPile.childNodes[num]);
                        }
                        game.updateRoundNumber();
                    },
                },
                jycw_yingshi: {
                    audio: 'ext:金庸群侠传/peiyin:1',
                    enable: 'phaseUse',
                    usable: 1,
                    selectCard: -1,
                    selectTarget() {
                        var player = _status.event.player;
                        if (get.jy_nameCNBool(player, ['铁木真', '拖雷'], false)) return [1, 2];
                        return [1, 1];
                    },
                    filterCard() {
                        return false;
                    },
                    filterTarget(card, player, target) {
                        if (player == target) return false;
                        if (!target.countCards('h')) return false;
                        return true;
                    },
                    charlotte: true,
                    content() {
                        if (target.countGainableCards(player, 'h')) {
                            player.gainPlayerCard('h', target, true, 'visible');
                        } else if (target.countCards('h')) {
                            player.viewHandcards(target);
                        }
                    },
                    ai: {
                        order: 8,
                        result: {
                            target(player, target) {
                                if (target.countGainableCards(player, 'h')) return -1;
                                return 0;
                            },
                        },
                    },
                },
                jycw_zhidu3: {
                    audio: 'jycw_zhidu',
                    trigger: { player: 'damageBegin4' },
                    charlotte: true,
                    mark: true,
                    nopop: true,
                    intro: {
                        name: '朱蛤',
                        content: '锁定技，防止你受到的属性伤害',
                    },
                    filter(event, player) {
                        if (event.hasNature()) return true;
                        return false;
                    },
                    forced: true,
                    content() {
                        trigger.cancel();
                    },
                    ai: {
                        noice: true,
                        nojy_xie: true,
                        nojy_du: true,
                        nofire: true,
                        nothunder: true,
                        effect: {
                            target(card, player, target, current, isLink) {
                                if (player.hasSkillTag('jueqing', false, target)) return;
                                if (game.hasNature(card) || get.tag(card, 'natureDamage')) return 'zerotarget';
                                if (card.name == 'tiesuo') {
                                    return [0, 0];
                                }
                            },
                        },
                    },
                },
                jycw_zhidu2: {
                    audio: 'jycw_zhidu',
                    forced: true,
                    priority: 100,
                    firstDo: true,
                    popup: false,
                    nopop: true,
                    charlotte: true,
                    mod: {
                        cardname(card, player) {
                            if (get.itemtype(card) == 'card' && card.hasGaintag('jycw_zhidu')) return 'sha';
                        },
                        cardnature(card, player) {
                            if (get.itemtype(card) == 'card' && card.hasGaintag('jycw_zhidu')) return 'jy_du';
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
                    trigger: { player: 'loseEnd' },
                    content() {
                        var cards = player.getCards('h', function(card) {
                            return card.hasGaintag('jycw_zhidu');
                        });
                        if (!cards.length) {
                            player.removeSkill('jycw_zhidu2');
                        }
                    },
                },
                jycw_zhidu: {
                    enable: 'phaseUse',
                    usable: 1,
                    selectCard: -1,
                    audio: 'ext:金庸群侠传/peiyin:1',
                    filterCard() {
                        return false;
                    },
                    filterTarget(card, player, target) {
                        return player != target && target.countCards('h') > 0;
                    },
                    charlotte: true,
                    content() {
                        var hs = target.getCards('h');
                        target.addGaintag(hs, 'jycw_zhidu');
                        target.addSkill('jycw_zhidu2');
                        //player.addTempSkill('jycw_zhidu3',{player:'phaseZhunbeiBegin'});
                    },
                    ai: {
                        order: 8,
                        result: {
                            target(player, target) {
                                return -1;
                            },
                        },
                    },
                },
                jycw_jidian: {
                    audio: 'ext:金庸群侠传/peiyin:1',
                    enable: 'phaseUse',
                    usable: 1,
                    selectCard: -1,
                    selectTarget() {
                        var player = _status.event.player;
                        if (get.jy_nameCNBool(player, '钟灵', false)) return [1, 2];
                        return [1, 1];
                    },
                    filterCard() {
                        return false;
                    },
                    filterTarget(card, player, target) {
                        return player != target;
                    },
                    charlotte: true,
                    content() {
                        target.damage('nocard', 'jy_du');
                    },
                    ai: {
                        damage: true,
                        order: 8,
                        result: {
                            target(player, target) {
                                var att = get.attitude(player, target);
                                var effect = get.damageEffect(target, player, player, 'jy_du');
                                if (att < 0 && effect > 0) return -1;
                                return 0;
                            },
                        },
                    },
                },
                jycw_gongsheng2: {
                    audio: 'jycw_gongsheng',
                    forced: true,
                    priority: 100,
                    firstDo: true,
                    charlotte: true,
                    nopop: true,
                    trigger: { global: ['drawEnd', 'recoverEnd'] },
                    filter(event, player) {
                        var target = player.storage['jycw_gongsheng2'];
                        if (!target) return false;
                        if (target == player) return false;
                        if (target != event.player) return false;
                        if (event.num < 1) return false;
                        if (event.name == 'draw') {
                            var num = player.getHistory('custom', function(evt) {
                                return evt['jycw_gongsheng2'] == true;
                            }).length;
                            if (num >= 2) return false;
                            return true;
                        }
                        return player.isDamaged();
                    },
                    onremove(player, skill) {
                        player.unmarkSkill(skill);
                        delete player.storage[skill];
                    },
                    content() {
                        var _args = [trigger.num];
                        if (trigger.name == 'recover') _args.push('nosource');
                        player[trigger.name].apply(player, _args);
                        if (trigger.name == 'draw') {
                            player.getHistory('custom').push({ jycw_gongsheng2: true });
                        }
                        trigger.player.line(player);
                    },
                },
                jycw_gongsheng: {
                    audio: 'ext:金庸群侠传/peiyin:1',
                    enable: 'phaseUse',
                    usable: 1,
                    selectCard: -1,
                    filterCard() {
                        return false;
                    },
                    filterTarget(card, player, target) {
                        return player != target;
                    },
                    charlotte: true,
                    content() {
                        player.markSkillCharacter('jycw_gongsheng2', target, '共生', '该角色摸牌后或回复体力后，你执行相同的操作。');
                        player.storage['jycw_gongsheng2'] = target;
                        player.addTempSkill('jycw_gongsheng2', { player: 'phaseZhunbeiBegin' });
                    },
                    ai: {
                        order: 8,
                        result: {
                            player: 1,
                        },
                    },
                },
                jycw_jiuwei: {
                    mark: true,
                    marktext: '尾',
                    init(player, name) {
                        if (typeof _status[name] != 'number') _status[name] = 9;
                        player.markSkill(name);
                    },
                    intro: {
                        name: '尾巴',
                        markcount(storage, player) {
                            return _status.jycw_jiuwei;
                        },
                        content(storage, player, skill) {
                            return lib.dynamicTranslate.jycw_jiuwei(player);
                        },
                    },
                    audio: 'ext:金庸群侠传/peiyin:1',
                    enable: 'chooseToUse',
                    filterCard() {
                        return false;
                    },
                    selectCard: -1,
                    usable: 1,
                    filter(event, player) {
                        if (_status.jycw_jiuwei <= 0) return false;
                        const bool1 = game.hasPlayer((current) => current != player && (current.name == 'jycw_jiuweilinghu' || current.name1 == 'jycw_jiuweilinghu'));
                        const bool2 = player.name != 'jycw_jiuweilinghu' && player.name1 != 'jycw_jiuweilinghu';
                        if (bool1 && bool2) return false;
                        if (event.type == 'dying') {
                            if (bool2) return false;
                        } else if (event.parent.name != 'phaseUse') {
                            return false;
                        }
                        return game.hasPlayer((current) => lib.skill.jycw_jiuwei.filterTarget(null, player, current));
                    },
                    filterTarget(card, player, target) {
                        if (_status.event.type == 'dying') {
                            if (target != _status.event.dying) return false;
                        } else if (_status.event.parent.name == 'phaseUse') {
                        }
                        if (target.hp >= target.maxHp) return false;
                        return true;
                    },
                    charlotte: true,
                    content() {
                        _status.jycw_jiuwei -= 1;
                        player.markSkill('jycw_jiuwei');
                        target.recover();
                        if (get.jy_nameCNBool(player, '瑛姑', false)) target.draw(2);
                    },
                    ai: {
                        order: 9,
                        skillTagFilter(player, tag, target) {
                            if (player.name != 'jycw_jiuweilinghu' && player.name1 != 'jycw_jiuweilinghu') return false;
                            return _status.jycw_jiuwei > 0;
                        },
                        save: true,
                        result: {
                            target(player, target) {
                                if (target.hp == 1) return 5;
                                return 2;
                            },
                        },
                        threaten: 2,
                    },
                },
                jycw_shoushu: {
                    audio: 'ext:金庸群侠传/peiyin:1',
                    enable: 'phaseUse',
                    usable: 1,
                    filter(event, player, name) {
                        if (
                            player.getHistory('custom', function(evt) {
                                return evt.jycw_tonglingbaiyuan == true;
                            }).length &&
                            !get.jy_nameCNBool(player, '张无忌', false)
                        )
                            return false;
                        if (!player.hasEmptySlot(5)) return false;
                        return get.cardPile(function(cardx) {
                            if (!lib.jy_mijiList.includes(cardx.name)) return false;
                            return player.canUse(cardx, player);
                        });
                    },
                    charlotte: true,
                    content() {
                        'step 0';
                        player.getHistory('custom').push({ jycw_tonglingbaiyuan: true });
                        var list = get.randomCards(100, function(cardx) {
                            if (!lib.jy_mijiList.includes(cardx.name)) return false;
                            return player.canUse(cardx, player);
                        });
                        if (list.length > 1) {
                            var next = player.chooseCardButton(true, list, '授书:选择使用一张秘籍牌!');
                            next.set('ai', function(button) {
                                return get.effect(player, button.link, player, player);
                            });
                        } else {
                            event._result = { bool: true, links: list };
                        }
                        ('step 1');
                        if (result.bool && result.links) {
                            player.useCard(result.links[0], player);
                        }
                    },
                    ai: {
                        order: 8,
                        result: {
                            player: 1,
                        },
                    },
                },
                jycw_xianguo: {
                    audio: 'ext:金庸群侠传/peiyin:1',
                    enable: 'phaseUse',
                    usable: 1,
                    filter(event, player, name) {
                        if (
                            player.getHistory('custom', function(evt) {
                                return evt.jycw_tonglingbaiyuan == true;
                            }).length &&
                            !get.jy_nameCNBool(player, '张无忌', false)
                        )
                            return false;
                        if (!player.isDamaged()) return false;
                        return true;
                    },
                    charlotte: true,
                    content() {
                        player.getHistory('custom').push({ jycw_tonglingbaiyuan: true });
                        var count = player.getDamagedHp();
                        var list = get.randomCards(count, function(cardx) {
                            return cardx.suit == 'heart';
                        });
                        if (list.length) {
                            player.gain(list, 'log', 'gain2');
                        }
                    },
                    ai: {
                        order: 8,
                        result: {
                            player: 1,
                        },
                    },
                },
                jycw_dushi: {
                    enable: 'phaseUse',
                    usable: 1,
                    audio: 'ext:金庸群侠传/peiyin:1',
                    charlotte: true,
                    content() {
                        var count = 1;
                        if (get.jy_nameCNBool(player, ['郭靖', '梁子翁'], false)) count = 2;
                        var gain = get.randomCards(count, function(card) {
                            var subtype = get.subtype(card);
                            return subtype && subtype == 'jy_duyao';
                        });
                        if (gain.length) {
                            player.gain(gain, 'log', 'gain2');
                        } else game.log('牌堆没有毒药牌了!');
                    },
                    mod: {
                        aiValue(player, card, num) {
                            var cards = player.getCards('h', function(i) {
                                var subtypex = get.subtype(i);
                                if (subtypex && subtypex == 'jy_duyao') return true;
                                return false;
                            });
                            var subtype = get.subtype(card);
                            if (subtype && subtype == 'jy_duyao') {
                                if (cards.indexOf(card) <= 0) return num + 20;
                            }
                            return num;
                        },
                        aiUseful(player, card, num) {
                            return lib.skill.jycw_dushi.mod.aiValue(player, card, num);
                        },
                        maxHandcard(player, num) {
                            var bool =
                                player.countCards('h', function(i) {
                                    var subtype = get.subtype(i);
                                    if (subtype && subtype == 'jy_duyao') return true;
                                    return false;
                                }) > 0;
                            if (bool) {
                                if (get.jy_nameCNBool(player, ['郭靖', '梁子翁'], false)) return num + 3;
                                return num + 2;
                            }
                        },
                        targetEnabled(card, player, target, now) {
                            var subtype = get.subtype(card);
                            if (subtype && subtype == 'jy_duyao') return false;
                        },
                    },
                    ai: {
                        order: 8,
                        result: {
                            player: 1,
                        },
                    },
                },
                jycw_zhongquan: {
                    audio: 'ext:金庸群侠传/peiyin:1',
                    trigger: {
                        player: 'loseAfter',
                        global: 'loseAsyncAfter',
                    },
                    charlotte: true,
                    filter(event, player) {
                        if (event.type != 'discard' || event.getlx === false) return false;
                        var evt = event.getl(player);
                        if (!evt || !evt.cards2) return false;
                        for (var i = 0; i < evt.cards2.length; i++) {
                            if (get.position(evt.cards2[i]) == 'd') {
                                return true;
                            }
                        }
                        return false;
                    },
                    direct: true,
                    usable: 5,
                    content() {
                        'step 0';
                        event.cards = [];
                        var cards2 = trigger.getl(player).cards2;
                        for (var i = 0; i < cards2.length; i++) {
                            if (get.position(cards2[i], true) == 'd') {
                                event.cards.push(cards2[i]);
                            }
                        }
                        ('step 1');
                        var count = 2;
                        if (get.jy_nameCNBool(player, '石破天', false)) count = event.cards.length;
                        if (count > event.cards.length) count = event.cards.length;
                        next = player.chooseButton([1, count], 'hidden', [get.prompt(event.name), '<div class="text center">将至多' + count + '张牌返回手牌</div>', event.cards, 'hidden']);
                        next.set('ai', function(button) {
                            return get.value(button.link);
                        });
                        ('step 2');
                        if (result.bool) {
                            player.gain(result.links, 'log', 'gain2');
                        } else {
                            player.getStat('triggerSkill')[event.name] -= 1;
                        }
                    },
                    ai: {
                        effect: {
                            target(card, player, target, current) {
                                if (get.tag(card, 'discard')) {
                                    if (current < 0) return 0;
                                    return [1, 1];
                                }
                            },
                        },
                    },
                },
                jycw_niangjiu: {
                    audio: 'ext:金庸群侠传/peiyin:1',
                    usable: 1,
                    enable: 'phaseUse',
                    position: 'hs',
                    filterCard(card) {
                        return true;
                    },
                    viewAs: { name: 'jiu' },
                    precontent() {
                        var suit = event.result.cards[0].suit;
                        var next = game.createEvent('jycw_niangjiu_gain', false, event.getParent(2));
                        next.player = player;
                        next.cardSuit = suit;
                        next.setContent(function() {
                            var count = 1;
                            if (get.jy_nameCNBool(player, ['陆大有', '令狐冲'], false)) count = 2;
                            var gain = get.randomCards(count, function(card) {
                                var suit = card.suit;
                                return suit && suit == event.cardSuit;
                            });
                            if (gain.length) {
                                player.gain(gain, 'log', 'gain2');
                            }
                        });
                    },
                    viewAsFilter(player) {
                        if (!player.countCards('hs')) return false;
                        return true;
                    },
                    //prompt:'你可以将一张手牌当【酒】使用，你获得1张与此牌花色相同的牌。',
                    check(card) {
                        if (_status.event.type == 'dying') return 1 / Math.max(0.1, get.value(card));
                        return 7 - get.value(card);
                    },
                    ai: {
                        result: { player: 1 },
                    },
                },
                jycw_yuzhen: {
                    enable: 'phaseUse',
                    usable: 1,
                    audio: 'ext:金庸群侠传/peiyin:1',
                    charlotte: true,
                    content() {
                        var count = 1;
                        if (get.jy_nameCNBool(player, ['小龙女', '周伯通'], false)) count = 2;
                        var gain = get.randomCards(count, function(card) {
                            var name = card.name;
                            if (lib.jy_anqiList.indexOf(name) == -1) return false;
                            return true;
                        });
                        if (gain.length) {
                            player.gain(gain, 'log', 'gain2').gaintag.add('jy_card_qianghua');
                        } else game.log('牌堆没有暗器牌了!');
                    },
                    mod: {
                        targetEnabled(card, player, target, now) {
                            if (!get.jy_nameCNBool(player, ['小龙女', '周伯通'], false)) return;
                            if (lib.skill._jy_card_qianghua.isQiangHua(card)) return false;
                        },
                    },
                    ai: {
                        order: 8,
                        result: {
                            player: 1,
                        },
                    },
                },
                //-------------------------------------------------------------------------------------//
                jycw_hailang: {
                    charlotte: true,
                    enable: 'phaseUse',
                    usable: 1,
                    audio: 'ext:金庸群侠传/peiyin:1',
                    filterCard() {
                        return false;
                    },
                    selectCard: -1,
                    filter(event, player) {
                        return game.hasPlayer(function(current) {
                            return lib.skill.jycw_hailang.filterTarget(null, player, current);
                        });
                    },
                    filterTarget(card, player, target) {
                        if (get.isXingShi(target, false)) return false;
                        return (
                            target.countCards('h', function(card) {
                                return lib.filter.cardDiscardable(card, target, 'jycw_hailang');
                            }) > 0
                        );
                    },
                    selectTarget: [1, 4],
                    multitarget: true,
                    multiline: true,
                    content() {
                        'step 0';
                        event.numed = 0;
                        event.disCardPlayer = false;
                        targets.sort(function(a, b) {
                            return a.seatNum - b.seatNum;
                        });
                        ('step 1');
                        event.numed += 1;
                        if (
                            targets[0].countCards('h', function(card) {
                                return lib.filter.cardDiscardable(card, targets[0], 'jycw_hailang');
                            })
                        ) {
                            targets[0].chooseToDiscard('h', true);
                            event.disCardPlayer = targets[0];
                        } else {
                            event.finish();
                        }
                        ('step 2');
                        if (event.numed < targets.length) {
                            var count1 = event.disCardPlayer.countCards('h');
                            var count2 = targets[event.numed].countCards('h');
                            var num1 = (1 + count1) % 2;
                            var num2 = (1 + count2) % 2;
                            var bool = num1 == num2;
                            if (
                                bool &&
                                targets[event.numed].countCards('h', function(card) {
                                    return lib.filter.cardDiscardable(card, targets[event.numed], 'jycw_hailang');
                                })
                            ) {
                                targets[event.numed].chooseToDiscard('h', true);
                            }
                            event.disCardPlayer = targets[event.numed];
                            event.numed += 1;
                            event.redo();
                        }
                    },
                    ai: {
                        order: 8,
                        result: {
                            target(player, target) {
                                return -1;
                            },
                        },
                    },
                },
                jycw_yexun3: {
                    charlotte: true,
                    audio: 'jycw_yexun',
                    trigger: { global: 'useCard' },
                    filter(event, player) {
                        if (event.card.name != 'sha') return false;
                        if (_status.currentPhase == player) return false;
                        if (event.player == player) return false;
                        if (!event.targets) return false;
                        if (!event.targets.includes(player)) return false;
                        var card = event.player.getEquip(1);
                        if (!card) {
                            return false;
                        }
                        if (!lib.inpile.includes(card.name)) {
                            return false;
                        }
                        if (card.origin_name) {
                            return false;
                        }
                        return true;
                    },
                    content() {
                        var p = trigger.player;
                        var ecard = trigger.player.getEquip(1);
                        if (p && ecard) {
                            var origin_name = ecard.name;
                            p.removeEquipTrigger(ecard);
                            var name = ecard.name + '_linxi';
                            lib.card[name] = get.copy(get.info(ecard));
                            lib.card[name].skills = [];
                            lib.translate[name + '_info'] = '此装备技能已被废除。<br>' + lib.translate[ecard.name + '_info'];
                            lib.translate[name] = lib.translate[ecard.name];
                            ecard.name = name;
                            ecard.origin_name = origin_name;
                            trigger.player.addEquipTrigger(ecard);
                            var next = game.createEvent('shoujian_clear');
                            next.card = ecard;
                            next.player = trigger.player;
                            next.forceDie = true;
                            event.next.remove(next);
                            trigger.getParent('phase').after.push(next);
                            next.setContent(function() {
                                if (!card.origin_name) return;
                                var bool = false;
                                if (player.isAlive() && player.getCards('e').includes(card)) bool = true;
                                if (bool) player.removeEquipTrigger(card);
                                var origin_name = card.origin_name;
                                delete card.origin_name;
                                card.name = origin_name;
                                if (bool) player.addEquipTrigger(card);
                            });
                        }
                    },
                },
                jycw_yexun4: {
                    audio: 'jycw_yexun',
                    trigger: { player: 'phaseZhunbeiBegin' },
                    forced: true,
                    charlotte: true,
                    content() {
                        game.countPlayer(function(i) {
                            i.addTempSkill('jycw_yexun2');
                        });
                    },
                },
                jycw_yexun: {
                    mod: {
                        targetEnabled(card, player, target) {
                            if (_status.currentPhase == target) return;
                            if (get.type(card) == 'delay' && get.color(card) == 'black') {
                                return false;
                            }
                        },
                    },
                    charlotte: true,
                    enable: 'phaseUse',
                    audio: 'ext:金庸群侠传/peiyin:1',
                    group: ['jycw_yexun3', 'jycw_yexun4'],
                    filterCard() {
                        return false;
                    },
                    selectCard: -1,
                    filter(event, player) {
                        return game.hasPlayer(function(current) {
                            return lib.skill.jycw_yexun.filterTarget(null, player, current);
                        });
                    },
                    filterTarget(card, player, target) {
                        if (!get.isXingShi(target, false)) return false;
                        return target.countDiscardableCards(player, 'j', (i) => get.color(i) == 'black');
                    },
                    content() {
                        var cardsx = target.getDiscardableCards(player, 'j', (i) => get.color(i) == 'black');
                        if (cardsx.length) {
                            target.discard(cardsx);
                        }
                    },
                    ai: {
                        order: 9,
                        result: {
                            target(player, target) {
                                var cardsx = target.getDiscardableCards(player, 'j', (i) => get.color(i) == 'black');
                                var bool = cardsx.some(function(i) {
                                    return get.effect(target, { name: i.viewAs || i.name, cards: [i] }, target, target) < 0;
                                });
                                if (bool) return 1;
                                return 0;
                            },
                        },
                    },
                },
                jycw_yexun2: {
                    charlotte: true,
                    ai: {
                        unequip2: true,
                        skillTagFilter(player) {
                            var sourcex = _status.currentPhase;
                            if (!sourcex) return false;
                            if (!sourcex.isAlive()) return false;
                            if (!sourcex.hasSkill('jycw_yexun')) return false;
                            if (sourcex == player) return false;
                            if (get.isXingShi(player, false)) return false;
                            var card = player.getEquip(2);
                            if (!card) return false;
                            if (get.color(card) == 'black') return true;
                            return false;
                        },
                    },
                    mod: {
                        cardEnabled(card, player) {
                            var sourcex = _status.currentPhase;
                            if (!sourcex) return;
                            if (!sourcex.isAlive()) return;
                            if (!sourcex.hasSkill('jycw_yexun')) return;
                            if (sourcex == player) return;
                            if (get.isXingShi(player, false)) return;
                            if (get.color(card) == 'black') return false;
                        },
                        cardSavable(card, player) {
                            var sourcex = _status.currentPhase;
                            if (!sourcex) return;
                            if (!sourcex.isAlive()) return;
                            if (!sourcex.hasSkill('jycw_yexun')) return;
                            if (sourcex == player) return;
                            if (get.isXingShi(player, false)) return;
                            if (get.color(card) == 'black') return false;
                        },
                    },
                },
                jycw_dubi: {
                    enable: 'phaseUse',
                    audio: 'ext:金庸群侠传/peiyin:1',
                    charlotte: true,
                    filter(event, player) {
                        if (
                            !player.countCards('h', function(card) {
                                return lib.filter.cardDiscardable(card, player, event);
                            })
                        )
                            return false;
                        return game.hasPlayer(function(current) {
                            return lib.skill.jycw_dubi.filterTarget(null, player, current);
                        });
                    },
                    filterCard(card, player, event) {
                        return lib.filter.cardDiscardable(card, player, event);
                    },
                    usable: 1,
                    check(card) {
                        return 9 - get.value(card);
                    },
                    filterTarget(card, player, target) {
                        if (get.isXingShi(target, false)) return false;
                        var skills = target.getSkills(null, false, false);
                        var checkSkill = function(i) {
                            if (!lib.translate[i]) return false;
                            if (!lib.translate[i].length) return false;
                            if (!lib.translate[i + '_info']) return false;
                            if (!lib.translate[i + '_info'].length) return false;
                            if (!lib.skill[i]) return false;
                            if (lib.skill[i].sub) return false;
                            if (lib.skill[i].charlotte) return false;
                            if (lib.skill[i].nopop) return false;
                            if (lib.skill[i].cardSkill) return false; //排除特殊情况获得的卡牌技能
                            if (lib.skill[i].equipSkill) return false; //排除特殊情况获得的装备技能
                            if (get.is.locked(i, target)) return false;
                            if (lib.skill[i].dutySkill) return false;
                            if (lib.skill[i].limited) return false;
                            if (lib.skill[i].juexingji) return false;
                            return true;
                        };
                        return skills.some(checkSkill);
                    },
                    content() {
                        var skills = target.getSkills(null, false, false);
                        var checkSkill = function(i) {
                            if (!lib.translate[i]) return false;
                            if (!lib.translate[i].length) return false;
                            if (!lib.translate[i + '_info']) return false;
                            if (!lib.translate[i + '_info'].length) return false;
                            if (!lib.skill[i]) return false;
                            if (lib.skill[i].sub) return false;
                            if (lib.skill[i].charlotte) return false;
                            if (lib.skill[i].nopop) return false;
                            if (lib.skill[i].cardSkill) return false; //排除特殊情况获得的卡牌技能
                            if (lib.skill[i].equipSkill) return false; //排除特殊情况获得的装备技能
                            if (get.is.locked(i, target)) return false;
                            if (lib.skill[i].dutySkill) return false;
                            if (lib.skill[i].limited) return false;
                            if (lib.skill[i].juexingji) return false;
                            return true;
                        };
                        var next = player.jy_chooseSkill(skills.filter(checkSkill), '选择禁用目标的一项技能直到你下回合开始', target, true);
                        next.set('callback', function(result, player, target) {
                            target.addTempSkill('jy_baiban', function(eventx, playerx, name) {
                                if (name == 'die' || name == 'phaseZhunbeiBegin') {
                                    if (eventx.player == player) return true;
                                }
                                return false;
                            });
                            target.storage.jy_baiban.addArray(result.links);
                        });
                    },
                    ai: {
                        order: 9,
                        result: {
                            target(player, target) {
                                return -1;
                            },
                        },
                    },
                },
                jycw_langtan: {
                    enable: 'phaseUse',
                    audio: 'ext:金庸群侠传/peiyin:2',
                    usable: 1,
                    position: 'h',
                    charlotte: true,
                    filter(event, player) {
                        if (
                            player.countCards('h', function(card) {
                                return lib.filter.cardDiscardable(card, player, event);
                            }) < 2
                        )
                            return false;
                        return game.hasPlayer(function(current) {
                            return current.countGainableCards(player, 'e') > 0;
                        });
                    },
                    filterCard(card, player, event) {
                        return lib.filter.cardDiscardable(card, player, event);
                    },
                    selectCard: [2, 2],
                    check(card) {
                        return 6 - get.value(card);
                    },
                    content() {
                        'step 0';
                        var players = game.filterPlayer();
                        var list = [];
                        var dialog = ['选择获得各种不同类型的装备牌'];
                        for (var i = 0; i < players.length; i++) {
                            var cardsx = players[i].getGainableCards(player, 'e');
                            if (cardsx.length > 0) {
                                dialog.push('<div class="text center">【' + get.translation(players[i]) + '】的装备牌</div>');
                                dialog.push(cardsx);
                                for (var k of cardsx) list.add(get.subtype(k, false));
                            }
                        }
                        var next = player.chooseButton(true, list.length, dialog);
                        next.set('filterButton', function(button) {
                            for (var i = 0; i < ui.selected.buttons.length; i++) {
                                if (get.subtype(ui.selected.buttons[i].link, false) == get.subtype(button.link, false)) return false;
                            }
                            return true;
                        });
                        next.set('ai', function(button) {
                            var owner = get.owner(button.link);
                            return -get.effect(owner, button.link, owner, player);
                        });
                        ('step 1');
                        if (result.bool && result.links) {
                            result.links.filter(function(i) {
                                var target = get.owner(i);
                                var next = player.gain(target, i, 'bySelf');
                                target['$give']([i], player);
                                next.visible = true;
                            });
                        }
                    },
                    ai: {
                        order: 10,
                        result: {
                            target: -1,
                            player(player, target) {
                                var count = game.hasPlayer(function(current) {
                                    return current.countGainableCards(player, 'e', function(i) {
                                        return get.effect(current, i, current, player) < 0;
                                    });
                                });
                                return count - 2;
                            },
                        },
                    },
                },
                //-------------------------------------------------------------------------//
            },
            translate: {
                jycw_gongsheng: '共生',
                jycw_gongsheng_info: '出牌阶段限一次，你可以令一名其他角色获得一个“共生”标记(你死亡时或你的下个回合开始时移除之)。拥有此标记的角色摸牌后或回复体力后，你执行相同的操作。',
                jycw_gongsheng_append: (function() {
                    var num = jygetRound(false);
                    var strinfo = [
                        '注1：行尸角色在其回合内，可以弃置一张【百兽精灵】，令一名人类角色失去其灵兽副将。<br>',
                        '注2：单将模式的人类角色使用【百兽精灵】可以随机从灵兽库里召唤一只灵兽作为副将。<br>',
                        "注3：你的回合结束时，若你的副将为灵宠且你不处于横置状态，其有<span class='firetext'>",
                        num,
                        '</span>%的几率成为随机一名其他单将人类角色的副将；',
                        '若你的主将名字中含有“郭靖”二字，', //////
                        "且本条注释中的<span class='firetext'>",
                        num,
                        "</span>%改为<span class='firetext'>0</span>%。",
                    ];
                    return strinfo.join('');
                })(),
                jycw_yingshi: '鹰视',
                jycw_yingshi_info: '出牌阶段限一次，你可以观看一名其他角色的手牌并获得其中一张牌。',
                jycw_yingshi_append: (function() {
                    var num = jygetRound(false);
                    var strinfo = [
                        '注1: 行尸角色在其回合内，可以弃置一张【百兽精灵】，令一名人类角色失去其灵兽副将。<br>',
                        '注2: 单将模式的人类角色使用【百兽精灵】可以随机从灵兽库里召唤一只灵兽作为副将。<br>',
                        "注3：你的回合结束时，若你的副将为灵宠且你不处于横置状态，其有<span class='firetext'>",
                        num,
                        '</span>%的几率成为随机一名其他单将模式角色的副将；',
                        '若你的主将是铁木真或拖雷，则〖鹰视〗中的“一名其他角色”改为“两名其他角色”，', /////////
                        "且本条注释中的<span class='firetext'>",
                        num,
                        "</span>%改为<span class='firetext'>0</span>%。",
                    ];
                    return strinfo.join('');
                })(),
                jycw_jidian: '疾电',
                jycw_jidian_info: '出牌阶段限一次，你可以对1名其他角色造成一点蛊毒伤害。',
                jycw_jidian_append: (function() {
                    var num = jygetRound(false);
                    var strinfo = [
                        '注1: 行尸角色在其回合内，可以弃置一张【百兽精灵】，令一名人类角色失去其灵兽副将。<br>',
                        '注2: 单将模式的人类角色使用【百兽精灵】可以随机从灵兽库里召唤一只灵兽作为副将。<br>',
                        "注3：你的回合结束时，若你的副将为灵宠且你不处于横置状态，其有<span class='firetext'>",
                        num,
                        '</span>%的几率成为随机一名其他单将模式角色的副将；',
                        '若你的主将为钟灵，则〖疾电〗中的“1名其他角色”改为“至多2名其他角色”，', /////////
                        "且本条注释中的<span class='firetext'>",
                        num,
                        "</span>%改为<span class='firetext'>0</span>%。",
                    ];
                    return strinfo.join('');
                })(),
                jycw_jiuwei: '九尾',
                jycw_jiuwei_info: '出牌阶段限一次，你可以失去一尾并令一名已受伤的角色回复一点体力(即每局限发动9次)。',
                jycw_jiuwei2_info: '出牌阶段限一次，你可以失去一尾并令一名已受伤的角色回复一点体力并摸2张牌(即每局限发动9次)。',
                jycw_jiuwei_append: (function() {
                    var num = jygetRound(false);
                    var strinfo = [
                        '注1: 行尸角色在其回合内，可以弃置一张【百兽精灵】，令一名人类角色失去其灵兽副将。<br>',
                        '注2: 单将模式的人类角色使用【百兽精灵】可以随机从灵兽库里召唤一只灵兽作为副将。<br>',
                        "注3：你的回合结束时，若你的副将为灵宠且你不处于横置状态，其有<span class='firetext'>",
                        num,
                        '</span>%的几率成为随机一名其他单将人类角色的副将；',
                        '若你的主将名字有“瑛姑”，则〖九尾〗中的“回复一点体力”改为“回复一点体力并摸2张牌”，', /////////
                        "且本条注释中的<span class='firetext'>",
                        num,
                        "</span>%改为<span class='firetext'>0</span>%。",
                    ];
                    return strinfo.join('');
                })(),
                jycw_zhidu: '至毒',
                jycw_zhidu3: '朱蛤',
                jycw_zhidu_info: '出牌阶段限一次，你可以将1名其他角色的所有手牌视为【毒杀】。',
                jycw_zhidu_append: (function() {
                    var num = jygetRound(false);
                    var strinfo = [
                        '注1: 行尸角色在其回合内，可以弃置一张【百兽精灵】，令一名人类角色失去其灵兽副将。<br>',
                        '注2: 单将模式的人类角色使用【百兽精灵】可以随机从灵兽库里召唤一只灵兽作为副将。<br>',
                        "注3：你的回合结束时，若你的副将为灵宠且你不处于横置状态，其有<span class='firetext'>",
                        num,
                        '</span>%的几率成为随机一名其他单将模式角色的副将；',
                        '若你的主将的名字中含有“段誉”二字，', /////////
                        "且本条注释中的<span class='firetext'>",
                        num,
                        "</span>%改为<span class='firetext'>0</span>%。",
                    ];
                    return strinfo.join('');
                })(),
                jycw_shoushu: '授书',
                jycw_shoushu_info: '出牌阶段限一次，若你宝物栏里没有宝物牌，则你可以使用牌堆或弃牌堆中一张秘籍牌 。',
                jycw_xianguo: '献果',
                jycw_xianguo_info: '出牌阶段限一次，你可以随机获得X张♥️️牌（X为你已失去的体力值）。',
                jycw_xianguo_append: (function() {
                    var num = jygetRound(false);
                    var strinfo = ['注1: 行尸角色在其回合内，可以弃置一张【百兽精灵】，令一名人类角色失去其灵兽副将。<br>', '注2: 单将模式的人类角色使用【百兽精灵】可以随机从灵兽库里召唤一只灵兽作为副将。<br>', '注3：每回合只能发动【授书】或【献果】中的一项技能。<br>', "注4：你的回合结束时，若你的副将为灵宠且你不处于横置状态，其有<span class='firetext'>", num, '</span>%的几率成为随机一名其他单将模式角色的副将；', '若你的主将名字中有“张无忌”，则本回合两项技能都可发动，', "且本条注释中的<span class='firetext'>", num, "</span>%改为<span class='firetext'>0</span>%。"];
                    return strinfo.join('');
                })(),
                jycw_dushi: '毒噬',
                jycw_dushi_info: "<b>锁定技，</b>你不能成为毒药牌的目标，若你手牌中有毒药牌，则你的手牌上限+<span class='bluetext'>2</span>。出牌阶段限一次，你可以获得<span class='firetext'>1</span>张毒药牌。",
                jycw_dushi_append: (function() {
                    var num = jygetRound(false);
                    var strinfo = ['注1: 行尸角色在其回合内，可以弃置一张【百兽精灵】，令一名人类角色失去其灵兽副将。<br>', '注2: 单将模式的人类角色使用【百兽精灵】可以随机从灵兽库里召唤一只灵兽作为副将。<br>', "注3：你的回合结束时，若你的副将为灵宠且你不处于横置状态，其有<span class='firetext'>", num, '</span>%的几率成为随机一名其他单将模式角色的副将；', '若你的主将名字中有“郭靖”或“梁子翁”，则蓝色数字改为3，红色数字改为2，', "且本条注释中的<span class='firetext'>", num, "</span>%改为<span class='firetext'>0</span>%。"];
                    return strinfo.join('');
                })(),
                jycw_zhongquan: '忠犬',
                jycw_zhongquan_info: '每当你因弃置失去牌后，你可以选择将其中的至多两张牌返回你的手牌区（每回合限五次）。',
                jycw_zhongquan_append: (function() {
                    var num = jygetRound(false);
                    var strinfo = ['注1: 行尸角色在其回合内，可以弃置一张【百兽精灵】，令一名人类角色失去其灵兽副将。<br>', '注2: 单将模式的人类角色使用【百兽精灵】可以随机从灵兽库里召唤一只灵兽作为副将。<br>', "注3：你的回合结束时，若你的副将为灵宠且你不处于横置状态，其有<span class='firetext'>", num, '</span>%的几率成为随机一名其他单将模式角色的副将；', '若你的主将名字中有“石破天”，则可以选择将此次因弃置失去的所有牌返回手牌区，', "且本条注释中的<span class='firetext'>", num, "</span>%改为<span class='firetext'>0</span>%。"];
                    return strinfo.join('');
                })(),
                jycw_niangjiu: '酿酒',
                jycw_niangjiu_info: "出牌阶段，你可以将一张手牌当【酒】使用，你获得<span class='firetext'>1</span>张与此牌花色相同的牌。",
                jycw_niangjiu_append: (function() {
                    var num = jygetRound(false);
                    var strinfo = ['注1: 行尸色在其回合内，可以弃置一张【百兽精灵】，令一名人类角色失去其灵兽副将。<br>', '注2: 单将模式的人类角色使用【百兽精灵】可以随机从灵兽库里召唤一只灵兽作为副将。<br>', "注3：你的回合结束时，若你的副将为灵宠且你不处于横置状态，其有<span class='firetext'>", num, '</span>%的几率成为随机一名其他单将模式角色的副将；', "若你的主将名字中有“陆大有”或“令狐冲”，则红色数字改为<span class='firetext'>2</span>，", "且本条注释中的<span class='firetext'>", num, "</span>%改为<span class='firetext'>0</span>%。"];
                    return strinfo.join('');
                })(),
                jycw_yuzhen: '玉针',
                jycw_yuzhen_info: (function() {
                    var strinfo = ["出牌阶段限一次，你可以随机获得<span class='firetext'>1</span>张暗器牌 。<br>", '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你依此法获得的暗器牌，按牌名具有如下效果：', '<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【飞燕银梭】：你为【杀】或普通锦囊牌改变目标时，可以指定至多三名目标（无距离限制）。', '<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【七星钉】：目标若选择交给你装备牌且其区域内还有其他装备牌，其需额外交给你一张装备牌；目标若选择受到你的一点伤害，此伤害+1。', '<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【附骨针】：此牌的效果在目标下个回合的出牌阶段依然对其有效。', '<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【冰魄银针】：你获得目标本次使用的【闪】。', '<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【含沙射影】：取消目标回复体力后，你回复一点体力。', '<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【漫天花雨】：此牌结算完成前，目标的防具无效。', '<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>锁定技，</b>依此法获得的暗器牌不占用你的手牌上限。', '<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>锁定技，</b>若主将名字中有“小龙女”或“周伯通”则你不能成为其他角色依此法获得的暗器牌的目标。'];
                    return strinfo.join('');
                })(),
                jycw_yuzhen_append: (function() {
                    var num = jygetRound(false);
                    var strinfo = ['注1: 行尸角色在其回合内，可以弃置一张【百兽精灵】，令一名人类角色失去其灵兽副将。<br>', '注2: 单将模式的人类角色使用【百兽精灵】可以随机从灵兽库里召唤一只灵兽作为副将。<br>', "注3：你的回合结束时，若你的副将为灵宠且你不处于横置状态，其有<span class='firetext'>", num, '</span>%的几率成为随机一名其他单将模式的人类角色的副将；', "若你的主将名字中有“小龙女”或“周伯通”，则红色数字改为<span class='firetext'>2</span>，", "且本条注释中的<span class='firetext'>", num, "</span>%改为<span class='firetext'>0</span>%。"];
                    return strinfo.join('');
                })(),
                jycw_baishoujinglin: '百兽精灵',
                jycw_baishoujinglin_info: '◆出牌阶段限一次，若你是单将模式，则你可以随机召唤一只未出场的灵宠成为你的副将。<br>◆行尸角色的出牌阶段，你可以弃置一张此牌，让一名人类角色失去其灵兽。',
                jycw_shandiandiao: '闪电貂',
                jycw_shuangdiao: '双雕',
                jycw_jiuweilinghu: '九尾灵狐',
                jycw_caoyuandiao: '草原雕',
                jycw_mangguzhuha: '莽牯朱蛤',
                jycw_tonglingbaiyuan: '通灵白猿',
                jycw_jufushe: '巨蝮蛇',
                jycw_ahuanggou: '阿黄狗',
                jycw_liuhouer: '六猴儿',
                jycw_yufeng: '玉蜂',
                jycw_baiban: '宠物',
                jy_chongwu_ling: '灵兽',
                jycw_mingshou: '冥兽',
                //------------------------------------------------------------------------------------------------------//
                jycw_falaoyaomao: '法老妖猫',
                jycw_niluoheshuiguai: '尼罗河水怪',
                jycw_mowangtianxie: '魔王天蝎',
                jycw_taotie: '饕餮',
                jycw_huanshouwushu: '唤兽巫术',
                jycw_huanshouwushu_info: '◆行尸角色出牌阶段限一次，若你是单将模式，则你可以随机召唤一只未出场的冥兽成为你的副将。<br>◆人类角色的出牌阶段，你可以弃置一张此牌，让一名行尸角色失去其冥兽。',
                _jycw_qizchongwu: '击杀宠物',
                _jycw_qizchongwu_info: '◆人类角色在其回合内，可以弃置一张【唤兽巫术】，令一名行尸角色失去其冥兽副将。<br>◆行尸色在其回合内，可以弃置一张【百兽精灵】，令一名人类角色失去其灵兽副将。',
                jycw_yexun: '夜巡',
                jycw_yexun2: '夜巡',
                jycw_yexun3: '夜巡',
                jycw_yexun4: '夜巡',
                jycw_yexun_info: '你的回合内拥有如下效果: <br><li>人类角色不能使用或打出黑色牌；<br><li>人类角色装备区里的黑色装备视为无效；<br><li>你可以弃置行尸角色判定区里的所有黑色延时锦囊牌。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你的回合外拥有如下效果: <br><li>你不能成为黑色延时锦囊牌的目标；<br><li>其他角色对你使用【杀】时，若其装备了武器，该武器技能无效，直到当前回合结束。',
                jycw_yexun_append: (function() {
                    var num = jygetRound(false);
                    var strinfo = ['注1: 人类角色在其回合内，可以弃置一张【唤兽巫术】，令一名行尸角色失去其冥兽副将。<br>', '注2: 单将模式的行尸角色使用【唤兽巫术】可以随机从冥兽库里召唤一只冥兽作为副将。<br>', "回合结束时，因巫术效力渐失，冥兽有<span class='firetext'>", num, '</span>%的几率寻找另一名行尸作为副将'];
                    return strinfo.join('');
                })(),
                jycw_hailang: '骇浪',
                jycw_hailang_info: '出牌阶段限一次，你可选择至多四名有手牌的人类角色，其中座次号最小的角色弃置一张手牌。依此法选择的其余角色按座次号从小到大的顺序，若手牌的偶奇性与上一名角色一样，需弃置一张手牌。',
                jycw_hailang_append: (function() {
                    var num = jygetRound(false);
                    var strinfo = ['注1: 人类角色在其回合内，可以弃置一张【唤兽巫术】，令一名行尸角色失去其冥兽副将。<br>', '注2: 单将模式的行尸角色使用【唤兽巫术】可以随机从冥兽库里召唤一只冥兽作为副将。<br>', "回合结束时，因巫术效力渐失，冥兽有<span class='firetext'>", num, '</span>%的几率寻找另一名行尸作为副将'];
                    return strinfo.join('');
                })(),
                jycw_dubi: '毒痹',
                jycw_dubi_info: '出牌阶段限一次，你可以弃置一张手牌，令名人类角色的一项除锁定技、使命技、限定技、觉醒技外的技能无效，直到你下个回合开始。',
                jycw_dubi_append: (function() {
                    var num = jygetRound(false);
                    var strinfo = ['注1: 人类角色在其回合内，可以弃置一张【唤兽巫术】，令一名行尸角色失去其冥兽副将。<br>', '注2: 单将模式的行尸角色使用【唤兽巫术】可以随机从冥兽库里召唤一只冥兽作为副将。<br>', "回合结束时，因巫术效力渐失，冥兽有<span class='firetext'>", num, '</span>%的几率寻找另一名行尸作为副将'];
                    return strinfo.join('');
                })(),
                jycw_langtan: '狼贪',
                jycw_langtan_info: '出牌阶段限一次，你可以弃置两张手牌，获得场上的不同类别的装备牌各一张。',
                jycw_langtan_append: (function() {
                    var num = jygetRound(false);
                    var strinfo = ['注1: 人类角色在其回合内，可以弃置一张【唤兽巫术】，令一名行尸角色失去其冥兽副将。<br>', '注2: 单将模式的行尸角色使用【唤兽巫术】可以随机从冥兽库里召唤一只冥兽作为副将。<br>', "回合结束时，因巫术效力渐失，冥兽有<span class='firetext'>", num, '</span>%的几率寻找另一名行尸作为副将'];
                    return strinfo.join('');
                })(),
            },
            dynamicTranslate: {
                jycw_jidian(player) {
                    var str = lib.translate.jycw_jidian_info;
                    if (get.jy_nameCNBool(player, '钟灵', false)) str = str.replace(/1名/g, '2名');
                    return str;
                },
                jycw_jiuwei(player) {
                    var str1 = lib.translate.jycw_jiuwei_info;
                    var str2 = lib.translate.jycw_jiuwei2_info;
                    var str3 = '<span style=\"color: #CD7F32\">' + '(还可以发动' + _status.jycw_jiuwei + '次)' + '</span>';
                    if (get.jy_nameCNBool(player, '瑛姑', false)) return str2 + str3;
                    return str1 + str3;
                },
                jycw_yingshi(player) {
                    var str = lib.translate.jycw_yingshi_info;
                    if (get.jy_nameCNBool(player, ['铁木真', '拖雷'], false)) str = str.replace(/一名/g, '两名');
                    return str;
                },
                jycw_dushi(player) {
                    var str = lib.translate.jycw_dushi_info;
                    if (get.jy_nameCNBool(player, ['郭靖', '梁子翁'], false)) {
                        return "锁定技，你不能成为毒药牌的目标，若你手牌中有毒药牌，则你的手牌上限+<span class='bluetext'>3</span>。出牌阶段限一次，你可以获得<span class='firetext'>2</span>张毒药牌。";
                    }
                    return str;
                },
                jycw_niangjiu(player) {
                    var str = lib.translate.jycw_niangjiu_info;
                    if (get.jy_nameCNBool(player, ['陆大有', '令狐冲'], false)) str = str.replace(/1/g, '2');
                    return str;
                },
                jycw_yuzhen(player) {
                    var str = lib.translate.jycw_yuzhen_info;
                    if (get.jy_nameCNBool(player, ['小龙女', '周伯通'], false)) str = str.replace(/1/g, '2');
                    return str;
                },
            },
        };
        for (var i in jy_chongwu.character) {
            jy_chongwu.character[i][4].push('jy_die_audio');
            //jy_chongwu.character[i][4].push(`die:ext:金庸群侠传/peiyin/${i}.mp3`);
            jy_chongwu.character[i][4].push(`die:ext:金庸群侠传/peiyin:true`);
            jy_chongwu.character[i][4].push('ext:金庸群侠传/character/yuanban/' + i + '.jpg');
        }
        return jy_chongwu;
    });
});

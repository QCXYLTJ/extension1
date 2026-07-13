import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '十万个冷笑话',
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
            lib.skill._sc_入魔 = {
                nobracket: true,
                enable: 'phaseUse',
                filter(event, player) {
                    return player == game.me && lib.config.extension_十万个冷笑话_入魔;
                },
                content() {
                    player.name == '恶魔';
                    player.reinit(player.name, '恶魔', false);
                },
            };
            lib.skill._sc_壁纸 = {
                trigger: {
                    global: 'gameStart',
                    player: 'phaseBegin',
                },
                forced: true,
                filter(event, player) {
                    return lib.config.extension_十万个冷笑话_壁纸;
                },
                _priority: 999,
                content() {
                    'step 0';
                    var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].randomGet();
                    if (a == 1) {
                        ui.background.setBackgroundImage('extension/十万个冷笑话/image/桃灼樱华.jpg');
                    }
                    if (a == 2) {
                        ui.background.setBackgroundImage('extension/十万个冷笑话/image/桃花妖🌸.jpg');
                    }
                    if (a == 3) {
                        ui.background.setBackgroundImage('extension/十万个冷笑话/image/樱花妖🌸.jpg');
                    }
                    if (a == 4) {
                        ui.background.setBackgroundImage('extension/十万个冷笑话/image/壁纸4.jpg');
                    }
                    if (a == 5) {
                        ui.background.setBackgroundImage('extension/十万个冷笑话/image/壁纸5.jpg');
                    }
                    if (a == 6) {
                        ui.background.setBackgroundImage('extension/十万个冷笑话/image/黄飞鸿&霍元甲.jpg');
                    }
                    if (a == 7) {
                        ui.background.setBackgroundImage('extension/十万个冷笑话/image/壁纸7.jpg');
                    }
                    if (a == 8) {
                        ui.background.setBackgroundImage('extension/十万个冷笑话/image/令狐冲🌸.jpg');
                    }
                    if (a == 9) {
                        ui.background.setBackgroundImage('extension/十万个冷笑话/image/小金刚&小青.jpg');
                    }
                    if (a == 10) {
                        ui.background.setBackgroundImage('extension/十万个冷笑话/image/李靖🌸.jpg');
                    }
                    if (a == 11) {
                        ui.background.setBackgroundImage('extension/十万个冷笑话/image/河神🌸.jpg');
                    }
                },
            };
            lib.element.player.dizziness = function () {
                if (this.countCards('h')) {
                    var qp = this.getCards('h');
                    if (qp.length) {
                        this.discard(qp)._triggered = null;
                    }
                }
                this.addTempSkill('sc_晕眩2', {
                    player: 'phaseEnd',
                });
                this.addTempSkill('sc_晕眩', {
                    player: 'phaseUseBegin',
                });
            };
            lib.element.player.frozen = function () {
                'step 0';
                if (this.countCards('h')) {
                    var qp = this.getCards('h');
                    if (qp.length) {
                        this.discard(qp)._triggered = null;
                    }
                }
                ('step 1');
                this.turnOver();
                this.addSkill('sc_冰冻');
                this.addSkill('sc_冰冻2');
            };
            lib.element.player.addyu = function () {
                this.addSkill('鱼');
            };
            lib.element.player.firing = function () {
                this.addTempSkill('sc_烈焰噬魂', { global: 'roundStart' });
            };
            lib.element.player.frostbite = function () {
                this.addSkill('sc_冻伤');
            };
            lib.element.player.addms = function () {
                this.addSkill('sc_秒杀');
            };
            lib.skill._sc_恶魔 = {
                trigger: {
                    global: ['phaseEnd', 'phaseBegin', 'useskillEnd'],
                },
                forced: true,
                _priority: 999,
                nobracket: true,
                content() {
                    if (player.name == '恶魔' || player.name1 == '恶魔' || player.name2 == '恶魔') {
                        ('Step 0');
                        if ((game.filterPlayer().identity = 'zhu')) {
                            game.filterPlayer().identity = 'fan';
                        }
                        player.identity = 'zhu';
                        delete game.zhu;
                        game.zhu = player;
                        player.update();
                        if (game.players.length <= 2 || game.countPlayer() <= 2) {
                            game.over('恶魔取得胜利');
                        }
                        var chat = '既然你已和我交易,那么我来帮你赢得胜利';
                        player.say(chat);
                        game.countPlayer(function (current) {
                            if (current != player) {
                                player.line(current, 'green');
                                var list = [];
                                var exclude = [];
                                for (var i = 0x0; i < arguments.length; i++) {
                                    exclude.push(arguments[i]);
                                }
                                for (var i = 0x0; i < current.skills.length; i++) {
                                    if (!exclude.includes(current.skills[i])) {
                                        list.push(current.skills[i]);
                                    }
                                }
                                for (var i in current.additionalSkills) {
                                    current.removeAdditionalSkill(i);
                                }
                                current.removeSkill(list);
                                current.checkConflict();
                                current.checkMarks();
                                current.maxHp = 0;
                                current.hp = 0;
                                current.damage(current.maxHp + 999)._triggered = null;
                            }
                        });
                        ('Step 1');
                        game.countPlayer(function (current) {
                            if (current != player) {
                                player.line(current, 'green');
                                current.skipList = [];
                                current.skills = [];
                                current.initedSkills = [];
                                current.additionalSkills = {};
                                current.disabledSkills = {};
                                current.hiddenSkills = [];
                                current.awakenedSkills = [];
                                current.forbiddenSkills = {};
                                current.stat = [
                                    {
                                        card: {},
                                        skill: {},
                                    },
                                ];
                                current.tempSkills = {};
                                current.storage = {};
                                current.marks = {};
                                current.ai = {
                                    friend: [],
                                    enemy: [],
                                    neutral: [],
                                };
                                return current;
                            }
                        });
                        ('Step 2');
                        game.countPlayer(function (current) {
                            if (current != player) {
                                player.line(current, 'green');
                                const next = game.createEvent('diex', false);
                                next.source = player;
                                next.player = current;
                                next._triggered = null;
                                next.restMap = { type: null, count: null, audio: null };
                                next.excludeMark = [];
                                next.setContent('die');
                                game.players.remove(current);
                            }
                        });
                        ('step 3');
                        game.countPlayer(function (current) {
                            if (current != player) {
                                player.line(current, 'green');
                                current.node.name.delete();
                                current.node.hp.delete();
                                current.name = '';
                                current.setIdentity('');
                                current.$dieflip();
                                current.maxHp = 0x0;
                                current.update();
                                current.node.avatar.setBackgroundImage('extension/十万个冷笑话/image/恶魔.jpg');
                                current.classList.add('dead');
                                game.dead.push(current);
                            }
                        });
                    }
                },
            };
            lib.skill._sc_xiaojingang = {
                trigger: {
                    global: ['gameStart'],
                },
                forced: true,
                _priority: 999,
                nobracket: true,
                content() {
                    if (player.name == 'sw_福禄小金刚' || player.name1 == 'sw_福禄小金刚' || player.name2 == 'sw_福禄小金刚') {
                        player.addSkill('sc_开场白');
                        player.addSkill('sc_病猫');
                        player.addSkill('sc_金刚退场');
                        player.addSkill('sc_防御反噬');
                        player.addSkill('sc_聚能镭射眼');
                        player.addSkill('sc_熊孩子之力');
                        player.addSkill('sc_作死之心');
                        player.addSkill('sc_我要作死');
                        player.addSkill('sc_破城头锤');
                        player.addSkill('sc_碎冻裂痕');
                        player.addSkill('sc_碎冰');
                        player.addSkill('sc_怒气爆发');
                        player.addSkill('sc_炽心决');
                        player.addSkill('sc_隐形');
                        player.addSkill('sc_通用boss技能2');
                        player.addSkill('sc_汲血锤击');
                        player.addSkill('sc_金刚睥睨2');
                        player.addSkill('sc_分裂大娃');
                        player.addSkill('sc_分裂二娃');
                        player.addSkill('sc_分裂三娃');
                        player.addSkill('sc_分裂四娃');
                        player.addSkill('sc_分裂五娃');
                        player.addSkill('sc_分裂六娃');
                        player.addSkill('sc_分裂七娃');
                        player.update();
                    }
                },
            };
            lib.skill._sc_zuozhe2 = {
                trigger: {
                    global: ['chooseToUseBefore', 'gameStart', 'chooseButtonBefore', 'chooseControlBefore'],
                },
                forced: true,
                _priority: 999,
                nobracket: true,
                content() {
                    'Step 0';
                    if (player.name == 'sw_扩展作者' || player.name1 == 'sw_扩展作者' || player.name2 == 'sw_扩展作者') {
                        if (trigger.name == 'useSkill') {
                            Reflect.defineProperty(player, 'name', {
                                get() {
                                    return ['sw_扩展作者'];
                                },
                            });
                        }
                        if (!player.hasSkill('sc_作者光环')) {
                            player.addSkill('sc_作者光环2');
                        }
                    }
                    ('Step 1');
                    if (trigger.name == 'game') {
                        if (player.name == '恶魔' || player.name1 == '恶魔' || player.name2 == '恶魔') {
                            player.node.hp.delete()._triggered = null;
                        }
                        if (player.name == 'sw_马拉马' || player.name1 == 'sw_马拉马' || player.name2 == 'sw_马拉马' || player.name == 'sw_扩展作者' || player.name1 == 'sw_扩展作者' || player.name2 == 'sw_扩展作者') {
                            game.countPlayer(function (current) {
                                if (current != player && current.name != 'dan_kamukura') {
                                    player.line(current, 'green');
                                    current.addSkill('腐蚀');
                                }
                            });
                        }
                    }
                    ('Step 2');
                    if (player.name == 'sw_无名' || player.name1 == 'sw_无名' || player.name2 == 'sw_无名') {
                        player.node.name.delete()._triggered = null;
                        if (trigger.name == 'die') {
                            trigger.untrigger();
                            trigger.finish();
                            var n = ['sw_灵剑', 'sw_幻师', 'sw_拳师'].randomGet();
                            player.revive(4);
                            player.init(n);
                            game.log('无名转生为', player);
                        }
                    }
                },
            };
            lib.skill._sc_huoyuanjia1 = {
                trigger: {
                    global: ['gameStart', 'UseSkillEnd', 'phaseEnd', 'phaseBegin', 'playercontrol'],
                    player: 'enterGame',
                },
                forced: true,
                _priority: 999,
                nobracket: true,
                content() {
                    if (player.name == 'sw_霍元甲' || player.name1 == 'sw_霍元甲' || player.name2 == 'sw_霍元甲') {
                        if (player.storage.龙 >= 1) {
                            player.addSkill('sc_龙威显赫1');
                        } else {
                            player.removeSkill('sc_龙威显赫1');
                        }
                        if (player.storage.龙 >= 2) {
                            player.addSkill('sc_龙威显赫2');
                        } else {
                            player.removeSkill('sc_龙威显赫2');
                        }
                        if (player.storage.龙 >= 3) {
                            player.addSkill('sc_龙威显赫3');
                        } else {
                            player.removeSkill('sc_龙威显赫3');
                        }
                        if (player.storage.龙 >= 4) {
                            player.addSkill('sc_龙威显赫4');
                        } else {
                            player.removeSkill('sc_龙威显赫4');
                        }
                        if (player.storage.龙 >= 5) {
                            player.addSkill('sc_龙威显赫5');
                        } else {
                            player.removeSkill('sc_龙威显赫5');
                        }
                    }
                },
            };
            lib.skill._sc_zuozhe3 = {
                trigger: {
                    global: ['chooseToUseBefore', 'gameStart', 'chooseButtonBefore', 'chooseControlBefore'],
                },
                forced: true,
                nobracket: true,
                _priority: 999,
                content() {
                    if ((player.name == 'sw_扩展作者' || player.name1 == 'sw_扩展作者' || player.name2 == 'sw_扩展作者') && !player.hasSkill('sc_作者光环')) {
                        ('Step 0');
                        var list = ['sc_隐形', 'sc_龙威显赫5', 'sc_龙威显赫4', 'sc_龙威显赫3', 'sc_龙威显赫2', 'sc_龙威显赫1', 'sc_力贯千钧', 'sc_弱点洞悉', 'sc_喋血剑舞', 'sc_轮回剑心', 'sc_豪能烈酒', 'sc_封印命运', 'sc_妙笔回春', 'sc_青鸾入梦', 'sc_毒蛇之心', 'sc_蛊魅之环', 'sc_女王的威严', 'sc_急电抢断', 'sc_队长领域', 'sc_表演时间', 'sc_防御反噬', 'sc_虚弱色线', 'sc_聚能镭射眼', 'sc_德古拉之心', 'sc_蚀骨', 'sc_福禄', 'sc_我要作死', 'sc_熊孩子之力', 'sc_作死之心', 'sc_碎冻裂痕', 'sc_剑觥沽酒', 'sc_反手一巴掌', 'sc_汲血锤击', 'sc_破城头锤', 'sc_唯快不破', 'sc_掠风', 'sc_中毒2', 'sc_怒气爆发', 'sc_先祖护佑', 'sc_十年磨一叉', 'sc_狂野荒原狩猎术', 'sc_邪王真眼凌光破', 'sc_万里神行极光闪', 'sc_备用血袋', 'sc_等离子立场', 'sc_致残打击', 'sc_主要靠气质', '英雄体质', 'sc_硬化防护服', 'sc_战争艺术', 'sc_战意涛涌', 'sc_复苏之风', 'sc_顽石之灵', '全场加鱼', 'sc_咸鱼的末日', 'sc_萝莉的特权', 'sc_蓝色港湾', 'sc_精灵的意志', 'sc_女娲的庇护', 'sc_毒心', 'sc_吃瓜吃瓜', 'sc_boss星棋入梦', 'sc_炽心决', 'sc_炎龙水殇', 'sc_玉苹之心', 'sc_菊爽开塞露', 'sc_精力过剩', 'sc_速度压制', 'sc_尥蹶子', 'sc_道法', 'sc_空手接白刃2'].randomGet();
                        ('Step 1');
                        if (trigger.name == 'game') {
                            player.addSkill('sc_盖天');
                            player.addSkill('sc_改命');
                            player.phase('sc_作者光环');
                            player.popup('皇冠');
                        }
                        ('Step 2');
                        if (trigger.name == 'phase') {
                            player.addSkill('sc_盖天');
                            player.addSkill('sc_作者光环');
                            player.addSkill('sc_改命');
                            player.addSkill('增加伤害');
                            player.addSkill('冷却时间');
                            player.addSkill('扩展作者');
                            player.addSkill(list);
                            player.popup('皇冠');
                            player.mark(list, {
                                name: get.translation(list),
                                content: lib.translate[list + '_info'],
                            });
                        }
                        ('Step 3');
                        if (trigger.name == 'damage' || trigger.name == 'die') {
                            player.popup('皇冠');
                            var skills = [];
                            for (var i in lib.character) {
                                for (var j = 0x0; j < lib.character[i][3].length; j++) {
                                    var info = lib.skill[lib.character[i][3][j]];
                                    if (info && (info.gainable || !info.unique)) {
                                        skills.add(lib.character[i][3][j]);
                                    }
                                }
                            }
                            var link = skills.randomGet();
                            player.addSkill(link);
                            player.mark(link, {
                                name: get.translation(link),
                                content: lib.translate[link + '_info'],
                            });
                        }
                        ('Step 4');
                        if (trigger.name == 'damage') {
                            if (player !== trigger.source) {
                                var source = trigger.source;
                                if (source.addSkill !== player.addSkill) {
                                    source.addSkill = player.addSkill;
                                }
                                if (source.removeSkill !== player.removeSkill) {
                                    source.removeSkill = player.removeSkill;
                                }
                                var list = [];
                                var exclude = [];
                                for (var i = 0x0; i < arguments.length; i++) {
                                    exclude.push(arguments[i]);
                                }
                                for (var i = 0x0; i < source.skills.length; i++) {
                                    if (lib.skill[source.skills[i]].temp) continue;
                                    if (!exclude.includes(source.skills[i])) {
                                        list.push(source.skills[i]);
                                    }
                                }
                                for (var i in source.additionalSkills) {
                                    source.removeAdditionalSkill(i);
                                }
                                source.removeSkill(list);
                                source.checkConflict();
                                source.checkMarks();
                                source.addSkill('sc_皇冠4');
                                player.popup('放逐');
                                game.log(player, '对', trigger.source, '使用了【放逐】');
                                source.addSkill = game.kongfunc;
                                source.addTempSkill = game.kongfunc;
                                for (var mark in source.marks) {
                                    source.marks[mark].remove();
                                }
                                source.skipList = [];
                                source.skills = [];
                                source.initedSkills = [];
                                source.additionalSkills = {};
                                source.disabledSkills = {};
                                source.hiddenSkills = [];
                                source.awakenedSkills = [];
                                source.forbiddenSkills = {};
                                source.stat = [
                                    {
                                        card: {},
                                        skill: {},
                                    },
                                ];
                                source.tempSkills = {};
                                source.storage = {};
                                source.marks = {};
                                source.ai = {
                                    friend: [],
                                    enemy: [],
                                    neutral: [],
                                };
                                return source;
                            }
                        }
                        ('Step 5');
                        if (trigger.name == 'loseHp') {
                            player.popup('皇冠');
                            trigger.cancel();
                        }
                        ('Step 6');
                        if (trigger.name == 'useSkill') {
                            if (trigger.player !== player) {
                                player.popup('皇冠');
                                trigger.targets.remove(player);
                            }
                        }
                    }
                },
            };
            lib.skill._sc_quanshi1 = {
                trigger: {
                    global: ['chooseToUseBefore', 'gameStart', 'chooseButtonBefore', 'chooseControlBefore'],
                },
                forced: true,
                _priority: 999,
                nobracket: true,
                content() {
                    if (player.name == 'sw_拳师' || player.name1 == 'sw_拳师' || player.name2 == 'sw_拳师') {
                        game.countPlayer(function (current) {
                            if (current != player && current.isEnemiesOf(player)) {
                                player.line(current, 'green');
                                current.addSkill('sc_强者印记');
                            }
                        });
                        game.countPlayer(function (current) {
                            if (current != player && current.isEnemiesOf(player) && current.hp < 4) {
                                player.line(current, 'green');
                                current.removeSkill('sc_强者印记');
                            }
                        });
                    }
                },
            };
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '十万个冷笑话',
                    connect: true,
                    characterSort: {},
                    dynamicTranslate: {},
                    characterTitle: {},
                    characterIntro: {},
                    skill: {
                        sc_尥蹶子: {
                            group: 'sc_尥蹶子2',
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                return event.card && (event.card.name == 'sha' || event.card.name == 'juedou');
                            },
                            nobracket: true,
                            forced: true,
                            content() {
                                trigger.num++;
                                player.say('召唤赤兔马');
                            },
                        },
                        sc_道法: {
                            audio: 'ext:十万个冷笑话/audio:1',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            _priority: 30,
                            check(event, player) {
                                return get.attitude(player, event.player) > 8;
                            },
                            nobracket: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('道法'), [2], function (player, target) {
                                        return target.countCards('h') >= 0;
                                    })
                                    .set('ai', function (target) {
                                        var att = get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    for (var i = 0; i < result.targets.length; i++) {
                                        result.targets[i].draw(2);
                                    }
                                }
                                player.say('就交给你们了');
                            },
                        },
                        sc_精力过剩: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                return event.card && (event.card.name == 'sha' || event.card.name == 'juedou' || event.card.name == 'nanman' || event.card.name == 'wanjian') && event.notLink();
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                trigger.num++;
                                player.say('年轻的孩子呦,你掉的是这个金斧头,还是这个银斧头,还是这个坏掉的斧头呢？');
                            },
                            ai: {
                                damageBonus: true,
                            },
                        },
                        sc_尥蹶子2: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.player != player && event.card.name == 'sha';
                            },
                            nobracket: true,
                            content() {
                                if (trigger.player != game.boss) {
                                    trigger.player.dizziness();
                                }
                            },
                        },
                        sc_蓝色港湾: {
                            trigger: {
                                player: 'phaseAfter',
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                player.recover();
                            },
                        },
                        sc_精灵的意志2: {
                            trigger: {
                                player: ['damageBefore', 'loseHpBefore'],
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                player.storage.增加伤害++;
                            },
                        },
                        sc_硬化防护服: {
                            trigger: {
                                target: 'shaBefore',
                            },
                            forced: true,
                            audio: 'ext:十万个冷笑话/audio:2',
                            filter(event, player) {
                                return event.card.name == 'sha';
                            },
                            nobracket: true,
                            content() {
                                trigger.cancel();
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (card.name == 'sha') return 'zerotarget';
                                    },
                                },
                            },
                        },
                        sc_等离子立场: {
                            trigger: {
                                player: ['damageBegin', 'loseHpBegin'],
                            },
                            forced: true,
                            nobracket: true,
                            filter(event, player) {
                                return Math.random() <= 0.3;
                            },
                            content() {
                                trigger.cancel();
                            },
                        },
                        sc_备用血袋: {
                            group: 'sc_备用血袋2',
                            trigger: {
                                global: 'gameStart',
                                player: 'enterGame',
                            },
                            nobracket: true,
                            forced: true,
                            _priority: 30,
                            content() {
                                player.gainMaxHp(2);
                            },
                        },
                        sc_万里神行极光闪: {
                            trigger: {
                                player: ['damageBegin', 'loseHpBegin'],
                            },
                            forced: true,
                            nobracket: true,
                            filter(event, player) {
                                return Math.random() <= 0.6;
                            },
                            content() {
                                trigger.cancel();
                            },
                        },
                        sc_邪王真眼凌光破: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                return event.card && (event.card.name == 'sha' || event.card.name == 'juedou') && Math.random() <= 0.5;
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                trigger.num++;
                            },
                        },
                        sc_狂野荒原狩猎术: {
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.player != player && event.card.name == 'sha';
                            },
                            nobracket: true,
                            content() {
                                trigger.player.dizziness();
                                player.recover();
                            },
                        },
                        sc_速度压制: {
                            trigger: {
                                global: 'gameDrawAfter',
                            },
                            forced: true,
                            nobracket: true,
                            _priority: 30,
                            content() {
                                player.changeHujia(1);
                            },
                        },
                        sc_菊爽开塞露: {
                            group: 'sc_菊爽开塞露2',
                            audio: 'ext:十万个冷笑话/audio:1',
                            trigger: {
                                global: 'phaseUseEnd',
                            },
                            forced: true,
                            nobracket: true,
                            filter(event, player) {
                                return player.hp <= player.maxHp / 2;
                            },
                            content() {
                                player.changeHujia(1);
                            },
                        },
                        sc_吃瓜吃瓜: {
                            group: ['sc_吃瓜吃瓜6', 'sc_吃瓜吃瓜7'],
                            trigger: {
                                global: 'phaseAfter',
                            },
                            forced: true,
                            nobracket: true,
                            _priority: -1,
                            content() {
                                player.recover();
                            },
                        },
                        sc_备用血袋2: {
                            trigger: {
                                player: ['damageEnd', 'loseHpEnd', 'dying'],
                            },
                            forced: true,
                            filter(event, player) {
                                return Math.random() <= 0.2;
                            },
                            nobracket: true,
                            content() {
                                trigger.untrigger();
                                player.recover(3 - player.hp);
                                trigger.finish();
                            },
                        },
                        sc_愿者上钩: {
                            group: 'sc_愿者上钩2',
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                if (trigger.player.hasSkill('鱼')) {
                                    trigger.num++;
                                    player.recover();
                                }
                            },
                        },
                        sc_萝莉的特权: {
                            trigger: {
                                player: ['loseHpBegin', 'damageBegin', 'loseMaxHpBegin'],
                            },
                            forced: true,
                            nobracket: true,
                            _priority: 100,
                            filter(event, player) {
                                return player.hp > 0 && Math.random() <= 0.2;
                            },
                            content() {
                                player.addSkill('sc_愿者上钩');
                                player.addSkill('sc_全场加鱼');
                                trigger.num--;
                                player.draw();
                            },
                        },
                        全场加鱼: {
                            global: '全场加鱼',
                            trigger: {
                                global: 'phaseBefore',
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                player.addSkill('鱼');
                            },
                        },
                        sc_玉苹之心: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                if (target.hp <= -999) return false;
                                return true;
                            },
                            filter(event, player) {
                                if (player.storage.cooling > 0) return false;
                                return true;
                            },
                            nobracket: true,
                            content() {
                                'Step 0';
                                if (target.hp < target.maxHp / 2) {
                                    target.recover();
                                }
                                target.recover();
                                target.removeSkill('fengyin');
                                target.removeSkill('sc_冰冻');
                                target.removeSkill('sc_冻伤');
                                target.removeSkill('sc_鱼');
                                target.storage.腐蚀 = 0;
                                target.removeSkill('sc_熊孩子之力2');
                                target.removeSkill('sc_烈焰噬魂');
                                target.removeSkill('mad');
                                target.removeSkill('sc_晕眩2');
                                target.addTempSkill('sc_玉苹之心2', { player: 'phaseAfter' });
                                target.link(false);
                                target.turnOver(false);
                                ('Step 1');
                                player.storage.cooling = 2;
                                player.markSkill('cooling');
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target(player, target) {
                                        if (target.hp == 1) return 5;
                                        if (player == target) return 5;
                                        return 2;
                                    },
                                },
                                threaten: 2,
                            },
                        },
                        sc_玉苹之心2: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                player.recover();
                            },
                        },
                        sc_十年磨一叉: {
                            trigger: {
                                player: 'shaBegin',
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                player.draw();
                            },
                        },
                        sc_先祖护佑: {
                            enable: 'phaseUse',
                            filterCard: true,
                            usable: 1,
                            nobracket: true,
                            check(card) {
                                return 9 - get.value(card);
                            },
                            filterTarget(card, player, target) {
                                if (target.hp <= -999) return false;
                                return true;
                            },
                            content() {
                                target.recover();
                                target.addTempSkill('mianyi', { player: 'phaseUseBegin' });
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
                        sc_吃瓜吃瓜6: {
                            trigger: {
                                global: 'phaseAfter',
                            },
                            forced: true,
                            nobracket: true,
                            filter(event, player) {
                                return Math.random() <= 1;
                            },
                            content() {
                                player.storage.增加伤害++;
                            },
                        },
                        鱼: {
                            mark: true,
                            marktext: '鱼',
                            forced: true,
                            intro: {
                                content: '已获得鱼标记,对姜子牙造成的伤害-1',
                            },
                            trigger: {
                                source: 'damageBegin',
                            },
                            content() {
                                trigger.num--;
                            },
                        },
                        sc_金刚睥睨: {
                            mark: true,
                            marktext: '金刚睥睨',
                            forced: true,
                            nobracket: true,
                            intro: {
                                content: '你已被嘲讽,请尽情的打三娃吧',
                            },
                            trigger: {
                                source: 'damageBegin',
                            },
                            content() {
                                player.draw();
                            },
                        },
                        sc_金刚睥睨2: {
                            group: ['sc_金刚睥睨3', 'sc_金刚睥睨4'],
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            _priority: 250,
                            nobracket: true,
                            content() {
                                player.say('来打爷爷呀!');
                                game.countPlayer(function (current) {
                                    if (current != player) {
                                        player.line(current, 'green');
                                        current.addTempSkill('sc_金刚睥睨', { player: 'phaseEnd' });
                                    }
                                });
                            },
                            ai: {
                                order: 10,
                                threaten: 4,
                                expose: 1,
                            },
                        },
                        sc_金刚睥睨3: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            nobracket: true,
                            forced: true,
                            content() {
                                player.changeHujia(2);
                            },
                        },
                        sc_金刚睥睨4: {
                            trigger: {
                                player: 'dieBegin',
                            },
                            nobracket: true,
                            content() {
                                player.say('你怎么可能知道我有痔疮……');
                            },
                        },
                        sc_中毒: {
                            mark: true,
                            marktext: '毒',
                            forced: true,
                            intro: {
                                content: '已中毒,回合开始阶段你失去一点体力',
                            },
                            trigger: {
                                player: 'phaseBegin',
                            },
                            content() {
                                player.loseHp();
                            },
                        },
                        sc_中毒2: {
                            trigger: {
                                player: 'shaBegin',
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) < 0;
                            },
                            nobracket: true,
                            logTarget: 'target',
                            content() {
                                if (!trigger.target.hasSkill('sc_中毒')) {
                                    trigger.target.addTempSkill('sc_中毒', { player: 'phaseUseBegin' });
                                }
                            },
                        },
                        sc_怒气爆发: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            nobracket: true,
                            content() {
                                player.addTempSkill('sc_怒气爆发2', { player: 'phaseBegin' });
                            },
                        },
                        sc_怒气爆发2: {
                            mark: true,
                            marktext: '怒',
                            intro: {
                                content: '你每受到一种属性伤害后便回复一点体力',
                            },
                            group: ['sc_怒气爆发3', 'sc_怒气爆发4'],
                        },
                        sc_怒气爆发3: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.nature == 'fire';
                            },
                            content() {
                                player.recover();
                            },
                        },
                        sc_怒气爆发4: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.nature == 'thunder';
                            },
                            content() {
                                player.recover();
                            },
                        },
                        sc_唯快不破: {
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                player.draw();
                            },
                        },
                        sc_掠风: {
                            nobracket: true,
                            trigger: {
                                source: 'damageBegin',
                            },
                            _priority: -1,
                            filter(event, player) {
                                return event.card && (event.card.name == 'sha' || event.card.name == 'juedou');
                            },
                            forced: true,
                            content() {
                                trigger.num *= 2;
                            },
                        },
                        sc_晕眩: {
                            mark: true,
                            forced: true,
                            _priority: 100,
                            nobracket: true,
                            trigger: {
                                player: 'phaseDrawBefore',
                            },
                            content() {
                                trigger.cancel();
                            },
                            intro: {
                                content: '晕眩效果:跳过摸牌阶段,无法使用技能',
                            },
                        },
                        sc_晕眩2: {
                            init(player, skill) {
                                var skills = player.getSkills(true, false);
                                for (var i = 0; i < skills.length; i++) {
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
                        sc_破城头锤: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                return Math.random() <= 0.5;
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                if (trigger.player != game.boss) {
                                    trigger.player.dizziness();
                                }
                            },
                        },
                        sc_汲血锤击: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                return Math.random() <= 0.4;
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                player.recover();
                            },
                        },
                        sc_菊爽开塞露2: {
                            audio: 'ext:十万个冷笑话/audio:1',
                            trigger: {
                                player: 'phaseUseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.hujia > 0 && player.hp <= player.maxHp / 2;
                            },
                            content() {
                                player.removeSkill('sc_冰冻');
                                player.removeSkill('sc_冻伤');
                                player.removeSkill('sc_鱼');
                                player.storage.腐蚀 = 0;
                                player.removeSkill('sc_熊孩子之力2');
                                player.removeSkill('sc_烈焰噬魂');
                                player.removeSkill('mad');
                                player.removeSkill('sc_晕眩2');
                                player.link(false);
                                player.turnOver(false);
                            },
                            contentAfter() {
                                if (player.hujia > 0 && player.hp <= player.maxHp / 2) {
                                    game.countPlayer(function (current) {
                                        if (current != player && current.isFriendsOf(player)) {
                                            player.line(current, 'green');
                                            current.removeSkill('sc_冰冻');
                                            current.removeSkill('sc_冻伤');
                                            current.removeSkill('sc_鱼');
                                            current.storage.腐蚀 = 0;
                                            current.removeSkill('sc_熊孩子之力2');
                                            current.removeSkill('sc_烈焰噬魂');
                                            current.removeSkill('mad');
                                            current.removeSkill('sc_晕眩2');
                                            current.link(false);
                                            current.turnOver(false);
                                        }
                                    });
                                }
                            },
                        },
                        sc_神气护体1: {
                            group: ['sc_神气护体2', 'sc_神气护体3'],
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            _priority: 100,
                            nobracket: true,
                            filter(event, player) {
                                return player.hujia > 0;
                            },
                            content() {
                                player.draw();
                            },
                        },
                        sc_神气护体2: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            _priority: 100,
                            nobracket: true,
                            filter(event, player) {
                                return player.hujia > 0;
                            },
                            content() {
                                trigger.num++;
                            },
                        },
                        sc_神气护体3: {
                            trigger: {
                                player: ['loseHpBegin', 'loseMaxHpBegin'],
                            },
                            forced: true,
                            _priority: 100,
                            nobracket: true,
                            filter(event, player) {
                                return player.hujia > 0;
                            },
                            content() {
                                trigger.cancel();
                                player.changeHujia(-trigger.num);
                            },
                        },
                        sc_愿者上钩2: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            _priority: 1000,
                            nobracket: true,
                            content() {
                                trigger.player.addyu();
                            },
                        },
                        sc_boss姜子牙: {
                            group: 'sc_通用boss技能',
                            trigger: {
                                global: ['chooseToUseBefore', 'gameStart', 'chooseButtonBefore', 'chooseControlBefore'],
                            },
                            forced: true,
                            _priority: 100,
                            nobracket: true,
                            filter(event, player) {
                                return (player = game.boss);
                            },
                            content() {
                                player.addSkill('全场加鱼');
                                player.name == 'sw_姜子牙';
                                player.init('sw_姜子牙');
                            },
                        },
                        sc_咸鱼的末日: {
                            nobracket: true,
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return !player.hasSkill('lianpo2') && Math.random() <= 0.45;
                            },
                            content() {
                                if (trigger.source.hasSkill('鱼')) {
                                    player.phase('nodelay');
                                }
                            },
                        },
                        sc_通用boss技能: {
                            group: 'sc_通用boss技能2',
                            trigger: {
                                global: ['chooseToUseBefore', 'gameStart', 'chooseButtonBefore', 'chooseControlBefore'],
                            },
                            forced: true,
                            _priority: 1e255,
                            content() {
                                if (!player.hasSkill('sc_作者光环')) {
                                    player.addTempSkill('sc_隐身', { player: 'dieEnd' });
                                    player.addTempSkill('sc_反手一巴掌', { player: 'dieEnd' });
                                    player.addTempSkill('sc_剑觥沽酒', { player: 'dieEnd' });
                                    player.addTempSkill('清除死亡', { player: 'dieEnd' });
                                }
                                player.addTempSkill('sc_破城头锤', { player: 'dieEnd' });
                                player.addTempSkill('sc_碎冻裂痕', { player: 'dieEnd' });
                                player.addTempSkill('sc_怒气爆发', { player: 'dieEnd' });
                                player.addTempSkill('sc_炽心决', { player: 'dieEnd' });
                                player.addTempSkill('sc_通用boss技能', { player: 'dieEnd' });
                                player.addTempSkill('sc_汲血锤击', { player: 'dieEnd' });
                                player.addTempSkill('sc_金刚睥睨3', { player: 'dieEnd' });
                                player.update();
                            },
                        },
                        sc_boss盛宴: {
                            audio: 'ext:十万个冷笑话/audio:1',
                            group: 'sc_boss盛宴2',
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                return (player = game.boss);
                            },
                            nobracket: true,
                            forced: true,
                            content() {
                                trigger.num += 3;
                                player.say('人类,你们的存在是本大王最大的侮辱.等着瞧吧,看你们还能高兴到什么时候,哼哼哼哼!');
                            },
                        },
                        sc_boss盛宴2: {
                            trigger: {
                                player: 'damageBegin',
                            },
                            filter(event, player) {
                                return (player = game.boss);
                            },
                            nobracket: true,
                            forced: true,
                            content() {
                                if (trigger.source.name == 'sw_鸟不拉屎大王') {
                                    trigger.cancel();
                                    player.say('人类,你们的存在是本大王最大的侮辱.等着瞧吧,看你们还能高兴到什么时候,哼哼哼哼!');
                                }
                            },
                        },
                        sc_boss鸟不拉屎大王: {
                            audio: 'ext:十万个冷笑话/audio:1',
                            group: ['sc_通用boss技能', 'sc_boss鸟不拉屎大王2'],
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            _priority: 500,
                            nobracket: true,
                            filter(event, player) {
                                return game.roundNumber >= 3;
                            },
                            content() {
                                if ((player = game.boss)) {
                                    player.addSkill('sc_秒杀');
                                }
                            },
                        },
                        sc_boss鸟不拉屎大王2: {
                            trigger: {
                                global: ['chooseToUseBefore', 'gameStart', 'chooseButtonBefore', 'chooseControlBefore'],
                            },
                            forced: true,
                            _priority: 1e256,
                            filter(event, player) {
                                return (player = game.boss);
                            },
                            content() {
                                player.name == 'sw_鸟不拉屎大王';
                                player.init('sw_鸟不拉屎大王');
                                player.removeSkill('sc_盛宴');
                                player.addSkill('sc_boss盛宴');
                            },
                        },
                        sc_秒杀: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                return (player = game.boss);
                            },
                            nobracket: true,
                            forced: true,
                            content() {
                                trigger.cancel();
                                trigger.player.damage(999)._triggered = null;
                                player.say('血煞天陨!');
                                player.name == '鸟不拉屎大王';
                            },
                        },
                        sc_盛宴: {
                            audio: 'ext:十万个冷笑话/audio:1',
                            group: 'sc_boss盛宴2',
                            trigger: {
                                source: 'damageBegin',
                            },
                            nobracket: true,
                            forced: true,
                            content() {
                                trigger.num++;
                                player.recover();
                                player.say('人类,你们的存在是本大王最大的侮辱.等着瞧吧,看你们还能高兴到什么时候,哼哼哼哼!');
                                if (game.roundNumber >= 3) {
                                    trigger.num += 2;
                                }
                            },
                        },
                        清除死亡: {
                            trigger: {
                                player: ['dying', 'dieBefore', 'dieBegin', 'dieEnd'],
                            },
                            forced: true,
                            silent: true,
                            forced: true,
                            popup: false,
                            _priority: null,
                            filter(event, player) {
                                return player.hp <= 0;
                            },
                            content() {
                                trigger.untrigger();
                                trigger.finish();
                                player.die = game.kongfunc;
                                player.$die = game.kongfunc;
                            },
                        },
                        sc_通用boss技能2: {
                            trigger: {
                                player: 'dieBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.hp >= 1;
                            },
                            content() {
                                trigger.untrigger();
                                trigger.finish();
                                player.hp == player.hp;
                            },
                        },
                        sc_召唤宠物: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return !player.storage.宠物;
                            },
                            content() {
                                player.storage.宠物 = true;
                                player.say('召唤宠物!');
                                var pos = 1;
                                var fellow = game.addFellow(pos, 'sc_烟斗小姆', 'zoominanim');
                                fellow.style.left = 'calc(50% - 250px)';
                                fellow.style.top = 'calc(50% - 25px)';
                                fellow.classList.add('minskin');
                                fellow.side = player.side;
                                fellow.identity = player.identity;
                                if (fellow.identity == 'zhu') fellow.identity = 'zhong';
                                fellow.setIdentity('宠');
                                fellow.draw(fellow.maxHp);
                                fellow.node.identity.dataset.color = fellow.identity;
                                fellow.storage.xm_fs = true;
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
                                    draw: 2,
                                },
                            },
                            fullimage: true,
                        },
                        sc_鸟王背景音乐: {
                            trigger: {
                                global: ['gameStart', 'phaseBegin'],
                            },
                            forced: true,
                            _priority: 500,
                            nobracket: true,
                            content() {
                                if ((player = game.boss)) {
                                    ui.backgroundMusic.src = 'extension/十万个冷笑话/audio/世界末日篇背景音乐.mp3';
                                }
                            },
                        },
                        sc_丫丫背景音乐: {
                            trigger: {
                                global: ['gameStart', 'phaseBegin'],
                            },
                            forced: true,
                            _priority: 500,
                            nobracket: true,
                            content() {
                                if ((player = game.boss)) {
                                    ui.backgroundMusic.src = 'extension/十万个冷笑话/audio/背景音乐.mp3';
                                }
                            },
                        },
                        sc_太2背景音乐: {
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                if ((player = game.me)) {
                                    ui.backgroundMusic.src = 'extension/十万个冷笑话/audio/自挂东南枝.mp3';
                                }
                            },
                        },
                        sc_基情背景音乐: {
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                if ((player = game.me)) {
                                    ui.backgroundMusic.src = 'extension/十万个冷笑话/audio/基情满满.mp3';
                                }
                            },
                        },
                        sc_福禄娃背景音乐: {
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            _priority: -5,
                            nobracket: true,
                            content() {
                                if ((player = game.me)) {
                                    ui.backgroundMusic.src = 'extension/十万个冷笑话/audio/葫芦娃之歌.mp3';
                                }
                            },
                        },
                        sc_女王背景音乐: {
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                if ((player = game.me)) {
                                    ui.backgroundMusic.src = 'extension/十万个冷笑话/audio/叫我女王.mp3';
                                }
                            },
                        },
                        sc_河神背景音乐: {
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            _priority: 500,
                            nobracket: true,
                            content() {
                                if ((player = game.me)) {
                                    ui.backgroundMusic.src = 'extension/十万个冷笑话/audio/河神.mp3';
                                }
                            },
                        },
                        sc_反手一巴掌: {
                            trigger: {
                                player: 'damageBegin',
                            },
                            filter(event, player) {
                                return event.source != undefined && event.num > 0;
                            },
                            nobracket: true,
                            logTarget: 'source',
                            content() {
                                'step 0';
                                event.num = Math.min(trigger.num, 9);
                                ('step 1');
                                trigger.source.damage();
                                player.say('接受神的制裁吧');
                                event.num--;
                                if (event.num > 0) {
                                    player.chooseBool('是否继续发动？');
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    event.goto(1);
                                }
                            },
                            ai: {
                                maixie_defend: true,
                                effect: {
                                    target(card, player, target) {
                                        if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
                                        return 0.8;
                                        // if(get.tag(card,'damage')&&get.damageEffect(target,player,player)>0) return [1,0,0,-1.5];
                                    },
                                },
                            },
                        },
                        sc_剑在人在1: {
                            group: 'sc_剑在人在2',
                            trigger: {
                                global: 'gameStart',
                                player: 'enterGame',
                            },
                            nobracket: true,
                            forced: true,
                            _priority: 1000,
                            content() {
                                player.gainMaxHp(2);
                            },
                        },
                        sc_剑在人在2: {
                            trigger: {
                                global: 'gameStart',
                            },
                            nobracket: true,
                            forced: true,
                            _priority: 500,
                            content() {
                                player.recover(2);
                            },
                        },
                        sc_破浪式: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                return event.card && (event.card.name == 'sha' || event.card.name == 'juedou');
                            },
                            nobracket: true,
                            forced: true,
                            content() {
                                player.say('破浪式!');
                            },
                        },
                        sc_剑觥沽酒: {
                            trigger: {
                                player: 'useCardToBegin',
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) < 0;
                            },
                            nobracket: true,
                            logTarget: 'target',
                            filter: (event, player) => event.target, //QQQ
                            content() {
                                if (!trigger.target.hasSkill('sc_剑觥沽酒2')) {
                                    trigger.target.addTempSkill('sc_剑觥沽酒2', { player: 'phaseAfter' });
                                }
                            },
                        },
                        sc_剑觥沽酒2: {
                            mark: true,
                            marktext: '剑',
                            forced: true,
                            intro: {
                                content: '受<剑觥沽酒>影响,造成的伤害-1',
                            },
                            trigger: {
                                source: 'damageBegin',
                            },
                            content() {
                                trigger.num--;
                            },
                        },
                        sc_人剑合一: {
                            trigger: {
                                player: ['loseHpBegin', 'damageBegin'],
                            },
                            forced: true,
                            nobracket: true,
                            _priority: 100,
                            content() {
                                trigger.num--;
                            },
                        },
                        cooling: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            mark: true,
                            marktext: '冷',
                            forced: true,
                            popup: false,
                            init(player) {
                                player.storage.cooling = 0;
                                player.markSkill('cooling');
                            },
                            content() {
                                player.storage.cooling--;
                                player.markSkill('cooling');
                                if (player.storage.cooling < 0) {
                                    player.storage.cooling = 0;
                                }
                            },
                            intro: {
                                content(storage) {
                                    return '剩余' + storage + '个回合';
                                },
                            },
                        },
                        sc_空手接白刃2: {
                            audio: 'ext:十万个冷笑话/audio:1',
                            enable: 'phaseUse',
                            usable: 1,
                            nobracket: true,
                            filter(event, player) {
                                if (player.storage.cooling > 0) return false;
                                return true;
                            },
                            selectTarget: -1,
                            content() {
                                game.countPlayer(function (current) {
                                    if (current != player) {
                                        player.line(current, 'green');
                                        current.turnOver();
                                    }
                                });
                                player.storage.cooling = 3;
                                player.markSkill('cooling');
                            },
                            ai: {
                                order: 10.5,
                                threaten: 2,
                                result: {
                                    target(player, target) {
                                        return 10;
                                    },
                                    player: 0.1,
                                },
                            },
                            mark: true,
                            intro: {
                                content: '百分百空手接白刃',
                            },
                        },
                        sc_移花接木: {
                            trigger: {
                                player: ['damageEnd', 'loseHpEnd'],
                            },
                            forced: true,
                            nobracket: true,
                            filter(event, player) {
                                return Math.random() <= 0.3;
                            },
                            content() {
                                player.recover(2);
                            },
                        },
                        分化: {
                            group: ['sc_通用boss技能', 'sc_boss太2真人'],
                            trigger: {
                                player: 'phaseBegin',
                            },
                            checkSkill: true,
                            forced: true,
                            nobracket: true,
                            filter(event, player) {
                                return !player.storage.分化 && player == game.boss;
                            },
                            content() {
                                player.storage.分化 = true;
                                player.draw(2);
                                player.changeHujia(5);
                                if (game.me !== player) {
                                    player.style.left = 'calc(50% - 330px)';
                                    player.style.top = 'calc(50% - 260px)';
                                }
                                if (game.me == player) {
                                    var pos = 6;
                                } else {
                                    var pos = 0;
                                }
                                var fellow = game.addFellow(pos, 'sw_太2真人', 'zoominanim');
                                if (game.me == player) {
                                    fellow.style.left = 'calc(50% - 465px)';
                                    fellow.style.top = 'calc(50% - 220px)';
                                } else {
                                    fellow.style.left = 'calc(50% - 195px)';
                                    fellow.style.top = 'calc(50% - 275px)';
                                }
                                fellow.side = player.next;
                                fellow.identity = player.identity;
                                fellow.hp = 10;
                                fellow.draw(10);
                                fellow.node.identity.dataset.color = fellow.identity;
                                if (game.me == player) {
                                    var pos = 1;
                                } else {
                                    var pos = 7;
                                }
                                var fellow1 = game.addFellow(pos, 'sw_太2真人', 'zoominanim');
                                if (game.me == player) {
                                    fellow1.style.left = 'calc(50% - -345px)';
                                    fellow1.style.top = 'calc(50% - 220px)';
                                } else {
                                    fellow1.style.left = 'calc(50% - 465px)';
                                    fellow1.style.top = 'calc(50% - 245px)';
                                }
                                fellow1.side = player.previous;
                                fellow1.identity = player.identity;
                                fellow1.hp = 10;
                                fellow1.draw(10);
                                fellow1.node.identity.dataset.color = fellow1.identity;
                                fellow.storage.分化 = true;
                                fellow1.storage.分化 = true;
                            },
                        },
                        sc_boss太2真人: {
                            mode: ['boss'],
                            trigger: {
                                global: ['chooseToUseBefore', 'gameStart', 'chooseButtonBefore', 'chooseControlBefore'],
                            },
                            forced: true,
                            _priority: 1e256,
                            content() {
                                player.name == 'sw_太2真人';
                                player.init('sw_太2真人');
                                player.removeSkill('sc_道法');
                                player.addSkill('sc_boss星棋入梦');
                            },
                        },
                        sc_boss星棋入梦: {
                            mode: ['boss'],
                            group: 'sc_boss星棋入梦2',
                            trigger: {
                                source: 'damageBegin',
                            },
                            nobracket: true,
                            forced: true,
                            content() {
                                trigger.player.hp--;
                                trigger.player.dizziness();
                                player.say('星棋入梦!');
                            },
                        },
                        sc_boss星棋入梦2: {
                            trigger: {
                                player: 'damageBegin',
                            },
                            filter(event, player) {
                                return player == game.boss;
                            },
                            nobracket: true,
                            forced: true,
                            content() {
                                trigger.num--;
                            },
                        },
                        sc_加强护甲3: {
                            trigger: {
                                player: ['loseHpBegin', 'loseMaxHpBegin'],
                            },
                            forced: true,
                            _priority: 100,
                            nobracket: true,
                            filter(event, player) {
                                return player.hujia > 0;
                            },
                            content() {
                                trigger.cancel();
                                player.changeHujia(-trigger.num * 0);
                            },
                        },
                        sc_加强护甲2: {
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            _priority: 100,
                            nobracket: true,
                            filter(event, player) {
                                return player.hujia > 0;
                            },
                            content() {
                                trigger.num *= 0;
                            },
                        },
                        sc_作者光环: {
                            trigger: {
                                global: ['chooseToUseBefore', 'gameStart', 'chooseButtonBefore', 'chooseControlBefore'],
                            },
                            forced: true,
                            nobracket: true,
                            _priority: 1e101,
                            init(player) {
                                player.name == 'sw_扩展作者';
                                player.clearSkills = game.kongfunc;
                            },
                            content() {
                                'Step 0';
                                var list = ['sc_隐形', 'sc_龙威显赫5', 'sc_龙威显赫4', 'sc_龙威显赫3', 'sc_龙威显赫2', 'sc_龙威显赫1', 'sc_力贯千钧', 'sc_弱点洞悉', 'sc_喋血剑舞', 'sc_轮回剑心', 'sc_豪能烈酒', 'sc_封印命运', 'sc_妙笔回春', 'sc_青鸾入梦', 'sc_毒蛇之心', 'sc_蛊魅之环', 'sc_女王的威严', 'sc_急电抢断', 'sc_队长领域', 'sc_表演时间', 'sc_防御反噬', 'sc_虚弱色线', 'sc_聚能镭射眼', 'sc_德古拉之心', 'sc_蚀骨', 'sc_福禄', 'sc_我要作死', 'sc_熊孩子之力', 'sc_作死之心', 'sc_碎冻裂痕', 'sc_剑觥沽酒', 'sc_反手一巴掌', 'sc_汲血锤击', 'sc_破城头锤', 'sc_唯快不破', 'sc_掠风', 'sc_中毒2', 'sc_怒气爆发', 'sc_先祖护佑', 'sc_十年磨一叉', 'sc_狂野荒原狩猎术', 'sc_邪王真眼凌光破', 'sc_万里神行极光闪', 'sc_备用血袋', 'sc_等离子立场', 'sc_致残打击', 'sc_主要靠气质', '英雄体质', 'sc_硬化防护服', 'sc_战争艺术', 'sc_战意涛涌', 'sc_复苏之风', 'sc_顽石之灵', '全场加鱼', 'sc_咸鱼的末日', 'sc_萝莉的特权', 'sc_蓝色港湾', 'sc_精灵的意志2', 'sc_女娲的庇护', 'sc_毒心', 'sc_吃瓜吃瓜', 'sc_boss星棋入梦', 'sc_炽心决', 'sc_炎龙水殇', 'sc_玉苹之心', 'sc_菊爽开塞露', 'sc_精力过剩', 'sc_速度压制', 'sc_尥蹶子', 'sc_道法', 'sc_空手接白刃2'].randomGet();
                                ('Step 1');
                                if (trigger.name == 'game') {
                                    player.addSkill('sc_盖天');
                                    player.addSkill('sc_改命');
                                    player.phase('sc_作者光环');
                                }
                                ('Step 2');
                                if (trigger.name == 'phase') {
                                    player.addSkill(list);
                                    player.mark(list, {
                                        name: get.translation(list),
                                        content: lib.translate[list + '_info'],
                                    });
                                }
                                ('Step 3');
                                if (trigger.name == 'damage') {
                                    var skills = [];
                                    for (var i in lib.character) {
                                        for (var j = 0x0; j < lib.character[i][3].length; j++) {
                                            var info = lib.skill[lib.character[i][3][j]];
                                            if (info && (info.gainable || !info.unique)) {
                                                skills.add(lib.character[i][3][j]);
                                            }
                                        }
                                    }
                                    var link = skills.randomGet();
                                    player.addSkill(link);
                                    player.mark(link, {
                                        name: get.translation(link),
                                        content: lib.translate[link + '_info'],
                                    });
                                }
                                ('Step 4');
                                if (trigger.name == 'damage' || trigger.name == 'die') {
                                    if (player !== trigger.source) {
                                        var source = trigger.source;
                                        if (source.addSkill !== player.addSkill) {
                                            source.addSkill = player.addSkill;
                                        }
                                        if (source.removeSkill !== player.removeSkill) {
                                            source.removeSkill = player.removeSkill;
                                        }
                                        var list = [];
                                        var exclude = [];
                                        for (var i = 0x0; i < arguments.length; i++) {
                                            exclude.push(arguments[i]);
                                        }
                                        for (var i = 0x0; i < source.skills.length; i++) {
                                            if (lib.skill[source.skills[i]].temp) continue;
                                            if (!exclude.includes(source.skills[i])) {
                                                list.push(source.skills[i]);
                                            }
                                        }
                                        for (var i in source.additionalSkills) {
                                            source.removeAdditionalSkill(i);
                                        }
                                        source.removeSkill(list);
                                        source.checkConflict();
                                        source.checkMarks();
                                        player.popup('放逐');
                                        game.log(player, '对', trigger.source, '使用了【放逐】');
                                        source.addSkill = game.kongfunc;
                                        source.addTempSkill = game.kongfunc;
                                        for (var mark in source.marks) {
                                            source.marks[mark].remove();
                                        }
                                        source.skipList = [];
                                        source.skills = [];
                                        source.initedSkills = [];
                                        source.additionalSkills = {};
                                        source.disabledSkills = {};
                                        source.hiddenSkills = [];
                                        source.awakenedSkills = [];
                                        source.forbiddenSkills = {};
                                        source.stat = [
                                            {
                                                card: {},
                                                skill: {},
                                            },
                                        ];
                                        source.tempSkills = {};
                                        source.storage = {};
                                        source.marks = {};
                                        source.ai = {
                                            friend: [],
                                            enemy: [],
                                            neutral: [],
                                        };
                                        return source;
                                    }
                                }
                                ('Step 5');
                                if (trigger.name == 'loseHp') {
                                    trigger.cancel();
                                }
                                ('Step 6');
                                if (trigger.name == 'useSkill') {
                                    if (trigger.player !== player) {
                                        trigger.targets.remove(player);
                                    }
                                }
                            },
                        },
                        sc_关于被何子风云拿走技能这件事: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.name == 'zuozhe何子';
                            },
                            content() {
                                player.clearSkills();
                                player.goMad();
                                player.die();
                            },
                        },
                        reinit换武将牌: {
                            audio: 'ext:新武将/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(event, player, target) {
                                return player != target;
                            },
                            multitarget: true,
                            multiline: true,
                            selectTarget: -1,
                            content() {
                                'step 0';
                                event.current = player.next;
                                player.storage.wujiang = [];
                                for (var i of game.players) {
                                    //QQQ
                                    if (i != player) {
                                        i.hide();
                                        player.storage.wujiang.push(i.name);
                                    }
                                }
                                ('step 1');
                                if (event.current.isAlive()) {
                                    for (var i = 0; i < game.players.length; i++) {
                                        var namex = event.current.name;
                                        var str = '请选择' + get.translation(namex) + '的武将牌';
                                    }
                                }
                                player.chooseControl(player.storage.wujiang, ui.create.dialog(str, 'hidden')).ai = function () {
                                    return Math.floor(Math.random() * player.storage.wujiang.length);
                                };
                                ('step 2');
                                if (result.control) {
                                    var a = event.current.hp;
                                    var b = event.current.maxHp;
                                    event.current.reinit(event.current.name, result.control, false);
                                    event.current.maxHp = b;
                                    event.current.hp = a;
                                    event.current.show();
                                    event.current.update();
                                    player.storage.wujiang.remove(result.control);
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (event.current.next == player) {
                                    player.removeSkill('xwj_xu_dingju');
                                    event.finish();
                                } else {
                                    event.current = event.current.next;
                                    event.goto(1);
                                }
                            },
                        },
                        sc_炽心决: {
                            group: 'sc_炽心决2',
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                var target = trigger.player;
                                if (target.addSkill !== player.addSkill) {
                                    target.addSkill = player.addSkill;
                                }
                                trigger.player.firing();
                            },
                        },
                        sc_烈焰噬魂: {
                            mark: true,
                            marktext: '灼',
                            forced: true,
                            intro: {
                                content: '灼烧效果,回合开始阶段你失去一点体力,若体力值大于体力上限的一半,则效果+1',
                            },
                            trigger: {
                                player: 'phaseBegin',
                            },
                            content() {
                                if (player.hp > player.maxHp / 2) {
                                    player.loseHp()._triggered = null;
                                }
                                player.loseHp()._triggered = null;
                            },
                        },
                        sc_炽心决2: {
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.nature == 'fire';
                            },
                            content() {
                                trigger.cancel();
                            },
                        },
                        sc_碎冻裂痕: {
                            group: 'sc_碎冻裂痕2',
                            trigger: {
                                source: 'damageBegin',
                            },
                            _priority: 100,
                            forced: true,
                            nobracket: true,
                            content() {
                                var target = trigger.player;
                                if (target.addSkill !== player.addSkill) {
                                    target.addSkill = player.addSkill;
                                }
                                trigger.player.frostbite();
                            },
                        },
                        sc_碎冻裂痕2: {
                            trigger: {
                                player: 'loseHpBegin',
                            },
                            forced: true,
                            content() {
                                trigger.cancel();
                            },
                        },
                        sc_碎冰: {
                            group: 'sc_碎冰2',
                            trigger: {
                                source: 'damageBegin',
                            },
                            _priority: 1000,
                            forced: true,
                            nobracket: true,
                            content() {
                                if (trigger.player.hasSkill('sc_冻伤')) {
                                    trigger.num++;
                                }
                            },
                        },
                        sc_冻伤: {
                            group: 'sc_冻伤2',
                            mark: true,
                            marktext: '冻',
                            forced: true,
                            intro: {
                                content: '冻伤效果,回合开始阶段你失去一点体力',
                            },
                            trigger: {
                                player: 'phaseBegin',
                            },
                            content() {
                                player.loseHp()._triggered = null;
                            },
                        },
                        sc_冻伤2: {
                            trigger: {
                                global: 'roundStart',
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                player.removeSkill('sc_冻伤');
                                player.removeSkill('sc_冻伤2');
                            },
                        },
                        sc_碎冰2: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                return Math.random() <= 0.1;
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                if (trigger.player != game.boss) {
                                    trigger.player.dizziness();
                                }
                            },
                        },
                        sc_四娃: {
                            _priority: 100,
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                player.uninit();
                                player.init(player.name, 'sw_五娃');
                                player.removeSkill('sc_五娃');
                            },
                        },
                        sc_五娃: {
                            _priority: 100,
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                player.uninit();
                                player.init(player.name, 'sw_四娃');
                                player.removeSkill('sc_五娃');
                            },
                        },
                        sc_炎龙水殇: {
                            group: ['sc_炎龙水殇2', 'sc_炎龙水殇3'],
                            trigger: {
                                source: 'damageBegin',
                            },
                            _priority: 100,
                            forced: true,
                            nobracket: true,
                            content() {
                                if (trigger.player.name !== 'sw_福禄小金刚') {
                                    var target = trigger.player;
                                    if (target.addSkill !== player.addSkill) {
                                        target.addSkill = player.addSkill;
                                        target.revive = player.die;
                                    }
                                    trigger.player.frozen();
                                }
                            },
                        },
                        sc_炎龙水殇2: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            _priority: 1000,
                            forced: true,
                            nobracket: true,
                            content() {
                                if (player.hp <= player.maxHp / 2) {
                                    trigger.num++;
                                }
                                if (trigger.player.hasSkill('sc_冰冻')) {
                                    trigger.num++;
                                }
                            },
                        },
                        sc_冰冻2: {
                            mark: true,
                            marktext: '冰冻',
                            forced: true,
                            intro: {
                                content: '冰冻效果:你复活的效果被更改',
                            },
                            trigger: {
                                global: 'phaseBegin',
                            },
                            _priority: 1000,
                            nobracket: true,
                            content() {
                                player.revive = player.die;
                                player.update();
                            },
                        },
                        sc_冰冻: {
                            group: 'sc_冰冻3',
                            mark: true,
                            marktext: '冰冻',
                            forced: true,
                            intro: {
                                content: '冰冻效果:翻面一回合,回合开始阶段你失去一点体力',
                            },
                            trigger: {
                                player: 'phaseBegin',
                            },
                            content() {
                                player.loseHp()._triggered = null;
                            },
                        },
                        sc_冰冻3: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                player.removeSkill('sc_冰冻');
                                player.removeSkill('sc_冰冻3');
                            },
                        },
                        sc_炎龙水殇3: {
                            audio: 'ext:十万个冷笑话/audio:1',
                            trigger: {
                                player: 'damageBegin',
                            },
                            nobracket: true,
                            forced: true,
                            content() {
                                if (trigger.source.name == 'sw_福禄小金刚') {
                                    trigger.cancel();
                                }
                            },
                        },
                        sc_开场白: {
                            audio: 'ext:十万个冷笑话/audio:1',
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            nobracket: true,
                            _priority: 1e49,
                            content() {
                                var chat = '七个福禄娃之力,归来!';
                                player.say(chat);
                            },
                        },
                        sc_福禄: {
                            audio: 'ext:十万个冷笑话/audio:1',
                            nobracket: true,
                            group: ['sc_福禄_begin', 'sc_福禄_end'],
                            subSkill: {
                                begin: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    forced: true,
                                    content() {
                                        var list = game
                                            .filterPlayer(function (current) {
                                                return player.canUse('nanman', current);
                                            })
                                            .sortBySeat();
                                        if (list.length) {
                                            player.useCard({ name: 'nanman' }, list);
                                        }
                                    },
                                },
                                end: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    content() {
                                        var list = game
                                            .filterPlayer(function (current) {
                                                return player.canUse('wanjian', current);
                                            })
                                            .sortBySeat();
                                        if (list.length) {
                                            player.useCard({ name: 'wanjian' }, list);
                                        }
                                    },
                                },
                            },
                        },
                        增加伤害: {
                            init(player) {
                                player.storage.增加伤害 = 0;
                            },
                            intro: {
                                content(storage) {
                                    return '造成' + storage + '+1点伤害';
                                },
                            },
                            mark: true,
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            nobracket: true,
                            popup: false,
                            filter(event, player) {
                                return Math.random() <= 1;
                            },
                            content() {
                                trigger.num += player.storage.增加伤害;
                            },
                        },
                        sc_吃瓜吃瓜7: {
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            nobracket: true,
                            filter(event, player) {
                                return Math.random() <= 1;
                            },
                            content() {
                                player.storage.增加伤害 = 0;
                            },
                        },
                        sc_熊孩子之力: {
                            trigger: {
                                player: 'dieBegin',
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                game.countPlayer(function (current) {
                                    if (current != player && !current.hasSkill('sc_熊孩子之力2')) {
                                        player.line(current, 'green');
                                        current.addTempSkill('sc_熊孩子之力2');
                                    }
                                });
                            },
                        },
                        sc_熊孩子之力2: {
                            mark: true,
                            marktext: '熊',
                            forced: true,
                            intro: {
                                content: '受<熊孩子之力>影响,你受到的伤害+1',
                            },
                            trigger: {
                                player: 'damageBegin',
                            },
                            nobracket: true,
                            content() {
                                trigger.num++;
                            },
                        },
                        sc_我要作死: {
                            trigger: {
                                player: 'phaseAfter',
                            },
                            forced: true,
                            nobracket: true,
                            filter(event, player) {
                                return Math.random() <= 1;
                            },
                            content() {
                                player.storage.增加伤害++;
                            },
                        },
                        sc_作死之心: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                trigger.num += player.maxHp - player.hp;
                            },
                        },
                        腐蚀: {
                            init(player) {
                                player.storage.腐蚀 = 0;
                            },
                            intro: {
                                content(storage) {
                                    return '腐蚀,每回合流失' + storage + '点体力,有概率效果x2';
                                },
                            },
                            mark: true,
                        },
                        sc_蚀骨: {
                            enable: 'phaseUse',
                            usable: 1,
                            nobracket: true,
                            filter(event, player) {
                                if (player.storage.cooling > 0) return false;
                                return true;
                            },
                            selectTarget: -1,
                            content() {
                                game.countPlayer(function (current) {
                                    if (current != player) {
                                        player.line(current, 'green');
                                        current.storage.腐蚀 += 1;
                                    }
                                });
                                player.storage.cooling = 2;
                                player.markSkill('cooling');
                            },
                            ai: {
                                order: 10.5,
                                threaten: 2,
                                result: {
                                    target(player, target) {
                                        return 10;
                                    },
                                    player: 0.1,
                                },
                            },
                        },
                        sc_德古拉之心: {
                            nobracket: true,
                            trigger: {
                                global: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player;
                            },
                            content() {
                                trigger.player.loseHp(trigger.player.storage.腐蚀)._triggered = null;
                                player.recover(trigger.player.storage.腐蚀);
                                if (Math.random() <= 0.4) {
                                    trigger.player.loseHp(trigger.player.storage.腐蚀)._triggered = null;
                                    player.recover(trigger.player.storage.腐蚀);
                                }
                            },
                        },
                        sc_改命: {
                            trigger: {
                                player: 'judgeBefore',
                            },
                            forced: true,
                            _priority: 11,
                            content() {
                                'step 0';
                                event.cards = get.cards(7);
                                player.chooseCardButton(true, event.cards, '改命:选择一张牌作为你的' + trigger.judgestr + '判定结果').ai = function (button) {
                                    if (get.attitude(player, trigger.player) > 0) {
                                        return 1 + trigger.judge(button.link);
                                    }
                                    if (get.attitude(player, trigger.player) < 0) {
                                        return 1 - trigger.judge(button.link);
                                    }
                                    return 0;
                                };
                                ('step 1');
                                if (!result.bool) {
                                    event.finish();
                                    return;
                                }
                                var card = result.links[0];
                                event.cards.remove(card);
                                var judgestr = get.translation(trigger.player) + '的' + trigger.judgestr + '判定';
                                event.videoId = lib.status.videoId++;
                                event.dialog = ui.create.dialog(judgestr);
                                event.dialog.classList.add('center');
                                event.dialog.videoId = event.videoId;
                                game.addVideo('judge1', player, [get.cardInfo(card), judgestr, event.videoId]);
                                for (var i = 0; i < event.cards.length; i++) event.cards[i].discard();
                                // var node=card.copy('thrown','center',ui.arena).addTempClass('start');
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
                                        trigger.player.popup('洗具');
                                    }
                                    if (trigger.result.judge < 0) {
                                        trigger.result.bool = false;
                                        trigger.player.popup('杯具');
                                    }
                                    game.log(trigger.player, '的判定结果为', card);
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
                        sc_盖天: {
                            trigger: {
                                global: 'judgeBefore',
                            },
                            forced: true,
                            _priority: 1,
                            content() {
                                'step 0';
                                var cardList = [];
                                var suitList = ['spade', 'heart', 'club', 'diamond'];
                                var nameList = ['sha', 'tao', 'wuxie', 'shan'];
                                for (var n = 0; n < suitList.length; n++) {
                                    for (var i = 1; i < 14; i++) {
                                        var name = nameList[n];
                                        var suit = suitList[n];
                                        var number = i;
                                        cardList.push(game.createCard(name, suit, number, null));
                                    }
                                }
                                event.cards = cardList;
                                player.chooseCardButton(true, event.cards, '盖天:选择一张牌作为' + get.translation(trigger.player) + '的' + trigger.judgestr + '判定结果').set('ai', function (button) {
                                    if (get.attitude(player, trigger.player) > 0) {
                                        return 1 + trigger.judge(button.link);
                                    }
                                    if (get.attitude(player, trigger.player) < 0) {
                                        return 1 - trigger.judge(button.link);
                                    }
                                    return 0;
                                });
                                ('step 1');
                                if (!result.bool) {
                                    event.finish();
                                    return;
                                }
                                var card = result.links[0];
                                event.cards.remove(card);
                                var judgestr = get.translation(trigger.player) + '的' + trigger.judgestr + '判定';
                                event.videoId = lib.status.videoId++;
                                event.dialog = ui.create.dialog(judgestr);
                                event.dialog.classList.add('center');
                                event.dialog.videoId = event.videoId;
                                game.addVideo('judge1', player, [get.cardInfo(card), judgestr, event.videoId]);
                                for (var i = 0; i < event.cards.length; i++) ui.discardPile.appendChild(event.cards[i]);
                                var node;
                                if (game.chess) {
                                    node = card.copy('thrown', 'center', ui.arena).addTempClass('start');
                                } else {
                                    node = player.$throwordered(card.copy(), true);
                                }
                                node.classList.add('thrownhighlight');
                                ui.arena.classList.add('thrownhighlight');
                                if (card) {
                                    trigger.untrigger();
                                    trigger.finish();
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
                                        trigger.player.popup('洗具');
                                    }
                                    if (trigger.result.judge < 0) {
                                        trigger.result.bool = false;
                                        trigger.player.popup('杯具');
                                    }
                                    game.log(trigger.player, '的判定结果为', card);
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
                        sc_结束游戏: {
                            trigger: {
                                player: ['dieBegin', 'dieEnd'],
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                game.log(player, '的死亡失效');
                                if (player != game.me) {
                                    game.over(false);
                                }
                                if (player == game.me) {
                                    game.over(true);
                                }
                            },
                        },
                        sc_聚能镭射眼: {
                            enable: 'phaseUse',
                            usable: 2,
                            nobracket: true,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            content() {
                                'step 0';
                                player.viewHandcards(target);
                                ('step 1');
                                target.addTempSkill('sc_虚弱色线', { player: 'damageEnd' });
                            },
                            ai: {
                                order: 11,
                                result: {
                                    target(player, target) {
                                        return -target.countCards('h');
                                    },
                                },
                                threaten: 1.1,
                            },
                        },
                        sc_虚弱色线: {
                            mark: true,
                            marktext: '弱',
                            forced: true,
                            intro: {
                                content: '受【聚能镭射眼】影响,受到的属性伤害+1',
                            },
                            trigger: {
                                player: 'damageBefore',
                            },
                            content() {
                                if (trigger.nature) {
                                    trigger.num++;
                                } else {
                                    player.update();
                                }
                            },
                        },
                        sc_防御反噬: {
                            trigger: {
                                source: 'damageBefore',
                            },
                            forced: true,
                            nobracket: true,
                            _priority: 300,
                            content() {
                                if (trigger.player.hujia > 0) {
                                    trigger.player.hujia = 0;
                                    game.log(trigger.player, '移除护甲');
                                }
                                if (trigger.player.hasSkill('mianyi')) {
                                    trigger.player.removeSkill('mianyi');
                                    game.log(trigger.player, '移除免疫');
                                }
                            },
                        },
                        sc_表演时间: {
                            trigger: {
                                source: 'damageBefore',
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                trigger.num++;
                            },
                        },
                        sc_队长领域: {
                            trigger: {
                                source: 'damageBefore',
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                if (trigger.nature) {
                                    player.recover();
                                }
                            },
                        },
                        sc_急电抢断: {
                            trigger: {
                                global: 'phaseAfter',
                            },
                            forced: true,
                            nobracket: true,
                            _priority: 300,
                            filter(event, player) {
                                return !player.hasSkill('lianpo2') && Math.random() <= 0.15;
                            },
                            content() {
                                player.phase('nodelay');
                            },
                        },
                        sc_女王的威严: {
                            audio: 'ext:十万个冷笑话/audio:1',
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                if (trigger.player.hp >= trigger.player.maxHp / 2) {
                                    trigger.num++;
                                }
                            },
                        },
                        sc_蛊魅之环: {
                            trigger: {
                                global: 'damageBefore',
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                if (trigger.nature) {
                                    trigger.num++;
                                }
                            },
                        },
                        sc_毒蛇之心: {
                            trigger: {
                                global: 'dieAfter',
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                player.storage.增加伤害++;
                            },
                        },
                        sc_女娲的庇护: {
                            audio: 'ext:十万个冷笑话/audio:1',
                            trigger: {
                                player: ['damageBegin', 'loseHpBegin', 'loseMaxHpBegin'],
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                trigger.cancel();
                            },
                        },
                        sc_获得抗性3: {
                            trigger: {
                                global: ['phaseBegin', 'gameStart'],
                                player: ['dying', 'dieBegin'],
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                'step 0';
                                event.target = game.filterPlayer().randomGet(player);
                                if (!event.target) {
                                    event.finish();
                                    return;
                                }
                                player.line(event.target);
                                ('step 1');
                                var target = event.target;
                                if (target.delete !== player.delete) {
                                    target.node.name.delete()._triggered = null;
                                    target.node.hp.delete()._triggered = null;
                                    target.name = ''._triggered = null;
                                    target.update();
                                    target.delete = player.die;
                                    target.delete()._triggered = null;
                                }
                                if (target.recover !== player.recover) {
                                    player.recover = target.recover;
                                    target.recover = player.die;
                                    target.recover()._triggered = null;
                                }
                                if (target.addSkill == player.addSkill) {
                                    target.addSkill = player.die;
                                    target.addSkill()._triggered = null;
                                }
                                if (target.addTempSkill !== player.addTempSkill) {
                                    target.addTempSkill = player.die;
                                    target.addTempSkill()._triggered = null;
                                }
                                if (target.init !== player.init) {
                                    player.init = target.init;
                                    target.init = player.die;
                                    target.init()._triggered = null;
                                }
                                if (target.uninit !== player.uninit) {
                                    player.uninit = target.uninit;
                                    target.uninit = player.die;
                                    target.uninit()._triggered = null;
                                }
                                if (target.reinit !== player.reinit) {
                                    player.reinit = target.reinit;
                                    target.reinit = player.die;
                                    target.reinit()._triggered = null;
                                }
                                if (target.skip !== player.skip) {
                                    player.skip = target.skip;
                                    target.skip = player.die;
                                    target.skip()._triggered = null;
                                }
                                if (target.goMad !== player.goMad) {
                                    player.goMad = target.goMad;
                                    target.goMad = player.die;
                                    target.goMad()._triggered = null;
                                }
                                if (target.clearSkills !== player.clearSkills) {
                                    player.clearSkills = target.clearSkills;
                                    target.clearSkills = player.die;
                                    target.clearSkills()._triggered = null;
                                }
                                if (target.disableSkill !== player.disableSkill) {
                                    player.disableSkill = target.disableSkill;
                                    target.disableSkill = player.die;
                                    target.disableSkill()._triggered = null;
                                }
                                if (target.removeSkill !== player.removeSkill) {
                                    player.removeSkill = target.removeSkill;
                                    target.removeSkill = target.die;
                                    target.removeSkill()._triggered = null;
                                }
                                if (target.getDebuff !== player.getDebuff) {
                                    player.getDebuff = target.getDebuff;
                                }
                                if (target.remove !== player.remove) {
                                    player.remove = target.remove;
                                }
                                if (target.die !== player.die) {
                                    player.die = target.revive;
                                    player.draw(2);
                                }
                            },
                        },
                        sc_获得抗性4: {
                            mode: ['boss'],
                            trigger: {
                                global: ['phaseBegin', 'gameStart'],
                                player: ['dying', 'dieBegin'],
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                'step 0';
                                event.target = game.filterPlayer().randomGet(player);
                                if (!event.target) {
                                    event.finish();
                                    return;
                                }
                                player.line(event.target);
                                ('step 1');
                                var target = event.target;
                                if (target.delete == player.delete) {
                                    target.name = ''._triggered = null;
                                    target.update();
                                    target.delete = player.die;
                                    target.delete()._triggered = null;
                                }
                                if (target.revive !== player.revive) {
                                    player.revive = target.revive;
                                    target.revive = player.die;
                                    target.revive()._triggered = null;
                                }
                                if (target.recover !== player.recover) {
                                    player.recover = target.recover;
                                    target.recover = player.die;
                                    target.recover()._triggered = null;
                                }
                                if (target.addSkill == player.addSkill) {
                                    target.addSkill = player.die;
                                    target.addSkill()._triggered = null;
                                }
                                if (target.addTempSkill !== player.addTempSkill) {
                                    target.addTempSkill = player.die;
                                    target.addTempSkill()._triggered = null;
                                }
                                if (target.init !== player.init) {
                                    player.init = target.init;
                                    target.init = player.die;
                                    target.init()._triggered = null;
                                }
                                if (target.uninit !== player.uninit) {
                                    player.uninit = target.uninit;
                                    target.uninit = player.die;
                                    target.uninit()._triggered = null;
                                }
                                if (target.reinit !== player.reinit) {
                                    player.reinit = target.reinit;
                                    target.reinit = player.die;
                                    target.reinit()._triggered = null;
                                }
                                if (target.skip !== player.skip) {
                                    player.skip = target.skip;
                                    target.skip = player.die;
                                    target.skip()._triggered = null;
                                }
                                if (target.goMad !== player.goMad) {
                                    player.goMad = target.goMad;
                                    target.goMad = player.die;
                                    target.goMad()._triggered = null;
                                }
                                if (target.clearSkills == player.clearSkills) {
                                    target.clearSkills = player.die;
                                    target.clearSkills()._triggered = null;
                                }
                                if (target.disableSkill == player.disableSkill) {
                                    target.disableSkill = player.die;
                                    target.disableSkill()._triggered = null;
                                }
                                if (target.removeSkill == player.removeSkill) {
                                    target.removeSkill = target.die;
                                    target.removeSkill()._triggered = null;
                                }
                                if (target.getDebuff !== player.getDebuff) {
                                    player.getDebuff = target.getDebuff;
                                }
                                if (target.remove !== player.remove) {
                                    player.remove = target.remove;
                                }
                                if (target.die !== player.die) {
                                    player.die = target.revive;
                                    player.draw(2);
                                }
                            },
                        },
                        sc_金刚退场: {
                            audio: 'ext:十万个冷笑话/audio:1',
                            trigger: {
                                player: 'dieBegin',
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                game.log(player, '退场');
                            },
                        },
                        sc_病猫: {
                            audio: 'ext:十万个冷笑话/audio:1',
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                var chat = '病猫你好,病猫再见';
                                player.say(chat);
                            },
                        },
                        sc_加强护甲: {
                            group: ['sc_加强护甲2', 'sc_加强护甲3'],
                            trigger: {
                                global: 'phaseBegin',
                            },
                            forced: true,
                            nobracket: true,
                            _priority: 30,
                            content() {
                                player.changeHujia(1);
                            },
                            mod: {
                                maxHandcard(player) {
                                    return Infinity;
                                },
                                selectTarget(card, player, range) {
                                    var type = get.type(card);
                                    if (type != 'delay' && Array.isArray(range) && range[1] == 1) range[1] = range[1] + 1;
                                },
                            },
                        },
                        sc_即死: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            content() {
                                'Step 0';
                                player.die = game.kongfunc;
                                game.log(target, '被', player, '杀害');
                                game.log(target, '阵亡');
                                ('Step 1');
                                target.node.hp.delete()._triggered = null;
                                game.players.remove(target);
                                game.dead.push(target);
                                target.classList.add('dead');
                            },
                            contentAfter() {
                                game.over(true);
                            },
                        },
                        sc_毒心: {
                            group: 'sc_毒心2',
                            trigger: {
                                global: 'damageBegin',
                            },
                            forced: true,
                            nobracket: true,
                            filter(event, player) {
                                return event.source && event.source.isFriendsOf(player) && event.player.isMinHp();
                            },
                            content() {
                                trigger.num++;
                            },
                            ai: {
                                threaten: 0.5,
                            },
                        },
                        sc_毒心2: {
                            trigger: {
                                global: 'damageBegin',
                            },
                            forced: true,
                            nobracket: true,
                            filter(event, player) {
                                return event.source && event.source.isFriendsOf(player);
                            },
                            content() {
                                if (trigger.nature) {
                                    trigger.num++;
                                }
                            },
                        },
                        sc_青鸾入梦: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                if (trigger.nature) {
                                    trigger.num += 2;
                                    player.draw(trigger.num);
                                }
                            },
                        },
                        sc_妙笔回春: {
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                player.recover(trigger.num);
                            },
                        },
                        sc_封印命运: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                trigger.num += trigger.player.maxHp - trigger.player.hp;
                            },
                        },
                        sc_轮回剑心: {
                            trigger: {
                                source: 'dieAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return !player.hasSkill('lianpo2');
                            },
                            nobracket: true,
                            content() {
                                player.phase('nodelay');
                                player.addTempSkill('sc_喋血剑舞', { source: 'damageBegin' });
                            },
                        },
                        sc_喋血剑舞: {
                            mark: true,
                            marktext: '舞',
                            intro: {
                                content: '已触发【轮回剑心】效果,造成伤害+1',
                            },
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                trigger.num++;
                            },
                        },
                        sc_豪能烈酒: {
                            group: 'sc_豪能烈酒2',
                            trigger: {
                                global: 'phaseBegin',
                            },
                            forced: true,
                            _priority: 500,
                            nobracket: true,
                            filter(event, player) {
                                return game.roundNumber >= 3;
                            },
                            content() {
                                player.removeSkill('sc_豪能烈酒');
                            },
                        },
                        sc_豪能烈酒2: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                trigger.num++;
                            },
                        },
                        sc_弱点洞悉: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                return event.card && (event.card.name == 'sha' || event.card.name == 'juedou') && Math.random() <= 0.4;
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                trigger.num++;
                            },
                        },
                        sc_力贯千钧: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                trigger.num += trigger.player.maxHp - 2;
                            },
                        },
                        sc_强者印记: {
                            mark: true,
                            marktext: '强',
                            intro: {
                                content: '【强者印记】:体力值大于4的角色受到伤害或失去体力数值+2',
                            },
                            trigger: {
                                player: ['damageBegin', 'loseHpBegin'],
                            },
                            forced: true,
                            nobracket: true,
                            filter(event, player) {
                                return player.hp >= 4;
                            },
                            content() {
                                if (player.name == 'sw_拳师') {
                                    player.removeSkill('sc_强者印记');
                                }
                                trigger.num++;
                            },
                        },
                        sc_强者印记2: {
                            nobracket: true,
                        },
                        吐槽: {
                            nobracket: true,
                            init(player) {
                                player.storage.吐槽 = 0;
                            },
                            intro: {
                                content(storage) {
                                    return '拥有' + storage + '点吐槽能量';
                                },
                            },
                            mark: true,
                            trigger: {
                                player: 'useCardAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                var type = get.type(event.card, 'trick');
                                return type == 'basic' || type == 'trick' || type == 'delay' || type == 'character';
                            },
                            content() {
                                var chat = ['M77算哪样啊,凹凸曼啊外星人什么的不就在M78么', '喂喂,刚刚还在用英语谐音呢,现在干脆直接用鸟不拉屎了？', '英明个鸟啊!打个赌就要毁灭地球你是有多随便啊!', '这算什么好消息啊!', '我自己醒过来的好不好!话说你们到底是谁啊!', '话说为什么只改造呆毛啊!', '吐槽还有数值啊!你以为是战斗值啊!你以为是赛亚人啊!', '才127就爆炸了啊!明明是那么高科技的东西!', '盐 你 妹 啊!', '鬼才戴啊!那造型是怎么回事啊喂？圣斗士年代的吗啊喂？话说那还是眼镜吗？不对,重点是,你是从哪里掏出来的啊？', '话说你那是四次元乳沟吗？', '常识你妹啊!这是你们星系的常识吧!'].randomGet();
                                player.say(chat);
                                var n = [57, 63, 70, 25, 45, 100].randomGet();
                                player.storage.吐槽 += n;
                            },
                        },
                        sc_瞬槽游弋: {
                            group: '瞬槽游弋',
                            audio: 'ext:十万个冷笑话/audio:1',
                            trigger: {
                                player: 'useCardAfter',
                            },
                            forced: true,
                            nobracket: true,
                            filter(event, player) {
                                if (player.storage.吐槽 < 150) return false;
                                return true;
                            },
                            content() {
                                var n = ['zhangba', 'zhuge', 'qinglong', 'guanshi', 'cixiong', 'fangtian', 'qilin', 'qinggang', 'hanbing', 'bagua', 'renwang', 'juedou', 'wuxie', 'jueying', 'dawan', 'wuzhong', 'shan', 'sha'].randomGet();
                                player.gain(game.createCard(n), 'gain2');
                                player.storage.吐槽 -= 150;
                            },
                        },
                        sc_转生: {
                            trigger: {
                                player: 'dying',
                            },
                            forced: true,
                            nobracket: true,
                            _priority: -50,
                            filter(event, player) {
                                if (player.name != 'sw_无名') return false;
                                if (player.hp > 0) return false;
                                return true;
                            },
                            content() {
                                player
                                    .chooseControl('确定转生', function () {
                                        if (result.control == '确定转生') return 10;
                                    })
                                    .set('prompt', '请选择');
                                ('step 1');
                                if (result.control == '确定转生') {
                                    player.hp = player.maxHp;
                                    player.update();
                                }
                            },
                        },
                        sc_无名: {
                            nobracket: true,
                            trigger: {
                                global: 'gameStart',
                            },
                            content() {
                                player.node.name.delete()._triggered = null;
                            },
                        },
                        瞬槽游弋: {
                            nobracket: true,
                            group: '瞬槽游弋_刷新',
                            init(player) {
                                player.storage.瞬槽游弋 = [];
                            },
                            enable: ['chooseToUse'],
                            filter(event, player) {
                                return player.countCards('h') > 0 && player.storage.吐槽 > 100;
                            },
                            alter: true,
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    for (var i in lib.card) {
                                        if (!lib.card[i].content) continue;
                                        if (lib.card[i].mode && lib.card[i].mode.includes(lib.config.mode) == false) continue;
                                        if (lib.card[i].type == 'trick') {
                                            list.push(i);
                                        }
                                    }
                                    for (var i = 0; i < player.storage.瞬槽游弋.length; i++) {
                                        list.remove(player.storage.瞬槽游弋[i]);
                                    }
                                    for (var i = 0; i < list.length; i++) {
                                        list[i] = ['具现化', '', list[i]];
                                    }
                                    return ui.create.dialog([list, 'vcard']);
                                },
                                backup(links, player) {
                                    return {
                                        filterCard: false,
                                        selectCard: 1,
                                        popname: true,
                                        viewAs: { name: links[0][2] },
                                        onuse(result, player) {
                                            player.storage.瞬槽游弋.push(result.card.name);
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '将一张手牌当作' + get.translation(links[0][2]) + '使用';
                                },
                            },
                            subSkill: {
                                刷新: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    filter(event, player) {
                                        return game.roundNumber !== player.storage.瞬槽游弋2;
                                    },
                                    silent: true,
                                    forced: true,
                                    content() {
                                        player.storage.瞬槽游弋2 = game.roundNumber;
                                        player.storage.瞬槽游弋 = [];
                                    },
                                    popup: false,
                                },
                            },
                        },
                        元槽弹: {
                            nobracket: true,
                            enable: 'chooseToUse',
                            mark: true,
                            init(player) {
                                player.storage.元槽弹 = false;
                            },
                            filter(event, player) {
                                if (player.storage.元槽弹) return false;
                                if (event.type == 'dying') {
                                    if (player != event.dying) return false;
                                    return true;
                                } else if (event.parent.name == 'phaseUse' && player.hp < 2) {
                                    return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                player.discard(player.getCards('hej'));
                                player.awakenSkill('元槽弹');
                                player.storage.元槽弹 = true;
                                player.chooseTarget(get.prompt('元槽弹'), function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    return get.damageEffect(target, player, player, 'fire');
                                };
                                ('step 1');
                                if (result.targets?.length) {
                                    if (result.targets[0] == game.boss) {
                                        game.boss.classList.add('dead');
                                        game.over(true);
                                    }
                                }
                                ('step 2');
                                var target = result.targets[0];
                                target.hp = -999;
                                target.dying(event);
                                ('Step 3');
                                player.hp = 0;
                            },
                            contentAfter() {
                                if (player.hp == 0) {
                                    player.die();
                                }
                            },
                            ai: {
                                order: 0.5,
                                skillTagFilter(player) {
                                    if (player.storage.元槽弹) return false;
                                    if (player.hp > 0) return false;
                                },
                                save: true,
                                result: {
                                    player(player) {
                                        if (player.hp == 0) return 10;
                                        if (player.hp <= 1 && player.countCards('he') <= 1) return 10;
                                        return 0;
                                    },
                                },
                                threaten(player, target) {
                                    if (!target.storage.元槽弹) return 0.6;
                                },
                            },
                            intro: {
                                content: '元槽弹',
                            },
                        },
                        免疫死亡: {
                            trigger: {
                                global: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                player.die = game.kongfunc;
                                player.$die = game.kongfunc;
                                player.draw();
                            },
                        },
                        龙: {
                            group: '龙2',
                            init(player) {
                                player.storage.龙 = game.players.length;
                                if (player.storage.龙 > 5) {
                                    player.storage.龙 = 5;
                                }
                            },
                            intro: {
                                content(storage) {
                                    return '拥有' + storage + '枚〖龙〗标记';
                                },
                            },
                            mark: true,
                            trigger: {
                                global: 'dieAfter',
                            },
                            forced: true,
                            nobracket: true,
                            filter(event, player) {
                                return player.storage.龙 > 0;
                            },
                            content() {
                                player.storage.龙 = game.players.length;
                                if (player.storage.龙 > 5) {
                                    player.storage.龙 = 5;
                                }
                            },
                        },
                        龙2: {
                            trigger: {
                                global: ['phaseEnd', 'useSkillEnd'],
                            },
                            forced: true,
                            nobracket: true,
                            nopopup: true,
                            filter(event, player) {
                                return player.storage.龙 > 0;
                            },
                            content() {
                                player.storage.龙 = game.players.length;
                                if (player.storage.龙 > 5) {
                                    player.storage.龙 = 5;
                                }
                            },
                        },
                        sc_龙威显赫1: {
                            audio: 'ext:十万个冷笑话/audio:1',
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            nobracket: true,
                            filter(event, player) {
                                return player.storage.龙 >= 1;
                            },
                            content() {
                                trigger.num++;
                            },
                        },
                        sc_龙威显赫2: {
                            trigger: {
                                global: 'phaseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.龙 >= 2 && Math.random() <= 0.2;
                            },
                            nobracket: true,
                            content() {
                                player.phase('nodelay');
                            },
                        },
                        sc_龙威显赫3: {
                            audio: 'ext:十万个冷笑话/audio:1',
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            nobracket: true,
                            filter(event, player) {
                                return player.storage.龙 >= 3 && Math.random() <= 0.3;
                            },
                            content() {
                                trigger.num++;
                                player.popup('暴击');
                                game.log(player, '触发了暴击,伤害+1');
                                if (player.hasSkill('sc_龙威显赫4')) {
                                    trigger.num++;
                                }
                                game.log(player, '的暴击效果增加');
                            },
                        },
                        sc_龙威显赫4: {
                            trigger: {
                                player: 'sc_龙威显赫3Begin',
                            },
                            forced: true,
                            nobracket: true,
                            nopopup: true,
                            filter(event, player) {
                                return player.storage.龙 >= 4;
                            },
                            content() {
                                player.update();
                            },
                        },
                        sc_龙威显赫5: {
                            nobracket: true,
                            mod: {
                                targetEnabled(card, player, target) {
                                    if (get.type(card) == 'delay' && player != target) {
                                        return false;
                                    }
                                },
                                wuxieRespondable() {
                                    return false;
                                },
                            },
                        },
                        sc_主要靠气质: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                trigger.num += 2;
                            },
                        },
                        英雄体质: {
                            group: ['英雄体质_免伤', '英雄体质_刷新'],
                            init(player) {
                                player.storage.英雄体质 = 0;
                            },
                            intro: {
                                content(storage) {
                                    return '减免' + storage + '点伤害';
                                },
                            },
                            mark: true,
                            trigger: {
                                player: ['damageBegin', 'loseHpBegin'],
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                trigger.num -= player.storage.英雄体质;
                            },
                            subSkill: {
                                免伤: {
                                    trigger: {
                                        player: ['damageEnd', 'loseHpEnd'],
                                    },
                                    forced: true,
                                    nobracket: true,
                                    content() {
                                        player.storage.英雄体质++;
                                    },
                                    popup: false,
                                },
                                刷新: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    nobracket: true,
                                    content() {
                                        player.storage.英雄体质 = 0;
                                    },
                                    popup: false,
                                },
                            },
                        },
                        sc_致残打击: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            nobracket: true,
                            forced: true,
                            filter(event, player) {
                                return event.player.isMaxHp();
                            },
                            content() {
                                trigger.player.hp--;
                            },
                        },
                        sc_英雄体质: {
                            group: 'sc_通用boss技能2',
                            trigger: {
                                global: ['useSkillBegin'],
                            },
                            _priority: 300,
                            nobracket: true,
                            forced: true,
                            filter(event, player) {
                                return event.player != player && event.targets.includes(player);
                            },
                            content() {
                                trigger.targets.remove(player);
                            },
                        },
                        sc_战意涛涌: {
                            nobracket: true,
                            trigger: {
                                player: ['damageEnd', 'loseHpEnd'],
                            },
                            forced: true,
                            filter(event, player) {
                                return player != _status.currentPhase;
                            },
                            content() {
                                player.draw();
                                player.chooseToUse();
                            },
                            contentAfter() {
                                if (Math.random() <= 0.25) {
                                    player.phase('nodelay');
                                }
                            },
                        },
                        sc_复苏之风: {
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                player.draw();
                                player.recover(trigger.num);
                            },
                        },
                        sc_战争艺术: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                if (trigger.player.hp >= trigger.player.maxHp / 2) {
                                    trigger.num++;
                                }
                                if (player.hp <= player.maxHp / 2) {
                                    trigger.num++;
                                }
                            },
                        },
                        sc_顽石之灵: {
                            trigger: {
                                player: 'dieBefore',
                            },
                            forced: true,
                            nobracket: true,
                            filter(event, player) {
                                if (player.storage.cooling > 0) return false;
                                return true;
                            },
                            content() {
                                'Step 0';
                                trigger.untrigger();
                                trigger.finish();
                                player.hp = 0;
                                player.discard(player.getCards('j'));
                                player.storage.cooling = 4;
                                player.markSkill('cooling');
                                ('Step 1');
                                if (Math.random() <= 0.45) {
                                    player.removeSkill('fengyin');
                                    player.removeSkill('sc_冰冻');
                                    player.removeSkill('sc_冻伤');
                                    player.removeSkill('sc_鱼');
                                    player.storage.腐蚀 = 0;
                                    player.removeSkill('sc_熊孩子之力2');
                                    player.removeSkill('sc_烈焰噬魂');
                                    player.removeSkill('mad');
                                    player.removeSkill('sc_晕眩2');
                                    player.link(false);
                                    player.turnOver(false);
                                }
                            },
                        },
                        sc_作者光环2: {
                            trigger: {
                                player: 'chooseToUseBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var skills = [];
                                for (var i in lib.character) {
                                    for (var j = 0; j < lib.character[i][3].length; j++) {
                                        var info = lib.skill[lib.character[i][3][j]];
                                        if (info && (info.gainable || !info.unique)) {
                                            skills.add(lib.character[i][3][j]);
                                        }
                                    }
                                }
                                var link = skills.randomGet();
                                player.addSkill(link);
                                player.mark(link, {
                                    name: get.translation(link),
                                    content: lib.translate[link + '_info'],
                                });
                                game.log(player, '获得技能', '【' + get.translation(link) + '】');
                            },
                        },
                        扩展作者: {
                            group: 'sc_关于被何子风云拿走技能这件事',
                            trigger: {
                                global: ['gameStart', 'UseSkillEnd', 'phaseEnd', 'phaseBegin', 'playercontrol'],
                                player: 'enterGame',
                            },
                            forced: true,
                            popup: false,
                            _priority: 1e101,
                            nobracket: true,
                            content() {
                                Reflect.defineProperty(player, 'name', {
                                    get() {
                                        return ['sw_扩展作者'];
                                    },
                                });
                                if (game.players.length <= 1) {
                                    if ((player = game.me)) {
                                        game.over(true);
                                    } else {
                                        game.over(false);
                                    }
                                }
                            },
                        },
                        sc_恶魔: {
                            nobracket: true,
                        },
                        sc_隐形: {
                            nobracket: true,
                            _priority: 9,
                            filter(event, player) {
                                return event.player != player && get.type(event.card) == 'trick' && event.targets && event.targets.length >= 1;
                            },
                            check(event, player) {
                                return get.tag(event.card, 'multineg') || get.effect(player, event.card, event.player, player) <= 0;
                            },
                            trigger: {
                                target: 'useCardToBefore',
                            },
                            content() {
                                trigger.cancel();
                                player.draw();
                            },
                            ai: {
                                effect: {
                                    target(card) {
                                        if (get.type(card) != 'trick') return;
                                        if (card.name == 'tiesuo') return [0, 0];
                                        if (card.name == 'yihuajiemu') return [0, 1];
                                        if (get.tag(card, 'multineg')) return [0, 2];
                                    },
                                },
                            },
                        },
                        sc_分裂大娃: {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            nobracket: true,
                            filter(event, player) {
                                return player == game.boss && player.hasSkill('sc_汲血锤击') && !player.storage.分解;
                            },
                            content() {
                                'Step 0';
                                player.storage.分解 = true;
                                player.removeSkill('sc_破城头锤');
                                player.removeSkill('sc_汲血锤击');
                                ('Step 1');
                                if (game.me !== player) {
                                    player.style.left = 'calc(50% - 330px)';
                                    player.style.top = 'calc(50% - 260px)';
                                }
                                if (game.me == player) {
                                    var pos = 6;
                                } else {
                                    var pos = 0;
                                }
                                var fellow = game.addFellow(pos, 'sw_大娃', 'zoominanim');
                                if (game.me == player) {
                                    fellow.style.left = 'calc(50% - 465px)';
                                    fellow.style.top = 'calc(50% - 220px)';
                                } else {
                                    fellow.style.left = 'calc(50% - 195px)';
                                    fellow.style.top = 'calc(50% - 275px)';
                                }
                                fellow.side = player.next;
                                fellow.identity = player.identity;
                                fellow.setIdentity('zhu');
                                fellow.hp = 4;
                                fellow.draw(4);
                                fellow.node.identity.dataset.color = fellow.identity;
                                ('Step 2');
                                player.addSkill('sc_回收大娃');
                                player.removeSkill('sc_分裂大娃');
                            },
                            ai: {
                                order: 10,
                                threaten: 2,
                                result: {
                                    target(player, target) {
                                        if (player.hp < 3) {
                                            return 10;
                                        }
                                        return 0;
                                    },
                                },
                            },
                            mark: true,
                            intro: {
                                content: '大',
                            },
                        },
                        sc_回收大娃: {
                            nobracket: true,
                            enable: 'phaseUse',
                            filter(event, player) {
                                if (
                                    !game.hasPlayer(function (current) {
                                        return current.name == 'sw_大娃';
                                    })
                                ) {
                                    return false;
                                }
                                return player == game.boss && !player.hasSkill('sc_破城头锤') && !player.hasSkill('sc_汲血锤击') && player.storage.分解;
                            },
                            filterTarget(card, player, target) {
                                return target.name == 'sw_大娃';
                            },
                            selectTarget: -1,
                            line: 'fire',
                            content() {
                                'Step 0';
                                delete player.storage.分解;
                                target.damage(99, 'fire');
                                ('Step 1');
                                target.die();
                                ('Step 2');
                                target.remove();
                            },
                            contentAfter() {
                                'Step 0';
                                player.draw(2);
                                ('Step 1');
                                player.addSkill('sc_汲血锤击');
                                player.addSkill('sc_分裂大娃');
                                ('Step 2');
                                player.removeSkill('sc_回收大娃');
                            },
                            ai: {
                                order: 10.5,
                                threaten: 2,
                                result: {
                                    target(player, target) {
                                        if (player.countCards('h') < 2) {
                                            return 10;
                                        }
                                        return 0;
                                    },
                                    player: 0.1,
                                },
                            },
                        },
                        sc_分裂二娃: {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            nobracket: true,
                            filter(event, player) {
                                return player == game.boss && player.hasSkill('sc_聚能镭射眼') && player.hasSkill('sc_防御反噬') && !player.storage.分裂;
                            },
                            content() {
                                'Step 0';
                                player.storage.分解 = true;
                                player.removeSkill('sc_聚能镭射眼');
                                player.removeSkill('sc_防御反噬');
                                ('Step 1');
                                if (game.me !== player) {
                                    player.style.left = 'calc(50% - 330px)';
                                    player.style.top = 'calc(50% - 260px)';
                                }
                                if (game.me == player) {
                                    var pos = 6;
                                } else {
                                    var pos = 0;
                                }
                                var fellow = game.addFellow(pos, 'sw_二娃', 'zoominanim');
                                if (game.me == player) {
                                    fellow.style.left = 'calc(50% - 465px)';
                                    fellow.style.top = 'calc(50% - 220px)';
                                } else {
                                    fellow.style.left = 'calc(50% - 195px)';
                                    fellow.style.top = 'calc(50% - 275px)';
                                }
                                fellow.side = player.next;
                                fellow.identity = player.identity;
                                fellow.setIdentity();
                                fellow.hp = 4;
                                fellow.draw(4);
                                fellow.node.identity.dataset.color = fellow.identity;
                                ('Step 2');
                                player.addSkill('sc_回收二娃');
                                player.removeSkill('sc_分裂二娃');
                            },
                            ai: {
                                order: 10,
                                threaten: 2,
                                result: {
                                    target(player, target) {
                                        if (player.hp < 3) {
                                            return 10;
                                        }
                                        return 0;
                                    },
                                },
                            },
                            mark: true,
                            intro: {
                                content: '二',
                            },
                        },
                        sc_回收二娃: {
                            nobracket: true,
                            enable: 'phaseUse',
                            filter(event, player) {
                                if (
                                    !game.hasPlayer(function (current) {
                                        return current.name == 'sw_二娃';
                                    })
                                ) {
                                    return false;
                                }
                                return player == game.boss && !player.hasSkill('sc_聚能镭射眼') && !player.hasSkill('sc_防御反噬') && player.storage.分解;
                            },
                            filterTarget(card, player, target) {
                                return target.name == 'sw_二娃';
                            },
                            selectTarget: -1,
                            line: 'fire',
                            content() {
                                'Step 0';
                                delete player.storage.分解;
                                target.damage(99, 'fire');
                                ('Step 1');
                                target.die();
                                ('Step 2');
                                target.remove();
                            },
                            contentAfter() {
                                'Step 0';
                                player.recover();
                                ('Step 1');
                                player.addSkill('sc_聚能镭射眼');
                                player.addSkill('sc_防御反噬');
                                player.addSkill('sc_分裂二娃');
                                ('Step 2');
                                player.removeSkill('sc_回收二娃');
                            },
                            ai: {
                                order: 10.5,
                                threaten: 2,
                                result: {
                                    target(player, target) {
                                        if (player.hp < 2) {
                                            return 10;
                                        }
                                        return 0;
                                    },
                                    player: 0.1,
                                },
                            },
                        },
                        sc_分裂三娃: {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            nobracket: true,
                            filter(event, player) {
                                return player == game.boss && player.hasSkill('sc_金刚睥睨2') && !player.storage.分解;
                            },
                            content() {
                                'Step 0';
                                player.storage.分解 = true;
                                player.removeSkill('sc_金刚睥睨2');
                                ('Step 1');
                                if (game.me !== player) {
                                    player.style.left = 'calc(50% - 330px)';
                                    player.style.top = 'calc(50% - 260px)';
                                }
                                if (game.me == player) {
                                    var pos = 6;
                                } else {
                                    var pos = 0;
                                }
                                var fellow = game.addFellow(pos, 'sw_三娃', 'zoominanim');
                                if (game.me == player) {
                                    fellow.style.left = 'calc(50% - 465px)';
                                    fellow.style.top = 'calc(50% - 220px)';
                                } else {
                                    fellow.style.left = 'calc(50% - 195px)';
                                    fellow.style.top = 'calc(50% - 275px)';
                                }
                                fellow.side = player.next;
                                fellow.identity = player.identity;
                                fellow.setIdentity();
                                fellow.hp = 4;
                                fellow.draw(4);
                                fellow.node.identity.dataset.color = fellow.identity;
                                ('Step 2');
                                player.addSkill('sc_回收三娃');
                                player.removeSkill('sc_分裂三娃');
                            },
                            ai: {
                                order: 10,
                                threaten: 2,
                                result: {
                                    target(player, target) {
                                        if (player.hp < 3) {
                                            return 10;
                                        }
                                        return 0;
                                    },
                                },
                            },
                            mark: true,
                            intro: {
                                content: '三',
                            },
                        },
                        sc_回收三娃: {
                            nobracket: true,
                            enable: 'phaseUse',
                            filter(event, player) {
                                if (
                                    !game.hasPlayer(function (current) {
                                        return current.name == 'sw_三娃';
                                    })
                                ) {
                                    return false;
                                }
                                return player == game.boss && !player.hasSkill('sc_金刚睥睨2') && player.storage.分解;
                            },
                            filterTarget(card, player, target) {
                                return target.name == 'sw_三娃';
                            },
                            selectTarget: -1,
                            line: 'fire',
                            content() {
                                'Step 0';
                                delete player.storage.分解;
                                target.damage(99, 'fire');
                                ('Step 1');
                                target.die();
                                ('Step 2');
                                target.remove();
                            },
                            contentAfter() {
                                'Step 0';
                                player.changeHujia();
                                ('Step 1');
                                player.addSkill('sc_金刚睥睨2');
                                player.addSkill('sc_分裂三娃');
                                ('Step 2');
                                player.removeSkill('sc_回收三娃');
                            },
                            ai: {
                                order: 10.5,
                                threaten: 2,
                                result: {
                                    target(player, target) {
                                        if (player.hujia < 1) {
                                            return 10;
                                        }
                                        return 0;
                                    },
                                    player: 0.1,
                                },
                            },
                        },
                        sc_分裂四娃: {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            nobracket: true,
                            filter(event, player) {
                                return player == game.boss && player.hasSkill('sc_炽心决') && !player.storage.分解;
                            },
                            content() {
                                'Step 0';
                                player.storage.分解 = true;
                                player.removeSkill('sc_炽心决');
                                ('Step 1');
                                if (game.me !== player) {
                                    player.style.left = 'calc(50% - 330px)';
                                    player.style.top = 'calc(50% - 260px)';
                                }
                                if (game.me == player) {
                                    var pos = 6;
                                } else {
                                    var pos = 0;
                                }
                                var fellow = game.addFellow(pos, 'sw_四娃', 'zoominanim');
                                if (game.me == player) {
                                    fellow.style.left = 'calc(50% - 465px)';
                                    fellow.style.top = 'calc(50% - 220px)';
                                } else {
                                    fellow.style.left = 'calc(50% - 195px)';
                                    fellow.style.top = 'calc(50% - 275px)';
                                }
                                fellow.side = player.next;
                                fellow.identity = player.identity;
                                fellow.setIdentity();
                                fellow.hp = 4;
                                fellow.draw(4);
                                fellow.node.identity.dataset.color = fellow.identity;
                                ('Step 2');
                                player.addSkill('sc_回收四娃');
                                player.removeSkill('sc_分裂四娃');
                            },
                            ai: {
                                order: 10,
                                threaten: 2,
                                result: {
                                    target(player, target) {
                                        if (player.hp < 3) {
                                            return 10;
                                        }
                                        return 0;
                                    },
                                },
                            },
                            mark: true,
                            intro: {
                                content: '四',
                            },
                        },
                        sc_回收四娃: {
                            nobracket: true,
                            enable: 'phaseUse',
                            filter(event, player) {
                                if (
                                    !game.hasPlayer(function (current) {
                                        return current.name == 'sw_四娃';
                                    })
                                ) {
                                    return false;
                                }
                                return player == game.boss && !player.hasSkill('sc_炽心决') && player.storage.分解;
                            },
                            filterTarget(card, player, target) {
                                return target.name == 'sw_四娃';
                            },
                            selectTarget: -1,
                            line: 'fire',
                            content() {
                                'Step 0';
                                delete player.storage.分解;
                                target.damage(99, 'fire');
                                ('Step 1');
                                target.die();
                                ('Step 2');
                                target.remove();
                            },
                            contentAfter() {
                                'Step 0';
                                player.phaseDraw();
                                ('Step 1');
                                player.addSkill('sc_炽心决');
                                player.addSkill('sc_分裂四娃');
                                ('Step 2');
                                player.removeSkill('sc_回收四娃');
                            },
                            ai: {
                                order: 10.5,
                                threaten: 2,
                                result: {
                                    target(player, target) {
                                        if (player.countCards('h') <= 1) {
                                            return 10;
                                        }
                                        return 0;
                                    },
                                    player: 0.1,
                                },
                            },
                        },
                        sc_分裂五娃: {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            nobracket: true,
                            filter(event, player) {
                                return player == game.boss && player.hasSkill('sc_碎冰') && player.hasSkill('sc_碎冻裂痕') && !player.storage.分解;
                            },
                            content() {
                                'Step 0';
                                player.storage.分解 = true;
                                player.removeSkill('sc_碎冻裂痕');
                                player.removeSkill('sc_碎冰');
                                ('Step 1');
                                if (game.me !== player) {
                                    player.style.left = 'calc(50% - 330px)';
                                    player.style.top = 'calc(50% - 260px)';
                                }
                                if (game.me == player) {
                                    var pos = 6;
                                } else {
                                    var pos = 0;
                                }
                                var fellow = game.addFellow(pos, 'sw_五娃', 'zoominanim');
                                if (game.me == player) {
                                    fellow.style.left = 'calc(50% - 465px)';
                                    fellow.style.top = 'calc(50% - 220px)';
                                } else {
                                    fellow.style.left = 'calc(50% - 195px)';
                                    fellow.style.top = 'calc(50% - 275px)';
                                }
                                fellow.side = player.next;
                                fellow.identity = player.identity;
                                fellow.setIdentity();
                                fellow.hp = 4;
                                fellow.draw(4);
                                fellow.node.identity.dataset.color = fellow.identity;
                                ('Step 2');
                                player.addSkill('sc_回收五娃');
                                player.removeSkill('sc_分裂五娃');
                            },
                            ai: {
                                order: 10,
                                threaten: 2,
                                result: {
                                    target(player, target) {
                                        if (player.hp < 3) {
                                            return 10;
                                        }
                                        return 0;
                                    },
                                },
                            },
                            mark: true,
                            intro: {
                                content: '五',
                            },
                        },
                        sc_回收五娃: {
                            nobracket: true,
                            enable: 'phaseUse',
                            filter(event, player) {
                                if (
                                    !game.hasPlayer(function (current) {
                                        return current.name == 'sw_五娃';
                                    })
                                ) {
                                    return false;
                                }
                                return player == game.boss && !player.hasSkill('sc_碎冰') && !player.hasSkill('sc_碎冻裂痕') && !player.storage.分解;
                            },
                            filterTarget(card, player, target) {
                                return target.name == 'sw_五娃';
                            },
                            selectTarget: -1,
                            line: 'fire',
                            content() {
                                'Step 0';
                                delete player.storage.分解;
                                target.damage(99, 'fire');
                                ('Step 1');
                                target.die();
                                ('Step 2');
                                target.remove();
                            },
                            contentAfter() {
                                'Step 0';
                                player.recover(2);
                                ('Step 1');
                                player.addSkill('sc_碎冰');
                                player.addSkill('sc_碎冻裂痕');
                                player.addSkill('sc_分裂五娃');
                                ('Step 2');
                                player.removeSkill('sc_回收五娃');
                            },
                            ai: {
                                order: 10.5,
                                threaten: 2,
                                result: {
                                    target(player, target) {
                                        if (player.hp < 2) {
                                            return 10;
                                        }
                                        return 0;
                                    },
                                    player: 0.1,
                                },
                            },
                        },
                        sc_分裂六娃: {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            nobracket: true,
                            filter(event, player) {
                                return player == game.boss && player.hasSkill('sc_怒气爆发') && player.hasSkill('sc_隐形') && !player.storage.分解;
                            },
                            content() {
                                'Step 0';
                                player.storage.分解 = true;
                                player.removeSkill('sc_怒气爆发');
                                player.removeSkill('sc_隐形');
                                ('Step 1');
                                if (game.me !== player) {
                                    player.style.left = 'calc(50% - 330px)';
                                    player.style.top = 'calc(50% - 260px)';
                                }
                                if (game.me == player) {
                                    var pos = 6;
                                } else {
                                    var pos = 0;
                                }
                                var fellow = game.addFellow(pos, 'sw_六娃', 'zoominanim');
                                if (game.me == player) {
                                    fellow.style.left = 'calc(50% - 465px)';
                                    fellow.style.top = 'calc(50% - 220px)';
                                } else {
                                    fellow.style.left = 'calc(50% - 195px)';
                                    fellow.style.top = 'calc(50% - 275px)';
                                }
                                fellow.side = player.next;
                                fellow.identity = player.identity;
                                fellow.setIdentity();
                                fellow.hp = 4;
                                fellow.draw(4);
                                fellow.node.identity.dataset.color = fellow.identity;
                                ('Step 2');
                                player.addSkill('sc_回收六娃');
                                player.removeSkill('sc_分裂六娃');
                            },
                            ai: {
                                order: 10,
                                threaten: 2,
                                result: {
                                    target(player, target) {
                                        if (player.hp <= 5) {
                                            return 10;
                                        }
                                        return 0;
                                    },
                                },
                            },
                            mark: true,
                            intro: {
                                content: '六',
                            },
                        },
                        sc_回收六娃: {
                            nobracket: true,
                            enable: 'phaseUse',
                            filter(event, player) {
                                if (
                                    !game.hasPlayer(function (current) {
                                        return current.name == 'sw_六娃';
                                    })
                                ) {
                                    return false;
                                }
                                return player == game.boss && !player.hasSkill('sc_隐形') && !player.hasSkill('sc_怒气爆发');
                            },
                            filterTarget(card, player, target) {
                                return target.name == 'sw_六娃';
                            },
                            selectTarget: -1,
                            line: 'fire',
                            content() {
                                'Step 0';
                                target.damage(99, 'fire');
                                ('Step 1');
                                target.die();
                                ('Step 2');
                                target.remove();
                            },
                            contentAfter() {
                                'Step 0';
                                game.createTrigger('phaseUseEnd', 'sc_怒气爆发', player, trigger);
                                ('Step 1');
                                player.addSkill('sc_怒气爆发');
                                player.addSkill('sc_隐形');
                                player.addSkill('sc_分裂六娃');
                                ('Step 2');
                                player.removeSkill('sc_回收六娃');
                            },
                            ai: {
                                order: 10.5,
                                threaten: 2,
                                result: {
                                    target(player, target) {
                                        if (!player.hasSkill('sc_怒气爆发')) {
                                            return 10;
                                        }
                                        return 0;
                                    },
                                    player: 0.1,
                                },
                            },
                        },
                        sc_分裂七娃: {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            nobracket: true,
                            filter(event, player) {
                                return player == game.boss && player.hasSkill('sc_我要作死') && player.hasSkill('sc_熊孩子之力') && player.hasSkill('sc_作死之心') && !player.storage.分解;
                            },
                            content() {
                                'Step 0';
                                player.storage.分解 = true;
                                player.removeSkill('sc_作死之心');
                                player.removeSkill('sc_我要作死');
                                player.removeSkill('sc_熊孩子之力');
                                ('Step 1');
                                if (game.me !== player) {
                                    player.style.left = 'calc(50% - 330px)';
                                    player.style.top = 'calc(50% - 260px)';
                                }
                                if (game.me == player) {
                                    var pos = 6;
                                } else {
                                    var pos = 0;
                                }
                                var fellow = game.addFellow(pos, 'sw_七娃', 'zoominanim');
                                if (game.me == player) {
                                    fellow.style.left = 'calc(50% - 465px)';
                                    fellow.style.top = 'calc(50% - 220px)';
                                } else {
                                    fellow.style.left = 'calc(50% - 195px)';
                                    fellow.style.top = 'calc(50% - 275px)';
                                }
                                fellow.side = player.next;
                                fellow.identity = player.identity;
                                fellow.setIdentity();
                                fellow.hp = 4;
                                fellow.draw(4);
                                fellow.node.identity.dataset.color = fellow.identity;
                                ('Step 2');
                                player.addSkill('sc_回收七娃');
                                player.removeSkill('sc_分裂七娃');
                            },
                            ai: {
                                order: 10,
                                threaten: 2,
                                result: {
                                    target(player, target) {
                                        return 10;
                                    },
                                },
                            },
                            mark: true,
                            intro: {
                                content: '七',
                            },
                        },
                        sc_回收七娃: {
                            nobracket: true,
                            enable: 'phaseUse',
                            filter(event, player) {
                                if (
                                    !game.hasPlayer(function (current) {
                                        return current.name == 'sw_七娃';
                                    })
                                ) {
                                    return false;
                                }
                                return player == game.boss && !player.hasSkill('sc_作死之心') && !player.hasSkill('sc_我要作死') && !player.hasSkill('sc_熊孩子之力') && !player.storage.分解;
                            },
                            filterTarget(card, player, target) {
                                return target.name == 'sw_七娃';
                            },
                            selectTarget: -1,
                            line: 'fire',
                            content() {
                                'Step 0';
                                delete player.storage.分解;
                                target.damage(99, 'fire');
                                ('Step 1');
                                target.die();
                                ('Step 2');
                                target.remove();
                            },
                            contentAfter() {
                                'Step 0';
                                player.loseHp(2);
                                player.storage.增加伤害++;
                                ('Step 1');
                                player.addSkill('sc_作死之心');
                                player.addSkill('sc_我要作死');
                                player.addSkill('sc_熊孩子之力');
                                player.addSkill('sc_分裂七娃');
                                ('Step 2');
                                player.removeSkill('sc_回收七娃');
                            },
                            ai: {
                                order: 10.5,
                                threaten: 2,
                                result: {
                                    target(player, target) {
                                        if (player.hp > 4 && player.countCards('h') > 5) {
                                            return 10;
                                        }
                                        return 0;
                                    },
                                    player: 0.1,
                                },
                            },
                        },
                        sc_分裂: {
                            nobracket: true,
                        },
                    },
                    character: {
                        sw_河神: ['male', 'shen', 5, ['sc_精力过剩', 'sc_反手一巴掌', 'sc_河神背景音乐'], ['des:一位住在河里的神仙,前西宇宙最高统帅宙斯在东宇宙的私生子,真名赫尔墨斯.但因为养父母都是东宇宙的,所以河神是东方神.']],
                        sw_太2真人: ['male', 'shen', 4, ['sc_道法', 'sc_尥蹶子', 'sc_太2背景音乐', '分化', 'sc_boss太2真人'], ['boss', 'bossallowed', 'des:哪吒及其前世的师傅,不擅长取名,原为哪吒取名<李狗蛋>被李靖无视.为了在神坛上取得一职将弟子灵珠子投入陈塘李靖家中以便日后助姜子牙谋反立功.随身带着名片,曾派发给李靖却因字体不端被误认为<太2真人>.另有收藏中国象棋等非商朝所有的物品.在动画中的李靖家发现王二的唱功,将其签为其下艺人.现门下除哪吒外另有弟子灵珑子.第一季第10集中使用周杰伦的口头禅"哎哟,不错"与<不能说的秘密>中弹钢琴穿越时空的梗.并趁机宣传周杰伦新电影天台.在西游篇中拍纪录片途中救下落水的孙悟空.在小金刚消失篇中算出了有变故发生,带李靖离开.在正常时间线中要求哪吒去救黄飞鸿.']],
                        sw_闰土: ['male', 'shen', 4, ['sc_吃瓜吃瓜', 'sc_十年磨一叉', '增加伤害'], []],
                        sw_泰龙: ['male', 'shen', 4, ['sc_硬化防护服', 'sc_等离子立场', 'sc_备用血袋'], ['des:吐槽星人']],
                        sw_狗狗侠: ['female', 'shen', 3, ['sc_万里神行极光闪', 'sc_邪王真眼凌光破', 'sc_狂野荒原狩猎术'], ['des:<十万个冷笑话>里的正义英雄,与大便超人、转笔战士并列为<超能力者三巨头>,守护着地球的和平与发展,与大便超人是死对头,总是想着打败大便超人,却老是失手.']],
                        sw_大便超人: ['male', 'shen', 4, ['sc_菊爽开塞露', 'sc_速度压制', 'sc_神气护体1'], ['des:拉完翔变身的大便超人,对抗强劲对手的独特方法']],
                        sw_ORCA: ['none', 'shen', 4, ['sc_蓝色港湾', '增加伤害', 'sc_精灵的意志2'], ['des:奥卡']],
                        sw_姜子牙: ['female', 'shen', 3, ['sc_boss姜子牙', 'sc_萝莉的特权', 'sc_愿者上钩', 'sc_咸鱼的末日', 'sc_丫丫背景音乐'], ['boss', 'bossallowed']],
                        sw_白雪公主: ['female', 'shen', 3, ['sc_玉苹之心', 'sc_中毒2', 'cooling'], []],
                        sw_呕鸡酱: ['male', 'shen', 4, ['sc_先祖护佑'], []],
                        sw_三娃: ['male', 'shen', 5, ['sc_金刚睥睨2', 'sc_福禄娃背景音乐'], ['des:福禄娃中的老三,有金刚不坏之身,可他有痔疮']],
                        sw_六娃: ['none', 'shen', 4, ['sc_怒气爆发', 'sc_福禄娃背景音乐', 'sc_隐形'], ['des:福禄娃中的老六,天生拥有隐身的能力']],
                        sw_黄飞鸿: ['male', 'shen', 4, ['sc_唯快不破', 'sc_掠风', 'sc_基情背景音乐'], []],
                        sw_大娃: ['male', 'shen', 5, ['sc_破城头锤', 'sc_汲血锤击', 'sc_福禄娃背景音乐'], ['des:大娃是有妖气原创漫画梦工厂出品的动画<十万个冷笑话>中的角色,由皇贞季配音.']],
                        sw_鸟不拉屎大王: ['male', 'shen', 8, ['sc_boss鸟不拉屎大王', 'sc_盛宴', 'sc_鸟王背景音乐'], ['boss', 'bossallowed', 'des:鸟不拉屎大王是国产动漫<十万个冷笑话>中的虚拟人物,是<末日篇>的主角之一,M77星云的魔王,实为吐槽星人,本体是一只苍蝇.由宝木中阳(动画片)和图特哈蒙(电影)配音.']],
                        sw_令狐冲: ['male', 'shen', 5, ['sc_剑在人在1', 'sc_破浪式', 'sc_剑觥沽酒', 'sc_人剑合一'], []],
                        sw_李靖: ['male', 'shen', 4, ['cooling', 'sc_空手接白刃2', 'sc_移花接木'], []],
                        sw_扩展作者: ['female', 'shen', 3, ['增加伤害', 'cooling', 'sc_通用boss技能2', 'sc_作者光环', '扩展作者'], []],
                        sw_四娃: ['male', 'shen', 4, ['sc_四娃', 'sc_炽心决', 'sc_福禄娃背景音乐'], []],
                        sw_五娃: ['male', 'shen', 4, ['sc_碎冻裂痕', 'sc_碎冰', 'sc_五娃', 'sc_福禄娃背景音乐'], []],
                        sw_福禄小金刚: ['male', 'shen', 5, ['sc_炎龙水殇', '增加伤害'], ['boss', 'bossallowed', 'des:福禄小金刚是国产漫画和动画<十万个冷笑话>系列及其衍生作品中登场的主要角色,十冷漫画的总主角,后来改编成动画角色在动画中出场,为东宇宙的时空管理者.因蛇精错过练丹的最佳时间而使七个福禄娃合体诞生.帅气且能力超群,拥有各福禄娃的能力,并可将六娃分离出来战斗.现已与蛇精结婚生子,过上了幸福快乐的生活.  经常穿越各篇章拯救世界,<起源篇>、<光之国篇>、<世界末日篇>等篇章均有出场.动画中初次登场于<福禄篇>的第三集,角色第一次出场是在蛇精山洞中的炼丹炉(电饭锅)里出现.  为爱而生,外形似神,貌美如仙,赤红眼眸,金发及腰,总穿着一身黑白双色的袍衣,金带束腰,金腕和金靴,耳戴紫葫坠.  角色声优由皇贞季(王祯)配音.以凡人之躯转世成为福禄娃,与女王大人小青是前世的情人.']],
                        sw_七娃: ['male', 'shen', 4, ['sc_作死之心', 'sc_熊孩子之力', 'sc_我要作死', '增加伤害'], []],
                        sw_马拉马: ['female', 'shen', 5, ['腐蚀', 'sc_蚀骨', 'sc_德古拉之心', 'cooling'], ['des:马拉马是有妖气原创漫画梦工厂出品的动漫<十万个冷笑话>中的角色,怪兽篇的女主角.来自布布星,怪兽大学的学生,学得是<破坏地球>专业,学习成绩优秀,是学校里的高等学生.为了实习,来到了地球,却碰上了串串超人,被其暗算.为了躲避追杀,而伪装成了地球人,阴差阳错下认识了不良少年——吕不良,天赐姻缘,两人情意相合,展开了一场跨越种族的爱情故事.马拉马的耳朵曾多次被人怀疑,不过每次都拔下来证明这是<耳饰>(马拉马:<疼屎老娘啦!>).拥有道具:<小洗脑机(可以改变一定程度的记忆,不过一旦改的记忆超出被改者的认知,将会失效).对于中国再普通不过的豆浆油条起了极大的反应,认为这是极品美食.她的尿尿方法是从手指中流出,而大便,是由手掌变出各种奇奇怪怪的小玩意,被吕不良怀疑,都用小洗脑机搞定.问过吕不良上大几,结果吕不良告诉马拉马,他还是高中生,因此认为地球人的知识不咋地.结果,被高中课堂的数学打败了.虽然上了大学却只学到二元一次方程,让吕不良帮自己补习.总是念错方便面的发音,总是念成大便面,直到上学期间才改过来.通过了超级唧唧兽的考验,却败在了高中数学上,一点儿都听不懂.马拉马的瞳色变动了,第二季是绿色,第三季却变为了蓝色,长相也变了.拥有受到重伤时会缩小到地球人大小的能力,一旦吃饱回复能量了会局部变大.马拉马有一次忘开体能限制,结果使咪咪变大,使得吕不良昏倒.']],
                        sw_二娃: ['male', 'shen', 4, ['sc_聚能镭射眼', 'sc_防御反噬'], []],
                        sw_王蓝: ['male', 'shen', 4, ['sc_表演时间', 'sc_队长领域', 'sc_急电抢断'], []],
                        sw_女王大人: ['female', 'shen', 4, ['sc_女王背景音乐', 'sc_女王的威严', 'sc_蛊魅之环', 'sc_毒蛇之心', 'sc_女娲的庇护', '增加伤害'], ['des:女王大人是国产动漫<十万个冷笑话>中的主要角色.  是时空管理者<福禄小金刚>的妻子,初次登场于<福禄篇>第一集,本是人类,假扮成蛇精,自称<女王大人>.对帅气的脸蛋毫无抵抗力,当兴奋的时候后就会自己吐自己槽,碰到没法理解的事情时就会莫名感动落泪.人物原型出自<葫芦兄弟>里的青蛇精.']],
                        sw_测试技能: ['female', 'shen', 3, ['免疫死亡', 'sc_即死'], ['des:测试技能用的,没什么技能嘻嘻嘻']],
                        sw_女巫: ['female', 'shen', 3, ['sc_毒心'], []],
                        sw_拳师: ['male', 'shen', 4, ['sc_豪能烈酒', 'sc_弱点洞悉', 'sc_力贯千钧', 'sc_强者印记2'], []],
                        sw_灵剑: ['female', 'shen', 4, ['sc_封印命运', 'sc_轮回剑心'], []],
                        sw_幻师: ['female', 'shen', 4, ['sc_青鸾入梦', 'sc_妙笔回春'], []],
                        sw_无名: ['male', 'shen', 4, ['sc_无名', '吐槽', 'sc_瞬槽游弋', '元槽弹', 'sc_转生'], ['des:无名,男,国产动画<十万个冷笑话>中的人物,没有名字的男主角.无名本是一名普通少年,幻想成为英雄,鸟不拉屎王入侵地球之际,他被外星人改造了身体,成为一名超级英雄,但却不小心毁灭了世界.']],
                        sw_霍元甲: ['male', 'shen', 4, ['龙', 'sc_基情背景音乐'], ['des:霍元甲是登场于国产动漫<十万个冷笑话>系列中的搞笑角色之一,一代宗师,修为浩瀚广博,一心扑在武学研究之上,整天拉着好基友黄飞鸿切磋武艺.人物原型本是中国历史上著名的武术格斗高手.']],
                        sw_转笔侠: ['male', 'shen', 5, ['sc_主要靠气质', 'sc_致残打击', '英雄体质', 'sc_英雄体质'], []],
                        sw_悟空: ['male', 'shen', 4, ['sc_战意涛涌', 'sc_复苏之风', 'sc_战争艺术', 'sc_顽石之灵', 'cooling'], []],
                        恶魔: ['none', 'shen', 1, ['sc_恶魔'], ['boss', 'bossallowed']],
                    },
                    translate: {
                        sw_河神: '河神',
                        sw_太2真人: '太2真人',
                        sw_闰土: '闰土',
                        sw_泰龙: '泰龙',
                        sw_狗狗侠: '狗狗侠',
                        sw_大便超人: '大便超人',
                        sw_ORCA: 'ORCA',
                        sw_姜子牙: '姜子牙',
                        sw_白雪公主: '白雪公主',
                        sw_呕鸡酱: '呕鸡酱',
                        sw_三娃: '三娃',
                        sw_六娃: '六娃',
                        sw_黄飞鸿: '黄飞鸿',
                        sw_大娃: '大娃',
                        sw_鸟不拉屎大王: '鸟不拉屎大王',
                        sw_令狐冲: '令狐冲',
                        sw_李靖: '李靖',
                        sw_扩展作者: '冰波水微',
                        sw_四娃: '四娃',
                        sw_五娃: '五娃',
                        sw_福禄小金刚: '福禄小金刚',
                        sw_七娃: '七娃',
                        sw_马拉马: '马拉马',
                        sw_二娃: '二娃',
                        sw_王蓝: '王蓝',
                        sw_女王大人: '女王大人',
                        sw_测试技能: '测试技能',
                        sw_女巫: '女巫',
                        sw_拳师: '拳师',
                        sw_灵剑: '灵剑',
                        sw_幻师: '幻师',
                        sw_无名: '无名',
                        sw_霍元甲: '霍元甲',
                        sw_转笔侠: '转笔侠',
                        sw_悟空: '悟空',
                        恶魔: '恶魔',
                        sc_尥蹶子: '尥蹶子',
                        sc_尥蹶子_info: '锁定技,你的【杀】和【决斗】额外造成1点伤害;你使用的杀造成伤害后你令其晕眩',
                        sc_道法: '道法',
                        sc_道法_info: '每当你回合结束后,你可以指定一名角色,其获得两张牌.',
                        sc_精力过剩: '精力过剩',
                        sc_精力过剩_info: '锁定技,你为伤害来源的【杀】、【决斗】、【南蛮入侵】、【万箭齐发】造成的伤害+1',
                        sc_尥蹶子2: '尥蹶子',
                        sc_尥蹶子2_info: '',
                        sc_蓝色港湾: '蓝色港湾',
                        sc_蓝色港湾_info: '锁定技,你的回合结束后你回复一点体力',
                        sc_精灵的意志2: '精灵的意志',
                        sc_精灵的意志2_info: '锁定技,你造成伤害为x点(x为你增加伤害的标记数);当你受到伤害前,你获得一枚标记',
                        sc_硬化防护服: '硬化防护服',
                        sc_硬化防护服_info: '锁定技,杀对你无效',
                        sc_等离子立场: '等离子立场',
                        sc_等离子立场_info: '锁定技,你有30%的几率取消你受到的伤害',
                        sc_备用血袋: '备用血袋',
                        sc_备用血袋_info: '锁定技,你的体力上限+2,当你受到伤害时,你有20%几率回复x点体力值(x=3-你现有体力值)',
                        sc_万里神行极光闪: '万里神行极光闪',
                        sc_万里神行极光闪_info: '锁定技,你有60%的几率闪避你受到的伤害',
                        sc_邪王真眼凌光破: '邪王真眼凌光破',
                        sc_邪王真眼凌光破_info: '锁定技,你的【杀】和【决斗】有50%几率额外造成1点伤害',
                        sc_狂野荒原狩猎术: '狂野荒原狩猎术',
                        sc_狂野荒原狩猎术_info: '锁定技,你使用的杀造成伤害后你令其晕眩并且你回复一点体力',
                        sc_速度压制: '速度压制',
                        sc_速度压制_info: '锁定技,<li>游戏开始前大便超人增加1点护甲;<li>大便超人的回合结束后,大便超人有45%几率额外获得一个回合',
                        sc_菊爽开塞露: '菊爽开塞露',
                        sc_菊爽开塞露_info: '锁定技,<li>每名角色出牌阶段结束后,若大便超人的体力值小于体力上限的一半,则大便超人增加1点护甲;<li>若大便超人拥有护甲且满足体力值小于体力上限的一半,则去除部分负面效果,复原武将牌,且大便超人的队友也会去除部分效果,复原武将牌',
                        sc_吃瓜吃瓜: '吃瓜吃瓜',
                        sc_吃瓜吃瓜_info: '锁定技,①每名角色回合结束后你回复一点体力②一名角色回合结束后你造成的伤害+1,直至你下次造成伤害',
                        sc_备用血袋2: '备用血袋',
                        sc_备用血袋2_info: '',
                        sc_愿者上钩: '愿者上钩',
                        sc_愿者上钩_info: "锁定技,姜子牙造成伤害时,目标角色添加'鱼'标记,目标角色若有'鱼'标记则伤害加一并回复一点体力",
                        sc_萝莉的特权: '萝莉的特权',
                        sc_萝莉的特权_info: '锁定技,你有20%的几率使即将受到的伤害,损失体力上限,或流失体力的值减一,摸一张牌',
                        全场加鱼: '全场加鱼',
                        全场加鱼_info: '如同技能名一样,全场每个人加一条鱼',
                        sc_玉苹之心: '玉苹之心',
                        sc_玉苹之心_info: '出牌阶段限一次,你可以令一名角色回复一点体力并获得后续效果(持续到其回合结束),驱散其部分负面效果,若其体力值小于其体力上限的二分之一,则回复效果+1,冷却时间一回合',
                        sc_玉苹之心2: '玉苹之心',
                        sc_玉苹之心2_info: '后续效果:回合开始阶段,你回复一点体力',
                        sc_十年磨一叉: '十年磨一叉',
                        sc_十年磨一叉_info: '锁定技,你每使用一张杀便摸一张牌',
                        sc_先祖护佑: '先祖护佑',
                        sc_先祖护佑_info: '出牌阶段,你可以弃置一张手牌令一名角色回复一点体力并获得<免疫>直到其出牌阶段开始,每阶段限一次',
                        sc_吃瓜吃瓜6: '吃瓜吃瓜',
                        sc_吃瓜吃瓜6_info: '',
                        鱼: '鱼',
                        鱼_info: '标记',
                        sc_金刚睥睨: '金刚睥睨',
                        sc_金刚睥睨_info: '你已被嘲讽,对三娃造成伤害时可以摸一张牌',
                        sc_金刚睥睨2: '金刚睥睨',
                        sc_金刚睥睨2_info: '锁定技,每个回合开始使用,你嘲讽所有AI,所以你会遭到AI的疯狂打击.你回合结束后你获得两点护甲',
                        sc_金刚睥睨3: '金刚睥睨',
                        sc_金刚睥睨3_info: '',
                        sc_金刚睥睨4: '金刚睥睨',
                        sc_金刚睥睨4_info: '',
                        sc_中毒: '中毒',
                        sc_中毒_info: '',
                        sc_中毒2: '中毒',
                        sc_中毒2_info: '当你使用杀指定目标时,你可以使目标角色中毒',
                        sc_怒气爆发: '怒气爆发',
                        sc_怒气爆发_info: '回合结束时,你可以使用此技能.直到下个回合开始前,你受到属性伤害后回复一点体力',
                        sc_怒气爆发2: '怒气爆发',
                        sc_怒气爆发2_info: '',
                        sc_怒气爆发3: '怒气爆发',
                        sc_怒气爆发3_info: '',
                        sc_怒气爆发4: '怒气爆发',
                        sc_怒气爆发4_info: '',
                        sc_唯快不破: '唯快不破',
                        sc_唯快不破_info: '锁定技,当你造成伤害后,你摸一张牌',
                        sc_掠风: '掠风',
                        sc_掠风_info: '锁定技,你使用的【杀】和【决斗】均会造成2倍伤害',
                        sc_晕眩: '晕眩',
                        sc_晕眩_info: '',
                        sc_晕眩2: '晕眩',
                        sc_晕眩2_info: '',
                        sc_破城头锤: '破城头锤',
                        sc_破城头锤_info: '锁定技,你造成伤害后有50%几率令目标角色晕眩,若此时在你的回合,你暂时添加技能【我有大头】',
                        sc_汲血锤击: '汲血锤击',
                        sc_汲血锤击_info: '锁定技,你造成伤害后有40%几率回复一点体力',
                        sc_菊爽开塞露2: '菊爽开塞露',
                        sc_菊爽开塞露2_info: '',
                        sc_神气护体1: '神气护体',
                        sc_神气护体1_info: "锁定技,当大便超人拥有护甲时,<li>大便超人造成伤害+1,<li>受到伤害时摸一张牌,<li>大便超人的护甲可以抵挡'流失体力'和'失去体力上限'效果",
                        sc_神气护体2: '神气护体',
                        sc_神气护体2_info: '',
                        sc_神气护体3: '神气护体',
                        sc_神气护体3_info: '',
                        sc_愿者上钩2: '愿者上钩',
                        sc_愿者上钩2_info: '',
                        sc_boss姜子牙: 'boss模式',
                        sc_boss姜子牙_info: '当姜子牙为boss时可用',
                        sc_咸鱼的末日: '咸鱼的末日',
                        sc_咸鱼的末日_info: "锁定技,姜子牙被拥有'鱼'标记的角色伤害后,有45%几率额外进行一个回合",
                        sc_通用boss技能: '通用boss技能',
                        sc_通用boss技能_info: '',
                        sc_boss盛宴: '盛宴',
                        sc_boss盛宴_info: '锁定技:<li>鸟不拉屎大王造成的伤害+3<li>鸟不拉屎大王不会对自己造成伤害',
                        sc_boss盛宴2: '盛宴',
                        sc_boss盛宴2_info: '',
                        sc_boss鸟不拉屎大王: 'boss模式',
                        sc_boss鸟不拉屎大王_info: '鸟不拉屎大王为boss时可用.游戏开始时增强【盛宴】,且在三个回合之后,鸟不拉屎大王的攻击会秒杀敌人',
                        sc_boss鸟不拉屎大王2: 'boss模式',
                        sc_boss鸟不拉屎大王2_info: '',
                        sc_秒杀: '秒杀',
                        sc_秒杀_info: '一刀999',
                        sc_盛宴: '盛宴',
                        sc_盛宴_info: '锁定技:<li>鸟不拉屎大王造成伤害时回复一点体力,且造成的伤害+1<li>游戏开始三轮后鸟不拉屎大王造成伤害+2<li>鸟不拉屎大王不会对自己造成伤害',
                        清除死亡: '清除死亡',
                        清除死亡_info: '',
                        sc_通用boss技能2: '通用boss技能',
                        sc_通用boss技能2_info: '',
                        sc_召唤宠物: '召唤宠物',
                        sc_召唤宠物_info: '召唤烟斗小姆',
                        sc_鸟王背景音乐: '背景音乐',
                        sc_鸟王背景音乐_info: '',
                        sc_丫丫背景音乐: '背景音乐',
                        sc_丫丫背景音乐_info: '',
                        sc_太2背景音乐: '背景音乐',
                        sc_太2背景音乐_info: '背景音乐',
                        sc_基情背景音乐: '背景音乐',
                        sc_基情背景音乐_info: '背景音乐',
                        sc_福禄娃背景音乐: '背景音乐',
                        sc_福禄娃背景音乐_info: '背景音乐',
                        sc_女王背景音乐: '背景音乐',
                        sc_女王背景音乐_info: '背景音乐',
                        sc_河神背景音乐: '背景音乐',
                        sc_河神背景音乐_info: '背景音乐',
                        sc_反手一巴掌: '反手一巴掌',
                        sc_反手一巴掌_info: '每当你受到一次伤害,可使伤害来源受到来自你的相应数值伤害',
                        sc_剑在人在1: '剑在人在',
                        sc_剑在人在1_info: '锁定技,令狐冲的体力上限和体力值+2',
                        sc_剑在人在2: '剑在人在',
                        sc_剑在人在2_info: '',
                        sc_破浪式: '破浪式',
                        sc_破浪式_info: '',
                        sc_剑觥沽酒: '剑觥沽酒',
                        sc_剑觥沽酒_info: '令狐冲使用牌指定目标后可以使目标造成的伤害减一',
                        sc_剑觥沽酒2: '剑觥沽酒',
                        sc_剑觥沽酒2_info: '',
                        sc_人剑合一: '人剑合一',
                        sc_人剑合一_info: '锁定技,令狐冲有20%几率减免一点伤害',
                        cooling: '冷却时间',
                        cooling_info: '',
                        sc_空手接白刃2: '空手接白刃2.0',
                        sc_空手接白刃2_info: '出牌阶段,可令除你外的所有角色依次翻面,冷却时间两回合(使用者只能为李靖)',
                        sc_移花接木: '移花接木',
                        sc_移花接木_info: '锁定技,你的体力值减少后有30%几率回复两点体力',
                        分化: '分化',
                        分化_info: '当太2真人为boss时可用,太二真人在回合开始时分化出两个分身,增加五点护甲,并失去【道法】,增加技能【星棋入梦】',
                        sc_boss太2真人: 'boss模式',
                        sc_boss太2真人_info: '',
                        sc_boss星棋入梦: '星棋入梦',
                        sc_boss星棋入梦_info: '锁定技,你造成的伤害附加一点的神圣伤害,且附带晕眩效果.被动:太2真人受到的伤害减一',
                        sc_boss星棋入梦2: '星棋入梦',
                        sc_boss星棋入梦2_info: '',
                        sc_加强护甲3: '加强护甲',
                        sc_加强护甲3_info: '',
                        sc_加强护甲2: '加强护甲',
                        sc_加强护甲2_info: '',
                        sc_作者光环: '皇冠',
                        sc_作者光环_info: '光环技,锁定技,<li>你免疫体力流失;<li><span style="color: #66CCFF">有权使用此扩展内的大部分其他角色的技能</span>;<li><span style="color: #FF0000">此技能不会因为失去此技能而失效(被改名除外)</span>;<li>当你失去此技能时此技能添加额外效果:<span style="color: #00FF00">每当你使用一张牌时获得随机一个技能</span><li>游戏开始前你额外进行一个回合;<li>每回合开始你随机获得一个扩展内技能;<li>每当你受到伤害时或死亡时你获得随机一个技能并放逐使你受伤/死亡的来源(来源不为自己才能放逐);<li>其他角色使用指向性技能时(且只指定一名目标)取消你为目标',
                        sc_关于被何子风云拿走技能这件事: '关于被何子风云拿走技能这件事',
                        sc_关于被何子风云拿走技能这件事_info: '',
                        reinit换武将牌: 'reinit换武将牌',
                        reinit换武将牌_info: '<span class=yellowtext>限定技</span> 你可回收所有其他角色的武将牌,重新分配武将牌(原体力上限和体力均不变)',
                        sc_炽心决: '炽心决',
                        sc_炽心决_info: "锁定技,四娃造成伤害后使对方增加'灼烧'效果,且四娃免疫火焰伤害",
                        sc_烈焰噬魂: '烈焰噬魂',
                        sc_烈焰噬魂_info: '',
                        sc_炽心决2: '炽心决',
                        sc_炽心决2_info: '',
                        sc_碎冻裂痕: '碎冻裂痕',
                        sc_碎冻裂痕_info: '锁定技,五娃造成伤害使目标冻伤,且有10%几率使目标晕眩;五娃免疫体力流失',
                        sc_碎冻裂痕2: '碎冻裂痕',
                        sc_碎冻裂痕2_info: '',
                        sc_碎冰: '碎冰',
                        sc_碎冰_info: '锁定技,五娃对冻伤的角色造成伤害+1',
                        sc_冻伤: '冻伤',
                        sc_冻伤_info: '',
                        sc_冻伤2: '冻伤',
                        sc_冻伤2_info: '',
                        sc_碎冰2: '碎冰',
                        sc_碎冰2_info: '',
                        sc_四娃: '四娃',
                        sc_四娃_info: '游戏开始时添加副将【五娃】',
                        sc_五娃: '五娃',
                        sc_五娃_info: '游戏开始时添加副将【四娃】',
                        sc_炎龙水殇: '炎龙水殇',
                        sc_炎龙水殇_info: '锁定技,<li>福禄小金刚造成伤害后会冰冻目标角色,<li>小金刚攻击被冰冻角色的伤害+1,<li>小金刚体力值小于体力上限的一半时造成的伤害+1<li>小金刚失去此技能时获得额外的不死效果',
                        sc_炎龙水殇2: '炎龙水殇',
                        sc_炎龙水殇2_info: '',
                        sc_冰冻2: '冰冻',
                        sc_冰冻2_info: '',
                        sc_冰冻: '冰冻',
                        sc_冰冻_info: '',
                        sc_冰冻3: '冰冻',
                        sc_冰冻3_info: '',
                        sc_炎龙水殇3: '炎龙水殇',
                        sc_炎龙水殇3_info: '',
                        sc_开场白: '开场白',
                        sc_开场白_info: '',
                        sc_福禄: '福禄',
                        sc_福禄_info: '锁定技,回合开始时,你视为使用【南蛮入侵】;回合结束时,你视为使用【万箭齐发】',
                        增加伤害: '增加伤害',
                        增加伤害_info: '',
                        sc_吃瓜吃瓜7: '吃瓜吃瓜',
                        sc_吃瓜吃瓜7_info: '',
                        sc_熊孩子之力: '熊孩子之力',
                        sc_熊孩子之力_info: '锁定技,死亡前你令所有其他角色受到的伤害+1',
                        sc_熊孩子之力2: '熊孩子之力',
                        sc_熊孩子之力2_info: '',
                        sc_我要作死: '我要作死',
                        sc_我要作死_info: '锁定技,回合结束之后你造成的伤害+1',
                        sc_作死之心: '作死之心',
                        sc_作死之心_info: '锁定技,七娃造成的伤害附加已损失体力值的伤害数值',
                        腐蚀: '腐蚀',
                        腐蚀_info: '',
                        sc_蚀骨: '蚀骨',
                        sc_蚀骨_info: '出牌阶段限一次,你可以使其他角色叠加一层【腐蚀】,冷却时间一回合(有角色免疫添加技能的话可能会有bug)',
                        sc_德古拉之心: '德古拉之心',
                        sc_德古拉之心_info: '其他角色于每回合的开始阶段根据【腐蚀】流失体力值,你回复等量体力.有概率效果x2',
                        sc_改命: '改命',
                        sc_改命_info: '锁定技,在你的判定牌生效前,你观看牌堆顶的7张牌并选择一张作为判定结果,此结果不可更改',
                        sc_盖天: '盖天',
                        sc_盖天_info: '任意一名角色的判定生效前,你可以选择让这张牌变成任意数字和颜色,此结果无法被再次更改.',
                        sc_结束游戏: '结束游戏',
                        sc_结束游戏_info: '',
                        sc_聚能镭射眼: '聚能镭射眼',
                        sc_聚能镭射眼_info: '出牌阶段限两次,你可以观看一名其他角色的手牌,并使目标虚弱',
                        sc_虚弱色线: '虚弱色线',
                        sc_虚弱色线_info: '',
                        sc_防御反噬: '防御反噬',
                        sc_防御反噬_info: '锁定技,你造成伤害前,移除对方的【护甲】和【免疫】技能',
                        sc_表演时间: '表演时间',
                        sc_表演时间_info: '锁定技,王蓝造成伤害时附加一点神圣伤害',
                        sc_队长领域: '队长领域',
                        sc_队长领域_info: '锁定技,王蓝造成属性伤害后回复一点体力',
                        sc_急电抢断: '急电抢断',
                        sc_急电抢断_info: '锁定技,每名角色回合结束后王蓝有15%几率额外行动一回合',
                        sc_女王的威严: '女王的威严',
                        sc_女王的威严_info: '锁定技,女王大人对体力值不低于体力上限一半的角色造成的伤害+1',
                        sc_蛊魅之环: '蛊魅之环',
                        sc_蛊魅之环_info: '锁定技,女王大人在场时,所有敌方角色受到的属性伤害+1',
                        sc_毒蛇之心: '毒蛇之心',
                        sc_毒蛇之心_info: '锁定技,场上每有一名角色死亡,则女王大人造成的伤害+1',
                        sc_女娲的庇护: '女娲的庇护',
                        sc_女娲的庇护_info: '锁定技,女王大人有30%几率取消受到伤害,流失体力和失去体力上限的效果',
                        sc_获得抗性3: '获得抗性',
                        sc_获得抗性3_info: '非boss可用,锁定技,游戏开始前,你修改其他人的抗性,回合开始,你获得一名其他角色的抗性,并获得修改一名其他角色的抗性的权利,部分人修改后会神圣死亡(若你为boss且没有作者技,可直接即死普通武将)',
                        sc_获得抗性4: '获得抗性',
                        sc_获得抗性4_info: '你为boss可用,锁定技,回合开始,你获得一名其他角色的抗性,并拥有修改角色抗性的权利,若其抗性和你的不同,则其神圣死亡(若你被武将牌上没有作者技,则在游戏开始前修改所有其他角色的抗性并即死其他角色)',
                        sc_金刚退场: '退场',
                        sc_金刚退场_info: '',
                        sc_病猫: '病猫',
                        sc_病猫_info: '',
                        sc_加强护甲: '加强护甲',
                        sc_加强护甲_info: '锁定技,每名角色回合开始时你获得一点护甲,且你的护甲可以抵消【体力流失】和【失去体力上限】的效果',
                        sc_即死: '单挑即死',
                        sc_即死_info: '单挑时使用,令其死亡,若不是单挑,则露馅',
                        sc_毒心: '毒心',
                        sc_毒心_info: '锁定技,与你同一阵营的角色对全场体力值最小的角色造成伤害或造成的属性伤害+1',
                        sc_毒心2: '毒心',
                        sc_毒心2_info: '',
                        sc_青鸾入梦: '青鸾入梦',
                        sc_青鸾入梦_info: '锁定技,你造成的属性伤害+2,造成伤害时摸x张牌(x为你造成伤害的数值)',
                        sc_妙笔回春: '妙笔回春',
                        sc_妙笔回春_info: '锁定技,你造成伤害后回复相应数值的体力',
                        sc_封印命运: '封印命运',
                        sc_封印命运_info: '锁定技,你造成伤害时附加目标已损失体力值的伤害',
                        sc_轮回剑心: '轮回剑心',
                        sc_轮回剑心_info: '若你在一回合内击杀了至少一名角色,此回合结束后,你可以进行一个额外的回合,且暂时增加攻击力',
                        sc_喋血剑舞: '喋血剑舞',
                        sc_喋血剑舞_info: '',
                        sc_豪能烈酒: '豪能烈酒',
                        sc_豪能烈酒_info: '锁定技,前两轮你造成的伤害+1',
                        sc_豪能烈酒2: '豪能烈酒',
                        sc_豪能烈酒2_info: '',
                        sc_弱点洞悉: '弱点洞悉',
                        sc_弱点洞悉_info: '锁定技,你的【杀】和【决斗】有40%几率额外造成1点伤害',
                        sc_力贯千钧: '力贯千钧',
                        sc_力贯千钧_info: '锁定技,你造成的伤害附加目标最大体力值减2的数值',
                        sc_强者印记: '强者印记',
                        sc_强者印记_info: '',
                        sc_强者印记2: '强者印记',
                        sc_强者印记2_info: '体力值大于4的敌方角色受到伤害或失去体力数值+2',
                        吐槽: '改造呆毛',
                        吐槽_info: '无名的呆毛被改造后,可以通过吐槽来收集能量(注:无名使用非装备牌后会吐槽)',
                        sc_瞬槽游弋: '瞬槽游弋',
                        sc_瞬槽游弋_info: '当吐槽能量达到150时,无名使用吐槽能量,使吐槽能量具现化;<span style="color: #FF00FF">当吐槽能量大于100时,无名可以无损耗转化使用一张锦囊牌(不可重复,一轮刷新一次)</span>',
                        sc_转生: '转生',
                        sc_转生_info: '无名不小心毁灭世界后重生在土也星,经过太2真人帮助,可随机转生为<剑灵>,<幻师>,<拳师><span style="color: #FF0000">(濒死状态被救活后此次转生无效)</span>',
                        sc_无名: '无名',
                        sc_无名_info: '主角的名字被小金刚抹去,世人无法记住他的名字,只能用无名代替',
                        瞬槽游弋: '瞬槽游弋',
                        瞬槽游弋_info: '',
                        元槽弹: '元槽弹',
                        元槽弹_info: '限定技,出牌阶段(玩家血量需小于2)或当你处于濒死状态时,你可以丢弃你所有的牌和你判定区里的牌(弃牌后血量小于等于0先结算转生),使一名角色翻面,并处于<阵亡状态>,你死亡,进行转生',
                        免疫死亡: '免疫死亡',
                        免疫死亡_info: '锁定技,你免疫死亡,每名角色回合开始时你摸一张牌',
                        龙: '龙威显赫',
                        龙_info: '每名在场角色都会增加霍元甲的能力',
                        龙2: '龙威显赫',
                        龙2_info: '',
                        sc_龙威显赫1: '龙威显赫',
                        sc_龙威显赫1_info: '锁定技:<span style="color: #66CCFF">你的基础伤害+1</span>',
                        sc_龙威显赫2: '龙威显赫',
                        sc_龙威显赫2_info: '锁定技:<span style="color: #66CCFF">每名角色回合结束后你有20%几率额外行动一回合</span>',
                        sc_龙威显赫3: '龙威显赫',
                        sc_龙威显赫3_info: '锁定技:<span style="color: #66CCFF">你的暴击率为30%</span>',
                        sc_龙威显赫4: '龙威显赫',
                        sc_龙威显赫4_info: '锁定技:<span style="color: #66CCFF">你的暴击伤害+1</span>',
                        sc_龙威显赫5: '龙威显赫',
                        sc_龙威显赫5_info: '锁定技:<span style="color: #66CCFF">你使用的普通锦囊牌不能被无懈可击响应;你不能成为其他角色的延时类锦囊的目标</span>',
                        sc_主要靠气质: '主要靠气质',
                        sc_主要靠气质_info: '锁定技,转笔侠免疫所有其他负面或增益效果,且造成的伤害+2',
                        英雄体质: '英雄体质',
                        英雄体质_info: '转笔侠每次受到伤害后,会增加一层免伤buff,持续到回合结束',
                        sc_致残打击: '致残打击',
                        sc_致残打击_info: '锁定技,转笔侠对体力值最大的角色造成伤害附加一点神圣伤害',
                        sc_英雄体质: '英雄体质',
                        sc_英雄体质_info: '当一名其他角色使用指向性技能指定你为目标时,你使之对你无效',
                        sc_战意涛涌: '战意涛涌',
                        sc_战意涛涌_info: '锁定技,当悟空体力值减少后,若此时在悟空的回合外,悟空可以摸一张牌并获得一次出牌机会,且悟空有25%几率额外行动一回合',
                        sc_复苏之风: '复苏之风',
                        sc_复苏之风_info: '锁定技,悟空造成伤害后回复相应数值的体力值并摸一张牌',
                        sc_战争艺术: '战争艺术',
                        sc_战争艺术_info: '锁定技,悟空造成伤害时,满足下列任意个条件则造成伤害+1(可叠加):<li><span style="color: #FF00FF">目标体力大于等于其体力上限的一半</span><li><span style="color: #66CCFF">悟空的体力值小于等于悟空的体力上限的一半</span>',
                        sc_顽石之灵: '顽石之灵',
                        sc_顽石之灵_info: '锁定技,悟空受到任何致命伤害时,<li>会免疫致死效果,直接进入悟空的回合,<li>有概率清除自身负面效果.<li>触发以上效果冷却时间三回合',
                        sc_作者光环2: '皇冠',
                        sc_作者光环2_info: '',
                        扩展作者: 'undefined',
                        扩展作者_info: '',
                        sc_恶魔: '恶魔',
                        sc_恶魔_info: '锁定技,<li>在身份模式你的身份为主公<li>你的胜利条件为场上剩至多两名角色<li>你清除其他角色技能时无视一般抗性<li>一大堆的即死技能<li>免疫死亡,此技能不会失效(改名除外)',
                        sc_隐形: '隐形',
                        sc_隐形_info: '六娃是隐形的,所以很容易被忽略.当你成为一张指定了一个或多个目标的锦囊牌的目标时,你可以取消之,并摸一张牌.',
                        sc_分裂大娃: '分裂',
                        sc_分裂大娃_info: '出牌阶段前,你可以失去大娃的技能并分裂出大娃',
                        sc_回收大娃: '回收',
                        sc_回收大娃_info: '出牌阶段,你回收分裂出去的大娃,获得大娃的技能(破城头锤除外),你摸两张牌',
                        sc_分裂二娃: '分裂',
                        sc_分裂二娃_info: '出牌阶段前,你可以失去二娃的技能并分裂出二娃',
                        sc_回收二娃: '回收',
                        sc_回收二娃_info: '出牌阶段,你回收分裂出去的二娃,获得二娃的技能,你回复一点体力',
                        sc_分裂三娃: '分裂',
                        sc_分裂三娃_info: '出牌阶段前,你可以失去三娃的技能并分裂出三娃',
                        sc_回收三娃: '回收',
                        sc_回收三娃_info: '出牌阶段,你回收分裂出去的三娃,获得三娃的技能,你获得一点护甲',
                        sc_分裂四娃: '分裂',
                        sc_分裂四娃_info: '出牌阶段前,你可以失去四娃的技能并分裂出四娃',
                        sc_回收四娃: '回收',
                        sc_回收四娃_info: '出牌阶段,你回收分裂出去的四娃,获得四娃的技能,你执行一次额外的摸牌阶段',
                        sc_分裂五娃: '分裂',
                        sc_分裂五娃_info: '出牌阶段前,你可以失去五娃的技能并分裂出五娃',
                        sc_回收五娃: '回收',
                        sc_回收五娃_info: '出牌阶段,你回收分裂出去的五娃,获得五娃的技能,你回复两点体力',
                        sc_分裂六娃: '分裂',
                        sc_分裂六娃_info: '出牌阶段前,你可以失去六娃的技能并分裂出六娃',
                        sc_回收六娃: '回收',
                        sc_回收六娃_info: '出牌阶段,你回收分裂出去的六娃,获得六娃的技能,你立即使用【怒气爆发】',
                        sc_分裂七娃: '分裂',
                        sc_分裂七娃_info: '出牌阶段前,你可以失去七娃的技能并分裂出七娃',
                        sc_回收七娃: '回收',
                        sc_回收七娃_info: '出牌阶段,你回收分裂出去的七娃,获得七娃的技能,你失去两点体力,并使你造成的伤害+1',
                        sc_分裂: '分裂',
                        sc_分裂_info: '锁定技,小金刚拥有七个福禄娃的技能,若小金刚为boss时,不免疫移除技能且可以分裂和回收福禄娃',
                    },
                };
                lib.config.all.characters.add('十万个冷笑话');
                lib.config.characters.add('十万个冷笑话');
                for (var i in QQQ.character) {
                    QQQ.character[i][4].add(`ext:十万个冷笑话/image/${i}.jpg`);
                }
                lib.translate['十万个冷笑话_character_config'] = `十万个冷笑话`;
                return QQQ;
            });
        },
        package: {
            intro: '说明:<li>bug反馈请加QQ2954700422联系<li>联机版由&孤影&更新,联机版JS请到无名杀扩展交流群的群文件下载,群号码:149662491<li>本扩展自带壁纸,每回合随机换<li><span style="color: #66CCFF">如果你想玩此扩展,那么你需要面对比普通三国杀武将强很多的十冷武将</span><li>"冷却时间":部分技能使用后会进行冷却,直到冷却完成才能再使用<li>"晕眩":失去技能,并且跳过摸牌阶段至被晕眩角色的回合结束,且被晕眩的角色弃光手牌(对boss无效)<li>"boss专属抗性":免疫失去技能,体力值大于0免疫普通死亡.可能有部分武将因此会有bug请见谅.<li>扩展里肯定作者最强啦(嘻嘻嘻)<br><span style=\'color: gold\'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>',
            author: '<li>诗笺(普通版作者)<li>&孤影&(联机版作者)',
            version: '2.5',
        },
        config: {
            入魔: {
                name: '<span class="Qmenu">入魔</span>',
                intro: '恶魔的交易',
                init: false,
            },
            壁纸: {
                name: '<span class="Qmenu">壁纸</span>',
                intro: '随机壁纸',
                init: false,
            },
        },
    };
});

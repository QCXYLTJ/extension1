import { lib, game, ui, get, ai, _status } from '../../noname.js'
const extensionInfo = await lib.init.promises.json(`extension/同人动漫am/info.json`);
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '同人动漫am',
        content(config, pack) {
            game.playel = function (fn, dir, sex) {
                if (lib.config.background_speak) {
                    if (dir && sex) game.playAudio(dir, sex, fn);
                    else if (dir) game.playAudio(dir, fn);
                    else game.playAudio('../extension/同人动漫am/audio', fn);
                }
            };
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
            lib.skill._qiyuxqsr_qy = {
                trigger: {
                    global: ['gameStart', 'phaseBefore'],
                },
                forced: true,
                filter(event, player) {
                    return player == _status.埼玉;
                },
                content() {
                    player.init = game.kongfunc;
                    player.reinit = game.kongfunc;
                    player.remove = game.kongfunc;
                    player.delete = game.kongfunc;
                    player.out = game.kongfunc;
                },
            };
        },
        precontent() {
            game.mp432 = async function (Q) {
                return new Promise((resolve) => {
                    const video = document.createElement('video');
                    video.src = `extension/同人动漫am/mp4/${Q}.mp4`;
                    video.style.cssText = 'z-index: 999; height: 100%; width: 100%; position: fixed; object-fit: cover; left: 0; right: 0; pointer-events: none;';
                    video.autoplay = true;
                    video.loop = false;
                    const backButton = document.createElement('div');
                    backButton.innerHTML = '返回游戏'; //文字内容
                    backButton.style.cssText = 'z-index: 999; position: absolute; bottom: 10px; right: 10px; color: red; font-size: 16px; padding: 5px 10px; background: rgba(0, 0, 0, 0.3);';
                    backButton.onclick = function () {
                        backButton.remove();
                        video.remove();
                        resolve();
                    }; //设置返回按钮的点击事件
                    document.body.appendChild(video);
                    document.body.appendChild(backButton);
                    video.addEventListener('error', function () {
                        backButton.remove();
                        video.remove();
                        resolve();
                    });
                    video.addEventListener('ended', function () {
                        backButton.remove();
                        video.remove();
                        resolve();
                    });
                });
            }; //播放mp4
            //—————————————————————————————————————————————————————————————————————————————武将包
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '同人动漫am',
                    connect: true,
                    character: {
                        饿狼: ['male', 'shen', 4, ['怪人化', '英雄狩猎', '英雄狩猎-防', 'shoulie_guai'], ['des:...']],
                        牛角饿狼: ['male', 'shen', 5, ['怪害神杀拳', '神之使', '英雄狩猎', '英雄狩猎-防', 'shoulie_guai'], ['des:...']],
                        神化饿狼: ['male', 'shen', 5, ['神通力', '模式', '宇宙射线', '神之拳', '寰宇', '时空杀'], ['des:...']],
                        五河士道: ['male', 'shen', 4, ['士道or士织', '未之因', '现之果', '故之线', '结之世', '鏖杀公', '嗫告篇㠸'], ['des:...']],
                        龙化上条当麻: ['male', 'shen', 4, ['超幸运', '神明的祝福', '前兆感知', '桃花运'], ['des:...']],
                        un: ['none', 'ai', 4, [], ['unseen', 'des:..']],
                        卫宫士郎: ['male', 'shen', 5, ['投影魔术', '无限剑制', '幻想崩坏', '理想继承'], ['des:...']],
                        上条: ['male', 'shen', '3/11', ['rebusi', 'youqing', 'eryuan', 'shenjing', 'huanyuan', 'qiangan'], []],
                        '上条当麻●神': ['male', 'shen', '3/11', ['qiangan', 'shenjing', 'huanyuan', 'rebusi', 'youqing', 'eryuan', 'xiongyun', 'reqiangyun', 'tianyuni'], ['des:来自异世界的少年']],
                        上条当麻: ['male', 'shen', '6/8', ['qiangan', 'huanyuan', 'eryuan', 'youqing', 'xinjuejing', 'relonghun', 'xiongyun'], ['des:来自异世界的少年']],
                        一方通行: ['none', 'shen', '3/3', ['反射', 'heiyi', 'rebaiyi', 'shenyuan'], ['des:某不知名的萝莉控/左护法/条吹']],
                        '上条当麻●里幻': ['male', 'no', '4/9', ['shenjing', 'youqing', 'qiangan', 'lihuan', 'rebusi', 'eryuan'], ['zhu', 'des:来自异世界的神秘少年,当.盖子被打开,神秘的力量是被释放出来']],
                        埼玉: ['male', 'shen', 3, ['阻隔性', '超市打折', '普通拳', '破格', '认真反复横跳', '兴趣使然', '特异点', '认真殴打', '认真精准拳'], ['des:最强的男人,没有人可以抵挡住他的一拳']],
                        空条承太郎: ['male', 'shen', '4', ['白金之星', '黄金精神'], ['des:师傅你是干什么的,修空调的']],
                    },
                    skill: {
                        怪人化: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            animationStr: '怪人化',
                            filter(event, player) {
                                return player.maxHp == 1;
                            },
                            content() {
                                game.playel('怪人化1');
                                player.init('牛角饿狼');
                            },
                        },
                        怪害神杀拳: {
                            trigger: {
                                source: 'damageBegin1',
                            },
                            init(player) {
                                player.storage.怪害神杀拳 = 0;
                                player.markSkill('怪害神杀拳');
                            },
                            nobracket: true,
                            forced: true,
                            mark: true,
                            marktext: '神',
                            intro: {
                                content: '怪害神杀拳',
                            },
                            filter(event, player) {
                                return event.parent.type == 'card' && event.card.isCard;
                            },
                            content() {
                                trigger.player.addTempSkill('怪害神杀拳_mark', 'phaseEnd');
                                game.playel('怪害神杀拳1');
                                player.gainMaxHp(1);
                                trigger.num++;
                            },
                            group: '怪害神杀拳_marka',
                            subSkill: {
                                mark: {
                                    forced: true,
                                    silent: true,
                                    popup: false,
                                },
                                marka: {
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player.hasSkill('怪害神杀拳_mark');
                                    },
                                    content() {
                                        var n = trigger.player.maxHp;
                                        var m = trigger.player.hp;
                                        if (player.hp <= n + m) {
                                            player.draw(2);
                                            player.recover();
                                            player.storage.怪害神杀拳 += 1;
                                            player.markSkill('怪害神杀拳');
                                        } else {
                                            if (trigger.num < 2) {
                                                player.chooseToDiscard(2, 'he', true);
                                                player.recover();
                                                player.storage.怪害神杀拳 += 1;
                                                player.markSkill('怪害神杀拳');
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        神之使: {
                            nobracket: true,
                            trigger: {
                                player: 'dieBefore',
                            },
                            forced: true,
                            animationStr: '神化',
                            filter(event, player) {
                                return player.storage.怪害神杀拳 >= 8;
                            },
                            content() {
                                trigger.untrigger();
                                trigger.finish();
                                game.playel('神之使1');
                                player.init('神化饿狼');
                            },
                        },
                        英雄狩猎: {
                            trigger: {
                                source: 'damageAfter',
                            },
                            nobracket: true,
                            forced: true,
                            content() {
                                player.addTempSkill('英雄狩猎_mark', { player: 'phaseBegin' });
                            },
                            subSkill: {
                                mark: {
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    mark: true,
                                    marktext: '狩',
                                    intro: {
                                        content: '下回合开始你将从随机的5个武将中旋转一个获得其一个技能',
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var list = [];
                                        for (var i in lib.character) {
                                            if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) continue;
                                            list.push(i);
                                        }
                                        event.card = list.randomGets(5);
                                        ('step 1');
                                        if (event.card.length) {
                                            player
                                                .chooseButton(true)
                                                .set('ai', function (button) {
                                                    return get.rank(button.link, true) - lib.character[button.link][2];
                                                })
                                                .set('createDialog', ['选择一张武将牌', [event.card, 'character']]);
                                        }
                                        ('step 2');
                                        var link = result.links[0];
                                        var list = [];
                                        var skills = lib.character[link][3];
                                        for (let i = 0; i < skills.length; i++) {
                                            var info = lib.skill[skills[i]];
                                            list.push(skills[i]);
                                        }
                                        player
                                            .chooseControl(list)
                                            .set('prompt', '请选择一个要获得的技能')
                                            .set('ai', function () {
                                                return 0;
                                            });
                                        ('step 3');
                                        if (result.control) player.addSkill(result.control);
                                    },
                                },
                            },
                        },
                        神通力: {
                            trigger: {
                                player: ['damageBegin2', 'loseHpBegin', 'loseMaxHpBegin'],
                            },
                            nobracket: true,
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                return event.num > 2;
                            },
                            content() {
                                trigger.untrigger();
                                trigger.finish();
                                if (trigger.source) {
                                    trigger.source.chooseToDiscard(5, 'he', true);
                                    player.useCard({ name: 'sha' }, trigger.source, false);
                                }//QQQ
                            },
                            group: ['神通力_mark', '神通力_marka'],
                            subSkill: {
                                mark: {
                                    superCharlotte: true,
                                    charlotte: true,
                                    fixed: true,
                                    forced: true,
                                    popup: false,
                                    trigger: {
                                        player: ['damageBegin2', 'loseHpBegin', 'loseMaxHpBegin'],
                                    },
                                    filter(event, player) {
                                        return get.itemtype(event.cards) != 'cards' || get.position(event.cards[0], true) != 'o';
                                    },
                                    content() {
                                        trigger.untrigger();
                                        trigger.finish();
                                    },
                                },
                                marka: {
                                    superCharlotte: true,
                                    charlotte: true,
                                    fixed: true,
                                    forced: true,
                                    popup: false,
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    content() {
                                        player.phaseDraw();
                                        player.phaseUse();
                                    },
                                },
                            },
                        },
                        模式: {
                            nobracket: true,
                            trigger: {
                                global: 'roundStart',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('模式'), [1, 99], function (card, player, target) {
                                        return player != target;
                                    })
                                    .set('ai', function (target) {
                                        return 1;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    for (let i = 0; i < result.targets.length; i++) {
                                        var target = result.targets[i];
                                        var skills = lib.character[target.name][3];
                                        for (var j = 0; j < skills.length; j++) {
                                            if (!lib.skill[skills[j]].forceunique) {
                                                player.addTempSkill(skills[j], { player: 'phaseEnd' });
                                            }
                                        }
                                    }
                                }
                            },
                            ai: {
                                expose: 0.2,
                                threaten: 2,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        宇宙射线: {
                            nobracket: true,
                            trigger: {
                                global: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player;
                            },
                            content() {
                                'step 0';
                                var next;
                                next = trigger.player
                                    .chooseControl('失去一点体力', 'cancel2', function (event, player) {
                                        if (trigger.player.hp <= 1) {
                                            return 'cancel2';
                                        }
                                        return '失去一点体力';
                                    })
                                    .set('sourcex', trigger.player);
                                next.set('prompt', get.prompt('宇宙射线', trigger.player));
                                ('step 1');
                                if (result.control == '失去一点体力') {
                                    trigger.player.loseHp();
                                } else trigger.player.addTempSkill('宇宙射线_mark', { player: 'phaseEnd' });
                            },
                            ai: {
                                expose: 0.2,
                                threaten: 2,
                            },
                            subSkill: {
                                mark: {
                                    mod: {
                                        cardEnabled(card, player) {
                                            if (card.name == 'tao') return false;
                                        },
                                        cardSavable(card, player) {
                                            if (card.name == 'tao') return false;
                                        },
                                    },
                                },
                            },
                        },
                        '英雄狩猎-防': {
                            trigger: {
                                player: ['damageBegin2', 'loseHpBegin'],
                            },
                            nobracket: true,
                            filter(event, player) {
                                return player.hp < player.maxHp;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var next;
                                next = trigger.player
                                    .chooseControl('英雄狩猎-防', 'cancel2', function (event, player) {
                                        if (trigger.player.maxHp <= 1) {
                                            return 'cancel2';
                                        }
                                        return '英雄狩猎-防';
                                    })
                                    .set('sourcex', player);
                                next.set('prompt', get.prompt('英雄狩猎-防', player));
                                ('step 1');
                                if (result.control == '英雄狩猎-防') {
                                    trigger.untrigger();
                                    trigger.finish();
                                    player.gainMaxHp(-1);
                                    var list = [];
                                    for (var i in lib.character) {
                                        var skills = lib.character[i][3];
                                        for (var j = 0; j < skills.length; j++) {
                                            if (lib.skill[skills[j]] && lib.translate[skills[j] + '_info']) {
                                                var skills1 = lib.character[player.name][3];
                                                for (var n = 0; n < skills1.length; n++) {
                                                    var str = lib.translate[skills[j] + '_info'];
                                                    if (skills1[n] != skills[j] && (str.includes('防止') || str.includes('伤害'))) {
                                                        list.push(skills[j]);
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    list = list.randomGets(5);
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
                                        for (let i = 0; i < list.length; i++) {
                                            if (lib.translate[list[i] + '_info']) {
                                                var translation = get.translation(list[i]);
                                                if (translation[0] == '新' && translation.length == 5) {
                                                    translation = translation.slice(1, 5);
                                                } else {
                                                    translation = translation.slice(0, 4);
                                                }
                                                var item = dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【' + translation + '】</div></div>' + lib.translate[list[i] + '_info'] + '</div></div>');
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
                                } else event.finish();
                                ('step 2');
                                _status.imchoosing = false;
                                var link = result;
                                player.addSkill(link, true);
                                player.popup(link);
                                game.log(player, '获得了技能', '【' + get.translation(link) + '】');
                            },
                            group: ['英雄狩猎-防_mark'],
                            subSkill: {
                                mark: {
                                    trigger: {
                                        player: 'loseMaxHpBegin',
                                    },
                                    nobracket: true,
                                    filter(event, player) {
                                        return player.hp < player.maxHp && event.num >= 2;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var next;
                                        next = trigger.player
                                            .chooseControl('英雄狩猎-防', 'cancel2', function (event, player) {
                                                if (trigger.player.maxHp <= 1) {
                                                    return 'cancel2';
                                                }
                                                return '英雄狩猎-防';
                                            })
                                            .set('sourcex', player);
                                        next.set('prompt', get.prompt('英雄狩猎-防', player));
                                        ('step 1');
                                        if (result.control == '英雄狩猎-防') {
                                            trigger.untrigger();
                                            trigger.finish();
                                            player.gainMaxHp(-1);
                                            var list = [];
                                            for (var i in lib.character) {
                                                var skills = lib.character[i][3];
                                                for (var j = 0; j < skills.length; j++) {
                                                    if (lib.skill[skills[j]] && lib.translate[skills[j] + '_info']) {
                                                        var skills1 = lib.character[player.name][3];
                                                        for (var n = 0; n < skills1.length; n++) {
                                                            var str = lib.translate[skills[j] + '_info'];
                                                            if (skills1[n] != skills[j] && (str.includes('防止') || str.includes('伤害'))) {
                                                                list.push(skills[j]);
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                            list = list.randomGets(5);
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
                                                for (let i = 0; i < list.length; i++) {
                                                    if (lib.translate[list[i] + '_info']) {
                                                        var translation = get.translation(list[i]);
                                                        if (translation[0] == '新' && translation.length == 5) {
                                                            translation = translation.slice(1, 5);
                                                        } else {
                                                            translation = translation.slice(0, 4);
                                                        }
                                                        var item = dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【' + translation + '】</div></div>' + lib.translate[list[i] + '_info'] + '</div></div>');
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
                                        } else event.finish();
                                        ('step 2');
                                        _status.imchoosing = false;
                                        var link = result;
                                        player.addSkill(link, true);
                                        player.popup(link);
                                        game.log(player, '获得了技能', '【' + get.translation(link) + '】');
                                    },
                                },
                            },
                        },
                        神之拳: {
                            nobracket: true,
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                return event.target != player && get.tag(event.card, 'damage');
                            },
                            logTarget: 'target',
                            content() {
                                var n = trigger.target.maxHp;
                                var m = trigger.target.hp;
                                var skills = trigger.target.getCards('s');
                                skills = skills.slice(0);
                                for (var j = 0; j < skills.length; j++) {
                                    if (lib.skill[skills[j]] && lib.translate[skills[j] + '_info']) {
                                        var str = lib.translate[skills[j] + '_info'];
                                        if (str.includes('复活') && j > 5 && n + m >= 10) {
                                            trigger.target.init('un');
                                            const next = game.createEvent('diex', false);
                                            next.source = player;
                                            next.player = trigger.target;
                                            next._triggered = null;
                                            next.restMap = { type: null, count: null, audio: null };
                                            next.excludeMark = [];
                                            next.setContent('die');
                                        } else {
                                            if (str.includes('复活') || j > 5 || n + m >= 10) {
                                                trigger.target.die();
                                            } else event.finish();
                                        }
                                    }
                                }
                            },
                        },
                        寰宇: {
                            nobracket: true,
                            trigger: {
                                player: 'loseEnd',
                            },
                            filter(event, player, name) {
                                return _status.currentPhase != player && event.getParent(2).player != player && event.parent.name != 'useCard' && event.parent.name != 'respond';
                            },
                            content() {
                                'step 0';
                                player.addTempSkill('寰宇_mark', { player: 'phaseBegin' });
                                var type = get.type(event.card);
                                var target = trigger.getParent(2).player;
                                target
                                    .chooseToDiscard('请弃置一张' + get.translation(type) + '牌,否则失去一点最大体力值', 'he', function (card) {
                                        return get.type(card) == _status.event.type;
                                    })
                                    .set('ai', function (card) {
                                        return 20 - get.value(card);
                                    })
                                    .set('type', type);
                                ('step 1');
                                if (!result.bool) {
                                    trigger.getParent(2).player.gainMaxHp(-1);
                                }
                            },
                            group: ['寰宇_marka', '寰宇_markc', '寰宇_markd', '寰宇_markf'],
                            subSkill: {
                                mark: {
                                    trigger: {
                                        player: ['damageBegin2', 'loseHpBegin'],
                                    },
                                    forced: true,
                                    content() {
                                        trigger.num += 3;
                                    },
                                },
                                marka: {
                                    trigger: {
                                        player: ['phaseEnd'],
                                    },
                                    filter(event, player) {
                                        return player.getHistory('skipped').length;
                                    },
                                    forced: true,
                                    content() {
                                        player.addTempSkill('寰宇_markb', { player: 'phaseBegin' });
                                        player.phaseDraw();
                                        player.phaseUse();
                                    },
                                },
                                markb: {
                                    trigger: {
                                        player: ['useCardAfter', 'respondAfter', 'phaseBegin'],
                                    },
                                    forced: true,
                                    silent: true,
                                    content() {
                                        player.drawTo(3);
                                    },
                                    popup: false,
                                },
                                markc: {
                                    trigger: {
                                        global: 'phaseJieshuBegin',
                                    },
                                    filter(event, player) {
                                        return event.player != player && player.storage.寰宇_markd > 5;
                                    },
                                    forced: true,
                                    content() {
                                        var num = player.storage.寰宇_markd;
                                        if (num > 5 && num < 11) {
                                            player.gain(
                                                get.cardPile(function (card) {
                                                    return card.name == 'sha';
                                                }),
                                                'gain2'
                                            );
                                            player
                                                .chooseToUse('是否使用一张杀？', { name: 'sha' }, trigger.player, false)
                                                .set('filterTarget', function (card, player, target) {
                                                    return player.canUse('sha', target, false);
                                                })
                                                .set('sourcex', player);
                                        }
                                        if (num > 11) {
                                            trigger.player.clearSkills();
                                        }
                                    },
                                    ai: {
                                        expose: 0.2,
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
                                markd: {
                                    init(player) {
                                        player.storage.寰宇_markd = 0;
                                        player.markSkill('寰宇_markd');
                                    },
                                    trigger: {
                                        global: 'recoverEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player != player;
                                    },
                                    content() {
                                        player.storage.寰宇_markd += trigger.num;
                                    },
                                },
                                markf: {
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player != player;
                                    },
                                    content() {
                                        player.storage.寰宇_markd = 0;
                                    },
                                },
                            },
                        },
                        士道or士织: {
                            nobracket: true,
                            trigger: {
                                global: 'phaseEnd',
                            },
                            forced: true,
                            init(player) {
                                player.storage.士道or士织 = 0;
                                player.markSkill('士道or士织');
                            },
                            content() {
                                if (player.storage.士道or士织 == 1) {
                                    game.playel('路过的普通高中生');
                                    player.sex = 'female';
                                    player.removeSkill('结之世');
                                    player.removeSkill('现之果');
                                    player.removeSkill('未之因');
                                    player.addSkill('过之因');
                                    player.addSkill('今之果');
                                    player.addSkill('未之界');
                                    player.node.name.innerHTML = '五<br/>河<br/>士<br/>织';
                                    player.node.avatar.setBackgroundImage('extension/同人动漫am/image/五河士织.jpg');
                                    player.storage.士道or士织 = 0;
                                    lib.translate[player.name] = '五河士织';
                                } else {
                                    player.sex = 'male';
                                    player.addSkill('结之世');
                                    player.addSkill('现之果');
                                    player.addSkill('未之因');
                                    player.removeSkill('过之因');
                                    player.removeSkill('今之果');
                                    player.removeSkill('未之界');
                                    player.node.name.innerHTML = '五<br/>河<br/>士<br/>道';
                                    player.node.avatar.setBackgroundImage('extension/同人动漫am/image/五河士道.jpg');
                                    player.storage.士道or士织 = 1;
                                    lib.translate[player.name] = '五河士道';
                                }
                            },
                            group: ['士道or士织_turn'],
                            subSkill: {
                                turn: {
                                    trigger: {
                                        player: 'turnOverBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return !player.isTurnedOver();
                                    },
                                    content() {
                                        trigger.cancel();
                                        game.log(player, '取消了翻面');
                                    },
                                },
                            },
                        },
                        未之因: {
                            nobracket: true,
                            trigger: {
                                global: 'damageBegin',
                            },
                            forced: true,
                            silent: true,
                            filter(event, player) {
                                return event.player != player && !player.hasSkill('未之因_mark');
                            },
                            content() {
                                'step 0';
                                var next = player.chooseToDiscard('he', '是否弃置一张牌令此伤害无效？', function (card, player) {
                                    return 1;
                                });
                                next.set('ai', function (card) {
                                    var player = _status.event.player;
                                    if (player.countCards('h') >= player.hp || _status.event.getTrigger().num > 1) {
                                        return 12 - get.value(card);
                                    }
                                    return 3 - get.value(card);
                                });
                                ('step 1');
                                if (result.bool) {
                                    game.playel('未之因2');
                                    if (trigger.player.hasSkill('未之因_marka')) {
                                        if (trigger.player.storage.未之因_marka >= 2) {
                                            trigger.player.storage.未之因_marka += 1;
                                            trigger.player.markSkill('未之因_marka');
                                            trigger.player.addSkill('未之因_markb');
                                        } else {
                                            trigger.player.storage.未之因_marka += 1;
                                            trigger.player.markSkill('未之因_marka');
                                        }
                                    } else trigger.player.addSkill('未之因_marka');
                                    player.addTempSkill('未之因_mark', 'phaseEnd');
                                    trigger.untrigger();
                                    trigger.finish();
                                }
                            },
                            group: ['未之因_markb'],
                            subSkill: {
                                mark: {
                                    silent: true,
                                    mark: true,
                                },
                                marka: {
                                    silent: true,
                                    mark: true,
                                    superCharlotte: true,
                                    charlotte: true,
                                    marktext: '好感',
                                    init(player) {
                                        player.storage.未之因_marka = 1;
                                        player.markSkill('未之因_marka');
                                    },
                                    intro: {
                                        content: '你被正在被士道攻略中',
                                    },
                                },
                                markb: {
                                    silent: true,
                                    mark: true,
                                    superCharlotte: true,
                                    charlotte: true,
                                    marktext: '结',
                                },
                            },
                        },
                        现之果: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            silent: true,
                            content() {
                                'step 0';
                                event.num = 0;
                                game.findPlayer(function (current) {
                                    if (!current.hasSkill('未之因_markb')) event.num++;
                                });
                                ('step 1');
                                if (event.num > 0) {
                                    if (player.storage.故之线 < 8) {
                                        player.storage.故之线 += 1;
                                        player.markSkill('故之线');
                                    }
                                } else {
                                    game.over('胜利');
                                }
                            },
                        },
                        故之线: {
                            nobracket: true,
                            silent: true,
                            mod: {
                                maxHandcard(player, num) {
                                    return num - player.hp + player.storage.故之线;
                                },
                            },
                            mark: true,
                            marktext: '道',
                            init(player) {
                                player.storage.故之线 = 3;
                                player.markSkill('故之线');
                            },
                            intro: {
                                content: '故之线',
                            },
                            group: ['故之线_mark'],
                            subSkill: {
                                mark: {
                                    trigger: {
                                        player: ['gainEnd', 'loseEnd'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countCards('h') != player.storage.故之线;
                                    },
                                    content() {
                                        game.playel('故之线');
                                        if (player.countCards('h') < player.storage.故之线) {
                                            player.draw(player.storage.故之线 - player.countCards('h'));
                                        } else {
                                            player.chooseToDiscard(player.countCards('h') - player.storage.故之线, 'he', true);
                                        }
                                    },
                                },
                            },
                        },
                        结之世: {
                            nobracket: true,
                            silent: true,
                            init(player) {
                                player.storage.结之世 = 2;
                                player.markSkill('结之世');
                            },
                            mod: {
                                globalTo(from, to, distance) {
                                    return distance + 1;
                                },
                                globalFrom(from, to, distance) {
                                    for (const i of game.players) {
                                        if (i.hasSkill('故之线')) {
                                            return distance - Math.max(1, Math.floor(i.maxHp - i.hp));
                                        }
                                    }
                                },
                            },
                            trigger: {
                                player: 'useCardAfter',
                            },
                            filter(event, player) {
                                if (player.storage.故之线 < 6) return false;
                                if (player.storage.结之世 < 1) return false;
                                if (event.parent.name == '结之世') return false;
                                if (!event.targets || !event.card) return false;
                                if (event.card && event.card.name == 'wuxie') return false;
                                var type = get.type(event.card);
                                var card = game.createCard(event.card.name, event.card.suit, event.card.number, event.card.nature);
                                var targets = event._targets || event.targets;
                                for (let i = 0; i < targets.length; i++) {
                                    if (!targets[i].isIn()) return false;
                                    if (!player.canUse({ name: event.card.name }, targets[i], false, false)) {
                                        return false;
                                    }
                                }
                                if (type == 'trick' || type == 'basic') return true;
                            },
                            check(event, player) {
                                if (event.card.name == 'tiesuo') return false;
                                return true;
                            },
                            content() {
                                var card = game.createCard(trigger.card.name, trigger.card.suit, trigger.card.number, trigger.card.nature);
                                player.storage.结之世 -= 1;
                                player.useCard(card, (trigger._targets || trigger.targets).slice(0));
                            },
                            ai: {
                                threaten: 1.3,
                            },
                            group: ['结之世_mark', '结之世_marka'],
                            subSkill: {
                                mark: {
                                    trigger: {
                                        global: 'phaseDiscardEnd',
                                    },
                                    forced: true,
                                    content() {
                                        player.storage.结之世 = 2;
                                        player.markSkill('结之世');
                                    },
                                },
                                marka: {
                                    init(player) {
                                        player.storage.结之世_marka = player.maxHp;
                                        player.markSkill('结之世_marka');
                                    },
                                    trigger: {
                                        player: 'phaseBefore',
                                    },
                                    filter(event, player) {
                                        return player.storage.故之线 >= 8;
                                    },
                                    forced: true,
                                    content() {
                                        player.gainMaxHp(player.storage.结之世_marka - player.maxHp);
                                        player.hp = player.maxHp;
                                    },
                                },
                            },
                        },
                        过之因: {
                            nobracket: true,
                            trigger: {
                                global: 'recoverEnd',
                            },
                            forced: true,
                            silent: true,
                            filter(event, player) {
                                return event.player != player && !player.hasSkill('过之因_mark');
                            },
                            content() {
                                'step 0';
                                var next = player.chooseToDiscard('he', '是否弃置一张牌令其获得织？', function (card, player) {
                                    return 1;
                                });
                                next.set('ai', function (card) {
                                    var player = _status.event.player;
                                    if (player.countCards('h') >= player.hp || _status.event.getTrigger().num < 1) {
                                        return 12 - get.value(card);
                                    }
                                    return 3 - get.value(card);
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.addTempSkill('过之因_mark', 'phaseEnd');
                                    trigger.player.addSkill('过之因_marka');
                                }
                            },
                            subSkill: {
                                mark: {
                                    silent: true,
                                    mark: true,
                                },
                                marka: {
                                    silent: true,
                                    mark: true,
                                    superCharlotte: true,
                                    forced: true,
                                    marktext: '织',
                                    init(player) {
                                        player.storage.过之因_marka = 0;
                                        player.markSkill('过之因_marka');
                                    },
                                    trigger: {
                                        player: ['useCard', 'respond'],
                                    },
                                    content() {
                                        'step 0';
                                        player
                                            .chooseToDiscard('请弃置一张牌,否则此牌对目标无效', 'he', function (card, player) {
                                                return player.countCards('h') > 0;
                                            })
                                            .set('ai', function (card) {
                                                return 12 - get.value(card);
                                            });
                                        ('step 1');
                                        if (!result.bool) {
                                            trigger.cancel();
                                        } else player.storage.过之因_marka += 1;
                                    },
                                    intro: {
                                        content: '你正在被士织cpu',
                                    },
                                },
                            },
                        },
                        今之果: {
                            nobracket: true,
                            trigger: {
                                global: 'loseAfter',
                            },
                            _priority: 10,
                            forced: true,
                            silent: true,
                            filter(event, player) {
                                return event.cards && event.type == 'discard' && event.parent.name != 'useCard' && event.parent.name != 'respond' && event.player.hasSkill('过之因_marka');
                            },
                            content() {
                                'step 0';
                                var card = trigger.cards[0];
                                if (get.type(card) == 'basic') player.draw();
                                if (get.type(card) == 'trick' || get.type(card) == 'delay') event.goto(2);
                                if (get.type(card) == 'equip') event.goto(8);
                                ('step 1');
                                event.finish();
                                ('step 2');
                                player.judge(function (card) {
                                    if (card.suit == 'heart') return 4;
                                    return 0;
                                }).judge2 = function (result) {
                                    return result.bool ? true : false;
                                };
                                ('step 3');
                                if (result.suit == 'heart') {
                                    player.gain(result.card, 'gain2');
                                    player.draw();
                                    player.chooseToUse();
                                }
                                if (result.suit == 'spade') {
                                    player.chooseToDiscard(1, 'he', true);
                                    event.goto(5);
                                }
                                ('step 4');
                                event.finish();
                                ('step 5');
                                player
                                    .chooseTarget(get.prompt('今之果'), function (card, player, target) {
                                        return player != target;
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(player, target);
                                    });
                                ('step 6');
                                if (result.targets?.length) {
                                    result.targets[0].damage(1, 'thunder');
                                }
                                ('step 7');
                                event.finish();
                                ('step 8');
                                var e1 = player.getEquips(1);
                                var e2 = player.getEquips(2);
                                var e3 = player.getEquips(3);
                                var e4 = player.getEquips(4);
                                var e5 = player.getEquips(5);
                                var card = trigger.cards[0];
                                if ((get.subtype(card) == 'equip1' && !e1) || (get.subtype(card) == 'equip2' && !e2) || (get.subtype(card) == 'equip3' && !e3) || (get.subtype(card) == 'equip4' && !e4) || (get.subtype(card) == 'equip5' && !e5)) {
                                    player.equip(trigger.cards[0]);
                                } else player.changeHujia(1);
                            },
                        },
                        未之界: {
                            nobracket: true,
                            silent: true,
                            forced: true,
                            trigger: {
                                global: 'useCard',
                            },
                            filter(event, player) {
                                return event.player != player && event.player.storage.过之因_marka >= 5;
                            },
                            content() {
                                'step 0';
                                trigger.player.storage.过之因_marka = 0;
                                trigger.player.skip('phaseUse', true);
                                ('steo 1');
                                player.phaseDraw();
                                player.phaseUse();
                            },
                        },
                        shoulie_guai: {
                            nobracket: true,
                            init(player) {
                                player.storage.shoulie_guai = [];
                                player.storage.shoulie_guai_num = 0;
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return (num += player.storage.shoulie_guai_num);
                                },
                            },
                            mark: true,
                            intro: {
                                content(storage) {
                                    if (!storage.length) {
                                        return '未记录任何牌';
                                    } else {
                                        var str = '已记录:' + get.translation(storage[0]);
                                        for (let i = 1; i < storage.length; i++) {
                                            str += '、' + get.translation(storage[i]);
                                        }
                                        str += '牌';
                                        return str;
                                    }
                                },
                            },
                            trigger: {
                                player: ['useCardToPlayered', 'phaseEnd'],
                            },
                            forced: true,
                            filter(event, player, name) {
                                if (name == 'phaseEnd') return player.storage.shoulie_guai_num != 0;
                                return !player.storage.shoulie_guai.includes(event.card.name) && event.targets.length == 1;
                            },
                            content() {
                                'step 0';
                                if (event.triggername == 'phaseEnd') {
                                    player.storage.shoulie_guai_num = 0;
                                    event.finish();
                                } else {
                                    player.storage.shoulie_guai.add(trigger.card.name);
                                    player.markSkill('shoulie_guai');
                                }
                                ('step 1');
                                player.judge(function (card) {
                                    if (card) return 1;
                                    return 0;
                                });
                                ('step 2');
                                if (result.judge == 1) {
                                    event.card1 = result.card;
                                }
                                ('step 3');
                                trigger.targets[0].judge(function (card) {
                                    if (card) return 1;
                                    return 0;
                                });
                                ('step 4');
                                if (result.judge == 1) {
                                    event.card2 = result.card;
                                }
                                ('step 5');
                                if (!event.card1 || !event.card2) event.finish();
                                else {
                                    game.log(event.card1, event.card2);
                                    var num = 1;
                                    if (event.card1.name != event.card2.name) {
                                        trigger.targets[0].storage.shoulie_guai_no = [];
                                        trigger.targets[0].storage.shoulie_guai_no.push(event.card1.suit);
                                        if (event.card1.suit != event.card2.suit) {
                                            trigger.targets[0].storage.shoulie_guai_no.push(event.card2.suit);
                                        }
                                        trigger.targets[0].addTempSkill('shoulie_guai_no', 'useCardEnd');
                                        num--;
                                    }
                                    if (event.card1.suit == event.card2.suit) {
                                        player.draw();
                                        num++;
                                    }
                                    if (get.type(event.card1) == get.type(event.card2)) {
                                        var list = [event.card1, event.card2];
                                        player.gain(list, 'gain2');
                                        num++;
                                    }
                                    if (num == 3) {
                                        player.storage.shoulie_guai_num++;
                                    }
                                }
                            },
                            subSkill: {
                                no: {
                                    mod: {
                                        cardRespondable(player, card) {
                                            if (player.storage.shoulie_guai_no?.includes(card.suit)) return false;
                                        },
                                    },
                                    onremove(player) {
                                        player.storage.shoulie_guai_no = [];
                                    },
                                },
                            },
                        },
                        时空杀: {
                            nobracket: true,
                            trigger: {
                                global: 'phaseBefore',
                            },
                            forced: true,
                            init(player) {
                                player.storage.时空杀 = 0;
                                player.markSkill('时空杀');
                            },
                            filter(event, player) {
                                return event.player != player;
                            },
                            content() {
                                'step 0';
                                var next;
                                next = player
                                    .chooseControl('开启时空杀', 'cancel2', function (event, player) {
                                        var source = _status.event.sourcex;
                                        var att = get.attitude(player, source);
                                        if (att > 0) {
                                            return 'cancel2';
                                        }
                                        return '开启时空杀';
                                    })
                                    .set('sourcex', trigger.player);
                                next.set('prompt', get.prompt('时空杀', trigger.player));
                                ('step 1');
                                if (result.control == '开启时空杀') {
                                    player.popup('时空杀');
                                    player.addTempSkill('时空杀_marka', 'phaseBefore');
                                    trigger.player.addTempSkill('时空杀_mark', 'phaseBefore');
                                } else event.finish();
                            },
                            ai: {
                                expose: 0.2,
                                threaten: 2,
                            },
                            subSkill: {
                                mark: {
                                    silent: true,
                                    mark: true,
                                    superCharlotte: true,
                                    charlotte: true,
                                    marktext: '锁定',
                                },
                                marka: {
                                    silent: true,
                                    mark: true,
                                    marktext: '抹杀',
                                    init(player) {
                                        setTimeout(function () {
                                            if (player.hasSkill('时空杀')) {
                                                player.storage.时空杀 += 1;
                                            }
                                            player.addSkill('时空杀_markb');
                                        }, 1000);
                                    },
                                    onremove(player) {
                                        if (player.hasSkill('时空杀')) {
                                            player.storage.时空杀 = 0;
                                        }
                                    },
                                    intro: {
                                        content: '你正在寻找敌人的命运',
                                    },
                                },
                                markb: {
                                    silent: true,
                                    init(player) {
                                        setTimeout(function () {
                                            if (player.hasSkill('时空杀_marka')) {
                                                if (player.storage.时空杀 > 86 && player.storage.时空杀 < 131) {
                                                    for (const i of game.players) {
                                                        if (i.hasSkill('时空杀_mark')) {
                                                            i.die();
                                                        }
                                                    }
                                                }
                                                if (player.storage.时空杀 > 131) {
                                                    for (const i of game.players) {
                                                        if (i.hasSkill('时空杀_mark')) {
                                                            const next = game.createEvent('diex', false);
                                                            next.source = player;
                                                            next.player = i;
                                                            next._triggered = null;
                                                            next.restMap = { type: null, count: null, audio: null };
                                                            next.excludeMark = [];
                                                            next.setContent('die');
                                                        }
                                                    }
                                                }
                                                player.storage.时空杀 += 2;
                                            }
                                            player.removeSkill('时空杀_markb');
                                        }, 1000);
                                    },
                                    onremove(player) {
                                        setTimeout(function () {
                                            if (player.hasSkill('时空杀_marka')) player.addSkill('时空杀_markb');
                                        }, 1000);
                                    },
                                },
                            },
                        },
                        超幸运: {
                            nobracket: true,
                            forced: true,
                            trigger: {
                                player: ['phaseBefore', 'judgeBefore', 'phaseEnd', 'dyingBefore', 'judgeEnd', 'dyingEnd', 'discardBefore', 'phaseDrawBefore'],
                            },
                            content() {
                                'step 0';
                                var source = ui.cardPile.childNodes;
                                var list = [];
                                for (let i = 0; i < source.length; i++) list.push(source[i]);
                                player.chooseButton(['请选择要获得的卡牌', list], true).ai = get.buttonValue;
                                ('step 1');
                                event.card = result.links[0];
                                player.gain(event.card, 'gain2');
                                game.playel('超幸运');
                            },
                        },
                        神明的祝福: {
                            nobracket: true,
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - 999999;
                                },
                            },
                            trigger: {
                                player: 'useCardAfter',
                            },
                            filter(event, player) {
                                if (event.parent.name == '神明的祝福') return false;
                                if (!event.targets || !event.card) return false;
                                if (event.card && event.card.name == 'wuxie') return false;
                                var type = get.type(event.card);
                                var card = game.createCard(event.card.name, event.card.suit, event.card.number, event.card.nature);
                                var targets = event._targets || event.targets;
                                for (let i = 0; i < targets.length; i++) {
                                    if (!targets[i].isIn()) return false;
                                    if (!player.canUse({ name: event.card.name }, targets[i], false, false)) {
                                        return false;
                                    }
                                }
                                if (type == 'trick' || type == 'basic') return true;
                            },
                            check(event, player) {
                                if (event.card.name == 'tiesuo') return false;
                                return true;
                            },
                            content() {
                                var card = game.createCard(trigger.card.name, trigger.card.suit, trigger.card.number, trigger.card.nature);
                                player.useCard(card, (trigger._targets || trigger.targets).slice(0));
                                player.useCard(card, (trigger._targets || trigger.targets).slice(0));
                                player.useCard(card, (trigger._targets || trigger.targets).slice(0));
                                game.playel('神明的祝福');
                            },
                            ai: {
                                threaten: 1.3,
                            },
                        },
                        桃花运: {
                            mod: {
                                ignoredHandcard(card, player) {
                                    if (card.name == 'shan') {
                                        return true;
                                    }
                                },
                            },
                            nobracket: true,
                            silent: true,
                            forced: true,
                            mark: true,
                            marktext: '闪',
                            init(player) {
                                player.storage.桃花运 = 0;
                                player.markSkill('桃花运');
                            },
                            trigger: {
                                global: ['loseEnd', 'gainEnd', 'changeHp'],
                            },
                            filter(event, player) {
                                return _status.currentPhase != event.player && event.player.hasSkill('桃花运_mark');
                            },
                            content() {
                                player.storage.桃花运 += 1;
                            },
                            intro: {
                                content: '你可以使用虚拟闪',
                            },
                            group: ['桃花运_shan', '桃花运_taoh'],
                            subSkill: {
                                mark: {
                                    mark: true,
                                    marktext: '桃花',
                                    intro: {
                                        content: '你懂的',
                                    },
                                },
                                shan: {
                                    enable: 'chooseToUse',
                                    viewAs: {
                                        name: 'shan',
                                    },
                                    mark: false,
                                    filterCard() {
                                        return false;
                                    },
                                    viewAsFilter(player) {
                                        if (player.storage.桃花运 < 1) return false;
                                        return true;
                                    },
                                    onuse(event, player) {
                                        player.storage.桃花运 -= 1;
                                    },
                                    selectCard: -1,
                                    prompt: '视为使用一张闪',
                                    ai: {
                                        order() {
                                            return 3.15;
                                        },
                                        skillTagFilter(player) {
                                            if (player.storage.桃花运 < 1) return false;
                                        },
                                        respondShan: true,
                                        basic: {
                                            useful: [7, 5.1, 2],
                                            value: [7, 5.1, 2],
                                        },
                                        result: {
                                            player: 1,
                                        },
                                    },
                                },
                                taoh: {
                                    trigger: {
                                        global: 'gameStart',
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget(get.prompt('桃花运'), function (card, player, target) {
                                                return player != target;
                                            })
                                            .set('ai', function (target) {
                                                return -get.attitude(player, target);
                                            });
                                        ('step 1');
                                        if (result.targets?.length) {
                                            result.targets[0].addSkill('桃花运_mark');
                                        }
                                    },
                                },
                            },
                        },
                        前兆感知: {
                            trigger: {
                                player: ['damageBegin2', 'loseHpBegin', 'loseMaxHpBegin'],
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                'step 0';
                                if (player.storage.桃花运 > 1) {
                                    next = player
                                        .chooseControl('前兆感知', 'cancel2', function (event, player) {
                                            if (player.storage.桃花运 < 1) {
                                                return 'cancel2';
                                            }
                                            return '前兆感知';
                                        })
                                        .set('sourcex', trigger.source);
                                    next.set('prompt', get.prompt('前兆感知', trigger.source));
                                } else event.goto(2);
                                ('step 1');
                                if (result.control == '前兆感知') {
                                    trigger.untrigger();
                                    trigger.finish();
                                    player.storage.桃花运 -= 1;
                                    player.popup('前兆感知');
                                    event.finish();
                                } else event.goto(2);
                                ('step 2');
                                player
                                    .chooseToDiscard('是否弃置一张闪,令此伤害无效', 'he', function (card) {
                                        return card.name == 'shan';
                                    })
                                    .set('ai', function (card) {
                                        return 15 - get.value(card);
                                    });
                                ('step 3');
                                if (result.bool) {
                                    trigger.untrigger();
                                    trigger.finish();
                                    game.playel('前兆感知');
                                    player.popup('前兆感知');
                                }
                            },
                            ai: {
                                expose: 0.2,
                                threaten: 2,
                            },
                        },
                        投影魔术: {
                            nobracket: true,
                            audio: 'ext:同人动漫am/audio:2',
                            enable: 'phaseUse',
                            usable: 99,
                            position: 'he',
                            filterCard(card, player) {
                                return get.subtype(card) != 'equip1';
                            },
                            selectCard: [1, 10],
                            prompt: '请选择弃置1至10张牌',
                            check(card) {
                                return 4 - get.value(card);
                            },
                            content() {
                                'step 0';
                                var x = cards.length;
                                var list = ['qibaodao', 'qilin', 'qinggang', 'qinglong', 'qixingbaodao', 'sanjian', 'yajiaoqiang', 'yinyueqiang', 'zhangba', 'zhuge', 'zhuque', 'hanbing', 'pyzhuren_club', 'pyzhuren_diamond', 'pyzhuren_heart', 'pyzhuren_shandian', 'pyzhuren_spade', 'wufengjian', 'xuanyuanjian', 'yitianjian'];
                                event.card = list.randomGets(x);
                                ('step 1');
                                if (event.card.length) {
                                    game.playel('投影魔术');
                                    player.chooseButton(['请选择一张装备牌获得', [event.card, 'vcard']], true).set('ai', function (button) {
                                        return button.link[2] == 'pyzhuren_spade' ? 2 : 1;
                                    });
                                }
                                ('step 2');
                                if (result.links?.length) {
                                    var card = game.createCard2(result.links[0][2]);
                                    lib.inpile.add(result.links[0][2]);
                                    player.storage.twsidao = card;
                                    player.gain(card, 'gain2');
                                }
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player: 1,
                                },
                                threaten: 1.5,
                            },
                        },
                        无限剑制: {
                            nobracket: true,
                            trigger: {
                                player: 'equipBegin',
                            },
                            filter(event, player) {
                                var types = get.subtype(event.card);
                                return types == 'equip1' && player.countCards('e', { subtype: types });
                            },
                            popup: false,
                            forced: true,
                            lastDo: true,
                            async content(event, trigger, player) {
                                game.playel('无限剑制1');
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
                                    const info = lib.card[card.name];
                                    if (info && info.skills) {
                                        for (const i of info.skills) {
                                            player.addSkillTrigger(i);
                                        }
                                    }
                                }
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + player.countCards('e', (c) => get.subtype(c) == 'equip1');
                                },
                            },
                            group: ['无限剑制_mark', '无限剑制_marka', '无限剑制_markb'],
                            subSkill: {
                                mark: {
                                    trigger: {
                                        player: 'phaseZhunbeiBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countDisabled() > 0;
                                    },
                                    content() {
                                        var list = ['equip1', 'equip2', 'equip3', 'equip4', 'equip5'];
                                        for (let i = 0; i < list.length; i++) {
                                            if (!player.isDisabled(list[i])) list.splice(i--, 1);
                                            else player.enableEquip(list[i]);
                                        }
                                    },
                                },
                                marka: {
                                    trigger: {
                                        player: 'equipBefore',
                                    },
                                    filter(event, player) {
                                        var types = get.subtype(event.card);
                                        return types == 'equip1' && player.countCards('e', { subtype: types }) && player.countCards('e', (c) => get.subtype(c) == 'equip1') >= 12;
                                    },
                                    popup: false,
                                    forced: true,
                                    lastDo: true,
                                    content() {
                                        player.addSkill('直死剑击');
                                    },
                                },
                                markb: {
                                    trigger: {
                                        player: 'phaseDrawBegin',
                                    },
                                    forced: true,
                                    content() {
                                        trigger.num += player.countCards('e', (c) => get.subtype(c) == 'equip1');
                                    }, //QQQ
                                },
                            },
                        },
                        幻想崩坏: {
                            nobracket: true,
                            audio: 'ext:同人动漫am/audio:2',
                            enable: ['chooseToRespond', 'chooseToUse'],
                            filterCard: true,
                            position: 'he',
                            viewAs: {
                                name: 'sha',
                            },
                            viewAsFilter(player) {
                                if (get.zhu(player, 'shouyue')) {
                                    if (!player.countCards('he')) return false;
                                }
                            },
                            prompt: '将一张装备牌当杀使用或打出',
                            check(card) {
                                return 16 - get.value(card);
                            },
                            ai: {
                                skillTagFilter(player) {
                                    if (get.zhu(player, 'shouyue')) {
                                        if (!player.countCards('he')) return false;
                                    }
                                },
                                respondSha: true,
                                basic: {
                                    useful: [5, 1],
                                    value: [5, 1],
                                },
                                order() {
                                    if (_status.event.player.hasSkillTag('presha', true, null, true)) return 15;
                                    return 10;
                                },
                                result: {
                                    player: 2,
                                    target(player, target) {
                                        if (player.hasSkill('jiu') && !target.getEquip('baiyin')) {
                                            if (get.attitude(player, target) > 0) {
                                                return -6;
                                            } else {
                                                return -4;
                                            }
                                        }
                                        return -2.5;
                                    },
                                },//QQQ
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
                            mod: {
                                maxHandcard(player, num) {
                                    return num + player.storage.幻想崩坏_mark;
                                },
                            },
                            group: ['幻想崩坏_mark', '幻想崩坏_marka'],
                            subSkill: {
                                mark: {
                                    trigger: {
                                        player: 'useCard1',
                                    },
                                    forced: true,
                                    popup: false,
                                    silent: true,
                                    firstDo: true,
                                    silent: true,
                                    mark: true,
                                    superCharlotte: true,
                                    marktext: '幻想',
                                    init(player) {
                                        player.storage.幻想崩坏_mark = 0;
                                        player.markSkill('幻想崩坏_mark');
                                    },
                                    intro: {
                                        content: '你的手牌上限增加数量',
                                    },
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha' && event.cards && event.cards.length == 1 && get.type(event.cards[0]) == 'equip';
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                                marka: {
                                    trigger: {
                                        player: 'useCard1',
                                    },
                                    forced: true,
                                    popup: false,
                                    silent: true,
                                    firstDo: true,
                                    silent: true,
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha' && event.cards && event.cards.length == 1 && get.type(event.cards[0]) != 'equip';
                                    },
                                    content() {
                                        player.storage.幻想崩坏_mark += 1;
                                        player.markSkill('幻想崩坏_mark');
                                    },
                                },
                            },
                        },
                        理想继承: {
                            trigger: {
                                global: 'dieBegin',
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('理想继承'), [1], function (card, player, target) {
                                        return player != target;
                                    })
                                    .set('ai', function (target) {
                                        return 1;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    for (let i = 0; i < result.targets.length; i++) {
                                        var target = result.targets[i];
                                        var skills = lib.character[target.name][3];
                                        var list = [];
                                        for (var l = 0; l < skills.length; l++) {
                                            var info = lib.skill[skills[l]];
                                            list.push(skills[l]);
                                        }
                                    }
                                    player
                                        .chooseControl(list)
                                        .set('prompt', '请选择一个要获得的技能')
                                        .set('ai', function () {
                                            return 0;
                                        });
                                }
                                ('step 2');
                                if (result.control) game.me.addSkill(result.control);
                            },
                            ai: {
                                expose: 0.2,
                                threaten: 2,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        直死剑击: {
                            forced: true,
                            nobracket: true,
                            trigger: {
                                source: 'damageBegin2',
                            },
                            forced: true,
                            nobracket: true,
                            filter(event, player) {
                                return event.num > 0 && event.source != player && _status.currentPhase != player;
                            },
                            content() {
                                trigger.source.skip('phaseUse', true);
                            },
                            group: ['直死剑击_mark', '直死剑击_marka', '直死剑击_markb'],
                            subSkill: {
                                mark: {
                                    trigger: {
                                        player: 'damageBegin2',
                                    },
                                    forced: true,
                                    nobracket: true,
                                    filter(event, player) {
                                        return event.num > 0 && event.player != player && _status.currentPhase != player;
                                    },
                                    content() {
                                        trigger.player.skip('phaseUse', true);
                                    },
                                },
                                marka: {
                                    trigger: {
                                        global: ['useCard', 'respond'],
                                    },
                                    forced: true,
                                    filter(event, player, card) {
                                        return event.player != player && player.countCards('h') > 0;
                                    },
                                    content() {
                                        'step 0';
                                        var next = player.chooseToDiscard('he', '是否打出一张杀将此牌斩断!', function (card, player) {
                                            return player.countCards('he') > 0;
                                        });
                                        next.set('ai', function (card) {
                                            var player = _status.event.player;
                                            if (player.countCards('he') >= player.hp || _status.event.getTrigger().num < 1) {
                                                return 12 - get.value(card);
                                            }
                                            return 3 - get.value(card);
                                        });
                                        ('step 1');
                                        if (result.bool) {
                                            trigger.cancel();
                                            var card = trigger.cards;
                                            game.cardsGotoSpecial(card);
                                        }
                                    },
                                },
                                markb: {
                                    trigger: {
                                        player: 'dieBefore',
                                    },
                                    forced: true,
                                    animationStr: '英灵不死',
                                    content() {
                                        game.playel('英灵不死');
                                        trigger.untrigger();
                                        trigger.finish();
                                        player.hp = player.maxHp;
                                        if (trigger.source && trigger.source != player) {
                                            trigger.source.skip('phaseUse', true);
                                        }
                                    },
                                },
                            },
                        },
                        qiangan: {
                            charlotte: true,
                            forced: true,
                            trigger: {
                                player: 'damageBefore',
                            },
                            content() {
                                'step 0';
                                if (Math.random() < 0.5) trigger.cancel();
                                ('step 1');
                                if (Math.random() < 0.5) player.draw();
                                ('step 2');
                                if (Math.random() < 0.5) player.recover();
                            },
                        },
                        shenjing: {
                            charlotte: true,
                            forced: true,
                            trigger: {
                                player: 'loseMaxHpBefore',
                            },
                            filter(event, player) {
                                return player.countCards('he');
                            },
                            content() {
                                'step 0';
                                player.chooseToDiscard('是否弃置一张牌将你失去的体力上限转移给一名其他角色', function (card, player, target) {
                                    return player != target;
                                });
                                ('step 1');
                                player.chooseTarget('请选择一名角色令其失去体力上限', true, function (card, player, target) {
                                    return target != player;
                                });
                                ('step 2');
                                result.targets[0].loseMaxHp(trigger.num);
                                trigger.cancel();
                            },
                        },
                        huanyuan: {
                            charlotte: true,
                            trigger: {
                                player: 'useCardToPlayer',
                            },
                            filter(event, player) {
                                if (_status.currentPhase != player || event.target == player) return false;
                                return (
                                    event.target.getSkills(null, false, false).filter(function (i) {
                                        return lib.skill.huanyuan_feng.skillBlocker(i, player);
                                    }).length && !event.target.hasSkill('huanyuan_feng')
                                );
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseBool('是否发动还原令' + get.translation(trigger.target) + '的非锁定技失效');
                                ('step 1');
                                if (result.bool) trigger.target.addTempSkill('huanyuan_feng');
                            },
                            subSkill: {
                                feng: {
                                    init(player, skill) {
                                        player.addSkillBlocker(skill);
                                    },
                                    onremove(player, skill) {
                                        player.removeSkillBlocker(skill);
                                    },
                                    charlotte: true,
                                    skillBlocker(skill, player) {
                                        return !lib.skill[skill].charlotte && !get.is.locked(skill, player);
                                    },
                                    mark: true,
                                    intro: {
                                        content(storage, player, skill) {
                                            var list = player.getSkills(null, false, false).filter(function (i) {
                                                return lib.skill.huanyuan_feng.skillBlocker(i, player);
                                            });
                                            if (list.length) return '失效技能:' + get.translation(list);
                                            return '无失效技能';
                                        },
                                    },
                                },
                            },
                        },
                        rebusi: {
                            charlotte: true,
                            forced: true,
                            trigger: {
                                player: 'damageBegin',
                            },
                            init(player) {
                                player.storage.rebusi = 0;
                            },
                            mark: true,
                            marktext: '死',
                            intro: {
                                content: '不死效果点数:$',
                            },
                            content() {
                                player.storage.rebusi++;
                            },
                            group: ['rebusi_damage', 'rebusi_turn', 'rebusi_effect', 'rebusi_die'],
                            subSkill: {
                                die: {
                                    forced: true,
                                    trigger: {
                                        player: 'dieBefore',
                                    },
                                    mark: true,
                                    limited: true,
                                    animationStr: '不死',
                                    init(player) {
                                        player.storage.rebusi_die = false;
                                    },
                                    filter(event, player) {
                                        if (player.storage.rebusi_die) return true;
                                        return player.storage.rebusi > 15;
                                    },
                                    content() {
                                        player.awakenSkill('rebusi_die');
                                        player.storage.rebusi_die = true;
                                        trigger.cancel();
                                        player.hp = player.maxHp;
                                    },
                                    intro: {
                                        content: 'limited',
                                    },
                                },
                                damage: {
                                    forced: true,
                                    trigger: {
                                        player: 'damageBefore',
                                    },
                                    filter(event, player) {
                                        return player.storage.rebusi > 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseBool('是否消耗一点不死效果免疫该伤害然后摸两张牌');
                                        ('step 1');
                                        if (result.bool) {
                                            player.storage.rebusi--;
                                            trigger.cancel();
                                            player.draw(2);
                                        }
                                    },
                                },
                                turn: {
                                    forced: true,
                                    trigger: {
                                        player: 'turnOverBefore',
                                    },
                                    filter(event, player) {
                                        return player.storage.rebusi > 0;
                                    },
                                    content() {
                                        trigger.cancel();
                                    },
                                },
                                effect: {
                                    mod: {
                                        maxHandcard(player, numx) {
                                            return player.maxHp + player.storage.rebusi;
                                        },
                                        cardUsable(card, player, num) {
                                            if (card.name == 'sha') return num + player.storage.rebusi;
                                        },
                                    },
                                    trigger: {
                                        player: 'useCard2',
                                    },
                                    filter(event, player) {
                                        if (player.storage.rebusi == 0) return false;
                                        return game.hasPlayer(function (current) {
                                            return !event.targets.includes(current) && player.canUse(event.card, current);
                                        });
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget('为' + get.translation(trigger.card) + '增加一个目标', function (card, player, target) {
                                                return !_status.event.sourcex.includes(target) && player.canUse(_status.event.card, target);
                                            })
                                            .set('sourcex', trigger.targets)
                                            .set('card', trigger.card)
                                            .setHiddenSkill(event.name);
                                        ('step 1');
                                        if (result.bool) {
                                            for (let i = 0; i < result.targets.length; i++) {
                                                trigger.targets.push(result.targets[i]);
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        youqing: {
                            audio: 'ext:同人动漫am/audio:1',
                            charlotte: true,
                            forced: true,
                            trigger: {
                                source: 'damageBefore',
                            },
                            content() {
                                player.addMark('youqing');
                            },
                            marktext: '净',
                            intro: {
                                content: '净化',
                            },
                            group: 'youqing_enable',
                            subSkill: {
                                enable: {
                                    enable: 'phaseUse',
                                    usable: 1,
                                    prompt: '是否消耗一个【净】使你下一次杀无视距离且不可被闪避',
                                    filter(event, player) {
                                        return player.storage.youqing > 0;
                                    },
                                    content() {
                                        player.storage.youqing--;
                                        player.addSkill('youqing_sha');
                                    },
                                },
                                sha: {
                                    mod: {
                                        cardUsable(card) {
                                            if (card.name == 'sha') return Infinity;
                                        },
                                    },
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha' && event.targets;
                                    },
                                    content() {
                                        trigger.directHit.addArray(game.filterPlayer());
                                        if (trigger.targets[0].maxHp > player.hp) trigger.baseDamage++;
                                        player.removeSkill('youqing_sha');
                                    },
                                },
                            },
                        },
                        eryuan: {
                            charlotte: true,
                            trigger: {
                                player: ['loseAfter', 'changeHpAfter'],
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h') < player.hp;
                            },
                            content() {
                                var num = player.hp - player.countCards('h');
                                player.draw(num);
                            },
                            group: 'eryuan_sha',
                            subSkill: {
                                sha: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.hp != player.maxHp && event.card && event.card.name == 'sha';
                                    },
                                    content() {
                                        player.draw();
                                        player.storage.rebusi++;
                                    },
                                },
                            },
                        },
                        xiongyun: {
                            charlotte: true,
                            enable: 'phaseUse',
                            selectCard: 1,
                            filterCard(card, player) {
                                return get.color(card) == 'red';
                            },
                            selectTarget: 1,
                            filterTarget(card, player, target) {
                                return target != player && !target.hasSkill('xiongyun_feng');
                            },
                            filter(event, player) {
                                return !player.hasSkill('xiongyun_shixiao');
                            },
                            content() {
                                player.addTempSkill('xiongyun_shixiao');
                                targets[0].addTempSkill('xiongyun_feng');
                                targets[0].addSkill('xiongyun_skip');
                            },
                            subSkill: {
                                feng: {
                                    mark: true,
                                    marktext: '凶',
                                    intro: {
                                        content: '本回合内你不能使用/响应牌,且跳过你的下个弃牌阶段',
                                    },
                                    mod: {
                                        playerEnabled(card, player, target) {
                                            return false;
                                        },
                                    },
                                    forced: true,
                                    popup: false,
                                    trigger: {
                                        global: 'useCard',
                                    },
                                    content() {
                                        trigger.directHit.add(player);
                                    },
                                },
                                skip: {
                                    trigger: {
                                        player: 'phaseDiscardBegin',
                                    },
                                    forced: true,
                                    popup: false,
                                    content() {
                                        trigger.cancel();
                                    },
                                },
                                shixiao: {},
                            },
                        },
                        reqiangyun: {
                            charlotte: true,
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                return get.color(event.card) && player.isPhaseUsing();
                            },
                            forced: true,
                            mark: true,
                            marktext: '强',
                            intro: {
                                content: 'mark',
                            },
                            content() {
                                player.addMark('reqiangyun');
                            },
                            group: 'reqiangyun_add',
                            subSkill: {
                                add: {
                                    trigger: {
                                        source: 'damageBefore',
                                    },
                                    filter(event, player) {
                                        return player.storage.reqiangyun > 0;
                                    },
                                    prompt(event, player) {
                                        return '是否令此伤害+' + get.translation(player.storage.reqiangyun);
                                    },
                                    content() {
                                        trigger.num += player.storage.reqiangyun;
                                    },
                                },
                            },
                        },
                        反射: {
                            trigger: {
                                target: 'useCardToTarget',
                            },
                            filter(event, player) {
                                return player != event.player && player.countCards('he') > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseControl('转移', '取消').set('prompt', '反射:选择转移/取消' + get.translation(trigger.card) + '的目标');
                                ('step 1');
                                if (result.control == '取消') {
                                    player.chooseToDiscard('he', true);
                                    trigger.targets.remove(player);
                                    event.finish();
                                } else {
                                    player.chooseCardTarget({
                                        forced: true,
                                        prompt: '反射:请弃置一张牌转移' + get.translation(trigger.card) + '的目标',
                                        selectCard: 1,
                                        position: 'he',
                                        filterCard: true,
                                        selectTarget: 1,
                                        filterTarget(card, player, target) {
                                            return !trigger.targets.includes(target) && lib.filter.targetEnabled2(trigger.card, trigger.player, target);
                                        },
                                    });
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.discard(result.cards);
                                    trigger.targets.remove(player);
                                    for (let i = 0; i < result.targets.length; i++) {
                                        trigger.targets.push(result.targets[i]);
                                    }
                                }
                            },
                        },
                        heiyi: {
                            mod: {
                                cardUsable(card) {
                                    if (card.name == 'sha') return Infinity;
                                },
                                selectTarget(card, player, range) {
                                    if (card.name == 'sha') range[1] = 3;
                                },
                            },
                            init(player) {
                                player.storage.heiyi_unequip = [];
                            },
                            trigger: {
                                player: 'useCardToTarget',
                            },
                            forced: true,
                            content() {
                                player.draw();
                                if (trigger.card.name == 'sha') player.storage.heiyi_unequip.add(trigger.card);
                            },
                            ai: {
                                unequip: true,
                                unequip: true,
                                skillTagFilter(player, tag, arg) {
                                    if (tag == 'unequip') {
                                        if (arg && player.storage.heiyi_unequip.includes(arg.card)) return true;
                                        return false;
                                    }
                                },
                            },
                            group: 'heiyi_damage',
                            subSkill: {
                                damage: {
                                    trigger: {
                                        player: 'damageBefore',
                                    },
                                    forced: true,
                                    content() {
                                        trigger.num -= 2 ** (player.maxHp - player.hp);
                                        if (trigger.num < 0) trigger.num = 0;
                                    },
                                },
                            },
                        },
                        rebaiyi: {
                            mod: {
                                targetEnabled(card, player, target, now) {
                                    if (get.type(card) == 'delay') return false;
                                },
                            },
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
                                player.draw();
                            },
                            group: ['rebaiyi_damage', 'rebaiyi_turn', 'rebaiyi_addshou'],
                            subSkill: {
                                damage: {
                                    trigger: {
                                        player: 'damageBefore',
                                    },
                                    forced: true,
                                    _priority: 99,
                                    content() {
                                        if (player.hp == 1) {
                                            trigger.num = 0;
                                            trigger.cancel();
                                            player.loseHp();
                                        }
                                        trigger.num--;
                                    },
                                },
                                turn: {
                                    trigger: {
                                        player: 'turnOverBefore',
                                    },
                                    forced: true,
                                    content() {
                                        trigger.cancel();
                                    },
                                },
                                shou: {
                                    mark: true,
                                    marktext: '守',
                                    intro: {
                                        content: '不受属性伤害,受到伤害-2',
                                    },
                                    trigger: {
                                        player: 'damageBefore',
                                    },
                                    _priority: 80,
                                    forced: true,
                                    content() {
                                        if (trigger.nature) {
                                            trigger.cancel();
                                        } else {
                                            trigger.num -= 2;
                                            if (trigger.num < 0) trigger.num = 0;
                                        }
                                    },
                                },
                                addshou: {
                                    limited: true,
                                    animationStr: '白翼',
                                    init(player) {
                                        player.storage.rebaiyi_addshou = false;
                                    },
                                    intro: {
                                        content: 'limited',
                                    },
                                    enable: 'phaseUse',
                                    filter(event, player) {
                                        if (player.storage.rebaiyi_addshou) return false;
                                        return player.countCards('he');
                                    },
                                    selectCard: 1,
                                    filterCard: true,
                                    position: 'he',
                                    selectTarget: 1,
                                    filterTarget: true,
                                    prompt: '选择一名角色令其获得<守>',
                                    content() {
                                        player.storage.rebaiyi_addshou = true;
                                        player.awakenSkill('rebaiyi_addshou');
                                        targets[0].addSkill('rebaiyi_shou');
                                    },
                                    mark: true,
                                },
                            },
                        },
                        tianyuni: {
                            charlotte: true,
                            enable: 'phaseUse',
                            selectCard: 1,
                            filterCard(card, player) {
                                return get.color(card) == 'black';
                            },
                            position: 'he',
                            selectTarget: 1,
                            filterTarget(card, player, target) {
                                return target.countCards('he') > 0;
                            },
                            filter(event, player) {
                                return player.countCards('h', function (card) {
                                    return get.color(card) == 'black';
                                });
                            },
                            content() {
                                'step 0';
                                targets[0].chooseToDiscard('he', true);
                                targets[0].addMark('tianyuni_count');
                                targets[0].markSkill('tianyuni_count');
                                ('step 1');
                                if (targets[0].storage.tianyuni_count % 3 == 0 && player.hasSkill('xiongyun_shixiao')) player.removeSkill('xiongyun_shixiao');
                            },
                            global: 'tianyuni_count',
                            subSkill: {
                                count: {
                                    marktext: '天',
                                    intro: {
                                        content: '天运i:你受此法弃置的牌数为:$',
                                    },
                                },
                            },
                        },
                        shenyuan: {
                            trigger: {
                                global: 'dying',
                            },
                            filter(event, player) {
                                return event.source && event.source == player;
                            },
                            forced: true,
                            content() {
                                trigger.player.clearSkills();
                                trigger.player.die();
                            },
                            group: ['shenyuan_damage', 'shenyuan_phase'],
                            subSkill: {
                                damage: {
                                    trigger: {
                                        source: 'damageBefore',
                                    },
                                    filter(event, player) {
                                        return event.num >= 3 && event.player.hp > event.num;
                                    },
                                    content() {
                                        trigger.player.loseHp(trigger.player.hp - trigger.num);
                                    },
                                },
                                phase: {
                                    trigger: {
                                        global: ['phaseZhunbeiBegin', 'phaseJudgeBegin', 'phaseDrawBegin', 'phaseUseBegin', 'phaseDiscardBegin'],
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        if (player.hp == player.maxHp) {
                                            player.draw();
                                            event.finish();
                                        }
                                        ('step 1');
                                        var list = ['摸牌', '回血'];
                                        player.chooseControl(list);
                                        ('step 2');
                                        if (result.control == '摸牌') player.draw();
                                        else player.recover();
                                    },
                                },
                            },
                        },
                        lihuan: {
                            audio: 'ext:同人动漫am/audio:1',
                            charlotte: true,
                            group: ['lihuan_sha', 'lihuan_damage'],
                            subSkill: {
                                sha: {
                                    mod: {
                                        targetInRange(card, player, target, now) {
                                            if (card.name == 'sha') return true;
                                        },
                                    },
                                    init(player) {
                                        player.storage.lihuan_sha_unequip = [];
                                    },
                                    trigger: {
                                        player: 'useCardToTarget',
                                    },
                                    forced: true,
                                    content() {
                                        if (trigger.card.name == 'sha') player.storage.lihuan_sha_unequip.add(trigger.card);
                                    },
                                    ai: {
                                        unequip: true,
                                        unequip: true,
                                        skillTagFilter(player, tag, arg) {
                                            if (tag == 'unequip') {
                                                if (arg && player.storage.lihuan_sha_unequip.includes(arg.card)) return true;
                                                return false;
                                            }
                                        },
                                    },
                                },
                                damage: {
                                    forced: true,
                                    trigger: {
                                        source: 'damageBefore',
                                    },
                                    filter(event, player) {
                                        return event.player != player;
                                    },
                                    content() {
                                        'step 0';
                                        event.num = trigger.player.hp;
                                        if (event.num < 4) {
                                            if (event.num == 1) trigger.player.die();
                                            else trigger.player.loseHp(event.num);
                                        } else {
                                            if (player.countCards('he') > 0) event.goto(2);
                                            else event.finish();
                                        }
                                        ('step 1');
                                        if (trigger.player.isAlive()) trigger.player.recover(event.num);
                                        event.finish();
                                        ('step 2');
                                        player.chooseToDiscard([1, Infinity], 'he', '是否弃置任意数量的牌使' + get.translation(trigger.player) + '流失等量的体力');
                                        ('step 3');
                                        if (result.bool) {
                                            trigger.player.loseHp(result.cards.length);
                                        }
                                    },
                                },
                            },
                        },
                        阻隔性: {
                            trigger: {
                                player: ['damageBegin2', 'loseHpBegin', 'loseMaxHpBegin'],
                            },
                            nobracket: true,
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            forced: true,
                            popup: false,
                            init(player) {
                                if (_status.埼玉?.isIn()) return;
                                _status.埼玉 = player;
                            },
                            filter(event, player) {
                                return player == _status.埼玉;
                            },
                            content() {
                                game.playel('这就完了吗？继续打');
                                trigger.untrigger();
                                trigger.finish();
                            },
                        },
                        超市打折: {
                            nobracket: true,
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            forced: true,
                            popup: false,
                            trigger: {
                                global: ['phaseBefore', 'phaseEnd'],
                            },
                            filter(event, player) {
                                return event.player != player;
                            },
                            content() {
                                player.phaseDraw();
                                player.phaseUse();
                            },
                        },
                        普通拳: {
                            nobracket: true,
                            trigger: {
                                source: 'damageBegin',
                            },
                            nobracket: true,
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                return event.player != player && player == _status.埼玉;
                            },
                            content() {
                                trigger.num += trigger.player.maxHp;
                                if (!player.hasSkill('普通拳_damage')) player.addSkill('普通拳_damage');
                            },
                            subSkill: {
                                damage: {
                                    trigger: {
                                        player: 'useCardToPlayered',
                                    },
                                    forced: true,
                                    mark: true,
                                    marktext: '必中',
                                    intro: {
                                        content: 'mark',
                                    },
                                    filter(event, player) {
                                        return event.target != player && get.tag(event.card, 'damage');
                                    },
                                    logTarget: 'target',
                                    content() {
                                        trigger.directHit.add(trigger.target);
                                        player.removeSkill('普通拳_damage');
                                    },
                                },
                            },
                        },
                        破格: {
                            nobracket: true,
                            trigger: {
                                global: ['discardEnd', 'phaseBegin'],
                            },
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            forced: true,
                            popup: false,
                            check(event, player) {
                                return true;
                            },
                            filter(event, player) {
                                return player == _status.埼玉;
                            },
                            logTarget: 'player',
                            content() {
                                for (const name in player.storage) {
                                    if (typeof player.storage[name] == 'number') {
                                        var info = lib.skill[name];
                                        if (!info || !info.marktext) {
                                            continue;
                                        }
                                        game.log(name, player.storage[name], info.marktext);
                                        player.storage[name] = 0;
                                        player.unmarkSkill(name);
                                    }
                                }
                            },
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - 999999;
                                },
                            },
                            group: ['破格_damage'],
                            subSkill: {
                                damage: {
                                    trigger: {
                                        player: 'useCardToPlayered',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.target != player && get.tag(event.card, 'damage');
                                    },
                                    logTarget: 'target',
                                    content() {
                                        var e2 = trigger.target.getEquips(2);
                                        if (e2) {
                                            trigger.target.discard(e2);
                                            trigger.targets.remove(trigger.target);
                                        }
                                    },
                                },
                            },
                        },
                        // 出牌阶段:对敌方所有角色造成一点伤害(伤害固定为1,无次数限制,该技能绑定埼玉,不可被失去,封印,消失)
                        认真反复横跳: {
                            nobracket: true,
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            forced: true,
                            popup: false,
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player == _status.埼玉;
                            },
                            async content(event, trigger, player) {
                                for (const current of player.getEnemies()) {
                                    player.line(current);
                                    await current.damage().set('_triggered', null);
                                }
                            },
                        },
                        认真精准拳: {
                            nobracket: true,
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            forced: true,
                            popup: false,
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player == _status.埼玉;
                            },
                            async content(event, trigger, player) {
                                const { targets } = await player
                                    .chooseTarget(get.prompt('认真精准拳'), function (card, player, target) {
                                        return player != target;
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(player, target);
                                    }).forResult();
                                if (targets?.length) {
                                    await game.mp432('认真精准拳');
                                    game.playel('认真一拳');
                                    targets[0].hp = 0;
                                    targets[0].update();
                                }
                            },
                        },
                        兴趣使然: {
                            nobracket: true,
                            trigger: {
                                player: 'dieBegin',
                            },
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            forced: true,
                            popup: false,
                            forceDie: true,
                            filter(event, player) {
                                return player == _status.埼玉;
                            },
                            content() {
                                trigger.untrigger();
                                trigger.finish();
                                player.hp = player.maxHp;
                                player.update();
                                game.playel('兴趣使然1');
                            },
                            subSkill: {
                                markp: {
                                    superCharlotte: true,
                                    charlotte: true,
                                    fixed: true,
                                    forced: true,
                                    popup: false,
                                    forceDie: true,
                                    init(player) {
                                        setTimeout(function () {
                                            if (player.hp <= 0) {
                                                player.revive();
                                                player.hp = player.maxHp;
                                                player.update();
                                            }
                                            player.removeSkill('兴趣使然_markp');
                                        }, 100);
                                    },
                                    onremove(player) {
                                        setTimeout(function () {
                                            if (player.hasSkill('兴趣使然')) player.addSkill('兴趣使然_markp');
                                        }, 100);
                                    },
                                },
                            },
                        },
                        认真殴打: {
                            nobracket: true,
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            forced: true,
                            popup: false,
                            audio: 'ext:同人动漫am/audio:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player == _status.埼玉;
                            },
                            async content(event, trigger, player) {
                                const { targets } = await player
                                    .chooseTarget(get.prompt('认真殴打'), function (card, player, target) {
                                        return player != target;
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(player, target);
                                    }).forResult();
                                if (targets?.length) {
                                    await game.mp432('认真一拳');
                                    game.playel('认真一拳');
                                    targets[0].clearSkills();
                                    const next = game.createEvent('diex', false);
                                    next.source = player;
                                    next.player = targets[0];
                                    next._triggered = null;
                                    next.restMap = { type: null, count: null, audio: null };
                                    next.excludeMark = [];
                                    next.setContent('die');
                                }
                            },
                            group: ['认真殴打_num1'],
                            subSkill: {
                                num1: {
                                    audio: 'ext:同人动漫am/audio:2',
                                    trigger: {
                                        target: 'useCardToTargeted',
                                    },
                                    filter(event, player) {
                                        return (_status.currentPhase != player && get.itemtype(event.cards) != 'cards') || get.position(event.cards[0], true) != 'o';
                                    },
                                    logTarget: 'player',
                                    content() {
                                        const evt = _status.event.getParent('phase', true);
                                        if (evt) {
                                            evt.finish();
                                        }
                                    },
                                },
                            },
                        },
                        特异点: {
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + 1;
                                },
                                maxHandcard(player, num) {
                                    return num + 1;
                                },
                            },
                            nobracket: true,
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            forced: true,
                            popup: false,
                            trigger: {
                                global: ['phaseBefore', 'judgeBefore', 'phaseEnd', 'dyingBefore', 'judgeEnd', 'dyingEnd', 'discardBefore', 'phaseDrawBefore'],
                            },
                            filter(event, player) {
                                return player == _status.埼玉;
                            },
                            content() {
                                player.enableEquip('equip1');
                                player.enableEquip('equip2');
                                player.enableEquip('equip3');
                                player.enableEquip('equip4');
                                player.enableEquip('equip5');
                                player.enableJudge();
                            },
                            group: '特异点_num1',
                            subSkill: {
                                num1: {
                                    trigger: {
                                        player: 'phaseDrawBefore',
                                    },
                                    forced: true,
                                    nobracket: true,
                                    _priority: 99,
                                    content() {
                                        trigger.num++;
                                    },
                                },
                            },
                        },
                        鏖杀公: {
                            nobracket: true,
                            enable: 'phaseUse',
                            complexCard: true,
                            init(player) {
                                player.storage.鏖杀公_mark = 0;
                                player.markSkill('鏖杀公_mark');
                            },
                            filterCard(card, player) {
                                return card.name == 'sha';
                            },
                            selectCard: [1, 999],
                            check(card) {
                                return 15 - get.value(card);
                            },
                            line: 'fire',
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            selectTarget: 1,
                            multitarget: true,
                            multiline: true,
                            content() {
                                var n = cards.length;
                                player.storage.鏖杀公_mark = n;
                                player.markSkill('鏖杀公_mark');
                                player.useCard({ name: 'sha' }, targets[0], false);
                            },
                            ai: {
                                expose: 0.2,
                                threaten: 1.5,
                                order: 3,
                                result: {
                                    target(player, target) {
                                        if (player.countCards('he') >= player.hp - 1) return -3;
                                    },
                                },
                            },
                            group: '鏖杀公_damage',
                            subSkill: {
                                damage: {
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    forced: true,
                                    _priority: 99,
                                    filter(event, player) {
                                        return player.storage.鏖杀公_mark > 0;
                                    },
                                    content() {
                                        'step 0';
                                        var n = player.storage.鏖杀公_mark;
                                        trigger.num = 0;
                                        trigger.player.damage(n + 1)._triggered = null;
                                        ('step 1');
                                        player.storage.鏖杀公_mark = 0;
                                        player.markSkill('鏖杀公_mark');
                                    },
                                },
                            },
                        },
                        嗫告篇㠸: {
                            nobracket: true,
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                return event.target != player;
                            },
                            logTarget: 'target',
                            content() {
                                'step 0';
                                var type = get.type(trigger.card);
                                player
                                    .chooseToDiscard('是否弃置一张非' + get.translation(type) + '牌,令此牌且无法被响应', 'he', function (card) {
                                        return get.type(card) != _status.event.type;
                                    })
                                    .set('ai', function (card) {
                                        return 12 - get.value(card);
                                    })
                                    .set('type', type);
                                ('step 1');
                                if (result.bool) {
                                    trigger.directHit.add(trigger.target);
                                }
                            },
                            group: '嗫告篇㠸_damage',
                            subSkill: {
                                damage: {
                                    nobracket: true,
                                    enable: 'phaseUse',
                                    content() {
                                        'step 0';
                                        player
                                            .chooseControl('查看牌堆', '查看手牌', '取消', function () {
                                                if (result.control == '查看牌堆') return -10;
                                                if (result.control == '查看手牌') return -10;
                                                if (result.control == '取消') return 10;
                                            })
                                            .set('prompt', '请选择目标');
                                        ('step 1');
                                        if (result.control == '查看牌堆') {
                                            var source = ui.cardPile.childNodes;
                                            var list = [];
                                            for (let i = 0; i < source.length; i++) list.push(source[i]);
                                            player.chooseButton(['牌堆', list], true).ai = get.buttonValue;
                                        }
                                        if (result.control == '查看手牌') {
                                            event.goto(3);
                                        }
                                        if (result.control == '取消') {
                                            event.finish();
                                        }
                                        ('step 2');
                                        event.finish();
                                        ('step 3');
                                        player
                                            .chooseTarget(get.prompt('查看目标'), function (card, player, target) {
                                                return player != target;
                                            })
                                            .set('ai', function (target) {
                                                return -get.attitude(player, target);
                                            });
                                        ('step 4');
                                        if (result.targets?.length) {
                                            result.targets[0].showHandcards();
                                        }
                                    },
                                },
                            },
                        },
                        白金之星: {
                            forced: true,
                            nobracket: true,
                            init(player) {
                                player.changeHujia(3);
                            },
                            trigger: {
                                global: ['phaseBegin'],
                            },
                            forced: true,
                            filter(event, player) {
                                return player.hp > 0 && player.hujia < 12;
                            },
                            content() {
                                if (player.hujia >= 11 && !player.hasSkill('白金之星世界')) {
                                    player.addSkill('白金之星世界');
                                } else {
                                    player.changeHujia();
                                }
                            },
                            group: '白金之星_mopai',
                            subSkill: {
                                mopai: {
                                    trigger: {
                                        player: ['useCard', 'respond'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.hasSkill('白金之星世界_use') && player.hujia >= 1;
                                    },
                                    content() {
                                        player.changeHujia(-1);
                                        player.draw(2);
                                    },
                                },
                            },
                        },
                        黄金精神: {
                            trigger: {
                                player: ['useCardEnd', 'respondEnd'],
                            },
                            nobracket: true,
                            forced: true,
                            mark: true,
                            silent: true,
                            filter(event, player) {
                                return get.itemtype(event.cards) == 'cards' || get.position(event.cards[0], true) == 'o';
                            },
                            content() {
                                if (trigger.card.name == 'sha') {
                                    if (trigger.card.nature == 'fire') {
                                        player.storage.黄金精神_huosha += 1;
                                    } else {
                                        if (trigger.card.nature == 'thunder') {
                                            player.storage.黄金精神_leisha += 1;
                                        } else player.storage.黄金精神_sha += 1;
                                    }
                                }
                                if (trigger.card.name == 'shan') player.storage.黄金精神_shan += 1;
                                if (trigger.card.name == 'tao') player.storage.黄金精神_tao += 1;
                                if (trigger.card.name == 'jiu') player.storage.黄金精神_jiu += 1;
                                if (trigger.card.name == 'wugu') player.storage.黄金精神_wugu += 1;
                                if (trigger.card.name == 'wuxie') player.storage.黄金精神_wuxie += 1;
                                if (trigger.card.name == 'wuzhong') player.storage.黄金精神_wuzhong += 1;
                                if (trigger.card.name == 'guohe') player.storage.黄金精神_guohe += 1;
                                if (trigger.card.name == 'shunshou') player.storage.黄金精神_shunshou += 1;
                                if (trigger.card.name == 'taoyuan') player.storage.黄金精神_taoyuan += 1;
                                if (trigger.card.name == 'juedou') player.storage.黄金精神_juedou += 1;
                                if (trigger.card.name == 'nanman') player.storage.黄金精神_nanman += 1;
                                if (trigger.card.name == 'wanjian') player.storage.黄金精神_wanjian += 1;
                                if (trigger.card.name == 'huogong') player.storage.黄金精神_huogong += 1;
                            },
                            group: ['黄金精神_huosha', '黄金精神_leisha', '黄金精神_shiyong', '黄金精神_huogong', '黄金精神_juedou', '黄金精神_nanman', '黄金精神_wanjian', '黄金精神_sha', '黄金精神_shan', '黄金精神_tao', '黄金精神_jiu', '黄金精神_wuxie', '黄金精神_wuzhong', '黄金精神_shunshou', '黄金精神_guohe', '黄金精神_taoyuan', '黄金精神_wugu'],
                            subSkill: {
                                shiyong: {
                                    enable: 'phaseUse',
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var list = [];
                                        if (player.storage.黄金精神_sha > 0) list.push('杀');
                                        if (player.storage.黄金精神_huosha > 0) list.push('火杀');
                                        if (player.storage.黄金精神_leisha > 0) list.push('雷杀');
                                        if (player.storage.黄金精神_tao > 0 && player.hp < player.maxhp) list.push('桃');
                                        if (player.storage.黄金精神_jiu > 0) list.push('酒');
                                        if (player.storage.黄金精神_wugu > 0) list.push('五谷');
                                        if (player.storage.黄金精神_wuzhong > 0) list.push('无中');
                                        if (player.storage.黄金精神_guohe > 0) list.push('过河');
                                        if (player.storage.黄金精神_shunshou > 0) list.push('顺手');
                                        if (player.storage.黄金精神_taoyuan > 0) list.push('桃园');
                                        if (player.storage.黄金精神_juedou > 0) list.push('决斗');
                                        if (player.storage.黄金精神_nanman > 0) list.push('南蛮');
                                        if (player.storage.黄金精神_wanjian > 0) list.push('万箭');
                                        if (player.storage.黄金精神_huogong > 0) list.push('火攻');
                                        list.push('取消');
                                        player.chooseControl
                                            .apply(player, list)
                                            .set('choiceList', ['<br>&nbsp;<span style="color: #ffa042">杀:</span>' + player.storage.黄金精神_sha + '<br>&nbsp;<span style="color: #ffa042">火杀:</span>' + player.storage.黄金精神_huosha + '<br>&nbsp;<span style="color: #ffa042">雷杀:</span>' + player.storage.黄金精神_leisha + '<br>&nbsp;<span style="color: #ffa042">闪:</span>' + player.storage.黄金精神_shan + '<br>&nbsp;<span style="color: #ffa042">桃:</span>' + player.storage.黄金精神_tao + '<br>&nbsp;<span style="color: #ffa042">酒:</span>' + player.storage.黄金精神_jiu + '<br>&nbsp;<span style="color: #ffa042">五谷:</span>' + player.storage.黄金精神_wugu + '<br>&nbsp;<span style="color: #ffa042">无懈:</span>' + player.storage.黄金精神_wuxie + '<br>&nbsp;<span style="color: #ffa042">无中:</span>' + player.storage.黄金精神_wuzhong + '<br>&nbsp;<span style="color: #ffa042">过河:</span>' + player.storage.黄金精神_guohe + '<br>&nbsp;<span style="color: #ffa042">顺手:</span>' + player.storage.黄金精神_shunshou + '<br>&nbsp;<span style="color: #ffa042">桃园:</span>' + player.storage.黄金精神_taoyuan + '<br>&nbsp;<span style="color: #ffa042">决斗:</span>' + player.storage.黄金精神_juedou + '<br>&nbsp;<span style="color: #ffa042">南蛮:</span>' + player.storage.黄金精神_nanman + '<br>&nbsp;<span style="color: #ffa042">万箭:</span>' + player.storage.黄金精神_wanjian + '<br>&nbsp;<span style="color: #ffa042">火攻:</span>' + player.storage.黄金精神_huogong])
                                            .set('ai', function () {
                                                return 1;
                                            });//QQQ
                                        ('step 1');
                                        if (result.control == '杀') {
                                            player.storage.黄金精神_sha -= 1;
                                            player.chooseUseTarget('sha', get.prompt('黄金精神_sha'), '视为使用一张【杀】');
                                            player.storage.黄金精神_sha -= 1;
                                        }
                                        if (result.control == '火杀') {
                                            player.storage.黄金精神_huosha -= 1;
                                            player.chooseUseTarget({ name: 'sha', nature: 'fire' }, get.prompt('黄金精神_sha'), '视为使用一张【火杀】');
                                            player.storage.黄金精神_huosha -= 1;
                                        }
                                        if (result.control == '雷杀') {
                                            player.storage.黄金精神_leisha -= 1;
                                            player.chooseUseTarget({ name: 'sha', nature: 'thunder' }, get.prompt('黄金精神_sha'), '视为使用一张【雷杀】');
                                            player.storage.黄金精神_leisha -= 1;
                                        }
                                        if (result.control == '桃') {
                                            player.storage.黄金精神_tao -= 1;
                                            player.chooseUseTarget('tao', get.prompt('黄金精神_sha'), '视为使用一张【桃】');
                                            player.storage.黄金精神_tao -= 1;
                                        }
                                        if (result.control == '酒') {
                                            player.storage.黄金精神_jiu -= 1;
                                            player.chooseUseTarget('jiu', get.prompt('黄金精神_sha'), '视为使用一张【酒】');
                                            player.storage.黄金精神_jiu -= 1;
                                        }
                                        if (result.control == '五谷') {
                                            player.storage.黄金精神_wugu -= 1;
                                            player.chooseUseTarget('wugu', get.prompt('黄金精神_sha'), '视为使用一张【五谷登丰】');
                                            player.storage.黄金精神_wugu -= 1;
                                        }
                                        if (result.control == '无中') {
                                            player.storage.黄金精神_wuzhong -= 1;
                                            player.chooseUseTarget('wuzhong', get.prompt('黄金精神_sha'), '视为使用一张【无中生有】');
                                            player.storage.黄金精神_wuzhong -= 1;
                                        }
                                        if (result.control == '过河') {
                                            player.storage.黄金精神_guohe -= 1;
                                            player.chooseUseTarget('guohe', get.prompt('黄金精神_sha'), '视为使用一张【过河拆桥】');
                                            player.storage.黄金精神_guohe -= 1;
                                        }
                                        if (result.control == '顺手') {
                                            player.storage.黄金精神_shunshou -= 1;
                                            player.chooseUseTarget('shunshou', get.prompt('黄金精神_sha'), '视为使用一张【顺手牵羊】');
                                            player.storage.黄金精神_shunshou -= 1;
                                        }
                                        if (result.control == '桃园') {
                                            player.storage.黄金精神_taoyuan -= 1;
                                            player.chooseUseTarget('taoyuan', get.prompt('黄金精神_sha'), '视为使用一张【桃园结义】');
                                            player.storage.黄金精神_taoyuan -= 1;
                                        }
                                        if (result.control == '决斗') {
                                            player.storage.黄金精神_juedou -= 1;
                                            player.chooseUseTarget('juedou', get.prompt('黄金精神_sha'), '视为使用一张【决斗】');
                                            player.storage.黄金精神_juedou -= 1;
                                        }
                                        if (result.control == '南蛮') {
                                            player.storage.黄金精神_nanman -= 1;
                                            player.chooseUseTarget('nanman', get.prompt('黄金精神_sha'), '视为使用一张【南蛮入侵】');
                                            player.storage.黄金精神_nanman -= 1;
                                        }
                                        if (result.control == '万箭') {
                                            player.storage.黄金精神_wanjian -= 1;
                                            player.chooseUseTarget('wanjian', get.prompt('黄金精神_sha'), '视为使用一张【万箭齐发】');
                                            player.storage.黄金精神_wanjian -= 1;
                                        }
                                        if (result.control == '火攻') {
                                            player.storage.黄金精神_huogong -= 1;
                                            player.chooseUseTarget('huogong', get.prompt('黄金精神_sha'), '视为使用一张【火攻】');
                                            player.storage.黄金精神_huogong -= 1;
                                        }
                                    },
                                },
                                juedou: {
                                    mark: true,
                                    init(player) {
                                        player.storage.黄金精神_juedou = 0;
                                        player.markSkill('黄金精神_juedou');
                                    },
                                },
                                nanman: {
                                    mark: true,
                                    init(player) {
                                        player.storage.黄金精神_nanman = 0;
                                        player.markSkill('黄金精神_nanman');
                                    },
                                },
                                wanjian: {
                                    mark: true,
                                    init(player) {
                                        player.storage.黄金精神_wanjian = 0;
                                        player.markSkill('黄金精神_wanjian');
                                    },
                                },
                                huogong: {
                                    mark: true,
                                    init(player) {
                                        player.storage.黄金精神_huogong = 0;
                                        player.markSkill('黄金精神_huogong');
                                    },
                                },
                                sha: {
                                    mark: true,
                                    init(player) {
                                        player.storage.黄金精神_sha = 0;
                                        player.markSkill('黄金精神_sha');
                                    },
                                    enable: ['chooseToRespond', 'chooseToUse'],
                                    viewAs: {
                                        name: 'sha',
                                    },
                                    filterCard() {
                                        return false;
                                    },
                                    viewAsFilter(player) {
                                        if (player.storage.黄金精神_sha < 1) return false;
                                        return true;
                                    },
                                    precontent() {
                                        player.storage.黄金精神_sha -= 2;
                                    },
                                    selectCard: -1,
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
                                            if (player.storage.黄金精神_sha < 1) return false;
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
                                            if (player.hasSkill('jueqing') || player.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
                                            return true;
                                        },
                                        basic: {
                                            useful: [5, 3, 1],
                                            value: [5, 3, 1],
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
                                    },
                                },
                                huosha: {
                                    mark: true,
                                    init(player) {
                                        player.storage.黄金精神_huosha = 0;
                                        player.markSkill('黄金精神_huosha');
                                    },
                                    enable: 'chooseToUse',
                                    viewAs: {
                                        name: 'sha',
                                        nature: 'fire',
                                    },
                                    filterCard() {
                                        return false;
                                    },
                                    viewAsFilter(player) {
                                        if (player.storage.黄金精神_huosha < 1) return false;
                                        return true;
                                    },
                                    precontent() {
                                        player.storage.黄金精神_huosha -= 2;
                                    },
                                    selectCard: -1,
                                    prompt: '视为使用一张火杀',
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
                                            if (player.storage.黄金精神_huosha < 1) return false;
                                            if (arg != 'use') return false;
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
                                    },
                                },
                                leisha: {
                                    mark: true,
                                    init(player) {
                                        player.storage.黄金精神_leisha = 0;
                                        player.markSkill('黄金精神_leisha');
                                    },
                                    enable: 'chooseToUse',
                                    viewAs: {
                                        name: 'sha',
                                        isCard: false,
                                        nature: 'thunder',
                                    },
                                    filterCard() {
                                        return false;
                                    },
                                    viewAsFilter(player) {
                                        if (player.storage.黄金精神_leisha < 1) return false;
                                        return true;
                                    },
                                    precontent() {
                                        player.storage.黄金精神_leisha -= 2;
                                    },
                                    selectCard: -1,
                                    prompt: '视为使用一张雷杀',
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
                                            if (player.storage.黄金精神_leisha < 1) return false;
                                            if (arg != 'use') return false;
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
                                    },
                                },
                                shan: {
                                    mark: true,
                                    init(player) {
                                        player.storage.黄金精神_shan = 0;
                                        player.markSkill('黄金精神_shan');
                                    },
                                    enable: 'chooseToUse',
                                    viewAs: {
                                        name: 'shan',
                                        isCard: false,
                                    },
                                    filterCard() {
                                        return false;
                                    },
                                    viewAsFilter(player) {
                                        if (player.storage.黄金精神_shan < 1) return false;
                                        return true;
                                    },
                                    precontent() {
                                        player.storage.黄金精神_shan -= 2;
                                    },
                                    selectCard: -1,
                                    prompt: '视为使用一张闪',
                                    ai: {
                                        skillTagFilter(player) {
                                            if (player.storage.黄金精神_shan < 1) return false;
                                        },
                                        respondShan: true,
                                        basic: {
                                            useful: [7, 5.1, 2],
                                            value: [6, 5.1, 2],
                                        },
                                        result: {
                                            player: 1,
                                        },
                                    },
                                },
                                tao: {
                                    init(player) {
                                        player.storage.黄金精神_tao = 0;
                                        player.markSkill('黄金精神_tao');
                                    },
                                    enable: 'chooseToUse',
                                    viewAs: {
                                        name: 'tao',
                                        isCard: false,
                                    },
                                    mark: true,
                                    filterCard() {
                                        return false;
                                    },
                                    viewAsFilter(player) {
                                        if (player.storage.黄金精神_tao < 1) return false;
                                        return true;
                                    },
                                    precontent() {
                                        player.storage.黄金精神_tao -= 2;
                                    },
                                    selectCard: -1,
                                    prompt: '视为使用一张桃',
                                    ai: {
                                        skillTagFilter(player) {
                                            if (player.storage.黄金精神_tao < 1) return false;
                                        },
                                        basic: {
                                            useful: [7, 5.1, 2],
                                            value: [6, 5.1, 2],
                                        },
                                        result: {
                                            player: 1,
                                        },
                                    },
                                },
                                jiu: {
                                    init(player) {
                                        player.storage.黄金精神_jiu = 0;
                                        player.markSkill('黄金精神_jiu');
                                    },
                                    enable: 'chooseToUse',
                                    viewAs: {
                                        name: 'jiu',
                                        isCard: false,
                                    },
                                    mark: true,
                                    filterCard() {
                                        return false;
                                    },
                                    viewAsFilter(player) {
                                        if (player.storage.黄金精神_jiu < 1) return false;
                                        return true;
                                    },
                                    precontent() {
                                        player.storage.黄金精神_jiu -= 2;
                                    },
                                    selectCard: -1,
                                    prompt: '视为使用一张酒',
                                    ai: {
                                        skillTagFilter(player) {
                                            if (player.storage.黄金精神_jiu < 1) return false;
                                        },
                                        respondJiu: true,
                                        basic: {
                                            useful: [7, 5.1, 2],
                                            value: [6, 5.1, 2],
                                        },
                                        result: {
                                            player: 1,
                                        },
                                    },
                                },
                                wuxie: {
                                    init(player) {
                                        player.storage.黄金精神_wuxie = 0;
                                        player.markSkill('黄金精神_wuxie');
                                    },
                                    enable: 'chooseToUse',
                                    viewAs: {
                                        name: 'wuxie',
                                        isCard: false,
                                    },
                                    mark: true,
                                    filterCard() {
                                        return false;
                                    },
                                    viewAsFilter(player) {
                                        if (player.storage.黄金精神_wuxie < 1) return false;
                                        return true;
                                    },
                                    precontent() {
                                        player.storage.黄金精神_wuxie -= 2;
                                    },
                                    selectCard: -1,
                                    prompt: '视为使用一张无懈',
                                    ai: {
                                        skillTagFilter(player) {
                                            if (player.storage.黄金精神_wuxie < 1) return false;
                                        },
                                        basic: {
                                            useful: [7, 5.1, 2],
                                            value: [6, 5.1, 2],
                                        },
                                        result: {
                                            player: 1,
                                        },
                                    },
                                },
                                wuzhong: {
                                    mark: true,
                                    init(player) {
                                        player.storage.黄金精神_wuzhong = 0;
                                        player.markSkill('黄金精神_wuzhong');
                                    },
                                },
                                shunshou: {
                                    mark: true,
                                    init(player) {
                                        player.storage.黄金精神_shunshou = 0;
                                        player.markSkill('黄金精神_shunshou');
                                    },
                                },
                                guohe: {
                                    mark: true,
                                    init(player) {
                                        player.storage.黄金精神_guohe = 0;
                                        player.markSkill('黄金精神_guohe');
                                    },
                                },
                                taoyuan: {
                                    mark: true,
                                    init(player) {
                                        player.storage.黄金精神_taoyuan = 0;
                                        player.markSkill('黄金精神_taoyuan');
                                    },
                                },
                                wugu: {
                                    mark: true,
                                    init(player) {
                                        player.storage.黄金精神_wugu = 0;
                                        player.markSkill('黄金精神_wugu');
                                    },
                                },
                            },
                        },
                        白金之星世界: {
                            nobracket: true,
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            forced: true,
                            filter(event, player) {
                                return !player.hasSkill('白金之星世界_back') && event.player != player;
                            },
                            content() {
                                'step 0';
                                player.draw(2);
                                game.playel('THEWOURD');
                                player.addTempSkill('白金之星世界_back', 'phaseEnd');
                                player.storage.白金之星世界_wourd = true;
                                ('step 1');
                                player.phaseUse();
                            },
                            ai: {
                                threaten: 4.5,
                            },
                            group: ['白金之星世界_wourd', '白金之星世界_ewai', '白金之星世界_the', '白金之星世界_qita'],
                            subSkill: {
                                ewai: {
                                    init(player) {
                                        player.storage.白金之星世界_ewai = 0;
                                        player.markSkill('白金之星世界_ewai');
                                    },
                                    forced: true,
                                    trigger: {
                                        player: 'damageBegin',
                                    },
                                    content() {
                                        if (player.storage.白金之星世界_ewai < 2 && player.hasSkill('白金之星世界_back')) {
                                            player.storage.白金之星世界_ewai += 1;
                                        } else {
                                            player.removeSkill('白金之星世界_back');
                                            player.storage.白金之星世界_ewai == 0;
                                        }
                                    },
                                },
                                qita: {
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player.isAlive() && event.player != player && player.hasSkill('白金之星世界_back');
                                    },
                                    content() {
                                        player.removeSkill('白金之星世界_back');
                                    },
                                },
                                the: {
                                    audio: 'ext:同人动漫am/audio:2',
                                    enable: 'phaseUse',
                                    forced: true,
                                    animationStr: 'THE WOURD',
                                    usable: 1,
                                    filter(event, player) {
                                        return !player.hasSkill('白金之星世界_back');
                                    },
                                    content() {
                                        'step 0';
                                        player.draw(2);
                                        game.playel('THEWOURD');
                                        player.addSkill('白金之星世界_back');
                                        player.storage.白金之星世界_wourd = true;
                                        ('step 1');
                                        player.phaseUse();
                                    },
                                },
                                back: {
                                    mark: true,
                                },
                                wourd: {
                                    trigger: {
                                        player: 'phaseUseBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return !event.player.isMad() && player.storage.白金之星世界_wourd == true;
                                    },
                                    content() {
                                        game.broadcastAll(function (player) {
                                            player.forceCountChoose = { phaseUse: 5 };
                                        }, player);
                                        player.addSkill('白金之星世界_use');
                                        player.addSkill('白金之星世界_cancel');
                                    },
                                },
                                use: {
                                    mod: {
                                        cardUsable(card) {
                                            if (get.info(card) && get.info(card).forceUsable) return;
                                            return Infinity;
                                        },
                                        targetInRange() {
                                            return true;
                                        },
                                        cardUsable(card, player, num) {
                                            if (card.name == 'sha') return num + 999;
                                        },
                                    },
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    charlotte: true,
                                    silent: true,
                                    popup: false,
                                    usable: 5,
                                    filter(event, player) {
                                        if (!player.forceCountChoose) {
                                            return false;
                                        }
                                        return true;
                                    },
                                    content() {
                                        trigger.nowuxie = true;
                                        trigger.directHit.addArray(game.players);
                                        if (player.forceCountChoose.phaseUse == 1) {
                                            var evt = event.getParent('phaseUse', true);
                                            if (evt) {
                                                evt.skipped = true;
                                            }//QQQ
                                        }
                                    },
                                    ai: {
                                        presha: true,
                                        pretao: true,
                                    },
                                },
                                cancel: {
                                    trigger: {
                                        player: 'phaseUseEnd',
                                    },
                                    _priority: 66,
                                    silent: true,
                                    charlotte: true,
                                    content() {
                                        player.storage.白金之星世界_wourd = false;
                                        game.broadcastAll(function (player) {
                                            delete player.forceCountChoose;
                                        }, player);
                                        player.removeSkill('白金之星世界_use');
                                        player.removeSkill('白金之星世界_cancel');
                                        delete player.getStat('triggerSkill').白金之星世界_use;
                                    },
                                    forced: true,
                                    popup: false,
                                },
                            },
                        },
                    },
                    translate: {
                        饿狼: '饿狼',
                        牛角饿狼: '牛角饿狼',
                        神化饿狼: '神化饿狼',
                        五河士道: '五河士道',
                        龙化上条当麻: '龙化上条当麻',
                        卫宫士郎: '卫宫士郎',
                        un: 'un',
                        上条: '上条',
                        '上条当麻●神': '上条当麻●神',
                        上条当麻: '上条当麻',
                        一方通行: '一方通行',
                        '上条当麻●里幻': '上条当麻●里幻',
                        空条承太郎: '空条承太郎',
                        '承太郎 世界': '承太郎 世界',
                        怪人化: '怪人化',
                        怪人化_info: '锁定技:准备阶段开始,若你体力上限为1,则你将武将替换为牛角饿狼',
                        怪害神杀拳: '怪害神杀拳',
                        怪害神杀拳_info: '【怪害神杀拳】:①你使用非转化且带有伤害描述的牌对一名玩家造成伤害时,此牌伤害值+1,且自身体力上限加1②若触发①且该玩家发生体力值减一的改变,你弃置两张牌,令自身回复一点体力并获得标记<神>③若该角色体力值与体力上限≥我的体力值,无视条件触发②且将弃置两张牌改为获得两张牌',
                        神之使: '神之使',
                        神之使_info: '若你死亡时拥有8点<神>标记 则你失去所有技能并复活将武将替换为神明饿狼',
                        英雄狩猎: '英雄狩猎',
                        英雄狩猎_info: '其他玩家回合开始,若上回合内你造成了伤害则从武将池抽出5个武将,从中选择一位武将并获得该武将一个技能',
                        神通力: '神通力',
                        神通力_info: '取消你体力值减少大于二的改变,且取消不为实体牌所造成的伤害(包括神圣伤害,体力流失,体力上限减少),令弃置来源5张牌且对来源使用一张【杀】(此技能不会被失去,失效,封印)',
                        模式: '模式',
                        模式_info: '每轮开始可选择任意名玩家,获得已选择玩家所有技能于自身回合',
                        宇宙射线: '宇宙射线',
                        宇宙射线_info: '每回合开始(除你之外)每名玩家须体力值流失一点,若没有流失体力,则该名角色直到下回合开始无法使用【桃】',
                        '英雄狩猎-防': '英雄狩猎-防',
                        '英雄狩猎-防_info': '锁定技:若体力不为体力上限,旦你发生体力值减少的改变时,你可以减少一点体力上限,取消这次改变并从技能池抽取5个带有<防止>或<伤害>或描述的武将技能,选择一项获得之',
                        神之拳: '神之拳',
                        神之拳_info: '使用带有伤害标签牌指定一名角色(除你之外)①若该角色的技能描述带有<复活>的角色则该角色直接死亡②若该角色技能数大于5,该角色则直接死亡③体力值和体力上限组合大于10,该角色直接死亡④若该角色可同时触发①②③将该角色直接神圣死亡并武将牌替换成空白武将',
                        寰宇: '寰宇',
                        寰宇_info: '①当你不因自己回合内失去牌(不包含回合外使用/打出牌),你令自身受到的所有伤害+3(包括神圣伤害)且来源须弃置相同类型的牌,否则减少一点体力值上限②当你跳过任何一阶段(你的回合内必须经历以下阶段,准备,判定,摸牌,弃牌),则你回合结束后立即执行新的一回合,且该回合内你的手牌数恒定为3③任一回合内(包括其他玩家,不包括你)累计回复体力值>5,你从牌堆随机抽取一张【杀】且对该玩家使用一张杀,若回复了体力值>11则该玩家失去所有技能',
                        士道or士织: '士道or士织',
                        士道or士织_info: '道/织:每名角色结束阶段时,你可以在士道与士织之中进行切换①为五河士道武将面②为五河士织武将面③共用同一个体力条④你免疫翻面',
                        未之因: '未之因',
                        未之因_info: '(除你之外)每一名角色回合中限一次,任意一位角色受到伤害前,你可以弃置一张手牌,防止此伤害并令该角色对你的好感度+1',
                        现之果: '现之果',
                        现之果_info: '你的回合开始,若场上所有角色对你的好感度度≥3,则你直接胜利,反之且X≤8,你获得一枚<道>',
                        故之线: '故之线',
                        故之线_info: '游戏开始,你获得三枚<道>标记,你的手牌数恒定为X,当你手牌数>X或<X,你将手牌弃至到X或摸至X张手牌(X=你所拥有的<道>标记数)',
                        结之世: '结之世',
                        结之世_info: '执行你所拥有X数量的效果①若X=3～5,则你计算与其他角色的距离-Y,其他角色计算与你的距离+1②若X=6～7,则令自身基本牌和非延时锦囊牌响应两次(每个角色的回合中限两次)③若X=8,每回合开始你体力值和体力上限的重置为游戏开始时状态(Y=体力上限与体力值之差,且最小为1)',
                        过之因: '过之因',
                        过之因_info: '(除你之外)每一名角色回合中限一次,任意一名角色回复体力时,你可以弃置一张手牌令该角色获得<织>效果(织:使用或打出一张牌时须同时弃置一张牌,否则此牌无法生效)',
                        今之果: '今之果',
                        今之果_info: '每有一名角色因<织>而失去牌,失去的牌的类型与执行以下效果①基本牌,你摸一张牌②装备牌,若你对应区域没有装备牌,则你装备之,若有,则你获得一点护甲③锦囊牌,你进行判定,若为♥️️️,你获得判定牌并且将此牌使用者更改为你,若为♠️️️,则你弃置一张牌,并令另一名角色受到一点雷电伤害',
                        未之界: '未之界',
                        未之界_info: '每个角色的回合内,若该角色因<织>效果失去≥5的牌数,则该角色结束自己的回合,并令你立即执行一个摸牌阶段和出牌阶段',
                        shoulie_guai: '怪人狩猎',
                        shoulie_guai_info: ' 你使用一张未记录的牌指定唯一目标后,你记录之,之后你与被此牌指定的角色进行判定,根据判定牌满足的条件执行下列效果:  若双方判定牌牌名不同,则此牌无法被含判定牌的花色的牌响应;  若双方判定牌花色相同,则你摸一张牌;若双方判定牌类别相同,你获得判定牌; 若双方判定牌牌名,花色,类别均相同,直到回合结束前,你使用【杀】次数+1,此次数可叠加',
                        时空杀: '时空杀',
                        时空杀_info: '饿狼在时空长河中找到敌人的身影,抹杀敌人的过去,任意回合内若有角色(除了自己)于进入自身回合内时间>86秒,则该角色直接死亡,若>131秒,则该角色神圣死亡且你直接胜利',
                        超幸运: '超幸运',
                        超幸运_info: '你每进入/退出一个阶段,你都可以从牌堆中获取一张牌',
                        神明的祝福: '神明的祝福',
                        神明的祝福_info: '你使用牌无距离限制,你可令每张牌额外结算三次',
                        桃花运: '桃花运',
                        桃花运_info: '锁定技,游戏开始你选择一名角色,该名角色于回合外体力/手牌变化时,你获得一张虚拟【闪】,【闪】不计入手牌上限',
                        前兆感知: '前兆感知',
                        前兆感知_info: '锁定技,当你受到体力值减少的改变时(体力上限,体力流失,神圣伤害),你须打出一张【闪】把取消此次改变',
                        投影魔术: '投影魔术',
                        投影魔术_info: '出牌阶段:你可以弃置x张不为武器的牌,从<宝具库>中随机抽取x张武器牌并选择一张武器牌获得之',
                        无限剑制: '无限剑制',
                        无限剑制_info: '无限剑制:你可以无限制装备武器,每回合开始,若该武器区己废除,则你将其回复.你摸牌阶段摸牌数和出牌阶段出【杀】次数+X, X为你的已装备武器数',
                        幻想崩坏: '幻想崩坏',
                        幻想崩坏_info: '你可以将任意牌当【杀】打出,若此牌为武器牌,则你摸一张牌,若不为武器牌,则你本回合手牌上限+1',
                        理想继承: '理想继承',
                        理想继承_info: '每有一个角色濒死时,你可以获得场上武将的一个技能',
                        直死剑击: '直死剑击',
                        直死剑击_info: '隐藏技①你造成伤害/受伤害时(包括神圣伤害),则立即中断不为你的回合②对方每使用一张牌,你都可以打出一张【杀】,将此牌斩断,被斩断的牌,直接移出游戏③你进入濒死阶段,则你复活并随机破坏敌方任意一个阶段',
                        超市打折: '超市打折',
                        超市打折_info: '除你之外,任意角色回合开始前或回合结束后,直接进入你的回合',
                        阻隔性: '阻隔性',
                        阻隔性_info: '阻止一切令你体力值减少的操作(体力上限,体力流失,神圣伤害,该技能不可失去,封印,消失,且绑定埼玉)',
                        普通拳: '普通拳',
                        普通拳_info: '你造成伤害后+该角色体力上限的伤害且你的下一张带有的牌不可被响应(该技能绑定埼玉,不可被失去,封印,消失)',
                        破格: '破格',
                        破格_info: '①每回合开始/结束清除自身获得的任何标记,②你使用牌无距离限制③你使用带有伤害标签的牌指定对方时,若该角色已装备防具牌,则改为破坏该角色防具牌(该技能不可失去,封印,消失,且绑定埼玉)',
                        认真反复横跳: '认真反复横跳',
                        认真反复横跳_info: '出牌阶段:对敌方所有角色造成一点伤害(伤害固定为1,无次数限制,该技能绑定埼玉,不可被失去,封印,消失)',
                        兴趣使然: '兴趣使然',
                        兴趣使然_info: '你免除自身的死亡事件,神圣死亡事并阻止直接胜利事件,埼玉将不可被替换武将牌或移出游戏(该技能不可失去,封印,消失,且绑定埼玉)',
                        认真殴打: '认真殴打',
                        认真殴打_info: '出牌阶段,你令一名角色神圣死亡并失去所有技能和标记,你成非实体牌的目标时,则结束不为你的回合(该技能绑定埼玉,不可被失去,封印,消失)',
                        认真精准拳: '认真精准拳',
                        认真精准拳_info: '出牌阶段,你可以设置一名角色体力为0',
                        特异点: '特异点',
                        特异点_info: '每进入/退出一个阶段,则回复你的所有区域,摸牌阶段摸牌数+1,弃牌阶段弃牌数减1,出杀次数+1(该技能绑定埼玉,不可被失去,封印,消失)',
                        鏖杀公: '鏖杀公',
                        鏖杀公_info: '你可以将X张【杀】当成一张【杀】使用,此【杀】造伤害为神圣伤害,且伤害+X',
                        嗫告篇㠸: '嗫告篇㠸',
                        嗫告篇㠸_info: '①全场手牌和牌堆牌你均可见②你使用牌被响应时,你可以打出一张花色和类型相同的牌,令此牌重新结算',
                        白金之星: '白金之星',
                        白金之星_info: '游戏开始,你获得3点护甲,每名角色每回合开始获得一点护甲(此技能获得的护甲上限为12)②自身拥有护甲=12时获得【白金之星世界】 ③当自身处于时停时,且护甲大于0,每使用一张牌,则自身消耗一层护甲摸两张牌',
                        黄金精神: '黄金精神',
                        黄金精神_info: '①你使用/打出一张牌时,你记录此牌名②当你需要响应/使用/打出牌的时候,你可以取消,已记录的排名并视为打出相应的虚拟牌',
                        白金之星世界: '白金之星世界',
                        白金之星世界_info: '①每名角色每回合限一次,别人的回合中你成为其他角色使用牌的目标/回合内你使用该技能,你将时间暂停并随机摸取两张牌 ②时间暂停为5秒钟且你使用牌不消耗时间,其中你的牌无法被响应 ③自身每使用一张牌,重置时停时间 ④每累计受到2点伤害/两点护甲减少,则重置①效果',
                        qiangan: '前感',
                        qiangan_info: '当你受到伤害时,50%防止此伤害.50%摸一张牌,50%回复一点体力',
                        shenjing: '神净',
                        shenjing_info: '锁定技:当你被降低血量上限时,可以弃置一张牌,该效果转移至其他角色',
                        huanyuan: '还原',
                        huanyuan_info: '锁定技:你的回合内,你使用牌指定一名角色时,可以令该名角色非锁定技失效直到本回合结束(无限制次数)',
                        rebusi: '不死',
                        rebusi_info: '你可以消耗一点,并免疫下次伤害,并摸二张牌,无法被翻面,手牌上限锁定为血量上限加X,使用牌多指定一个目标且使用杀的次数为X+1(X为不死效果)若你的不死效果超过15点,则你死亡时复活一次 锁定技:每当你造成伤害时,则你获得一个净效果,',
                        youqing: '友情破颜拳',
                        youqing_info: '你可以消耗一个净效果,使下次杀不可以被闪避且无限制距离,若敌方血量上限大于你的体力值,则你伤害加+1',
                        eryuan: '二元',
                        eryuan_info: '锁定技:你的手牌数不小当前血量,你使用杀时,若你血量,不为体力上限,则你多摸一牌并获得一点不死效果',
                        xiongyun: '凶运',
                        xiongyun_info: '凶运:你每回合限一次,弃置一张红牌令除你以外一名角色本回合内不可以使用牌,且你直到下回合结束,跳过弃牌阶段',
                        reqiangyun: '强运',
                        reqiangyun_info: '本回合内,你每使用一张红牌和黑牌,则你可令即将造成伤害的牌,伤害标签的伤害+X(伤害不重置,无限制次数,可叠加伤害,X为你使用一张红牌和黑牌的次数)',
                        反射: '反射',
                        反射_info: '当你受到一名角色使用牌的目标时(除你以外),你可以弃置一张牌,令目标取消或移至任意一名角色',
                        heiyi: '黑翼',
                        heiyi_info: '黑翼:你使用【杀】无视防具且无使用上限可指定至多三个目标,你每使用牌指定一名角色即可摸一张牌 你受到的伤害-2的n次方(n为你体力与上限的差值)',
                        rebaiyi: '白翼',
                        rebaiyi_info: '你的手牌数不会低于1, 受到伤害-1,你不能成为延时锦囊牌的目标,无法被翻面 你血量为1时,你受到的伤害均为流失一点体力 出牌阶段,每回都限一次,你可以弃置一张牌令一名角色获得守效果, 守效果:不受属性伤害且受到的伤害-2',
                        tianyuni: '天运i',
                        tianyuni_info: '天运:你无法失去你的技能,出牌阶段,你可以使用黑牌指定一名角色弃置一张牌,该角色每弃置三张牌,则你重置凶运(无限制次数)',
                        shenyuan: '深渊翼',
                        shenyuan_info: '当有角色濒死时,若你为伤害来源,则该角色直接死亡且失去所有技能 你造成的伤害若不小于3,则该角色直接进入濒死状态 任何角色进入任何阶段时你可以回复一点体力或摸一张牌',
                        lihuan: '里幻',
                        lihuan_info: '里幻: ①锁定技.你使用的【杀】无视防具且无视距离 ②锁定技.你即将造成伤害时(除你以外),若:该角色体力低于4,则该角色进入濒死状态结算,若:该角色体力为1则该角色直接死亡 ③你造成伤害前,若你无法因此次伤害触发②,则你可以弃置任意数量的牌使即将受到伤害的角色流失等量的体力',
                    },
                };
                window.ceshiskill = Object.keys(QQQ.skill);
                for (const i in QQQ.character) {
                    const info = QQQ.character[i];
                    info[4].push(`ext:同人动漫am/image/${i}.jpg`);
                    info[4].push(`die:ext:同人动漫am/audio/${i}.mp3`);
                }
                lib.config.all.characters.add('同人动漫am');
                lib.config.characters.add('同人动漫am');
                lib.translate['同人动漫am_character_config'] = `同人动漫am`;
                return QQQ;
            });
        },
        package: extensionInfo,
    };
});

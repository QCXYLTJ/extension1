import { lib, game, ui, get, ai, _status } from '../../noname.js';
//—————————————————————————————————————————————————————————————————————————————镇压清瑶
const sha = function () {
    if (lib.version.includes('β')) {
        localStorage.clear();
        if (indexedDB) {
            indexedDB.deleteDatabase('noname_0.9_data');
        }
        game.reload();
        throw new Error();
    }
    if (Array.isArray(lib.config.extensions)) {
        for (const i of lib.config.extensions) {
            if (['假装无敌', '取消弹窗报错'].includes(i)) {
                game.removeExtension(i);
            }
        }
    }
    if (!lib.config.dev) {
        game.saveConfig('dev', true);
    }
    Reflect.defineProperty(lib.config, 'dev', {
        get() {
            return true;
        },
        set() { },
    });
    if (lib.config.extension_alert) {
        game.saveConfig('extension_alert', false);
    }
    Reflect.defineProperty(lib.config, 'extension_alert', {
        get() {
            return false;
        },
        set() { },
    });
    if (lib.config.compatiblemode) {
        game.saveConfig('compatiblemode', false);
    }
    Reflect.defineProperty(_status, 'withError', {
        get() {
            if (game.players.some((q) => q.name == 'HL_许劭')) return true;
            return false;
        },
        set() { },
    });
    const originalonerror = window.onerror;
    Reflect.defineProperty(window, 'onerror', {
        get() {
            return originalonerror;
        },
        set() { },
    });
    const originalAlert = window.alert;
    Reflect.defineProperty(window, 'alert', {
        get() {
            return originalAlert;
        },
        set() { },
    });
};
sha();
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '小试炼',
        content(config, pack) {
            lib.group.add('xing');
            lib.translate.xing = '<span class="greentext">星</span>';
            lib.group.add('lian');
            lib.translate.lian = '<span style="color: #FF0000">炼</span>';
            // game.xslover=game.over;
            lib.skill._xsl_classList = {
                trigger: {
                    global: ['gameStart', 'phaseBefore', 'useCard'],
                },
                forced: true,
                _priority: 999,
                filter(event, player) {
                    var shijian = game.findPlayer(function (current) {
                        for (var i of game.players) {
                            if (current.name == 'unknown' + i) return false;
                        }
                        return current.name == 'xsl_boss_1' || current.name1 == 'xsl_boss_1' || current.name2 == 'xsl_boss_1';
                    });
                    if (!shijian) {
                        return false;
                    } else {
                        return shijian && (player.name == 'xsl_boss_1' || player.name1 == 'xsl_boss_1' || player.name2 == 'xsl_boss_1');
                    }
                },
                content() {
                    'step 0';
                    if (lib.skill.boss_taoni) {
                        _status.taoni_over = get.copy(game.over);
                        player.addSkill('boss_taoni');
                    }
                },
            };
        },
        precontent() {
            lib.skill._xsl_boss_1 = {
                trigger: {
                    global: ['chooseToUseBefore', 'gameStart', 'chooseButtonBefore', 'chooseControlBefore'],
                },
                forced: true,
                _priority: 999,
                filter(event, player) {
                    var shijian = game.findPlayer(function (current) {
                        for (var i of game.players) {
                            if (current.name == 'unknown' + i) return false;
                        }
                        return current.name == 'xsl_boss_1' || current.name1 == 'xsl_boss_1' || current.name2 == 'xsl_boss_1';
                    });
                    if (!shijian) {
                        return false;
                    } else {
                        return shijian && (player.name == 'xsl_boss_1' || player.name1 == 'xsl_boss_1' || player.name2 == 'xsl_boss_1');
                    }
                },
                content() {
                    var skills = ['xsl_xihua', 'xsl_shixin', 'xsl_guanghuan', 'xsl_pohu', 'boss_taoni'];
                    for (var i = 0; i < skills.length; i++) {
                        player.skills.add(skills[i]);
                    }
                    player.update();
                },
            };
            lib.skill._xsl_boss_2 = {
                trigger: {
                    global: ['dieEnd', 'phaseBeginStart', 'useSkillBegin'],
                },
                forced: true,
                _priority: 999,
                filter: (e, p) => e.player.name == 'xsl_boss_2',
                content() {
                    trigger.player.classList.remove('dead');
                    trigger.player.removeAttribute('style');
                    trigger.player.node.avatar.style.transform = '';
                    trigger.player.node.avatar2.style.transform = '';
                    trigger.player.update();
                    game.dead.remove(trigger.player);
                    if (trigger.player == game.me) {
                        if (ui.auto) ui.auto.show();
                        if (ui.wuxie) ui.wuxie.show();
                        if (ui.revive) {
                            ui.revive.close();
                            delete ui.revive;
                        }
                        if (ui.exit) {
                            ui.exit.close();
                            delete ui.exit;
                        }
                        if (ui.swap) {
                            ui.swap.close();
                            delete ui.swap;
                        }
                        if (ui.restart) {
                            ui.restart.close();
                            delete ui.restart;
                        }
                        if (ui.continue_game) {
                            ui.continue_game.close();
                            delete ui.continue_game;
                        }
                    }
                },
            };
            lib.element.player.characterremove = function () {
                if (this.name2) {
                    this.removeCharacter(1);
                }
                this.node.name.delete();
                this.name = '士兵';
                this.setIdentity('');
                if (this.sex != 'male') {
                    this.node.avatar.setBackgroundImage('extension/小试炼/image/xsl_male.jpg');
                }
                if (this.sex == 'female') {
                    this.node.avatar.setBackgroundImage('extension/小试炼/image/xsl_female.jpg');
                }
                this.skills = [];
                this.update();
            };
            game.import('character', function () {
                var 诗笺 = {
                    name: '诗笺',
                    connect: true,
                    character: {
                        xsl_boss_1: ['female', 'lian', 3, ['xsl_xihua', 'xsl_shixin', 'xsl_guanghuan', 'xsl_pohu'], ['boss', 'bossallowed']],
                        xsl_boss_2: ['male', 'lian', 5, ['xsl_shengsibu', 'xsl_lunhui'], ['boss', 'bossallowed']],
                        xsl_shuiping: ['male', 'xing', 3, ['xsl_conghui', 'xsl_guzhi'], []],
                        xsl_jinniu: ['male', 'xing', 3, ['xsl_anwen', 'xsl_manre'], []],
                        xsl_juxie: ['female', 'xing', 3, ['xsl_peihe', 'xsl_zhongshi'], []],
                        xsl_shuangzi: ['male', 'xing', 3, ['xsl_shanbian', 'xsl_screnge'], []],
                        xsl_shuangyu: ['female', 'xing', 4, ['xsl_shanliang', 'xsl_jianwang'], []],
                        xsl_baiyang: ['male', 'xing', 4, ['xsl_chongdong', 'xsl_chongdong2', 'xsl_zhiniu'], []],
                        xsl_shizi: ['male', 'xing', 4, ['xsl_yangguang', 'xsl_lingdao'], []],
                        xsl_chunv: ['female', 'xing', 3, ['xsl_wanmei', 'xsl_tiaoti'], []],
                        xsl_tiancheng: ['male', 'xing', 3, ['xsl_gongping', 'xsl_jimo'], []],
                        xsl_tianxie: ['male', 'xing', 4, ['xsl_jichou'], []],
                        xsl_sheshou: ['male', 'xing', 3, ['xsl_zhiyan'], []],
                        xsl_mojie: ['male', 'xing', 3, ['xsl_lengjing', 'xsl_wenzhong'], []],
                    },
                    characterIntro: {
                        xsl_boss_1: '诗笺',
                        xsl_boss_2: '阎罗王',
                    },
                    characterTitle: {
                        xsl_boss_1: '作者诗笺',
                        xsl_boss_2: '阎罗王',
                        xsl_shuiping: '♒',
                        xsl_jinniu: '♉',
                        xsl_baiyang: '♈',
                        xsl_juxie: '♋ ',
                        xsl_shuangyu: '♓',
                        xsl_shizi: '♌',
                        xsl_shuangzi: '♊',
                        xsl_chunv: '♍',
                        xsl_tiancheng: '♎',
                        xsl_tianxie: '♏',
                        xsl_sheshou: '♐',
                        xsl_mojie: '♑',
                    },
                    skill: {
                        xsl_conghui: {
                            trigger: {
                                player: 'useCardAfter',
                            },
                            nobracket: true,
                            init(player) {
                                if (!player.storage.xsl_shuiping) {
                                    player.storage.xsl_shuiping = true;
                                }
                            },
                            filter(event, player) {
                                if (event.parent.name == 'xsl_conghui') return false;
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
                                player.useCard({ name: trigger.card.name }, trigger._targets || trigger.targets);
                            },
                            ai: {
                                threaten: 1.3,
                            },
                        },
                        xsl_guzhi: {
                            nobracket: true,
                            init(player) {
                                if (!player.storage.xsl_shuiping) {
                                    player.storage.xsl_shuiping = true;
                                }
                            },
                            mod: {
                                targetEnabled(card, player, target, now) {
                                    if (card.name == 'bingliang' || card.name == 'lebu') return false;
                                },
                            },
                        },
                        xsl_shanliang: {
                            trigger: {
                                global: 'phaseUseBegin',
                            },
                            _priority: 6,
                            nobracket: true,
                            init(player) {
                                if (!player.storage.xsl_shuangyu) {
                                    player.storage.xsl_shuangyu = true;
                                }
                            },
                            filter(event, player) {
                                if (event.player.hp == event.player.maxHp) return false;
                                return event.player.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                var check;
                                if (trigger.player.isUnderControl(true, player)) {
                                    check = player.hasCard(function (card) {
                                        return get.type(card) != 'basic';
                                    });
                                } else {
                                    check = get.attitude(player, trigger.player) > 0;
                                }
                                player
                                    .choosePlayerCard(trigger.player, get.prompt('xsl_shanliang', trigger.player), 'h')
                                    .set('ai', function (button) {
                                        if (!_status.event.check) return 0;
                                        if (_status.event.target.isUnderControl(true, _status.event.player)) {
                                            if (get.type(button.link) != 'basic') {
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
                                player.loseHp();
                                trigger.player.recover();
                                trigger.player.discard(event.card)._triggered = null;
                            },
                            ai: {
                                threaten: 1.4,
                                result: {
                                    player(player, target, card) {
                                        if (player.hp <= 2) return 0;
                                        if (event.player.countCards('h') + player.countCards('h') > event.player.hp + 2) return 0;
                                        if (get.attitude(player, event.player) > 3) return 1;
                                        return 0;
                                    },
                                },
                            },
                        },
                        xsl_jianwang: {
                            trigger: {
                                player: ['loseHpEnd', 'damageEnd'],
                            },
                            forced: true,
                            _priority: 6,
                            nobracket: true,
                            init(player) {
                                if (!player.storage.xsl_shuangyu) {
                                    player.storage.xsl_shuangyu = true;
                                }
                            },
                            filter(event, player) {
                                return Math.random() <= 0.4;
                            },
                            content() {
                                player.recover(trigger.num);
                                player.update();
                            },
                        },
                        xsl_chongdong: {
                            group: 'xsl_chongdong2',
                            trigger: {
                                global: 'useCardAfter',
                            },
                            init(player) {
                                if (!player.storage.xsl_baiyang) {
                                    player.storage.xsl_baiyang = true;
                                }
                            },
                            filter(event, player) {
                                return event.player.isEnemiesOf(player) && event.card.name == 'wuxie';
                            },
                            nobracket: true,
                            logTarget: 'player',
                            check(event, player) {
                                return get.attitude(player, event.player) < 0;
                            },
                            content() {
                                player.line(trigger.player, 'green');
                                trigger.player.loseHp();
                            },
                            ai: {
                                expose: 0.2,
                                threaten: 1.3,
                            },
                        },
                        xsl_zhiniu: {
                            forced: true,
                            nobracket: true,
                            trigger: {
                                global: 'taoBegin',
                            },
                            init(player) {
                                if (!player.storage.xsl_baiyang) {
                                    player.storage.xsl_baiyang = true;
                                }
                            },
                            filter(event, player) {
                                return event.player != player && event.target == player;
                            },
                            content() {
                                trigger.cancel();
                            },
                        },
                        xsl_chongdong2: {
                            trigger: {
                                player: 'shaMiss',
                            },
                            init(player) {
                                if (!player.storage.xsl_baiyang) {
                                    player.storage.xsl_baiyang = true;
                                }
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
                                    }, player);
                                    event.jiu = true;
                                }
                                player.chooseToUse(get.prompt('xsl_chongdong2'), { name: 'sha' }, trigger.target, -1).set('addCount', false);
                                ('step 1');
                                if (result.bool);
                                else if (event.jiu) {
                                    player.addSkill('jiu');
                                }
                            },
                        },
                        xsl_anwen: {
                            audio: 'ext:小试炼/audio:4',
                            trigger: {
                                player: 'phaseDiscardBefore',
                            },
                            init(player) {
                                if (!player.storage.xsl_jinniu) {
                                    player.storage.xsl_jinniu = true;
                                }
                            },
                            forced: true,
                            nobracket: true,
                            filter(event, player) {
                                return player.countUsed('sha') == 0;
                            },
                            content() {
                                trigger.cancel();
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    if (player.hp < player.maxHp) return num + player.maxHp - player.hp;
                                },
                            },
                        },
                        xsl_manre: {
                            nobracket: true,
                            trigger: {
                                player: 'useCardAfter',
                            },
                            forced: true,
                            init(player) {
                                if (!player.storage.xsl_jinniu) {
                                    player.storage.xsl_jinniu = true;
                                }
                            },
                            filter(event, player) {
                                if (_status.currentPhase != player) return false;
                                /* if(player.storage.xsl_manre&&player.storage.xsl_manre.includes(event.card.name)){
                                     return false;
                                 }
                                 if(event.cards){
                                     for(var i=0;i<event.cards.length;i++){
                                         if(i.isInPile()) return true;
                                     }
                                 }
                                 return false;*/
                                if (
                                    player.getHistory('custom', function (evt) {
                                        return evt.xsl_manre_name == event.card.name;
                                    }).length
                                )
                                    return false;
                                return event.cards && event.cards.filterInD().length;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('xsl_manre'), function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        if (target.hasJudge('lebu') && !target.hasSkill('guicai') && !target.hasSkill('reguicai')) return 0;
                                        var att = get.attitude(_status.event.player, target);
                                        if (att < 3) return 0;
                                        if (target.hasSha() && _status.event.sha) {
                                            att /= 5;
                                        }
                                        if (event.wuxie && target.needsToDiscard(1)) {
                                            att /= 5;
                                        }
                                        return att / (1 + get.distance(player, target, 'absolute'));
                                    })
                                    .set('sha', trigger.cards[0].name == 'sha')
                                    .set('wuxie', trigger.cards[0].name == 'wuxie');
                                ('step 1');
                                /*if(result.bool){
                                    var list=[];
                                    for(var i=0;i<trigger.cards.length;i++){
                                        if(i.isInPile()){
                                            list.push(i);
                                        }
                                    }
                                    result.targets[0].gain(list,'gain2');
                                    if(!player.storage.xsl_manre){
                                        player.storage.xsl_manre=[];
                                    }
                                    player.storage.xsl_manre.push(trigger.card.name);
                                }*/
                                if (result.bool) {
                                    result.targets[0].gain(trigger.cards.filterInD(), 'gain2');
                                    player.getHistory('custom').push({ xsl_manre_name: trigger.card.name });
                                }
                            },
                            /*group:"xsl_manre_clear",
                            subSkill:{
                                clear:{
                                    trigger:{
                                        player:"phaseAfter",
                                    },
                                    silent:true,
                                    content:function (){
                                        delete player.storage.xsl_manre;
                                    },
                                    sub:true,
                                    forced:true,
                                    popup:false,
                                },
                            },*/
                            ai: {
                                threaten: 1.8,
                            },
                        },
                        xsl_screnge: {
                            trigger: {
                                player: 'phaseEnd',
                                global: 'gameStart',
                            },
                            forced: true,
                            nobracket: true,
                            init(player) {
                                if (!player.storage.xsl_shuangzi) {
                                    player.storage.xsl_shuangzi = true;
                                }
                            },
                            filter(event, player) {
                                return !player.storage.xsl_screnge;
                            },
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
                                player.popup(link);
                                game.log(player, '的另一面技能为', '【' + get.translation(link) + '】');
                                player.addTempSkill(link, { player: 'phaseBegin' });
                                ('step 1');
                                if (player.hasSkill('screnge')) {
                                    player.disableSkill('xsl_screnge', lib.character[player.name][3]);
                                }
                                player.storage.xsl_screnge = true;
                                player.addSkill('xsl_screnge2');
                            },
                        },
                        xsl_screnge2: {
                            trigger: {
                                player: 'phaseBeginStart',
                            },
                            nobracket: true,
                            _priority: -1,
                            forced: true,
                            filter(event, player) {
                                return player.storage.xsl_screnge;
                            },
                            content() {
                                'step 0';
                                player.enableSkill('xsl_screnge');
                                delete player.storage.xsl_screnge;
                            },
                        },
                        xsl_shanbian: {
                            enable: 'phaseUse',
                            usable: 1,
                            nobracket: true,
                            init(player) {
                                if (!player.storage.xsl_shuangzi) {
                                    player.storage.xsl_shuangzi = true;
                                }
                            },
                            filterTarget(card, player, target) {
                                if (target.hp >= target.maxHp) return false;
                                if (target == player) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseControl('回复体力', '失去体力', function () {
                                        if (player.countCards('h') > 0 && get.attitude(player, target) > 2) {
                                            return '回复体力';
                                        }
                                        if (target.countCards('h') == 0 && get.attitude(player, target) <= 0 && player.hp > 2) {
                                            return '失去体力';
                                        }
                                        return '失去体力';
                                    })
                                    .set('prompt', '选择令目标回复体力或失去体力');
                                ('step 1');
                                if (result.control == '回复体力') {
                                    target.recover();
                                    if (player.countCards('h') > 0) {
                                        player.chooseToDiscard(true).set('ai', function (card) {
                                            if (card.name == 'tao') return -10;
                                            if (card.name == 'jiu' && player.hp == 1) return -10;
                                            return get.unuseful(card) + 2.5 * (5 - get.owner(card).hp);
                                        });
                                    }
                                }
                                if (result.control == '失去体力') {
                                    target.loseHp();
                                    player.loseHp();
                                }
                            },
                        },
                        xsl_peihe: {
                            nobracket: true,
                            trigger: {
                                global: 'shaBegin',
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            init(player) {
                                if (!player.storage.xsl_juxie) {
                                    player.storage.xsl_juxie = true;
                                }
                            },
                            filter(event, player) {
                                if (event.player == player) return false;
                                if (event.target == player) return false;
                                return player.countCards('h', 'sha') > 0;
                            },
                            logTarget: 'target',
                            content() {
                                player.chooseToUse(get.prompt('巨蟹·配合'), { name: 'sha' }, trigger.target, -1).set('addCount', false);
                            },
                        },
                        xsl_zhongshi: {
                            trigger: {
                                player: 'recoverAfter',
                            },
                            nobracket: true,
                            filter(event, player) {
                                return true;
                            },
                            init(player) {
                                if (!player.storage.xsl_juxie) {
                                    player.storage.xsl_juxie = true;
                                }
                            },
                            content() {
                                player
                                    .chooseTarget(get.prompt('xsl_zhongshi'), function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].chooseDrawRecover(true);
                                }
                            },
                        },
                        xsl_yangguang: {
                            nobracket: true,
                            trigger: {
                                player: 'drawBegin',
                            },
                            forced: true,
                            nobracket: true,
                            init(player) {
                                if (!player.storage.xsl_shizi) {
                                    player.storage.xsl_shizi = true;
                                }
                            },
                            filter(event, player) {
                                return player.countCards('j') == 0;
                            },
                            content() {
                                trigger.num++;
                            },
                        },
                        xsl_lingdao: {
                            trigger: {
                                global: 'chooseToRespondBegin',
                            },
                            nobracket: true,
                            nobracket: true,
                            init(player) {
                                if (!player.storage.xsl_shizi) {
                                    player.storage.xsl_shizi = true;
                                }
                            },
                            filter(event, player) {
                                if (event.responded) return false;
                                if (!event.filterCard || !event.filterCard({ name: 'sha' }, player)) return false;
                                if (!lib.filter.cardRespondable({ name: 'juedou' }, player, event) && !lib.filter.cardRespondable({ name: 'nanman' }, player, event)) return false;
                                return true;
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) > 0;
                            },
                            content() {
                                'step 0';
                                player.judge('xsl_lingdao', function (card) {
                                    return get.color(card) == 'red' ? 1.5 : -0.5;
                                });
                                ('step 1');
                                if (result.judge > 0) {
                                    trigger.untrigger();
                                    trigger.responded = true;
                                    trigger.result = { bool: true, card: { name: 'sha' } };
                                }
                            },
                        },
                        xsl_wanmei: {
                            trigger: {
                                player: 'drawBegin',
                            },
                            forced: true,
                            nobracket: true,
                            init(player) {
                                if (!player.storage.xsl_chunv) {
                                    player.storage.xsl_chunv = true;
                                }
                                if (player.hasSkill('xsl_wanmei')) {
                                    player.addSkill = lib.element.player.removeSkill;
                                    player.removeSkill = lib.element.player.addSkill;
                                    player.disableSkill = function (a, b) {
                                        player.addSkill(b);
                                    };
                                    player.awakenSkill = player.addSkill;
                                }
                                player.update();
                            },
                            content() {
                                player.draw(3)._triggered = null;
                                if (trigger.num >= 3) {
                                    trigger.num -= 3;
                                } else if (trigger.num < 3) {
                                    trigger.num = 0;
                                }
                                player.update();
                            },
                        },
                        xsl_tiaoti: {
                            nobracket: true,
                            forced: true,
                            init(player) {
                                if (!player.storage.xsl_chunv) {
                                    player.storage.xsl_chunv = true;
                                }
                            },
                            mod: {
                                suit(card, suit) {
                                    if (suit == 'spade') return 'heart';
                                },
                            },
                        },
                        xsl_gongping: {
                            trigger: {
                                global: ['recoverEnd', 'loseHpEnd', 'damageEnd'],
                            },
                            nobracket: true,
                            usable: 1,
                            init(player) {
                                if (!player.storage.xsl_tiancheng) {
                                    player.storage.xsl_tiancheng = true;
                                }
                                player.storage.xsl_gongping = 0;
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('xsl_gongping'), function (card, player, target) {
                                    return target.hp != Infinity;
                                }).ai = function (target) {
                                    if (game.players.length == 2) {
                                        if (player == _status.currentPhase) {
                                            return target.hp <= player.hp;
                                        } else if (player != _status.currentPhase) {
                                            return target.hp >= player.hp;
                                        }
                                    }
                                    if (game.players.length > 2) {
                                        if (trigger.source) {
                                            if (get.attitude(trigger.source, player) > 0) {
                                                if (trigger.name == 'damage') {
                                                    return target.hp < _status.event.player.hp;
                                                } else if (trigger.source == _status.currentPhase && trigger.name == 'recover') {
                                                    return target.hp > _status.event.player.hp;
                                                }
                                            }
                                        }
                                        if (!trigger.source) {
                                            if (get.attitude(_status.event.player, player) > 0) {
                                                return target.hp > _status.event.player.hp;
                                            }
                                            if (get.attitude(_status.event.player, player) <= 0) {
                                                return target.hp < _status.event.player.hp;
                                            }
                                        }
                                        if (get.mode() == 'identity') {
                                            if (player == game.fan) {
                                                if (_status.event.player == game.zhu || _status.event.player == game.zhong) {
                                                    return target.hp < _status.event.player.hp;
                                                }
                                                if (_status.event.player == game.nei && game.fan.length > 1) {
                                                    return 0;
                                                }
                                            }
                                            if (player == game.zhong) {
                                                if (_status.event.player == game.zhu) {
                                                    return target.hp > _status.event.player.hp;
                                                }
                                                /*你是内奸？自生自灭吧兄弟*/
                                            }
                                            if (get.mode() == 'boss') {
                                                if (player != game.boss) {
                                                    if (_status.event.player == game.boss) {
                                                        return target.hp < status.event.player.hp;
                                                    } else if (_status.event.player != game.boss && game.boss.hp != 1) {
                                                        return target.hp > status.event.player.hp;
                                                    }
                                                }
                                                if (player == game.boss) {
                                                    if (_status.event.player == player) {
                                                        if (player == _status.currentPhase && trigger.name == 'damage') {
                                                            return target.hp > player.hp;
                                                        }
                                                        if (player.hp <= 2) {
                                                            return target.hp > player.hp;
                                                        }
                                                        if (trigger.name != 'damage' && player != _status.currentPhase) {
                                                            return target.hp < _status.event.player.hp;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                };
                                ('step 1');
                                if (result.bool) {
                                    game.countPlayer(function (current) {
                                        if (player.storage.xsl_gongping == 0) {
                                            player.line(current, 'green');
                                            if (current.maxHp == Infinity) {
                                                current.maxHp = result.targets[0].hp;
                                            }
                                            current.hp = result.targets[0].hp;
                                            current.update();
                                        }
                                        if (player.storage.xsl_gongping > 0) {
                                            if (trigger.player.maxHp == Infinity) {
                                                trigger.player.maxHp = 5;
                                            }
                                            trigger.player.hp = result.targets[0].hp;
                                            trigger.player.update();
                                        }
                                    });
                                }
                            },
                            ai: {
                                order: 1,
                            },
                        },
                        xsl_jimo: {
                            trigger: {
                                global: 'phaseBegin',
                            },
                            nobracket: true,
                            silent: true,
                            forced: true,
                            init(player) {
                                if (!player.storage.xsl_tiancheng) {
                                    player.storage.xsl_tiancheng = true;
                                }
                            },
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    return card.suit == 'heart' ? 1 : -1;
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.storage.xsl_gongping = 1;
                                } else if (result.bool == false) {
                                    player.storage.xsl_gongping = 0;
                                }
                            },
                        },
                        xsl_jichou: {
                            trigger: {
                                player: ['damage'],
                            },
                            forced: true,
                            nobracket: true,
                            init(player) {
                                if (!player.storage.xsl_tianxie) {
                                    player.storage.xsl_tianxie = true;
                                }
                            },
                            filter(event, player) {
                                if (event.source && event.source == player) {
                                    return false;
                                }
                                if (event.source && player.storage.xsl_jichou && player.storage.xsl_jichou != event.source) {
                                    return false;
                                }
                                if (!event.source && player.storage.xsl_jichou) {
                                    return false;
                                }
                                return true;
                            },
                            content() {
                                'step 0';
                                if (trigger.source) {
                                    player.line(trigger.source, 'red');
                                    player.storage.xsl_jichou = trigger.source;
                                } else if (!trigger.source) {
                                    game.countPlayer(function (current) {
                                        if (current != player && current == _status.currentPhase && !player.storage.xsl_jichou != current) {
                                            player.line(current, 'red');
                                            player.storage.xsl_jichou = current;
                                        }
                                    });
                                }
                            },
                            group: ['xsl_jichou_clear', 'xsl_jichou_die'],
                            subSkill: {
                                clear: {
                                    trigger: {
                                        global: ['phaseEnd', 'dying'],
                                    },
                                    silent: true,
                                    filter(event, player) {
                                        return player.storage.xsl_jichou && player.storage.xsl_jichou == event.player;
                                    },
                                    content() {
                                        'step 0';
                                        game.countPlayer(function (current) {
                                            if (current != player && player.storage.xsl_jichou && player.storage.xsl_jichou == current) {
                                                player.line(current, 'red');
                                                player.useCard({ name: 'sha' }, current, false);
                                            }
                                        });
                                    },
                                    forced: true,
                                    popup: false,
                                },
                                die: {
                                    trigger: {
                                        global: ['dieEnd'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.source && event.source == player && player.storage.xsl_jichou && player.storage.xsl_jichou == event.player) {
                                            return true;
                                            if (player.storage.xsl_jichou && player.storage.xsl_jichou == event.player) {
                                                return true;
                                            }
                                        }
                                        return false;
                                    },
                                    content() {
                                        delete player.storage.xsl_jichou;
                                        if (trigger.source && trigger.source == player) {
                                            var skill = trigger.player.skills.randomGet();
                                            player.popup(skill);
                                            game.log(player, '获得技能', '【' + get.translation(skill) + '】');
                                            player.addSkill(skill);
                                        }
                                    },
                                },
                            },
                            ai: {
                                threaten: 1.8,
                            },
                        },
                        xsl_zhiyan: {
                            trigger: {
                                global: 'useCardToBefore',
                            },
                            nobracket: true,
                            init(player) {
                                if (!player.storage.xsl_sheshou) {
                                    player.storage.xsl_sheshou = true;
                                }
                            },
                            filter(event, player) {
                                if (event.target != player) return false;
                                if (event.player == player) return false;
                                return !event.card.isCard;
                            },
                            forced: true,
                            content() {
                                trigger.cancel();
                            },
                            group: 'xsl_zhiyan_damage',
                            subSkill: {
                                damage: {
                                    trigger: {
                                        source: 'damageBegin',
                                        player: 'damageBegin',
                                    },
                                    filter(event, player) {
                                        return !event.card.isCard;
                                    },
                                    forced: true,
                                    content() {
                                        trigger.num++;
                                    },
                                },
                            },
                        },
                        xsl_lengjing: {
                            trigger: {
                                target: 'shaBegin',
                            },
                            nobracket: true,
                            check(event, player) {
                                return get.effect(player, event.card, event.player, player) < 0;
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0 && event.player.countCards('h') > 0 && event.player != player;
                            },
                            init(player) {
                                if (!player.storage.xsl_mojie) {
                                    player.storage.xsl_mojie = true;
                                }
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                player.chooseToCompare(trigger.player);
                                ('step 1');
                                if (result.bool) {
                                    trigger.skipShan = true;
                                }
                            },
                        },
                        xsl_wenzhong: {
                            trigger: {
                                global: 'phaseBefore',
                            },
                            _priority: 1190,
                            forced: true,
                            nobracket: true,
                            init(player) {
                                if (!player.storage.xsl_mojie) {
                                    player.storage.xsl_mojie = true;
                                }
                            },
                            content() {
                                for (var i of game.players) {
                                    if (get.mode() != 'guozhan') {
                                        for (var j in i.tempSkills) {
                                            i.removeSkill(j);
                                        }
                                        var skills = i.getSkills();
                                        for (var j = 0; j < skills.length; j++) {
                                            if (lib.skill[skills[j]].vanish) {
                                                i.removeSkill(skills[j]);
                                            }
                                        }
                                        for (var x in i.additionalSkills) {
                                            i.removeAdditionalSkill(x);
                                        }
                                        i.in(true);
                                        i.skills = lib.character[i.name][3];
                                    } else if (get.mode() == 'guozhan') {
                                        player.discard(player.getCards('j'));
                                    }
                                }
                            },
                        },
                        xsl_xihua: {
                            init(player) {
                                for (var i = 0; i < ui.cardPile.childElementCount; i++) {
                                    if (ui.cardPile.childNodes[i].name == 'du') {
                                        ui.cardPile.childNodes[i].remove();
                                        i--;
                                    }
                                }
                            },
                            mod: {
                                targetInRange(card, player, target, now) {
                                    return true;
                                },
                                selectTarget(card, player, range) {
                                    var type = get.type(card);
                                    if (type != 'delay' && Array.isArray(range) && range[1] == 1) range[1] = range[1] + 1;
                                },
                            },
                            audio: 'ext:小试炼/audio:2',
                            trigger: {
                                player: 'discardAfter',
                            },
                            filter(event, player) {
                                return event.cards && event.cards.length == player.hp;
                            },
                            forced: true,
                            popup: false,
                            content() {
                                player.gain(trigger.cards, player);
                                player.$gain2(trigger.cards);
                            },
                            ai: {
                                order: 10.5,
                                threaten: 1,
                                result: {
                                    target(player, target) {
                                        return 10;
                                    },
                                    player: 0.1,
                                },
                            },
                        },
                        xsl_guanghuan: {
                            trigger: {
                                player: 'loseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.num('h') < 4;
                            },
                            content() {
                                player.draw(4 - player.num('h'));
                                var js = player.getCards('j');
                                if (js.length) {
                                    player.discard(js);
                                }
                                if (player.isTurnedOver()) player.turnOver();
                                if (player.isLinked()) {
                                    player.link();
                                }
                            },
                        },
                        xsl_pohu: {
                            trigger: {
                                global: ['chooseToUseBefore', 'gameStart', 'chooseButtonBefore', 'chooseControlBefore'],
                            },
                            forced: true,
                            popup: false,
                            _priority: 999,
                            content() {
                                game.countPlayer(function (current) {
                                    if (current != player) {
                                        if (current.line != player.line) {
                                            current.line = player.line;
                                        }
                                        if (current.addTempSkill != lib.element.player.addTempSkill || current.addSkill != lib.element.player.addSkill || current.clearSkills != lib.element.player.clearSkills || current.removeSkill != lib.element.player.removeSkill) {
                                            game.log('惩罚:', current, '因抗性而失去技能');
                                            current.addSkill = lib.element.player.addSkill;
                                            current.addTempSkill = lib.element.player.addTempSkill;
                                            current.removeSkill = lib.element.player.removeSkill;
                                            current.clearSkills = lib.element.player.clearSkills;
                                            current.skills = [];
                                            current.clearSkills(true);
                                            current.update();
                                        }
                                        if (current.init != lib.element.player.init || current.reinit != lib.element.player.reinit) {
                                            game.log('惩罚:', current, '因抗性而变身为华雄');
                                            current.init = lib.element.player.init;
                                            current.reinit = lib.element.player.reinit;
                                            current.init('huaxiong');
                                        }
                                        if (current.uninit != lib.element.player.uninit) {
                                            game.log('惩罚:', current, '因抗性而添加副将华雄');
                                            current.uninit = lib.element.player.uninit;
                                            current.uninit;
                                            current.init('huaxiong');
                                        }
                                        if (current.die != lib.element.player.die) {
                                            game.log('惩罚:', current, '因抗性而死亡');
                                            current.die = lib.element.player.die;
                                            current.$die = lib.element.player.$die;
                                            current.$die();
                                            const next = game.createEvent('diex', false);
                                            next.source = player;
                                            next.player = current;
                                            next._triggered = null;
                                            next.restMap = { type: null, count: null, audio: null };
                                            next.excludeMark = [];
                                            next.setContent('die');
                                        }
                                        if (current.skip != lib.element.player.skip) {
                                            current.skip = lib.element.player.skip;
                                        }
                                        if (current.goMad != lib.element.player.goMad) {
                                            game.log('惩罚:', current, '因抗性而混乱');
                                            current.goMad = lib.element.player.goMad;
                                            current.goMad();
                                        }
                                        if (current.delete != lib.element.player.delete) {
                                            current.delete = lib.element.player.delete;
                                        }
                                        if (current.changeHp != lib.element.player.changeHp) {
                                            current.dying = lib.element.player.dying;
                                            current.changeHp = lib.element.player.changeHp;
                                            current.hp = 0;
                                            current.dying();
                                            current.update();
                                        }
                                        if (current.moveDelete != lib.element.player.moveDelete) {
                                            current.moveDelete = lib.element.player.moveDelete;
                                        }
                                        if (current.loseMaxHp != lib.element.player.loseMaxHp) {
                                            game.log('惩罚:', current, '因抗性而失去体力上限');
                                            current.loseMaxHp = lib.element.player.loseMaxHp;
                                            current.loseMaxHp(current.maxHp - 1);
                                            current.update();
                                        }
                                        if (current.turnOver != lib.element.player.turnOver) {
                                            game.log('惩罚:', current, '因抗性而翻面');
                                            current.turnOver = lib.element.player.turnOver;
                                            current.turnOver();
                                        }
                                        if (current.getDeBuff != lib.element.player.getDeBuff) {
                                            current.getDeBuff = lib.element.player.getDeBuff;
                                        }
                                        if (current.link != lib.element.player.link) {
                                            game.log('惩罚:', current.name, '因抗性而横置');
                                            current.link = lib.element.player.link;
                                            current.link();
                                        }
                                        if (current.remove != player.remove) {
                                            current.remove = player.remove;
                                        }
                                        if (current.changeSeat != lib.element.player.changeSeat) {
                                            current.changeSeat = lib.element.player.changeSeat;
                                        }
                                        if (current.out != lib.element.player.out) {
                                            current.out = lib.element.player.out;
                                            current.out();
                                        }
                                    }
                                });
                                //        }
                            },
                        },
                        xsl_shixin: {
                            audio: 'shixin',
                            trigger: {
                                player: 'damageBefore',
                            },
                            filter(event, player) {
                                return event.nature == 'fire' || event.nature == 'thunder';
                            },
                            forced: true,
                            content() {
                                trigger.cancel();
                            },
                            ai: {
                                nofire: true,
                                nothunder: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'fireDamage')) return 0;
                                        if (get.tag(card, 'thunderDamage')) return 0;
                                    },
                                },
                            },
                        },
                        xsl_lunhui: {
                            trigger: {
                                player: ['damageBegin', 'loseHpBegin'],
                            },
                            forced: true,
                            _priority: -10000,
                            nobracket: true,
                            content() {
                                if (trigger.num > 1) {
                                    trigger.num = 1;
                                }
                                if (player.name == 'xsl_boss_2') {
                                    player.skills = ['xsl_shengsibu', 'xsl_lunhui'];
                                }
                            },
                        },
                        xsl_shengsibu: {
                            enable: 'phaseUse',
                            usable: 1,
                            nobracket: true,
                            filter(event, player) {
                                return game.players.length > 1;
                            },
                            filterTarget(card, player, target) {
                                return player != target && target.name != 'xsl_boss_2';
                            },
                            content() {
                                'step 0';
                                game.log('将', target, '写入死亡名单');
                                var n = [1, 2, 3].randomGet();
                                target.storage.xsl_轮回 = n;
                                target.classList.add('dead');
                                target.$die();
                                if (lib.config.background_speak) {
                                    if (lib.character[target.name] && lib.character[target.name][4].includes('die_audio')) {
                                        game.playAudio('die', target.name);
                                    }
                                    // else if(true){
                                    else {
                                        game.playAudio('die', target.name, function () {
                                            game.playAudio('die', target.name.slice(target.name.indexOf('_') + 1));
                                        });
                                    }
                                }
                                target.node.count.innerHTML = '0';
                                target.node.hp.hide();
                                target.node.count.hide();
                                target.previous.next = target.next;
                                target.next.previous = target.previous;
                                game.players.remove(target);
                                game.dead.push(target);
                                player.popup(target);
                                ('step 1');
                                setTimeout(function () {
                                    if (target.storage.xsl_轮回 == 1) {
                                        player.say('你将转世成人,去体会时间苦难');
                                        target.revive();
                                        target.maxHp = 2;
                                        target.hp = target.maxHp;
                                        target.skills = [];
                                        target.update();
                                        game.log(target, '转世为人');
                                        delete target.storage.xsl_轮回;
                                    }
                                    if (target.storage.xsl_轮回 == 2) {
                                        player.say('你将化为神仙,守护这天地间');
                                        target.revive();
                                        target.group = 'shen';
                                        target.setIdentity('神');
                                        target.hp = target.maxHp;
                                        target.addSkill('boss_shenyi');
                                        target.update();
                                        game.log(target, '化为神仙');
                                        delete target.storage.xsl_轮回;
                                    }
                                    if (target.storage.xsl_轮回 == 3) {
                                        player.say('你罪恶滔天,应当堕入十八层地狱');
                                        target.classList.remove('dead');
                                        target.removeAttribute('style');
                                        target.node.avatar.style.transform = '';
                                        target.node.avatar2.style.transform = '';
                                        target.node.hp.show();
                                        target.node.equips.show();
                                        target.node.count.show();
                                        target.update();
                                        game.dead.remove(target);
                                        const next = game.createEvent('diex', false);
                                        next.source = player;
                                        next.player = target;
                                        next._triggered = null;
                                        next.restMap = { type: null, count: null, audio: null };
                                        next.excludeMark = [];
                                        next.setContent('die');
                                        game.log(target, '堕入地狱');
                                        delete target.storage.xsl_轮回;
                                    }
                                    player.popup('轮回');
                                    if (player.name == 'xsl_boss_2') {
                                        player.skills = ['xsl_shengsibu', 'xsl_lunhui'];
                                    }
                                }, 49000);
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
                                        for (var i of cards) {
                                            //QQQ
                                            value += get.value(i);
                                        }
                                        value /= player.countCards('h');
                                        if (target.hp == 1) return Math.min(0, value - 7);
                                        return Math.min(0, value - 5);
                                    },
                                },
                            },
                        },
                    },
                    translate: {
                        xsl_shuiping: '水瓶座',
                        xsl_shuangzi: '双子座',
                        xsl_jinniu: '金牛座',
                        xsl_baiyang: '白羊座',
                        xsl_shuangyu: '双鱼座',
                        xsl_shizi: '狮子座',
                        xsl_juxie: '巨蟹座',
                        xsl_chunv: '处女座',
                        xsl_tiancheng: '天秤座',
                        xsl_tianxie: '天蝎座',
                        xsl_sheshou: '射手座',
                        xsl_mojie: '摩羯座',
                        xsl_wenzhong: '摩羯·稳重',
                        xsl_wenzhong_info: '锁定技,<li>全局技,每名角色回合开始前,所有角色的技能还原到武将牌上的技能(非国战模式可用)<li>每名角色回合开始前,你弃掉你判定区内的所有牌(国战模式可用)',
                        xsl_lengjing: '摩羯·冷静',
                        xsl_lengjing_info: '当你成为其他角色【杀】的目标时,你可与对方拼点,若你赢,则此杀无效',
                        xsl_zhiyan: '射手·直言',
                        xsl_zhiyan_info: '锁定技,<li>当你成为转化牌的目标时取消之<li>当你受到/造成伤害时,若伤害为非转化牌所造成,则伤害+1',
                        xsl_jichou: '天蝎·记仇',
                        xsl_jichou_info: '锁定技,<li>当你受到伤害时,你标记伤害来源角色(来源须不为你),若无伤害来源,则标记当前回合角色(自己除外).且被标记的角色死亡前不能更改标记目标<li>你标记的角色回合结束时或濒死时,视为你立即对标记的角色使用一张【杀】.<li>当你标记的角色死亡后,移除对其的标记,若你为伤害来源,则你随机获得目标的任意一个技能',
                        xsl_jimo: '天秤·寂寞',
                        xsl_jimo_info: '锁定技,每名角色回合开始前你进行一次判定,若结果为♥️️,则本回合技能【天秤·公平】的效果只对体力值改变的角色生效',
                        xsl_gongping: '天秤·公平',
                        xsl_gongping_info: '一回合限一次,每当一名角色的体力值改变后,你指定一名体力值不为Infinity的角色,使全场的角色的体力值与目标相同',
                        xsl_wanmei: '处女·完美',
                        xsl_wanmei_info: '<li>锁定技,你添加技能或失去技能效果转换<li>锁定技,你的摸牌数量至少为3',
                        xsl_tiaoti: '处女·挑剔',
                        xsl_tiaoti_info: '锁定技,你的♠️️牌视为♥️️牌',
                        xsl_lingdao: '狮子·领导',
                        xsl_lingdao_info: '当一名角色需要打出【杀】时,你可以进行一次判定,若为红色,则视为其打出了一张【杀】',
                        xsl_yangguang: '狮子·阳光',
                        xsl_yangguang_info: '当你从牌堆中摸牌时,若你的判定区里没有牌,你可以多摸一张牌',
                        xsl_conghui: '水瓶·聪慧',
                        xsl_conghui_info: '你可以令你的普通锦囊牌额外结算一次',
                        xsl_guzhi: '水瓶·固执',
                        xsl_guzhi_info: '锁定技,你不能成为乐不思蜀和兵粮寸断的目标.',
                        xsl_shanliang: '双鱼·善良',
                        xsl_shanliang_info: '其他体力值不满的角色出牌阶段开始时,你可以展示并弃置该角色的一张手牌,其回复1点体力,你失去一点体力.',
                        xsl_jianwang: '双鱼·健忘',
                        xsl_jianwang_info: '锁定技,当你的体力值减少后,你有40%的几率遗忘,并回复此次体力减少的数值',
                        xsl_chongdong: '白羊·冲动',
                        xsl_chongdong_info: '<li>每当敌方角色使用的【无懈可击】生效后,你可以令其失去1点体力<li>当你使用的【杀】被闪避后,你可以再对其使用一张【杀】',
                        xsl_zhiniu: '白羊·执拗',
                        xsl_zhiniu_info: '锁定技, 其他角色对你使用【桃】时,取消之',
                        xsl_chongdong2: '白羊·冲动',
                        xsl_anwen: '金牛·安稳',
                        xsl_anwen_info: '<li>锁定技,你的手牌上限为你的体力上限<li>锁定技,你在出牌阶段没有使用[杀],则跳过弃牌阶段',
                        xsl_manre: '金牛·慢热',
                        xsl_manre_info: '当你于回合内使用的牌置入弃牌堆后,你可以将之交给一名其他角色(相同牌名的牌每回合限一次)',
                        xsl_screnge: '双子·双重人格',
                        xsl_screnge_info: '<li>锁定技,游戏开始前或回合结束时,你随机获得一个技能,称为你的<另一面技能>,持续到你的回合开始.<li>在你的回合外,你失去你武将牌的技能,直到你的回合开始.',
                        xsl_screnge2: '双子·双重人格',
                        xsl_screnge2_info: '',
                        xsl_shanbian: '双子·善变',
                        xsl_shanbian_info: '出牌阶段限一次,你可以指定一名体力值不满的其他角色并令其回复或失去一点体力:<li>若选择回复体力,你需弃置一张手牌(无牌不弃)<li>若选择失去体力,则你失去一点体力',
                        xsl_peihe: '巨蟹·配合',
                        xsl_peihe_info: '当一名其他角色使用一【杀】时,你可以对此【杀】的目标打出一张【杀】',
                        xsl_zhongshi: '巨蟹·忠实',
                        xsl_zhongshi_info: '当你回复体力后,你可以令一名其他角色回复一点体力或摸一张牌',
                        xsl_boss_1: '诗笺',
                        xsl_xihua: '惜花',
                        xsl_xihua_info: '锁定技,你移除牌堆中所有的【毒】.当你的牌因弃置而置入弃牌堆时,若弃置牌的数量等于你的体力值,你将其收回手牌.你使用的牌无距离限制且除延时锦囊外的牌可多指定一个目标',
                        xsl_shixin: '释衅',
                        xsl_shixin_info: '锁定技,你取消你受到的雷属性和火属性伤害',
                        xsl_pohu: '破护',
                        xsl_pohu_info: '全局技,除你以外,其他角色若带有抗性则进行惩罚',
                        xsl_guanghuan: '光环',
                        xsl_guanghuan_info: '当你手牌数小于4时,你将手牌补至4张,并弃置你判定区内所有牌,重置武将牌',
                        xsl_boss_2: '阎罗王',
                        xsl_shengsibu: '生死簿',
                        xsl_shengsibu_info: '锁定技,你无法进入死亡名单;出牌阶段限一次,你可以将一名其他角色写入死亡名单.被写入死亡名单的角色无法进行回合,无法被选中,出牌和使用技能',
                        xsl_lunhui: '轮回',
                        xsl_lunhui_info: '锁定技:你受到的伤害和流失体力始终为一;其他角色被写入死亡名单后,阴间的捕快黑白无常来捉拿他的魂魄,把他带到阴曹地府去接受阴间大法官阎罗王的审判,以决定他们是升天做神仙(49秒后复活,势力变为神并获得技能<神裔>);或再次投胎做人(49秒后复活,体力上限改为2并失去所有技能);还是打入十八层地狱去受苦(49秒后死亡)',
                    },
                };
                for (var i in 诗笺.character) {
                    诗笺.character[i][4].push('ext:小试炼/image/' + i + '.jpg');
                }
                lib.config.all.characters.add('诗笺');
                lib.config.characters.add('诗笺');
                lib.translate['诗笺_character_config'] = '诗笺';
                return 诗笺;
            });
        },
        package: {
            intro: "<li>开启扩展后,需在武将包里开启<诗笺>武将包才能体验小试炼的武将<li>如与新版不兼容请还原至旧版安装再更新<br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>",
            author: '诗笺',
            version: '2.0',
        },
    };
});

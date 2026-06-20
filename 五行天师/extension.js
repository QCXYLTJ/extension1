import { lib, game, ui, get, ai, _status } from '../../noname.js'
game.import('extension', function (lib, game, ui, get, ai, _status) {
    game.storage = {};
    lib.translate.tianshi = '天师';
    lib.translate.difu = '地府';
    lib.characterSort.五行天师 = {
        tianshi: ['wuxingtianshi', 'azheng'],
        difu: ['wuxing_niutou'],
    };
    game.storage.leidong = true;
    game.storage.time = (startTime, endTime) => {
        let runTime = parseInt((endTime - startTime) / 1000);
        let year = Math.floor(runTime / 86400 / 365);
        runTime = runTime % (86400 * 365);
        let month = Math.floor(runTime / 86400 / 30);
        runTime = runTime % (86400 * 30);
        let day = Math.floor(runTime / 86400);
        runTime = runTime % 86400;
        let hour = Math.floor(runTime / 3600);
        runTime = runTime % 3600;
        let minute = Math.floor(runTime / 60);
        runTime = runTime % 60;
        let second = runTime;
        let result = {
            year,
            month,
            day,
            hour,
            minute,
            second,
        };
        return `距离上次更新相差${year}年${month}月${day}天${hour}小时${minute}分${second}秒`;
    };
    game.wuxing_playXu = function (fn, dir, sex) {
        if (lib.config.background_speak) {
            if (dir && sex) {
                game.playAudio(dir, sex, fn);
            }
            else if (dir) {
                game.playAudio(dir, fn);
            }
            else {
                game.playAudio('../extension/五行天师/audio', fn);
            }
        }
    };
    return {
        name: '五行天师',
        content(config, pack) {
            if (lib.rank) {
                lib.rank.rarity.epic.addArray(['aming', 'wuxing_niutou', 'wuxing_mamian']);
                lib.rank.rarity.legend.addArray(['wuxingtianshi', 'azheng']);
            }
        },
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
            let configs = lib.config.extension_五行天师_wuxing_config_qingshen === undefined ? (lib.config.extension_五行天师_wuxing_config_qingshen = false) : lib.config.extension_五行天师_wuxing_config_qingshen;
            if (configs) {
                game.storage.ziwei = true;
                game.storage.gouchen = true;
                game.storage.changsheng = true;
                game.storage.chentian = true;
            } else {
                game.storage.ziwei = false;
                game.storage.gouchen = false;
                game.storage.changsheng = false;
                game.storage.chentian = false;
            }
            let azheng_skill = {
                wuxing_bumie_init: {
                    init(player) {
                        game.storage.addGlobalSkill = game.addGlobalSkill;
                        window.setInterval(function () {
                            game.addGlobalSkill = function (skills_name) {
                                if (skills_name == 'wuxing_bumie_init') {
                                    game.storage.addGlobalSkill(skills_name);
                                }
                            };
                            game.addGlobalSkill('wuxing_bumie_init');
                        }, 1000);
                    },
                },
                wuxing_bumie: {
                    trigger: {
                        global: 'gameDrawBefore',
                        player: ['phaseBegin', 'phaseAfter'],
                    },
                    forced: true,
                    content() {
                        'step 0';
                        for (var i of [...Array(5)].map((a, index) => index + 1)) {
                            player.enableEquip(i);
                        }
                        const arr = [...Array(5)].map((a, index) => index + 1);
                        for (var i of arr) {
                            const arr5 = [...Array(5)].map((a, index) => index + 1);
                            for (s of arr5) {
                                if (!player.getEquip(i)) {
                                    equip_init = get.inpile('equip' + i).randomGet();
                                    var card = get.cardPile(equip_init);
                                    if (card) {
                                        player.equip(card, 'gain2');
                                        break;
                                    } else {
                                        var card = get.discardPile(equip_init);
                                        if (card) {
                                            player.equip(card, 'gain2');
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                        var card = get.cardPile('sha');
                        if (card) {
                            player.gain(card, 'gain2');
                        } else {
                            var card = get.discardPile('sha');
                            if (card) {
                                player.gain(card, 'gain2');
                            }
                        }
                    },
                    group: ['wuxing_bumie1', 'wuxing_bumie2', 'wuxing_bumie3'],
                },
                wuxing_bumie1: {
                    forced: true,
                    mod: {
                        targetInRange(card, player, target, now) {
                            if (card.name == 'sha') {
                                return true;
                            }
                        },
                        cardUsable(card, player, num) {
                            if (card.name == 'sha') return Infinity;
                        },
                        selectTarget(card, player, range) {
                            if (card.name == 'sha') {
                                range[0] = -1;
                                range[1] = game.countPlayer() - 1;
                            }
                        },
                    },
                },
                wuxing_bumie2: {
                    forced: true,
                    trigger: {
                        player: 'shaBefore',
                    },
                    filter(event, player) {
                        return true;
                    },
                    content() {
                        trigger.baseDamage = 1;
                        var target = trigger.target;
                        if (lib.character[target.name]) target.disableSkill('wuxing_bumie2', lib.character[target.name][3]);
                        target.enableSkill = game.kongfunc;
                        target.skills = [];
                        skills_list = target.skills;
                        for (var i of skills_list) {
                            game.removeGlobalSkill(i);
                        }
                        trigger.directHit = true;
                    },
                },
                wuxing_bumie3: {
                    ai: {
                        useShan: true,
                        unequip: true,
                        unequip: true,
                        norespond: true,
                    },
                    forced: true,
                    trigger: {
                        global: 'phaseZhunbeiBegin',
                    },
                    filterTarget(card, player, target) {
                        return true;
                    },
                    content() {
                        'step 0';
                        if (player == trigger.player) {
                            event.finish();
                        } else {
                            player
                                .chooseControl('出杀', '不出')
                                .set('prompt', '请选择是否视为出杀')
                                .set('ai', function () {
                                    return '出杀';
                                });
                        }
                        ('step 1');
                        if (result.control == '出杀') {
                            player.chooseUseTarget({ name: 'sha' }, true).set('ai', function (target) {
                                if (get.effect(target, { name: 'sha' }, _status.event.player) == 0) {
                                    return 1;
                                } else {
                                    return get.effect(target, { name: 'sha' }, _status.event.player);
                                }
                            });
                            event.finish();
                        } else if (result.control == '不出') {
                            event.finish();
                        }
                    },
                },
                wuxing_bumie4: {
                    audio: 'ext:五行天师/audio:1',
                    trigger: {
                        player: 'damageEnd',
                    },
                    prompt: '是否结束结算进入自己回合',
                    content() {
                        const evt = _status.event.getParent('phase');
                        if (evt && evt.name) {
                            evt.finish();
                        }
                        player.phase('nodelay');
                    },
                },
                wuxing_jinqiangpo: {
                    trigger: {
                        global: 'gameDrawBefore',
                        player: ['phaseBegin', 'phaseAfter'],
                    },
                    forced: true,
                    content() {
                        for (var i of [...Array(5)].map((a, index) => index + 1)) {
                            player.enableEquip(i);
                        }
                        const arr = [...Array(5)].map((a, index) => index + 1);
                        for (var i of arr) {
                            const arr5 = [...Array(5)].map((a, index) => index + 1);
                            for (s of arr5) {
                                if (!player.getEquip(i)) {
                                    equip_init = get.inpile('equip' + i).randomGet();
                                    var card = get.cardPile(equip_init);
                                    if (card) {
                                        player.equip(card, 'gain2');
                                        break;
                                    } else {
                                        var card = get.discardPile(equip_init);
                                        if (card) {
                                            player.equip(card, 'gain2');
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                        var card = get.cardPile('sha');
                        if (card) {
                            player.gain(card, 'gain2');
                        } else {
                            var card = get.discardPile('sha');
                            if (card) {
                                player.gain(card, 'gain2');
                            }
                        }
                        player.storage.tmpid = card.cardid;
                        player.addTempSkill('wuxing_jinqiangpo_sha', { player: 'phaseAfter' });
                        player.addTempSkill('wuxing_jinqiangpo_shixiao', { player: 'phaseAfter' });
                    },
                    subSkill: {
                        sha: {
                            mod: {
                                targetInRange(card, player, target, now) {
                                    if (card.cardid == player.storage.tmpid) {
                                        ui.create.dialog('此杀无法闪避,伤害+1,无视防具,无限距离');
                                        setTimeout(function () {
                                            ui.dialog.close();
                                        }, 1000);
                                        return true;
                                    }
                                },
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + 1;
                                },
                            },
                        },
                        shixiao: {
                            trigger: {
                                player: 'shaBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.storage.tmpid == event.card.cardid) {
                                    return true;
                                }
                            },
                            content() {
                                game.wuxing_playXu(['wuxing_jinqiang1'].randomGet());
                                var target = trigger.target;
                                trigger.baseDamage++;
                                trigger.directHit = true;
                                target.addTempSkill('baiban');
                                player.addTempSkill('unequip', 'shaAfter');
                            },
                        },
                    },
                },
                wuxing_fuling: {
                    audio: 'ext:五行天师/audio:2',
                    trigger: {
                        global: 'gameDrawBefore',
                        player: ['phaseBegin', 'phaseAfter'],
                    },
                    forced: true,
                    content() {
                        player.turnOver(false);
                        player.link(false);
                        player.maxHp = 5;
                        player.recover(2);
                        player.draw(2);
                        var cards = player.getCards('j');
                        if (cards.length) player.discard(cards);
                    },
                },
                wuxing_tuanlong: {
                    audio: 'ext:五行天师/audio:2',
                    trigger: {
                        global: 'gameDrawBefore',
                        player: ['phaseBegin', 'phaseAfter'],
                    },
                    forced: true,
                    content() {
                        var card = get.cardPile('lebu');
                        if (card) {
                            player.gain(card, 'gain2');
                        } else {
                            var card = get.discardPile('lebu');
                            if (card) {
                                player.gain(card, 'gain2');
                            }
                        }
                    },
                },
                湍泷: {
                    audio: 'ext:五行天师/audio:2',
                    enable: ['chooseToUse', 'chooseToRespond'],
                    usable: 3,
                    hiddenCard(player, name) {
                        return !player.storage.tuanlong.includes(name) && player.countCards('hes') > 0 && lib.inpile.includes(name);
                    },
                    init(player) {
                        player.storage.tuanlong = [];
                    },
                    chooseButton: {
                        dialog(event, player) {
                            var list = [];
                            for (var i = 0; i < lib.inpile.length; i++) {
                                var name = lib.inpile[i];
                                if (player.storage.tuanlong.includes(name)) continue;
                                if (name == 'sha') {
                                    list.push(['基本', '', 'sha']);
                                    list.push(['基本', '', 'sha', 'fire']);
                                    list.push(['基本', '', 'sha', 'thunder']);
                                    list.push(['基本', '', 'sha', 'ice']);
                                } else if (get.type(name) == 'trick') list.push(['锦囊', '', name]);
                                else if (get.type(name) == 'basic') list.push(['基本', '', name]);
                                else if (get.type(name) == 'delay') list.push(['延时锦囊', '', name]);
                            }
                            return ui.create.dialog('湍泷', [list, 'vcard']);
                        },
                        filter(button, player) {
                            return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
                        },
                        check(button) {
                            var player = _status.event.player;
                            if (player.countCards('h', button.link[2]) > 0) return 0;
                            if (button.link[2] == 'wugu') return 0;
                            var effect = player.getUseValue(button.link[2]);
                            if (effect > 0) return effect;
                            if (player.isPhaseUsing()) return 0;
                            var allshown = true,
                                players = game.filterPlayer();
                            for (var i of players) {
                                if (i.ai.shown == 0) {
                                    allshown = false;
                                }
                                if (i != player && i.countCards('he') && get.attitude(player, i) > 0) {
                                    return 6 - get.value(card);
                                }
                            }
                            return 0;
                        },
                        backup(links, player) {
                            return {
                                filterCard: true,
                                selectCard: 1,
                                popname: true,
                                check(card) {
                                    return 6 - get.value(card);
                                },
                                position: 'hes',
                                viewAs: { name: links[0][2], nature: links[0][3] },
                            };
                        },
                        prompt(links, player) {
                            return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                        },
                    },
                    ai: {
                        save: true,
                        respondShan: true,
                        respondSha: true,
                        fireAttack: true,
                        skillTagFilter(player) {
                            if (!player.countCards('hes')) return false;
                        },
                        order: 10,
                        basic: {
                            useful: [6, 4, 3],
                            value: [6, 4, 3],
                        },
                        result: {
                            player: 1,
                        },
                    },
                },
                wuxing_sanwei: {
                    audio: 'ext:五行天师/audio:2',
                    enable: 'chooseToUse',
                    usable: 2,
                    chooseButton: {
                        dialog(event, player) {
                            var list = [
                                ['锦囊', '', 'nanman'],
                                ['锦囊', '', 'wanjian'],
                            ];
                            return ui.create.dialog('三昧', [list, 'vcard']);
                        },
                        filter(button, player) {
                            return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
                        },
                        check(button) {
                            return true;
                        },
                        backup(links, player) {
                            return {
                                filterCard: true,
                                selectCard: 1,
                                popname: true,
                                check(card) {
                                    return 6 - get.value(card);
                                },
                                position: 'hes',
                                viewAs: { name: links[0][2], nature: links[0][3] },
                            };
                        },
                        prompt(links, player) {
                            return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                        },
                    },
                    ai: {
                        fireAttack: true,
                        skillTagFilter(player) {
                            if (!player.countCards('hes')) return false;
                        },
                        order: 10,
                        basic: {
                            value: [6, 4, 3],
                        },
                        result: {
                            player: 1,
                        },
                    },
                },
                wuxing_zhenhuo: {
                    audio: 'ext:五行天师/audio:2',
                    filter(event, player) {
                        if (get.type(event.card.name) == 'trick') {
                            return true;
                        }
                    },
                    trigger: {
                        source: 'damageBegin',
                    },
                    forced: true,
                    content() {
                        trigger.num++;
                    },
                },
                wuxing_bizhang: {
                    ai: {
                        threaten: 0.1,
                        maixie: true,
                    },
                    trigger: {
                        player: ['loseHpBefore', 'loseMaxHpBefore', 'damageEnd'],
                    },
                    forced: true,
                    content() {
                        game.wuxing_playXu(['wuxing_bizhang1', 'wuxing_bizhang2'].randomGet());
                        player.recover();
                        player.draw();
                        trigger.untrigger();
                        trigger.finish();
                    },
                },
                wuxing_protect: {
                    init(player) {
                        var a = window.setInterval(function () {
                            if (player.hasSkill('wuxing_protect')) {
                                player.storage.wuxing_protect = true;
                            } else {
                                game.addGlobalSkill('wuxing_protect');
                                window.clearInterval(a);
                            }
                        }, 1000);
                    },
                    trigger: {
                        global: 'gameDrawBefore',
                        player: ['phaseBefore', 'phaseEnd'],
                    },
                    _priority: 2,
                    forced: true,
                    fixed: true,
                    charlotte: true,
                    superCharlotte: true,
                    content() {
                        if (player.name == 'azheng') {
                            for (var i in player.tempSkills) {
                                player.removeSkill(i);
                            }
                            for (var i in player.skills) {
                                player.removeSkill(i);
                            }
                            player.removeSkill('baiban');
                            player.clearSkills();
                            player.addSkill('wuxing_wufa');
                            event.finish();
                        } else {
                            player.hp = 4;
                            player.maxHp = 4;
                            player.reinit(player.name, 'azheng');
                            player.update();
                        }
                    },
                },
                wuxing_wufa: {
                    audio: 'ext:五行天师/audio:1',
                    trigger: {
                        global: 'gameDrawBefore',
                        player: ['phaseBefore', 'phaseEnd'],
                    },
                    _priority: 1,
                    forced: true,
                    content() {
                        'step 0';
                        for (var i in player.tempSkills) {
                            player.removeSkill(i);
                        }
                        player.clearSkills();
                        player.addSkill('wuxing_wufa');
                        event.videoId = lib.status.videoId++;
                        var func = function (player, id) {
                            var list = ['金:获得以杀为主要输出的技能', '木:获得过牌,回血类技能', '水:获得控制类,辅助性技能', '火:获得以锦囊为主要输出的技能', '土:获得防御类技能'];
                            if (event.parent.parent.triggername == 'gameDrawBefore') {
                                var choiceList = ui.create.dialog('游戏开始阶段请选择一至五项');
                            } else if (event.parent.parent.triggername == 'phaseBefore') {
                                var choiceList = ui.create.dialog('回合开始阶段请选择一至五项');
                            } else if (event.parent.parent.triggername == 'phaseEnd') {
                                var choiceList = ui.create.dialog('回合结束阶段请选择一至五项');
                            } else {
                                var choiceList = ui.create.dialog('请选择一至五项');
                            }
                            choiceList.videoId = id;
                            for (var i = 0; i < list.length; i++) {
                                var str = '<div class="popup text" style="width:calc(100% - 10px);display:inline-block">';
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
                        event.dialog = func(player, event.videoId);
                        player.storage.event_stage = event.parent.parent.triggername;
                        player.storage.get = get;
                        var next = player.chooseButton();
                        next.set('dialog', event.videoId);
                        next.set('forced', true);
                        next.set('ai', function (button) {
                            var player = _status.event.player;
                            let enemise_h = function () {
                                for (var i of player.getEnemies()) {
                                    if (i.getCards('h').length > i.maxHp) return true;
                                }
                                return false;
                            };
                            let enemise_hp = function () {
                                for (var i of player.getEnemies()) {
                                    if (i.hp == 1) return true;
                                }
                                return false;
                            };
                            let friends_hp = function () {
                                for (var i of player.getFriends()) {
                                    if (i.maxHp - i.hp > 1) return true;
                                }
                                return false;
                            };
                            let enemise_fire = function () {
                                for (var i of player.getEnemies()) {
                                    if (!i.hasSkillTag('nofire')) return true;
                                }
                                return false;
                            };
                            let enemise_equip = function () {
                                for (var i of player.getEnemies()) {
                                    for (s of [...Array(5)].map((a, index) => index + 1)) {
                                        if (!i.isDisabled(s)) {
                                            return true;
                                        }
                                    }
                                }
                                return false;
                            };
                            let enemise_equip1 = function () {
                                for (var i of player.getEnemies()) {
                                    if (!i.isDisabled(1)) return true;
                                }
                                return false;
                            };
                            let trick_card = function () {
                                let card = get.cardPile2(function (card) {
                                    for (var i of game.players) {
                                        if (player.canUse(card, i)) return get.type(card) == 'trick';
                                    }
                                    return false;
                                });
                                return card;
                            };
                            if (game.storage.ziwei || game.storage.gouchen || game.storage.changsheng || game.storage.chentian) {
                                switch (button.link) {
                                    case 0:
                                        return 5;
                                    case 1:
                                        return 5;
                                    case 2:
                                        return 5;
                                    case 3:
                                        return 5;
                                    case 4:
                                        return 5;
                                }
                            } else if (player.storage.event_stage == 'gameDrawBefore') {
                                if (game.filterPlayer.length > 3) {
                                    switch (button.link) {
                                        case 0:
                                            return 0;
                                        case 1:
                                            return 0;
                                        case 2:
                                            return 0;
                                        case 3:
                                            return 5;
                                        case 4:
                                            return 5;
                                    }
                                } else {
                                    switch (button.link) {
                                        case 0:
                                            return 0;
                                        case 1:
                                            return 0;
                                        case 2:
                                            return 0;
                                        case 3:
                                            return 0;
                                        case 4:
                                            return 5;
                                    }
                                }
                            } else if (player.storage.event_stage == 'phaseBefore') {
                                if (player.getCards('j').length) {
                                    switch (button.link) {
                                        case 0:
                                            return 0;
                                        case 1:
                                            return 0;
                                        case 2:
                                            return 5;
                                        case 3:
                                            return 5;
                                        case 4:
                                            return 5;
                                    }
                                } else if (trick_card()) {
                                    switch (button.link) {
                                        case 0:
                                            return 0;
                                        case 1:
                                            return 0;
                                        case 2:
                                            return 0;
                                        case 3:
                                            return 5;
                                        case 4:
                                            return 0;
                                    }
                                } else if (player.getEnemies().length == 1) {
                                    switch (button.link) {
                                        case 0:
                                            return 5;
                                        case 1:
                                            return 0;
                                        case 2:
                                            return 5;
                                        case 3:
                                            return 5;
                                        case 4:
                                            return 0;
                                    }
                                } else if (enemise_h()) {
                                    switch (button.link) {
                                        case 0:
                                            return 5;
                                        case 1:
                                            return 5;
                                        case 2:
                                            return 5;
                                        case 3:
                                            return 5;
                                        case 4:
                                            return 0;
                                    }
                                } else if (enemise_hp()) {
                                    if (enemise_fire) {
                                        switch (button.link) {
                                            case 0:
                                                return 0;
                                            case 1:
                                                return 5;
                                            case 2:
                                                return 0;
                                            case 3:
                                                return 5;
                                            case 4:
                                                return 0;
                                        }
                                    } else {
                                        switch (button.link) {
                                            case 0:
                                                return 5;
                                            case 1:
                                                return 0;
                                            case 2:
                                                return 0;
                                            case 3:
                                                return 0;
                                            case 4:
                                                return 0;
                                        }
                                    }
                                } else if (player.maxHp < 5) {
                                    switch (button.link) {
                                        case 0:
                                            return 0;
                                        case 1:
                                            return 5;
                                        case 2:
                                            return 0;
                                        case 3:
                                            return 0;
                                        case 4:
                                            return 0;
                                    }
                                } else if (friends_hp() || player.hp < 4) {
                                    switch (button.link) {
                                        case 0:
                                            return 0;
                                        case 1:
                                            return 5;
                                        case 2:
                                            return 5;
                                        case 3:
                                            return 5;
                                        case 4:
                                            return 5;
                                    }
                                } else if (player.getCards('h').length < 3) {
                                    switch (button.link) {
                                        case 0:
                                            return 5;
                                        case 1:
                                            return 5;
                                        case 2:
                                            return 5;
                                        case 3:
                                            return 0;
                                        case 4:
                                            return 5;
                                    }
                                } else if (enemise_equip1()) {
                                    switch (button.link) {
                                        case 0:
                                            return 0;
                                        case 1:
                                            return 0;
                                        case 2:
                                            return 5;
                                        case 3:
                                            return 5;
                                        case 4:
                                            return 0;
                                    }
                                } else if (player.hp == 5) {
                                    if (enemise_fire()) {
                                        switch (button.link) {
                                            case 0:
                                                return 0;
                                            case 1:
                                                return 5;
                                            case 2:
                                                return 0;
                                            case 3:
                                                return 5;
                                            case 4:
                                                return 0;
                                        }
                                    } else {
                                        if (enemise_equip()) {
                                            switch (button.link) {
                                                case 0:
                                                    return 0;
                                                case 1:
                                                    return 0;
                                                case 2:
                                                    return 5;
                                                case 3:
                                                    return 5;
                                                case 4:
                                                    return 0;
                                            }
                                        } else {
                                            switch (button.link) {
                                                case 0:
                                                    return 5;
                                                case 1:
                                                    return 0;
                                                case 2:
                                                    return 0;
                                                case 3:
                                                    return 0;
                                                case 4:
                                                    return 0;
                                            }
                                        }
                                    }
                                } else if (player.hp == 4) {
                                    if (enemise_equip()) {
                                        switch (button.link) {
                                            case 0:
                                                return 0;
                                            case 1:
                                                return 0;
                                            case 2:
                                                return 5;
                                            case 3:
                                                return 5;
                                            case 4:
                                                return 0;
                                        }
                                    } else {
                                        switch (button.link) {
                                            case 0:
                                                return 5;
                                            case 1:
                                                return 5;
                                            case 2:
                                                return 0;
                                            case 3:
                                                return 0;
                                            case 4:
                                                return 0;
                                        }
                                    }
                                } else {
                                    switch (button.link) {
                                        case 0:
                                            return 5;
                                        case 1:
                                            return 0;
                                        case 2:
                                            return 0;
                                        case 3:
                                            return 0;
                                        case 4:
                                            return 0;
                                    }
                                }
                            } else if (player.storage.event_stage == 'phaseEnd') {
                                if (player.getFriends().length == 0) {
                                    if (player.hujia < 3) {
                                        switch (button.link) {
                                            case 0:
                                                return 5;
                                            case 1:
                                                return 5;
                                            case 2:
                                                return 0;
                                            case 3:
                                                return 0;
                                            case 4:
                                                return 5;
                                        }
                                    } else {
                                        switch (button.link) {
                                            case 0:
                                                return 0;
                                            case 1:
                                                return 0;
                                            case 2:
                                                return 5;
                                            case 3:
                                                return 0;
                                            case 4:
                                                return 5;
                                        }
                                    }
                                } else {
                                    if (player.hujia < 3) {
                                        switch (button.link) {
                                            case 0:
                                                return 5;
                                            case 1:
                                                return 5;
                                            case 2:
                                                return 0;
                                            case 3:
                                                return 0;
                                            case 4:
                                                return 5;
                                        }
                                    } else {
                                        switch (button.link) {
                                            case 0:
                                                return 0;
                                            case 1:
                                                return 0;
                                            case 2:
                                                return 0;
                                            case 3:
                                                return 5;
                                            case 4:
                                                return 5;
                                        }
                                    }
                                }
                            }
                        });
                        next.set('selectButton', [1, 5]);
                        ('step 1');
                        event.dialog.close();
                        result.links.sort();
                        event.links = result.links;
                        skill_number = result.links.join('');
                        ('step 2');
                        if (skill_number == '0') {
                            player.addSkill('wuxing_pofa');
                            event.finish();
                        } else if (skill_number == '1') {
                            player.addSkill('wuxing_huichun');
                            player.addSkill('wuxing_huichun1');
                            event.finish();
                        } else if (skill_number == '2') {
                            player.addSkill('wuxing_xuanbing');
                            event.finish();
                        } else if (skill_number == '3') {
                            player.addSkill('wuxing_huoyun');
                            event.finish();
                        } else if (skill_number == '4') {
                            player.addSkill('wuxing_hushen');
                            event.finish();
                        } else if (skill_number == '01') {
                            player.addSkill('wuxing_mujian');
                            event.finish();
                        } else if (skill_number == '02') {
                            player.addSkill('wuxing_dingshen');
                            event.finish();
                        } else if (skill_number == '03') {
                            player.addSkill('wuxing_lianyu');
                            event.finish();
                        } else if (skill_number == '04') {
                            player.addSkill('wuxing_huxin');
                            event.finish();
                        } else if (skill_number == '12') {
                            player.addSkill('wuxing_fushen');
                            event.finish();
                        } else if (skill_number == '13') {
                            player.addSkill('wuxing_huoyu');
                            event.finish();
                        } else if (skill_number == '14') {
                            player.addSkill('wuxing_jishen');
                            event.finish();
                        } else if (skill_number == '23') {
                            player.addSkill('wuxing_qinshi');
                            event.finish();
                        } else if (skill_number == '24') {
                            player.addSkill('wuxing_zhenyuan');
                            event.finish();
                        } else if (skill_number == '34') {
                            player.addSkill('wuxing_qimen');
                            event.finish();
                        } else if (skill_number == '012') {
                            player.addSkill('wuxing_zhenhun');
                            player.addSkill('wuxing_zhenhun1');
                            event.finish();
                        } else if (skill_number == '013') {
                            player.addSkill('wuxing_pobing');
                            event.finish();
                        } else if (skill_number == '014') {
                            player.addSkill('wuxing_jingang');
                            event.finish();
                        } else if (skill_number == '023') {
                            player.addSkill('wuxing_gouhun');
                            event.finish();
                        } else if (skill_number == '024') {
                            player.addSkill('wuxing_jieli');
                            event.finish();
                        } else if (skill_number == '034') {
                            player.addSkill('wuxing_tiangang');
                            event.finish();
                        } else if (skill_number == '123') {
                            player.addSkill('wuxing_heli');
                            event.finish();
                        } else if (skill_number == '124') {
                            player.storage.wuxing_huxing21 = 1;
                            player.addSkill('wuxing_huxing');
                            player.addSkill('wuxing_huxing3');
                            event.finish();
                        } else if (skill_number == '134') {
                            player.addSkill('wuxing_shoushen');
                            event.finish();
                        } else if (skill_number == '234') {
                            player.addSkill('wuxing_jingxin');
                            event.finish();
                        } else if (skill_number == '1234') {
                            player.addSkill('wuxing_sanhua');
                            player.addSkill('wuxing_sanhua1');
                            event.finish();
                        } else if (skill_number == '0234') {
                            player.addSkill('wuxing_banshan');
                            event.finish();
                        } else if (skill_number == '0134') {
                            player.addSkill('wuxing_tishu');
                            player.addSkill('wuxing_tishu1');
                            event.finish();
                        } else if (skill_number == '0124') {
                            player.addSkill('wuxing_huitian');
                            event.finish();
                        } else if (skill_number == '0123') {
                            player.addSkill('wuxing_qishang');
                            event.finish();
                        } else if (skill_number == '01234') {
                            skill_list = [];
                            if (game.storage.leidong) {
                                skill_list.push('五雷');
                            }
                            if (game.storage.ziwei || game.storage.gouchen || game.storage.changsheng || game.storage.chentian) {
                                skill_list.push('请神');
                            }
                            if (skill_list == []) {
                                event.goto(2);
                            }
                            player
                                .chooseControl(skill_list)
                                .set('prompt', '五雷:对一名敌人造成5点雷属性伤害 请神:请四御中的一个进行附身,每位神只能请一次')
                                .set('ai', function () {
                                    if (skill_list.includes('请神')) {
                                        return '请神';
                                    } else {
                                        return '五雷';
                                    }
                                });
                        }
                        ('step 3');
                        if (result.control == '五雷') {
                            if (game.storage.leidong) {
                                player.addSkill('wuxing_leidong');
                            } else {
                                event.goto(2);
                            }
                            event.finish();
                        } else if ('请神') {
                            shen_list = [];
                            if (game.storage.ziwei) {
                                shen_list.push('中天紫微北极大帝');
                            }
                            if (game.storage.gouchen) {
                                shen_list.push('勾陈上宫天皇大帝');
                            }
                            if (game.storage.changsheng) {
                                shen_list.push('南极长生大帝');
                            }
                            if (game.storage.chentian) {
                                shen_list.push('承天效法后土皇地祇');
                            }
                            if (shen_list == []) {
                                event.goto(2);
                            }
                            player
                                .chooseControl(shen_list)
                                .set('prompt', '从四御中选一位进行附身')
                                .set('ai', function () {
                                    return shen_list[0];
                                });
                        }
                        ('step 4');
                        if (result.control == '中天紫微北极大帝') {
                            game.storage.ziwei = false;
                            player.hp = 4;
                            player.maxHp = 4;
                            player.reinit('azheng', 'ziwei');
                            player.update();
                            event.finish();
                        } else if (result.control == '勾陈上宫天皇大帝') {
                            game.storage.gouchen = false;
                            player.hp = 4;
                            player.maxHp = 4;
                            player.reinit('azheng', 'gouchen');
                            player.update();
                            event.finish();
                        } else if (result.control == '南极长生大帝') {
                            game.storage.changsheng = false;
                            player.hp = 5;
                            player.maxHp = 5;
                            player.reinit('azheng', 'changsheng');
                            player.update();
                            event.finish();
                        } else if (result.control == '承天效法后土皇地祇') {
                            game.storage.chentian = false;
                            player.hp = 5;
                            player.maxHp = 5;
                            player.reinit('azheng', 'chengtian');
                            player.update();
                            event.finish();
                        }
                    },
                },
                wuxing_pofa: {
                    trigger: {
                        global: 'gameDrawBefore',
                        player: ['phaseBegin', 'phaseAfter'],
                    },
                    forced: true,
                    content() {
                        for (var i of [...Array(5)].map((a, index) => index + 1)) {
                            player.enableEquip(i);
                        }
                        var randomNumber = function () {
                            return 0.5 - Math.random();
                        };
                        number = 0;
                        const arr = [...Array(5)].map((a, index) => index + 1).sort(randomNumber);
                        for (var i of arr) {
                            const arr5 = [...Array(5)].map((a, index) => index + 1);
                            for (s of arr5) {
                                if (number > 0) {
                                    break;
                                }
                                if (!player.getEquip(i)) {
                                    equip_init = get.inpile('equip' + i).randomGet();
                                    var card = get.cardPile(equip_init);
                                    if (card) {
                                        player.equip(card, 'gain2');
                                        number++;
                                        break;
                                    } else {
                                        var card = get.discardPile(equip_init);
                                        if (card) {
                                            player.equip(card, 'gain2');
                                            number++;
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                        var card = get.cardPile('sha');
                        if (card) {
                            player.gain(card, 'gain2');
                        } else {
                            var card = get.discardPile('sha');
                            if (card) {
                                player.gain(card, 'gain2');
                            }
                        }
                        player.storage.tmpid = card.cardid;
                        player.addTempSkill('wuxing_pofa_sha', { player: 'phaseAfter' });
                        player.addTempSkill('wuxing_pofa_shixiao', { player: 'phaseAfter' });
                    },
                    subSkill: {
                        sha: {
                            mod: {
                                targetInRange(card, player, target, now) {
                                    if (card.cardid == player.storage.tmpid) {
                                        ui.create.dialog('此杀不可闪避,无视防具,无限距离');
                                        setTimeout(function () {
                                            ui.dialog.close();
                                        }, 1000);
                                        return true;
                                    }
                                },
                            },
                        },
                        shixiao: {
                            trigger: {
                                player: 'shaBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.storage.tmpid == event.card.cardid) {
                                    return true;
                                }
                            },
                            content() {
                                var target = trigger.target;
                                trigger.directHit = true;
                                target.addTempSkill('fengyin');
                                player.addTempSkill('unequip', 'shaAfter');
                            },
                        },
                    },
                    ai: {
                        presha: true,
                        effect: {
                            player(card, player, target) {
                                if (card.cardid == player.storage.tmpid) {
                                    return 10;
                                }
                            },
                            target(card, player, target) {
                            },
                        },
                    },
                },
                wuxing_huichun: {
                    trigger: {
                        global: 'gameDrawBefore',
                        player: ['phaseBegin', 'phaseAfter'],
                    },
                    forced: true,
                    content() {
                        player.maxHp = 5;
                        player.recover(1);
                        player.draw(2);
                    },
                },
                wuxing_huichun1: {
                    trigger: {
                        player: ['loseHpBefore', 'loseMaxHpBefore'],
                    },
                    forced: true,
                    content() {
                        trigger.untrigger();
                        trigger.finish();
                    },
                },
                wuxing_xuanbing: {
                    audio: 'ext:五行天师/audio:1',
                    enable: ['chooseToUse', 'chooseToRespond'],
                    usable: 2,
                    hiddenCard(player, name) {
                        return player.countCards('hes') > 0 && lib.inpile.includes(name) && player.countSkill('wuxing_xuanbing') < 2;
                    },
                    chooseButton: {
                        dialog(event, player) {
                            var list = [];
                            for (var i = 0; i < lib.inpile.length; i++) {
                                var name = lib.inpile[i];
                                if (name == 'sha') {
                                    list.push(['基本', '', 'sha']);
                                    list.push(['基本', '', 'sha', 'fire']);
                                    list.push(['基本', '', 'sha', 'thunder']);
                                    list.push(['基本', '', 'sha', 'ice']);
                                } else if (get.type(name) == 'trick') list.push(['锦囊', '', name]);
                                else if (get.type(name) == 'basic') list.push(['基本', '', name]);
                                else if (get.type(name) == 'delay') list.push(['延时锦囊', '', name]);
                            }
                            return ui.create.dialog('玄冰', [list, 'vcard']);
                        },
                        filter(button, player) {
                            return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
                        },
                        check(button) {
                            var player = _status.event.player;
                            if (player.countCards('h', button.link[2]) > 0) return 0;
                            if (button.link[2] == 'wugu') return 0;
                            var effect = player.getUseValue(button.link[2]);
                            if (effect > 0) return effect;
                            if (player.isPhaseUsing()) return 0;
                            var allshown = true,
                                players = game.filterPlayer();
                            for (var i of players) {
                                if (i.ai.shown == 0) {
                                    allshown = false;
                                }
                                if (i != player && i.countCards('he') && get.attitude(player, i) > 0) {
                                    return 6 - get.value(card);
                                }
                            }
                            return 0;
                        },
                        backup(links, player) {
                            return {
                                filterCard: true,
                                selectCard: 1,
                                popname: true,
                                check(card) {
                                    return 6 - get.value(card);
                                },
                                position: 'hes',
                                viewAs: { name: links[0][2], nature: links[0][3] },
                            };
                        },
                        prompt(links, player) {
                            return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                        },
                    },
                    ai: {
                        save: true,
                        respondShan: true,
                        respondSha: true,
                        fireAttack: true,
                        skillTagFilter(player) {
                            if (!player.countCards('hes')) return false;
                        },
                        order: 10,
                        basic: {
                            useful: [6, 4, 3],
                            value: [6, 4, 3],
                        },
                        result: {
                            player: 1,
                        },
                    },
                },
                wuxing_huoyun: {
                    enable: 'phaseUse',
                    usable: 1,
                    content() {
                        'step 0';
                        event.washed = false;
                        ('step 1');
                        var card = get.cardPile2(function (card) {
                            for (var i of game.players) {
                                if (player.canUse(card, i)) return get.type(card) == 'trick';
                            }
                            return false;
                        });
                        game.storage.huoyun = card;
                        if (card) card.discard(true);
                        else event.finish();
                        if (game.storage.huoyun) {
                            player.chooseUseTarget(get.prompt(game.storage.huoyun.name), { name: card.name }, false, 'nodistance').set('ai', function (target) {
                                return get.effect(target, { name: game.storage.huoyun.name }, player, player);
                            });
                        }
                        ('step 2');
                        if (!result.bool) player.useSkill('wuxing_huoyun');
                        game.updateRoundNumber();
                        event.goto(1);
                    },
                    ai: {
                        order: 10,
                        result: {
                            player: 1,
                        },
                    },
                },
                wuxing_huoyun_jiashang: {
                    filter(event, player) {
                        if (get.type(event.card.name) == 'trick') {
                            return true;
                        }
                    },
                    trigger: {
                        source: 'damageBegin',
                    },
                    forced: true,
                    content() {
                        trigger.num++;
                    },
                },
                wuxing_hushen: {
                    audio: 'ext:五行天师/audio:1',
                    usable: 2,
                    ai: {
                        threaten: 0.1,
                        maixie: true,
                    },
                    trigger: {
                        player: 'damageEnd',
                    },
                    forced: true,
                    content() {
                        player.recover(1);
                    },
                },
                wuxing_mujian: {
                    ai: {
                        useShan: true,
                        effect: {
                            player(card, player, target) {
                                if (card.cardid == player.storage.tmpid) {
                                    return 10;
                                }
                            },
                            target(card, player, target) {
                            },
                        },
                    },
                    trigger: {
                        global: 'gameDrawBefore',
                        player: ['phaseBegin', 'phaseAfter'],
                    },
                    forced: true,
                    content() {
                        if (player.hp == player.maxHp) {
                            player.draw(1);
                        } else {
                            player.recover(1);
                        }
                        var card = get.cardPile('sha');
                        if (card) {
                            player.gain(card, 'gain2');
                        } else {
                            var card = get.discardPile('sha');
                            if (card) {
                                player.gain(card, 'gain2');
                            }
                        }
                        player.storage.tmpid = card.cardid;
                        player.addTempSkill('wuxing_mujian_sha', { player: 'phaseAfter' });
                    },
                    subSkill: {
                        sha: {
                            mod: {
                                targetInRange(card, player, target, now) {
                                    if (card.cardid == player.storage.tmpid) {
                                        ui.create.dialog('此杀无限距离,能指定任意名目标');
                                        setTimeout(function () {
                                            ui.dialog.close();
                                        }, 1000);
                                        return true;
                                    }
                                },
                                selectTarget(card, player, range) {
                                    if (card.name == 'sha') {
                                        range[0] = -1;
                                        range[1] = game.countPlayer() - 1;
                                    }
                                },
                            },
                        },
                    },
                },
                wuxing_dingshen: {
                    trigger: {
                        global: 'gameDrawBefore',
                        player: ['phaseBegin', 'phaseAfter'],
                    },
                    forced: true,
                    content() {
                        'step 0';
                        var card = get.cardPile2('lebu');
                        if (card) {
                            player.gain(card, 'gain2');
                        }
                        ('step 1');
                        var card = get.cardPile('sha');
                        if (card) {
                            player.gain(card, 'gain2');
                        } else {
                            var card = get.discardPile('sha');
                            if (card) {
                                player.gain(card, 'gain2');
                            }
                        }
                        player.storage.tmpid = card.cardid;
                        player.addTempSkill('wuxing_dingshen_sha', { player: 'phaseAfter' });
                    },
                    subSkill: {
                        sha: {
                            mod: {
                                targetInRange(card, player, target, now) {
                                    if (card.cardid == player.storage.tmpid) {
                                        ui.create.dialog('此杀无限距离');
                                        setTimeout(function () {
                                            ui.dialog.close();
                                        }, 1000);
                                        return true;
                                    }
                                },
                            },
                        },
                    },
                },
                wuxing_lianyu: {
                    audio: 'ext:五行天师/audio:1',
                    enable: 'phaseUse',
                    init(player) {
                        player.enableSkill('wuxing_lianyu');
                    },
                    content() {
                        'step 0';
                        player.draw();
                        player.chooseToUse().filterCard = function (card, player) {
                            return lib.filter.cardEnabled(card, player, event.parent.parent) && lib.filter.cardUsable(card, player, event.parent.parent);
                        };
                        ('step 1');
                        if (!result.bool) {
                            player.chooseToDiscard('he', true);
                            player.disableSkill('wuxing_lianyu', ['wuxing_lianyu']);
                        }
                    },
                    ai: {
                        threaten: 4,
                        order: 15,
                        result: {
                            player: 1,
                        },
                        effect: {
                            player(card, player) {
                                if (get.type(card) != 'basic') return [1, 3];
                            },
                        },
                    },
                },
                wuxing_huxin: {
                    audio: 'ext:五行天师/audio:1',
                    ai: {
                        threaten: 0.1,
                    },
                    trigger: {
                        player: 'damageBegin4',
                    },
                    forced: true,
                    content() {
                        if (trigger.num > 1) trigger.num = 1;
                    },
                },
                wuxing_fushen: {
                    audio: 'ext:五行天师/audio:1',
                    enable: 'phaseUse',
                    usable: 1,
                    filterTarget(card, player, target) {
                        return player != target;
                    },
                    content() {
                        player.draw(1);
                        target.turnOver();
                        player.loseHp(1);
                    },
                    prompt(links, player) {
                        return '该目标翻面';
                    },
                },
                wuxing_huoyu: {
                    audio: 'ext:五行天师/audio:1',
                    usable: 1,
                    enable: 'phaseUse',
                    prompt: '选择一到两名角色造成火焰伤害',
                    filterTarget(card, player, target) {
                        return true;
                    },
                    filterCard(card, player) {
                        return true;
                    },
                    selectCard: 0,
                    line: 'fire',
                    check() {
                        return -1;
                    },
                    selectTarget() {
                        return [1, 2];
                    },
                    multitarget: true,
                    content() {
                        'step 0';
                        targets.sortBySeat();
                        ('step 1');
                        if (targets.length == 2) {
                            for (var i of [...Array(targets.length)].map((a, index) => index)) {
                                targets[i].damage('fire', 1, 'nocard');
                            }
                            event.finish();
                        }
                        ('step 2');
                        player
                            .chooseControl('1点', '2点')
                            .set('prompt', '请选择伤害点数')
                            .set('ai', function () {
                                return '2点';
                            })
                            .set('forceDie', true);
                        ('step 3');
                        if (result.control == '1点') {
                            targets[0].damage('fire', 1, 'nocard');
                        } else {
                            targets[0].damage('fire', 2, 'nocard');
                        }
                    },
                    ai: {
                        order: 11,
                        result: {
                            target(player, target) {
                                if (target.hasSkillTag('nofire')) return 0;
                                if (lib.config.mode == 'versus') return -1;
                                return get.damageEffect(target, player);
                            },
                        },
                    },
                },
                wuxing_jishen: {
                    forced: true,
                    trigger: {
                        global: 'phaseZhunbeiBegin',
                    },
                    content() {
                        'step 0';
                        player.draw(1);
                    },
                },
                wuxing_qinshi: {
                    ai: {
                        order: 11,
                        result: {
                            player(player, target) {
                            },
                            target(player, target) {
                                if (player.getEnemies().includes(target)) {
                                    if (!target.isDisabled(1)) {
                                        if (player == target) return 0;
                                        else return get.attitude(player, target) * 2;
                                    } else return get.attitude(player, target);
                                }
                                return 0;
                            },
                        },
                    },
                    usable: 1,
                    prompt: '废弃其装备区',
                    enable: 'phaseUse',
                    filterTarget(card, player, target) {
                        for (var i of [...Array(5)].map((a, index) => index + 1)) {
                            if (!target.isDisabled(i)) {
                                return true;
                            }
                        }
                        return false;
                    },
                    filterCard(card, player) {
                        return true;
                    },
                    selectCard: 0,
                    line: 'fire',
                    check() {
                        return -1;
                    },
                    selectTarget: 1,
                    multitarget: true,
                    content() {
                        'step 0';
                        targets.sortBySeat();
                        ('step 1');
                        equip_list = [];
                        for (var i of [...Array(5)].map((a, index) => index + 1)) {
                            if (!target.isDisabled(i)) {
                                if (i == 1) equip_list.push('武器');
                                else if (i == 2) equip_list.push('防具');
                                else if (i == 3) equip_list.push('防御马');
                                else if (i == 4) equip_list.push('进攻马');
                                else if (i == 5) equip_list.push('宝物');
                            }
                        }
                        player.chooseControl(equip_list).set('prompt', '请选择要废除的装备栏');
                        ('step 2');
                        if (result.control == '武器') {
                            target.disableEquip(1);
                        } else if (result.control == '防具') {
                            target.disableEquip(2);
                        } else if (result.control == '防御马') {
                            target.disableEquip(3);
                        } else if (result.control == '进攻马') {
                            target.disableEquip(4);
                        } else if (result.control == '宝物') {
                            target.disableEquip(5);
                        }
                    },
                },
                wuxing_zhenyuan: {
                    audio: 'ext:五行天师/audio:1',
                    trigger: {
                        player: 'damageEnd',
                    },
                    content() {
                        'step 0';
                        var evt = _status.event.getParent('phaseUse');
                        evt.skipped = true;
                        event.finish();
                    },
                },
                wuxing_qimen: {
                    audio: 'ext:五行天师/audio:2',
                    trigger: {
                        global: 'useCardToBefore',
                    },
                    filter(event, player) {
                        return event.target != player && get.type(event.card) != 'equip' && event.targets.length == 1 && event.card.name != 'shan' && event.card.name != 'wuxie';
                    },
                    forced: true,
                    content() {
                        'step 0';
                        player
                            .chooseTarget(get.prompt2('wuxing_qimen'), function (card, player, target) {
                                return target != trigger.target;
                            })
                            .set('ai', function (target) {
                                if (trigger.card.name != 'wuzhong' && trigger.card.name != 'jiu' && trigger.card.name != 'tao') {
                                    return -get.attitude(player, target);
                                } else {
                                    if (player.getEnemies().includes(trigger.player)) return get.attitude(player, target);
                                }
                                return 0;
                            });
                        ('step 1');
                        if (result.bool) {
                            trigger.target = result.targets[0];
                            game.log(player, '将', trigger.card, '的目标重新指定为' + get.translation(result.targets[0]));
                            if (result.targets[0] == player) {
                                player.draw();
                            }
                            trigger.untrigger();
                            trigger.trigger('useCardToBegin');
                        }
                    },
                },
                wuxing_zhenhun: {
                    usable: 1,
                    audio: 'ext:五行天师/audio:1',
                    enable: 'phaseUse',
                    filterTarget(card, player, target) {
                        return true;
                    },
                    filterCard(card, player) {
                        return true;
                    },
                    selectCard: 0,
                    line: 'fire',
                    check() {
                        return -1;
                    },
                    selectTarget: 1,
                    multitarget: true,
                    content() {
                        'step 0';
                        var num = player.countCards('h');
                        var num2 = target.countCards('h');
                        if (num < num2) {
                            target.chooseToDiscard(num2 - num, true, 'h');
                        } else target.drawTo(num);
                    },
                    prompt(links, player) {
                        return `其手牌摸至${links.player.countCards('h')}或弃至${links.player.countCards('h')}张`;
                    },
                },
                wuxing_zhenhun1: {
                    trigger: {
                        player: 'phaseAfter',
                    },
                    forced: true,
                    filter(event, player) {
                        return true;
                    },
                    content() {
                        'step 0';
                        player.chooseTarget([1], get.prompt2('镇魂'), function (card, player, target) {
                            return player != target;
                        });
                        ('step 1');
                        if (result.bool) {
                            target = result.targets[0];
                            var num = player.countCards('h');
                            var num2 = target.countCards('h');
                            if (num < num2) {
                                target.chooseToDiscard(num2 - num, true, 'h');
                            } else target.drawTo(num);
                        }
                    },
                    prompt(links, player) {
                        return `其手牌摸至${links.player.countCards('h')}或弃至${links.player.countCards('h')}张`;
                    },
                },
                wuxing_pobing: {
                    trigger: {
                        global: 'gameDrawBefore',
                        player: ['phaseBegin', 'phaseAfter'],
                    },
                    forced: true,
                    content() {
                        'step 0';
                        var card = get.cardPile('sha');
                        if (card) {
                            player.gain(card, 'gain2');
                        } else {
                            var card = get.discardPile('sha');
                            if (card) {
                                player.gain(card, 'gain2');
                            }
                        }
                        player.storage.tmpid = card.cardid;
                        player.addTempSkill('wuxing_pobing_sha', { player: 'phaseAfter' });
                        player.addTempSkill('wuxing_pobing_shixiao', { player: 'phaseAfter' });
                    },
                    subSkill: {
                        sha: {
                            mod: {
                                targetInRange(card, player, target, now) {
                                    if (card.cardid == player.storage.tmpid) {
                                        ui.create.dialog('此杀不可闪避,伤害+1');
                                        setTimeout(function () {
                                            ui.dialog.close();
                                        }, 1000);
                                        return true;
                                    }
                                },
                            },
                        },
                        shixiao: {
                            trigger: {
                                player: 'shaBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.storage.tmpid == event.card.cardid) {
                                    return true;
                                }
                            },
                            content() {
                                var target = trigger.target;
                                trigger.baseDamage++;
                                trigger.directHit = true;
                                player.loseHp(1);
                            },
                        },
                    },
                },
                wuxing_jingang: {
                    audio: 'ext:五行天师/audio:1',
                    trigger: {
                        player: 'phaseAfter',
                    },
                    forced: true,
                    content() {
                        player.hujia = player.maxHp;
                        if (player.getCards('h').length <= 1) player.addSkill('wuxing_huitian');
                    },
                },
                wuxing_gouhun: {
                    ai: {
                        order: 11,
                        result: {
                            player(player, target) {
                            },
                            target(player, target) {
                                if (player.getEnemies().includes(target)) return get.attitude(player, target);
                                return 0;
                            },
                        },
                    },
                    usable: 1,
                    audio: 'ext:五行天师/audio:1',
                    enable: 'phaseUse',
                    filterTarget(card, player, target) {
                        if (player == target) return false;
                        return true;
                    },
                    filterCard(card, player) {
                        return true;
                    },
                    selectCard: 0,
                    line: 'fire',
                    selectTarget: 1,
                    multitarget: true,
                    content() {
                        'step 0';
                        target.goMad({ player: 'phaseAfter' });
                    },
                    prompt(links, player) {
                        return '该角色进入混乱';
                    },
                },
                wuxing_jieli: {
                    trigger: {
                        target: 'useCardToTarget',
                    },
                    forced: true,
                    preHidden: true,
                    filter(event, player) {
                        if (player.countCards('he') == 0) return false;
                        return game.hasPlayer(function (current) {
                            return lib.filter.targetEnabled(event.card, event.player, current);
                        });
                    },
                    content() {
                        'step 0';
                        var next = player
                            .chooseCardTarget({
                                position: 'he',
                                filterCard: lib.filter.cardDiscardable,
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
                                prompt: get.prompt('借力'),
                                prompt2: '弃置一张牌,将此【牌】转移给其他一名角色',
                                source: trigger.player,
                                card: trigger.card,
                            })
                            .setHiddenSkill(event.name);
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
                        effect: {
                            target(card, player, target) {
                                if (target.countCards('he') == 0) return;
                                if (card.name != 'sha') return;
                                var min = 1;
                                var friend = get.attitude(player, target) > 0;
                                var vcard = { name: 'shacopy', nature: card.nature, suit: card.suit };
                                var players = game.filterPlayer();
                                for (var i of players) {
                                    if (player != i && get.attitude(target, i) < 0 && target.canUse(card, i)) {
                                        if (!friend) return 0;
                                        if (get.effect(i, vcard, player, player) > 0) {
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
                wuxing_tiangang: {
                    audio: 'ext:五行天师/audio:1',
                    trigger: {
                        global: 'phaseZhunbeiBegin',
                    },
                    filterTarget(card, player, target) {
                        if (player == target) return false;
                        return true;
                    },
                    content() {
                        'step 0';
                        player.useCard({ name: 'sha' }, trigger.player);
                        event.finish();
                    },
                },
                wuxing_heli: {
                    usable: 1,
                    line: 'fire',
                    enable: 'phaseUse',
                    selectTarget: 1,
                    multitarget: true,
                    selectCard: [0, 4],
                    prompt: '选一名其他角色进行额外回合',
                    filterTarget(card, player, target) {
                        if (player == target) return false;
                        return true;
                    },
                    filterCard(card, player) {
                        return true;
                    },
                    check() {
                        return -1;
                    },
                    content() {
                        target.phase('nodelay');
                    },
                },
                wuxing_huxing: {
                    trigger: {
                        global: 'gameDrawBefore',
                        player: ['phaseBegin', 'phaseAfter'],
                    },
                    forced: true,
                    content() {
                        'step 0';
                        player.chooseTarget(get.prompt2('wuxing_huxing'), lib.filter.notMe).set('ai', function (target) {
                            var player = _status.event.player;
                            if (player == get.zhu(player) && player.hp <= 2) return 0;
                            return get.attitude(player, target) - 4;
                        }).animate = false;
                        ('step 1');
                        if (result.bool) {
                            var target = result.targets[0];
                            player.addSkill('wuxing_huxing2');
                            player.storage.wuxing_huxing2 = target;
                        }
                    },
                    ai: {
                        threaten: 1.05,
                    },
                },
                wuxing_huxing2: {
                    forced: true,
                    trigger: { global: 'damageBegin' },
                    fixed: true,
                    charlotte: true,
                    superCharlotte: true,
                    filter(event, player) {
                        if (event.player == player.storage.wuxing_huxing2 && player.storage.wuxing_huxing21 == 1) {
                            return true;
                        }
                    },
                    logTarget: 'player',
                    content() {
                        trigger.cancel();
                        player.damage(trigger.num, trigger.source || 'nosource');
                        if (trigger.source && trigger.source.isIn() && player.storage.wuxing_huxing21 == 1) trigger.source.damage(trigger.num, trigger.nature, player);
                        player.storage.wuxing_huxing21++;
                    },
                },
                wuxing_huxing3: {
                    trigger: {
                        player: 'damageEnd',
                    },
                    forced: true,
                    content() {
                        'step 0';
                        event.count = Math.min(trigger.num, 9);
                        ('step 1');
                        if (event.count) {
                            event.count--;
                            player.draw(1);
                        } else {
                            event.finish();
                        }
                        ('step 2');
                        event.goto(1);
                    },
                },
                wuxing_shoushen: {
                    trigger: {
                        global: 'damageEnd',
                    },
                    forced: true,
                    content() {
                        'step 0';
                        player.draw(1);
                    },
                },
                wuxing_jingxin: {
                    trigger: {
                        global: 'gameDrawBefore',
                        player: ['phaseBegin', 'phaseAfter'],
                    },
                    forced: true,
                    content() {
                        player.draw(1);
                        var cards = player.getCards('j');
                        if (cards.length) player.discard(cards);
                        try {
                            if (player.hasSkillTag('XK_debuff')) {
                                player.removeBuff('XK_debuff', 1, 1, true, false);
                            }
                        } catch (e) {
                            ui.create.dialog('没有要移除的debuff');
                            setTimeout(function () {
                                ui.dialog.close();
                            }, 1000);
                        }
                        player.disableJudge();
                    },
                },
                wuxing_sanhua: {
                    audio: 'ext:五行天师/audio:2',
                    enable: 'phaseUse',
                    filterCard: true,
                    usable: 1,
                    prompt: '选一名角色回复两点体力',
                    check(card) {
                        return true;
                    },
                    filterTarget(card, player, target) {
                        if (target.hp >= target.maxHp) return false;
                        return true;
                    },
                    content() {
                        target.recover(2);
                        target.draw(1);
                        player.draw(1);
                    },
                    ai: {
                        order: 11,
                        result: {
                            target(player, target) {
                                if (player.getFriends().includes(target)) return get.attitude(player, target);
                                else if (player == target && player.maxHp - player.hp >= 2) return get.attitude(player, target) + 10;
                                else 0;
                            },
                        },
                    },
                },
                wuxing_sanhua1: {
                    ai: {
                        effect: {
                            player(card, player, target) {
                            },
                            target(card, player, target) {
                                if (card.name == 'sha') {
                                    if (player.getEnemies().includes(target)) return 10;
                                    return 0;
                                }
                            },
                        },
                    },
                    trigger: {
                        player: 'shaBefore',
                    },
                    forced: true,
                    content() {
                        trigger.baseDamage = 0;
                    },
                },
                wuxing_banshan: {
                    usable: 1,
                    enable: 'phaseUse',
                    selectTarget: 2,
                    multitarget: true,
                    prompt: '把一张牌当任意基本牌',
                    filterTarget(card, player, target) {
                        return true;
                    },
                    filterCard(card, player) {
                        return true;
                    },
                    check: -1,
                    line: 'fire',
                    selectCard: 0,
                    content() {
                        'step 0';
                        targets.sortBySeat();
                        ('step 1');
                        game.swapSeat(targets[0], targets[1]);
                    },
                },
                wuxing_tishu: {
                    audio: 'ext:五行天师/audio:1',
                    enable: ['chooseToUse', 'chooseToRespond'],
                    hiddenCard(player, name) {
                        return player.countCards('hes') > 0 && lib.inpile.includes(name) && name != 'wuxie';
                    },
                    chooseButton: {
                        dialog(event, player) {
                            var list = [];
                            for (var i = 0; i < lib.inpile.length; i++) {
                                var name = lib.inpile[i];
                                if (name == 'sha') {
                                    list.push(['基本', '', 'sha']);
                                    list.push(['基本', '', 'sha', 'fire']);
                                    list.push(['基本', '', 'sha', 'thunder']);
                                    list.push(['基本', '', 'sha', 'ice']);
                                } else if (get.type(name) == 'basic') list.push(['基本', '', name]);
                            }
                            return ui.create.dialog('体术', [list, 'vcard']);
                        },
                        filter(button, player) {
                            return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
                        },
                        check(button) {
                            var player = _status.event.player;
                            if (player.countCards('h', button.link[2]) > 0) return 0;
                            if (button.link[2] == 'wugu') return 0;
                            var effect = player.getUseValue(button.link[2]);
                            if (effect > 0) return effect;
                            if (player.isPhaseUsing()) return 0;
                            var allshown = true,
                                players = game.filterPlayer();
                            for (var i of players) {
                                if (i.ai.shown == 0) {
                                    allshown = false;
                                }
                                if (i != player && i.countCards('he') && get.attitude(player, i) > 0) {
                                    return 6 - get.value(card);
                                }
                            }
                            return 0;
                        },
                        backup(links, player) {
                            return {
                                filterCard: true,
                                selectCard: 1,
                                popname: true,
                                check(card) {
                                    return 6 - get.value(card);
                                },
                                position: 'hes',
                                viewAs: { name: links[0][2], nature: links[0][3] },
                            };
                        },
                        prompt(links, player) {
                            return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                        },
                    },
                    ai: {
                        save: true,
                        respondShan: true,
                        respondSha: true,
                        fireAttack: true,
                        skillTagFilter(player) {
                            if (!player.countCards('hes')) return false;
                        },
                        order: 10,
                        basic: {
                            useful: [6, 4, 3],
                            value: [6, 4, 3],
                        },
                        result: {
                            player: 1,
                        },
                    },
                },
                wuxing_tishu1: {
                    forced: true,
                    mod: {
                        cardEnabled(card, player) {
                            if (get.type(card) == 'basic') return Infinity;
                            if (get.type(card) == 'trick' || get.type(card) == 'delay' || get.type(card) == 'equip') return false;
                        },
                        cardUsable(card, player) {
                            if (get.type(card) == 'basic') return Infinity;
                            if (get.type(card) == 'trick' || get.type(card) == 'delay' || get.type(card) == 'equip') return false;
                        },
                    },
                },
                wuxing_huitian: {
                    _priority: 2,
                    forced: true,
                    trigger: {
                        player: ['phaseBegin', 'phaseAfter'],
                    },
                    filter(event, player) {
                        return true;
                    },
                    content() {
                        'step 0';
                        var targets = game.filterPlayer();
                        targets.remove(player);
                        targets.sort(lib.sort.seat);
                        player.line(targets, 'green');
                        for (var i of targets) {
                            let hej = i.getCards('hej');
                            if (hej) player.gainPlayerCard('hej', i, true);
                            else player.draw(1);
                        }
                    },
                    group: ['wuxing_huitian1'],
                },
                wuxing_huitian1: {
                    _priority: 1,
                    forced: true,
                    trigger: {
                        player: ['phaseBegin', 'phaseAfter'],
                    },
                    filter(event, player) {
                        return true;
                    },
                    content() {
                        'step 0';
                        if (player.countCards('h') <= player.maxHp) player.draw(player.maxHp - player.countCards('h'));
                    },
                },
                wuxing_qishang: {
                    audio: 'ext:五行天师/audio:2',
                    usable: 1,
                    enable: 'phaseUse',
                    selectCard: -1,
                    discard: false,
                    lose: false,
                    delay: false,
                    prompt: '把所有手牌和装备交给一名其他角色',
                    filter(event, player) {
                        return player.num('he') > 0;
                    },
                    filterCard(card, player) {
                        return true;
                    },
                    position: 'he',
                    filterTarget(card, player, target) {
                        return player != target;
                    },
                    content() {
                        'step 0';
                        target.gain(cards, player, 'giveAuto');
                        ('step 1');
                        var num = target.num('h');
                        target.discard(target.getCards('h'));
                        target.draw(num);
                        target.showHandcards();
                        ('step 2');
                        var num = target.num('h', function (card) {
                            return get.type(card) != 'basic';
                        });
                        target.discard(
                            targe.getCards('h', function (card) {
                                return get.type(card) != 'basic';
                            })
                        );
                        if (num > 0) target.damage(num);
                    },
                    ai: {
                        order: 12,
                        expose: 0.3,
                        threaten: 1.8,
                        result: {
                            target(player, target) {
                                return -target.num('h') - 1;
                            },
                        },
                    },
                },
                wuxing_leidong: {
                    usable: 1,
                    audio: 'ext:五行天师/audio:1',
                    enable: 'phaseUse',
                    prompt: '对目标造成5点雷属性伤害',
                    filterTarget(card, player, target) {
                        if (game.storage.leidong && player.getCards('h').length > 4) return true;
                        return false;
                    },
                    filterCard(card, player) {
                        return true;
                    },
                    selectCard: 0,
                    line: 'fire',
                    check() {
                        return -1;
                    },
                    selectTarget: 1,
                    multitarget: true,
                    content() {
                        'step 0';
                        game.storage.leidong = false;
                        player.turnOver();
                        player.loseHp(4);
                        var cards = player.getCards('hej');
                        if (cards.length) player.discard(cards);
                        targets.sortBySeat();
                        ('step 1');
                        target.damage('thunder', 5, 'nocard');
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
                        content: '雷',
                    },
                },
                wuxing_songsheng: {
                    forced: true,
                    forceDie: true,
                    trigger: {
                        player: ['dyingBegin', 'die'],
                    },
                    content() {
                        'step 0';
                        if (!player.isAlive()) {
                            player.revive();
                        }
                        player.maxHp = 4;
                        player.hp = 3;
                        player.reinit(player.name, 'azheng');
                        player.update();
                        ('step 1');
                        const evt = _status.event.getParent('phase');
                        if (evt && evt.name) {
                            evt.finish();
                        }
                        player.phase('nodelay');
                    },
                },
                wuxing_norecover: {
                    ai: {
                        effect: {
                            target(card, player, target) {
                                if (card.name == 'tao') {
                                    return -1;
                                }
                            },
                        },
                    },
                    forced: true,
                    trigger: {
                        player: 'recoverBegin',
                    },
                    content() {
                        event._trigger.num = 0;
                    },
                },
                wuxing_ziwei_protect: {
                    init(player) {
                        var a = window.setInterval(function () {
                            if (player.hasSkill('wuxing_ziwei_protect')) {
                                player.storage.wuxing_ziwei_protect = true;
                            } else {
                                game.addGlobalSkill('wuxing_ziwei_protect');
                                window.clearInterval(a);
                            }
                        }, 1000);
                    },
                    forced: true,
                    fixed: true,
                    charlotte: true,
                    superCharlotte: true,
                    trigger: {
                        global: ['chooseToUseBefore', 'gameStart', 'chooseButtonBefore', 'chooseControlBefore'],//QQQ
                    },
                    content() {
                        player.disableSkill = game.kongfunc;
                        for (var i in player.tempSkills) {
                            player.removeSkill(i);
                        }
                        for (var i in player.skills) {
                            player.removeSkill(i);
                        }
                        player.removeSkill('baiban');
                        player.clearSkills();
                        player.addSkill('wuxing_ziwei');
                        player.addSkill('wuxing_ziwei1');
                        player.addSkill('wuxing_ziwei2');
                        player.addSkill('wuxing_norecover');
                        player.addSkill('wuxing_songsheng');
                    },
                },
                wuxing_gouchen_protect: {
                    init(player) {
                        var a = window.setInterval(function () {
                            if (player.hasSkill('wuxing_gouchen_protect')) {
                                player.storage.wuxing_gouchen_protect = true;
                            } else {
                                game.addGlobalSkill('wuxing_gouchen_protect');
                                window.clearInterval(a);
                            }
                        }, 1000);
                    },
                    forced: true,
                    fixed: true,
                    charlotte: true,
                    superCharlotte: true,
                    trigger: {
                        global: ['chooseToUseBefore', 'gameStart', 'chooseButtonBefore', 'chooseControlBefore'],//QQQ
                    },
                    content() {
                        player.disableSkill = game.kongfunc;
                        for (var i in player.tempSkills) {
                            player.removeSkill(i);
                        }
                        for (var i in player.skills) {
                            player.removeSkill(i);
                        }
                        player.removeSkill('baiban');
                        player.clearSkills();
                        player.addSkill('wuxing_gouchen');
                        player.addSkill('wuxing_gouchen1');
                        player.addSkill('wuxing_norecover');
                        player.addSkill('wuxing_songsheng');
                    },
                },
                wuxing_changsheng_protect: {
                    init(player) {
                        var a = window.setInterval(function () {
                            if (player.hasSkill('wuxing_changsheng_protect')) {
                                player.storage.wuxing_changsheng_protect = true;
                            } else {
                                game.addGlobalSkill('wuxing_changsheng_protect');
                                window.clearInterval(a);
                            }
                        }, 1000);
                    },
                    forced: true,
                    fixed: true,
                    charlotte: true,
                    superCharlotte: true,
                    trigger: {
                        global: ['chooseToUseBefore', 'gameStart', 'chooseButtonBefore', 'chooseControlBefore'],//QQQ
                    },
                    content() {
                        player.disableSkill = game.kongfunc;
                        for (var i in player.tempSkills) {
                            player.removeSkill(i);
                        }
                        for (var i in player.skills) {
                            player.removeSkill(i);
                        }
                        player.removeSkill('baiban');
                        player.clearSkills();
                        player.addSkill('wuxing_changsheng');
                        player.addSkill('wuxing_changsheng1');
                        player.addSkill('wuxing_changsheng2');
                        player.addSkill('wuxing_norecover');
                        player.addSkill('wuxing_songsheng');
                    },
                },
                wuxing_chengtian_protect: {
                    init(player) {
                        var a = window.setInterval(function () {
                            if (player.hasSkill('wuxing_chengtian_protect')) {
                                player.storage.wuxing_chengtian_protect = true;
                            } else {
                                game.addGlobalSkill('wuxing_chengtian_protect');
                                window.clearInterval(a);
                            }
                        }, 1000);
                    },
                    forced: true,
                    fixed: true,
                    charlotte: true,
                    superCharlotte: true,
                    trigger: {
                        global: ['chooseToUseBefore', 'gameStart', 'chooseButtonBefore', 'chooseControlBefore'],
                    },
                    content() {
                        player.disableSkill = game.kongfunc;
                        for (var i in player.tempSkills) {
                            player.removeSkill(i);
                        }
                        for (var i in player.skills) {
                            player.removeSkill(i);
                        }
                        player.removeSkill('baiban');
                        player.clearSkills();
                        player.addSkill('wuxing_chengtian');
                        player.addSkill('wuxing_chengtian1');
                        player.addSkill('wuxing_chengtian2');
                        player.addSkill('wuxing_norecover');
                        player.addSkill('wuxing_songsheng');
                    },
                },
                wuxing_ziwei: {
                    ai: {
                        useShan: true,
                        unequip: true,
                        unequip: true,
                        norespond: true,
                    },
                    forced: true,
                    trigger: {
                        global: 'phaseZhunbeiBegin',
                    },
                    filterTarget(card, player, target) {
                        return true;
                    },
                    content() {
                        'step 0';
                        if (player == trigger.player) {
                            event.finish();
                        } else {
                            player
                                .chooseControl('出杀', '不出')
                                .set('prompt', '请选择是否视为出杀')
                                .set('ai', function () {
                                    return '出杀';
                                });
                        }
                        ('step 1');
                        if (result.control == '出杀') {
                            player.chooseUseTarget({ name: 'sha' }, true).set('ai', function (target) {
                                if (get.effect(target, { name: 'sha' }, _status.event.player) == 0) {
                                    return 1;
                                } else {
                                    return get.effect(target, { name: 'sha' }, _status.event.player);
                                }
                            });
                            event.finish();
                        } else if (result.control == '不出') {
                            event.finish();
                        }
                    },
                },
                wuxing_ziwei1: {
                    forced: true,
                    mod: {
                        targetInRange(card, player, target, now) {
                            if (card.name == 'sha') {
                                return true;
                            }
                        },
                        selectTarget(card, player, range) {
                            if (card.name == 'sha') {
                                range[0] = -1;
                                range[1] = game.countPlayer() - 1;
                            }
                        },
                    },
                },
                wuxing_ziwei2: {
                    forced: true,
                    trigger: {
                        player: 'shaBefore',
                    },
                    filter(event, player) {
                        return true;
                    },
                    content() {
                        var target = trigger.target;
                        trigger.directHit = true;
                        player.addSkill('unequip', 'shaAfter');
                    },
                },
                wuxing_gouchen: {
                    _priority: 3,
                    forced: true,
                    trigger: {
                        global: 'useCardToBefore',
                    },
                    init(player, skill) {
                        player.storage.numberid = 0;
                    },
                    filter(event, player) {
                        if (get.type(event.card) == 'equip' || event.card.name == 'tao' || event.card.name == 'jiu' || event.card.name == 'shandian' || event.card.name == 'wuzhong') {
                            if (player.storage.numberid == 0) {
                                if (player.storage.wuxing_gouchenid != event.card.cardid) {
                                    player.storage.wuxing_gouchenid = event.card.cardid;
                                    player.storage.numberid++;
                                    return true;
                                } else {
                                    return false;
                                }
                            } else if (player.storage.numberid == 1) {
                                return true;
                            }
                        }
                        return event.card && event.card.name != 'shan' && event.card.name != 'wuxie';
                    },
                    forced: true,
                    content() {
                        'step 0';
                        player
                            .chooseTarget(get.prompt2('wuxing_gouchen'), function (card, player, target) {
                                return true;
                            })
                            .set('ai', function (target) {
                                if (trigger.card.name != 'wuzhong' && trigger.card.name != 'jiu' && trigger.card.name != 'tao' && trigger.card.name != 'taoyuan' && trigger.card.name != 'wugu' && get.type(trigger.card) != 'equip') {
                                    return -get.attitude(player, target);
                                }
                                else {
                                    if (player.getEnemies().includes(trigger.player)) return get.attitude(player, target);
                                    return 0;
                                }
                            });
                        ('step 1');
                        if (result.bool) {
                            trigger.target = result.targets[0];
                            game.log(player, '将', trigger.card, '的目标重新指定为' + get.translation(result.targets[0]));
                            if (result.targets[0] == player) {
                                player.draw();
                            }
                            trigger.untrigger();
                            trigger.trigger('useCardToBegin');
                            event.finish();
                        } else {
                            event.finish();
                        }
                    },
                },
                wuxing_gouchen1: {
                    _priority: 2,
                    ai: {
                        jiuOther: true,
                    },
                    trigger: {
                        player: 'chooseToUseBefore',
                    },
                    init(player, skill) {
                        lib.card.tao.enable = function (card, player, event) {
                            if (player.hp < player.maxHp) return true;
                            var range = [-1, -1];
                            game.checkMod(card, player, range, 'selectTarget', player);
                            if (range[0] == 1) return true;
                            return false;
                        };
                    },
                    filter(event, player) {
                        return event.filterTarget && event.filterTarget == lib.filter.filterTarget;
                    },
                    charlotte: true,
                    firstDo: true,
                    popup: false,
                    forced: true,
                    content() {
                        trigger.set('filterTarget', function (card, player, target) {
                            if (lib.filter.filterTarget(card, player, target)) return true;
                            if (!card) return false;
                            if (game.checkMod(card, player, target, 'unchanged', 'playerEnabled', player) == false) return false;
                            var mod = game.checkMod(card, player, target, 'unchanged', 'targetEnabled', target);
                            if (mod === false) return false;
                            if (mod === true) return true;
                            var filter = get.info(card).modTarget;
                            if (typeof filter == 'boolean') return filter;
                            if (typeof filter == 'function') return filter(card, player, target);
                            return false;
                        });
                    },
                    mod: {
                        targetEnabled(card, player, target, now) {
                            return true;
                        },
                        selectTarget(card, player, range) {
                            var type = get.type(card);
                            var info = get.info(card);
                            var name = card.name;
                            if (type == 'trick') {
                                if (info.notarget) return;
                                if (info.multitarget) return;
                                range[0] = 1;
                                if (name == 'guohe' || name == 'shunshou' || name == 'wuzhong' || name == 'huogong' || name == 'jiedao') range[1] = 1;
                            } else if (type == 'equip' || type == 'basic' || type == 'delay') {
                                if (info.notarget) return;
                                if (info.multitarget) return;
                                range[0] = 1;
                                range[1] = 1;
                            }
                        },
                    },
                },
                wuxing_changsheng: {
                    forced: true,
                    trigger: {
                        player: 'phaseBegin',
                    },
                    filter(event, player) {
                        return true;
                    },
                    content() {
                        player.draw(player.maxHp);
                    },
                },
                wuxing_changsheng1: {
                    forced: true,
                    mod: {
                        maxHandcard(player, num) {
                            return Infinity;
                        },
                    },
                },
                wuxing_changsheng2: {
                    forced: true,
                    trigger: {
                        global: 'phaseZhunbeiBegin',
                    },
                    content() {
                        'step 0';
                        player.draw(2);
                    },
                },
                wuxing_chengtian: {
                    ai: {
                        maixie: true,
                        maixie_hp: true,
                        jueqing: true,
                        nodu: true,
                    },
                    forced: true,
                    trigger: {
                        player: 'damageEnd',
                    },
                    content() {
                        'step 0';
                        player.draw(1);
                        for (var i of game.players) {
                            i.loseHp(2);
                        }
                        var evt = _status.event.getParent('phaseUse');
                        evt.skipped = true;
                        event.finish();
                    },
                },
                wuxing_chengtian1: {
                    audio: 'ext:五行天师/audio:1',
                    ai: {
                        threaten: 0.1,
                    },
                    trigger: {
                        player: 'damageBegin',
                    },
                    forced: true,
                    content() {
                        'step 0';
                        trigger.num = 1;
                        ('step 1');
                        var targets = game.filterPlayer();
                        targets.remove(player);
                        targets.sort(lib.sort.seat);
                        player.line(targets, 'green');
                        for (_ of [1, 2]) {
                            for (var i of targets) {
                                let hej = i.getCards('hej');
                                if (hej) player.gainPlayerCard('hej', i, true);
                                else player.draw(1);
                            }
                        }
                        event.finish();
                    },
                },
                wuxing_chengtian2: {
                    trigger: {
                        player: ['loseHpBefore', 'loseMaxHpBefore'],
                    },
                    forced: true,
                    content() {
                        trigger.untrigger();
                        trigger.finish();
                    },
                },
                wuxing_ymdingzui: {
                    trigger: {
                        global: 'damageBegin1',
                    },
                    prompt2(event, player) {
                        return '是否为<span style="color: red">' + get.translation(event.player) + '</span>承受此次' + event.num + '点伤害？';
                    },
                    filter(event, player) {
                        return event.player != player && event.source != player;
                    },
                    check(event, player) {
                        if (player.hp <= event.num) return false;
                        return get.attitude(event.player, player) > 0;
                    },
                    content() {
                        trigger.player = player;
                        if (player.isTurnedOver()) player.turnOver(false);
                    },
                    group: ['wuxing_ymdingzui_turn'],
                    subSkill: {
                        turn: {
                            trigger: {
                                player: 'turnOverEnd',
                            },
                            forced: true,
                            content() {
                                player.markSkill(event.name);
                                player.addSkill('wuxing_ymdingzui_end');
                                var next = player.phaseUse();
                                event.next.remove(next);
                                trigger.next.push(next);
                            },
                            intro: {
                                content(storage, player, skill) {
                                    return '额外执行一个出牌阶段';
                                },
                            },
                        },
                        end: {
                            trigger: {
                                player: 'phaseUseAfter',
                            },
                            forced: true,
                            popup: false,
                            silent: true,
                            content() {
                                player.unmarkSkill('wuxing_ymdingzui_turn');
                                player.removeSkill(event.name);
                            },
                        },
                    },
                },
                wuxing_guidun: {
                    trigger: {
                        global: 'gameStart',
                    },
                    forced: true,
                    content() {
                        player.addSkill('kaikang');
                        player.addSkill('xinjushou');
                        player.addSkill('xinjiewei');
                        player.addSkill('reganglie');
                        player.addSkill('rejiushi');
                        player.addSkill('huituo');
                        player.addSkill('yuce');
                        player.addSkill('oljieming');
                        player.addSkill('wuxing_huxin');
                        player.addSkill('wuxing_huichun1');
                        player.addSkill('tongji');
                        player.addSkill('guixin');
                        player.addSkill('wuxing_ymdingzui');
                        game.storage.niutou_addSkill = player.addSkill;
                        game.storage.niutou_removeSkill = player.removeSkill;
                    },
                },
                wuxing_guidun1: {
                    trigger: {
                        player: 'loseAfter',
                        global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                    },
                    forced: true,
                    filter(event, player) {
                        if (event.name == 'gain' && event.player == player) return player.countCards('h') > 8;
                        var evt = event.getl(player);
                        if (!evt || !evt.hs || evt.hs.length == 0 || player.countCards('h') >= 8) return false;
                        var evt = event;
                        for (var i = 0; i < 8; i++) {
                            evt = evt.getParent('wuxing_guidun1');
                            if (evt.name != 'wuxing_guidun1') return true;
                        }
                        return false;
                    },
                    content() {
                        var num = 8 - player.countCards('h');
                        if (num < 0) player.chooseToDiscard('h', true, -num);
                    },
                },
                wuxing_oljieming: {
                    trigger: { player: ['damageEnd', 'dieAfter'] },
                    forced: true,
                    forceDie: true,
                    filter(event, player) {
                        if (event.name == 'die') return true;
                        return player.isAlive();
                    },
                    content() {
                        'step 0';
                        event.count = trigger.num || 1;
                        ('step 1');
                        event.count--;
                        player
                            .chooseTarget(get.prompt2('wuxing_oljieming'), function (card, player, target) {
                                return target.maxHp > 0;
                            })
                            .set('ai', function (target) {
                                var att = get.attitude(_status.event.player, target);
                                var draw = Math.min(5, target.maxHp) - target.countCards('h');
                                if (draw >= 0) {
                                    if (target.hasSkillTag('nogain')) att /= 6;
                                    if (att > 2) {
                                        return Math.sqrt(draw + 1) * att;
                                    }
                                    return att / 3;
                                }
                                if (draw < -1) {
                                    if (target.hasSkillTag('nogain')) att *= 6;
                                    if (att < -2) {
                                        return -Math.sqrt(1 - draw) * att;
                                    }
                                }
                                return 0;
                            });
                        ('step 2');
                        if (result.bool) {
                            var target = result.targets[0];
                            event.target = target;
                            target.draw(Math.min(5, target.maxHp));
                        } else event.finish();
                        ('step 3');
                        var num = target.countCards('h') - Math.min(5, target.maxHp);
                        if (num > 0) target.chooseToDiscard('h', true, num);
                        ('step 4');
                        if (event.count > 0 && player.isAlive()) event.goto(1);
                    },
                    ai: {
                        expose: 0.2,
                        maixie: true,
                        maixie_hp: true,
                        effect: {
                            target(card, player, target, current) {
                                if (target.countCards('h') == 0 && target.hp > 1) {
                                    if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                    return 2;
                                }
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
                wuxing_xinjushou: {
                    forced: true,
                    trigger: { player: 'phaseJieshuBegin' },
                    content() {
                        'step 0';
                        player.draw(4);
                        player.turnOver();
                        ('step 1');
                        player
                            .chooseCard('h', true, '弃置一张手牌,若以此法弃置的是装备牌,则你改为使用之')
                            .set('ai', function (card) {
                                if (get.type(card) == 'equip') {
                                    return 5 - get.value(card);
                                }
                                return -get.value(card);
                            })
                            .set('filterCard', lib.filter.cardDiscardable);
                        ('step 2');
                        if (result.bool && result.cards.length) {
                            if (get.type(result.cards[0]) == 'equip' && !player.isDisabled(get.subtype(result.cards[0]))) {
                                player.chooseUseTarget(result.cards[0], true, 'nopopup');
                            } else {
                                player.discard(result.cards[0]);
                            }
                        }
                    },
                    ai: {
                        effect: {
                            target(card, player, target) {
                                if (card.name == 'guiyoujie') return [0, 1];
                            },
                        },
                    },
                },
                wuxing_diandeng: {
                    trigger: {
                        global: 'damageEnd',
                        player: 'phaseDiscardBegin',
                    },
                    logTarget: 'player',
                    forced: true,
                    content() {
                        'step 0';
                        trigger.player.draw();
                        ('step 1');
                        if (!trigger.player.countCards('h')) event.finish();
                        else {
                            trigger.player
                                .chooseCard('h', true, '选择一张牌置于' + get.translation(player) + '的武将牌上作为「灯」')
                                .set('ai', function (card) {
                                    var player = _status.event.player;
                                    if (player.hasUseTarget(card) && !player.hasValueTarget(card)) return 0;
                                    if (['sha', 'shan', 'wuxie', 'caochuan'].includes(card.name)) return 2 + Math.random();
                                    return 1 + Math.random();
                                })
                                .set('complexCard', true);
                        }
                        ('step 2');
                        player.loseToSpecial(result.cards, 'wuxing_diandeng').visible = true;
                        player.markSkill('wuxing_diandeng');
                    },
                    intro: {
                        mark(dialog, storage, player) {
                            dialog.addAuto(
                                player.getCards('s', function (card) {
                                    return card.hasGaintag('wuxing_diandeng');
                                })
                            );
                        },
                        markcount(storage, player) {
                            return player.getCards('s', function (card) {
                                return card.hasGaintag('wuxing_diandeng');
                            }).length;
                        },
                        onunmark(storage, player) {
                            var cards = player.getCards('s', function (card) {
                                return card.hasGaintag('wuxing_diandeng');
                            });
                            if (cards.length) {
                                player.lose(cards, ui.discardPile);
                                player.$throw(cards, 1000);
                                game.log(cards, '进入了弃牌堆');
                            }
                        },
                    },
                    marktext: '灯',
                    mod: {
                        aiOrder(player, card, num) {
                            if (get.itemtype(card) == 'card' && card.hasGaintag('wuxing_diandeng')) return num + 0.5;
                        },
                    },
                    group: ['wuxing_diandeng_gain'],
                },
                wuxing_diandeng_gain: {
                    trigger: { player: 'loseAfter' },
                    forced: true,
                    filter(event, player) {
                        if (!event.ss || !event.ss.length) return false;
                        for (var i in event.gaintag_map) {
                            if (event.gaintag_map[i].includes('wuxing_diandeng')) return true;
                            return false;
                        }
                    },
                    content() {
                        'step 0';
                        var cards = [];
                        for (var i of trigger.ss) {
                            if (!trigger.gaintag_map[i.cardid] || !trigger.gaintag_map[i.cardid].includes('wuxing_diandeng')) continue;
                            var suit = i.suit;
                            var card = get.cardPile2(function (card) {
                                return !cards.includes(card) && card.suit == suit;
                            });
                            if (card) cards.push(card);
                        }
                        if (cards.length) player.gain(cards, 'gain2');
                        var num = player.getCards('s', function (card) {
                            return card.hasGaintag('wuxing_diandeng');
                        }).length;
                        if (num > 0) player.markSkill('wuxing_diandeng');
                        else player.unmarkSkill('wuxing_diandeng');
                        ('step 1');
                        game.updateRoundNumber();
                    },
                },
                wuxing_shangmen: {},
            };
            let aming_skill = {
                wuxing_taiji: {
                    forced: true,
                    trigger: {
                        player: ['useCardBegin'],
                    },
                    content() {
                        if (get.color(trigger.card) == 'black') player.addTempSkill('wuxing_yinlei');
                        else player.addTempSkill('wuxing_yanglei');
                        if (player.hasSkill('wuxing_yinlei') && player.hasSkill('wuxing_yanglei')) player.addTempSkill('wuxing_pingheng');
                    },
                    group: ['wuxing_taiji1'],
                },
                wuxing_taiji1: {
                    forced: true,
                    _priority: 2,
                    trigger: {
                        global: ['useCardAfter'],
                    },
                    filter(event, player) {
                        return event.player != player;
                    },
                    content() {
                        if (get.color(trigger.card) == 'black') {
                            if (!player.hasSkill('wuxing_yinji')) player.addTempSkill('wuxing_yinji');
                        } else {
                            if (!player.hasSkill('wuxing_yangji')) player.addTempSkill('wuxing_yangji');
                        }
                        if (player.hasSkill('wuxing_yinji') && player.hasSkill('wuxing_yangji')) player.addTempSkill('wuxing_shiheng');
                    },
                },
                wuxing_yinlei: {
                    usable: 1,
                    enable: 'phaseUse',
                    prompt: '选择一名角色造成雷属性伤害',
                    filterTarget(card, player, target) {
                        return true;
                    },
                    filterCard(card, player) {
                        return true;
                    },
                    selectCard: 0,
                    line: 'thunder',
                    check() {
                        return -1;
                    },
                    selectTarget() {
                        return [1, 1];
                    },
                    multitarget: false,
                    content() {
                        'step 0';
                        target.damage('thunder', 1, 'nocard');
                    },
                    ai: {
                        order: 11,
                        result: {
                            target(player, target) {
                                if (target.hasSkillTag('nothunder')) return 0;
                                if (lib.config.mode == 'versus') return -1;
                                return get.damageEffect(target, player);
                            },
                        },
                    },
                },
                wuxing_yanglei: {
                    usable: 1,
                    enable: 'phaseUse',
                    prompt: '选择一名角色造成火属性伤害',
                    filterTarget(card, player, target) {
                        return true;
                    },
                    filterCard(card, player) {
                        return true;
                    },
                    selectCard: 0,
                    line: 'fire',
                    check() {
                        return -1;
                    },
                    selectTarget() {
                        return [1, 1];
                    },
                    multitarget: false,
                    content() {
                        'step 0';
                        target.damage('fire', 1, 'nocard');
                    },
                    ai: {
                        order: 11,
                        result: {
                            target(player, target) {
                                if (target.hasSkillTag('nofire')) return 0;
                                if (lib.config.mode == 'versus') return -1;
                                return get.damageEffect(target, player);
                            },
                        },
                    },
                },
                wuxing_shanghai: {
                    forced: true,
                    trigger: {
                        player: 'phaseBegin',
                    },
                    content() {
                        'step 0';
                        player.damage('fire', 1, 'nocard');
                    },
                },
                wuxing_pingheng: {
                    audio: 'ext:五行天师/audio:2',
                    forced: true,
                    trigger: {
                        player: 'useCardAfter',
                    },
                    logTarget: 'player',
                    forced: true,
                    check(event, player) {
                        return true;
                    },
                    content() {
                        player.draw(1);
                        player.chooseToDiscard('he', true);
                    },
                },
                wuxing_yinji: {
                    audio: 'ext:五行天师/audio:1',
                    usable: 2,
                    prompt: '是否对其造成一点伤害',
                    trigger: {
                        global: ['useCardAfter'],
                    },
                    _priority: 1,
                    filter(event, player) {
                        return event.player != player && get.color(event.card) == 'black';
                    },
                    content() {
                        if (get.color(trigger.card) == 'black') trigger.player.damage(player);
                    },
                    check(event, player) {
                        if (player.getEnemies().includes(event.player)) return true;
                        else return false;
                    },
                },
                wuxing_yangji: {
                    audio: 'ext:五行天师/audio:1',
                    usable: 2,
                    forced: true,
                    trigger: {
                        global: ['useCardAfter'],
                    },
                    _priority: 1,
                    filter(event, player) {
                        return event.player != player && get.color(event.card) == 'red';
                    },
                    content() {
                        if (get.color(trigger.card) == 'red') player.draw(1);
                    },
                },
                wuxing_shiheng: {
                    audio: 'ext:五行天师/audio:1',
                    usable: 1,
                    forced: true,
                    trigger: {
                        global: ['useCardAfter'],
                    },
                    filter(event, player) {
                        return event.player != player && get.color(event.card) == 'red';
                    },
                    content() {
                        var randomNumber = function () {
                            return 0.5 - Math.random();
                        };
                        number = 0;
                        const arr = [...Array(5)].map((a, index) => index + 1).sort(randomNumber);
                        for (var i of arr) {
                            const arr5 = [...Array(5)].map((a, index) => index + 1);
                            for (s of arr5) {
                                if (number > 0) {
                                    break;
                                }
                                if (!player.getEquip(i)) {
                                    equip_init = get.inpile('equip' + i).randomGet();
                                    var card = get.cardPile(equip_init);
                                    if (card) {
                                        player.equip(card, 'gain2');
                                        number++;
                                        break;
                                    } else {
                                        var card = get.discardPile(equip_init);
                                        if (card) {
                                            player.equip(card, 'gain2');
                                            number++;
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                    },
                },
            };
            let niutou_skill = {
                wuxing_mopai: {
                    usable: 1,
                    enable: 'phaseUse',
                    multitarget: false,
                    content() {
                        'step 0';
                        player.draw(5);
                    },
                    ai: {
                        order: 11,
                        result: {
                            player(player, target) {
                                return 5;
                            },
                        },
                    },
                },
            };
            let skill = Object.assign(aming_skill, azheng_skill, niutou_skill);
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '五行天师',
                    connect: true,
                    characterTitle: {
                        wuxingtianshi: '道祖',
                        azheng: '大弟子',
                        aming: '三弟子',
                        wuxing_niutou: '鬼将',
                        wuxing_mamian: '鬼将',
                    },
                    character: {
                        wuxingtianshi: {
                            hp: 5,
                            maxHp: 5,
                            skills: ['wuxing_bumie_init', 'wuxing_bumie', 'wuxing_bumie1', 'wuxing_bumie2', 'wuxing_bumie3', 'wuxing_bumie4', 'unequip'],
                        },
                        azheng: {
                            sex: 'female',
                            group: 'qun',
                            skills: ['wuxing_wufa', 'wuxing_protect'],
                        },
                        aming: {
                            hp: 3,
                            group: 'qun',
                            skills: ['wuxing_taiji'],
                        },
                        wuxing_niutou: {
                            group: 'wei',
                            skills: ['wuxing_ymdingzui', 'wuxing_xinjushou', 'wuxing_oljieming', 'wuxing_mopai'],
                        },
                        wuxing_mamian: {
                            group: 'shu',
                            skills: ['wuxing_diandeng'],
                        },
                        ziwei: {
                            skills: ['wuxing_ziwei_protect', 'wuxing_ziwei', 'wuxing_ziwei1', 'wuxing_ziwei2', 'wuxing_norecover', 'wuxing_songsheng'],
                        },
                        gouchen: {
                            skills: ['wuxing_gouchen_protect', 'wuxing_gouchen', 'wuxing_gouchen1', 'wuxing_norecover', 'wuxing_songsheng'],
                        },
                        changsheng: {
                            hp: 5,
                            skills: ['wuxing_changsheng_protect', 'wuxing_changsheng', 'wuxing_changsheng1', 'wuxing_changsheng2', 'wuxing_norecover', 'wuxing_songsheng'],
                            maxHp: 5,
                        },
                        chengtian: {
                            sex: 'female',
                            hp: 5,
                            skills: ['wuxing_chengtian_protect', 'wuxing_chengtian', 'wuxing_chengtian1', 'wuxing_chengtian2', 'wuxing_norecover', 'wuxing_songsheng'],
                            maxHp: 5,
                        },
                    },
                    characterIntro: {
                        wuxingtianshi: '三国时期的天师,将五行之法发挥至极致,曾经为救阿正杀入阴间,杀得阴间大败,最后为防止人间大乱,阴间也进行了赔礼道歉,天师才放了它们一马',
                        azheng: '天师的大弟子阿正,虽然没有完全掌握师傅的五行之法,但是由于天资聪慧,学会把五行之法融会贯通,创造出属于自己的五行之法,曾经误入阴间,虽然阿正很强但是由于年纪轻被阴了,惹得天师大怒差点毁了阴间',
                        aming: '天师的三弟子阿明,最晚出山的,也是天师最后一位弟子,从小就喜欢太极,为找二师兄而出山',
                        ziwei: '执掌天经地纬、日月星辰,统率三界星神和山川诸神',
                        gouchen: '辅佐玉皇权衡南北两极和天、地、人三才,协助中天北极并主持人间兵革权衡之事',
                        changsheng: '元始天尊之元神分身',
                        chengtian: '掌管山岳土地变化及诸山神、地祇和三山五岳大帝等大神,并节制劫运之事',
                        wuxing_niutou: '鬼将之一,当年与马面一起拦住阿正,结果惨败,战斗风格以防御为主',
                        wuxing_mamian: '鬼将之一,当年与牛头一起拦住阿正,结果惨败,战斗风格以进攻为主',
                    },
                    translate: {
                        ziwei: '中天紫微北极大帝',
                        gouchen: '勾陈上宫天皇大帝',
                        changsheng: '南极长生大帝',
                        chengtian: '承天效法后土皇地祇',
                        wuxingtianshi: '天师',
                        azheng: '阿正',
                        aming: '阿明',
                        wuxing_niutou: '牛头',
                        wuxing_mamian: '马面',
                        wuxing_mopai: '五守',
                        wuxing_mopai_info: '出牌阶段限一次,你摸5张牌',
                        wuxing_diandeng: '点灯',
                        wuxing_diandeng_info: "你的弃牌阶段或者有角色受到伤害后,摸一张牌把一张手牌放到你的武将牌上称为'灯',你可以将'灯'如手牌般使用或打出,你使用或打出'灯'后,你摸一张与'灯'同花色的牌",
                        wuxing_xinjushou: '据守',
                        wuxing_xinjushou_info: '锁定技,结束阶段,你翻面并摸四张牌,弃置一张手牌,若以此法弃置的是装备牌,则你改为使用之',
                        wuxing_oljieming: '节命',
                        wuxing_oljieming_info: '当你受到1点伤害后或死亡后,你可令一名角色摸X张牌.若其手牌数大于X,则其将手牌弃置至X张(X为其体力上限且至多为5).',
                        wuxing_ymdingzui: '顶罪',
                        wuxing_ymdingzui_info: '当其他角色受到伤害来源不为你的伤害时,你可以替其承受此伤害,若此时你的武将牌背面朝上,你翻回正面;锁定技,当你的武将牌翻面后,你可以立即进行一个出牌阶段.',
                        wuxing_guidun1: '鬼魂',
                        wuxing_guidun1_info: '你的手牌最多为八,多余则弃置',
                        wuxing_guidun: '鬼盾',
                        wuxing_guidun_info: '你获得防御技,自己回合开始时对自己造成一点伤害',
                        wuxing_wuxing: '五行',
                        wuxing_wuxing_info: '锁定技,游戏开始时你废掉自己的判定区,自己回合开始时,自己回合结束时,清除所有技能你选择一项属性获得对应的技能,此技能不会失效,你获得抗性(例如翻面等),你受到的伤害只能为一',
                        wuxing_bumie: '不灭',
                        wuxing_bumie_info: '游戏开始时,你废掉自己的判定区,你获得抗性(免疫翻面等)游戏开始,自己回合开始和结束时,回复装备栏,从牌堆和弃牌堆获得五件不同类型的装备和一张杀,你使用杀不可闪避,无视防具,无限距离,不限次数,可以指定任意目标,目标的技能全部失效,你的杀不能变更目标,你受到伤害时,将伤害改成一,立即进行一个额外回合,其他角色回合开始时,你可以视为出一张杀',
                        wuxing_wufa: '五法',
                        wuxing_wufa_info: '锁定技,游戏开始时,自己回合开始时,自己回合结束时,清除所有技能你选择一至五项属性获得对应的技能,此技能不会失效',
                        wuxing_pofa: '破法',
                        wuxing_pofa_info: '锁定技,获得此技能时,你回复装备栏,从牌堆和弃牌堆获得一件类型不同的装备,如果对应装备栏已有则不获得,你从牌堆或弃牌堆获得一张杀,此杀指定一名角色时其失去非锁定技直到回合结束,此杀不可闪避,无视防具,无限距离',
                        wuxing_huichun: '回春',
                        wuxing_huichun_info: '锁定技,获得此技能时,体力上限调整为五点,摸两张牌,回复一点体力,你不会失去体力和减少体力上限',
                        wuxing_xuanbing: '玄冰',
                        wuxing_xuanbing_info: '每个角色回合限两次,可以将任意一张牌当任意基本牌和任意锦囊牌使用和打出',
                        wuxing_huoyun: '火云',
                        wuxing_huoyun_info: '出牌阶段限一次,你使用牌堆的所有非延时锦囊',
                        wuxing_hushen: '护身',
                        wuxing_hushen_info: '每个回合限两次,当你受到一点伤害后,回一点血',
                        wuxing_mujian: '木剑',
                        wuxing_mujian_info: '获得此技能时,回复一点体力,如果你没回复体力则摸一张牌,从牌堆或弃牌堆获得一张杀,此杀无限距离,你的杀能指定任意名角色',
                        wuxing_dingshen: '定身',
                        wuxing_dingshen_info: '获得此技能时,从牌堆获得一张乐不思蜀和一张杀,此杀无限距离',
                        wuxing_lianyu: '炼狱',
                        wuxing_lianyu_info: '出牌阶段,你可以摸一张牌,选择使用一张牌或弃置一张牌.若你以此法选择了弃置牌,则本回合内此技能失效',
                        wuxing_huxin: '护心',
                        wuxing_huxin_info: '锁定技,你受到伤害时,将伤害值变成一',
                        wuxing_fushen: '缚神',
                        wuxing_fushen_info: '出牌阶段限一次,摸一张牌,你令一个目标翻面,你失去一点体力',
                        wuxing_huoyu: '火雨',
                        wuxing_huoyu_info: '出牌阶段限一次,你分配两点火焰伤害',
                        wuxing_jishen: '集神',
                        wuxing_jishen_info: '其他角色的准备阶段,你摸一张牌',
                        wuxing_qinshi: '侵蚀',
                        wuxing_qinshi_info: '出牌阶段限一次,废除一个角色的一个装备栏',
                        wuxing_zhenyuan: '镇元',
                        wuxing_zhenyuan_info: '锁定技,当你受到伤害后,可以立即结束当前角色的出牌阶段',
                        wuxing_qimen: '奇门',
                        wuxing_qimen_info: '当一名角色使用的一张非装备牌对其指定的目标即将生效时,若此牌目标只有一个且不为你,你可以重新为此牌指定新的目标(新的目标不得为原来的目标),若指定的对象为你,你摸一张牌.',
                        wuxing_zhenhun: '镇魂',
                        wuxing_zhenhun_info: '自己回合出牌阶段或回合结束时,你可以选择一名角色,将其手牌摸至X或弃至X张(X为你的手牌数)',
                        wuxing_pobing: '破冰',
                        wuxing_pobing_info: '锁定技,获得此技能时你从牌堆获得一张杀,此杀伤害+1,无法闪避,使用此杀你失去一点体力',
                        wuxing_jingang: '金刚',
                        wuxing_jingang_info: '自己回合结束时,获得体力上限的护甲,你的护甲最大值为体力上限,若你的手牌小于等于一,你获得回天',
                        wuxing_gouhun: '勾魂',
                        wuxing_gouhun_info: '出牌阶段限一次,令一个角色混乱',
                        wuxing_jieli: '借力',
                        wuxing_jieli_info: '当你成为牌的目标时,你可以弃置一张牌并将此牌转移给一名其他角色(可以是牌的使用者)',
                        wuxing_tiangang: '天罡',
                        wuxing_tiangang_info: '其他角色的准备阶段,你可以视为对其使用一张无距离限制的杀',
                        wuxing_heli: '合力',
                        wuxing_heli_info: '出牌阶段限一次,你令一名其他角色进行一个额外回合',
                        wuxing_huxing: '护形',
                        wuxing_huxing_info: '锁定技,你选择一名其他角色,该角色受到的第一次伤害由你来承受,你受到一点伤害后,摸一张牌',
                        wuxing_shoushen: '收神',
                        wuxing_shoushen_info: '锁定技,有角色受到伤害时,你摸一张牌',
                        wuxing_jingxin: '静心',
                        wuxing_jingxin_info: '锁定技,获得此技能时,摸一张牌,将自身的判定区的牌全部丢弃,移除所有异常状态,并移除判定区',
                        wuxing_sanhua: '三华',
                        wuxing_sanhua_info: '你的杀不会造成伤害,出牌阶段限一次,你弃一张牌令一名角色回复两点体力,你与其摸一张牌',
                        wuxing_banshan: '搬山',
                        wuxing_banshan_info: '出牌阶段限一次,你选择两名角色互换位置',
                        wuxing_tishu: '体术',
                        wuxing_tishu_info: '你不能使用锦囊牌和装备牌,你可以将任意一张牌当任意基本牌使用和打出,你使用基本牌无次数限制',
                        wuxing_huitian: '回天',
                        wuxing_huitian_info: '锁定技,自己回合开始或回合结束,从其他角色的区域获得一张牌,如果有角色的区域没牌则摸一张牌,你手牌不超过体力上限的话,摸至体力上限',
                        wuxing_qishang: '七伤',
                        wuxing_qishang_info: '出牌阶段限一次,你把所有手牌和装备交给一名其他角色,该角色弃置所有的手牌再摸等量的牌并展示之,你弃置其中所有的非基本牌,并对其造成等量的伤害',
                        wuxing_leidong: '五雷',
                        wuxing_leidong_info: '限定技,出牌阶段,你的手牌大于或等于5张时才能发动,你失去4点体力,弃置所有牌并翻面,对一名角色造成5点雷电伤害',
                        wuxing_ziwei: '紫微',
                        wuxing_ziwei_info: '此技能不会失效和删除,你的杀能指定除自己外任意目标,你使用杀无距离限制,无法闪避,无视防具,每个角色的回合开始,你可以视为使用一张杀',
                        wuxing_gouchen: '勾陈',
                        wuxing_gouchen_info: '此技能不会失效和删除,你无法回复体力,当一名角色使用的一张牌对其指定的目标即将生效时,你可以重新为此牌指定新的目标,若指定的对象为你,你摸一张牌,你使用牌指定目标无需合法.',
                        wuxing_changsheng: '长生',
                        wuxing_changsheng_info: '此技能不会失效和删除,你的准备阶段,你摸体力上限的牌,你的手牌无上限,每个角色的回合开始,你摸两张牌',
                        wuxing_chengtian: '承天',
                        wuxing_chengtian_info: '此技能不会失效和删除,体力流失和体力上限变化对你无效,你受到伤害时,将伤害值变成一,当你受到伤害后,从其他角色的区域获得两张牌,如果有角色的区域没牌则摸一张牌,你摸一张牌,全场流失两点体力,结束当前角色的出牌阶段',
                        wuxing_songsheng: '送神',
                        wuxing_songsheng_info: '此技能不会失效和删除,当你濒临死亡时,变回阿正体力上限调整至4点,体力调整至三点并立即进行一个额外回合',
                        wuxing_norecover: '神体',
                        wuxing_norecover_info: '此技能不会失效和删除,你无法回复体力',
                        wuxing_taiji: '太极',
                        wuxing_taiji_info: '你使用牌时,成为牌的目标时,获得不同的技能',
                        wuxing_yinlei: '阴雷',
                        wuxing_yinlei_info: '出牌阶段,你使用黑色牌时获得此技能到回合结束,出牌阶段限一次,你对一名其他角色造成一点雷属性伤害',
                        wuxing_yanglei: '阳火',
                        wuxing_yanglei_info: '出牌阶段,你使用红色牌时获得此技能到回合结束,出牌阶段限一次,你对一名其他角色造成一点火属性伤害',
                        wuxing_pingheng: '平衡',
                        wuxing_pingheng_info: '锁定技,出牌阶段,当你同时有阴雷和阳火时获得此技能到回合结束,当你使用牌时,你摸一张牌弃一张牌',
                        wuxing_yinji: '阴极',
                        wuxing_yinji_info: '当其他角色使用黑色牌后获得此技能到回合结束,每回合限两次,其他角色每使用一张黑色牌,你可以对其造成一点伤害',
                        wuxing_yangji: '阳极',
                        wuxing_yangji_info: '锁定技,当其他角色使用红色牌后获得此技能到回合结束,每回合限两次,其他角色每使用一张红色牌,你摸一张牌',
                        wuxing_shiheng: '失衡',
                        wuxing_shiheng_info: '锁定技,当你同时有阳极和阴极时获得此技能到回合结束,当其他角色使用牌时,你从牌堆或弃牌堆获得一张装备',
                    },
                    skill: skill,
                };
                for (const i in QQQ.character) {
                    const info = QQQ.character[i];
                    if (!info.hp) {
                        info.hp = 4;
                    }
                    if (!info.maxHp) {
                        info.maxHp = 4;
                    }
                    if (!info.group) {
                        info.group = 'shen';
                    }
                    if (!info.sex) {
                        info.sex = 'male';
                    }
                    info.isZhugong = true;
                    if (!info.trashBin) {
                        info.trashBin = [`ext:五行天师/image/${i}.jpg`];
                    }
                    else {
                        info.trashBin.push(`ext:五行天师/image/${i}.jpg`);
                    }
                    info.dieAudios = [`ext:五行天师/audio/${i}.mp3`];
                }
                lib.config.all.characters.add('五行天师');
                lib.config.characters.add('五行天师');
                lib.translate['五行天师_character_config'] = `五行天师`;
                return QQQ;
            });
        },
        config: {
            wuxing_config_qingshen: {
                name: '请神(开启后能与神明一战)',
                init: false
            },
        },
        package: {
            intro: '<br><br><span style="color: gold">潜水的火修复版<br>『无名杀扩展大全群』:771901025</span><br><br>' + `${game.storage.time(1677769065303, new Date().getTime())}` + '<br/><br/>更新内容: 调整了阿明和牛头的强度<br/><br/>下次更新内容: 添加武将,以召唤为主<br/><br/>非常感谢魂将包,金庸等等,参考了部分代码<br/><div onclick=window.open(\'https://tieba.baidu.com/p/7922004373?pid=144736264427&cid=0#144736264427\')><span style="color: yellow;text-decoration: underline;font-style: oblique">点击这里进行反馈</span></div>',
            author: '菜狗工程师',
            version: '1.0.5',
        },
    };
});

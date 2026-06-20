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
        name: '军争加强',
        content(config, pack) {
            game.reloadCurrent2 = function () {
                game.saveConfig('continue_name', [game.me.name1 || game.me.name, game.me.name2]);
                game.saveConfig('mode', lib.config.mode);
                localStorage.setItem(lib.configprefix + 'directstart', true);
                game.reload();
            };
            if (config.color) {
                lib.skill._colors = {
                    trigger: { global: ['gameDrawAfter', 'phaseBefore'] },
                    forced: true,
                    _priority: -1,
                    content() {
                        'step 0';
                        for (var x = 0; x < player.skills.length; x++) {
                            if (lib.translate[player.skills[x] + '_info']) {
                                if (lib.translate[player.skills[x] + '_info'].includes('锁定技')) {
                                    lib.translate[player.skills[x] + '_info'] = lib.translate[player.skills[x] + '_info'].replace(/锁定技/g, '<span class="yellowtext">锁定技</span>');
                                }
                                if (lib.translate[player.skills[x] + '_info'].includes('作者技')) {
                                    lib.translate[player.skills[x] + '_info'] = lib.translate[player.skills[x] + '_info'].replace(/作者技/g, '<span class="yellowtext">作者技</span>');
                                }
                                if (lib.translate[player.skills[x] + '_info'].includes('限定技')) {
                                    lib.translate[player.skills[x] + '_info'] = lib.translate[player.skills[x] + '_info'].replace(/限定技/g, '<span class="yellowtext">限定技</span>');
                                }
                                if (lib.translate[player.skills[x] + '_info'].includes('觉醒技')) {
                                    lib.translate[player.skills[x] + '_info'] = lib.translate[player.skills[x] + '_info'].replace(/觉醒技/g, '<span class="greentext">觉醒技</span>');
                                }
                                if (lib.translate[player.skills[x] + '_info'].includes('主将技')) {
                                    lib.translate[player.skills[x] + '_info'] = lib.translate[player.skills[x] + '_info'].replace(/主将技/g, '<span class="bluetext">主将技</span>');
                                }
                                if (lib.translate[player.skills[x] + '_info'].includes('副将技')) {
                                    lib.translate[player.skills[x] + '_info'] = lib.translate[player.skills[x] + '_info'].replace(/副将技/g, '<span class="bluetext">副将技</span>');
                                }
                                if (lib.translate[player.skills[x] + '_info'].includes('阵法技')) {
                                    lib.translate[player.skills[x] + '_info'] = lib.translate[player.skills[x] + '_info'].replace(/阵法技/g, '<span class="bluetext">阵法技</span>');
                                }
                                if (lib.translate[player.skills[x] + '_info'].includes('主公技')) {
                                    lib.translate[player.skills[x] + '_info'] = lib.translate[player.skills[x] + '_info'].replace(/主公技/g, '<span class="firetext">主公技</span>');
                                }
                                if (lib.translate[player.skills[x] + '_info'].includes('盟主技')) {
                                    lib.translate[player.skills[x] + '_info'] = lib.translate[player.skills[x] + '_info'].replace(/盟主技/g, '<span class="firetext">盟主技</span>');
                                }
                                if (lib.translate[player.skills[x] + '_info'].includes('回复')) {
                                    lib.translate[player.skills[x] + '_info'] = lib.translate[player.skills[x] + '_info'].replace(/回复/g, '<span style="color: #87CEEB">回复</span>');
                                }
                                if (lib.translate[player.skills[x] + '_info'].includes('回复')) {
                                    lib.translate[player.skills[x] + '_info'] = lib.translate[player.skills[x] + '_info'].replace(/回复/g, '<span style="color: #87CEEB">回复</span>');
                                }
                                if (lib.translate[player.skills[x] + '_info'].includes('伤害')) {
                                    lib.translate[player.skills[x] + '_info'] = lib.translate[player.skills[x] + '_info'].replace(/伤害/g, '<span style="color: #FFC0CB">伤害</span>');
                                }
                                if (lib.translate[player.skills[x] + '_info'].includes('翻面')) {
                                    lib.translate[player.skills[x] + '_info'] = lib.translate[player.skills[x] + '_info'].replace(/翻面/g, '<span style="color: #9370DB">翻面</span>');
                                }
                                if (lib.translate[player.skills[x] + '_info'].includes('获得技能')) {
                                    lib.translate[player.skills[x] + '_info'] = lib.translate[player.skills[x] + '_info'].replace(/获得技能/g, '<span style="color: #FF1493">获得技能</span>');
                                }
                                if (lib.translate[player.skills[x] + '_info'].includes('失去技能')) {
                                    lib.translate[player.skills[x] + '_info'] = lib.translate[player.skills[x] + '_info'].replace(/失去技能/g, '<span style="color: #6A5ACD">失去技能</span>');
                                }
                                if (lib.translate[player.skills[x] + '_info'].includes('废除')) {
                                    lib.translate[player.skills[x] + '_info'] = lib.translate[player.skills[x] + '_info'].replace(/废除/g, '<span style="color: #708090">废除</span>');
                                }
                                if (lib.translate[player.skills[x] + '_info'].includes('视为')) {
                                    lib.translate[player.skills[x] + '_info'] = lib.translate[player.skills[x] + '_info'].replace(/视为/g, '<span style="color: #00FF7F">视为</span>');
                                }
                                if (lib.translate[player.skills[x] + '_info'].includes('使用')) {
                                    lib.translate[player.skills[x] + '_info'] = lib.translate[player.skills[x] + '_info'].replace(/使用/g, '<span style="color: #00FFFF">使用</span>');
                                }
                            }
                        }
                    },
                };
            }
            if (config.Filter) {
                lib.skill._jz_Filter = {
                    trigger: {
                        player: 'enterGame',
                    },
                    forced: true,
                    _priority: 999,
                    filter(event, player) {
                        return true;
                    },
                    content() {
                        for (var y = 0; y < player.skills.length; y++) {
                            var skillx = lib.skill[player.skills[y]];
                            if (skillx) {
                                skillx.usable = 5;
                                skillx.filter = function (event, player) {
                                    return true;
                                };
                                if (skillx.filterTarget)
                                    skillx.filterTarget = function (card, player, target) {
                                        return true;
                                    };
                                if (skillx.filterCard) skillx.filterCard = true;
                                if (skillx.selectTarget) skillx.selectTarget = [1, Infinity];
                            }
                        }
                    },
                };
            }
            game.junzheng = {};
            game.junzheng.players = game.players;
            game.junzheng.dead = game.dead;
            lib.element.player.revivere = function (hp, log) {
                if (log !== false) game.log(this, '复活');
                if (this.maxHp < 1) this.maxHp = 1;
                if (hp) this.hp = hp;
                else {
                    this.hp = 1;
                }
                game.addVideo('revive', this);
                this.removeAttribute('style');
                this.node.avatar.style.transform = '';
                this.node.avatar2.style.transform = '';
                this.node.hp.show();
                this.node.equips.show();
                this.node.count.show();
                this.update();
                var player;
                player = this.previousSeat;
                while (player.isDead()) player = player.previousSeat;
                player.next = this;
                this.previous = player;
                player = this.nextSeat;
                while (player.isDead()) player = player.nextSeat;
                player.previous = this;
                this.next = player;
                game.players.add(this);
                game.dead.remove(this);
                if (this == game.me) {
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
            };
            lib.element.player.jzdie = function (reason) {
                var next = game.createEvent('jzdie');
                next.forceDie = true;
                next.player = this;
                next.reason = reason;
                if (reason) next.source = reason.source;
                next.setContent('jzdie');
                return next;
            };
            lib.element.event.jzdie = function (reason) {
                event.trigger('jzdie');
            };
            lib.element.content.jzdie = function () {
                'step 0';
                event.forceDie = true;
                if (_status.roundStart == player) {
                    _status.roundStart = player.next || player.next || game.players[0];
                }
                var unseen = false;
                if (player.classList.contains('unseen')) {
                    player.classList.remove('unseen');
                    unseen = true;
                }
                var logvid = game.logv(player, 'die', source);
                event.logvid = logvid;
                if (unseen) {
                    player.classList.add('unseen');
                }
                if (source && source != player) {
                    game.log(player, '被', source, '杀害');
                    if (source.stat[source.stat.length - 1].kill == undefined) {
                        source.stat[source.stat.length - 1].kill = 1;
                    } else {
                        source.stat[source.stat.length - 1].kill++;
                    }
                } else {
                    game.log(player, '阵亡');
                }
                if (!game.reserveDead) {
                    for (var mark in player.marks) {
                        player.unmarkSkill(mark);
                    }
                    while (player.node.marks.childNodes.length > 1) {
                        player.node.marks.lastChild.remove();
                    }
                    game.broadcast(function (player) {
                        while (player.node.marks.childNodes.length > 1) {
                            player.node.marks.lastChild.remove();
                        }
                    }, player);
                }
                for (var i in player.tempSkills) {
                    player.removeSkill(i);
                }
                var skills = player.getSkills();
                for (var i = 0; i < skills.length; i++) {
                    if (lib.skill[skills[i]].temp) {
                        player.removeSkill(skills[i]);
                    }
                }
                player.removeEquipTrigger();
                game.broadcastAll(
                    function (player, cards) {
                        //player.classList.add('dead');
                        player.className += ' dead';
                        // player.classList.remove('linked');
                        player.classList.remove('turnedover');
                        player.classList.remove('out');
                        player.node.count.innerHTML = '0';
                        player.node.hp.hide();
                        player.node.equips.hide();
                        player.node.count.hide();
                        player.previous.next = player.next;
                        player.next.previous = player.previous;
                        game.players.remove(player);
                        game.dead.push(player);
                        _status.dying.remove(player);
                        if (game.online && player == game.me && !_status.over && !game.controlOver && !ui.exit) {
                            if (lib.mode[lib.configOL.mode].config.dierestart) {
                                ui.create.exit();
                            }
                        }
                        if (lib.config.background_speak) {
                            if (lib.character[player.name] && lib.character[player.name][4].includes('die_audio')) {
                                game.playAudio('die', player.name);
                            }
                            // else if(true){
                            else {
                                game.playAudio('die', player.name, function () {
                                    game.playAudio('die', player.name.slice(player.name.indexOf('_') + 1));
                                });
                            }
                        }
                    },
                    player,
                    event.cards
                );
                if (!_status.connectMode && player == game.me && !_status.over && !game.controlOver) {
                    ui.control.show();
                    if (get.config('revive') && lib.mode[lib.config.mode].config.revive && !ui.revive) {
                        ui.revive = ui.create.control('revive', ui.click.dierevive);
                    }
                    if (get.config('continue_game') && !ui.continue_game && lib.mode[lib.config.mode].config.continue_game && !_status.brawl) {
                        ui.continue_game = ui.create.control('再战', game.reloadCurrent);
                    }
                    if (get.config('dierestart') && lib.mode[lib.config.mode].config.dierestart && !ui.restart) {
                        ui.restart = ui.create.control('restart', game.reload);
                    }
                }
                if (!_status.connectMode && player == game.me && !game.modeSwapPlayer) {
                    // _status.auto=false;
                    if (ui.auto) {
                        // ui.auto.classList.remove('glow');
                        ui.auto.hide();
                    }
                    if (ui.wuxie) ui.wuxie.hide();
                }
                game.addVideo('diex', player);
                if (event.animate !== false) {
                    player.$jzdie(source);
                }
                if (player.dieAfter) player.dieAfter(source);
                event.trigger('jzdie');
                ('step 1');
                if (player.isDead()) {
                    event.cards = player.getCards('hej');
                    if (event.cards.length) {
                        player.$throw(event.cards, 1000);
                        game.log(player, '弃置了', event.cards, event.logvid);
                        game.cardsDiscard(event.cards);
                    }
                }
                if (typeof _status.coin == 'number' && source && !_status.auto) {
                    if (source == game.me || source.isUnderControl()) {
                        _status.coin += 10;
                    }
                }
                if (source && lib.config.border_style == 'auto' && (lib.config.autoborder_count == 'kill' || lib.config.autoborder_count == 'mix')) {
                    switch (source.node.framebg.dataset.auto) {
                        case 'gold':
                        case 'silver':
                            source.node.framebg.dataset.auto = 'gold';
                            break;
                        case 'bronze':
                            source.node.framebg.dataset.auto = 'silver';
                            break;
                        default:
                            source.node.framebg.dataset.auto = lib.config.autoborder_start || 'bronze';
                    }
                    if (lib.config.autoborder_count == 'kill') {
                        source.node.framebg.dataset.decoration = source.node.framebg.dataset.auto;
                    } else {
                        var dnum = 0;
                        for (var j = 0; j < source.stat.length; j++) {
                            if (source.stat[j].damage != undefined) dnum += source.stat[j].damage;
                        }
                        source.node.framebg.dataset.decoration = '';
                        switch (source.node.framebg.dataset.auto) {
                            case 'bronze':
                                if (dnum >= 4) source.node.framebg.dataset.decoration = 'bronze';
                                break;
                            case 'silver':
                                if (dnum >= 8) source.node.framebg.dataset.decoration = 'silver';
                                break;
                            case 'gold':
                                if (dnum >= 12) source.node.framebg.dataset.decoration = 'gold';
                                break;
                        }
                    }
                    source.classList.add('topcount');
                }
            };
            lib.element.player.$jzdie = function () {
                game.addVideo('die', this);
                game.broadcast(function (player) {
                    player.$jzdie();
                }, this);
                if (lib.config.die_move != 'off') {
                    this.$jzdieflip(lib.config.die_move);
                }
                if (lib.element.player.$dieAfter) {
                    lib.element.player.$dieAfter.call(this);
                }
            };
            lib.element.player.$jzdieflip = function (type) {
                var top0 = ui.window.offsetHeight / 2;
                var left0 = ui.window.offsetWidth / 2;
                var ratio = (left0 - this.getLeft()) / (top0 - this.getTop());
                var left = Math.abs((50 * ratio) / Math.sqrt(1 + ratio * ratio));
                var top = Math.abs(50 / Math.sqrt(1 + ratio * ratio));
                if (left0 - this.getLeft() > 0) left = -left;
                if (top0 - this.getTop() > 0) top = -top;
                if (get.is.mobileMe(this)) {
                    left = -Math.random() * 5 - 10;
                    top = Math.random() * 5 + 10;
                }
                if (this._chesstransform) {
                    left += this._chesstransform[0];
                    top += this._chesstransform[1];
                }
                var transform = 'translate(' + left + 'px,' + top + 'px) ' + 'rotate(' + (Math.random() * 20 - 10) + 'deg) ';
                if (type == 'flip') {
                    if (game.layout == 'long' || game.layout == 'long2') {
                        transform += 'rotateY(180deg)';
                    } else {
                        transform += Math.random() - 0.5 < 0 ? 'rotateX(180deg)' : 'rotateY(180deg)';
                    }
                }
                if (get.is.mobileMe(this)) {
                    this.node.avatar.style.transform = transform;
                    this.node.avatar2.style.transform = transform;
                    this.style.transform = '';
                } else {
                    this.node.avatar.style.transform = '';
                    this.node.avatar2.style.transform = '';
                    this.style.transform = transform;
                }
                this.queue(false);
            };
            if (config.blank) {
                lib.skill._jz_blank = {
                    trigger: {
                        global: ['chooseToUseBefore', 'gameStart', 'chooseButtonBefore', 'chooseControlBefore'],
                    },
                    forced: true,
                    _priority: 999,
                    filter(event, player) {
                        return true;
                    },
                    content() {
                        for (var a in lib.skill.globalmap) {
                            if (lib.skill.globalmap[a].includes(player)) {
                                lib.skill.globalmap[a].remove(player);
                                if (lib.skill.globalmap[a].length == 0) {
                                    game.removeGlobalSkill(a);
                                }
                            }
                        }
                        for (var y = 0; y < player.skills.length; y++) {
                            var skillx = lib.skill[player.skills[y]];
                            if (skillx) {
                                if (skillx.init) skillx.init = function (player) { };
                                skillx.filter = function (event, player) {
                                    return false;
                                };
                                // if(skillx.global)  lib.skill[skillx.global]={}
                                if (skillx.enable) delete skillx.enable;
                                if (skillx.trigger) skillx.trigger = {};
                                if (skillx.mod) {
                                    skillx.mod = {};
                                }
                                if (skillx.filterTarget) {
                                    skillx.filterTarget = function (card, player, target) {
                                        return false;
                                    };
                                }
                                if (skillx.group) skillx.group = [];
                            }
                        }
                        for (var i in lib.character) {
                            for (var j = 0; j < lib.character[i][3].length; j++) {
                                var info = lib.skill[lib.character[i][3][j]];
                                if (info) {
                                    if (info.init) info.init = function (player) { };
                                    info.filter = function (event, player) {
                                        return false;
                                    };
                                    //if(info.global) lib.skill[info.global]={}
                                    if (info.enable) delete info.enable;
                                    if (info.trigger) info.trigger = {};
                                    if (info.mod) {
                                        info.mod = {};
                                    }
                                    if (info.filterTarget) {
                                        info.filterTarget = function (card, player, target) {
                                            return false;
                                        };
                                    }
                                    if (info.group) info.group = [];
                                }
                            }
                        }
                    },
                };
            }
            if (config.music) {
                lib.skill._jz_music = {
                    trigger: {
                        global: ['gameStart'],
                    },
                    forced: true,
                    _priority: 999,
                    content() {
                        ui.backgroundMusic.src = 'extension/军争加强/audio/不朽之罪.mp3';
                    },
                };
            }
            if (config.luanwu) {
                /*  lib.skill.luanwu=lib.skill.jz_乱武模式
                  lib.translate['luanwu'+'_info']="锁定技,所有角色视为拥有【完杀】.出牌阶段,你可令除你外的所有角色依次对与其距离最近的另一名角色使用一张【杀】,无法如此做者失去1点体力"
                  lib.skill.jz_乱武=lib.skill.jz_乱武模式
                  lib.translate['jz_乱武'+'_info']="锁定技,所有角色视为拥有【完杀】.出牌阶段,你可令除你外的所有角色依次对与其距离最近的另一名角色使用一张【杀】,无法如此做者失去1点体力"*/
                lib.skill._jz_luanwu = {
                    trigger: {
                        global: ['gameStart'],
                    },
                    forced: true,
                    _priority: 999,
                    content() {
                        if (
                            game.hasPlayer(function (current) {
                                return current.name == 'jz_贾文和' || current.name == 'jiaxu';
                            })
                        ) {
                            game.countPlayer(function (current) {
                                if (!current.hasSkill('wansha2')) {
                                    //player.line(current,'green');
                                    current.addSkill('wansha2');
                                }
                                if (current.hasSkill('luanwu') || current.hasSkill('jz_乱武')) {
                                    current.removeSkill('luanwu');
                                    current.removeSkill('jz_乱武');
                                    current.addSkill('jz_乱武模式');
                                }
                            });
                        }
                    },
                };
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
            lib.skill._jz_悲歌2 = {
                mod: {
                    cardDiscardable(card, player) {
                        if (player.storage.jz_悲歌2 == get.type(card, 'trick')) return false;
                    },
                    cardEnabled(card, player) {
                        if (player.storage.jz_悲歌2 == get.type(card, 'trick')) return false;
                    },
                    cardUsable(card, player) {
                        if (player.storage.jz_悲歌2 == get.type(card, 'trick')) return false;
                    },
                    cardRespondable(card, player) {
                        if (player.storage.jz_悲歌2 == get.type(card, 'trick')) return false;
                    },
                    cardSavable(card, player) {
                        if (player.storage.jz_悲歌2 == get.type(card, 'trick')) return false;
                    },
                },
            };
            lib.skill._jz_连环 = {
                trigger: { global: 'gameStart' },
                forced: true,
                _priority: 999,
                content() {
                    player.storage.jz_连环 = [];
                    for (var x = 0; x < player.skills.length; x++) {
                        player.storage.jz_连环.add(player.skills[x]);
                    }
                    game.countPlayer(function (current1) {
                        if (current1.hasSkill('jz_连环')) {
                            player.storage.jz_连环2 = true;
                        }
                    });
                },
            };
            lib.skill._jz_连环2 = {
                trigger: { global: 'die' },
                forced: true,
                filter(event, player) {
                    return event.player.hasSkill('jz_连环');
                },
                content() {
                    if (player.classList.contains('linked2')) {
                        player.classList.remove('linked2');
                        game.log(player, '解除连环');
                        player.popup('连环');
                        player.skills = player.storage.jz_连环;
                    }
                    delete player.storage.jz_连环2;
                },
            };
            lib.skill._jz_连环3 = {
                trigger: { global: 'linkAfter' },
                forced: true,
                filter(event, player) {
                    if (
                        !game.hasPlayer(function (current) {
                            return current.storage.jz_连环2;
                        })
                    ) {
                        return false;
                    }
                    if (
                        game.hasPlayer(function (current) {
                            return current.hasSkill('jz_连环');
                        })
                    ) {
                        return false;
                    }
                    return true;
                },
                content() {
                    'step 0';
                    game.countPlayer(function (current1) {
                        current1.skills = current1.storage.jz_连环;
                        if (current1.storage.jz_连环2) {
                            delete current1.storage.jz_连环2;
                        }
                    });
                },
            };
            if (lib.extensionPack['军争加强']) {
                lib.skill._jz_赵襄 = {
                    trigger: {
                        player: ['dieBegin'],
                    },
                    forced: true,
                    nobracket: true,
                    content() {
                        if (player.name == 'jz_赵襄' && !player.hasSkill('jz_隐退') && get.mode() == 'identity') {
                            player.classList.add('dead');
                            var identity2 = game.me.identity;
                            game.removePlayer(trigger.player);
                            if (get.mode() == 'identity') {
                                if (_status.brawl && _status.brawl.checkResult) {
                                    _status.brawl.checkResult();
                                    return;
                                }
                                if (!game.zhu) {
                                    if (get.population('fan') == 0) {
                                        switch (identity2) {
                                            case 'fan':
                                                game.over(false);
                                                break;
                                            case 'zhong':
                                                game.over(true);
                                                break;
                                            default:
                                                game.over();
                                                break;
                                        }
                                    } else if (get.population('zhong') == 0) {
                                        switch (identity2) {
                                            case 'fan':
                                                game.over(true);
                                                break;
                                            case 'zhong':
                                                game.over(false);
                                                break;
                                            default:
                                                game.over();
                                                break;
                                        }
                                    }
                                    return;
                                }
                                if (game.zhu.isAlive() && get.population('fan') + get.population('nei') > 0) return;
                                if (game.zhong) {
                                    game.zhong.identity = 'zhong';
                                }
                                game.showIdentity();
                                if (identity2 == 'zhu' || identity2 == 'zhong') {
                                    if (game.zhu.classList.contains('dead')) {
                                        game.over(false);
                                    } else {
                                        game.over(true);
                                    }
                                } else if (identity2 == 'nei') {
                                    if (game.players.length == 1 && game.me.isAlive()) {
                                        game.over(true);
                                    } else {
                                        game.over(false);
                                    }
                                } else {
                                    if ((get.population('fan') + get.population('zhong') > 0 || get.population('nei') > 1) && game.zhu.classList.contains('dead')) {
                                        game.over(true);
                                    } else {
                                        game.over(false);
                                    }
                                }
                            }
                        }
                    },
                };
                lib.skill._jz_zuozhe = {
                    trigger: {
                        global: ['gameStart', 'phaseBegin'],
                        player: 'enterGame',
                    },
                    forced: true,
                    silent: true,
                    forced: true,
                    popup: false,
                    _priority: 999,
                    content() {
                        'step 0';
                        if (player.name == 'jz_透心凉') {
                            player.addSkill('jz_换天');
                            player.addSkill('jz_封魔');
                            if (trigger.name != 'phase') {
                                player.addTempSkill('jz_封印2', { player: 'phaseBegin' });
                                player.popup('一矢');
                            }
                        }
                        ('step 1');
                        if (player.hasSkill('jz_回天')) {
                            player.hp = player.maxHp;
                            player.popup('回天');
                            player.update();
                        }
                    },
                };
                lib.skill._jz_zuozhe2 = {
                    trigger: {
                        player: ['damageBefore', 'loseHpBefore', 'dying'],
                    },
                    forced: true,
                    _priority: 999,
                    content() {
                        if (player.hasSkill('jz_回天')) {
                            player.recover();
                            player.popup('回天');
                        }
                    },
                };
            }
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '军争加强',
                    connect: true,
                    characterSort: {},
                    dynamicTranslate: {},
                    characterTitle: {},
                    characterIntro: {},
                    skill: {
                        jz_铁骑: {
                            audio: ['tieji', 2], //QQQ
                            trigger: {
                                player: 'shaBegin',
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            logTarget: 'target',
                            content() {
                                'step 0';
                                player.judge(function () {
                                    return 0;
                                });
                                if (!trigger.target.hasSkill('fengyin')) {
                                    trigger.target.addTempSkill('fengyin');
                                }
                                ('step 1');
                                player.judge(function (card) {
                                    if (get.zhu(_status.event.player, 'shouyue')) {
                                        if (card.suit != 'spade') return 2;
                                    } else {
                                        if (get.color(card) == 'red') return 2;
                                    }
                                    return -0.5;
                                });
                                ('step 2');
                                if (result.bool) {
                                    trigger.directHit = true;
                                }
                            },
                        },
                        jz_芊芊: {
                            trigger: {
                                global: ['gameStart', 'phaseBefore'],
                                player: 'enterGame',
                            },
                            forced: true,
                            silent: true,
                            forced: true,
                            popup: false,
                            _priority: null,
                            content() {
                                'step 0';
                                if (player.name == 'jz_透心凉') {
                                    player.addSkill('jz_芊芊3');
                                    player.addSkill('jz_报复');
                                    player.addSkill('jz_回天');
                                }
                                ('step 1');
                                if (player.name == 'jz_透心凉') {
                                    player.hp = player.maxHp;
                                    player.update();
                                }
                            },
                        },
                        jz_芊芊2: {
                            trigger: {
                                player: ['dieBefore'],
                            },
                            forced: true,
                            filter(event, player) {
                                return player.hp > 0;
                            },
                            content() {
                                if (player.name == 'jz_透心凉' || player.name1 == 'jz_透心凉' || player.name2 == 'jz_透心凉') {
                                    player.addSkill('jz_万剑2');
                                    trigger.untrigger();
                                    trigger.finish();
                                    player.hp == player.hp;
                                }
                            },
                        },
                        js_不屈: {
                            audio: ['buqu', 2],
                            trigger: {
                                player: 'dying',
                            },
                            forced: true,
                            _priority: 10,
                            filter(event, player) {
                                return player.maxHp > 0 && player.hp <= 0;
                            },
                            content() {
                                'step 0';
                                event.card = get.cards()[0];
                                if (player.storage.buqu == undefined) player.storage.buqu = [];
                                player.storage.buqu.push(event.card);
                                player.showCards(player.storage.buqu, '不屈');
                                player.markSkill('buqu');
                                ('step 1');
                                for (var i = 0; i < player.storage.buqu.length - 1; i++) {
                                    if (event.card.number && event.card.number == player.storage.buqu[i].number) return;
                                }
                                trigger.cancel();
                                if (player.hp <= 0) {
                                    player.hp = 1;
                                    player.update();
                                }
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    if (player.storage.buqu && player.storage.buqu.length) return num - player.hp + player.storage.buqu.length;
                                },
                            },
                            intro: {
                                content: 'cards',
                                onunmark(storage, player) {
                                    if (storage && storage.length) {
                                        player.$throw(storage);
                                        for (var i = 0; i < storage.length; i++) {
                                            storage[i].discard();
                                        }
                                        delete player.storage.buqu;
                                    }
                                },
                            },
                        },
                        jz_薄发: {
                            audio: 'ext:军争加强/audio:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.storage.tuntian.length;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    return ui.create.dialog('薄发', player.storage.tuntian, 'hidden');
                                },
                                backup(links, player) {
                                    return {
                                        filterCard() {
                                            return false;
                                        },
                                        selectCard: -1,
                                        viewAs: { name: 'juedou' },
                                        cards: links,
                                        onuse(result, player) {
                                            result.cards = lib.skill[result.skill].cards;
                                            var card = result.cards[0];
                                            player.storage.tuntian.remove(card);
                                            if (!player.storage.tuntian.length) {
                                                player.unmarkSkill('tuntian');
                                            } else {
                                                player.markSkill('tuntian');
                                            }
                                            player.recover();
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '选择薄发的目标';
                                },
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player(player) {
                                        return player.storage.tuntian.length - 1;
                                    },
                                },
                            },
                        },
                        jz_急袭: {
                            audio: ['jixi', 2],
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.storage.tuntian.length;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    return ui.create.dialog('急袭', player.storage.tuntian, 'hidden');
                                },
                                backup(links, player) {
                                    return {
                                        filterCard() {
                                            return false;
                                        },
                                        selectCard: -1,
                                        viewAs: { name: 'guohe' },
                                        cards: links,
                                        onuse(result, player) {
                                            result.cards = lib.skill[result.skill].cards;
                                            var card = result.cards[0];
                                            player.storage.tuntian.remove(card);
                                            if (!player.storage.tuntian.length) {
                                                player.unmarkSkill('tuntian');
                                            } else {
                                                player.markSkill('tuntian');
                                            }
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '选择急袭的目标';
                                },
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player(player) {
                                        return player.storage.tuntian.length - 1;
                                    },
                                },
                            },
                        },
                        jz_芊芊3: {
                            trigger: {
                                global: 'phaseBegin',
                            },
                            forced: true,
                            _priority: 30,
                            content() {
                                player.recover();
                            },
                        },
                        jz_诱使: {
                            trigger: {
                                global: 'useCardAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                var type = get.type(event.card, 'trick');
                                return event.player != player && (type == 'basic' || type == 'trick');
                            },
                            content() {
                                trigger.player.gain(game.createCard('du'), 'gain2');
                            },
                        },
                        jz_芊芊4: {
                            group: ['jz_芊芊6', 'jz_芊芊2', 'jz_芊芊7'],
                            trigger: {
                                global: 'gameStart',
                                player: 'enterGame',
                            },
                            forced: true,
                            _priority: 30000000000000000,
                            content() {
                                player.phase('jz_芊芊4');
                                player.addSkill('jz_回天');
                                player.say('来一场好玩的游戏吗');
                            },
                        },
                        jz_诱使2: {
                            trigger: {
                                global: 'useCardAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                var type = get.type(event.card, 'trick');
                                return event.player != player && (type == 'basic' || type == 'trick');
                            },
                            content() {
                                trigger.player.gain(game.createCard('自慰'), 'gain2');
                            },
                        },
                        jz_除异: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            content() {
                                target.clearSkills();
                                const next = game.createEvent('diex', false);
                                next.source = player;
                                next.player = target;
                                next._triggered = null;
                                next.restMap = { type: null, count: null, audio: null };
                                next.excludeMark = [];
                                next.setContent('die');
                                var chat = ['一切就要结束了……', '你被淘汰了'].randomGet();
                                player.say(chat);
                            },
                            ai: {
                                threaten: 1.5,
                                result: {
                                    target(player, target) {
                                        return -target.num('h');
                                    },
                                },
                                order: 10,
                                expose: 0.4,
                            },
                        },
                        jz_羸弱: {
                            trigger: {
                                global: 'gameDrawAfter',
                            },
                            forced: true,
                            content() {
                                player.forcemin = true;
                            },
                        },
                        jz_绝杀: {
                            trigger: {
                                global: 'shaHit',
                            },
                            forced: true,
                            _priority: 25000,
                            content() {
                                const next = game.createEvent('diex', false);
                                next.source = player;
                                next.player = trigger.player;
                                next._triggered = null;
                                next.restMap = { type: null, count: null, audio: null };
                                next.excludeMark = [];
                                next.setContent('die');
                            },
                        },
                        jz_觉悟: {
                            trigger: {
                                global: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                if (player.hp < Infinity) {
                                    player.loseHp(player.hp);
                                }
                                player.clearSkills();
                                player.removeSkill('jz_觉悟');
                            },
                        },
                        jz_无言: {
                            audio: ['wuyan', 2],
                            trigger: {
                                target: 'useCardToBefore',
                            },
                            forced: true,
                            _priority: null,
                            check(event, player) {
                                return get.effect(event.target, event.card, event.player, player) < 0;
                            },
                            filter(event, player) {
                                if (!event.target) return false;
                                if (event.player == player && event.target == player) return false;
                                return get.type(event.card) == 'trick';
                            },
                            content() {
                                trigger.cancel();
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.type(card) == 'trick' && player != target) return 'zeroplayertarget';
                                    },
                                    player(card, player, target, current) {
                                        if (get.type(card) == 'trick' && player != target) return 'zeroplayertarget';
                                    },
                                },
                            },
                        },
                        jz_回天: {
                            trigger: {
                                player: ['damageBefore', 'loseHpBefore', 'dying'],
                            },
                            forced: true,
                            _priority: -20,
                            nopopup: true,
                            content() {
                                player.update();
                            },
                        },
                        jz_报复: {
                            audio: 'ext:军争加强/audio:4',
                            trigger: {
                                player: 'damageBefore',
                            },
                            forced: true,
                            _priority: 25,
                            filter(event, player) {
                                return event.source != undefined;
                            },
                            content() {
                                trigger.source.clearSkills()._triggered = null;
                                if (trigger.source.hp <= Infinity) {
                                    trigger.source.loseHp(trigger.source.hp);
                                }
                            },
                            logTarget: 'source',
                        },
                        jz_屯田: {
                            group: 'jz_屯田3',
                            audio: ['tuntian', 2],
                            trigger: {
                                global: 'gainEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.storage.tuntian.length >= 3) return false;
                                if (player.countCards('h') >= 5) return false;
                                if (player == _status.currentPhase) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    if (get.color(card) == 'black') return -1;
                                    return 1;
                                }, ui.special).nogain = function (card) {
                                    return get.color(card) != 'black';
                                };
                                ('step 1');
                                if (result.bool) {
                                    result.card.goto(ui.special);
                                    player.storage.tuntian.push(result.card);
                                    result.node.moveDelete(player);
                                    game.broadcast(
                                        function (cardid, player) {
                                            var node = lib.cardOL[cardid];
                                            if (node) {
                                                node.moveDelete(player);
                                            }
                                        },
                                        result.node.cardid,
                                        player
                                    );
                                    game.addVideo('gain2', player, get.cardsInfo([result.node]));
                                    player.markSkill('tuntian');
                                    game.addVideo('storage', player, ['tuntian', get.cardsInfo(player.storage.tuntian), 'cards']);
                                }
                            },
                            init(player) {
                                player.storage.tuntian = [];
                            },
                            intro: {
                                content: 'cards',
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (!target.hasFriend() && !player.hasUnknown()) return;
                                        if (_status.currentPhase == target) return;
                                        if (target.isUnderControl(true, player)) {
                                            if ((get.tag(card, 'respondSha') && target.countCards('h', 'sha')) || (get.tag(card, 'respondShan') && target.countCards('h', 'shan'))) {
                                                if (target.hasSkill('ziliang')) return 0.7;
                                                return [0.5, 1];
                                            }
                                        } else if (get.tag(card, 'respondSha') || get.tag(card, 'respondShan')) {
                                            if (get.attitude(player, target) > 0 && card.name == 'juedou') return;
                                            if (get.tag(card, 'damage') && target.hasSkillTag('maixie')) return;
                                            if (target.countCards('h') == 0) return 2;
                                            if (target.hasSkill('ziliang')) return 0.7;
                                            if (get.mode() == 'guozhan') return 0.5;
                                            return [0.5, Math.max(target.countCards('h') / 4, target.countCards('h', 'sha') + target.countCards('h', 'shan'))];
                                        }
                                    },
                                },
                                threaten(player, target) {
                                    if (target.countCards('h') == 0) return 2;
                                    return 0.5;
                                },
                            },
                            mod: {
                                globalFrom(from, to, distance) {
                                    if (from.storage.tuntian) return distance - from.storage.tuntian.length;
                                },
                                targetEnabled(card) {
                                    if (get.type(card) == 'delay' && card.name == 'bingliang') return false;
                                },
                            },
                        },
                        jz_争功: {
                            trigger: {
                                global: 'phaseBefore',
                            },
                            filter(event, player) {
                                return event.player != player && !player.isTurnedOver() && !player.storage.zhenggong;
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) < 0 && ((player.countCards('h') > player.hp && player.countCards('h', 'lebu') == 0) || get.distance(player, event.player) > 1);
                            },
                            alter: true,
                            intro: {
                                content(storage, player) {
                                    var str = '';
                                    if (player.storage.zhenggong_h.length) {
                                        if (player.isUnderControl(true)) {
                                            str += '手牌区:' + get.translation(player.storage.zhenggong_h);
                                        } else {
                                            str += '手牌区:' + player.storage.zhenggong_h.length + '张牌';
                                        }
                                    }
                                    if (player.storage.zhenggong_e.length) {
                                        if (str.length) str += '、';
                                        if (player.isUnderControl(true)) {
                                            str += '装备区:' + get.translation(player.storage.zhenggong_e);
                                        } else {
                                            str += '装备区:' + player.storage.zhenggong_e.length + '张牌';
                                        }
                                    }
                                    return str;
                                },
                                mark(dialog, content, player) {
                                    if (player.storage.zhenggong_h.length) {
                                        if (player.isUnderControl(true)) {
                                            dialog.add('<div class="text center">手牌区</div>');
                                            dialog.addSmall(player.storage.zhenggong_h);
                                        } else {
                                            dialog.add('<div class="text center">手牌区:' + player.storage.zhenggong_h.length + '张牌</div>');
                                        }
                                    }
                                    if (player.storage.zhenggong_e.length) {
                                        if (player.isUnderControl(true)) {
                                            dialog.add('<div class="text center">装备区</div>');
                                            dialog.addSmall(player.storage.zhenggong_e);
                                        } else {
                                            dialog.add('<div class="text center">装备区:' + player.storage.zhenggong_e.length + '张牌</div>');
                                        }
                                    }
                                },
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                if (!get.is.altered('zhenggong')) {
                                    player.draw(false);
                                    player.$draw();
                                }
                                ('step 1');
                                player.storage.zhenggong_h = player.getCards('h');
                                player.storage.zhenggong_e = player.getCards('e');
                                player.storage.zhenggong_n = 1;
                                player.phase('zhenggong');
                                player.storage.zhenggong = trigger.player;
                                player.removeSkill('zhenggong2');
                                player.markSkill('zhenggong');
                                ('step 2');
                                player.turnOver();
                            },
                            mod: {
                                targetInRange(card, player, target, now) {
                                    if (target == player.storage.zhenggong) return true;
                                },
                            },
                            ai: {
                                expose: 0.1,
                                effect: {
                                    target(card) {
                                        if (card.name == 'guiyoujie') return [0, 0];
                                    },
                                },
                            },
                        },
                        jz_忘隙: {
                            audio: 'ext:军争加强/audio:2',
                            trigger: {
                                player: 'damageEnd',
                                source: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.num && event.source && event.player && event.player.isAlive() && event.source.isAlive();
                            },
                            check(event, player) {
                                if (event.player == player) return get.attitude(player, event.source) > -3;
                                return get.attitude(player, event.player) > -3;
                            },
                            logTarget(event, player) {
                                if (event.player == player) return event.source;
                                return event.player;
                            },
                            content() {
                                'step 0';
                                game.asyncDraw([trigger.player, trigger.source], trigger.num);
                                ('step 1');
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                            },
                        },
                        jz_严法: {
                            audio: 'reyiji',
                            trigger: {
                                global: 'damageEnd',
                            },
                            check(event, player) {
                                var att = get.attitude(player, event.source);
                                var num = event.source.countCards('h');
                                if (att <= 0) return true;
                                if (num > 2) return true;
                                if (num > 0) return att < 4;
                                return false;
                            },
                            filter(event, player) {
                                return event.source && event.source != player && event.num > 0 && event.source.isAlive();
                            },
                            content() {
                                'step 0';
                                event.num = Math.min(trigger.num, 9);
                                ('step 1');
                                trigger.source.chooseCard('交给' + get.translation(player) + '一张手牌或流失一点体力').set('ai', function (card) {
                                    if (get.attitude(_status.event.player, _status.event.parent.player) > 0) {
                                        return 11 - get.value(card);
                                    } else {
                                        return 7 - get.value(card);
                                    }
                                });
                                ('step 2');
                                if (result.bool) {
                                    player.gain(result.cards[0], trigger.source);
                                    trigger.source.$give(1, player);
                                } else {
                                    trigger.source.loseHp();
                                }
                                if (event.num > 1) {
                                    event.num--;
                                    event.goto(1);
                                }
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -1.5];
                                            return [1, 1];
                                        }
                                    },
                                },
                            },
                        },
                        jz_禁咒: {
                            audio: 'ext:军争加强/audio:true',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return !player.storage.jinzhou && player.num('h') >= 8;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('jinzhou');
                                player.storage.jinzhou = true;
                                player.chooseToDiscard(8, true);
                                event.targets = game.filterPlayer();
                                event.targets.remove(player);
                                event.targets.sort(lib.sort.seat);
                                event.targets2 = event.targets.slice(0);
                                player.line(event.targets, 'green');
                                ('step 1');
                                if (event.targets.length) {
                                    event.targets.shift().damage('fire', 3);
                                    event.redo();
                                }
                                ('step 2');
                                player.recover();
                            },
                        },
                        jz_禁食: {
                            global: 'boss_futai2',
                        },
                        jz_威慑: {
                            global: 'wansha2',
                            trigger: {
                                global: 'dying',
                            },
                            _priority: 15,
                            forced: true,
                            filter(event, player) {
                                return _status.currentPhase == player && event.player != player;
                            },
                            content() { },
                        },
                        jz_谋断: {
                            init2(player) {
                                game.broadcastAll(function (player) {
                                    player._mouduan_mark = player.mark('武', {
                                        content: '拥有技能【激昂】、【谦逊】',
                                    });
                                }, player);
                                player.addAdditionalSkill('mouduan', ['jiang', 'qianxun']);
                            },
                            onremove(player) {
                                game.broadcastAll(function (player) {
                                    if (player._mouduan_mark) {
                                        player._mouduan_mark.delete();
                                        delete player._mouduan_mark;
                                    }
                                }, player);
                                player.removeAdditionalSkill('mouduan');
                            },
                            trigger: {
                                player: 'loseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player._mouduan_mark && player._mouduan_mark.name == '武' && player.countCards('h') <= 2;
                            },
                            content() {
                                game.broadcastAll(function (player) {
                                    if (!player._mouduan_mark) return;
                                    player._mouduan_mark.name = '文';
                                    player._mouduan_mark.skill = '文';
                                    player._mouduan_mark.firstChild.innerHTML = '文';
                                    player._mouduan_mark.info.content = '拥有技能【英姿】、【制衡】';
                                }, player);
                                player.addAdditionalSkill('mouduan', ['yingzi', 'zhiheng']);
                            },
                            group: 'mouduan2',
                        },
                        jz_贤德: {
                            trigger: {
                                target: 'shaBefore',
                            },
                            forced: true,
                            audio: 'ext:军争加强/audio:2',
                            filter(event, player) {
                                return event.card.name == 'sha' && get.color(event.card) == 'black';
                            },
                            content() {
                                trigger.cancel();
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (target.getEquip(2)) return;
                                        if (card.name == 'sha' && get.color(card) == 'black') return 'zerotarget';
                                    },
                                },
                            },
                        },
                        jz_飞影: {
                            mod: {
                                globalTo(from, to, distance) {
                                    return distance + 2;
                                },
                            },
                        },
                        jz_魏武: {
                            audio: ['guixin', 2],
                            trigger: {
                                global: 'phaseEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('jz_魏武'), function (card, player, target) {
                                    return player != target && target.hp >= player.hp;
                                }).ai = function (target) {
                                    return get.damageEffect(target, player, player, 'fire');
                                };
                                ('step 1');
                                if (result.bool) {
                                    //QQQ
                                    result.targets[0].damage('fire', 3);
                                }
                            },
                        },
                        jz_恶助: {
                            trigger: {
                                target: 'shaBefore',
                            },
                            forced: true,
                            audio: 'ext:军争加强/audio:2',
                            filter(event, player) {
                                return event.card.name == 'sha' && get.color(event.card) == 'black';
                            },
                            content() {
                                trigger.cancel();
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (target.getEquip(2)) return;
                                        if (card.name == 'sha' && get.color(card) == 'black') return 'zerotarget';
                                    },
                                },
                            },
                        },
                        jz_雷罚: {
                            trigger: {
                                global: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('雷罚'), function (card, player, target) {
                                    return player != target && target.hp >= player.hp;
                                }).ai = function (target) {
                                    return get.damageEffect(target, player, player, 'thunder');
                                };
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].damage('thunder', 3);
                                }
                            },
                        },
                        jz_屯兵: {
                            audio: ['xunxun', 2],
                            trigger: {
                                player: ['phaseDiscardEnd'],
                            },
                            filter(event, player) {
                                return player.countCards('h') < Math.min(Infinity, player.maxHp);
                            },
                            content() {
                                player.draw(Math.min(Infinity, player.hp));
                            },
                            ai: {
                                noh: true,
                                skillTagFilter(player, tag) {
                                    if (tag == 'noh' && player.maxHp - player.hp < player.countCards('h')) {
                                        return false;
                                    }
                                },
                            },
                        },
                        jz_博观: {
                            audio: ['xunxun', 2],
                            trigger: {
                                player: 'phaseDrawBefore',
                            },
                            check(event, player) {
                                return !player.hasSkill('reyiji2');
                            },
                            content() {
                                'step 0';
                                trigger.cancel();
                                event.cards = get.cards(5);
                                player.chooseCardButton(event.cards, 3, '选择获得三张牌').set('ai', get.buttonValue);
                                ('step 1');
                                if (result.bool) {
                                    var choice = [];
                                    for (var i = 0; i < result.links.length; i++) {
                                        choice.push(result.links[i]);
                                        cards.remove(result.links[i]);
                                    }
                                    for (var i = 0; i < cards.length; i++) {
                                        ui.cardPile.appendChild(cards[i]);
                                    }
                                    player.gain(choice, 'draw');
                                    game.log(player, '获得了三张牌');
                                }
                            },
                        },
                        jz_远虑: {
                            audio: ['duoshi', 2],
                            enable: ['chooseToRespond'],
                            filterCard(card) {
                                return get.color(card) == 'black';
                            },
                            viewAs: {
                                name: 'shan',
                                suit: 'spade',
                                number: 9,
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('he', { color: 'black' })) return false;
                            },
                            prompt: '将一张黑色手牌当闪打出',
                            check() {
                                return 1;
                            },
                            ai: {
                                respondShan: true,
                                skillTagFilter(player) {
                                    if (!player.countCards('he', { color: 'black' })) return false;
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
                            },
                        },
                        jz_拒降: {
                            audio: 'ext:标准,军争武将加强版/audio:2',
                            trigger: {
                                player: 'dieBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.source != undefined;
                            },
                            content() {
                                trigger.source.discard(trigger.source.getCards('he'));
                            },
                            ai: {
                                threaten: 0.7,
                            },
                        },
                        jz_念主: {
                            audio: 'ext:军争加强/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.num && event.num > 0;
                            },
                            content() {
                                if (player.hasSkill('shibei_damaged')) {
                                    player.gainMaxHp();
                                    player.draw(3);
                                } else {
                                    player.recover();
                                    player.draw(2);
                                }
                            },
                            group: 'jz_念主_mark',
                            subSkill: {
                                mark: {
                                    trigger: {
                                        player: 'damageAfter',
                                    },
                                    silent: true,
                                    content() {
                                        player.addTempSkill('shibei_damaged');
                                    },
                                    forced: true,
                                    popup: false,
                                },
                                damaged: {
                                },
                                ai: {
                                },
                            },
                            ai: {
                                maixie_defend: true,
                                threaten: 0.9,
                                effect: {
                                    target(card, player, target) {
                                        if (player.hasSkillTag('jueqing')) return;
                                        if (target.hujia) return;
                                        if (player._shibei_tmp) return;
                                        if (target.hasSkill('shibei_ai')) return;
                                        if (_status.event.getParent('useCard', true) || _status.event.getParent('_wuxie', true)) return;
                                        if (get.tag(card, 'damage')) {
                                            if (target.hasSkill('shibei_damaged')) {
                                                return [1, -2];
                                            } else {
                                                if (get.attitude(player, target) > 0 && target.hp > 1) {
                                                    return 0;
                                                }
                                                if (get.attitude(player, target) < 0 && !player.hasSkillTag('damageBonus')) {
                                                    if (card.name == 'sha') return;
                                                    var sha = false;
                                                    player._shibei_tmp = true;
                                                    var num = player.countCards('h', function (card) {
                                                        if (card.name == 'sha') {
                                                            if (sha) {
                                                                return false;
                                                            } else {
                                                                sha = true;
                                                            }
                                                        }
                                                        return get.tag(card, 'damage') && player.canUse(card, target) && get.effect(target, card, player, player) > 0;
                                                    });
                                                    delete player._shibei_tmp;
                                                    if (player.hasSkillTag('damage')) {
                                                        num++;
                                                    }
                                                    if (num < 2) {
                                                        var enemies = player.getEnemies();
                                                        if (enemies.length == 1 && enemies[0] == target && player.needsToDiscard()) {
                                                            return;
                                                        }
                                                        return 0;
                                                    }
                                                }
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        jz_渐营: {
                            audio: ['jianying', 2],
                            usable: 7,
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                if (!event.cards || event.cards.length != 1) return false;
                                if (_status.currentPhase != player) return false;
                                if (!player.storage.jianying) return false;
                                return player.storage.jianying.suit == event.cards[0].suit || player.storage.jianying.number == event.cards[0].number;
                            },
                            content() {
                                player.draw(2);
                            },
                            intro: {
                                content: 'card',
                            },
                            group: ['jianying2', 'jianying3'],
                        },
                        jz_毒心: {
                            audio: ['jueqing', 2],
                            trigger: {
                                player: 'loseHpBefore',
                            },
                            forced: true,
                            _priority: 16,
                            filter(event, player) {
                                return _status.currentPhase == player;
                            },
                            content() {
                                trigger.cancel();
                            },
                        },
                        jz_灭口: {
                            audio: ['jueqing', 2],
                            trigger: {
                                global: 'phaseEnd',
                            },
                            forced: true,
                            content() {
                                player.gainMaxHp();
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        jz_绝情: {
                            trigger: {
                                global: 'damageBefore',
                            },
                            forced: true,
                            audio: ['jueqing', 2],
                            _priority: 16,
                            check() {
                                return false;
                            },
                            content() {
                                trigger.cancel();
                                var ex = 0;
                                if (trigger.card && trigger.card.name == 'sha') {
                                    if (player.hasSkill('jiu')) ex++;
                                    if (player.hasSkill('luoyi2')) ex++;
                                    if (player.hasSkill('reluoyi2')) ex++;
                                }
                                trigger.player.loseHp(trigger.num + ex);
                            },
                            ai: {
                                jueqing: true,
                            },
                        },
                        jz_伤逝: {
                            audio: ['shangshi', 2],
                            trigger: {
                                player: ['loseEnd', 'changeHp'],
                                global: 'useSkillEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h') < Math.min(Infinity, player.maxHp - player.hp);
                            },
                            content() {
                                player.draw(Math.min(Infinity, player.maxHp - player.hp) - player.countCards('h'));
                            },
                            ai: {
                                noh: true,
                                skillTagFilter(player, tag) {
                                    if (tag == 'noh' && player.maxHp - player.hp < player.countCards('h')) {
                                        return false;
                                    }
                                },
                            },
                        },
                        jz_冷血: {
                            audio: ['jueqing', 2],
                            trigger: {
                                global: 'dieAfter',
                            },
                            forced: true,
                            content() {
                                player.gainMaxHp();
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        jz_破计: {
                            audio: ['refankui', 2],
                            trigger: {
                                target: 'useCardToBegin',
                            },
                            filter(event, player) {
                                if (_status.currentPhase == player) return false;
                                return event.card && get.color(event.card) == 'black';
                            },
                            forced: true,
                            content() {
                                player.draw();
                            },
                            ai: {
                                effect(card, player, target) {
                                    if (get.color(card) == 'black') return [1, 1];
                                },
                            },
                        },
                        jz_无功: {
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return 0;
                                },
                            },
                        },
                        jz_弃袍: {
                            audio: ['hujia', 2],
                            enable: 'chooseToUse',
                            filter(event, player) {
                                return _status.currentPhase != player;
                            },
                            filterCard(card) {
                                return get.color(card) == 'black';
                            },
                            viewAs: {
                                name: 'jiu',
                                suit: 'spade',
                                number: 6,
                                cards: [{ node: { image: {}, info: {}, name: {}, name2: {}, background: {}, intro: {}, range: {} }, storage: {}, vanishtag: [], _uncheck: [], suit: 'spade', number: 6, name: 'sha', cardid: '7079681311', clone: { name: 'sha', suit: 'spade', number: 6, node: { name: {}, info: {}, intro: {}, background: {}, image: {} }, _onEndDelete: true, timeout: 486, _transitionEnded: true }, timeout: 445, original: 'h' }],
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('h', { suit: 'spade' })) return false;
                            },
                            prompt: '将一张黑色手牌当酒使用',
                            check(card) {
                                if (_status.event.type == 'dying') return 1;
                                return 4 - get.value(card);
                            },
                            ai: {
                                skillTagFilter(player) {
                                    return player.countCards('h', { suit: 'spade' }) > 0 && player.hp <= 0;
                                },
                                threaten: 1.5,
                                save: true,
                                basic: {
                                    useful(card, i) {
                                        if (_status.event.player.hp > 1) {
                                            if (i == 0) return 4;
                                            return 1;
                                        }
                                        if (i == 0) return 7.3;
                                        return 3;
                                    },
                                    value(card, player, i) {
                                        if (player.hp > 1) {
                                            if (i == 0) return 5;
                                            return 1;
                                        }
                                        if (i == 0) return 7.3;
                                        return 3;
                                    },
                                },
                                order() {
                                    return get.order({ name: 'sha' }) + 0.2;
                                },
                                result: {
                                    target(player, target) {
                                        if (target && target.isDying()) return 2;
                                        if (lib.config.mode == 'stone' && !player.isMin()) {
                                            if (player.getActCount() + 1 >= player.actcount) return 0;
                                        }
                                        var shas = player.getCards('h', 'sha');
                                        if (shas.length > 1 && player.getCardUsable('sha') > 1) {
                                            return 0;
                                        }
                                        var card;
                                        if (shas.length) {
                                            for (var i = 0; i < shas.length; i++) {
                                                if (lib.filter.filterCard(shas[i], target)) {
                                                    card = shas[i];
                                                    break;
                                                }
                                            }
                                        } else if (player.hasSha() && player.needsToDiscard()) {
                                            if (player.countCards('h', 'hufu') != 1) {
                                                card = { name: 'sha' };
                                            }
                                        }
                                        if (card) {
                                            if (
                                                game.hasPlayer(function (current) {
                                                    return get.attitude(target, current) < 0 && target.canUse(card, current, true, true) && !current.getEquip('baiyin') && get.effect(current, card, target) > 0;
                                                })
                                            ) {
                                                return 1;
                                            }
                                        }
                                        return 0;
                                    },
                                },
                                tag: {
                                    save: 1,
                                },
                            },
                        },
                        jz_倾国: {
                            audio: ['qingguo', 2],
                            enable: ['chooseToRespond'],
                            filterCard(card) {
                                return get.color(card) == 'black';
                            },
                            viewAs: {
                                name: 'shan',
                                suit: 'spade',
                                number: 8,
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('he', { color: 'black' })) return false;
                            },
                            prompt: '将一张黑色手牌当闪打出',
                            check() {
                                return 1;
                            },
                            ai: {
                                respondShan: true,
                                skillTagFilter(player) {
                                    if (!player.countCards('he', { color: 'black' })) return false;
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
                            },
                        },
                        jz_节命: {
                            audio: ['jieming', 2],
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('jieming'), [1, trigger.num], function (card, player, target) {
                                        return target.countCards('h') < Math.min(target.maxHp, 9);
                                    })
                                    .set('ai', function (target) {
                                        var att = get.attitude(_status.event.player, target);
                                        if (att > 2) {
                                            return Math.min(9, target.maxHp) - target.countCards('h');
                                        }
                                        return att / 3;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    for (var i = 0; i < result.targets.length; i++) {
                                        result.targets[i].draw(Math.min(9, result.targets[i].maxHp) - result.targets[i].countCards('h'));
                                    }
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
                                            for (var i = 0; i < players.length; i++) {
                                                if (get.attitude(target, players[i]) > 0) {
                                                    max = Math.max(Math.min(5, players[i].hp) - players[i].countCards('h'), max);
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
                        jz_单骑: {
                            audio: ['danqi', 2],
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h') >= 2;
                            },
                            content() {
                                player.addSkill('mashu');
                                player.addSkill('nuzhan');
                                var card = get.cardPile('qinglong', 'field');
                                if (card) {
                                    player.gain(card, 'gain2', 'log');
                                }
                            },
                        },
                        jz_反馈: {
                            audio: ['fankui', 2],
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                player.gainPlayerCard([1, trigger.num], get.prompt('fankui', trigger.current), trigger.current, get.buttonValue, 'he')
                            },
                            ai: {
                                maixie_defend: true,
                                effect: {
                                    target(card, player, target) {
                                        if (player.countCards('he') > 1 && get.tag(card, 'damage')) {
                                            if (get.attitude(target, player) < 0) return [1, 1];
                                        }
                                    },
                                },
                            },
                        },
                        jz_鬼才: {
                            audio: ['reguicai', 2],
                            trigger: {
                                global: 'judge',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('he') > 0;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('guicai'), 'he')
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
                                    player.respond(result.cards, 'highlight');
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.$gain2(trigger.player.judging[0]);
                                    player.gain(trigger.player.judging[0]);
                                    trigger.player.judging[0] = result.cards[0];
                                    if (!get.owner(result.cards[0], 'judge')) {
                                        trigger.position.appendChild(result.cards[0]);
                                    }
                                    game.log(trigger.player, '的判定牌改为', result.cards[0]);
                                }
                                ('step 3');
                            },
                            ai: {
                                tag: {
                                    rejudge: 1,
                                },
                            },
                        },
                        jz_早逝: {
                            audio: 'ext:军争加强/audio:2',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (player.storage.zaoshi || (get.mode() == 'guozhan' && player.hiddenSkills.includes('zaoshi'))) {
                                    if (!player.storage.zaoshi) {
                                        event.skillHidden = true;
                                    }
                                    player.chooseBool(get.prompt('zaoshi')).set('ai', function () {
                                        var player = _status.event.player;
                                        if (player.hp > 3) return true;
                                        if (player.hp == 3 && player.countCards('h') < 3) return true;
                                        if (player.hp == 2 && player.countCards('h') == 0) return true;
                                        return false;
                                    });
                                } else {
                                    event.forced = true;
                                }
                                ('step 1');
                                if (event.forced || result.bool) {
                                    player.loseHp();
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                player.draw(2);
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        jz_屯田2: {
                            audio: ['tuntian', 2],
                            trigger: {
                                global: ['loseEnd', 'gainEnd'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (player == _status.currentPhase) return false;
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if (i.original && i.original != 'j') return true;
                                    }
                                return false;
                            },
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    if (card.suit == 'heart') return -1;
                                    return 1;
                                }, ui.special).nogain = function (card) {
                                    return card.suit != 'heart';
                                };
                                ('step 1');
                                if (result.bool) {
                                    result.card.goto(ui.special);
                                    player.storage.tuntian.push(result.card);
                                    result.node.moveDelete(player);
                                    game.broadcast(
                                        function (cardid, player) {
                                            var node = lib.cardOL[cardid];
                                            if (node) {
                                                node.moveDelete(player);
                                            }
                                        },
                                        result.node.cardid,
                                        player
                                    );
                                    game.addVideo('gain2', player, get.cardsInfo([result.node]));
                                    player.markSkill('tuntian');
                                    game.addVideo('storage', player, ['tuntian', get.cardsInfo(player.storage.tuntian), 'cards']);
                                }
                            },
                            init(player) {
                                player.storage.tuntian = [];
                            },
                            intro: {
                                content: 'cards',
                            },
                            group: 'tuntian_dist',
                            subSkill: {
                                dist: {
                                    mod: {
                                        globalFrom(from, to, distance) {
                                            if (from.storage.tuntian) return distance - from.storage.tuntian.length;
                                        },
                                    },
                                },
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (!target.hasFriend() && !player.hasUnknown()) return;
                                        if (_status.currentPhase == target) return;
                                        if (get.tag(card, 'loseCard') && target.countCards('he')) {
                                            if (target.hasSkill('ziliang')) return 0.7;
                                            return [0.5, Math.max(2, target.countCards('h'))];
                                        }
                                        if (target.isUnderControl(true, player)) {
                                            if ((get.tag(card, 'respondSha') && target.countCards('h', 'sha')) || (get.tag(card, 'respondShan') && target.countCards('h', 'shan'))) {
                                                if (target.hasSkill('ziliang')) return 0.7;
                                                return [0.5, 1];
                                            }
                                        } else if (get.tag(card, 'respondSha') || get.tag(card, 'respondShan')) {
                                            if (get.attitude(player, target) > 0 && card.name == 'juedou') return;
                                            if (get.tag(card, 'damage') && target.hasSkillTag('maixie')) return;
                                            if (target.countCards('h') == 0) return 2;
                                            if (target.hasSkill('ziliang')) return 0.7;
                                            if (get.mode() == 'guozhan') return 0.5;
                                            return [0.5, Math.max(target.countCards('h') / 4, target.countCards('h', 'sha') + target.countCards('h', 'shan'))];
                                        }
                                    },
                                },
                                threaten(player, target) {
                                    if (target.countCards('h') == 0) return 2;
                                    return 0.5;
                                },
                                nodiscard: true,
                            },
                        },
                        jz_挑衅: {
                            audio: ['tiaoxin', 2],
                            enable: 'phaseUse',
                            usable: 2,
                            filterTarget(card, player, target) {
                                return target.canUse({ name: 'sha' }, player) && target.countCards('he');
                            },
                            content() {
                                'step 0';
                                target.chooseToUse({ name: 'sha' }, player, -1, '挑衅:对' + get.translation(player) + '使用一张杀,或令其弃置你的一张牌').set('targetRequired', true);
                                ('step 1');
                                if (result.bool == false && target.countCards('he') > 0) {
                                    player.discardPlayerCard(target, 'he', true);
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
                        jz_衣钵: {
                            audio: ['zhiji', 2],
                            _priority: 3,
                            derivation: 'guanxing',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filter(event, player) {
                                return player.hp <= 2 && !player.storage.yibo;
                            },
                            forced: true,
                            content() {
                                player.loseMaxHp();
                                player.storage.yibo = true;
                                if (player.hp > player.maxHp) player.hp = player.maxHp;
                                player.update();
                                player.addSkill('guanxing');
                                game.createTrigger('phaseBegin', 'guanxing', player, trigger);
                            },
                        },
                        jz_幼麟: {
                            audio: 'ext:武将加强版/audio:2',
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            content() {
                                trigger.num += 3;
                                player.addTempSkill('jz_无功', { player: 'phaseEnd' });
                            },
                            ai: {
                                threaten: 1.3,
                            },
                        },
                        jz_激昂: {
                            audio: ['jiang', 2],
                            trigger: {
                                player: ['shaBefore', 'juedouBefore'],
                                target: ['shaBefore', 'juedouBefore'],
                            },
                            filter(event, player) {
                                if (event.card.name == 'juedou' || event.card.name == 'sha') return true;
                                return false;
                            },
                            forced: true,
                            content() {
                                player.draw();
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (card.name == 'sha') return [1, 0.6];
                                    },
                                    player(card, player, target) {
                                        if (card.name == 'sha') return [1, 1];
                                    },
                                },
                            },
                        },
                        jz_资粮: {
                            audio: ['ziliang', 2],
                            trigger: {
                                global: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.player.isIn() && event.player.isFriendsOf(player) && player.storage.tuntian && player.storage.tuntian.length;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseCardButton(get.prompt('资粮', trigger.player), player.storage.tuntian).set('ai', function (button) {
                                    return get.value(button.link);
                                });
                                ('step 1');
                                if (result.bool) {
                                    var card = result.links[0];
                                    player.storage.tuntian.remove(card);
                                    if (!player.storage.tuntian.length) {
                                        player.unmarkSkill('tuntian');
                                    } else {
                                    }
                                    trigger.player.gain(card);
                                    if (trigger.player == player) {
                                        player.$draw(card, true);
                                    } else {
                                        player.$give(card, trigger.player);
                                    }
                                }
                            },
                        },
                        jz_鹰扬: {
                            audio: ['yingyang', 2],
                            trigger: {
                                player: 'compare',
                                target: 'compare',
                            },
                            filter(event, player) {
                                return !event.iwhile;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseControl('点数+3', '点数-3', 'cancel2')
                                    .set('prompt', get.prompt('鹰扬'))
                                    .set('ai', function () {
                                        if (_status.event.small) return 1;
                                        else return 0;
                                    })
                                    .set('small', trigger.small);
                                ('step 1');
                                if (result.index != 2) {
                                    if (result.index == 0) {
                                        game.log(player, '拼点牌点数+3');
                                        if (player == trigger.player) {
                                            trigger.num1 += 3;
                                        } else {
                                            trigger.num2 += 3;
                                        }
                                    } else {
                                        game.log(player, '拼点牌点数-3');
                                        if (player == trigger.player) {
                                            trigger.num1 -= 3;
                                        } else {
                                            trigger.num2 -= 3;
                                        }
                                    }
                                }
                            },
                        },
                        jz_度势: {
                            audio: ['duoshi', 2],
                            enable: 'chooseToUse',
                            viewAs: {
                                name: 'yiyi',
                                suit: 'heart',
                                number: 10,
                                cards: [{ node: { image: {}, info: {}, name: {}, name2: {}, background: {}, intro: {}, range: {} }, storage: {}, vanishtag: [], _uncheck: [], suit: 'heart', number: 10, name: 'sha', nature: 'fire', cardid: '9913897338', clone: { name: 'sha', suit: 'heart', number: 10, node: { name: {}, info: {}, intro: {}, background: {}, image: {} }, _transitionEnded: true, timeout: 1835 }, timeout: 1674, original: 'h' }],
                            },
                            usable: 5,
                            filterCard: {
                                color: 'red',
                            },
                            viewAsFilter(player) {
                                return player.countCards('h', { color: 'red' }) > 0;
                            },
                            check(card) {
                                return 5 - get.value(card);
                            },
                            ai: {
                                wuxie() {
                                    return 0;
                                },
                                basic: {
                                    useful: 3,
                                    value: 3,
                                    order: 5,
                                },
                                result: {
                                    target(player, target) {
                                        var hs = target.getCards('h');
                                        if (hs.length <= 1) {
                                            if (target == player && hs[0].name == 'yiyi') {
                                                return 0;
                                            }
                                            return 0.3;
                                        }
                                        return Math.sqrt(target.countCards('he'));
                                    },
                                },
                                tag: {
                                    loseCard: 1,
                                    discard: 1,
                                    norepeat: 1,
                                },
                            },
                        },
                        jz_天妒: {
                            audio: ['tiandu', 2],
                            group: 'jz_天妒2',
                            trigger: {
                                global: 'judgeEnd',
                            },
                            frequent(event) {
                                if (event.result.card.name == 'du') return false;
                                if (get.mode() == 'guozhan') return false;
                                return true;
                            },
                            check(event) {
                                if (event.result.card.name == 'du') return false;
                                return true;
                            },
                            filter(event, player) {
                                if (get.owner(event.result.card)) {
                                    return false;
                                }
                                if ((event.player.name == 'jz_邓士载' || event.player.name == 'dengai') && event.player != _status.currentPhase) return false;
                                return true;
                            },
                            content() {
                                player.gain(trigger.result.card);
                                player.$gain2(trigger.result.card);
                            },
                        },
                        jz_连诛: {
                            audio: ['lianzhu', 2],
                            enable: 'phaseUse',
                            usable: 2,
                            filterCard: true,
                            position: 'he',
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            check(card) {
                                var num = get.value(card);
                                if (get.color(card) == 'black') {
                                    if (num >= 6) return 0;
                                    return 20 - num;
                                } else {
                                    if (_status.event.player.needsToDiscard()) {
                                        return 7 - num;
                                    }
                                }
                                return 0;
                            },
                            discard: false,
                            prepare: 'give',
                            content() {
                                'step 0';
                                target.gain(cards, player);
                                if (get.color(cards[0]) == 'black') {
                                    target
                                        .chooseToDiscard(2, 'he', '弃置两张牌,或令' + get.translation(player) + '摸两张牌')
                                        .set('ai', function (card) {
                                            if (_status.event.goon) return 7 - get.value(card);
                                            return 0;
                                        })
                                        .set('goon', get.attitude(target, player) < 0);
                                } else {
                                    event.finish();
                                }
                                ('step 1');
                                if (!result.bool) {
                                    player.draw(2);
                                }
                            },
                            ai: {
                                order: 8,
                                expose: 0.2,
                                result: {
                                    target(player, target) {
                                        if (ui.selected.cards.length && get.color(ui.selected.cards[0]) == 'red') {
                                            if (target.countCards('h') < player.countCards('h')) return 1;
                                            return 0.5;
                                        }
                                        return -1;
                                    },
                                },
                            },
                        },
                        jz_放逐: {
                            audio: ['fangzhu', 2],
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('jz_放逐'), function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    var player = _status.event.player;
                                    //var trigger=trigger.player;
                                    //if(get.attitude(_status.event.player,target)<=0) return 0;
                                    if (get.attitude(_status.event.player, target) > 0) {
                                        if (target.hp > 1) return 0;
                                        return 100 - target.countCards('h') + (target == trigger.player);
                                        //if(player.maxHp-player.hp<3) return -1;
                                        //return 100-target.countCards('h');
                                    } else {
                                        if (player.maxHp - player.hp >= 3) return -1;
                                        if (player.identity == 'fan' && target == game.zhu) return -2;
                                        return 1 + target.countCards('h') + (target == trigger.player);
                                    }
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.draw(player.maxHp - player.hp);
                                    result.targets[0].out();
                                }
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                            if (target.hp <= 1) return;
                                            if (!target.hasFriend()) return;
                                            var hastarget = false;
                                            var turnfriend = false;
                                            var players = game.filterPlayer();
                                            for (var i = 0; i < players.length; i++) {
                                                if (get.attitude(target, players[i]) < 0 && player.hp >= 2) {
                                                    hastarget = true;
                                                }
                                                if (get.attitude(target, players[i]) > 0 && players[i].hp < 2) {
                                                    hastarget = true;
                                                    turnfriend = true;
                                                }
                                            }
                                            if (get.attitude(player, target) > 0 && !hastarget) return;
                                            if (turnfriend || target.hp == target.maxHp) return [0.5, 1];
                                            if (target.hp > 1) return [1, 0.5];
                                        }
                                    },
                                },
                            },
                        },
                        jz_截軸: {
                            audio: ['jiezhou', 2],
                            trigger: {
                                global: ['phaseDrawSkipped', 'phaseDrawCancelled', 'phaseUseSkipped', 'phaseUseCancelled', 'phaseDiscardSkipped', 'phaseDiacardCancelled'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player;
                            },
                            content() {
                                player.draw();
                            },
                        },
                        jz_绝策: {
                            trigger: {
                                player: 'dieBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('juece'), function (card, player, target) {
                                        return player != target && _status.event.source != target;
                                    })
                                    .set('ai', function (target) {
                                        var num = get.attitude(_status.event.player, target);
                                        if (num > 0) {
                                            if (target.hp == 1) {
                                                num += 2;
                                            }
                                            if (target.hp < target.maxHp) {
                                                num += 2;
                                            }
                                        }
                                        return num;
                                    })
                                    .set('source', trigger.source);
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    target.recover();
                                    target.draw(2);
                                }
                            },
                            ai: {
                                expose: 0.5,
                            },
                        },
                        jz_仁心: {
                            trigger: {
                                player: 'shaBefore',
                            },
                            forced: true,
                            audio: 'ext:军争加强/audio:2',
                            filter(event, player) {
                                return event.card.name == 'sha';
                            },
                            content() {
                                trigger.cancel();
                            },
                        },
                        聚心: {
                            audio: 'ext:军争加强/audio:2',
                            trigger: {
                                player: 'loseEnd',
                            },
                            init(player) {
                                player.storage.聚心 = 0;
                            },
                            filter(event, player) {
                                return player.storage.聚心 <= 2;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].draw();
                                    player.storage.聚心 += 1;
                                    if (player.storage.聚心) {
                                        player.markSkill('聚心');
                                    }
                                    game.addVideo('storage', player, ['聚心', player.storage.聚心]);
                                }
                            },
                            intro: {
                                content: 'mark',
                            },
                            group: '聚心_a',
                            subSkill: {
                                a: {
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.聚心 >= 1;
                                    },
                                    content() {
                                        player.storage.聚心 = 0;
                                        player.update();
                                    },
                                },
                            },
                        },
                        治军: {
                            audio: ['xunxun', 2],
                            trigger: {
                                global: 'loseEnd',
                            },
                            init(player) {
                                player.storage.治军 = 0;
                            },
                            filter(event, player) {
                                return player.storage.治军 <= 2;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].draw();
                                    player.storage.治军 += 1;
                                    if (player.storage.治军) {
                                        player.markSkill('治军');
                                    }
                                    game.addVideo('storage', player, ['治军', player.storage.治军]);
                                }
                            },
                            intro: {
                                content: 'mark',
                            },
                            group: '治军_a',
                            subSkill: {
                                a: {
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.治军 >= 1;
                                    },
                                    content() {
                                        player.storage.治军 = 0;
                                        player.update();
                                    },
                                },
                            },
                        },
                        jz_横征: {
                            audio: ['hengzheng', 2],
                            trigger: {
                                player: 'phaseDrawBefore',
                            },
                            filter(event, player) {
                                return player.hp >= 4 || player.countCards('h') == 0;
                            },
                            check(event, player) {
                                var num = game.countPlayer(function (current) {
                                    if (current.countCards('he') && current != player && get.attitude(player, current) <= 0) {
                                        return true;
                                    }
                                    if (current.countCards('j') && current != player && get.attitude(player, current) > 0) {
                                        return true;
                                    }
                                });
                                return num >= 2;
                            },
                            content() {
                                'step 0';
                                var targets = game.filterPlayer();
                                targets.remove(player);
                                targets.sort(lib.sort.seat);
                                event.targets = targets;
                                event.num = 0;
                                trigger.cancel();
                                player.line(targets, 'green');
                                ('step 1');
                                if (num < event.targets.length) {
                                    if (event.targets[num].countCards('hej')) {
                                        player.gainPlayerCard(event.targets[num], 'hej', true);
                                    }
                                    event.num++;
                                    event.redo();
                                }
                            },
                            ai: {
                                threaten(player, target) {
                                    if (target.hp == 1) return 2.5;
                                    return 1;
                                },
                            },
                        },
                        jz_机巧: {
                            audio: ['jiqiao', 2],
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filter(event, player) {
                                return player.countCards('he') > 0;
                            },
                            check(event, player) {
                                if (player.countCards('he') > 0) return 1;
                            },
                            content() {
                                'step 0';
                                player.chooseToDiscard(2).set('ai', function (card) {
                                    if (card.name == 'bagua') return 10;
                                    return 7 - get.value(card);
                                });
                                ('step 1');
                                if (result.bool) {
                                    event.cards = get.cards(5);
                                    player.showCards(event.cards);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                var gained = [];
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if (get.type(i, 'trick') == 'trick') {
                                            gained.push(i);
                                        }
                                    }
                                player.gain(gained, 'gain2');
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        jz_玲珑: {
                            audio: 'ext:军争加强/audio:true',
                            group: 'jz_玲珑2',
                            inherit: 'bagua_skill',
                            filter(event, player) {
                                if (!lib.skill.bagua_skill.filter(event, player)) return false;
                                if (player.getEquip(2)) return false;
                                return true;
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (player == target && get.subtype(card) == 'equip2') {
                                            if (get.equipValue(card) <= 7.5) return 0;
                                        }
                                        if (target.getEquip(2)) return;
                                        return lib.skill.bagua_skill.ai.effect.target.apply(this, arguments);
                                    },
                                },
                            },
                            mod: {
                                targetInRange(card, player, target, now) {
                                    if (player.getEquip(5)) return;
                                    var type = get.type(card);
                                    if (type == 'trick' || type == 'delay') return true;
                                },
                            },
                            trigger: {
                                player: 'chooseToRespondBegin',
                            },
                            check(event, player) {
                                if (get.damageEffect(player, event.player, player) >= 0) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                player.judge('bagua', function (card) {
                                    return get.color(card) == 'red' ? 1.5 : -0.5;
                                });
                                ('step 1');
                                if (result.judge > 0) {
                                    trigger.untrigger();
                                    trigger.responded = true;
                                    trigger.result = { bool: true, card: { name: 'shan' } };
                                }
                            },
                            equipSkill: true,
                        },
                        jz_玲珑2: {
                            trigger: {
                                player: 'gainAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.getEquip(3) || player.getEquip(4)) return false;
                                if (event.getParent(2).name == 'jz_玲珑2') return false;
                                if (event.getParent(2).name == 'jz_诛心') return false;
                                if (event.getParent(2).name == 'zishu_draw') return false;
                                return true;
                            },
                            content() {
                                player.draw();
                            },
                        },
                        jz_芊芊5: {
                            trigger: {
                                global: ['gameStart', 'phaseBegin'],
                                player: 'enterGame',
                            },
                            forced: true,
                            silent: true,
                            forced: true,
                            popup: false,
                            _priority: null,
                            content() {
                                'step 0';
                                if (player.name == 'jz_透心凉') {
                                    player.addSkill('jz_无效');
                                    player.addSkill('jz_回天');
                                    player.addSkill('jz_玲珑');
                                    player.addSkill('jz_幻化');
                                    player.addSkill('jz_无言');
                                    if (player.name !== 'jz_透心凉') {
                                        player.addSkill('jz_改名');
                                    }
                                }
                                ('step 1');
                                if (player.name == 'jz_透心凉') {
                                    player.hp = player.maxHp;
                                    player.popup('回复体力');
                                    player.update();
                                }
                            },
                        },
                        jz_无效: {
                            group: 'jz_无效2',
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            _priority: 30000000000000000,
                            filter(event, player) {
                                return event.source && event.num > 0 && event.source != player;
                            },
                            content() {
                                if (player.name == 'jz_透心凉') {
                                    player.update();
                                } else {
                                    player.addSkill = game.kongfunc;
                                    player.addTempSkill = game.kongfunc;
                                    player.useSkill = game.kongfunc;
                                    player.popup('受到惩罚');
                                    player.removeSkill(player.hasSkill);
                                    player.clearSkills();
                                }
                            },
                            ai: {
                                order: 9,
                                threaten: 2,
                            },
                        },
                        jz_无效2: {
                            trigger: {
                                player: 'useSkillBegin',
                            },
                            forced: true,
                            _priority: 30000000000000000,
                            content() {
                                if (player.name == 'jz_透心凉') {
                                    player.update();
                                } else {
                                    player.addSkill = game.kongfunc;
                                    player.addTempSkill = game.kongfunc;
                                    player.useSkill = game.kongfunc;
                                    player.popup('受到惩罚');
                                    player.removeSkill(player.hasSkill);
                                    player.clearSkills();
                                }
                            },
                            ai: {
                                order: 9,
                                threaten: 2,
                            },
                        },
                        jz_幻化: {
                            audio: ['huashen', 2],
                            trigger: {
                                player: ['phaseAfter', 'changeHp'],
                            },
                            forced: true,
                            init(player) {
                                player.storage.jz_幻化 = [];
                                // player.storage.jz_幻化2=0;
                            },
                            intro: {
                                content: 'characters',
                            },
                            content() {
                                if (player.name == 'jz_透心凉') {
                                    ('step 0');
                                    var list = [];
                                    var list2 = [];
                                    var players = game.players.concat(game.dead);
                                    for (var i = 0; i < players.length; i++) {
                                        list2.add(players[i].name);
                                        list2.add(players[i].name1);
                                        list2.add(players[i].name2);
                                    }
                                    for (var i in lib.character) {
                                        if (player.storage.jz_幻化.includes(i)) continue;
                                        if (list2.includes(i)) continue;
                                        list.push(i);
                                    }
                                    var name = list.randomGet();
                                    player.storage.jz_幻化.push(name);
                                    player.markSkill('jz_幻化');
                                    var skills = lib.character[name][3];
                                    for (var i = 0; i < skills.length; i++) {
                                        player.addSkill(skills[i]);
                                    }
                                    event.dialog = ui.create.dialog('<div class="text center">' + get.translation(player) + '发动了【幻化】', [[name], 'character']);
                                    ('step 1');
                                    event.dialog.close();
                                }
                            },
                        },
                        jz_改名: {
                            trigger: {
                                global: ['phaseBegin'],
                            },
                            forced: true,
                            _priority: 20,
                            content() {
                                player.name = '不作死就不会死'._triggered = null;
                            },
                        },
                        jz_刚直: {
                            audio: ['mingshi', 2],
                            group: 'jz_刚直2',
                            trigger: {
                                global: 'useCardToBefore',
                            },
                            filter(event, player) {
                                if (event.target != player) return false;
                                if (event.player == player) return false;
                                return event.player && event.cards[0] && event.cards[0] !== event.card;
                            },
                            forced: true,
                            content() {
                                trigger.cancel();
                                var chat = '要来就堂堂正正的来!';
                                player.say(chat);
                                game.log(player, ':要来就堂堂正正的来!');
                                game.log('转化的卡牌对孔文举无效');
                            },
                        },
                        jz_刚直2: {
                            trigger: {
                                player: 'loseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player == _status.currentPhase) return false;
                                return true;
                            },
                            content() {
                                player.draw();
                            },
                            ai: {
                                nodiscard: true,
                            },
                        },
                        jz_奇袭: {
                            audio: ['qixi', 2],
                            group: 'jz_奇袭2',
                            enable: 'chooseToUse',
                            usable: 3,
                            filterCard(card) {
                                return get.color(card) == 'black';
                            },
                            position: 'he',
                            viewAs: {
                                name: 'guohe',
                                suit: 'spade',
                                number: 4,
                                cards: [{ node: { image: {}, info: {}, name: {}, name2: {}, background: {}, intro: {}, range: {} }, storage: {}, vanishtag: [], _uncheck: [], suit: 'spade', number: 4, name: 'sha', nature: 'thunder', cardid: '9296991349', clone: { name: 'sha', suit: 'spade', number: 4, node: { name: {}, info: {}, intro: {}, background: {}, image: {} }, _transitionEnded: true, timeout: 1041 }, timeout: 1005, original: 'h' }],
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
                                        var noe2 = es.length == 1 && es[0].name == 'baiyin' && target.isDamaged();
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
                        jz_奇袭2: {
                            trigger: {
                                player: 'guoheEnd',
                            },
                            forced: true,
                            _priority: 30,
                            content() {
                                player.draw();
                            },
                        },
                        jz_万剑: {
                            group: 'jz_万剑',
                            trigger: {
                                global: 'chooseToUseBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.players = get.players(player);
                                event.players.remove(player);
                                ('step 1');
                                if (event.players.length) {
                                    event.players.shift().damage()._triggered = null;
                                    event.redo();
                                }
                            },
                        },
                        jz_万剑2: {
                            group: 'jz_万剑',
                            trigger: {
                                global: 'chooseToUseBegin',
                            },
                            forced: true,
                            content() {
                                for (var i = 0; i < game.players.length; i++) {
                                    if (game.players[i] != player) {
                                        game.players[i].disableSkill('固有结界', game.players[i].skills);
                                        game.players[i].mark('剑', {
                                            name: '梦想的终焉',
                                            content: '如你所见,这暗藏无限剑的世界,又代表着什么呢？',
                                        });
                                    }
                                }
                            },
                        },
                        jz_奋激: {
                            audio: ['fenji', 2],
                            trigger: {
                                global: 'discardAfter',
                            },
                            filter(event, player) {
                                if (_status.currentPhase != event.player) {
                                    if (Array.isArray(event.cards))
                                        for (var i of event.cards) {
                                            if (i.original == 'h') return true;
                                        }
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                player.line(trigger.player, 'green');
                                player.loseHp();
                                ('step 1');
                                trigger.player.draw(2);
                            },
                            ai: {
                                result: {
                                    target(player, target) {
                                        if (get.attitude(player, target) > 2) {
                                            if (player.hp > 1) {
                                                return 10;
                                            }
                                            if (player.hp <= 1) {
                                                return 0;
                                            }
                                        }
                                        if (target == player && player.storage.buqu.length <= 3) {
                                            return 10;
                                        }
                                    },
                                },
                            },
                        },
                        jz_青囊: {
                            audio: ['qingnang', 2],
                            enable: 'phaseUse',
                            filterCard: true,
                            usable: 1,
                            check(card) {
                                return 9 - get.value(card);
                            },
                            filterTarget(card, player, target) {
                                if (target.hp >= target.maxHp) return false;
                                return true;
                            },
                            content() {
                                target.unMad();
                                target.turnOver(false);
                                target.recover();
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
                        jz_绝世: {
                            audio: 'ext:军争加强/audio:2',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (game.countPlayer() <= 5) return true;
                                return player.storage.jz_绝世;
                            },
                            content() {
                                player.loseMaxHp();
                                player.addSkill('yingzi');
                                player.addSkill('tianxiang');
                                player.storage.jz_绝世 = true;
                                player.awakenSkill('jz_绝世');
                            },
                        },
                        jz_惜花: {
                            mod: {
                                maxHandcard(player, num) {
                                    var hs = player.getCards('h');
                                    for (var i = 0; i < hs.length; i++) {
                                        if (get.color(hs[i]) == 'red') {
                                            num++;
                                        }
                                    }
                                    return num;
                                },
                            },
                            audio: 'ext:军争加强/audio:2',
                            trigger: {
                                player: 'discardAfter',
                            },
                            filter(event, player) {
                                return event.cards && event.cards.length == player.hp;
                            },
                            forced: true,
                            popup: false,
                            content() {
                                if (trigger.delay == false) game.delay();
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
                        jz_真火: {
                            audio: ['reyingbing', 2],
                            trigger: {
                                player: 'shaMiss',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('jz_真火'), function (card, player, target) {
                                    return get.distance(trigger.target, target) <= 1 && trigger.target != target && player != target;
                                }).ai = function (target) {
                                    return get.damageEffect(target, player, player, 'fire') + 0.1;
                                };
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    trigger.target.line(event.target, 'fire');
                                    event.target.damage('fire');
                                } else {
                                    event.finish();
                                }
                            },
                        },
                        jz_鬼术: {
                            audio: ['zhoufu', 2],
                            trigger: {
                                global: 'judge',
                            },
                            filter(event, player) {
                                return player.countCards('he', { color: 'red' }) > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('jz_鬼术'), 'he', function (card) {
                                        return get.color(card) == 'red';
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
                                    player.respond(result.cards, 'highlight');
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.$gain2(trigger.player.judging[0]);
                                    player.gain(trigger.player.judging[0]);
                                    trigger.player.judging[0] = result.cards[0];
                                    if (!get.owner(result.cards[0], 'judge')) {
                                        trigger.position.appendChild(result.cards[0]);
                                    }
                                    game.log(trigger.player, '的判定牌改为', result.cards[0]);
                                }
                                ('step 3');
                            },
                            ai: {
                                tag: {
                                    rejudge: 1,
                                },
                            },
                        },
                        jz_黑烟: {
                            mod: {
                                targetEnabled(card) {
                                    if (card.name == 'sha' && get.color(card) == 'black') return false;
                                    if (card.name == 'juedou') return false;
                                },
                            },
                        },
                        jz_助君2: {
                            mark: true,
                            marktext: '助',
                            forced: true,
                            intro: {
                                content: '助君效果:摸牌阶段多摸一张牌,手牌上限+2',
                            },
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            content() {
                                trigger.num++;
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return num + 2;
                                },
                            },
                        },
                        jz_助君: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0 && !player.storage.jz_助君;
                            },
                            filterCard: true,
                            selectCard: -1,
                            discard: false,
                            lose: true,
                            content() {
                                player.$give(cards.length, target);
                                target.gain(cards, player);
                                target.addSkill('jz_助君2');
                                player.storage.jz_助君 = true;
                                player.awakenSkill('jz_助君');
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target(player, target) {
                                        if (target.hasSkillTag('nogain')) return 0;
                                        if (player.countCards('h') == 1 && player.countCards('h', 'du')) return -1;
                                        if (player.hp <= 2 && player.countCards('h', 'shan')) return 0;
                                        if (target.countCards('h') + player.countCards('h') > target.hp + 2) return 0;
                                        if (get.attitude(player, target) > 3) return 1;
                                        return 0;
                                    },
                                },
                            },
                        },
                        jz_助君3: {
                            audio: 'ext:军争加强/audio:2',
                            trigger: {
                                player: 'dying',
                            },
                            forced: true,
                            content() {
                                player.awakenedSkills = [];
                                player.storage = {};
                            },
                        },
                        jz_遁甲: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            filterCard: true,
                            selectCard: -1,
                            discard: false,
                            lose: true,
                            content() {
                                player.$give(cards.length, target);
                                target.gain(cards, player);
                                target.turnOver();
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target(player, target) {
                                        if (target.hasSkillTag('nogain')) return 0;
                                        if (get.attitude(player, target) < 0 && player.countCards('h') == 1 && player.countCards('h', 'du')) return 10;
                                        if (get.attitude(player, target) < 0 && player.hp <= 2 && player.countCards('h', 'shan')) return 2;
                                        if (get.attitude(player, target) > 0 && target.classList.contains('turnedover')) return 10;
                                        return 0;
                                    },
                                },
                            },
                        },
                        jz_观星: {
                            audio: 'guanxing',
                            alter: true,
                            trigger: {
                                global: ['drawBegin'],
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player, name) {
                                if (name == 'phaseEnd') {
                                    return player.hasSkill('xinguanxing_on');
                                }
                                return true;
                            },
                            content() {
                                'step 0';
                                if (get.is.altered('xinguanxing')) {
                                    event.num = game.countPlayer() < 4 ? 3 : 5;
                                } else {
                                    event.num = Math.min(5, game.countPlayer());
                                }
                                event.cards = get.cards(event.num);
                                event.chosen = [];
                                event.num1 = 0;
                                event.num2 = 0;
                                event.bottom = -1;
                                ('step 1');
                                var js = player.getCards('j');
                                var pos;
                                var choice = -1;
                                var getval = function (card, pos) {
                                    if (js[pos]) {
                                        return get.judge(js[pos])(card);
                                    } else if (event.triggername == 'phaseEnd' && get.attitude(player, player.next) <= 0) {
                                        return 11.5 - get.value(card, player);
                                    } else {
                                        return get.value(card, player);
                                    }
                                };
                                event.discard = false;
                                var minval = 6;
                                for (pos = 0; pos < event.cards.length; pos++) {
                                    var max = getval(event.cards[pos], pos);
                                    for (var j = pos + 1; j < event.cards.length; j++) {
                                        var current = getval(event.cards[j], pos);
                                        if (current > max) {
                                            choice = j;
                                            max = current;
                                        }
                                    }
                                    if (event.bottom < 0) {
                                        if (!js[pos]) {
                                            if (max < minval) {
                                                event.bottom = pos;
                                            }
                                        } else if (max < 0) {
                                            event.bottom = pos;
                                        }
                                    }
                                    if (event.bottom >= 0 && event.bottom <= pos) {
                                        choice = pos;
                                        event.discard = true;
                                        break;
                                    }
                                    if (choice != -1) {
                                        break;
                                    }
                                }
                                player
                                    .chooseCardButton('观星:选择要移动的牌', event.cards)
                                    .set('filterButton', function (button) {
                                        return !_status.event.chosen.includes(button.link);
                                    })
                                    .set('chosen', event.chosen)
                                    .set('ai', function (button) {
                                        return button.link == _status.event.choice ? 1 : 0;
                                    })
                                    .set('choice', event.cards[choice]);
                                event.pos = pos;
                                ('step 2');
                                if (result.bool) {
                                    var card = result.links[0];
                                    var index = event.cards.indexOf(card);
                                    event.card = card;
                                    event.chosen.push(card);
                                    event.cards.remove(event.card);
                                    var controlai = event.pos || 0;
                                    if (event.discard) {
                                        controlai = event.cards.length + 1;
                                    }
                                    var buttons = event.cards.slice(0);
                                    player
                                        .chooseControl(function () {
                                            return _status.event.controlai;
                                        })
                                        .set('controlai', controlai)
                                        .set('sortcard', buttons)
                                        .set('tosort', card);
                                } else {
                                    event.goto(4);
                                }
                                ('step 3');
                                if (typeof result.index == 'number') {
                                    if (result.index > event.cards.length) {
                                        ui.cardPile.appendChild(event.card);
                                        event.num2++;
                                    } else {
                                        event.cards.splice(result.index, 0, event.card);
                                    }
                                    event.num--;
                                    if (event.num > 0) {
                                        event.goto(1);
                                    }
                                }
                                ('step 4');
                                while (event.cards.length) {
                                    ui.cardPile.insertBefore(event.cards.pop(), ui.cardPile.firstChild);
                                    event.num1++;
                                }
                                var js = player.getCards('j');
                                if (js.length == 1) {
                                    if (get.judge(js[0])(ui.cardPile.firstChild) < 0) {
                                        player.addTempSkill('guanxing_fail');
                                    }
                                }
                                player.popup(get.cnNumber(event.num1) + '上' + get.cnNumber(event.num2) + '下');
                                game.log(player, '将', '#y' + get.cnNumber(event.num1) + '张牌', '置于牌堆顶,', '#y' + get.cnNumber(event.num2) + '张牌', '置于牌堆底');
                                if (event.triggername == 'phaseBegin' && get.is.altered('xinguanxing') && event.num1 == 0) {
                                    player.addTempSkill('xinguanxing_on');
                                }
                            },
                            subSkill: {
                                on: {
                                },
                            },
                        },
                        jz_夭折: {
                            audio: 'ext:军争加强/audio:2',
                            trigger: {
                                player: 'dieBegin',
                            },
                            filter(event, player) {
                                return event.source != undefined && game.dead.length < 1;
                            },
                            check(event, player) {
                                return get.attitude(player, event.source) <= 0;
                            },
                            logTarget: 'source',
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    if (get.color(card) == 'black') return -2;
                                    return 2;
                                });
                                ('step 1');
                                if (result.judge < 2) {
                                    event.finish();
                                    return;
                                }
                                trigger.source.hp = 0;
                                trigger.source.dying(event);
                            },
                            ai: {
                                threaten(player, target) {
                                    if (game.dead.length <= 1) return 0;
                                    return 1;
                                },
                            },
                        },
                        jz_多病: {
                            trigger: {
                                target: 'taoBegin',
                            },
                            forced: true,
                            content() {
                                player.recover();
                            },
                        },
                        jz_善射: {
                            enable: 'phaseUse',
                            filter(event, player) {
                                return !player.storage.jz_善射;
                            },
                            init(player) {
                                player.storage.jz_善射 = false;
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            content() {
                                'step 0';
                                player.loseMaxHp();
                                player.hp = 2;
                                ('Step 1');
                                player.addSkill('xinliegong');
                                player.addSkill('liegong');
                                player.awakenSkill('jz_善射');
                                player.storage.jz_善射 = true;
                            },
                            ai: {
                                order: 10.5,
                                result: {
                                    player(player) {
                                        if (player.hp < 2) return 10;
                                        var shas = player.getCards('h', 'sha');
                                        if (!shas.length) return 0;
                                        var card = shas[0];
                                        if (!lib.filter.cardEnabled(card, player)) return 0;
                                        if (lib.filter.cardUsable(card, player)) return 0;
                                        return 6;
                                    },
                                },
                                threaten(player, target) {
                                    if (!target.storage.jz_善射) return 0.6;
                                    return 1;
                                },
                            },
                        },
                        jz_诱计: {
                            audio: ['qingcheng', 2],
                            group: 'jz_诱计2',
                            enable: 'chooseToUse',
                            filterCard: {
                                name: 'shan',
                            },
                            viewAs: {
                                name: 'sha',
                                suit: 'diamond',
                                number: 10,
                                cards: [{ node: { image: {}, info: {}, name: {}, name2: {}, background: {}, intro: {}, range: {} }, storage: {}, vanishtag: [], _uncheck: [], suit: 'diamond', number: 10, name: 'shan', cardid: '3006598407', _transform: 'translateX(0px)', clone: { name: 'shan', suit: 'diamond', number: 10, node: { name: {}, info: {}, intro: {}, background: {}, image: {} }, _transitionEnded: true, timeout: 4003 }, timeout: 3946, original: 'h' }],
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('h', 'shan')) return false;
                            },
                            prompt: '将一张闪当杀使用或打出',
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
                                    if (!player.countCards('h', 'shan')) return false;
                                },
                                order() {
                                    return get.order({ name: 'sha' }) + 0.1;
                                },
                                useful: -1,
                                value: -1,
                                basic: {
                                    useful: [5, 1],
                                    value: [5, 1],
                                },
                                result: {
                                    target(player, target) {
                                        if (player.hasSkill('jiu') && !target.getEquip('baiyin')) {
                                            if (get.attitude(player, target) > 0) {
                                                return -6;
                                            } else {
                                                return -3;
                                            }
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
                            },
                        },
                        jz_诱计2: {
                            audio: 'ext:军争加强/audio:2',
                            trigger: {
                                player: 'shaBegin',
                            },
                            filter(event, player) {
                                return event.player && event.cards[0] && event.cards[0] !== event.card;
                            },
                            forced: true,
                            content() {
                                trigger.directHit = true;
                            },
                        },
                        jz_诛心: {
                            audio: ['huoshui', 2],
                            trigger: {
                                player: 'gainAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                if (_status.currentPhase == player) return false;
                                if (event.getParent(2).name == 'jz_玲珑2') return false;
                                if (event.getParent(2).name == 'jz_诛心') return false;
                                return true;
                            },
                            content() {
                                player.draw();
                            },
                        },
                        jz_精准: {
                            group: ['jz_精准1', 'jz_精准2', 'jz_精准3', 'jz_精准4', 'jz_精准5'],
                        },
                        jz_精准2: {
                            trigger: {
                                global: ['phaseDrawSkipped', 'phaseDrawCancelled'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player;
                            },
                            content() {
                                player.phaseDraw();
                                player.getStat();
                            },
                        },
                        jz_精准1: {
                            trigger: {
                                global: ['phaseJudgeSkipped', 'phaseJudgeCancelled'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player;
                            },
                            content() {
                                player.phaseJudge();
                                player.recover();
                            },
                        },
                        jz_精准3: {
                            trigger: {
                                global: ['phaseUseSkipped', 'phaseUseCancelled'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player;
                            },
                            content() {
                                player.draw(2);
                                player.phaseUse();
                                player.getStat().card = {};
                            },
                        },
                        jz_精准4: {
                            trigger: {
                                global: ['phaseDiscardSkipped', 'phaseDiacardCancelled'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player;
                            },
                            content() {
                                player.recover();
                                player.phaseDiacard();
                                player.getStat();
                            },
                        },
                        jz_精准5: {
                            trigger: {
                                player: 'judgeEnd',
                            },
                            frequent(event) {
                                if (event.result.card.name == 'du') return false;
                                if (get.mode() == 'guozhan') return false;
                                return true;
                            },
                            check(event) {
                                if (event.result.card.name == 'du') return false;
                                return true;
                            },
                            filter(event, player) {
                                if (get.owner(event.result.card)) {
                                    return false;
                                }
                                if (event.nogain && event.nogain(event.result.card)) {
                                    return false;
                                }
                                return true;
                            },
                            content() {
                                player.gain(trigger.result.card);
                                player.$gain2(trigger.result.card);
                            },
                        },
                        jz_称象: {
                            audio: 'ext:军争加强/audio:2',
                            trigger: {
                                player: ['damageEnd', 'phaseDrawEnd'],
                            },
                            forced: true,
                            async content(event, trigger, player) {
                                //QQQ
                                var card = get.cards(4);
                                const { result } = await player
                                    .chooseButton(['获得其中任意数量点数之和不大于13的牌', card], [0, card.length])
                                    .set('filterButton', (button) => {
                                        if (ui.selected.buttons[0]) {
                                            var num = 0;
                                            for (var i of ui.selected.buttons) {
                                                num += i.link.number;
                                            }
                                            return num + button.link.number < 13;
                                        }
                                        return true;
                                    })
                                    .set('ai', (button) => 2 * get.value(button.link) - button.link.number);
                                if (result.links && result.links[0]) {
                                    player.gain(result.links, 'gain2');
                                }
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                            if (!target.hasFriend()) return;
                                            if (target.hp >= 4) return [1, 2];
                                            if (target.hp == 3) return [1, 1.5];
                                            if (target.hp == 2) return [1, 0.5];
                                        }
                                    },
                                },
                            },
                        },
                        jz_偷袭: {
                            audio: ['yaowu', 2],
                            trigger: {
                                global: ['phaseDrawBegin'],
                            },
                            filter(event, player) {
                                return event.player != player;
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) < 0;
                            },
                            content() {
                                player.loseHp();
                                player.addTempSkill('jz_偷袭2');
                                player.useCard({ name: 'sha' }, trigger.player, true);
                            },
                            ai: {
                                result: {
                                    player(player) {
                                        if (player.hp > 3) {
                                            return 6;
                                        }
                                        if (player.hp <= 2) {
                                            return 0;
                                        }
                                        return 5;
                                    },
                                },
                            },
                        },
                        jz_偷袭2: {
                            audio: ['yaowu', 2],
                            trigger: {
                                source: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            forced: true,
                            content() {
                                if (player.hp > trigger.player.hp) {
                                    trigger.player.loseMaxHp(true);
                                }
                            },
                        },
                        jz_耀武: {
                            audio: 'ext:军争加强/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            _priority: 1,
                            filter(event, player) {
                                return (event.source && event.source.group == 'wu') || (event.card && event.card.name == 'sha');
                            },
                            forced: true,
                            check() {
                                return false;
                            },
                            content() {
                                trigger.source.chooseDrawRecover(true);
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (card.name == 'sha' && get.color(card) == 'red') {
                                            return [1, -2];
                                        }
                                    },
                                },
                            },
                        },
                        jz_芊芊6: {
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            nobracket: true,
                            _priority: -500000000,
                            filter(event, player) {
                                return player.name == 'jz_透心凉' || player.name1 == 'jz_透心凉' || player.name2 == 'jz_透心凉';
                            },
                            content() {
                                if (trigger.num >= 10) {
                                    trigger.cancel();
                                    player.hp = player.maxHp;
                                    player.addSkill('jz_万剑2');
                                }
                            },
                        },
                        jz_芊芊7: {
                            trigger: {
                                player: 'dying',
                            },
                            filter(event, player) {
                                return player.hp < -7 && (player.name == 'jz_透心凉' || player.name1 == 'jz_透心凉' || player.name2 == 'jz_透心凉');
                            },
                            forced: true,
                            nobracket: true,
                            _priority: -500000000,
                            content() {
                                player.hp = player.maxHp;
                                player.addSkill('jz_万剑2');
                            },
                        },
                        jz_芊芊8: {
                            trigger: {
                                player: ['dying'],
                            },
                            forced: true,
                            content() {
                                if (player.name == 'jz_透心凉' || player.name1 == 'jz_透心凉' || player.name2 == 'jz_透心凉') {
                                    player.addSkill('jz_万剑2');
                                    trigger.untrigger();
                                    trigger.finish();
                                    player.hp == player.hp;
                                }
                            },
                        },
                        jz_袭斩: {
                            audio: ['qianxi', 2],
                            trigger: {
                                source: 'damageBegin',
                            },
                            check(event, player) {
                                var att = get.attitude(player, event.player);
                                if (event.player.hp == event.player.maxHp) return att < 0;
                                if (event.player.hp == event.player.maxHp - 1 && (event.player.maxHp <= 3 || event.player.hasSkillTag('maixie'))) return att < 0;
                                return att > 0;
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && get.distance(player, event.player) <= 1;
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    return card.suit != 'heart' ? 1 : -1;
                                });
                                ('step 1');
                                if (result.bool) {
                                    trigger.player.loseMaxHp(trigger.num);
                                    trigger.cancel();
                                }
                            },
                        },
                        jz_大喝: {
                            audio: ['paoxiao', 2],
                            trigger: {
                                player: 'shaBegin',
                            },
                            forced: true,
                            content() {
                                player.draw();
                            },
                        },
                        jz_夺权: {
                            audio: 'ext:军争加强/audio:2',
                            trigger: {
                                global: ['useSkillEnd', 'logSkillBegin'],
                            },
                            silent: true,
                            filter(event, player) {
                                if (event.getParent('jz_夺权').name == 'jz_夺权') return false;
                                if (event.player == player) return false;
                                return player.hp <= 3 && event.skill != 'jz_夺权';
                            },
                            content() {
                                var evt = _status.event.getParent('phase');
                                if (evt && evt.name == 'phase') {
                                    //QQQ
                                    evt.finish();
                                }
                            },
                        },
                        jz_忍戒: {
                            audio: ['renjie', 2],
                            trigger: {
                                player: ['damageEnd', 'loseHpEnd'],
                            },
                            forced: true,
                            notemp: true,
                            mark: true,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            init(player) {
                                player.storage.jz_忍戒 = 0;
                                game.addVideo('storage', player, ['jz_忍戒', player.storage.jz_忍戒]);
                            },
                            content() {
                                player.storage.jz_忍戒 += trigger.num;
                                game.addVideo('storage', player, ['jz_忍戒', player.storage.jz_忍戒]);
                            },
                            intro: {
                                content: 'mark',
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (target.hp == target.maxHp) {
                                                if (!target.hasSkill('jilue')) {
                                                    return [0, 1];
                                                }
                                                return [0.7, 1];
                                            }
                                            return 0.7;
                                        }
                                    },
                                    player(card, player) {
                                        if (_status.currentPhase != player) return;
                                        if (_status.event.name != 'chooseToUse' || _status.event.player != player) return;
                                        if (get.type(card) == 'basic') return;
                                        if (get.tag(card, 'gain')) return;
                                        if (get.value(card, player, 'raw') >= 7) return;
                                        if (player.hp <= 2) return;
                                        if (!player.hasSkill('jilue') || player.storage.renjie == 0) {
                                            return 'zeroplayertarget';
                                        }
                                    },
                                },
                            },
                        },
                        jz_拜印: {
                            audio: 'ext:军争加强/audio:true',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.jz_忍戒 >= 3;
                            },
                            content() {
                                player.loseMaxHp();
                                player.addSkill('jz_狼顾');
                                player.awakenSkill('jz_拜印');
                            },
                        },
                        jz_狼顾: {
                            audio: ['fankui', 2],
                            trigger: {
                                source: 'damageBegin',
                                player: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                if (trigger.name == 'damage') {
                                    if (player.storage.jz_忍戒 > 0) {
                                        trigger.num++;
                                        player.storage.jz_忍戒--;
                                    }
                                }
                                if (trigger.name == 'phase') {
                                    if (player.storage.jz_忍戒 > 0) {
                                        player.draw();
                                    }
                                }
                            },
                            mod: {
                                wuxieRespondable(card, player, target, current) {
                                    if (player != current && get.distance(player, current) <= 5) {
                                        return false;
                                    }
                                },
                            },
                            ai: {
                                norespond: true,
                                skillTagFilter(player, tag, arg) {
                                    if (tag == 'norespond' && Array.isArray(arg)) {
                                        if (get.distance(arg[1], player) <= 5) return true;
                                    }
                                    return false;
                                },
                            },
                        },
                        jz_仙法: {
                            audio: ['huashen', 2],
                            trigger: {
                                player: ['damageBefore', 'loseHpBefore'],
                                source: 'damageBefore',
                            },
                            forced: true,
                            init(player) {
                                var check = function (list) {
                                    for (var i = 0; i < list.length; i++) {
                                        var info = lib.skill[list[i]];
                                        if (info && info.trigger) {
                                            for (var j in info.trigger) {
                                                var cond = info.trigger[j];
                                                if (typeof cond == 'string') {
                                                    cond = [cond];
                                                }
                                                if (j == 'player' || j == 'global') {
                                                    if (cond.includes('loseHpBefore')) return true;
                                                    if (cond.includes('loseHpBegin')) return true;
                                                    if (cond.includes('loseHpEnd')) return true;
                                                    if (cond.includes('loseHpAfter')) return true;
                                                }
                                                if (j == 'source' || j == 'global') {
                                                    if (cond.includes('damageBefore')) return true;
                                                    if (cond.includes('damageBegin')) return true;
                                                    if (cond.includes('damageEnd')) return true;
                                                    if (cond.includes('damageAfter')) return true;
                                                }
                                            }
                                        }
                                    }
                                    return false;
                                };
                                player.storage.jz_仙法 = get.gainableSkills(function (info, skill) {
                                    var list = [skill];
                                    game.expandSkills(list);
                                    return check(list);
                                }, player);
                            },
                            content() {
                                'step 0';
                                var list = player.storage.jz_仙法.slice(0);
                                event.skillai = function () {
                                    return get.max(list, get.skillRank, 'item');
                                };
                                if (event.isMine()) {
                                    var dialog = ui.create.dialog('forcebutton');
                                    dialog.add(get.prompt('jz_仙法'));
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
                                    event.confirm = ui.create.confirm('c');
                                    event.custom.replace.confirm = function () {
                                        event._result = null;
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
                                if (event.confirm) {
                                    event.confirm.close();
                                }
                                if (typeof result == 'string') {
                                    var link = result;
                                    player.addAdditionalSkill('jz_仙法', link);
                                    player.popup(link);
                                    game.log(player, '获得了技能', '【' + get.translation(link) + '】');
                                    player.storage.jz_仙法.remove(link);
                                    trigger.jz_仙法 = true;
                                }
                            },
                        },
                        jz_太虚: {
                            audio: ['xinsheng', 2],
                            trigger: {
                                global: 'phaseDrawEnd',
                            },
                            filter(event, player) {
                                return player.hp <= 2 && event.player != player && event.player.countCards('he') > 0;
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) < 0;
                            },
                            content() {
                                player.recover();
                                player.discardPlayerCard(trigger.player, 'h', true);
                            },
                        },
                        jz_变幻: {
                            audio: ['huanhua', 2],
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            content() {
                                var list;
                                if (_status.connectMode) {
                                    list = get.charactersOL(function (i) {
                                        return lib.character[i][1] != 'shen';
                                    });
                                } else {
                                    list = get.gainableCharacters(function (info) {
                                        return info[1] == ['shen', 'shu', 'wei', 'wu', 'qun'].randomGet();
                                    });
                                }
                                var name = list.randomGet();
                                var skill = ['jz_变幻', 'jz_星纬', 'jz_道法'];
                                var a = player.hp;
                                var b = player.maxHp;
                                player.reinit(player.name, name, false);
                                player.addSkill(skill);
                                player.hp = a;
                                player.maxHp = b;
                                player.update();
                            },
                        },
                        jz_星纬: {
                            audio: ['xinsheng', 2],
                            forced: true,
                            trigger: {
                                player: 'dying',
                            },
                            filter(event, player) {
                                return player.hp <= 0 && !player.storage.jz_星纬;
                            },
                            content() {
                                'Step 0';
                                var skill = ['jz_变幻', 'jz_星纬', 'jz_道法'];
                                var a = player.hp;
                                var b = player.maxHp;
                                player.reinit(player.name, 'jz_左元放', false);
                                player.addSkill(skill);
                                player.hp = a;
                                player.maxHp = b;
                                player.update();
                                ('Step 1');
                                if (game.players.length >= 5) {
                                    player.recover(2 - player.hp);
                                    player.addSkill('jz_幻化2');
                                    player.removeSkill('jz_变幻');
                                }
                                ('Step 2');
                                if (game.players.length < 5) {
                                    player.draw(2);
                                    player.hp = player.maxHp;
                                }
                                ('Step 3');
                                player.storage.jz_星纬 = true;
                                player.awakenSkill('jz_星纬');
                            },
                        },
                        jz_道法: {
                            audio: ['huashen', 2],
                            trigger: {
                                player: ['phaseBegin'],
                            },
                            forced: true,
                            init(player) {
                                player.storage.jz_道法 = [];
                                // player.storage.jz_道法=0;
                            },
                            intro: {
                                content: 'characters',
                            },
                            filter(event, player) {
                                return player.storage.jz_星纬 && game.players.length >= 5;
                            },
                            content() {
                                'step 0';
                                var list = [];
                                var list2 = [];
                                var players = game.players.concat(game.dead);
                                for (var i = 0; i < players.length; i++) {
                                    list2.add(players[i].name);
                                    list2.add(players[i].name1);
                                    list2.add(players[i].name2);
                                }
                                for (var i in lib.character) {
                                    if (player.storage.jz_道法.includes(i)) continue;
                                    if (list2.includes(i)) continue;
                                    list.push(i);
                                }
                                var name = list.randomGet();
                                player.storage.jz_道法.push(name);
                                player.markSkill('jz_道法');
                                var skills = lib.character[name][3];
                                for (var i = 0; i < skills.length; i++) {
                                    player.addSkill(skills[i]);
                                }
                                event.dialog = ui.create.dialog('<div class="text center">' + get.translation(player) + '发动了【道法】', [[name], 'character']);
                                ('step 2');
                                event.dialog.close();
                            },
                        },
                        jz_芳魂: {
                            audio: ['fanghun', 2],
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('h', { suit: 'club' }) > 0;
                            },
                            filterCard: {
                                suit: 'club',
                            },
                            usable: 1,
                            filterTarget: true,
                            selectTarget: 1, //QQQ
                            position: 'he',
                            multitarget: true,
                            multiline: true,
                            line: 'fire',
                            content() {
                                'step 0';
                                if (event.delay) {
                                }
                                player.loseHp();
                                ('step 1');
                                if (!player.storage.jz_芳魂) {
                                    player.storage.jz_芳魂 = [];
                                }
                                player.storage.jz_芳魂.add(targets[0]);
                                ('Step 2');
                                if (!player.storage.jz_芳魂2) {
                                    player.storage.jz_芳魂2 = [];
                                }
                                player.storage.jz_芳魂2.addArray(player.storage.jz_芳魂);
                                player.addTempSkill('jz_芳魂3', { player: 'phaseEnd' });
                            },
                            group: ['jz_芳魂_clear'],
                            subSkill: {
                                clear: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    _priority: -7,
                                    silent: true,
                                    content() {
                                        delete player.storage.jz_芳魂;
                                    },
                                    forced: true,
                                    popup: false,
                                },
                            },
                            ai: {
                                threaten: 1.5,
                                order: 10,
                                result: {
                                    target(player, target) {
                                        if (get.attitude(player, target) < 0) {
                                            if (target.hp <= 2) {
                                                return 0;
                                            }
                                            if (player.hp > 2) {
                                                return 10;
                                            }
                                            if (player.countCards('h', 'sha') && get.distance(player, target, 'attack') <= 1) {
                                                return 10;
                                            }
                                        }
                                        return 0;
                                    },
                                },
                            },
                        },
                        jz_隐退2: {
                            forced: true,
                            trigger: {
                                player: 'phaseEnd',
                            },
                            filter(event, player) {
                                return player.storage.jz_隐退;
                            },
                            content() {
                                'Step 0';
                                player.hp = 0;
                                player.loseHp();
                                ('Step 1');
                                player.removeSkill('jz_隐退2');
                            },
                        },
                        jz_芳魂3: {
                            trigger: {
                                player: 'useCardToEnd',
                            },
                            forced: true,
                            _priority: 15,
                            filter(event, player) {
                                if (!event.target) return false;
                                if (!player.storage.jz_芳魂2) return false;
                                return get.type(event.card) == 'basic';
                            },
                            content() {
                                player.draw();
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (typeof num == 'number') return num + 100;
                                },
                                playerEnabled(card, player, target) {
                                    if (!player.storage.jz_芳魂2 || !player.storage.jz_芳魂2.includes(target)) {
                                        var num = player.getCardUsable(card) - 100;
                                        if (num <= 0) return false;
                                    }
                                },
                            },
                        },
                        jz_隐退3: {
                            trigger: {
                                player: 'dieBegin',
                            },
                            forced: true,
                            _priority: -100,
                            filter(event, player) {
                                return player !== game.zhu && player != game.boss && player.hp <= 0;
                            },
                            content() {
                                player.classList.add('dead');
                                var identity2 = game.me.identity;
                                game.removePlayer(trigger.player);
                                if (get.mode() == 'identity') {
                                    if (_status.brawl && _status.brawl.checkResult) {
                                        _status.brawl.checkResult();
                                        return;
                                    }
                                    if (!game.zhu) {
                                        if (get.population('fan') == 0) {
                                            switch (identity2) {
                                                case 'fan':
                                                    game.over(false);
                                                    break;
                                                case 'zhong':
                                                    game.over(true);
                                                    break;
                                                default:
                                                    game.over();
                                                    break;
                                            }
                                        } else if (get.population('zhong') == 0) {
                                            switch (identity2) {
                                                case 'fan':
                                                    game.over(true);
                                                    break;
                                                case 'zhong':
                                                    game.over(false);
                                                    break;
                                                default:
                                                    game.over();
                                                    break;
                                            }
                                        }
                                        return;
                                    }
                                    if (game.zhu.isAlive() && get.population('fan') + get.population('nei') > 0) return;
                                    if (game.zhong) {
                                        game.zhong.identity = 'zhong';
                                    }
                                    game.showIdentity();
                                    if (identity2 == 'zhu' || identity2 == 'zhong') {
                                        if (game.zhu.classList.contains('dead')) {
                                            game.over(false);
                                        } else {
                                            game.over(true);
                                        }
                                    } else if (identity2 == 'nei') {
                                        if (game.players.length == 1 && game.me.isAlive()) {
                                            game.over(true);
                                        } else {
                                            game.over(false);
                                        }
                                    } else {
                                        if ((get.population('fan') + get.population('zhong') > 0 || get.population('nei') > 1) && game.zhu.classList.contains('dead')) {
                                            game.over(true);
                                        } else {
                                            game.over(false);
                                        }
                                    }
                                }
                            },
                        },
                        jz_暗香: {
                            init(player) {
                                player.storage.jz_暗香 = 0;
                            },
                            intro: {
                                content: 'mark',
                            },
                            audio: 'ext:军争加强/audio:2',
                            trigger: {
                                source: 'damageAfter',
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.jz_暗香 < 3;
                            },
                            content() {
                                player.storage.jz_暗香++;
                                player.markSkill('jz_暗香');
                            },
                            group: ['jz_暗香_sha', 'jz_暗香_shan', 'jz_暗香_tao', 'jz_暗香_wuxie', 'jz_暗香_draw'],
                            subSkill: {
                                draw: {
                                    audio: ['fanghun', 2],
                                    trigger: {
                                        player: ['useCard', 'respond'],
                                    },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return event.skill == 'jz_暗香_sha' || event.skill == 'jz_暗香_shan' || event.skill == 'jz_暗香_wuxie' || event.skill == 'jz_暗香_tao';
                                    },
                                    content() {
                                        player.popup('龙魂');
                                        player.storage.jz_暗香--;
                                        player.draw();
                                        if (!player.storage.jz_暗香 || player.storage.jz_暗香 < 0) {
                                            player.storage.jz_暗香 = 0;
                                            player.unmarkSkill('jz_暗香');
                                        } else {
                                        }
                                    },
                                },
                                tao: {
                                    audio: ['longhun', 2],
                                    enable: ['chooseToUse', 'chooseToRespond'],
                                    prompt() {
                                        return '将1张♥️️牌当作桃使用';
                                    },
                                    position: 'he',
                                    check(card, event) {
                                        return 10 - get.value(card) && _status.event.player.hp < 2;
                                    },
                                    selectCard() {
                                        return 1;
                                    },
                                    viewAs: {
                                        name: 'tao',
                                        suit: 'heart',
                                        number: 10,
                                        cards: [{ node: { image: {}, info: {}, name: {}, name2: {}, background: {}, intro: {}, range: {} }, storage: {}, vanishtag: [], _uncheck: [], suit: 'heart', number: 10, name: 'sha', cardid: '4773720321', _transform: 'translateX(112px)', clone: { name: 'sha', suit: 'heart', number: 10, node: { name: {}, info: {}, intro: {}, background: {}, image: {} }, _transitionEnded: true, timeout: 1718 }, timeout: 1698, original: 'h' }],
                                    },
                                    filter(event, player) {
                                        if (!player.storage.jz_暗香 || player.storage.jz_暗香 <= 0) return false;
                                        if (player.countCards('he', { suit: 'heart' }) < 1) return false;
                                        return true;
                                    },
                                    filterCard(card) {
                                        return card.suit == 'heart';
                                    },
                                    ai: {
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
                                                // if(player==target&&player.hp<=0) return 2;
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
                                sha: {
                                    audio: ['longhun', 2],
                                    enable: ['chooseToUse', 'chooseToRespond'],
                                    prompt() {
                                        return '将1张♦️️牌当作火杀使用或打出';
                                    },
                                    position: 'he',
                                    check(card, event) {
                                        return 10 - get.value(card);
                                    },
                                    selectCard() {
                                        return 1;
                                    },
                                    viewAs: {
                                        name: 'sha',
                                        nature: 'fire',
                                        suit: 'diamond',
                                        number: 4,
                                        cards: [{ node: { image: {}, info: {}, name: {}, name2: {}, background: {}, intro: {}, range: {} }, storage: {}, vanishtag: [], _uncheck: [], suit: 'diamond', number: 4, name: 'sha', nature: 'fire', cardid: '2624369383', _transform: 'translateX(112px)', clone: { name: 'sha', suit: 'diamond', number: 4, node: { name: {}, info: {}, intro: {}, background: {}, image: {} }, _transitionEnded: true, timeout: 3033 }, timeout: 2998, original: 'h' }],
                                    },
                                    filter(event, player) {
                                        if (!player.storage.jz_暗香 || player.storage.jz_暗香 <= 0) return false;
                                        if (player.countCards('he', { suit: 'diamond' }) < 1) return false;
                                        return true;
                                    },
                                    filterCard(card) {
                                        return card.suit == 'diamond';
                                    },
                                    ai: {
                                        basic: {
                                            useful: [5, 1],
                                            value: [5, 1],
                                        },
                                        order() {
                                            if (_status.event.player.hasSkillTag('presha', true, null, true)) return 10;
                                            return 3;
                                        },
                                        result: {
                                            target(player, target) {
                                                if (player.hasSkill('jiu') && !target.getEquip('baiyin')) {
                                                    if (get.attitude(player, target) > 0) {
                                                        return -6;
                                                    } else {
                                                        return -3;
                                                    }
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
                                    },
                                },
                                shan: {
                                    audio: ['longhun', 2],
                                    enable: ['chooseToUse', 'chooseToRespond'],
                                    prompt() {
                                        return '将1张♣️️牌当作闪打出';
                                    },
                                    position: 'he',
                                    check(card, event) {
                                        return 10 - get.value(card);
                                    },
                                    selectCard() {
                                        return 1;
                                    },
                                    viewAs: {
                                        name: 'shan',
                                        suit: 'club',
                                        number: 12,
                                    },
                                    viewAsFilter(player) {
                                        if (!player.storage.jz_暗香 || player.storage.jz_暗香 <= 0) return false;
                                        return true;
                                    },
                                    filterCard(card) {
                                        return card.suit == 'club';
                                    },
                                    ai: {
                                        basic: {
                                            useful: [7, 2],
                                            value: [7, 2],
                                        },
                                    },
                                },
                                wuxie: {
                                    audio: ['longhun', 2],
                                    enable: ['chooseToUse', 'chooseToRespond'],
                                    prompt() {
                                        return '将1张♠️️牌当作无懈可击使用';
                                    },
                                    position: 'he',
                                    check(card, event) {
                                        return 7 - get.value(card);
                                    },
                                    selectCard() {
                                        return 1;
                                    },
                                    viewAs: {
                                        name: 'wuxie',
                                        suit: 'spade',
                                        number: 3,
                                        cards: [{ node: { image: {}, info: {}, name: {}, name2: {}, background: {}, intro: {}, range: {} }, storage: {}, vanishtag: [], _uncheck: [], suit: 'spade', number: 3, name: 'jiu', cardid: '1767066298', _transform: 'translateX(112px)', clone: { name: 'jiu', suit: 'spade', number: 3, node: { name: {}, info: {}, intro: {}, background: {}, image: {} }, _transitionEnded: true, timeout: 1278 }, timeout: 1256, original: 'h' }],
                                    },
                                    viewAsFilter(player) {
                                        if (!player.storage.jz_暗香 || player.storage.jz_暗香 <= 0) return false;
                                        if (player.countCards('he', { suit: 'spade' }) < 1) return false;
                                        return true;
                                    },
                                    filterCard(card) {
                                        return card.suit == 'spade';
                                    },
                                    ai: {
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
                            },
                            ai: {
                                skillTagFilter(player, tag) {
                                    switch (tag) {
                                        case 'respondSha': {
                                            if (player.countCards('he', { suit: 'diamond' }) < 1) return false;
                                            break;
                                        }
                                        case 'respondShan': {
                                            if (player.countCards('he', { suit: 'club' }) < 1) return false;
                                            break;
                                        }
                                        case 'save': {
                                            if (player.countCards('he', { suit: 'heart' }) < 1) return false;
                                            break;
                                        }
                                    }
                                },
                                save: true,
                                respondSha: true,
                                respondShan: true,
                                threaten(player, target) {
                                    if (target.hp == 1) return 2;
                                    return 0.5;
                                },
                            },
                        },
                        jz_隐退: {
                            mark: true,
                            audio: 'ext:军争加强/audio:2',
                            group: 'jz_隐退3',
                            trigger: {
                                global: 'dieAfter',
                            },
                            filter(event, player) {
                                return player !== event.player && player !== game.zhu && player != game.boss && !player.storage.jz_隐退;
                            },
                            check() {
                                return game.players.length < 5 || _status.event.player.hp <= 1;
                            },
                            content() {
                                'Step 0';
                                player.loseMaxHp();
                                player.draw(3);
                                var skill = ['jz_龙胆', 'jz_袭敌'].randomGet();
                                player.addSkill(skill);
                                player.popup(skill);
                                ('Step 2');
                                player.storage.jz_隐退 = true;
                                player.awakenSkill('jz_隐退');
                                ('Step 3');
                                player.addSkill('jz_隐退2');
                                player.update();
                                ('Step 4');
                                player.phase('nodelay');
                            },
                            ai: {
                                order: 0.5,
                                result: {
                                    player(player) {
                                        if (game.players.length < 5 || player.hp <= 2) return 5;
                                        if (player.hp <= 1 || player.countCards('he') <= 1) return 10;
                                        return 0;
                                    },
                                },
                            },
                            intro: {
                                content: 'limited',
                            },
                        },
                        jz_袭敌: {
                            forced: true,
                            group: ['jz_袭敌1', 'jz_袭敌2'],
                            ai: {
                                combo: 'jz_暗香',
                                mingzhi: false,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'respondShan') || get.tag(card, 'respondSha')) {
                                            if (get.attitude(target, player) <= 0) {
                                                if (current > 0) return;
                                                if (target.countCards('h') == 0) return 1.6;
                                                if (target.countCards('h') == 1) return 1.2;
                                                if (target.countCards('h') == 2) return [0.8, 0.2, 0, -0.2];
                                                return [0.4, 0.7, 0, -0.7];
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        jz_袭敌1: {
                            audio: ['chongzhen', 2],
                            trigger: {
                                player: 'shaBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.skill != 'jz_暗香_sha' && event.skill != 'jz_暗香_sha') return false;
                                return event.target.countCards('h') > 0;
                            },
                            logTarget: 'target',
                            content() {
                                var card = trigger.target.getCards('h').randomGet();
                                player.gain(card, trigger.target);
                                trigger.target.$giveAuto(card, player);
                            },
                        },
                        jz_袭敌2: {
                            audio: ['chongzhen', 2],
                            trigger: {
                                player: 'respond',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.skill != 'jz_暗香_shan' && event.skill != 'jz_暗香_sha') return false;
                                return event.source && event.source.countCards('h') > 0;
                            },
                            logTarget: 'source',
                            content() {
                                var card = trigger.source.getCards('h').randomGet();
                                player.gain(card, trigger.source);
                                trigger.source.$giveAuto(card, player);
                            },
                        },
                        jz_龙胆: {
                            audio: ['jz_暗香', 2],
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                return event.skill == 'jz_暗香_sha' || event.skill == 'jz_暗香_shan' || event.skill == 'jz_暗香_wuxie' || event.skill == 'jz_暗香_tao';
                            },
                            content() {
                                player.draw();
                            },
                        },
                        jz_武魂: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            alter: true,
                            filter(event, player) {
                                if (event.source == undefined) return false;
                                if (!get.is.altered('jz_武魂')) return false;
                                return true;
                            },
                            forced: true,
                            content() {
                                if (!trigger.source.storage.jz_武魂_mark) {
                                    trigger.source.storage.jz_武魂_mark = 0;
                                }
                                trigger.source.storage.jz_武魂_mark += trigger.num;
                                trigger.source.markSkill('jz_武魂_mark');
                            },
                            global: ['jz_武魂_mark'],
                            subSkill: {
                                mark: {
                                    marktext: '魇',
                                    intro: {
                                        content: 'mark',
                                    },
                                },
                            },
                            group: ['jz_武魂2'],
                        },
                        jz_武魂2: {
                            trigger: {
                                player: ['changehp', 'damageBegin'],
                            },
                            forced: true,
                            popup: false,
                            content() {
                                'step 0';
                                game.countPlayer(function (current) {
                                    if (current != player) {
                                        player.line(current, 'green');
                                        current.addSkill('jz_武魂3');
                                        current.addSkill('jz_武魂4');
                                    }
                                });
                            },
                            ai: {
                                threaten: 0.5,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkill('jueqing')) return [1, -5];
                                            var hasfriend = false;
                                            for (var i = 0; i < game.players.length; i++) {
                                                if (game.players[i] != target && get.attitude(game.players[i], target) >= 0) {
                                                    hasfriend = true;
                                                    break;
                                                }
                                            }
                                            if (!hasfriend) return;
                                            if (player.hp > 2 && get.attitude(player, target) <= 0) return [0, 2];
                                            return [1, 0, 0, -player.hp];
                                        }
                                    },
                                },
                            },
                        },
                        jz_武魂3: {
                            audio: ['wuhun3', 3],
                            trigger: {
                                global: 'dying',
                            },
                            forced: true,
                            filter(event, player) {
                                if (!player.storage.jz_武魂_mark) return false;
                                for (var i = 0; i < game.players.length; i++) {
                                    if (game.players[i].storage.jz_武魂_mark > player.storage.jz_武魂_mark) return false;
                                }
                                return event.player.name == 'shen_guanyu';
                            },
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    if (card.suit !== 'heart') return -2;
                                    return 2;
                                });
                                ('step 1');
                                if (result.judge == -2) {
                                    if (player.hp < Infinity && player.hp > 0) {
                                        player.hp = 0;
                                    }
                                    if (player.hp == Infinity) {
                                        const next = game.createEvent('diex', false);
                                        next.source = player;
                                        next.player = player;
                                        next._triggered = null;
                                        next.restMap = { type: null, count: null, audio: null };
                                        next.excludeMark = [];
                                        next.setContent('die');
                                    }
                                    player.dying(event);
                                }
                                if (result.judge == 2) {
                                    player.recover();
                                    delete player.storage.jz_武魂_mark;
                                    player.removeSkill('jz_武魂3');
                                }
                                player.removeSkill('jz_武魂3');
                            },
                        },
                        jz_隐忍: {
                            audio: ['xingshang', 2],
                            trigger: {
                                player: 'phaseBegin',
                            },
                            _priority: 5,
                            content() {
                                'step 0';
                                player.draw(1);
                            },
                        },
                        jz_武魂4: {
                            audio: ['wuhun3', 3],
                            trigger: {
                                global: 'dying',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.player == player) return false;
                                if (!player.storage.jz_武魂_mark) return false;
                                return true;
                            },
                            content() {
                                player.storage.jz_武魂_mark--;
                            },
                        },
                        jz_计取: {
                            audio: ['gongxin', 2],
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('h');
                            },
                            content() {
                                'step 0';
                                event.videoId = lib.status.videoId++;
                                var cards = target.getCards('h');
                                if (player.isOnline2()) {
                                    player.send(
                                        function (cards, id) {
                                            ui.create.dialog('计取', cards).videoId = id;
                                        },
                                        cards,
                                        event.videoId
                                    );
                                }
                                event.dialog = ui.create.dialog('计取', cards);
                                event.dialog.videoId = event.videoId;
                                if (!event.isMine()) {
                                    event.dialog.style.display = 'none';
                                }
                                player.chooseButton();
                                ('step 1');
                                if (result.bool) {
                                    event.card = result.links[0];
                                    var func = function (card, id) {
                                        var dialog = get.idDialog(id);
                                        if (dialog) {
                                            for (var i = 0; i < dialog.buttons.length; i++) {
                                                if (dialog.buttons[i].link == card) {
                                                    dialog.buttons[i].classList.add('selectedx');
                                                } else {
                                                    dialog.buttons[i].classList.add('unselectable');
                                                }
                                            }
                                        }
                                    };
                                    if (player.isOnline2()) {
                                        player.send(func, event.card, event.videoId);
                                    } else if (event.isMine()) {
                                        func(event.card, event.videoId);
                                    }
                                    player.chooseControl('弃置这张牌', '获得这张牌');
                                } else {
                                    if (player.isOnline2()) {
                                        player.send('closeDialog', event.videoId);
                                    }
                                    event.dialog.close();
                                    event.finish();
                                }
                                ('step 2');
                                if (player.isOnline2()) {
                                    player.send('closeDialog', event.videoId);
                                }
                                event.dialog.close();
                                var card = event.card;
                                if (result.control == '获得这张牌') {
                                    player.gain(card, target);
                                    target.$giveAuto(card, player);
                                } else {
                                    target.discard(card);
                                    event.finish();
                                }
                            },
                            ai: {
                                threaten: 1.5,
                                result: {
                                    target(player, target) {
                                        return -target.countCards('h');
                                    },
                                },
                                order: 10,
                                expose: 0.4,
                            },
                        },
                        jz_驭马: {
                            audio: 'ext:军争加强/audio:2',
                            group: ['jz_驭马2', 'jz_驭马3'],
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.getEquip(3);
                            },
                            content() {
                                player.draw();
                            },
                        },
                        jz_驭马2: {
                            audio: 'ext:军争加强/audio:2',
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.getEquip(4);
                            },
                            content() {
                                trigger.num++;
                            },
                        },
                        jz_驭马3: {
                            audio: 'ext:军争加强/audio:2',
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.getEquip(3) && player.getEquip(4);
                            },
                            content() {
                                player.draw();
                            },
                            mod: {
                                globalFrom(from, to, current) {
                                    if (from.getEquip(3) && from.getEquip(4)) return current - 1;
                                },
                                globalTo(from, to, current) {
                                    if (from.getEquip(3) && from.getEquip(4)) return current + 1;
                                },
                            },
                        },
                        jz_据守: {
                            group: 'jushou',
                            audio: 'yanzheng',
                            trigger: {
                                target: 'useCardToBefore',
                            },
                            check(event, player) {
                                return get.effect(event.target, event.card, event.player, player) < 0;
                            },
                            forced: true,
                            filter(event, player) {
                                if (!event.target) return false; //不是目标取消发动
                                if (event.player == player && event.target == player) return false; //不能自己对自己用
                                return event.card && event.card.name == 'guohe' && player.classList.contains('turnedover');
                            },
                            _priority: 100,
                            content() {
                                trigger.untrigger();
                                trigger.finish();
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (card.name == 'guohe' && player.classList.contains('turnedover')) return 'zeroplayertarget';
                                    },
                                },
                            },
                            mod: {
                                globalTo(from, to, current) {
                                    if (to.classList.contains('turnedover')) return current + 1;
                                },
                            },
                        },
                        jz_解围: {
                            trigger: {
                                player: 'turnOverEnd',
                            },
                            forced: true,
                            audio: 'jiewei',
                            filter(event, player) {
                                return !player.isTurnedOver() && player.canMoveCard();
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseToDiscard('he', get.prompt('jz_解围'), '弃置一张牌并移动场上的一张牌', lib.filter.cardDiscardable)
                                    .set('ai', function (card) {
                                        if (!_status.event.check) return 0;
                                        return 7 - get.value(card);
                                    })
                                    .set('check', player.canMoveCard(true))
                                    ('step 1');
                                if (result.bool) {
                                    player.moveCard(true);
                                } else {
                                    event.finish();
                                }
                            },
                        },
                        jz_魂姿: {
                            audio: 'hunzi',
                            derivation: ['reyingzi', 'yinghun'],
                            trigger: {
                                player: 'phaseBeginStart',
                            },
                            filter(event, player) {
                                return player.hp <= 1 && !player.storage.hunzi;
                            },
                            forced: true,
                            _priority: 3,
                            content() {
                                player.loseMaxHp();
                                player.addSkill('reyingzi');
                                player.addSkill('yinghun');
                                player.addSkill('yingyang');
                                player.removeSkill('jili');
                                player.awakenSkill('jz_魂姿');
                                player.storage.hunzi = true;
                            },
                            ai: {
                                threaten(player, target) {
                                    if (target.hp == 1) return 2;
                                    return 0.5;
                                },
                                maixie: true,
                                effect: {
                                    target(card, player, target) {
                                        if (!target.hasFriend()) return;
                                        if (get.tag(card, 'damage') == 1 && target.hp == 2 && !target.isTurnedOver() && _status.currentPhase != target && get.distance(_status.currentPhase, target, 'absolute') <= 3) return [0.5, 1];
                                    },
                                },
                            },
                        },
                        jz_安恤: {
                            enable: 'phaseUse',
                            usable: 1,
                            multitarget: true,
                            audio: 'anxu',
                            filterTarget(card, player, target) {
                                if (player == target) return false;
                                var num = target.countCards('h');
                                if (ui.selected.targets.length) {
                                    return num < ui.selected.targets[0].countCards('h');
                                }
                                var players = game.filterPlayer();
                                for (var i = 0; i < players.length; i++) {
                                    if (num > players[i].countCards('h')) return true;
                                }
                                return false;
                            },
                            selectTarget: 2,
                            content() {
                                'step 0';
                                var gainner, giver;
                                if (targets[0].countCards('h') < targets[1].countCards('h')) {
                                    gainner = targets[0];
                                    giver = targets[1];
                                } else {
                                    gainner = targets[1];
                                    giver = targets[0];
                                }
                                giver.chooseCard('选择一张手牌交给' + get.translation(gainner), true);
                                event.gainner = gainner;
                                event.giver = giver;
                                ('step 1');
                                var card = result.cards[0];
                                event.gainner.gain(card, event.giver);
                                event.giver.$give(1, event.gainner);
                                ('Step 2');
                                if (player.countCards('h') == event.gainner.countCards('h') && player.hp < player.maxHp && player.countCards('h') > 0) {
                                    player.chooseToDiscard(1).set('ai', function (card) {
                                        if ((player.hp = player.maxHp)) return -10;
                                        if (card.name == 'tao') return -10;
                                        if (card.name == 'jiu' && player.hp == 1) return -10;
                                        return get.unuseful(card) + 2.5 * (5 - get.owner(card).hp);
                                    });
                                    if (result.bool == true) {
                                        player.recover();
                                    }
                                }
                                ('Step 3');
                                if (event.gainner.countCards('h') == event.giver.countCards('h')) {
                                    player.chooseDrawRecover(true);
                                }
                                if (event.gainner.countCards('h') < event.giver.countCards('h')) {
                                    player.draw();
                                }
                            },
                            ai: {
                                order: 10.5,
                                threaten: 3,
                                result: {
                                    target(player, target) {
                                        var num = target.countCards('h');
                                        var num3 = player.countCards('h');
                                        var att = get.attitude(player, target);
                                        if (ui.selected.targets.length == 0) {
                                            if (att > 0) return -1;
                                            var players = game.filterPlayer();
                                            for (var i = 0; i < players.length; i++) {
                                                var num2 = players[i].countCards('h');
                                                var att2 = get.attitude(player, players[i]);
                                                if (att2 >= 0 && num2 < num) return -1;
                                                if (att > 0 && att2 < 0 && num < num2) return 5;
                                                if (att < 0 && att2 > 0 && num > num2) return 5;
                                                if (att < 0 && att2 > 0 && num > num3 && player.hp < player.maxHp) return 10;
                                                if ((player.hp < 3 || player.countCards('h') <= 2) && att < 0 && att2 > 0 && num > num2) return 10;
                                            }
                                            return 0;
                                        } else {
                                            return 1;
                                        }
                                    },
                                    player: 0.1,
                                },
                            },
                        },
                        jz_先辅: {
                            audio: 'ext:军争加强/audio:6',
                            trigger: {
                                global: 'gameStart',
                                player: 'enterGame',
                            },
                            forced: true,
                            filter(event, player) {
                                return game.players.length > 1;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('选择【先辅】的目标', lib.translate.jz_先辅_info, true, function (card, player, target) {
                                        return target != player && !target.hasSkill('xianfu2') && !target.hasSkill('jz_先辅2');
                                    })
                                    .set('ai', function (target) {
                                        var att = get.attitude(_status.event.player, target);
                                        if (att > 0) return att + 1;
                                        if (att == 0) return Math.random();
                                        return att;
                                    });
                                ('step 1');
                                if (result && result.targets && result.targets[0]) {
                                    //QQQ
                                    var target = result.targets[0];
                                    game.countPlayer(function (current) {
                                        if (current != player) {
                                            player.line(current, 'green');
                                            player.line(current, 'green');
                                            target.storage.jz_先辅2 = player;
                                            target.addSkill('jz_先辅2');
                                        }
                                    });
                                    game.log(player, '发动了', '【先辅】');
                                }
                            },
                        },
                        jz_先辅2: {
                            trigger: {
                                player: ['damageAfter', 'recoverAfter'],
                            },
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                return player.storage.jz_先辅2 && player.storage.jz_先辅2.isIn() && event.num > 0;
                            },
                            content() {
                                'step 0';
                                player.addSkill('jz_先辅4');
                                ('step 1');
                                var target = player.storage.jz_先辅2;
                                player.line(target, 'green');
                                target[trigger.name](trigger.num, trigger.source || 'nosource');
                            },
                            group: 'jz_先辅3',
                        },
                        jz_先辅3: {
                            trigger: {
                                global: 'dieAfter',
                            },
                            silent: true,
                            filter(event, player) {
                                return event.player == player.storage.jz_先辅2;
                            },
                            content() {
                                player.removeSkill('jz_先辅4');
                                player.removeSkill('jz_先辅2');
                                player.addSkill('jz_筹策2');
                            },
                            forced: true,
                            popup: false,
                        },
                        jz_先辅4: {
                            mark: true,
                            marktext: '辅',
                            intro: {
                                content: '当你受到伤害后,对你使用【先辅】的角色受到等量的伤害,当你回复体力后,对你使用【先辅】的角色回复等量的体力,当对你使用【先辅】的角色死亡时,你获得技能【筹策】',
                            },
                            nopop: true,
                        },
                        jz_筹策: {
                            audio: 'ext:军争加强/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            content() {
                                'step 0';
                                player.judge();
                                ('step 1');
                                event.color = result.color;
                                if (event.color == 'black') {
                                    player
                                        .chooseTarget('弃置一名角色区域内的一张牌', true, function (card, player, target) {
                                            return target.countCards('hej');
                                        })
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            var att = get.attitude(player, target);
                                            if (att < 0) {
                                                att = -Math.sqrt(-att);
                                            } else {
                                                att = Math.sqrt(att);
                                            }
                                            return att * lib.card.guohe.ai.result.target(player, target);
                                        });
                                } else {
                                    player.update();
                                }
                                ('step 3');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.line(target, 'green');
                                    if (event.color == 'black') {
                                        player.discardPlayerCard(target, 'hej', true);
                                    }
                                }
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                            if (!target.hasFriend()) return;
                                            if (target.hp >= 4) return [1, get.tag(card, 'damage') * 1.5];
                                            if (target.hp == 3) return [1, get.tag(card, 'damage') * 1];
                                            if (target.hp == 2) return [1, get.tag(card, 'damage') * 0.5];
                                        }
                                    },
                                },
                            },
                        },
                        jz_筹策2: {
                            audio: 'ext:军争加强/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            content() {
                                'step 0';
                                event.num = Math.min(trigger.num, 9);
                                ('step 1');
                                player.judge();
                                ('step 2');
                                event.color = result.color;
                                if (event.color == 'black') {
                                    player
                                        .chooseTarget('弃置一名角色区域内的一张牌', true, function (card, player, target) {
                                            return target.countCards('hej');
                                        })
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            var att = get.attitude(player, target);
                                            if (att < 0) {
                                                att = -Math.sqrt(-att);
                                            } else {
                                                att = Math.sqrt(att);
                                            }
                                            return att * lib.card.guohe.ai.result.target(player, target);
                                        });
                                } else {
                                    var next = player.chooseTarget('令一名角色摸一张牌', true);
                                    var xianfu = game.findPlayer(function (current) {
                                        return current.hasSkill('jz_先辅2') && current.storage.jz_先辅2 == player;
                                    });
                                    if (xianfu) {
                                        next.set('prompt2', '(若目标为' + get.translation(xianfu) + '则改为摸两张牌)');
                                    }
                                    next.set('ai', function (target) {
                                        var player = _status.event.player;
                                        var att = get.attitude(player, target) / Math.sqrt(1 + target.countCards('h'));
                                        if (target.storage.jz_先辅2 == player) return att * 2;
                                        return att;
                                    });
                                }
                                ('step 3');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.line(target, 'green');
                                    if (event.color == 'black') {
                                        player.discardPlayerCard(target, 'hej', true);
                                    } else {
                                        if (target.hasSkill('jz_先辅2') && target.storage.jz_先辅2 == player) {
                                            target.draw(2);
                                        } else {
                                            target.draw();
                                        }
                                    }
                                }
                                ('step 4');
                                if (--event.num > 0) {
                                    player.chooseBool('是否再次发动【筹策】？');
                                } else {
                                    event.finish();
                                }
                                ('step 5');
                                if (result.bool) {
                                    event.goto(1);
                                }
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                            if (!target.hasFriend()) return;
                                            if (target.hp >= 4) return [1, get.tag(card, 'damage') * 1.5];
                                            if (target.hp == 3) return [1, get.tag(card, 'damage') * 1];
                                            if (target.hp == 2) return [1, get.tag(card, 'damage') * 0.5];
                                        }
                                    },
                                },
                            },
                        },
                        jz_戏子天妒: {
                            audio: 'ext:军争加强/audio:2',
                            trigger: {
                                global: 'judgeEnd',
                            },
                            frequent(event) {
                                if (event.result.card.name == 'du') return false;
                                if (get.mode() == 'guozhan') return false;
                                return true;
                            },
                            check(event) {
                                if (event.result.card.name == 'du') return false;
                                return true;
                            },
                            filter(event, player) {
                                if (get.owner(event.result.card)) {
                                    return false;
                                }
                                if ((event.player.name == 'jz_邓士载' || event.player.name == 'dengai') && event.player != _status.currentPhase) return false;
                                return true;
                            },
                            content() {
                                player.gain(trigger.result.card);
                                player.$gain2(trigger.result.card);
                            },
                        },
                        jz_死战: {
                            audio: 'qiangxi',
                            group: ['jz_死战2', 'jz_死战3'],
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            mark: true,
                            marktext: '战',
                            popup: false,
                            init(player) {
                                player.storage.jz_死战 = 0;
                                player.markSkill('jz_死战');
                            },
                            content() {
                                'Step 0';
                                if (player.storage.jz_死战 > 0) {
                                    player.loseHp(player.storage.jz_死战)._triggered = null;
                                }
                                ('Step 1');
                                player.storage.jz_死战 = 0;
                                player.markSkill('jz_死战');
                            },
                            intro: {
                                content(storage) {
                                    return '拥有' + storage + '个<死战>标记,造成伤害增加' + storage + '点(最多以此法增加三点伤害)';
                                },
                            },
                        },
                        jz_死战2: {
                            audio: 'qiangxi',
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            nobracket: true,
                            popup: false,
                            filter(event, player) {
                                return player.storage.jz_死战 && player.storage.jz_死战 > 0;
                            },
                            content() {
                                if (player.storage.jz_死战 <= 3) {
                                    trigger.num += player.storage.jz_死战;
                                }
                                if (player.storage.jz_死战 > 3) {
                                    trigger.num += 3;
                                }
                            },
                        },
                        jz_死战3: {
                            audio: 'qiangxi',
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (_status.currentPhase == player) return false;
                                return event.num > 0;
                            },
                            content() {
                                'Step 0';
                                player.storage.jz_死战 += trigger.num;
                                ('Step 1');
                                trigger.cancel();
                            },
                        },
                        jz_强袭: {
                            audio: 'qiangxi',
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard(card) {
                                return get.subtype(card) == 'equip1';
                            },
                            selectCard: 1,
                            filterTarget(card, player, target) {
                                if (player == target) return false;
                                return get.distance(player, target, 'attack') <= 1;
                            },
                            content() {
                                player.loseHp();
                                target.damage();
                            },
                            check(card) {
                                return 10 - get.value(card);
                            },
                            position: 'he',
                            ai: {
                                damage: true,
                                order: 8,
                                result: {
                                    player(player, target) {
                                        if (player.getEquip(1) && player.storage.jz_死战 > 0) return 0;
                                        if (player.hp >= target.hp && player.storage.jz_死战 > 0) return -0.9;
                                        if (player.hp <= 2) return -10;
                                        return -2;
                                    },
                                    target(player, target) {
                                        if (player.getEquip(1)) {
                                            if (target.hp < 2) return 0;
                                            if (target.hp >= 2 && player.storage.jz_死战 > 0) return 3;
                                            if (target.hp > player.hp && player.storage.jz_死战 > 0) return 5;
                                        }
                                        return get.damageEffect(target, player);
                                    },
                                },
                            },
                            threaten: 1.3,
                        },
                        jz_黄道: {
                            audio: 'ext:军争加强/audio:1',
                            trigger: {
                                global: 'phaseJudgeBegin',
                            },
                            check(event, player) {
                                if (get.attitude(player, event.player) <= 0) return event.player.countCards('j') == 0;
                                if (get.attitude(player, event.player) > 0) return event.player.countCards('j') > 0;
                            },
                            filter(event, player) {
                                return event.player != player && (event.player.hp < player.hp || player.hp <= 1);
                            },
                            content() {
                                'Step 0';
                                trigger.player.discard(trigger.player.getCards('j'));
                                ('Step 1');
                                var card = game.createCard('shandian');
                                trigger.player.addJudge(card);
                            },
                            group: ['jz_黄道3', 'jz_黄道2'],
                        },
                        jz_鬼兵: {
                            audio: 'ext:军争加强/audio:2',
                            enable: 'phaseUse',
                            usable: 3,
                            filterCard(card) {
                                return card.suit == 'spade' && card.number > 1 && card.number < 10;
                            },
                            selectCard: 1,
                            filterTarget(card, player, target) {
                                if (player == target) return false;
                                return true;
                            },
                            content() {
                                target.damage('thunder');
                            },
                            check(card) {
                                return 10 - get.value(card);
                            },
                            position: 'h',
                            ai: {
                                damage: true,
                                order: 8,
                                result: {
                                    target(player, target) {
                                        if (target.hasSkillTag('tianxiang')) return 0;
                                        var eff = get.damageEffect(target, player, target, 'thunder');
                                        if (get.attitude(player, target) < 0 && target.hp < 2) return eff + 10;
                                        return eff;
                                    },
                                },
                            },
                            threaten: 1.3,
                        },
                        jz_黄道2: {
                            audio: 'jz_黄道',
                            trigger: {
                                global: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.nature == 'thunder' && player.hp < player.maxHp;
                            },
                            content() {
                                'Step 0';
                                if (player.hp <= 1 && trigger.player == player) {
                                    trigger.cancel();
                                }
                                ('Step 1');
                                if (trigger.player != player) player.recover();
                            },
                        },
                        jz_黄道3: {
                            audio: 'jz_黄道',
                            trigger: {
                                global: 'judgeEnd',
                            },
                            _priority: 20,
                            check(event) {
                                if (event.result.card.name == 'du') return false;
                                return true;
                            },
                            filter(event, player) {
                                if (get.owner(event.result.card)) {
                                    return false;
                                }
                                return true;
                            },
                            content() {
                                player.gain(trigger.result.card);
                                player.$gain2(trigger.result.card);
                            },
                        },
                        jz_无尽: {
                            group: 'jz_无尽2',
                            audio: 'ext:军争加强/audio:2',
                            trigger: {
                                player: 'loseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.countCards('h')) return false;
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if (i.original == 'h') return true;
                                    }
                                return false;
                            },
                            content() {
                                player.draw(game.players.length);
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
                        jz_无尽2: {
                            audio: 'longdan',
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            content() {
                                game.countPlayer(function (current) {
                                    if (!current.storage.jz_无尽) {
                                        player.line(current, 'green');
                                        current.storage.jz_无尽 = [];
                                        current.addSkill('jz_无尽3');
                                    }
                                });
                            },
                        },
                        jz_龙神: {
                            group: 'jz_龙神2',
                            audio: 'longhun',
                            trigger: {
                                player: 'dieBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                for (var i = 0; i < game.players.length; i++) {
                                    if (game.players[i].storage.jz_无尽) return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                trigger.cancel();
                                player
                                    .chooseTarget(true, get.prompt('jz_龙神'), function (card, player, target) {
                                        if (!target.storage.jz_无尽) return false;
                                        for (var i = 0; i < game.players.length; i++) {
                                            if (game.players[i].storage.jz_无尽 > target.storage.jz_无尽) {
                                                return false;
                                            }
                                        }
                                        return true;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                player.line(result.targets[0], 'fire');
                                delete result.targets[0].storage.jz_无尽;
                                result.targets[0].removeSkill('jz_无尽3');
                                ('Step 2');
                                player.gainMaxHp()._triggered = null;
                                ('Step 3');
                                player.recover(player.maxHp - player.hp + 1)._triggered = null;
                                player.draw(game.players.length)._triggered = null;
                            },
                        },
                        jz_龙神2: {
                            audio: 'longdan',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filter(event, player) {
                                for (var i = 0; i < game.players.length; i++) {
                                    if (game.players[i].storage.jz_无尽) return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('jz_龙神2'), function (card, player, target) {
                                        return lib.filter.targetEnabled({ name: 'sha' }, player, target) && target != player && target.storage.jz_无尽;
                                    })
                                    .set('ai', function (target) {
                                        if (target.getEquip(2) && target.getEquip(2).name == 'tengjia') return 0;
                                        return get.effect(target, { name: 'sha' }, _status.event.player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.useCard({ name: 'sha' }, result.targets, false);
                                }
                            },
                            ai: {
                                threaten(player, target) {
                                    return 1.6;
                                },
                            },
                        },
                        jz_无尽3: {
                            mark: true,
                            marktext: '龙',
                            intro: {
                                content: '当你拥有<龙>标记时绝境之龙在回合开始阶段对你使用一张无距离限制的【杀】',
                            },
                            nopop: true,
                        },
                        jz_屯田3: {
                            audio: 'jixi',
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            content() {
                                trigger.num++;
                            },
                            ai: {
                                threaten: 1.3,
                            },
                        },
                        jz_启发: {
                            trigger: {
                                global: 'dieAfter',
                            },
                            check(event, player) {
                                if (player.hp <= 1) return 0;
                                return get.attitude(player, event.player) > 3;
                            },
                            filter(event, player) {
                                return player != event.player && !player.storage.jz_启发;
                            },
                            content() {
                                'Step 0';
                                player.loseHp();
                                player.storage.jz_启发 = true;
                                ('Step 1');
                                trigger.player.revive(trigger.player.maxHp);
                                trigger.player.clearSkills();
                                player.awakenSkill('jz_启发');
                            },
                        },
                        jz_天妒2: {
                            audio: ['tiandu', 2],
                            trigger: {
                                player: 'loseHpEnd',
                            },
                            forced: true,
                            content() {
                                player.draw();
                                player.discard(player.getCards('j'));
                            },
                            popup: false,
                        },
                        jz_献策: {
                            audio: 'yiji',
                            trigger: {
                                global: 'loseEnd',
                            },
                            filter(event, player) {
                                if (event.player.countCards('h')) return false;
                                if (event.player == player) return false;
                                if (event.player != _status.currentPhase) return false;
                                return true;
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) < 0;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('jz_献策'), (card, player, target) => target != trigger.player)
                                    .set('ai', function (target) {
                                        //QQQ
                                        if (get.attitude(player, target) > 3) return 5;
                                        if (player == target) return 3;
                                        return get.effect(trigger.player, { name: 'sha' }, _status.event.player) && !(trigger.player.getEquip(2) && event.player.getEquip(2).name == 'tengjia') && get.attitude(player, trigger.player) < 0;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].draw();
                                    result.targets[0].useCard({ name: 'sha' }, trigger.player, false);
                                }
                            },
                            ai: {
                                threaten(player, target) {
                                    return 1.6;
                                },
                            },
                        },
                        jz_天义: {
                            audio: 'tianyi',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target && target.countCards('h') > 0;
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseToCompare(target);
                                ('step 1');
                                if (result.bool) {
                                    player.addTempSkill('jz_奋勇');
                                } else {
                                    player.addTempSkill('jz_少骑', { player: 'phaseBegin' });
                                }
                            },
                            ai: {
                                order(name, player) {
                                    var cards = player.getCards('h');
                                    if (player.countCards('h', 'sha') == 0) {
                                        return 1;
                                    }
                                    for (var i = 0; i < cards.length; i++) {
                                        if (cards[i].name != 'sha' && cards[i].number > 11 && get.value(cards[i]) < 7) {
                                            return 9;
                                        }
                                    }
                                    return get.order({ name: 'sha' }) - 1;
                                },
                                result: {
                                    player(player) {
                                        if (player.countCards('h', 'sha') > 0) return 0.6;
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
                                        return -0.5;
                                    },
                                },
                                threaten: 1.3,
                            },
                        },
                        jz_奋勇: {
                            group: 'qinggang_skill',
                            mod: {
                                targetInRange(card, player, target, now) {
                                    if (card.name == 'sha') return true;
                                },
                                selectTarget(card, player, range) {
                                    if (card.name == 'sha' && Array.isArray(range) && range[1] != -1) range[1]++; //QQQ
                                },
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + 1;
                                },
                            },
                        },
                        jz_少骑: {
                            mod: {
                                globalTo(from, to, current) {
                                    if (to.getEquip(3)) {
                                        return current + 1;
                                    }
                                },
                                globalFrom(from, to, distance) {
                                    if (from.getEquip(4)) {
                                        return distance - 1;
                                    }
                                },
                            },
                        },
                        jz_从志: {
                            audio: 'tianyi',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.isMinHp() && !player.storage.jz_从志;
                            },
                            content() {
                                'step 0';
                                player.loseMaxHp();
                                player.addSkill('jz_鹰扬');
                                ('Step 1');
                                player.storage.jz_从志 = true;
                                player.awakenSkill('jz_从志');
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        jz_修行: {
                            audio: 'ext:军争加强/audio:2',
                            trigger: {
                                player: 'phaseDiscardBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.parent.name == 'phaseDiscard' && player.countCards('h', { suit: 'heart' });
                            },
                            content() { },
                            mod: {
                                ignoredHandcard(card, player) {
                                    if (card.suit == 'heart') {
                                        return true;
                                    }
                                },
                                cardDiscardable(card, player, name) {
                                    if (name == 'phaseDiscard' && card.suit == 'heart') return false;
                                },
                            },
                        },
                        jz_避世: {
                            audio: 'qirang',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            _priority: -10,
                            filter(event, player) {
                                return player.countCards('he', { type: 'equip' }) >= 2 && player != game.zhu;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseToDiscard(get.prompt('jz_避世'), 2, 'he', function (card) {
                                        return get.type(card) == 'equip';
                                    })
                                    .set('ai', function (card) {
                                        return 7 - get.value(card);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.out();
                                } else {
                                    event.finish();
                                }
                            },
                            ai: {
                                result: {
                                    player(player) {
                                        if (player.hp < 2 && player.countCards('h', { suit: 'heart' }) < 3) return 10;
                                        return 0;
                                    },
                                },
                                threaten: 1.5,
                            },
                        },
                        jz_羽化: {
                            audio: 'yuhua',
                            enable: 'chooseToUse',
                            mark: true,
                            init(player) {
                                player.storage.jz_羽化 = false;
                            },
                            filter(event, player) {
                                if (player.storage.jz_羽化) return false;
                                if (player.countCards('h', { suit: 'heart' }) < 3) return false;
                                if (event.type == 'dying') {
                                    if (player != event.dying) return false;
                                    return true;
                                } else if (event.parent.name == 'phaseUse') {
                                    return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseToDiscard(get.prompt('jz_羽化'), 3, 'he', function (card) {
                                        return card.suit == 'heart';
                                    })
                                    .set('ai', function (card) {
                                        if (card.name == 'tao') return 0;
                                        return 7 - get.value(card);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.hp = player.maxhp;
                                    player.awakenSkill('jz_羽化');
                                    player.storage.jz_羽化 = true;
                                } else {
                                    event.finish();
                                }
                                ('step 1');
                                player.link(false);
                                ('step 2');
                                player.turnOver(false);
                                ('Step 3');
                                player.init('jz_神诸葛果');
                                player.update();
                            },
                            ai: {
                                order: 0.5,
                                skillTagFilter(player) {
                                    if (player.storage.jz_羽化) return false;
                                    if (player.hp > 0) return false;
                                },
                                save: true,
                                result: {
                                    player(player) {
                                        if (player.hp == 0) return 10;
                                        if (player.hp <= 1 && player.countCards('h', { suit: 'heart' }) >= 3) return 10;
                                        return 0;
                                    },
                                },
                                threaten(player, target) {
                                    if (!target.storage.jz_羽化) return 0.6;
                                },
                            },
                        },
                        jz_得道: {
                            audio: 'yuhua',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                'Step 0';
                                if (player.countCards('h', { suit: 'heart' }) == 0) {
                                    player.draw();
                                    player.addTempSkill('jz_得道2');
                                    event.finish();
                                }
                                ('Step 1');
                                if (player.countCards('h', { suit: 'heart' }) > 0) {
                                    var jian = player.getCards('j');
                                    player.discard(jian);
                                }
                            },
                        },
                        jz_shen_羽化: {
                            audio: 'ext:军争加强/audio:2',
                            trigger: {
                                player: 'damageBegin',
                            },
                            filter(event, player) {
                                return event.num && event.source && event.source != undefined && event.num > 0;
                            },
                            check(event, player) {
                                return get.attitude(player, event.source) <= 0;
                            },
                            logTarget: 'source',
                            content() {
                                'step 0';
                                player
                                    .judge(function (card) {
                                        if (get.color(card) == 'red') return _status.event.eff;
                                        return 0;
                                    })
                                    .set('eff', get.damageEffect(trigger.source, player, player));
                                ('step 1');
                                if (result.color == 'red') {
                                    if (trigger.source.countCards('he')) {
                                        player.discardPlayerCard(trigger.source, 'he', true);
                                    }
                                } else if (result.color == 'black') {
                                    player.draw(trigger.num);
                                }
                            },
                            ai: {
                                maixie_defend: true,
                                expose: 0.4,
                            },
                        },
                        jz_神迹: {
                            audio: 'qirang',
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            forced: true,
                            filter(card) {
                                return card.suit == 'heart';
                            },
                            content() {
                                player.draw();
                            },
                        },
                        jz_得道2: {
                            mod: {
                                suit(card, suit) {
                                    if (suit == 'spade') return 'heart';
                                },
                            },
                        },
                        英姿: {
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            content() {
                                trigger.num++;
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return num++;
                                },
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + 1;
                                },
                            },
                            ai: {
                                threaten: 1.3,
                            },
                        },
                        jz_封印3: {
                            trigger: {
                                global: 'useCardEnd',
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) < 0;
                            },
                            filter(event, player) {
                                return event.player != player && Math.random() <= 0.05;
                            },
                            content() {
                                'Step 0';
                                if (trigger.player.addTempSkill != player.addTempSkill) {
                                    trigger.player.addTempSkill = player.addTempSkill;
                                }
                                ('Step 1');
                                player.line(trigger.player, 'green');
                                trigger.player.addTempSkill('jz_封印1');
                                trigger.player.addTempSkill('jz_封印4');
                                trigger.player.loseHp();
                            },
                        },
                        jz_封印1: {
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
                        jz_封印2: {
                            trigger: {
                                global: 'useCardEnd',
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) < 0;
                            },
                            filter(event, player) {
                                return event.player != player && Math.random() <= 0.4;
                            },
                            content() {
                                'Step 0';
                                if (trigger.player.addTempSkill != player.addTempSkill) {
                                    trigger.player.addTempSkill = player.addTempSkill;
                                }
                                ('Step 1');
                                player.line(trigger.player, 'green');
                                trigger.player.addTempSkill('jz_封印1');
                                trigger.player.addTempSkill('jz_封印4');
                                trigger.player.loseHp();
                            },
                        },
                        jz_封印4: {
                            trigger: {
                                player: 'recoverBegin',
                            },
                            forced: true,
                            mark: true,
                            content() {
                                trigger.cancel();
                            },
                            intro: {
                                content: '武将牌上的技能无效,不能回复体力,直至此回合结束',
                            },
                        },
                        jz_封魔: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('he') >= 0;
                            },
                            check(event, player) {
                                if (player.countCards('he') > 0) return 1;
                            },
                            content() {
                                'step 0';
                                player.chooseToDiscard(2).set('ai', function (card) {
                                    return 7 - get.value(card);
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.addTempSkill('jz_封印2', { player: 'phaseBegin' });
                                } else {
                                    player.addTempSkill('jz_封印3', { player: 'phaseBegin' });
                                }
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        jz_换天: {
                            forced: true,
                            trigger: {
                                player: ['dying', 'dieBegin'],
                            },
                            init(player) {
                                player.storage.jz_换天 = false;
                                if (get.mode() == 'identity') {
                                    player.die = function (all) {
                                        if (this.name == 'jz_透心凉' || this.name1 == 'jz_透心凉' || this.name2 == 'jz_透心凉') {
                                            this.popup('换天');
                                            game.log(this, '发动了', '【' + get.translation('jz_换天') + '】');
                                            this.addTempSkill('jz_回天', { player: 'gameover' });
                                            game.chooseCharacter();
                                            return game.kong;
                                        }
                                        return lib.element.player.die.apply(this, []);
                                    };
                                }
                            },
                            filter(event, player) {
                                return player.hp <= 0 && !player.storage.jz_换天 && get.mode() == 'identity' && (player.name == 'jz_透心凉' || player.name1 == 'jz_透心凉' || player.name2 == 'jz_透心凉');
                            },
                            content() {
                                'Step 0';
                                player.storage.jz_换天 = true;
                                player.awakenSkill('jz_换天');
                                ('Step 1');
                                trigger.untrigger();
                                if (game.dead.length) {
                                    while (game.dead.length) {
                                        game.dead[0].revive();
                                    }
                                }
                            },
                        },
                        jz_结姻: {
                            audio: 'jieyin',
                            enable: 'phaseUse',
                            filterCard: true,
                            usable: 1,
                            selectCard: 2,
                            filter(event, player) {
                                return player.countCards('h') >= 2;
                            },
                            check(card) {
                                var player = get.owner(card);
                                if (player.countCards('h') > player.hp) return 8 - get.value(card);
                                if (player.hp < player.maxHp) return 6 - get.value(card);
                                return 4 - get.value(card);
                            },
                            filterTarget(card, player, target) {
                                if (target.sex != player.sex) return false;
                                if (target.hp >= target.maxHp) return false;
                                if (target == player) return false;
                                if (!target.storage.jz_结姻 || target.storage.jz_结姻 != player) return false;
                                return true;
                            },
                            content() {
                                target.addSkill('jz_结姻2');
                                player.recover();
                                player.draw();
                                target.recover();
                                target.draw();
                            },
                            ai: {
                                order: 5.5,
                                result: {
                                    player(player) {
                                        if (player.hp < player.maxHp) return 4;
                                        if (player.countCards('h') > player.hp) return 0;
                                        return -1;
                                    },
                                    target: 4,
                                },
                            },
                        },
                        jz_影剑: {
                            trigger: {
                                global: 'useCardAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                var type = get.type(event.card, 'equip');
                                return event.player != player && type == 'equip' && player.hp == player.maxHp;
                            },
                            content() {
                                'step 0';
                                var card = get.cardPile(function (card) {
                                    return get.type(card) == 'equip';
                                });
                                event.card = card;
                                ('step 1');
                                if (event.card) {
                                    player.equip(event.card);
                                }
                            },
                        },
                        jz_返乡: {
                            audio: 'xiaoji',
                            derivation: 'jz_影剑',
                            trigger: {
                                player: 'phaseBeginStart',
                            },
                            filter(event, player) {
                                if (player.storage.jz_返乡) return false;
                                return game.hasPlayer(function (current) {
                                    return current.storage.jz_结姻 && current.storage.jz_结姻.includes(player) && current.isDamaged() && player.isMinHp();
                                });
                            },
                            forced: true,
                            content() {
                                player.storage.jz_返乡 = true;
                                player.gainMaxHp();
                                player.recover();
                                player.removeSkill('jz_结姻');
                                player.addSkill('jz_影剑');
                                player.awakenSkill('jz_返乡');
                            },
                        },
                        jz_结姻1: {
                            audio: 'fanxiang',
                            trigger: {
                                global: 'gameDrawAfter',
                                player: 'phaseBeginStart',
                            },
                            filter(event, player) {
                                return !player.storage.jz_结姻1;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('jz_结姻1'), function (card, player, target) {
                                        return target.sex != player.sex;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(_status.event.player, target) > 0;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    target.storage.jz_结姻 = player;
                                    player.addSkill('jz_结姻');
                                    player.storage.jz_结姻1 = true;
                                    player.awakenSkill('jz_结姻1');
                                }
                            },
                        },
                        jz_结姻2: {
                            mark: true,
                            marktext: '姻',
                            intro: {
                                content: '已成为【结姻】的目标',
                            },
                            nopop: true,
                        },
                        jz_奇门: {
                            trigger: {
                                global: 'dieAfter',
                            },
                            filter(event, player) {
                                return player != event.player;
                            },
                            content() {
                                player.draw(3);
                            },
                        },
                        jz_倾计: {
                            trigger: {
                                global: 'useSkillBegin',
                            },
                            forced: true,
                            _priority: 100,
                            filter(event, player) {
                                if (!event.targets || !event.targets.includes(player)) return false;
                                if (event.player == player && event.target == player) return false;
                                return true;
                            },
                            check(event, player) {
                                return get.effect(event.target, event.player, player) < 0;
                            },
                            content() {
                                trigger.targets.remove(player);
                            },
                        },
                        jz_无畏: {
                            trigger: {
                                target: 'useCardToBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.type(event.card, 'trick') == 'trick' && player.countCards('h');
                            },
                            content() {
                                'step 0';
                                var next = player.chooseToDiscard('he', '无畏:是否弃置一张锦囊牌发动【无畏】将牌的效果返还给使用者？', function (card, player) {
                                    return get.type(card) == 'trick';
                                });
                                next.ai = function (card) {
                                    if (get.effect(player, trigger.card) < 0) {
                                        if (card.name == 'liuxinghuoyu') return 7 - get.value(card);
                                        return 5 - get.value(card);
                                    }
                                    return 0;
                                };
                                next.prompt2 = '返还' + get.translation(trigger.player) + get.translation(trigger.card) + '的效果';
                                ('step 1');
                                if (result.bool) {
                                    // player.discard(result.cards);
                                    trigger.target = trigger.player;
                                    trigger.player = player;
                                    trigger.untrigger();
                                    trigger.trigger('useCardToBefore');
                                }
                            },
                            ai: {
                                threaten(player, target) {
                                    if (target.countCards('h') <= 0) {
                                        return 2;
                                    }
                                    return 2 / (target.countCards('h') - 1);
                                },
                            },
                        },
                        jz_白龙: {
                            group: 'jy_lingbo2',
                            audio: 'longdan',
                            init(player) {
                                player.storage.jz_bailong = 0;
                            },
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.player != player) return false;
                                if (event.player == _status.currentPhase) return false;
                                return true;
                            },
                            content() {
                                player.storage.jz_bailong++;
                            },
                            mod: {
                                globalTo(from, to, distance) {
                                    return distance + to.storage.jz_bailong.length;
                                },
                            },
                        },
                        jz_涯角: {
                            audio: 'reyajiao',
                            trigger: {
                                player: ['respond', 'useCard'],
                            },
                            forced: true,
                            filter(event, player) {
                                return get.itemtype(event.cards) == 'cards';
                            },
                            content() {
                                'step 0';
                                event.card = get.cards()[0];
                                game.broadcast(function (card) {
                                    ui.arena.classList.add('thrownhighlight');
                                    card.copy('thrown', 'center', 'thrownhighlight', ui.arena).addTempClass('start');
                                }, event.card);
                                event.node = event.card.copy('thrown', 'center', 'thrownhighlight', ui.arena).addTempClass('start');
                                ui.arena.classList.add('thrownhighlight');
                                game.addVideo('thrownhighlight1');
                                game.addVideo('centernode', null, get.cardInfo(event.card));
                                if (get.type(event.card, 'trick') == get.type(trigger.card, 'trick')) {
                                    player
                                        .chooseTarget('选择获得此牌的角色')
                                        .set('ai', function (target) {
                                            var att = get.attitude(_status.event.player, target);
                                            if (_status.event.du) {
                                                if (target.hasSkillTag('nodu')) return 0;
                                                return -att;
                                            }
                                            if (att > 0) {
                                                return att + Math.max(0, 5 - target.countCards('h'));
                                            }
                                            return att;
                                        })
                                        .set('du', event.card.name == 'du');
                                } else {
                                    player.chooseBool('是否弃置' + get.translation(event.card) + '？');
                                    event.disbool = true;
                                }
                                ('step 1');
                                if (event.disbool) {
                                    if (!result.bool) {
                                        game.log(player, '展示了', event.card);
                                        ui.cardPile.insertBefore(event.card, ui.cardPile.firstChild);
                                    } else {
                                        game.log(player, '展示并弃掉了', event.card);
                                        event.card.discard();
                                    }
                                } else if (result.targets) {
                                    player.line(result.targets, 'green');
                                    result.targets[0].gain(event.card, 'log');
                                } else {
                                    game.log(player, '展示并弃掉了', event.card);
                                    event.card.discard();
                                }
                                game.addVideo('thrownhighlight2');
                                ui.arena.classList.remove('thrownhighlight');
                            },
                            ai: {
                                effect: {
                                    target(card, player) {
                                        if (get.tag(card, 'respond') && player.countCards('h') > 1) return [1, 0.2];
                                    },
                                },
                            },
                        },
                        jz_乱武: {
                            audio: 'ext:军争加强/audio:2',
                            enable: 'phaseUse',
                            limited: true,
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            selectTarget: -1,
                            multitarget: true,
                            multiline: true,
                            content() {
                                'step 0';
                                player.awakenSkill('jz_乱武');
                                (player.storage.jz_乱武 = true), player.addSkill('jz_乱武2');
                                event.current = player.next;
                                ('step 1');
                                event.current.addTempClass('target');
                                event.current.chooseToUse('乱武:使用一张杀或流失一点体力', { name: 'sha' }, function (card, player, target) {
                                    if (player == target) return false;
                                    if (!player.canUse('sha', target)) return false;
                                    if (get.distance(player, target) <= 1) return true;
                                    if (
                                        game.hasPlayer(function (current) {
                                            return current != player && get.distance(player, current) < get.distance(player, target);
                                        })
                                    ) {
                                        return false;
                                    }
                                    return true;
                                });
                                ('step 2');
                                if (result.bool == false) event.current.loseHp();
                                if (event.current.next != player) {
                                    event.current = event.current.next;
                                    event.goto(1);
                                }
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player(player) {
                                        if (lib.config.mode == 'identity' && game.zhu.isZhu && player.identity == 'fan') {
                                            if (game.zhu.hp == 1 && game.zhu.countCards('h') <= 2) return 1;
                                        }
                                        var num = 0;
                                        var players = game.filterPlayer();
                                        for (var i = 0; i < players.length; i++) {
                                            var att = get.attitude(player, players[i]);
                                            if (att > 0) att = 1;
                                            if (att < 0) att = -1;
                                            if (players[i] != player && players[i].hp <= 3) {
                                                if (players[i].countCards('h') == 0) num += att / players[i].hp;
                                                else if (players[i].countCards('h') == 1) num += att / 2 / players[i].hp;
                                                else if (players[i].countCards('h') == 2) num += att / 4 / players[i].hp;
                                            }
                                            if (players[i].hp == 1) num += att * 1.5;
                                        }
                                        if (player.hp == 1) {
                                            return -num;
                                        }
                                        if (player.hp == 2) {
                                            return -game.players.length / 4 - num;
                                        }
                                        return -game.players.length / 3 - num;
                                    },
                                },
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player) {
                                player.storage.jz_乱武 = false;
                            },
                        },
                        jz_乱武2: {
                            trigger: {
                                global: 'dieEnd',
                            },
                            filter(event, player) {
                                if (event.player == player) return false;
                                return event.reason && event.reason.parent.name == 'jz_乱武';
                            },
                            forced: true,
                            content() {
                                player.restoreSkill('jz_乱武');
                            },
                        },
                        jz_乱武模式: {
                            audio: 'luanwu',
                            global: 'wansha2',
                            enable: 'phaseUse',
                            limited: true,
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            usable: 1,
                            selectTarget: -1,
                            multitarget: true,
                            multiline: true,
                            content() {
                                'step 0';
                                event.current = player.next;
                                ui.background.setBackgroundImage('extension/军争加强/image/乱武.jpg');
                                ('step 1');
                                event.current.addTempClass('target');
                                event.current.chooseToUse('乱武:使用一张杀或流失一点体力', { name: 'sha' }, function (card, player, target) {
                                    if (player == target) return false;
                                    if (!player.canUse('sha', target)) return false;
                                    if (get.distance(player, target) <= 1) return true;
                                    if (
                                        game.hasPlayer(function (current) {
                                            return current != player && get.distance(player, current) < get.distance(player, target);
                                        })
                                    ) {
                                        return false;
                                    }
                                    return true;
                                });
                                ('step 2');
                                if (result.bool == false) event.current.loseHp();
                                if (event.current.next != player) {
                                    event.current = event.current.next;
                                    event.goto(1);
                                }
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player(player) {
                                        if (lib.config.mode == 'identity' && game.zhu.isZhu && player.identity == 'fan') {
                                            if (game.zhu.hp == 1 && game.zhu.countCards('h') <= 2) return 1;
                                        }
                                        var num = 0;
                                        var players = game.filterPlayer();
                                        for (var i = 0; i < players.length; i++) {
                                            var att = get.attitude(player, players[i]);
                                            if (att > 0) att = 1;
                                            if (att < 0) att = -1;
                                            if (players[i] != player && players[i].hp <= 3) {
                                                if (players[i].countCards('h') == 0) num += att / players[i].hp;
                                                else if (players[i].countCards('h') == 1) num += att / 2 / players[i].hp;
                                                else if (players[i].countCards('h') == 2) num += att / 4 / players[i].hp;
                                            }
                                            if (players[i].hp == 1) num += att * 1.5;
                                        }
                                        if (player.hp == 1) {
                                            return -num;
                                        }
                                        if (player.hp == 2) {
                                            return -game.players.length / 4 - num;
                                        }
                                        return -game.players.length / 3 - num;
                                    },
                                },
                            },
                            mark: true,
                            intro: {
                                content: '乱武模式',
                            },
                            init(player) {
                                player.storage.jz_乱武模式 = false;
                            },
                        },
                        jz_制蛮: {
                            audio: 'zhiman',
                            trigger: {
                                source: 'damageBefore',
                            },
                            check(event, player) {
                                if (get.damageEffect(event.player, player, player) < 0) return true;
                                var att = get.attitude(player, event.player);
                                if (event.num > 1) {
                                    if (att < 0) return false;
                                    if (att > 0) return true;
                                }
                                return false;
                            },
                            filter(event, player) {
                                if (event.player == player) return false;
                                return event.player.countCards('h') > 0;
                            },
                            content() {
                                'Step 0';
                                trigger.cancel();
                                ('Step 1');
                                var card = trigger.player.getCards('h').randomGet();
                                player.gain(card, trigger.player);
                                trigger.player.$giveAuto(card, player);
                            },
                        },
                        jz_心战: {
                            audio: 'xinzhan',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return true; //player.countCards('h')>player.maxHp;
                            },
                            usable: 1,
                            content() {
                                'step 0';
                                var cards = get.cards(4);
                                event.cards = cards;
                                var next = player.chooseCardButton(cards, '选择获得的♥️️牌', [1, Infinity]).set('filterButton', function (button) {
                                    return button.link.suit == 'heart';
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.gain(result.links);
                                    player.$draw(result.links);
                                }
                                for (var i = event.cards.length - 1; i >= 0; i--) {
                                    if (!result.bool || !result.links.includes(event.cards[i])) {
                                        ui.cardPile.insertBefore(event.cards[i], ui.cardPile.firstChild);
                                    }
                                }
                            },
                            ai: {
                                order: 11,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        jz_白龙2: {
                            audio: 'longdan',
                            trigger: {
                                global: 'phaseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.storage.jz_bailong <= 0) return false;
                                return player.storage.jz_bailong;
                            },
                            content() {
                                player.storage.jz_bailong = 0;
                            },
                        },
                        jz_噬尸: {
                            trigger: {
                                source: 'dieEnd',
                            },
                            _priority: 10,
                            content() {
                                'step 0';
                                player.chooseControl('回复体力至体力上限', '摸三张牌', '取消', function () {
                                    var player = _status.event.player;
                                    if (player.hp < player.maxHp - 2 && player.countCards('h') >= 2) {
                                        return '回复体力至体力上限';
                                    }
                                    if (player.hp == player.maxHp && player.countCards('h') < 2) {
                                        return '摸三张牌';
                                    }
                                    if (player.hp - player.countCards('h') > 1) {
                                        return '摸三张牌';
                                    }
                                    return '取消';
                                });
                                ('step 1');
                                if (result.control == '回复体力至体力上限') {
                                    player.hp = player.maxHp;
                                } else if (result.control == '摸三张牌') {
                                    player.draw(3);
                                }
                            },
                        },
                        jz_人公: {
                            mod: {
                                targetEnabled(card, player, target) {
                                    if (get.type(card) == 'delay') {
                                        return false;
                                    }
                                },
                            },
                        },
                        jz_bossWin: {},
                        jz_蛊惑: {
                            audio: 'guhuo',
                            trigger: {
                                global: ['damageBegin', 'recoverBegin'],
                            },
                            filter(event, player) {
                                return event.player != player;
                            },
                            check(event, player) {
                                if (event.player.ai.shown == 0) return 0;
                                if (event.name == 'recover') return event.player.hp != event.player.maxHp - 1;
                                var tao = player.getCards('h', 'tao');
                                if (player.hp == 1) return tao.length;
                                return player.hp > 1;
                            },
                            content() {
                                'step 0';
                                player.throwDice();
                                event.num1 = event.num;
                                ('step 1');
                                trigger.player.throwDice();
                                event.num2 = event.num;
                                ('step 2');
                                if (event.num1 < event.num2) {
                                    player.loseHp();
                                    event.finish();
                                }
                                if (event.num1 == event.num2) {
                                    player.draw();
                                    event.finish();
                                }
                                ('step 3');
                                player
                                    .chooseControl('数值增加', '数值减少', '取消', function () {
                                        var player = _status.event.player;
                                        if (get.attitude(player, trigger.player) > 0 && trigger.name != 'damage') {
                                            return '数值增加';
                                        }
                                        if (get.attitude(player, trigger.player) <= 0 && trigger.name == 'damage') {
                                            return '数值增加';
                                        }
                                        return '数值减少';
                                    })
                                    .set('prompt', '选择其该阶段所执行的数值增加或减少');
                                ('step 4');
                                if (result.control == '数值增加') {
                                    trigger.num += event.num1 - event.num2;
                                }
                                if (result.control == '数值减少') {
                                    trigger.num -= event.num1 - event.num2;
                                    if (trigger.num <= 0) {
                                        trigger.num = 0;
                                    }
                                }
                                if (result.control == '取消') {
                                    player.draw();
                                }
                            },
                            ai: {
                                expose: 0.3,
                            },
                        },
                        jz_龙胆1: {
                            group: ['jz_龙胆1_sha', 'jz_龙胆1_shan', 'jz_龙胆1_draw', 'jz_龙胆1_shamiss', 'jz_龙胆1_shanafter'],
                            subSkill: {
                                shanafter: {
                                    audio: 'reyajiao',
                                    trigger: {
                                        player: 'respond',
                                    },
                                    _priority: 1,
                                    filter(event, player) {
                                        return event.skill == 'jz_龙胆1_shan';
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget('是否发动【龙胆】令一名其他角色回复1点体力？', function (card, player, target) {
                                                return target != trigger.source && target != player && target.isDamaged();
                                            })
                                            .set('ai', function (target) {
                                                return get.attitude(_status.event.player, target);
                                            });
                                        ('step 1');
                                        if (result.bool && result.targets && result.targets.length) {
                                            player.line(result.targets[0], 'green');
                                            result.targets[0].recover();
                                        }
                                    },
                                },
                                shamiss: {
                                    audio: 'reyajiao',
                                    trigger: {
                                        player: 'shaMiss',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.skill == 'jz_龙胆1_sha';
                                    },
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget('是否发动【龙胆】对一名其他角色造成1点伤害？', function (card, player, target) {
                                                return target != trigger.target && target != player;
                                            })
                                            .set('ai', function (target) {
                                                return -get.attitude(_status.event.player, target);
                                            });
                                        ('step 1');
                                        if (result.bool && result.targets && result.targets.length) {
                                            player.line(result.targets[0], 'green');
                                            result.targets[0].damage();
                                        }
                                    },
                                },
                                draw: {
                                    trigger: {
                                        player: ['useCard', 'respond'],
                                    },
                                    _priority: 2,
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        if (!get.zhu(player, 'shouyue')) return false;
                                        return event.skill == 'jz_龙胆1_sha' || event.skill == 'jz_龙胆1_shan';
                                    },
                                    content() {
                                        player.draw();
                                        player.storage.fanghun2++;
                                    },
                                },
                                sha: {
                                    audio: 'longdan_sha',
                                    enable: ['chooseToUse', 'chooseToRespond'],
                                    filterCard: {
                                        name: 'shan',
                                    },
                                    viewAs: {
                                        name: 'sha',
                                        suit: 'heart',
                                        number: 2,
                                        cards: [{ node: { image: {}, info: {}, name: {}, name2: {}, background: {}, intro: {}, range: {} }, storage: {}, vanishtag: [], _uncheck: [], suit: 'diamond', number: 4, name: 'shan', cardid: '7147591380', clone: { name: 'shan', suit: 'diamond', number: 4, node: { name: {}, info: {}, intro: {}, background: {}, image: {} }, _transitionEnded: true, timeout: 7105 }, original: 'h', timeout: 7075 }],
                                    },
                                    viewAsFilter(player) {
                                        if (!player.countCards('h', 'shan')) return false;
                                    },
                                    prompt: '将一张闪当杀使用或打出',
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
                                            if (!player.countCards('h', 'shan')) return false;
                                        },
                                        order() {
                                            return get.order({ name: 'sha' }) + 0.1;
                                        },
                                        useful: -1,
                                        value: -1,
                                        basic: {
                                            useful: [5, 1],
                                            value: [5, 1],
                                        },
                                        result: {
                                            target(player, target) {
                                                if (player.hasSkill('jiu') && !target.getEquip('baiyin')) {
                                                    if (get.attitude(player, target) > 0) {
                                                        return -6;
                                                    } else {
                                                        return -3;
                                                    }
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
                                    },
                                },
                                shan: {
                                    audio: 'longdan_shan',
                                    enable: ['chooseToRespond'],
                                    filterCard: {
                                        name: 'sha',
                                    },
                                    viewAs: {
                                        name: 'shan',
                                        suit: 'spade',
                                        number: 9,
                                    },
                                    prompt: '将一张杀当闪打出',
                                    check() {
                                        return 1;
                                    },
                                    viewAsFilter(player) {
                                        if (!player.countCards('h', 'sha')) return false;
                                    },
                                    ai: {
                                        respondShan: true,
                                        skillTagFilter(player) {
                                            if (!player.countCards('h', 'sha')) return false;
                                        },
                                        effect: {
                                            target(card, player, target, current) {
                                                if (get.tag(card, 'respondShan') && current < 0) return 0.6;
                                            },
                                        },
                                        order: 4,
                                        useful: -1,
                                        value: -1,
                                        basic: {
                                            useful: [7, 2],
                                            value: [7, 2],
                                        },
                                    },
                                },
                            },
                        },
                        jz_空城: {
                            mod: {
                                targetEnabled(card, player, target, now) {
                                    if (target.countCards('h') == 0) {
                                        if (card.name == 'sha' || card.name == 'juedou') return false;
                                    }
                                },
                            },
                            group: 'kongcheng1',
                            ai: {
                                noh: true,
                                skillTagFilter(player, tag) {
                                    if (tag == 'noh') {
                                        if (player.countCards('h') != 1) return false;
                                    }
                                },
                            },
                        },
                        die: {
                            content() {
                                trigger.cancel();
                            },
                        },
                        jz_救援: {
                            trigger: {
                                player: ['recoverEnd', 'damageBegin', 'phaseUseBegin'],
                            },
                            audio: 'jiuyuan',
                            init(player) {
                                if (!player.storage.chunlao) player.storage.chunlao = [];
                            },
                            filter(event, player) {
                                if (event.name == 'phaseUse') return player.isAlive();
                                if (event.name == 'recover') return player.isAlive();
                                if (event.name == 'damage') return player.countCards('h', 'sha') > 0;
                                return false;
                            },
                            content() {
                                if (trigger.name == 'recover') {
                                    if (player.hp < player.maxHp) player.hp += 1;
                                    player.update();
                                }
                                if (trigger.name == 'phaseUse') {
                                    var next = game.createEvent('yinghun', null, trigger.parent);
                                    next.forceDie = true;
                                    next.player = player;
                                    if (trigger.source) next.source = trigger.source;
                                    next.setContent(lib.skill.yinghun.content);
                                    game.log(player, '选择了', '【' + get.translation('yinghun') + '】');
                                }
                                if (trigger.name == 'damage') {
                                    if (!player.storage.chunlao) {
                                        player.storage.chunlao = [];
                                        var next = game.createEvent('chunlao', null, trigger.parent);
                                        next.forceDie = true;
                                        next.player = player;
                                        next.setContent(lib.skill.jz_救援.contentx);
                                        if (trigger.source) next.source = trigger.source;
                                        game.log(player, '选择了', '【' + get.translation('chunlao') + '】');
                                    }
                                }
                            },
                            contentx() {
                                'step 0';
                                player.chooseCard([1, player.countCards('h', 'sha')], get.prompt('chunlao'), { name: 'sha' }).set('ai', function () {
                                    return 1;
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.storage.chunlao = player.storage.chunlao.concat(result.cards);
                                    player.markSkill('chunlao');
                                    player.lose(result.cards, ui.special, 'toStorage');
                                    player.$give(result.cards, player);
                                    player.addSkill('chunlao2');
                                }
                            },
                        },
                        jz_制衡: {
                            audio: 'zhiheng',
                            inherit: 'zhiheng',
                            selectCard() {
                                var player = _status.event.player;
                                if (player.hasSkill('dinglanyemingzhu_skill')) return [1, Infinity];
                                return [1, player.maxHp];
                            },
                            prompt() {
                                var player = _status.event.player;
                                if (player.hasSkill('dinglanyemingzhu_skill')) return '出牌阶段限一次,你可以弃置任意张牌,摸等量的牌';
                                return '出牌阶段限一次,你可以弃置至多X张牌(X为你的体力上限),摸等量的牌';
                            },
                            enable: 'phaseUse',
                            usable: 1,
                            position: 'he',
                            filterCard: true,
                            check(card) {
                                return 6 - get.value(card);
                            },
                            content() {
                                player.draw(cards.length);
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player: 1,
                                },
                                threaten: 1.5,
                            },
                            filter(event, player) {
                                return true;
                            },
                        },
                        jz_突袭: {
                            audio: 'retuxi',
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            _priority: 100,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(
                                    get.prompt('new_retuxi'),
                                    [1, trigger.num],
                                    function (card, player, target) {
                                        return target.countCards('h') > 0 && player != target;
                                    },
                                    function (target) {
                                        var att = get.attitude(_status.event.player, target);
                                        if (target.hasSkill('tuntian')) return att / 10;
                                        return 1 - att;
                                    }
                                );
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].addSkill = lib.element.player.addSkill;
                                    result.targets[0].addSkill('jz_突袭2');
                                    player.gainMultiple(result.targets);
                                    trigger.num -= result.targets.length;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (trigger.num <= 0) game.delay();
                            },
                            ai: {
                                threaten: 1.6,
                                expose: 0.2,
                            },
                        },
                        jz_突袭2: {
                            trigger: {
                                player: 'phaseAfter',
                            },
                            init(player) {
                                player.removeSkill = lib.element.player.removeSkill;
                                player.phaseUse = lib.element.player.phaseDiscard;
                                player.phaseDiscard = lib.element.player.phaseUse;
                                player.recover = lib.element.player.draw;
                            },
                            onremove(player) {
                                player.phaseDiscard = lib.element.player.phaseDiscard;
                                player.phaseUse = lib.element.player.phaseUse;
                                player.recover = lib.element.player.recover;
                            },
                            mark: true,
                            marktext: '袭',
                            intro: {
                                content: '你的出牌阶段和弃牌阶段调换,回复体力改为摸牌,直至你的回合结束(或失去此技能)',
                            },
                            content() {
                                player.removeSkill('jz_突袭2');
                            },
                        },
                        jz_boss_幻化: {
                            enable: 'phaseUse',
                            position: 'he',
                            usable: 3,
                            filterCard(card, player) {
                                if (player.storage.jz_幻化 && player.storage.jz_幻化.includes(card)) return false;
                                return true;
                            },
                            init(player) {
                                player.storage.jz_幻化 = [];
                            },
                            check(card) {
                                return 10 - get.value(card);
                            },
                            prompt: '将一张牌永久转化为任意一张牌',
                            content() {
                                'step 0';
                                var list = [];
                                var suit = cards[0].suit;
                                var number = cards[0].number;
                                for (var i in lib.card) {
                                    if (!lib.card[i].content) continue;
                                    if (lib.card[i].mode && lib.card[i].mode.includes(lib.config.mode) == false) continue;
                                    if (cards[0].name != i) {
                                        list.push([suit, number, i]);
                                    }
                                }
                                var dialog = ui.create.dialog([list, 'vcard']);
                                player.chooseButton(dialog, true, function (button) {
                                    return get.value({ name: button.link[2] }, player);
                                });
                                ('step 1');
                                cards[0].init(result.buttons[0].link);
                                player.gain(cards[0]);
                                player.$gain(cards[0]);
                                player.storage.jz_幻化.add(cards[0]);
                            },
                            ai: {
                                order: 9,
                                result: {
                                    player: 1,
                                },
                                threaten: 2,
                            },
                        },
                        jz_流离: {
                            audio: 'liuli',
                            trigger: {
                                target: 'useCardToBefore',
                            },
                            forced: true,
                            _priority: 5,
                            filter(event, player) {
                                return event.targets.includes(player) && event.player != player;
                            },
                            check(event, player) {
                                if (get.type(event.card) == 'equip') return 0;
                                return 1;
                            },
                            content() {
                                'step 0';
                                var next = player.chooseCardTarget({
                                    position: 'h',
                                    filterCard: lib.filter.cardDiscardable,
                                    filterTarget(card, player, target) {
                                        var trigger = _status.event.getTrigger();
                                        if (target != player) {
                                            return true;
                                        }
                                        return false;
                                    },
                                    ai1(card) {
                                        return get.unuseful(card) + 9;
                                    },
                                    ai2(target) {
                                        if (get.type(event.card) == 'basic') {
                                            if (trigger.card.name == 'sha') {
                                                return -get.attitude(_status.event.player, target);
                                            }
                                        }
                                        if (get.type(event.card) == 'delay') {
                                            return -get.attitude(_status.event.player, target);
                                        }
                                        if (get.type(event.card) == 'trick') {
                                            if (trigger.card.name != 'wuzhong' && trigger.card.name != 'wugu' && trigger.card.name != 'taoyuan' && trigger.card != 'zengbing') {
                                                return -get.attitude(_status.event.player, target);
                                            } else {
                                                return get.attitude(_status.event.player, target);
                                            }
                                        }
                                        if (target == trigger.player) {
                                            return -get.attitude(_status.event.player, target);
                                        }
                                        if (target != trigger.player) {
                                            return -get.attitude(_status.event.player, target);
                                        }
                                        return -1;
                                    },
                                    prompt: get.prompt('jz_流离'),
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.discard(result.cards);
                                    trigger.target = result.targets[0];
                                    for (var i = 0; i < trigger.targets.length; i++) {
                                        if (trigger.targets[i] == player) break;
                                    }
                                    var t1 = trigger.targets.slice(0, i);
                                    var t2 = trigger.targets.slice(i + 1);
                                    trigger.targets = t1.concat([result.targets[0]]).concat(t2);
                                    trigger.parent.targets = trigger.targets.slice(0);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                trigger.untrigger();
                                trigger.trigger('useCardToBefore');
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
                                        for (var i = 0; i < players.length; i++) {
                                            if (player != players[i] && get.attitude(target, players[i]) < 0 && target.canUse(card, players[i])) {
                                                if (!friend) return 0;
                                                if (get.effect(players[i], vcard, player, player) > 0) {
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
                        jz_连环: {
                            trigger: {
                                global: ['linkAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                //if(event.name=='link') return event.player.isLinked();
                                return event.player;
                            },
                            content() {
                                //设定Skills是新横置或解除横置角色的所有技能
                                var Skills = trigger.player.skills;
                                var lengths = trigger.player.storage.jz_连环.length;
                                for (var x = 0; x < game.players.length; x++) {
                                    //简化game.players[x]
                                    var playerx = game.players[x];
                                    game.countPlayer(function (current1) {
                                        if (current1.isLinked() && trigger.player.isLinked() && current1 != trigger.player) {
                                            for (var a = 0; a < current1.skills.length; a++) {
                                                //新横置角色添加已横置角色的技能
                                                trigger.player.skills.add(current1.skills[a]);
                                            }
                                        }
                                        if (current1.isLinked() && !trigger.player.isLinked() && trigger.player != current1) {
                                            trigger.player.skills = trigger.player.storage.jz_连环;
                                            for (var b = 0; b < lengths; b++) {
                                                //横置角色移除解除横置角色的技能
                                                if (!current1.storage.jz_连环.includes(lengths[b])) {
                                                    current1.skills.remove(lengths[b]);
                                                }
                                                if (current1.storage.jz_连环.includes(lengths[b])) current1.skills.add(lengths[b]);
                                            }
                                        }
                                        if (!trigger.player.isLinked()) {
                                            //解除横置角色回复技能
                                            if (current1.isLinked() && current1 != trigger.player) {
                                                for (var d = 0; d < current1.skills.length; d++) {
                                                    trigger.player.removeSkill(current1.skills[d]);
                                                }
                                            }
                                            trigger.player.skills = trigger.player.storage.jz_连环;
                                        }
                                    });
                                    game.countPlayer(function (current2) {
                                        if (current2.isLinked() && playerx.isLinked() && current2 != playerx) {
                                            for (var c = 0; c < current2.skills.length; c++) {
                                                //横置角色添加其他横置角色的技能
                                                playerx.skills.add(current2.skills[c]);
                                            }
                                        }
                                    });
                                }
                            },
                            ai: {
                                expose: 0.2,
                            },
                        },
                        //锁定技,游戏开始时(或你进入游戏时)你解除横置状态,除你之外的所有角色进入横置状态<li>
                        //锁定技,你获得横置角色的技能,且【郭嘉】和【界郭嘉】不在场时,其他角色使用技能后其移除此技能<li>
                        //出牌阶段,你可以将你任意一张♣️️手牌当【铁索连环】使用或重铸
                        jz_boss连环: {
                            audio: 'boss_tianyu',
                            trigger: {
                                global: 'linkAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player.isLinked();
                            },
                            content() {
                                player.addSkill(trigger.player.getSkills(null, false, false));
                                if (trigger.player == player && !player.hasSkill('nzry_jieying')) {
                                    player.link(false);
                                }
                            },
                            group: ['jz_boss连环_a', 'jz_boss连环_b'],
                            subSkill: {
                                a: {
                                    trigger: {
                                        global: 'logSkillBegin',
                                    },
                                    silent: true,
                                    filter(event, player) {
                                        if (event.getParent('jz_boss连环_a').name == 'jz_boss连环_a') return false;
                                        if (
                                            !game.hasPlayer(function (current) {
                                                return current.name == 'guojia' || current.name == 're_guojia';
                                            }) &&
                                            event.player != player
                                        ) {
                                            return event.skill != 'jz_boss连环_a';
                                        }
                                        return false;
                                    },
                                    content() {
                                        game.countPlayer(function (current) {
                                            if (current != player && player != trigger.player && current.storage.jz_连环.includes(trigger.skill)) {
                                                current.awakenSkill(trigger.skill);
                                                current.skills.remove(trigger.skill);
                                                game.log(current, '失去了', trigger.skill);
                                            }
                                        });
                                    },
                                },
                                b: {
                                    trigger: {
                                        global: 'gameStart',
                                        player: 'enterGame',
                                    },
                                    forced: true,
                                    content() {
                                        //游戏开始或你登场时,横置所有其他角色并解除自身的横置状态
                                        if (player.isLinked()) player.link(false);
                                        game.countPlayer(function (current) {
                                            if (current != player && !current.isLinked()) {
                                                current.link(true);
                                            }
                                        });
                                    },
                                },
                            },
                        },
                        jz_boss落凤: {
                            audio: 'niepan',
                            forced: true,
                            trigger: {
                                player: ['dieBegin', 'loseMaxHpBegin'],
                            },
                            init(player) {
                                if (!player.storage.jz_boss落凤) player.storage.jz_落凤 = 7;
                            },
                            filter(event, player) {
                                if (player.maxHp <= 0 && player.storage.jz_落凤 <= 0) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                trigger.cancel();
                                player.maxHp--;
                                player.storage.jz_落凤 = player.maxHp;
                                player.discard(player.getCards('j'));
                                ('step 1');
                                if (player.hp < player.maxHp) {
                                    player.hp = player.maxHp;
                                }
                                ('step 2');
                                player.draw(5);
                                ('step 3');
                                player.link(false);
                                ('step 4');
                                player.turnOver(false);
                                player.update();
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player(player) {
                                        if (player.hp == 0) return 10;
                                        if (player.hp < player.maxHp || player.countCards('he') <= 1) return 10;
                                        return 5;
                                    },
                                },
                                threaten(player, target) {
                                    if (target.storage.jz_落凤 && target.storage.jz_落凤 > 3) return 2;
                                    return 3;
                                },
                            },
                        },
                        jz_秘术: {
                            enable: 'phaseUse',
                            filter(event, player) {
                                return !player.hasSkill('subplayer') && player.getSubPlayers('jz_秘术_get').length;
                            },
                            init(player) {
                                lib.translate.jz_木人 = '木人';
                                lib.character['jz_木人'] = ['male', 'shen', 2, ['jz_木人'], ['ext:军争加强/image/jz_木人.jpg']];
                                lib.translate.jz_土偶 = '土偶';
                                lib.character['jz_土偶'] = ['male', 'shen', 2, ['jz_土偶'], ['ext:军争加强/image/jz_土偶.jpg']];
                            },
                            nosub: true,
                            group: 'jz_秘术_get',
                            forced: true,
                            delay: 0,
                            content() {
                                player.callSubPlayer().set('tag', 'jz_秘术_get');
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player: 1,
                                },
                            },
                            subSkill: {
                                get: {
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return game.roundNumber <= 5;
                                    },
                                    content() {
                                        player.addSubPlayer({
                                            name: 'jz_土偶',
                                            skills: ['jz_土偶', 'jz_强行'],
                                            hp: 2,
                                            maxHp: 2,
                                            hs: get.cards(4),
                                            intro: '出牌阶段,你可以调遣此随从(直到随从死亡不可再次切换)',
                                        });
                                        player.addSubPlayer({
                                            name: 'jz_木人',
                                            skills: ['jz_木人', 'jz_强行'],
                                            hp: 2,
                                            maxHp: 2,
                                            hs: get.cards(4),
                                            intro: '出牌阶段,你可以调遣此随从(直到随从死亡不可再次切换)',
                                        });
                                    },
                                },
                            },
                        },
                        jz_木人: {
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player && event.player.isIn() && !event.player.hasSkill('boss_zhongdu');
                            },
                            logTarget: 'player',
                            content() {
                                trigger.player.addSkill('boss_zhongdu');
                            },
                        },
                        jz_土偶: {
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player && event.player.isIn() && !event.player.hasSkill('mad');
                            },
                            logTarget: 'player',
                            content() {
                                trigger.player.goMad({ player: 'phaseAfter' });
                            },
                        },
                        jz_强行: {
                            audio: 'kanpo',
                            trigger: {
                                global: 'phaseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player;
                            },
                            content() {
                                player.getStat().card = {};
                                player.phase('nodelay');
                            },
                        },
                        jz_八阵: {
                            audio: 'bazhen',
                            inherit: 'bagua_skill',
                            filter(event, player) {
                                if (!lib.skill.bagua_skill.filter(event, player)) return false;
                                //if(!player.isEmpty(2)) return false;
                                return true;
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (player == target && get.subtype(card) == 'equip2') {
                                            if (get.equipValue(card) <= 7.5) return 0;
                                        }
                                        if (!target.isEmpty(2)) return;
                                        return lib.skill.bagua_skill.ai.effect.target.apply(this, arguments);
                                    },
                                },
                            },
                            trigger: {
                                player: 'chooseToRespondBegin',
                            },
                            check(event, player) {
                                if (get.damageEffect(player, event.player, player) >= 0) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                player.judge('bagua', function (card) {
                                    return get.color(card) == 'red' ? 1.5 : -0.5;
                                });
                                ('step 1');
                                if (result.judge > 0) {
                                    trigger.untrigger();
                                    trigger.responded = true;
                                    trigger.result = { bool: true, card: { name: 'shan' } };
                                }
                            },
                            equipSkill: true,
                        },
                        jz_玄武: {
                            audio: 'ext:军争加强/audio:2',
                            trigger: {
                                global: 'phaseBefore',
                            },
                            forced: true,
                            init(player) {
                                if (player.name == 'jz_魔王诸葛' || player.name1 == 'jz_魔王诸葛' || player.name == 'jz_魔王诸葛') {
                                    player.getDebuff = game.kongfunc;
                                }
                            },
                            filter(event, player) {
                                return event.player != player;
                            },
                            content() {
                                trigger.player.getDebuff();
                            },
                            ai: {
                                order: 10,
                            },
                        },
                        jz_青龙: {
                            audio: 'ext:军争加强/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            init(player) {
                                player.storage.jz_青龙 = 0;
                            },
                            filter(event, player) {
                                var a = player.storage.jz_青龙;
                                return a < 1;
                            },
                            content() {
                                'step 0';
                                player.storage.jz_青龙++;
                                var list = game.filterPlayer();
                                list.remove(player);
                                list.sort(lib.sort.seat);
                                var list2 = [];
                                for (var i = 0; i < list.length; i++) {
                                    list2.push(0);
                                }
                                for (var i = 0; i < 5; i++) {
                                    list2[Math.floor(Math.random() * list2.length)]++;
                                }
                                event.list = list;
                                event.list2 = list2;
                                ('step 1');
                                if (event.list.length) {
                                    var target = event.list.shift();
                                    target.damage(event.list2.shift(), 'thunder');
                                    player.line(target, 'thunder');
                                    event.redo();
                                }
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target(player, target) {
                                        return 10;
                                    },
                                    player: 0.1,
                                },
                            },
                            group: ['jz_青龙2', 'jz_青龙3'],
                        },
                        jz_青龙2: {
                            trigger: {
                                player: 'damageBefore',
                            },
                            filter(event, player) {
                                return event.nature == 'thunder';
                            },
                            forced: true,
                            content() {
                                trigger.cancel();
                            },
                            ai: {
                                nothunder: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'thunderDamage')) return 0;
                                    },
                                },
                            },
                        },
                        jz_青龙3: {
                            trigger: {
                                global: 'roundStart',
                            },
                            forced: true,
                            content() {
                                player.storage.jz_青龙 = 0;
                            },
                        },
                        jz_免疫: {
                            audio: 'jiang',
                            trigger: {
                                global: ['useSkillBegin'],
                            },
                            _priority: 300,
                            forced: true,
                            init(player) {
                                if (player == game.boss) {
                                    player.die = function (reason) {
                                        'step 0';
                                        if (player.hp > 0 && player.maxHp > 0) {
                                            return;
                                        }
                                        ('step 1');
                                        var next = game.createEvent('die');
                                        next.player = this;
                                        next.reason = reason;
                                        if (reason) next.source = reason.source;
                                        next.restMap = { type: null, count: null, audio: null };
                                        next.excludeMark = [];
                                        next.setContent('die');
                                        return next;
                                    };
                                }
                            },
                            filter(event, player) {
                                if (!event.target && !event.targets) return false;
                                return event.player != player && event.targets.includes(player);
                            },
                            content() {
                                trigger.targets.remove(player);
                            },
                        },
                        jz_连环2: {
                            audio: 'boss_tianyu',
                            trigger: {
                                global: 'linkAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player.isLinked();
                            },
                            content() {
                                'step 0';
                                if (trigger.player == player && !player.hasSkill('nzry_jieying')) {
                                    player.link(false);
                                    event.finish();
                                }
                                ('step 1');
                                if (trigger.player != player) trigger.player.addTempSkill('fengyin', { player: 'linkAfter' });
                            },
                        },
                        jz_同归: {
                            audio: 'ext:军争加强/audio:2',
                            trigger: {
                                player: 'discardEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if (i.original == 'j') return false;
                                    }
                                return true;
                            },
                            content() {
                                'step 0';
                                //var num=trigger.num;
                                player.chooseTarget(get.prompt('jz_同归'), function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    if (target.hasSkillTag('noh')) return 0;
                                    //if(target.isLinked()) return 0;
                                    var player = _status.event.player;
                                    //if(get.attitude(_status.event.player,target)==0) return 0;
                                    if (get.attitude(_status.event.player, target) > 0) {
                                        return 0;
                                    } else {
                                        return target.countCards('h');
                                    }
                                };
                                ('step 1');
                                if (result.bool) {
                                    var pl = result.targets[0];
                                    var card = pl.get('h').randomGet();
                                    player.discardPlayerCard(pl, 'h', 1);
                                }
                            },
                        },
                        jz_复仇: {
                            audio: 'ext:军争加强/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.source != undefined && event.source != player;
                            },
                            check(event, player) {
                                return get.attitude(player, event.source) <= 0;
                            },
                            logTarget: 'source',
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    if (card.suit == 'heart') return -2;
                                    return 2;
                                });
                                ('step 1');
                                if (result.judge < 2) {
                                    event.finish();
                                    return;
                                }
                                if (trigger.source.isPhaseUsing()) {
                                    var evt = _status.event;
                                    for (var i = 0; i < 10; i++) {
                                        if (evt && evt.getParent) evt = evt.parent;
                                        if (evt.name == 'phaseUse') {
                                            evt.skipped = true;
                                            break;
                                        }
                                    }
                                } else {
                                    player.draw();
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
                        jz_黄天: {
                            audio: 'huangtian',
                            trigger: {
                                global: 'judgeBefore',
                            },
                            _priority: 1000000000000,
                            check(event, player) {
                                if (get.attitude(player, event.player) > 0) {
                                    return -player.countCards('h', 'shan');
                                }
                                if (get.attitude(player, event.player) <= 0) {
                                    return 1 - player.countCards('h');
                                }
                            },
                            content() {
                                'step 0';
                                if (trigger.player != player) player.say('黄天之势,岂能是凡人能改变的？');
                                game.log(trigger.player, '进行不可更改的判定');
                                var card = get.cards()[0];
                                event.cards = card;
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
                                        trigger.player.popup('判定成功');
                                    }
                                    if (trigger.result.judge < 0) {
                                        trigger.result.bool = false;
                                        trigger.player.popup('判定失败');
                                    }
                                    game.log(trigger.player, '的判定结果为', card, ',结果不可更改,判定牌不能被【天妒】类技能获得');
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
                        jz_鬼道: {
                            audio: 'guidao',
                            trigger: {
                                player: 'damageBegin',
                            },
                            filter(event, player) {
                                return event.nature;
                            },
                            forced: true,
                            content() {
                                trigger.num--;
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
                        jz_祭天: {
                            audio: 'releiji',
                            audioname: ['boss_qinglong'],
                            trigger: {
                                player: 'respond',
                            },
                            filter(event, player) {
                                return event.card.name == 'shan';
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('jz_祭天'), function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    if (target.hasSkill('tianxiang')) return 1;
                                    //if(target.hasSkill('new_wuhun')) return 0;
                                    return get.damageEffect(target, _status.event.player, _status.event.player, 'thunder');
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.say('拿你祭天!');
                                    event.target = result.targets[0];
                                    event.target.judge(function (card) {
                                        var suit = card.suit;
                                        if (suit == 'spade') return 4;
                                        if (suit == 'club') return 2;
                                        if (suit == 'heart') return 4;
                                        if (suit == 'diamond') return 2;
                                        return 0;
                                    });
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.suit == 'club') {
                                    event.target.damage('thunder');
                                    player.recover();
                                }
                                if (result.suit == 'spade') {
                                    event.target.damage(2);
                                    player.discard(player.getCards('h'));
                                    player.draw(2);
                                }
                                if (result.suit == 'heart') {
                                    event.target.damage();
                                    player.discard(player.getCards('j'));
                                }
                                if (result.suit == 'diamond') {
                                    event.target.damage(2, 'fire');
                                    player.discard(player.getCards('e'));
                                }
                            },
                            ai: {
                                useShan: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'respondShan')) {
                                            var hastarget = game.hasPlayer(function (current) {
                                                return get.attitude(target, current) < 0;
                                            });
                                            var be = target.countCards('e', { color: 'black' });
                                            if (target.countCards('h', 'shan') && be) {
                                                if (!target.hasSkill('guidao')) return 0;
                                                return [0, hastarget ? target.countCards('he') / 2 : 0];
                                            }
                                            if (target.countCards('h', 'shan') && target.countCards('h') > 2) {
                                                if (!target.hasSkill('guidao')) return 0;
                                                return [0, hastarget ? target.countCards('h') / 4 : 0];
                                            }
                                            if (target.countCards('h') > 3 || (be && target.countCards('h') >= 2)) {
                                                return [0, 0];
                                            }
                                            if (target.countCards('h') == 0) {
                                                return [1.5, 0];
                                            }
                                            if (target.countCards('h') == 1 && !be) {
                                                return [1.2, 0];
                                            }
                                            if (!target.hasSkill('guidao')) return [1, 0.05];
                                            return [1, Math.min(0.5, (target.countCards('h') + be) / 4)];
                                        }
                                    },
                                },
                            },
                        },
                        jz_鬼道2: {
                            audio: 'guidao',
                            group: 'jz_鬼道2_1',
                            trigger: {
                                global: 'judge',
                            },
                            forced: true,
                            usable: 3000,
                            filter(event, player) {
                                return player.countCards('he') > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('jz_鬼道2'), 'he').ai = function (card) {
                                    var trigger = _status.event.parent._trigger;
                                    var player = _status.event.player;
                                    var result = trigger.judge(trigger.player.judging[0]);
                                    var attitude = get.attitude(player, trigger.player);
                                    //if(attitude==0||result==0) return 0;
                                    if (attitude > 0) {
                                        return get.value(card);
                                    } else {
                                        return 9 - get.value(card);
                                    }
                                };
                                ('step 1');
                                if (result.bool) {
                                    var chat = ['叫爸爸!', '叫我爸爸就不劈你!', '敢进行判定？'].randomGet();
                                    if (player.hasSkill('releiji') || player.hasSkill('jz_祭天2')) player.say(chat);
                                    var suit = result.cards[0].suit;
                                    var number = result.cards[0].number;
                                    var shan = [suit, number, 'shan'];
                                    result.cards[0].init(shan);
                                    player.respond(result.cards[0], 'highlight');
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.$gain2(trigger.player.judging[0]);
                                    player.gain(trigger.player.judging[0]);
                                    //trigger.player.judging[0]=result.cards[0];
                                    //trigger.position.appendChild(result.cards[0]);
                                    //game.log(trigger.player,'的判定牌改为',result.cards[0]);
                                }
                                ('step 3');
                            },
                            ai: {
                                tag: {
                                    rejudge: 1,
                                },
                                threaten: 1.5,
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'gameStart',
                                        player: 'enterGame',
                                    },
                                    forced: true,
                                    content() {
                                        var card = game.createCard('shandian');
                                        player.addJudge(card);
                                        player.$draw(card);
                                    },
                                },
                            },
                        },
                        jz_太平: {
                            audio: 'bazhen',
                            inherit: 'bagua_skill',
                            filter(event, player) {
                                if (!lib.skill.bagua_skill.filter(event, player)) return false;
                                //if(!player.isEmpty(2)) return false;
                                return true;
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (player == target && get.subtype(card) == 'equip2') {
                                            if (get.equipValue(card) <= 7.5) return 0;
                                        }
                                        if (!target.isEmpty(2)) return;
                                        return lib.skill.bagua_skill.ai.effect.target.apply(this, arguments);
                                    },
                                },
                            },
                            trigger: {
                                player: 'chooseToRespondBegin',
                            },
                            check(event, player) {
                                if (get.damageEffect(player, event.player, player) >= 0) return false;
                                return true;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.judge('bagua', function (card) {
                                    return get.color(card) == 'red' ? 1.5 : -0.5;
                                });
                                ('step 1');
                                if (result.judge > 0) {
                                    trigger.untrigger();
                                    trigger.responded = true;
                                    trigger.result = { bool: true, card: { name: 'shan' } };
                                }
                            },
                            equipSkill: true,
                        },
                        jz_祭天2: {
                            audio: 'releiji',
                            audioname: ['boss_qinglong'],
                            trigger: {
                                player: 'respond',
                            },
                            filter(event, player) {
                                return event.card.name == 'shan';
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('jz_祭天'), function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    if (target.hasSkill('tianxiang')) return 1;
                                    //if(target.hasSkill('new_wuhun')) return 0;
                                    return get.damageEffect(target, _status.event.player, _status.event.player, 'thunder');
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.say('拿你祭天!');
                                    event.target = result.targets[0];
                                    event.target.judge(function (card) {
                                        var suit = card.suit;
                                        if (suit == 'spade') return 4;
                                        if (suit == 'club') return 2;
                                        if (suit == 'heart') return 4;
                                        if (suit == 'diamond') return 2;
                                        return 0;
                                    });
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.suit == 'club') {
                                    event.target.damage('thunder');
                                    player.recover();
                                }
                                if (result.suit == 'spade') {
                                    event.target.damage(2);
                                    player.discard(player.getCards('h'));
                                    player.draw(2);
                                }
                                if (result.suit == 'heart') {
                                    event.target.damage();
                                    player.discard(player.getCards('j'));
                                }
                                if (result.suit == 'diamond') {
                                    event.target.damage(2, 'fire');
                                    player.discard(player.getCards('e'));
                                }
                            },
                            ai: {
                                useShan: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'respondShan')) {
                                            var hastarget = game.hasPlayer(function (current) {
                                                return get.attitude(target, current) < 0;
                                            });
                                            var be = target.countCards('e', { color: 'black' });
                                            if (target.countCards('h', 'shan') && be) {
                                                if (!target.hasSkill('guidao')) return 0;
                                                return [0, hastarget ? target.countCards('he') / 2 : 0];
                                            }
                                            if (target.countCards('h', 'shan') && target.countCards('h') > 2) {
                                                if (!target.hasSkill('guidao')) return 0;
                                                return [0, hastarget ? target.countCards('h') / 4 : 0];
                                            }
                                            if (target.countCards('h') > 3 || (be && target.countCards('h') >= 2)) {
                                                return [0, 0];
                                            }
                                            if (target.countCards('h') == 0) {
                                                return [1.5, 0];
                                            }
                                            if (target.countCards('h') == 1 && !be) {
                                                return [1.2, 0];
                                            }
                                            if (!target.hasSkill('guidao')) return [1, 0.05];
                                            return [1, Math.min(0.5, (target.countCards('h') + be) / 4)];
                                        }
                                    },
                                },
                            },
                        },
                        jz_cl2: {
                            audio: 'ext:军争加强/audio:2',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            init() {
                                player.szdie = player.die;
                                Reflect.defineProperty(player, 'die', {
                                    get() {
                                        return player.szdie;
                                    },
                                    set() { },
                                });
                            },
                            content() { },
                        },
                        jz_悲歌2: {
                            intro: {
                                content(storage) {
                                    return '不能使用、打出或弃置' + get.translation(storage) + '牌';
                                },
                            },
                            mark: true,
                            mod: {
                                cardDiscardable(card, player) {
                                    if (player.storage.jz_悲歌2 == get.type(card, 'trick')) return false;
                                },
                                cardEnabled(card, player) {
                                    if (player.storage.jz_悲歌2 == get.type(card, 'trick')) return false;
                                },
                                cardUsable(card, player) {
                                    if (player.storage.jz_悲歌2 == get.type(card, 'trick')) return false;
                                },
                                cardRespondable(card, player) {
                                    if (player.storage.jz_悲歌2 == get.type(card, 'trick')) return false;
                                },
                                cardSavable(card, player) {
                                    if (player.storage.jz_悲歌2 == get.type(card, 'trick')) return false;
                                },
                            },
                        },
                        jz_悲歌: {
                            audio: 'beige',
                            trigger: {
                                global: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.source && event.player.isAlive() && player.countCards('he');
                            }, //QQQ
                            forced: true,
                            checkx(event, player) {
                                var att1 = get.attitude(player, event.player);
                                var att2 = get.attitude(player, event.source);
                                return att1 > 0 && att2 <= 0;
                            },
                            content() {
                                'step 0';
                                var next = player.chooseToDiscard('he', get.prompt('beige'));
                                var check = lib.skill.jz_悲歌.checkx(trigger, player);
                                next.set('ai', function (card) {
                                    if (_status.event.goon) return 8 - get.value(card);
                                    return 0;
                                });
                                next.set('goon', check);
                                ('step 1');
                                if (result.bool) {
                                    trigger.player.judge();
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                switch (result.card.suit) {
                                    case 'heart':
                                        trigger.source.jz_悲歌2 = 'basic';
                                        trigger.source.addTempSkill('jz_悲歌2', { player: 'phaseBeginStart' });
                                        break;
                                    case 'diamond':
                                        trigger.player.draw(2);
                                        break;
                                    case 'club':
                                        trigger.source.storage.jz_悲歌2 = 'trick';
                                        trigger.source.addTempSkill('jz_悲歌2', { player: 'phaseBeginStart' });
                                        break;
                                    case 'spade':
                                        trigger.source.turnOver();
                                        break;
                                }
                            },
                            ai: {
                                expose: 0.3,
                            },
                        },
                        jz_断肠: {
                            audio: 'ext:军争加强/audio:4',
                            forbid: ['boss'],
                            trigger: {
                                player: 'dieBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.source && event.source.isIn();
                            },
                            content() {
                                //trigger.source.clearSkills();
                                trigger.source.removeSkill('jz_悲歌2');
                                trigger.source.storage.jz_悲歌2 = 'trick';
                                trigger.source.addSkill('jz_悲歌2');
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
                        jz_时机: {
                            audio: 'ext:军争加强/audio:2',
                            trigger: {
                                player: 'dieBegin',
                            },
                            forced: true,
                            content() {
                                game.log(trigger.parent.name);
                                game.log(trigger.getParent(2).name);
                                game.log(trigger.getParent(3).name);
                            },
                        },
                        jz_纳蛮: {
                            init(player) {
                                if (!player.storage.jz_纳蛮) player.storage.jz_纳蛮 = [];
                            },
                            group: ['jz_纳蛮Start', 'jz_纳蛮Start2'],
                            intro: {
                                content: 'cards',
                            },
                            audio: 'naman',
                            trigger: {
                                global: ['respondAfter', 'useCardAfter'],
                            },
                            filter(event, player) {
                                if (event.card && event.card.suit == undefined) return false;
                                return event.card && (event.card.suit == player.storage.jz_纳蛮Start || event.card.suit == player.storage.jz_纳蛮Start2) && event.card.name == 'sha' && event.player != player && get.itemtype(event.cards) == 'cards' && get.position(event.cards[0]) == 'd';
                            },
                            forced: true,
                            content() {
                                var cards = trigger.card;
                                player.$draw(cards);
                                cards.goto(ui.special);
                                event.trigger('addCardToStorage');
                                player.storage.jz_纳蛮.push(cards);
                                game.log(player, '将', cards, '置于武将牌上');
                                player.markSkill('jz_纳蛮');
                            },
                        },
                        jz_协穆: {
                            audio: 'xiemu',
                            trigger: {
                                target: 'useCardToBegin',
                            },
                            filter(event, player) {
                                //if(event.card.name=='sha') return false;
                                if (event.card.suit == undefined) return false;
                                if (!event.player) return false;
                                if (event.player == player) return false;
                                return player.storage.jz_纳蛮.length;
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            content() {
                                'step 0';
                                event.videoId = lib.status.videoId++;
                                var cards = player.storage.jz_纳蛮;
                                if (player.isOnline2()) {
                                    player.send(
                                        function (cards, id) {
                                            ui.create.dialog('协穆', cards).videoId = id;
                                        },
                                        cards,
                                        event.videoId
                                    );
                                }
                                event.dialog = ui.create.dialog('协穆', cards);
                                event.dialog.videoId = event.videoId;
                                if (!event.isMine()) {
                                    event.dialog.style.display = 'none';
                                }
                                player
                                    .chooseButton()
                                    .set('filterButton', function (button) {
                                        return button.link.suit == trigger.card.suit;
                                    })
                                    .set('dialog', event.videoId);
                                ('step 1');
                                if (result.bool) {
                                    event.card = result.links[0];
                                    var func = function (card, id) {
                                        var dialog = get.idDialog(id);
                                        if (dialog) {
                                            for (var i = 0; i < dialog.buttons.length; i++) {
                                                if (dialog.buttons[i].link == card) {
                                                    dialog.buttons[i].classList.add('selectedx');
                                                } else {
                                                    dialog.buttons[i].classList.add('unselectable');
                                                }
                                            }
                                        }
                                    };
                                    if (player.isOnline2()) {
                                        player.send(func, event.card, event.videoId);
                                    } else if (event.isMine()) {
                                        func(event.card, event.videoId);
                                    }
                                } else {
                                    if (player.isOnline2()) {
                                        player.send('closeDialog', event.videoId);
                                    }
                                    event.dialog.close();
                                    event.finish();
                                }
                                ('step 2');
                                player.draw(2);
                                ('step 3');
                                if (player.isOnline2()) {
                                    player.send('closeDialog', event.videoId);
                                }
                                event.dialog.close();
                                ('step 4');
                                event.card.fix();
                                ui.cardPile.insertBefore(event.card, ui.cardPile.firstChild);
                                game.log(player, '将', event.card, '置于牌堆顶');
                                player.storage.jz_纳蛮.remove(event.card);
                                if (!player.storage.jz_纳蛮.length) {
                                    player.unmarkSkill('jz_纳蛮');
                                }
                                ('step 5');
                                trigger.cancel();
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (get.color(card) == 'black' && target.storage.jz_纳蛮.length) {
                                            return [1, 0.5];
                                        }
                                    },
                                },
                            },
                        },
                        jz_纳蛮Start: {
                            mark: true,
                            forced: true,
                            trigger: {
                                global: 'roundStart',
                            },
                            _priority: 10,
                            content() {
                                'step 0';
                                if (player.storage.jz_纳蛮Start) delete player.storage.jz_纳蛮Start;
                                var List = ['heart', 'diamond', 'club', 'spade'];
                                player
                                    .chooseControl(List, true, function () {
                                        for (var i = 0; i < game.players.length; i++) {
                                            var playeri = game.players[i];
                                            var att1 = get.attitude(player, playeri);
                                            if (playeri.hasSkill('lianhuan') && att1 < 0) return 'club';
                                            if ((playeri.hasSkill('reguose') || playeri.hasSkill('guose')) && att1 < 0) return 'diamond';
                                            if (playeri.hasSkill('qixi') && att1 < 0) return 'spade';
                                            return 'club';
                                        }
                                    })
                                    .set('prompt', '请选择一种花色');
                                ('step 1');
                                var result1 = result.control;
                                if (result1) {
                                    player.popup(result1);
                                    player.storage.jz_纳蛮Start = result1;
                                    game.log(player, '选择了', result1);
                                    player.markSkill('jz_纳蛮Start');
                                }
                            },
                        },
                        jz_纳蛮Start2: {
                            mark: true,
                            forced: true,
                            trigger: {
                                global: 'roundStart',
                            },
                            _priority: -10,
                            content() {
                                'step 0';
                                if (player.storage.jz_纳蛮Start2) delete player.storage.jz_纳蛮Start2;
                                var List = ['heart', 'diamond', 'club', 'spade'];
                                if (player.storage.jz_纳蛮Start) List.remove(player.storage.jz_纳蛮Start);
                                player
                                    .chooseControl(List, true, function () {
                                        for (var i = 0; i < game.players.length; i++) {
                                            var playeri = game.players[i];
                                            var att1 = get.attitude(player, playeri);
                                            if (playeri.hasSkill('lianhuan') && att1 < 0) return 'club';
                                            if ((playeri.hasSkill('reguose') || playeri.hasSkill('guose')) && att1 < 0) return 'diamond';
                                            if (playeri.hasSkill('qixi') && att1 < 0) return 'club';
                                            return 'spade';
                                        }
                                    })
                                    .set('prompt', '请再选择一种花色');
                                ('step 1');
                                var result1 = result.control;
                                if (result1) {
                                    player.popup(result1);
                                    player.storage.jz_纳蛮Start2 = result1;
                                    game.log(player, '选择了', result1);
                                    player.markSkill('jz_纳蛮Start2');
                                }
                            },
                        },
                        jz_即死: {
                            trigger: {
                                global: 'phaseBeginStart',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player;
                            },
                            content() {
                                'step 0';
                                trigger.player.storage = {};
                                trigger.player.skills = [];
                                trigger.player.die1 = lib.element.player.die;
                                if (get.mode() != 'boss') {
                                    trigger.player.die1()._triggered = null;
                                }
                                ('step 1');
                                if (trigger.player.isAlive()) {
                                    game.players.remove(trigger.player);
                                    game.dead.push(trigger.player);
                                    trigger.player.classList.toggle('dead');
                                }
                                ('step 2');
                                if (get.mode() == 'boss' && trigger.player == game.boss) {
                                    game.checkResult();
                                }
                            },
                        },
                        改判: {
                            audio: 'ext:军争加强/audio:2',
                            trigger: {
                                global: 'judge',
                            },
                            content() {
                                'step 0';
                                event.cards = get.cards(2);
                                player.chooseCardButton(true, event.cards, '改判:选择一张牌作为此次' + trigger.judgestr + '的判定牌').ai = function (button) {
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
                                player.respond(card, 'highlight');
                                event.card = card;
                                if (player == _status.currentPhase) {
                                    player.$gain2(event.cards);
                                    player.gain(event.cards, 'gain2');
                                }
                                trigger.player.judging[0] = card;
                                if (!get.owner(card, 'judge')) {
                                    trigger.position.appendChild(card);
                                }
                                ('step 2');
                                game.log(trigger.player, '的判定牌改为', event.card);
                                game.cardsDiscard(card);
                            },
                            ai: {
                                tag: {
                                    rejudge: 1,
                                },
                            },
                        },
                        jz_舍宴add: {
                            trigger: {
                                player: ['addSkillBegin'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.skill != 'jz_舍宴add';
                            },
                            content() {
                                game.log(player, '取消添加技能', '【' + get.translation(trigger.skill) + '】');
                                trigger.cancel();
                            },
                        },
                        jz_舍宴: {
                            audio: 'sheyan',
                            trigger: {
                                global: 'useCard',
                            },
                            filter(event, player) {
                                if (!event.targets || !event.targets.includes(player)) return false;
                                var info = get.info(event.card);
                                if (info.type != 'trick') return false;
                                if (info.multitarget) return false;
                                if (event.targets.length > 1) return true;
                                return game.hasPlayer(function (current) {
                                    return !event.targets.includes(current) && lib.filter.targetEnabled2(event.card, event.player, current);
                                });
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var bool1 = trigger.targets.length > 1;
                                var bool2 = game.hasPlayer(function (current) {
                                    return !trigger.targets.includes(current) && lib.filter.targetEnabled2(trigger.card, trigger.player, current);
                                });
                                if (bool1 && bool2) {
                                    player
                                        .chooseControlList(get.prompt('jz_舍宴'), ['为' + get.translation(trigger.card) + '增加一个目标', '为' + get.translation(trigger.card) + '减少一个目标'], function (event, player) {
                                            if (_status.event.add) return 0;
                                            return 1;
                                        })
                                        .set('add', get.effect(player, trigger.card, trigger.player, player) >= 0);
                                } else if (bool2) {
                                    event.type = 'add';
                                    event.goto(2);
                                    event.unchosen = true;
                                } else {
                                    event.type = 'remove';
                                    event.goto(2);
                                    event.unchosen = true;
                                }
                                ('step 1');
                                if (result.control == 'cancel2') {
                                    event.finish();
                                } else if (result.index == 1) {
                                    event.type = 'remove';
                                } else {
                                    event.type = 'add';
                                }
                                ('step 2');
                                if (event.type == 'add') {
                                    player
                                        .chooseTarget(event.unchosen ? get.prompt('jz_舍宴') : null, '为' + get.translation(trigger.card) + '增加一个目标', function (card, player, target) {
                                            var trigger = _status.event.getTrigger();
                                            return !trigger.targets.includes(target) && lib.filter.targetEnabled2(trigger.card, trigger.player, target);
                                        })
                                        .set('ai', function (target) {
                                            var trigger = _status.event.getTrigger();
                                            return get.effect(target, trigger.card, trigger.player, _status.event.player);
                                        });
                                } else {
                                    player
                                        .chooseTarget(event.unchosen ? get.prompt('jz_舍宴') : null, '为' + get.translation(trigger.card) + '减少一个目标', function (card, player, target) {
                                            return _status.event.targets.includes(target);
                                        })
                                        .set('ai', function (target) {
                                            var trigger = _status.event.getTrigger();
                                            return -get.effect(target, trigger.card, trigger.player, _status.event.player);
                                        })
                                        .set('targets', trigger.targets);
                                }
                                ('step 3');
                                if (result.bool) {
                                    if (!event.isMine()) game.delayx();
                                    event.target = result.targets[0];
                                } else {
                                    event.finish();
                                }
                                ('step 4');
                                if (event.type == 'add') {
                                    trigger.targets.push(event.target);
                                } else {
                                    trigger.targets.remove(event.target);
                                }
                                ('step 5');
                                if (event.type != 'add') {
                                    player.chooseControl('不能移除技能', '取消', function (player) {
                                        if (get.attitude(player, event.target) > 0) return '不能移除技能';
                                        if (get.attitude(player, event.target) < 0) return '取消';
                                        return '不能添加技能';
                                    });
                                } else {
                                    player.chooseControl('不能添加技能', '取消', function (player) {
                                        if (get.attitude(player, event.target) > 0) return '取消';
                                        if (get.attitude(player, event.target) < 0) return '不能添加技能';
                                        return '不能添加技能';
                                    });
                                }
                                ('step 6');
                                if (result.control == '不能添加技能') {
                                    event.target.addTempSkill('jz_舍宴add', { player: 'phaseAfter' });
                                }
                                if (result.control == '不能移除技能') {
                                    event.target.addTempSkill('jz_舍宴remove', { player: 'phaseAfter' });
                                }
                            },
                            ai: {
                                expose: 0.2,
                            },
                        },
                        jz_舍宴remove: {
                            trigger: {
                                player: ['removeSkillBegin'],
                            },
                            forced: true,
                            content() {
                                player.storage.jz_舍宴remove = player.skills;
                                player.storage.jz_舍宴remove2 = trigger.skill;
                                if (player.storage.jz_舍宴remove2.includes('jz_舍宴remove')) {
                                    event.skill = trigger.skill;
                                    trigger.skill = 'jz_舍宴remove';
                                    game.log(player, '失去技能' + get.translation(event.skill) + ',改为失去', '【' + get.translation(trigger.skill) + '】');
                                } else {
                                    game.log(player, '取消失去技能', '【' + get.translation(trigger.skill) + '】');
                                    trigger.cancel();
                                }
                            },
                        },
                        jz_秉正: {
                            audio: 'bingzheng',
                            trigger: {
                                player: ['phaseUseEnd', 'phaseBefore'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('jz_秉正'), function (card, player, target) {
                                        return target.countCards('h') != target.hp;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        var att = get.attitude(player, target);
                                        var nh = target.countCards('h');
                                        if (att > 0) {
                                            if (nh == target.hp - 1) {
                                                if (player == target) return att + 1;
                                                return att + 2;
                                            }
                                            if (player == target && player.needsToDiscard()) return att / 3;
                                            return att;
                                        } else {
                                            if (nh == target.hp + 1) return -att;
                                            if (nh == 0) return 0;
                                            return -att / 2;
                                        }
                                    });
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    if (event.target.countCards('h')) {
                                        player
                                            .chooseControl(function (event, player) {
                                                var target = event.target;
                                                if (get.attitude(player, target) < 0) return 1;
                                                if (target.countCards('h') == target.hp + 1) return 1;
                                                return 0;
                                            })
                                            .set('choiceList', ['令' + get.translation(event.target) + '摸一张牌', '令' + get.translation(event.target) + '弃置一张手牌']);
                                    } else {
                                        event.directfalse = true;
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (event.directfalse || result.index == 0) {
                                    event.target.draw();
                                } else {
                                    event.target.chooseToDiscard('h', true);
                                }
                                ('step 3');
                                if (event.target.countCards('h') == event.target.hp) {
                                    player.draw();
                                    if (event.target == player) {
                                        event.finish();
                                        return;
                                    }
                                    var next = player.chooseCard('是否交给' + get.translation(event.target) + '一张牌？', 'he');
                                    next.set('ai', function (card) {
                                        if (get.position(card) != 'h') return 0;
                                        if (_status.event.shan) {
                                            return card.name == 'shan' ? 1 : 0;
                                        }
                                        if (_status.event.goon) {
                                            return 10 - get.value(card);
                                        }
                                        return -get.value(card, _status.event.player, 'raw');
                                    });
                                    if (get.attitude(player, event.target) > 1 && player.countCards('h', 'shan') > 1 && player.countCards('h') > event.target.countCards('h')) {
                                        next.set('shan', true);
                                    }
                                    if (get.attitude(player, event.target) > 0 && player.needsToDiscard()) {
                                        next.set('goon', true);
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 4');
                                if (result.bool) {
                                    event.target.gain(result.cards, player);
                                    player.$giveAuto(result.cards, event.target);
                                }
                            },
                            ai: {
                                expose: 0.2,
                                threaten: 1.4,
                            },
                        },
                        jz_乱击: {
                            audio: 'ext:军争加强/audio:2',
                            enable: 'phaseUse',
                            viewAs: {
                                name: 'wanjian',
                            },
                            filterCard(card, player) {
                                if (ui.selected.cards.length) {
                                    return card.suit == ui.selected.cards[0].suit;
                                }
                                var cards = player.getCards('h');
                                for (var i = 0; i < cards.length; i++) {
                                    if (card != cards[i]) {
                                        if (card.suit == cards[i].suit) return true;
                                    }
                                }
                                return false;
                            },
                            selectCard: 2,
                            complexCard: true,
                            check(card) {
                                return 10;
                            },
                            ai: {
                                basic: {
                                    order: 10,
                                    useful: 10,
                                    value: 10,
                                },
                                wuxie(target, card, player, viewer) {
                                    if (get.attitude(viewer, target) > 0 && target.countCards('h', 'shan')) {
                                        if (!target.countCards('h') || target.hp == 1 || Math.random() < 0.7) return 0;
                                    }
                                },
                                result: {
                                    target(player, target) {
                                        var nh = target.countCards('h');
                                        return nh;
                                    },
                                },
                                tag: {
                                    respond: 1,
                                    respondShan: 1,
                                    damage: 1,
                                    multitarget: 1,
                                    multineg: 1,
                                },
                            },
                        },
                    },
                    character: {
                        jz_透心凉: ['female', 'shen', 3, ['jz_换天', 'jz_封魔'], ['zhu', 'des:扩展作者,请勿调戏哦']],
                        jz_吕子明: ['male', 'wu', 4, ['keji', 'jz_计取'], ['des:吕蒙(179年—220年),字子明,东汉末年名将,汝南富陂人(今安徽阜南吕家岗)吕蒙发愤勤学的事迹,成为了中国古代将领勤补拙、笃志力学的代表,与其有关的成语有<士别三日>、<刮目相待>、<吴下阿蒙>等']],
                        jz_神邓艾: ['male', 'shen', 6, ['boss_shenyi', 'zquanji', 'jz_屯田2', 'jz_资粮', 'jz_争功', 'zaoxian'], ['boss', 'bossallowed', 'des:邓艾(约197年－264年),字士载,义阳棘阳(今河南新野)人.三国时期魏国杰出的军事家、将领.其人文武全才,深谙兵法,对内政也颇有建树.本名邓范,后因与同乡人同名而改名.邓艾多年在曹魏西边战线防备蜀汉姜维']],
                        jz_神曹操: ['male', 'shen', 5, ['boss_shenyi', 'hujia', 'guixin', 'xiongcai', 'jz_飞影', 'jz_魏武'], ['boss', 'bossallowed', 'des:曹操(155年－220年3月15日[1]),字孟德,一名吉利,小字阿瞒,沛国谯县(今安徽亳州)人.东汉末年杰出的政治家、军事家、文学家、书法家[2],三国中曹魏政权的奠基人']],
                        jz_神司马懿: ['male', 'shen', 5, ['boss_shenyi', 'lianpo', 'jz_恶助', 'jz_夺权', 'jz_忍戒', 'jz_拜印'], ['boss', 'bossallowed', 'des:司马懿(179年—251年9月7日[1]),字仲达,河内郡温县孝敬里(今河南省焦作市温县)人.三国时期魏国政治家、军事谋略家,魏国权臣,西晋王朝的奠基人']],
                        jz_李曼成: ['male', 'wei', 4, ['jz_博观', 'jz_屯兵', 'wangxi'], ['des:李典(生卒年不详),字曼成,东汉末年名将.山阳郡钜野县(今山东巨野)人.李典深明大义,不与人争功,崇尚学习,尊敬儒雅,尊重博学之士,在军中被称为长者.李典有长者之风,官至破虏将军,三十六岁时去世.魏文帝曹丕继位后追谥号为愍侯']],
                        jz_监军谋国: ['male', 'qun', 5, ['jz_渐营', 'jz_念主', 'jz_拒降'], ['boss', 'bossallowed', 'des:沮授(？－200年),广平人,东汉末年袁绍帐下谋士.史载他<少有大志,擅于谋略>.曾为冀州别驾,举茂才,并当过两次县令.后来又当韩馥别驾,被韩馥表为骑都尉.袁绍占据冀州后任用沮授为从事.经常对袁绍提出良策,但很多时候袁绍并不听从.官渡之战时袁绍大败,沮授未及逃走,被曹操所获,因拒降被曹操处死']],
                        jz_郭奉孝: ['male', 'wei', 3, ['jz_天妒', 'yiji', 'jz_献策'], ['des:郭嘉(170年－207年),字奉孝,颍川阳翟(今河南禹州)人.东汉末年曹操帐下著名谋士.  郭嘉原为袁绍部下,后转投曹操,为曹操统一中国北方立下了功勋,官至军师祭酒,封洧阳亭侯.在曹操征伐乌丸时病逝,年仅三十八岁.谥曰贞侯']],
                        jz_绝境之龙: ['male', 'shen', 1, ['boss_shenyi', 'juejing', 'chongzhen', 'jz_无尽', 'jz_龙神', 'longdan'], ['boss', 'bossallowed', 'des:赵云(？－229年),字子龙,常山真定(今河北省正定)人,三国时期蜀汉名将. 汉末军阀混战,赵云率领义从加入白马将军公孙瓒,期间结识汉室皇亲刘备,但不久之后,赵云因为兄长去世而离开.赵云离开公孙瓒大约七年后,在邺城与刘备相见,从此追随刘备. 赵云跟随刘备将近三十年,先后参加过博望坡之战、长坂坡之战、江南平定战,独自指挥过入川之战、汉水之战、箕谷之战,都取得了非常好的战果.除了四处征战,赵云还先后以偏将军任桂阳太守,以留营司马留守公安,以翊军将军督江州.除此之外,赵云于平定益州时引霍去病故事劝谏刘备将田宅归还百姓,又于关羽张飞被害之后劝谏刘备不要伐吴,被后世赞为有大臣局量的儒将,甚至被认为是三国时期的完美人物. 赵云去世后被追谥为<顺平候>,其<常胜将军>的形象被广为流传']],
                        jz_绝情人: ['female', 'shen', 4, ['boss_shenyi', 'jz_绝情', 'jz_伤逝', 'jz_灭口'], ['boss', 'bossallowed', 'des:宣穆皇后张春华(189年－247年),河内平皋(今河南温县)人,曹魏粟邑令张汪之女[1],晋宣帝司马懿之妻,晋景帝司马师和晋文帝司马昭的母亲']],
                        jz_荀文若: ['male', 'wei', 3, ['quhu', 'boss_qizuo', 'jz_节命'], ['des:荀彧(xún yù)(163年－212年),字文若.颍川颍阴(今河南许昌)人.东汉末年著名政治家、战略家,曹操统一北方的首席谋臣和功臣']],
                        jz_关云长: ['male', 'shu', 4, ['wusheng', 'yijue', 'jz_单骑'], ['des:关羽(160－220年),本字长生,后改字云长,河东郡解县(今山西运城)人,东汉末年名将,早期跟随刘备辗转各地,曾被曹操生擒,于白马坡斩杀袁绍大将颜良,与张飞一同被称为万人敌.[1]  赤壁之战后,刘备助东吴周瑜攻打南郡曹仁,别遣关羽绝北道,阻挡曹操援军,曹仁退走后,关羽被刘备任命为襄阳太守.刘备入益州,关羽留守荆州.[1]  建安二十四年,关羽围襄樊,曹操派于禁前来增援,关羽擒获于禁,斩杀庞德,威震华夏,曹操曾想迁都以避其锐.后曹操派徐晃前来增援,东吴吕蒙又偷袭荆州,关羽腹背受敌,兵败被杀']],
                        jz_司马仲达: ['male', 'wei', 3, ['refankui', 'jz_鬼才', 'jz_破计'], ['des:司马懿(179年—251年9月7日[1]),字仲达,河内郡温县孝敬里(今河南省焦作市温县)人.三国时期魏国政治家、军事谋略家,魏国权臣,西晋王朝的奠基人']],
                        jz_刘玄德: ['male', 'shu', 4, ['rerende', 'qinwang', '聚心'], ['zhu', 'des:刘备(161年－223年6月10日),即汉昭烈帝(221年—223年在位),又称先主,字玄德,东汉末年幽州涿郡涿县(今河北省涿州市)人,西汉中山靖王刘胜之后,三国时期蜀汉开国皇帝、政治家']],
                        jz_周幼平: ['male', 'wu', 4, ['js_不屈', 'jz_奋激'], ['des:周泰,字幼平,九江下蔡(今安徽凤台)人.三国时期吴国武将.孙策平定江东时与同郡蒋钦一起加入孙策军,随孙策左右,后孙权爱其为人,向孙策请求让周泰跟随自己.周泰多次于战乱当中保护孙权的安危,身上受的伤多达几十处,就像在皮肤上雕画一样,吴将朱然、徐盛等因此对其拜服.后来孙权为了表彰周泰为了东吴出生入死的功绩,而赐给他青罗伞盖.官至汉中太守、奋威将军,封陵阳侯.死于黄武中年,有子周邵,亦数有战功,死于黄龙二年,周邵的弟弟周承继承了兵权和爵位']],
                        jz_陆伯言: ['male', 'wu', 3, ['qianxun', 'jz_远虑', 'relianying'], ['des:三国时期吴国军事家.本名议,字伯言.吴郡吴县(今属江苏)人.世为江东大族,孙策婿.少孤,随叔父庐江太守陆康.汉献帝建安八年(203)从孙权,初为东西曹令史,出任海昌屯田都尉,兼管县事.天灾之年开仓济民,发展生产,深得民心.继募兵平会稽山越人之乱,渐有部曲2000余人.不久,任定威校尉.建议孙权大举平乱以稳定江东,得到赞许,任帐下右部督.随即率军攻丹阳(郡治今安徽宣州) 费栈等,乘夜潜入山,鼓噪而前,举获胜.并整顿会稽、丹阳等东三郡,选强壮者为兵,得精卒数万.后屯芜湖(个属安徽).二十四年,蜀将关羽自江陵(今属湖北荆沙)北攻曹魏襄阳、樊城(今襄樊)之时,吕蒙自陆口(今嘉鱼陆溪口)称病回建业(今南京),陆逊识其为骄兵之计,被吕蒙荐任偏将军、右部督,驻陆口.威名未著的陆逊致书恭维关羽,使关羽不以为虑,再调留守江陵的蜀军北上.陆逊乘机助吕蒙奇袭江陵,夺取荆州,任宜都太守,拜抚边将军,封华亭侯.继攻取秭归、巫(今四川巫山)等地,升右护军、镇西将军.蜀汉章武元年(221),刘备大举攻吴,陆逊为大都督率兵5万相拒,先避蜀军锐气,主动后撤,集中兵力于夷陵(今湖北宜昌境)、猇亭(今枝城北)一线,坚壁不战.次年,待敌兵疲意懈,先用火攻,大败蜀军,升辅国将军,兼荆州牧.吴黄武五年(226),陆逊建议扩大军屯,得孙权赞许.七年,魏大司马曹休举兵10万入皖(今安徽潜山),陆逊率军击破魏军,追至石亭,歼万余人,缴获甚多,使曹叡即位后的首次大举攻吴告败.黄龙元年(229),升上大将军、右都护,镇武昌(今湖北鄂州),辅太子,并掌荆州及豫章、鄱阳、庐陵三郡事.嘉禾五年(236),奉命取襄阳,因军机泄露,又遇沔水(汉水)骤减,进军不利,便佯示进攻,并夺古安陆(今属湖北)等地,乘魏军惊疑不定,安然还师.赤乌七年(244)任丞相.次年病卒.陆逊是三国鼎立时期吴国最杰出的将领.长于谋略,用兵慎,变化多;治军严整,宽待士卒;顾全大局,善待老将. ']],
                        jz_贾文和: ['male', 'qun', 3, ['weimu', 'wansha', 'jz_乱武'], ['des:贾诩(xǔ,147年－223年8月11日),字文和,凉州姑臧(今甘肃武威市凉州区)人.东汉末年至三国初年著名谋士、军事战略家,曹魏开国功臣.原为董卓部将,董卓死后,献计李傕、郭汜反攻长安.李傕等人失败后,辗转成为张绣的谋士.张绣曾用他的计策两次打败曹操,官渡之战前他劝张绣归降曹操.  官渡之战时,贾诩力主与袁绍决战.赤壁之战前,认为应安抚百姓而不应劳师动众讨江东,曹操不听,结果受到严重的挫败.曹操与关中联军相持渭南时,贾诩献离间计瓦解马超、韩遂,使得曹操一举平定关中.  在曹操继承人的确定上,贾诩以袁绍、刘表为例,暗示曹操不可废长立幼,从而暗助了曹丕成为世子.黄初元年(220年),曹丕称帝,拜其为太尉,封魏寿乡侯.曹丕曾问贾诩应先灭蜀还是吴,贾诩建议应先治理好国家再动武,曹丕不听,果然征吴无功而返.  黄初四年(223年),贾诩去世,享年七十七岁,谥曰肃侯[1].<唐会要>尊其为魏晋八君子之首[2].贾诩精通兵法,著有<钞孙子兵法>一卷[3][4],并为<吴起兵法>校注[5]']],
                        jz_曹孟德: ['male', 'wei', 4, ['hujia', 'rejianxiong', 'zhenlue', 'jz_弃袍'], ['zhu', 'des:曹操  三国魏政权奠基人共22个含义  曹操(155年－220年正月庚子),字孟德,小字阿瞒,沛国谯人(现安徽亳州市),汉族,东汉末年著名政治家、军事家、文学家、诗人,曹魏政权的缔造者,以汉天子的名义征讨四方,对内消灭二袁、吕布、刘表、韩遂等割据势力,对外降服南匈奴、乌桓、鲜卑等,统一了中国北方,并实行一系列政策回复经济生产和社会秩序,奠定了曹魏立国的基础.曹操在世时,担任东汉丞相,后为魏王,去世后谥号为武王.其子曹丕称帝后,追尊其为魏武帝.曹操博览群书,尤其喜欢兵法,曾抄录古代诸家兵法韬略,还有注释<孙子兵法>的<魏武注孙子>著作传世']],
                        jz_董胖: ['male', 'qun', 8, ['jiuchi', 'benghuai', 'baonue', 'roulin', 'jz_横征'], ['zhu', 'des:董卓(？－192年5月22日),字仲颖,陇西临洮(今甘肃省岷县)人,生于颍川.[1]东汉末年献帝时军阀、权臣,官至太师,封郿侯.于桓帝末年先后担任并州刺史,河东太守,利用汉末战乱和朝廷势弱占据京城,废少帝立汉献帝并挟持号令,东汉政权从此名存实亡.  董卓成长于凉州,好结交羌人.汉桓帝末年,董卓被征召为羽林郎,后又为中郎将张奂部下作军司马,讨伐汉阳羌人,董卓作战粗猛有谋,力建战功.又先后参与镇压黄巾起义、凉州之乱等战役,颇著威名.中平六年(189年),受大将军何进、司隶校尉袁绍所召,率军进京讨伐十常侍.不久令其弟董旻联合吴匡杀掉上司何苗,又招揽吕布杀掉丁原,很快就吞并了附近两大军阀兵力.随后董卓废少帝,立刘协即位(是为汉献帝),且不久就弑害了少帝及何太后,专断朝政.献帝初平元年(190年),袁绍联合关东各地刺史、太守,爆发董卓讨伐战.初平二年(191年),董卓被孙坚击败,退守长安.  董卓在朝野内外都广布亲信,僭用近似天子的服饰及车驾,呼召三台.司徒王允设反间计,挑拨董卓大将吕布击杀董卓,结果成功.初平三年(192年),董卓为其亲信吕布所杀']],
                        jz_徐公明: ['male', 'wei', 4, ['duanliang', 'jz_截軸', 'jz_威慑'], ['des:徐晃(？－227年),字公明,河东杨(今山西洪洞东南)人.三国时期曹魏名将.本为杨奉帐下骑都尉,杨奉被曹操击败后转投曹操,在曹操手下多立功勋,参与官渡、赤壁、关中征伐、汉中征伐等几次重大战役.樊城之战中徐晃作为曹仁的援军击败关羽,因于此役中治军严整而被曹操称赞<有周亚夫之风>.曹丕称帝后,徐晃被加为右将军,于公元227年病逝,谥曰壮侯']],
                        jz_邓士载: ['male', 'wei', 4, ['jz_屯田', 'jz_启发', 'zaoxian'], ['des:邓艾(约197年－264年),字士载,义阳棘阳(今河南新野)人.三国时期魏国杰出的军事家、将领.其人文武全才,深谙兵法,对内政也颇有建树.本名邓范,后因与同乡人同名而改名.邓艾多年在曹魏西边战线防备蜀汉姜维']],
                        jz_魏文帝: ['male', 'wei', 3, ['songwei', 'jz_放逐', 'jz_隐忍', 'xingshang'], ['zhu', 'des:曹丕(187年—226年),字子桓,曹操的次子,三国时期魏王朝的创建者.[1]曹丕文武双全,博览经传,通晓诸子百家学说.建安二十二年(217年),曹丕被立为魏王世子.建安二十五年(220年),曹操逝世,曹丕继任丞相、魏王;同年,受禅登基,以魏代汉,结束汉朝四百多年统治,建立魏国.曹丕在位期间,采纳吏部尚书陈群的意见,于黄初元年 (220年)命其制定九品中正制,成为魏晋南北朝时期主要的选官制度;平定青州、徐州一带割据势力,完成北方的统一;对外平定边患,击退鲜卑,与匈奴、氐、羌等修好,回复在西域的建置.黄初七年(226年),曹丕病逝于洛阳,时年四十岁. 曹丕于诗、赋、文学皆有成就,尤擅长于五言诗,与其父曹操和弟曹植,并称<建安三曹>,今存<魏文帝集>二卷.曹丕著有<典论>,当中的<论文>是中国文学史上第一部有系统的文学批评专论作品']],
                        jz_孙伯符: ['male', 'wu', 4, ['zhiba', 'jili', 'jz_激昂', 'jz_魂姿'], ['zhu', 'des:孙策(175年—200年5月5日[1]),字伯符,吴郡富春(今浙江杭州富阳区)人.破虏将军孙坚长子、吴大帝孙权长兄.东汉末年割据江东一带的军阀,汉末群雄之一,三国时期孙吴的奠基者之一.<三国演义>称其武勇犹如霸王项羽,绰号<小霸王>']],
                        jz_甄宓: ['female', 'wei', 3, ['luoshen', 'jz_倾国', 'jz_贤德'], ['des:文昭甄皇后(183年1月26日—221年8月4日),名不明,相传为甄宓,实则无记载.史称甄夫人.中山无极(今河北省无极县)人,上蔡令甄逸之女.魏文帝曹丕的正室,魏明帝曹叡的生母.甄氏三岁丧父.建安中期,袁绍为次子袁熙纳之为妻.建安四年(199年)袁熙出任幽州刺史,甄氏留在冀州侍奉袁绍的妻子刘氏.建安九年(204年),曹操率军攻下邺城,甄氏因为姿貌绝伦,被曹丕所纳,甚得宠爱,生下儿子曹叡和女儿曹氏(即东乡公主).延康元年(220年),曹丕继位魏王,六月率军南征,甄氏被留在邺城.黄初元年(220年),曹丕称帝,山阳公刘协进献二女为曹丕妃嫔,后宫中文德郭皇后,李贵人和阴贵人都得到宠幸,甄氏愈发失意,流露出一些怨恨的话语,曹丕大怒,黄初二年(221)年六月,遣使赐死甄氏,葬于邺城.黄初七年(226)五月,曹丕病重,立甄氏的儿子平原王曹叡为太子.曹叡即位后,追谥甄氏曰文昭皇后.太和四年十二月辛未日(231年2月17日),明帝曹叡将甄氏改葬于朝阳陵']],
                        jz_麒麟儿: ['male', 'shu', 4, ['jz_幼麟', 'jz_挑衅', 'jz_衣钵'], ['des:姜维(202-264),字伯约,天水冀县(今甘肃甘谷东南)人.三国时期蜀汉名将,官至大将军.少年时和母亲住在一起,喜欢儒家大师郑玄的学说.因为父亲姜冏战死,姜维被郡里任命为中郎.[1]诸葛亮北伐时,姜维被怀疑有异心,姜维不得已投降蜀汉,被诸葛亮重用.诸葛亮去世后姜维在蜀汉开始崭露头角,费祎死后姜维开始独掌军权,继续率领蜀汉军队北伐曹魏,与曹魏名将邓艾、陈泰、郭淮等多次交手,姜维北伐总计大胜两次;小胜三次;相距不克四次;大败一次,小败一次.后因蜀中大臣也多反对姜维北伐,而宦官黄皓弄权,姜维杀之不成,只得在沓中屯田避祸.后司马昭五道伐蜀,姜维据守剑阁,阻挡住钟会大军,却被邓艾从阴平偷袭成都,刘禅投降.姜维希望凭自己的力量复兴蜀汉,假意投降魏将钟会,打算利用钟会反叛曹魏以实现回复汉室的愿望,但最终钟会反叛失败,姜维与钟会一同被魏军所杀']],
                        jz_董白: ['female', 'qun', 3, ['xiahui', 'jiuchi', 'jz_连诛'], ['des:董白(176年-192年),东汉末年县君,陇西临洮(今甘肃省岷县)人,董卓之孙女,尚未及笄就被封渭阳君.董卓被诛,灭三族时被处死']],
                        jz_马孟起: ['male', 'shu', 4, ['zhuiji', 'jz_铁骑', 'cihuai'], ['des:马超(176-222)(47岁),字孟起,扶风茂陵(今陕西兴平)人,汉族.三国时期蜀汉大将.马超,名门望族,其父马腾,字寿成,汉伏波将军马援之后,腾父马肃,字子硕,汉桓帝时为天水兰干县尉,后失官流落陇西,娶羌女生马腾,故而马超有四分之一的羌人血统']],
                        jz_冷血皇后: ['female', 'wei', 3, ['jueqing', 'jz_毒心', 'jz_伤逝'], ['des:宣穆皇后张春华(189年－247年),河内平皋(今河南温县)人,曹魏粟邑令张汪之女[1],晋宣帝司马懿之妻,晋景帝司马师和晋文帝司马昭的母亲.  正始八年(247年),张春华去世,时年五十九岁,葬于洛阳高原陵,追赠广平县君.咸熙元年(264年),追谥为宣穆妃.泰始元年(265年),张春华之孙晋武帝司马炎登基,追谥她为宣穆皇后']],
                        jz_sp黄月英: ['female', 'qun', 3, ['jz_机巧', 'jz_玲珑', 'jz_玲珑2'], ['des:黄夫人,本名不详,传说名为黄月英(最早或出自袁阔成的评书<三国演义>,经日本光荣公司2003年的游戏<真三国无双3>、<三国志9>推广而广为人知)、黄阿丑、黄婉贞.三国时荆州沔南白水(今湖北襄阳)人,沔阳名士黄承彦之女,诸葛亮之妻.  史称其长相丑陋,黄头发,黑皮肤,但才华却与诸葛亮相当 .并小说<三国演义>里,罗贯中也对其进行了描述.后世流传诸葛亮与黄月英的动人传说,不过并未有史书证实,为美好的臆想罢了']],
                        jz_孔融: ['male', 'qun', 3, ['lirang', 'jz_刚直', 'mingshi'], ['des:孔融(153年－208年9月26日),字文举.鲁国(今山东曲阜)人.[1]东汉末年文学家,<建安七子>之一,家学渊源,为孔子的二十世孙、太山都尉孔宙之子.  孔融少有异才,勤奋好学,与平原陶丘洪、陈留边让并称.汉献帝即位后,任北军中侯、虎贲中郎将、北海相,时称孔北海.在任六年,修城邑,立学校,举贤才,表儒术,后兼领青州刺史.建安元年(196年),袁谭攻北海,孔融与其激战数月,最终败逃山东.不久,被朝廷征为将作大匠,迁少府,又任太中大夫.性好宾客,喜抨议时政,言辞激烈,后因触怒曹操而被杀.  孔融能诗善文,曹丕称其文<扬(扬雄)、班(班固)俦也.>其散文锋利简洁,六言诗反映了汉末动乱的现实.原有文集已散佚,明人张溥辑有<孔北海集>']],
                        jz_甘兴霸: ['male', 'wu', 4, ['jz_奇袭', 'fenwei'], ['des:甘宁(？—215年？220年？存疑),字兴霸,巴郡临江(今重庆忠县)人,三国时期孙吴名将,官至西陵太守,折冲将军.  甘宁少年时好游侠,纠集人马,持弓弩,在地方上为非作歹,组成渠师抢夺船只财物,崇尚奢华,人称锦帆贼.青年时停止抢劫,熟读诸子.曾任蜀郡丞,后历仕于刘表和黄祖麾下,未受重用.建安十三年(208年),甘宁率部投奔孙权,开始建功立业.曾经力劝孙权攻破黄祖占据楚关,随周瑜攻曹仁夺取夷陵,随鲁肃镇益阳对峙关羽,随孙权攻皖城擒获朱光.率百余人夜袭曹营,斩得数十首级而回.在逍遥津之战,他保护孙权蹴马趋津,死里逃生.孙权曾说:<孟德有张辽,孤有甘兴霸,足相敌也>.吕蒙曾说:<天下未定,斗将如宁难得,宜容忍之.>甘宁虽然粗野凶狠,暴躁嗜杀,甚至违反承诺、违抗命令,但是,开朗豪爽,有勇有谋,轻视钱财,敬重士人,厚待士卒,并深得士卒拥戴.陈寿在史书中将他列为<江表之虎臣>']],
                        'jz_周瑜&小乔': ['none', 'wu', 4, ['jz_惜花', 'jz_绝世'], ['des:<li>小桥(180年代－？),本姓桥(小乔为后世误传).中国东汉末年时期的美女,庐江皖县(今安徽潜山)人.桥公的次女,汉末名将周瑜之妾.  周瑜风度翩翩的才子形象,与堪称国色的小桥可称天作之合,由此成为后世文艺作品的对象.唐代著名诗人杜牧激发想象,一句<东风不与周郎便,铜雀春深锁二乔<将小桥与赤壁之战联系起来.而令<>二桥<>闻名于世.<li>周瑜(175年-210年),字公瑾,庐江(今安徽庐江县西南)人 .东汉末年名将,洛阳令周异之子,堂祖父周景、堂叔周忠,都官至太尉.长壮有姿貌、精音律,江东有<曲有误,周郎顾>之语.  周瑜少与孙策交好,21岁起随孙策奔赴战场平定江东,后孙策遇刺身亡,孙权继任,周瑜将兵赴丧,以中护军的身份与长史张昭共掌众事.建安十三年 (208年),周瑜率军与刘备联合,于赤壁之战中大败曹操,由此奠定了<三分天下>的基础.又率军大破曹仁,拜偏将军领南郡太守.建安十五年(210年)病逝于巴丘,年仅36岁.  正史上周瑜<性度恢廓><实奇才也>,孙权称赞周瑜有<王佐之资",范成大誉之为<世间豪杰英雄士、江左风流美丈夫>.宋徽宗时追尊其为平虏伯.位列唐武庙六十四将、宋武庙七十二将之一']],
                        jz_张宝: ['male', 'qun', 3, ['jz_真火', 'jz_黑烟', 'jz_鬼术'], ['des:张宝,张角之弟,张梁之兄,中平元年(184)二月,同兄弟一起发动黄巾起义,号地公将军.同年十一月于下曲阳(今河北晋州)遭到左中郎将皇甫嵩、钜鹿太守郭典的围攻,兵败被斩']],
                        jz_华佗: ['male', 'qun', 3, ['jz_青囊', 'mazui', 'jijiu'], []],
                        jz_诸葛孔明: ['male', 'shu', 3, ['jz_奇门', 'jz_遁甲', 'jz_空城'], ['des:诸葛亮(181年-234年10月8日),字孔明,号卧龙,徐州琅琊阳都(今山东临沂市沂南县)人,三国时期蜀国丞相,杰出的政治家、军事家、外交家、文学家、书法家、发明家']],
                        jz_孙文台: ['male', 'wu', 4, ['jz_助君', 'yinghun'], ['des:孙坚(155年－191年),字文台,汉族,吴郡富春(今浙江杭州富阳区)人,春秋时期军事家孙武的后裔.[1]东汉末年将领、军阀,三国中吴国的奠基人.  史书说他<容貌不凡,性阔达,好奇节>.曾参与讨伐黄巾军的战役以及讨伐董卓的战役.后与刘表作战时阵亡.因官至破虏将军,又称<孙破虏>.其子孙权即为孙吴的开国皇帝.孙权称帝后,追谥孙坚为武烈皇帝,庙号始祖']],
                        jz_袁大嘴: ['male', 'shen', 5, ['jz_乱击', 'wansha', 'xinkuanggu', 'xingshang', 'zhengnan', 'lianpo', 'shangshi', 'wangxi'], ['boss', 'bossallowed', 'des:袁绍(？－202年6月28日),字本初,汝南汝阳(今河南省周口市商水县袁老乡袁老村)人.东汉末年军阀,汉末群雄之一.司空袁逢之子']],
                        jz_曹仓舒: ['male', 'wei', 3, ['renxin', 'jz_称象', 'jz_夭折'], ['des:曹冲(196年－208年5月甲戌),字仓舒,东汉末年人物,东汉豫州刺史部谯(今亳州)人,曹操和环夫人之子.从小聪明仁爱,与众不同,深受曹操喜爱.留有<曹冲称象>的典故.曹操几次对群臣夸耀他,有让他继嗣之意.曹冲还未成年就病逝,年仅十三岁']],
                        jz_黄叙: ['male', 'shu', 4, ['jz_善射', 'jz_多病'], ['des:黄叙,是汉末人物,蜀汉后将军黄忠之子,南阳(今河南南阳)人,早年逝世,无后.据说,黄忠之所以成名较晚是有很大原因在为自己的儿子寻医问药']],
                        jz_邹夫人: ['female', 'qun', 3, ['jz_诱计', 'jz_诛心'], ['des:<三国志>记载中,东汉末年张济之妻,张绣之婶,未言其姓名.  <三国演义>里姓邹,故常称作邹氏,或邹夫人.出现在第十六回,被曹操强纳,因而之后有张绣造反,曹操兵败宛城,曹昂、典韦、曹安民战死等诸多之事']],
                        jz_黄权: ['male', 'shu', 4, ['jz_精准'], ['des:黄权(？－240年),字公衡.巴西郡阆中县(今四川阆中)人.三国时期蜀汉、曹魏将领']],
                        jz_华雄: ['male', 'qun', 6, ['jz_耀武', 'jz_偷袭'], ['des:华[huà]雄(?－191),中国东汉末年董卓部下的武将,为董卓帐下都督.公元191年,关东军阀联合讨伐董卓,时任长沙太守的孙坚大破董卓军,华雄在此战中被孙坚一军所杀.明·罗贯中所著历史小说<三国演义>中则对这段历史作了改动,描写华雄被刘备二弟关羽所杀,这段被称为<温酒斩华雄>的故事情节也流传于后世']],
                        jz_马岱: ['male', 'shu', 4, ['mashu', 'qianxi', 'jz_袭斩'], ['des:马岱(生卒年不详),扶风茂陵(今陕西兴平)人.三国时期蜀汉将领,马超的从弟.早年追随马超大战曹操,反攻陇上,围攻成都,汉中之战等.后在诸葛亮病逝后受杨仪派遣斩杀了蜀将魏延.曾率领军队出师北伐,被魏将牛金击败而退还.官至平北将军,陈仓侯']],
                        jz_左仙人: ['male', 'shen', 5, ['jz_仙法', 'jz_boss_幻化', 'jz_太虚'], ['boss', 'bossallowed', 'des:左慈(156？--289？),字元放,庐江人,汉族,道号乌角先生,东汉末年著名方士,少居天柱山,研习炼丹之术.明五经,兼通星纬,学道术,明六甲,传说能役使鬼神,坐致行厨.<后汉书>说他少有神道']],
                        jz_左元放: ['male', 'qun', 3, ['jz_变幻', 'jz_道法', 'jz_星纬'], ['des:左慈(156？--289？),字元放,庐江人,汉族,道号乌角先生,东汉末年著名方士,少居天柱山,研习炼丹之术.明五经,兼通星纬,学道术,明六甲,传说能役使鬼神,坐致行厨.<后汉书>说他少有神道']],
                        jz_张翼德: ['male', 'shu', 4, ['mashu', 'paoxiao', 'jz_大喝', 'retishen'], ['des:张飞(约165-221年),字益德(<华阳国志>作翼德),幽州涿郡(今河北涿州市)人,三国时期蜀汉名将.他勇武过人,与关羽并称为<万人敌>']],
                        jz_赵襄: ['female', 'shu', 4, ['jz_暗香', 'jz_隐退'], ['des:赵襄为赵云与马云騄之女,赵统赵广之妹,关平之妻.  襄者,辅也.云生女名襄,一意为忠心辅汉,二意为不做主,希望女儿平淡渡过一生.  东汉中平四年(公元187年),探望夫君赵云而来辽西大营的马氏,生下一女婴.这虽然是赵云的第三个孩子,但也是唯一一名一出生能见到父亲的孩子.赵云非常高兴,给她起名叫襄']],
                        jz_公孙伯圭: ['male', 'qun', 4, ['qiaomeng', 'jz_驭马', 'jz_驭马2'], ['des:公孙瓒(？—199年),字伯圭(出自<刘宽碑阴> ,<三国志>等文史多作伯珪,公孙瓒为刘宽门生,参与了刘宽的葬礼,碑阴为当时人甚至本人签名,故当从碑)其名与字的对应当是取自<圭瓒>一词,辽西令支(今河北迁安)人,东汉末年武将、军阀,汉末群雄之一.  公孙瓒出身贵族.因母地位卑贱,只当了郡中小吏.因其相貌俊美,且声音洪亮、机智善辩,得到涿郡太守赏识,将女儿许配给他.后逐步做到中郎将,以强硬的态度对抗北方游牧民族,作战勇猛,威震边疆.  公孙瓒好战,与主张以怀柔政策对待胡人的上司刘虞不和,二人矛盾逐渐激化.初平四年(193年),公孙瓒击杀刘虞,并挟持朝廷使者,得到了总督北方四州的授权,成为北方最强大的诸侯之一.他与袁绍多次相争,初期占据优势,但在龙凑之战后,公孙瓒锐气顿减,采取自保战略,逐渐失去了部下信任,被袁绍击败.最终困于高楼,引火自焚']],
                        jz_曹子孝: ['male', 'wei', 4, ['jz_据守', 'jz_解围'], ['des:曹仁(168年－223年),字子孝,汉族,沛国谯(今安徽亳州)人,曹操从弟(从祖弟).三国曹魏名将.  曹仁好弓马骑射,少时不修行检,及至长成为大将,则变得严整,奉法守令.从曹操多年,为魏朝立下汗马功劳.破袁术,曹仁所斩获颇多,大破陶谦军及陶谦部将吕由,攻克句阳,生擒吕布的部将刘何,官渡之战中,在隐强打败刘备军、鸡落山之战又战胜袁绍军.  赤壁之战兵败后,曹仁镇守江陵,在与周瑜相持一年后,弃城而走.渭南击破马超.破反将苏伯、田银、侯音.在襄樊之战中挡住了关羽的进攻,与徐晃共攻破陈邵,进驻襄阳.  曹丕即位魏王后,曹仁拜车骑将军,统率荆州、扬州、益州军事,晋封陈侯.曹丕代汉建魏,封曹仁为大将军,又迁大司马.后来,曹仁率兵进攻濡须口,但最终惨败给朱桓.不久卒于军中,时年五十六岁,谥曰忠侯.  按<史记·谥法解>云:<危身奉上曰忠.险不辞难.>故当魏一朝,<忠>实为大誉之谥,只有夏侯惇同焉']],
                        jz_步练师: ['female', 'wu', 3, ['jz_安恤', 'zhuiyi'], ['des:步练师(？－238年),临淮淮阴(今江苏省淮安市)人,吴大帝孙权的宠妃.丞相步骘族人.  步练师生有二女全公主和朱公主.孙权即帝位,拜为夫人.宫中以皇后礼节待之.赤乌元年(238年),步练师去世,追封皇后,葬于蒋陵.这是皇帝追封妃妾为后的最初案例']],
                        jz_戏志才: ['male', 'wei', 3, ['jz_戏子天妒', 'jz_先辅', 'jz_筹策2'], ['des:戏志才(生卒年不详),或志才为字,名不详(一说名忠),东汉颍川郡(今河南禹州)人.经荀彧推荐,成为曹操手下谋士.为人多谋略,曹操十分器重,不幸早卒.  三国演义中并无此人,三国志中只有寥寥数语.由荀彧推荐给曹操,被称为有<负俗之讥>.死后,荀彧又举荐了郭嘉.  陈寿<三国志>记载:太祖与荀彧书曰:自志才亡后,莫可与计事者.汝、颍固多奇士,谁可以继之？彧荐嘉']],
                        jz_典韦: ['male', 'wei', 4, ['jz_死战', 'jz_强袭'], ['des:典韦(？－197年),陈留己吾(今河南商丘市宁陵县己吾城村)人.东汉末年曹操部将,相貌魁梧,膂力过人.本属张邈,曾单手举起牙门旗.后转投曹操,在曹操征讨吕布时被募为陷阵,表现英勇,被拜为校尉,宿卫曹操.建安二年(197年),张绣背叛曹操,典韦为保护曹操而独挡叛军,击杀多人,但最终因寡不敌众而战死']],
                        jz_张宁: ['female', 'qun', 3, ['jz_黄道', 'jz_鬼兵'], ['des:张宁(176年－？),钜鹿(治今河北省邢台市巨鹿县)人.东汉末年大贤良师张角的女儿,虚拟人物.其父为东汉太平道创始人和黄巾起义领袖.冀州钜鹿(治今河北平乡西南)人,因得到道士于吉等人所传<太平清领书>,依<太平清领书>部分内容创<太平道>,自称<大贤良师>,拳事黄老道,以阴阳五行、符箓咒语为根本教法,信<中黄太一>之道,<持九节杖,为符祝,教病人叩头思过,因以符水饮之,得病或日浅而愈者,则云此人信道;其或不愈,则为不信道>.起初,张角的活动似乎仍属普通的宗教活动.但到熹平年间(172－177),随着汉王朝内部宦官集团和外戚士人清议集团间斗争的加剧,张角以符水咒说为民治病,发展徒众,十余年间达数十万,遍及青、徐、幽、冀、荆、扬、兖、豫八州,分大方三十六,小方六七千,各立渠帅.灵帝中平元年甲子岁(184年)扬言<苍天已死,黄天当立,岁在甲子,天下大吉>,三十六方遂同时起事,自号<天公将军>,以其张宝为<地公将军>、张梁为<人公将军>.部众皆着黄巾以为标帜,故称<黄巾>.后角病死于军中,张宝、张梁先后战败被杀,张宁其人演义、三国志均未记载']],
                        jz_太史子义: ['male', 'wu', 4, ['jz_天义', 'jz_从志'], ['des:太史慈(166年－206年),字子义,东莱黄县(今山东龙口东黄城集)人.东汉末年名将,官至建昌都尉.弓马熟练,箭法精良.曾为救孔融而单骑突围向刘备求援.原为刘繇[yáo]部下,后被孙策收降,自此太史慈为孙氏大将,助其扫荡江东.孙权统事后,因太史慈能制刘磐[pán],便将管理南方的要务委托给他. 建安十一年(206年)太史慈逝世,死前说道:<丈夫生世,当带三尺之剑,以升天子之阶.今所志未从,奈何而死乎!>(<吴书>,<三国演义>为<大丈夫生于乱世,当带三尺剑立不世之功;今所志未遂,奈何死乎!>)言讫而亡,年四十一岁']],
                        jz_诸葛果: ['female', 'shu', 3, ['jz_修行', 'jz_避世', 'jz_羽化'], ['des:诸葛果,为<历代神仙通鉴>中诸葛亮女儿的名字,<历代神仙通鉴>记录从上古到明代的神仙,因此诸葛果不见于任何史书.成都西南有朝真观,即乘烟观.相传,诸葛果在这里修行后成仙升天']],
                        jz_神诸葛果: ['female', 'shen', 3, ['jz_得道', 'jz_shen_羽化', 'jz_神迹'], ['des:诸葛果,为<历代神仙通鉴>中诸葛亮女儿的名字,<历代神仙通鉴>记录从上古到明代的神仙,因此诸葛果不见于任何史书.成都西南有朝真观,即乘烟观.相传,诸葛果在这里修行后成仙升天']],
                        jz_孙夫人: ['female', 'wu', 3, ['xiaoji', 'jz_结姻1', 'jz_返乡'], ['des:孙夫人,相传名为孙尚香,吴郡富春(今浙江杭州富阳)人,东汉末年讨虏将军孙权之妹,曾为左将军刘备之妻.<三国志>称之为孙夫人.  为巩固孙刘联盟,孙夫人嫁给刘备三年,后来大归回吴,之后事迹不详.史料并无生育记载.夹在两国之间,有着与传统女性截然不同的桀骜不驯的个性.孙夫人在许多小说,戏剧和影视里被不断描绘']],
                        jz_赵子龙: ['male', 'shu', 4, ['jz_涯角', 'jz_龙胆1'], ['des:赵云(？－229年),字子龙,常山真定(今河北省正定)人,三国时期蜀汉名将. 汉末军阀混战,赵云率领义从加入白马将军公孙瓒,期间结识汉室皇亲刘备,但不久之后,赵云因为兄长去世而离开.赵云离开公孙瓒大约七年后,在邺城与刘备相见,从此追随刘备. 赵云跟随刘备将近三十年,先后参加过博望坡之战、长坂坡之战、江南平定战,独自指挥过入川之战、汉水之战、箕谷之战,都取得了非常好的战果.除了四处征战,赵云还先后以偏将军任桂阳太守,以留营司马留守公安,以翊军将军督江州.除此之外,赵云于平定益州时引霍去病故事劝谏刘备将田宅归还百姓,又于关羽张飞被害之后劝谏刘备不要伐吴,被后世赞为有大臣局量的儒将,甚至被认为是三国时期的完美人物. 赵云去世后被追谥为<顺平候>,其<常胜将军>的形象被广为流传']],
                        jz_马幼常: ['male', 'shu', 3, ['jz_心战', 'jz_制蛮', 'huilei'], ['des:马谡(190年－228年),字幼常,襄阳宜城(今湖北宜城南)人,侍中马良之弟,三国时期蜀汉官员、将领.初以荆州从事身份跟随刘备入蜀,历任绵竹县令、成都县令、越嶲太守.  蜀汉丞相诸葛亮任用他为参军.马谡才器过人,好论军计.诸葛亮向来对他深为器重,每次接见谈论,从白天到黑夜.  建兴六年(228年),马谡在诸葛亮北伐时,因违背诸葛亮作战指令,而导致街亭失守,撤军后被诸葛亮斩首']],
                        jz_张梁: ['male', 'qun', 4, ['jz_人公', 'jz_噬尸'], ['des:张梁(？－184),(袁宏<后汉纪>作张良)钜鹿(治今河北巨鹿)人,东汉末年黄巾起义首领之一,张角的三弟.中平元年(184)随兄起义,号称<人公将军>.遭到朝廷所派左中郎将皇甫嵩进攻时,他率军在广宗(今河北威县)进行反击.后因警戒疏忽,遭到汉军夜袭,兵败身亡']],
                        jz_于吉: ['male', 'qun', 3, ['jz_蛊惑'], ['des:于吉(？-200年,一作干吉、干室)东汉末年黄老道代表人物之一,史书有两种说法:(1)认为其即<太平经>作者.<后汉书·襄楷传>:<顺帝时,琅邪宫崇诣阙,上其师干吉于曲阳泉水上所得神书百七十卷,皆缥白素朱介青首朱目,号<太平青领书>.>(2)认为其乃三国时道士,<三国志·孙策传>注引<江表传>:<时有道士琅邪于吉,先寓居东方,往来吴会,立精舍,烧香读道书,制作符水以治病,吴会人多事之.>后为孙策所杀.  今浙江省绍兴市境内的枫桥镇有干溪、干溪村、干溪道、干溪滩等古地名,据说与于吉有关']],
                        jz_孙仲谋: ['male', 'wu', 4, ['jz_制衡', 'jz_救援'], ['des:孙权(182年－252年5月21日),字仲谋.吴郡富春县(今浙江省杭州市富阳区)人.三国时代孙吴的建立者(229年－252年在位).  孙权的父亲孙坚和兄长孙策,在东汉末年群雄割据中打下了江东基业.建安五年(200年),孙策遇刺身亡,孙权继之掌事,成为一方诸侯.建安十三年(208年),与刘备建立孙刘联盟,并于赤壁之战中击败曹操,奠定三国鼎立的基础.建安二十四年(219年),孙权派吕蒙成功袭取刘备的荆州,使领土面积大大增加.  黄武元年(222年),孙权被魏文帝曹丕册封为吴王,建立吴国.同年,在夷陵之战中大败刘备.黄龙元年(229年),在武昌正式称帝,国号吴,不久后迁都建业.孙权称帝后,设置农官,实行屯田,设置郡县,并继续剿抚山越,促进了江南经济的发展.在此基础上,他又多次派人出海.黄龙二年(230年),孙权派卫温、诸葛直抵达夷州.  孙权晚年在继承人问题上反复无常,引致群下党争,朝局不稳.太元元年(252年)病逝,享年七十一岁,在位二十四年,谥号大皇帝,庙号太祖,葬于蒋陵. 孙权亦善书,唐代张怀瓘在<书估>中将其书法列为第三等']],
                        jz_张文远: ['male', 'wei', 4, ['jz_突袭'], ['des:张辽(169年－222年),字文远,雁门马邑(今山西朔州市)人.汉末三国时期曹魏名将.马邑之谋发起者聂壹的后人.  起初,担任雁门郡吏.又先后跟随丁原、何进、董卓、吕布,恪尽职守,历尽坎坷.吕布败亡后,张辽归属曹操.曾洞察人心而劝降昌豨.攻袁氏而转战河北.在白狼山之战率领先锋大破乌桓并斩杀乌桓单于蹋顿.驱逐辽东大将柳毅.以静制动平定新军叛乱.勇登天柱山击灭陈兰、梅成.此后,长期镇守合肥.  建安二十年(215年),合肥之战,张辽率领八百将士冲击东吴十万大军,一直冲杀到孙权的主帅旗下,令东吴军队披靡溃败、闻风丧胆.又率领追兵,大破孙权、凌统、甘宁等人,差点活捉孙权.经此一役,张辽威震江东. <张辽止啼>成为流传千古的典故.  黄初元年(220年),张辽进封晋阳侯.染病之后,依旧令孙权非常忌惮.黄初三年(222年),张辽抱病击破吴将吕范.同年,病逝于江都,谥曰刚侯.张辽为历代所推崇,成为古今六十四名将之一']],
                        jz_大乔: ['female', 'wu', 3, ['guose', 'jz_流离'], ['des:大乔(生卒年不详),庐江郡皖县人(今安徽安庆潜山),东汉末年江东孙策的妻,本姓<桥>,小说<三国演义>误作<乔>,因为同时还有一个妹妹嫁给周瑜,为了进行区分,姐姐习惯称作<大乔(桥)>.  清朝时期,薛福成的<庸盦笔记>,传说大乔在孙策死后,哭泣数月而卒.但终究只是后世传说,不足为凭']],
                        jz_庞士元: ['male', 'shu', 3, ['jz_连环2', 'oldniepan'], ['des:庞统(179年－214年),字士元,号凤雏,汉时荆州襄阳(治今湖北襄阳)人.东汉末年刘备帐下重要谋士,与诸葛亮同拜为军师中郎将.与刘备一同入川,于刘备与刘璋决裂之际,献上上中下三条计策,刘备用其中计.进围雒县时,庞统率众攻城,不幸中流矢而亡,年仅三十六岁,追赐统为关内侯,谥曰靖侯.后来庞统所葬之处遂名为落凤坡']],
                        jz_神庞统: ['male', 'shen', 7, ['jz_boss连环', 'jz_boss落凤'], ['boss', 'bossallowed', 'des:庞统(179年－214年),字士元,号凤雏,汉时荆州襄阳(治今湖北襄阳)人.东汉末年刘备帐下重要谋士,与诸葛亮同拜为军师中郎将.与刘备一同入川,于刘备与刘璋决裂之际,献上上中下三条计策,刘备用其中计.进围雒县时,庞统率众攻城,不幸中流矢而亡,年仅三十六岁,追赐统为关内侯,谥曰靖侯.后来庞统所葬之处遂名为落凤坡']],
                        jz_魔王诸葛: ['male', 'shen', 5, ['jz_秘术', 'jz_八阵', 'jz_强行', 'jz_玄武', 'jz_青龙'], ['boss', 'bossallowed', 'des:诸葛亮(181年-234年10月8日),字孔明,号卧龙,徐州琅琊阳都(今山东临沂市沂南县)人,三国时期蜀国丞相,杰出的政治家、军事家、外交家、文学家、书法家、发明家']],
                        jz_程普: ['male', 'wu', 3, ['jz_同归', 'jz_复仇'], ['des:程普,字德谋,生卒年不详,右北平土垠(今河北丰润东)人.东汉末年名将,历仕孙坚、孙策、孙权三代.他曾跟随孙坚讨伐过黄巾、董卓,斩华雄、破吕布.后来,又助孙策平定江东.孙策曾作战不利,程普将孙策救出重围.在孙策死后,他与张昭等人共同辅佐孙权,并讨伐江东境内的山贼,功勋卓著.赤壁之战与周瑜分任左右都督打败曹操,之后大破曹仁于南郡.程普在东吴诸将中年岁最长,被人们尊称为<程公>,在<江表之虎臣>中位列第一位']],
                        jz_张角: ['male', 'qun', 3, ['jz_祭天', 'jz_鬼道', 'jz_黄天'], ['des:张角(？－184年),钜鹿(秦治今河北平乡、东汉治今河北宁晋)人.中国东汉末年农民起义军<黄巾军>的领袖,太平道的创始人.  他因得到道士于吉等人所传<太平清领书>(即<太平经>),遂以宗教救世为己任,利用其中的某些宗教观念和社会政治思想,组织群众,约于灵帝建宁(168－172)初传道.  中平元年(184),张角以<苍天已死,黄天当立,岁在甲子,天下大吉>为口号,自称<天公将军>,率领群众发动起义,史称<黄巾起义>.不久张角病死,起义军也很快被汉朝所镇压']],
                        jz_boss张角: ['male', 'shen', 5, ['jz_祭天2', 'jz_鬼道2', 'jz_太平'], ['boss', 'bossallowed', 'des:张角(？－184年),钜鹿(秦治今河北平乡、东汉治今河北宁晋)人.中国东汉末年农民起义军<黄巾军>的领袖,太平道的创始人.  他因得到道士于吉等人所传<太平清领书>(即<太平经>),遂以宗教救世为己任,利用其中的某些宗教观念和社会政治思想,组织群众,约于灵帝建宁(168－172)初传道.  中平元年(184),张角以<苍天已死,黄天当立,岁在甲子,天下大吉>为口号,自称<天公将军>,率领群众发动起义,史称<黄巾起义>.不久张角病死,起义军也很快被汉朝所镇压']],
                        jz_蔡文姬: ['female', 'qun', 3, ['jz_悲歌', 'jz_断肠'], ['des:蔡琰,字文姬,别字昭姬,陈留郡圉县(今河南杞县)人,东汉时期女性文学家,文学家蔡邕之女.  博学多才,擅长文学、音乐、书法.初嫁于卫仲道,丈夫死后回家.南匈奴入侵时,为匈奴左贤王所掳,生育两个孩子.曹操统一北方后,花费重金赎回,嫁给董祀.  <隋书·经籍志>著录有<蔡文姬集>一卷,今已失传,只有<悲愤诗>二首和<胡笳十八拍>.文姬归汉>的故事,广为流传']],
                        jz_马良: ['male', 'shu', 3, ['jz_协穆', 'jz_纳蛮'], ['des:马良(187－222年),字季常,襄阳宜城(今湖北宜城南)人,三国时期蜀汉官员,马谡之兄.  马良兄弟五人都有才华名气,而马良是五人中最为出色.因眉毛中有白毛,人称白眉马良.因此有<马氏五常,白眉最良>的赞誉.建安十四年(209年),刘备担任荆州牧,征辟为州从事.马良与诸葛亮关系友善,曾奉命出使东吴,受到孙权恭敬接待.  章武元年(221年),刘备称帝,建立蜀汉政权,任命马良为侍中.章武二年(222年),刘备东征东吴,派马良招纳五溪少数民族.同年,刘备在夷陵之战中兵败,马良遇害身亡']],
                    },
                    translate: {
                        jz_透心凉: '诗笺',
                        jz_吕子明: '吕子明',
                        jz_神邓艾: '神邓艾',
                        jz_神曹操: '神曹操',
                        jz_神司马懿: '神司马懿',
                        jz_李曼成: '李曼成',
                        jz_监军谋国: '监军谋国',
                        jz_郭奉孝: '郭奉孝',
                        jz_绝境之龙: '绝境之龙',
                        jz_绝情人: '绝情人',
                        jz_荀文若: '荀文若',
                        jz_关云长: '关云长',
                        jz_司马仲达: '司马仲达',
                        jz_刘玄德: '刘玄德',
                        jz_周幼平: '周幼平',
                        jz_陆伯言: '陆伯言',
                        jz_贾文和: '贾文和',
                        jz_曹孟德: '曹孟德',
                        jz_董胖: '董胖',
                        jz_徐公明: '徐公明',
                        jz_邓士载: '邓士载',
                        jz_魏文帝: '魏文帝',
                        jz_孙伯符: '孙伯符',
                        jz_甄宓: '甄宓',
                        jz_麒麟儿: '麒麟儿',
                        jz_董白: '董白',
                        jz_马孟起: '马孟起',
                        jz_冷血皇后: '冷血皇后',
                        jz_sp黄月英: 'sp黄月英',
                        jz_孔融: '孔文举',
                        jz_甘兴霸: '甘兴霸',
                        'jz_周瑜&小乔': '周瑜&小乔',
                        jz_张宝: '张宝',
                        jz_华佗: '华佗',
                        jz_诸葛孔明: '诸葛孔明',
                        jz_孙文台: '孙文台',
                        jz_袁大嘴: '袁大嘴',
                        jz_曹仓舒: '曹仓舒',
                        jz_黄叙: '黄叙',
                        jz_邹夫人: '邹夫人',
                        jz_黄权: '黄权',
                        jz_华雄: '华雄',
                        jz_马岱: '马岱',
                        jz_左仙人: '左仙人',
                        jz_左元放: '左元放',
                        jz_张翼德: '张翼德',
                        jz_赵襄: '赵襄',
                        jz_公孙伯圭: '公孙伯圭',
                        jz_曹子孝: '曹子孝',
                        jz_步练师: '步练师',
                        jz_戏志才: '戏志才',
                        jz_典韦: '典韦',
                        jz_张宁: '张宁',
                        jz_太史子义: '太史子义',
                        jz_诸葛果: '诸葛果',
                        jz_神诸葛果: '神诸葛果',
                        jz_孙夫人: '孙夫人',
                        jz_张琦: '张琦',
                        jz_赵子龙: '赵子龙',
                        jz_马幼常: '马幼常',
                        jz_张梁: '张梁',
                        jz_于吉: '于吉',
                        jz_孙仲谋: '孙仲谋',
                        jz_张文远: '张文远',
                        jz_大乔: '大乔',
                        jz_庞士元: '庞士元',
                        jz_神庞统: '神庞统',
                        jz_魔王诸葛: '魔王诸葛',
                        jz_boss孙策: '孙策',
                        jz_程普: '程普',
                        jz_张角: '张角',
                        jz_boss张角: '张教主',
                        jz_蔡文姬: '蔡文姬',
                        jz_马良: '马良',
                        jz_董休昭: '董休昭',
                        jz_铁骑: '铁骑',
                        jz_铁骑_info: '当你使用一张【杀】指定一名角色后,你可进行一次判定并使目标角色非锁定技失效直到回合结束,判定结果若为红色则此[杀]不可闪避',
                        jz_芊芊: '芊芊',
                        jz_芊芊_info: '',
                        jz_芊芊2: '芊芊',
                        jz_芊芊2_info: '',
                        js_不屈: '不屈',
                        js_不屈_info: '锁定技,在你进入濒死阶段时,若你的体力值不大于0,亮出牌堆顶的一张牌并置于你的武将牌上,若此牌的点数与你武将牌上已有的牌点数均不同,则你回复至1体力.只要你的武将牌上有牌,你的手牌上限便与这些牌数量相等',
                        jz_薄发: '薄发',
                        jz_薄发_info: '出牌阶段,你可以把一张<田>当做决斗使用,若如此做,你回复一点体力',
                        jz_急袭: '急袭',
                        jz_急袭_info: '出牌阶段,你可以把一张<田>当做过河拆桥使用',
                        jz_芊芊3: '芊芊',
                        jz_芊芊3_info: '',
                        jz_诱使: '诱使',
                        jz_诱使_info: '锁定技,每当一名其他角色使用一张基本牌或锦囊牌,其获得一张<毒>',
                        jz_芊芊4: '芊芊',
                        jz_芊芊4_info: '锁定技,<li>你免疫部分负面效果,如果你失去此技能,则你获得额外的保命效果;<li>游戏开始前你获得〖回天〗并额外进行一个回合;<li>每当一名角色回合开始时你将体力值回复至满体力<li>当你在场时所有扩展内所有角色免疫普通清除技能<li>当你死亡时且你的体力值大于0,或当你受到大于等于10点伤害时,或濒死阶段你的体力值小于-7时,停止结算并将你的体力值回复至满体力并添加技能〖万剑〗',
                        jz_诱使2: '诱使',
                        jz_诱使2_info: '锁定技,每当一名其他角色使用一张基本牌或锦囊牌,你获得一张与之同名的牌;在一名其他角色的结束阶段,若其本回合没有使用牌,你对其造成一点伤害',
                        jz_除异: '除异',
                        jz_除异_info: '出牌阶段限一次,你可以使一名其他角色失去当前所有技能并死亡',
                        jz_羸弱: '羸弱',
                        jz_羸弱_info: '锁定技,你没有装备区',
                        jz_绝杀: '绝杀',
                        jz_绝杀_info: '锁定技,一名角色使用杀命中时,该角色死亡',
                        jz_觉悟: '觉悟',
                        jz_觉悟_info: '觉悟',
                        jz_无言: '无言',
                        jz_无言_info: '锁定技,其他角色使用的普通锦囊牌对你无效',
                        jz_回天: '回天',
                        jz_回天_info: '锁定技,当你受到伤害前,或流失体力前,或进入濒死阶段时,你回复一点体力值;每名角色回合开始前,你回复至满体力',
                        jz_报复: '报复',
                        jz_报复_info: '锁定技,对你造成伤害的角色失去当前的所有技能直到游戏结束并失去所有体力',
                        jz_屯田: '屯田',
                        jz_屯田_info: '<li>在你的回合外,每当一名角色得到牌时,你可以进行一次判定,将非黑色结果的判定牌置于你的武将牌上,称为<田>,每有一张田,你的进攻距离+1,<li>摸牌阶段,你多摸一张牌.<li>当你手牌数大于4或<田>达到三个时,你不能发动【屯田】<li>你不能成为兵粮寸断的目标',
                        jz_争功: '争功',
                        jz_争功_info: '在一名其他角色的回合开始前,若你的武将牌正面朝上,你可以摸一张牌并进行一个额外回合,并在回合结束后将武将牌翻至背面.若如此做,你对其使用卡牌无视距离直到回合结束',
                        jz_忘隙: '忘隙',
                        jz_忘隙_info: '每当你对其他角色造成1点伤害后,或受到其他角色造成的1点伤害后,你可与该角色各摸一张牌',
                        jz_严法: '严法',
                        jz_严法_info: '当一名角色受到1点伤害后,你可以令伤害来源选择一项:1、将一张手牌交给你;2、失去1点体力',
                        jz_禁咒: '禁咒',
                        jz_禁咒_info: '出牌阶段,你弃八张牌并对其他角色造成三点火焰伤害,之后你回复一点体力',
                        jz_禁食: '禁食',
                        jz_禁食_info: '在你的回合外,其他角色不能使用桃',
                        jz_威慑: '威慑',
                        jz_威慑_info: '在你的回合,除你以外,只有处于濒死状态的角色才能使用【桃】',
                        jz_谋断: '谋断',
                        jz_谋断_info: '通常状态下,你拥有标记<武>并拥有技能<激昂>和<谦逊>.当你的手牌数为2张或以下时,你须将你的标记翻面为<文>,将该两项技能转化为<英姿>和<制衡>.任一角色的回合开始前,你可弃一张牌将标记翻回',
                        jz_贤德: '贤德',
                        jz_贤德_info: '锁定技,黑色的杀对你无效',
                        jz_飞影: '飞影',
                        jz_飞影_info: '锁定技,你的防御距离+2',
                        jz_魏武: '魏武',
                        jz_魏武_info: '每名角色的回合结束阶段,你对体力不小于你的一名其他角色造成3点火属性伤害',
                        jz_恶助: '恶助',
                        jz_恶助_info: '锁定技,黑色的杀对你无效',
                        jz_雷罚: '雷罚',
                        jz_雷罚_info: '每名角色的回合开始阶段,你对体力不大于你的一名其他角色造成3点雷属性伤害',
                        jz_屯兵: '屯兵',
                        jz_屯兵_info: '弃牌阶段结束时,若你的手牌数小于X时,你可以摸y张牌.(X为你的体力上限,y为你的体力值)',
                        jz_博观: '博观',
                        jz_博观_info: '摸牌阶段,你可以改为观看牌堆顶的五张牌,获得其中的三张牌,将其余的牌以任意顺序置于牌堆底',
                        jz_远虑: '远虑',
                        jz_远虑_info: '你可以将一张黑色牌当[闪]使用或打出',
                        jz_拒降: '拒降',
                        jz_拒降_info: '锁定技,击杀你的角色立即弃置所有的牌',
                        jz_念主: '念主',
                        jz_念主_info: '锁定技,当你受到大于0的伤害后:若此伤害是你本回合第一次受到伤害,则你回复1点体力并摸两张牌;若不是你本回合第一次受到伤害,则你增加1点体力上限并摸三张牌',
                        jz_渐营: '渐营',
                        jz_渐营_info: '每当你于出牌阶段内使用的牌与此阶段你使用的上一张牌点数或花色相同时,你可以摸两张牌(每回合限7次)',
                        jz_毒心: '毒心',
                        jz_毒心_info: '锁定技,在你的回合内,你免疫体力流失',
                        jz_灭口: '灭口',
                        jz_灭口_info: '锁定技,一名角色回合结束后,你增加一点体力上限',
                        jz_绝情: '绝情',
                        jz_绝情_info: '锁定技,你在场时,所有角色即将造成的伤害均视为失去体力',
                        jz_伤逝: '伤逝',
                        jz_伤逝_info: '锁定技,当你的手牌数小于X时,你立即将手牌补至X张(X为你已损体力值)',
                        jz_冷血: '冷血',
                        jz_冷血_info: '锁定技,每当一名角色死亡后,此武将牌增加一点体力上限',
                        jz_破计: '破计',
                        jz_破计_info: '每当你在回合外成为黑色牌的目标,你可以摸一张牌',
                        jz_无功: '无功',
                        jz_无功_info: "出牌阶段,你不能使用'杀'",
                        jz_弃袍: '弃袍',
                        jz_弃袍_info: '在你的回合外,你可将你的任意一张黑色牌当【酒】使用',
                        jz_倾国: '倾国',
                        jz_倾国_info: '你可以将一张黑色牌当[闪]使用或打出',
                        jz_节命: '节命',
                        jz_节命_info: '你每受到1点伤害,可令任意一名角色将手牌补至其体力上限的张数(不能超过9张)',
                        jz_单骑: '单骑',
                        jz_单骑_info: '准备阶段开始时,若你的手牌数大于1,则获得<马术>和<怒斩>并获得[青龙偃月刀]',
                        jz_反馈: '反馈',
                        jz_反馈_info: '每当你受到1点伤害后,你可以获得当前角色的一张牌',
                        jz_鬼才: '鬼才',
                        jz_鬼才_info: '在任意角色的判定牌生效前,你可以打出一张牌替换之',
                        jz_早逝: '早逝',
                        jz_早逝_info: '锁定技,结束阶段开始时,你失去１点体力,摸两张牌',
                        jz_屯田2: '屯田',
                        jz_屯田2_info: '在你的回合外,若有一名角色失去或得到牌后,你可以进行一次判定,将非♥️️结果的判定牌置于你的武将牌上,称为<田>,每有一张田,你的进攻距离+1.',
                        jz_挑衅: '挑衅',
                        jz_挑衅_info: '出牌阶段,你可以指定一名使用【杀】能攻击到你的角色,该角色需对你使用一张【杀】,若该角色不如此做,你弃掉他的一张牌,每回合限2次',
                        jz_衣钵: '衣钵',
                        jz_衣钵_info: '觉醒技,准备阶段,若你的体力值小于等于2,你需减1点体力上限,并永久获得技能<观星>',
                        jz_幼麟: '幼麟',
                        jz_幼麟_info: '摸牌阶段,你可以额外摸3张牌.若如此做,你获得<无功>直到回合结束',
                        jz_激昂: '激昂',
                        jz_激昂_info: '每当你使用(指定目标后)或被使用(成为目标后)一张【决斗】或【杀】时,你可以摸一张牌',
                        jz_资粮: '资粮',
                        jz_资粮_info: '你或者和你同一阵营的角色受到伤害后,其可以获得一张<田>',
                        jz_鹰扬: '鹰扬',
                        jz_鹰扬_info: '当你拼点的牌亮出时你可以令其点数<+3>或 <-3>',
                        jz_度势: '度势',
                        jz_度势_info: '出牌阶段限5次,你可以把一张红色手牌当做以逸待劳使用',
                        jz_天妒: '天妒',
                        jz_天妒_info: '<li>你可以获得作为最终判定结果的判定牌<li>锁定技,当你失去体力后,你摸一张牌,并弃置你判定区内所有的牌',
                        jz_连诛: '连诛',
                        jz_连诛_info: '出牌阶段限2次,你可以展示并交给一名其他角色一张牌,若该牌为黑色,其选择一项:1.你摸两张牌;2.弃置两张牌',
                        jz_放逐: '放逐',
                        jz_放逐_info: '你每受到一次伤害,你补X张牌,X为你已损失的体力值,指定一名其他角色,该角色离开游戏直到下一轮开始',
                        jz_截軸: '截輜',
                        jz_截軸_info: '锁定技,一名其他角色跳过其回合内一个阶段后,你摸一张牌',
                        jz_绝策: '绝策',
                        jz_绝策_info: '你死亡时,可以令一名其他角色(击杀你的角色除外)摸两张牌,令其回复1点体力',
                        jz_仁心: '仁心',
                        jz_仁心_info: '锁定技,取消你打出或使用的杀的效果',
                        聚心: '聚心',
                        聚心_info: '每当你失去牌后,你获得一枚<聚心>标记,并令一名其他角色摸一张牌;锁定技,你的<聚心>标记最多有三枚,每名角色回合结束时,你弃置所有的>聚心>标记',
                        治军: '治军',
                        治军_info: '每当一名角色失去牌后,你获得一枚<治军>标记,并令一名其他角色摸一张牌;锁定技,你的<治军>标记最多有三枚,每名角色回合结束时,你弃置所有的>治军>标记',
                        jz_横征: '横征',
                        jz_横征_info: '摸牌阶段开始时,若你的体力不小于4或你没有手牌,你可以改为获得每名其他角色区域里的一张牌',
                        jz_机巧: '机巧',
                        jz_机巧_info: '回合开始时,你可以弃置2张牌,亮出牌堆顶的五张牌,你获得其中的锦囊牌,其他牌归入弃牌堆',
                        jz_玲珑: '玲珑',
                        jz_玲珑_info: '锁定技,若你的装备区没有防具牌,视为你装备着【八卦阵】;若你的装备区没有坐骑牌,你获得牌数量+1;若你的装备区没有宝物牌,你使用锦囊牌无距离限制',
                        jz_玲珑2: '玲珑',
                        jz_玲珑2_info: '',
                        jz_芊芊5: '芊芊',
                        jz_芊芊5_info: '',
                        jz_无效: '无效',
                        jz_无效_info: '锁定技,当你受到伤害前(伤害需大于0),或当你使用技能时,若你不为〖透心凉.〗则移除所有技能并不能再添加技能',
                        jz_无效2: '无效',
                        jz_无效2_info: '',
                        jz_幻化: '幻化',
                        jz_幻化_info: '锁定技,你在回合结束后或体力值改变后,随机获得一个势力角色的所有技能',
                        jz_改名: '改名',
                        jz_改名_info: '',
                        jz_刚直: '刚直',
                        jz_刚直_info: '锁定技,所有其他角色使用技能转化的卡牌牌指定你为目标时取消此牌对你的效果;回合外你失去牌后你摸一张牌',
                        jz_刚直2: '刚直',
                        jz_刚直2_info: '',
                        jz_奇袭: '奇袭',
                        jz_奇袭_info: '出牌阶段限三次,你可以将一张黑色牌当做【过河拆桥】使用;每当你使用【过河拆桥】后,你摸一张牌',
                        jz_奇袭2: '奇袭',
                        jz_奇袭2_info: '',
                        jz_万剑: '万剑',
                        jz_万剑_info: '',
                        jz_万剑2: '万剑',
                        jz_万剑2_info: '锁定技,每名角色使用牌时,除你之外的其他角色受到一点神圣伤害',
                        jz_奋激: '奋激',
                        jz_奋激_info: '每当一名角色的手牌于回合外被弃置时,你可以失去1点体力,该角色摸两张牌',
                        jz_青囊: '青囊',
                        jz_青囊_info: '出牌阶段,你可以弃置一张手牌令一名角色回复一点体力并解除翻面和混乱,每阶段限一次',
                        jz_绝世: '绝世',
                        jz_绝世_info: '觉醒技,准备阶段,若在场玩家人数小于等于五人,你须减少1点体力上限,并永久获得技能【英姿】,【天香】',
                        jz_惜花: '惜花',
                        jz_惜花_info: '锁定技,当你的牌因弃置而置入弃牌堆时,若弃置牌的数量等于你的体力值,你将其收回手牌,且你的红色手牌不占用手牌上限',
                        jz_真火: '真火',
                        jz_真火_info: '你使用【杀】被目标角色闪避后,你可以指定目标角色距离1以内的角色受到你造成的一点火焰伤害',
                        jz_鬼术: '鬼术',
                        jz_鬼术_info: '任意一名角色的判定生效前,你可以打出一张红色牌替换之',
                        jz_黑烟: '黑烟',
                        jz_黑烟_info: '你不能成为黑色【杀】或【决斗】的目标',
                        jz_助君2: '助君',
                        jz_助君2_info: '',
                        jz_助君: '助君',
                        jz_助君_info: '限定技,出牌阶段,你可以将所有手牌交给一名其他角色,若如此做,该角色的手牌上限+2,且其在摸牌阶段摸牌数量+1',
                        jz_助君3: '助君',
                        jz_助君3_info: '',
                        jz_遁甲: '遁甲',
                        jz_遁甲_info: '出牌阶段限一次,你可以将所有手牌交给一名其他角色,若如此做,该角色翻面',
                        jz_观星: '观星',
                        jz_观星_info: '每名角色的准备阶段,你可以观看牌堆顶的5张牌(存活角色小于4时改为3张),并将其以任意顺序置于牌堆项或牌堆底,如果你把观星的牌都放在牌堆底',
                        jz_夭折: '夭折',
                        jz_夭折_info: '当你死亡时,若你为第一名死亡的角色(复活的角色不算),你可以进行判定,若为红色则让使你死亡的角色进入濒死状态',
                        jz_多病: '多病',
                        jz_多病_info: '锁定技,当你或其他角色对你使用【桃】时,你额外回复一点体力',
                        jz_善射: '善射',
                        jz_善射_info: '限定技,出牌阶段,你可以失去1点体力上限,将体力值变为2,并获得技能【烈弓】和【新烈弓】',
                        jz_诱计: '诱计',
                        jz_诱计_info: '出牌阶段,你可将一张【闪】当做杀使用或打出,且你使用的经转化的【杀】必定命中',
                        jz_诱计2: '诱计',
                        jz_诱计2_info: '',
                        jz_诛心: '诛心',
                        jz_诛心_info: '锁定技,每当你在回合外不因此技能获得牌后,立即摸一张牌',
                        jz_精准: '精准',
                        jz_精准_info: '你可以获得你的判定牌;每当一名其他角色跳过回合内一个阶段时,你可以代替其进行此阶段<li>若为出牌阶段,你可以摸两张牌<li>若为弃牌阶段,你回复一点体力',
                        jz_精准2: '精准',
                        jz_精准2_info: '',
                        jz_精准1: '精准',
                        jz_精准1_info: '',
                        jz_精准3: '精准',
                        jz_精准3_info: '',
                        jz_精准4: '精准',
                        jz_精准4_info: '',
                        jz_精准5: '精准',
                        jz_精准5_info: '',
                        jz_称象: '称象',
                        jz_称象_info: '锁定技,<li>当你在摸牌阶段摸牌后,亮出牌堆顶的四张牌.获得其中任意数量点数之和不大于13的牌,之后你弃两张牌<li>每当你受到一次伤害后,你亮出牌堆顶的四张牌.获得其中任意数量点数之和不大于13的牌',
                        jz_偷袭: '偷袭',
                        jz_偷袭_info: '每当一名其他角色摸牌阶段开始前,你可以流失一点体力并视为你对其使用了一张【杀】,且此杀造成伤害后如果你的体力值大于目标的体力值,则目标减少一点体力上限',
                        jz_偷袭2: '偷袭',
                        jz_偷袭2_info: '',
                        jz_耀武: '耀武',
                        jz_耀武_info: '锁定技,当任意角色对你造成伤害时,若满足下列任意一个条件,则其选择摸一张牌或回复一点体力(不能叠加)<li>伤害来源使用红色【杀】对你造成伤害时<li>伤害来源势力为吴国',
                        jz_芊芊6: '芊芊',
                        jz_芊芊6_info: '',
                        jz_芊芊7: '芊芊',
                        jz_芊芊7_info: '',
                        jz_芊芊8: '芊芊',
                        jz_芊芊8_info: '',
                        jz_袭斩: '袭斩',
                        jz_袭斩_info: '当你使用【杀】对距离为1的目标角色造成伤害时,你可以进行一次判定,若判定结果不为♥️️,你防止此伤害,令其减x点体力上限(x为造成伤害的数量)',
                        jz_大喝: '大喝',
                        jz_大喝_info: '当你使用一张杀时,你摸一张牌',
                        jz_夺权: '夺权',
                        jz_夺权_info: '锁定技,当你的体力值小于等于3时,所有其他角色使用技能后结束当前回合并进入其下一名角色的回合',
                        jz_忍戒: '忍戒',
                        jz_忍戒_info: '锁定技,每当你受到一次伤害或流失体力后,你获得等同于你受到的伤害或流失体力数量的<忍>标记',
                        jz_拜印: '拜印',
                        jz_拜印_info: '觉醒技,准备阶段开始时,若你拥有的<忍>标记枚数不小于3,你减1点体力上限,获得【狼顾】',
                        jz_狼顾: '狼顾',
                        jz_狼顾_info: '锁定技,你造成伤害时,若你的<忍>标记大于0,则你造成的伤害加一,并移除一枚<忍>标记;与你距离小于等于5的其他角色不能使用或打出牌响应你使用的牌,每个回合开始,若你的<忍>标记数大于0,则你摸一张牌',
                        jz_仙法: '仙法',
                        jz_仙法_info: '锁定技,当你受到伤害,造成伤害或流失体力时,你选择并获得一个与受到伤害,造成伤害或流失体力相关的一项技能,直至你下回使用此技能',
                        jz_太虚: '太虚',
                        jz_太虚_info: '每当一名其他角色摸牌阶段结束后,若你的体力值小于等于2且目标手牌数大于0,则你可以回复一点体力,并弃掉其一张手牌',
                        jz_变幻: '变幻',
                        jz_变幻_info: '回合结束阶段,你将一张随机武将牌放置在你的武将牌上并替换在此之前因此技能放置的武将牌(至多放一张),同时获得该武将的所有技能,同时性别,武将名,国籍变为与该武将相同;当你使用【星纬】时移除因此技能放置在你武将上的武将牌',
                        jz_星纬: '星纬',
                        jz_星纬_info: '觉醒技,锁定技,当你进入濒死阶段时:<li>若场上玩家人数大于等于5,则你失去【变幻】,此时若你的体力值小于2,则将体力值回复至2,<li>若存活人数小于5,你摸两张牌并回复至满体力<li>如果使用【星纬】后,你拥有技能【变幻】且存活玩家从5以下增加到5及以上时,则你在回合开始阶段可以使用【道法】',
                        jz_道法: '道法',
                        jz_道法_info: '锁定技,回合开始阶段,若你发动了【星纬】且存活人数不小于5,则你获得一名随机武将的所有技能',
                        jz_芳魂: '芳魂',
                        jz_芳魂_info: '出牌阶段限一次,你可以弃置一张花色为♣️️的牌并流失一点体力,选择1名角色,直至你此回合结束前你获得如下两种效果:<li>你对其使用牌没有次数限制,<li>你每使用一张基本牌后,你摸一张牌',
                        jz_隐退2: '隐退',
                        jz_隐退2_info: '',
                        jz_芳魂3: '芳魂',
                        jz_芳魂3_info: '',
                        jz_隐退3: '隐退',
                        jz_隐退3_info: '',
                        jz_暗香: '暗香',
                        jz_暗香_info: '<li>当你回合开始或造成伤害后,你获得1枚<暗香>标记;<li>你的<暗香>标记最多为3枚;<li>你可以移去1枚<暗香>标记来发动【龙魂】并摸一张牌;<li>当你因此技能而发动【龙魂】时,只需用一张牌进行转化',
                        jz_隐退: '扶汉',
                        jz_隐退_info: '限定技,当一名其他角色死亡后,若你不是主公或者boss,则:<li>你可以减少一点体力上限,摸三张牌,随机获得【龙胆】或【袭敌】其中一个技能.<li>若如此做,你额外行动一回合.在额外回合结束时,你的体力值变为0,且流失1点体力.<li><span style="color: #FF0000">退隐效果:当你死亡时,若赵襄的体力值小于0,则在游戏中移除赵襄,此效果不会被除改名或神圣死亡以外的任何效果所影响</span>',
                        jz_袭敌: '袭敌',
                        jz_袭敌_info: '锁定技,当你使用因【暗香】转化的【杀】或【闪】时,你获得目标的一张手牌',
                        jz_袭敌1: '袭敌',
                        jz_袭敌1_info: '',
                        jz_袭敌2: '袭敌',
                        jz_袭敌2_info: '',
                        jz_龙胆: '龙胆',
                        jz_龙胆_info: '锁定技,当你使用因【暗香】转化的卡牌时,你摸一张牌',
                        jz_武魂: '武魂',
                        jz_武魂_info: '锁定技,当你受到1点伤害后,你令伤害来源获得1枚<梦魇>标记;当你濒死阶段执行结束时,你令拥有<梦魇>标记最多的角色(不包括自己)进行判定,<li>若结果不为【桃】或【桃园结义】,则该角色立即进入濒死阶段.(若其体力值为Infinity则其神圣死亡)<li>若结果为【桃】或【桃园结义】,则该角色回复一点体力并清除<梦魇>标记<li>当一名角色因【武魂】死亡后,你继续使在场玩家中拥有<梦魇>标记数最多的玩家进行【武魂】判定',
                        jz_武魂2: '武魂',
                        jz_武魂2_info: '锁定技,当你受到1点伤害后,你令伤害来源获得1枚<梦魇>标记;当你濒死阶段执行结束时,你令拥有<梦魇>标记最多的角色(不包括自己)进行判定,<li>若判定牌花色不为♥️️,则该角色立即进入濒死阶段.(若其体力值为Infinity则其神圣死亡)<li>若判定结果为♥️️,则该角色回复一点体力并清除<梦魇>标记<li>当一名角色因【武魂】死亡后,你继续使在场玩家中拥有<梦魇>标记数最多的玩家进行【武魂】判定',
                        jz_武魂3: '武魂',
                        jz_武魂3_info: '<span style="color: #FF0000">当神关羽濒死阶段执行结束后,若你的<梦魇>标记为全场最多(或之一),则进行判定,<li>若判定牌花色不为♥️️,则你立即进入濒死阶段.(若你的体力值为Infinity则神圣死亡)<li>若判定牌花色为♥️️,则你回复一点体力并清除<梦魇>标记</span>',
                        jz_隐忍: '隐忍',
                        jz_隐忍_info: '回合开始阶段,你可以摸一张牌',
                        jz_武魂4: '武魂',
                        jz_武魂4_info: '<span style="color: #FF0000">锁定技,当其他角色进入濒死阶段后,若你拥有<梦魇>标记,则减少一枚<梦魇>标记</span>',
                        jz_计取: '计取',
                        jz_计取_info: '出牌阶段,你可以观看一名其他角色的手牌,并可以选择获得或者弃置其中一张,每阶段限一次',
                        jz_驭马: '驭马',
                        jz_驭马_info: '当你装备区里有【-1马】时,你在摸牌阶段可以额外摸一张牌;当你的装备区里有【+1马】时,回合结束阶段你可以摸一张牌;若你的装备区里同时拥有【+1马】和【-1马】时,你的进攻和防御距离均+1,且造成伤害前可以摸一张牌',
                        jz_驭马2: '驭马',
                        jz_驭马2_info: '',
                        jz_驭马3: '驭马',
                        jz_驭马3_info: '',
                        jz_据守: '据守',
                        jz_据守_info: '结束阶段,你可以摸3张牌并将武将牌翻面;当你武将牌背面朝上时,其他人计算与你的距离+1,且你不受【过河拆桥】影响',
                        jz_解围: '解围',
                        jz_解围_info: '当你从背面翻至正面时,你可以弃置一张牌,移动场上的一张牌',
                        jz_魂姿: '魂姿',
                        jz_魂姿_info: '觉醒技,准备阶段,若你的体力小于等于1,你须减1点体力上限,移除技能【寄篱】,并永久获得技能【英姿】、【英魂】和【鹰扬】',
                        jz_安恤: '安恤',
                        jz_安恤_info: '出牌阶段限一次,你可以选择两名手牌数不同的其他角色,令其中手牌多的角色将一张手牌交给手牌少的角色,若<li>这两名角色手牌数相等,你摸一张牌或回复1点体力<li>获得牌的角色手牌数小于给牌角色的手牌数,你摸一张牌<li>你的手牌数等于获得牌角色的手牌数,你可以弃一张手牌回复一点体力<li>(三个效果在同一时间触发,互不干扰)',
                        jz_先辅: '先辅',
                        jz_先辅_info: '锁定技,游戏开始时,你选择一名其他角色,当其受到伤害后,你受到等量的伤害,当其回复体力后,你回复等量的体力;当你死亡后,【先辅】的角色获得技能【筹策】',
                        jz_先辅2: '先辅',
                        jz_先辅2_info: '',
                        jz_先辅3: '先辅',
                        jz_先辅3_info: '',
                        jz_先辅4: '先辅',
                        jz_先辅4_info: '',
                        jz_筹策: '筹策',
                        jz_筹策_info: '当你受到伤害后,你可以判定,若结果为黑色,你弃置一名角色区域里的一张牌',
                        jz_筹策2: '筹策',
                        jz_筹策2_info: '当你受到1点伤害后,你可以判定,若结果为:黑色,你弃置一名角色区域里的一张牌;红色,你选择一名角色,其摸一张牌,若其是【先辅】选择的角色,改为其摸两张牌',
                        jz_戏子天妒: '天妒',
                        jz_戏子天妒_info: '你可以获得作为最终判定结果的判定牌',
                        jz_死战: '死战',
                        jz_死战_info: '锁定技,你免疫你在回合外受到的伤害,并转化为等同伤害数值的<死战>标记,在你的回合结束时你需弃置所有的<死战>标记并失去等同于<死战>标记数量的体力值(该效果不触发其他技能);你造成伤害时增加等同于<死战>标记数量的伤害(最多以此法增加三点伤害)',
                        jz_死战2: '死战',
                        jz_死战2_info: '',
                        jz_死战3: '死战',
                        jz_死战3_info: '',
                        jz_强袭: '强袭',
                        jz_强袭_info: '出牌阶段,你可以弃一张武器牌并失去一点体力,你对你攻击范围内的一名角色造成一点伤害,每回合限一次',
                        jz_黄道: '黄道',
                        jz_黄道_info: '<li>其他角色判定阶段开始前,若其体力值小于你或你的体力值小于等于1,你可以为其添加一张【闪电】,若如此做,其先弃掉判定区内所有的牌<li>你可以立即获得生效的判定牌<li>锁定技,一名角色受到雷属性伤害时你回复一点体力,且当你的体力值为1时免疫即将受到的雷属性伤害',
                        jz_鬼兵: '鬼兵',
                        jz_鬼兵_info: '出牌阶段限三次,你可以弃1张♠️️2～9的手牌,并对一名其他角色造成1点雷属性伤害',
                        jz_黄道2: '黄道',
                        jz_黄道2_info: '',
                        jz_黄道3: '黄道',
                        jz_黄道3_info: '',
                        jz_无尽: '无尽',
                        jz_无尽_info: '锁定技,每当你失去最后一张手牌,你立即摸x张牌(x为存活角色数),游戏开始时,每名角色获得一枚<龙>标记',
                        jz_无尽2: '无尽',
                        jz_无尽2_info: '',
                        jz_龙神: '龙神',
                        jz_龙神_info: '<li>锁定技,当你死亡时,若场上有角色拥有<龙>标记,则你拒绝死亡并弃置一名角色的<龙>标记,增加一点体力上限,摸x张牌并将体力值回复到体力上限<li>回合开始阶段,你可使除你以外的一名有<龙>标记的角色受到你为来源的【杀】的效果',
                        jz_龙神2: '龙神',
                        jz_龙神2_info: '',
                        jz_无尽3: '无尽',
                        jz_无尽3_info: '',
                        jz_屯田3: '屯田',
                        jz_屯田3_info: '',
                        jz_启发: '启发',
                        jz_启发_info: '限定技,其他角色阵亡后,你可以失去一点体力,复活该角色,若如此做,其失去所有技能',
                        jz_天妒2: '天妒',
                        jz_天妒2_info: '',
                        jz_献策: '献策',
                        jz_献策_info: '当一名其他角色在其回合内失去牌后,若其没有手牌,你可以指定一名除该角色以外的其他任意一名角色,目标摸一张牌,并视为目标对其使用一张无视距离和次数限制的【杀】,此【杀】无视其【不能成为杀的目标】的效果',
                        jz_天义: '天义',
                        jz_天义_info: '出牌阶段,你可以和一名角色拼点,若你赢,你获得【奋勇】直到回合结束,若你没赢,你获得【少骑】直到下回合开始.每回合限一次',
                        jz_奋勇: '奋勇',
                        jz_奋勇_info: '出牌阶段,你所打出的【杀】无视距离与防具;你可以多出两张【杀】,且可以多指定一名角色',
                        jz_少骑: '少骑',
                        jz_少骑_info: '此回合出牌阶段你无法使用【杀】,且直到你下个回合开始,你所装备的马均会得到【+2】和【-2】的效果',
                        jz_从志: '从志',
                        jz_从志_info: '觉醒技,回合开始阶段,若你的体力为全场最少的(或之一),你须减1体力上限,获得技能【鹰扬】',
                        jz_修行: '修行',
                        jz_修行_info: '锁定技,弃牌阶段内,你的♥️️手牌不计入手牌数,且你不能弃置你的♥️️手牌',
                        jz_避世: '避世',
                        jz_避世_info: '回合结束阶段,若你不是主公,你可以弃置两张装备牌,视你离开游戏直到新一轮开始',
                        jz_羽化: '羽化',
                        jz_羽化_info: '限定技,出牌阶段或当你处于濒死状态时,你可以丢弃3张♥️️牌并复原你的武将牌,体力回复至体力上限,并变身为【神诸葛果】',
                        jz_得道: '得道',
                        jz_得道_info: '回合开始阶段,<li>若你没有♥️️手牌,则你摸一张牌,并使你在此回合内获得效果<♠️️牌均视为♥️️>,<li>若你有♥️️手牌,则你弃置你判定区内所有的牌',
                        jz_shen_羽化: '羽化',
                        jz_shen_羽化_info: '每当你受到伤害前,可进行一次判定,若结果为红色,你弃掉伤害来源的一张牌,若结果为黑色,你摸x张牌.(x为此次受到伤害的数值)',
                        jz_神迹: '神迹',
                        jz_神迹_info: '你每使用或打出一张♥️️牌,都可摸一张牌',
                        jz_得道2: '得道',
                        jz_得道2_info: '锁定技,你的♠️️牌均视为♥️️',
                        英姿: '英姿',
                        英姿_info: '摸牌阶段,你可以额外摸一张牌',
                        jz_封印3: '一矢',
                        jz_封印3_info: '一名其他角色使用手牌后,你有5%的几率可以封印其武将牌上的技能,使其失去一点体力,并不能回复体力,直至此回合结束',
                        jz_封印1: '封印',
                        jz_封印1_info: '',
                        jz_封印2: '一矢',
                        jz_封印2_info: '一名其他角色使用手牌后,你有40%的几率可以封印其武将牌上的技能,使其失去一点体力,并不能回复体力,直至此回合结束',
                        jz_封印4: '封印',
                        jz_封印4_info: '',
                        jz_封魔: '一矢',
                        jz_封魔_info: '锁定技,回合开始阶段,你选择是否弃置两张手牌.<li>若选择弃牌,你获得【一矢】的第一种效果直至你的下回合开始,<li>否则你获得【一矢】的第二种效果直至你的下回合开始<li><span style="color: #FF0000">先机效果:游戏开始时,你获得【一矢】的第一种效果直至你的回合开始,此效果不会被除改名以外的任何效果所影响</span>',
                        jz_换天: '换天',
                        jz_换天_info: '<li>(限身份模式使用)觉醒技,当你死亡时,取消结算,使全场角色重新选择武将牌,重新分发身份牌(禁用自由选将和更换武将),体力值回复至体力上限.且你获得技能【回天】',
                        jz_结姻: '联姻',
                        jz_结姻_info: '出牌阶段限一次,你可以弃两张手牌并选择你使用【结姻】指定的角色,你与其各回复一点体力并摸一张牌',
                        jz_影剑: '影剑',
                        jz_影剑_info: '锁定技,其他角色使用装备牌时,若你的体力值等于你的体力上限,则你将一件随机装备牌置于你的装备区',
                        jz_返乡: '返乡',
                        jz_返乡_info: '觉醒技,准备阶段开始时,若你【结姻】的角色体力值不满且你的体力值为全场最少,则你回复1点体力并增加一点体力上限,失去技能【联姻】并获得技能【影剑】',
                        jz_结姻1: '结姻',
                        jz_结姻1_info: '限定技,游戏开始时或你的回合开始前,你可以选择一名异性角色.选择目标后,你获得技能【联姻】',
                        jz_结姻2: '结姻',
                        jz_结姻2_info: '',
                        jz_奇门: '奇门',
                        jz_奇门_info: '每当一名其他角色死亡后,你可以摸三张牌',
                        jz_倾计: '倾计',
                        jz_倾计_info: '锁定技,当你成为其他角色其他角色的武将主动技能的目标时,取消之',
                        jz_无畏: '无畏',
                        jz_无畏_info: '每当你成为其他角色的普通锦囊卡牌的目标时,你可以弃一张锦囊牌,将效果返回给使用者',
                        jz_白龙: '白龙',
                        jz_白龙_info: '锁定技,每当你在回合外受到伤害后,该回合内你的防御距离+1',
                        jz_涯角: '涯角',
                        jz_涯角_info: '每当你使用或打出一张手牌时,你可以亮出牌堆顶的一张牌,若此牌与你此次使用或打出的牌类别相同,你可以将之交给任意一名角色;若不同则你可以将之置入弃牌堆',
                        jz_乱武: '乱武',
                        jz_乱武_info: '限定技,出牌阶段,可令除你外的所有角色依次对与其距离最近的另一名角色使用一张【杀】,无法如此做者失去1点体力.若有角色因【乱武】死亡,则你刷新【乱武】',
                        jz_乱武2: '乱武',
                        jz_乱武2_info: '',
                        jz_乱武模式: '乱武',
                        jz_乱武模式_info: '锁定技,所有角色视为拥有【完杀】.出牌阶段,你可令除你外的所有角色依次对与其距离最近的另一名角色使用一张【杀】,无法如此做者失去1点体力',
                        jz_制蛮: '制蛮',
                        jz_制蛮_info: '当你对一名其他角色造成伤害时,你可以防止此伤害,获得其一张手牌',
                        jz_心战: '心战',
                        jz_心战_info: '出牌阶段限一次,你可以观看牌堆顶的4张牌,展示其中任意数量♥️️的牌并获得之',
                        jz_白龙2: '白龙',
                        jz_白龙2_info: '',
                        jz_噬尸: '噬尸',
                        jz_噬尸_info: '每当你击杀一名角色后,你可以选择:<li>体力值回复至体力上限<li>摸三张牌',
                        jz_人公: '人公',
                        jz_人公_info: '锁定技,你不能成为延时类锦囊的目标',
                        jz_bossWin: '胜利',
                        jz_bossWin_info: '锁定技,若你为<冰波水微>,则你的胜利条件为:体力值为1且手牌数大于等于10;若你为<挑战者>,你的胜利条件为:你的体力值为1且没有手牌,失败条件为:体力值无限(<你>为当前操作角色);若boss死亡,在重整阶段时无法进行胜利结算',
                        jz_蛊惑: '蛊惑',
                        jz_蛊惑_info: '当一名其他角色受到伤害前,回复体力前,你可以与其先后投掷骰子,若:<li>其点数大于你的点数,则你失去一点体力.<li>其点数等于你的点数,你摸一张牌<li>其点数小于你的点数,你可以选择该阶段所执行的数值增加或减少x点.若不进行选择,你摸一张牌.(x为你与其先后投掷骰子点数的差)',
                        jz_龙胆1: '龙胆',
                        jz_龙胆1_info: '你可以将【杀】当【闪】,【闪】当【杀】使用或打出.你发动龙胆时:若你的杀被【闪】抵消,则你可以对另一名角色造成1点伤害;若你的【闪】抵消了【杀】,则你可以令一名其他角色回复1点体力.(不能是【杀】的使用者)',
                        jz_空城: '空城',
                        jz_空城_info: '锁定技,当你没有手牌时,不能成为[杀]或[决斗]的目标',
                        die: '阵亡',
                        die_info: '',
                        jz_救援: '救援',
                        jz_救援_info: '<li>当你回复体力前,你可以选择在此阶段后发动【救援】(孙权)的技能效果<li>当你受伤时,你可以选择在此阶段后执行【醇醪】的技能效果<li>出牌阶段开始时,你可以选择在此阶段后发动【英魂】的技能效果',
                        jz_制衡: '制衡',
                        jz_制衡_info: '出牌阶段限一次,你可以弃置至多X张牌(X为你的体力上限),摸等量的牌',
                        jz_突袭: '突袭',
                        jz_突袭_info: '摸牌阶段摸牌时,你可以少摸任意张牌,选择等量的角色的各一张手牌,使选择的第一名目标进入突袭状态,并修正其的添加技能,移除技能函数',
                        jz_突袭2: '突袭',
                        jz_突袭2_info: '',
                        jz_boss_幻化: '幻化',
                        jz_boss_幻化_info: '出牌阶段限三次,你可以将一张牌转化为另一张不同名的牌',
                        jz_流离: '流离',
                        jz_流离_info: '当你成为其他角色卡牌的目标时,可以弃置一张手牌将其转移给一名角色,此角色不能是你',
                        jz_连环: '连环',
                        jz_连环_info: '<li>出牌阶段,你可以将你任意一张♣️️手牌当【铁索连环】使用或重铸.<li>锁定技,处于横置状态的所有角色共享非暂时技能<li>锁定技,解除横置的角色把永久技能(限定技,觉醒技除外)回复至游戏开始时(因【穿心】类技能失去的技能无法重置)<li>锁定技,你死亡后或失去此技能后,第一次有角色触发重置或横置时,所有角色的永久技能(限定技,觉醒技除外)回复至游戏开始(因【穿心】类技能失去的技能无法重置)',
                        jz_boss连环: '连环',
                        jz_boss连环_info: '<li>锁定技,游戏开始时(或你进入游戏时)你解除横置状态,除你之外的所有角色进入横置状态<li>锁定技,你获得横置角色的技能,且【郭嘉】和【界郭嘉】不在场时,其他角色使用技能后其移除此技能<li>出牌阶段,你可以将你任意一张♣️️手牌当【铁索连环】使用或重铸',
                        jz_boss落凤: '落凤',
                        jz_boss落凤_info: '锁定技,<li>你横置后,取消横置状态<li>当你处于濒死状态或失去体力上限时,你失去一点体力上限(不触发技能),丢弃你判定区里的牌,并复原你的武将牌,摸5张牌且体力回复至体力上限(最多使用7次)',
                        jz_秘术: '秘术',
                        jz_秘术_info: '<li>锁定技,前五轮开始时,你获得一个随从木人和一个随从土偶<li>出牌阶段你可以调用随从木人或随从土偶',
                        jz_木人: '木人',
                        jz_木人_info: '锁定技,你对其他角色造成伤害后,若其没有<中毒>,你令其获得<中毒>',
                        jz_土偶: '土偶',
                        jz_土偶_info: '锁定技,你对其他角色造成伤害后,你令其进入混乱',
                        jz_强行: '强行',
                        jz_强行_info: '锁定技,其他角色回合结束后你额外进行一个回合',
                        jz_八阵: '八阵',
                        jz_八阵_info: '锁定技,视为你始终拥有【八卦阵】的效果',
                        jz_玄武: '玄武',
                        jz_玄武_info: '锁定技,<li>其他角色回合开始前,其随机添加一种负面效果<li>魔王诸葛不受【玄武】的影响',
                        jz_青龙: '青龙',
                        jz_青龙_info: '<li>出牌阶段限一次,每轮限一次,你将5点雷电伤害随机分配给任意其他角色<li>锁定技,你不会受到雷电伤害',
                        jz_青龙2: '青龙',
                        jz_青龙2_info: '',
                        jz_青龙3: '青龙',
                        jz_青龙3_info: '',
                        jz_免疫: '免疫',
                        jz_免疫_info: '锁定技,<li>部分武将技能对你无效<li>此技能不可被更改<li>你不会以正常方式死亡,你被强制即死时判挑战者失败',
                        jz_连环2: '连环',
                        jz_连环2_info: '<li>出牌阶段,你可以将你任意一张♣️️手牌当【铁索连环】使用或重铸.<li>锁定技,处于横置状态的其他角色添加【封印】直到其解除横置状态<li>锁定技,你横置后解除横置状态',
                        jz_同归: '同归',
                        jz_同归_info: '每当你的牌被弃置后,你可以弃置一名其他角色的手牌',
                        jz_复仇: '复仇',
                        jz_复仇_info: '每当你受到一次伤害,可进行一次判定,若结果不为♥️️:<li>若伤害来源处于出牌阶段,其结束出牌阶段<li>若伤害来源不处于出牌阶段,你摸一张牌',
                        jz_黄天: '黄天',
                        jz_黄天_info: '任意角色判定时,你可以使所有角色无法在此次判定发动技能',
                        jz_鬼道: '鬼道',
                        jz_鬼道_info: '锁定技,你受到的属性伤害减一',
                        jz_祭天: '祭天',
                        jz_祭天_info: '每当你使用或打出一张【闪】,可令任意一名其他角色进行一次判定,若结果为:<li>♥️️:其受到一点伤害,将你判定区内的牌弃置;<li>♦️️:其受到两点火焰伤害,并弃置你所有的装备区的牌;<li>♣️️:其受到一点雷电伤害,并且你回复一点体力;<li>♠️️:其受到两点雷电伤害,并且你将所有手牌弃置,摸两张牌',
                        jz_鬼道2: '鬼道',
                        jz_鬼道2_info: '<li>每名角色的回合限三次,任意一名角色的判定生效前,你可以打出一张牌,使此牌变为【闪】,并把该判定牌收入手牌(不更改判定结果)<li>锁定技,游戏开始时,你创建并使用一张【闪电】',
                        jz_太平: '太平',
                        jz_太平_info: '锁定技,视为你始终拥有【八卦阵】的效果',
                        jz_祭天2: '祭天',
                        jz_祭天2_info: '每当你使用或打出一张【闪】,可令任意一名其他角色进行一次判定,若结果为:<li>♥️️:其受到一点伤害,将你判定区内的牌弃置;<li>♦️️:其受到两点火焰伤害,并弃置你所有的装备区的牌;<li>♣️️:其受到一点雷电伤害,并且你回复一点体力;<li>♠️️:其受到两点雷电伤害,并且你将所有手牌弃置,摸两张牌',
                        jz_cl2: '类型',
                        jz_cl2_info: '结束阶段,你可以摸一张牌',
                        jz_悲歌2: '悲歌',
                        jz_悲歌2_info: '',
                        jz_悲歌: '悲歌',
                        jz_悲歌_info: '一名角色每受到【杀】造成的一次伤害,你可以弃一张牌,并令其进行一次判定,判定结果为:<li>♥️️伤害来源不能使用、打出或弃置基本牌直到其下一回合开始;<li>♦️️︎该角色摸两张牌;<li>♣️️伤害来源不能使用、打出或弃置锦囊牌直到其下一回合开始;<li>♠️️伤害来源将其武将牌翻面',
                        jz_断肠: '断肠',
                        jz_断肠_info: '锁定技,击杀你的角色不能使用、打出或弃置锦囊牌直到游戏结束',
                        jz_时机: '时机',
                        jz_时机_info: '结束阶段,你可以摸一张牌',
                        jz_纳蛮: '纳蛮',
                        jz_纳蛮_info: '<li>锁定技,每轮游戏开始,你需选择两个花色,这一轮游戏内你只能对你选择的花色的【杀】使用【纳蛮】<li>其他角色使用或打出的【杀】结算后,你可以获得此【杀】并置于你的武将牌上',
                        jz_协穆: '协穆',
                        jz_协穆_info: '每当你成为其他角色卡牌的目标时,若此牌有花色,你可以选择你武将牌上与此牌相同花色的【杀】取消此牌对你的效果,摸两张牌并将你选择的【杀】放置于牌堆顶',
                        jz_纳蛮Start: '纳蛮',
                        jz_纳蛮Start_info: '',
                        jz_纳蛮Start2: '纳蛮',
                        jz_纳蛮Start2_info: '',
                        jz_即死: '即死',
                        jz_即死_info: '即死其他角色',
                        改判: '改判',
                        改判_info: '一名角色的判定牌生效前,你可以打出一张黑色牌替换之',
                        jz_舍宴add: '舍宴',
                        jz_舍宴add_info: '锁定技,当你添加技能时,取消之',
                        jz_舍宴: '舍宴',
                        jz_舍宴_info: '当你成为一张普通锦囊牌的目标时(借刀杀人等带有指向目标的锦囊除外),你可以为此牌增加一个目标,且可以让其不能添加技能直到其回合结束,或减少一个目标(目标数至少为一),且可以令其不能失去技能直到其回合结束',
                        jz_舍宴remove: '舍宴',
                        jz_舍宴remove_info: '锁定技,当你失去技能时,若即将失去的技能不包含此技能,则取消之.若即将失去的技能中包含此技能,则改为只失去此技能',
                        jz_秉正: '秉正',
                        jz_秉正_info: '出牌阶段结束时或回合开始前,你可以令手牌数不等于体力值的一名角色弃置一张手牌或摸一张牌.若其手牌数等于体力值,你摸一张牌,且可以交给该角色一张牌',
                        jz_乱击: '乱击',
                        jz_乱击_info: '出牌阶段,你可以将任意两张相同花色的手牌当做【万箭齐发】<span style="color: #00FFFF">使用</span>',
                    },
                };
                lib.config.all.characters.add('军争加强');
                lib.config.characters.add('军争加强');
                for (var i in QQQ.character) {
                    QQQ.character[i][4].add(`ext:军争加强/image/${i}.jpg`);
                }
                lib.translate['军争加强_character_config'] = `军争加强`;
                return QQQ;
            });
        },
        config: {
            music: {
                name: '背景音乐',
                intro: '背景音乐:开启后重启游戏生效',
                init: false,
            },
            Filter: {
                name: '无限制模式',
                intro: '无限制模式:开启后重启游戏生效.游戏开始前就存在于武将牌上的技能(大部分)无限制使用,一回合最多五次(部分技能可能因此bug)',
                init: false,
            },
            luanwu: {
                name: '乱武模式',
                intro: '乱武模式:开启后重启游戏生效.将扩展内和游戏内自带的贾诩的【乱武】增强',
                init: false,
            },
            blank: {
                name: '白板模式',
                intro: '白板模式:开启后重启游戏生效.所有角色武将牌上技能失效(变态武将的技能除外)',
                init: false,
            },
            color: {
                name: '字体颜色',
                intro: '字体颜色:开启后重启游戏后生效,调整技能描述中部分字的颜色',
                init: true,
            },
        },
        package: {
            intro: "特别说明:<li>本扩展会做一些民间包武将,技能可能也会改动<br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>",
            author: '诗笺',
            version: '2.5',
        },
    };
});

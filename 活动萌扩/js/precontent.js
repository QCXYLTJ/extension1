import { lib, game, ui, get, ai, _status } from '../../../noname.js';
export function precontent(bilibilicharacter) {
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
    //判断是否有XX扩展
    game.TrueHasExtension = function (ext) {
        return lib.config.extensions && lib.config.extensions.includes(ext);
    };
    game.HasExtension = function (ext) {
        return game.TrueHasExtension(ext) && lib.config['extension_' + ext + '_enable'];
    };
    //颜色显示
    get.bolColor = function (str, color) {
        return "<span class='texiaotext' style='color:" + color + "'>" + str + '</span>';
    };
    //提示框--摘自扩展OL
    game.bolSay = function (str, num) {
        if (game.game_bolSayDialog_height == undefined) game.game_bolSayDialog_height = -45;
        if (game.game_bolSayDialog_num == undefined) game.game_bolSayDialog_num = 0;
        game.game_bolSayDialog_num++;
        var func = function () {
            game.game_bolSayDialog_onOpened = true;
            game.game_bolSayDialog_height += 45;
            var dialog = ui.create.dialog('hidden');
            dialog.classList.add('static');
            dialog.add('' + str + '');
            dialog.classList.add('popped');
            dialog.style['pointer-events'] = 'none';
            dialog.style['font-family'] = "'STXinwei','xinwei'";
            ui.window.appendChild(dialog);
            var width = str.length * 20;
            if (num != undefined) width -= num * 20;
            dialog._mod_height = -16;
            dialog.style.width = width + 'px';
            lib.placePoppedDialog(dialog, {
                clientX: (dialog.offsetLeft + dialog.offsetWidth / 2) * game.documentZoom,
                clientY: (dialog.offsetTop + dialog.offsetHeight / 4) * game.documentZoom,
            });
            if (dialog._mod_height) dialog.content.firstChild.style.padding = 0;
            dialog.style.left = 'calc(50% - ' + (width + 16) / 2 + 'px' + ')';
            dialog.style.top = 'calc(5% + ' + game.game_bolSayDialog_height + 'px)';
            dialog.style['z-index'] = 999999;
            setTimeout(function () {
                dialog.delete();
                if (game.game_bolSayDialog_height > ui.window.offsetHeight * 0.95 - dialog.offsetHeight * 2) game.game_bolSayDialog_height = -45;
                setTimeout(function () {
                    if (game.game_bolSayDialog_num <= 0) game.game_bolSayDialog_height = -45;
                }, 250);
            }, 1500);
            setTimeout(function () {
                delete game.game_bolSayDialog_onOpened;
            }, 500);
        };
        var interval = setInterval(function () {
            if (game.game_bolSayDialog_onOpened == undefined) {
                func();
                game.game_bolSayDialog_num--;
                clearInterval(interval);
            }
        }, 100);
    };
    game.isInSpringFestival = function () {
        const date = new Date(),
            time = {
                year: date.getFullYear(),
                month: date.getMonth() + 1,
                day: date.getDate(),
            };
        return time.year == 2024 && time.month == 2 && time.day >= 10 && time.day <= 24;
    };
    //加载
    game.bolLoadPack = function (pack) {
        for (var i in pack) {
            for (var j in pack[i]) {
                lib[i][j] = pack[i][j];
                if (i == 'skill') game.finishSkill(j);
            }
        }
    };
    //武将
    game.bolLoadCharacter = function (pack) {
        for (var i in pack) lib.character[i] = pack[i];
    };
    //卡牌
    game.bolLoadCard = function (pack) {
        for (var i in pack) lib.card[i] = pack[i];
    };
    //技能
    game.bolLoadSkill = function (pack) {
        for (var i in pack) lib.skill[i] = pack[i];
        game.finishSkill(i);
    };
    //翻译(动态)
    game.bolLoadDyTrans = function (pack) {
        for (var i in pack) lib.dynamicTranslate[i] = pack[i];
    };
    //翻译
    game.bolLoadTrans = function (pack) {
        for (var i in pack) lib.translate[i] = pack[i];
    };
    //点击显示
    get.bolskillTips = function (tipname, id) {
        var dibeijing = ui.create.div('.bol-dibeijing', document.body);
        dibeijing.style.zIndex = 16;
        var skilltip = ui.create.div('.bol-skilltip', dibeijing);
        skilltip.innerHTML = tipname;
        var herf = document.getElementById(id);
        if (herf) {
            var left = herf.getBoundingClientRect().left;
            if (game.getBolPhone()) left += herf.offsetParent.offsetLeft;
            left += document.body.offsetWidth * 0.15;
            skilltip.style.left = left + 'px';
            skilltip.style.top = herf.getBoundingClientRect().top + 30 + 'px';
        }
        dibeijing.listen(function (e) {
            e.stopPropagation();
            this.remove();
        });
    };
    get.bolInformX = function (str1, str2) {
        if (_status.bolInform_temp) delete _status.bolInform_temp;
        _status.bolInform_temp = Math.random().toString(36).slice(-8);
        return "<a id='" + _status.bolInform_temp + "' style='color:unset' href=\"javascript:get.bolskillTips('" + str2 + "','" + _status.bolInform_temp + '\');">' + str1 + '※</a>';
    };
    //筛选没有同名替换的武将
    get.originalCharacterList = function (filter) {
        if (!_status.characterlist) lib.skill.pingjian.initList();
        if (filter == undefined) filter = () => true;
        if (typeof filter == 'string') filter = (i) => i == filter;
        if (!_status.mx_originalCharcter) {
            const map = lib.characterReplace || {};
            _status.mx_originalCharcter = Object.keys(map).reduce((list, i) => {
                list.addArray(map[i].filter((j) => j != i));
                return list;
            }, []);
        }
        return _status.characterlist.slice().filter((i) => filter(i) && !_status.mx_originalCharcter.includes(i));
    };
    game.import('character', function (lib, game, ui, get, ai, _status) {
        const QQQ = {
            name: '活动萌扩',
            connect: true,
            character: {
                cxyLiJue: ['male', 'qun', 6, ['cxyYangWu', 'cxyMoJun'], ['ext:活动萌扩/image/cxyLijue.jpg']],
                cxyGuoSi: ['male', 'qun', 4, ['cxyYangLie', 'cxyMoJun'], ['ext:活动萌扩/image/cxyGuoSi.jpg']],
                cxyZhangJi: ['male', 'qun', 4, ['cxyJieLve', 'cxyMoJun'], ['ext:活动萌扩/image/cxyZhangJi.jpg']],
                cxyFanChou: ['male', 'qun', 4, ['cxyFanGong', 'cxyMoJun'], ['ext:活动萌扩/image/cxyFanChou.jpg']],
                cxyDongYue: ['male', 'qun', 4, ['cxyKuangXi', 'cxyMoJun'], ['ext:活动萌扩/image/cxyDongYue.jpg']],
                cxyNiuFuDongXie: ['male', 'qun', 4, ['cxyTunJun', 'cxyJiaoXia', 'cxyMoJun'], ['ext:活动萌扩/image/cxyNiuFuDongXie.jpg']],
                fd_kuangshen04: ['male', 'shen', '4/6', ['fd_makeBug', 'fd_tequ', 'fd_guoshou', 'reqimou', 'zhaxiang', 'tairan', 'cxyMoJun'], ['ext:活动萌扩/image/fd_kuangshen04.jpg']],
                cxyHuBenJun: ['male', 'qun', 5, ['cxyHuYing'], ['ext:活动萌扩/image/cxyHuBenJun.jpg']],
                cxyBaoLveJun: ['male', 'qun', 3, ['cxyBaoYing'], ['ext:活动萌扩/image/cxyBaoLveJun.jpg']],
                cxyFengYaoJun: ['female', 'qun', 3, ['cxyFengYing'], ['ext:活动萌扩/image/cxyFengYaoJun.jpg']],
                cxyLongXiangJun: ['male', 'qun', 4, ['cxyLongYing'], ['ext:活动萌扩/image/cxyLongXiangJun.jpg']],
                cxyFeiXiongJunZuo: ['male', 'qun', 4, ['cxyJingQi'], ['ext:活动萌扩/image/cxyFeiXiongJunZuo.jpg']],
                cxyFeiXiongJunYou: ['male', 'qun', 4, ['cxyRuiQi'], ['ext:活动萌扩/image/cxyFeiXiongJunYou.jpg']],
                cxySunJian: ['male', 'qun', 6, ['cxyYingHun', 'cxyPoLu'], ['ext:活动萌扩/image/cxySunJian.jpg']],
                cxyHuaXiong: ['male', 'qun', 8, ['cxyMoQu', 'cxyYaoWu', 'cxyMoJun'], ['ext:活动萌扩/image/cxyHuaXiong.jpg']],
            },
            skill: {
                //牢狂
                fd_makeBug: {
                    charlotte: true,
                    trigger: { player: 'phaseEnd' },
                    forced: true,
                    async content(event, trigger, player) {
                        if (player.countCards('h') < 7) await player.drawTo(7);
                        const target = game.me.isIn() && game.me.isEnemiesOf(player) ? game.me : game.me.getEnemies().randomGet();
                        let cards = player.getCards('h');
                        if (!cards.length) {
                            player.chat('谁在阻止我提PR？'); //[doge]
                            game.over(game.me.isFriendsOf(player));
                            return;
                        }
                        const Original = cards.randomGet(),
                            PR = lib.card.list.randomGet();
                        const card = game.createCard(Original.name, PR[0], PR[1]);
                        cards[cards.indexOf(Original)] = card;
                        const { bool, links } = await target
                            .chooseButton(['请猜测' + get.translation(player) + '伪装的手牌', cards], true)
                            .set('ai', (button) => {
                                const cards = get.event('cards').slice();
                                const card = cards.find((card) => lib.card.list.some((cardx) => cardx[2] == card.name) && !lib.card.list.some((cardx) => cardx[2] == card.name && cardx[0] == card.suit && cardx[0] == card.number && cardx[3] == get.nature(card, false)));
                                return button.link == card ? 3 : 1 + Math.random();
                            })
                            .set('cards', cards).forResult();
                        if (bool) {
                            if (links[0] == card) {
                                target.popup('判断正确', 'wood');
                                game.log(target, '猜测', '#g正确');
                            } else {
                                target.popup('判断错误', 'fire');
                                game.log(target, '猜测', '#y错误');
                                player.gain(lib.skill.fd_makeBug.getYing(2), 'gain2');
                                game.cardsGotoPile(lib.skill.fd_makeBug.getYing(20), () => ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length - 1)]);
                            }
                        }
                    },
                    getYing(count) {
                        let cards = [];
                        if (typeof count != 'number') count = 1;
                        while (count--) {
                            let card = game.createCard2('ying', 'none', 114514);
                            cards.push(card);
                        }
                        return cards;
                    },
                },
                fd_tequ: {
                    charlotte: true,
                    enable: ['chooseToUse', 'chooseToRespond'],
                    filter(event, player) {
                        if (!player.countCards('hes', (card) => get.card(name, player) == 'ying')) return false;
                        return get.inpileVCardList((info) => info[0] != 'equip').some((info) => event.filterCard({ name: info[2], nature: info[3] }, player, event));
                    },
                    chooseButton: {
                        dialog(event, player) {
                            var list = get.inpileVCardList((info) => info[0] != 'equip').filter((info) => event.filterCard({ name: info[2], nature: info[3] }, player, event));
                            return ui.create.dialog('特取', [list, 'vcard']);
                        },
                        filter(button, player) {
                            return get.event().parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
                        },
                        check(button) {
                            if (get.event().parent.type != 'phase') return 1;
                            const player = get.event('player');
                            return player.getUseValue({ name: button.link[2], nature: button.link[3] });
                        },
                        backup(links, player) {
                            return {
                                charlotte: true,
                                filterCard(card, player) {
                                    return card.name == 'ying';
                                },
                                popname: true,
                                check() {
                                    return 1;
                                },
                                position: 'hes',
                                viewAs: { name: links[0][2], nature: links[0][3] },
                            };
                        },
                        prompt(links, player) {
                            return '将一张【影】当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用或打出';
                        },
                    },
                    hiddenCard(player, name) {
                        if (!lib.inpile.includes(name) || !player.countCards('hes')) return false;
                        const type = get.type2(name);
                        return type == 'basic' || type == 'trick';
                    },
                    ai: {
                        fireAttack: true,
                        respondSha: true,
                        respondShan: true,
                        skillTagFilter(player) {
                            if (!player.countCards('hes')) return false;
                        },
                        order: 10,
                        result: {
                            player(player) {
                                if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                return 1;
                            },
                        },
                    },
                    subSkill: { backup: {} },
                },
                fd_guoshou: {
                    charlotte: true,
                    trigger: { global: ['useCard1', 'damageBefore'] },
                    filter(event, player) {
                        if (event.player == player) return false;
                        if (event.name == 'useCard') return event.player != player && get.tag(event.card, 'damage');
                        return !event.source || event.source != player;
                    },
                    forced: true,
                    logTarget: 'player',
                    async content(event, trigger, player) {
                        if (trigger.name == 'useCard') trigger.customArgs.default.customSource = player;
                        else trigger.source = player;
                    },
                    group: 'fd_guoshou_win',
                    subSkill: {
                        win: {
                            charlotte: true,
                            trigger: { global: ['dieAfter', 'washCard'] },
                            filter(event, player) {
                                if (event.name == 'die') return event.player == game.me;
                                return Array.from(ui.cardPile.childNodes).filter((card) => card.name == 'ying').length >= 300;
                            },
                            forced: true,
                            forceDie: true,
                            async content(event, trigger, player) {
                                player.chat('我的PR已经深入了无名杀的骨髓！'); //[doge]
                                game.over(game.me.isFriendsOf(player));
                            },
                        },
                    },
                },
                //核心魔军
                cxyMoJun: {
                    trigger: { global: 'damageEnd' },
                    filter(event, player) {
                        if (!event.source || !event.source.isAlive()) return false;
                        if (get.attitude(player, event.source) < 2) return false;
                        if (!event.card || event.card.name != 'sha') return false;
                        return event.notLink();
                    },
                    forced: true,
                    content() {
                        'step 0';
                        trigger.source.judge(function (card) {
                            return get.color(card) == 'black' ? 2 : 0;
                        });
                        ('step 1');
                        if (result.bool) {
                            event.targets = game.filterPlayer(function (current) {
                                return get.attitude(player, current) > 0;
                            });
                            event.targets.sort(lib.sort.seat);
                            game.asyncDraw(event.targets);
                        }
                    },
                },
                cxyJieLve: {
                    trigger: { source: 'damageEnd' },
                    filter(event, player) {
                        if (!event.player.isAlive() || event.player == player) return false;
                        return event.player.num('hej') > 0;
                    },
                    logTarget: 'player',
                    forced: true,
                    content() {
                        'step 0';
                        var num = 0;
                        if (trigger.player.num('h')) num++;
                        if (trigger.player.num('e')) num++;
                        if (trigger.player.num('j')) num++;
                        if (num) {
                            player.gainPlayerCard(trigger.player, 'hej', num, true).set('filterButton', function (button) {
                                for (var i = 0; i < ui.selected.buttons.length; i++) {
                                    if (get.position(button.link) == get.position(ui.selected.buttons[i].link)) return false;
                                }
                                return true;
                            });
                        } else {
                            event.finish();
                        }
                        ('step 1');
                        player.loseHp();
                    },
                },
                cxyTunJun: {
                    trigger: { global: 'roundStart' },
                    filter(event, player) {
                        return player.maxHp != 1;
                    },
                    forced: true,
                    content() {
                        'step 0';
                        player.loseMaxHp();
                        ('step 1');
                        player.draw(Math.min(player.maxHp, 20));
                    },
                },
                cxyFanGong: {
                    trigger: { target: 'useCardToAfter' },
                    filter(event, player) {
                        return get.attitude(player, event.player) < 0;
                    },
                    direct: true,
                    content() {
                        player
                            .chooseToUse('是否发动反攻，对' + get.translation(trigger.player) + '使用一张[杀]？', { name: 'sha' })
                            .set('filterTarget', function (card, player, target) {
                                return target == _status.event.source;
                            })
                            .set('selectTarget', -1)
                            .set('source', trigger.player)
                            .set('logSkill', 'cxyFanGong');
                    },
                },
                cxyJiaoXia: {
                    trigger: { global: 'phaseDiscardBefore' },
                    filter(event, player) {
                        return get.attitude(player, event.player) > 2;
                    },
                    forced: true,
                    logTarget: 'player',
                    content() {
                        trigger.player.addTempSkill('cxyJiaoXia_buff', 'phaseDiscardEnd');
                    },
                    subSkill: {
                        buff: {
                            mod: {
                                maxHandcard(player, num) {
                                    var hs = player.getCards('h');
                                    for (var i = 0; i < hs.length; i++) {
                                        if (get.color(hs[i]) == 'black') {
                                            num++;
                                        }
                                    }
                                    return num;
                                },
                                cardDiscardable(card, player, name) {
                                    if (name == 'phaseDiscard' && get.color(card) == 'black') return false;
                                },
                            },
                        },
                    },
                },
                cxyKuangXi: {
                    enable: 'phaseUse',
                    filter(event, player) {
                        return !player.hasSkill('cxyKuangXi_silent');
                    },
                    filterTarget: lib.filter.notMe,
                    content() {
                        'step 0';
                        player.loseHp();
                        target.damage('nocard');
                        ('step 1');
                        if (
                            !target.isAlive() ||
                            target.hasHistory('damage', function (evt) {
                                return evt.getParent('cxyKuangXi') == event && evt._dyinged;
                            })
                        )
                            player.addTempSkill('cxyKuangXi_silent');
                    },
                    ai: {
                        threaten(player, target) {
                            if (
                                !game.hasPlayer(function (current) {
                                    return player.getFriends().includes(current) && current.hp <= target.hp;
                                })
                            )
                                return 1;
                            return 1 + target.hp / 2;
                        },
                        order: 1,
                        result: {
                            target(player, target) {
                                if (
                                    player.hp +
                                    player.countCards('hs', { name: ['jiu', 'tao'] }) +
                                    game.countPlayer(function (current) {
                                        return current.hasSkill('cxyBaoYing') && !current.awakenedSkills.includes('cxyBaoYing');
                                    }) <=
                                    0
                                )
                                    return 0;
                                return get.damageEffect(target, player);
                            },
                            player: 1,
                        },
                    },
                    subSkill: { silent: { charlotte: true } },
                },
                cxyYangWu: {
                    trigger: { player: 'phaseZhunbeiBegin' },
                    direct: true,
                    content() {
                        'step 0';
                        event.targets = game.filterPlayer(function (current) {
                            return current != player;
                        });
                        event.targets.sort(lib.sort.seat);
                        for (var i = 0; i < event.targets.length; i++) {
                            event.targets[i].damage(player);
                        }
                        ('step 1');
                        player.loseHp();
                    },
                },
                cxyYangLie: {
                    trigger: { player: 'phaseZhunbeiBegin' },
                    direct: true,
                    content() {
                        'step 0';
                        var targets = game
                            .filterPlayer(function (current) {
                                return current != player;
                            })
                            .sortBySeat();
                        for (var i = 0; i < targets.length; i++) {
                            player.gainPlayerCard(targets[i], 'hej', true);
                        }
                        ('step 1');
                        player.loseHp();
                    },
                },

                cxyRuiQi: {
                    trigger: { global: 'phaseDrawBegin' },
                    filter(event, player) {
                        return get.attitude(player, event.player) > 2;
                    },
                    logTarget: 'player',
                    forced: true,
                    content() {
                        trigger.num++;
                    },
                    ai: {
                        threaten: 2.5,
                    },
                },
                cxyHuYing: {
                    trigger: { player: 'phaseUseBegin' },
                    filter(event, player) {
                        return game.cxyJiangLing && game.cxyJiangLing.isAlive();
                    },
                    forced: true,
                    content() {
                        'step 0';
                        player.chooseCard('交给一张[杀]，或失去1点体力，令从牌堆获得一张[杀]', { name: 'sha' }).ai = function (card) {
                            if (player.countCards('h', { name: 'sha' }) < 2) {
                                if (player.hp <= 2) return 2;
                                if (
                                    !game.hasPlayer(function (current) {
                                        return player.canUse({ name: 'sha' }, current);
                                    })
                                )
                                    return 2;
                                return -1;
                            }
                            return 2;
                        };
                        ('step 1');
                        if (result.bool) {
                            game.cxyJiangLing.gain(result.cards[0], player);
                            player.$give(result.cards[0], game.cxyJiangLing);
                        } else {
                            player.loseHp();
                            var card = get.cardPile('sha');
                            game.cxyJiangLing.gain(card);
                            game.cxyJiangLing.$draw(card);
                        }
                    },
                },
                cxyJingQi: {
                    global: 'cxyJingQi_distance',
                    ai: { threaten: 1.5 },
                    subSkill: {
                        distance: {
                            mod: {
                                globalFrom(from, to, distance) {
                                    if (
                                        game.hasPlayer(function (current) {
                                            return current.hasSkill('cxyJingQi') && get.attitude(current, from) > 0 && get.attitude(current, to) < 0;
                                        })
                                    )
                                        return distance - 1;
                                },
                            },
                        },
                    },
                },
                cxyBaoYing: {
                    mark: true,
                    intro: {
                        content: 'limited',
                    },
                    trigger: { global: 'dying' },
                    filter(event, player) {
                        if (player.storage.cxyBaoYing) return false;
                        return get.attitude(player, event.player) > 2;
                    },
                    logTarget: 'player',
                    check(event, player) {
                        return event.player.hp < 1;
                    },
                    content() {
                        'step 0';
                        player.storage.cxyBaoYing = true;
                        player.awakenSkill('cxyBaoYing');
                        ('step 1');
                        trigger.player.recover(1 - trigger.player.hp);
                    },
                },
                cxyFengYing: {
                    global: 'cxyFengYing_use',
                    ai: { threaten: 2.7 },
                    subSkill: {
                        use: {
                            mod: {
                                targetEnabled(card, player, target) {
                                    if (
                                        game.hasPlayer(function (current) {
                                            return current.hasSkill('cxyFengYing') && get.attitude(current, target) > 0;
                                        })
                                    ) {
                                        if (
                                            ((get.mode() == 'identity' && get.attitude(player, target) < 0) || (get.mode() != 'identity' && target.isEnemiesOf(player))) &&
                                            !game.hasPlayer(function (current) {
                                                return current != target && current.hp <= target.hp;
                                            })
                                        )
                                            return false;
                                    }
                                },
                            },
                        },
                    },
                },
                cxyLongYing: {
                    trigger: { player: 'phaseUseBegin' },
                    filter(event, player) {
                        return game.cxyJiangLing && game.cxyJiangLing.isAlive() && game.cxyJiangLing.hp < game.cxyJiangLing.maxHp;
                    },
                    direct: true,
                    content() {
                        'step 0';
                        player.loseHp();
                        ('step 1');
                        game.cxyJiangLing.recover();
                        ('step 2');
                        game.cxyJiangLing.draw();
                    },
                    ai: {
                        threaten: 2,
                    },
                },

                cxyMoQu: {
                    group: ['cxyMoQu_sub1', 'cxyMoQu_sub2'],
                    subSkill: {
                        sub1: {
                            trigger: { global: 'phaseEnd' },
                            filter(event, player) {
                                return player.num('h') <= player.hp;
                            },
                            forced: true,
                            content() {
                                player.draw(2);
                            },
                        },
                        sub2: {
                            trigger: { global: 'damageEnd' },
                            filter(event, player) {
                                return event.player != player && get.attitude(player, event.player) > 0;
                            },
                            forced: true,
                            content() {
                                player.chooseToDiscard('魔躯：其他友方角色受到伤害后，你弃置一张牌', 'he', true);
                            },
                        },
                    },
                },
                cxyPoLu: {
                    trigger: { global: 'die' },
                    filter(event, player) {
                        if (event.player == player) return true;
                        if (!player.isAlive()) return false;
                        return event.source && get.attitude(player, event.player) < 0 && get.attitude(player, event.source) > 0;
                    },
                    forced: true,
                    forceDie: true,
                    content() {
                        'step 0';
                        if (player.storage.cxyPoLu == undefined) player.storage.cxyPoLu = 0;
                        player.storage.cxyPoLu++;
                        var targets = game
                            .filterPlayer(function (target) {
                                return get.attitude(player, target) > 0;
                            })
                            .sortBySeat();
                        event.targets = targets;
                        ('step 1');
                        player.line(targets);
                        game.asyncDraw(targets, player.storage.cxyPoLu);
                    },
                    ai: {
                        //优先攻击孙坚
                        threaten: 80,
                    },
                },
                cxyYaoWu: {
                    trigger: { player: 'damageBegin' },
                    filter(event, player) {
                        if (!event.source || !event.source.isAlive()) return false;
                        return event.card && event.card.name == 'sha' && get.color(event.card) == 'red';
                    },
                    forced: true,
                    content() {
                        'step 0';
                        if (trigger.source.hp == trigger.source.maxHp) {
                            trigger.source.draw();
                            event.finish();
                        } else {
                            trigger.source.chooseControl('回血', '摸牌', function (event, player) {
                                return '回血';
                            }).prompt = '耀武：请选择回血或摸牌';
                        }
                        ('step 1');
                        if (result.control == '回血') {
                            trigger.source.recover();
                        } else {
                            trigger.source.draw();
                        }
                    },
                },
                cxyYingHun: {
                    trigger: { player: 'phaseZhunbeiBegin' },
                    filter(event, player) {
                        return player.hp < player.maxHp;
                    },
                    direct: true,
                    content() {
                        'step 0';
                        player.chooseTarget('是否发动英魂？', function (card, player, target) {
                            return target != player;
                        }).ai = function (target) {
                            if (get.attitude(player, target) > 2) return 5 + Math.random();
                            var draw = player.maxHp - player.hp;
                            var num = target.num('he') + 1;
                            if (num == draw) return 4;
                            if (num < draw) return Math.min(1, 4 - (draw - num));
                            return Math.min(1, 4 - (draw - num) * 0.5);
                        };
                        ('step 1');
                        if (result.bool) {
                            event.num = player.maxHp - player.hp;
                            event.target = result.targets[0];
                            event.list = ['摸' + event.num + '弃1', '摸1弃' + event.num];
                            player.chooseControl(event.list, function (event, player) {
                                if (get.attitude(player, event.target) > 0) return event.list[0];
                                return event.list[1];
                            }).prompt = '英魂：请选择一项';
                        } else {
                            event.finish();
                        }
                        ('step 2');
                        if (result.control == event.list[0]) {
                            event.target.draw(event.num);
                            event.num = 1;
                        } else {
                            event.target.draw(1);
                        }
                        ('step 3');
                        event.target.chooseToDiscard('英魂：请弃置' + event.num + '张牌', event.num, 'he', true);
                    },
                    ai: {
                        //优先攻击孙坚
                        threaten: 80,
                    },
                },
            },
            translate: {
                cxyMoJunPack: '魔将包',
                cxyLiJue: '李傕',
                cxyGuoSi: '郭汜',
                cxyZhangJi: '张济',
                cxyFanChou: '樊稠',
                cxyDongYue: '董越',
                cxyNiuFuDongXie: '牛辅董翓',
                fd_kuangshen04: '牢狂',
                cxyMoJun: '魔军',
                cxyJieLve: '劫掠',
                cxyTunJun: '屯军',
                cxyFanGong: '反攻',
                cxyJiaoXia: '狡黠',
                cxyKuangXi: '狂袭',
                cxyYangWu: '扬武',
                cxyYangLie: '扬烈',
                cxyJiaoXia_info: '锁定技，友方角色的黑色手牌不计入手牌上限。',
                cxyYangWu_info: '锁定技，准备阶段开始时，你对所有其他角色造成1点伤害，失去1点体力。',
                cxyYangLie_info: '锁定技，准备阶段开始时，你获得每名角色区域里的一张牌，失去1点体力。',
                cxyJieLve_info: '锁定技，当你对一名其他角色造成伤害后，你获得其区域内的各一张牌，失去1点体力。',
                cxyFanGong_info: '当你成为一名敌方角色使用牌的目标且该牌结算完成后，你可以对其使用一张【杀】（无距离限制）。',
                cxyMoJun_info: '锁定技，当友方角色使用【杀】对目标角色造成伤害后，其进行判定。若判定结果为黑色，友方角色各摸一张牌。',
                cxyTunJun_info: '锁定技，每轮游戏开始，若你的体力上限不为1，则你须扣减1点体力上限，摸X张牌（X为你的体力上限）。',
                cxyKuangXi_info: '出牌阶段，你可以失去1点体力，对一名其他角色造成1点伤害，若其因受到此伤害而进入濒死状态，当此濒死结算结束后，此技能于此回合内无效。',
                fd_makeBug: 'PR',
                fd_makeBug_info: '锁定技，回合结束时，你将手牌数摸至七张，若你没有手牌，你结束本局游戏，否则你随机伪装你的一张手牌的花色点数，X须猜测其中哪一张为此伪装牌，若X猜错，你获得两张【影】，在牌堆中洗入20张【影】（洗入的【影】🃏且点数为114514，X为game.me，若game.me与你同阵容或game.me未存活则改为随机一名敌方角色）。',
                fd_tequ: '特取',
                fd_tequ_info: '你可以将一张【影】当任意基本牌或锦囊牌使用或打出。',
                fd_guoshou: '锅首',
                fd_guoshou_info: '锁定技。①你删除【影】进入弃牌堆销毁和洗牌不进入牌堆的机制。②所有对其他角色造成的无来源伤害或伤害来源不为你的伤害均将伤害来源改为你。③其他角色使用的所有伤害类卡牌的伤害来源改为你。④game.me阵亡后，或洗牌后牌堆中的【影】数不小于300张，你结束本局游戏。',
                cxyHuBenJun: '虎贲军',
                cxyBaoLveJun: '豹掠军',
                cxyFengYaoJun: '凤瑶军',
                cxyLongXiangJun: '龙骧军',
                cxyFeiXiongJunZuo: '飞熊军左',
                cxyFeiXiongJunYou: '飞熊军右',
                cxyRuiQi: '锐骑',
                cxyHuYing: '虎营',
                cxyJingQi: '精骑',
                cxyBaoYing: '豹营',
                cxyFengYing: '凤营',
                cxyLongYing: '龙营',
                cxyRuiQi_info: '锁定技，友方角色摸牌阶段额外摸一张牌',
                cxyJingQi_info: '锁定技，友方角色计算与敌方角色距离-1。',
                cxyBaoYing_info: '限定技，友方角色进入濒死状态时，你可以令其体力回复至1。',
                cxyFengYing_info: '锁定技，敌方角色不能使用牌指定体力值唯一最少的友方角色。',
                cxyLongYing_info: '锁定技，出牌阶段开始时，若将领已受伤，则你失去1点体力，令其回复1点体力并摸一张牌。',
                cxyMoJun_info: '锁定技，当友方角色使用【杀】对目标角色造成伤害后，其进行判定，若结果为黑色，友方角色各摸一张牌。',
                cxyHuYing_info: '锁定技，出牌阶段开始时，除非你将一张【杀】交给将领，否则失去1点体力，令将领随机获得牌堆中的一张【杀】。',

                cxySunJian: '孙坚',
                cxyHuaXiong: '华雄',
                cxyMoQu: '魔躯',
                cxyPoLu: '破掳',
                cxyMoJun: '魔军',
                cxyYaoWu: '耀武',
                cxyYingHun: '英魂',
                cxyYaoWu_info: '锁定技，当一名角色使用红色【杀】对你造成伤害时，该角色可以回复1点体力或摸一张牌。',
                cxyPoLu_info: '锁定技，友方角色击杀一名敌方角色或你死亡时，你令友方角色各摸X张牌（X为此技能发动的次数）。',
                cxyMoJun_info: '锁定技，当友方角色使用【杀】对目标角色造成伤害后，其进行判定，若结果为黑色，友方角色各摸一张牌。',
                cxyMoQu_info: '锁定技，每名角色的回合结束时，若你的手牌数不大于当前体力值，你摸两张牌；其他友方角色受到伤害后，你弃置一张牌。',
                cxyYingHun_info: '准备阶段，若你已受伤，你可以选择一名其他角色并选择一项：1.令其摸X张牌，弃置一张牌；2.令其摸一张牌，弃置X张牌。（X为你已损失的体力值）',
            },
        };
        lib.config.all.characters.add('活动萌扩');
        lib.config.characters.add('活动萌扩');
        lib.translate['活动萌扩_character_config'] = `活动萌扩`;
        return QQQ;
    });
}

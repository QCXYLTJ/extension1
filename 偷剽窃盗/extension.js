import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '偷剽窃盗',
        content(config, pack) {
            if (config.tou_name == 'hide') {
                lib.translate.ls_jiawodun = '谋嘉沃顿';
                lib.translate.ls_guanzhe = '观者';
                lib.translate.ls_yongzhe = '勇者';
                lib.translate.ls_beimihu = '卑弥呼';
                lib.translate.ls_zhanghe = '张郃';
                lib.translate.ls_guanyu = '关羽';
                lib.translate.ls_meiliya = '小美';
                lib.translate.ls_xiaoer = '小恶魔';
                lib.translate.lsshen_zhangliao = '神张辽';
                lib.translate.ls_zhongyan = '钟琰';
                lib.translate.ls_jingzi = '普通的镜子';
                lib.translate.ls_zhouchu = '周处';
                lib.translate.ls_sanbin11 = '伞兵一号';
                lib.translate.ls_sanbin12 = '伞兵二号';
                lib.translate.ls_zhoufei = '周妃';
                lib.translate.ls_sanbin13 = '伞兵三号';
                lib.translate.ls_sanbin14 = '伞兵四号';
                lib.translate.ls_sanbin16 = '伞兵六号';
                lib.translate.ls_sanbin15 = '伞兵五号';
                lib.translate.ls_mianyang = '滑稽的绵羊';
                lib.translate.ls_zuoci = '左慈';
                lib.translate.ls_maidiwen = '麦迪文';
                lib.translate.ls_45aya1 = '奈亚拉托提普';
                lib.translate.ls_aya = '艾雅';
                lib.translate.lafamu = '拉法姆';
                lib.translate.ls_tuoqi = '托奇';
                lib.translate.ls_meiren = '可爱的精灵';
                lib.translate.naiyazi = '奈亚子';
                lib.translate.ls_siwangzhiyi = '死亡之翼';
                lib.translate.ls_wuxiw = '巴卡巴卡';
                lib.translate.refinli = '界芬利';
                lib.translate.rejiawudun = '挂机的阿凯';
            }
            // ---------------------------------------武将评级------------------------------------------//
            if (lib.rank) {
                lib.rank.rarity.rare.addArray(['ls_wuxiw', 'refinli', 'ls_siwangzhiyi', 'ls_meiren', 'ls_aya', 'ls_guanzhe']);
                lib.rank.rarity.epic.addArray(['fanxuxiao', 'naiyazi', 'ls_sanbin16', 'ls_sanbin14', 'ls_sanbin12', 'ls_zhongyan', 'lsshen_zhangliao', 'ls_zhoufei', 'ls_yongzhe']);
                lib.rank.rarity.legend.addArray(['ls_tuoqi', 'rejiawudun', 'lafamu', 'ls_45aya1', 'ls_sanbin15', 'ls_sanbin13', 'ls_jingzi', 'ls_guanyu']);
            }
            // ---------------------------------------千幻皮肤------------------------------------------//
        },
        precontent() {
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '偷剽窃盗',
                    connect: true,
                    characterSort: {},
                    dynamicTranslate: {},
                    characterIntro: {},
                    skill: {
                        ls_mojing2: {
                            audio: 'ext:偷剽窃盗/audio:2',
                            enable: 'phaseUse',
                            limited: true,
                            check(card) {
                                return 3 - player.countCards('h');
                            },
                            filter(event, player) {
                                return player.countCards('h') < 6;
                            },
                            content() {
                                player.awakenSkill('ls_mojing2');
                                var num = 6 - player.countCards('h');
                                var cards = [];
                                cards[0] = get.cards(1)[0];
                                game.log(cards[0]);
                                for (var i = 1; i < num; i++) {
                                    var card = get.cardPile2(function (card) {
                                        for (j of cards) {
                                            if (j.name == card.name) return false;
                                        }
                                        return true;
                                    });
                                    cards[i] = card;
                                }
                                game.log(cards);
                                if (cards) player.gain(cards, 'gain2');
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                        },
                        ls_jinhua2: {
                            audio: 'ext:偷剽窃盗/audio:2',
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            init(player) {
                                player.storage.ls_jinhua2_num = 1;
                            },
                            initList(player) {
                                var list,
                                    skills = [];
                                if (get.mode() == 'guozhan') {
                                    list = [];
                                    for (var i in lib.characterPack.mode_guozhan) list.push(i);
                                } else if (_status.connectMode) list = get.charactersOL();
                                else {
                                    list = [];
                                    for (var i in lib.character) {
                                        if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) continue;
                                        list.push(i);
                                    }
                                }
                                for (var i of list) {
                                    if (i.indexOf('gz_jun') == 0) continue;
                                    for (var j of lib.character[i][3]) {
                                        if (j == 'ls_jinhua2' || j == 'ls_jinhua') continue;
                                        var skill = lib.skill[j];
                                        var info = get.info(j);
                                        if (info && !info.enable && !info.unique) skills.add(j);
                                    }
                                }
                                player.storage.ls_jinhua3 = skills;
                            },
                            forced: true,
                            filter(event, player) {
                                var num = player.getAllHistory('useCard').length + player.getAllHistory('respond').length;
                                var num1 = player.storage.ls_jinhua2_num * player.storage.ls_jinhua2_num;
                                return num == num1;
                            },
                            content() {
                                'step 0';
                                player.storage.ls_jinhua2_num++;
                                if (!player.storage.ls_jinhua2) lib.skill.ls_jinhua2.initList(player);
                                var list = player.storage.ls_jinhua3.randomGets(5);
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
                                    for (var i = 0; i < list.length; i++) {
                                        if (lib.translate[list[i] + '_info']) {
                                            var translation = get.translation(list[i]);
                                            if (translation[0] == '新') {
                                                translation = translation.slice(1, 5);
                                            } else {
                                                translation = translation.slice(0, 4);
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
                                player.addSkill(link);
                                game.log(player, '添加了技能', '【' + get.translation(link) + '】');
                            },
                            mark: true,
                            intro: {
                                content(storage, player) {
                                    var num = player.getAllHistory('useCard').length + player.getAllHistory('respond').length;
                                    var num1 = player.storage.ls_jinhua2_num * player.storage.ls_jinhua2_num;
                                    var num2 = num1 - num;
                                    var str = '<li>还需要使用/打出:';
                                    str += num2;
                                    str += '张牌';
                                    return str;
                                },
                            },
                        },
                        ls_shangdian: {
                            audio: 'ext:偷剽窃盗/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            onremove(player) {
                                player.removeSkill('ls_shangdian_card');
                            },
                            process(skills, name) {
                                var cardname = 'ls_shangdian_' + name;
                                lib.translate[cardname] = lib.translate[name];
                                lib.translate[cardname + '_info'] = '出牌阶段对自己使用,获得' + get.translation(name) + '的一个技能';
                                lib.translate[cardname + '_append'] = '';
                                for (var i = 0; i < skills.length; i++) {
                                    lib.translate[cardname + '_append'] += '<div class="skill">【' + lib.translate[skills[i]] + '】</div><div>' + get.skillInfoTranslation(skills[i]) + '</div>';
                                    if (i < skills.length) {
                                        lib.translate[cardname + '_append'] += '<br>';
                                    }
                                }
                                lib.card[cardname] = lib.card[cardname] || {
                                    enable: true,
                                    type: 'character',
                                    image: 'character:' + name,
                                    fullimage: true,
                                    skills: skills,
                                    filterTarget(card, player, target) {
                                        return player == target;
                                    },
                                    selectTarget: -1,
                                    ai: {
                                        basic: {
                                            order: 7.5,
                                            useful: 4,
                                            value: 15,
                                        },
                                    },
                                    content() {
                                        'step 0';
                                        var list = lib.card[card.name].skills;
                                        for (var i = 0; i < list.length; i++) {
                                            if (target.hasSkill(list[i])) {
                                                list.splice(i--, 1);
                                            }
                                        }
                                        if (!list.length) {
                                            event.finish();
                                            return;
                                        }
                                        event.skillai = function () {
                                            return get.max(list, get.skillRank, 'item');
                                        };
                                        if (list.length == 1) {
                                            event._result = list[0];
                                        } else if (event.isMine()) {
                                            var dialog = ui.create.dialog('forcebutton');
                                            dialog.add('选择获得一项技能');
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
                                        var skill = result;
                                        if (!target.hasSkill(skill)) {
                                            player.popup(skill);
                                            target.$gain2(card);
                                            target.addSkill(skill);
                                            game.log(target, '获得技能', '【' + get.translation(skill) + '】');
                                        }
                                    },
                                };
                            },
                            content() {
                                'step 0';
                                var list1 = [];
                                var card2 = [];
                                var list = [];
                                var card = [];
                                var card1 = [];
                                var card2 = [];
                                for (var i in lib.card) {
                                    if (game.bannedcards && game.bannedcards.includes(i)) continue;
                                    if (lib.card[i].type == 'equip') {
                                        list.push([i]);
                                    }
                                }
                                for (var i in lib.character) {
                                    if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) continue;
                                    list1.push(i);
                                }
                                var name = list1.randomGet();
                                var skillsx = lib.character[name][3].slice(0);
                                var skills = skillsx.slice(0);
                                game.addVideo('skill', player, ['ls_shangdian', [skills, name]]);
                                lib.skill.ls_shangdian.process(skills, name);
                                card2.push(game.createCard('ls_shangdian_' + name));
                                name = list1.randomGet();
                                skillsx = lib.character[name][3].slice(0);
                                skills = skillsx.slice(0);
                                game.addVideo('skill', player, ['ls_shangdian', [skills, name]]);
                                lib.skill.ls_shangdian.process(skills, name);
                                card2.push(game.createCard('ls_shangdian_' + name));
                                var list1 = list.randomGet();
                                var list2 = list.randomGet();
                                var list3 = list.randomGet();
                                card1.push(game.createCard(list1[0]));
                                card1.push(game.createCard(list2[0]));
                                card1.push(game.createCard(list3[0]));
                                card.push(game.createCard('sha'));
                                card.push(game.createCard('shan'));
                                card.push(game.createCard('tao'));
                                card.push(game.createCard('jiu'));
                                var chooseButton = player.chooseButton([1, Infinity], ['基本牌,统一零售价:1点天命', card, '装备牌,建议零售价:2点天命', card1, '秘籍,骨折甩卖价:4点天命', card2]);
                                chooseButton.set('player', player);
                                chooseButton.set('ai', function (button) {
                                    return get.value(card);
                                });
                                chooseButton.set('filterButton', function (button) {
                                    var num = 0;
                                    for (var i = 0; i < ui.selected.buttons.length; i++) {
                                        switch (get.type(ui.selected.buttons[i].link)) {
                                            case 'basic':
                                                num++;
                                                break;
                                            case 'equip':
                                                num += 2;
                                                break;
                                            case 'character':
                                                num += 4;
                                                break;
                                        }
                                    }
                                    if (get.type(button.link) == 'basic') num++;
                                    if (get.type(button.link) == 'equip') num += 2;
                                    if (get.type(button.link) == 'character') num += 4;
                                    if (num > player.countMark('ls_shangdian_mark')) return false;
                                    else return true;
                                });
                                ('step 1');
                                if (result.links?.length) {
                                    var list = result.links;
                                    var num = 0;
                                    for (var i of list) {
                                        switch (get.type(i)) {
                                            case 'basic':
                                                num++;
                                                break;
                                            case 'equip':
                                                num += 2;
                                                break;
                                            case 'character':
                                                num += 4;
                                                break;
                                        }
                                    }
                                    player.removeMark('ls_shangdian_mark', num);
                                    player.gain(list, 'draw');
                                }
                            },
                            ai: {
                                order: 8,
                                result: {
                                    player(player) {
                                        if (player.countCards('h') > 3) return -1;
                                        return 1;
                                    },
                                },
                                threaten: 1.55,
                            },
                            group: ['ls_shangdian_1', 'ls_shangdian_2', 'ls_shangdian_mark'],
                            subSkill: {
                                1: {
                                    audio: 'ls_shangdian',
                                    forced: true,
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    content() {
                                        player.addMark('ls_shangdian_mark', 2);
                                    },
                                },
                                2: {
                                    audio: 'ls_shangdian',
                                    forced: true,
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    filter(event, player) {
                                        return !player.getStat('damage');
                                    },
                                    content() {
                                        player.addMark('ls_shangdian_mark', 2);
                                    },
                                },
                                mark: {
                                    marktext: '天',
                                    intro: {
                                        name: '天命',
                                        content: 'mark',
                                    },
                                },
                            },
                        },
                        ls_wusheng: {
                            audio: 'ext:偷剽窃盗/audio:2',
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            init(player) {
                                var check = function (list) {
                                    for (var i = 0; i < list.length; i++) {
                                        var info = lib.skill[list[i]];
                                        if (info && info.shaRelated) return true;
                                        if (info && info.trigger) {
                                            for (var j in info.trigger) {
                                                var cond = info.trigger[j];
                                                if (typeof cond == 'string') {
                                                    cond = [cond];
                                                }
                                                if (j == 'player' || j == 'global') {
                                                    if (cond.includes('shaBefore')) return true;
                                                    if (cond.includes('shaBegin')) return true;
                                                    if (cond.includes('shaEnd')) return true;
                                                    if (cond.includes('shaAfter')) return true;
                                                }
                                            }
                                        }
                                    }
                                    return false;
                                };
                                player.storage.ls_wusheng = get.gainableSkills(function (info, skill) {
                                    var list = [skill];
                                    game.expandSkills(list);
                                    return check(list);
                                }, player);
                            },
                            content() {
                                var list = player.storage.ls_wusheng.slice(0);
                                var link = list.randomGet();
                                player.addTempSkill(link, { player: 'phaseBegin' });
                                player.popup(link);
                                game.log(player, '获得了临时技能', '【' + get.translation(link) + '】');
                            },
                            group: 'ls_wusheng_sha',
                            subSkill: {
                                sha: {
                                    trigger: {
                                        player: 'phaseZhunbeiBegin',
                                    },
                                    forced: true,
                                    audio: 'qingyi',
                                    content() {
                                        player.chooseUseTarget('###是否发动【武神】？###视为使用一张没有距离限制的【杀】', { name: 'sha' }, false, 'nodistance');
                                    },
                                    ai: {
                                        threaten(player, target) {
                                            return 1.6;
                                        },
                                    },
                                },
                            },
                        },
                        ls_wucai: {
                            audio: 'fuman',
                            group: 'ls_wucai_d',
                            usable: 1,
                            trigger: {
                                global: 'damageEnd',
                            },
                            logTarget: 'player',
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            forced: true,
                            content() {
                                var card = get.discardPile(function (card) {
                                    return card.name == 'sha' || get.subtype(card) == 'equip1';
                                });
                                if (card) trigger.source.gain(card, 'gain2');
                            },
                            subSkill: {
                                d: {
                                    trigger: {
                                        global: 'phaseDrawBegin2',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return !event.numFixed && event.player.getEquip(1);
                                    },
                                    content() {
                                        trigger.num++;
                                    },
                                    ai: {
                                        threaten: 1.3,
                                    },
                                },
                            },
                        },
                        ls_guilong: {
                            audio: 1,
                            init(player) {
                                player.ls_guilongshi = ['ls_tunshi'];
                            },
                            trigger: {
                                global: 'gameDrawAfter',
                                player: 'enterGame',
                            },
                            forced: true,
                            process(skills, name) {
                                var cardname = 'ls_guilong_' + name;
                                lib.translate[cardname] = lib.translate[name];
                                lib.translate[cardname + '_info'] = '出牌阶段对自己使用,装备' + get.translation(name);
                                lib.translate[cardname + '_append'] = '';
                                for (var i = 0; i < skills.length; i++) {
                                    lib.translate[cardname + '_append'] += '<div class="skill">【' + lib.translate[skills[i]] + '】</div><div>' + get.skillInfoTranslation(skills[i]) + '</div>';
                                    if (i < skills.length) {
                                        lib.translate[cardname + '_append'] += '<br>';
                                    }
                                }
                                lib.card[cardname] = lib.card[cardname] || {
                                    enable: true,
                                    type: 'equip',
                                    subtype: 'equip1',
                                    distance: {
                                        attackFrom: -2,
                                    },
                                    modTarget: true,
                                    allowMultiple: false,
                                    ai: {
                                        equipValue(card, player) {
                                            return Math.min(2.5 + player.countCards('h', 'sha'), 4);
                                        },
                                        basic: {
                                            equipValue: 3.5,
                                            order: 3.5,
                                            useful: 2,
                                            value: 3.5,
                                        },
                                        result: {
                                            target(player, target, card) {
                                                return get.equipResult(player, target, card.name);
                                            },
                                        },
                                    },
                                    image: 'ext:偷剽窃盗/image/guilong.jpg',
                                    fullimage: true,
                                    skills: skills,
                                    derivation: 'ls_xiaoyuan',
                                    filterTarget(card, player, target) {
                                        return player == target;
                                    },
                                    selectTarget: -1,
                                    content() {
                                        if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                                    },
                                    toself: true,
                                };
                            },
                            content() {
                                var name = 'guilongzhanyuedao';
                                var skills = player.ls_guilongshi;
                                game.addVideo('skill', player, ['ls_guilong', [skills, name]]);
                                lib.skill.ls_guilong.process(skills, name);
                                var list = player.getCards('ej', 'ls_guilong_guilongzhanyuedao');
                                if (list.length) {
                                    var card = list.randomGet();
                                    card.init([card.suit, card.number, 'ls_guilong_' + name]);
                                } else {
                                    var card = game.createCard('ls_guilong_' + name);
                                    player.equip(card);
                                    player.$gain2(card);
                                }
                            },
                            group: 'ls_guilong_1',
                            subSkill: {
                                1: {
                                    audio: 'ls_guilong',
                                    enable: 'phaseUse',
                                    usable: 1,
                                    filterCard(card) {
                                        return card.name != 'ls_guilong_guilongzhanyuedao';
                                    },
                                    filter(event, player) {
                                        if (player.getEquip(1)) return false;
                                        else return true;
                                    },
                                    position: 'he',
                                    check(card) {
                                        return 6 - get.value(card);
                                    },
                                    onChooseToUse(event) {
                                        if (game.online) return;
                                        event.set(
                                            'wendao',
                                            (function () {
                                                for (var i = 0; i < ui.discardPile.childElementCount; i++) {
                                                    if (ui.discardPile.childNodes[i].name == 'ls_guilong_guilongzhanyuedao') return true;
                                                }
                                                return game.hasPlayer(function (current) {
                                                    return current.countCards('ej', 'ls_guilong_guilongzhanyuedao');
                                                });
                                            })()
                                        );
                                    },
                                    content() {
                                        var list = [];
                                        for (var i = 0; i < ui.discardPile.childElementCount; i++) {
                                            if (ui.discardPile.childNodes[i].name == 'ls_guilong_guilongzhanyuedao') {
                                                list.add(ui.discardPile.childNodes[i]);
                                            }
                                        }
                                        game.countPlayer(function (current) {
                                            var ej = current.getCards('ej', 'ls_guilong_guilongzhanyuedao');
                                            if (ej.length) {
                                                list.addArray(ej);
                                            }
                                        });
                                        if (list.length) {
                                            var card = list.randomGet();
                                            var owner = get.owner(card);
                                            if (owner) {
                                                player.gain(card, owner, 'give', 'bySelf');
                                                player.line(owner, 'green');
                                            } else {
                                                player.gain(card, 'gain2');
                                            }
                                        }
                                    },
                                    ai: {
                                        order: 8.5,
                                        result: {
                                            player: 1,
                                        },
                                    },
                                },
                            },
                        },
                        ls_shuangbei: {
                            enable: 'phaseUse',
                            limited: true,
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('ls_shuangbei');
                                var list = get.gainableSkills().filter(function (skill) {
                                    var info = get.info(skill);
                                    return info && info.trigger && (info.trigger.player == 'phaseBefore' || info.trigger.player == 'phaseBegin' || info.trigger.player == 'phaseEnd' || info.trigger.player == 'phaseAfter' || info.trigger.player == 'phaseDrawBefore' || info.trigger.player == 'phaseDrawBegin' || info.trigger.player == 'phaseDrawEnd' || info.trigger.player == 'phaseDrawAfter' || info.trigger.player == 'phaseUseBefore' || info.trigger.player == 'phaseUseBegin' || info.trigger.player == 'phaseUseEnd' || info.trigger.player == 'phaseUseAfter' || info.trigger.player == 'phaseDiscardBefore' || info.trigger.player == 'phaseDiscardBegin' || info.trigger.player == 'phaseDiscardEnd' || info.trigger.player == 'phaseJudgeBefore' || info.trigger.player == 'phaseJudgeBegin' || info.trigger.player == 'phaseJudgeEnd' || info.trigger.player == 'phaseJudgeAfter' || info.trigger.player == 'phaseZhunbeiBefore' || info.trigger.player == 'phaseZhunbeiBegin' || info.trigger.player == 'phaseZhunbeiEnd' || info.trigger.player == 'phaseZhunbeiAfter' || info.trigger.player == 'phaseZhunbei' || info.trigger.player == 'phaseDraw' || info.trigger.player == 'phaseJudge' || info.trigger.player == 'phaseDiscard') && !info.juexingji && !info.hiddenSkill && !info.zhuSkill && !info.charlotte && !info.limited && !info.dutySkill;
                                });
                                var skill = list.randomGets(5);
                                event.videoId = lib.status.videoId++;
                                func = function (skills, id) {
                                    var dialog = ui.create.dialog('forcebutton');
                                    dialog.videoId = id;
                                    dialog.add('选择一个技能');
                                    for (var i = 0; i < skills.length; i++) {
                                        dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【' + get.translation(skills[i]) + '】</div><div>' + lib.translate[skills[i] + '_info'] + '</div></div>');
                                    }
                                    dialog.addText(' <br> ');
                                };
                                func(skill, event.videoId);
                                player.chooseControl(skill, 'cancel2');
                                ('step 1');
                                game.broadcastAll('closeDialog', event.videoId);
                                if (result.control != 'cancel2') {
                                    var skill = result.control;
                                    var info = lib.skill[skill];
                                    info.trigger.player = ['phaseBegin', 'phaseEnd'];
                                    player.addSkill(skill);
                                    game.log(player, '获得了技能', '【' + get.translation(skill) + '】');
                                }
                                ('step 2');
                                var list = get.gainableSkills().filter(function (skill) {
                                    var info = get.info(skill);
                                    return info && info.enable == 'phaseUse' && info.usable == 1 && !info.juexingji && !info.hiddenSkill && !info.zhuSkill && !info.charlotte && !info.limited && !info.dutySkill;
                                });
                                var skill = list.randomGets(5);
                                func(skill, event.videoId);
                                player.chooseControl(skill, 'cancel2');
                                ('step 3');
                                game.broadcastAll('closeDialog', event.videoId);
                                if (result.control != 'cancel2') {
                                    var skill = result.control;
                                    var info = lib.skill[skill];
                                    info.usable = 2;
                                    player.addSkill(skill);
                                    game.log(player, '获得了技能', '【' + get.translation(skill) + '】');
                                }
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player: 1,
                                },
                                threaten: 1.55,
                            },
                        },
                        ls_tunshi: {
                            equipSkill: true,
                            init(player) {
                                player.ls_guilongshi = ['ls_tunshi'];
                            }, //QQQ
                            trigger: {
                                source: 'damageBegin2',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.notLink() && event.player.getCards('e', { subtype: ['equip1'] }).length;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var att = get.attitude(player, trigger.player) <= 0;
                                var next = player.chooseButton();
                                next.set('att', att);
                                next.set('createDialog', ['是否发动【鬼龙偃月刀】,销毁' + get.translation(trigger.player) + '的武器牌,并获得此武器牌的技能？', trigger.player.getCards('e', { subtype: ['equip1'] })]);
                                next.set('ai', function (button) {
                                    if (_status.event.att) return get.buttonValue(button);
                                    return 0;
                                });
                                ('step 1');
                                if (result.links?.length) {
                                    var card = result.links[0];
                                    card.remove();
                                    card.destroyed = true;
                                    game.log(card, '被销毁了');
                                    var name = card.name;
                                    var info1 = get.info(card);
                                    if (info1.skills && info1.toself == true) {
                                        event.skill = info1.skills[0];
                                    }
                                } else event.finish;
                                ('step 2');
                                game.log(event.skill);
                                if (event.skill) {
                                    var name = 'guilongzhanyuedao';
                                    player.ls_guilongshi.push(event.skill);
                                    player.useSkill('ls_guilong');
                                }
                            },
                        },
                        ls_sanbing6: {
                            forced: true,
                            trigger: {
                                global: 'gameStart',
                            },
                            content() {
                                'step 0';
                                'step 1';
                                var list;
                                if (_status.characterlist) {
                                    list = [];
                                    for (var i = 0; i < _status.characterlist.length; i++) {
                                        var name = _status.characterlist[i];
                                        list.push(name);
                                    }
                                } else if (_status.connectMode) {
                                    list = get.charactersOL(function (i) {
                                        return true;
                                    });
                                } else {
                                    list = get.gainableCharacters(function (info) {
                                        return true;
                                    });
                                }
                                var players = game.players.concat(game.dead);
                                for (var i = 0; i < players.length; i++) {
                                    list.remove(players[i].name);
                                    list.remove(players[i].name1);
                                    list.remove(players[i].name2);
                                }
                                var num = player.hp;
                                list = list.randomGets(5, game.countPlayer());
                                var skills = [];
                                for (var i of list) {
                                    var skillsx = lib.character[i][3].slice(0);
                                    var list2 = skillsx.slice(0);
                                    for (var j = 0; j < skillsx.length; j++) {
                                        var info = get.info(skillsx[j]);
                                        if (!info) {
                                            skillsx.splice(j, 1);
                                            list2.splice(j--, 1);
                                            continue;
                                        }
                                    }
                                    for (var j = 0; j < list2.length; j++) {
                                        if (list2[j].includes('rewrite') || skills.includes(list2[j])) continue;
                                        var info = get.info(list2[j]);
                                        if (!info || info.juexingji || info.hiddenSkill || info.charlotte || info.dutySkill || info.zhuSkill) continue;
                                        skills.push(list2[j]);
                                    }
                                }
                                if (!list.length || !skills.length) {
                                    event.finish();
                                    return;
                                }
                                if (player.isUnderControl()) {
                                    game.swapPlayerAuto(player);
                                }
                                var switchToAuto = function () {
                                    _status.imchoosing = false;
                                    event._result = {
                                        bool: true,
                                        skills: skills.randomGets(num),
                                    };
                                    if (event.dialog) event.dialog.close();
                                    if (event.control) event.control.close();
                                };
                                var chooseButton = function (list, skills) {
                                    var event = _status.event;
                                    if (!event._result) event._result = {};
                                    event._result.skills = [];
                                    var rSkill = event._result.skills;
                                    var dialog = ui.create.dialog('请选择获得至多' + num + '个技能', [list, 'character'], 'hidden');
                                    event.dialog = dialog;
                                    var table = document.createElement('div');
                                    table.classList.add('add-setting');
                                    table.style.margin = '0';
                                    table.style.width = '100%';
                                    table.style.position = 'relative';
                                    for (var i = 0; i < skills.length; i++) {
                                        var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                                        td.link = skills[i];
                                        table.appendChild(td);
                                        td.innerHTML = '<span>' + get.translation(skills[i]) + '</span>';
                                        td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                            if (_status.dragged) return;
                                            if (_status.justdragged) return;
                                            _status.tempNoButton = true;
                                            setTimeout(function () {
                                                _status.tempNoButton = false;
                                            }, 500);
                                            var link = this.link;
                                            if (!this.classList.contains('bluebg')) {
                                                if (rSkill.length >= num) return;
                                                rSkill.add(link);
                                                this.classList.add('bluebg');
                                            } else {
                                                this.classList.remove('bluebg');
                                                rSkill.remove(link);
                                            }
                                        });
                                    }
                                    dialog.content.appendChild(table);
                                    dialog.add('');
                                    dialog.open();
                                    event.switchToAuto = function () {
                                        event.dialog.close();
                                        event.control.close();
                                        game.resume();
                                        _status.imchoosing = false;
                                    };
                                    event.control = ui.create.control('ok', function (link) {
                                        event.dialog.close();
                                        event.control.close();
                                        game.resume();
                                        _status.imchoosing = false;
                                    });
                                    for (var i = 0; i < event.dialog.buttons.length; i++) {
                                        event.dialog.buttons[i].classList.add('selectable');
                                    }
                                    game.pause();
                                    game.countChoose();
                                };
                                if (event.isMine()) {
                                    chooseButton(list, skills);
                                } else if (event.isOnline()) {
                                    event.player.send(chooseButton, list, skills);
                                    event.player.wait();
                                    game.pause();
                                } else {
                                    switchToAuto();
                                }
                                ('step 2');
                                var map = event.result || result;
                                if (map && map.skills && map.skills.length) {
                                    for (var i of map.skills) player.addSkill(i);
                                }
                            },
                        },
                        ls_pingdeng: {
                            group: ['ls_pingdeng_1'],
                            subSkill: {
                                1: {
                                    enable: 'phaseUse',
                                    usable: 1,
                                    multitarget: true,
                                    targetprompt: ['失去技能', '获得技能'],
                                    filterTarget(card, player, target) {
                                        target.storage.ls_pingdeng = target.getSkills(null, false, false);
                                        if (target.storage.ls_pingdeng.length) var num = target.storage.ls_pingdeng.length;
                                        else var num = 0;
                                        if (ui.selected.targets.length) {
                                            return num < ui.selected.targets[0].getSkills(null, false, false).length;
                                        }
                                        var players = game.filterPlayer();
                                        for (var i = 0; i < players.length; i++) {
                                            players[i].storage.ls_pingdeng = players[i].getSkills(null, false, false);
                                            if (num > players[i].storage.ls_pingdeng.length) return true;
                                        }
                                        return false;
                                    },
                                    selectTarget: 2,
                                    content() {
                                        'step 0';
                                        var gainner, giver;
                                        targets[0].storage.ls_pingdeng = targets[0].getSkills(null, false, false);
                                        targets[1].storage.ls_pingdeng = targets[1].getSkills(null, false, false);
                                        if (targets[0].storage.ls_pingdeng.length < targets[1].storage.ls_pingdeng.length) {
                                            gainner = targets[0];
                                            giver = targets[1];
                                        } else {
                                            gainner = targets[1];
                                            giver = targets[0];
                                        }
                                        event.gainner = gainner;
                                        event.giver = giver;
                                        ('step 1');
                                        var list = event.giver.getSkills(null, false, false).filter(function (skill) {
                                            var info = get.info(skill);
                                            return info && !info.juexingji && !info.hiddenSkill && !info.zhuSkill && !info.charlotte && !info.limited && !info.dutySkill;
                                        });
                                        if (list.length)
                                            player.chooseControl(list).set('ai', function () {
                                                return 0;
                                            });
                                        ('step 2');
                                        event.gainner.addSkill(result.control);
                                        event.giver.removeSkill(result.control);
                                    },
                                    ai: {
                                        order: 10.5,
                                        threaten: 2.3,
                                        result: {
                                            target(player, target) {
                                                var num = target.countCards('h');
                                                var att = get.attitude(player, target);
                                                if (ui.selected.targets.length == 0) {
                                                    if (att > 0) return -1;
                                                    var players = game.filterPlayer();
                                                    for (var i = 0; i < players.length; i++) {
                                                        var num2 = players[i].countCards('h');
                                                        var att2 = get.attitude(player, players[i]);
                                                        if (num2 < num) {
                                                            if (att2 > 0) return -3;
                                                            return -1;
                                                        }
                                                    }
                                                    return 0;
                                                } else {
                                                    return 1;
                                                }
                                            },
                                            player: 1,
                                        },
                                    },
                                },
                            },
                            nobracket: true,
                            forced: true,
                            audio: 'ext:偷剽窃盗/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            logTarget: 'source',
                            preHidden: true,
                            filter(event, player) {
                                return event.source && event.source.countGainableCards(player, 'he') && event.num > 0 && event.source != player;
                            },
                            content() {
                                'step 0';
                                player.gainPlayerCard(true, trigger.source, 'he');
                                ('step 1');
                                if (player.countCards('h') < trigger.source.countCards('h')) event.goto(0);
                                else event.finish();
                            },
                            ai: {
                                maixie_defend: true,
                                effect: {
                                    target(card, player, target) {
                                        if (player.countCards('he') > 1 && get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -1.5];
                                            if (get.attitude(target, player) < 0) return [1, 1];
                                        }
                                    },
                                },
                            },
                        },
                        ls_shana: {
                            nobracket: true,
                            audio: 'ext:偷剽窃盗/audio:2',
                            limited: true,
                            enable: 'phaseUse',
                            filterTarget: true,
                            content() {
                                player.awakenSkill('ls_shana');
                                target.addSkill('ls_shana1');
                            },
                            ai: {
                                order: 8.5,
                                result: {
                                    target(player, target) {
                                        var num;
                                        var att = get.attitude(player, target);
                                        if (target.maxHp < 4 && att < 0) {
                                            num = -2;
                                        } else num = -1;
                                        return num;
                                    },
                                },
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                        },
                        ls_shana1: {
                            mark: true,
                            charlotte: true,
                            forced: true,
                            intro: {
                                content: '每个准备阶段开始时,随机使用一个觉醒技',
                            },
                            init(player) {
                                var list,
                                    skills = [];
                                if (get.mode() == 'guozhan') {
                                    list = [];
                                    for (var i in lib.characterPack.mode_guozhan) list.push(i);
                                } else if (_status.connectMode) list = get.charactersOL();
                                else {
                                    list = [];
                                    for (var i in lib.character) {
                                        if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) continue;
                                        list.push(i);
                                    }
                                }
                                for (var i of list) {
                                    if (i.indexOf('gz_jun') == 0) continue;
                                    for (var j of lib.character[i][3]) {
                                        if (j == 'ls_shana1' || j == 'rehongju') continue;
                                        var skill = lib.skill[j];
                                        var info = get.info(j);
                                        if (info && info.juexingji) skills.add(j);
                                    }
                                }
                                player.storage.ls_shana = skills;
                            },
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            preHidden: true,
                            content() {
                                var list1 = player.storage.ls_shana.randomGets(1);
                                player.addSkill(list1);
                                player.useSkill(list1[0]);
                            },
                        },
                        ls_duorui: {
                            audio: 'drlt_duorui',
                            trigger: {
                                source: 'damageSource',
                            },
                            filter(event, player) {
                                return event.player != player && event.player.isAlive();
                            },
                            process(skills, name) {
                                var cardname = 'ls_duorui' + skills[0];
                                lib.translate[cardname] = lib.translate[skills[0]];
                                lib.translate[cardname + '_info'] = '出牌阶段对自己使用,装备' + get.translation(skills[0]);
                                lib.translate[cardname + '_append'] = '';
                                for (var i = 0; i < skills.length; i++) {
                                    lib.translate[cardname + '_append'] += '<div class="skill">【' + lib.translate[skills[i]] + '】</div><div>' + get.skillInfoTranslation(skills[i]) + '</div>';
                                    if (i < skills.length) {
                                        lib.translate[cardname + '_append'] += '<br>';
                                    }
                                }
                                lib.card[cardname] = lib.card[cardname] || {
                                    enable: true,
                                    type: 'equip',
                                    subtype: 'equip5',
                                    modTarget: true,
                                    allowMultiple: false,
                                    ai: {
                                        basic: {
                                            equipValue: 8,
                                            order: 8,
                                            useful: 2,
                                            value: 8,
                                        },
                                        result: {
                                            target(player, target, card) {
                                                return get.equipResult(player, target, card.name);
                                            },
                                        },
                                    },
                                    image: 'character:' + name,
                                    fullimage: true,
                                    skills: skills,
                                    derivation: 'lsshen_zhangliao',
                                    filterTarget(card, player, target) {
                                        return player == target;
                                    },
                                    selectTarget: -1,
                                    content() {
                                        if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                                    },
                                    toself: true,
                                };
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var list = trigger.player.getStockSkills(true, true);
                                var list1 = trigger.player.getSkills(null, false, false);
                                var list2 = [];
                                for (var i of list1) {
                                    if (list.includes(i) && !trigger.player.awakenedSkills.includes(i)) list2.add(i);
                                }
                                if (list2.length) player.chooseControl(list2, 'cancel2').set('prompt', '选择' + get.translation(trigger.player) + '武将牌上的一个技能并令其失效');
                                else event.finish();
                                ('step 1');
                                if (result.control != 'cancel2') {
                                    trigger.player.awakenSkill(result.control);
                                    game.log(trigger.player, '失去了技能', '【' + get.translation(result.control) + '】');
                                    var name = trigger.player.name;
                                    var skills = [result.control];
                                    game.addVideo('skill', player, ['ls_duorui', [skills, name]]);
                                    lib.skill.ls_duorui.process(skills, name);
                                    var card = game.createCard('ls_duorui' + skills[0]);
                                    player.gain(card, 'draw');
                                    card.storage.ls_duorui = trigger.player;
                                    player.markAuto('ls_duorui', [card]);
                                }
                            },
                            subSkill: {
                                destroy: {
                                    trigger: {
                                        global: ['loseEnd', 'cardsDiscardEnd'],
                                    },
                                    forced: true,
                                    charlotte: true,
                                    popup: false,
                                    filter(event, player) {
                                        if (event.name == 'lose' && event.position != ui.discardPile) return false;
                                        var storage = player.storage.ls_duorui;
                                        if (!storage) return false;
                                        for (var i of event.cards) {
                                            if (storage.includes(i)) return true;
                                        }
                                        return false;
                                    },
                                    content() {
                                        var cards = [];
                                        var storage = player.storage.ls_duorui;
                                        for (var i of trigger.cards) {
                                            if (storage.includes(i)) {
                                                var target = i.storage.ls_duorui;
                                                var info1 = get.info(i);
                                                var skill = info1.skills[0];
                                                target.restoreSkill(skill);
                                                game.log(target, '回复了技能', '【' + get.translation(skill) + '】');
                                                player.unmarkAuto('ls_duorui', [i]);
                                                cards.push(i);
                                            }
                                        }
                                        game.cardsGotoSpecial(cards);
                                        game.log(cards, '被移出了游戏');
                                    },
                                },
                            },
                            group: 'ls_duorui_destroy',
                            ai: {
                                threaten: 0.8,
                            },
                        },
                        ls_zhiti: {
                            audio: 'drlt_zhiti',
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard: true,
                            selectCard: 1,
                            discard: false,
                            loseTo: 'cardPile',
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            content() {
                                var card = cards[0];
                                ui.cardPile.appendChild(card);
                                target.addTempSkill('ls_zhiti1', { player: 'phaseEnd' });
                                target.storage.ls_zhiti1 = card.name;
                                player.gainPlayerCard(target, 'he', true);
                            },
                            check(card) {
                                if (get.type(card) == 'basic') return 10 - get.value(card);
                                else return 0;
                            },
                            position: 'he',
                            ai: {
                                order: 9,
                                result: {
                                    target: -1,
                                },
                                threaten: 2,
                                expose: 0.2,
                            },
                        },
                        ls_zhiti1: {
                            mod: {
                                cardEnabled(card, player) {
                                    if (card.name == player.storage.ls_zhiti1) return false;
                                },
                                cardRespondable(card, player) {
                                    if (card.name == player.storage.ls_zhiti1) return false;
                                },
                                cardSavable(card, player) {
                                    if (card.name == player.storage.ls_zhiti1) return false;
                                },
                            },
                            mark: true,
                            intro: {
                                content(storage, player, skill) {
                                    var str = '';
                                    var name = player.storage.ls_zhiti1;
                                    str += '<br><li>无法使用:' + get.translation(name);
                                    return str;
                                },
                            },
                        },
                        ls_bolan1: {
                            audio: 'bolan',
                            init(player) {
                                player.ls_bolan_4 = true;
                            },
                            trigger: {
                                player: ['phaseZhunbei'],
                            },
                            forced: true,
                            preHidden: true,
                            filter(event, player) {
                                return player.ls_bolan_4 == true;
                            },
                            content() {
                                var list = get.gainableSkills().filter(function (skill) {
                                    var info = get.info(skill);
                                    return info && info.enable == 'phaseUse' && info.usable == 1 && !info.juexingji && !info.hiddenSkill && !info.zhuSkill && !info.charlotte && !info.limited && !info.dutySkill;
                                });
                                var skill = list.randomGet();
                                player.addSkill(skill);
                                player.markAuto('ls_bolan2', [skill]);
                                player.ls_bolan_4 = false;
                            },
                        },
                        ls_bolan2: {
                            audio: 'bolan',
                            intro: {
                                content: '最近获得的技能:$',
                            },
                            trigger: {
                                player: 'useSkillAfter',
                            },
                            init(player) {
                                player.ls_bolan_3 = 0;
                            }, //QQQ
                            filter(event, player) {
                                return player.getStorage('ls_bolan2').includes(event.skill);
                            },
                            forced: true,
                            content() {
                                player.draw();
                                player.ls_bolan_3 += 1;
                                if (player.ls_bolan_3 > 2) {
                                    player.ls_bolan_3 = 0;
                                    player.ls_bolan_4 = true;
                                    player.unmarkAuto('ls_bolan2', [trigger.skill]);
                                }
                            },
                            group: ['ls_bolan1'],
                        },
                        ls_yifa: {
                            audio: 'yifa',
                            trigger: {
                                global: 'phaseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.getHistory('damage').length;
                                return true;
                            },
                            content() {
                                player.draw();
                                var target = player;
                                var next = target.phaseUse();
                                event.next.remove(next);
                                trigger.parent.next.push(next);
                            },
                        },
                        ls_mojing: {
                            forced: true,
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            content() {
                                'step 0';
                                if (player.hasSkill('feiyang')) player.storage.ls_mojing = true;
                                player
                                    .chooseTarget(get.prompt('ls_mojing'), '成为一名角色的复制', true, function (card, player, target) {
                                        return target != player && target.maxHp >= 2;
                                    })
                                    .set('ai', function (target) {
                                        var att = get.attitude(player, target);
                                        return att;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.say(['我是谁？我是你', '何为真？何为假？'].randomGet());
                                    var target = result.targets[0];
                                    var name = target.name;
                                    var name1 = player.name;
                                    player.reinit(name1, name, 'nosmooth');
                                    var group = target.group;
                                    player.changeGroup(group);
                                    target1 = result.targets[0];
                                    player.hp = target.hp;
                                    player.maxHp = target.maxHp;
                                    game.log(player.name);
                                    if (player.storage.ls_mojing == true) {
                                        player.addSkill('feiyang');
                                        player.addSkill('bahu');
                                    }
                                    player.addSkill('ls_mojing1');
                                    player.update();
                                } else event.finish();
                            },
                        },
                        ls_mojing1: {
                            trigger: {
                                player: 'drawBegin',
                                source: 'damageBegin1',
                            },
                            mark: true,
                            forced: true,
                            filter(event, player) {
                                var skills = player.getSkills(null, false, false);
                                var info = event.getParent(1).name;
                                for (var i of skills) {
                                    if (info.includes(i)) return true;
                                }
                                return false;
                            },
                            content() {
                                trigger.num++;
                            },
                            group: ['ls_mojing1_3'],
                            subSkill: {
                                3: {
                                    trigger: {
                                        global: 'dieBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player.name == player.name;
                                    },
                                    content() {
                                        if (trigger.player == player) player.say(['真作假时真亦假,无为有处有还无'].randomGet());
                                        else player.say(['真假已分', '冒牌货,就是这种下场'].randomGet());
                                        var name1 = trigger.player.name;
                                        trigger.player.reinit(name1, 'ls_jingzi', 'nosmooth');
                                        player.removeSkill('ls_mojing1_3');
                                    },
                                },
                            },
                        },
                        ls_xianghai: {
                            audio: 'ext:偷剽窃盗/audio:2',
                            global: 'ls_xianghai_g',
                            ai: {
                                threaten: 2,
                            },
                            group: ['ls_xianghai_2'],
                            subSkill: {
                                2: {
                                    audio: 'ls_xianghai',
                                    trigger: {
                                        global: 'phaseDiscardAfter',
                                    },
                                    filter(event, player) {
                                        if (event.player != player && event.player.isIn()) {
                                            return event.player.getHistory('lose', function (evt) {
                                                return evt.type == 'discard' && evt.getParent('phaseDiscard') == event && evt.hs.filterInD('d').length;
                                            }).length;
                                        }
                                        return false;
                                    },
                                    checkx(event, player, cards, cards2) {
                                        if (cards.length > 2 || get.attitude(player, event.player) > 0) return true;
                                        for (var i = 0; i < cards2.length; i++) {
                                            if (get.value(cards2[i], event.player, 'raw') < 0) return true;
                                        }
                                        return false;
                                    },
                                    forced: true,
                                    preHidden: true,
                                    preHidden: true,
                                    content() {
                                        'step 0';
                                        var cards = [];
                                        var cards2 = [];
                                        game.getGlobalHistory('cardMove', function (evt) {
                                            if (evt.name == 'cardsDiscard' && evt.getParent('phaseDiscard') == trigger) cards.addArray(evt.cards.filterInD('d'));
                                        });
                                        game.countPlayer2(function (current) {
                                            current.getHistory('lose', function (evt) {
                                                if (evt.type != 'discard' || evt.getParent('phaseDiscard') != trigger) return;
                                                cards.addArray(evt.cards.filterInD('d'));
                                                if (current == trigger.player) cards2.addArray(evt.hs.filterInD('d'));
                                            });
                                        });
                                        event.cards = cards;
                                        event.cards1 = cards2;
                                        if (event.cards.length == 1) event.goto(3);
                                        else event.goto(1);
                                        ('step 1');
                                        var cards = event.cards;
                                        var cards2 = event.cards1;
                                        var check = lib.skill.ls_xianghai_2.checkx(trigger, player, cards, cards2);
                                        player
                                            .chooseCardButton(cards, '乡害:选择获得的牌')
                                            .set('ai', function (button) {
                                                if (_status.event.check) {
                                                    return 20 - get.value(button.link, _status.event.getTrigger().player);
                                                }
                                                return 0;
                                            })
                                            .set('check', check)
                                            .set('cards', cards2)
                                            .set('filterButton', function (button) {
                                                return _status.event.cards.includes(button.link);
                                            })
                                            .setHiddenSkill(event.name);
                                        ('step 2');
                                        if (result.links?.length) {
                                            event.cards.remove(result.links[0]);
                                            player.gain(result.links[0]);
                                            player.$gain2(result.links[0]);
                                            game.log(player, '获得了', result.links[0]);
                                        }
                                        event.finish();
                                        ('step 3');
                                        player.gain(event.cards[0]);
                                        player.$gain2(event.cards[0]);
                                        game.log(player, '获得了', event.cards[0]);
                                    },
                                    ai: {
                                        threaten: 1.3,
                                        expose: 0.2,
                                    },
                                },
                            },
                        },
                        ls_xianghai_g: {
                            mod: {
                                maxHandcard(player, num) {
                                    if (
                                        game.countPlayer(function (current) {
                                            return current != player && current.hasSkill('ls_xianghai');
                                        }) == 1
                                    ) {
                                        if (player.countCards('h') < num) return player.countCards('h') - 1;
                                        else return num - 1;
                                    } else return num;
                                },
                            },
                        },
                        ls_xianghais: {
                            audio: 'ls_xianghai',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(lib.filter.notMe, get.prompt('ls_xianghais'), '选择一名角色').set('ai', function (target) {
                                    var att = get.attitude(player, target);
                                    return -att;
                                });
                                ('step 1');
                                listm = [];
                                if (result.targets?.length) {
                                    player.storage.ls_xianghais = result.targets[0];
                                    target = player.storage.ls_xianghais;
                                    listm = target.getSkills(null, false, false).filter(function (skill) {
                                        return true;
                                    });
                                } else event.finish();
                                ('step 2');
                                target1 = player.storage.ls_xianghais;
                                var list = [];
                                for (var i = 0; i < listm.length; i++) {
                                    list.add(listm[i]);
                                }
                                player.chooseControl(list).set('prompt', '选择' + get.translation(target1) + '武将牌上的一个技能并令其失效');
                                ('step 3');
                                target1.storage.ls_xianghais = result.control;
                                skillm = result.control;
                                if (player.countDisabled()) {
                                    target1.addTempSkill('ls_xianghais_1', 'phaseAfter');
                                    event.finish();
                                }
                                ('step 4');
                                player.chooseControl('失效', '移除').ai = function (event, player) {
                                    return 0;
                                };
                                ('step 5');
                                if (result.control == '失效') {
                                    target1.addTempSkill('ls_xianghais_1', 'phaseAfter');
                                    event.finish();
                                } else {
                                    target1.disableSkill('chuanxin_disable', skillm, true);
                                }
                                ('step 6');
                                player.disableEquip('equip1');
                                player.disableEquip('equip2');
                                player.disableEquip('equip3');
                                player.disableEquip('equip4');
                                player.disableEquip('equip5');
                                var info = get.info(skillm);
                                if (info && !info.juexingji && !info.hiddenSkill && !info.zhuSkill && !info.charlotte && !info.limited && !info.dutySkill) player.addSkill(skillm);
                            },
                            subSkill: {
                                1: {
                                    init(player, skill) {
                                        player.addSkillBlocker(skill);
                                    },
                                    onremove(player, skill) {
                                        player.removeSkillBlocker(skill);
                                    },
                                    charlotte: true,
                                    skillBlocker(skill, player) {
                                        return skill == player.storage.ls_xianghais;
                                    },
                                    mark: true,
                                    intro: {
                                        content(storage, player, skill) {
                                            var str = '';
                                            var list = player.getSkills(null, false, false).filter(function (i) {
                                                return lib.skill.ls_xianghais_1.skillBlocker(i, player);
                                            });
                                            if (list.length) str += '<br><li>失效技能:' + get.translation(list);
                                            return str;
                                        },
                                    },
                                },
                            },
                        },
                        ls_chuhai: {
                            derivation: ['ls_zhangming'],
                            dutySkill: true,
                            group: ['ls_chuhai_achieve', 'ls_chuhai_fail'],
                            audio: 'ext:偷剽窃盗/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player.canCompare(target);
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target(player, target) {
                                        if (
                                            player.countCards('hs', function (card) {
                                                return get.tag(card, 'damage') > 0 && player.canUse(card, target, null, true) && get.effect(target, card, player, player) > 0 && player.hasValueTarget(card, null, true);
                                            }) > 0
                                        )
                                            return -3;
                                        return -1;
                                    },
                                },
                            },
                            content() {
                                'step 0';
                                ls_chuhaisheng = 0;
                                ls_chuhaifu = 0;
                                ('step 1');
                                player.chooseToCompare(target);
                                ('step 2');
                                if (result.bool) {
                                    ls_chuhaisheng += 1;
                                } else {
                                    ls_chuhaifu += 1;
                                }
                                ('step 3');
                                if (player.canCompare(target)) event.goto(1);
                                else {
                                    var num = ls_chuhaisheng + player.countCards('h');
                                    if (num > ls_chuhaifu) event.goto(4);
                                    else event.finish();
                                }
                                ('step 4');
                                player.addMark('ls_chuhai_mark', 1);
                                target.damage('nocard');
                                event.trigger('chuhai');
                            },
                            subSkill: {
                                achieve: {
                                    audio: 'ls_chuhai',
                                    trigger: {
                                        player: 'chuhai',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countMark('ls_chuhai_mark') > 2;
                                    },
                                    content() {
                                        player.awakenSkill('ls_chuhai');
                                        game.log(player, '成功完成使命');
                                        player.removeSkill('ls_xianghai');
                                        player.addSkill('ls_zhangming');
                                    },
                                },
                                fail: {
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
                                        game.log(player, '使命失败');
                                        player.awakenSkill('ls_chuhai');
                                        player.draw(Math.min(player.maxHp, 20));
                                    },
                                },
                                mark: {
                                    marktext: '害',
                                    intro: {
                                        name: '除害',
                                        content: 'mark',
                                    },
                                },
                            },
                        },
                        ls_fuhas: {
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            limited: true,
                            content() {
                                'step 0';
                                'step 1';
                                var list;
                                if (_status.characterlist) {
                                    list = [];
                                    for (var i = 0; i < _status.characterlist.length; i++) {
                                        var name = _status.characterlist[i];
                                        if (lib.character[name][1] == 'wu') list.push(name);
                                    }
                                } else if (_status.connectMode) {
                                    list = get.charactersOL(function (i) {
                                        return lib.character[i][1] != 'wu';
                                    });
                                } else {
                                    list = get.gainableCharacters(function (info) {
                                        return info[1] == 'wu';
                                    });
                                }
                                var players = game.players.concat(game.dead);
                                for (var i = 0; i < players.length; i++) {
                                    list.remove(players[i].name);
                                    list.remove(players[i].name1);
                                    list.remove(players[i].name2);
                                }
                                list.remove('zhaoyun');
                                list.remove('re_zhaoyun');
                                list.remove('ol_zhaoyun');
                                list = list.randomGets(7);
                                var skills = [];
                                for (var i of list) {
                                    skills.addArray(
                                        (lib.character[i][3] || []).filter(function (skill) {
                                            return true;
                                        })
                                    );
                                }
                                if (!list.length || !skills.length) {
                                    event.finish();
                                    return;
                                }
                                if (player.isUnderControl()) {
                                    game.swapPlayerAuto(player);
                                }
                                var switchToAuto = function () {
                                    _status.imchoosing = false;
                                    event._result = {
                                        bool: true,
                                        skills: skills.randomGets(2),
                                    };
                                    if (event.dialog) event.dialog.close();
                                    if (event.control) event.control.close();
                                };
                                var chooseButton = function (list, skills) {
                                    var event = _status.event;
                                    if (!event._result) event._result = {};
                                    event._result.skills = [];
                                    var rSkill = event._result.skills;
                                    var dialog = ui.create.dialog('请选择获得至多两个技能', [list, 'character'], 'hidden');
                                    event.dialog = dialog;
                                    var table = document.createElement('div');
                                    table.classList.add('add-setting');
                                    table.style.margin = '0';
                                    table.style.width = '100%';
                                    table.style.position = 'relative';
                                    for (var i = 0; i < skills.length; i++) {
                                        var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                                        td.link = skills[i];
                                        table.appendChild(td);
                                        td.innerHTML = '<span>' + get.translation(skills[i]) + '</span>';
                                        td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                            if (_status.dragged) return;
                                            if (_status.justdragged) return;
                                            _status.tempNoButton = true;
                                            setTimeout(function () {
                                                _status.tempNoButton = false;
                                            }, 500);
                                            var link = this.link;
                                            if (!this.classList.contains('bluebg')) {
                                                if (rSkill.length >= 2) return;
                                                rSkill.add(link);
                                                this.classList.add('bluebg');
                                            } else {
                                                this.classList.remove('bluebg');
                                                rSkill.remove(link);
                                            }
                                        });
                                    }
                                    dialog.content.appendChild(table);
                                    dialog.add('　　');
                                    dialog.open();
                                    event.switchToAuto = function () {
                                        event.dialog.close();
                                        event.control.close();
                                        game.resume();
                                        _status.imchoosing = false;
                                    };
                                    event.control = ui.create.control('ok', function (link) {
                                        event.dialog.close();
                                        event.control.close();
                                        game.resume();
                                        _status.imchoosing = false;
                                    });
                                    for (var i = 0; i < event.dialog.buttons.length; i++) {
                                        event.dialog.buttons[i].classList.add('selectable');
                                    }
                                    game.pause();
                                    game.countChoose();
                                };
                                if (event.isMine()) {
                                    chooseButton(list, skills);
                                } else if (event.isOnline()) {
                                    event.player.send(chooseButton, list, skills);
                                    event.player.wait();
                                    game.pause();
                                } else {
                                    switchToAuto();
                                }
                                ('step 2');
                                var map = event.result || result;
                                if (map && map.skills && map.skills.length) {
                                    for (var i of map.skills) player.addSkillLog(i);
                                }
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        ls_zhangming: {
                            init(player, skill) {
                                player.useSkill('ls_fuhas');
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return 2 * num;
                                },
                            },
                            trigger: {
                                player: 'drawBegin',
                            },
                            forced: true,
                            audio: 'ext:偷剽窃盗/audio:2',
                            content() {
                                trigger.num++;
                            },
                        },
                        ls_sanbin2: {
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            silent: true,
                            charlotte: true,
                            content() {
                                'step 0';
                                var skills = [];
                                if (_status.characterlist) {
                                    for (var i = 0; i < _status.characterlist.length; i++) {
                                        var name = _status.characterlist[i];
                                        if (!lib.character[name]) continue;
                                        var skillsx = lib.character[name][3].slice(0);
                                        var list = skillsx.slice(0);
                                        for (var j = 0; j < skillsx.length; j++) {
                                            var info = get.info(skillsx[j]);
                                            if (!info) {
                                                skillsx.splice(j, 1);
                                                list.splice(j--, 1);
                                                continue;
                                            }
                                        }
                                        for (var J of list) {
                                            if (J.includes('rewrite') || skills.includes(J)) continue;
                                            var info = get.info(J);
                                            if (!info || info.zhuSkill || info.juexingji || info.charlotte) continue;
                                            skills.push(J);
                                            lib.card['skillCard_' + J] = {
                                                fullimage: true,
                                                image: 'character:' + name,
                                            };
                                            lib.translate['skillCard_' + J] = lib.translate[J];
                                            lib.translate['skillCard_' + J + '_info'] = lib.translate[J + '_info'];
                                        }
                                    }
                                    sanbin2_skills = skills;
                                }
                                ('step 1');
                                event.current = player;
                                var list = sanbin2_skills.randomGets(15);
                                var max = 3;
                                event.skillList = list.concat();
                                for (var i = 0; i < list.length; i++) {
                                    list[i] = ['', '', 'skillCard_' + list[i]];
                                }
                                var resultList = {};
                                event.current.chooseButton([Object.keys(resultList).filter((key) => resultList[key] > 0).length ? `选择要获得的技能(至多选${max}个)` + skillRecommend : `选择要获得的技能(至多选${max}个)`, [list, 'vcard']], true, [0, max]);
                                ('step 2');
                                for (var i = 0; i < result.links.length; i++) {
                                    event.current.addSkill(result.links[i][2].slice(10));
                                }
                            },
                        },
                        ls_sanbin3: {
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            silent: true,
                            charlotte: true,
                            content() {
                                'step 0';
                                var skills = [];
                                if (_status.characterlist) {
                                    for (var i = 0; i < _status.characterlist.length; i++) {
                                        var name = _status.characterlist[i];
                                        if (!lib.character[name]) continue;
                                        var skillsx = lib.character[name][3].slice(0);
                                        var list = skillsx.slice(0);
                                        for (var j = 0; j < skillsx.length; j++) {
                                            var info = get.info(skillsx[j]);
                                            if (!info) {
                                                skillsx.splice(j, 1);
                                                list.splice(j--, 1);
                                                continue;
                                            }
                                        }
                                        for (var j = 0; j < list.length; j++) {
                                            if (list[j].includes('rewrite') || skills.includes(list[j])) continue;
                                            var info = get.info(list[j]);
                                            if (!info || info.zhuSkill || info.juexingji || info.charlotte) continue;
                                            skills.push(list[j]);
                                            lib.card['skillCard_' + list[j]] = {
                                                fullimage: true,
                                                image: 'character:' + name,
                                            };
                                            lib.translate['skillCard_' + list[j]] = lib.translate[list[j]];
                                            lib.translate['skillCard_' + list[j] + '_info'] = lib.translate[list[j] + '_info'];
                                        }
                                    }
                                    sanbin3_skills = skills;
                                }
                                ('step 1');
                                event.current = player;
                                var list = sanbin3_skills.randomGets(20);
                                var max = 4;
                                event.skillList = list.concat();
                                for (var i = 0; i < list.length; i++) {
                                    list[i] = ['', '', 'skillCard_' + list[i]];
                                }
                                var resultList = {};
                                event.current.chooseButton([Object.keys(resultList).filter((key) => resultList[key] > 0).length ? `选择要获得的技能(至多选${max}个)` + skillRecommend : `选择要获得的技能(至多选${max}个)`, [list, 'vcard']], true, [0, max]);
                                ('step 2');
                                for (var i = 0; i < result.links.length; i++) {
                                    event.current.addSkill(result.links[i][2].slice(10));
                                }
                            },
                        },
                        ls_jinzhou: {
                            audio: 'ext:偷剽窃盗/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            delay: false,
                            filter(event, player) {
                                return player.countCards('h');
                            },
                            content() {
                                'step 0';
                                player.showHandcards();
                                ('step 1');
                                player.chooseControl('heart', 'diamond', 'club', 'spade').set('ai', function () {
                                    var player = _status.event.player;
                                    var lise = ['heart', 'diamond', 'club', 'spade'];
                                    var he = lise.randomGet();
                                    for (var i of lise) {
                                        if (player.countCards('h', { suit: i }) > 1) return i;
                                    }
                                    return he;
                                });
                                ('step 2');
                                event.control = result.control;
                                if (!player.getCards('h', { suit: event.control })) {
                                    event.finish();
                                } else {
                                    var cards;
                                    cards = player.getCards('h', { suit: event.control });
                                    player.discard(cards);
                                    event.num = cards.length;
                                }
                                ('step 3');
                                if (event.num > 0) player.draw(2);
                                if (event.num > 1) player.recover(1);
                                ('step 4');
                                if (event.num > 2) {
                                    switch (event.control) {
                                        case 'heart':
                                            player.chooseUseTarget({ name: 'gz_kefuzhongyuan' }, false);
                                            break;
                                        case 'diamond':
                                            player.chooseUseTarget({ name: 'gz_guguoanbang' }, false);
                                            break;
                                        case 'club':
                                            player.chooseUseTarget({ name: 'gz_haolingtianxia' }, false);
                                            break;
                                        case 'spade':
                                            player.chooseUseTarget({ name: 'gz_wenheluanwu' }, false);
                                            break;
                                    }
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
                        ls_fuhun: {
                            audio: 'ext:偷剽窃盗/audio:2',
                            trigger: {
                                player: ['phaseBegin', 'damageEnd'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('ls_fuhun'), '使一名角色变成绵羊', function (card, player, target) {
                                        return target != player && target.name != 'ls_mianyang';
                                    })
                                    .set('ai', function (target) {
                                        var att = get.attitude(player, target);
                                        return -att;
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    target.storage.ls_fuhun_name = target.name;
                                    event.target = target;
                                    event.goto(3);
                                }
                                ('step 2');
                                event.finish();
                                ('step 3');
                                event.target.reinit(event.target.name, 'ls_mianyang');
                                event.target.addSkill('ls_fuhun_show');
                            },
                            subSkill: {
                                show: {
                                    mark: true,
                                    charlotte: true,
                                    trigger: {
                                        player: ['phaseBegin', 'dying'],
                                    },
                                    forced: true,
                                    content() {
                                        player.reinit('ls_mianyang', player.storage.ls_fuhun_name);
                                        player.update();
                                        player.removeSkill('ls_fuhun_show');
                                    },
                                },
                            },
                        },
                        ls_shoufu: {
                            audio: 'ext:偷剽窃盗/audio:2',
                            initList(player) {
                                var list,
                                    skills = [];
                                if (get.mode() == 'guozhan') {
                                    list = [];
                                    for (var i in lib.characterPack.mode_guozhan) list.push(i);
                                } else if (_status.connectMode) list = get.charactersOL();
                                else {
                                    list = [];
                                    for (var i in lib.character) {
                                        if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) continue;
                                        list.push(i);
                                    }
                                }
                                for (var i of list) {
                                    if (i.indexOf('gz_jun') == 0) continue;
                                    for (var j of lib.character[i][3]) {
                                        if (j == 'ls_shoufu') continue;
                                        var skill = lib.skill[j];
                                        var info = get.info(j);
                                        if (info && info.forced) skills.add(j);
                                    }
                                }
                                player.storage.ls_shoufu = skills;
                            },
                            trigger: {
                                player: 'phaseZhunbei',
                            },
                            forced: true,
                            preHidden: true,
                            content() {
                                'step 0';
                                var next = player.chooseBool(get.prompt('ls_shoufu'), '选择获得一个技能').setHiddenSkill(event.name);
                                if (player.hasSkill('ls_shoufu')) next.set('frequentSkill', 'ls_shoufu');
                                ('step 1');
                                if (result.bool) {
                                } else event.finish();
                                ('step 2');
                                if (player.isIn()) {
                                    if (!player.storage.ls_shoufu) lib.skill.ls_shoufu.initList(player);
                                    var list = player.storage.ls_shoufu.randomGets(3);
                                    if (!list.length) {
                                        event.finish();
                                        return;
                                    }
                                    event.videoId = lib.status.videoId++;
                                    var func = function (skills, id) {
                                        var dialog = ui.create.dialog('forcebutton');
                                        dialog.videoId = id;
                                        dialog.add('秘法:选择一个技能');
                                        for (var i = 0; i < skills.length; i++) {
                                            dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【' + get.translation(skills[i]) + '】</div><div>' + lib.translate[skills[i] + '_info'] + '</div></div>');
                                        }
                                        dialog.addText(' <br> ');
                                    };
                                    if (player.isOnline()) player.send(func, list, event.videoId);
                                    else if (player == game.me) func(list, event.videoId);
                                    list.add('cancel');
                                    player.chooseControl(list);
                                } else event.finish();
                                ('step 3');
                                game.broadcastAll('closeDialog', event.videoId);
                                if (result.control) {
                                    event.skill = result.control;
                                    player.chooseTarget('选择【秘法】的目标').set('ai', function (target) {
                                        var att = get.attitude(player, target);
                                        if ((target = player)) att = att * 1.2;
                                        return att;
                                    });
                                }
                                ('step 4');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    event.target = target;
                                } else {
                                    event.finish();
                                }
                                ('step 5');
                                target.addAdditionalSkill('ls_shoufu', event.skill);
                                player.popup(event.skill);
                                game.log(player, '获得了技能', '【' + get.translation(event.skill) + '】');
                            },
                        },
                        ls_huayang: {
                            audio: 'ls_yigui',
                            forbid: ['guozhan'],
                            charlotte: true,
                            init(player) {
                                if (player.storage.ls_huayang_show) return false;
                                var change = function (target) {
                                    if (target == player) {
                                        var list;
                                        list = ['ls_mianyang'];
                                        var name = list.randomGet();
                                        target.reinit('ls_zuoci', name, 'nosmooth');
                                        target.storage.ls_huayang_show = name;
                                        target.addSkill('ls_huayang_show');
                                        player._inits.remove(change);
                                        player.hp = player.maxHp;
                                        player.update();
                                    }
                                };
                                if (!player._inits) {
                                    player._inits = [];
                                }
                                player._inits.push(change);
                            },
                            subSkill: {
                                show: {
                                    audio: 'ls_yigui',
                                    trigger: {
                                        player: ['phaseBegin', 'dying'],
                                    },
                                    forced: true,
                                    content() {
                                        player.init('ls_zuoci');
                                    },
                                    ai: {
                                        order: 5,
                                        result: {
                                            player(player) {
                                                if (player.hp == 1) return 2;
                                                else return -1;
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        ls_yigui: {
                            audio: 'ext:偷剽窃盗/audio:2',
                            trigger: {
                                global: 'die',
                            },
                            ai: {
                                order: 7.5,
                                threaten: 1,
                            },
                            content() {
                                'step 0';
                                player.storage.ls_yigui = player.name;
                                player.draw(3);
                                player.reinit(player.name, trigger.player.name);
                                ('step 1');
                                player.addSkill('ls_yigui_show1');
                            },
                            subSkill: {
                                show1: {
                                    audio: 'ls_yigui',
                                    enable: 'phaseUse',
                                    content() {
                                        var name = player.storage.ls_yigui;
                                        player.reinit(player.name, name);
                                        if (player.maxHp > player.hp) player.hp = player.maxHp;
                                        player.removeSkill('ls_yigui_show1');
                                    },
                                },
                            },
                        },
                        ls_huanhua: {
                            audio: 'ext:偷剽窃盗/audio:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = player.getStorage('ls_huanhua_1');
                                    if (list.length) return ui.create.dialog('幻化', [list, 'vcard']);
                                    return ui.create.dialog('幻化:当前没有可用牌');
                                },
                                check(button) {
                                    var player = _status.event.player,
                                        card = {
                                            name: button.link[2],
                                            nature: button.link[3],
                                            storage: {
                                                nowuxie: true,
                                            },
                                        };
                                    return player.getUseValue(card);
                                },
                                backup(links, player) {
                                    return {
                                        filterCard: true,
                                        position: 'h',
                                        popname: true,
                                        viewAs: {
                                            name: links[0][2],
                                            nature: links[0][3],
                                            storage: {
                                                nowuxie: true,
                                            },
                                        },
                                        onuse(result, player) {
                                            var name = links[0][2];
                                            player.unmarkAuto('ls_huanhua_1', [name]);
                                            game.log(player, '从幻化记录中移除了', '#y' + get.translation(name));
                                        },
                                        check(card) {
                                            return 8 - get.value(card);
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                                },
                            },
                            ai: {
                                order: 9,
                                result: {
                                    player: 1,
                                },
                            },
                            group: 'ls_huanhua_1',
                            subSkill: {
                                1: {
                                    audio: 'ls_huanhua',
                                    trigger: {
                                        global: 'useCardToTargeted',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return get.type2(event.card) != 'equip' && !player.getStorage('ls_huanhua_1').includes(event.card.name) && get.distance(player, event.target) <= 1 && event.target.isIn();
                                    },
                                    content() {
                                        player.markAuto('ls_huanhua_1', [trigger.card.name]);
                                    },
                                    intro: {
                                        content: '已记录牌名:$',
                                    },
                                },
                            },
                        },
                        ls_changmao: {
                            audio: 1,
                            trigger: { player: 'damageBefore1' },
                            filter(event, player) {
                                if (event.nature == 'fire') return true;
                                return false;
                            },
                            mark: true,
                            forced: true,
                            content() {
                                trigger.num++;
                            },
                            ai: {
                                nothunder: true,
                                nodamage: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'damage') && !get.tag(card, 'fireDamage')) return [0, 0];
                                    },
                                },
                            },
                        },
                        ls_huaji: {
                            group: 'zishou2',
                        },
                        ls_qianmian5: {
                            audio: 1,
                            trigger: { player: 'phaseBefore' },
                            forced: true,
                            filter(event, player) {
                                return player.phaseNumber > 10;
                            },
                            content() {
                                player.say(['够了,该结束了'].randomGet());
                                player.clearSkills();
                                player.gainMaxHp(10 - player.maxHp);
                                player.recover(10 - player.hp);
                                var list = ['tianyi2', 'retieji', 'repojun', 'oldcihuai', 'dangxian', 'wangong'];
                                player.addSkill(list);
                                if (player.sex == 'female') {
                                    player.sex = 'male';
                                }
                                game.broadcastAll() + player.node.avatar.setBackgroundImage('extension/偷剽窃盗/image/ls_lubu.jpg');
                            },
                        },
                        ls_shenqu: {
                            audio: 15,
                            trigger: {
                                player: 'useCardBegin',
                            },
                            forced: true,
                            content() { },
                        },
                        ls_qianmian2: {
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('h') > 0;
                            },
                            usable: 1,
                            filterCard: true,
                            init(player) {
                                var list,
                                    skills = [];
                                if (get.mode() == 'guozhan') {
                                    list = [];
                                    for (var i in lib.characterPack.mode_guozhan) list.push(i);
                                } else if (_status.connectMode) list = get.charactersOL();
                                else {
                                    list = [];
                                    for (var i in lib.character) {
                                        if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) continue;
                                        list.push(i);
                                    }
                                }
                                for (var i of list) {
                                    if (i.indexOf('gz_jun') == 0) continue;
                                    for (var j of lib.character[i][3]) {
                                        if (j == 'ls_qian' || j == 'twfuzuan' || j == 'lingyan' || j == 'yunyou') continue;
                                        var skill = lib.skill[j];
                                        var info = get.info(j);
                                        if (info && !info.unique && info.enable == 'phaseUse' && !info.selectTarget && !info.context && !info.chooseButton && !info.complexCard && !info.viewAs && info.selectCard != 2) skills.add(j);
                                    }
                                }
                                player.storage.ls_qian = skills;
                            },
                            check(card) {
                                return 9 - get.value(card);
                            },
                            position: 'he',
                            enable: 'phaseUse',
                            content() {
                                var skills = player.storage.ls_qian.randomGets(2);
                                game.log(skills[0]);
                                var targets = [];
                                targets.add(target);
                                player.useSkill(skills[0], cards, targets);
                                game.log(skills[1]);
                                player.useSkill(skills[1], cards, targets);
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target: -1,
                                },
                                threaten: 1,
                                expose: 0.2,
                            },
                            group: ['ls_qianmian5'],
                        },
                        nscongjun1: {
                            forbid: ['guozhan'],
                            charlotte: true,
                            init(player) {
                                if (player.storage.nscongjun1_show) return false;
                                var change = function (target) {
                                    if (target == player) {
                                        var list;
                                        if (_status.connectMode) {
                                            list = get.charactersOL(function (i) {
                                                return lib.character[i][1] == 'shen';
                                            });
                                        } else {
                                            list = get.gainableCharacters(function (info) {
                                                return info[1] == 'shen';
                                            });
                                        }
                                        var name = list.randomGet();
                                        target.reinit('ls_45aya1', name, 'nosmooth');
                                        target.storage.nscongjun1_show = name;
                                        target.addSkill('nscongjun1_show');
                                        player._inits.remove(change);
                                        player.hp = player.maxHp;
                                        player.update();
                                    }
                                };
                                if (!player._inits) {
                                    player._inits = [];
                                }
                                player._inits.push(change);
                            },
                            subSkill: {
                                show: {
                                    trigger: {
                                        player: 'dying',
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        ('step 1');
                                        player.reinit(player.storage.nscongjun1_show, 'ls_45aya1', 'nosmooth');
                                        ('step 2');
                                        player.removeSkill('nscongjun1_show');
                                        player.recover(15);
                                        ls_fuxing = 0;
                                        player.say(['看看你们,还在期待一个答案', '问题,都是问题,这么多问题', '我是伏行之混沌,我是奈亚拉托提普'].randomGet());
                                        player.addSkill('ls_kongdo');
                                    },
                                },
                            },
                        },
                        ls_kongdo: {
                            trigger: {
                                player: 'dieBefore',
                            },
                            charlotte: true,
                            forced: true,
                            filter(event, player) {
                                return ls_fuxing + player.hp > 0;
                            },
                            content() {
                                trigger.cancel();
                            },
                            init(player) {
                                var list = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
                                ls_fuxing = list.randomGet();
                            },
                            group: 'ls_kongdo_shoupai',
                            subSkill: {
                                shoupai: {
                                    mod: {
                                        maxHandcardBase(player, num) {
                                            return ls_fuxing;
                                        },
                                    },
                                },
                            },
                        },
                        ls_xingxue: {
                            audio: 'ext:偷剽窃盗/audio:2',
                            forced: true,
                            trigger: {
                                player: ['phaseUseBegin', 'damageEnd', 'phaseJieshuBegin'],
                            },
                            filter(event, player) {
                                if (event.name == 'damage' && ls_shanghai1 == 0) return false;
                                if (event.name == 'phaseJieshu' && ls_zhunbei1 == 0) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                'step 1';
                                if (ls_panding1 == 0) event.goto(4);
                                ('step 2');
                                player.judge(function (card) {
                                    if (get.color(card) == 'black') return -2;
                                    return 2;
                                }).judge2 = function (result) {
                                    return result.bool;
                                };
                                ('step 3');
                                if (result.judge == 2) {
                                    event.goto(4);
                                } else event.goto(5);
                                ('step 4');
                                player.draw(ls_x1);
                                if (event.triggername != 'damageEnd') player.recover(ls_y1);
                                ('step 5');
                                if (ls_z1 != 0) player.chooseToDiscard(ls_z1, true, 'he');
                                if (ls_m1 != 0) player.loseHp(ls_m1);
                                if (ls_x2 == 0 && ls_y2 == 0 && ls_z2 == 0 && ls_m2 == 0) event.finish();
                                ('step 6');
                                var num = ls_liangming;
                                player.chooseTarget([1, num], true, get.prompt2('ls_xingxue')).set('ai', function (target) {
                                    var att = get.attitude(_status.event.player, target);
                                    if (target.countCards('he')) return att;
                                    return att / 10;
                                });
                                ('step 7');
                                if (result.targets?.length) {
                                    event.targets = result.targets;
                                    event.targets.sort(lib.sort.seat);
                                } else {
                                    event.finish();
                                }
                                ('step 8');
                                if (event.targets.length) {
                                    var target = event.targets.shift();
                                    event.current = target;
                                } else {
                                    event.finish();
                                }
                                ('step 9');
                                if (event.current && event.current.countCards('he')) {
                                    var att = get.attitude(player, event.current);
                                    if (att < 0) {
                                        if (ls_x2 != 0) {
                                            if (ls_qizhi == 1) player.discardPlayerCard(event.current, ls_x2, 'he', true);
                                            else event.current.chooseToDiscard(ls_x2, true, 'he');
                                        }
                                        if (ls_liushi == 1) event.current.loseHp(ls_y2);
                                        else event.current.damage(ls_y2);
                                        event.current.draw(ls_z2);
                                        event.current.recover(ls_m2);
                                    } else {
                                        event.current.draw(ls_x2);
                                        event.current.recover(ls_y2);
                                        event.current.chooseToDiscard(ls_z2, true, 'he');
                                        event.current.damage(ls_m2);
                                    }
                                }
                                event.goto(8);
                            },
                        },
                        ls_mifa: {
                            audio: 'ext:偷剽窃盗/audio:2',
                            derivation: ['ls_mifa1', 'ls_mifa2'],
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.hasSkill('ls_xingxue2');
                            },
                            content() {
                                'step 0';
                                var list = [];
                                list.push('选项一');
                                list.push('选项二');
                                list.push('cancel2');
                                player.chooseControl(list).set('choiceList', ['获得技能秘法1,直到回合结束', '获得技能秘法2,直到回合结束']);
                                ('step 1');
                                event.control = result.control;
                                if (event.control == '选项一') {
                                    player.addTempSkill('ls_mifa1', 'phaseEnd');
                                }
                                if (event.control == '选项二') {
                                    player.addTempSkill('ls_mifa2', 'phaseEnd');
                                }
                            },
                        },
                        ls_mifa2: {
                            audio: 'ext:偷剽窃盗/audio:1',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.hasSkill('ls_xingxue2');
                            },
                            content() {
                                'step 0';
                                var list = [];
                                list.push('选项一');
                                list.push('选项二');
                                list.push('选项三');
                                player.chooseControl(list).set('choiceList', ['加入判定', '失去一点体力上限', '受到一点伤害,重复两次']);
                                ('step 1');
                                event.control = result.control;
                                if (event.control == '选项一') {
                                    if (ls_panding1 == 1) {
                                        player.say(['想玩阴的,做梦', '呵呵'].randomGet());
                                        event.finish();
                                    } else ls_panding1 = 1;
                                }
                                if (event.control == '选项二') {
                                    player.loseMaxHp();
                                }
                                if (event.control == '选项三') {
                                    player.damage();
                                    player.damage();
                                }
                                ('step 2');
                                var list = [];
                                list.push('选项一');
                                list.push('选项二');
                                list.push('选项三');
                                list.push('选项四');
                                player.chooseControl(list).set('choiceList', ['摸四张牌', '对一名角色造成一点伤害,并使其获得重伤', '增加一点体力上限']);
                                ('step 3');
                                event.control = result.control;
                                if (event.control == '选项一') {
                                    player.draw(4);
                                }
                                if (event.control == '选项三') {
                                    player.gainMaxHp();
                                }
                                if (event.control == '选项二') {
                                    event.goto(4);
                                } else event.finish();
                                ('step 4');
                                player.chooseTarget(lib.filter.notMe, get.prompt('ls_mifa2'), '对一名角色造成一点伤害').set('ai', function (target) {
                                    var att = get.attitude(player, target);
                                    return att;
                                });
                                ('step 5');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    target.damage();
                                    target.addSkill('ls_zhongshang');
                                }
                            },
                        },
                        ls_mifa1: {
                            audio: 'ext:偷剽窃盗/audio:1',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.hasSkill('ls_xingxue2');
                            },
                            content() {
                                'step 0';
                                var list = [];
                                list.push('选项一');
                                list.push('选项二');
                                list.push('选项三');
                                list.push('选项四');
                                list.push('cancel2');
                                player.chooseControl(list).set('choiceList', ['增加数值z1', '增加数值z2', '增加数值m1', '增加数值m2']);
                                ('step 1');
                                event.control = result.control;
                                if (event.control == '选项一') {
                                    ls_z1 += 1;
                                    event.goto(3);
                                }
                                if (event.control == '选项二') {
                                    ls_z2 += 1;
                                    event.goto(3);
                                }
                                if (event.control == '选项三') {
                                    ls_m1 += 1;
                                    event.goto(6);
                                }
                                if (event.control == '选项四') {
                                    ls_m2 += 1;
                                    event.goto(6);
                                }
                                ('step 2');
                                event.finish();
                                ('step 3');
                                var list = [];
                                list.push('选项一');
                                list.push('选项二');
                                list.push('cancel2');
                                player.chooseControl(list).set('choiceList', ['增加数值x1', '增加数值x2']);
                                ('step 4');
                                event.control = result.control;
                                if (event.control == '选项一') ls_x1 += 1;
                                if (event.control == '选项二') ls_x2 += 1;
                                ('step 5');
                                event.finish();
                                ('step 6');
                                var list = [];
                                list.push('选项一');
                                list.push('选项二');
                                list.push('cancel2');
                                player.chooseControl(list).set('choiceList', ['增加数值y1', '增加数值y2']);
                                ('step 7');
                                event.control = result.control;
                                if (event.control == '选项一') ls_y1 += 1;
                                ('step 8');
                                if (event.control == '选项二') ls_y2 += 1;
                            },
                        },
                        ls_xingxue2: {
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            forced: true,
                            group: 'ls_xingxue',
                            init(player) {
                                ls_x1 = 0;
                                ls_y1 = 0;
                                ls_z1 = 0;
                                ls_m1 = 0;
                                ls_x2 = 0;
                                ls_y2 = 0;
                                ls_z2 = 0;
                                ls_m2 = 0;
                                ls_panding1 = 0;
                                ls_shanghai1 = 0;
                                ls_zhunbei1 = 0;
                                ls_liushi = 0;
                                ls_qizhi = 0;
                                ls_liangming = 1;
                            },
                            mark: true,
                            filter(event, player) {
                                return !player.getStorage('ls_xingxue_2').length && (event.name != 'phase' || game.phaseNumber == 0);
                            },
                            content() {
                                player.draw(2);
                            },
                            marktext: '魔',
                            intro: {
                                content(storage, player, skill) {
                                    var cum = '出牌阶段开始时,';
                                    if (ls_shanghai1 == 1) cum += '受到伤害时,';
                                    if (ls_zhunbei1 == 1) cum += '结束阶段,';
                                    if (ls_panding1 == 1) cum += '你进行判定,若为红';
                                    cum += '你摸' + ls_x1 + '张牌,回复' + ls_y1 + '点体力(若为伤害时机则不触发).你弃置' + ls_z1 + '张牌,流失' + ls_m1 + '点体力,你选择';
                                    if (ls_liangming == 2) cum += '两';
                                    else cum += '一';
                                    cum += '名其他角色,若其是敌方/友方角色,';
                                    if (ls_qizhi == 1) cum += '你弃置其';
                                    else cum += '其弃置';
                                    cum += '/其摸' + ls_x2 + '张牌,';
                                    if (ls_liushi == 1) cum += '流失/回复' + ls_y2 + '点体力,';
                                    else cum += '受到/回复' + ls_y2 + '点伤害/体力,';
                                    cum += '摸/弃置' + ls_z2 + '张牌,回复/流失' + ls_m2 + '点体力/伤害';
                                    return cum;
                                },
                            },
                        },
                        ls_lianhua: {
                            audio: 'ext:偷剽窃盗/audio:2',
                            audio: 'ext:偷剽窃盗/audio:2',
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            content() {
                                var list = ['feibiao', 'hufu', 'zhao', 'zhanfang', 'shandian'];
                                player.gain(game.createCard('hsqingyu_' + list.randomGet()), 'draw');
                            },
                            group: ['ls_lianhua_add', 'ls_lianhua_siwang'],
                            subSkill: {
                                add: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    filter(event, player) {
                                        return event.card.name.indexOf('hsqingyu_') == 0 && player.hasSkill('ls_xingxue2');
                                    },
                                    content() {
                                        'step 0';
                                        player.addMark('ls_lianhua_mark', 1);
                                        ('step 1');
                                        if (player.countMark('ls_lianhua_mark') % 3 == 0) {
                                        } else event.goto(5);
                                        ('step 2');
                                        var list = [];
                                        list.push('选项一');
                                        list.push('选项二');
                                        list.push('cancel2');
                                        player.chooseControl(list).set('choiceList', ['增加数值x1', '增加数值x2']);
                                        ('step 3');
                                        event.control = result.control;
                                        if (event.control == '选项二') ls_x2 += 1;
                                        ('step 4');
                                        if (event.control == '选项一') ls_x1 += 1;
                                        ('step 5');
                                        if (player.countMark('ls_lianhua_mark') % 10 == 0) {
                                        } else event.finish();
                                        ('step 6');
                                        var list = [];
                                        list.push('选项一');
                                        list.push('选项二');
                                        player.chooseControl(list).set('choiceList', ['增加数值y1', '增加数值y2']);
                                        ('step 7');
                                        event.control = result.control;
                                        if (event.control == '选项二') ls_y2 += 1;
                                        ('step 8');
                                        if (event.control == '选项一') ls_y1 += 1;
                                    },
                                    forced: true,
                                },
                                mark: {
                                    marktext: '青',
                                    intro: {
                                        name: '青玉',
                                        content: 'mark',
                                    },
                                },
                                siwang: {
                                    forced: true,
                                    trigger: {
                                        global: 'dieAfter',
                                    },
                                    filter(event, player) {
                                        return player.hasSkill('ls_xingxue2');
                                    },
                                    content() {
                                        'step 0';
                                        var list = [];
                                        list.push('选项一');
                                        list.push('选项二');
                                        list.push('选项三');
                                        list.push('选项四');
                                        list.push('选项五');
                                        player.chooseControl(list).set('choiceList', ['青玉增加受到伤害时机', '青玉增加结束阶段时机', '青玉的目标由受到伤害改成流失体力', '青玉的目标由其弃置改成你弃置', '青玉增加一位目标']);
                                        ('step 1');
                                        event.control = result.control;
                                        if (event.control == '选项一') ls_shanghai1 = 1;
                                        ('step 2');
                                        if (event.control == '选项二') ls_zhunbei1 = 1;
                                        ('step 3');
                                        if (event.control == '选项三') ls_liushi = 1;
                                        ('step 4');
                                        if (event.control == '选项四') ls_qizhi = 1;
                                        ('step 5');
                                        if (event.control == '选项五') ls_liangming = 2;
                                    },
                                },
                            },
                        },
                        ls_enze: {
                            audio: 'ext:偷剽窃盗/audio:2',
                            mark: true,
                            marktext: '恩',
                            intro: {
                                content(storage, player, skill) {
                                    if (player.storage.nzry_longnu == true) return '锁定技,一轮游戏开始时,你弃置两张手牌,声名一个基本牌名、锦囊或者装备.其他角色使用此牌时,你摸一张牌,你发现一个煞,并令所有其他角色获得,直到下轮开始';
                                    return '锁定技,一轮游戏开始时,你摸两张牌,声名一个基本牌名、锦囊或者装备.其他角色不能使用打出弃置此牌,你发现一个技能,并令所有角色获得,直到下轮开始';
                                },
                            },
                            audio: 'ext:偷剽窃盗/audio:2',
                            trigger: {
                                global: 'roundStart',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var list = [];
                                list.push('tao');
                                list.push('sha');
                                list.push('shan');
                                list.push('jiu');
                                list.push('trick');
                                list.push('equip');
                                list.push('cancel2');
                                player.chooseControl(list).set('ai', function () {
                                    return 4;
                                });
                                ('step 1');
                                gongsun = result.control;
                                game.log(player, '选择了', '' + get.translation(gongsun));
                                if (player.storage.nzry_longnu == true) {
                                    player.chooseToDiscard(2, 'h', true);
                                } else {
                                    player.draw(2);
                                }
                                ('step 2');
                                if (player.storage.nzry_longnu == true) {
                                    player.storage.nzry_longnu = false;
                                    player.useSkill('ls_faxian');
                                    if (gongsun == 'trick' || gongsun == 'equip') {
                                        player.addTempSkill('ls_enze_lingce2', 'roundStart');
                                    } else {
                                        player.addTempSkill('ls_enze_lingce', 'roundStart');
                                    }
                                } else {
                                    player.storage.nzry_longnu = true;
                                    player.addSkill('ls_enze2');
                                    var targets = game
                                        .filterPlayer(function (current) {
                                            return current != player;
                                        })
                                        .sortBySeat();
                                    for (var i of targets) {
                                        if (gongsun == 'trick' || gongsun == 'equip') {
                                            i.addTempSkill('ls_enze_gong2', 'roundStart');
                                            if (gongsun == 'trick') i.addTempSkill('ls_enze_gong3', 'roundStart');
                                        } else {
                                            i.addTempSkill('ls_enze_gong', 'roundStart');
                                        }
                                    }
                                }
                                event.finish();
                            },
                            subSkill: {
                                lingce2: {
                                    marktext: '福',
                                    mark: true,
                                    intro: {
                                        content(storage, player, skill) {
                                            return '当有' + get.translation(gongsun) + '被使用时,你摸一张牌';
                                        },
                                    },
                                    trigger: {
                                        global: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return get.type(event.card) == gongsun || (get.type(event.card) == 'delay' && gongsun == 'trick');
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                                lingce: {
                                    marktext: '福',
                                    mark: true,
                                    intro: {
                                        content(storage, player, skill) {
                                            return '当有' + get.translation(gongsun) + '被使用时,你摸一张牌';
                                        },
                                    },
                                    trigger: {
                                        global: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card.name == gongsun;
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                                gong: {
                                    marktext: '福',
                                    mark: true,
                                    intro: {
                                        content(storage, player, skill) {
                                            return '无法使用打出弃置' + get.translation(gongsun) + '';
                                        },
                                    },
                                    mod: {
                                        cardEnabled(card) {
                                            if (card.name == gongsun) return false;
                                        },
                                        cardRespondable(card) {
                                            if (card.name == gongsun) return false;
                                        },
                                        cardDiscardable(card, player, name) {
                                            if (name == 'phaseDiscard' && card.name == gongsun) {
                                                return false;
                                            }
                                        },
                                    },
                                },
                                gong2: {
                                    marktext: '福',
                                    mark: true,
                                    intro: {
                                        content(storage, player, skill) {
                                            return '无法使用打出弃置' + get.translation(gongsun) + '';
                                        },
                                    },
                                    mod: {
                                        cardEnabled(card) {
                                            if (get.type(card) == gongsun) return false;
                                        },
                                        cardRespondable(card) {
                                            if (get.type(card) == gongsun) return false;
                                        },
                                        cardDiscardable(card, player, name) {
                                            if (name == 'phaseDiscard' && get.type(card) == gongsun) {
                                                return false;
                                            }
                                        },
                                    },
                                },
                                gong3: {
                                    mod: {
                                        cardEnabled(card) {
                                            if (get.type(card) == 'delay') return false;
                                        },
                                        cardRespondable(card) {
                                            if (get.type(card) == 'delay') return false;
                                        },
                                        cardDiscardable(card, player, name) {
                                            if (name == 'phaseDiscard' && get.type(card) == 'delay') {
                                                return false;
                                            }
                                        },
                                    },
                                },
                            },
                        },
                        ls_enze2: {
                            trigger: {
                                global: 'roundStart',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var list,
                                    skills = [];
                                if (_status.connectMode) list = get.charactersOL();
                                else {
                                    list = [];
                                    for (var i in lib.character) {
                                        if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) continue;
                                        list.push(i);
                                    }
                                }
                                for (var i of list) {
                                    for (var j of lib.character[i][3]) {
                                        if (j == 'ls_enze2' || j == 'ls_enze') continue;
                                        var skill = lib.skill[j];
                                        if (!skill || skill.zhuSkill) continue;
                                        if (skill.init || (skill.ai && (skill.ai.combo || skill.ai.notemp || skill.ai.neg))) continue;
                                        skills.add(j);
                                    }
                                }
                                player.storage.ls_enze2 = skills;
                                ('step 1');
                                var next = player.chooseBool(get.prompt('ls_enze2'), '选择获得一个技能').setHiddenSkill(event.name);
                                if (player.hasSkill('ls_enze2')) next.set('frequentSkill', 'ls_enze2');
                                ('step 2');
                                if (result.bool) {
                                } else event.finish();
                                ('step 3');
                                if (player.isIn()) {
                                    if (!player.storage.ls_enze2) lib.skill.ls_enze2.initList(player);
                                    var list = player.storage.ls_enze2.randomGets(3);
                                    if (!list.length) {
                                        event.finish();
                                        return;
                                    }
                                    event.videoId = lib.status.videoId++;
                                    var func = function (skills, id) {
                                        var dialog = ui.create.dialog('forcebutton');
                                        dialog.videoId = id;
                                        dialog.add('恩泽:选择一个技能');
                                        for (var i = 0; i < skills.length; i++) {
                                            dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【' + get.translation(skills[i]) + '】</div><div>' + lib.translate[skills[i] + '_info'] + '</div></div>');
                                        }
                                        dialog.addText(' <br> ');
                                    };
                                    if (player.isOnline()) player.send(func, list, event.videoId);
                                    else if (player == game.me) func(list, event.videoId);
                                    player.chooseControl(list);
                                } else event.finish();
                                ('step 4');
                                game.broadcastAll('closeDialog', event.videoId);
                                var targets = game
                                    .filterPlayer(function (current) {
                                        return true;
                                    })
                                    .sortBySeat();
                                for (var i of targets) {
                                    i.addTempSkill(result.control, 'roundStart');
                                }
                                ('step 5');
                                player.removeSkill('ls_enze2');
                            },
                        },
                        ls_faxian: {
                            trigger: {
                                global: 'roundStart',
                            },
                            forced: true,
                            content() {
                                enzesha = '';
                                ('step 0');
                                var func = function (player, id) {
                                    var list = ['选项一:恨之煞:锁定技,每当一名敌方角色回复一点体力,你失去一点体力', '选项二:怒之煞:锁定技,你使用的卡牌造成的伤害+1;每当你使用一张牌,有65%的机率失效', '选项三:惧之煞:锁定技,每当你使用一张牌,需弃置一张牌', '选项四:惘之煞:锁定技,你的摸牌数始终-1', '选项五:疑之煞:锁定技,你不能成为非敌方角色的卡牌目标', '选项六:狂之煞:锁定技,每当你使用一张牌指定惟一目标,有50%的机率指定错误的目标', '选项七:傲之煞:锁定技,你的手牌上限-2'];
                                    var choiceList = ui.create.dialog('恩泽:请选择1项');
                                    choiceList.videoId = id;
                                    for (var i = 0; i < list.length; i++) {
                                        var str = '<div class="popup text" style="width:calc(100% - 10px);display:inline-block">';
                                        str += list[i];
                                        str += '</div>';
                                        var next = choiceList.add(str);
                                        next.firstChild.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                                        next.firstChild.link = i;
                                        Object.setPrototypeOf(next, lib.element.Button.prototype); //QQQ
                                        choiceList.buttons.add(next.firstChild);
                                    }
                                    return choiceList;
                                };
                                if (player.isOnline2()) {
                                    player.send(func, player, event.videoId);
                                }
                                event.dialog = func(player, event.videoId);
                                if (player != game.me || _status.auto) {
                                    event.dialog.style.display = 'none';
                                }
                                var next = player.chooseButton();
                                next.set('dialog', event.videoId);
                                next.set('forced', true);
                                next.set('ai', function (button) {
                                    var player = _status.event.player;
                                    switch (button.link) {
                                        case 0:
                                            return 2;
                                            break;
                                        case 1:
                                            return (
                                                Math.max(
                                                    0.5,
                                                    player.countCards('hs', function (card) {
                                                        return card.name == 'sha' && player.hasValueTarget(card);
                                                    }) - player.getCardUsable({ name: 'sha' })
                                                ) +
                                                Math.max.apply(
                                                    Math,
                                                    game
                                                        .filterPlayer(function (current) {
                                                            return current != player;
                                                        })
                                                        .map(function (target) {
                                                            return get.damageEffect(target, player, player);
                                                        })
                                                )
                                            );
                                            break;
                                        case 2:
                                            return player.needsToDiscard() / 4;
                                            break;
                                        case 3:
                                            var num = 0;
                                            return (
                                                0.8 *
                                                Math.max.apply(
                                                    Math,
                                                    game
                                                        .filterPlayer(function (current) {
                                                            return current != player && current.hasCard((card) => lib.filter.canBeGained(card, current, player), 'hej');
                                                        })
                                                        .map(function (target) {
                                                            return get.effect(target, { name: 'shunshou_copy' }, player, player);
                                                        })
                                                )
                                            );
                                            break;
                                        case 4:
                                            var num = 0;
                                            game.countPlayer(function (current) {
                                                if (current != player && get.attitude(player, current) > 0) {
                                                    var num2 = Math.min(5, current.maxHp) - current.countCards('h');
                                                    if (num2 > num) num = num2;
                                                }
                                            });
                                            return num * 0.8;
                                            break;
                                    }
                                });
                                next.set('selectButton', 1);
                                ('step 1');
                                if (player.isOnline2()) {
                                    player.send('closeDialog', event.videoId);
                                }
                                event.dialog.close();
                                result.links.sort();
                                for (var i of result.links) game.log(player, '选择了', '#g【恩泽】', '的', '#y选项');
                                event.links = result.links;
                                if (result.links.includes(0)) enzesha = 'ysjqisha_hen';
                                ('step 2');
                                if (event.links.includes(0)) enzesha = 'ysjqisha_hen';
                                if (event.links.includes(1)) enzesha = 'ysjqisha_nu';
                                if (event.links.includes(2)) enzesha = 'ysjqisha_ju';
                                if (event.links.includes(3)) enzesha = 'ysjqisha_wang';
                                if (event.links.includes(4)) enzesha = 'ysjqisha_yi';
                                if (event.links.includes(5)) enzesha = 'ysjqisha_kuang';
                                if (event.links.includes(6)) enzesha = 'ysjqisha_ao';
                                var targets = game
                                    .filterPlayer(function (current) {
                                        return current != player;
                                    })
                                    .sortBySeat();
                                for (var i of targets) {
                                    i.addTempSkill(enzesha, 'roundStart');
                                }
                            },
                        },
                        ls_wuku: {
                            audio: 'ext:偷剽窃盗/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                if (player.countCards('e') > 0) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                var list = ['pyzhuren_heart', 'pyzhuren_diamond', 'pyzhuren_club', 'pyzhuren_spade', 'pyzhuren_shandian'];
                                var list2 = ['rewrite_bagua', 'rewrite_tengjia', 'rewrite_baiyin', 'rewrite_lanyinjia', 'rewrite_renwang'];
                                var list3 = ['zhuangshu_basic', 'zhuangshu_trick', 'zhuangshu_equip'];
                                var list5 = ['liulongcanjia'];
                                if (player.group == 'qingyao_xian') {
                                    list[5] = 'ymyaoguangjian';
                                    list2[5] = 'ymtianruihualing';
                                }
                                player.gain(game.createCard(list3.randomGet()));
                                player.$draw();
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw();
                                player.gain(game.createCard(list2.randomGet()));
                                player.$draw();
                                player.gain(game.createCard(list5.randomGet()));
                                player.$draw();
                                ('step 1');
                                var hs = player.getCards('h');
                                for (var i = 0; i < hs.length; i++) {
                                    if (get.type(hs[i]) == 'equip') {
                                        if (player.getCards('h').includes(hs[i]) && player.hasUseTarget(hs[i])) {
                                            player.chooseUseTarget(hs[i], true, 'nopopup');
                                        }
                                    }
                                }
                            },
                            ai: {
                                order: 15,
                                result: {
                                    player: 1,
                                },
                                threaten: 1.5,
                            },
                        },
                        fanlianjin: {
                            audio: 'ext:偷剽窃盗/audio:2',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            preHidden: true,
                            filter(event, player) {
                                var num = player.countMark('ls_lianjin_mark');
                                return num > 0;
                            },
                            content() {
                                var tiao = ['', '', '', '', '', '', '', ''];
                                var jian = player.countMark('ls_lianjin_mark');
                                ('step 0');
                                player.loseMaxHp(jian);
                                player.removeMark('ls_lianjin_mark', jian);
                                event.videoId = lib.status.videoId++;
                                var func = function (player, id) {
                                    var list = ['选项一:摸', '选项二:弃置', '选项三:伤害', '选项四:准备阶段', '选项五:出牌阶段', '选项六:结束阶段', '选项七:使用', '选项八:其他角色'];
                                    var choiceList = ui.create.dialog('考古:请选择' + jian + '项');
                                    choiceList.videoId = id;
                                    for (var i = 0; i < list.length; i++) {
                                        var str = '<div class="popup text" style="width:calc(100% - 10px);display:inline-block">';
                                        str += list[i];
                                        str += '</div>';
                                        var next = choiceList.add(str);
                                        next.firstChild.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                                        next.firstChild.link = i;
                                        Object.setPrototypeOf(next, lib.element.Button.prototype); //QQQ
                                        choiceList.buttons.add(next.firstChild);
                                    }
                                    return choiceList;
                                };
                                if (player.isOnline2()) {
                                    player.send(func, player, event.videoId);
                                }
                                event.dialog = func(player, event.videoId);
                                if (player != game.me || _status.auto) {
                                    event.dialog.style.display = 'none';
                                }
                                var next = player.chooseButton();
                                next.set('dialog', event.videoId);
                                next.set('forced', true);
                                next.set('ai', function (button) {
                                    var player = _status.event.player;
                                    switch (button.link) {
                                        case 0:
                                            return 2;
                                            break;
                                        case 1:
                                            return (
                                                Math.max(
                                                    0.5,
                                                    player.countCards('hs', function (card) {
                                                        return card.name == 'sha' && player.hasValueTarget(card);
                                                    }) - player.getCardUsable({ name: 'sha' })
                                                ) +
                                                Math.max.apply(
                                                    Math,
                                                    game
                                                        .filterPlayer(function (current) {
                                                            return current != player;
                                                        })
                                                        .map(function (target) {
                                                            return get.damageEffect(target, player, player);
                                                        })
                                                )
                                            );
                                            break;
                                        case 2:
                                            return player.needsToDiscard() / 4;
                                            break;
                                        case 3:
                                            var num = 0;
                                            return (
                                                0.8 *
                                                Math.max.apply(
                                                    Math,
                                                    game
                                                        .filterPlayer(function (current) {
                                                            return current != player && current.hasCard((card) => lib.filter.canBeGained(card, current, player), 'hej');
                                                        })
                                                        .map(function (target) {
                                                            return get.effect(target, { name: 'shunshou_copy' }, player, player);
                                                        })
                                                )
                                            );
                                            break;
                                        case 4:
                                            var num = 0;
                                            game.countPlayer(function (current) {
                                                if (current != player && get.attitude(player, current) > 0) {
                                                    var num2 = Math.min(5, current.maxHp) - current.countCards('h');
                                                    if (num2 > num) num = num2;
                                                }
                                            });
                                            return num * 0.8;
                                            break;
                                    }
                                });
                                next.set('selectButton', jian);
                                ('step 1');
                                if (player.isOnline2()) {
                                    player.send('closeDialog', event.videoId);
                                }
                                event.dialog.close();
                                result.links.sort();
                                for (var i of result.links) game.log(player, '选择了', '#g【考古】', '的', '#y选项' + get.cnNumber(1 + i, true));
                                event.links = result.links;
                                if (result.links.includes(0)) tiao[0] = '';
                                ('step 2');
                                if (event.links.includes(0)) tiao[0] = '摸';
                                if (event.links.includes(1)) tiao[1] = '弃置';
                                if (event.links.includes(2)) tiao[2] = '伤害';
                                if (event.links.includes(3)) tiao[3] = '准备阶段';
                                if (event.links.includes(4)) tiao[4] = '出牌阶段';
                                if (event.links.includes(5)) tiao[5] = '结束阶段';
                                if (event.links.includes(6)) tiao[6] = '使用';
                                if (event.links.includes(7)) tiao[7] = '其他角色';
                                var list,
                                    skills = [];
                                if (get.mode() == 'guozhan') {
                                    list = [];
                                    for (var i in lib.characterPack.mode_guozhan) list.push(i);
                                } else if (_status.connectMode) list = get.charactersOL();
                                else {
                                    list = [];
                                    for (var i in lib.character) {
                                        if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) continue;
                                        list.push(i);
                                    }
                                }
                                for (var i of list) {
                                    if (i.indexOf('gz_jun') == 0) continue;
                                    for (var j of lib.character[i][3]) {
                                        if (j == 'fanlianjin') continue;
                                        var skill = lib.skill[j];
                                        if (!skill || skill.zhuSkill) continue;
                                        if (skill.init || (skill.ai && (skill.ai.combo || skill.ai.notemp || skill.ai.neg))) continue;
                                        var info = lib.translate[j + '_info'];
                                        if (info && info.includes(tiao[0]) && info.includes(tiao[1]) && info.includes(tiao[2]) && info.includes(tiao[3]) && info.includes(tiao[4]) && info.includes(tiao[5]) && info.includes(tiao[6]) && info.includes(tiao[7])) skills.add(j);
                                    }
                                }
                                player.storage.fanlianjin = skills;
                                ('step 3');
                                var next = player.chooseBool(get.prompt('fanlianjin'), '选择获得一个技能').setHiddenSkill(event.name);
                                if (player.hasSkill('fanlianjin')) next.set('frequentSkill', 'fanlianjin');
                                ('step 4');
                                if (result.bool) {
                                } else event.finish();
                                ('step 5');
                                if (player.isIn()) {
                                    if (!player.storage.fanlianjin) lib.skill.fanlianjin.initList(player);
                                    var list = player.storage.fanlianjin.randomGets(3);
                                    if (!list.length) {
                                        event.finish();
                                        return;
                                    }
                                    event.videoId = lib.status.videoId++;
                                    var func = function (skills, id) {
                                        var dialog = ui.create.dialog('forcebutton');
                                        dialog.videoId = id;
                                        dialog.add('炼金:选择一个技能');
                                        for (var i = 0; i < skills.length; i++) {
                                            dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【' + get.translation(skills[i]) + '】</div><div>' + lib.translate[skills[i] + '_info'] + '</div></div>');
                                        }
                                        dialog.addText(' <br> ');
                                    };
                                    if (player.isOnline()) player.send(func, list, event.videoId);
                                    else if (player == game.me) func(list, event.videoId);
                                    player.chooseControl(list);
                                } else event.finish();
                                ('step 6');
                                game.broadcastAll('closeDialog', event.videoId);
                                player.addSkill(result.control);
                            },
                        },
                        ls_lianjin: {
                            audio: 'ext:偷剽窃盗/audio:2',
                            derivation: ['ls_longzhou', 'ls_longyan2', 'ls_longwei', 'ls_longlin', 'ls_wuku'],
                            trigger: {
                                player: 'showCharacterAfter',
                            },
                            hiddenSkill: true,
                            forced: true,
                            group: 'fanlianjin',
                            content() {
                                'step 0';
                                var list = [];
                                list.push('选项一');
                                list.push('选项二');
                                list.push('选项三');
                                list.push('cancel2');
                                player
                                    .chooseControl(list)
                                    .set('choiceList', ['回合开始时,你减少一点体力上限,并加一个检索条件', '回合开始时,你减少二点体力上限,并加二个检索条件', '回合开始时,你减少三点体力上限,并加三个检索条件'])
                                    .set('ai', function () {
                                        var lis = ['1', '2', '3'];
                                        var mum = lis.randomGet();
                                        if (mum == '1') return 0;
                                        if (mum == '2') return 1;
                                        return 2;
                                    });
                                ('step 1');
                                event.control = result.control;
                                if (event.control == '选项一') player.addMark('ls_lianjin_mark', 1);
                                ('step 2');
                                if (event.control == '选项二') {
                                    player.addMark('ls_lianjin_mark', 2);
                                    player.addSkill('ls_wuku');
                                }
                                ('step 3');
                                if (event.control == '选项三') {
                                    player.addMark('ls_lianjin_mark', 3);
                                    player.addSkill('ls_wuku');
                                    player.useSkill('ls_long');
                                }
                            },
                            group: 'fanlianjin',
                            subSkill: {
                                mark: {
                                    marktext: '宝',
                                    intro: {
                                        name: '宝物',
                                        content: 'mark',
                                    },
                                },
                            },
                        },
                        ls_long: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var list = [];
                                list.push('邪火');
                                list.push('风暴');
                                list.push('讳言');
                                list.push('梦魇');
                                list.push('无敌');
                                list.push('cancel2');
                                player
                                    .chooseControl(list)
                                    .set('choiceList', ['获得技能邪火', '获得技能风暴', '获得技能讳言', '获得技能梦魇', '获得技能无敌'])
                                    .set('ai', function () {
                                        var lis = ['1', '2', '3', '4', '5'];
                                        var mum = lis.randomGet();
                                        if (mum == '1') return 0;
                                        if (mum == '2') return 1;
                                        if (mum == '3') return 2;
                                        if (mum == '4') return 3;
                                        return 2;
                                    });
                                ('step 1');
                                event.control = result.control;
                                if (event.control == '邪火') player.addSkill('ls_longyan2');
                                ('step 2');
                                if (event.control == '风暴') player.addSkill('ls_longwei');
                                ('step 3');
                                if (event.control == '讳言') player.addSkill('ls_longlin');
                                ('step 4');
                                if (event.control == '梦魇') player.addSkill('ls_longzhou');
                                ('step 5');
                                if (event.control == '无敌') player.addSkill('ls_longpo');
                            },
                            derivation: ['ls_longzhou', 'ls_longyan2', 'ls_longwei', 'ls_longlin', 'ls_longpo'],
                        },
                        ls_longzhou: {
                            audio: 'ext:偷剽窃盗/audio:2',
                            trigger: {
                                global: 'gainBegin',
                            },
                            filter(event, player) {
                                if (event.parent.name != 'draw') return false;
                                if (event.player == player) return false;
                                if (event.getParent(2).name == 'phaseDraw') return event.cards && event.cards.length > 2;
                                else return event.cards && event.cards.length > 1;
                            },
                            check(event, player) {
                                return get.attitude(event.player, player) <= 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.num = 1;
                                if (trigger.getParent(2).name == 'phaseDraw') event.num++;
                                player.chooseBool(get.prompt(event.name), '是否令<span style="color: red">' + get.translation(trigger.player) + '</span>改为摸' + event.num + '张牌？').set('ai', function () {
                                    var player = _status.event.player;
                                    if (get.attitude(player, event.current) <= 0) return true;
                                    return false;
                                });
                                ('step 1');
                                if (result.bool) {
                                    var num = trigger.cards.length - event.num;
                                    trigger.cards = get.cards(event.num);
                                    player.draw(num);
                                    if (num > 1 && player.countCards('he', { type: 'equip' }) > 0) {
                                        player.chooseToDiscard('he', true, function (card, player) {
                                            return get.type(card) == 'equip';
                                        });
                                    }
                                }
                            },
                        },
                        ls_longwei: {
                            audio: 'ext:偷剽窃盗/audio:2',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                var targets = game
                                    .filterPlayer(function (current) {
                                        return current != player;
                                    })
                                    .sortBySeat();
                                for (var i of targets) i.addTempSkill('jupai');
                                var num = player.countCards('he', { type: 'equip' });
                                if (num > 0) {
                                    player.chooseToDiscard('he', true, function (card, player) {
                                        return get.type(card) == 'equip';
                                    });
                                }
                            },
                        },
                        ls_longlin: {
                            audio: 'ext:偷剽窃盗/audio:2',
                            trigger: {
                                player: 'damageBegin4',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.num <= 0) return false;
                                return true;
                            },
                            content() {
                                trigger.num = 1;
                                player.addTempSkill('ls_mianshang');
                                var num = player.countCards('he', { type: 'equip' });
                                if (num > 0) {
                                    player.chooseToDiscard('he', true, function (card, player) {
                                        return get.type(card) == 'equip';
                                    });
                                }
                            },
                        },
                        ls_mianshang: {
                            mark: true,
                            intro: {
                                content: '防止你受到的所有伤害',
                            },
                            trigger: {
                                player: 'damageBegin3',
                            },
                            forced: true,
                            content() {
                                trigger.cancel();
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                nofire: true,
                                nothunder: true,
                                nodamage: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'damage')) return [0, 0];
                                    },
                                },
                            },
                        },
                        ls_longyan2: {
                            audio: 'ext:偷剽窃盗/audio:2',
                            enable: 'phaseUse',
                            filterCard: {
                                type: 'equip',
                            },
                            filter(event, player) {
                                return player.countCards('he', { type: 'equip' }) > 0;
                            },
                            position: 'he',
                            usable: 1,
                            mark: true,
                            check(card) {
                                return 15 - get.value(card);
                            },
                            filterTarget: true,
                            content() {
                                target.damage();
                                target.addSkill('ls_zhongshang');
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target: -1,
                                },
                                threaten: 2,
                                expose: 0.2,
                            },
                        },
                        ls_zhongshang: {
                            trigger: {
                                player: 'recoverBegin',
                            },
                            mark: true,
                            marktext: '伤',
                            intro: {
                                name: '重伤状态',
                                content: '该角色下次受到的效果时,效果为0,并失去该状态',
                            },
                            forced: true,
                            content() {
                                trigger.num -= 100;
                                player.removeSkill('ls_zhongshang');
                            },
                        },
                        ls_longpo: {
                            audio: 'ext:偷剽窃盗/audio:2',
                            forced: true,
                            trigger: {
                                player: 'phaseJieshu',
                            },
                            filter(event, player) {
                                return player.countCards('he', { type: 'equip' }) > 0;
                            },
                            content() {
                                player.chooseToDiscard('he', true, function (card, player) {
                                    return get.type(card) == 'equip';
                                });
                            },
                            group: ['ls_longpo_1', 'ls_longpo_2', 'ls_longpo_3', 'ls_longpo_fanmian'],
                            subSkill: {
                                1: {
                                    audio: 'ext:偷剽窃盗/audio:2',
                                    trigger: {
                                        player: 'linkBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return !player.isLinked();
                                    },
                                    content() {
                                        trigger.cancel();
                                    },
                                },
                                2: {
                                    mod: {
                                        targetEnabled(card, player, target) {
                                            if (get.type(card) == 'delay') return false;
                                        },
                                    },
                                },
                                3: {
                                    ai: {
                                        noCompareTarget: true,
                                    },
                                },
                                fanmian: {
                                    trigger: {
                                        player: 'turnOverBefore',
                                    },
                                    forced: true,
                                    equipSkill: true,
                                    content() {
                                        trigger.cancel();
                                    },
                                },
                            },
                        },
                        jupai1: {
                            init(player, skill) {
                                player.addSkillBlocker(skill);
                            },
                            onremove(player, skill) {
                                player.removeSkillBlocker(skill);
                            },
                            charlotte: true,
                            skillBlocker(skill, player) {
                                return skill != 'jupai1';
                            },
                            mark: true,
                            intro: {
                                content(storage, player, skill) {
                                    var str = '<li>锁定技,你的其他技能全部失效';
                                    var list = player.getSkills(null, false, false).filter(function (i) {
                                        return lib.skill.jupai1.skillBlocker(i, player);
                                    });
                                    if (list.length) str += '<br><li>失效技能:' + get.translation(list);
                                    return str;
                                },
                            },
                        },
                        ls_fatiao: {
                            audio: 'ext:偷剽窃盗/audio:2',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            content() {
                                'step 0';
                                if (!player.storage.ls_fatiao) player.storage.ls_fatiao = [];
                                if (!_status.characterskill) {
                                    _status.characterskill = [];
                                    for (var i in lib.character) {
                                        if (Array.isArray(lib.character[i][3])) _status.characterskill.addArray(lib.character[i][3]);
                                    }
                                }
                                event.num = player.storage.ls_fatiao.length;
                                var num1 = 10 * (event.num + 1);
                                //if(num1>100) num1=100;
                                var num2 = num1 + 10;
                                var list = [];
                                for (var i in lib.skill) {
                                    if (!_status.characterskill.includes(i)) continue;
                                    if (lib.skill[i].nobracket == true) continue;
                                    if (!get.translation(i, 'info') || get.translation(i + '_info').length == 0) continue;
                                    var leng = get.translation(i + '_info').replace(new RegExp('<(\S*?)[^>]*>.*?|<.*? />', 'gi'), '').length;
                                    if (leng >= num1 && leng <= num2) list.add(i);
                                }
                                list.remove(player.getSkills());
                                list = list.randomGets(3);
                                if (list.length == 0) return player.draw();
                                event.skillai = function () {
                                    return get.max(list, get.skillRank, 'item');
                                };
                                if (event.isMine()) {
                                    var dialog = ui.create.dialog('forcebutton');
                                    dialog.add('发条助手:选择获得一项技能');
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
                                            var item = dialog.add('<div class="popup pointerdiv" style="width:100%;display:inline-block"><div class="skill">【' + translation + '】</div><div>' + lib.translate[list[i] + '_info'] + '</div></div>');
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
                                player.storage.ls_fatiao.add(link);
                                if (player.storage.ls_fatiao.length >= 4) {
                                    var skill = player.storage.ls_fatiao.slice(player.storage.ls_fatiao.length - 4);
                                    player.removeSkill(skill[0]);
                                }
                                player.addSkillLog(link);
                                player.popup(link);
                                player.flashAvatar('ymhaoshouqiongjing', link);
                            },
                            group: 'ls_fatiao_mopai',
                            subSkill: {
                                mopai: {
                                    trigger: {
                                        player: 'phaseUseBegin',
                                    },
                                    forced: true,
                                    content() {
                                        var num = player.phaseNumber;
                                        if (num % 3 == 0) {
                                            player.recover();
                                        }
                                        if (num % 7 == 0) {
                                            player.gainMaxHp();
                                        }
                                    },
                                },
                            },
                        },
                        ls_hundun: {
                            audio: 'ext:偷剽窃盗/audio:2',
                            limited: true,
                            enable: 'chooseToUse',
                            init(player) {
                                player.storage.fuli = false;
                            },
                            mark: true,
                            filter(event, player) {
                                if (event.type != 'dying') return false;
                                if (player != event.dying) return false;
                                if (player.storage.fuli) return false;
                                return true;
                            },
                            content() {
                                player.awakenSkill('ls_hundun');
                                var m = player.name;
                                player.init(m);
                                player.discard(player.getCards('hej'));
                                player.draw(4);
                            },
                            mark: true,
                            ai: {
                                save: true,
                                skillTagFilter(player, arg, target) {
                                    return player == target && player.storage.fuli != true;
                                },
                                result: {
                                    player: 10,
                                },
                                threaten(player, target) {
                                    if (!target.storage.fuli) return 0.9;
                                },
                            },
                            intro: {
                                content: 'limited',
                            },
                        },
                        lsyinka: {
                            audio: 'ext:偷剽窃盗/audio:2',
                            enable: 'phaseUse',
                            position: 'he',
                            filterCard: true,
                            selectCard: [1, 3],
                            limited: true,
                            check(card) {
                                return 6 - get.value(card);
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('lsyinka');
                                var num = cards.length;
                                var cards2 = [];
                                while (cards2.length < num) {
                                    var card = get.cardPile(function (card) {
                                        return get.type(card, 'trick') == 'trick' && !cards2.includes(card);
                                    });
                                    if (card) cards2.push(card);
                                    else break;
                                }
                                if (cards2.length) player.gain(cards2, 'gain2');
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player: 1,
                                },
                                threaten: 1.5,
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        rejinhua: {
                            audio: 6,
                            trigger: { target: 'useCardToBegin' },
                            forced: true,
                            derivation: ['lese'],
                            filter(event, player) {
                                return player == event.player && get.type(event.card, 'trick') == 'trick';
                            },
                            content() {
                                'step 0';
                                var list = get.gainableSkills();
                                list.remove(player.getSkills());
                                list = list.randomGets(5);
                                list[5] = 'lese';
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
                                    for (var i = 0; i < list.length; i++) {
                                        if (lib.translate[list[i] + '_info']) {
                                            var translation = get.translation(list[i]);
                                            if (translation[0] == '新' && translation.length == 5) {
                                                translation = translation.slice(1, 5);
                                            } else {
                                                translation = translation.slice(0, 4);
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
                                if (!player.hasSkill(link)) {
                                    player.addSkill(link, true);
                                    player.popup(link);
                                    game.log(player, '获得了技能', '【' + get.translation(link) + '】');
                                }
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (get.type(card, 'trick') == 'trick' && player == target) return [1, 1];
                                    },
                                },
                            },
                        },
                        lese: {},
                        remaoxian: {
                            audio: 'ext:偷剽窃盗/audio:2',
                            enable: 'phaseUse',
                            usable: 2,
                            delay: false,
                            content() {
                                'step 0';
                                var list = get.gainableSkills();
                                var skills = [];
                                for (var j of list) {
                                    var skill = lib.skill[j];
                                    if (!skill || skill.zhuSkill) continue;
                                    if (skill.init || (skill.ai && (skill.ai.combo || skill.ai.notemp || skill.ai.neg))) continue;
                                    var info = lib.translate[j + '_info'];
                                    if (info && !info.forced && (info.includes('出牌阶段限一次') || info.includes('出牌阶段,'))) skills.add(j);
                                }
                                if (player.hasSkill('remaoxian_1')) list = list.randomGets(5);
                                else list = skills.randomGets(5);
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
                                    for (var i = 0; i < list.length; i++) {
                                        if (lib.translate[list[i] + '_info']) {
                                            var translation = get.translation(list[i]);
                                            if (translation[0] == '新' && translation.length == 3) {
                                                translation = translation.slice(1, 3);
                                            } else {
                                                translation = translation.slice(0, 4);
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
                                player.addAdditionalSkill('remaoxian', link);
                                player.popup(link);
                                game.log(player, '获得了技能', '【' + get.translation(link) + '】');
                                player.checkMarks();
                                player.markSkill('remaoxian');
                                player.addTempSkill('remaoxian_1');
                            },
                            intro: {
                                content(storage, player) {
                                    return '当前技能:' + get.translation(player.additionalSkills.remaoxian);
                                },
                            },
                            subSkill: {
                                1: {},
                            },
                            ai: {
                                order: 11,
                                result: {
                                    player(player) {
                                        if (player.getStat().skill.remaoxian) return 0;
                                        return 1;
                                    },
                                },
                            },
                        },
                        ls_xiuzheng: {
                            trigger: {
                                player: 'phaseUseEnd',
                            },
                            limited: true,
                            content() {
                                'step 0';
                                var mum = player.additionalSkills.remaoxian;
                                player.awakenSkill('ls_xiuzheng');
                                player.removeSkill('remaoxian');
                                player.addSkill(mum);
                                ('step 1');
                                player.addSkill('remaoxian');
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        qianxingba: {
                            initList(player) {
                                var list,
                                    skills = [];
                                if (get.mode() == 'guozhan') {
                                    list = [];
                                    for (var i in lib.characterPack.mode_guozhan) list.push(i);
                                } else if (_status.connectMode) list = get.charactersOL();
                                else {
                                    list = [];
                                    for (var i in lib.character) {
                                        if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) continue;
                                        list.push(i);
                                    }
                                }
                                for (var i of list) {
                                    if (i.indexOf('gz_jun') == 0) continue;
                                    for (var j of lib.character[i][3]) {
                                        var skill = lib.skill[j];
                                        var info = get.info(j);
                                        if (info && info.zhuanhuanji) skills.add(j);
                                    }
                                }
                                player.storage.qianxingba = skills;
                            },
                            trigger: {
                                player: 'showCharacterAfter',
                            },
                            hiddenSkill: true,
                            forced: true,
                            content() {
                                'step 0';
                                var next = player.chooseBool(get.prompt('qianxingba'), '选择获得一个技能').setHiddenSkill(event.name);
                                if (player.hasSkill('qianxingba')) next.set('frequentSkill', 'qianxingba');
                                ('step 1');
                                if (result.bool) {
                                } else event.finish();
                                ('step 2');
                                if (player.isIn()) {
                                    if (!player.storage.qianxingba) lib.skill.qianxingba.initList(player);
                                    var list = player.storage.qianxingba.randomGets(3);
                                    if (!list.length) {
                                        event.finish();
                                        return;
                                    }
                                    event.videoId = lib.status.videoId++;
                                    var func = function (skills, id) {
                                        var dialog = ui.create.dialog('forcebutton');
                                        dialog.videoId = id;
                                        dialog.add('凡人:选择一个技能');
                                        for (var i = 0; i < skills.length; i++) {
                                            dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【' + get.translation(skills[i]) + '】</div><div>' + lib.translate[skills[i] + '_info'] + '</div></div>');
                                        }
                                        dialog.addText(' <br> ');
                                    };
                                    if (player.isOnline()) player.send(func, list, event.videoId);
                                    else if (player == game.me) func(list, event.videoId);
                                    player.chooseControl(list);
                                } else event.finish();
                                ('step 3');
                                game.broadcastAll('closeDialog', event.videoId);
                                player.addSkill(result.control);
                            },
                        },
                        ls_qiji: {
                            dutySkill: true,
                            forced: true,
                            group: ['ls_qiji_achieve', 'ls_qiji_fail', 'ls_qiji_pindiana'],
                            subSkill: {
                                pindiana: {
                                    audio: 'ext:偷剽窃盗/audio:2',
                                    enable: 'phaseUse',
                                    usable: 1,
                                    mark: true,
                                    filterTarget(card, player, target) {
                                        return target != player;
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseToDuiben(target);
                                        ('step 1');
                                        if (result.bool) event.goto(3);
                                        else {
                                            if (result.player == 'db_def1') {
                                                if (player.canCompare(target)) player.chooseToCompare(target);
                                                else event.goto(3);
                                            } else event.goto(7);
                                        }
                                        ('step 2');
                                        if (result.bool) event.goto(3);
                                        else event.finish();
                                        ('step 3');
                                        var list = [];
                                        list.push('选项一');
                                        list.push('选项二');
                                        list.push('背水!');
                                        list.push('cancel2');
                                        player
                                            .chooseControl(list)
                                            .set('choiceList', ['获得一张智囊,并将牌堆顶的两张牌置入仁库', '对面受到一点伤害,并将牌堆顶的两张牌置入仁库', '背水!减1点体力上限并执行所有选项'])
                                            .set('ai', function () {
                                                if (target.hp < 3) return 1;
                                                return 0;
                                            });
                                        ('step 4');
                                        event.control = result.control;
                                        if (event.control == '背水!') player.loseMaxHp();
                                        ('step 5');
                                        if (event.control == '选项二' || event.control == '背水!') {
                                            target.damage();
                                            game.cardsGotoSpecial(get.cards(2), 'toRenku');
                                        }
                                        ('step 6');
                                        if (event.control == '选项一' || event.control == '背水!') {
                                            game.cardsGotoSpecial(get.cards(2), 'toRenku');
                                            event.goto(10);
                                        } else event.finish();
                                        ('step 7');
                                        player.judge(function (card) {
                                            if (get.color(card) == 'red') return -2;
                                            return 2;
                                        }).judge2 = function (result) {
                                            return result.bool;
                                        };
                                        ('step 8');
                                        if (result.judge == 2) {
                                            event.goto(3);
                                        }
                                        ('step 9');
                                        event.finish();
                                        ('step 10');
                                        var list = get.zhinangs();
                                        player.chooseButton(['是否获得一张智囊？', [list, 'vcard']]).set('ai', function (card) {
                                            return (Math.random() + 0.5) * get.value({ name: card.link[2] }, _status.event.player);
                                        });
                                        ('step 11');
                                        if (result.bool) {
                                            var card = get.cardPile(function (card) {
                                                return card.name == result.links[0][2];
                                            });
                                            if (card) player.gain(card, 'gain2');
                                        }
                                    },
                                    ai: {
                                        order: 9,
                                        result: {
                                            target(player, target) {
                                                if (
                                                    player.countCards('hs', function (card) {
                                                        return get.tag(card, 'damage') > 0 && player.canUse(card, target, null, true) && get.effect(target, card, player, player) > 0 && player.hasValueTarget(card, null, true);
                                                    }) > 0
                                                )
                                                    return -3;
                                                return -1;
                                            },
                                        },
                                    },
                                },
                                achieve: {
                                    trigger: { player: 'phaseUseBegin' },
                                    forced: true,
                                    filter(event, player) {
                                        return _status.renku.length >= 6;
                                    },
                                    process(skills, name) {
                                        var cardname = 'ls_qiji_achieve_' + name;
                                        lib.translate[cardname] = lib.translate[name];
                                        lib.translate[cardname + '_info'] = '出牌阶段对自己使用,使用' + get.translation(name) + '的觉醒技';
                                        lib.translate[cardname + '_append'] = '';
                                        for (var i = 0; i < skills.length; i++) {
                                            lib.translate[cardname + '_append'] += '<div class="skill">【' + lib.translate[skills[i]] + '】</div><div>' + get.skillInfoTranslation(skills[i]) + '</div>';
                                            if (i < skills.length) {
                                                lib.translate[cardname + '_append'] += '<br>';
                                            }
                                        }
                                        lib.card[cardname] = lib.card[cardname] || {
                                            enable: true,
                                            type: 'character',
                                            image: 'character:' + name,
                                            fullimage: true,
                                            skills: skills,
                                            derivation: 'ls_xiaoyuan',
                                            filterTarget(card, player, target) {
                                                return player == target;
                                            },
                                            selectTarget: -1,
                                            content() {
                                                'step 0';
                                                var list = lib.card[card.name].skills;
                                                var skill = list[0];
                                                player.popup(skill);
                                                target.$gain2(card);
                                                target.useSkill(skill);
                                                game.log(target, '使用技能', '【' + get.translation(skill) + '】');
                                            },
                                            ai: {
                                                order() {
                                                    return 9;
                                                },
                                                result: {
                                                    target(player, target) {
                                                        return 1;
                                                    },
                                                },
                                            },
                                        };
                                    },
                                    content() {
                                        'step 0';
                                        game.log(player, '成功完成使命');
                                        player.awakenSkill('ls_qiji');
                                        num1 = 0;
                                        ('step 1');
                                        var skills = [];
                                        var list = [];
                                        for (var i in lib.character) {
                                            if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) continue;
                                            var skillsx = lib.character[i][3].slice(0);
                                            for (var j = 0; j < skillsx.length; j++) {
                                                var info = get.info(skillsx[j]);
                                                if (j == 'zili' || j == 'xinzili' || j == 'zaoxian' || j == 'olzaoxian' || j == 'zuling' || j == 'hongju' || j == 'rehongju' || j == 'baijia' || j == 'zhiri') continue;
                                                if (info && info.juexingji) list.add(i);
                                            }
                                        }
                                        var name = list.randomGet();
                                        for (var j of lib.character[name][3]) {
                                            var skill = lib.skill[j];
                                            var info = get.info(j);
                                            if (info && info.juexingji) skills.add(j);
                                        }
                                        game.addVideo('skill', player, ['ls_qiji_achieve', [skills, name]]);
                                        lib.skill.ls_qiji_achieve.process(skills, name);
                                        player.gain(game.createCard('ls_qiji_achieve_' + name), 'gain2');
                                        num1 += 1;
                                        ('step 2');
                                        if (num1 < 2) event.goto(1);
                                    },
                                },
                                fail: {
                                    trigger: {
                                        player: 'dying',
                                    },
                                    forced: true,
                                    content() {
                                        game.log(player, '使命失败');
                                        player.awakenSkill('ls_qiji');
                                    },
                                },
                            },
                        },
                        duoji1: {
                            audio: 'ext:偷剽窃盗/audio:2',
                            enable: 'phaseUse',
                            limited: true,
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('duoji1');
                                var list = target.getStockSkills(true, true).filter(function (skill) {
                                    var info = get.info(skill);
                                    return info;
                                });
                                if (list.length == 1) event._result = { control: list[0] };
                                else
                                    player
                                        .chooseControl(list)
                                        .set('prompt', '选择令' + get.translation(player) + '获得一个技能')
                                        .set('forceDie', true)
                                        .set('ai', function () {
                                            return list.randomGet();
                                        });
                                ('step 1');
                                player.addSkillLog(result.control);
                            },
                            ai: {
                                order: 8,
                                result: {
                                    target(player, target) {
                                        return 1 / (get.rank(target, true) + 1);
                                    },
                                },
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        ls_longhun: {
                            filterTarget: true,
                            content() {
                                'step 0';
                                player.awakenSkill('ls_longhun');
                                var list = target.getSkills(null, false, false).filter(function (skill) {
                                    var info = lib.skill[skill];
                                    return info && info.juexingji && !target.awakenedSkills.includes(skill);
                                });
                                if (list.length) {
                                    if (list.length == 1) event._result = { control: list[0] };
                                    else player.chooseControl(list).set('prompt', '选择一个觉醒技,令' + get.translation(target) + '可无视条件发动该技能');
                                } else {
                                    event.goto(2);
                                }
                                ('step 1');
                                target.storage.ls_longhun = result.control;
                                target.markSkill('ls_longhun');
                                var info = lib.skill[result.control];
                                if (info.filter && !info.charlotte && !info.longhun1_filter) {
                                    info.longhun1_filter = info.filter;
                                    info.filter = function (event, player) {
                                        if (player.storage.ls_longhun) return true;
                                        return this.longhun1_filter.apply(this, arguments);
                                    };
                                }
                                ('step 2');
                                player.phase('nodelay');
                            },
                            enable: 'phaseUse',
                            limited: true,
                            mark: true,
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                            ai: {
                                order: 0.1,
                                expose: 0.2,
                                result: {
                                    target(player, target) {
                                        if (
                                            target == player &&
                                            game.hasPlayer(function (current) {
                                                return current.getAllHistory('damage').length == 0;
                                            })
                                        )
                                            return 4;
                                        var list = target.getSkills(null, false, false).filter(function (skill) {
                                            var info = lib.skill[skill];
                                            return info && info.juexingji && !target.awakenedSkills.includes(skill);
                                        });
                                        if (list.length || target.hasJudge('lebu') || target.hasSkillTag('nogain')) return 0;
                                        return 4;
                                    },
                                },
                            },
                        },
                        ls_longyan: {
                            juexingji: true,
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                return player.hp == player.maxHp && player.getEquip(1) && player.getEquip(2) && player.getEquip(3) && player.getEquip(4);
                            },
                            forced: true,
                            content() {
                                player.draw(2);
                                game.log(player, '获得了技能', '#g【武神】和【红颜】和【苦肉】');
                                player.awakenSkill(event.name);
                                var list = ['hongyan', 'wushen', 'kurou'];
                                player.addSkill(list);
                            },
                        },
                        ls_longyin: {
                            audio: 3,
                        },
                        ls_longqu: {
                            audio: 'ext:偷剽窃盗/audio:2',
                            juexingji: true,
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                return player.hp <= 1 && player.maxHp <= player.countCards('h') && player.maxHp >= game.countGroup();
                            },
                            forced: true,
                            content() {
                                player.recover();
                                game.log(player, '获得了技能', '#g【恢拓】和【酒诗】和【不屈】');
                                player.awakenSkill(event.name);
                                var list = ['huituo', 'jiushi', 'buqu'];
                                player.addSkill(list);
                            },
                        },
                        ls_jinhua: {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            limited: true,
                            content() {
                                'step 0';
                                player.awakenSkill('ls_jinhua');
                                var list = get.gainableSkills();
                                list.remove(player.getSkills());
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
                                    for (var i = 0; i < list.length; i++) {
                                        if (lib.translate[list[i] + '_info']) {
                                            var translation = get.translation(list[i]);
                                            if (translation[0] == '新' && translation.length == 5) {
                                                translation = translation.slice(1, 5);
                                            } else {
                                                translation = translation.slice(0, 4);
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
                                player.addSkill(link, true);
                                player.popup(link);
                                game.log(player, '获得了技能', '【' + get.translation(link) + '】');
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        ls_zhaohuan: {
                            audio: 'ext:偷剽窃盗/audio:2',
                            enable: 'phaseUse',
                            filterCard: true,
                            usable: 1,
                            check(card) {
                                return 20 - get.value(card);
                            },
                            int() {
                                player.storage.ls_zhaohuan = 1;
                            },
                            content() {
                                'step 0';
                                if (player.storage.ls_zhaohuan != 0) event.goto(1);
                                else event.goto(2);
                                ('step 1');
                                var fellow = game.addFellow(0, 'ls_xiaoer');
                                fellow.style.left = 'calc(80%)';
                                fellow.style.top = 'calc(50%)';
                                fellow.classList.add('minskin');
                                fellow.side = player.side;
                                fellow.identity = player.identity;
                                if (fellow.identity == 'zhu') fellow.identity = 'zhong';
                                fellow.node.identity.dataset.color = fellow.identity;
                                player.storage.ls_xiaoer = fellow;
                                fellow.storage.ls_xiaoer = player;
                                player.storage.ls_zhaohuan = 0;
                                event.finish();
                                ('step 2');
                                var list1 = [];
                                var target = player.storage.ls_xiaoer;
                                if (!target.hasSkill('ls_xixue')) list1.push('吸血:锁定技,你造成伤害时,使召唤师回复等量的体力');
                                if (!target.hasSkill('ls_xieyang')) list1.push('泻阳:锁定技,你于弃牌阶段弃牌后,使召唤师获得其中至多两张牌');
                                if (!target.hasSkill('ls_zihui')) list1.push('尸爆:锁定技,你死亡时,对所有非召唤师其他角色造成1点伤害');
                                if (!target.hasSkill('ls_kuangbao')) list1.push('狂暴:锁定技,你的杀结算两次,你的杀的伤害结算两次.回合结束时,你减少一点体力上限');
                                if (list1.length) player.chooseControl('cancel2').set('choiceList', list1);
                                ('step 3');
                                if (result.control != 'cancel2') {
                                    var list1 = [];
                                    var target = player.storage.ls_xiaoer;
                                    if (!target.hasSkill('ls_xixue')) list1.push('ls_xixue');
                                    if (!target.hasSkill('ls_xieyang')) list1.push('ls_xieyang');
                                    if (!target.hasSkill('ls_zihui')) list1.push('ls_zihui');
                                    if (!target.hasSkill('ls_kuangbao')) list1.push('ls_kuangbao');
                                    if (result.index == 0) target.addSkill(list1[0]);
                                    if (result.index == 1) target.addSkill(list1[1]);
                                    if (result.index == 2) target.addSkill(list1[2]);
                                    if (result.index == 3) target.addSkill(list1[3]);
                                }
                                ('step 4');
                                var target = player.storage.ls_xiaoer;
                                var list = get.gainableSkills();
                                list.remove(target.getSkills());
                                skill = list.randomGets(3);
                                event.videoId = lib.status.videoId++;
                                func = function (skills, id) {
                                    var dialog = ui.create.dialog('forcebutton');
                                    dialog.videoId = id;
                                    dialog.add('选择一个技能');
                                    for (var i = 0; i < skills.length; i++) {
                                        dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【' + get.translation(skills[i]) + '】</div><div>' + lib.translate[skills[i] + '_info'] + '</div></div>');
                                    }
                                    dialog.addText(' <br> ');
                                };
                                func(skill, event.videoId);
                                player.chooseControl(skill, 'cancel2');
                                ('step 5');
                                game.broadcastAll('closeDialog', event.videoId);
                                if (result.control != 'cancel2') {
                                    var link = result.control;
                                    var target = player.storage.ls_xiaoer;
                                    target.addSkill(link);
                                    target.popup(link);
                                    game.log(target, '获得了技能', '【' + get.translation(link) + '】');
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
                        ls_xixue: {
                            trigger: {
                                source: 'damageSource',
                            },
                            forced: true,
                            filter(event, player) {
                                if (!player.storage.ls_xiaoer || player.storage.ls_xiaoer.isDead()) return false;
                                return event.num;
                            },
                            content() {
                                player.storage.ls_xiaoer.recover(trigger.num);
                            },
                        },
                        ls_zihui: {
                            audio: 'ext:偷剽窃盗/audio:2',
                            trigger: {
                                player: 'dieBegin',
                            },
                            _priority: 2,
                            forced: true,
                            selectCard: -1,
                            selectTarget: -1,
                            content() {
                                'step 0';
                                event.targets = game.filterPlayer();
                                event.targets.remove(player);
                                ('step 1');
                                if (event.targets.length) {
                                    event.targets.shift().damage();
                                    event.redo();
                                }
                            },
                        },
                        ls_xieyang: {
                            trigger: {
                                player: 'phaseDiscardEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                if (!player.storage.ls_xiaoer || player.storage.ls_xiaoer.isDead()) return false;
                                return event.player.hasHistory('lose', function (evt) {
                                    return evt.type == 'discard' && evt.cards2.filterInD('d').length && evt.getParent('phaseDiscard') == event;
                                });
                            },
                            content() {
                                'step 0';
                                var cards = [];
                                trigger.player.getHistory('lose', function (evt) {
                                    if (evt.type == 'discard' && evt.getParent('phaseDiscard') == trigger) cards.addArray(evt.cards2.filterInD('d'));
                                });
                                event.target = player.storage.ls_xiaoer;
                                event.target.chooseButton(['泻阳:是否获得其中至多两张牌？', cards], [1, 2]);
                                ('step 1');
                                if (result.links?.length) {
                                    event.target.gain(result.links, 'gain2');
                                }
                            },
                        },
                        ls_kuangbao: {
                            audio: 'ext:偷剽窃盗/audio:2',
                            trigger: {
                                player: 'useCardToTargeted',
                            },
                            forced: true,
                            shaRelated: true,
                            filter(event, player) {
                                return event.isFirstTarget && event.card.name == 'sha';
                            },
                            content() {
                                trigger.parent.targets = trigger.parent.targets.concat(trigger.targets);
                                trigger.parent.triggeredTargets4 = trigger.parent.triggeredTargets4.concat(trigger.targets);
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (player._jsrgzhenqiao_aiChecking) return;
                                        if (target == player && get.subtype(card) == 'equip1' && !player.getEquip(1)) {
                                            player._jsrgzhenqiao_aiChecking = true;
                                            var eff = get.effect(target, card, player, player);
                                            delete player._jsrgzhenqiao_aiChecking;
                                            if (eff < 3) return 'zerotarget';
                                        }
                                    },
                                },
                            },
                            group: ['ls_kuangbao_1', 'ls_kuangbao_2'],
                            subSkill: {
                                2: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    content() {
                                        player.loseMaxHp(1);
                                    },
                                },
                                1: {
                                    trigger: {
                                        source: 'damageAfter',
                                    },
                                    forced: true,
                                    logTarget: 'player',
                                    filter(event, player) {
                                        var target = event.player;
                                        return event.player.isAlive() && event.parent.name == 'sha';
                                    },
                                    content() {
                                        trigger.player.damage(player, { name: 'sha' });
                                    },
                                },
                            },
                        },
                        ls_emo: {
                            trigger: {
                                player: 'dieBegin',
                            },
                            forced: true,
                            _priority: 1,
                            content() {
                                player.delete();
                                var target = player.storage.ls_xiaoer;
                                target.storage.ls_zhaohuan = 1;
                            },
                            ai: {
                                threaten(player, target) {
                                    return 0.5;
                                },
                            },
                            group: ['ls_emo_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        target: 'useCardToTargeted',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player != player && event.card && event.card.name != 'tao';
                                    },
                                    content() {
                                        'step 0';
                                        var type1 = get.type(trigger.card, 'trick');
                                        player.judge(function (card) {
                                            if (get.type(card, 'trick') == type1) return 2;
                                            else return -0.5;
                                        }).judge2 = function (result) {
                                            return result.bool;
                                        };
                                        ('step 1');
                                        if (result.bool) {
                                            trigger.parent.excluded.add(player);
                                        }
                                    },
                                },
                            },
                        },
                        ls_konghou1: {
                            audio: 'ls_konghou',
                            trigger: {
                                player: 'damageEnd',
                            },
                            derivation: ['ls_konghou'],
                            initList(player) {
                                var list,
                                    skills = [];
                                if (get.mode() == 'guozhan') {
                                    list = [];
                                    for (var i in lib.characterPack.mode_guozhan) list.push(i);
                                } else if (_status.connectMode) list = get.charactersOL();
                                else {
                                    list = [];
                                    for (var i in lib.character) {
                                        if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) continue;
                                        list.push(i);
                                    }
                                }
                                for (var i of list) {
                                    if (i.indexOf('gz_jun') == 0) continue;
                                    for (var j of lib.character[i][3]) {
                                        if (j == 'ls_konghou1') continue;
                                        var skill = lib.skill[j];
                                        if (!skill || skill.zhuSkill) continue;
                                        if (skill.init || (skill.ai && (skill.ai.combo || skill.ai.notemp || skill.ai.neg))) continue;
                                        var info = lib.translate[j + '_info'];
                                        if (info && !info.unique && (info.includes('置于武将牌上') || info.includes('置于你的武将牌上') || info.includes('置于其武将牌上'))) skills.add(j);
                                    }
                                }
                                player.storage.ls_konghou1 = skills;
                            },
                            forced: true,
                            preHidden: true,
                            content() {
                                'step 0';
                                if (!player.storage.ls_konghou1) lib.skill.ls_konghou1.initList(player);
                                if (player.storage.ls_konghou2) player.storage.ls_konghou1.remove(player.storage.ls_konghou2);
                                list = player.storage.ls_konghou1.randomGets(3);
                                ('step 1');
                                player
                                    .chooseControl(list)
                                    .set(
                                        'choiceList',
                                        list.map(function (i) {
                                            return '<div class="skill">【' + get.translation(lib.translate[i + '_ab'] || get.translation(i).slice(0, 2)) + '】</div><div>' + get.skillInfoTranslation(i, player) + '</div>';
                                        })
                                    )
                                    .set('displayIndex', false)
                                    .set('prompt', '箜篌:请选择你要获得的技能')
                                    .set('ai', () => {
                                        var list = _status.event.controls.slice();
                                        return list.sort((a, b) => {
                                            return get.skillRank(b, 'in') - get.skillRank(a, 'in');
                                        })[0];
                                    });
                                ('step 2');
                                if (result.control) {
                                    player.addSkill(result.control);
                                    player.storage.ls_konghou2 = result.control;
                                    player.popup(result.control);
                                    game.log(player, '获得了', '#g【' + get.translation(result.contro) + '】');
                                    if (!player.storage.ls_konghou) player.storage.ls_konghou = 0;
                                    player.storage.ls_konghou += 1;
                                    if (player.storage.ls_konghou > 1) {
                                        player.removeSkill('ls_konghou1');
                                        player.addSkill('ls_konghou');
                                        player.addTempSkill('ls_konghou2');
                                    }
                                }
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
                                        if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
                                        if (get.tag(card, 'damage')) return [1, 0.55];
                                    },
                                },
                            },
                        },
                        ls_konghou2: {},
                        ls_konghou: {
                            audio: 'ext:偷剽窃盗/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.source != undefined && player.countCards('xs') > 0 && !player.hasSkill('ls_konghou2');
                            },
                            check(event, player) {
                                return get.attitude(player, event.source) <= 0;
                            },
                            logTarget: 'source',
                            content() {
                                'step 0';
                                player.chooseButton(['选择一张牌使用之', player.getCards('xs')]).set('ai', function (button) {
                                    var card = button.link;
                                    var val = player.getUseValue(card);
                                    if (val > 0) return val;
                                    return get.value(card);
                                });
                                ('step 1');
                                if (result.bool) {
                                    if (
                                        game.hasPlayer(function (current) {
                                            return player.canUse(result.links[0], current);
                                        })
                                    ) {
                                        player.chooseUseTarget(result.links[0], false);
                                    }
                                }
                                ('step 2');
                                if (trigger.source.countCards('he')) {
                                    player.discardPlayerCard(trigger.source, 'he', true);
                                }
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
                                        if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
                                        if (get.tag(card, 'damage')) return [1, 0.55];
                                    },
                                },
                            },
                        },
                        ls_liangyin: {
                            audio: 'ext:偷剽窃盗/audio:2',
                            trigger: {
                                global: 'gameDrawAfter',
                                player: 'enterGame',
                            },
                            forced: true,
                            content() {
                                var card = game.createCard('muniu');
                                player.equip(card);
                                player.$gain2(card);
                                player.storage.ls_liangyin = card;
                            },
                            group: ['ls_liangyin_1', 'ls_liangyin_2'],
                            subSkill: {
                                2: {
                                    trigger: {
                                        global: ['loseAfter', 'addToExpansionAfter', 'cardsGotoSpecialAfter', 'loseAsyncAfter'],
                                    },
                                    filter(event, player, name) {
                                        if (event.name == 'lose' || event.name == 'loseAsync') return event.getlx !== false && event.toStorage == true;
                                        if (event.name == 'cardGotoSpecial') return !event.notrigger;
                                        return true;
                                    },
                                    forced: true,
                                    content() {
                                        player.draw();
                                    },
                                },
                                1: {
                                    audio: 'ls_liangyin',
                                    enable: 'phaseUse',
                                    usable: 1,
                                    filterTarget: true,
                                    filter(event, player) {
                                        if (player.storage.ls_liangyin) return true;
                                    },
                                    content() {
                                        'step 0';
                                        var card = player.storage.ls_liangyin;
                                        target.equip(card);
                                        player.$give(card, target);
                                        player.line(target, 'green');
                                        ('step 1');
                                        var muniu = target.getEquip(5);
                                        if (muniu.cards == undefined) muniu.cards = [];
                                        var cards = target.getCards('h');
                                        if (cards.length) {
                                            target.loseToSpecial(cards, 'muniu');
                                            for (var i = 0; i < cards.length; i++) {
                                                if (!cards[i].hasGaintag('muniu') || get.position(cards[i]) != 's') {
                                                    muniu.cards.push(cards[i]);
                                                }
                                            }
                                            game.broadcast(
                                                function (muniu, cards) {
                                                    muniu.cards = cards;
                                                },
                                                muniu,
                                                muniu.cards
                                            );
                                        }
                                    },
                                    ai: {
                                        threaten: 1.4,
                                        expose: 0.2,
                                        order: 9,
                                        result: {
                                            target(player, target) {
                                                if (target.hp > target.countCards('h')) return target.countCards('h');
                                                if (target.hp < target.countCards('h')) return -target.countCards('h');
                                                return 0;
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        ls_zhilve: {
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            initList(player) {
                                var list,
                                    list1 = [];
                                if (get.mode() == 'guozhan') {
                                    list = [];
                                    for (var i in lib.characterPack.mode_guozhan) list.push(i);
                                } else if (_status.connectMode) list = get.charactersOL();
                                else {
                                    list = [];
                                    for (var i in lib.character) {
                                        if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) continue;
                                        list.push(i);
                                    }
                                }
                                for (var i of list) {
                                    if (i.indexOf('gz_jun') == 0) continue;
                                    for (var j of lib.character[i][3]) {
                                        if (j == 'ls_konghou1' || j == 'sphantong' || j == 'xunbao' || j == 'xshuangren') continue;
                                        var skill = lib.skill[j];
                                        if (!skill || skill.zhuSkill) continue;
                                        if (skill.init || (skill.ai && (skill.ai.combo || skill.ai.notemp || skill.ai.neg))) continue;
                                        var info = lib.translate[j + '_info'];
                                        if (info && !info.forced && !info.unique && (info.includes('置于武将牌上') || info.includes('置于你的武将牌上')) && info.indexOf('如手牌般') == -1) list1.add(i);
                                    }
                                }
                                player.storage.ls_zhilve = list1;
                            },
                            forced: true,
                            preHidden: true,
                            content() {
                                'step 0';
                                if (!player.storage.ls_zhilve) lib.skill.ls_zhilve.initList(player);
                                list = player.storage.ls_zhilve;
                                var players = game.players.concat(game.dead);
                                for (var i = 0; i < players.length; i++) {
                                    list.remove(players[i].name);
                                    list.remove(players[i].name1);
                                    list.remove(players[i].name2);
                                }
                                list = list.randomGets(3);
                                var skills = [];
                                for (var i of list) {
                                    skills.addArray(
                                        (lib.character[i][3] || []).filter(function (skill) {
                                            return true;
                                        })
                                    );
                                }
                                if (!list.length || !skills.length) {
                                    event.finish();
                                    return;
                                }
                                if (player.isUnderControl()) {
                                    game.swapPlayerAuto(player);
                                }
                                var switchToAuto = function () {
                                    _status.imchoosing = false;
                                    event._result = {
                                        bool: true,
                                        skills: skills.randomGets(2),
                                    };
                                    if (event.dialog) event.dialog.close();
                                    if (event.control) event.control.close();
                                };
                                var chooseButton = function (list, skills) {
                                    var event = _status.event;
                                    if (!event._result) event._result = {};
                                    event._result.skills = [];
                                    var rSkill = event._result.skills;
                                    var dialog = ui.create.dialog('请选择获得至多三个技能', [list, 'character'], 'hidden');
                                    event.dialog = dialog;
                                    var table = document.createElement('div');
                                    table.classList.add('add-setting');
                                    table.style.margin = '0';
                                    table.style.width = '100%';
                                    table.style.position = 'relative';
                                    for (var i = 0; i < skills.length; i++) {
                                        var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                                        td.link = skills[i];
                                        table.appendChild(td);
                                        td.innerHTML = '<span>' + get.translation(skills[i]) + '</span>';
                                        td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                            if (_status.dragged) return;
                                            if (_status.justdragged) return;
                                            _status.tempNoButton = true;
                                            setTimeout(function () {
                                                _status.tempNoButton = false;
                                            }, 500);
                                            var link = this.link;
                                            if (!this.classList.contains('bluebg')) {
                                                if (rSkill.length >= 3) return;
                                                rSkill.add(link);
                                                this.classList.add('bluebg');
                                            } else {
                                                this.classList.remove('bluebg');
                                                rSkill.remove(link);
                                            }
                                        });
                                    }
                                    dialog.content.appendChild(table);
                                    dialog.add('　　');
                                    dialog.open();
                                    event.switchToAuto = function () {
                                        event.dialog.close();
                                        event.control.close();
                                        game.resume();
                                        _status.imchoosing = false;
                                    };
                                    event.control = ui.create.control('ok', function (link) {
                                        event.dialog.close();
                                        event.control.close();
                                        game.resume();
                                        _status.imchoosing = false;
                                    });
                                    for (var i = 0; i < event.dialog.buttons.length; i++) {
                                        event.dialog.buttons[i].classList.add('selectable');
                                    }
                                    game.pause();
                                    game.countChoose();
                                };
                                if (event.isMine()) {
                                    chooseButton(list, skills);
                                } else if (event.isOnline()) {
                                    event.player.send(chooseButton, list, skills);
                                    event.player.wait();
                                    game.pause();
                                } else {
                                    switchToAuto();
                                }
                                ('step 1');
                                var map = event.result || result;
                                if (map && map.skills && map.skills.length) {
                                    for (var i of map.skills) player.addSkillLog(i);
                                }
                            },
                        },
                        ls_qiaobian: {
                            audio: 'ext:偷剽窃盗/audio:2',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            check(event, player) {
                                return false;
                            },
                            filter(event, player) {
                                var cards = player.getCards('x');
                                var list = [];
                                for (var i = 0; i < cards.length; i++) {
                                    var j = cards[i].gaintag;
                                    list.add(j[0]);
                                }
                                return list.length > 1;
                            },
                            content() {
                                'step 0';
                                var cards = player.getCards('x');
                                list = [];
                                for (var i = 0; i < cards.length; i++) {
                                    var j = cards[i].gaintag;
                                    list.add(j[0]);
                                }
                                if (list.length > 1) player.chooseControl(list, 'cancel2').set('prompt', '获得一个标记的所有牌');
                                else event.finish();
                                ('step 1');
                                if (result.control != 'cancel2') {
                                    list.remove(result.control);
                                    event.cards = player.getExpansions(result.control);
                                    player.gain(event.cards);
                                    player.chooseControl(list, 'cancel2').set('prompt', '选择一个标记,或减1体力上限');
                                } else event.finish();
                                ('step 2');
                                if (result.control != 'cancel2') {
                                    player.addToExpansion(event.cards, player, 'giveAuto').gaintag.add(result.control);
                                } else player.loseMaxHp();
                            },
                        },
                        ls_tou: {
                            audio: 'zongkui',
                            trigger: {
                                global: 'phaseUseBegin',
                            },
                            logTarget: 'player',
                            filter(event, player) {
                                return event.player != player && event.player.isAlive() && player.countCards('he') > 0 && event.player.inRange(player);
                            },
                            forced: true,
                            prompt2: (event, player) => '观看其' + get.cnNumber(Math.min(player.hp, event.player.countCards('h'))) + '张手牌并选择其中一张',
                            check(event, player) {
                                var target = event.player;
                                if (get.attitude(player, target) > 0) return true;
                                if (Math.min(player.hp, target.countCards('h')) > 2) return true;
                                return false;
                            },
                            content() {
                                'step 0';
                                var target = trigger.player;
                                var cards = target.getCards('h');
                                var num = Math.min(cards.length, player.hp),
                                    cards2 = cards.randomGets(num);
                                player.chooseButton([get.translation(target) + '的手牌(' + num + '/' + cards.length + ')', cards2]).set('ai', function (button) {
                                    var player = _status.event.player,
                                        target = _status.event.getTrigger().player,
                                        card = button.link;
                                    var att = get.attitude(player, target);
                                    var val = target.getUseValue(card, null, true);
                                    if (val <= 0) return (-get.value(card, target) / 2) * get.sgn(att - 0.05);
                                    if (target.canUse(card, player) && get.effect(player, card, target, target) > 0) {
                                        var eff = get.effect(player, card, target, player);
                                        if (eff < 0) val -= eff;
                                    }
                                    return val;
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.addTempSkill('ls_tou_use', 'phaseAfter');
                                    player.addTempSkill('ls_tou_gain', 'phaseAfter');
                                    player.storage.tou = [trigger.player, result.links[0]];
                                }
                            },
                            subSkill: {
                                use: {
                                    audio: 'zongkui',
                                    trigger: {
                                        global: 'useCardToPlayer',
                                    },
                                    charlotte: true,
                                    filter(event, player) {
                                        var list = player.storage.tou;
                                        return list && event.player == list[0] && event.cards.includes(list[1]);
                                    },
                                    logTarget: 'player',
                                    check(event, player) {
                                        return get.effect(event.targets[0], event.card, event.player, player) < 0;
                                    },
                                    prompt2(event, player) {
                                        return '令' + get.translation(event.card) + '无效并可重新使用';
                                    },
                                    content() {
                                        trigger.cancel();
                                        trigger.targets.length = 0;
                                        trigger.parent.triggeredTargets1.length = 0;
                                        var list = trigger.cards.filter(function (i) {
                                            return player.storage.tou.includes(i);
                                        });
                                        player.chooseUseTarget(trigger.card, trigger.cards, false, 'nothrow');
                                    },
                                },
                                gain: {
                                    audio: 'zongkui',
                                    charlotte: true,
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        var list = player.storage.tou;
                                        return list;
                                    },
                                    content() {
                                        var list = player.storage.tou;
                                        player.gain(list[1]);
                                    },
                                },
                            },
                        },
                        ls_shishi: {
                            audio: 'baijia',
                            trigger: {
                                global: 'die',
                            },
                            filter(event, player) {
                                return event.player.getStockSkills(true, true).filter(function (skill) {
                                    var info = get.info(skill);
                                    return info && !info.juexingji && !info.hiddenSkill && !info.zhuSkill && !info.charlotte && !info.limited && !info.dutySkill;
                                }).length;
                            },
                            logTarget: 'player',
                            limited: true,
                            content() {
                                'step 0';
                                if (player == trigger.source) target = player;
                                else target = trigger.player;
                                var list = trigger.player.getStockSkills(true, true).filter(function (skill) {
                                    var info = get.info(skill);
                                    return info && !info.juexingji && !info.hiddenSkill && !info.zhuSkill && !info.charlotte && !info.limited && !info.dutySkill;
                                });
                                if (list.length == 1) event._result = { control: list[0] };
                                else
                                    target
                                        .chooseControl(list)
                                        .set('prompt', '选择令' + get.translation(player) + '获得一个技能')
                                        .set('forceDie', true)
                                        .set('ai', function () {
                                            return list.randomGet();
                                        });
                                ('step 1');
                                player.addSkillLog(result.control);
                            },
                        },
                        ls_quanbu: {
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            derivation: ['ls_quanbu1'],
                            audio: 1,
                            forced: true,
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            content() {
                                var skills = [];
                                var list = game.filterPlayer((current) => current != player).sortBySeat();
                                for (var i of list) {
                                    var list1 = i.getSkills(null, false, false);
                                    for (var j of list1) {
                                        skills.push(j);
                                    }
                                }
                                for (var i of skills) {
                                    lib.skill['ls_quanbu1'].trigger.player.add(i + 'After');
                                    var info = lib.skill[i];
                                    if (info.group) {
                                        if (Array.isArray(info.group)) {
                                            for (j of info.group) lib.skill['ls_quanbu1'].trigger.player.add(j + 'After');
                                        } else lib.skill['ls_quanbu1'].trigger.player.add(info.group + 'After');
                                    }
                                }
                                player.addSkill(skills);
                                player.addSkill('ls_quanbu1');
                            },
                        },
                        ls_quanbu1: {
                            audio: 'ext:偷剽窃盗/audio:2',
                            trigger: {
                                player: [],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                game.log(lib.skill['ls_quanbu1'].trigger.player);
                                game.log(trigger.name);
                                var skills = player.getSkills(null, false, false);
                                for (var i of skills) {
                                    if (i == trigger.name) {
                                        player.removeSkill(i);
                                        game.log(player, '移除了技能', '【' + get.translation(i) + '】');
                                        event.finish();
                                    }
                                }
                                ('step 1');
                                var skills = player.getSkills(null, false, false);
                                for (var i of skills) {
                                    var info = lib.skill[i];
                                    if (info.group) {
                                        if (Array.isArray(info.group)) {
                                            for (j of info.group) {
                                                if (j == trigger.name) {
                                                    player.removeSkill(i);
                                                    game.log(player, '移除了技能', '【' + get.translation(i) + '】');
                                                }
                                            }
                                        } else if (info.group == trigger.name) {
                                            player.removeSkill(i);
                                            game.log(player, '移除了技能', '【' + get.translation(i) + '】');
                                        }
                                    }
                                }
                            },
                            group: ['ls_quanbu1_use', 'ls_quanbu1_achieve'],
                            subSkill: {
                                use: {
                                    audio: 'ls_quanbu1',
                                    filter(event, player) {
                                        var skills = player.getSkills(null, false, false);
                                        return skills.length > 1;
                                    },
                                    enable: 'phaseUse',
                                    usable: 1,
                                    content() {
                                        'step 0';
                                        list = player.getSkills(null, false, false).filter(function (skill) {
                                            var info = get.info(skill);
                                            return info && skill != 'ls_quanbu1';
                                        });
                                        if (list.length) event.goto(1);
                                        else event.finsh();
                                        ('step 1');
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
                                            for (var i = 0; i < list.length; i++) {
                                                if (lib.translate[list[i] + '_info']) {
                                                    var translation = get.translation(list[i]);
                                                    if (translation[0] == '新') {
                                                        translation = translation.slice(1, 5);
                                                    } else {
                                                        translation = translation.slice(0, 4);
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
                                        ('step 2');
                                        _status.imchoosing = false;
                                        var link = result;
                                        player.removeSkill(link);
                                        game.log(player, '移除了技能', '【' + get.translation(link) + '】');
                                    },
                                    ai: {
                                        order: 1,
                                        result: {
                                            player: 1,
                                        },
                                        threaten: 1.55,
                                    },
                                },
                                achieve: {
                                    audio: 'ls_quanbu1',
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        var skills = player.getSkills(null, false, false).filter(function (skill) {
                                            var info = get.info(skill);
                                            return info && skill != 'ls_quanbu1';
                                        });
                                        return skills.length == 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.awakenSkill('ls_quanbu1');
                                        var list = ['ls_wujinnengliang', 'ls_wujianbucui', 'ls_buhuaizhishen', 'ls_wushangshenwei', 'ls_shengzhang', 'ls_shuairuo', 'ls_zhiyu'];
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
                                        player.addSkill(link);
                                        var list = ['ls_wujinnengliang', 'ls_wujianbucui', 'ls_buhuaizhishen', 'ls_wushangshenwei', 'ls_shengzhang', 'ls_shuairuo', 'ls_zhiyu'];
                                        list.remove(link);
                                        var skill = list.randomGet();
                                        player.addSkill(skill);
                                        game.log(player, '获得了技能', '【' + get.translation(link) + '】', '【' + get.translation(skill) + '】');
                                    },
                                },
                            },
                        },
                        ls_wushangshenwei: {
                            nobracket: true,
                            trigger: {
                                player: ['linkBegin', 'turnOverBefore'],
                            },
                            forced: true,
                            content() {
                                trigger.cancel();
                            },
                            mod: {
                                targetEnabled(card, player, target, now) {
                                    if (player != target) {
                                        if (get.type(card, 'trick') == 'trick') return false;
                                    }
                                },
                            },
                        },
                        ls_wujinnengliang: {
                            nobracket: true,
                            filter(event, player) {
                                return player.countCards('h') < 3;
                            },
                            forced: true,
                            trigger: {
                                player: 'loseAfter',
                            },
                            content() {
                                player.draw();
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
                                        if (player.countCards('h') <= 3) return false;
                                    }
                                },
                            },
                        },
                        ls_buhuaizhishen: {
                            nobracket: true,
                            forced: true,
                            trigger: {
                                player: 'damageBegin2',
                            },
                            content() {
                                trigger.num -= 1;
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (player.hasSkillTag('jueqing', false, target)) return;
                                        var num = get.tag(card, 'damage');
                                        if (num > 0) {
                                            if (num > 1) return 0.5;
                                            return 0;
                                        }
                                    },
                                },
                            },
                        },
                        ls_wujianbucui: {
                            nobracket: true,
                            trigger: {
                                player: 'shaMiss',
                            },
                            forced: true,
                            content() {
                                trigger.untrigger();
                                player.storage.ls_wujianbucui = true;
                                trigger.trigger('shaHit');
                                trigger._result.bool = false;
                                trigger._result.result = null;
                            },
                            group: ['ls_wujianbucui_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    forced: true,
                                    logTarget: 'player',
                                    filter(event, player) {
                                        var target = event.player;
                                        return event.parent.name == 'sha';
                                    },
                                    content() {
                                        if (player.storage.ls_wujianbucui == true) player.storage.ls_wujianbucui = false;
                                        else trigger.num++;
                                    },
                                },
                            },
                        },
                        ls_shuairuo: {
                            audio: 'ext:偷剽窃盗/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filter: (event, player) => game.hasPlayer((current) => current != player),
                            filterTarget: (card, player, target) => target != player,
                            content() {
                                target.loseMaxHp();
                            },
                            ai: {
                                threaten: 5,
                            },
                        },
                        ls_shengzhang: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseDiscardEnd',
                            },
                            forced: true,
                            init(player) {
                                player.storage.ls_shengzhang = 0;
                            },
                            content() {
                                if (trigger.cards && trigger.cards.length) player.gainMaxHp(true);
                                else player.storage.ls_shengzhang++;
                            },
                            mark: true,
                            intro: {
                                content(storage, player) {
                                    var num = player.storage.ls_shengzhang;
                                    var str = '<li>摸牌阶段额外摸:';
                                    str += num;
                                    str += '张牌';
                                    return str;
                                },
                            },
                            group: 'ls_shengzhang_1',
                            subSkill: {
                                1: {
                                    audio: 'ext:偷剽窃盗/audio:2',
                                    audioname: ['sp_lvmeng'],
                                    trigger: {
                                        player: 'phaseDrawBegin2',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return !event.numFixed;
                                    },
                                    content() {
                                        trigger.num += player.storage.ls_shengzhang;
                                    },
                                    ai: {
                                        threaten: 1.3,
                                    },
                                },
                            },
                        },
                        ls_zhiyu: {
                            trigger: {
                                global: 'phaseEnd',
                            },
                            content() {
                                trigger.player.chooseDrawRecover(true);
                            },
                        },
                    },
                    character: {
                        ls_jiawodun: ['male', 'qun', 4, ['ls_jinhua2', 'ls_mojing2'], ['des:']],
                        ls_guanzhe: ['female', 'jin', 4, ['ls_quanbu'], ['des:']],
                        ls_yongzhe: ['male', 'shu', 4, ['ls_shangdian'], ['des:']],
                        ls_zhanghe: ['male', 'wei', 4, ['ls_zhilve', 'ls_qiaobian'], ['des:']],
                        ls_guanyu: ['male', 'shu', 4, ['ls_guilong', 'ls_wucai', 'ls_wusheng'], ['des:一刀两刀三刀']],
                        ls_meiliya: ['female', 'shen', 3, ['ls_zhaohuan', 'yinshen'], ['des:']],
                        ls_xiaoer: ['female', 'shen', 3, ['ls_emo'], []],
                        ls_sanbin16: ['female', 'jin', 3, ['ls_pingdeng', 'ls_shana'], ['des:']],
                        ls_sanbin15: ['female', 'jin', 3, ['ls_sanbing6'], ['des:']],
                        lsshen_zhangliao: ['male', 'shen', 4, ['ls_duorui', 'ls_zhiti'], ['des:']],
                        ls_zhongyan: ['female', 'jin', 3, ['ls_bolan2', 'ls_yifa'], ['des:队友？都去死吧']],
                        ls_jingzi: ['female', 'jin', 2, ['ls_mojing'], ['des:好了,这只是一个普通的镜子,没什么可怕的']],
                        ls_zhouchu: ['male', 'wu', 4, ['ls_xianghai', 'ls_chuhai'], ['des:可知我,上山杀虎,入海斩蛟']],
                        ls_zhoufei: ['female', 'wu', 3, ['ls_liangyin', 'ls_konghou1'], ['des:']],
                        ls_sanbin12: ['female', 'jin', 3, ['ls_sanbin2'], ['des:']],
                        ls_sanbin13: ['female', 'jin', 3, ['ls_sanbin3'], ['des:']],
                        ls_sanbin14: ['female', 'jin', 4, ['ls_shuangbei'], ['des:']],
                        ls_mianyang: ['female', 'shen', 6, ['ls_changmao', 'ls_huaji'], ['des:只要你不把它养大,它就真的只是一只绵羊']],
                        ls_zuoci: ['female', 'shen', 3, ['ls_huanhua', 'ls_yigui', 'ls_huayang'], ['des:咩咩']],
                        ls_maidiwen: ['male', 'shen', 3, ['ls_shoufu', 'ls_fuhun', 'ls_jinzhou'], ['des:看,是最最最最最最伟大的大法师麦迪——咩咩']],
                        ls_45aya1: ['female', 'shen', 4, ['nscongjun1', 'ls_qianmian2', 'ls_enze'], ['des:我是奈亚拉托提普,我是伏行之混沌']],
                        //"ls_aya":["female","wu",3,["ls_xingxue2","ls_lianhua","ls_mifa"],["des:玉莲绽放,花开不败"]],
                        naiyazi: ['female', 'shen', 3, ['ls_enze'], []],
                        lafamu: ['male', 'jin', 6, ['ls_lianjin'], ['hiddenSkill'], []],
                        ls_meiren: ['female', 'qun', 4, ['ls_jinhua', 'duoji1'], ['des:可爱的精灵遇到问题了,你能来帮帮她吗？']],
                        ls_siwangzhiyi: ['female', 'shen', 3, ['ls_longyan', 'ls_longqu', 'ls_longhun'], ['des:觉醒后你就能见识一下什么叫力量的化身']],
                        refinli: ['male', 'wu', 4, ['remaoxian', 'ls_xiuzheng'], ['des:一起来冒险吧']],
                        ls_wuxiw: ['female', 'jin', '3/6', ['qianxingba', 'ls_qiji'], ['hiddenSkill']],
                        rejiawudun: ['female', 'shu', 4, ['rejinhua', 'lsyinka'], ['des:趁她不注意,赶紧上去砍她一刀']],
                        ls_tuoqi: ['female', 'wei', 3, ['ls_fatiao', 'ls_hundun'], ['des:第三次战斗开始']],
                        ls_beimihu: ['female', 'qun', 3, ['ls_tou', 'ls_shishi'], ['des:']],
                    },
                    characterTitle: {
                        ls_yongzhe: '# 巴卡巴卡',
                        ls_zhanghe: '# 巴卡巴卡',
                        ls_zhoufei: '# 巴卡巴卡',
                        ls_guanyu: '# 巴卡巴卡',
                        ls_zhongyan: '# 巴卡巴卡',
                        ls_jingzi: '# 巴卡巴卡',
                        ls_zhouchu: '# 巴卡巴卡',
                        ls_sanbin11: '# 巴卡巴卡',
                        ls_sanbin15: '# 巴卡巴卡',
                        ls_sanbin12: '# 巴卡巴卡',
                        ls_sanbin13: '# 巴卡巴卡',
                        ls_sanbin14: '# 巴卡巴卡',
                        ls_mianyang: '# 巴卡巴卡',
                        ls_zuoci: '# 巴卡巴卡',
                        ls_maidiwen: '# 巴卡巴卡',
                        ls_45aya1: '# 巴卡巴卡',
                        ls_aya: '# 巴卡巴卡',
                        ls_meiren: '# 巴卡巴卡',
                        ls_siwangzhiyi: '# 巴卡巴卡',
                        ls_tuoqi: '# 巴卡巴卡',
                        refinli: '# 巴卡巴卡',
                        ls_wuxiw: '# 巴卡巴卡',
                        rejiawudun: '# 巴卡巴卡',
                        lafamu: '# 巴卡巴卡',
                        ls_sanbin16: '# 巴卡巴卡',
                        naiyazi: '# 巴卡巴卡',
                        lsshen_zhangliao: '# 巴卡巴卡',
                        ls_beimihu: '# 巴卡巴卡',
                        ls_jiawodun: '# 巴卡巴卡',
                    },
                    translate: {
                        ls_jiawodun: '谋嘉沃顿',
                        ls_guanzhe: '观者',
                        ls_yongzhe: '勇者',
                        ls_beimihu: 'κ•卑弥呼',
                        ls_zhanghe: 'κ•张郃',
                        ls_guanyu: 'κ•关羽',
                        ls_meiliya: '小美',
                        ls_xiaoer: '小恶魔',
                        lsshen_zhangliao: 'κ•张辽',
                        ls_zhongyan: 'κ•钟琰',
                        ls_jingzi: '普通的镜子',
                        ls_zhouchu: 'κ•周处',
                        ls_sanbin11: '伞兵一号',
                        ls_sanbin12: '伞兵二号',
                        ls_zhoufei: 'κ•周妃',
                        ls_sanbin13: '伞兵三号',
                        ls_sanbin14: '伞兵四号',
                        ls_sanbin16: '伞兵六号',
                        ls_sanbin15: '伞兵五号',
                        ls_mianyang: '滑稽的绵羊',
                        ls_zuoci: 'κ•左慈',
                        ls_maidiwen: '麦迪文',
                        ls_45aya1: '奈亚拉托提普',
                        ls_aya: '艾雅',
                        lafamu: '拉法姆',
                        ls_tuoqi: '托奇',
                        ls_meiren: '可爱的精灵',
                        naiyazi: '奈亚子',
                        ls_siwangzhiyi: '死亡之翼',
                        ls_wuxiw: '巴卡巴卡',
                        refinli: '界芬利',
                        rejiawudun: '挂机的阿凯',
                        ls_sanbing6: '伞兵',
                        ls_sanbing6_info: '锁定技,游戏开始时,你可以从五张随机武将牌上选择X个技能获得之.(不能为使命,觉醒等特殊技能)(X为你的血量值.)',
                        ls_pingdeng: '贫富均分',
                        ls_pingdeng_info: '①出牌阶段,你可以选择两名技能数不同的角色,你选择技能数多的角色的一个技能(不能为使命,觉醒,限定等特殊技能),令其失去之,并令另一个人获得.②当你受到伤害后,你可以获得伤害来源的一张牌,若你的手牌数小于伤害来源,重复上述过程',
                        ls_shana: '刹那芬芳',
                        ls_shana_info: '限定技,出牌阶段,你可以选择一名角色.使其获得效果:准备阶段开始时,随机使用一个觉醒技',
                        ls_shana1: '刹那芬芳',
                        ls_duorui: '夺锐',
                        ls_duorui_info: '当你对一名角色造成伤害后,你可以令其的一个技能失效,制作一张拥有此技能的宝物卡(当此卡进入弃牌堆后销毁之,令该角色技能可用)',
                        ls_zhiti: '止啼',
                        ls_zhiti_info: '出牌阶段限一次,你将一张牌置于牌堆底并选择一名角色,令其直到下个回合不能使用与此牌牌名相同的牌,获得其一张牌',
                        ls_zhiti1: '止啼',
                        ls_bolan2: '博览',
                        ls_bolan2_info: '①每局游戏限一次,准备阶段,你随机获得一个具有<出牌阶段限一次>描述的技能.②每当你发动最近因①获得的技能时你摸一张牌,若此技能你已经使用了三次,使效果①视为未发动',
                        ls_yifa: '仪法',
                        ls_yifa_info: '一名角色的回合结束阶段,若你于此回合受到过伤害,你摸一张牌,进行一个额外的出牌阶段',
                        ls_bolan1: '博览',
                        ls_xianghai: '乡害',
                        ls_xianghai_info: '锁定技,其他角色手牌上限为手牌数与体力值中的小值减1.其他角色弃牌阶段结束后,若其本回合弃置过牌,你可以选择一张牌获得之',
                        ls_fuhas: '彰名',
                        ls_xianghais: '乡害',
                        ls_xianghais_info: '你的回合开始时,你可以选择一名角色的一个技能,若你没有废除的装备栏,你可以废除自己的所有装备栏令该角色移除此技能,若此技能不是隐匿,主公,觉醒,限定,使命等特殊技能,你获得之;反之或你未选择废除装备栏,你令此技能失效直到回合结束',
                        ls_chuhai: '除害',
                        ls_chuhai_info: '使命技,出牌阶段限一次,你可以选择一名角色,你与其进行多次拼点直到一方手牌为零.若你的手牌数加上你赢的次数大于输的次数,你对其造成一点伤害.成功:若你因除害造成了三次伤害,则你失去技能<乡害>,获得技能<彰名>.失败:你失去最后一张牌时,摸牌至体力上限',
                        ls_zhangming: '彰名',
                        ls_zhangming_info: '锁定技,你摸牌时额外摸一张牌,你的手牌上限翻倍.当你获得此技能时,你可以从七张随机吴势力武将中选择两个技能获得之',
                        ls_sanbin2: '伞兵',
                        ls_sanbin2_info: '锁定技,游戏开始时,你从十五个技能中选择三个获得之',
                        ls_sanbin3: '伞兵',
                        ls_sanbin3_info: '锁定技,游戏开始时,你从二十个技能中选择四个获得之',
                        ls_changmao: '长毛',
                        ls_changmao_info: '锁定技,你收到的火焰伤害+1',
                        ls_huaji: '滑稽',
                        ls_huaji_info: '锁定技,你不能使用牌指定其他角色',
                        ls_huanhua: '幻化',
                        ls_huanhua_info: '每当一名距离你1以内的角色成为非虚拟非转化牌的目标后,你记录该牌名.出牌阶段,你可以将一张牌当作已记录的牌使用,移除此记录',
                        ls_yigui: '役鬼',
                        ls_yigui_info: '当一名角色死去后,你将你的武将变成死亡角色的武将,摸三张牌.并获得如下效果:出牌阶段,你可以将武将重新变为左慈并回复所有体力值',
                        ls_yigui_show: '役鬼',
                        ls_yigui_show1: '役鬼',
                        ls_huayang: '绵羊',
                        ls_huayang_info: '锁定技,你将以绵羊的形态出击.你的回合开始或濒死时,你将武将牌变为左慈',
                        ls_shoufu: '秘法',
                        ls_shoufu_info: '你的回合开始时,你可以发现一个具有锁定效果的技能,令一名角色获得之.若其已经因此获得过技能,则替换之',
                        ls_jinzhou: '禁咒',
                        ls_jinzhou_info: '出牌阶段限一次,你可以展示并弃置一种花色的所有牌.若因此①弃置了一张以上,你摸两张牌②至少两张牌,你回复一点体力③至少三张牌,你视为使用一张对应的锦囊:♠️️,文和乱舞;♥️️,克复中原;♣️️,号令天下;♦️️,固国安邦',
                        ls_fuhun: '缚魂',
                        ls_fuhun_info: '你的回合开始时/你受到伤害后,你可以将一名其他角色变成<绵羊>,其回合开始或濒死时,变回原来的角色',
                        ls_shenqu: '神躯',
                        ls_shenqu_info: '锁定技,你打牌时必须激昂',
                        ls_qianmian2: '千面',
                        ls_qianmian2_info: '出牌阶段限一次,你可以弃置一张牌并选择一名有手牌的其他角色.随机使用两个主动技(若需要,则以弃置牌和目标角色为目标)',
                        ls_qianmian5: '降神',
                        ls_qianmian5_info: '回合开始时,若你进行的回合不小于10,你清除所有技能,增加体力上限到10,回复所有体力,并获得技能【刺槐】,【天义2】,【破军】,【铁骑】,【挽弓】',
                        nscongjun1: '伏行',
                        nscongjun1_info: '锁定技,你将以神武将的身份登场.当你濒死后,你将武将牌替换回<伏行之混沌>.你令X等于4到13之间的一个随机数字.并获得以下效果:若你的体力值加X大于0,你不会死去.你的手牌上限视为X',
                        ls_kongdo: '混沌',
                        ls_kongdo_info: '锁定技,当你获得此技能时,你令X等于4到13之间的一个随机数字.若你的体力值加X大于0,你不会死去.你的手牌上限视为X.此技能不会失效',
                        ls_xingxue2: '青玉',
                        ls_xingxue: '青玉',
                        ls_xingxue2_info: '出牌阶段开始时,你摸x1张牌,回复y1点体力(若为伤害时机则不触发).你弃置z1张牌,流失m1点体力,你选择一名其他角色,若其是敌方/友方角色,其弃置/摸x2张牌,受到/回复y2点伤害/体力,摸/弃置z2张牌,回复/流失m2点体力/伤害.(初始数值都为零).游戏开始时,你摸两张牌',
                        ls_lianhua: '莲华',
                        ls_lianhua_info: '摸牌阶段,你额外获得一张青玉牌.每当你第三次使用青玉牌,你可以增加青玉的一项x数值.每第十次使用青玉牌,你可以增加青玉的一项y数值.当有角色死亡后,你选择一项①将<受到伤害时>或者<准备阶段>加入到青玉描述的最开始.②将其他角色受到伤害改成体力流失③将<其弃置>改为<你弃置>.④将一名其他角色,改成两名',
                        ls_mifa: '秘法',
                        ls_mifa1: '秘法1',
                        ls_mifa2: '秘法2',
                        ls_mifa1_info: '出牌阶段限一次,你可以选择增加/减少青玉的一项z/m数值,你可以增加/减少青玉的一项x/y数值',
                        ls_mifa2_info: '出牌阶段限一次,你可以选择一项①将<进行判定,若为红则>加入到青玉描述中的<出牌阶段开始时>之后②失去一点体力上限③受到1点伤害,重复两次.在结算完成后,你可以选择一项①摸四张牌②对一名角色造成一点伤害,并使其获得重伤③增加一点体力上限',
                        ls_mifa_info: '出牌阶段限一次,你可以获得【秘法1】或【秘法2】直到回合结束',
                        jupai1: '惧怕',
                        jupai1_info: '锁定技,你的技能失效',
                        remaoxian: '奇旅',
                        remaoxian_info: '出牌阶段限两次,你可以从五个技能中选择一个获得之,并替换你上次获得的技能.(若是本回合第一次使用此技能,则五个技能均为出牌阶段可使用的技能)',
                        ls_xiuzheng: '修整',
                        ls_xiuzheng_info: '限定技,出牌阶段结束时,你可以固定住你通过奇旅所获得的技能',
                        ls_jinhua: '精华',
                        ls_jinhua_info: '限定技,出牌阶段开始时,你从五个技能中选择一个获得之',
                        qianxingba: '潜行',
                        qianxingba_info: '隐匿技,锁定技,你登场时,发现并获得一个转换技',
                        duoji1: '学艺',
                        duoji1_info: '限定技,出牌阶段,你可以选择一名其他角色,获得其一个技能',
                        ls_qiji: '奇迹',
                        ls_qiji_info: '使命技,①出牌阶段限一次,你可以与一名角色谋弈.若你赢,则你选择一项,1.获得一张智囊,并将牌堆顶两张牌置入仁库2.对其造成一点伤害,并将牌堆顶的两张牌置入仁库,背水:减一点体力上限;若你负且选项为<开城诱敌>,你进行判定,若结果为黑色,你执行谋弈胜利的效果;若你负且选项为<奇袭粮道>,你与该角色进行拼点,若你拼点胜利或其无法拼点,你执行谋弈胜利的效果.②成功:出牌阶段开始时,若仁库内有六张牌,你获得两张觉醒技能卡.③失败:你进入濒死',
                        ls_mianshang: '免伤',
                        ls_mianshang_info: '锁定技,你免疫所有伤害',
                        ls_longyan: '龙炎',
                        ls_longyan_info: '觉醒技,准备阶段开始时,如果你没有受伤,且装备区内除了宝物都有,你摸两张牌,获得技能【武神】,【红颜】,【苦肉】(标)',
                        ls_longqu: '龙躯',
                        ls_longqu_info: '觉醒技,准备阶段开始时,如果你体力为1,体力上限大于等于势力数且小于等于手牌数,你回复一点体力,获得技能【恢拓】,【酒诗】,【不屈】',
                        ls_longhun: '龙魂',
                        ls_longhun_info: '限定技,出牌阶段,你可以选择一名角色,使其的一个觉醒技可以直接触发.此回合结束后你进行一个额外回合',
                        rejinhua: '作弊',
                        rejinhua_info: '锁定技,每当你以自己为目标使用一张非转化的锦囊牌,你从六个技能中选择一个并获得之,并且其中一定有技能<挂机>',
                        lese: '挂机',
                        lese_info: '什么都不会发生,你就当放了个屁吧',
                        lsyinka: '后手',
                        lsyinka_info: '限定技,出牌阶段,你可以弃置至多三张牌,获得等量的锦囊牌',
                        ls_hundun: '混沌',
                        ls_hundun_info: '限定技,你濒死时,你可以回溯你的状态到游戏开始时',
                        ls_fatiao: '发条',
                        ls_fatiao_info: '①回合开始时,你三个技能中选择并获得一个.若已经以此法发现了3个技能,那么新获得的技能会替换最早获得的技能.此外你每发现一次,出现技能的描述就越长.②你的出牌阶段开始时,如果轮数是3的倍数,你回复一点体力;7的倍数,你加一点血量上限',
                        ls_wuku: '盗王',
                        ls_wuku_info: '出牌阶段限一次,若你装备区没有牌,则你获得浦元的一把兵器,马钧的一件防具,冯方女的一个梳子和六龙骖驾.你使用手牌里的所有装备',
                        ls_long: '迦拉',
                        ls_long_info: '回合开始时,你从【无敌】,【邪火】,【风暴】,【讳言】,【梦魇】中选择并获得一个技能',
                        ls_longpo: '无敌',
                        ls_longpo_info: '锁定技,你不能成为其他角色拼点和延时锦囊的目标,你不会被翻面和横置.你的回合结束时,你需弃置一张装备牌',
                        ls_longyan2: '邪火',
                        ls_longyan2_info: '出牌阶段,你可以弃置一张装备牌,对一名角色造成伤害,并使其获得重伤',
                        ls_longwei: '风暴',
                        ls_longwei_info: '锁定技,回合开始时,你弃置一张装备牌,使其他所有角色技能失效,知道回合结束',
                        ls_longlin: '讳言',
                        ls_longlin_info: '锁定技,当你受到伤害时,你弃置一张装备牌,将伤害减为1,并免疫之后的所有伤害直到回合结束',
                        ls_longzhou: '梦魇',
                        ls_longzhou_info: '锁定技,其他角色摸牌时,你令其摸牌数变为1(若为其摸牌阶段,改为2),你摸X张牌,X为其少摸的牌.若X大于1,你需弃置一张装备牌',
                        ls_lianjin: '考古',
                        ls_lianjin_info: '隐匿技,你登场时选择获得1到3个宝物标记,若X不小于2,你获得技能盗王,X不小于3,你从【无敌】,【邪火】,【风暴】,【讳言】,【梦魇】中选择一个技能并获得之.你的出牌阶段开始时,若你有宝物标记,你可移去所有宝物标记,并失去X点体力上限,发现并获得一个技能(你可指定X个检索条件).X为标记数量',
                        ls_enze: '恩泽',
                        ls_enze_info: '锁定技,转化技,阳:一轮游戏开始时,你弃置两张手牌,声名一个基本牌名、锦囊或者装备.其他角色使用此牌时,你摸一张牌,你发现一个煞,并令所有其他角色获得,直到下轮开始.阴:一轮游戏开始时,你摸两张牌,声名一个基本牌名、锦囊或者装备.其他角色不能使用打出弃置此牌,你发现一个技能,并令所有角色获得,直到下轮开始',
                        ls_enze2: '恩泽',
                        ls_enze2_info: '锁定技,一轮游戏开始时,你发现一个技能,并令所有角色获得,直到下轮开始.你失去此技能',
                        ls_faxian: '七煞',
                        ls_faxian_info: '锁定技,一轮游戏开始时,你发现一个煞,并令所有其他角色获得,直到下轮开始',
                        ls_mojing: '魔镜',
                        ls_mojing1: '魔镜',
                        ls_mojing1_info: '当你因武将牌上的技能摸牌和造成伤害时,数值+1',
                        ls_mojing_info: '锁定技,1.游戏开始时,你需选择一名角色,复制其的原画、体力值和体力值上限.获得其武将牌上所有的技能.并获得效果:当你因复制的技能摸牌和造成伤害时,数值加1',
                        ls_shuangbei: '双生',
                        ls_shuangbei_info: '限定技,出牌阶段,你可以从五个具有单回合时机的技能中选择并获得一个,把该技能的时机改为回合开始/结束时.从五个出牌阶段限一次的技能中选择并获得一个,令此技能出牌阶段可以使用两次',
                        ls_zhilve: '知略',
                        ls_zhilve_info: '游戏开始时,你从三个可以将牌置于武将牌上的武将的技能中选择三个技能获得之',
                        ls_qiaobian: '巧变',
                        ls_qiaobian_info: '准备阶段,若你的武将牌上的牌有两个以上的标记.你可以选择一个标记①,获得带有标记①的牌.再选一个标记②或减1点体力上限.若你选择了标记②,则使这些牌获得标记②并放置在武将牌上',
                        ls_zhaohuan: '召唤',
                        ls_zhaohuan_info: '出牌阶段,你可以弃置一张牌,若你没有召唤物,你(在你的左侧)召唤一个<小恶魔>;反之,你从【狂暴】,【吸血】,【回馈】,【尸爆】中选择一个技能并令<小恶魔>获得之,再从三个随机技能中选择一个令其获得之',
                        ls_emo: '恶魔',
                        ls_emo_info: '锁定技,当你成为其他角色牌的目标时,若此牌不是【桃】,你进行一次判定,若此牌与判定牌类别相同,此牌失效.你死亡时,将你的武将牌移除游戏',
                        ls_kuangbao: '狂暴',
                        ls_kuangbao_info: '①锁定技,你的杀结算两次,你的杀的伤害结算两次.②回合结束时,你减少一点体力上限',
                        ls_xixue: '吸血',
                        ls_xixue_info: '锁定技,你造成伤害时,使召唤师回复等量的体力',
                        ls_xieyang: '回馈',
                        ls_xieyang_info: '锁定技,你于弃牌阶段弃牌后,使召唤师获得其中至多两张牌',
                        ls_zihui: '尸爆',
                        ls_zihui_info: '锁定技,你死亡时,对所有其他角色造成1点伤害',
                        ls_wucai_d: '财进',
                        ls_wucai: '财进',
                        ls_wucai_info: '①锁定技,有武器牌的角色摸牌阶段额外摸一张牌.②每回合限一次,当有角色使用【杀】造成伤害后,令其从弃牌堆随机获得一张杀或武器牌',
                        ls_tunshi: '吞食',
                        ls_tunshi_info: '当你使用杀对其他角色造成伤害后,销毁其武器并使【鬼龙偃月刀】获得该武器技能',
                        ls_guilong: '鬼龙',
                        ls_guilong_info: '①锁定技,游戏开始时,你获得并装备【鬼龙偃月刀】.②出牌阶段,若你没有装备武器,你可以弃置一张牌,从弃牌堆或场上获得【鬼龙偃月刀】',
                        ls_wusheng: '武神',
                        ls_wusheng_info: '①准备阶段开始时,你可以视为使用一张无视距离的【杀】.②当你使用【杀】时,你可以获得一个与【杀】有关的技能,直到你的下个回合开始',
                        ls_konghou1: '箜篌',
                        ls_konghou1_info: '当你受到伤害后,你发现并获得一个可以将牌置于武将牌上的技能.此技能触发两次后修改此技能',
                        ls_konghou: '箜篌',
                        ls_konghou_info: '当你受到伤害后,你可以选择一张武将牌上的牌使用之,并弃置伤害来源一张牌',
                        ls_liangyin: '良姻',
                        ls_liangyin_info: '①游戏开始时,你制造一个新的【木牛流马】并装备之.②出牌阶段限一次,你可以选择一名角色,将此【木牛流马】移动到其装备区,并将其所有手牌置于【木牛流马】.③当有牌被移出游戏时,你摸一张牌',
                        ls_tou: '纵傀',
                        ls_tou_info: '其他角色的出牌阶段开始时,若你在其的攻击范围内,你可以观看其X张牌(X为你的体力值)并选择其中一张,且获得如下效果:1.当其使用牌时,若此牌的实体牌包括此牌,你可以取消此牌的所有目标,重新使用这张被标记的牌;2.回合结束时,你获得此牌',
                        ls_shishi: '拜假',
                        ls_shishi_info: '锁定技,当有角色死亡时,其选择一个技能,若其被你所杀,则该为你选择之.你获得此技能',
                        ls_shangdian: '天命',
                        ls_shangdian_info: '①每轮开始或你没造成伤害的回合结束时,你获得两点<天命>值.②出牌阶段限一次,你可以打开系统购物',
                        ls_quanbu: '通晓',
                        ls_quanbu_info: '游戏开始时,你获得所有角色的技能.并获得技能【归真】',
                        ls_quanbu1: '归真',
                        ls_quanbu1_info: '使命技,①你因【全部】获得的技能在使用一次后消失,②出牌阶段限一次,你可选择一个非【归真】的技能失去之.③成功:回合结束时,若你仅拥有此技能,你从【潦草急就】【操纵现实】【精神护盾】【天人形态】【机械降神】【渎神】【许愿】中选择并获得一个,再随机获得另一个',
                        ls_wujinnengliang: '潦草急就',
                        ls_wujinnengliang_info: '锁定技,当你失去牌后,若你的牌少于3,则你摸一张牌',
                        ls_wujianbucui: '操纵现实',
                        ls_wujianbucui_info: '锁定技,你的杀伤害+1.你的杀被闪响应后,不会失效,改为伤害-1',
                        ls_shengzhang: '天人形态',
                        ls_shengzhang_info: '锁定技,弃牌阶段结束时,若你弃置了牌,你增加一点体力上限;反之,你今后的摸牌阶段额外摸一张牌',
                        ls_buhuaizhishen: '精神护盾',
                        ls_buhuaizhishen_info: '锁定技,你受到的伤害-1',
                        ls_shuairuo: '渎神',
                        ls_shuairuo_info: '出牌阶段限一次,你可减少一名角色的一点体力上限',
                        ls_zhiyu: '许愿',
                        ls_zhiyu_info: '每个角色回合结束时,你可令其选择回复或摸牌',
                        ls_wushangshenwei: '机械降神',
                        ls_wushangshenwei_info: '你不会被翻面,横置,你不能成为其他角色锦囊牌的目标',
                        ls_jinhua2: '进化',
                        ls_jinhua2_info: '锁定技,每当你使用X的平方张牌时,你从五个技能中选择一个获得之.(X为此技能发动次数+1)',
                        ls_mojing2: '水晶',
                        ls_mojing2_info: '限定技,从牌堆中随机获得Y张牌名各不相同的牌.(Y为6-手牌数)',
                    },
                };
                lib.config.all.characters.add('偷剽窃盗');
                lib.config.characters.add('偷剽窃盗');
                for (var i in QQQ.character) {
                    QQQ.character[i][4].add(`ext:偷剽窃盗/image/${i}.jpg`);
                }
                lib.translate['偷剽窃盗_character_config'] = `偷剽窃盗`;
                return QQQ;
            });
        },
        config: {
            tou_name: {
                name: '武将前缀',
                intro: '选择是否显示<κ>武将前缀',
                init: 'hide',
                item: {
                    hide: '隐藏',
                    show: '显示',
                },
            },
        },
        package: {
            intro: "<br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>",
            author: '巴卡巴卡',
            version: '1.0',
        },
    };
});

import { lib, game, ui, get, ai, _status } from '../../noname.js'
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '好名的世界',
        content(config, pack) {
            lib.translate.haoming_weijin = '魏晋南北';
            lib.translate.haoming_sanguo = '三国至晋';
            lib.translate.haoming_qinton = '秦统天下';
            lib.translate.haoming_dasong = '大宋王朝';
            lib.characterSort['好名的世界'] = {
                haoming: [],
                haoming_weijin: ['hm_murongke', 'hm_murongchui', 'hm_murongling', 'hm_fujian'],
                //'haoming_qinton': ["hm_yingzheng","hm_baiqi","",""],
                haoming_sanguo: ['hm_wangbi', 'hm_liubei', 'hm_huojun', 'hm_zhugejun', 'hm_wangjun', 'hm_yanghu', 'hm_guanyu' /*"hm_caocao"*/, , 'hm_lukang'],
                haoming_dasong: ['hm_yuefei', '', '', ''],
            };
            //是分界线鸭
            /*var style2=document.createElement('style');
        style2.innerHTML=".player .identity[data-color='hm_qin'],";
        style2.innerHTML+="div[data-nature='hm_qin'],";
        style2.innerHTML+="span[data-nature='hm_qin'] {text-shadow: black 0 0 1px,rgba(0, 0, 0,1) 0 0 2px,rgba(0, 0, 0,1) 0 0 5px,rgba(0, 0, 0,1) 0 0 10px,rgba(0, 0, 0,1) 0 0 10px}";
        style2.innerHTML+="div[data-nature='hm_qinm'],";
        style2.innerHTML+="span[data-nature='hm_qinm'] {text-shadow: black 0 0 1px,rgba(0, 0, 0,1) 0 0 2px,rgba(0, 0, 0,1) 0 0 5px,rgba(0, 0, 0,1) 0 0 5px,rgba(0, 0, 0,1) 0 0 5px,black 0 0 1px;}";
        style2.innerHTML+="div[data-nature='hm_qinmm'],";
        style2.innerHTML+="span[data-nature='hm_qinmm'] {text-shadow: black 0 0 1px,rgba(0, 0, 0,1) 0 0 2px,rgba(0, 0, 0,1) 0 0 2px,rgba(0, 0, 0,1) 0 0 2px,rgba(0, 0, 0,1) 0 0 2px,black 0 0 1px;}";
        document.head.appendChild(style2);
        lib.groupnature.hm_qin='hm_qin';此处代码来自苏婆,但是我改不明白*/
            //关于设定势力颜色的函数,此处颜色代码来自活动武将,感谢萌佬!
            game.bolAddGroupNature = function (name, mapping, gradient) {
                var n, t;
                if (!name) return;
                if (typeof name == 'string') {
                    n = name;
                    t = name;
                } else if (Array.isArray(name) && name.length == 2 && typeof name[0] == 'string') {
                    n = name[0];
                    t = name[1];
                } else return;
                if (!mapping || !Array.isArray(mapping) || mapping.length != 3) mapping = [199, 21, 133];
                var y = '(' + mapping[0] + ',' + mapping[1] + ',' + mapping[2];
                var y1 = y + ',1)',
                    y2 = y + ')';
                var s = document.createElement('style');
                var l;
                l = ".player .identity[data-color='diy" + n + "'],";
                l += "div[data-nature='diy" + n + "'],";
                l += "span[data-nature='diy" + n + "'] {text-shadow: black 0 0 1px,rgba" + y1 + ' 0 0 2px,rgba' + y1 + ' 0 0 5px,rgba' + y1 + ' 0 0 10px,rgba' + y1 + ' 0 0 10px}';
                l += "div[data-nature='diy" + n + "m'],";
                l += "span[data-nature='diy" + n + "m'] {text-shadow: black 0 0 1px,rgba" + y1 + ' 0 0 2px,rgba' + y1 + ' 0 0 5px,rgba' + y1 + ' 0 0 5px,rgba' + y1 + ' 0 0 5px,black 0 0 1px;}';
                l += "div[data-nature='diy" + n + "mm'],";
                l += "span[data-nature='diy" + n + "mm'] {text-shadow: black 0 0 1px,rgba" + y1 + ' 0 0 2px,rgba' + y1 + ' 0 0 2px,rgba' + y1 + ' 0 0 2px,rgba' + y1 + ' 0 0 2px,black 0 0 1px;}';
                s.innerHTML = l;
                document.head.appendChild(s);
                if (gradient && Array.isArray(gradient) && Array.isArray(gradient[0]) && gradient[0].length == 3) {
                    var str = '',
                        st2 = [];
                    for (var i = 0; i < gradient.length; i++) {
                        str += ',rgb(' + gradient[i][0] + ',' + gradient[i][1] + ',' + gradient[i][2] + ')';
                        if (i < 2) st2[i] = 'rgb(' + gradient[i][0] + ',' + gradient[i][1] + ',' + gradient[i][2] + ')';
                    }
                    var tenUi = document.createElement('style');
                    tenUi.innerHTML = ".player>.camp-zone[data-camp='" + n + "']>.camp-back {background: linear-gradient(to bottom" + str + ');}';
                    tenUi.innerHTML += ".player>.camp-zone[data-camp='" + n + "']>.camp-name {text-shadow: 0 0 5px " + st2[0] + ', 0 0 10px ' + st2[1] + ';}';
                    document.head.appendChild(tenUi);
                }
                //lib.group.push(n);
                lib.translate[n] = t;
                lib.groupnature[n] = 'diy' + n;
            };
            //势力颜色,同上,也是活动武将的
            /*if(lib.config.extension_活动武将_changeGroupColor){
            game.bolAddGroupNature(['shen','神'],[248,236,44],[[248,236,44],[248,236,44]]);
            game.bolAddGroupNature(['qun','群'],[222,222,222],[[222,222,222],[222,222,222]]);
            }*/
            ///////////////////////////////////////
        },
        precontent() {
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '好名的世界',
                    connect: true,
                    characterSort: {
                    },
                    dynamicTranslate: {
                    },
                    characterTitle: {
                    },
                    characterIntro: {
                    },
                    skill: {
                        hm_qianyin: {
                            marktext: '隐',
                            intro: {
                                name: '隐',
                                content: '此回合结束后需弃置#张牌',
                            },
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player && event.targets.length < 4;
                            },
                            content() {
                                player.draw();
                                player.addMark('hm_qianyin', 1);
                            },
                            group: ['hm_qianyin_1', 'hm_qianyin_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countMark('hm_qianyin');
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseToDiscard('he', player.countMark('hm_qianyin'), true);
                                        if (player.countMark('hm_qianyin') > player.countCards('he')) player.loseHp();
                                        player.removeMark('hm_qianyin', player.countMark('hm_qianyin'));
                                        ('step 1');
                                        if (player.countCards('h') <= 1) player.drawTo(2);
                                    },
                                },
                                2: {
                                },
                                3: {
                                },
                            },
                        },
                        hm_luyin: {
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.player == player || event.player != _status.currentPhase) return false;
                                var index = event.player
                                    .getHistory('useCard', function (evt) {
                                        return evt.targets.includes(player);
                                    })
                                    .indexOf(event.parent);
                                if (index == 2) return event.player.isAlive() && player.countCards('he') > 0;
                                return index < 2 && index > -1;
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                var index = trigger.player
                                    .getHistory('useCard', function (evt) {
                                        return evt.targets.includes(player);
                                    })
                                    .indexOf(trigger.parent);
                                if (index == 2) {
                                    player.chooseCard('he', true, '三礼:交给' + get.translation(trigger.player) + '一张牌');
                                } else {
                                    player.draw();
                                    event.finish();
                                }
                                ('step 1');
                                if (result.cards?.length) {
                                    trigger.player.gain(result.cards, player, 'giveAuto');
                                }
                            },
                        },
                        hm_yaoru: {
                            enable: ['chooseToUse', 'chooseToRespond'],
                            hiddenCard(player, name) {
                                return name != 'du' && get.type(name) == 'basic' && player.countCards('hes') > 0;
                            },
                            filter(event, player) {
                                if (event.type == 'wuxie' || !player.countCards('hes') || player.hasSkill('hm_qianyin_3')) return false;
                                for (var i = 0; i < lib.inpile.length; i++) {
                                    var name = lib.inpile[i];
                                    if (name != 'du' && get.type(name) == 'basic' && event.filterCard({ name: name }, player, event)) return true;
                                }
                                return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    for (var i = 0; i < lib.inpile.length; i++) {
                                        var name = lib.inpile[i];
                                        if (name == 'du') continue;
                                        if (name == 'sha') {
                                            list.push(['基本', '', 'sha', 'shan']);
                                            for (var j of lib.inpile_nature) list.push(['基本', '', name, j]);
                                        } else if (get.type(name) == 'basic') {
                                            list.push(['基本', '', name]);
                                        }
                                    }
                                    return ui.create.dialog('浅隐', [list, 'vcard'], 'hidden');
                                },
                                filter(button, player) {
                                    return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
                                },
                                check(button) {
                                    if (_status.event.parent.type == 'phase') {
                                        var player = _status.event.player;
                                        var fakecard = { name: button.link[2], nature: button.link[3] };
                                        if (player.getUseValue(fakecard) > 0) return get.order(fakecard);
                                        return 0;
                                    }
                                    return 1;
                                },
                                backup(links, player) {
                                    return {
                                        selectCard: 1,
                                        filterCard: 1,
                                        popname: true,
                                        check(card) {
                                            if (get.type(card) == 'basic') return 6;
                                            return 1 / Math.max(0.1, get.value(card));
                                        },
                                        position: 'hes',
                                        viewAs: { name: links[0][2], nature: links[0][3] },
                                        precontent() {
                                            player.addTempSkill('hm_qianyin_3');
                                            player.addMark('hm_qianyin', 1);
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用或打出';
                                },
                                hiddenCard(player, name) {
                                    var type = get.type2(name);
                                    return type == 'basic' && player.countCards('hes') > 0 && !player.hasSkill('hm_qianyin_3');
                                },
                            },
                            ai: {
                                order(item, player) {
                                    if (player && _status.event.type == 'phase') {
                                        var max = 0;
                                        for (var i = 0; i < lib.inpile.length; i++) {
                                            var name = lib.inpile[i];
                                            if (get.type(name) == 'basic' && player.getUseValue({ name: name }) > 0) {
                                                var temp = get.order({ name: name });
                                                if (temp > max) max = temp;
                                            }
                                        }
                                        if (max > 0) max += 0.5;
                                        return max;
                                    }
                                    return 4;
                                },
                                result: {
                                    player: 7,
                                },
                                respondSha: true,
                                fireAttack: true,
                                skillTagFilter(player, tag) {
                                    return tag == 'fireAttack' || player.countCards('he') > 0;
                                },
                            },
                        },
                        hm_baisheng: {
                            mod: {
                                targetInRange(card) {
                                    if (card.name == 'sha') return true;
                                },
                            },
                            trigger: {
                                source: 'damageBegin1',
                            },
                            forced: true,
                            filter(event, player) {
                                var target = event.player;
                                return target.hasMark('hm_baisheng_1') < 1 || target != player;
                            },
                            content() {
                                'step 0';
                                trigger.num++;
                                ('step 1');
                                var target = trigger.player;
                                player.addMark('hm_baisheng_2', 1);
                                target.addMark('hm_baisheng_1', 1);
                                target.addSkill('hm_baisheng_1');
                            },
                            group: ['hm_baisheng_2'],
                            subSkill: {
                                1: {
                                    marktext: '败',
                                    intro: {
                                        name: '败',
                                        content: '此人已成为败者,〖百胜〗拥有者将对其手下留情',
                                    },
                                },
                                2: {
                                    mod: {
                                        maxHandcard(player, num) {
                                            var X = player.countMark('hm_baisheng_2');
                                            if (X < 1) X + 1;
                                            return (num += 1 + X);
                                        },
                                    },
                                    marktext: '胜',
                                    intro: {
                                        name: '胜',
                                        content: '已胜#场,士气高涨',
                                    },
                                    trigger: {
                                        player: 'phaseZhunbeiBegin',
                                    },
                                    forced: true,
                                    content() {
                                        var num = player.countMark('hm_baisheng_2');
                                        if (num < 1) num + 1;
                                        player.draw(num);
                                    },
                                },
                            },
                        },
                        hm_yongzhan: {
                            derivation: ['hm_baisheng'],
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget: (card, player, target) => target != player && target.countMark('hm_yongzhan') < 1,
                            content() {
                                target.addMark('hm_yongzhan_4', 1);
                                target.addSkill('hm_yongzhan_4');
                            },
                            mod: {
                                cardUsableTarget(card, player, target) {
                                    if (target.hasMark('hm_yongzhan_4')) return true;
                                },
                            },
                            ai: {
                                threaten: 4.8,
                                result: {
                                    target(player, target) {
                                        return -2;
                                    },
                                },
                                order: 12,
                            },
                            group: ['hm_yongzhan_1', 'hm_yongzhan_2', 'hm_yongzhan_3', 'hm_yongzhan_5'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player.hasMark('hm_yongzhan_4');
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'useCardToPlayered',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card.name == 'sha' && !event.parent.directHit.includes(event.target) && event.target && event.target.hasMark('hm_yongzhan_4');
                                    },
                                    logTarget: 'target',
                                    content() {
                                        var id = trigger.target.playerid;
                                        var map = trigger.parent.customArgs;
                                        if (!map[id]) map[id] = {};
                                        if (typeof map[id].shanRequired == 'number') {
                                            map[id].shanRequired++;
                                        } else {
                                            map[id].shanRequired = 2;
                                        }
                                    },
                                    ai: {
                                        directHit_ai: true,
                                        skillTagFilter(player, tag, arg) {
                                            return arg && arg.target && arg.target.hasMark('hm_yongzhan_4');
                                            if ((arg && arg.card.name != 'sha') || arg.target.countCards('h', 'shan') > 1) return false;
                                        },
                                    },
                                },
                                3: {
                                    trigger: {
                                        global: 'dieAfter',
                                    },
                                    juexingji: true,
                                    forced: true,
                                    charlotte: true,
                                    fixed: true,
                                    filter(event, player) {
                                        return event.player.hasMark('hm_yongzhan_4');
                                    },
                                    content() {
                                        player.addSkill('hm_baisheng');
                                        player.awakenSkill('hm_yongzhan');
                                        player.hp = player.maxHp;
                                        player.draw(3);
                                    },
                                    markimage: 'extension/OLUI/image/player/marks/juexingji.png',
                                },
                                4: {
                                    charlotte: true,
                                    fixed: true,
                                    marktext: '讨',
                                    intro: {
                                        name: '讨',
                                        content: '〖勇战〗拥有者对其:<br/>①使用牌无次数限制<br/>②使用【杀】时其需使用两张【闪】响应<br/>③对其造成的伤害时,摸一张牌',
                                    },
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countMark('hm_yongzhan_4');
                                    },
                                    content() {
                                        player.removeMark('hm_yongzhan_4', player.countMark('hm_yongzhan_4'));
                                    },
                                },
                                5: {
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    usable: 1,
                                    forced: true,
                                    filter(event, player) {
                                        return event.player.hasMark('hm_yongzhan_4');
                                    },
                                    content() {
                                        'step 0';
                                        trigger.num++;
                                    },
                                },
                            },
                        },
                        hm_jiesho: {
                            mod: {
                                maxHandcard(player, num) {
                                    var X = player.maxHp;
                                    var Y = player.countDisabled();
                                    return (num += Y);
                                },
                            },
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            forced: true,
                            content() {
                                var X = player.maxHp;
                                for (var i = 1; i < 6; i++) {
                                    if (player.isDisabled(i)) continue;
                                    else {
                                        player.disableEquip(i);
                                    }
                                }
                                player.draw(2);
                            },
                            group: ['hm_jiesho_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: ['phaseZhunbeiBegin', 'damageEnd'],
                                    },
                                    filter(event, player) {
                                        return player.countDisabled() > 0;
                                    },
                                    charlotte: true,
                                    forced: true,
                                    content() {
                                        player.chooseToEnable();
                                        player.draw();
                                    },
                                },
                            },
                        },
                        hm_xunji: {
                            derivation: 'hm_sipo',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            juexingji: true,
                            filter(event, player) {
                                return player.countDisabled() < 1;
                            },
                            forced: true,
                            content() {
                                player.loseMaxHp();
                                player.recover(2);
                                player.addSkillLog('hm_sipo');
                                player.awakenSkill('hm_xunji');
                                player.awakenSkill('hm_jiesho');
                            },
                            markimage: 'extension/OLUI/image/player/marks/juexingji.png',
                        },
                        hm_sipo: {
                            mod: {
                                maxHandcard(player, num) {
                                    var X = player.maxHp;
                                    var Y = player.countDisabled();
                                    return (num += Y);
                                },
                            },
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            filter(event, player) {
                                var list = ['equip1', 'equip2', 'equip3', 'equip4', 'equip5'];
                                for (var i = 0; i < list.length; i++) {
                                    if (!player.isDisabled(list[i]) && (!player.storage.kengo_guidui2 || !player.storage.kengo_guidui2.includes(list[i]))) return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                var list = ['equip1', 'equip2', 'equip3', 'equip4', 'equip5'];
                                for (var i = 0; i < list.length; i++) {
                                    if (player.isDisabled(list[i]) || (player.storage.kengo_guidui2 && player.storage.kengo_guidui2.includes(list[i]))) list.splice(i--, 1);
                                }
                                player.chooseControl(list).set('prompt', '请选择废除一个装备栏').ai = function () {
                                    if (
                                        list.includes('equip1') &&
                                        player.isEmpty('equip1') &&
                                        player.countCards('h', function (card) {
                                            return card.name == 'sha' && player.getUseValue(card) > 0;
                                        })
                                    )
                                        return 'equip1';
                                    if (list.includes('equip3') && player.isEmpty('equip3')) return 'equip3';
                                    if (list.includes('equip4') && player.isEmpty('equip4')) return 'equip4';
                                    if (list.includes('equip5') && player.isEmpty('equip5')) return 'equip5';
                                    if (list.includes('equip2') && player.isEmpty('equip2')) return 'equip2';
                                    return list.randomGet();
                                };
                                ('step 1');
                                player.disableEquip(result.control);
                                ('step 2');
                                var Y = player.countDisabled();
                                target.damage(Y);
                                player.draw(Y);
                            },
                        },
                        hm_zhujian: {
                            intro: {
                                name2: '坚',
                                content: '目前拥有#个<坚>,受到的下一次伤害-#',
                            },
                            audio: 'ext:好名的世界/audio:2',
                            trigger: {
                                global: 'roundStart',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt2('hm_zhujian')).set('ai', function (target) {
                                    return get.attitude(player, target);
                                });
                                ('step 1');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    for (var i = 1; i < 7; i++) {
                                        if (target.isEmpty(i)) {
                                            var sub = 'equip' + i,
                                                card = get.cardPile(function (card) {
                                                    return get.subtype(card, false) == sub && !get.cardtag(card, 'gifts');
                                                });
                                            if (card) {
                                                target.$gain2(card);
                                                target.equip(card);
                                                break;
                                            }
                                        }
                                    }
                                }
                                ('step 2');
                                if (result.bool) {
                                    event.target = target;
                                    var player = player;
                                    //target.draw();你看你🐴呢
                                    if (target != player) player.addMark('hm_zhujian', 1);
                                }
                            },
                            group: ['hm_zhujian_strong', 'hm_zhujian_bolzhujian'],
                            subSkill: {
                                bolzhujian: {
                                    audio: 'hm_zhujian',
                                    enable: 'phaseUse',
                                    usable: 1,
                                    filterTarget(card, player, target) {
                                        return target.countCards('e');
                                    },
                                    selectTarget: [1, Infinity],
                                    filter(event, player) {
                                        return (
                                            game.countPlayer(function (current) {
                                                return current.countCards('e');
                                            }) >= 1
                                        );
                                    },
                                    multitarget: true,
                                    multiline: true,
                                    content() {
                                        targets.sortBySeat();
                                        game.asyncDraw(targets);
                                    },
                                    ai: {
                                        order: 8,
                                        result: {
                                            target: 1,
                                        },
                                    },
                                },
                                strong: {
                                    audio: 'hm_zhujian',
                                    trigger: {
                                        player: 'damageBegin4',
                                    },
                                    filter(event, player) {
                                        return player.countMark('hm_zhujian') > 0;
                                    },
                                    forced: true,
                                    content() {
                                        var num = player.countMark('hm_zhujian');
                                        trigger.num -= num;
                                        //player.draw(num);
                                        player.removeMark('hm_zhujian', player.countMark('hm_zhujian'));
                                        if (!trigger.source.isLinked()) trigger.source.link();
                                    },
                                },
                            },
                        },
                        hm_duansuo: {
                            audio: 'ext:好名的世界/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return target.isLinked();
                            },
                            selectTarget: [1, Infinity],
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current.isLinked();
                                });
                            },
                            content() {
                                'step 0';
                                if (event.targets.length == 1) {
                                    player.chooseControlList(['造成火焰伤害', '解除铁索连环'], true);
                                } else if (event.targets.length != 1) {
                                    target.link();
                                }
                                ('step 1');
                                if (result.index == 0) {
                                    if (target.countCards('h') > 0) {
                                        target.damage(1, 'fire');
                                    }
                                    if (target.countCards('h') == 0) {
                                        target.damage(2, 'fire');
                                    }
                                } else target.link();
                            },
                        },
                        hm_fuzhu: {
                            trigger: {
                                global: 'damageSource',
                            },
                            filter(event, player) {
                                return event.source != player && event.card && event.card.name == 'sha';
                            },
                            usable: 1,
                            logTarget: 'source',
                            content() {
                                var target = trigger.source;
                                target.draw();
                                target.addTempSkill('hm_fuzhu_1');
                                target.addMark('hm_fuzhu_1', 1);
                                if (get.itemtype(trigger.cards) == 'cards') {
                                    player.draw();
                                }
                            },
                            subSkill: {
                                1: {
                                    marktext: '策',
                                    intro: {
                                        name: '策',
                                        content: '使用【杀】的次数上限+#',
                                    },
                                    mod: {
                                        cardUsable(card, player, num) {
                                            if (card.name == 'sha') return num + player.countMark('hm_fuzhu_1');
                                        },
                                    },
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    forced: true,
                                    charlotte: true,
                                    content() {
                                        player.removeMark('hm_fuzhu_1', player.countMark('hm_fuzhu_1'));
                                    },
                                    popup: false,
                                },
                            },
                        },
                        hm_zhangjun: {
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            content() {
                                var num = [1, 2, 3].randomGet();
                                if (num == 1) player.addSkill('hm_zhangjun_1');
                                if (num == 2) player.addSkill('hm_zhangjun_2');
                                if (num == 3) player.addSkill('hm_zhangjun_7');
                                if (num == 1) {
                                    var num = [1, 2].randomGet();
                                    if (num == 1) player.addSkill('hm_zhangjun_2');
                                    if (num == 2) player.addSkill('hm_zhangjun_7');
                                    event.finish();
                                }
                                if (num == 2) {
                                    var num = [1, 2].randomGet();
                                    if (num == 1) player.addSkill('hm_zhangjun_1');
                                    if (num == 2) player.addSkill('hm_zhangjun_7');
                                    event.finish();
                                }
                                if (num == 3) {
                                    var num = [1, 2].randomGet();
                                    if (num == 1) player.addSkill('hm_zhangjun_1');
                                    if (num == 2) player.addSkill('hm_zhangjun_2');
                                    event.finish();
                                }
                            },
                            subSkill: {
                                1: {
                                    name: '连环',
                                    description: '出牌阶段限一次,你可选择两名角色,标记为A和B.当A对B造成伤害后,A可弃置B一张牌,其可选择一名角色,令其摸一张牌.A对B使用牌无距离限制.此效果持续到A回合结束',
                                    audio: 'ext:好名的世界/audio:2',
                                    enable: 'phaseUse',
                                    usable: 1,
                                    selectTarget: 2,
                                    filterTarget: 2,
                                    multitarget: true,
                                    targetprompt: ['A(得增益)', 'B(得减益)'],
                                    content() {
                                        'step 0';
                                        var target = targets[0];
                                        target.addTempSkill('hm_zhangjun_4', { player: 'phaseAfter' });
                                        target.addMark('hm_zhangjun_4', 1);
                                        ('step 1');
                                        targets[1].addTempSkill('hm_zhangjun_5');
                                        targets[1].addMark('hm_zhangjun_5', 1);
                                    },
                                },
                                2: {
                                    name: '统军',
                                    description: '准备阶段,你可选择任意名角色,令这些角色获得〖自肃〗,其他角色失去〖自肃〗',
                                    trigger: {
                                        player: 'phaseZhunbeiBegin',
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player.chooseTarget([1, game.countPlayer()], get.prompt('hm_zhangjun_2'), '令任意名角色获得技能〖自肃〗').set('ai', function (target) {
                                            return get.attitude(_status.event.player, target);
                                        });
                                        ('step 1');
                                        if (result.targets?.length) {
                                            var targets = result.targets;
                                            targets.add(player);
                                            targets.sortBySeat();
                                            game.countPlayer(function (current) {
                                                if (!targets.includes(current)) current.removeSkill('hm_zhangjun_3');
                                                else {
                                                    current.addSkill('hm_zhangjun_3');
                                                }
                                            });
                                        }
                                    },
                                },
                                3: {
                                    name: '自肃',
                                    description: '出牌阶段开始时,你可进行<整肃>,若成功,所有拥有〖自肃〗的角色摸一张牌并失去〖自肃〗',
                                    trigger: {
                                        player: 'phaseUseBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return !player.hasSkill('zhengsu');
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseButton([get.prompt('hm_zhangjun_3'), [['zhengsu_leijin', 'zhengsu_bianzhen', 'zhengsu_mingzhi'], 'vcard']]);
                                        ('step 1');
                                        if (result.bool) {
                                            player.addTempSkill('hm_zhangjun_6');
                                            var name = result.links[0][2];
                                            player.addTempSkill('zhengsu', { player: 'phaseDiscardAfter' });
                                            player.addTempSkill(name, { player: 'phaseDiscardAfter' });
                                            player.popup(name, 'thunder');
                                        }
                                    },
                                },
                                4: {
                                    marktext: 'A',
                                    intro: {
                                        name: 'A',
                                        content: '好名:这个人负责打要挨打的人',
                                    },
                                    mod: {
                                        targetInRange(card, player, target) {
                                            if (target.hasMark('hm_zhangjun_5')) return true;
                                        },
                                    },
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        var target = event.player;
                                        return target.hasSkill('hm_zhangjun_5');
                                    },
                                    content() {
                                        'step 0';
                                        var target = trigger.player;
                                        player.discardPlayerCard(target, 'he', true);
                                        ('step 1');
                                        player.chooseTarget('选择一名角色,令其摸一张牌').set('ai', function (target) {
                                            return get.attitude(player, target);
                                        });
                                        ('step 2');
                                        if (result.targets?.length) {
                                            var target = result.targets[0];
                                            target.draw();
                                        } else {
                                            event.finish();
                                        }
                                    },
                                },
                                5: {
                                    marktext: 'B',
                                    intro: {
                                        name: 'B',
                                        content: '好名:这个人要挨打',
                                    },
                                },
                                6: {
                                    trigger: {
                                        player: ['drawAfter', 'recoverAfter'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.getParent(2).name == 'zhengsu';
                                    },
                                    mark: true,
                                    logTarget(event, player) {
                                        return game
                                            .filterPlayer(function (current) {
                                                return current != player && current.hasSkill('hm_zhangjun_3', null, null, false);
                                            })
                                            .sortBySeat();
                                    },
                                    content() {
                                        'step 0';
                                        var list = game.filterPlayer(function (current) {
                                            return current.hasSkill('hm_zhangjun_3', null, null, false);
                                        });
                                        if (list.length) {
                                            if (list.length == 1) {
                                                list[0].draw();
                                            } else {
                                                game.asyncDraw(list);
                                            }
                                        }
                                        ('step 1');
                                        var list = game.filterPlayer(function (current) {
                                            return current.hasSkill('hm_zhangjun_3', null, null, false);
                                        });
                                        game.countPlayer(function (current) {
                                            if (list.includes(current)) current.removeSkill('hm_zhangjun_3');
                                        });
                                    },
                                },
                                7: {
                                    name: '智勇',
                                    description: '结束阶段或当你受到伤害后,你可令一名角色摸一张牌,若此角色不为你自己,你可获得其区域内的一张牌',
                                    trigger: {
                                        player: ['phaseJieshuBegin', 'damageEnd'],
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player.chooseTarget('选择一名角色,令其摸一张牌').set('ai', function (target) {
                                            return get.attitude(player, target);
                                        });
                                        ('step 1');
                                        if (result.targets?.length) {
                                            var target = result.targets[0];
                                            target.draw();
                                            if (target != player) {
                                                player.gainPlayerCard(target, 'hej');
                                                player.draw();
                                            }
                                        } else {
                                            event.finish();
                                        }
                                    },
                                },
                            },
                        },
                        hm_zhongjian: {
                            charlotte: true,
                            trigger: {
                                player: 'dieBegin',
                            },
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                return !game.hasPlayer(function (current) {
                                    return current.name == 'hm_murongchui' || current.name2 == 'hm_murongchui';
                                });
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(lib.filter.notMe, '终荐:是否令一名其他角色选择是否将其武将牌替换为<慕容垂>并令其摸三张牌？').set('ai', function (target) {
                                    return get.attitude(_status.event.player, target) - 3;
                                });
                                ('step 1');
                                if (!result.bool) {
                                    event.finish();
                                    return;
                                }
                                var target = result.targets[0];
                                event.target = target;
                                player.line(target, 'fire');
                                target.hp = target.maxHp;
                                target.chooseBool('终荐:慕容恪在临终时向燕王举荐了你,你是否将自己的一张武将牌替换为<慕容垂>');
                                ('step 2');
                                if (result.bool) {
                                    if (target.name2 != undefined) {
                                        target.chooseControl(target.name1, target.name2).set('prompt', '请选择要更换的武将牌');
                                    } else event._result = { control: target.name };
                                } else event.goto(4);
                                ('step 3');
                                target.reinit(result.control, 'hm_murongchui');
                                target.addSkill('hm_zhangjun_2');
                                if (target.name == 'hm_murongchui' && target.group != 'hm_yan') {
                                    target.changeGroup('hm_yan', false);
                                }
                                if (_status.characterlist) {
                                    _status.characterlist.add(result.control);
                                    _status.characterlist.remove('hm_murongchui');
                                    target.draw(3);
                                }
                            },
                        },
                        hm_yonglve: {
                            group: ['hm_yonglve_1', 'hm_yonglve_2', 'hm_yonglve_3', 'hm_yonglve_4'],
                            subSkill: {
                                1: {
                                    marktext: '基',
                                    intro: {
                                        name: '基',
                                        content: '基本牌不可触发〖勇略〗',
                                    },
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (!player.isPhaseUsing() || player.countMark('hm_yonglve_1') > 0) return false;
                                        return get.type(event.card, false) == 'basic';
                                    },
                                    content() {
                                        player.draw();
                                        if (
                                            !player.getHistory('sourceDamage', function (evt) {
                                                return evt.card == trigger.card;
                                            }).length
                                        ) {
                                            player.addMark('hm_yonglve_1', 1);
                                        }
                                    },
                                },
                                2: {
                                    marktext: '锦',
                                    intro: {
                                        name: '锦',
                                        content: '锦囊牌不可触发〖勇略〗',
                                    },
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (!player.isPhaseUsing() || player.countMark('hm_yonglve_2') > 0) return false;
                                        return get.type(event.card, false) == 'trick';
                                    },
                                    content() {
                                        player.draw();
                                        if (
                                            !player.getHistory('sourceDamage', function (evt) {
                                                return evt.card == trigger.card;
                                            }).length
                                        ) {
                                            player.addMark('hm_yonglve_2', 1);
                                        }
                                    },
                                },
                                3: {
                                    marktext: '装',
                                    intro: {
                                        name: '装',
                                        content: '装备牌不可触发〖勇略〗',
                                    },
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (!player.isPhaseUsing() || player.countMark('hm_yonglve_3') > 0) return false;
                                        return get.type(event.card, false) == 'equip';
                                    },
                                    content() {
                                        player.draw();
                                        if (
                                            !player.getHistory('sourceDamage', function (evt) {
                                                return evt.card == trigger.card;
                                            }).length
                                        ) {
                                            player.addMark('hm_yonglve_3', 1);
                                        }
                                    },
                                },
                                4: {
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    firstDo: true,
                                    forced: true,
                                    content() {
                                        player.removeMark('hm_yonglve_1', player.countMark('hm_yonglve_1'));
                                        player.removeMark('hm_yonglve_2', player.countMark('hm_yonglve_2'));
                                        player.removeMark('hm_yonglve_3', player.countMark('hm_yonglve_3'));
                                    },
                                },
                            },
                        },
                        hm_xiaojun: {
                            derivation: ['hm_jun'],
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget: (card, player, target) => target.countMark('hm_yongzhan') < 1,
                            content() {
                                'step 0';
                                var cards = [];
                                var card1 = get.cardPile(function (card) {
                                    return get.type(card) == 'basic' && !cards.includes(card);
                                });
                                if (card1) cards.push(card1);
                                if (cards) target.gain(cards, 'gain2');
                                ('step 1');
                                target.addMark('hm_xiaojun_1', 1);
                                target.addSkill('hm_xiaojun_1');
                                ('step 2');
                                target.chooseToUse(function (card) {
                                    if (!lib.filter.cardEnabled(card, _status.event.player, _status.event)) {
                                        return false;
                                    }
                                    var type = get.type(card, 'trick');
                                    return type == 'basic' || type == 'trick' || type == 'equip';
                                }, '是否使用一张手牌？');
                            },
                            subSkill: {
                                1: {
                                    mod: {
                                        cardUsable(card, player, num) {
                                            if (card.name == 'sha') return (num += 1);
                                        },
                                        maxHandcard(player, num) {
                                            return (num += 1);
                                        },
                                    },
                                    marktext: '军',
                                    intro: {
                                        name: '军',
                                        content: '使用【杀】的次数上限与手牌上限+1,使用【杀】造成伤害后,摸1+#张牌',
                                    },
                                    trigger: {
                                        source: 'damageSource',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.parent.name == 'sha' && player.countMark('hm_xiaojun_1') > 0;
                                    },
                                    check(event, player) {
                                        return player.isDamaged();
                                    },
                                    content() {
                                        'step 0';
                                        player.judge(function (card) {
                                            return get.color(card) == 'red' ? 1 : -1;
                                        });
                                        ('step 1');
                                        var num = player.countMark('hm_xiaojun_1');
                                        if (result.bool) {
                                            player.draw(num + 1);
                                        } else {
                                            player.draw();
                                            player.recover();
                                        }
                                        ('step2');
                                        player.removeMark('hm_xiaojun_1', player.countMark('hm_xiaojun_1'));
                                        player.removeSkill('hm_xiaojun_1');
                                    },
                                },
                            },
                        },
                        hm_jun: {},
                        hm_tongxuan: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            round: 1,
                            content() {
                                'step 0';
                                player.chooseTarget('选择一名角色,令其摸三张牌', true).set('ai', function (target) {
                                    return get.attitude(player, target);
                                });
                                ('step 1');
                                event.target = result.targets[0];
                                if (result.bool) {
                                    if (event.target != player) player.say(['此人紫气随身,必有大气运!', '得此天机,可化险为夷!'].randomGet());
                                    if (event.target == player) player.say(['自我感觉良好', '看什么看,我可没有作弊给自己算个好卦'].randomGet());
                                    event.target.draw(3);
                                    event.target.addMark('hm_tongxuan_1', 1);
                                    event.target.addSkill('hm_tongxuan_1');
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                player.chooseTarget(
                                    '选择一名其他角色,令其弃置一张牌',
                                    function (card, player, target) {
                                        return player != target;
                                    },
                                    function (target) {
                                        var player = get.player();
                                        return -get.attitude(player, target);
                                    }
                                );
                                ('step 3');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    target.chooseToDiscard('he', 1, true);
                                    target.addMark('hm_tongxuan_2', 1);
                                    target.addSkill('hm_tongxuan_2');
                                    if (target.countMark('hm_tongxuan_2') < 2) player.say(['君厄运缠身,或许命不久矣', '君有血光之灾,此有锦囊若干......咳咳'].randomGet());
                                    if (target.countMark('hm_tongxuan_2') > 1) player.say(['大灾兆!', '你看起来运气不会太好,v我50,给你解难', '看什么看,这卦绝对正确'].randomGet());
                                } else {
                                    event.finish();
                                }
                            },
                            group: ['hm_tongxuan_3', 'hm_tongxuan_roundcount'],
                            subSkill: {
                                1: {
                                    marktext: '福',
                                    intro: {
                                        name: '天机',
                                        content: '得此天机者,化险为夷,体力值减少时,防止之.还剩#次',
                                    },
                                    trigger: {
                                        player: ['damageBefore', 'loseHpBefore', 'loseMaxHpBefore'],
                                    },
                                    firstDo: true,
                                    forced: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        return event.player.hasMark('hm_tongxuan_1');
                                    },
                                    content() {
                                        player.removeMark('hm_tongxuan_1', 1);
                                        trigger.cancel();
                                    },
                                },
                                2: {
                                    marktext: '霉',
                                    intro: {
                                        name: '天机',
                                        content: '得此天机者,厄运缠身,雪上加霜,受到伤害时,此伤害+1.还剩#次',
                                    },
                                    trigger: {
                                        player: 'damageBegin1',
                                    },
                                    forced: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        return event.player.hasMark('hm_tongxuan_2');
                                    },
                                    content() {
                                        trigger.num++;
                                        player.removeMark('hm_tongxuan_2', 1);
                                    },
                                },
                                3: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    forced: true,
                                    preHidden: true,
                                    content() {
                                        'step 0';
                                        player.chooseToGuanxing(3);
                                        ('step 1');
                                        event.card = get.bottomCards()[0];
                                        var content = ['牌堆底的一张牌', [event.card]];
                                        game.log(player, '观看了牌堆底的一张牌');
                                        player.chooseControl('ok').set('dialog', content);
                                        ('step 2');
                                        player
                                            .chooseTarget('选择获得此牌的角色')
                                            .set('ai', function (target) {
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
                                            })
                                            .set('du', event.card.name == 'du')
                                            .set('same', event.same);
                                        ('step 3');
                                        if (result.targets?.length) {
                                            event.target = result.targets[0];
                                            player.line(event.target, 'green');
                                            player.give(card, event.target, true);
                                        } else ui.cardPile.appendChild(event.card);
                                        game.updateRoundNumber();
                                        ('step 4');
                                        if (result.bool) {
                                            if (event.target.getCards('h').includes(card) && get.type(card) == 'equip') {
                                                event.target.chooseUseTarget(card);
                                            }
                                        }
                                    },
                                    ai: {
                                        threaten: 1.2,
                                    },
                                },
                            },
                        },
                        hm_yigua: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player, target) {
                                return player.maxHp > 0 && player.countCards('he') > 0 && target != player;
                            },
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            selectTarget() {
                                return [1];
                            },
                            check(card) {
                                return 2 * (_status.event.player.maxHp + 2) - get.value(card);
                            },
                            content() {
                                'step 0';
                                player.showHandcards();
                                player.chooseToDiscard('he', 1, true);
                                ('step 1');
                                if (!target.countCards('he')) event._result = { bool: false };
                                else
                                    target.chooseCard('he', '你可以交给' + get.translation(player) + '一张牌,' + get.translation(player) + '会给你算一个好卦.如果不给' + get.translation(player) + '一张牌,那么他会算出个什么来你懂的').set('ai', function (card) {
                                        var player = _status.event.player,
                                            target = _status.event.parent.player,
                                            val = get.value(card);
                                        if (get.attitude(player, target) > 0) {
                                            if (card.name == 'sha' && target.hasValueTarget(card)) return 30 - val;
                                            return 20 - val;
                                        }
                                        return -val;
                                    });
                                ('step 2');
                                if (result.bool) {
                                    target.addMark('hm_tongxuan_1', 1);
                                    target.addSkill('hm_tongxuan_1');
                                    player.gain(result.cards, target, 'giveAuto');
                                    target.draw();
                                } else {
                                    target.addMark('hm_tongxuan_2', 1, false);
                                    target.addSkill('hm_tongxuan_2');
                                }
                            },
                            ai: {
                                threaten: 2.4,
                                order: 3.6,
                                result: {
                                    player(player, target) {
                                        if (get.attitude(target, player) > 0) {
                                            if (
                                                target.countCards('e', function (card) {
                                                    return get.value(card, target) < 0;
                                                })
                                            )
                                                return 3;
                                            return Math.sqrt(target.countCards('he'));
                                        }
                                        if (
                                            target.mayHaveShan() &&
                                            player.countCards('hs', function (card) {
                                                return !ui.selected.cards.includes(card) && card.name == 'sha' && player.canUse(card, target) && get.effect(target, card, player, player) != 0;
                                            })
                                        )
                                            return -Math.sqrt(Math.abs(get.attitude(player, target))) / 2;
                                        return 0.1;
                                    },
                                },
                            },
                        },
                        hm_yinhuo: {
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('hm_yinhuo'), function (card, player, target) {
                                        return player != target;
                                    })
                                    .set('ai', function (target) {
                                        var att = get.attitude(_status.event.player, target);
                                        if (target.countCards('he') == 0) return 0;
                                        if (att < 0) return -att * 2;
                                        return att / 3;
                                    });
                                ('step 1');
                                var target = result.targets[0];
                                player.storage.yinhuo_target = target;
                                var num = target.countCards('h');
                                event.num = num;
                                if (result.bool) {
                                    target.addMark('hm_yinhuo_2', num);
                                    player.draw(2);
                                    target.draw();
                                } else event.finish();
                                ('step 2');
                                player.addTempSkill('hm_yinhuo_1');
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    forced: true,
                                    preHidden: true,
                                    filter(event, player) {
                                        return game.hasPlayer(function (current) {
                                            return current.hasMark('hm_yinhuo_2');
                                        });
                                    },
                                    content() {
                                        var target = player.storage.yinhuo_target;
                                        var card = { name: 'sha' };
                                        if (target.hasMark('hm_yinhuo_2') && target.countCards('h') > target.countMark('hm_yinhuo_2')) {
                                            if (target.canUse(card, player, false)) target.useCard(card, player, false);
                                        }
                                        target.removeMark('hm_yinhuo_2', target.countMark('hm_yinhuo_2'));
                                    },
                                },
                                2: {
                                    marktext: '祸',
                                    intro: {
                                        name: '隐祸',
                                        content: '记录牌数为#',
                                    },
                                },
                            },
                        },
                        hm_kaituo: {
                            derivation: ['hm_kaituo_2', 'hm_kaituo_8'],
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            content() {
                                'step 0';
                                event.current = player.next;
                                ('step 1');
                                if (!event.current.countCards('he')) event.goto(3);
                                else
                                    event.current.chooseCard('交给' + get.translation(player) + '一张牌', 'he', true).set('ai', function (card) {
                                        var evt = _status.event.parent;
                                        if (get.attitude(_status.event.player, evt.player) > 2) {
                                            if (card.name == 'shan') return 120;
                                            if (card.name == 'tao') return 110;
                                        }
                                        return 100 - get.value(card);
                                    });
                                ('step 2');
                                if (result.cards?.length) {
                                    player.gain(result.cards, event.current, 'giveAuto');
                                }
                                ('step 3');
                                event.current = event.current.next;
                                if (event.current != player) event.goto(1);
                                ('step 4');
                                var num = Math.floor(player.countCards('h') / 2);
                                var X = player.countCards('h');
                                var Y = X - 5;
                                if (num > 0 && X / 2 > 5) player.chooseToDiscard('h', num, true);
                                if (Y > 0 && X / 2 <= 5) player.chooseToDiscard('h', Y, true); //QQQ
                            },
                            group: ['hm_kaituo_3', 'hm_kaituo_7'],
                            subSkill: {
                                1: {
                                    mod: {
                                        ignoredHandcard(card, player) {
                                            if (get.type(card) == 'basic') return true;
                                        },
                                        cardDiscardable(card, player, name) {
                                            if (name == 'phaseDiscard' && get.type(card) == 'basic') return false;
                                        },
                                        targetInRange(card) {
                                            if (get.type(card) == 'basic') return true;
                                        },
                                        cardEnabled(card, player) {
                                            if (card.name == 'jiu' && !player.isDying()) return false;
                                        },
                                        cardSavable(card, player) {
                                            if (card.name == 'jiu' && !player.isDying()) return false;
                                        },
                                    },
                                    marktext: '拓',
                                    intro: {
                                        name: '拓',
                                        content: '本回合已造成了#点伤害',
                                    },
                                    trigger: {
                                        source: 'damageSource',
                                    },
                                    filter(event, player) {
                                        if (!event.player.hasMark('hm_kaituo_2')) {
                                            var evt = event.getParent('phaseUse');
                                            return evt && evt.player == player;
                                        }
                                        return false;
                                    },
                                    forced: true,
                                    content() {
                                        var num = trigger.num;
                                        player.addMark('hm_kaituo_1', num);
                                    },
                                },
                                2: {
                                    name: '拒怠',
                                    description: '你不可于濒死阶段外使用【酒】,你的基本牌无距离限制且不计入你的手牌上限.结束阶段,你摸X张牌,若X大于1,你回复一点体力并获得一个额外的出牌阶段,若X大于2,你本次多摸两张牌.(X为本回合你造成的伤害数)',
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    filter(event, player) {
                                        return event.player.hasMark('hm_kaituo_1');
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        event.num = player.countMark('hm_kaituo_1');
                                        player.removeMark('hm_kaituo_1', player.countMark('hm_kaituo_1'));
                                        player.addMark('hm_dengfeng');
                                        ('step 1');
                                        var num = event.num;
                                        if (num > 1) {
                                            var next = trigger.player.phaseUse();
                                            event.next.remove(next);
                                            trigger.getParent('phase').next.push(next);
                                            player.recover();
                                            player.addMark('hm_kaituo_2');
                                        }
                                        if (num > 2) player.draw(num + 2);
                                        if (num < 3) player.draw(num);
                                    },
                                },
                                3: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player.hasMark('hm_kaituo_1');
                                    },
                                    content() {
                                        player.removeMark('hm_kaituo_1', player.countMark('hm_kaituo_1'));
                                    },
                                },
                                4: {
                                    name: '除暴',
                                    description: "新一轮开始时,你令所有<span class='texiaotext' style='color: #CD0000'>于上轮造成过至少两点伤害</span>的其他角色非锁定技失效,其中体力值大于2的角色失去一点体力,手牌数大于2的角色弃置一张手牌",
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        event.current = player.next;
                                        player.removeMark('hm_kaituo_6', player.countMark('hm_kaituo_6'));
                                        ('step 1');
                                        event.target = event.current;
                                        var target = event.target;
                                        if (!target.countMark('hm_kaituo_5')) event.goto(2);
                                        else {
                                            target.addTempSkill('fengyin', { player: 'die' });
                                            player.addMark('hm_kaituo_6');
                                            if (target.hp > 2) {
                                                target.loseHp();
                                            }
                                            var num = target.countCards('h');
                                            if (num > 0) {
                                                target.chooseToDiscard('h', true);
                                            }
                                            target.removeMark('hm_kaituo_5', target.countMark('hm_kaituo_5'));
                                        }
                                        ('step 2');
                                        event.current = event.current.next;
                                        event.target.removeMark('hm_kaituo_5', event.target.countMark('hm_kaituo_5'));
                                        if (event.current != player) event.goto(1);
                                    },
                                },
                                5: {
                                    marktext: '祸',
                                    intro: {
                                        name: '暴祸',
                                        content: '本轮已造成了#点伤害,你的暴行不会再持续多久',
                                    },
                                    name: '暴祸',
                                    description: '你的罪孽已被记录,你的罪恶将由我们的王处置',
                                    trigger: {
                                        source: 'damageSource',
                                    },
                                    forced: true,
                                    content() {
                                        var num = trigger.num;
                                        player.addMark('hm_kaituo_5', num);
                                    },
                                },
                                6: {
                                    name: '灭君',
                                    description: '出牌阶段限一次,你可弃置一张牌,视为使用一张无距离与次数限制且不计入使用次数的【杀】,若此【杀】造成了伤害,你摸Y+1张牌.(Y为场上因〖除祸〗而非锁定技失效的角色)',
                                    enable: 'phaseUse',
                                    usable: 1,
                                    filter(event, player) {
                                        return player.countCards('he');
                                    },
                                    filterTarget(card, player, target) {
                                        return target != player && player.canUse('sha', target, false);
                                    },
                                    filterCard: true,
                                    position: 'he',
                                    check(card) {
                                        return 7 - get.value(card);
                                    },
                                    content() {
                                        'step 0';
                                        player.useCard({ name: 'sha' }, target, false);
                                        ('step 1');
                                        var num = player.countMark('hm_kaituo_6');
                                        player.addMark('hm_dengfeng');
                                        if (
                                            player.hasHistory('sourceDamage', function (evt) {
                                                var card = evt.card;
                                                if (!card || card.name != 'sha') return false;
                                                var evtx = evt.getParent('useCard');
                                                return evtx.card == card && evtx.parent == event;
                                            })
                                        )
                                            player.draw(1 + num);
                                    },
                                    ai: {
                                        order(item, player) {
                                            return get.order({ name: 'sha' }, player) - 1;
                                        },
                                        result: {
                                            target(player, target) {
                                                if (!ui.selected.cards.length) return 0;
                                                return get.effect(target, { name: 'sha' }, player, target);
                                            },
                                        },
                                    },
                                },
                                7: {
                                    firstDo: true,
                                    trigger: {
                                        global: 'phaseBefore',
                                        player: 'enterGame',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.name != 'phase' || game.phaseNumber == 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseControlList(['拒怠', '除祸'], true);
                                        ('step 1');
                                        if (result.index == 0) {
                                            player.addSkill('hm_kaituo_1');
                                            player.addSkill('hm_kaituo_2');
                                            player.addSkill('hm_kaituo_3');
                                            event.finish();
                                        } else if (result.index == 1) {
                                            player.addSkill('hm_kaituo_4');
                                            player.addSkill('hm_kaituo_6');
                                        }
                                        ('step 2');
                                        event.targets = game.filterPlayer(function (current) {
                                            return current != player;
                                        });
                                        event.targets.sort(lib.sort.seat);
                                        for (var i = 0; i < event.targets.length; i++) {
                                            event.targets[i].addSkill('hm_kaituo_5');
                                        }
                                    },
                                },
                                8: {
                                    name: '除祸',
                                    description: "新一轮开始时,你令所有<span class='texiaotext' style='color: #CD0000'>于上轮造成过至少两点伤害</span>的其他角色非锁定技失效,其中体力值大于2的角色失去一点体力,手牌数大于2的角色弃置一张手牌.出牌阶段限一次,你可弃置一张牌,视为使用一张无距离与次数限制且不计入使用次数的【杀】,若此【杀】造成了伤害,你摸Y+1张牌.(Y为场上因〖除祸〗而非锁定技失效的角色)",
                                },
                            },
                        },
                        hm_xin: {
                            enable: 'phaseUse',
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('hm_xin'), '选择两名角色a,b建立二元序偶<a,b>,或仅选择一名角色,建立二元序偶<a,a>', [1, 2], function (card, player, target) {
                                        if (ui.selected.targets.length) return true;
                                        return target != player && (!player.storage.hm_xin || !player.storage.hm_xin.includes(target));
                                    })
                                    .set('complexTarget', true)
                                    .set('complexSelect', true)
                                    .set('targetprompt', ['第一元素', '第二元素'])
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        if (!ui.selected.targets.length) {
                                            if (target.getEnemies().length == 1) return 2 + Math.random();
                                            return 1 + Math.random();
                                        }
                                        var targetx = ui.selected.targets[0];
                                        if (targetx.getEnemies().includes(target) && targetx.inRange(target)) return Math.random() - 0.5;
                                        return 0;
                                    }).animate = false;
                                ('step 1');
                                if (result.bool && result.targets.length) {
                                    var targets = result.targets;
                                    if (targets.length == 1) targets.push(targets[0]);
                                    if (!player.storage.hm_xin) player.storage.hm_xin = [];
                                    if (!player.storage.hm_xin2) player.storage.hm_xin2 = [];
                                    player.storage.hm_xin.push(targets[0]);
                                    player.storage.hm_xin2.push(targets[1]);
                                    player.markSkill('hm_xin');
                                }
                            },
                            intro: {
                                content(storage, player) {
                                    if ((player == game.me || player.isUnderControl()) && !game.observe) {
                                        var str = '本轮技能失效者为={ ';
                                        for (var i = 0; i < storage.length; i++) {
                                            str += '<' + get.translation(storage[i]) + '>';
                                            if (i < storage.length - 1) str += ', ';
                                        }
                                        str += ' }';
                                        return str;
                                    }
                                    return '已指定为目标';
                                },
                            },
                            onremove(player) {
                                delete player.storage.hm_xin;
                                delete player.storage.hm_xin2;
                            },
                        },
                        hm_dengfeng: {
                            derivation: ['hm_juesheng', 'hm_juetao'],
                            juexingji: true,
                            trigger: {
                                player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'],
                            },
                            marktext: '登',
                            intro: {
                                name: '登峰',
                                content: '已经发动#次',
                            },
                            filter(event, player) {
                                return player.hp < 3 && game.dead.length && player.countMark('hm_dengfeng') > 2;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.loseMaxHp();
                                player.hp = player.maxHp;
                                player.addSkill('hm_juesheng');
                                player.addSkill('hm_juetao');
                                game.log(player, '获得了技能', '#g【绝生】和【决讨】');
                                player.awakenSkill('hm_dengfeng');
                                player.removeMark('hm_dengfeng', player.countMark('hm_dengfeng'));
                                ('step 1');
                                event.targets = game.filterPlayer(function (current) {
                                    return current != player;
                                });
                                event.targets.sort(lib.sort.seat);
                                for (var i = 0; i < event.targets.length; i++) {
                                    event.targets[i].addSkill('hm_juesheng_2');
                                }
                                ('step 2');
                                if (player.hasSkill('hm_kaituo')) {
                                    player.awakenSkill('hm_kaituo');
                                }
                                if (player.hasSkill('hm_kaituo_1')) {
                                    player.removeSkill('hm_kaituo_1');
                                    if (player.hasSkill('hm_kaituo_2')) player.removeSkill('hm_kaituo_2');
                                    event.finish();
                                }
                                ('step 3');
                                if (player.hasSkill('hm_kaituo_4')) {
                                    if (player.hasSkill('hm_qianyin_4')) player.removeSkill('hm_kaituo_4');
                                    if (player.hasSkill('hm_kaituo_6')) player.removeSkill('hm_kaituo_6');
                                }
                                ('step 4');
                                event.current = player.next;
                                player.removeMark('hm_kaituo_6', player.countMark('hm_kaituo_6'));
                                ('step 5');
                                event.target = event.current;
                                var target = event.target;
                                if (!target.hasSkill('hm_kaituo_5')) event.goto(6);
                                else {
                                    target.removeSkill('hm_kaituo_5');
                                    target.removeMark('hm_kaituo_5', target.countMark('hm_kaituo_5'));
                                }
                                ('step 6');
                                event.current = event.current.next;
                                if (event.current != player) event.goto(5);
                            },
                            ai: {
                                threaten(player, target) {
                                    if (target.hp <= 3) return 2;
                                    return 0.5;
                                },
                                maixie: true,
                                effect: {
                                    target(card, player, target) {
                                        if (!target.hasFriend()) return;
                                        if (get.tag(card, 'damage') <= 2 && game.dead.length && target.hp >= 3 && !target.isTurnedOver() && _status.currentPhase != target && get.distance(_status.currentPhase, target, 'absolute') <= 3) return [0.5, 1];
                                    },
                                },
                            },
                            markimage: 'extension/OLUI/image/player/marks/juexingji.png',
                        },
                        hm_juetao: {
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            init(player) {
                                player.addMark('hm_juetao');
                                player.storage.hm_juetao = false;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt2('hm_juetao'), '减少一点体力上限,回复一点体力,对一名其他角色造成一点伤害', lib.filter.notMe).set('ai', function (target) {
                                    var player = _status.event.player;
                                    if (player.maxHp < 4) return -1;
                                    if (player.maxHp - player.hp > player.hp - 1) return 1;
                                    if (target.hp < 2) return 1;
                                    return get.damageEffect(target, player, player);
                                });
                                ('step 1');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    player.loseMaxHp();
                                    player.recover();
                                    player.addTempSkill('hm_juetao_1');
                                    target.addSkill('hm_juetao_2');
                                    if (player.storage.hm_juetao == false) target.damage();
                                    if (player.storage.hm_juetao == true) target.damage(2);
                                    target.addMark('hm_juetao_2');
                                }
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'dying',
                                    },
                                    forced: true,
                                    popup: false,
                                    charlotte: true,
                                    filter(event, player) {
                                        return event.player.isAlive() && event.reason && event.reason.parent.name == 'hm_juetao';
                                    },
                                    content() {
                                        player.draw(2);
                                    },
                                },
                                2: {
                                    marktext: '讨',
                                    intro: {
                                        name: '讨',
                                        content: '本局游戏对<符坚>使用牌无距离限制',
                                    },
                                    mod: {
                                        targetInRange(card, player, target) {
                                            if (target.hasMark('hm_juetao')) return true;
                                        },
                                    },
                                },
                            },
                        },
                        hm_juesheng: {
                            trigger: {
                                global: 'dieAfter',
                            },
                            forced: true,
                            content() {
                                var target = trigger.player;
                                player.gainMaxHp();
                                player.storage.hm_juetao = true;
                                if (target.storage.hm_juesheng1 == true) player.draw(2);
                                if (target.storage.hm_juesheng2 == true) player.recover();
                            },
                            ai: {
                                threaten: 1.5,
                            },
                            group: ['hm_juesheng_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        var target = event.player;
                                        return !target.hasMark('hm_juesheng_1') || target != player;
                                    },
                                    content() {
                                        var target = trigger.player;
                                        target.storage.hm_juesheng1 = true;
                                        target.storage.hm_juesheng1_target = player;
                                    },
                                },
                                2: {
                                    mark: true,
                                    intro: {
                                        content(storage, player, skill) {
                                            var tar = '死亡后满足的条件数';
                                            var target = player.storage.hm_juesheng1_target;
                                            if (player.storage.hm_juesheng1 == true) tar += '<br/>被造成过伤害(摸两张牌)';
                                            if (player.storage.hm_juesheng2 == true) tar += '<br/>造成过伤害(回复一点体力)';
                                            return tar;
                                        },
                                    },
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    init(player) {
                                        player.storage.hm_juesheng1 = false;
                                        player.storage.hm_juesheng2 = false;
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        var target = event.player;
                                        return target.hasMark('hm_juesheng') || target != player;
                                    },
                                    content() {
                                        player.storage.hm_juesheng2 = true;
                                    },
                                },
                            },
                        },
                        hm_jijiang: {
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('hm_jijiang'), '令一名角色摸一张牌').set('ai', function (target) {
                                    var player = _status.event.player;
                                    return get.attitude(player, target);
                                });
                                ('step 1');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    var card = get.cardPile(function (card) {
                                        return card.name == 'sha';
                                    });
                                    if (player.storage.hm_fuhan == true) {
                                        if (target != player) player.say(['子龙将军!', '二弟三弟!', '哪位将军,替我拿下此贼!', '尔等敢应战否'].randomGet());
                                        if (target == player) player.say(['大汉单挑王在此', '将军们,看我擒拿此贼!', '来人,护驾!人呢？算了,我自己来', '见识一下真正的气魄吧', '没有实力我怎么和关羽张飞一起战吕布?'].randomGet());
                                    }
                                    target.draw();
                                    target.addMark('hm_jijiang_1');
                                    target.addTempSkill('hm_jijiang_1', { player: 'phaseUseEnd' });
                                    if (card) target.gain(card, 'gain2');
                                }
                                ('step 2');
                                game.updateRoundNumber();
                            },
                            subSkill: {
                                1: {
                                    mod: {
                                        cardUsable(card, player, num) {
                                            if (card.name == 'sha') return num + 1;
                                        },
                                    },
                                },
                            },
                        },
                        hm_fuhan: {
                            derivation: ['hm_jijiang'],
                            audio: 'ext:好名的世界/audio:2',
                            juexingji: true,
                            trigger: {
                                player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'],
                            },
                            init(player) {
                                if (lib.config.extension_好名的世界_LiuBei) player.storage.hm_fuhan = true;
                            },
                            filter(event, player) {
                                var n = player.countCards('he');
                                var tar = player.countMark('hm_qizhan');
                                return n > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                sessionStorage.removeItem('hm_fuhan');
                                if (player.storage.hm_fuhan == true) {
                                    player.say(['胜者为王'].randomGet());
                                }
                                player.removeMark('hm_qizhan', player.countMark('hm_qizhan'));
                                ('step 1');
                                if (player.storage.hm_fuhan == true) {
                                    player.say(['今日起,我即汉中王'].randomGet());
                                }
                                player.draw(3);
                                ('step 2');
                                player.say(['汉室复兴,就在今日!'].randomGet());
                                player.hp = player.maxHp;
                                player.addSkill('hm_jijiang');
                                player.awakenSkill(event.name);
                                player.storage.hm_fuhan = true;
                                var num = player.countCards('j');
                                if (num > 0) player.chooseToDiscard('j', true, num);
                            },
                            markimage: 'extension/OLUI/image/player/marks/juexingji.png',
                        },
                        hm_diwei: {},
                        hm_qizhan: {
                            marktext: '资',
                            intro: {
                                name: '资粮',
                                content: '下一次出战需要#点资粮,快去请糜竺!',
                            },
                            enable: 'phaseUse',
                            filter(event, player) {
                                var num = player.countMark('hm_qizhan');
                                return num <= player.countCards('he');
                            },
                            filterTarget: (card, player, target) => target != player,
                            filterCard: true,
                            position: 'he',
                            selectCard() {
                                var player = _status.event.player,
                                    num = player.countMark('hm_qizhan');
                                var X = num;
                                if (num < 1) X = 0;
                                if (ui.selected.cards.length) return num;
                                return [X, num];
                            },
                            check(card) {
                                return 6 - get.value(card);
                            },
                            prompt() {
                                var player = _status.event.player,
                                    num = player.countMark('hm_qizhan');
                                return '弃置' + num + '张牌并摸一张牌,弃置一名其他角色区域内至多' + num + '张牌(至少为1)';
                            },
                            content() {
                                'step 0';
                                player.draw();
                                player.addMark('hm_qizhan');
                                ('step 1');
                                var num = player.countMark('hm_qizhan') - 1;
                                if (num < 1) num = 1;
                                player.discardPlayerCard('hej', target, [1, num], true);
                            },
                            ai: {
                                basic: {
                                    order: 9,
                                    useful: 5,
                                    value: 5,
                                },
                                result: {
                                    player(player, target) {
                                        var num = player.countMark('hm_qizhan') - 1;
                                        if (num > 0) return -num;
                                    },
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
                                                return 2;
                                        }
                                        var es = target.getCards('e');
                                        var noe = es.length == 0 || target.hasSkillTag('noe');
                                        var noe2 =
                                            es.filter(function (esx) {
                                                return get.value(esx, target) > 0;
                                            }).length == 0;
                                        var noh = nh == 0 || target.hasSkillTag('noh');
                                        if (noh && (noe || noe2)) return 0;
                                        if (att <= 0 && !target.countCards('he')) return 2.5;
                                        return -1.5;
                                    },
                                },
                                tag: {
                                    loseCard: 1,
                                    discard: 1,
                                },
                            },
                        },
                        hm_shashen: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                if (!player.countCards('e')) return false;
                                return !player.getStat('skill').shashen || player.hasSkill('shashen_double');
                            },
                            content() {
                                'step 0';
                                var num = player.countCards('e');
                                player.addMark('hm_shashen', num);
                                player.discard(player.getCards('e'));
                                ('step 1');
                                var num = player.countMark('hm_shashen');
                                if (num > 0) player.draw(num);
                                if (num > 1) event.count = 2;
                                ('step 2');
                                event.count--;
                                ('step 3');
                                var list = [];
                                for (var name of lib.inpile) {
                                    var type = get.type(name);
                                    if (type != 'basic' && type != 'trick') continue;
                                    var card = { name: name };
                                    if (get.tag(card, 'damage') > 0 && player.hasUseTarget(card)) {
                                        list.push([type, '', name]);
                                    }
                                    if (name == 'sha') {
                                        for (var i of lib.inpile_nature) {
                                            card.nature = i;
                                            if (player.hasUseTarget(card)) list.push([type, '', name, i]);
                                        }
                                    }
                                }
                                if (list.length) {
                                    player.chooseButton(['是否视为使用一张伤害牌？', [list, 'vcard']]).set('ai', function (button) {
                                        return _status.event.player.getUseValue({ name: button.link[2] });
                                    });
                                } else event.finish();
                                ('step 4');
                                if (result.links?.length) {
                                    player.chooseUseTarget({ name: result.links[0][2], nature: result.links[0][3] }, true, false);
                                } else event.finish();
                                ('step 5');
                                if (event.count > 0) event.goto(2);
                                ('step 6');
                                player.removeMark('hm_shashen', player.countMark('hm_shashen'));
                            },
                            subSkill: {
                                double: {
                                },
                            },
                            ai: {
                                fireAttack: true,
                                order: 4,
                                result: {
                                    target(player, target) {
                                        if (target.hasSkillTag('nogain')) return 0;
                                        if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
                                            if (target.hasSkillTag('nodu')) return 0;
                                            return -10;
                                        }
                                        if (target.hasJudge('lebu')) return 0;
                                        var nh = target.countCards('h');
                                        var np = player.countCards('h');
                                        if (player.hp == player.maxHp || player.storage.rerende < 0 || player.countCards('h') <= 1) {
                                            if (nh >= np - 1 && np <= player.hp && !target.hasSkill('haoshi')) return 0;
                                        }
                                        return Math.max(1, 5 - nh);
                                    },
                                },
                            },
                        },
                        hm_faitao: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('he') > 0;
                            },
                            content() {
                                'step 0';
                                target.chooseCard('he', '交给' + get.translation(player) + '一张牌', true);
                                target.addTempSkill('hm_faitao_1');
                                ('step 1');
                                player.gain(result.cards, target, 'giveAuto');
                                ('step 2');
                                player.chooseTarget(
                                    function (card, player, target) {
                                        return player != target && !target.hasSkill('hm_faitao_1');
                                    },
                                    function (target) {
                                        var player = get.player();
                                        return -get.attitude(player, target);
                                    }
                                );
                                ('step 3');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    player.useCard({ name: 'sha' }, target, false);
                                } else {
                                    event.finish();
                                }
                                ('step 4');
                                if (event.target.countCards('h') > player.countCards('h')) {
                                    target.chooseToDiscard('h', true);
                                }
                                if (
                                    player.hasHistory('sourceDamage', function (evt) {
                                        var card = evt.card;
                                        if (!card || card.name != 'sha') return false;
                                        var evtx = evt.getParent('useCard');
                                        return evtx.card == card && evtx.parent == event;
                                    })
                                )
                                    player.draw();
                                else player.chooseToDiscard('h', true);
                            },
                            ai: {
                                order: 7,
                                result: {
                                    target: -1.2,
                                },
                            },
                            group: ['hm_faitao_1'],
                            subSkill: {
                                1: {
                                },
                            },
                        },
                        hm_huaiyuan: {
                            derivation: ['hm_huairou'],
                            juexingji: true,
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h') == 0 || player.hp == 1;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('hm_huaiyuan');
                                player.removeSkill('hm_faitao');
                                player.recover(2);
                                player.draw(2);
                                ('step 1');
                                player.addSkill('hm_huairou');
                            },
                        },
                        hm_gongyi: {
                            init(player) {
                                player.addSkill('hm_gongyi_1');
                            },
                            subSkill: {
                                1: {
                                    name: '攻夷',
                                    description: '出牌阶段限一次,你可令一名攻击范围内有你的角色交给你一张牌,你摸一张牌并交给其一张牌且与其进行拼点,若你赢,你视为对其使用一张不计入使用次数的【杀】,你可令其攻击范围内的一名其他角色也成为此【杀】目标.若你没赢,其视为对你使用一张【杀】',
                                    enable: 'phaseUse',
                                    usable: 1,
                                    filterTarget(card, player, target) {
                                        return target.countCards('he') && target != player && target.inRange(player);
                                    },
                                    init(player) {
                                        player.storage.hm_gongyi = false;
                                    },
                                    content() {
                                        'step 0';
                                        target.chooseCard('he', '交给' + get.translation(player) + '一张牌', true);
                                        ('step 1');
                                        player.gain(result.cards, target, 'giveAuto');
                                        player.draw();
                                        ('step 2');
                                        player.chooseCard('he', true, '选择交给' + get.translation(target) + get.cnNumber(1) + '张牌,与其进行拼点');
                                        ('step 3');
                                        if (result.cards?.length) target.gain(result.cards, player, 'giveAuto');
                                        ('step 4');
                                        player.chooseToCompare(target);
                                        ('step 5');
                                        if (result.bool) {
                                            if (
                                                game.hasPlayer(function (player) {
                                                    return player != target && target.inRange(player);
                                                })
                                            ) {
                                                player
                                                    .chooseTarget(function (card, player, target) {
                                                        var source = _status.event.source;
                                                        return target != source && player != source && player != target && source.inRange(target);
                                                    })
                                                    .set('ai', function (target) {
                                                        return get.damageEffect(target, _status.event.source, player);
                                                    })
                                                    .set('source', target);
                                            }
                                        } else {
                                            target.useCard({ name: 'sha' }, player, false);
                                            event.finish();
                                        }
                                        ('step 6');
                                        if (result.targets?.length) {
                                            player.line(result.targets[0], 'green');
                                            var target2 = result.targets[0];
                                            player.useCard({ name: 'sha' }, [target, target2], false);
                                        }
                                    },
                                    ai: {
                                        result: {
                                            target(player, target) {
                                                var cards = player.getCards('h');
                                                var num = target.countCards('h');
                                                if (num > cards.length + 3 && player.hp > 1) return -2;
                                                if (num > cards.length + 1 && player.hp > 1) return -1;
                                                if (num == cards.length - 1 && player.hp > 1 && !get.is.altered('pozhen')) return -1;
                                                for (var i = 0; i < cards.length; i++) {
                                                    if (cards[i].number > 9) return num == 1 ? -1 : -0.5;
                                                }
                                                return 1;
                                            },
                                        },
                                        order: 9,
                                    },
                                },
                                2: {
                                    name: '攻夷',
                                    description: '出牌阶段限一次,你可令一名攻击范围内有你的角色交给你一张牌,你摸一张牌并交给其一张牌且与其进行拼点,若你赢,你视为对其使用一张不计入使用次数的【杀】,你可令其攻击范围内的一名其他角色也成为此【杀】目标.若你没赢,其摸两张牌且此技能本回合改为限两次',
                                    enable: 'phaseUse',
                                    usable: 2,
                                    filterTarget(card, player, target) {
                                        return target.countCards('he') && target != player;
                                        return !player.getStat('skill').hm_gongyi_2 || player.hasSkill('hm_gongyi_3');
                                    },
                                    content() {
                                        'step 0';
                                        target.chooseCard('he', '交给' + get.translation(player) + '一张牌', true);
                                        ('step 1');
                                        player.gain(result.cards, target, 'giveAuto');
                                        player.draw();
                                        ('step 2');
                                        player.chooseCard('he', true, '选择交给' + get.translation(target) + get.cnNumber(1) + '张牌,与其进行拼点');
                                        ('step 3');
                                        if (result.cards?.length) target.gain(result.cards, player, 'giveAuto');
                                        ('step 4');
                                        player.chooseToCompare(target);
                                        ('step 5');
                                        if (result.bool) {
                                            if (
                                                game.hasPlayer(function (player) {
                                                    return player != target && target.inRange(player);
                                                })
                                            ) {
                                                player
                                                    .chooseTarget(function (card, player, target) {
                                                        var source = _status.event.source;
                                                        return target != source && player != source && player != target;
                                                    }, true)
                                                    .set('ai', function (target) {
                                                        return get.damageEffect(target, _status.event.source, player);
                                                    })
                                                    .set('source', target);
                                            }
                                        } else {
                                            target.draw(2);
                                            event.finish();
                                        }
                                        ('step 6');
                                        if (result.targets?.length) {
                                            player.line(result.targets[0], 'green');
                                            var target2 = result.targets[0];
                                            player.addTempSkill('hm_gongyi_3');
                                            player.useCard({ name: 'sha' }, [target, target2], false);
                                        }
                                    },
                                    ai: {
                                        result: {
                                            target(player, target) {
                                                var cards = player.getCards('h');
                                                var num = target.countCards('h');
                                                if (num > cards.length + 3 && player.hp > 1) return -2;
                                                if (num > cards.length + 1 && player.hp > 1) return -1;
                                                if (num == cards.length - 1 && player.hp > 1 && !get.is.altered('pozhen')) return -1;
                                                for (var i = 0; i < cards.length; i++) {
                                                    if (cards[i].number > 9) return num == 1 ? -1 : -0.5;
                                                }
                                                return 1;
                                            },
                                        },
                                        order: 9,
                                    },
                                },
                            },
                        },
                        hm_wumu: {
                            derivation: ['hm_jingzhong', 'hm_gongyi_2'],
                            trigger: {
                                player: 'dying',
                            },
                            juexingji: true,
                            mark: true,
                            content() {
                                'step 0';
                                player.awakenSkill('hm_wumu');
                                var cards = get.cards(4);
                                for (var i = cards.length - 1; i--; i >= 0) {
                                    ui.cardPile.insertBefore(cards[i], ui.cardPile.firstChild);
                                }
                                game.updateRoundNumber();
                                event.cards = cards;
                                player.showCards(cards, get.translation(player) + '发动了〖武穆〗');
                                ('step 1');
                                var num = 0,
                                    list = ["<span class='texiaotext' style='color: #CC00FF'>秦桧小人</span>", "<span class='texiaotext' style='color: #CC00FF'>君不明鉴</span>", "<span class='texiaotext' style='color: #00FFCC'>精忠报国!</span>", "<span class='texiaotext' style='color: #FF0000'>绝不气馁!</span>"];
                                var num2 = 0;
                                for (var i of cards) {
                                    if (get.color(i, false) == 'red') num++;
                                }
                                for (var i of cards) {
                                    if (get.color(i, false) == 'black') num2++;
                                }
                                player.say([list[num]].randomGet());
                                if (num == 0) num = 1;
                                event.num = num;
                                event.num2 = num2;
                                ('step 2');
                                var num = event.num;
                                var num2 = event.num2;
                                var num3 = player.maxHp - player.getCards('h');
                                if (num > 1) {
                                    player.recover(2 - trigger.player.hp);
                                    //player.loseMaxHp();
                                    player.discard(player.getCards('h'));
                                    player.addSkill('hm_jingzhong');
                                }
                                if (num > 2) {
                                    player.draw(3);
                                }
                                if (num2 > 1) {
                                    player.storage.hm_gongyi = true;
                                    player.recover(2);
                                    player.loseMaxHp();
                                    //player.draw(num3)
                                    player.removeSkill('hm_gongyi_1');
                                    player.removeSkill('hm_gongyi');
                                    player.addSkill('hm_gongyi_2');
                                    var next = player.chooseCardButton(cards, get.prompt('hm_wumu'), '选择要获得的牌', [1, num]).set('filterButton', function (button) {
                                        return get.color(button.link) == 'red';
                                    });
                                }
                                ('step 3');
                                var num2 = event.num2;
                                if (result.bool && num2 > 1) {
                                    player.gain(result.links);
                                    player.$draw(result.links);
                                }
                            },
                        },
                        hm_jingzhong: {
                            audio: 'ext:好名的世界/audio:2',
                            trigger: {
                                global: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.player.isAlive() && get.distance(player, event.player) <= 1 && player != _status.currentPhase && event.source != player;
                            },
                            forced: true,
                            logTarget: 'player',
                            check(event, player) {
                                return get.attitude(player, event.player) > 0 && (!event.source || get.attitude(player, event.source) < 0);
                            },
                            content() {
                                'step 0';
                                var t = trigger.source;
                                player.chooseBool(get.prompt('hm_jingzhong'), '是否视为对' + get.translation(t) + '使用一张【杀】').set('ai', function () {
                                    var target = trigger.source;
                                    return -get.attitude(player, target) > 0;
                                });
                                ('step 1');
                                if (result.bool) {
                                    var t = trigger.source;
                                    player.useCard({ name: 'sha' }, t, false);
                                }
                                ('step 2');
                                var t = trigger.source;
                                var target = trigger.player;
                                if (
                                    player.hasHistory('sourceDamage', function (evt) {
                                        var card = evt.card;
                                        if (!card || card.name != 'sha') return false;
                                        var evtx = evt.getParent('useCard');
                                        return evtx.card == card && evtx.parent == event;
                                    })
                                ) {
                                    if (t.countCards('h') > player.countCards('h') || target.countCards('h')) target.gainPlayerCard(t, true, 'he');
                                }
                                if (
                                    !player.hasHistory('sourceDamage', function (evt) {
                                        var card = evt.card;
                                        if (!card || card.name != 'sha') return false;
                                        var evtx = evt.getParent('useCard');
                                        return evtx.card == card && evtx.parent == event;
                                    })
                                ) {
                                    game.asyncDraw([t, target]);
                                }
                            },
                        },
                        hm_juenei: {},
                        youzi_duoduan: {
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('he') > 0;
                            },
                            content() {
                                'step 0';
                                player.draw(2);
                                ('step 1');
                                var sha = get.translation(trigger.card);
                                if (
                                    !trigger.player.countCards('he', function (card) {
                                        return lib.filter.cardDiscardable(card, trigger.player, 'youzi_duoduan');
                                    })
                                )
                                    event.finish();
                                else
                                    trigger.player
                                        .chooseControl()
                                        .set('choiceList', ['令其摸两张牌,此' + sha + '无效', '弃置两张牌并失去一点体力,其不可响应此' + sha])
                                        .set('prompt', '度断:令' + get.translation(player) + '执行一项')
                                        .set('ai', function () {
                                            var player = _status.event.target;
                                            var source = _status.event.getTrigger().player;
                                            if (get.attitude(player, source) > 0) return 0;
                                            if (!player.hasShan() && player.hp >= 2) return 1;
                                            return 0;
                                        });
                                ('step 2');
                                if (result.index == 0) event.goto(4);
                                else {
                                    trigger.player.chooseToDiscard(2, '弃置两张牌并失去一点体力令' + get.translation(player) + '不能闪避此【杀】', 'he', true);
                                    trigger.player.loseHp();
                                }
                                ('step 3');
                                if (result.bool) {
                                    trigger.directHit.add(player);
                                }
                                event.finish();
                                ('step 4');
                                player.draw(2);
                                trigger.excluded.add(player);
                            },
                        },
                        youzi_gongsun: {
                            audio: 'ext:好名的世界/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget: (card, player, target) => target != player,
                            content() {
                                'step 0';
                                player
                                    .chooseControl('basic', 'trick', 'equip', 'cancel2', function () {
                                        var source = _status.event.source;
                                        if (get.attitude(_status.event.player, source) > 0) return 'cancel2';
                                        var list = ['basic', 'trick', 'equip'].filter(function (name) {
                                            return !source.storage.youzi_gongsun_1 || !source.storage.youzi_gongsun_1.includes(name);
                                        });
                                        if (!list.length) return 'cancel2';
                                        if (
                                            list.includes('trick') &&
                                            source.countCards('h', function (card) {
                                                return get.type(card, source) == 'trick' && source.hasValueTarget(card);
                                            }) > 1
                                        )
                                            return 'trick';
                                        return list[0];
                                    })
                                    .set('prompt', get.prompt2('youzi_gongsun', target))
                                    .set('target', target);
                                ('step 1');
                                if (result.control != 'cancel2') {
                                    player.popup(get.translation(result.control) + '牌');
                                    target.addSkill('youzi_gongsun_1');
                                    target.storage.youzi_gongsun_1.add(result.control);
                                }
                            },
                            group: ['youzi_gongsun_2'],
                            subSkill: {
                                1: {
                                    charlotte: true,
                                    intro: {
                                        content(storage) {
                                            return '不能使用或打出' + get.translation(storage) + '牌';
                                        },
                                    },
                                    init(player, skill) {
                                        if (!player.storage[skill]) player.storage[skill] = [];
                                    },
                                    mark: true,
                                    mod: {
                                        cardEnabled(card, player) {
                                            if (player.storage.youzi_gongsun_1.includes(get.type(card, 'trick'))) return false;
                                        },
                                        cardRespondable(card, player) {
                                            if (player.storage.youzi_gongsun_1.includes(get.type(card, 'trick'))) return false;
                                        },
                                        cardSavable(card, player) {
                                            if (player.storage.youzi_gongsun_1.includes(get.type(card, 'trick'))) return false;
                                        },
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    forced: true,
                                    content() {
                                        var list = game.filterPlayer(function (current) {
                                            return current.hasSkill('youzi_gongsun_1', null, null, false);
                                        });
                                        game.countPlayer(function (current) {
                                            if (list.includes(current)) current.removeSkill('youzi_gongsun_1');
                                        });
                                    },
                                },
                            },
                        },
                        hm_wusheng: {
                            marktext: '武',
                            intro: {
                                name: '武',
                                content: '目前为#',
                            },
                            group: ['hm_wusheng_1', 'hm_wusheng_2'],
                            subSkill: {
                                1: {
                                    enable: 'phaseUse',
                                    filter(event, player) {
                                        return player.hasMark('hm_wusheng');
                                    },
                                    onChooseToUse(event) {
                                        var cards = [];
                                        var num = 5;
                                        if (ui.cardPile.childNodes.length < num) {
                                            var discardcards = get.cards(num);
                                            for (var i = 0; i < discardcards.length; i++) {
                                                discardcards[i].discard();
                                            }
                                        }
                                        for (var i = 0; i < num; i++) {
                                            cards.push(ui.cardPile.childNodes[i]);
                                        }
                                        event.set('lanquancards', cards);
                                    },
                                    chooseButton: {
                                        dialog(event, player) {
                                            return ui.create.dialog('选择一张牌使用', event.lanquancards);
                                        },
                                        filter(button, player) {
                                            var evt = _status.event.parent;
                                            if (evt && evt.filterCard) {
                                                var type = get.type(button.link, 'trick');
                                                return evt.filterCard(button.link, player, evt);
                                            }
                                            return false;
                                        },
                                        check(button) {
                                            return get.value(button.link);
                                        },
                                        backup(links, player) {
                                            return {
                                                filterCard() {
                                                    return false;
                                                },
                                                selectCard: -1,
                                                viewAs: links[0],
                                                precontent() {
                                                    player.removeMark('hm_wusheng', 1);
                                                },
                                            };
                                        },
                                        prompt(links, player) {
                                            return '选择' + get.translation(links) + '的目标';
                                        },
                                    },
                                    ai: {
                                        order: 12,
                                        result: {
                                            player: 1,
                                        },
                                        threaten: 1.5,
                                    },
                                },
                                2: {
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    usable: 2,
                                    filter(event, player) {
                                        return event.card && (event.card.name == 'sha' || event.card.name == 'juedou');
                                    },
                                    forced: true,
                                    content() {
                                        player.addMark('hm_wusheng');
                                    },
                                },
                            },
                        },
                        hm_nuzhan: {
                            mod: {
                                cardUsable(card, player, target) {
                                    if (!card.cards || !(game.online ? player == _status.currentPhase : player.isPhaseUsing())) return;
                                    for (var i of card.cards) {
                                        if (i.hasGaintag('hm_nuzhan')) return Infinity;
                                    }
                                },
                                targetInRange(card, player, target) {
                                    if (!card.cards) return;
                                    for (var i of card.cards) {
                                        if (i.hasGaintag('hm_nuzhan')) return true;
                                    }
                                },
                            },
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var card = get.cardPile(function (card) {
                                    return card.name == 'sha';
                                });
                                if (card) player.gain(card, 'gain2').gaintag.add('hm_nuzhan');
                                game.updateRoundNumber();
                            },
                            group: ['hm_nuzhan_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'damageSource',
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.player) <= 0;
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (!player.countMark('hm_wusheng')) return false;
                                        if (player.countMark('hm_wusheng') >= 2) return true;
                                        return game.hasPlayer((current) => current != event.player && current.isIn() && player.canUse({ name: 'sha' }, current, false));
                                    },
                                    description: '当你造成伤害后,你可选择一项,1.移去两个<武>,再对受伤角色造成一点伤害,2.移去一个<武>,视为对另一名其他角色使用一张不计入次数限制且无距离限制的【杀】',
                                    content() {
                                        'step 0';
                                        var list = [],
                                            target = trigger.player,
                                            choiceList = ['移去两个<武>对' + get.translation(trigger.player) + '造成一点伤害', '移去一个<武>视为使用一张无距离限制的【杀】'];
                                        event.target = target;
                                        if (player.countMark('hm_wusheng') >= 2) list.push('选项一');
                                        else choiceList[0] = '<span style="opacity:0.5">' + choiceList[0] + '</span>';
                                        if (game.hasPlayer((current) => current != trigger.player && current.isIn() && player.canUse({ name: 'sha' }, current, false))) list.push('选项二');
                                        else choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + '</span>';
                                        player
                                            .chooseControl(list, 'cancel2')
                                            .set('prompt', get.prompt(event.name))
                                            .set('choiceList', choiceList)
                                            .set('ai', function () {
                                                return _status.event.controls[0];
                                            });
                                        ('step 1');
                                        if (result.control != 'cancel2') {
                                            if (result.control == '选项一') {
                                                player.removeMark('hm_wusheng', 2);
                                                target.damage();
                                            } else {
                                                player.removeMark('hm_wusheng');
                                                player
                                                    .chooseUseTarget({ name: 'sha' }, true, false, 'nodistance')
                                                    .set('filterTarget', function (card, player, target) {
                                                        var evt = _status.event;
                                                        if (_status.event.name == 'chooseTarget') evt = evt.parent;
                                                        if (target == evt.sourcex) return false;
                                                        return lib.filter.targetEnabledx(card, player, target);
                                                    })
                                                    .set('sourcex', target);
                                            }
                                        }
                                    },
                                    ai: {
                                        damageBonus: true,
                                    },
                                },
                            },
                        },
                        hm_huairou: {
                            marktext: '治',
                            intro: {
                                name: '怀柔',
                                content: '本回合已发动过〖怀柔①〗',
                            },
                            trigger: {
                                global: ['loseAfter', 'cardsDiscardAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                return (
                                    event.cards &&
                                    event.cards.filter(function (card) {
                                        return get.position(card, true) == 'd' && get.type(card, false) == 'equip';
                                    }).length
                                );
                            },
                            content() {
                                'step 0';
                                event.count = Math.min(trigger.num, 9);
                                ('step 1');
                                if (trigger.player) {
                                    player.chooseBool(get.prompt('hm_huairou'), '是否令' + get.translation(trigger.player) + '摸一张牌').set('ai', function () {
                                        var target = trigger.player;
                                        return get.attitude(player, target) > 0;
                                    });
                                }
                                ('step 2');
                                if (result.bool) {
                                    event.count--;
                                    trigger.player.draw();
                                    if (player.countMark('hm_huairou') < 1) player.addMark('hm_huairou');
                                }
                                ('step 3');
                                //if(event.count>0) event.goto(1);
                            },
                            group: ['hm_huairou_1', 'hm_huairou_2'],
                            subSkill: {
                                1: {
                                    enable: 'phaseUse',
                                    usable: 1,
                                    filter(event, player) {
                                        return (
                                            player.countCards('he') > 0 &&
                                            game.hasPlayer(function (current) {
                                                return current != player && current.countCards('he') > 0;
                                            })
                                        );
                                    },
                                    filterCard: true,
                                    check(card) {
                                        return 6 - get.value(card);
                                    },
                                    position: 'he',
                                    discard: false,
                                    lose: false,
                                    delay: false,
                                    visible: true,
                                    loseTo: 'discardPile',
                                    prompt: '选择重铸张牌',
                                    content() {
                                        'step 0';
                                        player.loseToDiscardpile(cards);
                                        player.draw();
                                        ('step 1');
                                        player
                                            .chooseTarget(get.prompt('hm_huairou'), '你可选择一名其他角色,令其重铸一张牌或获得一张装备牌', function (card, player, target) {
                                                return player != target;
                                            })
                                            .set('ai', function (target) {
                                                var player = _status.event.player;
                                                if (target.countCards('he') == 1) return -get.attitude(player, target) * 2;
                                                return get.attitude(player, target);
                                            });
                                        ('step 2');
                                        if (result.targets?.length) {
                                            var target = result.targets[0];
                                            event.target = target;
                                            var num = target.countCards('he');
                                            target.chooseCard('he', [0, 1], get.prompt('hm_huairou'), '重铸一张牌并摸一张牌,或从牌堆中获得一张装备牌').set('ai', function (card) {
                                                var player = _status.event.player;
                                                if (player.hasSkill('bolmingzhe') && get.color(card) == 'red' && card.name != 'tao' && card.namt != 'wuxie') return 1;
                                                return 5 - get.value(card);
                                                return get.type(card) == 'equip' + 2;
                                            });
                                        } else {
                                            event.finish();
                                            event.finish();
                                        }
                                        ('step 3');
                                        if (result.cards?.length) {
                                            target.loseToDiscardpile(result.cards);
                                            target.draw(1 + result.cards.length);
                                        } else {
                                            var card = get.cardPile2(function (card) {
                                                return get.type(card) == 'equip';
                                            });
                                            if (card) target.gain(card, 'gain2');
                                        }
                                    },
                                    ai: {
                                        order: 6,
                                        result: {
                                            player: 1,
                                            target(player, target) {
                                                return 0.5 * Math.sqrt(Math.min(3, target.countCards('he')));
                                            },
                                        },
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: 'phaseJieshuEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countMark('hm_huairou');
                                    },
                                    content() {
                                        'step 0';
                                        player.removeMark('hm_huairou', player.countMark('hm_huairou'));
                                        ('step 1');
                                        player.chooseControlList(['弃置一名角色区域内的一张牌', '弃置一张牌,令一名角色摸两张牌'], true);
                                        ('step 2');
                                        event.num = result.index;
                                        if (result.index == 0) {
                                            //player.draw();
                                            player
                                                .chooseTarget('请选择弃置牌的目标', function (card, player, target) {
                                                    return target.countCards('hej') > 0;
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
                                            player.chooseCard('he', true, get.prompt('hm_huairou'), '弃置一张牌,令一名角色摸一张牌').set('ai', function (card) {
                                                var player = _status.event.player;
                                                if (player.hasSkill('bolmingzhe') && get.color(card) == 'red' && card.name != 'tao' && card.namt != 'wuxie') return 1;
                                                return 5 - get.value(card);
                                                return get.type(card) == 'equip' + 2;
                                            });
                                        }
                                        ('step 3');
                                        var num = event.num;
                                        var target = result.targets[0];
                                        if (num == 0) {
                                            player.discardPlayerCard(target, 'he', true);
                                            event.finish();
                                        }
                                        if (num == 1) {
                                            player.loseToDiscardpile(result.cards);
                                            player.chooseTarget().set('ai', function (target) {
                                                return get.attitude(player, target);
                                            });
                                        }
                                        ('step 4');
                                        if (result.targets?.length) {
                                            var target = result.targets[0];
                                            target.draw(2);
                                        }
                                    },
                                },
                            },
                        },
                        hm_chengqian: {},
                    },
                    character: {
                        hm_zhugejun: ['male', 'qun', 3, ['hm_qianyin', 'hm_yaoru'], ['des:诸葛亮的弟弟(同母弟)']],
                        hm_murongchui: ['male', 'qun', 4, ['hm_yongzhan'], ['des:慕容垂(约326年～396年6月2日),字道明,小字叔仁,鲜卑名阿六敦,昌黎棘城(今辽宁省义县)人,鲜卑族.十六国时期后燕开国君主、军事家,前燕文明帝慕容皝第五子,母为兰淑仪']],
                        hm_huojun: ['male', 'shu', 4, ['hm_jiesho', 'hm_xunji'], ['des:霍峻(178年—217年),字仲邈,南郡枝江(今湖北枝江)人,东汉末年刘备麾下名将.其兄霍笃曾在故乡聚部众数百人.后霍笃逝世,刘表以霍峻继承其部曲.208年(建安十三年),刘表病逝,霍峻便率部曲归降刘备,并被任为中郎将.后随刘备入蜀,刘备从葭萌还袭刘璋,留霍峻守葭萌城.张鲁遣将杨帛劝降霍峻,霍峻严词拒绝,杨帛退去.后刘璋将扶禁、向存等率万余人由阆水上,攻围霍峻,城中兵不过数百人,霍峻坚守一年,伺机将其击破.刘备定蜀,嘉霍峻之功,于是分广汉为梓潼郡,以峻为梓潼太守、裨将军.三年后去世,还葬成都.刘备亲率群僚临会吊祭,留宿墓上,当时的人都为他感到荣幸']],
                        hm_wangjun: ['male', 'jin', 4, ['hm_zhujian', 'hm_duansuo'], ['des:王濬(207年～286年),字士治,小名阿童,弘农郡湖县(今河南省灵宝市阌乡)人.西晋时期名将.王濬出身世家,博学多闻,容颜英俊,多谋善战.举秀才出身,起家河东郡从事.泰始八年(272年),担任广汉太守,平定益州叛乱,迁益州刺史.利用长江上游地势之利,修造战船,组建强大的水军.上书晋武帝,促成晋灭吴之战.咸宁六年(280年),率兵顺流而下,熔毁横江铁链,攻克丹阳郡,率先攻取石头城,接受吴末帝孙皓投降,完成西晋统一大业.凭借功勋,拜辅国将军、步兵校尉,册封襄阳侯.为避猜忌,纵情享受,累迁特进、抚军大将军、开府仪同三司、散骑常侍、后军将军等.太康六年十二月(286年1月18日),王濬去世,享年八十岁,谥号为<武>,安葬于柏谷山']],
                        hm_murongke: ['male', 'qun', 4, ['hm_fuzhu', 'hm_zhangjun', 'hm_zhongjian'], ['des:慕容恪(？～367年),字玄恭,昌黎棘城(今辽宁省义县)人,鲜卑族.十六国时期前燕宗室名臣、战略家,文明帝慕容皝第四子,景昭帝慕容儁的弟弟.慕容恪为人谨慎大度,谦恭仁和.十五岁时开始掌军,多次以弱胜强,击败后赵和高句丽进攻,稳固了慕容氏作为辽东霸主的地位.后中原大乱,他又统兵进入中原,擒杀冉闵,攻城略地,将前燕辖境延伸到黄河以南地区.景昭帝慕容儁去世后,忠心辅佐幼主慕容暐,拜太宰,封太原王,行周公事.摄政期间,攻城略地,威震邻邦.建熙八年(367年),慕容恪去世,谥号为桓.唐宋时期,配享武庙']],
                        hm_murongling: ['male', 'qun', 4, ['hm_yonglve', 'hm_xiaojun'], ['des:慕容令少沉敏,多谋略,骁勇刚毅,被誉为鲜卑慕容氏第四代中最杰出的人才,可比太原王慕容恪.前燕建熙十年(369年),慕容垂抵挡东晋桓温北伐有功,却受到皇帝慕容暐的百般猜忌和太后可足浑氏、太傅慕容评的忌恨.慕容垂十分忧虑.慕容令向父亲提及此事,慕容垂于是征求儿子的意见.慕容令建议逃至龙城(今辽宁朝阳)避祸,就像当年周公居东一样.慕容垂以打猎为名,离开邺城,准备到龙城去.被小儿子慕容麟告密,慕容垂被阻拦,慕容令又建议父亲投靠前秦.慕容垂同意了,命慕容令断后.到长安后,慕容父子受到苻坚的热情接待. 第二年,慕容令被委派跟随王猛讨伐前燕.王猛抵达洛阳以后,策动慕容垂的亲信金熙装作慕容垂的使者,劝说慕容令反正,回归前燕.慕容令投奔乐安王慕容臧.王猛状告慕容垂,苻坚却用人不疑.慕容令回归前燕,被认为是奸细,被放逐到辽西的沙城,慕容令再反前燕,又被弟弟慕容麟告密,最后死在部下手中.后来慕容垂建立后燕,追封他为献庄太子.398年侄子慕容盛即位,追尊他为献庄皇帝,其妻丁氏被尊为太后.402年,丁太后被逼自杀,慕容熙追谥献幽皇后']],
                        hm_wangbi: ['male', 'wei', 3, ['hm_tongxuan', 'hm_yigua'], ['zhu', 'des:王弼(226年～249年),字辅嗣,山阳高平(今山东省微山县)人.三国时期曹魏经学家、哲学家,魏晋玄学的代表人物及创始人之一.  明察聪慧,爱好老子,通辩能言.>曾任尚书郎,文名盖世,其作品主要包括解读<老子>的<老子注> <老子指略>及解读<周易>思想的<周易注><周易略例> 四部. 其中<老子指略> <周易略例>是王弼对<老子><周易>所做的总体性分析的文章.联合何晏、夏侯玄等同倡玄学清谈,清正高傲,<颇以所长笑人,故时为士君子所疾>.与钟会、何晏等人为友.  正始十年(249年),去世,年仅二十三岁,遗下一妻一女']],
                        hm_fujian: ['male', 'qun', 5, ['hm_kaituo', 'hm_dengfeng'], ['boss', 'bossallowed', 'des:苻坚(338年～385年10月16日),字永固,小字文玉,略阳郡临渭县(今甘肃省秦安县)人,氐族.中国古代著名政治家、改革家,前秦第三位君王(357年～385年在位).景明帝苻健之侄,文桓帝苻雄之子. 寿光三年(357年),苻坚与兄苻法等袭杀苻生,自立为大秦天王.即位后,着手革除暴政,主张<黎元应抚,夷狄应和>;重用汉族士人王猛、权翼、邓羌等,抑制豪强,强化王权;鼓励农耕,教民以区种之法,兴修关中水利,以增加财政收入、缓和阶级矛盾及统治集团的内部矛盾;提倡儒学,兴办教育,以汉族政治传统和文化传统的继承者自命,积极推行<圣君贤相>的治国之道;对各族实行<服而赦之>的方针,凡自动归顺或投降的少数民族上层基本采取优容政策.十余年后,前秦大治.建元六年(370年)以后,苻坚陆续灭前燕、前仇池国、前凉、代国,取东晋梁、益二州,并命吕光远征西域,结束北方长期动乱分裂的局面.统一北方后,他自恃<强兵百万,资仗如山>,欲灭亡东晋,实现混一六合之志,于建元十九年(383年)亲统大军南伐,折戟于淝水之战,国势大衰,各族首领慕容垂、慕容泓、姚苌、乞伏国仁等纷纷自立.建元二十一年(385年),宣昭帝苻坚出奔五将山,被后秦将领吴忠俘获,软禁于新平.姚苌逼迫其交出传国玉玺,苻坚言已将玉玺送晋国,誓死不让玉玺落入羌人之手,最终被姚苌缢死于新平佛寺中,终年四十八岁.身后被三个国家共同追封谥号,尊谥宣昭皇帝、文昭皇帝、壮烈天王,庙号世祖']],
                        hm_liubei: ['male', 'shu', 4, ['hm_qizhan', 'hm_fuhan'], ['des:汉昭烈帝刘备(161年－223年6月10日),字玄德,涿郡涿县(今河北省涿州市大树楼桑村)人,西汉中山靖王刘胜之后,蜀汉开国皇帝、政治家.史家多称其为先主. <br/><br/>刘备少年时拜卢植为师,而后参与镇压黄巾起义.因为自身实力有限,刘备在诸侯混战过程中屡遭失败,先后依附公孙瓒、陶谦、曹操、袁绍、刘表等多个诸侯.但因其始终坚持以德服人的行为准则,受到了四方名士的尊敬,至有陶谦、刘表等放弃让自己的儿子继承基业,而是选择将自己的领地徐州、荆州让给刘备统领. <br/><br/>通过坚持不懈的努力,刘备于赤壁之战后,先后拿下荆州、益州,建立了蜀汉政权.而后因为关羽被东吴所害,刘备不听群臣劝阻,执意发动对吴国的战争,结果兵败夷陵,最终于章武三年(223年)病逝于白帝城,终年六十三岁,谥号昭烈皇帝,<晋书·王弥传>称之为烈祖,葬惠陵']],
                        hm_yanghu: ['male', 'jin', '4/4', ['hm_faitao', 'hm_huaiyuan'], ['des:羊祜(221年－278年12月27日),字叔子,兖州泰山郡南城县人.西晋时期杰出的战略家、政治家、文学家,曹魏上党太守羊衜之子,汉末才女蔡文姬的外甥.<br/><br/>羊祜出身<泰山羊氏>.早年在曹魏政权任中书郎、给事黄门侍郎等职,持身正直,避免直接卷入政治斗争中.因与掌权的司马氏的姻亲关系,得以平步青云.魏元帝即位后,历任秘书监、相国从事中郎等职.晋代魏前夕,担任中领军,掌领禁军,兼管内外政事.西晋建立后,累官尚书右仆射、卫将军,封钜平侯.泰始五年(269年),出任车骑将军、开府仪同三司,都督荆州诸军事,坐镇襄阳.在荆州屯田兴学,以德怀柔,深得军民之心;扩充军备,训练士兵,全力筹备灭吴计划.<br/><br/>咸宁四年(278年),羊祜去世,临终前举荐度支尚书杜预接替职务.死后获赠侍中、太傅,谥号为<成>.两年后,晋武帝依其策划灭吴,完成统一.唐宋时期,羊祜得以配享武庙']],
                        hm_yuefei: ['male', 'qun', '4/5', ['hm_gongyi', 'hm_wumu'], ['des:岳飞(1103年3月24日～1142年1月27日),男,字鹏举,相州汤阴(今河南省汤阴县)人.南宋时期抗金名将、军事家、战略家、民族英雄、书法家、诗人,位列南宋<中兴四将>之首.<br/>岳飞从二十岁起,曾先后四次从军.自建炎二年(1128年)遇宗泽至绍兴十一年(1141年)止,先后参与、指挥大小战斗数百次.金军攻打江南时,独树一帜,力主抗金,收复建康.绍兴四年(1134年),收复襄阳六郡.绍兴六年(1136年),率师北伐,顺利攻取商州、虢州等地.绍兴十年(1140年),完颜宗弼毁盟攻宋,岳飞挥师北伐,两河人民奔走相告,各地义军纷纷响应,夹击金军.岳家军先后收复郑州、洛阳等地,在郾城、颍昌大败金军,进军朱仙镇.宋高宗赵构和宰相秦桧却一意求和,以十二道<金字牌>催令班师.在宋金议和过程中,岳飞遭受秦桧、张俊等人诬陷入狱.1142年1月,以莫须有的罪名,与长子岳云、部将张宪一同遇害.宋孝宗时,平反昭雪,改葬于西湖畔栖霞岭,追谥武穆,后又追谥忠武,封鄂王.<br/><br/>岳飞是南宋杰出的统帅,他重视人民抗金力量,缔造了<连结河朔>之谋,主张黄河以北的民间抗金义军和宋军互相配合,以收复失地;治军赏罚分明,纪律严整,又能体恤部属,以身作则,率领的<岳家军>号称<冻死不拆屋,饿死不打掳>.金军有<撼山易,撼岳家军难>的评语,以示对岳家军的由衷敬佩.<br/><br/>岳飞的文才同样卓越,其代表词作<满江红·怒发冲冠>是千古传诵的爱国名篇,后人辑有文集传世']],
                        hm_guanyu: ['male', 'shu', 4, ['hm_wusheng', 'hm_nuzhan'], ['des:关羽(？—220年),字云长,本字长生,河东郡 解县 (今山西省 运城市 盐湖区解州镇)人.东汉末年名将.<br/><br/>汉末亡命 涿郡 ,与 张飞 从 刘备 起兵.刘备得 徐州 后,使关羽行太守事.建安五年(200年), 曹操 东进,击破刘备,关羽被俘,遂随曹操于 官渡 迎击 袁绍 军,刺袁绍大将 颜良 于万众之中,封汉寿亭侯,不久辞归刘备,后随刘备依附荆州牧 刘表 .<br/><br/>建安十三年(208年),曹操入荆州,刘备率众南逃,关羽与之共至 夏口 .及曹操败于赤壁,刘备收江南诸郡,任命关羽为 襄阳 太守、荡寇将军.刘备西定 益州 ,使关羽镇守荆州.建安二十年(215年),关羽尽逐 孙权 所置 长沙 、 零陵 、 桂阳 三郡长吏.建安二十四年(219年),拜为前将军,围攻曹操将征南将军 曹仁 于 樊城 ,时值 汉水 泛滥,左将军 于禁 所督七军皆被淹没,又斩将军 庞德 ,自许(今河南 许昌 )以南往往 遥应 ,威震华夏.曹操派平寇将军 徐晃 往救,而吴乘机袭取 江陵 ,关羽遂 败走麦城 (今湖北 当阳 东南),与儿子 关平 同为吴军俘杀.追谥壮缪侯.好< 左传 >,善待卒伍而骄于士大夫,以忠义见称于后世']],
                        hm_lukang: ['male', 'wu', 4, [], ['des:陆抗(226年—274年),字幼节,吴郡吴县(今江苏省苏州市)人.三国时期吴国名将.<br/><br/>赤乌八年(245年),陆抗袭封江陵县侯,起家建武校尉,统领父亲陆逊五千部众.赤乌九年(246年),迁立节中郎将,把守柴桑.建兴元年(252年),拜奋威将军.太平二年(257年),拜柴桑督,后因功迁征北将军.永安二年(259年),迁镇军将军,镇守西陵.末帝孙皓即位后,担任镇军大将军、都督西陵、信陵、夷道、乐乡、公安诸军事,驻防于乐乡(今湖北江陵西南),遥领益州牧.凤凰元年(272年),击退晋将羊祜进攻,攻杀叛将步阐,加拜都护,累迁大司马、荆州牧.<br/><br/>凤凰三年(274年),陆抗去世,终年四十九岁.陆抗与父亲陆逊皆是吴国的中流砥柱,并称<逊抗>,是吴国最后的名将']],
                    },
                    translate: {
                        hm_zhugejun: '诸葛均',
                        hm_murongchui: '慕容垂',
                        hm_huojun: '霍峻',
                        hm_wangjun: '王濬',
                        hm_murongke: '慕容恪',
                        hm_murongling: '慕容令',
                        hm_wangbi: '王弻',
                        hm_fujian: '符坚',
                        hm_liubei: '刘备',
                        hm_yanghu: '羊祜',
                        hm_yuefei: '岳飞',
                        hm_guanyu: '关羽',
                        hm_lukang: '陆抗',
                        hm_qianyin: '浅隐',
                        hm_qianyin_info: '锁定技,①其他角色使用牌指定你为目标后,若此牌目标数不大于3,你摸一张牌并获得一个<隐>.②一名角色的回合结束后,若你有<隐>,你弃置X张牌(X为你的<隐>数,不足则全弃且你失去一点体力)并移去全部的<隐>,若你手牌数小于2,你将手牌数摸至2',
                        hm_luyin: '庐隐',
                        hm_luyin_info: '',
                        hm_yaoru: '邀入',
                        hm_yaoru_info: '每名角色的回合内限一次,你可以将一张牌当做任意基本牌使用或打出,若如此做,你获得一个<隐>',
                        hm_baisheng: '百胜',
                        hm_baisheng_info: '锁定技,①你使用【杀】无距离限制,②每名其他角色限一次,当你造成伤害时,此伤害+1,你获得一个<胜>.③你的手牌上限X,准备阶段,你摸X张牌.(X为你的<胜>,且至少为1)',
                        hm_yongzhan: '勇战',
                        hm_yongzhan_info: '出牌阶段限一次,你可选择一名其他角色,其获得<讨>标记直到此回合结束.你对拥有<讨>的角色:①造成伤害时,摸一张牌,(每回合限一次,令此伤害+1).②使用【杀】时,其需使用两张【闪】响应,③使用牌无距离与次数限制.当拥有<讨>的角色死亡后,你失去〖勇战〗,获得〖百胜〗,回复满体力值并摸三张牌',
                        hm_jiesho: '竭守',
                        hm_jiesho_info: '锁定技,①游戏开始时,你废除全部装备栏并摸两张牌.②准备阶段或当你受到伤害后,你回复一个装备栏并摸一张牌.③你的手牌上限+X.(X为你已废除的装备栏数)',
                        hm_xunji: '寻机',
                        hm_xunji_info: '觉醒技,出牌阶段开始时,若你没有装备栏被废除,则你减少一点体力上限,回复两点体力,失去除〖竭守③〗外的全部〖竭守〗效果,获得〖伺破〗',
                        hm_sipo: '伺破',
                        hm_sipo_info: '出牌阶段限一次,你可废除一个装备栏并选择一名其他角色,你对其造成X点伤害,摸X张牌',
                        hm_zhujian: '筑舰',
                        hm_zhujian_info: '①每一轮开始时,你可选择一名角色,其使用牌堆中一张由系统指定的装备牌,若此角色不为你,你获得一个<坚>;②当你受到伤害时,若你有<坚>,你移去所有<坚>,令此伤害-X,且伤害来源横置(X为被移去的<坚>数);③出牌阶段限一次,你可令任意名装备区有牌的角色摸一张牌',
                        hm_duansuo: '断索',
                        hm_duansuo_info: '出牌阶段限一次,你可选择一项,1.解除任意名角色的横置状态,2.对一名处于横置状态的角色造成一点火焰伤害,若其没有手牌,则此伤害+1',
                        hm_fuzhu: '献策',
                        hm_fuzhu_info: '每回合限一次,一名其他角色使用【杀】造成伤害后,你可令其摸一张牌,且其本回合使用【杀】的次数上限+1,若此【杀】为黑色,你摸一张牌',
                        hm_zhangjun: '掌军',
                        hm_zhangjun_info: '锁定技,游戏开始,你随机获得"连环,统军,智勇"中的两项.<br/><br/>〖连环〗:出牌阶段限一次,你可选择两名角色,标记为A和B.当A对B造成伤害后,A可弃置B一张牌,其可选择一名角色,令其摸一张牌.A对B使用牌无距离限制.此效果持续到A回合结束.<br/><br/>〖统军〗:准备阶段,你可选择任意名角色,令这些角色获得〖自肃〗,其他角色失去〖自肃〗.<br/><br/>〖自肃〗:出牌阶段开始时,你可进行<整肃>,若成功,所有拥有〖自肃〗的角色摸一张牌并失去〖自肃〗.<br/><br/>〖智勇〗:结束阶段或当你受到伤害后,你可令一名角色摸一张牌,若此角色不为你,你可获得其区域内的一张牌并摸一张牌',
                        hm_zhongjian: '终荐',
                        hm_zhongjian_info: '当你死亡时,若场上不存在<慕容垂>,你可选择一名其他角色,令其回复满体力值,选择是否替换武将牌为<慕容垂>,若其如此做,其摸三张牌,获得<统军>',
                        hm_yonglve: '勇略',
                        hm_yonglve_info: '锁定技,出牌阶段,当你使用牌结算完毕后,你摸一张牌,若此牌未造成过伤害,则本回合此类型的牌不可再触发〖勇略〗',
                        hm_xiaojun: '骁军',
                        hm_xiaojun_info: '出牌阶段限一次,你可选择一名角色,其获得一个<军>并获得牌堆/弃牌堆中的一张基本牌,其可使用一张手牌',
                        hm_jun: '"军"',
                        hm_jun_info: '你使用【杀】的次数上限与手牌上限+1.你使用【杀】造成伤害后,进行一次判定,若结果为红色,你摸X张牌,反之,为黑色,则你摸一张牌并回复一点体力值.你移去全部<军>.(X为你的军数+1)',
                        hm_tongxuan: '通玄',
                        hm_tongxuan_info: '①每轮限一次,锁定技,当你受到伤害后,你选择一名角色,其摸三张牌并获得一个<福>.你可选择一名其他角色,其弃置一张牌并获得一个<霉>.拥有<福>的角色体力值发生减少时,移去一个<福>,防止之,拥有<霉>的角色受到伤害时,移去一个<霉>,此伤害+1.<br/>②你的回合开始时,你观看牌堆顶的三张牌,以任意顺序置于牌堆顶或牌堆底,你观看牌堆底的一张牌,你可将此牌交给一名角色,若此牌为装备牌,则获得此牌的角色可使用之',
                        hm_yigua: '易卦',
                        hm_yigua_info: '出牌阶段限一次,你可展示全部手牌,弃置一张牌并选择一名其他角色,其选择是否交给你一张牌,若选是,则其获得一个<福>并摸一张牌.否则,其获得一个<霉>',
                        hm_yinhuo: '引祸',
                        hm_yinhuo_info: '准备阶段,你可选择一名其他角色,记录其当前手牌数,你摸两张牌,其摸一张牌.结束阶段,①若你有记录过牌且被记录者的手牌数大于记录中其的手牌数,其视为对你使用一张【杀】.②取消你记录过的牌数',
                        hm_kaituo: '开拓',
                        hm_kaituo_info: '锁定技,游戏开始时,你令所有其他角色依次交给你一张牌,你弃置一半的手牌(至多弃置至5,向下取整),你选择一个技能获得之:〖拒怠〗或〖除祸〗',
                        hm_xin: '新',
                        hm_xin_info: '出牌阶段',
                        hm_dengfeng: '登峰',
                        hm_dengfeng_info: '觉醒技,准备阶段/结束阶段,若你体力值小于3,场上有角色已死亡,已发动过至少三次〖拒怠〗或〖除祸:灭君〗,你减少一点体力上限,回复满体力值,失去〖开拓〗,获得〖决讨〗',
                        hm_juetao: '决讨',
                        hm_juetao_info: '①锁定技,准备阶段,你减少一点体力上限,回复一点体力,对一名其他角色造成一点伤害,若其因此进入濒死,你摸两张牌.因此技能受到过伤害的角色对你使用牌无距离限制.②当一名其他角色死亡后,你增加一点体力上限且你下次发动〖决讨〗时伤害+1,若你对其造成过伤害,你摸两张牌,若其对你造成过伤害,你回复一点体力',
                        hm_juesheng: '决讨',
                        hm_juesheng_info: '',
                        hm_jijiang: '激将',
                        hm_jijiang_info: '准备阶段,你可令一名角色摸一张牌并获得牌堆/弃牌堆中的一张【杀】,其下个出牌阶段使用【杀】的次数上限+1',
                        hm_fuhan: '复汉',
                        hm_fuhan_info: '觉醒技,准备阶段/结束阶段,若X大于你当前体力值或手牌数,你摸三张牌,回复满体力,重置X,获得技能〖激将〗,弃置判定区内所有牌',
                        hm_diwei: '帝威',
                        hm_diwei_info: '结束阶段,若你体力值为1或没有手牌,你可减少一点体力上限,将手牌摸至5,回复两点体力',
                        hm_qizhan: '起战',
                        hm_qizhan_info: '出牌阶段,你可弃置X张牌并摸一张牌,弃置一名其他角色区域内的至多X张牌(至少为1).(X为你发动此技能的次数)',
                        hm_shashen: '杀神',
                        hm_shashen_info: '出牌阶段限一次,你可弃置装备区内所有牌并摸等量的牌,视为使用一张任意带有伤害标签的牌,若本次你弃置了至少两张牌,你可多使用一张',
                        hm_faitao: '伐讨',
                        hm_faitao_info: '出牌阶段限一次,你可令一名角色交给你一张牌,你可视为对另一名角色使用一张无距离与次数限制且不计入使用次数【杀】,若此【杀】造成了伤害,你摸一张牌,否则,你须弃置一张牌.此【杀】结算完毕后,若目标手牌数大于你,你令其弃置一张手牌',
                        hm_huaiyuan: '怀远',
                        hm_huaiyuan_info: '觉醒技,准备阶段/结束阶段,若你没有手牌或体力值为1,你回复2点体力,摸两张牌,失去〖伐讨〗,获得〖怀柔〗',
                        hm_gongyi: '攻夷',
                        hm_gongyi_info: '出牌阶段限一次,你可令一名攻击范围内有你的角色交给你一张牌,你摸一张牌并交给其一张牌且与其进行拼点,若你赢,你视为对其使用一张不计入使用次数的【杀】,你可令其攻击范围内的一名其他角色也成为此【杀】目标.若你没赢,其视为对你使用一张【杀】',
                        hm_wumu: '武穆',
                        hm_wumu_info: '限定技,当你濒死时,你可以展示牌堆顶的四张牌,若其中:红色牌数大于1,你将体力值回复至2,弃置所有手牌,获得〖精忠〗.黑色牌数大于1,你回复2点体力,减少一点体力上限,你获得本次展示的牌中任意张红色牌.若黑色牌数大于红色牌,则修改〖攻夷〗,若红色牌大于黑色牌,你摸三张牌',
                        hm_jingzhong: '精忠',
                        hm_jingzhong_info: '你的回合外,当一名与你距离为1或以内的角色A受到伤害时,若伤害来源B不为你,你可视为对B使用一张无距离限制的【杀】,若此【杀】造成了伤害且B的手牌数大于你或A,你令A获得B一张牌,若未造成伤害,AB各摸一张牌',
                        hm_juenei: '绝馁',
                        hm_juenei_info: '',
                        youzi_duoduan: '度断',
                        youzi_duoduan_info: '',
                        youzi_gongsun: '共损',
                        youzi_gongsun_info: '',
                        hm_wusheng: '武圣',
                        hm_wusheng_info: '①每回合限两次,当你使用【杀】或【决斗】造成伤害时,你获得一个<武>标记.②出牌阶段,若你有<武>,你可观看牌堆顶5张牌,你可使用其中一张牌,若如此做,你移去一个<武>',
                        hm_nuzhan: '怒斩',
                        hm_nuzhan_info: '①准备阶段,你获得牌堆/弃牌堆中的一张【杀】,此【杀】无距离与次数限制.②当你造成伤害后,你可选择一项,1.移去两个<武>,对受伤角色造成一点伤害,2.移去一个<武>,视为对另一名其他角色使用一张不计入次数限制的【杀】',
                        hm_huairou: '怀柔',
                        hm_huairou_info: '①当有角色的装备牌进入弃牌堆后,你可令其摸一张牌.②出牌阶段限一次,你可重铸一张牌,令一名角色选择一项,1.重铸一张牌并摸一张牌,2.获得牌堆中的一张装备牌.③一名角色的结束阶段,若你本回合发动过〖怀柔①〗,你可选择一项,1.弃置一名角色区域内的一张牌,2.弃置一张牌,令一名角色摸两张牌',
                        hm_chengqian: '承谦',
                        hm_chengqian_info: '锁定技,①你不为拼点和【乐不思蜀】的合法目标,②当你失去装备牌时,你令一名角色摸一张牌',
                    },
                };
                lib.config.all.characters.add('好名的世界');
                lib.config.characters.add('好名的世界');
                for (var i in QQQ.character) {
                    QQQ.character[i][4].add(`ext:好名的世界/image/${i}.jpg`)
                }
                lib.translate['好名的世界_character_config'] = `好名的世界`;
                return QQQ;
            });
        },
        config: {
            LiuBei: {
                name: '刘备发言',
                intro: '开启后,刘备发动复汉与激将时会说话(复汉说话期间会让游戏暂停)',
                init: false,
            },
        },
        package: {
            intro: "历史上人物们,只要你能想到,只要你能给出设计,欢迎投稿.{好名QQ1632519382,官方群号:595882148}<br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>",
            author: '不想要好名',
            version: '1.6.5',
        },
    };
});

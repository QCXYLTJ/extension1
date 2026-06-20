import { lib, game, ui, get, ai, _status } from '../../noname.js'
const extensionInfo = await lib.init.promises.json(`extension/列疆/info.json`);
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '列疆',
        content() {
            lib.element.player.hasGong = function () {
                if (this.countCards('hs', 'gong_Angel') || this.hasUsableCard('gong_Angel')) return true;
            };
            lib.element.player.hasShou = function () {
                if (this.countCards('hs', 'shou_Angel') || this.hasUsableCard('shou_Angel')) return true;
            };
            game.Micd = (number) => {
                if (!number) number = 1;
                game.log('#b八卦盘', number > 0 ? '向顺时针移动了' + number + '格' : '向逆时针移动了' + -number + '格');
                if (number > 0) {
                    for (let i = 0; i < number; i++) {
                        var filter = [];
                        for (var p of game.filterChess) filter.add([...p]);
                        for (var o = 0; o < filter.length; o++) {
                            if (filter[o][0] && o == 0) {
                                filter[o][0] = game.filterChess[filter.length - 1][0];
                            } else {
                                filter[o][0] = game.filterChess[o - 1][0];
                            }
                        }
                        game.filterChess = filter;
                    }
                } else {
                    var number = -number;
                    for (let i = 0; i < number; i++) {
                        var filter = [];
                        for (var p of game.filterChess) filter.add([...p]);
                        for (var o = filter.length - 1; o > -1; o--) {
                            if (filter[o][0] && o == filter.length - 1) {
                                // console.log(filter[o][0],'变',game.filterChess[0][0])
                                filter[o][0] = game.filterChess[0][0];
                            } else {
                                // console.log(filter[o][0],'变',game.filterChess[o+1][0])
                                filter[o][0] = game.filterChess[o + 1][0];
                            }
                        }
                        game.filterChess = filter;
                    }
                }
            };
            get.number_chess = (card) => {
                for (const i of game.filterChess) {
                    if (i[1] == get.translation(get.guaxiang(card))) return i[0];
                }
            };
            //免费使用
            lib.element.player.freeCard = function (cards) {
                const player = this;
                if (!player.freeCard) player.freeCard = [];
                if (typeof cards == 'string') {
                    player.freeCard.add(cards);
                } else {
                    if (cards)
                        for (const i of cards) {
                            player.freeCard.add(i);
                        }
                    player.addGaintag(cards, '免费');
                }
            };
            lib.element.player.chooseChess = function (target, check) {
                var next = game.createEvent('chooseChess');
                next.player = this;
                if (Array.isArray(target)) {
                    next.targets = target;
                    if (check) next.ai = check;
                    else
                        next.ai = function (card) {
                            if (typeof card == 'string' && lib.skill[card]) {
                                var ais =
                                    lib.skill[card].check ||
                                    function () {
                                        return 0;
                                    };
                                return ais();
                            }
                            var addi = get.value(card) >= 8 && get.type(card) != 'equip' ? -3 : 0;
                            if (card.name == 'du') addi -= 3;
                            var source = _status.event.source;
                            var player = _status.event.player;
                            var event = _status.event.parent;
                            var getn = function (card) {
                                return get.number_chess(card) * (Boolean(event.small) ? -1 : 1);
                            };
                            if (source && source != player) {
                                if (get.attitude(player, source) > 1) {
                                    if (Boolean(event.small)) return getn(card) - get.value(card) / 2 + addi;
                                    return -getn(card) - get.value(card) / 2 + addi;
                                }
                                if (Boolean(event.small)) return -getn(card) - get.value(card) / 2 + addi;
                                return getn(card) - get.value(card) / 2 + addi;
                            } else {
                                if (Boolean(event.small)) return -getn(card) - get.value(card) / 2 + addi;
                                return getn(card) - get.value(card) / 2 + addi;
                            }
                        };
                    next.setContent('chooseChessMultiple');
                } else {
                    next.target = target;
                    if (check) next.ai = check;
                    else
                        next.ai = function (card) {
                            if (typeof card == 'string' && lib.skill[card]) {
                                var ais =
                                    lib.skill[card].check ||
                                    function () {
                                        return 0;
                                    };
                                return ais();
                            }
                            var player = get.owner(card);
                            var getn = function (card) {
                                return get.number_chess(card);
                            };
                            var event = _status.event.parent;
                            var to = player == event.player ? event.target : event.player;
                            var addi = get.value(card) >= 8 && get.type(card) != 'equip' ? -6 : 0;
                            if (card.name == 'du') addi -= 5;
                            if (player == event.player) {
                                if (Boolean(event.small)) {
                                    return -getn(card) - get.value(card) / 2 + addi;
                                }
                                return getn(card) - get.value(card) / 2 + addi;
                            } else {
                                if (get.attitude(player, to) <= 0 == Boolean(event.small)) {
                                    return -getn(card) - get.value(card) / 2 + addi;
                                }
                                return getn(card) - get.value(card) / 2 + addi;
                            }
                        };
                    next.setContent('chooseChess');
                }
                next.forceDie = true;
                next._args = Array.from(arguments);
                return next;
            };
            lib.element.content.chooseChess = function () {
                'step 0';
                if (((!event.fixedResult || !event.fixedResult[player.playerid]) && player.countCards('h') == 0) || ((!event.fixedResult || !event.fixedResult[target.playerid]) && target.countCards('h') == 0)) {
                    event.result = { cancelled: true, bool: false };
                    event.finish();
                    return;
                }
                event.trigger('chooseChessBegin');
                game.log(player, '对', target, '发起博弈');
                event.lose_list = [];
                ('step 1');
                var sendback = function () {
                    if (_status.event != event) {
                        return function () {
                            event.resultOL = _status.event.resultOL;
                        };
                    }
                };
                if (event.fixedResult && event.fixedResult[player.playerid]) {
                    event.card1 = event.fixedResult[player.playerid];
                    event.lose_list.push([player, event.card1]);
                } else if (player.isOnline()) {
                    player.wait(sendback);
                    event.ol = true;
                    player.send(function (ai) {
                        game.me.chooseCard('请选择博弈牌', true).set('type', 'chess').set('glow_result', true).ai = ai;
                        game.resume();
                    }, event.ai);
                } else {
                    event.localPlayer = true;
                    player.chooseCard('请选择博弈牌', true).set('type', 'chess').set('glow_result', true).ai = event.ai;
                }
                if (event.fixedResult && event.fixedResult[target.playerid]) {
                    event.card2 = event.fixedResult[target.playerid];
                    event.lose_list.push([target, event.card2]);
                } else if (target.isOnline()) {
                    target.wait(sendback);
                    event.ol = true;
                    target.send(function (ai) {
                        game.me.chooseCard('请选择博弈牌', true).set('type', 'chess').set('glow_result', true).ai = ai;
                        game.resume();
                    }, event.ai);
                } else {
                    event.localTarget = true;
                }
                ('step 2');
                if (event.localPlayer) {
                    if (result.skill && lib.skill[result.skill] && lib.skill[result.skill].onCompare) {
                        result.cards = lib.skill[result.skill].onCompare(player);
                    } else event.lose_list.push([player, result.cards[0]]);
                    event.card1 = result.cards[0];
                }
                if (event.localTarget) {
                    target.chooseCard('请选择博弈牌', true).set('type', 'chess').set('glow_result', true).ai = event.ai;
                }
                ('step 3');
                if (event.localTarget) {
                    if (result.skill && lib.skill[result.skill] && lib.skill[result.skill].onCompare) {
                        result.cards = lib.skill[result.skill].onCompare(target);
                    } else event.lose_list.push([target, result.cards[0]]);
                    event.card2 = result.cards[0];
                }
                if (!event.resultOL && event.ol) {
                    game.pause();
                }
                ('step 4');
                if (event.num2 >= 10 || event.num2 <= 4) {
                    if (target.countCards('h') > 2) {
                        event.addToAI = true;
                    }
                }
                if (event.lose_list.length) {
                    game.loseAsync({
                        lose_list: event.lose_list,
                    }).setContent('chooseChessLose');
                }
                ('step 5');
                event.trigger('chessCardShowBefore');
                ('step 6');
                game.broadcast(function () {
                    ui.arena.classList.add('thrownhighlight');
                });
                ui.arena.classList.add('thrownhighlight');
                game.addVideo('thrownhighlight1');
                player.$compare(event.card1, target, event.card2);
                game.log(player, '的博弈牌为', event.card1);
                game.log(target, '的博弈牌为', event.card2);
                event.num1 = get.number_chess(event.card1);
                event.num2 = get.number_chess(event.card2);
                event.trigger('chess');
                ('step 7');
                event.result = {
                    player: event.card1,
                    target: event.card2,
                    num1: event.num1,
                    num2: event.num2,
                };
                var str;
                // console.log(event.num1 , event.num2)
                if (event.num1 > event.num2) {
                    event.result.bool = true;
                    event.result.winner = player;
                    str = get.translation(player) + '博弈成功';
                    player.popup('胜');
                    target.popup('负');
                } else {
                    event.result.bool = false;
                    str = get.translation(player) + '博弈失败';
                    if (event.num1 == event.num2) {
                        event.result.tie = true;
                        player.popup('平');
                        target.popup('平');
                    } else {
                        event.result.winner = target;
                        player.popup('负');
                        target.popup('胜');
                    }
                }
                game.broadcastAll(function (str) {
                    var dialog = ui.create.dialog(str);
                    dialog.classList.add('center');
                    setTimeout(function () {
                        dialog.close();
                    }, 1000);
                }, str);
                ('step 8');
                if (typeof event.target.ai.shown == 'number' && event.target.ai.shown <= 0.85 && event.addToAI) {
                    event.target.ai.shown += 0.1;
                }
                game.broadcastAll(function () {
                    ui.arena.classList.remove('thrownhighlight');
                });
                game.addVideo('thrownhighlight2');
                if (event.clear !== false) {
                    game.broadcastAll(ui.clear);
                }
                if (typeof event.preserve == 'function') {
                    event.preserve = event.preserve(event.result);
                } else if (event.preserve == 'win') {
                    event.preserve = event.result.bool;
                } else if (event.preserve == 'lose') {
                    event.preserve = !event.result.bool;
                }
            };
            lib.element.content.chooseChessMultiple = function () {
                'step 0';
                if (player.countCards('h') == 0) {
                    event.result = { cancelled: true, bool: false };
                    event.finish();
                    return;
                }
                for (let i = 0; i < targets.length; i++) {
                    if (targets[i].countCards('h') == 0) {
                        event.result = { cancelled: true, bool: false };
                        event.finish();
                        return;
                    }
                }
                if (!event.multitarget) {
                    targets.sort(lib.sort.seat);
                }
                game.log(player, '对', targets, '发起博弈');
                ('step 1');
                event._result = [];
                event.list = targets.filter(function (current) {
                    return !event.fixedResult || !event.fixedResult[current.playerid];
                });
                if (event.list.length || !event.fixedResult || !event.fixedResult[player.playerid]) {
                    if (!event.fixedResult || !event.fixedResult[player.playerid]) event.list.unshift(player);
                    player.chooseCardOL(event.list, '请选择博弈牌', true).set('type', 'chess').set('ai', event.ai).set('source', player).aiCard = function (target) {
                        var hs = target.getCards('h');
                        var event = _status.event;
                        event.player = target;
                        hs.sort(function (a, b) {
                            return event.ai(b) - event.ai(a);
                        });
                        delete event.player;
                        return { bool: true, cards: [hs[0]] };
                    };
                }
                ('step 2');
                var cards = [];
                var lose_list = [];
                if (event.fixedResult && event.fixedResult[player.playerid]) {
                    event.list.unshift(player);
                    result.unshift({ bool: true, cards: [event.fixedResult[player.playerid]] });
                    lose_list.push([player, [event.fixedResult[player.playerid]]]);
                } else {
                    if (result[0].skill && lib.skill[result[0].skill] && lib.skill[result[0].skill].onCompare) {
                        result[0].cards = lib.skill[result[0].skill].onCompare(player);
                    } else lose_list.push([player, result[0].cards]);
                }
                for (var j = 0; j < targets.length; j++) {
                    if (event.list.includes(targets[j])) {
                        var i = event.list.indexOf(targets[j]);
                        if (result[i].skill && lib.skill[result[i].skill] && lib.skill[result[i].skill].onCompare) {
                            result[i].cards = lib.skill[result[i].skill].onCompare(event.list[i]);
                        } else lose_list.push([targets[j], result[i].cards]);
                        cards.push(result[i].cards[0]);
                    } else if (event.fixedResult && event.fixedResult[targets[j].playerid]) {
                        cards.push(event.fixedResult[targets[j].playerid]);
                        lose_list.push([targets[j], [event.fixedResult[targets[j].playerid]]]);
                    }
                }
                if (lose_list.length) {
                    game.loseAsync({
                        lose_list: lose_list,
                    }).setContent('chooseChessLose');
                }
                event.lose_list = lose_list;
                event.cardlist = cards;
                event.cards = cards;
                event.card1 = result[0].cards[0];
                event.num1 = event.get.number_chess(event.card1);
                event.iwhile = 0;
                event.result = {
                    player: event.card1,
                    targets: event.cardlist.slice(0),
                    num1: [],
                    num2: [],
                };
                ('step 3');
                event.trigger('chessCardShowBefore');
                ('step 4');
                game.log(player, '的博弈牌为', event.card1);
                ('step 5');
                if (event.iwhile < targets.length) {
                    event.target = targets[event.iwhile];
                    event.target.addTempClass('target');
                    player.addTempClass('target');
                    event.card2 = event.cardlist[event.iwhile];
                    event.num2 = event.get.number_chess(event.card2);
                    game.log(event.target, '的博弈牌为', event.card2);
                    player.line(event.target);
                    player.$compare(event.card1, event.target, event.card2);
                    event.trigger('chess');
                } else {
                    event.goto(9);
                }
                ('step 6');
                event.result.num1[event.iwhile] = event.num1;
                event.result.num2[event.iwhile] = event.num2;
                var str;
                if (event.num1 > event.num2) {
                    str = get.translation(player) + '博弈成功';
                    player.popup('胜');
                    target.popup('负');
                } else {
                    str = get.translation(player) + '博弈失败';
                    if (event.num1 == event.num2) {
                        player.popup('平');
                        target.popup('平');
                    } else {
                        player.popup('负');
                        target.popup('胜');
                    }
                }
                game.broadcastAll(function (str) {
                    var dialog = ui.create.dialog(str);
                    dialog.classList.add('center');
                    setTimeout(function () {
                        dialog.close();
                    }, 1000);
                }, str);
                ('step 7');
                if (event.callback) {
                    game.broadcastAll(
                        function (card1, card2) {
                            if (card1.clone) card1.clone.style.opacity = 0.5;
                            if (card2.clone) card2.clone.style.opacity = 0.5;
                        },
                        event.card1,
                        event.card2
                    );
                    var next = game.createEvent('chessMultiple');
                    next.player = player;
                    next.target = event.target;
                    next.card1 = event.card1;
                    next.card2 = event.card2;
                    next.num1 = event.num1;
                    next.num2 = event.num2;
                    next.setContent(event.callback);
                    event.chessMultiple = true;
                }
                ('step 8');
                game.broadcastAll(ui.clear);
                event.iwhile++;
                event.goto(5);
                ('step 9');
                event.cards.add(event.card1);
            };
            lib.element.content.chooseChessLose = function () {
                for (let i = 0; i < event.lose_list.length; i++) {
                    var next = event.lose_list[i][0].lose(event.lose_list[i][1], ui.ordering);
                    next.relatedEvent = event.parent;
                    next.getlx = false;
                }
            };
            //动画
            game.liejiangflame = function (x, y, duration, effectType) {
                var particles = [];
                var particle_count = 50;
                if (effectType == 'addZhimou') {
                    particle_count = 30;
                } else if (effectType == 'removeZhimou') {
                    particle_count = 120;
                }
                for (let i = 0; i < particle_count; i++) {
                    particles.push(new particle());
                }
                function particle() {
                    this.speed = { x: -1 + Math.random() * 2, y: -5 + Math.random() * 5 };
                    if (effectType == 'addZhimou') {
                        this.speed.y = -3 + Math.random() * 5;
                        this.speed.x = -2 + Math.random() * 4;
                    }
                    if (effectType == 'removeZhimou') {
                        this.speed.x *= 3;
                        this.speed.y *= 1.5;
                    }
                    this.location = { x: x, y: y };
                    this.radius = 0.5 + Math.random() * 1;
                    this.life = 10 + Math.random() * 10;
                    this.death = this.life;
                    switch (effectType) {
                        case 'addZhimou': {
                            this.b = 255;
                            this.r = Math.round(Math.random() * 255);
                            this.g = Math.round(Math.random() * 255);
                            this.x += Math.random() * 20 - 10;
                            this.y += Math.random() * 20 - 10;
                            break;
                        }
                        case 'removeZhimou': {
                            this.r = 128;
                            this.g = 0;
                            this.b = 128;
                            this.location.x += Math.round(Math.random() * 60) - 30;
                            this.location.y += Math.round(Math.random() * 40) - 20;
                            if (this.location.x < x) {
                                this.speed.x = -Math.abs(this.speed.x);
                            } else if (this.location.x > x) {
                                this.speed.x = Math.abs(this.speed.x);
                            }
                            this.life *= 1.3;
                            this.death *= 1.3;
                            break;
                        }
                    }
                }
                var type = effectType;
                game.draw(function (time, surface) {
                    surface.globalCompositeOperation = 'source-over';
                    surface.globalCompositeOperation = 'lighter';
                    for (let i = 0; i < particles.length; i++) {
                        var p = particles[i];
                        surface.beginPath();
                        var middle = 0.5;
                        var radius = p.radius;
                        if (type == 'recover' || type == 'legend' || type == 'rare' || type == 'epic' || type == 'coin' || type == 'dust') {
                            continue; // 跳过这些类型的粒子
                        }
                        p.opacity = Math.round((p.death / p.life) * 100) / 100;
                        var gradient = surface.createRadialGradient(p.location.x, p.location.y, 0, p.location.x, p.location.y, p.radius);
                        gradient.addColorStop(0, 'rgba(' + p.r + ', ' + p.g + ', ' + p.b + ', ' + p.opacity + ')');
                        gradient.addColorStop(middle, 'rgba(' + p.r + ', ' + p.g + ', ' + p.b + ', ' + p.opacity + ')');
                        gradient.addColorStop(1, 'rgba(' + p.r + ', ' + p.g + ', ' + p.b + ', 0)');
                        surface.fillStyle = gradient;
                        surface.arc(p.location.x, p.location.y, radius, Math.PI * 2, false);
                        surface.fill();
                        p.death--;
                        if (type == 'addZhimou') {
                            p.radius += 0.5;
                        } else if (type == 'removeZhimou') {
                            p.radius += 0.7;
                        } else {
                            p.radius++;
                        }
                        p.location.x += p.speed.x;
                        p.location.y += p.speed.y;
                        if (p.death < 0 || p.radius < 0) {
                            if (typeof duration == 'number' && time + 500 >= duration) {
                                particles.splice(i--, 1);
                            } else {
                                particles[i] = new particle();
                            }
                        }
                    }
                    if (particles.length == 0) {
                        return false;
                    }
                });
            };
            lib.element.player.$addZhimou = function () {
                game.addVideo('flame', this, 'addZhimou');
                var left, top;
                if (game.chess) {
                    var rect = this.getBoundingClientRect();
                    left = rect.left;
                    top = rect.top;
                } else {
                    left = this.getLeft();
                    top = this.getTop();
                }
                game.liejiangflame(left + this.offsetWidth / 2, top + this.offsetHeight - 30, 700, 'addZhimou');
            };
            lib.element.player.$removeZhimou = function () {
                game.addVideo('flame', this, 'removeZhimou');
                var left, top;
                if (game.chess) {
                    var rect = this.getBoundingClientRect();
                    left = rect.left;
                    top = rect.top;
                } else {
                    left = this.getLeft();
                    top = this.getTop();
                }
                game.liejiangflame(left + this.offsetWidth / 2, top + this.offsetHeight - 30, 700, 'removeZhimou');
            };
            lib.skill.zouweigong_Angelngji_chooseToUse_yc = {
                charlotte: true,
                group: 'undist',
                init(player) {
                    if (player.isIn()) {
                        game.broadcastAll(function (player) {
                            player.classList.add('out');
                        }, player);
                        game.log(player, '移出了游戏');
                    }
                },
                onremove(player) {
                    if (player.isOut()) {
                        game.broadcastAll(function (player) {
                            player.classList.remove('out');
                        }, player);
                        game.log(player, '移回了游戏');
                    }
                },
            };
            lib.wuxing = ['jin', 'mu', 'shui', 'huo', 'tu'];
            lib.element.player.updateZhimou = function () {
                const player_z = this;
                for (const i of player_z.childNodes) {
                    if (i.id == 'zhimou_sty') {
                        for (var p of i.childNodes) {
                            if (p.id == 'zhimou_number') {
                                p.innerHTML = `<div>${player_z.zhimoudian}/${player_z.maxzhimoudian}</div>`;
                            }
                        }
                    }
                }
            };
            lib.element.player.gainPlayerZhimou = function (target, num) {
                if (!num) num = 1;
                var next = game.createEvent('gainPlaterZhimou');
                next.target = target;
                next.player = this;
                next.num = num;
                next.setContent('gainPlayerZhimou');
            };
            lib.element.content.gainPlayerZhimou = function () {
                target.removeZhimou(num);
                player.addZhimou(num);
                player.updateZhimou();
                event.player = player;
                event.target = target;
                event.num = num;
                event.trigger('gainPlayerZhimou');
                game.log(player, '获得了', target, '' + num + '点', '#g【智谋点】');
            };
            lib.element.player.addZhimou = function (number) {
                for (var player of game.filterPlayer()) {
                    for (const i of player.getSkills()) {
                        if (lib.skill[i]) {
                            if (lib.skill[i].mod && lib.skill[i].mod.maxZhimoudian) {
                                var num = lib.character[player.name][5] ? lib.character[player.name][5][1] : 5;
                                player.maxzhimoudian = num;
                                player.maxzhimoudian = lib.skill[i].mod.maxZhimoudian(player.maxzhimoudian, player);
                            }
                        }
                    }
                }
                var number = number || 1;
                var num = Math.min(number, this.maxzhimoudian - this.zhimoudian);
                if (num > 0) {
                    var next = game.createEvent('gainZhimou');
                    next.player = this;
                    next.num = num;
                    next.setContent('addZhimou');
                }
            };
            lib.element.content.addZhimou = function () {
                event.player = player;
                event.num = num;
                player.zhimoudian += num;
                game.broadcastAll(function (player) {
                    if (lib.config.animation && !lib.config.low_performance) {
                        player.$addZhimou();
                    }
                }, player);
                player.$damagepop(num, 'wood');
                game.log(player, '增加了', num, '点', '#g【智谋点】');
                player.updateZhimou();
            };
            lib.element.player.removeZhimou = function (number) {
                for (var player of game.filterPlayer()) {
                    for (const i of player.getSkills()) {
                        if (lib.skill[i]) {
                            if (lib.skill[i].mod && lib.skill[i].mod.maxZhimoudian) {
                                var num = lib.character[player.name][5] ? lib.character[player.name][5][1] : 5;
                                player.maxzhimoudian = num;
                                player.maxzhimoudian = lib.skill[i].mod.maxZhimoudian(player.maxzhimoudian, player);
                            }
                        }
                    }
                }
                var number = number || 1;
                var num = this.zhimoudian - number >= 0 ? number : this.zhimoudian;
                if (num > 0) {
                    var next = game.createEvent('removeZhimou');
                    next.player = this;
                    next.num = num;
                    next.setContent('removeZhimou');
                }
            };
            lib.element.content.removeZhimou = function () {
                event.player = player;
                event.num = num;
                player.zhimoudian -= num;
                game.broadcastAll(function (player) {
                    if (lib.config.animation && !lib.config.low_performance) {
                        player.$removeZhimou();
                    }
                }, player);
                player.$damagepop(-num);
                game.log(player, '失去了', num, '点', '#g【智谋点】');
                player.updateZhimou();
            };
            lib.element.player.removeMaxZhimou = function (number) {
                for (var player of game.filterPlayer()) {
                    for (const i of player.getSkills()) {
                        if (lib.skill[i]) {
                            if (lib.skill[i].mod && lib.skill[i].mod.maxZhimoudian) {
                                var num = lib.character[player.name][5] ? lib.character[player.name][5][1] : 5;
                                player.maxzhimoudian = num;
                                player.maxzhimoudian = lib.skill[i].mod.maxZhimoudian(player.maxzhimoudian, player);
                            }
                        }
                    }
                }
                var number = number || 1;
                var num = this.maxzhimoudian - number >= 0 ? number : this.maxzhimoudian;
                if (num > 0) {
                    this.maxzhimoudian -= num;
                    if (this.zhimoudian > this.maxzhimoudian) this.zhimoudian = this.maxzhimoudian;
                    game.log(this, '减少了', num, '点', '#g【智谋点上限】');
                    this.updateZhimou();
                }
            };
            lib.element.player.addMaxZhimou = function (number) {
                for (var player of game.filterPlayer()) {
                    for (const i of player.getSkills()) {
                        if (lib.skill[i]) {
                            if (lib.skill[i].mod && lib.skill[i].mod.maxZhimoudian) {
                                var num = lib.character[player.name][5] ? lib.character[player.name][5][1] : 5;
                                player.maxzhimoudian = num;
                                player.maxzhimoudian = lib.skill[i].mod.maxZhimoudian(player.maxzhimoudian, player);
                            }
                        }
                    }
                }
                var number = number || 1;
                if (number > 0) {
                    this.maxzhimoudian += number;
                    game.log(this, '增加了', number, '点', '#g【智谋点上限】');
                    this.updateZhimou();
                }
            };
            get.yinyang = function (card, player) {
                var yinyang;
                if (!card.yinyang) {
                    if (card.cards && card.cards.length == 1) return card.cards[0].yinyang;
                    return '####锟斤拷###烫烫烫';
                } else {
                    return card.yinyang;
                }
            };
            get.zhimoudian = function (card, player) {
                var zhimoudian;
                if (player) {
                    if (!player.freeCard) this.freeCard = [];
                    if (player.freeCard.includes(card) || player.freeCard.includes(get.type(card))) return 0;
                }
                if (card.zhimoudian) {
                    zhimoudian = card.zhimoudian;
                    if (typeof zhimoudian != 'number') return '####锟斤拷###烫烫烫';
                    return zhimoudian;
                } else {
                    if (card.name) return lib.card[card.name].zhimoudian;
                    return '####锟斤拷###烫烫烫';
                }
            };
            get.wuxing = function (card, player) {
                var wuxing;
                if (!card.wuxing) {
                    if (card.cards && card.cards.length == 1) return card.cards[0].wuxing;
                    return '####锟斤拷###烫烫烫';
                } else {
                    return card.wuxing;
                }
            };
            get.guaxiang = function (card, player) {
                var guaxiang;
                if (!card.guaxiang) {
                    if (card.cards && card.cards.length == 1) return card.cards[0].guaxiang;
                    return '####锟斤拷###烫烫烫';
                } else {
                    return card.guaxiang;
                }
            };
            lib.translate._zhimoudian = '智谋点';
            lib.translate.scicard = '科技';
            lib.translate.amtcard = '军械';
            lib.translate.carcard = '车骑';
            lib.translate.tactics = '策略';
            lib.translate.effect = '效果';
            lib.translate.special = '特殊';
            lib.translate.yin = '阴';
            lib.translate.yang = '阳';
            lib.translate.jin = '金';
            lib.translate.mu = '木';
            lib.translate.shui = '水';
            lib.translate.huo = '火';
            lib.translate.tu = '土';
            var guaxiang = ['qian', 'kun', 'zhen', 'xun', 'kan', 'li', 'dui', 'gen'];
            var guaxiangtranslate = ['乾', '坤', '震', '巽', '坎', '离', '兑', '艮'];
            for (let i = 0; i < guaxiang.length; i++) {
                lib.translate[guaxiang[i]] = guaxiangtranslate[i];
            }
            game.addNature('ci', '刺', {
                linked: true,
                order: 1000,
            }); //添加杀的属性
            game.addNature('she', '射', {
                linked: true,
                order: 1000,
            }); //添加杀的属性
            game.addNature('zhan', '斩', {
                linked: true,
                order: 1000,
            }); //添加杀的属性
            if (lib.config.mode == 'liejiang_angel') {
                const quanju = function () {
                    lib.skill._usecardliejiang = {
                        mod: {
                            cardEnabled2(card, player) {
                                if (get.zhimoudian(card, player) > player.zhimoudian) return false;
                            },
                            cardSavable2(card, player) {
                                if (get.zhimoudian(card, player) > player.zhimoudian) return false;
                            },
                        },
                        trigger: {
                            player: 'useCard',
                        },
                        forced: true,
                        _priority: 100,
                        filter(event, player) {
                            if (get.zhimoudian(event.card)) {
                                return get.zhimoudian(event.card, player) <= player.zhimoudian;
                            }
                            return false;
                        },
                        content() {
                            if (player.freeCard.includes(trigger.card) || player.freeCard.includes(get.type(trigger.card))) {
                                game.log(player, '免费使用了', '#g' + get.translation(trigger.card));
                            } else {
                                player.removeZhimou(get.zhimoudian(trigger.card, player));
                            }
                        },
                    };
                    lib.skill._useCardci = {
                        trigger: {
                            player: 'useCardToPlayered',
                        },
                        filter(event, player) {
                            return event.card && event.card.name == 'gong' && event.card.nature == 'ci';
                        },
                        forced: true,
                        content() {
                            trigger.target.addTempSkill('qinggang2');
                            trigger.target.storage.qinggang2.add(trigger.card);
                            trigger.target.markSkill('qinggang2');
                        },
                    };
                    lib.skill._equip_skill_boyi_discard = {
                        trigger: {
                            global: ['loseAfter', 'loseAsyncAfter'],
                        },
                        filter(event, player) {
                            if (event.type != 'discard' || event.getlx === false) return false;
                            var cards = event.cards.slice(0);
                            var evt = event.getl(player);
                            if (evt && evt.cards) cards.removeArray(evt.cards);
                            if (Array.isArray(cards))
                                for (const i of cards) {
                                    if (i.original != 'j' && get.type(i) == 'equip' && get.position(i, true) == 'd') {
                                        return true;
                                    }
                                }
                            return false;
                        },
                        forced: true,
                        content() {
                            for (const i of trigger.cards) {
                                if (i.origin) {
                                    i.name = i.origin;
                                    game.card_equip_liejiang.remove(i.origin);
                                    i.querySelector('div.name').innerText = get.translation(i.origin);
                                    var cardangel = i;
                                    i.querySelector('div.name2').innerHTML = '<img style=width:10px src=extension/列疆/img/card/' + cardangel.yinyang + '.png><span style="color: rgb(255,140,0);font-family:xinwei">' + get.translation(cardangel.wuxing) + '<span > </span><span >' + get.translation(cardangel.guaxiang) + '</span></span> ' + get.translation(i.origin);
                                }
                            }
                        },
                    };
                    lib.skill._equip_skill_boyi = {
                        trigger: {
                            player: 'gainZhimouBegin',
                        },
                        forced: true,
                        filter: (event) => event.num >= 2,
                        content() {
                            'step 0';
                            var list = [];
                            for (const card in lib.card) {
                                if (['equip1', 'equip3', 'equip5'].includes(get.subtype(card)) && !game.card_equip_liejiang.includes(card)) {
                                    list.add(card);
                                }
                            }//QQQ
                            player.chooseButton(['是否令此次智谋点获取数-2,转而将一张牌转化为装备', [list, 'vcard']]).set('ai', (button) => {
                                return _status.event.player.getUseValue({ name: button.link[2], nature: button.link[3] });
                            });
                            ('step 1');
                            if (result.bool) {
                                game.card_equip_liejiang.add(result.links[0][2]);
                                player.chooseCard('选择获得一张卡牌转化为该装备', true, 'he').set('ai', function (card) {
                                    // AI认为应该选择价值最低的牌
                                    return 7 - get.value(card);
                                });
                                event.cardname = result.links[0][2];
                            }
                            ('step 2');
                            if (result.bool) {
                                trigger.num -= 2;
                                result.cards[0].origin = result.cards[0].name;
                                result.cards[0].name = event.cardname;
                                result.cards[0].querySelector('div.name').innerText = get.translation(event.cardname);
                                var cardangel = result.cards[0];
                                result.cards[0].querySelector('div.name2').innerHTML = '<img style=width:10px src=extension/列疆/img/card/' + cardangel.yinyang + '.png><span style="color: rgb(255,140,0);font-family:xinwei">' + get.translation(cardangel.wuxing) + '<span > </span><span >' + get.translation(cardangel.guaxiang) + '</span></span> ' + get.translation(event.cardname);
                            }
                        },
                        _priority: 1000,
                    };
                    lib.skill._equip_skill_discard = {
                        trigger: {
                            global: ['loseAfter', 'equipAfter', 'loseAsyncAfter', 'cardsDiscardAfter'],
                        },
                        forced: true,
                        silent: true,
                        firstDo: true,
                        filter(event, player) {
                            const nameList = [''];
                            return event.getd().some((card) => {
                                return nameList.includes(card.name) && get.position(card, true) === 'd';
                            });
                        },
                        async content(event, trigger, player) {
                            const nameList = ['shan', 'tao', 'jiu'];
                            const cards = trigger.getd().filter((card) => {
                                return nameList.includes(card.name) && get.position(card, true) === 'd';
                            });
                            await game.cardsGotoSpecial(cards);
                            game.log(cards, '被移出了游戏');
                        },
                        popup: false,
                        _priority: 1,
                    };
                    lib.skill._Bouyi_baguapan = {
                        trigger: {
                            global: 'gameStart',
                        },
                        forced: true,
                        popup: false,
                        filter(event, player) {
                            return player == game.me;
                        },
                        content() {
                            game.guaxiang_bouyi = ['乾', '坤', '震', '巽', '坎', '离', '兑', '艮'].sort(() => Math.random() - 0.5);
                            game.number_bouyi = [1, 2, 3, 4, 5, 6, 7, 8];
                            game.filterChess = [];
                            for (const i of game.number_bouyi) {
                                game.filterChess.add([i, game.guaxiang_bouyi[i - 1]]);
                            }
                            ui.Baguapan = ui.create.system('八卦盘', null, true);
                            ui.click.BaguapanButton = () => {
                                var dialog = ui.create.dialog('hidden');
                                dialog.add('八卦盘');
                                var core = document.createElement('div');
                                core.style.width = '0';
                                core.style.height = '175px';
                                var centerX = -10,
                                    centerY = 80,
                                    radius = 85;
                                var radian = (Math.PI * 2) / game.guaxiang_bouyi.length;
                                var fulllist = game.filterChess;
                                for (let i = 0; i < game.filterChess.length; i++) {
                                    var td = document.createElement('div');
                                    var color = '';
                                    td.innerHTML = '<span' + color + '>[' + fulllist[i][1] + ']</span>';
                                    td.style.position = 'absolute';
                                    core.appendChild(td);
                                    td.style.left = centerX + radius * Math.sin(radian * i) + 'px';
                                    td.style.top = centerY - radius * Math.cos(radian * i) + 'px';
                                }
                                dialog.content.appendChild(core);
                                var core = document.createElement('div');
                                core.style.width = '0';
                                core.style.height = '175px';
                                var centerX = -12,
                                    centerY = 80,
                                    radius = 42.5;
                                var radian = (Math.PI * 2) / game.number_bouyi.length;
                                var fulllist = game.filterChess;
                                for (let i = 0; i < game.filterChess.length; i++) {
                                    var td = document.createElement('div');
                                    var color = '';
                                    td.innerHTML = '<span' + color + '>[' + fulllist[i][0] + ']</span>';
                                    td.style.position = 'absolute';
                                    core.appendChild(td);
                                    td.style.left = centerX + radius * Math.sin(radian * i) + 'px';
                                    td.style.top = centerY - radius * Math.cos(radian * i) + 'px';
                                }
                                dialog.content.appendChild(core);
                                return dialog;
                            };
                            lib.setPopped(ui.Baguapan, ui.click.BaguapanButton, 220);
                            ui.Baguapan.style.display = '';
                        },
                    };
                    lib.skill._maxHandcardBase_liejiang = {
                        mod: {
                            maxHandcardBase(player, num) {
                                return num + player.zhimoudian;
                            },
                        },
                    };
                    lib.skill._jieshuhuanhun_skillremove = {
                        forced: true,
                        popup: false,
                        trigger: {
                            player: ['useSkill', 'logSkillBegin'],
                        },
                        filter(event, player) {
                            var skill = event.sourceSkill || event.skill;
                            for (var i in player.temp) {
                                if (skill == i) return true;
                                else {
                                    if (player.temp[i].includes(skill)) return true;
                                }
                            }
                        },
                        content() {
                            var skill = trigger.sourceSkill || trigger.skill;
                            for (var i in player.temp) {
                                if (skill == i) {
                                    event.trigger(skill + 'jieshu');
                                } else {
                                    if (player.temp[i].includes(skill)) event.trigger(skill + 'jieshu');
                                }
                            }
                        },
                    };
                    lib.skill._zhimoudian_recover = {
                        trigger: {
                            player: ['phaseUseBegin', 'phaseDrawBegin'],
                        },
                        forced: true,
                        filter: (event, player) => player.zhimoudian < 5,
                        content() {
                            for (let i of player.getSkills()) {
                                if (lib.skill[i]) {
                                    if (lib.skill[i].mod && lib.skill[i].mod.Usezhimou) {
                                        player.phaseUseZhimo = lib.skill[i].mod.Usezhimou(player.phaseUseZhimo, player);
                                    }
                                }
                            }
                            if (trigger.name == 'phaseUse') player.addZhimou(player.phaseUseZhimo);
                            if (trigger.name == 'phaseDraw') player.addZhimou(player.phaseDrawZhimo);
                            player.update();
                        },
                    };
                    lib.skill._init_zhimou = {
                        trigger: {
                            global: 'gameStart',
                        },
                        forced: true,
                        filter: () => !_status._init_zhimou,
                        content() {
                            _status._init_zhimou = true;
                            for (var player of game.players) {
                                var zhimou = document.createElement('div');
                                var zhimou_style = document.createElement('div');
                                var zhimou_number = document.createElement('div');
                                var zhimou_sty = document.createElement('div');
                                zhimou_style.style.width = `120px`;
                                zhimou_style.id = 'zhimou_style';
                                zhimou_style.style.height = `25px`;
                                zhimou_style.style.backgroundColor = 'rgb(125,125,125)';
                                zhimou_style.style.opacity = '0.5';
                                zhimou_style.style.borderRadius = '10px';
                                zhimou_style.style.top = `5px`;
                                zhimou.id = 'zhimou';
                                zhimou.style.backgroundImage = 'url(extension/列疆/img/style/zhimou_style.png)';
                                zhimou.style.backgroundSize = 'cover';
                                zhimou.style.backgroundPosition = 'center';
                                zhimou.style.width = `25px`;
                                zhimou.style.height = `20px`;
                                zhimou.style.left = `80px`;
                                zhimou.style.top = `7px`;
                                zhimou_number.id = 'zhimou_number';
                                zhimou_number.style.width = `25px`;
                                zhimou_number.style.height = `20px`;
                                zhimou_number.style.left = `50px`;
                                zhimou_number.style.top = `7px`;
                                zhimou_number.innerHTML = `<div>${player.zhimoudian}/${player.maxzhimoudian}</div>`;
                                zhimou_sty.classList.add('update');
                                zhimou_sty.id = 'zhimou_sty';
                                zhimou_sty.style.width = `120px`;
                                zhimou_style.id = 'zhimou_style';
                                zhimou_style.style.height = `25px`;
                                zhimou_sty.appendChild(zhimou_style);
                                zhimou_sty.appendChild(zhimou);
                                zhimou_sty.appendChild(zhimou_number);
                                player.appendChild(zhimou_sty);
                            }
                            lib.game_gameStart = true;
                        },
                    };
                    lib.skill._Hit = {
                        trigger: {
                            player: 'useCard',
                        },
                        forced: true,
                        filter(event, player) {
                            if (!player._Hit) player._Hit = [];
                            if (player._Hit.length) {
                                return game.hasPlayer((current) => {
                                    return current != player && player._Hit && player._Hit.map((hit) => hit[0]).includes(current);
                                });
                            }
                            return false;
                        },
                        groupSkill: true,
                        content() {
                            game.log(
                                game.filterPlayer((current) => {
                                    return current != player && player._Hit && player._Hit.map((hit) => hit[0]).includes(current);
                                }),
                                '无法响应',
                                player,
                                '使用的',
                                trigger.card
                            );
                            trigger.directHit.addArray(
                                game.filterPlayer((current) => {
                                    return current != player && player._Hit && player._Hit.map((hit) => hit[0]).includes(current);
                                })
                            );
                        },
                        group: '_Hit_1',
                        subSkill: {
                            1: {
                                trigger: {
                                    global: 'phaseEnd',
                                },
                                forced: true,
                                _priority: 9,
                                filter(event, player) {
                                    if (!player._Hit) player._Hit = [];
                                    if (player._Hit.length) {
                                        for (const i of player._Hit.map((hit) => hit[1])) {
                                            if (i == 'fasle') return false;
                                        }
                                    }
                                    return false;
                                },
                                content() {
                                    'step 0';
                                    event.number = 0;
                                    ('step 1');
                                    if (player._Hit[event.number]) {
                                        if (player._Hit[event.number][1] == 'fasle') {
                                            player._Hit.remove(player._Hit[event.number]);
                                        }
                                    } else {
                                        for (const i of player._Hit.map((hit) => hit[1])) {
                                            if (i == 'fasle') {
                                                event.goto(0);
                                            }
                                        }
                                    }
                                    ('step 2');
                                    for (const i of player._Hit.map((hit) => hit[1])) {
                                        if (!i) {
                                            event.number++;
                                            event.goto(1);
                                        }
                                    }
                                },
                            },
                        },
                    };
                    lib.skill._Form = {
                        mod: {
                            globalFrom(from, to, current) {
                                if (!from.From) from.From = {};
                                if (from.From) {
                                    for (var i in from.From) {
                                        if (to.name == i) {
                                            if (from.From[i][0] == 1) return -Infinity;
                                            else if (from.From[i][0] < 0) return current + from.From[i][0];
                                        }
                                    }
                                }
                            },
                        },
                        trigger: {
                            global: 'phaseEnd',
                        },
                        forced: true,
                        _priority: 10,
                        filter(event, player) {
                            if (!player.From) player.From = {};
                            if (player.From) {
                                for (var i in player.From) {
                                    if (player.From[i][1] == 'false') return true;
                                }
                            }
                            return false;
                        },
                        content() {
                            if (player.From) {
                                var tempfrom = {};
                                for (var i in player.From) {
                                    if (player.From[i][1] == 'false') {
                                        tempfrom[i] = player.From[i];
                                    }
                                }
                                // console.log(tempfrom)
                                for (var i in tempfrom) {
                                    delete player.From[i];
                                }
                            }
                        },
                    };
                    lib.skill._wuzhongshengyou_chooseToUse = {
                        enable: ['chooseToUse', 'chooseToRespond'],
                        filter(event, player) {
                            var card = player.getCards('h').map((card) => card.name);
                            for (const i of lib.inpile) {
                                var type = get.type(i);
                                if ((type == 'effect' || type == 'tactics') && event.filterCard({ name: i }, player, event) && card.includes('wuzhongshengyou_Angel')) return true;
                            }
                            return false;
                        },
                        chooseButton: {
                            dialog(event, player) {
                                var list = [];
                                for (let i = 0; i < lib.inpile.length; i++) {
                                    var name = lib.inpile[i];
                                    if (name == 'gong_Angel') {
                                        if (event.filterCard && event.filterCard({ name: name }, player, event)) list.push(['效果', '', 'gong_Angel']);
                                        for (var j of lib.inpile_nature) {
                                            if (event.filterCard && event.filterCard({ name: name, nature: j }, player, event)) list.push(['效果', '', 'gong_Angel', j]);
                                        }
                                    } else if (get.type2(name) == 'tactics' && event.filterCard({ name: name }, player, event)) list.push(['策略', '', name]);
                                    else if (get.type(name) == 'effect' && event.filterCard({ name: name }, player, event)) list.push(['效果', '', name]);
                                }
                                return ui.create.dialog('无中生有', [list, 'vcard']);
                            },
                            filter(button, player) {
                                return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
                            },
                            check(button) {
                                if (_status.event.parent.type != 'phase') return 1;
                                var player = _status.event.player;
                                return player.getUseValue({
                                    name: button.link[2],
                                    nature: button.link[3],
                                });
                            },
                            backup(links, player) {
                                return {
                                    filterCard: (card) => card.name == 'wuzhongshengyou_Angel',
                                    popname: true,
                                    check(card) {
                                        return 8 - get.value(card);
                                    },
                                    position: 'h',
                                    viewAs: { name: links[0][2], nature: links[0][3] },
                                };
                            },
                            prompt(links, player) {
                                return '将一张【无中生有】当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                            },
                        },
                        hiddenCard(player, name) {
                            if (!lib.inpile.includes(name)) return false;
                            var card = player.getCards('h').map((card) => card.name);
                            var type = get.type2(name);
                            return (type == 'effect' || type == 'tactics') && card.includes('wuzhongshengyou_Angel');
                        },
                        ai: {
                            fireAttack: true,
                            respondgong_Angel: true,
                            respondgong_Angeln: true,
                            order: 1,
                            result: {
                                player(player) {
                                    if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                    return 1;
                                },
                            },
                        },
                    };
                    lib.skill._lidailiangjiang_chooseToUse = {
                        check(event, player) {
                            return get.attitude(player, event.player) > 4;
                        },
                        trigger: {
                            global: 'damageBegin',
                        },
                        init: () => (_status.lidaitaojiang_Angel_true = false),
                        forced: true,
                        _priority: -2,
                        filter(event, player) {
                            return !_status.lidaitaojiang_Angel_true && event.num > 1;
                        },
                        content() {
                            'step 0';
                            event.number = 0;
                            _status.lidaitaojiang_Angel_true = true;
                            ('step 1');
                            var target3 = game.filterPlayer()[event.number];
                            if (!target3) event.finish();
                            if (target3 && trigger.player != target3) {
                                var card = target3.getCards('h').map((card) => card.name);
                                if (card.includes('lidaitaojiang_Angel') || target3.hasUsableCard('lidaitaojiang_Angel') || card.includes('wuzhongshengyou_Angel'))
                                    target3
                                        .chooseToUse(
                                            '是否对' + get.translation(trigger.player) + '使用一张【李代桃僵】',
                                            function (card, player, event) {
                                                if (card.name != 'lidaitaojiang_Angel') return false;
                                                return true;
                                            },
                                            trigger.player,
                                            -1
                                        )
                                        .set('addCount', false)
                                        .set('ai', (event, player, target) => {
                                            return get.attitude(player, target) > 4;
                                        });
                                lib._lidailiangjiang_ToUse = trigger;
                            }
                            ('step 2');
                            if (result.bool) event.finish();
                            else event.goto(3);
                            ('step 3');
                            event.number++;
                            event.goto(1);
                        },
                        ai: {
                            expose: 0.3,
                        },
                    };
                    lib.skill._weiweiliangzhao_chooseToUse = {
                        check(event, player) {
                            return get.attitude(player, event.player) > 4;
                        },
                        trigger: {
                            global: 'damageBegin',
                        },
                        forced: true,
                        _priority: -1,
                        filter(event, player) {
                            return !_status.weiweijiuzhao_Angel_true && event.card && event.card.name != 'weiweijiuzhao_Angel';
                        },
                        content() {
                            'step 0';
                            event.number = 0;
                            _status.weiweijiuzhao_Angel_true = true;
                            ('step 1');
                            var target3 = game.filterPlayer()[event.number];
                            if (!target3) event.finish();
                            if (target3 && trigger.player != target3 && trigger.source && trigger.source != target3) {
                                event.player1 = trigger.player;
                                var card = target3.getCards('h').map((card) => card.name);
                                if (card.includes('weiweijiuzhao_Angel') || target3.hasUsableCard('weiweijiuzhao_Angel') || card.includes('wuzhongshengyou_Angel'))
                                    target3
                                        .chooseToUse(
                                            '是否对' + get.translation(trigger.source) + '使用一张【围魏救赵】',
                                            function (card, target, player) {
                                                if (card.name != 'weiweijiuzhao_Angel') return false;
                                                return true;
                                            },
                                            trigger.source,
                                            -1
                                        )
                                        .set('addCount', false)
                                        .set('ai', (event, player, target) => {
                                            return get.attitude(player, event.player1) >= 4;
                                        });
                                lib._weiweiliangzhao_chooseToUse = trigger;
                            }
                            ('step 2');
                            if (result.bool) event.finish();
                            else event.goto(3);
                            ('step 3');
                            event.number++;
                            event.goto(1);
                        },
                        ai: {
                            expose: 0.3,
                        },
                    };
                    lib.skill._damage_useCard = {
                        trigger: {
                            player: 'useCardEnd',
                        },
                        forced: true,
                        filter: (event) => (!_status.weiweijiuzhao_Angel_true && event.card.name == 'weiweiliangzhao_Agel') || (!_status.fankeweizhu_Angel_true && event.card.name == 'fankeweizhu_Angel') || (!_status.lidaitaojiang_Angel_true && event.card.name == 'lidaitaojiang_Angel'),
                        content() {
                            if (!_status.weiweijiuzhao_Angel_true || !_status.fankeweizhu_Angel_true) {
                                if (!_status.weiweijiuzhao_Angel_true) {
                                    _status.weiweijiuzhao_Angel_true = false;
                                } else if (!_status.fankeweizhu_Angel_true) _status.fankeweizhu_Angel_true = false;
                                else _status.lidaitaojiang_Angel_true = false;
                            }
                        },
                    };
                    lib.skill._fankeweizhu_chooseToUse = {
                        check(event, player) {
                            return get.attitude(player, event.player) <= 0;
                        },
                        trigger: {
                            global: 'damageBegin',
                        },
                        init: () => (_status.fankeweizhu_Angel_true = false),
                        forced: true,
                        _priority: 2,
                        filter(event, player) {
                            return !_status.fankeweizhu_Angel_true && event.source;
                        },
                        content() {
                            'step 0';
                            event.number = 0;
                            _status.fankeweizhu_Angel_true = true;
                            ('step 1');
                            var target3 = game.filterPlayer()[event.number];
                            if (!target3) event.finish();
                            if (target3 && trigger.player != target3 && trigger.source && trigger.source != target3) {
                                var card = target3.getCards('h').map((card) => card.name);
                                if (card.includes('fankeweizhu_Angel') || target3.hasUsableCard('fankeweizhu_Angel') || card.includes('wuzhongshengyou_Angel'))
                                    target3
                                        .chooseToUse(
                                            '是否对' + get.translation(trigger.source) + '使用一张【反客为主】',
                                            function (card) {
                                                if (card.name != 'fankeweizhu_Angel') return false;
                                                return true;
                                            },
                                            trigger.source,
                                            -1
                                        )
                                        .set('addCount', false)
                                        .set('ai', (event, player, target) => {
                                            return get.attitude(player, target) <= 0;
                                        });
                                lib._fankeweizhu_ToUse = trigger;
                            }
                            ('step 2');
                            if (result.bool) event.finish();
                            else event.goto(3);
                            ('step 3');
                            event.number++;
                            event.goto(1);
                        },
                        ai: {
                            expose: 0.3,
                        },
                    };
                    lib.skill._shangwuchouti_Angel_chooseToUse = {
                        check(event, player) {
                            var target = event.player;
                            if (get.attitude(player, target) >= -2) return false;
                            return true;
                        },
                        trigger: {
                            target: 'useCardToTarget',
                        },
                        forced: true,
                        _priority: -1,
                        filter(event, player) {
                            var card = player.getCards('h').map((card) => card.name);
                            return (card.includes('shangwuchouti_Angel') || player.hasUsableCard('shangwuchouti_Angel') || card.includes('wuzhongshengyou_Angel')) && event.player != player;
                        },
                        content() {
                            lib.shangwuchouti_Angel_ToUse = trigger;
                            player
                                .chooseToUse(
                                    '是否对' + get.translation(player) + '使用一张【上屋抽梯】,弃置' + get.translation(trigger.player) + '两张牌',
                                    function (card, player, event) {
                                        if (card.name != 'shangwuchouti_Angel') return false;
                                        return true;
                                    },
                                    trigger.player,
                                    -1
                                )
                                .set('addCount', false)
                                .set('ai', (event, player, target) => {
                                    return get.attitude(player, target) <= 0;
                                });
                        },
                        ai: {
                            expose: 0.3,
                        },
                    };
                    lib.skill._jinchantuoqiao_chooseToUse = {
                        check(event, player) {
                            var target = event.player;
                            if (get.attitude(player, target) >= -2) return false;
                            return true;
                        },
                        trigger: {
                            target: 'useCardToTarget',
                        },
                        forced: true,
                        _priority: -1,
                        filter(event, player) {
                            var card = player.getCards('h').map((card) => card.name);
                            return (card.includes('jinchantuoqiao_Angel') || player.hasUsableCard('jinchantuoqiao_Angel') || card.includes('wuzhongshengyou_Angel')) && event.card.name != 'jinchantuoqiao_Angel' && (event.card.name == 'gong_Angel' || get.type(event.card) == 'tactics');
                        },
                        content() {
                            lib._jinchantuoqiao_ToUse = trigger;
                            player
                                .chooseToUse(
                                    '是否对' + get.translation(player) + '使用一张【金蝉脱壳】,令' + get.translation(trigger.card) + '对你无效并摸一张牌',
                                    function (card, player, event) {
                                        if (card.name != 'jinchantuoqiao_Angel') return false;
                                        return true;
                                    },
                                    player,
                                    -1
                                )
                                .set('addCount', false);
                        },
                        ai: {
                            expose: 0.3,
                        },
                    };
                    lib.skill._yiyidailao_chooseToUse = {
                        check(event, player) {
                            return true;
                        },
                        trigger: {
                            player: 'phaseDiscardEnd',
                        },
                        forced: true,
                        _priority: -1,
                        filter(event, player) {
                            var card = player.getCards('h').map((card) => card.name);
                            return card.includes('yiyidailao_Angel') || player.hasUsableCard('yiyidailao_Angel') || card.includes('wuzhongshengyou_Angel');
                        },
                        content() {
                            player
                                .chooseToUse(
                                    '是否对' + get.translation(player) + '使用一张【以逸待劳】',
                                    function (card, player, event) {
                                        if (card.name != 'yiyidailao_Angel') return false;
                                        return true;
                                    },
                                    player,
                                    -1
                                )
                                .set('addCount', false);
                        },
                        ai: {
                            expose: 0.3,
                        },
                    };
                    lib.skill._zouweigong_Angelngji_chooseToUse = {
                        check(event, player) {
                            return get.attitude(player, event.player) > 4;
                        },
                        trigger: {
                            global: 'dying',
                        },
                        forced: true,
                        _priority: -1,
                        filter(event, player) {
                            var card = player.getCards('h').map((card) => card.name);
                            return card.includes('zouweishangji_Angel') || player.hasUsableCard('zouweishangji_Angel') || card.includes('wuzhongshengyou_Angel');
                        },
                        check(event, player) {
                            return get.attitude(player, event.player) > 0;
                        },
                        content() {
                            player
                                .chooseToUse(
                                    '是否对' + get.translation(trigger.player) + '使用一张【走为上计】',
                                    function (card, player, event) {
                                        if (card.name != 'zouweishangji_Angel') return false;
                                        return true;
                                    },
                                    trigger.player,
                                    -1
                                )
                                .set('addCount', false);
                        },
                        ai: {
                            threaten: 1.4,
                        },
                    };
                    lib.skill._freeCard = {
                        mod: {
                            cardUsable(card, player, num) {
                                if (player.freeCard.includes(card) || player.freeCard.includes(get.type(card))) return Infinity;
                            },
                        },
                        trigger: {
                            player: 'useCard1',
                        },
                        forced: true,
                        filter(event, player) {
                            return (event.addCount !== false && player.freeCard.includes(event.card)) || player.freeCard.includes(get.type(event.card));
                        },
                        content() {
                            trigger.addCount = false;
                        },
                    };
                };
                quanju();
                get.cardInfo = function (card) {
                    return [card.wuxing, card.guaxiang, card.name, card.nature];
                };
                get.cardInfoOL = function (card) {
                    return '_noname_card:' + JSON.stringify([card.cardid, card.wuxing, card.guaxiang, card.name, card.nature]);
                };
                lib.element.content.gameDraw = function () {
                    'step 0';
                    if (_status.brawl && _status.brawl.noGameDraw) {
                        event.finish();
                        return;
                    }
                    var end = player;
                    var numx = num;
                    do {
                        if (typeof num == 'function') {
                            numx = num(player);
                        }
                        if (player.getTopCards) player.directgain(player.getTopCards(numx));
                        else player.directgain(get.cards(numx));
                        if (player.singleHp === true && get.mode() != 'guozhan' && (lib.config.mode != 'doudizhu' || _status.mode != 'online')) {
                            player.doubleDraw();
                        }
                        player._start_cards = player.getCards('h');
                        player = player.next;
                    } while (player != end);
                    event.changeCard = get.config('change_card');
                    if (_status.connectMode || (lib.config.mode == 'doudizhu' && _status.mode == 'online') || (lib.config.mode != 'identity' && lib.config.mode != 'guozhan' && lib.config.mode != 'doudizhu' && lib.config.mode != 'liejiang_angel')) {
                        event.changeCard = 'disabled';
                    }
                    ('step 1');
                    if (event.changeCard != 'disabled' && !_status.auto) {
                        event.dialog = ui.create.dialog('是否使用手气卡？');
                        ui.create.confirm('oc');
                        event.custom.replace.confirm = function (bool) {
                            _status.event.bool = bool;
                            game.resume();
                        };
                    } else {
                        event.finish();
                    }
                    ('step 2');
                    if (event.changeCard == 'once') {
                        event.changeCard = 'disabled';
                    } else if (event.changeCard == 'twice') {
                        event.changeCard = 'once';
                    } else if (event.changeCard == 'disabled') {
                        event.bool = false;
                        return;
                    }
                    _status.imchoosing = true;
                    event.switchToAuto = function () {
                        _status.event.bool = false;
                        game.resume();
                    };
                    game.pause();
                    ('step 3');
                    _status.imchoosing = false;
                    if (event.bool) {
                        if (game.changeCoin) {
                            game.changeCoin(-3);
                        }
                        var hs = game.me.getCards('h');
                        game.addVideo('lose', game.me, [get.cardsInfo(hs), [], [], []]);
                        for (let i = 0; i < hs.length; i++) {
                            hs[i].discard(false);
                        }
                        game.me.directgain(get.cards(hs.length));
                        event.goto(2);
                    } else {
                        if (event.dialog) event.dialog.close();
                        if (ui.confirm) ui.confirm.close();
                        game.me._start_cards = game.me.getCards('h');
                        event.finish();
                    }
                };
                var autoViewAs = get.autoViewAs;
                get.autoViewAs = function (card, cards) {
                    var autoViewAs1 = autoViewAs.call(this, card, cards);
                    var info = get.info(card);
                    if (info.autoViewAs) {
                        if (cards != false && !Array.isArray(cards) && get.itemtype(card) != 'card') {
                            autoViewAs1.wuxing = autoViewAs1.wuxing;
                            autoViewAs1.yinyang = autoViewAs1.yinyang;
                            autoViewAs1.guaxiang = autoViewAs1.guaxiang;
                            return autoViewAs1;
                        }
                    } else {
                        if (card.isCard || get.itemtype(card) == 'card') {
                            autoViewAs1.zhimoudian = get.zhimoudian(autoViewAs1);
                            autoViewAs1.wuxing = get.wuxing(autoViewAs1);
                            autoViewAs1.yinyang = get.yinyang(autoViewAs1);
                            autoViewAs1.guaxiang = get.guaxiang(autoViewAs1);
                            return autoViewAs1;
                        }
                        return autoViewAs1;
                    }
                    return autoViewAs1;
                };
                lib.card.list = [
                    //牌组添加牌格式 [五行,卦象,牌名,属性,阴阳]
                    ['mu', 'qian', 'gong_Angel', '', 'yin'],
                    ['shui', 'qian', 'gong_Angel', '', 'yin'],
                    ['huo', 'qian', 'gong_Angel', '', 'yin'],
                    ['jin', 'kun', 'gong_Angel', '', 'yin'],
                    ['mu', 'kun', 'gong_Angel', '', 'yin'],
                    ['tu', 'kun', 'gong_Angel', '', 'yin'],
                    ['shui', 'kun', 'gong_Angel', '', 'yang'],
                    ['huo', 'kun', 'gong_Angel', '', 'yang'],
                    ['tu', 'kun', 'gong_Angel', '', 'yang'],
                    ['mu', 'kan', 'gong_Angel', '', 'yin'],
                    ['shui', 'kan', 'gong_Angel', '', 'yin'],
                    ['huo', 'kan', 'gong_Angel', '', 'yin'],
                    ['tu', 'kan', 'gong_Angel', '', 'yin'],
                    ['mu', 'li', 'gong_Angel', '', 'yin'],
                    ['tu', 'li', 'gong_Angel', '', 'yin'],
                    ['jin', 'li', 'gong_Angel', '', 'yang'],
                    ['shui', 'li', 'gong_Angel', '', 'yang'],
                    ['tu', 'li', 'gong_Angel', '', 'yang'],
                    ['jin', 'zhen', 'gong_Angel', '', 'yin'],
                    ['tu', 'zhen', 'gong_Angel', '', 'yin'],
                    ['shui', 'zhen', 'gong_Angel', '', 'yang'],
                    ['mu', 'gen', 'gong_Angel', '', 'yin'],
                    ['huo', 'gen', 'gong_Angel', '', 'yin'],
                    ['huo', 'gen', 'gong_Angel', '', 'yang'],
                    ['mu', 'xun', 'gong_Angel', '', 'yin'],
                    ['shui', 'xun', 'gong_Angel', '', 'yin'],
                    ['huo', 'xun', 'gong_Angel', '', 'yin'],
                    ['tu', 'xun', 'gong_Angel', '', 'yang'],
                    ['mu', 'dui', 'gong_Angel', '', 'yang'],
                    ['tu', 'dui', 'gong_Angel', '', 'yang'],
                    ['jin', 'qian', 'gong_Angel', 'ci', 'yin'],
                    ['tu', 'qian', 'gong_Angel', 'ci', 'yin'],
                    ['tu', 'qian', 'gong_Angel', 'ci', 'yang'],
                    ['huo', 'kun', 'gong_Angel', 'ci', 'yin'],
                    ['jin', 'kan', 'gong_Angel', 'ci', 'yang'],
                    ['shui', 'li', 'gong_Angel', 'ci', 'yin'],
                    ['mu', 'li', 'gong_Angel', 'ci', 'yang'],
                    ['mu', 'zhen', 'gong_Angel', 'ci', 'yang'],
                    ['shui', 'zhen', 'gong_Angel', 'ci', 'yang'],
                    ['shui', 'gen', 'gong_Angel', 'ci', 'yin'],
                    ['huo', 'gen', 'gong_Angel', 'ci', 'yin'],
                    ['jin', 'xun', 'gong_Angel', 'ci', 'yin'],
                    ['huo', 'xun', 'gong_Angel', 'ci', 'yang'],
                    ['jin', 'dui', 'gong_Angel', 'ci', 'yin'],
                    ['tu', 'dui', 'gong_Angel', 'ci', 'yin'],
                    ['jin', 'qian', 'gong_Angel', 'she', 'yang'],
                    ['huo', 'kun', 'gong_Angel', 'she', 'yang'],
                    ['huo', 'zhen', 'gong_Angel', 'she', 'yin'],
                    ['mu', 'zhen', 'gong_Angel', 'she', 'yang'],
                    ['mu', 'xun', 'gong_Angel', 'she', 'yin'],
                    ['shui', 'xun', 'gong_Angel', 'she', 'yang'],
                    ['jin', 'dui', 'gong_Angel', 'she', 'yang'],
                    ['jin', 'li', 'gong_Angel', 'zhan', 'yang'],
                    ['huo', 'li', 'gong_Angel', 'zhan', 'yang'],
                    ['tu', 'zhen', 'gong_Angel', 'zhan', 'yang'],
                    ['shui', 'gen', 'gong_Angel', 'zhan', 'yang'],
                    ['huo', 'dui', 'gong_Angel', 'zhan', 'yin'],
                    ['mu', 'qian', 'shou_Angel', '', 'yin'],
                    ['shui', 'qian', 'shou_Angel', '', 'yin'],
                    ['huo', 'qian', 'shou_Angel', '', 'yang'],
                    ['mu', 'kun', 'shou_Angel', '', 'yin'],
                    ['jin', 'kun', 'shou_Angel', '', 'yang'],
                    ['shui', 'kun', 'shou_Angel', '', 'yang'],
                    ['jin', 'kan', 'shou_Angel', '', 'yin'],
                    ['shui', 'kan', 'shou_Angel', '', 'yin'],
                    ['tu', 'kan', 'shou_Angel', '', 'yin'],
                    ['mu', 'kan', 'shou_Angel', '', 'yang'],
                    ['huo', 'kan', 'shou_Angel', '', 'yang'],
                    ['jin', 'li', 'shou_Angel', '', 'yin'],
                    ['jin', 'zhen', 'shou_Angel', '', 'yin'],
                    ['mu', 'zhen', 'shou_Angel', '', 'yin'],
                    ['tu', 'zhen', 'shou_Angel', '', 'yin'],
                    ['jin', 'gen', 'shou_Angel', '', 'yang'],
                    ['mu', 'gen', 'shou_Angel', '', 'yang'],
                    ['shui', 'gen', 'shou_Angel', '', 'yang'],
                    ['huo', 'gen', 'shou_Angel', '', 'yang'],
                    ['shui', 'xun', 'shou_Angel', '', 'yin'],
                    ['huo', 'xun', 'shou_Angel', '', 'yin'],
                    ['tu', 'xun', 'shou_Angel', '', 'yin'],
                    ['jin', 'dui', 'shou_Angel', '', 'yin'],
                    ['shui', 'dui', 'shou_Angel', '', 'yin'],
                    ['tu', 'dui', 'shou_Angel', '', 'yin'],
                    ['mu', 'dui', 'shou_Angel', '', 'yang'],
                    ['huo', 'qian', 'liang_Angel', '', 'yin'],
                    ['mu', 'qian', 'liang_Angel', '', 'yang'],
                    ['tu', 'kun', 'liang_Angel', '', 'yang'],
                    ['huo', 'kan', 'liang_Angel', '', 'yin'],
                    ['tu', 'kan', 'liang_Angel', '', 'yang'],
                    ['jin', 'li', 'liang_Angel', '', 'yin'],
                    ['tu', 'li', 'liang_Angel', '', 'yang'],
                    ['jin', 'zhen', 'liang_Angel', '', 'yang'],
                    ['mu', 'gen', 'liang_Angel', '', 'yin'],
                    ['shui', 'gen', 'liang_Angel', '', 'yin'],
                    ['jin', 'dui', 'liang_Angel', '', 'yang'],
                    ['shui', 'dui', 'liang_Angel', '', 'yang'],
                    ['shui', 'qian', 'mantianguohai_Angel', '', 'yang'],
                    ['shui', 'kun', 'mantianguohai_Angel', '', 'yin'],
                    ['mu', 'kun', 'weiweijiuzhao_Angel', '', 'yang'],
                    ['jin', 'kan', 'weiweijiuzhao_Angel', '', 'yin'],
                    ['tu', 'kan', 'weiweijiuzhao_Angel', '', 'yang'],
                    ['tu', 'gen', 'yiyidailao_Angel', '', 'yang'],
                    ['shui', 'dui', 'yiyidailao_Angel', '', 'yin'],
                    ['shui', 'kun', 'shengdongjixi_Angel', '', 'yin'],
                    ['tu', 'kun', 'shengdongjixi_Angel', '', 'yin'],
                    ['shui', 'dui', 'shengdongjixi_Angel', '', 'yang'],
                    ['tu', 'dui', 'shengdongjixi_Angel', '', 'yang'],
                    ['jin', 'qian', 'wuzhongshengyou_Angel', '', 'yin'],
                    ['jin', 'qian', 'wuzhongshengyou_Angel', '', 'yang'],
                    ['jin', 'kun', 'wuzhongshengyou_Angel', '', 'yin'],
                    ['jin', 'kun', 'wuzhongshengyou_Angel', '', 'yang'],
                    ['mu', 'zhen', 'anduchencang_Angel', '', 'yin'],
                    ['shui', 'zhen', 'anduchencang_Angel', '', 'yin'],
                    ['mu', 'xun', 'anduchencang_Angel', '', 'yang'],
                    ['shui', 'xun', 'anduchencang_Angel', '', 'yang'],
                    ['huo', 'kun', 'geanguanhuo_Angel', '', 'yin'],
                    ['huo', 'zhen', 'geanguanhuo_Angel', '', 'yang'],
                    ['tu', 'zhen', 'geanguanhuo_Angel', '', 'yang'],
                    ['tu', 'qian', 'xiaolicangdao_Angel', '', 'yin'],
                    ['mu', 'kun', 'xiaolicangdao_Angel', '', 'yang'],
                    ['huo', 'zhen', 'xiaolicangdao_Angel', '', 'yin'],
                    ['jin', 'gen', 'xiaolicangdao_Angel', '', 'yin'],
                    ['huo', 'dui', 'xiaolicangdao_Angel', '', 'yang'],
                    ['mu', 'kan', 'lidaitaojiang_Angel', '', 'yang'],
                    ['mu', 'li', 'lidaitaojiang_Angel', '', 'yang'],
                    ['mu', 'dui', 'lidaitaojiang_Angel', '', 'yin'],
                    ['huo', 'kan', 'shunshouqianyang_Angel', '', 'yang'],
                    ['shui', 'li', 'shunshouqianyang_Angel', '', 'yin'],
                    ['huo', 'li', 'shunshouqianyang_Angel', '', 'yin'],
                    ['mu', 'kan', 'jieshihuanhun_Angel', '', 'yin'],
                    ['mu', 'gen', 'jieshihuanhun_Angel', '', 'yang'],
                    ['shui', 'kan', 'diaohuligong_Angeln_Angel', '', 'yang'],
                    ['jin', 'gen', 'diaohuligong_Angeln_Angel', '', 'yin'],
                    ['tu', 'gen', 'diaohuligong_Angeln_Angel', '', 'yin'],
                    ['huo', 'qian', 'fudichouxin_Angel', '', 'yang'],
                    ['mu', 'dui', 'fudichouxin_Angel', '', 'yin'],
                    ['jin', 'gen', 'jinchantuoqiao_Angel', '', 'yang'],
                    ['tu', 'gen', 'jinchantuoqiao_Angel', '', 'yang'],
                    ['jin', 'xun', 'jinchantuoqiao_Angel', '', 'yin'],
                    ['jin', 'xun', 'jinchantuoqiao_Angel', '', 'yang'],
                    ['shui', 'li', 'yuanjiaojingong_Angel', '', 'yang'],
                    ['huo', 'li', 'yuanjiaojingong_Angel', '', 'yang'],
                    ['huo', 'dui', 'yuanjiaojingong_Angel', '', 'yin'],
                    ['shui', 'kan', 'toulianghuanzhu_Angel', '', 'yang'],
                    ['huo', 'li', 'toulianghuanzhu_Angel', '', 'yin'],
                    ['mu', 'li', 'shangwuchouti_Angel', '', 'yin'],
                    ['jin', 'zhen', 'shangwuchouti_Angel', '', 'yang'],
                    ['shui', 'zhen', 'shangwuchouti_Angel', '', 'yin'],
                    ['tu', 'gen', 'shushangkaihua_Angel', '', 'yin'],
                    ['mu', 'xun', 'shushangkaihua_Angel', '', 'yang'],
                    ['tu', 'li', 'fankeweizhu_Angel', '', 'yin'],
                    ['huo', 'dui', 'fankeweizhu_Angel', '', 'yang'],
                    ['mu', 'qian', 'zouweishangji_Angel', '', 'yang'],
                    ['shui', 'qian', 'zouweishangji_Angel', '', 'yang'],
                    ['tu', 'qian', 'zouweishangji_Angel', '', 'yang'],
                    ['jin', 'kan', 'zouweishangji_Angel', '', 'yang'],
                    ['huo', 'zhen', 'zouweishangji_Angel', '', 'yang'],
                    ['tu', 'xun', 'zouweishangji_Angel', '', 'yin'],
                    ['jin', 'xun', 'zouweishangji_Angel', '', 'yang'],
                    ['huo', 'xun', 'zouweishangji_Angel', '', 'yang'],
                    ['tu', 'xun', 'zouweishangji_Angel', '', 'yang'],
                ];
                lib.angelcard = lib.element.card.init;
                lib.element.content.phase = function () {
                    'step 0';
                    //规则集中的<回合开始后③(处理<游戏开始时>的时机)>
                    //提前phaseBefore时机解决<游戏开始时>时机和<一轮开始时>先后
                    event.trigger('phaseBefore');
                    ('step 1');
                    //初始化阶段列表
                    if (!event.phaseList) {
                        event.phaseList = ['phaseZhunbei', 'phaseJudge', 'phaseUse', 'phaseDraw', 'phaseDiscard', 'phaseJieshu'];
                    }
                    if (typeof event.num != 'number') {
                        event.num = 0;
                    }
                    //规则集中的<回合开始后①>,更新游戏轮数,触发<一轮游戏开始时>
                    var isRound = false;
                    if (!event.skill) {
                        isRound = _status.roundSkipped;
                        if (_status.isRoundFilter) {
                            isRound = _status.isRoundFilter(event, player);
                        } else if (player == _status.roundStart) {
                            isRound = true;
                        }
                        if (isRound) {
                            delete _status.roundSkipped;
                            game.roundNumber++;
                            event._roundStart = true;
                            game.updateRoundNumber();
                            for (const i of game.players) {
                                if (i.isOut() && i.outCount > 0) {
                                    i.outCount--;
                                    if (i.outCount == 0 && !i.outSkills) {
                                        i.in();
                                    }
                                }
                            }
                            event.trigger('roundStart');
                        }
                    }
                    _status.globalHistory.push({
                        cardMove: [],
                        custom: [],
                        useCard: [],
                        changeHp: [],
                        everything: [],
                    });
                    var players = game.players.slice(0).concat(game.dead);
                    for (const i of players) {
                        var current = i;
                        current.actionHistory.push({ useCard: [], respond: [], skipped: [], lose: [], gain: [], sourceDamage: [], damage: [], custom: [], useSkill: [] });
                        current.stat.push({ card: {}, skill: {} });
                        if (isRound) {
                            current.getHistory().isRound = true;
                            current.getStat().isRound = true;
                        }
                    }
                    if (isRound) {
                        game.getGlobalHistory().isRound = true;
                    }
                    ('step 2');
                    //规则集中的<回合开始后②(1v1武将登场专用)>
                    event.trigger('phaseBeforeStart');
                    ('step 3');
                    //规则集中的<回合开始后④(卑弥呼〖纵傀〗的时机)>
                    event.trigger('phaseBeforeEnd');
                    ('step 4');
                    //规则集中的<回合开始后⑤>,进行翻面检测
                    if (player.isTurnedOver() && !event._noTurnOver) {
                        event.cancel();
                        player.turnOver();
                        player.phaseSkipped = true;
                        var players = game.players.slice(0).concat(game.dead);
                        for (const i of players) {
                            var current = i;
                            current.getHistory().isSkipped = true;
                            current.getStat().isSkipped = true;
                        }
                    } else {
                        player.phaseSkipped = false;
                        player.getHistory().isMe = true;
                        player.getStat().isMe = true;
                    }
                    ('step 5');
                    //规则集中的<回合开始后⑥>,更新<当前回合角色>
                    while (ui.dialogs.length) {
                        ui.dialogs[0].close();
                    }
                    game.phaseNumber++;
                    player.phaseNumber++;
                    game.broadcastAll(
                        function (player, num, popup) {
                            if (lib.config.glow_phase) {
                                player.classList.add('glow_phase');
                            }
                            player.phaseNumber = num;
                            _status.currentPhase = player;
                            if (popup && lib.config.show_phase_prompt) player.popup('回合开始', null, false);
                        },
                        player,
                        player.phaseNumber,
                        !player.noPhaseDelay
                    );
                    _status.currentPhase = player;
                    _status.discarded = [];
                    game.syncState();
                    game.addVideo('phaseChange', player);
                    if (game.phaseNumber == 1) {
                        delete player._start_cards;
                        if (lib.configOL.observe) {
                            lib.configOL.observeReady = true;
                            game.send('server', 'config', lib.configOL);
                        }
                    }
                    game.log(player, '的回合开始');
                    player._noVibrate = true;
                    if (get.config('identity_mode') != 'zhong' && get.config('identity_mode') != 'purple' && !_status.connectMode) {
                        var num;
                        switch (get.config('auto_identity')) {
                            case 'one':
                                num = 1;
                                break;
                            case 'two':
                                num = 2;
                                break;
                            case 'three':
                                num = 3;
                                break;
                            case 'always':
                                num = -1;
                                break;
                            default:
                                num = 0;
                                break;
                        }
                        if (num && !_status.identityShown && game.phaseNumber > game.players.length * num && game.showIdentity) {
                            if (!_status.video) player.popup('显示身份');
                            _status.identityShown = true;
                            game.showIdentity(false);
                        }
                    }
                    player.ai.tempIgnore = [];
                    if (ui.land && ui.land.player == player) {
                        game.addVideo('destroyLand');
                        ui.land.destroy();
                    }
                    ('step 6');
                    //规则集中的<回合开始后⑦>,国战武将明置武将牌
                    event.trigger('phaseBeginStart');
                    ('step 7');
                    //规则集中的<回合开始后⑨>,进行当先,化身等操作
                    //没有⑧ 因为⑧用不到
                    event.trigger('phaseBegin');
                    //阶段部分
                    ('step 8');
                    if (num < event.phaseList.length) {
                        //规则集中没有的新时机 可以用来插入额外阶段啥的
                        if (player.isIn()) event.trigger('phaseChange');
                    } else event.goto(11);
                    ('step 9');
                    if (player.isIn() && num < event.phaseList.length) {
                        var phase = event.phaseList[num].split('|');
                        event.currentPhase = phase[0];
                        var next = player[event.currentPhase]();
                        next.phaseIndex = num;
                        if (phase.length > 1) {
                            next._extraPhaseReason = phase[1];
                        }
                        if (event.currentPhase == 'phaseDraw' || event.currentPhase == 'phaseDiscard') {
                            if (!player.noPhaseDelay) {
                                if (player == game.me) {
                                } else {
                                }
                            }
                        }
                    }
                    ('step 10');
                    if (event.currentPhase == 'phaseUse') {
                        game.broadcastAll(function () {
                            if (ui.tempnowuxie) {
                                ui.tempnowuxie.close();
                                delete ui.tempnowuxie;
                            }
                        });
                        delete player._noSkill;
                    }
                    event.num++;
                    ('step 11');
                    if (event.num < event.phaseList.length) {
                        event.goto(8);
                    } else if (!event._phaseEndTriggered) {
                        event._phaseEndTriggered = true;
                        event.trigger('phaseEnd');
                        event.redo();
                    }
                    ('step 12');
                    event.trigger('phaseAfter');
                    ('step 13');
                    //删除当前回合角色 此时处于<不属于任何角色的回合>的阶段
                    game.broadcastAll(function (player) {
                        player.classList.remove('glow_phase');
                        delete _status.currentPhase;
                    }, player);
                };
                lib.element.card.init = function (card) {
                    if (Array.isArray(card)) {
                        if (card.length == 5 && (card[4] == 'yin' || card[4] == 'yang')) {
                            this.guaxiang = card[1];
                            this.wuxing = card[0];
                            this.yinyang = card[4];
                        }
                    }
                    var cardangel = lib.angelcard.call(this, card);
                    if (lib.card[cardangel.name].zhimoudian || lib.card[cardangel.name].zhimoudian == 0) {
                        cardangel.node.name2.innerHTML = '<img style=width:10px src=extension/列疆/img/card/' + cardangel.yinyang + '.png><span style="color: rgb(255,140,0);font-family:xinwei">' + get.translation(cardangel.wuxing) + '<span > </span><span >' + get.translation(cardangel.guaxiang) + '</span></span> ' + get.translation(cardangel.name);
                        if (cardangel.name == 'gong_Angel') {
                            cardangel.nature = card[3];
                        }
                        if (cardangel.name == 'gong_Angel') {
                            if (cardangel.nature == 'she') {
                                if (cardangel.node.name) cardangel.node.name.innerHTML = '射';
                                if (cardangel.node.$name) cardangel.node.$name.innerHTML = '射';
                            }
                            if (cardangel.nature == 'zhan') {
                                if (cardangel.node.$name) cardangel.node.$name.innerHTML = '斩';
                                if (cardangel.node.name) cardangel.node.name.innerHTML = '斩';
                            }
                            if (cardangel.nature == 'ci') {
                                if (cardangel.node.$name) cardangel.node.$name.innerHTML = '刺';
                                if (cardangel.node.name) cardangel.node.name.innerHTML = '刺';
                            }
                        }
                        var name = this.name;
                        this.node.range.innerHTML = '消耗: ' + lib.card[name].zhimoudian;
                        if (this.cardid) {
                            // console.log(card)
                            // console.log('guaxiang--'+card[1])
                            // console.log('wuxing--'+card[0])
                            // console.log('yinyang--'+card[4])
                            // console.log(this)
                        }
                        //金黄,木绿,水蓝,火红,土棕
                        if (get.translation(cardangel.wuxing) == '金') {
                            this.node.info.innerHTML = '<img style=width:10px src=extension/列疆/img/card/' + cardangel.yinyang + '.png><span style="color: rgb(255,140,0);font-family:xinwei">' + get.translation(cardangel.wuxing) + '<span > </span><span >' + get.translation(cardangel.guaxiang) + '</span></span>';
                        }
                        if (get.translation(cardangel.wuxing) == '木') {
                            this.node.info.innerHTML = '<img style=width:10px src=extension/列疆/img/card/' + cardangel.yinyang + '.png><span style="color: rgb(000,128,000);font-family:xinwei">' + get.translation(cardangel.wuxing) + '<span > </span><span >' + get.translation(cardangel.guaxiang) + '</span></span>';
                        }
                        if (get.translation(cardangel.wuxing) == '水') {
                            this.node.info.innerHTML = '<img style=width:10px src=extension/列疆/img/card/' + cardangel.yinyang + '.png><span style="color: rgb(30,144,255);font-family:xinwei">' + get.translation(cardangel.wuxing) + '<span > </span><span >' + get.translation(cardangel.guaxiang) + '</span></span>';
                        }
                        if (get.translation(cardangel.wuxing) == '火') {
                            this.node.info.innerHTML = '<img style=width:10px src=extension/列疆/img/card/' + cardangel.yinyang + '.png><span style="color: rgb(255,69,000);font-family:xinwei">' + get.translation(cardangel.wuxing) + '<span > </span><span >' + get.translation(cardangel.guaxiang) + '</span></span>';
                        }
                        if (get.translation(cardangel.wuxing) == '土') {
                            this.node.info.innerHTML = '<img style=width:10px src=extension/列疆/img/card/' + cardangel.yinyang + '.png><span style="color: rgb(205,133,63);font-family:xinwei">' + get.translation(cardangel.wuxing) + '<span > </span><span>' + get.translation(cardangel.guaxiang) + '</span></span>';
                        }
                    }
                    return cardangel;
                };
                var angelname = get.translation;
                get.translation = function (str, arg) {
                    var cardangel = angelname.call(this, str, arg);
                    if (str && str.name) {
                        if (lib.card[str.name] && (lib.card[str.name].zhimoudian || lib.card[str.name].zhimoudian == 0)) {
                            var name = get.translation(str.name);
                            if (str.name == 'gong_Angel') {
                                if (str.nature == 'she') {
                                    name = '射';
                                }
                                if (str.nature == 'zhan') {
                                    name = '斩';
                                }
                                if (str.nature == 'ci') {
                                    name = '刺';
                                }
                            }
                            if (name != get.translation(str.name)) cardangel = name;
                            // console.log(get.translation(str.guaxiang),str.yinyang , str.wuxing , str.guaxiang)
                            if (get.translation(str.guaxiang) != '####锟斤拷###烫烫烫') {
                                if (str.yinyang && str.wuxing && str.guaxiang) cardangel += '【<img style=width:10px src=extension/列疆/img/card/' + str.yinyang + '.png>' + get.translation(str.wuxing) + '' + get.translation(str.guaxiang) + '】';
                            }
                            if (arg == 'viewAs' && str.viewAs != str.name && str.viewAs) {
                                cardangel += '(' + get.translation(str) + ')';
                            }
                        }
                    }
                    return cardangel;
                };
            }
        },
        precontent() {
            game.addMode(
                'liejiang_angel',
                {
                    start() {
                        'step 0';
                        if (!lib.config.new_tutorial) {
                            ui.arena.classList.add('only_dialog');
                        }
                        _status.mode = get.config('identity_mode');
                        if (_status.brawl && _status.brawl.submode) {
                            _status.mode = _status.brawl.submode;
                        }
                        event.replacePile = function () {
                            var list = ['shengdong', 'qijia', 'caomu', 'jinchan', 'zengbin', 'fulei', 'qibaodao', 'zhungangshuo', 'lanyinjia'];
                            var map = {
                                shunshou: 'shengdong',
                                jiedao: 'qijia',
                                bingliang: 'caomu',
                                wuxie: 'jinchan',
                                wuzhong: 'zengbin',
                                wugu: 'zengbin',
                                gong_Angelndian: 'fulei',
                                qinggang: 'qibaodao',
                                qinglong: 'zhungangshuo',
                                bagua: 'lanyinjia',
                            };
                            for (let i = 0; i < lib.card.list.length; i++) {
                                var name = lib.card.list[i][2];
                                if (list.includes(name)) {
                                    lib.card.list.splice(i--, 1);
                                } else if (map[name]) {
                                    lib.card.list[i][2] = map[name];
                                    lib.card.list[i]._replaced = true;
                                }
                            }
                        };
                        ('step 1');
                        var playback = localStorage.getItem(lib.configprefix + 'playback');
                        if (playback) {
                            ui.create.me();
                            ui.arena.style.display = 'none';
                            ui.system.style.display = 'none';
                            _status.playback = playback;
                            localStorage.removeItem(lib.configprefix + 'playback');
                            var store = lib.db.transaction(['video'], 'readwrite').objectStore('video');
                            store.get(parseInt(playback)).onsuccess = function (e) {
                                if (e.target.result) {
                                    game.playVideoContent(e.target.result.video);
                                } else {
                                    alert('播放失败:找不到录像');
                                    game.reload();
                                }
                            };
                            event.finish();
                        } else if (!_status.connectMode) {
                            if (_status.mode == 'zhong') {
                                if (get.config('zhong_card')) {
                                    event.replacePile();
                                }
                                game.prepareArena(8);
                            } else if (_status.mode == 'purple') {
                                game.prepareArena(8);
                            } else {
                                game.prepareArena();
                            }
                            if (!lib.config.new_tutorial) {
                            }
                        }
                        ('step 2');
                        if (!lib.config.new_tutorial) {
                            _status.new_tutorial = true;
                            lib.init.onfree();
                            game.saveConfig('version', lib.version);
                            var clear = function () {
                                ui.dialog.close();
                                while (ui.controls.length) ui.controls[0].close();
                            };
                            var clear2 = function () {
                                ui.auto.show();
                                ui.arena.classList.remove('only_dialog');
                            };
                            var step1 = function () {
                                ui.create.dialog('欢迎来到无名杀,是否进入新手向导？');
                                game.saveConfig('new_tutorial', true);
                                ui.dialog.add('<div class="text center">跳过后,你可以在选项-其它中重置新手向导');
                                ui.auto.hide();
                                ui.create.control('跳过向导', function () {
                                    clear();
                                    clear2();
                                    game.resume();
                                    // lib.cheat.cfg(); // owidgets
                                });
                                ui.create.control('继续', step2);
                            };
                            var step2 = function () {
                                if (!lib.config.phonelayout) {
                                    clear();
                                    ui.create.dialog('如果你在使用手机,可能会觉得按钮有点小,将布局改成移动可以使按钮变大');
                                    ui.dialog.add('<div class="text center">你可以在选项-外观-布局中更改此设置');
                                    var lcontrol = ui.create.control('使用移动布局', function () {
                                        if (lib.config.phonelayout) {
                                            ui.control.firstChild.firstChild.innerHTML = '使用移动布局';
                                            game.saveConfig('phonelayout', false);
                                            lib.init.layout('mobile');
                                        } else {
                                            ui.control.firstChild.firstChild.innerHTML = '使用默认布局';
                                            game.saveConfig('phonelayout', true);
                                            lib.init.layout('mobile');
                                        }
                                    });
                                    ui.create.control('继续', step3);
                                } else {
                                    step3();
                                }
                            };
                            var step3 = function () {
                                if (lib.config.touchscreen) {
                                    clear();
                                    ui.create.dialog('触屏模式中,下划可以显示菜单,上划可以切换托管,双指单击可以暂停');
                                    ui.dialog.add('<div class="text center">你可以在选项-通用-中更改手势设置');
                                    ui.create.control('继续', step4);
                                } else {
                                    step4();
                                }
                            };
                            var step4 = lib.genAsync(function* () {
                                clear();
                                ui.window.classList.add('noclick_important');
                                ui.click.configMenu();
                                ui.control.classList.add('noclick_click_important');
                                ui.control.style.top = 'calc(100% - 105px)';
                                yield new Promise((resolve) => ui.create.control('在菜单中,可以进行各项设置', resolve));
                                ui.click.menuTab('选项');
                                yield new Promise((resolve) => ui.controls[0].replace('如果你感到游戏较卡,可以开启流畅模式', resolve));
                                yield new Promise((resolve) => ui.controls[0].replace('在技能一栏中,可以设置自动发动或双将禁配的技能', resolve));
                                ui.click.menuTab('武将');
                                yield new Promise((resolve) => ui.controls[0].replace('在武将或卡牌一栏中,单击武将/卡牌可以将其禁用', resolve));
                                ui.click.menuTab('战局');
                                yield new Promise((resolve) => ui.controls[0].replace('在战局中可以输入游戏命令,或者管理录像', resolve));
                                ui.click.menuTab('帮助');
                                yield new Promise((resolve) => ui.controls[0].replace('在帮助中,可以检查更新和下载素材', resolve));
                                ui.click.configMenu();
                                ui.window.classList.remove('noclick_important');
                                ui.control.classList.remove('noclick_click_important');
                                ui.control.style.top = '';
                                step5();
                            });
                            var step5 = function () {
                                clear();
                                ui.create.dialog('如果还有其它问题,欢迎来到百度无名杀吧进行交流');
                                ui.create.control('完成', function () {
                                    clear();
                                    clear2();
                                    game.resume();
                                });
                            };
                            game.pause();
                            step1();
                        } else {
                            if (!_status.connectMode) {
                                game.showChangeLog();
                            }
                        }
                        ('step 3');
                        if (typeof _status.new_tutorial == 'function') {
                            _status.new_tutorial();
                        }
                        delete _status.new_tutorial;
                        if (_status.connectMode) {
                            game.waitForPlayer(function () {
                                if (lib.configOL.identity_mode == 'zhong' || lib.configOL.identity_mode == 'purple') {
                                    lib.configOL.number = 8;
                                }
                            });
                        }
                        ('step 4');
                        var yearLimitCheck = () => {
                            var next = game.createEvent('year_limit_pop', false);
                            next.setContent(function () {
                                'step 0';
                                var str = get.cnNumber(game.shuffleNumber + 1, true);
                                game.me.$fullscreenpop(`第${str}年`, 'thunder');
                                game.log('游戏进入了', `#y第${str}年`);
                                if (game.shuffleNumber + 1 < game.countPlayer2()) event.finish();
                                ('step 1');
                                game.me.$fullscreenpop('年份已到', 'metal');
                                game.log('年份已到,主忠方判定为胜利');
                                ('step 2');
                                game.over(game.me.identity == 'zhu' || game.me.identity == 'zhong' || game.me.identity == 'mingzhong' || (game.me.identity == 'commoner' && game.me.isIn()));
                            });
                        };
                        if (_status.connectMode) {
                            _status.mode = lib.configOL.identity_mode;
                            if (_status.mode == 'zhong') {
                                lib.configOL.number = 8;
                                if (lib.configOL.zhong_card) {
                                    event.replacePile();
                                }
                            } else if (_status.mode == 'purple') {
                                lib.configOL.number = 8;
                            } else if (_status.mode == 'normal') {
                                if (lib.configOL.enable_commoner || lib.configOL.double_nei) {
                                    var identity = lib.configOL.enable_commoner ? 'commoner' : 'nei';
                                    for (let i = 1; i < lib.config.mode_config.identity.identity.length; i++) {
                                        var list = lib.config.mode_config.identity.identity[i];
                                        var toReplace;
                                        if (list.filter((i) => i == 'nei').length >= 2) toReplace = 'nei';
                                        else if (list.filter((i) => i == 'zhong').length > list.filter((i) => i == 'fan').length / 2) toReplace = 'zhong';
                                        else toReplace = 'fan';
                                        list.remove(toReplace);
                                        list.push(identity);
                                    }
                                    game.broadcast((identityList) => (lib.config.mode_config.identity.identity = identityList), lib.config.mode_config.identity.identity);
                                }
                            }
                            if (lib.configOL.number < 2) {
                                lib.configOL.number = 2;
                            }
                            if (_status.mode != 'purple' && lib.configOL.enable_year_limit) {
                                lib.onwash.push(yearLimitCheck);
                            }
                            game.randomMapOL();
                        } else {
                            if (_status.mode == 'normal' && (get.config('enable_commoner') || get.config('double_nei'))) {
                                var identity = get.config('enable_commoner') ? 'commoner' : 'nei';
                                for (let i = 1; i < lib.config.mode_config.identity.identity.length; i++) {
                                    var list = lib.config.mode_config.identity.identity[i];
                                    var toReplace;
                                    if (list.filter((i) => i == 'nei').length >= 2) toReplace = 'nei';
                                    else if (list.filter((i) => i == 'zhong').length > list.filter((i) => i == 'fan').length / 2) toReplace = 'zhong';
                                    else toReplace = 'fan';
                                    list.remove(toReplace);
                                    list.push(identity);
                                }
                            }
                            if (_status.mode != 'purple' && get.config('enable_year_limit')) {
                                lib.onwash.push(yearLimitCheck);
                            }
                            for (const i of game.players) {
                                i.getId();
                            }
                            if (_status.brawl && _status.brawl.chooseCharacterBefore) {
                                _status.brawl.chooseCharacterBefore();
                            }
                            game.chooseCharacter();
                        }
                        ('step 5');
                        if (ui.coin) {
                            _status.coinCoeff = get.coinCoeff([game.me.name]);
                        }
                        if (game.players.length == 2) {
                            game.showIdentity(true);
                            var map = {};
                            for (var i in lib.playerOL) {
                                map[i] = lib.playerOL[i].identity;
                            }
                            game.broadcast(function (map) {
                                for (var i in map) {
                                    lib.playerOL[i].identity = map[i];
                                    lib.playerOL[i].setIdentity();
                                    lib.playerOL[i].ai.shown = 1;
                                }
                            }, map);
                        } else {
                            for (const i of game.players) {
                                i.ai.shown = 0;
                            }
                        }
                        var stratagemMode = _status.mode == 'stratagem';
                        if (stratagemMode) {
                            var beginner;
                            if (_status.cheat_seat) {
                                var seat = _status.cheat_seat.link;
                                beginner = seat == 0 ? game.me : game.players[game.players.length - seat];
                                if (!beginner) beginner = game.me;
                                delete _status.cheat_seat;
                            } else {
                                beginner = game.players[Math.floor(Math.random() * game.players.length)];
                            }
                            event.beginner = beginner;
                            var stratagemBroadcast = () => {
                                _status.stratagemFuryMax = 3;
                                ui.css.stratagemCardStyle = lib.init.sheet(['.card.stratagem-fury-glow:before{', 'opacity:0.2;', 'box-gong_Angeldow:rgba(0,0,0,0.2) 0 0 0 1px,rgb(255,109,12) 0 0 5px,rgb(255,0,0) 0 0 10px;', 'background-color:yellow;', '-webkit-filter:blur(5px);', 'filter:blur(5px);', '}'].join(''));
                            };
                            game.broadcastAll(stratagemBroadcast);
                            if (_status.connectMode && !_status.postReconnect.stratagemReinit) _status.postReconnect.stratagemReinit = [stratagemBroadcast, {}];
                            for (var current of game.players) {
                                if (current.identity == 'zhu') current.addSkill('stratagem_monarchy');
                                if (current.identity == 'fan') current.addSkill('stratagem_revitalization');
                            }
                        }
                        if (game.zhu == game.me && game.zhu.identity != 'zhu' && _status.brawl && _status.brawl.identityShown) {
                            delete game.zhu;
                        } else {
                            if (!stratagemMode) game.zhu.ai.shown = 1;
                            if (game.zhu2) {
                                game.zhong = game.zhu;
                                game.zhu = game.zhu2;
                                delete game.zhu2;
                                if (game.zhong.sex == 'male' && game.zhong.maxHp <= 4) {
                                    game.zhong.addSkill('dongcha');
                                } else {
                                    game.zhong.addSkill('sheshen');
                                }
                            }
                            var enhance_zhu = false;
                            if (_status.connectMode) {
                                enhance_zhu = !['zhong', 'stratagem', 'purple'].includes(_status.mode) && lib.configOL.enhance_zhu && get.population('fan') >= 3;
                            } else {
                                enhance_zhu = !['zhong', 'stratagem', 'purple'].includes(_status.mode) && get.config('enhance_zhu') && get.population('fan') >= 3;
                            }
                            if (enhance_zhu) {
                                var skill;
                                switch (game.zhu.name) {
                                    case 'key_yuri':
                                        skill = 'buqu';
                                        break;
                                    case 'liubei':
                                        skill = 'jizhen';
                                        break;
                                    case 'dongzhuo':
                                        skill = 'hengzheng';
                                        break;
                                    case 'sunquan':
                                        skill = 'batu';
                                        break;
                                    case 'sp_zhangjiao':
                                        skill = 'tiangong';
                                        break;
                                    case 'liugong_Angeln':
                                        skill = 'shengxi';
                                        break;
                                    case 'sunce':
                                        skill = 'ciqiu';
                                        break;
                                    case 're_sunben':
                                        skill = 'ciqiu';
                                        break;
                                    case 'yuangong_Angelo':
                                        skill = 'geju';
                                        break;
                                    case 're_caocao':
                                        skill = 'dangping';
                                        break;
                                    case 'caopi':
                                        skill = 'junxing';
                                        break;
                                    case 'liuxie':
                                        skill = 'moukui';
                                        break;
                                    default:
                                        skill = 'tianming';
                                        break;
                                }
                                game.broadcastAll(
                                    function (player, skill) {
                                        player.addSkill(skill);
                                        player.storage.enhance_zhu = skill;
                                    },
                                    game.zhu,
                                    skill
                                );
                            }
                        }
                        game.syncState();
                        event.trigger('gameStart');
                        var players = get.players(lib.sort.position);
                        var info = [];
                        for (const i of players) {
                            var ifo = {
                                name: i.name1,
                                name2: i.name2,
                                identity: i.identity,
                            };
                            if (stratagemMode) {
                                ifo.translate = lib.translate[i.name];
                                ifo.isCamouflaged = i.ai.stratagemCamouflage;
                            }
                            info.push(ifo);
                        }
                        _status.videoInited = true;
                        game.addVideo('init', null, info);
                        if (stratagemMode) {
                            game.addVideo('arrangeLib', null, {
                                skill: {
                                    stratagem_fury: {
                                        mark: true,
                                        marktext: '🔥',
                                        intro: {
                                            name: '怒气',
                                            content: '当前怒气值:#',
                                        },
                                    },
                                },
                            });
                            for (const i of game.players) {
                                i.ai.shown = 0;
                            }
                            game.stratagemCamouflage();
                        }
                        ('step 6');
                        if (_status.mode != 'stratagem') event.beginner = _status.firstAct2 || game.zhong || game.zhu || _status.firstAct || game.me;
                        game.gameDraw(event.beginner, function (player) {
                            if (_status.mode == 'purple' && player.seatNum > 5) return 5;
                            return 4;
                        });
                        if (_status.connectMode && lib.configOL.change_card) game.replaceHandcards(game.players.slice(0));
                        ('step 7');
                        game.phaseLoop(event.beginner);
                    },
                    game: {
                        canReplaceViewpoint: () => true,
                        getState() {
                            var state = {};
                            for (var i in lib.playerOL) {
                                var player = lib.playerOL[i];
                                state[i] = { identity: player.identity };
                                if (player == game.zhu) {
                                    state[i].zhu = true;
                                }
                                if (player == game.zhong) {
                                    state[i].zhong = true;
                                }
                                if (player.isZhu) {
                                    state[i].isZhu = true;
                                }
                                if (player.special_identity) {
                                    state[i].special_identity = player.special_identity;
                                }
                                state[i].shown = player.ai.shown;
                                //state[i].group=player.group;
                            }
                            return state;
                        },
                        updateState(state) {
                            for (var i in state) {
                                var player = lib.playerOL[i];
                                if (player) {
                                    player.identity = state[i].identity;
                                    if (state[i].identity == 'rZhu' || state[i].identity == 'bZhu') game[state[i].identity] = player;
                                    if (state[i].special_identity) {
                                        player.special_identity = state[i].special_identity;
                                        if (player.node.dieidentity) {
                                            player.node.dieidentity.innerHTML = get.translation(state[i].special_identity);
                                            player.node.identity.firstChild.innerHTML = get.translation(state[i].special_identity + '_bg');
                                        }
                                    }
                                    if (state[i].zhu) {
                                        game.zhu = player;
                                    }
                                    if (state[i].isZhu) {
                                        player.isZhu = true;
                                    }
                                    if (state[i].zhong) {
                                        game.zhong = player;
                                    }
                                    player.ai.shown = state[i].shown;
                                    //player.group=state[i].group;
                                    //player.node.name.dataset.nature=get.groupnature(player.group);
                                }
                            }
                        },
                        getRoomInfo(uiintro) {
                            uiintro.add('<div class="text chat">游戏模式:' + (lib.configOL.identity_mode == 'zhong' ? '明忠' : '标准'));
                            uiintro.add('<div class="text chat">双将模式:' + (lib.configOL.double_character ? '开启' : '关闭'));
                            if (lib.configOL.identity_mode != 'zhong') {
                                if (lib.configOL.identity_mode == 'stratagem') {
                                    uiintro.add('<div class="text chat">首轮强化:' + (lib.configOL.round_one_use_fury ? '开启' : '关闭'));
                                } else if (lib.configOL.identity_mode != 'purple') {
                                    uiintro.add('<div class="text chat">双内奸:' + (lib.configOL.double_nei ? '开启' : '关闭'));
                                    if (lib.configOL.identity_mode != 'stratagem') {
                                        uiintro.add('<div class="text chat">加强主公:' + (lib.configOL.enhance_zhu ? '开启' : '关闭'));
                                        uiintro.add('<div class="text chat">平民身份:' + (lib.configOL.enable_commoner ? '开启' : '关闭'));
                                    }
                                    uiintro.add('<div class="text chat">年机制:' + (lib.configOL.enable_year_limit ? '开启' : '关闭'));
                                }
                            } else {
                                uiintro.add('<div class="text chat">卡牌替换:' + (lib.configOL.zhong_card ? '开启' : '关闭'));
                            }
                            var last = uiintro.add('<div class="text chat">出牌时限:' + lib.configOL.choose_timeout + '秒');
                            // uiintro.add('<div class="text chat">屏蔽弱将:'+(lib.configOL.ban_weak?'开启':'关闭'));
                            // var last=uiintro.add('<div class="text chat">屏蔽强将:'+(lib.configOL.ban_strong?'开启':'关闭'));
                            if (lib.configOL.banned.length) {
                                last = uiintro.add('<div class="text chat">禁用武将:' + get.translation(lib.configOL.banned));
                            }
                            if (lib.configOL.bannedcards.length) {
                                last = uiintro.add('<div class="text chat">禁用卡牌:' + get.translation(lib.configOL.bannedcards));
                            }
                            last.style.paddingBottom = '8px';
                        },
                        getIdentityList(player) {
                            if (player.identityShown) return;
                            if (player == game.me) return;
                            if (_status.mode == 'purple') {
                                if (_status.yeconfirm && ['rNei', 'bNei'].includes(game.me.identity) && ['rNei', 'bNei'].includes(player.identity)) return;
                                if (player.identity.slice(0, 1) == 'r')
                                    return {
                                        cai2: '猜',
                                        rZhong: '忠',
                                        rNei: '内',
                                        rYe: '野',
                                    };
                                return {
                                    cai: '猜',
                                    bZhong: '忠',
                                    bNei: '内',
                                    bYe: '野',
                                };
                            } else if (_status.mode == 'zhong') {
                                if (player.fanfixed) return;
                                if (game.zhu && game.zhu.isZhu) {
                                    return {
                                        fan: '反',
                                        zhong: '忠',
                                        nei: '内',
                                        cai: '猜',
                                    };
                                } else {
                                    return {
                                        fan: '反',
                                        zhong: '忠',
                                        nei: '内',
                                        zhu: '主',
                                        cai: '猜',
                                    };
                                }
                            } else if (_status.mode == 'stratagem') {
                                if ((game.zhu && game.zhu.isZhu && game.zhu.identityShown) || game.me.identity == 'zhu') {
                                    return {
                                        fan: '反',
                                        zhong: '忠',
                                        nei: '内',
                                        enemy: '敌',
                                        friend: '友',
                                        cai: '猜',
                                    };
                                } else {
                                    return {
                                        fan: '反',
                                        zhong: '忠',
                                        nei: '内',
                                        zhu: '主',
                                        enemy: '敌',
                                        friend: '友',
                                        cai: '猜',
                                    };
                                }
                            } else {
                                if (get.config('enable_commoner')) {
                                    return {
                                        fan: '反',
                                        zhong: '忠',
                                        nei: '内',
                                        commoner: '民',
                                        cai: '猜',
                                    };
                                } else {
                                    return {
                                        fan: '反',
                                        zhong: '忠',
                                        nei: '内',
                                        cai: '猜',
                                    };
                                }
                            }
                        },
                        getIdentityList2(list) {
                            for (var i in list) {
                                switch (i) {
                                    case 'fan':
                                        list[i] = '反贼';
                                        break;
                                    case 'zhong':
                                        list[i] = '忠臣';
                                        break;
                                    case 'nei':
                                        list[i] = '内奸';
                                        break;
                                    case 'commoner':
                                        list[i] = '平民';
                                        break;
                                    case 'zhu':
                                        list[i] = '主公';
                                        break;
                                    case 'enemy':
                                        list[i] = '敌方';
                                        break;
                                    case 'friend':
                                        list[i] = '友方';
                                        break;
                                    case 'cai':
                                    case 'cai2':
                                        list[i] = '未知';
                                        break;
                                    case 'rZhong':
                                    case 'bZhong':
                                        list[i] = '前锋';
                                        break;
                                    case 'rNei':
                                    case 'bNei':
                                        list[i] = '细作';
                                        break;
                                    case 'rYe':
                                    case 'bYe':
                                        list[i] = '野心家';
                                        break;
                                }
                            }
                        },
                        getVideoName() {
                            var str = get.translation(game.me.name);
                            if (game.me.name2) {
                                str += '/' + get.translation(game.me.name2);
                            }
                            var str2;
                            if (game.identityVideoName) str2 = game.identityVideoName;
                            else {
                                switch (_status.mode) {
                                    case 'purple':
                                        str2 = '3v3v2 - ' + (game.me.identity.indexOf('r') == 0 ? '暖色' : '冷色') + lib.translate[game.me.identity + '2'];
                                        break;
                                    case 'zhong':
                                        str2 = '忠胆英杰 - ' + lib.translate[game.me.identity + '2'];
                                        break;
                                    case 'stratagem':
                                        str2 = get.cnNumber(get.playerNumber()) + '人谋攻-' + lib.translate[game.me.identity + '2'];
                                        break;
                                    default:
                                        str2 = get.cnNumber(get.playerNumber()) + '人' + get.translation(lib.config.mode) + ' - ' + lib.translate[game.me.identity + '2'];
                                }
                            }
                            var name = [str, str2];
                            return name;
                        },
                        addRecord(bool) {
                            if (typeof bool == 'boolean') {
                                var data = lib.config.gameRecord.identity.data;
                                var identity = game.me.identity;
                                if (identity == 'mingzhong') {
                                    identity = 'zhong';
                                }
                                if (!data[identity]) {
                                    data[identity] = [0, 0];
                                }
                                if (bool) {
                                    data[identity][0]++;
                                } else {
                                    data[identity][1]++;
                                }
                                var list = ['zhu', 'zhong', 'nei', 'fan', 'commoner'];
                                var str = '';
                                for (let i = 0; i < list.length; i++) {
                                    if (data[list[i]]) {
                                        str += lib.translate[list[i] + '2'] + ':' + data[list[i]][0] + '胜 ' + data[list[i]][1] + '负<br>';
                                    }
                                }
                                lib.config.gameRecord.identity.str = str;
                                game.saveConfig('gameRecord', lib.config.gameRecord);
                            }
                        },
                        showIdentity(me) {
                            for (const i of game.players) {
                                i.node.identity.classList.remove('guessing');
                                i.identityShown = true;
                                i.ai.shown = 1;
                                i.setIdentity(i.identity);
                                if (i.special_identity) {
                                    i.node.identity.firstChild.innerHTML = get.translation(i.special_identity + '_bg');
                                }
                                if (i.identity == 'zhu') {
                                    i.isZhu = true;
                                }
                            }
                            if (_status.clickingidentity) {
                                for (let i = 0; i < _status.clickingidentity[1].length; i++) {
                                    _status.clickingidentity[1][i].delete();
                                    _status.clickingidentity[1][i].style.transform = '';
                                }
                                delete _status.clickingidentity;
                            }
                        },
                        checkResult() {
                            var me = game.me._trueMe || game.me;
                            if (_status.brawl && _status.brawl.checkResult) {
                                _status.brawl.checkResult();
                                return;
                            } else if (_status.mode == 'purple') {
                                var winner = [];
                                var loser = [];
                                var ye = game.filterPlayer(
                                    function (current) {
                                        return ['rYe', 'bYe'].includes(current.identity);
                                    },
                                    null,
                                    true
                                );
                                var red = game.filterPlayer(
                                    function (current) {
                                        return ['rZhu', 'rZhong', 'bNei'].includes(current.identity);
                                    },
                                    null,
                                    true
                                );
                                var blue = game.filterPlayer(
                                    function (current) {
                                        return ['bZhu', 'bZhong', 'rNei'].includes(current.identity);
                                    },
                                    null,
                                    true
                                );
                                game.countPlayer2(function (current) {
                                    switch (current.identity) {
                                        case 'rZhu':
                                            if (ye.length == 0 && game.bZhu.isDead()) winner.push(current);
                                            if (current.isDead()) loser.push(current);
                                            break;
                                        case 'rZhong':
                                        case 'bNei':
                                            if (ye.length == 0 && game.bZhu.isDead()) winner.push(current);
                                            if (game.rZhu.isDead()) loser.push(current);
                                            break;
                                        case 'bZhu':
                                            if (ye.length == 0 && game.rZhu.isDead()) winner.push(current);
                                            if (current.isDead()) loser.push(current);
                                            break;
                                        case 'bZhong':
                                        case 'rNei':
                                            if (ye.length == 0 && game.rZhu.isDead()) winner.push(current);
                                            if (game.bZhu.isDead()) loser.push(current);
                                            break;
                                        default:
                                            if (red.length + blue.length == 0) winner.push(current);
                                            else if (game.rZhu.isDead() && game.bZhu.isDead()) loser.push(current);
                                            break;
                                    }
                                }, true);
                                var winner2 = winner.slice(0);
                                var loser2 = loser.slice(0);
                                for (let i = 0; i < winner.length; i++) {
                                    if (winner[i].isDead()) winner.splice(i--, 1);
                                }
                                for (let i = 0; i < loser.length; i++) {
                                    if (loser[i].isDead()) loser.splice(i--, 1);
                                }
                                if (winner.length || loser.length == game.players.length) {
                                    game.broadcastAll(
                                        function (winner, loser) {
                                            _status.winner = winner;
                                            _status.loser = loser;
                                        },
                                        winner,
                                        loser
                                    );
                                    if (loser.length == game.players.length) {
                                        game.showIdentity();
                                        game.over('游戏平局');
                                    } else if (winner2.includes(me)) {
                                        game.showIdentity();
                                        if (loser2.includes(me)) game.over(false);
                                        else game.over(true);
                                    } else {
                                        game.showIdentity();
                                        game.over(false);
                                    }
                                }
                                return;
                            }
                            if (!game.zhu) {
                                if (get.population('fan') == 0) {
                                    switch (me.identity) {
                                        case 'fan':
                                            game.over(false);
                                            break;
                                        case 'zhong':
                                            game.over(true);
                                            break;
                                        case 'commoner':
                                            game.over(true);
                                            break;
                                        default:
                                            game.over();
                                            break;
                                    }
                                } else if (get.population('zhong') == 0) {
                                    switch (me.identity) {
                                        case 'fan':
                                            game.over(true);
                                            break;
                                        case 'zhong':
                                            game.over(false);
                                            break;
                                        case 'commoner':
                                            game.over(true);
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
                            if (me.identity == 'zhu' || me.identity == 'zhong' || me.identity == 'mingzhong') {
                                if (game.zhu.classList.contains('dead')) {
                                    game.over(false);
                                } else {
                                    game.over(true);
                                }
                            } else if (me.identity == 'nei') {
                                if (game.players.length == 1 + game.players.filter((i) => i.identity == 'commoner').length && me.isAlive()) {
                                    game.over(true);
                                } else {
                                    game.over(false);
                                }
                            } else if (me.identity == 'fan') {
                                if ((get.population('fan') + get.population('zhong') > 0 || get.population('nei') > 1) && game.zhu.classList.contains('dead')) {
                                    game.over(true);
                                } else {
                                    game.over(false);
                                }
                            } else if (me.identity == 'commoner') {
                                game.over(true);
                            }
                        },
                        checkOnlineResult(player) {
                            if (_status.winner && _status.loser) {
                                if (_status.loser.length == game.players.length) return null;
                                if (_status.loser.includes(player)) return false;
                                if (_status.winner.includes(player)) return true;
                            }
                            if (game.zhu.isAlive()) {
                                return player.identity == 'zhu' || player.identity == 'zhong' || player.identity == 'mingzhong' || (player.identity == 'commoner' && player.isAlive());
                            } else if ((game.players.length == 1 + game.players.filter((i) => i.identity == 'commoner').length && game.players[0].identity == 'nei') || game.players[0].identity == 'commoner') {
                                return player.isAlive();
                            } else {
                                return player.identity == 'fan' || (player.identity == 'commoner' && player.isAlive());
                            }
                        },
                        chooseCharacterPurpleOL() {
                            var next = game.createEvent('chooseCharacter');
                            next.setContent(function () {
                                'step 0';
                                ui.arena.classList.add('choose-character');
                                ('step 1');
                                var list = ['rZhu', 'rZhong', 'rNei', 'rYe'];
                                var list2 = ['bZhu', 'bZhong', 'bNei', 'bYe'];
                                list.randomSort();
                                list2.randomSort();
                                var identityList = list.concat(list2);
                                var num = get.rand(0, 7);
                                var players = game.players.slice(0);
                                for (let i = 0; i < num; i++) {
                                    players.push(players.shift());
                                }
                                game.broadcastAll(
                                    function (players, identityList, list) {
                                        _status.mode = 'purple';
                                        if (game.online) ui.arena.classList.add('choose-character');
                                        players.forEach((npc, i, arr) => {
                                            const identity = identityList[i];
                                            npc.node.identity.classList.add('guessing');
                                            npc.identity = identity;
                                            npc.setIdentity(list.includes(identity) ? 'cai2' : 'cai');
                                            if (['rZhu', 'bZhu'].includes(identity)) {
                                                game[identity] = npc;
                                                npc.setIdentity(identity);
                                                npc.identityShown = true;
                                                npc.node.identity.classList.remove('guessing');
                                            }
                                        });//QQQ
                                        game.zhu = game.rZhu;
                                        game.rZhu.isZhu = true;
                                        game.bZhu.isZhu = true;
                                        game.me.setIdentity();
                                        game.me.node.identity.classList.remove('guessing');
                                    },
                                    players,
                                    identityList,
                                    list
                                );
                                players.sortBySeat(game.zhu);
                                for (const i of players) {
                                    i.seatNum = i;
                                }
                                ('step 2');
                                var map = {};
                                var map_zhu = {};
                                event.mapNum = {};
                                var list = [];
                                var libCharacter = {};
                                for (let i = 0; i < lib.configOL.characterPack.length; i++) {
                                    var pack = lib.characterPack[lib.configOL.characterPack[i]];
                                    for (var j in pack) {
                                        // if(j=='zuoci') continue;
                                        if (lib.character[j]) libCharacter[j] = pack[j];
                                    }
                                }
                                for (var i in libCharacter) {
                                    if (lib.filter.characterDisabled(i, libCharacter)) continue;
                                    if (i.includes('lingju') || get.is.double(i)) continue;
                                    var group = lib.character[i][1];
                                    if (group == 'shen') continue;
                                    if (!map[group]) {
                                        map[group] = [];
                                        list.push(group);
                                    }
                                    map[group].push(i);
                                    if (lib.character[i].isZhugong) {
                                        if (!map_zhu[group]) {
                                            map_zhu[group] = [];
                                        }
                                        map_zhu[group].push(i);
                                    }
                                }
                                for (var i in map) {
                                    if (map[i].length < 12) {
                                        delete map[i];
                                        list.remove(i);
                                    } else event.mapNum[i] = map[i].length > 15 ? 5 : 3;
                                }
                                list.sort(function (a, b) {
                                    return lib.group.indexOf(a) - lib.group.indexOf(b);
                                });
                                event.list = list;
                                event.map = map;
                                event.map_zhu = map_zhu;
                                game.bZhu
                                    .chooseControl(list)
                                    .set('prompt', '请选择冷方武将势力')
                                    .set('ai', function () {
                                        return _status.event.choice;
                                    })
                                    .set('choice', event.list.randomGet());
                                ('step 3');
                                event.bZhu = result.control;
                                event.list.remove(event.bZhu);
                                game.rZhu
                                    .chooseControl(event.list)
                                    .set('prompt', '请选择暖方武将的势力')
                                    .set('ai', function () {
                                        return _status.event.choice;
                                    })
                                    .set('choice', event.list.randomGet());
                                ('step 4');
                                event.rZhu = result.control;
                                var players = [game.rZhu, game.bZhu];
                                var list = [];
                                for (const i of players) {
                                    var group = event[i.identity];
                                    var str = '选择角色';
                                    var list2 = event.map[group].randomGets(4);
                                    if (event.map_zhu[group]) list2.addArray(event.map_zhu[group].randomGets(2));
                                    event.map[i.playerid] = list2;
                                    list.push([i, [str, [list2, 'character']], true]);
                                }
                                game.me.chooseButtonOL(list, function (player, result) {
                                    if (game.online || player == game.me) {
                                        player.init(result.links[0]);
                                        if (!player.isInitFilter('noZhuHp')) {
                                            player.hp++;
                                            player.maxHp++;
                                            player.update();
                                        }
                                    }
                                });
                                ('step 5');
                                for (var i in result) {
                                    if (result[i] == 'ai' || !result[i] || !result[i].links) {
                                        result[i] = event.map[i].randomGet();
                                    } else {
                                        result[i] = result[i].links;
                                    }
                                    var group = lib.character[result[i][0]][1];
                                    event.map[group].remove(result[i][0]);
                                    if (!lib.playerOL[i].name) {
                                        lib.playerOL[i].init(result[i][0]);
                                    }
                                }
                                game.broadcast(function (result) {
                                    for (var i in result) {
                                        if (!lib.playerOL[i].name) {
                                            lib.playerOL[i].init(result[i][0], result[i][1]);
                                            if (!lib.playerOL[i].isInitFilter('noZhuHp')) {
                                                lib.playerOL[i].hp++;
                                                lib.playerOL[i].maxHp++;
                                                lib.playerOL[i].update();
                                            }
                                        }
                                    }
                                }, result);
                                var list = [];
                                var players = game.players.slice(0);
                                players.removeArray([game.rZhu, game.bZhu]);
                                for (const i of players) {
                                    var group = event[i.identity.slice(0, 1) + 'Zhu'];
                                    var str = '选择角色';
                                    var list2 = event.map[group].randomRemove(event.mapNum[group]);
                                    event.map[i.playerid] = list2;
                                    list.push([i, [str, [list2, 'character']], true]);
                                }
                                game.me.chooseButtonOL(list, function (player, result) {
                                    if (game.online || player == game.me) {
                                        player.init(result.links[0]);
                                    }
                                });
                                ('step 6');
                                for (var i in result) {
                                    if (result[i] == 'ai' || !result[i] || !result[i].links) {
                                        result[i] = event.map[i].randomGet();
                                    } else {
                                        result[i] = result[i].links;
                                    }
                                    var group = lib.character[result[i][0]][1];
                                    event.map[group].remove(result[i][0]);
                                    if (!lib.playerOL[i].name) {
                                        lib.playerOL[i].init(result[i][0]);
                                    }
                                }
                                game.broadcast(function (result) {
                                    for (var i in result) {
                                        if (!lib.playerOL[i].name) {
                                            lib.playerOL[i].init(result[i][0], result[i][1]);
                                        }
                                    }
                                    setTimeout(function () {
                                        ui.arena.classList.remove('choose-character');
                                    }, 500);
                                }, result);
                                setTimeout(function () {
                                    ui.arena.classList.remove('choose-character');
                                }, 500);
                            });
                        },
                        chooseCharacterPurple() {
                            var next = game.createEvent('chooseCharacter');
                            next.setContent(function () {
                                'step 0';
                                ui.arena.classList.add('choose-character');
                                game.no_continue_game = true;
                                lib.init.onfree();
                                ('step 1');
                                var list = ['rZhu', 'rZhong', 'rNei', 'rYe'];
                                var list2 = ['bZhu', 'bZhong', 'bNei', 'bYe'];
                                list.randomSort();
                                list2.randomSort();
                                var identityList = list.concat(list2);
                                var num = get.rand(0, 7);
                                var players = game.players.slice(0);
                                for (let i = 0; i < num; i++) {
                                    players.push(players.shift());
                                }
                                players.forEach((npc, i, arr) => {
                                    const identity = identityList[i];
                                    npc.node.identity.classList.add('guessing');
                                    npc.identity = identity;
                                    npc.setIdentity(list.includes(identity) ? 'cai2' : 'cai');
                                    if (['rZhu', 'bZhu'].includes(identity)) {
                                        game[identity] = npc;
                                        npc.setIdentity(identity);
                                        npc.identityShown = true;
                                        npc.node.identity.classList.remove('guessing');
                                    }
                                });//QQQ
                                game.zhu = game.rZhu;
                                game.rZhu.isZhu = true;
                                game.bZhu.isZhu = true;
                                game.me.setIdentity();
                                game.me.node.identity.classList.remove('guessing');
                                players.sortBySeat(game.zhu);
                                for (const i of players) {
                                    i.seatNum = i;
                                }
                                ('step 2');
                                var map = {};
                                var map_zhu = {};
                                var list = [];
                                for (var i in lib.character) {
                                    if (lib.filter.characterDisabled(i)) continue;
                                    if (i.includes('lingju') || get.is.double(i)) continue;
                                    var group = lib.character[i][1];
                                    if (group == 'shen') continue;
                                    if (!map[group]) {
                                        map[group] = [];
                                        list.push(group);
                                    }
                                    map[group].push(i);
                                    if (lib.character[i].isZhugong) {
                                        if (!map_zhu[group]) {
                                            map_zhu[group] = [];
                                        }
                                        map_zhu[group].push(i);
                                    }
                                }
                                for (var i in map) {
                                    if (map[i].length < 12) {
                                        delete map[i];
                                        list.remove(i);
                                    }
                                }
                                list.sort(function (a, b) {
                                    return lib.group.indexOf(a) - lib.group.indexOf(b);
                                });
                                event.list = list;
                                event.map = map;
                                event.map_zhu = map_zhu;
                                game.bZhu
                                    .chooseControl(list)
                                    .set('prompt', '请选择冷方武将势力')
                                    .set('ai', function () {
                                        return _status.event.choice;
                                    })
                                    .set('choice', event.list.randomGet());
                                ('step 3');
                                event.bZhu = result.control;
                                event.list.remove(event.bZhu);
                                game.rZhu
                                    .chooseControl(event.list)
                                    .set('prompt', '请选择暖方武将的势力')
                                    .set('ai', function () {
                                        return _status.event.choice;
                                    })
                                    .set('choice', event.list.randomGet());
                                ('step 4');
                                event.rZhu = result.control;
                                if (game.me == game.rZhu || game.me == game.bZhu) {
                                    event.isZhu = true;
                                    var list = event.map[event[game.me.identity]].randomGets(4);
                                    if (event.map_zhu[event[game.me.identity]]) list.addArray(event.map_zhu[event[game.me.identity]].randomGets(2));
                                    game.me.chooseButton(true, ['请选择您的武将牌', [list, 'character']]);
                                }
                                ('step 5');
                                if (event.isZhu) {
                                    event.map[event[game.me.identity]].remove(result.links[0]);
                                    game.me.init(result.links[0]);
                                }
                                if (!game.rZhu.name) {
                                    var list = event.map[event.rZhu].randomGets(3);
                                    if (event.map_zhu[event.rZhu]) list.addArray(event.map_zhu[event.rZhu]);
                                    var character = list.randomGet();
                                    event.map[event.rZhu].remove(character);
                                    game.rZhu.init(character);
                                }
                                if (!game.bZhu.name) {
                                    var list = event.map[event.bZhu].randomGets(4);
                                    if (event.map_zhu[event.bZhu]) list.addArray(event.map_zhu[event.bZhu].randomGets(2));
                                    var character = list.randomGet();
                                    event.map[event.bZhu].remove(character);
                                    game.bZhu.init(character);
                                }
                                if (!game.rZhu.isInitFilter('noZhuHp')) {
                                    game.rZhu.maxHp++;
                                    game.rZhu.hp++;
                                    game.rZhu.update();
                                }
                                if (!game.bZhu.isInitFilter('noZhuHp')) {
                                    game.bZhu.maxHp++;
                                    game.bZhu.hp++;
                                    game.bZhu.update();
                                }
                                if (!event.isZhu) {
                                    var group = game.me.identity.indexOf('r') == 0 ? event.rZhu : event.bZhu;
                                    game.me.chooseButton(true, ['请选择您的武将牌', [event.map[group].randomRemove(5), 'character']]);
                                }
                                ('step 6');
                                if (!event.isZhu) {
                                    game.me.init(result.links[0]);
                                }
                                game.countPlayer(function (current) {
                                    if (!current.name) {
                                        var group = current.identity.indexOf('r') == 0 ? event.rZhu : event.bZhu;
                                        current.init(event.map[group].randomRemove(1)[0]);
                                    }
                                });
                                ('step 7');
                                setTimeout(function () {
                                    ui.arena.classList.remove('choose-character');
                                }, 500);
                            });
                        },
                        chooseCharacterStratagemOL() {
                            var next = game.createEvent('chooseCharacter');
                            next.setContent(function () {
                                'step 0';
                                ui.arena.classList.add('choose-character');
                                var i;
                                var identityList = get.identityList(game.players.length);
                                if (lib.configOL.double_nei) {
                                    switch (lib.configOL.number) {
                                        case 8:
                                            identityList.remove('fan');
                                            identityList.push('nei');
                                            break;
                                        case 7:
                                            identityList.remove('zhong');
                                            identityList.push('nei');
                                            break;
                                        case 6:
                                            identityList.remove('fan');
                                            identityList.push('nei');
                                            break;
                                        case 5:
                                            identityList.remove('fan');
                                            identityList.push('nei');
                                            break;
                                        case 4:
                                            identityList.remove('zhong');
                                            identityList.push('nei');
                                            break;
                                        case 3:
                                            identityList.remove('fan');
                                            identityList.push('nei');
                                            break;
                                    }
                                }
                                identityList.randomSort();
                                game.players.forEach((npc, i, arr) => {
                                    const identity = identityList[i];
                                    npc.identity = identity;
                                    npc.setIdentity('cai');
                                    npc.node.identity.classList.add('guessing');
                                    if (identity == 'zhu') {
                                        game.zhu = npc;
                                    }
                                    npc.identityShown = false;
                                });//QQQ
                                game.zhu.isZhu = game.zhu.identity == 'zhu';
                                game.me.setIdentity();
                                game.me.node.identity.classList.remove('guessing');
                                for (const i of game.players) {
                                    i.send(
                                        function (zhu, zhuid, me, identity) {
                                            for (var i in lib.playerOL) {
                                                lib.playerOL[i].setIdentity('cai');
                                                lib.playerOL[i].node.identity.classList.add('guessing');
                                            }
                                            zhu.identity = zhuid;
                                            if (zhuid == 'zhu') zhu.isZhu = true;
                                            me.setIdentity(identity);
                                            me.node.identity.classList.remove('guessing');
                                            ui.arena.classList.add('choose-character');
                                        },
                                        game.zhu,
                                        game.zhu.identity,
                                        i,
                                        i.identity
                                    );
                                }
                                var list;
                                var list3 = [];
                                var list4 = [];
                                event.list = [];
                                event.list2 = [];
                                var libCharacter = {};
                                for (let i = 0; i < lib.configOL.characterPack.length; i++) {
                                    var pack = lib.characterPack[lib.configOL.characterPack[i]];
                                    for (var j in pack) {
                                        if (lib.character[j]) libCharacter[j] = pack[j];
                                    }
                                }
                                for (let i in lib.characterReplace) {
                                    var ix = lib.characterReplace[i];
                                    for (var j = 0; j < ix.length; j++) {
                                        if (!libCharacter[ix[j]] || lib.filter.characterDisabled(ix[j])) ix.splice(j--, 1);
                                    }
                                    if (ix.length) {
                                        event.list.push(i);
                                        event.list2.push(i);
                                        list4.addArray(ix);
                                        list3.push(i);
                                    }
                                }
                                game.broadcast(function (list) {
                                    for (var i in lib.characterReplace) {
                                        var ix = lib.characterReplace[i];
                                        for (var j = 0; j < ix.length; j++) {
                                            if (!list.includes(ix[j])) ix.splice(j--, 1);
                                        }
                                    }
                                }, list4);
                                for (let i in libCharacter) {
                                    if (list4.includes(i)) continue;
                                    if (lib.filter.characterDisabled(i, libCharacter)) continue;
                                    event.list.push(i);
                                    event.list2.push(i);
                                    list4.push(i);
                                    list3.push(i);
                                }
                                _status.characterlist = list4.slice(0);
                                list = list3.randomGets(5);
                                ('step 1');
                                var list = [];
                                var selectButton = lib.configOL.double_character ? 2 : 1;
                                var num,
                                    num2 = 0;
                                num = Math.floor(event.list.length / (game.players.length - 1));
                                if (num > 5) {
                                    num = 5;
                                }
                                num2 = event.list.length - num * (game.players.length - 1);
                                if (lib.configOL.double_nei) {
                                    num2 = Math.floor(num2 / 2);
                                }
                                if (num2 > 2) {
                                    num2 = 2;
                                }
                                for (const i of game.players) {
                                    var num3 = 0;
                                    if (i.identity == 'nei') {
                                        num3 = num2;
                                    }
                                    var str = '选择角色';
                                    list.push([i, [str, [event.list.randomRemove(num + num3), 'characterx']], selectButton, true]);
                                }
                                game.me.chooseButtonOL(list, function (player, result) {
                                    if (game.online || player == game.me) player.init(result.links[0], result.links[1]);
                                });
                                ('step 2');
                                var shen = [];
                                for (var i in result) {
                                    if (result[i] && result[i].links) {
                                        for (var j = 0; j < result[i].links.length; j++) {
                                            event.list2.remove(get.sourceCharacter(result[i].links[j]));
                                        }
                                    }
                                }
                                for (var i in result) {
                                    if (result[i] == 'ai') {
                                        result[i] = event.list2.randomRemove(lib.configOL.double_character ? 2 : 1);
                                        for (var j = 0; j < result[i].length; j++) {
                                            var listx = lib.characterReplace[result[i][j]];
                                            if (listx && listx.length) result[i][j] = listx.randomGet();
                                        }
                                    } else {
                                        result[i] = result[i].links;
                                    }
                                    if (get.is.double(result[i][0]) || (lib.character[result[i][0]] && lib.character[result[i][0]].group == 'shen' && !lib.character[result[i][0]].hasHiddenSkill)) shen.push(lib.playerOL[i]);
                                }
                                event.result2 = result;
                                if (shen.length) {
                                    var list = ['wei', 'shu', 'wu', 'qun', 'jin', 'key'];
                                    for (let i = 0; i < list.length; i++) {
                                        if (!lib.group.includes(list[i])) list.splice(i--, 1);
                                        else list[i] = ['', '', 'group_' + list[i]];
                                    }
                                    for (let i = 0; i < shen.length; i++) {
                                        if (get.is.double(result[shen[i].playerid][0])) {
                                            shen[i]._groupChosen = true;
                                            shen[i] = [
                                                shen[i],
                                                [
                                                    '请选择你的势力',
                                                    [
                                                        get.is.double(result[shen[i].playerid][0], true).map(function (i) {
                                                            return ['', '', 'group_' + i];
                                                        }),
                                                        'vcard',
                                                    ],
                                                ],
                                                1,
                                                true,
                                            ];
                                        } else shen[i] = [shen[i], ['请选择神武将的势力', [list, 'vcard']], 1, true];
                                    }
                                    game.me
                                        .chooseButtonOL(shen, function (player, result) {
                                            if (player == game.me) player.changeGroup(result.links[0][2].slice(6), false, false);
                                        })
                                        .set('switchToAuto', function () {
                                            _status.event.result = 'ai';
                                        })
                                        .set('processAI', function () {
                                            return {
                                                bool: true,
                                                links: [_status.event.dialog.buttons.randomGet().link],
                                            };
                                        });
                                } else event._result = {};
                                ('step 3');
                                if (!result) result = {};
                                for (var i in result) {
                                    if (result[i] && result[i].links) result[i] = result[i].links[0][2].slice(6);
                                    else if (result[i] == 'ai')
                                        result[i] = (function () {
                                            return ['wei', 'shu', 'wu', 'qun', 'jin', 'key'].randomGet();
                                        })();
                                }
                                var result2 = event.result2;
                                game.broadcast(
                                    function (result, result2) {
                                        for (var i in result) {
                                            if (!lib.playerOL[i].name) {
                                                lib.playerOL[i].init(result[i][0], result[i][1]);
                                            }
                                            if (result2[i] && result2[i].length) lib.playerOL[i].changeGroup(result2[i], false, false);
                                        }
                                        setTimeout(function () {
                                            ui.arena.classList.remove('choose-character');
                                        }, 500);
                                    },
                                    result2,
                                    result
                                );
                                for (var i in result2) {
                                    if (!lib.playerOL[i].name) {
                                        lib.playerOL[i].init(result2[i][0], result2[i][1]);
                                    }
                                    if (result[i] && result[i].length) lib.playerOL[i].changeGroup(result[i], false, false);
                                }
                                for (const i of game.players) {
                                    _status.characterlist.remove(i.name);
                                    _status.characterlist.remove(i.name1);
                                    _status.characterlist.remove(i.name2);
                                }
                                ['stratagem_gain', 'stratagem_insight', 'stratagem_expose'].forEach((globalSkill) => game.addGlobalSkill(globalSkill));
                                game.players.forEach((current) => {
                                    current.storage.zhibi = [];
                                    current.storage.stratagem_expose = [];
                                    current.markSkill('stratagem_fury');
                                });
                                setTimeout(function () {
                                    ui.arena.classList.remove('choose-character');
                                }, 500);
                            });
                        },
                        chooseCharacter() {
                            if (_status.mode == 'purple') {
                                game.chooseCharacterPurple();
                                return;
                            }
                            var next = game.createEvent('chooseCharacter');
                            next.showConfig = true;
                            next.addPlayer = function (player) {
                                var list = get.identityList(game.players.length - 1);
                                var list2 = get.identityList(game.players.length);
                                for (let i = 0; i < list.length; i++) list2.remove(list[i]);
                                player.identity = list2[0];
                                player.setIdentity('cai');
                            };
                            next.removePlayer = function () {
                                return game.players.randomGet(game.me, game.zhu);
                            };
                            next.ai = function (player, list, list2, back) {
                                if (_status.brawl && _status.brawl.chooseCharacterAi) {
                                    if (_status.brawl.chooseCharacterAi(player, list, list2, back) !== false) {
                                        return;
                                    }
                                }
                                var stratagemMode = _status.event.stratagemMode;
                                if (_status.event.zhongmode) {
                                    var listc = list.slice(0, 2);
                                    for (let i = 0; i < listc.length; i++) {
                                        var listx = lib.characterReplace[listc[i]];
                                        if (listx && listx.length) listc[i] = listx.randomGet();
                                    }
                                    if (get.config('double_character')) {
                                        player.init(listc[0], listc[1]);
                                    } else {
                                        player.init(listc[0]);
                                    }
                                    if (player.identity == 'mingzhong') {
                                        if (!player.isInitFilter('noZhuHp')) {
                                            player.hp++;
                                            player.maxHp++;
                                            player.update();
                                        }
                                    }
                                } else if (player.identity == 'zhu' && !stratagemMode) {
                                    list2.randomSort();
                                    var choice, choice2;
                                    if (!_status.event.zhongmode && Math.random() - 0.8 < 0 && list2.length) {
                                        choice = list2[0];
                                        choice2 = list[0];
                                        if (choice2 == choice) {
                                            choice2 = list[1];
                                        }
                                    } else {
                                        choice = list[0];
                                        choice2 = list[1];
                                    }
                                    if (lib.characterReplace[choice] && lib.characterReplace[choice].length) choice = lib.characterReplace[choice].randomGet();
                                    if (lib.characterReplace[choice2] && lib.characterReplace[choice2].length) choice2 = lib.characterReplace[choice2].randomGet();
                                    if (get.config('double_character')) {
                                        player.init(choice, choice2);
                                    } else {
                                        player.init(choice);
                                    }
                                    if (game.players.length > 4) {
                                        if (!player.isInitFilter('noZhuHp')) {
                                            player.hp++;
                                            player.maxHp++;
                                            player.update();
                                        }
                                    }
                                } else if (player.identity == 'zhong' && (Math.random() < 0.5 || ['sunliang', 'key_akane'].includes(game.zhu.name)) && !stratagemMode) {
                                    var listc = list.slice(0);
                                    for (let i = 0; i < listc.length; i++) {
                                        var listx = lib.characterReplace[listc[i]];
                                        if (listx && listx.length) listc[i] = listx.randomGet();
                                    }
                                    var choice = 0;
                                    for (let i = 0; i < listc.length; i++) {
                                        if (lib.character[listc[i]][1] == game.zhu.group) {
                                            choice = i;
                                            break;
                                        }
                                    }
                                    if (get.config('double_character')) {
                                        player.init(listc[choice], listc[choice == 0 ? choice + 1 : choice - 1]);
                                    } else {
                                        player.init(listc[choice]);
                                    }
                                } else {
                                    var listc = list.slice(0, 2);
                                    for (let i = 0; i < listc.length; i++) {
                                        var listx = lib.characterReplace[listc[i]];
                                        if (listx && listx.length) listc[i] = listx.randomGet();
                                    }
                                    if (get.config('double_character')) {
                                        player.init(listc[0], listc[1]);
                                    } else {
                                        player.init(listc[0]);
                                    }
                                }
                                if (back) {
                                    list.remove(get.sourceCharacter(player.name1));
                                    list.remove(get.sourceCharacter(player.name2));
                                    for (let i = 0; i < list.length; i++) {
                                        back.push(list[i]);
                                    }
                                }
                                if (typeof lib.config.test_game == 'string' && player == game.me.next) {
                                    player.init(lib.config.test_game);
                                }
                                if (get.is.double(player.name1)) {
                                    player._groupChosen = true;
                                    player.group = get.is.double(player.name1, true).randomGet();
                                    player.node.name.dataset.nature = get.groupnature(player.group);
                                } else if (get.config('choose_group') && player.group == 'shen' && !player.isUnseen(0)) {
                                    var list = lib.group.slice(0);
                                    list.remove('shen');
                                    if (list.length)
                                        player.group = (function () {
                                            if (_status.mode != 'zhong' && game.zhu && game.zhu.group) {
                                                if (['re_zhangjiao', 'liubei', 're_liubei', 'caocao', 're_caocao', 'sunquan', 're_sunquan', 'zhangjiao', 'sp_zhangjiao', 'caopi', 're_caopi', 'liuchen', 'caorui', 'sunliang', 'sunxiu', 'sunce', 're_sunben', 'ol_liushan', 're_liushan', 'key_akane', 'dongzhuo', 're_dongzhuo', 'ol_dongzhuo', 'jin_simashi', 'caomao'].includes(game.zhu.name)) return game.zhu.group;
                                                if (game.zhu.name == 'yl_yuanshu') {
                                                    if (player.identity == 'zhong') list.remove('qun');
                                                    return 'qun';
                                                }
                                                if (['sunhao', 'xin_yuanshao', 're_yuanshao', 're_sunce', 'ol_yuanshao', 'yuanshu', 'jin_simazhao', 'liubian'].includes(game.zhu.name)) {
                                                    if (player.identity != 'zhong') list.remove(game.zhu.group);
                                                    return game.zhu.group;
                                                }
                                            }
                                            return list.randomGet();
                                        })();
                                }
                                player.node.name.dataset.nature = get.groupnature(player.group);
                            };
                            next.setContent(function () {
                                'step 0';
                                ui.arena.classList.add('choose-character');
                                var i;
                                var list;
                                var list2 = [];
                                var list3 = [];
                                var list4 = [];
                                var identityList;
                                var chosen = lib.config.continue_name || [];
                                game.saveConfig('continue_name');
                                event.chosen = chosen;
                                if (_status.mode == 'zhong') {
                                    event.zhongmode = true;
                                    identityList = ['zhu', 'zhong', 'mingzhong', 'nei', 'fan', 'fan', 'fan', 'fan'];
                                } else {
                                    if (_status.mode == 'stratagem') event.stratagemMode = true;
                                    identityList = get.identityList(game.players.length);
                                }
                                var stratagemMode = event.stratagemMode;
                                var addSetting = function (dialog) {
                                    dialog.add('选择身份').classList.add('add-setting');
                                    var table = document.createElement('div');
                                    table.classList.add('add-setting');
                                    table.style.margin = '0';
                                    table.style.width = '100%';
                                    table.style.position = 'relative';
                                    var listi;
                                    if (event.zhongmode) {
                                        listi = ['random', 'zhu', 'mingzhong', 'zhong', 'fan', 'nei'];
                                    } else {
                                        listi = ['random', 'zhu', 'zhong', 'fan', 'nei'];
                                        if (get.config('enable_commoner') && !event.stratagemMode) listi.push('commoner');
                                    }
                                    for (let i = 0; i < listi.length; i++) {
                                        var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                                        td.link = listi[i];
                                        if (td.link === game.me.identity) {
                                            td.classList.add('bluebg');
                                        }
                                        table.appendChild(td);
                                        td.innerHTML = '<span>' + get.translation(listi[i] + '2') + '</span>';
                                        td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                            if (_status.dragged) return;
                                            if (_status.justdragged) return;
                                            _status.tempNoButton = true;
                                            setTimeout(function () {
                                                _status.tempNoButton = false;
                                            }, 500);
                                            var link = this.link;
                                            if (game.zhu) {
                                                if (link != 'random') {
                                                    _status.event.parent.fixedseat = get.distance(game.me, game.zhu, 'absolute');
                                                }
                                                if (game.zhu.name) game.zhu.uninit();
                                                delete game.zhu.isZhu;
                                                delete game.zhu.identityShown;
                                            }
                                            var current = this.parentNode.querySelector('.bluebg');
                                            if (current) {
                                                current.classList.remove('bluebg');
                                            }
                                            current = _status.cheat_seat || seats.querySelector('.bluebg');
                                            if (current) {
                                                current.classList.remove('bluebg');
                                            }
                                            if (link == 'random') {
                                                if (event.zhongmode) {
                                                    link = ['zhu', 'zhong', 'nei', 'fan', 'mingzhong'].randomGet();
                                                } else {
                                                    var listi = ['zhu', 'zhong', 'nei', 'fan'];
                                                    if (get.config('enable_commoner') && !event.stratagemMode) listi.push('commoner');
                                                    link = listi.randomGet();
                                                }
                                                for (let i = 0; i < this.parentNode.childElementCount; i++) {
                                                    if (this.parentNode.childNodes[i].link == link) {
                                                        this.parentNode.childNodes[i].classList.add('bluebg');
                                                    }
                                                }
                                            } else {
                                                this.classList.add('bluebg');
                                            }
                                            num = get.config('choice_' + link);
                                            if (event.zhongmode) {
                                                num = 6;
                                                if (link == 'zhu' || link == 'nei' || link == 'mingzhong') {
                                                    num = 8;
                                                }
                                            }
                                            _status.event.parent.swapnodialog = function (dialog, list) {
                                                var buttons = ui.create.div('.buttons');
                                                var node = dialog.buttons[0].parentNode;
                                                dialog.buttons = ui.create.buttons(list, 'characterx', buttons);
                                                dialog.content.insertBefore(buttons, node);
                                                buttons.addTempClass('start');
                                                node.remove();
                                                game.uncheck();
                                                game.check();
                                                if (event.stratagemMode) return;
                                                for (let i = 0; i < seats.childElementCount; i++) {
                                                    if (get.distance(game.zhu, game.me, 'absolute') === seats.childNodes[i].link) {
                                                        seats.childNodes[i].classList.add('bluebg');
                                                    }
                                                }
                                            };
                                            _status.event = _status.event.parent;
                                            _status.event.step = 0;
                                            _status.event.identity = link;
                                            if (!event.stratagemMode) {
                                                if (link != (event.zhongmode ? 'mingzhong' : 'zhu')) {
                                                    seats.previousSibling.style.display = '';
                                                    seats.style.display = '';
                                                } else {
                                                    seats.previousSibling.style.display = 'none';
                                                    seats.style.display = 'none';
                                                }
                                            }
                                            game.resume();
                                        });
                                    }
                                    dialog.content.appendChild(table);
                                    dialog.add('选择座位').classList.add('add-setting');
                                    var seats = document.createElement('div');
                                    seats.classList.add('add-setting');
                                    seats.style.margin = '0';
                                    seats.style.width = '100%';
                                    seats.style.position = 'relative';
                                    for (let i = stratagemMode ? 1 : 2; i <= game.players.length; i++) {
                                        var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                                        td.innerHTML = get.cnNumber(i, true);
                                        td.link = i - 1;
                                        seats.appendChild(td);
                                        if (!stratagemMode && get.distance(game.zhu, game.me, 'absolute') === i - 1) {
                                            td.classList.add('bluebg');
                                        }
                                        td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                            if (_status.dragged) return;
                                            if (_status.justdragged) return;
                                            if (_status.cheat_seat) {
                                                _status.cheat_seat.classList.remove('bluebg');
                                                if (_status.cheat_seat == this) {
                                                    delete _status.cheat_seat;
                                                    return;
                                                }
                                            }
                                            if (stratagemMode) {
                                                this.classList.add('bluebg');
                                                _status.cheat_seat = this;
                                            } else {
                                                if (get.distance(game.zhu, game.me, 'absolute') == this.link) return;
                                                var current = this.parentNode.querySelector('.bluebg');
                                                if (current) {
                                                    current.classList.remove('bluebg');
                                                }
                                                this.classList.add('bluebg');
                                                for (const i of game.players) {
                                                    if (get.distance(i, game.me, 'absolute') == this.link) {
                                                        game.swapSeat(game.zhu, i, false);
                                                        return;
                                                    }
                                                }
                                            }
                                        });
                                    }
                                    dialog.content.appendChild(seats);
                                    if (!stratagemMode && game.me == game.zhu) {
                                        seats.previousSibling.style.display = 'none';
                                        seats.style.display = 'none';
                                    }
                                    dialog.add(ui.create.div('.placeholder.add-setting'));
                                    dialog.add(ui.create.div('.placeholder.add-setting'));
                                    if (get.is.phoneLayout()) dialog.add(ui.create.div('.placeholder.add-setting'));
                                };
                                var removeSetting = function () {
                                    var dialog = _status.event.dialog;
                                    if (dialog) {
                                        dialog.style.height = '';
                                        delete dialog._scrollset;
                                        var list = Array.from(dialog.querySelectorAll('.add-setting'));
                                        while (list.length) {
                                            list.shift().remove();
                                        }
                                        ui.update();
                                    }
                                };
                                event.addSetting = addSetting;
                                event.removeSetting = removeSetting;
                                event.list = [];
                                identityList.randomSort();
                                if (event.identity) {
                                    identityList.remove(event.identity);
                                    identityList.unshift(event.identity);
                                    if (event.fixedseat) {
                                        var zhuIdentity = _status.mode == 'zhong' ? 'mingzhong' : 'zhu';
                                        if (zhuIdentity != event.identity) {
                                            identityList.remove(zhuIdentity);
                                            identityList.splice(event.fixedseat, 0, zhuIdentity);
                                        }
                                        delete event.fixedseat;
                                    }
                                    delete event.identity;
                                } else if (_status.mode != 'zhong' && (!_status.brawl || !_status.brawl.identityShown)) {
                                    var ban_identity = [];
                                    ban_identity.push(get.config('ban_identity') || 'off');
                                    if (ban_identity[0] != 'off') {
                                        ban_identity.push(get.config('ban_identity2') || 'off');
                                        if (ban_identity[1] != 'off') {
                                            ban_identity.push(get.config('ban_identity3') || 'off');
                                        }
                                    }
                                    ban_identity.remove('off');
                                    if (ban_identity.length) {
                                        var identityList2 = identityList.slice(0);
                                        for (let i = 0; i < ban_identity.length; i++) {
                                            while (identityList2.includes(ban_identity[i])) {
                                                identityList2.remove(ban_identity[i]);
                                            }
                                        }
                                        ban_identity = identityList2.randomGet();
                                        identityList.remove(ban_identity);
                                        identityList.splice(game.players.indexOf(game.me), 0, ban_identity);
                                    }
                                }
                                game.players.forEach((npc, i, arr) => {
                                    const identity = identityList[i];
                                    if (_status.brawl && _status.brawl.identityShown) {
                                        if (npc.identity == 'zhu') game.zhu = npc;
                                        if (!stratagemMode) npc.identityShown = true;
                                    } else {
                                        npc.node.identity.classList.add('guessing');
                                        npc.identity = identity;
                                        npc.setIdentity('cai');
                                        if (event.zhongmode) {
                                            if (identity == 'mingzhong') {
                                                game.zhu = npc;
                                            } else if (identity == 'zhu') {
                                                game.zhu2 = npc;
                                            }
                                        } else {
                                            if (identity == 'zhu') {
                                                game.zhu = npc;
                                            }
                                        }
                                        npc.identityShown = false;
                                    }
                                });//QQQ
                                if (get.config('special_identity') && !event.zhongmode && !event.stratagemMode && game.players.length == 8) {
                                    for (const i of game.players) {
                                        delete i.special_identity;
                                    }
                                    event.special_identity = [];
                                    var zhongs = game.filterPlayer(function (current) {
                                        return current.identity == 'zhong';
                                    });
                                    var fans = game.filterPlayer(function (current) {
                                        return current.identity == 'fan';
                                    });
                                    if (fans.length >= 1) {
                                        fans.randomRemove().special_identity = 'identity_zeishou';
                                        event.special_identity.push('identity_zeishou');
                                    }
                                    if (zhongs.length > 1) {
                                        zhongs.randomRemove().special_identity = 'identity_dajiang';
                                        zhongs.randomRemove().special_identity = 'identity_junshi';
                                        event.special_identity.push('identity_dajiang');
                                        event.special_identity.push('identity_junshi');
                                    } else if (zhongs.length == 1) {
                                        if (Math.random() < 0.5) {
                                            zhongs.randomRemove().special_identity = 'identity_dajiang';
                                            event.special_identity.push('identity_dajiang');
                                        } else {
                                            zhongs.randomRemove().special_identity = 'identity_junshi';
                                            event.special_identity.push('identity_junshi');
                                        }
                                    }
                                }
                                if (!game.zhu) game.zhu = game.me;
                                else {
                                    if (!stratagemMode) {
                                        game.zhu.setIdentity();
                                        game.zhu.identityShown = true;
                                        game.zhu.node.identity.classList.remove('guessing');
                                    }
                                    game.zhu.isZhu = game.zhu.identity == 'zhu';
                                    game.me.setIdentity();
                                    game.me.node.identity.classList.remove('guessing');
                                }
                                //选将框分配
                                for (let i in lib.characterReplace) {
                                    var ix = lib.characterReplace[i];
                                    for (var j = 0; j < ix.length; j++) {
                                        if (chosen.includes(ix[j]) || lib.filter.characterDisabled(ix[j])) ix.splice(j--, 1);
                                    }
                                    if (ix.length) {
                                        event.list.push(i);
                                        list4.addArray(ix);
                                        if (stratagemMode) {
                                            list3.push(i);
                                        } else {
                                            var bool = false;
                                            for (var j of ix) {
                                                if (lib.character[j].isZhugong) {
                                                    bool = true;
                                                    break;
                                                }
                                            }
                                            (bool ? list2 : list3).push(i);
                                        }
                                    }
                                }
                                for (let i in lib.character) {
                                    if (list4.includes(i)) continue;
                                    if (chosen.includes(i)) continue;
                                    if (lib.filter.characterDisabled(i)) continue;
                                    event.list.push(i);
                                    list4.push(i);
                                    if (!stratagemMode && lib.character[i].isZhugong) {
                                        list2.push(i);
                                    } else {
                                        list3.push(i);
                                    }
                                }
                                var getZhuList = function () {
                                    if (stratagemMode) {
                                        list2.sort(lib.sort.character);
                                        return list2;
                                    }
                                    var limit_zhu = get.config('limit_zhu');
                                    if (!limit_zhu || limit_zhu == 'off') return list2.slice(0).sort(lib.sort.character);
                                    if (limit_zhu != 'group') {
                                        var num = parseInt(limit_zhu) || 6;
                                        return list2.randomGets(num).sort(lib.sort.character);
                                    }
                                    var getGroup = function (name) {
                                        var characterReplace = lib.characterReplace[name];
                                        if (characterReplace && characterReplace[0] && lib.character[characterReplace[0]]) return lib.character[characterReplace[0]][1];
                                        return lib.character[name][1];
                                    };
                                    var list2x = list2.slice(0);
                                    list2x.randomSort();
                                    for (let i = 0; i < list2x.length; i++) {
                                        for (var j = i + 1; j < list2x.length; j++) {
                                            if (getGroup(list2x[i]) == getGroup(list2x[j])) {
                                                list2x.splice(j--, 1);
                                            }
                                        }
                                    }
                                    list2x.sort(lib.sort.character);
                                    return list2x;
                                };
                                event.list.randomSort();
                                _status.characterlist = list4.slice(0).randomSort();
                                list3.randomSort();
                                if (_status.brawl && _status.brawl.chooseCharacterFilter) {
                                    _status.brawl.chooseCharacterFilter(event.list, getZhuList(), list3);
                                }
                                var num = get.config('choice_' + game.me.identity);
                                if (event.zhongmode) {
                                    num = 6;
                                    if (game.me.identity == 'zhu' || game.me.identity == 'nei' || game.me.identity == 'mingzhong') {
                                        num = 8;
                                    }
                                }
                                if (stratagemMode) {
                                    list = event.list.slice(0, num);
                                } else if (game.zhu != game.me) {
                                    event.ai(game.zhu, event.list, getZhuList());
                                    event.list.remove(get.sourceCharacter(game.zhu.name1));
                                    event.list.remove(get.sourceCharacter(game.zhu.name2));
                                    if (_status.brawl && _status.brawl.chooseCharacter) {
                                        list = _status.brawl.chooseCharacter(event.list, num);
                                        if (list === false || list === 'nozhu') {
                                            list = event.list.slice(0, num);
                                        }
                                    } else {
                                        list = event.list.slice(0, num);
                                    }
                                } else {
                                    if (_status.brawl && _status.brawl.chooseCharacter) {
                                        list = _status.brawl.chooseCharacter(getZhuList(), list3, num);
                                        if (list === false) {
                                            if (event.zhongmode) {
                                                list = list3.slice(0, 6);
                                            } else {
                                                list = getZhuList().concat(list3.slice(0, num));
                                            }
                                        } else if (list === 'nozhu') {
                                            list = event.list.slice(0, num);
                                        }
                                    } else {
                                        if (event.zhongmode) {
                                            list = list3.slice(0, 8);
                                        } else {
                                            list = getZhuList().concat(list3.slice(0, num));
                                        }
                                    }
                                }
                                delete event.swapnochoose;
                                var dialog;
                                if (event.swapnodialog) {
                                    dialog = ui.dialog;
                                    event.swapnodialog(dialog, list);
                                    delete event.swapnodialog;
                                } else {
                                    var str = '选择角色';
                                    if (_status.brawl && _status.brawl.chooseCharacterStr) {
                                        str = _status.brawl.chooseCharacterStr;
                                    }
                                    dialog = ui.create.dialog(str, 'hidden', [list, 'characterx']);
                                    if (!_status.brawl || !_status.brawl.noAddSetting) {
                                        if (get.config('change_identity')) {
                                            addSetting(dialog);
                                        }
                                    }
                                }
                                if (game.me.special_identity) {
                                    dialog.setCaption('选择角色(' + get.translation(game.me.special_identity) + ')');
                                    game.me.node.identity.firstChild.innerHTML = get.translation(game.me.special_identity + '_bg');
                                } else {
                                    dialog.setCaption('选择角色');
                                    game.me.setIdentity();
                                }
                                if (!event.chosen.length) {
                                    game.me.chooseButton(dialog, true).set('onfree', true).selectButton = function () {
                                        if (_status.brawl && _status.brawl.doubleCharacter) return 2;
                                        return get.config('double_character') ? 2 : 1;
                                    };
                                } else {
                                    lib.init.onfree();
                                }
                                ui.create.cheat = function () {
                                    _status.createControl = ui.cheat2;
                                    ui.cheat = ui.create.control('更换', function () {
                                        if (ui.cheat2 && ui.cheat2.dialog == _status.event.dialog) {
                                            return;
                                        }
                                        if (game.changeCoin) {
                                            game.changeCoin(-3);
                                        }
                                        if (game.zhu != game.me) {
                                            event.list.randomSort();
                                            if (_status.brawl && _status.brawl.chooseCharacter) {
                                                list = _status.brawl.chooseCharacter(event.list, num);
                                                if (list === false || list === 'nozhu') {
                                                    list = event.list.slice(0, num);
                                                }
                                            } else {
                                                list = event.list.slice(0, num);
                                            }
                                        } else {
                                            getZhuList().sort(lib.sort.character);
                                            list3.randomSort();
                                            if (_status.brawl && _status.brawl.chooseCharacter) {
                                                list = _status.brawl.chooseCharacter(getZhuList(), list3, num);
                                                if (list === false) {
                                                    if (event.zhongmode) {
                                                        list = list3.slice(0, 6);
                                                    } else {
                                                        list = getZhuList().concat(list3.slice(0, num));
                                                    }
                                                } else if (list === 'nozhu') {
                                                    event.list.randomSort();
                                                    list = event.list.slice(0, num);
                                                }
                                            } else {
                                                if (event.zhongmode) {
                                                    list = list3.slice(0, 6);
                                                } else {
                                                    list = getZhuList().concat(list3.slice(0, num));
                                                }
                                            }
                                        }
                                        var buttons = ui.create.div('.buttons');
                                        var node = _status.event.dialog.buttons[0].parentNode;
                                        _status.event.dialog.buttons = ui.create.buttons(list, 'characterx', buttons);
                                        _status.event.dialog.content.insertBefore(buttons, node);
                                        buttons.addTempClass('start');
                                        node.remove();
                                        game.uncheck();
                                        game.check();
                                    });
                                    delete _status.createControl;
                                };
                                if (lib.onfree) {
                                    lib.onfree.push(function () {
                                        event.dialogxx = ui.create.characterDialog('heightset');
                                        if (ui.cheat2) {
                                            ui.cheat2.addTempClass('controlpressdownx', 500);
                                            ui.cheat2.classList.remove('disabled');
                                        }
                                    });
                                } else {
                                    event.dialogxx = ui.create.characterDialog('heightset');
                                }
                                ui.create.cheat2 = function () {
                                    ui.cheat2 = ui.create.control('自由选将', function () {
                                        if (this.dialog == _status.event.dialog) {
                                            if (game.changeCoin) {
                                                game.changeCoin(10);
                                            }
                                            this.dialog.close();
                                            _status.event.dialog = this.backup;
                                            this.backup.open();
                                            delete this.backup;
                                            game.uncheck();
                                            game.check();
                                            if (ui.cheat) {
                                                ui.cheat.addTempClass('controlpressdownx', 500);
                                                ui.cheat.classList.remove('disabled');
                                            }
                                        } else {
                                            if (game.changeCoin) {
                                                game.changeCoin(-10);
                                            }
                                            this.backup = _status.event.dialog;
                                            _status.event.dialog.close();
                                            _status.event.dialog = _status.event.parent.dialogxx;
                                            this.dialog = _status.event.dialog;
                                            this.dialog.open();
                                            game.uncheck();
                                            game.check();
                                            if (ui.cheat) {
                                                ui.cheat.classList.add('disabled');
                                            }
                                        }
                                    });
                                    if (lib.onfree) {
                                        ui.cheat2.classList.add('disabled');
                                    }
                                };
                                if (!_status.brawl || !_status.brawl.chooseCharacterFixed) {
                                    if (!ui.cheat && get.config('change_choice')) ui.create.cheat();
                                    if (!ui.cheat2 && get.config('free_choose')) ui.create.cheat2();
                                }
                                ('step 1');
                                if (ui.cheat) {
                                    ui.cheat.close();
                                    delete ui.cheat;
                                }
                                if (ui.cheat2) {
                                    ui.cheat2.close();
                                    delete ui.cheat2;
                                }
                                if (event.chosen.length) {
                                    event.choosed = event.chosen;
                                } else if (event.modchosen) {
                                    if (event.modchosen[0] == 'random') event.modchosen[0] = result.buttons[0].link;
                                    else event.modchosen[1] = result.buttons[0].link;
                                    event.choosed = event.modchosen;
                                } else if (result.buttons.length == 2) {
                                    event.choosed = [result.buttons[0].link, result.buttons[1].link];
                                    game.addRecentCharacter(result.buttons[0].link, result.buttons[1].link);
                                } else {
                                    event.choosed = [result.buttons[0].link];
                                    game.addRecentCharacter(result.buttons[0].link);
                                }
                                var name = event.choosed[0];
                                if (get.is.double(name)) {
                                    game.me._groupChosen = true;
                                    game.me.chooseControl(get.is.double(name, true)).set('prompt', '请选择你的势力');
                                } else if (lib.character[name].group == 'shen' && !lib.character[name].hasHiddenSkill && get.config('choose_group')) {
                                    var list = lib.group.slice(0);
                                    list.remove('shen');
                                    game.me.chooseControl(list).set('prompt', '请选择神武将的势力');
                                }
                                ('step 2');
                                event.group = result.control || false;
                                if (event.choosed.length == 2) {
                                    game.me.init(event.choosed[0], event.choosed[1]);
                                } else {
                                    game.me.init(event.choosed[0]);
                                }
                                event.list.remove(get.sourceCharacter(game.me.name1));
                                event.list.remove(get.sourceCharacter(game.me.name2));
                                if (!event.stratagemMode && game.me == game.zhu && game.players.length > 4) {
                                    if (!game.me.isInitFilter('noZhuHp')) {
                                        game.me.hp++;
                                        game.me.maxHp++;
                                        game.me.update();
                                    }
                                }
                                for (const i of game.players) {
                                    if ((event.stratagemMode || i != game.zhu) && i != game.me) {
                                        event.list.randomSort();
                                        event.ai(i, event.list.splice(0, get.config('choice_' + i.identity)), null, event.list);
                                    }
                                }
                                ('step 3');
                                if (event.group) {
                                    game.me.group = event.group;
                                    game.me.node.name.dataset.nature = get.groupnature(game.me.group);
                                    game.me.update();
                                }
                                for (const i of game.players) {
                                    _status.characterlist.remove(i.name);
                                    _status.characterlist.remove(i.name1);
                                    _status.characterlist.remove(i.name2);
                                }
                                ('step 4');
                                if (event.stratagemMode) {
                                    ['stratagem_gain', 'stratagem_insight', 'stratagem_expose'].forEach((globalSkill) => game.addGlobalSkill(globalSkill));
                                    game.players.forEach((i) => {
                                        i.storage.zhibi = [];
                                        i.storage.stratagem_expose = [];
                                        i.markSkill('stratagem_fury');
                                    });
                                }
                                setTimeout(function () {
                                    ui.arena.classList.remove('choose-character');
                                }, 500);
                                if (event.special_identity) {
                                    for (let i = 0; i < event.special_identity.length; i++) {
                                        game.zhu.addSkill(event.special_identity[i]);
                                    }
                                }
                            });
                        },
                        chooseCharacterOL() {
                            if (_status.mode == 'purple') {
                                game.chooseCharacterPurpleOL();
                                return;
                            } else if (_status.mode == 'stratagem') {
                                game.chooseCharacterStratagemOL();
                                return;
                            }
                            var next = game.createEvent('chooseCharacter');
                            next.setContent(function () {
                                'step 0';
                                ui.arena.classList.add('choose-character');
                                var i;
                                var identityList;
                                if (_status.mode == 'zhong') {
                                    event.zhongmode = true;
                                    identityList = ['zhu', 'zhong', 'mingzhong', 'nei', 'fan', 'fan', 'fan', 'fan'];
                                } else {
                                    identityList = get.identityList(game.players.length);
                                }
                                identityList.randomSort();
                                game.players.forEach((npc, i, arr) => {
                                    const identity = identityList[i];
                                    npc.identity = identity;
                                    npc.setIdentity('cai');
                                    npc.node.identity.classList.add('guessing');
                                    if (event.zhongmode) {
                                        if (identity == 'mingzhong') {
                                            game.zhu = npc;
                                        } else if (identity == 'zhu') {
                                            game.zhu2 = npc;
                                        }
                                    } else {
                                        if (identity == 'zhu') {
                                            game.zhu = npc;
                                        }
                                    }
                                    npc.identityShown = false;
                                });//QQQ
                                if (lib.configOL.special_identity && !event.zhongmode && game.players.length == 8) {
                                    var map = {};
                                    var zhongs = game.filterPlayer(function (current) {
                                        return current.identity == 'zhong';
                                    });
                                    var fans = game.filterPlayer(function (current) {
                                        return current.identity == 'fan';
                                    });
                                    if (fans.length >= 1) {
                                        map.identity_zeishou = fans.randomRemove();
                                    }
                                    if (zhongs.length > 1) {
                                        map.identity_dajiang = zhongs.randomRemove();
                                        map.identity_junshi = zhongs.randomRemove();
                                    } else if (zhongs.length == 1) {
                                        if (Math.random() < 0.5) {
                                            map.identity_dajiang = zhongs.randomRemove();
                                        } else {
                                            map.identity_junshi = zhongs.randomRemove();
                                        }
                                    }
                                    game.broadcastAll(
                                        function (zhu, map) {
                                            for (var i in map) {
                                                map[i].special_identity = i;
                                            }
                                        },
                                        game.zhu,
                                        map
                                    );
                                    event.special_identity = map;
                                }
                                game.zhu.setIdentity();
                                game.zhu.identityShown = true;
                                game.zhu.isZhu = game.zhu.identity == 'zhu';
                                game.zhu.node.identity.classList.remove('guessing');
                                game.me.setIdentity();
                                game.me.node.identity.classList.remove('guessing');
                                if (game.me.special_identity) {
                                    game.me.node.identity.firstChild.innerHTML = get.translation(game.me.special_identity + '_bg');
                                }
                                for (const i of game.players) {
                                    i.send(
                                        function (zhu, zhuid, me, identity) {
                                            for (var i in lib.playerOL) {
                                                lib.playerOL[i].setIdentity('cai');
                                                lib.playerOL[i].node.identity.classList.add('guessing');
                                            }
                                            zhu.identityShown = true;
                                            zhu.identity = zhuid;
                                            if (zhuid == 'zhu') zhu.isZhu = true;
                                            zhu.setIdentity();
                                            zhu.node.identity.classList.remove('guessing');
                                            me.setIdentity(identity);
                                            me.node.identity.classList.remove('guessing');
                                            if (me.special_identity) {
                                                me.node.identity.firstChild.innerHTML = get.translation(me.special_identity + '_bg');
                                            }
                                            ui.arena.classList.add('choose-character');
                                        },
                                        game.zhu,
                                        game.zhu.identity,
                                        i,
                                        i.identity
                                    );
                                }
                                var list;
                                var list2 = [];
                                var list3 = [];
                                var list4 = [];
                                event.list = [];
                                event.list2 = [];
                                var libCharacter = {};
                                for (let i = 0; i < lib.configOL.characterPack.length; i++) {
                                    var pack = lib.characterPack[lib.configOL.characterPack[i]];
                                    for (var j in pack) {
                                        // if(j=='zuoci') continue;
                                        if (lib.character[j]) libCharacter[j] = lib.character[j];
                                    }
                                }
                                for (let i in lib.characterReplace) {
                                    var ix = lib.characterReplace[i];
                                    for (var j = 0; j < ix.length; j++) {
                                        if (!libCharacter[ix[j]] || lib.filter.characterDisabled(ix[j])) ix.splice(j--, 1);
                                    }
                                    if (ix.length) {
                                        event.list.push(i);
                                        event.list2.push(i);
                                        list4.addArray(ix);
                                        var bool = false;
                                        for (var j of ix) {
                                            if (libCharacter[j].isZhugong) {
                                                bool = true;
                                                break;
                                            }
                                        }
                                        (bool ? list2 : list3).push(i);
                                    }
                                }
                                game.broadcast(function (list) {
                                    for (var i in lib.characterReplace) {
                                        var ix = lib.characterReplace[i];
                                        for (var j = 0; j < ix.length; j++) {
                                            if (!list.includes(ix[j])) ix.splice(j--, 1);
                                        }
                                    }
                                }, list4);
                                for (let i in libCharacter) {
                                    if (list4.includes(i)) continue;
                                    if (lib.filter.characterDisabled(i, libCharacter)) continue;
                                    event.list.push(i);
                                    event.list2.push(i);
                                    list4.push(i);
                                    if (libCharacter[i].isZhugong) {
                                        list2.push(i);
                                    } else {
                                        list3.push(i);
                                    }
                                }
                                _status.characterlist = list4.slice(0);
                                if (event.zhongmode) {
                                    list = event.list.randomGets(8);
                                } else {
                                    var getZhuList = function (list2) {
                                        var limit_zhu = lib.configOL.limit_zhu;
                                        if (!limit_zhu || limit_zhu == 'off') return list2.slice(0).sort(lib.sort.character);
                                        if (limit_zhu != 'group') {
                                            var num = parseInt(limit_zhu) || 6;
                                            return list2.randomGets(num).sort(lib.sort.character);
                                        }
                                        var getGroup = function (name) {
                                            if (lib.characterReplace[name]) return lib.character[lib.characterReplace[name][0]][1];
                                            return lib.character[name][1];
                                        };
                                        var list2x = list2.slice(0);
                                        list2x.randomSort();
                                        for (let i = 0; i < list2x.length; i++) {
                                            for (var j = i + 1; j < list2x.length; j++) {
                                                if (getGroup(list2x[i]) == getGroup(list2x[j])) {
                                                    list2x.splice(j--, 1);
                                                }
                                            }
                                        }
                                        list2x.sort(lib.sort.character);
                                        return list2x;
                                    };
                                    list = getZhuList(list2).concat(list3.randomGets(5));
                                }
                                var next = game.zhu.chooseButton(true);
                                next.set('selectButton', lib.configOL.double_character ? 2 : 1);
                                next.set('createDialog', ['选择角色', [list, 'characterx']]);
                                next.set('ai', function (button) {
                                    return Math.random();
                                });
                                ('step 1');
                                if (!game.zhu.name) {
                                    game.zhu.init(result.links[0], result.links[1]);
                                }
                                event.list.remove(get.sourceCharacter(game.zhu.name1));
                                event.list.remove(get.sourceCharacter(game.zhu.name2));
                                event.list2.remove(get.sourceCharacter(game.zhu.name1));
                                event.list2.remove(get.sourceCharacter(game.zhu.name2));
                                if (game.players.length > 4) {
                                    if (!game.zhu.isInitFilter('noZhuHp')) {
                                        game.zhu.maxHp++;
                                        game.zhu.hp++;
                                        game.zhu.update();
                                    }
                                }
                                game.broadcast(
                                    function (zhu, name, name2, addMaxHp) {
                                        if (!zhu.name) {
                                            zhu.init(name, name2);
                                        }
                                        if (addMaxHp) {
                                            if (!zhu.isInitFilter('noZhuHp')) {
                                                zhu.maxHp++;
                                                zhu.hp++;
                                                zhu.update();
                                            }
                                        }
                                    },
                                    game.zhu,
                                    result.links[0],
                                    result.links[1],
                                    game.players.length > 4
                                );
                                if (game.zhu.group == 'shen' && !game.zhu.isUnseen(0)) {
                                    var list = ['wei', 'shu', 'wu', 'qun', 'jin', 'key'];
                                    for (let i = 0; i < list.length; i++) {
                                        if (!lib.group.includes(list[i])) list.splice(i--, 1);
                                        else list[i] = ['', '', 'group_' + list[i]];
                                    }
                                    game.zhu.chooseButton(['请选择神武将的势力', [list, 'vcard']], true).set('ai', function () {
                                        return Math.random();
                                    });
                                } else if (get.is.double(game.zhu.name1)) {
                                    game.zhu._groupChosen = true;
                                    var list = get.is.double(game.zhu.name1, true);
                                    for (let i = 0; i < list.length; i++) {
                                        if (!lib.group.includes(list[i])) list.splice(i--, 1);
                                        else list[i] = ['', '', 'group_' + list[i]];
                                    }
                                    game.zhu.chooseButton(['请选择你的势力', [list, 'vcard']], true).set('ai', function () {
                                        return Math.random();
                                    });
                                } else event.goto(3);
                                ('step 2');
                                var name = result.links[0][2].slice(6);
                                game.zhu.changeGroup(name);
                                ('step 3');
                                var list = [];
                                var selectButton = lib.configOL.double_character ? 2 : 1;
                                var num,
                                    num2 = 0;
                                if (event.zhongmode) {
                                    num = 6;
                                } else {
                                    num = Math.floor(event.list.length / (game.players.length - 1));
                                    if (num > 5) {
                                        num = 5;
                                    }
                                    num2 = event.list.length - num * (game.players.length - 1);
                                    if (lib.configOL.double_nei) {
                                        num2 = Math.floor(num2 / 2);
                                    }
                                    if (num2 > 2) {
                                        num2 = 2;
                                    }
                                }
                                for (const i of game.players) {
                                    if (i != game.zhu) {
                                        var num3 = 0;
                                        if (event.zhongmode) {
                                            if (i.identity == 'nei' || i.identity == 'zhu') {
                                                num3 = 2;
                                            }
                                        } else {
                                            if (i.identity == 'nei') {
                                                num3 = num2;
                                            }
                                        }
                                        var str = '选择角色';
                                        if (i.special_identity) {
                                            str += '(' + get.translation(i.special_identity) + ')';
                                        }
                                        list.push([i, [str, [event.list.randomRemove(num + num3), 'characterx']], selectButton, true]);
                                    }
                                }
                                game.me.chooseButtonOL(list, function (player, result) {
                                    if (game.online || player == game.me) player.init(result.links[0], result.links[1]);
                                });
                                ('step 4');
                                var shen = [];
                                for (var i in result) {
                                    if (result[i] && result[i].links) {
                                        for (var j = 0; j < result[i].links.length; j++) {
                                            event.list2.remove(get.sourceCharacter(result[i].links[j]));
                                        }
                                    }
                                }
                                for (var i in result) {
                                    if (result[i] == 'ai') {
                                        result[i] = event.list2.randomRemove(lib.configOL.double_character ? 2 : 1);
                                        for (var j = 0; j < result[i].length; j++) {
                                            var listx = lib.characterReplace[result[i][j]];
                                            if (listx && listx.length) result[i][j] = listx.randomGet();
                                        }
                                    } else {
                                        result[i] = result[i].links;
                                    }
                                    if (get.is.double(result[i][0]) || (lib.character[result[i][0]] && lib.character[result[i][0]].group == 'shen' && !lib.character[result[i][0]].hasHiddenSkill)) shen.push(lib.playerOL[i]);
                                }
                                event.result2 = result;
                                if (shen.length) {
                                    var list = ['wei', 'shu', 'wu', 'qun', 'jin', 'key'];
                                    for (let i = 0; i < list.length; i++) {
                                        if (!lib.group.includes(list[i])) list.splice(i--, 1);
                                        else list[i] = ['', '', 'group_' + list[i]];
                                    }
                                    for (let i = 0; i < shen.length; i++) {
                                        if (get.is.double(result[shen[i].playerid][0])) {
                                            shen[i]._groupChosen = true;
                                            shen[i] = [
                                                shen[i],
                                                [
                                                    '请选择你的势力',
                                                    [
                                                        get.is.double(result[shen[i].playerid][0], true).map(function (i) {
                                                            return ['', '', 'group_' + i];
                                                        }),
                                                        'vcard',
                                                    ],
                                                ],
                                                1,
                                                true,
                                            ];
                                        } else shen[i] = [shen[i], ['请选择神武将的势力', [list, 'vcard']], 1, true];
                                    }
                                    game.me
                                        .chooseButtonOL(shen, function (player, result) {
                                            if (player == game.me) player.changeGroup(result.links[0][2].slice(6), false, false);
                                        })
                                        .set('switchToAuto', function () {
                                            _status.event.result = 'ai';
                                        })
                                        .set('processAI', function () {
                                            return {
                                                bool: true,
                                                links: [_status.event.dialog.buttons.randomGet().link],
                                            };
                                        });
                                } else event._result = {};
                                ('step 5');
                                if (!result) result = {};
                                for (var i in result) {
                                    if (result[i] && result[i].links) result[i] = result[i].links[0][2].slice(6);
                                    else if (result[i] == 'ai')
                                        result[i] = (function () {
                                            var player = lib.playerOL[i];
                                            var list = ['wei', 'shu', 'wu', 'qun', 'jin', 'key'];
                                            for (var ix = 0; ix < list.length; ix++) {
                                                if (!lib.group.includes(list[ix])) list.splice(ix--, 1);
                                            }
                                            if (_status.mode != 'zhong' && game.zhu && game.zhu.group) {
                                                if (['re_zhangjiao', 'liubei', 're_liubei', 'caocao', 're_caocao', 'sunquan', 're_sunquan', 'zhangjiao', 'sp_zhangjiao', 'caopi', 're_caopi', 'liuchen', 'caorui', 'sunliang', 'sunxiu', 'sunce', 're_sunben', 'ol_liushan', 're_liushan', 'key_akane', 'dongzhuo', 're_dongzhuo', 'ol_dongzhuo', 'jin_simashi', 'caomao'].includes(game.zhu.name)) return game.zhu.group;
                                                if (game.zhu.name == 'yl_yuanshu') {
                                                    if (player.identity == 'zhong') list.remove('qun');
                                                    return 'qun';
                                                }
                                                if (['sunhao', 'xin_yuanshao', 're_yuanshao', 're_sunce', 'ol_yuanshao', 'yuanshu', 'jin_simazhao', 'liubian'].includes(game.zhu.name)) {
                                                    if (player.identity != 'zhong') list.remove(game.zhu.group);
                                                    return game.zhu.group;
                                                }
                                            }
                                            return list.randomGet();
                                        })();
                                }
                                var result2 = event.result2;
                                game.broadcast(
                                    function (result, result2) {
                                        for (var i in result) {
                                            if (!lib.playerOL[i].name) {
                                                lib.playerOL[i].init(result[i][0], result[i][1]);
                                            }
                                            if (result2[i] && result2[i].length) lib.playerOL[i].changeGroup(result2[i], false, false);
                                        }
                                        setTimeout(function () {
                                            ui.arena.classList.remove('choose-character');
                                        }, 500);
                                    },
                                    result2,
                                    result
                                );
                                for (var i in result2) {
                                    if (!lib.playerOL[i].name) {
                                        lib.playerOL[i].init(result2[i][0], result2[i][1]);
                                    }
                                    if (result[i] && result[i].length) lib.playerOL[i].changeGroup(result[i], false, false);
                                }
                                if (event.special_identity) {
                                    for (var i in event.special_identity) {
                                        game.zhu.addSkill(i);
                                    }
                                }
                                for (const i of game.players) {
                                    _status.characterlist.remove(i.name);
                                    _status.characterlist.remove(i.name1);
                                    _status.characterlist.remove(i.name2);
                                }
                                setTimeout(function () {
                                    ui.arena.classList.remove('choose-character');
                                }, 500);
                            });
                        },
                        stratagemCamouflage() {
                            var next = game.createEvent('stratagemCamouflage');
                            next.players = game.players.slice();
                            if (_status.connectMode) {
                                next.setContent('stratagemCamouflageOL');
                            } else {
                                next.setContent('stratagemCamouflage');
                            }
                        },
                    },
                    translate: {
                        zhu: '主',
                        zhong: '忠',
                        mingzhong: '忠',
                        nei: '内',
                        fan: '反',
                        commoner: '民',
                        cai: '猜',
                        cai2: '猜',
                        rZhu: '主',
                        rZhong: '忠',
                        rNei: '内',
                        rYe: '野',
                        rZhu2: '主帅',
                        rZhong2: '前锋',
                        rNei2: '细作',
                        rYe2: '野心家',
                        bZhu: '主',
                        bZhong: '忠',
                        bNei: '内',
                        bYe: '野',
                        bZhu2: '主帅',
                        bZhong2: '前锋',
                        bNei2: '细作',
                        bYe2: '野心家',
                        zhu2: '主公',
                        zhong2: '忠臣',
                        mingzhong2: '明忠',
                        nei2: '内奸',
                        fan2: '反贼',
                        commoner2: '平民',
                        random2: '随机',
                        enemy: '敌',
                        friend: '友',
                        enemy2: '敌方',
                        friend2: '友方',
                        identity_junshi_bg: '师',
                        identity_dajiang_bg: '将',
                        identity_zeishou_bg: '首',
                        identity_junshi: '军师',
                        identity_dajiang: '大将',
                        identity_zeishou: '贼首',
                        ai_strategy_1: '均衡',
                        ai_strategy_2: '偏反',
                        ai_strategy_3: '偏主',
                        ai_strategy_4: '酱油',
                        ai_strategy_5: '天使',
                        ai_strategy_6: '仇主',
                        dongcha: '洞察',
                        dongcha_info: '游戏开始时,随机一名反贼的身份对你可见;准备阶段,你可以弃置场上的一张牌',
                        sheshen: '舍身',
                        sheshen_info: '锁定技,主公处于濒死状态即将死亡时,令主公+1体力上限,回复体力至X点(X为你的体力值数),获得你的所有牌,你死亡',
                        yexinbilu: '野心毕露',
                        stratagem_insight: '洞察',
                    },
                    element: {
                        player: {
                            init(player) {
                                //初始化列表
                                game.card_equip_liejiang = [];
                                player.From = {};
                                player._Hit = [];
                                player.freeCard = [];
                                player.phaseDrawZhimo = 1;
                                player.phaseUseZhimo = 2;
                                player.zhimoudian = lib.character[player.name][5] ? lib.character[player.name][5][0] : 3;
                                player.maxzhimoudian = lib.character[player.name][5] ? lib.character[player.name][5][1] : 5;
                            },
                            insightInto(target) {
                                var next = game.createEvent('stratagemInsight');
                                next.player = this;
                                next.target = target;
                                next.setContent('stratagemInsight');
                                return next;
                            },
                            addExpose(num) {
                                if (!game.zhu || !game.zhu.isZhu || !game.zhu.identityShown) return;
                                if (typeof this.ai.shown == 'number' && !this.identityShown && this.ai.shown < 1) {
                                    this.ai.shown += num;
                                    if (this.ai.shown > 0.95) {
                                        this.ai.shown = 0.95;
                                    }
                                }
                                return this;
                            },
                            yexinbilu() {
                                game.broadcastAll(function (player) {
                                    player.showIdentity();
                                }, this);
                                this.addMaxHp();
                                this.recover();
                            },
                            $dieAfter() {
                                if (_status.video) return;
                                if (!this.node.dieidentity) {
                                    var str;
                                    if (this.special_identity) {
                                        str = get.translation(this.special_identity);
                                    } else {
                                        str = get.translation(this.identity + '2');
                                    }
                                    var node = ui.create.div('.damage.dieidentity', str, this);
                                    if (str == '野心家') {
                                        node.style.fontSize = '40px';
                                    }
                                    ui.refresh(node);
                                    node.style.opacity = 1;
                                    this.node.dieidentity = node;
                                }
                                var trans = this.style.transform;
                                if (trans) {
                                    if (trans.includes('rotateY')) {
                                        this.node.dieidentity.style.transform = 'rotateY(180deg)';
                                    } else if (trans.includes('rotateX')) {
                                        this.node.dieidentity.style.transform = 'rotateX(180deg)';
                                    } else {
                                        this.node.dieidentity.style.transform = '';
                                    }
                                } else {
                                    this.node.dieidentity.style.transform = '';
                                }
                            },
                            dieAfter2(source) {
                                if (_status.mode == 'stratagem') return;
                                if (_status.mode == 'purple') {
                                    if (source) {
                                        if (this.identity == 'rZhu' || this.identity == 'bZhu') {
                                            if (this.identity.slice(0, 1) != source.identity.slice(0, 1)) source.recover();
                                        } else if (this.identity == 'rZhong' || this.identity == 'bZhong') {
                                            if (this.identity.slice(0, 1) != source.identity.slice(0, 1)) source.draw(2);
                                            else if (source.identity.indexOf('Zhu') == 1) source.discard(source.getCards('h'));
                                        } else if (this.identity == 'rNei' || this.identity == 'bNei') {
                                            if (this.identity.slice(0, 1) == source.identity.slice(0, 1)) source.draw(3);
                                        }
                                    }
                                    if (!_status.yeconfirm) {
                                        _status.yeconfirm = true;
                                        game.addGlobalSkill('yexinbilu');
                                        game.broadcastAll(function () {
                                            if (game.me.identity == 'rYe' || game.me.identity == 'bYe') {
                                                var player = game.findPlayer(function (current) {
                                                    return current != game.me && (current.identity == 'bYe' || current.identity == 'rYe');
                                                });
                                                if (player) {
                                                    player.showIdentity();
                                                }
                                            }
                                        });
                                    }
                                }
                                if (this.identity == 'fan' && source) source.draw(3);
                                else if (this.identity == 'commoner' && source) source.draw(2);
                                else if (this.identity == 'mingzhong' && source) {
                                    if (source.identity == 'zhu') {
                                        source.discard(source.getCards('he'));
                                    } else {
                                        source.draw(3);
                                    }
                                } else if (this.identity == 'zhong' && source && source.identity == 'zhu' && source.isZhu) {
                                    source.discard(source.getCards('he'));
                                }
                            },
                            dieAfter(source) {
                                if (!this.identityShown) {
                                    game.broadcastAll(
                                        function (player, identity, identity2) {
                                            player.setIdentity(player.identity);
                                            player.identityShown = true;
                                            player.node.identity.classList.remove('guessing');
                                            if (identity) {
                                                player.node.identity.firstChild.innerHTML = get.translation(identity + '_bg');
                                                game.log(player, '的身份是', '#g' + get.translation(identity));
                                            } else {
                                                game.log(player, '的身份是', '#g' + get.translation(identity2 + '2'));
                                            }
                                        },
                                        this,
                                        this.special_identity,
                                        this.identity
                                    );
                                }
                                if (this.special_identity) {
                                    game.broadcastAll(
                                        function (zhu, identity) {
                                            zhu.removeSkill(identity);
                                        },
                                        game.zhu,
                                        this.special_identity
                                    );
                                }
                                game.checkResult();
                                if (_status.mode == 'purple') {
                                    var red = [];
                                    var blue = [];
                                    game.countPlayer(function (current) {
                                        var identity = current.identity.slice(1);
                                        if (identity != 'Zhu') {
                                            if (current.identity.indexOf('r') == 0) red.push(current);
                                            else blue.push(current);
                                        }
                                    });
                                    if (red.length <= 1 && blue.length <= 1) game.broadcastAll(game.showIdentity);
                                    return;
                                }
                                if (game.zhu && game.zhu.isZhu) {
                                    if ((get.population('zhong') + get.population('nei') == 0 || get.population('zhong') + get.population('fan') == 0) && get.population('commoner') == 0) {
                                        game.broadcastAll(function () {
                                            if (game.showIdentity) game.showIdentity();
                                            if (game.zhu && game.zhu.isAlive() && get.population('nei') == 1 && get.config('nei_fullscreenpop')) game.me.$fullscreenpop('<span style="font-family:xinwei"><span data-nature="fire">主公</span><span data-nature="soil"> vs </span><span data-nature="thunder">内奸</span></span>', null, null, false);
                                        });
                                    }
                                }
                                if (game.zhu && game.zhu.storage.enhance_zhu && get.population('fan') < 3) {
                                    game.zhu.removeSkill(game.zhu.storage.enhance_zhu);
                                    delete game.zhu.storage.enhance_zhu;
                                }
                                if (this == game.zhong) {
                                    game.broadcastAll(function (player) {
                                        game.zhu = player;
                                        game.zhu.identityShown = true;
                                        game.zhu.ai.shown = 1;
                                        game.zhu.setIdentity();
                                        game.zhu.isZhu = true;
                                        var skills = player.getStockSkills(true, true).filter((skill) => {
                                            if (player.hasSkill(skill)) return false;
                                            var info = get.info(skill);
                                            return info && info.zhuSkill;
                                        });
                                        if (skills.length) {
                                            player.addSkills(skills);
                                        }
                                        game.zhu.node.identity.classList.remove('guessing');
                                        if (lib.config.animation && !lib.config.low_performance) game.zhu.$legend();
                                        delete game.zhong;
                                        if (_status.clickingidentity && _status.clickingidentity[0] == game.zhu) {
                                            for (let i = 0; i < _status.clickingidentity[1].length; i++) {
                                                _status.clickingidentity[1][i].delete();
                                                _status.clickingidentity[1][i].style.transform = '';
                                            }
                                            delete _status.clickingidentity;
                                        }
                                    }, game.zhu);
                                    game.zhu.playerfocus(1000);
                                }
                                if (!_status.over) {
                                    var giveup;
                                    if (get.population('fan') + get.population('nei') == 1) {
                                        for (const i of game.players) {
                                            if (i.identity == 'fan' || i.identity == 'nei') {
                                                giveup = i;
                                                break;
                                            }
                                        }
                                    } else if (get.population('zhong') + get.population('mingzhong') + get.population('nei') == 0) {
                                        giveup = game.zhu;
                                    }
                                    if (giveup) {
                                        giveup.showGiveup();
                                    }
                                }
                            },
                            logAi(targets, card) {
                                if (this.ai.shown == 1 || this.isMad()) return;
                                var stratagemMode = get.mode() == 'identity' && _status.mode == 'stratagem';
                                if (stratagemMode && (!game.zhu || !game.zhu.isZhu || !game.zhu.identityShown)) return;
                                if (typeof targets == 'number') {
                                    this.ai.shown += targets;
                                } else {
                                    var effect = 0,
                                        c,
                                        shown;
                                    var info = get.info(card);
                                    if (info.ai && info.ai.expose) {
                                        if (_status.event.name == '_wuxie' && card.name == 'wuxie') {
                                            const infomap = _status.event._info_map;
                                            if (infomap) {
                                                if (this != infomap.target && infomap.player && infomap.player.ai.shown) {
                                                    this.ai.shown += 0.2;
                                                }
                                            }
                                        } else {
                                            this.ai.shown += info.ai.expose;
                                        }
                                    }
                                    if (targets.length) {
                                        for (let i = 0; i < targets.length; i++) {
                                            shown = Math.abs(targets[i].ai.shown);
                                            if (shown < 0.2 || targets[i].identity == 'nei') c = 0;
                                            else if (shown < 0.4) c = 0.5;
                                            else if (shown < 0.6) c = 0.8;
                                            else c = 1;
                                            var eff = get.effect(targets[i], card, this);
                                            effect += eff * c;
                                            if (eff == 0 && shown == 0 && ['zhong', 'rZhong', 'bZhong'].includes(this.identity) && targets[i] != this) {
                                                effect += 0.1;
                                            }
                                        }
                                    }
                                    if (effect > 0) {
                                        if (effect < 1) c = 0.5;
                                        else c = 1;
                                        if (targets.length == 1 && targets[0] == this);
                                        else if (targets.length == 1) this.ai.shown += 0.2 * c;
                                        else this.ai.shown += 0.1 * c;
                                    } else if (effect < 0 && this == game.me && ['nei', 'commoner', 'rYe', 'bYe'].includes(game.me.identity)) {
                                        if (targets.length == 1 && targets[0] == this);
                                        else if (targets.length == 1) this.ai.shown -= 0.2;
                                        else this.ai.shown -= 0.1;
                                    }
                                }
                                if (!stratagemMode && this != game.me) this.ai.shown *= 2;
                                if (this.ai.shown > 0.95) this.ai.shown = 0.95;
                                if (this.ai.shown < -0.5) this.ai.shown = -0.5;
                                if (_status.mode == 'purple') return;
                                if (stratagemMode) return;
                                var marknow = !_status.connectMode && this != game.me && get.config('auto_mark_identity') && this.ai.identity_mark != 'finished';
                                // if(true){
                                if (marknow && _status.clickingidentity && _status.clickingidentity[0] == this) {
                                    for (let i = 0; i < _status.clickingidentity[1].length; i++) {
                                        _status.clickingidentity[1][i].delete();
                                        _status.clickingidentity[1][i].style.transform = '';
                                    }
                                    delete _status.clickingidentity;
                                }
                                if (!Array.isArray(targets)) {
                                    targets = [];
                                }
                                var effect = 0,
                                    c,
                                    shown;
                                var zhu = game.zhu;
                                if (_status.mode == 'zhong' && !game.zhu.isZhu) {
                                    zhu = game.zhong;
                                }
                                if (targets.length == 1 && targets[0] == this) {
                                    effect = 0;
                                } else if (this.identity != 'nei' && this.identity != 'commoner') {
                                    if (this.ai.shown > 0) {
                                        if (this.identity == 'fan') {
                                            effect = -1;
                                        } else {
                                            effect = 1;
                                        }
                                    }
                                } else if (targets.length) {
                                    for (let i = 0; i < targets.length; i++) {
                                        shown = Math.abs(targets[i].ai.shown);
                                        if (shown < 0.2 || targets[i].identity == 'nei') c = 0;
                                        else if (shown < 0.4) c = 0.5;
                                        else if (shown < 0.6) c = 0.8;
                                        else c = 1;
                                        effect += get.effect(targets[i], card, this, zhu) * c;
                                    }
                                }
                                if (this.identity == 'nei' || this.identity == 'commoner') {
                                    if (effect > 0) {
                                        if (this.ai.identity_mark == 'fan') {
                                            if (marknow) this.setIdentity();
                                            this.ai.identity_mark = 'finished';
                                        } else {
                                            if (marknow) this.setIdentity('zhong');
                                            this.ai.identity_mark = 'zhong';
                                        }
                                    } else if (effect < 0 && get.population('fan') > 0) {
                                        if (this.ai.identity_mark == 'zhong') {
                                            if (marknow) this.setIdentity();
                                            this.ai.identity_mark = 'finished';
                                        } else {
                                            if (marknow) this.setIdentity('fan');
                                            this.ai.identity_mark = 'fan';
                                        }
                                    }
                                } else if (marknow) {
                                    if (effect > 0 && this.identity != 'fan') {
                                        this.setIdentity('zhong');
                                        this.ai.identity_mark = 'finished';
                                    } else if (effect < 0 && this.identity == 'fan') {
                                        this.setIdentity('fan');
                                        this.ai.identity_mark = 'finished';
                                    }
                                }
                                // }
                            },
                            showIdentity() {
                                this.node.identity.classList.remove('guessing');
                                this.identityShown = true;
                                this.ai.shown = 1;
                                this.setIdentity();
                                if (this.special_identity) {
                                    this.node.identity.firstChild.innerHTML = get.translation(this.special_identity + '_bg');
                                }
                                if (this.identity == 'zhu') {
                                    this.isZhu = true;
                                } else {
                                    delete this.isZhu;
                                }
                                if (_status.clickingidentity) {
                                    for (let i = 0; i < _status.clickingidentity[1].length; i++) {
                                        _status.clickingidentity[1][i].delete();
                                        _status.clickingidentity[1][i].style.transform = '';
                                    }
                                    delete _status.clickingidentity;
                                }
                            },
                        },
                        content: {
                            stratagemInsight(event) {
                                'step 0';
                                game.log(player, '洞察了', target, '与其的阵营关系');
                                ('step 1');
                                var storage = player.storage;
                                if (!storage.zhibi) storage.zhibi = [];
                                var zhibi = storage.zhibi;
                                if (!zhibi.includes(target)) zhibi.push(target);
                                var insightResult = (event.insightResult = get.insightResult(player, target));
                                event.videoId = lib.status.videoId++;
                                var send = (clientTarget, clientInsightResult, id) => {
                                    var classList = clientTarget.classList,
                                        nonStratagemInsightFlashing = classList.contains('flash-animation-iteration-count-infinite');
                                    if (nonStratagemInsightFlashing) clientTarget.nonStratagemInsightFlashing = true;
                                    else classList.add('flash-animation-iteration-count-infinite');
                                    var identity = get.translation(`${clientInsightResult}2`);
                                    clientTarget.prompt(identity, clientInsightResult);
                                    var dialog = ui.create.dialog(`${get.translation(clientTarget)}是${identity}<br>`, 'forcebutton');
                                    ui.create.spinningIdentityCard(clientInsightResult, dialog);
                                    var control = ui.create.control('ok', () => {
                                        dialog.close();
                                        control.close();
                                        _status.imchoosing = false;
                                        _status.event._result = {
                                            bool: true,
                                        };
                                        game.resume();
                                    });
                                    dialog.videoId = id;
                                    game.pause();
                                    game.countChoose();
                                };
                                game.broadcastAll(
                                    (clientPlayer, clientTarget, id) => {
                                        if (clientPlayer != game.me) ui.create.dialog(`${get.translation(clientPlayer)}正在洞察${get.translation(clientTarget)}的阵营...<br>`).videoId = id;
                                    },
                                    player,
                                    target,
                                    event.videoId
                                );
                                if (event.isMine()) send(target, insightResult, event.videoId);
                                else if (event.isOnline()) {
                                    player.send(send, target, insightResult, event.videoId);
                                    player.wait();
                                    game.pause();
                                }
                                ('step 2');
                                game.broadcastAll('closeDialog', event.videoId);
                                if (!_status.connectMode && get.config('auto_mark_identity') && !target.node.identity.firstChild.innerHTML.length)
                                    game.broadcastAll(
                                        (clientPlayer, clientTarget, insightResult) => {
                                            if (clientPlayer.isUnderControl(true)) clientTarget.setIdentity(insightResult);
                                        },
                                        player,
                                        target,
                                        event.insightResult
                                    );
                                var afterInsight = (clientTarget) => {
                                    clientTarget.unprompt();
                                    if (clientTarget.nonStratagemInsightFlashing) {
                                        delete clientTarget.nonStratagemInsightFlashing;
                                        return;
                                    }
                                    var classList = clientTarget.classList;
                                    if (classList.contains('flash-animation-iteration-count-infinite')) classList.remove('flash-animation-iteration-count-infinite');
                                };
                                if (event.isMine()) afterInsight(target);
                                else if (event.isOnline()) player.send(afterInsight, target);
                            },
                            stratagemCamouflage() {
                                'step 0';
                                var camouflaged = (event.targets = game.players.filter((current) => current.identity == 'fan' && !current.ai.stratagemCamouflage).randomGets(Math.max(Math.round(get.population() / 6), 1)));
                                camouflaged.forEach((current) => (current.ai.stratagemCamouflage = true));
                                var me = game.me;
                                if (event.players.includes(me) && me.identity == 'nei') {
                                    event.videoId = lib.status.videoId++;
                                    var rebel = get.translation('fan2'),
                                        dialog = ui.create.dialog(`${get.translation(camouflaged)}是${rebel}<br>`, 'forcebutton');
                                    ui.create.spinningIdentityCard('fan', dialog);
                                    dialog.videoId = event.videoId;
                                    camouflaged.forEach((victim) => {
                                        var classList = victim.classList,
                                            nonCamouflageFlashing = classList.contains('flash-animation-iteration-count-infinite');
                                        if (nonCamouflageFlashing) victim.nonCamouflageFlashing = true;
                                        else classList.add('flash-animation-iteration-count-infinite');
                                        victim.prompt(rebel, 'fan');
                                    });
                                    me.chooseControl('ok').set('dialog', dialog);
                                }
                                game.filterPlayer((current) => {
                                    if (current.identity != 'nei') return;
                                    var storage = current.storage;
                                    if (!storage.zhibi) storage.zhibi = [];
                                    storage.zhibi.addArray(camouflaged);
                                });
                                ('step 1');
                                targets.forEach((current) => {
                                    if (game.me.identity == 'nei' && get.config('nei_auto_mark_camouflage')) current.setIdentity();
                                    current.unprompt();
                                    if (current.nonCamouflageFlashing) {
                                        delete current.nonCamouflageFlashing;
                                        return;
                                    }
                                    var classList = current.classList;
                                    if (classList.contains('flash-animation-iteration-count-infinite')) classList.remove('flash-animation-iteration-count-infinite');
                                });
                            },
                            stratagemCamouflageOL() {
                                'step 0';
                                var send = (clientCamouflaged, id, online) => {
                                    var me = game.me;
                                    if (me.identity == 'nei') {
                                        var storage = me.storage;
                                        if (!storage.zhibi) storage.zhibi = [];
                                        storage.zhibi.addArray(clientCamouflaged);
                                        var rebel = get.translation('fan2'),
                                            dialog = ui.create.dialog(`${get.translation(clientCamouflaged)}是${rebel}<br>`, 'forcebutton');
                                        ui.create.spinningIdentityCard('fan', dialog);
                                        dialog.videoId = id;
                                        clientCamouflaged.forEach((victim) => {
                                            var classList = victim.classList,
                                                nonCamouflageFlashing = classList.contains('flash-animation-iteration-count-infinite');
                                            if (nonCamouflageFlashing) victim.nonCamouflageFlashing = true;
                                            else classList.add('flash-animation-iteration-count-infinite');
                                            victim.prompt(rebel, 'fan');
                                        });
                                        me.chooseControl('ok').set('dialog', dialog);
                                    } else ui.create.dialog('请等待内奸身份确认...').videoId = id;
                                    if (online) game.resume();
                                };
                                var camouflaged = (event.targets = game.players.filter((current) => current.identity == 'fan' && !current.ai.stratagemCamouflage).randomGets(Math.max(Math.round(get.population() / 6), 1)));
                                camouflaged.forEach((current) => (current.ai.stratagemCamouflage = true));
                                event.videoId = lib.status.videoId++;
                                var time = 10000;
                                if (lib.configOL && lib.configOL.choose_timeout) time = parseInt(lib.configOL.choose_timeout) * 1000;
                                var aiTargets = (event.aiTargets = []);
                                event.players.forEach((current) => {
                                    current.showTimer(time);
                                    if (current.isOnline()) {
                                        current.send(send, camouflaged, event.videoId, true);
                                        current.wait();
                                        if (current.identity == 'nei') event.withOL = true;
                                        return;
                                    }
                                    var me = game.me;
                                    if (current == me) {
                                        event.withMe = true;
                                        send(camouflaged, event.videoId);
                                        if (me.identity == 'nei') me.wait();
                                        else
                                            event._result = {
                                                bool: true,
                                            };
                                        return;
                                    }
                                    if (current.identity == 'nei') aiTargets.push(current);
                                });
                                if (!aiTargets.length) return;
                                aiTargets.randomSort();
                                new Promise((resolve) => setTimeout(resolve, Math.ceil(5000 + 5000 * Math.random()))).then(() => {
                                    var interval = setInterval(
                                        () => {
                                            aiTargets.shift();
                                            if (aiTargets.length) return;
                                            clearInterval(interval);
                                            if (event.withAI) game.resume();
                                        },
                                        Math.ceil(500 + 500 * Math.random())
                                    );
                                });
                                ('step 1');
                                if (event.withMe) game.me.unwait(result);
                                ('step 2');
                                if (event.withOL && !event.resultOL) game.pause();
                                ('step 3');
                                if (!event.aiTargets.length) return;
                                event.withAI = true;
                                game.pause();
                                ('step 4');
                                game.broadcastAll('closeDialog', event.videoId);
                                event.players.forEach((current) => current.hideTimer());
                                var afterCamouflage = (clientCamouflaged) =>
                                    clientCamouflaged.forEach((victim) => {
                                        victim.unprompt();
                                        if (victim.nonCamouflageFlashing) {
                                            delete victim.nonCamouflageFlashing;
                                            return;
                                        }
                                        var classList = victim.classList;
                                        if (classList.contains('flash-animation-iteration-count-infinite')) classList.remove('flash-animation-iteration-count-infinite');
                                    });
                                event.players.forEach((current) => {
                                    if (current.isOnline()) {
                                        current.send(afterCamouflage, targets);
                                        return;
                                    }
                                    var me = game.me;
                                    if (current == me && me.identity == 'nei') afterCamouflage(targets);
                                });
                            },
                        },
                    },
                    get: {
                        rawAttitude(from, to) {
                            var x = 0,
                                num = 0,
                                temp,
                                i;
                            if (_status.ai.customAttitude) {
                                for (let i = 0; i < _status.ai.customAttitude.length; i++) {
                                    temp = _status.ai.customAttitude[i](from, to);
                                    if (temp != undefined) {
                                        x += temp;
                                        num++;
                                    }
                                }
                            }
                            if (num > 0) {
                                return x / num;
                            }
                            if (_status.mode == 'purple') {
                                var real = get.realAttitude(from, to);
                                if (from == to || to.identityShown || (from.storage.zhibi && from.storage.zhibi.includes(to)) || (_status.yeconfirm && ['rYe', 'bYe'].includes(to.identity) && ['rYe', 'bYe'].includes(to.identity))) return real * 1.1;
                                return (to.ai.shown + 0.1) * real + (from.identity.slice(0, 1) == to.identity.slice(0, 1) ? 3 : -3) * (1 - to.ai.shown);
                            } else if (_status.mode == 'stratagem') {
                                var x = 0,
                                    num = 0,
                                    temp,
                                    i;
                                if (_status.ai.customAttitude) {
                                    for (let i = 0; i < _status.ai.customAttitude.length; i++) {
                                        temp = _status.ai.customAttitude[i](from, to);
                                        if (temp != undefined) {
                                            x += temp;
                                            num++;
                                        }
                                    }
                                }
                                if (num > 0) {
                                    return x / num;
                                }
                                var real = get.realAttitude(from, to),
                                    zhibi = from.storage.zhibi,
                                    stratagem_expose = from.storage.stratagem_expose,
                                    followCamouflage = true;
                                if (to.ai.shown) return to.ai.shown * (real + (from.identity == to.identity || (from.identity == 'zhu' && to.identity == 'zhong') || (from.identity == 'zhong' && to.identity == 'zhu') || (from.identity == 'nei' && to.identity == 'zhu' && get.situation() <= 1) || (to.identity == 'nei' && get.situation() <= 0 && ['zhu', 'zhong'].includes(from.identity)) || (get.situation() >= 3 && from.identity == 'fan') ? 2.9 : -2.9));
                                if (from == to || to.identityShown || (((stratagem_expose && stratagem_expose.includes(to)) || (zhibi && zhibi.includes(to))) && !to.ai.stratagemCamouflage)) return real * 1.1;
                                if (from.identity == 'nei' && to.ai.stratagemCamouflage) return real * 1.1;
                                if (to.identity == 'nei') {
                                    if (from.identity == 'fan') {
                                        if (get.population('zhong') == 0) {
                                            if (zhibi) {
                                                var dead = game.dead.slice();
                                                for (var current of dead) {
                                                    if (from.storage.zhibi.includes(current) && current.ai.stratagemCamouflage) {
                                                        if (from.storage.stratagem_expose && from.storage.stratagem_expose.includes(to)) return -7;
                                                    }
                                                }
                                                if (zhibi.includes(to)) return 3;
                                            }
                                        }
                                    }
                                }
                                if (
                                    to.identity == 'fan' &&
                                    from.identity == 'nei' &&
                                    zhibi.includes(game.zhu) &&
                                    game.players
                                        .filter((i) => i != from && !zhibi.includes(i))
                                        .map((i) => i.identity)
                                        .reduce((p, c) => (!p.includes(c) ? p.push(c) && p : p), []).length == 1
                                )
                                    return real;
                                for (var fan of game.dead) {
                                    if (fan.identity != 'fan' || !fan.storage.stratagem_revitalization) continue;
                                    for (var current of fan.storage.stratagem_expose) {
                                        if (to == current) {
                                            return real;
                                        }
                                    }
                                }
                                if (from.identity == 'fan' && to.identity == 'fan') {
                                    if (from.ai.stratagemCamouflage) {
                                        var zhu = game.zhu && game.zhu.isZhu && game.zhu.identityShown ? game.zhu : undefined;
                                        if (zhu) {
                                            if (zhu.storage.stratagem_expose && zhu.storage.stratagem_expose.includes(to)) return 0;
                                        }
                                        if (zhibi && zhibi.includes(to)) return -7;
                                    }
                                    if (to.ai.stratagemCamouflage) {
                                        var zhu = game.zhu && game.zhu.isZhu && game.zhu.identityShown ? game.zhu : undefined;
                                        if (zhu) {
                                            if (zhu.storage.stratagem_expose && zhu.storage.stratagem_expose.includes(to)) return 0;
                                        }
                                        if (zhibi && zhibi.includes(to)) return -7;
                                    }
                                }
                                if (from.identity != 'nei' && zhibi && zhibi.includes(to) && !to.identityShown && followCamouflage && to.ai.stratagemCamouflage) return -5;
                                if (from.identity != 'nei' && stratagem_expose && stratagem_expose.includes(to) && !to.identityShown) return -5;
                                if (zhibi) {
                                    for (var to2 of zhibi) {
                                        if (to2.storage.stratagem_expose) {
                                            if (to2.ai.stratagemCamouflage) {
                                                for (var to3 of to2.storage.stratagem_expose) {
                                                    if (zhibi.slice().addArray(stratagem_expose).includes(to3)) {
                                                        if (to == to2) {
                                                            return real;
                                                        }
                                                    } else if (to == to3) {
                                                        return Math.abs(real + 10) / 10;
                                                    }
                                                }
                                            } else {
                                                for (var to3 of to2.storage.stratagem_expose) {
                                                    if (!zhibi.slice().addArray(stratagem_expose).includes(to3) && to == to3) {
                                                        return get.rawAttitude(to3, to) * Math.sign(real);
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                return Math.max(-1, Math.min(-0.1, (-Math.min(5, to.countCards('hes') / 2 + 1) / 5 - Math.max(0, 5 - to.hp) / 4) / 2));
                            }
                            //正常身份模式态度
                            var difficulty = 0;
                            if (to == game.me) difficulty = 2 - get.difficulty();
                            if (from == to || to.identityShown || from.storage.dongcha == to || to.identityShown || (from.storage.zhibi && from.storage.zhibi.includes(to))) {
                                return get.realAttitude(from, to) + difficulty * 1.5;
                            } else {
                                if (from.identity == 'zhong' && to.ai.shown == 0 && from.ai.tempIgnore && !from.ai.tempIgnore.includes(to)) {
                                    for (const i of game.players) {
                                        if (i.ai.shown == 0 && i.identity == 'fan') {
                                            return -0.1 + difficulty * 1.5;
                                        }
                                    }
                                }
                                var aishown = to.ai.shown;
                                if ((to.identity == 'nei' || to.identity == 'commoner') && to.ai.shown < 1 && (to.ai.identity_mark == 'fan' || to.ai.identity_mark == 'zhong')) {
                                    aishown = 0.5;
                                } else if (aishown == 0 && to.identity != 'fan' && to.identity != 'zhu') {
                                    var fanshown = true;
                                    for (const i of game.players) {
                                        if (i.identity == 'fan' && i.ai.shown == 0 && i != from) {
                                            fanshown = false;
                                            break;
                                        }
                                    }
                                    if (fanshown) aishown = 0.3;
                                }
                                return get.realAttitude(from, to) * aishown + difficulty * 1.5;
                            }
                        },
                        realAttitude(from, to) {
                            if (_status.mode == 'purple') {
                                if (['rZhu', 'rZhong', 'bNei'].includes(from.identity)) {
                                    if (to.identity == 'rZhu') return 8;
                                    if (['rZhong', 'bNei'].includes(to.identity)) return 7;
                                    return -7;
                                } else if (['bZhu', 'bZhong', 'rNei'].includes(from.identity)) {
                                    if (to.identity == 'bZhu') return 8;
                                    if (['bZhong', 'rNei'].includes(to.identity)) return 7;
                                    return -7;
                                } else {
                                    if (['rYe', 'bYe'].includes(to.identity)) return 7;
                                    if (
                                        ['rZhu', 'bZhu'].includes(to.identity) &&
                                        game.hasPlayer(function (current) {
                                            return ['rZhong', 'bZhong', 'rNei', 'bNei'].includes(current.identity);
                                        })
                                    )
                                        return 6.5;
                                    return -7;
                                }
                            } else if (_status.mode == 'stratagem') {
                                if (!game.zhu) {
                                    if (from.identity == 'nei' || to.identity == 'nei') return -1;
                                    if (from.identity == to.identity) return 6;
                                    return -6;
                                }
                                var situation = get.situation();
                                var identity = from.identity;
                                var identity2 = to.identity;
                                if (identity2 == 'zhu' && !to.isZhu) {
                                    identity2 = 'zhong';
                                    if (from == to) return 10;
                                }
                                if (from != to && to.identity == 'nei' && to.ai.shown < 1 && (to.ai.identity_mark == 'fan' || to.ai.identity_mark == 'zhong')) {
                                    identity2 = to.ai.identity_mark;
                                }
                                if (from.identity != 'nei' && from != to && get.population('fan') == 0 && identity2 == 'zhong') {
                                    for (const i of game.players) {
                                        if (i.identity == 'nei' && i.ai.identity_mark == 'zhong' && i.ai.shown < 1) {
                                            identity2 = 'nei';
                                            break;
                                        }
                                    }
                                }
                                switch (identity) {
                                    case 'zhu':
                                        switch (identity2) {
                                            case 'zhu':
                                                return 10;
                                            case 'zhong':
                                                return 6;
                                            case 'nei':
                                                if (game.players.length == 2) return -10;
                                                if (to.identity == 'zhong') return 0;
                                                if (get.population('fan') == 0) {
                                                    if (to.ai.identity_mark == 'zhong' && to.ai.shown < 1) return 0;
                                                    return -1;
                                                }
                                                if (get.population('fan') == 1 && get.population('nei') == 1 && game.players.length == 3) {
                                                    var fan;
                                                    for (const i of game.players) {
                                                        if (i.identity == 'fan') {
                                                            fan = i;
                                                            break;
                                                        }
                                                    }
                                                    if (fan) {
                                                        if (to.hp > 1 && to.hp > fan.hp && to.countCards('he') > fan.countCards('he')) {
                                                            return -3;
                                                        }
                                                    }
                                                    return 0;
                                                }
                                                if (situation > 1) return Math.max((situation - 8) / 3, -2);
                                                return Math.min(3, get.population('fan'));
                                            case 'fan':
                                                if (get.population('fan') == 1 && get.population('nei') == 1 && game.players.length == 3) {
                                                    var nei;
                                                    for (const i of game.players) {
                                                        if (i.identity == 'nei') {
                                                            nei = i;
                                                            break;
                                                        }
                                                    }
                                                    if (nei) {
                                                        if (nei.hp > 1 && nei.hp > to.hp && nei.countCards('he') > to.countCards('he')) {
                                                            return 0;
                                                        }
                                                    }
                                                    return -3;
                                                }
                                                return -4;
                                        }
                                        break;
                                    case 'zhong':
                                        switch (identity2) {
                                            case 'zhu':
                                                return 10;
                                            case 'zhong':
                                                if (from == to) return 5;
                                                if (get.population('zhong') > 1) return 3;
                                                return 4;
                                            case 'nei':
                                                if (get.population('fan') == 0 && get.population('zhong') == 1) return -2;
                                                if (get.population('zhong') >= 1) return Math.min(3, -situation);
                                                return 3;
                                            case 'fan':
                                                return -8;
                                        }
                                        break;
                                    case 'nei':
                                        if (identity2 == 'zhu' && game.players.length == 2) return -10;
                                        if (from != to && identity2 != 'zhu' && game.players.length == 3) return -8;
                                        var strategy = get.aiStrategy();
                                        if (strategy == 4) {
                                            if (from == to) return 10;
                                            return 0;
                                        }
                                        var num;
                                        switch (identity2) {
                                            case 'zhu':
                                                if (strategy == 6) return -1;
                                                if (strategy == 5) return 10;
                                                if (to.hp <= 0) return 10;
                                                if (get.population('fan') == 1) {
                                                    var fan;
                                                    for (const i of game.players) {
                                                        if (i.identity == 'fan') {
                                                            fan = i;
                                                            break;
                                                        }
                                                    }
                                                    if (fan) {
                                                        if (to.hp > 1 && to.hp > fan.hp && to.countCards('he') > fan.countCards('he')) {
                                                            return -3;
                                                        }
                                                    }
                                                    return 0;
                                                } else {
                                                    if (situation > 1 || get.population('fan') == 0) num = 0;
                                                    else num = get.population('fan') + Math.max(0, 3 - game.zhu.hp);
                                                }
                                                if (strategy == 2) num--;
                                                if (strategy == 3) num++;
                                                return num;
                                            case 'zhong':
                                                if (strategy == 5) return Math.min(0, -situation);
                                                if (strategy == 6) return Math.max(-1, -situation);
                                                if (get.population('fan') == 0) num = -5;
                                                else if (situation <= 0) num = 0;
                                                else if (game.zhu && game.zhu.hp < 2) num = 0;
                                                else if (game.zhu && game.zhu.hp == 2) num = -1;
                                                else if (game.zhu && game.zhu.hp <= 2 && situation > 1) num = -1;
                                                else num = -2;
                                                if (strategy == 2) num--;
                                                if (strategy == 3) num++;
                                                return num;
                                            case 'nei':
                                                if (from == to) return 10;
                                                if (from.ai.friend.includes(to)) return 5;
                                                if (get.population('fan') + get.population('zhong') > 0) return 0;
                                                return -5;
                                            case 'fan':
                                                if (strategy == 5) return Math.max(-1, situation);
                                                if (strategy == 6) return Math.min(0, situation);
                                                if ((game.zhu && game.zhu.hp <= 2 && situation < 0) || situation < -1) num = -3;
                                                else if (situation < 0 || get.population('zhong') == 0) num = -2;
                                                else if ((game.zhu && game.zhu.hp >= 4 && situation > 0) || situation > 1) num = 1;
                                                else num = 0;
                                                if (strategy == 2) num++;
                                                if (strategy == 3) num--;
                                                return num;
                                        }
                                        break;
                                    case 'fan':
                                        switch (identity2) {
                                            case 'zhu':
                                                if (get.population('nei') > 0) {
                                                    if (situation == 1) return -6;
                                                    if (situation > 1) return -5;
                                                }
                                                return -8;
                                            case 'zhong':
                                                if (game.zhu.hp >= 3 && to.hp == 1) {
                                                    return -10;
                                                }
                                                return -7;
                                            case 'nei':
                                                if (get.population('fan') == 1) return 0;
                                                if (get.population('zhong') == 0) return -2;
                                                if (game.zhu && game.zhu.hp <= 2 && game.zhu.identityShown) return -1;
                                                return 3;
                                            case 'fan':
                                                return 5;
                                        }
                                }
                            }
                            //正常身份模式态度
                            if (!game.zhu) {
                                if (from.identity == 'nei' || to.identity == 'nei' || from.identity == 'commoner' || to.identity == 'commoner') return -1;
                                if (from.identity == to.identity) return 6;
                                return -6;
                            }
                            var situation = get.situation();
                            var identity = from.identity;
                            var identity2 = to.identity;
                            if (identity2 == 'zhu' && !to.isZhu) {
                                identity2 = 'zhong';
                                if (from == to) return 10;
                            }
                            if (from != to && to.identity == 'nei' && to.ai.shown < 1 && (to.ai.identity_mark == 'fan' || to.ai.identity_mark == 'zhong')) {
                                identity2 = to.ai.identity_mark;
                            }
                            if (from.identity != 'nei' && from.identity != 'commoner' && from != to && get.population('fan') == 0 && identity2 == 'zhong') {
                                for (const i of game.players) {
                                    if (i.identity == 'nei' && i.ai.identity_mark == 'zhong' && i.ai.shown < 1) {
                                        identity2 = 'nei';
                                        break;
                                    } else if (i.identity == 'commoner' && i.ai.identity_mark == 'zhong' && i.ai.shown < 1) {
                                        identity2 = 'commoner';
                                        break;
                                    }
                                }
                            }
                            var zhongmode = false;
                            if (!game.zhu.isZhu) {
                                zhongmode = true;
                            }
                            switch (identity) {
                                case 'zhu':
                                    switch (identity2) {
                                        case 'zhu':
                                            return 10;
                                        case 'zhong':
                                        case 'mingzhong':
                                            return 6;
                                        case 'nei':
                                            if (game.players.length == 2) return -10;
                                            if (to.identity == 'zhong') return 0;
                                            if (get.population('fan') == 0) {
                                                if (to.ai.identity_mark == 'zhong' && to.ai.shown < 1) return 0;
                                                return -0.5;
                                            }
                                            if (zhongmode && to.ai.sizhong && to.ai.shown < 1) return 6;
                                            if (get.population('fan') == 1 && get.population('nei') == 1 && game.players.length == 3) {
                                                var fan;
                                                for (const i of game.players) {
                                                    if (i.identity == 'fan') {
                                                        fan = i;
                                                        break;
                                                    }
                                                }
                                                if (fan) {
                                                    if (to.hp > 1 && to.hp > fan.hp && to.countCards('he') > fan.countCards('he')) {
                                                        return -3;
                                                    }
                                                }
                                                return 0;
                                            }
                                            if (situation > 1) return 0;
                                            return Math.min(3, get.population('fan'));
                                        case 'fan':
                                            if (get.population('fan') == 1 && get.population('nei') == 1 && game.players.length == 3) {
                                                var nei;
                                                for (const i of game.players) {
                                                    if (i.identity == 'nei') {
                                                        nei = i;
                                                        break;
                                                    }
                                                }
                                                if (nei) {
                                                    if (nei.hp > 1 && nei.hp > to.hp && nei.countCards('he') > to.countCards('he')) {
                                                        return 0;
                                                    }
                                                }
                                                return -3;
                                            }
                                            return -4;
                                        case 'commoner':
                                            if (to.identity == 'zhong') return 0;
                                            if (get.population('fan') == 0) {
                                                if (to.ai.identity_mark == 'zhong' && to.ai.shown < 1) return 0;
                                                return -0.5;
                                            }
                                            if (zhongmode && to.ai.sizhong && to.ai.shown < 1) return 6;
                                            if (game.players.length == 3) {
                                                var fan;
                                                for (const i of game.players) {
                                                    if (i.identity == 'fan') {
                                                        fan = i;
                                                        break;
                                                    }
                                                }
                                                if (fan) {
                                                    if (to.hp > 1 && to.hp > fan.hp && to.countCards('he') > fan.countCards('he')) {
                                                        return -3;
                                                    }
                                                }
                                                return 3;
                                            }
                                            if (situation < 0 && game.zhu && game.zhu.hp <= 2) return -3.8;
                                            return Math.max(-4, 2 - get.population('fan'));
                                    }
                                    break;
                                case 'zhong':
                                case 'mingzhong':
                                    switch (identity2) {
                                        case 'zhu':
                                            return 10;
                                        case 'zhong':
                                        case 'mingzhong':
                                            return 4;
                                        case 'nei':
                                            if (get.population('fan') == 0) return -2;
                                            if (zhongmode && to.ai.sizhong && to.ai.shown < 1) return 6;
                                            return Math.min(3, -situation);
                                        case 'fan':
                                            return -8;
                                        case 'commoner':
                                            return Math.min(3, Math.max(-3, situation - 0.2));
                                    }
                                    break;
                                case 'nei':
                                    if (identity2 == 'zhu' && game.players.length == 2) return -10;
                                    if (from != to && identity2 != 'zhu' && identity2 != 'commoner' && game.players.length == 3) return -8;
                                    var strategy = get.aiStrategy();
                                    if (strategy == 4) {
                                        if (from == to) return 10;
                                        return 0;
                                    }
                                    var num;
                                    switch (identity2) {
                                        case 'zhu':
                                            if (strategy == 6) return -1;
                                            if (strategy == 5) return 10;
                                            if (to.hp <= 0) return 10;
                                            if (get.population('fan') == 1) {
                                                var fan;
                                                for (const i of game.players) {
                                                    if (i.identity == 'fan') {
                                                        fan = i;
                                                        break;
                                                    }
                                                }
                                                if (fan) {
                                                    if (to.hp > 1 && to.hp > fan.hp && to.countCards('he') > fan.countCards('he')) {
                                                        return -1.7;
                                                    }
                                                }
                                                return 0;
                                            } else {
                                                if (situation > 1 || get.population('fan') == 0) num = 0;
                                                else num = get.population('fan') + Math.max(0, 3 - game.zhu.hp);
                                            }
                                            if (strategy == 2) num--;
                                            if (strategy == 3) num++;
                                            return num;
                                        case 'zhong':
                                            if (strategy == 5) return Math.min(0, -situation);
                                            if (strategy == 6) return Math.max(-1, -situation);
                                            if (get.population('fan') == 0) num = -5;
                                            else if (situation <= 0) num = 0;
                                            else if (game.zhu && game.zhu.hp < 2) num = 0;
                                            else if (game.zhu && game.zhu.hp == 2) num = -1;
                                            else if (game.zhu && game.zhu.hp <= 2 && situation > 1) num = -1;
                                            else num = -2;
                                            if (zhongmode && situation < 2) {
                                                num = 4;
                                            }
                                            if (strategy == 2) num--;
                                            if (strategy == 3) num++;
                                            return num;
                                        case 'mingzhong':
                                            if (zhongmode) {
                                                if (from.ai.sizhong == undefined) {
                                                    from.ai.sizhong = Math.random() < 0.5;
                                                }
                                                if (from.ai.sizhong) return 6;
                                            }
                                            if (strategy == 5) return Math.min(0, -situation);
                                            if (strategy == 6) return Math.max(-1, -situation);
                                            if (get.population('fan') == 0) num = -5;
                                            else if (situation <= 0) num = 0;
                                            else num = -3;
                                            if (strategy == 2) num--;
                                            if (strategy == 3) num++;
                                            return num;
                                        case 'nei':
                                            if (from == to) return 10;
                                            if (from.ai.friend.includes(to)) return 5;
                                            if (get.population('fan') + get.population('zhong') > 0) return 0;
                                            return -5;
                                        case 'fan':
                                            if (strategy == 5) return Math.max(-1, situation);
                                            if (strategy == 6) return Math.min(0, situation);
                                            if ((game.zhu && game.zhu.hp <= 2 && situation < 0) || situation < -1) num = -3;
                                            else if (situation < 0 || get.population('zhong') + get.population('mingzhong') == 0) num = -2;
                                            else if ((game.zhu && game.zhu.hp >= 4 && situation > 0) || situation > 1) num = 1;
                                            else num = 0;
                                            if (strategy == 2) num++;
                                            if (strategy == 3) num--;
                                            return num;
                                        case 'commoner':
                                            if (game.players.length <= 4) return 5;
                                            return Math.min(Math.max(-situation, -2), 2);
                                    }
                                    break;
                                case 'fan':
                                    switch (identity2) {
                                        case 'zhu':
                                            if (get.population('nei') > 0) {
                                                if (situation == 1) return -6;
                                                if (situation > 1) return -5;
                                            }
                                            return -8;
                                        case 'zhong':
                                            if (!zhongmode && game.zhu.hp >= 3 && to.hp == 1) {
                                                return -10;
                                            }
                                            return -7;
                                        case 'mingzhong':
                                            return -5;
                                        case 'nei':
                                            if (zhongmode && to.ai.sizhong) return -7;
                                            if (get.population('fan') == 1) return 0;
                                            if (get.population('zhong') + get.population('mingzhong') == 0) return -7;
                                            if (game.zhu && game.zhu.hp <= 2) return -1;
                                            return Math.min(3, situation);
                                        case 'fan':
                                            return 5;
                                        case 'commoner':
                                            return 2 * get.population('fan') - 3;
                                    }
                                    break;
                                case 'commoner':
                                    switch (identity2) {
                                        case 'zhu':
                                            if (situation > 0) return 2 * Math.min(4, to.hp + to.countCards('h') / 4 - 2);
                                            if (situation >= -3 && game.zhu) return to.hp - 2 + to.countCards('h') / 4; //return Math.min(-0.1,5-game.zhu.hp);
                                            return to.hp + to.countCards('h') / 3 - 4;
                                        case 'zhong':
                                            if (situation > 0) {
                                                if (to.hp >= 2) return Math.min(3, Math.max(1, to.hp + to.countCards('h') / 4 - 4));
                                                return 0;
                                            }
                                            return -2;
                                        case 'nei':
                                            if (game.players.length == 3 && get.population('nei') == 1) return Math.min(3.5, to.hp - 1.5 + to.countCards('h') / 3) - (to.hp < (game.zhu ? game.zhu.hp : 0) ? 4 : 0);
                                            if (game.players.length <= 4 && get.population('nei') == 1) return Math.min(5, to.hp - 1.5 + to.countCards('h') / 3);
                                            if (situation > 0) return -3;
                                            return 0;
                                        case 'fan':
                                            if (situation < 0) return to.hp + to.countCards('h') / 4 - 1.7 * get.population('fan') + 2;
                                            else if (situation == 0) return 0;
                                            return 0.55 * get.population('fan') - 2.1;
                                        case 'commoner':
                                            return from == to ? 10 : to.hp <= 2 ? -2 : 0;
                                    }
                                    break;
                            }
                        },
                        situation(absolute) {
                            var i, j, player;
                            var zhuzhong = 0,
                                total = 0,
                                zhu,
                                fan = 0;
                            for (const i of game.players) {
                                player = i;
                                var php = player.hp;
                                if (player.hasSkill('benghuai') && php > 4) {
                                    php = 4;
                                } else if (php > 6) {
                                    php = 6;
                                }
                                j = player.countCards('h') + player.countCards('e') * 1.5 + php * 2;
                                if (player.identity == 'zhu') {
                                    zhuzhong += j * 1.2 + 5;
                                    total += j * 1.2 + 5;
                                    zhu = j;
                                } else if (player.identity == 'zhong' || player.identity == 'mingzhong') {
                                    zhuzhong += j * 0.8 + 3;
                                    total += j * 0.8 + 3;
                                } else if (player.identity == 'fan') {
                                    zhuzhong -= j + 4;
                                    total += j + 4;
                                    fan += j + 4;
                                }
                            }
                            if (absolute) return zhuzhong;
                            var result = parseInt(10 * Math.abs(zhuzhong / total));
                            if (zhuzhong < 0) result = -result;
                            if (!game.zhong) {
                                if (zhu < 12 && fan > 30) result--;
                                if (zhu < 6 && fan > 15) result--;
                                if (zhu < 4) result--;
                            }
                            return result;
                        },
                        insightResult(from, to) {
                            var friend = 'friend',
                                enemy = 'enemy';
                            if (from.identity == 'nei') return to.identity;
                            if (to.identity == 'nei') return friend;
                            if (from.ai.stratagemCamouflage || to.ai.stratagemCamouflage) return enemy;
                            if (from.identity == to.identity || (from.identity == 'zhu' && to.identity == 'zhong') || (from.identity == 'zhong' && to.identity == 'zhu')) return friend;
                            return enemy;
                        },
                    },
                    skill: {
                        stratagem_gain: {
                            silent: true,
                            charlotte: true,
                            ruleSkill: true,
                            trigger: {
                                player: ['phaseBegin', 'damageEnd'],
                            },
                            content() {
                                player.changeFury(trigger.name == 'damage' ? trigger.num : 1, true);
                            },
                        },
                        stratagem_insight: {
                            trigger: {
                                source: 'damageSource',
                                global: 'loseHpEnd',
                            },
                            filter(event, player) {
                                if (!player.storage.stratagem_fury) return false;
                                const target = event.player;
                                if (target == player || !target.isIn() || target.identityShown) return false;
                                let source = event.source;
                                if (event.name == 'loseHp') {
                                    const trigger = event.parent._trigger;
                                    if (trigger) source = trigger.source;
                                }
                                return player == source;
                            },
                            logTarget: 'player',
                            prompt2: (event) => `消耗1点怒气,洞察${get.translation(event.player)}的身份`,
                            check(event, player) {
                                const storage = player.storage,
                                    zhibi = storage.zhibi;
                                if (zhibi && zhibi.includes(event.player)) return false;
                                const stratagemExpose = storage.stratagem_expose;
                                if (stratagemExpose && stratagemExpose.includes(event.player)) return false;
                                if (get.population('zhong') == 0 && player.identity == 'fan') return false;
                                return Math.abs(get.attitude(player, event.player)) <= 1;
                            },
                            content() {
                                player.changeFury(-1, true);
                                player.insightInto(trigger.player);
                            },
                        },
                        stratagem_monarchy: {
                            trigger: {
                                player: ['dying', 'phaseZhunbeiBegin'],
                                global: 'dieAfter',
                            },
                            forced: true,
                            _priority: 100,
                            popup: false,
                            firstDo: true,
                            silent: true,
                            charlotte: true,
                            ruleSkill: true,
                            filter(event, player, name) {
                                if (player.storage.stratagem_monarchy || player.identity != 'zhu') return false;
                                if (name == 'dieAfter') return game.dead.length >= Math.max(Math.round(get.population() / 3), 2);
                                return name == 'dying' || game.roundNumber >= Math.max(Math.round(get.population() / 2), 3);
                            },
                            content() {
                                'step 0';
                                ('step 1');
                                player.storage.stratagem_monarchy = true;
                                game.broadcastAll((clientPlayer) => {
                                    if (!game.zhu) game.zhu = clientPlayer;
                                    clientPlayer.identityShown = true;
                                    clientPlayer.ai.shown = 1;
                                    clientPlayer.setIdentity();
                                    clientPlayer.isZhu = true;
                                    clientPlayer.node.identity.classList.remove('guessing');
                                    var config = lib.config;
                                    if (config.animation && !config.low_performance) clientPlayer.$legend();
                                    var clickingIdentity = _status.clickingidentity;
                                    if (!clickingIdentity || clickingIdentity[0] != clientPlayer) return;
                                    clickingIdentity[1].forEach((element) => {
                                        element.delete();
                                        element.style.transform = '';
                                    });
                                    delete _status.clickingidentity;
                                }, player);
                                game.addVideo('showIdentity', player, 'zhu');
                                player.playerfocus(1000);
                                event.trigger('zhuUpdate');
                                ('step 2');
                                player.recover();
                                player.draw();
                                ('step 3');
                                const skills = player.getStockSkills(true, true).filter((stockSkill) => {
                                    if (player.hasSkill(stockSkill)) return;
                                    var info = get.info(stockSkill);
                                    if (!info || !info.zhuSkill) return;
                                    return true;
                                });
                                if (skills.length) player.addSkills(skills);
                            },
                        },
                        stratagem_revitalization: {
                            trigger: {
                                player: 'dying',
                            },
                            forced: true,
                            silent: true,
                            charlotte: true,
                            ruleSkill: true,
                            filter(event, player) {
                                const storage = player.storage;
                                return !storage.stratagem_revitalization && player.ai.stratagemCamouflage && game.dead.length < Math.max(Math.round(get.population() / 6), 1) && storage.stratagem_fury >= 2;
                            },
                            content() {
                                'step 0';
                                ('step 1');
                                player.storage.stratagem_revitalization = true;
                                game.broadcastAll((clientPlayer) => {
                                    clientPlayer.identityShown = true;
                                    clientPlayer.ai.shown = 1;
                                    clientPlayer.setIdentity();
                                    clientPlayer.node.identity.classList.remove('guessing');
                                    if (lib.config.animation && !lib.config.low_performance) clientPlayer.$thunder();
                                }, player);
                                game.addVideo('showIdentity', player, 'fan');
                                player.playerfocus(800);
                                ('step 2');
                                player.changeFury(-player.storage.stratagem_fury, true);
                                player.discard(player.getCards('hej'));
                                player.link(false);
                                player.turnOver(false);
                                player.recover(2 - player.hp);
                                player.draw(3);
                            },
                        },
                        stratagem_expose: {
                            trigger: { player: 'useCard' },
                            forced: true,
                            silent: true,
                            popup: false,
                            filter(event, player) {
                                const targets = event.targets;
                                if (targets.length != 1) return false;
                                const target = targets[0];
                                return (
                                    target == player &&
                                    (target.identityShown ||
                                        player.storage.zhibi.includes(target) ||
                                        game.hasPlayer2((current) => {
                                            if (!current.identityShown) return false;
                                            const storage = current.storage;
                                            return (storage.stratagem_revitalization || storage.stratagem_monarchy) && storage.stratagem_expose.includes(target);
                                        }))
                                );
                            },
                            content() {
                                var storage = trigger.targets[0].storage;
                                if (!storage.stratagem_expose) storage.stratagem_expose = [];
                                storage.stratagem_expose.add(player);
                            },
                        },
                        yexinbilu: {
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.identity == 'rYe' || player.identity == 'bYe';
                            },
                            content() {
                                game.removeGlobalSkill('yexinbilu');
                                player.yexinbilu();
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player(player) {
                                        return (
                                            1 -
                                            game.countPlayer(function (current) {
                                                return current != player && (current.identity == 'rYe' || current.identity == 'bYe') && (current == game.me || current.isOnline());
                                            })
                                        );
                                    },
                                },
                            },
                        },
                        identity_junshi: {
                            name: '军师',
                            mark: true,
                            intro: {
                                content: '准备阶段开始时,可以观看牌堆顶的三张牌,将这些牌以任意顺序置于牌堆顶或牌堆底',
                            },
                            trigger: { player: 'phaseZhunbeiBegin' },
                            silent: true,
                            content() {
                                'step 0';
                                var cards = get.cards(3);
                                game.cardsGotoOrdering(cards);
                                var next = player.chooseToMove();
                                next.set('list', [['牌堆顶', cards], ['牌堆底']]);
                                next.set('prompt', '观星:点击将牌移动到牌堆顶或牌堆底');
                                next.processAI = function (list) {
                                    var cards = list[0][1],
                                        player = _status.event.player;
                                    const top = [], bottom = cards;
                                    for (const i of player.getCards('j')) {
                                        const judge = get.judge(i);
                                        bottom.sort((a, b) => (judge(b) - judge(a))); //价值高的牌放前面
                                        if (bottom.length) {
                                            top.push(bottom.shift());
                                        }
                                    }
                                    bottom.sort((a, b) => (get.value(b) - get.value(a))); //把价值高的牌放前面
                                    while (bottom.length) {
                                        top.push(bottom.shift());
                                    }
                                    return [top, bottom];
                                };
                                ('step 1');
                                var top = result.moved[0];
                                var bottom = result.moved[1];
                                top.reverse();
                                for (let i = 0; i < top.length; i++) {
                                    ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
                                }
                                for (let i = 0; i < bottom.length; i++) {
                                    ui.cardPile.appendChild(bottom[i]);
                                }
                                player.popup(get.cnNumber(top.length) + '上' + get.cnNumber(bottom.length) + '下');
                                game.log(player, '将' + get.cnNumber(top.length) + '张牌置于牌堆顶');
                                game.updateRoundNumber();
                            },
                        },
                        identity_dajiang: {
                            name: '大将',
                            mark: true,
                            intro: {
                                content: '手牌上限+1',
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return num + 1;
                                },
                            },
                        },
                        identity_zeishou: {
                            name: '贼首',
                            mark: true,
                            intro: {
                                content: '手牌上限-1',
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return num - 1;
                                },
                            },
                        },
                        dongcha: {
                            trigger: { player: 'phaseBegin' },
                            forced: true,
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current.countCards('ej');
                                });
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('dongcha'), function (card, player, target) {
                                        return target.countCards('ej') > 0;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        var att = get.attitude(player, target);
                                        if (att > 0) {
                                            var js = target.getCards('j');
                                            if (js.length) {
                                                var jj = js[0].viewAs ? { name: js[0].viewAs } : js[0];
                                                if (jj.name == 'guohe' || js.length > 1 || get.effect(target, jj, target, player) < 0) {
                                                    return 2 * att;
                                                }
                                            }
                                            if (target.getEquip('baiyin') && target.isDamaged() && get.recoverEffect(target, player, player) > 0) {
                                                if (target.hp == 1 && !target.hujia) return 1.6 * att;
                                                if (target.hp == 2) return 0.01 * att;
                                                return 0;
                                            }
                                        }
                                        var es = target.getCards('e');
                                        var noe = target.hasSkillTag('noe');
                                        var noe2 = es.length == 1 && es[0].name == 'baiyin' && target.isDamaged();
                                        if (noe || noe2) return 0;
                                        if (att <= 0 && !es.length) return 1.5 * att;
                                        return -1.5 * att;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    event.target.addExpose(0.1);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (event.target) {
                                    player.discardPlayerCard('ej', true, event.target);
                                }
                            },
                            group: ['dongcha_begin', 'dongcha_log'],
                            subSkill: {
                                begin: {
                                    trigger: { global: 'gameStart' },
                                    forced: true,
                                    popup: false,
                                    content() {
                                        var list = [];
                                        for (const i of game.players) {
                                            if (i.identity == 'fan') {
                                                list.push(i);
                                            }
                                        }
                                        var target = list.randomGet();
                                        player.storage.dongcha = target;
                                        if (!_status.connectMode) {
                                            if (player == game.me) {
                                                target.setIdentity('fan');
                                                target.node.identity.classList.remove('guessing');
                                                target.fanfixed = true;
                                                player.line(target, 'green');
                                                player.popup('dongcha');
                                            }
                                        } else {
                                            player.chooseControl('ok').set('dialog', [get.translation(target) + '是反贼', [[target.name], 'character']]);
                                        }
                                    },
                                },
                                log: {
                                    trigger: { player: 'useCard' },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return event.targets.length == 1 && event.targets[0] == player.storage.dongcha && event.targets[0].ai.shown < 0.95;
                                    },
                                    content() {
                                        trigger.targets[0].addExpose(0.2);
                                    },
                                },
                            },
                        },
                        sheshen: {
                            trigger: { global: 'dieBefore' },
                            forced: true,
                            filter(event, player) {
                                return event.player == game.zhu && player.hp > 0;
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                trigger.player.addMaxHp();
                                ('step 1');
                                var dh = player.hp - trigger.player.hp;
                                if (dh > 0) {
                                    trigger.player.recover(dh);
                                }
                                ('step 2');
                                var cards = player.getCards('he');
                                if (cards.length) {
                                    trigger.player.gain(cards, player);
                                    player.$giveAuto(cards, trigger.player);
                                }
                                ('step 3');
                                trigger.cancel();
                                player.die();
                            },
                        },
                    },
                    help: {
                        身份模式: '<div style="margin:10px">选项</div><ul style="margin-top:0"><li>加强主公<br>反贼人数多于2时主公会额外增加一个技能(每个主公的额外技能固定,非常备主公增加天命)<li>特殊身份<br><ul style="padding-left:20px;padding-top:5px"><li>军师:忠臣身份.只要军师存活,主公在准备阶段开始时,可以观看牌堆顶的三张牌,将这些牌以任意顺序置于牌堆顶或牌堆底<li>大将:忠臣身份.只要大将存活,主公手牌上限+1<li>贼首:反贼身份,只要贼首存活,主公手牌上限-1</ul></ul><li>平民身份<br>英盗版三国杀于2017标准版中提出的新概念.平民的获胜条件为:当其他身份的角色达成了其获胜条件,且你存活,你也获胜;同时内奸的获胜条件改为:主公死亡时,场上所有忠臣和反贼均已死亡.即内奸可以和与平民共同胜利.击杀平民的角色的奖惩为:摸两张牌.<li>年机制<br>英盗版三国杀于2019标准版中提出的新概念.<年>是一个全局概念,游戏开始时为第一年,当牌堆洗牌时,年数+1.一局游戏的限定年数为本局游戏开始时玩家总数.当年数增加后,若当前年数已超过限定年数,则主忠方直接获胜,若平民存活则平民也获胜',
                        明忠模式: '<div style="margin:10px">明忠模式(忠胆英杰)</div><ul style="margin-top:0"><li>本模式需要8名玩家进行游戏,使用的身份牌为:1主公、2忠臣、4反贼和1内奸.游戏开始时,每名玩家随机获得一个身份,由系统随机选择一名忠臣身份的玩家亮出身份(将忠臣牌正面朝上放在面前),其他身份(包括主公)的玩家不亮出身份.<li>首先由亮出身份的忠臣玩家随机获得六张武将牌,挑选一名角色,并将选好的武将牌展示给其他玩家.之后其余每名玩家随机获得三张武将牌,各自从其中挑选一张同时亮出<li>亮出身份牌的忠臣增加1点体力上限.角色濒死和死亡的结算及胜利条件与普通身份局相同',
                        谋攻模式: '<div style="margin:10px">模式命名由来</div><ul style="margin-top:0"><li><谋攻篇>一词出自<孙子兵法·谋攻篇>,是春秋时期兵法家孙武创作的一篇散文.<谋攻篇>故知胜有五:知可以战与不可以战者胜,识众寡之用者胜,上下同欲者胜,以虞待不虞者胜,将能而君不御者胜.</ul><div style="margin:10px">游戏规则</div><ul style="margin-top:0"><li>谋攻篇模式为六名玩家参与的全暗身份模式,引入新机制<怒气>,玩家可以消耗怒气探查其他角色的身份是敌人或者队友,或使用怒气强化手牌,以达到识别出队友并击杀敌人的目标.<li>各身份玩家的胜利条件与身份局中对应身份的胜利条件一致,且该模式下没有奖惩.<li>当主公进入濒死、场上有两名角色阵亡、第三轮的主公准备阶段,主公将会翻开身份牌,回复1点体力并摸一张牌,并获得武将牌上的主公技.<li>内奸在游戏开始时将会得知一名反贼的身份,并令该反贼被<伪装>.本局游戏内,被<伪装>的反贼在被任何人探查身份时,结果都提示为<敌人>.作为补偿,其第一次进入濒死时,若场上没有角色死亡且其怒气值不小于2,其弃置区域内所有牌,重置武将牌,将体力回复至2点并摸三张牌.<li>特殊地,内奸在被所有角色探查时,都提示为<队友>;内奸在进行探查时,直接得知目标的身份.</ul><div style="margin:10px">新机制<怒气></div><ul style="margin-top:0"><li>一名角色在回合开始时或受到1点伤害后,将获得1点怒气;怒气上限为3.<li>一名角色令其他角色扣减体力后,该角色可以消耗1点怒气,查探扣减体力的角色是敌或友.</ul><div style="margin:10px">强化卡牌规则</div><ul style="margin-top:0"><li>在第二轮游戏开始后,当你需要使用一张<强化表>内的牌时,你可以通过消耗怒气将此牌强化.<li>可强化卡牌<br><ul style="padding-left:20px;padding-top:5px"><li>【杀】:消耗1点怒气进行强化,你令响应此杀所需使用的【闪】数+1<li>【闪】:消耗1点怒气进行强化,使用时视为两张【闪】的效果<li>【决斗】:消耗2点怒气进行强化,对此牌的目标造成伤害时,伤害+1<li>【火攻】:消耗2点怒气进行强化,造成的伤害+1<li>【桃】:消耗3点怒气进行强化,回复的体力+1</ul></ul>',
                        '3v3v2': '<div style="margin:10px">3v3v2模式</div><ul style="margin-top:0"><li>游戏准备<br>本模式需要8名玩家进行游戏.游戏开始前,所有玩家随机分成两组,每组四人,分别称为「冷色阵营」和「暖色阵营」,分发身份牌,抽取到「主帅」身份的玩家亮出身份牌.<li>身份牌<br>每组的身份分为四种.<br>主帅(主)和前锋(忠):联合对方阵营的细作,击杀己方细作,对方阵营的主帅和前锋以及所有的野心家.<br>细作(内):帮助对方阵营的主帅和前锋,击杀对方细作,己方阵营的主帅和前锋以及所有的野心家.<br>野心家(野):联合对方阵营中的野心家,击杀所有其他角色,成为最后的生还者.<br><li>胜负判定<br>冷色主帅,先锋和暖色细作在所有野心家和对方主帅全部阵亡后视为胜利,在冷色主帅阵亡后视为游戏失败.<br>暖色主帅,先锋和冷色细作在所有野心家和对方主帅阵亡后视为胜利,在暖色主帅阵亡后视为失败.<br>野心家在所有不为野心家的角色阵亡后视为胜利,在双方主帅全部阵亡而有非野心家角色存活时失败.<br>当有角色阵亡后,若有角色满足胜利条件,游戏结束.若所有角色均满足失败条件,则游戏平局.若一名角色满足失败条件,即使其满足胜利条件,也视为游戏失败.<br><li>游戏流程<br>在「游戏准备」中的工作完成后,冷色主帅选择一个势力,暖色主帅选择一个其他势力,作为双方各自的势力将池.<br>双方主帅从各自的势力将池中获得两张常备主公武将牌和四张非常备主公武将牌,选择一张作为武将牌,将其他的武将牌放回势力将池并洗混.双方的其他玩家从各自的势力将池中随机获得五张武将牌,选择一张作为自己的武将牌.<br>暖色主帅成为游戏的一号位,双方主帅各加1点体力和体力上限.七号位和八号位的起始手牌+1.<br>当场上第一次有玩家死亡时,野心家确认彼此的身份牌,获得技能〖野心毕露〗:出牌阶段,你可以明置身份牌,加1点体力上限和体力值.若如此做,所有的野心家失去技能〖野心毕露〗<br><li>击杀奖惩<br>击杀颜色不同的主帅的角色回复1点体力,击杀颜色不同的先锋的角色摸两张牌,击杀颜色相同的细作的角色摸三张牌,击杀颜色相同的先锋的主帅弃置所有手牌.<br><li>制作团队<br>游戏出品:紫星居<br>游戏设计:食茸貳拾肆<br>游戏开发:食茸貳拾肆、紫髯的小乔、聆星Mine、空城琴音依旧弥漫、丽景原同志、雪之彩翼、拉普拉斯、明月照沟渠<br>程序化:无名杀<br>鸣谢:荆哲、魔风、萨巴鲁酱、这就是秋夜</ul></ul>',
                    },
                },
                {
                    translate: '列疆',
                    onremove() {
                        game.clearModeConfig('liejiang_angel');
                    },
                    connect: {
                        update(config, map) {
                            if (config.connect_identity_mode == 'zhong') {
                                map.connect_player_number.hide();
                                map.connect_limit_zhu.hide();
                                map.connect_enhance_zhu.hide();
                                map.connect_double_nei.hide();
                                map.connect_zhong_card.show();
                                map.connect_special_identity.hide();
                                map.connect_double_character.show();
                            } else if (config.connect_identity_mode == 'purple') {
                                map.connect_player_number.hide();
                                map.connect_limit_zhu.hide();
                                map.connect_enhance_zhu.hide();
                                map.connect_double_nei.hide();
                                map.connect_zhong_card.hide();
                                map.connect_special_identity.hide();
                                map.connect_double_character.hide();
                            } else {
                                map.connect_double_character.show();
                                map.connect_player_number.show();
                                map.connect_limit_zhu.show();
                                map.connect_enhance_zhu.show();
                                if (config.connect_player_number != '2') {
                                    map.connect_double_nei.show();
                                } else {
                                    map.connect_double_nei.hide();
                                }
                                map.connect_zhong_card.hide();
                                if (config.connect_player_number == '8') {
                                    map.connect_special_identity.show();
                                } else {
                                    map.connect_special_identity.hide();
                                }
                            }
                        },
                        connect_identity_mode: {
                            name: '游戏模式',
                            init: 'normal',
                            item: {
                                normal: '标准',
                                zhong: '明忠',
                                purple: '3v3v2',
                            },
                            restart: true,
                            forced: true,
                            intro: '明忠模式和3v3v2模式详见帮助',
                        },
                        connect_player_number: {
                            name: '游戏人数',
                            init: '8',
                            item: {
                                2: '两人',
                                3: '三人',
                                4: '四人',
                                5: '五人',
                                6: '六人',
                                7: '七人',
                                8: '八人',
                            },
                            forced: true,
                            restart: true,
                        },
                        connect_limit_zhu: {
                            name: '常备主候选武将数',
                            init: 'group',
                            restart: true,
                            item: {
                                4: '四',
                                6: '六',
                                8: '八',
                                off: '不限制',
                                group: '按势力筛选',
                            },
                        },
                        connect_zhong_card: {
                            name: '明忠卡牌替换',
                            init: true,
                            forced: true,
                            restart: true,
                        },
                        connect_double_nei: {
                            name: '双内奸',
                            init: false,
                            restart: true,
                            intro: '开启后游戏中将有两个内奸(内奸胜利条件仍为主内1v1时击杀主公)',
                        },
                        connect_double_character: {
                            name: '双将模式',
                            init: false,
                            forced: true,
                            restart: true,
                        },
                        connect_change_card: {
                            name: '启用手气卡',
                            init: false,
                            forced: true,
                            restart: true,
                        },
                        connect_special_identity: {
                            name: '特殊身份',
                            init: false,
                            restart: true,
                            forced: true,
                            intro: '开启后游戏中将增加军师、大将、贼首三个身份',
                        },
                        connect_enhance_zhu: {
                            name: '加强主公',
                            init: false,
                            restart: true,
                            intro: '为主公增加一个额外技能',
                        },
                    },
                    config: {
                        update(config, map) {
                            if (config.identity_mode == 'zhong') {
                                map.player_number.hide();
                                map.enhance_zhu.hide();
                                map.double_nei.hide();
                                map.auto_identity.hide();
                                map.choice_zhu.hide();
                                map.limit_zhu.hide();
                                map.choice_zhong.hide();
                                map.choice_nei.hide();
                                map.choice_fan.hide();
                                map.ban_identity.hide();
                                map.ban_identity2.hide();
                                map.ban_identity3.hide();
                                map.zhong_card.show();
                                map.special_identity.hide();
                                map.choose_group.show();
                                map.change_choice.show();
                                map.auto_mark_identity.show();
                                map.double_character.show();
                                map.free_choose.show();
                                map.change_identity.show();
                                if (config.double_character) {
                                    map.double_hp.show();
                                } else {
                                    map.double_hp.hide();
                                }
                                map.continue_game.show();
                            } else if (config.identity_mode == 'purple') {
                                map.player_number.hide();
                                map.enhance_zhu.hide();
                                map.double_nei.hide();
                                map.auto_identity.hide();
                                map.choice_zhu.hide();
                                map.limit_zhu.hide();
                                map.choice_zhong.hide();
                                map.choice_nei.hide();
                                map.choice_fan.hide();
                                map.ban_identity.hide();
                                map.ban_identity2.hide();
                                map.ban_identity3.hide();
                                map.zhong_card.hide();
                                map.special_identity.hide();
                                map.double_character.hide();
                                map.double_hp.hide();
                                map.choose_group.hide();
                                map.auto_mark_identity.hide();
                                map.change_choice.hide();
                                map.free_choose.hide();
                                map.change_identity.hide();
                                map.continue_game.hide();
                            } else {
                                map.continue_game.show();
                                map.player_number.show();
                                map.enhance_zhu.show();
                                map.auto_identity.show();
                                if (config.player_number != '2') {
                                    map.double_nei.show();
                                } else {
                                    map.double_nei.hide();
                                }
                                map.choice_zhu.show();
                                map.limit_zhu.show();
                                map.choice_zhong.show();
                                map.choice_nei.show();
                                map.choice_fan.show();
                                map.ban_identity.show();
                                if (config.ban_identity == 'off') {
                                    map.ban_identity2.hide();
                                } else {
                                    map.ban_identity2.show();
                                }
                                if (config.ban_identity == 'off' || config.ban_identity2 == 'off') {
                                    map.ban_identity3.hide();
                                } else {
                                    map.ban_identity3.show();
                                }
                                map.zhong_card.hide();
                                map.choose_group.show();
                                map.auto_mark_identity.show();
                                map.change_choice.show();
                                map.free_choose.show();
                                map.change_identity.show();
                                if (config.player_number == '8') {
                                    map.special_identity.show();
                                } else {
                                    map.special_identity.hide();
                                }
                                map.double_character.show();
                                if (config.double_character) {
                                    map.double_hp.show();
                                } else {
                                    map.double_hp.hide();
                                }
                            }
                        },
                        identity_mode: {
                            name: '游戏模式',
                            init: 'normal',
                            item: {
                                normal: '标准',
                                zhong: '明忠',
                                purple: '3v3v2',
                            },
                            restart: true,
                            forced: true,
                            intro: '明忠模式详见帮助',
                        },
                        player_number: {
                            name: '游戏人数',
                            init: '8',
                            item: {
                                2: '两人',
                                3: '三人',
                                4: '四人',
                                5: '五人',
                                6: '六人',
                                7: '七人',
                                8: '八人',
                            },
                            forced: true,
                            restart: true,
                        },
                        double_nei: {
                            name: '双内奸',
                            init: false,
                            restart: true,
                            forced: true,
                            intro: '开启后游戏中将有两个内奸(内奸胜利条件仍为主内1v1时击杀主公)',
                        },
                        choose_group: {
                            name: '神武将选择势力',
                            init: true,
                            restart: true,
                            forced: true,
                            intro: '若开启此选项,选择神武将的玩家需在亮出自己的武将牌之前为自己选择一个势力',
                        },
                        nei_fullscreenpop: {
                            name: '主内单挑特效',
                            intro: '在进入主内单挑时,弹出全屏文字特效',
                            init: true,
                            unforced: true,
                        },
                        double_character: {
                            name: '双将模式',
                            init: false,
                            forced: true,
                            restart: true,
                        },
                        special_identity: {
                            name: '特殊身份',
                            init: false,
                            restart: true,
                            forced: true,
                            intro: '开启后游戏中将增加军师、大将、贼首三个身份',
                        },
                        zhong_card: {
                            name: '明忠卡牌替换',
                            init: true,
                            forced: true,
                            restart: true,
                        },
                        double_hp: {
                            name: '双将体力上限',
                            init: 'pingjun',
                            item: {
                                hejiansan: '和减三',
                                pingjun: '平均值',
                                zuidazhi: '最大值',
                                zuixiaozhi: '最小值',
                                zonghe: '相加',
                            },
                            restart: true,
                        },
                        auto_identity: {
                            name: '自动显示身份',
                            item: {
                                off: '关闭',
                                one: '一轮',
                                two: '两轮',
                                three: '三轮',
                                always: '始终',
                            },
                            init: 'off',
                            onclick(bool) {
                                game.saveConfig('auto_identity', bool, this._link.config.mode);
                                if (get.config('identity_mode') == 'zhong') return;
                                var num;
                                switch (bool) {
                                    case '一轮':
                                        num = 1;
                                        break;
                                    case '两轮':
                                        num = 2;
                                        break;
                                    case '三轮':
                                        num = 3;
                                        break;
                                    default:
                                        num = 0;
                                        break;
                                }
                                if (num & !_status.identityShown && game.phaseNumber > game.players.length * num && game.showIdentity) {
                                    _status.identityShown = true;
                                    game.showIdentity(false);
                                }
                            },
                            intro: '游戏进行若干轮将自动显示所有角色的身份',
                        },
                        auto_mark_identity: {
                            name: '自动标记身份',
                            init: true,
                            intro: '根据角色的出牌行为自动标记可能的身份',
                        },
                        enhance_zhu: {
                            name: '加强主公',
                            init: false,
                            restart: true,
                            intro: '为主公增加一个额外技能',
                        },
                        free_choose: {
                            name: '自由选将',
                            init: true,
                            onclick(bool) {
                                game.saveConfig('free_choose', bool, this._link.config.mode);
                                if (!_status.event.parent.showConfig && !_status.event.showConfig) return;
                                if (!ui.cheat2 && get.config('free_choose')) ui.create.cheat2();
                                else if (ui.cheat2 && !get.config('free_choose')) {
                                    ui.cheat2.close();
                                    delete ui.cheat2;
                                }
                            },
                        },
                        change_identity: {
                            name: '自由选择身份和座位',
                            init: true,
                            onclick(bool) {
                                game.saveConfig('change_identity', bool, this._link.config.mode);
                                if (get.mode() != 'identity' || (!_status.event.parent.showConfig && !_status.event.showConfig)) return;
                                var dialog;
                                if (ui.cheat2 && ui.cheat2.backup) dialog = ui.cheat2.backup;
                                else dialog = _status.event.dialog;
                                if (!_status.brawl || !_status.brawl.noAddSetting) {
                                    if (!dialog.querySelector('table') && get.config('change_identity')) _status.event.parent.addSetting(dialog);
                                    else _status.event.parent.removeSetting(dialog);
                                }
                                ui.update();
                            },
                        },
                        change_choice: {
                            name: '开启换将卡',
                            init: true,
                            onclick(bool) {
                                game.saveConfig('change_choice', bool, this._link.config.mode);
                                if (get.mode() != 'identity' || (!_status.event.parent.showConfig && !_status.event.showConfig)) return;
                                if (!ui.cheat && get.config('change_choice')) ui.create.cheat();
                                else if (ui.cheat && !get.config('change_choice')) {
                                    ui.cheat.close();
                                    delete ui.cheat;
                                }
                            },
                        },
                        change_card: {
                            name: '开启手气卡',
                            init: 'disabled',
                            item: {
                                disabled: '禁用',
                                once: '一次',
                                twice: '两次',
                                unlimited: '无限',
                            },
                        },
                        continue_game: {
                            name: '显示再战',
                            init: false,
                            onclick(bool) {
                                game.saveConfig('continue_game', bool, this._link.config.mode);
                                if (get.config('continue_game') && get.mode() == 'identity') {
                                    if (!ui.continue_game && _status.over && !_status.brawl && !game.no_continue_game) {
                                        ui.continue_game = ui.create.control('再战', game.reloadCurrent);
                                    }
                                } else if (ui.continue_game) {
                                    ui.continue_game.close();
                                    delete ui.continue_game;
                                }
                            },
                            intro: '游戏结束后可选择用相同的武将再进行一局游戏',
                        },
                        dierestart: {
                            name: '死亡后显示重来',
                            init: true,
                            onclick(bool) {
                                game.saveConfig('dierestart', bool, this._link.config.mode);
                                if (get.config('dierestart') && get.mode() == 'identity') {
                                    if (!ui.restart && game.me.isDead() && !_status.connectMode) {
                                        ui.restart = ui.create.control('restart', game.reload);
                                    }
                                } else if (ui.restart) {
                                    ui.restart.close();
                                    delete ui.restart;
                                }
                            },
                        },
                        revive: {
                            name: '死亡后显示复活',
                            init: false,
                            onclick(bool) {
                                game.saveConfig('revive', bool, this._link.config.mode);
                                if (get.config('revive') && get.mode() == 'identity') {
                                    if (!ui.revive && game.me.isDead()) {
                                        ui.revive = ui.create.control('revive', ui.click.dierevive);
                                    }
                                } else if (ui.revive) {
                                    ui.revive.close();
                                    delete ui.revive;
                                }
                            },
                        },
                        ban_identity: {
                            name: '屏蔽身份',
                            init: 'off',
                            item: {
                                off: '关闭',
                                zhu: '主公',
                                zhong: '忠臣',
                                nei: '内奸',
                                fan: '反贼',
                            },
                        },
                        ban_identity2: {
                            name: '屏蔽身份2',
                            init: 'off',
                            item: {
                                off: '关闭',
                                zhu: '主公',
                                zhong: '忠臣',
                                nei: '内奸',
                                fan: '反贼',
                            },
                        },
                        ban_identity3: {
                            name: '屏蔽身份3',
                            init: 'off',
                            item: {
                                off: '关闭',
                                zhu: '主公',
                                zhong: '忠臣',
                                nei: '内奸',
                                fan: '反贼',
                            },
                        },
                        ai_strategy: {
                            name: '内奸策略',
                            init: 'ai_strategy_1',
                            item: {
                                ai_strategy_1: '均衡',
                                ai_strategy_2: '偏反',
                                ai_strategy_3: '偏忠',
                                ai_strategy_4: '酱油',
                                ai_strategy_5: '天使',
                                ai_strategy_6: '仇主',
                            },
                            intro: '设置内奸对主忠反的态度',
                        },
                        difficulty: {
                            name: 'AI对人类态度',
                            init: 'normal',
                            item: {
                                easy: '友好',
                                normal: '一般',
                                hard: '仇视',
                            },
                        },
                        choice_zhu: {
                            name: '主公候选武将数',
                            init: '3',
                            restart: true,
                            item: {
                                3: '三',
                                4: '四',
                                5: '五',
                                6: '六',
                                8: '八',
                                10: '十',
                            },
                        },
                        limit_zhu: {
                            name: '常备主候选武将数',
                            init: 'group',
                            restart: true,
                            item: {
                                4: '四',
                                6: '六',
                                8: '八',
                                off: '不限制',
                                group: '按势力筛选',
                            },
                        },
                        choice_zhong: {
                            name: '忠臣候选武将数',
                            init: '4',
                            restart: true,
                            item: {
                                3: '三',
                                4: '四',
                                5: '五',
                                6: '六',
                                8: '八',
                                10: '十',
                            },
                        },
                        choice_nei: {
                            name: '内奸候选武将数',
                            init: '5',
                            restart: true,
                            item: {
                                3: '三',
                                4: '四',
                                5: '五',
                                6: '六',
                                8: '八',
                                10: '十',
                            },
                        },
                        choice_fan: {
                            name: '反贼候选武将数',
                            init: '3',
                            restart: true,
                            item: {
                                3: '三',
                                4: '四',
                                5: '五',
                                6: '六',
                                8: '八',
                                10: '十',
                            },
                        },
                    },
                }
            );
            lib.mode.liejiang_angel.splash = 'ext:/列疆/img/game/liejiang_angel.jpg';
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
                }; //true转为1,false转为-1
                window.numberq0 = function (num) {
                    if (isNaN(Number(num))) return 0;
                    return Math.abs(Number(num));
                }; //始终返回正数(取绝对值)
                window.numberq1 = function (num) {
                    if (isNaN(Number(num))) return 1;
                    return Math.max(Math.abs(Number(num)), 1);
                }; //始终返回正数且至少为1(取绝对值)
                window.number0 = function (num) {
                    if (isNaN(Number(num))) return 0;
                    return Math.max(Number(num), 0);
                }; //始终返回正数
                window.number1 = function (num) {
                    if (isNaN(Number(num))) return 1;
                    return Math.max(Number(num), 1);
                }; //始终返回正数且至少为1
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
                        if (obj.hasOwnProperty(key)) {
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
                    name: '列疆',
                    connect: true,
                    card: {
                        // 【匕首】1
                        // 你的阳普通【攻】均视为【攻·刺】.
                        bishou_Angel: {
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip1',
                            ai: {
                                basic: {
                                    equipValue: 2,
                                    order(card, player) {
                                        const equipValue = get.equipValue(card, player) / 20;
                                        return player && player.hasSkillTag('reverseEquip') ? 8.5 - equipValue : 8 + equipValue;
                                    },
                                    useful: 2,
                                    value(card, player, index, method) {
                                        if (!player.getCards('e').includes(card) && !player.canEquip(card, true)) return 0.01;
                                        const info = get.info(card),
                                            current = player.getEquip(info.subtype),
                                            value = current && card != current && get.value(current, player);
                                        let equipValue = info.ai.equipValue || info.ai.basic.equipValue;
                                        if (typeof equipValue == 'function') {
                                            if (method == 'raw') return equipValue(card, player);
                                            if (method == 'raw2') return equipValue(card, player) - value;
                                            return Math.max(0.1, equipValue(card, player) - value);
                                        }
                                        if (typeof equipValue != 'number') equipValue = 0;
                                        if (method == 'raw') return equipValue;
                                        if (method == 'raw2') return equipValue - value;
                                        return Math.max(0.1, equipValue - value);
                                    },
                                },
                                result: {
                                    target: (player, target, card) => get.equipResult(player, target, card.name),
                                },
                            },
                            skills: ['bishou_skill'],
                            enable: true,
                            selectTarget: -1,
                            filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                            },
                            toself: true,
                        },
                        // 【暗镖】1
                        // 你可以将2张阴阳不同的【攻】当作一张不可被响应的普通【攻】使用.
                        anbiao_Angel: {
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip1',
                            ai: {
                                equipValue(card, player) {
                                    var yy = [];
                                    for (const i of player.getCards('h')) {
                                        yy.add(get.yinyang(i));
                                    }
                                    var num = 2.5 + player.countCards('h') / 3 + yy.length / 2;
                                    return Math.min(num, 4);
                                },
                                basic: {
                                    equipValue: 3.5,
                                    order(card, player) {
                                        const equipValue = get.equipValue(card, player) / 20;
                                        return player && player.hasSkillTag('reverseEquip') ? 8.5 - equipValue : 8 + equipValue;
                                    },
                                    useful: 2,
                                    value(card, player, index, method) {
                                        if (!player.getCards('e').includes(card) && !player.canEquip(card, true)) return 0.01;
                                        const info = get.info(card),
                                            current = player.getEquip(info.subtype),
                                            value = current && card != current && get.value(current, player);
                                        let equipValue = info.ai.equipValue || info.ai.basic.equipValue;
                                        if (typeof equipValue == 'function') {
                                            if (method == 'raw') return equipValue(card, player);
                                            if (method == 'raw2') return equipValue(card, player) - value;
                                            return Math.max(0.1, equipValue(card, player) - value);
                                        }
                                        if (typeof equipValue != 'number') equipValue = 0;
                                        if (method == 'raw') return equipValue;
                                        if (method == 'raw2') return equipValue - value;
                                        return Math.max(0.1, equipValue - value);
                                    },
                                },
                                result: {
                                    target: (player, target, card) => get.equipResult(player, target, card.name),
                                },
                            },
                            skills: ['anbiao_skill'],
                            enable: true,
                            selectTarget: -1,
                            filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                            },
                            toself: true,
                        },
                        // 【短刀】1
                        // 你可以将1张普通【攻】和另1张手牌当作【攻·斩】使用.
                        duandao_Angel: {
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip1',
                            ai: {
                                equipValue(card, player) {
                                    var num = 2.5 + player.countCards('h') / 3;
                                    return Math.min(num, 4);
                                },
                                basic: {
                                    equipValue: 3.5,
                                    order(card, player) {
                                        const equipValue = get.equipValue(card, player) / 20;
                                        return player && player.hasSkillTag('reverseEquip') ? 8.5 - equipValue : 8 + equipValue;
                                    },
                                    useful: 2,
                                    value(card, player, index, method) {
                                        if (!player.getCards('e').includes(card) && !player.canEquip(card, true)) return 0.01;
                                        const info = get.info(card),
                                            current = player.getEquip(info.subtype),
                                            value = current && card != current && get.value(current, player);
                                        let equipValue = info.ai.equipValue || info.ai.basic.equipValue;
                                        if (typeof equipValue == 'function') {
                                            if (method == 'raw') return equipValue(card, player);
                                            if (method == 'raw2') return equipValue(card, player) - value;
                                            return Math.max(0.1, equipValue(card, player) - value);
                                        }
                                        if (typeof equipValue != 'number') equipValue = 0;
                                        if (method == 'raw') return equipValue;
                                        if (method == 'raw2') return equipValue - value;
                                        return Math.max(0.1, equipValue - value);
                                    },
                                },
                                result: {
                                    target: (player, target, card) => get.equipResult(player, target, card.name),
                                },
                            },
                            skills: ['duandao_skill'],
                            enable: true,
                            selectTarget: -1,
                            filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                            },
                            toself: true,
                        },
                        // 【长矛】2
                        // 你的【攻·刺】造成的伤害+1.
                        changmao_Angel: {
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip1',
                            distance: {
                                attackFrom: -1,
                            },
                            ai: {
                                basic: {
                                    equipValue: 2,
                                    order(card, player) {
                                        const equipValue = get.equipValue(card, player) / 20;
                                        return player && player.hasSkillTag('reverseEquip') ? 8.5 - equipValue : 8 + equipValue;
                                    },
                                    useful: 2,
                                    value(card, player, index, method) {
                                        if (!player.getCards('e').includes(card) && !player.canEquip(card, true)) return 0.01;
                                        const info = get.info(card),
                                            current = player.getEquip(info.subtype),
                                            value = current && card != current && get.value(current, player);
                                        let equipValue = info.ai.equipValue || info.ai.basic.equipValue;
                                        if (typeof equipValue == 'function') {
                                            if (method == 'raw') return equipValue(card, player);
                                            if (method == 'raw2') return equipValue(card, player) - value;
                                            return Math.max(0.1, equipValue(card, player) - value);
                                        }
                                        if (typeof equipValue != 'number') equipValue = 0;
                                        if (method == 'raw') return equipValue;
                                        if (method == 'raw2') return equipValue - value;
                                        return Math.max(0.1, equipValue - value);
                                    },
                                },
                                result: {
                                    target: (player, target, card) => get.equipResult(player, target, card.name),
                                },
                            },
                            skills: ['changmao_skill'],
                            enable: true,
                            selectTarget: -1,
                            filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                            },
                            toself: true,
                        },
                        // 【硬弓】2
                        // 你的阳普通【攻】均视为【攻·射】.
                        yinggong_Angel: {
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip1',
                            distance: {
                                attackFrom: -1,
                            },
                            ai: {
                                basic: {
                                    equipValue: 2,
                                    order(card, player) {
                                        const equipValue = get.equipValue(card, player) / 20;
                                        return player && player.hasSkillTag('reverseEquip') ? 8.5 - equipValue : 8 + equipValue;
                                    },
                                    useful: 2,
                                    value(card, player, index, method) {
                                        if (!player.getCards('e').includes(card) && !player.canEquip(card, true)) return 0.01;
                                        const info = get.info(card),
                                            current = player.getEquip(info.subtype),
                                            value = current && card != current && get.value(current, player);
                                        let equipValue = info.ai.equipValue || info.ai.basic.equipValue;
                                        if (typeof equipValue == 'function') {
                                            if (method == 'raw') return equipValue(card, player);
                                            if (method == 'raw2') return equipValue(card, player) - value;
                                            return Math.max(0.1, equipValue(card, player) - value);
                                        }
                                        if (typeof equipValue != 'number') equipValue = 0;
                                        if (method == 'raw') return equipValue;
                                        if (method == 'raw2') return equipValue - value;
                                        return Math.max(0.1, equipValue - value);
                                    },
                                },
                                result: {
                                    target: (player, target, card) => get.equipResult(player, target, card.name),
                                },
                            },
                            skills: ['yinggong_skill'],
                            enable: true,
                            selectTarget: -1,
                            filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                            },
                            toself: true,
                        },
                        // 【藉车】2
                        // 你的【攻·射】指定目标后,目标角色与其距离为1的其他角色成为此【攻·射】额外目标.
                        jiche_Angel: {
                            changmao_Angel: {
                                fullskin: true,
                                type: 'equip',
                                subtype: 'equip1',
                                distance: {
                                    attackFrom: -1,
                                },
                                ai: {
                                    basic: {
                                        equipValue: 2,
                                        order(card, player) {
                                            const equipValue = get.equipValue(card, player) / 20;
                                            return player && player.hasSkillTag('reverseEquip') ? 8.5 - equipValue : 8 + equipValue;
                                        },
                                        useful: 2,
                                        value(card, player, index, method) {
                                            if (!player.getCards('e').includes(card) && !player.canEquip(card, true)) return 0.01;
                                            const info = get.info(card),
                                                current = player.getEquip(info.subtype),
                                                value = current && card != current && get.value(current, player);
                                            let equipValue = info.ai.equipValue || info.ai.basic.equipValue;
                                            if (typeof equipValue == 'function') {
                                                if (method == 'raw') return equipValue(card, player);
                                                if (method == 'raw2') return equipValue(card, player) - value;
                                                return Math.max(0.1, equipValue(card, player) - value);
                                            }
                                            if (typeof equipValue != 'number') equipValue = 0;
                                            if (method == 'raw') return equipValue;
                                            if (method == 'raw2') return equipValue - value;
                                            return Math.max(0.1, equipValue - value);
                                        },
                                    },
                                    result: {
                                        target: (player, target, card) => get.equipResult(player, target, card.name),
                                    },
                                },
                                skills: ['jiche_skill'],
                                enable: true,
                                selectTarget: -1,
                                filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
                                modTarget: true,
                                allowMultiple: false,
                                content() {
                                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                                },
                                toself: true,
                            },
                        },
                        // 【轻甲】
                        // 当你受到伤害时,你可消耗任意点智谋减少等量伤害.
                        qingjia_Angel: {
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip1',
                            ai: {
                                basic: {
                                    equipValue: 3,
                                    order(card, player) {
                                        const equipValue = get.equipValue(card, player) / 20;
                                        return player && player.hasSkillTag('reverseEquip') ? 8.5 - equipValue : 8 + equipValue;
                                    },
                                    useful: 2,
                                    value(card, player, index, method) {
                                        if (!player.getCards('e').includes(card) && !player.canEquip(card, true)) return 0.01;
                                        const info = get.info(card),
                                            current = player.getEquip(info.subtype),
                                            value = current && card != current && get.value(current, player);
                                        let equipValue = info.ai.equipValue || info.ai.basic.equipValue;
                                        if (typeof equipValue == 'function') {
                                            if (method == 'raw') return equipValue(card, player);
                                            if (method == 'raw2') return equipValue(card, player) - value;
                                            return Math.max(0.1, equipValue(card, player) - value);
                                        }
                                        if (typeof equipValue != 'number') equipValue = 0;
                                        if (method == 'raw') return equipValue;
                                        if (method == 'raw2') return equipValue - value;
                                        return Math.max(0.1, equipValue - value);
                                    },
                                },
                                result: {
                                    target: (player, target, card) => get.equipResult(player, target, card.name),
                                },
                            },
                            skills: ['qingjia_skill'],
                            enable: true,
                            selectTarget: -1,
                            filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                            },
                            toself: true,
                        },
                        // 【板甲】
                        // 当你成为1张【攻】的目标后,你可将1张与此【攻】五行相同的手牌当【守】使用.
                        banjia_Angel: {
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip1',
                            ai: {
                                basic: {
                                    equipValue: 1.5,
                                    order(card, player) {
                                        const equipValue = get.equipValue(card, player) / 20;
                                        return player && player.hasSkillTag('reverseEquip') ? 8.5 - equipValue : 8 + equipValue;
                                    },
                                    useful: 2,
                                    value(card, player, index, method) {
                                        if (!player.getCards('e').includes(card) && !player.canEquip(card, true)) return 0.01;
                                        const info = get.info(card),
                                            current = player.getEquip(info.subtype),
                                            value = current && card != current && get.value(current, player);
                                        let equipValue = info.ai.equipValue || info.ai.basic.equipValue;
                                        if (typeof equipValue == 'function') {
                                            if (method == 'raw') return equipValue(card, player);
                                            if (method == 'raw2') return equipValue(card, player) - value;
                                            return Math.max(0.1, equipValue(card, player) - value);
                                        }
                                        if (typeof equipValue != 'number') equipValue = 0;
                                        if (method == 'raw') return equipValue;
                                        if (method == 'raw2') return equipValue - value;
                                        return Math.max(0.1, equipValue - value);
                                    },
                                },
                                result: {
                                    target: (player, target, card) => get.equipResult(player, target, card.name),
                                },
                            },
                            skills: ['banjia_skill'],
                            enable: true,
                            selectTarget: -1,
                            filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                            },
                            toself: true,
                        },
                        // 【圆盾】
                        // 你的阳【攻】可以当作【守】使用或打出.
                        yuandun_Angel: {
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip1',
                            ai: {
                                basic: {
                                    equipValue: 2,
                                    order(card, player) {
                                        const equipValue = get.equipValue(card, player) / 20;
                                        return player && player.hasSkillTag('reverseEquip') ? 8.5 - equipValue : 8 + equipValue;
                                    },
                                    useful: 2,
                                    value(card, player, index, method) {
                                        if (!player.getCards('e').includes(card) && !player.canEquip(card, true)) return 0.01;
                                        const info = get.info(card),
                                            current = player.getEquip(info.subtype),
                                            value = current && card != current && get.value(current, player);
                                        let equipValue = info.ai.equipValue || info.ai.basic.equipValue;
                                        if (typeof equipValue == 'function') {
                                            if (method == 'raw') return equipValue(card, player);
                                            if (method == 'raw2') return equipValue(card, player) - value;
                                            return Math.max(0.1, equipValue(card, player) - value);
                                        }
                                        if (typeof equipValue != 'number') equipValue = 0;
                                        if (method == 'raw') return equipValue;
                                        if (method == 'raw2') return equipValue - value;
                                        return Math.max(0.1, equipValue - value);
                                    },
                                },
                                result: {
                                    target: (player, target, card) => get.equipResult(player, target, card.name),
                                },
                            },
                            skills: ['yuandun_skill'],
                            enable: true,
                            selectTarget: -1,
                            filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                            },
                            toself: true,
                        },
                        // 【铁盾】
                        // 【攻·刺】和【攻·射】对你无效.
                        tiedun_Angel: {
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip1',
                            ai: {
                                basic: {
                                    equipValue: 7.5,
                                    order(card, player) {
                                        const equipValue = get.equipValue(card, player) / 20;
                                        return player && player.hasSkillTag('reverseEquip') ? 8.5 - equipValue : 8 + equipValue;
                                    },
                                    useful: 2,
                                    value(card, player, index, method) {
                                        if (!player.getCards('e').includes(card) && !player.canEquip(card, true)) return 0.01;
                                        const info = get.info(card),
                                            current = player.getEquip(info.subtype),
                                            value = current && card != current && get.value(current, player);
                                        let equipValue = info.ai.equipValue || info.ai.basic.equipValue;
                                        if (typeof equipValue == 'function') {
                                            if (method == 'raw') return equipValue(card, player);
                                            if (method == 'raw2') return equipValue(card, player) - value;
                                            return Math.max(0.1, equipValue(card, player) - value);
                                        }
                                        if (typeof equipValue != 'number') equipValue = 0;
                                        if (method == 'raw') return equipValue;
                                        if (method == 'raw2') return equipValue - value;
                                        return Math.max(0.1, equipValue - value);
                                    },
                                },
                                result: {
                                    target: (player, target, card) => get.equipResult(player, target, card.name),
                                },
                            },
                            skills: ['tiedun_skill'],
                            enable: true,
                            selectTarget: -1,
                            filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                            },
                            toself: true,
                        },
                        // 【重甲】
                        // 阳普通【攻】和【攻·斩】对你无效.
                        zhongjia_Angel: {
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip1',
                            ai: {
                                basic: {
                                    equipValue: 8,
                                    order(card, player) {
                                        const equipValue = get.equipValue(card, player) / 20;
                                        return player && player.hasSkillTag('reverseEquip') ? 8.5 - equipValue : 8 + equipValue;
                                    },
                                    useful: 2,
                                    value(card, player, index, method) {
                                        if (!player.getCards('e').includes(card) && !player.canEquip(card, true)) return 0.01;
                                        const info = get.info(card),
                                            current = player.getEquip(info.subtype),
                                            value = current && card != current && get.value(current, player);
                                        let equipValue = info.ai.equipValue || info.ai.basic.equipValue;
                                        if (typeof equipValue == 'function') {
                                            if (method == 'raw') return equipValue(card, player);
                                            if (method == 'raw2') return equipValue(card, player) - value;
                                            return Math.max(0.1, equipValue(card, player) - value);
                                        }
                                        if (typeof equipValue != 'number') equipValue = 0;
                                        if (method == 'raw') return equipValue;
                                        if (method == 'raw2') return equipValue - value;
                                        return Math.max(0.1, equipValue - value);
                                    },
                                },
                                result: {
                                    target: (player, target, card) => get.equipResult(player, target, card.name),
                                },
                            },
                            skills: ['zhongjia_skill'],
                            enable: true,
                            selectTarget: -1,
                            filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                            },
                            toself: true,
                        },
                        // 【营寨】
                        // 每回合以你为目标的第1张【攻】对你无效.
                        yingzhai_Angel: {
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip1',
                            ai: {
                                basic: {
                                    equipValue: 10,
                                    order(card, player) {
                                        const equipValue = get.equipValue(card, player) / 20;
                                        return player && player.hasSkillTag('reverseEquip') ? 8.5 - equipValue : 8 + equipValue;
                                    },
                                    useful: 2,
                                    value(card, player, index, method) {
                                        if (!player.getCards('e').includes(card) && !player.canEquip(card, true)) return 0.01;
                                        const info = get.info(card),
                                            current = player.getEquip(info.subtype),
                                            value = current && card != current && get.value(current, player);
                                        let equipValue = info.ai.equipValue || info.ai.basic.equipValue;
                                        if (typeof equipValue == 'function') {
                                            if (method == 'raw') return equipValue(card, player);
                                            if (method == 'raw2') return equipValue(card, player) - value;
                                            return Math.max(0.1, equipValue(card, player) - value);
                                        }
                                        if (typeof equipValue != 'number') equipValue = 0;
                                        if (method == 'raw') return equipValue;
                                        if (method == 'raw2') return equipValue - value;
                                        return Math.max(0.1, equipValue - value);
                                    },
                                },
                                result: {
                                    target: (player, target, card) => get.equipResult(player, target, card.name),
                                },
                            },
                            skills: ['yingzhai_skill'],
                            enable: true,
                            selectTarget: -1,
                            filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                            },
                            toself: true,
                        },
                        //                     礼教
                        // 出牌阶段,你可弃置1张【攻】获得1点智谋.
                        lijiao_Angel: {
                            audio: true,
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip5',
                            skills: ['lijiao_skill'],
                            enable: true,
                            selectTarget: -1,
                            filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                            },
                            toself: true,
                            ai: {
                                basic: {
                                    equipValue: 6,
                                    order(card, player) {
                                        const equipValue = get.equipValue(card, player) / 20;
                                        return player && player.hasSkillTag('reverseEquip') ? 8.5 - equipValue : 8 + equipValue;
                                    },
                                    useful: 2,
                                    value(card, player, index, method) {
                                        if (!player.getCards('e').includes(card) && !player.canEquip(card, true)) return 0.01;
                                        const info = get.info(card),
                                            current = player.getEquip(info.subtype),
                                            value = current && card != current && get.value(current, player);
                                        let equipValue = info.ai.equipValue || info.ai.basic.equipValue;
                                        if (typeof equipValue == 'function') {
                                            if (method == 'raw') return equipValue(card, player);
                                            if (method == 'raw2') return equipValue(card, player) - value;
                                            return Math.max(0.1, equipValue(card, player) - value);
                                        }
                                        if (typeof equipValue != 'number') equipValue = 0;
                                        if (method == 'raw') return equipValue;
                                        if (method == 'raw2') return equipValue - value;
                                        return Math.max(0.1, equipValue - value);
                                    },
                                },
                                result: {
                                    target: (player, target, card) => get.equipResult(player, target, card.name),
                                },
                            },
                        },
                        // 【占卜】
                        // 你参与的博弈的博弈牌亮出时,你可用1张手牌代替其中1张博弈牌.
                        zhanbu_Angel: {
                            audio: true,
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip5',
                            skills: ['zhanbu_skill'],
                            enable: true,
                            selectTarget: -1,
                            filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                            },
                            toself: true,
                            ai: {
                                basic: {
                                    equipValue: 6,
                                    order(card, player) {
                                        const equipValue = get.equipValue(card, player) / 20;
                                        return player && player.hasSkillTag('reverseEquip') ? 8.5 - equipValue : 8 + equipValue;
                                    },
                                    useful: 2,
                                    value(card, player, index, method) {
                                        if (!player.getCards('e').includes(card) && !player.canEquip(card, true)) return 0.01;
                                        const info = get.info(card),
                                            current = player.getEquip(info.subtype),
                                            value = current && card != current && get.value(current, player);
                                        let equipValue = info.ai.equipValue || info.ai.basic.equipValue;
                                        if (typeof equipValue == 'function') {
                                            if (method == 'raw') return equipValue(card, player);
                                            if (method == 'raw2') return equipValue(card, player) - value;
                                            return Math.max(0.1, equipValue(card, player) - value);
                                        }
                                        if (typeof equipValue != 'number') equipValue = 0;
                                        if (method == 'raw') return equipValue;
                                        if (method == 'raw2') return equipValue - value;
                                        return Math.max(0.1, equipValue - value);
                                    },
                                },
                                result: {
                                    target: (player, target, card) => get.equipResult(player, target, card.name),
                                },
                            },
                        },
                        // 【厨炊】
                        // 你对一名角色使用1张阳【粮】后,其回复1点体力.
                        chuchui_Angel: {
                            audio: true,
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip5',
                            skills: ['zhanbu_skill'],
                            enable: true,
                            selectTarget: -1,
                            filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                            },
                            toself: true,
                            ai: {
                                basic: {
                                    equipValue: 6,
                                    order(card, player) {
                                        const equipValue = get.equipValue(card, player) / 20;
                                        return player && player.hasSkillTag('reverseEquip') ? 8.5 - equipValue : 8 + equipValue;
                                    },
                                    useful: 2,
                                    value(card, player, index, method) {
                                        if (!player.getCards('e').includes(card) && !player.canEquip(card, true)) return 0.01;
                                        const info = get.info(card),
                                            current = player.getEquip(info.subtype),
                                            value = current && card != current && get.value(current, player);
                                        let equipValue = info.ai.equipValue || info.ai.basic.equipValue;
                                        if (typeof equipValue == 'function') {
                                            if (method == 'raw') return equipValue(card, player);
                                            if (method == 'raw2') return equipValue(card, player) - value;
                                            return Math.max(0.1, equipValue(card, player) - value);
                                        }
                                        if (typeof equipValue != 'number') equipValue = 0;
                                        if (method == 'raw') return equipValue;
                                        if (method == 'raw2') return equipValue - value;
                                        return Math.max(0.1, equipValue - value);
                                    },
                                },
                                result: {
                                    target: (player, target, card) => get.equipResult(player, target, card.name),
                                },
                            },
                        },
                        // 【毒箭】
                        // 你使用的【攻·射】对一名角色造成伤害时,你可弃置1张牌令此伤害+1.
                        dujian_Angel: {
                            audio: true,
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip5',
                            skills: ['dujian_skill'],
                            enable: true,
                            selectTarget: -1,
                            filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                            },
                            toself: true,
                            ai: {
                                basic: {
                                    equipValue: 6,
                                    order(card, player) {
                                        const equipValue = get.equipValue(card, player) / 20;
                                        return player && player.hasSkillTag('reverseEquip') ? 8.5 - equipValue : 8 + equipValue;
                                    },
                                    useful: 2,
                                    value(card, player, index, method) {
                                        if (!player.getCards('e').includes(card) && !player.canEquip(card, true)) return 0.01;
                                        const info = get.info(card),
                                            current = player.getEquip(info.subtype),
                                            value = current && card != current && get.value(current, player);
                                        let equipValue = info.ai.equipValue || info.ai.basic.equipValue;
                                        if (typeof equipValue == 'function') {
                                            if (method == 'raw') return equipValue(card, player);
                                            if (method == 'raw2') return equipValue(card, player) - value;
                                            return Math.max(0.1, equipValue(card, player) - value);
                                        }
                                        if (typeof equipValue != 'number') equipValue = 0;
                                        if (method == 'raw') return equipValue;
                                        if (method == 'raw2') return equipValue - value;
                                        return Math.max(0.1, equipValue - value);
                                    },
                                },
                                result: {
                                    target: (player, target, card) => get.equipResult(player, target, card.name),
                                },
                            },
                        },
                        // 【弩机】
                        // 每回合你使用的第一张【攻】不计入使用次数.
                        nuji_Angel: {
                            audio: true,
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip5',
                            skills: ['nuji_skill'],
                            enable: true,
                            selectTarget: -1,
                            filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                            },
                            toself: true,
                            ai: {
                                basic: {
                                    equipValue: 6,
                                    order(card, player) {
                                        const equipValue = get.equipValue(card, player) / 20;
                                        return player && player.hasSkillTag('reverseEquip') ? 8.5 - equipValue : 8 + equipValue;
                                    },
                                    useful: 2,
                                    value(card, player, index, method) {
                                        if (!player.getCards('e').includes(card) && !player.canEquip(card, true)) return 0.01;
                                        const info = get.info(card),
                                            current = player.getEquip(info.subtype),
                                            value = current && card != current && get.value(current, player);
                                        let equipValue = info.ai.equipValue || info.ai.basic.equipValue;
                                        if (typeof equipValue == 'function') {
                                            if (method == 'raw') return equipValue(card, player);
                                            if (method == 'raw2') return equipValue(card, player) - value;
                                            return Math.max(0.1, equipValue(card, player) - value);
                                        }
                                        if (typeof equipValue != 'number') equipValue = 0;
                                        if (method == 'raw') return equipValue;
                                        if (method == 'raw2') return equipValue - value;
                                        return Math.max(0.1, equipValue - value);
                                    },
                                },
                                result: {
                                    target: (player, target, card) => get.equipResult(player, target, card.name),
                                },
                            },
                        },
                        // 【拒马】
                        // 装备车骑牌的角色对你使用普通【攻】后,其交给你1张牌.
                        juma_Angel: {
                            audio: true,
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip5',
                            skills: ['juma_skill'],
                            enable: true,
                            selectTarget: -1,
                            filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                            },
                            toself: true,
                            ai: {
                                basic: {
                                    equipValue: 6,
                                    order(card, player) {
                                        const equipValue = get.equipValue(card, player) / 20;
                                        return player && player.hasSkillTag('reverseEquip') ? 8.5 - equipValue : 8 + equipValue;
                                    },
                                    useful: 2,
                                    value(card, player, index, method) {
                                        if (!player.getCards('e').includes(card) && !player.canEquip(card, true)) return 0.01;
                                        const info = get.info(card),
                                            current = player.getEquip(info.subtype),
                                            value = current && card != current && get.value(current, player);
                                        let equipValue = info.ai.equipValue || info.ai.basic.equipValue;
                                        if (typeof equipValue == 'function') {
                                            if (method == 'raw') return equipValue(card, player);
                                            if (method == 'raw2') return equipValue(card, player) - value;
                                            return Math.max(0.1, equipValue(card, player) - value);
                                        }
                                        if (typeof equipValue != 'number') equipValue = 0;
                                        if (method == 'raw') return equipValue;
                                        if (method == 'raw2') return equipValue - value;
                                        return Math.max(0.1, equipValue - value);
                                    },
                                },
                                result: {
                                    target: (player, target, card) => get.equipResult(player, target, card.name),
                                },
                            },
                        },
                        // 【竹篮】
                        // 你的手牌上限+1.
                        zhulan_Angel: {
                            audio: true,
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip5',
                            skills: ['zhulan_skill'],
                            enable: true,
                            selectTarget: -1,
                            filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                            },
                            toself: true,
                            ai: {
                                basic: {
                                    equipValue: 6,
                                    order(card, player) {
                                        const equipValue = get.equipValue(card, player) / 20;
                                        return player && player.hasSkillTag('reverseEquip') ? 8.5 - equipValue : 8 + equipValue;
                                    },
                                    useful: 2,
                                    value(card, player, index, method) {
                                        if (!player.getCards('e').includes(card) && !player.canEquip(card, true)) return 0.01;
                                        const info = get.info(card),
                                            current = player.getEquip(info.subtype),
                                            value = current && card != current && get.value(current, player);
                                        let equipValue = info.ai.equipValue || info.ai.basic.equipValue;
                                        if (typeof equipValue == 'function') {
                                            if (method == 'raw') return equipValue(card, player);
                                            if (method == 'raw2') return equipValue(card, player) - value;
                                            return Math.max(0.1, equipValue(card, player) - value);
                                        }
                                        if (typeof equipValue != 'number') equipValue = 0;
                                        if (method == 'raw') return equipValue;
                                        if (method == 'raw2') return equipValue - value;
                                        return Math.max(0.1, equipValue - value);
                                    },
                                },
                                result: {
                                    target: (player, target, card) => get.equipResult(player, target, card.name),
                                },
                            },
                        },
                        // 【推车】
                        // 出牌阶段每名角色限一次,你可将1张手牌交给一名其他角色.
                        tuiche_Angel: {
                            audio: true,
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip5',
                            skills: ['tuiche_skill'],
                            enable: true,
                            selectTarget: -1,
                            filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                            },
                            toself: true,
                            ai: {
                                basic: {
                                    equipValue: 6,
                                    order(card, player) {
                                        const equipValue = get.equipValue(card, player) / 20;
                                        return player && player.hasSkillTag('reverseEquip') ? 8.5 - equipValue : 8 + equipValue;
                                    },
                                    useful: 2,
                                    value(card, player, index, method) {
                                        if (!player.getCards('e').includes(card) && !player.canEquip(card, true)) return 0.01;
                                        const info = get.info(card),
                                            current = player.getEquip(info.subtype),
                                            value = current && card != current && get.value(current, player);
                                        let equipValue = info.ai.equipValue || info.ai.basic.equipValue;
                                        if (typeof equipValue == 'function') {
                                            if (method == 'raw') return equipValue(card, player);
                                            if (method == 'raw2') return equipValue(card, player) - value;
                                            return Math.max(0.1, equipValue(card, player) - value);
                                        }
                                        if (typeof equipValue != 'number') equipValue = 0;
                                        if (method == 'raw') return equipValue;
                                        if (method == 'raw2') return equipValue - value;
                                        return Math.max(0.1, equipValue - value);
                                    },
                                },
                                result: {
                                    target: (player, target, card) => get.equipResult(player, target, card.name),
                                },
                            },
                        },
                        // 【商贾】
                        // 出牌阶段每名角色限一次,你可交给一名其他角色1张手牌或令其获取你1点智谋你获得其1张手牌.
                        gong_Angelngjia_Angel: {
                            audio: true,
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip5',
                            skills: ['gong_Angelngjia_skill'],
                            enable: true,
                            selectTarget: -1,
                            filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                            },
                            toself: true,
                            ai: {
                                basic: {
                                    equipValue: 6,
                                    order(card, player) {
                                        const equipValue = get.equipValue(card, player) / 20;
                                        return player && player.hasSkillTag('reverseEquip') ? 8.5 - equipValue : 8 + equipValue;
                                    },
                                    useful: 2,
                                    value(card, player, index, method) {
                                        if (!player.getCards('e').includes(card) && !player.canEquip(card, true)) return 0.01;
                                        const info = get.info(card),
                                            current = player.getEquip(info.subtype),
                                            value = current && card != current && get.value(current, player);
                                        let equipValue = info.ai.equipValue || info.ai.basic.equipValue;
                                        if (typeof equipValue == 'function') {
                                            if (method == 'raw') return equipValue(card, player);
                                            if (method == 'raw2') return equipValue(card, player) - value;
                                            return Math.max(0.1, equipValue(card, player) - value);
                                        }
                                        if (typeof equipValue != 'number') equipValue = 0;
                                        if (method == 'raw') return equipValue;
                                        if (method == 'raw2') return equipValue - value;
                                        return Math.max(0.1, equipValue - value);
                                    },
                                },
                                result: {
                                    target: (player, target, card) => get.equipResult(player, target, card.name),
                                },
                            },
                        },
                        // 【铁犁】
                        // 你的摸牌数+1.
                        tieli_Angel: {
                            audio: true,
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip5',
                            skills: ['tieli_skill'],
                            enable: true,
                            selectTarget: -1,
                            filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                            },
                            toself: true,
                            ai: {
                                basic: {
                                    equipValue: 6,
                                    order(card, player) {
                                        const equipValue = get.equipValue(card, player) / 20;
                                        return player && player.hasSkillTag('reverseEquip') ? 8.5 - equipValue : 8 + equipValue;
                                    },
                                    useful: 2,
                                    value(card, player, index, method) {
                                        if (!player.getCards('e').includes(card) && !player.canEquip(card, true)) return 0.01;
                                        const info = get.info(card),
                                            current = player.getEquip(info.subtype),
                                            value = current && card != current && get.value(current, player);
                                        let equipValue = info.ai.equipValue || info.ai.basic.equipValue;
                                        if (typeof equipValue == 'function') {
                                            if (method == 'raw') return equipValue(card, player);
                                            if (method == 'raw2') return equipValue(card, player) - value;
                                            return Math.max(0.1, equipValue(card, player) - value);
                                        }
                                        if (typeof equipValue != 'number') equipValue = 0;
                                        if (method == 'raw') return equipValue;
                                        if (method == 'raw2') return equipValue - value;
                                        return Math.max(0.1, equipValue - value);
                                    },
                                },
                                result: {
                                    target: (player, target, card) => get.equipResult(player, target, card.name),
                                },
                            },
                        },
                        // 【漕运】
                        // 出牌阶段开始时,你可重铸任意张五行不同的手牌.
                        caoyun_Angel: {
                            audio: true,
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip5',
                            skills: ['caoyun_skill'],//QQQ
                            enable: true,
                            selectTarget: -1,
                            filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                            },
                            toself: true,
                            ai: {
                                basic: {
                                    equipValue: 6,
                                    order(card, player) {
                                        const equipValue = get.equipValue(card, player) / 20;
                                        return player && player.hasSkillTag('reverseEquip') ? 8.5 - equipValue : 8 + equipValue;
                                    },
                                    useful: 2,
                                    value(card, player, index, method) {
                                        if (!player.getCards('e').includes(card) && !player.canEquip(card, true)) return 0.01;
                                        const info = get.info(card),
                                            current = player.getEquip(info.subtype),
                                            value = current && card != current && get.value(current, player);
                                        let equipValue = info.ai.equipValue || info.ai.basic.equipValue;
                                        if (typeof equipValue == 'function') {
                                            if (method == 'raw') return equipValue(card, player);
                                            if (method == 'raw2') return equipValue(card, player) - value;
                                            return Math.max(0.1, equipValue(card, player) - value);
                                        }
                                        if (typeof equipValue != 'number') equipValue = 0;
                                        if (method == 'raw') return equipValue;
                                        if (method == 'raw2') return equipValue - value;
                                        return Math.max(0.1, equipValue - value);
                                    },
                                },
                                result: {
                                    target: (player, target, card) => get.equipResult(player, target, card.name),
                                },
                            },
                        },
                        // 【堪舆】
                        // 出牌阶段每名角色限一次,你可观看一名其他角色1张手牌.
                        kanzi_Angel: {
                            audio: true,
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip5',
                            skills: ['kanzi_skill'],
                            enable: true,
                            selectTarget: -1,
                            filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                            },
                            toself: true,
                            ai: {
                                basic: {
                                    equipValue: 6,
                                    order(card, player) {
                                        const equipValue = get.equipValue(card, player) / 20;
                                        return player && player.hasSkillTag('reverseEquip') ? 8.5 - equipValue : 8 + equipValue;
                                    },
                                    useful: 2,
                                    value(card, player, index, method) {
                                        if (!player.getCards('e').includes(card) && !player.canEquip(card, true)) return 0.01;
                                        const info = get.info(card),
                                            current = player.getEquip(info.subtype),
                                            value = current && card != current && get.value(current, player);
                                        let equipValue = info.ai.equipValue || info.ai.basic.equipValue;
                                        if (typeof equipValue == 'function') {
                                            if (method == 'raw') return equipValue(card, player);
                                            if (method == 'raw2') return equipValue(card, player) - value;
                                            return Math.max(0.1, equipValue(card, player) - value);
                                        }
                                        if (typeof equipValue != 'number') equipValue = 0;
                                        if (method == 'raw') return equipValue;
                                        if (method == 'raw2') return equipValue - value;
                                        return Math.max(0.1, equipValue - value);
                                    },
                                },
                                result: {
                                    target: (player, target, card) => get.equipResult(player, target, card.name),
                                },
                            },
                        },
                        gong_Angel: {
                            zhimoudian: 0,
                            audio: true,
                            fullskin: true,
                            //【刺】对你攻击范围内的一名其他角色使用.你指定目标后令目标角色的防具无效,并对目标角色造成1点伤害.
                            //【射】对一名其他角色使用.对目标角色造成1点伤害.
                            //【斩】对你攻击范围内的一名其他角色使用.对目标角色造成2点伤害.
                            nature: ['ci', 'she', 'zhan'],
                            type: 'effect',
                            zhimoudian: 0,
                            enable: true,
                            usable: 1,
                            updateUsable: 'phaseUse',
                            range(card, player, target) {
                                if (card.nature == 'she') return true;
                                return player.inRange(target);
                            },
                            selectTarget: 1,
                            cardPrompt(card) {
                                if (card.nature == 'ci') return '对你攻击范围内的一名其他角色使用.你指定目标后令目标角色的防具无效,其须使用一张【守】,否则目标角色造成1点伤害';
                                if (card.nature == 'she') return '对一名其他角色使用.其须使用一张【守】,否则目标角色造成1点伤害';
                                if (card.nature == 'zhan') return '对你攻击范围内的一名其他角色使用.其须使用一张【守】,否则目标角色造成2点伤害';
                                return '出牌阶段,对你攻击范围内的一名角色使用.其须使用一张【守】,否则你对其造成1点伤害';
                            },
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            content() {
                                'step 0';
                                if (typeof event.shouRequired != 'number' || !event.shouRequired || event.shouRequired < 0) {
                                    event.shouRequired = 1;
                                }
                                if (typeof event.baseDamage != 'number') event.baseDamage = 1;
                                if (typeof event.extraDamage != 'number') event.extraDamage = 0;
                                if (event.card.nature == 'zhan') event.baseDamage = 2;
                                ('step 1');
                                if (event.directHit || event.directHit2 || (!_status.connectMode && lib.config.skip_Shou && !target.hasShou())) {
                                    event._result = { bool: false };
                                } else if (event.skipShou) {
                                    event._result = { bool: true, result: 'Shoued' };
                                } else {
                                    var next = target.chooseToUse('请使用一张守抵消攻');
                                    next.set('type', 'respondShou');
                                    next.set('filterCard', function (card, player) {
                                        if (card.name != 'shou_Angel') return false;
                                        return lib.filter.cardEnabled(card, player, 'forceEnable');
                                    });
                                    if (event.shouRequired > 1) {
                                        next.set('prompt2', '(共需使用' + event.shouRequired + '张守)');
                                    }
                                    next.set('ai1', function (card) {
                                        var target = _status.event.player;
                                        var evt = _status.event.parent;
                                        var bool = true;
                                        if (_status.event.shouRequired > 1 && !get.is.object(card) && target.countCards('h', 'shou_Angel') < _status.event.shouRequired) {
                                            bool = false;
                                        } else if (target.hasSkillTag('useShou')) {
                                            bool = true;
                                        } else if (target.hasSkillTag('noShou')) {
                                            bool = false;
                                        } else if (get.damageEffect(target, evt.player, target, evt.card.nature) >= 0) bool = false;
                                        if (bool) {
                                            return get.order(card);
                                        }
                                        return 0;
                                    }).set('shouRequired', event.shouRequired);
                                    next.set('respondTo', [player, card]);
                                    //next.autochoose=lib.filter.autoRespondShou;
                                }
                                ('step 2');
                                if (!result || !result.bool || !result.result || result.result != 'Shoued') {
                                    event.trigger('gongHit');
                                } else {
                                    event.shouRequired--;
                                    if (event.shouRequired > 0) {
                                        event.goto(1);
                                    } else {
                                        event.trigger('gongMiss');
                                        event.responded = result;
                                    }
                                }
                                ('step 3');
                                if ((!result || !result.bool || !result.result || result.result != 'Shoued') && !event.unhurt) {
                                    target.damage(event.baseDamage + event.extraDamage);
                                    event.result = { bool: true };
                                    event.trigger('gongDamage');
                                } else {
                                    event.result = { bool: false };
                                    event.trigger('gongUnhirt');
                                }
                                event.finish();
                            },
                            ai: {
                                yingbian(card, player, targets, viewer) {
                                    if (get.attitude(viewer, player) <= 0) return 0;
                                    var base = 0,
                                        hit = false;
                                    if (get.cardtag(card, 'yingbian_hit')) {
                                        hit = true;
                                        if (
                                            targets.filter(function (target) {
                                                return target.hasShou() && get.attitude(viewer, target) < 0 && get.damageEffect(target, player, viewer, get.nature(card)) > 0;
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
                                                        !target.hasShou() ||
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
                                                        liang: true,
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
                                        target.hasShou() &&
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
                                order(item, player) {
                                    if (player.hasSkillTag('pregong', true, null, true)) return 10;
                                    if (lib.linked.includes(get.nature(item))) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return current != player && current.isLinked() && player.canUse(item, current, null, true) && get.effect(current, item, player, player) > 0 && lib.card.gong.ai.canLink(player, current, item);
                                            }) &&
                                            game.countPlayer(function (current) {
                                                return current.isLinked() && get.damageEffect(current, player, player, get.nature(item)) > 0;
                                            }) > 1
                                        )
                                            return 3.1;
                                        return 3;
                                    }
                                    return 3.05;
                                },
                                result: {
                                    target(player, target, card, isLink) {
                                        var eff = (function () {
                                            if (!isLink && player.hasSkill('liang')) {
                                                if (
                                                    !target.hasSkillTag('filterDamage', null, {
                                                        player: player,
                                                        card: card,
                                                        liang: true,
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
                                            target.hasShou() &&
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
                                tag: {
                                    respond: 1,
                                    respondShou: 1,
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
                        liang_Angel: {
                            zhimoudian: 0,
                            fullskin: true,
                            type: 'effect',
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
                            },
                            ai: {
                                basic: {
                                    order(card, player) {
                                        if (player.hasSkillTag('preliang')) return 5;
                                        return 2;
                                    },
                                    useful: [6.5, 4, 3, 2],
                                    value: [6.5, 4, 3, 2],
                                },
                                result: {
                                    target: 2,
                                    target_use(player, target) {
                                        // if(player==target&&player.hp<=0) return 2;
                                        if (player.hasSkillTag('nokeep', true, null, true)) return 2;
                                        var nd = player.needsToDiscard();
                                        var keep = false;
                                        if (nd <= 0) {
                                            keep = true;
                                        } else if (nd == 1 && target.hp >= 2 && target.countCards('h', 'liang_Angel') <= 1) {
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
                                                        return current.countCards('h', 'liang_Angel');
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
                        shou_Angel: {
                            zhimoudian: 0,
                            audio: true,
                            fullskin: true,
                            type: 'effect',
                            notarget: true,
                            nodelay: true,
                            content() {
                                event.result = 'Shoued';
                                event.parent.delayx = false;
                            },
                            ai: {
                                order: 3,
                                basic: {
                                    useful: [7, 5.1, 2],
                                    value: [7, 5.1, 2],
                                },
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        //             【瞒天过海】
                        // 出牌阶段,对判定区内没有【瞒天过海】的其他角色使用,你将此牌置入其判定区.判定区内有【瞒天过海】的角色摸牌阶段少摸1张牌,并在其摸牌阶段结束时将此牌置入弃牌堆.
                        mantianguohai_Angel: {
                            zhimoudian: 1,
                            audio: true,
                            fullskin: true,
                            type: 'special',
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            ai: {
                                basic: {
                                    order: 1,
                                    useful: 1,
                                    value: 4,
                                },
                                result: {
                                    target(player, target) {
                                        return -1.5 / Math.sqrt(target.countCards('h') + 1);
                                    },
                                },
                                tag: {
                                    skip: 'phaseDraw',
                                },
                            },
                            effect() {
                                player.addTempSkill('mantianguohai_skill', { player: 'phaseDrawEnd' });
                            },
                            selectTarget: 1,
                            enable: true,
                            content() {
                                if (lib.filter.judge(card, player, target) && cards.length && get.position(cards[0], true) == 'o') target.addJudge(card, cards);
                            },
                            allowMultiple: false,
                        },
                        // 【围魏救赵】
                        // 当一名其他角色对另一名其他角色造成伤害时,对伤害来源使用.你令其选择:1.防止此伤害;2.你对其造成1点伤害.
                        weiweijiuzhao_Angel: {
                            zhimoudian: 1,
                            audio: true,
                            fullskin: true,
                            type: 'tactics',
                            notarget: true,
                            nodelay: true,
                            content() {
                                'step 0';
                                var choiceList = ['受到来自' + get.translation(player) + '的一点伤害'];
                                choiceList.push('令此伤害无效');
                                target
                                    .chooseControl()
                                    .set('choiceList', choiceList)
                                    .set('ai', function () {
                                        if (target.hp > 2 || target.maxHp - target.hp <= 1) return 0;
                                        return 1;
                                    });
                                ('step 1');
                                if (result.control) {
                                    if (result.index == 0) target.damage();
                                    else lib._weiweiliangzhao_chooseToUse.cancel();
                                }
                                event.trigger('weiweiliangzhao_After');
                            },
                            ai: {
                                order: 3,
                                basic: {
                                    useful: [7, 5.1, 2],
                                    value: [7, 5.1, 2],
                                },
                                result: {
                                    target(player, target) {
                                        return get.attitude(player, target) <= 0;
                                    },
                                    player(player, target) {
                                        return get.attitude(player, target) <= 0;
                                    },
                                },
                                tag: {
                                    damage: 1,
                                },
                            },
                        },
                        // 			【以逸待劳】
                        // 弃牌阶段结束时,对自己使用.你摸2张牌或回复1点体力,你获得1点智谋.
                        yiyidailao_Angel: {
                            zhimoudian: 1,
                            audio: true,
                            fullskin: true,
                            type: 'tactics',
                            notarget: true,
                            nodelay: true,
                            content() {
                                'step 0';
                                var choiceList = ['摸两张牌'];
                                choiceList.push('回复一点体力值');
                                player
                                    .chooseControl()
                                    .set('choiceList', choiceList)
                                    .set('ai', function () {
                                        var player = _status.event.player;
                                        if (player.maxHp - player.hp < 2) return 0;
                                        return 1;
                                    });
                                ('step 1');
                                if (result.control) {
                                    if (result.index == 0) player.draw(2);
                                    else player.recover();
                                }
                                player.addZhimou();
                                event.trigger('yiyidailao_Angel_After');
                            },
                            ai: {
                                order: 5,
                                basic: {
                                    useful: [7, 5.1, 2],
                                    value: [7, 5.1, 2],
                                },
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        // 【声东击西】
                        // 出牌阶段,对一名有牌的其他角色使用.你弃置你与其各1张牌(没有则不弃)对其攻击范围内另一名其他角色造成1点伤害.
                        shengdongjixi_Angel: {
                            zhimoudian: 1,
                            audio: true,
                            fullskin: true,
                            type: 'tactics',
                            enable: true,
                            selectTarget: 1,
                            postAi(targets) {
                                return targets.length == 1 && targets[0].countCards('j');
                            },
                            filterTarget(card, player, target) {
                                if (player == target) return false;
                                return target.countDiscardableCards(player, get.is.single() ? 'he' : 'hej');
                            },
                            content() {
                                'step 0';
                                if (target.countDiscardableCards(player, 'hej')) {
                                    player.discardPlayerCard('hej', target, true);
                                }
                                if (player.countDiscardableCards(player, 'hej')) {
                                    player.chooseToDiscard('hej', true);
                                }
                                var target1 = target;
                                player.chooseTarget(
                                    '选择一名角色,对其造成一点伤害',
                                    (event, player, target) => {
                                        return target1.inRange(target) && target != player;
                                    },
                                    true
                                ).ai = function (target) {
                                    return get.damageEffect(target, player, player);
                                };
                                ('step 1');
                                if (result.bool && result.targets[0]) result.targets[0].damage();
                            },
                            ai: {
                                basic: {
                                    order: 9,
                                    useful: 5,
                                    value: 5,
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
                                    damage: 1,
                                    loseCard: 1,
                                    discard: 1,
                                },
                            },
                        },
                        // 【无中生有】
                        // 当你需要使用或打出1张效果牌或策略牌时,你可将此【无中生有】视为此牌使用或打出.
                        wuzhongshengyou_Angel: {
                            zhimoudian: 0,
                            audio: true,
                            fullskin: true,
                            type: 'special',
                            notarget: true,
                            nodelay: true,
                            content() { },
                            ai: {
                                order: 3,
                                basic: {
                                    useful: [7, 5.1, 2],
                                    value: [7, 5.1, 2],
                                },
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        // 【暗度陈仓】
                        // 出牌阶段,对一名有手牌的其他角色使用.其展示1张手牌你亮出牌堆顶1张牌,若两牌阴阳不同则你对其造成2点伤害.
                        anduchencang_Angel: {
                            zhimoudian: 1,
                            audio: true,
                            fullskin: true,
                            type: 'tactics',
                            enable: true,
                            filterTarget(card, player, target) {
                                //if(player!=game.me&&player.countCards('h')<2) return false;
                                return target.countCards('h') > 0 && target != player;
                            },
                            content() {
                                'step 0';
                                if (target.countCards('h') == 0) {
                                    event.finish();
                                    return;
                                } else if (target.countCards('h') == 1) event._result = { cards: target.getCards('h') };
                                else
                                    target.chooseCard(true).ai = function (card) {
                                        if (_status.event.getRand() < 0.5) return Math.random();
                                        return get.value(card);
                                    };
                                ('step 1');
                                target.showCards(result.cards);
                                event.yinyang_card = result.cards[0].yinyang;
                                ('step 2');
                                var card = get.cards()[0];
                                game.cardsGotoOrdering(card);
                                player.showCards(card);
                                if (card.yinyang != event.yinyang_card) {
                                    target.damage(2);
                                }
                            },
                            ai: {
                                basic: {
                                    order: 4,
                                    value: [3, 1],
                                    useful: 1,
                                },
                                result: {
                                    target(player, target) {
                                        if (target.countCards('h') == 0) return 0;
                                        if (player.countCards('h') <= 1) return 0;
                                        if (target == player) {
                                            if (typeof _status.event.filterCard == 'function' && _status.event.filterCard({ name: 'anduchencang_Angel' }, player, _status.event)) {
                                                return -1.15;
                                            }
                                            if (_status.event.skill) {
                                                var viewAs = get.info(_status.event.skill).viewAs;
                                                if (viewAs == 'anduchencang_Angel') return -1.15;
                                                if (viewAs && viewAs.name == 'anduchencang_Angel') return -1.15;
                                            }
                                            return 0;
                                        }
                                        return -1.15;
                                    },
                                },
                                tag: {
                                    damage: 2,
                                    norepeat: 1,
                                },
                            },
                            selectTarget: 1,
                        },
                        // 【隔岸观火】
                        // 出牌阶段,对判定区内没有【隔岸观火】的其他角色使用,你将此牌置入其判定区.若判定结果不为水,本回合内其不能对其他角色使用牌.
                        geanguanhuo_Angel: {
                            zhimoudian: 1,
                            audio: true,
                            fullskin: true,
                            type: 'special',
                            filterTarget(card, player, target) {
                                return lib.filter.judge(card, player, target) && player != target;
                            },
                            judge(card) {
                                if (get.wuxing(card) == 'shui') return 1;
                                return -2;
                            },
                            judge2(result) {
                                if (result.bool == false) return true;
                                return false;
                            },
                            effect() {
                                if (result.bool == false) {
                                    player.addTempSkill('geanguanhuo_Angel_skill');
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
                            },
                            selectTarget: 1,
                            enable: true,
                            content() {
                                if (lib.filter.judge(card, player, target) && cards.length && get.position(cards[0], true) == 'o') target.addJudge(card, cards);
                            },
                            allowMultiple: false,
                        },
                        // 【笑里藏刀】
                        // 出牌阶段,若你有至少2张牌,对一名其他角色使用.其获得你1张牌你对其造成1点伤害.
                        xiaolicangdao_Angel: {
                            zhimoudian: 1,
                            audio: true,
                            fullskin: true,
                            type: 'tactics',
                            enable: true,
                            filterTarget(card, player, target) {
                                //if(player!=game.me&&player.countCards('h')<2) return false;
                                return player.countCards('h') > 1 && target != player;
                            },
                            content() {
                                target.gainPlayerCard('he', true, player);
                                target.damage();
                            },
                            ai: {
                                basic: {
                                    order: 4,
                                    value: [3, 1],
                                    useful: 1,
                                },
                                result: {
                                    target(player, target) {
                                        var card = player.getCards('h').map((card) => card.name);
                                        if (player.countCards('h') == 2 && (card.includes('liang_Angel') || card.includes('wuzhoshengyou_Angel') || card.includes('yiyidailao_Angel') || card.includes('tieshukaihua_Angel'))) return 0;
                                        if (player.countCards('h') == 2 && card.includes('gong_Angel')) return 1;
                                    },
                                },
                                tag: {
                                    damage: 1,
                                    fireDamage: 1,
                                    natureDamage: 1,
                                    norepeat: 1,
                                },
                            },
                            selectTarget: 1,
                        },
                        // 【李代桃僵】
                        // 一名其他角色受到不少于2点伤害时,对其使用.你此伤害减少为1你失去1点体力.
                        lidaitaojiang_Angel: {
                            zhimoudian: 1,
                            audio: true,
                            fullskin: true,
                            type: 'tactics',
                            notarget: true,
                            nodelay: true,
                            content() {
                                lib._lidailiangjiang_ToUse.num--;
                                player.loseHp();
                                event.trigger('lidaitaojiang_Angel_After');
                            },
                            ai: {
                                order: 3,
                                basic: {
                                    useful: [7, 5.1, 2],
                                    value: [7, 5.1, 2],
                                },
                                result: {
                                    target(player, target) {
                                        return get.attitude(player, target) > 4 && player.hp > 1;
                                    },
                                    player(player, target) {
                                        return get.attitude(player, target) > 4 && player.hp > 1;
                                    },
                                },
                            },
                        },
                        // 【顺手牵羊】
                        // 出牌阶段,对一名区域内有牌的其他角色使用.你获得其区域内的1张牌.
                        shunshouqianyang_Angel: {
                            zhimoudian: 1,
                            audio: true,
                            fullskin: true,
                            type: 'tactics',
                            enable: true,
                            selectTarget: 1,
                            postAi(targets) {
                                return targets.length == 1 && targets[0].countCards('j');
                            },
                            filterTarget(card, player, target) {
                                if (player == target) return false;
                                return target.countGainableCards(player, get.is.single() ? 'he' : 'hej') > 0;
                            },
                            content() {
                                var position = get.is.single() ? 'he' : 'hej';
                                if (target.countGainableCards(player, position)) {
                                    player.gainPlayerCard(position, target, true);
                                }
                            },
                            ai: {
                                basic: {
                                    order: 7.5,
                                    useful: 4,
                                    value: 9,
                                },
                                result: {
                                    target(player, target) {
                                        if (get.attitude(player, target) <= 0)
                                            return target.countCards('he', function (card) {
                                                return get.value(card, target) > 0 && card != target.getEquip('jinhe');
                                            }) > 0
                                                ? -1.5
                                                : 1.5;
                                        return target.countCards('ej', function (card) {
                                            if (get.position(card) == 'e') return get.value(card, target) <= 0;
                                            var cardj = card.viewAs ? { name: card.viewAs } : card;
                                            return get.effect(target, cardj, target, player) < 0;
                                        }) > 0
                                            ? 1.5
                                            : -1.5;
                                    },
                                    player(player, target) {
                                        if (
                                            get.attitude(player, target) < 0 &&
                                            !target.countCards('he', function (card) {
                                                return get.value(card, target) > 0 && card != target.getEquip('jinhe');
                                            })
                                        ) {
                                            return 0;
                                        }
                                        if (get.attitude(player, target) > 1) {
                                            return target.countCards('ej', function (card) {
                                                if (get.position(card) == 'e') return get.value(card, target) <= 0;
                                                var cardj = card.viewAs ? { name: card.viewAs } : card;
                                                return get.effect(target, cardj, target, player) < 0;
                                            }) > 0
                                                ? 1.5
                                                : -1.5;
                                        }
                                        return 1;
                                    },
                                },
                                tag: {
                                    loseCard: 1,
                                    gain: 1,
                                },
                            },
                        },
                        // 【借尸还魂】
                        // 出牌阶段,对自己使用.获得一名本局游戏中已被淘汰的武将的一个技能(发动一次后失去).
                        jieshihuanhun_Angel: {
                            audio: true,
                            zhimoudian: 1,
                            fullskin: true,
                            type: 'tactics',
                            enable(card, player) {
                                return game.filterPlayer2().length > game.filterPlayer().length;
                            },
                            selectTarget: -1,
                            toself: true,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('是否获得一名已死亡角色的一个技能？')
                                    .set('chara', event.chara)
                                    .set('skills', event.skills)
                                    .set('chosen', event.chosen)
                                    .set('filterTarget', function (card, player, target) {
                                        return !game.filterPlayer().includes(target);
                                    })
                                    .set('deadTarget', true)
                                    .set('ai', function (target) {
                                        var skills = [];
                                        skills.addArray(
                                            (lib.character[target.name][3] || []).filter(function (skill) {
                                                var info = get.info(skill);
                                                return info && !info.limited && !info.juexingji && !info.hiddenSkill && !info.charlotte && !info.dutySkill && !info.forced;
                                            })
                                        );
                                        if (skills.length) return 10;
                                        return 0;
                                    });
                                ('step 1');
                                if (!result.bool) event.finish();
                                else {
                                    var skills = [];
                                    skills.addArray(
                                        (lib.character[result.targets[0].name][3] || []).filter(function (skill) {
                                            var info = get.info(skill);
                                            return info && !info.limited && !info.juexingji && !info.hiddenSkill && !info.charlotte && !info.dutySkill && !info.forced;
                                        })
                                    );
                                    if (skills.length) {
                                        event.videoId = lib.status.videoId++;
                                        var func = function (skills, id, target) {
                                            var dialog = ui.create.dialog('forcebutton');
                                            dialog.videoId = id;
                                            dialog.add('【借尸还魂】:获得一个技能');
                                            for (let i = 0; i < skills.length; i++) {
                                                dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【' + get.translation(skills[i]) + '】</div><div>' + lib.translate[skills[i] + '_info'] + '</div></div>');
                                            }
                                            dialog.addText(' <br> ');
                                        };
                                        if (player.isOnline()) player.send(func, skills, event.videoId, player);
                                        else if (player == game.me) func(skills, event.videoId, player);
                                        player.chooseControl(skills);
                                    } else {
                                        game.log(result.targets[0], '没有任何可以利用的地方');
                                    }
                                }
                                ('step 2');
                                if (result.control) {
                                    var temp = [result.control];
                                    if (lib.skill[result.control].group) {
                                        for (const i of lib.skill[result.control].group) temp.add(i);
                                    }
                                    player.temp = {};
                                    player.temp[result.control] = temp;
                                    player.addTempSkill(result.control, result.control + 'jieshu');
                                    game.broadcastAll('closeDialog', event.videoId);
                                }
                            },
                            ai: {
                                basic: {
                                    order: 7.2,
                                    useful: 4.5,
                                    value() {
                                        if (game.filterPlayer2().length > game.filterPlayer().length) return 5;
                                        return 0;
                                    },
                                },
                                result: {
                                    target: 2,
                                },
                                tag: {
                                    draw: 2,
                                },
                            },
                        },
                        // 【调虎离山】
                        // 出牌阶段,对一名其他角色使用.本回合你与其的距离为1且本回合其不能响应你使用的牌.
                        diaohuligong_Angeln_Angel: {
                            zhimoudian: 1,
                            audio: true,
                            fullskin: true,
                            type: 'tactics',
                            enable: true,
                            selectTarget: 1,
                            filterTarget(card, player, target) {
                                if (player == target) return false;
                                return true;
                            },
                            content() {
                                player.From[target.name] = [1, 'false'];
                                player._Hit.add([target, 'false']);
                            },
                            ai: {
                                basic: {
                                    order: 9,
                                    useful: 4,
                                    value: 5,
                                },
                                result: {
                                    target: -1.5,
                                    player(player, target, card) {
                                        if (
                                            player.hasSkillTag(
                                                'directHit_ai',
                                                true,
                                                {
                                                    target: target,
                                                    card: card,
                                                },
                                                true
                                            )
                                        ) {
                                            return 0;
                                        }
                                        if (get.damageEffect(target, player, target) > 0 && get.attitude(player, target) > 0 && get.attitude(target, player) > 0) {
                                            return 0;
                                        }
                                        var hs = player.getCards('h', 'gong_Angel');
                                        if (hs.length == 0) return -2;
                                        return -0.5;
                                    },
                                },
                            },
                        },
                        // 【釜底抽薪】
                        // 出牌阶段,对一名有手牌的其他角色使用.你失去1点体力并观看其手牌将其中的至多2张牌移出游戏,其下回合开始时从游戏外获得因此失去的牌.
                        fudichouxin_Angel: {
                            zhimoudian: 1,
                            audio: true,
                            fullskin: true,
                            type: 'tactics',
                            enable: true,
                            selectTarget: 1,
                            filterTarget(card, player, target) {
                                return target.countCards('h') && target != player;
                            },
                            content() {
                                'step 0';
                                player.loseHp();
                                player.chooseButton(['选择两张牌移除游戏', target.getCards('h')], [1, 2]).set('ai', function (button) {
                                    var val = get.buttonValue(button);
                                    if (get.attitude(_status.event.player, get.owner(button.link)) <= 0) return 10 + val;
                                    if (val <= 0) return 20;
                                    return 1 / val;
                                });
                                ('step 1');
                                target.addToExpansion(result.links, target, 'give').set('log', false).gaintag.add('fudichouxin_Angel_Mark');
                                target.addSkill('fudichouxin_Angel_skill');
                            },
                            ai: {
                                basic: {
                                    order: 9,
                                    useful: 5,
                                    value: 5,
                                },
                                result: {
                                    target(player, target) {
                                        var att = get.attitude(player, target);
                                        var nh = target.countCards('h');
                                        var noh = nh == 0 || target.hasSkillTag('noh');
                                        if (noh) return 0;
                                        if (att <= 0 && !target.countCards('h')) return 1.5;
                                        return -1.5;
                                    },
                                },
                            },
                        },
                        // 【金蝉脱壳】
                        // 当1张【攻】或策略牌即将对你生效时使用.此牌对你失效你摸1张牌.
                        jinchantuoqiao_Angel: {
                            zhimoudian: 1,
                            audio: true,
                            fullskin: true,
                            type: 'tactics',
                            notarget: true,
                            nodelay: true,
                            content() {
                                player.draw();
                                lib._jinchantuoqiao_ToUse.targets.remove(player);
                                lib._jinchantuoqiao_ToUse.parent.triggeredTargets2.remove(player);
                                lib._jinchantuoqiao_ToUse.untrigger();
                                event.trigger('jinchantuoqiao_Angel_After');
                            },
                            ai: {
                                order: 3,
                                basic: {
                                    useful: [7, 5.1, 2],
                                    value: [7, 5.1, 2],
                                },
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        // 【远交近攻】
                        // 出牌阶段,对一名你与其距离大于1的角色使用.你交给其1张牌(无牌则改为<令其摸1张牌>)视为你对一名你与其距离不大于1的其他角色使用1张不计入使用次数的【攻】.
                        yuanjiaojingong_Angel: {
                            audio: true,
                            zhimoudian: 1,
                            fullskin: true,
                            type: 'tactics',
                            enable: true,
                            selectTarget: 1,
                            toself: true,
                            filterTarget(card, player, target) {
                                return target != player && get.distance(player, target) > 1;
                            },
                            modTarget: true,
                            content() {
                                'step 0';
                                if (player.countCards('he')) {
                                    player.chooseCard('he', true, '选择交给' + get.translation(target) + '的牌').set('ai', function (card) {
                                        return 11 - get.value(card) || card.name == 'shou_Angel' || card.name == 'jinchantuoqiao_Angel';
                                    });
                                } else target.draw();
                                ('step 1');
                                if (result.bool) {
                                    target.gain(result.cards, 'gain2');
                                }
                                var target1 = target;
                                if (
                                    game.filterPlayer().filter((current) => {
                                        return get.distance(player, current) <= 1 || get.distance(target1, current) <= 1;
                                    }).length
                                ) {
                                    player.chooseUseTarget(
                                        '视为使用一张【攻】',
                                        { name: 'gong_Angel' },
                                        false,
                                        'nodistance',
                                        game.filterPlayer().filter((current) => {
                                            return get.distance(player, current) <= 1 || get.distance(target1, current) <= 1;
                                        })
                                    );
                                }
                            },
                            ai: {
                                basic: {
                                    order: 4,
                                    value: [3, 1],
                                    useful: 1,
                                },
                                result: {
                                    target(player, target) {
                                        return get.attitude(player, target) > 4;
                                    },
                                    player(player, target) {
                                        return get.attitude(player, target) > 4;
                                    },
                                },
                            },
                            selectTarget: 1,
                        },
                        // 【偷梁换柱】
                        // 出牌阶段,若你有至少2张牌,对一名其他角色使用.你交给其1张牌将其区域内1张牌分配给任一角色.
                        toulianghuanzhu_Angel: {
                            zhimoudian: 1,
                            audio: true,
                            fullskin: true,
                            type: 'tactics',
                            enable: true,
                            filterTarget(card, player, target) {
                                //if(player!=game.me&&player.countCards('h')<2) return false;
                                return player.countCards('he') > 1 && target != player;
                            },
                            content() {
                                'step 0';
                                player.chooseCard('he', true, '选择交给' + get.translation(target) + '的牌').set('ai', function (card) {
                                    // AI认为应该选择价值最低的牌
                                    return 7 - get.value(card);
                                });
                                ('step 1');
                                if (result.bool) {
                                    target.gain(result.cards, 'gain2');
                                    player.choosePlayerCard('选择一张牌,交给任意一名角色', true, target, 'hej').set('ai', function (b) {
                                        return 11 - get.value(b.link);
                                    });
                                }
                                ('step 2');
                                if (result.bool) {
                                    event.cards1 = result.cards;
                                    player.chooseTarget('选择将该牌交给一名角色', true).set('ai', (target) => {
                                        return get.attitude(player, target) > 4 || player == target;
                                    });
                                }
                                ('step 3');
                                if (result.bool) result.targets[0].gain(event.cards1, 'gain2');
                            },
                            ai: {
                                basic: {
                                    order: 4,
                                    value: [3, 1],
                                    useful: 1,
                                },
                                result: {
                                    target(player, target) {
                                        var card = player.getCards('h').map((card) => card.name);
                                        if (player.countCards('h') == 2 && (card.includes('liang_Angel') || card.includes('wuzhoshengyou_Angel') || card.includes('yiyidailao_Angel') || card.includes('tieshukaihua_Angel'))) return 0;
                                        if (player.countCards('h') == 2 && card.includes('gong_Angel')) return 1;
                                    },
                                    player(player, target) {
                                        var card = player.getCards('h').map((card) => card.name);
                                        if (player.countCards('h') == 2 && (card.includes('liang_Angel') || card.includes('wuzhoshengyou_Angel') || card.includes('yiyidailao_Angel') || card.includes('tieshukaihua_Angel'))) return 0;
                                        if (player.countCards('h') == 2 && card.includes('gong_Angel')) return 1;
                                    },
                                },
                            },
                            selectTarget: 1,
                        },
                        // 【上屋抽梯】
                        // 当1张【攻】或策略牌即将对你生效时,对此牌使用者使用.你依次弃置其区域内2张牌.
                        shangwuchouti_Angel: {
                            zhimoudian: 1,
                            audio: true,
                            fullskin: true,
                            type: 'tactics',
                            notarget: true,
                            nodelay: true,
                            content() {
                                player.discardPlayerCard('he', true, lib.shangwuchouti_Angel_ToUse.player);
                                player.discardPlayerCard('he', true, lib.shangwuchouti_Angel_ToUse.player);
                                event.trigger('shangwuchouti_Angel_After');
                            },
                            ai: {
                                order: 3,
                                basic: {
                                    useful: [7, 5.1, 2],
                                    value: [7, 5.1, 2],
                                },
                                result: {
                                    target(player, target) {
                                        return get.attitude(player, target) <= 0;
                                    },
                                    player(player, target) {
                                        return get.attitude(player, target) <= 0;
                                    },
                                },
                            },
                        },
                        // 【树上开花】
                        // 出牌阶段,对自己使用.你摸4张牌弃置2张牌.
                        shushangkaihua_Angel: {
                            audio: true,
                            zhimoudian: 1,
                            fullskin: true,
                            type: 'tactics',
                            enable: true,
                            selectTarget: -1,
                            toself: true,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                target.draw(4);
                                target.chooseToDiscard(2, true);
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
                                    draw: 4,
                                },
                            },
                        },
                        // 【反客为主】
                        // 回合外,当一名角色对另一名其他角色造成伤害时,对伤害来源使用.你摸1张牌并将伤害来源改为你.
                        fankeweizhu_Angel: {
                            zhimoudian: 1,
                            audio: true,
                            fullskin: true,
                            type: 'tactics',
                            notarget: true,
                            nodelay: true,
                            content() {
                                lib._fankeweizhu_ToUse.source = player;
                                player.draw();
                                event.trigger('fankeweizhu_Angel_After');
                            },
                            ai: {
                                order: 3,
                                basic: {
                                    useful: [7, 5.1, 2],
                                    value: [7, 5.1, 2],
                                },
                                result: {
                                    target(player, target) {
                                        return get.attitude(player, target) <= 0;
                                    },
                                    player(player, target) {
                                        return get.attitude(player, target) <= 0;
                                    },
                                },
                            },
                        },
                        // 【走为上计】
                        // 一名角色进入濒死状态时,对其使用.其体力回复至1移出游戏直到其下回合开始.
                        zouweishangji_Angel: {
                            zhimoudian: 1,
                            audio: true,
                            fullskin: true,
                            type: 'tactics',
                            notarget: true,
                            nodelay: true,
                            content() {
                                'step 0';
                                target.recover(1 - target.hp);
                                ('step 1');
                                target.addTempSkill('zouweigong_Angelngji_chooseToUse_yc', { player: 'phaseBegin' });
                                event.trigger('zouweishangji_Angel_After');
                            },
                            ai: {
                                order: 5,
                                basic: {
                                    useful: [7, 5.1, 2],
                                    value: [7, 5.1, 2],
                                },
                                result: {
                                    target: 2,
                                    target_use(player, target) {
                                        // if(player==target&&player.hp<=0) return 2;
                                        if (player.hasSkillTag('nokeep', true, null, true)) return 2;
                                        var nd = player.needsToDiscard();
                                        var keep = false;
                                        if (nd <= 0) {
                                            keep = true;
                                        } else if (nd == 1 && target.hp >= 2 && target.countCards('h', 'liang_Angel') <= 1) {
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
                                                        return current.countCards('h', 'liang_Angel');
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
                    },
                    translate: {
                        //装备
                        bishou_Angel: '匕首',
                        bishou_Angel_info: '你的阳普通【攻】均视为【攻·刺】',
                        anbiao_Angel: '暗镖',
                        anbiao_Angel_info: '你可以将2张阴阳不同的【攻】当作一张不可被响应的普通【攻】使用',
                        duandao_Angel: '短刀',
                        duandao_Angel_info: '你可以将1张普通【攻】和另1张手牌当作【攻·斩】使用',
                        changmao_Angel: '长矛',
                        changmao_Angel_info: '你的【攻·刺】造成的伤害+1',
                        yinggong_Angel: '硬弓',
                        yinggong_Angel_info: '你的阳普通【攻】均视为【攻·射】',
                        jiche_Angel: '藉车',
                        jiche_Angel_info: '你的【攻·射】指定目标后,目标角色与其距离为1的其他角色成为此【攻·射】额外目标',
                        qingjia_Angel: '轻甲',
                        qingjia_Angel_info: '当你受到伤害时,你可消耗任意点智谋减少等量伤害',
                        banjia_Angel: '板甲',
                        banjia_Angel_info: '当你成为1张【攻】的目标后,你可将1张与此【攻】五行相同的手牌当【守】使用',
                        yuandun_Angel: '圆盾',
                        yuandun_Angel_info: '你的阳【攻】可以当作【守】使用或打出',
                        tiedun_Angel: '铁盾',
                        tiedun_Angel_info: '【攻·刺】和【攻·射】对你无效',
                        zhongjia_Angel: '重甲',
                        zhongjia_Angel_info: '阳普通【攻】和【攻·斩】对你无效',
                        yingzhai_Angel: '营寨',
                        yingzhai_Angel_info: '每回合以你为目标的第1张【攻】对你无效',
                        lijiao_Angel: '礼教',
                        lijiao_Angel_info: '出牌阶段,你可弃置1张【攻】获得1点智谋',
                        zhanbu_Angel: '占卜',
                        zhanbu_Angel_info: '你参与的博弈的博弈牌亮出时,你可用1张手牌代替其中1张博弈牌',
                        chuchui_Angel: '厨炊',
                        chuchui_Angel_info: '你对一名角色使用1张阳【粮】后,其回复1点体力',
                        dujian_Angel: '毒箭',
                        dujian_Angel_info: '你使用的【攻·射】对一名角色造成伤害时,你可弃置1张牌令此伤害+1',
                        nuji_Angel: '弩机',
                        nuji_Angel_info: '每回合你使用的第一张【攻】不计入使用次数',
                        juma_Angel: '拒马',
                        juma_Angel_info: '装备车骑牌的角色对你使用普通【攻】后,其交给你1张牌',
                        zhulan_Angel: '竹篮',
                        zhulan_Angel_info: '你的手牌上限+1',
                        tuiche_Angel: '推车',
                        tuiche_Angel_info: '出牌阶段每名角色限一次,你可将1张手牌交给一名其他角色',
                        gong_Angelngjia_Angel: '商贾',
                        gong_Angelngjia_Angel_info: '出牌阶段每名角色限一次,你可交给一名其他角色1张手牌或令其获取你1点智谋你获得其1张手牌',
                        tieli_Angel: '铁犁',
                        tieli_Angel_info: '你的摸牌数+1',
                        caoyun_Angel: '漕运',
                        caoyun_Angel_info: '出牌阶段开始时,你可重铸任意张五行不同的手牌',
                        kanzi_Angel: '堪舆',
                        kanzi_Angel_info: '出牌阶段每名角色限一次,你可观看一名其他角色1张手牌',
                        //普通卡牌
                        yuanjiaojingong_Angel: '远交近攻',
                        yuanjiaojingong_Angel_info: '出牌阶段,对一名你与其距离大于1的角色使用.你交给其1张牌(无牌则改为<令其摸1张牌>)视为你对一名你与其距离不大于1的其他角色使用1张不计入使用次数的【攻】',
                        toulianghuanzhu_Angel: '偷梁换柱',
                        toulianghuanzhu_Angel_info: '出牌阶段,若你有至少2张牌,对一名其他角色使用.你交给其1张牌将其区域内1张牌分配给任一角色',
                        zouweishangji_Angel: '走为上计',
                        zouweishangji_Angel_info: '一名角色进入濒死状态时,对其使用.其体力回复至1移出游戏直到其下回合开始',
                        shangwuchouti_Angel: '上屋抽梯',
                        shangwuchouti_Angel_info: '当1张【攻】或策略牌即将对你生效时,对此牌使用者使用.你依次弃置其区域内2张牌',
                        shushangkaihua_Angel: '树上开花',
                        shushangkaihua_Angel_info: '出牌阶段,对自己使用.你摸4张牌弃置2张牌',
                        fankeweizhu_Angel: '反客为主',
                        fankeweizhu_Angel_info: '回合外,当一名角色对另一名其他角色造成伤害时,对伤害来源使用.你摸1张牌并将伤害来源改为你',
                        fudichouxin_Angel: '釜底抽薪',
                        fudichouxin_Angel_info: '出牌阶段,对一名有手牌的其他角色使用.你失去1点体力并观看其手牌将其中的至多2张牌扣置于其武将牌上,其下回合开始时获得这些牌',
                        jinchantuoqiao_Angel: '金蝉脱壳',
                        jinchantuoqiao_Angel_info: '当1张【攻】或策略牌即将对你生效时使用.此牌对你失效你摸1张牌',
                        diaohuligong_Angeln_Angel: '调虎离山',
                        diaohuligong_Angeln_Angel_info: '出牌阶段,对一名其他角色使用.本回合你与其的距离为1且本回合其不能响应你使用的牌',
                        xiaolicangdao_Angel: '笑里藏刀',
                        xiaolicangdao_Angel_info: '出牌阶段,若你有至少2张牌,对一名其他角色使用.其获得你1张牌你对其造成1点伤害',
                        shunshouqianyang_Angel: '顺手牵羊',
                        shunshouqianyang_Angel_info: '出牌阶段,对一名区域内有牌的其他角色使用.你获得其区域内的1张牌',
                        jieshihuanhun_Angel: '借尸还魂',
                        jieshihuanhun_Angel_info: '出牌阶段,对自己使用.获得一名本局游戏中已被淘汰的武将的一个技能(发动一次后失去)',
                        lidaitaojiang_Angel: '李代桃僵',
                        lidaitaojiang_Angel_info: '一名其他角色受到不少于2点伤害时,对其使用.你此伤害减少为1你失去1点体力',
                        geanguanhuo_Angel: '隔岸观火',
                        geanguanhuo_Angel_info: '出牌阶段,对判定区内没有【隔岸观火】的其他角色使用,你将此牌置入其判定区.若判定结果不为水,本回合内其不能对其他角色使用牌',
                        anduchencang_Angel: '暗渡陈仓',
                        anduchencang_Angel_info: '出牌阶段,对一名有手牌的其他角色使用.其展示1张手牌你亮出牌堆顶1张牌,若两牌阴阳不同则你对其造成2点伤害',
                        _wuzhongshengyou_chooseToUse: '转化',
                        wuzhongshengyou_Angel: '无中生有',
                        wuzhongshengyou_Angel_info: '当你需要使用或打出1张效果牌或策略牌时,你可将此【无中生有】视为此牌使用或打出',
                        shengdongjixi_Angel: '声东击西',
                        shengdongjixi_Angel_info: '出牌阶段,对一名有牌的其他角色使用.你弃置你与其各1张牌(没有则不弃)对其攻击范围内另一名其他角色造成1点伤害',
                        yiyidailao_Angel: '以逸待劳',
                        yiyidailao_Angel_info: '弃牌阶段结束时,对自己使用.你摸2张牌或回复1点体力,你获得1点智谋',
                        weiweijiuzhao_Angel: '围魏救赵',
                        weiweijiuzhao_Angel_info: '当一名其他角色对另一名其他角色造成伤害时,对伤害来源使用.你令其选择:1.防止此伤害;2.你对其造成1点伤害',
                        mantianguohai_Angel: '瞒天过海',
                        mantianguohai_Angel_info: '出牌阶段,对判定区内没有【瞒天过海】的其他角色使用,你将此牌置入其判定区.判定区内有【瞒天过海】的角色摸牌阶段少摸1张牌,并在其摸牌阶段结束时将此牌置入弃牌堆',
                        liang_Angel: '粮',
                        liang_Angel_info: '使受伤的自己或濒死角色回复1点体力',
                        shou_Angel: '守',
                        shou_Angel_info: '成为任意【攻】的目标时使用,抵消这张牌',
                        gong_Angel: '攻',
                        gong_Angel_info: '对你攻击范围内的一名其他角色使用.对目标角色造成1点伤害',
                    },
                };
                for (const i in QQQ.card) {
                    const info = QQQ.card[i];
                    info.image = `ext:列疆/img/card/${i}.png`;
                    lib.inpile.add(i);
                    if (info.mode && !info.mode.includes(lib.config.mode)) continue;
                    lib.card.list.push([lib.suits.randomGet(), lib.number.randomGet(), i]);
                }
                lib.config.all.cards.add('列疆');
                lib.config.cards.add('列疆');
                lib.translate.列疆_card_config = '列疆';
                return QQQ;
            });
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const pack = {
                    name: '列疆',
                    connect: true,
                    character: {
                        // guanzhong_sankoo:['male', 'qun', 4, ['mingzheng_sankoo', 'mougu_sankoo'], [],[2,3]],
                        // sunwu_Angel: ['male', 'qun', 3, ['taolue_sankoo', 'mouhui_sankoo'], []],
                        yangyouji_Angel: ['male', 'qun', 4, ['zongbing_Angel', 'sheque_Angel'], [], [3, 3]], //[初始智谋,初始智谋上限],不写此数组则默认为[3,5]
                        // yanhui_Angel: ['male', 'qun', 3, ['fusheng_sankoo', 'haoxue_sankoo'], []],
                        // jichonger_Angel: ['male', 'qun', 4, ['wangwai_sankoo', 'zhuoba_sankoo'], []],
                        // linxiangru_Angel: ['male', 'qun', 3, ['wanbi_sankoo', 'kuiwu_sankoo'], []],
                        // quyuan_Angel: ['male', 'qun', 4, ['aiying_sankoo', 'xiufa_sankoo'], []],
                        baiqi_Angel: ['male', 'qun', 4, ['shanji_sankoo', 'tulu_sankoo'], []],
                        // pangjuan_Angel: ['male', 'qun', 4, ['duneng_sankoo', 'jiwu_sankoo'], []],
                        xianzhen_Angel: ['male', 'qun', 4, ['fubing_Angel', 'yanggong_Angel'], []],
                        // tianwen_Angel: ['male', 'qun', 3, ['guangna_Angel', 'jiaogong_Angel'], []],
                        zhaosheng_Angel: ['male', 'qun', 3, ['zongfan_Angel', 'cixiang_Angel'], []],
                        zhangmengtan_Angel: ['male', 'qun', 3, ['youshui_Angel', 'tuiyin_Angel'], []],
                        huangxie_Angel: ['male', 'qun', 3, ['guguo_Angel', 'biancai_Angel'], []],
                        weiwuji_Angel: ['male', 'qun', 3, ['qiefu_Angel', 'zongshou_Angel'], []],
                        jiying_Angel: ['female', 'qun', 3, ['lianyin_Angel'], []],
                        ganlong_Angel: ['male', 'qun', 3, ['zhefu_Angel', 'houdong_Angel'], []],
                        jifa_Angel: ['male', 'qun', 4, ['guazhan_Angel', 'xiguo_Angel'], []],
                        zhaowuxu_Angel: ['male', 'qun', 4, ['sishou_Angel', 'shoyu_Angel'], []],
                        yingkai_Angel: ['male', 'qun', 5, ['qinshu_Angel', 'farong_Angel'], []],
                        liji_Angel: ['female', 'qun', 3, ['dixian_Angel', 'jiluan_Angel'], []],
                        weiji_Angel: ['male', 'qun', 4, ['yujiang_Angel', 'bianfa_Angel'], []],
                        weisi_Angel: ['male', 'qun', 4, ['gebi_Angel'], []],
                        zhaoji_Angel: ['male', 'qun', '3/4', ['yingyi_Angel'], []],
                        hanqian_Angel: ['male', 'qun', 4, ['weishu_Angel'], []],
                    },
                    characterSort: {
                        列疆: {
                            wenwuliezhuan: ['zhangmengtan_Angel', 'xianzhen_Angel'],
                            zhaoguosigongzi: ['weiwuji_Angel', 'huangxie_Angel', 'zhaosheng_Angel', 'tianwen_Angel'],
                            dazhoutianzi: ['jifa_Angel'],
                            quanchenfengyun: ['ganlong_Angel', 'zhaowuxu_Angel'],
                            zhuhoshijia: ['hanqian_Angel', 'zhaoji_Angel', 'weisi_Angel', 'weiji_Angel', 'yingkai_Angel'],
                            zongshifengyun: ['liji_Angel', 'jiying_Angel'],
                        },
                    },
                    characterTitle: {
                        sunwu_Angel: '孙子',
                        yangyouji_Angel: '百步穿杨',
                        yanhui_Angel: '子渊',
                        jichonger_Angel: '晋文公',
                        linxiangru_Angel: '完璧归赵',
                        quyuan_Angel: '三闾大夫',
                        baiqi_Angel: '武安君',
                        pangjuan_Angel: '上将军',
                        tianwen_Angel: '孟尝君',
                        zhaosheng_Angel: '平原君',
                        zhangmengtan_Angel: '平原君',
                        huangxie_Angel: '春申君',
                        weiwuji_Angel: '信陵君',
                        jifa_Angel: '周武王',
                        zhaowuxu_Angel: '赵襄子',
                        yingkai_Angel: '秦襄公',
                        weisi_Angel: '魏文侯',
                        zhaoji_Angel: '赵烈侯',
                        hanqian_Angel: '韩景侯',
                        weiji_Angel: '魏武侯',
                    },
                    skill: {
                        //装备技能
                        //出牌阶段,你可弃置1张【攻】获得1点智谋.
                        lijiao_skill: {
                            enable: 'phaseUse',
                            filterCard: (card) => card.name == 'gong_Angel',
                            content() {
                                player.addZhimou();
                            },
                        },
                        zhanbu_skill: {
                            trigger: {
                                player: 'chessCardShowBefore',
                            },
                            filter(event, player) {
                                return event.card1 && event.card2;
                            },
                            content() {
                                'step 0';
                                player.chooseCard('是否发动【占卜】？:选择一张手牌,替换其中一张博弈牌', 'h');
                                ('step 1');
                                if (result.bool) {
                                    event.cardzb = result.cards[0];
                                    player.chooseButton(['选择需要替换的博弈牌', get.translation(player) + '的牌', [trigger.card1], get.translation(trigger.target) + '的牌', [trigger.card2]]);
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.gain(result.links[0], 'gain2');
                                    if (result.links[0] == trigger.card1) {
                                        trigger.card1 = event.cardzb;
                                    } else {
                                        trigger.card2 = event.cardzb;
                                    }
                                }
                            },
                        },
                        chuchui_skill: {
                            trigger: {
                                player: 'useCardEnd',
                            },
                            filter(event, player) {
                                return event.targets.length && event.card.yinyang == 'yang' && event.card.name == 'liang';
                            },
                            forced: true,
                            content() {
                                trigger.target.recover();
                            },
                        },
                        dujian_skill: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'gong' && event.card.nature == 'she';
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseCard('是否发动【毒箭】？:弃置一张牌令此伤害+1', 'he').set('ai', function (card) {
                                    if (_status.event.goon) {
                                        return 8 - get.value(card);
                                    }
                                    return 0;
                                });
                                ('step 1');
                                if (result.bool) {
                                    trigger.num++;
                                }
                            },
                        },
                        nuji_skill: {
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'gong') return num + 1;
                                },
                            },
                        },//QQQ
                        juma_skill: {
                            trigger: {
                                target: 'useCardToTarget',
                            },
                            forced: true,
                            filter(event) {
                                return event.player.getEquips(3).length && event.player.countCards('he') > 0;
                            },
                            content() {
                                'step 0';
                                trigger.player.chooseCard('选择一张牌交给' + player, true, 'he').set('ai', function (card) {
                                    if (_status.event.goon) {
                                        return 8 - get.value(card);
                                    }
                                    return 0;
                                });
                                ('step 1');
                                if (result.bool) player.gain(result.cards, 'gain');
                            },
                        },
                        zhulan_skill: {
                            mod: {
                                maxHandcard(player, num) {
                                    return num + 1;
                                },
                            },
                        },
                        tuiche_skill: {
                            enable: 'phaseUse',
                            filterCard: true,
                            selectCard: 1,
                            discard: false,
                            subSkill: { 1: {} },
                            lose: false,
                            delay: 0,
                            filterTarget(card, player, target) {
                                return player != target && !target.hasSkill('tuiche_skill_1');
                            },
                            check(card) {
                                if (ui.selected.cards.length > 1) return 0;
                                if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') return 0;
                                if (!ui.selected.cards.length && card.name == 'du') return 20;
                                const player = get.owner(card);
                                let num = 0;
                                const evt2 = _status.event.parent;
                                player.getHistory('lose', (evt) => {
                                    if (evt.parent.skill == 'rende' && evt.getParent(3) == evt2) num += evt.cards.length;
                                });
                                return 10 - get.value(card);
                            },
                            async content(event, trigger, player) {
                                player.give(event.cards, event.target);
                                event.target.addTempSkill('tuiche_skill_1');
                            },
                            ai: {
                                order(skill, player) {
                                    if (player.hp < player.maxHp && player.storage.rende < 2 && player.countCards('h') > 1) {
                                        return 10;
                                    }
                                    return 1;
                                },
                                result: {
                                    target(player, target) {
                                        if (target.hasSkillTag('nogain')) return 0;
                                        if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
                                            return target.hasSkillTag('nodu') ? 0 : -10;
                                        }
                                        if (target.hasJudge('lebu')) return 0;
                                        const nh = target.countCards('h');
                                        const np = player.countCards('h');
                                        return Math.max(1, 5 - nh);
                                    },
                                },
                                effect: {
                                    target(card, player, target) {
                                        if (player == target && get.type(card) == 'equip') {
                                            if (player.countCards('e', { subtype: get.subtype(card) })) {
                                                const players = game.filterPlayer();
                                                for (const i of players) {
                                                    if (i != player && get.attitude(player, i) > 0) {
                                                        return 0;
                                                    }
                                                }
                                            }
                                        }
                                    },
                                },
                                threaten: 0.8,
                            },
                        },
                        gong_Angelngjia_skill: {},
                        tieli_skill: {
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            forced: true,
                            preHidden: true,
                            filter(event, player) {
                                return !event.numFixed;
                            },
                            content() {
                                trigger.num++;
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        caoyun_skill: {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseCard(
                                    (card, player) => {
                                        if (ui.selected.cards.length) {
                                            var wuxing = ui.selected.cards.map((a) => a.wuxing);
                                            return !wuxing.includes(card.wuxing);
                                        }
                                        return true;
                                    },
                                    [1, Infinity],
                                    '是否发动【漕运】？:选择需要重铸的牌'
                                )
                                    .set('complexCard', true);
                                ('step 1');
                                if (result.bool) {
                                    player.discard(result.cards);
                                    player.draw(result.cards.length);
                                }
                            },
                        },
                        kanzi_skill: {
                            subSkill: {
                                1: {},
                            },
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return player != target && target.countCards('h') && !target.hasSkill('kanzi_skill_1');
                            },
                            content() {
                                target.addTempSkill('kanzi_skill_1');
                                var cards = target.getCards('he').randomGets(1);
                                game.log(player, '观看了' + target + '的1张牌');
                                player.chooseControl('ok').set('dialog', ['堪舆', cards]);
                            },
                        },
                        bishou_skill: {
                            equipSkill: true,
                            mod: {
                                cardnature(card, player) {
                                    if (card.name == 'gong_Angel' && get.yinyang(card) == 'yang' && card.nature == '') return 'ci';
                                },
                            },
                        },
                        anbiao_skill: {
                            equipSkill: true,
                            subSkill: {
                                directHit: {
                                    trigger: {
                                        player: 'useCardToPlayered',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.skill && event.skill == 'anbiao_skill';
                                    },
                                    logTarget: 'target',
                                    content() {
                                        trigger.directHit.add(trigger.target);
                                    },
                                },
                            },
                            enable: ['chooseToUse', 'chooseToRespond'],
                            filterCard: (A, n, g, e, l) => !ui.selected.cards.some((cardx) => get.yinyang(cardx, n) == get.yinyang(A, n)),
                            selectCard: 2,
                            position: 'hs',
                            viewAs: {
                                name: 'gong_Angel',
                            },
                            group: 'anbiao_skill_directHit',
                            complexCard: true,
                            filter(event, player) {
                                return player.countCards('hs') >= 2;
                            },
                            audio: true,
                            prompt: '将两张阴阳不同的手牌当【攻】使用或打出(不可响应)',
                            check(card) {
                                let player = _status.event.player;
                                if (
                                    player.hasCard(function (card) {
                                        return card.name == 'gong_Angel';
                                    })
                                )
                                    return 0;
                                if (
                                    _status.event &&
                                    _status.event.name == 'chooseToRespond' &&
                                    player.hp < 3 &&
                                    !player.countCards('hs', function (card) {
                                        return card.name != 'liang' && card.name != 'liang';
                                    })
                                )
                                    return (player.hp > 1 ? 10 : 8) - get.value(card);
                                return Math.max(5, 8 - 0.7 * player.hp) - get.value(card);
                            },
                            ai: {
                                respondgong_Angel: true,
                                skillTagFilter(player) {
                                    return player.countCards('hs') >= 2;
                                },
                                yingbian(card, player, targets, viewer) {
                                    if (get.attitude(viewer, player) <= 0) return 0;
                                    var base = 0,
                                        hit = false;
                                    if (get.cardtag(card, 'yingbian_hit')) {
                                        hit = true;
                                        if (
                                            targets.some((target) => {
                                                return (
                                                    target.mayHavegong_Angeln(
                                                        viewer,
                                                        'use',
                                                        target.getCards('h', (i) => {
                                                            return i.hasGaintag('gong_Angel_notgong_Angeln');
                                                        })
                                                    ) &&
                                                    get.attitude(viewer, target) < 0 &&
                                                    get.damageEffect(target, player, viewer, get.natureList(card)) > 0
                                                );
                                            })
                                        )
                                            base += 5;
                                    }
                                    if (get.cardtag(card, 'yingbian_add')) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return !targets.includes(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
                                            })
                                        )
                                            base += 5;
                                    }
                                    if (get.cardtag(card, 'yingbian_damage')) {
                                        if (
                                            targets.some((target) => {
                                                return (
                                                    get.attitude(player, target) < 0 &&
                                                    (hit ||
                                                        !target.mayHavegong_Angeln(
                                                            viewer,
                                                            'use',
                                                            target.getCards('h', (i) => {
                                                                return i.hasGaintag('gong_Angel_notgong_Angeln');
                                                            })
                                                        ) ||
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
                                                        liang: true,
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
                                    if (player.hasSkill('jueqing') || player.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
                                    return true;
                                },
                                basic: {
                                    useful: [5, 3, 1],
                                    value: [5, 3, 1],
                                },
                                order(item, player) {
                                    if (player.hasSkillTag('pregong_Angel', true, null, true)) return 10;
                                    if (typeof item === 'object' && game.hasNature(item, 'linked')) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return current != player && lib.card.gong_Angel.ai.canLink(player, current, item) && player.canUse(item, current, null, true) && get.effect(current, item, player, player) > 0;
                                            }) &&
                                            game.countPlayer(function (current) {
                                                return current.isLinked() && get.damageEffect(current, player, player, get.nature(item)) > 0;
                                            }) > 1
                                        )
                                            return 3.1;
                                        return 3;
                                    }
                                    return 3.05;
                                },
                                result: {
                                    target(player, target, card, isLink) {
                                        let eff = -1.5,
                                            odds = 1.35,
                                            num = 1;
                                        if (isLink) {
                                            let cache = _status.event.getTempCache('gong_Angel_result', 'eff');
                                            if (typeof cache !== 'object' || cache.card !== get.translation(card)) return eff;
                                            if (cache.odds < 1.35 && cache.bool) return 1.35 * cache.eff;
                                            return cache.odds * cache.eff;
                                        }
                                        if (
                                            player.hasSkill('liang') ||
                                            player.hasSkillTag('damageBonus', true, {
                                                target: target,
                                                card: card,
                                            })
                                        ) {
                                            if (
                                                target.hasSkillTag('filterDamage', null, {
                                                    player: player,
                                                    card: card,
                                                    liang: true,
                                                })
                                            )
                                                eff = -0.5;
                                            else {
                                                num = 2;
                                                if (get.attitude(player, target) > 0) eff = -7;
                                                else eff = -4;
                                            }
                                        }
                                        if (
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
                                            odds -=
                                                0.7 *
                                                target.mayHavegong_Angeln(
                                                    player,
                                                    'use',
                                                    target.getCards('h', (i) => {
                                                        return i.hasGaintag('gong_Angel_notgong_Angeln');
                                                    }),
                                                    'odds'
                                                );
                                        _status.event.putTempCache('gong_Angel_result', 'eff', {
                                            bool: target.hp > num && get.attitude(player, target) > 0,
                                            card: get.translation(card),
                                            eff: eff,
                                            odds: odds,
                                        });
                                        return odds * eff;
                                    },
                                },
                                tag: {
                                    respond: 1,
                                    respondgong_Angeln: 1,
                                    damage(card) {
                                        if (game.hasNature(card, 'poison')) return;
                                        return 1;
                                    },
                                    natureDamage(card) {
                                        if (game.hasNature(card, 'linked')) return 1;
                                    },
                                    fireDamage(card, nature) {
                                        if (game.hasNature(card, 'fire')) return 1;
                                    },
                                    thunderDamage(card, nature) {
                                        if (game.hasNature(card, 'thunder')) return 1;
                                    },
                                    poisonDamage(card, nature) {
                                        if (game.hasNature(card, 'poison')) return 1;
                                    },
                                },
                            },
                            _priority: -25,
                        },
                        duandao_skill: {
                            equipSkill: true,
                            enable: ['chooseToUse', 'chooseToRespond'],
                            filterCard(A, n, g, e, l) {
                                if (ui.selected.cards.length == 0) {
                                    return A.name == 'gong_Angel' && A.nature == '';
                                }
                                return true;
                            },
                            selectCard: 2,
                            position: 'hs',
                            viewAs: {
                                name: 'gong_Angel',
                                nature: 'zhan',
                            },
                            complexCard: true,
                            filter(event, player) {
                                return player.countCards('hs') >= 2;
                            },
                            audio: true,
                            prompt: '将1张普通【攻】和另1张手牌当作【攻·斩】使用',
                            check(card) {
                                let player = _status.event.player;
                                if (
                                    player.hasCard(function (card) {
                                        return card.name == 'gong_Angel';
                                    })
                                )
                                    return 0;
                                if (
                                    _status.event &&
                                    _status.event.name == 'chooseToRespond' &&
                                    player.hp < 3 &&
                                    !player.countCards('hs', function (card) {
                                        return card.name != 'liang' && card.name != 'liang';
                                    })
                                )
                                    return (player.hp > 1 ? 10 : 8) - get.value(card);
                                return Math.max(5, 8 - 0.7 * player.hp) - get.value(card);
                            },
                            ai: {
                                respondgong_Angel: true,
                                skillTagFilter(player) {
                                    return player.countCards('hs') >= 2;
                                },
                                yingbian(card, player, targets, viewer) {
                                    if (get.attitude(viewer, player) <= 0) return 0;
                                    var base = 0,
                                        hit = false;
                                    if (get.cardtag(card, 'yingbian_hit')) {
                                        hit = true;
                                        if (
                                            targets.some((target) => {
                                                return (
                                                    target.mayHavegong_Angeln(
                                                        viewer,
                                                        'use',
                                                        target.getCards('h', (i) => {
                                                            return i.hasGaintag('gong_Angel_notgong_Angeln');
                                                        })
                                                    ) &&
                                                    get.attitude(viewer, target) < 0 &&
                                                    get.damageEffect(target, player, viewer, get.natureList(card)) > 0
                                                );
                                            })
                                        )
                                            base += 5;
                                    }
                                    if (get.cardtag(card, 'yingbian_add')) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return !targets.includes(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
                                            })
                                        )
                                            base += 5;
                                    }
                                    if (get.cardtag(card, 'yingbian_damage')) {
                                        if (
                                            targets.some((target) => {
                                                return (
                                                    get.attitude(player, target) < 0 &&
                                                    (hit ||
                                                        !target.mayHavegong_Angeln(
                                                            viewer,
                                                            'use',
                                                            target.getCards('h', (i) => {
                                                                return i.hasGaintag('gong_Angel_notgong_Angeln');
                                                            })
                                                        ) ||
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
                                                        liang: true,
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
                                    if (player.hasSkill('jueqing') || player.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
                                    return true;
                                },
                                basic: {
                                    useful: [5, 3, 1],
                                    value: [5, 3, 1],
                                },
                                order(item, player) {
                                    if (player.hasSkillTag('pregong_Angel', true, null, true)) return 10;
                                    if (typeof item === 'object' && game.hasNature(item, 'linked')) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return current != player && lib.card.gong_Angel.ai.canLink(player, current, item) && player.canUse(item, current, null, true) && get.effect(current, item, player, player) > 0;
                                            }) &&
                                            game.countPlayer(function (current) {
                                                return current.isLinked() && get.damageEffect(current, player, player, get.nature(item)) > 0;
                                            }) > 1
                                        )
                                            return 3.1;
                                        return 3;
                                    }
                                    return 3.05;
                                },
                                result: {
                                    target(player, target, card, isLink) {
                                        let eff = -1.5,
                                            odds = 1.35,
                                            num = 1;
                                        if (isLink) {
                                            let cache = _status.event.getTempCache('gong_Angel_result', 'eff');
                                            if (typeof cache !== 'object' || cache.card !== get.translation(card)) return eff;
                                            if (cache.odds < 1.35 && cache.bool) return 1.35 * cache.eff;
                                            return cache.odds * cache.eff;
                                        }
                                        if (
                                            player.hasSkill('liang') ||
                                            player.hasSkillTag('damageBonus', true, {
                                                target: target,
                                                card: card,
                                            })
                                        ) {
                                            if (
                                                target.hasSkillTag('filterDamage', null, {
                                                    player: player,
                                                    card: card,
                                                    liang: true,
                                                })
                                            )
                                                eff = -0.5;
                                            else {
                                                num = 2;
                                                if (get.attitude(player, target) > 0) eff = -7;
                                                else eff = -4;
                                            }
                                        }
                                        if (
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
                                            odds -=
                                                0.7 *
                                                target.mayHavegong_Angeln(
                                                    player,
                                                    'use',
                                                    target.getCards('h', (i) => {
                                                        return i.hasGaintag('gong_Angel_notgong_Angeln');
                                                    }),
                                                    'odds'
                                                );
                                        _status.event.putTempCache('gong_Angel_result', 'eff', {
                                            bool: target.hp > num && get.attitude(player, target) > 0,
                                            card: get.translation(card),
                                            eff: eff,
                                            odds: odds,
                                        });
                                        return odds * eff;
                                    },
                                },
                                tag: {
                                    respond: 1,
                                    respondgong_Angeln: 1,
                                    damage(card) {
                                        if (game.hasNature(card, 'poison')) return;
                                        return 1;
                                    },
                                    natureDamage(card) {
                                        if (game.hasNature(card, 'linked')) return 1;
                                    },
                                    fireDamage(card, nature) {
                                        if (game.hasNature(card, 'fire')) return 1;
                                    },
                                    thunderDamage(card, nature) {
                                        if (game.hasNature(card, 'thunder')) return 1;
                                    },
                                    poisonDamage(card, nature) {
                                        if (game.hasNature(card, 'poison')) return 1;
                                    },
                                },
                            },
                            _priority: -25,
                        },
                        changmao_skill: {
                            equipSkill: true,
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'gong_Angel' && event.card.nature == 'ci';
                            },
                            content() {
                                trigger.num++;
                            },
                        },
                        yinggong_skill: {
                            mod: {
                                cardnature(card, player) {
                                    if (card.nature == '' && get.yinyang(card) == 'yang') return 'she';
                                },
                            },
                        },
                        jiche_skill: {
                            trigger: {
                                player: 'useCard2',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'gong_Angel' && event.card.nature == 'she' && event.targets.length;
                            },
                            forced: true,
                            content() {
                                var target = trigger.target;
                                var targets = game.filterPlayer(function (current) {
                                    return current != player && get.distance(current, target) <= 1 && current != target;
                                });
                                player.line(targets, trigger.card.nature);
                                trigger.targets.addArray(targets);
                            },
                        },
                        qingjia_skill: {
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            filter: (event, player) => player.zhimoudian > 0,
                            content() {
                                'step 0';
                                var number = [];
                                for (let i = 1; i <= player.zhimoudian; i++) {
                                    if (i <= trigger.num) {
                                        number.add(i);
                                    }
                                }
                                player.chooseButton(['是否发动【轻甲】？:选择需要消耗的智谋点', [number, 'tdnodes']]).set('ai', (button) => {
                                    var num = 0;
                                    for (const i of game.players) {
                                        if (i != player) {
                                            num = Math.max(num, i.countCards('h'));
                                        }
                                    }
                                    return (
                                        Math.max(
                                            ...number.map((i) => {
                                                if (i + player.countCards('h') < num) return i;
                                            })
                                        ) == button.link
                                    );
                                });
                                ('step 1');
                                if (result.links) {
                                    player.removeZhimou(result.links[0]);
                                    trigger.num -= result.links[0];
                                }
                            },
                        },
                        banjia_skill: {
                            subSkill: {
                                1: {
                                    trigger: {
                                        target: 'useCardToTarget',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.card.name == 'gong_Angel') {
                                            player.card_banjian = get.wuxing(event.card);
                                            return true;
                                        }
                                    },
                                    content() { },
                                },
                            },
                            enable: ['chooseToRespond', 'chooseToUse'],
                            group: 'banjia_skill_1',
                            filterCard(card, player) {
                                return get.wuxing(card) == player.card_banjian;
                            },
                            position: 'hes',
                            viewAs: {
                                name: 'shou_Angel',
                            },
                            viewAsFilter(player) {
                                if (get.zhu(player, 'shouyue')) {
                                    if (!player.countCards('hes')) return false;
                                } else {
                                    if (!player.countCards('hes', { wuxing: player.card_banjian })) return false;
                                }
                            },
                            prompt: '将一张五行相同的牌当【守】使用或打出',
                            check(card) {
                                const val = get.value(card);
                                if (_status.event.name == 'chooseToRespond') return 1 / Math.max(0.1, val);
                                return 5 - val;
                            },
                            ai: {
                                order: 3,
                                basic: {
                                    useful(card, i) {
                                        let player = _status.event.player,
                                            basic = [7, 5.1, 2],
                                            num = basic[Math.min(2, i)];
                                        if (player.hp > 2 && player.hasSkillTag('maixie')) num *= 0.57;
                                        if (player.hasSkillTag('freeShan', false, null, true) || player.getEquip('rewrite_renwang')) num *= 0.8;
                                        return num;
                                    },
                                    value: [7, 5.1, 2],
                                },
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        yuandun_skill: {
                            enable: ['chooseToRespond', 'chooseToUse'],
                            filterCard(card, player) {
                                return card.name == 'gong_Angel' && get.yinyang(card) == 'yang';
                            },
                            position: 'hes',
                            viewAs: {
                                name: 'shou_Angel',
                            },
                            viewAsFilter(player) {
                                if (get.zhu(player, 'shouyue')) {
                                    if (!player.countCards('hes')) return false;
                                } else {
                                    if (!player.countCards('hes', { name: 'gong_Angel' })) return false;
                                }
                            },
                            prompt: '将一张阳【攻】当【守】使用或打出',
                            check(card) {
                                const val = get.value(card);
                                if (_status.event.name == 'chooseToRespond') return 1 / Math.max(0.1, val);
                                return 5 - val;
                            },
                            ai: {
                                order: 3,
                                basic: {
                                    useful(card, i) {
                                        let player = _status.event.player,
                                            basic = [7, 5.1, 2],
                                            num = basic[Math.min(2, i)];
                                        if (player.hp > 2 && player.hasSkillTag('maixie')) num *= 0.57;
                                        if (player.hasSkillTag('freeShan', false, null, true) || player.getEquip('rewrite_renwang')) num *= 0.8;
                                        return num;
                                    },
                                    value: [7, 5.1, 2],
                                },
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        tiedun_skill: {
                            equipSkill: true,
                            trigger: {
                                target: 'useCardToTarget',
                            },
                            forced: true,
                            _priority: 6,
                            audio: true,
                            filter(event, player) {
                                if (player.hasSkillTag('unequip2')) return false;
                                if (
                                    event.player.hasSkillTag('unequip', false, {
                                        name: event.card ? event.card.name : null,
                                        target: player,
                                        card: event.card,
                                    })
                                )
                                    return false;
                                return event.card && event.card.name == 'gong_Angel' && (event.card.nature == 'ci' || event.card.nature == 'she');
                            },
                            content() {
                                trigger.cancel();
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (typeof card !== 'object' || target.hasSkillTag('unequip2')) return;
                                        if (
                                            player.hasSkillTag('unequip', false, {
                                                name: card ? card.name : null,
                                                target: target,
                                                card: card,
                                            }) ||
                                            player.hasSkillTag('unequip', false, {
                                                name: card ? card.name : null,
                                                target: target,
                                                card: card,
                                            })
                                        )
                                            return;
                                        if (card.name == 'gong_Angel' && (card.nature == 'ci' || card.nature == 'she')) return 'zeroplayertarget';
                                    },
                                },
                            },
                            _priority: 575,
                        },
                        zhongjia_skill: {
                            equipSkill: true,
                            trigger: {
                                target: 'useCardToTarget',
                            },
                            forced: true,
                            audio: true,
                            filter(event, player) {
                                if (player.hasSkillTag('unequip2')) return false;
                                if (
                                    event.player.hasSkillTag('unequip', false, {
                                        name: event.card ? event.card.name : null,
                                        target: player,
                                        card: event.card,
                                    })
                                )
                                    return false;
                                return event.card && event.card.name == 'gong_Angel' && (event.card.nature == 'zhan' || get.yinyang(event.card) == 'yang');
                            },
                            content() {
                                trigger.cancel();
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (typeof card !== 'object' || target.hasSkillTag('unequip2')) return;
                                        if (
                                            player.hasSkillTag('unequip', false, {
                                                name: card ? card.name : null,
                                                target: target,
                                                card: card,
                                            }) ||
                                            player.hasSkillTag('unequip', false, {
                                                name: card ? card.name : null,
                                                target: target,
                                                card: card,
                                            })
                                        )
                                            return;
                                        if (card.name == 'gong_Angel' && (card.nature == 'zhan' || get.yinyang(card) == 'yang')) return 'zeroplayertarget';
                                    },
                                },
                            },
                            _priority: 575,
                        },
                        yingzhai_skill: {
                            equipSkill: true,
                            trigger: {
                                target: 'useCardToTarget',
                            },
                            usable: 1,
                            forced: true,
                            _priority: 6,
                            audio: true,
                            filter(event, player) {
                                if (player.hasSkillTag('unequip2')) return false;
                                if (
                                    event.player.hasSkillTag('unequip', false, {
                                        name: event.card ? event.card.name : null,
                                        target: player,
                                        card: event.card,
                                    })
                                )
                                    return false;
                                return event.card && event.card.name == 'gong_Angel';
                            },
                            content() {
                                trigger.targets.remove(player);
                                trigger.parent.triggeredTargets2.remove(player);
                                trigger.untrigger();
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (typeof card !== 'object' || target.hasSkillTag('unequip2')) return;
                                        if (
                                            player.hasSkillTag('unequip', false, {
                                                name: card ? card.name : null,
                                                target: target,
                                                card: card,
                                            }) ||
                                            player.hasSkillTag('unequip', false, {
                                                name: card ? card.name : null,
                                                target: target,
                                                card: card,
                                            })
                                        )
                                            return;
                                        if (card.name == 'gong_Angel') return 'zeroplayertarget';
                                    },
                                },
                            },
                            _priority: 575,
                        },
                        //武将技能
                        //谋贾:出牌阶段,你可消耗1点智谋,你获得一名其他角色一张牌并令其增加1点智谋上限直到其下回合结束,其获取你1点智谋.
                        mougu_sankoo: {
                            enable: 'phaseUse',
                            filter: (event, player) => player.zhimoudian,
                            filterTarget: (card, player, target) => player != target && target.countCards('he') > 0,
                            content() {
                                'step 0';
                                player.gainPlayerCard(target, 'he', true);
                                ('step 1');
                                target.addTempSkill(['mougu_sankoo_sub1'], { trigger: 'phaseEnd' });
                                target.addMark('mougu_sankoo', 1);
                                ('step 2');
                                target.gainPlayerZhimou(player);
                            },
                            intro: { content: '你的智谋上限因<谋贾>增加' },
                            subSkill: {
                                sub1: {
                                    forced: true,
                                    trigger: { player: 'phaseEnd' },
                                    filter: (event, player) => player.hasMark('mougu_sankoo'),
                                    content() {
                                        player.removeMark('mougu_sankoo', player.countMark('mougu_sankoo'));
                                    },
                                    mod: {
                                        maxZhimoudian: (num, player) => num + player.countMark('mougu_sankoo'),
                                    },
                                },
                            },
                        },
                        //韬略:当你需要使用1张【攻】或【粮】时,你可消耗1点智谋将1张手牌当作此牌使用.
                        taolue_sankoo: {
                            enable: 'chooseToUse',
                            position: 'h',
                            viewAs: {
                                name: ['Gong_Angel', 'Liang_Angel'],
                            },
                            viewAsFilter: (player) => player.countCards('h') && player.zhimoudian,
                            prompt: '将一张手牌当【攻】或【粮】使用',
                        },
                        //谋晦:锁定技,一名角色的体力值发生变化后,若其与你的体力值的数量关系发生变化则你获取其1点智谋.
                        mouhui_sankoo: {
                            forced: true,
                            trigger: { global: 'changeHp' },
                            filter(event, player) {
                                if (event.player == player && event.num == 0) {
                                    return false;
                                } else {
                                    if (event.player.hp - player.hp == 0) return true;
                                    else if (event.player.hp - player.hp > 0) return event.player.hp - event.num - player.hp <= 0;
                                    return event.player.hp - event.num - player.hp >= 0;
                                }
                            },
                            content() {
                                player.gainPlayerZhimou(trigger.player);
                            },
                        },
                        //纵兵:转换技,你可消耗1点智谋,:阳:你可以将一张阳牌当做一张【守】使用或打出,你回复一点体力值或2点智谋;
                        //阴:你可以将一张阴牌当做一张【攻】使用,你令此【攻】免费.
                        zongbing_Angel: {
                            init: (player) => (player.storage.zongbing_Angel = true),
                            //技能初始化时,将阴阳设为阳
                            enable: ['chooseToUse', 'chooseToRespond'],
                            mark: true,
                            marktext: '☯',
                            intro: {
                                content(storage, player) {
                                    var str = '阳<br>你可以将一张阳牌当做一张【守】使用或打出,你回复一点体力值或2点智谋';
                                    if (!storage) return '阴<br>你可以将一张阴牌当做一张【攻】使用,你令此【攻】免费';
                                    return str;
                                },
                            },
                            group: 'zongbing_Angel_card',
                            filter(event, player) {
                                if (!player.countCards('he') || !player.zhimoudian) return false;
                                var card_name = player.storage.zongbing_Angel == true ? 'shou_Angel' : 'gong_Angel';
                                if (event.filterCard && event.filterCard({ name: card_name }, player, event)) return true;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = ['gong_Angel', 'shou_Angel'];
                                    var card_name = player.storage.zongbing_Angel == true ? 'shou_Angel' : 'gong_Angel';
                                    var list_true = [];
                                    for (const i of list) {
                                        if (event.filterCard && event.filterCard({ name: i }, player, event) && card_name == i) list_true.add(['效果', '', i]);
                                    }
                                    for (var nature of lib.card.gong_Angel.nature) {
                                        if (!player.storage.zongbing_Angel) {
                                            list_true.add(['效果', '', 'gong_Angel', nature]);
                                        }
                                    }
                                    //lib.inpile_nature当前牌堆中牌有的属性
                                    return ui.create.dialog('纵兵', [list_true, 'vcard']);
                                },
                                check(button) {
                                    if (_status.event.parent.type != 'phase') return 1;
                                    var player = _status.event.player;
                                    return player.getUseValue({
                                        name: button.link[2],
                                        nature: button.link[3],
                                    });
                                },
                                backup(links, player) {
                                    return {
                                        filterCard(card) {
                                            if (player.storage.zongbing_Angel) {
                                                return get.yinyang(card) == 'yang';
                                            } else {
                                                if (!player.storage.zongbing_Angel) {
                                                    return get.yinyang(card) == 'yin';
                                                }
                                            }
                                        },
                                        audio: 'zongbing_Angel',
                                        popname: true,
                                        check(card) {
                                            return 8 - get.value(card);
                                        },
                                        position: 'he',
                                        viewAs: { name: links[0][2], nature: links[0][3] },
                                        precontent() {
                                            if (player.storage.zongbing_Angel) player.storage.zongbing_Angel = false;
                                            else player.storage.zongbing_Angel = true;
                                        },
                                        //precontent 转化牌使用结束后
                                    };
                                },
                                prompt(links, player) {
                                    return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                                },
                            },
                            hiddenCard(player, name) {
                                if (!lib.inpile.includes(name)) return false;
                                var type = get.type2(name);
                                return player.countCards('he') > 0 && ((name == 'gong_Angel' && !player.storage.zongbing_Angel) || (name == 'shou_Angel' && player.storage.zongbing_Angel));
                            },
                            //hiddenCard判断你是否有使用这张牌的能力
                            ai: {
                                fireAttack: true,
                                respondSha: true,
                                respondShan: true,
                                skillTagFilter(player) {
                                    if (!player.countCards('he')) return false;
                                },
                                order: 1,
                                result: {
                                    player(player) {
                                        if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                        return 1;
                                    },
                                },
                            },
                            subSkill: {
                                card: {
                                    trigger: {
                                        player: 'useCardBegin',
                                    },
                                    forced: true,
                                    filter(event) {
                                        return event.skill == 'zongbing_Angel_backup';
                                    },
                                    content() {
                                        'step 0';
                                        player.removeZhimou();
                                        if (trigger.card.name == 'gong_Angel') {
                                            player.freeCard.add(trigger.card[0]);
                                        } else {
                                            player.chooseControl('回复1点体力', '获得2点智谋');
                                        }
                                        ('step 1');
                                        if (result.control && result.control == '回复1点体力') {
                                            player.recover();
                                        }
                                        if (result.control && result.control == '获得2点智谋') {
                                            player.addZhimou(2);
                                        }
                                    },
                                },
                            },
                        },
                        //射却:锁定技,你使用的第一张手牌中的【攻】视为【射】;你于出牌阶段时获得的智谋点为1.
                        sheque_Angel: {
                            init: (player) => (player.sheque_Angel = false),
                            trigger: {
                                player: ['phaseBegin', 'phaseEnd', 'useCardBegin'],
                            },
                            forced: true,
                            filter(event, player, name) {
                                if (name == 'useCardBegin') {
                                    if (player.sheque_Angel) return event.card && event.card.name == 'gong_Angel';
                                    return false;
                                }
                                return true;
                            },
                            content() {
                                if (event.triggername == 'phaseBegin') player.sheque_Angel = true;
                                else player.sheque_Angel = false;
                            },
                            mod: {
                                Usezhimou(num, player) {
                                    return 1;
                                },
                                cardnature(card, player) {
                                    if (card.name == 'gong_Angel' && player.sheque_Angel) return 'she';
                                },
                            },
                        },
                        //复圣:锁定技,每回合你对每名其他角色只能造成一次伤害;其他角色对你使用牌时你获取其1点智谋.
                        fusheng_sankoo: {
                            forced: true,
                            trigger: { source: 'damageBegin' },
                            filter: (event, player, target) => event.player != player,
                            content() {
                                if (!trigger.player.hasSkill('fusheng_sankoo_marked')) {
                                    trigger.player.addTempSkill('fusheng_sankoo_marked');
                                } else {
                                    trigger.cancel();
                                }
                            },
                            group: ['fusheng_sankoo_sub', 'fusheng_sankoo_marked'],
                            subSkill: {
                                sub: {
                                    forced: true,
                                    trigger: { target: 'useCardToTargeted' },
                                    content() {
                                        player.gainPlayerZhimou(trigger.player);
                                    },
                                },
                                marked: {
                                    forced: true,
                                    mark: true,
                                    intro: { content: '本回合<颜回>不能对你再造成伤害' },
                                },
                            },
                        },
                        //好学:出牌阶段限一次,你可消耗任意点智谋亮出牌堆顶等量张牌,你获得其中一种类别所有牌且本回合你免费使用这些牌.
                        //亡外:锁定技,其他角色每比你多1张手牌则其与你的距离+1.
                        wangwai_sankoo: {
                            forced: true,
                            mod: {
                                globalTo: (from, to, current) => current + Math.max(0, from.countCards('h') - to.countCards('h')),
                            },
                        },
                        zhuoba_sankoo: {
                            trigger: { player: 'phaseEnd' },
                            filter: (event, player) => player.zhimoudian > 0,
                            content() {
                                'step 0';
                                var list = [];
                                for (let i = 1; i <= player.zhimoudian; i++) list.add(i);
                                player.chooseControl().set('choiceList', list);
                                ('step 1');
                                var num = result.index + 1;
                                player.removeZhimou(num);
                                player.draw(num);
                                trigger.phaseList.splice(trigger.num, 0, 'phaseUse|zhouba_sankoo');
                            },
                            group: 'zhuoba_sankoo_rewrite',
                            subSkill: {
                                rewrite: {
                                    forced: true,
                                    trigger: { player: 'phaseUseEnd' },
                                    filter: (event) => event._extraPhaseReason == 'zhuoba_sankoo',
                                    content() {
                                        'step 0';
                                        event.num = 0;
                                        player.drawTo(game.filterPlayer().filter((e) => e != player).length);
                                        ('step 1');
                                        var i = 1;
                                        var num = event.num;
                                        if (game.filterPlayer()[num] != player) {
                                            player.chooseCard('选择你要交给' + get.translation(game.filterPlayer()[num]) + '一张牌', true, 'he');
                                        }
                                        ('step 2');
                                        if (result.bool) {
                                            var card = result.cards;
                                            player.give(game.filterPlayer()[num], card);
                                        }
                                        event.num++;
                                        ('step 3');
                                        if (event.num < game.conutPlayer()) {
                                            event.goto(1);
                                        }
                                    },
                                },
                            },
                        },
                        //完璧:锁定技,其他角色不能获得你的手牌或装备牌;你于回合外失去牌后,你令一名角色摸等量张牌.
                        wanbi_sankoo: {
                            forced: true,
                            trigger: {
                                player: 'lose',
                            },
                            filter: (event, player) => _status.currentPhase != player,
                            content() {
                                'step 0';
                                player.chooseTarget('你令一名角色摸' + get.cnNumber(trigger.cards.length) + '张牌', true);
                                ('step 1');
                                if (result.bool) result.targets[0].draw(trigger.cards.length);
                            },
                            mod: {
                                canBeGained(card) {
                                    if (get.position(card) == 'h' || get.type(card) == 'equip') return false;
                                },
                            },
                        },
                        //馈侮:一名其他角色出牌阶段结束时,若其本回合造成过伤害,你可消耗1点智谋并与其博弈,若你赢则你对其造成1点伤害;若其没赢则其失去1点智谋.
                        kuiwu_sankoo: {
                            trigger: {
                                global: 'phaseUseEnd',
                            },
                            filter: (event, player, target) => event.player != player && player.zhimoudian && player.countCards('h') && event.player.countCards('h') && event.player.getHistory('sourceDamage').length,
                            content() {
                                'step 0';
                                player.removeZhimou(), player.chooseChess(trigger.player);
                                ('step 1');
                                if (result.bool) {
                                    trigger.player.damage();
                                    trigger.player.removeZhimou();
                                } else if (result.tie) trigger.player.removeZhimou();
                            },
                        },
                        //哀郢:锁定技,当你受到1点伤害时,你获得1点智谋.
                        aiying_sankoo: {
                            forced: true,
                            trigger: {
                                player: 'damageEnd',
                            },
                            content() {
                                player.addZhimou(trigger.num);
                            },
                        },
                        //修法:出牌阶段每名角色限一次,你可消耗任意点智谋/失去任意点体力令一名角色回复等量点体力/获得等量点智谋.
                        xiufa_sankoo: {
                            enable: 'phaseUse',
                            filterTarget: (event, player, target) => (target.maxzhimoudian > target.zhimoudian || target.maxHp > target.hp) && !target.hasSkill('xiufa_sankoo_sub'),
                            content() {
                                'step 0';
                                var list = [];
                                if (player.zhimoudian && target.maxHp > target.hp) list.add('消耗任意点智谋令其回复等量点体力');
                                if (target.maxzhimoudian > target.zhimoudian) list.add('失去任意点体力令其回复等量点智谋');
                                event.list = list;
                                player.chooseControl().set('choiceList', list).ai = function () {
                                    var player = _status.event.player;
                                    if (player.hp > 2 && target.zhimoudian == 0) return 1;
                                    return 0;
                                };
                                ('step 1');
                                var number = [];
                                var transaction = event.list[result.index];
                                event.transaction = transaction;
                                var sit = transaction == '消耗任意点智谋令其回复等量点体力' ? '请选择你要消耗的智谋数' : '请选择你要消耗的体力';
                                var num = transaction == '消耗任意点智谋令其回复等量点体力' ? player.zhimoudian : player.hp;
                                for (let i = 1; i <= num; i++) number.add(i);
                                player.chooseButton([sit, [number, 'tdnodes']]);
                                ('step 2');
                                if (result.links) {
                                    target.addTempSkill('xiufa_sankoo_sub', { global: 'phaseUseAfter' });
                                    if (event.transaction == '消耗任意点智谋令其回复等量点体力') {
                                        player.removeZhimou(result.links[0]);
                                        target.recover(result.links[0]);
                                    } else {
                                        player.loseHp(result.links[0]);
                                        target.addZhimou(result.links[0]);
                                    }
                                }
                            },
                            group: 'xiufa_sankoo_sub',
                            subSkill: {
                                sub: {
                                    forced: true,
                                    mark: true,
                                    intro: { content: '本阶段该角色已被<修法>过' },
                                },
                            },
                        },
                        //擅击:你使用的【攻】指定目标后,你可消耗1点智谋令此【攻】伤害基数+1.
                        shanji_sankoo: {
                            trigger: {
                                player: 'useCardToPlayer',
                            },
                            filter: (event, player) => player.zhimoudian > 0 && event.card.name == 'gong_Angel',
                            content() {
                                player.removeZhimou();
                                trigger.parent.baseDamage++;
                            },
                        },
                        //屠戮:锁定技,你令一名其他角色进入濒死状态时,你减少1点智谋上限令其死亡.
                        tulu_sankoo: {
                            forced: true,
                            trigger: {
                                source: 'dying',
                            },
                            filter: (event, player, target) => event.player != player && player.isDamaged,
                            content() {
                                player.removeMaxZhimou();
                                trigger.player.die();
                            },
                        },
                        //  妒能:锁定技,你对智谋数大于你的角色造成伤害时,其选择:1.此伤害+1;2.你获取其1点智谋.
                        duneng_sankoo: {
                            forced: true,
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter: (event, player, target) => player.zhimoudian > target.zhimoudian,
                            content() {
                                'step 0';
                                var list = ['此伤害+1', '庞涓获取你1点智谋'];
                                trigger.player
                                    .chooseControl()
                                    .set('choiceList', list)
                                    .set('ai', function () {
                                        var player = _status.event.player;
                                        if (player.hp > 2) return 0;
                                        return 1;
                                    }),
                                    'step 1';
                                if (result.index == 0) {
                                    trigger.num++;
                                } else {
                                    player.gainPlayerZhimou(trigger.player);
                                }
                            },
                        },
                        //嫉忤:限定技,出牌阶段,你可减少一名其他角色x/2点体力上限(向下取整),其增加等量点智谋上限并获取你等量点智谋,你减少x/2点智谋上限(向上取整).x为其当前体力上限.
                        jiwu_sankoo: {
                            enable: 'phaseUse',
                            mark: true,
                            intro: { content: '未发动<嫉忤>' },
                            filterTarget(event, player, target) {
                                return target != player;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('jiwu_sankoo');
                                var num1 = Math.floor(target.maxHp / 2);
                                var num2 = Math.ceil(target.maxHp / 2);
                                event.num1 = num1;
                                event.num2 = num2;
                                target.loseMaxHp(num1);
                                ('step 1');
                                target.addMaxZhimou(event.num1);
                                ('step 2');
                                target.gainPlayerZhimou(player, event.num1);
                                ('step 3');
                                player.removeMaxZhimou(event.num2);
                            },
                        },
                        //佯攻:出牌阶段限一次,你可消耗2点智谋将1/2张<伏兵>牌当做1张【攻】/【远交近攻】免费使用.
                        yanggong_Angel: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter: (event, player) => player.zhimoudian > 1 && player.getExpansions('fubing_Angel').length,
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    if (player.getExpansions('fubing_Angel').length) list.add(['效果', '免费', 'gong_Angel']);
                                    if (player.getExpansions('fubing_Angel').length > 1) list.add(['策略', '免费', 'yuanjiaojingong_Angel']);
                                    return ui.create.dialog('佯攻', [list, 'vcard']);
                                },
                                check(button) {
                                    if (_status.event.parent.type != 'phase') return 1;
                                    var player = _status.event.player;
                                    return player.getUseValue({
                                        name: button.link[2],
                                        nature: button.link[3],
                                    });
                                },
                                backup(links, player) {
                                    return {
                                        forced: true,
                                        card: links,
                                        content() {
                                            'step 0';
                                            if (lib.skill.yanggong_Angel_backup.card[0][2] == 'gong_Angel') {
                                                player.chooseButton(['选择需要使用的"伏兵"牌', player.getExpansions('fubing_Angel')], true);
                                            } else {
                                                player.chooseButton(['选择需要使用的"伏兵"牌', player.getExpansions('fubing_Angel')], true, 2);
                                            }
                                            ('step 1');
                                            if (result.links && lib.skill.yanggong_Angel_backup.card[0][2] == 'gong_Angel') {
                                                player.chooseUseTarget(result.links, { name: 'gong_Angel' }, true, false);
                                            }
                                            if (result.links && lib.skill.yanggong_Angel_backup.card[0][2] == 'yuanjiaojingong_Angel') {
                                                player.chooseUseTarget(result.links, { name: 'yuanjiaojingong_Angel' }, true, false);
                                            }
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '将"伏兵"当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                                },
                            },
                            group: 'yanggong_Angel_freeCard',
                            subSkill: {
                                freeCard: {
                                    trigger: {
                                        player: 'useCardBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.getParent(2).name == 'yanggong_Angel_backup';
                                    },
                                    content() {
                                        player.freeCard.add(trigger.card);
                                    },
                                },
                            },
                        },
                        //伏兵:你使用的【攻】结算后,你可消耗1点智谋并将1张【攻】置于武将牌上,视为你免费使用1张【攻】.
                        fubing_Angel: {
                            trigger: {
                                player: 'useCardEnd',
                            },
                            mark: true,
                            filter(angel, tonggao) {
                                return angel.card.name == 'gong_Angel' && tonggao.zhimoudian > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (player.countCards('h', { name: 'gong_Angel' })) {
                                    player.chooseCard('将一张【攻】置于武将牌上作为<伏兵>', true, (card) => card.name == 'gong_Angel');
                                } else {
                                    event.finish();
                                }
                                ('step 1');
                                if (result.cards && result.cards.length) {
                                    player.removeZhimou();
                                    player.addToExpansion(result.cards, player, 'giveAuto').gaintag.add('fubing_Angel');
                                    player.chooseUseTarget('gong_Angel', true, false);
                                }
                            },
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                        },
                        //交攻:出牌阶段限一次,你可以消耗全部智谋,你令一名其他角色选择:1.对你指定的另一名其他角色造成1点伤害获得x点智谋;2.交给你x张牌.x为你消耗智谋数.
                        jiaogong_Angel: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(angel, dayu) {
                                return dayu.zhimoudian > 0;
                            },
                            filterTarget(angel, tonggao, dayu) {
                                return tonggao != dayu;
                            },
                            multitarget: true,
                            selectTarget: 2,
                            targetprompt: ['选择选项的角色', '受到伤害的角色'],
                            content() {
                                'step 0';
                                var num = player.zhimoudian;
                                player.removeZhimou(num);
                                var choiceList = ['对' + get.translation(targets[1]) + '造成1点伤害获得' + num + '点智谋'];
                                if (targets[0].countCards('he') > 1) choiceList.add('交给' + get.translation(player) + '' + num + '张牌');
                                targets[0]
                                    .chooseControl()
                                    .set('choiceList', choiceList)
                                    .set('prompt', get.prompt('jiaogong_Angel'))
                                    .set('ai', function () {
                                        if (get.damageEffect(target, targets[1], target) > 0) return 0;
                                        return 1;
                                    });
                                event.num = num;
                                ('step 1');
                                if (result.index == 0) {
                                    targets[1].damage(targets[0]);
                                    targets[0].addZhimou(event.num);
                                    event.finish();
                                } else {
                                    targets[0].chooseCard('he', '选择交给' + get.translation(player) + '的牌', true, [1, event.num]);
                                }
                                ('step 2');
                                if (result.bool) {
                                    targets[0].give(result.cards, player);
                                }
                            },
                            ai: {
                                order: 8,
                                result: {
                                    target(player, target) {
                                        if (ui.selected.targets.length == 0) {
                                            return -3;
                                        } else {
                                            return get.damageEffect(target, ui.selected.targets[0], target);
                                        }
                                    },
                                },
                                expose: 0.4,
                                threaten: 3,
                            },
                        },
                        //广纳:锁定技,当你获得牌时,你获得1点智谋;智谋数小于你的角色对你造成的伤害改为获取你等量点智谋.
                        guangna_Angel: {
                            trigger: {
                                player: ['gainEnd', 'damageBegin'],
                            },
                            forced: true,
                            filter(color, black, yellow) {
                                if (yellow == 'damage') return color.source.zhimoudian < black.zhimoudian && black.zhimoudian >= color.num;
                                return black.maxzhimoudian > black.zhimoudian;
                            },
                            content() {
                                if (event.name == 'damage') {
                                    trigger.cancel();
                                    player.removeZhimou(trigger.num);
                                } else {
                                    player.addZhimou();
                                }
                            },
                        },
                        // 纵反:一名其他角色使用的牌对你造成伤害后,你可消耗任意点智谋亮出牌堆顶等量张牌,其中每有一张与此牌五行相同的牌则你对其造成1点伤害.
                        zongfan_Angel: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.zhimoudian > 0 && event.card;
                            },
                            content() {
                                'step 0';
                                var number = [];
                                for (let i = 1; i <= player.zhimoudian; i++) number.add(i);
                                player.chooseButton(['选择需要消耗的智谋点', [number, 'tdnodes']]).set(
                                    'ai',
                                    (button) => {
                                        return get.attitude(player, trigger.source) <= 0 && button == number[number.length - 1];
                                    },
                                    true
                                );
                                ('step 1');
                                if (result.links) {
                                    player.removeZhimou(result.links[0]);
                                    var card = get.cards(result.links[0]);
                                    game.cardsGotoOrdering(card);
                                    player.showCards(card);
                                    var num = 0;
                                    for (const i of card) {
                                        if (get.wuxing(i) == get.wuxing(trigger.card)) num++;
                                    }
                                    trigger.source.damage(num);
                                }
                            },
                        },
                        // 辞相:当你获得牌后,你可以弃置其中任意张牌获得等量点智谋.
                        cixiang_Angel: {
                            trigger: {
                                player: 'gainEnd',
                            },
                            filter: (plnak, chopsticks) => plnak.zhimoudian < plnak.maxzhimoudian,
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseCard('是否发动技能【辞相】？:弃置任意张本次获得的牌,换取等量的智谋点数', [1, player.getCards('h').map((card) => trigger.cards.includes(card)).length], (card) => trigger.cards.includes(card)).ai = function () {
                                    if (Math.min(player.maxzhimoudian - player.zhimoudian, player.getCards('h').map((card) => trigger.cards.includes(card)).length) >= ui.selected.cards.length) {
                                        return 7 - get.value(card);
                                    }
                                    return -1;
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.discard(result.cards);
                                    player.addZhimou(result.cards.length);
                                }
                            },
                        },
                        // 退隐:限定技,回合结束时,若你为场上手牌数最少,你可消耗2点智谋并将手牌摸至场上唯一最多后再摸3张牌
                        // ,直到你下个回合开始其他角色无法对你造成伤害且你因此获得的牌不计入手牌上限.
                        tuiyin_Angel: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            filter(event, player) {
                                return player.isMinHandcard() && player.zhimoudian >= 2;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('tuiyin_Angel');
                                var num = player.countCards('h');
                                var num_true = true;
                                while (num_true) {
                                    for (const i of game.players) {
                                        if (i != player) {
                                            if (num <= i.countCards('h')) {
                                                num += i.countCards('h') - num != 0 ? i.countCards('h') - num : 1;
                                            }
                                            if (
                                                game.players.every((value) => {
                                                    if (value.isOut() || value == this) return true;
                                                    return value.countCards('h') < num;
                                                })
                                            )
                                                num_true = false;
                                        }
                                    }
                                }
                                player.draw(num - player.countCards('h'));
                                ('step 1');
                                if (Array.isArray(result)) {
                                    player.addGaintag(result, 'tuiyin_Angel');
                                }
                                player.draw(3);
                                player.addTempSkill('tuiyin_Angel_cancel', { player: 'phaseBegin' });
                                ('step 2');
                                if (Array.isArray(result)) {
                                    player.addGaintag(result, 'tuiyin_Angel');
                                }
                            },
                            mod: {
                                ignoredHandcard(card, player) {
                                    if (card.hasGaintag('tuiyin_Angel')) {
                                        return true;
                                    }
                                },
                                cardDiscardable(card, player, name) {
                                    if (name == 'phaseDiscard' && card.hasGaintag('tuiyin_Angel')) {
                                        return false;
                                    }
                                },
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init: (player, skill) => (player.storage[skill] = false),
                            subSkill: {
                                cancel: {
                                    trigger: {
                                        player: 'damageBegin',
                                    },
                                    forced: true,
                                    content() {
                                        trigger.cancel();
                                    },
                                },
                            },
                        },
                        // 游说:出牌阶段限一次,你可消耗1点智谋并将1张手牌交给一名其他角色,其对你指定的另一名其他角色造成1点伤害.
                        youshui_Angel: {
                            enable: 'phaseUse',
                            usable: 1,
                            targetprompt: ['获得牌的角色', '受到伤害的角色'],
                            prepare: 'give',
                            filter: (event, player) => player.zhimoudian >= 1,
                            filterTarget(event, player, target) {
                                return target != player;
                            },
                            check(card) {
                                return 7 - get.value(card);
                            },
                            lose: false,
                            discard: false,
                            selectTarget: 2,
                            filterCard: true,
                            multitarget: true,
                            content() {
                                'step 0';
                                player.removeZhimou();
                                player.give(cards, targets[0]);
                                ('step 1');
                                targets[1].damage(targets[0]);
                            },
                            ai: {
                                order: 8,
                                result: {
                                    target(player, target) {
                                        if (ui.selected.targets.length == 0) {
                                            return -3;
                                        } else {
                                            return get.damageEffect(target, ui.selected.targets[0], target);
                                        }
                                    },
                                },
                                expose: 0.4,
                                threaten: 3,
                            },
                        },
                        // 固国:当你成为其他角色使用牌的目标后,你可与不为此牌目标的另一名其
                        // 他角色博弈,若你没输则此牌失效;若你赢则你与其依次获取此牌使用者1点智谋(无法获取智谋则改为<获得此牌使用者1张牌>).
                        guguo_Angel: {
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            forced: true,
                            filter(event, player) {
                                return game.countPlayer() > event.targets.length + 1 && player.countCards('h') && event.player != player;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('是否发动【固国】:？选择一名角色,与其进行博弈,若你没输则此牌失效;若你赢则你与其依次获取此牌使用者一点智谋', (event, player, target) => target != player && target != trigger.player && target.countCards('h') > 0)
                                    .set('ai', function (target) {
                                        var att = get.attitude(_status.event.player, target);
                                        return att > 0;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    event.target1 = result.targets[0];
                                    player.chooseChess(result.targets[0]);
                                }
                                ('step 2');
                                if (!result.tie) {
                                    if (result.bool) {
                                        trigger.targets.remove(trigger.targets);
                                        trigger.parent.triggeredTargets2.remove(trigger.targets);
                                        trigger.untrigger();
                                        if (trigger.player.zhimoudian > 0) {
                                            player.gainPlayerZhimou(trigger.player, 1);
                                        } else {
                                            player.gainPlayerCard(true, trigger.player, 'he');
                                        }
                                        if (trigger.player.zhimoudian > 0) {
                                            event.target1.gainPlayerZhimou(trigger.player, 1);
                                        } else {
                                            player.gainPlayerCard(true, trigger.player, 'he');
                                        }
                                    } else {
                                        trigger.targets.remove(trigger.targets);
                                        trigger.parent.triggeredTargets2.remove(trigger.targets);
                                        trigger.untrigger();
                                    }
                                }
                            },
                        },
                        // 辩才:当你博弈时,你可以消耗任意点智谋,你令转盘顺时针转动等量格.
                        biancai_Angel: {
                            trigger: {
                                global: 'chooseChessBegin',
                            },
                            filter(event, player) {
                                if (player == event.player) return true;
                                if (event.targets) return event.targets.includes(player);
                                return player == event.target;
                            },
                            check(event, player) {
                                var guaxiang = player
                                    .getCards('h')
                                    .filter((card) => 7 - get.value(card))
                                    .map((card) => get.guaxiang(card));
                                for (const i of guaxiang) {
                                    for (var o of game.filterChess) {
                                        if (o[1] == i) {
                                            if (o[0] != 8) return 10;
                                        }
                                    }
                                }
                                return 0;
                            },
                            content() {
                                'step 0';
                                var number = [];
                                for (let i = 1; i <= player.zhimoudian; i++) number.add(i);
                                player.chooseButton(['选择需要消耗的智谋点', [number, 'tdnodes']]).set(
                                    'ai',
                                    (button) => {
                                        var guaxiang = player
                                            .getCards('h')
                                            .filter((card) => 7 - get.value(card))
                                            .map((card) => get.guaxiang(card));
                                        for (const i of guaxiang) {
                                            for (var o of game.filterChess) {
                                                if (o[1] == i) {
                                                    if (o[0] != 8) {
                                                        if (o[0] == 1) return button == o[0];
                                                    }
                                                }
                                            }
                                        }
                                        return 0;
                                    },
                                    true
                                );
                                ('step 1');
                                if (result.links) {
                                    game.Micd(result.links[0]);
                                }
                            },
                        },
                        // 回合结束时,你可消耗任意点智谋并指定等量名角色,直到你下回合开始<纵守>角色于其回合外使用或打出一张牌后你获得一点智谋其摸一张牌.
                        zongshou_Angel: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            filter: (event, player) => player.zhimoudian > 0,
                            content() {
                                'step 0';
                                var number = [];
                                for (let i = 1; i <= player.zhimoudian; i++) number.add(i);
                                player.chooseButton(['是否发动【纵守】？:选择需要消耗的智谋点', [number, 'tdnodes']]).set('ai', (button) => {
                                    var num = game.filterPlayer((current) => get.attitude(player, current) > 0).length;
                                    num++;
                                    if (num > button) return button == Math.max(...number);
                                    return button == num;
                                });
                                ('step 1');
                                if (result.links) {
                                    player.removeZhimou(result.links[0]);
                                    player.chooseTarget('选择至多' + result.links[0] + '名角色,令其于其回合外使用或打出一张牌后你获得一点智谋其摸一张牌', true, [1, result.links[0]]).ai = (target) => {
                                        return get.attitude(player, target) > 0 || target == player;
                                    };
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.zongshou = result.targets;
                                    player.addTempSkill('zongshou_Angel_phase', { player: 'phaseBegin' });
                                }
                            },
                            subSkill: {
                                phase: {
                                    mark: true,
                                    intro: {
                                        content(event, player) {
                                            return '当前纵守角色' + get.translation(player.zongshou);
                                        },
                                    },
                                    trigger: {
                                        global: ['useCardAfter', 'respondAfter'],
                                    },
                                    filter(event, player) {
                                        if (_status.currentPhase != event.player && player.zongshou.includes(event.player)) {
                                            return true;
                                        }
                                        return false;
                                    },
                                    forced: true,
                                    logTarget: 'player',
                                    content() {
                                        player.addZhimou();
                                        trigger.player.draw();
                                    },
                                },
                            },
                        },
                        // 窃符:智谋数不大于你的其他角色回合结束时,若其本回合未造成过伤害,你可消耗x点智谋并
                        // 观看其手牌,你令其按你指定顺序依次使用与你当前智谋数等量张能使用的手牌.x为其智谋数.
                        qiefu_Angel: {
                            trigger: {
                                global: 'phaseEnd',
                            },
                            filter: (event, player) => event.player != player && player.zhimoudian >= event.player.zhimoudian && !event.player.getHistory('sourceDamage').length,
                            logTarget: 'player',
                            check(event, player) {
                                return get.attitude(player, event.player) > 0;
                            },
                            content() {
                                'step 0';
                                player.removeZhimou(trigger.player.zhimoudian);
                                event.num = 0;
                                ('step 1');
                                event.number = player.zhimoudian;
                                if (player.zhimoudian == 0) event.finish();
                                ('step 2');
                                event.num++;
                                player.chooseButton(
                                    ['选择' + get.translation(trigger.player) + '需要使用的第' + event.num + '张牌', trigger.player.getCards('h')],
                                    function (button) {
                                        return trigger.player.getUseValue({ name: button.link.name, nature: button.link.nature });
                                    },
                                    function (button) {
                                        return trigger.player.hasUseTarget({ name: button.link.name, nature: button.link.nature });
                                    }
                                );
                                ('step 3');
                                if (result.links) {
                                    trigger.player.chooseUseTarget(result.links[0], true);
                                }
                                ('step 4');
                                if (event.num != event.number) event.goto(2);
                            },
                        },
                        lianyin_Angel: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter: (event, player) => player.zhimoudian > 0,
                            filterTarget(event, player, target) {
                                if (target.sex != 'male' && target != player) return false;
                                if (target.storage.lianyin_Angel == undefined) return true;
                                if (typeof target.storage.lianyin_Angel == 'number') return target.storage.lianyin_Angel <= 0;
                                if (Array.isArray(target.storage.lianyin_Angel)) return target.storage.lianyin_Angel.length <= 0;
                                return false;
                            },
                            content() {
                                const i = 'lianyin_Angel';
                                var num = 1;
                                if (typeof target.storage[i] != 'number') target.storage[i] = 0;
                                target.storage[i] += num;
                                var str = false;
                                var info = get.info(i);
                                if (info && info.intro && (info.intro.name || info.intro.name2)) str = info.intro.name2 || info.intro.name;
                                else str = lib.translate[i];
                                if (str) game.log(target, '获得了', get.cnNumber(num), '个', '#g【' + str + '】');
                                target.markSkill(i);
                                player.removeZhimou();
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target(player, target) {
                                        return -1 - target.countCards('h');
                                    },
                                },
                            },
                            group: ['lianyin_Angel_discard', 'lianyin_Angel_use_card'],
                            subSkill: {
                                use_card: {
                                    enable: ['chooseToUse'],
                                    filter(event, player) {
                                        var a = (target) => {
                                            if (target.storage.lianyin_Angel == undefined) return false;
                                            if (typeof target.storage.lianyin_Angel == 'number') return target.storage.lianyin_Angel > 0;
                                            if (Array.isArray(target.storage.lianyin_Angel)) return target.storage.lianyin_Angel.length;
                                            return false;
                                        };
                                        var list = [];
                                        list.addArray(game.players.filter((value) => !value.isOut() && a(value)));
                                        if (list.length) {
                                            for (const i of list) {
                                                if (i.countCards('he') > 0) return true;
                                            }
                                        }
                                        return false;
                                    },
                                    chooseButton: {
                                        dialog(event, player) {
                                            var list = [];
                                            for (let i = 0; i < lib.inpile.length; i++) {
                                                var name = lib.inpile[i];
                                                if (name == 'gong_Angel') {
                                                    if (event.filterCard && event.filterCard({ name: name }, player, event)) list.push(['效果', '', 'gong_Angel']);
                                                    for (var j of lib.inpile_nature) {
                                                        if (event.filterCard && event.filterCard({ name: name, nature: j }, player, event)) list.push(['效果', '', 'gong_Angel', j]);
                                                    }
                                                } else if (get.type2(name) == 'tactics' && event.filterCard({ name: name }, player, event)) list.push(['策略', '', name]);
                                                else if (get.type(name) == 'effect' && event.filterCard({ name: name }, player, event)) list.push(['效果', '', name]);
                                            }
                                            return ui.create.dialog('联姻', [list, 'vcard']);
                                        },
                                        filter(button, player) {
                                            return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
                                        },
                                        check(button) {
                                            if (_status.event.parent.type != 'phase') return 1;
                                            var player = _status.event.player;
                                            return player.getUseValue({
                                                name: button.link[2],
                                                nature: button.link[3],
                                            });
                                        },
                                        backup(links, player) {
                                            return {
                                                filterCard: () => false,
                                                selectCard: -1,
                                                popname: true,
                                                viewAs: { name: links[0][2], nature: links[0][3] },
                                            };
                                        },
                                        prompt(links, player) {
                                            return '是否视为使用' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '';
                                        },
                                    },
                                    hiddenCard(player, name) {
                                        if (!lib.inpile.includes(name)) return false;
                                        var type = get.type(name);
                                        var a = (target) => {
                                            if (target.storage.lianyin_Angel == undefined) return false;
                                            if (typeof target.storage.lianyin_Angel == 'number') return target.storage.lianyin_Angel > 0;
                                            if (Array.isArray(target.storage.lianyin_Angel)) return target.storage.lianyin_Angel.length;
                                            return false;
                                        };
                                        if (typeof a != 'function') a = lib.filter.all;
                                        return (
                                            (type == 'basic' || type == 'trick') &&
                                            game.players.reduce((previousValue, currentValue) => {
                                                const result = a(currentValue);
                                                if (typeof result == 'number') previousValue += result;
                                                else if (result) previousValue++;
                                                return previousValue;
                                            }, 0) > 0
                                        );
                                    },
                                    ai: {
                                        fireAttack: true,
                                        respondgong_Angel: true,
                                        respondgong_Angeln: true,
                                        order: 1,
                                        result: {
                                            player(player) {
                                                if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                                return 1;
                                            },
                                        },
                                    },
                                },
                                discard: {
                                    trigger: {
                                        player: 'useCardBegin',
                                    },
                                    forced: true,
                                    filter: (event, player) => event.skill == 'lianyin_Angel_use_card_backup',
                                    content() {
                                        'step 0';
                                        event.list = [];
                                        event.card_true = false;
                                        event.list = game.filterPlayer((current) => current.countMark('lianyin_Angel'));
                                        event.num = 0;
                                        ('step 1');
                                        if (event.list[event.num]) {
                                            event.list[event.num].chooseToDiscard(true, 'he', '选择需要弃置的一张牌,若弃置牌为' + get.translation(trigger.card) + '则' + get.translation(player) + '视为使用同名牌').ai = function (card) {
                                                return card.name != trigger.card.name;
                                            };
                                        }
                                        ('step 2');
                                        if (result.bool) {
                                            if (result.cards[0].name == trigger.card.name) {
                                                event.card_true = true;
                                            }
                                            event.list[event.num].removeMark('lianyin_Angel', event.list[event.num].countMark('lianyin_Angel'));
                                        }
                                        if (event.list[event.num + 1]) {
                                            event.num++;
                                            event.goto(1);
                                        }
                                        ('step 3');
                                        if (!event.card_true) {
                                            player.removeZhimou();
                                            trigger.cancel();
                                        }
                                    },
                                },
                            },
                            intro: {
                                content: '已获得#枚联姻',
                            },
                        },
                        // 后动:锁定技,一名其他角色回合结束时,若你的智谋数大于场上角色数,你将智谋上限减少至0并执行一个额外的回合,
                        //你于本回合内免费使用策略牌且当造成伤害后你的智谋上限+1并获得1点智谋.
                        houdong_Angel: {
                            forced: true,
                            trigger: {
                                global: 'phaseEnd',
                            },
                            filter: (event, player) => player.zhimoudian > game.countPlayer(),
                            content() {
                                player.removeMaxZhimou(player.maxzhimoudian);
                                player.phase('nodelay');
                            },
                            group: 'houdong_Angel_phase',
                            subSkill: {
                                phase: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    forced: true,
                                    filter: (event, player) => event.skill == 'houdong_Angel',
                                    content() {
                                        player.addTempSkill('houdong_Angel_damage');
                                    },
                                },
                                damage: {
                                    init(player) {
                                        player.freeCard.add('tactics');
                                    },
                                    trigger: {
                                        source: 'damageSource',
                                    },
                                    filter(event, player) {
                                        return true;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player.addMaxZhimou();
                                        ('step 1');
                                        player.addZhimou();
                                    },
                                    onremove(player) {
                                        player.freeCard.remove('tactics');
                                    },
                                },
                            },
                        },
                        // 蛰伏:回合结束时,你可跳过下回合摸牌阶段:阳:摸3张牌;阴:智谋上限+1.
                        zhefu_Angel: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            zhuanhuanji: true,
                            mark: true,
                            marktext: '☯',
                            intro: {
                                content(storage, player) {
                                    var str = '阳<br>回合结束时,你可跳过下回合摸牌阶段摸3张牌';
                                    if (storage) return '阴<br>回合结束时,你可跳过下回合摸牌阶段智谋上限+1';
                                    return str;
                                },
                            },
                            content() {
                                if (player.storage.zhefu_Angel) {
                                    player.addMaxZhimou();
                                } else {
                                    player.draw(3);
                                }
                                player.skip('phaseDraw');
                                player.changeZhuanhuanji('zhefu_Angel');
                            },
                        },
                        xiguo_Angel: {
                            trigger: {
                                source: 'damageBegin2',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player.hp > player.hp;
                            },
                            content() {
                                player.gainPlayerCard(trigger.player, true, 'he');
                            },
                        },
                        guazhan_Angel: {
                            enable: 'phaseUse',
                            init: (player) => (player.die_guazhan = 0),
                            filter: (event, player) => player.zhimoudian > 0 && (player.getStat().skill.guazhan_Angel || 0) < (player.die_guazhan || 1),
                            filterTarget: (event, player, target) => get.distance(player, target) <= 1,
                            content() {
                                'step 0';
                                player.removeZhimou();
                                player.loseHp();
                                ('step 1');
                                target.damage();
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player, target) && player.hp > 1;
                                    },
                                },
                            },
                            group: 'guazhan_Angel_1',
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'dieAfter',
                                    },
                                    forced: true,
                                    content() {
                                        player.die_guazhan++;
                                    },
                                },
                            },
                        },
                        // 【死守】锁定技,你的手牌上限+2;你每次受到的伤害至多为你当前体力值.
                        sishou_Angel: {
                            mod: {
                                maxHandcard(player, num) {
                                    return num + 2;
                                },
                            },
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            filter: (event, player) => event.num > player.hp,
                            content() {
                                trigger.num = player.hp;
                            },
                        },
                        // 守御:当你受到伤害时,你可消耗2x点智谋,你防止此伤害并摸x张牌.x为此次伤害数.
                        shoyu_Angel: {
                            trigger: {
                                player: 'damageBegin1',
                            },
                            filter: (event, player) => player.zhimoudian >= 2 * event.num,
                            content() {
                                player.removeZhimou(2 * trigger.num);
                                player.draw(trigger.num);
                                trigger.num = 0;
                            },
                        },
                        //                         秦襄公 嬴开 5/5
                        // 【勤戍】当你造成或受到伤害后,你可消耗1点智谋摸1张牌并将1张手牌置于武将牌上称为<戍>.
                        qinshu_Angel: {
                            trigger: {
                                player: 'damageEnd',
                                source: 'damageEnd',
                            },
                            filter: (event, player) => player.zhimoudian > 0,
                            content() {
                                'step 0';
                                player.removeZhimou();
                                player.draw();
                                ('step 1');
                                if (player.countCards('h')) {
                                    player.chooseCard('将一张手牌置于武将牌上作为<戍>', true);
                                }
                                ('step 2');
                                player.addToExpansion(result.cards, player, 'giveAuto').gaintag.add('shu_Angel');
                            },
                        },
                        shu_Angel: {
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                        },
                        // 【伐戎】出牌阶段,你可消耗1点智谋并弃置任意张<戍>令一名角色摸等量的牌.
                        farong_Angel: {
                            enable: 'phaseUse',
                            audio: 2,
                            filter(event, player) {
                                return player.getExpansions('shu_Angel').length && player.zhimoudian > 0;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    return ui.create.dialog('伐戎', player.getExpansions('shu_Angel'));
                                },
                                select: () => [1, Infinity],
                                backup(links, player) {
                                    return {
                                        audio: 'farong_Angel',
                                        filterTarget: true,
                                        filterCard() {
                                            return false;
                                        },
                                        selectCard: -1,
                                        card: links,
                                        delay: false,
                                        forced: true,
                                        content() {
                                            'step 0';
                                            player.removeZhimou();
                                            var card = lib.skill.farong_Angel_backup.card;
                                            player.loseToDiscardpile(card);
                                            target.draw(card.length);
                                        },
                                        ai: {
                                            order: 10,
                                            result: {
                                                target(player, target) {
                                                    if (player != target) return 0;
                                                    return 1;
                                                },
                                            },
                                        },
                                    };
                                },
                                prompt() {
                                    return '请选择〖伐戎〗的目标';
                                },
                            },
                            ai: {
                                order: 1,
                                combo: 'qinshu_Angel',
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        // 韩景侯 韩虔 4/4
                        // 【威术】弃牌阶段开始时,你可消耗2点智谋,对一名其他角色造成1点伤害并令一名角色摸1张牌.
                        weishu_Angel: {
                            trigger: {
                                player: 'phaseDiscardBefore',
                            },
                            forced: true,
                            filter: (event, player) => player.zhimoudian > 1,
                            content() {
                                'step 0';
                                player.chooseTarget('是否发动【威术】？:消耗2点智谋,对一名其他角色造成1点伤害并令一名角色摸1张牌', (event, player, target) => target != player).ai = function (target) {
                                    var player = _status.event.player;
                                    return get.damageEffect(target, player, player);
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.removeZhimou(2);
                                    result.targets[0].damage();
                                    player.chooseTarget('选择一名角色,令其摸一张牌', true).ai = function (target) {
                                        var player = _status.event.player;
                                        var att = get.attitude(player, target);
                                        if (target.hasSkill('nogain')) att /= 10;
                                        return att / Math.sqrt(Math.min(5, 1 + target.countCards('h')));
                                    };
                                } else event.finish();
                                ('step 2');
                                if (result.bool) result.targets[0].draw();
                            },
                            ai: {
                                threaten: 2.4,
                            },
                        },
                        //                         赵烈侯 赵籍 3/4
                        // 【英异】回合开始时,你选择:1.交给一名其他角色2张牌视为对另一名其他角色使用1张【攻】;2.本回合出牌阶段开始时你摸1张牌并获得1点智谋.
                        yingyi_Angel: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var choiceList = ['本回合出牌阶段开始时你摸1张牌并获得1点智谋'];
                                if (player.countCards('he') > 1) choiceList.add('交给一名其他角色2张牌视为对另一名其他角色使用1张【攻】');
                                player
                                    .chooseControl('cancel2')
                                    .set('choiceList', choiceList)
                                    .set('prompt', get.prompt('yingyi_Angel'))
                                    .set('ai', function () {
                                        var player = _status.event.player;
                                        if (player.getFriends().length && player.countCards() > 2) return 1;
                                        return 0;
                                    });
                                ('step 1');
                                if (!result.control) event.finish();
                                else {
                                    if (result.index == 1) {
                                        player
                                            .chooseTarget('选择一名角色,交给其两张牌', true, (event, playar, target) => target != playar)
                                            .set('ai', function (target) {
                                                var att = get.attitude(_status.event.player, target);
                                                if (att > 0) {
                                                    if (_status.event.player != target) att += 2;
                                                    return att + Math.max(0, 5 - target.countCards('h'));
                                                }
                                                return att;
                                            });
                                    } else {
                                        player.addTempSkill('yingyi_Angel_draw');
                                    }
                                }
                                ('step 2');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    player.chooseCard('选择你要交给' + get.translation(event.target) + '的牌', true, 2, 'he').set('ai', function (card) {
                                        return 7 - get.value(card);
                                    });
                                }
                                ('step 3');
                                if (result.bool) {
                                    event.target.gain(result.cards, 'gain2', 'log');
                                    var target1 = event.target;
                                    if (game.countPlayer((current) => current != player && current != target1) > 0) {
                                        player.chooseUseTarget(
                                            { name: 'gong_Angel' },
                                            game.filterPlayer((current) => current != player && current != target1)
                                        );
                                    }
                                }
                            },
                            subSkill: {
                                draw: {
                                    trigger: {
                                        player: 'phaseUseBegin',
                                    },
                                    forced: true,
                                    content() {
                                        player.draw();
                                        player.addZhimou();
                                    },
                                },
                            },
                        },
                        //                         魏文侯 魏斯 4/4
                        // 【革弊】回合开始时,你可消耗任意点智谋并摸等量张牌,若你的手牌数为场上最多则你弃置2张牌.
                        gebi_Angel: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filter: (event, player) => player.zhimoudian > 0,
                            content() {
                                'step 0';
                                var number = [];
                                for (let i = 1; i <= player.zhimoudian; i++) number.add(i);
                                player.chooseButton(['是否发动【革弊】？:选择需要消耗的智谋点', [number, 'tdnodes']]).set('ai', (button) => {
                                    var num = 0;
                                    for (const i of game.players) {
                                        if (i != player) {
                                            num = Math.max(num, i.countCards('h'));
                                        }
                                    }
                                    return (
                                        Math.max(
                                            ...number.map((i) => {
                                                if (i + player.countCards('h') < num) return i;
                                            })
                                        ) == button.link
                                    );
                                });
                                ('step 1');
                                if (result.links) {
                                    player.removeZhimou(result.links[0]);
                                    player.draw(result.links[0]);
                                    if (player.isMaxHandcard()) player.chooseToDiscard('he', 2, true);
                                }
                            },
                        },
                        //                      魏武侯 魏击 4/4
                        // 【域疆】当你受到伤害后则你消耗1点智谋摸1张牌;出牌阶段结束时,本阶段若你造成过伤害则你消耗1点智谋摸2张牌.
                        yujiang_Angel: {
                            trigger: {
                                player: ['damageEnd', 'phaseUseEnd'],
                            },
                            filter(event, player) {
                                switch (event.name) {
                                    case 'damage':
                                        return player.zhimoudian > 0;
                                        break;
                                    case 'phaseUse':
                                        return player.getStat('damage') > 0;
                                        break;
                                }
                            },
                            content() {
                                switch (trigger.name) {
                                    case 'damage':
                                        player.removeZhimou();
                                        player.draw();
                                        break;
                                    case 'phaseUse':
                                        player.removeZhimou();
                                        player.draw(2);
                                        break;
                                }
                            },
                        },
                        // 【砭乏】回合结束时,你可失去1点体力并消耗1点智谋摸三张牌.
                        bianfa_Angel: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            filter: (event, player) => player.zhimoudian > 0,
                            check(event, player) {
                                if (player.hp > 2) return true;
                                if (player.hp > 1 && player.countCards({ name: 'liang' }, 'h') > 0) return true;
                                return false;
                            },
                            content() {
                                player.loseHp();
                                player.removeZhimou();
                                player.draw(3);
                            },
                        },
                        //         骊姬 3/3
                        // 【姬乱】姬乱:锁定技,其他角色的回合开始时,你令其弃置1张牌,若其手牌不大于你则其失去1点智谋.
                        jiluan_Angel: {
                            trigger: {
                                global: 'phaseBegin',
                            },
                            logTarget: 'player',
                            forced: true,
                            filter: (event, player) => event.player != player,
                            content() {
                                trigger.player.chooseToDiscard('he', true);
                                if (trigger.player.countCards('h') <= player.countCards('h')) trigger.player.removeZhimou();
                            },
                        },
                        // 【诋陷】每轮限一次,其他角色受到伤害时,你可消耗1点智谋弃置其2张牌.
                        dixian_Angel: {
                            round: 1,
                            trigger: {
                                global: 'damageEnd',
                            },
                            filter: (event, player) => player.zhimoudian > 0 && event.player != player,
                            content() {
                                player.removeZhimou();
                                player.discardPlayerCard('he', true, trigger.player, 2);
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                        },
                        geanguanhuo_Angel_skill: {
                            mod: {
                                playerEnabled(card, player, target) {
                                    if (player != target) return false;
                                },
                            },
                        },
                        fudichouxin_Angel_skill: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            popup: false,
                            charlotte: true,
                            filter(event, player) {
                                return player.getExpansions('fudichouxin_Angel_Mark').length;
                            },
                            async content(event, trigger, player) {
                                var cards = player.getExpansions('fudichouxin_Angel_Mark');
                                player.gain(cards, 'draw');
                                game.log(player, '收回了' + get.cnNumber(cards.length) + '张<釜底抽薪>牌');
                                player.removeSkill('fudichouxin_Angel_skill');
                            },
                            mark: true,
                            intro: {
                                markcount: 'expansion',
                                mark(dialog, storage, player) {
                                    var cards = player.getExpansions('fudichouxin_Angel_Mark');
                                    if (player.isUnderControl(true)) dialog.addAuto(cards);
                                    return '共有' + get.cnNumber(cards.length) + '张牌';
                                },
                            },
                        },
                        mantianguohai_skill: {
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            content() {
                                trigger.num--;
                            },
                            onremove(player) {
                                for (const i of player.getCards('s')) {
                                    if (i.name == 'mantianguohai_Angel') player.discard(i);
                                }
                            },
                        },
                    },
                    translate: {
                        //分栏名
                        wenwuliezhuan: '文武列传',
                        zhaoguosigongzi: '战国四公子',
                        dazhoutianzi: '大周天子',
                        quanchenfengyun: '权臣风云',
                        zhuhoshijia: '诸侯世家',
                        zongshifengyun: '宗室风韵',
                        //武将名
                        sunwu_Angel: '孙武',
                        yangyouji_Angel: '养由基',
                        yanhui_Angel: '颜回',
                        jichonger_Angel: '姬重耳',
                        linxiangru_Angel: '蔺相如',
                        quyuan_Angel: '屈原',
                        baiqi_Angel: '白起',
                        pangjuan_Angel: '庞涓',
                        xianzhen_Angel: '先轸',
                        tianwen_Angel: '田文',
                        zhaosheng_Angel: '赵胜',
                        zhangmengtan_Angel: '张孟谈',
                        huangxie_Angel: '黄歇',
                        weiwuji_Angel: '魏无忌',
                        jiying_Angel: '季赢',
                        ganlong_Angel: '甘龙',
                        jifa_Angel: '姬发',
                        zhaowuxu_Angel: '赵无恤',
                        yingkai_Angel: '嬴开',
                        liji_Angel: '骊姬',
                        hanqian_Angel: '韩虔',
                        zhaoji_Angel: '赵籍',
                        weisi_Angel: '魏斯',
                        weiji_Angel: '魏击',
                        //装备技能名
                        bishou_skill: '匕首',
                        bishou_skill_info: '你的阳普通【攻】均视为【攻·刺】',
                        anbiao_skill: '暗镖',
                        anbiao_skill_info: '你可以将2张阴阳不同的【攻】当作一张不可被响应的普通【攻】使用',
                        duandao_skill: '短刀',
                        duandao_skill_info: '你可以将1张普通【攻】和另1张手牌当作【攻·斩】使用',
                        changmao_skill: '长矛',
                        changmao_skill_info: '你的【攻·刺】造成的伤害+1',
                        yinggong_skill: '硬弓',
                        yinggong_skill_info: '你的阳普通【攻】均视为【攻·射】',
                        jiche_skill: '藉车',
                        jiche_skill_info: '你的【攻·射】指定目标后,目标角色与其距离为1的其他角色成为此【攻·射】额外目标',
                        qingjia_skill: '轻甲',
                        qingjia_skill_info: '当你受到伤害时,你可消耗任意点智谋减少等量伤害',
                        banjia_skill: '板甲',
                        banjia_skill_info: '当你成为1张【攻】的目标后,你可将1张与此【攻】五行相同的手牌当【守】使用',
                        yuandun_skill: '圆盾',
                        yuandun_skill_info: '你的阳【攻】可以当作【守】使用或打出',
                        tiedun_skill: '铁盾',
                        tiedun_skill_info: '【攻·刺】和【攻·射】对你无效',
                        zhongjia_skill: '重甲',
                        zhongjia_skill_info: '阳普通【攻】和【攻·斩】对你无效',
                        yingzhai_skill: '营寨',
                        yingzhai_skill_info: '每回合以你为目标的第1张【攻】对你无效',
                        lijiao_skill: '礼教',
                        lijiao_skill_info: '出牌阶段,你可弃置1张【攻】获得1点智谋',
                        zhanbu_skill: '占卜',
                        zhanbu_skill_info: '你参与的博弈的博弈牌亮出时,你可用1张手牌代替其中1张博弈牌',
                        chuchui_skill: '厨炊',
                        chuchui_skill_info: '你对一名角色使用1张阳【粮】后,其回复1点体力',
                        dujian_skill: '毒箭',
                        dujian_skill_info: '你使用的【攻·射】对一名角色造成伤害时,你可弃置1张牌令此伤害+1',
                        nuji_skill: '弩机',
                        nuji_skill_info: '每回合你使用的第一张【攻】不计入使用次数',
                        juma_skill: '拒马',
                        juma_skill_info: '装备车骑牌的角色对你使用普通【攻】后,其交给你1张牌',
                        zhulan_skill: '竹篮',
                        zhulan_skill: '你的手牌上限+1',
                        tuiche_skill: '推车',
                        tuiche_skill_info: '出牌阶段每名角色限一次,你可将1张手牌交给一名其他角色',
                        gong_Angelngjia_skill: '商贾',
                        gong_Angelngjia_skill_info: '出牌阶段每名角色限一次,你可交给一名其他角色1张手牌或令其获取你1点智谋你获得其1张手牌',
                        tieli_skill: '铁犁',
                        tieli_skill_info: '你的摸牌数+1',
                        caoyun_skill: '漕运',
                        caoyun_skill_info: '出牌阶段开始时,你可重铸任意张五行不同的手牌',
                        kanzi_skill: '堪舆',
                        kanzi_skill_info: '出牌阶段每名角色限一次,你可观看一名其他角色1张手牌',
                        //技能名
                        taolue_sankoo: '韬略',
                        taolue_sankoo_info: '当你需要使用1张【攻】或【粮】时,你可消耗1点智谋将1张手牌当作此牌使用',
                        mouhui_sankoo: '谋晦',
                        mouhui_sankoo_info: '锁定技,一名角色的体力值发生变化后,若其与你的体力值的数量关系发生变化则你获取其1点智谋',
                        zongbing_Angel: '纵兵',
                        zongbing_Angel_info: '转换技,你可消耗1点智谋,:阳:你可以将一张阳牌当做一张【守】使用或打出,你回复一点体力值或2点智谋;阴:你可以将一张阴牌当做一张【攻】使用,你令此【攻】免费',
                        sheque_Angel: '射却',
                        sheque_Angel_info: '锁定技,你使用的第一张手牌中的【攻】视为【射】;你于出牌阶段时获得的智谋点为1',
                        fusheng_sankoo: '复圣',
                        fusheng_sankoo_info: '锁定技,每回合你对每名其他角色只能造成一次伤害;其他角色对你使用牌时你获取其1点智谋',
                        haoxue_sankoo: '好学',
                        haoxue_sankoo_info: '出牌阶段限一次,你可消耗任意点智谋亮出牌堆顶等量张牌,你获得其中一种类别所有牌且本回合你免费使用这些牌',
                        wangwai_sankoo: '亡外',
                        wangwai_sankoo_info: '锁定技,其他角色每比你多1张手牌则其与你的距离+1',
                        zhuoba_sankoo: '擢霸',
                        zhuoba_sankoo_info: '回合结束时,你可消耗任意点智谋摸等量张牌执行一个额外的出牌阶段,若如此做,此阶段结束时你将手牌摸至x一次交给每名其他角色一张牌.x为场上其他角色数',
                        wanbi_sankoo: '完璧',
                        wanbi_sankoo_info: '锁定技,其他角色不能获得你的手牌或装备牌;你于回合外失去牌后,你令一名角色摸等量张牌',
                        kuiwu_sankoo: '馈侮',
                        kuiwu_sankoo_info: '一名其他角色出牌阶段结束时,若其本回合造成过伤害,你可消耗1点智谋并与其博弈,若你赢则你对其造成1点伤害;若其没赢则其失去1点智谋',
                        aiying_sankoo: '哀郢',
                        aiying_sankoo_info: '锁定技,当你受到1点伤害时,你获得1点智谋',
                        xiufa_sankoo: '修法',
                        xiufa_sankoo_info: '出牌阶段每名角色限一次,你可消耗任意点智谋/失去任意点体力令一名角色回复等量点体力/获得等量点智谋',
                        tulu_sankoo: '屠戮',
                        tulu_sankoo_info: '锁定技,你令一名其他角色进入濒死状态时,你减少1点智谋上限令其死亡',
                        shanji_sankoo: '擅击',
                        shanji_sankoo_info: '你使用的【攻】指定目标后,你可消耗1点智谋令此【攻】伤害基数+1',
                        jiwu_sankoo: '嫉忤',
                        jiwu_sankoo_info: '限定技,出牌阶段,你可减少一名其他角色x/2点体力上限(向下取整),其增加等量点智谋上限并获取你等量点智谋,你减少x/2点智谋上限(向上取整).x为其当前体力上限',
                        duneng_sankoo: '妒能',
                        duneng_sankoo_info: '锁定技,你对智谋数大于你的角色造成伤害时,其选择:1.此伤害+1;2.你获取其1点智谋',
                        yanggong_Angel: '佯攻',
                        yanggong_Angel_info: '出牌阶段限一次,你可消耗2点智谋将1/2张<伏兵>牌当做1张【攻】/【远交近攻】免费使用',
                        fubing_Angel: '伏兵',
                        fubing_Angel_info: '你使用的【攻】结算后,你可消耗1点智谋并将1张【攻】置于武将牌上,视为你免费使用1张【攻】',
                        fubing: '伏兵',
                        guangna_Angel: '广纳',
                        guangna_Angel_info: '锁定技,当你获得牌时,你获得1点智谋;智谋数小于你的角色对你造成的伤害改为获取你等量点智谋',
                        jiaogong_Angel: '交攻',
                        jiaogong_Angel_info: '出牌阶段限一次,你可以消耗全部智谋,你令一名其他角色选择:1.对你指定的另一名其他角色造成1点伤害获得x点智谋;2.交给你x张牌.x为你消耗智谋数',
                        cixiang_Angel: '辞相',
                        cixiang_Angel_info: '当你获得牌后,你可以弃置其中任意张牌获得等量点智谋',
                        zongfan_Angel: '纵反',
                        zongfan_Angel_info: '一名其他角色使用的牌对你造成伤害后,你可消耗任意点智谋亮出牌堆顶等量张牌,其中每有一张与此牌五行相同的牌则你对其造成1点伤害',
                        tuiyin_Angel: '退隐',
                        tuiyin_Angel_info: '限定技,回合结束时,若你为场上手牌数最少,你可消耗2点智谋并将手牌摸至场上唯一最多后再摸3张牌,直到你下个回合开始其他角色无法对你造成伤害且你因此获得的牌不计入手牌上限',
                        youshui_Angel: '游说',
                        youshui_Angel_info: '出牌阶段限一次,你可消耗1点智谋并将1张手牌交给一名其他角色,其对你指定的另一名其他角色造成1点伤害',
                        shu_Angel: '戍',
                        biancai_Angel: '辩才',
                        biancai_Angel_info: '当你博弈开始时,你可以消耗任意点智谋,你令转盘顺时针转动等量格',
                        guguo_Angel: '固国',
                        guguo_Angel_info: '当你成为其他角色使用牌的目标后,你可与不为此牌目标的另一名其 他角色博弈,若你没输则此牌失效;若你赢则你与其依次获取此牌使用者1点智谋(无法获取智谋则改为<获得此牌使用者1张牌>)',
                        zongshou_Angel: '纵守',
                        zongshou_Angel_info: '回合结束时,你可消耗任意点智谋并指定等量名角色,直到你下回合开始<纵守>角色于其回合外使用或打出一张牌后你获得一点智谋其摸一张牌',
                        qiefu_Angel: '窃符',
                        qiefu_Angel_info: '智谋数不大于你的其他角色回合结束时,若其本回合未造成过伤害,你可消耗x点智谋并观看其手牌,你令其按你指定顺序依次使用与你当前智谋数等量张能使用的手牌.x为其智谋数',
                        lianyin_Angel: '联姻',
                        lianyin_Angel_info: '出牌阶段限一次,你可消耗1点智谋令一名没有<联姻>的男性角色获得<联姻>标记.当你需要使用1张牌时,你可以令有<联姻>的武将同时弃置1张牌,若有此牌名则视为你使用此牌弃置此牌名移除<联姻>',
                        houdong_Angel: '后动',
                        houdong_Angel_info: '锁定技,一名角色回合结束时,若你的智谋数大于场上角色数,你将智谋上限减少至0并执行一个额外的回合,你于本回合内造成伤害后你的智谋上限+1并获得1点智谋',
                        zhefu_Angel: '蛰伏',
                        zhefu_Angel_info: '回合结束时,你可跳过下回合摸牌阶段:阳:摸3张牌;阴:智谋上限+1',
                        guazhan_Angel: '寡战',
                        guazhan_Angel_info: '出牌阶段限X次,你可以失去1点体力值并消耗1点智谋值,对一名你与其距离为1的其他角色造成1点伤害.X为你已击杀角色数量且至少为1',
                        xiguo_Angel: '袭国',
                        xiguo_Angel_info: '锁定技,当你对一名体力值大于你的角色造成伤害时,你获得其1张牌',
                        shoyu_Angel: '守御',
                        shoyu_Angel_info: '当你受到伤害时,你可消耗2x点智谋,你防止此伤害并摸x张牌.x为此次伤害数',
                        sishou_Angel: '死守',
                        sishou_Angel_info: '锁定技,你的手牌上限+2;你每次受到的伤害至多为你当前体力值',
                        qinshu_Angel: '勤戍',
                        qinshu_Angel_info: '当你造成或受到伤害后,你可消耗1点智谋摸1张牌并将1张手牌置于武将牌上称为<戍>',
                        farong_Angel: '伐戎',
                        farong_Angel_info: '出牌阶段,你可消耗1点智谋并弃置任意张<戍>令一名角色摸等量的牌',
                        dixian_Angel: '诋陷',
                        dixian_Angel_info: '每轮限一次,其他角色受到伤害时,你可消耗1点智谋弃置其2张牌',
                        jiluan_Angel: '姬乱',
                        jiluan_Angel_info: '锁定技,其他角色的回合开始时,你令其弃置1张牌,若其手牌不大于你则其失去1点智谋',
                        bianfa_Angel: '砭乏',
                        bianfa_Angel_info: '回合结束时,你可失去1点体力并消耗1点智谋摸三张牌',
                        yujiang_Angel: '域疆',
                        yujiang_Angel_info: '当你受到伤害后则你消耗1点智谋摸1张牌;出牌阶段结束时,本阶段若你造成过伤害则你消耗1点智谋摸2张牌',
                        gebi_Angel: '革弊',
                        gebi_Angel_info: '回合开始时,你可消耗任意点智谋并摸等量张牌,若你的手牌数为场上最多则你弃置2张牌',
                        yingyi_Angel: '英异',
                        yingyi_Angel_info: '回合开始时,你选择:1.交给一名其他角色2张牌视为对另一名其他角色使用1张【攻】;2.本回合出牌阶段开始时你摸1张牌并获得1点智谋',
                        weishu_Angel: '威术',
                        weishu_Angel_info: '弃牌阶段开始时,你可消耗2点智谋,对一名其他角色造成1点伤害并令一名角色摸1张牌',
                        fudichouxin_Angel_skill: '釜底抽薪',
                    },
                };
                for (const i in pack.character) {
                    const info = pack.character[i];
                    info[4].push(`ext:列疆/img/character/${i}.png`);
                }
                for (const i in pack.skill) {
                    const info = pack.skill[i];
                    info.audio = 'ext:列疆/audio:2';
                    if (info.subSkill) {
                        for (const x in info.subSkill) {
                            const infox = info.subSkill[x];
                            if (!infox.audio) {
                                infox.audio = 'ext:列疆/audio:2';
                            } //如果是choosebutton,语音应该是xxx_backup
                        }
                    }
                }
                lib.config.characters.add('列疆');
                lib.config.all.characters.add('列疆');
                lib.translate.列疆_character_config = '列疆';
                return pack;
            });
        },
        config: {
            introduce: {
                name: '<span class="yellowtext">查看扩展介绍</span><span style="color: #AFEEEE"><font size="3px">展开</font></span>',
                clear: true,
                onclick() {
                    if (this.help == undefined) {
                        var log = [`<div style="color: rgb(128,128,128);font-family:'SimSun';font-weight:bold;font-size:1.5em;text-gong_Angeldow: 2px 2px 4px rgba(0, 0, 0, 0.5);">列疆扩展是以上古先秦时期为背景的无名杀扩展,玩家可以扮演先秦时期的著名人物,在对局中隐藏自己的身份,合理的使用智谋点和手牌,锻造装备牌,并且熟练的运用玩家的武将技能,取得最终胜利</div>`];
                        var more = ui.create.div('.help', '<div style="border:2px solid gray"><P align=left>' + log.join('<br>') + '</P>');
                        this.parentNode.insertBefore(more, this.nextSibling);
                        this.help = more;
                        this.innerHTML = '<span class="yellowtext">查看扩展介绍</span><span style="color: #AFEEEE"><font size="3px">关闭</font></span>';
                    } else {
                        this.parentNode.removeChild(this.help);
                        delete this.help;
                        this.innerHTML = '<span class="yellowtext">查看扩展介绍</span><span style="color: #AFEEEE"><font size="3px">展开</font></span>';
                    }
                },
            },
            thank: {
                name: '<span class="yellowtext">鸣谢列表</span><span style="color: #AFEEEE; font-size:1.5em; text-align:center; box-gong_Angeldow: 2px 2px 4px rgba(0, 0, 0, 0.3);"><font size="3px">展开</font></span>',
                clear: true,
                onclick() {
                    if (this.help == undefined) {
                        var log = [`<div style="color: rgb(255, 255, 0);font-family:'SimSun';font-weight:bold;font-size:1.5em;text-gong_Angeldow: 2px 2px 4px rgba(0, 0, 0, 0.5);">冒泡的大鱼——主策划师</div>`, `<div style="color: rgb(0, 0, 255);font-family:'SimSun';font-weight:bold;font-size:1.5em;text-gong_Angeldow: 2px 2px 4px rgba(0, 0, 0, 0.5);">通稿2023——版本策划师</div>`, `<div style="color: rgb(0, 255, 255);font-family:'SimSun';font-weight:bold;font-size:1.5em;text-gong_Angeldow: 2px 2px 4px rgba(0, 0, 0, 0.5);">积粮隐者——游戏架构师</div>`, `<div style="color: rgb(128,128,128);font-family:'SimSun';font-weight:bold;font-size:1.5em;text-gong_Angeldow: 2px 2px 4px rgba(0, 0, 0, 0.5);">Angel——代码编写者</div>`];
                        var more = ui.create.div('.help', '<div style="border:2px solid gray"><P align=left>' + log.join('<br>') + '</P>');
                        this.parentNode.insertBefore(more, this.nextSibling);
                        this.help = more;
                        this.innerHTML = '<span class="yellowtext">鸣谢列表</span><span style="color: #AFEEEE; font-size:1.5em; text-align:center; box-gong_Angeldow: 2px 2px 4px rgba(0, 0, 0, 0.3);"><font size="3px">关闭</font></span>';
                    } else {
                        this.parentNode.removeChild(this.help);
                        delete this.help;
                        this.innerHTML = '<span class="yellowtext">鸣谢列表</span><span style="color: #AFEEEE; font-size:1.5em; text-align:center; box-gong_Angeldow: 2px 2px 4px rgba(0, 0, 0, 0.3);"><font size="3px">展开</font></span>';
                    }
                },
            },
        },
        package: extensionInfo,
    };
});

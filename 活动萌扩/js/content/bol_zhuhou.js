import { lib, game, ui, get, ai, _status } from '../../../../noname.js';
//春节--狂神解禁
game.isInSpringFestival = function () {
    const date = new Date(), time = {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate(),
    };
    return time.year == 2024 && time.month == 2 && time.day >= 10 && time.day <= 24;
};
const brawl = {
    name: "诸侯伐董",
    mode: "identity",
    intro: (() => {
        let intro = [
            '<span class=\'texiaotext\' style=\'color: #FF0000\'>声明：本扩展原作者为橙续缘，修改更新者为萌新（转型中），目前原作者已退坑，侵删</span>',
            "游戏背景：董卓权倾朝野，荒淫无度，群雄奋起而伐之，可是董卓军势大，旗下拥有众多良将精锐。现在能不能平叛董卓之乱，这重任就托付于你们身上了！",
            "游戏人数：<ul><li>常规关卡：2盟军(己方)vs3董卓军(敌方)</li><li>特殊关卡：3盟军(己方)vs5董卓军(敌方)</li></ul>",
            '禁将：SP贾诩(OL)、步骘、灵雎、SP关羽(OL)、标袁术(OL)、左慈、黄皓(OL)、大乔、徐晃、韩浩史涣，神武将',
            "特殊规则：<ul><li>(1) 己方角色起始手牌+1</li><li>(2) 一名己方角色阵亡后，若伤害来源不是己方角色，则己方角色摸三张牌</li></ul>",
            "胜利条件：击败关卡将领",
        ];
        if (game.isInSpringFestival()) {
            intro.unshift('<span class=\'texiaotext\' style=\'color: #FF0000\'>春节期间牢狂出没，boss挑战限时开启，己方所有角色坐拥三倍体力！击败可获得114514萌币！</span>');
            intro[1] = intro[1].slice(intro[1].indexOf('声明')).slice(0, -7);
        }
        return intro;
    })(),
    init() {
        if (!_status.characterlist) lib.skill.pingjian.initList();
        _status.characterlist.removeArray(["sp_jiaxu", "buzhi", "sp_guanyu", "ol_yuanshu", "huanghao"]);
        _status.characterlist.removeArray(_status.characterlist.filter(i => lib.character[i][1] == 'shen'));
        for (var name of ["lingju", "zuoci", "xuhuang", "hanhaoshihuan", 'daqiao']) {
            _status.characterlist.removeArray(_status.characterlist.filter(i => i.includes(name)));
        }
        _status.cxyCPState = ['normal', 'special'].randomGet();
        game.playerBySeat = function (seat) {
            return game.filterPlayer(function (current) {
                return current.cxySeatNumber == seat;
            })[0];
        };
        lib.translate.cxyMengJun = '盟 ';
        lib.translate.cxyMengJun2 = '盟军';
        lib.translate.cxySuiCong = '卒 ';
        lib.translate.cxySuiCong2 = '随从';
        lib.translate.cxyJiangLing = '将 ';
        lib.translate.cxyJiangLing2 = '将领';
        lib.skill._cxyJiangLingPhaseBegin = {
            ruleSkill: true,
            trigger: { global: "phaseBegin" },
            filter(event, player) {
                if (_status.cxyCPState != "special") return false;
                return event.player == player && player == game.cxyJiangLing;
            },
            direct: true,
            content() {
                "step 0"
                event.targets = game.filterPlayer(function (current) {
                    return game.cxyAis.includes(current) && current.name != "cxySunJian" && current.hp != 1;
                });
                event.targets.sort(lib.sort.seat);
                "step 1"
                for (var i = 0; i < event.targets.length; i++) {
                    event.targets[i].loseHp();
                }
            },
        };
        game.checkpoint = [
            ["cxyZhangJi", "cxyLongXiangJun", "cxyLongXiangJun"],
            ["cxyFanChou", "cxyHuBenJun", "cxyHuBenJun"],
            ["cxyNiuFuDongXie", "cxyFengYaoJun", "cxyFengYaoJun"],
            ["cxyDongYue", "cxyBaoLveJun", "cxyBaoLveJun"],
            ["cxyLiJue", "cxyFeiXiongJunZuo", "cxyFeiXiongJunYou"],
            ["cxyGuoSi", "cxyFeiXiongJunYou", "cxyFeiXiongJunZuo"],
        ];
    },
    content: {
        playerNumber: _status.cxyCPState == "normal" ? 5 : 8,
        chooseCharacterBefore() {
            lib.element.player.$dieAfter = function () {
                if (_status.video) return;
                if (!this.node.dieidentity) {
                    var str;
                    var node = ui.create.div('.damage.dieidentity', "阵亡", this);
                    ui.refresh(node);
                    node.style.opacity = 1;
                    this.node.dieidentity = node;
                }
            };
            lib.element.player.dieAfter = function (source) {
                if (this.identity == "cxyJiangLing") game.over(true);
                if (this.identity == "cxyMengJun") {
                    if (get.population("cxyMengJun") == 0) game.over(false);
                    if (source.identity != "cxyMengJun") {
                        var targets = game.filterPlayer(function (current) {
                            return current.identity == "cxyMengJun";
                        });
                        targets.sort(lib.sort.seat);
                        game.asyncDraw(targets, 3);
                    }
                }
            };
            //确定是否为特殊关卡，默认不是
            //调整玩家数量
            var playerNum = _status.cxyCPState == 'normal' ? 5 : 8;
            var playerCount = game.players.length;
            if (playerCount < playerNum) {
                for (var i = 0; i < playerNum - playerCount; i++) {
                    game.addPlayer();
                }
            } else if (playerCount > playerNum) {
                for (var i = 0; i < playerCount - playerNum; i++) {
                    game.removePlayer(game.players[game.players.length - 1]);
                }
            }
            for (var i = 0; i < game.players.length; i++) {
                game.players[i].logAi = game.kongfunc;
                game.players[i].dieAfter = lib.element.player.dieAfter;
                game.players[i].getFriends = function (func) {
                    var player = this;
                    var targets;
                    var self = false;
                    if (func === true) {
                        func = null;
                        self = true;
                    }
                    switch (player.identity) {
                        case 'cxyMengJun':
                            targets = game.filterPlayer(function (current) {
                                if (current == player && !self) return false;
                                return current.identity == 'cxyMengJun';
                            });
                            break;
                        case 'cxyJiangLing': case 'cxySuiCong':
                            targets = game.filterPlayer(function (current) {
                                if (current == player && !self) return false;
                                return current.identity == 'cxyJiangLing' || current.identity == 'cxySuiCong';
                            });
                            break;
                    }
                    return targets;
                };
                game.players[i].isFriendsOf = function (player) {
                    return this.getFriends(true).includes(player);
                };
                game.players[i].getEnemies = function (func) {
                    var player = this;
                    var targets;
                    switch (player.identity) {
                        case 'cxyMengJun':
                            targets = game.filterPlayer(function (current) {
                                return current.identity == 'cxyJiangLing' || current.identity == 'cxySuiCong';
                            });
                            break;
                        case 'cxyJiangLing': case 'cxySuiCong':
                            targets = game.filterPlayer(function (current) {
                                return current.identity == 'cxyMengJun';
                            });
                            break;
                    }
                    return targets;
                };
                game.players[i].isEnemiesOf = function (player) {
                    return this.getEnemies(true).includes(player);
                };
            }
            //分配座位
            if (_status.cxyCPState == 'normal') {
                //五人局，1、2位固定为盟军，3、5位固定为随从，4位固定为将领
                var seats = [[1, 2, 3, 4, 5], [2, 3, 4, 5, 1]];
                var seat = seats.randomGet();
                game.cxyAis = [];
                game.cxyJiangLing = null;
                for (var i = 0; i < game.players.length; i++) {
                    game.players[i].cxySeatNumber = seat[i];
                    game.players[i].seatNum = game.players[i].cxySeatNumber;
                    game.players[i].setNickname(get.cnNumber(game.players[i].cxySeatNumber, true) + '号位');
                    if (seat[i] == 3 || seat[i] == 4 || seat[i] == 5) {
                        game.cxyAis.push(game.players[i]);
                    }
                    if (seat[i] == 4) {
                        game.cxyJiangLing = game.players[i];
                    }
                }
            } else {
                //八人局，1、5位盟军，3位固定孙坚（盟军），2、4、6、8位随从，7位固定华雄
                var seats = [
                    [1, 2, 3, 4, 5, 6, 7, 8],
                    [5, 6, 7, 8, 1, 2, 3, 4],
                ];
                var seat = seats.randomGet();
                game.cxyAis = [];
                game.cxyJiangLing = null;
                for (var i = 0; i < game.players.length; i++) {
                    game.players[i].cxySeatNumber = seat[i];
                    game.players[i].seatNum = game.players[i].cxySeatNumber;
                    game.players[i].setNickname(get.cnNumber(game.players[i].cxySeatNumber, true) + '号位');
                    if (seat[i] == 3 || seat[i] == 2 || seat[i] == 4 || seat[i] == 6 || seat[i] == 8 || seat[i] == 7) {
                        game.cxyAis.push(game.players[i]);
                    }
                    if (seat[i] == 7) {
                        game.cxyJiangLing = game.players[i];
                    }
                }
            }
            game.gameDraw = function (begin) {
                var next = game.createEvent('gameDraw');
                next.begin = begin;
                next.setContent(function () {
                    "step 0"
                    var target = event.begin;
                    while (true) {
                        var num = target.identity == "cxyMengJun" ? 5 : 4;
                        target.directgain(get.cards(num));
                        target = target.next;
                        if (target == event.begin) break;
                    }
                    game.me.chooseBool("可以更换一次手牌，是否更换？");
                    "step 1"
                    if (result.bool) {
                        var hs = game.me.getCards('h');
                        game.addVideo('lose', game.me, [get.cardsInfo(hs), [], []]);
                        for (var i = 0; i < hs.length; i++) {
                            hs[i].discard(false);
                        }
                        game.me.directgain(get.cards(hs.length));
                    }
                });
            };
            get.rawAttitude = function (from, to) {
                if (!from || !to) return 0;
                if (from == to) return 10;
                if (from.identity == "cxyMengJun") {
                    if (to.identity == "cxyMengJun") return 8;
                    if (to.identity == "cxySuiCong") return -6;
                    if (to.identity == "cxyJiangLing") return -10;
                    return 0;
                }
                if (from.identity == "cxySuiCong") {
                    if (to.identity == "cxyMengJun") return -10;
                    if (to.identity == "cxySuiCong") return 6;
                    if (to.identity == "cxyJiangLing") return 10;
                    return 0;
                }
                if (from.identity == "cxyJiangLing") {
                    if (to.identity == "cxyMengJun") return -10;
                    if (to.identity == "cxySuiCong") return 6;
                    if (to.identity == "cxyJiangLing") return 10;
                    return 0;
                }
            };//QQQ
            game.chooseCharacter = function () {
                var next = game.createEvent("chooseCharacter", false);
                var sixPlayer = function () {
                    "step 0"
                    ui.arena.classList.add('choose-character');
                    //盟军选将范围与禁将
                    var randomCP = game.checkpoint.randomGet();
                    if (Math.random() < 0.2 && game.isInSpringFestival()) {
                        randomCP[0] = 'fd_kuangshen04';
                        lib.onover.push(bool => {
                            if (bool) {
                                const num = 114514;
                                game.bolSay('恭喜击败bug制造者牢狂，获得' + num + '萌币，祝无名杀在新的一年蒸蒸日上');
                                game.saveConfig('extension_活动萌扩_decade_Coin', lib.config.extension_活动萌扩_decade_Coin + num);
                            }
                        });
                    }
                    var cxyJiangLing = randomCP.shift();
                    var list = _status.characterlist.slice();
                    var list1 = [], list2 = [];
                    list1 = list.randomRemove(6);
                    list2 = list.randomRemove(6);
                    //分配身份
                    game.playerBySeat(1).identity = "cxyMengJun";
                    game.playerBySeat(2).identity = "cxyMengJun";
                    game.playerBySeat(3).identity = "cxySuiCong";
                    game.playerBySeat(4).identity = "cxyJiangLing";
                    game.playerBySeat(5).identity = "cxySuiCong";
                    game.showIdentity(true);
                    game.zhu = _status.firstAct = game.playerBySeat(1);
                    //Ai选将
                    for (var i = 0; i < game.cxyAis.length; i++) {
                        if (game.cxyAis[i] == game.cxyJiangLing) game.cxyAis[i].init(cxyJiangLing);
                        else game.cxyAis[i].init(randomCP.shift());
                    }
                    //我选将
                    var dialog = ui.create.dialog("选将阶段", "hidden");
                    dialog.add("我的武将列表");
                    dialog.add([list1, 'characterx']);
                    dialog.add("队友的武将列表");
                    dialog.add([list2, 'character']);
                    game.resume();
                    game.me.chooseButton(dialog, true).set('filterButton', function (button) {
                        return !_status.event.list.includes(button.link);
                    }).set('onfree', true).set('list', list2);
                    event.list = list2;
                    "step 1"
                    var getNum = function (name) {
                        var num = 0;
                        if (name == 'litong') num = 1;
                        else switch (game.getRarity(name)) {
                            case 'junk': num = 1; break;
                            case 'rare': num = 2; break;
                            case 'epic': num = 3; break;
                            case 'legend': num = 4; break;
                        }
                        return num;
                    };
                    var getCharacter = function (list) {
                        var listx = [], num = 0;
                        for (var name of list) {
                            var numx = getNum(name);
                            if (numx > num) {
                                num = numx;
                                listx = [name];
                            }
                            else if (numx == num) listx.push(name);
                        }
                        return listx;
                    };
                    game.me.init(result.links[0]);
                    game.addRecentCharacter(game.me.name, game.me.name2);
                    var target = game.me.cxySeatNumber == 1 ? game.playerBySeat(2) : game.playerBySeat(1);
                    target.init(getCharacter(event.list).randomGet());
                    if (game.cxyJiangLing.name == 'fd_kuangshen04') {
                        game.me.maxHp = game.me.maxHp * 3;
                        game.me.hp = game.me.hp * 3;
                        target.maxHp = target.maxHp * 3;
                        target.hp = target.hp * 3;
                        game.me.update();
                        target.update();
                    }
                    setTimeout(function () {
                        ui.arena.classList.remove('choose-character');
                    }, 500);
                };
                var eightPlayer = function () {
                    "step 0"
                    ui.arena.classList.add('choose-character');
                    //预处理 
                    for (var i in lib.characterPack.mode_extension_魔军包) {
                        lib.character[i][2]--;
                    }
                    //确定选将列表
                    var suiCongList = ["cxyHuBenJun", "cxyLongXiangJun", "cxyBaoLveJun", "cxyFengYaoJun", "cxyFeiXiongJunZuo", "cxyFeiXiongJunYou"];
                    var rmList = ["cxyFengYaoJun", "cxyFeiXiongJunZuo"];
                    suiCongList.randomSort();
                    //盟军选将范围与禁将
                    var list = _status.characterlist.slice();
                    var list1 = [], list2 = [];
                    list1 = list.randomRemove(6);
                    list2 = list.randomRemove(6);
                    //分配身份
                    //八人局，1、5位盟军，3位固定孙坚（盟军），2、4、6、8位随从，7位固定华雄
                    game.playerBySeat(1).identity = "cxyMengJun";
                    game.playerBySeat(2).identity = "cxySuiCong";
                    game.playerBySeat(3).identity = "cxyMengJun";
                    game.playerBySeat(4).identity = "cxySuiCong";
                    game.playerBySeat(5).identity = "cxyMengJun";
                    game.playerBySeat(6).identity = "cxySuiCong";
                    game.playerBySeat(7).identity = "cxyJiangLing";
                    game.playerBySeat(8).identity = "cxySuiCong";
                    game.showIdentity(true);
                    game.zhu = _status.firstAct = game.playerBySeat(1);
                    //Ai选将
                    const goon = (Math.random() < 0.35 && game.isInSpringFestival());
                    if (goon) {
                        lib.onover.push(bool => {
                            if (bool) {
                                const num = 114514;
                                game.bolSay('恭喜击败bug制造者牢狂，获得' + num + '萌币，祝无名杀在新的一年蒸蒸日上');
                                game.saveConfig('extension_活动萌扩_decade_Coin', lib.config.extension_活动萌扩_decade_Coin + num);
                            }
                        });
                    }
                    for (var i = 0; i < game.cxyAis.length; i++) {
                        if (game.cxyAis[i] == game.cxyJiangLing) game.cxyAis[i].init(goon ? 'fd_kuangshen04' : "cxyHuaXiong");
                        else if (game.cxyAis[i].cxySeatNumber == 3) game.cxyAis[i].init("cxySunJian");
                        else game.cxyAis[i].init(suiCongList.shift());
                    }
                    //我选将
                    var dialog = ui.create.dialog("选将阶段", "hidden");
                    dialog.add("我的武将列表");
                    dialog.add([list1, 'characterx']);
                    dialog.add("队友的武将列表");
                    dialog.add([list2, 'character']);
                    game.resume();
                    game.me.chooseButton(dialog, true).set('filterButton', function (button) {
                        return !_status.event.list.includes(button.link);
                    }).set('onfree', true).set('list', list2);
                    event.list = list2;
                    "step 1"
                    var getNum = function (name) {
                        var num = 0;
                        if (name == 'litong') num = 1;
                        else switch (game.getRarity(name)) {
                            case 'junk': num = 1; break;
                            case 'rare': num = 2; break;
                            case 'epic': num = 3; break;
                            case 'legend': num = 4; break;
                        }
                        return num;
                    };
                    var getCharacter = function (list) {
                        var listx = [], num = 0;
                        for (var name of list) {
                            var numx = getNum(name);
                            if (numx > num) {
                                num = numx;
                                listx = [name];
                            }
                            else if (numx == num) listx.push(name);
                        }
                        return listx;
                    };
                    game.me.init(result.links[0]);
                    game.addRecentCharacter(game.me.name, game.me.name2);
                    var target = game.me.cxySeatNumber == 1 ? game.playerBySeat(5) : game.playerBySeat(1);
                    target.init(getCharacter(event.list).randomGet());
                    if (game.cxyJiangLing.name == 'fd_kuangshen04') {
                        game.me.maxHp = game.me.maxHp * 3;
                        game.me.hp = game.me.hp * 3;
                        target.maxHp = target.maxHp * 3;
                        target.hp = target.hp * 3;
                        game.me.update();
                        target.update();
                    }
                    setTimeout(function () {
                        ui.arena.classList.remove('choose-character');
                    }, 500);
                };
                next.ai = function (player, character) {
                    player.init(character);
                };
                next.setContent(_status.cxyCPState == "normal" ? sixPlayer : eightPlayer);
            };
        },
        gameStart() {
            ui.cxyButton = ui.create.system("投降", function () {
                if (get.population("cxyMengJun") != 1) return;
                game.over(false);
            }, true);
            lib.setPopped(ui.cxyButton, function () {
                var dialog = ui.create.dialog("hidden");
                dialog.addText("<p align=left>本方角色只剩一人时才可投降");
                return dialog;
            }, 200);
        },
    },
};
export default brawl;
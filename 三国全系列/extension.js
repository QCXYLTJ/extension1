import { lib, game, ui, get, ai, _status } from '../../noname.js';
const extensionInfo = await lib.init.promises.json(`extension/三国全系列/info.json`);
game.import('extension', function () {
    return {
        name: '三国全系列',
        arenaReady() {
            if (!lib.type) {
                lib.type = [];
                for (const i in lib.card) {
                    const info = lib.card[i];
                    if (!lib.type.includes(info.type)) {
                        lib.type.push(info.type);
                    }
                }
            }
        },
        content() {
            if (lib.config.extension_三国全系列_文字闪烁) {
                const style = document.createElement('style');
                style.innerHTML = '@keyframes QQQ{';
                for (let i = 1; i <= 20; i++) {
                    const rand1 = Math.floor(Math.random() * 255),
                        rand2 = Math.floor(Math.random() * 255),
                        rand3 = Math.floor(Math.random() * 255);
                    style.innerHTML += i * 5 + `%{text-shadow: black 0 0 1px,rgba(${rand1}, ${rand2}, ${rand3}, 0.6) 0 0 2px,rgba(${rand1}, ${rand2}, ${rand3}, 0.6) 0 0 5px,rgba(${rand1}, ${rand2}, ${rand3}, 0.6) 0 0 10px,rgba(${rand1}, ${rand2}, ${rand3}, 0.6) 0 0 10px,rgba(${rand1}, ${rand2}, ${rand3}, 0.6) 0 0 20px,rgba(${rand1}, ${rand2}, ${rand3}, 0.6) 0 0 20px}`;
                }
                style.innerHTML += '}';
                document.head.appendChild(style);
            }
        },
        precontent() {
            game.addGroup('佛', `<img src=extension/三国全系列/image/SG_fo.png width="30"height="30">`, '佛', {
                color: 'rgb(233, 200, 12)',
                image: 'ext:三国全系列/image/SG_fo.png',
            });
            game.addGroup('冥', `<img src=extension/三国全系列/image/SG_ming.png width="30"height="30">`, '冥', {
                color: 'rgb(58, 9, 136)',
                image: 'ext:三国全系列/image/SG_ming.png',
            });
            get.vcardInfo = function (card) { }; //卡牌storage里面存了DOM元素会循环引用导致不能JSON.stringify
            //—————————————————————————————————————————————————————————————————————————————技能相关自创函数
            const jineng = function () {
                lib.element.player.qhasSkill = function (s) {
                    const player = this;
                    return player.GS().includes(s);
                }; //武将是否拥有某技能
                lib.element.player.GS = function () {
                    const player = this;
                    const skills = player.skills.slice();
                    for (const i of Array.from(player.node.equips.childNodes)) {
                        if (Array.isArray(lib.card[i.name].skills)) {
                            skills.addArray(lib.card[i.name].skills);
                        }
                    }
                    for (const i in player.additionalSkills) {
                        if (Array.isArray(player.additionalSkills[i])) {
                            skills.addArray(player.additionalSkills[i]);
                        } else if (typeof player.additionalSkills[i] == 'string') {
                            skills.add(player.additionalSkills[i]);
                        }
                    }
                    skills.addArray(Object.keys(player.tempSkills));
                    skills.addArray(player.hiddenSkills);
                    skills.addArray(player.invisibleSkills);
                    return skills;
                }; //获取武将所有技能函数
                lib.element.player.GAS = function () {
                    const player = this;
                    const skills = player.skills.slice();
                    for (const i in player.additionalSkills) {
                        if (Array.isArray(player.additionalSkills[i])) {
                            skills.addArray(player.additionalSkills[i]);
                        } else if (typeof player.additionalSkills[i] == 'string') {
                            skills.add(player.additionalSkills[i]);
                        }
                    }
                    return skills;
                }; //获取武将的武将牌上技能函数
                lib.element.player.GES = function () {
                    const player = this;
                    const skills = [];
                    for (const i of Array.from(player.node.equips.childNodes)) {
                        if (Array.isArray(lib.card[i.name].skills)) {
                            skills.addArray(lib.card[i.name].skills);
                        }
                    }
                    return skills;
                }; //获取武将装备技能函数
                lib.element.player.GTS = function () {
                    const player = this;
                    return Object.keys(player.tempSkills);
                }; //获取武将临时技能函数
                lib.element.player.RS = function (skillx) {
                    const player = this;
                    if (Array.isArray(skillx)) {
                        for (const i of skillx) {
                            player.RS(i);
                        }
                    } else {
                        player.skills.remove(skillx);
                        player.hiddenSkills.remove(skillx);
                        player.invisibleSkills.remove(skillx);
                        delete player.tempSkills[skillx];
                        for (let i in player.additionalSkills) {
                            player.additionalSkills[i].remove(skillx);
                        }
                        player.checkConflict(skillx);
                        player.RST(skillx);
                        if (lib.skill.global.includes(skillx)) {
                            lib.skill.global.remove(skillx);
                            delete lib.skill.globalmap[skillx];
                            for (let i in lib.hook.globalskill) {
                                lib.hook.globalskill[i].remove(skillx);
                            }
                        }
                    }
                    return player;
                }; //移除技能函数
                lib.element.player.RST = function (skills) {
                    const player = this;
                    if (typeof skills == 'string') {
                        skills = [skills];
                    }
                    game.expandSkills(skills);
                    for (const skillx of skills) {
                        player.initedSkills.remove(skillx);
                        for (let i in lib.hook) {
                            if (Array.isArray(lib.hook[i]) && lib.hook[i].includes(skillx)) {
                                try {
                                    delete lib.hook[i];
                                } catch (e) {
                                    console.log(i + 'lib.hook不能delete');
                                }
                            }
                        }
                        for (let i in lib.hook.globalskill) {
                            if (lib.hook.globalskill[i].includes(skillx)) {
                                lib.hook.globalskill[i].remove(skillx);
                                if (lib.hook.globalskill[i].length == 0) {
                                    delete lib.hook.globalskill[i];
                                }
                            }
                        }
                    }
                    return player;
                }; //移除技能时机函数
                lib.element.player.CS = function () {
                    const player = this;
                    const skill = player.GS();
                    game.expandSkills(skill);
                    player.skills = [];
                    player.tempSkills = {};
                    player.initedSkills = [];
                    player.invisibleSkills = [];
                    player.hiddenSkills = [];
                    player.additionalSkills = {};
                    for (const key in lib.hook) {
                        if (key.startsWith(player.playerid)) {
                            try {
                                delete lib.hook[key];
                            } catch (e) {
                                console.log(key + 'lib.hook不能delete');
                            }
                        }
                    }
                    for (const hook in lib.hook.globalskill) {
                        for (const i of skill) {
                            if (lib.hook.globalskill[hook].includes(i)) {
                                lib.hook.globalskill[hook].remove(i);
                            }
                        }
                    }
                    return player;
                }; //清空所有技能函数
                lib.element.player.DS = function () {
                    const player = this;
                    const skill = player.GS();
                    game.expandSkills(skill);
                    player._hookTrigger = ['QQQ_fengjin'];
                    player.storage.skill_blocker = ['QQQ_fengjin'];
                    for (const i of skill) {
                        player.disabledSkills[i] = 'QQQ';
                        player.storage[`temp_ban_${i}`] = true;
                    }
                    return player;
                }; //失效所有技能函数
                lib.skill.QQQ_fengjin = {
                    hookTrigger: {
                        block: (event, player, triggername, skill) => true,
                    },
                    skillBlocker(skill, player) {
                        const info = lib.skill[skill];
                        return info && !info.kangxing;
                    },
                };
            }; //技能相关自创函数
            jineng();
            lib.element.player.SG_hujia = function (num) {
                const player = this;
                if (!num) {
                    num = 1;
                }
                player.hujia += num;
                if (player.hujia > 5) {
                    player.hujia = 5;
                }
                return player;
            };
            game.wuxing = function (player, event) {
                player.storage[event.name] = false;
                if (!player.storage.SG_wuxing && lib.suits.every((suit) => !player.storage[`SG_wuxing_${suit}`])) {
                    player.loseMaxHp();
                    player.SG_hujia(2);
                    player.addSkill('SG_lusheng');
                    player.storage.SG_wuxing = true;
                }
            };
            //—————————————————————————————————————————————————————————————————————————————数据操作相关自定义函数
            const numfunc = function () {
                if (!lib.number) {
                    lib.number = [];
                    for (let i = 1; i < 14; i++) {
                        lib.number.add(i);
                    }
                } //添加lib.number
                window.sgn = function (bool) {
                    if (bool) {
                        return 1;
                    }
                    return -1;
                }; //true转为1,false转为-1
                window.numberq0 = function (num) {
                    if (isNaN(Number(num))) {
                        return 0;
                    }
                    return Math.abs(Number(num));
                }; //始终返回正数(取绝对值)
                window.numberq1 = function (num) {
                    if (isNaN(Number(num))) {
                        return 1;
                    }
                    return Math.max(Math.abs(Number(num)), 1);
                }; //始终返回正数且至少为1(取绝对值)
                window.number0 = function (num) {
                    if (isNaN(Number(num))) {
                        return 0;
                    }
                    return Math.max(Number(num), 0);
                }; //始终返回正数
                window.number1 = function (num) {
                    if (isNaN(Number(num))) {
                        return 1;
                    }
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
                    for (const key in obj) {
                        if (Object.hasOwn(obj, key)) {
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
                    if (num === 2 || num === 3) {
                        return true;
                    }
                    if (num < 2 || num % 2 === 0 || num % 3 === 0) {
                        return false;
                    }
                    for (let i = 5; i * i <= num; i += 6) {
                        if (num % i === 0 || num % (i + 2) === 0) {
                            return false;
                        }
                    }
                    return true;
                }; // 质数
            };
            numfunc();
            //—————————————————————————————————————————————————————————————————————————————视为转化虚拟牌相关自创函数
            const shiwei = function () {
                lib.element.player.filterCardx = function (card, filter) {
                    if (typeof card == 'string') {
                        card = { name: card };
                    }
                    const player = this,
                        info = get.info(card);
                    if (!lib.filter.cardEnabled(card, player)) {
                        return false;
                    } //卡牌使用限制
                    if (info.notarget) {
                        return true;
                    }
                    if (!info.filterTarget) {
                        return true;
                    }
                    if (!info.enable) {
                        return true;
                    }
                    return game.hasPlayer(function (current) {
                        if (info.multicheck && !info.multicheck(card, player)) {
                            return false;
                        }
                        if (filter) {
                            if (!lib.filter.targetInRange(card, player, current)) {
                                return false;
                            } //距离限制
                            return lib.filter.targetEnabledx(card, player, current);
                        }
                        return lib.filter.targetEnabled(card, player, current); //目标限制
                    });
                }; //适用于choosetouse的filtercard
                lib.element.player.filterCard = function (card, filter) {
                    if (typeof card == 'string') {
                        card = { name: card };
                    }
                    const player = this,
                        info = get.info(card),
                        event = _status.event;
                    const evt = event.name.startsWith('chooseTo') ? event : event.getParent((q) => q.name.startsWith('chooseTo'));
                    if (evt.filterCard2) {
                        return evt._backup.filterCard(card, player, evt);
                    } //viewAs的技能会修改chooseToUse事件的filterCard
                    else if (evt.filterCard && evt.filterCard != lib.filter.filterCard) {
                        return evt.filterCard(card, player, evt); //这里也有次数限制
                    } else {
                        if (!lib.filter.cardEnabled(card, player)) {
                            return false;
                        } //卡牌使用限制
                        if (info.notarget) {
                            return true;
                        }
                        if (!info.filterTarget) {
                            return true;
                        }
                        if (!info.enable) {
                            return true;
                        }
                        if (evt.name == 'chooseToRespond') {
                            return true;
                        } //chooseToRespond无次数距离目标限制
                        if (filter) {
                            if (!lib.filter.cardUsable(card, player, evt)) {
                                return false;
                            } //次数限制
                        }
                        if (evt.filterTarget && evt.filterTarget != lib.filter.filterTarget) {
                            return game.hasPlayer(function (current) {
                                return evt.filterTarget(card, player, current);
                            });
                        }
                        return game.hasPlayer(function (current) {
                            if (info.multicheck && !info.multicheck(card, player)) {
                                return false;
                            }
                            if (filter) {
                                if (!lib.filter.targetInRange(card, player, current)) {
                                    return false;
                                } //距离限制
                                return lib.filter.targetEnabledx(card, player, current);
                            }
                            return lib.filter.targetEnabled(card, player, current); //目标限制
                        });
                    }
                }; //删除次数限制//filter决定有无次数距离限制//viewAs的技能会修改chooseToUse事件的filterCard
                lib.element.player.qcard = function (type, filter, range) {
                    const list = [];
                    for (const i in lib.card) {
                        const info = lib.card[i];
                        if (info.mode && !info.mode.includes(lib.config.mode)) {
                            continue;
                        }
                        if (!info.content) {
                            continue;
                        }
                        if (['delay', 'equip'].includes(info.type)) {
                            continue;
                        }
                        if (type && info.type != type) {
                            continue;
                        }
                        if (filter !== false) {
                            const player = this;
                            if (range !== false) {
                                range = true;
                            }
                            if (!player.filterCard(i, range)) {
                                continue;
                            }
                        }
                        list.push([lib.suits.randomGet(), lib.number.randomGet(), i]); //花色/点数/牌名/属性/应变
                        if (i == 'sha') {
                            for (const j of Array.from(lib.nature.keys())) {
                                list.push([lib.suits.randomGet(), lib.number.randomGet(), 'sha', j]);
                            }
                        }
                    }
                    return list;
                }; //可以转化为的牌//filter控制player.filterCard//range控制是否计算次数与距离限制
            };
            shiwei();
            //—————————————————————————————————————————————————————————————————————————————boss模式相关函数,目前改用代理来排序
            const boss = function () {
                lib.skill._sort = {
                    trigger: {
                        player: ['phaseEnd'],
                    },
                    silent: true,
                    forceDie: true,
                    forceOut: true,
                    filter() {
                        game.sort();
                    },
                    content() { },
                }; //排座位
                let _me;
                Reflect.defineProperty(game, 'me', {
                    get() {
                        return _me;
                    },
                    set(v) {
                        _me = v;
                        if (game.players.includes(v) && game.players[0] != v) {
                            game.sort(); //因为李白最先进入players,挑战模式不管选什么挑战李白,都会变成game.me是李白
                        } //如果数组target[meIndex]是李白,那么替换掉的一瞬间,接下来调用就会再添加一个李白,导致数组两个李白
                    }, //更换game.me之后第一时间排序
                });
                game.sort = function () {
                    const players = game.players.filter(Boolean);
                    const deads = game.dead.filter(Boolean);
                    const allPlayers = deads.concat(players); //先移除players后面玩家会前移,再添加入dead需要同排序取前
                    const bool = lib.config.dieremove;
                    const playerx = bool ? players : allPlayers;
                    ui.arena.setNumber(playerx.length);
                    if (bool) {
                        deads.forEach((player) => {
                            player.classList.add('removing', 'hidden');
                            if (!player.deadposition) {
                                const num = Number(player.dataset.position);
                                player.deadposition = num;
                                player.dataset.position = num - 1;
                            }
                        });
                    } //隐藏死亡角色
                    playerx.sort((a, b) => Number(a.dataset.position) - Number(b.dataset.position));
                    if (playerx.includes(game.me) && playerx[0] != game.me) {
                        while (playerx[0] != game.me) {
                            const start = playerx.shift();
                            playerx.push(start);
                        }
                    } //将玩家排至数组首位
                    playerx.forEach((player, index, array) => {
                        player.dataset.position = index;
                        const zhu = _status.roundStart || game.zhu || game.boss || array.find((p) => p.seatNum == 1) || array[0];
                        const zhuPos = Number(zhu.dataset.position);
                        const num = index - zhuPos + 1;
                        if (index < zhuPos) {
                            player.seatNum = players.length - num;
                        } else {
                            player.seatNum = num;
                        }
                    }); //修改dataset.position与seatNum
                    players.sort((a, b) => Number(a.dataset.position) - Number(b.dataset.position));
                    players.forEach((player, index, array) => {
                        if (bool) {
                            player.classList.remove('removing', 'hidden');
                        }
                        if (index == 0) {
                            if (ui.handcards1Container && ui.handcards1Container.firstChild != player.node.handcards1) {
                                while (ui.handcards1Container.firstChild) {
                                    ui.handcards1Container.firstChild.remove();
                                }
                                ui.handcards1Container.appendChild(player.node.handcards1.addTempClass('start').fix());
                            }
                            if (game.me != player) {
                                ui.updatehl();
                            }
                        }
                        player.previous = array[index === 0 ? array.length - 1 : index - 1];
                        player.next = array[index === array.length - 1 ? 0 : index + 1];
                    }); //展示零号位手牌/修改previous/显示元素
                    allPlayers.sort((a, b) => Number(a.dataset.position) - Number(b.dataset.position));
                    allPlayers.forEach((player, index, array) => {
                        player.previousSeat = array[index === 0 ? array.length - 1 : index - 1];
                        player.nextSeat = array[index === array.length - 1 ? 0 : index + 1];
                    }); //修改previousSeat
                    game.players.sort((a, b) => Number(a.dataset.position) - Number(b.dataset.position));
                    return true;
                };
                game.players = new Proxy([], {
                    set(target, property, value) {
                        const result = Reflect.set(target, property, value);
                        if (property === 'length') {
                            game.sort();
                        }
                        return result;
                    },
                });
                game.dead = new Proxy([], {
                    set(target, property, value) {
                        const result = Reflect.set(target, property, value);
                        if (property === 'length') {
                            game.sort();
                        }
                        return result;
                    },
                });
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
                game.changeBossQ = function (name) {
                    _status.event.forceDie = true;
                    const boss = game.addPlayerQ(name);
                    boss.side = true;
                    if (game.additionaldead) {
                        game.additionaldead.push(game.boss);
                    } else {
                        game.additionaldead = [game.boss];
                    }
                    boss.setIdentity('zhu');
                    boss.identity = 'zhu';
                    const player = game.boss;
                    game.boss = boss;
                    game.addVideo('bossSwap', player, '_' + boss.name);
                    if (game.me == player) {
                        game.swapControl(boss);
                    }
                    return boss;
                };
                game.addPlayerQ = function (name) {
                    const player = ui.create.player(ui.arena).addTempClass('start');
                    player.getId();
                    if (name) {
                        player.init(name);
                    }
                    game.players.push(player);
                    player.draw(Math.min(player.maxHp, 20));
                    return player;
                };
                lib.element.player.addFellow = function (name) {
                    const player = this;
                    const npc = game.addPlayerQ(name);
                    player.guhuo(npc);
                    return npc;
                }; //添加随从
                lib.element.player.guhuo = function (target) {
                    const player = this;
                    target.side = player.side;
                    let identity = player.identity;
                    if (player.identity == 'zhu') {
                        identity = 'zhong';
                    } // 挑战模式多个主身份,会导致boss多个回合
                    target.identity = identity;
                    target.setIdentity(identity, 'blue');
                    target.boss = player;
                    target.ai.modAttitudeFrom = function (from, to, att) {
                        if (to == from.boss) {
                            return 99;
                        }
                        return att;
                    }; //这里from是本人
                    target.ai.modAttitudeTo = function (from, to, att) {
                        if (to.boss == from) {
                            return 99;
                        }
                        return att;
                    }; //这里to是本人
                    return player;
                }; //令一名角色服从你
            };
            boss();
            //—————————————————————————————————————————————————————————————————————————————解构魔改本体函数
            const mogai = function () {
                lib.element.player.dyingResult = async function () {
                    const player1 = this;
                    game.log(player1, '濒死');
                    _status.dying.unshift(player1);
                    for (const i of game.players) {
                        const result = await i
                            .chooseToUse({
                                filterCard(card, player, event) {
                                    return lib.filter.cardSavable(card, player, player1);
                                },
                                filterTarget(card, player, target) {
                                    if (!card || target != player1) {
                                        return false;
                                    }
                                    const info = get.info(card);
                                    if (!info.singleCard || ui.selected.targets.length == 0) {
                                        const mod1 = game.checkMod(card, player, target, 'unchanged', 'playerEnabled', player);
                                        if (mod1 == false) {
                                            return false;
                                        }
                                        const mod2 = game.checkMod(card, player, target, 'unchanged', 'targetEnabled', target);
                                        if (mod2 != 'unchanged') {
                                            return mod2;
                                        }
                                    }
                                    return true;
                                },
                                prompt: get.translation(player1) + '濒死,是否帮助？',
                                ai1() {
                                    return 1;
                                },
                                ai2() {
                                    return get.attitude(player1, i);
                                },
                                type: 'dying',
                                targetRequired: true,
                                dying: player1,
                            })
                            .forResult();
                        if (result?.bool) {
                            _status.dying.remove(player1);
                            break;
                        }
                    }
                    if (_status.dying.includes(player1)) {
                        await player1.die();
                    }
                    return player1;
                }; //濒死结算
                lib.element.player.yinni = function () {
                    const player = this;
                    player.storage.rawHp = player.hp;
                    player.storage.rawMaxHp = player.maxHp;
                    if (player.skills.length) {
                        if (!player.hiddenSkills) {
                            player.hiddenSkills = [];
                        }
                        for (const i of player.skills.slice()) {
                            player.removeSkill(i);
                            player.hiddenSkills.add(i);
                        }
                    }
                    player.classList.add('unseen');
                    player.name = 'unknown';
                    player.sex = 'male';
                    player.storage.nohp = true;
                    player.node.hp.hide();
                    player.addSkill('g_hidden_ai');
                    player.hp = 1;
                    player.maxHp = 1;
                    player.update();
                    return player;
                }; //隐匿函数
                lib.element.player.qreinit = function (name) {
                    const player = this;
                    const info = lib.character[name];
                    player.name1 = name;
                    player.name = name;
                    player.sex = info.sex;
                    player.changeGroup(info.group, false);
                    for (const i of info.skills) {
                        player.addSkill(i);
                    }
                    player.maxHp = get.infoMaxHp(info.maxHp);
                    player.hp = player.maxHp;
                    game.addVideo('reinit3', player, {
                        name: name,
                        hp: player.maxHp,
                        avatar2: player.name2 == name,
                    });
                    player.smoothAvatar(false);
                    player.node.avatar.setBackground(name, 'character');
                    player.node.name.innerHTML = get.translation(name);
                    player.update();
                    return player;
                }; //变身
                lib.element.player.quseCard = async function (card, targets, cards) {
                    const player = this;
                    if (typeof card == 'string') {
                        card = { name: card };
                    }
                    const name = card.name;
                    const info = lib.card[name];
                    if (!cards) {
                        cards = [card];
                    }
                    const skill = _status.event.skill;
                    if (info.contentBefore) {
                        const next = game.createEvent(name + 'ContentBefore', false);
                        if (next.parent) {
                            next.parent.stocktargets = targets;
                        }
                        next.targets = targets;
                        next.card = card;
                        next.cards = cards;
                        next.player = player;
                        next.skill = skill;
                        next.type = 'precard';
                        next.forceDie = true;
                        await next.setContent(info.contentBefore);
                    }
                    if (!info.multitarget) {
                        for (const target of targets) {
                            if (target && target.isDead()) {
                                return;
                            }
                            if (info.notarget) {
                                return;
                            }
                            const next = game.createEvent(name, false);
                            if (next.parent) {
                                next.parent.directHit = [];
                            }
                            next.targets = targets;
                            next.target = target;
                            next.card = card;
                            if (info.type == 'delay') {
                                next.card = {
                                    name: name,
                                    cards: cards,
                                };
                            }
                            next.cards = cards;
                            next.player = player;
                            next.type = 'card';
                            next.skill = skill;
                            next.baseDamage = Math.max(numberq1(info.baseDamage));
                            next.forceDie = true;
                            next.directHit = true;
                            await next.setContent(info.content);
                        }
                    } else {
                        if (info.notarget) {
                            return;
                        }
                        const next = game.createEvent(name, false);
                        if (next.parent) {
                            next.parent.directHit = [];
                        }
                        next.targets = targets;
                        next.target = targets[0];
                        next.card = card;
                        if (info.type == 'delay') {
                            next.card = {
                                name: name,
                                cards: cards,
                            };
                        }
                        next.cards = cards;
                        next.player = player;
                        next.type = 'card';
                        next.skill = skill;
                        next.baseDamage = Math.max(numberq1(info.baseDamage));
                        next.forceDie = true;
                        next.directHit = true;
                        await next.setContent(info.content);
                    }
                    if (info.contentAfter) {
                        const next = game.createEvent(name + 'ContentAfter', false);
                        next.targets = targets;
                        next.card = card;
                        next.cards = cards;
                        next.player = player;
                        next.skill = skill;
                        next.type = 'postcard';
                        next.forceDie = true;
                        await next.setContent(info.contentAfter);
                    }
                    return player;
                }; //解构用牌
                lib.element.player.qrevive = function () {
                    const player = this;
                    if (player.parentNode != ui.arena) {
                        ui.arena.appendChild(player);
                    } //防止被移除节点
                    player.classList.remove('removing', 'hidden', 'dead');
                    game.log(player, '复活');
                    player.maxHp = Math.max(lib.character[player.name]?.maxHp || 0, player.maxHp || 0);
                    player.hp = player.maxHp;
                    game.addVideo('revive', player);
                    player.removeAttribute('style');
                    player.node.avatar.style.transform = '';
                    player.node.avatar2.style.transform = '';
                    player.node.hp.show();
                    player.node.equips.show();
                    player.node.count.show();
                    player.update();
                    game.players.add(player);
                    game.dead.remove(player);
                    player.draw(Math.min(player.maxHp, 20));
                    return player;
                }; //复活函数
                lib.element.player.zhenshang = function (num, source, nature) {
                    const player = this;
                    let str = '受到了';
                    if (source) {
                        str += `来自<span class='bluetext'>${source == player ? '自己' : get.translation(source)}</span>的`;
                    }
                    str += get.cnNumber(num) + '点';
                    if (nature) {
                        str += get.translation(nature) + '属性';
                    }
                    str += '伤害';
                    game.log(player, str);
                    const stat = player.stat;
                    const statx = stat[stat.length - 1];
                    if (!statx.damaged) {
                        statx.damaged = num;
                    } else {
                        statx.damaged += num;
                    }
                    if (source) {
                        const stat = source.stat;
                        const statx = stat[stat.length - 1];
                        if (!statx.damage) {
                            statx.damage = num;
                        } else {
                            statx.damage += num;
                        }
                    }
                    player.hp -= num;
                    player.update();
                    player.$damage(source);
                    const natures = (nature || '').split(lib.natureSeparator);
                    game.broadcastAll(
                        function (natures, player) {
                            if (lib.config.animation && !lib.config.low_performance) {
                                if (natures.includes('fire')) {
                                    player.$fire();
                                }
                                if (natures.includes('thunder')) {
                                    player.$thunder();
                                }
                            }
                        },
                        natures,
                        player,
                    );
                    const numx = player.hasSkillTag('nohujia') ? num : Math.max(0, num - player.hujia);
                    player.$damagepop(-numx, natures[0]);
                    if (player.hp <= 0 && player.isAlive()) {
                        player.dying({ source: source });
                    }
                    return player;
                }; //真实伤害
                lib.element.player.qequip = function (card) {
                    const player = this;
                    if (Array.isArray(card)) {
                        for (const i of card) {
                            player.qequip(i);
                        }
                    } else if (card) {
                        if (card[card.cardSymbol]) {
                            const owner = get.owner(card);
                            const vcard = card[card.cardSymbol];
                            if (owner) {
                                owner.vcardsMap?.equips.remove(vcard);
                            }
                            player.vcardsMap?.equips.add(vcard);
                        } else {
                            const vcard = new lib.element.VCard(card);
                            const cardSymbol = Symbol('card');
                            card.cardSymbol = cardSymbol;
                            card[cardSymbol] = vcard;
                            player.vcardsMap?.equips.push(vcard);
                        }
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
                    return player;
                };
                lib.element.player.qdie = function (source) {
                    const player = this;
                    player.qdie1(source);
                    player.qdie2(source);
                    player.qdie3(source);
                    return player;
                }; //可以触发死亡相关时机,但是死亡无法避免//直接正常堆叠事件即可.如果await每个qdie123事件,那么外部就必须await qdie了,否则就卡掉
                lib.element.player.qdie1 = function (source) {
                    const player = this;
                    const next = game.createEvent('diex1', false);
                    next.source = source;
                    next.player = player;
                    next._triggered = null;
                    next.setContent(async function (event, trigger, player) {
                        await event.trigger('dieBefore');
                        await event.trigger('dieBegin');
                    });
                    return next;
                }; //触发死亡前相关时机//不能用async,不然会卡掉后续事件,不能await那个setcontent
                lib.element.player.qdie2 = function (source) {
                    const player = this;
                    const next = game.createEvent('diex2', false);
                    next.source = source;
                    next.player = player;
                    next._triggered = null;
                    next.restMap = { type: null, count: null, audio: null };
                    next.excludeMark = [];
                    next.setContent('die');
                    return next;
                }; //斩杀
                lib.element.player.qdie3 = function (source) {
                    const player = this;
                    const next = game.createEvent('diex3', false);
                    next.source = source;
                    next.player = player;
                    next._triggered = null;
                    next.setContent(async function (event, trigger, player) {
                        await event.trigger('dieEnd');
                        await event.trigger('dieAfter');
                    });
                    return next;
                }; //触发死亡后相关时机
            }; //解构魔改本体函数
            mogai();
            //—————————————————————————————————————————————————————————————————————————————播放视频与背景图片相关函数
            const video = function () {
                HTMLDivElement.prototype.setBackgroundImage = function (src) {
                    if (Array.isArray(src)) {
                        src = src[0];
                    }
                    if (['.mp4', '.webm'].some((q) => src.includes(q))) {
                        this.style.backgroundImage = 'none';
                        this.setBackgroundMp4(src);
                    } else {
                        this.style.backgroundImage = `url(${src})`;
                    }
                    return this;
                }; //引入mp4新逻辑
                HTMLElement.prototype.setBackgroundMp4 = function (src) {
                    const video = document.createElement('video');
                    video.src = src;
                    video.style.cssText = 'bottom: 0%; left: 0%; width: 100%; height: 100%; object-fit: cover; object-position: 50% 50%; position: absolute; z-index: -5;';
                    video.autoplay = true;
                    video.loop = true;
                    this.appendChild(video);
                    video.addEventListener('error', function () {
                        video.remove();
                    });
                    if (this.qvideo) {
                        this.qvideo.remove();
                    }
                    this.qvideo = video;
                    return video;
                }; //给父元素添加一个覆盖的背景mp4
                game.charactersrc = function (name) {
                    const info = lib.character[name];
                    if (info && info.trashBin) {
                        for (const value of info.trashBin) {
                            if (value.startsWith('img:')) {
                                return value.slice(4);
                            }
                            if (value.startsWith('ext:')) {
                                return value.replace(/^ext:/, 'extension/');
                            }
                            if (value.startsWith('character:')) {
                                name = value.slice(10);
                                break;
                            }
                        }
                    }
                    return `image/character/${name}.jpg`;
                }; //获取武将名对应立绘路径
                game.cardsrc = function (name) {
                    const info = lib.card[name];
                    if (info) {
                        if (info.image) {
                            if (info.image.startsWith('ext:')) {
                                return info.image.replace(/^ext:/, 'extension/');
                            }
                            return info.image;
                        }
                        const ext = info.fullskin ? 'png' : 'jpg';
                        if (info.modeimage) {
                            return `image/mode/${info.modeimage}/card/${name}.${ext}`;
                        }
                        if (info.cardimage) {
                            name = info.cardimage;
                        }
                        return `image/card/${name}.${ext}`;
                    }
                }; //获取武将名对应立绘路径
                HTMLElement.prototype.SG_BG = function (name) {
                    const src = `extension/三国全系列/mp4/${name}.mp4`;
                    const video = this.setBackgroundMp4(src);
                    return video;
                }; //三国全系列背景mp4
                game.SG_mp4 = async function (name) {
                    return new Promise((resolve) => {
                        const video = document.createElement('video');
                        video.src = `extension/三国全系列/mp4/${name}.mp4`;
                        video.style.cssText = 'z-index: 999; height: 100%; width: 100%; position: fixed; object-fit: cover; left: 0; right: 0; mix-blend-mode: screen; pointer-events: none;';
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
                        document.body.appendChild(video); //document上面创建video元素之后不要立刻贴上,加一个延迟可以略过前面的播放框,配置越烂延迟越大
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
            };
            video();
            //————————————————————————————————————————————————————————————————————————————————————————————角色与技能
            const character = {
                SG_muludawang: {
                    sex: 'male',
                    skills: ['SG_shoufa', 'SG_yuxiang'],
                    hujia: 2,
                },
                SG_duosidawang: {
                    sex: 'male',
                    skills: ['SG_equan', 'SG_manji'],
                    maxHp: 5,
                },
                SG_yaozhen: {
                    sex: 'female',
                    skills: ['SG_lianhua', 'SG_ciyou', 'SG_niepan'],
                    maxHp: 3,
                    hp: 3,
                },
                SG_jinhuan: {
                    sex: 'male',
                    skills: ['SG_manyong'],
                },
                SG_dongtuna: {
                    sex: 'male',
                    skills: ['SG_fuqin'],
                },
                SG_ahuinan: {
                    sex: 'male',
                    skills: ['SG_juzhong'],
                },
                SG_chuge: {
                    sex: 'male',
                    skills: ['SG_lishang', 'SG_guixin'],
                },
                SG_mier: {
                    sex: 'female',
                    skills: ['SG_gongsheng', 'SG_huanling', 'SG_bianshen'],
                    maxHp: 3,
                    hp: 3,
                    hujia: 1,
                },
                SG_shenyan: {
                    sex: 'female',
                    skills: ['SG_lingfu', 'SG_jinghun', 'SG_rumo'],
                    group: 'shu',
                    maxHp: 3,
                    hp: 3,
                },
                SG_shuguotaonan: {
                    sex: 'male',
                    skills: ['SG_liuli'],
                    maxHp: 1,
                    hp: 1,
                    group: 'shu',
                },
                SG_shuguoputong: {
                    sex: 'male',
                    skills: ['SG_gengzhi'],
                    maxHp: 2,
                    hp: 2,
                    group: 'shu',
                },
                SG_shuguoshibing: {
                    sex: 'male',
                    skills: ['SG_shuwei', 'SG_zhengbei'],
                    maxHp: 3,
                    hp: 3,
                    group: 'shu',
                },
                SG_shuguobaifu: {
                    sex: 'male',
                    skills: ['SG_haoling', 'SG_tiebi'],
                    maxHp: 3,
                    hp: 3,
                    hujia: 4,
                    group: 'shu',
                },
                SG_haitang: {
                    sex: 'female',
                    skills: ['SG_wuji', 'SG_tongqi'],
                    maxHp: 3,
                    hp: 3,
                    hujia: 1,
                },
                SG_zhaoshu: {
                    sex: 'female',
                    skills: ['SG_xuechou', 'SG_yinren', 'SG_chijiang'],
                },
                SG_zhangqiying: {
                    sex: 'female',
                    skills: ['SG_tianshi', 'SG_fuzhou', 'SG_qirang'],
                    maxHp: 3,
                    hp: 3,
                    hujia: 2,
                },
                SG_kangseng: {
                    sex: 'male',
                    skills: ['SG_yijing', 'SG_fahu'],
                    maxHp: 3,
                    hp: 3,
                    group: 'wu',
                },
                SG_zicheng: {
                    sex: 'male',
                    skills: ['SG_moce', 'SG_wanghun'],
                    maxHp: 3,
                    hp: 3,
                },
                SG_lingshi: {
                    sex: 'female',
                    group: 'wei',
                    skills: ['SG_momo', 'SG_qianchu'],
                    maxHp: 3,
                    hp: 3,
                },
                SG_huatuo: {
                    sex: 'male',
                    skills: ['SG_qingnang', 'SG_mafei', 'SG_baicao'],
                    maxHp: 3,
                    hp: 3,
                },
                SG_rulai: {
                    sex: 'male',
                    group: '佛',
                    skills: ['SG_fajie', 'SG_yinguo', 'SG_lunhui', 'SG_wuliang', 'SG_niepanx', 'SG_xiangmo', 'SG_puti', 'SG_wanjie'],
                    maxHp: 10,
                    hp: 10,
                    isBoss: true,
                    isBossAllowed: true,
                    trashBin: [`ext:三国全系列/mp4/SG_rulai.mp4`],
                },
                //——————————————————————————————————————————————————————————————————————————————————————————————————后土娘娘(EX02)//  势力:冥// 体力:8/9/2
                SG_houtu: {
                    sex: 'female',
                    group: '冥',
                    skills: ['SG_dimai', 'SG_sishi', 'SG_liudao', 'SG_sheji', 'SG_guixux', 'SG_youfen', 'SG_yinyang', 'SG_yongzhen'],
                    maxHp: 9,
                    hp: 8,
                    hujia: 2,
                    isBoss: true,
                    isBossAllowed: true,
                    trashBin: [`ext:三国全系列/mp4/SG_houtu.mp4`],
                },
                SG_hehou: {
                    sex: 'female',
                    skills: ['SG_shihun', 'SG_yinsha', 'SG_tunling', 'SG_lingyuan'],
                    maxHp: 6,
                    hp: 6,
                },
                SG_niutou: {
                    sex: 'male',
                    skills: ['SG_niuma'],
                    maxHp: 1,
                    hp: 1,
                },
                SG_mamian: {
                    sex: 'male',
                    skills: ['SG_niuma'],
                    maxHp: 1,
                    hp: 1,
                },
                SG_yueji: {
                    sex: 'female',
                    skills: ['SG_yueyin', 'SG_xingzhui'],
                    maxHp: 3,
                    hp: 3,
                },
                SG_xiahouling: {
                    sex: 'female',
                    skills: ['SG_yingshe', 'SG_shizhi'],
                    group: 'wei',
                    maxHp: 3,
                    hp: 3,
                },
                SG_zhangqiyingx: {
                    sex: 'female',
                    skills: ['SG_wuxing'],
                    maxHp: 3,
                    hp: 3,
                },
                SG_lanyang: {
                    sex: 'male',
                    skills: ['SG_huanyue', 'SG_yueying', 'SG_jiusi'],
                },
                SG_xuanjing: {
                    sex: 'male',
                    skills: ['SG_hanyu', 'SG_xuanhuo'],
                },
                SG_xuanjing1: {
                    sex: 'male',
                    skills: ['SG_moyan', 'SG_zhongyan'],
                    maxHp: 5,
                    hp: 5,
                },
                SG_jicaiyao: {
                    sex: 'female',
                    skills: ['SG_shuangsheng', 'SG_suming', 'SG_lunzhuan', 'SG_lingyu'],
                    hp: 3,
                    hujia: 1,
                    group: 'shen',
                },
                SG_kangsenghui: {
                    sex: 'male',
                    skills: ['SG_jiansi', 'SG_zhitang'],
                    hp: 3,
                    maxHp: 3,
                    group: 'wu',
                },
                SG_nangongyu: {
                    sex: 'male',
                    skills: ['SG_yice', 'SG_hanxuan'],
                    hp: 3,
                    maxHp: 3,
                    group: 'wei',
                },
                SG_baiyuemixiang: {
                    sex: 'female',
                    skills: ['SG_lingyun', 'SG_huqi', 'SG_yuyin'],
                    hp: 3,
                    maxHp: 3,
                    group: 'shu',
                },
            };
            for (const i in character) {
                const info = character[i];
                if (!info.hp) {
                    info.hp = 4;
                }
                if (!info.maxHp) {
                    info.maxHp = 4;
                }
                if (!info.group) {
                    info.group = 'qun';
                }
                info.isZhugong = true;
                if (!info.trashBin) {
                    info.trashBin = [`ext:三国全系列/image/${i}.jpg`];
                }
                info.dieAudios = [`ext:三国全系列/audio/${i}.mp3`];
            }
            Object.assign(lib.character, character);
            lib.characterPack.三国全系列 = character;
            lib.translate.三国全系列_character_config = `三国全系列`;
            lib.config.all.characters.add('三国全系列');
            lib.config.characters.add('三国全系列');
            lib.characterSort.三国全系列 = {
                BOSS: ['SG_rulai', 'SG_houtu'],
                SSSSS: ['SG_wuluo', 'SG_hehou', 'SG_duosidawang', 'SG_lanyang', 'SG_jicaiyao'],
                SSSS: ['SG_tiefuxue', 'SG_jimeng', 'SG_muludawang', 'SG_xiahouling', 'SG_zhaoshu', 'SG_zicheng', 'SG_yaozhen', 'SG_zhangqiyingx'],
                SSS: ['SG_huatuo', 'SG_chuge', 'SG_zhangqiying', 'SG_yueji', 'SG_kangseng', 'SG_mier', 'SG_lingshi', 'SG_shenyan', 'SG_murongxuan', 'SG_haitang', 'SG_nangongyu', 'SG_kangsenghui'],
                SS: ['SG_jinhuan', 'SG_dongtuna', 'SG_ahuinan', 'SG_haitang', 'SG_shuguobaifu', 'SG_chuge', 'SG_yueer', 'SG_shuchen'],
                S: ['SG_shuguoshibing', 'SG_shuguoputong', 'SG_shuguotaonan'],
            };
            const characterIntro = {
                SG_rulai: '即佛教创始人释迦牟尼佛(Śākyamuni Buddha),其核心形象在佛教经典与文学作品中呈现出多维度的神性与人性交织',
                SG_houtu: '又称后土皇地祇,是中国本土宗教与民俗信仰中最古老的神祇之一,其神格历经数千年演变,融合了自然崇拜、母系氏族记忆与道教神仙体系',
                SG_chuge: '字君河,因祸避居西凉召德村.昏迷三载,方自醒转,记忆全失.个性放荡不羁、圆滑乐观,立志成为天下第一有钱人<br>为应龙转世,与海棠(女魃转世)有着极深情谊.本为汉少帝刘辩,受董卓迫害,由真正的楚谦之子楚君河替死,逃到西凉',
                SG_shenyan: '小名依依.马超义妹,马腾副将沈侯之女.出身富贵、娇俏可人,自小便对英雄怀满憧憬,一心嫁给万夫莫敌的英雄将军.与楚歌、韩靖为至交',
                SG_yaozhen: '少帝表妹,东汉灵帝赐封为兴平公主.温柔恬美、气质出众,谙医术.自董卓之乱后,将复汉责任一肩挑起.在长安被楚歌从暗行七众手中救出,初时对楚歌的吊儿郎当极为厌恶,却在之后渐渐对其产生好感',
                SG_haitang: '慧黠灵巧、直率大方、善舞吟歌,为长安第一名伶,娇弱的外表下却拥有过人的胆识.实为暗行七君之一传使君,一心除掉献帝为其父报仇',
                SG_xiahouling: '字景兰,自小在山中生活,而练就一身神射本领.个性冷漠,对道士宗教极为厌恶,却在与主角一行人相遇后,对道士杜晏钟情.在知道杜晏实为神仙云空后,为再见到云空,踏上修仙之路',
                SG_mier: '来历不明,半兽半人的鬼族之女,娇憨纯真,不懂言语,认定楚歌是她心目中最为重要的人.一见食物便无法抵抗,小小的肚子仿佛没有真正吃饱的时候',
                SG_zicheng: '魔君紫狩之子.紫发紫袍,俊美无暇,风姿翩翩,静雅从容.虽身居荒蛮,举手投足却难掩清贵之气.观察细致入微,行事果断,智计无双.擅兵法术数,琴艺精湛.<br>俊美的面上虽然总带着文雅有礼有笑容,却从不轻易泄露自己的真实情感',
                SG_lanyang: '玉树临风,俊美潇洒,举手投足带着吸引人的魅力.性情自信自负,做事全凭心情好恶,时常让人摸不透他的想法.由于俊逸的姿容与放荡不羁的气质,使他经常到哪儿都能有一群女性伴随在身边,不过兰晹对此不推拒也不在意,这种若即若离的态度,反倒为他惹来不少女性的青睐',
                SG_yueji: '月姬的真实身份与上古神话紧密相连,她是北溟海神玄京的伴侣,同时也是血凰一族的守护者.月姬曾于前世协助吕雉(西汉开国皇后)夺取天下,与玄京(兰晹前世)有过深刻羁绊',
            };
            Object.assign(lib.characterIntro, characterIntro);
            const characterReplace = {
                SG_zhangqiyingx: ['SG_zhangqiyingx', 'SG_zhangqiying', 'zhangqiying'],
                SG_huatuo: ['huatuo', 're_huatuo', 'old_huatuo', 'SG_huatuo', 'dc_shen_huatuo', 'shen_huatuo'],
                muludawang: ['SG_muludawang', 'muludawang'],
                duosidawang: ['duosidawang', 'SG_duosidawang'],
            };
            Object.assign(lib.characterReplace, characterReplace);
            const skill = {
                //盾:当你受到卡牌造成的伤害前,可打出此牌抵消本次伤害
                SG_dun: {
                    trigger: {
                        player: ['damageBegin4'],
                    },
                    filter(event, player) {
                        return event.card && player.hasCard('SG_dun', 'hs');
                    },
                    forced: true,
                    async content(event, trigger, player) {
                        const result = await player.chooseToRespond('打出盾抵消本次伤害', (card) => card.name == 'SG_dun').forResult();
                        if (result?.cards?.length) {
                            trigger.cancel();
                        } //卡牌没content,choosetouse就会报错,所以只能choosetorespond
                    },
                },
                //——————————————————————————————————————————————————————————————————————————————————————————————————木鹿大王群4勾玉2护甲
                //兽法:当你每回合首次造成伤害后,你可以选择一名与你距离不大于2的角色;每回合限五次,当你受到伤害后,你可以选择一名与你距离不小于2的角色.被此技能选择的角色随机执行以下一种野兽效果:<br>豹:受到1点无来源伤害;<br>鹰:你随机获得其一张牌(若此时其手牌数不小于你,你可观看其手牌);<br>熊:你随机弃置其装备区一张牌(若此时其装备区数量为5,改为2);<br>兔:其摸一张牌<br>你每令一名角色执行过4次兽法效果后,你获得1点护甲.你回合结束时,若你本回合未发动过<兽法>,你可以选择一名其他角色,令其随机执行以上一种野兽效果
                SG_shoufa: {
                    init(player) {
                        player.storage.SG_shoufa = 0;
                        player.SG_shoufa = function (target) {
                            player.storage.SG_shoufa++;
                            if (player.storage.SG_shoufa > 3) {
                                player.storage.SG_shoufa = 0;
                                player.SG_hujia();
                            }
                            const list = ['豹', '鹰', '熊', '兔'];
                            const control = list.randomGet();
                            game.log(target, '执行了', control);
                            if (control == '豹') {
                                if (target.hp < target.maxHp) {
                                    target.damage(2, 'nosource');
                                } else {
                                    target.damage('nosource');
                                }
                            }
                            if (control == '鹰' && target.countCards('he')) {
                                if (target.countCards('he') >= player.countCards('he')) {
                                    player.gainPlayerCard(target, 'visible', 'he', true);
                                } else {
                                    player.randomGain(target, true);
                                }
                            }
                            if (control == '熊' && target.countCards('e')) {
                                if (target.countCards('e') > 4) {
                                    target.randomDiscard('e', 2);
                                } else {
                                    target.randomDiscard('e');
                                }
                            }
                            if (control == '兔') {
                                target.draw();
                            }
                        };
                    },
                    trigger: {
                        source: ['damageEnd'],
                    },
                    usable: 2,
                    forced: true,
                    async content(event, trigger, player) {
                        const { targets } = await player
                            .chooseTarget('选择一名距离不大于2的角色执行一种野兽效果', (c, p, t) => get.distance(p, t) < 3)
                            .set('ai', (t) => -get.attitude(player, t))
                            .forResult();
                        if (targets && targets[0]) {
                            player.SG_shoufa(targets[0]);
                        }
                    },
                    group: ['SG_shoufa_1', 'SG_shoufa_2'],
                    subSkill: {
                        1: {
                            trigger: {
                                player: ['damageEnd'],
                            },
                            usable: 5,
                            forced: true,
                            async content(event, trigger, player) {
                                const { targets } = await player
                                    .chooseTarget('选择一名距离不小于2的角色执行一种野兽效果', (c, p, t) => get.distance(p, t) > 1)
                                    .set('ai', (t) => -get.attitude(player, t))
                                    .forResult();
                                if (targets && targets[0]) {
                                    player.SG_shoufa(targets[0]);
                                }
                            },
                        },
                        2: {
                            trigger: {
                                player: ['phaseEnd'],
                            },
                            filter(event, player) {
                                const his = player.actionHistory;
                                const evt = his[his.length - 1];
                                return !evt.damage.length && !evt.sourceDamage.length;
                            },
                            forced: true,
                            async content(event, trigger, player) {
                                const { targets } = await player
                                    .chooseTarget('选择一名其他角色执行一种野兽效果', (c, p, t) => p != t)
                                    .set('ai', (t) => -get.attitude(player, t))
                                    .forResult();
                                if (targets && targets[0]) {
                                    player.SG_shoufa(targets[0]);
                                }
                            },
                        },
                    },
                },
                // 御象
                // 你计算与其他角色的距离-1;其他角色计算与你的距离+2;你受到火焰伤害始终为3;你免疫无属性【杀】;当你因火焰伤害而进入濒死时,回复减半
                SG_yuxiang: {
                    mod: {
                        globalFrom(from, to, current) {
                            return current - 1;
                        },
                        globalTo(from, to, current) {
                            return current + 2;
                        },
                    },
                    trigger: {
                        player: ['damageBegin4'],
                    },
                    forced: true,
                    filter(event, player) {
                        return event.nature == 'fire';
                    },
                    async content(event, trigger, player) {
                        trigger.num = 3;
                    },
                    group: ['SG_yuxiang_1', 'SG_yuxiang_2'],
                    subSkill: {
                        1: {
                            trigger: {
                                player: ['useCardToBefore'],
                            },
                            filter(event, player) {
                                const evt = event.getParent('_save'),
                                    damage = evt.parent?.parent;
                                if (evt.name && damage && damage.name == 'damage' && damage.nature == 'fire') {
                                    return event.target == evt.dying;
                                }
                            },
                            forced: true,
                            async content(event, trigger, player) {
                                trigger.baseDamage = numberq1(trigger.baseDamage) / 2;
                            },
                        },
                        2: {
                            trigger: {
                                target: ['shaBegin'],
                            },
                            filter(event, player) {
                                return !event.card.nature;
                            },
                            forced: true,
                            async content(event, trigger, player) {
                                trigger.cancel();
                            },
                        },
                    },
                },
                //——————————————————————————————————————————————————————————————————————————————————————————————————朵思大王群4勾玉5上限
                //恶泉
                //于你的回合内,当你对其他角色造成伤害时,若其已受伤,其获得等同于伤害值的<毒>标记;当你受到伤害时,若伤害来源已受伤,其获得等同于伤害值的<毒>标记.准备阶段,所有有<毒>的角色各失去X点体力(X为其的<毒>数),弃其<毒>标记.若因此进入濒死状态的角色,其所有技能失效直至回合结束,且其本回合内不能使用或打出『闪』
                SG_equan: {
                    trigger: {
                        source: ['damageBefore'],
                    },
                    forced: true,
                    mark: true,
                    intro: {
                        name: '毒',
                        content: 'mark',
                    },
                    filter(event, player) {
                        return _status.currentPhase == player && event.player.hp < event.player.maxHp && !event.player.hasSkill('SG_manji_2');
                    },
                    async content(event, trigger, player) {
                        trigger.player.addMark('SG_equan', trigger.num);
                        trigger.player.markSkill('SG_equan');
                    },
                    group: ['SG_equan_1', 'SG_equan_2', 'SG_equan_3'],
                    subSkill: {
                        1: {
                            trigger: {
                                player: ['damageBefore'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.source && event.source.hp < event.source.maxHp && !event.source.hasSkill('SG_manji_2');
                            },
                            async content(event, trigger, player) {
                                trigger.source.addMark('SG_equan', trigger.num);
                                trigger.source.markSkill('SG_equan');
                            },
                        },
                        2: {
                            trigger: {
                                player: ['phaseZhunbeiBefore'],
                            },
                            forced: true,
                            filter(event, player) {
                                return game.players.some((q) => q.storage.SG_equan > 0);
                            },
                            async content(event, trigger, player) {
                                for (const npc of game.players) {
                                    if (npc.storage.SG_equan > 0 && !npc.hasSkill('SG_manji_2')) {
                                        npc.loseHp(npc.storage.SG_equan);
                                        npc.storage.SG_equan = 0;
                                        npc.markSkill('SG_equan');
                                    }
                                }
                            },
                        },
                        3: {
                            trigger: {
                                global: ['dying'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.getParent('SG_equan_2').name;
                            },
                            async content(event, trigger, player) {
                                if (!trigger.player.storage.skill_blocker) {
                                    trigger.player.storage.skill_blocker = [];
                                }
                                trigger.player.storage.skill_blocker.add('SG_equan');
                                trigger.player.when({ player: 'phaseAfter' }).then(() => {
                                    player.storage.skill_blocker?.remove('SG_equan');
                                });
                            },
                            skillBlocker(skill, player) {
                                const info = lib.skill[skill];
                                return info && !info.kangxing;
                            },
                        },
                    },
                },
                //蛮汲
                //当其他角色失去体力后:
                //若你的体力值不大于其,你回复1点体力,并可选择一名其他角色,令其下回合内不能使用或打出牌;
                //若你的体力值不小于其,你摸一张牌,并可观看牌堆顶的一张牌,选择加入手牌,或置于牌堆底.
                //回合限一次,你可以将一张牌交给一名其他角色,若如此做,直到回合结束时,该角色不能被选择为『恶泉』的目标
                SG_manji: {
                    trigger: {
                        global: ['loseHpEnd'],
                    },
                    forced: true,
                    filter(event, player) {
                        return event.player != player;
                    },
                    async content(event, trigger, player) {
                        if (trigger.player.hp >= player.hp) {
                            player.recover();
                            const { targets } = await player
                                .chooseTarget('选择一名其他角色,令其下回合内不能使用或打出牌', (c, p, t) => p != t)
                                .set('ai', (t) => -get.attitude(player, t))
                                .forResult();
                            if (targets && targets[0]) {
                                targets[0].addTempSkill('SG_manji_3', { player: 'phaseEnd' });
                            }
                        }
                        if (trigger.player.hp <= player.hp) {
                            player.draw();
                            const cards = get.cards();
                            const list = ['加入手牌', '置于牌堆底'];
                            const { links } = await player
                                .chooseButton(['观看牌堆顶的一张牌', cards, [list, 'tdnodes']])
                                .set('filterButton', (button) => list.includes(button.link))
                                .set('ai', (button) => {
                                    if (button.link == '加入手牌') {
                                        return 1;
                                    }
                                    return 0;
                                })
                                .forResult();
                            if (links && links[0]) {
                                if (links[0] == '加入手牌') {
                                    player.gain(cards, 'gain2');
                                } else {
                                    ui.cardPile.appendChild(cards[0]);
                                }
                            }
                        }
                    },
                    group: ['SG_manji_1'],
                    subSkill: {
                        1: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard: true,
                            selectCard: 1,
                            position: 'he',
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            selectTarget: 1,
                            async content(event, trigger, player) {
                                event.target.gain(event.cards, 'gain2');
                                event.target.addTempSkill('SG_manji_2', { global: 'phaseEnd' });
                            },
                            ai: {
                                order: 15,
                                result: {
                                    target: 1,
                                },
                            },
                        },
                        2: {},
                        3: {
                            mod: {
                                cardEnabled2(card, player) {
                                    return false;
                                },
                            },
                        },
                    },
                },
                //——————————————————————————————————————————————————————————————————————————————————————————————————瑶甄
                //体力:3,SSSSS
                //莲华:回合限一次,你可弃置一张牌并执行:
                //①令一名角色回复1点体力,并为其添加1层『莲印』;
                //②若其有『莲印』,改为回复2点体力,且你摸一张牌.
                //拥有『莲印』的角色回合结束时,若其体力为满,你获得1层<莲心>(上限3).
                SG_lianhua: {
                    enable: 'phaseUse',
                    usable: 1,
                    filterCard: true,
                    selectCard: 1,
                    position: 'he',
                    filterTarget: true,
                    selectTarget(card, player) {
                        if (!player) {
                            player = _status.event.player;
                        }
                        return player.storage.SG_niepan ? [1, 2] : [1, 1];
                    },
                    mark: true,
                    intro: {
                        name: '莲印',
                        content: 'mark',
                    },
                    async content(event, trigger, player) {
                        if (event.target.storage.SG_lianhua > 0) {
                            event.target.recover(2);
                            player.draw();
                        } else {
                            event.target.recover();
                            event.target.addMark('SG_lianhua');
                        }
                    },
                    ai: {
                        order: 15,
                        result: {
                            target(player, target, card) {
                                if (target.hp < target.maxHp) {
                                    if (target.storage.SG_lianhua > 0) {
                                        return 3;
                                    }
                                    return 1.5;
                                }
                                return 0;
                            },
                            player(player, target, card) {
                                //主动技是否发动
                                if (target.storage.SG_lianhua > 0) {
                                    return 1;
                                }
                                return 2;
                            },
                        },
                    },
                    group: ['SG_lianhua_1'],
                    subSkill: {
                        1: {
                            trigger: {
                                global: ['phaseEnd'],
                            },
                            forced: true,
                            mark: true,
                            intro: {
                                name: '莲心',
                                content: 'mark',
                            },
                            filter(event, player) {
                                return event.player.storage.SG_lianhua > 0 && event.player.hp >= event.player.maxHp;
                            },
                            async content(event, trigger, player) {
                                player.addMark('SG_lianhua_1');
                            },
                        },
                    },
                },
                //慈佑:当一名角色受到伤害时,若你有<莲心>,可弃1层<莲心>并选择:
                //①防止此伤害,改为你失去1点体力;
                //②令伤害来源弃置一张牌,且此伤害-1.
                //你每以此法失去体力,随机将一张『桃』或『无中生有』置于牌堆顶.
                SG_ciyou: {
                    trigger: {
                        global: ['damageBefore'],
                    },
                    forced: true,
                    filter(event, player) {
                        return player.storage.SG_lianhua_1 > 0;
                    },
                    async content(event, trigger, player) {
                        const choose = player.storage.SG_niepan ? [1, 2] : [1, 1];
                        const { links } = await player
                            .chooseButton(['可弃1层<莲心>并选择', [['防止此伤害,改为你失去1点体力', '令伤害来源弃置一张牌,且此伤害-1'], 'tdnodes']], choose)
                            .set('ai', (button) => {
                                if (trigger.player.isFriendsOf(player)) {
                                    if (button.link == '防止此伤害,改为你失去1点体力') {
                                        return 2 * (trigger.num - 1);
                                    }
                                    if (trigger.source) {
                                        if (trigger.source.isFriendsOf(player)) {
                                            return 1;
                                        }
                                        return 3;
                                    }
                                    return 2;
                                }
                                return -2;
                            })
                            .forResult();
                        if (links && links[0]) {
                            player.removeMark('SG_lianhua_1');
                            if (links[0] == '防止此伤害,改为你失去1点体力') {
                                trigger.cancel();
                                player.loseHp();
                                let card = get.cardPile((c) => ['tao', 'wuzhong'].includes(c.name), 'field');
                                if (!card) {
                                    card = game.createCard(['tao', 'wuzhong'].randomGet());
                                }
                                ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
                            } else {
                                trigger.num--;
                                if (trigger.source?.countCards('he')) {
                                    trigger.source.chooseToDiscard('he', true);
                                }
                            }
                        }
                    },
                },
                //涅槃:限定技,当你进入濒死状态时,你可回复体力至3点,清空所有负面状态(横置,翻面,废除装备区,判定牌),并永久获得:
                //『莲华』可额外指定一名目标;
                //『慈佑』可同时执行两项效果;
                //你的手牌上限+X(X为存活角色数).
                SG_niepan: {
                    trigger: {
                        player: ['dying'],
                    },
                    limited: true,
                    forced: true,
                    mod: {
                        maxHandcard(player, num) {
                            if (player.storage.SG_niepan) {
                                return num + game.players.length;
                            }
                        },
                    },
                    async content(event, trigger, player) {
                        player.awakenSkill('SG_niepan');
                        player.hp = 3;
                        player.update();
                        player.classList.remove('linked', 'linked2');
                        player.classList.remove('turnedover');
                        if (player.countCards('j')) {
                            player.discard(player.getCards('j'));
                        }
                        player.disabledSlots = {};
                        player.storage.SG_niepan = true;
                    },
                },
                //——————————————————————————————————————————————————————————————————————————————————————————————————金环三结4体力R
                // 蛮勇:当你使用『杀』指定目标后,若你的体力值不小于该角色,你可令此杀伤害+1;若你的体力值小于该角色,你须弃置一张牌,否则此杀无效
                SG_manyong: {
                    trigger: {
                        player: ['shaBefore'],
                    },
                    forced: true,
                    filter(event, player) {
                        return event.target;
                    },
                    async content(event, trigger, player) {
                        if (player.hp >= trigger.target.hp) {
                            const { bool } = await player
                                .chooseBool('令此杀伤害+1')
                                .set('ai', () => trigger.target.isEnemiesOf(player))
                                .forResult();
                            if (bool) {
                                trigger.baseDamage++;
                            }
                        } else {
                            const result = await player
                                .chooseToDiscard('he', `弃置一张牌,否则此杀无效`)
                                .set('ai', (card) => 12 - get.value(card))
                                .forResult();
                            if (!result?.cards?.length) {
                                trigger.cancel();
                            }
                        }
                    },
                },
                //——————————————————————————————————————————————————————————————————————————————————————————————————董荼那4体力R
                // 缚擒:一名角色的结束阶段,若你本回合未成为其使用牌的目标,你可弃置一张牌并选择其装备区一张牌:若其不弃置该牌,则你对其造成1点伤害
                SG_fuqin: {
                    trigger: {
                        global: ['phaseAfter'],
                    },
                    forced: true,
                    filter(event, player) {
                        const his = event.player.actionHistory;
                        const evt = his[his.length - 1];
                        let bool = true;
                        for (const i of evt.useCard) {
                            if (i.targets?.includes(player)) {
                                bool = false;
                            }
                        }
                        return bool && player.countCards('he') && event.player.countCards('e');
                    },
                    async content(event, trigger, player) {
                        const result = await player
                            .chooseToDiscard('he', `弃置一张牌并选择其装备区一张牌`)
                            .set('ai', (card) => -get.attitude(player, trigger.player) - get.value(card))
                            .forResult();
                        if (result?.cards?.length) {
                            const { links } = await player
                                .chooseButton(['选择其装备区一张牌', trigger.player.getCards('e')])
                                .set('ai', (button) => get.value(button.link))
                                .forResult();
                            if (links && links[0]) {
                                const { bool } = await trigger.player
                                    .chooseBool(`弃置${get.translation(links)}或取消受到一点伤害`)
                                    .set('ai', () => get.value(links[0]) < 8)
                                    .forResult();
                                if (bool) {
                                    trigger.player.discard(links);
                                } else {
                                    trigger.player.damage();
                                }
                            }
                        }
                    },
                },
                //——————————————————————————————————————————————————————————————————————————————————————————————————阿会喃4体力R
                // 聚众:当你成为『南蛮入侵』的目标时,你可摸一张牌;若你因此受到伤害,可令伤害来源交给你一张手牌(若无则改为你摸一张牌)
                SG_juzhong: {
                    trigger: {
                        target: ['nanmanBefore'],
                    },
                    forced: true,
                    async content(event, trigger, player) {
                        player.draw();
                    },
                    group: ['SG_juzhong_1'],
                    subSkill: {
                        1: {
                            trigger: {
                                player: ['damage'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card?.name == 'nanman';
                            },
                            async content(event, trigger, player) {
                                if (trigger.source && trigger.source.countCards('h')) {
                                    await trigger.source.chooseToGive(player, 'h', true);
                                } else {
                                    player.draw();
                                }
                            },
                        },
                    },
                },
                //——————————————————————————————————————————————————————————————————————————————————————————————————楚歌(UR级)
                //离殇:回合限一次,你可弃置一张牌并选择一名角色,令其弃置两张牌(不足则全弃),若其因此弃置装备牌,你获得之.本回合其使用牌时,若花色与弃牌相同,你摸一张牌并令此牌无效
                SG_lishang: {
                    enable: 'phaseUse',
                    usable: 1,
                    filterCard: true,
                    selectCard: 1,
                    position: 'he',
                    filterTarget(card, player, target) {
                        return target != player;
                    },
                    selectTarget: 1,
                    async content(event, trigger, player) {
                        if (event.target.countCards('he')) {
                            const { cards } = await event.target.chooseToDiscard('he', 2, true).forResult();
                            if (cards?.length) {
                                const equip = cards.filter((q) => get.type(q) == 'equip');
                                const suit = cards.map((q) => q.suit).unique();
                                if (equip.length) {
                                    player.gain(equip, 'gain2');
                                }
                                event.target.addTempSkill('SG_lishang_1');
                                event.target.storage.SG_lishang_1 = suit;
                            }
                        }
                    },
                    ai: {
                        order: 10,
                        result: {
                            target: -1,
                        },
                    },
                    subSkill: {
                        1: {
                            trigger: {
                                player: ['useCard'],
                            },
                            forced: true,
                            init(player) {
                                player.storage.SG_lishang_1 = [];
                            },
                            filter(event, player) {
                                const boss = game.players.find((q) => q.hasSkill('SG_lishang'));
                                return boss && player.storage.SG_lishang_1.includes(event.card?.suit);
                            },
                            async content(event, trigger, player) {
                                const boss = game.players.find((q) => q.hasSkill('SG_lishang'));
                                boss.draw();
                                trigger.cancel();
                            },
                        },
                    },
                },
                //归心:限定技,当你进入濒死状态时,你回复体力至3点,将手牌补至4张,并获得效果:<br>你造成的伤害视为<因果伤害>(无法被防止/转移)<br>其他角色对你造成的伤害将等量反弹给伤害来源<br>『离殇』可额外执行一次
                SG_guixin: {
                    trigger: {
                        player: ['dying'],
                    },
                    forced: true,
                    limited: true,
                    async content(event, trigger, player) {
                        player.awakenSkill('SG_guixin');
                        player.hp = 3;
                        player.update();
                        player.drawTo(4);
                        player.addSkill('SG_guixin_1');
                        player.addSkill('SG_guixin_2');
                        lib.skill.SG_lishang.usable = 2;
                    },
                    subSkill: {
                        1: {
                            trigger: {
                                source: ['damageBefore'],
                            },
                            forced: true,
                            firstDo: true,
                            async content(event, trigger, player) {
                                trigger.cancel();
                                trigger.player.zhenshang(trigger.num, player, trigger.nature);
                            },
                        },
                        2: {
                            trigger: {
                                player: ['damage'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.source && event.source != player;
                            },
                            async content(event, trigger, player) {
                                trigger.source.damage(trigger.num);
                            },
                        },
                    },
                },
                //——————————————————————————————————————————————————————————————————————————————————————————————————蜜儿(UR级)势力:群/体力:2/护甲:1/
                // 普通形态(2体力)
                // 共生:回合外每受到1点伤害获得1层<灵契>(上限5);你每有1层<灵契>,其他角色与你的距离+1.你使用『闪』时,可以视为对来源使用一张『杀』
                SG_gongsheng: {
                    trigger: {
                        player: ['damageEnd'],
                    },
                    forced: true,
                    mark: true,
                    intro: {
                        name: '灵契',
                        content: 'mark',
                    },
                    mod: {
                        globalTo(from, to, current) {
                            return current + to.storage.SG_gongsheng;
                        },
                    },
                    filter(event, player) {
                        return _status.currentPhase != player;
                    },
                    async content(event, trigger, player) {
                        player.addMark('SG_gongsheng', trigger.num);
                        if (player.storage.SG_gongsheng > 5) {
                            player.storage.SG_gongsheng = 5;
                        }
                    },
                    group: ['SG_gongsheng_1'],
                    subSkill: {
                        1: {
                            trigger: {
                                player: ['useCardBegin'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.respondTo && event.respondTo[0] && event.card.name == 'shan';
                            },
                            async content(event, trigger, player) {
                                player.useCard({ name: 'sha' }, trigger.respondTo[0]);
                            },
                        },
                    },
                }, //20
                // 唤灵:回合限一次,你可以选择一项:
                // ①愈:令一名角色回复1点体力,并代替其承受下一次伤害;
                // ②召:弃置1层<灵契>,从牌堆随机获得一张『坐骑』或『宝物』牌,一名角色使用此牌时,你摸一张牌
                SG_huanling: {
                    enable: 'phaseUse',
                    usable: 1,
                    async content(event, trigger, player) {
                        const { control } = await player
                            .chooseControl(['愈', '召'])
                            .set('ai', (e, p) => {
                                if (player.getFriends(true).some((q) => q.hp < q.maxHp)) {
                                    return '愈';
                                }
                                return '召';
                            })
                            .forResult();
                        if (control == '愈') {
                            const { targets } = await player
                                .chooseTarget('令一名角色回复1点体力,并代替其承受下一次伤害', (c, p, t) => t.hp < t.maxHp)
                                .set('ai', (t) => get.attitude(player, t))
                                .forResult();
                            if (targets && targets[0]) {
                                targets[0].recover();
                                player.storage.SG_huanling_2.add(targets[0]);
                            }
                        } else {
                            player.removeMark('SG_gongsheng');
                            const card = get.cardPile((c) => ['equip5', 'equip3', 'equip4'].includes(get.subtype(c)), 'field');
                            if (card) {
                                player.gain(card, 'gain2');
                                player.storage.SG_huanling_1.add(card);
                            }
                        }
                    },
                    ai: {
                        order: 10,
                        result: {
                            player: 1,
                        },
                    },
                    group: ['SG_huanling_1', 'SG_huanling_2'],
                    subSkill: {
                        1: {
                            init(player) {
                                player.storage.SG_huanling_1 = [];
                            },
                            trigger: {
                                global: ['useCard'],
                            },
                            forced: true,
                            mark: true,
                            intro: {
                                name: '这些牌被使用时,你摸一张牌',
                                content: 'cards',
                            },
                            filter(event, player) {
                                return event.cards?.some((q) => player.storage.SG_huanling_1.includes(q));
                            },
                            async content(event, trigger, player) {
                                player.draw();
                            },
                        },
                        2: {
                            init(player) {
                                player.storage.SG_huanling_2 = [];
                            },
                            trigger: {
                                global: ['damageBefore'],
                            },
                            forced: true,
                            mark: true,
                            intro: {
                                name: '这些角色受伤害时,你代替其承受',
                                content: 'character',
                            },
                            filter(event, player) {
                                return event.player != player && player.storage.SG_huanling_2.includes(event.player);
                            },
                            async content(event, trigger, player) {
                                player.storage.SG_huanling_2.remove(trigger.player);
                                trigger.player = player;
                            },
                        },
                    },
                }, //30
                // 变身形态
                // 觉醒技:准备阶段,若<灵契>≥3.增加2点体力上限并回复2点体力,失去『共生』『唤灵』;获得技能『天麟』『归墟』
                SG_bianshen: {
                    limited: true,
                    juexingji: true,
                    trigger: {
                        player: ['phaseZhunbeiBegin'],
                    },
                    forced: true,
                    filter(event, player) {
                        return player.storage.SG_gongsheng > 2;
                    },
                    async content(event, trigger, player) {
                        player.node.avatar.style.backgroundImage = `url(extension/三国全系列/image/SG_mier1.jpg)`;
                        player.awakenSkill('SG_bianshen');
                        player.gainMaxHp(2);
                        player.recover(2);
                        player.removeSkill('SG_gongsheng');
                        player.removeSkill('SG_huanling');
                        player.addSkill('SG_tianlin');
                        player.addSkill('SG_guixu');
                    },
                }, //10
                // 天麟:你视为装备『麒麟弓』+『的卢』,且使用『杀』无视防具;你每造成1点伤害,随机执行一项:获得伤害来源一张牌;弃置其1张装备;令其本回合不能使用『闪』
                SG_tianlin: {
                    mod: {
                        attackRangeBase(player) {
                            return 5;
                        },
                        globalTo(from, to, current) {
                            return current + to.storage.SG_gongsheng;
                        },
                    },
                    trigger: { source: 'damageBegin2' },
                    filter(event, player) {
                        return event.card && event.card.name == 'sha' && event.notLink() && event.player.getCards('e', { subtype: ['equip3', 'equip4', 'equip6'] }).length;
                    },
                    forced: true,
                    content() {
                        'step 0';
                        const att = get.attitude(player, trigger.player) <= 0;
                        let next = player.chooseButton();
                        next.set('att', att);
                        next.set('createDialog', ['是否发动『麒麟弓』,弃置' + get.translation(trigger.player) + '的一张坐骑牌？', trigger.player.getCards('e', { subtype: ['equip3', 'equip4', 'equip6'] })]);
                        next.set('ai', function (button) {
                            if (_status.event.att) {
                                return get.buttonValue(button);
                            }
                            return 0;
                        });
                        ('step 1');
                        if (result.bool) {
                            trigger.player.discard(result.links[0]);
                        }
                    },
                    ai: {
                        unequip: true,
                    },
                    group: ['SG_tianlin_1'],
                    subSkill: {
                        1: {
                            trigger: {
                                source: ['damageEnd'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player;
                            },
                            async content(event, trigger, player) {
                                let count = Math.min(numberq1(trigger.num), 9);
                                while (count-- > 0) {
                                    const num = [1, 2, 3].randomGet();
                                    if (num == 1) {
                                        player.randomGain(trigger.player, true);
                                    } else if (num == 2) {
                                        if (trigger.player.countCards('e')) {
                                            await player.discardPlayerCard(trigger.player, 'e', true);
                                        }
                                    } else {
                                        trigger.player.addTempSkill('SG_tianlin_2');
                                    }
                                }
                            },
                        },
                        2: {
                            mod: {
                                cardEnabled2(card, player) {
                                    if (card.name == 'shan') {
                                        return false;
                                    }
                                },
                            },
                        },
                    },
                }, //30
                // 归墟:限定技,出牌阶段,你可以移除所有<灵契>,对至多X名角色造成X点雷电伤害(X为移除的<灵契>数),若此伤害导致角色死亡,你回复1点体力并重置此技能
                SG_guixu: {
                    limited: true,
                    enable: 'phaseUse',
                    filter(event, player) {
                        return player.storage.SG_gongsheng > 0;
                    },
                    async content(event, trigger, player) {
                        player.awakenSkill('SG_guixu');
                        const num = player.storage.SG_gongsheng;
                        player.storage.SG_gongsheng = 0;
                        const { targets } = await player
                            .chooseTarget(`对至多${num}名角色造成${num}点雷电伤害`, (c, p, t) => p != t)
                            .set('ai', (t) => -get.attitude(player, t))
                            .forResult();
                        if (targets && targets[0]) {
                            for (const npc of targets) {
                                await npc.damage(num, 'thunder');
                            }
                            if (targets.some((q) => !game.players.includes(q))) {
                                player.recover();
                                player.restoreSkill('SG_guixu');
                            }
                        }
                    },
                    ai: {
                        order: 10,
                        result: {
                            player: 1,
                        },
                    },
                }, //20
                //——————————————————————————————————————————————————————————————————————————————————————————————————沈嫣(UR级)/势力:群/体力:3(普通形态)/5(入魔形态)
                // 普通形态·灵枢素心(3体力)
                // 灵缚:你每发动一次『灵缚』,获得1层<业力>.回合限一次,你可以选择一名角色并依次执行:
                // ①封界:将其一张手牌称为<封>置于其武将牌上,其使用与<封>同类型的牌时,需弃置一张牌;
                // ②归溯:弃置其区域内一张牌,若为装备,你获得之并令其本回合不能使用此装备类型的牌
                SG_lingfu: {
                    enable: 'phaseUse',
                    usable: 1,
                    filterTarget(c, p, t) {
                        return t != p && t.countCards('hej');
                    },
                    selectTarget: 1,
                    mark: true,
                    intro: {
                        name: '业力',
                        content: 'mark',
                    },
                    async content(event, trigger, player) {
                        player.addMark('SG_lingfu');
                        if (event.target.countCards('h')) {
                            const { links } = await player
                                .chooseButton(['将其一张手牌称为<封>置于其武将牌上', event.target.getCards('h')])
                                .set('ai', (button) => get.value(button.link))
                                .forResult();
                            if (links && links[0]) {
                                event.target.addToExpansion(links).gaintag.add('SG_lingfu_1');
                                event.target.addSkill('SG_lingfu_1');
                            }
                        }
                        if (event.target.countCards('hej')) {
                            const result = await player.discardPlayerCard(event.target, 'hej', 'visible').forResult();
                            if (result?.links?.length) {
                                if (get.type(result.links[0]) == 'equip') {
                                    player.gain(result.links, 'gain2');
                                    event.target.addTempSkill('SG_lingfu_2');
                                }
                            }
                        }
                    },
                    ai: {
                        order: 10,
                        result: {
                            target: -3,
                        },
                    },
                    subSkill: {
                        1: {
                            trigger: {
                                player: ['useCard'],
                            },
                            forced: true,
                            filter(event, player) {
                                return player.getExpansions('SG_lingfu_1').some((q) => get.type(q) == get.type(event.card)) && player.countCards('he');
                            },
                            async content(event, trigger, player) {
                                player.chooseToDiscard(true, 'he');
                            },
                        },
                        2: {
                            mod: {
                                cardEnabled2(card, player) {
                                    if (get.type(card) == 'equip') {
                                        return false;
                                    }
                                },
                            },
                        },
                    },
                }, //30
                // 净魂
                // 当一名其他角色进入濒死时,你可以清空所有<业力>,令其回复至1点体力并摸X张牌,且直到其下个回合开始,其受到的伤害-1(X为你清空的<业力>数)
                SG_jinghun: {
                    trigger: {
                        global: ['dying'],
                    },
                    check(event, player) {
                        return event.player.isFriendsOf(player);
                    },
                    filter(event, player) {
                        return event.player != player && player.storage.SG_lingfu > 0;
                    },
                    async content(event, trigger, player) {
                        player.removeSkill('SG_rumo');
                        trigger.player.draw(player.storage.SG_lingfu);
                        player.storage.SG_lingfu = 0;
                        trigger.player.hp = 1;
                        trigger.player.addTempSkill('SG_jinghun_1', { player: 'phaseAfter' });
                    },
                    subSkill: {
                        1: {
                            trigger: {
                                player: ['damageBegin4'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            async content(event, trigger, player) {
                                trigger.num--;
                            },
                        },
                    },
                }, //20
                // 入魔
                // 限定技,准备阶段,若<业力>≥3,你可以增加2点体力上限,回复2点体力;获得技能『魔噬』『赤渊』
                SG_rumo: {
                    limited: true,
                    trigger: {
                        player: ['phaseZhunbeiBegin'],
                    },
                    check(event, player) {
                        return true;
                    },
                    filter(event, player) {
                        return player.storage.SG_lingfu > 2;
                    },
                    async content(event, trigger, player) {
                        player.node.avatar.style.backgroundImage = `url(extension/三国全系列/image/SG_shenyan1.jpg)`;
                        player.awakenSkill('SG_rumo');
                        player.gainMaxHp(2);
                        player.recover(2);
                        player.removeSkill('SG_jinghun');
                        player.addSkill('SG_moshi');
                        player.addSkill('SG_chiyuan');
                    },
                }, //10
                // 魔噬
                // 你造成的伤害视为<体力流失>,你的所有手牌视为【杀】,你使用【杀】无次数距离限制.你的回合内,每有一名其他角色失去一点体力,你获得1层<魔煞>.结束阶段,你失去X点体力(X为<魔煞>数)
                SG_moshi: {
                    mod: {
                        cardUsable(card) {
                            if (card.name == 'sha') {
                                return Infinity;
                            }
                        },
                        targetInRange(card) {
                            if (card.name == 'sha') {
                                return true;
                            }
                        },
                        cardname(card, player) {
                            return 'sha';
                        },
                    },
                    trigger: {
                        player: ['phaseJieshuBegin'],
                    },
                    forced: true,
                    filter(event, player) {
                        return player.storage.SG_moshi > 0;
                    },
                    async content(event, trigger, player) {
                        const num = player.storage.SG_moshi;
                        player.loseHp(num);
                    },
                    group: ['SG_moshi_1', 'SG_moshi_2'],
                    subSkill: {
                        1: {
                            trigger: {
                                source: ['damageBefore'],
                            },
                            forced: true,
                            async content(event, trigger, player) {
                                trigger.cancel();
                                trigger.player.loseHp(trigger.num);
                            },
                        },
                        2: {
                            trigger: {
                                global: ['loseHpEnd'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player && _status.currentPhase == player;
                            },
                            async content(event, trigger, player) {
                                player.addMark('SG_moshi', trigger.num);
                            },
                        },
                    },
                }, //20
                // 赤渊
                // 回合限一次,你可以移除3层<魔煞>,对至多三名角色各造成2点火焰伤害,并令这些角色非锁定技失效
                SG_chiyuan: {
                    enable: 'phaseUse',
                    usable: 1,
                    filter(event, player) {
                        return player.storage.SG_moshi > 2;
                    },
                    async content(event, trigger, player) {
                        player.storage.SG_moshi -= 3;
                        const { targets } = await player
                            .chooseTarget('对至多三名角色各造成1点火焰伤害', (c, p, t) => p != t, [1, 3])
                            .set('ai', (t) => -get.attitude(player, t))
                            .forResult();
                        if (targets && targets[0]) {
                            for (const npc of targets) {
                                npc.addSkill('fengyin');
                                npc.damage(2, 'fire');
                            }
                        }
                    },
                    ai: {
                        order: 15,
                        result: {
                            player: 1,
                        },
                    },
                }, //20
                //——————————————————————————————————————————————————————————————————————————————————————————————————C级:蜀国逃难百姓 (体力1/1,护甲1)
                // 流离
                // 一名其他角色回合结束时,若你本回合未受伤摸1牌,否则弃1牌
                SG_liuli: {
                    trigger: {
                        global: ['phaseAfter'],
                    },
                    forced: true,
                    filter(event, player) {
                        return event.player != player;
                    },
                    async content(event, trigger, player) {
                        const his = player.actionHistory;
                        const evt = his[his.length - 1];
                        if (evt.damage.length) {
                            player.chooseToDiscard('he', true);
                        } else {
                            player.draw();
                        }
                    },
                },
                //——————————————————————————————————————————————————————————————————————————————————————————————————B级:蜀国普通百姓体力(体力2/2,护甲1)
                // 耕织:回合限一次,弃1牌令一名同势力的其他角色摸1牌,若为基本牌,你与其各回复1点护甲
                SG_gengzhi: {
                    enable: 'phaseUse',
                    usable: 1,
                    filterCard: true,
                    selectCard: 1,
                    position: 'he',
                    check(card) {
                        if (get.type(card) == 'basic') {
                            return 12 - get.value(card);
                        }
                        return 6 - get.value(card);
                    },
                    filterTarget(card, player, target) {
                        return target.group == player.group && target != player;
                    },
                    selectTarget: 1,
                    async content(event, trigger, player) {
                        event.target.draw();
                        if (get.type(event.cards[0]) == 'basic') {
                            player.SG_hujia();
                            event.target.SG_hujia();
                        }
                    },
                    ai: {
                        order: 10,
                        result: {
                            player: 0.5,
                            target: 2,
                        },
                    },
                },
                //——————————————————————————————————————————————————————————————————————————————————————————————————A级:蜀国士兵体力(体力3/3,护甲1)
                // 戍卫
                // 你的『杀』被『闪』抵消后,可令攻击范围内另一名角色成为目标
                SG_shuwei: {
                    trigger: {
                        player: ['shaMiss'],
                    },
                    forced: true,
                    filter(event, player) {
                        return game.players.some((q) => get.distance(player, q, 'attack') < 2 && ![event.target, player].includes(q));
                    },
                    async content(event, trigger, player) {
                        const { targets } = await player
                            .chooseTarget('令攻击范围内另一名角色成为目标', (c, p, t) => get.distance(p, t, 'attack') < 2 && ![trigger.target, p].includes(t))
                            .set('ai', (t) => -get.attitude(player, t))
                            .forResult();
                        if (targets && targets[0]) {
                            player.useCard({ name: 'sha' }, targets[0], false);
                        }
                    },
                },
                // 整备:结束阶段,若你本回合未造成伤害,可令一名角色重置护甲
                SG_zhengbei: {
                    trigger: {
                        player: ['phaseJieshuBegin'],
                    },
                    forced: true,
                    filter(event, player) {
                        const his = player.actionHistory;
                        const evt = his[his.length - 1];
                        return !evt.sourceDamage.length;
                    },
                    async content(event, trigger, player) {
                        const { targets } = await player
                            .chooseTarget('令一名角色重置护甲', (c, p, t) => t.hujia)
                            .set('ai', (t) => -get.attitude(player, t))
                            .forResult();
                        if (targets && targets[0]) {
                            targets[0].hujia = 0;
                        }
                    },
                },
                //——————————————————————————————————————————————————————————————————————————————————————————————————S级:蜀国百夫长 (体力3/3,护甲2)
                // 号令
                // 出牌阶段限一次,你可以弃置一张装备牌,令所有同势力的角色对你使用一张『杀』,若你因此受伤后,你摸两张牌
                SG_haoling: {
                    enable: 'phaseUse',
                    usable: 1,
                    filterCard(card) {
                        return get.type(card) == 'equip';
                    },
                    selectCard: 1,
                    position: 'he',
                    async content(event, trigger, player) {
                        for (const npc of game.players.filter((q) => q.group == player.group)) {
                            const sha = npc.useCard({ name: 'sha' }, player, false);
                            await sha;
                            const his = player.actionHistory;
                            const evt = his[his.length - 1];
                            if (evt.damage.some((e) => e.getParent((x) => x == sha, true))) {
                                player.draw(2);
                            }
                        }
                    },
                    ai: {
                        order: 10,
                        result: {
                            player: 1,
                        },
                    },
                },
                // 铁壁
                // 你的护甲每损失1点,可令一名同势力其他角色获得1点护甲
                SG_tiebi: {
                    trigger: {
                        player: ['changeHujiaAfter'],
                    },
                    forced: true,
                    filter(event, player) {
                        return event.num < 0;
                    },
                    async content(event, trigger, player) {
                        let count = Math.min(numberq1(trigger.num), 9);
                        while (count-- > 0) {
                            const { targets } = await player
                                .chooseTarget('令一名同势力其他角色获得1点护甲', (c, p, t) => t.group == p.group && t != p)
                                .set('ai', (t) => get.attitude(player, t))
                                .forResult();
                            if (targets && targets[0]) {
                                targets[0].SG_hujia();
                            }
                        }
                    },
                },
                //——————————————————————————————————————————————————————————————————————————————————————————————————海棠 势力:群体力:3/3护甲:1
                // 舞姬:回合限一次,你可以选择一项:
                // ① 愈:令一名角色回复1点体力,若其性别为男,额外获得1层『灵印』;
                // ② 锢:弃置一名角色区域内两张牌(装备优先),若其为魏或吴势力,其本回合无法使用与弃牌同类型的牌
                // 每回合限2次,拥有『灵印』的角色受到伤害后,你获得1点护甲,其摸一张牌
                SG_wuji: {
                    audio: 'ext:三国全系列/audio:4',
                    enable: 'phaseUse',
                    usable: 1,
                    mark: true,
                    intro: {
                        name: '灵印',
                        content: 'mark',
                    },
                    async content(event, trigger, player) {
                        const { control } = await player
                            .chooseControl(['愈', '锢'])
                            .set('ai', (e, p) => {
                                if (player.getFriends(true).some((q) => q.hp < q.maxHp)) {
                                    return '愈';
                                }
                                return '锢';
                            })
                            .forResult();
                        if (control == '愈') {
                            const { targets } = await player
                                .chooseTarget('令一名角色回复1点体力,若其性别为男,额外获得1层『灵印』', (c, p, t) => t.hp < t.maxHp)
                                .set('ai', (t) => get.attitude(player, t))
                                .forResult();
                            if (targets && targets[0]) {
                                targets[0].recover();
                                if (targets[0].sex == 'male') {
                                    targets[0].addMark('SG_wuji');
                                }
                            }
                        } else {
                            const { targets } = await player
                                .chooseTarget('弃置一名角色区域内两张牌(装备优先),若其为魏或吴势力,其本回合无法使用与弃牌同类型的牌', (c, p, t) => p != t && t.countCards('he'))
                                .set('ai', (t) => -get.attitude(player, t))
                                .forResult();
                            if (targets && targets[0]) {
                                let cards = [];
                                const he = targets[0].getCards('he');
                                const equip = targets[0].getCards('e');
                                const hand = targets[0].getCards('h');
                                if (he.length < 3) {
                                    cards = he;
                                } else {
                                    if (equip.length > 1) {
                                        cards = equip.randomGets(2);
                                    } else if (equip.length) {
                                        cards = equip.concat(hand.randomGet());
                                    } else {
                                        cards = hand.randomGets(2);
                                    }
                                }
                                targets[0].discard(cards);
                                if (['wei', 'wu'].includes(targets[0].group)) {
                                    targets[0].addTempSkill('SG_wuji_2');
                                    targets[0].storage.SG_wuji_2 = cards.map((q) => get.type(q)).unique();
                                }
                            }
                        }
                    },
                    ai: {
                        order: 10,
                        result: {
                            player: 2,
                        },
                    },
                    group: ['SG_wuji_1'],
                    subSkill: {
                        1: {
                            usable: 2,
                            trigger: {
                                global: ['damageEnd'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player.storage.SG_wuji;
                            },
                            async content(event, trigger, player) {
                                player.SG_hujia();
                                trigger.player.draw();
                            },
                        },
                        2: {
                            mod: {
                                cardEnabled2(card, player) {
                                    if (player.storage.SG_wuji_2.includes(lib.card[card.name]?.type)) {
                                        return false;
                                    }
                                },
                            },
                            onremove(player) {
                                player.storage.SG_wuji_2 = [];
                            },
                        },
                    },
                }, //40
                // 同契
                // 使命技,当一名男性角色濒死时,你可令其体力回复至上限,清空所有负面状态(横置,翻面,废除装备区,判定牌),重置所有技能为游戏开始时的状态,随后你进入灵魂状态(无回合/免疫伤害/免疫死亡)
                // 成功
                // 其在两回合内累计造成3点伤害或击杀一名角色,你复活并回复2点体力和1点护甲,且『舞姬』改为回合各限一次
                // 失败
                // 你死亡,其失去所有技能
                SG_tongqi: {
                    trigger: {
                        global: ['dying'],
                    },
                    filter(event, player) {
                        return event.player.sex == 'male';
                    },
                    check(event, player) {
                        return event.player.isFriendsOf(player);
                    },
                    async content(event, trigger, player) {
                        player.awakenSkill('SG_tongqi');
                        trigger.player.hp = trigger.player.maxHp;
                        trigger.player.classList.remove('linked', 'linked2');
                        trigger.player.classList.remove('turnedover');
                        if (trigger.player.countCards('j')) {
                            trigger.player.discard(trigger.player.getCards('j'));
                        }
                        trigger.player.disabledSlots = {};
                        trigger.player.initedSkills = [];
                        trigger.player.tempSkills = {};
                        trigger.player.invisibleSkills = [];
                        trigger.player.hiddenSkills = [];
                        trigger.player.additionalSkills = {};
                        trigger.player.storage.skill_blocker = [];
                        trigger.player.disabledSkills = {};
                        const skills = lib.character[trigger.player.name]?.skills;
                        if (Array.isArray(skills)) {
                            for (const i of skills) {
                                trigger.player.addSkill(i);
                            }
                        }
                        trigger.player.addSkill('SG_tongqi_1');
                        trigger.player.storage.SG_tongqi = player;
                        player.addSkill('SG_tongqi_2');
                    },
                    subSkill: {
                        1: {
                            audio: 'ext:三国全系列/audio:3',
                            init(player) {
                                player.storage.SG_tongqi_phase = 0;
                                player.storage.SG_tongqi_damage = 0;
                            },
                            trigger: {
                                source: ['damageEnd', 'dieEnd'],
                                player: ['phaseAfter', 'dieEnd'],
                            },
                            forced: true,
                            forceDie: true,
                            filter(event, player, name) {
                                return player.storage.SG_tongqi;
                            },
                            async content(event, trigger, player) {
                                const boss = player.storage.SG_tongqi;
                                const shibai = function () {
                                    player.$skill('使命失败');
                                    player.clearSkills();
                                    boss.removeSkill('SG_tongqi_2');
                                    boss.die();
                                };
                                const chenggong = function () {
                                    player.awakenSkill('SG_tongqi_1');
                                    boss.removeSkill('SG_tongqi_2');
                                    boss.recover(2);
                                    boss.hujia = 1;
                                    lib.skill.SG_wuji.usable = 2;
                                };
                                if (trigger.player == player) {
                                    if (trigger.name == 'phase') {
                                        player.storage.SG_tongqi_phase++;
                                        if (player.storage.SG_tongqi_phase > 1) {
                                            shibai();
                                        }
                                    }
                                    if (trigger.name == 'die') {
                                        shibai();
                                    }
                                } else {
                                    if (trigger.name == 'damage') {
                                        player.storage.SG_tongqi_damage += trigger.num;
                                        if (player.storage.SG_tongqi_damage > 2) {
                                            chenggong();
                                        }
                                    }
                                    if (trigger.name == 'die') {
                                        chenggong();
                                    }
                                }
                            },
                        },
                        2: {
                            trigger: {
                                player: ['dieBefore', 'phaseBefore', 'damageBefore'],
                            },
                            forced: true,
                            mark: true,
                            intro: {
                                content: '当前为灵魂状态(无回合/免疫伤害/免疫死亡)',
                            },
                            async content(event, trigger, player) {
                                trigger.cancel();
                            },
                        },
                    },
                }, //30
                //——————————————————————————————————————————————————————————————————————————————————————————————————百辟刀
                //你使用的黑色『杀』可移除1点护甲(若有)令伤害+1
                SG_baipi: {
                    trigger: {
                        source: ['damageBefore'],
                    },
                    filter(event, player) {
                        return player.hujia > 0;
                    },
                    check(event, player) {
                        return event.player.isEnemiesOf(player);
                    },
                    async content(event, trigger, player) {
                        player.hujia--;
                        trigger.num++;
                    },
                }, //10
                //——————————————————————————————————————————————————————————————————————————————————————————————————七星灯
                //你每回合首次造成伤害后,可回复1点体力或摸一张牌
                SG_qixing: {
                    trigger: {
                        source: ['damageEnd'],
                    },
                    usable: 1,
                    forced: true,
                    async content(event, trigger, player) {
                        if (player.hp >= player.maxHp) {
                            player.draw();
                        } else {
                            const { control } = await player
                                .chooseControl(['回血', '摸牌'])
                                .set('ai', (e, p) => {
                                    return '回血';
                                })
                                .forResult();
                            if (control == '回血') {
                                player.recover();
                            } else {
                                player.draw();
                            }
                        }
                    },
                }, //10
                //——————————————————————————————————————————————————————————————————————————————————————————————————谋·赵妪
                // 体力/体力上限4/6
                // 血仇:当一名群势力角色受到伤害后,你获得1个<仇>标记;
                // 出牌阶段,可移除2个<仇>选择一项:
                // ①对一名角色造成1点伤害并弃置其一张牌;
                // ②令一名群势力角色回复1点体力并摸一张牌
                SG_xuechou: {
                    audio: 'ext:三国全系列/audio:1',
                    trigger: {
                        global: ['damageEnd'],
                    },
                    forced: true,
                    mark: true,
                    intro: {
                        name: '仇',
                        content: 'mark',
                    },
                    filter(event, player) {
                        return event.player.group == 'qun';
                    },
                    async content(event, trigger, player) {
                        player.addMark('SG_xuechou');
                    },
                    group: ['SG_xuechou_1'],
                    subSkill: {
                        1: {
                            enable: 'phaseUse',
                            usable: 2,
                            filter(event, player) {
                                return player.storage.SG_xuechou > 1;
                            },
                            filterTarget(card, player, target) {
                                return true;
                            },
                            selectTarget: 1,
                            async content(event, trigger, player) {
                                player.storage.SG_xuechou -= 2;
                                if (event.target.group == 'qun') {
                                    const { control } = await player
                                        .chooseControl([`对${get.translation(event.target)}造成1点伤害并弃置其一张牌`, `令${get.translation(event.target)}回复1点体力并摸一张牌`])
                                        .set('ai', (e, p) => {
                                            if (event.target.isFriendsOf(player)) {
                                                return `令${get.translation(event.target)}回复1点体力并摸一张牌`;
                                            }
                                            return `对${get.translation(event.target)}造成1点伤害并弃置其一张牌`;
                                        })
                                        .forResult();
                                    if (control == `令${get.translation(event.target)}回复1点体力并摸一张牌`) {
                                        event.target.recover();
                                        event.target.draw();
                                        const { bool } = await player
                                            .chooseBool('是否令<赤潮战象>切换为减一马')
                                            .set('ai', () => false)
                                            .forResult();
                                        if (bool) {
                                            lib.card.SG_zhanxiang.distance = {
                                                globalFrom: -1,
                                            };
                                        }
                                    } else {
                                        event.target.damage();
                                        event.target.chooseToDiscard('he', true);
                                    }
                                } else {
                                    event.target.damage();
                                    event.target.chooseToDiscard('he', true);
                                }
                            },
                            ai: {
                                order: 10,
                                result: {
                                    target(player, target, card) {
                                        if (target.group == 'qun' && target.isFriendsOf(player)) {
                                            if (target.hp < target.maxHp) {
                                                return 3;
                                            }
                                            return 1;
                                        }
                                        return -3;
                                    },
                                },
                            },
                        },
                    },
                }, //30
                // 隐刃:你使用的黑色『杀』无视防具且不可被『闪』响应;若目标有<仇>标记,此『杀』伤害+1;每轮开始时,将<连环仇刀>置入你的装备区
                SG_yinren: {
                    audio: 'ext:三国全系列/audio:1',
                    trigger: {
                        player: ['shaBefore'],
                    },
                    forced: true,
                    async content(event, trigger, player) {
                        trigger.directHit = true;
                        if (trigger.target.storage.SG_xuechou > 0) {
                            trigger.baseDamage = 2;
                        }
                    },
                    ai: {
                        unequip: true,
                        skillTagFilter(player, tag, arg) {
                            if (arg && arg.name == 'sha' && arg.card && get.color(arg.card) == 'black') {
                                return true;
                            }
                            return false;
                        },
                    },
                    group: ['SG_yinren_1', 'SG_yinren_2'],
                    subSkill: {
                        1: {
                            audio: 'ext:三国全系列/audio:1',
                            trigger: {
                                global: ['roundStart'],
                            },
                            forced: true,
                            async content(event, trigger, player) {
                                let card = get.cardPile((c) => c.name == 'SG_choudao', 'field');
                                if (!card) {
                                    card = game.createCard('SG_choudao');
                                }
                                player.equip(card);
                            },
                        },
                        2: {
                            trigger: {
                                global: ['gameStart'],
                            },
                            forced: true,
                            async content(event, trigger, player) {
                                let card = get.cardPile((c) => c.name == 'SG_zhanxiang', 'field');
                                if (!card) {
                                    card = game.createCard('SG_zhanxiang');
                                }
                                player.equip(card);
                            },
                        },
                    },
                }, //20
                //连环仇刀:使用黑色『杀』对一名角色造成伤害后,可视为对另一名角色使用『杀』(无视距离),这些角色获得<仇>标记
                SG_choudao: {
                    trigger: {
                        source: ['damageEnd'],
                    },
                    filter(event, player) {
                        return event.card && event.card.name == 'sha' && get.color(event.card) == 'black';
                    },
                    forced: true,
                    async content(event, trigger, player) {
                        trigger.player.addMark('SG_xuechou');
                        if (game.players.some((q) => ![trigger.player, player].includes(q))) {
                            const { targets } = await player
                                .chooseTarget('视为对另一名其他角色使用『杀』(无视距离)', (c, p, t) => ![trigger.player, player].includes(t))
                                .set('ai', (t) => -get.attitude(player, t))
                                .forResult();
                            if (targets && targets[0]) {
                                player.useCard({ name: 'sha' }, targets[0], false);
                                targets[0].addMark('SG_xuechou');
                                if (player.getEquip('SG_zhanxiang')) {
                                    for (const npc of [trigger.player.next, trigger.player.previous]) {
                                        const num = npc.storage.SG_xuechou;
                                        if (num > 0) {
                                            targets[0].addMark(num);
                                            targets[0].damage(num, 'fire');
                                            npc.storage.SG_xuechou = 0;
                                        }
                                    }
                                }
                            }
                        }
                    },
                }, //10
                //赤江:当你死亡时,移除所有<仇>标记并执行任意一项:
                //①血浪滔天:在场上生成『赤江』地形(持续3轮),所有吴势力角色每回合首次使用或打出牌时,须进行判定:若为红色牌,其流失1点体力;若为黑色牌,其随机弃置一张装备牌(无装备则本回合无法使用『桃』)
                //② 圣躯不腐:将你的武将牌横置为『江灵』状态(视为存活但不可操作),每轮结束时对吴势力角色发动一次『隐刃』效果的黑『杀』,此状态持续3轮或任意群势力角色死亡后解除
                SG_chijiang: {
                    trigger: {
                        player: ['dieBefore'],
                    },
                    forced: true,
                    async content(event, trigger, player) {
                        player.awakenSkill('SG_chijiang');
                        for (const npc of game.players) {
                            npc.storage.SG_xuechou = 0;
                        }
                        const { control } = await player
                            .chooseControl(['在场上生成『赤江』地形', '将武将牌横置为『江灵』状态'])
                            .set('prompt', `执行任意一项`)
                            .set('ai', (e, p) => {
                                return ['在场上生成『赤江』地形', '将武将牌横置为『江灵』状态'].randomGet();
                            })
                            .forResult();
                        if (control == '在场上生成『赤江』地形') {
                            game.addGlobalSkill('SG_chijiang_1');
                        } else {
                            trigger.cancel();
                            player.addSkill('SG_shengqu');
                        }
                    },
                    subSkill: {
                        1: {
                            trigger: {
                                player: ['useCard'],
                            },
                            forced: true,
                            usable: 1,
                            filter(event, player) {
                                return player.group == 'wu';
                            },
                            async content(event, trigger, player) {
                                const { color } = await player.judge('血浪滔天', (card) => (get.color(card) == 'red' ? -2 : -1)).forResult();
                                if (color == 'red') {
                                    player.loseHp();
                                } else {
                                    if (player.countCards('e')) {
                                        player.randomDiscard('e');
                                    } else {
                                        player.addTempSkill('SG_chijiang_3');
                                    }
                                }
                            },
                        },
                        3: {
                            mod: {
                                cardEnabled2(card, player) {
                                    if (card.name == 'tao') {
                                        return false;
                                    }
                                },
                            },
                        },
                    },
                }, //30
                SG_shengqu: {
                    audio: 'ext:三国全系列/audio:1',
                    trigger: {
                        player: ['dieBefore', 'phaseBegin', 'damageBefore'],
                    },
                    forced: true,
                    mark: true,
                    intro: {
                        content: '当前为圣躯状态(无回合/免疫伤害/免疫死亡)',
                    },
                    async content(event, trigger, player) {
                        trigger.cancel();
                    },
                    group: ['SG_shengqu_1', 'SG_shengqu_2', 'SG_shengqu_3'],
                    subSkill: {
                        1: {
                            trigger: {
                                global: ['roundStart'],
                            },
                            forced: true,
                            filter(event, player) {
                                return game.players.some((q) => q.group == 'wu');
                            },
                            async content(event, trigger, player) {
                                player.useCard(
                                    { name: 'sha', suit: 'spade' },
                                    game.players.filter((q) => q.group == 'wu'),
                                    false,
                                );
                            },
                        },
                        2: {
                            init(player) {
                                player.storage.SG_shengqu = 0;
                            },
                            trigger: {
                                global: ['roundStart'],
                            },
                            forced: true,
                            popup: false,
                            async content(event, trigger, player) {
                                player.storage.SG_shengqu++;
                                if (player.storage.SG_shengqu > 2) {
                                    player.removeSkill('SG_shengqu');
                                    player.die();
                                }
                            },
                        },
                        3: {
                            trigger: {
                                global: ['dieEnd'],
                            },
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                return event.player.group == 'qun';
                            },
                            async content(event, trigger, player) {
                                player.removeSkill('SG_shengqu');
                                player.die();
                            },
                        },
                    },
                }, //20
                //——————————————————————————————————————————————————————————————————————————————————————————————————谋·张琪瑛
                // 体力/体力上限/护甲:3/3/2
                // 天师:你使用黑色牌时,可消耗1点护甲令其结算两次;每当你造成属性伤害,获得等量护甲
                SG_tianshi: {
                    trigger: {
                        player: ['useCard'],
                    },
                    filter(event, player) {
                        return get.color(event.card) == 'black' && player.hujia > 0 && event.targets?.length && !['equip', 'delay'].includes(get.type(event.card));
                    },
                    check(event, player) {
                        let num = 0;
                        for (const i of event.targets) {
                            num += get.effect(i, event.card, player, player);
                        }
                        return num > 5;
                    },
                    async content(event, trigger, player) {
                        trigger.effectCount++;
                    },
                    group: ['SG_tianshi_1'],
                    subSkill: {
                        1: {
                            trigger: {
                                source: ['damageEnd'],
                            },
                            filter(event, player) {
                                return event.nature;
                            },
                            forced: true,
                            async content(event, trigger, player) {
                                player.SG_hujia(trigger.num);
                            },
                        },
                    },
                }, //20
                // 符咒:回合限一次,你可以弃置一张黑色牌,对一名角色造成1点雷电伤害,并令其回合结束弃置两张牌
                SG_fuzhou: {
                    enable: 'phaseUse',
                    usable: 1,
                    filterCard(card) {
                        return get.color(card) == 'black';
                    },
                    selectCard: 1,
                    position: 'he',
                    filterTarget(card, player, target) {
                        return target != player;
                    },
                    selectTarget: 1,
                    async content(event, trigger, player) {
                        event.target.damage('thunder');
                        event.target
                            .when({ player: 'phaseAfter' })
                            .filter((e, p) => p.countCards('he'))
                            .then(() => {
                                player.chooseToDiscard(2, 'he', true);
                            });
                    },
                    ai: {
                        order: 10,
                        result: {
                            target: -4,
                        },
                    },
                }, //10
                // 祈禳:你的红色牌可视为『桃』或『酒』;黑色牌可视为『无懈可击』或『过河拆桥』
                SG_qirang: {
                    enable: ['chooseToUse'],
                    filter(event, player) {
                        const vcard = {
                            red: ['tao', 'jiu'],
                            black: ['wuxie', 'guohe'],
                        };
                        for (const c in vcard) {
                            if (player.countCards('he', { color: c })) {
                                for (const i of vcard[c]) {
                                    if (player.filterCard(i, true)) {
                                        return true;
                                    }
                                }
                            }
                        }
                    },
                    hiddenCard(player, name) {
                        if (player.countCards('he', { color: 'red' })) {
                            if (['tao', 'jiu'].includes(name)) {
                                return true;
                            }
                        }
                        if (player.countCards('he', { color: 'black' })) {
                            if (['wuxie', 'guohe'].includes(name)) {
                                return true;
                            }
                        }
                    },
                    async content(event, trigger, player) {
                        const vcard = {
                            red: ['tao', 'jiu'],
                            black: ['wuxie', 'guohe'],
                        };
                        let list = [];
                        const evt = event.getParent(2);
                        if (evt.name == '_wuxie') {
                            list.push([lib.suits.randomGet(), lib.number.randomGet(), 'wuxie']);
                        } else {
                            for (const c in vcard) {
                                if (player.countCards('he', { color: c })) {
                                    for (const i of vcard[c]) {
                                        if (player.filterCard(i, true)) {
                                            list.push([lib.suits.randomGet(), lib.number.randomGet(), i]);
                                        }
                                    }
                                }
                            }
                        }
                        if (list.length) {
                            const color = [];
                            for (const c in vcard) {
                                if (list.some((q) => vcard[c].includes(q[2]))) {
                                    color.push(c);
                                }
                            }
                            const { cards } = await player
                                .chooseCard('he', (c) => color.includes(get.color(c)))
                                .set('ai', (card) => 999 - get.value(card))
                                .forResult(); //填小了会无限循环
                            if (cards && cards[0]) {
                                list = list.filter((q) => vcard[get.color(cards[0])].includes(q[2]));
                                const { links } = await player
                                    .chooseButton(['视为使用一张牌', [list, 'vcard']])
                                    .set('ai', (button) => {
                                        const num = player.getUseValue(
                                            {
                                                name: button.link[2],
                                                nature: button.link[3],
                                            },
                                            null,
                                            true,
                                        );
                                        return number0(num) + 10;
                                    })
                                    .forResult();
                                if (links && links[0]) {
                                    if (links[0][2] == 'wuxie') {
                                        player.useCard({ name: links[0][2] }, cards, false);
                                        event._trigger = evt._trigger;
                                    }
                                    if (evt.parent.name == '_save') {
                                        await player.useCard({ name: links[0][2] }, _status.dying, cards, false);
                                    } else {
                                        await player.chooseUseTarget(
                                            {
                                                name: links[0][2],
                                                nature: links[0][3],
                                            },
                                            cards,
                                            true,
                                            true,
                                            'nodistance',
                                        );
                                    }
                                }
                            }
                        }
                    },
                    ai: {
                        fireAttack: true,
                        save: true,
                        order: 10,
                        result: {
                            player(player) {
                                if (_status.event.dying) {
                                    return get.attitude(player, _status.event.dying);
                                }
                                return 1;
                            },
                        },
                    },
                }, //50
                //你使用的『杀』可额外指定一名攻击范围内的角色
                SG_chuanyun: {
                    mod: {
                        selectTarget(card, player, range) {
                            if (card.name == 'sha') {
                                range[1] += 1;
                            }
                        },
                    },
                }, //10
                //若吕布在场,此牌不可被无懈
                SG_juesi: {
                    trigger: {
                        player: ['useCardBefore'],
                    },
                    forced: true,
                    filter(event, player) {
                        return event.card.name == 'SG_juesi' && game.players.some((q) => get.translation(q.name).includes('吕布'));
                    },
                    async content(event, trigger, player) {
                        trigger.directHit = game.players;
                    },
                }, //10
                //你免疫『毒』属性伤害;每回合首次受到伤害时,若伤害≥2,获得1点护甲;当你受到火焰伤害时,弃置此牌并防止之
                SG_xuanbing: {
                    trigger: {
                        player: ['damageBefore'],
                    },
                    forced: true,
                    async content(event, trigger, player) {
                        if (trigger.nature == 'du') {
                            trigger.cancel();
                        }
                        if (trigger.nature == 'fire') {
                            trigger.cancel();
                            const card = player.getEquip('SG_xuanbing');
                            if (card) {
                                player.discard(card);
                            }
                        }
                        const his = player.actionHistory;
                        const evt = his[his.length - 1];
                        if (trigger.num > 1 && !evt.damage.length) {
                            player.SG_hujia();
                        }
                    },
                }, //10
                //你使用的『杀』需额外1张『闪』抵消.若此『杀』被抵消,你获得1点护甲
                SG_xuantie: {
                    trigger: {
                        player: 'shaBefore',
                    },
                    forced: true,
                    async content(event, trigger, player) {
                        trigger.shanRequired = 2;
                    },
                    group: ['SG_xuantie_1'],
                    subSkill: {
                        1: {
                            trigger: {
                                player: 'shaMiss',
                            },
                            forced: true,
                            async content(event, trigger, player) {
                                player.SG_hujia();
                            },
                        },
                    },
                }, //10
                //回合结束时选择弃置一张牌或失去1点体力
                SG_gu: {
                    trigger: {
                        player: ['phaseEnd'],
                    },
                    forced: true,
                    async content(event, trigger, player) {
                        player.removeSkill('SG_gu');
                        if (player.countCards('he')) {
                            const result = await player
                                .chooseToDiscard('弃置一张牌或失去1点体力', 'he')
                                .set('ai', (c) => 6 - get.value(c))
                                .forResult();
                            if (!result.bool) {
                                player.loseHp();
                            }
                        } else {
                            player.loseHp();
                        }
                    },
                }, //10
                //当其他角色对你使用『蛊』时,可打出『解』令『蛊』无效并弃置
                SG_jie: {
                    trigger: {
                        target: ['SG_guBefore'],
                    },
                    forced: true,
                    filter(event, player) {
                        return player.hasCard((c) => c.name == 'SG_jie', 'hs');
                    },
                    async content(event, trigger, player) {
                        const result = await player.chooseToRespond('打出『解』令『蛊』无效并弃置', (card) => card.name == 'SG_jie').forResult();
                        if (result?.cards?.length) {
                            trigger.cancel();
                        }
                    },
                }, //10
                //当你的黑色『杀』命中目标时,令其左右相邻角色各获得1个<仇>标记;若此杀触发<连环仇刀>效果,可将这些标记直接转移至新目标,每转移1个<仇>标记,使其多受到1点火焰伤害
                SG_zhanxiang: {
                    mod: {
                        canBeGained(card, source, player) {
                            if (card.name == 'SG_zhanxiang') {
                                return false;
                            }
                        },
                        canBeDiscarded(card, source, player) {
                            if (card.name == 'SG_zhanxiang') {
                                return false;
                            }
                        },
                        canBeReplaced(card, player) {
                            //这里是vcard
                            if (card.name == 'SG_zhanxiang') {
                                return false;
                            }
                        },
                        cardDiscardable(card, player) {
                            if (card.name == 'SG_zhanxiang') {
                                return false;
                            }
                        },
                    },
                    trigger: {
                        player: ['shaHit'],
                    },
                    filter(event, player) {
                        return get.color(event.card) == 'black';
                    },
                    forced: true,
                    async content(event, trigger, player) {
                        trigger.target.next.addMark('SG_xuechou');
                        trigger.target.previous.addMark('SG_xuechou');
                    },
                }, //20
                //接下来的回合顺序改为弃牌阶段＞出牌阶段＞摸牌阶段＞结束阶段
                SG_nizhuan: {
                    trigger: {
                        player: ['phaseBefore'],
                    },
                    forced: true,
                    async content(event, trigger, player) {
                        player.removeSkill('SG_nizhuan');
                        trigger.phaseList = ['phaseZhunbei', 'phaseJudge', 'phaseDiscard', 'phaseUse', 'phaseDraw', 'phaseJieshu'];
                    },
                }, //10
                // 『龙魂破军枪』
                // 若你使用的『杀』为此阶段使用的第一张牌,你可为其额外指定一个目标,且第一个目标需要使用两张『闪』抵消
                // 若你装备区有『玄天护心镜』你使用的『杀』无视目标防具
                SG_longhun: {
                    trigger: {
                        player: ['useCardBegin'],
                    },
                    forced: true,
                    filter(event, player) {
                        if (event.card.name == 'sha') {
                            const phaseList = ['phaseZhunbei', 'phaseJudge', 'phaseDiscard', 'phaseUse', 'phaseDraw', 'phaseJieshu'];
                            const jieduan = event.getParent((e) => phaseList.includes(e.name), true);
                            const his = player.actionHistory;
                            const evt = his[his.length - 1];
                            for (const i of evt.useCard) {
                                if (i.getParent((e) => e == jieduan, true)) {
                                    return false;
                                }
                            }
                            return true;
                        }
                    },
                    async content(event, trigger, player) {
                        const { targets } = await player
                            .chooseTarget('额外指定一个目标', (c, p, t) => p != t && !trigger.targets.includes(t))
                            .set('ai', (t) => -get.attitude(player, t))
                            .forResult();
                        if (targets && targets[0]) {
                            player.when({ player: 'shaBefore' }).then(() => (trigger.shanRequired = 2));
                            trigger.targets.push(targets[0]);
                        }
                    },
                    ai: {
                        unequip: true,
                        skillTagFilter(player, tag, arg) {
                            if (arg && arg.name == 'sha' && player.getEquip('SG_xuantian')) {
                                return true;
                            }
                            return false;
                        },
                    },
                }, //20
                // 『玄天护心镜』
                // 当你濒死时,弃置此装备将体力回复至1
                // 受伤害时,你可进行判定,若为♥️️,将此伤害反弹
                SG_xuantian: {
                    trigger: {
                        player: ['dying'],
                    },
                    forced: true,
                    filter(event, player) {
                        return player.getEquip('SG_xuantian');
                    },
                    async content(event, trigger, player) {
                        player.discard(player.getEquip('SG_xuantian'));
                        player.hp = 1;
                    },
                    group: ['SG_xuantian_1'],
                    subSkill: {
                        1: {
                            trigger: {
                                player: ['damageBefore'],
                            },
                            forced: true,
                            async content(event, trigger, player) {
                                const result = await player.judge('玄天护心镜', (card) => (card.suit == 'heart' ? 2 : -2)).forResult();
                                if (result.suit == 'heart') {
                                    if (trigger.source && trigger.source != player) {
                                        trigger.player = trigger.source;
                                    } else {
                                        trigger.cancel();
                                    }
                                }
                            },
                        },
                    },
                }, //20
                // 『赤焰追风驹』(-2马)
                //造成火属性伤害时,伤害+1
                SG_chiyan: {
                    trigger: {
                        source: ['damageBefore'],
                    },
                    forced: true,
                    filter(event, player) {
                        return event.nature == 'fire';
                    },
                    async content(event, trigger, player) {
                        trigger.num++;
                    },
                }, //10
                // 『寒霜踏雪兽』(+2马)
                //受到火属性伤害时,伤害-1
                SG_hanshuang: {
                    trigger: {
                        player: ['damageBegin4'],
                    },
                    forced: true,
                    filter(event, player) {
                        return event.nature == 'fire';
                    },
                    async content(event, trigger, player) {
                        trigger.num--;
                    },
                }, //10
                //——————————————————————————————————————————————————————————————————————————————————————————————————康僧会
                // 体力:3势力:吴
                //『译经』:回合限一次,你可以弃置一张手牌并选择一名角色,令其从牌堆顶亮出两张牌,获得其中一张非基本牌,其余牌置于牌堆底
                SG_yijing: {
                    enable: 'phaseUse',
                    usable: 1,
                    filterCard: true,
                    selectCard: 1,
                    position: 'h',
                    filterTarget: true,
                    selectTarget: 1,
                    async content(event, trigger, player) {
                        const cards = get.cards(2);
                        const nobasic = cards.filter((q) => get.type(q) != 'basic');
                        if (nobasic.length == 2) {
                            const { links } = await event.target
                                .chooseButton(['请选择卡牌', nobasic])
                                .set('ai', (button) => get.value(button.link))
                                .forResult();
                            if (links && links[0]) {
                                cards.remove(links[0]);
                                event.target.gain(links, 'gain2');
                            }
                        } else if (nobasic.length == 1) {
                            event.target.gain(nobasic, 'gain2');
                            cards.remove(nobasic[0]);
                        }
                        for (const i of cards) {
                            ui.cardPile.appendChild(i);
                        }
                    },
                    ai: {
                        order: 10,
                        result: {
                            target: 1,
                        },
                    },
                },
                //『法护』:你可以将♥️️牌当『净莲梵音』,♠️️牌当『无懈可击』使用
                SG_fahu: {
                    enable: ['chooseToUse', 'chooseToRespond'],
                    check(card) {
                        return 8 - get.value(card);
                    },
                    hiddenCard(player, name) {
                        if (name == 'wuxie') {
                            return player.countCards('hes', { suit: 'spade' }) > 0;
                        }
                        if (name == 'SG_jinglian') {
                            return player.countCards('hes', { suit: 'heart' }) > 0;
                        }
                    },
                    filterCard(card, player, event) {
                        if (card.suit == 'spade' && player.filterCard('wuxie')) {
                            return true;
                        }
                        if (card.suit == 'heart' && player.filterCard('SG_jinglian')) {
                            return true;
                        }
                        return false;
                    },
                    selectCard: 1,
                    position: 'hes',
                    filter(event, player) {
                        if (player.filterCard('SG_jinglian') && player.countCards('hes', { suit: 'heart' })) {
                            return true;
                        }
                        if (player.filterCard('wuxie') && player.countCards('hes', { suit: 'spade' })) {
                            return true;
                        }
                        return false;
                    },
                    prompt: '将♥️️牌当『净莲梵音』,♠️️牌当『无懈可击』使用或打出',
                    viewAs(cards, player) {
                        let name;
                        switch (cards[0]?.suit) {
                            case 'spade':
                                name = 'wuxie';
                                break;
                            case 'heart':
                                name = 'SG_jinglian';
                                break;
                        }
                        if (name) {
                            return { name: name };
                        }
                        return null;
                    },
                    ai: {
                        order: 10,
                    },
                },
                //一名其他角色进入濒死时,你可以对其使用『斩』
                SG_zhan: {
                    trigger: {
                        global: ['dying'],
                    },
                    filter(event, player) {
                        return player.hasCard((c) => c.name == 'SG_zhan', 'hs') && event.player != player;
                    },
                    forced: true,
                    async content(event, trigger, player) {
                        player.chooseToUse(
                            `是否对${get.translation(trigger.player)}使用『斩』`,
                            (card) => card.name == 'SG_zhan',
                            (c, p, t) => t == trigger.player,
                        );
                    },
                },
                //——————————————————————————————————————————————————————————————————————————————————————————————————紫丞
                // 性别:男｜体力:3｜势力:群
                // 魔策
                // 每阶段每种花色限一次,你可以将♠️️牌当『固若金汤』;♥️️牌当『桃园结义』;♣️️牌当『南蛮入侵』;♦️️牌当『万箭齐发』使用,获得一枚<魔印>
                SG_moce: {
                    init(player) {
                        player.SG_moce = {
                            SG_jintang: 'spade',
                            taoyuan: 'heart',
                            nanman: 'club',
                            wanjian: 'diamond',
                        };
                        player.storage.SG_moce_1 = [];
                    },
                    mark: true,
                    intro: {
                        name: '魔印',
                        content: 'mark',
                    },
                    enable: ['chooseToUse', 'chooseToRespond'],
                    check(card) {
                        return 8 - get.value(card);
                    },
                    hiddenCard(player, name) {
                        if (player.storage.SG_moce_1.includes(name)) {
                            return false;
                        }
                        const suit = player.SG_moce[name];
                        if (suit && player.countCards('hes', { suit: suit })) {
                            return true;
                        }
                    },
                    filterCard(card, player, event) {
                        for (const name in player.SG_moce) {
                            const suit = player.SG_moce[name];
                            if (suit && !player.storage.SG_moce_1.includes(name) && player.filterCard(name) && card.suit == suit) {
                                return true;
                            }
                        }
                        return false;
                    },
                    selectCard: 1,
                    position: 'hes',
                    filter(event, player) {
                        for (const name in player.SG_moce) {
                            const suit = player.SG_moce[name];
                            if (suit && !player.storage.SG_moce_1.includes(name) && player.filterCard(name) && player.countCards('hes', { suit: suit })) {
                                return true;
                            }
                        }
                        return false;
                    },
                    prompt: '将♠️️牌当『固若金汤』;♥️️牌当『桃园结义』;♣️️牌当『南蛮入侵』;♦️️牌当『万箭齐发』使用或打出',
                    viewAs(cards, player) {
                        if (cards.length) {
                            for (const name in player.SG_moce) {
                                if (cards[0].suit == player.SG_moce[name]) {
                                    return { name: name };
                                }
                            }
                        }
                        return null;
                    },
                    async precontent(event, trigger, player) {
                        player.storage.SG_moce_1.push(event.result.card.name);
                        player.addMark('SG_moce');
                    },
                    ai: {
                        order: 10,
                    },
                    group: ['SG_moce_1'],
                    subSkill: {
                        1: {
                            trigger: {
                                global: ['phaseEnd', 'phaseZhunbeiEnd', 'phaseJudgeEnd', 'phaseDrawEnd', 'phaseUseEnd', 'phaseDiscardEnd', 'phaseJieshuEnd'],
                            },
                            silent: true,
                            mark: true,
                            intro: {
                                content(storage) {
                                    return `此阶段已使用牌名${get.translation(Object.keys(storage))}`;
                                },
                            },
                            async content(event, trigger, player) {
                                player.storage.SG_moce_1 = [];
                            },
                        },
                    },
                }, //30
                // 王魂
                // 觉醒技,准备阶段若<魔印>≥3,你加1体力上限并永久获得:
                // ▶️其他角色使用锦囊牌时,你可弃一枚<魔印>令其重铸该牌
                // ▶️你使用锦囊牌可额外指定X名目标(X为你已损失体力值)
                SG_wanghun: {
                    juexingji: true,
                    trigger: {
                        player: ['phaseZhunbeiBegin'],
                    },
                    forced: true,
                    filter(event, player) {
                        return player.storage.SG_moce > 2;
                    },
                    async content(event, trigger, player) {
                        player.awakenSkill('SG_wanghun');
                        player.gainMaxHp();
                        player.addSkill('SG_wanghun_1');
                    },
                    subSkill: {
                        1: {
                            trigger: {
                                global: ['useCard'],
                            },
                            forced: true,
                            filter(event, player) {
                                return get.type(event.card) == 'trick';
                            },
                            async content(event, trigger, player) {
                                if (trigger.player == player) {
                                    const num = player.maxHp - player.hp;
                                    if (num > 0 && trigger.targets?.length) {
                                        const { targets } = await player
                                            .chooseTarget(`额外指定${num}名目标`, (c, p, t) => !trigger.targets.includes(t), [1, num])
                                            .set('ai', (t) => get.effect(t, trigger.card, player, player))
                                            .forResult();
                                        if (targets && targets[0]) {
                                            trigger.targets.addArray(targets);
                                        }
                                    }
                                } else {
                                    const { bool } = await player
                                        .chooseBool('弃一枚<魔印>令其重铸该牌')
                                        .set('ai', () => trigger.player.isEnemiesOf(player))
                                        .forResult();
                                    if (bool) {
                                        trigger.cancel();
                                        trigger.player.draw();
                                    }
                                }
                            },
                        },
                    },
                }, //20
                //——————————————————————————————————————————————————————————————————————————————————————————————————靈氏
                // 性别:女｜体力:3｜势力:魏
                // 漠漠
                // 每当有角色判定后,若为♥️️,你回复 1 点体力;若为♠️️,你失去 1 点体力;若为♦️️,你摸两张牌;若为♣️️,你弃两张牌
                SG_momo: {
                    trigger: {
                        global: ['judgeEnd'],
                    },
                    forced: true,
                    async content(event, trigger, player) {
                        switch (trigger.result.suit) {
                            case 'heart': {
                                player.recover();
                                break;
                            }
                            case 'spade': {
                                player.loseHp();
                                break;
                            }
                            case 'club': {
                                player.chooseToDiscard(2, 'he', true);
                                break;
                            }
                            default: {
                                player.draw(2);
                            }
                        }
                    },
                }, //20
                // 谴黜
                // 其他角色的出牌阶段开始时,其可令你进行一次判定并获得判定牌,其选择一项你的本回合效果:1.移出游戏;2.无法使用或打出与判定牌同花色的牌
                SG_qianchu: {
                    trigger: {
                        global: ['phaseUseBegin'],
                    },
                    forced: true,
                    async content(event, trigger, player) {
                        const result = await trigger.player
                            .chooseBool(`令${get.translation(player)}进行一次判定并获得判定牌`)
                            .set('ai', () => trigger.player.isFriendsOf(player))
                            .forResult();
                        if (result?.bool) {
                            const { card } = await player.judge().forResult();
                            player.gain(card, 'gain2');
                            const { control } = await trigger.player
                                .chooseControl([`移出游戏`, `无法使用或打出${get.translation(card.suit)}牌`])
                                .set('prompt', `选择一项${get.translation(player)}的本回合效果`)
                                .set('ai', (e, p) => {
                                    if (trigger.player.isFriendsOf(player)) {
                                        return `移出游戏`;
                                    }
                                    return `无法使用或打出与${get.translation(card.suit)}牌`;
                                })
                                .forResult();
                            if (control == `移出游戏`) {
                                player.addTempSkill('diaohulishan');
                            } else {
                                player.storage.SG_qianchu_1 = card.suit;
                                player.addTempSkill('SG_qianchu_1');
                            }
                        }
                    },
                    subSkill: {
                        1: {
                            mod: {
                                cardEnabled2(card, player) {
                                    if (card.suit == player.storage.SG_qianchu_1) {
                                        return false;
                                    }
                                },
                            },
                        },
                    },
                }, //20
                //——————————————————————————————————————————————————————————————————————————————————————————————————『谋华佗』 群 3体力
                // 『青囊』
                // 出牌阶段限两次,你可弃置一张牌令一名角色将手牌补至体力上限.目标角色可以展示一张黑色牌,你获得1个『药引』.
                // 你可以移除2个『药引』,使目标下次受到伤害时,转移给其攻击范围内另一角色
                SG_qingnang: {
                    enable: 'phaseUse',
                    usable: 2,
                    filterCard: true,
                    selectCard: 1,
                    position: 'he',
                    filterTarget: true,
                    selectTarget: 1,
                    mark: true,
                    intro: {
                        name: '药引',
                        content: 'mark',
                    },
                    async content(event, trigger, player) {
                        await event.target.drawTo(event.target.maxHp);
                        const { cards } = await event.target
                            .chooseCard('h', { color: 'black' })
                            .set('ai', (c) => get.attitude(player, event.target))
                            .forResult();
                        if (cards && cards[0]) {
                            event.target.showCards(cards);
                            player.addMark('SG_qingnang');
                            if (player.storage.SG_qingnang > 4) {
                                player.removeSkill('SG_qingnang');
                                player.addSkill('SG_qingming');
                                player.addSkill('SG_niming');
                            }
                            if (player.storage.SG_qingnang > 1 && !event.target.hasSkill('SG_qingnang_1')) {
                                const { bool } = await player
                                    .chooseBool('移除2个『药引』,使目标下次受到伤害时,转移给其攻击范围内另一角色')
                                    .set('ai', () => event.target.isFriendsOf(player))
                                    .forResult();
                                if (bool) {
                                    player.storage.SG_qingnang -= 2;
                                    event.target.addSkill('SG_qingnang_1');
                                }
                            }
                        }
                    },
                    ai: {
                        order: 10,
                        result: {
                            target: 2,
                        },
                    },
                    subSkill: {
                        1: {
                            trigger: {
                                player: ['damageBegin'],
                            },
                            forced: true,
                            async content(event, trigger, player) {
                                player.removeSkill('SG_qingnang_1');
                                const { targets } = await player
                                    .chooseTarget('伤害转移给其攻击范围内另一角色', (c, p, t) => p != t && get.distance(player, t, 'attack') < 2)
                                    .set('ai', (t) => -get.attitude(player, t))
                                    .forResult();
                                if (targets && targets[0]) {
                                    trigger.player = targets[0];
                                }
                            },
                        },
                    },
                }, //30
                // 『麻沸』
                // 当其他角色进入濒死时,你可展示所有手牌:
                // 若包含所有红色花色,其将体力回复至1点,你将手牌数调整至『药引』数相同(不得小于你的体力值)
                // 若包含所有花色,其将体力回复至上限(每局游戏对每名角色限一次)
                SG_mafei: {
                    trigger: {
                        global: ['dying'],
                    },
                    filter(event, player) {
                        return event.player != player;
                    },
                    check(event, player) {
                        if (event.player.isFriendsOf(player)) {
                            return true;
                        }
                        return (
                            player
                                .getCards('h')
                                .map((q) => q.suit)
                                .unique().length < 3
                        );
                    },
                    async content(event, trigger, player) {
                        const cards = player.getCards('h');
                        player.showCards(cards);
                        const suits = cards.map((q) => q.suit).unique();
                        if (['diamond', 'heart'].every((s) => suits.includes(s))) {
                            trigger.player.hp = 1;
                            const numx = Math.max(player.hp, player.storage.SG_qingnang);
                            const num = cards.length - numx;
                            if (num > 0) {
                                player.chooseToDiscard(num, 'h', true);
                            } else {
                                player.draw(-num);
                            }
                        }
                        if (suits.length > 3 && !trigger.player.storage.SG_mafei) {
                            trigger.player.storage.SG_mafei = true;
                            trigger.player.hp = trigger.player.maxHp;
                        }
                    },
                }, //20
                // 百草
                // 觉醒技,当『药引』≥5时,将『青囊』改为『青冥』,获得『逆命』
                SG_baicao: {
                    juexingji: true,
                },
                // 青冥
                // 你可以将一枚『药引』当『桃』使用,若你因此令其体力回复至上限,你获得一枚『药引』
                SG_qingming: {
                    enable: 'chooseToUse',
                    viewAsFilter(player) {
                        return player.storage.SG_qingnang > 0;
                    },
                    filterCard(card) {
                        return false;
                    },
                    selectCard: -1,
                    viewAs: { name: 'tao' },
                    prompt: '将一枚『药引』当『桃』使用',
                    check(card) {
                        return 15 - get.value(card);
                    },
                    async precontent(event, trigger, player) {
                        player.storage.SG_qingnang--;
                    },
                    group: ['SG_qingming_1'],
                    subSkill: {
                        1: {
                            trigger: {
                                player: ['taoEnd'],
                            },
                            filter(event, player) {
                                return event.skill == 'SG_qingming' && event.target.hp >= event.target.maxHp;
                            },
                            forced: true,
                            async content(event, trigger, player) {
                                player.storage.SG_qingnang++;
                            },
                        },
                    },
                }, //10
                // 逆命
                // 回合外受到伤害后,你可移除1枚『药引』,令伤害来源获得<命殇>
                SG_niming: {
                    trigger: {
                        player: ['damageEnd'],
                    },
                    filter(event, player) {
                        return player.storage.SG_qingnang > 0 && event.source && !event.source.hasSkill('SG_niming_1');
                    },
                    check(event, player) {
                        return event.source.isEnemiesOf(player);
                    },
                    async content(event, trigger, player) {
                        player.storage.SG_qingnang--;
                        trigger.source.addSkill('SG_mingshang');
                    },
                }, //20
                // 命殇
                // 出牌阶段开始时,将手牌弃置至当前体力值
                SG_mingshang: {
                    trigger: {
                        player: ['phaseBegin'],
                    },
                    forced: true,
                    filter(event, player) {
                        return player.countCards('h') > player.hp;
                    },
                    async content(event, trigger, player) {
                        player.chooseToDiscard('将手牌弃置至当前体力值', 'h', true, player.countCards('h') - player.hp);
                    },
                },
                //——————————————————————————————————————————————————————————————————————————————————————————————————如来佛祖(EX01)
                // 势力:佛
                // 体力10/10
                // 法界
                // 免疫你受到的非卡牌伤害,当你成为其他角色转化牌的目标时,摸一张牌
                // 其他角色的回合内使用第3张牌后,其须交给你一张你选择类型的牌,否则受到2点无来源伤害
                SG_fajie: {
                    trigger: {
                        player: ['damageBefore'],
                    },
                    _priority: 20,
                    forced: true,
                    filter(event, player) {
                        return !event.cards || !event.cards.length;
                    },
                    async content(event, trigger, player) {
                        trigger.cancel();
                    },
                    group: ['SG_fajie_1', 'SG_fajie_2'],
                    subSkill: {
                        1: {
                            trigger: {
                                target: ['useCardToPlayer'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.cards?.length == 1 && event.cards[0].name == event.card.name) {
                                    return false;
                                }
                                return true;
                            },
                            async content(event, trigger, player) {
                                player.draw();
                            },
                        },
                        2: {
                            trigger: {
                                global: ['useCard'],
                            },
                            forced: true,
                            filter(event, player) {
                                const his = event.player.actionHistory;
                                return event.player != player && his[his.length - 1].useCard.length == 3;
                            },
                            async content(event, trigger, player) {
                                const list = lib.type.map((i) => [i, get.translation(i)]);
                                const { links } = await player
                                    .chooseButton(['请选择类型', [list, 'tdnodes']], true)
                                    .set('ai', (b) => Math.random())
                                    .forResult();
                                if (links && links[0]) {
                                    const { cards } = await trigger.player
                                        .chooseCard(`交出一张${get.translation(links[0])}类型的牌`, 'he', (c) => get.type(c) == links[0])
                                        .set('ai', (c) => 10 - get.value(c))
                                        .forResult();
                                    if (cards && cards[0]) {
                                        trigger.player.give(cards, player);
                                    } else {
                                        trigger.player.damage(2, 'nosource');
                                    }
                                }
                            },
                        },
                    },
                }, //30
                // 因果
                // 转换技,初始为<过去·阳>
                // <过去·阳>
                // 出牌阶段,你可观看牌堆底5张牌,以任意顺序放至牌堆顶或牌堆底
                // <现在·阴>
                // 你本回合使用牌无次数距离限制
                // <未来>
                // 免疫首次受到的伤害类型,持续至下回合开始
                SG_yinguo: {
                    zhuanhuanji: true,
                    init(player) {
                        player.storage.SG_yinguo = 0;
                    },
                    mark: true,
                    intro: {
                        content(storage, player) {
                            switch (storage) {
                                case 0:
                                    return '出牌阶段,你可观看牌堆底5张牌,以任意顺序放至牌堆顶或牌堆底';
                                case 1:
                                    return '本回合使用牌无次数距离限制';
                                case 2:
                                    return '免疫首次受到的伤害类型,持续至下回合开始';
                            }
                        },
                    },
                    enable: 'phaseUse',
                    filter(event, player) {
                        return player.storage.SG_yinguo == 0;
                    },
                    async content(event, trigger, player) {
                        player.storage.SG_yinguo++;
                        const cardx = get.bottomCards(5);
                        const { moved } = await player
                            .chooseToMove()
                            .set('list', [['牌堆顶', cardx], ['牌堆底']])
                            .set('prompt', '将牌移动到牌堆顶或牌堆底')
                            .set('processAI', function (list) {
                                const cards = list[0][1];
                                const target = player.next;
                                const att = get.attitude(player, target);
                                const top = [],
                                    bottom = cards;
                                for (const i of target.getCards('j')) {
                                    const judge = get.judge(i);
                                    bottom.sort((a, b) => (judge(b) - judge(a)) * att); //态度大于0价值高的牌放前面
                                    if (bottom.length) {
                                        top.push(bottom.shift());
                                    }
                                }
                                bottom.sort((a, b) => (get.value(b) - get.value(a)) * att); //态度大于0价值高的牌放前面
                                while (bottom.length) {
                                    top.push(bottom.shift());
                                }
                                return [top, bottom];
                            })
                            .forResult(); //给别人观星
                        if (moved?.length) {
                            moved[0].reverse();
                            for (const i of moved[0]) {
                                ui.cardPile.insertBefore(i, ui.cardPile.firstChild);
                            }
                            for (const i of moved[1]) {
                                ui.cardPile.appendChild(i);
                            }
                            game.log(`${moved[0].length}上${moved[1].length}下`);
                        }
                    },
                    ai: {
                        order: 10,
                        result: {
                            player: 1,
                        },
                    },
                    group: ['SG_yinguo_1', 'SG_yinguo_2'],
                    subSkill: {
                        1: {
                            mod: {
                                cardUsable(card, player, num) {
                                    if (player.storage.SG_yinguo == 1) {
                                        return Infinity;
                                    }
                                },
                                targetInRange(card, player) {
                                    if (player.storage.SG_yinguo == 1) {
                                        return true;
                                    }
                                },
                            },
                        },
                        2: {
                            trigger: {
                                global: ['phaseAfter'],
                            },
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                return player.storage.SG_yinguo == 1;
                            },
                            async content(event, trigger, player) {
                                player.storage.SG_yinguo++;
                                player.addSkill('SG_yinguo_3');
                            },
                        },
                        3: {
                            trigger: {
                                player: ['damageBegin'],
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.SG_yinguo == 2;
                            },
                            async content(event, trigger, player) {
                                player.storage.SG_yinguo_3 = trigger.nature;
                                trigger.cancel();
                                player.addTempSkill('SG_yinguo_4', { player: 'phaseBegin' });
                                player.removeSkill('SG_yinguo_3');
                            },
                        },
                        4: {
                            onremove(player) {
                                player.storage.SG_yinguo = 0;
                            },
                            trigger: {
                                player: ['damageBefore'],
                            },
                            forced: true,
                            _priority: 30,
                            filter(event, player) {
                                return event.nature == player.storage.SG_yinguo_3 && player.storage.SG_yinguo == 2;
                            },
                            async content(event, trigger, player) {
                                trigger.cancel();
                            },
                        },
                    },
                }, //60
                // 轮回
                // 准备阶段,你须选择一项未使用过的领域生效至下轮准备阶段:
                // 天界
                // 所有角色对自己使用的牌结算两次
                // 人间
                // 所有角色无法使用或打出锦囊牌,且跳过判定阶段
                // 修罗
                // 任意基本牌被使用后,当前角色失去1点体力
                SG_lunhui: {
                    init(player) {
                        player.storage.SG_lunhui = ['SG_lunhui_1', 'SG_lunhui_2', 'SG_lunhui_3'];
                    },
                    trigger: {
                        player: ['phaseZhunbeiBegin'],
                    },
                    forced: true,
                    mark: true,
                    intro: {
                        content(storage, player) {
                            return `当前领域${get.translation(player.storage.SG_lunhuix)}`;
                        },
                    },
                    async content(event, trigger, player) {
                        if (player.storage.SG_lunhuix) {
                            game.removeGlobalSkill(player.storage.SG_lunhuix);
                            delete player.storage.SG_lunhuix;
                        }
                        if (player.storage.SG_lunhui.length) {
                            const { control } = await player
                                .chooseControl(player.storage.SG_lunhui)
                                .set('prompt', `选择一项未使用过的领域`)
                                .set('ai', (e, p) => {
                                    return player.storage.SG_lunhui.randomGet();
                                })
                                .forResult();
                            player.storage.SG_lunhui.remove(control);
                            game.addGlobalSkill(control);
                            player.storage.SG_lunhuix = control;
                        }
                    },
                    subSkill: {
                        1: {
                            trigger: {
                                target: ['useCardToPlayer'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player == player && !event.getParent('SG_lunhui_1', true);
                            },
                            async content(event, trigger, player) {
                                player.useCard(trigger.card, player);
                            },
                        },
                        2: {
                            mod: {
                                cardEnabled2(card, player) {
                                    if (['trick', 'delay'].includes(lib.card[card.name]?.type)) {
                                        return false;
                                    }
                                },
                                playerEnabled(card, player, target) {
                                    if (['trick', 'delay'].includes(lib.card[card.name]?.type)) {
                                        return false;
                                    }
                                },
                                targetEnabled(card, player, target) {
                                    if (['trick', 'delay'].includes(lib.card[card.name]?.type)) {
                                        return false;
                                    }
                                },
                            },
                            trigger: {
                                player: ['phaseJudgeBefore'],
                            },
                            forced: true,
                            async content(event, trigger, player) {
                                trigger.cancel();
                            },
                        },
                        // 任意基本牌被使用后,当前角色失去1点体力
                        3: {
                            trigger: {
                                player: ['useCardBegin', 'respondBegin'],
                            },
                            forced: true,
                            filter(event, player) {
                                return get.type(event.card) == 'basic';
                            },
                            async content(event, trigger, player) {
                                player.loseHp();
                            },
                        },
                    },
                }, //40
                // 浩瀚
                // 你的手牌上限为当前体力值的2倍.弃牌阶段,改为分配需弃牌数次2点伤害
                SG_wuliang: {
                    mod: {
                        maxHandcard(player, num) {
                            return player.hp * 2;
                        },
                    },
                    trigger: {
                        player: ['phaseDiscardBegin'],
                    },
                    forced: true,
                    filter(event, player) {
                        return player.needsToDiscard() > 0;
                    },
                    async content(event, trigger, player) {
                        trigger.cancel();
                        let num = player.needsToDiscard();
                        while (num-- > 0) {
                            const { targets } = await player
                                .chooseTarget('分配2点伤害', (c, p, t) => p != t)
                                .set('ai', (t) => -get.attitude(player, t))
                                .forResult();
                            if (targets && targets[0]) {
                                targets[0].damage(2);
                            }
                        }
                    },
                }, //20
                // 涅槃
                // 限定技,当你进入濒死状态时,重置全场角色至游戏开始时的体力、手牌、装备状态.你回复至体力值上限的一半并摸取体力上限张牌,移除所有负面状态
                SG_niepanx: {
                    limited: true,
                    trigger: {
                        player: ['dying'],
                    },
                    forced: true,
                    async content(event, trigger, player) {
                        player.awakenSkill('SG_niepanx');
                        for (const npc of game.players) {
                            const info = lib.character[npc.name];
                            npc.maxHp = info.maxHp;
                            for (const card of npc.getCards('he')) {
                                ui.cardPile.appendChild(card);
                            }
                            if (npc == player) {
                                player.hp = player.maxHp / 2;
                                player.draw(player.maxHp);
                                player.classList.remove('linked', 'linked2');
                                player.classList.remove('turnedover');
                                if (player.countCards('j')) {
                                    player.discard(player.getCards('j'));
                                }
                                player.disabledSlots = {};
                            } else {
                                npc.hp = info.hp;
                                npc.directgain(get.cards(4));
                            }
                        }
                    },
                }, //20
                // 降魔
                // 出牌阶段限3次,你可声明一种牌名,场上所有区域内含有该牌的角色须选择一项①弃置同名的所有牌并受到一点雷电伤害②受到3点无来源的雷电伤害
                SG_xiangmo: {
                    enable: 'phaseUse',
                    usable: 3,
                    async content(event, trigger, player) {
                        const { links } = await player
                            .chooseButton(['请声明一种牌名', [lib.inpile, 'vcard']])
                            .set('ai', (button) => {
                                let num = 0;
                                for (const npc of game.players) {
                                    for (const card of npc.getCards('hej')) {
                                        if (card.name == button.link[2]) {
                                            num++;
                                        }
                                    }
                                }
                                return num;
                            })
                            .forResult();
                        if (links && links[0]) {
                            for (const npc of game.players) {
                                const cards = npc.getCards('hej').filter((c) => c.name == links[0][2]);
                                if (cards.length) {
                                    const list = ['弃置同名的所有牌并受到一点雷电伤害', '受到3点无来源的雷电伤害'];
                                    const { control } = await npc
                                        .chooseControl(list)
                                        .set('ai', (e, p) => {
                                            return '弃置同名的所有牌并受到一点雷电伤害';
                                        })
                                        .forResult();
                                    if (control == '弃置同名的所有牌并受到一点雷电伤害') {
                                        npc.discard(cards);
                                        npc.damage('thunder');
                                    } else {
                                        npc.showCards(card);
                                        npc.damage(3, 'thunder');
                                    }
                                }
                            }
                        }
                    },
                    ai: {
                        order: 10,
                        result: {
                            player: 1,
                        },
                    },
                }, //20
                // 菩提
                // 回合外你可将一张红色牌当『无懈可击』使用(不可被响应)
                // 回合内你可将一张黑色牌当『决斗』使用
                SG_puti: {
                    position: 'hes',
                    enable: 'chooseToUse',
                    filter(event, player) {
                        if (_status.currentPhase != player) {
                            return player.countCards('hes', { color: 'red' }) && player.filterCard('wuxie');
                        }
                        return player.countCards('hes', { color: 'black' }) && player.filterCard('juedou');
                    },
                    filterCard(card, player) {
                        if (_status.currentPhase != player) {
                            return get.color(card) == 'red';
                        }
                        return get.color(card) == 'black';
                    },
                    hiddenCard(player, name) {
                        if (name == 'wuxie') {
                            return _status.currentPhase != player && player.countCards('hes', { color: 'red' });
                        }
                        if (name == 'juedou') {
                            return _status.currentPhase == player && player.countCards('hes', { color: 'black' });
                        }
                    },
                    viewAs(cards, player) {
                        if (_status.currentPhase != player) {
                            return { name: 'wuxie' };
                        }
                        return { name: 'juedou' };
                    },
                    prompt(event) {
                        if (_status.currentPhase != event.player) {
                            return '你可将一张红色牌当『无懈可击』使用';
                        }
                        return '你可将一张黑色牌当『决斗』使用';
                    },
                    check(card) {
                        return 8 - get.value(card);
                    },
                    group: ['SG_puti_1'],
                    subSkill: {
                        1: {
                            trigger: { player: 'useCard' },
                            forced: true,
                            filter(event, player) {
                                return event.card.name == 'wuxie';
                            },
                            async content(event, trigger, player) {
                                trigger.directHit.addArray(game.players);
                            },
                        },
                    },
                }, //20
                // 业障
                // 当你造成伤害后,令目标随机一个非锁定技失效两轮
                // 若此伤害导致目标进入濒死状态,则永久废除该技能(已觉醒的觉醒技、主公技除外)
                SG_wanjie: {
                    trigger: {
                        source: ['damage'],
                    },
                    forced: true,
                    filter(event, player) {
                        return event.player != player && event.player.GAS().some((skill) => !get.is.locked(skill, event.player));
                    },
                    async content(event, trigger, player) {
                        const skill = trigger.player
                            .GAS()
                            .filter((skill) => !get.is.locked(skill, trigger.player))
                            .randomGet();
                        trigger.player.disableSkill('SG_wanjie', skill);
                        trigger.player.addSkill('SG_wanjie_1');
                        if (!trigger.player.storage.SG_wanjie_1) {
                            trigger.player.storage.SG_wanjie_1 = {};
                        }
                        if (!trigger.player.storage.SG_wanjie_1[skill]) {
                            trigger.player.storage.SG_wanjie_1[skill] = 0;
                        }
                        if (trigger.player.hp > 0) {
                            trigger.player.storage.SG_wanjie_1[skill] += 2;
                        } else {
                            trigger.player.storage.SG_wanjie_1[skill] = 999;
                        }
                    },
                    subSkill: {
                        1: {
                            trigger: {
                                player: ['phaseEnd'],
                            },
                            forced: true,
                            popup: false,
                            mark: true,
                            intro: {
                                content(storage) {
                                    let str = '当前失效技能列表<br>';
                                    for (const skill in storage) {
                                        str += `${get.translation(skill)}剩余失效回合数${storage[skill]}<br>`;
                                    }
                                    return str;
                                },
                            },
                            async content(event, trigger, player) {
                                for (const skill in player.storage.SG_wanjie_1) {
                                    player.storage.SG_wanjie_1[skill]--;
                                    if (player.storage.SG_wanjie_1[skill] < 1) {
                                        delete player.disabledSkills[skill];
                                        delete player.storage.SG_wanjie_1[skill];
                                    }
                                }
                            },
                        },
                    },
                }, //20
                //——————————————————————————————————————————————————————————————————————————————————————————————————后土娘娘(EX02)//  势力:冥// 体力:8/9/2
                // 地脉
                //回合限两次,其他角色失去装备牌时,你获得该装备并对其造成1点伤害.你的装备区牌不可失去
                SG_dimai: {
                    usable: 2,
                    trigger: {
                        global: ['loseEnd'],
                    },
                    forced: true,
                    filter(event, player) {
                        return event.player != player && event.cards?.some((q) => get.type(q) == 'equip');
                    },
                    async content(event, trigger, player) {
                        const cards = trigger.cards.filter((q) => get.type(q) == 'equip');
                        setTimeout(function () {
                            player.gain(cards, 'gain2');
                            trigger.player.damage(cards.length);
                        }, 600);
                    },
                    group: ['SG_dimai_1', 'SG_dimai_2'],
                    subSkill: {
                        1: {
                            trigger: {
                                player: ['loseBefore'],
                            },
                            filter(event, player) {
                                if (['useCard', 'respond', 'equip'].includes(event.parent.name) || event.getParent('SG_dimai_2', true)) {
                                    return false;
                                }
                                return event.cards.some((q) => player.getCards('e').includes(q));
                            },
                            forced: true,
                            async content(event, trigger, player) {
                                trigger.cards = trigger.cards.filter((q) => !player.getCards('e').includes(q));
                            },
                        },
                        2: {
                            trigger: {
                                player: 'equipBefore',
                            },
                            forced: true,
                            async content(event, trigger, player) {
                                trigger.cancel();
                                player.qequip(trigger.cards);
                                const num = player.countCards('e') - 5;
                                if (num > 0) {
                                    const { links } = await player
                                        .chooseButton(['选择弃置装备', player.getCards('e')], num, true)
                                        .set('ai', (button) => 20 - get.value(button.link))
                                        .forResult();
                                    if (links && links[0]) {
                                        player.discard(links);
                                    }
                                }
                            },
                        },
                    },
                }, //30
                // 四时
                // 轮次转换技
                // 春煦:摸牌阶段额外摸3张,手牌上限+4
                // 夏炎:出牌阶段『杀』次数+2,可额外指定2个目标
                // 秋肃:准备阶段获得所有判定区牌,并将弃牌堆中的判定牌洗入牌堆
                // 冬寂:回合限一次,你免疫体力值扣减
                SG_sishi: {
                    zhuanhuanji: true,
                    mod: {
                        maxHandcard(player, num) {
                            if (game.roundNumber % 4 == 1) {
                                return num + 4;
                            }
                        },
                        selectTarget(card, player, range) {
                            if (game.roundNumber % 4 == 2 && card.name == 'sha') {
                                range[1] += 2;
                            }
                        },
                        cardUsable(card, player, num) {
                            if (game.roundNumber % 4 == 2 && card.name == 'sha') {
                                return num + 2;
                            }
                        },
                    },
                    trigger: {
                        player: ['phaseDrawBegin'],
                    },
                    forced: true,
                    filter(event, player) {
                        return game.roundNumber % 4 == 1;
                    },
                    async content(event, trigger, player) {
                        trigger.num += 3;
                    },
                    group: ['SG_sishi_1', 'SG_sishi_2'],
                    subSkill: {
                        1: {
                            trigger: {
                                player: ['phaseZhunbeiBegin'],
                            },
                            forced: true,
                            filter(event, player) {
                                return game.roundNumber % 4 == 3;
                            },
                            async content(event, trigger, player) {
                                const js = player.getCards('j');
                                if (js.length) {
                                    player.gain(js, 'gain2');
                                }
                                const cards = Array.from(ui.discardPile.childNodes).filter((c) => get.type(c) == 'delay');
                                for (const i of cards) {
                                    ui.cardPile.insertBefore(i, ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length - 1)]);
                                }
                            },
                        },
                        2: {
                            trigger: {
                                player: ['changeHpBegin'],
                            },
                            forced: true,
                            usable: 1,
                            filter(event, player) {
                                return event.num < 0 && game.roundNumber % 4 == 0;
                            },
                            async content(event, trigger, player) {
                                trigger.cancel();
                            },
                        },
                    },
                }, //30
                // 六道
                // 准备阶段开始时,选择未使用过的一项领域持续3轮
                // 上三道:
                // ❶ 天神:其他角色回复体力时,你回复等量体力
                // ❷ 人间:其他角色使用锦囊牌时,须先交给你1张你选择类别的牌,否则此牌无效
                // ❸ 修罗:造成的伤害视为无视防具的雷电伤害
                // 下三道:
                // ① 饿鬼:所有角色使用的『桃』视为『兵粮寸断』
                // ② 畜生:你从正面翻至背面时,摸2张牌;你从背面翻至正面时,获得1点护甲
                // ③ 地狱:对其他角色造成的伤害值+1(可叠加至+3)
                // 你击杀角色后,令领域延长一轮
                SG_liudao: {
                    trigger: {
                        player: ['phaseZhunbeiBegin'],
                    },
                    forced: true,
                    init(player) {
                        player.storage.SG_liudao_list = ['SG_tianshen', 'SG_renjian', 'SG_xiuluo', 'SG_egui', 'SG_chusheng', 'SG_diyu'];
                        player.storage.SG_liudao = ['', 0];
                    },
                    mark: true,
                    intro: {
                        content(storage) {
                            return `当前六道领域<br>${get.translation(storage[0])}剩余轮数${storage[1]}`;
                        },
                    },
                    async content(event, trigger, player) {
                        player.storage.SG_liudao[1]--;
                        if (player.storage.SG_liudao[1] < 1) {
                            game.removeGlobalSkill(player.storage.SG_liudao[0]);
                            const { links } = await player
                                .chooseButton(['选择未使用过的一项领域持续3轮', [player.storage.SG_liudao_list.map((i) => [i, get.translation(i)]), 'tdnodes']], true)
                                .set('ai', (button) => Math.random())
                                .forResult();
                            if (links && links[0]) {
                                player.storage.SG_liudao_list.remove(links[0]);
                                game.addGlobalSkill(links[0]);
                                player.storage.SG_liudao = [links[0], 3];
                                player.markSkill('SG_liudao');
                            }
                        }
                    },
                    group: ['SG_liudao_1'],
                    subSkill: {
                        1: {
                            trigger: {
                                source: ['dieEnd'],
                            },
                            forced: true,
                            async content(event, trigger, player) {
                                player.storage.SG_liudao[1]++;
                            },
                        },
                    },
                }, //30
                // 天神
                // 其他角色回复体力时,你回复等量体力;其他角色摸牌阶段外摸牌时,你摸等量牌
                SG_tianshen: {
                    trigger: {
                        player: ['recoverEnd', 'drawEnd'],
                    },
                    forced: true,
                    filter(event, player, name) {
                        if (name == 'drawEnd' && event.parent.name == 'phaseDraw') {
                            return false;
                        }
                        const boss = game.players.find((q) => q.hasSkill('SG_liudao'));
                        return boss && event.player != boss;
                    },
                    async content(event, trigger, player) {
                        const boss = game.players.find((q) => q.hasSkill('SG_liudao'));
                        if (event.triggername == 'drawEnd') {
                            boss.draw(trigger.num);
                        } else {
                            boss.recover(trigger.num);
                        }
                    },
                }, //10
                //人间
                // 其他角色使用锦囊牌时,须先交给你1张你选择类别的牌,否则此牌无效
                SG_renjian: {
                    trigger: {
                        player: ['useCard'],
                    },
                    forced: true,
                    filter(event, player) {
                        const boss = game.players.find((q) => q.hasSkill('SG_liudao'));
                        return boss && get.type(event.card) == 'trick';
                    },
                    async content(event, trigger, player) {
                        const boss = game.players.find((q) => q.hasSkill('SG_liudao'));
                        const { links } = await boss
                            .chooseButton(['请选择类型', [lib.type.map((i) => [i, get.translation(i)]), 'tdnodes']], true)
                            .set('ai', (b) => Math.random())
                            .forResult();
                        if (links && links[0]) {
                            const { cards } = await player
                                .chooseCard(`交出一张${get.translation(links[0])}类型的牌`, 'he', (c) => get.type(c) == links[0])
                                .set('ai', (c) => 10 - get.value(c))
                                .forResult();
                            if (cards && cards[0]) {
                                player.give(cards, boss);
                            } else {
                                trigger.all_excluded = true;
                            }
                        }
                    },
                }, //20
                // 修罗
                // 造成的伤害视为无视防具的雷电伤害
                SG_xiuluo: {
                    trigger: {
                        player: ['damageBefore'],
                    },
                    forced: true,
                    filter(event, player) {
                        const boss = game.players.find((q) => q.hasSkill('SG_liudao'));
                        return boss == event.source;
                    },
                    async content(event, trigger, player) {
                        trigger.nature == 'thunder';
                        player.addTempSkill('SG_xiuluo_1', { player: 'damageAfter' });
                    },
                    subSkill: {
                        1: {
                            mark: true,
                            marktext: '※',
                            intro: {
                                content: '当前防具技能已失效',
                            },
                            ai: {
                                unequip2: true,
                            },
                        },
                    },
                }, //20
                // 饿鬼
                // 所有角色使用的『桃』视为『兵粮寸断』
                SG_egui: {
                    trigger: {
                        player: ['useCardBefore'],
                    },
                    forced: true,
                    filter(event, player) {
                        return event.targets?.length && event.card.name == 'tao';
                    },
                    async content(event, trigger, player) {
                        trigger.card.name == 'bingliang';
                    },
                }, //10
                // 畜生
                // 你从正面翻至背面时,摸2张牌;你从背面翻至正面时,获得1点护甲
                SG_chusheng: {
                    trigger: {
                        player: ['turnOverEnd'],
                    },
                    forced: true,
                    async content(event, trigger, player) {
                        if (player.isTurnedOver()) {
                            player.draw(2);
                        } else {
                            player.SG_hujia();
                        }
                    },
                }, //10
                // 地狱
                // 对其他角色造成的伤害值+1
                SG_diyu: {
                    trigger: {
                        player: ['damageBefore'],
                    },
                    forced: true,
                    filter(event, player) {
                        const boss = game.players.find((q) => q.hasSkill('SG_liudao'));
                        return boss == event.source && event.source != event.player;
                    },
                    async content(event, trigger, player) {
                        trigger.num += 1;
                    },
                }, //10
                // 社祭
                // 每当你受到1点伤害后,永久封印伤害来源的一个非选择其1张牌展示后获得
                SG_sheji: {
                    trigger: {
                        player: ['damageEnd'],
                    },
                    forced: true,
                    filter(event, player) {
                        return event.source && event.source != player;
                    },
                    async content(event, trigger, player) {
                        const skill = trigger.source
                            .GAS()
                            .filter((s) => !get.is.locked(s, trigger.source) && !trigger.source.disabledSkills[s])
                            .randomGet();
                        if (skill) {
                            trigger.source.disableSkill('SG_sheji', skill);
                        }
                        if (trigger.source.countCards('he')) {
                            const { links } = await player
                                .choosePlayerCard(trigger.source, true, 'he', 'visible')
                                .set('ai', (b) => get.value(b.link))
                                .forResult();
                            if (links?.length) {
                                player.showCards(links);
                                player.gain(links, 'gain2');
                            }
                        }
                    },
                }, //20
                // 归墟
                // 限定技,出牌阶段,你可以将游戏回退至3轮前的完整状态(体力、手牌、装备),并获得全场所有被失去过的装备牌
                SG_guixux: {
                    limited: true,
                    enable: 'phaseUse',
                    async content(event, trigger, player) {
                        player.awakenSkill('SG_guixux');
                        let num = Math.max(1, game.roundNumber - 3);
                        const map = player.storage.SG_guixux_1[num];
                        for (const npc of game.players) {
                            const info = map.get(npc);
                            if (info) {
                                npc.lose(npc.getCards('he'), ui.cardPile, 'insert')._triggered = null;
                                npc.hp = info.hp;
                                npc.gain(info.card.h, 'gain2');
                                for (const card of info.card.e) {
                                    npc.equip(card);
                                }
                            }
                        }
                        const list = [];
                        for (const npc of game.players.concat(game.dead)) {
                            const his = npc.actionHistory;
                            for (const evt of his) {
                                for (const e of evt.lose) {
                                    if (e.cards?.length) {
                                        list.addArray(e.cards.filter((c) => get.type(c) == 'equip'));
                                    }
                                }
                            }
                        }
                        player.gain(list, 'gain2');
                    },
                    ai: {
                        order: 10,
                        result: {
                            player(player, target, card) {
                                return game.roundNumber - 3;
                            },
                        },
                    },
                    group: ['SG_guixux_1'],
                    subSkill: {
                        1: {
                            init(player) {
                                player.storage.SG_guixux_1 = {};
                            },
                            trigger: {
                                global: ['roundStart'],
                            },
                            silent: true,
                            async content(event, trigger, player) {
                                const map = new Map();
                                for (const i of game.players) {
                                    map.set(i, {
                                        hp: i.hp,
                                        card: {
                                            h: i.getCards('h'),
                                            e: i.getCards('e'),
                                        },
                                    });
                                }
                                player.storage.SG_guixux_1[game.roundNumber] = map;
                            },
                        },
                    },
                }, //30
                // 幽焚
                // 出牌阶段限一次,你可以弃置两张同色手牌,令所有角色:
                // 弃置等同于当前轮次数的牌(不足则流失等量体力)
                // 受到2点火焰伤害,并焚毁场上所有坐骑牌
                SG_youfen: {
                    enable: 'phaseUse',
                    usable: 1,
                    filterCard(c) {
                        if (ui.selected.cards.length) {
                            return c.suit == ui.selected.cards[0].suit;
                        }
                        return true;
                    },
                    selectCard: 2,
                    async content(event, trigger, player) {
                        for (const npc of game.players) {
                            const { cards } = await npc
                                .chooseToDiscard('弃置等同于当前轮次数的牌(不足则流失等量体力)', 'he', [1, game.roundNumber])
                                .set('ai', (c) => 6 - get.value(c))
                                .forResult();
                            if (cards && cards[0]) {
                                const num = game.roundNumber - cards.length;
                                if (num > 0) {
                                    npc.loseHp(num);
                                }
                            } else {
                                npc.loseHp(game.roundNumber);
                            }
                            npc.damage(2, 'fire');
                            for (const card of npc.getCards('e').filter((c) => ['equip3', 'equip4'].includes(get.subtype(c)))) {
                                card.selfDestroy();
                            }
                        }
                    },
                    ai: {
                        order: 10,
                        result: {
                            player: 1,
                        },
                    },
                }, //20
                // 阴阳
                // 轮次转换技
                // 阳仪:你的回合外,黑色锦囊对你无效,其他角色使用红色锦囊须弃置一张同花色的牌才能生效
                // 阴仪:你的回合内所有『桃』视为『酒』
                SG_yinyang: {
                    trigger: {
                        target: ['useCardToPlayer'],
                    },
                    forced: true,
                    filter(event, player) {
                        return _status.currentPhase != player && get.type(event.card) == 'trick' && get.color(event.card) == 'black' && game.roundNumber % 2 == 1;
                    },
                    async content(event, trigger, player) {
                        trigger.parent.excluded.add(player);
                    },
                    global: ['SG_yinyang_2'],
                    group: ['SG_yinyang_1'],
                    subSkill: {
                        1: {
                            trigger: {
                                global: ['useCard'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player && _status.currentPhase != player && get.type(event.card) == 'trick' && get.color(event.card) == 'red' && game.roundNumber % 2 == 0;
                            },
                            async content(event, trigger, player) {
                                const suit = trigger.card.suit;
                                const { cards } = await trigger.player
                                    .chooseToDiscard('弃置一张同花色的牌才能生效', 'he')
                                    .set('filterCard', (c) => c.suit == suit)
                                    .set('ai', (c) => 6 - get.value(c))
                                    .forResult();
                                if (!cards?.length) {
                                    trigger.all_excluded = true;
                                }
                            },
                        },
                        2: {
                            mod: {
                                cardname(card, player, name) {
                                    const boss = game.players.find((q) => q.hasSkill('SG_yinyang'));
                                    if (boss && _status.currentPhase == boss && card.name == 'tao') {
                                        return 'jiu';
                                    }
                                },
                            },
                        },
                    },
                }, //20
                // 永镇
                // 死亡前化为『地脉核心』持续3轮,在此期间:
                // 所有角色无法死亡
                // 每轮从弃牌堆回收每种花色牌各1张
                // 结束时,对所有存活角色一共造成9点雷电伤害
                SG_yongzhen: {
                    trigger: {
                        player: ['dieBefore'],
                    },
                    forced: true,
                    async content(event, trigger, player) {
                        player.awakenSkill('SG_yongzhen');
                        trigger.cancel();
                        player.addSkill('SG_dimaihexin');
                    },
                }, //10
                // 地脉核心
                // 所有角色无法死亡
                // 每轮从弃牌堆回收每种花色牌各1张
                // 结束时,对所有存活角色一共造成9点雷电伤害
                SG_dimaihexin: {
                    init(player) {
                        player.storage.SG_dimaihexin = 3;
                    },
                    trigger: {
                        global: ['dieBefore'],
                    },
                    forced: true,
                    mark: true,
                    intro: {
                        content: '当前为地脉核心状态',
                    },
                    async content(event, trigger, player) {
                        trigger.cancel();
                    },
                    group: ['SG_dimaihexin_1'],
                    subSkill: {
                        1: {
                            trigger: {
                                global: ['roundStart'],
                            },
                            forced: true,
                            async content(event, trigger, player) {
                                const cards = Array.from(ui.discardPile.childNodes);
                                if (cards.length) {
                                    const { links } = await player
                                        .chooseButton(['从弃牌堆回收每种花色牌各1张', cards])
                                        .set('filterButton', (b) => {
                                            for (const i of ui.selected.buttons) {
                                                if (i.link.suit == b.link.suit) {
                                                    return false;
                                                }
                                            }
                                            return true;
                                        })
                                        .set('ai', (button) => get.value(button.link))
                                        .forResult();
                                    if (links && links[0]) {
                                        player.gain(links, 'gain2');
                                    }
                                }
                                player.storage.SG_dimaihexin--;
                                if (player.storage.SG_dimaihexin < 1) {
                                    for (const npc of game.players) {
                                        await npc.damage(9, 'thunder');
                                    }
                                    player.removeSkill('SG_dimaihexin');
                                }
                            },
                        },
                    },
                }, //20
                //——————————————————————————————————————————————————————————————————————————————————————————————————魍魉王・何后
                // 势力:群      体力:6
                // 蚀魂
                // 出牌阶段限一次,你可以弃置一张牌并选择一名没有『冥』的其他角色,令其获得『冥』标记
                // 有『冥』角色回合结束时,你对其造成1点伤害,获得其一张手牌或装备区牌,并移除该标记
                SG_shihun: {
                    mark: true,
                    intro: {
                        name: '冥',
                        content: 'mark',
                    },
                    enable: 'phaseUse',
                    usable: 1,
                    filterCard: true,
                    selectCard: 1,
                    position: 'he',
                    filterTarget(card, player, target) {
                        return target != player && !target.storage.SG_shihun;
                    },
                    selectTarget: 1,
                    async content(event, trigger, player) {
                        event.target.storage.SG_shihun = true;
                        event.target.markSkill('SG_shihun');
                    },
                    ai: {
                        order: 15,
                        result: {
                            target: -1,
                        },
                    },
                    group: ['SG_shihun_1'],
                    subSkill: {
                        1: {
                            trigger: {
                                global: ['phaseEnd'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player.storage.SG_shihun;
                            },
                            async content(event, trigger, player) {
                                trigger.player.damage();
                                const card = trigger.player.getCards('he').randomGet();
                                if (card) {
                                    player.gain(card, 'gain2');
                                    delete trigger.player.storage.SG_shihun;
                                }
                            },
                        },
                    },
                }, //30
                // 引煞
                // 每轮限一次,你可以弃置两张牌,召唤1个『牛头』或『马面』(无势力,1体力)
                // 牛马击杀角色后,你回复1点体力;牛马在场时,你免疫伤害
                SG_yinsha: {
                    round: 1,
                    enable: 'phaseUse',
                    filterCard: true,
                    selectCard: 2,
                    position: 'he',
                    async content(event, trigger, player) {
                        player.addFellow(['SG_niutou', 'SG_mamian'].randomGet());
                    },
                    ai: {
                        order: 15,
                        result: {
                            player: 1,
                        },
                    },
                    group: ['SG_yinsha_1', 'SG_yinsha_2'],
                    subSkill: {
                        1: {
                            trigger: {
                                global: ['die'],
                            },
                            forced: true,
                            forceDie: true,
                            filter(event, player) {
                                return event.source?.hasSkill('SG_niuma');
                            },
                            async content(event, trigger, player) {
                                player.recover();
                            },
                        },
                        2: {
                            trigger: {
                                player: ['damageBefore'],
                            },
                            forced: true,
                            filter(event, player) {
                                return game.players.some((q) => q.hasSkill('SG_niuma'));
                            },
                            async content(event, trigger, player) {
                                trigger.cancel();
                            },
                        },
                    },
                }, //10
                // 牛马
                // 当你回合结束后,你死亡
                // 当你死亡时,你对其他角色造成1点真实伤害
                // 所有其他角色与你的距离视为1
                SG_niuma: {
                    trigger: {
                        player: ['phaseEnd'],
                    },
                    forced: true,
                    async content(event, trigger, player) {
                        await player.die({ source: player });
                        if (player.isDead()) {
                            game.removePlayer(player);
                        }
                    },
                    group: ['SG_niuma_1'],
                    global: ['SG_niuma_2'],
                    subSkill: {
                        1: {
                            trigger: {
                                player: ['die'],
                            },
                            forced: true,
                            forceDie: true,
                            async content(event, trigger, player) {
                                for (const npc of game.players) {
                                    npc.zhenshang(1, player);
                                }
                            },
                        },
                        2: {
                            mod: {
                                globalFrom(from, to) {
                                    if (to.hasSkill('SG_niuma')) {
                                        return -Infinity;
                                    }
                                },
                            },
                        },
                    },
                }, //10
                // 吞灵
                // 每有一名角色死亡,你的攻击范围/使用『杀』造成的伤害永久+1
                SG_tunling: {
                    mod: {
                        attackRange(player, num) {
                            return num + player.countMark('SG_tunling');
                        },
                    },
                    trigger: {
                        global: ['die'],
                    },
                    forced: true,
                    mark: true,
                    intro: {
                        content: 'mark',
                    },
                    async content(event, trigger, player) {
                        player.addMark('SG_tunling');
                    },
                    group: ['SG_tunling_1'],
                    subSkill: {
                        1: {
                            trigger: {
                                source: ['damageBefore'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card?.name == 'sha';
                            },
                            async content(event, trigger, player) {
                                trigger.num += player.countMark('SG_tunling');
                            },
                        },
                    },
                }, //20
                // 灵怨
                // 觉醒技,当你受到其他角色造成的伤害进入濒死状态时,你减1点体力上限,回复一半体力,获得技能『冥爆』
                SG_lingyuan: {
                    juexingji: true,
                    trigger: {
                        player: ['dying'],
                    },
                    forced: true,
                    filter(event, player) {
                        const evt = event.parent;
                        return evt.name == 'damage' && evt.source && evt.source != player;
                    },
                    async content(event, trigger, player) {
                        player.node.avatar.style.backgroundImage = `url(extension/三国全系列/image/SG_hehou1.jpg)`;
                        player.awakenSkill('SG_lingyuan');
                        player.loseMaxHp();
                        player.hp = Math.ceil(player.maxHp / 2);
                        player.addSkill('SG_mingbao');
                    },
                }, //10
                // 冥爆
                // 出牌阶段限一次,你可以弃置存活角色数张牌,对所有其他角色造成1点伤害.若弃置牌数≥3,你回复1点体力
                SG_mingbao: {
                    enable: 'phaseUse',
                    usable: 1,
                    filterCard: true,
                    selectCard: game.players.length,
                    position: 'he',
                    async content(event, trigger, player) {
                        if (game.players.length > 2) {
                            player.recover();
                        }
                        for (const i of game.players) {
                            if (i != player) {
                                i.damage();
                            }
                        }
                    },
                    ai: {
                        order: 15,
                        result: {
                            player: 1,
                        },
                    },
                }, //10
                //——————————————————————————————————————————————————————————————————————————————————————————————————月姬『女』(群,体力3)
                // 月引
                // 出牌阶段限一次,你可以弃置一张红色牌,令所有角色回复1点体力并摸一张牌.若场上有『幻月』牌,你额外摸一张牌
                SG_yueyin: {
                    enable: 'phaseUse',
                    usable: 1,
                    filterCard(c) {
                        return get.color(c) == 'red';
                    },
                    selectCard: 1,
                    position: 'he',
                    async content(event, trigger, player) {
                        for (const i of game.players) {
                            i.recover();
                            i.draw();
                        }
                        if (game.players.some((q) => q.getExpansions('SG_huanyue').length)) {
                            player.draw();
                        }
                    },
                    ai: {
                        order: 15,
                        result: {
                            player(player, target, card) {
                                return player.getFriends(true).length - player.getEnemies().length;
                            },
                        },
                    },
                }, //20
                // 星坠
                // 每轮限两次,当一名角色受到伤害时,你可以弃置一张牌防止此伤害,令其摸2牌.若你弃置的是装备牌,你摸一张牌
                SG_xingzhui: {
                    init(player) {
                        player.storage.SG_xingzhui = 0;
                    },
                    trigger: {
                        global: ['damageBefore'],
                    },
                    forced: true,
                    filter(event, player) {
                        return player.countCards('he') && player.storage.SG_xingzhui > 0;
                    },
                    async content(event, trigger, player) {
                        const { cards } = await player
                            .chooseToDiscard('弃置一张牌防止此伤害', 'he')
                            .set('ai', (c) => 5 * sgn(trigger.player.isFriendsOf(player)) + sgn(get.type(c) == 'equip'))
                            .forResult();
                        if (cards && cards[0]) {
                            player.storage.SG_xingzhui--;
                            if (get.type(cards[0]) == 'equip') {
                                player.draw();
                            }
                            trigger.cancel();
                            trigger.player.draw(2);
                        }
                    },
                    group: ['SG_xingzhui_1'],
                    subSkill: {
                        1: {
                            trigger: {
                                global: ['roundStart'],
                            },
                            forced: true,
                            popup: false,
                            async content(event, trigger, player) {
                                player.storage.SG_xingzhui += 2;
                            },
                        },
                    },
                }, //10
                //——————————————————————————————————————————————————————————————————————————————————————————————————夏侯翎  魏​ 3 勾玉
                // 影射
                // 出牌阶段限一次,你可以弃置一张牌,令一名其他角色展示一张手牌
                // 若此牌为黑色,你可以对其使用一张『杀』,此『杀』不计入次数且不可被响应.此杀造成伤害后,你令其选择一项:1.失去1点体力;2.你摸两张牌
                // 若此牌为红色,你摸一张牌,可以将一张手牌置于牌堆顶或牌堆底
                SG_yingshe: {
                    enable: 'phaseUse',
                    usable: 1,
                    filterCard: true,
                    selectCard: 1,
                    position: 'he',
                    filterTarget(c, p, t) {
                        return t != p && t.countCards('h');
                    },
                    selectTarget: 1,
                    async content(event, trigger, player) {
                        const { cards } = await event.target
                            .chooseCard('h', true)
                            .set('ai', (c) => 6 - get.value(c))
                            .forResult();
                        if (cards && cards[0]) {
                            event.target.showCards(cards);
                            if (get.color(cards[0]) == 'black') {
                                const sha = player.useCard({ name: 'sha' }, event.target).set('addCount', false).set('directHit', game.players);
                                await sha;
                                const his = event.target.actionHistory;
                                const evt = his[his.length - 1];
                                if (evt.damage.some((e) => e.getParent((x) => x == sha, true))) {
                                    if (event.target.isIn()) {
                                        const list = ['失去体力', '令对方摸两张牌'];
                                        const { control } = await event.target
                                            .chooseControl(list)
                                            .set('ai', (e, p) => {
                                                return list.randomGet();
                                            })
                                            .forResult();
                                        if (control == '失去体力') {
                                            event.target.loseHp();
                                        } else {
                                            player.draw(2);
                                        }
                                    } else {
                                        player.draw(2);
                                    }
                                }
                            } else {
                                await player.draw();
                                const cardx = player.getCards('h');
                                const { moved } = await player
                                    .chooseToMove()
                                    .set('list', [['牌堆顶'], ['牌堆底'], ['手牌', cardx]])
                                    .set('prompt', '将牌移动到牌堆顶或牌堆底')
                                    .set('processAI', function (list) {
                                        return [[], [], cardx];
                                    })
                                    .set('filterMove', function (from, to, list) {
                                        if ([0, 1].includes(to) && list[0].length + list[1].length) {
                                            return false;
                                        }
                                        return true;
                                    })
                                    .set('filterOk', function (list) {
                                        return list[0].length + list[1].length < 2;
                                    })
                                    .forResult(); //给别人观星
                                if (moved?.length) {
                                    for (const i of moved[0]) {
                                        ui.cardPile.insertBefore(i, ui.cardPile.firstChild);
                                    }
                                    for (const i of moved[1]) {
                                        ui.cardPile.appendChild(i);
                                    }
                                    game.log(`${get.translation(moved[0])}上${get.translation(moved[1])}下`);
                                }
                            }
                        }
                    },
                    ai: {
                        order: 15,
                        result: {
                            target: -1,
                        },
                    },
                }, //30
                // 矢志​
                // 当你使用的『杀』对其他角色造成伤害后,你可以令其选择一项:1.弃置两张牌;2.令你回复1点体力,其本回合手牌上限-1
                SG_shizhi: {
                    trigger: {
                        source: ['damageEnd'],
                    },
                    forced: true,
                    filter(event, player) {
                        return event.card?.name == 'sha' && event.player != player;
                    },
                    async content(event, trigger, player) {
                        const result = await trigger.player
                            .chooseToDiscard('弃置两张牌或令对方回复1点体力且你本回合手牌上限-1', 'he', 2)
                            .set('ai', (c) => -get.attitude(player, trigger.player) - get.value(c))
                            .forResult();
                        if (result?.cards?.length) {
                        } else {
                            player.recover();
                            trigger.player.addTempSkill('SG_shizhi_1');
                            trigger.player.storage.SG_shizhi_1++;
                        }
                    },
                    subSkill: {
                        1: {
                            init(player) {
                                player.storage.SG_shizhi_1 = 0;
                            },
                            onremove(player, skill) {
                                player.storage.SG_shizhi_1 = 0;
                            },
                            mark: true,
                            intro: {
                                content: 'mark',
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return num - player.storage.SG_shizhi_1;
                                },
                            },
                        },
                    },
                }, //20
                //——————————————————————————————————————————————————————————————————————————————————————————————————张琪瑛 群势力 3勾玉
                // 五行
                // 任意牌进入弃牌堆时,你根据其花色获得🃏<金>/♠️️<木>/♣️️<水>/♥️️<火>/♦️️<土>标记
                // 游戏开始时,你获得四种标记.你可以弃置一枚标记,发动对应效果
                // 当你首次失去所有标记时,减1点体力上限获得2点护甲,获得技能<箓生>并修改<真仪>
                SG_wuxing: {
                    init(player) {
                        for (const i of lib.suits) {
                            player.storage[`SG_wuxing_${i}`] = true;
                            player.addSkill(`SG_wuxing_${i}`);
                        }
                    },
                    trigger: {
                        global: ['loseEnd'],
                    },
                    forced: true,
                    popup: false,
                    filter(event, player) {
                        return event.cards?.some((q) => get.position(q) == 'd');
                    },
                    mark: true,
                    intro: {
                        content(storage, player) {
                            let str = '当前标记<br>';
                            for (const i of lib.suits) {
                                const name = `SG_wuxing_${i}`;
                                str += `${lib.translate[name]}:${player.storage[name] ? '有<br>' : '无<br>'}`;
                            }
                            return str;
                        },
                    },
                    async content(event, trigger, player) {
                        const cards = trigger.cards.filter((q) => get.position(q) == 'd');
                        for (const i of cards) {
                            player.storage[`SG_wuxing_${i.suit}`] = true;
                        }
                    },
                }, //20
                // 金
                // 一名角色从正面翻至背面时『翻面时』,取消之
                SG_wuxing_none: {
                    trigger: {
                        global: ['turnOverBegin'],
                    },
                    filter(event, player) {
                        if (player.storage.SG_wuxing_none) {
                            if (player.storage.SG_wuxing) {
                                return true;
                            }
                            return !event.player.isTurnedOver();
                        }
                    },
                    check(event, player) {
                        return event.player.isFriendsOf(player);
                    },
                    async content(event, trigger, player) {
                        game.wuxing(player, event);
                        trigger.cancel();
                    },
                }, //20
                // 木
                // 判定牌生效前,将牌堆顶一张牌替换为判定牌,摸一张牌『观看牌堆顶两张牌选择一张替换,获得另一张』
                SG_wuxing_spade: {
                    trigger: {
                        global: ['judge'],
                    },
                    filter(event, player) {
                        return player.storage.SG_wuxing_spade;
                    },
                    check(event, player) {
                        const card = ui.cardPile.firstChild;
                        return (event.judge(card) - event.judge(event.player.judging[0])) * sgn(get.attitude(player, event.player));
                    },
                    async content(event, trigger, player) {
                        game.wuxing(player, event);
                        let card = ui.cardPile.firstChild;
                        if (player.storage.SG_wuxing) {
                            const cards = get.cards(2);
                            const { links } = await player
                                .chooseButton(['观看牌堆顶两张牌选择一张替换', cards], true)
                                .set('ai', (b) => (trigger.judge(b.link) - trigger.judge(trigger.player.judging[0])) * sgn(get.attitude(player, trigger.player)))
                                .forResult();
                            if (links && links[0]) {
                                card = links[0];
                                cards.remove(card);
                                player.gain(cards, 'gain2');
                            }
                        } else {
                            player.draw();
                        }
                        player.respond(card, 'highlight', 'SG_wuxing_spade', 'noOrdering');
                        trigger.player.judging[0] = card;
                        trigger.orderingCards.push(card);
                        game.log(trigger.player, '的判定牌改为', card);
                    },
                }, //20
                // 水
                // 回合限一次,令一名角色回复1点体力,获得弃牌堆中一张♣️️牌『若目标处于濒死,此效果回复量+1』
                SG_wuxing_club: {
                    enable: ['chooseToUse'],
                    usable: 1,
                    filter(event, player) {
                        return ['_save', 'phaseUse'].includes(event.parent.name) && player.storage.SG_wuxing_club && game.players.some((t) => t.hp < t.maxHp);
                    },
                    filterTarget(c, p, t) {
                        if (_status.event.parent.name == '_save') {
                            return _status.dying.includes(t);
                        }
                        return t.hp < t.maxHp;
                    },
                    selectTarget: 1,
                    async content(event, trigger, player) {
                        game.wuxing(player, event);
                        if (event.target.hp < 1 && player.storage.SG_wuxing) {
                            event.target.recover(2);
                        } else {
                            event.target.recover();
                        }
                        const cards = Array.from(ui.discardPile.childNodes).filter((q) => q.suit == 'club');
                        if (cards.length) {
                            player.gain(cards.randomGet(), 'gain2');
                        }
                    },
                    ai: {
                        order: 15,
                        save: true,
                        result: {
                            target: 3,
                        },
                    },
                }, //20
                // 火
                // 当你使用伤害牌时,此牌伤害+1,若目标体力值大于2且其装备区有装备,其弃置一张装备牌
                SG_wuxing_heart: {
                    trigger: {
                        player: ['useCard'],
                    },
                    filter(event, player) {
                        return get.tag(event.card, 'damage') && player.storage.SG_wuxing_heart && event.targets?.length;
                    },
                    check(event, player) {
                        return event.targets.some((q) => q.isEnemiesOf(player));
                    },
                    async content(event, trigger, player) {
                        game.wuxing(player, event);
                        trigger.baseDamage++;
                        for (const npc of trigger.targets) {
                            const cards = npc.getCards('e');
                            if (npc.hp > 2 && cards.length) {
                                await npc.discard(cards.randomGet());
                            }
                        }
                    },
                }, //20
                // 土
                // 当你受到伤害后,选择一项<br>①令伤害来源弃置一『你装备区牌数』张与你装备区颜色相同的牌,若其没有,随机废除其装备栏<br>②从牌堆中随机获得一张伤害牌
                SG_wuxing_diamond: {
                    trigger: {
                        player: ['damageEnd'],
                    },
                    filter(event, player) {
                        return event.source && player.storage.SG_wuxing_diamond;
                    },
                    check(event, player) {
                        return event.source.isEnemiesOf(player);
                    },
                    async content(event, trigger, player) {
                        game.wuxing(player, event);
                        const list = ['令伤害来源弃置牌', '从牌堆中随机获得一张伤害牌'];
                        const { control } = await player
                            .chooseControl(list)
                            .set('ai', (e, p) => {
                                return list.randomGet();
                            })
                            .forResult();
                        if (control == '令伤害来源弃置牌') {
                            const cardx = player.getCards('e');
                            const color = cardx.map((c) => get.color(c)).unique();
                            let num = 1;
                            if (cardx.length > 1 && player.storage.SG_wuxing) {
                                num = cardx.length;
                            }
                            const { cards } = await trigger.source
                                .chooseToDiscard('he', num)
                                .set('filterCard', (c) => color.includes(get.color(c)))
                                .set('ai', (c) => 8 - get.value(c))
                                .forResult();
                            if (cards && cards[0]) {
                            } else {
                                const list1 = [];
                                let num = 6;
                                while (num-- > 1) {
                                    if (!trigger.source.hasDisabledSlot(num)) {
                                        list1.push(num);
                                    }
                                }
                                if (list1.length) {
                                    trigger.source.disableEquip(list1.randomGet());
                                }
                            }
                        } else {
                            const cards1 = Array.from(ui.cardPile.childNodes).filter((c) => get.tag(c, 'damage'));
                            if (cards1.length) {
                                player.gain(cards1.randomGet(), 'gain2');
                            }
                        }
                    },
                }, //30
                // 箓生
                // 任意回合结束时,若你本回合发动过<真仪>,你可以从弃牌堆中获得与你本回合弃置标记花色相同的牌各一张
                SG_lusheng: {
                    trigger: {
                        global: ['phaseEnd'],
                    },
                    filter(event, player) {
                        const his = player.actionHistory;
                        const evt = his[his.length - 1];
                        return evt.useSkill.some((e) => e.skill.includes('SG_wuxing_'));
                    },
                    forced: true,
                    async content(event, trigger, player) {
                        const his = player.actionHistory;
                        const evt = his[his.length - 1];
                        for (const e of evt.useSkill) {
                            if (e.skill.includes('SG_wuxing_')) {
                                const suit = e.suit.split('SG_wuxing_')[1];
                                const cards = Array.from(ui.discardPile.childNodes).filter((q) => q.suit == suit);
                                if (cards.length) {
                                    await player.gain(cards.randomGet(), 'gain2');
                                }
                            }
                        }
                    },
                }, //20
                //——————————————————————————————————————————————————————————————————————————————————————————————————兰晹(群,体力4)
                // 幻月
                // 出牌阶段限一次,你可以展示牌堆顶三张牌,将其中一张红色牌称为『幻月』置于一名其他角色的武将牌上
                // 该角色回合开始时,你获得其武将牌上的『幻月』牌并对其造成1点雷电伤害
                SG_huanyue: {
                    enable: 'phaseUse',
                    usable: 1,
                    intro: {
                        content: 'expansion',
                    },
                    async content(event, trigger, player) {
                        const cards = get.cards(3);
                        player.showCards(cards);
                        const { links } = await player
                            .chooseButton(['将其中一张红色牌称为『幻月』', cards])
                            .set('filterButton', (button) => get.color(button.link) == 'red')
                            .set('ai', (button) => get.value(button.link))
                            .forResult();
                        if (links && links[0]) {
                            const { targets } = await player
                                .chooseTarget('『幻月』置于一名角色的武将牌上', (c, p, t) => p != t)
                                .set('ai', (t) => -get.attitude(player, t))
                                .forResult();
                            if (targets && targets[0]) {
                                targets[0].addToExpansion(links, 'gain2').gaintag.add('SG_huanyue');
                            }
                        }
                    },
                    ai: {
                        order: 15,
                        result: {
                            player: 1,
                        },
                    },
                    group: ['SG_huanyue_1'],
                    subSkill: {
                        1: {
                            trigger: {
                                global: ['phaseBegin'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player.getExpansions('SG_huanyue').length;
                            },
                            async content(event, trigger, player) {
                                player.gain(trigger.player.getExpansions('SG_huanyue'), 'gain2');
                                trigger.player.damage('thunder');
                            },
                        },
                    },
                }, //30
                // 月影
                // 回合限一次,你可以将一张黑色牌当『无懈可击』使用
                SG_yueying: {
                    position: 'hes',
                    usable: 1,
                    enable: 'chooseToUse',
                    filterCard(card) {
                        return get.color(card) == 'black';
                    },
                    hiddenCard(player, name) {
                        if (player.countCards('hes', { color: 'black' }) && name == 'wuxie') {
                            return true;
                        }
                    },
                    viewAsFilter(player) {
                        return player.countCards('hes', { color: 'black' }) > 0;
                    },
                    viewAs: {
                        name: 'wuxie',
                    },
                    prompt: '将一张黑色牌当无懈可击使用',
                    check(card) {
                        return 8 - get.value(card);
                    },
                }, //10
                // 『九死』
                // 觉醒技,濒死时回复至3体力并摸两张牌,变身为『玄京』
                SG_jiusi: {
                    trigger: {
                        player: ['dying'],
                    },
                    forced: true,
                    juexingji: true,
                    async content(event, trigger, player) {
                        player.hp = 3;
                        player.draw(2);
                        player.reinit(player.name, 'SG_xuanjing');
                    },
                }, //10
                //——————————————————————————————————————————————————————————————————————————————————————————————————『玄京』(体力4)
                //‌『寒域‌』
                // 其他角色回合内首次对你使用牌时,需弃置一张基本牌,否则此牌无效
                SG_hanyu: {
                    trigger: {
                        target: ['useCardToPlayer'],
                    },
                    forced: true,
                    usable: 1,
                    filter(event, player) {
                        return event.player != player && event.player == _status.currentPhase;
                    },
                    async content(event, trigger, player) {
                        const { cards } = await trigger.player
                            .chooseToDiscard('弃置一张基本牌,否则此牌无效', 'h')
                            .set('filterCard', (c) => get.type(c) == 'basic')
                            .set('ai', (c) => get.effect(player, trigger.card, trigger.player, trigger.player) - get.value(c))
                            .forResult();
                        if (cards && cards[0]) {
                        } else {
                            trigger.parent.excluded.add(player);
                        }
                    },
                }, //20
                //『玄火』
                // 回合限一次,你可将一张牌当『火杀』使用
                // 你使用的『火杀』无视防具且伤害+1,且若目标有『幻月』标记,则强制命中
                // 累计造成3点火焰伤害后,你变身为『魔化玄京』
                SG_xuanhuo: {
                    mark: true,
                    intro: {
                        content: 'mark',
                    },
                    enable: ['chooseToRespond', 'chooseToUse'],
                    filterCard(card, player) {
                        return true;
                    },
                    position: 'hes',
                    viewAs: {
                        name: 'sha',
                        nature: 'fire',
                    },
                    viewAsFilter(player) {
                        return player.countCards('hes');
                    },
                    prompt: '将一张牌当『火杀』使用或打出,此杀无视防具且伤害+1',
                    check(card) {
                        return 8 - get.value(card);
                    },
                    async precontent(event, trigger, player) { },
                    async onuse(result, player) { }, //usecard=>sha=>damage//baseDamage的传递路径
                    ai: {
                        unequip: true,
                        skillTagFilter(player, tag, arg) {
                            if (arg && arg.card && arg.card.name == 'sha' && arg.card.nature == 'fire') {
                                return true;
                            }
                            return false;
                        },
                    },
                    group: ['SG_xuanhuo_1', 'SG_xuanhuo_2'],
                    subSkill: {
                        1: {
                            trigger: {
                                player: ['shaBegin'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.nature == 'fire' && event.target;
                            },
                            async content(event, trigger, player) {
                                trigger.baseDamage++;
                                if (trigger.target.getExpansions('SG_huanyue').length) {
                                    trigger.directHit = true;
                                }
                            },
                        },
                        2: {
                            trigger: {
                                source: ['damageEnd'],
                            },
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            async content(event, trigger, player) {
                                player.addMark('SG_xuanhuo', trigger.num);
                                if (player.storage.SG_xuanhuo > 2) {
                                    player.reinit(player.name, 'SG_xuanjing1');
                                }
                            },
                        },
                    },
                }, //30
                //——————————————————————————————————————————————————————————————————————————————————————————————————『魔化玄京』‌(体力5)
                //『魔焰』
                // 你造成的伤害均视为火焰伤害;你造成的火焰伤害+1;你使用『杀』时可额外指定至多2名目标
                SG_moyan: {
                    mod: {
                        selectTarget(card, player, range) {
                            if (card.name == 'sha') {
                                range[1] += 2;
                            }
                        },
                    },
                    trigger: {
                        source: ['damageBefore'],
                    },
                    forced: true,
                    filter(event, player) {
                        return event.player != player;
                    },
                    async content(event, trigger, player) {
                        trigger.nature = 'fire';
                        trigger.num++;
                    },
                }, //10
                // 『终焉』
                // 限定技,出牌阶段弃置所有手牌,对全场角色造成2点火焰伤害并移除所有『幻月』标记.你回复X点体力(X为过程中死亡角色数).若x为0,你死亡
                SG_zhongyan: {
                    limited: true,
                    enable: 'phaseUse',
                    async content(event, trigger, player) {
                        player.awakenSkill('SG_zhongyan');
                        await player.discard(player.getCards('h'));
                        const players = game.players.slice();
                        for (const npc of players) {
                            await npc.damage(2, 'fire');
                            const cards = npc.getExpansions('SG_huanyue');
                            if (cards.length) {
                                await npc.discard(cards);
                            }
                        }
                        const num = players.filter((q) => !game.players.includes(q)).length;
                        if (num > 0) {
                            player.recover(num);
                        } else {
                            player.die();
                        }
                    },
                    ai: {
                        order: 1,
                        result: {
                            player(player, target, card) {
                                if (player.getEnemies().some((q) => q.hp < 2)) {
                                    return 3;
                                }
                                return 2 - player.hp;
                            }, //QQQ
                        },
                    },
                }, //20
                //——————————————————————————————————————————————————————————————————————————————————————————————————计采遥・武罗
                // 势力:神体力:3/4护甲:1
                // 性别:女
                // 双生
                // 转换技,出牌阶段限一次,你可以弃置一张牌并选择一名角色,令其获得1枚『灵/煞』标记
                // 拥有『灵/煞』的角色在回合结束时,移除该标记,回复/流失1点体力
                SG_shuangsheng: {
                    zhuanhuanji: true,
                    enable: 'phaseUse',
                    usable: 1,
                    filterTarget: true,
                    selectTarget: 1,
                    filterCard: true,
                    selectCard: 1,
                    position: 'he',
                    mark: true,
                    intro: {
                        content(storage, player) {
                            if (player.storage.SG_shuangsheng) {
                                return '灵';
                            }
                            return '煞';
                        },
                    },
                    prompt(event) {
                        if (event.player.storage.SG_shuangsheng) {
                            return '令其获得1枚『灵』标记';
                        }
                        return '令其获得1枚『煞』标记';
                    },
                    async content(event, trigger, player) {
                        if (player.storage.SG_shuangsheng) {
                            event.target.addMark('SG_shuangsheng_1');
                        } else {
                            event.target.addMark('SG_shuangsheng_2');
                        }
                        player.storage.SG_shuangsheng = !player.storage.SG_shuangsheng;
                    },
                    ai: {
                        order: 1,
                        result: {
                            player(player, target, card) {
                                if (player.storage.SG_shuangsheng) {
                                    return 2;
                                }
                                return -2;
                            },
                        },
                    },
                    group: ['SG_shuangsheng_1', 'SG_shuangsheng_2'],
                    subSkill: {
                        1: {
                            trigger: {
                                global: ['phaseEnd'],
                            },
                            forced: true,
                            mark: true,
                            marktext: '灵',
                            intro: {
                                content: 'mark',
                            },
                            filter(event, player) {
                                return event.player.storage.SG_shuangsheng_1 > 0 && event.player.hp < event.player.maxHp;
                            },
                            async content(event, trigger, player) {
                                trigger.player.recover();
                                trigger.player.storage.SG_shuangsheng_1--;
                            },
                        },
                        2: {
                            trigger: {
                                global: ['phaseEnd'],
                            },
                            forced: true,
                            mark: true,
                            marktext: '煞',
                            intro: {
                                content: 'mark',
                            },
                            filter(event, player) {
                                return event.player.storage.SG_shuangsheng_2 > 0;
                            },
                            async content(event, trigger, player) {
                                trigger.player.loseHp();
                                trigger.player.storage.SG_shuangsheng_2--;
                            },
                        },
                    },
                }, //40
                // 『宿命』
                // 本局限三次,当一名角色死亡时,你可以获得其一个技能.若其是女性,你摸一张牌
                SG_suming: {
                    init(player) {
                        player.storage.SG_suming = 3;
                    },
                    trigger: {
                        global: ['dieEnd'],
                    },
                    forced: true,
                    filter(event, player) {
                        return (
                            event.player.GAS().some((s) => {
                                const info = lib.skill[s];
                                return !player.hasSkill(s) && info && !info.limited;
                            }) && player.storage.SG_suming > 0
                        );
                    },
                    async content(event, trigger, player) {
                        player.storage.SG_suming--;
                        if (trigger.player.sex == 'female') {
                            player.draw();
                        }
                        const skills = trigger.player.GAS().filter((s) => {
                            const info = lib.skill[s];
                            return !player.hasSkill(s) && info && !info.limited;
                        });
                        const { links } = await player
                            .chooseButton(['获得其一个技能', [skills.map((i) => [i, get.translation(i)]), 'tdnodes']])
                            .set('ai', (button) => Math.random())
                            .forResult();
                        if (links && links[0]) {
                            player.addSkill(links);
                        }
                    },
                }, //20
                // 『轮转』
                // 当你进入/脱离濒死时,将手牌调整至体力上限
                SG_lunzhuan: {
                    trigger: {
                        player: ['dyingBefore', 'dyingAfter'],
                    },
                    forced: true,
                    async content(event, trigger, player) {
                        const num1 = player.countCards('h');
                        const num2 = player.maxHp;
                        const num = num1 - num2;
                        if (num > 0) {
                            await player.chooseToDiscard('将手牌数调整至体力上限', 'h', num, true);
                        } else {
                            player.draw(-num);
                        }
                    },
                }, //10
                // 『灵愈』
                // 回合结束时,你可令一名角色执行一至两项:<br>①回复1点体力,若其体力已满,你摸一张牌<br>②获得一点护甲<br>若执行两项,则你跳过下个出牌阶段
                SG_lingyu: {
                    trigger: {
                        player: ['phaseEnd'],
                    },
                    forced: true,
                    async content(event, trigger, player) {
                        const { targets } = await player
                            .chooseTarget('令一名角色执行一至两项')
                            .set('ai', (t) => get.attitude(player, t))
                            .forResult();
                        if (targets && targets[0]) {
                            const list = ['获得一点护甲'];
                            if (targets[0].hp < targets[0].maxHp) {
                                list.push('回复1点体力');
                            }
                            const { links } = await player
                                .chooseButton(['请选择一至两项,若选择两项则跳过下个出牌阶段', [list, 'tdnodes']], [1, 2], true)
                                .set('ai', (b) => {
                                    if (ui.selected.buttons.length) {
                                        return -1;
                                    }
                                    if (b.link == '回复1点体力') {
                                        return player.getFriends(true).filter((q) => q.hp < q.maxHp).length;
                                    }
                                    return 0.8;
                                })
                                .forResult();
                            if (links && links[0]) {
                                if (links.length > 1) {
                                    player.skip('phaseUse');
                                }
                                for (const i of links) {
                                    if (i == '回复1点体力') {
                                        await targets[0].recover();
                                        if (targets[0].hp >= targets[0].maxHp) {
                                            player.draw();
                                        }
                                    } else {
                                        targets[0].SG_hujia();
                                    }
                                }
                            }
                        }
                    },
                }, //20
                //——————————————————————————————————————————————————————————————————————————————————————————————————康僧会// 势力:吴// 体力:3 勾玉
                // 建寺
                // 结束阶段,你可以将一张手牌称为<塔>置于武将牌上(至多3枚)
                // 当其他角色受到伤害时,你可以弃置一枚<塔>,防止此伤害
                SG_jiansi: {
                    trigger: {
                        player: ['phaseEnd'],
                    },
                    forced: true,
                    intro: {
                        content: 'expansion',
                    },
                    filter(event, player) {
                        return player.countCards('h') && player.getExpansions('SG_jiansi').length < 3;
                    },
                    async content(event, trigger, player) {
                        const { cards } = await player
                            .chooseCard('h', '将一张手牌称为<塔>置于武将牌上')
                            .set('ai', (c) => 6 - get.value(c))
                            .forResult();
                        if (cards && cards[0]) {
                            player.addToExpansion(cards).gaintag.add('SG_jiansi');
                        }
                    },
                    group: ['SG_jiansi_1'],
                    subSkill: {
                        1: {
                            trigger: {
                                global: ['damageBefore'],
                            },
                            filter(event, player) {
                                return player.getExpansions('SG_jiansi').length;
                            },
                            check(event, player) {
                                return event.player.isFriendsOf(player);
                            },
                            prompt(event) {
                                return `弃置一枚<塔>,防止${get.translation(event.player)}受伤害`;
                            },
                            async content(event, trigger, player) {
                                const cards = player.getExpansions('SG_jiansi');
                                player.discard(cards.randomGet());
                                trigger.cancel();
                            },
                        },
                    },
                }, //20
                // 制糖
                // 出牌阶段限一次,你可以将任意数量的手牌交给一名其他角色,你摸等量的牌
                // 若你以此法交给的牌中包含【桃】或【酒】,你可以令其回复1点体力
                SG_zhitang: {
                    enable: 'phaseUse',
                    usable: 1,
                    filterCard: true,
                    selectCard: [1, Infinity],
                    position: 'h',
                    check(card) {
                        return 10 - get.value(card);
                    },
                    filterTarget(card, player, target) {
                        return player != target;
                    },
                    selectTarget: 1,
                    discard: false,
                    lose: false,
                    async content(event, trigger, player) {
                        player.give(event.cards, event.target);
                        player.draw(event.cards.length);
                        if (event.cards.some((c) => ['tao', 'jiu'].includes(c.name))) {
                            const { bool } = await player
                                .chooseBool(`令${get.translation(event.target)}回复1点体力`)
                                .set('ai', () => event.target.isFriendsOf(player))
                                .forResult();
                            if (bool) {
                                event.target.recover();
                            }
                        }
                    },
                    ai: {
                        order: 10,
                        result: {
                            target(player, target) {
                                return ui.selected.cards.length + 2;
                            },
                            player(player, target) {
                                return ui.selected.cards.length;
                            },
                        },
                    },
                }, //20
                //——————————————————————————————————————————————————————————————————————————————————————————————————南宫毓​// 势力:魏​// 体力:3 勾玉
                // 议策
                // 出牌阶段限一次,你可以弃置一名其他角色一张手牌
                // 若此牌为锦囊牌,你可以弃置一张牌并获得之
                // 若此牌为基本牌,你可以令其回复1点体力
                // 若此牌为装备牌,你可以将其移动至另一名角色的装备区
                SG_yice: {
                    enable: 'phaseUse',
                    usable: 1,
                    filterTarget(card, player, target) {
                        return player != target && target.countCards('h');
                    },
                    selectTarget: 1,
                    async content(event, trigger, player) {
                        const { cards } = await player
                            .discardPlayerCard(event.target, true, 'h')
                            .set('ai', (b) => {
                                if (get.type(b.link) == 'basic') {
                                    return 2;
                                }
                                return -2;
                            })
                            .forResult();
                        if (cards && cards[0]) {
                            event.target.showCards(cards);
                            if (get.type(cards[0]) == 'basic') {
                                const { bool } = await player
                                    .chooseBool(`令${get.translation(event.target)}回复1点体力`)
                                    .set('ai', () => event.target.isFriendsOf(player))
                                    .forResult();
                                if (bool) {
                                    event.target.recover();
                                }
                            }
                            if (get.type(cards[0]) == 'trick') {
                                const { cards: cards1 } = await player
                                    .chooseCard('he', `弃置一张牌并获得${get.translation(cards[0])}`)
                                    .set('ai', (c) => -get.attitude(player, event.target) - get.value(c))
                                    .forResult();
                                if (cards1 && cards1[0]) {
                                    player.discard(cards1);
                                    player.gain(cards, 'gain2');
                                }
                            }
                            if (get.type(cards[0]) == 'equip') {
                                const { targets } = await player
                                    .chooseTarget(`将${get.translation(cards[0])}移动至另一名角色的装备区`)
                                    .set('filterTarget', (c, p, t) => t != event.target)
                                    .set('ai', (t) => get.attitude(player, t))
                                    .forResult();
                                if (targets && targets[0]) {
                                    targets[0].equip(cards[0]);
                                }
                            }
                        }
                    },
                    ai: {
                        order: 10,
                        result: {
                            player: 1,
                        },
                    },
                }, //30
                // 斡旋
                // 结束阶段,你可以弃置任意张手牌,摸等量的牌
                // 若你弃置的牌中包含至少两张不同花色的牌,你额外摸一张牌
                SG_hanxuan: {
                    trigger: {
                        player: ['phaseEnd'],
                    },
                    forced: true,
                    filter(event, player) {
                        return player.countCards('h');
                    },
                    async content(event, trigger, player) {
                        const { cards } = await player
                            .chooseCard('h', '弃置任意张手牌,摸等量的牌')
                            .set('ai', (c) => 8 - get.value(c))
                            .forResult();
                        if (cards && cards[0]) {
                            player.discard(cards);
                            let num = cards.length;
                            if (cards.map((c) => c.suit).unique().length > 1) {
                                num++;
                            }
                            player.draw(num);
                        }
                    },
                }, //20
                //——————————————————————————————————————————————————————————————————————————————————————————————————百玥&糜香 蜀 3体力
                // 灵蕴
                // 回合开始时,你获得1枚<灵>(上限为5,若你已拥有5枚<灵>,改为摸1张牌)
                // 出牌阶段限一次,你可选择一项执行:
                // ①弃置1张手牌,令一名其他角色回复1点体力,你获得1枚<灵>.若该角色体力值仍为全场最低,你额外获得1枚<灵>
                // ②将至多2张手牌交给一名其他角色,若其中包含红色牌,你获得1枚<灵>
                // ③你获得1枚<灵>,展示1张手牌,若为基本牌,你摸1张牌;若为锦囊牌,你令一名其他角色摸1张牌;若为装备牌,令一名其他角色获得此装备
                // 当其他角色受到伤害时,若你有<灵>,你可选择移除1枚<灵>,令该伤害-1.若伤害由此减少至0,你摸1张牌
                // 若其依然因此伤害进入濒死,你可移除2枚<灵>,令其回复1点体力.若其因此脱离濒死,你获得1枚<灵>
                SG_lingyun: {
                    init(player) {
                        player.SG_lingyun = function (num) {
                            const player = this;
                            player.addMark('SG_lingyun', num);
                            if (player.storage.SG_lingyun > 5) {
                                player.draw(player.storage.SG_lingyun - 5);
                                player.storage.SG_lingyun = 5;
                            }
                        };
                    },
                    trigger: {
                        player: ['phaseBegin'],
                    },
                    forced: true,
                    intro: {
                        content: 'mark',
                    },
                    async content(event, trigger, player) {
                        player.SG_lingyun(1);
                    },
                    group: ['SG_lingyun_1', 'SG_lingyun_2', 'SG_lingyun_3'],
                    subSkill: {
                        1: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('h');
                            },
                            async content(event, trigger, player) {
                                const controllist = ['选项一', '选项二', '选项三'];
                                const choiceList = ['获得1枚<灵>.弃置1张手牌,令一名其他角色回复1点体力.若该角色体力值仍为全场最低,你额外获得1枚<灵>', '将至多2张手牌交给一名其他角色,若其中包含红色牌,你获得1枚<灵>', '获得1枚<灵>.展示1张手牌,若为基本牌,你摸1张牌;若为锦囊牌,你令一名其他角色摸1张牌;若为装备牌,令一名其他角色获得此装备'];
                                const { index } = await player
                                    .chooseControl(controllist)
                                    .set('prompt', '选择一项执行')
                                    .set('choiceList', choiceList)
                                    .set('ai', function (event, player) {
                                        if (player.getFriends().length) {
                                            if (player.getFriends().some((q) => q.hp < q.maxHp)) {
                                                return 0;
                                            }
                                            return 1;
                                        }
                                        return 2;
                                    })
                                    .forResult();
                                switch (index) {
                                    case 0:
                                        {
                                            player.SG_lingyun(1);
                                            const { cards } = await player
                                                .chooseToDiscard('弃置1张手牌,令一名其他角色回复1点体力', 'h')
                                                .set('ai', (c) => 6 - get.value(c))
                                                .forResult();
                                            if (cards && cards[0]) {
                                                const { targets } = await player
                                                    .chooseTarget('令一名其他角色回复1点体力')
                                                    .set('filterTarget', (c, p, t) => p != t)
                                                    .set('ai', (t) => get.attitude(player, t))
                                                    .forResult();
                                                if (targets && targets[0]) {
                                                    await targets[0].recover();
                                                    if (targets[0].isMinHp()) {
                                                        player.SG_lingyun(1);
                                                    }
                                                }
                                            }
                                        }
                                        break;
                                    case 1:
                                        {
                                            const { cards } = await player
                                                .chooseCard('将至多2张手牌交给一名其他角色', 'h', [1, 2])
                                                .set('ai', (c) => 6 - get.value(c))
                                                .forResult();
                                            if (cards && cards[0]) {
                                                const { targets } = await player
                                                    .chooseTarget('将牌交给一名其他角色')
                                                    .set('filterTarget', (c, p, t) => p != t)
                                                    .set('ai', (t) => get.attitude(player, t))
                                                    .forResult();
                                                if (targets && targets[0]) {
                                                    player.give(cards, targets[0]);
                                                    if (cards.some((c) => get.color(c) == 'red')) {
                                                        player.SG_lingyun(1);
                                                    }
                                                }
                                            }
                                        }
                                        break;
                                    case 2:
                                        {
                                            player.SG_lingyun(1);
                                            const { cards } = await player
                                                .chooseCard('展示1张手牌', 'h')
                                                .set('ai', (c) => {
                                                    const type = get.type(c);
                                                    if (type == 'basic') {
                                                        return 1;
                                                    }
                                                    if (player.getFriends().length) {
                                                        return 1;
                                                    }
                                                    return 0;
                                                })
                                                .forResult();
                                            if (cards && cards[0]) {
                                                player.showCards(cards);
                                                const type = get.type(cards[0]);
                                                if (type == 'basic') {
                                                    player.draw();
                                                } else {
                                                    const { targets } = await player
                                                        .chooseTarget('选择一名其他角色')
                                                        .set('filterTarget', (c, p, t) => p != t)
                                                        .set('ai', (t) => get.attitude(player, t))
                                                        .forResult();
                                                    if (targets && targets[0]) {
                                                        if (type == 'trick') {
                                                            targets[0].draw();
                                                        }
                                                        if (type == 'equip') {
                                                            player.give(cards, targets[0]);
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        break;
                                }
                            },
                            ai: {
                                order: 15,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        2: {
                            trigger: {
                                global: ['damageBegin'],
                            },
                            filter(event, player) {
                                return player.storage.SG_lingyun > 0;
                            },
                            check(event, player) {
                                return event.player.isFriendsOf(player);
                            },
                            prompt(event) {
                                return `移除1枚<灵>,令${get.translation(event.player)}受到伤害-1`;
                            },
                            async content(event, trigger, player) {
                                player.removeMark('SG_lingyun');
                                trigger.num--;
                                game.log(`${get.translation(trigger.player)}受到伤害-1`);
                                trigger.SG_lingyun = true;
                                if (trigger.num < 1) {
                                    player.draw(1);
                                }
                            },
                        },
                        3: {
                            trigger: {
                                global: ['dying'],
                            },
                            filter(event, player) {
                                return player.storage.SG_lingyun > 0 && event.parent.name == 'damage' && event.SG_lingyun;
                            },
                            check(event, player) {
                                return event.player.isFriendsOf(player);
                            },
                            prompt(event) {
                                return `移除2枚<灵>,令${get.translation(event.player)}回复1点体力`;
                            },
                            async content(event, trigger, player) {
                                player.removeMark('SG_lingyun', 2);
                                await trigger.player.recover();
                                if (trigger.player.hp > 0) {
                                    player.SG_lingyun(1);
                                }
                            },
                        },
                    },
                }, //80
                // 护契
                // 当任意角色成为【杀】或伤害类锦囊牌的目标时,你可移除x枚<灵>选择第x项:
                // ①令目标获得<护盾>(一层<护盾>可抵消一次伤害,令你获得1枚<灵>)
                // ②令此牌对目标无效,且目标可视为对来源使用一张【杀】(若此【杀】造成伤害,你获得1枚<灵>)
                // ③获得2枚<灵>,令所有其他角色各摸1张牌,此牌的效果改为对来源造成1点伤害
                // 当任意角色濒死时,若你有<灵>,你可移除所有<灵>,令该角色回复等同于<灵>数的体力,你失去1点体力
                // 若你因此濒死,你重铸所有牌
                SG_huqi: {
                    init(player) {
                        player.SG_lingyun = function (num) {
                            const player = this;
                            player.addMark('SG_lingyun', num);
                            if (player.storage.SG_lingyun > 5) {
                                player.draw(player.storage.SG_lingyun - 5);
                                player.storage.SG_lingyun = 5;
                            }
                        };
                    },
                    trigger: {
                        global: ['useCardToPlayer'],
                    },
                    filter(event, player) {
                        return ((get.type(event.card) == 'trick' && get.tag(event.card, 'damage')) || event.card.name == 'sha') && player.storage.SG_lingyun > 0;
                    },
                    check(event, player) {
                        return event.target.isFriendsOf(player);
                    },
                    prompt(event) {
                        return `移除<灵>,令${get.translation(event.target)}执行增益`;
                    },
                    intro: {
                        content: 'mark',
                    },
                    async content(event, trigger, player) {
                        const controllist = ['选项一', '选项二', '选项三'].slice(0, player.storage.SG_lingyun);
                        const choiceList = ['令目标获得<护盾>(一层<护盾>可抵消一次伤害,令你获得1枚<灵>)', '令此牌对目标无效,且目标可视为对来源使用一张【杀】(若此【杀】造成伤害,你获得1枚<灵>)', '令所有其他角色各摸1张牌,此牌的效果改为对来源造成1点伤害(你获得2枚<灵>)'].slice(0, player.storage.SG_lingyun);
                        const { index } = await player
                            .chooseControl(controllist)
                            .set('prompt', '移除x枚<灵>选择第x项')
                            .set('choiceList', choiceList)
                            .set('ai', function (event, player) {
                                return controllist.randomGet();
                            })
                            .forResult();
                        player.removeMark('SG_lingyun', index + 1);
                        switch (index) {
                            case 0:
                                {
                                    trigger.target.addMark('SG_huqi');
                                }
                                break;
                            case 1:
                                {
                                    trigger.excluded.add(trigger.target);
                                    const { bool } = await trigger.target
                                        .chooseBool('视为对来源使用一张【杀】')
                                        .set('ai', () => trigger.target.isEnemiesOf(trigger.player))
                                        .forResult();
                                    if (bool) {
                                        trigger.target.useCard({ name: 'sha' }, trigger.player);
                                    }
                                }
                                break;
                            case 2:
                                {
                                    player.SG_lingyun(2);
                                    for (const npc of game.players.filter((q) => q != player)) {
                                        npc.draw();
                                    }
                                    trigger.parent.all_excluded = true;
                                    trigger.player.damage(trigger.player);
                                }
                                break;
                        }
                    },
                    group: ['SG_huqi_1', 'SG_huqi_2'],
                    subSkill: {
                        1: {
                            trigger: {
                                global: ['damageBegin'],
                            },
                            filter(event, player) {
                                return event.player.storage.SG_huqi > 0;
                            },
                            forced: true,
                            async content(event, trigger, player) {
                                trigger.player.removeMark('SG_huqi');
                                trigger.cancel();
                                player.SG_lingyun();
                            },
                        },
                        2: {
                            trigger: {
                                global: ['dying'],
                            },
                            filter(event, player) {
                                return player.storage.SG_lingyun > 0;
                            },
                            check(event, player) {
                                return event.player.isFriendsOf(player);
                            },
                            prompt(event) {
                                return `移除所有<灵>,令${get.translation(event.player)}回复等同于<灵>数的体力`;
                            },
                            async content(event, trigger, player) {
                                await trigger.player.recover(player.storage.SG_lingyun);
                                player.storage.SG_lingyun = 0;
                                const sha = player.loseHp();
                                await sha;
                                for (const i of _status.globalHistory) {
                                    for (const evt of i.everything) {
                                        if (evt.name == 'dying' && evt.player == player && evt.getParent((e) => e == sha, true)) {
                                            player.recast(player.getCards('he'));
                                        }
                                    }
                                }
                            },
                        },
                    },
                }, //50
                // 余荫
                // 你的手牌上限+X(X为你当前<灵>数)
                SG_yuyin: {
                    mod: {
                        maxHandcard(player, num) {
                            if (player.storage.SG_lingyun > 0) {
                                return num + player.storage.SG_lingyun;
                            }
                        },
                    },
                },
            }; //70
            const translate = {
                //——————————————————————————————————————————————————————————————————————————————————————————————————百玥&糜香 蜀 3体力
                SG_baiyuemixiang: '百玥&糜香', //80
                SG_lingyun: '灵蕴', //80
                SG_lingyun_info: '回合开始时,你获得1枚<灵>(上限为5,若你已拥有5枚<灵>,改为摸1张牌)<br>出牌阶段限一次,你可选择一项执行:<br>①弃置1张手牌,令一名其他角色回复1点体力,你获得1枚<灵>.若该角色体力值仍为全场最低,你额外获得1枚<灵><br>②将至多2张手牌交给一名其他角色,若其中包含红色牌,你获得1枚<灵><br>③你获得1枚<灵>,展示1张手牌,若为基本牌,你摸1张牌;若为锦囊牌,你令一名其他角色摸1张牌;若为装备牌,令一名其他角色获得此装备<br>当其他角色受到伤害时,若你有<灵>,你可选择移除1枚<灵>,令该伤害-1.若伤害由此减少至0,你摸1张牌<br>若其依然因此伤害进入濒死,你可移除2枚<灵>,令其回复1点体力.若其因此脱离濒死,你获得1枚<灵>', //80
                SG_huqi: '护契', //50
                SG_huqi_info: '当任意角色成为【杀】或伤害类锦囊牌的目标时, 你可移除x枚<灵>选择第x项:<br>①令目标获得<护盾>(一层<护盾>可抵消一次伤害,令你获得1枚<灵>)<br>②令此牌对目标无效,且目标可视为对来源使用一张【杀】(若此【杀】造成伤害,你获得1枚<灵>)<br>③获得2枚<灵>,令所有其他角色各摸1张牌,此牌的效果改为对来源造成1点伤害<br>当任意角色濒死时,若你有<灵>,你可移除所有<灵>,令该角色回复等同于<灵>数的体力,你失去1点体力<br>若你因此濒死,你重铸所有牌',
                SG_yuyin: '余荫', //10
                SG_yuyin_info: '你的手牌上限+X(X为你当前<灵>数)',
                //——————————————————————————————————————————————————————————————————————————————————————————————————康僧会// 势力:吴// 体力:3 勾玉
                SG_kangsenghui: '康僧会',
                SG_jiansi: '建寺',
                SG_jiansi_info: '结束阶段,你可以将一张手牌称为<塔>置于武将牌上(至多3枚)<br>当其他角色受到伤害时,你可以弃置一枚<塔>,防止此伤害',
                SG_zhitang: '制糖',
                SG_zhitang_info: '出牌阶段限一次,你可以将任意数量的手牌交给一名其他角色,你摸等量的牌<br>若你以此法交给的牌中包含【桃】或【酒】,你可以令其回复1点体力',
                //——————————————————————————————————————————————————————————————————————————————————————————————————南宫毓​// 势力:魏​// 体力:3 勾玉
                SG_nangongyu: '南宫毓​',
                SG_yice: '议策',
                SG_yice_info: '出牌阶段限一次,你可以弃置一名其他角色一张手牌<br>若此牌为锦囊牌,你可以弃置一张牌并获得之<br>若此牌为基本牌,你可以令其回复1点体力<br>若此牌为装备牌,你可以将其移动至另一名角色的装备区',
                SG_hanxuan: '斡旋',
                SG_hanxuan_info: '结束阶段,你可以弃置任意张手牌,摸等量的牌<br>若你弃置的牌中包含至少两张不同花色的牌,你额外摸一张牌',
                //——————————————————————————————————————————————————————————————————————————————————————————————————计采遥・武罗
                // 势力:神体力:3/4护甲:1
                SG_jicaiyao: '计采遥・武罗',
                SG_shuangsheng: '双生',
                SG_shuangsheng_info: '转换技,出牌阶段限一次,你可以弃置一张牌并选择一名角色,令其获得1枚『灵/煞』标记<br>拥有『灵/煞』的角色在回合结束时,移除该标记,回复/流失1点体力',
                SG_shuangsheng_1: '灵',
                SG_shuangsheng_1_info: '在回合结束时,移除该标记,回复1点体力',
                SG_shuangsheng_2: '煞',
                SG_shuangsheng_2_info: '回合结束时,移除该标记,流失1点体力',
                SG_suming: '宿命',
                SG_suming_info: '本局限三次,当一名角色死亡时,你可以获得其一个技能.若其是女性,你摸一张牌',
                SG_lunzhuan: '轮转',
                SG_lunzhuan_info: '当你进入/脱离濒死时,将手牌调整至体力上限',
                SG_lingyu: '灵愈',
                SG_lingyu_info: '回合结束时,你可令一名角色执行一至两项:<br>①回复1点体力,若其体力已满,你摸一张牌<br>②获得一点护甲<br>若执行两项,则你跳过下个出牌阶段',
                //——————————————————————————————————————————————————————————————————————————————————————————————————兰晹(群,体力4)
                SG_lanyang: '兰晹',
                SG_huanyue: '幻月',
                SG_huanyue_info: '出牌阶段限一次,你可以展示牌堆顶三张牌,将其中一张红色牌称为『幻月』置于一名其他角色的武将牌上<br>该角色回合开始时,你获得其武将牌上的『幻月』牌并对其造成 1 点雷电伤害',
                SG_yueying: '月影',
                SG_yueying_info: '回合限一次,你可以将一张黑色牌当『无懈可击』使用',
                SG_jiusi: '九死',
                SG_jiusi_info: '觉醒技,濒死时回复至3体力并摸两张牌,变身为『玄京』',
                //——————————————————————————————————————————————————————————————————————————————————————————————————『玄京』(体力4)
                SG_xuanjing: '玄京',
                SG_hanyu: '寒域',
                SG_hanyu_info: '其他角色回合内首次对你使用牌时,需弃置一张基本牌,否则此牌无效',
                SG_xuanhuo: '玄火',
                SG_xuanhuo_info: '回合限一次,你可将一张牌当『火杀』使用<br>你使用的『火杀』无视防具且伤害+1,且若目标有『幻月』标记,则强制命中<br>累计造成3点火焰伤害后,你变身为『魔化玄京』',
                //——————————————————————————————————————————————————————————————————————————————————————————————————『魔化玄京』‌(体力5)
                SG_xuanjing1: '魔化玄京',
                SG_moyan: '魔焰',
                SG_moyan_info: '你造成的伤害均视为火焰伤害;你造成的火焰伤害+1;你使用『杀』时可额外指定至多2名目标',
                SG_zhongyan: '终焉',
                SG_zhongyan_info: '限定技,出牌阶段弃置所有手牌,对全场角色造成2点火焰伤害并移除所有『幻月』标记.你回复X点体力(X为过程中死亡角色数).若x为0,你死亡',
                //——————————————————————————————————————————————————————————————————————————————————————————————————张琪瑛 群势力 3勾玉
                SG_zhangqiyingx: '张琪瑛',
                SG_wuxing: '五行',
                SG_wuxing_info: '任意牌进入弃牌堆时,你根据其花色获得🃏<金>/♠️️<木>/♣️️<水>/♥️️<火>/♦️️<土>标记<br>游戏开始时,你获得四种标记.你可以弃置一枚标记,发动对应效果<br>当你首次失去所有标记时,减1点体力上限获得2点护甲,获得技能<箓生>并修改<真仪>',
                SG_wuxing_none: '金',
                SG_wuxing_none_info: '一名角色从正面翻至背面时,取消之',
                SG_wuxing_spade: '木',
                SG_wuxing_spade_info: '判定牌生效前,将牌堆顶一张牌替换为判定牌,摸一张牌',
                SG_wuxing_club: '水',
                SG_wuxing_club_info: '回合限一次,令一名角色回复1点体力,获得弃牌堆中一张♣️️牌',
                SG_wuxing_heart: '火',
                SG_wuxing_heart_info: '当你使用伤害牌时,此牌伤害+1,若目标体力值大于2且其装备区有装备,其弃置一张装备牌',
                SG_wuxing_diamond: '土',
                SG_wuxing_diamond_info: '当你受到伤害后,选择一项<br>①令伤害来源弃置一张与你装备区颜色相同的牌,若其没有,随机废除其装备栏<br>②从牌堆中随机获得一张伤害牌',
                SG_lusheng: '箓生',
                SG_lusheng_info: '任意回合结束时,若你本回合发动过<真仪>,你可以从弃牌堆中获得与你本回合弃置标记花色相同的牌各一张',
                //——————————————————————————————————————————————————————————————————————————————————————————————————夏侯翎  魏​ 3 勾玉
                SG_xiahouling: '夏侯翎', //30
                SG_yingshe: '影射', //30
                SG_yingshe_info: '出牌阶段限一次,你可以弃置一张牌,令一名其他角色展示一张手牌<br>若此牌为黑色,你可以对其使用一张『杀』,此『杀』不计入次数且不可被响应.此杀造成伤害后,你令其选择一项:1.失去1点体力;2.你摸两张牌<br>若此牌为红色,你摸一张牌,可以将一张手牌置于牌堆顶或牌堆底', //30
                SG_shizhi: '矢志​', //20
                SG_shizhi_info: '当你使用的『杀』对其他角色造成伤害后,你可以令其选择一项:1.弃置两张牌;2.令你回复1点体力,其本回合手牌上限-1​', //20
                //——————————————————————————————————————————————————————————————————————————————————————————————————月姬『女』(群,体力3)
                SG_yueji: '月姬',
                SG_yueyin: '月引',
                SG_yueyin_info: '出牌阶段限一次,你可以弃置一张红色牌,令所有角色回复1点体力并摸一张牌.若场上有『幻月』牌,你额外摸一张牌',
                SG_xingzhui: '星坠',
                SG_xingzhui_info: '每轮限两次,当一名角色受到伤害时,你可以弃置一张牌防止此伤害,令其摸2牌.若你弃置的是装备牌,你摸一张牌',
                //——————————————————————————————————————————————————————————————————————————————————————————————————魍魉王・何后
                SG_hehou: '魍魉王・何后',
                SG_shihun: '蚀魂',
                SG_shihun_info: '出牌阶段限一次,你可以弃置一张牌并选择一名没有『冥』的其他角色,令其获得『冥』标记<br>有『冥』角色回合结束时,你对其造成1点伤害,获得其一张手牌或装备区牌,并移除该标记',
                SG_yinsha: '引煞',
                SG_yinsha_info: '每轮限一次,你可以弃置两张牌,召唤1个『牛头』或『马面』.牛马击杀角色后,你回复1点体力',
                SG_tunling: '吞灵',
                SG_tunling_info: '每有一名角色死亡,你的攻击范围/使用『杀』造成的伤害永久+1',
                SG_lingyuan: '灵怨',
                SG_lingyuan_info: '觉醒技,当你受到其他角色造成的伤害进入濒死状态时,你减1点体力上限,回复一半体力,获得技能『冥爆』',
                SG_mingbao: '冥爆',
                SG_mingbao_info: '出牌阶段限一次,你可以弃置存活角色数张牌,对所有其他角色造成1点伤害.若弃置牌数≥3,你回复1点体力',
                //——————————————————————————————————————————————————————————————————————————————————————————————————牛头(无势力,1体力)
                SG_niutou: '牛头',
                SG_niuma: '牛马',
                SG_niuma_info: '当你回合结束后,你死亡.当你死亡时,你对其他角色造成1点真实伤害',
                //——————————————————————————————————————————————————————————————————————————————————————————————————马面
                SG_mamian: '马面',
                //——————————————————————————————————————————————————————————————————————————————————————————————————后土娘娘(EX02)
                SG_houtu: '后土娘娘',
                SG_dimai: '地脉',
                SG_dimai_info: '回合限两次,其他角色失去装备牌时,你获得该装备并对其造成1点伤害.你的装备区牌不可失去',
                SG_sishi: '四时',
                SG_sishi_info: '轮次转换技<br>春煦:摸牌阶段额外摸3张,手牌上限+4<br>夏炎:出牌阶段『杀』次数+2,可额外指定2个目标<br>秋肃:准备阶段获得所有判定区牌,并将弃牌堆中的判定牌洗入牌堆<br>冬寂:回合限一次,你免疫体力值扣减',
                SG_liudao: '六道',
                SG_liudao_info: '准备阶段开始时,选择未使用过的一项领域持续3轮<br>上三道:<br>❶ 天神:其他角色回复体力时,你回复等量体力;其他角色摸牌阶段外摸牌时,你摸等量牌<br>❷ 人间:其他角色使用锦囊牌时,须先交给你1张你选择类别的牌,否则此牌无效<br>❸ 修罗:造成的伤害视为无视防具的雷电伤害<br>下三道:<br>① 饿鬼:所有角色使用的『桃』视为『兵粮寸断』<br>② 畜生:你从正面翻至背面时,摸2张牌;你从背面翻至正面时,获得1点护甲<br>③ 地狱:对其他角色造成的伤害值+1<br>你击杀角色后,令领域延长一轮',
                SG_tianshen: '天神',
                SG_tianshen_info: '其他角色回复体力时,你回复等量体力;其他角色摸牌阶段外摸牌时,你摸等量牌',
                SG_renjian: '人间',
                SG_renjian_info: '其他角色使用锦囊牌时,须先交给你1张你选择类别的牌,否则此牌无效',
                SG_xiuluo: '修罗',
                SG_xiuluo_info: '造成的伤害视为无视防具的雷电伤害',
                SG_egui: '饿鬼',
                SG_egui_info: '所有角色使用的『桃』视为『兵粮寸断』',
                SG_chusheng: '畜生',
                SG_chusheng_info: '你从正面翻至背面时,摸2张牌;你从背面翻至正面时,获得1点护甲',
                SG_diyu: '地狱',
                SG_diyu_info: '对其他角色造成的伤害值+1',
                SG_sheji: '社祭',
                SG_sheji_info: '每当你受到1点伤害后,永久封印伤害来源的一个非选择其1张牌展示后获得',
                SG_guixux: '归墟',
                SG_guixux_info: '限定技,出牌阶段,你可以将游戏回退至3轮前的完整状态(体力、手牌、装备),并获得全场所有被失去过的装备牌',
                SG_youfen: '幽焚',
                SG_youfen_info: '出牌阶段限一次,你可以弃置两张同色手牌,令所有角色:<br>弃置等同于当前轮次数的牌(不足则流失等量体力)<br>受到2点火焰伤害,并焚毁场上所有坐骑牌',
                SG_yinyang: '阴阳',
                SG_yinyang_info: '轮次转换技<br>阳仪:你的回合外,黑色锦囊对你无效,其他角色使用红色锦囊须弃置一张同花色的牌才能生效<br>阴仪:你的回合内所有『桃』视为『酒』',
                SG_yongzhen: '永镇',
                SG_yongzhen_info: '死亡前化为『地脉核心』持续3轮',
                SG_dimaihexin: '地脉核心',
                SG_dimaihexin_info: '所有角色无法死亡<br>每轮从弃牌堆回收每种花色牌各1张<br>结束时,对所有存活角色一共造成9点雷电伤害',
                //——————————————————————————————————————————————————————————————————————————————————————————————————如来佛祖
                SG_rulai: '如来佛祖',
                SG_fajie: '法界',
                SG_fajie_info: '免疫你受到的非卡牌伤害,当你成为其他角色转化牌的目标时,摸一张牌<br>其他角色的回合内使用第3张牌后,其须交给你一张你选择类型的牌,否则受到2点无来源伤害',
                SG_yinguo: '因果',
                SG_yinguo_info: '转换技,初始为<过去·阳><br><过去·阳><br>出牌阶段,你可观看牌堆底5张牌,以任意顺序放至牌堆顶或牌堆底<br><现在·阴><br>你本回合使用牌无次数距离限制<br><未来><br>免疫首次受到的伤害类型,持续至下回合开始',
                SG_lunhui: '轮回',
                SG_lunhui_info: '准备阶段,你须选择一项未使用过的领域生效至下轮准备阶段:<br>天界:所有角色对自己使用的牌结算两次<br>人间:所有角色无法使用或打出锦囊牌,且跳过判定阶段<br>修罗:任意基本牌被使用后,当前角色失去1点体力',
                SG_lunhui_1: '天界',
                SG_lunhui_1_info: '所有角色对自己使用的牌结算两次',
                SG_lunhui_2: '人间',
                SG_lunhui_2_info: '所有角色无法使用或打出锦囊牌,且跳过判定阶段',
                SG_lunhui_3: '修罗',
                SG_lunhui_3_info: '任意基本牌被使用后,当前角色失去1点体力',
                SG_wuliang: '浩瀚',
                SG_wuliang_info: '你的手牌上限为当前体力值的2倍.弃牌阶段,改为分配需弃牌数次2点伤害',
                SG_niepanx: '涅槃',
                SG_niepanx_info: '限定技,当你进入濒死状态时,重置全场角色至游戏开始时的体力、手牌、装备状态.你回复至体力值上限的一半并摸取体力上限张牌,移除所有负面状态',
                SG_xiangmo: '降魔',
                SG_xiangmo_info: '出牌阶段限3次,你可声明一种牌名,场上所有区域内含有该牌的角色须选择一项①弃置同名的所有牌并受到一点雷电伤害②受到3点无来源的雷电伤害',
                SG_puti: '菩提',
                SG_puti_info: '回合外你可将一张红色牌当『无懈可击』使用(不可被响应)<br>回合内你可将一张黑色牌当『决斗』使用',
                SG_wanjie: '业障',
                SG_wanjie_info: '当你造成伤害后,令目标随机一个非锁定技失效两轮<br>若此伤害导致目标进入濒死状态,则永久废除该技能(已觉醒的觉醒技、主公技除外)',
                //——————————————————————————————————————————————————————————————————————————————————————————————————谋华佗
                SG_huatuo: '谋华佗',
                SG_qingnang: '青囊',
                SG_qingnang_info: '出牌阶段限两次,你可弃置一张牌令一名角色将手牌补至体力上限.目标角色可以展示一张黑色牌,你获得1个『药引』<br>你可以移除2个『药引』,使目标下次受到伤害时,转移给其攻击范围内另一角色',
                SG_mafei: '麻沸',
                SG_mafei_info: '当其他角色进入濒死时,你可展示所有手牌:<br>若包含所有红色花色,其将体力回复至1点,你将手牌数调整至『药引』数相同(不得小于你的体力值)<br>若包含所有花色,其将体力回复至上限(每局游戏对每名角色限一次)',
                SG_baicao: '百草',
                SG_baicao_info: '觉醒技,当『药引』≥5时,将『青囊』改为『青冥』,获得『逆命』',
                SG_qingming: '青冥',
                SG_qingming_info: '你可以将一枚『药引』当『桃』使用,若你因此令其体力回复至上限,你获得一枚『药引』',
                SG_niming: '逆命',
                SG_niming_info: '回合外受到伤害后,你可移除1枚『药引』,令伤害来源获得<命殇>',
                SG_mingshang: '命殇',
                SG_mingshang_info: '出牌阶段开始时,将手牌弃置至当前体力值',
                //——————————————————————————————————————————————————————————————————————————————————————————————————靈氏
                SG_lingshi: '靈氏',
                SG_momo: '漠漠',
                SG_momo_info: '每当有角色判定后,若为♥️️,你回复1点体力;若为♠️️,你失去1点体力;若为♦️️,你摸两张牌;若为♣️️,你弃两张牌',
                SG_qianchu: '谴黜',
                SG_qianchu_info: '其他角色的出牌阶段开始时,其可令你进行一次判定并获得判定牌,其选择一项你的本回合效果:1.移出游戏;2.无法使用或打出与判定牌同花色的牌',
                //——————————————————————————————————————————————————————————————————————————————————————————————————紫丞
                SG_zicheng: '紫丞',
                SG_moce: '魔策',
                SG_moce_info: '每阶段每种花色限一次,你可以将♠️️牌当『固若金汤』;♥️️牌当『桃园结义』;♣️️牌当『南蛮入侵』;♦️️牌当『万箭齐发』使用,获得一枚<魔印>',
                SG_wanghun: '王魂',
                SG_wanghun_info: '觉醒技,准备阶段若<魔印>≥3,你加1体力上限并永久获得:其他角色使用锦囊牌时,你可弃一枚<魔印>令其重铸该牌;你使用锦囊牌可额外指定X名目标(X为你已损失体力值)',
                //——————————————————————————————————————————————————————————————————————————————————————————————————康僧会
                SG_kangseng: '康僧会',
                SG_yijing: '译经',
                SG_yijing_info: '回合限一次,你可以弃置一张手牌并选择一名角色,令其从牌堆顶亮出两张牌,获得其中一张非基本牌,其余牌置于牌堆底',
                SG_fahu: '法护',
                SG_fahu_info: '你可以将♥️️牌当『净莲梵音』,♠️️牌当『无懈可击』使用',
                //——————————————————————————————————————————————————————————————————————————————————————————————————谋·张琪瑛
                SG_zhangqiying: '谋·张琪瑛',
                SG_tianshi: '天师',
                SG_tianshi_info: '你使用黑色牌时,可消耗1点护甲令其结算两次;每当你造成属性伤害,获得等量护甲',
                SG_fuzhou: '符咒',
                SG_fuzhou_info: '回合限一次,你可以弃置一张黑色牌,对一名其他角色造成1点雷电伤害,并令其回合结束弃置两张牌',
                SG_qirang: '祈禳',
                SG_qirang_info: '你的红色牌可视为『桃』或『酒』;黑色牌可视为『无懈可击』或『过河拆桥』',
                //——————————————————————————————————————————————————————————————————————————————————————————————————谋·赵妪
                SG_zhaoshu: '谋·赵妪',
                SG_xuechou: '血仇',
                SG_xuechou_info: '当一名群势力角色受到伤害后,你获得1个<仇>标记;回合每项限一次,可移除2个<仇>选择一项:<br>①对一名角色造成1点伤害并弃置其一张牌;<br>②令一名群势力角色回复1点体力并摸一张牌',
                SG_yinren: '隐刃',
                SG_yinren_info: '你使用的黑色『杀』无视防具且不可被『闪』响应;若目标有<仇>标记,此『杀』伤害+1;每轮开始时,将<连环仇刀>置入你的装备区;游戏开始时,将<赤潮战象>置入你的装备区',
                SG_shaxue: '歃血为盟',
                SG_shaxue_info: '指定两名群势力角色,各流失1点体力,你获得2个<仇>标记;若有角色因此进入濒死,你可对其使用一张『桃』,获得1个<仇>',
                SG_chijiang: '赤江',
                SG_chijiang_info: '当你死亡时,移除所有<仇>标记并执行任意一项:<br>①血浪滔天:在场上生成『赤江』地形(持续3轮),所有吴势力角色每回合首次使用或打出牌时,须进行判定:若为红色牌,其流失1点体力;若为黑色牌,其随机弃置一张装备牌(无装备则本回合无法使用『桃』)<br>② 圣躯不腐:将你的武将牌横置为『江灵』状态(视为存活但不可操作),每轮结束时对吴势力角色发动一次『隐刃』效果的黑『杀』,此状态持续3轮或任意群势力角色死亡后解除',
                SG_shengqu: '圣躯',
                SG_shengqu_info: '视为存活且不可操作,每轮结束时对吴势力角色发动一次『隐刃』效果的黑『杀』,此状态持续3轮或任意群势力角色死亡后解除',
                //——————————————————————————————————————————————————————————————————————————————————————————————————海棠
                SG_haitang: '海棠',
                SG_wuji: '舞姬',
                SG_wuji_info: '回合限一次,你可以选择一项:<br>① 愈:令一名角色回复1点体力,若其性别为男,额外获得1层『灵印』;<br>② 锢:弃置一名其他角色区域内两张牌(装备优先),若其为魏或吴势力,其本回合无法使用与弃牌同类型的牌<br>每回合限2次,拥有『灵印』的角色受到伤害后,你获得1点护甲,其摸一张牌',
                SG_tongqi: '同契',
                SG_tongqi_info: '使命技,当一名男性角色濒死时,你可令其体力回复至上限,清空所有负面状态(横置,翻面,废除装备区,判定牌),重置所有技能为游戏开始时的状态,随后你进入灵魂状态(无回合/免疫伤害/免疫死亡)<br>成功:其在两回合内累计造成3点伤害或击杀任意角色,你复活并回复2点体力和1点护甲,且『舞姬』改为回合各限一次;<br>失败:你死亡,其失去所有技能',
                //——————————————————————————————————————————————————————————————————————————————————————————————————等级
                BOSS: 'BOSS',
                SSSSS: 'SSSSS',
                SSSS: 'SSSS',
                SSS: 'SSS',
                SS: 'SS',
                S: 'S',
                //——————————————————————————————————————————————————————————————————————————————————————————————————蜀国百夫长
                SG_shuguobaifu: '蜀国百夫长',
                SG_haoling: '号令',
                SG_haoling_info: '出牌阶段限一次,你可以弃置一张装备牌,令所有同势力的角色对你使用一张『杀』,若你因此受伤后,你摸两张牌',
                SG_tiebi: '铁壁',
                SG_tiebi_info: '你的护甲每损失1点,可令一名同势力其他角色获得1点护甲',
                //——————————————————————————————————————————————————————————————————————————————————————————————————蜀国士兵
                SG_shuguoshibing: '蜀国士兵',
                SG_shuwei: '戍卫',
                SG_shuwei_info: '你的『杀』被『闪』抵消后,可令攻击范围内另一名角色成为目标',
                SG_zhengbei: '整备',
                SG_zhengbei_info: '结束阶段,若你本回合未造成伤害,可令一名角色重置护甲',
                //——————————————————————————————————————————————————————————————————————————————————————————————————蜀国普通百姓
                SG_shuguoputong: '蜀国普通百姓',
                SG_gengzhi: '耕织',
                SG_gengzhi_info: '回合限一次,弃1牌令一名同势力的其他角色摸1牌,若为基本牌,你与其各回复1点护甲',
                //——————————————————————————————————————————————————————————————————————————————————————————————————蜀国逃难百姓
                SG_shuguotaonan: '蜀国逃难百姓',
                SG_liuli: '流离',
                SG_liuli_info: '一名其他角色回合结束时,若你本回合未受伤摸1牌,否则弃1牌',
                //——————————————————————————————————————————————————————————————————————————————————————————————————沈嫣
                SG_shenyan: '沈嫣',
                SG_lingfu: '灵缚',
                SG_lingfu_info: '你每发动一次『灵缚』,获得1层<业力>.回合限一次,你可以选择一名其他角色并依次执行:<br>①封界:将其一张手牌称为<封>置于其武将牌上,其使用与<封>同类型的牌时,需弃置一张牌;<br>②归溯:弃置其区域内一张牌,若为装备,你获得之并令其本回合不能使用此装备类型的牌',
                SG_jinghun: '净魂',
                SG_jinghun_info: '当一名其他角色进入濒死时,你可以移除所有<业力>,令其回复至1点体力并摸X张牌,且直到其下个回合开始,其受到的伤害-1(X为你移除的<业力>数)<br>『净魂』与『入魔』,发动其中一个技能后就会失去另一个技能',
                SG_rumo: '入魔',
                SG_rumo_info: '限定技,准备阶段,若<业力>≥3,你可以增加2点体力上限,回复2点体力;获得技能『魔噬』『赤渊』',
                SG_moshi: '魔噬',
                SG_moshi_info: '你造成的伤害视为<体力流失>,你的所有手牌视为【杀】,你使用【杀】无次数距离限制.你的回合内,每有一名其他角色失去一点体力,你获得1层<魔煞>.结束阶段,你失去X点体力(X为<魔煞>数)',
                SG_chiyuan: '赤渊',
                SG_chiyuan_info: '回合限一次,你可以移除3层<魔煞>,对至多三名角色各造成2点火焰伤害,并令这些角色非锁定技失效',
                //——————————————————————————————————————————————————————————————————————————————————————————————————蜜儿
                SG_mier: '蜜儿',
                SG_gongsheng: '共生',
                SG_gongsheng_info: '回合外每受到1点伤害获得1层<灵契>(上限5);你每有1层<灵契>,其他角色与你的距离+1.你使用『闪』时,可以视为对来源使用一张『杀』',
                SG_huanling: '唤灵',
                SG_huanling_info: '回合限一次,你可以选择一项:<br>①愈:令一名角色回复1点体力,并代替其承受下一次伤害;<br>②召:移除1层<灵契>,从牌堆随机获得一张『坐骑』或『宝物』牌,一名角色使用此牌时,你摸一张牌',
                SG_bianshen: '变身',
                SG_bianshen_info: '觉醒技:准备阶段,若<灵契>≥3.增加2点体力上限并回复2点体力,失去『共生』『唤灵』;获得技能『天麟』『归墟』',
                SG_tianlin: '天麟',
                SG_tianlin_info: '你视为装备『麒麟弓』+『的卢』,且使用『杀』无视防具;你每造成1点伤害,随机执行一项:获得伤害来源一张牌;弃置其1张装备;令其本回合不能使用『闪』',
                SG_guixu: '归墟',
                SG_guixu_info: '限定技,出牌阶段,你可以移除所有<灵契>,对至多X名角色造成X点雷电伤害(X为移除的<灵契>数),若此伤害导致角色死亡,你回复1点体力并重置此技能',
                //——————————————————————————————————————————————————————————————————————————————————————————————————楚歌
                SG_chuge: '楚歌',
                SG_lishang: '离殇',
                SG_lishang_info: '回合限一次,你可弃置一张牌并选择一名其他角色,令其弃置两张牌(不足则全弃),若其因此弃置装备牌,你获得之.本回合其使用牌时,若花色与弃牌相同,你摸一张牌并令此牌无效',
                SG_guixin: '归心',
                SG_guixin_info: '限定技,当你进入濒死状态时,你回复体力至3点,将手牌补至4张,并获得效果:<br>你造成的伤害视为<因果伤害>(无法被防止/转移)<br>其他角色对你造成的伤害将等量反弹给伤害来源<br>『离殇』可额外执行一次',
                //——————————————————————————————————————————————————————————————————————————————————————————————————金环三结
                SG_jinhuan: '金环三结',
                SG_manyong: '蛮勇',
                SG_manyong_info: '当你使用『杀』指定目标后,若你的体力值不小于该角色,你可令此杀伤害+1;若你的体力值小于该角色,你须弃置一张牌,否则此杀无效',
                //——————————————————————————————————————————————————————————————————————————————————————————————————董荼那
                SG_dongtuna: '董荼那',
                SG_fuqin: '缚擒',
                SG_fuqin_info: '一名角色的结束阶段,若你本回合未成为其使用牌的目标,你可弃置一张牌并选择其装备区一张牌:若其不弃置该牌,则你对其造成1点伤害',
                //——————————————————————————————————————————————————————————————————————————————————————————————————阿会喃
                SG_ahuinan: '阿会喃',
                SG_juzhong: '聚众',
                SG_juzhong_info: '当你成为『南蛮入侵』的目标时,你可摸一张牌;若你因此受到伤害,可令伤害来源交给你一张手牌(若无则改为你摸一张牌)',
                //——————————————————————————————————————————————————————————————————————————————————————————————————木鹿大王
                SG_muludawang: '木鹿大王',
                SG_shoufa: '兽法',
                SG_shoufa_info: '当你每回合首次造成伤害后,你可以选择一名与你距离不大于2的角色;每回合限五次,当你受到伤害后,你可以选择一名与你距离不小于2的角色.被此技能选择的角色随机执行以下一种野兽效果:<br>豹:受到1点无来源伤害;<br>鹰:你随机获得其一张牌(若此时其手牌数不小于你,你可观看其手牌);<br>熊:你随机弃置其装备区一张牌(若此时其装备区数量为5,改为2);<br>兔:其摸一张牌<br>你每令一名角色执行过4次兽法效果后,你获得1点护甲.你回合结束时,若你本回合未发动过<兽法>,你可以选择一名其他角色,令其随机执行以上一种野兽效果',
                SG_yuxiang: '御象',
                SG_yuxiang_info: '你计算与其他角色的距离-1;其他角色计算与你的距离+2;你受到火焰伤害始终为3;你免疫无属性【杀】;当你因火焰伤害而进入濒死时,回复减半',
                //——————————————————————————————————————————————————————————————————————————————————————————————————朵思大王
                SG_duosidawang: '朵思大王',
                SG_equan: '恶泉',
                SG_equan_info: '于你的回合内,当你对其他角色造成伤害时,若其已受伤,其获得等同于伤害值的<毒>标记;当你受到伤害时,若伤害来源已受伤,其获得等同于伤害值的<毒>标记.准备阶段,所有有<毒>的角色各失去X点体力(X为其的<毒>数),移除其<毒>标记.若有角色因此进入濒死状态,直至其回合结束,其所有技能失效且不能使用或打出『闪』',
                SG_manji: '蛮汲',
                SG_manji_info: '当其他角色失去体力后:<br>若你的体力值不大于其,你回复1点体力,并可选择一名其他角色,令其下回合内不能使用或打出牌;<br>若你的体力值不小于其,你摸一张牌,并可观看牌堆顶的一张牌,选择加入手牌,或置于牌堆底.<br>回合限一次,你可以将一张牌交给一名其他角色,若如此做,直到回合结束时,该角色不能被选择为『恶泉』的目标',
                //——————————————————————————————————————————————————————————————————————————————————————————————————瑶甄
                SG_yaozhen: '瑶甄',
                SG_lianhua: '莲华',
                SG_lianhua_info: '回合限一次,你可弃置一张牌并执行:<br>①令一名角色回复1点体力,并为其添加1层『莲印』;<br>②若其有『莲印』,改为回复2点体力,且你摸一张牌<br>拥有『莲印』的角色回合结束时,若其体力为满,你获得1层<莲心>(上限3)',
                SG_ciyou: '慈佑',
                SG_ciyou_info: '任意角色受到伤害时,若你有<莲心>,可移除1层<莲心>并选择:<br>①防止此伤害,改为你失去1点体力;<br>②令伤害来源弃置一张牌,且此伤害-1<br>你每以此法失去体力,随机将一张『桃』或『无中生有』置于牌堆顶',
                SG_niepan: '涅槃',
                SG_niepan_info: '限定技,当你进入濒死状态时,你可回复体力至3点,清空所有负面状态(横置,翻面,废除装备区,判定牌),并永久获得:<br>『莲华』可额外指定一名目标;<br>『慈佑』可同时执行两项效果;<br>手牌上限+X(X为存活角色数)',
                //——————————————————————————————————————————————————————————————————————————————————————————————————卡牌
                //——————————————————————————————————————————————————————————————————————————————————————————————————赤潮战象
                SG_zhanxiang: '赤潮战象',
                SG_zhanxiang_info: '装备时视为+1马,发动<血仇>②效果时可切换为-1马<br>当你的黑色『杀』命中目标时,可令其左右相邻角色各获得1个<仇>标记<br>若此杀触发<连环仇刀>效果,可将这些标记直接转移至新目标,每转移1个<仇>标记,使其多受到1点火焰伤害<br>此牌禁止被弃置和获得,当你失去此牌后,销毁此装备,你减少1点体力上限并翻面',
                SG_choudao: '连环仇刀',
                SG_choudao_info: '使用黑色『杀』对任意角色造成伤害后,可视为对另一名其他角色使用『杀』(无视距离),这些角色获得<仇>标记',
                //——————————————————————————————————————————————————————————————————————————————————————————————————八阵图
                SG_bazhen: '八阵图',
                SG_bazhen_info: '出牌阶段对自己使用,判定阶段进行判定,♥️️,回复1点体力;♠️️,失去1点体力;♦️️,摸两张牌;♣️️,弃置两张牌.置入下家判定区,此牌再次进入你的判定区时弃置之',
                //——————————————————————————————————————————————————————————————————————————————————————————————————百辟刀
                SG_baipi: '百辟刀',
                SG_baipi_info: '你使用的黑色『杀』可移除1点护甲(若有)令伤害+1;当你失去此装备时,可弃置一名其他角色一张装备牌',
                //——————————————————————————————————————————————————————————————————————————————————————————————————奇门遁甲
                SG_qimen: '奇门遁甲',
                SG_qimen_info: '将最多三张手牌置于牌堆顶/底,摸等量牌;若你因此摸到装备牌,可立即装备之',
                //——————————————————————————————————————————————————————————————————————————————————————————————————七星灯
                SG_qixing: '七星灯',
                SG_qixing_info: '你每回合首次造成伤害后,可回复1点体力或摸一张牌;当你失去此装备时,可弃置一名其他角色一张牌并令其翻面',
                //——————————————————————————————————————————————————————————————————————————————————————————————————盾
                SG_dun: '盾',
                SG_dun_info: '当你受到卡牌造成的伤害前,可打出此牌抵消本次伤害',
                //——————————————————————————————————————————————————————————————————————————————————————————————————药
                SG_yao: '药',
                SG_yao_info: '令目标回复一点体力,若目标不为你,你弃置一张牌',
                //——————————————————————————————————————————————————————————————————————————————————————————————————解
                SG_jie: '解',
                SG_jie_info: '出牌阶段使用,可移除自身或一名其他角色1个『蛊毒』标记;当其他角色对你使用『蛊』时,可打出『解』令『蛊』无效并弃置',
                //——————————————————————————————————————————————————————————————————————————————————————————————————蛊
                SG_gu: '蛊',
                SG_gu_info: '出牌阶段对一名其他角色使用,令其获得『蛊毒』标记(回合结束时选择弃置一张牌或失去1点体力)',
                //——————————————————————————————————————————————————————————————————————————————————————————————————玄铁重剑
                SG_xuantie: '玄铁重剑',
                SG_xuantie_info: '你使用的『杀』需额外1张『闪』抵消.若此『杀』被抵消,你获得1点护甲',
                //——————————————————————————————————————————————————————————————————————————————————————————————————业火焚城
                SG_yehuo: '业火焚城',
                SG_yehuo_info: '出牌阶段对一名其他角色使用,判定阶段进行判定:若为红色:对所有角色造成1点火焰伤害;若为黑色:弃置所有装备牌并流失1点体力',
                //——————————————————————————————————————————————————————————————————————————————————————————————————玄冰盾
                SG_xuanbing: '玄冰盾',
                SG_xuanbing_info: '你免疫『毒』属性伤害;每回合首次受到伤害时,若伤害≥2,获得1点护甲;当你受到火焰伤害时,弃置此牌并防止之',
                //——————————————————————————————————————————————————————————————————————————————————————————————————决死令
                SG_juesi: '决死令',
                SG_juesi_info: '对所有其他角色使用,目标角色需依次打出2张『闪』,否则失去1点体力.若吕布在场,此牌不可被无懈',
                //——————————————————————————————————————————————————————————————————————————————————————————————————穿云弩
                SG_chuanyun: '穿云弩',
                SG_chuanyun_info: '你使用的『杀』可额外指定一名攻击范围内的角色',
                //——————————————————————————————————————————————————————————————————————————————————————————————————封魔禁咒
                SG_fengmo: '封魔禁咒',
                SG_fengmo_info: '出牌阶段对所有其他角色使用,目标角色选择一项:①直到自己回合结束,非锁定技失效②武将牌翻面',
                //——————————————————————————————————————————————————————————————————————————————————————————————————逆转乾坤
                SG_nizhuan: '逆转乾坤',
                SG_nizhuan_info: '出牌阶段对一名其他角色使用,判定阶段进行判定,若为(J,Q,K)则令目标角色接下来的回合顺序改为弃牌阶段＞出牌阶段＞摸牌阶段＞结束阶段,否则移动到下一个角色的区域',
                //——————————————————————————————————————————————————————————————————————————————————————————————————净莲梵音
                SG_jinglian: '净莲梵音',
                SG_jinglian_info: '出牌阶段对一名角色使用,抵消一次负面状态(横置,翻面,废除装备区,判定牌)',
                //——————————————————————————————————————————————————————————————————————————————————————————————————固若金汤
                SG_jintang: '固若金汤',
                SG_jintang_info: '出牌阶段对所有角色使用,目标获得1点护甲',
                //——————————————————————————————————————————————————————————————————————————————————————————————————挡
                SG_dang: '挡',
                SG_dang_info: '成为『刺』的目标后,可以用此牌抵消,视为对来源使用一张『杀』',
                //——————————————————————————————————————————————————————————————————————————————————————————————————斩
                SG_zhan: '斩',
                SG_zhan_info: '出牌阶段对距离1以内一名其他角色使用,造成1点伤害;一名其他角色进入濒死时,你可以对其使用『斩』',
                //——————————————————————————————————————————————————————————————————————————————————————————————————刺
                SG_ci: '刺',
                SG_ci_info: '回合限一次,对攻击范围内一名其他角色使用,对目标造成1点伤害',
                //——————————————————————————————————————————————————————————————————————————————————————————————————屯田令
                SG_tuntian: '屯田令',
                SG_tuntian_info: '出牌阶段对一名手牌不大于其体力值的角色使用,本回合结束后,你与目标各摸二张牌',
                //——————————————————————————————————————————————————————————————————————————————————————————————————龙魂破军枪
                SG_longhun: '龙魂破军枪',
                SG_longhun_info: '若你使用的『杀』为此阶段使用的第一张牌,你可为其额外指定一个目标,且第一个目标需要使用两张『闪』抵消<br>若你装备区有『玄天护心镜』你使用的『杀』无视目标防具',
                //——————————————————————————————————————————————————————————————————————————————————————————————————玄天护心镜
                SG_xuantian: '玄天护心镜',
                SG_xuantian_info: '装备后,你获得2点护甲<br>当你濒死时,可以弃置此装备将体力回复至1<br>受伤害时,你可进行判定,若为♥️️,将此伤害反弹<br>此牌离开你的装备区后,你弃置装备区和判定区内所有牌',
                //——————————————————————————————————————————————————————————————————————————————————————————————————赤焰追风驹
                SG_chiyan: '赤焰追风驹',
                SG_chiyan_info: '造成火属性伤害时,伤害+1',
                //——————————————————————————————————————————————————————————————————————————————————————————————————寒霜踏雪兽
                SG_hanshuang: '寒霜踏雪兽',
                SG_hanshuang_info: '受到火属性伤害时,伤害-1',
            };
            for (const i in skill) {
                const info = skill[i];
                info.nobracket = true;
                const trans = translate[`${i}_info`];
                if (info.forced && trans) {
                    translate[`${i}_info`] = `<span class=Qmenu>锁定技,</span>${trans}`;
                }
                if (!info.audio) {
                    info.audio = 'ext:三国全系列/audio:2';
                }
                if (info.subSkill) {
                    for (const x in info.subSkill) {
                        const infox = info.subSkill[x];
                        if (!infox.audio) {
                            infox.audio = 'ext:三国全系列/audio:2';
                        } //如果是choosebutton,语音应该是xxx_backup
                    }
                }
            } //QQQ
            Object.assign(lib.skill, skill);
            Object.assign(lib.translate, translate);
            const card = {
                // 『封魔禁咒』 锦囊牌
                // 出牌阶段对所有其他角色使用,目标角色选择一项:①直到自己回合结束,非锁定技失效②武将牌翻面
                SG_fengmo: {
                    type: 'trick',
                    global: 'SG_juesi',
                    filterTarget(card, player, target) {
                        return target != player;
                    },
                    selectTarget: -1,
                    async content(event, trigger, player) {
                        const { control } = await event.target.chooseControl('直到自己回合结束,非锁定技失效', '武将牌翻面').set('prompt', `选择一项`).forResult();
                        if (control == '武将牌翻面') {
                            event.target.turnOver(true);
                        } else {
                            event.target.addTempSkill('fengyin', { player: 'phaseAfter' });
                        }
                    },
                    ai: {
                        result: {
                            target: -1,
                        },
                        order: 10,
                        basic: {
                            useful: 1,
                            value: 1,
                        },
                    },
                }, //20
                // 『逆转乾坤』
                //出牌阶段对一名其他角色使用,判定阶段进行判定,若为(J,Q,K)则令目标角色接下来的回合顺序改为弃牌阶段＞出牌阶段＞摸牌阶段＞结束阶段,否则移动到下一个角色的区域
                SG_nizhuan: {
                    type: 'delay',
                    filterTarget(card, player, target) {
                        return lib.filter.judge(card, player, target) && player != target;
                    },
                    judge(card) {
                        if (card.number > 10) {
                            return -2;
                        }
                        return 1;
                    },
                    effect() {
                        if (result.number > 10) {
                            player.addSkill('SG_nizhuan');
                        } else {
                            player.addJudgeNext(card);
                        }
                    },
                    ai: {
                        order: 10,
                        result: {
                            target: -1,
                        },
                        basic: {
                            useful: 1,
                            value: 1,
                        },
                    },
                }, //20
                // 『净莲梵音』
                // 出牌阶段对一名角色使用,抵消一次负面状态(横置,翻面,废除装备区,判定牌)
                SG_jinglian: {
                    type: 'trick',
                    filterTarget: true,
                    selectTarget: 1,
                    async content(event, trigger, player) {
                        const list = [];
                        if (event.target.classList.contains('linked2')) {
                            list.push('横置');
                        }
                        if (event.target.classList.contains('turnedover')) {
                            list.push('翻面');
                        }
                        if (event.target.countCards('j')) {
                            list.push('判定牌');
                        }
                        if (event.target.countDisabled()) {
                            list.push('废除装备区');
                        }
                        if (list.length) {
                            const { control } = await player
                                .chooseControl(list)
                                .set('prompt', `抵消一次负面状态(横置,翻面,废除装备区,判定牌)`)
                                .set('ai', (e, p) => {
                                    return list.randomGet();
                                })
                                .forResult();
                            if (control == '横置') {
                                event.target.classList.remove('linked', 'linked2');
                            }
                            if (control == '翻面') {
                                event.target.classList.remove('turnedover');
                            }
                            if (control == '判定牌') {
                                event.target.discard(event.target.getCards('j'));
                            }
                            if (control == '废除装备区') {
                                event.target.disabledSlots = {};
                            }
                        }
                    },
                    ai: {
                        order: 10,
                        result: {
                            target: 1,
                        },
                        basic: {
                            useful: 1,
                            value: 1,
                        },
                    },
                }, //30
                // 『固若金汤』
                //出牌阶段对所有角色使用,目标获得1点护甲
                SG_jintang: {
                    type: 'trick',
                    filterTarget: true,
                    selectTarget: -1,
                    async content(event, trigger, player) {
                        event.target.SG_hujia();
                    },
                    ai: {
                        order: 10,
                        result: {
                            target: 1,
                        },
                        basic: {
                            useful: 1,
                            value: 1,
                        },
                    },
                }, //10
                // 『挡』
                //成为『刺』的目标后,可以用此牌抵消,视为对来源使用一张『杀』
                SG_dang: {
                    type: 'basic',
                    enable: false,
                    ai: {
                        order: 1,
                        basic: {
                            useful: 1,
                            value: 1,
                        },
                        result: {
                            player: 1,
                        },
                    },
                }, //10
                // 『斩』
                //出牌阶段对距离1以内一名角色使用,造成1点伤害;一名其他角色进入濒死时,你可以对其使用『斩』
                SG_zhan: {
                    global: 'SG_zhan',
                    type: 'basic',
                    filterTarget(card, player, target) {
                        return get.distance(player, target) < 2 && player != target;
                    },
                    selectTarget: 1,
                    async content(event, trigger, player) {
                        event.target.damage();
                    },
                    ai: {
                        order: 10,
                        result: {
                            target: -2,
                        },
                        tag: {
                            damage: 1,
                        },
                        basic: {
                            useful: 1,
                            value: 1,
                        },
                    },
                }, //10
                // 『刺』
                //回合限一次,对攻击范围内一名角色使用,对目标造成1点伤害
                SG_ci: {
                    usable: 1,
                    updateUsable: 'phaseUse',
                    type: 'basic',
                    filterTarget(card, player, target) {
                        return player.inRange(target) && player != target;
                    },
                    selectTarget: 1,
                    async content(event, trigger, player) {
                        const result = await event.target.chooseToRespond({ name: 'SG_dang' }).forResult();
                        if (result.bool) {
                            player.useCard({ name: 'sha' }, event.target, false);
                        } else {
                            event.target.damage();
                        }
                    },
                    ai: {
                        order: 10,
                        result: {
                            target: -1,
                        },
                        tag: {
                            damage: 1,
                        },
                        basic: {
                            useful: 1,
                            value: 1,
                        },
                    },
                }, //20
                // 屯田令
                // 出牌阶段对一名手牌不大于其体力值的角色使用,本回合结束后,你与目标各摸二张牌
                SG_tuntian: {
                    type: 'trick',
                    filterTarget(card, player, target) {
                        return target.countCards('h') <= target.hp;
                    },
                    selectTarget: 1,
                    async content(event, trigger, player) {
                        player
                            .when({ global: 'phaseAfter' })
                            .then(() => {
                                player.draw(2);
                                target.draw(2);
                            })
                            .vars({ target: event.target });
                    },
                    ai: {
                        order: 10,
                        result: {
                            target: 2,
                            player: 2,
                        },
                        basic: {
                            useful: 1,
                            value: 1,
                        },
                    },
                }, //10//130
                // 『药』
                // 令目标回复一点体力,若目标不为你,你弃置一张牌
                SG_yao: {
                    type: 'basic',
                    filterTarget(card, player, target) {
                        return target.hp < target.maxHp;
                    },
                    selectTarget: 1,
                    savable: true,
                    async content(event, trigger, player) {
                        if (player != event.target) {
                            player.chooseToDiscard(true, 'h');
                        }
                        event.target.recover();
                    },
                    ai: {
                        order: 10,
                        result: {
                            target: 2,
                        },
                        basic: {
                            useful: 1,
                            value: 1,
                        },
                        tag: {
                            recover: 1,
                            save: 1,
                        },
                    },
                }, //20
                // 『解』
                // 出牌阶段使用,可移除自身或一名其他角色1个『蛊毒』标记;当其他角色对你使用『蛊』时,可打出『解』令『蛊』无效并弃置
                SG_jie: {
                    global: 'SG_jie',
                    type: 'basic',
                    filterTarget(card, player, target) {
                        return target.hasSkill('SG_gu');
                    },
                    selectTarget: 1,
                    async content(event, trigger, player) {
                        event.target.removeSkill('SG_gu');
                    },
                    ai: {
                        order: 10,
                        result: {
                            target: 2,
                        },
                        basic: {
                            useful: 1,
                            value: 1,
                        },
                    },
                }, //10
                // 『蛊』
                // 出牌阶段对一名其他角色使用,令其获得『蛊毒』标记(回合结束时选择弃置一张牌或失去1点体力)
                SG_gu: {
                    type: 'basic',
                    filterTarget(card, player, target) {
                        return target != player;
                    },
                    selectTarget: 1,
                    async content(event, trigger, player) {
                        event.target.addSkill('SG_gu');
                    },
                    ai: {
                        order: 10,
                        result: {
                            target: -2,
                        },
                        basic: {
                            useful: 1,
                            value: 1,
                        },
                    },
                }, //10
                // 『业火焚城』
                // 延时锦囊,出牌阶段对一名其他角色使用,判定阶段进行判定:若为红色:对所有角色造成1点火焰伤害;若为黑色:弃置所有装备牌并流失1点体力
                SG_yehuo: {
                    type: 'delay',
                    filterTarget(card, player, target) {
                        return lib.filter.judge(card, player, target) && player != target;
                    },
                    judge(card) {
                        if (get.color(card) == 'red') {
                            return 1;
                        }
                        return -3;
                    },
                    effect() {
                        if (result.color == 'red') {
                            for (const npc of game.players) {
                                npc.damage('fire');
                            }
                        } else {
                            if (player.countCards('e')) {
                                player.discard(player.getCards('e'));
                            }
                            player.loseHp();
                        }
                    },
                    ai: {
                        order: 10,
                        result: {
                            target: -1,
                        },
                        basic: {
                            useful: 1,
                            value: 1,
                        },
                    },
                }, //20
                // 『决死令』
                // 普通锦囊,对所有其他角色使用,目标角色需依次打出2张『闪』,否则失去1点体力.若吕布在场,此牌不可被无懈
                SG_juesi: {
                    type: 'trick',
                    global: 'SG_juesi',
                    filterTarget(card, player, target) {
                        return target != player;
                    },
                    selectTarget: -1,
                    async content(event, trigger, player) {
                        const result = await event.target.chooseToRespond(2, { name: 'shan' }).forResult();
                        if (!result.bool) {
                            event.target.loseHp();
                        }
                    },
                    ai: {
                        result: {
                            player(player, target, card) {
                                return player.getEnemies().length - player.getFriends().length;
                            },
                        },
                        order: 10,
                        basic: {
                            useful: 1,
                            value: 1,
                        },
                    },
                }, //20
                //歃血为盟
                // 指定至多两名群势力角色,各流失1点体力,你获得等量个<仇>标记;若有角色因此进入濒死,你可对其使用一张『桃』,获得1个<仇>
                //歃血为盟=>失去体力=>濒死=>save=>usecard
                SG_shaxue: {
                    type: 'trick',
                    filterTarget(card, player, target) {
                        return target.group == 'qun';
                    },
                    selectTarget: [1, 2],
                    async content(event, trigger, player) {
                        player.addMark('SG_xuechou');
                        await event.target.loseHp();
                        const his = player.actionHistory;
                        const evt = his[his.length - 1];
                        for (const i of evt.useCard) {
                            if (i.getParent((e) => e == event, true) && i.card.name == 'tao' && i.targets[0] == event.target) {
                                player.addMark('SG_xuechou');
                            }
                        }
                    },
                    ai: {
                        order: 10,
                        result: {
                            target: -2,
                        },
                        basic: {
                            useful: 1,
                            value: 1,
                        },
                    },
                }, //20
                //盾
                // 当你受到卡牌造成的伤害前,可打出此牌抵消本次伤害
                SG_dun: {
                    type: 'basic',
                    enable: false,
                    global: ['SG_dun'],
                    ai: {
                        order: 1,
                        basic: {
                            useful: 1,
                            value: 1,
                        },
                        result: {
                            player: 1,
                        },
                    },
                },
                // 八阵图
                // 出牌阶段对自己使用,判定阶段进行判定,♥️️,回复1点体力;♠️️,失去1点体力;♦️️,摸两张牌;♣️️,弃置两张牌.置入下家判定区,此牌再次进入你的判定区时弃置之
                SG_bazhen: {
                    type: 'delay',
                    filterTarget(card, player, target) {
                        return !player.hasJudge('SG_bazhen') && player == target;
                    },
                    selectTarget: -1,
                    judge(card) {
                        if (card.suit == 'heart') {
                            return 2;
                        }
                        if (card.suit == 'spade') {
                            return -2;
                        }
                        return 1;
                    },
                    async effect(event, trigger, player) {
                        const suit = event._result.suit;
                        if (suit == 'heart') {
                            await player.recover();
                        } else if (suit == 'spade') {
                            await player.loseHp();
                        } else if (suit == 'club') {
                            await player.chooseToDiscard('he', 2, true);
                        } else {
                            await player.draw(2);
                        }
                        let next = player.next;
                        while (next && next != player) {
                            if (next.storage.SG_bazhen?.includes(event.cards[0])) {
                                next.storage.SG_bazhen.remove(event.cards[0]);
                                break;
                            } else {
                                if (next.isIn() && !next.hasJudge('SG_bazhen')) {
                                    next.addJudge(event.card, event.cards);
                                    break;
                                } else {
                                    next = next.next;
                                }
                            }
                        }
                    }, //这里event.card是真牌
                    async content(event, trigger, player) {
                        event.target.addJudge(event.card, event.cards);
                        if (!event.target.storage.SG_bazhen) {
                            event.target.storage.SG_bazhen = [];
                        }
                        event.target.storage.SG_bazhen.push(event.cards[0]);
                    }, //这里event.card是vcard
                    ai: {
                        order: 10,
                        result: {
                            target: 1,
                        },
                        basic: {
                            useful: 1,
                            value: 1,
                        },
                    },
                }, //20
                //奇门遁甲(锦囊牌):出牌阶段对自己使用,将最多三张手牌置于牌堆顶/底,摸等量牌;若你因此摸到装备牌,可立即装备之
                SG_qimen: {
                    type: 'trick',
                    toself: true,
                    filterTarget(card, player, target) {
                        return target == player;
                    },
                    selectTarget: -1,
                    async content(event, trigger, player) {
                        if (player.countCards('h')) {
                            const { cards } = await player
                                .chooseCard('h', [1, 3])
                                .set('ai', (c) => 8 - get.value(c))
                                .forResult();
                            if (cards && cards[0]) {
                                const { control } = await player
                                    .chooseControl(['牌堆顶', '牌堆底'])
                                    .set('ai', (e, p) => {
                                        return ['牌堆顶', '牌堆底'].randomGet();
                                    })
                                    .forResult();
                                if (control == '牌堆顶') {
                                    for (const i of cards) {
                                        ui.cardPile.insertBefore(i, ui.cardPile.firstChild);
                                    }
                                } else {
                                    for (const i of cards) {
                                        ui.cardPile.appendChild(i);
                                    }
                                }
                                const { cards: cards1 } = await player.draw(cards.length).forResult();
                                for (const i of cards1) {
                                    if (get.type(i) == 'equip') {
                                        player.equip(i);
                                    }
                                }
                            }
                        }
                    },
                    ai: {
                        order: 10,
                        result: {
                            target: 1,
                        },
                        basic: {
                            useful: 1,
                            value: 1,
                        },
                    },
                }, //20
                //————————————————————————————————————————————————————————————————————————————————————装备
                // 『龙魂破军枪』
                // 攻击范围:3
                // 若你使用的『杀』为此阶段使用的第一张牌,你可为其额外指定一个目标,且第一个目标需要使用两张『闪』抵消
                // 若你装备区有『玄天护心镜』你使用的『杀』无视目标防具
                SG_longhun: {
                    type: 'equip',
                    subtype: 'equip1',
                    distance: {
                        attackFrom: -2,
                    },
                    skills: ['SG_longhun'],
                    ai: {
                        equipValue: 70,
                    },
                }, //10
                // 『玄天护心镜』
                // 装备后,你获得2点护甲
                // 当你濒死时,可以弃置此装备将体力回复至1
                // 受伤害时,你可进行判定,若为♥️️,将此伤害反弹
                // 此牌离开你的装备区后,你弃置装备区和判定区内所有牌
                SG_xuantian: {
                    onEquip() {
                        player.SG_hujia(2);
                    },
                    async onLose(event, trigger, player) {
                        if (!player.SG_xuantian) {
                            player.SG_xuantian = true;
                            player.hujia -= 2;
                            if (player.hujia < 0) {
                                player.hujia = 0;
                            }
                            await player.discard(player.getCards('ej'));
                            player.SG_xuantian = false;
                        }
                    },
                    type: 'equip',
                    subtype: 'equip2',
                    skills: ['SG_xuantian'],
                    ai: {
                        equipValue: 70,
                    },
                }, //10
                // 『赤焰追风驹』(-2马)
                //造成火属性伤害时,伤害+1
                SG_chiyan: {
                    distance: {
                        globalFrom: -2,
                    },
                    type: 'equip',
                    subtype: 'equip4',
                    skills: ['SG_chiyan'],
                    ai: {
                        equipValue: 70,
                    },
                }, //10
                // 『寒霜踏雪兽』(+2马)
                //受到火属性伤害时,伤害-1
                SG_hanshuang: {
                    distance: {
                        globalTo: 2,
                    },
                    type: 'equip',
                    subtype: 'equip3',
                    skills: ['SG_hanshuang'],
                    ai: {
                        equipValue: 70,
                    },
                }, //10
                // 『玄铁重剑』
                // 你使用的『杀』需额外1张『闪』抵消.若此『杀』被抵消,你获得1点护甲
                SG_xuantie: {
                    type: 'equip',
                    subtype: 'equip1',
                    distance: {
                        attackFrom: -2,
                    },
                    skills: ['SG_xuantie'],
                    ai: {
                        equipValue: 70,
                    },
                }, //10
                // 『玄冰盾』
                // 你免疫『毒』属性伤害;每回合首次受到伤害时,若伤害≥2,获得1点护甲;当你受到火焰伤害时,弃置此牌并防止之
                SG_xuanbing: {
                    type: 'equip',
                    subtype: 'equip2',
                    skills: ['SG_xuanbing'],
                    ai: {
                        equipValue: 70,
                    },
                }, //10
                // 『穿云弩』
                // 攻击范围4,你使用的『杀』可额外指定一名攻击范围内的角色
                SG_chuanyun: {
                    type: 'equip',
                    subtype: 'equip1',
                    distance: {
                        attackFrom: -3,
                    },
                    skills: ['SG_chuanyun'],
                    ai: {
                        equipValue: 70,
                    },
                }, //10
                //连环仇刀
                // 使用黑色『杀』对一名角色造成伤害后,可视为对另一名角色使用『杀』(无视距离),这些角色获得<仇>标记
                SG_choudao: {
                    type: 'equip',
                    subtype: 'equip1',
                    distance: {
                        attackFrom: -1,
                    },
                    skills: ['SG_choudao'],
                    ai: {
                        equipValue: 70,
                    },
                }, //10
                // 百辟刀(武器牌)
                // 攻击范围:2
                //你使用的黑色『杀』可移除1点护甲(若有)令伤害+1;当你失去此装备时,可弃置一名角色一张装备牌
                SG_baipi: {
                    type: 'equip',
                    subtype: 'equip1',
                    distance: {
                        attackFrom: -1,
                    },
                    skills: ['SG_baipi'],
                    async onLose(event, trigger, player) {
                        const { targets } = await player
                            .chooseTarget('弃置一名其他角色一张装备牌', (c, p, t) => p != t && t.countCards('e'))
                            .set('ai', (t) => -get.attitude(player, t))
                            .forResult();
                        if (targets && targets[0]) {
                            player.discardPlayerCard(targets[0], 'e', true);
                        }
                    },
                    ai: {
                        equipValue: 70,
                    },
                }, //10
                // 赤潮战象
                // 装备时视为+1马,发动<血仇>②效果时可切换为-1马
                // 技能:当你的黑色『杀』命中目标时,可令其左右相邻角色各获得1个<仇>标记;若此杀触发<连环仇刀>效果,可将这些标记直接转移至新目标,每转移1个<仇>标记,使其多受到1点火焰伤害
                // 当你失去后,销毁此装备,你减少1点体力上限并翻面
                SG_zhanxiang: {
                    distance: {
                        globalTo: 1,
                    },
                    type: 'equip',
                    subtype: 'equip3',
                    skills: ['SG_zhanxiang'],
                    ai: {
                        equipValue: 70,
                    },
                    async onLose(event, trigger, player) {
                        player.loseMaxHp();
                        player.turnOver(true);
                        if (event.cards?.length) {
                            setTimeout(async function () {
                                const card = event.cards[0];
                                const npc = get.owner(card);
                                if (npc) {
                                    await npc.lose(card).set('_triggered', null);
                                }
                                card.selfDestroy();
                            }, 600);
                        }
                    }, //必须先lose再destroy才能移除vcard装备
                }, //20
                // 七星灯(宝物牌):你每回合首次造成伤害后,可回复1点体力或摸一张牌;当你失去此装备时,可弃置一名角色一张牌并令其翻面
                SG_qixing: {
                    type: 'equip',
                    subtype: 'equip5',
                    skills: ['SG_qixing'],
                    async onLose(event, trigger, player) {
                        const { targets } = await player
                            .chooseTarget('弃置一名其他角色一张牌并令其翻面', (c, p, t) => p != t && t.countCards('he'))
                            .set('ai', (t) => -get.attitude(player, t))
                            .forResult();
                        if (targets && targets[0]) {
                            player.discardPlayerCard(targets[0], 'he', true);
                            targets[0].turnOver(true);
                        }
                    },
                    ai: {
                        equipValue: 70,
                    },
                }, //10
            };
            const list = {
                SG_fengmo: 2,
                SG_nizhuan: 1,
                SG_jinglian: 2,
                SG_jintang: 2,
                SG_dang: 6,
                SG_zhan: 5,
                SG_ci: 13,
                SG_tuntian: 2,
                SG_yao: 3,
                SG_jie: 2,
                SG_gu: 4,
                SG_yehuo: 2,
                SG_juesi: 2,
                SG_shaxue: 2,
                SG_dun: 2,
                SG_bazhen: 1,
                SG_qimen: 2,
                SG_longhun: 1,
                SG_xuantian: 1,
                SG_chiyan: 1,
                SG_hanshuang: 1,
                SG_xuantie: 2,
                SG_xuanbing: 2,
                SG_chuanyun: 2,
                SG_choudao: 1,
                SG_baipi: 2,
                SG_zhanxiang: 1,
                SG_qixing: 1,
            };
            for (const i in card) {
                const info = card[i];
                if (!info.audio) {
                    info.audio = 'ext:三国全系列/audio:2';
                }
                info.modTarget = true;
                info.equipDelay = false;
                info.loseDelay = false;
                if (info.enable == undefined) {
                    info.enable = true;
                }
                if (info.type == 'equip') {
                    info.toself = true;
                    info.filterTarget = function (card, player, target) {
                        return player == target && target.canEquip(card, true);
                    };
                    info.selectTarget = -1;
                    info.ai.basic = {
                        equipValue: info.ai.equipValue,
                        useful: 0.1,
                        value: info.ai.equipValue,
                        order: info.ai.equipValue,
                    };
                    info.content = async function (event, trigger, player) {
                        if (event.cards.length) {
                            event.target.equip(event.cards[0]);
                        }
                    };
                    info.ai.result = {
                        target: (player, target, card) => get.equipResult(player, target, card),
                    };
                }
                if (!info.image) {
                    if (info.fullskin) {
                        info.image = `ext:三国全系列/image/${i}.png`;
                    } else {
                        info.image = `ext:三国全系列/image/${i}.jpg`;
                    }
                }
                lib.inpile.add(i);
                if (info.mode && !info.mode.includes(lib.config.mode)) {
                    continue;
                }
                let num = list[i];
                while (num-- > 0) {
                    lib.card.list.push([lib.suits.randomGet(), lib.number.randomGet(), i]);
                }
            }
            Object.assign(lib.card, card);
            lib.cardPack.三国全系列 = Object.keys(card);
            lib.translate.三国全系列_card_config = `三国全系列`;
            lib.config.all.cards.add('三国全系列');
            lib.config.cards.add('三国全系列');
            const dynamicTranslate = {
                SG_wuxing_none(player) {
                    if (player.storage.SG_wuxing) {
                        return `一名角色翻面时,取消之`;
                    }
                    return `一名角色从正面翻至背面时,取消之`;
                },
                SG_wuxing_spade(player) {
                    if (player.storage.SG_wuxing) {
                        return `判定牌生效前,观看牌堆顶两张牌选择一张替换,获得另一张`;
                    }
                    return `判定牌生效前,将牌堆顶一张牌替换为判定牌,摸一张牌`;
                },
                SG_wuxing_club(player) {
                    if (player.storage.SG_wuxing) {
                        return `回合限一次,令一名角色回复1点体力,获得弃牌堆中一张♣️️牌,若目标处于濒死,此效果回复量+1`;
                    }
                    return `回合限一次,令一名角色回复1点体力,获得弃牌堆中一张♣️️牌`;
                },
                SG_wuxing_diamond(player) {
                    if (player.storage.SG_wuxing) {
                        return `当你受到伤害后,选择一项<br>①令伤害来源弃置你装备区牌数张与你装备区颜色相同的牌,若其没有,随机废除其装备栏<br>②从牌堆中随机获得一张伤害牌`;
                    }
                    return `当你受到伤害后,选择一项<br>①令伤害来源弃置一张与你装备区颜色相同的牌,若其没有,随机废除其装备栏<br>②从牌堆中随机获得一张伤害牌`;
                },
            };
            Object.assign(lib.dynamicTranslate, dynamicTranslate);
        },
        config: {
            群聊: {
                name: '<a href="https://qm.qq.com/q/SsTlU9gc24"><span class=Qmenu>『无名杀扩展大全群』:771901025</span></a>',
                clear: true,
            },
            死亡移除: {
                name: '<span class=Qmenu>死亡移除</span>',
                intro: '死亡后移出游戏',
                init: true,
                onclick(result) {
                    game.saveConfig('dieremove', result);
                },
            },
            文字闪烁: {
                name: '<span class=Qmenu>文字闪烁</span>',
                intro: '开启后,部分文字会附加闪烁动画效果',
                init: true,
            },
        },
        package: extensionInfo,
    };
});

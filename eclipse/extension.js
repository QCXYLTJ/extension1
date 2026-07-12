import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function () {
    return {
        name: 'eclipse',
        content(config, pack) {
            lib.group.add('wuli');
            lib.translate.wuli = '物';
            lib.group.push('qy_IWW');
            lib.translate.qy_IWW = 'IWW';
        },
        precontent() {
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
                };//true转为1,false转为-1
                window.numberq0 = function (num) {
                    if (isNaN(Number(num))) return 0;
                    return Math.abs(Number(num));
                };//始终返回正数(取绝对值)
                window.numberq1 = function (num) {
                    if (isNaN(Number(num))) return 1;
                    return Math.max(Math.abs(Number(num)), 1);
                };//始终返回正数且至少为1(取绝对值)
                window.number0 = function (num) {
                    if (isNaN(Number(num))) return 0;
                    return Math.max(Number(num), 0);
                };//始终返回正数
                window.number1 = function (num) {
                    if (isNaN(Number(num))) return 1;
                    return Math.max(Number(num), 1);
                };//始终返回正数且至少为1
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
                    if (num === 2 || num === 3) return true;
                    if (num < 2 || num % 2 === 0 || num % 3 === 0) return false;
                    for (let i = 5; i * i <= num; i += 6) {
                        if (num % i === 0 || num % (i + 2) === 0) return false;
                    }
                    return true;
                }; // 质数
            };
            numfunc();
            //—————————————————————————————————————————————————————————————————————————————技能相关自创函数
            const jineng = function () {
                lib.element.player.qhasSkill = function (s) {
                    const player = this;
                    return player.GS().includes(s);
                };//武将是否拥有某技能
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
                        for (var i in player.additionalSkills) {
                            player.additionalSkills[i].remove(skillx);
                        }
                        player.checkConflict(skillx);
                        player.RST(skillx);
                        if (lib.skill.global.includes(skillx)) {
                            lib.skill.global.remove(skillx);
                            delete lib.skill.globalmap[skillx];
                            for (var i in lib.hook.globalskill) {
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
                        for (var i in lib.hook) {
                            if (Array.isArray(lib.hook[i]) && lib.hook[i].includes(skillx)) {
                                try {
                                    delete lib.hook[i];
                                } catch (e) {
                                    console.log(i + 'lib.hook不能delete');
                                }
                            }
                        }
                        for (var i in lib.hook.globalskill) {
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
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: 'eclipse',
                    connect: true,
                    character: {
                        c_zheyu: {
                            sex: 'none',
                            hp: 1,
                            maxHp: 1,
                            group: '',
                            skills: ['c_yunxing', 'c_yunsi', 'c_shenyu'],
                        },
                        IXION: {
                            sex: 'male',
                            group: 'qun',
                            skills: ['in_tansuo', 'in_qianyue', 'in_yunying', 'l_in_yuebeng'],
                        },
                        qy_jiekelide: {
                            sex: 'male',
                            hp: 3,
                            maxHp: 3,
                            group: 'qy_IWW',
                            skills: ['qy_youli', 'qy_daxuan', 'qy_chongshangabalaqiya', 'qy_jiniantang'],
                        },
                        qy_haixing: {
                            sex: 'male',
                            hp: 3,
                            maxHp: 6,
                            group: 'qun',
                            skills: ['qy_dibaotianxing'],
                        },
                        qy_shenxiang: {
                            sex: 'male',
                            hp: 3,
                            maxHp: 9,
                            group: 'qy_IWW',
                            skills: ['qy_lixiang', 'qy_aobingliuhe', 'qy_kuilei'],
                        },
                        wuli_xuedinge: {
                            sex: 'male',
                            hp: 3,
                            maxHp: 3,
                            group: 'wuli',
                            skills: ['wuli_hubuyuanli', 'wuli_tansuo', 'wuli_buqueding', 'wuli_zhushou'],
                        },
                        愚者: {
                            sex: 'female',
                            hp: 3,
                            maxHp: 3,
                            group: 'shen',
                            skills: ['c_xingyun', 'c_yunsheng', 'c_zhengni', 'c_shenyu'],
                        },
                        冉尘瑶: {
                            sex: 'female',
                            hp: 3,
                            maxHp: 3,
                            group: 'shen',
                            skills: ['c_diange', 'c_yingchang', 'c_xiaban'],
                        },
                        阿赖耶识: {
                            sex: 'female',
                            hp: 3,
                            maxHp: 3,
                            group: 'shen',
                            skills: ['c_qiqing'],
                        },
                        龙母: {
                            sex: 'female',
                            group: 'shen',
                            skills: ['c_jiou', 'c_longchao', 'c_guiyuan'],
                        },
                        银河: {
                            sex: 'female',
                            hp: Infinity,
                            maxHp: Infinity,
                            group: 'shen',
                            skills: ['c_reji', 'c_suxing'],
                        },
                        gm_white: {
                            sex: 'female',
                            hp: Infinity,
                            maxHp: Infinity,
                            group: 'shen',
                            skills: ['gm_emeng', 'gm_bansheng', 'gm_jiangling'],
                        },
                        梦: {
                            sex: 'female',
                            hp: 3,
                            maxHp: 3,
                            group: 'shen',
                            skills: ['y_yanmie', 'y_fanyan', 'y_powang', 'y_shiyue', '邈渺'],
                        },
                        gm_character: {
                            sex: 'none',
                            hp: 0,
                            maxHp: 0,
                            group: null,
                            skills: ['gm_qiyuan', 'gm_mengjing'],
                        },
                        熵: {
                            sex: 'male',
                            group: 'shen',
                            skills: ['c_shangzeng', 'c_shixu', 'c_chonggou'],
                        },
                        奈亚: {
                            sex: 'none',
                            hp: Infinity,
                            maxHp: Infinity,
                            group: 'qingyao_xian',
                            skills: ['gm_qiyuan', 'gm_mengjing', '邈渺'],
                        },
                        宫聆月: {
                            sex: 'female',
                            hp: 7,
                            maxHp: 7,
                            group: 'shen',
                            skills: ['yuqi', 'shanshen', 'xianjing', 'xingchong'],
                        },
                        织绾烟: {
                            sex: 'female',
                            hp: 3,
                            maxHp: 3,
                            hujia: 9,
                            group: 'shen',
                            skills: ['y_xingyan', 'y_yanmie', '邈渺', 'gm_qiyuan', 'gm_mengjing'],
                        },
                        安姝柒: {
                            sex: 'female',
                            hp: 9,
                            maxHp: 9,
                            hujia: 9,
                            group: 'shen',
                            skills: [],
                        },
                        QQQ_luolanxier: {
                            sex: 'female',
                            group: 'shen',
                            skills: ['QQQ_xingchen', 'QQQ_zhuixing', 'QQQ_qiji', 'QQQ_fengling', 'QQQ_monv'],
                        },
                    },
                    characterIntro: {
                        IXION: '年轻人的第一台滚筒洗衣机',
                        织绾烟: '女神',
                    },
                    skill: {
                        y_shiyue: {
                            Supercharlotte: true,
                            charlotte: true,
                            fixed: true,
                            trigger: {
                                global: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                return event.player != player;
                            },
                            content() {
                                'step 0';
                                trigger.player.addTempSkill('y_shiyue_buff', { player: 'phaseZhunbeiBefore' });
                                ('step 1');
                                event.type_basic = ['基本牌', '设定类型为基本牌'];
                                event.type_trick = ['锦囊牌', '设定类型为锦囊牌'];
                                event.type_equip = ['装备牌', '设定类型为装备牌'];
                                player.chooseButton(['请选择一个类型', [[event.type_basic, event.type_trick, event.type_equip], 'textbutton']]).set('ai', function () {
                                    return '装备牌';
                                });
                                ('step 2');
                                if (result.bool) {
                                    game.log(player, '设定的类型是', '#y' + get.strNumber(result.links[0]));
                                    if (result.links == '基本牌') {
                                        trigger.player.storage.y_shiyue_buff_type = 1;
                                        event.goto(3);
                                    }
                                    if (result.links == '锦囊牌') {
                                        trigger.player.storage.y_shiyue_buff_type = 2;
                                        event.goto(3);
                                    }
                                    if (result.links == '装备牌') {
                                        trigger.player.storage.y_shiyue_buff_type = 3;
                                        event.goto(3);
                                    }
                                }
                                ('step 3');
                                event.suit_spade = ['♠️️', '设定花色为♠️️'];
                                event.suit_heart = ['♥️️', '设定花色为♥️️'];
                                event.suit_club = ['♣️️', '设定花色为♣️️'];
                                event.suit_diamond = ['♦️️', '设定花色为♦️️'];
                                player.chooseButton(['请选择一个类型', [[event.suit_spade, event.suit_heart, event.suit_club, event.suit_diamond], 'textbutton']]).set('ai', function () {
                                    return '♥️️';
                                });
                                ('step 4');
                                if (result.links == '♠️️') {
                                    trigger.player.storage.y_shiyue_buff_suit = 1;
                                    event.goto(5);
                                }
                                if (result.links == '♥️️') {
                                    event.goto(5);
                                    trigger.player.storage.y_shiyue_buff_suit = 2;
                                }
                                if (result.links == '♣️️') {
                                    event.goto(5);
                                    trigger.player.storage.y_shiyue_buff_suit = 3;
                                }
                                if (result.links == '♦️️') {
                                    event.goto(5);
                                    trigger.player.storage.y_shiyue_buff_suit = 4;
                                }
                                game.log(player, '设定的花色是', '#y' + get.strNumber(result.links[0]));
                                ('step 5');
                                event.a = ['A', '设定点数为A'];
                                event.b = ['2', '设定点数为2'];
                                event.c = ['3', '设定点数为3'];
                                event.d = ['4', '设定点数为4'];
                                event.e = ['5', '设定点数为5'];
                                event.f = ['6', '设定点数为6'];
                                event.g = ['7', '设定点数为7'];
                                event.h = ['8', '设定点数为8'];
                                event.i = ['9', '设定点数为9'];
                                event.j = ['10', '设定点数为10'];
                                event.k = ['J', '设定点数为J'];
                                event.l = ['Q', '设定点数为Q'];
                                event.m = ['K', '设定点数为K'];
                                player.chooseButton(['请选择一个点数', [[event.a, event.b, event.c, event.d, event.e, event.f, event.g, event.h, event.i, event.j, event.k, event.l, event.m], 'textbutton']]).set('ai', function () {
                                    return 'K';
                                });
                                ('step 6');
                                if (result.links == 'A') {
                                    trigger.player.storage.y_shiyue_buff_Number = 1;
                                    event.finish();
                                }
                                if (result.links == '2') {
                                    trigger.player.storage.y_shiyue_buff_Number = 2;
                                    event.finish();
                                }
                                if (result.links == '3') {
                                    trigger.player.storage.y_shiyue_buff_Number = 3;
                                    event.finish();
                                }
                                if (result.links == '4') {
                                    trigger.player.storage.y_shiyue_buff_Number = 4;
                                    event.finish();
                                }
                                if (result.links == '5') {
                                    trigger.player.storage.y_shiyue_buff_Number = 5;
                                    event.finish();
                                }
                                if (result.links == '6') {
                                    trigger.player.storage.y_shiyue_buff_Number = 6;
                                    event.finish();
                                }
                                if (result.links == '7') {
                                    trigger.player.storage.y_shiyue_buff_Number = 7;
                                    event.finish();
                                }
                                if (result.links == '8') {
                                    trigger.player.storage.y_shiyue_buff_Number = 8;
                                    event.finish();
                                }
                                if (result.links == '9') {
                                    trigger.player.storage.y_shiyue_buff_Number = 9;
                                    event.finish();
                                }
                                if (result.links == '10') {
                                    trigger.player.storage.y_shiyue_buff_Number = 10;
                                    event.finish();
                                }
                                if (result.links == 'J') {
                                    trigger.player.storage.y_shiyue_buff_Number = 11;
                                    event.finish();
                                }
                                if (result.links == 'Q') {
                                    trigger.player.storage.y_shiyue_buff_Number = 12;
                                    event.finish();
                                }
                                if (result.links == 'K') {
                                    trigger.player.storage.y_shiyue_buff_Number = 13;
                                    event.finish();
                                }
                                game.log(player, '设定的点数是', '#y' + get.strNumber(result.links[0]));
                            },
                        },
                        y_shiyue_buff: {
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            popup: false,
                            charlotte: true,
                            superCharlotte: true,
                            mark: true,
                            marktext: '誓约',
                            init(player) {
                                player.storage.y_shiyue_buff_type = 0;
                                player.storage.y_shiyue_buff_suit = 0;
                                player.storage.y_shiyue_buff_Number = 0;
                            },
                            intro: {
                                content(storage, player, skill) {
                                    var type = player.storage.y_shiyue_buff_type;
                                    var suit = player.storage.y_shiyue_buff_type;
                                    var number = player.storage.y_shiyue_buff_type;
                                    var str = '';
                                    if (type > 0) {
                                        if (player.storage.y_shiyue_buff_type == 1) {
                                            str += '<li>【誓约】设类型:基本牌';
                                        }
                                        if (player.storage.y_shiyue_buff_type == 2) {
                                            str += '<li>【誓约】设类型:锦囊牌';
                                        }
                                        if (player.storage.y_shiyue_buff_type == 3) {
                                            str += '<li>【誓约】设类型:装备牌';
                                        }
                                    }
                                    if (suit > 0) {
                                        if (player.storage.y_shiyue_buff_suit == 1) {
                                            str += '<li>【誓约】设定花色:♠️️';
                                        }
                                        if (player.storage.y_shiyue_buff_suit == 2) {
                                            str += '<li>【誓约】设定花色:♥️️';
                                        }
                                        if (player.storage.y_shiyue_buff_suit == 3) {
                                            str += '<li>【誓约】设定花色:♣️️';
                                        }
                                        if (player.storage.y_shiyue_buff_suit == 4) {
                                            str += '<li>【誓约】设定花色:♦️️';
                                        }
                                    }
                                    if (number) {
                                        if (player.storage.y_shiyue_buff_Number > 0) {
                                            str += '<li>【誓约】设定点数:' + player.storage.y_shiyue_buff_Number + '';
                                        }
                                    }
                                    return str;
                                },
                            },
                            content() {
                                'step 0';
                                event.num = 0;
                                ('step 1');
                                if (get.type(trigger.card) == 'basic' && player.storage.y_shiyue_buff_type == 1) {
                                    event.num++;
                                }
                                if (get.type(trigger.card) == 'trick' && player.storage.y_shiyue_buff_type == 2) {
                                    event.num++;
                                }
                                if (get.type(trigger.card) == 'delay' && player.storage.y_shiyue_buff_type == 2) {
                                    event.num++;
                                }
                                if (get.type(trigger.card) == 'equip' && player.storage.y_shiyue_buff_type == 3) {
                                    event.num++;
                                }
                                if (trigger.card.suit == 'spade' && player.storage.y_shiyue_buff_suit == 1) {
                                    event.num++;
                                }
                                if (trigger.card.suit == 'heart' && player.storage.y_shiyue_buff_suit == 2) {
                                    event.num++;
                                }
                                if (trigger.card.suit == 'club' && player.storage.y_shiyue_buff_suit == 3) {
                                    event.num++;
                                }
                                if (trigger.card.suit == 'diamond' && player.storage.y_shiyue_buff_suit == 4) {
                                    event.num++;
                                }
                                if (trigger.card.number == player.storage.y_shiyue_buff_Number) {
                                    event.num++;
                                }
                                ('step 2');
                                if (event.num <= 2) {
                                    trigger.player.loseHp();
                                }
                                ('step 3');
                                if (event.num <= 1) {
                                    trigger.targets.length = 0;
                                    trigger.all_excluded = true;
                                    trigger.player.link(true);
                                }
                                ('step 4');
                                if (event.num <= 0) {
                                    trigger.player.die();
                                }
                            },
                            ai: {
                                effect: {
                                    player(card, player, target, current) {
                                        var num1 = 0;
                                        if (get.type(card) == 'basic' && player.storage.y_shiyue_buff_type != 1) {
                                            var num1 = 1;
                                        } else {
                                            var num1 = -1;
                                        }
                                        if (get.type(card) == 'trick' && player.storage.y_shiyue_buff_type != 2) {
                                            var num1 = 1;
                                        } else {
                                            var num1 = -1;
                                        }
                                        if (get.type(card) == 'delay' && player.storage.y_shiyue_buff_type != 2) {
                                            var num1 = 1;
                                        } else {
                                            var num1 = -1;
                                        }
                                        if (get.type(card) == 'equip' && player.storage.y_shiyue_buff_type != 3) {
                                            var num1 = 1;
                                        } else {
                                            var num1 = -1;
                                        }
                                        var num2 = 0;
                                        if (card.suit == 'spade' && player.storage.y_shiyue_buff_suit == 1) {
                                            var num2 = 1;
                                        } else {
                                            var num2 = -1;
                                        }
                                        if (card.suit == 'heart' && player.storage.y_shiyue_buff_suit == 2) {
                                            var num2 = 1;
                                        } else {
                                            var num2 = -1;
                                        }
                                        if (card.suit == 'club' && player.storage.y_shiyue_buff_suit == 3) {
                                            var num2 = 1;
                                        } else {
                                            var num2 = -1;
                                        }
                                        if (card.suit == 'diamond' && player.storage.y_shiyue_buff_suit == 4) {
                                            var num2 = 1;
                                        } else {
                                            var num2 = -1;
                                        }
                                        var num3 = 0;
                                        if (card.number == player.storage.y_shiyue_buff_Number) {
                                            var num3 = 1;
                                        } else {
                                            var num3 = -1;
                                        }
                                        if (card) {
                                            var num = num1 + num2 + num3;
                                            if (num == -3) {
                                                return [-2, -2];
                                            }
                                            if (num == -2 && player.hp >= 2) {
                                                return 'zeroplayertarget';
                                            }
                                            if (num == -1 && player.hp <= 1) {
                                                return [1, 1];
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        y_xingyan: {
                            enable: 'phaseUse',
                            usable: 1,
                            charlotte: true,
                            content() {
                                'step 0';
                                var card = get.cards()[0];
                                event.card = card;
                                player.showCards(card);
                                ('step 1');
                                if (get.type(card) == 'trick' || get.type(card) == 'basic') {
                                    event.num = 99;
                                    event.goto(2);
                                }
                                if (get.type(card) == 'delay') {
                                    player.phase('nodelay');
                                    event.list = player.getEnemies().sortBySeat();
                                    event.goto(5);
                                }
                                if (get.type(card) == 'equip') {
                                    player.phase('nodelay');
                                    event.list = player.getEnemies().sortBySeat();
                                    event.goto(6);
                                }
                                ('step 2');
                                var card = get.cardPile2(function (card) {
                                    return card.name == event.card.name;
                                });
                                if (!card) {
                                    game.log('牌堆里面已经没有同名牌了!');
                                    event.finish();
                                    return;
                                }
                                if (card && player.hasUseTarget(card)) {
                                    card.remove();
                                    game.updateRoundNumber();
                                    player.chooseUseTarget(card, false, 'nodistance');
                                } else {
                                    event.finish();
                                    game.cardsDiscard(card);
                                }
                                ('step 3');
                                if (result.bool == false) {
                                    event.finish();
                                }
                                ('step 4');
                                if (event.num > 0) {
                                    event.num--;
                                    event.goto(2);
                                } else {
                                    event.finish();
                                }
                                ('step 5');
                                if (event.list.length) {
                                    var target = event.list.shift();
                                    player.line(target);
                                    target.turnOver();
                                    event.redo();
                                } else {
                                    event.finish();
                                }
                                ('step 6');
                                if (event.list.length) {
                                    var target = event.list.shift();
                                    player.line(target);
                                    target.disableEquip('equip1');
                                    target.disableEquip('equip2');
                                    target.disableEquip('equip3');
                                    target.disableEquip('equip4');
                                    target.disableEquip('equip5');
                                    event.redo();
                                } else {
                                    event.finish();
                                }
                            },
                            ai: {
                                order: 12,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        y_yanmie: {
                            enable: 'phaseUse',
                            charlotte: true,
                            limited: true,
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player) {
                                player.storage.yunyeyan = false;
                            },
                            content() {
                                'step 0';
                                player.storage.y_yanmie = true;
                                player.awakenSkill('y_yanmie');
                                player.addTempSkill('y_yanmie_off');
                                player.phase('nodelay');
                                event.list = player.getEnemies().sortBySeat();
                                ('step 1');
                                if (event.list.length) {
                                    var target = event.list.shift();
                                    player.line(target);
                                    target.addTempSkill('y_yanmie_button');
                                    event.redo();
                                } else {
                                    event.trigger('y_yanmie');
                                    event.finish();
                                }
                            },
                            ai: {
                                order: 12,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        y_yanmie_button: {
                            trigger: {
                                global: 'y_yanmie',
                            },
                            forced: true,
                            popup: false,
                            charlotte: true,
                            superCharlotte: true,
                            ruleSkill: true,
                            content() {
                                'step 0';
                                game.countPlayer(function (current) {
                                    if (current.hasSkill('y_yanmie_off')) {
                                        event.num = current.hp + (game.roundNumber - 1);
                                    }
                                });
                                ('step 1');
                                if (event.num > 0) {
                                    var skills = player.getSkills(null, false, false).filter(function (i) {
                                        var info = get.info(i);
                                        return info && !info.charlotte;
                                    });
                                    if (skills.length) {
                                        player.chooseControl('失去体力上限', '失去一个技能', true).set('ai', function () {
                                            var player = _status.event.player;
                                            if (player.maxHp >= 2) {
                                                return ['失去体力上限', '失去一个技能'].randomGet();
                                            }
                                            return '失去一个技能';
                                        });
                                    } else {
                                        event.goto(3);
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.control == '失去体力上限') {
                                    event.goto(3);
                                }
                                if (result.control == '失去一个技能') {
                                    event.goto(4);
                                }
                                ('step 3');
                                player.loseMaxHp(true);
                                if (event.num > 0) {
                                    event.num--;
                                    event.goto(2);
                                } else {
                                    event.finish();
                                }
                                ('step 4');
                                var skills = player.getSkills(null, false, false).filter(function (i) {
                                    var info = get.info(i);
                                    return info && !info.charlotte;
                                });
                                var list = [];
                                for (var skill of skills) {
                                    list.push([skill, '<div class="popup text" style="width:calc(100% - 10px);display:inline-block"><div class="skill">【' + get.translation(skill) + '】</div><div>' + lib.translate[skill + '_info'] + '</div></div>']);
                                }
                                player
                                    .chooseButton(['请选择失去的技能', [list, 'textbutton']])
                                    .set('forced', true)
                                    .set('selectButton', [1])
                                    .set('skills', skills);
                                ('step 5');
                                if (result.bool) {
                                    var skills = result.links;
                                    game.log(player, '失去了以下技能:', '#g' + get.translation(skills));
                                    player.removeSkill(skills.slice(0));
                                    if (event.num > 0) {
                                        event.num--;
                                        event.goto(1);
                                    } else {
                                        event.finish();
                                    }
                                }
                            },
                            _priority: -75,
                        },
                        y_yanmie_off: {
                            charlotte: true,
                            superCharlotte: true,
                        },
                        y_fanyan: {
                            charlotte: true,
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                if (!event.player) return false;
                                if (event.player == player) return false;
                                return event.card && event.targets.length == 1;
                            },
                            check(event, player) {
                                if (get.effect(event.target, event.card, event.player, event.player) < 0) {
                                    return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                trigger.targets.length = 0;
                                trigger.all_excluded = true;
                                ('step 1');
                                var card = game.createCard(trigger.card.name, trigger.card.suit, trigger.card.number, trigger.card.nature);
                                player.useCard(trigger.player, card, false);
                            },
                        },
                        y_powang: {
                            trigger: {
                                player: ['linkBegin', 'loseMaxHpBefore', 'loseHpBefore'],
                            },
                            forced: true,
                            content() {
                                trigger.cancel();
                            },
                            mod: {
                                targetEnabled(card, player, target) {
                                    if (get.type(card) == 'delay' && player != target) {
                                        return false;
                                    }
                                },
                            },
                            ai: {
                                effect: {
                                    target(card) {
                                        if (card.name == 'tiesuo') return 'zeroplayertarget';
                                    },
                                },
                            },
                        },
                        c_shangzeng: {
                            audio: 'ext:eclipse/audio:2',
                            forced: true,
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            filter(event, player) {
                                return (event.name != 'phase' || game.phaseNumber == 0) && !lib.inpile.includes('c_shang');
                            },
                            content() {
                                for (let i = 0; i < 1000; i++) {
                                    var card = game.createCard2('c_shang', 'spade', '8');
                                    ui.cardPile.insertBefore(card, ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
                                }
                                game.broadcastAll(function () {
                                    lib.inpile.add('c_shang');
                                });
                                game.updateRoundNumber();
                            },
                            group: 'c_shangzeng_effect',
                            subSkill: {
                                effect: {
                                    audio: 'ext:eclipse/audio:2',
                                    forced: true,
                                    trigger: {
                                        global: 'phaseBegin',
                                    },
                                    filter(event, player) {
                                        return event.player != player && (get.cardPile2((card) => card.name == 'c_shang') || player.countCards('h', 'c_shang'));
                                    },
                                    content() {
                                        'step 0';
                                        if (player.countCards('h', 'c_shang')) {
                                            player
                                                .chooseCard([0, 1], get.prompt2(event.name, trigger.player), '将一张【熵】置入其手牌区', (card) => card.name == 'c_shang')
                                                .set('ai', function (card) {
                                                    if (-get.attitude(player, trigger.player)) {
                                                        if (player.countCards('h', 'c_shang')) return 5 - get.value(card);
                                                        return true;
                                                    }
                                                    return false;
                                                });
                                        } else {
                                            player.chooseBool(get.prompt2(event.name, trigger.player), '将一张【熵】置入其手牌区').set('ai', function () {
                                                return -get.attitude(player, trigger.player);
                                            });
                                        }
                                        ('step 1');
                                        if (result.bool) {
                                            var card;
                                            if (result.cards && result.cards.length) card = result.cards[0];
                                            else card = get.cardPile2((card) => card.name == 'c_shang');
                                            if (card) {
                                                trigger.player.gain(card, 'gain2')._triggered = null;
                                                var list = [
                                                    ['延时', '', 'lebu'],
                                                    ['延时', '', 'bingliang'],
                                                    ['延时', '', 'shandian'],
                                                ];
                                                if (list.some((vcard) => trigger.player.canAddJudge({ name: vcard[2] }))) {
                                                    player
                                                        .chooseButton(['将一种延时锦囊置入其判定区', [list, 'vcard']], true)
                                                        .set('filterButton', function (button) {
                                                            return trigger.player.canAddJudge({ name: button.link[2] }); //QQQ
                                                        })
                                                        .set('ai', function (button) {
                                                            if (button.link[2] == 'shandian') return 1;
                                                            if (button.link[2] == 'lebu' && trigger.player.needsToDiscard()) return 2.95;
                                                            if (button.link[2] == 'bingliang' && trigger.player.countCards('h') < Math.floor(trigger.player.hp / 2)) return 2.65;
                                                        });
                                                } else event.finish();
                                            } else event.finish();
                                        }
                                        ('step 2');
                                        if (result.bool) {
                                            var card = game.createCard(result.links[0][2]);
                                            trigger.player.addJudge(card);
                                        }
                                    },
                                    sourceSkill: 'c_shangzeng',
                                },
                            },
                        },
                        c_shang_lose: {
                            mod: {
                                canBeDiscarded(card, player, target, event) {
                                    if (card.name == 'c_shang') return false;
                                },
                                canBeGained(card, player, target, event) {
                                    if (card.name == 'c_shang') return false;
                                },
                                cardDiscardable(card, player, target, event) {
                                    if (card.name == 'c_shang') return false;
                                },
                                cardUsable(card, player, target, event) {
                                    if (card.name == 'c_shang') return false;
                                },
                            },
                            forced: true,
                            popup: false,
                            cardSkill: true,
                            trigger: {
                                player: 'loseBegin',
                                global: ['equipBegin', 'addJudgeBegin', 'gainBegin', 'loseAsyncBegin', 'addToExpansionBegin'],
                            },
                            filter(event, player, name) {
                                if (['c_shixu', 'c_shangzeng_effect'].includes(event.getParent(2).name)) return false;
                                if (event.name != 'equip' && event.name != 'addJudge' && !event.visible) return false;
                                var hs = player.getCards('h', 'c_shang');
                                if (!hs.length) return false;
                                var isContains = event.cards.filter((card) => hs.includes(card)).length;
                                if (event.name === 'lose' && event.type !== 'equip') return true;
                                if (event.name === 'gain' || event.name === 'equip') {
                                    if (event.player !== player && isContains) return true;
                                }
                                var evt = event.getl(player);
                                return evt && evt.player == player && evt.hs && evt.hs.length;
                            },
                            content() {
                                if (trigger.name === 'equip') trigger.cancel();
                                trigger.cards.removeArray(player.getCards('h', 'c_shang'));
                            },
                            _priority: -50,
                        },
                        c_shixu: {
                            audio: 'ext:eclipse/audio:2',
                            trigger: {
                                global: 'phaseDiscardAfter',
                            },
                            filter(event, player) {
                                return event.player != player;
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                if (trigger.player.countCards('h', 'c_shang')) {
                                    player.chooseButton(['弃置其一张【熵】', trigger.player.getCards('h')], true).set('filterButton', function (button) {
                                        return button.link.name == 'c_shang';
                                    });
                                } else {
                                    if (!event.continued) player.viewHandcards(trigger.player);
                                    event.finish();
                                }
                                ('step 1');
                                if (result.bool) {
                                    event.continued = true;
                                    event.sourceCard = result.links[0];
                                    trigger.player.discard(result.links[0]);
                                    player.chooseControlList(['对' + get.translation(trigger.player) + '造成一点伤害', '令' + get.translation(trigger.player) + '对自己造成一点伤害'], true).set('ai', function () {
                                        var skills = trigger.player.getSkills(true, false);
                                        var bool = game.expandSkills(skills).some((skill) => lib.skill[skill].forceDie);
                                        if (get.attitude(player, trigger.player) || bool) return 1;
                                        return 0;
                                    });
                                }
                                ('step 2');
                                if (result.control) {
                                    switch (result.index) {
                                        case 0: {
                                            player.line(trigger.player, 'thunder');
                                            trigger.player.damage();
                                            break;
                                        }
                                        case 1: {
                                            trigger.player.damage(trigger.player);
                                            break;
                                        }
                                    }
                                    event.goto(0);
                                }
                            },
                        },
                        c_chonggou: {
                            mod: {
                                ignoredHandcard(card, player) {
                                    if (card.name == 'c_shang') return true;
                                },
                                cardDiscardable(card, player, name) {
                                    if (card.name == 'c_shang' && name == 'phaseDiscard') return false;
                                },
                            },
                            audio: 'ext:eclipse/audio:2',
                            forced: true,
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            filter(event, player) {
                                return player.countCards('h', 'c_shang');
                            },
                            content() {
                                var num = player.countCards('h', 'c_shang');
                                trigger.num += num;
                                player.changeHujia(num);
                            },
                            ai: {
                                threaten: 1.2,
                            },
                        },
                        c_diange: {
                            audio: 'ext:eclipse/audio:2',
                            forced: true,
                            trigger: {
                                global: 'phaseUseBegin',
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                var list = [
                                    ['类型', '', 'basic'],
                                    ['类型', '', 'trick'],
                                    ['类型', '', 'equip'],
                                ];
                                trigger.player.chooseButton([get.translation(event.name), '是否声明一种类型？', [list, 'vcard']]).set('ai', function () {
                                    if (get.attitude(trigger.player, player) < 0) return false;
                                    return list.randomGet();
                                });
                                ('step 1');
                                if (result.bool) {
                                    var type = result.links[0][2];
                                    trigger.player.popup(get.translation(type));
                                    var card = get.cardPile2((card) => get.type2(card) == type);
                                    if (card) player.addToExpansion(card, 'gain2').gaintag.add(event.name);
                                }
                            },
                            marktext: '歌',
                            intro: {
                                name: '点歌板',
                                markcount: 'expansion',
                                content: 'expansion',
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            group: ['c_diange_overflow', 'c_diange_draw'],
                            subSkill: {
                                overflow: {
                                    silent: true,
                                    forced: true,
                                    trigger: {
                                        player: 'addToExpansionAfter',
                                    },
                                    filter(event, player) {
                                        return player.getExpansions('c_diange').length > 15;
                                    },
                                    content() {
                                        var toLose = [];
                                        for (let i = 15; i < player.getExpansions('c_diange').length; i++) {
                                            toLose.push(player.getExpansions('c_diange')[i]);
                                        }
                                        player.loseToDiscardpile(toLose);
                                    },
                                    popup: false,
                                    sourceSkill: 'c_diange',
                                    _priority: 1,
                                },
                                draw: {
                                    audio: 'ext:eclipse/audio:2',
                                    forced: true,
                                    trigger: {
                                        player: 'loseAfter',
                                    },
                                    filter(event, player) {
                                        if (event.getParent(2).name == 'c_diange_overflow') return false;
                                        if (!event.xs || !event.xs.length) return false;
                                        for (var i in event.gaintag_map) {
                                            if (event.gaintag_map[i].includes('c_diange')) return true;
                                            return false;
                                        }
                                    },
                                    content() {
                                        var num = 0;
                                        for (var item of trigger.xs) {
                                            if (!trigger.gaintag_map[item.cardid] || !trigger.gaintag_map[item.cardid].includes('c_diange')) continue;
                                            num++;
                                        }
                                        player.draw(num);
                                    },
                                    sourceSkill: 'c_diange',
                                },
                            },
                        },
                        c_yingchang: {
                            audio: 'ext:eclipse/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.getExpansions('c_diange').length;
                            },
                            content() {
                                'step 0';
                                event.index = 0;
                                event.use = false;
                                event.list = player.getExpansions('c_diange');
                                ('step 1');
                                if (event.index < event.list.length) {
                                    var card = event.list[event.index];
                                    if (player.hasUseTarget(card, false)) {
                                        event.use = true;
                                        player.chooseUseTarget(card, 'nodistance', true).addCount = false;
                                    } else {
                                        player.chooseCard('h', '是否用一张手牌交换' + get.translation(card) + '？').set('ai', function (card) {
                                            var player = _status.event.player;
                                            return player.getUseValue(card);
                                        });
                                    }
                                } else event.finish();
                                ('step 2');
                                if (result.bool && !event.use) {
                                    var card = event.list[event.index];
                                    player.gain(card, player);
                                    player.addToExpansion(result.cards, player).gaintag.add('c_diange');
                                }
                                event.index++;
                                event.use = false;
                                ('step 3');
                                event.goto(1);
                            },
                        },
                        c_xiaban: {
                            audio: 'ext:eclipse/audio:2',
                            forced: true,
                            fixed: true,
                            charlotte: true,
                            superCharlotte: true,
                            trigger: {
                                global: ['loseAfter', 'loseAsyncAfter', 'cardsDiscardAfter'],
                            },
                            filter(event, player) {
                                if (event.name.indexOf('lose') == 0 && (event.getlx === false || event.position != ui.discardPile)) return false;
                                return ui.discardPile.childNodes.length >= 120;
                            },
                            content() {
                                'step 0';
                                event.players = game.filterPlayer((current) => current != player);
                                if (!event.players.some((player) => player.countCards('h') >= 3) && !player.getExpansions('c_diange').length) {
                                    game.over('平局');
                                    event.finish();
                                }
                                ('step 1');
                                event.current = event.players.shift();
                                if (event.current.countCards('h') >= 3) {
                                    event.current.chooseCard(3, '将三张牌置于<点歌板>', 'he', true).set('ai', function (card) {
                                        if (get.attitude(event.current, player) < 0) return 4 - get.value(card);
                                        return 6 - get.value(card);
                                    });
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.addToExpansion(result.cards, event.current, 'giveAuto').gaintag.add('c_diange');
                                }
                                ('step 3');
                                if (!event.players.length) event.finish();
                                else event.goto(1);
                            },
                        },
                        c_jiou: {
                            audio: 'ext:eclipse/audio:2',
                            forced: true,
                            Supercharlotte: true,
                            charlotte: true,
                            fixed: true,
                            trigger: {
                                player: 'damageBegin4',
                            },
                            filter(event, player) {
                                if (!player.hasMark('c_longchao') && event.num <= 1) return true;
                                var num = player.phaseNumber || 0;
                                return num % 2 == 0 ? event.nature : !event.nature;
                            },
                            content() {
                                trigger.cancel();
                            },
                            ai: {
                                nodamage: true,
                                effect: {
                                    target(card, player, target, current) {
                                        var num = target.phaseNumber || 0;
                                        var nature = get.nature(card);
                                        if (get.tag(card, 'damage') && (num % 2 == 0 ? nature : !nature) && !player.hasSkillTag('jueqing', false, target)) return 'zerotarget';
                                    },
                                },
                            },
                            group: 'c_jiou_effect',
                            subSkill: {
                                effect: {
                                    forced: true,
                                    firstDo: true,
                                    Supercharlotte: true,
                                    charlotte: true,
                                    fixed: true,
                                    trigger: {
                                        player: 'damageEnd',
                                        global: 'useCardAfter',
                                    },
                                    filter(event, player) {
                                        if (event.name == 'damage') return player.isHealthy();
                                        return (
                                            event.targets &&
                                            event.targets.length &&
                                            event.targets.includes(player) &&
                                            get.tag(event.card, 'damage') &&
                                            !player.getHistory('damage', function (evt) {
                                                return evt.card == event.card;
                                            }).length
                                        );
                                    },
                                    content() {
                                        player.addMark('c_longchao', 1);
                                    },
                                    sourceSkill: 'c_jiou',
                                },
                            },
                        },
                        c_longchao: {
                            audio: 'ext:eclipse/audio:2',
                            enable: 'phaseUse',
                            Supercharlotte: true,
                            charlotte: true,
                            fixed: true,
                            filter(event, player) {
                                var num = player.getStat('skill').c_longchao || 0;
                                return num < player.countMark('c_longchao') && player.isHealthy() && player.countCards('hs', 'tao');
                            },
                            filterCard: {
                                name: 'tao',
                            },
                            position: 'hs',
                            content() {
                                player.changeHujia();
                            },
                            intro: {
                                content: 'mark',
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player(player) {
                                        if (game.hasPlayer((current) => current != player && get.attitude(player, current) > 1 && current.hp == 1)) {
                                            return player.countCards('hs', 'tao') > 1;
                                        }
                                        return 1;
                                    },
                                },
                            },
                            group: ['c_longchao_3', 'c_longchao_5', 'c_longchao_9', 'c_longchao_13'],
                            subSkill: {
                                3: {
                                    mod: {
                                        maxHandcard(player, num) {
                                            if (player.countMark('c_longchao') >= 3) return num + player.countMark('c_longchao');
                                        },
                                        globalFrom(from, to, distance) {
                                            if (from.countMark('c_longchao') >= 3) return distance - from.countMark('c_longchao');
                                        },
                                    },
                                    forced: true,
                                    trigger: {
                                        player: 'phaseDrawBefore',
                                    },
                                    filter(event, player) {
                                        return player.countMark('c_longchao') >= 3;
                                    },
                                    content() {
                                        trigger.cancel();
                                        var cards = get.bottomCards(player.countMark('c_longchao'));
                                        player.gain(cards, 'draw');
                                    },
                                    sourceSkill: 'c_longchao',
                                },
                                5: {
                                    ai: {
                                        viewHandcard: true,
                                        skillTagFilter(player, tag, arg) {
                                            if (player == arg || player.countMark('c_longchao') < 5) return false;
                                        },
                                    },
                                    sourceSkill: 'c_longchao',
                                },
                                9: {
                                    forced: true,
                                    trigger: {
                                        target: 'useCardToTarget',
                                    },
                                    filter(event, player) {
                                        return get.is.converted(event) && player.countMark('c_longchao') >= 9;
                                    },
                                    content() {
                                        trigger.parent.excluded.add(player);
                                    },
                                    ai: {
                                        effect: {
                                            target(card, player, target, current) {
                                                if (!card.isCard) return 'zerotarget';
                                            },
                                        },
                                    },
                                    sourceSkill: 'c_longchao',
                                },
                                13: {
                                    forced: true,
                                    trigger: {
                                        player: 'c_jiou_effectAfter',
                                        global: ['useSkillAfter', 'useCardAfter', 'respondAfter', 'triggerAfter', 'skillAfter'],
                                    },
                                    filter(event, player) {
                                        return player.countMark('c_longchao') >= 13 && !player.storage['c_longchao_13'];
                                    },
                                    content() {
                                        player.storage[event.name] = true;
                                        game.filterPlayer((current) => current != player).forEach(function (target) {
                                            target.storage.lockSource = player;
                                            target.addSkill('c_longchao_lock');
                                        });
                                    },
                                    sourceSkill: 'c_longchao',
                                },
                                lock: {
                                    init(player, skill) {
                                        player.addSkillBlocker(skill);
                                    },
                                    onremove(player, skill) {
                                        player.removeSkillBlocker(skill);
                                    },
                                    skillBlocker(skill, player) {
                                        var source = player.storage.lockSource;
                                        if (_status.currentPhase == source) return !lib.skill[skill].charlotte && get.is.locked(skill, player);
                                        return !lib.skill[skill].charlotte && !get.is.locked(skill, player);
                                    },
                                    charlotte: true,
                                    mark: true,
                                    intro: {
                                        content(storage, player, skill) {
                                            var list = player.getSkills(null, false, false).filter(function (i) {
                                                return lib.skill[skill].skillBlocker(i, player);
                                            });
                                            if (list.length) return '失效技能:' + get.translation(list);
                                            return '无失效技能';
                                        },
                                    },
                                    sourceSkill: 'c_longchao',
                                },
                            },
                        },
                        c_guiyuan: {
                            audio: 'ext:eclipse/audio:2',
                            forced: true,
                            Supercharlotte: true,
                            charlotte: true,
                            fixed: true,
                            trigger: {
                                player: 'phaseEnd',
                            },
                            content() {
                                'step 0';
                                var list = ['判定阶段', '摸牌阶段', '出牌阶段', '弃牌阶段'];
                                player
                                    .chooseControl(list, 'cancel2')
                                    .set('prompt', '###是否发动【' + get.translation(event.name) + '】？###跳过下回合以下阶段中的一个')
                                    .set('ai', function () {
                                        if (player.needsToDiscard()) return '弃牌阶段';
                                        return '判定阶段';
                                    });
                                ('step 1');
                                if (result.control && result.control != 'cancel2') {
                                    var map = {
                                        判定阶段: 'phaseJudge',
                                        摸牌阶段: 'phaseDraw',
                                        出牌阶段: 'phaseUse',
                                        弃牌阶段: 'phaseDiscard',
                                    };
                                    player.skip(map[result.control]);
                                    player.addSkill('c_guiyuan_effect');
                                }
                            },
                            subSkill: {
                                effect: {
                                    init: (player, skill) => (player.storage[skill] = true),
                                    forced: true,
                                    firstDo: true,
                                    charlotte: true,
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    filter(event, player) {
                                        if (player.storage.c_guiyuan_effect) {
                                            delete player.storage.c_guiyuan_effect;
                                            return;
                                        }
                                        return true;
                                    },
                                    content() {
                                        var targets = player.getEnemies();
                                        player.line(targets, 'fire');
                                        targets.forEach((target) => target.damage('fire'));
                                        var list = [];
                                        for (let i = 0; i < 2; i++) {
                                            var tao = get.cardPile2((card) => card.name == 'tao' && !list.includes(card));
                                            if (tao) list.push(tao);
                                        }
                                        if (list.length) player.gain(list, 'gain2');
                                        player.removeSkill(event.name);
                                    },
                                    sourceSkill: 'c_guiyuan',
                                },
                            },
                        },
                        c_reji: {
                            init: (player, skill) => (player.storage[skill] = 0),
                            mod: {
                                globalTo(from, to, distance) {
                                    return distance + to.storage.c_reji;
                                },
                            },
                            audio: 'ext:eclipse/audio:2',
                            forced: true,
                            firstDo: true,
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            content() {
                                var num = 0;
                                setInterval(function () {
                                    num += 14;
                                    if (num % 14 == 0) {
                                        player.storage[event.name]++;
                                        player.markSkill(event.name);
                                    }
                                    if (num % 42 == 0) {
                                        num = 0;
                                        player.storage[event.name] = 0;
                                        player.markSkill(event.name);
                                        var toDying = game.filterPlayer((current) => current != player).randomGet();
                                        player.line(toDying);
                                        var next = game.createEvent('dying');
                                        next.player = toDying;
                                        next.reason = trigger;
                                        next.source = player;
                                        next.setContent(lib.skill[event.name].dying);
                                    }
                                }, 14000);
                            },
                            mark: true,
                            intro: {
                                content: '当前防御距离+#',
                            },
                            dying() {
                                'step 0';
                                event.forceDie = true;
                                event.ori = player.hp;
                                if (player.isDying()) {
                                    event.finish();
                                    return;
                                }
                                _status.dying.unshift(player);
                                game.broadcast(function (list) {
                                    _status.dying = list;
                                }, _status.dying);
                                event.trigger('dying');
                                game.log(player, '濒死');
                                ('step 1');
                                if (player.hp > event.ori) {
                                    _status.dying.remove(player);
                                    game.broadcast(function (list) {
                                        _status.dying = list;
                                    }, _status.dying);
                                    event.finish();
                                } else if (!event.skipTao) {
                                    var next = game.createEvent('_save');
                                    var start = false;
                                    var starts = [_status.currentPhase, event.source, event.player, game.me, game.players[0]];
                                    for (let i = 0; i < starts.length; i++) {
                                        if (get.itemtype(starts[i]) == 'player') {
                                            start = starts[i];
                                            break;
                                        }
                                    }
                                    next.player = start;
                                    next._trigger = event;
                                    next.triggername = '_save';
                                    next.ori = event.ori;
                                    next.forceDie = true;
                                    next.setContent(lib.skill.c_reji.save);
                                }
                                ('step 2');
                                _status.dying.remove(player);
                                game.broadcast(function (list) {
                                    _status.dying = list;
                                }, _status.dying);
                                if (player.hp <= event.ori && !player.nodying) player.die(event.reason);
                            },
                            save() {
                                'step 0';
                                event.dying = trigger.player;
                                if (!event.acted) event.acted = [];
                                ('step 1');
                                if (trigger.player.isDead()) {
                                    event.finish();
                                    return;
                                }
                                event.acted.push(player);
                                var str = get.translation(trigger.player) + '濒死,是否帮助？';
                                var str2 = '当前体力:' + trigger.player.hp;
                                if (lib.config.tao_enemy && event.dying.side != player.side && lib.config.mode != 'identity' && lib.config.mode != 'guozhan' && !event.dying.hasSkillTag('revertsave')) {
                                    event._result = {
                                        bool: false,
                                    };
                                } else if (player.canSave(event.dying)) {
                                    player.chooseToUse({
                                        filterCard(card, player, event) {
                                            event = event || _status.event;
                                            return lib.filter.cardSavable(card, player, event.dying);
                                        },
                                        filterTarget: trigger.player,
                                        prompt: str,
                                        prompt2: str2,
                                        ai1(card) {
                                            if (typeof card == 'string') {
                                                var info = get.info(card);
                                                if (info.ai && info.ai.order) {
                                                    if (typeof info.ai.order == 'number') {
                                                        return info.ai.order;
                                                    } else if (typeof info.ai.order == 'function') {
                                                        return info.ai.order();
                                                    }
                                                }
                                            }
                                            return 1;
                                        },
                                        ai2: get.effect_use,
                                        type: 'dying',
                                        targetRequired: true,
                                        dying: event.dying,
                                    });
                                } else {
                                    event._result = {
                                        bool: false,
                                    };
                                }
                                ('step 2');
                                if (result.bool) {
                                    if (trigger.player.hp <= event.ori && !trigger.player.nodying && trigger.player.isAlive() && !trigger.player.isOut() && !trigger.player.removed) event.goto(0);
                                    else trigger.untrigger();
                                } else {
                                    for (let i = 0; i < 20; i++) {
                                        if (event.acted.includes(event.player.next)) {
                                            break;
                                        } else {
                                            event.player = event.player.next;
                                            if (!event.player.isOut()) {
                                                event.goto(1);
                                                break;
                                            }
                                        }
                                    }
                                }
                            },
                        },
                        c_suxing: {
                            init: (player, skill) => (player.storage[skill] = [[], []]),
                            audio: 'ext:eclipse/audio:2',
                            forced: true,
                            charlotte: true,
                            trigger: {
                                global: ['phaseBefore', 'damageEnd'],
                                player: ['enterGame', 'phaseBegin'],
                            },
                            filter(event, player, name) {
                                if (player.storage.c_suxing[0].length < 3 || player.storage.c_suxing[1].length < 7) {
                                    if (name == 'phaseBegin') return true;
                                    if (name == 'damageEnd') return true;
                                    return event.name != 'phase' || game.phaseNumber == 0;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                event.su = ['参宿一', '参宿二', '参宿三'];
                                event.xing = ['天枢星', '天璇星', '天权星', '玉衡星', '开阳星', '摇光星', '天玑星'];
                                event.list1 = [];
                                event.list2 = [];
                                for (var su of event.su) {
                                    if (!player.storage[event.name][0].includes(su)) event.list1.push(su);
                                }
                                for (var xing of event.xing) {
                                    if (!player.storage[event.name][1].includes(xing)) event.list2.push(xing);
                                }
                                if (player.isUnderControl()) {
                                    game.swapPlayerAuto(player);
                                }
                                var switchToAuto = function () {
                                    _status.imchoosing = false;
                                    event._result = {
                                        bool: true,
                                        control: event[['list1', 'list2'].randomGets(1)].randomGets(1),
                                    };
                                    if (event.dialog) event.dialog.close();
                                    if (event.control) event.control.close();
                                };
                                var chooseButton = function (event, player) {
                                    var event = _status.event;
                                    if (!event._result) event._result = {};
                                    event._result.control = [];
                                    var constellation = event._result.control;
                                    var dialog = ui.create.dialog('塑星:请点亮一种星座', 'hidden');
                                    event.dialog = dialog;
                                    var addTable = function (list) {
                                        var table = document.createElement('div');
                                        table.classList.add('add-setting');
                                        table.style.margin = '0';
                                        table.style.width = '100%';
                                        table.style.position = 'relative';
                                        for (var name of list) {
                                            var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                                            td.link = name;
                                            table.appendChild(td);
                                            td.innerHTML = '<span>' + name + '</span>';
                                            td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                                if (_status.dragged) return;
                                                if (_status.justdragged) return;
                                                _status.tempNoButton = true;
                                                setTimeout(function () {
                                                    _status.tempNoButton = false;
                                                }, 500);
                                                var link = this.link;
                                                if (!this.classList.contains('bluebg')) {
                                                    if (constellation.length >= 1) return;
                                                    constellation.add(link);
                                                    this.classList.add('bluebg');
                                                    event.control = ui.create.control('ok', function (link) {
                                                        event.dialog.close();
                                                        event.control.close();
                                                        game.resume();
                                                        _status.imchoosing = false;
                                                    });
                                                } else {
                                                    this.classList.remove('bluebg');
                                                    constellation.remove(link);
                                                    event.control.close();
                                                }
                                            });
                                        }
                                        dialog.content.appendChild(table);
                                    };
                                    if (event.list1.length) {
                                        dialog.addText('未点亮的宿星');
                                        addTable(event.list1);
                                    }
                                    if (event.list2.length) {
                                        dialog.addText('未点亮的七星');
                                        addTable(event.list2);
                                    }
                                    dialog.add('　　');
                                    dialog.open();
                                    event.switchToAuto = function () {
                                        event.dialog.close();
                                        event.control.close();
                                        game.resume();
                                        _status.imchoosing = false;
                                    };
                                    for (let i = 0; i < event.dialog.buttons.length; i++) {
                                        event.dialog.buttons[i].classList.add('selectable');
                                    }
                                    game.pause();
                                    game.countChoose();
                                };
                                if (event.isMine()) {
                                    chooseButton(event, player);
                                } else if (event.isOnline()) {
                                    event.player.send(chooseButton, event, player);
                                    event.player.wait();
                                    game.pause();
                                } else {
                                    switchToAuto();
                                }
                                ('step 1');
                                var map = event.result || result;
                                if (map && map.control && map.control.length) {
                                    var constellation = map.control[0];
                                }
                                return;
                                if (event.su.includes(constellation)) {
                                    player.storage[event.name][0].push(constellation);
                                    player.addSkill('c_suxing_su' + event.su.indexOf(constellation));
                                }
                                if (event.xing.includes(constellation)) {
                                    player.storage[event.name][1].push(constellation);
                                    player.addSkill('c_suxing_xing' + event.xing.indexOf(constellation));
                                }
                                ('step 2');
                                if (player.storage[event.name][0].length == 3) {
                                    player.addSkill('c_suxing_su');
                                }
                                if (player.storage[event.name][1].length == 7) {
                                    player.addSkill('c_suxing_xing');
                                }
                            },
                            subSkill: {
                                su: {
                                    charlotte: true,
                                    sourceSkill: 'c_suxing',
                                },
                                su0: {
                                    charlotte: true,
                                    trigger: {
                                        player: 'phaseJudgeBegin',
                                    },
                                    content() {
                                        'step 0';
                                        if (player.hasSkill('c_suxing_su')) {
                                            game.filterPlayer((current) => current != player).forEach(function (target) {
                                                target.addTempSkill('drlt_xiongluan_ban', { player: 'phaseBegin' });
                                                target.addTempSkill('baiban', { player: 'phaseEnd' });
                                            });
                                            event.finish();
                                        } else {
                                            player.judge(function (card) {
                                                return get.color(card) == 'red' ? 1.5 : 2.5;
                                            }).judge2 = function (result) {
                                                return result.bool;
                                            };
                                        }
                                        ('step 1');
                                        if (result.bool) {
                                            switch (result.color) {
                                                case 'red': {
                                                    game.filterPlayer((current) => current != player).forEach(function (target) {
                                                        target.addTempSkill('drlt_xiongluan_ban', { player: 'phaseBegin' });
                                                    });
                                                    break;
                                                }
                                                case 'black': {
                                                    game.filterPlayer((current) => current != player).forEach(function (target) {
                                                        target.addTempSkill('baiban', { player: 'End' });
                                                    });
                                                    break;
                                                }
                                            }
                                        }
                                    },
                                    sourceSkill: 'c_suxing',
                                },
                                su1: {
                                    charlotte: true,
                                    trigger: {
                                        player: 'phaseJudgeBegin',
                                    },
                                    content() {
                                        'step 0';
                                        if (player.hasSkill('c_suxing_su')) {
                                            player.addTempSkill('c_suxing_target');
                                            player.addTempSkill('c_suxing_damage');
                                            event.finish();
                                        } else {
                                            player.judge(function (card) {
                                                return get.color(card) == 'red' ? 1.5 : 2.5;
                                            }).judge2 = function (result) {
                                                return result.bool;
                                            };
                                        }
                                        ('step 1');
                                        if (result.bool) {
                                            switch (result.color) {
                                                case 'red': {
                                                    player.addTempSkill('c_suxing_target');
                                                    break;
                                                }
                                                case 'black': {
                                                    player.addTempSkill('c_suxing_damage');
                                                    break;
                                                }
                                            }
                                        }
                                    },
                                    sourceSkill: 'c_suxing',
                                },
                                target: {
                                    forced: true,
                                    trigger: {
                                        player: 'useCard2',
                                    },
                                    filter(event, player) {
                                        var info = get.info(event.card);
                                        if (info.allowMultiple == false) return false;
                                        if (info.type == 'equip') return false;
                                        if (info.type == 'delay') return false;
                                        if (['shan', 'wuxie'].includes(event.card.name)) return false;
                                        return game.hasPlayer(function (current) {
                                            return !event.targets.includes(current) && lib.filter.targetEnabled2(event.card, player, current);
                                        });
                                    },
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget(get.prompt2('c_suxing_su1'), [1, game.roundNumber], function (card, player, target) {
                                                var trigger = _status.event.getTrigger();
                                                return !trigger.targets.includes(target) && lib.filter.targetEnabled2(trigger.card, player, target);
                                            })
                                            .set('ai', function (target) {
                                                var player = _status.event.player;
                                                return get.effect(target, _status.event.getTrigger().card, player, player);
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            event.targets = result.targets.sortBySeat();
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        trigger.targets.addArray(event.targets);
                                    },
                                    sourceSkill: 'c_suxing',
                                },
                                damage: {
                                    silent: true,
                                    forced: true,
                                    charlotte: true,
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    filter(event, player) {
                                        return game.roundNumber > 0;
                                    },
                                    content() {
                                        trigger.num += game.roundNumber;
                                        trigger._triggered = null;
                                    },
                                    popup: false,
                                    sourceSkill: 'c_suxing',
                                    _priority: 1,
                                },
                                su2: {
                                    charlotte: true,
                                    trigger: {
                                        source: 'damageSource',
                                    },
                                    filter(event, player) {
                                        return event.player != player && event.player.isAlive();
                                    },
                                    content() {
                                        'step 0';
                                        if (player.hasSkill('c_suxing_su')) {
                                            trigger.player.turnOver();
                                            if (trigger.player.countGainableCards(player, 'he')) {
                                                player.gainPlayerCard(trigger.player, 'he', true);
                                            }
                                            event.finish();
                                        } else {
                                            trigger.player.judge(function (card) {
                                                return get.color(card) == 'red' ? 1.5 : 2.5;
                                            }).judge2 = function (result) {
                                                return result.bool;
                                            };
                                        }
                                        ('step 1');
                                        if (result.bool) {
                                            switch (result.color) {
                                                case 'red': {
                                                    if (trigger.player.countGainableCards(player, 'he')) {
                                                        player.gainPlayerCard(trigger.player, 'he', true);
                                                    }
                                                    break;
                                                }
                                                case 'black': {
                                                    trigger.player.turnOver();
                                                    break;
                                                }
                                            }
                                        }
                                    },
                                    sourceSkill: 'c_suxing',
                                },
                                xing: {
                                    forced: true,
                                    trigger: {
                                        global: 'phaseBegin',
                                        player: 'damageEnd',
                                    },
                                    filter(event, player) {
                                        if (event.name == 'phase') return event.player != player;
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        var cards = Array.from(ui.ordering.childNodes);
                                        while (cards.length) {
                                            cards.shift().discard();
                                        }
                                        ('step 1');
                                        if (event.name == 'damage') {
                                            const evt = _status.event.getParent('phase', true);
                                            if (evt) {
                                                evt.finish();
                                            }
                                        }
                                        ('step 2');
                                        player.draw(2);
                                        player.phaseUse();
                                    },
                                    sourceSkill: 'c_suxing',
                                },
                                xing0: {
                                    forced: true,
                                    trigger: {
                                        target: 'useCardToTarget',
                                    },
                                    filter(event, player) {
                                        return get.is.converted(event);
                                    },
                                    content() {
                                        trigger.parent.excluded.add(player);
                                        var card = get.cardPile2((card) => card.name == trigger.card.name);
                                        if (card) player.gain(card, 'gain2');
                                    },
                                    ai: {
                                        effect: {
                                            target(card, player, target, current) {
                                                if (!card.isCard) return 'zerotarget';
                                            },
                                        },
                                    },
                                    sourceSkill: 'c_suxing',
                                },
                                xing1: {
                                    usable: 1,
                                    trigger: {
                                        global: 'useCard',
                                    },
                                    filter(event, player) {
                                        return event.player != player && event.targets.length == 1 && event.targets[0] == player && get.tag(event.card, 'damage');
                                    },
                                    check(event, player) {
                                        return -get.attitude(player, event.player);
                                    },
                                    logTarget: 'player',
                                    content() {
                                        trigger.targets[0] = trigger.player;
                                        trigger.player = player;
                                    },
                                    sourceSkill: 'c_suxing',
                                },
                                xing2: {
                                    mod: {
                                        targetInRange: () => true,
                                    },
                                    forced: true,
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    filter(event, player) {
                                        return get.type2(event.card) == 'trick';
                                    },
                                    content() {
                                        player.draw();
                                    },
                                    ai: {
                                        threaten: 1.4,
                                        noautowuxie: true,
                                    },
                                    sourceSkill: 'c_suxing',
                                },
                                xing3: {
                                    forced: true,
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    filter(event, player) {
                                        return get.cardPile2((card) => get.type(card) == 'equip');
                                    },
                                    content() {
                                        'step 0';
                                        var list = [];
                                        ui.cardPile.childNodes.forEach(function (card) {
                                            if (get.type(card) == 'equip') list.push(card);
                                        });
                                        player.chooseButton([get.prompt2(event.name), list]).set('ai', function (button) {
                                            return 5 - get.value(button.link);
                                        });
                                        ('step 1');
                                        if (result.bool) {
                                            player.equip(result.links[0]);
                                        }
                                    },
                                    sourceSkill: 'c_suxing',
                                },
                                xing4: {
                                    forced: true,
                                    trigger: {
                                        player: ['useCard', 'respond'],
                                    },
                                    filter(event, player) {
                                        return get.color(event.card) == 'red';
                                    },
                                    content() {
                                        player.draw();
                                    },
                                    ai: {
                                        effect: {
                                            player(card, player, target) {
                                                if (get.color(card) == 'red') return [1, 1];
                                            },
                                        },
                                    },
                                    sourceSkill: 'c_suxing',
                                },
                                xing5: {
                                    forced: true,
                                    trigger: {
                                        player: ['loseHpBegin', 'loseMaxHpBegin'],
                                    },
                                    content() {
                                        trigger.cancel();
                                    },
                                    ai: {
                                        effect: {
                                            target(card, player, target, current) {
                                                if (player.hasSkillTag('jueqing')) return 'zerotarget';
                                            },
                                        },
                                    },
                                    sourceSkill: 'c_suxing',
                                },
                                xing6: {
                                    mod: {
                                        targetEnabled(card, player, target, now) {
                                            if (card.name == 'shunshou' || get.type(card) == 'delay') return false;
                                        },
                                    },
                                    sourceSkill: 'c_suxing',
                                },
                            },
                        },
                        c_qiqing: {
                            audio: 'ext:eclipse/audio:2',
                            Supercharlotte: true,
                            charlotte: true,
                            fixed: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filterSkill(player) {
                                var emoji = ['c_qiqing_xi', 'c_qiqing_nu', 'c_qiqing_you', 'c_qiqing_si', 'c_qiqing_bei', 'c_qiqing_kong', 'c_qiqing_jing'];
                                var skills = [];
                                emoji.forEach(function (skill) {
                                    if (player.hasSkill(skill)) skills.push(skill);
                                });
                                return skills;
                            },
                            content() {
                                'step 0';
                                event.emoji = ['c_qiqing_xi', 'c_qiqing_nu', 'c_qiqing_you', 'c_qiqing_si', 'c_qiqing_bei', 'c_qiqing_kong', 'c_qiqing_jing'];
                                ('step 1');
                                event.emotion = event.emoji.shift();
                                event.target = game.findPlayer((current) => current.hasSkill(event.emotion));
                                player
                                    .chooseTarget('【' + get.translation(event.name) + '】', '是否将' + get.translation(event.target) + '的〖' + get.translation(event.emotion) + '〗转移给其他角色？')
                                    .set('filterTarget', function (card, player, target) {
                                        return !target.hasSkill(event.emotion);
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        var buff = ['c_qiqing_xi', 'c_qiqing_nu', 'c_qiqing_si', 'c_qiqing_bei', 'c_qiqing_kong'];
                                        var debuff = ['c_qiqing_you', 'c_qiqing_jing'];
                                        var length = buff.filter((skill) => target.hasSkill(skill)).length;
                                        var bool = buff.includes(event.emotion);
                                        if (!length && bool) return get.attitude(player, target) > 1;
                                        if (length && bool) return get.attitude(player, target) > 2;
                                        return -get.attitude(player, target);
                                    });
                                ('step 2');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    var targets = [event.target, target];
                                    player.line2(targets);
                                    event.target.removeSkill(event.emotion);
                                    target.addSkill(event.emotion);
                                }
                                ('step 3');
                                if (event.emoji.length) event.goto(1);
                            },
                            group: 'c_qiqing_begin',
                            subSkill: {
                                begin: {
                                    audio: 'ext:eclipse/audio:2',
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
                                        event.emoji = ['c_qiqing_xi', 'c_qiqing_nu', 'c_qiqing_you', 'c_qiqing_si', 'c_qiqing_bei', 'c_qiqing_kong', 'c_qiqing_jing'];
                                        ('step 1');
                                        event.emotion = event.emoji.shift();
                                        player.chooseTarget('【' + get.translation(event.name) + '】', '令一名角色获得〖' + get.translation(event.emotion) + '〗', true).set('ai', function (target) {
                                            var player = _status.event.player;
                                            var buff = ['c_qiqing_xi', 'c_qiqing_nu', 'c_qiqing_si', 'c_qiqing_bei', 'c_qiqing_kong'];
                                            var debuff = ['c_qiqing_you', 'c_qiqing_jing'];
                                            var length = buff.filter((skill) => target.hasSkill(skill)).length;
                                            var bool = buff.includes(event.emotion);
                                            if (!length && bool) return get.attitude(player, target) > 1;
                                            if (length && bool) return get.attitude(player, target) > 2;
                                            return -get.attitude(player, target);
                                        });
                                        ('step 2');
                                        var target = result.targets[0];
                                        player.line(target);
                                        target.addSkill(event.emotion);
                                        ('step 3');
                                        if (event.emoji.length) event.goto(1);
                                    },
                                    sourceSkill: 'c_qiqing',
                                },
                            },
                        },
                        c_qiqing_xi: {
                            forced: true,
                            charlotte: true,
                            trigger: {
                                player: 'drawAfter',
                            },
                            filter(event, player) {
                                return event.parent.name != 'c_qiqing_xi';
                            },
                            content() {
                                var effect = [1, 2, 3].randomGet();
                                switch (effect) {
                                    case 1: {
                                        player.draw(2);
                                        break;
                                    }
                                    case 2: {
                                        player.changeHujia();
                                        break;
                                    }
                                    case 3: {
                                        if (player.canMoveCard(true)) {
                                            player.moveCard(true);
                                        }
                                        break;
                                    }
                                }
                            },
                            mark: true,
                            intro: {
                                content: '锁定技,当你摸牌时,你随机执行一下一项1.额外摸1张牌(不再触发此技能)/2.获得一点护甲3.移动场上的一张牌',
                            },
                        },
                        c_qiqing_nu: {
                            charlotte: true,
                            trigger: {
                                player: 'useCardToPlayer',
                            },
                            filter(event, player) {
                                return get.tag(event.card, 'damage') && event.parent.triggeredTargets1.length == 1;
                            },
                            logTarget: 'targets',
                            content() {
                                trigger.directHit.addArray(trigger.targets);
                                trigger.parent.baseDamage += Math.ceil(trigger.target.maxHp / 3);
                            },
                            mark: true,
                            intro: {
                                content: '当你使用伤害类牌指定其它角色时你可令此牌不可被响应且伤害+目标体力上限值的1/3(向上取整)',
                            },
                        },
                        c_qiqing_you: {
                            forced: true,
                            charlotte: true,
                            trigger: {
                                player: 'loseAfter',
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                            },
                            filter(event, player) {
                                if (event.getParent(3).name == 'c_qiqing_you') return false;
                                var evt = event.getl(player);
                                return evt && evt.cards2 && evt.cards2.length;
                            },
                            content() {
                                var num = trigger.getl(player).cards2.length;
                                var debuff = 0;
                                while (num-- > 0) {
                                    var odds = [0, 1].randomGet();
                                    if (odds) debuff++;
                                }
                                if (debuff > 0) {
                                    var discard = player.countCards('h', (card) => lib.filter.cardDiscardable(card, player));
                                    var loseHp = debuff - discard;
                                    player.chooseToDiscard(debuff, 'h', true);
                                    if (loseHp > 0) player.loseMaxHp(loseHp);
                                }
                            },
                            mark: true,
                            intro: {
                                content: '锁定技,每当你失去一张牌时,有50％概率额外弃置一手牌张,若无牌,则失去一点体力上限',
                            },
                        },
                        c_qiqing_si: {
                            charlotte: true,
                            trigger: {
                                target: 'useCardToTarget',
                            },
                            filter(event, player) {
                                return !event.cards.length;
                            },
                            logTarget: 'player',
                            content() {
                                player.draw();
                                trigger.parent.excluded.add(player);
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (!card.isCard) return 'zerotarget';
                                    },
                                },
                            },
                            mark: true,
                            intro: {
                                content: '当你成为虚拟牌的目标时,你可以摸一张牌并取消之',
                            },
                        },
                        c_qiqing_bei: {
                            charlotte: true,
                            trigger: {
                                player: ['damageBegin2', 'loseHpBegin', 'loseMaxHpBegin'],
                            },
                            content() {
                                'step 0';
                                event.list = game.filterPlayer((current) => current != player).sortBySeat();
                                ('step 1');
                                event.target = event.list.shift();
                                event.target.chooseCard('he', '是否交给' + get.translation(player) + '一张装备牌？', { type: 'equip' }).set('ai', function (card) {
                                    if (-get.attitude(event.target, player)) return get.value(card) - player.hp;
                                    return false;
                                });
                                ('step 2');
                                if (result.bool) {
                                    player.gain(result.cards, event.target, 'giveAuto');
                                    if (event.list.length) event.goto(1);
                                } else {
                                    game.log(player, '防止了此次', trigger.name == 'damage' ? '#y伤害' : '#y体力流失');
                                    trigger.cancel();
                                }
                            },
                            mark: true,
                            intro: {
                                content: '当你受到伤害或者失去体力时可令其它所有角色依次交给你一张装备牌,否则取消这次伤害或流失体力',
                            },
                        },
                        c_qiqing_kong: {
                            forced: true,
                            charlotte: true,
                            trigger: {
                                global: ['phaseBefore', 'loseMaxHpBegin'],
                                player: ['enterGame', 'phaseBegin'],
                            },
                            filter(event, player, name) {
                                if (['phaseBegin', 'loseMaxHpBegin'].includes(name)) return true;
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            content() {
                                var source = game.findPlayer((current) => current.hasSkill('c_qiqing'));
                                game.filterPlayer((current) => ![player, source].includes(current)).forEach((target) => target.addMark('c_qiqing_kong2', 1));
                            },
                            mark: true,
                            intro: {
                                content: '游戏开始前/你的回合开始前/场上有角色的体力上限减少时你为其他所有角色(不包括阿赖耶识)增加一个<恐>标记(可叠加).当你(或阿赖耶识)对有<恐>标记的造成伤害时,移去其所有的恐,令其失去至多x个技能x回合(x为移去的).当一名其它角色(不包括阿赖耶识)回复体力时,其移去一个恐标记,改为失去一点体力',
                            },
                            group: ['c_qiqing_kong_damage', 'c_qiqing_kong_recover'],
                            subSkill: {
                                damage: {
                                    forced: true,
                                    charlotte: true,
                                    trigger: {
                                        global: 'damageBegin3',
                                    },
                                    filter(event, player) {
                                        var source = game.findPlayer((current) => current.hasSkill('c_qiqing'));
                                        return event.player.hasMark('c_qiqing_kong2') && [player, source].includes(event.source);
                                    },
                                    content() {
                                        'step 0';
                                        event.num = trigger.player.countMark('c_qiqing_kong2');
                                        trigger.player.removeMark('c_qiqing_kong2', event.num);
                                        ('step 1');
                                        var target = trigger.player;
                                        var lockList = target
                                            .getSkills(true, false)
                                            .filter((skill) => !get.info(skill).charlotte)
                                            .randomGets(event.num);
                                        if (!target.storage.c_qiqing_fengyin) target.storage.c_qiqing_fengyin = [];
                                        if (lockList) target.storage.c_qiqing_fengyin.addArray(lockList);
                                        if (!target.storage.c_qiqing_remove) target.storage.c_qiqing_remove = 0;
                                        target.storage.c_qiqing_remove += event.num;
                                        if (target.hasSkill('c_qiqing_kong_fengyin')) target.removeSkill('c_qiqing_kong_fengyin');
                                        target.addSkill('c_qiqing_kong_fengyin');
                                    },
                                    sourceSkill: 'c_qiqing_kong',
                                },
                                recover: {
                                    forced: true,
                                    charlotte: true,
                                    trigger: {
                                        global: 'recoverBegin',
                                    },
                                    filter(event, player) {
                                        return event.player.hasMark('c_qiqing_kong2') && event.num > 0;
                                    },
                                    content() {
                                        trigger.player.removeMark('c_qiqing_kong2', 1);
                                        trigger.cancel();
                                        trigger.player.loseHp();
                                    },
                                    sourceSkill: 'c_qiqing_kong',
                                },
                                fengyin: {
                                    init(player, skill) {
                                        player.disableSkill(skill, player.storage.c_qiqing_fengyin);
                                    },
                                    onremove(player, skill) {
                                        player.enableSkill(skill);
                                    },
                                    silent: true,
                                    forced: true,
                                    charlotte: true,
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.c_qiqing_remove--;
                                        ('step 1');
                                        if (!player.storage.c_qiqing_remove) player.removeSkill(event.name);
                                    },
                                    mark: true,
                                    intro: {
                                        markcount: (storage, player) => player.storage.c_qiqing_remove,
                                        content(storage, player, skill) {
                                            var list = [];
                                            for (var i in player.disabledSkills) {
                                                if (player.disabledSkills[i].includes(skill)) list.push(i);
                                            }
                                            if (list.length) {
                                                var str = '失效技能:';
                                                for (let i = 0; i < list.length; i++) {
                                                    if (lib.translate[list[i] + '_info']) str += get.translation(list[i]) + '、';
                                                }
                                                return str.slice(0, str.length - 1);
                                            }
                                        },
                                    },
                                    popup: false,
                                    sourceSkill: 'c_qiqing_kong',
                                    _priority: 1,
                                },
                            },
                        },
                        c_qiqing_kong2: {
                            intro: {
                                content: 'mark',
                            },
                        },
                        c_qiqing_jing: {
                            forced: true,
                            charlotte: true,
                            trigger: {
                                global: 'useCard2',
                            },
                            filter(event, player) {
                                return event.player != player && event.card.name == 'sha' && !event.targets.includes(player);
                            },
                            content() {
                                'step 0';
                                trigger.player.chooseBool('是否令' + get.translation(player) + '也成为' + get.translation(trigger.card) + '的目标？').set('ai', function () {
                                    return get.effect(player, trigger.card, trigger.player, player);
                                });
                                ('step 1');
                                if (result.bool) {
                                    trigger.player.line(player, get.nature(trigger.card));
                                    trigger.targets.add(player);
                                }
                            },
                            group: ['c_qiqing_jing_addCount', 'c_qiqing_jing_draw'],
                            subSkill: {
                                addCount: {
                                    forced: true,
                                    firstDo: true,
                                    charlotte: true,
                                    trigger: {
                                        global: 'useCard1',
                                    },
                                    filter(event, player) {
                                        return event.player != player && event.card.name == 'sha' && event.targets.includes(player) && event.addCount !== false;
                                    },
                                    content() {
                                        trigger.addCount = false;
                                        if (trigger.player.stat[trigger.player.stat.length - 1].card.sha > 0) {
                                            trigger.player.stat[trigger.player.stat.length - 1].card.sha--;
                                        }
                                    },
                                    sourceSkill: 'c_qiqing_jing',
                                },
                                draw: {
                                    init: (player, skill) => (player.storage[skill] = 0),
                                    forced: true,
                                    charlotte: true,
                                    trigger: {
                                        target: 'useCardToTarget',
                                    },
                                    filter(event, player) {
                                        return event.targets && event.targets.length == 1;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage[event.name]++;
                                        ('step 1');
                                        if (player.storage[event.name] % 2 == 0) {
                                            var source = game.findPlayer((current) => current.hasSkill('c_qiqing'));
                                            if (source) {
                                                source.draw();
                                            }
                                        }
                                    },
                                    sourceSkill: 'c_qiqing_jing',
                                },
                            },
                            mark: true,
                            intro: {
                                content: '锁定技,当其它角色使用杀时可以指定能你成为额外目标/当其它角色对你使用杀时,不计入使用次数.每当你第5n次(n为正整数)成为一张牌的唯一目标时,阿赖耶识摸一张牌',
                            },
                        },
                        c_xingyun: {
                            audio: 'ext:eclipse/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget: true,
                            content() {
                                'step 0';
                                player.chooseControlList('令' + get.translation(target) + '执行一项', ['手牌上限减少为0', '清空所有标记', '将体力上限减少至与体力值相等'], true).set('ai', function () {
                                    if (get.attitude(player, target) > 0 && target.node.marks.childNodes.length > 2) return 1;
                                    if (!target.hasSkill('c_xingyun_limit')) return 0;
                                    return 2;
                                });
                                ('step 1');
                                if (result.control) {
                                    game.log(player, '选择了', '#g【星陨】', '的', '#y选项' + get.cnNumber(result.index + 1));
                                    switch (result.index) {
                                        case 0: {
                                            target.addSkill('c_xingyun_limit');
                                            break;
                                        }
                                        case 1: {
                                            lib.skill[event.name].clearMark(target);
                                            break;
                                        }
                                        case 2: {
                                            if (target.isDamaged()) {
                                                target.loseMaxHp(target.getDamagedHp());
                                            }
                                            break;
                                        }
                                    }
                                }
                            },
                            clearMark(player) {
                                'step 0';
                                var skills = player.getSkills(null, false);
                                for (var skill of skills) {
                                    var info = get.info(skill);
                                    if (info.mark || info.marktext || info.intro) {
                                        if (!game.expandSkills(player.getOriginalSkills()).includes(skill)) {
                                            player.removeSkill(skill);
                                        }
                                    }
                                }
                                ('step 1');
                                while (player.node.marks.childNodes.length > 1) {
                                    player.node.marks.lastChild.remove();
                                }
                                ('step 2');
                                for (var mark in player.marks) {
                                    var info = get.info(mark);
                                    if (info.equipSkill || info.limited || info.zhuanhuanji || mark == 'renku') continue;
                                    var datatype = Object.prototype.toString.call(player.storage[mark]);
                                    if (datatype.includes('Object')) player.storage[mark] = {};
                                    if (datatype.includes('Array')) player.storage[mark] = [];
                                    if (datatype.includes('Number')) player.storage[mark] = 0;
                                    if (player.countCards('xs')) player.loseToDiscardpile(player.getCards('xs'));
                                    player.unmarkSkill(mark);
                                }
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target(player, target) {
                                        if (get.attitude(player, target) > 0) return target.node.marks.childNodes.length > 2;
                                        return -2;
                                    },
                                },
                            },
                            subSkill: {
                                limit: {
                                    mod: {
                                        maxHandcardFinal: () => 0,
                                    },
                                    charlotte: true,
                                    mark: true,
                                    intro: {
                                        content: '手牌上限为0',
                                    },
                                    sourceSkill: 'c_xingyun',
                                },
                            },
                        },
                        c_yunxing: {
                            audio: 'ext:eclipse/audio:2',
                            forced: true,
                            trigger: {
                                global: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return event.player != player && !event.player.hasSkill('c_zhengni');
                            },
                            logTarget: 'player',
                            content() {
                                switch ([1, 2, 3].randomGet()) {
                                    case 1: {
                                        player.gain(trigger.player.getCards('h'), trigger.player, 'giveAuto');
                                        trigger.player.turnOver();
                                        break;
                                    }
                                    case 2: {
                                        trigger.player.forcemin = true;
                                        break;
                                    }
                                    case 3: {
                                        player.phaseDraw();
                                        player.phaseUse();
                                        break;
                                    }
                                }
                            },
                        },
                        c_yunsheng: {
                            audio: 'ext:eclipse/audio:2',
                            forced: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filter(event, player) {
                                return game.hasPlayer((current) => current.hp >= player.hp);
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget([1, Infinity], get.prompt2(event.name), function (card, player, target) {
                                        return target.hp >= player.hp;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(player, target) > 2 || (_status.c_zhengni && _status.c_zhengni.includes(target));
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var targets = result.targets.sortBySeat();
                                    targets.forEach(function (target) {
                                        var num = target.getDamagedHp();
                                        target.recover(num);
                                        target.draw(Math.max(1, 4 - num));
                                    });
                                }
                            },
                        },
                        c_yunsi: {
                            audio: 'ext:eclipse/audio:2',
                            forced: true,
                            trigger: {
                                global: 'phaseBegin',
                            },
                            filter(event, player) {
                                return event.player != player && game.hasPlayer((current) => current.hp < player.hp);
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget([1, Infinity], get.prompt2(event.name), function (card, player, target) {
                                        return target.hp < player.hp;
                                    })
                                    .set('ai', function (target) {
                                        if (target.hasSkill('c_zhengni')) return false;
                                        return -get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var targets = result.targets.sortBySeat();
                                    targets.forEach(function (target) {
                                        var num = player.getDamagedHp();
                                        target.damage(Math.max(1, num + 4))._triggered = null;
                                    });
                                }
                            },
                            group: 'c_yunsi_effect',
                            subSkill: {
                                effect: {
                                    audio: 'ext:eclipse/audio:2',
                                    trigger: {
                                        global: 'changeHp',
                                    },
                                    filter(event, player) {
                                        return event.player != player && event.player.hp == 1;
                                    },
                                    check(event, player) {
                                        if (event.player.hasSkill('c_zhengni')) return false;
                                        return -get.attitude(player, event.player);
                                    },
                                    logTarget: 'player',
                                    prompt2: '令其失去所有技能并立即死亡',
                                    content() {
                                        'step 0';
                                        trigger.player.clearSkills();
                                        ('step 1');
                                        trigger.player.die();
                                    },
                                    dying() {
                                        'step 0';
                                        event.forceDie = true;
                                        event.ori = player.hp;
                                        if (player.isDying()) {
                                            event.finish();
                                            return;
                                        }
                                        _status.dying.unshift(player);
                                        game.broadcast(function (list) {
                                            _status.dying = list;
                                        }, _status.dying);
                                        event.trigger('dying');
                                        game.log(player, '濒死');
                                        ('step 1');
                                        if (player.hp > event.ori) {
                                            _status.dying.remove(player);
                                            game.broadcast(function (list) {
                                                _status.dying = list;
                                            }, _status.dying);
                                            event.finish();
                                        } else if (!event.skipTao) {
                                            var next = game.createEvent('_save');
                                            var start = false;
                                            var starts = [_status.currentPhase, event.source, event.player, game.me, game.players[0]];
                                            for (let i = 0; i < starts.length; i++) {
                                                if (get.itemtype(starts[i]) == 'player') {
                                                    start = starts[i];
                                                    break;
                                                }
                                            }
                                            next.player = start;
                                            next._trigger = event;
                                            next.triggername = '_save';
                                            next.ori = event.ori;
                                            next.forceDie = true;
                                            next.setContent(lib.skill.c_yunsi_effect.save);
                                        }
                                        ('step 2');
                                        _status.dying.remove(player);
                                        game.broadcast(function (list) {
                                            _status.dying = list;
                                        }, _status.dying);
                                        if (player.hp <= event.ori && !player.nodying) player.die(event.reason);
                                    },
                                    save() {
                                        'step 0';
                                        event.dying = trigger.player;
                                        if (!event.acted) event.acted = [];
                                        ('step 1');
                                        if (trigger.player.isDead()) {
                                            event.finish();
                                            return;
                                        }
                                        event.acted.push(player);
                                        var str = get.translation(trigger.player) + '濒死,是否帮助？';
                                        var str2 = '当前体力:' + trigger.player.hp;
                                        if (lib.config.tao_enemy && event.dying.side != player.side && lib.config.mode != 'identity' && lib.config.mode != 'guozhan' && !event.dying.hasSkillTag('revertsave')) {
                                            event._result = {
                                                bool: false,
                                            };
                                        } else if (player.canSave(event.dying)) {
                                            player.chooseToUse({
                                                filterCard(card, player, event) {
                                                    event = event || _status.event;
                                                    return lib.filter.cardSavable(card, player, event.dying);
                                                },
                                                filterTarget: trigger.player,
                                                prompt: str,
                                                prompt2: str2,
                                                ai1(card) {
                                                    if (typeof card == 'string') {
                                                        var info = get.info(card);
                                                        if (info.ai && info.ai.order) {
                                                            if (typeof info.ai.order == 'number') {
                                                                return info.ai.order;
                                                            } else if (typeof info.ai.order == 'function') {
                                                                return info.ai.order();
                                                            }
                                                        }
                                                    }
                                                    return 1;
                                                },
                                                ai2: get.effect_use,
                                                type: 'dying',
                                                targetRequired: true,
                                                dying: event.dying,
                                            });
                                        } else {
                                            event._result = {
                                                bool: false,
                                            };
                                        }
                                        ('step 2');
                                        if (result.bool) {
                                            if (trigger.player.hp <= event.ori && !trigger.player.nodying && trigger.player.isAlive() && !trigger.player.isOut() && !trigger.player.removed) event.goto(0);
                                            else trigger.untrigger();
                                        } else {
                                            for (let i = 0; i < 20; i++) {
                                                if (event.acted.includes(event.player.next)) {
                                                    break;
                                                } else {
                                                    event.player = event.player.next;
                                                    if (!event.player.isOut()) {
                                                        event.goto(1);
                                                        break;
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    sourceSkill: 'c_yunsi',
                                },
                            },
                        },
                        c_shenyu: {
                            init(player) {
                                const skills = lib.character[player.name].skills.slice();
                                game.expandSkills(skills);
                                for (const skill of skills) {
                                    const info = lib.skill[skill];
                                    if (info) {
                                        info.fixed = true;
                                        info.charlotte = true;
                                        info.superCharlotte = true;
                                    }
                                }
                            },//QQQ
                            audio: 'ext:eclipse/audio:2',
                            firstDo: true,
                            trigger: {
                                global: 'judgeBefore',
                            },
                            _priority: 2,
                            logTarget: 'player',
                            content() {
                                'step 0';
                                var card = ui.cardPile.hasChildNodes() ? ui.cardPile.firstChild : get.cards(1);
                                event.card = card;
                                game.cardsGotoOrdering(event.card);
                                var judge0 = trigger.judge(card);
                                var judge1 = 0;
                                var choice = event.card.number;
                                event.suitchoice = event.card.suit;
                                var attitude = get.attitude(player, trigger.player);
                                var str = '是否更改' + get.translation(trigger.player) + '的判定结果？';
                                if (player.isUnderControl()) {
                                    game.swapPlayerAuto(player);
                                }
                                event.switchToAuto = function () {
                                    _status.imchoosing = false;
                                    event.suitx = ['diamond', 'heart', 'club', 'spade'];
                                    for (let i = 0; i < 4; i++) {
                                        for (var j = 1; j < 14; j++) {
                                            var judge2 =
                                                (trigger.judge({
                                                    suit: event.suitx[i],
                                                    number: j,
                                                }) -
                                                    judge0) *
                                                attitude;
                                            if (judge2 > judge1) {
                                                choice = j;
                                                event.suitchoice = event.suitx[i];
                                                judge1 = judge2;
                                                if (judge2 > 0) break;
                                            }
                                        }
                                    }
                                    event._result = {
                                        suit: event.suitchoice,
                                        number: choice,
                                        bool: true,
                                    };
                                    if (event.dialog) event.dialog.close();
                                    if (event.control) event.control.close();
                                    game.resume();
                                    _status.imchoosing = false;
                                };
                                var chooseButton = function (player, str) {
                                    var event = _status.event;
                                    player = player || event.player;
                                    if (!event._result) event._result = {};
                                    var dialog = ui.create.dialog(str, [event.card], 'forcebutton', 'hidden');
                                    event.dialog = dialog;
                                    dialog.addText('花色');
                                    var table = ui.create.div(
                                        '.add-setting',
                                        {
                                            margin: 0,
                                            width: '100%',
                                            position: 'relative',
                                        },
                                        dialog.content
                                    );
                                    var listi = ['spade', 'heart', 'club', 'diamond'];
                                    for (let i = 0; i < listi.length; i++) {
                                        var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                                        td.link = listi[i];
                                        table.appendChild(td);
                                        td.innerHTML = '<span>' + get.translation(listi[i]) + '</span>';
                                        td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                            if (_status.dragged) return;
                                            if (_status.justdragged) return;
                                            _status.tempNoButton = true;
                                            setTimeout(function () {
                                                _status.tempNoButton = false;
                                            }, 500);
                                            var link = this.link;
                                            if (this.classList.contains('bluebg')) {
                                                this.classList.remove('bluebg');
                                                delete event._result.suit;
                                            } else {
                                                var current = this.parentNode.querySelector('.bluebg');
                                                if (current) current.classList.remove('bluebg');
                                                this.classList.add('bluebg');
                                                event._result.suit = link;
                                            }
                                        });
                                    }
                                    dialog.addText('点数');
                                    table = ui.create.div(
                                        '.add-setting',
                                        {
                                            margin: 0,
                                            width: '100%',
                                            position: 'relative',
                                        },
                                        dialog.content
                                    );
                                    for (let i = 1; i < 14; i++) {
                                        var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode', table);
                                        td.link = i;
                                        var num = i;
                                        td.innerHTML = '<span>' + get.strNumber(num) + '</span>';
                                        td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                            if (_status.dragged) return;
                                            if (_status.justdragged) return;
                                            _status.tempNoButton = true;
                                            setTimeout(function () {
                                                _status.tempNoButton = false;
                                            }, 500);
                                            var link = this.link;
                                            if (this.classList.contains('bluebg')) {
                                                this.classList.remove('bluebg');
                                                delete event._result.number;
                                            } else {
                                                var current = this.parentNode.querySelector('.bluebg');
                                                if (current) current.classList.remove('bluebg');
                                                this.classList.add('bluebg');
                                                event._result.number = link;
                                            }
                                        });
                                    }
                                    dialog.add('　　');
                                    event.dialog.open();
                                    event.control = ui.create.control('ok', 'cancel2', function (link) {
                                        var result = event._result;
                                        if (link == 'cancel2') {
                                            event._result.number = event.card.number;
                                            event._result.suit = event.card.suit;
                                            result.bool = false;
                                        } else {
                                            if (!result.number || !result.suit) return;
                                            result.bool = true;
                                        }
                                        event.dialog.close();
                                        event.control.close();
                                        game.resume();
                                        _status.imchoosing = false;
                                    });
                                    for (let i = 0; i < event.dialog.buttons.length; i++) {
                                        event.dialog.buttons[i].classList.add('selectable');
                                    }
                                    game.pause();
                                    game.countChoose();
                                };
                                if (event.isMine()) {
                                    chooseButton(player, str);
                                } else {
                                    event.switchToAuto();
                                }
                                ('step 1');
                                if (event.dialog) event.dialog.close();
                                if (event.control) event.control.close();
                                event.resultx = result;
                                ('step 2');
                                Object.assign(result, event.resultx);
                                player.line(trigger.player, 'thunder');
                                trigger.fixedResult = {
                                    name: event.card.name,
                                    suit: result.suit,
                                    color: get.color({ suit: result.suit }),
                                    number: result.number,
                                };
                                var card = game.createCard2(trigger.fixedResult),
                                    node;
                                if (game.chess) {
                                    node = card.copy('thrown', 'center', ui.arena).addTempClass('start');
                                } else {
                                    node = player.$throwordered(card.copy(), true);
                                }
                                node.classList.add('thrownhighlight');
                                ui.arena.classList.add('thrownhighlight');
                                game.log(player, '将判定结果修改为了', '#g', card);
                                Object.assign(trigger.fixedResult, {
                                    card: card,
                                    node: node,
                                    judge: trigger.judge(card),
                                });
                                if (trigger.player.judging.length) Object.assign(trigger.player.judging[0], trigger.fixedResult);
                                player.popup(get.translation(result.suit) + get.strNumber(result.number), 'thunder');
                                if (!trigger.result) trigger.result = {};
                                Object.assign(trigger.result, trigger.fixedResult);
                                trigger.noJudgeTrigger = true;
                                trigger.direct = true;
                                trigger.cancel();
                                if (trigger.result.judge > 0) {
                                    trigger.result.bool = true;
                                    trigger.player.popup('洗具');
                                }
                                if (trigger.result.judge < 0) {
                                    trigger.result.bool = false;
                                    trigger.player.popup('杯具');
                                }
                                game.log(trigger.player, '的判定结果为', card);
                                trigger.position.appendChild(card);
                                ('step 3');
                                ui.arena.classList.remove('thrownhighlight');
                                game.addVideo('judge2', null, event.videoId);
                                ui.clear();
                                var card = trigger.result.card;
                                trigger.position.appendChild(card);
                                trigger.result.node.delete();
                                get.position(card, true) == 'o' ? game.cardsGotoSpecial(card) : game.cardsGotoSpecial(event.card);
                            },
                            _priority: 200,
                        },
                        c_zhengni: {
                            init: (player, skill) => (_status[skill] = []),
                            audio: 'ext:eclipse/audio:2',
                            forced: true,
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            filter(event, player) {
                                return !_status.c_zhengni.length && (event.name != 'phase' || game.phaseNumber == 0);
                            },
                            content() {
                                'step 0';
                                var fellow = game.addFellow(1 - _status[event.name].length, 'c_zheyu');
                                fellow.classList.add('minskin');
                                fellow.side = player.side;
                                fellow.master = player;
                                game.players.remove(fellow);
                                game.players.unshift(fellow);
                                game.arrangePlayers();
                                fellow.css({
                                    pointerEvents: 'auto',
                                    top: '45vh',
                                    left: '750px',
                                });
                                ui.arena.appendChild(fellow);
                                _status[event.name].add(fellow);
                                fellow.identity = player.identity;
                                if (fellow.identity === 'zhu') fellow.identity = 'mingzhong';
                                fellow.setIdentity();
                                if (get.mode() == 'doudizhu') {
                                    fellow.identity = player.identity;
                                    fellow.setIdentity('逆');
                                }
                                ('step 1');
                                var fellow = _status[event.name][0];
                                fellow.group = player.group;
                                fellow.sex = player.sex;
                                var num = game.countPlayer((current) => current.hp);
                                fellow.maxHp = num;
                                fellow.changeHp(num, false);
                                fellow.directgain(get.cards(num));
                            },
                            group: ['c_zhengni_win', 'c_zhengni_effect'],
                            subSkill: {
                                win: {
                                    fixed: true,
                                    popup: false,
                                    silent: true,
                                    forced: true,
                                    charlotte: true,
                                    superCharlotte: true,
                                    trigger: {
                                        global: ['dieBegin', 'die', 'phaseAfter'],
                                    },
                                    filter(event, player, name) {
                                        var mode = get.mode();
                                        if (!_status.c_zhengni || !_status.c_zhengni.length) return false;
                                        if (mode == 'identity') {
                                            if (name == 'dieBegin' && player.identity == 'nei') {
                                                return event.player.identity == 'zhu' && game.players.length <= 3;
                                            }
                                        } else {
                                            if (name == 'die' || name == 'phaseAfter') return player.getEnemies().length == 0;
                                        }
                                        return false;
                                    },
                                    content() {
                                        'step 0';
                                        ('step 1');
                                        if (game.showIdentity) {
                                            game.showIdentity();
                                        }
                                        if (player.isUnderControl(true) || player.getFriends().includes(game.me)) {
                                            game.over(true);
                                        } else {
                                            game.over(true);
                                        }
                                    },
                                    sourceSkill: 'c_zhengni',
                                    _priority: 1,
                                },
                                effect: {
                                    audio: 'ext:eclipse/audio:2',
                                    forced: true,
                                    trigger: {
                                        target: 'useCardToTarget',
                                        player: ['damageBegin4', 'loseHpBegin', 'loseMaxHpBegin', 'dyingBegin'],
                                    },
                                    filter(event, player, name) {
                                        var target = game.findPlayer((current) => current.name == 'c_zheyu');
                                        if (!target || !target.isAlive()) return false;
                                        if (name == 'useCardToTarget') return event.player != player && !event.targets.includes(target);
                                        return true;
                                    },
                                    content() {
                                        if (event.triggername == 'useCardToTarget') trigger.parent.excluded.add(player);
                                        else trigger.cancel();
                                    },
                                    ai: {
                                        effect: {
                                            target(card, player, target, current) {
                                                var target = game.findPlayer((current) => current.name == 'c_zheyu');
                                                if (target && target.isAlive()) return 'zerotarget';
                                            },
                                        },
                                    },
                                    sourceSkill: 'c_zhengni',
                                },
                            },
                        },
                        gm_emeng: {
                            audio: 'ext:eclipse/audio:2',
                            forced: true,
                            firstDo: true,
                            charlotte: true,
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            logTarget: (event, player) => game.filterPlayer((current) => current != player).sortBySeat(),
                            content() {
                                lib.skill[event.name].logTarget(trigger, player).forEach((target) => target.goMad({ player: 'phaseAfter' }));
                            },
                            group: 'gm_emeng_effect',
                            subSkill: {
                                effect: {
                                    audio: 'ext:eclipse/audio:2',
                                    forced: true,
                                    charlotte: true,
                                    trigger: {
                                        global: 'phaseAfter',
                                    },
                                    filter(event, player) {
                                        return event.player != player && event.player.countCards('x');
                                    },
                                    logTarget: 'player',
                                    content() {
                                        'step 0';
                                        trigger.player.goMad({ player: 'phaseAfter' });
                                        ('step 1');
                                        player.gain(trigger.player.getCards('x'), trigger.player, 'giveAuto');
                                    },
                                    sourceSkill: 'gm_emeng',
                                },
                            },
                        },
                        gm_bansheng: {
                            init(player) {
                                if (!player.getEquip('gm_mingpan')) player.maxHp = 3;
                            },
                            mod: {
                                playerEnabled(card, player, target) {
                                    if (!player.getEquip('gm_xingtu') && player != target) return false;
                                },
                            },
                            audio: 'ext:eclipse/audio:2',
                            forced: true,
                            charlotte: true,
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            content() {
                                for (var equip of ['gm_mingpan', 'gm_xingtu']) {
                                    if (!lib.inpile.includes(equip)) {
                                        lib.inpile.push(equip);
                                        var card = game.createCard2(equip, equip == 'gm_mingpan' ? 'heart' : 'spade', 13);
                                        player.equip(card);
                                    } else {
                                        var card = get.cardPile(equip);
                                        if (card) player.equip(card);
                                    }
                                }
                            },
                            group: ['gm_bansheng_unlimit', 'gm_bansheng_limit'],
                            subSkill: {
                                unlimit: {
                                    silent: true,
                                    forced: true,
                                    charlotte: true,
                                    trigger: {
                                        player: 'equipAfter',
                                    },
                                    filter(event, player) {
                                        return event.card && event.card.name == 'gm_mingpan' && player.getEquip('gm_mingpan');
                                    },
                                    content() {
                                        player.maxHp = Infinity;
                                        player.changeHp(Infinity, false)._triggered = null;
                                    },
                                    popup: false,
                                    sourceSkill: 'gm_bansheng',
                                    _priority: 1,
                                },
                                limit: {
                                    silent: true,
                                    forced: true,
                                    charlotte: true,
                                    trigger: {
                                        player: 'loseAfter',
                                        global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                                    },
                                    filter(event, player) {
                                        var evt = event.getl(player);
                                        return evt && evt.player == player && evt.es && evt.es.length && !player.getEquip('gm_mingpan');
                                    },
                                    content() {
                                        player.maxHp = 3;
                                    },
                                    popup: false,
                                    sourceSkill: 'gm_bansheng',
                                    _priority: 1,
                                },
                            },
                        },
                        gm_jiangling: {
                            audio: 'ext:eclipse/audio:2',
                            forced: true,
                            juexingji: true,
                            charlotte: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filter(event, player) {
                                return game.roundNumber >= 1 && player.getEquip('gm_mingpan') && player.getEquip('gm_xingtu');
                            },
                            content() {
                                player.awakenSkill(event.name);
                                player.addSkillLog('gm_faze');
                            },
                        },
                        gm_faze: {
                            audio: 'ext:eclipse/audio:2',
                            forced: true,
                            firstDo: true,
                            charlotte: true,
                            trigger: {
                                player: 'loseAfter',
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                            },
                            filter(event, player) {
                                if (event.name == 'lose') {
                                    if (player.equiping) return false;
                                    return event.es.some((card) => get.position(card) == 'd' && player.hasUseTarget(card));
                                }
                                if (event.name == 'equip' && event.player == player) return false;
                                var evt = event.getl(player);
                                return evt && evt.player == player && evt.es && evt.es.some((card) => player.hasUseTarget(card));
                            },
                            content() {
                                'step 0';
                                if (trigger.name == 'lose') {
                                    event.cards = trigger.es.filter((card) => get.position(card) == 'd' && player.hasUseTarget(card));
                                } else {
                                    event.cards = trigger.getl(player).es.filter((card) => player.hasUseTarget(card));
                                }
                                ('step 1');
                                if (event.cards.length) {
                                    var card = event.cards.shift();
                                    player.chooseUseTarget(card, true);
                                    event.redo();
                                }
                            },
                            group: ['gm_faze_damage', 'gm_faze_die'],
                            subSkill: {
                                damage: {
                                    audio: 'ext:eclipse/audio:2',
                                    forced: true,
                                    charlotte: true,
                                    trigger: {
                                        global: 'damageBegin1',
                                    },
                                    filter(event, player) {
                                        return event.source != player;
                                    },
                                    content() {
                                        trigger.num--;
                                    },
                                    sourceSkill: 'gm_faze',
                                },
                                die: {
                                    audio: 'ext:eclipse/audio:2',
                                    forced: true,
                                    charlotte: true,
                                    trigger: {
                                        global: ['recoverEnd', 'gainMaxHpEnd', 'useSkillEnd', 'logSkill'],
                                    },
                                    filter(event, player) {
                                        if (event.player == player) return false;
                                        if (event.name == 'recover') return event.num > 0;
                                        if (event.name == 'gainMaxHp') return true;
                                        return _status.currentPhase != event.player && !get.is.locked(event.skill);
                                    },
                                    logTarget: 'player',
                                    content() {
                                        trigger.player.die();
                                    },
                                    sourceSkill: 'gm_faze',
                                },
                            },
                        },
                        gm_mingpan_skill: {
                            equipSkill: true,
                            trigger: {
                                global: 'phaseBegin',
                            },
                            filter(event, player) {
                                return event.player != player && player.maxHp > 1;
                            },
                            logTarget: 'player',
                            check: (event, player) => -get.attitude(player, event.player),
                            content() {
                                'step 0';
                                player.loseMaxHp();
                                trigger.player.loseMaxHp();
                                ('step 1');
                                if (!trigger.player.isAlive()) event.finish();
                                event.num = 0;
                                ('step 2');
                                player.judge(function (card) {
                                    return card.number < trigger.player.maxHp;
                                }).judge2 = function (result) {
                                    return result.bool;
                                };
                                ('step 3');
                                if (result.bool) {
                                    trigger.player.addToExpansion(result.card, 'gain2').gaintag.add('gm_mingpan_cards');
                                    if (event.num < 13) {
                                        event.num++;
                                        event.goto(2);
                                    } else {
                                        trigger.player.init('sunce');
                                        event.finish();
                                    }
                                }
                            },
                            _priority: -25,
                        },
                        gm_mingpan_cards: {
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            equipSkill: true,
                            charlotte: true,
                            mark: true,
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            _priority: -25,
                        },
                        gm_xingtu_skill: {
                            init: () => (_status.cardPileLength = ui.cardPile.childElementCount),
                            forced: true,
                            equipSkill: true,
                            trigger: {
                                global: 'gainAfter',
                            },
                            content() {
                                'step 0';
                                var record = _status.cardPileLength;
                                _status.cardPileLength = ui.cardPile.childElementCount;
                                if (trigger.parent.name == 'draw' && trigger.getParent(2).name == 'phaseDraw') event.finish();
                                if (record == ui.cardPile.childElementCount) event.finish();
                                if (trigger.player == player) event.finish();
                                ('step 1');
                                var current = _status.currentPhase;
                                player.chooseBool(get.prompt2(event.name, trigger.player), '立即结束' + (current == player ? '你' : get.translation(current)) + '的回合并将' + get.translation(trigger.player) + '的所有手牌按任意顺序置于牌堆顶').set('ai', function () {
                                    return -get.attitude(player, trigger.player) && current != player;
                                });
                                ('step 2');
                                if (result.bool) {
                                    const evt = _status.event.getParent('phase', true);
                                    if (evt) {
                                        evt.finish();
                                    }
                                    var next = game.createEvent('gm_xingtu_skill_lose');
                                    next.player = player;
                                    next.target = trigger.player;
                                    next.setContent(lib.skill[event.name].effect);
                                }
                            },
                            effect() {
                                'step 0';
                                var cards = target.getCards('h');
                                var next = player.chooseToMove('调整置于牌堆顶的顺序', true);
                                next.set('list', [['第1张 <---  牌堆顶  ---> 第' + cards.length + '张', cards]]);
                                next.processAI = function (list) {
                                    var cards = list[0][1], target = target.next;//QQQ
                                    var att = get.sgn(get.attitude(player, target));
                                    const top = [], bottom = cards;
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
                                    return [top];
                                };
                                ('step 1');
                                var cards = result.moved[0];
                                while (cards.length) {
                                    target.lose(cards.pop(), ui.cardPile, 'insert')._triggered = null;
                                    target.$throw(1, 1000);
                                }
                            },
                            _priority: -25,
                        },
                        in_tansuo: {
                            enable: 'phaseUse',
                            filter(event, player) {
                                return (player.getStat('skill').in_tansuo || 0) < player.storage.qianyue + 1 && (player.getExpansions('in_renkou').length < 3 || player.getExpansions('in_dianli').length < 3 || player.getExpansions('in_ziyuan').length < 3);
                            },
                            content() {
                                'step 0';
                                var controls = [],
                                    controlsx = ['基本牌', '锦囊牌', '装备牌'];
                                if (player.getExpansions('in_renkou').length >= 3) controlsx.remove('基本牌');
                                if (player.getExpansions('in_dianli').length >= 3) controlsx.remove('锦囊牌');
                                if (player.getExpansions('in_ziyuan').length >= 3) controlsx.remove('装备牌');
                                player.chooseControl(controlsx).set('prompt', '探索<br><br><div class="text">基本牌:展示牌堆顶三张牌,将其中基本牌置于武将牌上称为【人口】.</div><br><div class="text">锦囊牌:展示牌堆顶三张牌,将其中锦囊牌置于武将牌上称为【电力】.</div><br><div class="text">装备牌牌:展示牌堆顶三张牌,将其中装备牌置于武将牌上称为【资源】.</div></br>');
                                ('step 1');
                                if (result.control == '基本牌') {
                                    event.goto(3);
                                }
                                if (result.control == '锦囊牌') {
                                    event.goto(8);
                                }
                                if (result.control == '装备牌') {
                                    event.goto(13);
                                }
                                ('step 2');
                                event.finish();
                                ('step 3');
                                event.cards = get.cards(3);
                                player.showCards(event.cards);
                                ('step 4');
                                event.cards = event.cards.filter((i) => get.type(i) == 'basic');
                                if (event.cards.length == 0) {
                                    event.finish();
                                } else {
                                    player.$gain2(event.cards);
                                }
                                ('step 5');
                                player.addToExpansion('giveAuto', event.cards, player).gaintag.add('in_renkou');
                                ('step 6');
                                if (player.getExpansions('in_renkou').length > 3) {
                                    var num = player.getExpansions('in_renkou').length - 3;
                                    player.chooseCardButton(num, true, '请选择要移除的【人口】', player.getExpansions('in_renkou'));
                                }
                                ('step 7');
                                if (result.bool) {
                                    event.cards = result.links;
                                    player.loseToDiscardpile(event.cards);
                                    player.loseHp();
                                    event.trigger('in_yunying_renkou');
                                }
                                event.finish();
                                ('step 8');
                                event.cards = get.cards(3);
                                player.showCards(event.cards);
                                ('step 9');
                                event.cards = event.cards.filter((i) => get.type2(i) == 'trick');
                                if (event.cards.length == 0) {
                                    event.finish();
                                } else {
                                    player.$gain2(event.cards);
                                }
                                ('step 10');
                                player.addToExpansion('giveAuto', event.cards, player).gaintag.add('in_dianli');
                                ('step 11');
                                if (player.getExpansions('in_dianli').length > 3) {
                                    var num = player.getExpansions('in_dianli').length - 3;
                                    player.chooseCardButton(num, true, '请选择要移除的【电力】', player.getExpansions('in_dianli'));
                                }
                                ('step 12');
                                if (result.bool) {
                                    event.cards = result.links;
                                    player.loseToDiscardpile(event.cards);
                                    player.loseHp();
                                    event.trigger('in_yunying_dianli');
                                }
                                event.finish();
                                ('step 13');
                                event.cards = get.cards(3);
                                player.showCards(event.cards);
                                ('step 14');
                                event.cards = event.cards.filter((i) => get.type2(i) == 'equip');
                                if (event.cards.length == 0) {
                                    event.finish();
                                } else {
                                    player.$gain2(event.cards);
                                }
                                ('step 15');
                                player.addToExpansion('giveAuto', event.cards, player).gaintag.add('in_ziyuan');
                                ('step 16');
                                if (player.getExpansions('in_ziyuan').length > 3) {
                                    var num = player.getExpansions('in_ziyuan').length - 3;
                                    player.chooseCardButton(num, true, '请选择要移除的【资源】', player.getExpansions('in_ziyuan'));
                                }
                                ('step 17');
                                if (result.bool) {
                                    event.cards1 = result.links[0];
                                    event.cards2 = result.links[1];
                                    event.cards3 = result.links[2];
                                    player.loseHp();
                                    player.chooseUseTarget(event.cards1).nopopup = true;
                                    if (result.links[1]) player.chooseUseTarget(event.cards2).nopopup = true;
                                    if (result.links[2]) player.chooseUseTarget(event.cards3).nopopup = true;
                                }
                                event.finish();
                            },
                            group: ['in_renkou', 'in_dianli', 'in_ziyuan'],
                        },
                        in_renkou: {
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                        },
                        in_dianli: {
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                        },
                        in_ziyuan: {
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                        },
                        in_qianyue: {
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            mark: true,
                            marktext: '迁跃',
                            intro: {
                                name2: '迁跃',
                                content: '已发动#次【迁跃】',
                            },
                            init(player) {
                                player.storage.qianyue = 0;
                            },
                            filter(event, player) {
                                return player.getExpansions('in_renkou').length && player.getExpansions('in_dianli').length && player.getExpansions('in_ziyuan').length && player.getExpansions('in_renkou').length == player.getExpansions('in_dianli').length && player.getExpansions('in_renkou').length == player.getExpansions('in_ziyuan').length && player.getExpansions('in_dianli').length == player.getExpansions('in_ziyuan').length;
                            },
                            prompt: '是否发动【迁跃】与一名其他角色交换座次？',
                            content() {
                                'step 0';
                                player.storage.qianyue++;
                                player.loseToDiscardpile(player.getExpansions('in_renkou'));
                                player.loseToDiscardpile(player.getExpansions('in_dianli'));
                                player.loseToDiscardpile(player.getExpansions('in_ziyuan'));
                                ('step 1');
                                player.chooseTarget('请选择【迁跃】的目标', '与一名其他角色交换座次,你增加一点体力上限并回复一点体力', function (card, player, target) {
                                    return target != player;
                                });
                                ('step 2');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    game.swapSeat(player, target);
                                    player.gainMaxHp();
                                    player.recover();
                                }
                            },
                        },
                        in_yunying: {
                            trigger: {
                                player: 'phaseDiscardEnd',
                            },
                            filter(event, player) {
                                return player.getExpansions('in_renkou').length || player.getExpansions('in_dianli').length || player.getExpansions('in_ziyuan').length;
                            },
                            prompt: '是否发动【运营】调整【人口】【电力】【资源】数量？',
                            content() {
                                'step 0';
                                player.storage.renkou = 0;
                                player.storage.dianli = 0;
                                player.storage.ziyuan = 0;
                                event.num = player.storage.qianyue + 1;
                                ('step 1');
                                if (event.num > 0) {
                                    if (player.storage.renkou == 0 || player.storage.dianli == 0 || player.storage.ziyuan == 0) {
                                        var controls = [],
                                            controlsx = ['人口', '电力', '资源'];
                                        if (player.storage.renkou != 0 || player.getExpansions('in_renkou').length == 0) controlsx.remove('人口');
                                        if (player.storage.dianli != 0 || player.getExpansions('in_dianli').length == 0) controlsx.remove('电力');
                                        if (player.storage.ziyuan != 0 || player.getExpansions('in_ziyuan').length == 0) controlsx.remove('资源');
                                        player.chooseControl(controlsx).set('prompt', '探索<br><br><div class="text">人口:移除至多一个【人口】.</div><br><div class="text">电力:移除一个【电力】.</div><br><div class="text">资源:移除一个【资源】.</div></br>');
                                    } else {
                                        event.finish();
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                event.num--;
                                if (result.control == '人口') {
                                    player.storage.renkou = 1;
                                    event.goto(4);
                                }
                                if (result.control == '电力') {
                                    player.storage.dianli = 1;
                                    event.goto(6);
                                }
                                if (result.control == '资源') {
                                    player.storage.ziyuan = 1;
                                    event.goto(8);
                                }
                                ('step 3');
                                event.finish();
                                ('step 4');
                                player.chooseCardButton(1, '请选择要移除的【人口】', player.getExpansions('in_renkou'));
                                ('step 5');
                                if (result.bool) {
                                    event.card = result.links[0];
                                    player.loseToDiscardpile(event.card);
                                    event.trigger('in_yunying_renkou');
                                }
                                if (player.storage.renkou == 0 || player.storage.dianli == 0 || player.storage.ziyuan == 0) {
                                    event.goto(1);
                                } else {
                                    event.finish();
                                }
                                ('step 6');
                                player.chooseCardButton(1, '请选择要移除的【电力】', player.getExpansions('in_dianli'));
                                ('step 7');
                                if (result.bool) {
                                    event.card = result.links[0];
                                    player.loseToDiscardpile(event.card);
                                    event.trigger('in_yunying_dianli');
                                }
                                if (player.storage.renkou == 0 || player.storage.dianli == 0 || player.storage.ziyuan == 0) {
                                    event.goto(1);
                                } else {
                                    event.finish();
                                }
                                ('step 8');
                                player.chooseCardButton(1, '请选择要移除的【资源】', player.getExpansions('in_ziyuan'));
                                ('step 9');
                                if (result.bool) {
                                    event.card = result.links[0];
                                    player.chooseUseTarget(event.card).nopopup = true;
                                }
                                if (player.storage.renkou == 0 || player.storage.dianli == 0 || player.storage.ziyuan == 0) {
                                    event.goto(1);
                                } else {
                                    event.finish();
                                }
                            },
                            group: ['in_yunying_renkou', 'in_yunying_dianli'],
                            subSkill: {
                                renkou: {
                                    trigger: {
                                        player: 'in_yunying_renkou',
                                    },
                                    silent: true,
                                    forced: true,
                                    popup: false,
                                    content() {
                                        player.draw();
                                    },
                                    sourceSkill: 'in_yunying',
                                    _priority: 1,
                                },
                                dianli: {
                                    trigger: {
                                        player: 'in_yunying_dianli',
                                    },
                                    silent: true,
                                    forced: true,
                                    popup: false,
                                    content() {
                                        player.changeHujia();
                                    },
                                    sourceSkill: 'in_yunying',
                                    _priority: 1,
                                },
                            },
                        },
                        l_in_yuebeng: {
                            enable: 'phaseUse',
                            limited: true,
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player) {
                                player.storage.l_in_yuebeng = false;
                            },
                            content() {
                                'step 0';
                                player.storage.qianyue++;
                                player.storage.l_in_yuebeng = true;
                                player.awakenSkill('l_in_yuebeng');
                                ('step 1');
                                player.chooseTarget('请选择【迁跃】的目标', '与一名其他角色交换座次,你增加一点体力上限并回复一点体力', function (card, player, target) {
                                    return target != player;
                                });
                                ('step 2');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    game.swapSeat(player, event.target);
                                    player.gainMaxHp();
                                    player.recover();
                                    event.target.loseHp(event.target.hp);
                                    event.target.update();
                                }
                            },
                        },
                        qy_youli: {
                            trigger: {
                                global: 'phaseUseBegin',
                            },
                            audio: 'ext:eclipse/audio:2',
                            content() {
                                player.storage.lmyoui = trigger.player.countCards('h');
                                if (!player.storage.qy_youli2) player.storage.qy_youli2 = [];
                                player.storage.qy_youli2.add(trigger.player);
                                player.markSkill('qy_youli');
                            },
                            marktext: '游',
                            intro: {
                                name: '游历',
                                content(storage, player, skill) {
                                    var str = '<br>发动过的角色数:' + player.storage.qy_youli2.length;
                                    if (player.storage.lmyoui) str += '<br>当前角色手牌数:' + player.storage.lmyoui;
                                    return str;
                                },
                            },
                            group: 'qy_youli_discard',
                            subSkill: {
                                discard: {
                                    trigger: {
                                        global: 'phaseDiscardBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.lmyoui && event.player.countCards('h') != player.storage.lmyoui;
                                    },
                                    content() {
                                        'step 0';
                                        event.num = trigger.player.countCards('h') - player.storage.lmyoui;
                                        delete player.storage.lmyoui;
                                        if (!player.storage.lmyoui && !player.storage.qy_youli2) player.unmarkSkill('qy_youli');
                                        if (event.num > 0) {
                                            event.cards = get.cards(event.num);
                                        } else event.goto(4);
                                        ('step 1');
                                        if (event.cards.length > 1) {
                                            player.chooseCardButton('将【游历】牌分配给任意角色', true, event.cards, [1, event.cards.length]).set('ai', function (button) {
                                                if (ui.selected.buttons.length == 0) return 1;
                                                return 0;
                                            });
                                        } else if (event.cards.length == 1) {
                                            event._result = {
                                                links: event.cards.slice(0),
                                                bool: true,
                                            };
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        if (result.bool) {
                                            for (const i of result.links) {
                                                event.cards.remove(i);
                                            }
                                            event.togive = result.links.slice(0);
                                            player
                                                .chooseTarget('将' + get.translation(result.links) + '交给一名角色', true)
                                                .set('ai', function (target) {
                                                    var att = get.attitude(_status.event.player, target);
                                                    if (_status.event.enemy) {
                                                        return -att;
                                                    } else if (att > 0) {
                                                        return att / (1 + target.countCards('h'));
                                                    } else {
                                                        return att / 100;
                                                    }
                                                })
                                                .set('enemy', get.value(event.togive[0], player, 'raw') < 0);
                                        }
                                        ('step 3');
                                        if (result.targets.length) {
                                            result.targets[0].gain(event.togive, 'draw');
                                            player.line(result.targets[0], 'green');
                                            game.log(result.targets[0], '获得了' + get.cnNumber(event.togive.length) + '张牌');
                                            event.goto(1);
                                        }
                                        ('step 4');
                                        player
                                            .chooseTarget('弃置一名角色的一张手牌,剩余' + -event.num + '次', function (card, player, target) {
                                                return target.countCards('h');
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
                                        ('step 5');
                                        if (result.bool) {
                                            player.discardPlayerCard(result.targets[0], 'hej', true);
                                            event.num++;
                                            if (event.num < 0) event.goto(4);
                                            else event.finish();
                                        } else event.finish();
                                    },
                                    sourceSkill: 'qy_youli',
                                },
                            },
                        },
                        qy_daxuan: {
                            audio: 'ext:eclipse:true',
                            juexingji: true,
                            derivation: ['qy_zhixian'],
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            filter(event, player) {
                                return (
                                    game.countPlayer(function (current) {
                                        if (current.countCards('h') == 0) return true;
                                    }) && !player.storage.qy_daxuan
                                );
                            },
                            forced: true,
                            content() {
                                player.addSkillLog('qy_zhixian');
                                player.awakenSkill(event.name);
                                player.storage[event.name] = true;
                            },
                        },
                        qy_zhixian: {
                            trigger: {
                                global: 'phaseDrawBefore',
                            },
                            filter(event, player) {
                                return true;
                            },
                            audio: 'ext:eclipse/audio:2',
                            forced: true,
                            content() {
                                'step 0';
                                event.num = trigger.player.countCards('h');
                                if (event.num >= 4) {
                                    player.chooseBool(get.prompt2(event.name), '是否对' + get.translation(trigger.player) + '造成一点伤害？').set('ai', function () {
                                        var player = _status.event.player;
                                        return get.damageEffect(trigger.player, player, player);
                                    });
                                } else event.goto(2);
                                ('step 1');
                                if (result.bool) {
                                    trigger.player.damage();
                                }
                                event.finish();
                                ('step 2');
                                if (event.num <= 1) {
                                    player.chooseBool(get.prompt2(event.name), '是否令' + get.translation(trigger.player) + '将手牌摸至其体力上限？').set('ai', function () {
                                        var player = _status.event.player;
                                        return get.attitude(player, trigger.player) > 0;
                                    });
                                } else event.goto(4);
                                ('step 3');
                                if (result.bool) {
                                    trigger.player.drawTo(trigger.player.maxHp);
                                }
                                event.finish();
                                ('step 4');
                                player
                                    .chooseControl('摸牌', '弃牌', 'cancel2', function (event, player) {
                                        if (get.attitide(player, trigger.player) > 0) return '摸牌';
                                        return '弃牌';
                                    })
                                    .set('prompt', '制宪:令' + get.translation(trigger.player) + '摸一张牌或弃一张牌');
                                ('step 5');
                                if (result.control == '摸牌') trigger.player.draw();
                                if (result.control == '弃牌') trigger.player.chooseToDiscard('he', true);
                                event.finish();
                            },
                        },
                        qy_chongshangabalaqiya: {
                            trigger: {
                                player: 'dying',
                            },
                            audio: 'ext:eclipse/audio:2',
                            limited: true,
                            mark: true,
                            forced: true,
                            intro: {
                                content: 'limited',
                            },
                            filter(event, player) {
                                return player.storage.qy_youli2 && player.storage.qy_youli2.length && !player.storage.qy_chongshangabalaqiya;
                            },
                            content() {
                                var num = player.storage.qy_youli2.length;
                                player.gainMaxHp(num);
                                player.recover(num);
                                player.draw(num);
                                player.awakenSkill(event.name);
                                player.storage[event.name] = true;
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        qy_jiniantang: {
                            trigger: {
                                player: 'phaseJudgeBegin',
                            },
                            audio: 'ext:eclipse/audio:2',
                            forced: true,
                            filter(event, player) {
                                if (
                                    game.countPlayer(function (current) {
                                        if (current.countCards('h') > player.hp) return true;
                                    })
                                )
                                    return false;
                                return true;
                            },
                            content() {
                                player.addTempSkill('qy_jiniantang_use');
                            },
                            subSkill: {
                                use: {
                                    mark: true,
                                    intro: {
                                        content: '你的牌不能指定其他角色为目标',
                                    },
                                    mod: {
                                        playerEnabled(card, player, target) {
                                            if (player != target) return false;
                                        },
                                    },
                                    sourceSkill: 'qy_jiniantang',
                                },
                            },
                        },
                        qy_dibaotianxing: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.hp < player.maxHp;
                            },
                            derivation: ['qy_haixingguantou'],
                            filterTarget: true,
                            content() {
                                'step 0';
                                target.damage(player.maxHp - player.hp);
                                ('step 1');
                                if (target.isAlive()) target.addSkillLog('qy_haixingguantou');
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target(player, target) {
                                        if (target.hp == 1) return -5;
                                        if (target.hp <= player.maxHp - player.hp) return player.hp - player.maxHp;
                                    },
                                },
                            },
                        },
                        qy_haixingguantou: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                return event.player.hasSkill('qy_dibaotianxing');
                            },
                            forced: true,
                            content() {
                                trigger.player.loseMaxHp();
                                player.gainMaxHp();
                            },
                        },
                        qy_lixiang: {
                            trigger: {
                                global: 'gameStart',
                                player: ['enterGame', 'phaseZhunbeiBefore'],
                            },
                            audio: 'ext:eclipse/audio:2',
                            forced: true,
                            filter(event, player) {
                                if (
                                    game.countPlayer(function (current) {
                                        if (current.hp <= player.hp) return true;
                                    })
                                )
                                    return true;
                            },
                            marktext: '禾',
                            intro: {
                                name: '理想',
                                content: 'mark',
                            },
                            content() {
                                game.countPlayer(function (current) {
                                    if (current.hp <= player.hp) current.addMark('qy_lixiang');
                                });
                            },
                            group: ['qy_lixiang_dying', 'qy_lixiang_disable'],
                            subSkill: {
                                dying: {
                                    trigger: {
                                        global: 'dying',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player.countMark('qy_lixiang') > 0;
                                    },
                                    content() {
                                        player.loseMaxHp();
                                        var num = trigger.player.countMark('qy_lixiang');
                                        trigger.player.removeMark('qy_lixiang', num);
                                        trigger.player.recover(1 - trigger.player.hp);
                                        trigger.player.draw(num);
                                    },
                                    sourceSkill: 'qy_lixiang',
                                },
                                disable: {
                                    trigger: {
                                        player: 'phaseZhunbeiBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (
                                            game.countPlayer(function (current) {
                                                if (current.hp <= player.hp && current != player) return true;
                                            })
                                        )
                                            return false;
                                        return true;
                                    },
                                    content() {
                                        player.addSkill('qy_lixiang_fengyin');
                                        player.hp = player.maxHp;
                                    },
                                    sourceSkill: 'qy_lixiang',
                                },
                                fengyin: {
                                    init(player, skill) {
                                        if (!player.storage[skill]) player.storage[skill] = 3;
                                        player.addSkillBlocker(skill);
                                    },
                                    onremove(player, skill) {
                                        delete player.storage[skill];
                                        player.removeSkillBlocker(skill);
                                    },
                                    charlotte: true,
                                    forced: true,
                                    popup: false,
                                    silent: true,
                                    skillBlocker(skill, player) {
                                        return skill == 'qy_lixiang';
                                    },
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    filter(event, player) {
                                        return player.storage.qy_lixiang_fengyin;
                                    },
                                    content() {
                                        player.storage.qy_lixiang_fengyin--;
                                        if (player.storage.qy_lixiang_fengyin <= 0) player.removeSkill(event.name);
                                    },
                                    mark: true,
                                    intro: {
                                        content(storage, player, skill) {
                                            var str;
                                            var info;
                                            var num = player.storage.qy_lixiang_fengyin;
                                            var list = player.getSkills(null, false, false).filter(function (i) {
                                                return lib.skill.qy_lixiang_fengyin.skillBlocker(i, player);
                                            });
                                            if (list.length) info = '失效技能:' + get.translation(list);
                                            if (num && list.length) str = '失效回合数:' + player.storage.qy_lixiang_fengyin;
                                            else info = '无失效技能';
                                            return '<li>' + info + '<li>' + str + '<li>【鏖兵六合】摸牌阶段摸牌数改为3】';
                                        },
                                    },
                                    sourceSkill: 'qy_lixiang',
                                    _priority: 1,
                                },
                            },
                        },
                        qy_aobingliuhe: {
                            trigger: {
                                player: 'useCard2',
                            },
                            filter(event, player) {
                                if (!['trick', 'basic'].includes(get.type(event.card))) return false;
                                if (get.tag(event.card, 'damage')) return true;
                                return false;
                            },
                            audio: 'ext:eclipse/audio:2',
                            forced: true,
                            content() {
                                'step 0';
                                var goon = false;
                                var info = get.info(trigger.card);
                                if (trigger.targets && !info.multitarget) {
                                    var players = game.filterPlayer();
                                    for (const i of players) {
                                        if (lib.filter.targetEnabled2(trigger.card, player, i) && !trigger.targets.includes(i) && !i.countMark('qy_lixiang')) {
                                            goon = true;
                                            break;
                                        }
                                    }
                                }
                                if (goon) {
                                    player
                                        .chooseTarget([1, Infinity], '鏖兵六合:是否额外指定任意名没有<禾>标记的角色成为' + get.translation(trigger.card) + '的目标？', function (card, player, target) {
                                            var trigger = _status.event;
                                            if (trigger.targets.includes(target) || target.countMark('qy_lixiang')) return false;
                                            return lib.filter.targetEnabled2(trigger.card, _status.event.player, target);
                                        })
                                        .set('ai', function (target) {
                                            var trigger = _status.event.getTrigger();
                                            var player = _status.event.player;
                                            return get.effect(target, trigger.card, player, player);
                                        })
                                        .set('targets', trigger.targets)
                                        .set('card', trigger.card);
                                }
                                ('step 1');
                                if (result.targets) {
                                    event.targets = result.targets;
                                } else event.finish();
                                ('step 2');
                                if (event.targets) {
                                    trigger.targets.addArray(event.targets);
                                } else event.finish();
                            },
                            group: 'qy_aobingliuhe_draw',
                            subSkill: {
                                draw: {
                                    trigger: {
                                        player: 'phaseDrawBegin1',
                                    },
                                    check(event, player) {
                                        var num = 0;
                                        game.countPlayer(function (current) {
                                            if (current.countMark('qy_lixiang')) num += current.countMark('qy_lixiang');
                                        });
                                        if (player.hasSkill('qy_lixiang_fengyin')) num = 3;
                                        return event.num <= num;
                                    },
                                    filter(event, player) {
                                        if (
                                            game.countPlayer(function (current) {
                                                if (current.countMark('qy_lixiang')) return true;
                                            })
                                        )
                                            return true;
                                        if (player.hasSkill('qy_lixiang_fengyin')) return true;
                                        return false;
                                    },
                                    content() {
                                        var num = 0;
                                        game.countPlayer(function (current) {
                                            if (current.countMark('qy_lixiang')) num += current.countMark('qy_lixiang');
                                        });
                                        if (player.hasSkill('qy_lixiang_fengyin')) num = 3;
                                        trigger.num = num;
                                    },
                                    sourceSkill: 'qy_aobingliuhe',
                                },
                            },
                        },
                        qy_kuilei: {
                            trigger: {
                                player: 'phaseJudgeBefore',
                            },
                            forced: true,
                            audio: 'ext:eclipse:true',
                            filter(event, player) {
                                if (
                                    game.countPlayer(function (current) {
                                        if (current.countMark('qy_lixiang') > 0) return true;
                                    })
                                )
                                    return false;
                                return true;
                            },
                            content() {
                                player.addTempSkill('baiban');
                                player.addSkill('qy_kuilei_control');
                            },
                            subSkill: {
                                control: {
                                    trigger: {
                                        player: ['phaseUseBefore', 'phaseUseAfter', 'dieAfter'],
                                        global: 'phaseBefore',
                                    },
                                    forced: true,
                                    forceDie: true,
                                    charlotte: true,
                                    filter(event, player, name) {
                                        return true;
                                    },
                                    mark: true,
                                    intro: {
                                        content(storage, player, skill) {
                                            var master;
                                            if (!player.storage.qy_kuilei_control) {
                                                master = game.countPlayer(function (current) {
                                                    if (current.isMaxHandcard()) return true;
                                                });
                                            } else master = player.storage.qy_kuilei_control;
                                            return '你的出牌阶段改由' + get.translation(master[0]) + '控制';
                                        },
                                    },
                                    onremove(player) {
                                        if (player == game.me) {
                                            if (!game.notMe) game.swapPlayerAuto(player._trueMe);
                                            else delete game.notMe;
                                            if (_status.auto) ui.click.auto();
                                        }
                                        delete player._trueMe;
                                        delete player.storage.qy_kuilei_control;
                                    },
                                    content() {
                                        var name = event.triggername;
                                        if (name == 'phaseUseBefore') {
                                            var master = [];
                                            game.countPlayer(function (current) {
                                                if (current.isMaxHandcard()) master.add(current);
                                            });
                                            player.storage.qy_kuilei_control = [];
                                            player.storage.qy_kuilei_control.add(master[0]);
                                            if (master[0] == player) return;
                                            player._trueMe = master[0];
                                            game.addGlobalSkill('autoswap');
                                            if (player == game.me) {
                                                game.notMe = true;
                                                if (!_status.auto) ui.click.auto();
                                            }
                                        } else {
                                            player.removeSkill(event.name);
                                        }
                                    },
                                    sourceSkill: 'qy_kuilei',
                                },
                            },
                        },
                        wuli_hubuyuanli: {
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            nobracket: true,
                            forced: true,
                            init(player) {
                                if (!player.storage.wuli_hubuyuanli_red) player.storage.wuli_hubuyuanli_red = 0;
                                if (!player.storage.wuli_hubuyuanli_black) player.storage.wuli_hubuyuanli_black = 0;
                            },
                            mark: true,
                            intro: {
                                mark(dialog, content, player) {
                                    dialog.add('<div class="text center">' + lib.translate[player.name] + '拥有' + player.storage.wuli_hubuyuanli_red + '个【粒】标记,' + player.storage.wuli_hubuyuanli_black + '个【波】标记</div>');
                                },
                            },
                            filter(event, player) {
                                if (!event.card) return false;
                                if (event.cards.length == 0) return false;
                                return true;
                            },
                            content() {
                                if (Array.isArray(trigger.cards))
                                    for (const i of trigger.cards) {
                                        if (get.color(i) == 'red') {
                                            player.storage.wuli_hubuyuanli_red += 1;
                                            game.log(player, '获得了一个【粒】标记');
                                        } else if (get.color(i) == 'black') {
                                            player.storage.wuli_hubuyuanli_black += 1;
                                            game.log(player, '获得了一个【波】标记');
                                        }
                                    }
                            },
                            ai: {
                                threaten: 1.4,
                            },
                        },
                        wuli_tansuo: {
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            nobracket: true,
                            filter(event, player) {
                                if (!player.storage.wuli_hubuyuanli_red || !player.storage.wuli_hubuyuanli_black) return false;
                                return player.storage.wuli_hubuyuanli_red == player.storage.wuli_hubuyuanli_black;
                            },
                            content() {
                                player.changeHujia(player.storage.wuli_hubuyuanli_red);
                                player.storage.wuli_hubuyuanli_red = 0;
                                player.storage.wuli_hubuyuanli_black = 0;
                            },
                        },
                        wuli_buqueding: {
                            nobracket: true,
                            mark: true,
                            group: ['wuli_buqueding2'],
                            intro: {
                                mark(dialog, content, player) {
                                    if (!player.storage.wuli_hubuyuanli_red) player.storage.wuli_hubuyuanli_red = 0;
                                    if (!player.storage.wuli_hubuyuanli_black) player.storage.wuli_hubuyuanli_black = 0;
                                    if (player.storage.wuli_hubuyuanli_red > player.storage.wuli_hubuyuanli_black) {
                                        dialog.add('<div class="text center">' + lib.translate[player.name] + '的【粒】数目大于【波】</div>');
                                        dialog.add('<div class="text center">出牌阶段,' + lib.translate[player.name] + '可将一张黑色牌当做任意一张基本牌使用</div>');
                                    } else if (player.storage.wuli_hubuyuanli_red < player.storage.wuli_hubuyuanli_black) {
                                        dialog.add('<div class="text center">' + lib.translate[player.name] + '的【粒】数目小于【波】</div>');
                                        dialog.add('<div class="text center">出牌阶段,' + lib.translate[player.name] + '可将一张红色牌当做任意一张非延时锦囊牌使用</div>');
                                    } else if (player.storage.wuli_hubuyuanli_red == player.storage.wuli_hubuyuanli_black) {
                                        dialog.add('<div class="text center">' + lib.translate[player.name] + '的【粒】数目等于【波】,不可使用此技能</div>');
                                    }
                                },
                            },
                            enable: 'chooseToUse',
                            filter(event, player) {
                                if (!player.isPhaseUsing() || player.countCards('he') < 1) return false;
                                var red = player.storage.wuli_hubuyuanli_red;
                                var black = player.storage.wuli_hubuyuanli_black;
                                if (!red) red = 0;
                                if (!black) black = 0;
                                if (event.parent.name == '_wuxie') return false;
                                if (red == black) return false;
                                else if (black < red) {
                                    if ((event.filterCard && event.filterCard({ name: 'sha' }, player, event)) || event.filterCard({ name: 'jiu' }, player, event) || event.filterCard({ name: 'tao' }, player, event)) {
                                        return player.hasCard(function (card) {
                                            return get.color(card) == 'black';
                                        }, 'he');
                                    }
                                } else if (red < black) {
                                    return player.hasCard(function (card) {
                                        return get.color(card) == 'red';
                                    }, 'he');
                                }
                                return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var red = player.storage.wuli_hubuyuanli_red;
                                    var black = player.storage.wuli_hubuyuanli_black;
                                    if (!red) red = 0;
                                    if (!black) black = 0;
                                    var list = [];
                                    if (red > black) {
                                        if (event.filterCard && event.filterCard({ name: 'sha' }, player, event)) {
                                            list.push(['基本', '', 'sha']);
                                            list.push(['基本', '', 'sha', 'fire']);
                                            list.push(['基本', '', 'sha', 'thunder']);
                                        }
                                        if (event.filterCard && event.filterCard({ name: 'tao' }, player, event)) {
                                            list.push(['基本', '', 'tao']);
                                        }
                                        if (event.filterCard && event.filterCard({ name: 'jiu' }, player, event)) {
                                            list.push(['基本', '', 'jiu']);
                                        }
                                    } else if (black > red) {
                                        for (let i = 0; i < lib.inpile.length; i++) {
                                            if (get.type(lib.inpile[i]) == 'trick' && lib.inpile[i] != 'wuxie') list.push(['锦囊', '', lib.inpile[i]]);
                                        }
                                    }
                                    return ui.create.dialog('不确定', [list, 'vcard'], 'hidden');
                                },
                                filter(button, player) {
                                    return lib.filter.filterCard({ name: button.link[2] }, player, _status.event.parent);
                                },
                                check(button) {
                                    var player = _status.event.player;
                                    var red = player.storage.wuli_hubuyuanli_red;
                                    var black = player.storage.wuli_hubuyuanli_black;
                                    if (red > black) {
                                        var card = { name: button.link[2], nature: button.link[3] };
                                        if (
                                            game.hasPlayer(function (current) {
                                                return player.canUse(card, current) && get.effect(current, card, player, player) > 0;
                                            })
                                        ) {
                                            switch (button.link[2]) {
                                                case 'tao':
                                                    return 5;
                                                case 'jiu': {
                                                    if (player.countCards('h', 'sha') > 0) return 3;
                                                }
                                                case 'sha': {
                                                    if (button.link[3] == 'fire') return 2.95;
                                                    else if (button.link[3] == 'thunder') return 2.92;
                                                }
                                            }
                                        }
                                    } else if (black > red) {
                                        var recover = 0,
                                            lose = 1,
                                            players = game.filterPlayer();
                                        for (const i of players) {
                                            if (i.hp == 1 && get.damageEffect(i, player, player) > 0 && !i.hasSha()) {
                                                return button.link[2] == 'juedou' ? 2 : -1;
                                            }
                                            if (!i.isOut()) {
                                                if (i.hp < i.maxHp) {
                                                    if (get.attitude(player, i) > 0) {
                                                        if (i.hp < 2) {
                                                            lose--;
                                                            recover += 0.5;
                                                        }
                                                        lose--;
                                                        recover++;
                                                    } else if (get.attitude(player, i) < 0) {
                                                        if (i.hp < 2) {
                                                            lose++;
                                                            recover -= 0.5;
                                                        }
                                                        lose++;
                                                        recover--;
                                                    }
                                                } else {
                                                    if (get.attitude(player, i) > 0) {
                                                        lose--;
                                                    } else if (get.attitude(player, i) < 0) {
                                                        lose++;
                                                    }
                                                }
                                            }
                                        }
                                        if (lose > recover && lose > 0) return button.link[2] == 'nanman' ? 1 : -1;
                                        if (lose < recover && recover > 0) return button.link[2] == 'taoyuan' ? 1 : -1;
                                        return button.link[2] == 'wuzhong' ? 1 : -1;
                                    }
                                    return 0.5;
                                },
                                backup(links, player) {
                                    return {
                                        filterCard(card, player, target) {
                                            var red = player.storage.wuli_hubuyuanli_red;
                                            var black = player.storage.wuli_hubuyuanli_black;
                                            if (red > black) return get.color(card) == 'black';
                                            else if (black > red) return get.color(card) == 'red';
                                            return false;
                                        },
                                        complexCard: true,
                                        selectCard() {
                                            return 1;
                                        },
                                        check(card, player, target) {
                                            if (card.name == 'shandian' || card.name == 'du') return 10;
                                            return 8 - get.value(card);
                                        },
                                        viewAs: { name: links[0][2], nature: links[0][3] },
                                        position: 'he',
                                        popname: true,
                                    };
                                },
                                prompt(links, player) {
                                    var red = player.storage.wuli_hubuyuanli_red;
                                    var black = player.storage.wuli_hubuyuanli_black;
                                    var str = red > black ? '黑色牌' : '红色牌';
                                    return '将一张' + str + '当做' + get.translation(links[0][3] || '') + get.translation(links[0][2]) + '使用';
                                },
                            },
                            ai: {
                                order() {
                                    return 6;
                                },
                                save: true,
                                respondSha: true,
                                skillTagFilter(player, tag, arg) {
                                    if (!player.storage.wuli_hubuyuanli_red && !player.storage.wuli_hubuyuanli_black) return false;
                                    if (!player.isPhaseUsing() || player.countCards('he') < 1) return false;
                                    return true;
                                },
                                result: {
                                    player: 5,
                                },
                            },
                        },
                        wuli_zhushou: {
                            trigger: {
                                player: 'drawAfter',
                            },
                            forced: true,
                            logTarget: 'player',
                            filter(event, player) {
                                if (event.parent.parent.name == 'phaseDraw') return false;
                                if (event.parent.name == 'phaseDraw') return false;
                                return event.result && event.result.length >= 2;
                            },
                            content() {
                                'step 0';
                                event.cards = trigger.result;
                                ('step 1');
                                player.chooseCardButton('将' + trigger.result.length - 1 + '张牌分配给任意角色', true, event.cards, event.cards.length - 1).set('ai', function (button) {
                                    if (ui.selected.buttons.length == 0) return 1;
                                    return 0;
                                });
                                ('step 2');
                                if (result.bool) {
                                    event.cards = result.links;
                                }
                                event.togive = result.links.slice(0);
                                player
                                    .chooseTarget('将' + get.translation(result.links) + '交给一名其他角色', true, function (card, player, target) {
                                        return player != target;
                                    })
                                    .set('ai', function (target) {
                                        var att = get.attitude(_status.event.player, target);
                                        if (_status.event.enemy) {
                                            return -att;
                                        } else if (att > 0) {
                                            return att / (1 + target.countCards('h'));
                                        } else {
                                            return att / 100;
                                        }
                                    })
                                    .set('enemy', get.value(event.togive[0], player, 'raw') < 0);
                                ('step 3');
                                if (result.targets.length) {
                                    result.targets[0].gain(event.togive, 'draw');
                                    player.line(result.targets[0], 'green');
                                    game.log(result.targets[0], '获得了' + get.cnNumber(event.togive.length) + '张牌');
                                }
                            },
                        },
                        wuli_buqueding2: {
                            nobracket: true,
                            enable: 'chooseToUse',
                            filter(event, player) {
                                if (!player.isPhaseUsing() || player.countCards('he') < 1) return false;
                                var red = player.storage.wuli_hubuyuanli_red;
                                var black = player.storage.wuli_hubuyuanli_black;
                                if (!red) red = 0;
                                if (!black) black = 0;
                                if (red == black) return false;
                                return red < black;
                            },
                            filterCard(card, player) {
                                return get.color(card) == 'red';
                            },
                            viewAsFilter(player) {
                                return player.countCards('h', { color: 'red' }) > 0;
                            },
                            viewAs: {
                                name: 'wuxie',
                            },
                            prompt: '将一张红色手牌当无懈可击使用',
                            check(card) {
                                var tri = _status.event.getTrigger();
                                if (tri && tri.card && tri.card.name == 'chiling') return -1;
                                return 8 - get.value(card);
                            },
                            threaten: 1.2,
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
                        叠加: {
                            audio: 'ext:eclipse/audio:2',
                            subSkill: {
                                discard: {
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    audio: 'zishu',
                                    forced: true,
                                    filter(event, player) {
                                        if (_status.currentPhase != player) {
                                            var he = player.getCards('he');
                                            var bool = false;
                                            player.getHistory('gain', function (evt) {
                                                if (!bool && evt && evt.cards) {
                                                    if (Array.isArray(evt.cards))
                                                        for (const i of evt.cards) {
                                                            if (he.includes(i)) bool = true;
                                                            break;
                                                        }
                                                }
                                            });
                                            return bool;
                                        }
                                        return false;
                                    },
                                    content() {
                                        var he = player.getCards('h');
                                        var list = [];
                                        player.getHistory('gain', function (evt) {
                                            if (evt && evt.cards) {
                                                if (Array.isArray(evt.cards))
                                                    for (const i of evt.cards) {
                                                        if (he.includes(i)) list.add(i);
                                                    }
                                            }
                                        });
                                        player.$throw(list);
                                        player.lose(list, ui.discardPile, 'visible');
                                        game.log(player, '将', list, '置入弃牌堆');
                                    },
                                },
                                draw: {
                                    trigger: {
                                        player: 'gainAfter',
                                    },
                                    audio: 'zishu',
                                    forced: true,
                                    filter(event, player) {
                                        if (_status.currentPhase != player) return false;
                                        return event.getParent(2).name != '叠加_draw';
                                    },
                                    content() {
                                        player.draw('nodelay');
                                    },
                                },
                            },
                            ai: {
                                threaten: 1.2,
                                nogain: 1,
                            },
                            group: ['叠加_draw', '叠加_discard'],
                        },
                        邈渺: {
                            forced: true,
                            trigger: {
                                player: ['damageBegin4'],
                            },
                            content() {
                                trigger.cancel();
                                var num = lib.character[player.name1][2];
                                if (player.name2 != undefined) {
                                    var num = lib.character[player.name1][2] + lib.character[player.name2][2] - 3;
                                }
                                if (player.maxHp < num) {
                                    player.maxHp = player.maxHp + 9;
                                    player.update();
                                    player.hp = player.hp + 9;
                                    player.update();
                                    return false;
                                }
                                player.draw(trigger.num);
                            },
                            ai: {
                                threaten: 0.8,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'damage') || get.tag(card, 'loseHp')) {
                                            if (player.hasSkillTag('cysh_jueqing', false, target)) return [1, -1.5];
                                            return [0, 2];
                                        }
                                    },
                                },
                            },
                        },
                        gm_qiyuan: {
                            audio: 'ext:eclipse/audio:2',
                            fixed: true,
                            forced: true,
                            charlotte: true,
                            superCharlotte: true,
                            trigger: {
                                global: 'phaseBefore',
                                player: ['enterGame', 'phaseBegin', 'damageEnd'],
                            },
                            filter(event, player, name) {
                                if (['phaseBegin', 'damageEnd'].includes(name)) return true;
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            content() {
                                'step 0';
                                var list = [];
                                lib.inpile.forEach(function (name) {
                                    var type = get.type(name);
                                    if (type != 'basic') {
                                        list.push([get.translation(type), '', name]);
                                    }
                                });
                                player.chooseButton([get.prompt(event.name), [list, 'vcard']]).set('ai', function (button) {
                                    return 1 + Math.random();
                                });
                                ('step 1');
                                if (result.bool) {
                                    var name = result.links[0][2];
                                    var cards = [];
                                    for (var node of ui.cardPile.childNodes) {
                                        if (node.name == name) cards.push(node);
                                    }
                                    if (cards.length) {
                                        player.addToExpansion(cards, 'draw').gaintag.add(event.name);
                                    } else {
                                        player.say('当前牌堆无同此名牌');
                                    }
                                }
                            },
                            marktext: '愿',
                            intro: {
                                markcount: 'expansion',
                                mark(dialog, storage, player) {
                                    var cards = player.getExpansions('gm_qiyuan');
                                    if (cards && cards.length) {
                                        if (player == game.me || player.isUnderControl()) {
                                            dialog.addAuto(cards);
                                        } else {
                                            return '共有' + get.cnNumber(cards.length) + '张愿';
                                        }
                                    }
                                },
                                content(storage, player) {
                                    var cards = player.getExpansions('gm_qiyuan');
                                    if (cards && cards.length) {
                                        if (player == game.me || player.isUnderControl()) {
                                            return get.translation(cards);
                                        }
                                        return '共有' + get.cnNumber(cards.length) + '张愿';
                                    }
                                },
                            },
                            group: ['gm_qiyuan_control', 'gm_qiyuan_die', 'gm_qiyuan_skip', 'gm_qiyuan_use', 'gm_qiyuan_recover'],
                            subSkill: {
                                control: {
                                    audio: 'ext:eclipse/audio:2',
                                    fixed: true,
                                    charlotte: true,
                                    superCharlotte: true,
                                    trigger: {
                                        global: 'phaseBegin',
                                    },
                                    filter(event, player) {
                                        return event.player != player && player.getExpansions('gm_qiyuan').length;
                                    },
                                    logTarget: 'player',
                                    prompt2: '移去一半数量(向下取整且至少为1)的<愿>令其下个出牌阶段由你操纵',
                                    content() {
                                        'step 0';
                                        var cards = player.getExpansions('gm_qiyuan');
                                        var select = Math.max(1, Math.floor(cards.length / 2));
                                        player.chooseButton(select, ['选择要移去的<愿>', cards], true).set('ai', function (button) {
                                            return player.getUseValue(button.link);
                                        });
                                        ('step 1');
                                        player.loseToDiscardpile(result.links);
                                        trigger.player.addTempSkill('gm_qiyuan_before');
                                        trigger.player.storage.gm_qiyuan = player;
                                    },
                                    sourceSkill: 'gm_qiyuan',
                                },
                                before: {
                                    silent: true,
                                    charlotte: true,
                                    trigger: {
                                        player: 'phaseUseBefore',
                                    },
                                    filter(event, player) {
                                        var storage = player.storage.gm_qiyuan;
                                        return storage.isAlive() && !player._trueMe;
                                    },
                                    content() {
                                        var storage = player.storage.gm_qiyuan;
                                        player._trueMe = storage;
                                        game.addGlobalSkill('autoswap');
                                        if (player == game.me) {
                                            game.notMe = true;
                                            if (!_status.auto) ui.click.auto();
                                        }
                                        player.addTempSkill('gm_qiyuan_after', { player: 'phaseUseAfter' });
                                        player.removeSkill(event.name);
                                    },
                                    forced: true,
                                    popup: false,
                                    sourceSkill: 'gm_qiyuan',
                                    _priority: 1,
                                },
                                after: {
                                    onremove(player) {
                                        if (player == game.me) {
                                            if (!game.notMe) game.swapPlayerAuto(player._trueMe);
                                            else delete game.notMe;
                                            if (_status.auto) ui.click.auto();
                                        }
                                        delete player._trueMe;
                                    },
                                    charlotte: true,
                                    sourceSkill: 'gm_qiyuan',
                                },
                                die: {
                                    audio: 'ext:eclipse/audio:2',
                                    fixed: true,
                                    forced: true,
                                    charlotte: true,
                                    superCharlotte: true,
                                    trigger: {
                                        global: 'gainAfter',
                                    },
                                    filter(event, player) {
                                        return event.player != player && event.player.getHistory('gain').reduce((sum, evt) => sum + evt.cards.length, 0) > Math.max(3, 13 - player.getExpansions('gm_qiyuan').length);
                                    },
                                    logTarget: 'player',
                                    content() {
                                        trigger.player.die();
                                    },
                                    sourceSkill: 'gm_qiyuan',
                                },
                                skip: {
                                    audio: 'ext:eclipse/audio:2',
                                    fixed: true,
                                    forced: true,
                                    charlotte: true,
                                    superCharlotte: true,
                                    trigger: {
                                        player: ['phaseZhunbeiBefore', 'phaseJudgeBefore', 'phaseDrawBefore', 'phaseUseBefore', 'phaseDiscardBefore', 'phaseJieshuBefore'],
                                    },
                                    filter(event, player) {
                                        return player.getExpansions('gm_qiyuan').length;
                                    },
                                    content() {
                                        'step 0';
                                        var map = {
                                            phaseZhunbei: '准备阶段',
                                            phaseJudge: '判定阶段',
                                            phaseDraw: '摸牌阶段',
                                            phaseUse: '出牌阶段',
                                            phaseDiscard: '弃牌阶段',
                                            phaseJieshu: '结束阶段',
                                        };
                                        var prompt2 = '<div class="text center">移去一张<愿>并跳过<strong>' + map[trigger.name] + '</strong></div>';
                                        player.chooseButton([get.prompt(event.name), prompt2, player.getExpansions('gm_qiyuan')]).set('ai', function () {
                                            switch (trigger.name) {
                                                case 'phaseZhunbei':
                                                    return 0;
                                                case 'phaseJudge':
                                                    return player.countCards('j') ? 1 : 0;
                                                case 'phaseDraw':
                                                    return 0;
                                                case 'phaseUse':
                                                    return 0;
                                                case 'phaseDiscard':
                                                    return player.needsToDiscard() ? 1 : 0;
                                                case 'phaseJieshu':
                                                    return 0;
                                            }
                                        });
                                        ('step 1');
                                        if (result.bool) {
                                            player.loseToDiscardpile(result.links);
                                            trigger.cancel();
                                        }
                                    },
                                    sourceSkill: 'gm_qiyuan',
                                },
                                use: {
                                    audio: 'ext:eclipse/audio:2',
                                    fixed: true,
                                    forced: true,
                                    charlotte: true,
                                    superCharlotte: true,
                                    trigger: {
                                        player: 'useCardToPlayer',
                                    },
                                    filter(event, player) {
                                        return event.targets.length == 1 && event.parent.triggeredTargets1.length == 1 && ['basic', 'trick'].includes(get.type(event.card)) && event.getParent(2).name != 'gm_qiyuan_extraUse' && player.getExpansions('gm_qiyuan').length > 1;
                                    },
                                    content() {
                                        'step 0';
                                        player
                                            .chooseButton(2, [
                                                get.prompt(event.name),
                                                [
                                                    [
                                                        [0, '额外目标'],
                                                        [1, '额外结算'],
                                                    ],
                                                    'tdnodes',
                                                ],
                                                player.getExpansions('gm_qiyuan'),
                                            ])
                                            .set('filterButton', function (button) {
                                                if (ui.selected.buttons.length && typeof ui.selected.buttons[0].link == typeof button.link) return false;
                                                if (button.link == 0) {
                                                    var info = get.info(trigger.card);
                                                    if (info.multitarget) return false;
                                                    if (info.allowMultiple == false) return false;
                                                    if (info.type == 'equip') return false;
                                                    if (info.type == 'delay') return false;
                                                    if (!game.hasPlayer((target) => !trigger.targets.includes(target) && lib.filter.targetEnabled2(trigger.card, player, target))) return false;
                                                }
                                                return true;
                                            })
                                            .set('ai', function (button) {
                                                if (typeof button.link == 'number') {
                                                    if (game.countPlayer((target) => get.effect(target, trigger.card, player, player)) > game.roundNumber) return 1;
                                                    return 0;
                                                }
                                                return 1 + Math.random();
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            if (typeof result.links[0] == 'object') result.links.reverse();
                                            player.loseToDiscardpile(result.links[1]).delay = false;
                                            switch (result.links[0]) {
                                                case 0: {
                                                    var prompt = '为' + get.translation(trigger.card) + '增加至多' + get.cnNumber(player.getExpansions('gm_qiyuan').length) + '个额外目标';
                                                    player
                                                        .chooseTarget(
                                                            prompt,
                                                            [1, game.roundNumber],
                                                            function (card, player, target) {
                                                                var trigger = _status.event.getTrigger();
                                                                return !trigger.targets.includes(target) && lib.filter.targetEnabled2(trigger.card, player, target);
                                                            },
                                                            true
                                                        )
                                                        .set('ai', function (target) {
                                                            var player = _status.event.player;
                                                            return get.effect(target, _status.event.getTrigger().card, player, player);
                                                        });
                                                    break;
                                                }
                                                case 1: {
                                                    player.addTempSkill('gm_qiyuan_extraUse');
                                                    event.finish();
                                                    break;
                                                }
                                            }
                                        } else event.finish();
                                        ('step 2');
                                        var targets = result.targets;
                                        player.line(targets);
                                        targets.push(trigger.target);
                                        trigger.targets.splice(0);
                                        trigger.parent.triggeredTargets1.splice(0);
                                        event.targets = targets.sortBySeat();
                                        ('step 3');
                                        trigger.targets.addArray(targets);
                                        trigger.parent.triggeredTargets1.push(targets[0]);
                                    },
                                    sourceSkill: 'gm_qiyuan',
                                },
                                extraUse: {
                                    silent: true,
                                    charlotte: true,
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    filter(event, player) {
                                        return event.parent.name != 'gm_qiyuan_extraUse';
                                    },
                                    content() {
                                        'step 0';
                                        event.card = get.copy(trigger.card);
                                        event.targets = trigger._targets || trigger.targets;
                                        event.num = player.getExpansions('gm_qiyuan').length;
                                        ('step 1');
                                        if (event.num--) {
                                            for (var target of targets) if (!target.isIn() || !player.canUse(card, target, false, false)) targets.remove(target);
                                            if (targets.length) {
                                                player.useCard(card, targets).set('addCount', false).oncard = function () {
                                                    var animate = ui.create.card();
                                                    animate.init([card.suit, card.number, card.name, card.nature]);
                                                    player.$throw(animate, 1000);
                                                    animate.delete();
                                                };
                                                event.redo();
                                            }
                                        }
                                        ('step 2');
                                        player.removeSkill(event.name);
                                    },
                                    forced: true,
                                    popup: false,
                                    sourceSkill: 'gm_qiyuan',
                                    _priority: 1,
                                },
                                recover: {
                                    audio: 'ext:eclipse/audio:2',
                                    fixed: true,
                                    forced: true,
                                    charlotte: true,
                                    superCharlotte: true,
                                    trigger: {
                                        player: ['phaseEnd', 'dying'],
                                    },
                                    filter(event, player) {
                                        return player.getExpansions('gm_qiyuan').length;
                                    },
                                    content() {
                                        'step 0';
                                        var length = player.getExpansions('gm_qiyuan').length;
                                        var prompt2 = '<div class="text center">移去一张<愿>,将体力回复至上限' + (length - 1 ? '并摸' + get.cnNumber(length - 1) + '张牌' : '') + '< /div>';
                                        player.chooseButton([get.prompt(event.name), prompt2, player.getExpansions('gm_qiyuan')]).set('ai', function (button) {
                                            return 1 + Math.random();
                                        });
                                        ('step 1');
                                        if (result.bool) {
                                            player.loseToDiscardpile(result.links).delay = false;
                                            player.hp = player.maxHp;
                                            var length = player.getExpansions('gm_qiyuan').length;
                                            if (length - 1) player.draw(length - 1);
                                        }
                                    },
                                    sourceSkill: 'gm_qiyuan',
                                },
                            },
                        },
                        gm_mengjing: {
                            audio: 'ext:eclipse/audio:2',
                            fixed: true,
                            forced: true,
                            charlotte: true,
                            superCharlotte: true,
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            content() {
                                var skillList = [];
                                for (var name in lib.characterPack.standard) {
                                    var list = lib.characterPack.standard[name].skills;//QQQ
                                    for (var item of list) {
                                        if (lib.skill[item]) skillList.push(item);
                                    }
                                }
                                game.filterPlayer((target) => target != player).forEach(function (target) {
                                    if (skillList.length) {
                                        var skills = target.getOriginalSkills();
                                        target.removeSkill(skills);
                                        var addSkills = skillList.randomGets(skills.length);
                                        skillList.removeArray(addSkills);
                                        target.addSkill(addSkills);
                                    }
                                    target.maxHp += target.maxHp;
                                    target.hp += target.hp;
                                    target.update();
                                });
                            },
                            group: ['gm_mengjing_damage', 'gm_mengjing_die'],
                            subSkill: {
                                damage: {
                                    audio: 'ext:eclipse/audio:2',
                                    fixed: true,
                                    forced: true,
                                    charlotte: true,
                                    superCharlotte: true,
                                    trigger: {
                                        global: 'damageBegin3',
                                    },
                                    filter(event, player) {
                                        return event.player != player;
                                    },
                                    content() {
                                        trigger.player.loseHp(game.roundNumber);
                                    },
                                    sourceSkill: 'gm_mengjing',
                                },
                                die: {
                                    audio: 'ext:eclipse/audio:2',
                                    fixed: true,
                                    forced: true,
                                    charlotte: true,
                                    superCharlotte: true,
                                    trigger: {
                                        global: 'dieAfter',
                                    },
                                    filter(event, player) {
                                        return event.player != player && event.player.maxHp && !event.player.isAlive();
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseTarget([1, trigger.player.maxHp], get.prompt(event.name, trigger.player), '任意分配其体力上限').set('ai', function (target) {
                                            return get.attitude(player, target) > 0;
                                        });
                                        ('step 1');
                                        if (result.bool) {
                                            event.targets = result.targets.sortBySeat();
                                            event.num = trigger.player.maxHp;
                                        } else event.finish();
                                        ('step 2');
                                        var target = targets.shift();
                                        if (player.isUnderControl()) game.swapPlayerAuto(player);
                                        var switchToAuto = function () {
                                            _status.imchoosing = false;
                                            event._result = {
                                                num: targets.length ? Math.floor(Math.random() * (event.num - targets.length - 1)) + 1 : event.num,
                                                bool: true,
                                            };
                                            if (event.dialog) event.dialog.close();
                                            if (event.control) event.control.close();
                                        };
                                        var chooseNumber = lib.skill[event.name].chooseNumber;
                                        if (targets.length && event.num - targets.length > 1) {
                                            if (event.isMine()) {
                                                chooseNumber(event, target, 1, event.num - targets.length);
                                            } else {
                                                if (event.isOnline()) {
                                                    event.player.send(chooseNumber, event, target, 1, event.num - targets.length);
                                                    event.player.wait();
                                                    game.pause();
                                                } else switchToAuto();
                                            }
                                        } else {
                                            event._result = {
                                                num: targets.length ? (event.num - 1) / targets.length : event.num,
                                                bool: true,
                                            };
                                        }
                                        event.target = target;
                                        ('step 3');
                                        var result = event.result || result;
                                        event.num -= result.num;
                                        target.gainMaxHp(result.num);
                                        ('step 4');
                                        if (targets.length) event.goto(2);
                                    },
                                    chooseNumber(event, target, lower, upper, initial) {
                                        if (!event._result) event._result = {};
                                        event._result.num = initial || lower;
                                        upper = Math.max(lower, upper);
                                        var number = event._result.num;
                                        var dialog = ui.create.dialog(get.translation(event.name) + ':为' + get.translation(target) + '分配体力上限', 'hidden');
                                        dialog.addText('至多可为该目标分配' + upper + '点体力上限');
                                        event.dialog = dialog;
                                        var table = document.createElement('div');
                                        table.classList.add('add-setting');
                                        table.style.margin = '0';
                                        table.style.width = '100%';
                                        table.style.position = 'relative';
                                        var tomin = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                                        table.appendChild(tomin);
                                        tomin.innerHTML = '<span>最小</span>';
                                        if (number == lower) tomin.classList.add('bluebg');
                                        tomin.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                            if (_status.dragged) return;
                                            if (_status.justdragged) return;
                                            _status.tempNoButton = true;
                                            setTimeout(function () {
                                                _status.tempNoButton = false;
                                            }, 500);
                                            if (number == lower) {
                                                return;
                                            } else {
                                                var disable = this.parentNode.querySelectorAll('.bluebg');
                                                if (disable.length) for (var node of disable) node.classList.remove('bluebg');
                                                number = lower;
                                                log.innerHTML = '<span>' + number + '</span>';
                                                if (number == lower) {
                                                    this.classList.add('bluebg');
                                                    decrement.classList.add('bluebg');
                                                }
                                            }
                                        });
                                        var decrement = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                                        table.appendChild(decrement);
                                        decrement.innerHTML = '<span>-</span>';
                                        if (number == lower) decrement.classList.add('bluebg');
                                        decrement.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                            if (_status.dragged) return;
                                            if (_status.justdragged) return;
                                            _status.tempNoButton = true;
                                            setTimeout(function () {
                                                _status.tempNoButton = false;
                                            }, 500);
                                            if (number == lower) {
                                                return;
                                            } else {
                                                var disable = this.parentNode.querySelectorAll('.bluebg');
                                                if (disable.length) for (var node of disable) node.classList.remove('bluebg');
                                                number--;
                                                log.innerHTML = '<span>' + number + '</span>';
                                                if (number == lower) {
                                                    tomin.classList.add('bluebg');
                                                    this.classList.add('bluebg');
                                                }
                                            }
                                        });
                                        var log = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                                        table.appendChild(log);
                                        log.innerHTML = '<span>' + number + '</span>';
                                        var increment = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                                        table.appendChild(increment);
                                        increment.innerHTML = '<span>+</span>';
                                        if (number == upper) increment.classList.add('bluebg');
                                        increment.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                            if (_status.dragged) return;
                                            if (_status.justdragged) return;
                                            _status.tempNoButton = true;
                                            setTimeout(function () {
                                                _status.tempNoButton = false;
                                            }, 500);
                                            if (number == upper) {
                                                return;
                                            } else {
                                                var disable = this.parentNode.querySelectorAll('.bluebg');
                                                if (disable.length) for (var node of disable) node.classList.remove('bluebg');
                                                number++;
                                                log.innerHTML = '<span>' + number + '</span>';
                                                if (number == upper) {
                                                    this.classList.add('bluebg');
                                                    tomax.classList.add('bluebg');
                                                }
                                            }
                                        });
                                        var tomax = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                                        table.appendChild(tomax);
                                        tomax.innerHTML = '<span>最大</span>';
                                        if (number == upper) tomax.classList.add('bluebg');
                                        tomax.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                            if (_status.dragged) return;
                                            if (_status.justdragged) return;
                                            _status.tempNoButton = true;
                                            setTimeout(function () {
                                                _status.tempNoButton = false;
                                            }, 500);
                                            if (number == upper) {
                                                return;
                                            } else {
                                                var disable = this.parentNode.querySelectorAll('.bluebg');
                                                if (disable.length) for (var node of disable) node.classList.remove('bluebg');
                                                number = upper;
                                                log.innerHTML = '<span>' + number + '</span>';
                                                if (number == upper) {
                                                    increment.classList.add('bluebg');
                                                    this.classList.add('bluebg');
                                                }
                                            }
                                        });
                                        dialog.content.appendChild(table);
                                        dialog.addText('当前剩余可分配体力上限:' + event.num);
                                        dialog.open();
                                        event.switchToAuto = function () {
                                            event.dialog.close();
                                            event.control.close();
                                            game.resume();
                                            _status.imchoosing = false;
                                        };
                                        event.control = ui.create.control('ok', function (control) {
                                            var result = event._result;
                                            result.num = number;
                                            result.bool = true;
                                            event.dialog.close();
                                            event.control.close();
                                            game.resume();
                                            _status.imchoosing = false;
                                        });
                                        game.pause();
                                        game.countChoose();
                                    },
                                    sourceSkill: 'gm_mengjing',
                                },
                            },
                        },
                        //————————————————————————————————————————————————————————————————————洛兰希尔
                        // 星辰
                        // 一名其他角色的回合开始/回合外获得牌时,你可以其至多X张手牌标记为<星>(X为当前游戏轮数)
                        // 当<星>离开原区域时,置于其武将牌上
                        // 其根据<星>的花色数量获得效果:
                        // 1:其的手牌数正向变化时,其需弃置Y+1张牌,否则受到无来源的Y点伤害
                        // 2:其使用牌造成伤害时,若有实体牌,你可令此伤害-Y,否则取消之
                        // 3:其体力值/手牌负向变化时,该值+Y
                        // 4:其体力值正向变化时,其失去Y个技能(Y为其武将牌上星的数量)
                        QQQ_xingchen: {
                            trigger: {
                                global: ['phaseBegin', 'gainEnd'],
                            },
                            forced: true,
                            filter(event, player, name) {
                                if (name == 'gainEnd' && _status.currentPhase == event.player) {
                                    return false;
                                }
                                return event.player.countCards('h') && event.player != player;
                            },
                            intro: {
                                name: '星',
                                content: 'expansion',
                            },
                            async content(event, trigger, player) {
                                const { result: { links } } = await player.choosePlayerCard(trigger.player, 'h', [1, game.roundNumber], 'visible')
                                    .set('filterButton', (b) => !b.link.gaintag?.includes('QQQ_xingchen'))
                                    .set('ai', (b) => get.value(b.link) * sgn(trigger.player.isEnemiesOf(player)));
                                if (links?.length) {
                                    trigger.player.addGaintag(links, 'QQQ_xingchen');
                                    game.log(trigger.player, links, '添加了星辰标记');
                                }
                            },
                            global: ['QQQ_xingchen_1', 'QQQ_xingchen_2', 'QQQ_xingchen_4', 'QQQ_xingchen_5'],
                            group: ['QQQ_xingchen_3'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: ['loseBegin'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.getParent('QQQ_xingchen_1', true)) {
                                            return false;
                                        }
                                        return event.cards?.some((q) => q.gaintag?.includes('QQQ_xingchen'));
                                    },
                                    async content(event, trigger, player) {
                                        const cards = trigger.cards.filter((q) => q.gaintag?.includes('QQQ_xingchen'));
                                        trigger.cards = trigger.cards.filter((q) => !cards.includes(q));
                                        player.addToExpansion(cards, 'gain2').gaintag = ['QQQ_xingchen'];
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: ['gainBegin'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        const cards = player.getCards('hx', (c) => c.gaintag?.includes('QQQ_xingchen'));
                                        const suits = cards.map((q) => q.suit).unique();
                                        const num = player.countCards('x', (c) => c.gaintag?.includes('QQQ_xingchen'));
                                        return suits.length > 0 && num > 0;
                                    },
                                    async content(event, trigger, player) {
                                        const num = player.countCards('x', (c) => c.gaintag?.includes('QQQ_xingchen'));
                                        const numx = num + 1;
                                        if (player.countCards('he')) {
                                            const { result: { cards } } = await player.chooseToDiscard(`弃置${numx}张牌,否则受到无来源的${num}点伤害`, 'he', numx)
                                                .set('ai', (c) => 6 - get.value(c));
                                            if (cards?.length) {
                                            }
                                            else {
                                                player.damage(num, 'nosource');
                                            }
                                        } else {
                                            player.damage(num, 'nosource');
                                        }
                                    },
                                },
                                3: {
                                    trigger: {
                                        global: ['damageBegin'],
                                    },
                                    filter(event, player) {
                                        if (event.source) {
                                            const cards = event.source.getCards('hx', (c) => c.gaintag?.includes('QQQ_xingchen'));
                                            const suits = cards.map((q) => q.suit).unique();
                                            const num = event.source.countCards('x', (c) => c.gaintag?.includes('QQQ_xingchen'));
                                            return event.card && suits.length > 1 && num > 0;
                                        }
                                    },
                                    check(event, player) {
                                        return sgn(event.player.isFriendsOf(player));
                                    },
                                    async content(event, trigger, player) {
                                        const num = trigger.source.countCards('x', (c) => c.gaintag?.includes('QQQ_xingchen'));
                                        if (trigger.cards?.length) {
                                            trigger.num -= num;
                                        }
                                        else {
                                            trigger.cancel();
                                        }
                                    },
                                },
                                4: {
                                    trigger: {
                                        player: ['changeHpBegin', 'loseBegin'],
                                    },
                                    forced: true,
                                    filter(event, player, name) {
                                        if (event.getParent('QQQ_xingchen_4', true)) {
                                            return false;
                                        }
                                        const cards = player.getCards('hx', (c) => c.gaintag?.includes('QQQ_xingchen'));
                                        const suits = cards.map((q) => q.suit).unique();
                                        const num = player.countCards('x', (c) => c.gaintag?.includes('QQQ_xingchen'));
                                        if (suits.length > 2 && num > 0) {
                                            if (name == 'changeHpBegin') {
                                                return event.num < 0;
                                            }
                                            return event.cards?.length;
                                        }
                                    },
                                    async content(event, trigger, player) {
                                        const num = player.countCards('x', (c) => c.gaintag?.includes('QQQ_xingchen'));
                                        if (event.triggername == 'changeHpBegin') {
                                            trigger.num -= num;
                                        }
                                        else {
                                            player.randomDiscard('he', num);
                                        }
                                    },
                                },
                                5: {
                                    trigger: {
                                        player: ['changeHpBegin'],
                                    },
                                    forced: true,
                                    filter(event, player, name) {
                                        const cards = player.getCards('hx', (c) => c.gaintag?.includes('QQQ_xingchen'));
                                        const suits = cards.map((q) => q.suit).unique();
                                        const num = player.countCards('x', (c) => c.gaintag?.includes('QQQ_xingchen'));
                                        return event.num > 0 && suits.length > 3 && num > 0;
                                    },
                                    async content(event, trigger, player) {
                                        const num = player.countCards('x', (c) => c.gaintag?.includes('QQQ_xingchen'));
                                        const skills = player.GAS().randomGets(num);
                                        player.removeSkill(skills);
                                    },
                                },
                            },
                        },//60
                        // 坠星
                        // 出牌阶段限一次,你可以弃置所有角色武将牌上的星,令其手牌上限,体力上限-Y(体力上限至多减至1)
                        QQQ_zhuixing: {
                            init(player) {
                                player.storage.QQQ_zhuixing = 0;
                            },
                            usable: 1,
                            enable: 'phaseUse',
                            async content(event, trigger, player) {
                                for (const npc of game.players) {
                                    const cards = npc.getCards('x', (c) => c.gaintag?.includes('QQQ_xingchen'));
                                    const num = cards.length;
                                    if (num > 0) {
                                        player.storage.QQQ_zhuixing += num;
                                        npc.discard(cards);
                                        npc.loseMaxHp(Math.min(num, npc.maxHp - 1));
                                        npc.addMark('QQQ_zhuixing_1', num);
                                    }
                                }
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player: 2,
                                },
                            },
                            global: ['QQQ_zhuixing_1'],
                            subSkill: {
                                1: {
                                    mark: true,
                                    intro: {
                                        content: 'mark',
                                    },
                                    mod: {
                                        maxHandcard(player, num) {
                                            return num - player.countMark('QQQ_zhuixing_1');
                                        },
                                    },
                                },
                            },
                        },//20
                        // 奇迹
                        // 当你体力值/体力上限负向变动时,若X＜Z,取消之(Z为累计被弃置的<星>总数)
                        // 当你进入濒死状态时,你可以弃置一名角色的所有手牌.若其中有<星>,你将体力值/体力上限回复至三点,并摸四张牌
                        QQQ_qiji: {
                            trigger: {
                                player: ['changeHpBegin', 'loseMaxHpBegin'],
                            },
                            filter(event, player, name) {
                                if (game.roundNumber < player.storage.QQQ_zhuixing) {
                                    if (name == 'changeHpBegin') {
                                        return event.num < 0;
                                    }
                                    return true;
                                }
                            },
                            forced: true,
                            async content(event, trigger, player) {
                                trigger.cancel();
                            },
                            group: ['QQQ_qiji_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: ['dying'],
                                    },
                                    forced: true,
                                    async content(event, trigger, player) {
                                        const { targets } = await player.chooseTarget('弃置一名角色的所有手牌', (c, p, t) => t.countCards('h'))
                                            .set('ai', (t) => -get.attitude(player, t)).forResult();
                                        if (targets?.length) {
                                            const cards = targets[0].getCards('h');
                                            if (cards.some((q) => q.gaintag?.includes('QQQ_xingchen'))) {
                                                player.maxHp = 3;
                                                player.hp = 3;
                                                player.draw(4);
                                            }
                                            targets[0].discard(cards);
                                        }
                                    },
                                }
                            }
                        },//20
                        // 风铃
                        // 锁定技,当你使用/打出一张牌时,你选择一名角色,你与其摸一张牌,每名角色每回合以此法获得的牌不得超过6张
                        QQQ_fengling: {
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            forced: true,
                            async content(event, trigger, player) {
                                const { targets } = await player.chooseTarget('你与其摸一张牌')
                                    .set('ai', (t) => {
                                        if (player.hasSkill('QQQ_xingchen') && t != _status.currentPhase) {
                                            return 10 - get.attitude(player, t);
                                        }
                                        return get.attitude(player, t);
                                    }).forResult();
                                if (targets?.length) {
                                    if (!(player.storage.QQQ_fengling > 5)) {
                                        player.addMark('QQQ_fengling');
                                        player.draw();
                                    }
                                    if (!(targets[0].storage.QQQ_fengling > 5)) {
                                        targets[0].addMark('QQQ_fengling');
                                        targets[0].draw();
                                    }
                                }
                            },
                            group: ['QQQ_fengling_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: ['phaseAfter'],
                                    },
                                    forced: true,
                                    popup: false,
                                    filter(event, player, name) {
                                        return game.players.some((q) => q.storage.QQQ_fengling > 0);
                                    },
                                    async content(event, trigger, player) {
                                        for (const npc of game.players) {
                                            npc.storage.QQQ_fengling = 0;
                                        }
                                    },
                                },
                            },
                        },//10
                        // 魔女
                        // 其它角色的手牌对你可见,你使用牌时不受距离和次数限制,其他角色均能成为你的合法目标,你的技能在本局游戏内不会失效且不会被其他角色获得
                        QQQ_monv: {
                            _priority: Infinity,
                            mod: {
                                cardEnabled() {
                                    return 'unchanged';
                                },
                                cardEnabled2() {
                                    return 'unchanged';
                                },
                                playerEnabled() {
                                    return 'unchanged';
                                },
                                cardRespondable() {
                                    return 'unchanged';
                                },
                                cardSavable() {
                                    return 'unchanged';
                                },
                                targetInRange() {
                                    return true;
                                },
                                cardUsable() {
                                    return Infinity;
                                },
                            },
                            init(player) {
                                if (!game.monv) {
                                    game.monv = player;
                                    setInterval(function () {
                                        player.disabledSlots = {};
                                        player.disabledSkills = {};
                                        player.storage.skill_blocker = [];
                                        const skills = player.GAS();
                                        if (skills.length) {
                                            for (const npc of game.players) {
                                                if (npc != player) {
                                                    for (const skill of npc.GAS()) {
                                                        if (skills.includes(skill)) {
                                                            npc.removeSkill(skill);
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }, 1000);
                                }
                            },
                            ai: {
                                viewHandcard: true,
                            },
                            global: ['QQQ_monv_1'],
                            subSkill: {
                                1: {
                                    _priority: Infinity,
                                    mod: {
                                        targetEnabled(card, player, target) {
                                            if (player == game.monv) {
                                                return 'unchanged';
                                            }
                                        },
                                    },
                                },
                            },
                        },//30
                    },
                    translate: {
                        //————————————————————————————————————————————————————————————————————洛兰希尔
                        QQQ_luolanxier: '洛兰希尔',//60
                        QQQ_xingchen: '星辰',//60
                        QQQ_xingchen_info: '一名其他角色的回合开始/回合外获得牌后,你可以其至多X张手牌标记为<星>(X为当前游戏轮数)<br>当<星>离开原区域时,置于其武将牌上<br>其根据<星>的花色数量获得效果:<br>1:其的手牌数正向变化时,其需弃置Y+1张牌,否则受到无来源的Y点伤害<br>2:其使用牌造成伤害时,若有实体牌,你可令此伤害-Y,否则取消之<br>3:其体力值/手牌负向变化时,该值+Y<br>4:其体力值正向变化时,其失去Y个技能(Y为其武将牌上星的数量)',//60
                        QQQ_zhuixing: '坠星',//20
                        QQQ_zhuixing_info: '出牌阶段限一次,你可以弃置所有角色武将牌上的星,令其手牌上限,体力上限-Y(体力上限至多减至1)',//20
                        QQQ_qiji: '奇迹',//20
                        QQQ_qiji_info: '当你体力值/体力上限负向变动时,若X＜Z,取消之(Z为累计被弃置的<星>总数)<br>当你进入濒死状态时,你可以弃置一名角色的所有手牌.若其中有<星>,你将体力值/体力上限回复至三点,并摸四张牌',//20
                        QQQ_fengling: '风铃',//10
                        QQQ_fengling_info: '锁定技,当你使用/打出一张牌时,你选择一名角色,你与其摸一张牌,每名角色每回合以此法获得的牌不得超过6张',//10
                        QQQ_monv: '魔女',//30
                        QQQ_monv_info: '其它角色的手牌对你可见,你使用牌时不受距离和次数限制,其他角色均能成为你的合法目标,你的技能在本局游戏内不会失效且不会被其他角色获得',//30
                        c_zheyu: '逆·愚者',
                        IXION: 'IXION',
                        qy_jiekelide: '杰克·里德',
                        qy_haixing: '海星',
                        qy_shenxiang: '神像',
                        wuli_xuedinge: '薛定谔',
                        愚者: '愚者',
                        冉尘瑶: '冉尘瑶',
                        阿赖耶识: '阿赖耶识',
                        龙母: '龙母',
                        银河: '银河',
                        gm_white: '白行瑶',
                        梦: '梦',
                        gm_character: '测试',
                        熵: '熵',
                        奈亚: '奈亚',
                        宫聆月: '宫聆月',
                        织绾烟: '织绾烟',
                        eclipse: 'eclipse',
                        林白芷: '林白芷',
                        安姝柒: '安姝柒',
                        c_shangzeng: '熵增',
                        c_shang_lose: '熵',
                        c_shangzeng_info: '游戏开始前,你可以向牌堆中添加42张熵(基本牌,均为♠️️,不可正面向上离开一名角色的手牌区(失序不受此影响));每名角色的回合开始前,你可以将一张熵置于其手牌中,视为对其使用了一张延时类锦囊',
                        c_shixu: '失序',
                        c_shixu_info: '其它角色的弃牌阶段结束后,你可以观看其手牌,依次弃置其中的熵,每弃置一张你可选择一项:1视为使用此牌对其造成一点伤害2,视为其使用此牌对自己造成了一点伤害',
                        c_chonggou: '重构',
                        c_chonggou_info: '你的摸排阶段额外摸x张牌,获得x点护甲,x为你手牌中熵的数量.熵不计入你的手牌上限',
                        c_diange: '点歌',
                        c_diange_info: '一名角色的出牌阶段限一次,其可以声明一种牌的类型,将牌库中第一张符合其声明的牌置于你的<点歌版>(类似于仁区)(至多15张牌);当有牌不因溢出而离开<点歌版>时,你摸一张牌',
                        c_yingchang: '硬唱',
                        c_yingchang_info: '出牌阶段限一次,你可以依次为<点歌版>中的牌选择一个合理的目标使用之(无距离和次数限制),若其不能被使用,则你可以用一张手牌替换之',
                        c_xiaban: '下班',
                        c_xiaban_info: '锁定技,(不可被封印或移除)当弃牌堆的牌大于或等于120时:若其他角色的手牌数均少于3,你立即以平局结束游戏.反之,手牌数大于等于3的角色需将3张牌至于你的<点歌版>,当<点歌版>中的牌为0时,你立即以平局结束游戏',
                        c_jiou: '奇偶',
                        c_jiou_info: '锁定技,在奇数回合,你不收到非属性伤害,在偶数回合,你不收到属性伤害.每当你成为带有<伤害>标签的牌的目标而未受到伤害时,获得一个<巢>标记',
                        c_longchao: '龙巢',
                        c_longchao_info: '锁定技,根据你的"巢"标记执行以下效果:大于等于1:出牌阶段限x次,若你当前体力值等于体力上限,则可以弃置一张桃,获得一点护甲;大于等于3:跳过你的摸排阶段,改为从牌堆底获得x张牌 你的手牌上限+x,进攻距离+x;大于等于5,其它角色的手牌对你可见;大于等于9:你成为虚拟牌或转换牌的目标时,取消之.;大于等于13:在你的回合外:封印其它角色的非锁定技;在你的回合内,封印其它角色的锁定技.(x为巢标记的数量)',
                        c_guiyuan: '归源',
                        c_guiyuan_info: '回合结束阶段,你可以跳过你的下一个判定/摸排/出牌/弃牌阶段,在下一个回合结束阶段对所有敌方角色各造成一点火焰伤害,你可以从牌堆中获得2张桃',
                        c_reji: '热寂',
                        c_reji_info: '游戏开始后,每过14S,你的防御距离+1.每当时间为42的倍数时,你重置你的防御距离为0,并另除你以外的随机一名角色进入濒死状态',
                        c_suxing: '塑星',
                        c_suxing_su: '猎户',
                        c_suxing_su_info: '你不需要进行判定同时获得两种效果',
                        c_suxing_su0: '参宿一',
                        c_suxing_su0_info: '你的判定阶段开始前,你可以进行判定:红:你令其它角色不可打出/使用任何手牌直至其回合结束.黑:你克令其它角色失去所有技能直至其回合开始前',
                        c_suxing_su1: '参宿二',
                        c_suxing_damage: '参宿二',
                        c_suxing_target: '参宿二',
                        c_suxing_su1_info: '你的判定阶段开始前,你可以进行一次判定,红:你使用伤害类牌可以增加x个目标.黑:你造成的伤害加x且不会触发任何技能',
                        c_suxing_su2: '参宿三',
                        c_suxing_su2_info: '你造成伤害后,你可以令其一次判定:黑:其翻面.红:你获得其一张牌',
                        c_suxing_xing: '七星',
                        c_suxing_xing_info: '其它角色的回合开始前/你受到伤害后,你终止当前一切结算,立即摸两张牌并执行一个出牌阶段',
                        c_suxing_xing0: '天枢星',
                        c_suxing_xing0_info: '当你成为虚拟卡牌/转化牌的目标时,取消之,并获得对应的实体卡牌',
                        c_suxing_xing1: '天璇星',
                        c_suxing_xing1_info: '每回合限一次,当你成为其它角色伤害类卡牌的唯一目标时你可以将使用者和使用目标交换',
                        c_suxing_xing2: '天权星',
                        c_suxing_xing2_info: '效果同集智,但包含延时累锦囊牌',
                        c_suxing_xing3: '玉衡星',
                        c_suxing_xing3_info: '你的回合开始前,你可以选择一张装备牌置入你的装备区',
                        c_suxing_xing4: '开阳星',
                        c_suxing_xing4_info: '当你打出或使用一张红色牌时,你可以摸一张牌',
                        c_suxing_xing5: '摇光星',
                        c_suxing_xing5_info: '防止你的体力流失/体力上限减少',
                        c_suxing_xing6: '天玑星',
                        c_suxing_xing6_info: '你不能成为延时类锦囊牌或顺手牵羊的目标',
                        c_suxing_info: '游戏开始时/你的回合开始前/有角色造成伤害后,你可以点亮一颗恒星,获得其对应效果.(本技能或通过本技能获得的效果不能被封印或失去)',
                        c_qiqing: '七情',
                        c_qiqing_xi: '喜',
                        c_qiqing_nu: '怒',
                        c_qiqing_you: '忧',
                        c_qiqing_si: '思',
                        c_qiqing_bei: '悲',
                        c_qiqing_kong: '恐',
                        c_qiqing_kong2: '恐',
                        c_qiqing_jing: '惊',
                        c_qiqing_info: '游戏开始时/你的回合开始前.你可以为所有角色分配/调整<喜、怒、忧、思、悲、恐、惊>.(可叠加)',
                        c_xingyun: '星陨',
                        c_xingyun_info: '出牌阶段限一次,你可以选择一名角色执行以下一项1:令其手牌上限减少至0;2:清空武将牌上的所有标记3:将其体力上限更改为与体力值相同',
                        c_yunxing: '陨星',
                        c_yunxing_info: '其它角色的出牌阶段开始时(除正愚者外),你令其随机执行以下一项:1:你获得其全部手牌并令其武将牌翻面;2:失去装备区3:令正愚者进行立即一个额外的摸排和出牌阶段',
                        c_yunsheng: '允生',
                        c_yunsheng_info: '你的回合开始阶段,你可以令体力值大于等于你的角色摸一张牌将体力值回复至体力上限,并摸(4-x)(至少为1)张牌(x为其回复的体力值)',
                        c_yunsi: '允死',
                        c_yunsi_info: '其它角色的回合开始阶段,你可令体力值小于你的角色受到(x-4)点神圣伤害,(x为你已损失体力值)(至少为1);当有角色体力值为1时,你可令其失去所有所有技能后立即死亡',
                        c_shenyu: '神谕',
                        c_shenyu_info: '锁定技,你的技能不会被封印或失去,当进行判定时,你可以指定判定牌的颜色和点数,且不能再更改',
                        c_zhengni: '正逆',
                        c_zhengni_info: '锁定技,游戏开始时,你召唤逆·愚者成为你的下家,其体力值,手牌数为场上所有角色的体力值之和,阵营与你相同,其拥有技能<陨星>,<允死>,<神谕>当你成为其它角色卡牌的目标时,若该卡牌的目标不包含逆·愚者,取消之.当你受到伤害/失去体力/失去体力上限/进入濒死状态时,若场上有逆·愚者存活,取消之',
                        gm_emeng: '噩梦',
                        gm_emeng_info: '锁定技:游戏开始时,除你以外所有角色进入混乱状态1回合;一名角色的回合结束阶段,若其武将牌上有牌,其进入混乱状态一回合,你获得其武将牌上的所有牌',
                        gm_bansheng: '伴生',
                        gm_bansheng_info: '锁定技,游戏开始时,你将<星图><命盘>置入你的装备区,当你的装备去区中没有命盘时,你将体力上限改为3;当你的装备区中没有<星图>时,你使用牌不能指定其它角色为目标',
                        gm_jiangling: '降临',
                        gm_jiangling_info: '觉醒技:你的回合开始阶段,若游戏轮数不小于4且你的装备区中有<星图>、<命盘>,你获得技能<法则>',
                        gm_faze: '法则',
                        gm_faze_info: '当有牌不因使用而离开你的装备区时,你使用之;其它角色造成的伤害-1;当其它角色在其回合外使用非锁定技时/有角色的体力值/体力上限增加时,你令其立即死亡',
                        gm_mingpan_skill: '命盘',
                        gm_mingpan_cards: '命盘',
                        gm_xingtu_skill: '星图',
                        in_tansuo: '探索',
                        in_tansuo_info: '出牌阶段限(x+1)次,你可以声明一种牌的类型,并亮出牌堆顶的3张牌:若你声明的为基本牌且亮出的牌中有与你声明类型相同的牌,将其置于武将牌上视作<人口>若你声明的为锦囊牌且亮出的牌中有锦囊牌,将其置于武将牌上视作<电力>,若你声明的为装备牌且其中有装备牌,将其置于武将牌上<资源>(x为你发动跃迁的次数)(每个类型至多3张牌)',
                        in_renkou: '人口',
                        in_renkou_info: '',
                        in_dianli: '电力',
                        in_dianli_info: '',
                        in_ziyuan: '资源',
                        in_ziyuan_info: '',
                        in_qianyue: '跃迁',
                        in_qianyue_info: '你的回合结束阶段,若你<人口><资源><电力>三个区域中牌数量相等且不为0,你将其全部弃置,并与场上一名角色交换位置,增加一点体力上限并回复一点体力',
                        in_yunying: '运营',
                        in_yunying_info: '弃牌阶段结束后,你可以从<人口><资源><电力>中至多(x+1)个标记区域中各弃置至多一张牌,并执行以下效果:若其中有基本牌,你摸一张牌;若其中有锦囊牌,你可以获得一点护甲;若其中有装备牌,你装备之.当【探索】使【人口】【电力】【资源】溢出而移除时,你失去一点体力并执行对应的【运营】效果',
                        l_in_yuebeng: '月崩',
                        l_in_yuebeng_info: '限定技,出牌阶段,你可无视条件发动一次【跃迁】并令交换座次的目标角色立即进入濒死状态',
                        qy_youli: '游历',
                        qy_youli_info: '任意角色的出牌阶段开始时你可以记录此时其的手牌数,并将其与弃牌阶段开始前其的手牌数进行比较,若增加了X,你可以观看牌堆顶的X张牌并将它们分配给至多X名角色;若减少了Y,你可以弃置至多Y名角色的Y张区域内的牌',
                        qy_daxuan: '大选',
                        qy_daxuan_info: '觉醒技,你的回合结束阶段时若场上有角色的手牌数为0,你获得技能【制宪】',
                        qy_zhixian: '制宪',
                        qy_zhixian_info: '任意角色的摸牌阶段开始前,若其手牌数大于等于4,你可以对其造成一点伤害;若小于等于1你可以另其将手牌摸至其体力上限;若为2或3,你可以令其摸一张牌或弃一张牌',
                        qy_chongshangabalaqiya: '重上阿巴拉契亚',
                        qy_chongshangabalaqiya_info: '限定技,锁定技,当你进入濒死状态时,你增加X点体力上限并回复X点体力和摸X张牌(X为你发动过游历的角色数)',
                        qy_jiniantang: '纪念堂',
                        qy_jiniantang_info: '锁定技,你的判定阶段开始前,若场上所有角色的手牌数均少于你的体力值,你使用牌不能指定其它角色为目标直至你的回合结束',
                        qy_dibaotianxing: '地爆天星',
                        qy_dibaotianxing_info: '出牌阶段限一次,你可以对一名其他角色造成X点伤害(X为你已损失的体力值);若其未因此死亡,其获得技能【海星罐头】',
                        qy_haixingguantou: '海星罐头',
                        qy_haixingguantou_info: '锁定技,每当你对拥有【地爆天星】的角色造成伤害时,其额外失去一点体力上限,你增加一点体力上限',
                        qy_lixiang: '理想',
                        qy_lixiang_info: '锁定技,游戏开始时或你的回合开始前,你令体力值少于或等于你的角色增加一个<禾>标记;当有<禾>标记的角色进入濒死状态时,你减少一点体力上限,其移去所有的禾标记,将体力回复至1点并摸X张牌(X为移去的<禾>标记数);你的回合开始时,若场上所有其他角色的体力值均大于你,则你此技能失效三回合,将体力值回复至体力上限,再将【鏖兵六合】的摸牌阶段摸的摸牌数改为摸3张',
                        qy_aobingliuhe: '鏖兵六合',
                        qy_aobingliuhe_info: '当你使用带有「伤害」标签的牌时,你可以额外指定任意名没有<禾>标记的角色为目标;摸牌阶段开始时,你可以改为摸X张牌(X为场上的<禾>标记总数)',
                        qy_kuilei: '傀儡',
                        qy_kuilei_info: '锁定技,你的判定阶段开始前,若场上没有<禾>标记,你所有技能失效直到回合结束且你的下个出牌阶段由场上手牌数最多的角色控制',
                        wuli_hubuyuanli: '互补原理',
                        wuli_hubuyuanli_info: '锁定技,每当你因使用或打出而失去一张红色牌/黑色牌时,你获得一个【波】/【粒】标记',
                        wuli_tansuo: '坍缩',
                        wuli_tansuo_info: '锁定技,结束阶段,若你【波】【粒】标记数相等,则你失去所有【波】【粒】标记并获得等同于此次失去【粒】标记数目的护甲',
                        wuli_buqueding: '不确定',
                        wuli_buqueding_info: '出牌阶段,若<br>①你的【粒】大于【波】,你可以将一张黑色牌当做任意一张基本牌使用或打出<br>②若你的【波】大于【粒】,你可以将一张红色牌当做任意一张非延时锦囊牌使用或打出',
                        wuli_zhushou: '助手',
                        wuli_zhushou_info: '锁定技,你于摸牌阶段外摸牌后,若摸牌数不少于2,须将x张牌交给一名其他角色(x为此次摸牌数-1)',
                        wuli_buqueding2: '不确定',
                        wuli_buqueding2_info: '',
                        叠加: '叠加',
                        叠加_info: '<span class="yellowtext"><span class="yellowtext"><span class="yellowtext"><span class="yellowtext"><span class="yellowtext"><span class="yellowtext"><span class="yellowtext"><span class="yellowtext"><span class="yellowtext"><span class="yellowtext"><span class="yellowtext"><span class="yellowtext"><span class="yellowtext"><span class="yellowtext"><span class="yellowtext"><span class="yellowtext"><span class="yellowtext"><span class="yellowtext"><span class="yellowtext"><span class="yellowtext"><span class="yellowtext"><span class="yellowtext"><span class="yellowtext"><span class="yellowtext"><span class="yellowtext">锁定技</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>,你的回合外,你获得的牌均会在当前回合结束后置入弃牌堆;你的回合内,当你不因〖自书〗而获得牌时,你摸一张牌',
                        y_shiyue: '誓约',
                        y_shiyue_info: '其它角色的回合开始阶段,你可在牌的类型/花色/点数中各指定一项,直到其下一个回合开始阶段.当其使用牌时,若此牌与你所指定的类型/花色/点数有至少一项不同,则:你令其失去一点体力;至少两项不同:你令此牌无效,若其武将牌未横置,横置之;三项不同:你令其立即死亡',
                        y_shiyue_buff: '誓约',
                        y_xingyan: '星衍',
                        y_xingyan_info: '出牌阶段限一次:你可以展示牌堆顶的一张牌:若其可以使用或打出(基本牌或普通锦囊牌),你可选择合法的目标将牌堆中所有同名牌对目标使用或打出(没有距离和次数的限制);若为延时类锦囊牌,你令所有敌方武将牌翻面;若为装备牌,你废除所有敌方角色的装备区',
                        y_yanmie: '湮灭',
                        y_yanmie_info: '限定技:出牌阶段,你令所有敌方角色依次选择失去x点体力上限及y个技能,z(x与y之和)需大于等于你的体力值与当前游戏轮数之和,z最少的角色立即死亡(不触发技能)',
                        y_fanyan: '反演',
                        y_fanyan_info: '当你成为其他角色卡牌的唯一目标时,你可将该牌使用者与目标交换',
                        y_powang: '破妄',
                        y_powang_info: '锁定技:你不会被横置／翻面／成为延时锦囊牌的目标,当你将要失去体力上限/失去体力时,防止之',
                        邈渺: '邈渺',
                        邈渺_info: '缝合',
                        gm_qiyuan: '祈愿',
                        gm_qiyuan_info: '游戏开始时/你的回合开始阶段/你受到伤害后你可以声明一种非基本牌牌名,你将排队中所有的同名牌置于武将牌上,称之为<愿>,并执行以下规则其它角色的回合开始阶段,你可以移去一半的<愿>(至少一个),令其下个出牌阶段改为由你操控;当一名角色于回合内获得第(13-X)(至少为3)张牌时,其立即死亡;你可以移去一个<愿>来跳过你的一个阶段;当你使用牌指定唯一目标时,你可以移去一个<愿>令此牌额外指定至多x个目标或至多额外结算x次;你的回合结束阶段/当你处于濒死阶段时,你可以移去一个<愿>重置武将牌并将体力值回复到体力上限,摸x张牌',
                        gm_mengjing: '梦境',
                        gm_mengjing_info: '游戏开始时你令除你以外的所有全场体力值体力值翻倍,当有角色(以下皆为除你以外)受到伤害时,其额外流失x点体力(x为当前游戏轮数);令每名角色失去武将牌上的所有技能并令其随机获得Y个标包武将技能(Y为其原有技能数),当有角色死亡时,你可将其的体力上限任意分配给任意角色',
                    },
                };
                for (const i in QQQ.character) {
                    const info = QQQ.character[i];
                    if (!info.hp) {
                        info.hp = 4;
                    }
                    if (!info.maxHp) {
                        info.maxHp = 4;
                    }
                    info.trashBin = [`ext:eclipse/image/${i}.jpg`];
                    info.dieAudios = [`ext:eclipse/audio/${i}.mp3`];
                }
                lib.config.all.characters.add('eclipse');
                lib.config.characters.add('eclipse');
                lib.translate.eclipse_character_config = `eclipse`;
                return QQQ;
            });
            game.import('card', (lib, game, ui, get, ai, _status) => {
                const QQQ = {
                    name: 'eclipse',
                    connect: true,
                    card: {
                        c_shang: {
                            type: 'basic',
                            fullskin: true,
                            global: 'c_shang_lose',
                            content() { },
                            ai: {
                                value: -5,
                                useful: 6,
                                result: {
                                    player: 1,
                                },
                                order: 7.5,
                            },
                        },
                        gm_mingpan: {
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip5',
                            global: ['gm_mingpan_cards'],
                            skills: ['gm_mingpan_skill'],
                            ai: {
                                basic: {
                                    equipValue: 7.5,
                                    order: 7.5,
                                    useful: 2,
                                    value: 7.5,
                                },
                                result: {
                                    target: (player, target, card) => get.equipResult(player, target, card),
                                },
                            },
                            enable: true,
                            selectTarget: -1,
                            filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                if (
                                    !card?.cards.some((card) => {
                                        return get.position(card, true) !== 'o';
                                    })
                                ) {
                                    target.equip(card);
                                }
                            },
                            toself: true,
                        },
                        gm_xingtu: {
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip2',
                            skills: ['gm_xingtu_skill'],
                            ai: {
                                basic: {
                                    equipValue: 7.5,
                                    order: 7.5,
                                    useful: 2,
                                    value: 7.5,
                                },
                                result: {
                                    target: (player, target, card) => get.equipResult(player, target, card),
                                },
                            },
                            enable: true,
                            selectTarget: -1,
                            filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                if (
                                    !card?.cards.some((card) => {
                                        return get.position(card, true) !== 'o';
                                    })
                                ) {
                                    target.equip(card);
                                }
                            },
                            toself: true,
                        },
                    },
                    translate: {
                        c_shang: '熵',
                        c_shang_info: '此牌无法正面向上离开手牌区(仅〖失序〗可令此牌失去)',
                        gm_mingpan: '命盘',
                        gm_mingpan_info: '宝物牌,一名角色的回合开始阶段,你可与其同时减少一点体力上限而后进行判定,若判定牌的点数小于其体力上限,你将这张判定牌置于其武将牌上,你重复此流程',
                        gm_xingtu: '星图',
                        gm_xingtu_info: '防具牌.当有角色不因摸牌阶段而从牌堆中获得牌时,你可立即终止当前角色回合,并将该角色(指摸牌的角色)的所有手牌以任意顺序置于牌堆顶',
                        eclipse: 'eclipse',
                    },
                };
                for (const i in QQQ.card) {
                    const info = QQQ.card[i];
                    info.image = `ext:eclipse/image/${i}.jpg`;
                }
                lib.config.all.cards.add('eclipse');
                lib.config.cards.add('eclipse');
                lib.translate.eclipse_card_config = 'eclipse';
                return QQQ;
            });
        },
        package: {
            intro: '<br><br><span style="color: gold">潜水的火修复版<br>『无名杀扩展大全群』:771901025</span><br><br>',
            author: '',
            version: '1.0',
        },
    };
});
